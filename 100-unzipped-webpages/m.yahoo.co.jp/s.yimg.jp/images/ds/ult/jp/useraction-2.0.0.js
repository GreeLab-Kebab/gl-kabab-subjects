! function(t) {
    var e = {};

    function n(i) {
        if (e[i]) return e[i].exports;
        var o = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 7)
}([function(t, e, n) {
    "use strict";
    var i = n(5);
    t.exports = {
        is: function(t, e) {
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return null != e && n === t
        },
        isObject: function(t) {
            return this.is("Object", t)
        },
        isArray: function(t) {
            return this.is("Array", t)
        },
        isString: function(t) {
            return this.is("String", t)
        },
        isNumber: function(t) {
            return this.is("Number", t)
        },
        isBoolean: function(t) {
            return this.is("Boolean", t)
        },
        isPrimitive: function(t) {
            return this.isNumber(t) || this.isString(t) || this.isBoolean(t)
        },
        isFunction: function(t) {
            return this.is("Function", t)
        },
        isNull: function(t) {
            return null === t
        },
        isNaN: function(t) {
            return t != t
        },
        findKey: function(t, e) {
            return this.is("Object", t) && t.hasOwnProperty(e)
        },
        isUndef: function(t) {
            return void 0 === t
        },
        isDOMElement: function(t) {
            return Object.prototype.toString.call(t).slice(8, -1).match(/^HTML.*Element$/)
        },
        isDivElement: function(t) {
            return this.is("HTMLDivElement", t)
        },
        getContentEnv: function(t, e, n, o) {
            var r, a, s = {};
            e = this.isString(e) ? e : "data-ual";
            var u = t.getAttribute(e);
            if (this.isString(u))
                for (var l = u.split(n), f = l.length, c = 0; c < f; c++) {
                    var d = l[c].split(o);
                    d.length > 1 && (r = d[0], this.isString(i[r]) && (r = i[r]), d.shift(), (a = d.join(o)).length > 300 && (a = a.substr(0, 300)), s[r] = a)
                }
            return s
        },
        setContentEnv: function(t, e, n, i, o) {
            var r = "";
            Object.keys(n).forEach(function(t) {
                r += t + o + n[t] + i
            }), t.setAttribute(e, r)
        },
        merge: function() {
            var t = {},
                e = arguments.length;

            function n(e) {
                t[e] = this[e]
            }
            for (var i = 0; i < e; i++) Object.keys(arguments[i]).forEach(n, arguments[i]);
            return t
        },
        mergeOverwrite: function() {
            var t = arguments[0],
                e = arguments.length;

            function n(e) {
                t[e] = this[e]
            }
            for (var i = 1; i < e; i++) Object.keys(arguments[i]).forEach(n, arguments[i]);
            return t
        },
        getTime: function() {
            return (new Date).getTime()
        },
        getHundredArray: function() {
            for (var t = new Array(100), e = 0; e < 100; e++) t[e] = 0;
            return t
        },
        getOs: function(t) {
            var e = t.navigator.userAgent;
            return e.match(/windows\sphone/i) ? "windowsphone" : e.match(/windows/i) ? "windows" : e.match(/iphone|ipad/i) ? "ios" : e.match(/mac|ppc/i) ? "mac" : e.match(/android/i) ? "android" : "other"
        },
        hasClass: function(t, e) {
            return -1 !== (" " + t.className + " ").replace(/[\n\t]/g, " ").indexOf(" " + e + " ")
        },
        getXPath: function(t) {
            if (9 === t.nodeType) return "";
            if (t.hasAttribute("id")) return 'id("' + t.getAttribute("id") + '")';
            for (var e, n = t.parentNode, i = this.getXPath(n) + "/" + t.tagName.toLowerCase(), o = n.childNodes, r = 0, a = 0, s = o.length; a < s; ++a) o[a].nodeName === t.nodeName && o[a].nodeType === t.nodeType && (++r, o[a] === t && (e = r));
            return 1 === r ? i : i += "[" + e + "]"
        },
        isLessThanIE8: function(t, e) {
            if (e.userAgent.match(/MSIE\s[^;]*/) || e.userAgent.match(/Trident\/[^;]*/) ? 1 : 0) {
                var n = -1;
                if (t.documentMode ? n = t.documentMode : (n = 5, t.compatMode && "CSS1Compat" === t.compatMode && (n = 7)), n < 9) return !0
            }
            return !1
        }
    }
}, function(t, e, n) {
    "use strict";
    var i, o = n(0),
        r = "default",
        a = "list",
        s = "detail",
        u = "digest";
    t.exports = function(t, e) {
        var n, l, f, c;
        return i = i || (n = t, f = "object" == typeof(l = e) ? l : {}, c = {
            targetModules: [],
            pollingTime: 100,
            offsetReevaluateTime: 1e3,
            autoOffset: !1,
            viewableTopOffset: 0,
            viewableBottomOffset: 0,
            debugLevel: 0,
            valDelim: ":",
            mapDelim: ";",
            dataAttr: "data-ual",
            trackingTypeAttr: "data-ual-view-type",
            goToDigestNoflow: {
                attr: "data-ual-gotodigest-noflow",
                name: "go_to_content"
            },
            goToContent: {
                attr: "data-ual-gotocontent",
                name: "go_to_content"
            },
            goToContentNoflow: {
                attr: "data-ual-gotocontent-noflow",
                name: "go_to_content"
            },
            newDataAttr: "data-ual-new-data",
            updateDataAttr: "data-ual-update-data",
            rapidAttr: "data-ylk",
            pp: {
                apptype: "web"
            },
            ylkWhitelist: ["sec", "slk", "pos"],
            queueSize: 30,
            interval: 6e3,
            noClickListen: "no-click-resp",
            nofollowClass: "rapidnofollow",
            yqlHost: null,
            useHttp: !1
        }, {
            targetModules: o.isArray(f.targetModules) ? f.targetModules : c.targetModules,
            pollingTime: o.isNumber(f.pollingTime) ? f.pollingTime : c.pollingTime,
            offsetReevaluateTime: o.isNumber(f.offsetReevaluateTime) ? f.offsetReevaluateTime : c.offsetReevaluateTime,
            autoOffset: o.isBoolean(f.autoOffset) ? f.autoOffset : c.autoOffset,
            viewableTopOffset: o.isNumber(f.viewableTopOffset) ? f.viewableTopOffset : c.viewableTopOffset,
            viewableBottomOffset: o.isNumber(f.viewableBottomOffset) ? f.viewableBottomOffset : c.viewableBottomOffset,
            debugLevel: o.isNumber(f.debugLevel) ? f.debugLevel : c.debugLevel,
            valDelim: o.isString(f.valDelim) ? f.valDelim : c.valDelim,
            mapDelim: o.isString(f.mapDelim) ? f.mapDelim : c.mapDelim,
            dataAttr: o.isString(f.dataAttr) ? f.dataAttr : c.dataAttr,
            trackingTypeAttr: o.isString(f.trackingTypeAttr) ? f.trackingTypeAttr : c.trackingTypeAttr,
            goToDigestNoflow: o.isObject(f.goToDigestNoflow) ? f.goToDigestNoflow : c.goToDigestNoflow,
            goToContent: o.isObject(f.goToContent) ? f.goToContent : c.goToContent,
            goToContentNoflow: o.isObject(f.goToContentNoflow) ? f.goToContentNoflow : c.goToContentNoflow,
            newDataAttr: o.isString(f.newDataAttr) ? f.newDataAttr : c.newDataAttr,
            updateDataAttr: o.isString(f.updateDataAttr) ? f.updateDataAttr : c.updateDataAttr,
            rapidAttr: o.isString(f.rapidAttr) ? f.rapidAttr : c.rapidAttr,
            pp: o.isObject(f.pp) ? f.pp : c.pp,
            ylkWhitelist: o.isArray(f.ylkWhitelist) ? f.ylkWhitelist : c.ylkWhitelist,
            queueSize: o.isNumber(f.queueSize) ? f.queueSize : c.queueSize,
            interval: o.isNumber(f.interval) ? f.interval : c.interval,
            noClickListen: o.isString(f.noClickListen) ? f.noClickListen : c.noClickListen,
            nofollowClass: o.isString(f.nofollowClass) ? f.nofollowClass : c.nofollowClass,
            yqlHost: o.isString(f.yqlHost) ? f.yqlHost : c.yqlHost,
            useHttp: o.isBoolean(f.useHttp) ? f.useHttp : c.useHttp,
            DEFAULT: r,
            LIST: a,
            DETAIL: s,
            DIGEST: u,
            ALLOW_TYPE: [r, a, s, u],
            libPageParam: {
                _handler: "shn",
                os: o.getOs(n),
                sdk: "Rapid",
                ext: "UserActionLogger",
                extv: "2.0.0"
            }
        })
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0);

    function o(t, e) {
        var n = Array.prototype.slice.call(e),
            i = new Date;
        n.unshift("[" + i.toLocaleTimeString() + "." + i.getUTCMilliseconds() + "]"), n.unshift("[UAL]");
        try {
            t.apply(console, n)
        } catch (o) {
            console.log("[UAL] [" + i.toLocaleTimeString() + "." + i.getUTCMilliseconds() + "] print error")
        }
    }
    t.exports = function() {
        var t = n(1)().debugLevel;
        return i.isUndef(console) || i.isUndef(console.log) ? {
            d: function() {},
            w: function() {},
            e: function() {}
        } : {
            d: function() {
                t > 0 && o(console.log, arguments)
            },
            w: function() {
                i.isUndef(console.warn) ? o(console.log, arguments) : o(console.warn, arguments)
            },
            e: function() {
                i.isUndef(console.error) ? o(console.log, arguments) : o(console.error, arguments)
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = {
            "default": "",
            list: "view_content_list_end",
            detail: "view_content_detail_end",
            digest: "view_content_digest_end"
        },
        r = n(2);
    t.exports = function(t, e) {
        var n = r(),
            a = i.getTime();
        return e.et = a, e.ts = a, e.vt = a - e.st, i.findKey(o, t) && (e.actid = o[t]), delete e._rate_work, delete e._env, delete e._type, i.isNumber(e.vat) && i.findKey(e, "_viewable_in_time") && (i.isNumber(e._viewable_in_time) && 0 !== e._viewable_in_time && (e.vat += a - e._viewable_in_time), delete e._viewable_in_time), i.findKey(e, "slk") || (e.slk = "_"), n.d("[" + e.actid + "] contid = " + e.contid), e
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        for (; t && null === t.getAttribute(e);) t = t.parentNode;
        return t
    }
}, function(t, e, n) {
    "use strict";
    t.exports = {
        content_id: "contid",
        id_type: "idtype",
        associated_id: "associd",
        content_service: "contsvc",
        content_type: "ctypeid",
        ss_join_key: "ssjkey",
        screen_id: "scid"
    }
}, function(t, e, n) {
    "use strict";
    var i, o = n(0),
        r = n(2),
        a = n(3);

    function s() {
        var t, e = n(1)(),
            i = r(),
            s = [],
            u = null;
        try {
            t = o.isString(e.yqlHost) ? YAHOO.i13n.Rapid({
                spaceid: 0,
                pageview_on_init: !1,
                apv: !1,
                yql_host: e.yqlHost,
                use_http: e.useHttp,
                compr_on: !1
            }) : YAHOO.i13n.Rapid({
                spaceid: 0,
                pageview_on_init: !1,
                apv: !1,
                compr_on: !1
            })
        } catch (c) {
            i.e("Rapid is not loaded.")
        }

        function l() {
            o.isNull(u) || (clearTimeout(u), u = null)
        }

        function f() {
            if (s.length > 0) try {
                t.setRapidAttribute({
                    keys: e.pp
                }), t.beaconLinkViews([{
                    sec: "s",
                    _links: s
                }], !1, {
                    pp: o.merge(e.pp, e.libPageParam)
                }), i.d("Send completely!", s), s = []
            } catch (n) {
                i.e("Sending failed. Rapid not found.")
            }
            l()
        }
        return {
            flush: function(t, n, r) {
                var u;
                for (var l in r = o.isObject(r) ? r : {}, t) o.isUndef(r[l]) && 0 !== t[l].st && (u = t[l]._type, e.ALLOW_TYPE.indexOf(u) < 0 && (u = e.DEFAULT), s.push(a(u, o.merge(n, t[l]._env, t[l]))), i.d("[view_end] contid = " + t[l].contid), delete t[l])
            },
            send: function() {
                f()
            },
            push: function(t) {
                s.push(JSON.parse(JSON.stringify(t)))
            },
            resetTimer: function() {
                l()
            },
            setTimer: function() {
                o.isNull(u) && s.length > 0 && (u = setTimeout(f, e.interval))
            },
            isOverMaxQueueSize: function() {
                return s.length > e.queueSize
            },
            getQueueSize: function() {
                return s.length
            }
        }
    }
    t.exports = function() {
        return i = i || s()
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = n(2),
        r = n(8),
        a = n(16),
        s = n(17),
        u = n(18),
        l = n(5);
    "undefined" != typeof window.YAHOO && window.YAHOO || (window.YAHOO = {}), YAHOO.i13n = YAHOO.i13n || {}, YAHOO.i13n.JP = YAHOO.i13n.JP || {}, YAHOO.i13n.JP.UserAction = function(t) {
        if (i.isLessThanIE8(document, navigator)) return {
            addModules: function() {},
            enableAutoOffset: function() {},
            setTopOffset: function() {},
            setBottomOffset: function() {},
            setPageParam: function() {},
            addPageParam: function() {},
            setYlkWhitelist: function() {},
            stop: function() {},
            start: function() {}
        };
        var e = n(1)(document.defaultView, t);
        location.href.indexOf("shadebug=1") >= 0 && e.debugLevel < 1 && (e.debugLevel = 1);
        var f = o(),
            c = [],
            d = u();
        return a(c), s(c), {
            addModules: function(t) {
                return i.isArray(t) ? t.forEach(function(t) {
                    e.targetModules.push({
                        id: t + ""
                    })
                }) : e.targetModules.push({
                    id: t + ""
                }), this
            },
            enableAutoOffset: function(t) {
                return i.isNumber(t) && (e.offsetReevaluateTime = t), e.autoOffset = !0, this
            },
            setTopOffset: function(t) {
                return e.autoOffset = !1, e.viewableTopOffset = t, this
            },
            setBottomOffset: function(t) {
                return e.autoOffset = !1, e.viewableBottomOffset = t, this
            },
            setPageParam: function(t) {
                return Object.keys(t).forEach(function(e) {
                    i.isString(l[e]) && (t[l[e]] = t[e], delete t[e])
                }), e.pp = t, this
            },
            addPageParam: function(t, n) {
                return 1 === arguments.length && i.isObject(t) ? Object.keys(t).forEach(function(n) {
                    i.isString(l[n]) ? e.pp[l[n]] = t[n] : e.pp[n] = t[n]
                }) : i.isString(t) && i.isPrimitive(n) ? (i.isString(l[t]) && (t = l[t]), e.pp[t] = n) : f.w("Invalid argments: addPageParam()"), this
            },
            setYlkWhitelist: function(t) {
                return i.isArray(t) ? e.ylkWhitelist = t : f.w("Invalid argment. expect Array[String] : setYlkWhitelist()"), this
            },
            stop: function() {
                return c.forEach(function(t) {
                    t.stop()
                }), d.stop(), this
            },
            start: function() {
                return e.targetModules.forEach(function(t) {
                    var n = !1;
                    if (c.forEach(function(e) {
                            t.id === e.getListId() && (n = !0, e.isActive() || e.start())
                        }), !n) {
                        var i = r(t.id);
                        i.start(), c.push(i), f.d("New tracking started!", e)
                    }
                }), d.start(), this
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = n(9),
        r = n(3),
        a = n(2),
        s = n(10),
        u = n(11);
    t.exports = function(t) {
        var e = n(1)(),
            l = n(6)(),
            f = a(),
            c = s(),
            d = {},
            p = !1,
            g = {
                isSuspend: !0
            },
            v = document.getElementById(t);
        if (i.isNull(v)) return f.e("The ID of the specified list can not be found. Viewable Complete the calculation. : (ID = " + t + ")"), {};
        var m = i.getContentEnv(v, e.dataAttr, e.mapDelim, e.valDelim),
            h = u(d, m, g);
        return {
            start: function() {
                g.isSuspend = !1,
                    function t() {
                        for (var n = v.querySelectorAll("[" + e.dataAttr + "]"), a = {}, s = i.isNumber(n.length) ? n.length : 0, u = 0; u < s; u++) {
                            var b = i.getTime(),
                                w = n[u],
                                y = i.isUndef(w.xpath) ? i.getXPath(w) : w.xpath,
                                A = w.getAttribute(e.trackingTypeAttr);
                            e.ALLOW_TYPE.indexOf(A) < 0 && (p || (f.e("Data-ual-view-type isn't set correctly! Start tracking as list.", w), p = !0), A = e.DEFAULT), w.xpath = y, a[y] = 1, i.isUndef(d[y]) && (d[y] = {
                                st: 0,
                                vr: 0,
                                _type: A
                            }, A !== e.LIST && A !== e.DEFAULT || (d[y].vat = 0, d[y]._viewable_in_time = 0));
                            var T = d[y],
                                _ = c.getAreaProportion(w);
                            if (_ > 0) {
                                if (e.debugLevel > 1) {
                                    var O = w.querySelector(".uainfo");
                                    O || ((O = document.createElement("div")).className = "uainfo", O.style.position = "absolute", O.style.backgroundColor = "rgba(0,0,0,0.4)", O.style.color = "#FFF", O.style.padding = "3px", O.style.left = 0, O.fontSize = "13pt", O.zIndex = "100000", w.appendChild(O)), O.innerHTML = "", i.isObject(T._env) && i.isString(T._env.contid) && (O.innerHTML += T._env.contid.substr(0, 12) + "<br>"), O.innerHTML += (100 * _ + "").substr(0, 5) + "%<br>ViewRate:" + T.vr + "%<br>", i.isUndef(T.st) || (O.innerHTML += "ViewTime:" + Math.floor((i.getTime() - T.st) / 1e3) + "秒")
                                }
                                T._env = i.getContentEnv(w, e.dataAttr, e.mapDelim, e.valDelim), 0 === T.st && (T.st = b, T._rate_work = i.getHundredArray(), l.push(o(A, i.merge(m, T._env, {
                                    ts: b
                                }))), e.debugLevel > 1 && (w.style.borderLeft = "2px solid red", w.style.borderRight = "2px solid red", w.style.borderBottom = "2px solid red")), A !== e.LIST && A !== e.DEFAULT || (_ >= .5 && 0 === T._viewable_in_time ? T._viewable_in_time = b : _ < .5 && 0 !== T._viewable_in_time && (T.vat += b - T._viewable_in_time, T._viewable_in_time = 0));
                                var D = c.getReadProportion(T, w);
                                i.isNumber(D) && (T.vr = D)
                            } else 0 !== T.st && (l.push(r(A, i.merge(m, T._env, T))), delete d[y], A !== e.DETAIL && A !== e.DIGEST || l.send(), e.debugLevel > 1 && (w.style.borderLeft = "2px solid rgba(0,0,0,0)", w.style.borderRight = "2px solid rgba(0,0,0,0)", w.style.borderBottom = "2px solid rgba(0,0,0,0)"));
                            h.addFlowEvent(w)
                        }
                        l.flush(d, m, a), l.isOverMaxQueueSize() && l.send(), l.setTimer(), setTimeout(function() {
                            g.isSuspend || t()
                        }, e.pollingTime)
                    }()
            },
            suspend: function() {
                l.send(), g.isSuspend = !0
            },
            stop: function() {
                l.flush(d, m), l.send(), g.isSuspend = !0
            },
            send: function() {
                l.send()
            },
            isActive: function() {
                return !g.isSuspend
            },
            getListId: function() {
                return t
            },
            getQueueSize: function() {
                return l.getQueueSize
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = {
            "default": "",
            list: "view_content_list_start",
            detail: "view_content_detail_start",
            digest: "view_content_digest_start"
        },
        r = n(2);
    t.exports = function(t, e) {
        var n = r();
        return i.findKey(o, t) && (e.actid = o[t]), i.findKey(e, "slk") || (e.slk = "_"), n.d("[" + e.actid + "] contid = " + e.contid), e
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function() {
        var t = n(1)();
        return {
            getAreaProportion: function(e) {
                var n = window.getComputedStyle(e),
                    i = t.viewableTopOffset,
                    o = t.viewableBottomOffset;
                if ("hidden" === n.getPropertyValue("visibility") || "none" === n.getPropertyValue("display")) return 0;
                var r = e.getBoundingClientRect(),
                    a = {},
                    s = window.innerHeight || document.documentElement.clientHeight,
                    u = window.innerWidth || document.documentElement.clientWidth;
                return s -= o, r.left >= u || r.top >= s ? 0 : (s -= i, a.right = r.right, a.bottom = r.bottom, a.left = r.left, a.top = r.top, 0 !== i && (a.top -= i, a.bottom -= i), a.top = a.top < 0 ? 0 : a.top, a.left = a.left < 0 ? 0 : a.left, a.bottom = a.bottom > s ? s : a.bottom, a.right = a.right > u ? u : a.right, a.width = a.right - a.left, a.height = a.bottom - a.top, a.width * a.height / (r.width * r.height))
            },
            getReadProportion: function(e, n) {
                var i = n.getBoundingClientRect(),
                    o = window.innerHeight || document.documentElement.clientHeight,
                    r = t.viewableTopOffset,
                    a = t.viewableBottomOffset;
                if (i.top > o - a) return null;
                if (i.bottom - r < 0) return null;
                if (100 === e.vr) return null;
                o -= a + r;
                var s = {
                        top: i.top - r,
                        bottom: i.bottom - r
                    },
                    u = {
                        top: s.top < 0 ? 0 : s.top,
                        bottom: s.bottom > o ? o : s.bottom
                    };
                u.top -= s.top, u.bottom -= s.top, s.bottom -= s.top, s.top -= s.top;
                for (var l = s.bottom / 100, f = u.top / l, c = u.bottom / l, d = Math.ceil(f); d < Math.floor(c); d++) e._rate_work[d] = !0;
                var p = 0;
                for (d = 0; d < 100; d++) p += !0 === e._rate_work[d] ? 1 : 0;
                return e.vr > p ? e.vr : p
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = n(12);
    t.exports = function(t, e, r) {
        var a = n(1)(),
            s = "[" + a.goToContent.attr + "], [" + a.goToContentNoflow.attr + "], [" + a.goToDigestNoflow.attr + "]",
            u = o(t, e, r);
        return {
            addFlowEvent: function(t) {
                for (var e = t.querySelectorAll(s), n = e.length, o = i.getXPath(t), r = 0; r < n; r++) {
                    var l = e[r],
                        f = null;
                    i.isUndef(l.__ual_id) && (null !== l.getAttribute(a.goToContent.attr) ? f = u.goToContent : null !== l.getAttribute(a.goToContentNoflow.attr) ? f = u.goToNoflow : null !== l.getAttribute(a.goToDigestNoflow.attr) && (f = u.goToNoflow), null !== f && (l.__ual_id = o, l.addEventListener("click", f, !0)))
                }
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = n(13),
        r = n(3),
        a = n(4),
        s = n(15);
    t.exports = function(t, e, u) {
        var l = n(1)(),
            f = n(6)();
        return {
            goToContent: function(n) {
                var r = o.call(this, e, "goToContent", n, !0);
                i.isObject(r) && (f.push(r), f.flush(t, e), f.send()), u.isSuspend = !0
            },
            goToNoflow: function(n) {
                var u = a(this, l.dataAttr),
                    c = i.getXPath(u),
                    d = t[c],
                    p = {};
                i.isObject(d) && (f.push(r(d._type, i.merge(e, d._env, d))), delete t[c]), p = this.getAttribute(l.goToDigestNoflow.attr) ? o.call(this, e, "goToDigestNoflow", n, !1) : o.call(this, e, "goToContentNoflow", n, !1), f.push(p), f.send(), s(this)
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = n(2),
        r = n(14),
        a = n(4);
    t.exports = function(t, e, s, u) {
        var l, f = n(1)(),
            c = o();
        var d, p, g, v = (d = s.target || s.srcElement, p = {}, (g = a(d, f.dataAttr)) && (p = i.getContentEnv(g, f.dataAttr, f.mapDelim, f.valDelim)), p),
            m = i.getContentEnv(this, f[e].attr, f.mapDelim, f.valDelim);
        if (i.isUndef(this.__ual_id)) return null;
        if (u) {
            var h = function() {
                var t = s.target || s.srcElement,
                    e = "";
                try {
                    t && 3 === t.nodeType && (t = t.parentNode)
                } catch (n) {
                    c.e(n)
                }
                for (; t && (e = t.nodeName.toLowerCase()) && "a" !== e;) t = t.parentNode;
                return t
            }();
            if (i.isNull(h)) return c.w("anchor tag not found."), null;
            l = h.getAttribute("href")
        } else l = location.href;
        var b = i.merge(r.getYlkParam(f, this), t, {
            href: l
        }, v, m, {
            actid: f[e].name,
            ts: i.getTime()
        });
        return c.d("[" + f[e].name + "] contid = " + b.contid), b
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0);
    t.exports = {
        getYlkParam: function(t, e) {
            var n = {};
            if (!i.isUndef(e) && !i.isNull(e)) {
                var o = i.getContentEnv(e, t.rapidAttr, t.mapDelim, t.valDelim);
                i.findKey(o, "rsec") && (o.sec = o.rsec), t.ylkWhitelist.forEach(function(t) {
                    i.findKey(o, t) && (n[t] = o[t])
                })
            }
            return i.findKey(n, "slk") || (n.slk = "_"), n
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = n(4);
    t.exports = function(t) {
        var e = n(1)(),
            r = t.getAttribute(e.newDataAttr),
            a = t.getAttribute(e.updateDataAttr),
            s = o(t, e.dataAttr);
        if (i.isDOMElement(s) && i.isFunction(s.setAttribute))
            if (t.getAttribute(e.goToDigestNoflow.attr) ? s.setAttribute(e.trackingTypeAttr, e.DIGEST) : t.getAttribute(e.goToContentNoflow.attr) && s.setAttribute(e.trackingTypeAttr, e.DETAIL), i.isString(r) && r.length > 0) s.setAttribute(e.dataAttr, r);
            else if (i.isString(a) && a.length > 0) {
            var u = i.getContentEnv(s, e.dataAttr, e.mapDelim, e.valDelim),
                l = i.getContentEnv(t, e.updateDataAttr, e.mapDelim, e.valDelim),
                f = i.merge(u, l);
            i.setContentEnv(s, e.dataAttr, f, e.mapDelim, e.valDelim)
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = n(2),
        r = 1,
        a = 0;
    t.exports = function(t) {
        var e, n, s = o(),
            u = {
                focus: r,
                pageshow: r,
                "visibilitychange-visible": r,
                blur: a,
                pagehide: a,
                "visibilitychange-hidden": a,
                beforeunload: a,
                unload: a
            },
            l = r;

        function f(o) {
            var f = -1,
                c = o.type;
            o.type === n && (c = document[e] ? "visibilitychange-hidden" : "visibilitychange-visible"), Object.prototype.hasOwnProperty.call(u, c) && (f = u[c]), -1 !== f && l !== f && ((l = f) === a ? (i.isArray(t) && t.forEach(function(t) {
                t.stop()
            }), s.d("Dwell changeing [" + o.type + "] => inactive.")) : l === r && (i.isArray(t) && t.forEach(function(t) {
                t.isActive() || t.start()
            }), s.d("Dwell changeing [" + o.type + "] => active.")))
        }
        return "undefined" != typeof document.hidden ? (e = "hidden", n = "visibilitychange") : "undefined" != typeof document.mozHidden ? (e = "mozHidden", n = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (e = "msHidden", n = "msvisibilitychange") : "undefined" != typeof document.webkitHidden && (e = "webkitHidden", n = "webkitvisibilitychange"), Object.keys(u).forEach(function(t) {
            window.addEventListener(t, f, !1)
        }), window.addEventListener(n, f, !1), {
            destroy: function() {
                Object.keys(u).forEach(function(t) {
                    window.removeEventListener(t, f, !1)
                }), window.removeEventListener(n, f, !1)
            },
            isActive: function() {
                return l === r
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(0),
        o = n(2),
        r = 1,
        a = 0;
    t.exports = function(t) {
        var e = o(),
            n = document.getElementById("wrapper"),
            s = r,
            u = {
                yjsmhSidebarOpen: a,
                yjsmhSidebarClose: r,
                yjsmhNotificationMenuOpen: a,
                yjsmhNotificationMenuClose: r
            };

        function l(n) {
            var o = -1,
                l = n.type;
            Object.prototype.hasOwnProperty.call(u, l) && (o = u[l]), -1 !== o && s !== o && (s = o, e.d("Masthead status changed [" + n.type + "]", t), s === a ? i.isArray(t) && t.forEach(function(t) {
                t.stop()
            }) : s === r && i.isArray(t) && t.forEach(function(t) {
                t.isActive() || t.start()
            }))
        }
        return i.isDivElement(n) && Object.keys(u).forEach(function(t) {
            n.addEventListener(t, l, !1)
        }), {
            destroy: function() {
                i.isDivElement(n) && Object.keys(u).forEach(function(t) {
                    window.removeEventListener(this[t], l, !1)
                }, u)
            },
            isActive: function() {
                return s === r
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    var i = n(19),
        o = n(2);
    t.exports = function() {
        var t = n(1)(),
            e = o(),
            r = !0;
        return {
            start: function() {
                r = !1,
                    function n() {
                        if (t.autoOffset) {
                            var o = document.getElementsByTagName("*"),
                                a = i(document.defaultView, o);
                            t.viewableTopOffset !== a.top && (e.d("changed top offset. before[" + t.viewableTopOffset + "] after[" + a.top + "]"), t.viewableTopOffset = a.top), t.viewableBottomOffset !== a.bottom && (e.d("changed bottom offset. before[" + t.viewableBottomOffset + "] after[" + a.bottom + "]"), t.viewableBottomOffset = a.bottom)
                        }
                        setTimeout(function() {
                            r || n()
                        }, t.offsetReevaluateTime)
                    }()
            },
            stop: function() {
                r = !0
            }
        }
    }
}, function(t, e, n) {
    "use strict";
    t.exports = function(t, e) {
        for (var n = {
                top: 0,
                bottom: 0
            }, i = e.length, o = t.innerWidth / 2, r = t.innerHeight / 2, a = 0; a < i; a++) {
            var s = e[a],
                u = t.getComputedStyle(s, "");
            if ("fixed" === u.position && "none" !== u.display && "hidden" !== u.visibility) {
                var l = s.getBoundingClientRect(),
                    f = l.right - l.left;
                l.bottom - l.top > 0 && f > o && (l.top < r ? n.top = n.top < l.bottom ? l.bottom : n.top : l.bottom > r && (n.bottom = n.bottom < l.top ? l.bottom - l.top : n.bottom))
            }
        }
        return n
    }
}]);