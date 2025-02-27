/* prebid.js v1.15.0
Updated : 2018-07-18 */
!(function(d) {
    var s = window.pbjsChunk;
    window.pbjsChunk = function(e, t, n) {
        for (var r, i, o, a = 0, u = []; a < e.length; a++) i = e[a], c[i] && u.push(c[i][0]), c[i] = 0;
        for (r in t) Object.prototype.hasOwnProperty.call(t, r) && (d[r] = t[r]);
        for (s && s(e, t, n); u.length;) u.shift()();
        if (n)
            for (a = 0; a < n.length; a++) o = f(f.s = n[a]);
        return o
    };
    var n = {},
        c = {
            146: 0
        };

    function f(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return d[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports
    }
    f.m = d, f.c = n, f.d = function(e, t, n) {
        f.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: n
        })
    }, f.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return f.d(t, "a", t), t
    }, f.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, f.p = "", f.oe = function(e) {
        throw console.error(e), e
    }, f(f.s = 499)
})({
    0: function(e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.getLatestHighestCpmBid = a.getOldestHighestCpmBid = a.getHighestCpm = void 0;
        var r = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        a.getAdUnitSizes = function(e) {
            if (!e) return;
            var t = [];
            if (e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes)) {
                var n = e.mediaTypes.banner.sizes;
                Array.isArray(n[0]) ? t = n : t.push(n)
            } else Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
            return t
        }, a.parseSizesInput = function(e) {
            var t = [];
            if ("string" == typeof e) {
                var n = e.split(","),
                    r = /^(\d)+x(\d)+$/i;
                if (n)
                    for (var i in n) T(n, i) && n[i].match(r) && t.push(n[i])
            } else if ("object" === (void 0 === e ? "undefined" : u(e))) {
                var o = e.length;
                if (0 < o)
                    if (2 === o && "number" == typeof e[0] && "number" == typeof e[1]) t.push(h(e));
                    else
                        for (var a = 0; a < o; a++) t.push(h(e[a]))
            }
            return t
        }, a.parseGPTSingleSizeArray = h, a.uniques = I, a.flatten = _, a.getBidRequest = function(n, e) {
            var r = void 0;
            return e.some((function(e) {
                var t = (0, o.default)(e.bids, (function(t) {
                    return ["bidId", "adId", "bid_id"].some((function(e) {
                        return t[e] === n
                    }))
                }));
                return t && (r = t), t
            })), r
        }, a.getKeys = w, a.getValue = C, a.getBidderCodes = function() {
            return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map((function(e) {
                return e.bids.map((function(e) {
                    return e.bidder
                })).reduce(_, [])
            })).reduce(_).filter(I)
        }, a.isGptPubadsDefined = function() {
            if (window.googletag && a.isFn(window.googletag.pubads) && a.isFn(window.googletag.pubads().getSlots)) return !0
        }, a.shuffle = function(e) {
            var t = e.length;
            for (; 0 < t;) {
                var n = Math.floor(Math.random() * t),
                    r = e[--t];
                e[t] = e[n], e[n] = r
            }
            return e
        }, a.adUnitsFilter = function(e, t) {
            return (0, d.default)(e, t && t.adUnitCode)
        }, a.isSrcdocSupported = function(e) {
            return e.defaultView && e.defaultView.frameElement && "srcdoc" in e.defaultView.frameElement && !/firefox/i.test(navigator.userAgent)
        }, a.deepClone = function(e) {
            return (0, i.default)(e)
        }, a.inIframe = function() {
            try {
                return a.getWindowSelf() !== a.getWindowTop()
            } catch (e) {
                return !0
            }
        }, a.isSafariBrowser = function() {
            return /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
        }, a.replaceAuctionPrice = function(e, t) {
            if (!e) return;
            return e.replace(/\$\{AUCTION_PRICE\}/g, t)
        }, a.timestamp = function() {
            return (new Date).getTime()
        }, a.checkCookieSupport = function() {
            if (window.navigator.cookieEnabled || document.cookie.length) return !0
        }, a.cookiesAreEnabled = function() {
            if (a.checkCookieSupport()) return !0;
            return window.document.cookie = "prebid.cookieTest", -1 != window.document.cookie.indexOf("prebid.cookieTest")
        }, a.delayExecution = function(e, t) {
            if (t < 1) throw new Error("numRequiredCalls must be a positive number. Got " + t);
            var n = 0;
            return function() {
                ++n === t && e.apply(null, arguments)
            }
        }, a.groupBy = function(e, n) {
            return e.reduce((function(e, t) {
                return (e[t[n]] = e[t[n]] || []).push(t), e
            }), {})
        }, a.deepAccess = function(e, t) {
            if (!e) return;
            t = String(t).split(".");
            for (var n = 0; n < t.length; n++)
                if (void 0 === (e = e[t[n]])) return;
            return e
        }, a.createContentToExecuteExtScriptInFriendlyFrame = function(e) {
            if (!e) return "";
            return '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><html><head><base target="_top" /><script>inDapIF=true;<\/script></head><body>\x3c!--PRE_SCRIPT_TAG_MACRO--\x3e<script src="' + e + '"><\/script>\x3c!--POST_SCRIPT_TAG_MACRO--\x3e</body></html>'
        }, a.getDefinedParams = function(n, e) {
            return e.filter((function(e) {
                return n[e]
            })).reduce((function(e, t) {
                return r(e, (function(e, t, n) {
                    t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n;
                    return e
                })({}, t, n[t]))
            }), {})
        }, a.isValidMediaTypes = function(e) {
            var t = ["banner", "native", "video"];
            if (!Object.keys(e).every((function(e) {
                    return (0, d.default)(t, e)
                }))) return !1;
            if (e.video && e.video.context) return (0, d.default)(["instream", "outstream"], e.video.context);
            return !0
        }, a.getBidderRequest = function(e, t, n) {
            return (0, o.default)(e, (function(e) {
                return 0 < e.bids.filter((function(e) {
                    return e.bidder === t && e.adUnitCode === n
                })).length
            })) || {
                start: null,
                auctionId: null
            }
        }, a.getUserConfiguredParams = function(e, t, n) {
            return e.filter((function(e) {
                return e.code === t
            })).map((function(e) {
                return e.bids
            })).reduce(_, []).filter((function(e) {
                return e.bidder === n
            })).map((function(e) {
                return e.params || {}
            }))
        }, a.getOrigin = function() {
            return window.location.origin ? window.location.origin : window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
        }, a.getDNT = function() {
            return "1" === navigator.doNotTrack || "1" === window.doNotTrack || "1" === navigator.msDoNotTrack || "yes" === navigator.doNotTrack
        }, a.isAdUnitCodeMatchingSlot = function(t) {
            return function(e) {
                return B(t, e)
            }
        }, a.isSlotMatchingAdUnitCode = function(t) {
            return function(e) {
                return B(e, t)
            }
        }, a.unsupportedBidderMessage = function(e, t) {
            var n = Object.keys(e.mediaTypes || {
                banner: "banner"
            }).join(", ");
            return "\n    " + e.code + " is a " + n + " ad unit\n    containing bidders that don't support " + n + ": " + t + ".\n    This bidder won't fetch demand.\n  "
        }, a.deletePropertyFromObject = function(e, t) {
            var n = r({}, e);
            return delete n[t], n
        }, a.removeRequestId = function(e) {
            return a.deletePropertyFromObject(e, "requestId")
        }, a.isInteger = function(e) {
            return Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
        }, a.convertCamelToUnderscore = function(e) {
            return e.replace(/(?:^|\.?)([A-Z])/g, (function(e, t) {
                return "_" + t.toLowerCase()
            })).replace(/^_/, "")
        }, a.transformBidderParamKeywords = function(e) {
            var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "keywords",
                i = [];
            return a._each(e, (function(e, t) {
                if (a.isArray(e)) {
                    var n = [];
                    a._each(e, (function(e) {
                        (e = a.getValueString(r + "." + t, e)) && n.push(e)
                    })), e = n
                } else {
                    if (e = a.getValueString(r + "." + t, e), !a.isStr(e)) return;
                    e = [e]
                }
                i.push({
                    key: t,
                    value: e
                })
            })), i
        };
        var n = t(2),
            i = c(t(64)),
            o = c(t(10)),
            d = c(t(6)),
            s = t(12);

        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = t(4),
            l = !1,
            g = Object.prototype.toString,
            p = null,
            v = null;
        try {
            p = console.info.bind(window.console), v = console.warn.bind(window.console)
        } catch (e) {}
        a.replaceTokenInString = function(i, e, o) {
            return a._each(e, (function(e, t) {
                e = void 0 === e ? "" : e;
                var n = o + t.toUpperCase() + o,
                    r = new RegExp(n, "g");
                i = i.replace(r, e)
            })), i
        };
        var y, m = (y = 0, function() {
            return ++y
        });

        function b() {
            return m() + Math.random().toString(16).substr(2)
        }

        function h(e) {
            if (a.isArray(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1])) return e[0] + "x" + e[1]
        }

        function S() {
            return window.console && window.console.log
        }
        a.getUniqueIdentifierStr = b, a.generateUUID = function e(t) {
            return t ? (t ^ 16 * Math.random() >> t / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, e)
        }, a.getBidIdParameter = function(e, t) {
            return t && t[e] ? t[e] : ""
        }, a.tryAppendQueryString = function(e, t, n) {
            return n ? e + (t + "=") + encodeURIComponent(n) + "&" : e
        }, a.parseQueryStringParameters = function(e) {
            var t = "";
            for (var n in e) e.hasOwnProperty(n) && (t += n + "=" + encodeURIComponent(e[n]) + "&");
            return t
        }, a.transformAdServerTargetingObj = function(t) {
            return t && 0 < Object.getOwnPropertyNames(t).length ? w(t).map((function(e) {
                return e + "=" + encodeURIComponent(C(t, e))
            })).join("&") : ""
        }, a.getTopWindowLocation = function() {
            if (a.inIframe()) {
                var e = void 0;
                try {
                    e = a.getAncestorOrigins() || a.getTopFrameReferrer()
                } catch (e) {
                    logInfo("could not obtain top window location", e)
                }
                if (e) return (0, s.parse)(e, {
                    decodeSearchAsString: !0
                })
            }
            return a.getWindowLocation()
        }, a.getTopFrameReferrer = function() {
            try {
                window.top.location.toString();
                for (var e = "", t = void 0;
                    (t = t ? t.parent : window).document && t.document.referrer && (e = t.document.referrer), t !== window.top;);
                return e
            } catch (e) {
                return window.document.referrer
            }
        }, a.getAncestorOrigins = function() {
            if (window.document.location && window.document.location.ancestorOrigins && 1 <= window.document.location.ancestorOrigins.length) return window.document.location.ancestorOrigins[window.document.location.ancestorOrigins.length - 1]
        }, a.getWindowTop = function() {
            return window.top
        }, a.getWindowSelf = function() {
            return window.self
        }, a.getWindowLocation = function() {
            return window.location
        }, a.getTopWindowUrl = function() {
            var t = void 0;
            try {
                t = a.getTopWindowLocation().href
            } catch (e) {
                t = ""
            }
            return t
        }, a.getTopWindowReferrer = function() {
            try {
                return window.top.document.referrer
            } catch (e) {
                return document.referrer
            }
        }, a.logWarn = function(e, t) {
            E() && console.warn && v && (t && 0 !== t.length || (t = ""), v("WARNING: " + e + ("" === t ? "" : " : params : "), t))
        }, a.logInfo = function(e, t) {
            E() && S() && p && (t && 0 !== t.length || (t = ""), p("INFO: " + e + ("" === t ? "" : " : params : "), t))
        }, a.logMessage = function(e) {
            E() && S() && console.log("MESSAGE: " + e)
        }, a.hasConsoleLogger = S;
        var E = function() {
            if (!1 === n.config.getConfig("debug") && !1 === l) {
                var e = "TRUE" === A(f.DEBUG_MODE).toUpperCase();
                n.config.setConfig({
                    debug: e
                }), l = !0
            }
            return !!n.config.getConfig("debug")
        };
        a.debugTurnedOn = E, a.logError = function() {
            E() && window.console && window.console.error && console.error.apply(console, arguments)
        }, a.createInvisibleIframe = function() {
            var e = document.createElement("iframe");
            return e.id = b(), e.height = 0, e.width = 0, e.border = "0px", e.hspace = "0", e.vspace = "0", e.marginWidth = "0", e.marginHeight = "0", e.style.border = "0", e.scrolling = "no", e.frameBorder = "0", e.src = "about:blank", e.style.display = "none", e
        };
        var A = function(e) {
            var t = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(window.location.search);
            return null === t ? "" : decodeURIComponent(t[1].replace(/\+/g, " "))
        };
        a.getParameterByName = A, a.hasValidBidRequest = function(e, n, t) {
            var r = !1;

            function i(e, t) {
                t === n[o] && (r = !0)
            }
            for (var o = 0; o < n.length; o++)
                if (r = !1, a._each(e, i), !r) return a.logError("Params are missing for bid request. One of these required paramaters are missing: " + n, t), !1;
            return !0
        }, a.addEventHandler = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent && e.attachEvent("on" + t, n)
        }, a.isA = function(e, t) {
            return g.call(e) === "[object " + t + "]"
        }, a.isFn = function(e) {
            return a.isA(e, "Function")
        }, a.isStr = function(e) {
            return a.isA(e, "String")
        }, a.isArray = function(e) {
            return a.isA(e, "Array")
        }, a.isNumber = function(e) {
            return a.isA(e, "Number")
        }, a.isPlainObject = function(e) {
            return a.isA(e, "Object")
        }, a.isEmpty = function(e) {
            if (!e) return !0;
            if (a.isArray(e) || a.isStr(e)) return !(0 < e.length);
            for (var t in e)
                if (hasOwnProperty.call(e, t)) return !1;
            return !0
        }, a.isEmptyStr = function(e) {
            return a.isStr(e) && (!e || 0 === e.length)
        }, a._each = function(e, t) {
            if (!a.isEmpty(e)) {
                if (a.isFn(e.forEach)) return e.forEach(t, this);
                var n = 0,
                    r = e.length;
                if (0 < r)
                    for (; n < r; n++) t(e[n], n, e);
                else
                    for (n in e) hasOwnProperty.call(e, n) && t.call(this, e[n], n)
            }
        }, a.contains = function(e, t) {
            if (a.isEmpty(e)) return !1;
            if (a.isFn(e.indexOf)) return -1 !== e.indexOf(t);
            for (var n = e.length; n--;)
                if (e[n] === t) return !0;
            return !1
        }, a.indexOf = (function() {
            if (Array.prototype.indexOf) return Array.prototype.indexOf
        })(), a._map = function(n, r) {
            if (a.isEmpty(n)) return [];
            if (a.isFn(n.map)) return n.map(r);
            var i = [];
            return a._each(n, (function(e, t) {
                i.push(r(e, t, n))
            })), i
        };
        var T = function(e, t) {
            return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t]
        };

        function I(e, t, n) {
            return n.indexOf(e) === t
        }

        function _(e, t) {
            return e.concat(t)
        }

        function w(e) {
            return Object.keys(e)
        }

        function C(e, t) {
            return e[t]
        }
        a.insertElement = function(e, t, n) {
            t = t || document;
            var r = void 0;
            r = n ? t.getElementsByTagName(n) : t.getElementsByTagName("head");
            try {
                (r = r.length ? r : t.getElementsByTagName("body")).length && (r = r[0]).insertBefore(e, r.firstChild)
            } catch (e) {}
        }, a.triggerPixel = function(e) {
            (new Image).src = e
        }, a.callBurl = function(e) {
            var t = e.source,
                n = e.burl;
            t === f.S2S.SRC && n && a.triggerPixel(n)
        }, a.insertHtmlIntoIframe = function(e) {
            if (e) {
                var t = document.createElement("iframe");
                t.id = a.getUniqueIdentifierStr(), t.width = 0, t.height = 0, t.hspace = "0", t.vspace = "0", t.marginWidth = "0", t.marginHeight = "0", t.style.display = "none", t.style.height = "0px", t.style.width = "0px", t.scrolling = "no", t.frameBorder = "0", t.allowtransparency = "true", a.insertElement(t, document, "body"), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close()
            }
        }, a.insertUserSyncIframe = function(e) {
            var t = a.createTrackPixelIframeHtml(e, !1, "allow-scripts allow-same-origin"),
                n = document.createElement("div");
            n.innerHTML = t;
            var r = n.firstChild;
            a.insertElement(r)
        }, a.createTrackPixelHtml = function(e) {
            if (!e) return "";
            var t = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
            return t += '<img src="' + encodeURI(e) + '"></div>'
        }, a.createTrackPixelIframeHtml = function(e) {
            var t = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "";
            return e ? (t && (e = encodeURI(e)), n && (n = 'sandbox="' + n + '"'), "<iframe " + n + ' id="' + a.getUniqueIdentifierStr() + '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="' + e + '">\n    </iframe>') : ""
        }, a.getIframeDocument = function(e) {
            if (e) {
                var t = void 0;
                try {
                    t = e.contentWindow ? e.contentWindow.document : e.contentDocument.document ? e.contentDocument.document : e.contentDocument
                } catch (e) {
                    a.logError("Cannot get iframe document", e)
                }
                return t
            }
        }, a.getValueString = function(e, t, n) {
            return null == t ? n : a.isStr(t) ? t : a.isNumber(t) ? t.toString() : void a.logWarn("Unsuported type for param: " + e + " required type: String")
        };
        a.getHighestCpm = O("timeToRespond", (function(e, t) {
            return t < e
        })), a.getOldestHighestCpmBid = O("responseTimestamp", (function(e, t) {
            return t < e
        })), a.getLatestHighestCpmBid = O("responseTimestamp", (function(e, t) {
            return e < t
        }));

        function O(n, r) {
            return function(e, t) {
                return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e
            }
        }
        var B = function(e, t) {
            return e.getAdUnitPath() === t || e.getSlotElementId() === t
        }
    },
    1: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var c = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            v = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.registerBidder = function(t) {
            var n = Array.isArray(t.supportedMediaTypes) ? {
                supportedMediaTypes: t.supportedMediaTypes
            } : void 0;

            function r(e) {
                var t = l(e);
                i.default.registerBidAdapter(t, e.code, n)
            }
            r(t), Array.isArray(t.aliases) && t.aliases.forEach((function(e) {
                i.default.aliasRegistry[e] = t.code, r(v({}, t, {
                    code: e
                }))
            }))
        }, t.newBidder = l, t.isValid = E;
        var r = s(n(28)),
            i = s(n(8)),
            y = n(2),
            m = s(n(19)),
            o = n(15),
            a = n(18),
            u = n(66),
            b = s(n(4)),
            h = s(n(9)),
            d = s(n(6)),
            S = n(0);

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = ["requestId", "cpm", "ttl", "creativeId", "netRevenue", "currency"];

        function l(f) {
            return v(new r.default(f.code), {
                getSpec: function() {
                    return Object.freeze(f)
                },
                registerSyncs: l,
                callBids: function(o, a, r, n) {
                    if (Array.isArray(o.bids)) {
                        var u = {},
                            d = [],
                            e = o.bids.filter(g);
                        if (0 !== e.length) {
                            var s = {};
                            e.forEach((function(e) {
                                (s[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode)
                            }));
                            var t = f.buildRequests(e, o);
                            if (t && 0 !== t.length) {
                                Array.isArray(t) || (t = [t]);
                                var c = (0, S.delayExecution)(i, t.length);
                                t.forEach((function(i) {
                                    switch (i.method) {
                                        case "GET":
                                            n("" + i.url + (function(e) {
                                                if (e) return "?" + ("object" === (void 0 === e ? "undefined" : p(e)) ? (0, S.parseQueryStringParameters)(e) : e);
                                                return ""
                                            })(i.data), {
                                                success: e,
                                                error: t
                                            }, void 0, v({
                                                method: "GET",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        case "POST":
                                            n(i.url, {
                                                success: e,
                                                error: t
                                            }, "string" == typeof i.data ? i.data : JSON.stringify(i.data), v({
                                                method: "POST",
                                                contentType: "text/plain",
                                                withCredentials: !0
                                            }, i.options));
                                            break;
                                        default:
                                            (0, S.logWarn)("Skipping invalid request from " + f.code + ". Request type " + i.type + " must be GET or POST"), c()
                                    }

                                    function e(e, t) {
                                        try {
                                            e = JSON.parse(e)
                                        } catch (e) {}
                                        e = {
                                            body: e,
                                            headers: {
                                                get: t.getResponseHeader.bind(t)
                                            }
                                        }, d.push(e);
                                        var n = void 0;
                                        try {
                                            n = f.interpretResponse(e, i)
                                        } catch (e) {
                                            return (0, S.logError)("Bidder " + f.code + " failed to interpret the server's response. Continuing without bids", null, e), void c()
                                        }

                                        function r(e) {
                                            var t, n, r = s[e.requestId];
                                            if (r) {
                                                var i = v(m.default.createBid(b.default.STATUS.GOOD, r), e);
                                                t = r.adUnitCode, n = i, u[t] = !0, E(t, n, [o]) && a(t, n)
                                            } else(0, S.logWarn)("Bidder " + f.code + " made bid for unknown request ID: " + e.requestId + ". Ignoring.")
                                        }
                                        n && (n.forEach ? n.forEach(r) : r(n)), c(n)
                                    }

                                    function t(e) {
                                        (0, S.logError)("Server call for " + f.code + " failed: " + e + ". Continuing without bids."), c()
                                    }
                                }))
                            } else i()
                        } else i()
                    }

                    function i(e) {
                        var t = (e ? e[0] ? e : [e] : []).some((function(e) {
                                return "video" === e.mediaType
                            })),
                            n = y.config.getConfig("cache.url");
                        t && n || r(), h.default.emit(b.default.EVENTS.BIDDER_DONE, o), l(d, o.gdprConsent)
                    }
                }
            });

            function l(e, t) {
                if (f.getUserSyncs) {
                    var n = y.config.getConfig("userSync.filterSettings"),
                        r = f.getUserSyncs({
                            iframeEnabled: !!(y.config.getConfig("userSync.iframeEnabled") || n && (n.iframe || n.all)),
                            pixelEnabled: !!(y.config.getConfig("userSync.pixelEnabled") || n && (n.image || n.all))
                        }, e, t);
                    r && (Array.isArray(r) || (r = [r]), r.forEach((function(e) {
                        o.userSync.registerSync(e.type, f.code, e.url)
                    })))
                }
            }

            function g(e) {
                return !!f.isBidRequestValid(e) || ((0, S.logWarn)("Invalid bid sent to bidder " + f.code + ": " + JSON.stringify(e)), !1)
            }
        }

        function E(e, t, n) {
            function r(e) {
                return "Invalid bid from " + t.bidderCode + ". Ignoring bid: " + e
            }
            return e ? t ? (i = Object.keys(t), f.every((function(e) {
                return (0, d.default)(i, e)
            })) ? "native" !== t.mediaType || (0, a.nativeBidIsValid)(t, n) ? "video" !== t.mediaType || (0, u.isValidVideoBid)(t, n) ? !("banner" === t.mediaType && !(function(e, t, n) {
                if ((t.width || 0 === t.width) && (t.height || 0 === t.height)) return !0;
                var r = (0, S.getBidderRequest)(n, t.bidderCode, e),
                    i = r && r.bids && r.bids[0] && r.bids[0].sizes,
                    o = (0, S.parseSizesInput)(i);
                if (1 === o.length) {
                    var a = o[0].split("x"),
                        u = c(a, 2),
                        d = u[0],
                        s = u[1];
                    return t.width = d, t.height = s, !0
                }
                return !1
            })(e, t, n)) || ((0, S.logError)(r("Banner bids require a width and height")), !1) : ((0, S.logError)(r("Video bid does not have required vastUrl or renderer property")), !1) : ((0, S.logError)(r("Native bid missing some required properties.")), !1) : ((0, S.logError)(r("Bidder " + t.bidderCode + " is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.")), !1)) : ((0, S.logWarn)("Some adapter tried to add an undefined bid for " + e + "."), !1) : ((0, S.logWarn)("No adUnitCode was supplied to addBidResponse."), !1);
            var i
        }
    },
    10: function(e, t, n) {
        n(44), e.exports = n(14).Array.find
    },
    103: function(e, t, n) {
        "use strict";
        var r = n(16),
            i = n(34)(6),
            o = "findIndex",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            findIndex: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(27)(o)
    },
    11: function(e, t, n) {
        "use strict";
        var r, i = n(6),
            o = (r = i) && r.__esModule ? r : {
                default: r
            },
            a = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            })(n(0));
        var u = {},
            d = ["criteo"];

        function s(e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !0, t && "function" == typeof t && (n.readyState ? n.onreadystatechange = function() {
                "loaded" !== n.readyState && "complete" !== n.readyState || (n.onreadystatechange = null, t())
            } : n.onload = function() {
                t()
            }), n.src = e;
            var r = document.getElementsByTagName("head");
            (r = r.length ? r : document.getElementsByTagName("body")).length && (r = r[0]).insertBefore(n, r.firstChild)
        }
        t.loadExternalScript = function(e, t) {
            if (t && e)
                if ((0, o.default)(d, t)) {
                    if (!u[e]) {
                        a.logWarn("module " + t + " is loading external JavaScript");
                        var n = document.createElement("script");
                        n.type = "text/javascript", n.async = !0, n.src = e, a.insertElement(n), u[e] = !0
                    }
                } else a.logError(t + " not whitelisted for loading external JavaScript");
            else a.logError("cannot load external script without url and moduleCode")
        }, t.loadScript = function(t, e, n) {
            t ? n ? u[t] ? e && "function" == typeof e && (u[t].loaded ? e() : u[t].callbacks.push(e)) : (u[t] = {
                loaded: !1,
                callbacks: []
            }, e && "function" == typeof e && u[t].callbacks.push(e), s(t, (function() {
                u[t].loaded = !0;
                try {
                    for (var e = 0; e < u[t].callbacks.length; e++) u[t].callbacks[e]()
                } catch (e) {
                    a.logError("Error executing callback", "adloader.js:loadScript", e)
                }
            }))) : s(t, e) : a.logError("Error attempting to request empty URL", "adloader.js:loadScript")
        }
    },
    12: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = function(e, t) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return (function(e, t) {
                var n = [],
                    r = !0,
                    i = !1,
                    o = void 0;
                try {
                    for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        !r && u.return && u.return()
                    } finally {
                        if (i) throw o
                    }
                }
                return n
            })(e, t);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        };

        function i(e) {
            return e ? e.replace(/^\?/, "").split("&").reduce((function(e, t) {
                var n = t.split("="),
                    r = a(n, 2),
                    i = r[0],
                    o = r[1];
                return /\[\]$/.test(i) ? (e[i = i.replace("[]", "")] = e[i] || [], e[i].push(o)) : e[i] = o || "", e
            }), {}) : {}
        }

        function r(e) {
            return Object.keys(e).map((function(t) {
                return Array.isArray(e[t]) ? e[t].map((function(e) {
                    return t + "[]=" + e
                })).join("&") : t + "=" + e[t]
            })).join("&")
        }
        t.parseQS = i, t.formatQS = r, t.parse = function(e, t) {
            var n = document.createElement("a");
            t && "noDecodeWholeURL" in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
            var r = t && "decodeSearchAsString" in t && t.decodeSearchAsString;
            return {
                href: n.href,
                protocol: (n.protocol || "").replace(/:$/, ""),
                hostname: n.hostname,
                port: +n.port,
                pathname: n.pathname.replace(/^(?!\/)/, "/"),
                search: r ? n.search : i(n.search || ""),
                hash: (n.hash || "").replace(/^#/, ""),
                host: n.host || window.location.host
            }
        }, t.format = function(e) {
            return (e.protocol || "http") + "://" + (e.host || e.hostname + (e.port ? ":" + e.port : "")) + (e.pathname || "") + (e.search ? "?" + r(e.search || "") : "") + (e.hash ? "#" + e.hash : "")
        }
    },
    13: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.Renderer = r;
        var u = n(11),
            d = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            })(n(0));

        function r(e) {
            var t = this,
                n = e.url,
                r = e.config,
                i = e.id,
                o = e.callback,
                a = e.loaded;
            this.url = n, this.config = r, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function(e) {
                "function" == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : d.logError("Commands given to Renderer.push must be wrapped in a function")
            }, this.callback = o || function() {
                t.loaded = !0, t.process()
            }, (0, u.loadScript)(n, this.callback, !0)
        }
        r.install = function(e) {
            return new r({
                url: e.url,
                config: e.config,
                id: e.id,
                callback: e.callback,
                loaded: e.loaded
            })
        }, r.prototype.getConfig = function() {
            return this.config
        }, r.prototype.setRender = function(e) {
            this.render = e
        }, r.prototype.setEventHandlers = function(e) {
            this.handlers = e
        }, r.prototype.handleVideoEvent = function(e) {
            var t = e.id,
                n = e.eventName;
            "function" == typeof this.handlers[n] && this.handlers[n](), d.logMessage("Prebid Renderer event for id " + t + " type " + n)
        }, r.prototype.process = function() {
            for (; 0 < this.cmd.length;) try {
                this.cmd.shift().call()
            } catch (e) {
                d.logError("Error processing Renderer command: ", e)
            }
        }
    },
    14: function(e, t) {
        var n = e.exports = {
            version: "2.5.7"
        };
        "number" == typeof __e && (__e = n)
    },
    15: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.userSync = void 0;
        var i = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.newUserSync = a;
        var r, c = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }
            })(n(0)),
            f = n(2),
            o = n(6),
            l = (r = o) && r.__esModule ? r : {
                default: r
            };

        function a(e) {
            var t = {},
                o = {
                    image: [],
                    iframe: []
                },
                n = !1,
                a = {},
                u = {
                    image: !1,
                    iframe: !1
                },
                d = e.config;

            function r() {
                if (d.syncEnabled && e.browserSupportsCookies && !n) {
                    try {
                        !(function() {
                            if (!d.pixelEnabled && !u.image) return;
                            c.shuffle(o.image).forEach((function(e) {
                                var t = i(e, 2),
                                    n = t[0],
                                    r = t[1];
                                c.logMessage("Invoking image pixel user sync for bidder: " + n), c.triggerPixel(r)
                            }))
                        })(), (function() {
                            if (!d.iframeEnabled && !u.iframe) return;
                            c.shuffle(o.iframe).forEach((function(e) {
                                var t = i(e, 2),
                                    n = t[0],
                                    r = t[1];
                                c.logMessage("Invoking iframe user sync for bidder: " + n), c.insertUserSyncIframe(r)
                            }))
                        })()
                    } catch (e) {
                        return c.logError("Error firing user syncs", e)
                    }
                    o = {
                        image: [],
                        iframe: []
                    }, n = !0
                }
            }
            return f.config.getConfig("userSync", (function(e) {
                d = s(d, e.userSync)
            })), t.registerSync = function(e, t, n) {
                if (!d.syncEnabled || !c.isArray(o[e])) return c.logWarn('User sync type "' + e + '" not supported');
                if (!t) return c.logWarn("Bidder is required for registering sync");
                if (Number(a[t]) >= d.syncsPerBidder) return c.logWarn('Number of user syncs exceeded for "' + t + '"');
                if (d.filterSettings) {
                    if (function(e, t) {
                            var n = d.filterSettings;
                            if (function(e, t) {
                                    if (e.all && e[t]) return c.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.' + t + '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.'), !1;
                                    var n = e.all ? e.all : e[t],
                                        r = e.all ? "all" : t;
                                    if (!n) return !1;
                                    var i = n.filter,
                                        o = n.bidders;
                                    if (i && "include" !== i && "exclude" !== i) return c.logWarn('UserSync "filterSettings.' + r + ".filter\" setting '" + i + "' is not a valid option; use either 'include' or 'exclude'."), !1;
                                    if ("*" !== o && !(Array.isArray(o) && 0 < o.length && o.every((function(e) {
                                            return c.isStr(e) && "*" !== e
                                        })))) return c.logWarn('Detected an invalid setup in userSync "filterSettings.' + r + ".bidders\"; use either '*' (to represent all bidders) or an array of bidders."), !1;
                                    return !0
                                }(n, e)) {
                                u[e] = !0;
                                var r = n.all ? n.all : n[e],
                                    i = "*" === r.bidders ? [t] : r.bidders,
                                    o = r.filter || "include",
                                    a = {
                                        include: function(e, t) {
                                            return !(0, l.default)(e, t)
                                        },
                                        exclude: function(e, t) {
                                            return (0, l.default)(e, t)
                                        }
                                    };
                                return a[o](i, t)
                            }
                            return !1
                        }(e, t)) return c.logWarn("Bidder '" + t + "' is not permitted to register their userSync " + e + " pixels as per filterSettings config.")
                } else if (d.enabledBidders && d.enabledBidders.length && d.enabledBidders.indexOf(t) < 0) return c.logWarn('Bidder "' + t + '" not permitted to register their userSync pixels.');
                var r, i;
                o[e].push([t, n]), (r = a)[i = t] ? r[i] += 1 : r[i] = 1, a = r
            }, t.syncUsers = function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                if (e) return setTimeout(r, Number(e));
                r()
            }, t.triggerUserSyncs = function() {
                d.enableOverride && t.syncUsers()
            }, t
        }
        f.config.setDefaults({
            userSync: {
                syncEnabled: !0,
                pixelEnabled: !0,
                syncsPerBidder: 5,
                syncDelay: 3e3
            }
        });
        var u = !c.isSafariBrowser() && c.cookiesAreEnabled();
        t.userSync = a({
            config: f.config.getConfig("userSync"),
            browserSupportsCookies: u
        })
    },
    16: function(e, t, n) {
        var v = n(20),
            y = n(14),
            m = n(32),
            b = n(46),
            h = n(53),
            S = "prototype",
            E = function(e, t, n) {
                var r, i, o, a = e & E.F,
                    u = e & E.G,
                    d = e & E.S,
                    s = e & E.P,
                    c = e & E.B,
                    f = e & E.W,
                    l = u ? y : y[t] || (y[t] = {}),
                    g = l[S],
                    p = u ? v : d ? v[t] : (v[t] || {})[S];
                for (r in u && (n = t), n)(i = !a && p && void 0 !== p[r]) && h(l, r) || (o = i ? p[r] : n[r], l[r] = u && "function" != typeof p[r] ? n[r] : c && i ? m(o, v) : f && p[r] == o ? (function(r) {
                    var e = function(e, t, n) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                                case 0:
                                    return new r;
                                case 1:
                                    return new r(e);
                                case 2:
                                    return new r(e, t)
                            }
                            return new r(e, t, n)
                        }
                        return r.apply(this, arguments)
                    };
                    return e[S] = r[S], e
                })(o) : s && "function" == typeof o ? m(Function.call, o) : o, s && ((l.virtual || (l.virtual = {}))[r] = o, e & E.R && g && !g[r] && b(g, r, o)))
            };
        E.F = 1, E.G = 2, E.S = 4, E.P = 8, E.B = 16, E.W = 32, E.U = 64, E.R = 128, e.exports = E
    },
    17: function(e, t) {
        e.exports = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        }
    },
    18: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonNativeBidder = t.nativeBidder = t.nativeAdUnit = t.NATIVE_TARGETING_KEYS = t.NATIVE_KEYS = t.nativeAdapters = void 0;
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.processNativeAdUnitParams = function(e) {
            if (e && e.type && (function(e) {
                    if (!e || !(0, u.default)(Object.keys(c), e)) return (0, a.logError)(e + " nativeParam is not supported"), !1;
                    return !0
                })(e.type)) return c[e.type];
            return e
        }, t.nativeBidIsValid = function(t, e) {
            var n = (0, a.getBidRequest)(t.adId, e);
            if (!n) return !1;
            if (!(0, a.deepAccess)(t, "native.clickUrl")) return !1;
            if ((0, a.deepAccess)(t, "native.image") && (!(0, a.deepAccess)(t, "native.image.height") || !(0, a.deepAccess)(t, "native.image.width"))) return !1;
            if ((0, a.deepAccess)(t, "native.icon") && (!(0, a.deepAccess)(t, "native.icon.height") || !(0, a.deepAccess)(t, "native.icon.width"))) return !1;
            var r = n.nativeParams;
            if (!r) return !0;
            var i = Object.keys(r).filter((function(e) {
                    return r[e].required
                })),
                o = Object.keys(t.native).filter((function(e) {
                    return t.native[e]
                }));
            return i.every((function(e) {
                return (0, u.default)(o, e)
            }))
        }, t.fireNativeTrackers = function(e, t) {
            var n = void 0;
            "click" === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && (0, a.insertHtmlIntoIframe)(t.native.javascriptTrackers));
            (n || []).forEach(a.triggerPixel)
        }, t.getNativeTargeting = function(r) {
            var i = {};
            return Object.keys(r.native).forEach((function(e) {
                var t = s[e],
                    n = r.native[e];
                "object" === (void 0 === n ? "undefined" : o(n)) && n.url && (n = n.url), t && (i[t] = n)
            })), i
        };
        var r, a = n(0),
            i = n(6),
            u = (r = i) && r.__esModule ? r : {
                default: r
            };
        var d = t.nativeAdapters = [],
            s = t.NATIVE_KEYS = {
                title: "hb_native_title",
                body: "hb_native_body",
                sponsoredBy: "hb_native_brand",
                image: "hb_native_image",
                icon: "hb_native_icon",
                clickUrl: "hb_native_linkurl",
                cta: "hb_native_cta"
            },
            c = (t.NATIVE_TARGETING_KEYS = Object.keys(s).map((function(e) {
                return s[e]
            })), {
                image: {
                    image: {
                        required: !0
                    },
                    title: {
                        required: !0
                    },
                    sponsoredBy: {
                        required: !0
                    },
                    clickUrl: {
                        required: !0
                    },
                    body: {
                        required: !1
                    },
                    icon: {
                        required: !1
                    }
                }
            });
        t.nativeAdUnit = function(e) {
            var t = "native" === e.mediaType,
                n = (0, a.deepAccess)(e, "mediaTypes.native");
            return t || n
        };
        var f = t.nativeBidder = function(e) {
            return (0, u.default)(d, e.bidder)
        };
        t.hasNonNativeBidder = function(e) {
            return e.bids.filter((function(e) {
                return !f(e)
            })).length
        }
    },
    189: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.store = function(e, t) {
            var n = {
                puts: e.map(a)
            };
            (0, i.ajax)(o.config.getConfig("cache.url"), (r = t, {
                success: function(e) {
                    var t = void 0;
                    try {
                        t = JSON.parse(e).responses
                    } catch (e) {
                        return void r(e, [])
                    }
                    t ? r(null, t) : r(new Error("The cache server didn't respond with a responses property."), [])
                },
                error: function(e, t) {
                    r(new Error("Error storing video ad in the cache: " + e + ": " + JSON.stringify(t)), [])
                }
            }), JSON.stringify(n), {
                contentType: "text/plain",
                withCredentials: !0
            });
            var r
        }, t.getCacheUrl = function(e) {
            return o.config.getConfig("cache.url") + "?uuid=" + e
        };
        var i = n(7),
            o = n(2);

        function a(e) {
            var t, n;
            return {
                type: "xml",
                value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA[' + t + "]]></VASTAdTagURI>\n        <Impression>" + (n ? "<![CDATA[" + n + "]]>" : "") + "</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>")
            }
        }
    },
    19: function(e, t, n) {
        "use strict";
        var o = n(0);

        function r(e, t) {
            var n = t && t.bidId || o.getUniqueIdentifierStr(),
                r = t && t.src || "client",
                i = e || 0;
            this.bidderCode = t && t.bidder || "", this.width = 0, this.height = 0, this.statusMessage = (function() {
                switch (i) {
                    case 0:
                        return "Pending";
                    case 1:
                        return "Bid available";
                    case 2:
                        return "Bid returned empty or error response";
                    case 3:
                        return "Bid timed out"
                }
            })(), this.adId = n, this.mediaType = "banner", this.source = r, this.getStatusCode = function() {
                return i
            }, this.getSize = function() {
                return this.width + "x" + this.height
            }
        }
        t.createBid = function(e, t) {
            return new r(e, t)
        }
    },
    2: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.config = t.RANDOM = void 0;
        var d = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.newConfig = u;
        var r = n(31),
            c = o(n(10)),
            f = o(n(6)),
            i = n(21);

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var l = n(0),
            g = !1,
            p = 3e3,
            v = window.location.origin,
            y = 100,
            m = !0,
            b = 200,
            a = t.RANDOM = "random",
            h = {};
        h[a] = !0, h.fixed = !0;
        var S = a,
            E = {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            A = "*";

        function u() {
            var o = [],
                a = void 0,
                u = void 0;

            function e() {
                function i(t) {
                    return (0, c.default)(Object.keys(E), (function(e) {
                        return t === E[e]
                    }))
                }

                function o(e) {
                    if (!e) return l.logError("Prebid Error: no value passed to `setPriceGranularity()`"), !1;
                    if ("string" == typeof e) i(e) || l.logWarn("Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.");
                    else if ("object" === (void 0 === e ? "undefined" : s(e)) && !(0, r.isValidPriceConfig)(e)) return l.logError("Invalid custom price value passed to `setPriceGranularity()`"), !1;
                    return !0
                }
                a = {}, u = {
                    _debug: g,
                    get debug() {
                        return this._debug
                    },
                    set debug(e) {
                        this._debug = e
                    },
                    _bidderTimeout: p,
                    get bidderTimeout() {
                        return this._bidderTimeout
                    },
                    set bidderTimeout(e) {
                        this._bidderTimeout = e
                    },
                    _publisherDomain: v,
                    get publisherDomain() {
                        return this._publisherDomain
                    },
                    set publisherDomain(e) {
                        this._publisherDomain = e
                    },
                    _cookieSyncDelay: y,
                    get cookieSyncDelay() {
                        return pbjs.cookieSyncDelay || this._cookieSyncDelay
                    },
                    set cookieSyncDelay(e) {
                        this._cookieSyncDelay = e
                    },
                    _priceGranularity: E.MEDIUM,
                    set priceGranularity(e) {
                        o(e) && ("string" == typeof e ? this._priceGranularity = i(e) ? e : E.MEDIUM : "object" === (void 0 === e ? "undefined" : s(e)) && (this._customPriceBucket = e, this._priceGranularity = E.CUSTOM, l.logMessage("Using custom price granularity")))
                    },
                    get priceGranularity() {
                        return this._priceGranularity
                    },
                    _customPriceBucket: {},
                    get customPriceBucket() {
                        return this._customPriceBucket
                    },
                    _mediaTypePriceGranularity: {},
                    get mediaTypePriceGranularity() {
                        return this._mediaTypePriceGranularity
                    },
                    set mediaTypePriceGranularity(n) {
                        var r = this;
                        this._mediaTypePriceGranularity = Object.keys(n).reduce((function(e, t) {
                            return o(n[t]) ? "string" == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : "object" === (void 0 === n ? "undefined" : s(n)) && (e[t] = n[t], l.logMessage("Using custom price granularity for " + t)) : l.logWarn("Invalid price granularity for media type: " + t), e
                        }), {})
                    },
                    _sendAllBids: m,
                    get enableSendAllBids() {
                        return this._sendAllBids
                    },
                    set enableSendAllBids(e) {
                        this._sendAllBids = e
                    },
                    _bidderSequence: S,
                    get bidderSequence() {
                        return this._bidderSequence
                    },
                    set bidderSequence(e) {
                        h[e] ? this._bidderSequence = e : l.logWarn("Invalid order: " + e + ". Bidder Sequence was not set.")
                    },
                    _timoutBuffer: b,
                    get timeoutBuffer() {
                        return this._timoutBuffer
                    },
                    set timeoutBuffer(e) {
                        this._timoutBuffer = e
                    }
                }
            }
            var t = (0, i.createHook)("asyncSeries", (function(n) {
                if ("object" === (void 0 === n ? "undefined" : s(n))) {
                    var i, t, e = Object.keys(n),
                        r = {};
                    e.forEach((function(e) {
                        var t = n[e];
                        "object" === s(a[e]) && "object" === (void 0 === t ? "undefined" : s(t)) && (t = d({}, a[e], t)), r[e] = u[e] = t
                    })), i = r, t = Object.keys(i), o.filter((function(e) {
                        return (0, f.default)(t, e.topic)
                    })).forEach((function(e) {
                        var t, n, r;
                        e.callback((t = {}, n = e.topic, r = i[e.topic], n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r, t))
                    })), o.filter((function(e) {
                        return e.topic === A
                    })).forEach((function(e) {
                        return e.callback(i)
                    }))
                } else l.logError("setConfig options must be an object")
            }));
            return e(), {
                getConfig: function() {
                    if (arguments.length <= 1 && "function" != typeof(arguments.length <= 0 ? void 0 : arguments[0])) {
                        var e = arguments.length <= 0 ? void 0 : arguments[0];
                        return e ? l.deepAccess(u, e) : u
                    }
                    return function(e, t) {
                        var n = t;
                        if ("string" != typeof e && (n = e, e = A), "function" == typeof n) return o.push({
                                topic: e,
                                callback: n
                            }),
                            function() {
                                o.splice(o.indexOf(t), 1)
                            };
                        l.logError("listener must be a function")
                    }.apply(void 0, arguments)
                },
                setConfig: t,
                setDefaults: function(e) {
                    "object" === (void 0 === a ? "undefined" : s(a)) ? (d(a, e), d(u, e)) : l.logError("defaults must be an object")
                },
                resetConfig: e
            }
        }
        t.config = u()
    },
    20: function(e, t) {
        var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    },
    21: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.createHook = function(r, i, e) {
            var u = [{
                    fn: i,
                    priority: 0
                }],
                o = {
                    sync: function() {
                        for (var t = this, e = arguments.length, n = Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        u.forEach((function(e) {
                            e.fn.apply(t, n)
                        }))
                    },
                    asyncSeries: function() {
                        for (var o = this, e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        var a = 0;
                        return u[a].fn.apply(this, t.concat((function e() {
                            for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                            var i = u[++a];
                            if ("object" === (void 0 === i ? "undefined" : d(i)) && "function" == typeof i.fn) return i.fn.apply(o, n.concat(e))
                        })))
                    }
                };
            if (!o[r]) throw "invalid hook type";
            var t = {
                addHook: function(e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 10;
                    "function" == typeof e && (u.push({
                        fn: e,
                        priority: t
                    }), u.sort((function(e, t) {
                        return t.priority - e.priority
                    })))
                },
                removeHook: function(t) {
                    u = u.filter((function(e) {
                        return e.fn === i || e.fn !== t
                    }))
                },
                hasHook: function(t) {
                    return u.some((function(e) {
                        return e.fn === t
                    }))
                }
            };
            "string" == typeof e && (s[e] = t);
            return a((function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                if (1 === u.length && u[0].fn === i) return i.apply(this, t);
                return o[r].apply(this, t)
            }), t)
        };
        var s = t.hooks = {}
    },
    22: function(e, t, n) {
        n(103), e.exports = n(14).Array.findIndex
    },
    23: function(e, t, n) {
        e.exports = !n(33)((function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    24: function(e, t) {
        var n = {}.toString;
        e.exports = function(e) {
            return n.call(e).slice(8, -1)
        }
    },
    25: function(e, t) {
        e.exports = function(e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e
        }
    },
    26: function(e, t, n) {
        var r = n(57)("wks"),
            i = n(59),
            o = n(20).Symbol,
            a = "function" == typeof o;
        (e.exports = function(e) {
            return r[e] || (r[e] = a && o[e] || (a ? o : i)("Symbol." + e))
        }).store = r
    },
    27: function(e, t) {
        e.exports = function() {}
    },
    28: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = function(e) {
            var t = e;
            return {
                callBids: function() {},
                setBidderCode: function(e) {
                    t = e
                },
                getBidderCode: function() {
                    return t
                }
            }
        }
    },
    29: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.auctionManager = void 0, t.newAuctionManager = d;
        var r, i = n(0),
            s = n(41),
            o = n(10),
            a = (r = o) && r.__esModule ? r : {
                default: r
            };
        var u = n(4);

        function d() {
            var d = [],
                r = {};
            return r.addWinningBid = function(t) {
                var e = (0, a.default)(d, (function(e) {
                    return e.getAuctionId() === t.auctionId
                }));
                e ? e.addWinningBid(t) : utils.logWarn("Auction not found when adding winning bid")
            }, r.getAllWinningBids = function() {
                return d.map((function(e) {
                    return e.getWinningBids()
                })).reduce(i.flatten, [])
            }, r.getBidsRequested = function() {
                return d.map((function(e) {
                    return e.getBidRequests()
                })).reduce(i.flatten, [])
            }, r.getBidsReceived = function() {
                return d.map((function(e) {
                    if (e.getAuctionStatus() === s.AUCTION_COMPLETED) return e.getBidsReceived()
                })).reduce(i.flatten, []).filter((function(e) {
                    return e
                }))
            }, r.getAdUnits = function() {
                return d.map((function(e) {
                    return e.getAdUnits()
                })).reduce(i.flatten, [])
            }, r.getAdUnitCodes = function() {
                return d.map((function(e) {
                    return e.getAdUnitCodes()
                })).reduce(i.flatten, []).filter(i.uniques)
            }, r.createAuction = function(e) {
                var t, n = e.adUnits,
                    r = e.adUnitCodes,
                    i = e.callback,
                    o = e.cbTimeout,
                    a = e.labels,
                    u = (0, s.newAuction)({
                        adUnits: n,
                        adUnitCodes: r,
                        callback: i,
                        cbTimeout: o,
                        labels: a
                    });
                return t = u, d.push(t), u
            }, r.findBidByAdId = function(t) {
                return (0, a.default)(d.map((function(e) {
                    return e.getBidsReceived()
                })).reduce(i.flatten, []), (function(e) {
                    return e.adId === t
                }))
            }, r.getStandardBidderAdServerTargeting = function() {
                return (0, s.getStandardBidderSettings)()[u.JSON_MAPPING.ADSERVER_TARGETING]
            }, r.setStatusForBids = function(e, t) {
                var n = r.findBidByAdId(e);
                n && (n.status = t)
            }, r
        }
        t.auctionManager = d()
    },
    3: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        t.NATIVE = "native", t.VIDEO = "video", t.BANNER = "banner"
    },
    30: function(nr, or) {
        var pr;
        pr = (function() {
            return this
        })();
        try {
            pr = pr || Function("return this")() || eval("this")
        } catch (e) {
            "object" == typeof window && (pr = window)
        }
        nr.exports = pr
    },
    31: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.isValidPriceConfig = t.getPriceBucketString = void 0;
        var r, i = n(10),
            v = (r = i) && r.__esModule ? r : {
                default: r
            };
        var o = n(0),
            y = 2,
            a = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .5
                }]
            },
            u = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .1
                }]
            },
            d = {
                buckets: [{
                    min: 0,
                    max: 20,
                    increment: .01
                }]
            },
            s = {
                buckets: [{
                    min: 0,
                    max: 3,
                    increment: .01
                }, {
                    min: 3,
                    max: 8,
                    increment: .05
                }, {
                    min: 8,
                    max: 20,
                    increment: .5
                }]
            },
            c = {
                buckets: [{
                    min: 0,
                    max: 5,
                    increment: .05
                }, {
                    min: 5,
                    max: 10,
                    increment: .1
                }, {
                    min: 10,
                    max: 20,
                    increment: .5
                }]
            };

        function f(n, e, r) {
            var i = "";
            if (!m(e)) return i;
            var t, o, a, u, d, s, c, f, l, g = e.buckets.reduce((function(e, t) {
                    return e.max > t.max ? e : t
                }), {
                    max: 0
                }),
                p = (0, v.default)(e.buckets, (function(e) {
                    if (n > g.max * r) {
                        var t = e.precision;
                        void 0 === t && (t = y), i = (e.max * r).toFixed(t)
                    } else if (n <= e.max * r && n >= e.min * r) return e
                }));
            return p && (t = n, a = r, u = void 0 !== (o = p).precision ? o.precision : y, d = o.increment * a, s = o.min * a, c = Math.pow(10, u + 2), f = (t * c - s * c) / (d * c), l = Math.floor(f) * d + s, i = (l = Number(l.toFixed(10))).toFixed(u)), i
        }

        function m(e) {
            if (o.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets)) return !1;
            var t = !0;
            return e.buckets.forEach((function(e) {
                void 0 !== e.min && e.max && e.increment || (t = !1)
            })), t
        }
        t.getPriceBucketString = function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1,
                r = parseFloat(e);
            return isNaN(r) && (r = ""), {
                low: "" === r ? "" : f(e, a, n),
                med: "" === r ? "" : f(e, u, n),
                high: "" === r ? "" : f(e, d, n),
                auto: "" === r ? "" : f(e, c, n),
                dense: "" === r ? "" : f(e, s, n),
                custom: "" === r ? "" : f(e, t, n)
            }
        }, t.isValidPriceConfig = m
    },
    32: function(e, t, n) {
        var o = n(45);
        e.exports = function(r, i, e) {
            if (o(r), void 0 === i) return r;
            switch (e) {
                case 1:
                    return function(e) {
                        return r.call(i, e)
                    };
                case 2:
                    return function(e, t) {
                        return r.call(i, e, t)
                    };
                case 3:
                    return function(e, t, n) {
                        return r.call(i, e, t, n)
                    }
            }
            return function() {
                return r.apply(i, arguments)
            }
        }
    },
    33: function(e, t) {
        e.exports = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        }
    },
    34: function(e, t, n) {
        var h = n(32),
            S = n(35),
            E = n(54),
            A = n(36),
            r = n(55);
        e.exports = function(f, e) {
            var l = 1 == f,
                g = 2 == f,
                p = 3 == f,
                v = 4 == f,
                y = 6 == f,
                m = 5 == f || y,
                b = e || r;
            return function(e, t, n) {
                for (var r, i, o = E(e), a = S(o), u = h(t, n, 3), d = A(a.length), s = 0, c = l ? b(e, d) : g ? b(e, 0) : void 0; s < d; s++)
                    if ((m || s in a) && (i = u(r = a[s], s, o), f))
                        if (l) c[s] = i;
                        else if (i) switch (f) {
                    case 3:
                        return !0;
                    case 5:
                        return r;
                    case 6:
                        return s;
                    case 2:
                        c.push(r)
                } else if (v) return !1;
                return y ? -1 : p || v ? v : c
            }
        }
    },
    35: function(e, t, n) {
        var r = n(24);
        e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
            return "String" == r(e) ? e.split("") : Object(e)
        }
    },
    36: function(e, t, n) {
        var r = n(37),
            i = Math.min;
        e.exports = function(e) {
            return 0 < e ? i(r(e), 9007199254740991) : 0
        }
    },
    37: function(e, t) {
        var n = Math.ceil,
            r = Math.floor;
        e.exports = function(e) {
            return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e)
        }
    },
    38: function(e, t, n) {
        var r = n(24);
        e.exports = Array.isArray || function(e) {
            return "Array" == r(e)
        }
    },
    39: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.getGlobal = function() {
            return window.pbjs
        }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || []
    },
    4: function(e, t) {
        e.exports = {
            JSON_MAPPING: {
                PL_CODE: "code",
                PL_SIZE: "sizes",
                PL_BIDS: "bids",
                BD_BIDDER: "bidder",
                BD_ID: "paramsd",
                BD_PL_ID: "placementId",
                ADSERVER_TARGETING: "adserverTargeting",
                BD_SETTING_STANDARD: "standard"
            },
            REPO_AND_VERSION: "prebid_prebid_1.15.0",
            DEBUG_MODE: "pbjs_debug",
            STATUS: {
                GOOD: 1,
                NO_BID: 2
            },
            CB: {
                TYPE: {
                    ALL_BIDS_BACK: "allRequestedBidsBack",
                    AD_UNIT_BIDS_BACK: "adUnitBidsBack",
                    BID_WON: "bidWon",
                    REQUEST_BIDS: "requestBids"
                }
            },
            EVENTS: {
                AUCTION_INIT: "auctionInit",
                AUCTION_END: "auctionEnd",
                BID_ADJUSTMENT: "bidAdjustment",
                BID_TIMEOUT: "bidTimeout",
                BID_REQUESTED: "bidRequested",
                BID_RESPONSE: "bidResponse",
                BID_WON: "bidWon",
                BIDDER_DONE: "bidderDone",
                SET_TARGETING: "setTargeting",
                REQUEST_BIDS: "requestBids",
                ADD_AD_UNITS: "addAdUnits",
                AD_RENDER_FAILED: "adRenderFailed"
            },
            AD_RENDER_FAILED_REASON: {
                PREVENT_WRITING_ON_MAIN_DOCUMENT: "preventWritingOnMainDocuemnt",
                NO_AD: "noAd",
                EXCEPTION: "exception",
                CANNOT_FIND_AD: "cannotFindAd",
                MISSING_DOC_OR_ADID: "missingDocOrAdid"
            },
            EVENT_ID_PATHS: {
                bidWon: "adUnitCode"
            },
            GRANULARITY_OPTIONS: {
                LOW: "low",
                MEDIUM: "medium",
                HIGH: "high",
                AUTO: "auto",
                DENSE: "dense",
                CUSTOM: "custom"
            },
            TARGETING_KEYS: ["hb_bidder", "hb_adid", "hb_pb", "hb_size", "hb_deal", "hb_source", "hb_format"],
            S2S: {
                SRC: "s2s",
                DEFAULT_ENDPOINT: "https://prebid.adnxs.com/pbs/v1/openrtb2/auction",
                SYNCED_BIDDERS_KEY: "pbjsSyncs"
            }
        }
    },
    40: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.targeting = t.isBidNotExpired = t.RENDERED = t.BID_TARGETING_SET = void 0;
        var h = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.getHighestCpmBidsFromBidPool = B, t.newTargeting = c;
        var r, S = n(0),
            E = n(2),
            A = n(18),
            i = n(29),
            o = n(6),
            T = (r = o) && r.__esModule ? r : {
                default: r
            };

        function I(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var _ = n(0),
            w = n(4),
            C = [],
            a = t.BID_TARGETING_SET = "targetingSet",
            u = t.RENDERED = "rendered",
            O = 20,
            d = (t.isBidNotExpired = function(e) {
                return e.responseTimestamp + 1e3 * e.ttl + 1e3 > (0, S.timestamp)()
            }, function(e) {
                return e && (e.status && !(0, T.default)([a, u], e.status) || !e.status)
            });

        function B(e, n) {
            var r = [],
                i = (0, S.groupBy)(e, "adUnitCode");
            return Object.keys(i).forEach((function(e) {
                var t = (0, S.groupBy)(i[e], "bidderCode");
                Object.keys(t).forEach((function(e) {
                    return r.push(t[e].reduce(n, s()))
                }))
            })), r
        }

        function s(e) {
            return {
                adUnitCode: e,
                cpm: 0,
                adserverTargeting: {},
                timeToRespond: 0
            }
        }

        function c(n) {
            var g = {};

            function p(e) {
                return "string" == typeof e ? [e] : _.isArray(e) ? e : n.getAdUnitCodes() || []
            }

            function v() {
                return B(n.getBidsReceived().filter(d).filter(t.isBidNotExpired), S.getOldestHighestCpmBid)
            }

            function y() {
                return n.getStandardBidderAdServerTargeting().map((function(e) {
                    return e.key
                })).concat(w.TARGETING_KEYS).filter(S.uniques)
            }

            function m(r, i, e, t) {
                return Object.keys(i.adserverTargeting).filter(o()).forEach((function(e) {
                    var t, n;
                    r.length && r.filter((n = e, function(e) {
                        return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n]
                    })).forEach((t = e, function(e) {
                        _.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(S.uniques), delete i.adserverTargeting[t]
                    }))
                })), r.push(i), r
            }

            function o() {
                var t = y();
                return function(e) {
                    return -1 === t.indexOf(e)
                }
            }

            function b(t) {
                return I({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(o()).map((function(e) {
                    return I({}, e.substring(0, O), [t.adserverTargeting[e]])
                })))
            }
            return g.resetPresetTargeting = function(e) {
                if ((0, S.isGptPubadsDefined)()) {
                    var t = p(e),
                        r = n.getAdUnits().filter((function(e) {
                            return (0, T.default)(t, e.code)
                        }));
                    window.googletag.pubads().getSlots().forEach((function(n) {
                        C.forEach((function(t) {
                            r.forEach((function(e) {
                                e.code !== n.getAdUnitPath() && e.code !== n.getSlotElementId() || n.setTargeting(t, null)
                            }))
                        }))
                    }))
                }
            }, g.getAllTargeting = function(e) {
                var r, t, i, n, o, a, u, d, s, c = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v(),
                    f = p(e),
                    l = (a = f, u = c, d = g.getWinningBids(a, u), s = y(), d = d.map((function(t) {
                        return I({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter((function(e) {
                            return void 0 === t.sendStandardTargeting || t.sendStandardTargeting || -1 === s.indexOf(e)
                        })).map((function(e) {
                            return I({}, "hb_deal" === e ? (e + "_" + t.bidderCode).substring(0, O) : e.substring(0, O), [t.adserverTargeting[e]])
                        })))
                    }))).concat((n = f, o = c, o.filter((function(e) {
                        return (0, T.default)(n, e.adUnitCode)
                    })).map((function(e) {
                        return h({}, e)
                    })).reduce(m, []).map(b).filter((function(e) {
                        return e
                    })))).concat(E.config.getConfig("enableSendAllBids") ? (r = f, t = c, i = w.TARGETING_KEYS.concat(A.NATIVE_TARGETING_KEYS), B(t, S.getHighestCpm).map((function(t) {
                        if (t.adserverTargeting && r && (_.isArray(r) && (0, T.default)(r, t.adUnitCode) || "string" == typeof r && t.adUnitCode === r)) return I({}, t.adUnitCode, (n = t, i.filter((function(e) {
                            return void 0 !== t.adserverTargeting[e]
                        })).map((function(e) {
                            return I({}, (e + "_" + n.bidderCode).substring(0, O), [n.adserverTargeting[e]])
                        }))));
                        var n
                    })).filter((function(e) {
                        return e
                    }))) : []);
                return l.map((function(t) {
                    Object.keys(t).map((function(e) {
                        t[e].map((function(e) {
                            -1 === C.indexOf(Object.keys(e)[0]) && (C = Object.keys(e).concat(C))
                        }))
                    }))
                })), l = l.map((function(e) {
                    return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].map((function(e) {
                        return I({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(", "))
                    })).reduce((function(e, t) {
                        return h(t, e)
                    }), {}))
                })).reduce((function(e, t) {
                    var n = Object.keys(t)[0];
                    return e[n] = h({}, e[n], t[n]), e
                }), {}), f.forEach((function(e) {
                    l[e] || (l[e] = {})
                })), l
            }, g.setTargetingForGPT = function(i, e) {
                window.googletag.pubads().getSlots().forEach((function(r) {
                    Object.keys(i).filter(e ? e(r) : (0, S.isAdUnitCodeMatchingSlot)(r)).forEach((function(n) {
                        return Object.keys(i[n]).forEach((function(t) {
                            var e = i[n][t].split(",");
                            (e = 1 < e.length ? [e] : e).map((function(e) {
                                return _.logMessage("Attempting to set key value for slot: " + r.getSlotElementId() + " key: " + t + " value: " + e), e
                            })).forEach((function(e) {
                                r.setTargeting(t, e)
                            }))
                        }))
                    }))
                }))
            }, g.getWinningBids = function(e) {
                var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : v(),
                    t = p(e);
                return n.filter((function(e) {
                    return (0, T.default)(t, e.adUnitCode)
                })).filter((function(e) {
                    return 0 < e.cpm
                })).map((function(e) {
                    return e.adUnitCode
                })).filter(S.uniques).map((function(t) {
                    return n.filter((function(e) {
                        return e.adUnitCode === t ? e : null
                    })).reduce(S.getHighestCpm, s(t))
                }))
            }, g.setTargetingForAst = function() {
                var r = g.getAllTargeting();
                Object.keys(r).forEach((function(n) {
                    return Object.keys(r[n]).forEach((function(e) {
                        if (_.logMessage("Attempting to set targeting for targetId: " + n + " key: " + e + " value: " + r[n][e]), _.isStr(r[n][e]) || _.isArray(r[n][e])) {
                            var t = {};
                            e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t)
                        }
                    }))
                }))
            }, g.isApntagDefined = function() {
                if (window.apntag && _.isFn(window.apntag.setKeywords)) return !0
            }, g
        }
        t.targeting = c(i.auctionManager)
    },
    41: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.addBidResponse = t.AUCTION_COMPLETED = t.AUCTION_IN_PROGRESS = t.AUCTION_STARTED = void 0;
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            g = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
        t.newAuction = function(e) {
            var f = e.adUnits,
                t = e.adUnitCodes,
                n = e.callback,
                r = e.cbTimeout,
                i = e.labels,
                d = f,
                s = i,
                l = t,
                g = [],
                p = [],
                c = void 0,
                v = C.generateUUID(),
                y = void 0,
                m = n,
                b = void 0,
                h = r,
                o = [];

            function S(e, t) {
                if (t && clearTimeout(b), null != m) {
                    var n = [];
                    e && (C.logMessage("Auction " + v + " timedOut"), u = p, d = (a = g).filter((function(e) {
                        return !e.doneCbCallCount
                    })).map((function(e) {
                        return e.bidderCode
                    })).filter(A.uniques), s = u.map((function(e) {
                        return e.bidder
                    })).filter(A.uniques), c = d.filter((function(e) {
                        return !(0, _.default)(s, e)
                    })), (n = a.map((function(e) {
                        return (e.bids || []).filter((function(e) {
                            return (0, _.default)(c, e.bidder)
                        }))
                    })).reduce(A.flatten, []).map((function(e) {
                        return {
                            bidId: e.bidId,
                            bidder: e.bidder,
                            adUnitCode: e.adUnitCode,
                            auctionId: e.auctionId
                        }
                    }))).length && B.emit(N.EVENTS.BID_TIMEOUT, n)), B.emit(N.EVENTS.AUCTION_END, {
                        auctionId: v
                    });
                    try {
                        y = D;
                        var r = l,
                            i = [p.filter(A.adUnitsFilter.bind(this, r)).reduce(q, {})];
                        m.apply(pbjs, i)
                    } catch (e) {
                        C.logError("Error executing bidsBackHandler", null, e)
                    } finally {
                        n.length && O.callTimedOutBidders(f, n, h);
                        var o = T.config.getConfig("userSync") || {};
                        o.enableOverride || w(o.syncDelay)
                    }
                    m = null
                }
                var a, u, d, s, c
            }

            function E() {
                g.every((function(e) {
                    return 1 <= e.doneCbCallCount
                })) && (C.logInfo("Bids Received for Auction with id: " + v, p), y = D, S(!1, !0))
            }
            return {
                addBidReceived: function(e) {
                    p = p.concat(e)
                },
                executeCallback: S,
                callBids: function() {
                    var r = this;
                    y = R, c = Date.now();
                    var i = O.makeBidRequests(d, c, v, h, s);
                    C.logInfo("Bids Requested for Auction with id: " + v, i), i.forEach((function(e) {
                        var t;
                        t = e, g = g.concat(t)
                    }));
                    var o = {},
                        e = {
                            bidRequests: i,
                            run: function() {
                                var e, t;
                                e = S.bind(null, !0), t = setTimeout(e, h), b = t, y = U;
                                var n = {
                                    timestamp: c,
                                    auctionId: v,
                                    timeout: h
                                };
                                B.emit(N.EVENTS.AUCTION_INIT, n), O.callBids(d, i, M.bind(r), function(e) {
                                    var t = e;
                                    return (0, A.delayExecution)((function() {
                                        var e = (0, I.default)(g, (function(e) {
                                            return t === e.bidderRequestId
                                        }));
                                        e.doneCbCallCount += 1, E()
                                    }), 1)
                                }.bind(r), {
                                    request: function(e, t) {
                                        u(P, t), u(o, e), k[e] || (k[e] = {
                                            SRA: !0,
                                            origin: t
                                        }), 1 < o[e] && (k[e].SRA = !1)
                                    },
                                    done: function(e) {
                                        P[e]--, x[0] && a(x[0]) && x.shift()
                                    }
                                })
                            }
                        };
                    a(e) || (C.logWarn("queueing auction due to limited endpoint capacity"), x.push(e));

                    function a(e) {
                        var r = !0,
                            i = T.config.getConfig("maxRequestsPerOrigin") || j;
                        return e.bidRequests.some((function(e) {
                            var t = 1,
                                n = void 0 !== e.src && e.src === N.S2S.SRC ? "s2s" : e.bidderCode;
                            return k[n] && (!1 === k[n].SRA && (t = Math.min(e.bids.length, i)), P[k[n].origin] + t > i && (r = !1)), !r
                        })), r && e.run(), r
                    }

                    function u(e, t) {
                        void 0 === e[t] ? e[t] = 1 : e[t]++
                    }
                },
                bidsBackAll: E,
                addWinningBid: function(e) {
                    o = o.concat(e)
                },
                getWinningBids: function() {
                    return o
                },
                getTimeout: function() {
                    return h
                },
                getAuctionId: function() {
                    return v
                },
                getAuctionStatus: function() {
                    return y
                },
                getAdUnits: function() {
                    return d
                },
                getAdUnitCodes: function() {
                    return l
                },
                getBidRequests: function() {
                    return g
                },
                getBidsReceived: function() {
                    return p
                }
            }
        }, t.getStandardBidderSettings = u, t.getKeyValueTargetingPairs = m, t.adjustBids = s;
        var A = n(0),
            p = n(31),
            i = n(18),
            c = n(189),
            v = n(13),
            T = n(2),
            r = n(15),
            o = n(21),
            I = a(n(10)),
            _ = a(n(6));

        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var w = r.userSync.syncUsers,
            C = n(0),
            O = n(8),
            B = n(9),
            N = n(4),
            R = t.AUCTION_STARTED = "started",
            U = t.AUCTION_IN_PROGRESS = "inProgress",
            D = t.AUCTION_COMPLETED = "completed";
        B.on(N.EVENTS.BID_ADJUSTMENT, (function(e) {
            s(e)
        }));
        var j = 4,
            P = {},
            k = {},
            x = [];

        function f(e, t) {
            t.timeToRespond > e.getTimeout() + T.config.getConfig("timeoutBuffer") && e.executeCallback(!0)
        }

        function y(e, t) {
            B.emit(N.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), f(e, t)
        }
        var M = t.addBidResponse = (0, o.createHook)("asyncSeries", (function(e, t) {
            var n, r, i, o, a = this.getBidRequests(),
                u = this.getAuctionId(),
                d = (0, A.getBidderRequest)(a, t.bidderCode, e),
                s = (function(e) {
                    var t = e.adUnitCode,
                        n = e.bid,
                        r = e.bidRequest,
                        i = e.auctionId,
                        o = r.start,
                        a = g({}, n, {
                            auctionId: i,
                            responseTimestamp: (0, A.timestamp)(),
                            requestTimestamp: o,
                            cpm: parseFloat(n.cpm) || 0,
                            bidder: n.bidderCode,
                            adUnitCode: t
                        });
                    a.timeToRespond = a.responseTimestamp - a.requestTimestamp, B.emit(N.EVENTS.BID_ADJUSTMENT, a);
                    var u = r.bids && (0, I.default)(r.bids, (function(e) {
                            return e.adUnitCode == t
                        })),
                        d = u && u.renderer;
                    d && d.url && (a.renderer = v.Renderer.install({
                        url: d.url
                    }), a.renderer.setRender(d.render));
                    var s, c = T.config.getConfig("mediaTypePriceGranularity." + n.mediaType),
                        f = (0, p.getPriceBucketString)(a.cpm, "object" === (void 0 === c ? "undefined" : l(c)) ? c : T.config.getConfig("customPriceBucket"), T.config.getConfig("currency.granularityMultiplier"));
                    a.pbLg = f.low, a.pbMg = f.med, a.pbHg = f.high, a.pbAg = f.auto, a.pbDg = f.dense, a.pbCg = f.custom, a.bidderCode && (0 < a.cpm || a.dealId) && (s = m(a.bidderCode, a));
                    return a.adserverTargeting = g(a.adserverTargeting || {}, s), a
                })({
                    adUnitCode: e,
                    bid: t,
                    bidRequest: d,
                    auctionId: u
                });
            "video" === s.mediaType ? (n = this, r = s, i = d, o = !0, T.config.getConfig("cache.url") && (r.videoCacheKey ? r.vastUrl || (C.logError("videoCacheKey specified but not required vastUrl for video bid"), o = !1) : (o = !1, (0, c.store)([r], (function(e, t) {
                e ? (C.logWarn("Failed to save to the video cache: " + e + ". Video bid must be discarded."), f(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = (0, c.getCacheUrl)(r.videoCacheKey)), i.doneCbCallCount += 1, y(n, r), n.bidsBackAll())
            })))), o && y(n, r)) : y(this, s)
        }), "addBidResponse");

        function u(e) {
            var t = T.config.getConfig("mediaTypePriceGranularity." + e),
                n = "string" == typeof e && t ? "string" == typeof t ? t : "custom" : T.config.getConfig("priceGranularity"),
                r = pbjs.bidderSettings;
            return r[N.JSON_MAPPING.BD_SETTING_STANDARD] || (r[N.JSON_MAPPING.BD_SETTING_STANDARD] = {}), r[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING] || (r[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING] = [{
                key: "hb_bidder",
                val: function(e) {
                    return e.bidderCode
                }
            }, {
                key: "hb_adid",
                val: function(e) {
                    return e.adId
                }
            }, {
                key: "hb_pb",
                val: function(e) {
                    return n === N.GRANULARITY_OPTIONS.AUTO ? e.pbAg : n === N.GRANULARITY_OPTIONS.DENSE ? e.pbDg : n === N.GRANULARITY_OPTIONS.LOW ? e.pbLg : n === N.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : n === N.GRANULARITY_OPTIONS.HIGH ? e.pbHg : n === N.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0
                }
            }, {
                key: "hb_size",
                val: function(e) {
                    return e.size
                }
            }, {
                key: "hb_deal",
                val: function(e) {
                    return e.dealId
                }
            }, {
                key: "hb_source",
                val: function(e) {
                    return e.source
                }
            }, {
                key: "hb_format",
                val: function(e) {
                    return e.mediaType
                }
            }]), r[N.JSON_MAPPING.BD_SETTING_STANDARD]
        }

        function m(e, t) {
            if (!t) return {};
            var n = {},
                r = pbjs.bidderSettings;
            r && (d(n, u(t.mediaType), t), e && r[e] && r[e][N.JSON_MAPPING.ADSERVER_TARGETING] && (d(n, r[e], t), t.sendStandardTargeting = r[e].sendStandardTargeting));
            return t.native && (n = g({}, n, (0, i.getNativeTargeting)(t))), n
        }

        function d(r, i, o) {
            var e = i[N.JSON_MAPPING.ADSERVER_TARGETING];
            return o.size = o.getSize(), C._each(e, (function(e) {
                var t = e.key,
                    n = e.val;
                if (r[t] && C.logWarn("The key: " + t + " is getting ovewritten"), C.isFn(n)) try {
                    n = n(o)
                } catch (e) {
                    C.logError("bidmanager", "ERROR", e)
                }(void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && "hb_deal" !== t || !C.isEmptyStr(n) && null != n ? r[t] = n : C.logInfo("suppressing empty key '" + t + "' from adserver targeting")
            })), r
        }

        function s(e) {
            var t = e.bidderCode,
                n = e.cpm,
                r = void 0;
            if (pbjs.bidderSettings && (t && pbjs.bidderSettings[t] && "function" == typeof pbjs.bidderSettings[t].bidCpmAdjustment ? r = pbjs.bidderSettings[t].bidCpmAdjustment : pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD] && "function" == typeof pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (r = pbjs.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), r)) try {
                n = r(e.cpm, g({}, e))
            } catch (e) {
                C.logError("Error during bid adjustment", "bidmanager.js", e)
            }
            0 <= n && (e.cpm = n)
        }

        function q(e, t) {
            return e[t.adUnitCode] || (e[t.adUnitCode] = {
                bids: []
            }), e[t.adUnitCode].bids.push(t), e
        }
    },
    44: function(e, t, n) {
        "use strict";
        var r = n(16),
            i = n(34)(5),
            o = "find",
            a = !0;
        o in [] && Array(1)[o]((function() {
            a = !1
        })), r(r.P + r.F * a, "Array", {
            find: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(27)(o)
    },
    45: function(e, t) {
        e.exports = function(e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e
        }
    },
    46: function(e, t, n) {
        var r = n(47),
            i = n(52);
        e.exports = n(23) ? function(e, t, n) {
            return r.f(e, t, i(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        }
    },
    47: function(e, t, n) {
        var r = n(48),
            i = n(49),
            o = n(51),
            a = Object.defineProperty;
        t.f = n(23) ? Object.defineProperty : function(e, t, n) {
            if (r(e), t = o(t, !0), r(n), i) try {
                return a(e, t, n)
            } catch (e) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e
        }
    },
    48: function(e, t, n) {
        var r = n(17);
        e.exports = function(e) {
            if (!r(e)) throw TypeError(e + " is not an object!");
            return e
        }
    },
    49: function(e, t, n) {
        e.exports = !n(23) && !n(33)((function() {
            return 7 != Object.defineProperty(n(50)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        }))
    },
    499: function(e, t, n) {
        e.exports = n(500)
    },
    50: function(e, t, n) {
        var r = n(17),
            i = n(20).document,
            o = r(i) && r(i.createElement);
        e.exports = function(e) {
            return o ? i.createElement(e) : {}
        }
    },
    500: function(e, t, n) {
        "use strict";
        var r, i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            a = n(39),
            u = n(0),
            d = n(501),
            s = n(15),
            c = n(11),
            f = n(2),
            l = n(29),
            g = n(40),
            p = n(21),
            v = n(502),
            y = n(6),
            m = (r = y) && r.__esModule ? r : {
                default: r
            };
        var b = (0, a.getGlobal)(),
            h = n(4),
            S = n(0),
            E = n(8),
            A = n(19),
            T = n(9),
            I = s.userSync.triggerUserSyncs,
            _ = h.EVENTS,
            w = _.ADD_AD_UNITS,
            C = _.BID_WON,
            O = _.REQUEST_BIDS,
            B = _.SET_TARGETING,
            N = _.AD_RENDER_FAILED,
            R = h.AD_RENDER_FAILED_REASON,
            U = R.PREVENT_WRITING_ON_MAIN_DOCUMENT,
            D = R.NO_AD,
            j = R.EXCEPTION,
            P = R.CANNOT_FIND_AD,
            k = R.MISSING_DOC_OR_ADID,
            x = {
                bidWon: function(e) {
                    var t = l.auctionManager.getBidsRequested().map((function(e) {
                        return e.bids.map((function(e) {
                            return e.adUnitCode
                        }))
                    })).reduce(u.flatten).filter(u.uniques);
                    if (!S.contains(t, e)) return void S.logError('The "' + e + '" placement is not defined.');
                    return !0
                }
            };

        function M(e, t, n) {
            e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n)
        }

        function q(e, t, n) {
            var r = {};
            r.reason = e, r.message = t, n && (r.bid = n), S.logError(t), T.emit(N, r)
        }

        function G(e) {
            e.forEach((function(e) {
                if (void 0 === e.called) try {
                    e.call(), e.called = !0
                } catch (e) {
                    S.logError("Error processing command :", "prebid.js", e)
                }
            }))
        }(0, v.sessionLoader)(), b.bidderSettings = b.bidderSettings || {}, b.cbTimeout = b.cbTimeout || 200, b.libLoaded = !0, b.version = "v1.15.0", S.logInfo("Prebid.js v1.15.0 loaded"), b.adUnits = b.adUnits || [], b.triggerUserSyncs = I, b.getAdserverTargetingForAdUnitCodeStr = function(e) {
            if (S.logInfo("Invoking pbjs.getAdserverTargetingForAdUnitCodeStr", arguments), e) {
                var t = b.getAdserverTargetingForAdUnitCode(e);
                return S.transformAdServerTargetingObj(t)
            }
            S.logMessage("Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode")
        }, b.getAdserverTargetingForAdUnitCode = function(e) {
            return b.getAdserverTargeting(e)[e]
        }, b.getAdserverTargeting = function(e) {
            return S.logInfo("Invoking pbjs.getAdserverTargeting", arguments), g.targeting.getAllTargeting(e)
        }, b.getBidResponses = function() {
            S.logInfo("Invoking pbjs.getBidResponses", arguments);
            var e = l.auctionManager.getBidsReceived().filter(u.adUnitsFilter.bind(this, l.auctionManager.getAdUnitCodes())),
                n = e && e.length && e[e.length - 1].auctionId;
            return e.map((function(e) {
                return e.adUnitCode
            })).filter(u.uniques).map((function(t) {
                return e.filter((function(e) {
                    return e.auctionId === n && e.adUnitCode === t
                }))
            })).filter((function(e) {
                return e && e[0] && e[0].adUnitCode
            })).map((function(e) {
                return t = {}, n = e[0].adUnitCode, r = {
                    bids: e.map(u.removeRequestId)
                }, n in t ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[n] = r, t;
                var t, n, r
            })).reduce((function(e, t) {
                return o(e, t)
            }), {})
        }, b.getBidResponsesForAdUnitCode = function(t) {
            return {
                bids: l.auctionManager.getBidsReceived().filter((function(e) {
                    return e.adUnitCode === t
                })).map(u.removeRequestId)
            }
        }, b.setTargetingForGPTAsync = function(e, t) {
            if (S.logInfo("Invoking pbjs.setTargetingForGPTAsync", arguments), (0, u.isGptPubadsDefined)()) {
                var n = g.targeting.getAllTargeting(e);
                g.targeting.resetPresetTargeting(e), g.targeting.setTargetingForGPT(n, t), Object.keys(n).forEach((function(t) {
                    Object.keys(n[t]).forEach((function(e) {
                        "hb_adid" === e && l.auctionManager.setStatusForBids(n[t][e], g.BID_TARGETING_SET)
                    }))
                })), T.emit(B, n)
            } else S.logError("window.googletag is not defined on the page")
        }, b.setTargetingForAst = function() {
            S.logInfo("Invoking pbjs.setTargetingForAn", arguments), g.targeting.isApntagDefined() ? (g.targeting.setTargetingForAst(), T.emit(B, g.targeting.getAllTargeting())) : S.logError("window.apntag is not defined on the page")
        }, b.renderAd = function(e, t) {
            if (S.logInfo("Invoking pbjs.renderAd", arguments), S.logMessage("Calling renderAd with adId :" + t), e && t) try {
                var n = l.auctionManager.findBidByAdId(t);
                if (n) {
                    n.status = g.RENDERED, n.ad = S.replaceAuctionPrice(n.ad, n.cpm), n.adUrl = S.replaceAuctionPrice(n.adUrl, n.cpm), l.auctionManager.addWinningBid(n), T.emit(C, n);
                    var r = n.height,
                        i = n.width,
                        o = n.ad,
                        a = n.mediaType,
                        u = n.adUrl,
                        d = n.renderer,
                        s = document.createComment("Creative " + n.creativeId + " served by " + n.bidder + " Prebid.js Header Bidding");
                    if (S.insertElement(s, e, "body"), d && d.url) d.render(n);
                    else if (e === document && !S.inIframe() || "video" === a) {
                        q(U, "Error trying to write ad. Ad render call ad id " + t + " was prevented from writing to the main document.", n)
                    } else if (o) e.write(o), e.close(), M(e, i, r), S.callBurl(n);
                    else if (u) {
                        var c = S.createInvisibleIframe();
                        c.height = r, c.width = i, c.style.display = "inline", c.style.overflow = "hidden", c.src = u, S.insertElement(c, e, "body"), M(e, i, r), S.callBurl(n)
                    } else {
                        q(D, "Error trying to write ad. No ad for bid response id: " + t, n)
                    }
                } else {
                    q(P, "Error trying to write ad. Cannot find ad by given id : " + t)
                }
            } catch (e) {
                var f = "Error trying to write ad Id :" + t + " to the page:" + e.message;
                q(j, f)
            } else q(k, "Error trying to write ad Id :" + t + " to the page. Missing document or adId")
        }, b.removeAdUnit = function(e) {
            if (S.logInfo("Invoking pbjs.removeAdUnit", arguments), e)
                for (var t = 0; t < b.adUnits.length; t++) b.adUnits[t].code === e && b.adUnits.splice(t, 1)
        }, b.requestBids = (0, p.createHook)("asyncSeries", (function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.bidsBackHandler,
                n = e.timeout,
                r = e.adUnits,
                i = e.adUnitCodes,
                o = e.labels;
            T.emit(O);
            var a = n || f.config.getConfig("bidderTimeout");
            if (r = r || b.adUnits, S.logInfo("Invoking pbjs.requestBids", arguments), i && i.length ? r = r.filter((function(e) {
                    return (0, m.default)(i, e.code)
                })) : i = r && r.map((function(e) {
                    return e.code
                })), r.forEach((function(i) {
                    var o = Object.keys(i.mediaTypes || {
                            banner: "banner"
                        }),
                        e = i.bids.map((function(e) {
                            return e.bidder
                        })),
                        a = E.bidderRegistry,
                        t = f.config.getConfig("s2sConfig"),
                        n = t && t.bidders,
                        r = n ? e.filter((function(e) {
                            return !(0, m.default)(n, e)
                        })) : e;
                    i.transactionId || (i.transactionId = S.generateUUID()), r.forEach((function(t) {
                        var e = a[t],
                            n = e && e.getSpec && e.getSpec(),
                            r = n && n.supportedMediaTypes || ["banner"];
                        o.some((function(e) {
                            return (0, m.default)(r, e)
                        })) || (S.logWarn(S.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter((function(e) {
                            return e.bidder !== t
                        })))
                    }))
                })), r && 0 !== r.length) {
                var u = l.auctionManager.createAuction({
                    adUnits: r,
                    adUnitCodes: i,
                    callback: t,
                    cbTimeout: a,
                    labels: o
                });
                return u.callBids(), u
            }
            if (S.logMessage("No adUnits configured. No bids requested."), "function" == typeof t) try {
                t()
            } catch (e) {
                S.logError("Error executing bidsBackHandler", null, e)
            }
        })), b.addAdUnits = function(e) {
            S.logInfo("Invoking pbjs.addAdUnits", arguments), S.isArray(e) ? b.adUnits.push.apply(b.adUnits, e) : "object" === (void 0 === e ? "undefined" : i(e)) && b.adUnits.push(e), T.emit(w)
        }, b.onEvent = function(e, t, n) {
            S.logInfo("Invoking pbjs.onEvent", arguments), S.isFn(t) ? !n || x[e].call(null, n) ? T.on(e, t, n) : S.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : S.logError('The event handler provided is not a function and was not set on event "' + e + '".')
        }, b.offEvent = function(e, t, n) {
            S.logInfo("Invoking pbjs.offEvent", arguments), n && !x[e].call(null, n) || T.off(e, t, n)
        }, b.registerBidAdapter = function(e, t) {
            S.logInfo("Invoking pbjs.registerBidAdapter", arguments);
            try {
                E.registerBidAdapter(e(), t)
            } catch (e) {
                S.logError("Error registering bidder adapter : " + e.message)
            }
        }, b.registerAnalyticsAdapter = function(e) {
            S.logInfo("Invoking pbjs.registerAnalyticsAdapter", arguments);
            try {
                E.registerAnalyticsAdapter(e)
            } catch (e) {
                S.logError("Error registering analytics adapter : " + e.message)
            }
        }, b.createBid = function(e) {
            return S.logInfo("Invoking pbjs.createBid", arguments), A.createBid(e)
        }, b.loadScript = function(e, t, n) {
            S.logInfo("Invoking pbjs.loadScript", arguments), (0, c.loadScript)(e, t, n)
        }, b.enableAnalytics = function(e) {
            e && !S.isEmpty(e) ? (S.logInfo("Invoking pbjs.enableAnalytics for: ", e), E.enableAnalytics(e)) : S.logError("pbjs.enableAnalytics should be called with option {}")
        }, b.aliasBidder = function(e, t) {
            S.logInfo("Invoking pbjs.aliasBidder", arguments), e && t ? E.aliasBidAdapter(e, t) : S.logError("bidderCode and alias must be passed as arguments", "pbjs.aliasBidder")
        }, b.getAllWinningBids = function() {
            return l.auctionManager.getAllWinningBids().map(u.removeRequestId)
        }, b.getAllPrebidWinningBids = function() {
            return l.auctionManager.getBidsReceived().filter((function(e) {
                return e.status === g.BID_TARGETING_SET
            })).map(u.removeRequestId)
        }, b.getHighestCpmBids = function(e) {
            var t = (0, g.getHighestCpmBidsFromBidPool)(l.auctionManager.getBidsReceived(), u.getLatestHighestCpmBid);
            return g.targeting.getWinningBids(e, t).map(u.removeRequestId)
        }, b.getConfig = f.config.getConfig, b.setConfig = f.config.setConfig, b.que.push((function() {
            return (0, d.listenMessagesFromCreative)()
        })), b.cmd.push = function(e) {
            if ("function" == typeof e) try {
                e.call()
            } catch (e) {
                S.logError("Error processing command :", e.message, e.stack)
            } else S.logError("Commands written into pbjs.cmd.push must be wrapped in a function")
        }, b.que.push = b.cmd.push, b.processQueue = function() {
            G(b.que), G(b.cmd)
        }
    },
    501: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.listenMessagesFromCreative = function() {
            addEventListener("message", o, !1)
        };
        var m = i(n(9)),
            b = n(18),
            r = n(4),
            h = n(0),
            S = n(29),
            E = i(n(10));

        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var A = r.EVENTS.BID_WON;

        function o(e) {
            var t, n, r, i, o, a, u, d, s, c, f, l, g, p = e.message ? "message" : "data",
                v = {};
            try {
                v = JSON.parse(e[p])
            } catch (e) {
                return
            }
            if (v.adId) {
                var y = (0, E.default)(S.auctionManager.getBidsReceived(), (function(e) {
                    return e.adId === v.adId
                }));
                "Prebid Request" === v.message && (t = y, n = v.adServerDomain, r = e.source, i = t.adId, o = t.ad, a = t.adUrl, u = t.width, d = t.height, i && (c = (s = t).adUnitCode, f = s.width, l = s.height, (g = document.getElementById((0, E.default)(window.googletag.pubads().getSlots().filter((0, h.isSlotMatchingAdUnitCode)(c)), (function(e) {
                    return e
                })).getSlotElementId()).querySelector("iframe")).width = "" + f, g.height = "" + l, r.postMessage(JSON.stringify({
                    message: "Prebid Response",
                    ad: o,
                    adUrl: a,
                    adId: i,
                    width: u,
                    height: d
                }), n)), S.auctionManager.addWinningBid(y), m.default.emit(A, y)), "Prebid Native" === v.message && ((0, b.fireNativeTrackers)(v, y), S.auctionManager.addWinningBid(y), m.default.emit(A, y))
            }
        }
    },
    502: function(e, n, t) {
        "use strict";
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.boundHook = void 0;
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        n.disableOverrides = f, n.addBidResponseHook = l, n.getConfig = g, n.sessionLoader = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.sessionStorage,
                t = void 0;
            try {
                t = JSON.parse(e.getItem(u))
            } catch (e) {}
            t && c(t, !0)
        };
        var r = t(2),
            a = t(0),
            i = t(41),
            u = "pbjs:debugging",
            d = n.boundHook = void 0;

        function s(e) {
            (0, a.logMessage)("DEBUG: " + e)
        }

        function c(e) {
            var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            r.config.setConfig({
                debug: !0
            }), s("bidder overrides enabled" + (t ? " from session" : "")), d && i.addBidResponse.removeHook(d), n.boundHook = d = l.bind(null, e), i.addBidResponse.addHook(d, 5)
        }

        function f() {
            d && (i.addBidResponse.removeHook(d), s("bidder overrides disabled"))
        }

        function l(e, r, i, t) {
            if (Array.isArray(e.bidders) && -1 === e.bidders.indexOf(i.bidderCode)) return n = "bidder '" + i.bidderCode + "' excluded from auction by bidder overrides", void(0, a.logWarn)("DEBUG: " + n);
            var n;
            Array.isArray(e.bids) && e.bids.forEach((function(n) {
                n.bidder && n.bidder !== i.bidderCode || n.adUnitCode && n.adUnitCode !== r || (i = o({}, i), Object.keys(n).filter((function(e) {
                    return -1 === ["bidder", "adUnitCode"].indexOf(e)
                })).forEach((function(e) {
                    var t = n[e];
                    s("bidder overrides changed '" + r + "/" + i.bidderCode + "' bid." + e + " from '" + i[e] + "' to '" + t + "'"), i[e] = t
                })))
            })), t(r, i)
        }

        function g(e) {
            if (e.enabled) {
                try {
                    window.sessionStorage.setItem(u, JSON.stringify(e))
                } catch (e) {}
                c(e)
            } else {
                f();
                try {
                    window.sessionStorage.removeItem(u)
                } catch (e) {}
            }
        }
        r.config.getConfig("debugging", (function(e) {
            return g(e.debugging)
        }))
    },
    51: function(e, t, n) {
        var i = n(17);
        e.exports = function(e, t) {
            if (!i(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        }
    },
    52: function(e, t) {
        e.exports = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        }
    },
    53: function(e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function(e, t) {
            return n.call(e, t)
        }
    },
    54: function(e, t, n) {
        var r = n(25);
        e.exports = function(e) {
            return Object(r(e))
        }
    },
    55: function(e, t, n) {
        var r = n(56);
        e.exports = function(e, t) {
            return new(r(e))(t)
        }
    },
    56: function(e, t, n) {
        var r = n(17),
            i = n(38),
            o = n(26)("species");
        e.exports = function(e) {
            var t;
            return i(e) && ("function" != typeof(t = e.constructor) || t !== Array && !i(t.prototype) || (t = void 0), r(t) && null === (t = t[o]) && (t = void 0)), void 0 === t ? Array : t
        }
    },
    57: function(e, t, n) {
        var r = n(14),
            i = n(20),
            o = "__core-js_shared__",
            a = i[o] || (i[o] = {});
        (e.exports = function(e, t) {
            return a[e] || (a[e] = void 0 !== t ? t : {})
        })("versions", []).push({
            version: r.version,
            mode: n(58) ? "pure" : "global",
            copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
        })
    },
    58: function(e, t) {
        e.exports = !0
    },
    59: function(e, t) {
        var n = 0,
            r = Math.random();
        e.exports = function(e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + r).toString(36))
        }
    },
    6: function(e, t, n) {
        n(60), e.exports = n(14).Array.includes
    },
    60: function(e, t, n) {
        "use strict";
        var r = n(16),
            i = n(61)(!0);
        r(r.P, "Array", {
            includes: function(e) {
                return i(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        }), n(27)("includes")
    },
    61: function(e, t, n) {
        var d = n(62),
            s = n(36),
            c = n(63);
        e.exports = function(u) {
            return function(e, t, n) {
                var r, i = d(e),
                    o = s(i.length),
                    a = c(n, o);
                if (u && t != t) {
                    for (; a < o;)
                        if ((r = i[a++]) != r) return !0
                } else
                    for (; a < o; a++)
                        if ((u || a in i) && i[a] === t) return u || a || 0;
                return !u && -1
            }
        }
    },
    62: function(e, t, n) {
        var r = n(35),
            i = n(25);
        e.exports = function(e) {
            return r(i(e))
        }
    },
    63: function(e, t, n) {
        var r = n(37),
            i = Math.max,
            o = Math.min;
        e.exports = function(e, t) {
            return (e = r(e)) < 0 ? i(e + t, 0) : o(e, t)
        }
    },
    64: function(e, t) {
        e.exports = function e(t) {
            var n = Array.isArray(t) ? [] : {};
            for (var r in t) {
                var i = t[r];
                n[r] = i && "object" == typeof i ? e(i) : i
            }
            return n
        }
    },
    65: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        };
        t.setSizeConfig = a, t.resolveStatus = function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.labels,
                n = void 0 === t ? [] : t,
                r = e.labelAll,
                i = void 0 !== r && r,
                o = e.activeLabels,
                a = void 0 === o ? [] : o,
                u = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [],
                d = (c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : p, c.reduce((function(n, e) {
                    return "object" === (void 0 === e ? "undefined" : f(e)) && "string" == typeof e.mediaQuery ? matchMedia(e.mediaQuery).matches && (Array.isArray(e.sizesSupported) && (n.shouldFilter = !0), ["labels", "sizesSupported"].forEach((function(t) {
                        return (e[t] || []).forEach((function(e) {
                            return n[t][e] = !0
                        }))
                    }))) : (0, l.logWarn)('sizeConfig rule missing required property "mediaQuery"'), n
                }), {
                    labels: {},
                    sizesSupported: {},
                    shouldFilter: !1
                })),
                s = void 0;
            var c;
            s = d.shouldFilter ? u.filter((function(e) {
                return d.sizesSupported[e]
            })) : u;
            return {
                active: 0 < s.length && (0 === n.length || !i && (n.some((function(e) {
                    return d.labels[e]
                })) || n.some((function(e) {
                    return (0, g.default)(a, e)
                }))) || i && n.reduce((function(e, t) {
                    return e ? d.labels[t] || (0, g.default)(a, t) : e
                }), !0)),
                sizes: s
            }
        };
        var r, i = n(2),
            l = n(0),
            o = n(6),
            g = (r = o) && r.__esModule ? r : {
                default: r
            };
        var p = [];

        function a(e) {
            p = e
        }
        i.config.getConfig("sizeConfig", (function(e) {
            return a(e.sizeConfig)
        }))
    },
    66: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.hasNonVideoBidder = t.videoBidder = t.videoAdUnit = void 0, t.isValidVideoBid = function(e, t) {
            var n = (0, o.getBidRequest)(e.adId, t),
                r = n && (0, o.deepAccess)(n, "mediaTypes.video"),
                i = r && (0, o.deepAccess)(r, "context");
            if (!n || r && i !== s) return a.config.getConfig("cache.url") || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : ((0, o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1);
            if (i === s) return !(!e.renderer && !n.renderer);
            return !0
        };
        var r, i = n(8),
            o = n(0),
            a = n(2),
            u = n(6),
            d = (r = u) && r.__esModule ? r : {
                default: r
            };
        var s = "outstream",
            c = (t.videoAdUnit = function(e) {
                var t = "video" === e.mediaType,
                    n = (0, o.deepAccess)(e, "mediaTypes.video");
                return t || n
            }, t.videoBidder = function(e) {
                return (0, d.default)(i.videoAdapters, e.bidder)
            });
        t.hasNonVideoBidder = function(e) {
            return e.bids.filter((function(e) {
                return !c(e)
            })).length
        }
    },
    7: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.ajax = void 0;
        var l = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        t.ajaxBuilder = r;
        var p = n(12),
            v = n(0),
            y = 4;
        t.ajax = r();

        function r() {
            var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3e3,
                e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                c = e.request,
                f = e.done;
            return function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                try {
                    var i = void 0,
                        o = r.method || (n ? "POST" : "GET"),
                        a = document.createElement("a");
                    a.href = e;
                    var u = "object" === (void 0 === t ? "undefined" : g(t)) && null !== t ? t : {
                        success: function() {
                            v.logMessage("xhr success")
                        },
                        error: function(e) {
                            v.logError("xhr error", null, e)
                        }
                    };
                    if ("function" == typeof t && (u.success = t), (i = new window.XMLHttpRequest).onreadystatechange = function() {
                            if (i.readyState === y) {
                                "function" == typeof f && f(a.origin);
                                var e = i.status;
                                200 <= e && e < 300 || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i)
                            }
                        }, i.ontimeout = function() {
                            v.logError("  xhr timeout after ", i.timeout, "ms")
                        }, "GET" === o && n) {
                        var d = (0, p.parse)(e, r);
                        l(d.search, n), e = (0, p.format)(d)
                    }
                    i.open(o, e), i.timeout = s, r.withCredentials && (i.withCredentials = !0), v._each(r.customHeaders, (function(e, t) {
                        i.setRequestHeader(t, e)
                    })), r.preflight && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), i.setRequestHeader("Content-Type", r.contentType || "text/plain"), "function" == typeof c && c(a.origin), "POST" === o && n ? i.send(n) : i.send()
                } catch (e) {
                    v.logError("xhr construction", e)
                }
            }
        }
    },
    8: function(e, b, t) {
        "use strict";
        var m = function(e, t) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, t) {
                    var n = [],
                        r = !0,
                        i = !1,
                        o = void 0;
                    try {
                        for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                    } catch (e) {
                        i = !0, o = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (i) throw o
                        }
                    }
                    return n
                })(e, t);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            h = t(0),
            l = t(65),
            g = t(18),
            c = t(1),
            S = t(7),
            E = t(2),
            A = n(t(6)),
            T = n(t(10));

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var I = t(0),
            _ = t(4),
            w = t(9),
            C = void 0,
            O = {};
        b.bidderRegistry = O, b.aliasRegistry = {};
        var B = {};
        E.config.getConfig("s2sConfig", (function(e) {
            B = e.s2sConfig
        }));
        var r = {};

        function p(e, t) {
            return e.labelAll ? {
                labelAll: !0,
                labels: e.labelAll,
                activeLabels: t
            } : {
                labelAll: !1,
                labels: e.labelAny,
                activeLabels: t
            }
        }

        function N(e) {
            var r = e.bidderCode,
                d = e.auctionId,
                s = e.bidderRequestId,
                t = e.adUnits,
                c = e.labels;
            return t.reduce((function(e, a) {
                var t = (0, l.resolveStatus)(p(a, c), a.sizes),
                    n = t.active,
                    u = t.sizes;
                return n && e.push(a.bids.filter((function(e) {
                    return e.bidder === r
                })).reduce((function(e, t) {
                    a.mediaTypes && (I.isValidMediaTypes(a.mediaTypes) ? t = f({}, t, {
                        mediaTypes: a.mediaTypes
                    }) : I.logError("mediaTypes is not correctly configured for adunit " + a.code));
                    var n = a.nativeParams || I.deepAccess(a, "mediaTypes.native");
                    n && (t = f({}, t, {
                        nativeParams: (0, g.processNativeAdUnitParams)(n)
                    })), t = f({}, t, (0, h.getDefinedParams)(a, ["mediaType", "renderer"]));
                    var r = (0, l.resolveStatus)(p(t, c), u),
                        i = r.active,
                        o = r.sizes;
                    return i && e.push(f({}, t, {
                        adUnitCode: a.code,
                        transactionId: a.transactionId,
                        sizes: o,
                        bidId: t.bid_id || I.getUniqueIdentifierStr(),
                        bidderRequestId: s,
                        auctionId: d
                    })), e
                }), [])), e
            }), []).reduce(h.flatten, []).filter((function(e) {
                return "" !== e
            }))
        }

        function R() {
            return B && B.enabled && B.testing && C
        }
        b.gdprDataHandler = {
            consentData: null,
            setConsentData: function(e) {
                this.consentData = e
            },
            getConsentData: function() {
                return this.consentData
            }
        }, b.makeBidRequests = function(e, r, i, o, a) {
            var u = [];
            e = b.checkBidRequestSizes(e);
            var t = (0, h.getBidderCodes)(e);
            E.config.getConfig("bidderSequence") === E.RANDOM && (t = (0, h.shuffle)(t));
            var n, d, s, c = t,
                f = [];
            if (B.enabled) {
                R() && (f = C.getSourceBidderMap(e)[C.CLIENT]);
                var l = B.bidders;
                c = t.filter((function(e) {
                    return !(0, A.default)(l, e) || (0, A.default)(f, e)
                }));
                var g = (n = e, d = B.bidders, (s = I.deepClone(n)).forEach((function(e) {
                        e.bids = e.bids.filter((function(e) {
                            return (0, A.default)(d, e.bidder) && (!R() || e.finalSource !== C.CLIENT)
                        })).map((function(e) {
                            return e.bid_id = I.getUniqueIdentifierStr(), e
                        }))
                    })), s = s.filter((function(e) {
                        return 0 !== e.bids.length
                    }))),
                    p = I.generateUUID();
                l.forEach((function(e) {
                    var t = I.getUniqueIdentifierStr(),
                        n = {
                            bidderCode: e,
                            auctionId: i,
                            bidderRequestId: t,
                            tid: p,
                            adUnitsS2SCopy: g,
                            bids: N({
                                bidderCode: e,
                                auctionId: i,
                                bidderRequestId: t,
                                adUnits: g,
                                labels: a
                            }),
                            auctionStart: r,
                            timeout: B.timeout,
                            src: _.S2S.SRC
                        };
                    0 !== n.bids.length && u.push(n)
                }))
            }
            var v, y, m = (v = e, (y = I.deepClone(v)).forEach((function(e) {
                e.bids = e.bids.filter((function(e) {
                    return !R() || e.finalSource !== C.SERVER
                }))
            })), y = y.filter((function(e) {
                return 0 !== e.bids.length
            })));
            return c.forEach((function(e) {
                var t = I.getUniqueIdentifierStr(),
                    n = {
                        bidderCode: e,
                        auctionId: i,
                        bidderRequestId: t,
                        bids: N({
                            bidderCode: e,
                            auctionId: i,
                            bidderRequestId: t,
                            adUnits: m,
                            labels: a
                        }),
                        auctionStart: r,
                        timeout: o
                    };
                n.bids && 0 !== n.bids.length && u.push(n)
            })), b.gdprDataHandler.getConsentData() && u.forEach((function(e) {
                e.gdprConsent = b.gdprDataHandler.getConsentData()
            })), u
        }, b.checkBidRequestSizes = function(e) {
            function a(e) {
                return Array.isArray(e) && 2 === e.length && I.isInteger(e[0]) && I.isInteger(e[1])
            }
            return e.forEach((function(e) {
                e.sizes && I.logWarn("Usage of adUnits.sizes will eventually be deprecated.  Please define size dimensions within the corresponding area of the mediaTypes.<object> (eg mediaTypes.banner.sizes).");
                var t = e.mediaTypes;
                if (t && t.banner) {
                    var n = t.banner;
                    n.sizes ? e.sizes = n.sizes : (I.logError("Detected a mediaTypes.banner object did not include sizes.  This is a required field for the mediaTypes.banner object.  Removing invalid mediaTypes.banner object from request."), delete e.mediaTypes.banner)
                }
                if (t && t.video) {
                    var r = t.video;
                    if (r.playerSize)
                        if (Array.isArray(r.playerSize) && 1 === r.playerSize.length && r.playerSize.every(a)) e.sizes = r.playerSize;
                        else if (a(r.playerSize)) {
                        var i = [];
                        i.push(r.playerSize), I.logInfo("Transforming video.playerSize from " + r.playerSize + " to " + i + " so it's in the proper format."), e.sizes = r.playerSize = i
                    } else I.logError("Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request."), delete e.mediaTypes.video.playerSize
                }
                if (t && t.native) {
                    var o = t.native;
                    o.image && o.image.sizes && !Array.isArray(o.image.sizes) && (I.logError("Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request."), delete e.mediaTypes.native.image.sizes), o.image && o.image.aspect_ratios && !Array.isArray(o.image.aspect_ratios) && (I.logError("Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request."), delete e.mediaTypes.native.image.aspect_ratios), o.icon && o.icon.sizes && !Array.isArray(o.icon.sizes) && (I.logError("Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request."), delete e.mediaTypes.native.icon.sizes)
                }
            })), e
        }, b.callBids = function(e, t, i, o, a) {
            if (t.length) {
                var n = t.reduce((function(e, t) {
                        return e[Number(void 0 !== t.src && t.src === _.S2S.SRC)].push(t), e
                    }), [
                        [],
                        []
                    ]),
                    r = m(n, 2),
                    u = r[0],
                    d = r[1];
                if (d.length) {
                    var s = (0, S.ajaxBuilder)(d[0].timeout, a ? {
                            request: a.request.bind(null, "s2s"),
                            done: a.done
                        } : void 0),
                        c = B.bidders,
                        f = O[B.adapter],
                        l = d[0].tid,
                        g = d[0].adUnitsS2SCopy;
                    if (g.forEach((function(n) {
                            var e = n.bids.filter((function(t) {
                                return (0, T.default)(d, (function(e) {
                                    return e.bidderCode === t.bidder && (0, T.default)(e.bids, (function(e) {
                                        return e.adUnitCode === n.code
                                    }))
                                }))
                            }));
                            n.bids = e
                        })), g = g.filter((function(e) {
                            return 0 < e.bids.length
                        })), f) {
                        var p = {
                            tid: l,
                            ad_units: g
                        };
                        if (p.ad_units.length) {
                            var v = d.map((function(e) {
                                    return e.start = (0, h.timestamp)(), e.doneCbCallCount = 0, o(e.bidderRequestId)
                                })),
                                y = p.ad_units.reduce((function(e, t) {
                                    return e.concat((t.bids || []).reduce((function(e, t) {
                                        return e.concat(t.bidder)
                                    }), []))
                                }), []);
                            I.logMessage("CALLING S2S HEADER BIDDERS ==== " + c.filter((function(e) {
                                return (0, A.default)(y, e)
                            })).join(",")), d.forEach((function(e) {
                                w.emit(_.EVENTS.BID_REQUESTED, e)
                            })), f.callBids(p, d, i, (function() {
                                return v.forEach((function(e) {
                                    return e()
                                }))
                            }), s)
                        }
                    }
                }
                u.forEach((function(e) {
                    e.start = (0, h.timestamp)();
                    var t = O[e.bidderCode];
                    if (t) {
                        I.logMessage("CALLING BIDDER ======= " + e.bidderCode), w.emit(_.EVENTS.BID_REQUESTED, e), e.doneCbCallCount = 0;
                        var n = o(e.bidderRequestId),
                            r = (0, S.ajaxBuilder)(u[0].timeout, a ? {
                                request: a.request.bind(null, e.bidderCode),
                                done: a.done
                            } : void 0);
                        t.callBids(e, i, n, r)
                    } else I.logError("Adapter trying to be called which does not exist: " + e.bidderCode + " adaptermanager.callBids")
                }))
            } else I.logWarn("callBids executed with no bidRequests.  Were they filtered by labels or sizing?")
        }, b.videoAdapters = [], b.registerBidAdapter = function(e, t) {
            var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes,
                r = void 0 === n ? [] : n;
            e && t ? "function" == typeof e.callBids ? (O[t] = e, (0, A.default)(r, "video") && b.videoAdapters.push(t), (0, A.default)(r, "native") && g.nativeAdapters.push(t)) : I.logError("Bidder adaptor error for bidder code: " + t + "bidder must implement a callBids() function") : I.logError("bidAdaptor or bidderCode not specified")
        }, b.aliasBidAdapter = function(t, e) {
            var n, r;
            if (void 0 === O[e]) {
                var i = O[t];
                if (void 0 === i) {
                    var o = E.config.getConfig("s2sConfig"),
                        a = o && o.bidders;
                    a && (0, A.default)(a, e) ? b.aliasRegistry[e] = t : I.logError('bidderCode "' + t + '" is not an existing bidder.', "adaptermanager.aliasBidAdapter")
                } else try {
                    var u = void 0,
                        d = (n = t, r = [], (0, A.default)(b.videoAdapters, n) && r.push("video"), (0, A.default)(g.nativeAdapters, n) && r.push("native"), r);
                    if (i.constructor.prototype != Object.prototype)(u = new i.constructor).setBidderCode(e);
                    else {
                        var s = i.getSpec();
                        u = (0, c.newBidder)(f({}, s, {
                            code: e
                        })), b.aliasRegistry[e] = t
                    }
                    this.registerBidAdapter(u, e, {
                        supportedMediaTypes: d
                    })
                } catch (e) {
                    I.logError(t + " bidder does not currently support aliasing.", "adaptermanager.aliasBidAdapter")
                }
            } else I.logMessage('alias name "' + e + '" has been already specified.')
        }, b.registerAnalyticsAdapter = function(e) {
            var t = e.adapter,
                n = e.code;
            t && n ? "function" == typeof t.enableAnalytics ? (t.code = n, r[n] = t) : I.logError('Prebid Error: Analytics adaptor error for analytics "' + n + '"\n        analytics adapter must implement an enableAnalytics() function') : I.logError("Prebid Error: analyticsAdapter or analyticsCode not specified")
        }, b.enableAnalytics = function(e) {
            I.isArray(e) || (e = [e]), I._each(e, (function(e) {
                var t = r[e.provider];
                t ? t.enableAnalytics(e) : I.logError("Prebid Error: no analytics adapter found in registry for\n        " + e.provider + ".")
            }))
        }, b.getBidAdapter = function(e) {
            return O[e]
        }, b.setS2STestingModule = function(e) {
            C = e
        }, b.callTimedOutBidders = function(t, n, r) {
            n = n.map((function(e) {
                return e.params = I.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e
            })), n = I.groupBy(n, "bidder"), Object.keys(n).forEach((function(t) {
                try {
                    var e = O[t].getSpec();
                    e && e.onTimeout && "function" == typeof e.onTimeout && (I.logInfo("Invoking " + t + ".onTimeout"), e.onTimeout(n[t]))
                } catch (e) {
                    I.logWarn("Error calling onTimeout of " + t)
                }
            }))
        }
    },
    9: function(e, t, n) {
        "use strict";
        var u, r, i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            d = n(0),
            o = n(4),
            a = Array.prototype.slice,
            s = Array.prototype.push,
            c = d._map(o.EVENTS, (function(e) {
                return e
            })),
            f = o.EVENT_ID_PATHS,
            l = [];
        e.exports = (u = {}, (r = {}).on = function(e, t, n) {
            if (i = e, d.contains(c, i)) {
                var r = u[e] || {
                    que: []
                };
                n ? (r[n] = r[n] || {
                    que: []
                }, r[n].que.push(t)) : r.que.push(t), u[e] = r
            } else d.logError("Wrong event name : " + e + " Valid event names :" + c);
            var i
        }, r.emit = function(e) {
            !(function(e, t) {
                d.logMessage("Emitting event for: " + e);
                var n = t[0] || {},
                    r = n[f[e]],
                    i = u[e] || {
                        que: []
                    },
                    o = d._map(i, (function(e, t) {
                        return t
                    })),
                    a = [];
                l.push({
                    eventType: e,
                    args: n,
                    id: r
                }), r && d.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), d._each(a, (function(e) {
                    if (e) try {
                        e.apply(null, t)
                    } catch (e) {
                        d.logError("Error executing handler:", "events.js", e)
                    }
                }))
            })(e, a.call(arguments, 1))
        }, r.off = function(e, n, r) {
            var i = u[e];
            d.isEmpty(i) || d.isEmpty(i.que) && d.isEmpty(i[r]) || r && (d.isEmpty(i[r]) || d.isEmpty(i[r].que)) || (r ? d._each(i[r].que, (function(e) {
                var t = i[r].que;
                e === n && t.splice(d.indexOf.call(t, e), 1)
            })) : d._each(i.que, (function(e) {
                var t = i.que;
                e === n && t.splice(d.indexOf.call(t, e), 1)
            })), u[e] = i)
        }, r.get = function() {
            return u
        }, r.getEvents = function() {
            var n = [];
            return d._each(l, (function(e) {
                var t = i({}, e);
                n.push(t)
            })), n
        }, r)
    }
});
pbjsChunk([120], {
    121: function(e, r, t) {
        t(122), e.exports = t(123)
    },
    122: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var n = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = arguments[r];
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
                }
                return e
            },
            i = l(["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""], ["//", "/pubapi/3.0/", "/", "/", "/", "/ADTECH;v=2;cmd=bid;cors=yes;alias=", ";misc=", ";", ""]),
            a = l(["//", "/bidRequest?"], ["//", "/bidRequest?"]),
            o = l(["dcn=", "&pos=", "&cmd=bid", ""], ["dcn=", "&pos=", "&cmd=bid", ""]),
            s = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e, r
                }
            })(t(0)),
            d = t(1),
            c = t(2),
            u = t(4),
            p = t(3);

        function l(e, r) {
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(r)
                }
            }))
        }
        var m = {
                AOL: "aol",
                ONEMOBILE: "onemobile",
                ONEDISPLAY: "onedisplay"
            },
            b = {
                GET: "display-get"
            },
            f = {
                GET: "mobile-get",
                POST: "mobile-post"
            },
            v = {
                TAG: "iframe",
                TYPE: "iframe"
            },
            h = {
                TAG: "img",
                TYPE: "image"
            },
            g = T(i, "host", "network", "placement", "pageid", "sizeid", "alias", "misc", "dynamicParams"),
            O = T(a, "host"),
            y = T(o, "dcn", "pos", "dynamicParams"),
            E = {
                us: "adserver-us.adtech.advertising.com",
                eu: "adserver-eu.adtech.advertising.com",
                as: "adserver-as.adtech.advertising.com"
            };
        pbjs.aolGlobals = {
            pixelsDropped: !1
        };
        var P, x = 1,
            S = (P = !0, function() {
                var e = pbjs.bidderSettings;
                P && e && e.aol && "function" == typeof e.aol.bidCpmAdjustment && (s.logWarn("bidCpmAdjustment is active for the AOL adapter. As of Prebid 0.14, AOL can bid in net – please contact your accounts team to enable."), P = !1)
            });

        function T(o) {
            for (var e = arguments.length, t = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
            return function() {
                for (var e = arguments.length, i = Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                var n = i[i.length - 1] || {},
                    a = [o[0]];
                return t.forEach((function(e, r) {
                    var t = s.isInteger(e) ? i[e] : n[e];
                    a.push(t, o[r + 1])
                })), a.join("")
            }
        }

        function A(e) {
            return e === m.AOL || e === m.ONEMOBILE
        }

        function I(e) {
            if (A(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                var r = e.params.imp[0];
                return r.id && r.tagid && (r.banner && r.banner.w && r.banner.h || r.video && r.video.mimes && r.video.minduration && r.video.maxduration)
            }
        }

        function D(e) {
            return A(e.bidder) && e.params.dcn && e.params.pos
        }

        function R(e) {
            return ((r = e.bidder) === m.AOL || r === m.ONEDISPLAY) && e.params.placement && e.params.network;
            var r
        }
        var w = r.spec = {
            code: m.AOL,
            aliases: [m.ONEMOBILE, m.ONEDISPLAY],
            supportedMediaTypes: [p.BANNER],
            isBidRequestValid: function(e) {
                return R(e) || (D(r = e) || I(r));
                var r
            },
            buildRequests: function(e, r) {
                var i = this,
                    n = r ? r.gdprConsent : null;
                return e.map((function(e) {
                    var r, t = D(r = e) ? f.GET : I(r) ? f.POST : R(r) ? b.GET : void 0;
                    if (t) return i.formatBidRequest(t, e, n)
                }))
            },
            interpretResponse: function(e, r) {
                var t = e.body;
                if (S(), t) {
                    var i = this._parseBidResponse(t, r);
                    if (i) return i
                } else s.logError("Empty bid response", r.bidderCode, t)
            },
            getUserSyncs: function(e, r) {
                var t = r[0];
                return c.config.getConfig("aol.userSyncOn") === u.EVENTS.BID_RESPONSE && !pbjs.aolGlobals.pixelsDropped && t && t.ext && t.ext.pixels ? (pbjs.aolGlobals.pixelsDropped = !0, (function(e) {
                    var i = /\w*(?=\s)/,
                        n = /src=("|')(.*?)\1/,
                        a = [];
                    if (e) {
                        var r = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi);
                        r && r.forEach((function(e) {
                            var r = e.match(i)[0],
                                t = e.match(n)[2];
                            r && r && a.push({
                                type: r === h.TAG ? h.TYPE : v.TYPE,
                                url: t
                            })
                        }))
                    }
                    return a
                })(t.ext.pixels)) : []
            },
            formatBidRequest: function(e, r, t) {
                var i = void 0;
                switch (e) {
                    case b.GET:
                        i = {
                            url: this.buildMarketplaceUrl(r, t),
                            method: "GET",
                            ttl: 60
                        };
                        break;
                    case f.GET:
                        i = {
                            url: this.buildOneMobileGetUrl(r, t),
                            method: "GET",
                            ttl: 3600
                        };
                        break;
                    case f.POST:
                        i = {
                            url: this.buildOneMobileBaseUrl(r),
                            method: "POST",
                            ttl: 3600,
                            data: this.buildOpenRtbRequestData(r, t),
                            options: {
                                contentType: "application/json",
                                customHeaders: {
                                    "x-openrtb-version": "2.2"
                                }
                            }
                        }
                }
                return i.bidderCode = r.bidder, i.bidId = r.bidId, i.userSyncOn = r.params.userSyncOn, i
            },
            buildMarketplaceUrl: function(e, r) {
                var t = e.params,
                    i = t.server,
                    n = t.region || "us",
                    a = void 0;
                return E.hasOwnProperty(n) || (s.logWarn("Unknown region '" + n + "' for AOL bidder."), n = "us"), a = i || E[n], t.region = n, g({
                    host: a,
                    network: t.network,
                    placement: parseInt(t.placement),
                    pageid: t.pageId || 0,
                    sizeid: t.sizeId || 0,
                    alias: t.alias || s.getUniqueIdentifierStr(),
                    misc: (new Date).getTime(),
                    dynamicParams: this.formatMarketplaceDynamicParams(t, r)
                })
            },
            buildOneMobileGetUrl: function(e, r) {
                var t = e.params,
                    i = t.dcn,
                    n = t.pos,
                    a = t.ext,
                    o = this.buildOneMobileBaseUrl(e);
                if (i && n) {
                    var s = this.formatOneMobileDynamicParams(a, r);
                    o += y({
                        dcn: i,
                        pos: n,
                        dynamicParams: s
                    })
                }
                return o
            },
            buildOneMobileBaseUrl: function(e) {
                return O({
                    host: e.params.host || "hb.nexage.com"
                })
            },
            formatMarketplaceDynamicParams: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments[1],
                    t = {};
                e.bidFloor && (t.bidfloor = e.bidFloor), n(t, this.formatKeyValues(e.keyValues)), n(t, this.formatConsentData(r));
                var i = "";
                return s._each(t, (function(e, r) {
                    i += r + "=" + encodeURIComponent(e) + ";"
                })), i
            },
            formatOneMobileDynamicParams: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                    r = arguments[1];
                this.isSecureProtocol() && (e.secure = x), n(e, this.formatConsentData(r));
                var t = "";
                return s._each(e, (function(e, r) {
                    t += "&" + r + "=" + encodeURIComponent(e)
                })), t
            },
            buildOpenRtbRequestData: function(e, r) {
                var t = {
                    id: e.params.id,
                    imp: e.params.imp
                };
                return this.isConsentRequired(r) && (t.regs = {
                    ext: {
                        gdpr: x
                    }
                }, r.consentString && (t.user = {
                    ext: {
                        consent: r.consentString
                    }
                })), t
            },
            isConsentRequired: function(e) {
                return !(!e || !e.gdprApplies)
            },
            formatKeyValues: function(e) {
                var t = {};
                return s._each(e, (function(e, r) {
                    t["kv" + r] = e
                })), t
            },
            formatConsentData: function(e) {
                var r = {};
                return this.isConsentRequired(e) && (r.gdpr = x, e.consentString && (r.euconsent = e.consentString)), r
            },
            _parseBidResponse: function(e, r) {
                var t = void 0;
                try {
                    t = e.seatbid[0].bid[0]
                } catch (e) {
                    return
                }
                var i = void 0;
                if (t.ext && t.ext.encp) i = t.ext.encp;
                else if (null === (i = t.price) || isNaN(i)) return void s.logError("Invalid price in bid response", m.AOL, bid);
                var n = {
                    bidderCode: r.bidderCode,
                    requestId: r.bidId,
                    ad: t.adm,
                    cpm: i,
                    width: t.w,
                    height: t.h,
                    creativeId: t.crid,
                    pubapiId: e.id,
                    currency: e.cur,
                    dealId: t.dealid,
                    netRevenue: !0,
                    ttl: r.ttl
                };
                return e.ext && e.ext.pixels && c.config.getConfig("aol.userSyncOn") !== u.EVENTS.BID_RESPONSE && (n.ad += this.formatPixels(e.ext.pixels)), n
            },
            formatPixels: function(e) {
                return "<script>var w=window,prebid;for(var i=0;i<10;i++){w = w.parent;prebid=w.pbjs;if(prebid && prebid.aolGlobals && !prebid.aolGlobals.pixelsDropped){try{prebid.aolGlobals.pixelsDropped=true;" + e.replace(/<\/?script( type=('|")text\/javascript('|")|)?>/g, "") + "break;}catch(e){continue;}}}<\/script>"
            },
            isOneMobileBidder: A,
            isSecureProtocol: function() {
                return "https:" === document.location.protocol
            }
        };
        (0, d.registerBidder)(w)
    },
    123: function(e, r) {}
}, [121]);
pbjsChunk([118], {
    126: function(e, r, a) {
        a(127), e.exports = a(128)
    },
    127: function(e, r, a) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = Object.assign || function(e) {
                for (var r = 1; r < arguments.length; r++) {
                    var a = arguments[r];
                    for (var t in a) Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t])
                }
                return e
            },
            p = a(13),
            u = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (r[a] = e[a]);
                    return r.default = e, r
                }
            })(a(0)),
            t = a(1),
            m = a(3),
            c = s(a(10)),
            l = s(a(6));

        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var f = ["id", "mimes", "minduration", "maxduration", "startdelay", "skippable", "playback_method", "frameworks"],
            y = ["age", "external_uid", "segments", "gender", "dnt", "language"],
            v = {
                body: "description",
                cta: "ctatext",
                image: {
                    serverName: "main_image",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                icon: {
                    serverName: "icon",
                    requiredParams: {
                        required: !0
                    },
                    minimumParams: {
                        sizes: [{}]
                    }
                },
                sponsoredBy: "sponsored_by"
            },
            n = r.spec = {
                code: "appnexus",
                aliases: ["appnexusAst", "brealtime", "pagescience", "defymedia", "gourmetads", "matomy", "featureforward", "oftmedia", "districtm"],
                supportedMediaTypes: [m.BANNER, m.VIDEO, m.NATIVE],
                isBidRequestValid: function(e) {
                    return !!(e.params.placementId || e.params.member && e.params.invCode)
                },
                buildRequests: function(e, r) {
                    var a = e.map(b),
                        t = (0, c.default)(e, h),
                        s = void 0;
                    t && (s = {}, Object.keys(t.params.user).filter((function(e) {
                        return (0, l.default)(y, e)
                    })).forEach((function(e) {
                        return s[e] = t.params.user[e]
                    })));
                    var i = (0, c.default)(e, _),
                        n = i ? parseInt(i.params.member, 10) : 0,
                        d = {
                            tags: [].concat(function(e) {
                                if (Array.isArray(e)) {
                                    for (var r = 0, a = Array(e.length); r < e.length; r++) a[r] = e[r];
                                    return a
                                }
                                return Array.from(e)
                            }(a)),
                            user: s,
                            sdk: {
                                source: "pbjs",
                                version: "1.15.0"
                            }
                        };
                    return 0 < n && (d.member_id = n), r && r.gdprConsent && (d.gdpr_consent = {
                        consent_string: r.gdprConsent.consentString,
                        consent_required: r.gdprConsent.gdprApplies
                    }), {
                        method: "POST",
                        url: "//ib.adnxs.com/ut/v3/prebid",
                        data: JSON.stringify(d),
                        bidderRequest: r
                    }
                },
                interpretResponse: function(e, r) {
                    var i = this,
                        n = r.bidderRequest;
                    e = e.body;
                    var d = [];
                    if (!e || e.error) {
                        var a = "in response for " + n.bidderCode + " adapter";
                        return e && e.error && (a += ": " + e.error), u.logError(a), d
                    }
                    return e.tags && e.tags.forEach((function(e) {
                        var r, a, t = (r = e) && r.ads && r.ads.length && (0, c.default)(r.ads, (function(e) {
                            return e.rtb
                        }));
                        if (t && 0 !== t.cpm && (0, l.default)(i.supportedMediaTypes, t.ad_type)) {
                            var s = (function(e, r, a) {
                                var t = {
                                    requestId: e.uuid,
                                    cpm: r.cpm,
                                    creativeId: r.creative_id,
                                    dealId: r.deal_id,
                                    currency: "USD",
                                    netRevenue: !0,
                                    ttl: 300,
                                    appnexus: {
                                        buyerMemberId: r.buyer_member_id
                                    }
                                };
                                if (r.rtb.video) {
                                    if (o(t, {
                                            width: r.rtb.video.player_width,
                                            height: r.rtb.video.player_height,
                                            vastUrl: r.rtb.video.asset_url,
                                            vastImpUrl: r.notify_url,
                                            ttl: 3600
                                        }), r.renderer_url) {
                                        var s = u.deepAccess(a.bids[0], "renderer.options");
                                        o(t, {
                                            adResponse: e,
                                            renderer: (function(e, r) {
                                                var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {},
                                                    t = p.Renderer.install({
                                                        id: r.renderer_id,
                                                        url: r.renderer_url,
                                                        config: a,
                                                        loaded: !1
                                                    });
                                                try {
                                                    t.setRender(I)
                                                } catch (e) {
                                                    u.logWarn("Prebid Error calling setRender on renderer", e)
                                                }
                                                return t.setEventHandlers({
                                                    impression: function() {
                                                        return u.logMessage("AppNexus outstream video impression event")
                                                    },
                                                    loaded: function() {
                                                        return u.logMessage("AppNexus outstream video loaded event")
                                                    },
                                                    ended: function() {
                                                        u.logMessage("AppNexus outstream renderer video event"), document.querySelector("#" + e).style.display = "none"
                                                    }
                                                }), t
                                            })(t.adUnitCode, r, s)
                                        }), t.adResponse.ad = t.adResponse.ads[0], t.adResponse.ad.video = t.adResponse.ad.rtb.video
                                    }
                                } else if (r.rtb[m.NATIVE]) {
                                    var i = r.rtb[m.NATIVE];
                                    t[m.NATIVE] = {
                                        title: i.title,
                                        body: i.desc,
                                        cta: i.ctatext,
                                        sponsoredBy: i.sponsored,
                                        clickUrl: i.link.url,
                                        clickTrackers: i.link.click_trackers,
                                        impressionTrackers: i.impression_trackers,
                                        javascriptTrackers: i.javascript_trackers
                                    }, i.main_img && (t.native.image = {
                                        url: i.main_img.url,
                                        height: i.main_img.height,
                                        width: i.main_img.width
                                    }), i.icon && (t.native.icon = {
                                        url: i.icon.url,
                                        height: i.icon.height,
                                        width: i.icon.width
                                    })
                                } else {
                                    o(t, {
                                        width: r.rtb.banner.width,
                                        height: r.rtb.banner.height,
                                        ad: r.rtb.banner.content
                                    });
                                    try {
                                        var n = r.rtb.trackers[0].impression_urls[0],
                                            d = u.createTrackPixelHtml(n);
                                        t.ad += d
                                    } catch (e) {
                                        u.logError("Error appending tracking pixel", e)
                                    }
                                }
                                return t
                            })(e, t, n);
                            s.mediaType = (a = t.ad_type) === m.VIDEO ? m.VIDEO : a === m.NATIVE ? m.NATIVE : m.BANNER, d.push(s)
                        }
                    })), d
                },
                getUserSyncs: function(e) {
                    if (e.iframeEnabled) return [{
                        type: "iframe",
                        url: "//acdn.adnxs.com/ib/static/usersync/v3/async_usersync.html"
                    }]
                }
            };

        function b(r) {
            var n, d, a = {};
            if (a.sizes = g(r.sizes), a.primary_size = a.sizes[0], a.ad_types = [], a.uuid = r.bidId, r.params.placementId ? a.id = parseInt(r.params.placementId, 10) : a.code = r.params.invCode, a.allow_smaller_sizes = r.params.allowSmallerSizes || !1, a.use_pmt_rule = r.params.usePaymentRule || !1, a.prebid = !0, a.disable_psa = !0, r.params.reserve && (a.reserve = r.params.reserve), r.params.position && (a.position = {
                    above: 1,
                    below: 2
                }[r.params.position] || 0), r.params.trafficSourceCode && (a.traffic_source_code = r.params.trafficSourceCode), r.params.privateSizes && (a.private_sizes = g(r.params.privateSizes)), r.params.supplyType && (a.supply_type = r.params.supplyType), r.params.pubClick && (a.pubclick = r.params.pubClick), r.params.extInvCode && (a.ext_inv_code = r.params.extInvCode), r.params.externalImpId && (a.external_imp_id = r.params.externalImpId), u.isEmpty(r.params.keywords) || (a.keywords = u.transformBidderParamKeywords(r.params.keywords)), (r.mediaType === m.NATIVE || u.deepAccess(r, "mediaTypes." + m.NATIVE)) && (a.ad_types.push(m.NATIVE), r.nativeParams)) {
                var e = (n = r.nativeParams, d = {}, Object.keys(n).forEach((function(e) {
                    var r = v[e] && v[e].serverName || v[e] || e,
                        a = v[e] && v[e].requiredParams;
                    d[r] = o({}, a, n[e]);
                    var t = v[e] && v[e].minimumParams;
                    if (a && t) {
                        var s = Object.keys(n[e]),
                            i = Object.keys(a);
                        0 === s.filter((function(e) {
                            return !(0, l.default)(i, e)
                        })).length && (d[r] = o({}, d[r], t))
                    }
                })), d);
                a[m.NATIVE] = {
                    layouts: [e]
                }
            }
            var t = u.deepAccess(r, "mediaTypes." + m.VIDEO),
                s = u.deepAccess(r, "mediaTypes.video.context");
            return (r.mediaType === m.VIDEO || t) && a.ad_types.push(m.VIDEO), (r.mediaType === m.VIDEO || t && "outstream" !== s) && (a.require_asset_url = !0), r.params.video && (a.video = {}, Object.keys(r.params.video).filter((function(e) {
                return (0, l.default)(f, e)
            })).forEach((function(e) {
                return a.video[e] = r.params.video[e]
            }))), (u.isEmpty(r.mediaType) && u.isEmpty(r.mediaTypes) || r.mediaType === m.BANNER || r.mediaTypes && r.mediaTypes[m.BANNER]) && a.ad_types.push(m.BANNER), a
        }

        function g(e) {
            var r = [],
                a = {};
            if (u.isArray(e) && 2 === e.length && !u.isArray(e[0])) a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
            else if ("object" === (void 0 === e ? "undefined" : i(e)))
                for (var t = 0; t < e.length; t++) {
                    var s = e[t];
                    (a = {}).width = parseInt(s[0], 10), a.height = parseInt(s[1], 10), r.push(a)
                }
            return r
        }

        function h(e) {
            return !!e.params.user
        }

        function _(e) {
            return !!parseInt(e.params.member, 10)
        }

        function I(e) {
            e.renderer.push((function() {
                window.ANOutstreamVideo.renderAd({
                    tagId: e.adResponse.tag_id,
                    sizes: [e.getSize().split("x")],
                    targetId: e.adUnitCode,
                    uuid: e.adResponse.uuid,
                    adResponse: e.adResponse,
                    rendererOptions: e.renderer.getConfig()
                }, function(e, r, a) {
                    e.renderer.handleVideoEvent({
                        id: r,
                        eventName: a
                    })
                }.bind(null, e))
            }))
        }(0, t.registerBidder)(n)
    },
    128: function(e, r) {}
}, [126]);
pbjsChunk([38], {
    393: function(e, r, t) {
        t(394), e.exports = t(395)
    },
    394: function(e, r, t) {
        "use strict";
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), r.spec = void 0;
        var u = function(e, r) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return (function(e, r) {
                    var t = [],
                        i = !0,
                        n = !1,
                        o = void 0;
                    try {
                        for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                    } catch (e) {
                        n = !0, o = e
                    } finally {
                        try {
                            !i && s.return && s.return()
                        } finally {
                            if (n) throw o
                        }
                    }
                    return t
                })(e, r);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            },
            p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            };
        r.masSizeOrdering = o, r.resetUserSync = function() {
            d = !1
        };
        var l = (function(e) {
                {
                    if (e && e.__esModule) return e;
                    var r = {};
                    if (null != e)
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r.default = e, r
                }
            })(t(0)),
            i = t(1),
            f = t(2),
            y = t(3);
        var v = "pbjs_lite_v1.15.0";
        var a = "//fastlane.rubiconproject.com/a/api/fastlane.json",
            g = {
                1: "468x60",
                2: "728x90",
                5: "120x90",
                8: "120x600",
                9: "160x600",
                10: "300x600",
                13: "200x200",
                14: "250x250",
                15: "300x250",
                16: "336x280",
                19: "300x100",
                31: "980x120",
                32: "250x360",
                33: "180x500",
                35: "980x150",
                37: "468x400",
                38: "930x180",
                43: "320x50",
                44: "300x50",
                48: "300x300",
                53: "1024x768",
                54: "300x1050",
                55: "970x90",
                57: "970x250",
                58: "1000x90",
                59: "320x80",
                60: "320x150",
                61: "1000x1000",
                64: "580x500",
                65: "640x480",
                67: "320x480",
                68: "1800x1000",
                72: "320x320",
                73: "320x160",
                78: "980x240",
                79: "980x300",
                80: "980x400",
                83: "480x300",
                94: "970x310",
                96: "970x210",
                101: "480x320",
                102: "768x1024",
                103: "480x280",
                108: "320x240",
                113: "1000x300",
                117: "320x100",
                125: "800x250",
                126: "200x600",
                144: "980x600",
                159: "320x250",
                195: "600x300",
                199: "640x200",
                213: "1030x590",
                214: "980x360",
                232: "580x400"
            };
        l._each(g, (function(e, r) {
            return g[e] = r
        }));
        var s = r.spec = {
            code: "rubicon",
            aliases: ["rubiconLite"],
            supportedMediaTypes: [y.BANNER, y.VIDEO],
            isBidRequestValid: function(e) {
                if ("object" !== p(e.params)) return !1;
                var r = e.params;
                return !!/^\d+$/.test(r.accountId) && ("outstream" === l.deepAccess(e, "mediaTypes." + y.VIDEO + ".context") && l.logWarn("Warning: outstream video for Rubicon Client Adapter is not supported yet"), s.hasVideoMediaType(e) && void 0 !== l.deepAccess(e, "mediaTypes." + y.BANNER) && l.logWarn("Warning: instream video and banner requested for same ad unit, continuing with video instream request"), ("video" !== e.mediaType || void 0 !== l.deepAccess(e, "params.video.size_id")) && (!(e.mediaTypes && !s.hasVideoMediaType(e) && void 0 === e.mediaTypes.banner) && !(h(e).length < 1)))
            },
            buildRequests: function(e, o) {
                var r = [],
                    t = e.filter(s.hasVideoMediaType).map((function(e) {
                        e.startTime = (new Date).getTime();
                        var r = e.params,
                            t = h(e),
                            i = {
                                page_url: _(e),
                                resolution: m(),
                                account_id: r.accountId,
                                integration: v,
                                "x_source.tid": e.transactionId,
                                timeout: o.timeout - (Date.now() - o.auctionStart + 500),
                                stash_creatives: !0,
                                ae_pass_through_parameters: r.video.aeParams,
                                slots: []
                            },
                            n = {
                                site_id: r.siteId,
                                zone_id: r.zoneId,
                                position: x(r.position),
                                floor: .01 < parseFloat(r.floor) ? r.floor : .01,
                                element_id: e.adUnitCode,
                                name: e.adUnitCode,
                                language: r.video.language,
                                width: t[0],
                                height: t[1],
                                size_id: r.video.size_id
                            };
                        return r.inventory && "object" === p(r.inventory) && (n.inventory = r.inventory), r.keywords && Array.isArray(r.keywords) && (n.keywords = r.keywords), r.visitor && "object" === p(r.visitor) && (n.visitor = r.visitor), i.slots.push(n), o.gdprConsent && ("boolean" == typeof o.gdprConsent.gdprApplies && (i.gdpr = Number(o.gdprConsent.gdprApplies)), i.gdpr_consent = o.gdprConsent.consentString), {
                            method: "POST",
                            url: "//fastlane-adv.rubiconproject.com/v1/auction/video",
                            data: i,
                            bidRequest: e
                        }
                    }));
                if (!0 !== f.config.getConfig("rubicon.singleRequest")) r = t.concat(e.filter((function(e) {
                    return !s.hasVideoMediaType(e)
                })).map((function(e) {
                    var i = s.createSlotParams(e, o);
                    return {
                        method: "GET",
                        url: a,
                        data: s.getOrderedParams(i).reduce((function(e, r) {
                            var t = i[r];
                            return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e
                        }), "") + "slots=1&rand=" + Math.random(),
                        bidRequest: e
                    }
                })));
                else {
                    var n = e.filter((function(e) {
                        return !s.hasVideoMediaType(e)
                    })).reduce((function(e, r) {
                        return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e
                    }), {});
                    r = t.concat(Object.keys(n).map((function(e) {
                        var r = n[e];
                        10 < r.length && (l.logWarn("single request mode has a limit of 10 bids: " + (r.length - 10) + " bids were not sent"), r = r.slice(0, 10));
                        var i = s.combineSlotUrlParams(r.map((function(e) {
                            return s.createSlotParams(e, o)
                        })));
                        return {
                            method: "GET",
                            url: a,
                            data: s.getOrderedParams(i).reduce((function(e, r) {
                                var t = i[r];
                                return l.isStr(t) && "" !== t || l.isNumber(t) ? "" + e + r + "=" + encodeURIComponent(t) + "&" : e
                            }), "") + "slots=" + r.length + "&rand=" + Math.random(),
                            bidRequest: r
                        }
                    })))
                }
                return r
            },
            getOrderedParams: function(e) {
                var r = /^tg_v/,
                    t = /^tg_i/,
                    i = ["account_id", "site_id", "zone_id", "size_id", "alt_size_ids", "p_pos", "gdpr", "gdpr_consent", "rf", "dt.id", "dt.keyv", "dt.pref", "p_geo.latitude", "p_geo.longitude", "kw"].concat(Object.keys(e).filter((function(e) {
                        return r.test(e)
                    }))).concat(Object.keys(e).filter((function(e) {
                        return t.test(e)
                    }))).concat(["tk_flint", "x_source.tid", "p_screen_res", "rp_floor", "rp_secure", "tk_user_key"]);
                return i.concat(Object.keys(e).filter((function(e) {
                    return -1 === i.indexOf(e)
                })))
            },
            combineSlotUrlParams: function(n) {
                if (1 === n.length) return n[0];
                var i = n.reduce((function(r, t, i) {
                        return Object.keys(t).forEach((function(e) {
                            r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e])
                        })), r
                    }), {}),
                    o = new RegExp("^([^;]*)(;\\1)+$");
                return Object.keys(i).forEach((function(e) {
                    var r = i[e].join(";"),
                        t = r.match(o);
                    i[e] = t ? t[1] : r
                })), i
            },
            createSlotParams: function(e, r) {
                e.startTime = (new Date).getTime();
                var t = e.params,
                    i = h(e),
                    n = t.latLong || [],
                    o = u(n, 2),
                    a = o[0],
                    s = o[1],
                    d = {
                        account_id: t.accountId,
                        site_id: t.siteId,
                        zone_id: t.zoneId,
                        size_id: i[0],
                        alt_size_ids: i.slice(1).join(",") || void 0,
                        p_pos: x(t.position),
                        rp_floor: .01 < (t.floor = parseFloat(t.floor)) ? t.floor : .01,
                        rp_secure: "https:" === location.protocol ? "1" : "0",
                        tk_flint: v,
                        "x_source.tid": e.transactionId,
                        p_screen_res: m(),
                        kw: Array.isArray(t.keywords) ? t.keywords.join(",") : "",
                        tk_user_key: t.userId,
                        "p_geo.latitude": isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                        "p_geo.longitude": isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                        "tg_fl.eid": e.code,
                        rf: _(e)
                    };
                r.gdprConsent && ("boolean" == typeof r.gdprConsent.gdprApplies && (d.gdpr = Number(r.gdprConsent.gdprApplies)), d.gdpr_consent = r.gdprConsent.consentString), null !== t.visitor && "object" === p(t.visitor) && Object.keys(t.visitor).forEach((function(e) {
                    d["tg_v." + e] = t.visitor[e].toString()
                })), null !== t.inventory && "object" === p(t.inventory) && Object.keys(t.inventory).forEach((function(e) {
                    d["tg_i." + e] = t.inventory[e].toString()
                }));
                var c = (function() {
                    var e = (r = window.DigiTrust && (f.config.getConfig("digiTrustId") || window.DigiTrust.getUser({
                        member: "T9QSFKPDN9"
                    })), r && r.success && r.identity || null);
                    var r;
                    if (!e || e.privacy && e.privacy.optout) return [];
                    return {
                        "dt.id": e.id,
                        "dt.keyv": e.keyv,
                        "dt.pref": 0
                    }
                })();
                return Object.keys(c).forEach((function(e) {
                    d[e] = c[e]
                })), d
            },
            hasVideoMediaType: function(e) {
                return void 0 !== l.deepAccess(e, "params.video.size_id") && (e.mediaType === y.VIDEO || "instream" === l.deepAccess(e, "mediaTypes." + y.VIDEO + ".context"))
            },
            interpretResponse: function(d, e) {
                var c = e.bidRequest;
                if (!(d = d.body) || "object" !== (void 0 === d ? "undefined" : p(d))) return [];
                var r = d.ads;
                return "object" === (void 0 === c ? "undefined" : p(c)) && !Array.isArray(c) && s.hasVideoMediaType(c) && "object" === (void 0 === r ? "undefined" : p(r)) && (r = r[c.adUnitCode]), !Array.isArray(r) || r.length < 1 ? [] : r.reduce((function(e, r, t) {
                    if ("ok" !== r.status) return e;
                    var i, n = Array.isArray(c) ? c[t] : c;
                    if (n && "object" === (void 0 === n ? "undefined" : p(n))) {
                        var o = {
                            requestId: n.bidId,
                            currency: "USD",
                            creativeId: r.creative_id,
                            cpm: r.cpm || 0,
                            dealId: r.deal,
                            ttl: 300,
                            netRevenue: f.config.getConfig("rubicon.netRevenue") || !1,
                            rubicon: {
                                advertiserId: r.advertiser,
                                networkId: r.network
                            }
                        };
                        if (r.creative_type && (o.mediaType = r.creative_type), r.creative_type === y.VIDEO) o.width = n.params.video.playerWidth, o.height = n.params.video.playerHeight, o.vastUrl = r.creative_depot_url, o.impression_id = r.impression_id, o.videoCacheKey = r.impression_id;
                        else {
                            o.ad = (i = r.script, "<html>\n<head><script type='text/javascript'>inDapIF=true;<\/script></head>\n<body style='margin : 0; padding: 0;'>\n\x3c!-- Rubicon Project Ad Tag --\x3e\n<div data-rp-impression-id='" + r.impression_id + "'>\n<script type='text/javascript'>" + i + "<\/script>\n</div>\n</body>\n</html>");
                            var a = g[r.size_id].split("x").map((function(e) {
                                    return Number(e)
                                })),
                                s = u(a, 2);
                            o.width = s[0], o.height = s[1]
                        }
                        o.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce((function(e, r) {
                            return e[r.key] = r.values[0], e
                        }), {
                            rpfl_elemid: n.adUnitCode
                        }), e.push(o)
                    } else l.logError("bidRequest undefined at index position:" + t, c, d);
                    return e
                }), []).sort((function(e, r) {
                    return (r.cpm || 0) - (e.cpm || 0)
                }))
            },
            getUserSyncs: function(e, r, t) {
                if (!d && e.iframeEnabled) {
                    var i = "";
                    return t && "string" == typeof t.consentString && ("boolean" == typeof t.gdprApplies ? i += "?gdpr=" + Number(t.gdprApplies) + "&gdpr_consent=" + t.consentString : i += "?gdpr_consent=" + t.consentString), d = !0, {
                        type: "iframe",
                        url: "https://eus.rubiconproject.com/usync.html" + i
                    }
                }
            }
        };

        function m() {
            return [window.screen.width, window.screen.height].join("x")
        }

        function _(e) {
            var r = f.config.getConfig("pageUrl");
            return e.params.referrer ? r = e.params.referrer : r || (r = l.getTopWindowUrl()), e.params.secure ? r.replace(/^http:/i, "https:") : r
        }

        function h(e) {
            var r = e.params;
            if (s.hasVideoMediaType(e)) {
                var t = [];
                return void 0 !== l.deepAccess(e, "mediaTypes.video.playerSize") ? t = e.mediaTypes.video.playerSize : r.video && r.video.playerWidth && r.video.playerHeight ? t = [r.video.playerWidth, r.video.playerHeight] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (t = e.sizes[0]), t
            }
            var i = [];
            return Array.isArray(r.sizes) ? i = r.sizes : void 0 !== l.deepAccess(e, "mediaTypes.banner.sizes") ? i = n(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? i = n(e.sizes) : l.logWarn("Warning: no sizes are setup or found"), o(i)
        }

        function n(e) {
            return l.parseSizesInput(e).reduce((function(e, r) {
                var t = parseInt(g[r], 10);
                return t && e.push(t), e
            }), [])
        }

        function x(e) {
            return "atf" === e || "btf" === e ? e : "unknown"
        }

        function o(e) {
            var n = [15, 2, 9];
            return e.sort((function(e, r) {
                var t = n.indexOf(e),
                    i = n.indexOf(r);
                return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r
            }))
        }
        var d = !1;
        (0, i.registerBidder)(s)
    },
    395: function(e, r) {}
}, [393]);
pbjs.processQueue();