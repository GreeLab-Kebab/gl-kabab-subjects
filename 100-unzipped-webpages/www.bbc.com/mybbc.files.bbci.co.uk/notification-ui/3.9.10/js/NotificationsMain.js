/*! Build 51b1806 at Wed Sep 04 2019 14:05:49 GMT+0000 (Coordinated Universal Time) for undefined */
define(function() {
    return function(t) {
        function n(n) {
            for (var e, r, o = n[0], a = n[1], s = 0, u = []; s < o.length; s++) r = o[s], i[r] && u.push(i[r][0]), i[r] = 0;
            for (e in a) Object.prototype.hasOwnProperty.call(a, e) && (t[e] = a[e]);
            for (c && c(n); u.length;) u.shift()()
        }
        var e = {},
            i = {
                0: 0
            };

        function r(n) {
            if (e[n]) return e[n].exports;
            var i = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
        }
        r.e = function(t) {
            var n = [],
                e = i[t];
            if (0 !== e)
                if (e) n.push(e[2]);
                else {
                    var o = new Promise(function(n, r) {
                        e = i[t] = [n, r]
                    });
                    n.push(e[2] = o);
                    var a, s = document.createElement("script");
                    s.charset = "utf-8", s.timeout = 120, r.nc && s.setAttribute("nonce", r.nc), s.src = function(t) {
                        return r.p + "" + t + ".NotificationsMain.js"
                    }(t), a = function(n) {
                        s.onerror = s.onload = null, clearTimeout(c);
                        var e = i[t];
                        if (0 !== e) {
                            if (e) {
                                var r = n && ("load" === n.type ? "missing" : n.type),
                                    o = n && n.target && n.target.src,
                                    a = new Error("Loading chunk " + t + " failed.\n(" + r + ": " + o + ")");
                                a.type = r, a.request = o, e[1](a)
                            }
                            i[t] = void 0
                        }
                    };
                    var c = setTimeout(function() {
                        a({
                            type: "timeout",
                            target: s
                        })
                    }, 12e4);
                    s.onerror = s.onload = a, document.head.appendChild(s)
                }
            return Promise.all(n)
        }, r.m = t, r.c = e, r.d = function(t, n, e) {
            r.o(t, n) || Object.defineProperty(t, n, {
                enumerable: !0,
                get: e
            })
        }, r.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            })
        }, r.t = function(t, n) {
            if (1 & n && (t = r(t)), 8 & n) return t;
            if (4 & n && "object" == typeof t && t && t.__esModule) return t;
            var e = Object.create(null);
            if (r.r(e), Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & n && "string" != typeof t)
                for (var i in t) r.d(e, i, function(n) {
                    return t[n]
                }.bind(null, i));
            return e
        }, r.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return r.d(n, "a", n), n
        }, r.o = function(t, n) {
            return Object.prototype.hasOwnProperty.call(t, n)
        }, r.p = "/", r.oe = function(t) {
            throw console.error(t), t
        };
        var o = window.notifWebpackP = window.notifWebpackP || [],
            a = o.push.bind(o);
        o.push = n, o = o.slice();
        for (var s = 0; s < o.length; s++) n(o[s]);
        var c = a;
        return r(r.s = 128)
    }([function(t, n, e) {
        var i = e(2),
            r = e(10),
            o = e(15),
            a = e(12),
            s = e(23),
            c = function(t, n, e) {
                var u, f, l, d, h = t & c.F,
                    p = t & c.G,
                    v = t & c.S,
                    g = t & c.P,
                    y = t & c.B,
                    m = p ? i : v ? i[n] || (i[n] = {}) : (i[n] || {}).prototype,
                    b = p ? r : r[n] || (r[n] = {}),
                    w = b.prototype || (b.prototype = {});
                for (u in p && (e = n), e) l = ((f = !h && m && void 0 !== m[u]) ? m : e)[u], d = y && f ? s(l, i) : g && "function" == typeof l ? s(Function.call, l) : l, m && a(m, u, l, t & c.U), b[u] != l && o(b, u, d), g && w[u] != l && (w[u] = l)
            };
        i.core = r, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, t.exports = c
    }, function(t, n) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, n) {
        var e = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = e)
    }, function(t, n) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, n, e) {
        var i = e(3);
        t.exports = function(t) {
            if (!i(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, n, e) {
        var i = e(69)("wks"),
            r = e(35),
            o = e(2).Symbol,
            a = "function" == typeof o;
        (t.exports = function(t) {
            return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
        }).store = i
    }, function(t, n, e) {
        "use strict";
        e.r(n),
            function(t, i) {
                var r = e(33),
                    o = e(22);

                function a() {
                    return (a = Object.assign || function(t) {
                        for (var n = 1; n < arguments.length; n++) {
                            var e = arguments[n];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
                        }
                        return t
                    }).apply(this, arguments)
                }
                var s, c = e(123),
                    u = e(32),
                    f = ["IPLAYER", "MUSIC"],
                    l = ["tv", "music", "radio", "e2etest"];

                function d(t) {
                    if (t.status >= 200 && t.status < 400) return t;
                    var n = new Error("HTTP request failed ".concat(t.statusText));
                    throw n.response = t, n
                }
                n.default = {
                    friendlyProductNames: {
                        IPLAYER: "iPlayer",
                        MUSIC: "Music"
                    },
                    get: function() {
                        return s
                    },
                    filterSubscriptionDomains: function(t) {
                        if (!t.topic) return !1;
                        var n = t.topic.split(":");
                        return !("urn" !== n[0] || "bbc" !== n[1] || !n[2]) && -1 !== l.indexOf(n[2])
                    },
                    fetch: function() {
                        var n = this;
                        return !1 === (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && s ? t.resolve(s) : r.b().catch(function(t) {
                            throw t
                        }).then(function() {
                            return c(n.fetchCorrectDomainEndpoint(u.env.preferencesUrls.getUK, u.env.preferencesUrls.get), {
                                credentials: "include"
                            })
                        }).catch(function(t) {
                            throw t
                        }).then(function(t) {
                            if ((s = t).key) throw new Error(s);
                            return s.preferences || (s.preferences = {
                                readFilter: void 0 !== o.a.filter ? JSON.stringify(o.a.getCleanArray()) : null
                            }), s.preferences.productsEnabled || (s.preferences.productsEnabled = f.map(function(t) {
                                return {
                                    product: t,
                                    enabled: !0
                                }
                            })), s.subscriptions && (s.subscriptions = s.subscriptions.filter(n.filterSubscriptionDomains)), s
                        })
                    },
                    getHostname: function() {
                        return window.location.hostname
                    },
                    fetchCorrectDomainEndpoint: function(t, n) {
                        return -1 !== this.getHostname().indexOf(".com") ? n : t
                    },
                    set: function(t) {
                        var n = this;
                        if (!s) return !1;
                        var e = a(s.preferences || {}, t.preferences);
                        return s.preferences = e, delete s.preferences.lastRead, delete s.preferences.currentDateTime, r.b().catch(function(t) {
                            throw t
                        }).then(function() {
                            return i(n.fetchCorrectDomainEndpoint(u.env.preferencesUrls.postPreferenceUK, u.env.preferencesUrls.postPreference), {
                                method: "POST",
                                credentials: "include",
                                headers: {
                                    Accept: "*/*",
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(s.preferences)
                            })
                        }).then(d).catch(function(t) {
                            throw t
                        }).then(function() {
                            delete s.preferences.onboardingFlag, n.fetch()
                        })
                    },
                    updateRead: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.set({
                            preferences: {
                                readFilter: void 0 !== o.a.filter ? JSON.stringify(o.a.getCleanArray()) : null,
                                lastReadFlag: t
                            }
                        })
                    },
                    sendClick: function(t) {
                        var n = this,
                            e = {
                                preference: s.preferences,
                                notificationId: t.id,
                                topicUrn: t.topic[0]
                            };
                        return r.b().catch(function(t) {
                            throw t
                        }).then(function() {
                            return i(n.fetchCorrectDomainEndpoint(u.env.preferencesUrls.postClickUK, u.env.preferencesUrls.postClick), {
                                method: "POST",
                                credentials: "include",
                                headers: {
                                    Accept: "*/*",
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify(e)
                            })
                        }).then(d).catch(function(t) {
                            throw t
                        })
                    },
                    countActiveSubscriptions: function() {
                        var t = 0;
                        return s.subscriptions && s.subscriptions.forEach(function(n) {
                            n.enabled && t++
                        }), t
                    },
                    updateUserOnBoarding: function(t) {
                        var n = s.preferences || {};
                        n || (n = {
                            lastReadFlag: !0,
                            productsEnabled: [],
                            readFilter: o.a.getCleanArray()
                        }, f.forEach(function(t) {
                            n.productsEnabled.push({
                                product: t,
                                enabled: !0
                            })
                        })), n.hasOnboarded = !0, n.onboardingFlag = !0, n.lastReadFlag = !0, this.set(s).then(t).catch(function(n) {
                            throw t(n), n
                        })
                    }
                }
            }.call(this, e(29), e(64))
    }, function(t, n, e) {
        var i = e(4),
            r = e(95),
            o = e(30),
            a = Object.defineProperty;
        n.f = e(9) ? Object.defineProperty : function(t, n, e) {
            if (i(t), n = o(n, !0), i(e), r) try {
                return a(t, n, e)
            } catch (t) {}
            if ("get" in e || "set" in e) throw TypeError("Accessors not supported!");
            return "value" in e && (t[n] = e.value), t
        }
    }, function(t, n, e) {
        (function(t) { /* Riot v3.13.2, @license MIT */
            ! function(n) {
                "use strict";

                function e(t, n) {
                    return (n || document).querySelector(t)
                }
                var i, r, o = [],
                    a = {},
                    s = "yield",
                    c = "__global_mixin",
                    u = "riot-",
                    f = ["ref", "data-ref"],
                    l = "data-is",
                    d = "if",
                    h = "each",
                    p = "no-reorder",
                    v = "show",
                    g = "hide",
                    y = "key",
                    m = "__riot-events__",
                    b = "string",
                    w = "object",
                    _ = "undefined",
                    x = "function",
                    S = "http://www.w3.org/1999/xlink",
                    E = "http://www.w3.org/2000/svg",
                    A = /^xlink:(\w+)/,
                    O = typeof window === _ ? void 0 : window,
                    T = /^on/,
                    k = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g,
                    P = {
                        viewbox: "viewBox",
                        preserveaspectratio: "preserveAspectRatio"
                    },
                    N = /^(?:disabled|checked|readonly|required|allowfullscreen|auto(?:focus|play)|compact|controls|default|formnovalidate|hidden|ismap|itemscope|loop|multiple|muted|no(?:resize|shade|validate|wrap)?|open|reversed|seamless|selected|sortable|truespeed|typemustmatch)$/,
                    j = 0 | (O && O.document || {}).documentMode;

                function I(t) {
                    return "svg" === t ? document.createElementNS(E, t) : document.createElement(t)
                }

                function M(t, n, e) {
                    var i = A.exec(n);
                    i && i[1] ? t.setAttributeNS(S, i[1], e) : t.setAttribute(n, e)
                }
                var C, L, F = {},
                    R = !1;
                O && (C = I("style"), L = e("style[type=riot]"), M(C, "type", "text/css"), L ? (L.id && (C.id = L.id), L.parentNode.replaceChild(C, L)) : document.head.appendChild(C), r = (i = C).styleSheet);
                var D = {
                        styleNode: i,
                        add: function(t, n) {
                            F[n] = t, R = !0
                        },
                        inject: function() {
                            if (O && R) {
                                R = !1;
                                var t = Object.keys(F).map(function(t) {
                                    return F[t]
                                }).join("\n");
                                r ? r.cssText = t : i.innerHTML = t
                            }
                        },
                        remove: function(t) {
                            delete F[t], R = !0
                        }
                    },
                    B = function() {
                        var t = "[{(,;:?=|&!^~>%*/",
                            n = ["case", "default", "do", "else", "in", "instanceof", "prefix", "return", "typeof", "void", "yield"],
                            e = n.reduce(function(t, n) {
                                return t + n.slice(-1)
                            }, ""),
                            i = /^\/(?=[^*>\/])[^[\/\\]*(?:(?:\\.|\[(?:\\.|[^\]\\]*)*\])[^[\\\/]*)*?\/[gimuy]*/,
                            r = /[$\w]/;

                        function o(t, n) {
                            for (; --n >= 0 && /\s/.test(t[n]););
                            return n
                        }
                        return function(a, s) {
                            var c = /.*/g,
                                u = c.lastIndex = s++,
                                f = c.exec(a)[0].match(i);
                            if (f) {
                                var l = u + f[0].length;
                                u = o(a, u);
                                var d = a[u];
                                if (u < 0 || ~t.indexOf(d)) return l;
                                if ("." === d) "." === a[u - 1] && (s = l);
                                else if ("+" === d || "-" === d)(a[--u] !== d || (u = o(a, u)) < 0 || !r.test(a[u])) && (s = l);
                                else if (~e.indexOf(d)) {
                                    for (var h = u + 1; --u >= 0 && r.test(a[u]););
                                    ~n.indexOf(a.slice(u + 1, h)) && (s = l)
                                }
                            }
                            return s
                        }
                    }(),
                    U = function(n) {
                        var e, i, r = "g",
                            o = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'|`[^`\\]*(?:\\[\S\s][^`\\]*)*`/g,
                            a = o.source + "|" + /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + "|" + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?([^<]\/)[gim]*/.source,
                            s = RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),
                            c = /(?=[[\]()*+?.^$|])/g,
                            u = o.source + "|" + /(\/)(?![*\/])/.source,
                            f = {
                                "(": RegExp("([()])|" + u, r),
                                "[": RegExp("([[\\]])|" + u, r),
                                "{": RegExp("([{}])|" + u, r)
                            },
                            l = "{ }",
                            d = ["{", "}", "{", "}", /{[^}]*}/, /\\([{}])/g, /\\({)|{/g, RegExp("\\\\(})|([[({])|(})|" + u, r), l, /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/, /(^|[^\\]){=[\S\s]*?}/],
                            h = void 0,
                            p = [];

                        function v(t) {
                            return t
                        }

                        function g(t, n) {
                            return n || (n = p), new RegExp(t.source.replace(/{/g, n[2]).replace(/}/g, n[3]), t.global ? r : "")
                        }

                        function y(t) {
                            if (t === l) return d;
                            var n = t.split(" ");
                            if (2 !== n.length || s.test(t)) throw new Error('Unsupported brackets "' + t + '"');
                            return (n = n.concat(t.replace(c, "\\").split(" ")))[4] = g(n[1].length > 1 ? /{[\S\s]*?}/ : d[4], n), n[5] = g(t.length > 3 ? /\\({|})/g : d[5], n), n[6] = g(d[6], n), n[7] = RegExp("\\\\(" + n[3] + ")|([[({])|(" + n[3] + ")|" + u, r), n[8] = t, n
                        }

                        function m(t) {
                            return t instanceof RegExp ? e(t) : p[t]
                        }

                        function b(t) {
                            (t || (t = l)) !== p[8] && (p = y(t), e = t === l ? v : g, p[9] = e(d[9])), h = t
                        }
                        return m.split = function(t, n, e) {
                            e || (e = p);
                            var i, r, o, a, s, c, u = [],
                                l = e[6],
                                d = [],
                                h = "";
                            for (r = o = l.lastIndex = 0; i = l.exec(t);) {
                                if (c = l.lastIndex, a = i.index, r) {
                                    if (i[2]) {
                                        var v = i[2],
                                            g = f[v],
                                            y = 1;
                                        for (g.lastIndex = c; i = g.exec(t);)
                                            if (i[1]) {
                                                if (i[1] === v) ++y;
                                                else if (!--y) break
                                            } else g.lastIndex = b(i.index, g.lastIndex, i[2]);
                                        l.lastIndex = y ? t.length : g.lastIndex;
                                        continue
                                    }
                                    if (!i[3]) {
                                        l.lastIndex = b(a, c, i[4]);
                                        continue
                                    }
                                }
                                i[1] || (m(t.slice(o, a)), o = l.lastIndex, (l = e[6 + (r ^= 1)]).lastIndex = o)
                            }
                            return t && o < t.length && m(t.slice(o)), u.qblocks = d, u;

                            function m(t) {
                                h && (t = h + t, h = ""), n || r ? u.push(t && t.replace(e[5], "$1")) : u.push(t)
                            }

                            function b(e, i, r) {
                                return r && (i = B(t, e)), n && i > e + 2 && (s = "⁗" + d.length + "~", d.push(t.slice(e, i)), h += t.slice(o, e) + s, o = i), i
                            }
                        }, m.hasExpr = function(t) {
                            return p[4].test(t)
                        }, m.loopKeys = function(t) {
                            var n = t.match(p[9]);
                            return n ? {
                                key: n[1],
                                pos: n[2],
                                val: p[0] + n[3].trim() + p[1]
                            } : {
                                val: t.trim()
                            }
                        }, m.array = function(t) {
                            return t ? y(t) : p
                        }, Object.defineProperty(m, "settings", {
                            set: function(t) {
                                var n;
                                n = (t = t || {}).brackets, Object.defineProperty(t, "brackets", {
                                    set: b,
                                    get: function() {
                                        return h
                                    },
                                    enumerable: !0
                                }), i = t, b(n)
                            },
                            get: function() {
                                return i
                            }
                        }), m.settings = void 0 !== t && t.settings || {}, m.set = b, m.skipRegex = B, m.R_STRINGS = o, m.R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g, m.S_QBLOCKS = a, m.S_QBLOCK2 = u, m
                    }(),
                    G = function() {
                        var t = {};

                        function n(r, o) {
                            return r ? (t[r] || (t[r] = function(t) {
                                var n = function(t) {
                                    var n, r = U.split(t.replace(e, '"'), 1),
                                        o = r.qblocks;
                                    if (r.length > 2 || r[0]) {
                                        var s, c, u = [];
                                        for (s = c = 0; s < r.length; ++s)(n = r[s]) && (n = 1 & s ? a(n, 1, o) : '"' + n.replace(/\\/g, "\\\\").replace(/\r\n?|\n/g, "\\n").replace(/"/g, '\\"') + '"') && (u[c++] = n);
                                        n = c < 2 ? u[0] : "[" + u.join(",") + '].join("")'
                                    } else n = a(r[1], 0, o);
                                    return o.length && (n = n.replace(i, function(t, n) {
                                        return o[n].replace(/\r/g, "\\r").replace(/\n/g, "\\n")
                                    })), n
                                }(t);
                                return "try{return " !== n.slice(0, 11) && (n = "return " + n), new Function("E", n + ";")
                            }(r))).call(o, function(t, e) {
                                t.riotData = {
                                    tagName: e && e.__ && e.__.tagName,
                                    _riot_id: e && e._riot_id
                                }, n.errorHandler ? n.errorHandler(t) : "undefined" != typeof console && "function" == typeof console.error && (console.error(t.message), console.log("<%s> %s", t.riotData.tagName || "Unknown tag", this.tmpl), console.log(this.data))
                            }.bind({
                                data: o,
                                tmpl: r
                            })) : r
                        }
                        n.hasExpr = U.hasExpr, n.loopKeys = U.loopKeys, n.clearCache = function() {
                            t = {}
                        }, n.errorHandler = null;
                        var e = /\u2057/g,
                            i = /\u2057(\d+)~/g,
                            r = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,
                            o = {
                                "(": /[()]/g,
                                "[": /[[\]]/g,
                                "{": /[{}]/g
                            };

                        function a(t, n, e) {
                            if (t = t.replace(/\s+/g, " ").trim().replace(/\ ?([[\({},?\.:])\ ?/g, "$1")) {
                                for (var i, a = [], s = 0; t && (i = t.match(r)) && !i.index;) {
                                    var c, u, l = /,|([[{(])|$/g;
                                    for (t = RegExp.rightContext, c = i[2] ? e[i[2]].slice(1, -1).trim().replace(/\s+/g, " ") : i[1]; u = (i = l.exec(t))[1];) d(u, l);
                                    u = t.slice(0, i.index), t = RegExp.rightContext, a[s++] = f(u, 1, c)
                                }
                                t = s ? s > 1 ? "[" + a.join(",") + '].join(" ").trim()' : a[0] : f(t, n)
                            }
                            return t;

                            function d(n, e) {
                                var i, r = 1,
                                    a = o[n];
                                for (a.lastIndex = e.lastIndex; i = a.exec(t);)
                                    if (i[0] === n) ++r;
                                    else if (!--r) break;
                                e.lastIndex = r ? t.length : a.lastIndex
                            }
                        }
                        var s = '"in this?this:' + ("object" != typeof window ? "global" : "window") + ").",
                            c = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
                            u = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

                        function f(t, n, e) {
                            var i;
                            return t = t.replace(c, function(t, n, e, r, o) {
                                return e && (r = i ? 0 : r + t.length, "this" !== e && "global" !== e && "window" !== e ? (t = n + '("' + e + s + e, r && (i = "." === (o = o[r]) || "(" === o || "[" === o)) : r && (i = !u.test(o.slice(r)))), t
                            }), i && (t = "try{return " + t + "}catch(e){E(e,this)}"), e ? t = (i ? "function(){" + t + "}.call(this)" : "(" + t + ")") + '?"' + e + '":""' : n && (t = "function(v){" + (i ? t.replace("return ", "v=") : "v=(" + t + ")") + ';return v||v===0?v:""}.call(this)'), t
                        }
                        return n.version = U.version = "v3.0.8", n
                    }(),
                    H = function(t) {
                        t = t || {};
                        var n = {},
                            e = Array.prototype.slice;
                        return Object.defineProperties(t, {
                            on: {
                                value: function(e, i) {
                                    return "function" == typeof i && (n[e] = n[e] || []).push(i), t
                                },
                                enumerable: !1,
                                writable: !1,
                                configurable: !1
                            },
                            off: {
                                value: function(e, i) {
                                    if ("*" != e || i)
                                        if (i)
                                            for (var r, o = n[e], a = 0; r = o && o[a]; ++a) r == i && o.splice(a--, 1);
                                        else delete n[e];
                                    else n = {};
                                    return t
                                },
                                enumerable: !1,
                                writable: !1,
                                configurable: !1
                            },
                            one: {
                                value: function(n, e) {
                                    return t.on(n, function i() {
                                        t.off(n, i), e.apply(t, arguments)
                                    })
                                },
                                enumerable: !1,
                                writable: !1,
                                configurable: !1
                            },
                            trigger: {
                                value: function(i) {
                                    var r, o, a, s = arguments,
                                        c = arguments.length - 1,
                                        u = new Array(c);
                                    for (a = 0; a < c; a++) u[a] = s[a + 1];
                                    for (r = e.call(n[i] || [], 0), a = 0; o = r[a]; ++a) o.apply(t, u);
                                    return n["*"] && "*" != i && t.trigger.apply(t, ["*", i].concat(u)), t
                                },
                                enumerable: !1,
                                writable: !1,
                                configurable: !1
                            }
                        }), t
                    };

                function W(t, n) {
                    return Object.getOwnPropertyDescriptor(t, n)
                }

                function V(t) {
                    return typeof t === _
                }

                function K(t, n) {
                    var e = W(t, n);
                    return V(t[n]) || e && e.writable
                }

                function q(t) {
                    for (var n, e = 1, i = arguments, r = i.length; e < r; e++)
                        if (n = i[e])
                            for (var o in n) K(t, o) && (t[o] = n[o]);
                    return t
                }

                function Y(t) {
                    return Object.create(t)
                }
                var $ = q(Y(U.settings), {
                    skipAnonymousTags: !0,
                    keepValueAttributes: !1,
                    autoUpdate: !0
                });

                function z(t, n) {
                    return [].slice.call((n || document).querySelectorAll(t))
                }

                function J() {
                    return document.createTextNode("")
                }

                function X(t, n) {
                    t.style.display = n ? "" : "none", t.hidden = !n
                }

                function Z(t, n) {
                    return t.getAttribute(n)
                }

                function Q(t, n) {
                    t.removeAttribute(n)
                }

                function tt(t, n, e) {
                    if (e) {
                        var i = t.ownerDocument.importNode((new DOMParser).parseFromString('<svg xmlns="' + E + '">' + n + "</svg>", "application/xml").documentElement, !0);
                        t.appendChild(i)
                    } else t.innerHTML = n
                }

                function nt(t, n) {
                    if (t)
                        for (var e; e = k.exec(t);) n(e[1].toLowerCase(), e[2] || e[3] || e[4])
                }

                function et() {
                    return document.createDocumentFragment()
                }

                function it(t, n, e) {
                    t.insertBefore(n, e.parentNode && e)
                }

                function rt(t) {
                    return Object.keys(t).reduce(function(n, e) {
                        return n + " " + e + ": " + t[e] + ";"
                    }, "")
                }

                function ot(t, n, e) {
                    if (t) {
                        var i, r = n(t, e);
                        if (!1 === r) return;
                        for (t = t.firstChild; t;) i = t.nextSibling, ot(t, n, r), t = i
                    }
                }
                var at = Object.freeze({
                    $$: z,
                    $: e,
                    createDOMPlaceholder: J,
                    mkEl: I,
                    setAttr: M,
                    toggleVisibility: X,
                    getAttr: Z,
                    remAttr: Q,
                    setInnerHTML: tt,
                    walkAttrs: nt,
                    createFrag: et,
                    safeInsert: it,
                    styleObjectToString: rt,
                    walkNodes: ot
                });

                function st(t) {
                    return V(t) || null === t
                }

                function ct(t) {
                    return st(t) || "" === t
                }

                function ut(t) {
                    return typeof t === x
                }

                function ft(t) {
                    return t && typeof t === w
                }

                function lt(t) {
                    var n = t.ownerSVGElement;
                    return !!n || null === n
                }

                function dt(t) {
                    return Array.isArray(t) || t instanceof Array
                }

                function ht(t) {
                    return N.test(t)
                }

                function pt(t) {
                    return typeof t === b
                }
                var vt = Object.freeze({
                    isBlank: ct,
                    isFunction: ut,
                    isObject: ft,
                    isSvg: lt,
                    isWritable: K,
                    isArray: dt,
                    isBoolAttr: ht,
                    isNil: st,
                    isString: pt,
                    isUndefined: V
                });

                function gt(t, n) {
                    return -1 !== t.indexOf(n)
                }

                function yt(t, n) {
                    for (var e = t ? t.length : 0, i = 0; i < e; i++) n(t[i], i);
                    return t
                }

                function mt(t, n) {
                    return t.slice(0, n.length) === n
                }
                var bt, wt = (bt = -1, function() {
                    return ++bt
                });

                function _t(t, n, e, i) {
                    return Object.defineProperty(t, n, q({
                        value: e,
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    }, i)), t
                }

                function xt(t) {
                    return t.replace(/-(\w)/g, function(t, n) {
                        return n.toUpperCase()
                    })
                }

                function St(t) {
                    console && console.warn && console.warn(t)
                }
                var Et = Object.freeze({
                    contains: gt,
                    each: yt,
                    getPropDescriptor: W,
                    startsWith: mt,
                    uid: wt,
                    defineProperty: _t,
                    objectCreate: Y,
                    extend: q,
                    toCamel: xt,
                    warn: St
                });

                function At(t, n, e, i, r) {
                    var o = t[n],
                        a = dt(o),
                        s = !V(r);
                    if (!o || o !== e)
                        if (!o && i) t[n] = [e];
                        else if (o)
                        if (a) {
                            var c = o.indexOf(e);
                            if (c === r) return; - 1 !== c && o.splice(c, 1), s ? o.splice(r, 0, e) : o.push(e)
                        } else t[n] = [o, e];
                    else t[n] = e
                }

                function Ot(t) {
                    return t.tagName && a[Z(t, l) || Z(t, l) || t.tagName.toLowerCase()]
                }

                function Tt(t, n) {
                    var e = Ot(t),
                        i = !n && Z(t, l);
                    return i && !G.hasExpr(i) ? i : e ? e.name : t.tagName.toLowerCase()
                }

                function kt() {
                    return this.parent ? q(Y(this), this.parent) : this
                }
                var Pt = /<yield\b/i,
                    Nt = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,
                    jt = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,
                    It = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,
                    Mt = {
                        tr: "tbody",
                        th: "tr",
                        td: "tr",
                        col: "colgroup"
                    },
                    Ct = j && j < 10 ? /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/ : /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/,
                    Lt = "div",
                    Ft = "svg";

                function Rt(t, n, i) {
                    var r = t && t.match(/^\s*<([-\w]+)/),
                        o = r && r[1].toLowerCase(),
                        a = I(i ? Ft : Lt);
                    return t = function(t, n) {
                        if (!Pt.test(t)) return t;
                        var e = {};
                        return n = n && n.replace(jt, function(t, n, i) {
                            return e[n] = e[n] || i, ""
                        }).trim(), t.replace(It, function(t, n, i) {
                            return e[n] || i || ""
                        }).replace(Nt, function(t, e) {
                            return n || e || ""
                        })
                    }(t, n), Ct.test(o) ? a = function(t, n, i) {
                        var r = "o" === i[0],
                            o = r ? "select>" : "table>";
                        if (t.innerHTML = "<" + o + n.trim() + "</" + o, o = t.firstChild, r) o.selectedIndex = -1;
                        else {
                            var a = Mt[i];
                            a && 1 === o.childElementCount && (o = e(a, o))
                        }
                        return o
                    }(a, t, o) : tt(a, t, i), a
                }
                var Dt = /^on/;

                function Bt(t) {
                    for (var n = t; n.__.isAnonymous && n.parent;) n = n.parent;
                    return n
                }

                function Ut(t, n, e, i) {
                    var r, o = function(t, n, e) {
                        var i = this.__.parent,
                            r = this.__.item;
                        if (!r)
                            for (; i && !r;) r = i.__.item, i = i.__.parent;
                        if (K(e, "currentTarget") && (e.currentTarget = t), K(e, "target") && (e.target = e.srcElement), K(e, "which") && (e.which = e.charCode || e.keyCode), e.item = r, n.call(this, e), $.autoUpdate && !e.preventUpdate) {
                            var o = Bt(this);
                            o.isMounted && o.update()
                        }
                    }.bind(i, e, n);
                    e[t] = null, r = t.replace(T, ""), gt(i.__.listeners, e) || i.__.listeners.push(e), e[m] || (e[m] = {}), e[m][t] && e.removeEventListener(r, e[m][t]), e[m][t] = o, e.addEventListener(r, o, !1)
                }

                function Gt(t, n, e, i) {
                    var r = wn(t, n, e),
                        o = n.tagName || Tt(n.root, !0),
                        a = Bt(i);
                    return _t(r, "parent", a), r.__.parent = i, At(a.tags, o, r), a !== i && At(i.tags, o, r), r
                }

                function Ht(t, n, e, i) {
                    if (dt(t[n])) {
                        var r = t[n].indexOf(e); - 1 !== r && t[n].splice(r, 1), t[n].length ? 1 !== t[n].length || i || (t[n] = t[n][0]) : delete t[n]
                    } else t[n] === e && delete t[n]
                }

                function Wt(t, n) {
                    var e, i, r = J(),
                        o = J(),
                        a = et();
                    for (this.root.insertBefore(r, this.root.firstChild), this.root.appendChild(o), this.__.head = i = r, this.__.tail = o; i;) e = i.nextSibling, a.appendChild(i), this.__.virts.push(i), i = e;
                    n ? t.insertBefore(a, n.__.head) : t.appendChild(a)
                }

                function Vt(t, n) {
                    if (n.parentNode) {
                        var e = et();
                        Wt.call(t, e), n.parentNode.replaceChild(e, n)
                    }
                }

                function Kt(t) {
                    if (!this.root || !Z(this.root, "virtualized")) {
                        var n, e = t.dom,
                            i = function(t) {
                                return t ? (t = t.replace(u, ""), P[t] && (t = P[t]), t) : null
                            }(t.attr),
                            r = gt([v, g], i),
                            o = t.root && "VIRTUAL" === t.root.tagName,
                            s = this.__,
                            c = s.isAnonymous,
                            f = e && (t.parent || e.parentNode),
                            l = $.keepValueAttributes,
                            d = "style" === i,
                            h = "class" === i,
                            p = "value" === i;
                        if (t._riot_id) t.__.wasCreated ? t.update() : (t.mount(), o && Vt(t, t.root));
                        else {
                            if (t.update) return t.update();
                            var y = r && !c ? kt.call(this) : this,
                                m = !ct(n = G(t.expr, y)),
                                b = ft(n);
                            if (b && (h ? n = G(JSON.stringify(n), this) : d && (n = rt(n))), !t.attr || t.wasParsedOnce && !1 !== n && (m || p && (!p || l)) || Q(e, Z(e, t.attr) ? t.attr : i), t.bool && (n = !!n && i), t.isRtag) return function(t, n, e) {
                                var i, r = t.tag || t.dom._tag,
                                    o = (r ? r.__ : {}).head,
                                    s = "VIRTUAL" === t.dom.tagName;
                                r && t.tagName === e ? r.update() : (r && (s && (i = J(), o.parentNode.insertBefore(i, o)), r.unmount(!0)), pt(e) && (t.impl = a[e], t.impl && (t.tag = r = Gt(t.impl, {
                                    root: t.dom,
                                    parent: n,
                                    tagName: e
                                }, t.dom.innerHTML, n), yt(t.attrs, function(t) {
                                    return M(r.root, t.name, t.value)
                                }), t.tagName = e, r.mount(), s && Vt(r, i || r.root), n.__.onUnmount = function() {
                                    var t = r.opts.dataIs;
                                    Ht(r.parent.tags, t, r), Ht(r.__.parent.tags, t, r), r.unmount()
                                })))
                            }(t, this, n);
                            if ((!t.wasParsedOnce || t.value !== n) && (t.value = n, t.wasParsedOnce = !0, !b || h || d || r)) {
                                if (m || (n = ""), !i) return n += "", void(f && (t.parent = f, "TEXTAREA" === f.tagName ? (f.value = n, j || (e.nodeValue = n)) : e.nodeValue = n));
                                switch (!0) {
                                    case ut(n):
                                        w = i, Dt.test(w) && Ut(i, n, e, this);
                                        break;
                                    case r:
                                        X(e, i === g ? !n : n);
                                        break;
                                    default:
                                        t.bool && (e[i] = n), p && e.value !== n ? e.value = n : m && !1 !== n && M(e, i, n), d && e.hidden && X(e, !1)
                                }
                                var w
                            }
                        }
                    }
                }

                function qt(t) {
                    yt(t, Kt.bind(this))
                }

                function Yt(t, n, e, i, r) {
                    if (!t || !e) {
                        var o = t ? kt.call(this) : n || this;
                        yt(r, function(t) {
                            t.expr && Kt.call(o, t.expr), i[xt(t.name).replace(u, "")] = t.expr ? t.expr.value : t.value
                        })
                    }
                }

                function $t(t) {
                    if (!t) {
                        var n = Object.keys(a);
                        return n + $t(n)
                    }
                    return t.filter(function(t) {
                        return !/[^-\w]/.test(t)
                    }).reduce(function(t, n) {
                        var e = n.trim().toLowerCase();
                        return t + ",[" + l + '="' + e + '"]'
                    }, "")
                }

                function zt(t, n) {
                    var e = this.name,
                        i = this.tmpl,
                        r = this.css,
                        o = this.attrs,
                        s = this.onCreate;
                    return a[e] || (Jt(e, i, r, o, s), a[e].class = this.constructor), _n(t, e, n, this), r && D.inject(), this
                }

                function Jt(t, n, e, i, r) {
                    return ut(i) && (r = i, /^[\w-]+\s?=/.test(e) ? (i = e, e = "") : i = ""), e && (ut(e) ? r = e : D.add(e, t)), t = t.toLowerCase(), a[t] = {
                        name: t,
                        tmpl: n,
                        attrs: i,
                        fn: r
                    }, t
                }

                function Xt(t, n, e, i, r) {
                    return e && D.add(e, t), a[t] = {
                        name: t,
                        tmpl: n,
                        attrs: i,
                        fn: r
                    }, t
                }

                function Zt(t, n, e) {
                    var i, r, o = [];
                    if (D.inject(), (ft(n) || ut(n)) && (e = n, n = 0), pt(t) ? (t = "*" === t ? r = $t() : t + $t(t.split(/, */)), i = t ? z(t) : []) : i = t, "*" === n) {
                        if (n = r || $t(), i.tagName) i = z(n, i);
                        else {
                            var a = [];
                            yt(i, function(t) {
                                return a.push(z(n, t))
                            }), i = a
                        }
                        n = 0
                    }
                    return function t(i) {
                        if (i.tagName) {
                            var r, a = Z(i, l);
                            n && a !== n && (a = n, M(i, l, n)), (r = _n(i, a || i.tagName.toLowerCase(), ut(e) ? e() : e)) && o.push(r)
                        } else i.length && yt(i, t)
                    }(i), o
                }
                var Qt = {},
                    tn = Qt[c] = {},
                    nn = 0;

                function en(t, n, e) {
                    if (ft(t)) en("__" + nn++ + "__", t, !0);
                    else {
                        var i = e ? tn : Qt;
                        if (!n) {
                            if (V(i[t])) throw new Error("Unregistered mixin: " + t);
                            return i[t]
                        }
                        i[t] = ut(n) ? q(n.prototype, i[t] || {}) && n : q(i[t] || {}, n)
                    }
                }

                function rn() {
                    return yt(o, function(t) {
                        return t.update()
                    })
                }

                function on(t) {
                    return D.remove(t), delete a[t]
                }
                var an = Object.freeze({
                    Tag: zt,
                    tag: Jt,
                    tag2: Xt,
                    mount: Zt,
                    mixin: en,
                    update: rn,
                    unregister: on,
                    version: "v3.13.2"
                });

                function sn(t, n) {
                    var e, i = this.parent;
                    i && (dt(e = i.tags[t]) ? e.splice(n, 0, e.splice(e.indexOf(this), 1)[0]) : At(i.tags, t, this))
                }

                function cn(t, n) {
                    for (var e, i = this.__.head, r = et(); i;)
                        if (e = i.nextSibling, r.appendChild(i), (i = e) === this.__.tail) {
                            r.appendChild(i), t.insertBefore(r, n.__.head);
                            break
                        }
                }

                function un(t, n, e) {
                    var i = {};
                    return i[t.key] = n, t.pos && (i[t.pos] = e), i
                }

                function fn(t, n) {
                    t.splice(n, 1), this.unmount(), Ht(this.parent, this, this.__.tagName, !0)
                }

                function ln(t, n, e) {
                    var i = typeof Z(t, p) !== b || Q(t, p),
                        r = Z(t, y),
                        o = !!r && G.hasExpr(r),
                        s = Tt(t),
                        c = a[s],
                        u = t.parentNode,
                        f = J(),
                        l = Ot(t),
                        v = Z(t, d),
                        g = [],
                        m = t.innerHTML,
                        _ = !a[s],
                        x = "VIRTUAL" === t.tagName,
                        S = [];
                    return Q(t, h), Q(t, y), (e = G.loopKeys(e)).isLoop = !0, v && Q(t, d), u.insertBefore(f, t), u.removeChild(t), e.update = function() {
                        e.value = G(e.val, n);
                        var a = e.value,
                            u = et(),
                            d = !dt(a) && !pt(a),
                            h = f.parentNode,
                            p = [],
                            y = d && !!a;
                        if (h) {
                            d && (a = a ? Object.keys(a).map(function(t) {
                                return un(e, a[t], t)
                            }) : []);
                            var b = 0;
                            yt(a, function(f, E) {
                                    var A = E - b,
                                        O = !y && e.key ? un(e, f, E) : f;
                                    if (!v || G(v, q(Y(n), O))) {
                                        var T = function(t, n, e, i) {
                                                return t ? i ? G(t, e) : n[t] : n
                                            }(r, f, O, o),
                                            k = !d && i && typeof f === w || r,
                                            P = S.indexOf(T),
                                            N = -1 === P,
                                            j = !N && k ? P : A,
                                            I = g[j],
                                            M = A >= S.length,
                                            C = k && N || !k && !I || !g[A];
                                        C ? ((I = wn(c, {
                                            parent: n,
                                            isLoop: !0,
                                            isAnonymous: _,
                                            tagName: s,
                                            root: t.cloneNode(_),
                                            item: O,
                                            index: A
                                        }, m)).mount(), M ? function(t, n) {
                                            n ? Wt.call(this, t) : t.appendChild(this.root)
                                        }.apply(I, [u || h, x]) : function(t, n, e) {
                                            e ? Wt.apply(this, [t, n]) : it(t, this.root, n.root)
                                        }.apply(I, [h, g[A], x]), M || S.splice(A, 0, O), g.splice(A, 0, I), l && At(n.tags, s, I, !0)) : j !== A && k && ((r || gt(a, S[j])) && (function(t, n, e) {
                                            e ? cn.apply(this, [t, n]) : it(t, this.root, n.root)
                                        }.apply(I, [h, g[A], x]), g.splice(A, 0, g.splice(j, 1)[0]), S.splice(A, 0, S.splice(j, 1)[0])), e.pos && (I[e.pos] = A), !l && I.tags && function(t) {
                                            var n = this;
                                            yt(Object.keys(this.tags), function(e) {
                                                sn.apply(n.tags[e], [e, t])
                                            })
                                        }.call(I, A)), q(I.__, {
                                            item: O,
                                            index: A,
                                            parent: n
                                        }), p[A] = T, C || I.update(O)
                                    } else b++
                                }),
                                function(t, n, e) {
                                    for (var i = n.length, r = t.length - e; i > r;) i--, fn.apply(n[i], [n, i])
                                }(a, g, b), S = p.slice(), h.insertBefore(u, f)
                        }
                    }, e.unmount = function() {
                        yt(g, function(t) {
                            t.unmount()
                        })
                    }, e
                }
                var dn = {
                    init: function(t, n, e, i) {
                        return this.dom = t, this.attr = e, this.rawValue = i, this.parent = n, this.hasExp = G.hasExpr(i), this
                    },
                    update: function() {
                        var t = this.value,
                            n = this.parent && Bt(this.parent),
                            e = this.dom.__ref || this.tag || this.dom;
                        this.value = this.hasExp ? G(this.rawValue, this.parent) : this.rawValue, !ct(t) && n && Ht(n.refs, t, e), !ct(this.value) && pt(this.value) ? (n && At(n.refs, this.value, e, null, this.parent.__.index), this.value !== t && M(this.dom, this.attr, this.value)) : Q(this.dom, this.attr), this.dom.__ref || (this.dom.__ref = e)
                    },
                    unmount: function() {
                        var t = this.tag || this.dom,
                            n = this.parent && Bt(this.parent);
                        !ct(this.value) && n && Ht(n.refs, this.value, t)
                    }
                };

                function hn(t, n, e, i) {
                    return Y(dn).init(t, n, e, i)
                }

                function pn(t) {
                    yt(t, function(t) {
                        t.unmount ? t.unmount(!0) : t.tagName ? t.tag.unmount(!0) : t.unmount && t.unmount()
                    })
                }
                var vn = {
                    init: function(t, n, e) {
                        Q(t, d), q(this, {
                            tag: n,
                            expr: e,
                            stub: J(),
                            pristine: t
                        });
                        var i = t.parentNode;
                        return i.insertBefore(this.stub, t), i.removeChild(t), this
                    },
                    update: function() {
                        this.value = G(this.expr, this.tag), this.stub.parentNode && (this.value && !this.current ? (this.current = this.pristine.cloneNode(!0), this.stub.parentNode.insertBefore(this.current, this.stub), this.expressions = yn.apply(this.tag, [this.current, !0])) : !this.value && this.current && (this.unmount(), this.current = null, this.expressions = []), this.value && qt.call(this.tag, this.expressions))
                    },
                    unmount: function() {
                        this.current && (this.current._tag ? this.current._tag.unmount() : this.current.parentNode && this.current.parentNode.removeChild(this.current)), pn(this.expressions || [])
                    }
                };

                function gn(t, n, e) {
                    return Y(vn).init(t, n, e)
                }

                function yn(t, n) {
                    var e = this,
                        i = [];
                    return ot(t, function(r) {
                        var o, a, s = r.nodeType;
                        if ((n || r !== t) && (3 === s && "STYLE" !== r.parentNode.tagName && G.hasExpr(r.nodeValue) && i.push({
                                dom: r,
                                expr: r.nodeValue
                            }), 1 === s)) {
                            var c = "VIRTUAL" === r.tagName;
                            if (o = Z(r, h)) return c && M(r, "loopVirtual", !0), i.push(ln(r, e, o)), !1;
                            if (o = Z(r, d)) return i.push(gn(r, e, o)), !1;
                            if ((o = Z(r, l)) && G.hasExpr(o)) return i.push({
                                isRtag: !0,
                                expr: o,
                                dom: r,
                                attrs: [].slice.call(r.attributes)
                            }), !1;
                            if (a = Ot(r), c && (Z(r, "virtualized") && r.parentElement.removeChild(r), a || Z(r, "virtualized") || Z(r, "loopVirtual") || (a = {
                                    tmpl: r.outerHTML
                                })), a && (r !== t || n)) {
                                var u = Z(r, l);
                                if (!c || u) return u && c && St("Virtual tags shouldn't be used together with the \"" + l + '" attribute - https://github.com/riot/riot/issues/2511'), i.push(Gt(a, {
                                    root: r,
                                    parent: e
                                }, r.innerHTML, e)), !1;
                                M(r, "virtualized", !0);
                                var f = wn({
                                    tmpl: r.outerHTML
                                }, {
                                    root: r,
                                    parent: e
                                }, r.innerHTML);
                                i.push(f)
                            }
                            mn.apply(e, [r, r.attributes, function(t, n) {
                                n && i.push(n)
                            }])
                        }
                    }), i
                }

                function mn(t, n, e) {
                    var i = this;
                    yt(n, function(n) {
                        if (!n) return !1;
                        var r, o = n.name,
                            a = ht(o);
                        gt(f, o) && t.tagName.toLowerCase() !== s ? r = hn(t, i, o, n.value) : G.hasExpr(n.value) && (r = {
                            dom: t,
                            expr: n.value,
                            attr: o,
                            bool: a
                        }), e(n, r)
                    })
                }

                function bn(t) {
                    var n = this.__,
                        e = n.isAnonymous,
                        i = n.skipAnonymous;
                    _t(this, "isMounted", t), e && i || (t ? this.trigger("mount") : (this.trigger("unmount"), this.off("*"), this.__.wasCreated = !1))
                }

                function wn(t, n, e) {
                    void 0 === t && (t = {}), void 0 === n && (n = {});
                    var i, r = n.context || {},
                        a = n.opts || {},
                        s = n.parent,
                        f = n.isLoop,
                        l = !!n.isAnonymous,
                        d = $.skipAnonymousTags && l,
                        h = n.item,
                        p = n.index,
                        v = t.tmpl,
                        g = [],
                        y = n.root,
                        b = n.tagName || Tt(y),
                        w = "virtual" === b,
                        _ = !w && !v;
                    return _ || f && l ? i = y : (w || (y.innerHTML = ""), i = Rt(v, e, lt(y))), d || H(r), t.name && y._tag && y._tag.unmount(!0), _t(r, "__", {
                        impl: t,
                        root: y,
                        skipAnonymous: d,
                        implAttrs: [],
                        isAnonymous: l,
                        instAttrs: [],
                        innerHTML: e,
                        tagName: b,
                        index: p,
                        isLoop: f,
                        isInline: _,
                        item: h,
                        parent: s,
                        listeners: [],
                        virts: [],
                        wasCreated: !1,
                        tail: null,
                        head: null
                    }), [
                        ["isMounted", !1],
                        ["_riot_id", wt()],
                        ["root", y],
                        ["opts", a, {
                            writable: !0,
                            enumerable: !0
                        }],
                        ["parent", s || null],
                        ["tags", {}],
                        ["refs", {}],
                        ["update", function(t) {
                            return function(t, n, e) {
                                var i = t.__,
                                    r = {},
                                    o = t.isMounted && !i.skipAnonymous;
                                return i.isAnonymous && i.parent && q(t, i.parent), q(t, n), Yt.apply(t, [i.isLoop, i.parent, i.isAnonymous, r, i.instAttrs]), o && t.isMounted && ut(t.shouldUpdate) && !t.shouldUpdate(n, r) ? t : (q(t.opts, r), o && t.trigger("update", n), qt.call(t, e), o && t.trigger("updated"), t)
                            }(r, t, g)
                        }],
                        ["mixin", function() {
                            for (var t = [], n = arguments.length; n--;) t[n] = arguments[n];
                            return function(t) {
                                for (var n = [], e = arguments.length - 1; e-- > 0;) n[e] = arguments[e + 1];
                                return yt(n, function(n) {
                                    var e, i, r = [],
                                        o = ["init", "__proto__"];
                                    n = pt(n) ? en(n) : n, e = ut(n) ? new n : n;
                                    var a = Object.getPrototypeOf(e);
                                    do {
                                        r = r.concat(Object.getOwnPropertyNames(i || e))
                                    } while (i = Object.getPrototypeOf(i || e));
                                    yt(r, function(n) {
                                        if (!gt(o, n)) {
                                            var i = W(e, n) || W(a, n),
                                                r = i && (i.get || i.set);
                                            !t.hasOwnProperty(n) && r ? Object.defineProperty(t, n, i) : t[n] = ut(e[n]) ? e[n].bind(t) : e[n]
                                        }
                                    }), e.init && e.init.bind(t)(t.opts)
                                }), t
                            }.apply(void 0, [r].concat(t))
                        }],
                        ["mount", function() {
                            return function(t, n, e, i) {
                                var r = t.__,
                                    o = r.root;
                                o._tag = t, mn.apply(r.parent, [o, o.attributes, function(n, e) {
                                    !r.isAnonymous && dn.isPrototypeOf(e) && (e.tag = t), n.expr = e, r.instAttrs.push(n)
                                }]), nt(r.impl.attrs, function(t, n) {
                                    r.implAttrs.push({
                                        name: t,
                                        value: n
                                    })
                                }), mn.apply(t, [o, r.implAttrs, function(t, n) {
                                    n ? e.push(n) : M(o, t.name, t.value)
                                }]), Yt.apply(t, [r.isLoop, r.parent, r.isAnonymous, i, r.instAttrs]);
                                var a = en(c);
                                if (a && !r.skipAnonymous)
                                    for (var s in a) a.hasOwnProperty(s) && t.mixin(a[s]);
                                if (r.impl.fn && r.impl.fn.call(t, i), r.skipAnonymous || t.trigger("before-mount"), yt(yn.apply(t, [n, r.isAnonymous]), function(t) {
                                        return e.push(t)
                                    }), t.update(r.item), !r.isAnonymous && !r.isInline)
                                    for (; n.firstChild;) o.appendChild(n.firstChild);
                                if (_t(t, "root", o), !r.skipAnonymous && t.parent) {
                                    var u = Bt(t.parent);
                                    u.one(u.isMounted ? "updated" : "mount", function() {
                                        bn.call(t, !0)
                                    })
                                } else bn.call(t, !0);
                                return t.__.wasCreated = !0, t
                            }(r, i, g, a)
                        }],
                        ["unmount", function(t) {
                            return function(t, n, e) {
                                var i = t.__,
                                    r = i.root,
                                    a = o.indexOf(t),
                                    s = r.parentNode;
                                if (i.skipAnonymous || t.trigger("before-unmount"), nt(i.impl.attrs, function(t) {
                                        mt(t, u) && (t = t.slice(u.length)), Q(r, t)
                                    }), t.__.listeners.forEach(function(t) {
                                        Object.keys(t[m]).forEach(function(n) {
                                            t.removeEventListener(n, t[m][n])
                                        })
                                    }), -1 !== a && o.splice(a, 1), i.parent && !i.isAnonymous) {
                                    var c = Bt(i.parent);
                                    i.isVirtual ? Object.keys(t.tags).forEach(function(n) {
                                        return Ht(c.tags, n, t.tags[n])
                                    }) : Ht(c.tags, i.tagName, t)
                                }
                                return t.__.virts && yt(t.__.virts, function(t) {
                                    t.parentNode && t.parentNode.removeChild(t)
                                }), pn(e), yt(i.instAttrs, function(t) {
                                    return t.expr && t.expr.unmount && t.expr.unmount()
                                }), n ? tt(r, "") : s && s.removeChild(r), i.onUnmount && i.onUnmount(), t.isMounted || bn.call(t, !0), bn.call(t, !1), delete r._tag, t
                            }(r, t, g)
                        }]
                    ].reduce(function(t, n) {
                        var e = n[0],
                            i = n[1],
                            o = n[2];
                        return _t(r, e, i, o), t
                    }, q(r, h))
                }

                function _n(t, n, e, i) {
                    var r, s = a[n],
                        c = a[n].class,
                        u = i || (c ? Y(c.prototype) : {}),
                        f = t._innerHTML = t._innerHTML || t.innerHTML,
                        l = q({
                            root: t,
                            opts: e,
                            context: u
                        }, {
                            parent: e ? e.parent : null
                        });
                    return s && t && (r = wn(s, l, f)), r && r.mount && (r.mount(!0), gt(o, r) || o.push(r)), r
                }
                var xn = Object.freeze({
                        arrayishAdd: At,
                        getTagName: Tt,
                        inheritParentProps: kt,
                        mountTo: _n,
                        selectTags: $t,
                        arrayishRemove: Ht,
                        getTag: Ot,
                        initChildTag: Gt,
                        moveChildTag: sn,
                        makeReplaceVirtual: Vt,
                        getImmediateCustomParentTag: Bt,
                        makeVirtual: Wt,
                        moveVirtual: cn,
                        unmountAll: pn,
                        createIfDirective: gn,
                        createRefDirective: hn
                    }),
                    Sn = $,
                    En = {
                        tmpl: G,
                        brackets: U,
                        styleManager: D,
                        vdom: o,
                        styleNode: D.styleNode,
                        dom: at,
                        check: vt,
                        misc: Et,
                        tags: xn
                    },
                    An = zt,
                    On = Jt,
                    Tn = Xt,
                    kn = Zt,
                    Pn = en,
                    Nn = rn,
                    jn = on,
                    In = H,
                    Mn = q({}, an, {
                        observable: H,
                        settings: Sn,
                        util: En
                    });
                n.settings = Sn, n.util = En, n.Tag = An, n.tag = On, n.tag2 = Tn, n.mount = kn, n.mixin = Pn, n.update = Nn, n.unregister = jn, n.version = "v3.13.2", n.observable = In, n.default = Mn, Object.defineProperty(n, "__esModule", {
                    value: !0
                })
            }(n)
        }).call(this, e(8))
    }, function(t, n, e) {
        t.exports = !e(1)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, n) {
        var e = t.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = e)
    }, function(t, n, e) {
        var i = e(27),
            r = Math.min;
        t.exports = function(t) {
            return t > 0 ? r(i(t), 9007199254740991) : 0
        }
    }, function(t, n, e) {
        var i = e(2),
            r = e(15),
            o = e(14),
            a = e(35)("src"),
            s = Function.toString,
            c = ("" + s).split("toString");
        e(10).inspectSource = function(t) {
            return s.call(t)
        }, (t.exports = function(t, n, e, s) {
            var u = "function" == typeof e;
            u && (o(e, "name") || r(e, "name", n)), t[n] !== e && (u && (o(e, a) || r(e, a, t[n] ? "" + t[n] : c.join(String(n)))), t === i ? t[n] = e : s ? t[n] ? t[n] = e : r(t, n, e) : (delete t[n], r(t, n, e)))
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[a] || s.call(this)
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(1),
            o = e(26),
            a = /"/g,
            s = function(t, n, e, i) {
                var r = String(o(t)),
                    s = "<" + n;
                return "" !== e && (s += " " + e + '="' + String(i).replace(a, "&quot;") + '"'), s + ">" + r + "</" + n + ">"
            };
        t.exports = function(t, n) {
            var e = {};
            e[t] = n(s), i(i.P + i.F * r(function() {
                var n = "" [t]('"');
                return n !== n.toLowerCase() || n.split('"').length > 3
            }), "String", e)
        }
    }, function(t, n) {
        var e = {}.hasOwnProperty;
        t.exports = function(t, n) {
            return e.call(t, n)
        }
    }, function(t, n, e) {
        var i = e(7),
            r = e(34);
        t.exports = e(9) ? function(t, n, e) {
            return i.f(t, n, r(1, e))
        } : function(t, n, e) {
            return t[n] = e, t
        }
    }, function(t, n, e) {
        var i = e(50),
            r = e(26);
        t.exports = function(t) {
            return i(r(t))
        }
    }, function(t, n, e) {
        var i = e(26);
        t.exports = function(t) {
            return Object(i(t))
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(1);
        t.exports = function(t, n) {
            return !!t && i(function() {
                n ? t.call(null, function() {}, 1) : t.call(null)
            })
        }
    }, function(t, n, e) {
        var i = e(51),
            r = e(34),
            o = e(16),
            a = e(30),
            s = e(14),
            c = e(95),
            u = Object.getOwnPropertyDescriptor;
        n.f = e(9) ? u : function(t, n) {
            if (t = o(t), n = a(n, !0), c) try {
                return u(t, n)
            } catch (t) {}
            if (s(t, n)) return r(!i.f.call(t, n), t[n])
        }
    }, function(t, n, e) {
        var i = e(0),
            r = e(10),
            o = e(1);
        t.exports = function(t, n) {
            var e = (r.Object || {})[t] || Object[t],
                a = {};
            a[t] = n(e), i(i.S + i.F * o(function() {
                e(1)
            }), "Object", a)
        }
    }, function(t, n, e) {
        var i = e(23),
            r = e(50),
            o = e(17),
            a = e(11),
            s = e(222);
        t.exports = function(t, n) {
            var e = 1 == t,
                c = 2 == t,
                u = 3 == t,
                f = 4 == t,
                l = 6 == t,
                d = 5 == t || l,
                h = n || s;
            return function(n, s, p) {
                for (var v, g, y = o(n), m = r(y), b = i(s, p, 3), w = a(m.length), _ = 0, x = e ? h(n, w) : c ? h(n, 0) : void 0; w > _; _++)
                    if ((d || _ in m) && (g = b(v = m[_], _, y), t))
                        if (e) x[_] = g;
                        else if (g) switch (t) {
                    case 3:
                        return !0;
                    case 5:
                        return v;
                    case 6:
                        return _;
                    case 2:
                        x.push(v)
                } else if (f) return !1;
                return l ? -1 : u || f ? f : x
            }
        }
    }, function(t, n, e) {
        "use strict";

        function i(t, n) {
            for (var e = 0; e < n.length; e++) {
                var i = n[e];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var r = e(307),
            o = new(e(66)),
            a = 8192,
            s = new(function() {
                function t(n) {
                    ! function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.filterName = n, this.filter = new r(a, 16)
                }
                var n, e, s;
                return n = t, (e = [{
                    key: "override",
                    value: function(t) {
                        "string" == typeof t && "" !== t && (t = o.handledParse(t, [])), o.isArray(t) && 0 === t.length && (t = a), this.filter = new r(t, 16)
                    }
                }, {
                    key: "add",
                    value: function(t) {
                        t && "" !== t && this.filter.add(t)
                    }
                }, {
                    key: "getCleanArray",
                    value: function() {
                        return [].slice.call(this.filter.buckets)
                    }
                }, {
                    key: "contains",
                    value: function(t) {
                        return !(!t || "" === t) && this.filter.test(t)
                    }
                }, {
                    key: "checkOrAdd",
                    value: function(t) {
                        t && "" !== t && (this.contains(t) || this.add(t))
                    }
                }]) && i(n.prototype, e), s && i(n, s), t
            }())("readFilter");
        n.a = s
    }, function(t, n, e) {
        var i = e(24);
        t.exports = function(t, n, e) {
            if (i(t), void 0 === n) return t;
            switch (e) {
                case 1:
                    return function(e) {
                        return t.call(n, e)
                    };
                case 2:
                    return function(e, i) {
                        return t.call(n, e, i)
                    };
                case 3:
                    return function(e, i, r) {
                        return t.call(n, e, i, r)
                    }
            }
            return function() {
                return t.apply(n, arguments)
            }
        }
    }, function(t, n) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, n) {
        var e = {}.toString;
        t.exports = function(t) {
            return e.call(t).slice(8, -1)
        }
    }, function(t, n) {
        t.exports = function(t) {
            if (null == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, n) {
        var e = Math.ceil,
            i = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? i : e)(t)
        }
    }, function(t, n, e) {
        "use strict";
        if (e(9)) {
            var i = e(36),
                r = e(2),
                o = e(1),
                a = e(0),
                s = e(63),
                c = e(92),
                u = e(23),
                f = e(46),
                l = e(34),
                d = e(15),
                h = e(47),
                p = e(27),
                v = e(11),
                g = e(119),
                y = e(38),
                m = e(30),
                b = e(14),
                w = e(54),
                _ = e(3),
                x = e(17),
                S = e(85),
                E = e(39),
                A = e(41),
                O = e(40).f,
                T = e(87),
                k = e(35),
                P = e(5),
                N = e(21),
                j = e(52),
                I = e(60),
                M = e(57),
                C = e(43),
                L = e(56),
                F = e(45),
                R = e(88),
                D = e(112),
                B = e(7),
                U = e(19),
                G = B.f,
                H = U.f,
                W = r.RangeError,
                V = r.TypeError,
                K = r.Uint8Array,
                q = Array.prototype,
                Y = c.ArrayBuffer,
                $ = c.DataView,
                z = N(0),
                J = N(2),
                X = N(3),
                Z = N(4),
                Q = N(5),
                tt = N(6),
                nt = j(!0),
                et = j(!1),
                it = M.values,
                rt = M.keys,
                ot = M.entries,
                at = q.lastIndexOf,
                st = q.reduce,
                ct = q.reduceRight,
                ut = q.join,
                ft = q.sort,
                lt = q.slice,
                dt = q.toString,
                ht = q.toLocaleString,
                pt = P("iterator"),
                vt = P("toStringTag"),
                gt = k("typed_constructor"),
                yt = k("def_constructor"),
                mt = s.CONSTR,
                bt = s.TYPED,
                wt = s.VIEW,
                _t = N(1, function(t, n) {
                    return Ot(I(t, t[yt]), n)
                }),
                xt = o(function() {
                    return 1 === new K(new Uint16Array([1]).buffer)[0]
                }),
                St = !!K && !!K.prototype.set && o(function() {
                    new K(1).set({})
                }),
                Et = function(t, n) {
                    var e = p(t);
                    if (e < 0 || e % n) throw W("Wrong offset!");
                    return e
                },
                At = function(t) {
                    if (_(t) && bt in t) return t;
                    throw V(t + " is not a typed array!")
                },
                Ot = function(t, n) {
                    if (!(_(t) && gt in t)) throw V("It is not a typed array constructor!");
                    return new t(n)
                },
                Tt = function(t, n) {
                    return kt(I(t, t[yt]), n)
                },
                kt = function(t, n) {
                    for (var e = 0, i = n.length, r = Ot(t, i); i > e;) r[e] = n[e++];
                    return r
                },
                Pt = function(t, n, e) {
                    G(t, n, {
                        get: function() {
                            return this._d[e]
                        }
                    })
                },
                Nt = function(t) {
                    var n, e, i, r, o, a, s = x(t),
                        c = arguments.length,
                        f = c > 1 ? arguments[1] : void 0,
                        l = void 0 !== f,
                        d = T(s);
                    if (null != d && !S(d)) {
                        for (a = d.call(s), i = [], n = 0; !(o = a.next()).done; n++) i.push(o.value);
                        s = i
                    }
                    for (l && c > 2 && (f = u(f, arguments[2], 2)), n = 0, e = v(s.length), r = Ot(this, e); e > n; n++) r[n] = l ? f(s[n], n) : s[n];
                    return r
                },
                jt = function() {
                    for (var t = 0, n = arguments.length, e = Ot(this, n); n > t;) e[t] = arguments[t++];
                    return e
                },
                It = !!K && o(function() {
                    ht.call(new K(1))
                }),
                Mt = function() {
                    return ht.apply(It ? lt.call(At(this)) : At(this), arguments)
                },
                Ct = {
                    copyWithin: function(t, n) {
                        return D.call(At(this), t, n, arguments.length > 2 ? arguments[2] : void 0)
                    },
                    every: function(t) {
                        return Z(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    fill: function(t) {
                        return R.apply(At(this), arguments)
                    },
                    filter: function(t) {
                        return Tt(this, J(At(this), t, arguments.length > 1 ? arguments[1] : void 0))
                    },
                    find: function(t) {
                        return Q(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    findIndex: function(t) {
                        return tt(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    forEach: function(t) {
                        z(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    indexOf: function(t) {
                        return et(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    includes: function(t) {
                        return nt(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    join: function(t) {
                        return ut.apply(At(this), arguments)
                    },
                    lastIndexOf: function(t) {
                        return at.apply(At(this), arguments)
                    },
                    map: function(t) {
                        return _t(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    reduce: function(t) {
                        return st.apply(At(this), arguments)
                    },
                    reduceRight: function(t) {
                        return ct.apply(At(this), arguments)
                    },
                    reverse: function() {
                        for (var t, n = At(this).length, e = Math.floor(n / 2), i = 0; i < e;) t = this[i], this[i++] = this[--n], this[n] = t;
                        return this
                    },
                    some: function(t) {
                        return X(At(this), t, arguments.length > 1 ? arguments[1] : void 0)
                    },
                    sort: function(t) {
                        return ft.call(At(this), t)
                    },
                    subarray: function(t, n) {
                        var e = At(this),
                            i = e.length,
                            r = y(t, i);
                        return new(I(e, e[yt]))(e.buffer, e.byteOffset + r * e.BYTES_PER_ELEMENT, v((void 0 === n ? i : y(n, i)) - r))
                    }
                },
                Lt = function(t, n) {
                    return Tt(this, lt.call(At(this), t, n))
                },
                Ft = function(t) {
                    At(this);
                    var n = Et(arguments[1], 1),
                        e = this.length,
                        i = x(t),
                        r = v(i.length),
                        o = 0;
                    if (r + n > e) throw W("Wrong length!");
                    for (; o < r;) this[n + o] = i[o++]
                },
                Rt = {
                    entries: function() {
                        return ot.call(At(this))
                    },
                    keys: function() {
                        return rt.call(At(this))
                    },
                    values: function() {
                        return it.call(At(this))
                    }
                },
                Dt = function(t, n) {
                    return _(t) && t[bt] && "symbol" != typeof n && n in t && String(+n) == String(n)
                },
                Bt = function(t, n) {
                    return Dt(t, n = m(n, !0)) ? l(2, t[n]) : H(t, n)
                },
                Ut = function(t, n, e) {
                    return !(Dt(t, n = m(n, !0)) && _(e) && b(e, "value")) || b(e, "get") || b(e, "set") || e.configurable || b(e, "writable") && !e.writable || b(e, "enumerable") && !e.enumerable ? G(t, n, e) : (t[n] = e.value, t)
                };
            mt || (U.f = Bt, B.f = Ut), a(a.S + a.F * !mt, "Object", {
                getOwnPropertyDescriptor: Bt,
                defineProperty: Ut
            }), o(function() {
                dt.call({})
            }) && (dt = ht = function() {
                return ut.call(this)
            });
            var Gt = h({}, Ct);
            h(Gt, Rt), d(Gt, pt, Rt.values), h(Gt, {
                slice: Lt,
                set: Ft,
                constructor: function() {},
                toString: dt,
                toLocaleString: Mt
            }), Pt(Gt, "buffer", "b"), Pt(Gt, "byteOffset", "o"), Pt(Gt, "byteLength", "l"), Pt(Gt, "length", "e"), G(Gt, vt, {
                get: function() {
                    return this[bt]
                }
            }), t.exports = function(t, n, e, c) {
                var u = t + ((c = !!c) ? "Clamped" : "") + "Array",
                    l = "get" + t,
                    h = "set" + t,
                    p = r[u],
                    y = p || {},
                    m = p && A(p),
                    b = !p || !s.ABV,
                    x = {},
                    S = p && p.prototype,
                    T = function(t, e) {
                        G(t, e, {
                            get: function() {
                                return function(t, e) {
                                    var i = t._d;
                                    return i.v[l](e * n + i.o, xt)
                                }(this, e)
                            },
                            set: function(t) {
                                return function(t, e, i) {
                                    var r = t._d;
                                    c && (i = (i = Math.round(i)) < 0 ? 0 : i > 255 ? 255 : 255 & i), r.v[h](e * n + r.o, i, xt)
                                }(this, e, t)
                            },
                            enumerable: !0
                        })
                    };
                b ? (p = e(function(t, e, i, r) {
                    f(t, p, u, "_d");
                    var o, a, s, c, l = 0,
                        h = 0;
                    if (_(e)) {
                        if (!(e instanceof Y || "ArrayBuffer" == (c = w(e)) || "SharedArrayBuffer" == c)) return bt in e ? kt(p, e) : Nt.call(p, e);
                        o = e, h = Et(i, n);
                        var y = e.byteLength;
                        if (void 0 === r) {
                            if (y % n) throw W("Wrong length!");
                            if ((a = y - h) < 0) throw W("Wrong length!")
                        } else if ((a = v(r) * n) + h > y) throw W("Wrong length!");
                        s = a / n
                    } else s = g(e), o = new Y(a = s * n);
                    for (d(t, "_d", {
                            b: o,
                            o: h,
                            l: a,
                            e: s,
                            v: new $(o)
                        }); l < s;) T(t, l++)
                }), S = p.prototype = E(Gt), d(S, "constructor", p)) : o(function() {
                    p(1)
                }) && o(function() {
                    new p(-1)
                }) && L(function(t) {
                    new p, new p(null), new p(1.5), new p(t)
                }, !0) || (p = e(function(t, e, i, r) {
                    var o;
                    return f(t, p, u), _(e) ? e instanceof Y || "ArrayBuffer" == (o = w(e)) || "SharedArrayBuffer" == o ? void 0 !== r ? new y(e, Et(i, n), r) : void 0 !== i ? new y(e, Et(i, n)) : new y(e) : bt in e ? kt(p, e) : Nt.call(p, e) : new y(g(e))
                }), z(m !== Function.prototype ? O(y).concat(O(m)) : O(y), function(t) {
                    t in p || d(p, t, y[t])
                }), p.prototype = S, i || (S.constructor = p));
                var k = S[pt],
                    P = !!k && ("values" == k.name || null == k.name),
                    N = Rt.values;
                d(p, gt, !0), d(S, bt, u), d(S, wt, !0), d(S, yt, p), (c ? new p(1)[vt] == u : vt in S) || G(S, vt, {
                    get: function() {
                        return u
                    }
                }), x[u] = p, a(a.G + a.W + a.F * (p != y), x), a(a.S, u, {
                    BYTES_PER_ELEMENT: n
                }), a(a.S + a.F * o(function() {
                    y.of.call(p, 1)
                }), u, {
                    from: Nt,
                    of: jt
                }), "BYTES_PER_ELEMENT" in S || d(S, "BYTES_PER_ELEMENT", n), a(a.P, u, Ct), F(u), a(a.P + a.F * St, u, {
                    set: Ft
                }), a(a.P + a.F * !P, u, Rt), i || S.toString == dt || (S.toString = dt), a(a.P + a.F * o(function() {
                    new p(1).slice()
                }), u, {
                    slice: Lt
                }), a(a.P + a.F * (o(function() {
                    return [1, 2].toLocaleString() != new p([1, 2]).toLocaleString()
                }) || !o(function() {
                    S.toLocaleString.call([1, 2])
                })), u, {
                    toLocaleString: Mt
                }), C[u] = P ? k : N, i || P || d(S, pt, N)
            }
        } else t.exports = function() {}
    }, function(t, n, e) {
        (function(n, e) {
            (function() {
                /*!
                 * @overview es6-promise - a tiny implementation of Promises/A+.
                 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
                 * @license   Licensed under MIT license
                 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
                 * @version   v4.2.5+7f2b526d
                 */
                var i;
                i = function() {
                    "use strict";

                    function t(t) {
                        return "function" == typeof t
                    }
                    var i = Array.isArray ? Array.isArray : function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        r = 0,
                        o = void 0,
                        a = void 0,
                        s = function(t, n) {
                            p[r] = t, p[r + 1] = n, 2 === (r += 2) && (a ? a(v) : w())
                        },
                        c = "undefined" != typeof window ? window : void 0,
                        u = c || {},
                        f = u.MutationObserver || u.WebKitMutationObserver,
                        l = "undefined" == typeof self && void 0 !== e && "[object process]" === {}.toString.call(e),
                        d = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                    function h() {
                        var t = setTimeout;
                        return function() {
                            return t(v, 1)
                        }
                    }
                    var p = new Array(1e3);

                    function v() {
                        for (var t = 0; t < r; t += 2) {
                            (0, p[t])(p[t + 1]), p[t] = void 0, p[t + 1] = void 0
                        }
                        r = 0
                    }
                    var g, y, m, b, w = void 0;

                    function _(t, n) {
                        var e = this,
                            i = new this.constructor(E);
                        void 0 === i[S] && B(i);
                        var r = e._state;
                        if (r) {
                            var o = arguments[r - 1];
                            s(function() {
                                return R(r, i, o, e._result)
                            })
                        } else L(e, i, t, n);
                        return i
                    }

                    function x(t) {
                        if (t && "object" == typeof t && t.constructor === this) return t;
                        var n = new this(E);
                        return j(n, t), n
                    }
                    l ? w = function() {
                        return e.nextTick(v)
                    } : f ? (y = 0, m = new f(v), b = document.createTextNode(""), m.observe(b, {
                        characterData: !0
                    }), w = function() {
                        b.data = y = ++y % 2
                    }) : d ? ((g = new MessageChannel).port1.onmessage = v, w = function() {
                        return g.port2.postMessage(0)
                    }) : w = void 0 === c ? function() {
                        try {
                            var t = Function("return this")().require("vertx");
                            return void 0 !== (o = t.runOnLoop || t.runOnContext) ? function() {
                                o(v)
                            } : h()
                        } catch (t) {
                            return h()
                        }
                    }() : h();
                    var S = Math.random().toString(36).substring(2);

                    function E() {}
                    var A = void 0,
                        O = 1,
                        T = 2,
                        k = {
                            error: null
                        };

                    function P(t) {
                        try {
                            return t.then
                        } catch (t) {
                            return k.error = t, k
                        }
                    }

                    function N(n, e, i) {
                        e.constructor === n.constructor && i === _ && e.constructor.resolve === x ? function(t, n) {
                            n._state === O ? M(t, n._result) : n._state === T ? C(t, n._result) : L(n, void 0, function(n) {
                                return j(t, n)
                            }, function(n) {
                                return C(t, n)
                            })
                        }(n, e) : i === k ? (C(n, k.error), k.error = null) : void 0 === i ? M(n, e) : t(i) ? function(t, n, e) {
                            s(function(t) {
                                var i = !1,
                                    r = function(t, n, e, i) {
                                        try {
                                            t.call(n, e, i)
                                        } catch (t) {
                                            return t
                                        }
                                    }(e, n, function(e) {
                                        i || (i = !0, n !== e ? j(t, e) : M(t, e))
                                    }, function(n) {
                                        i || (i = !0, C(t, n))
                                    }, t._label);
                                !i && r && (i = !0, C(t, r))
                            }, t)
                        }(n, e, i) : M(n, e)
                    }

                    function j(t, n) {
                        var e, i;
                        t === n ? C(t, new TypeError("You cannot resolve a promise with itself")) : (i = typeof(e = n), null === e || "object" !== i && "function" !== i ? M(t, n) : N(t, n, P(n)))
                    }

                    function I(t) {
                        t._onerror && t._onerror(t._result), F(t)
                    }

                    function M(t, n) {
                        t._state === A && (t._result = n, t._state = O, 0 !== t._subscribers.length && s(F, t))
                    }

                    function C(t, n) {
                        t._state === A && (t._state = T, t._result = n, s(I, t))
                    }

                    function L(t, n, e, i) {
                        var r = t._subscribers,
                            o = r.length;
                        t._onerror = null, r[o] = n, r[o + O] = e, r[o + T] = i, 0 === o && t._state && s(F, t)
                    }

                    function F(t) {
                        var n = t._subscribers,
                            e = t._state;
                        if (0 !== n.length) {
                            for (var i = void 0, r = void 0, o = t._result, a = 0; a < n.length; a += 3) i = n[a], r = n[a + e], i ? R(e, i, r, o) : r(o);
                            t._subscribers.length = 0
                        }
                    }

                    function R(n, e, i, r) {
                        var o = t(i),
                            a = void 0,
                            s = void 0,
                            c = void 0,
                            u = void 0;
                        if (o) {
                            if ((a = function(t, n) {
                                    try {
                                        return t(n)
                                    } catch (t) {
                                        return k.error = t, k
                                    }
                                }(i, r)) === k ? (u = !0, s = a.error, a.error = null) : c = !0, e === a) return void C(e, new TypeError("A promises callback cannot return that same promise."))
                        } else a = r, c = !0;
                        e._state !== A || (o && c ? j(e, a) : u ? C(e, s) : n === O ? M(e, a) : n === T && C(e, a))
                    }
                    var D = 0;

                    function B(t) {
                        t[S] = D++, t._state = void 0, t._result = void 0, t._subscribers = []
                    }
                    var U = function() {
                            function t(t, n) {
                                this._instanceConstructor = t, this.promise = new t(E), this.promise[S] || B(this.promise), i(n) ? (this.length = n.length, this._remaining = n.length, this._result = new Array(this.length), 0 === this.length ? M(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(n), 0 === this._remaining && M(this.promise, this._result))) : C(this.promise, new Error("Array Methods must be provided an Array"))
                            }
                            return t.prototype._enumerate = function(t) {
                                for (var n = 0; this._state === A && n < t.length; n++) this._eachEntry(t[n], n)
                            }, t.prototype._eachEntry = function(t, n) {
                                var e = this._instanceConstructor,
                                    i = e.resolve;
                                if (i === x) {
                                    var r = P(t);
                                    if (r === _ && t._state !== A) this._settledAt(t._state, n, t._result);
                                    else if ("function" != typeof r) this._remaining--, this._result[n] = t;
                                    else if (e === G) {
                                        var o = new e(E);
                                        N(o, t, r), this._willSettleAt(o, n)
                                    } else this._willSettleAt(new e(function(n) {
                                        return n(t)
                                    }), n)
                                } else this._willSettleAt(i(t), n)
                            }, t.prototype._settledAt = function(t, n, e) {
                                var i = this.promise;
                                i._state === A && (this._remaining--, t === T ? C(i, e) : this._result[n] = e), 0 === this._remaining && M(i, this._result)
                            }, t.prototype._willSettleAt = function(t, n) {
                                var e = this;
                                L(t, void 0, function(t) {
                                    return e._settledAt(O, n, t)
                                }, function(t) {
                                    return e._settledAt(T, n, t)
                                })
                            }, t
                        }(),
                        G = function() {
                            function n(t) {
                                this[S] = D++, this._result = this._state = void 0, this._subscribers = [], E !== t && ("function" != typeof t && function() {
                                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                                }(), this instanceof n ? function(t, n) {
                                    try {
                                        n(function(n) {
                                            j(t, n)
                                        }, function(n) {
                                            C(t, n)
                                        })
                                    } catch (n) {
                                        C(t, n)
                                    }
                                }(this, t) : function() {
                                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                                }())
                            }
                            return n.prototype.catch = function(t) {
                                return this.then(null, t)
                            }, n.prototype.finally = function(n) {
                                var e = this.constructor;
                                return t(n) ? this.then(function(t) {
                                    return e.resolve(n()).then(function() {
                                        return t
                                    })
                                }, function(t) {
                                    return e.resolve(n()).then(function() {
                                        throw t
                                    })
                                }) : this.then(n, n)
                            }, n
                        }();
                    return G.prototype.then = _, G.all = function(t) {
                        return new U(this, t).promise
                    }, G.race = function(t) {
                        var n = this;
                        return i(t) ? new n(function(e, i) {
                            for (var r = t.length, o = 0; o < r; o++) n.resolve(t[o]).then(e, i)
                        }) : new n(function(t, n) {
                            return n(new TypeError("You must pass an array to race."))
                        })
                    }, G.resolve = x, G.reject = function(t) {
                        var n = new this(E);
                        return C(n, t), n
                    }, G._setScheduler = function(t) {
                        a = t
                    }, G._setAsap = function(t) {
                        s = t
                    }, G._asap = s, G.polyfill = function() {
                        var t = void 0;
                        if (void 0 !== n) t = n;
                        else if ("undefined" != typeof self) t = self;
                        else try {
                            t = Function("return this")()
                        } catch (t) {
                            throw new Error("polyfill failed because global object is unavailable in this environment")
                        }
                        var e = t.Promise;
                        if (e) {
                            var i = null;
                            try {
                                i = Object.prototype.toString.call(e.resolve())
                            } catch (t) {}
                            if ("[object Promise]" === i && !e.cast) return
                        }
                        t.Promise = G
                    }, G.Promise = G, G
                }, t.exports = i(), t.exports = n.Promise
            }).call(n)
        }).call(this, e(67), e(295))
    }, function(t, n, e) {
        var i = e(3);
        t.exports = function(t, n) {
            if (!i(t)) return t;
            var e, r;
            if (n && "function" == typeof(e = t.toString) && !i(r = e.call(t))) return r;
            if ("function" == typeof(e = t.valueOf) && !i(r = e.call(t))) return r;
            if (!n && "function" == typeof(e = t.toString) && !i(r = e.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, n, e) {
        var i = e(35)("meta"),
            r = e(3),
            o = e(14),
            a = e(7).f,
            s = 0,
            c = Object.isExtensible || function() {
                return !0
            },
            u = !e(1)(function() {
                return c(Object.preventExtensions({}))
            }),
            f = function(t) {
                a(t, i, {
                    value: {
                        i: "O" + ++s,
                        w: {}
                    }
                })
            },
            l = t.exports = {
                KEY: i,
                NEED: !1,
                fastKey: function(t, n) {
                    if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                    if (!o(t, i)) {
                        if (!c(t)) return "F";
                        if (!n) return "E";
                        f(t)
                    }
                    return t[i].i
                },
                getWeak: function(t, n) {
                    if (!o(t, i)) {
                        if (!c(t)) return !0;
                        if (!n) return !1;
                        f(t)
                    }
                    return t[i].w
                },
                onFreeze: function(t) {
                    return u && l.NEED && c(t) && !o(t, i) && f(t), t
                }
            }
    }, function(t, n) {
        t.exports = {
            env: {
                feedBaseUrl: "//notifications.files.bbci.co.uk/",
                feedAggregatedInitialFeed: "latest.json",
                feedTopicInitialFeed: "latest.json",
                feedTopicMaxSubscriptions: 12,
                preferencesUrls: {
                    get: "https://preferences.notifications.api.bbc.com/subscriptions",
                    getUK: "https://preferences.notifications.api.bbc.co.uk/subscriptions",
                    postClick: "https://preferences.notifications.api.bbc.com/click",
                    postClickUK: "https://preferences.notifications.api.bbc.co.uk/click",
                    postPreference: "https://preferences.notifications.api.bbc.com/preference",
                    postPreferenceUK: "https://preferences.notifications.api.bbc.co.uk/preference",
                    postPreferenceRelay: "https://preferences.notifications.api.bbc.com/preference/relay",
                    postPreferenceRelayUK: "https://preferences.notifications.api.bbc.co.uk/preference/relay",
                    idcta: "https://idcta.api.bbc.com/idcta/init",
                    idctaUK: "https://idcta.api.bbc.co.uk/idcta/init",
                    translations: "https://idcta.api.bbc.com/idcta/translations",
                    translationsUK: "https://idcta.api.bbc.co.uk/idcta/translations"
                },
                under13s: {
                    moreInfo: "http://www.bbc.co.uk/usingthebbc/account/what-are-child-permissions/"
                },
                idcta: {
                    urls: {
                        signin: "https://ssl.bbc.co.uk/id/signin",
                        register: "https://ssl.bbc.co.uk/id/register"
                    }
                },
                notificationsPollingInterval: 6e5,
                preferencesPollingInterval: 6e5,
                lockExpiry: 3e4,
                cacheTimeout: 6e5,
                visibleChunkAmount: 10,
                maxNotificationAge: 5
            }
        }
    }, function(t, n, e) {
        "use strict";
        (function(t) {
            var i;

            function r() {
                return new t(function(t) {
                    i ? t(i) : window.require(["idcta/idcta-1"], function(n) {
                        t(i = n)
                    })
                })
            }

            function o() {
                return new t(function(t, n) {
                    window.require(["idcta/idcta-1"], function(e) {
                        e.initiateTokenRefresh(void 0, void 0, !0).then(function(n) {
                            t(n)
                        }).catch(function(t) {
                            n(t)
                        })
                    })
                })
            }
            e.d(n, "a", function() {
                return r
            }), e.d(n, "b", function() {
                return o
            })
        }).call(this, e(29))
    }, function(t, n) {
        t.exports = function(t, n) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: n
            }
        }
    }, function(t, n) {
        var e = 0,
            i = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++e + i).toString(36))
        }
    }, function(t, n) {
        t.exports = !1
    }, function(t, n, e) {
        var i = e(97),
            r = e(72);
        t.exports = Object.keys || function(t) {
            return i(t, r)
        }
    }, function(t, n, e) {
        var i = e(27),
            r = Math.max,
            o = Math.min;
        t.exports = function(t, n) {
            return (t = i(t)) < 0 ? r(t + n, 0) : o(t, n)
        }
    }, function(t, n, e) {
        var i = e(4),
            r = e(98),
            o = e(72),
            a = e(71)("IE_PROTO"),
            s = function() {},
            c = function() {
                var t, n = e(68)("iframe"),
                    i = o.length;
                for (n.style.display = "none", e(74).appendChild(n), n.src = "javascript:", (t = n.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; i--;) delete c.prototype[o[i]];
                return c()
            };
        t.exports = Object.create || function(t, n) {
            var e;
            return null !== t ? (s.prototype = i(t), e = new s, s.prototype = null, e[a] = t) : e = c(), void 0 === n ? e : r(e, n)
        }
    }, function(t, n, e) {
        var i = e(97),
            r = e(72).concat("length", "prototype");
        n.f = Object.getOwnPropertyNames || function(t) {
            return i(t, r)
        }
    }, function(t, n, e) {
        var i = e(14),
            r = e(17),
            o = e(71)("IE_PROTO"),
            a = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
        }
    }, function(t, n, e) {
        var i = e(7).f,
            r = e(14),
            o = e(5)("toStringTag");
        t.exports = function(t, n, e) {
            t && !r(t = e ? t : t.prototype, o) && i(t, o, {
                configurable: !0,
                value: n
            })
        }
    }, function(t, n) {
        t.exports = {}
    }, function(t, n, e) {
        var i = e(5)("unscopables"),
            r = Array.prototype;
        null == r[i] && e(15)(r, i, {}), t.exports = function(t) {
            r[i][t] = !0
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(2),
            r = e(7),
            o = e(9),
            a = e(5)("species");
        t.exports = function(t) {
            var n = i[t];
            o && n && !n[a] && r.f(n, a, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    }, function(t, n) {
        t.exports = function(t, n, e, i) {
            if (!(t instanceof n) || void 0 !== i && i in t) throw TypeError(e + ": incorrect invocation!");
            return t
        }
    }, function(t, n, e) {
        var i = e(12);
        t.exports = function(t, n, e) {
            for (var r in n) i(t, r, n[r], e);
            return t
        }
    }, function(t, n, e) {
        var i = e(3);
        t.exports = function(t, n) {
            if (!i(t) || t._t !== n) throw TypeError("Incompatible receiver, " + n + " required!");
            return t
        }
    }, function(t, n, e) {
        var i, r, o;
        o = this, i = [n, e(304)], void 0 === (r = function(t, n) {
            ! function(t, n) {
                function e() {
                    this._entities = {}, this._default = i, this._language = this._default;
                    var t = n.observable();
                    this.on = t.on, this.off = t.off, this.trigger = t.trigger, this.on("lang", this.setLanguage)
                }
                var i = "en";
                e.prototype.dictionary = function(t) {
                    this._entities = t
                }, e.prototype.defaultLanguage = function(t) {
                    this._default = t
                }, e.prototype.localise = function(t, n) {
                    function e(t, n, i, r) {
                        r = r || "", n = n || {}, i = i || 0;
                        var o, a = t && !t.length,
                            s = a ? Object.keys(t).length : 0;
                        if (a && s > 0)
                            for (o in t) r.split(".").length > i && (r = r.split(".").splice(0, i).join(".")), r = 0 == i ? o : r + "." + o, n = e(t[o], n, i + 1, r);
                        else n[r] = t;
                        return n
                    }
                    var i, r;
                    if (this._entities[this._language] || (i = t), i || (r = e(this._entities[this._language]), i = r[t] ? r[t] : t), n) {
                        var o, a = e(n);
                        for (o in a) i = i.replace(new RegExp("{" + o + "}", "g"), a[o])
                    }
                    return i
                }, e.prototype.setLanguage = function(t) {
                    this._language = t || this._default, this.trigger("update")
                }, e.prototype.getLanguage = function() {
                    return this._language
                };
                var r, o = new e;
                for (r in o) t[r] = o[r];
                n.mixin("i18n", {
                    i18n: t
                }), n.tag2("i1-8n", '<span ref="localised" name="localised"></span> <span ref="original" name="original" class="original"><yield></yield></span>', 'i1-8n,[riot-tag="i1-8n"],[data-is="i1-8n"]{ display: inline-block; } i1-8n .original,[riot-tag="i1-8n"] .original,[data-is="i1-8n"] .original{ display: none; }', "", function() {
                    this.mixin("i18n"), this.i18n.on("update", function() {
                        this.update()
                    }.bind(this)), this.on("mount", function() {
                        this.hasRefs = null != this.refs, this.localise()
                    }), this.on("update", function() {
                        this.localise()
                    }), this.localise = function() {
                        var t = this.hasRefs ? this.refs : this;
                        t.localised.innerHTML = this.i18n.localise(t.original.innerHTML)
                    }
                })
            }(o.i18n = t, n)
        }.apply(n, i)) || (t.exports = r)
    }, function(t, n, e) {
        var i = e(25);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == i(t) ? t.split("") : Object(t)
        }
    }, function(t, n) {
        n.f = {}.propertyIsEnumerable
    }, function(t, n, e) {
        var i = e(16),
            r = e(11),
            o = e(38);
        t.exports = function(t) {
            return function(n, e, a) {
                var s, c = i(n),
                    u = r(c.length),
                    f = o(a, u);
                if (t && e != e) {
                    for (; u > f;)
                        if ((s = c[f++]) != s) return !0
                } else
                    for (; u > f; f++)
                        if ((t || f in c) && c[f] === e) return t || f || 0;
                return !t && -1
            }
        }
    }, function(t, n) {
        n.f = Object.getOwnPropertySymbols
    }, function(t, n, e) {
        var i = e(25),
            r = e(5)("toStringTag"),
            o = "Arguments" == i(function() {
                return arguments
            }());
        t.exports = function(t) {
            var n, e, a;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(e = function(t, n) {
                try {
                    return t[n]
                } catch (t) {}
            }(n = Object(t), r)) ? e : o ? i(n) : "Object" == (a = i(n)) && "function" == typeof n.callee ? "Arguments" : a
        }
    }, function(t, n, e) {
        var i = e(0),
            r = e(26),
            o = e(1),
            a = e(76),
            s = "[" + a + "]",
            c = RegExp("^" + s + s + "*"),
            u = RegExp(s + s + "*$"),
            f = function(t, n, e) {
                var r = {},
                    s = o(function() {
                        return !!a[t]() || "​" != "​" [t]()
                    }),
                    c = r[t] = s ? n(l) : a[t];
                e && (r[e] = c), i(i.P + i.F * s, "String", r)
            },
            l = f.trim = function(t, n) {
                return t = String(r(t)), 1 & n && (t = t.replace(c, "")), 2 & n && (t = t.replace(u, "")), t
            };
        t.exports = f
    }, function(t, n, e) {
        var i = e(5)("iterator"),
            r = !1;
        try {
            var o = [7][i]();
            o.return = function() {
                r = !0
            }, Array.from(o, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, n) {
            if (!n && !r) return !1;
            var e = !1;
            try {
                var o = [7],
                    a = o[i]();
                a.next = function() {
                    return {
                        done: e = !0
                    }
                }, o[i] = function() {
                    return a
                }, t(o)
            } catch (t) {}
            return e
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(44),
            r = e(113),
            o = e(43),
            a = e(16);
        t.exports = e(81)(Array, "Array", function(t, n) {
            this._t = a(t), this._i = 0, this._k = n
        }, function() {
            var t = this._t,
                n = this._k,
                e = this._i++;
            return !t || e >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == n ? e : "values" == n ? t[e] : [e, t[e]])
        }, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
    }, function(t, n, e) {
        "use strict";
        var i = e(15),
            r = e(12),
            o = e(1),
            a = e(26),
            s = e(5);
        t.exports = function(t, n, e) {
            var c = s(t),
                u = e(a, c, "" [t]),
                f = u[0],
                l = u[1];
            o(function() {
                var n = {};
                return n[c] = function() {
                    return 7
                }, 7 != "" [t](n)
            }) && (r(String.prototype, t, f), i(RegExp.prototype, c, 2 == n ? function(t, n) {
                return l.call(t, this, n)
            } : function(t) {
                return l.call(t, this)
            }))
        }
    }, function(t, n, e) {
        var i = e(23),
            r = e(110),
            o = e(85),
            a = e(4),
            s = e(11),
            c = e(87),
            u = {},
            f = {};
        (n = t.exports = function(t, n, e, l, d) {
            var h, p, v, g, y = d ? function() {
                    return t
                } : c(t),
                m = i(e, l, n ? 2 : 1),
                b = 0;
            if ("function" != typeof y) throw TypeError(t + " is not iterable!");
            if (o(y)) {
                for (h = s(t.length); h > b; b++)
                    if ((g = n ? m(a(p = t[b])[0], p[1]) : m(t[b])) === u || g === f) return g
            } else
                for (v = y.call(t); !(p = v.next()).done;)
                    if ((g = r(v, m, p.value, n)) === u || g === f) return g
        }).BREAK = u, n.RETURN = f
    }, function(t, n, e) {
        var i = e(4),
            r = e(24),
            o = e(5)("species");
        t.exports = function(t, n) {
            var e, a = i(t).constructor;
            return void 0 === a || null == (e = i(a)[o]) ? n : r(e)
        }
    }, function(t, n, e) {
        var i = e(2).navigator;
        t.exports = i && i.userAgent || ""
    }, function(t, n, e) {
        "use strict";
        var i = e(2),
            r = e(0),
            o = e(12),
            a = e(47),
            s = e(31),
            c = e(59),
            u = e(46),
            f = e(3),
            l = e(1),
            d = e(56),
            h = e(42),
            p = e(77);
        t.exports = function(t, n, e, v, g, y) {
            var m = i[t],
                b = m,
                w = g ? "set" : "add",
                _ = b && b.prototype,
                x = {},
                S = function(t) {
                    var n = _[t];
                    o(_, t, "delete" == t ? function(t) {
                        return !(y && !f(t)) && n.call(this, 0 === t ? 0 : t)
                    } : "has" == t ? function(t) {
                        return !(y && !f(t)) && n.call(this, 0 === t ? 0 : t)
                    } : "get" == t ? function(t) {
                        return y && !f(t) ? void 0 : n.call(this, 0 === t ? 0 : t)
                    } : "add" == t ? function(t) {
                        return n.call(this, 0 === t ? 0 : t), this
                    } : function(t, e) {
                        return n.call(this, 0 === t ? 0 : t, e), this
                    })
                };
            if ("function" == typeof b && (y || _.forEach && !l(function() {
                    (new b).entries().next()
                }))) {
                var E = new b,
                    A = E[w](y ? {} : -0, 1) != E,
                    O = l(function() {
                        E.has(1)
                    }),
                    T = d(function(t) {
                        new b(t)
                    }),
                    k = !y && l(function() {
                        for (var t = new b, n = 5; n--;) t[w](n, n);
                        return !t.has(-0)
                    });
                T || ((b = n(function(n, e) {
                    u(n, b, t);
                    var i = p(new m, n, b);
                    return null != e && c(e, g, i[w], i), i
                })).prototype = _, _.constructor = b), (O || k) && (S("delete"), S("has"), g && S("get")), (k || A) && S(w), y && _.clear && delete _.clear
            } else b = v.getConstructor(n, t, g, w), a(b.prototype, e), s.NEED = !0;
            return h(b, t), x[t] = b, r(r.G + r.W + r.F * (b != m), x), y || v.setStrong(b, t, g), b
        }
    }, function(t, n, e) {
        for (var i, r = e(2), o = e(15), a = e(35), s = a("typed_array"), c = a("view"), u = !(!r.ArrayBuffer || !r.DataView), f = u, l = 0, d = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(","); l < 9;)(i = r[d[l++]]) ? (o(i.prototype, s, !0), o(i.prototype, c, !0)) : f = !1;
        t.exports = {
            ABV: u,
            CONSTR: f,
            TYPED: s,
            VIEW: c
        }
    }, function(t, n, e) {
        (function(e, i) {
            (function() {
                ! function(t) {
                    "use strict";
                    var n = {
                        searchParams: "URLSearchParams" in self,
                        iterable: "Symbol" in self && "iterator" in Symbol,
                        blob: "FileReader" in self && "Blob" in self && function() {
                            try {
                                return new Blob, !0
                            } catch (t) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in self,
                        arrayBuffer: "ArrayBuffer" in self
                    };
                    if (n.arrayBuffer) var e = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        r = ArrayBuffer.isView || function(t) {
                            return t && e.indexOf(Object.prototype.toString.call(t)) > -1
                        };

                    function o(t) {
                        if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                        return t.toLowerCase()
                    }

                    function a(t) {
                        return "string" != typeof t && (t = String(t)), t
                    }

                    function s(t) {
                        var e = {
                            next: function() {
                                var n = t.shift();
                                return {
                                    done: void 0 === n,
                                    value: n
                                }
                            }
                        };
                        return n.iterable && (e[Symbol.iterator] = function() {
                            return e
                        }), e
                    }

                    function c(t) {
                        this.map = {}, t instanceof c ? t.forEach(function(t, n) {
                            this.append(n, t)
                        }, this) : Array.isArray(t) ? t.forEach(function(t) {
                            this.append(t[0], t[1])
                        }, this) : t && Object.getOwnPropertyNames(t).forEach(function(n) {
                            this.append(n, t[n])
                        }, this)
                    }

                    function u(t) {
                        if (t.bodyUsed) return i.reject(new TypeError("Already read"));
                        t.bodyUsed = !0
                    }

                    function f(t) {
                        return new i(function(n, e) {
                            t.onload = function() {
                                n(t.result)
                            }, t.onerror = function() {
                                e(t.error)
                            }
                        })
                    }

                    function l(t) {
                        var n = new FileReader,
                            e = f(n);
                        return n.readAsArrayBuffer(t), e
                    }

                    function d(t) {
                        if (t.slice) return t.slice(0);
                        var n = new Uint8Array(t.byteLength);
                        return n.set(new Uint8Array(t)), n.buffer
                    }

                    function h() {
                        return this.bodyUsed = !1, this._initBody = function(t) {
                            var e;
                            this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : n.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : n.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : n.arrayBuffer && n.blob && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = d(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || r(t)) ? this._bodyArrayBuffer = d(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, n.blob && (this.blob = function() {
                            var t = u(this);
                            if (t) return t;
                            if (this._bodyBlob) return i.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return i.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return i.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? u(this) || i.resolve(this._bodyArrayBuffer) : this.blob().then(l)
                        }), this.text = function() {
                            var t, n, e, r = u(this);
                            if (r) return r;
                            if (this._bodyBlob) return t = this._bodyBlob, n = new FileReader, e = f(n), n.readAsText(t), e;
                            if (this._bodyArrayBuffer) return i.resolve(function(t) {
                                for (var n = new Uint8Array(t), e = new Array(n.length), i = 0; i < n.length; i++) e[i] = String.fromCharCode(n[i]);
                                return e.join("")
                            }(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return i.resolve(this._bodyText)
                        }, n.formData && (this.formData = function() {
                            return this.text().then(g)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    c.prototype.append = function(t, n) {
                        t = o(t), n = a(n);
                        var e = this.map[t];
                        this.map[t] = e ? e + ", " + n : n
                    }, c.prototype.delete = function(t) {
                        delete this.map[o(t)]
                    }, c.prototype.get = function(t) {
                        return t = o(t), this.has(t) ? this.map[t] : null
                    }, c.prototype.has = function(t) {
                        return this.map.hasOwnProperty(o(t))
                    }, c.prototype.set = function(t, n) {
                        this.map[o(t)] = a(n)
                    }, c.prototype.forEach = function(t, n) {
                        for (var e in this.map) this.map.hasOwnProperty(e) && t.call(n, this.map[e], e, this)
                    }, c.prototype.keys = function() {
                        var t = [];
                        return this.forEach(function(n, e) {
                            t.push(e)
                        }), s(t)
                    }, c.prototype.values = function() {
                        var t = [];
                        return this.forEach(function(n) {
                            t.push(n)
                        }), s(t)
                    }, c.prototype.entries = function() {
                        var t = [];
                        return this.forEach(function(n, e) {
                            t.push([e, n])
                        }), s(t)
                    }, n.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
                    var p = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function v(t, n) {
                        var e, i, r = (n = n || {}).body;
                        if (t instanceof v) {
                            if (t.bodyUsed) throw new TypeError("Already read");
                            this.url = t.url, this.credentials = t.credentials, n.headers || (this.headers = new c(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
                        } else this.url = String(t);
                        if (this.credentials = n.credentials || this.credentials || "same-origin", !n.headers && this.headers || (this.headers = new c(n.headers)), this.method = (e = n.method || this.method || "GET", i = e.toUpperCase(), p.indexOf(i) > -1 ? i : e), this.mode = n.mode || this.mode || null, this.signal = n.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(r)
                    }

                    function g(t) {
                        var n = new FormData;
                        return t.trim().split("&").forEach(function(t) {
                            if (t) {
                                var e = t.split("="),
                                    i = e.shift().replace(/\+/g, " "),
                                    r = e.join("=").replace(/\+/g, " ");
                                n.append(decodeURIComponent(i), decodeURIComponent(r))
                            }
                        }), n
                    }

                    function y(t, n) {
                        n || (n = {}), this.type = "default", this.status = void 0 === n.status ? 200 : n.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in n ? n.statusText : "OK", this.headers = new c(n.headers), this.url = n.url || "", this._initBody(t)
                    }
                    v.prototype.clone = function() {
                        return new v(this, {
                            body: this._bodyInit
                        })
                    }, h.call(v.prototype), h.call(y.prototype), y.prototype.clone = function() {
                        return new y(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new c(this.headers),
                            url: this.url
                        })
                    }, y.error = function() {
                        var t = new y(null, {
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error", t
                    };
                    var m = [301, 302, 303, 307, 308];
                    y.redirect = function(t, n) {
                        if (-1 === m.indexOf(n)) throw new RangeError("Invalid status code");
                        return new y(null, {
                            status: n,
                            headers: {
                                location: t
                            }
                        })
                    }, t.DOMException = self.DOMException;
                    try {
                        new t.DOMException
                    } catch (n) {
                        t.DOMException = function(t, n) {
                            this.message = t, this.name = n;
                            var e = Error(t);
                            this.stack = e.stack
                        }, t.DOMException.prototype = Object.create(Error.prototype), t.DOMException.prototype.constructor = t.DOMException
                    }

                    function b(e, r) {
                        return new i(function(i, o) {
                            var a = new v(e, r);
                            if (a.signal && a.signal.aborted) return o(new t.DOMException("Aborted", "AbortError"));
                            var s = new XMLHttpRequest;

                            function u() {
                                s.abort()
                            }
                            s.onload = function() {
                                var t, n, e = {
                                    status: s.status,
                                    statusText: s.statusText,
                                    headers: (t = s.getAllResponseHeaders() || "", n = new c, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                        var e = t.split(":"),
                                            i = e.shift().trim();
                                        if (i) {
                                            var r = e.join(":").trim();
                                            n.append(i, r)
                                        }
                                    }), n)
                                };
                                e.url = "responseURL" in s ? s.responseURL : e.headers.get("X-Request-URL");
                                var r = "response" in s ? s.response : s.responseText;
                                i(new y(r, e))
                            }, s.onerror = function() {
                                o(new TypeError("Network request failed"))
                            }, s.ontimeout = function() {
                                o(new TypeError("Network request failed"))
                            }, s.onabort = function() {
                                o(new t.DOMException("Aborted", "AbortError"))
                            }, s.open(a.method, a.url, !0), "include" === a.credentials ? s.withCredentials = !0 : "omit" === a.credentials && (s.withCredentials = !1), "responseType" in s && n.blob && (s.responseType = "blob"), a.headers.forEach(function(t, n) {
                                s.setRequestHeader(n, t)
                            }), a.signal && (a.signal.addEventListener("abort", u), s.onreadystatechange = function() {
                                4 === s.readyState && a.signal.removeEventListener("abort", u)
                            }), s.send(void 0 === a._bodyInit ? null : a._bodyInit)
                        })
                    }
                    b.polyfill = !0, self.fetch || (self.fetch = b, self.Headers = c, self.Request = v, self.Response = y), t.Headers = c, t.Request = v, t.Response = y, t.fetch = b, Object.defineProperty(t, "__esModule", {
                        value: !0
                    })
                }(n), t.exports = self.fetch
            }).call(e)
        }).call(this, e(67), e(29))
    }, function(t, n, e) {
        "use strict";
        e.d(n, "a", function() {
            return c
        });
        var i = e(6);

        function r(t, n) {
            for (var e = 0; e < n.length; e++) {
                var i = n[e];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        var o = e(124),
            a = e(123),
            s = e(32),
            c = function() {
                function t() {
                    ! function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.MINIMUM_TO_DISPLAY = 8;
                    var n = i.default.get();
                    this.topics = n.subscriptions.filter(function(t) {
                        return t.enabled
                    }), this.topicKeys = this.topics.map(function(t) {
                        return t.topic
                    })
                }
                var n, e, c;
                return n = t, (e = [{
                    key: "dedupeData",
                    value: function(t) {
                        var n = [],
                            e = [];
                        return t.forEach(function(t) {
                            n.indexOf(t.id) >= 0 || (e.push(t), n.push(t.id))
                        }), e
                    }
                }, {
                    key: "filterData",
                    value: function(t) {
                        var n = this,
                            e = i.default.get(),
                            r = e.preferences.productsEnabled.filter(function(t) {
                                return t.enabled
                            }).map(function(t) {
                                return t.product
                            });
                        return this.topics = e.subscriptions.filter(function(t) {
                            return t.enabled
                        }), this.topicKeys = this.topics.map(function(t) {
                            return t.topic
                        }), t.filter(function(t) {
                            return -1 !== r.indexOf(t.product) && t.topic.some(function(e) {
                                if (n.topicKeys && -1 !== n.topicKeys.indexOf(e)) {
                                    var i = o(n.topics, function(t) {
                                        return t.topic === e
                                    });
                                    if (i && new Date(t.creationTimestamp) > new Date(i.lastSubscribed)) return !0
                                }
                                return !1
                            })
                        })
                    }
                }, {
                    key: "loadData",
                    value: function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "latest.json",
                            e = "https:".concat(s.env.feedBaseUrl).concat(t, "/").concat(n),
                            i = new Date;
                        return a(e, {}, "latest.json" !== n).catch(function(t) {
                            throw t
                        }).then(function(t) {
                            var n = [];
                            if (!t) return {
                                list: n,
                                next: null,
                                reachedEnd: !0
                            };
                            var e = !1;
                            t.notifications && t.notifications.forEach(function(t) {
                                var r = new Date(t.creationTimestamp),
                                    o = Math.abs(i.getTime() - r.getTime()),
                                    a = Math.floor(o / 864e5);
                                a >= s.env.maxNotificationAge && (e = !0, a > s.env.maxNotificationAge) || n.push(t)
                            });
                            var r = t.next && "false" !== t.next ? t.next : null;
                            return {
                                list: n,
                                next: r,
                                reachedEnd: e
                            }
                        })
                    }
                }]) && r(n.prototype, e), c && r(n, c), t
            }()
    }, function(t, n) {
        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var i = function() {};
        i.prototype = {
            handledParse: function(t, n, e) {
                try {
                    return JSON.parse(t)
                } catch (t) {
                    return "function" == typeof e && e(), n || null
                }
            },
            extend: function() {
                var t, n, e, i, r = Array.prototype.slice.call(arguments),
                    o = this;
                if (0 === r.length) return {};

                function a(n, r) {
                    t[e][r] = o.isObject(n) ? o.extend(t[e][r], n, i) : n
                }
                n = r[r.length - 1], i = !0 === n, "boolean" == typeof n && r.pop();
                for (var s = 0; s < r.length; s++)
                    if (0 !== o.keys(r[s]).length)
                        for (var c in r[s]) i && !r[s].hasOwnProperty(c) || (t = t || {}, o.isArray(r[s][c]) && i ? void 0 !== t[c] && o.isArray(t[c]) ? (e = c, o.forEach(r[s][c], a)) : t[c] = r[s][c].slice() : o.isObject(r[s][c]) && i ? t[c] = o.isObject(t[c]) ? o.extend(t[c], r[s][c], i) : o.extend(r[s][c], i) : null !== r[s][c] && void 0 !== r[s][c] && (t[c] = r[s][c]));
                return t
            },
            forEach: function(t, n, e) {
                e = e || null;
                for (var i = 0, r = t.length; i < r; i++) i in t && n.call(e, t[i], i, t)
            },
            truncate: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 30,
                    e = t.substring(0, n + 1);
                return t.length > n ? -1 == e.indexOf(" ") ? e.substring(0, e.length - 1).trim() + "..." : e.substr(0, Math.min(e.length, e.lastIndexOf(" "))).trim() + "..." : t
            },
            each: function(t, n, e) {
                if (e = e || null, this.isObject(t))
                    for (var i in t) t.hasOwnProperty(i) && n.call(e, t[i], i)
            },
            bind: function(t, n) {
                if ("function" == typeof t) return t.bind ? t.bind(n) : function() {
                    t.apply(n, arguments)
                }
            },
            isArray: function(t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            keys: function(t) {
                var n = [];
                for (var e in t) t.hasOwnProperty(e) && n.push(e);
                return n
            },
            isObject: function(t) {
                return "object" === e(t) && null !== t
            }
        }, t.exports = i
    }, function(t, n) {
        var e;
        e = function() {
            return this
        }();
        try {
            e = e || new Function("return this")()
        } catch (t) {
            "object" == typeof window && (e = window)
        }
        t.exports = e
    }, function(t, n, e) {
        var i = e(3),
            r = e(2).document,
            o = i(r) && i(r.createElement);
        t.exports = function(t) {
            return o ? r.createElement(t) : {}
        }
    }, function(t, n, e) {
        var i = e(10),
            r = e(2),
            o = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        (t.exports = function(t, n) {
            return o[t] || (o[t] = void 0 !== n ? n : {})
        })("versions", []).push({
            version: i.version,
            mode: e(36) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    }, function(t, n, e) {
        n.f = e(5)
    }, function(t, n, e) {
        var i = e(69)("keys"),
            r = e(35);
        t.exports = function(t) {
            return i[t] || (i[t] = r(t))
        }
    }, function(t, n) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, n, e) {
        var i = e(25);
        t.exports = Array.isArray || function(t) {
            return "Array" == i(t)
        }
    }, function(t, n, e) {
        var i = e(2).document;
        t.exports = i && i.documentElement
    }, function(t, n, e) {
        var i = e(3),
            r = e(4),
            o = function(t, n) {
                if (r(t), !i(n) && null !== n) throw TypeError(n + ": can't set as prototype!")
            };
        t.exports = {
            set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, n, i) {
                try {
                    (i = e(23)(Function.call, e(19).f(Object.prototype, "__proto__").set, 2))(t, []), n = !(t instanceof Array)
                } catch (t) {
                    n = !0
                }
                return function(t, e) {
                    return o(t, e), n ? t.__proto__ = e : i(t, e), t
                }
            }({}, !1) : void 0),
            check: o
        }
    }, function(t, n) {
        t.exports = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"
    }, function(t, n, e) {
        var i = e(3),
            r = e(75).set;
        t.exports = function(t, n, e) {
            var o, a = n.constructor;
            return a !== e && "function" == typeof a && (o = a.prototype) !== e.prototype && i(o) && r && r(t, o), t
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(27),
            r = e(26);
        t.exports = function(t) {
            var n = String(r(this)),
                e = "",
                o = i(t);
            if (o < 0 || o == 1 / 0) throw RangeError("Count can't be negative");
            for (; o > 0;
                (o >>>= 1) && (n += n)) 1 & o && (e += n);
            return e
        }
    }, function(t, n) {
        t.exports = Math.sign || function(t) {
            return 0 == (t = +t) || t != t ? t : t < 0 ? -1 : 1
        }
    }, function(t, n) {
        var e = Math.expm1;
        t.exports = !e || e(10) > 22025.465794806718 || e(10) < 22025.465794806718 || -2e-17 != e(-2e-17) ? function(t) {
            return 0 == (t = +t) ? t : t > -1e-6 && t < 1e-6 ? t + t * t / 2 : Math.exp(t) - 1
        } : e
    }, function(t, n, e) {
        "use strict";
        var i = e(36),
            r = e(0),
            o = e(12),
            a = e(15),
            s = e(43),
            c = e(109),
            u = e(42),
            f = e(41),
            l = e(5)("iterator"),
            d = !([].keys && "next" in [].keys()),
            h = function() {
                return this
            };
        t.exports = function(t, n, e, p, v, g, y) {
            c(e, n, p);
            var m, b, w, _ = function(t) {
                    if (!d && t in A) return A[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new e(this, t)
                            }
                    }
                    return function() {
                        return new e(this, t)
                    }
                },
                x = n + " Iterator",
                S = "values" == v,
                E = !1,
                A = t.prototype,
                O = A[l] || A["@@iterator"] || v && A[v],
                T = O || _(v),
                k = v ? S ? _("entries") : T : void 0,
                P = "Array" == n && A.entries || O;
            if (P && (w = f(P.call(new t))) !== Object.prototype && w.next && (u(w, x, !0), i || "function" == typeof w[l] || a(w, l, h)), S && O && "values" !== O.name && (E = !0, T = function() {
                    return O.call(this)
                }), i && !y || !d && !E && A[l] || a(A, l, T), s[n] = T, s[x] = h, v)
                if (m = {
                        values: S ? T : _("values"),
                        keys: g ? T : _("keys"),
                        entries: k
                    }, y)
                    for (b in m) b in A || o(A, b, m[b]);
                else r(r.P + r.F * (d || E), n, m);
            return m
        }
    }, function(t, n, e) {
        var i = e(83),
            r = e(26);
        t.exports = function(t, n, e) {
            if (i(n)) throw TypeError("String#" + e + " doesn't accept regex!");
            return String(r(t))
        }
    }, function(t, n, e) {
        var i = e(3),
            r = e(25),
            o = e(5)("match");
        t.exports = function(t) {
            var n;
            return i(t) && (void 0 !== (n = t[o]) ? !!n : "RegExp" == r(t))
        }
    }, function(t, n, e) {
        var i = e(5)("match");
        t.exports = function(t) {
            var n = /./;
            try {
                "/./" [t](n)
            } catch (e) {
                try {
                    return n[i] = !1, !"/./" [t](n)
                } catch (t) {}
            }
            return !0
        }
    }, function(t, n, e) {
        var i = e(43),
            r = e(5)("iterator"),
            o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (i.Array === t || o[r] === t)
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(7),
            r = e(34);
        t.exports = function(t, n, e) {
            n in t ? i.f(t, n, r(0, e)) : t[n] = e
        }
    }, function(t, n, e) {
        var i = e(54),
            r = e(5)("iterator"),
            o = e(43);
        t.exports = e(10).getIteratorMethod = function(t) {
            if (null != t) return t[r] || t["@@iterator"] || o[i(t)]
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(17),
            r = e(38),
            o = e(11);
        t.exports = function(t) {
            for (var n = i(this), e = o(n.length), a = arguments.length, s = r(a > 1 ? arguments[1] : void 0, e), c = a > 2 ? arguments[2] : void 0, u = void 0 === c ? e : r(c, e); u > s;) n[s++] = t;
            return n
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(4);
        t.exports = function() {
            var t = i(this),
                n = "";
            return t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.unicode && (n += "u"), t.sticky && (n += "y"), n
        }
    }, function(t, n, e) {
        "use strict";
        var i, r, o, a, s = e(36),
            c = e(2),
            u = e(23),
            f = e(54),
            l = e(0),
            d = e(3),
            h = e(24),
            p = e(46),
            v = e(59),
            g = e(60),
            y = e(91).set,
            m = e(243)(),
            b = e(115),
            w = e(244),
            _ = e(61),
            x = e(116),
            S = c.TypeError,
            E = c.process,
            A = E && E.versions,
            O = A && A.v8 || "",
            T = c.Promise,
            k = "process" == f(E),
            P = function() {},
            N = r = b.f,
            j = !! function() {
                try {
                    var t = T.resolve(1),
                        n = (t.constructor = {})[e(5)("species")] = function(t) {
                            t(P, P)
                        };
                    return (k || "function" == typeof PromiseRejectionEvent) && t.then(P) instanceof n && 0 !== O.indexOf("6.6") && -1 === _.indexOf("Chrome/66")
                } catch (t) {}
            }(),
            I = function(t) {
                var n;
                return !(!d(t) || "function" != typeof(n = t.then)) && n
            },
            M = function(t, n) {
                if (!t._n) {
                    t._n = !0;
                    var e = t._c;
                    m(function() {
                        for (var i = t._v, r = 1 == t._s, o = 0, a = function(n) {
                                var e, o, a, s = r ? n.ok : n.fail,
                                    c = n.resolve,
                                    u = n.reject,
                                    f = n.domain;
                                try {
                                    s ? (r || (2 == t._h && F(t), t._h = 1), !0 === s ? e = i : (f && f.enter(), e = s(i), f && (f.exit(), a = !0)), e === n.promise ? u(S("Promise-chain cycle")) : (o = I(e)) ? o.call(e, c, u) : c(e)) : u(i)
                                } catch (t) {
                                    f && !a && f.exit(), u(t)
                                }
                            }; e.length > o;) a(e[o++]);
                        t._c = [], t._n = !1, n && !t._h && C(t)
                    })
                }
            },
            C = function(t) {
                y.call(c, function() {
                    var n, e, i, r = t._v,
                        o = L(t);
                    if (o && (n = w(function() {
                            k ? E.emit("unhandledRejection", r, t) : (e = c.onunhandledrejection) ? e({
                                promise: t,
                                reason: r
                            }) : (i = c.console) && i.error && i.error("Unhandled promise rejection", r)
                        }), t._h = k || L(t) ? 2 : 1), t._a = void 0, o && n.e) throw n.v
                })
            },
            L = function(t) {
                return 1 !== t._h && 0 === (t._a || t._c).length
            },
            F = function(t) {
                y.call(c, function() {
                    var n;
                    k ? E.emit("rejectionHandled", t) : (n = c.onrejectionhandled) && n({
                        promise: t,
                        reason: t._v
                    })
                })
            },
            R = function(t) {
                var n = this;
                n._d || (n._d = !0, (n = n._w || n)._v = t, n._s = 2, n._a || (n._a = n._c.slice()), M(n, !0))
            },
            D = function(t) {
                var n, e = this;
                if (!e._d) {
                    e._d = !0, e = e._w || e;
                    try {
                        if (e === t) throw S("Promise can't be resolved itself");
                        (n = I(t)) ? m(function() {
                            var i = {
                                _w: e,
                                _d: !1
                            };
                            try {
                                n.call(t, u(D, i, 1), u(R, i, 1))
                            } catch (t) {
                                R.call(i, t)
                            }
                        }): (e._v = t, e._s = 1, M(e, !1))
                    } catch (t) {
                        R.call({
                            _w: e,
                            _d: !1
                        }, t)
                    }
                }
            };
        j || (T = function(t) {
            p(this, T, "Promise", "_h"), h(t), i.call(this);
            try {
                t(u(D, this, 1), u(R, this, 1))
            } catch (t) {
                R.call(this, t)
            }
        }, (i = function(t) {
            this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
        }).prototype = e(47)(T.prototype, {
            then: function(t, n) {
                var e = N(g(this, T));
                return e.ok = "function" != typeof t || t, e.fail = "function" == typeof n && n, e.domain = k ? E.domain : void 0, this._c.push(e), this._a && this._a.push(e), this._s && M(this, !1), e.promise
            },
            catch: function(t) {
                return this.then(void 0, t)
            }
        }), o = function() {
            var t = new i;
            this.promise = t, this.resolve = u(D, t, 1), this.reject = u(R, t, 1)
        }, b.f = N = function(t) {
            return t === T || t === a ? new o(t) : r(t)
        }), l(l.G + l.W + l.F * !j, {
            Promise: T
        }), e(42)(T, "Promise"), e(45)("Promise"), a = e(10).Promise, l(l.S + l.F * !j, "Promise", {
            reject: function(t) {
                var n = N(this);
                return (0, n.reject)(t), n.promise
            }
        }), l(l.S + l.F * (s || !j), "Promise", {
            resolve: function(t) {
                return x(s && this === a ? T : this, t)
            }
        }), l(l.S + l.F * !(j && e(56)(function(t) {
            T.all(t).catch(P)
        })), "Promise", {
            all: function(t) {
                var n = this,
                    e = N(n),
                    i = e.resolve,
                    r = e.reject,
                    o = w(function() {
                        var e = [],
                            o = 0,
                            a = 1;
                        v(t, !1, function(t) {
                            var s = o++,
                                c = !1;
                            e.push(void 0), a++, n.resolve(t).then(function(t) {
                                c || (c = !0, e[s] = t, --a || i(e))
                            }, r)
                        }), --a || i(e)
                    });
                return o.e && r(o.v), e.promise
            },
            race: function(t) {
                var n = this,
                    e = N(n),
                    i = e.reject,
                    r = w(function() {
                        v(t, !1, function(t) {
                            n.resolve(t).then(e.resolve, i)
                        })
                    });
                return r.e && i(r.v), e.promise
            }
        })
    }, function(t, n, e) {
        var i, r, o, a = e(23),
            s = e(102),
            c = e(74),
            u = e(68),
            f = e(2),
            l = f.process,
            d = f.setImmediate,
            h = f.clearImmediate,
            p = f.MessageChannel,
            v = f.Dispatch,
            g = 0,
            y = {},
            m = function() {
                var t = +this;
                if (y.hasOwnProperty(t)) {
                    var n = y[t];
                    delete y[t], n()
                }
            },
            b = function(t) {
                m.call(t.data)
            };
        d && h || (d = function(t) {
            for (var n = [], e = 1; arguments.length > e;) n.push(arguments[e++]);
            return y[++g] = function() {
                s("function" == typeof t ? t : Function(t), n)
            }, i(g), g
        }, h = function(t) {
            delete y[t]
        }, "process" == e(25)(l) ? i = function(t) {
            l.nextTick(a(m, t, 1))
        } : v && v.now ? i = function(t) {
            v.now(a(m, t, 1))
        } : p ? (o = (r = new p).port2, r.port1.onmessage = b, i = a(o.postMessage, o, 1)) : f.addEventListener && "function" == typeof postMessage && !f.importScripts ? (i = function(t) {
            f.postMessage(t + "", "*")
        }, f.addEventListener("message", b, !1)) : i = "onreadystatechange" in u("script") ? function(t) {
            c.appendChild(u("script")).onreadystatechange = function() {
                c.removeChild(this), m.call(t)
            }
        } : function(t) {
            setTimeout(a(m, t, 1), 0)
        }), t.exports = {
            set: d,
            clear: h
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(2),
            r = e(9),
            o = e(36),
            a = e(63),
            s = e(15),
            c = e(47),
            u = e(1),
            f = e(46),
            l = e(27),
            d = e(11),
            h = e(119),
            p = e(40).f,
            v = e(7).f,
            g = e(88),
            y = e(42),
            m = "prototype",
            b = "Wrong index!",
            w = i.ArrayBuffer,
            _ = i.DataView,
            x = i.Math,
            S = i.RangeError,
            E = i.Infinity,
            A = w,
            O = x.abs,
            T = x.pow,
            k = x.floor,
            P = x.log,
            N = x.LN2,
            j = r ? "_b" : "buffer",
            I = r ? "_l" : "byteLength",
            M = r ? "_o" : "byteOffset";

        function C(t, n, e) {
            var i, r, o, a = new Array(e),
                s = 8 * e - n - 1,
                c = (1 << s) - 1,
                u = c >> 1,
                f = 23 === n ? T(2, -24) - T(2, -77) : 0,
                l = 0,
                d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for ((t = O(t)) != t || t === E ? (r = t != t ? 1 : 0, i = c) : (i = k(P(t) / N), t * (o = T(2, -i)) < 1 && (i--, o *= 2), (t += i + u >= 1 ? f / o : f * T(2, 1 - u)) * o >= 2 && (i++, o /= 2), i + u >= c ? (r = 0, i = c) : i + u >= 1 ? (r = (t * o - 1) * T(2, n), i += u) : (r = t * T(2, u - 1) * T(2, n), i = 0)); n >= 8; a[l++] = 255 & r, r /= 256, n -= 8);
            for (i = i << n | r, s += n; s > 0; a[l++] = 255 & i, i /= 256, s -= 8);
            return a[--l] |= 128 * d, a
        }

        function L(t, n, e) {
            var i, r = 8 * e - n - 1,
                o = (1 << r) - 1,
                a = o >> 1,
                s = r - 7,
                c = e - 1,
                u = t[c--],
                f = 127 & u;
            for (u >>= 7; s > 0; f = 256 * f + t[c], c--, s -= 8);
            for (i = f & (1 << -s) - 1, f >>= -s, s += n; s > 0; i = 256 * i + t[c], c--, s -= 8);
            if (0 === f) f = 1 - a;
            else {
                if (f === o) return i ? NaN : u ? -E : E;
                i += T(2, n), f -= a
            }
            return (u ? -1 : 1) * i * T(2, f - n)
        }

        function F(t) {
            return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0]
        }

        function R(t) {
            return [255 & t]
        }

        function D(t) {
            return [255 & t, t >> 8 & 255]
        }

        function B(t) {
            return [255 & t, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255]
        }

        function U(t) {
            return C(t, 52, 8)
        }

        function G(t) {
            return C(t, 23, 4)
        }

        function H(t, n, e) {
            v(t[m], n, {
                get: function() {
                    return this[e]
                }
            })
        }

        function W(t, n, e, i) {
            var r = h(+e);
            if (r + n > t[I]) throw S(b);
            var o = t[j]._b,
                a = r + t[M],
                s = o.slice(a, a + n);
            return i ? s : s.reverse()
        }

        function V(t, n, e, i, r, o) {
            var a = h(+e);
            if (a + n > t[I]) throw S(b);
            for (var s = t[j]._b, c = a + t[M], u = i(+r), f = 0; f < n; f++) s[c + f] = u[o ? f : n - f - 1]
        }
        if (a.ABV) {
            if (!u(function() {
                    w(1)
                }) || !u(function() {
                    new w(-1)
                }) || u(function() {
                    return new w, new w(1.5), new w(NaN), "ArrayBuffer" != w.name
                })) {
                for (var K, q = (w = function(t) {
                        return f(this, w), new A(h(t))
                    })[m] = A[m], Y = p(A), $ = 0; Y.length > $;)(K = Y[$++]) in w || s(w, K, A[K]);
                o || (q.constructor = w)
            }
            var z = new _(new w(2)),
                J = _[m].setInt8;
            z.setInt8(0, 2147483648), z.setInt8(1, 2147483649), !z.getInt8(0) && z.getInt8(1) || c(_[m], {
                setInt8: function(t, n) {
                    J.call(this, t, n << 24 >> 24)
                },
                setUint8: function(t, n) {
                    J.call(this, t, n << 24 >> 24)
                }
            }, !0)
        } else w = function(t) {
            f(this, w, "ArrayBuffer");
            var n = h(t);
            this._b = g.call(new Array(n), 0), this[I] = n
        }, _ = function(t, n, e) {
            f(this, _, "DataView"), f(t, w, "DataView");
            var i = t[I],
                r = l(n);
            if (r < 0 || r > i) throw S("Wrong offset!");
            if (r + (e = void 0 === e ? i - r : d(e)) > i) throw S("Wrong length!");
            this[j] = t, this[M] = r, this[I] = e
        }, r && (H(w, "byteLength", "_l"), H(_, "buffer", "_b"), H(_, "byteLength", "_l"), H(_, "byteOffset", "_o")), c(_[m], {
            getInt8: function(t) {
                return W(this, 1, t)[0] << 24 >> 24
            },
            getUint8: function(t) {
                return W(this, 1, t)[0]
            },
            getInt16: function(t) {
                var n = W(this, 2, t, arguments[1]);
                return (n[1] << 8 | n[0]) << 16 >> 16
            },
            getUint16: function(t) {
                var n = W(this, 2, t, arguments[1]);
                return n[1] << 8 | n[0]
            },
            getInt32: function(t) {
                return F(W(this, 4, t, arguments[1]))
            },
            getUint32: function(t) {
                return F(W(this, 4, t, arguments[1])) >>> 0
            },
            getFloat32: function(t) {
                return L(W(this, 4, t, arguments[1]), 23, 4)
            },
            getFloat64: function(t) {
                return L(W(this, 8, t, arguments[1]), 52, 8)
            },
            setInt8: function(t, n) {
                V(this, 1, t, R, n)
            },
            setUint8: function(t, n) {
                V(this, 1, t, R, n)
            },
            setInt16: function(t, n) {
                V(this, 2, t, D, n, arguments[2])
            },
            setUint16: function(t, n) {
                V(this, 2, t, D, n, arguments[2])
            },
            setInt32: function(t, n) {
                V(this, 4, t, B, n, arguments[2])
            },
            setUint32: function(t, n) {
                V(this, 4, t, B, n, arguments[2])
            },
            setFloat32: function(t, n) {
                V(this, 4, t, G, n, arguments[2])
            },
            setFloat64: function(t, n) {
                V(this, 8, t, U, n, arguments[2])
            }
        });
        y(w, "ArrayBuffer"), y(_, "DataView"), s(_[m], a.VIEW, !0), n.ArrayBuffer = w, n.DataView = _
    }, function(t, n) {
        var e = [];
        t.exports = {
            log: function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "notifications",
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : window.location.href,
                    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "event",
                    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : void 0,
                    a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : void 0,
                    s = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : "Personalisation",
                    c = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : "rw",
                    u = {
                        detail: {
                            container: s,
                            label: arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : "Notifications",
                            type: c,
                            source: e
                        }
                    };
                n && (u.detail.metadata = n), i && (u.detail.result = i), t && (u.detail.personalisation = {
                    PER: t
                }), a && (u.detail.elem = a), o && (u.detail.originalEvent = o), document.dispatchEvent(new CustomEvent("bbc-user-".concat(r), u))
            },
            logClick: function(t, n) {
                var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "notifications",
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : window.location.href,
                    r = arguments.length > 4 ? arguments[4] : void 0,
                    o = arguments.length > 5 ? arguments[5] : void 0;
                this.log(t, n, e, i, "click", r, o)
            },
            serialiseTopic: function(t) {
                var n, e = t.slice(0);
                return e.forEach(function(t, n, e) {
                    e[n] = t.substring(0, t.lastIndexOf(":"))
                }), n = e.slice(0, 5).join("!").replace(/urn:bbc:/g, "").replace(/:/g, "-"), n = e.length > 5 ? n.concat("!more than 5") : n
            },
            logNotification: function(t) {
                this.log(t.notification.title, {
                    STA: "blueDot",
                    PRI: (t.priority || "normal").toLowerCase(),
                    TOP: this.serialiseTopic(t.topic)
                }, t.product.toLowerCase(), t.url), e.push(t.id)
            },
            logNewNotifications: function(t, n) {
                var i = this;
                "shown" === n && t.forEach(function(t) {
                    "new" === t.status && -1 === e.indexOf(t.id) && i.logNotification(t)
                })
            }
        }
    }, function(t, n, e) {
        "use strict";
        e.r(n),
            function(t, i) {
                e.d(n, "convertHtml", function() {
                    return f
                }), e.d(n, "UserState", function() {
                    return d
                });
                var r = e(6),
                    o = e(32),
                    a = e(33);

                function s(t, n) {
                    return function(t) {
                        if (Array.isArray(t)) return t
                    }(t) || function(t, n) {
                        var e = [],
                            i = !0,
                            r = !1,
                            o = void 0;
                        try {
                            for (var a, s = t[Symbol.iterator](); !(i = (a = s.next()).done) && (e.push(a.value), !n || e.length !== n); i = !0);
                        } catch (t) {
                            r = !0, o = t
                        } finally {
                            try {
                                i || null == s.return || s.return()
                            } finally {
                                if (r) throw o
                            }
                        }
                        return e
                    }(t, n) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function c(t, n) {
                    for (var e = 0; e < n.length; e++) {
                        var i = n[e];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }
                var u = encodeURIComponent(window.location.href.replace(window.location.hash, ""));

                function f(t) {
                    var n, e = {
                        html: t.replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, function(t) {
                            var e = t.substring(t.indexOf(">") + 1);
                            return e = e.slice(0, e.indexOf("</script")), n = e, ""
                        })
                    };
                    return n && (e.htmlJs = encodeURI(n)), e
                }

                function l(t) {
                    if (t.ok) return t;
                    var n = new Error("HTTP request failed ".concat(t.statusText));
                    throw n.response = t, n
                }
                var d = function() {
                    function n() {
                        ! function(t, n) {
                            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                        }(this, n)
                    }
                    var e, d, h;
                    return e = n, (d = [{
                        key: "isSignedIn",
                        value: function() {
                            return a.a().then(function(t) {
                                return t.hasCookie()
                            })
                        }
                    }, {
                        key: "isOnboarded",
                        value: function() {
                            return a.a().then(function(t) {
                                var n = t.getUserDetailsFromCookie();
                                return !(!n || "u13" !== n.ab) || r.default.fetch().then(function(t) {
                                    return null !== t && void 0 !== t.preferences.hasOnboarded && t.preferences.hasOnboarded
                                })
                            })
                        }
                    }, {
                        key: "setIdctaResponse",
                        value: function(t, n) {
                            t.idctaResponse = n, n.policyCheck && (t.policyIssue = Object.keys(n.policyCheck)[0])
                        }
                    }, {
                        key: "load",
                        value: function() {
                            var n = this;
                            return t.all([this.isSignedIn(), new t(function(t, n) {
                                return a.a().then(function(n) {
                                    var e = n.getUserDetailsFromCookie() || {};
                                    if (n.hasCookie() && "u13" !== e.ab) return t(null);
                                    var a = r.default.fetchCorrectDomainEndpoint(o.env.preferencesUrls.idctaUK, o.env.preferencesUrls.idcta);
                                    return i("".concat(a, "?policy=notification&buttonColour=white&ptrt=").concat(u), {
                                        credentials: "include"
                                    }).catch(function(t) {
                                        throw t
                                    }).then(l).then(function(t) {
                                        return t.json()
                                    }).then(function(t) {
                                        if (t.inlineHead) {
                                            var n = f(t.inlineHead),
                                                e = decodeURI(n.htmlJs),
                                                i = document.createElement("script");
                                            i.type = "text/javascript", i.innerHTML = e, document.getElementsByTagName("head")[0].append(i)
                                        }
                                        if (t.html) {
                                            var r = f(t.html);
                                            t.html = r.html, r.htmlJs && (t.htmlJs = r.htmlJs)
                                        }
                                        return t
                                    }).then(function(n) {
                                        return t(n)
                                    })
                                }).catch(function(t) {
                                    n(t)
                                })
                            })]).catch(function(t) {
                                throw t
                            }).then(function(t) {
                                var e = s(t, 2),
                                    i = e[0],
                                    r = e[1],
                                    o = {
                                        signedIn: i
                                    };
                                return r && n.setIdctaResponse(o, r), i ? n.isOnboarded().then(function(t) {
                                    return o.onboarded = t, o
                                }) : o
                            })
                        }
                    }]) && c(e.prototype, d), h && c(e, h), n
                }()
            }.call(this, e(29), e(64))
    }, function(t, n, e) {
        t.exports = !e(9) && !e(1)(function() {
            return 7 != Object.defineProperty(e(68)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, n, e) {
        var i = e(2),
            r = e(10),
            o = e(36),
            a = e(70),
            s = e(7).f;
        t.exports = function(t) {
            var n = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
            "_" == t.charAt(0) || t in n || s(n, t, {
                value: a.f(t)
            })
        }
    }, function(t, n, e) {
        var i = e(14),
            r = e(16),
            o = e(52)(!1),
            a = e(71)("IE_PROTO");
        t.exports = function(t, n) {
            var e, s = r(t),
                c = 0,
                u = [];
            for (e in s) e != a && i(s, e) && u.push(e);
            for (; n.length > c;) i(s, e = n[c++]) && (~o(u, e) || u.push(e));
            return u
        }
    }, function(t, n, e) {
        var i = e(7),
            r = e(4),
            o = e(37);
        t.exports = e(9) ? Object.defineProperties : function(t, n) {
            r(t);
            for (var e, a = o(n), s = a.length, c = 0; s > c;) i.f(t, e = a[c++], n[e]);
            return t
        }
    }, function(t, n, e) {
        var i = e(16),
            r = e(40).f,
            o = {}.toString,
            a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        t.exports.f = function(t) {
            return a && "[object Window]" == o.call(t) ? function(t) {
                try {
                    return r(t)
                } catch (t) {
                    return a.slice()
                }
            }(t) : r(i(t))
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(37),
            r = e(53),
            o = e(51),
            a = e(17),
            s = e(50),
            c = Object.assign;
        t.exports = !c || e(1)(function() {
            var t = {},
                n = {},
                e = Symbol(),
                i = "abcdefghijklmnopqrst";
            return t[e] = 7, i.split("").forEach(function(t) {
                n[t] = t
            }), 7 != c({}, t)[e] || Object.keys(c({}, n)).join("") != i
        }) ? function(t, n) {
            for (var e = a(t), c = arguments.length, u = 1, f = r.f, l = o.f; c > u;)
                for (var d, h = s(arguments[u++]), p = f ? i(h).concat(f(h)) : i(h), v = p.length, g = 0; v > g;) l.call(h, d = p[g++]) && (e[d] = h[d]);
            return e
        } : c
    }, function(t, n, e) {
        "use strict";
        var i = e(24),
            r = e(3),
            o = e(102),
            a = [].slice,
            s = {};
        t.exports = Function.bind || function(t) {
            var n = i(this),
                e = a.call(arguments, 1),
                c = function() {
                    var i = e.concat(a.call(arguments));
                    return this instanceof c ? function(t, n, e) {
                        if (!(n in s)) {
                            for (var i = [], r = 0; r < n; r++) i[r] = "a[" + r + "]";
                            s[n] = Function("F,a", "return new F(" + i.join(",") + ")")
                        }
                        return s[n](t, e)
                    }(n, i.length, i) : o(n, i, t)
                };
            return r(n.prototype) && (c.prototype = n.prototype), c
        }
    }, function(t, n) {
        t.exports = function(t, n, e) {
            var i = void 0 === e;
            switch (n.length) {
                case 0:
                    return i ? t() : t.call(e);
                case 1:
                    return i ? t(n[0]) : t.call(e, n[0]);
                case 2:
                    return i ? t(n[0], n[1]) : t.call(e, n[0], n[1]);
                case 3:
                    return i ? t(n[0], n[1], n[2]) : t.call(e, n[0], n[1], n[2]);
                case 4:
                    return i ? t(n[0], n[1], n[2], n[3]) : t.call(e, n[0], n[1], n[2], n[3])
            }
            return t.apply(e, n)
        }
    }, function(t, n, e) {
        var i = e(2).parseInt,
            r = e(55).trim,
            o = e(76),
            a = /^[-+]?0[xX]/;
        t.exports = 8 !== i(o + "08") || 22 !== i(o + "0x16") ? function(t, n) {
            var e = r(String(t), 3);
            return i(e, n >>> 0 || (a.test(e) ? 16 : 10))
        } : i
    }, function(t, n, e) {
        var i = e(2).parseFloat,
            r = e(55).trim;
        t.exports = 1 / i(e(76) + "-0") != -1 / 0 ? function(t) {
            var n = r(String(t), 3),
                e = i(n);
            return 0 === e && "-" == n.charAt(0) ? -0 : e
        } : i
    }, function(t, n, e) {
        var i = e(25);
        t.exports = function(t, n) {
            if ("number" != typeof t && "Number" != i(t)) throw TypeError(n);
            return +t
        }
    }, function(t, n, e) {
        var i = e(3),
            r = Math.floor;
        t.exports = function(t) {
            return !i(t) && isFinite(t) && r(t) === t
        }
    }, function(t, n) {
        t.exports = Math.log1p || function(t) {
            return (t = +t) > -1e-8 && t < 1e-8 ? t - t * t / 2 : Math.log(1 + t)
        }
    }, function(t, n, e) {
        var i = e(27),
            r = e(26);
        t.exports = function(t) {
            return function(n, e) {
                var o, a, s = String(r(n)),
                    c = i(e),
                    u = s.length;
                return c < 0 || c >= u ? t ? "" : void 0 : (o = s.charCodeAt(c)) < 55296 || o > 56319 || c + 1 === u || (a = s.charCodeAt(c + 1)) < 56320 || a > 57343 ? t ? s.charAt(c) : o : t ? s.slice(c, c + 2) : a - 56320 + (o - 55296 << 10) + 65536
            }
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(39),
            r = e(34),
            o = e(42),
            a = {};
        e(15)(a, e(5)("iterator"), function() {
            return this
        }), t.exports = function(t, n, e) {
            t.prototype = i(a, {
                next: r(1, e)
            }), o(t, n + " Iterator")
        }
    }, function(t, n, e) {
        var i = e(4);
        t.exports = function(t, n, e, r) {
            try {
                return r ? n(i(e)[0], e[1]) : n(e)
            } catch (n) {
                var o = t.return;
                throw void 0 !== o && i(o.call(t)), n
            }
        }
    }, function(t, n, e) {
        var i = e(24),
            r = e(17),
            o = e(50),
            a = e(11);
        t.exports = function(t, n, e, s, c) {
            i(n);
            var u = r(t),
                f = o(u),
                l = a(u.length),
                d = c ? l - 1 : 0,
                h = c ? -1 : 1;
            if (e < 2)
                for (;;) {
                    if (d in f) {
                        s = f[d], d += h;
                        break
                    }
                    if (d += h, c ? d < 0 : l <= d) throw TypeError("Reduce of empty array with no initial value")
                }
            for (; c ? d >= 0 : l > d; d += h) d in f && (s = n(s, f[d], d, u));
            return s
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(17),
            r = e(38),
            o = e(11);
        t.exports = [].copyWithin || function(t, n) {
            var e = i(this),
                a = o(e.length),
                s = r(t, a),
                c = r(n, a),
                u = arguments.length > 2 ? arguments[2] : void 0,
                f = Math.min((void 0 === u ? a : r(u, a)) - c, a - s),
                l = 1;
            for (c < s && s < c + f && (l = -1, c += f - 1, s += f - 1); f-- > 0;) c in e ? e[s] = e[c] : delete e[s], s += l, c += l;
            return e
        }
    }, function(t, n) {
        t.exports = function(t, n) {
            return {
                value: n,
                done: !!t
            }
        }
    }, function(t, n, e) {
        e(9) && "g" != /./g.flags && e(7).f(RegExp.prototype, "flags", {
            configurable: !0,
            get: e(89)
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(24);

        function r(t) {
            var n, e;
            this.promise = new t(function(t, i) {
                if (void 0 !== n || void 0 !== e) throw TypeError("Bad Promise constructor");
                n = t, e = i
            }), this.resolve = i(n), this.reject = i(e)
        }
        t.exports.f = function(t) {
            return new r(t)
        }
    }, function(t, n, e) {
        var i = e(4),
            r = e(3),
            o = e(115);
        t.exports = function(t, n) {
            if (i(t), r(n) && n.constructor === t) return n;
            var e = o.f(t);
            return (0, e.resolve)(n), e.promise
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(7).f,
            r = e(39),
            o = e(47),
            a = e(23),
            s = e(46),
            c = e(59),
            u = e(81),
            f = e(113),
            l = e(45),
            d = e(9),
            h = e(31).fastKey,
            p = e(48),
            v = d ? "_s" : "size",
            g = function(t, n) {
                var e, i = h(n);
                if ("F" !== i) return t._i[i];
                for (e = t._f; e; e = e.n)
                    if (e.k == n) return e
            };
        t.exports = {
            getConstructor: function(t, n, e, u) {
                var f = t(function(t, i) {
                    s(t, f, n, "_i"), t._t = n, t._i = r(null), t._f = void 0, t._l = void 0, t[v] = 0, null != i && c(i, e, t[u], t)
                });
                return o(f.prototype, {
                    clear: function() {
                        for (var t = p(this, n), e = t._i, i = t._f; i; i = i.n) i.r = !0, i.p && (i.p = i.p.n = void 0), delete e[i.i];
                        t._f = t._l = void 0, t[v] = 0
                    },
                    delete: function(t) {
                        var e = p(this, n),
                            i = g(e, t);
                        if (i) {
                            var r = i.n,
                                o = i.p;
                            delete e._i[i.i], i.r = !0, o && (o.n = r), r && (r.p = o), e._f == i && (e._f = r), e._l == i && (e._l = o), e[v]--
                        }
                        return !!i
                    },
                    forEach: function(t) {
                        p(this, n);
                        for (var e, i = a(t, arguments.length > 1 ? arguments[1] : void 0, 3); e = e ? e.n : this._f;)
                            for (i(e.v, e.k, this); e && e.r;) e = e.p
                    },
                    has: function(t) {
                        return !!g(p(this, n), t)
                    }
                }), d && i(f.prototype, "size", {
                    get: function() {
                        return p(this, n)[v]
                    }
                }), f
            },
            def: function(t, n, e) {
                var i, r, o = g(t, n);
                return o ? o.v = e : (t._l = o = {
                    i: r = h(n, !0),
                    k: n,
                    v: e,
                    p: i = t._l,
                    n: void 0,
                    r: !1
                }, t._f || (t._f = o), i && (i.n = o), t[v]++, "F" !== r && (t._i[r] = o)), t
            },
            getEntry: g,
            setStrong: function(t, n, e) {
                u(t, n, function(t, e) {
                    this._t = p(t, n), this._k = e, this._l = void 0
                }, function() {
                    for (var t = this._k, n = this._l; n && n.r;) n = n.p;
                    return this._t && (this._l = n = n ? n.n : this._t._f) ? f(0, "keys" == t ? n.k : "values" == t ? n.v : [n.k, n.v]) : (this._t = void 0, f(1))
                }, e ? "entries" : "values", !e, !0), l(n)
            }
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(47),
            r = e(31).getWeak,
            o = e(4),
            a = e(3),
            s = e(46),
            c = e(59),
            u = e(21),
            f = e(14),
            l = e(48),
            d = u(5),
            h = u(6),
            p = 0,
            v = function(t) {
                return t._l || (t._l = new g)
            },
            g = function() {
                this.a = []
            },
            y = function(t, n) {
                return d(t.a, function(t) {
                    return t[0] === n
                })
            };
        g.prototype = {
            get: function(t) {
                var n = y(this, t);
                if (n) return n[1]
            },
            has: function(t) {
                return !!y(this, t)
            },
            set: function(t, n) {
                var e = y(this, t);
                e ? e[1] = n : this.a.push([t, n])
            },
            delete: function(t) {
                var n = h(this.a, function(n) {
                    return n[0] === t
                });
                return ~n && this.a.splice(n, 1), !!~n
            }
        }, t.exports = {
            getConstructor: function(t, n, e, o) {
                var u = t(function(t, i) {
                    s(t, u, n, "_i"), t._t = n, t._i = p++, t._l = void 0, null != i && c(i, e, t[o], t)
                });
                return i(u.prototype, {
                    delete: function(t) {
                        if (!a(t)) return !1;
                        var e = r(t);
                        return !0 === e ? v(l(this, n)).delete(t) : e && f(e, this._i) && delete e[this._i]
                    },
                    has: function(t) {
                        if (!a(t)) return !1;
                        var e = r(t);
                        return !0 === e ? v(l(this, n)).has(t) : e && f(e, this._i)
                    }
                }), u
            },
            def: function(t, n, e) {
                var i = r(o(n), !0);
                return !0 === i ? v(t).set(n, e) : i[t._i] = e, t
            },
            ufstore: v
        }
    }, function(t, n, e) {
        var i = e(27),
            r = e(11);
        t.exports = function(t) {
            if (void 0 === t) return 0;
            var n = i(t),
                e = r(n);
            if (n !== e) throw RangeError("Wrong length!");
            return e
        }
    }, function(t, n, e) {
        var i = e(40),
            r = e(53),
            o = e(4),
            a = e(2).Reflect;
        t.exports = a && a.ownKeys || function(t) {
            var n = i.f(o(t)),
                e = r.f;
            return e ? n.concat(e(t)) : n
        }
    }, function(t, n, e) {
        var i = e(11),
            r = e(78),
            o = e(26);
        t.exports = function(t, n, e, a) {
            var s = String(o(t)),
                c = s.length,
                u = void 0 === e ? " " : String(e),
                f = i(n);
            if (f <= c || "" == u) return s;
            var l = f - c,
                d = r.call(u, Math.ceil(l / u.length));
            return d.length > l && (d = d.slice(0, l)), a ? d + s : s + d
        }
    }, function(t, n, e) {
        var i = e(37),
            r = e(16),
            o = e(51).f;
        t.exports = function(t) {
            return function(n) {
                for (var e, a = r(n), s = i(a), c = s.length, u = 0, f = []; c > u;) o.call(a, e = s[u++]) && f.push(t ? [e, a[e]] : a[e]);
                return f
            }
        }
    }, function(t, n, e) {
        (function(n, e) {
            function i(t) {
                if (!t) return null;
                if (function(t) {
                        try {
                            JSON.parse(t)
                        } catch (t) {
                            return !1
                        }
                        return !0
                    }(t)) return JSON.parse(t);
                var n = t;
                return n = (n = n.substring(n.indexOf("(") + 1)).substring(0, n.length - 1), JSON.parse(n)
            }

            function r(t) {
                if (t.status >= 200 && t.status < 500) return t;
                var n = new Error("HTTP request failed ".concat(t.statusText));
                throw n.response = t, n
            }
            t.exports = function(t, o) {
                var a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    s = "bbc-notifications-".concat(t);
                return a && sessionStorage.getItem(s) ? new n(function(t) {
                    t(JSON.parse(sessionStorage.getItem(s)))
                }) : e(t, o).then(r).then(function(t) {
                    return 404 === t.status ? null : t.text()
                }).then(function(t) {
                    var n = i(t);
                    return a && n && sessionStorage.setItem(s, JSON.stringify(n)), n
                }).catch(function(t) {
                    throw t
                })
            }
        }).call(this, e(29), e(64))
    }, function(t, n, e) {
        "use strict";
        t.exports = function(t, n, e) {
            if ("function" == typeof Array.prototype.find) return t.find(n, e);
            e = e || this;
            var i, r = t.length;
            if ("function" != typeof n) throw new TypeError(n + " is not a function");
            for (i = 0; i < r; i++)
                if (n.call(e, t[i], i, t)) return t[i]
        }
    }, function(t, n, e) {
        "use strict";
        (function(t) {
            var i = e(65);

            function r(t) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function o(t, n) {
                for (var e = 0; e < n.length; e++) {
                    var i = n[e];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }

            function a(t, n) {
                return !n || "object" !== r(n) && "function" != typeof n ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : n
            }

            function s(t, n, e) {
                return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, n, e) {
                    var i = function(t, n) {
                        for (; !Object.prototype.hasOwnProperty.call(t, n) && null !== (t = c(t)););
                        return t
                    }(t, n);
                    if (i) {
                        var r = Object.getOwnPropertyDescriptor(i, n);
                        return r.get ? r.get.call(e) : r.value
                    }
                })(t, n, e || t)
            }

            function c(t) {
                return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }

            function u(t, n) {
                return (u = Object.setPrototypeOf || function(t, n) {
                    return t.__proto__ = n, t
                })(t, n)
            }
            var f = function(n) {
                function e() {
                    var t;
                    return function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (t = a(this, c(e).call(this))).TOPIC_NEXT_DISPLAY_PAGE = {}, t.TOPIC_REACHED_END = {}, t.notifications = [], t
                }
                var r, f, l;
                return function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), n && u(t, n)
                }(e, i["a"]), r = e, (f = [{
                    key: "loadTopicPage",
                    value: function(t, n, i) {
                        var r = this;
                        return s(c(e.prototype), "loadData", this).call(this, t.topic, i).then(function(i) {
                            var o = i.list,
                                a = i.next,
                                u = i.reachedEnd;
                            if (!o) return {
                                data: [],
                                reachedEnd: u,
                                topic: t
                            };
                            (!r.TOPIC_NEXT_DISPLAY_PAGE[t.topic] || n && !u && a) && (r.TOPIC_NEXT_DISPLAY_PAGE[t.topic] = a);
                            var f = s(c(e.prototype), "filterData", r).call(r, o);
                            return !u && f.length && a && "false" !== a || (r.TOPIC_REACHED_END[t.topic] = !0), {
                                data: f,
                                reachedEnd: u,
                                topic: t
                            }
                        })
                    }
                }, {
                    key: "fetch",
                    value: function(n) {
                        var i = this;
                        this.perTopicNotifications = {};
                        var r = [];
                        return n || (this.notifications = []), this.topics.forEach(function(t) {
                            i.TOPIC_REACHED_END[t.topic] && n || r.push(i.loadTopicPage(t, n, n ? i.TOPIC_NEXT_DISPLAY_PAGE[t.topic] : "latest.json").then(function(t) {
                                return i.notifications = i.notifications.concat(t.data), t
                            }))
                        }), t.all(r).then(function(t) {
                            var n = t.every(function(t) {
                                    return t.reachedEnd
                                }),
                                r = s(c(e.prototype), "dedupeData", i).call(i, i.notifications);
                            return r.length >= i.MINIMUM_TO_DISPLAY || n ? {
                                data: r,
                                reachedEnd: n
                            } : i.fetch(!0)
                        })
                    }
                }]) && o(r.prototype, f), l && o(r, l), e
            }();
            n.a = f
        }).call(this, e(29))
    }, function(t, n) {
        function e(t) {
            return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        t.exports = {
            isMatchingKeyEvent: function(t, n, i) {
                if (t.type === n || "any" === n) {
                    var r = t.which || t.charCode;
                    return "object" !== e(i) && (i = [i]), -1 !== i.indexOf(r)
                }
                return !1
            },
            addEvent: function(t, n, e) {
                t && (t.addEventListener ? t.addEventListener(n, e, !1) : (t["e" + n + e] = e, t[n + e] = function() {
                    t["e" + n + e](window.event)
                }, t.attachEvent("on" + n, t[n + e])))
            },
            removeEvent: function(t, n, e) {
                t && (t.removeEventListener ? t.removeEventListener(n, e, !1) : (t.detachEvent("on" + n, t[n + e]), t[n + e] = null))
            },
            triggerEvent: function(t, n, e, i) {
                var r = document.createEvent("Event");
                i = i || !1, "" === r.type && r.initEvent(n, !0, i), r.data = e || {}, t.dispatchEvent(r)
            }
        }
    }, function(t, n, e) {
        e(8).tag2("bbc-notifications-onboarding", '<div class="notifications-onboarding-css" style="opacity:0;"> <div class="notifications-main notifications-main--css notifications-main--js notifications-on-boarding--js notifications-on-boarding notifications-no-scroll"> <div class="notifications-carousel notifications-onboarding-parent-carousel--js" id="notifications-onboarding-parent-carousel"> <div class="notifications-carousel__wrap"> <div class="notifications-carousel__slide"> <div class="on-boarding"> <div class="notifications-wide-spread"> <div class="notifications--desktop"> <div class="notifications-wide-spread--absolute"> <div class="notifications-top-header"> <p class="notifications-main-header notifications-main-header__first--js notifications-8/12 notifications-canon enter-animation" role="heading"><i1-8n>copy.upsell.title</i1-8n></p> <div class="notifications-description__first--js"> <p class="notifications-description notifications-10/12 notifications-pica enter-animation"><i1-8n>copy.onboardingInfo1</i1-8n></p> <p class="notifications-description notifications-10/12 notifications-pica enter-animation"><i1-8n>copy.onboardingInfo2</i1-8n></p> </div> </div> <div class="notifications-cta notifications-10/12 enter-animation"> <div class="notification-sign-in notifications-opt-in__link--js" id="skip-onboarding"> <a href="javascript:void(0)" role="link" aria-label="OK, I\'m in" alt="OK, I\'m in" title="OK, I\'m in" class="notifications-pica"><span><i1-8n>copy.ok</i1-8n></span></a> </div> <div class="notification-start-onboarding notifications-start-onboarding__link--js" id="start-onboarding"> <a href="javascript:void(0)" role="link" aria-label="Show me more" alt="Show me more" title="Show me more" class="notifications-pica"><span><i1-8n>copy.showMeMore</i1-8n></span></a> </div> </div> </div> </div> </div> <button aria-label="Close" class="on-boarding-close">&nbsp;</button> </div> </div> <div class="notifications-carousel__slide"> <div class="notifications-carousel notifications-onboarding-carousel notifications-onboarding-carousel--js notifications-onboarding-carousel--hidden" id="notifications-onboarding-carousel"> <div class="notifications-carousel__wrap"> <div class="notifications-carousel__slide notifications-carousel__slide--slide-0"> <div class="notifications-favourites__container"> <div class="notifications-favourites--preview"> </div> </div> <div class="notifications-carousel__info-wrapper"> <div class="notifications-carousel__info"> <div class="notifications-limitation-container"> <div class="notifications-carousel__triangle"> <div></div> <div></div> </div> <div class="notifications-carousel-pages notifications-carousel-pages--js first-time"> <a data-slide-to="0" data-target-carousel="#notifications-onboarding-carousel" tabindex="-1" class="notifications-carousel-pages__link--js active"></a> <a data-slide-to="1" role="link" alt="Go to slide 2" title="{this.goToSlide2}" aria-label="Go to slide 2" data-target-carousel="#notifications-onboarding-carousel" tabindex="-1" class="notifications-carousel-pages__link--js"></a> <a data-slide-to="2" role="link" alt="Go to slide 3" title="{this.goToSlide3}" aria-label="Go to slide 3" data-target-carousel="#notifications-onboarding-carousel" tabindex="-1" class="notifications-carousel-pages__link--js"></a> </div> <div class="notifications-carousel__content notifications-carousel__content--js first-time"><div class="notifications-carousel__header notifications-carousel__header--js"> <p class="notifications-great-primer notifications-7/12"><i1-8n>copy.onboardingInfo3</i1-8n></p> </div> <div class="notifications-carousel__description notifications-carousel__description--js"> <p class="notifications-pica notifications-10/12"><i1-8n>copy.onboardingInfo4</i1-8n></p> </div></div> <div class="notifications__container"> <div class="notifications-carousel__controls first-time"> <div class="notifications-carousel__controls--skip"> <p class="notifications-pica notifications-6/12"> <button class="notifications--btn notifications-pica notifications-opt-in__link--js"><i1-8n>copy.ok</i1-8n></button> </p> </div> <div class="notifications-carousel-navigation"> <a tabindex="-1" href="javascript:void(0)" role="link" aria-label="Go to Previous slide" title="{this.goToPreviousSlide}" alt="Go to Previous slide" class="notifications-carousel__controls--button notifications-carousel__controls--js control--prev inactive" data-slide="prev" data-focus-id="onboarding-prev"></a> <a href="javascript:void(0)" role="link" aria-label="Go to Next slide" title="{this.goToNextSlide}" alt="Go to Next slide" class="notifications-carousel__controls--button notifications-carousel__controls--js control--next" data-slide="next" data-focus-id="onboarding-next"></a> </div> </div> </div> </div> </div> </div> </div> <div class="notifications-carousel__slide notifications-carousel__slide--slide-1"> <div class="notifications-list__container notifications__container"> <div class="notifications-main notifications-main--js notifications-main--css notification-signed-in"> <header class="notifications__header notifications__header--js"> <h2 class="notification-title"><i1-8n>Notifications</i1-8n></h2> <ul class="notification-header-icons"> <li><a class="notifications__settings--js"><img class="setting-icon notifications-image" riot-src="{this.basePath + \'/svg/setting.svg\'}" alt="Settings"><span class="notifications-brevier"><i1-8n>Settings</i1-8n></span></a></li> </ul> </header> <div id="notifications-wrapper"> <div class="notification-panel" style="display: block;"> <bbc-notifications-list class="enter-animation" notifications="{this.sampleNotifications()}" main-app="{opts.mainApp}"> </bbc-notifications-list> </div> </div> </div> </div> <div class="notifications-carousel__info-wrapper"> <div class="notifications-carousel__info"> <div class="notifications-limitation-container"> <div class="notifications-carousel__triangle"> <div></div> <div></div> </div> <div class="notifications-carousel-pages notifications-carousel-pages--js first-time"> <a data-slide-to="0" role="link" alt="Go to slide 1" title="{this.goToSlide1}" aria-label="Go to slide 1" data-target-carousel="#notifications-onboarding-carousel" tabindex="-1" class="notifications-carousel-pages__link--js"></a> <a data-slide-to="1" data-target-carousel="#notifications-onboarding-carousel" tabindex="-1" class="notifications-carousel-pages__link--js active" role="link" alt="Go to slide 2" title="{this.goToSlide2}" aria-label="Go to slide 2"></a> <a data-slide-to="2" role="link" alt="Go to slide 3" title="{this.goToSlide3}" aria-label="Go to slide 3" data-target-carousel="#notifications-onboarding-carousel" tabindex="-1" class="notifications-carousel-pages__link--js"></a> </div> <div class="notifications-carousel__content notifications-carousel__content--js first-time"><div class="notifications-carousel__header notifications-carousel__header--js"> <p class="notifications-great-primer notifications-7/12"><i1-8n>copy.onboardingInfo3</i1-8n></p> </div> <div class="notifications-carousel__description notifications-carousel__description--js"> <p class="notifications-pica notifications-10/12"><i1-8n>copy.onboardingInfo4</i1-8n></p> </div></div> <div class="notifications__container"> <div class="notifications-carousel__controls first-time"> <div class="notifications-carousel__controls--skip"> <p class="notifications-pica notifications-6/12"> <button class="notifications--btn notifications-pica notifications-opt-in__link--js"><i1-8n>copy.ok</i1-8n></button> </p> </div> <div class="notifications-carousel-navigation"> <a href="javascript:void(0)" role="link" aria-label="Go to Previous slide" title="{this.goToPreviousSlide}" alt="Go to Previous slide" class="notifications-carousel__controls--button notifications-carousel__controls--js control--prev" data-slide="prev" data-focus-id="onboarding-prev"></a> <a href="javascript:void(0)" role="link" aria-label="Go to Next slide" title="{this.goToNextSlide}" alt="Go to Next slide" class="notifications-carousel__controls--button notifications-carousel__controls--js control--next" data-slide="next" data-focus-id="onboarding-next"></a> </div> </div> </div> </div> </div> </div> </div> <div class="notifications-carousel__slide notifications-carousel__slide--slide-2"> <div class="notifications-list__container notifications__container"> <div class="notifications-main notifications-main--js notifications-main--css notification-signed-in"> <header class="notifications__header notifications__header--js"> <h2 class="notification-title"><i1-8n>Notifications</i1-8n></h2> <ul class="notification-header-icons"> <li><a class="notifications__settings--js"><img class="setting-icon notifications-image" riot-src="{this.basePath + \'/svg/setting.svg\'}" alt="Settings"><span class="notifications-brevier"><i1-8n>Settings</i1-8n></span></a></li> </ul> </header> <div class="notifications-arrow-pointer enter-animation"></div> <div id="notifications-wrapper"> <div class="notification-panel" style="display: block;"> <bbc-notifications-list notifications="{this.sampleNotifications()}" main-app="{opts.mainApp}"> </bbc-notifications-list> </div> </div> </div> </div> <div class="notifications-carousel__info-wrapper"> <div class="notifications-carousel__info"> <div class="notifications-limitation-container"> <div class="notifications-carousel__triangle"> <div></div> <div></div> </div> <div class="notifications-carousel-pages notifications-carousel-pages--js first-time"> <a data-slide-to="0" role="link" alt="Go to slide 1" title="{this.goToSlide1}" aria-label="Go to slide 1" data-target-carousel="#notifications-onboarding-carousel" tabindex="-1" class="notifications-carousel-pages__link--js"></a> <a data-slide-to="1" role="link" alt="Go to slide 2" title="{this.goToSlide2}" aria-label="Go to slide 2" data-target-carousel="#notifications-onboarding-carousel" tabindex="-1" class="notifications-carousel-pages__link--js"></a> <a data-slide-to="2" role="link" alt="Go to slide 3" title="{this.goToSlide3}" aria-label="Go to slide 3" data-target-carousel="#notifications-onboarding-carousel" tabindex="-1" class="notifications-carousel-pages__link--js active"></a> </div> <div class="notifications-carousel__content notifications-carousel__content--js first-time"><div class="notifications-carousel__header notifications-carousel__header--js"> <p class="notifications-great-primer notifications-7/12"><i1-8n>copy.onboardingInfo3 </p> </div> <div class="notifications-carousel__description notifications-carousel__description--js"> <p class="notifications-pica notifications-10/12"><i1-8n>copy.onboardingInfo4</i1-8n></p> </div></div> <div class="notifications__container"> <div class="notifications-carousel__controls first-time"> <div class="notifications-carousel__controls--skip"> <p class="notifications-pica notifications-6/12"> <button class="notifications--btn notifications-pica notifications-opt-in__link--js"><i1-8n>copy.ok</i1-8n></button> </p> </div> <div class="notifications-carousel-navigation"> <a href="javascript:void(0)" role="link" aria-label="Go to Previous slide" title="{this.goToPreviousSlide}" alt="Go to Previous slide" class="notifications-carousel__controls--button notifications-carousel__controls--js control--prev" data-slide="prev" data-focus-id="onboarding-prev"></a> <a tabindex="-1" href="javascript:void(0)" role="link" aria-label="Go to Next slide" title="{this.goToNextSlide}" alt="Go to Next slide" class="notifications-carousel__controls--button notifications-carousel__controls--js control--next inactive" data-slide="next" data-focus-id="onboarding-next"></a> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div> </div>', "", "", function(t) {
            var n, i = e(49);
            this.basePath = t.mainApp.basePath;
            var r = !0;
            this.on("mount", function() {
                (n = t.onboard.run()).init(t.mainApp.getOnboardingParams(t.componentApp))
            }), this.goToNextSlide = i.localise("Go to Next slide"), this.goToPreviousSlide = i.localise("Go to Previous slide"), this.goToSlide1 = i.localise("Go to slide 1"), this.goToSlide2 = i.localise("Go to slide 2"), this.goToSlide3 = i.localise("Go to slide 3"), this.sampleNotifications = function() {
                for (var t = [{
                        product: "MUSIC",
                        priority: "NORMAL",
                        status: "new",
                        notification: {
                            title: "Here's a notification about a new clip from BBC Music."
                        },
                        sampleWhen: "Just now"
                    }, {
                        product: "IPLAYER",
                        priority: "NORMAL",
                        notification: {
                            title: "Here's a notification about a new episode in iPlayer."
                        },
                        sampleWhen: "10 minutes ago"
                    }], n = 0; n < 2; n++) t[n].sampleWhen = i.localise(t[n].sampleWhen), t[n].notification.title = i.localise(t[n].notification.title);
                return t
            }, this.opts.componentApp.on("drawerStateChanged", function(e) {
                "hidden" === e ? r = !0 : r && (t.componentApp.state.onboarded || (n.resetOnboarding(), n.init(t.mainApp.getOnboardingParams(t.componentApp)), r = !1))
            })
        })
    }, function(t, n, e) {
        e(129), e(296), e(90), e(57), t.exports = e(297)
    }, function(t, n, e) {
        "use strict";
        (function(t) {
            e(130), e(274), e(276), e(278), e(280), e(282), e(284), e(286), e(288), e(290), e(294), t._babelPolyfill && "undefined" != typeof console && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."), t._babelPolyfill = !0
        }).call(this, e(67))
    }, function(t, n, e) {
        e(131), e(133), e(134), e(135), e(136), e(137), e(138), e(139), e(140), e(141), e(142), e(143), e(144), e(145), e(146), e(147), e(149), e(150), e(151), e(152), e(153), e(154), e(155), e(156), e(157), e(158), e(159), e(160), e(161), e(162), e(163), e(164), e(165), e(166), e(167), e(168), e(169), e(170), e(171), e(172), e(173), e(174), e(175), e(177), e(178), e(179), e(180), e(181), e(182), e(183), e(184), e(185), e(186), e(187), e(188), e(189), e(190), e(191), e(192), e(193), e(194), e(195), e(196), e(197), e(198), e(199), e(200), e(201), e(202), e(203), e(204), e(205), e(206), e(207), e(208), e(209), e(210), e(212), e(213), e(215), e(216), e(217), e(218), e(219), e(220), e(221), e(224), e(225), e(226), e(227), e(228), e(229), e(230), e(231), e(232), e(233), e(234), e(235), e(236), e(57), e(237), e(238), e(114), e(239), e(240), e(241), e(242), e(90), e(245), e(246), e(247), e(248), e(249), e(250), e(251), e(252), e(253), e(254), e(255), e(256), e(257), e(258), e(259), e(260), e(261), e(262), e(263), e(264), e(265), e(266), e(267), e(268), e(269), e(270), e(271), e(272), e(273), t.exports = e(10)
    }, function(t, n, e) {
        "use strict";
        var i = e(2),
            r = e(14),
            o = e(9),
            a = e(0),
            s = e(12),
            c = e(31).KEY,
            u = e(1),
            f = e(69),
            l = e(42),
            d = e(35),
            h = e(5),
            p = e(70),
            v = e(96),
            g = e(132),
            y = e(73),
            m = e(4),
            b = e(3),
            w = e(16),
            _ = e(30),
            x = e(34),
            S = e(39),
            E = e(99),
            A = e(19),
            O = e(7),
            T = e(37),
            k = A.f,
            P = O.f,
            N = E.f,
            j = i.Symbol,
            I = i.JSON,
            M = I && I.stringify,
            C = h("_hidden"),
            L = h("toPrimitive"),
            F = {}.propertyIsEnumerable,
            R = f("symbol-registry"),
            D = f("symbols"),
            B = f("op-symbols"),
            U = Object.prototype,
            G = "function" == typeof j,
            H = i.QObject,
            W = !H || !H.prototype || !H.prototype.findChild,
            V = o && u(function() {
                return 7 != S(P({}, "a", {
                    get: function() {
                        return P(this, "a", {
                            value: 7
                        }).a
                    }
                })).a
            }) ? function(t, n, e) {
                var i = k(U, n);
                i && delete U[n], P(t, n, e), i && t !== U && P(U, n, i)
            } : P,
            K = function(t) {
                var n = D[t] = S(j.prototype);
                return n._k = t, n
            },
            q = G && "symbol" == typeof j.iterator ? function(t) {
                return "symbol" == typeof t
            } : function(t) {
                return t instanceof j
            },
            Y = function(t, n, e) {
                return t === U && Y(B, n, e), m(t), n = _(n, !0), m(e), r(D, n) ? (e.enumerable ? (r(t, C) && t[C][n] && (t[C][n] = !1), e = S(e, {
                    enumerable: x(0, !1)
                })) : (r(t, C) || P(t, C, x(1, {})), t[C][n] = !0), V(t, n, e)) : P(t, n, e)
            },
            $ = function(t, n) {
                m(t);
                for (var e, i = g(n = w(n)), r = 0, o = i.length; o > r;) Y(t, e = i[r++], n[e]);
                return t
            },
            z = function(t) {
                var n = F.call(this, t = _(t, !0));
                return !(this === U && r(D, t) && !r(B, t)) && (!(n || !r(this, t) || !r(D, t) || r(this, C) && this[C][t]) || n)
            },
            J = function(t, n) {
                if (t = w(t), n = _(n, !0), t !== U || !r(D, n) || r(B, n)) {
                    var e = k(t, n);
                    return !e || !r(D, n) || r(t, C) && t[C][n] || (e.enumerable = !0), e
                }
            },
            X = function(t) {
                for (var n, e = N(w(t)), i = [], o = 0; e.length > o;) r(D, n = e[o++]) || n == C || n == c || i.push(n);
                return i
            },
            Z = function(t) {
                for (var n, e = t === U, i = N(e ? B : w(t)), o = [], a = 0; i.length > a;) !r(D, n = i[a++]) || e && !r(U, n) || o.push(D[n]);
                return o
            };
        G || (s((j = function() {
            if (this instanceof j) throw TypeError("Symbol is not a constructor!");
            var t = d(arguments.length > 0 ? arguments[0] : void 0),
                n = function(e) {
                    this === U && n.call(B, e), r(this, C) && r(this[C], t) && (this[C][t] = !1), V(this, t, x(1, e))
                };
            return o && W && V(U, t, {
                configurable: !0,
                set: n
            }), K(t)
        }).prototype, "toString", function() {
            return this._k
        }), A.f = J, O.f = Y, e(40).f = E.f = X, e(51).f = z, e(53).f = Z, o && !e(36) && s(U, "propertyIsEnumerable", z, !0), p.f = function(t) {
            return K(h(t))
        }), a(a.G + a.W + a.F * !G, {
            Symbol: j
        });
        for (var Q = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), tt = 0; Q.length > tt;) h(Q[tt++]);
        for (var nt = T(h.store), et = 0; nt.length > et;) v(nt[et++]);
        a(a.S + a.F * !G, "Symbol", {
            for: function(t) {
                return r(R, t += "") ? R[t] : R[t] = j(t)
            },
            keyFor: function(t) {
                if (!q(t)) throw TypeError(t + " is not a symbol!");
                for (var n in R)
                    if (R[n] === t) return n
            },
            useSetter: function() {
                W = !0
            },
            useSimple: function() {
                W = !1
            }
        }), a(a.S + a.F * !G, "Object", {
            create: function(t, n) {
                return void 0 === n ? S(t) : $(S(t), n)
            },
            defineProperty: Y,
            defineProperties: $,
            getOwnPropertyDescriptor: J,
            getOwnPropertyNames: X,
            getOwnPropertySymbols: Z
        }), I && a(a.S + a.F * (!G || u(function() {
            var t = j();
            return "[null]" != M([t]) || "{}" != M({
                a: t
            }) || "{}" != M(Object(t))
        })), "JSON", {
            stringify: function(t) {
                for (var n, e, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
                if (e = n = i[1], (b(n) || void 0 !== t) && !q(t)) return y(n) || (n = function(t, n) {
                    if ("function" == typeof e && (n = e.call(this, t, n)), !q(n)) return n
                }), i[1] = n, M.apply(I, i)
            }
        }), j.prototype[L] || e(15)(j.prototype, L, j.prototype.valueOf), l(j, "Symbol"), l(Math, "Math", !0), l(i.JSON, "JSON", !0)
    }, function(t, n, e) {
        var i = e(37),
            r = e(53),
            o = e(51);
        t.exports = function(t) {
            var n = i(t),
                e = r.f;
            if (e)
                for (var a, s = e(t), c = o.f, u = 0; s.length > u;) c.call(t, a = s[u++]) && n.push(a);
            return n
        }
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Object", {
            create: e(39)
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S + i.F * !e(9), "Object", {
            defineProperty: e(7).f
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S + i.F * !e(9), "Object", {
            defineProperties: e(98)
        })
    }, function(t, n, e) {
        var i = e(16),
            r = e(19).f;
        e(20)("getOwnPropertyDescriptor", function() {
            return function(t, n) {
                return r(i(t), n)
            }
        })
    }, function(t, n, e) {
        var i = e(17),
            r = e(41);
        e(20)("getPrototypeOf", function() {
            return function(t) {
                return r(i(t))
            }
        })
    }, function(t, n, e) {
        var i = e(17),
            r = e(37);
        e(20)("keys", function() {
            return function(t) {
                return r(i(t))
            }
        })
    }, function(t, n, e) {
        e(20)("getOwnPropertyNames", function() {
            return e(99).f
        })
    }, function(t, n, e) {
        var i = e(3),
            r = e(31).onFreeze;
        e(20)("freeze", function(t) {
            return function(n) {
                return t && i(n) ? t(r(n)) : n
            }
        })
    }, function(t, n, e) {
        var i = e(3),
            r = e(31).onFreeze;
        e(20)("seal", function(t) {
            return function(n) {
                return t && i(n) ? t(r(n)) : n
            }
        })
    }, function(t, n, e) {
        var i = e(3),
            r = e(31).onFreeze;
        e(20)("preventExtensions", function(t) {
            return function(n) {
                return t && i(n) ? t(r(n)) : n
            }
        })
    }, function(t, n, e) {
        var i = e(3);
        e(20)("isFrozen", function(t) {
            return function(n) {
                return !i(n) || !!t && t(n)
            }
        })
    }, function(t, n, e) {
        var i = e(3);
        e(20)("isSealed", function(t) {
            return function(n) {
                return !i(n) || !!t && t(n)
            }
        })
    }, function(t, n, e) {
        var i = e(3);
        e(20)("isExtensible", function(t) {
            return function(n) {
                return !!i(n) && (!t || t(n))
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S + i.F, "Object", {
            assign: e(100)
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Object", {
            is: e(148)
        })
    }, function(t, n) {
        t.exports = Object.is || function(t, n) {
            return t === n ? 0 !== t || 1 / t == 1 / n : t != t && n != n
        }
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Object", {
            setPrototypeOf: e(75).set
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(54),
            r = {};
        r[e(5)("toStringTag")] = "z", r + "" != "[object z]" && e(12)(Object.prototype, "toString", function() {
            return "[object " + i(this) + "]"
        }, !0)
    }, function(t, n, e) {
        var i = e(0);
        i(i.P, "Function", {
            bind: e(101)
        })
    }, function(t, n, e) {
        var i = e(7).f,
            r = Function.prototype,
            o = /^\s*function ([^ (]*)/;
        "name" in r || e(9) && i(r, "name", {
            configurable: !0,
            get: function() {
                try {
                    return ("" + this).match(o)[1]
                } catch (t) {
                    return ""
                }
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(3),
            r = e(41),
            o = e(5)("hasInstance"),
            a = Function.prototype;
        o in a || e(7).f(a, o, {
            value: function(t) {
                if ("function" != typeof this || !i(t)) return !1;
                if (!i(this.prototype)) return t instanceof this;
                for (; t = r(t);)
                    if (this.prototype === t) return !0;
                return !1
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(103);
        i(i.G + i.F * (parseInt != r), {
            parseInt: r
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(104);
        i(i.G + i.F * (parseFloat != r), {
            parseFloat: r
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(2),
            r = e(14),
            o = e(25),
            a = e(77),
            s = e(30),
            c = e(1),
            u = e(40).f,
            f = e(19).f,
            l = e(7).f,
            d = e(55).trim,
            h = i.Number,
            p = h,
            v = h.prototype,
            g = "Number" == o(e(39)(v)),
            y = "trim" in String.prototype,
            m = function(t) {
                var n = s(t, !1);
                if ("string" == typeof n && n.length > 2) {
                    var e, i, r, o = (n = y ? n.trim() : d(n, 3)).charCodeAt(0);
                    if (43 === o || 45 === o) {
                        if (88 === (e = n.charCodeAt(2)) || 120 === e) return NaN
                    } else if (48 === o) {
                        switch (n.charCodeAt(1)) {
                            case 66:
                            case 98:
                                i = 2, r = 49;
                                break;
                            case 79:
                            case 111:
                                i = 8, r = 55;
                                break;
                            default:
                                return +n
                        }
                        for (var a, c = n.slice(2), u = 0, f = c.length; u < f; u++)
                            if ((a = c.charCodeAt(u)) < 48 || a > r) return NaN;
                        return parseInt(c, i)
                    }
                }
                return +n
            };
        if (!h(" 0o1") || !h("0b1") || h("+0x1")) {
            h = function(t) {
                var n = arguments.length < 1 ? 0 : t,
                    e = this;
                return e instanceof h && (g ? c(function() {
                    v.valueOf.call(e)
                }) : "Number" != o(e)) ? a(new p(m(n)), e, h) : m(n)
            };
            for (var b, w = e(9) ? u(p) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), _ = 0; w.length > _; _++) r(p, b = w[_]) && !r(h, b) && l(h, b, f(p, b));
            h.prototype = v, v.constructor = h, e(12)(i, "Number", h)
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(27),
            o = e(105),
            a = e(78),
            s = 1..toFixed,
            c = Math.floor,
            u = [0, 0, 0, 0, 0, 0],
            f = "Number.toFixed: incorrect invocation!",
            l = function(t, n) {
                for (var e = -1, i = n; ++e < 6;) i += t * u[e], u[e] = i % 1e7, i = c(i / 1e7)
            },
            d = function(t) {
                for (var n = 6, e = 0; --n >= 0;) e += u[n], u[n] = c(e / t), e = e % t * 1e7
            },
            h = function() {
                for (var t = 6, n = ""; --t >= 0;)
                    if ("" !== n || 0 === t || 0 !== u[t]) {
                        var e = String(u[t]);
                        n = "" === n ? e : n + a.call("0", 7 - e.length) + e
                    }
                return n
            },
            p = function(t, n, e) {
                return 0 === n ? e : n % 2 == 1 ? p(t, n - 1, e * t) : p(t * t, n / 2, e)
            };
        i(i.P + i.F * (!!s && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !e(1)(function() {
            s.call({})
        })), "Number", {
            toFixed: function(t) {
                var n, e, i, s, c = o(this, f),
                    u = r(t),
                    v = "",
                    g = "0";
                if (u < 0 || u > 20) throw RangeError(f);
                if (c != c) return "NaN";
                if (c <= -1e21 || c >= 1e21) return String(c);
                if (c < 0 && (v = "-", c = -c), c > 1e-21)
                    if (e = (n = function(t) {
                            for (var n = 0, e = t; e >= 4096;) n += 12, e /= 4096;
                            for (; e >= 2;) n += 1, e /= 2;
                            return n
                        }(c * p(2, 69, 1)) - 69) < 0 ? c * p(2, -n, 1) : c / p(2, n, 1), e *= 4503599627370496, (n = 52 - n) > 0) {
                        for (l(0, e), i = u; i >= 7;) l(1e7, 0), i -= 7;
                        for (l(p(10, i, 1), 0), i = n - 1; i >= 23;) d(1 << 23), i -= 23;
                        d(1 << i), l(1, 1), d(2), g = h()
                    } else l(0, e), l(1 << -n, 0), g = h() + a.call("0", u);
                return g = u > 0 ? v + ((s = g.length) <= u ? "0." + a.call("0", u - s) + g : g.slice(0, s - u) + "." + g.slice(s - u)) : v + g
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(1),
            o = e(105),
            a = 1..toPrecision;
        i(i.P + i.F * (r(function() {
            return "1" !== a.call(1, void 0)
        }) || !r(function() {
            a.call({})
        })), "Number", {
            toPrecision: function(t) {
                var n = o(this, "Number#toPrecision: incorrect invocation!");
                return void 0 === t ? a.call(n) : a.call(n, t)
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Number", {
            EPSILON: Math.pow(2, -52)
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(2).isFinite;
        i(i.S, "Number", {
            isFinite: function(t) {
                return "number" == typeof t && r(t)
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Number", {
            isInteger: e(106)
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Number", {
            isNaN: function(t) {
                return t != t
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(106),
            o = Math.abs;
        i(i.S, "Number", {
            isSafeInteger: function(t) {
                return r(t) && o(t) <= 9007199254740991
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Number", {
            MAX_SAFE_INTEGER: 9007199254740991
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Number", {
            MIN_SAFE_INTEGER: -9007199254740991
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(104);
        i(i.S + i.F * (Number.parseFloat != r), "Number", {
            parseFloat: r
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(103);
        i(i.S + i.F * (Number.parseInt != r), "Number", {
            parseInt: r
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(107),
            o = Math.sqrt,
            a = Math.acosh;
        i(i.S + i.F * !(a && 710 == Math.floor(a(Number.MAX_VALUE)) && a(1 / 0) == 1 / 0), "Math", {
            acosh: function(t) {
                return (t = +t) < 1 ? NaN : t > 94906265.62425156 ? Math.log(t) + Math.LN2 : r(t - 1 + o(t - 1) * o(t + 1))
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = Math.asinh;
        i(i.S + i.F * !(r && 1 / r(0) > 0), "Math", {
            asinh: function t(n) {
                return isFinite(n = +n) && 0 != n ? n < 0 ? -t(-n) : Math.log(n + Math.sqrt(n * n + 1)) : n
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = Math.atanh;
        i(i.S + i.F * !(r && 1 / r(-0) < 0), "Math", {
            atanh: function(t) {
                return 0 == (t = +t) ? t : Math.log((1 + t) / (1 - t)) / 2
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(79);
        i(i.S, "Math", {
            cbrt: function(t) {
                return r(t = +t) * Math.pow(Math.abs(t), 1 / 3)
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Math", {
            clz32: function(t) {
                return (t >>>= 0) ? 31 - Math.floor(Math.log(t + .5) * Math.LOG2E) : 32
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = Math.exp;
        i(i.S, "Math", {
            cosh: function(t) {
                return (r(t = +t) + r(-t)) / 2
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(80);
        i(i.S + i.F * (r != Math.expm1), "Math", {
            expm1: r
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Math", {
            fround: e(176)
        })
    }, function(t, n, e) {
        var i = e(79),
            r = Math.pow,
            o = r(2, -52),
            a = r(2, -23),
            s = r(2, 127) * (2 - a),
            c = r(2, -126);
        t.exports = Math.fround || function(t) {
            var n, e, r = Math.abs(t),
                u = i(t);
            return r < c ? u * (r / c / a + 1 / o - 1 / o) * c * a : (e = (n = (1 + a / o) * r) - (n - r)) > s || e != e ? u * (1 / 0) : u * e
        }
    }, function(t, n, e) {
        var i = e(0),
            r = Math.abs;
        i(i.S, "Math", {
            hypot: function(t, n) {
                for (var e, i, o = 0, a = 0, s = arguments.length, c = 0; a < s;) c < (e = r(arguments[a++])) ? (o = o * (i = c / e) * i + 1, c = e) : o += e > 0 ? (i = e / c) * i : e;
                return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(o)
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = Math.imul;
        i(i.S + i.F * e(1)(function() {
            return -5 != r(4294967295, 5) || 2 != r.length
        }), "Math", {
            imul: function(t, n) {
                var e = +t,
                    i = +n,
                    r = 65535 & e,
                    o = 65535 & i;
                return 0 | r * o + ((65535 & e >>> 16) * o + r * (65535 & i >>> 16) << 16 >>> 0)
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Math", {
            log10: function(t) {
                return Math.log(t) * Math.LOG10E
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Math", {
            log1p: e(107)
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Math", {
            log2: function(t) {
                return Math.log(t) / Math.LN2
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Math", {
            sign: e(79)
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(80),
            o = Math.exp;
        i(i.S + i.F * e(1)(function() {
            return -2e-17 != !Math.sinh(-2e-17)
        }), "Math", {
            sinh: function(t) {
                return Math.abs(t = +t) < 1 ? (r(t) - r(-t)) / 2 : (o(t - 1) - o(-t - 1)) * (Math.E / 2)
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(80),
            o = Math.exp;
        i(i.S, "Math", {
            tanh: function(t) {
                var n = r(t = +t),
                    e = r(-t);
                return n == 1 / 0 ? 1 : e == 1 / 0 ? -1 : (n - e) / (o(t) + o(-t))
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Math", {
            trunc: function(t) {
                return (t > 0 ? Math.floor : Math.ceil)(t)
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(38),
            o = String.fromCharCode,
            a = String.fromCodePoint;
        i(i.S + i.F * (!!a && 1 != a.length), "String", {
            fromCodePoint: function(t) {
                for (var n, e = [], i = arguments.length, a = 0; i > a;) {
                    if (n = +arguments[a++], r(n, 1114111) !== n) throw RangeError(n + " is not a valid code point");
                    e.push(n < 65536 ? o(n) : o(55296 + ((n -= 65536) >> 10), n % 1024 + 56320))
                }
                return e.join("")
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(16),
            o = e(11);
        i(i.S, "String", {
            raw: function(t) {
                for (var n = r(t.raw), e = o(n.length), i = arguments.length, a = [], s = 0; e > s;) a.push(String(n[s++])), s < i && a.push(String(arguments[s]));
                return a.join("")
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(55)("trim", function(t) {
            return function() {
                return t(this, 3)
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(108)(!0);
        e(81)(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, n = this._t,
                e = this._i;
            return e >= n.length ? {
                value: void 0,
                done: !0
            } : (t = i(n, e), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(108)(!1);
        i(i.P, "String", {
            codePointAt: function(t) {
                return r(this, t)
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(11),
            o = e(82),
            a = "".endsWith;
        i(i.P + i.F * e(84)("endsWith"), "String", {
            endsWith: function(t) {
                var n = o(this, t, "endsWith"),
                    e = arguments.length > 1 ? arguments[1] : void 0,
                    i = r(n.length),
                    s = void 0 === e ? i : Math.min(r(e), i),
                    c = String(t);
                return a ? a.call(n, c, s) : n.slice(s - c.length, s) === c
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(82);
        i(i.P + i.F * e(84)("includes"), "String", {
            includes: function(t) {
                return !!~r(this, t, "includes").indexOf(t, arguments.length > 1 ? arguments[1] : void 0)
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.P, "String", {
            repeat: e(78)
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(11),
            o = e(82),
            a = "".startsWith;
        i(i.P + i.F * e(84)("startsWith"), "String", {
            startsWith: function(t) {
                var n = o(this, t, "startsWith"),
                    e = r(Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length)),
                    i = String(t);
                return a ? a.call(n, i, e) : n.slice(e, e + i.length) === i
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("anchor", function(t) {
            return function(n) {
                return t(this, "a", "name", n)
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("big", function(t) {
            return function() {
                return t(this, "big", "", "")
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("blink", function(t) {
            return function() {
                return t(this, "blink", "", "")
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("bold", function(t) {
            return function() {
                return t(this, "b", "", "")
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("fixed", function(t) {
            return function() {
                return t(this, "tt", "", "")
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("fontcolor", function(t) {
            return function(n) {
                return t(this, "font", "color", n)
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("fontsize", function(t) {
            return function(n) {
                return t(this, "font", "size", n)
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("italics", function(t) {
            return function() {
                return t(this, "i", "", "")
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("link", function(t) {
            return function(n) {
                return t(this, "a", "href", n)
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("small", function(t) {
            return function() {
                return t(this, "small", "", "")
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("strike", function(t) {
            return function() {
                return t(this, "strike", "", "")
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("sub", function(t) {
            return function() {
                return t(this, "sub", "", "")
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(13)("sup", function(t) {
            return function() {
                return t(this, "sup", "", "")
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Date", {
            now: function() {
                return (new Date).getTime()
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(17),
            o = e(30);
        i(i.P + i.F * e(1)(function() {
            return null !== new Date(NaN).toJSON() || 1 !== Date.prototype.toJSON.call({
                toISOString: function() {
                    return 1
                }
            })
        }), "Date", {
            toJSON: function(t) {
                var n = r(this),
                    e = o(n);
                return "number" != typeof e || isFinite(e) ? n.toISOString() : null
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(211);
        i(i.P + i.F * (Date.prototype.toISOString !== r), "Date", {
            toISOString: r
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(1),
            r = Date.prototype.getTime,
            o = Date.prototype.toISOString,
            a = function(t) {
                return t > 9 ? t : "0" + t
            };
        t.exports = i(function() {
            return "0385-07-25T07:06:39.999Z" != o.call(new Date(-5e13 - 1))
        }) || !i(function() {
            o.call(new Date(NaN))
        }) ? function() {
            if (!isFinite(r.call(this))) throw RangeError("Invalid time value");
            var t = this,
                n = t.getUTCFullYear(),
                e = t.getUTCMilliseconds(),
                i = n < 0 ? "-" : n > 9999 ? "+" : "";
            return i + ("00000" + Math.abs(n)).slice(i ? -6 : -4) + "-" + a(t.getUTCMonth() + 1) + "-" + a(t.getUTCDate()) + "T" + a(t.getUTCHours()) + ":" + a(t.getUTCMinutes()) + ":" + a(t.getUTCSeconds()) + "." + (e > 99 ? e : "0" + a(e)) + "Z"
        } : o
    }, function(t, n, e) {
        var i = Date.prototype,
            r = i.toString,
            o = i.getTime;
        new Date(NaN) + "" != "Invalid Date" && e(12)(i, "toString", function() {
            var t = o.call(this);
            return t == t ? r.call(this) : "Invalid Date"
        })
    }, function(t, n, e) {
        var i = e(5)("toPrimitive"),
            r = Date.prototype;
        i in r || e(15)(r, i, e(214))
    }, function(t, n, e) {
        "use strict";
        var i = e(4),
            r = e(30);
        t.exports = function(t) {
            if ("string" !== t && "number" !== t && "default" !== t) throw TypeError("Incorrect hint");
            return r(i(this), "number" != t)
        }
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Array", {
            isArray: e(73)
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(23),
            r = e(0),
            o = e(17),
            a = e(110),
            s = e(85),
            c = e(11),
            u = e(86),
            f = e(87);
        r(r.S + r.F * !e(56)(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var n, e, r, l, d = o(t),
                    h = "function" == typeof this ? this : Array,
                    p = arguments.length,
                    v = p > 1 ? arguments[1] : void 0,
                    g = void 0 !== v,
                    y = 0,
                    m = f(d);
                if (g && (v = i(v, p > 2 ? arguments[2] : void 0, 2)), null == m || h == Array && s(m))
                    for (e = new h(n = c(d.length)); n > y; y++) u(e, y, g ? v(d[y], y) : d[y]);
                else
                    for (l = m.call(d), e = new h; !(r = l.next()).done; y++) u(e, y, g ? a(l, v, [r.value, y], !0) : r.value);
                return e.length = y, e
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(86);
        i(i.S + i.F * e(1)(function() {
            function t() {}
            return !(Array.of.call(t) instanceof t)
        }), "Array", { of: function() {
                for (var t = 0, n = arguments.length, e = new("function" == typeof this ? this : Array)(n); n > t;) r(e, t, arguments[t++]);
                return e.length = n, e
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(16),
            o = [].join;
        i(i.P + i.F * (e(50) != Object || !e(18)(o)), "Array", {
            join: function(t) {
                return o.call(r(this), void 0 === t ? "," : t)
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(74),
            o = e(25),
            a = e(38),
            s = e(11),
            c = [].slice;
        i(i.P + i.F * e(1)(function() {
            r && c.call(r)
        }), "Array", {
            slice: function(t, n) {
                var e = s(this.length),
                    i = o(this);
                if (n = void 0 === n ? e : n, "Array" == i) return c.call(this, t, n);
                for (var r = a(t, e), u = a(n, e), f = s(u - r), l = new Array(f), d = 0; d < f; d++) l[d] = "String" == i ? this.charAt(r + d) : this[r + d];
                return l
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(24),
            o = e(17),
            a = e(1),
            s = [].sort,
            c = [1, 2, 3];
        i(i.P + i.F * (a(function() {
            c.sort(void 0)
        }) || !a(function() {
            c.sort(null)
        }) || !e(18)(s)), "Array", {
            sort: function(t) {
                return void 0 === t ? s.call(o(this)) : s.call(o(this), r(t))
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(21)(0),
            o = e(18)([].forEach, !0);
        i(i.P + i.F * !o, "Array", {
            forEach: function(t) {
                return r(this, t, arguments[1])
            }
        })
    }, function(t, n, e) {
        var i = e(223);
        t.exports = function(t, n) {
            return new(i(t))(n)
        }
    }, function(t, n, e) {
        var i = e(3),
            r = e(73),
            o = e(5)("species");
        t.exports = function(t) {
            var n;
            return r(t) && ("function" != typeof(n = t.constructor) || n !== Array && !r(n.prototype) || (n = void 0), i(n) && null === (n = n[o]) && (n = void 0)), void 0 === n ? Array : n
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(21)(1);
        i(i.P + i.F * !e(18)([].map, !0), "Array", {
            map: function(t) {
                return r(this, t, arguments[1])
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(21)(2);
        i(i.P + i.F * !e(18)([].filter, !0), "Array", {
            filter: function(t) {
                return r(this, t, arguments[1])
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(21)(3);
        i(i.P + i.F * !e(18)([].some, !0), "Array", {
            some: function(t) {
                return r(this, t, arguments[1])
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(21)(4);
        i(i.P + i.F * !e(18)([].every, !0), "Array", {
            every: function(t) {
                return r(this, t, arguments[1])
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(111);
        i(i.P + i.F * !e(18)([].reduce, !0), "Array", {
            reduce: function(t) {
                return r(this, t, arguments.length, arguments[1], !1)
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(111);
        i(i.P + i.F * !e(18)([].reduceRight, !0), "Array", {
            reduceRight: function(t) {
                return r(this, t, arguments.length, arguments[1], !0)
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(52)(!1),
            o = [].indexOf,
            a = !!o && 1 / [1].indexOf(1, -0) < 0;
        i(i.P + i.F * (a || !e(18)(o)), "Array", {
            indexOf: function(t) {
                return a ? o.apply(this, arguments) || 0 : r(this, t, arguments[1])
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(16),
            o = e(27),
            a = e(11),
            s = [].lastIndexOf,
            c = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
        i(i.P + i.F * (c || !e(18)(s)), "Array", {
            lastIndexOf: function(t) {
                if (c) return s.apply(this, arguments) || 0;
                var n = r(this),
                    e = a(n.length),
                    i = e - 1;
                for (arguments.length > 1 && (i = Math.min(i, o(arguments[1]))), i < 0 && (i = e + i); i >= 0; i--)
                    if (i in n && n[i] === t) return i || 0;
                return -1
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.P, "Array", {
            copyWithin: e(112)
        }), e(44)("copyWithin")
    }, function(t, n, e) {
        var i = e(0);
        i(i.P, "Array", {
            fill: e(88)
        }), e(44)("fill")
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(21)(5),
            o = !0;
        "find" in [] && Array(1).find(function() {
            o = !1
        }), i(i.P + i.F * o, "Array", {
            find: function(t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), e(44)("find")
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(21)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o](function() {
            a = !1
        }), i(i.P + i.F * a, "Array", {
            findIndex: function(t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), e(44)(o)
    }, function(t, n, e) {
        e(45)("Array")
    }, function(t, n, e) {
        var i = e(2),
            r = e(77),
            o = e(7).f,
            a = e(40).f,
            s = e(83),
            c = e(89),
            u = i.RegExp,
            f = u,
            l = u.prototype,
            d = /a/g,
            h = /a/g,
            p = new u(d) !== d;
        if (e(9) && (!p || e(1)(function() {
                return h[e(5)("match")] = !1, u(d) != d || u(h) == h || "/a/i" != u(d, "i")
            }))) {
            u = function(t, n) {
                var e = this instanceof u,
                    i = s(t),
                    o = void 0 === n;
                return !e && i && t.constructor === u && o ? t : r(p ? new f(i && !o ? t.source : t, n) : f((i = t instanceof u) ? t.source : t, i && o ? c.call(t) : n), e ? this : l, u)
            };
            for (var v = function(t) {
                    t in u || o(u, t, {
                        configurable: !0,
                        get: function() {
                            return f[t]
                        },
                        set: function(n) {
                            f[t] = n
                        }
                    })
                }, g = a(f), y = 0; g.length > y;) v(g[y++]);
            l.constructor = u, u.prototype = l, e(12)(i, "RegExp", u)
        }
        e(45)("RegExp")
    }, function(t, n, e) {
        "use strict";
        e(114);
        var i = e(4),
            r = e(89),
            o = e(9),
            a = /./.toString,
            s = function(t) {
                e(12)(RegExp.prototype, "toString", t, !0)
            };
        e(1)(function() {
            return "/a/b" != a.call({
                source: "a",
                flags: "b"
            })
        }) ? s(function() {
            var t = i(this);
            return "/".concat(t.source, "/", "flags" in t ? t.flags : !o && t instanceof RegExp ? r.call(t) : void 0)
        }) : "toString" != a.name && s(function() {
            return a.call(this)
        })
    }, function(t, n, e) {
        e(58)("match", 1, function(t, n, e) {
            return [function(e) {
                "use strict";
                var i = t(this),
                    r = null == e ? void 0 : e[n];
                return void 0 !== r ? r.call(e, i) : new RegExp(e)[n](String(i))
            }, e]
        })
    }, function(t, n, e) {
        e(58)("replace", 2, function(t, n, e) {
            return [function(i, r) {
                "use strict";
                var o = t(this),
                    a = null == i ? void 0 : i[n];
                return void 0 !== a ? a.call(i, o, r) : e.call(String(o), i, r)
            }, e]
        })
    }, function(t, n, e) {
        e(58)("search", 1, function(t, n, e) {
            return [function(e) {
                "use strict";
                var i = t(this),
                    r = null == e ? void 0 : e[n];
                return void 0 !== r ? r.call(e, i) : new RegExp(e)[n](String(i))
            }, e]
        })
    }, function(t, n, e) {
        e(58)("split", 2, function(t, n, i) {
            "use strict";
            var r = e(83),
                o = i,
                a = [].push;
            if ("c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length) {
                var s = void 0 === /()??/.exec("")[1];
                i = function(t, n) {
                    var e = String(this);
                    if (void 0 === t && 0 === n) return [];
                    if (!r(t)) return o.call(e, t, n);
                    var i, c, u, f, l, d = [],
                        h = (t.ignoreCase ? "i" : "") + (t.multiline ? "m" : "") + (t.unicode ? "u" : "") + (t.sticky ? "y" : ""),
                        p = 0,
                        v = void 0 === n ? 4294967295 : n >>> 0,
                        g = new RegExp(t.source, h + "g");
                    for (s || (i = new RegExp("^" + g.source + "$(?!\\s)", h));
                        (c = g.exec(e)) && !((u = c.index + c[0].length) > p && (d.push(e.slice(p, c.index)), !s && c.length > 1 && c[0].replace(i, function() {
                            for (l = 1; l < arguments.length - 2; l++) void 0 === arguments[l] && (c[l] = void 0)
                        }), c.length > 1 && c.index < e.length && a.apply(d, c.slice(1)), f = c[0].length, p = u, d.length >= v));) g.lastIndex === c.index && g.lastIndex++;
                    return p === e.length ? !f && g.test("") || d.push("") : d.push(e.slice(p)), d.length > v ? d.slice(0, v) : d
                }
            } else "0".split(void 0, 0).length && (i = function(t, n) {
                return void 0 === t && 0 === n ? [] : o.call(this, t, n)
            });
            return [function(e, r) {
                var o = t(this),
                    a = null == e ? void 0 : e[n];
                return void 0 !== a ? a.call(e, o, r) : i.call(String(o), e, r)
            }, i]
        })
    }, function(t, n, e) {
        var i = e(2),
            r = e(91).set,
            o = i.MutationObserver || i.WebKitMutationObserver,
            a = i.process,
            s = i.Promise,
            c = "process" == e(25)(a);
        t.exports = function() {
            var t, n, e, u = function() {
                var i, r;
                for (c && (i = a.domain) && i.exit(); t;) {
                    r = t.fn, t = t.next;
                    try {
                        r()
                    } catch (i) {
                        throw t ? e() : n = void 0, i
                    }
                }
                n = void 0, i && i.enter()
            };
            if (c) e = function() {
                a.nextTick(u)
            };
            else if (!o || i.navigator && i.navigator.standalone)
                if (s && s.resolve) {
                    var f = s.resolve(void 0);
                    e = function() {
                        f.then(u)
                    }
                } else e = function() {
                    r.call(i, u)
                };
            else {
                var l = !0,
                    d = document.createTextNode("");
                new o(u).observe(d, {
                    characterData: !0
                }), e = function() {
                    d.data = l = !l
                }
            }
            return function(i) {
                var r = {
                    fn: i,
                    next: void 0
                };
                n && (n.next = r), t || (t = r, e()), n = r
            }
        }
    }, function(t, n) {
        t.exports = function(t) {
            try {
                return {
                    e: !1,
                    v: t()
                }
            } catch (t) {
                return {
                    e: !0,
                    v: t
                }
            }
        }
    }, function(t, n, e) {
        "use strict";
        var i = e(117),
            r = e(48);
        t.exports = e(62)("Map", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            get: function(t) {
                var n = i.getEntry(r(this, "Map"), t);
                return n && n.v
            },
            set: function(t, n) {
                return i.def(r(this, "Map"), 0 === t ? 0 : t, n)
            }
        }, i, !0)
    }, function(t, n, e) {
        "use strict";
        var i = e(117),
            r = e(48);
        t.exports = e(62)("Set", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(t) {
                return i.def(r(this, "Set"), t = 0 === t ? 0 : t, t)
            }
        }, i)
    }, function(t, n, e) {
        "use strict";
        var i, r = e(21)(0),
            o = e(12),
            a = e(31),
            s = e(100),
            c = e(118),
            u = e(3),
            f = e(1),
            l = e(48),
            d = a.getWeak,
            h = Object.isExtensible,
            p = c.ufstore,
            v = {},
            g = function(t) {
                return function() {
                    return t(this, arguments.length > 0 ? arguments[0] : void 0)
                }
            },
            y = {
                get: function(t) {
                    if (u(t)) {
                        var n = d(t);
                        return !0 === n ? p(l(this, "WeakMap")).get(t) : n ? n[this._i] : void 0
                    }
                },
                set: function(t, n) {
                    return c.def(l(this, "WeakMap"), t, n)
                }
            },
            m = t.exports = e(62)("WeakMap", g, y, c, !0, !0);
        f(function() {
            return 7 != (new m).set((Object.freeze || Object)(v), 7).get(v)
        }) && (s((i = c.getConstructor(g, "WeakMap")).prototype, y), a.NEED = !0, r(["delete", "has", "get", "set"], function(t) {
            var n = m.prototype,
                e = n[t];
            o(n, t, function(n, r) {
                if (u(n) && !h(n)) {
                    this._f || (this._f = new i);
                    var o = this._f[t](n, r);
                    return "set" == t ? this : o
                }
                return e.call(this, n, r)
            })
        }))
    }, function(t, n, e) {
        "use strict";
        var i = e(118),
            r = e(48);
        e(62)("WeakSet", function(t) {
            return function() {
                return t(this, arguments.length > 0 ? arguments[0] : void 0)
            }
        }, {
            add: function(t) {
                return i.def(r(this, "WeakSet"), t, !0)
            }
        }, i, !1, !0)
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(63),
            o = e(92),
            a = e(4),
            s = e(38),
            c = e(11),
            u = e(3),
            f = e(2).ArrayBuffer,
            l = e(60),
            d = o.ArrayBuffer,
            h = o.DataView,
            p = r.ABV && f.isView,
            v = d.prototype.slice,
            g = r.VIEW;
        i(i.G + i.W + i.F * (f !== d), {
            ArrayBuffer: d
        }), i(i.S + i.F * !r.CONSTR, "ArrayBuffer", {
            isView: function(t) {
                return p && p(t) || u(t) && g in t
            }
        }), i(i.P + i.U + i.F * e(1)(function() {
            return !new d(2).slice(1, void 0).byteLength
        }), "ArrayBuffer", {
            slice: function(t, n) {
                if (void 0 !== v && void 0 === n) return v.call(a(this), t);
                for (var e = a(this).byteLength, i = s(t, e), r = s(void 0 === n ? e : n, e), o = new(l(this, d))(c(r - i)), u = new h(this), f = new h(o), p = 0; i < r;) f.setUint8(p++, u.getUint8(i++));
                return o
            }
        }), e(45)("ArrayBuffer")
    }, function(t, n, e) {
        var i = e(0);
        i(i.G + i.W + i.F * !e(63).ABV, {
            DataView: e(92).DataView
        })
    }, function(t, n, e) {
        e(28)("Int8", 1, function(t) {
            return function(n, e, i) {
                return t(this, n, e, i)
            }
        })
    }, function(t, n, e) {
        e(28)("Uint8", 1, function(t) {
            return function(n, e, i) {
                return t(this, n, e, i)
            }
        })
    }, function(t, n, e) {
        e(28)("Uint8", 1, function(t) {
            return function(n, e, i) {
                return t(this, n, e, i)
            }
        }, !0)
    }, function(t, n, e) {
        e(28)("Int16", 2, function(t) {
            return function(n, e, i) {
                return t(this, n, e, i)
            }
        })
    }, function(t, n, e) {
        e(28)("Uint16", 2, function(t) {
            return function(n, e, i) {
                return t(this, n, e, i)
            }
        })
    }, function(t, n, e) {
        e(28)("Int32", 4, function(t) {
            return function(n, e, i) {
                return t(this, n, e, i)
            }
        })
    }, function(t, n, e) {
        e(28)("Uint32", 4, function(t) {
            return function(n, e, i) {
                return t(this, n, e, i)
            }
        })
    }, function(t, n, e) {
        e(28)("Float32", 4, function(t) {
            return function(n, e, i) {
                return t(this, n, e, i)
            }
        })
    }, function(t, n, e) {
        e(28)("Float64", 8, function(t) {
            return function(n, e, i) {
                return t(this, n, e, i)
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(24),
            o = e(4),
            a = (e(2).Reflect || {}).apply,
            s = Function.apply;
        i(i.S + i.F * !e(1)(function() {
            a(function() {})
        }), "Reflect", {
            apply: function(t, n, e) {
                var i = r(t),
                    c = o(e);
                return a ? a(i, n, c) : s.call(i, n, c)
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(39),
            o = e(24),
            a = e(4),
            s = e(3),
            c = e(1),
            u = e(101),
            f = (e(2).Reflect || {}).construct,
            l = c(function() {
                function t() {}
                return !(f(function() {}, [], t) instanceof t)
            }),
            d = !c(function() {
                f(function() {})
            });
        i(i.S + i.F * (l || d), "Reflect", {
            construct: function(t, n) {
                o(t), a(n);
                var e = arguments.length < 3 ? t : o(arguments[2]);
                if (d && !l) return f(t, n, e);
                if (t == e) {
                    switch (n.length) {
                        case 0:
                            return new t;
                        case 1:
                            return new t(n[0]);
                        case 2:
                            return new t(n[0], n[1]);
                        case 3:
                            return new t(n[0], n[1], n[2]);
                        case 4:
                            return new t(n[0], n[1], n[2], n[3])
                    }
                    var i = [null];
                    return i.push.apply(i, n), new(u.apply(t, i))
                }
                var c = e.prototype,
                    h = r(s(c) ? c : Object.prototype),
                    p = Function.apply.call(t, h, n);
                return s(p) ? p : h
            }
        })
    }, function(t, n, e) {
        var i = e(7),
            r = e(0),
            o = e(4),
            a = e(30);
        r(r.S + r.F * e(1)(function() {
            Reflect.defineProperty(i.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            })
        }), "Reflect", {
            defineProperty: function(t, n, e) {
                o(t), n = a(n, !0), o(e);
                try {
                    return i.f(t, n, e), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(19).f,
            o = e(4);
        i(i.S, "Reflect", {
            deleteProperty: function(t, n) {
                var e = r(o(t), n);
                return !(e && !e.configurable) && delete t[n]
            }
        })
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(4),
            o = function(t) {
                this._t = r(t), this._i = 0;
                var n, e = this._k = [];
                for (n in t) e.push(n)
            };
        e(109)(o, "Object", function() {
            var t, n = this._k;
            do {
                if (this._i >= n.length) return {
                    value: void 0,
                    done: !0
                }
            } while (!((t = n[this._i++]) in this._t));
            return {
                value: t,
                done: !1
            }
        }), i(i.S, "Reflect", {
            enumerate: function(t) {
                return new o(t)
            }
        })
    }, function(t, n, e) {
        var i = e(19),
            r = e(41),
            o = e(14),
            a = e(0),
            s = e(3),
            c = e(4);
        a(a.S, "Reflect", {
            get: function t(n, e) {
                var a, u, f = arguments.length < 3 ? n : arguments[2];
                return c(n) === f ? n[e] : (a = i.f(n, e)) ? o(a, "value") ? a.value : void 0 !== a.get ? a.get.call(f) : void 0 : s(u = r(n)) ? t(u, e, f) : void 0
            }
        })
    }, function(t, n, e) {
        var i = e(19),
            r = e(0),
            o = e(4);
        r(r.S, "Reflect", {
            getOwnPropertyDescriptor: function(t, n) {
                return i.f(o(t), n)
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(41),
            o = e(4);
        i(i.S, "Reflect", {
            getPrototypeOf: function(t) {
                return r(o(t))
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Reflect", {
            has: function(t, n) {
                return n in t
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(4),
            o = Object.isExtensible;
        i(i.S, "Reflect", {
            isExtensible: function(t) {
                return r(t), !o || o(t)
            }
        })
    }, function(t, n, e) {
        var i = e(0);
        i(i.S, "Reflect", {
            ownKeys: e(120)
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(4),
            o = Object.preventExtensions;
        i(i.S, "Reflect", {
            preventExtensions: function(t) {
                r(t);
                try {
                    return o && o(t), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(t, n, e) {
        var i = e(7),
            r = e(19),
            o = e(41),
            a = e(14),
            s = e(0),
            c = e(34),
            u = e(4),
            f = e(3);
        s(s.S, "Reflect", {
            set: function t(n, e, s) {
                var l, d, h = arguments.length < 4 ? n : arguments[3],
                    p = r.f(u(n), e);
                if (!p) {
                    if (f(d = o(n))) return t(d, e, s, h);
                    p = c(0)
                }
                if (a(p, "value")) {
                    if (!1 === p.writable || !f(h)) return !1;
                    if (l = r.f(h, e)) {
                        if (l.get || l.set || !1 === l.writable) return !1;
                        l.value = s, i.f(h, e, l)
                    } else i.f(h, e, c(0, s));
                    return !0
                }
                return void 0 !== p.set && (p.set.call(h, s), !0)
            }
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(75);
        r && i(i.S, "Reflect", {
            setPrototypeOf: function(t, n) {
                r.check(t, n);
                try {
                    return r.set(t, n), !0
                } catch (t) {
                    return !1
                }
            }
        })
    }, function(t, n, e) {
        e(275), t.exports = e(10).Array.includes
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(52)(!0);
        i(i.P, "Array", {
            includes: function(t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }), e(44)("includes")
    }, function(t, n, e) {
        e(277), t.exports = e(10).String.padStart
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(121),
            o = e(61);
        i(i.P + i.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
            padStart: function(t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !0)
            }
        })
    }, function(t, n, e) {
        e(279), t.exports = e(10).String.padEnd
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(121),
            o = e(61);
        i(i.P + i.F * /Version\/10\.\d+(\.\d+)? Safari\//.test(o), "String", {
            padEnd: function(t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0, !1)
            }
        })
    }, function(t, n, e) {
        e(281), t.exports = e(70).f("asyncIterator")
    }, function(t, n, e) {
        e(96)("asyncIterator")
    }, function(t, n, e) {
        e(283), t.exports = e(10).Object.getOwnPropertyDescriptors
    }, function(t, n, e) {
        var i = e(0),
            r = e(120),
            o = e(16),
            a = e(19),
            s = e(86);
        i(i.S, "Object", {
            getOwnPropertyDescriptors: function(t) {
                for (var n, e, i = o(t), c = a.f, u = r(i), f = {}, l = 0; u.length > l;) void 0 !== (e = c(i, n = u[l++])) && s(f, n, e);
                return f
            }
        })
    }, function(t, n, e) {
        e(285), t.exports = e(10).Object.values
    }, function(t, n, e) {
        var i = e(0),
            r = e(122)(!1);
        i(i.S, "Object", {
            values: function(t) {
                return r(t)
            }
        })
    }, function(t, n, e) {
        e(287), t.exports = e(10).Object.entries
    }, function(t, n, e) {
        var i = e(0),
            r = e(122)(!0);
        i(i.S, "Object", {
            entries: function(t) {
                return r(t)
            }
        })
    }, function(t, n, e) {
        "use strict";
        e(90), e(289), t.exports = e(10).Promise.finally
    }, function(t, n, e) {
        "use strict";
        var i = e(0),
            r = e(10),
            o = e(2),
            a = e(60),
            s = e(116);
        i(i.P + i.R, "Promise", {
            finally: function(t) {
                var n = a(this, r.Promise || o.Promise),
                    e = "function" == typeof t;
                return this.then(e ? function(e) {
                    return s(n, t()).then(function() {
                        return e
                    })
                } : t, e ? function(e) {
                    return s(n, t()).then(function() {
                        throw e
                    })
                } : t)
            }
        })
    }, function(t, n, e) {
        e(291), e(292), e(293), t.exports = e(10)
    }, function(t, n, e) {
        var i = e(2),
            r = e(0),
            o = e(61),
            a = [].slice,
            s = /MSIE .\./.test(o),
            c = function(t) {
                return function(n, e) {
                    var i = arguments.length > 2,
                        r = !!i && a.call(arguments, 2);
                    return t(i ? function() {
                        ("function" == typeof n ? n : Function(n)).apply(this, r)
                    } : n, e)
                }
            };
        r(r.G + r.B + r.F * s, {
            setTimeout: c(i.setTimeout),
            setInterval: c(i.setInterval)
        })
    }, function(t, n, e) {
        var i = e(0),
            r = e(91);
        i(i.G + i.B, {
            setImmediate: r.set,
            clearImmediate: r.clear
        })
    }, function(t, n, e) {
        for (var i = e(57), r = e(37), o = e(12), a = e(2), s = e(15), c = e(43), u = e(5), f = u("iterator"), l = u("toStringTag"), d = c.Array, h = {
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
            }, p = r(h), v = 0; v < p.length; v++) {
            var g, y = p[v],
                m = h[y],
                b = a[y],
                w = b && b.prototype;
            if (w && (w[f] || s(w, f, d), w[l] || s(w, l, y), c[y] = d, m))
                for (g in i) w[g] || o(w, g, i[g], !0)
        }
    }, function(t, n, e) {
        (function(n) {
            ! function(e) {
                "use strict";
                var i, r = Object.prototype,
                    o = r.hasOwnProperty,
                    a = "function" == typeof Symbol ? Symbol : {},
                    s = a.iterator || "@@iterator",
                    c = a.asyncIterator || "@@asyncIterator",
                    u = a.toStringTag || "@@toStringTag",
                    f = "object" == typeof t,
                    l = e.regeneratorRuntime;
                if (l) f && (t.exports = l);
                else {
                    (l = e.regeneratorRuntime = f ? t.exports : {}).wrap = _;
                    var d = "suspendedStart",
                        h = "suspendedYield",
                        p = "executing",
                        v = "completed",
                        g = {},
                        y = {};
                    y[s] = function() {
                        return this
                    };
                    var m = Object.getPrototypeOf,
                        b = m && m(m(I([])));
                    b && b !== r && o.call(b, s) && (y = b);
                    var w = A.prototype = S.prototype = Object.create(y);
                    E.prototype = w.constructor = A, A.constructor = E, A[u] = E.displayName = "GeneratorFunction", l.isGeneratorFunction = function(t) {
                        var n = "function" == typeof t && t.constructor;
                        return !!n && (n === E || "GeneratorFunction" === (n.displayName || n.name))
                    }, l.mark = function(t) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(t, A) : (t.__proto__ = A, u in t || (t[u] = "GeneratorFunction")), t.prototype = Object.create(w), t
                    }, l.awrap = function(t) {
                        return {
                            __await: t
                        }
                    }, O(T.prototype), T.prototype[c] = function() {
                        return this
                    }, l.AsyncIterator = T, l.async = function(t, n, e, i) {
                        var r = new T(_(t, n, e, i));
                        return l.isGeneratorFunction(n) ? r : r.next().then(function(t) {
                            return t.done ? t.value : r.next()
                        })
                    }, O(w), w[u] = "Generator", w[s] = function() {
                        return this
                    }, w.toString = function() {
                        return "[object Generator]"
                    }, l.keys = function(t) {
                        var n = [];
                        for (var e in t) n.push(e);
                        return n.reverse(),
                            function e() {
                                for (; n.length;) {
                                    var i = n.pop();
                                    if (i in t) return e.value = i, e.done = !1, e
                                }
                                return e.done = !0, e
                            }
                    }, l.values = I, j.prototype = {
                        constructor: j,
                        reset: function(t) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach(N), !t)
                                for (var n in this) "t" === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = i)
                        },
                        stop: function() {
                            this.done = !0;
                            var t = this.tryEntries[0].completion;
                            if ("throw" === t.type) throw t.arg;
                            return this.rval
                        },
                        dispatchException: function(t) {
                            if (this.done) throw t;
                            var n = this;

                            function e(e, r) {
                                return s.type = "throw", s.arg = t, n.next = e, r && (n.method = "next", n.arg = i), !!r
                            }
                            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                                var a = this.tryEntries[r],
                                    s = a.completion;
                                if ("root" === a.tryLoc) return e("end");
                                if (a.tryLoc <= this.prev) {
                                    var c = o.call(a, "catchLoc"),
                                        u = o.call(a, "finallyLoc");
                                    if (c && u) {
                                        if (this.prev < a.catchLoc) return e(a.catchLoc, !0);
                                        if (this.prev < a.finallyLoc) return e(a.finallyLoc)
                                    } else if (c) {
                                        if (this.prev < a.catchLoc) return e(a.catchLoc, !0)
                                    } else {
                                        if (!u) throw new Error("try statement without catch or finally");
                                        if (this.prev < a.finallyLoc) return e(a.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(t, n) {
                            for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                                var i = this.tryEntries[e];
                                if (i.tryLoc <= this.prev && o.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                    var r = i;
                                    break
                                }
                            }
                            r && ("break" === t || "continue" === t) && r.tryLoc <= n && n <= r.finallyLoc && (r = null);
                            var a = r ? r.completion : {};
                            return a.type = t, a.arg = n, r ? (this.method = "next", this.next = r.finallyLoc, g) : this.complete(a)
                        },
                        complete: function(t, n) {
                            if ("throw" === t.type) throw t.arg;
                            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), g
                        },
                        finish: function(t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var e = this.tryEntries[n];
                                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), N(e), g
                            }
                        },
                        catch: function(t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var e = this.tryEntries[n];
                                if (e.tryLoc === t) {
                                    var i = e.completion;
                                    if ("throw" === i.type) {
                                        var r = i.arg;
                                        N(e)
                                    }
                                    return r
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(t, n, e) {
                            return this.delegate = {
                                iterator: I(t),
                                resultName: n,
                                nextLoc: e
                            }, "next" === this.method && (this.arg = i), g
                        }
                    }
                }

                function _(t, n, e, i) {
                    var r = n && n.prototype instanceof S ? n : S,
                        o = Object.create(r.prototype),
                        a = new j(i || []);
                    return o._invoke = function(t, n, e) {
                        var i = d;
                        return function(r, o) {
                            if (i === p) throw new Error("Generator is already running");
                            if (i === v) {
                                if ("throw" === r) throw o;
                                return M()
                            }
                            for (e.method = r, e.arg = o;;) {
                                var a = e.delegate;
                                if (a) {
                                    var s = k(a, e);
                                    if (s) {
                                        if (s === g) continue;
                                        return s
                                    }
                                }
                                if ("next" === e.method) e.sent = e._sent = e.arg;
                                else if ("throw" === e.method) {
                                    if (i === d) throw i = v, e.arg;
                                    e.dispatchException(e.arg)
                                } else "return" === e.method && e.abrupt("return", e.arg);
                                i = p;
                                var c = x(t, n, e);
                                if ("normal" === c.type) {
                                    if (i = e.done ? v : h, c.arg === g) continue;
                                    return {
                                        value: c.arg,
                                        done: e.done
                                    }
                                }
                                "throw" === c.type && (i = v, e.method = "throw", e.arg = c.arg)
                            }
                        }
                    }(t, e, a), o
                }

                function x(t, n, e) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(n, e)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }

                function S() {}

                function E() {}

                function A() {}

                function O(t) {
                    ["next", "throw", "return"].forEach(function(n) {
                        t[n] = function(t) {
                            return this._invoke(n, t)
                        }
                    })
                }

                function T(t) {
                    var e;
                    this._invoke = function(i, r) {
                        function a() {
                            return new n(function(e, a) {
                                ! function e(i, r, a, s) {
                                    var c = x(t[i], t, r);
                                    if ("throw" !== c.type) {
                                        var u = c.arg,
                                            f = u.value;
                                        return f && "object" == typeof f && o.call(f, "__await") ? n.resolve(f.__await).then(function(t) {
                                            e("next", t, a, s)
                                        }, function(t) {
                                            e("throw", t, a, s)
                                        }) : n.resolve(f).then(function(t) {
                                            u.value = t, a(u)
                                        }, function(t) {
                                            return e("throw", t, a, s)
                                        })
                                    }
                                    s(c.arg)
                                }(i, r, e, a)
                            })
                        }
                        return e = e ? e.then(a, a) : a()
                    }
                }

                function k(t, n) {
                    var e = t.iterator[n.method];
                    if (e === i) {
                        if (n.delegate = null, "throw" === n.method) {
                            if (t.iterator.return && (n.method = "return", n.arg = i, k(t, n), "throw" === n.method)) return g;
                            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return g
                    }
                    var r = x(e, t.iterator, n.arg);
                    if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, g;
                    var o = r.arg;
                    return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = i), n.delegate = null, g) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
                }

                function P(t) {
                    var n = {
                        tryLoc: t[0]
                    };
                    1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n)
                }

                function N(t) {
                    var n = t.completion || {};
                    n.type = "normal", delete n.arg, t.completion = n
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(P, this), this.reset(!0)
                }

                function I(t) {
                    if (t) {
                        var n = t[s];
                        if (n) return n.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var e = -1,
                                r = function n() {
                                    for (; ++e < t.length;)
                                        if (o.call(t, e)) return n.value = t[e], n.done = !1, n;
                                    return n.value = i, n.done = !0, n
                                };
                            return r.next = r
                        }
                    }
                    return {
                        next: M
                    }
                }

                function M() {
                    return {
                        value: i,
                        done: !0
                    }
                }
            }(function() {
                return this || "object" == typeof self && self
            }() || Function("return this")())
        }).call(this, e(29))
    }, function(t, n) {
        var e, i, r = t.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function s(t) {
            if (e === setTimeout) return setTimeout(t, 0);
            if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
            try {
                return e(t, 0)
            } catch (n) {
                try {
                    return e.call(null, t, 0)
                } catch (n) {
                    return e.call(this, t, 0)
                }
            }
        }! function() {
            try {
                e = "function" == typeof setTimeout ? setTimeout : o
            } catch (t) {
                e = o
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (t) {
                i = a
            }
        }();
        var c, u = [],
            f = !1,
            l = -1;

        function d() {
            f && c && (f = !1, c.length ? u = c.concat(u) : l = -1, u.length && h())
        }

        function h() {
            if (!f) {
                var t = s(d);
                f = !0;
                for (var n = u.length; n;) {
                    for (c = u, u = []; ++l < n;) c && c[l].run();
                    l = -1, n = u.length
                }
                c = null, f = !1,
                    function(t) {
                        if (i === clearTimeout) return clearTimeout(t);
                        if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                        try {
                            i(t)
                        } catch (n) {
                            try {
                                return i.call(null, t)
                            } catch (n) {
                                return i.call(this, t)
                            }
                        }
                    }(t)
            }
        }

        function p(t, n) {
            this.fun = t, this.array = n
        }

        function v() {}
        r.nextTick = function(t) {
            var n = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var e = 1; e < arguments.length; e++) n[e - 1] = arguments[e];
            u.push(new p(t, n)), 1 !== u.length || f || s(h)
        }, p.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = v, r.addListener = v, r.once = v, r.off = v, r.removeListener = v, r.removeAllListeners = v, r.emit = v, r.prependListener = v, r.prependOnceListener = v, r.listeners = function(t) {
            return []
        }, r.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, r.cwd = function() {
            return "/"
        }, r.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, r.umask = function() {
            return 0
        }
    }, function(t, n, e) {
        "use strict";
        e.r(n),
            function(t) {
                e.d(n, "Headers", function() {
                    return u
                }), e.d(n, "Request", function() {
                    return g
                }), e.d(n, "Response", function() {
                    return m
                }), e.d(n, "DOMException", function() {
                    return w
                }), e.d(n, "fetch", function() {
                    return _
                });
                var i = {
                    searchParams: "URLSearchParams" in self,
                    iterable: "Symbol" in self && "iterator" in Symbol,
                    blob: "FileReader" in self && "Blob" in self && function() {
                        try {
                            return new Blob, !0
                        } catch (t) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in self,
                    arrayBuffer: "ArrayBuffer" in self
                };
                if (i.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    o = ArrayBuffer.isView || function(t) {
                        return t && r.indexOf(Object.prototype.toString.call(t)) > -1
                    };

                function a(t) {
                    if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                    return t.toLowerCase()
                }

                function s(t) {
                    return "string" != typeof t && (t = String(t)), t
                }

                function c(t) {
                    var n = {
                        next: function() {
                            var n = t.shift();
                            return {
                                done: void 0 === n,
                                value: n
                            }
                        }
                    };
                    return i.iterable && (n[Symbol.iterator] = function() {
                        return n
                    }), n
                }

                function u(t) {
                    this.map = {}, t instanceof u ? t.forEach(function(t, n) {
                        this.append(n, t)
                    }, this) : Array.isArray(t) ? t.forEach(function(t) {
                        this.append(t[0], t[1])
                    }, this) : t && Object.getOwnPropertyNames(t).forEach(function(n) {
                        this.append(n, t[n])
                    }, this)
                }

                function f(n) {
                    if (n.bodyUsed) return t.reject(new TypeError("Already read"));
                    n.bodyUsed = !0
                }

                function l(n) {
                    return new t(function(t, e) {
                        n.onload = function() {
                            t(n.result)
                        }, n.onerror = function() {
                            e(n.error)
                        }
                    })
                }

                function d(t) {
                    var n = new FileReader,
                        e = l(n);
                    return n.readAsArrayBuffer(t), e
                }

                function h(t) {
                    if (t.slice) return t.slice(0);
                    var n = new Uint8Array(t.byteLength);
                    return n.set(new Uint8Array(t)), n.buffer
                }

                function p() {
                    return this.bodyUsed = !1, this._initBody = function(t) {
                        var n;
                        this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : i.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : i.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : i.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : i.arrayBuffer && i.blob && ((n = t) && DataView.prototype.isPrototypeOf(n)) ? (this._bodyArrayBuffer = h(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : i.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || o(t)) ? this._bodyArrayBuffer = h(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : i.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, i.blob && (this.blob = function() {
                        var n = f(this);
                        if (n) return n;
                        if (this._bodyBlob) return t.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return t.resolve(new Blob([this._bodyArrayBuffer]));
                        if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                        return t.resolve(new Blob([this._bodyText]))
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? f(this) || t.resolve(this._bodyArrayBuffer) : this.blob().then(d)
                    }), this.text = function() {
                        var n, e, i, r = f(this);
                        if (r) return r;
                        if (this._bodyBlob) return n = this._bodyBlob, e = new FileReader, i = l(e), e.readAsText(n), i;
                        if (this._bodyArrayBuffer) return t.resolve(function(t) {
                            for (var n = new Uint8Array(t), e = new Array(n.length), i = 0; i < n.length; i++) e[i] = String.fromCharCode(n[i]);
                            return e.join("")
                        }(this._bodyArrayBuffer));
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return t.resolve(this._bodyText)
                    }, i.formData && (this.formData = function() {
                        return this.text().then(y)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                u.prototype.append = function(t, n) {
                    t = a(t), n = s(n);
                    var e = this.map[t];
                    this.map[t] = e ? e + ", " + n : n
                }, u.prototype.delete = function(t) {
                    delete this.map[a(t)]
                }, u.prototype.get = function(t) {
                    return t = a(t), this.has(t) ? this.map[t] : null
                }, u.prototype.has = function(t) {
                    return this.map.hasOwnProperty(a(t))
                }, u.prototype.set = function(t, n) {
                    this.map[a(t)] = s(n)
                }, u.prototype.forEach = function(t, n) {
                    for (var e in this.map) this.map.hasOwnProperty(e) && t.call(n, this.map[e], e, this)
                }, u.prototype.keys = function() {
                    var t = [];
                    return this.forEach(function(n, e) {
                        t.push(e)
                    }), c(t)
                }, u.prototype.values = function() {
                    var t = [];
                    return this.forEach(function(n) {
                        t.push(n)
                    }), c(t)
                }, u.prototype.entries = function() {
                    var t = [];
                    return this.forEach(function(n, e) {
                        t.push([e, n])
                    }), c(t)
                }, i.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries);
                var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function g(t, n) {
                    var e, i, r = (n = n || {}).body;
                    if (t instanceof g) {
                        if (t.bodyUsed) throw new TypeError("Already read");
                        this.url = t.url, this.credentials = t.credentials, n.headers || (this.headers = new u(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, r || null == t._bodyInit || (r = t._bodyInit, t.bodyUsed = !0)
                    } else this.url = String(t);
                    if (this.credentials = n.credentials || this.credentials || "same-origin", !n.headers && this.headers || (this.headers = new u(n.headers)), this.method = (e = n.method || this.method || "GET", i = e.toUpperCase(), v.indexOf(i) > -1 ? i : e), this.mode = n.mode || this.mode || null, this.signal = n.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && r) throw new TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(r)
                }

                function y(t) {
                    var n = new FormData;
                    return t.trim().split("&").forEach(function(t) {
                        if (t) {
                            var e = t.split("="),
                                i = e.shift().replace(/\+/g, " "),
                                r = e.join("=").replace(/\+/g, " ");
                            n.append(decodeURIComponent(i), decodeURIComponent(r))
                        }
                    }), n
                }

                function m(t, n) {
                    n || (n = {}), this.type = "default", this.status = void 0 === n.status ? 200 : n.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in n ? n.statusText : "OK", this.headers = new u(n.headers), this.url = n.url || "", this._initBody(t)
                }
                g.prototype.clone = function() {
                    return new g(this, {
                        body: this._bodyInit
                    })
                }, p.call(g.prototype), p.call(m.prototype), m.prototype.clone = function() {
                    return new m(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new u(this.headers),
                        url: this.url
                    })
                }, m.error = function() {
                    var t = new m(null, {
                        status: 0,
                        statusText: ""
                    });
                    return t.type = "error", t
                };
                var b = [301, 302, 303, 307, 308];
                m.redirect = function(t, n) {
                    if (-1 === b.indexOf(n)) throw new RangeError("Invalid status code");
                    return new m(null, {
                        status: n,
                        headers: {
                            location: t
                        }
                    })
                };
                var w = self.DOMException;
                try {
                    new w
                } catch (t) {
                    (w = function(t, n) {
                        this.message = t, this.name = n;
                        var e = Error(t);
                        this.stack = e.stack
                    }).prototype = Object.create(Error.prototype), w.prototype.constructor = w
                }

                function _(n, e) {
                    return new t(function(t, r) {
                        var o = new g(n, e);
                        if (o.signal && o.signal.aborted) return r(new w("Aborted", "AbortError"));
                        var a = new XMLHttpRequest;

                        function s() {
                            a.abort()
                        }
                        a.onload = function() {
                            var n, e, i = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: (n = a.getAllResponseHeaders() || "", e = new u, n.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t) {
                                    var n = t.split(":"),
                                        i = n.shift().trim();
                                    if (i) {
                                        var r = n.join(":").trim();
                                        e.append(i, r)
                                    }
                                }), e)
                            };
                            i.url = "responseURL" in a ? a.responseURL : i.headers.get("X-Request-URL");
                            var r = "response" in a ? a.response : a.responseText;
                            t(new m(r, i))
                        }, a.onerror = function() {
                            r(new TypeError("Network request failed"))
                        }, a.ontimeout = function() {
                            r(new TypeError("Network request failed"))
                        }, a.onabort = function() {
                            r(new w("Aborted", "AbortError"))
                        }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && i.blob && (a.responseType = "blob"), o.headers.forEach(function(t, n) {
                            a.setRequestHeader(n, t)
                        }), o.signal && (o.signal.addEventListener("abort", s), a.onreadystatechange = function() {
                            4 === a.readyState && o.signal.removeEventListener("abort", s)
                        }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                    })
                }
                _.polyfill = !0, self.fetch || (self.fetch = _, self.Headers = u, self.Request = g, self.Response = m)
            }.call(this, e(29))
    }, function(t, n, e) {
        var i = e(298);
        e(299);
        var r, o = {
            run: function() {}
        };
        if (!(-1 !== (r = navigator.userAgent.toLowerCase()).indexOf("msie") && parseInt(r.split("msie")[1], 10) <= 9)) {
            e(300), e(301), e(302), e(306), e(308), e(309), e(310), e(311), e(312), e(313), e(314), e(315), e(316), e(317), e(127), e(318), e(319);
            var a = e(49),
                s = e(320),
                c = e(321);
            a.dictionary(s);
            var u = c.get("ckps_kl_lang");
            void 0 === u && (u = "".concat(c.get("ckps_language"), "-GB")), u && s[u] ? a.setLanguage(u) : a.setLanguage("en-GB");
            var f = e(126),
                l = new(e(66)),
                d = e(8),
                h = e(6).default;
            d.mixin("i18n", {
                i18n: a
            }), o = {
                name: "mainApp",
                drawerName: "notifications",
                errorState: !1,
                notificationPanelCreated: !1,
                run: function(t, n) {
                    var i = this;
                    window.require && window.require(["orb/nav", "idcta/id-config"], function(r, o) {
                        i.basePath = n || "", e.p = "".concat(i.basePath, "js/"), i.orb = r, i.setIdcta(t, o);
                        var a = document.getElementById("mybbc-wrapper"),
                            s = document.getElementById("notification-link");
                        if (s) {
                            a.removeChild(s);
                            var c = document.createElement("bbc-notifications");
                            a.appendChild(c)
                        }
                        d.mount("bbc-notifications", {
                            orb: r,
                            mainApp: i
                        }), f.addEvent(document, "ready", i._setHubResizeEvent())
                    })
                },
                _setHubResizeEvent: function() {
                    var t, n = this;
                    ["resize", "orientationchange"].forEach(function(e) {
                        f.addEvent(window, e, function() {
                            t && clearTimeout(t), t = setTimeout(l.bind(n.updateWrapperMaxHeight, n), 100)
                        })
                    }), this.updateWrapperMaxHeight()
                },
                setIdcta: function(t, n) {
                    "function" == typeof t.getInstance ? this.idcta = t.getInstance() : this.idcta = t, this.idConfig = n
                },
                isWindowsPhone: function() {
                    return -1 !== navigator.appVersion.indexOf("Win") && void 0 !== window.navigator.pointerEnabled && null !== navigator.userAgent.match(/.+windows.+(touch|phone).+/i)
                },
                updateWrapperMaxHeight: function() {
                    var t = i.touchevents() || this.isWindowsPhone() ? .75 : .65,
                        n = document.querySelector(".orb-nav-pri-container"),
                        e = null !== n ? n.offsetHeight : 0,
                        r = (document.documentElement.clientHeight || window.innerHeight) * t - e - 44;
                    i.touchevents() || this.isWindowsPhone() || (r = Math.min(r, 420));
                    var o = document.querySelector("#notifications-wrapper");
                    o && (o.style.maxHeight = "".concat(r, "px")), this.orb.updateDrawerHeight(this.drawerName)
                },
                updateDrawerHeight: function() {
                    return this.orb.updateDrawerHeight(this.drawerName)
                },
                isUserOnBoarded: function() {
                    var t = h.get().preferences;
                    return null !== t && void 0 !== t.hasOnboarded && t.hasOnboarded
                },
                loadOnboarding: function(t) {
                    this.loadOnboardingStyles(), e.e(1).then(e.t.bind(null, 323, 7)).then(t)
                },
                loadOnboardingStyles: function() {
                    var t = document.createElement("link");
                    t.rel = "stylesheet", t.type = "text/css", t.href = "".concat(this.basePath, "css/onboarding.css"), document.getElementsByTagName("head")[0].appendChild(t)
                },
                getOnboardingParams: function(t) {
                    return {
                        mainElSelector: ".notifications-on-boarding--js",
                        app: this,
                        componentApp: t,
                        isIE: this.isIE(),
                        resizeEvent: l.bind(this._setHubResizeEvent, this)
                    }
                },
                setNotificationIcon: function() {
                    var t = this;
                    this.navNotificationElement = document.querySelector(".js-notification-link"), this.navNotificationElement.onkeydown = function(n) {
                        13 === (n.which || n.charCode) && (t.lastEnterPress = Date.now())
                    }, this.orb.refresh()
                },
                getNavNotificationEl: function() {
                    return this.navNotificationElement
                },
                getDrawerState: function() {
                    return this.orb.getDrawerState(this.drawerName)
                },
                resetOnboarding: function() {
                    (void 0).resetOnboarding(), (void 0).init(this.getOnboardingParams())
                },
                getUserPreferencesModel: function() {
                    return h
                },
                isIE: function() {
                    if (document.documentMode) return document.documentMode;
                    for (var t = 7; t > 0; t--) {
                        var n = document.createElement("div");
                        if (n.innerHTML = "\x3c!--[if IE ".concat(t, "]><span></span><![endif]--\x3e"), n.getElementsByTagName("span").length) return t
                    }
                },
                removeCustomHeights: function() {
                    (void 0).removeCustomHeights()
                }
            }
        }
        t.exports = o
    }, function(t, n, e) {
        "use strict";
        e.r(n), e.d(n, "touchevents", function() {
            return r
        });
        var i = [];

        function r() {
            var t, n, e = "ontouchstart" in window;
            return t = "touchevents", n = e, document.documentElement.classList && -1 === i.indexOf(t) && (document.documentElement.classList.add("n-".concat(n ? "" : "no-").concat(t)), i.push(t)), e
        }
    }, function(t, n) {
        ! function() {
            if (!Object.setPrototypeOf && !{}.__proto__) {
                var t = Object.getPrototypeOf;
                Object.getPrototypeOf = function(n) {
                    return n.__proto__ ? n.__proto__ : t.call(Object, n)
                }
            }
        }()
    }, function(t, n, e) {
        e(8).tag2("bbc-notifications-bell", '<a name="notificationLink" id="notification-link" class="js-notification-link animated three notifications-shown {swing: opts.alert, notifications-black-bell: opts.state === undefined ? false : opts.state.signedIn === true, notifications-grey-bell: opts.state === undefined ? true : opts.state.signedIn !== true}" href="#"> <span class="hidden-span" style="height: 1px; width: 1px; position: absolute; overflow: hidden; top: -10px;">Notifications</span> <div class="notification-link--triangle"></div> <div class="notification-link--triangle"></div> <span id="not-num" class="{\'new-notifications\': opts.alert}"></span> <span aria-live="polite" class="notification-link__live notification-link__live--js">{opts.alert ? this.getAlertText() : \'\'}</span> </a>', "", "", function(t) {
            var n = this;
            this.on("mount", function() {
                t.mainApp.setNotificationIcon()
            }), this.getAlertText = function() {
                return "hidden" === n.parent.opts.mainApp.getDrawerState() ? 'New Notification. To view open the "Notification Panel" link.' : "New Notification available."
            }
        })
    }, function(t, n, e) {
        e(8).tag2("bbc-notifications-drawer", '<bbc-notifications-error-banner if="{opts.error.inner && !opts.error.main}" type="{opts.error.inner}"></bbc-notifications-error-banner> <bbc-notifications-error-view if="{opts.error.main}" type="{opts.error.main}"></bbc-notifications-error-view> <div if="{!opts.error.main && opts.state}"> <bbc-notifications-signed-in-view if="{opts.state.signedIn === true}" main-app="{opts.mainApp}" component-app="{opts.componentApp}" state="{opts.state}" notifications="{opts.notifications}" reached-end="{opts.reachedEnd}" loading-more="{opts.loadingMore}" load-onboarding="{opts.loadOnboarding}" view="{opts.view}"></bbc-notifications-signed-in-view> <bbc-notifications-signed-out-view if="{opts.state.signedIn === false}" state="{opts.state}"></bbc-notifications-signed-out-view> </div>', "", "", function(t) {
            var n = this;
            this.basePath = t.mainApp.basePath, this.on("mount", function() {
                var e = document.createElement("div");
                e.className = "orb-panel", e.appendChild(n.root), t.orb.addDrawer("notifications", document.querySelector(".js-notification-link"), e, t.componentApp.drawerStateChangedCallback)
            }), this.on("updated", function() {
                if (n.updateFocus) {
                    var e = document.querySelector(n.updateFocus);
                    e && e.focus(), n.updateFocus = null
                }
                t.mainApp.updateDrawerHeight()
            })
        })
    }, function(t, n, e) {
        e(8).tag2("bbc-notifications-list", '<div id="notifications-wrapper" onmousewheel="{this.onListMouseWheel}" onscroll="{this.onListScroll}"> <ul if="{opts.notifications.length}" class="notification-items" aria-live="polite" aria-relevant="additions" aria-atomic="true"> <li class="notification-item notification__item--js {status ? \'notification-\' + status : \'\'}" each="{opts.notifications}"> <a class="notification-item--link" href="{notification.url}" onclick="{this.onLinkClick}" onkeydown="{this.onLinkKeyDown}"> <div class="notification-icon-and-dot notification-{product.toLowerCase()}"> <span class="notification-dot {status ? \'notification-\' + status : \'\'}"></span> <div class="notifications-image notification-{product.toLowerCase()}-icon"> </div> </div> <div class="notification-text {status ? \'notification-\' + status : \'\'}"> <div class="notification-title-items"> <div> <p class="notification-text-body notifications-long-primer">{this.title(notification)}</p> </div> <div class="notification-item--info"> <span class="notification-episode-name notifications-brevier">{this.label(notification.episode, product)}</span> <span class="notification-time notifications-brevier">{sampleWhen ? sampleWhen : this.timeago(creationTimestamp)}</span> </div> </div> </div> </a> </li> </ul> <div class="spinner" if="{opts.loadingMore}"> <img class="loader-icon notifications-image spinner__img--svg" riot-src="{this.basePath + \'/svg/loader.svg\'}" alt="Spinner"> </div> <div class="notifications-keyboard-access" if="{this.showKeyboardAccess}"> <button class="notifications-keyboard-access--btn notifications-keyboard-access--more" onclick="{this.keyboardLoadMore}" disabled="{opts.reachedEnd}">Load More</button> <button name="notificationsKeyboardClose" class="notifications-keyboard-access--btn notifications-keyboard-access--close" onclick="{this.closeDrawer}" onkeydown="{this.onKeyboardCloseDown}">Close</button> </div> </div>', "", "", function(t) {
            var n = this,
                i = e(66),
                r = e(93);
            this.timeago = e(303), this.utils = new i;
            this.basePath = t.mainApp.basePath, this.on("mount", function() {}), this.loadMore = function() {
                if (document.activeElement && document.activeElement.classList && (document.activeElement.classList.contains("notification-item--link") || document.activeElement.classList.contains("notifications-keyboard-access--btn"))) return !1;
                t.componentApp.loadingMore || t.componentApp.reachedEnd || t.componentApp.fetchNotifications(!0)
            }, this.onListMouseWheel = function(n) {
                return n.preventUpdate = !0, !t.notifications.length || (n.currentTarget.offsetHeight >= n.currentTarget.scrollHeight || (n.deltaY > 0 ? !(n.currentTarget.scrollTop >= n.currentTarget.scrollHeight - n.currentTarget.offsetHeight) : !(0 === n.currentTarget.scrollTop)))
            }, this.onListScroll = function(t) {
                t.preventUpdate = !0, !n.parent.shadowAdded && t.currentTarget.scrollTop > 0 ? n.parent.update({
                    shadowAdded: !0
                }) : n.parent.shadowAdded && t.currentTarget.scrollTop <= 0 && n.parent.update({
                    shadowAdded: !1
                }), t.currentTarget.scrollTop >= t.currentTarget.scrollHeight - t.currentTarget.offsetHeight - 50 && n.loadMore()
            }, this.capitalizeFirstLetter = function(t) {
                return "iplayer" === t.toLowerCase() ? "iPlayer" : t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
            }, this.closeDrawer = function() {
                document.getElementById("notification-link").click(), document.activeElement && document.querySelector(".orb-nav-news a").focus()
            }, this.onLinkClick = function(e) {
                var i = e.item.notification.url,
                    o = n.getAnalyticsNotificationStatus(e.item.status);
                return r.logClick(e.item.notification.title, {
                    STA: o,
                    PRI: (e.item.priority || "normal").toLowerCase(),
                    TOP: r.serialiseTopic(e.item.topic)
                }, e.item.product.toLowerCase(), i, e, event.target), t.componentApp.notificationsModel.markRead(e.item).then(function() {
                    window.location.assign(i)
                }), e.preventDefault && e.preventDefault(), !1
            }, this.getAnalyticsNotificationStatus = function(t) {
                switch (t) {
                    case "new":
                        return "blueDot";
                    case "unread":
                        return "new";
                    default:
                        return "read"
                }
            }, this.onLinkKeyDown = function(t) {
                if (9 === t.keyCode) {
                    var e = document.activeElement.parentNode.nextSibling;
                    !(e.classList && e.classList.contains("notification-item")) && n.update({
                        showKeyboardAccess: !0
                    })
                }
                return !0
            }, this.onKeyboardCloseDown = function(t) {
                return !(9 === t.keyCode && !t.shiftKey) || (document.querySelector(".notifications__settings--js").focus(), !1)
            }, this.keyboardLoadMore = function() {
                var e = document.querySelectorAll(".notification-items .notification-item").length;
                t.componentApp.fetchNotifications(!0).then(function() {
                    var t = document.querySelector(".notification-items\n                    .notification-item:nth-child(".concat(e + 1, ") a"));
                    t ? t.focus() : n.notificationsKeyboardClose.focus()
                })
            }, this.title = function(t) {
                return t.title + (t.episode ? " ".concat("–", " ").concat(t.episode) : "")
            }, this.label = function(t, e) {
                return n.capitalizeFirstLetter(e)
            }
        })
    }, function(t, n, e) {
        var i = e(49);
        t.exports = function(t) {
            var n = new Date(t),
                e = new Date,
                r = Math.floor(Math.abs(e - n) / 36e5),
                o = Math.floor(Math.abs(e - n) / 6e4);
            return r > 23 && r < 48 ? i.localise("Yesterday") : r >= 48 && r < 168 ? "".concat((r / 24).toFixed(0), " ").concat(i.localise("days ago")) : r > 0 ? "".concat(r, " ").concat(i.localise("hour".concat(1 === r ? "" : "s", " ago"))) : o > 0 ? "".concat(o, " ").concat(i.localise("minute".concat(1 === o ? "" : "s", " ago"))) : i.localise("Just now")
        }
    }, function(t, n, e) {
        var i; /* Riot v2.6.9, @license MIT */
        ! function(r, o) {
            "use strict";
            var a = {
                    version: "v2.6.9",
                    settings: {}
                },
                s = 0,
                c = [],
                u = {},
                f = "__global_mixin",
                l = "riot-",
                d = l + "tag",
                h = "data-is",
                p = "string",
                v = "object",
                g = "undefined",
                y = "function",
                m = "http://www.w3.org/1999/xlink",
                b = /^xlink:(\w+)/,
                w = /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?|opt(?:ion|group))$/,
                _ = /^(?:_(?:item|id|parent)|update|root|(?:un)?mount|mixin|is(?:Mounted|Loop)|tags|parent|opts|trigger|o(?:n|ff|ne))$/,
                x = ["altGlyph", "animate", "animateColor", "circle", "clipPath", "defs", "ellipse", "feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feFlood", "feGaussianBlur", "feImage", "feMerge", "feMorphology", "feOffset", "feSpecularLighting", "feTile", "feTurbulence", "filter", "font", "foreignObject", "g", "glyph", "glyphRef", "image", "line", "linearGradient", "marker", "mask", "missing-glyph", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "switch", "symbol", "text", "textPath", "tref", "tspan", "use"],
                S = 0 | (r && r.document || {}).documentMode,
                E = r && !!r.InstallTrigger;
            a.observable = function(t) {
                    t = t || {};
                    var n = {},
                        e = Array.prototype.slice;

                    function i(t, n) {
                        for (var e = t.split(" "), i = e.length, r = 0; r < i; r++) {
                            var o = e[r];
                            o && n(o, r)
                        }
                    }
                    return Object.defineProperties(t, {
                        on: {
                            value: function(e, r) {
                                return "function" != typeof r ? t : (i(e, function(t, e) {
                                    (n[t] = n[t] || []).push(r), r.typed = e > 0
                                }), t)
                            },
                            enumerable: !1,
                            writable: !1,
                            configurable: !1
                        },
                        off: {
                            value: function(e, r) {
                                return "*" != e || r ? i(e, function(t, e) {
                                    if (r)
                                        for (var i, o = n[t], a = 0; i = o && o[a]; ++a) i == r && o.splice(a--, 1);
                                    else delete n[t]
                                }) : n = {}, t
                            },
                            enumerable: !1,
                            writable: !1,
                            configurable: !1
                        },
                        one: {
                            value: function(n, e) {
                                return t.on(n, function i() {
                                    t.off(n, i), e.apply(t, arguments)
                                })
                            },
                            enumerable: !1,
                            writable: !1,
                            configurable: !1
                        },
                        trigger: {
                            value: function(r) {
                                for (var o, a = arguments.length - 1, s = new Array(a), c = 0; c < a; c++) s[c] = arguments[c + 1];
                                return i(r, function(i, r) {
                                    o = e.call(n[i] || [], 0);
                                    for (var a, c = 0; a = o[c]; ++c) a.busy || (a.busy = 1, a.apply(t, a.typed ? [i].concat(s) : s), o[c] !== a && c--, a.busy = 0);
                                    n["*"] && "*" != i && t.trigger.apply(t, ["*", i].concat(s))
                                }), t
                            },
                            enumerable: !1,
                            writable: !1,
                            configurable: !1
                        }
                    }), t
                },
                function(t) {
                    var n, e, i, o, a, s = /^.+?\/\/+[^\/]+/,
                        c = "addEventListener",
                        u = "hasAttribute",
                        f = "replace",
                        l = "popstate",
                        d = "hashchange",
                        h = "trigger",
                        p = 3,
                        v = void 0 !== r && r,
                        g = "undefined" != typeof document && document,
                        y = v && history,
                        m = v && (y.location || v.location),
                        b = P.prototype,
                        w = g && g.ontouchstart ? "touchstart" : "click",
                        _ = !1,
                        x = t.observable(),
                        S = !1,
                        E = [],
                        A = 0;

                    function O(t) {
                        return t.split(/[\/?#]/)
                    }

                    function T(t, n) {
                        var e = new RegExp("^" + n[f](/\*/g, "([^/?#]+?)")[f](/\.\./, ".*") + "$"),
                            i = t.match(e);
                        if (i) return i.slice(1)
                    }

                    function k(t) {
                        var e, i, r;
                        e = C, i = 1, n = function() {
                            clearTimeout(r), r = setTimeout(e, i)
                        }, v[c](l, n), v[c](d, n), g[c](w, L), t && C(!0)
                    }

                    function P() {
                        this.$ = [], t.observable(this), x.on("stop", this.s.bind(this)), x.on("emit", this.e.bind(this))
                    }

                    function N(t) {
                        return t[f](/^\/|\/$/, "")
                    }

                    function j(t) {
                        return "string" == typeof t
                    }

                    function I(t) {
                        return (t || m.href)[f](s, "")
                    }

                    function M(t) {
                        return "#" == e[0] ? (t || m.href || "").split(e)[1] || "" : (m ? I(t) : t || "")[f](e, "")
                    }

                    function C(t) {
                        var n, e = 0 == A;
                        if (!(p <= A) && (A++, E.push(function() {
                                var n = M();
                                (t || n != i) && (x[h]("emit", n), i = n)
                            }), e)) {
                            for (; n = E.shift();) n();
                            A = 0
                        }
                    }

                    function L(t) {
                        if (!(1 != t.which || t.metaKey || t.ctrlKey || t.shiftKey || t.defaultPrevented)) {
                            for (var n = t.target; n && "A" != n.nodeName;) n = n.parentNode;
                            !n || "A" != n.nodeName || n[u]("download") || !n[u]("href") || n.target && "_self" != n.target || -1 == n.href.indexOf(m.href.match(s)[0]) || n.href != m.href && (n.href.split("#")[0] == m.href.split("#")[0] || "#" != e[0] && 0 !== I(n.href).indexOf(e) || "#" == e[0] && n.href.split(e)[0] != m.href.split(e)[0] || !F(M(n.href), n.title || g.title)) || t.preventDefault()
                        }
                    }

                    function F(t, n, i) {
                        return y ? (t = e + N(t), n = n || g.title, i ? y.replaceState(null, n, t) : y.pushState(null, n, t), g.title = n, S = !1, C(), S) : x[h]("emit", M(t))
                    }
                    b.m = function(t, n, e) {
                        !j(t) || n && !j(n) ? n ? this.r(t, n) : this.r("@", t) : F(t, n, e || !1)
                    }, b.s = function() {
                        this.off("*"), this.$ = []
                    }, b.e = function(t) {
                        this.$.concat("@").some(function(n) {
                            var e = ("@" == n ? o : a)(N(t), N(n));
                            if (void 0 !== e) return this[h].apply(null, [n].concat(e)), S = !0
                        }, this)
                    }, b.r = function(t, n) {
                        "@" != t && (t = "/" + N(t), this.$.push(t)), this.on(t, n)
                    };
                    var R = new P,
                        D = R.m.bind(R);
                    D.create = function() {
                        var t = new P,
                            n = t.m.bind(t);
                        return n.stop = t.s.bind(t), n
                    }, D.base = function(t) {
                        e = t || "#", i = M()
                    }, D.exec = function() {
                        C(!0)
                    }, D.parser = function(t, n) {
                        t || n || (o = O, a = T), t && (o = t), n && (a = n)
                    }, D.query = function() {
                        var t = {};
                        return (m.href || i)[f](/[?&](.+?)=([^&]*)/g, function(n, e, i) {
                            t[e] = i
                        }), t
                    }, D.stop = function() {
                        _ && (v && (v.removeEventListener(l, n), v.removeEventListener(d, n), g.removeEventListener(w, L)), x[h]("stop"), _ = !1)
                    }, D.start = function(t) {
                        _ || (v && ("complete" == document.readyState ? k(t) : v[c]("load", function() {
                            setTimeout(function() {
                                k(t)
                            }, 1)
                        })), _ = !0)
                    }, D.base(), D.parser(), t.route = D
                }(a);
            var A = function(t) {
                    var n, e, i = "g",
                        r = /"[^"\\]*(?:\\[\S\s][^"\\]*)*"|'[^'\\]*(?:\\[\S\s][^'\\]*)*'/g,
                        o = r.source + "|" + /(?:\breturn\s+|(?:[$\w\)\]]|\+\+|--)\s*(\/)(?![*\/]))/.source + "|" + /\/(?=[^*\/])[^[\/\\]*(?:(?:\[(?:\\.|[^\]\\]*)*\]|\\.)[^[\/\\]*)*?(\/)[gim]*/.source,
                        s = RegExp("[\\x00-\\x1F<>a-zA-Z0-9'\",;\\\\]"),
                        c = /(?=[[\]()*+?.^$|])/g,
                        u = {
                            "(": RegExp("([()])|" + o, i),
                            "[": RegExp("([[\\]])|" + o, i),
                            "{": RegExp("([{}])|" + o, i)
                        },
                        f = "{ }",
                        l = ["{", "}", "{", "}", /{[^}]*}/, /\\([{}])/g, /\\({)|{/g, RegExp("\\\\(})|([[({])|(})|" + o, i), f, /^\s*{\^?\s*([$\w]+)(?:\s*,\s*(\S+))?\s+in\s+(\S.*)\s*}/, /(^|[^\\]){=[\S\s]*?}/],
                        d = void 0,
                        h = [];

                    function p(t) {
                        return t
                    }

                    function v(t, n) {
                        return n || (n = h), new RegExp(t.source.replace(/{/g, n[2]).replace(/}/g, n[3]), t.global ? i : "")
                    }

                    function g(t) {
                        if (t === f) return l;
                        var n = t.split(" ");
                        if (2 !== n.length || s.test(t)) throw new Error('Unsupported brackets "' + t + '"');
                        return (n = n.concat(t.replace(c, "\\").split(" ")))[4] = v(n[1].length > 1 ? /{[\S\s]*?}/ : l[4], n), n[5] = v(t.length > 3 ? /\\({|})/g : l[5], n), n[6] = v(l[6], n), n[7] = RegExp("\\\\(" + n[3] + ")|([[({])|(" + n[3] + ")|" + o, i), n[8] = t, n
                    }

                    function y(t) {
                        return t instanceof RegExp ? n(t) : h[t]
                    }

                    function m(t) {
                        (t || (t = f)) !== h[8] && (h = g(t), n = t === f ? p : v, h[9] = n(l[9])), d = t
                    }
                    return y.split = function(t, n, e) {
                        e || (e = h);
                        var i, r, o, a, s = [],
                            c = e[6];
                        for (r = o = c.lastIndex = 0; i = c.exec(t);) {
                            if (a = i.index, r) {
                                if (i[2]) {
                                    c.lastIndex = l(t, i[2], c.lastIndex);
                                    continue
                                }
                                if (!i[3]) continue
                            }
                            i[1] || (f(t.slice(o, a)), o = c.lastIndex, (c = e[6 + (r ^= 1)]).lastIndex = o)
                        }
                        return t && o < t.length && f(t.slice(o)), s;

                        function f(t) {
                            n || r ? s.push(t && t.replace(e[5], "$1")) : s.push(t)
                        }

                        function l(t, n, e) {
                            var i, r = u[n];
                            for (r.lastIndex = e, e = 1;
                                (i = r.exec(t)) && (!i[1] || (i[1] === n ? ++e : --e)););
                            return e ? t.length : r.lastIndex
                        }
                    }, y.hasExpr = function(t) {
                        return h[4].test(t)
                    }, y.loopKeys = function(t) {
                        var n = t.match(h[9]);
                        return n ? {
                            key: n[1],
                            pos: n[2],
                            val: h[0] + n[3].trim() + h[1]
                        } : {
                            val: t.trim()
                        }
                    }, y.array = function(t) {
                        return t ? g(t) : h
                    }, Object.defineProperty(y, "settings", {
                        set: function(t) {
                            var n;
                            n = (t = t || {}).brackets, Object.defineProperty(t, "brackets", {
                                set: m,
                                get: function() {
                                    return d
                                },
                                enumerable: !0
                            }), e = t, m(n)
                        },
                        get: function() {
                            return e
                        }
                    }), y.settings = void 0 !== a && a.settings || {}, y.set = m, y.R_STRINGS = r, y.R_MLCOMMS = /\/\*[^*]*\*+(?:[^*\/][^*]*\*+)*\//g, y.S_QBLOCKS = o, y
                }(),
                O = function() {
                    var t = {};

                    function n(n, i) {
                        return n ? (t[n] || (t[n] = function(t) {
                            var n = function(t) {
                                var n, e = [],
                                    i = A.split(t.replace(s, '"'), 1);
                                if (i.length > 2 || i[0]) {
                                    var r, o, a = [];
                                    for (r = o = 0; r < i.length; ++r)(n = i[r]) && (n = 1 & r ? f(n, 1, e) : '"' + n.replace(/\\/g, "\\\\").replace(/\r\n?|\n/g, "\\n").replace(/"/g, '\\"') + '"') && (a[o++] = n);
                                    n = o < 2 ? a[0] : "[" + a.join(",") + '].join("")'
                                } else n = f(i[1], 0, e);
                                e[0] && (n = n.replace(c, function(t, n) {
                                    return e[n].replace(/\r/g, "\\r").replace(/\n/g, "\\n")
                                }));
                                return n
                            }(t);
                            "try{return " !== n.slice(0, 11) && (n = "return " + n);
                            return new Function("E", n + ";")
                        }(n))).call(i, e) : n
                    }

                    function e(t, e) {
                        n.errorHandler && (t.riotData = {
                            tagName: e && e.root && e.root.tagName,
                            _riot_id: e && e._riot_id
                        }, n.errorHandler(t))
                    }
                    n.haveRaw = A.hasRaw, n.hasExpr = A.hasExpr, n.loopKeys = A.loopKeys, n.clearCache = function() {
                        t = {}
                    }, n.errorHandler = null;
                    var i = String.fromCharCode(8279),
                        o = /^(?:(-?[_A-Za-z\xA0-\xFF][-\w\xA0-\xFF]*)|\u2057(\d+)~):/,
                        a = RegExp(A.S_QBLOCKS, "g"),
                        s = /\u2057/g,
                        c = /\u2057(\d+)~/g;
                    var u = {
                        "(": /[()]/g,
                        "[": /[[\]]/g,
                        "{": /[{}]/g
                    };

                    function f(t, n, e) {
                        if (t = t.replace(a, function(t, n) {
                                return t.length > 2 && !n ? i + (e.push(t) - 1) + "~" : t
                            }).replace(/\s+/g, " ").trim().replace(/\ ?([[\({},?\.:])\ ?/g, "$1")) {
                            for (var r, s = [], c = 0; t && (r = t.match(o)) && !r.index;) {
                                var f, l, d = /,|([[{(])|$/g;
                                for (t = RegExp.rightContext, f = r[2] ? e[r[2]].slice(1, -1).trim().replace(/\s+/g, " ") : r[1]; l = (r = d.exec(t))[1];) h(l, d);
                                l = t.slice(0, r.index), t = RegExp.rightContext, s[c++] = p(l, 1, f)
                            }
                            t = c ? c > 1 ? "[" + s.join(",") + '].join(" ").trim()' : s[0] : p(t, n)
                        }
                        return t;

                        function h(n, e) {
                            var i, r = 1,
                                o = u[n];
                            for (o.lastIndex = e.lastIndex; i = o.exec(t);)
                                if (i[0] === n) ++r;
                                else if (!--r) break;
                            e.lastIndex = r ? t.length : o.lastIndex
                        }
                    }
                    var l = '"in this?this:' + ("object" != typeof r ? "global" : "window") + ").",
                        d = /[,{][\$\w]+(?=:)|(^ *|[^$\w\.{])(?!(?:typeof|true|false|null|undefined|in|instanceof|is(?:Finite|NaN)|void|NaN|new|Date|RegExp|Math)(?![$\w]))([$_A-Za-z][$\w]*)/g,
                        h = /^(?=(\.[$\w]+))\1(?:[^.[(]|$)/;

                    function p(t, n, e) {
                        var i;
                        return t = t.replace(d, function(t, n, e, r, o) {
                            return e && (r = i ? 0 : r + t.length, "this" !== e && "global" !== e && "window" !== e ? (t = n + '("' + e + l + e, r && (i = "." === (o = o[r]) || "(" === o || "[" === o)) : r && (i = !h.test(o.slice(r)))), t
                        }), i && (t = "try{return " + t + "}catch(e){E(e,this)}"), e ? t = (i ? "function(){" + t + "}.call(this)" : "(" + t + ")") + '?"' + e + '":""' : n && (t = "function(v){" + (i ? t.replace("return ", "v=") : "v=(" + t + ")") + ';return v||v===0?v:""}.call(this)'), t
                    }
                    return n.version = A.version = "v2.4.2", n
                }(),
                T = function() {
                    var t = /<yield\b/i,
                        n = /<yield\s*(?:\/>|>([\S\s]*?)<\/yield\s*>|>)/gi,
                        e = /<yield\s+to=['"]([^'">]*)['"]\s*>([\S\s]*?)<\/yield\s*>/gi,
                        i = /<yield\s+from=['"]?([-\w]+)['"]?\s*(?:\/>|>([\S\s]*?)<\/yield\s*>)/gi,
                        r = {
                            tr: "tbody",
                            th: "tr",
                            td: "tr",
                            col: "colgroup"
                        },
                        o = S && S < 10 ? w : /^(?:t(?:body|head|foot|[rhd])|caption|col(?:group)?)$/;

                    function a(a, s, c) {
                        var u, f = a && a.match(/^\s*<([-\w]+)/),
                            l = f && f[1].toLowerCase(),
                            d = ot("div", c && (u = l, ~x.indexOf(u)));
                        return a = function(r, o) {
                            if (!t.test(r)) return r;
                            var a = {};
                            return o = o && o.replace(e, function(t, n, e) {
                                return a[n] = a[n] || e, ""
                            }).trim(), r.replace(i, function(t, n, e) {
                                return a[n] || e || ""
                            }).replace(n, function(t, n) {
                                return o || n || ""
                            })
                        }(a, s), o.test(l) ? d = function(t, n, e) {
                            var i = "o" === e[0],
                                o = i ? "select>" : "table>";
                            if (t.innerHTML = "<" + o + n.trim() + "</" + o, o = t.firstChild, i) o.selectedIndex = -1;
                            else {
                                var a = r[e];
                                a && 1 === o.childElementCount && (o = st(a, o))
                            }
                            return o
                        }(d, a, l) : function(t, n) {
                            if (typeof t.innerHTML != g) t.innerHTML = n;
                            else {
                                var e = (new DOMParser).parseFromString(n, "application/xml");
                                t.appendChild(t.ownerDocument.importNode(e.documentElement, !0))
                            }
                        }(d, a), d.stub = !0, d
                    }
                    return a
                }();

            function k(t, n, e) {
                var i = {};
                return i[t.key] = n, t.pos && (i[t.pos] = e), i
            }

            function P(t, n) {
                Object.keys(t.tags).forEach(function(e) {
                    var i = t.tags[e];
                    tt(i) ? D(i, function(t) {
                        $(t, e, n)
                    }) : $(i, e, n)
                })
            }

            function N(t, n, e) {
                var i, r = t._root;
                for (t._virts = []; r;) i = r.nextSibling, e ? n.insertBefore(r, e._root) : n.appendChild(r), t._virts.push(r), r = i
            }

            function j(t, n, e, i) {
                for (var r, o = t._root, a = 0; a < i; a++) r = o.nextSibling, n.insertBefore(o, e._root), o = r
            }

            function I(t, n, e, i, r, o, a) {
                rt(n.root) || (t ? o(n, i, e, a.childNodes.length) : i.insertBefore(n.root, e.root))
            }
            var M = function(t) {
                if (!r) return {
                    add: function() {},
                    inject: function() {}
                };
                var n = function() {
                        var t = ot("style");
                        K(t, "type", "text/css");
                        var n = st("style[type=riot]");
                        return n ? (n.id && (t.id = n.id), n.parentNode.replaceChild(t, n)) : document.getElementsByTagName("head")[0].appendChild(t), t
                    }(),
                    e = n.styleSheet,
                    i = "";
                return Object.defineProperty(t, "styleNode", {
                    value: n,
                    writable: !0
                }), {
                    add: function(t) {
                        i += t
                    },
                    inject: function() {
                        i && (e ? e.cssText += i : n.innerHTML += i, i = "")
                    }
                }
            }(a);

            function C(t, n, e, i) {
                it(t, function(t) {
                    if (1 == t.nodeType) {
                        if (t.isLoop = t.isLoop || t.parentNode && t.parentNode.isLoop || V(t, "each") ? 1 : 0, e) {
                            var r = q(t);
                            r && !t.isLoop && e.push(function(t, n, e, i) {
                                var r = new F(t, n, e),
                                    o = X(n.root),
                                    a = z(i);
                                r.parent = a, r._parent = i, Y(r, o, a), a !== i && Y(r, o, i);
                                return n.root.innerHTML = "", r
                            }(r, {
                                root: t,
                                parent: n
                            }, t.innerHTML, n))
                        }
                        t.isLoop && !i || function(t, n, e) {
                            var i, r = ct(t),
                                o = function(o) {
                                    Q(e, r) || (i = tt(o), o ? (!i || i && !Q(o, t)) && (i ? o.push(t) : n[r] = [o, t]) : n[r] = t)
                                };
                            if (!r) return;
                            O.hasExpr(r) ? n.one("mount", function() {
                                r = ct(t), o(n[r])
                            }) : o(n[r])
                        }(t, n, [])
                    }
                })
            }

            function L(t, n, e) {
                function i(t, n, i) {
                    O.hasExpr(n) && e.push(Z({
                        dom: t,
                        expr: n
                    }, i))
                }
                it(t, function(t) {
                    var e, r = t.nodeType;
                    if (3 == r && "STYLE" != t.parentNode.tagName && i(t, t.nodeValue), 1 == r) return (e = V(t, "each")) ? (function(t, n, e) {
                        H(t, "each");
                        var i, r = typeof V(t, "no-reorder") !== p || H(t, "no-reorder"),
                            o = X(t),
                            a = u[o] || {
                                tmpl: U(t)
                            },
                            s = w.test(o),
                            c = t.parentNode,
                            f = document.createTextNode(""),
                            l = q(t),
                            d = "option" === o.toLowerCase(),
                            h = [],
                            g = [],
                            y = "VIRTUAL" == t.tagName;
                        e = O.loopKeys(e), c.insertBefore(f, t), n.one("before-mount", function() {
                            t.parentNode.removeChild(t), c.stub && (c = n.root)
                        }).on("update", function() {
                            var p = O(e.val, n),
                                m = document.createDocumentFragment();
                            tt(p) || (p = (i = p || !1) ? Object.keys(p).map(function(t) {
                                return k(e, t, p[t])
                            }) : []);
                            for (var b = 0, w = p.length; b < w; b++) {
                                var _ = p[b],
                                    x = r && typeof _ == v && !i,
                                    S = g.indexOf(_),
                                    A = ~S && x ? S : b,
                                    T = h[A];
                                _ = !i && e.key ? k(e, _, b) : _, !x && !T || x && !~S || !T ? ((T = new F(a, {
                                    parent: n,
                                    isLoop: !0,
                                    hasImpl: !!u[o],
                                    root: s ? c : t.cloneNode(),
                                    item: _
                                }, t.innerHTML)).mount(), y && (T._root = T.root.firstChild), b != h.length && h[b] ? (I(y, T, h[b], c, 0, N, t), g.splice(b, 0, _)) : y ? N(T, m) : m.appendChild(T.root), h.splice(b, 0, T), A = b) : T.update(_, !0), A !== b && x && h[b] && (Q(p, g[b]) && I(y, T, h[b], c, 0, j, t), e.pos && (T[e.pos] = b), h.splice(b, 0, h.splice(A, 1)[0]), g.splice(b, 0, g.splice(A, 1)[0]), !l && T.tags && P(T, b)), T._item = _, J(T, "_parent", n)
                            }
                            if (function(t, n) {
                                    for (var e, i = n.length, r = t.length; i > r;) e = n[--i], n.splice(i, 1), e.unmount()
                                }(p, h), c.insertBefore(m, f), d && E && !c.multiple)
                                for (var M = 0; M < c.length; M++)
                                    if (c[M].__riot1374) {
                                        c.selectedIndex = M, delete c[M].__riot1374;
                                        break
                                    }
                            l && (n.tags[o] = h), g = p.slice()
                        })
                    }(t, n, e), !1) : (D(t.attributes, function(n) {
                        var e = n.name,
                            r = e.split("__")[1];
                        if (i(t, n.value, {
                                attr: r || e,
                                bool: r
                            }), r) return H(t, e), !1
                    }), !q(t) && void 0)
                })
            }

            function F(t, n, e) {
                var i, u = a.observable(this),
                    y = function(t) {
                        return Object.create(t || null)
                    }(n.opts) || {},
                    m = n.parent,
                    b = n.isLoop,
                    w = n.hasImpl,
                    x = et(n.item),
                    A = [],
                    k = [],
                    P = n.root,
                    N = P.tagName.toLowerCase(),
                    j = {},
                    I = [];

                function M() {
                    var t = w && b ? u : m || u;
                    D(P.attributes, function(n) {
                        if (!(n.name in j)) {
                            var e = n.value;
                            y[W(n.name)] = O.hasExpr(e) ? O(e, t) : e
                        }
                    }), D(Object.keys(j), function(n) {
                        y[W(n)] = O(j[n], t)
                    })
                }

                function F(t) {
                    D(Object.keys(t), function(n) {
                        var e = !_.test(n) && Q(I, n);
                        (typeof u[n] === g || e) && (e || I.push(n), u[n] = t[n])
                    })
                }

                function U(t) {
                    u.update(t, !0)
                }

                function V(t) {
                    if (D(k, function(n) {
                            n[t ? "mount" : "unmount"]()
                        }), m) {
                        var n = t ? "on" : "off";
                        b ? m[n]("unmount", u.unmount) : m[n]("update", U)[n]("unmount", u.unmount)
                    }
                }
                t.name && P._tag && P._tag.unmount(!0), this.isMounted = !1, P.isLoop = b, P._tag = this, J(this, "_riot_id", ++s), Z(this, {
                    parent: m,
                    root: P,
                    opts: y
                }, x), J(this, "tags", {}), D(P.attributes, function(t) {
                    var n = t.value;
                    O.hasExpr(n) && (j[t.name] = n)
                }), i = T(t.tmpl, e, b), J(this, "update", function(t, n) {
                    return t = et(t), b && F(u.parent), t && G(x) && (! function(t) {
                            for (var n in x) typeof u[n] !== g && nt(u, n) && (u[n] = t[n])
                        }(t), x = t), Z(u, t), M(), u.trigger("update", t),
                        function(t, n) {
                            D(t, function(t, e) {
                                var i = t.dom,
                                    o = t.attr,
                                    a = O(t.expr, n),
                                    s = t.parent || t.dom.parentNode;
                                if (t.bool ? a = !!a : null == a && (a = ""), t.value !== a) {
                                    if (t.value = a, !o) return a += "", void(s && (t.parent = s, "TEXTAREA" === s.tagName ? (s.value = a, S || (i.nodeValue = a)) : i.nodeValue = a));
                                    var c;
                                    if ("value" !== o)
                                        if (H(i, o), B(a)) ! function(t, n, e, i) {
                                            e[t] = function(t) {
                                                var o = i._parent,
                                                    a = i._item;
                                                if (!a)
                                                    for (; o && !a;) a = o._item, o = o._parent;
                                                nt(t = t || r.event, "currentTarget") && (t.currentTarget = e), nt(t, "target") && (t.target = t.srcElement), nt(t, "which") && (t.which = t.charCode || t.keyCode), t.item = a, !0 === n.call(i, t) || /radio|check/.test(e.type) || (t.preventDefault && t.preventDefault(), t.returnValue = !1), t.preventUpdate || (a ? z(o) : i).update()
                                            }
                                        }(o, a, i, n);
                                        else if ("if" == o) {
                                        var u = t.stub,
                                            f = function() {
                                                R(i.parentNode, i, u)
                                            };
                                        a ? u && (R(u.parentNode, u, i), i.inStub = !1, rt(i) || it(i, function(t) {
                                            t._tag && !t._tag.isMounted && (t._tag.isMounted = !!t._tag.trigger("mount"))
                                        })) : (u = t.stub = u || document.createTextNode(""), i.parentNode ? f() : (n.parent || n).one("updated", f), i.inStub = !0)
                                    } else "show" === o ? i.style.display = a ? "" : "none" : "hide" === o ? i.style.display = a ? "none" : "" : t.bool ? (i[o] = a, a && K(i, o, o), E && "selected" === o && "OPTION" === i.tagName && (i.__riot1374 = a)) : (0 === a || a && typeof a !== v) && (c = l, o.slice(0, c.length) === c && o != d && (o = o.slice(l.length)), K(i, o, a));
                                    else i.value !== a && (i.value = a, K(i, o, a))
                                }
                            })
                        }(A, u), n && u.parent ? u.parent.one("updated", function() {
                            u.trigger("updated")
                        }) : dt(function() {
                            u.trigger("updated")
                        }), this
                }), J(this, "mixin", function() {
                    return D(arguments, function(t) {
                        var n, e, i = [];
                        t = typeof t === p ? a.mixin(t) : t, n = B(t) ? new t : t;
                        var r = Object.getPrototypeOf(n);
                        do {
                            i = i.concat(Object.getOwnPropertyNames(e || n))
                        } while (e = Object.getPrototypeOf(e || n));
                        D(i, function(t) {
                            if ("init" != t && "__proto__" != t) {
                                var e = Object.getOwnPropertyDescriptor(n, t) || Object.getOwnPropertyDescriptor(r, t),
                                    i = e && (e.get || e.set);
                                !u.hasOwnProperty(t) && i ? Object.defineProperty(u, t, e) : u[t] = B(n[t]) ? n[t].bind(u) : n[t]
                            }
                        }), n.init && n.init.bind(u)()
                    }), this
                }), J(this, "mount", function() {
                    M();
                    var n = a.mixin(f);
                    if (n)
                        for (var e in n) n.hasOwnProperty(e) && u.mixin(n[e]);
                    if (u._parent && u._parent.root.isLoop && F(u._parent), t.fn && t.fn.call(u, y), L(i, u, A), V(!0), t.attrs && function(t, n) {
                            var e, i = /([-\w]+) ?= ?(?:"([^"]*)|'([^']*)|({[^}]*}))/g;
                            for (; e = i.exec(t);) n(e[1].toLowerCase(), e[2] || e[3] || e[4])
                        }(t.attrs, function(t, n) {
                            K(P, t, n)
                        }), (t.attrs || w) && L(u.root, u, A), u.parent && !b || u.update(x), u.trigger("before-mount"), b && !w) P = i.firstChild;
                    else {
                        for (; i.firstChild;) P.appendChild(i.firstChild);
                        P.stub && (P = m.root)
                    }
                    J(u, "root", P), b && C(u.root, u.parent, null, !0), !u.parent || u.parent.isMounted ? (u.isMounted = !0, u.trigger("mount")) : u.parent.one("mount", function() {
                        rt(u.root) || (u.parent.isMounted = u.isMounted = !0, u.trigger("mount"))
                    })
                }), J(this, "unmount", function(t) {
                    var n, e = P,
                        i = e.parentNode,
                        r = c.indexOf(u);
                    if (u.trigger("before-unmount"), ~r && c.splice(r, 1), i) {
                        if (m) tt((n = z(m)).tags[N]) ? D(n.tags[N], function(t, e) {
                            t._riot_id == u._riot_id && n.tags[N].splice(e, 1)
                        }) : n.tags[N] = o;
                        else
                            for (; e.firstChild;) e.removeChild(e.firstChild);
                        t ? (H(i, h), H(i, d)) : i.removeChild(e)
                    }
                    this._virts && D(this._virts, function(t) {
                        t.parentNode && t.parentNode.removeChild(t)
                    }), u.trigger("unmount"), V(), u.off("*"), u.isMounted = !1, delete P._tag
                }), C(i, this, k)
            }

            function R(t, n, e) {
                t && (t.insertBefore(e, n), t.removeChild(n))
            }

            function D(t, n) {
                for (var e, i = t ? t.length : 0, r = 0; r < i; r++) null != (e = t[r]) && !1 === n(e, r) && r--;
                return t
            }

            function B(t) {
                return typeof t === y || !1
            }

            function U(t) {
                if (t.outerHTML) return t.outerHTML;
                var n = ot("div");
                return n.appendChild(t.cloneNode(!0)), n.innerHTML
            }

            function G(t) {
                return t && typeof t === v
            }

            function H(t, n) {
                t.removeAttribute(n)
            }

            function W(t) {
                return t.replace(/-(\w)/g, function(t, n) {
                    return n.toUpperCase()
                })
            }

            function V(t, n) {
                return t.getAttribute(n)
            }

            function K(t, n, e) {
                var i = b.exec(n);
                i && i[1] ? t.setAttributeNS(m, i[1], e) : t.setAttribute(n, e)
            }

            function q(t) {
                return t.tagName && u[V(t, h) || V(t, d) || t.tagName.toLowerCase()]
            }

            function Y(t, n, e) {
                var i = e.tags[n];
                i ? (tt(i) || i !== t && (e.tags[n] = [i]), Q(e.tags[n], t) || e.tags[n].push(t)) : e.tags[n] = t
            }

            function $(t, n, e) {
                var i, r = t.parent;
                r && (tt(i = r.tags[n]) ? i.splice(e, 0, i.splice(i.indexOf(t), 1)[0]) : Y(t, n, r))
            }

            function z(t) {
                for (var n = t; !q(n.root) && n.parent;) n = n.parent;
                return n
            }

            function J(t, n, e, i) {
                return Object.defineProperty(t, n, Z({
                    value: e,
                    enumerable: !1,
                    writable: !1,
                    configurable: !0
                }, i)), t
            }

            function X(t) {
                var n = q(t),
                    e = V(t, "name");
                return e && !O.hasExpr(e) ? e : n ? n.name : t.tagName.toLowerCase()
            }

            function Z(t) {
                for (var n, e = arguments, i = 1; i < e.length; ++i)
                    if (n = e[i])
                        for (var r in n) nt(t, r) && (t[r] = n[r]);
                return t
            }

            function Q(t, n) {
                return ~t.indexOf(n)
            }

            function tt(t) {
                return Array.isArray(t) || t instanceof Array
            }

            function nt(t, n) {
                var e = Object.getOwnPropertyDescriptor(t, n);
                return typeof t[n] === g || e && e.writable
            }

            function et(t) {
                if (!(t instanceof F || t && typeof t.trigger == y)) return t;
                var n = {};
                for (var e in t) _.test(e) || (n[e] = t[e]);
                return n
            }

            function it(t, n) {
                if (t) {
                    if (!1 === n(t)) return;
                    for (t = t.firstChild; t;) it(t, n), t = t.nextSibling
                }
            }

            function rt(t) {
                for (; t;) {
                    if (t.inStub) return !0;
                    t = t.parentNode
                }
                return !1
            }

            function ot(t, n) {
                return n ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : document.createElement(t)
            }

            function at(t, n) {
                return (n || document).querySelectorAll(t)
            }

            function st(t, n) {
                return (n || document).querySelector(t)
            }

            function ct(t) {
                return V(t, "id") || V(t, "name")
            }
            var ut, ft, lt, dt = function(t) {
                var n = t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame;
                if (!n || /iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent)) {
                    var e = 0;
                    n = function(t) {
                        var n = Date.now(),
                            i = Math.max(16 - (n - e), 0);
                        setTimeout(function() {
                            t(e = n + i)
                        }, i)
                    }
                }
                return n
            }(r || {});
            a.util = {
                brackets: A,
                tmpl: O
            }, a.mixin = (ft = (ut = {})[f] = {}, lt = 0, function(t, n, e) {
                if (G(t)) a.mixin("__unnamed_" + lt++, t, !0);
                else {
                    var i = e ? ft : ut;
                    if (!n) {
                        if (typeof i[t] === g) throw new Error("Unregistered mixin: " + t);
                        return i[t]
                    }
                    B(n) ? (Z(n.prototype, i[t] || {}), i[t] = n) : i[t] = Z(i[t] || {}, n)
                }
            }), a.tag = function(t, n, e, i, r) {
                return B(i) && (r = i, /^[\w\-]+\s?=/.test(e) ? (i = e, e = "") : i = ""), e && (B(e) ? r = e : M.add(e)), t = t.toLowerCase(), u[t] = {
                    name: t,
                    tmpl: n,
                    attrs: i,
                    fn: r
                }, t
            }, a.tag2 = function(t, n, e, i, r) {
                return e && M.add(e), u[t] = {
                    name: t,
                    tmpl: n,
                    attrs: i,
                    fn: r
                }, t
            }, a.mount = function(t, n, e) {
                var i, r, o = [];

                function a(t) {
                    var n = "";
                    return D(t, function(t) {
                        /[^-\w]/.test(t) || (t = t.trim().toLowerCase(), n += ",[" + h + '="' + t + '"],[' + d + '="' + t + '"]')
                    }), n
                }

                function s() {
                    var t = Object.keys(u);
                    return t + a(t)
                }
                if (M.inject(), G(n) && (e = n, n = 0), typeof t === p ? ("*" === t ? t = r = s() : t += a(t.split(/, */)), i = t ? at(t) : []) : i = t, "*" === n) {
                    if (n = r || s(), i.tagName) i = at(n, i);
                    else {
                        var f = [];
                        D(i, function(t) {
                            f.push(at(n, t))
                        }), i = f
                    }
                    n = 0
                }
                return function t(i) {
                    if (i.tagName) {
                        var r = V(i, h) || V(i, d);
                        n && r !== n && (r = n, K(i, h, n), K(i, d, n));
                        var a = function(t, n, e) {
                            var i = u[n],
                                r = t._innerHTML = t._innerHTML || t.innerHTML;
                            return t.innerHTML = "", i && t && (i = new F(i, {
                                root: t,
                                opts: e
                            }, r)), i && i.mount && (i.mount(), Q(c, i) || c.push(i)), i
                        }(i, r || i.tagName.toLowerCase(), e);
                        a && o.push(a)
                    } else i.length && D(i, t)
                }(i), o
            }, a.update = function() {
                return D(c, function(t) {
                    t.update()
                })
            }, a.vdom = c, a.Tag = F, typeof n === v ? t.exports = a : "function" === y && typeof e(305) !== g ? (i = function() {
                return a
            }.call(n, e, n, t)) === o || (t.exports = i) : r.riot = a
        }("undefined" != typeof window ? window : void 0)
    }, function(t, n) {
        (function(n) {
            t.exports = n
        }).call(this, {})
    }, function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e(6);
        e(8).tag2("bbc-notifications-settings-view", '<header class="notifications__header notifications__header--js"> <h2 class="notification-title notification-title--js"><i1-8n>Notifications Settings</i1-8n></h2> <ul class="notification-header-icons"> <li> <a href="javascript:;" class="notifications__settings__back-btn--js" onkeydown="{this.onBackKeydown}" onclick="{parent.closeSettings}" role="link" title="Go back" alt="Go back" aria-label="Go back"><img class="setting-icon notifications-image" riot-src="{this.basePath + \'/svg/arrow_left_black.svg\'}" alt="back"><span class="notifications-brevier"><i1-8n>Back</i1-8n></span></a> </li> </ul> </header> <div class="notifications-settings-description"> <p class="notifications-long-primer"><i1-8n>copy.settings</i1-8n></p> </div> <div each="{this.products}" class="notifications-settings-item notifications-settings-product--js" role="checkbox" aria-checked="{enabled}"> <label tabindex="0" onkeydown="{this.onLabelKeydown}"> <div class="notifications-long-primer notifications-settings-text">{this.getProductSettingLabel(product)}</div> <input type="checkbox" name="checkbox" id="{product}-settings-checkbox" class="notifications-settings-tickbox" riot-value="{product}" checked="{enabled}" onchange="{this.productChange}"> <div class="notifications-settings-checkbox-hold"></div> </label> </div>', "", "", function(t) {
            var n = this,
                r = e(49);
            this.friendlyProductNames = i.default.friendlyProductNames, this.basePath = t.mainApp.basePath, this.getProductSettingLabel = function(t) {
                return r.localise("{product} Notifications", {
                    product: n.friendlyProductNames[t]
                })
            }, this.updatePref = function(e, r) {
                e.enabled = r.checked, i.default.set({
                    preferences: {
                        lastReadFlag: !1,
                        productsEnabled: n.products
                    }
                }).catch(function(n) {
                    throw r.checked = !r.checked, e.enabled = r.checked, t.componentApp.update({
                        error: {
                            inner: "settings"
                        }
                    }), n
                }).then(function() {
                    t.componentApp.resetNotifications()
                })
            }, this.productChange = function(t) {
                n.updatePref(t.item, t.currentTarget)
            }, this.onBackKeydown = function(t) {
                return 9 === t.keyCode && t.shiftKey ? (document.querySelector(".notifications-settings-product--js:last-child label").focus(), !1) : (13 === t.keyCode && (n.parent.updateFocus = ".notifications__settings--js"), !0)
            }, this.onLabelKeydown = function(t) {
                if (9 !== t.keyCode || t.shiftKey) {
                    if (13 === t.keyCode) {
                        var e = t.currentTarget.querySelector("input");
                        return e.checked = !e.checked, n.updatePref(t.item, e), !1
                    }
                } else {
                    var i = document.activeElement.parentNode.nextSibling;
                    if (!(i.classList && i.classList.contains("notifications-settings-product--js"))) return document.querySelector(".notifications__settings__back-btn--js").focus(), !1
                }
                return !0
            }, this.on("before-mount", function() {
                var t = i.default.get();
                n.update({
                    products: t.preferences.productsEnabled
                })
            })
        })
    }, function(t, n) {
        var e = "undefined" != typeof ArrayBuffer;

        function i(t, n) {
            var i;
            "number" != typeof t && (t = 32 * (i = t).length);
            var r = Math.ceil(t / 32),
                o = -1;
            if (this.m = t = 32 * r, this.k = n, e) {
                var a = 1 << Math.ceil(Math.log(Math.ceil(Math.log(t) / Math.LN2 / 8)) / Math.LN2),
                    s = 1 === a ? Uint8Array : 2 === a ? Uint16Array : Uint32Array,
                    c = new ArrayBuffer(a * n),
                    u = this.buckets = new Int32Array(r);
                if (i)
                    for (; ++o < r;) u[o] = i[o];
                this._locations = new s(c)
            } else {
                u = this.buckets = [];
                if (i)
                    for (; ++o < r;) u[o] = i[o];
                else
                    for (; ++o < r;) u[o] = 0;
                this._locations = []
            }
        }

        function r(t) {
            return 16843009 * ((t = (858993459 & (t -= t >> 1 & 1431655765)) + (t >> 2 & 858993459)) + (t >> 4) & 252645135) >> 24
        }
        i.prototype.locations = function(t) {
            for (var n = this.k, e = this.m, i = this._locations, r = function(t) {
                    var n, e, i = t.length,
                        r = 2166136261,
                        o = -1;
                    for (; ++o < i;) n = t.charCodeAt(o), (e = 4278190080 & n) && (r ^= e >> 24, r += (r << 1) + (r << 4) + (r << 7) + (r << 8) + (r << 24)), (e = 16711680 & n) && (r ^= e >> 16, r += (r << 1) + (r << 4) + (r << 7) + (r << 8) + (r << 24)), (e = 65280 & n) && (r ^= e >> 8, r += (r << 1) + (r << 4) + (r << 7) + (r << 8) + (r << 24)), r ^= 255 & n, r += (r << 1) + (r << 4) + (r << 7) + (r << 8) + (r << 24);
                    return r += r << 13, r ^= r >> 7, r += r << 3, r ^= r >> 17, 4294967295 & (r += r << 5)
                }(t), o = function(t) {
                    return t += (t << 1) + (t << 4) + (t << 7) + (t << 8) + (t << 24), t += t << 13, t ^= t >> 7, t += t << 3, t ^= t >> 17, 4294967295 & (t += t << 5)
                }(r), a = -1, s = r % e; ++a < n;) i[a] = s < 0 ? s + e : s, s = (s + o) % e;
            return i
        }, i.prototype.add = function(t) {
            for (var n = this.locations(t + ""), e = -1, i = this.k, r = this.buckets; ++e < i;) r[Math.floor(n[e] / 32)] |= 1 << n[e] % 32
        }, i.prototype.test = function(t) {
            for (var n, e = this.locations(t + ""), i = -1, r = this.k, o = this.buckets; ++i < r;)
                if (n = e[i], 0 == (o[Math.floor(n / 32)] & 1 << n % 32)) return !1;
            return !0
        }, i.prototype.size = function() {
            for (var t = this.buckets, n = 0, e = 0, i = t.length; e < i; ++e) n += r(t[e]);
            return -this.m * Math.log(1 - n / this.m) / this.k
        }, t.exports = i
    }, function(t, n, e) {
        var i = e(8);
        i.tag2("bbc-notifications-onboarding-async", '<div class="spinner"> <img class="loader-icon notifications-image spinner__img--svg" riot-src="{this.parent.parent.opts.mainApp.basePath + \'/svg/loader.svg\'}" alt="Spinner"> </div>', "", "", function(t) {
            var n = this;
            this.on("mount", function() {
                n.parent.parent.opts.mainApp.loadOnboarding(function(t) {
                    var e = {
                        onboard: t,
                        mainApp: n.parent.parent.opts.mainApp,
                        componentApp: n.parent.parent.parent
                    };
                    i.mount(n.root, "bbc-notifications-onboarding", e)
                })
            })
        })
    }, function(t, n, e) {
        "use strict";
        e.r(n),
            function(t) {
                var n = e(94),
                    i = e(6);
                e(8).tag2("bbc-notifications-onboarding-u13", '<div class="notifications-full notifications-u13--onboarding-image"> <div class="notifications__container"> <div class="notifications-u13--close-drawer" onclick="{close}"></div> <div class="notifications-u13--content"> <div class="notifications-layout"> <div class="notifications-layout__item gel-bp-s-8/12 gel-bp-m-6/12"> <div if="{opts.state.policyIssue === \'parentId\' || opts.state.policyIssue === \'guardianEmail\'}" id="bbc-notifications-onboarding-u13-parentID"> <p class="notifications-trafalgar-bold"><i1-8n>copy.under13.parentId.title</i1-8n></p> <p class="notifications-pica bbc-notifications-onboarding-u13-permission-msg" id="u13-msg"> <i1-8n> {u13BodyMsg} </i1-8n> </p> </div> <div if="{opts.state.policyIssue === \'linkPending\'}" id="bbc-notifications-onboarding-u13-linkPending"> <p class="notifications-trafalgar-bold"><i1-8n>copy.under13.linkPending.title</i1-8n></p> <p class="notifications-pica"><i1-8n>copy.under13.linkPending.body</i1-8n></p> </div> <div if="{opts.state.policyIssue === \'permissionNotifications\'}" id="bbc-notifications-onboarding-u13-permissionNotifications"> <p class="notifications-trafalgar-bold"><i1-8n>copy.under13.permissionNotifications.title</i1-8n></p> <p class="notifications-pica"><i1-8n>copy.under13.permissionNotifications.body</i1-8n></p> </div> </div> </div> <div class="notifications-layout"> <div class="notifications-20/24 notifications-layout__item notifications-u13--options"> <div id="u13-ok-btn" if="{opts.state.policyIssue === \'parentId\' || opts.state.policyIssue === \'guardianEmail\'}"> <a href="{buttonLink}" class="notifications-u13--ok-button notifications-pica-bold"><span><i1-8n>{u13BtnMsg}</i1-8n></span></a> </div> <div class="notifications-u13--more"> <a href="{this.moreInfoLink}" class="notifications-pica-bold"><span class="notifications-u13--info-icon"></span><i1-8n>copy.under13.moreInfo</i1-8n></a> </div> </div> </div> </div> <div class="notifications-u13--overlay"></div> </div> </div>', "", "", function(r) {
                    var o = this,
                        a = e(32),
                        s = e(49);
                    this.moreInfoLink = a.env.under13s.moreInfo, this.close = function() {
                        r.mainApp.navNotificationElement.click()
                    }, this.on("mount", function() {
                        if (r.state.idctaResponse && r.state.idctaResponse.html && r.state.policyIssue && ("parentId" === r.state.policyIssue || "guardianEmail" === r.state.policyIssue)) {
                            var e = r.state.idctaResponse.html.match(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"/);
                            e[1] && o.update({
                                buttonLink: e[1]
                            });
                            var c = s.getLanguage(),
                                u = i.default.fetchCorrectDomainEndpoint(a.env.preferencesUrls.translationsUK, a.env.preferencesUrls.translations),
                                f = "".concat(u, "?locale=").concat(c),
                                l = "".concat(location.protocol, "//").concat(window.location.hostname);
                            t(f, {
                                Origin: l
                            }).catch(function() {
                                o.update({
                                    u13BodyMsg: "copy.under13.parentId.body"
                                }), o.update({
                                    u13BtnMsg: "copy.under13.parentId.button"
                                })
                            }).then(function(t) {
                                return t.json()
                            }).then(function(t) {
                                var i = t.translation_guardianconsentrequired;
                                i.endsWith(".") && (i = i.substring(0, i.length - 1)), i = i.replace("{additionalDetailsHref}", 'id="u13-permission-btn"'), document.getElementById("u13-ok-btn").innerHTML = "", document.getElementById("u13-msg").innerHTML = Object(n.convertHtml)(i).html, document.getElementById("u13-permission-btn").setAttribute("class", "notifications-u13--ok-button notifications-pica-bold bbc-notifications-onboarding-u13-BTN"), document.getElementById("u13-permission-btn").setAttribute("href", e[1])
                            })
                        }
                        "undefined" != typeof localStorage && localStorage.setItem("bbc-notifications-u13-pending-policy", !0)
                    })
                })
            }.call(this, e(64))
    }, function(t, n, e) {
        e(8).tag2("bbc-notifications-onboarding-u13-success", '<div class="notifications__container"> <div class="notifications-banner--row"> <span><i1-8n>copy.under13.done</i1-8n></span> <button class="notifications-banner--close" onclick="{parent.hideU13Success}"> <img riot-src="{this.basePath + \'/svg/close_icon.svg\'}" alt="Close"> </button> </div> </div>', "", "", function(t) {
            this.basePath = t.mainApp.basePath
        })
    }, function(t, n, e) {
        e(8).tag2("bbc-notifications-error-banner", '<section class="notification-error__container"> <div if="{opts.type == \'settings\'}" class="notifications-error--inner show" id="settings-error-inner"> <p class=" notifications-error--inner__body notifications-10/12"><i1-8n>copy.error.settingsUpdate</i1-8n></p> </p> <div class="notifications-error--inner__container"> <div aria-label="Close notification error message" class="notifications-error--inner__close" aria-action="close" onclick="{this.closeInner}">&nbsp;</div> </div> </div> </section>', "", "", function(t) {
            var n = this;
            this.closeInner = function() {
                n.parent.parent.error.inner = null, n.parent.parent.update()
            }
        })
    }, function(t, n, e) {
        e(8).tag2("bbc-notifications-error-view", '<section class="notification-error__container"> <div if="{opts.type == \'hub\'}" class="notifications-error show" id="hub-error-main"> <div class="notifications-error__header"> <p class="notifications-error__header--text"><i1-8n>copy.error.somethingWentWrong</i1-8n></p> </div> <p class="notifications-pica notifications-error__body"><i1-8n>copy.error.hubDisplay</i1-8n></p> </div> <div if="{opts.type == \'settings\'}" class="notifications-error show" id="settings-error-main"> <div class="notifications-error__header"> <p class="notifications-error__header--text"><i1-8n>copy.error.somethingWentWrong</i1-8n></p> </div> <p class="notifications-pica notifications-error__body"><i1-8n>copy.error.settingsDisplay</i1-8n></p> <div class="notifications-error__back" aria-action="close"> <div class="notifications-error__back__arrow"> </div> <div class="notifications-error__back__text"><i1-8n>Back</i1-8n> </div> </div> </div> <div if="{opts.type == \'onboarding\'}" class="notifications-error show" id="onboarding-error-main"> <div class="notifications-error__header"> <p class="notifications-error__header--text"><i1-8n>copy.error.somethingWentWrong</i1-8n></p> </div> <p class="notifications-pica notifications-error__body"><i1-8n>copy.error.onboarding</i1-8n></p> </div> </section>', "", "", function(t) {})
    }, function(t, n, e) {
        e(8).tag2("bbc-notifications-idcta-html", "<span></span>", "", "", function(t) {
            var n = this,
                e = [];
            this.on("mount", function() {
                n.root.innerHTML = t.html, t.htmlJs && function(t) {
                    var n = decodeURI(t);
                    if (!e.includes(n)) {
                        var i = document.getElementsByTagName("head")[0] || document.documentElement,
                            r = document.createElement("script");
                        r.type = "text/javascript", r.appendChild(document.createTextNode(n)), i.insertBefore(r, i.firstChild), i.removeChild(r), e.push(n)
                    }
                }(t.htmlJs)
            })
        })
    }, function(t, n, e) {
        e(8).tag2("bbc-notifications-signed-in-view", '<bbc-notifications-onboarding-async if="{opts.state.onboarded === false && opts.loadOnboarding}" main-app="{opts.mainApp}" component-app="{opts.componentApp}" state="{opts.state}"></bbc-notifications-onboarding-async> <bbc-notifications-onboarding-u13 if="{opts.state.onboarded === true && opts.state.policyIssue}" main-app="{opts.mainApp}" state="{opts.state}"></bbc-notifications-onboarding-u13> <bbc-notifications-onboarded-view if="{opts.state.onboarded === true && !opts.state.policyIssue}" main-app="{opts.mainApp}" component-app="{opts.componentApp}" state="{opts.state}" notifications="{opts.notifications}" reached-end="{opts.reachedEnd}" loading-more="{opts.loadingMore}" view="{opts.view}"></bbc-notifications-onboarded-view>', "", "", function(t) {})
    }, function(t, n, e) {
        e(8).tag2("bbc-notifications-signed-out-view", '<div class="notifications-main notifications-main--css notifications-main--js notification-signed-out"> <div class="notifications-wide-spread"> <div class="notifications__container"> <div class="notifications-top-header"> <p class="notifications-main-header notifications-trafalgar"><i1-8n>copy.upsell.title</i1-8n></p> <p class="notifications-description notifications-pica"><i1-8n>copy.upsell.body</i1-8n></p> </div> <div class="notifications-cta notifications-cta--upsell"> <bbc-notifications-idcta-html html="{opts.state.idctaResponse.html}" html-js="{opts.state.idctaResponse.htmlJs}"></bbc-notifications-idcta-html> </div> </div> </div> </div>', "", "", function(t) {})
    }, function(t, n, e) {
        (function(t) {
            e(8).tag2("bbc-notifications-onboarded-view", '<bbc-notifications-onboarding-u13-success if="{this.showU13Success}" main-app="{opts.mainApp}" component-app="{opts.componentApp}" state="{opts.state}"></bbc-notifications-onboarding-u13-success> <div class="notifications-main notifications__container notifications-{this.view} notifications-{this.view}--js notifications-main--css notification-signed-in"> <bbc-notifications-home-view if="{this.view === \'home\'}" main-app="{opts.mainApp}" component-app="{opts.componentApp}" notifications="{opts.notifications}" reached-end="{opts.reachedEnd}" loading-more="{opts.loadingMore}"></bbc-notifications-home-view> <bbc-notifications-settings-view if="{this.view === \'settings\'}" main-app="{opts.mainApp}" component-app="{opts.componentApp}"></bbc-notifications-settings-view> </div>', "", "", function(n) {
                var i = this;

                function r(n, e, i, r, o, a, s) {
                    try {
                        var c = n[a](s),
                            u = c.value
                    } catch (t) {
                        return void i(t)
                    }
                    c.done ? e(u) : t.resolve(u).then(r, o)
                }

                function o(n) {
                    return function() {
                        var e = this,
                            i = arguments;
                        return new t(function(t, o) {
                            var a = n.apply(e, i);

                            function s(n) {
                                r(a, t, o, s, c, "next", n)
                            }

                            function c(n) {
                                r(a, t, o, s, c, "throw", n)
                            }
                            s(void 0)
                        })
                    }
                }
                var a = e(93);
                this.view = n.view, this.on("mount", function() {
                    "undefined" != typeof localStorage && n.state.signedIn && localStorage.getItem("bbc-notifications-u13-pending-policy") && (i.update({
                        showU13Success: !0
                    }), localStorage.removeItem("bbc-notifications-u13-pending-policy"))
                }), this.hideU13Success = function() {
                    i.update({
                        showU13Success: !1
                    })
                }, this.openSettings = function() {
                    return a.log("Settings", {
                        STA: "open"
                    }), i.update({
                        view: "settings"
                    }), !1
                }, this.closeSettings = function() {
                    return a.log("Settings", {
                        STA: "close"
                    }), i.update({
                        view: "home"
                    }), !1
                }, this.on("updated", o(regeneratorRuntime.mark(function e() {
                    var i;
                    return regeneratorRuntime.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = function(n) {
                                    return new t(function(t) {
                                        return setTimeout(t, n)
                                    })
                                }, e.next = 3, i(1);
                            case 3:
                                n.mainApp.updateDrawerHeight();
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }, e, this)
                })))
            })
        }).call(this, e(29))
    }, function(t, n, e) {
        e(8).tag2("bbc-notifications-home-view", '<header class="notifications__header notifications__header--js {\'shadowAdded\': shadowAdded}"> <h2 class="notification-title"><i1-8n>Notifications</i1-8n></h2> <ul class="notification-header-icons"> <li><a href="javascript:;" class="notifications__settings--js" onkeydown="{this.onSettingsKeydown}" onclick="{parent.openSettings}"><img class="setting-icon notifications-image" riot-src="{this.basePath + \'/svg/setting.svg\'}" alt="Settings"><span class="notifications-brevier"><i1-8n>Settings</i1-8n></span></a></li> </ul> </header> <div class="notification-panel" style="display: block;"> <bbc-notifications-list if="{opts.notifications.length}" main-app="{opts.mainApp}" component-app="{opts.componentApp}" notifications="{opts.notifications}" reached-end="{opts.reachedEnd}" loading-more="{opts.loadingMore}"></bbc-notifications-list> <div if="{!opts.notifications.length}" id="no-notifications" class="no-notifications"> <div class="noVariant--element"> <p class="notifications-long-primer"><i1-8n>copy.noNotifications1</i1-8n></p> <p class="notifications-long-primer"><i1-8n>copy.noNotifications2</i1-8n></p> </div> </div> </div>', "", "", function(t) {
            var n = this;
            this.basePath = t.mainApp.basePath, this.onSettingsKeydown = function(t) {
                if (9 === t.keyCode && t.shiftKey) {
                    var e = document.querySelector(".notifications-keyboard-access--close");
                    if (e) return e.focus(), !1;
                    var i = document.querySelector(".notification-items .notification-item:last-child a");
                    if (i) return i.focus(), !1
                } else 13 === t.keyCode ? n.updateFocus = ".notifications__settings__back-btn--js" : 9 !== t.keyCode || t.shiftKey || document.querySelectorAll("bbc-notifications-list .notification-item").length || n.update({
                    showKeyboardAccess: !0
                });
                return !0
            }
        })
    }, function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e(6);
        e(8).tag2("bbc-notifications", '<bbc-notifications-bell main-app="{opts.mainApp}" state="{this.state}" alert="{this.alert}"></bbc-notifications-bell> <bbc-notifications-drawer main-app="{opts.mainApp}" component-app="{this}" state="{this.state}" notifications="{this.notifications}" reached-end="{this.reachedEnd}" loading-more="{this.loadingMore}" error="{this.error}" orb="{opts.orb}" load-onboarding="{this.loadOnboarding}" view="{this.view}"></bbc-notifications-drawer>', "", "", function(t) {
            var n = this,
                r = e(32),
                o = e(93),
                a = e(322).NotificationsModel,
                s = new(0, e(94).UserState);
            this.alert = !1, this.notifications = [], this.reachedEnd = !1, this.loadingMore = !1, this.error = {}, this.loadOnboarding = !1, this.view = "home", this.loadState = function() {
                return s.load().then(function(t) {
                    n.update({
                        state: t
                    }), !0 === t.signedIn && (!1 === t.onboarded || !0 === t.onboarded && t.policyIssue ? n.update({
                        alert: !0
                    }) : !0 !== t.onboarded || t.policyIssue || i.default.fetch(!1).then(function() {
                        return n.initModel()
                    })), n.update()
                }).catch(function(t) {
                    n.setError("main", "hub")
                }).then(function() {
                    n.trigger("stateLoaded")
                })
            }, this.on("mount", this.loadState), this.on("notificationsUserOnboardedOutsideDrawer", function() {
                this.loadState()
            }), this.initModel = function() {
                n.notificationsModel || (n.notificationsModel = new a, n.fetchNotifications(), window.setInterval(n.fetchNotifications, r.env.notificationsPollingInterval), window.setInterval(n.fetchPreferences, r.env.preferencesPollingInterval))
            }, this.fetchNotifications = function(e) {
                e && n.update({
                    loadingMore: !0
                });
                var i = n.notifications.length;
                return n.notificationsModel.fetch(e).catch(function(t) {
                    throw n.setError("main", "hub"), t
                }).then(function(e) {
                    if (e) {
                        var r = e.notifications,
                            a = e.reachedEnd;
                        n.notifications = r, a && (n.reachedEnd = a), n.loadingMore = !1;
                        var s = !1;
                        r.forEach(function(t) {
                            "new" === t.status && (s = !0)
                        }), s && (o.logNewNotifications(n.notifications, t.mainApp.getDrawerState()), r.length > i && (n.alert = !0)), n.removeError("main"), n.update(), n.trigger("fetchedNotifications")
                    }
                })
            }, this.fetchPreferences = function() {
                i.default.fetch().catch(function(t) {
                    throw n.setError("main", "hub"), t
                }).then(function() {
                    n.removeError("main")
                })
            }, this.setError = function(t, e) {
                n.error[t] = e, n.update()
            }, this.removeError = function(t) {
                delete n.error[t], n.update()
            }, this.resetNotifications = function() {
                n.update({
                    notifications: [],
                    reachedEnd: !1
                }), n.notificationsModel.reset(), n.fetchNotifications()
            }, this.drawerStateChangedCallback = function(e) {
                if (n.update({
                        alert: !1
                    }), o.log("Bell", {
                        STA: "hidden" === e ? "close" : "open",
                        ONB: !!n.state.onboarded,
                        SIG: n.state.signedIn
                    }), "hidden" === e) {
                    if (n.notificationsModel) {
                        var r = n.notificationsModel.markAllAsSeen();
                        n.update({
                            notifications: r
                        })
                    }
                } else n.update({
                    view: "home"
                }), n.state && (!1 === n.state.signedIn || (n.state.onboarded ? (i.default.updateRead(!0), o.logNewNotifications(n.notifications, t.mainApp.getDrawerState())) : 0 === Object.keys(n.error).length && n.update({
                    loadOnboarding: !0
                })));
                n.trigger("drawerStateChanged", e), n.update()
            }, this.on("updated", function() {
                t.mainApp.updateWrapperMaxHeight()
            }), this.on("drawerStateChanged", function(t) {
                "hidden" === t ? document.querySelectorAll(".notifications__container").forEach(function(t) {
                    t.style.display = "none"
                }) : document.querySelectorAll(".notifications__container").forEach(function(t) {
                    t.style.display = "block"
                })
            })
        })
    }, function(t, n, e) {
        e(8).tag2("i1-8n", '<span ref="localised" name="localised"></span> <span ref="original" name="original" class="original"><yield></yield></span>', 'i1-8n,[data-is="i1-8n"]{ display: inline-block; } i1-8n .original,[data-is="i1-8n"] .original{ display: none; }', "", function(t) {
            this.mixin("i18n"), this.i18n.on("update", function() {
                this.update()
            }.bind(this)), this.on("mount", function() {
                this.hasRefs = null != this.refs, this.localise()
            }), this.on("update", function() {
                this.localise()
            }), this.localise = function() {
                var t = this.hasRefs ? this.refs : this;
                t.localised.innerHTML = this.i18n.localise(t.original.innerHTML)
            }
        })
    }, function(t, n) {
        t.exports = {
            "en-GB": {
                copy: {
                    noNotifications1: "No notifications right now. We'll let you know when something from your favourite programmes, artists and playlists is available for you.",
                    noNotifications2: "If your notifications are turned off, you can always turn them back on. Just go to settings.",
                    settings: "You can turn on and off any notifications you receive from iPlayer and Music. Turning notifications off will clear any you already have.",
                    upsell: {
                        title: "Never miss <br /> your favourites",
                        body: "Get notifications about your favourite programmes, music and more."
                    },
                    onboardingInfo1: "This is the place to get notifications about your favourite programmes, music, radio and more.",
                    onboardingInfo2: "We'll give you notifications about anything already in your favourites, and anything new you add. You can manage your notifications any time in Settings.",
                    onboardingInfo3: "Notifications are based on things you&#146;ve added…",
                    onboardingInfo4: "… like TV and radio programmes, music artists and playlists.",
                    ok: "OK, I'm in",
                    showMeMore: "Show me more",
                    error: {
                        somethingWentWrong: "Sorry, something has gone wrong.",
                        hubDisplay: "There's been an error and your notifications <br />can't be displayed at the moment. Please try again later.",
                        hubUpdate: "Sorry, something has gone wrong.<br/>&nbsp;Your notifications could not be updated. Please try again later.",
                        settingsDisplay: "There's been an error and your notifications settings <br />cannot be retrieved. Please try again later.",
                        settingsUpdate: "Sorry, something has gone wrong.<br/>&nbsp;Your settings could not be updated. Please try again later.",
                        onboarding: "There's been an error and we are unable to get you <br /> started with notifications. Please try again later."
                    },
                    under13: {
                        moreInfo: "Find out more about child permissions",
                        parentId: {
                            title: "Want to hear about new stuff first?",
                            body: "You need permission from a parent or guardian to get notifications.",
                            button: "Ask for permission."
                        },
                        linkPending: {
                            title: "You need permission from a parent or guardian to use notifications",
                            body: "We've sent them an email that tells them what to do. Ask them to check their inbox and follow the steps. To send a new email, visit your BBC account settings."
                        },
                        permissionNotifications: {
                            title: "You need permission from a parent or guardian to use notifications",
                            body: "They can give permission by visiting the Child Permissions section in their BBC account settings."
                        },
                        done: "All done! You can now use your notifications."
                    }
                }
            },
            "cy-GB": {
                Notifications: "Hysbysiadau",
                "Notifications Settings": "Gosodiadau'r Hysbysiadau",
                Settings: "Gosodiadau",
                "Here's a notification about a new clip from BBC Music.": "Dyma hysbysiad am glip newydd gan BBC Music.",
                "Here's a notification about a new episode in iPlayer.": "Dyma hysbysiad am bennod newydd yn iPlayer.",
                Back: "Nôl",
                "day ago": "dydd yn ôl",
                "days ago": "o ddyddiau yn ôl",
                "hour ago": "awr yn ôl",
                "hours ago": "awr yn ôl",
                "minute ago": "munud yn ôl",
                "minutes ago": "o funudau yn ôl",
                Yesterday: "Ddoe",
                "10 minutes ago": "10 munud yn ôl",
                "Just now": "Eiliad yn ôl",
                "{product} Notifications": "Gosodiadau {product}",
                "Sign in": "Mewngofnodi",
                or: "neu",
                Register: "Gofrestru",
                "Notifications are based on things you've added…": "Mae hysbysiadau wedi eu seilio ar bethau rydych chi wedi eu hychwanegu…",
                "… like TV and radio programmes, music artists and playlists.": "… fel rhaglenni teledu a radio, cerddoriaeth, artistiaid a rhestrau chwarae.",
                "You'll get notifications when there's something new…": "Byddwch yn cael eich hysbysu pan mae yna rywbeth newydd…",
                "… like an interview with a music artist you've added. Or an episode of a show you've added on iPlayer.": "… fel cyfweliad ag artist rydych chi wedi ei ychwanegu. Neu bennod o sioe rydych chi wedi ei ychwanegu ar iPlayer.",
                "You're in charge": "Yn eich dwylo chi",
                "Visit your Settings any time to manage your notifications.": "Ewch i'ch Gosodiadau unrhyw bryd i reoli eich hysbysiadau.",
                "Load More": "Llwytho mwy",
                Close: "Cau",
                "Go to Next slide": "Mynd i'r sleid nesaf",
                "Go to Previous slide": "Mynd i'r sleid flaenorol",
                "Go to slide 1": "Mynd i sleid 1",
                "Go to slide 2": "Mynd i sleid 2",
                "Go to slide 3": "Mynd i sleid 3",
                copy: {
                    noNotifications1: "Dim hysbysiadau ar hyn o bryd. Byddwn ni'n gadael i chi wybod pan mae rhywbeth gan eich hoff raglenni, artistiaid a rhestrau chwarae ar gael i chi.",
                    noNotifications2: "Os ydy'ch hysbysiadau wedi eu diffodd, gallwch eu troi nôl ymlaen. Ewch i'r gosodiadau.",
                    settings: "Gallwch droi hysbysiadau iPlayer a Music ymlaen neu eu diffodd. Bydd diffodd yr hysbysiadau yn cael gwared ar y rhai rydych chi wedi eu cael yn barod.",
                    upsell: {
                        title: "Peidiwch â methu eich ffefrynnau",
                        body: "Hysbysiadau am eich hoff rhaglenni, cerddoriaeth a mwy."
                    },
                    onboardingInfo1: "Dyma'r lle i gael hysbysiadau am eich hoff raglenni, cerddoriaeth, radio a mwy. ",
                    onboardingInfo2: "Byddwn yn eich hysbysu am unrhywbeth sydd yn eich ffefrynnau yn barod, ac unrhywbeth rydych chi'n ei ychwanegu. Gallwch reoli eich hysbysiadau unrhyw bryd yn y Gosodiadau.",
                    onboardingInfo3: "Mae hysbysiadau wedi eu seilio ar bethau rydych chi wedi eu hychwanegu…",
                    onboardingInfo4: "… fel rhaglenni teledu a radio, cerddoriaeth, artistiaid a rhestrau chwarae.",
                    ok: "Iawn",
                    showMeMore: "Dangos mwy",
                    error: {
                        somethingWentWrong: "Mae rhywbeth wedi mynd o'i le.",
                        hubDisplay: "'Dyw hi ddim yn bosib dangos eich hysbysiadau ar hyn o bryd. Triwch eto nes ymlaen.",
                        hubUpdate: "'Dyw eich hysbysiadau ddim yn gallu cael eu diweddaru. Triwch eto nes ymlaen.",
                        settingsDisplay: "Mae yna broblem gyda'r gosodiadau ar hyn o bryd. Triwch eto nes ymlaen.",
                        settingsUpdate: "'Dyw hi ddim yn bosib diweddaru eich gosodiadau. Triwch eto nes ymlaen.",
                        onboarding: "'Dyw hi ddim yn bosib dechrau arni ar hyn o bryd. Triwch eto nes ymlaen."
                    },
                    under13: {
                        moreInfo: "Dysgu mwy am ganiatâd i blant",
                        parentId: {
                            title: "Eisiau clywed am bethau newydd gyntaf?",
                            body: "Rwyt ti angen caniatâd gan riant neu warchodwr i gael hysbysiadau.",
                            button: "Gofynna am ganiatâd."
                        },
                        linkPending: {
                            title: "Rwyt ti angen caniatâd rhiant neu warchodwr i ddefnyddio hysbysiadau",
                            body: "Rydyn ni wedi anfon e-bost atyn nhw sy’n egluro beth i’w wneud. Maen nhw angen edrych yn eu mewnflwch a dilyn y cyfarwyddiadau. Er mwyn cael e-bost newydd, cer i osodiadau dy gyfrif BBC."
                        },
                        permissionNotifications: {
                            title: "Rwyt ti angen caniatâd rhiant neu warchodwr i ddefnyddio hysbysiadau",
                            body: "Gallan nhw roi caniatâd drwy fynd i adran Caniatâd i Blant yng ngosodiadau eu cyfrif BBC."
                        },
                        done: "Barod! Nawr galli di ddefnyddio dy hysbysiadau."
                    }
                }
            },
            "gd-GB": {
                Notifications: "Fiosan",
                "Notifications Settings": "Seataidhean Fiosa",
                Settings: "Seataidhean",
                "Here's a notification about a new clip from BBC Music.": "Seo fios mu chriomag ùr bho BBC Music.",
                "Here's a notification about a new episode in iPlayer.": "Seo fios mu phrògram ùr ann an iPlayer.",
                Back: "Air ais",
                "day ago": "latha air ais",
                "days ago": "làithean air ais",
                "hour ago": "uair air ais",
                "hours ago": "uairean air ais",
                "minute ago": "mhionaid air ais",
                "minutes ago": "mionaidean air ais",
                Yesterday: "An-dè",
                "10 minutes ago": "10 mionaidean air ais",
                "Just now": "An-dràsta",
                "{product} Notifications": "Fiosan {product}",
                "Sign in": "Log a-steach",
                or: "no",
                Register: "Clàraich",
                "Notifications are based on things you've added…": "Tha fiosan stèidhichte air rudan a chur thu ris...",
                "… like TV and radio programmes, music artists and playlists.": "… mar phrògraman Tbh agus rèidio, luchd ciùil agus clàran-ciùil.",
                "You'll get notifications when there's something new…": "Gheibh thu fiosan nuair a tha rudan ùra ann…",
                "… like an interview with a music artist you've added. Or an episode of a show you've added on iPlayer.": "… mar agallamh le luchd ciùil a chur thu ris. No prògram a chur thu ris ann an iPlayer.",
                "You're in charge": "'S tusa a tha os cionn chùisean!",
                "Visit your Settings any time to manage your notifications.": "Thèid gu Seataidhean airson rian a chumail air d' fhiosan",
                "Load More": "Faic tuilleadh",
                Close: "Dùin",
                "Go to Next slide": "An ath slaighd",
                "Go to Previous slide": "An slaighd roimhe",
                "Go to slide 1": "Rach gu slaighd 1",
                "Go to slide 2": "Rach gu slaighd 2",
                "Go to slide 3": "Rach gu slaighd 3",
                copy: {
                    noNotifications1: "Chan eil fiosan ann an-dràsta. Leigidh sinn fios nuair a bhios rudeigin ann bho na prògraman, luchd ciùil is clàran-ciùil as fheàrr leat.",
                    noNotifications2: "Ma tha d’ fhiosan air an cur dheth, faodaidh tu an cur air a-rithist le bhith dol gu seataidhean.",
                    settings: "Faodar brathan a tha thu a' faighinn bho iPlayer agus Music a chur air is dheth. Thèid an fheadhainn a th' agad mar-thà a dhubhadh às le bhith gan cuir dheth.",
                    upsell: {
                        title: "Na caill na rudan as fheàrr leat",
                        body: "Faigh fiosan mu na prògraman 's an ceòl as fheàrr leat agus gu leòr eile."
                    },
                    onboardingInfo1: "Seo far am faighear fiosan mu na prògraman 's an ceòl as fheàrr leat agus gu leòr eile.",
                    onboardingInfo2: "Cuiridh sinn fiosan thugad mu na rudan a tha nad roghainnean agus rud sam bith eile a chuireas tu ris. Faodaidh tu rian a chumail air iad seo ann an Seataidhean.",
                    onboardingInfo3: "Tha fiosan stèidhichte air rudan a chur thu ris...",
                    onboardingInfo4: "… mar phrògraman Tbh agus rèidio, luchd ciùil agus clàran-ciùil.",
                    ok: "Ceart",
                    showMeMore: "Seall tuilleadh",
                    error: {
                        somethingWentWrong: "Duilich, tha rudeigin air a dhol ceàrr.",
                        hubDisplay: "Chaidh rudeigin ceàrr is chan urrainnear d’ fhiosan a shealltainn an-dràsta. Feuch a-rithist.",
                        hubUpdate: "Duilich, tha rudeigin air a dhol ceàrr. Cha b’ urrainnear d' fhiosan ùrachadh. Feuch a-rithist.",
                        settingsDisplay: "Chaidh rudeigin ceàrr is chan fhaighear do sheataidhean fiosa. Feuch a-rithist.",
                        settingsUpdate: "Duilich, tha rudeigin air a dhol ceàrr. Cha b’ urrainnear do sheataidhean ùrachadh. Feuch a-rithist.",
                        onboarding: "Chaidh rudeigin ceàrr is chan fhaigh sinn air d’ fhiosan a chur an sàs. Feuch a-rithist."
                    },
                    under13: {
                        moreInfo: "Faigh a-mach tuilleadh mu cheadan cloinne",
                        parentId: {
                            title: "Airson cluinntinn mu rudan ùra an toiseach?",
                            body: "Feumaidh tu cead bho phàrant no bho neach-cùraim airson brathan fhaighinn.",
                            button: "Iarr cead."
                        },
                        linkPending: {
                            title: "Feumar cead fhaighinn bho phàrant no neach-cùraim airson fiosan a chleachdadh",
                            body: "Tha sinn air post-d a chur thuca le stiùireadh. Iarr orra sùil a thoirt air na puist-d aca agus na ceumannan a' leantainn. Tadhal air seataidhean cunntais a' BhBC airson post-d a chur air falbh."
                        },
                        permissionNotifications: {
                            title: "Feumar cead fhaighinn bho phàrant no neach-cùraim airson fiosan a chleachdadh",
                            body: "Faodaidh iadsan cead a thoirt le bhith tadhal air Ceadan Chloinne ann an seataidhean cunntais a' BhBC."
                        },
                        done: "Dèanta! Faodaidh tu na fiosan agad a chleachdadh."
                    }
                }
            },
            "ga-GB": {
                Notifications: "Fógraí",
                "Notifications Settings": "Socruithe na bhFógraí",
                Settings: "Socruithe",
                "Here's a notification about a new clip from BBC Music.": "Seo fógra faoi ghearrthóg úr ó BBC Music.",
                "Here's a notification about a new episode in iPlayer.": "Seo fógra faoi eagrán úr ar iPlayer.",
                Back: "Siar",
                "day ago": "lá ó shin",
                "days ago": "lá ó shin",
                "hour ago": "uair ó shin",
                "hours ago": "uair ó shin",
                "minute ago": "nóiméad ó shin",
                "minutes ago": "nóiméad ó shin",
                Yesterday: "Inné",
                "10 minutes ago": "10 mbomaite ó shin",
                "Just now": "Díreach ansin",
                "{product} Notifications": "Fógraí {product}",
                "Sign in": "Sínigh isteach",
                or: "nó",
                Register: "Cláraigh",
                "Notifications are based on things you've added…": "Tá fógraí bunaithe ar rudaí a chuir tú leis…",
                "… like TV and radio programmes, music artists and playlists.": "… mar shampla, cláir TV, raidió, ceoltóirí agus seinnliostaí.",
                "You'll get notifications when there's something new…": "Gheobhaidh tú fógraí nuair atá rudaí úra ann.",
                "… like an interview with a music artist you've added. Or an episode of a show you've added on iPlayer.": "… ar nós agallaimh le ceoltóir a chuir tú leis, nó eagrán de chlár a chuir tú le iPlayer.",
                "You're in charge": "Tá tú i gceannas!",
                "Visit your Settings any time to manage your notifications.": "Tabhair cuairt ar do chuid Socruithe le go dtig leat smacht a choinneáil orthu.",
                "Load More": "Lódáil tuilleadh",
                Close: "Druid",
                "Go to Next slide": "Téigh go céad sleamhnán eile",
                "Go to Previous slide": "Téigh go sleamhnán roimhe",
                "Go to slide 1": "Téigh go sleamhnán 1",
                "Go to slide 2": "Téigh go sleamhnán 2",
                "Go to slide 3": "Téigh go sleamhnán 3",
                copy: {
                    noNotifications1: "Níl fógraí ann faoi láthair. Beidh muid i dteagmháil leat má bhíonn rud éigin ar fáil a bhaineann leis na cláir, na ceoltóirí nó na seinnliostaí is ansa leat.",
                    noNotifications2: "Má tá do chuid fógraí múchta, thig leat iad a chur air arís. Téigh go socruithe.",
                    settings: "Thig leat fógraí ó iPlayer agus Music a chur air nó as. Glanfaidh tú na fógraí atá agat cheana féin má mhúchann tú iad.",
                    upsell: {
                        title: "Ná caill do chianáin riamh",
                        body: "Aimsigh fógraí faoi do chianáin, do cheol agus níos mó."
                    },
                    onboardingInfo1: "Is anseo a dtig leat fógraí a aimsiú faoi na cláir, faoin cheol, faoin raidió is ansa leat agus níos mó.",
                    onboardingInfo2: "Cuirfidh muid fógraí ar fáil duit faoi rud ar bith atá i do chianáin cheana féin agus faoi rud ar bith úr a chuireann tú leo. Thig leat smacht a bheith agat ar do chuid fógraí am ar bith in Socruithe.",
                    onboardingInfo3: "Tá fógraí bunaithe ar rudaí a chuir tú leis…",
                    onboardingInfo4: "… mar shampla, cláir TV, raidió, ceoltóirí agus seinnliostaí.",
                    ok: "Ceart go leor",
                    showMeMore: "Taispeáin a thuilleadh",
                    error: {
                        somethingWentWrong: "Tá brón orainn, tá rud éigin cearr.",
                        hubDisplay: "Tá rud éigin cearr agus ní féidir do chuid fógraí a fheiceáil faoi láthair. Triail arís níos moille, le do thoil.",
                        hubUpdate: "Tá brón orainn, tá rud éigin cearr. Ní féidir do chuid fógraí a uasdátú. Triail arís níos moille, le do thoil.",
                        settingsDisplay: "Tá fadhb le socruithe na bhfógraí s'agat agus níl fáil orthu. Triail arís níos moille, le do thoil.",
                        settingsUpdate: "Tá brón orainn, tá rud éigin cearr. Ní féidir do chuid fógraí a uasdátú. Triail arís níos moille, le do thoil.",
                        onboarding: "Tá fadhb éigin ann agus ní féidir do chuid fógraí a chur sa tsiúl. Triail arís níos moille, le do thoil."
                    },
                    under13: {
                        moreInfo: "Tuilleadh eolais ar cheadanna páistí",
                        parentId: {
                            title: "Ar mhaith leat bheith ar an eolas faoin stuif úr ar dtús?",
                            body: "Beidh cead do thuismitheora nó do chaomhnóra de dhíth ort más mian leat fógraí a fháil.",
                            button: "Iarr cead."
                        },
                        linkPending: {
                            title: "Tá cead tuismitheora nó caomhnóra de dhíth ort le fógraí a úsáid",
                            body: "Sheol muid ríomhphost chucu a insíonn dóibh cad é atá le déanamh. Iarr orthu a mbosca isteach a sheiceáil agus na céimeanna a leanúint. Le ríomhphost úr a sheoladh, tabhair cuairt ar shocruithe do chuntais BBC."
                        },
                        permissionNotifications: {
                            title: "Tá cead tuismitheora nó caomhnóra de dhíth ort le fógraí a úsáid",
                            body: "Thig leo cead a thabhairt ach dul chuig Ceadanna Páistí i socruithe a c(h)untais BBC."
                        },
                        done: "Déanta! Thig leat d’fhógraí a úsáid anois."
                    }
                }
            }
        }
    }, function(t, n, e) {
        "use strict";

        function i(t) {
            var n = "; ".concat(document.cookie).split("; ".concat(t, "="));
            if (2 === n.length) return n.pop().split(";").shift()
        }

        function r(t, n) {
            var e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/",
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "1",
                r = new Date;
            r.setFullYear(r.getFullYear() + 1), document.cookie = encodeURIComponent(t) + "=" + i + "; expires=" + r.toGMTString() + (n ? "; domain=" + n : "") + (e ? "; path=" + e : "")
        }
        e.r(n), e.d(n, "get", function() {
            return i
        }), e.d(n, "set", function() {
            return r
        })
    }, function(t, n, e) {
        "use strict";
        e.r(n);
        var i = e(65);

        function r(t) {
            return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }

        function o(t, n) {
            for (var e = 0; e < n.length; e++) {
                var i = n[e];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }

        function a(t, n) {
            return !n || "object" !== r(n) && "function" != typeof n ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : n
        }

        function s(t, n, e) {
            return (s = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, n, e) {
                var i = function(t, n) {
                    for (; !Object.prototype.hasOwnProperty.call(t, n) && null !== (t = c(t)););
                    return t
                }(t, n);
                if (i) {
                    var r = Object.getOwnPropertyDescriptor(i, n);
                    return r.get ? r.get.call(e) : r.value
                }
            })(t, n, e || t)
        }

        function c(t) {
            return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function u(t, n) {
            return (u = Object.setPrototypeOf || function(t, n) {
                return t.__proto__ = n, t
            })(t, n)
        }
        var f = function(t) {
                function n() {
                    return function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, n), a(this, c(n).apply(this, arguments))
                }
                var e, r, f;
                return function(t, n) {
                    if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(n && n.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), n && u(t, n)
                }(n, i["a"]), e = n, (r = [{
                    key: "fetch",
                    value: function(t) {
                        var e = this,
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t ? this.NEXT_DISPLAY_PAGE : "latest.json",
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                        return s(c(n.prototype), "loadData", this).call(this, "aggregated", i).then(function(i) {
                            var o = i.list,
                                a = i.next,
                                u = i.reachedEnd;
                            if (!o) return {
                                data: [],
                                reachedEnd: u
                            };
                            a || (u = !0);
                            var f = r.concat(o),
                                l = s(c(n.prototype), "filterData", e).call(e, f),
                                d = s(c(n.prototype), "dedupeData", e).call(e, l);
                            return d.length >= e.MINIMUM_TO_DISPLAY || u ? ((!e.NEXT_DISPLAY_PAGE || t && !u && a) && (e.NEXT_DISPLAY_PAGE = a), {
                                data: d,
                                reachedEnd: u
                            }) : e.fetch(t, a, d)
                        })
                    }
                }]) && o(e.prototype, r), f && o(e, f), n
            }(),
            l = e(125),
            d = e(22),
            h = e(6);

        function p(t, n) {
            for (var e = 0; e < n.length; e++) {
                var i = n[e];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
            }
        }
        e.d(n, "NotificationsModel", function() {
            return y
        });
        var v = e(124),
            g = e(32).env.feedTopicMaxSubscriptions,
            y = function() {
                function t() {
                    ! function(t, n) {
                        if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var n = h.default.countActiveSubscriptions();
                    this.notifications = [], this.modelInterface = n > g ? new f : new l.a;
                    var e = h.default.get();
                    if (e.preferences) this.lastRead = new Date(e.preferences.lastRead), d.a.override(e.preferences.readFilter);
                    else {
                        var i = new Date;
                        i.setDate(i.getDate() - 5), this.lastRead = i
                    }
                }
                var n, e, i;
                return n = t, (e = [{
                    key: "populateReadStatus",
                    value: function(t) {
                        var n = this;
                        return t.forEach(function(t) {
                            d.a.contains(t.id) ? t.status = null : new Date(n.lastRead) < new Date(t.creationTimestamp) ? t.status = "new" : t.status = "unread"
                        }), t
                    }
                }, {
                    key: "markRead",
                    value: function(t) {
                        return d.a.checkOrAdd(t.id), h.default.updateRead(), h.default.sendClick(t), t.status = null, h.default.updateRead()
                    }
                }, {
                    key: "markAllAsSeen",
                    value: function() {
                        return this.notifications.forEach(function(t) {
                            "new" === t.status && (t.status = "unread")
                        }), this.notifications
                    }
                }, {
                    key: "reset",
                    value: function() {
                        return this.notifications = [], this.fetch()
                    }
                }, {
                    key: "fetch",
                    value: function() {
                        var t = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return this.modelInterface.fetch(n).then(function(e) {
                            var i = e.data,
                                r = e.reachedEnd;
                            i.sort(function(t, n) {
                                return new Date(t.creationTimestamp) >= new Date(n.creationTimestamp) ? 1 : -1
                            });
                            var o = t.populateReadStatus(i);
                            return (n ? o.reverse() : o).forEach(function(e) {
                                v(t.notifications, function(t) {
                                    return t.id === e.id
                                }) || t.notifications[n ? "push" : "unshift"](e)
                            }), {
                                notifications: t.notifications,
                                reachedEnd: r
                            }
                        })
                    }
                }]) && p(n.prototype, e), i && p(n, i), t
            }()
    }])
});