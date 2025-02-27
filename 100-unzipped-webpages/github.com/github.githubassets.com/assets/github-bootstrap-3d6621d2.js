self.System = self.System || (() => {
    const e = {},
        t = {},
        n = e => e.replace(/^.\/(\w+)-[a-f0-9]{8,}.js$/, "./$1.js"),
        s = {
            register(o, r) {
                const i = n(`./${((document.currentScript||{}).src||"").split("?").shift().split("/").pop()}`),
                    a = {},
                    c = r((e, t) => t ? a[e] = t : Object.assign(a, e), s);
                e[i] = Promise.all(o.map((e, t) => s.import(n(e)).then(c.setters[t]))).then(() => (c.execute(), a)).catch(e => {
                    throw e.message = `evaluating module ${i}: ${e.message}`, e
                }), t[i] && (t[i](e[i]), delete t[i])
            },
            import: n => e[n] || (e[n] = new Promise((e, s) => {
                const o = setTimeout(() => {
                    s(new Error(`could not resolve ${n}`))
                }, 1e4);
                t[n] = (t => {
                    clearTimeout(o), e(t)
                })
            }))
        };
    return s
})(), System.register(["./frameworks.js"], function(e, t) {
    "use strict";
    var n, s, o, r, i, a, c, l, u, d, m, f, p, g, h, b, v, w, j, y, E, L, T, k, M, A, x, S, H, C, q, I, _, $, D, R, B, N, P, F, O, U, W, z, V, K, Y, X, J, G, Q, Z, ee, te, ne, se, oe, re, ie, ae, ce, le, ue, de, me, fe, pe, ge, he, be, ve, we, je, ye, Ee, Le, Te, ke, Me, Ae, xe, Se, He, Ce, qe, Ie, _e, $e, De, Re, Be, Ne, Pe, Fe, Oe, Ue, We, ze, Ve, Ke, Ye, Xe, Je, Ge, Qe, Ze, et, tt, nt, st, ot, rt, it, at;
    return {
        setters: [function(e) {
            n = e.J, s = e.K, o = e.L, r = e.e, i = e.M, a = e.N, c = e.i, l = e.O, u = e.d, d = e.f, m = e.P, f = e.Q, p = e.h, g = e.p, h = e.o, b = e.t, v = e.b, w = e.R, j = e.r, y = e.u, E = e.l, L = e.g, T = e.F, k = e.y, M = e.z, A = e.S, x = e.T, S = e.s, H = e.q, C = e.U, q = e.V, I = e.k, _ = e.j, $ = e.H, D = e.W, R = e.X, B = e.n, N = e.Y, P = e.Z, F = e._, O = e.$, U = e.a0, W = e.a1, z = e.a2, V = e.a3, K = e.a4, Y = e.a5, X = e.a6, J = e.a7, G = e.a8, Q = e.a9, Z = e.aa, ee = e.ab, te = e.I, ne = e.w, se = e.ac, oe = e.ad, re = e.ae, ie = e.af, ae = e.ag, ce = e.ah, le = e.ai, ue = e.aj, de = e.ak, me = e.al, fe = e.am, pe = e.an, ge = e.ao, he = e.ap, be = e.aq, ve = e.ar, we = e.m, e.as, je = e.at, ye = e.au, Ee = e.av, Le = e.aw, Te = e.ax, ke = e.v, Me = e.ay, Ae = e.x, xe = e.az, Se = e.aA, He = e.aB, Ce = e.aC, qe = e.aD, Ie = e.aE, _e = e.aF, $e = e.aG, De = e.aH, Re = e.aI, Be = e.E, Ne = e.aJ, Pe = e.aK, Fe = e.aL, Oe = e.aM, Ue = e.aN, We = e.aO, ze = e.aP, Ve = e.aQ, Ke = e.c, Ye = e.a, Xe = e.aR, Je = e.aS, Ge = e.aT, Qe = e.aU, Ze = e.aV, et = e.aW, tt = e.aX, nt = e.G, st = e.aY, ot = e.aZ, rt = e.a_, it = e.a$, at = e.b0
        }],
        execute: function() {
            window.requestIdleCallback = window.requestIdleCallback || function(e) {
                var t = Date.now();
                return setTimeout(function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - t))
                        }
                    })
                }, 1)
            }, window.cancelIdleCallback = window.cancelIdleCallback || function(e) {
                clearTimeout(e)
            };
            n(function(e, t) {
                ! function() {
                    var t = window,
                        n = document;
                    e.exports = {
                        polyfill: function() {
                            if (!("scrollBehavior" in n.documentElement.style && !0 !== t.__forceSmoothScrollPolyfill__)) {
                                var e, s = t.HTMLElement || t.Element,
                                    o = 468,
                                    r = (e = t.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(e) ? 1 : 0),
                                    i = {
                                        scroll: t.scroll || t.scrollTo,
                                        scrollBy: t.scrollBy,
                                        elementScroll: s.prototype.scroll || c,
                                        scrollIntoView: s.prototype.scrollIntoView
                                    },
                                    a = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now;
                                t.scroll = t.scrollTo = function() {
                                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? p.call(t, n.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : i.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                                }, t.scrollBy = function() {
                                    void 0 !== arguments[0] && (l(arguments[0]) ? i.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : p.call(t, n.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                                }, s.prototype.scroll = s.prototype.scrollTo = function() {
                                    if (void 0 !== arguments[0])
                                        if (!0 !== l(arguments[0])) {
                                            var e = arguments[0].left,
                                                t = arguments[0].top;
                                            p.call(this, this, void 0 === e ? this.scrollLeft : ~~e, void 0 === t ? this.scrollTop : ~~t)
                                        } else {
                                            if ("number" == typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value couldn't be converted");
                                            i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                        }
                                }, s.prototype.scrollBy = function() {
                                    void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                        left: ~~arguments[0].left + this.scrollLeft,
                                        top: ~~arguments[0].top + this.scrollTop,
                                        behavior: arguments[0].behavior
                                    }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                                }, s.prototype.scrollIntoView = function() {
                                    if (!0 !== l(arguments[0])) {
                                        var e = function(e) {
                                                var t;
                                                do {
                                                    t = (e = e.parentNode) === n.body
                                                } while (!1 === t && !1 === m(e));
                                                return t = null, e
                                            }(this),
                                            s = e.getBoundingClientRect(),
                                            o = this.getBoundingClientRect();
                                        e !== n.body ? (p.call(this, e, e.scrollLeft + o.left - s.left, e.scrollTop + o.top - s.top), "fixed" !== t.getComputedStyle(e).position && t.scrollBy({
                                            left: s.left,
                                            top: s.top,
                                            behavior: "smooth"
                                        })) : t.scrollBy({
                                            left: o.left,
                                            top: o.top,
                                            behavior: "smooth"
                                        })
                                    } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                                }
                            }

                            function c(e, t) {
                                this.scrollLeft = e, this.scrollTop = t
                            }

                            function l(e) {
                                if (null === e || "object" != typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                                if ("object" == typeof e && "smooth" === e.behavior) return !1;
                                throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                            }

                            function u(e, t) {
                                return "Y" === t ? e.clientHeight + r < e.scrollHeight : "X" === t ? e.clientWidth + r < e.scrollWidth : void 0
                            }

                            function d(e, n) {
                                var s = t.getComputedStyle(e, null)["overflow" + n];
                                return "auto" === s || "scroll" === s
                            }

                            function m(e) {
                                var t = u(e, "Y") && d(e, "Y"),
                                    n = u(e, "X") && d(e, "X");
                                return t || n
                            }

                            function f(e) {
                                var n, s, r, i, c = (a() - e.startTime) / o;
                                i = c = c > 1 ? 1 : c, n = .5 * (1 - Math.cos(Math.PI * i)), s = e.startX + (e.x - e.startX) * n, r = e.startY + (e.y - e.startY) * n, e.method.call(e.scrollable, s, r), s === e.x && r === e.y || t.requestAnimationFrame(f.bind(t, e))
                            }

                            function p(e, s, o) {
                                var r, l, u, d, m = a();
                                e === n.body ? (r = t, l = t.scrollX || t.pageXOffset, u = t.scrollY || t.pageYOffset, d = i.scroll) : (r = e, l = e.scrollLeft, u = e.scrollTop, d = c), f({
                                    scrollable: r,
                                    method: d,
                                    startTime: m,
                                    startX: l,
                                    startY: u,
                                    x: s,
                                    y: o
                                })
                            }
                        }
                    }
                }()
            }).polyfill;
            window.getSelection && ! function() {
                const e = document.createElement("div");
                return e.style.cssText = "-ms-user-select: element; user-select: contain;", "element" === e.style.getPropertyValue("-ms-user-select") || "contain" === e.style.getPropertyValue("-ms-user-select") || "contain" === e.style.getPropertyValue("user-select")
            }() && document.addEventListener("click", function(e) {
                if (!(e.target instanceof Element)) return;
                const t = e.target.closest(".user-select-contain");
                if (!t) return;
                const n = window.getSelection();
                if (!n.rangeCount) return;
                const s = n.getRangeAt(0).commonAncestorContainer;
                t.contains(s) || n.selectAllChildren(t)
            }), window.Element && !Element.prototype.toggleAttribute && (Element.prototype.toggleAttribute = function(e, t) {
                var n = !!t,
                    s = 2 === arguments.length && !t;
                return null !== this.getAttribute(e) ? !!n || (this.removeAttribute(e), !1) : !s && (this.setAttribute(e, ""), !0)
            }), Array.prototype.flatMap || Object.defineProperty(Array.prototype, "flatMap", {
                writable: !0,
                configurable: !0,
                value(e, t) {
                    return Array.prototype.reduce.call(this, (n, s, o, r) => {
                        const i = e.call(t, s, o, r);
                        return Array.isArray(i) ? n.concat(i) : (n.push(i), n)
                    })
                }
            });
            let e = 0;

            function t(e, t = {}) {
                ct(ut(e, t))
            }

            function ct(t) {
                const n = o(document, "browser-errors-url");
                n && (e++, window.fetch(n, {
                    method: "post",
                    body: JSON.stringify(t)
                }).catch(function() {}))
            }
            const lt = (new Date).getTime();

            function ut(e, t = {}) {
                let n;
                if (e) {
                    let s = "";
                    const o = e;
                    if (e.stack) {
                        const {
                            framesToPop: t
                        } = o;
                        s = function(e, t = 0) {
                            if (0 === t) return e;
                            let n = e.split("\n");
                            n.length >= 2 && dt.test(n[0]) && mt.test(n[1]) && n.shift();
                            null != t && (n = n.slice(t));
                            return n.join("\n")
                        }(e.stack, t)
                    } else {
                        let {
                            fileName: e,
                            lineNumber: n,
                            columnNumber: r
                        } = o;
                        null == e && (e = String(t.filename)), null == n && (n = t.lineno || 0), null == r && (r = t.colno || 0), s = `${e}:${n}:${r}`
                    }
                    n = {
                        message: e.message,
                        name: e.name,
                        stack: s,
                        toString: e.toString()
                    }
                }
                return Object.assign({
                    error: n,
                    filename: "",
                    lineno: 0,
                    colno: 0,
                    url: window.location.href,
                    readyState: document.readyState,
                    referrer: document.referrer,
                    timeSinceLoad: Math.round((new Date).getTime() - lt),
                    user: ft() || void 0
                }, t)
            }
            const dt = /^\S/,
                mt = /^\s+at /;

            function ft() {
                const e = o(document, "user-login");
                if (e) return e;
                const t = window._octo && window._octo._clientId();
                return t ? `anonymous-${t}` : null
            }
            let pt = !1;

            function gt() {
                return !pt && e < 10 && "function" == typeof Blob && "undefined" != typeof customElements && "undefined" != typeof Intl && "undefined" != typeof MutationObserver && !s(document)
            }

            function ht(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            window.addEventListener("pageshow", () => {
                pt = !1
            }), window.addEventListener("pagehide", () => {
                pt = !0
            }), window.addEventListener("error", function(e) {
                gt() && ct(function(e) {
                    const {
                        message: t,
                        filename: n,
                        lineno: s,
                        colno: o,
                        error: r
                    } = e;
                    return ut(r, {
                        message: t,
                        filename: n,
                        lineno: s,
                        colno: o
                    })
                }(e))
            }), window.addEventListener("unhandledrejection", function(e) {
                gt() && e.promise && e.promise.catch(e => {
                    const n = {};
                    if (e && e.response instanceof Response) {
                        if (/^HTTP (401|403|405|429|502)/.test(e.message)) return;
                        n.dataRemoteUrl = e.response.url
                    }
                    t(e, n)
                })
            }), "#b00m" === window.location.hash && setTimeout(() => {
                throw new Error("b00m")
            });
            class bt extends Error {
                constructor(e, t, n) {
                    super(), ht(this, "statusCode", void 0), ht(this, "responseText", void 0), ht(this, "contentType", void 0), this.statusCode = e, this.responseText = t, this.contentType = n
                }
            }
            const vt = new WeakMap,
                wt = new WeakMap,
                jt = new WeakMap;
            class AutoCheckElement extends HTMLElement {
                constructor() {
                    super(), jt.set(this, function(e, t) {
                        let n;
                        return function() {
                            for (var s = arguments.length, o = new Array(s), r = 0; r < s; r++) o[r] = arguments[r];
                            const i = this;
                            clearTimeout(n), n = setTimeout(function() {
                                clearTimeout(n), e.apply(i, o)
                            }, t)
                        }
                    }(function(e) {
                        const t = e.src;
                        if (!t) throw new Error("missing src");
                        const n = e.csrf;
                        if (!n) throw new Error("missing csrf");
                        const s = e.input;
                        if (!s) return;
                        const o = new FormData;
                        o.append("authenticity_token", n), o.append("value", s.value);
                        const r = o.entries ? [...o.entries()].sort().toString() : null;
                        if (r && r === wt.get(s)) return;
                        if (wt.set(s, r), s.dispatchEvent(new CustomEvent("auto-check-send", {
                                detail: {
                                    body: o
                                },
                                bubbles: !0
                            })), !s.value.trim()) return void s.dispatchEvent(new CustomEvent("auto-check-complete", {
                            bubbles: !0
                        }));
                        const i = () => {
                            e.dispatchEvent(new CustomEvent("loadend")), s.dispatchEvent(new CustomEvent("auto-check-complete", {
                                bubbles: !0
                            }))
                        };
                        e.required && s.setCustomValidity("Verifying…");
                        e.dispatchEvent(new CustomEvent("loadstart")),
                            function(e, t, n) {
                                const s = vt.get(e);
                                s && s.abort();
                                const o = () => vt.delete(e),
                                    r = new XMLHttpRequest;
                                vt.set(e, r), r.open("POST", n, !0), r.setRequestHeader("Accept", "text/html; fragment");
                                const i = function(e, t) {
                                    return new Promise((n, s) => {
                                        e.onload = function() {
                                            e.status >= 200 && e.status < 300 ? n(e.responseText) : s(new bt(e.status, e.responseText, e.getResponseHeader("Content-Type")))
                                        }, e.onerror = function() {
                                            s(new bt(e.status, e.responseText, e.getResponseHeader("Content-Type")))
                                        }, e.send(t)
                                    })
                                }(r, t);
                                return i.then(o, o), i
                            }(s, o, t).then(t => {
                                e.dispatchEvent(new CustomEvent("load"));
                                const n = t ? t.trim() : null;
                                e.required && s.setCustomValidity(""), s.dispatchEvent(new CustomEvent("auto-check-success", {
                                    detail: {
                                        message: n
                                    },
                                    bubbles: !0
                                }))
                            }).catch(t => {
                                e.required && s.setCustomValidity(yt(t) || "Something went wrong"), e.dispatchEvent(new CustomEvent("error")), s.dispatchEvent(new CustomEvent("auto-check-error", {
                                    detail: {
                                        message: yt(t)
                                    },
                                    bubbles: !0
                                }))
                            }).then(i, i)
                    }.bind(null, this), 300))
                }
                connectedCallback() {
                    const e = this.input;
                    if (!e) return;
                    const t = jt.get(this);
                    t && (e.addEventListener("change", t), e.addEventListener("input", t), e.autocomplete = "off", e.spellcheck = !1)
                }
                disconnectedCallback() {
                    const e = this.input;
                    if (!e) return;
                    const t = jt.get(this);
                    t && (e.removeEventListener("change", t), e.removeEventListener("input", t), e.setCustomValidity(""))
                }
                get input() {
                    const e = this.querySelector("input");
                    return e instanceof HTMLInputElement ? e : null
                }
                get src() {
                    const e = this.getAttribute("src");
                    if (!e) return "";
                    const t = this.ownerDocument.createElement("a");
                    return t.href = e, t.href
                }
                set src(e) {
                    this.setAttribute("src", e)
                }
                get csrf() {
                    return this.getAttribute("csrf") || ""
                }
                set csrf(e) {
                    this.setAttribute("csrf", e)
                }
                get required() {
                    return this.hasAttribute("required")
                }
                set required(e) {
                    const t = this.input;
                    t && (t.required = e, e ? this.setAttribute("required", "") : this.removeAttribute("required"))
                }
            }

            function yt(e) {
                if (422 === e.statusCode && e.responseText && e.contentType.includes("text/html; fragment")) return e.responseText
            }

            function Et(e) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(e.textContent);
                const t = getSelection();
                if (null == t) return Promise.reject(new Error);
                t.removeAllRanges();
                const n = document.createRange();
                return n.selectNodeContents(e), t.addRange(n), document.execCommand("copy"), t.removeAllRanges(), Promise.resolve()
            }

            function Lt(e) {
                if ("clipboard" in navigator) return navigator.clipboard.writeText(e);
                const t = document.body;
                if (!t) return Promise.reject(new Error);
                const n = function(e) {
                    const t = document.createElement("pre");
                    return t.style.width = "1px", t.style.height = "1px", t.style.position = "fixed", t.style.top = "5px", t.textContent = e, t
                }(e);
                return t.appendChild(n), Et(n), t.removeChild(n), Promise.resolve()
            }

            function Tt(e) {
                const t = e.getAttribute("for"),
                    n = e.getAttribute("value");

                function s() {
                    e.dispatchEvent(new CustomEvent("clipboard-copy", {
                        bubbles: !0
                    }))
                }
                if (n) Lt(n).then(s);
                else if (t) {
                    const n = e.ownerDocument.getElementById(t);
                    n && (o = n, o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement ? "hidden" === o.type ? Lt(o.value) : function(e) {
                        if ("clipboard" in navigator) return navigator.clipboard.writeText(e.value);
                        e.select(), document.execCommand("copy");
                        const t = getSelection();
                        return null != t && t.removeAllRanges(), Promise.resolve()
                    }(o) : o instanceof HTMLAnchorElement && o.hasAttribute("href") ? Lt(o.href) : Et(o)).then(s)
                }
                var o
            }

            function kt(e) {
                const t = e.currentTarget;
                t instanceof HTMLElement && Tt(t)
            }

            function Mt(e) {
                if (" " === e.key || "Enter" === e.key) {
                    const t = e.currentTarget;
                    t instanceof HTMLElement && (e.preventDefault(), Tt(t))
                }
            }

            function At(e) {
                e.currentTarget.addEventListener("keydown", Mt)
            }

            function xt(e) {
                e.currentTarget.removeEventListener("keydown", Mt)
            }
            window.customElements.get("auto-check") || (window.AutoCheckElement = AutoCheckElement, window.customElements.define("auto-check", AutoCheckElement));
            class ClipboardCopyElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("click", kt), this.addEventListener("focus", At), this.addEventListener("blur", xt)
                }
                connectedCallback() {
                    this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), this.hasAttribute("role") || this.setAttribute("role", "button")
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(e) {
                    this.setAttribute("value", e)
                }
            }
            window.customElements.get("clipboard-copy") || (window.ClipboardCopyElement = ClipboardCopyElement, window.customElements.define("clipboard-copy", ClipboardCopyElement));
            class DetailsMenuElement extends HTMLElement {
                constructor() {
                    super()
                }
                get preload() {
                    return this.hasAttribute("preload")
                }
                set preload(e) {
                    e ? this.setAttribute("preload", "") : this.removeAttribute("preload")
                }
                get src() {
                    return this.getAttribute("src") || ""
                }
                set src(e) {
                    this.setAttribute("src", e)
                }
                connectedCallback() {
                    this.hasAttribute("role") || this.setAttribute("role", "menu");
                    const e = this.parentElement;
                    if (!e) return;
                    const t = e.querySelector("summary");
                    t && (t.setAttribute("aria-haspopup", "menu"), t.hasAttribute("role") || t.setAttribute("role", "button")), e.addEventListener("click", Dt), e.addEventListener("change", Dt), e.addEventListener("keydown", Bt), e.addEventListener("toggle", Ht, {
                        once: !0
                    }), e.addEventListener("toggle", qt), this.preload && e.addEventListener("mouseover", Ht, {
                        once: !0
                    });
                    const n = [Ct(e)];
                    St.set(this, {
                        details: e,
                        subscriptions: n,
                        loaded: !1
                    })
                }
                disconnectedCallback() {
                    const e = St.get(this);
                    if (!e) return;
                    St.delete(this);
                    const t = e.details,
                        n = e.subscriptions;
                    for (const s of n) s.unsubscribe();
                    t.removeEventListener("click", Dt), t.removeEventListener("change", Dt), t.removeEventListener("keydown", Bt), t.removeEventListener("toggle", Ht, {
                        once: !0
                    }), t.removeEventListener("toggle", qt), t.removeEventListener("mouseover", Ht, {
                        once: !0
                    })
                }
            }
            const St = new WeakMap;

            function Ht(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = t.querySelector("details-menu");
                if (!n) return;
                const s = n.getAttribute("src");
                if (!s) return;
                const o = St.get(n);
                if (!o) return;
                if (o.loaded) return;
                o.loaded = !0;
                const r = n.querySelector("include-fragment");
                r && !r.hasAttribute("src") && (r.addEventListener("loadend", () => It(t)), r.setAttribute("src", s))
            }

            function Ct(e) {
                let t = !1;
                const n = () => t = !0,
                    s = () => t = !1,
                    o = () => {
                        e.hasAttribute("open") && (It(e) || t || function(e) {
                            const t = document.activeElement;
                            if (t && Nt(t) && e.contains(t)) return;
                            const n = _t(e, !0);
                            n && n.focus()
                        }(e))
                    };
                return e.addEventListener("mousedown", n), e.addEventListener("keydown", s), e.addEventListener("toggle", o), {
                    unsubscribe: () => {
                        e.removeEventListener("mousedown", n), e.removeEventListener("keydown", s), e.removeEventListener("toggle", o)
                    }
                }
            }

            function qt(e) {
                const t = e.currentTarget;
                if (t instanceof Element && t.hasAttribute("open"))
                    for (const n of document.querySelectorAll("details[open] > details-menu")) {
                        const e = n.closest("details");
                        e && e !== t && !e.contains(t) && e.removeAttribute("open")
                    }
            }

            function It(e) {
                if (!e.hasAttribute("open")) return !1;
                const t = e.querySelector("[autofocus]");
                return !!t && (t.focus(), !0)
            }

            function _t(e, t) {
                const n = Array.from(e.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])')),
                    s = document.activeElement,
                    o = n.indexOf(s),
                    r = t ? n[o + 1] : n[o - 1],
                    i = t ? n[0] : n[n.length - 1];
                return r || i
            }
            const $t = navigator.userAgent.match(/Macintosh/);

            function Dt(e) {
                const t = e.target;
                if (!(t instanceof Element)) return;
                const n = e.currentTarget;
                if (n instanceof Element && t.closest("details") === n)
                    if ("click" === e.type) {
                        const e = t.closest('[role="menuitem"], [role="menuitemradio"]'),
                            s = e && "LABEL" === e.tagName && e.querySelector("input");
                        e && !s && Rt(e, n)
                    } else if ("change" === e.type) {
                    const e = t.closest('[role="menuitemradio"], [role="menuitemcheckbox"]');
                    e && Rt(e, n)
                }
            }

            function Rt(e, t) {
                if (e.hasAttribute("disabled") || "true" === e.getAttribute("aria-disabled")) return;
                const n = e.closest("details-menu");
                n && n.dispatchEvent(new CustomEvent("details-menu-select", {
                    cancelable: !0,
                    detail: {
                        relatedTarget: e
                    }
                })) && (! function(e, t) {
                    const n = t.querySelector("[data-menu-button]");
                    if (!n) return;
                    const s = function(e) {
                        if (!e) return null;
                        const t = e.hasAttribute("data-menu-button-text") ? e : e.querySelector("[data-menu-button-text]");
                        return t ? t.getAttribute("data-menu-button-text") || t.textContent : null
                    }(e);
                    if (s) n.textContent = s;
                    else {
                        const t = function(e) {
                            if (!e) return null;
                            const t = e.hasAttribute("data-menu-button-contents") ? e : e.querySelector("[data-menu-button-contents]");
                            return t ? t.innerHTML : null
                        }(e);
                        t && (n.innerHTML = t)
                    }
                }(e, t), function(e, t) {
                    for (const n of t.querySelectorAll('[role="menuitemradio"], [role="menuitemcheckbox"]')) {
                        const t = n.querySelector('input[type="radio"], input[type="checkbox"]');
                        let s = n === e;
                        t instanceof HTMLInputElement && (s = t.indeterminate ? "mixed" : t.checked), n.setAttribute("aria-checked", s.toString())
                    }
                }(e, t), "menuitemcheckbox" !== e.getAttribute("role") && Pt(t), n.dispatchEvent(new CustomEvent("details-menu-selected", {
                    detail: {
                        relatedTarget: e
                    }
                })))
            }

            function Bt(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = e.target instanceof Element && "SUMMARY" === e.target.tagName;
                if (!t.querySelector("details[open]")) switch (e.key) {
                    case "Escape":
                        t.hasAttribute("open") && (Pt(t), e.preventDefault(), e.stopPropagation());
                        break;
                    case "ArrowDown":
                        {
                            n && !t.hasAttribute("open") && t.setAttribute("open", "");
                            const s = _t(t, !0);s && s.focus(),
                            e.preventDefault()
                        }
                        break;
                    case "ArrowUp":
                        {
                            n && !t.hasAttribute("open") && t.setAttribute("open", "");
                            const s = _t(t, !1);s && s.focus(),
                            e.preventDefault()
                        }
                        break;
                    case "n":
                        if ($t && e.ctrlKey) {
                            const n = _t(t, !0);
                            n && n.focus(), e.preventDefault()
                        }
                        break;
                    case "p":
                        if ($t && e.ctrlKey) {
                            const n = _t(t, !1);
                            n && n.focus(), e.preventDefault()
                        }
                        break;
                    case " ":
                    case "Enter":
                        {
                            const n = document.activeElement;n && Nt(n) && n.closest("details") === t && (e.preventDefault(), e.stopPropagation(), n.click())
                        }
                }
            }

            function Nt(e) {
                const t = e.getAttribute("role");
                return "menuitem" === t || "menuitemcheckbox" === t || "menuitemradio" === t
            }

            function Pt(e) {
                e.removeAttribute("open");
                const t = e.querySelector("summary");
                t && t.focus()
            }
            window.customElements.get("details-menu") || (window.DetailsMenuElement = DetailsMenuElement, window.customElements.define("details-menu", DetailsMenuElement));
            class GEmojiElement extends HTMLElement {
                get image() {
                    return this.firstElementChild instanceof HTMLImageElement ? this.firstElementChild : null
                }
                connectedCallback() {
                    if (null === this.image && ! function() {
                            const e = /\bWindows NT 6.1\b/.test(navigator.userAgent),
                                t = /\bWindows NT 6.2\b/.test(navigator.userAgent),
                                n = /\bWindows NT 6.3\b/.test(navigator.userAgent),
                                s = /\bFreeBSD\b/.test(navigator.userAgent),
                                o = /\bLinux\b/.test(navigator.userAgent);
                            return !(e || t || n || o || s)
                        }()) {
                        this.textContent = "";
                        const e = function(e) {
                            const t = document.createElement("img");
                            return t.className = "emoji", t.alt = e.getAttribute("alias") || "", t.height = 20, t.width = 20, t
                        }(this);
                        e.src = this.getAttribute("fallback-src") || "", this.appendChild(e)
                    }
                }
            }
            window.customElements.get("g-emoji") || (window.GEmojiElement = GEmojiElement, window.customElements.define("g-emoji", GEmojiElement));
            const Ft = document.createElement("template");
            Ft.innerHTML = '\n  <div class="crop-wrapper">\n    <img width="100%" class="crop-image" alt="">\n    <div class="crop-container">\n      <div data-crop-box class="crop-box">\n        <div class="crop-outline"></div>\n        <div data-direction="nw" class="handle nw"></div>\n        <div data-direction="ne" class="handle ne"></div>\n        <div data-direction="sw" class="handle sw"></div>\n        <div data-direction="se" class="handle se"></div>\n      </div>\n    </div>\n  </div>\n';
            const Ot = new WeakMap,
                Ut = new WeakMap,
                Wt = new WeakMap;

            function zt(e) {
                const t = e.currentTarget;
                if (!(t instanceof ImageCropElement)) return;
                const {
                    box: n,
                    image: s
                } = Wt.get(t) || {};
                let o = 0,
                    r = 0;
                if ("keydown" === e.type) "ArrowUp" === e.key ? r = -1 : "ArrowDown" === e.key ? r = 1 : "ArrowLeft" === e.key ? o = -1 : "ArrowRight" === e.key && (o = 1);
                else if (Ut.has(t) && e instanceof MouseEvent) {
                    const n = Ut.get(t);
                    if (!n) return;
                    o = e.pageX - n.dragStartX, r = e.pageY - n.dragStartY
                }
                if (0 !== o || 0 !== r) {
                    const e = Math.min(Math.max(0, n.offsetLeft + o), s.width - n.offsetWidth),
                        i = Math.min(Math.max(0, n.offsetTop + r), s.height - n.offsetHeight);
                    n.style.left = "".concat(e, "px"), n.style.top = "".concat(i, "px"), Qt(t, {
                        x: e,
                        y: i,
                        width: n.offsetWidth,
                        height: n.offsetHeight
                    })
                }
                e instanceof MouseEvent && Ut.set(t, {
                    dragStartX: e.pageX,
                    dragStartY: e.pageY
                })
            }

            function Vt(e) {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = t.closest("image-crop");
                if (!(n instanceof ImageCropElement)) return;
                const {
                    box: s
                } = Wt.get(n) || {}, o = n.getBoundingClientRect();
                let r, i, a;
                if (e.key) {
                    if ("Escape" === e.key) return Jt(n);
                    if ("-" === e.key && (a = -10), "=" === e.key && (a = 10), !a) return;
                    r = s.offsetWidth + a, i = s.offsetHeight + a, Ot.set(n, {
                        startX: s.offsetLeft,
                        startY: s.offsetTop
                    })
                } else if (e instanceof MouseEvent) {
                    const t = Ot.get(n);
                    if (!t) return;
                    r = e.pageX - t.startX - o.left - window.pageXOffset, i = e.pageY - t.startY - o.top - window.pageYOffset
                }
                r && i && Yt(n, r, i, !(e instanceof KeyboardEvent))
            }

            function Kt(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement)) return;
                const n = t.closest("image-crop");
                if (!(n instanceof ImageCropElement)) return;
                const {
                    box: s
                } = Wt.get(n) || {}, o = e.target;
                if (o instanceof HTMLElement)
                    if (o.hasAttribute("data-direction")) {
                        const t = o.getAttribute("data-direction");
                        n.addEventListener("mousemove", Vt), ["nw", "se"].indexOf(t) >= 0 && n.classList.add("nwse"), ["ne", "sw"].indexOf(t) >= 0 && n.classList.add("nesw"), Ot.set(n, {
                            startX: s.offsetLeft + (["se", "ne"].indexOf(t) >= 0 ? 0 : s.offsetWidth),
                            startY: s.offsetTop + (["se", "sw"].indexOf(t) >= 0 ? 0 : s.offsetHeight)
                        }), Vt(e)
                    } else n.addEventListener("mousemove", zt)
            }

            function Yt(e, t, n) {
                let s = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                    o = Math.max(Math.abs(t), Math.abs(n), 10);
                const r = Ot.get(e);
                if (!r) return;
                const {
                    box: i,
                    image: a
                } = Wt.get(e) || {};
                o = Math.min(o, n > 0 ? a.height - r.startY : r.startY, t > 0 ? a.width - r.startX : r.startX);
                const c = s ? Math.round(Math.max(0, t > 0 ? r.startX : r.startX - o)) : i.offsetLeft,
                    l = s ? Math.round(Math.max(0, n > 0 ? r.startY : r.startY - o)) : i.offsetTop;
                i.style.left = "".concat(c, "px"), i.style.top = "".concat(l, "px"), i.style.width = "".concat(o, "px"), i.style.height = "".concat(o, "px"), Qt(e, {
                    x: c,
                    y: l,
                    width: o,
                    height: o
                })
            }

            function Xt(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement)) return;
                const n = t.closest("image-crop");
                n instanceof ImageCropElement && (n.loaded = !0, Jt(n))
            }

            function Jt(e) {
                const {
                    image: t
                } = Wt.get(e) || {}, n = Math.round(t.clientWidth > t.clientHeight ? t.clientHeight : t.clientWidth);
                Ot.set(e, {
                    startX: (t.clientWidth - n) / 2,
                    startY: (t.clientHeight - n) / 2
                }), Yt(e, n, n)
            }

            function Gt(e) {
                const t = e.currentTarget;
                t instanceof ImageCropElement && (Ut.delete(t), t.classList.remove("nwse", "nesw"), t.removeEventListener("mousemove", Vt), t.removeEventListener("mousemove", zt))
            }

            function Qt(e, t) {
                const {
                    image: n
                } = Wt.get(e) || {}, s = n.naturalWidth / n.width;
                for (const o in t) {
                    const n = Math.round(t[o] * s);
                    t[o] = n;
                    const r = e.querySelector("[data-image-crop-input='".concat(o, "']"));
                    r instanceof HTMLInputElement && (r.value = n.toString())
                }
                e.dispatchEvent(new CustomEvent("image-crop-change", {
                    bubbles: !0,
                    detail: t
                }))
            }
            class ImageCropElement extends HTMLElement {
                connectedCallback() {
                    if (Wt.has(this)) return;
                    this.appendChild(document.importNode(Ft.content, !0));
                    const e = this.querySelector("[data-crop-box]");
                    if (!(e instanceof HTMLElement)) return;
                    const t = this.querySelector("img");
                    t instanceof HTMLImageElement && (Wt.set(this, {
                        box: e,
                        image: t
                    }), t.addEventListener("load", Xt), this.addEventListener("mouseleave", Gt), this.addEventListener("mouseup", Gt), e.addEventListener("mousedown", Kt), this.addEventListener("keydown", zt), this.addEventListener("keydown", Vt), this.src && (t.src = this.src))
                }
                static get observedAttributes() {
                    return ["src"]
                }
                get src() {
                    return this.getAttribute("src")
                }
                set src(e) {
                    e ? this.setAttribute("src", e) : this.removeAttribute("src")
                }
                get loaded() {
                    return this.hasAttribute("loaded")
                }
                set loaded(e) {
                    e ? this.setAttribute("loaded", "") : this.removeAttribute("loaded")
                }
                attributeChangedCallback(e, t, n) {
                    const {
                        image: s
                    } = Wt.get(this) || {};
                    "src" === e && (this.loaded = !1, s && (s.src = n))
                }
            }

            function Zt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            window.customElements.get("image-crop") || (window.ImageCropElement = ImageCropElement, window.customElements.define("image-crop", ImageCropElement));
            const en = new WeakMap;
            class MarkdownButtonElement extends HTMLElement {
                constructor() {
                    super();
                    const e = () => {
                        const e = en.get(this);
                        e && un(this, e)
                    };
                    var t;
                    this.addEventListener("keydown", (t = e, function(e) {
                        " " !== e.key && "Enter" !== e.key || (e.preventDefault(), t(e))
                    })), this.addEventListener("click", e)
                }
                connectedCallback() {
                    this.hasAttribute("tabindex") || this.setAttribute("tabindex", "0"), this.hasAttribute("role") || this.setAttribute("role", "button")
                }
                click() {
                    const e = en.get(this);
                    e && un(this, e)
                }
            }
            class MarkdownHeaderButtonElement extends MarkdownButtonElement {
                constructor() {
                    super();
                    const e = parseInt(this.getAttribute("level") || 3, 10);
                    if (e < 1 || e > 6) return;
                    const t = "".concat("#".repeat(e), " ");
                    en.set(this, {
                        prefix: t
                    })
                }
            }
            window.customElements.get("md-header") || (window.MarkdownHeaderButtonElement = MarkdownHeaderButtonElement, window.customElements.define("md-header", MarkdownHeaderButtonElement));
            class MarkdownBoldButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), en.set(this, {
                        prefix: "**",
                        suffix: "**",
                        trimFirst: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "b")
                }
            }
            window.customElements.get("md-bold") || (window.MarkdownBoldButtonElement = MarkdownBoldButtonElement, window.customElements.define("md-bold", MarkdownBoldButtonElement));
            class MarkdownItalicButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), en.set(this, {
                        prefix: "_",
                        suffix: "_",
                        trimFirst: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "i")
                }
            }
            window.customElements.get("md-italic") || (window.MarkdownItalicButtonElement = MarkdownItalicButtonElement, window.customElements.define("md-italic", MarkdownItalicButtonElement));
            class MarkdownQuoteButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), en.set(this, {
                        prefix: "> ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
            }
            window.customElements.get("md-quote") || (window.MarkdownQuoteButtonElement = MarkdownQuoteButtonElement, window.customElements.define("md-quote", MarkdownQuoteButtonElement));
            class MarkdownCodeButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), en.set(this, {
                        prefix: "`",
                        suffix: "`",
                        blockPrefix: "```",
                        blockSuffix: "```"
                    })
                }
            }
            window.customElements.get("md-code") || (window.MarkdownCodeButtonElement = MarkdownCodeButtonElement, window.customElements.define("md-code", MarkdownCodeButtonElement));
            class MarkdownLinkButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), en.set(this, {
                        prefix: "[",
                        suffix: "](url)",
                        replaceNext: "url",
                        scanFor: "https?://"
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "k")
                }
            }
            window.customElements.get("md-link") || (window.MarkdownLinkButtonElement = MarkdownLinkButtonElement, window.customElements.define("md-link", MarkdownLinkButtonElement));
            class MarkdownImageButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), en.set(this, {
                        prefix: "![",
                        suffix: "](url)",
                        replaceNext: "url",
                        scanFor: "https?://"
                    })
                }
            }
            window.customElements.get("md-image") || (window.MarkdownImageButtonElement = MarkdownImageButtonElement, window.customElements.define("md-image", MarkdownImageButtonElement));
            class MarkdownUnorderedListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), en.set(this, {
                        prefix: "- ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
            }
            window.customElements.get("md-unordered-list") || (window.MarkdownUnorderedListButtonElement = MarkdownUnorderedListButtonElement, window.customElements.define("md-unordered-list", MarkdownUnorderedListButtonElement));
            class MarkdownOrderedListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), en.set(this, {
                        prefix: "1. ",
                        multiline: !0,
                        orderedList: !0
                    })
                }
            }
            window.customElements.get("md-ordered-list") || (window.MarkdownOrderedListButtonElement = MarkdownOrderedListButtonElement, window.customElements.define("md-ordered-list", MarkdownOrderedListButtonElement));
            class MarkdownTaskListButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), en.set(this, {
                        prefix: "- [ ] ",
                        multiline: !0,
                        surroundWithNewlines: !0
                    })
                }
                connectedCallback() {
                    super.connectedCallback(), this.setAttribute("hotkey", "L")
                }
            }
            window.customElements.get("md-task-list") || (window.MarkdownTaskListButtonElement = MarkdownTaskListButtonElement, window.customElements.define("md-task-list", MarkdownTaskListButtonElement));
            class MarkdownMentionButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), en.set(this, {
                        prefix: "@",
                        prefixSpace: !0
                    })
                }
            }
            window.customElements.get("md-mention") || (window.MarkdownMentionButtonElement = MarkdownMentionButtonElement, window.customElements.define("md-mention", MarkdownMentionButtonElement));
            class MarkdownRefButtonElement extends MarkdownButtonElement {
                constructor() {
                    super(), en.set(this, {
                        prefix: "#",
                        prefixSpace: !0
                    })
                }
            }
            window.customElements.get("md-ref") || (window.MarkdownRefButtonElement = MarkdownRefButtonElement, window.customElements.define("md-ref", MarkdownRefButtonElement));
            const tn = navigator.userAgent.match(/Macintosh/) ? "Meta" : "Control";
            class MarkdownToolbarElement extends HTMLElement {
                constructor() {
                    super()
                }
                connectedCallback() {
                    const e = function(e, t) {
                        if (t.metaKey && "Meta" === tn || t.ctrlKey && "Control" === tn) {
                            const n = e.querySelector('[hotkey="'.concat(t.key, '"]'));
                            n && (n.click(), t.preventDefault())
                        }
                    }.bind(null, this);
                    this.field && (this.field.addEventListener("keydown", e), nn.set(this, e))
                }
                disconnectedCallback() {
                    const e = nn.get(this);
                    e && this.field && (this.field.removeEventListener("keydown", e), nn.delete(this))
                }
                get field() {
                    const e = this.getAttribute("for");
                    if (!e) return;
                    const t = document.getElementById(e);
                    return t instanceof HTMLTextAreaElement ? t : null
                }
            }
            const nn = new WeakMap;

            function sn(e) {
                return e.trim().split("\n").length > 1
            }

            function on(e, t) {
                return Array(t + 1).join(e)
            }

            function rn(e, t, n) {
                let s = t;
                const o = n ? /\n/ : /\s/;
                for (; e[s] && !e[s].match(o);) s++;
                return s
            }
            window.customElements.get("markdown-toolbar") || (window.MarkdownToolbarElement = MarkdownToolbarElement, window.customElements.define("markdown-toolbar", MarkdownToolbarElement));
            let an = null;

            function cn(e, t) {
                const n = e.value.slice(e.selectionStart, e.selectionEnd);
                let s;
                s = t.orderedList ? function(e) {
                        const t = /^\d+\.\s+/,
                            n = e.selectionStart === e.selectionEnd;
                        let s, o, r, i, a = e.value.slice(e.selectionStart, e.selectionEnd),
                            c = a,
                            l = a.split("\n");
                        if (n) {
                            const t = e.value.slice(0, e.selectionStart).split(/\n/);
                            r = e.selectionStart - t[t.length - 1].length, i = rn(e.value, e.selectionStart, !0), c = e.value.slice(r, i)
                        }
                        const u = c.split("\n");
                        if (u.every(e => t.test(e))) {
                            if (l = u.map(e => e.replace(t, "")), a = l.join("\n"), n && r && i) {
                                const t = u[0].length - l[0].length;
                                o = s = e.selectionStart - t, e.selectionStart = r, e.selectionEnd = i
                            }
                        } else {
                            l = function() {
                                let e, t, n;
                                const s = [];
                                for (n = e = 0, t = l.length; e < t; n = ++e) {
                                    const e = l[n];
                                    s.push("".concat(n + 1, ". ").concat(e))
                                }
                                return s
                            }(), a = l.join("\n");
                            const {
                                newlinesToAppend: t,
                                newlinesToPrepend: r
                            } = ln(e);
                            o = e.selectionStart + t.length, s = o + a.length, n && (o = s), a = t + a + r
                        }
                        return {
                            text: a,
                            selectionStart: o,
                            selectionEnd: s
                        }
                    }(e) : t.multiline && sn(n) ? function(e, t) {
                        const {
                            prefix: n,
                            suffix: s,
                            surroundWithNewlines: o
                        } = t;
                        let r = e.value.slice(e.selectionStart, e.selectionEnd),
                            i = e.selectionStart,
                            a = e.selectionEnd;
                        const c = r.split("\n");
                        if (c.every(e => e.startsWith(n) && e.endsWith(s))) r = c.map(e => e.slice(n.length, e.length - s.length)).join("\n"), a = i + r.length;
                        else if (r = c.map(e => n + e + s).join("\n"), o) {
                            const {
                                newlinesToAppend: t,
                                newlinesToPrepend: n
                            } = ln(e);
                            i += t.length, a = i + r.length, r = t + r + n
                        }
                        return {
                            text: r,
                            selectionStart: i,
                            selectionEnd: a
                        }
                    }(e, t) : function(e, t) {
                        let n, s;
                        const {
                            prefix: o,
                            suffix: r,
                            blockPrefix: i,
                            blockSuffix: a,
                            replaceNext: c,
                            prefixSpace: l,
                            scanFor: u,
                            surroundWithNewlines: d
                        } = t, m = e.selectionStart, f = e.selectionEnd;
                        let p = e.value.slice(e.selectionStart, e.selectionEnd),
                            g = sn(p) && i.length > 0 ? "".concat(i, "\n") : o,
                            h = sn(p) && a.length > 0 ? "\n".concat(a) : r;
                        if (l) {
                            const t = e.value[e.selectionStart - 1];
                            0 === e.selectionStart || null == t || t.match(/\s/) || (g = " ".concat(g))
                        }
                        p = function(e, t, n) {
                            let s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                            if (e.selectionStart === e.selectionEnd) e.selectionStart = function(e, t) {
                                let n = t;
                                for (; e[n] && null != e[n - 1] && !e[n - 1].match(/\s/);) n--;
                                return n
                            }(e.value, e.selectionStart), e.selectionEnd = rn(e.value, e.selectionEnd, s);
                            else {
                                const s = e.selectionStart - t.length,
                                    o = e.selectionEnd + n.length,
                                    r = e.value.slice(s, e.selectionStart) === t,
                                    i = e.value.slice(e.selectionEnd, o) === n;
                                r && i && (e.selectionStart = s, e.selectionEnd = o)
                            }
                            return e.value.slice(e.selectionStart, e.selectionEnd)
                        }(e, g, h, t.multiline);
                        let b = e.selectionStart,
                            v = e.selectionEnd;
                        const w = c.length > 0 && h.indexOf(c) > -1 && p.length > 0;
                        if (d) {
                            const t = ln(e);
                            n = t.newlinesToAppend, s = t.newlinesToPrepend, g = n + o, h += s
                        }
                        if (p.startsWith(g) && p.endsWith(h)) {
                            const e = p.slice(g.length, p.length - h.length);
                            if (m === f) {
                                let t = m - g.length;
                                t = Math.max(t, b), t = Math.min(t, b + e.length), b = v = t
                            } else v = b + e.length;
                            return {
                                text: e,
                                selectionStart: b,
                                selectionEnd: v
                            }
                        }
                        if (w) {
                            if (u.length > 0 && p.match(u)) {
                                h = h.replace(c, p);
                                const e = g + h;
                                return b = v = b + g.length, {
                                    text: e,
                                    selectionStart: b,
                                    selectionEnd: v
                                }
                            } {
                                const e = g + p + h;
                                return b = b + g.length + p.length + h.indexOf(c), v = b + c.length, {
                                    text: e,
                                    selectionStart: b,
                                    selectionEnd: v
                                }
                            }
                        } {
                            let e = g + p + h;
                            b = m + g.length, v = f + g.length;
                            const n = p.match(/^\s*|\s*$/g);
                            if (t.trimFirst && n) {
                                const t = n[0] || "",
                                    s = n[1] || "";
                                e = t + g + p.trim() + h + s, b += t.length, v -= s.length
                            }
                            return {
                                text: e,
                                selectionStart: b,
                                selectionEnd: v
                            }
                        }
                    }(e, t),
                    function(e, t) {
                        let {
                            text: n,
                            selectionStart: s,
                            selectionEnd: o
                        } = t;
                        const r = e.selectionStart,
                            i = e.value.slice(0, r),
                            a = e.value.slice(e.selectionEnd);
                        if (null === an || !0 === an) {
                            e.contentEditable = "true";
                            try {
                                an = document.execCommand("insertText", !1, n)
                            } catch (c) {
                                an = !1
                            }
                            e.contentEditable = "false"
                        }
                        if (an && !e.value.slice(0, e.selectionStart).endsWith(n) && (an = !1), !an) {
                            try {
                                document.execCommand("ms-beginUndoUnit")
                            } catch (l) {}
                            e.value = i + n + a;
                            try {
                                document.execCommand("ms-endUndoUnit")
                            } catch (l) {}
                            e.dispatchEvent(new CustomEvent("input", {
                                bubbles: !0,
                                cancelable: !0
                            }))
                        }
                        null != s && null != o ? e.setSelectionRange(s, o) : e.setSelectionRange(r, e.selectionEnd)
                    }(e, s)
            }

            function ln(e) {
                const t = e.value.slice(0, e.selectionStart),
                    n = e.value.slice(e.selectionEnd),
                    s = t.match(/\n*$/),
                    o = n.match(/^\n*/),
                    r = s ? s[0].length : 0,
                    i = o ? o[0].length : 0;
                let a, c;
                return t.match(/\S/) && r < 2 && (a = on("\n", 2 - r)), n.match(/\S/) && i < 2 && (c = on("\n", 2 - i)), null == a && (a = ""), null == c && (c = ""), {
                    newlinesToAppend: a,
                    newlinesToPrepend: c
                }
            }

            function un(e, t) {
                const n = e.closest("markdown-toolbar");
                if (!(n instanceof MarkdownToolbarElement)) return;
                const s = function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                s = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable
                            }))), s.forEach(function(t) {
                                Zt(e, t, n[t])
                            })
                        }
                        return e
                    }({}, {
                        prefix: "",
                        suffix: "",
                        blockPrefix: "",
                        blockSuffix: "",
                        multiline: !1,
                        replaceNext: "",
                        prefixSpace: !1,
                        scanFor: "",
                        surroundWithNewlines: !1,
                        orderedList: !1,
                        trimFirst: !1
                    }, t),
                    o = n.field;
                o && (o.focus(), cn(o, s))
            }
            class TabContainerElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("keydown", e => {
                        const t = e.target;
                        if (!(t instanceof HTMLElement)) return;
                        if ("tab" !== t.getAttribute("role") && !t.closest('[role="tablist"]')) return;
                        const n = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]')),
                            s = n.indexOf(n.find(e => e.matches('[aria-selected="true"]')));
                        if ("ArrowRight" === e.code) {
                            let e = s + 1;
                            e >= n.length && (e = 0), dn(this, e)
                        } else if ("ArrowLeft" === e.code) {
                            let e = s - 1;
                            e < 0 && (e = n.length - 1), dn(this, e)
                        } else "Home" === e.code ? (dn(this, 0), e.preventDefault()) : "End" === e.code && (dn(this, n.length - 1), e.preventDefault())
                    }), this.addEventListener("click", e => {
                        const t = Array.from(this.querySelectorAll('[role="tablist"] [role="tab"]'));
                        if (!(e.target instanceof Element)) return;
                        const n = e.target.closest('[role="tab"]');
                        n && n.closest('[role="tablist"]') && dn(this, t.indexOf(n))
                    })
                }
            }

            function dn(e, t) {
                const n = e.querySelectorAll('[role="tablist"] [role="tab"]'),
                    s = e.querySelectorAll('[role="tabpanel"]'),
                    o = n[t],
                    r = s[t];
                if (!!e.dispatchEvent(new CustomEvent("tab-container-change", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            relatedTarget: r
                        }
                    }))) {
                    for (const e of n) e.setAttribute("aria-selected", "false"), e.setAttribute("tabindex", "-1");
                    for (const e of s) e.hidden = !0, e.setAttribute("tabindex", "0");
                    o.setAttribute("aria-selected", "true"), o.removeAttribute("tabindex"), o.focus(), r.hidden = !1, e.dispatchEvent(new CustomEvent("tab-container-changed", {
                        bubbles: !0,
                        detail: {
                            relatedTarget: r
                        }
                    }))
                }
            }

            function mn(e, t) {
                (function(e, t) {
                    const n = e.scrollTop,
                        s = n + e.clientHeight,
                        o = t.offsetTop,
                        r = o + t.clientHeight;
                    return o >= n && r <= s
                })(e, t) || (e.scrollTop = t.offsetTop)
            }

            function fn(e, t) {
                e.addEventListener("compositionstart", jn), e.addEventListener("compositionend", jn), e.addEventListener("keydown", hn), t.addEventListener("click", bn)
            }
            window.customElements.get("tab-container") || (window.TabContainerElement = TabContainerElement, window.customElements.define("tab-container", TabContainerElement));
            let pn = !1;
            const gn = !!navigator.userAgent.match(/Macintosh/);

            function hn(e) {
                if (e.shiftKey || e.metaKey || e.altKey) return;
                const t = e.currentTarget;
                if (!(t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement)) return;
                if (pn) return;
                const n = document.getElementById(t.getAttribute("aria-owns") || "");
                if (n) switch (e.key) {
                    case "Enter":
                    case "Tab":
                        (function(e, t) {
                            const n = t.querySelector('[aria-selected="true"]');
                            return !(!n || "true" !== n.getAttribute("aria-disabled") && (n.click(), 0))
                        })(0, n) && e.preventDefault();
                        break;
                    case "Escape":
                        wn(t, n);
                        break;
                    case "ArrowDown":
                        vn(t, n, 1), e.preventDefault();
                        break;
                    case "ArrowUp":
                        vn(t, n, -1), e.preventDefault();
                        break;
                    case "n":
                        gn && e.ctrlKey && (vn(t, n, 1), e.preventDefault());
                        break;
                    case "p":
                        gn && e.ctrlKey && (vn(t, n, -1), e.preventDefault())
                }
            }

            function bn(e) {
                if (!(e.target instanceof Element)) return;
                const t = e.target.closest('[role="option"]');
                t && "true" !== t.getAttribute("aria-disabled") && function(e) {
                    e.dispatchEvent(new CustomEvent("combobox-commit", {
                        bubbles: !0
                    }))
                }(t)
            }

            function vn(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                const s = t.querySelector('[aria-selected="true"]'),
                    o = Array.from(t.querySelectorAll('[role="option"]')),
                    r = o.indexOf(s);
                let i = 1 === n ? 0 : o.length - 1;
                if (s && r >= 0) {
                    const e = r + n;
                    e >= 0 && e < o.length && (i = e)
                }
                const a = o[i];
                if (a)
                    for (const c of o) a === c ? (e.setAttribute("aria-activedescendant", a.id), a.setAttribute("aria-selected", "true"), mn(t, a)) : c.setAttribute("aria-selected", "false")
            }

            function wn(e, t) {
                e.removeAttribute("aria-activedescendant");
                for (const n of t.querySelectorAll('[aria-selected="true"]')) n.setAttribute("aria-selected", "false")
            }

            function jn(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLTextAreaElement || t instanceof HTMLInputElement)) return;
                pn = "compositionstart" === e.type;
                const n = document.getElementById(t.getAttribute("aria-owns") || "");
                n && wn(t, n)
            }
            const yn = /\s|\(|\[/;

            function En(e, t, n) {
                const s = e.lastIndexOf(t, n - 1);
                if (-1 === s) return;
                if (e.lastIndexOf(" ", n - 1) > s) return;
                const o = e[s - 1];
                return !o || yn.test(o) ? {
                    word: e.substring(s + t.length, n),
                    position: s + t.length
                } : void 0
            }
            const Ln = ["position:absolute;", "overflow:auto;", "word-wrap:break-word;", "top:0px;", "left:-9999px;"],
                Tn = ["box-sizing", "font-family", "font-size", "font-style", "font-variant", "font-weight", "height", "letter-spacing", "line-height", "max-height", "min-height", "padding-bottom", "padding-left", "padding-right", "padding-top", "border-bottom", "border-left", "border-right", "border-top", "text-decoration", "text-indent", "text-transform", "width", "word-spacing"],
                kn = new WeakMap;

            function Mn(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.selectionEnd;
                const {
                    mirror: n,
                    marker: s
                } = function(e, t) {
                    const n = e.nodeName.toLowerCase();
                    if ("textarea" !== n && "input" !== n) throw new Error("expected textField to a textarea or input");
                    let s = kn.get(e);
                    if (s && s.parentElement === e.parentElement) s.innerHTML = "";
                    else {
                        s = document.createElement("div"), kn.set(e, s);
                        const t = window.getComputedStyle(e),
                            o = Ln.slice(0);
                        "textarea" === n ? o.push("white-space:pre-wrap;") : o.push("white-space:nowrap;");
                        for (let e = 0, n = Tn.length; e < n; e++) {
                            const n = Tn[e];
                            o.push("".concat(n, ":").concat(t.getPropertyValue(n), ";"))
                        }
                        s.style.cssText = o.join(" ")
                    }
                    const o = document.createElement("span");
                    let r, i;
                    if (o.style.cssText = "position: absolute;", o.innerHTML = "&nbsp;", "number" == typeof t) {
                        let n = e.value.substring(0, t);
                        n && (r = document.createTextNode(n)), (n = e.value.substring(t)) && (i = document.createTextNode(n))
                    } else {
                        const t = e.value;
                        t && (r = document.createTextNode(t))
                    }
                    if (r && s.appendChild(r), s.appendChild(o), i && s.appendChild(i), !s.parentElement) {
                        if (!e.parentElement) throw new Error("textField must have a parentElement to mirror");
                        e.parentElement.insertBefore(s, e)
                    }
                    return s.scrollTop = e.scrollTop, s.scrollLeft = e.scrollLeft, {
                        mirror: s,
                        marker: o
                    }
                }(e, t), o = n.getBoundingClientRect(), r = s.getBoundingClientRect();
                return setTimeout(() => {
                    n.remove()
                }, 5e3), {
                    top: r.top - o.top,
                    left: r.left - o.left
                }
            }
            const An = new WeakMap;
            class xn {
                constructor(e, t) {
                    this.expander = e, this.input = t, this.menu = null, this.oninput = this.onInput.bind(this), this.onpaste = this.onPaste.bind(this), this.onkeydown = this.onKeydown.bind(this), this.oncommit = this.onCommit.bind(this), this.onmousedown = this.onMousedown.bind(this), this.onblur = this.onBlur.bind(this), this.interactingWithList = !1, t.addEventListener("paste", this.onpaste), t.addEventListener("input", this.oninput), t.addEventListener("keydown", this.onkeydown), t.addEventListener("blur", this.onblur)
                }
                destroy() {
                    this.input.removeEventListener("paste", this.onpaste), this.input.removeEventListener("input", this.oninput), this.input.removeEventListener("keydown", this.onkeydown), this.input.removeEventListener("blur", this.onblur)
                }
                activate(e, t) {
                    if (this.input !== document.activeElement) return;
                    this.deactivate(), this.menu = t, t.id || (t.id = "text-expander-".concat(Math.floor(1e5 * Math.random()).toString())), this.input.setAttribute("aria-owns", t.id), this.expander.append(t);
                    const {
                        top: n,
                        left: s
                    } = Mn(this.input, e.position);
                    t.style.top = "".concat(n, "px"), t.style.left = "".concat(s, "px"), fn(this.input, t), t.addEventListener("combobox-commit", this.oncommit), t.addEventListener("mousedown", this.onmousedown), wn(this.input, t), vn(this.input, t)
                }
                deactivate() {
                    const e = this.menu;
                    var t, n;
                    e && (this.menu = null, e.removeEventListener("combobox-commit", this.oncommit), e.removeEventListener("mousedown", this.onmousedown), t = this.input, n = e, t.removeAttribute("aria-activedescendant"), t.removeEventListener("compositionstart", jn), t.removeEventListener("compositionend", jn), t.removeEventListener("keydown", hn), n.removeEventListener("click", bn), this.input.removeAttribute("aria-owns"), e.remove())
                }
                onCommit(e) {
                    let {
                        target: t
                    } = e;
                    const n = t;
                    if (!(n instanceof HTMLElement)) return;
                    const s = this.match;
                    if (!s) return;
                    const o = this.input.value.substring(0, s.position - s.key.length),
                        r = this.input.value.substring(s.position + s.text.length),
                        i = {
                            item: n,
                            key: s.key,
                            value: null
                        };
                    if (!this.expander.dispatchEvent(new CustomEvent("text-expander-value", {
                            cancelable: !0,
                            detail: i
                        }))) return;
                    if (!i.value) return;
                    const a = "".concat(i.value, " ");
                    this.input.value = o + a + r, this.deactivate(), this.input.focus();
                    const c = o.length + a.length;
                    this.input.selectionStart = c, this.input.selectionEnd = c
                }
                onBlur() {
                    this.interactingWithList ? this.interactingWithList = !1 : this.deactivate()
                }
                onPaste() {
                    this.justPasted = !0
                }
                async onInput() {
                    if (this.justPasted) return void(this.justPasted = !1);
                    const e = this.findMatch();
                    if (e) {
                        this.match = e;
                        const t = await this.notifyProviders(e);
                        if (!this.match) return;
                        t ? this.activate(e, t) : this.deactivate()
                    } else this.match = null, this.deactivate()
                }
                findMatch() {
                    const e = this.input.selectionEnd,
                        t = this.input.value;
                    for (const n of this.expander.keys) {
                        const s = En(t, n, e);
                        if (s) return {
                            text: s.word,
                            key: n,
                            position: s.position
                        }
                    }
                }
                async notifyProviders(e) {
                    const t = [];
                    if (this.expander.dispatchEvent(new CustomEvent("text-expander-change", {
                            cancelable: !0,
                            detail: {
                                provide: e => t.push(e),
                                text: e.text,
                                key: e.key
                            }
                        }))) return (await Promise.all(t)).filter(e => e.matched).map(e => e.fragment)[0]
                }
                onMousedown() {
                    this.interactingWithList = !0
                }
                onKeydown(e) {
                    "Escape" === e.key && (this.deactivate(), e.stopImmediatePropagation(), e.preventDefault())
                }
            }
            class TextExpanderElement extends HTMLElement {
                get keys() {
                    const e = this.getAttribute("keys");
                    return e ? e.split(" ") : []
                }
                connectedCallback() {
                    const e = this.querySelector('input[type="text"], textarea');
                    if (!(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) return;
                    const t = new xn(this, e);
                    An.set(this, t)
                }
                disconnectedCallback() {
                    const e = An.get(this);
                    e && (e.destroy(), An.delete(this))
                }
            }
            window.customElements.get("text-expander") || (window.TextExpanderElement = TextExpanderElement, window.customElements.define("text-expander", TextExpanderElement));
            const Sn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                Hn = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            function Cn(e) {
                return "0".concat(e).slice(-2)
            }

            function qn(e, t) {
                const n = e.getDay(),
                    s = e.getDate(),
                    o = e.getMonth(),
                    r = e.getFullYear(),
                    i = e.getHours(),
                    a = e.getMinutes(),
                    c = e.getSeconds();
                return t.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g, function(t) {
                    let l;
                    switch (t[1]) {
                        case "%":
                            return "%";
                        case "a":
                            return Sn[n].slice(0, 3);
                        case "A":
                            return Sn[n];
                        case "b":
                            return Hn[o].slice(0, 3);
                        case "B":
                            return Hn[o];
                        case "c":
                            return e.toString();
                        case "d":
                            return Cn(s);
                        case "e":
                            return String(s);
                        case "H":
                            return Cn(i);
                        case "I":
                            return Cn(qn(e, "%l"));
                        case "l":
                            return 0 === i || 12 === i ? String(12) : String((i + 12) % 12);
                        case "m":
                            return Cn(o + 1);
                        case "M":
                            return Cn(a);
                        case "p":
                            return i > 11 ? "PM" : "AM";
                        case "P":
                            return i > 11 ? "pm" : "am";
                        case "S":
                            return Cn(c);
                        case "w":
                            return String(n);
                        case "y":
                            return Cn(r % 100);
                        case "Y":
                            return String(r);
                        case "Z":
                            return (l = e.toString().match(/\((\w+)\)$/)) ? l[1] : "";
                        case "z":
                            return (l = e.toString().match(/\w([+-]\d\d\d\d) /)) ? l[1] : ""
                    }
                    return ""
                })
            }

            function In(e) {
                let t;
                return function() {
                    if (t) return t;
                    if ("Intl" in window) try {
                        return t = new Intl.DateTimeFormat(void 0, e)
                    } catch (n) {
                        if (!(n instanceof RangeError)) throw n
                    }
                }
            }
            let _n = null;
            const $n = In({
                day: "numeric",
                month: "short"
            });

            function Dn() {
                if (null !== _n) return _n;
                const e = $n();
                if (e) {
                    const t = e.format(new Date(0));
                    return _n = !!t.match(/^\d/)
                }
                return !1
            }
            let Rn = null;
            const Bn = In({
                day: "numeric",
                month: "short",
                year: "numeric"
            });

            function Nn(e) {
                const t = e.closest("[lang]");
                return t instanceof HTMLElement && t.lang ? t.lang : "default"
            }
            const Pn = new WeakMap;
            class ExtendedTimeElement extends HTMLElement {
                static get observedAttributes() {
                    return ["datetime", "day", "format", "lang", "hour", "minute", "month", "second", "title", "weekday", "year"]
                }
                connectedCallback() {
                    const e = this.getFormattedTitle();
                    e && !this.hasAttribute("title") && this.setAttribute("title", e);
                    const t = this.getFormattedDate();
                    t && (this.textContent = t)
                }
                attributeChangedCallback(e, t, n) {
                    if ("datetime" === e) {
                        const e = Date.parse(n);
                        isNaN(e) ? Pn.delete(this) : Pn.set(this, new Date(e))
                    }
                    const s = this.getFormattedTitle();
                    s && !this.hasAttribute("title") && this.setAttribute("title", s);
                    const o = this.getFormattedDate();
                    o && (this.textContent = o)
                }
                get date() {
                    return Pn.get(this)
                }
                getFormattedTitle() {
                    const e = this.date;
                    if (!e) return;
                    const t = Fn();
                    if (t) return t.format(e);
                    try {
                        return e.toLocaleString()
                    } catch (n) {
                        if (n instanceof RangeError) return e.toString();
                        throw n
                    }
                }
                getFormattedDate() {}
            }
            const Fn = In({
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                    timeZoneName: "short"
                }),
                On = new WeakMap;
            class LocalTimeElement extends ExtendedTimeElement {
                attributeChangedCallback(e, t, n) {
                    "hour" !== e && "minute" !== e && "second" !== e && "time-zone-name" !== e || On.delete(this), super.attributeChangedCallback(e, t, n)
                }
                getFormattedDate() {
                    const e = this.date;
                    if (!e) return;
                    const t = function(e, t) {
                            const n = {
                                weekday: {
                                    short: "%a",
                                    long: "%A"
                                },
                                day: {
                                    numeric: "%e",
                                    "2-digit": "%d"
                                },
                                month: {
                                    short: "%b",
                                    long: "%B"
                                },
                                year: {
                                    numeric: "%Y",
                                    "2-digit": "%y"
                                }
                            };
                            let s = Dn() ? "weekday day month year" : "weekday month day, year";
                            for (const o in n) {
                                const t = n[o][e.getAttribute(o)];
                                s = s.replace(o, t || "")
                            }
                            return s = s.replace(/(\s,)|(,\s$)/, ""), qn(t, s).replace(/\s+/, " ").trim()
                        }(this, e) || "",
                        n = function(e, t) {
                            const n = {},
                                s = e.getAttribute("hour");
                            "numeric" !== s && "2-digit" !== s || (n.hour = s);
                            const o = e.getAttribute("minute");
                            "numeric" !== o && "2-digit" !== o || (n.minute = o);
                            const r = e.getAttribute("second");
                            "numeric" !== r && "2-digit" !== r || (n.second = r);
                            const i = e.getAttribute("time-zone-name");
                            "short" !== i && "long" !== i || (n.timeZoneName = i);
                            if (0 === Object.keys(n).length) return;
                            let a = On.get(e);
                            a || (a = In(n), On.set(e, a));
                            const c = a();
                            if (c) return c.format(t); {
                                const e = n.second ? "%H:%M:%S" : "%H:%M";
                                return qn(t, e)
                            }
                        }(this, e) || "";
                    return "".concat(t, " ").concat(n).trim()
                }
            }
            window.customElements.get("local-time") || (window.LocalTimeElement = LocalTimeElement, window.customElements.define("local-time", LocalTimeElement));
            class Un {
                constructor(e, t) {
                    this.date = e, this.locale = t
                }
                toString() {
                    const e = this.timeElapsed();
                    if (e) return e; {
                        const e = this.timeAhead();
                        return e || "on ".concat(this.formatDate())
                    }
                }
                timeElapsed() {
                    const e = (new Date).getTime() - this.date.getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        s = Math.round(n / 60),
                        o = Math.round(s / 24);
                    return e >= 0 && o < 30 ? this.timeAgoFromMs(e) : null
                }
                timeAhead() {
                    const e = this.date.getTime() - (new Date).getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        s = Math.round(n / 60),
                        o = Math.round(s / 24);
                    return e >= 0 && o < 30 ? this.timeUntil() : null
                }
                timeAgo() {
                    const e = (new Date).getTime() - this.date.getTime();
                    return this.timeAgoFromMs(e)
                }
                timeAgoFromMs(e) {
                    const t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        s = Math.round(n / 60),
                        o = Math.round(s / 24),
                        r = Math.round(o / 30),
                        i = Math.round(r / 12);
                    return e < 0 ? Wn(this.locale, 0, "second") : t < 10 ? Wn(this.locale, 0, "second") : t < 45 ? Wn(this.locale, -t, "second") : t < 90 ? Wn(this.locale, -n, "minute") : n < 45 ? Wn(this.locale, -n, "minute") : n < 90 ? Wn(this.locale, -s, "hour") : s < 24 ? Wn(this.locale, -s, "hour") : s < 36 ? Wn(this.locale, -o, "day") : o < 30 ? Wn(this.locale, -o, "day") : r < 12 ? Wn(this.locale, -r, "month") : Wn(this.locale, -i, "year")
                }
                microTimeAgo() {
                    const e = (new Date).getTime() - this.date.getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        s = Math.round(n / 60),
                        o = Math.round(s / 24),
                        r = Math.round(o / 30),
                        i = Math.round(r / 12);
                    return n < 1 ? "1m" : n < 60 ? "".concat(n, "m") : s < 24 ? "".concat(s, "h") : o < 365 ? "".concat(o, "d") : "".concat(i, "y")
                }
                timeUntil() {
                    const e = this.date.getTime() - (new Date).getTime();
                    return this.timeUntilFromMs(e)
                }
                timeUntilFromMs(e) {
                    const t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        s = Math.round(n / 60),
                        o = Math.round(s / 24),
                        r = Math.round(o / 30),
                        i = Math.round(r / 12);
                    return r >= 18 ? Wn(this.locale, i, "year") : r >= 12 ? Wn(this.locale, i, "year") : o >= 45 ? Wn(this.locale, r, "month") : o >= 30 ? Wn(this.locale, r, "month") : s >= 36 ? Wn(this.locale, o, "day") : s >= 24 ? Wn(this.locale, o, "day") : n >= 90 ? Wn(this.locale, s, "hour") : n >= 45 ? Wn(this.locale, s, "hour") : t >= 90 ? Wn(this.locale, n, "minute") : t >= 45 ? Wn(this.locale, n, "minute") : Wn(this.locale, t >= 10 ? t : 0, "second")
                }
                microTimeUntil() {
                    const e = this.date.getTime() - (new Date).getTime(),
                        t = Math.round(e / 1e3),
                        n = Math.round(t / 60),
                        s = Math.round(n / 60),
                        o = Math.round(s / 24),
                        r = Math.round(o / 30),
                        i = Math.round(r / 12);
                    return o >= 365 ? "".concat(i, "y") : s >= 24 ? "".concat(o, "d") : n >= 60 ? "".concat(s, "h") : n > 1 ? "".concat(n, "m") : "1m"
                }
                formatDate() {
                    let e = Dn() ? "%e %b" : "%b %e";
                    var t;
                    return t = this.date, (new Date).getUTCFullYear() !== t.getUTCFullYear() && (e += function() {
                        if (null !== Rn) return Rn;
                        const e = Bn();
                        if (e) {
                            const t = e.format(new Date(0));
                            return Rn = !!t.match(/\d,/)
                        }
                        return !0
                    }() ? ", %Y" : " %Y"), qn(this.date, e)
                }
                formatTime() {
                    const e = zn();
                    return e ? e.format(this.date) : qn(this.date, "%l:%M%P")
                }
            }

            function Wn(e, t, n) {
                const s = function(e, t) {
                    if ("Intl" in window && "RelativeTimeFormat" in window.Intl) try {
                        return new Intl.RelativeTimeFormat(e, t)
                    } catch (n) {
                        if (!(n instanceof RangeError)) throw n
                    }
                }(e, {
                    numeric: "auto"
                });
                return s ? s.format(t, n) : function(e, t) {
                    if (0 === e) switch (t) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                            return "this ".concat(t);
                        case "day":
                            return "today";
                        case "hour":
                        case "minute":
                            return "in 0 ".concat(t, "s");
                        case "second":
                            return "now"
                    } else if (1 === e) switch (t) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                            return "next ".concat(t);
                        case "day":
                            return "tomorrow";
                        case "hour":
                        case "minute":
                        case "second":
                            return "in 1 ".concat(t)
                    } else if (-1 === e) switch (t) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                            return "last ".concat(t);
                        case "day":
                            return "yesterday";
                        case "hour":
                        case "minute":
                        case "second":
                            return "1 ".concat(t, " ago")
                    } else if (e > 1) switch (t) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                        case "day":
                        case "hour":
                        case "minute":
                        case "second":
                            return "in ".concat(e, " ").concat(t, "s")
                    } else if (e < -1) switch (t) {
                        case "year":
                        case "quarter":
                        case "month":
                        case "week":
                        case "day":
                        case "hour":
                        case "minute":
                        case "second":
                            return "".concat(-e, " ").concat(t, "s ago")
                    }
                    throw new RangeError("Invalid unit argument for format() '".concat(t, "'"))
                }(t, n)
            }
            const zn = In({
                hour: "numeric",
                minute: "2-digit"
            });
            class RelativeTimeElement extends ExtendedTimeElement {
                getFormattedDate() {
                    const e = this.date;
                    if (e) return new Un(e, Nn(this)).toString()
                }
                connectedCallback() {
                    Vn.push(this), Kn || (Yn(), Kn = setInterval(Yn, 6e4)), super.connectedCallback()
                }
                disconnectedCallback() {
                    const e = Vn.indexOf(this); - 1 !== e && Vn.splice(e, 1), Vn.length || Kn && (clearInterval(Kn), Kn = null)
                }
            }
            const Vn = [];
            let Kn;

            function Yn() {
                let e, t, n;
                for (t = 0, n = Vn.length; t < n; t++)(e = Vn[t]).textContent = e.getFormattedDate() || ""
            }
            window.customElements.get("relative-time") || (window.RelativeTimeElement = RelativeTimeElement, window.customElements.define("relative-time", RelativeTimeElement));
            class TimeAgoElement extends RelativeTimeElement {
                getFormattedDate() {
                    const e = this.getAttribute("format"),
                        t = this.date;
                    if (t) return "micro" === e ? new Un(t, Nn(this)).microTimeAgo() : new Un(t, Nn(this)).timeAgo()
                }
            }
            window.customElements.get("time-ago") || (window.TimeAgoElement = TimeAgoElement, window.customElements.define("time-ago", TimeAgoElement));
            class TimeUntilElement extends RelativeTimeElement {
                getFormattedDate() {
                    const e = this.getAttribute("format"),
                        t = this.date;
                    if (t) return "micro" === e ? new Un(t, Nn(this)).microTimeUntil() : new Un(t, Nn(this)).timeUntil()
                }
            }
            window.customElements.get("time-until") || (window.TimeUntilElement = TimeUntilElement, window.customElements.define("time-until", TimeUntilElement)), document.addEventListener("click", function(e) {
                if (!(e.target instanceof Element)) return;
                const t = e.target.closest("a[data-confirm], input[type=submit][data-confirm], input[type=checkbox][data-confirm], button[data-confirm]");
                if (!t) return;
                const n = t.getAttribute("data-confirm");
                n && (t instanceof HTMLInputElement && t.hasAttribute("data-confirm-checked") && !t.checked || confirm(n) || (e.stopImmediatePropagation(), e.preventDefault()))
            }, !0), r("[data-hotkey]", {
                add(e) {
                    i(e)
                },
                remove(e) {
                    a(e)
                }
            }), window.IncludeFragmentElement.prototype.fetch = c;
            class PollIncludeFragmentElement extends l {
                async fetch(e, t = 1e3) {
                    const n = await super.fetch(e);
                    return 202 === n.status ? (await new Promise(e => setTimeout(e, t)), this.fetch(e, 1.5 * t)) : n
                }
            }

            function Xn(e) {
                return "ArrowDown" === e.key || "ArrowUp" === e.key
            }

            function Jn(e) {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/firefox-label-hacks.js:105");
                const t = d(e, "label");
                t.hasAttribute("data-role") || t.setAttribute("data-role", p(t, "role")), t.setAttribute("role", p(t, "data-role")), e.removeAttribute("role")
            }
            window.customElements.get("poll-include-fragment") || (window.PollIncludeFragmentElement = PollIncludeFragmentElement, window.customElements.define("poll-include-fragment", PollIncludeFragmentElement)), navigator.userAgent.match(/Firefox/) && (r('details-menu label[tabindex][role^="menuitem"]', e => {
                const t = e.querySelector("input");
                t && (e.classList.contains("select-menu-item") && t.classList.add("sr-only", "d-block"), t.classList.remove("d-none"), t.hidden = !1, e.removeAttribute("tabindex"))
            }), u("focus", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', e => {
                const t = d(e.currentTarget, "label");
                t.classList.contains("select-menu-item") && t.classList.add("navigation-focus"), t.classList.contains("SelectMenu-item") && t.classList.add("hx_SelectMenu-item--focus"), e.currentTarget.addEventListener("blur", () => {
                    t.classList.contains("select-menu-item") && t.classList.remove("navigation-focus"), t.classList.contains("SelectMenu-item") && t.classList.remove("hx_SelectMenu-item--focus")
                }, {
                    once: !0
                })
            }, {
                capture: !0
            }), m("keydown", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', async function(e) {
                if (Xn(e)) ! function(e) {
                    if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/firefox-label-hacks.js:97");
                    const t = d(e, "label");
                    t.hasAttribute("data-role") || t.setAttribute("data-role", p(t, "role"));
                    e.setAttribute("role", p(t, "data-role")), t.removeAttribute("role")
                }(e.currentTarget);
                else if ("Enter" === e.key) {
                    const t = e.currentTarget;
                    if (e.preventDefault(), await f(), !(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/firefox-label-hacks.js:71");
                    t.click()
                }
            }), u("blur", 'details-menu label input[role="menuitemradio"], details-menu label input[role="menuitemcheckbox"]', e => {
                Jn(e.currentTarget)
            }, {
                capture: !0
            }), m("keyup", 'details-menu label[role="menuitemradio"] input, details-menu label[role="menuitemcheckbox"] input', e => {
                Xn(e) && Jn(e.currentTarget)
            }));
            var Gn = -1 / 0,
                Qn = 1 / 0,
                Zn = -.005,
                es = -.005,
                ts = -.01,
                ns = 1,
                ss = .9,
                os = .8,
                rs = .7,
                is = .6;

            function as(e) {
                return e.toUpperCase() === e
            }

            function cs(e, t, n, s) {
                for (var o = e.length, r = t.length, i = e.toLowerCase(), a = t.toLowerCase(), c = function(e) {
                        for (var t, n = e.length, s = new Array(n), o = "/", r = 0; r < n; r++) {
                            var i = e[r];
                            "/" === o ? s[r] = ss : "-" === o || "_" === o || " " === o ? s[r] = os : "." === o ? s[r] = is : (t = o).toLowerCase() === t && as(i) ? s[r] = rs : s[r] = 0, o = i
                        }
                        return s
                    }(t), l = 0; l < o; l++) {
                    n[l] = new Array(r), s[l] = new Array(r);
                    for (var u = Gn, d = l === o - 1 ? es : ts, m = 0; m < r; m++)
                        if (i[l] === a[m]) {
                            var f = Gn;
                            l ? m && (f = Math.max(s[l - 1][m - 1] + c[m], n[l - 1][m - 1] + ns)) : f = m * Zn + c[m], n[l][m] = f, s[l][m] = u = Math.max(f, u + d)
                        } else n[l][m] = Gn, s[l][m] = u += d
                }
            }
            var ls = {
                SCORE_MIN: Gn,
                SCORE_MAX: Qn,
                SCORE_GAP_LEADING: Zn,
                SCORE_GAP_TRAILING: es,
                SCORE_GAP_INNER: ts,
                SCORE_MATCH_CONSECUTIVE: ns,
                SCORE_MATCH_SLASH: ss,
                SCORE_MATCH_WORD: os,
                SCORE_MATCH_CAPITAL: rs,
                SCORE_MATCH_DOT: is,
                score: function(e, t) {
                    var n = e.length,
                        s = t.length;
                    if (!n || !s) return Gn;
                    if (n === s) return Qn;
                    if (s > 1024) return Gn;
                    var o = new Array(n),
                        r = new Array(n);
                    return cs(e, t, o, r), r[n - 1][s - 1]
                },
                positions: function(e, t) {
                    var n = e.length,
                        s = t.length,
                        o = new Array(n);
                    if (!n || !s) return o;
                    if (n === s) {
                        for (var r = 0; r < n; r++) o[r] = r;
                        return o
                    }
                    if (s > 1024) return o;
                    var i = new Array(n),
                        a = new Array(n);
                    cs(e, t, i, a);
                    for (var c = !1, l = (r = n - 1, s - 1); r >= 0; r--)
                        for (; l >= 0; l--)
                            if (i[r][l] !== Gn && (c || i[r][l] === a[r][l])) {
                                c = r && l && a[r][l] === i[r - 1][l - 1] + ns, o[r] = l--;
                                break
                            }
                    return o
                },
                hasMatch: function(e, t) {
                    e = e.toLowerCase(), t = t.toLowerCase();
                    for (var n = e.length, s = 0, o = 0; s < n; s += 1)
                        if (0 === (o = t.indexOf(e[s], o) + 1)) return !1;
                    return !0
                }
            };
            const us = ls.hasMatch,
                ds = (e, t, n) => {
                    if (!us(e, t)) return -1 / 0;
                    const s = ls.score(e, t);
                    return s < n ? -1 / 0 : s
                },
                ms = (e, t, n) => {
                    e.innerHTML = "";
                    let s = 0;
                    for (const o of ls.positions(t, n)) {
                        "" !== n.slice(s, o) && e.appendChild(document.createTextNode(n.slice(s, o))), s = o + 1;
                        const t = document.createElement("mark");
                        t.textContent = n[o], e.appendChild(t)
                    }
                    e.appendChild(document.createTextNode(n.slice(s)))
                },
                fs = new WeakMap,
                ps = new WeakMap,
                gs = new WeakMap,
                hs = e => {
                    if (!gs.has(e) && e instanceof HTMLElement) {
                        const t = (e.getAttribute("data-value") || e.textContent || "").trim();
                        return gs.set(e, t), t
                    }
                    return gs.get(e) || ""
                };
            class FuzzyListElement extends HTMLElement {
                connectedCallback() {
                    const e = this.querySelector("ul");
                    if (!e) return;
                    const t = new Set(e.querySelectorAll("li")),
                        n = this.querySelector("input");
                    n instanceof HTMLInputElement && n.addEventListener("input", () => {
                        this.value = n.value
                    });
                    const s = new MutationObserver(e => {
                        let n = !1;
                        for (const s of e)
                            if ("childList" === s.type && s.addedNodes.length)
                                for (const e of s.addedNodes)
                                    if (e instanceof HTMLLIElement && !t.has(e)) {
                                        const s = hs(e);
                                        n = n || us(this.value, s), t.add(e)
                                    }
                        n && this.sort()
                    });
                    s.observe(e, {
                        childList: !0
                    });
                    const o = {
                        handler: s,
                        items: t,
                        lazyItems: new Map,
                        timer: null
                    };
                    ps.set(this, o)
                }
                disconnectedCallback() {
                    const e = ps.get(this);
                    e && (e.handler.disconnect(), ps.delete(this))
                }
                addLazyItems(e, t) {
                    const n = ps.get(this);
                    if (!n) return;
                    const {
                        lazyItems: s
                    } = n, {
                        value: o
                    } = this;
                    let r = !1;
                    for (const i of e) s.set(i, t), r = r || o && us(o, i);
                    r && this.sort()
                }
                sort() {
                    const e = fs.get(this);
                    e && (e.aborted = !0);
                    const t = {
                        aborted: !1
                    };
                    fs.set(this, t);
                    const {
                        minScore: n,
                        markSelector: s,
                        maxMatches: o,
                        value: r
                    } = this, i = ps.get(this);
                    if (!i) return;
                    if (!this.dispatchEvent(new CustomEvent("fuzzy-list-will-sort", {
                            cancelable: !0,
                            detail: r
                        }))) return;
                    const {
                        items: a,
                        lazyItems: c
                    } = i, l = this.hasAttribute("mark-selector"), u = this.querySelector("ul");
                    if (!u) return;
                    const d = [];
                    if (r) {
                        for (const e of a) {
                            const t = hs(e),
                                s = ds(r, t, n);
                            s !== -1 / 0 && d.push({
                                item: e,
                                score: s
                            })
                        }
                        for (const [e, t] of c) {
                            const s = ds(r, e, n);
                            s !== -1 / 0 && d.push({
                                text: e,
                                render: t,
                                score: s
                            })
                        }
                        d.sort((e, t) => t.score - e.score).splice(o)
                    } else {
                        let e = d.length;
                        for (const t of a) {
                            if (e >= o) break;
                            d.push({
                                item: t,
                                score: 1
                            }), e += 1
                        }
                        for (const [t, n] of c) {
                            if (e >= o) break;
                            d.push({
                                text: t,
                                render: n,
                                score: 1
                            }), e += 1
                        }
                    }
                    requestAnimationFrame(() => {
                        if (t.aborted) return;
                        const e = u.querySelector('input[type="radio"]:checked');
                        u.innerHTML = "";
                        let n = 0;
                        const o = () => {
                            if (t.aborted) return;
                            const i = Math.min(d.length, n + 100),
                                m = document.createDocumentFragment();
                            for (let e = n; e < i; e += 1) {
                                const t = d[e];
                                let n = null;
                                if (t.render && t.text) {
                                    const {
                                        render: e,
                                        text: s
                                    } = t;
                                    n = e(s), a.add(n), gs.set(n, s), c.delete(s)
                                } else t.item && (n = t.item);
                                n instanceof HTMLElement && (l && ms(s && n.querySelector(s) || n, l ? r : "", hs(n)), m.appendChild(n))
                            }
                            n = i;
                            let f = !1;
                            if (e instanceof HTMLInputElement)
                                for (const t of m.querySelectorAll('input[type="radio"]:checked')) t instanceof HTMLInputElement && t.value !== e.value && (t.checked = !1, f = !0);
                            if (u.appendChild(m), e && f && e.dispatchEvent(new Event("change", {
                                    bubbles: !0
                                })), i < d.length) requestAnimationFrame(o);
                            else {
                                u.hidden = 0 === d.length;
                                const e = this.querySelector("[data-fuzzy-list-show-on-empty]");
                                e && (e.hidden = d.length > 0), this.dispatchEvent(new CustomEvent("fuzzy-list-sorted", {
                                    detail: d.length
                                }))
                            }
                        };
                        o()
                    })
                }
                get value() {
                    return this.getAttribute("value") || ""
                }
                set value(e) {
                    this.setAttribute("value", e)
                }
                get markSelector() {
                    return this.getAttribute("mark-selector") || ""
                }
                set markSelector(e) {
                    e ? this.setAttribute("mark-selector", !0 === e ? "" : e) : this.removeAttribute("mark-selector")
                }
                get minScore() {
                    return Number(this.getAttribute("min-score") || 0)
                }
                set minScore(e) {
                    Number.isNaN(e) || this.setAttribute("min-score", String(e))
                }
                get maxMatches() {
                    return Number(this.getAttribute("max-matches") || 1 / 0)
                }
                set maxMatches(e) {
                    Number.isNaN(e) || this.setAttribute("max-matches", String(e))
                }
                static get observedAttributes() {
                    return ["value", "mark-selector", "min-score", "max-matches"]
                }
                attributeChangedCallback(e, t, n) {
                    if (t === n) return;
                    const s = ps.get(this);
                    s && (s.timer && clearTimeout(s.timer), s.timer = setTimeout(() => this.sort(), 100))
                }
            }

            function bs() {
                const e = b(document, "input[type=text].js-advanced-search-prefix", HTMLInputElement),
                    t = b(document, "select.js-advanced-search-prefix", HTMLSelectElement),
                    n = b(document, ".js-advanced-search-prefix:checked", HTMLInputElement),
                    s = [...ws(e), ...ws(t), ...ws(n)],
                    o = s.reduce((e, t) => (t.value && t.type && e[t.type]++, e), {
                        Repositories: 0,
                        Users: 0,
                        Code: 0,
                        Issues: 0
                    }),
                    r = s.reduce((e, t) => `${e} ${function({prefix:e,value:t}){return""===e?"":t?`
                        $ {
                            e
                        }
                        $ {
                            t
                        }
                        `:""}(t)}`.trim(), ""),
                    i = v(document, ".js-advanced-search-input", HTMLInputElement).value;
                v(document, ".js-type-value", HTMLInputElement).value = function(e) {
                    let t = new URLSearchParams(window.location.search).get("type") || "Repositories",
                        n = 0;
                    for (const s in e) e[s] > n && (n = e[s], t = s);
                    return t
                }(o), v(document, ".js-search-query", HTMLInputElement).value = `${i} ${r}`.trim();
                const a = v(document, ".js-advanced-query");
                a.innerHTML = "", a.textContent = r;
                const c = document.createElement("span");
                c.textContent = i.trim(), a.prepend(c, " ")
            }

            function vs(e) {
                return -1 !== e.search(/\s/g) ? `"${e}"` : e
            }

            function ws(e) {
                return e.map(e => {
                    const t = e.value.trim(),
                        n = p(e, "data-search-prefix"),
                        s = e.getAttribute("data-search-type");
                    return "" === n ? {
                        prefix: n,
                        value: t,
                        type: s
                    } : -1 !== t.search(/,/g) && "location" !== n ? t.split(/,/).map(e => ({
                        prefix: n,
                        value: vs(e.trim()),
                        type: s
                    })) : {
                        prefix: n,
                        value: vs(t),
                        type: s
                    }
                }).flatMap(e => e)
            }

            function js() {
                return b(document, ".js-selected-repository-field", HTMLInputElement)
            }

            function ys() {
                const e = v(document, "#repository-menu-list"),
                    t = Array.from(js()).map(e => e.value);
                let n = !1;
                for (const o of b(e, "[role=menuitem]", HTMLButtonElement)) {
                    const e = t.includes(o.value);
                    n || e || (n = !0), o.hidden = e
                }
                const s = e.querySelector(".js-no-repository-found");
                s && (s.hidden = n)
            }

            function Es() {
                const e = !v(document, ".js-select-repositories-radio", HTMLInputElement).checked || js().length > 0;
                v(document, ".js-integrations-install-form-submit", HTMLButtonElement).disabled = !e
            }

            function Ls() {
                const e = js().length,
                    t = v(document, ".js-integration-total-repos");
                t.hidden = 0 === e, t.textContent = `Selected ${e} ${w(e,"repository")}.`
            }

            function Ts(e, t) {
                const n = e.querySelector(".js-app-logo-with-bgcolor");
                n && (n.style.backgroundColor = `#${t}`)
            }

            function ks(e, t) {
                const n = e.nextElementSibling;
                if (n) {
                    if (!(n instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/find-next-element-sibling.js:16");
                    if (n instanceof HTMLElement) return n.classList.contains(t) ? n : ks(n, t)
                }
                return null
            }
            window.customElements.get("fuzzy-list") || (window.FuzzyListElement = FuzzyListElement, window.customElements.define("fuzzy-list", FuzzyListElement)), g(".js-advanced-search-prefix", function() {
                bs()
            }), u("change", ".js-advanced-search-prefix", bs), h(".js-advanced-search-input", function(e) {
                const t = d(e, ".js-advanced-search-label");
                t.classList.add("focus"), e.addEventListener("blur", () => t.classList.remove("focus"), {
                    once: !0
                })
            }), r(".js-advanced-search-input", function() {
                bs()
            }), r(".js-apps-install-select-repositories-container remote-input", e => {
                e.addEventListener("loadend", ys)
            }), u("details-menu-selected", ".js-apps-install-select-repositories-menu", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/apps/installation-repo-selection.js:61");
                const t = e.detail.relatedTarget,
                    n = v(document, ".js-integrations-install-repo-picked"),
                    s = v(t, "template", HTMLTemplateElement).content.cloneNode(!0);
                n.prepend(s), v(document, ".js-min-repository-error").hidden = !0, v(document, ".js-max-repository-warning").hidden = ! function() {
                    const e = +v(document, ".js-integrations-install-form", HTMLFormElement).getAttribute("data-max-repos");
                    return e > 0 && js().length >= e
                }(), Ls(), Es(), ys()
            }, {
                capture: !0
            }), u("change", ".js-integrations-install-form", Es), u("click", ".js-repository-picker-remove", function(e) {
                d(e.currentTarget, ".js-repository-picker-result").remove(), v(document, ".js-min-repository-error").hidden = js().length > 0, Ls(), Es(), ys()
            }), u("change", ".js-installation-repositories-radio", function() {
                const e = v(document, ".js-select-repositories-radio", HTMLInputElement);
                v(document, ".js-integrations-install-repo-selection").classList.toggle("has-removed-contents", !e.checked)
            }), j(".js-app-bgcolor-form", async function(e, t) {
                const n = e.querySelector(".js-app-bgcolor-save-notice");
                if (!n) return;
                let s;
                try {
                    s = await t.html()
                } catch (o) {
                    n.classList.remove("visible")
                }
                s && (n.classList.add("visible"), setTimeout(() => n.classList.remove("visible"), 1500))
            }), g(".js-app-bgcolor-input", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/apps.js:45");
                const n = d(t, "form", HTMLFormElement),
                    s = t.value.replace(/^#/, "");
                if (s.length < 1) return t.classList.remove("text-red"), void Ts(n, t.defaultValue);
                t.checkValidity() ? (t.classList.remove("text-red"), Ts(n, s), n.classList.contains("js-app-bgcolor-form") && y(() => (function(e, t) {
                    t.checkValidity() && E(e)
                })(n, t), 400)()) : (t.classList.add("text-red"), Ts(n, t.defaultValue))
            }), u("click", ".js-banner .js-next", function(e) {
                const t = d(e.currentTarget, ".js-banner"),
                    n = v(t, ".js-dismiss"),
                    s = v(t, ".js-next", HTMLButtonElement),
                    o = v(t, ".js-page.d-block"),
                    r = ks(o, "js-page");
                if (!r) throw new Error("invariant: app/assets/modules/github/banner.js:39");
                o.classList.remove("d-block"), o.classList.add("d-none"), r.classList.remove("d-none"), r.classList.add("d-block"), ks(r, "js-page") || (s.classList.add("d-none"), n.classList.remove("d-none"))
            }), r(".js-banner", function(e) {
                const t = v(e, ".js-dismiss");
                if (e.querySelectorAll(".js-page").length > 0) {
                    const n = v(e, ".js-next", HTMLButtonElement),
                        s = v(e, ".js-page.d-block", HTMLDivElement);
                    s && !ks(s, "js-page") ? t.classList.remove("d-none") : n.classList.remove("d-none")
                } else t.classList.remove("d-none")
            }), u("deprecatedAjaxSend", "[data-remote]", function(e) {
                e.currentTarget === e.target && (e.defaultPrevented || e.currentTarget.classList.add("loading"))
            }), u("deprecatedAjaxComplete", "[data-remote]", function(e) {
                e.currentTarget === e.target && e.currentTarget.classList.remove("loading")
            }), j("form.js-ajax-pagination, .js-ajax-pagination form", async function(e, t) {
                const n = d(e, ".js-ajax-pagination");
                let s;
                try {
                    s = await t.html()
                } catch (o) {
                    if (o.response && 404 === o.response.status) return void n.remove();
                    throw o
                }
                n.replaceWith(s.html), L(e, "page:loaded")
            });
            const Ms = ["input[pattern]", "input[required]", "textarea[required]", "input[data-required-change]", "textarea[data-required-change]"].join(",");
            h(Ms, e => {
                if (!(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/behaviors/html-validation.js:9");
                let t = e.checkValidity();

                function n() {
                    const n = e.checkValidity();
                    n !== t && e.form && xs(e.form), t = n
                }
                e.addEventListener("input", n), e.addEventListener("blur", function t() {
                    e.removeEventListener("input", n), e.removeEventListener("blur", t)
                })
            });
            const As = new WeakMap;

            function xs(e) {
                const t = e.checkValidity();
                for (const n of b(e, "button[data-disable-invalid]", HTMLButtonElement)) n.disabled = !t
            }
            r("button[data-disable-invalid]", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    const t = e.form;
                    t && (! function(e) {
                        As.get(e) || (e.addEventListener("change", () => xs(e)), As.set(e, !0))
                    }(t), e.disabled = !t.checkValidity())
                }
            }), r("input[data-required-change], textarea[data-required-change]", function(e) {
                if (!(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/behaviors/html-validation.js:59");
                const t = "radio" === e.type && e.form ? T(e.form, e.name, RadioNodeList).value : null;

                function n(n) {
                    const s = e.form;
                    if (n && "radio" === e.type && s && t)
                        for (const o of T(s, e.name, RadioNodeList)) o.setCustomValidity(e.value === t ? "unchanged" : "");
                    else e.setCustomValidity(e.value === (t || e.defaultValue) ? "unchanged" : "")
                }
                e.addEventListener("input", n), e.addEventListener("change", n), n(), e.form && xs(e.form)
            }), document.addEventListener("reset", function(e) {
                if (e.target instanceof HTMLFormElement) {
                    const t = e.target;
                    setTimeout(() => xs(t))
                }
            });
            const Ss = new WeakMap;

            function Hs(e, t) {
                t.classList.remove("is-loading", "successed", "errored", "warn"), e.classList.remove("is-autocheck-loading", "is-autocheck-successful", "is-autocheck-errored");
                const n = t.querySelector("p.note");
                if (n) {
                    const e = Ss.get(n);
                    e && (n.innerHTML = e)
                }
                const s = t.querySelector("dd.error");
                s && s.remove();
                const o = t.querySelector("dd.warning");
                o && o.remove()
            }

            function Cs(e) {
                const t = e.closest("form");
                if (!t) return;
                const n = t.querySelector(".js-auto-complete-button");
                n instanceof HTMLButtonElement && (n.disabled = !e.value)
            }
            r("auto-check", function(e) {
                const t = v(e, "input", HTMLInputElement),
                    n = t.closest("dl.form-group") || e,
                    s = t.form;
                if (!s) throw new Error("invariant: app/assets/modules/github/behaviors/autocheck.js:11");
                const o = n.querySelector("p.note");
                o && Ss.set(o, o.innerHTML), e.addEventListener("loadstart", () => {
                    Hs(t, n), n.classList.add("is-loading"), t.classList.add("is-autocheck-loading"), xs(s)
                }), e.addEventListener("loadend", () => {
                    n.classList.remove("is-loading"), t.classList.remove("is-autocheck-loading")
                }), t.addEventListener("auto-check-success", e => {
                    if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/behaviors/autocheck.js:25");
                    t.classList.add("is-autocheck-successful"), n.classList.add("successed"), xs(s);
                    const {
                        message: r
                    } = e.detail;
                    if (r)
                        if (o) o.innerHTML = r;
                        else {
                            const e = document.createElement("dd");
                            e.classList.add("warning"), e.innerHTML = r, n.append(e), n.classList.add("warn")
                        }
                }), t.addEventListener("auto-check-error", e => {
                    if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/behaviors/autocheck.js:45");
                    if (t.classList.add("is-autocheck-errored"), n.classList.add("errored"), xs(s), o) o.innerHTML = e.detail.message || "Something went wrong";
                    else {
                        const t = e.detail.message || "Something went wrong",
                            s = document.createElement("dd");
                        s.classList.add("error"), s.innerHTML = t, n.append(s)
                    }
                }), t.addEventListener("input", () => {
                    t.value || Hs(t, n)
                }), s.addEventListener("reset", () => {
                    Hs(t, n)
                })
            }), r("auto-complete", function(e) {
                e.addEventListener("loadstart", () => e.classList.add("is-auto-complete-loading")), e.addEventListener("loadend", () => e.classList.remove("is-auto-complete-loading"))
            }), r("auto-complete", {
                constructor: k,
                initialize: Cs
            }), u("auto-complete-change", "auto-complete", function(e) {
                if (!(e.currentTarget instanceof k)) throw new Error("invariant: app/assets/modules/github/behaviors/autocomplete.js:16");
                Cs(e.currentTarget)
            });
            const qs = new C;
            async function Is(e) {
                const t = e.form;
                if (!t) throw new Error("invariant: app/assets/modules/github/behaviors/autosearch-form.js:30");
                t.classList.add("is-sending");
                try {
                    const e = x(t),
                        n = `${t.action}&${e}`.replace(/[?&]/, "?"),
                        s = await qs.push(S(n)),
                        o = t.getAttribute("data-results-container"),
                        r = o ? document.getElementById(o) : null;
                    r && (r.innerHTML = s), H(null, "", `?${e}`)
                } finally {
                    t.classList.remove("is-sending")
                }
            }

            function _s(e) {
                e.preventDefault(), e.stopPropagation()
            }

            function $s(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        s = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var i, a = e[Symbol.iterator](); !(s = (i = a.next()).done) && (n.push(i.value), !t || n.length !== t); s = !0);
                    } catch (c) {
                        o = !0, r = c
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }

            function Ds(e) {
                const t = document.querySelector(".js-global-screen-reader-notice");
                t && (t.textContent = "", t.textContent = function(e) {
                    return (e.getAttribute("aria-label") || e.innerText || "").trim()
                }(e))
            }
            h(".js-autosearch-field", e => {
                const t = e;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/behaviors/autosearch-form.js:52");
                M(t, Is), t.addEventListener("blur", () => A(t, Is), {
                    once: !0
                })
            }), h("input[data-autoselect]", async function(e) {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/behaviors/autoselect.js:6");
                await f(), e.select()
            }), u("change", "form[data-autosubmit]", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/behaviors/autosubmit.js:16");
                E(t)
            }), u("change", "input[data-autosubmit]", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/behaviors/autosubmit.js:22");
                const t = e.form;
                if (!t) throw new Error("invariant: app/assets/modules/github/behaviors/autosubmit.js:24");
                E(t)
            }), r("a.btn.disabled", {
                subscribe: e => q(e, "click", _s)
            }), (async () => {
                await I;
                const e = function(e) {
                        try {
                            return JSON.parse(window.localStorage.getItem(e))
                        } catch (t) {
                            return {}
                        }
                    }("bundle-urls") || {},
                    t = function() {
                        const e = {};
                        for (const t of document.getElementsByTagName("script")) {
                            const n = t.src.match(/\/([\w-]+)-[0-9a-f]{32,}\.js$/);
                            n && (e[`${n[1]}.js`] = t.src)
                        }
                        for (const t of document.getElementsByTagName("link")) {
                            const n = t.href.match(/\/([\w-]+)-[0-9a-f]{32,}\.css$/);
                            n && (e[`${n[1]}.css`] = t.href)
                        }
                        return e
                    }();
                ! function(e, t) {
                    try {
                        window.localStorage.setItem(e, JSON.stringify(t))
                    } catch (n) {}
                }("bundle-urls", t);
                const n = Object.keys(t).filter(n => {
                    const s = t[n];
                    return e[n] !== s
                });
                n.length && _({
                    downloadedBundles: n
                })
            })(), r(".js-check-all-container", {
                subscribe: function(e) {
                    var t = !1,
                        n = null;

                    function s(e, t, n) {
                        var s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                        t instanceof HTMLInputElement && (t.indeterminate = s, t.checked !== n && (t.checked = n, setTimeout(function() {
                            var n = new CustomEvent("change", {
                                bubbles: !0,
                                cancelable: !1,
                                detail: {
                                    relatedTarget: e
                                }
                            });
                            t.dispatchEvent(n)
                        })))
                    }

                    function o(o) {
                        var r = o.target;
                        r instanceof Element && (r.hasAttribute("data-check-all") ? function(t) {
                            if (t instanceof CustomEvent && t.detail) {
                                var o = t.detail.relatedTarget;
                                if (o && o.hasAttribute("data-check-all-item")) return
                            }
                            var r = t.target;
                            if (r instanceof HTMLInputElement) {
                                n = null;
                                var a = !0,
                                    c = !1,
                                    l = void 0;
                                try {
                                    for (var u, d = e.querySelectorAll("[data-check-all-item]")[Symbol.iterator](); !(a = (u = d.next()).done); a = !0) {
                                        var m = u.value;
                                        s(r, m, r.checked)
                                    }
                                } catch (f) {
                                    c = !0, l = f
                                } finally {
                                    try {
                                        a || null == d.return || d.return()
                                    } finally {
                                        if (c) throw l
                                    }
                                }
                                i()
                            }
                        }(o) : r.hasAttribute("data-check-all-item") && function(o) {
                            if (o instanceof CustomEvent && o.detail) {
                                var r = o.detail.relatedTarget;
                                if (r && (r.hasAttribute("data-check-all") || r.hasAttribute("data-check-all-item"))) return
                            }
                            var a = o.target;
                            if (a instanceof HTMLInputElement) {
                                var c = Array.from(e.querySelectorAll("[data-check-all-item]"));
                                if (t && n) {
                                    var l = [c.indexOf(n), c.indexOf(a)].sort(),
                                        u = $s(l, 2),
                                        d = u[0],
                                        m = u[1],
                                        f = !0,
                                        p = !1,
                                        g = void 0;
                                    try {
                                        for (var h, b = c.slice(d, +m + 1 || 9e9)[Symbol.iterator](); !(f = (h = b.next()).done); f = !0) {
                                            var v = h.value;
                                            s(a, v, a.checked)
                                        }
                                    } catch (T) {
                                        p = !0, g = T
                                    } finally {
                                        try {
                                            f || null == b.return || b.return()
                                        } finally {
                                            if (p) throw g
                                        }
                                    }
                                }
                                t = !1, n = a;
                                var w = e.querySelector("[data-check-all]");
                                if (w) {
                                    var j = c.length,
                                        y = c.filter(function(e) {
                                            return e instanceof HTMLInputElement && e.checked
                                        }).length,
                                        E = y === j,
                                        L = j > y && y > 0;
                                    s(a, w, E, L)
                                }
                                i()
                            }
                        }(o))
                    }

                    function r(e) {
                        e.target instanceof Element && e.target.hasAttribute("data-check-all-item") && (t = e.shiftKey)
                    }

                    function i() {
                        var t = e.querySelector("[data-check-all-count]");
                        if (t) {
                            var n = e.querySelectorAll("[data-check-all-item]:checked").length;
                            t.textContent = n.toString()
                        }
                    }
                    return e.addEventListener("mousedown", r), e.addEventListener("change", o), {
                        unsubscribe: function() {
                            e.removeEventListener("mousedown", r), e.removeEventListener("change", o)
                        }
                    }
                }
            });

            function Rs(e) {
                const t = e.querySelector(".js-clipboard-clippy-icon"),
                    n = e.querySelector(".js-clipboard-check-icon");
                e.classList.toggle("ClipboardButton--success"), t && t.classList.toggle("d-none"), n && n.classList.toggle("d-none")
            }

            function Bs(e, t) {
                const n = e.closest(".js-write-bucket");
                n && n.classList.toggle("focused", t)
            }

            function Ns(e) {
                const t = e.currentTarget;
                t instanceof Element && Bs(t, !1)
            }

            function Ps(e) {
                const t = d(e, ".js-previewable-comment-form"),
                    n = e.classList.contains("js-preview-tab");
                if (n) {
                    const e = v(t, ".js-write-bucket");
                    v(t, ".js-preview-body").style.minHeight = `${e.clientHeight}px`
                }
                t.classList.toggle("preview-selected", n), t.classList.toggle("write-selected", !n);
                const s = v(t, '.tabnav-tab.selected, .tabnav-tab[aria-selected="true"]');
                s.setAttribute("aria-selected", "false"), s.classList.remove("selected"), e.classList.add("selected"), e.setAttribute("aria-selected", "true");
                const o = v(t, ".js-write-tab");
                return n ? o.setAttribute("data-hotkey", "Control+P,Meta+P") : o.removeAttribute("data-hotkey"), t
            }
            u("clipboard-copy", "[data-copy-feedback]", e => {
                const t = e.currentTarget,
                    n = p(t, "data-copy-feedback"),
                    s = t.getAttribute("aria-label"),
                    o = t.getAttribute("data-tooltip-direction") || "s";
                t.setAttribute("aria-label", n), t.classList.add("tooltipped", `tooltipped-${o}`), Ds(t), setTimeout(() => {
                    s ? t.setAttribute("aria-label", s) : t.removeAttribute("aria-label"), t.classList.remove("tooltipped", `tooltipped-${o}`)
                }, 2e3)
            }), u("clipboard-copy", ".js-clipboard-copy", function({
                currentTarget: e
            }) {
                Rs(e), setTimeout(Rs, 2e3, e)
            }), j(".js-new-comment-form", async function(e, t) {
                let n;
                ! function(e) {
                    const t = e.querySelector(".js-comment-form-error");
                    t && (t.hidden = !0)
                }(e);
                try {
                    n = await t.json()
                } catch (r) {
                    ! function(e, t) {
                        let n = "You can't comment at this time";
                        if (t.response && 422 === t.response.status) {
                            const e = t.response.json;
                            e.errors && (n += ` — your comment ${e.errors.join(", ")}`)
                        }
                        n += ". ";
                        const s = e.querySelector(".js-comment-form-error");
                        s && (s.textContent = n, s.hidden = !1)
                    }(e, r)
                }
                if (!n) return;
                e.reset();
                for (const i of b(e, ".js-resettable-field", HTMLInputElement)) $(i, i.getAttribute("data-reset-value") || "");
                const s = e.querySelector(".js-write-tab");
                s && s.click();
                const o = n.json.updateContent;
                for (const i in o) {
                    const e = o[i],
                        t = document.querySelector(i);
                    t ? D(t, e) : console.warn(`couldn't find ${i} for immediate update`)
                }
            }), r(".js-comment-and-button", {
                constructor: HTMLButtonElement,
                initialize(e) {
                    if (!e.form) throw new Error("invariant: app/assets/modules/github/behaviors/commenting/close.js:26");
                    const t = v(e.form, ".js-comment-field"),
                        n = e.querySelector(".js-form-action-text"),
                        s = n || e,
                        o = s.textContent;
                    let r = !1;

                    function i(t) {
                        const n = t.currentTarget;
                        if (!(n instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/behaviors/commenting/close.js:35");
                        const i = n.value.trim();
                        i !== r && (r = i, s.textContent = i ? p(e, "data-comment-text") : o)
                    }
                    return {
                        add() {
                            t.addEventListener("input", i), t.addEventListener("change", i)
                        },
                        remove() {
                            t.removeEventListener("input", i), t.removeEventListener("change", i)
                        }
                    }
                }
            }), u("click", ".js-comment-edit-button", function(e) {
                const t = d(e.currentTarget, ".js-comment");
                t.classList.add("is-comment-editing"), v(t, ".js-write-tab").click();
                const n = v(t, ".js-comment-field");
                if (!(n instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/behaviors/commenting/edit.js:14");
                n.focus(), L(n, "change");
                const s = e.currentTarget.closest(".js-dropdown-details");
                s && s.removeAttribute("open")
            }), u("click", ".js-comment-hide-button", function(e) {
                const t = d(e.currentTarget, ".js-comment").querySelector(".js-minimize-comment");
                t && t.classList.remove("d-none");
                const n = e.currentTarget.closest(".js-dropdown-details");
                n && n.removeAttribute("open")
            }), u("click", ".js-comment-hide-minimize-form", function(e) {
                d(e.currentTarget, ".js-minimize-comment").classList.add("d-none")
            }), u("click", ".js-comment-cancel-button", function(e) {
                const t = d(e.currentTarget, "form", HTMLFormElement),
                    n = p(e.currentTarget, "data-confirm-text");
                if (R(t) && !confirm(n)) return !1;
                for (const o of t.querySelectorAll("input, textarea")) {
                    if (!(o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/behaviors/commenting/edit.js:54");
                    o.value = o.defaultValue
                }
                const s = e.currentTarget.closest(".js-comment");
                s && s.classList.remove("is-comment-editing")
            }), j(".js-comment-delete, .js-comment .js-comment-update, .js-issue-update, .js-comment-minimize, .js-comment-unminimize", function(e, t, n) {
                const s = d(e, ".js-comment");
                s.classList.add("is-comment-loading");
                const o = s.getAttribute("data-body-version");
                o && n.headers.set("X-Body-Version", o)
            }), j(".js-comment .js-comment-update", async function(e, t) {
                let n;
                const s = d(e, ".js-comment"),
                    o = s.querySelector(".js-comment-update-error");
                o && (o.hidden = !0);
                try {
                    n = await t.json()
                } catch (l) {
                    if (422 !== l.response.status) throw l; {
                        const e = JSON.parse(l.response.text);
                        if (e.errors) return void(o && (o.textContent = `There was an error posting your comment: ${e.errors.join(", ")}`, o.hidden = !1))
                    }
                }
                if (!n) return;
                const r = n.json,
                    i = s.querySelector(".js-comment-body");
                i && r.body && (i.innerHTML = r.body), s.setAttribute("data-body-version", r.newBodyVersion);
                const a = s.querySelector(".js-body-version");
                a instanceof HTMLInputElement && (a.value = r.newBodyVersion);
                for (const u of s.querySelectorAll("input, textarea")) {
                    if (!(u instanceof HTMLInputElement || u instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/behaviors/commenting/edit.js:115");
                    u.defaultValue = u.value
                }
                s.classList.remove("is-comment-stale", "is-comment-editing");
                const c = s.querySelector(".js-comment-edit-history");
                if (c) {
                    const e = await B(document, r.editUrl);
                    c.innerHTML = "", c.append(e)
                }
            }), j(".js-comment .js-comment-delete, .js-comment .js-comment-update, .js-comment-minimize, .js-comment-unminimize", async function(e, t) {
                const n = d(e, ".js-comment");
                try {
                    await t.text()
                } catch (s) {
                    if (422 !== s.response.status) throw s; {
                        let e;
                        try {
                            e = JSON.parse(s.response.text)
                        } catch (o) {}
                        e && e.stale && n.classList.add("is-comment-stale")
                    }
                }
                n.classList.remove("is-comment-loading")
            }), j(".js-comment-delete", async function(e, t) {
                await t.json();
                let n = e.closest(".js-comment-delete-container");
                if (n || (n = e.closest(".js-comment-container") || e.closest(".js-line-comments")) && 1 !== n.querySelectorAll(".js-comment").length && (n = d(e, ".js-comment")), !n) throw new Error("invariant: app/assets/modules/github/behaviors/commenting/edit.js:165");
                n.remove()
            }), j(".js-issue-update", async function(e, t) {
                const n = d(e, ".js-details-container");
                n.classList.remove("open");
                const s = (await t.json()).json;
                if (null != s.issue_title) {
                    v(n, ".js-issue-title").textContent = s.issue_title;
                    const e = n.closest(".js-issues-results");
                    if (e) {
                        if (e.querySelector(".js-merge-pr.is-merging")) {
                            const t = e.querySelector(".js-merge-pull-request textarea");
                            t instanceof HTMLTextAreaElement && t.value === t.defaultValue && (t.value = t.defaultValue = s.issue_title)
                        } else if (e.querySelector(".js-merge-pr.is-squashing")) {
                            const t = e.querySelector(".js-merge-pull-request .js-merge-title");
                            t instanceof HTMLInputElement && t.value === t.defaultValue && (t.value = t.defaultValue = s.default_squash_commit_title)
                        }
                        const t = e.querySelector("button[value=merge]");
                        t && t.setAttribute("data-input-message-value", s.issue_title);
                        const n = e.querySelector("button[value=squash]");
                        n && n.setAttribute("data-input-title-value", s.default_squash_commit_title)
                    }
                }
                document.title = s.page_title;
                for (const o of e.elements)(o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement) && (o.defaultValue = o.value)
            }), j(".js-comment-minimize", async function(e, t) {
                await t.json();
                const n = d(e, ".js-comment").querySelector(".js-minimize-comment");
                n && n.classList.add("d-none");
                const s = d(e, ".unminimized-comment");
                s.classList.add("d-none"), s.classList.remove("js-comment");
                const o = d(e, ".js-minimizable-comment-group").querySelector(".minimized-comment");
                o && o.classList.remove("d-none"), o && o.classList.add("js-comment")
            }), j(".js-comment-unminimize", async function(e, t) {
                await t.json();
                const n = d(e, ".js-minimizable-comment-group"),
                    s = n.querySelector(".unminimized-comment");
                s && s.classList.remove("d-none"), s && s.classList.add("js-comment");
                const o = n.querySelector(".minimized-comment");
                o && o.classList.add("d-none"), o && o.classList.remove("js-comment")
            }), h(".js-comment-field", function(e) {
                Bs(e, !0), e.addEventListener("blur", Ns, {
                    once: !0
                })
            }), u("click", ".js-write-tab", function(e) {
                const t = e.currentTarget,
                    n = d(t, ".js-previewable-comment-form");
                if (n instanceof TabContainerElement) return;
                const s = Ps(t);
                setTimeout(() => {
                    v(s, ".js-comment-field").focus()
                });
                const o = n.querySelector("markdown-toolbar");
                null != o && (o.hidden = !1)
            }), u("click", ".js-preview-tab", function(e) {
                const t = e.currentTarget,
                    n = d(t, ".js-previewable-comment-form");
                if (n instanceof TabContainerElement) return;
                const s = Ps(t);
                setTimeout(() => {
                    zs(s)
                });
                const o = n.querySelector("markdown-toolbar");
                null != o && (o.hidden = !0), e.stopPropagation(), e.preventDefault()
            }), u("tab-container-change", ".js-previewable-comment-form", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/behaviors/commenting/preview.js:118");
                const t = e.detail.relatedTarget.classList.contains("js-preview-panel"),
                    n = e.currentTarget,
                    s = v(n, ".js-write-tab");
                if (t) {
                    const e = v(n, ".js-write-bucket");
                    v(n, ".js-preview-body").style.minHeight = `${e.clientHeight}px`, s.setAttribute("data-hotkey", "Control+P,Meta+P"), zs(n);
                    const t = n.querySelector("markdown-toolbar");
                    t && (t.hidden = !0)
                } else {
                    s.removeAttribute("data-hotkey"), setTimeout(() => v(n, ".js-comment-field").focus(), 0);
                    const e = n.querySelector("markdown-toolbar");
                    e && (e.hidden = !1)
                }
                n.classList.toggle("preview-selected", t), n.classList.toggle("write-selected", !t)
            }), u("preview:render", ".js-previewable-comment-form", function(e) {
                const t = Ps(v(e.target, ".js-preview-tab"));
                setTimeout(() => {
                    zs(t);
                    const e = t.querySelector("markdown-toolbar");
                    e && (e.hidden = !0)
                })
            });
            const Fs = new C,
                Os = new WeakMap;
            let Us = !1;
            async function Ws(e, t, n, s, o) {
                const r = {};
                r.text = t, r.authenticity_token = function(e) {
                    const t = e.getAttribute("data-preview-authenticity-token"),
                        n = d(e, "form", HTMLFormElement).elements.namedItem("authenticity_token");
                    return null != t ? t : n instanceof HTMLInputElement ? n.value : void 0
                }(e), s && (r.path = s), n && (r.original_line = n), o && (r.line_number = o);
                const i = {
                    url: p(e, "data-preview-url"),
                    data: r
                };
                L(e, "preview:setup", i);
                const a = JSON.stringify(i),
                    [c, l] = Os.get(e) || [];
                if (c === a) return l;
                Us = !1;
                const u = Fs.push(function(e) {
                    const t = new FormData;
                    for (const n in e.data) null !== e.data[n] && t.append(n, e.data[n]);
                    return S(e.url, {
                        method: "post",
                        body: t
                    })
                }(i));
                Os.set(e, [a, u]);
                const m = await u;
                return Us = !0, m
            }
            async function zs(e) {
                const t = v(e, ".js-comment-field", HTMLTextAreaElement),
                    n = v(e, ".comment-body"),
                    s = e.querySelector(".js-original-line"),
                    o = e.querySelector(".js-path"),
                    r = e.querySelector(".js-line-number"),
                    i = s instanceof HTMLInputElement ? s.value : null,
                    a = o instanceof HTMLInputElement ? o.value : null,
                    c = r instanceof HTMLInputElement ? r.value : null;
                Us || (n.innerHTML = "<p>Loading preview&hellip;</p>");
                try {
                    const s = await Ws(e, t.value, i, a, c);
                    n.innerHTML = s || "<p>Nothing to preview</p>"
                } catch (l) {
                    n.innerHTML = "<p>Error rendering preview</p>"
                }
            }
            r(".js-preview-tab", function(e) {
                let t, n, s, o, r;
                e.addEventListener("mouseenter", () => {
                    !async function() {
                        if (!t) {
                            t = d(e, ".js-previewable-comment-form"), n = v(t, ".js-comment-field", HTMLTextAreaElement);
                            const i = t.querySelector(".js-original-line"),
                                a = t.querySelector(".js-path"),
                                c = t.querySelector(".js-line-number");
                            s = i instanceof HTMLInputElement ? i.value : null, o = a instanceof HTMLInputElement ? a.value : null, r = c instanceof HTMLInputElement ? c.value : null
                        }
                        try {
                            await Ws(t, n.value, s, o, r)
                        } catch (i) {}
                    }()
                })
            }), m("keydown", ".js-comment-field", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/behaviors/commenting/preview.js:269");
                if ((e.ctrlKey || e.metaKey) && "P" === e.key) {
                    const n = d(t, ".js-previewable-comment-form");
                    n.classList.contains("write-selected") && (n instanceof TabContainerElement ? v(n, ".js-preview-tab").click() : (t.blur(), n.dispatchEvent(new CustomEvent("preview:render", {
                        bubbles: !0,
                        cancelable: !1
                    }))), e.preventDefault(), e.stopImmediatePropagation())
                }
            });
            const Vs = /^(\+1|-1|:\+1?|:-1?)$/,
                Ks = e => {
                    let t = !1;
                    for (const n of e.split("\n")) {
                        const e = n.trim();
                        if (e && !e.startsWith(">")) {
                            if (t && !1 === Vs.test(e)) return !1;
                            !t && Vs.test(e) && (t = !0)
                        }
                    }
                    return t
                };

            function Ys(e) {
                const t = e.target;
                if (!(t instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/behaviors/commenting/reaction-suggestion.js:41");
                const n = t.value,
                    s = d(t, ".js-reaction-suggestion");
                if (s)
                    if (Ks(n)) {
                        s.classList.remove("hide-reaction-suggestion"), s.classList.add("reaction-suggestion");
                        const e = p(s, "data-reaction-markup");
                        s.setAttribute("data-reaction-suggestion-message", e)
                    } else Xs(s)
            }

            function Xs(e) {
                e.classList.remove("reaction-suggestion"), e.classList.add("hide-reaction-suggestion"), e.removeAttribute("data-reaction-suggestion-message")
            }
            async function Js({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/behaviors/details-menu.js:161");
                const t = e,
                    n = e.hasAttribute("open");
                L(t, n ? "menu:activate" : "menu:deactivate"), await f(), L(t, n ? "menu:activated" : "menu:deactivated")
            }
            u("focusout", "#new_comment_field", function(e) {
                const t = e.currentTarget;
                Xs(d(t, ".js-reaction-suggestion"))
            }), u("focusin", "#new_comment_field", function(e) {
                Ys(e)
            }), m("keyup", "#new_comment_field", function(e) {
                Ys(e)
            }), r("details.select-menu details-menu include-fragment", function(e) {
                const t = e.closest("details");
                t && (e.addEventListener("loadstart", function() {
                    t.classList.add("is-loading"), t.classList.remove("has-error")
                }), e.addEventListener("error", function() {
                    t.classList.add("has-error")
                }), e.addEventListener("loadend", function() {
                    t.classList.remove("is-loading");
                    const e = t.querySelector(".js-filterable-field");
                    e && L(e, "filterable:change")
                }))
            }), r("details details-menu .js-filterable-field", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = d(e, "details");
                    t.addEventListener("toggle", function() {
                        t.hasAttribute("open") || (e.value = "", L(e, "filterable:change"))
                    })
                }
            }), r("details-menu[role=menu] [role=menu]", e => {
                const t = e.closest("details-menu[role]");
                t && t !== e && t.removeAttribute("role")
            }), r("details details-menu remote-input input", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = d(e, "details");
                    t.addEventListener("toggle", function() {
                        t.hasAttribute("open") || (e.value = "")
                    })
                }
            }), r("form details-menu", e => {
                const t = d(e, "form");
                t.addEventListener("reset", () => {
                    setTimeout(() => (function(e) {
                        const t = e.querySelectorAll("details-menu [role=menuitemradio] input[type=radio]:checked");
                        for (const n of t) L(n, "change")
                    })(t), 0)
                })
            }), m("keypress", "details-menu .js-filterable-field", e => {
                if ("Enter" === e.key) {
                    const t = e.currentTarget;
                    if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/behaviors/details-menu.js:80");
                    const n = d(t, "details-menu").querySelector('[role^="menuitem"]:not([hidden])');
                    n && n.click(), e.preventDefault()
                }
            }), u("details-menu-selected", "details-menu", e => {
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/behaviors/details-menu.js:90");
                const n = t.querySelector(".js-filterable-field");
                n instanceof HTMLInputElement && n.value && n.focus()
            }, {
                capture: !0
            }), u("details-menu-selected", "[data-menu-input]", e => {
                const t = p(e.target, "data-menu-input"),
                    n = document.getElementById(t);
                if (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) {
                    if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/behaviors/details-menu.js:101");
                    if (!(e.detail.relatedTarget instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/behaviors/details-menu.js:102");
                    n.value = e.detail.relatedTarget.value
                }
            }, {
                capture: !0
            }), r("details-menu remote-input", {
                constructor: N,
                initialize(e) {
                    const t = document.getElementById(e.getAttribute("aria-owns") || "");
                    if (!t) return;
                    let n;
                    e.addEventListener("load", () => {
                        n = document.activeElement && t.contains(document.activeElement) && document.activeElement.id ? document.activeElement.id : null
                    }), e.addEventListener("loadend", () => {
                        if (n) {
                            const s = t.querySelector(`#${n}`) || t.querySelector('[role^="menu"]');
                            s ? s.focus() : e.input && e.input.focus()
                        }
                    })
                }
            }), u("details-menu-selected", "details-menu[data-menu-max-options]", e => {
                const t = +p(e.currentTarget, "data-menu-max-options") === e.currentTarget.querySelectorAll('[role="menuitemcheckbox"][aria-checked="true"]').length;
                v(e.currentTarget, "[data-menu-max-options-warning]").hidden = !t;
                for (const n of b(e.currentTarget, '[role="menuitemcheckbox"] input', HTMLInputElement)) n.disabled = t && !n.checked
            }, {
                capture: !0
            }), r("details > details-menu", {
                subscribe(e) {
                    const t = d(e, "details");
                    return q(t, "toggle", Js)
                }
            });
            const Gs = new WeakMap,
                Qs = ["input[type=submit][data-disable-with]", "button[data-disable-with]"].join(", ");

            function Zs(e, t) {
                e instanceof HTMLInputElement ? e.value = t : e.innerHTML = t
            }

            function eo(e) {
                for (const t of e.querySelectorAll(Qs)) {
                    const n = Gs.get(t);
                    if (null != n) {
                        if (!(t instanceof HTMLInputElement || t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/behaviors/disable-with.js:53");
                        Zs(t, n), t.hasAttribute("data-disable-invalid") && !e.checkValidity() || (t.disabled = !1), Gs.delete(t)
                    }
                }
            }
            u("submit", "form", function(e) {
                for (const n of e.currentTarget.querySelectorAll(Qs)) {
                    if (!(n instanceof HTMLInputElement || n instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/behaviors/disable-with.js:34");
                    Gs.set(n, (t = n) instanceof HTMLInputElement ? t.value || "Submit" : t.innerHTML || "");
                    const e = n.getAttribute("data-disable-with");
                    e && Zs(n, e), n.disabled = !0
                }
                var t
            }, {
                capture: !0
            }), u("deprecatedAjaxComplete", "form", function({
                currentTarget: e,
                target: t
            }) {
                if (!(e instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/behaviors/disable-with.js:71");
                e === t && eo(e)
            }), P(eo);
            const to = {
                OS: "Meta",
                Win: "Meta",
                Windows: "Meta",
                Scroll: "ScrollLock",
                SpaceBar: " ",
                Left: "ArrowLeft",
                Right: "ArrowRight",
                Down: "ArrowDown",
                Up: "ArrowUp",
                Del: "Delete",
                Esc: "Escape"
            };
            const no = Object.getOwnPropertyDescriptor(KeyboardEvent.prototype, "key");
            if (no) {
                let e = e => no.get.apply(e);
                /Macintosh.*Safari/.test(navigator.userAgent) && (e = (e => {
                    return function(e, t) {
                        return t && /^[a-z]$/.test(e) ? e.toUpperCase() : e
                    }(no.get.apply(e), e.shiftKey)
                })), Object.defineProperty(KeyboardEvent.prototype, "key", {
                    enumerable: !0,
                    configurable: !0,
                    get() {
                        return t = e(this), to[t] || t;
                        var t
                    }
                })
            }

            function so(e, t) {
                let n = io(e, t);
                if (n && -1 === t.indexOf("/")) {
                    n += io(e.substring(e.lastIndexOf("/") + 1), t)
                }
                return n
            }

            function oo(e) {
                const t = e.toLowerCase().split("");
                let n = "";
                for (let s = 0; s < t.length; s++) {
                    const e = t[s].replace(/[\\^$*+?.()|[\]{}]/g, "\\$&");
                    n += 0 === s ? `(.*)(${e})` : `([^${e}]*?)(${e})`
                }
                return new RegExp(`${n}(.*?)$`, "i")
            }

            function ro(e, t, n) {
                if (t) {
                    const s = e.innerHTML.trim().match(n || oo(t));
                    if (!s) return;
                    let o = !1;
                    const r = [];
                    for (let e = 1; e < s.length; ++e) {
                        const t = s[e];
                        t && (e % 2 == 0 ? o || (r.push("<mark>"), o = !0) : o && (r.push("</mark>"), o = !1), r.push(t))
                    }
                    e.innerHTML = r.join("")
                } else {
                    const t = e.innerHTML.trim(),
                        n = t.replace(/<\/?mark>/g, "");
                    t !== n && (e.innerHTML = n)
                }
            }

            function io(e, t) {
                let n = e;
                if (n === t) return 1;
                const s = n.length;
                let o = 0,
                    r = 0;
                for (let l = 0; l < t.length; l++) {
                    const e = t[l],
                        i = n.indexOf(e.toLowerCase()),
                        a = n.indexOf(e.toUpperCase()),
                        c = Math.min(i, a),
                        u = c > -1 ? c : Math.max(i, a);
                    if (-1 === u) return 0;
                    o += .1, n[u] === e && (o += .1), 0 === u && (o += .8, 0 === l && (r = 1)), " " === n.charAt(u - 1) && (o += .8), n = n.substring(u + 1, s)
                }
                const i = t.length,
                    a = o / i;
                let c = (a * (i / s) + a) / 2;
                return r && c + .1 < 1 && (c += .1), c
            }
            const ao = new WeakMap,
                co = new WeakMap,
                lo = new WeakMap;

            function uo(e, t, n = {}) {
                if (!e) return 0;
                const s = t.toLowerCase(),
                    o = null != n.text ? n.text : fo,
                    r = n.limit,
                    i = n.score;
                let a = ao.get(e);
                const c = e.querySelector('input[type="radio"]:checked'),
                    l = Array.from(e.children);
                a || (a = Array.from(e.children), ao.set(e, a));
                for (const g of l) e.removeChild(g), g.style.display = "";
                const u = document.createDocumentFragment();
                let d = 0,
                    m = 0;
                if (s) {
                    const e = Array.from(a);
                    for (const n of e) {
                        null == co.get(n) && co.set(n, o(n));
                        const e = i ? i(co.get(n) || "", s, n) : so(co.get(n) || "", s);
                        lo.set(n, String(e))
                    }
                    e.sort(mo);
                    const t = oo(s);
                    for (const o of e)(null == r || d < r) && parseFloat(lo.get(o)) > 0 && (m++, !0 === n.mark && (ro(o), ro(o, s, t)), u.appendChild(o)), d++
                } else
                    for (const g of a)(null == r || d < r) && (m++, !0 === n.mark && ro(g), u.appendChild(g)), d++;
                let f = !1;
                if (c instanceof HTMLInputElement)
                    for (const g of u.querySelectorAll('input[type="radio"]:checked')) g instanceof HTMLInputElement && g.value !== c.value && (g.checked = !1, f = !0);
                e.appendChild(u), c && f && c.dispatchEvent(new Event("change", {
                    bubbles: !0
                }));
                const p = e.querySelectorAll(".js-divider");
                for (const g of p) g.classList.toggle("d-none", Boolean(s && s.trim().length > 0));
                return m
            }

            function mo(e, t) {
                const n = parseFloat(lo.get(e)),
                    s = parseFloat(lo.get(t)),
                    o = co.get(e) || "",
                    r = co.get(t) || "";
                return n > s ? -1 : n < s ? 1 : o < r ? -1 : o > r ? 1 : 0
            }

            function fo(e) {
                if (e.hasAttribute("data-filter-value")) {
                    return (e.getAttribute("data-filter-value") || "").toLowerCase().trim()
                }
                return e.textContent.toLowerCase().trim()
            }

            function po(e) {
                return e.textContent.toLowerCase().trim()
            }

            function go(e, t) {
                const n = e.innerHTML;
                if (t) {
                    const s = new RegExp(t, "i");
                    e.innerHTML = n.replace(s, "<mark>$&</mark>")
                } else {
                    const t = n.replace(/<\/?mark>/g, "");
                    n !== t && (e.innerHTML = t)
                }
            }

            function ho(e) {
                return e.textContent.toLowerCase().trim()
            }

            function bo(e, t) {
                const n = e.innerHTML;
                if (t) {
                    const s = new RegExp(t, "i");
                    e.innerHTML = n.replace(s, "<mark>$&</mark>")
                } else {
                    const t = n.replace(/<\/?mark>/g, "");
                    n !== t && (e.innerHTML = t)
                }
            }
            const vo = new WeakMap;
            async function wo(e, t, n) {
                const s = vo.get(e) || await async function(e) {
                    await F();
                    const t = await O(p(e, "data-filterable-src"));
                    return vo.set(e, t), t
                }(e);
                if (null == s) throw new Error("invariant: app/assets/modules/github/substring-memory-filter-list.js:24");
                const o = n.limit,
                    r = v(e, "template", HTMLTemplateElement),
                    i = {};
                for (const p of b(e, "input[type=hidden]", HTMLInputElement)) i[`${p.name}${p.value}`] = p;
                let a = r.nextElementSibling;
                for (; a;) {
                    const e = a;
                    a = e.nextElementSibling, e instanceof HTMLElement && ("true" === e.getAttribute("aria-checked") || e.classList.contains("select-menu-divider")) ? e.hidden = !0 : e.remove()
                }
                let c = 0,
                    l = document.createDocumentFragment();
                const u = e.querySelector(".js-divider-suggestions"),
                    d = e.querySelector(".js-divider-rest");

                function m(e) {
                    const n = !(null != o && c >= o) && function(e) {
                        return `${e.login} ${e.name}`.toLowerCase().trim()
                    }(e).indexOf(t) >= 0;
                    if (n || e.selected) {
                        const t = function(e, t, n) {
                            if (null != e.element) return e.element;
                            const s = t.content.cloneNode(!0),
                                o = v(s, "input[type=checkbox]", HTMLInputElement);
                            e.type && (o.name = `reviewer_${e.type}_ids[]`);
                            o.value = e.id;
                            const r = `${o.name}${e.id}`;
                            let i = e.selected;
                            n[r] && (i = !0, n[r].remove(), delete n[r]);
                            const a = v(s, "[role^=menuitem]");
                            i && (a.setAttribute("aria-checked", "true"), o.checked = !0);
                            e.disabled && a.setAttribute("aria-disabled", "true");
                            const c = s.querySelector(".js-username");
                            c && (c.textContent = e.login);
                            const l = s.querySelector(".js-description");
                            l && (l.textContent = e.name);
                            const u = s.querySelector(".js-extended-description");
                            u && (e.description ? u.textContent = e.description : u.remove());
                            return v(s, ".js-avatar", HTMLImageElement).src = e.avatar, e.element = a, e.element
                        }(e, r, i);
                        t.hidden = !n, n && c++, l.appendChild(t)
                    }
                }
                if (u && s.suggestions) {
                    for (const e of s.suggestions) m(e);
                    l.childNodes.length && (u.after(l), u.hidden = 0 === c, l = document.createDocumentFragment())
                }
                const f = c;
                for (const p of s.users) m(p);
                return e.append(l), d && (d.hidden = c === f || 0 === f), c
            }
            async function jo(e, t) {
                const n = e.hasAttribute("data-filterable-highlight"),
                    s = parseInt(e.getAttribute("data-filterable-limit"), 10) || null;
                let o = 0;
                switch (e.getAttribute("data-filterable-type")) {
                    case "fuzzy":
                        o = uo(e, t, {
                            mark: n,
                            limit: s
                        });
                        break;
                    case "substring":
                        o = function(e, t, n = {}) {
                            let s;
                            if (!e) return;
                            const o = t.toLowerCase(),
                                r = null != n.text ? n.text : ho,
                                i = n.limit,
                                a = Array.from(e.children).filter(e => !e.classList.contains("select-menu-no-results"));
                            !0 === n.mark ? s = bo : "function" == typeof n.mark && (s = n.mark);
                            let c = 0;
                            for (const l of a) - 1 !== r(l).indexOf(o) ? null != i && c >= i ? (l.style.display = "none", l.hidden = !0) : (c++, l.style.display = "", l.hidden = !1, s && (s(l), s(l, o))) : (l.style.display = "none", l.hidden = !0);
                            return c
                        }(e, t, {
                            mark: n,
                            limit: s
                        });
                        break;
                    case "substring-memory":
                        o = await wo(e, t, {
                            limit: s
                        });
                        break;
                    default:
                        o = function(e, t, n = {}) {
                            let s;
                            if (!e) return;
                            const o = t.toLowerCase(),
                                r = null != n.text ? n.text : po,
                                i = n.limit;
                            !0 === n.mark ? s = go : "function" == typeof n.mark && (s = n.mark);
                            let a = 0;
                            for (const c of e.children) 0 === r(c).indexOf(o) ? null != i && a >= i ? (c.style.display = "none", c.hidden = !0) : (a++, c.style.display = "", c.hidden = !1, s && (s(c), s(c, o))) : (c.style.display = "none", c.hidden = !0);
                            return a
                        }(e, t, {
                            mark: n,
                            limit: s
                        })
                }! function(e, t = 0) {
                    const n = e.closest("details-menu");
                    if (!n) return;
                    const s = function(e) {
                        let t = e.querySelector("[data-filterable-notice]");
                        return t || ((t = document.createElement("div")).classList.add("sr-only"), t.setAttribute("data-filterable-notice", ""), t.setAttribute("aria-live", "polite"), e.append(t), t)
                    }(n);
                    s.textContent = "", s.textContent = `${t} results found.`
                }(e, o), e.classList.toggle("filterable-active", t.length > 0), e.classList.toggle("filterable-empty", 0 === o)
            }
            r(".js-filterable-field", {
                constructor: HTMLInputElement,
                initialize(e) {
                    e.autocomplete || (e.autocomplete = "off");
                    let t = e.value;
                    async function n(e) {
                        t !== e.value && (t = e.value, await f(), L(e, "filterable:change"))
                    }
                    async function s() {
                        t = e.value, await f(), L(e, "filterable:change")
                    }
                    return {
                        add(e) {
                            e.addEventListener("focus", s), M(e, n), document.activeElement === e && s()
                        },
                        remove(e) {
                            e.removeEventListener("focus", s), A(e, n)
                        }
                    }
                }
            }), u("filterable:change", ".js-filterable-field", async function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/behaviors/filterable.js:88");
                const n = t.value.trim().toLowerCase(),
                    s = document.querySelectorAll(`[data-filterable-for="${t.id}"]`);
                for (const o of s) {
                    await jo(o, n);
                    const e = new CustomEvent("filterable:change", {
                        bubbles: !0,
                        cancelable: !1,
                        detail: {
                            inputField: t
                        }
                    });
                    o.dispatchEvent(e)
                }
            }), u("filterable:change", "details-menu .select-menu-list", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/behaviors/filterable.js:170");
                const t = e.currentTarget,
                    n = t.querySelector(".js-new-item-form");
                n && function(e, t, n) {
                    const s = n.length > 0 && ! function(e, t) {
                        for (const n of e.querySelectorAll("[data-menu-button-text]")) {
                            const e = n.textContent.toLowerCase().trim();
                            if (e === t.toLowerCase()) return !0
                        }
                        return !1
                    }(e, n);
                    if (e.classList.toggle("is-showing-new-item-form", s), !s) return;
                    v(t, ".js-new-item-name").textContent = n;
                    const o = t.querySelector(".js-new-item-value");
                    (o instanceof HTMLInputElement || o instanceof HTMLButtonElement) && (o.value = n)
                }(t, n, e.detail.inputField.value)
            }), r("tab-container .select-menu-list .filterable-empty, details-menu .select-menu-list .filterable-empty", {
                add(e) {
                    d(e, ".select-menu-list").classList.add("filterable-empty")
                },
                remove(e) {
                    d(e, ".select-menu-list").classList.remove("filterable-empty")
                }
            }), u("click", ".js-flash-close", function(e) {
                const t = e.currentTarget.closest(".flash-messages"),
                    n = e.currentTarget.closest(".flash");
                if (!n) throw new Error("invariant: app/assets/modules/github/behaviors/flash.js:19");
                n.remove(), t && !t.querySelector(".flash") && t.remove()
            });
            const yo = new WeakMap;

            function Eo(e) {
                if (!(e instanceof CustomEvent)) return;
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement)) return;
                let n = t.querySelector("[data-filterable-notice]");
                n || ((n = document.createElement("div")).classList.add("sr-only"), n.setAttribute("data-filterable-notice", ""), n.setAttribute("aria-live", "polite"), t.append(n)), n.textContent = "", n.textContent = `${e.detail} results found.`
            }

            function Lo(e, t) {
                const n = e.currentTarget;
                if (n instanceof Element) {
                    for (const e of n.querySelectorAll("[data-show-on-error]")) e instanceof HTMLElement && (e.hidden = !t);
                    for (const e of n.querySelectorAll("[data-hide-on-error]")) e instanceof HTMLElement && (e.hidden = t)
                }
            }

            function To(e) {
                Lo(e, !1)
            }

            function ko(e) {
                Lo(e, !0)
            }
            document.addEventListener("focus", function(e) {
                const t = e.target;
                yo.get(t) || (L(t, "focusin:delay"), yo.set(t, !0))
            }, {
                capture: !0
            }), document.addEventListener("blur", function(e) {
                setTimeout(function() {
                    const t = e.target;
                    t !== document.activeElement && (L(t, "focusout:delay"), yo.delete(e.target))
                }, 200)
            }, {
                capture: !0
            }), r("fuzzy-list", {
                constructor: FuzzyListElement,
                add(e) {
                    e.addEventListener("fuzzy-list-sorted", Eo)
                },
                remove(e) {
                    e.removeEventListener("fuzzy-list-sorted", Eo)
                }
            }), j(".js-immediate-updates", async function(e, t) {
                let n;
                try {
                    n = (await t.json()).json.updateContent
                } catch (s) {
                    s.response.json && (n = s.response.json.updateContent)
                }
                if (n)
                    for (const o in n) {
                        const e = n[o],
                            t = document.querySelector(o);
                        t && D(t, e)
                    }
            }), r("include-fragment, poll-include-fragment", {
                subscribe: e => U(q(e, "error", ko), q(e, "loadstart", To))
            }), u("click", "include-fragment button[data-retry-button]", ({
                currentTarget: e
            }) => {
                const t = d(e, "include-fragment", window.IncludeFragmentElement),
                    n = t.src;
                t.src = "", t.src = n
            }), r("[data-indeterminate]", {
                constructor: HTMLInputElement,
                initialize(e) {
                    e.indeterminate = !0
                }
            }), j(".js-notice-dismiss", async function(e, t) {
                await t.text(), d(e, ".js-notice").remove()
            });
            class PasswordStrengthElement extends HTMLElement {
                connectedCallback() {
                    this.addEventListener("input", Mo)
                }
                disconnectedCallback() {
                    this.removeEventListener("input", Mo)
                }
            }

            function Mo(e) {
                const t = e.currentTarget;
                if (!(t instanceof PasswordStrengthElement)) return;
                const n = e.target;
                if (!(n instanceof HTMLInputElement)) return;
                const s = function(e, t) {
                    const n = {
                        valid: !1,
                        hasMinimumCharacterCount: e.length >= t.minimumCharacterCount,
                        hasMinimumPassphraseLength: e.length >= t.passphraseLength,
                        hasLowerCase: /[a-z]/.test(e),
                        hasNumber: /\d/.test(e)
                    };
                    return n.valid = n.hasMinimumPassphraseLength || n.hasMinimumCharacterCount && n.hasLowerCase && n.hasNumber, n
                }(n.value, {
                    minimumCharacterCount: Number(p(t, "minimum-character-count")),
                    passphraseLength: Number(p(t, "passphrase-length"))
                });
                if (s.valid) {
                    n.setCustomValidity("");
                    const e = t.querySelector("dl.form-group");
                    e && (e.classList.remove("errored"), e.classList.add("successed"))
                } else n.setCustomValidity(p(t, "invalid-message"));
                ! function(e, t) {
                    const n = v(e, "[data-more-than-n-chars]"),
                        s = v(e, "[data-min-chars]"),
                        o = v(e, "[data-number-requirement]"),
                        r = v(e, "[data-letter-requirement]"),
                        i = p(e, "error-class").split(" ").filter(e => e.length > 0),
                        a = p(e, "pass-class").split(" ").filter(e => e.length > 0);
                    for (const c of [n, s, o, r]) c.classList.remove(...i, ...a);
                    if (t.hasMinimumPassphraseLength) n.classList.add(...a);
                    else if (t.valid) s.classList.add(...a), o.classList.add(...a), r.classList.add(...a);
                    else {
                        const e = t.hasMinimumCharacterCount ? a : i,
                            c = t.hasNumber ? a : i,
                            l = t.hasLowerCase ? a : i;
                        n.classList.add(...i), s.classList.add(...e), o.classList.add(...c), r.classList.add(...l)
                    }
                }(t, s)
            }

            function Ao(e) {
                return null == e.getAttribute("data-pjax-preserve-scroll") && 0
            }

            function xo(e) {
                let t = e;
                for (; t;) {
                    const e = t.getAttribute("data-pjax");
                    if (e && "true" !== e) return document.querySelector(e);
                    t = t.parentElement && t.parentElement.closest("[data-pjax]")
                }
                return e.closest("[data-pjax-container]")
            }
            window.customElements.get("password-strength") || (window.PasswordStrengthElement = PasswordStrengthElement, window.customElements.define("password-strength", PasswordStrengthElement)), u("click", ".js-permalink-shortcut", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLAnchorElement)) throw new Error("invariant: app/assets/modules/github/behaviors/permalink.js:13");
                try {
                    H(null, "", t.href + window.location.hash)
                } catch (n) {
                    window.location = t.href + window.location.hash
                }
                e.preventDefault()
            }), u("click", "[data-pjax] a, a[data-pjax]", function(e) {
                if (!(e instanceof MouseEvent)) throw new Error("invariant: app/assets/modules/github/behaviors/pjax.js:54");
                const t = e.currentTarget;
                if (t instanceof HTMLAnchorElement) {
                    if (null != t.getAttribute("data-skip-pjax")) return;
                    if (null != t.getAttribute("data-remote")) return;
                    const n = xo(t);
                    n && W(e, {
                        container: n,
                        scrollTo: Ao(t)
                    })
                }
            }), u("submit", "form[data-pjax]", function(e) {
                if (!(e instanceof Event)) throw new Error("invariant: app/assets/modules/github/behaviors/pjax.js:77");
                const t = e.target,
                    n = xo(t);
                n && z(e, {
                    container: n,
                    scrollTo: Ao(t)
                })
            }), u("change", "select[data-pjax]", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLSelectElement)) throw new Error("invariant: app/assets/modules/github/behaviors/pjax.js:90");
                const n = xo(t);
                n && V({
                    url: t.value,
                    container: n
                })
            }), async function() {
                await K;
                const e = document.querySelector(".js-pjax-loader-bar");
                if (!e) return;
                const t = e.firstElementChild;
                if (!(t instanceof HTMLElement)) return;
                let n = 0,
                    s = null,
                    o = null;

                function r(e) {
                    0 === e && (null == o && (o = getComputedStyle(t).transition), t.style.transition = "none"), n = e, t.style.width = `${n}%`, 0 === e && (t.clientWidth, t.style.transition = o || "")
                }

                function i() {
                    0 === n && (n = 12), r(Math.min(n + 3, 95)), s = setTimeout(i, 500)
                }
                document.addEventListener("pjax:start", function() {
                    r(0), e.classList.add("is-loading"), s = setTimeout(i, 0)
                }), document.addEventListener("pjax:end", function() {
                    s && clearTimeout(s), r(100), e.classList.remove("is-loading")
                })
            }();
            let So = null;
            const Ho = "last_pjax_request",
                Co = "pjax_start",
                qo = "pjax_end";

            function Io(e, t) {
                return e.split("/", 3).join("/") === t.split("/", 3).join("/")
            }
            window.performance.getEntriesByName && (document.addEventListener("pjax:start", function(e) {
                e instanceof CustomEvent && e.detail && e.detail.url && (window.performance.mark(Co), So = e.detail.url)
            }), document.addEventListener("pjax:end", async function() {
                if (await f(), !window.performance.getEntriesByName(Co).length) return;
                window.performance.mark(qo), window.performance.measure(Ho, Co, qo);
                const e = window.performance.getEntriesByName(Ho).pop(),
                    t = e ? e.duration : null;
                t && (So && _({
                    requestUrl: So,
                    pjaxDuration: Math.round(t)
                }), window.performance.clearMarks(Co), window.performance.clearMarks(qo), window.performance.clearMeasures(Ho))
            })), document.addEventListener("pjax:click", function(e) {
                if (window.onbeforeunload) return e.preventDefault()
            }), u("pjax:click", "#js-repo-pjax-container a[href]", function(e) {
                if (!(e.currentTarget instanceof HTMLAnchorElement)) throw new Error("invariant: app/assets/modules/github/behaviors/pjax/exceptions.js:22");
                const t = e.currentTarget.pathname;
                Io(t, location.pathname) ? function(e) {
                    const t = e.split("/")[3];
                    return ["projects", "releases", "tags", "wiki", "community", "security", "packages"].includes(t) && Io(e, location.pathname)
                }(t) && e.preventDefault() : e.preventDefault()
            }), u("pjax:click", ".js-comment-body", function(e) {
                const t = e.target;
                t instanceof HTMLAnchorElement && "files" === t.pathname.split("/")[3] && e.preventDefault()
            });
            const _o = {};

            function $o(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/behaviors/quick-submit.js:13");
                if ((e.ctrlKey || e.metaKey) && "Enter" === e.key) {
                    const n = t.form;
                    if (!(n instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/behaviors/quick-submit.js:17");
                    const s = n.querySelector("input[type=submit], button[type=submit]");
                    if (e.shiftKey) {
                        const e = n.querySelector(".js-quick-submit-alternative");
                        (e instanceof HTMLInputElement || e instanceof HTMLButtonElement) && !e.disabled && E(n, e)
                    } else(s instanceof HTMLInputElement || s instanceof HTMLButtonElement) && s.disabled || E(n);
                    e.preventDefault()
                }
            }

            function Do(e) {
                if (null === e.parentNode || !(e.parentNode instanceof HTMLElement)) throw new Error;
                for (var t = e.parentNode.children, n = 0; n < t.length; ++n)
                    if (t[n] === e) return n;
                return 0
            }(async () => {
                await K, _o[document.location.pathname] = Array.from(document.querySelectorAll("head [data-pjax-transient]"))
            })(), document.addEventListener("pjax:beforeReplace", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/behaviors/pjax/head.js:12");
                const t = e.detail.contents;
                for (let n = 0; n < t.length; n++) {
                    const e = t[n];
                    if (e)
                        if ("pjax-head" === e.id) _o[document.location.pathname] = Array.from(e.children), t[n] = null;
                        else if ("js-flash-container" === e.id) {
                        const s = document.querySelector("#js-flash-container");
                        s && s.replaceWith(e), t[n] = null
                    }
                }
            }), document.addEventListener("pjax:end", function() {
                const e = _o[document.location.pathname];
                if (!e) return;
                const t = document.head;
                if (!t) throw new Error("invariant: app/assets/modules/github/behaviors/pjax/head.js:34");
                for (const n of document.querySelectorAll("head [data-pjax-transient]")) n.remove();
                for (const n of e) n.matches("title, script, link[rel=stylesheet]") ? n.matches("link[rel=stylesheet]") && t.append(n) : (n.setAttribute("data-pjax-transient", ""), t.append(n))
            }), m("keydown", ".js-quick-submit", function(e) {
                $o(e)
            });
            var Ro = 0;

            function Bo(e) {
                return e.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }
            var No = {
                INPUT: function(e) {
                    return e instanceof HTMLInputElement && e.checked ? "[x] " : "[ ] "
                },
                CODE: function(e) {
                    var t = e.textContent;
                    return e.parentNode && "PRE" === e.parentNode.nodeName ? (e.textContent = "```\n".concat(t.replace(/\n+$/, ""), "\n```\n\n"), e) : t.indexOf("`") >= 0 ? "`` ".concat(t, " ``") : "`".concat(t, "`")
                },
                STRONG: function(e) {
                    return "**".concat(e.textContent, "**")
                },
                EM: function(e) {
                    return "_".concat(e.textContent, "_")
                },
                DEL: function(e) {
                    return "~".concat(e.textContent, "~")
                },
                BLOCKQUOTE: function(e) {
                    var t = e.textContent.trim().replace(/^/gm, "> "),
                        n = document.createElement("pre");
                    return n.textContent = "".concat(t, "\n\n"), n
                },
                A: function(e) {
                    var t = e.textContent,
                        n = e.getAttribute("href");
                    return /^https?:/.test(t) && t === n ? t : n ? "[".concat(t, "](").concat(n, ")") : t
                },
                IMG: function(e) {
                    var t = e.getAttribute("alt") || "",
                        n = e.getAttribute("src");
                    if (!n) throw new Error;
                    var s = e.hasAttribute("width") ? ' width="'.concat(Bo(e.getAttribute("width") || ""), '"') : "",
                        o = e.hasAttribute("height") ? ' height="'.concat(Bo(e.getAttribute("height") || ""), '"') : "";
                    return s || o ? '<img alt="'.concat(Bo(t), '"').concat(s).concat(o, ' src="').concat(Bo(n), '">') : "![".concat(t, "](").concat(n, ")")
                },
                LI: function(e) {
                    var t = e.parentNode;
                    if (!t) throw new Error;
                    var n, s, o, r = "";
                    if (s = (n = e).childNodes[0], o = n.childNodes[1], !(s && n.childNodes.length < 3) || ("OL" !== s.nodeName && "UL" !== s.nodeName || o && (o.nodeType !== Node.TEXT_NODE || o.textContent.trim())))
                        if ("OL" === t.nodeName)
                            if (Ro > 0 && !t.previousSibling) {
                                var i = Do(e) + Ro + 1;
                                r = "".concat(i, "\\. ")
                            } else r = "".concat(Do(e) + 1, ". ");
                    else r = "* ";
                    var a = r.replace(/\S/g, " "),
                        c = e.textContent.trim().replace(/^/gm, a),
                        l = document.createElement("pre");
                    return l.textContent = c.replace(a, r), l
                },
                OL: function(e) {
                    var t = document.createElement("li");
                    return t.appendChild(document.createElement("br")), e.append(t), e
                },
                H1: function(e) {
                    var t = parseInt(e.nodeName.slice(1));
                    return e.prepend("".concat(Array(t + 1).join("#"), " ")), e
                },
                UL: function(e) {
                    return e
                }
            };
            No.UL = No.OL;
            for (var Po = 2; Po <= 6; ++Po) No["H".concat(Po)] = No.H1;

            function Fo(e) {
                for (var t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, function(e) {
                        return e.nodeName in No && ! function(e) {
                            return e instanceof HTMLAnchorElement && 1 === e.childNodes.length && e.childNodes[0] instanceof HTMLImageElement && e.childNodes[0].src === e.href
                        }(e) && (function(e) {
                            return "IMG" === e.nodeName || null != e.firstChild
                        }(e) || function(e) {
                            return "INPUT" === e.nodeName && e instanceof HTMLInputElement && "checkbox" === e.type
                        }(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                    }), n = [], s = t.nextNode(); s;) s instanceof HTMLElement && n.push(s), s = t.nextNode();
                n.reverse();
                for (var o = 0; o < n.length; o++)(s = n[o]).replaceWith(No[s.nodeName](s))
            }
            var Oo = new WeakMap,
                Uo = 0,
                Wo = /\bEdge\//.test(navigator.userAgent);

            function zo(e, t) {
                return function(e, t) {
                    var n = 0 === Uo;
                    Uo += Oo.has(e) ? 0 : 1;
                    var s = Object.assign({
                        quoteMarkdown: !1,
                        copyMarkdown: !1,
                        scopeSelector: ""
                    }, t);
                    Oo.set(e, s), n && document.addEventListener("keydown", Xo);
                    s.copyMarkdown && e.addEventListener("copy", Vo)
                }(e, t), {
                    unsubscribe: function() {
                        ! function(e) {
                            var t = Oo.get(e);
                            if (null == t) return;
                            Oo.delete(e), 0 == (Uo -= 1) && document.removeEventListener("keydown", Xo);
                            t.copyMarkdown && e.removeEventListener("copy", Vo)
                        }(e)
                    }
                }
            }

            function Vo(e) {
                var t = e.target;
                if (t instanceof HTMLElement && !Qo(t)) {
                    var n = e.clipboardData;
                    if (n) {
                        var s, o = window.getSelection();
                        try {
                            s = o.getRangeAt(0)
                        } catch (a) {
                            return
                        }
                        var r = o.toString(),
                            i = Go(r, s, !0);
                        i && (n.setData("text/plain", r), n.setData("text/x-gfm", i.selectionText), e.preventDefault(), o.removeAllRanges(), o.addRange(s))
                    }
                }
            }

            function Ko(e) {
                for (var t = e; t = t.parentElement;)
                    if (Oo.has(t)) return t
            }

            function Yo(e) {
                var t, n = !0,
                    s = !1,
                    o = void 0;
                try {
                    for (var r, i = e.querySelectorAll("textarea")[Symbol.iterator](); !(n = (r = i.next()).done); n = !0) {
                        var a = r.value;
                        if (a instanceof HTMLTextAreaElement && !((t = a).offsetWidth <= 0 && t.offsetHeight <= 0)) return a
                    }
                } catch (c) {
                    s = !0, o = c
                } finally {
                    try {
                        n || null == i.return || i.return()
                    } finally {
                        if (s) throw o
                    }
                }
            }

            function Xo(e) {
                if (! function(e) {
                        return e.defaultPrevented || "r" !== e.key || e.metaKey || e.altKey || e.shiftKey || e.ctrlKey || e.target instanceof HTMLElement && Qo(e.target)
                    }(e)) {
                    var t, n = window.getSelection();
                    try {
                        t = n.getRangeAt(0)
                    } catch (s) {
                        return
                    }
                    Jo(n.toString(), t) && e.preventDefault()
                }
            }

            function Jo(e, t) {
                var n = Go(e, t, !1);
                if (!n) return !1;
                var s = n.container,
                    o = n.selectionText;
                if (!s.dispatchEvent(new CustomEvent("quote-selection", {
                        bubbles: !0,
                        cancelable: !0,
                        detail: {
                            range: t,
                            selectionText: o
                        }
                    }))) return !0;
                var r = Yo(s);
                return !!r && (function(e, t) {
                    var n = "> ".concat(e.replace(/\n/g, "\n> "), "\n\n");
                    t.value && (n = "".concat(t.value, "\n\n").concat(n));
                    t.value = n, t.dispatchEvent(new CustomEvent("change", {
                        bubbles: !0,
                        cancelable: !1
                    })), t.focus(), t.selectionStart = t.value.length, t.scrollTop = t.scrollHeight
                }(o, r), !0)
            }

            function Go(e, t, n) {
                var s = e.trim();
                if (s) {
                    var o = t.startContainer;
                    if (o && (o.nodeType !== Node.ELEMENT_NODE && (o = o.parentNode), o instanceof Element)) {
                        var r = Ko(o);
                        if (r) {
                            var i = Oo.get(r);
                            if (i) {
                                if (i.quoteMarkdown && !Wo) try {
                                    var a = function(e, t) {
                                        var n = e.startContainer;
                                        if (!(n && n.parentNode && n.parentNode instanceof HTMLElement)) throw new Error("the range must start within an HTMLElement");
                                        var s = n.parentNode,
                                            o = e.cloneContents();
                                        if (t) {
                                            var r = o.querySelector(t);
                                            r && (o = document.createDocumentFragment()).appendChild(r)
                                        }
                                        Ro = 0;
                                        var i = s.closest("li");
                                        if (s.closest("pre")) {
                                            var a = document.createElement("pre");
                                            a.appendChild(o), (o = document.createDocumentFragment()).appendChild(a)
                                        } else if (i && i.parentNode && ("OL" === i.parentNode.nodeName && (Ro = Do(i)), !o.querySelector("li"))) {
                                            var c = document.createElement("li");
                                            if (!i.parentNode) throw new Error;
                                            var l = document.createElement(i.parentNode.nodeName);
                                            c.appendChild(o), l.appendChild(c), (o = document.createDocumentFragment()).appendChild(l)
                                        }
                                        return o
                                    }(t, i.scopeSelector);
                                    r.dispatchEvent(new CustomEvent("quote-selection-markdown", {
                                        bubbles: !0,
                                        cancelable: !1,
                                        detail: {
                                            fragment: a,
                                            range: t,
                                            unwrap: n
                                        }
                                    })), Fo(a), s = function(e) {
                                        var t = document.body;
                                        if (!t) return "";
                                        var n = document.createElement("div");
                                        n.appendChild(e), n.style.cssText = "position:absolute;left:-9999px;", t.appendChild(n);
                                        var s = "";
                                        try {
                                            var o = window.getSelection(),
                                                r = document.createRange();
                                            r.selectNodeContents(n), o.removeAllRanges(), o.addRange(r), s = o.toString(), o.removeAllRanges(), r.detach()
                                        } finally {
                                            t.removeChild(n)
                                        }
                                        return s
                                    }(a).replace(/^\n+/, "").replace(/\s+$/, "")
                                } catch (c) {
                                    setTimeout(function() {
                                        throw c
                                    })
                                }
                                return {
                                    selectionText: s,
                                    container: r
                                }
                            }
                        }
                    }
                }
            }

            function Qo(e) {
                var t = e.nodeName.toLowerCase(),
                    n = (e.getAttribute("type") || "").toLowerCase();
                return "select" === t || "textarea" === t || "input" === t && "submit" !== n && "reset" !== n || e.isContentEditable
            }

            function Zo(e) {
                return "DIV" === e.nodeName && e.classList.contains("highlight")
            }
            r(".js-quote-selection-container", {
                subscribe: e => zo(e, {
                    quoteMarkdown: e.hasAttribute("data-quote-markdown"),
                    scopeSelector: e.getAttribute("data-quote-markdown") || "",
                    copyMarkdown: !1
                })
            }), document.addEventListener("quote-selection-markdown", function(e) {
                if (!(e instanceof CustomEvent)) return;
                const t = e.detail,
                    {
                        fragment: n,
                        range: s,
                        unwrap: o
                    } = t,
                    r = s.startContainer.parentElement,
                    i = r && r.closest("pre");
                if (i instanceof HTMLElement && !o) {
                    const e = i.parentElement;
                    if (e && Zo(e)) {
                        const t = document.createElement("div");
                        t.className = e.className, t.appendChild(n), n.appendChild(t)
                    }
                }! function(e) {
                    const t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT, function(e) {
                            return e.nodeName in er && function(e) {
                                return "IMG" === e.nodeName || null != e.firstChild
                            }(e) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                        }),
                        n = [];
                    let s = t.nextNode();
                    for (; s;) s instanceof HTMLElement && n.push(s), s = t.nextNode();
                    for (s of (n.reverse(), n)) s.replaceWith(er[s.nodeName](s))
                }(n)
            });
            const er = {
                PRE(e) {
                    const t = e.parentElement;
                    if (t && Zo(t)) {
                        const n = t.className.match(/highlight-source-(\S+)/),
                            s = n ? n[1] : "",
                            o = e.textContent.replace(/\n+$/, "");
                        e.textContent = `\`\`\`${s}\n${o}\n\`\`\``, e.append("\n\n")
                    }
                    return e
                },
                A(e) {
                    const t = e.textContent;
                    return e.classList.contains("user-mention") || e.classList.contains("team-mention") ? t : e.classList.contains("issue-link") && /^#\d+$/.test(t) ? t : e
                },
                IMG(e) {
                    const t = e.getAttribute("alt");
                    return t && e.classList.contains("emoji") ? t : e
                },
                DIV(e) {
                    if (e.classList.contains("js-suggested-changes-blob")) e.remove();
                    else if (e.classList.contains("blob-wrapper-embedded")) {
                        const t = e.parentElement;
                        if (!t) throw new Error;
                        const n = v(t, "a[href]", HTMLAnchorElement),
                            s = document.createElement("p");
                        s.textContent = n.href, t.replaceWith(s)
                    }
                    return e
                }
            };
            let tr, nr;

            function sr(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    var n = [],
                        s = !0,
                        o = !1,
                        r = void 0;
                    try {
                        for (var i, a = e[Symbol.iterator](); !(s = (i = a.next()).done) && (n.push(i.value), !t || n.length !== t); s = !0);
                    } catch (c) {
                        o = !0, r = c
                    } finally {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (o) throw r
                        }
                    }
                    return n
                }(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance")
                }()
            }
            u("click", ".js-comment-quote-reply", function({
                currentTarget: e
            }) {
                const t = d(e, ".js-comment"),
                    n = v(t, ".js-comment-body");
                if (nr && "Range" === nr.type && n.contains(nr.anchorNode)) Jo(nr.text, nr.range);
                else {
                    const e = window.getSelection();
                    e.removeAllRanges(), e.selectAllChildren(n), Jo(e.toString(), e.getRangeAt(0))
                }
            }), document.addEventListener("selectionchange", y(function() {
                const e = window.getSelection();
                let t;
                try {
                    t = e.getRangeAt(0)
                } catch (n) {
                    return void(tr = null)
                }
                tr = {
                    type: e.type,
                    anchorNode: e.anchorNode,
                    text: e.toString(),
                    range: t
                }
            }, 100)), document.addEventListener("toggle", function(e) {
                const t = e.target;
                if (!(t instanceof Element && t.hasAttribute("open"))) return;
                nr = tr;
                const n = t.querySelector(".js-comment-quote-reply.d-none");
                if (!n) return;
                const s = Ko(t);
                s && (s.querySelector(".js-inline-comment-form-container") || Yo(s)) && n.classList.remove("d-none")
            }, {
                capture: !0
            }), r(".has-removed-contents", function() {
                let e;
                return {
                    add(t) {
                        e = Array.from(t.childNodes);
                        for (const s of e) t.removeChild(s);
                        const n = t.closest("form");
                        n && L(n, "change")
                    },
                    remove(t) {
                        for (const s of e) t.appendChild(s);
                        const n = t.closest("form");
                        n && L(n, "change")
                    }
                }
            }), j("form[data-replace-remote-form]", async function(e, t) {
                e.classList.remove("is-error"), e.classList.add("is-loading");
                try {
                    const s = await t.html();
                    (e.closest("[data-replace-remote-form-target]") || e).replaceWith(s.html)
                } catch (n) {
                    e.classList.remove("is-loading"), e.classList.add("is-error")
                }
            });
            var or = null;

            function rr(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.selector,
                    s = void 0 === n ? ".js-session-resumable" : n,
                    o = t.keyPrefix,
                    r = "".concat(void 0 === o ? "session-resume:" : o).concat(e),
                    i = [],
                    a = !0,
                    c = !1,
                    l = void 0;
                try {
                    for (var u, d = document.querySelectorAll(s)[Symbol.iterator](); !(a = (u = d.next()).done); a = !0) {
                        var m = u.value;
                        (m instanceof HTMLInputElement || m instanceof HTMLTextAreaElement) && i.push(m)
                    }
                } catch (p) {
                    c = !0, l = p
                } finally {
                    try {
                        a || null == d.return || d.return()
                    } finally {
                        if (c) throw l
                    }
                }
                var f = i.filter(function(e) {
                    return function(e) {
                        return e.id && e.value !== e.defaultValue && e.form !== or
                    }(e)
                }).map(function(e) {
                    return [e.id, e.value]
                });
                if (f.length) try {
                    sessionStorage.setItem(r, JSON.stringify(f))
                } catch (g) {}
            }

            function ir(e) {
                var t, n = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).keyPrefix,
                    s = "".concat(void 0 === n ? "session-resume:" : n).concat(e);
                try {
                    t = sessionStorage.getItem(s)
                } catch (g) {}
                if (t) {
                    try {
                        sessionStorage.removeItem(s)
                    } catch (g) {}
                    var o = [],
                        r = !0,
                        i = !1,
                        a = void 0;
                    try {
                        for (var c, l = JSON.parse(t)[Symbol.iterator](); !(r = (c = l.next()).done); r = !0) {
                            var u = sr(c.value, 2),
                                d = u[0],
                                m = u[1],
                                f = new CustomEvent("session:resume", {
                                    bubbles: !0,
                                    cancelable: !0,
                                    detail: {
                                        targetId: d,
                                        targetValue: m
                                    }
                                });
                            if (document.dispatchEvent(f)) {
                                var p = document.getElementById(d);
                                p && (p instanceof HTMLInputElement || p instanceof HTMLTextAreaElement) && p.value === p.defaultValue && (p.value = m, o.push(p))
                            }
                        }
                    } catch (h) {
                        i = !0, a = h
                    } finally {
                        try {
                            r || null == l.return || l.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    setTimeout(function() {
                        for (var e = 0, t = o; e < t.length; e++) {
                            t[e].dispatchEvent(new CustomEvent("change", {
                                bubbles: !0,
                                cancelable: !0
                            }))
                        }
                    }, 0)
                }
            }

            function ar(e) {
                const t = e || window.location,
                    n = document.head && document.head.querySelector("meta[name=session-resume-id]");
                return n instanceof HTMLMetaElement && n.content || t.pathname
            }
            window.addEventListener("submit", function(e) {
                or = e.target, setTimeout(function() {
                    e.defaultPrevented && (or = null)
                }, 0)
            }, {
                capture: !0
            }), window.addEventListener("pageshow", function() {
                ir(ar())
            }), window.addEventListener("pjax:end", function() {
                ir(ar())
            }), window.addEventListener("pagehide", function() {
                rr(ar(), {
                    selector: ".js-session-resumable"
                })
            }), window.addEventListener("pjax:beforeReplace", function(e) {
                const t = e.detail.previousState,
                    n = t ? t.url : null;
                if (n) rr(ar(new URL(n, window.location.origin)), {
                    selector: ".js-session-resumable"
                });
                else {
                    const e = new Error("pjax:beforeReplace event.detail.previousState.url is undefined");
                    setTimeout(function() {
                        throw e
                    })
                }
            }), r("textarea.js-size-to-fit", {
                constructor: HTMLTextAreaElement,
                subscribe: function(e) {
                    var t = null,
                        n = !1,
                        s = void 0,
                        o = void 0,
                        r = void 0;

                    function i(t) {
                        if (s !== t.clientX || o !== t.clientY) {
                            var a = e.style.height;
                            r && r !== a && (n = !0, e.style.maxHeight = "", e.removeEventListener("mousemove", i)), r = a
                        }
                        s = t.clientX, o = t.clientY
                    }
                    var a = e.ownerDocument,
                        c = a.documentElement;

                    function l() {
                        if (!(n || e.value === t || e.offsetWidth <= 0 && e.offsetHeight <= 0)) {
                            var s = function() {
                                    for (var t = 0, n = e; n !== a.body && null !== n;) t += n.offsetTop || 0, n = n.offsetParent;
                                    var s = t - a.defaultView.pageYOffset;
                                    return {
                                        top: s,
                                        bottom: c.clientHeight - (s + e.offsetHeight)
                                    }
                                }(),
                                o = s.top,
                                i = s.bottom;
                            if (!(o < 0 || i < 0)) {
                                var l = Number(getComputedStyle(e).height.replace(/px/, "")) + i;
                                e.style.maxHeight = l - 100 + "px";
                                var u = e.parentElement;
                                if (u instanceof HTMLElement) {
                                    var d = u.style.height;
                                    u.style.height = getComputedStyle(u).height, e.style.height = "auto", e.style.height = e.scrollHeight + "px", u.style.height = d, r = e.style.height
                                }
                                t = e.value
                            }
                        }
                    }

                    function u() {
                        n = !1, e.style.height = "", e.style.maxHeight = ""
                    }
                    e.addEventListener("mousemove", i), e.addEventListener("input", l), e.addEventListener("change", l);
                    var d = e.form;
                    return d && d.addEventListener("reset", u), e.value && l(), {
                        unsubscribe: function() {
                            e.removeEventListener("mousemove", i), e.removeEventListener("input", l), e.removeEventListener("change", l), d && d.removeEventListener("reset", u)
                        }
                    }
                }
            }), j(".js-social-form", async function(e, t) {
                const n = await t.json(),
                    s = d(e, ".js-social-container");
                for (const o of s.querySelectorAll(".js-social-count")) o.textContent = n.json.count
            }), u("click", 'tab-container [role="tab"]', function(e) {
                const {
                    currentTarget: t
                } = e, n = d(t, "tab-container").querySelector(".js-filterable-field");
                if (n) {
                    const e = t.getAttribute("data-filter-placeholder");
                    e && n.setAttribute("placeholder", e), n.focus()
                }
            });
            class cr {
                constructor(e) {
                    if (this.container = e.container, this.selections = e.selections, this.inputWrap = e.inputWrap, this.input = e.input, this.tagTemplate = e.tagTemplate, !this.input.form) throw new Error("invariant: app/assets/modules/github/behaviors/tag-input.js:52");
                    this.form = this.input.form, this.autoComplete = e.autoComplete
                }
                setup() {
                    this.container.addEventListener("click", e => {
                        const t = e.target;
                        if (!(t instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/behaviors/tag-input.js:61");
                        t.matches(".js-remove") ? this.removeTag(e) : this.onFocus()
                    }), this.input.addEventListener("focus", this.onFocus.bind(this)), this.input.addEventListener("blur", this.onBlur.bind(this)), this.input.addEventListener("keydown", this.onKeyDown.bind(this)), this.form.addEventListener("submit", this.onSubmit.bind(this)), this.autoComplete.addEventListener("auto-complete-change", () => {
                        this.selectTag(this.autoComplete.value)
                    })
                }
                onFocus() {
                    this.inputWrap.classList.add("focus"), this.input !== document.activeElement && this.input.focus()
                }
                onBlur() {
                    this.inputWrap.classList.remove("focus"), this.autoComplete.open || this.onSubmit()
                }
                onSubmit() {
                    this.input.value && (this.selectTag(this.input.value), this.autoComplete.open = !1)
                }
                onKeyDown(e) {
                    switch (Y(e)) {
                        case "Backspace":
                            this.onBackspace();
                            break;
                        case "Enter":
                        case "Tab":
                            this.taggifyValueWhenSuggesterHidden(e);
                            break;
                        case ",":
                        case " ":
                            this.taggifyValue(e)
                    }
                }
                taggifyValueWhenSuggesterHidden(e) {
                    !this.autoComplete.open && this.input.value && (e.preventDefault(), this.selectTag(this.input.value))
                }
                taggifyValue(e) {
                    this.input.value && (e.preventDefault(), this.selectTag(this.input.value), this.autoComplete.open = !1)
                }
                selectTag(e) {
                    const t = this.normalizeTag(e),
                        n = this.selectedTags();
                    t && n.indexOf(t) < 0 && (this.selections.appendChild(this.templateTag(t)), this.input.value = "", L(this.form, "tags:changed"))
                }
                removeTag(e) {
                    const t = e.target;
                    if (!(t instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/behaviors/tag-input.js:155");
                    e.preventDefault(), d(t, ".js-tag-input-tag").remove(), L(this.form, "tags:changed")
                }
                templateTag(e) {
                    const t = this.tagTemplate.cloneNode(!0);
                    return v(t, "input", HTMLInputElement).value = e, v(t, ".js-placeholder-tag-name").replaceWith(e), t.classList.remove("d-none", "js-template"), t
                }
                normalizeTag(e) {
                    return e.toLowerCase().trim().replace(/[\s,']+/g, "-")
                }
                onBackspace() {
                    if (!this.input.value) {
                        const e = this.selections.querySelector("li:last-child .js-remove");
                        e && e.click()
                    }
                }
                selectedTags() {
                    const e = b(this.selections, "input", HTMLInputElement);
                    return Array.from(e).map(e => e.value).filter(e => e.length > 0)
                }
            }
            async function lr(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/behaviors/team-members.js:8");
                if ((n = t).getAttribute("data-hovercard-url") && n.closest("[data-team-hovercards-enabled]")) return void t.classList.remove("tooltipped");
                var n;
                const s = t.getAttribute("data-url");
                if (!s) return;
                const o = O(s),
                    r = p(t, "data-id"),
                    i = document.querySelectorAll(`.js-team-mention[data-id='${r}']`);
                for (const c of i) c.removeAttribute("data-url");
                try {
                    const e = await o;
                    0 === e.total ? e.members.push("This team has no members") : e.total > e.members.length && e.members.push(`${e.total-e.members.length} more`), ur(i, function(e) {
                        if ("ListFormat" in Intl) {
                            const t = new Intl.ListFormat;
                            return t.format(e)
                        }
                        if (0 === e.length) return "";
                        if (1 === e.length) return e[0];
                        if (2 === e.length) return e.join(" and "); {
                            const t = e[e.length - 1];
                            return e.slice(0, -1).concat(`and ${t}`).join(", ")
                        }
                    }(e.members))
                } catch (a) {
                    const e = a.response ? a.response.status : 500;
                    ur(i, p(t, 404 === e ? "data-permission-text" : "data-error-text"))
                }
            }

            function ur(e, t) {
                for (const n of e) n.setAttribute("aria-label", t), n.classList.add("tooltipped", "tooltipped-s", "tooltipped-multiline")
            }
            r(".js-tag-input-container", {
                constructor: HTMLElement,
                initialize(e) {
                    new cr({
                        container: e,
                        inputWrap: v(e, ".js-tag-input-wrapper"),
                        input: v(e, 'input[type="text"], input:not([type])', HTMLInputElement),
                        selections: v(e, ".js-tag-input-selected-tags"),
                        tagTemplate: v(e, ".js-template"),
                        autoComplete: v(e, "auto-complete", k)
                    }).setup()
                }
            }), r(".js-team-mention", function(e) {
                e.addEventListener("mouseenter", lr)
            });
            let dr = 0;

            function mr(e) {
                return e.classList.remove("js-unread-item", "unread-item")
            }
            X(".js-unread-item", function(e) {
                mr(e)
            }), r(".js-unread-item", {
                add() {
                    dr++
                },
                remove() {
                    0 === --dr && function() {
                        if (!document.hasFocus()) return;
                        const e = document.querySelector(".js-timeline-marker-form");
                        e && e instanceof HTMLFormElement && E(e)
                    }()
                }
            }), u("socket:message", ".js-discussion", function(e) {
                if (e.currentTarget === e.target)
                    for (const t of document.querySelectorAll(".js-unread-item")) mr(t)
            });
            let fr = 0;
            const pr = /^\(\d+\)\s+/;

            function gr() {
                const e = fr ? `(${fr}) ` : "";
                document.title.match(pr) ? document.title = document.title.replace(pr, e) : document.title = `${e}${document.title}`
            }

            function hr() {
                if (document.querySelector(":target")) return;
                const e = J(location.hash).toLowerCase(),
                    t = G(document, `user-content-${e}`);
                t && t.scrollIntoView()
            }

            function br(e) {
                if (!(e.target instanceof Element)) throw new Error("invariant: app/assets/modules/github/behaviors/will-transition-once.js:22");
                e.target.classList.remove("will-transition-once")
            }
            r(".js-unread-item", {
                add() {
                    fr++, gr()
                },
                remove() {
                    fr--, gr()
                }
            }), window.addEventListener("hashchange", hr), document.addEventListener("pjax:success", hr), async function() {
                await K, hr()
            }(), u("click", "a[href]", function(e) {
                const {
                    currentTarget: t
                } = e;
                t instanceof HTMLAnchorElement && t.href === location.href && location.hash.length > 1 && setTimeout(function() {
                    e.defaultPrevented || hr()
                })
            }), r(".will-transition-once", {
                constructor: HTMLElement,
                subscribe: e => q(e, "transitionend", br)
            });
            const vr = new C;
            async function wr(e) {
                const t = e.getAttribute("data-item-name") || "items",
                    n = e.value,
                    s = parseInt(e.getAttribute("data-item-minimum")) || 0,
                    o = parseInt(e.getAttribute("data-item-maximum")) || 300,
                    r = parseInt(e.getAttribute("data-item-count")) || 0,
                    i = Math.max(s, parseInt(n) || 0),
                    a = i > o,
                    c = document.querySelector(".js-downgrade-button");
                c instanceof HTMLButtonElement && (c.disabled = i === r);
                const l = new URL(p(e, "data-url"), window.location.origin),
                    u = new URLSearchParams(l.search.slice(1));
                u.append(t, i.toString()), document.querySelector(".js-transform-user") && u.append("transform_user", "1"), l.search = u.toString();
                const d = await vr.push(O(l)),
                    m = document.querySelector(".js-contact-us");
                m && m.classList.toggle("d-none", !a);
                const f = document.querySelector(".js-payment-summary");
                f && f.classList.toggle("d-none", a);
                const g = document.querySelector(".js-submit-billing");
                g && (g.hidden = a);
                const h = document.querySelector(".js-billing-section");
                h && h.classList.toggle("has-removed-contents", d.free || d.is_enterprise_cloud_trial);
                const v = document.querySelector(".js-upgrade-info");
                v && v.classList.toggle("d-none", i <= 0);
                const w = document.querySelector(".js-downgrade-info");
                w && w.classList.toggle("d-none", i >= 0);
                const j = document.querySelector(".js-extra-seats-line-item");
                j && j.classList.toggle("d-none", d.no_additional_seats), document.querySelector(".js-seat-field") && function(e) {
                    for (const t of b(document, ".js-seat-field", HTMLInputElement)) t.value = e
                }(n);
                const y = document.querySelector(".js-minimum-seats-disclaimer");
                y && (y.classList.toggle("tooltipped", 5 === d.seats), y.classList.toggle("tooltipped-nw", 5 === d.seats));
                const E = d.selectors;
                for (const p in E)
                    for (const e of document.querySelectorAll(p)) e.innerHTML = E[p];
                H(Q(), "", d.url)
            }
            u("click", ".js-org-signup-duration-change", e => {
                if (e.preventDefault(), !(e instanceof MouseEvent)) throw new Error("invariant: app/assets/modules/github/billing/addons.js:14");
                const t = e.currentTarget,
                    n = p(t, "data-plan-duration");
                ! function(e) {
                    const t = "year" === e ? "month" : "year";
                    for (const n of b(document, ".js-plan-duration-text")) n.innerHTML = e;
                    for (const n of b(document, ".unstyled-available-plan-duration-adjective")) n.innerHTML = `${e}ly`;
                    for (const n of b(document, ".js-org-signup-duration-change")) n.setAttribute("data-plan-duration", t)
                }(n),
                function(e) {
                    for (const t of b(document, ".js-seat-field", HTMLInputElement)) {
                        const n = new URL(p(t, "data-url"), window.location.origin),
                            s = new URLSearchParams(n.search.slice(1));
                        s.delete("plan_duration"), s.append("plan_duration", e), n.search = s.toString(), t.setAttribute("data-url", n.toString())
                    }
                }(n);
                for (const s of b(document, ".js-seat-field", HTMLInputElement)) wr(s);
                ! function() {
                    for (const e of b(document, ".js-unit-price")) e.hidden = !e.hidden
                }()
            }), r(".js-addon-purchase-field", {
                constructor: HTMLInputElement,
                add(e) {
                    Z(e) && wr(e), M(e, function() {
                        wr(e)
                    })
                }
            }), r(".js-addon-downgrade-field", {
                constructor: HTMLInputElement,
                add(e) {
                    Z(e) && wr(e), e.addEventListener("change", function() {
                        wr(e)
                    })
                }
            }), u("details-menu-selected", ".js-organization-container", function(e) {
                const t = document.querySelector(".js-addon-purchase-field"),
                    n = e.target.querySelector("input:checked");
                if (t instanceof HTMLInputElement && n instanceof HTMLInputElement) {
                    const e = n.getAttribute("data-upgrade-url");
                    e && (t.setAttribute("data-url", e), t.value = "0", wr(t))
                }
            }, {
                capture: !0
            }), r(".js-repo-health", function(e) {
                const t = d(e, "form", HTMLFormElement),
                    n = v(t, ".js-comment-field", HTMLTextAreaElement),
                    s = v(t, ".js-repo-name", HTMLInputElement);

                function o() {
                    !async function(e, t, n) {
                        const s = v(document, ".js-repo-health-check", HTMLFormElement);
                        v(s, ".js-repo-health-name", HTMLInputElement).value = n, e.classList.remove("d-none"), e.classList.add("is-loading"), t.setCustomValidity("checking"), L(t, "change");
                        const o = await B(document, s.action, {
                                method: "POST",
                                body: new FormData(s)
                            }),
                            r = v(e, ".js-repo-health-results");
                        r.innerHTML = "", r.appendChild(o), e.classList.remove("is-loading"), t.setCustomValidity(""), L(t, "change")
                    }(e, n, s.value)
                }
                "hidden" === s.type ? n.addEventListener("focus", o) : s.addEventListener("change", o)
            }), j(".js-audit-log-export-form", async function(e, t) {
                const n = v(document, ".js-audit-log-exporting"),
                    s = v(document, ".js-audit-log-export-menu");

                function o(e) {
                    s.hidden = e, n.hidden = !e
                }
                let r;
                o(!0);
                try {
                    r = await t.json()
                } catch (a) {
                    return o(!1), void ee()
                }
                const i = r.json;
                try {
                    await te(i.job_url)
                } catch (a) {
                    return o(!1), void ee()
                }
                o(!1), window.location = i.export_url
            });
            const jr = new C;

            function yr(e) {
                const t = document.querySelector(".js-membership-tabs");
                if (t) {
                    const n = e.querySelectorAll(".js-bulk-actions-toggle:checked");
                    t.classList.toggle("d-none", n.length > 0)
                }
            }

            function Er() {
                return v(document, ".js-business-saml-provider-settings-form", HTMLFormElement)
            }

            function Lr() {
                return Er().querySelector(".js-business-saml-form-inputs")
            }

            function Tr(e) {
                e && e.classList.remove("d-none")
            }

            function kr() {
                return "1" === v(document, ".js-business-saml-currently-enabled", HTMLInputElement).value && !v(document, ".js-business-enable-saml", HTMLInputElement).checked
            }

            function Mr() {
                return v(document, ".is-submit-button-value", HTMLInputElement)
            }

            function Ar() {
                Er().submit()
            }

            function xr() {
                const e = document.querySelector(".js-business-enable-saml");
                e && e instanceof HTMLInputElement && (e.checked = !0, Tr(Lr()))
            }

            function Sr() {
                const e = "0" === v(document, ".js-business-two-factor-currently-enabled", HTMLInputElement).value;
                return v(document, ".js-business-enable-two-factor", HTMLInputElement).checked && e
            }
            if (u("change", ".js-bulk-actions-toggle", function(e) {
                    const t = e.currentTarget,
                        n = d(t, ".js-bulk-actions-container");
                    L(n, "bulk-actions:update")
                }), u("bulk-actions:update", ".js-bulk-actions-container", y(async function(e) {
                    const t = e.target,
                        n = v(t, ".js-bulk-actions"),
                        s = !!t.querySelector(".js-bulk-actions-toggle:checked"),
                        o = await jr.push(S(function(e) {
                            const t = new URL(p(e, "data-bulk-actions-url"), window.location.origin),
                                n = new URLSearchParams(t.search.slice(1)),
                                s = e.getAttribute("data-bulk-actions-parameter"),
                                o = b(e, ".js-bulk-actions-toggle:checked", HTMLInputElement);
                            if (s) {
                                const e = o.map(e => p(d(e, ".js-bulk-actions-item"), "data-bulk-actions-id")).sort();
                                for (const t of e) n.append(`${s}[]`, t)
                            } else
                                for (const r of o.sort((e, t) => e.value > t.value ? 1 : -1)) n.append(r.name, r.value);
                            return t.search = n.toString(), t.toString()
                        }(t)));
                    s ? (yr(t), n.innerHTML = o) : (n.innerHTML = o, yr(t)), L(t, "bulk-actions:updated")
                }, 100)), u("click", ".js-preview-sign-in-message", function(e) {
                    const t = v(document, "#custom_messages_sign_in_message", HTMLTextAreaElement).value;
                    v(document, "#sign_in_message", HTMLInputElement).value = t;
                    const n = e.currentTarget;
                    if (!(n instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/businesses.js:11");
                    if (!n.form) throw new Error("invariant: app/assets/modules/github/businesses.js:12");
                    n.form.submit()
                }), u("click", ".js-preview-sign-out-message", function(e) {
                    const t = v(document, "#custom_messages_sign_out_message", HTMLTextAreaElement).value;
                    v(document, "#sign_out_message", HTMLInputElement).value = t;
                    const n = e.currentTarget;
                    if (!(n instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/businesses.js:19");
                    if (!n.form) throw new Error("invariant: app/assets/modules/github/businesses.js:20");
                    n.form.submit()
                }), u("click", ".js-preview-auth-provider-name", function(e) {
                    const t = v(document, "#custom_messages_auth_provider_name", HTMLInputElement).value;
                    v(document, "#auth_provider_name", HTMLInputElement).value = t;
                    const n = e.currentTarget;
                    if (!(n instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/businesses.js:27");
                    if (!n.form) throw new Error("invariant: app/assets/modules/github/businesses.js:28");
                    E(n.form)
                }), u("click", ".js-preview-suspended-message", function(e) {
                    const t = v(document, "#custom_messages_suspended_message", HTMLTextAreaElement).value;
                    v(document, "#suspended_message", HTMLInputElement).value = t;
                    const n = e.currentTarget;
                    if (!(n instanceof HTMLButtonElement && n.form)) throw new Error("invariant: app/assets/modules/github/businesses.js:35");
                    n.form.submit()
                }), u("click", ".js-admin-settings-policy-input", function({
                    currentTarget: e
                }) {
                    if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/businesses.js:41");
                    const t = e.form;
                    if (!(t instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/businesses.js:43");
                    const n = v(t, '[aria-checked="true"]', HTMLButtonElement);
                    E(t, n)
                }), u("click", ".js-business-enable-saml", function(e) {
                    if (!(e.currentTarget instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/businesses.js:116");
                    var t;
                    e.currentTarget.checked ? Tr(Lr()) : (t = Lr()) && t.classList.add("d-none")
                }), u("click", ".js-business-saml-submit", function(e) {
                    e.preventDefault();
                    const t = e.currentTarget;
                    if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/businesses.js:134");
                    E(Er(), t)
                }), u("submit", ".js-business-saml-provider-settings-form", function(e) {
                    e.preventDefault(), "test_settings" === Mr().name ? Ar() : "save_settings" === Mr().name && (kr() ? async function() {
                        (await ne({
                            content: v(document, "#disable-saml-confirmation", HTMLTemplateElement).content.cloneNode(!0)
                        })).addEventListener("dialog:remove", xr)
                    }() : Ar())
                }), u("click", ".js-enable-enable-saml-provider-button", function() {
                    const e = v(document, ".js-enable-saml-provider-button", HTMLButtonElement),
                        t = v(document, ".js-enable-saml-provider-instruction", HTMLElement);
                    e.disabled = !1, t.hidden = !0
                }), u("click", ".js-suggested-org", function(e) {
                    if (!(e.currentTarget instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/businesses.js:179");
                    if ("true" === e.currentTarget.getAttribute("aria-disabled")) return;
                    const t = d(e.currentTarget, "form"),
                        n = v(e.currentTarget, ".js-suggested-org-details-source");
                    v(t, ".js-suggested-org-details-target").innerHTML = n.innerHTML
                }), u("change", ".js-invite-business-org-auto-complete", function(e) {
                    const t = e.currentTarget;
                    if (!(t instanceof k)) throw new Error("invariant: app/assets/modules/github/businesses.js:190");
                    const n = d(t, "form"),
                        s = v(n, ".js-suggested-org-details-target");
                    t.value || (s.innerHTML = "")
                }), u("click", ".js-business-two-factor-submit-button", function(e) {
                    Sr() || e.preventDefault()
                }), u("change", ".js-repo-types-allowed-radio", () => {
                    const e = b(document, ".js-repo-type-creation-checkbox", HTMLInputElement),
                        t = b(document, ".js-repo-type-creation-label", HTMLElement);
                    for (const n of e) n.disabled = !1;
                    for (const n of t) n.classList.remove("text-gray-light")
                }), u("change", ".js-repo-types-disallowed-radio", () => {
                    const e = b(document, ".js-repo-type-creation-checkbox", HTMLInputElement),
                        t = b(document, ".js-repo-type-creation-label", HTMLElement);
                    for (const n of e) n.disabled = !0, n.checked = !1;
                    for (const n of t) n.classList.add("text-gray-light")
                }), top !== window) {
                alert("For security reasons, framing is not allowed.");
                try {
                    top.location.replace(document.location.href)
                } catch (Ah) {}
            }
            const Hr = /\bChrome\//.test(navigator.userAgent) && !/\bEdge\//.test(navigator.userAgent),
                Cr = /Macintosh.*Safari/.test(navigator.userAgent);
            let qr, Ir = !1;

            function _r() {
                qr = document.activeElement, document.body && (Hr || Cr) && document.body.classList.toggle("intent-mouse", Ir)
            }

            function $r(e) {
                return e.hasAttribute("data-maxlength") ? parseInt(e.getAttribute("data-maxlength") || "") : e.maxLength
            }

            function Dr(e) {
                const t = $r(e);
                ! function(e, t, n) {
                    const s = n.closest(".js-characters-remaining-container");
                    if (!s) return;
                    const o = v(s, ".js-characters-remaining"),
                        r = String(o.getAttribute("data-suffix")),
                        i = t - se(e);
                    i <= 20 ? (o.textContent = `${i} ${r}`, o.classList.toggle("text-red", i <= 5), o.hidden = !1) : o.hidden = !0
                }(e.value, t, e)
            }

            function Rr(e) {
                const t = e.querySelectorAll(".js-characters-remaining-container");
                for (const n of t) {
                    Dr(v(n, ".js-characters-remaining-field", HTMLInputElement))
                }
            }
            document.addEventListener("mousedown", function() {
                Ir = !0, qr === document.activeElement && _r()
            }, {
                capture: !0
            }), document.addEventListener("keydown", function() {
                Ir = !1
            }, {
                capture: !0
            }), document.addEventListener("focusin", _r, {
                capture: !0
            }), h(".js-characters-remaining-field", function(e) {
                function t() {
                    (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) && Dr(e)
                }
                t(), e.addEventListener("input", t), e.addEventListener("blur", () => {
                    e.removeEventListener("input", t)
                }, {
                    once: !0
                })
            });
            const Br = {}.hasOwnProperty,
                Nr = {
                    host: "collector.githubapp.com",
                    type: "page_view",
                    dimensions: {},
                    measures: {},
                    context: {},
                    actor: {},
                    image: new Image,
                    performance: {},
                    expectedPerformanceTimingKeys: ["connectEnd", "connectStart", "domComplete", "domContentLoadedEventEnd", "domContentLoadedEventStart", "domInteractive", "domLoading", "domainLookupEnd", "domainLookupStart", "fetchStart", "loadEventEnd", "loadEventStart", "navigationStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "unloadEventEnd", "unloadEventStart"],
                    recordPageView() {
                        return this.applyMetaTags(), null != this.app && (null == this.host ? (console && console.warn && console.warn("Host not set, you are doing something wrong"), !1) : (this.image.src = this._src(), this._clearPerformance(), !0))
                    },
                    setHost(e) {
                        this.host = e
                    },
                    setApp(e) {
                        this.app = e
                    },
                    setDimensions(e) {
                        this.dimensions = e
                    },
                    addDimensions(e) {
                        let t;
                        null == this.dimensions && (this.dimensions = {});
                        const n = [];
                        for (t in e) {
                            if (!Br.call(e, t)) continue;
                            const s = e[t];
                            n.push(this.dimensions[t] = s)
                        }
                        return n
                    },
                    setMeasures(e) {
                        this.measures = e
                    },
                    addMeasures(e) {
                        let t;
                        null == this.measures && (this.measures = {});
                        const n = [];
                        for (t in e) {
                            if (!Br.call(e, t)) continue;
                            const s = e[t];
                            n.push(this.measures[t] = s)
                        }
                        return n
                    },
                    setContext(e) {
                        this.context = e
                    },
                    addContext(e) {
                        let t;
                        null == this.context && (this.context = {});
                        const n = [];
                        for (t in e) {
                            if (!Br.call(e, t)) continue;
                            const s = e[t];
                            n.push(this.context[t] = s)
                        }
                        return n
                    },
                    setActor(e) {
                        this.actor = e
                    },
                    push(e) {
                        return this.applyCall(e)
                    },
                    enablePerformance() {
                        this.performance = this._performanceTiming()
                    },
                    _recordSrc(e, t, n, s) {
                        return `//${this.host}/${this.app}/${e}?${this._queryString(t,n,s)}`
                    },
                    _src() {
                        return `//${this.host}/${this.app}/${this.type}?${this._queryString()}`
                    },
                    _queryString(e, t, n) {
                        let s, o;
                        const r = this._params(),
                            i = [];
                        for (s in r) o = r[s], i.push(`dimensions[${s}]=${o}`);
                        return i.push(this._encodeObject("dimensions", Object.assign({}, this.dimensions, e))), i.push(this._encodeObject("measures", Object.assign({}, this.measures, t))), null != this.performance && i.push(this._encodeObject("measures", {
                            performance_timing: String(this.performance)
                        })), i.push(this._encodeObject("context", Object.assign({}, this.context, n))), i.push(this._actor()), i.push(this._encodeObject("dimensions", {
                            cid: this._clientId()
                        })), i.join("&")
                    },
                    _clearPerformance() {
                        this.performance = null
                    },
                    _performanceTiming() {
                        if (null == window.performance || null == window.performance.timing || null == window.performance.timing.navigationStart) return null;
                        const e = this.expectedPerformanceTimingKeys.reduce((e, t) => {
                                const n = window.performance.timing[t];
                                return e[t] = "number" == typeof n ? n : 0, e
                            }, {}),
                            t = [],
                            n = e.navigationStart;
                        for (const s in e) {
                            const o = e[s],
                                r = 0 === o ? null : o - n;
                            t.push(r)
                        }
                        return `1-${t.join("-")}`
                    },
                    _params() {
                        return {
                            page: this._encode(this._page()),
                            title: this._encode(this._title()),
                            referrer: this._encode(this._referrer()),
                            user_agent: this._encode(this._agent()),
                            screen_resolution: this._encode(this._screenResolution()),
                            pixel_ratio: this._encode(this._pixelRatio()),
                            browser_resolution: this._encode(this._browserResolution()),
                            tz_seconds: this._encode(this._tzSeconds()),
                            timestamp: (new Date).getTime()
                        }
                    },
                    _page() {
                        try {
                            const t = document.querySelector("meta[name=octolytics-location]");
                            return t instanceof HTMLMetaElement ? document.location.origin + t.content : document.location.href
                        } catch (e) {}
                    },
                    _title() {
                        try {
                            return document.title
                        } catch (e) {}
                    },
                    _referrer() {
                        let e = "";
                        try {
                            e = window.top.document.referrer
                        } catch (t) {
                            if (window.parent) try {
                                e = window.parent.document.referrer
                            } catch (t) {}
                        }
                        return "" === e && (e = document.referrer), e
                    },
                    _agent() {
                        try {
                            return navigator.userAgent
                        } catch (e) {}
                    },
                    _screenResolution() {
                        try {
                            return `${screen.width}x${screen.height}`
                        } catch (e) {
                            return "unknown"
                        }
                    },
                    _pixelRatio: () => window.devicePixelRatio,
                    _browserResolution() {
                        let e = 0,
                            t = 0;
                        try {
                            return "number" == typeof window.innerWidth ? (t = window.innerWidth, e = window.innerHeight) : null != document.documentElement && null != document.documentElement.clientWidth ? (t = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : null != document.body && null != document.body.clientWidth && (t = document.body.clientWidth, e = document.body.clientHeight), `${t}x${e}`
                        } catch (n) {
                            return "unknown"
                        }
                    },
                    _tzSeconds() {
                        try {
                            return -60 * (new Date).getTimezoneOffset()
                        } catch (e) {
                            return ""
                        }
                    },
                    _encodeObject(e, t) {
                        const n = [];
                        if (Array.isArray(t))
                            for (const s of t) n.push(this._encodeObject(`${e}[]`, s));
                        else if ("object" == typeof t)
                            for (const s in t) n.push(this._encodeObject(`${e}[${s}]`, t[s]));
                        else n.push(`${e}=${this._encode(t)}`);
                        return n.join("&")
                    },
                    _actor() {
                        let e, t, n;
                        const s = [],
                            o = this.actor;
                        for (t in o) {
                            const r = o[t],
                                i = `dimensions[actor_${t}]`;
                            if (Array.isArray(r))
                                for (e = 0, n = r.length; e < n; e++) {
                                    const t = r[e];
                                    s.push(`${i}[]=${this._encode(t)}`)
                                } else s.push(`${i}=${this._encode(r)}`)
                        }
                        return s.join("&")
                    },
                    _getCookie(e) {
                        let t, n;
                        const s = [],
                            o = document.cookie.split(";");
                        for (t = 0, n = o.length; t < n; t++) {
                            const n = o[t].trim().split("=");
                            if (n.length < 2) continue;
                            const r = n[0],
                                i = n[1];
                            r === e && s.push({
                                key: r,
                                value: i
                            })
                        }
                        return s
                    },
                    _clientId() {
                        let e;
                        return "" === (e = this._getClientId()) && (e = this._setClientId()), e
                    },
                    _getClientId() {
                        let e, t, n = "";
                        const s = this._getCookie("_octo"),
                            o = [];
                        for (e = 0, t = s.length; e < t; e++) {
                            const t = s[e].value.split(".");
                            if ("GH1" === t.shift() && t.length > 1) {
                                const e = (t.shift() || "").split("-");
                                1 === e.length && (e[1] = "1"), e[0] = Number(e[0]), e[1] = Number(e[1]), n = t.join("."), o.push([e, n])
                            }
                        }
                        return n = "", o.length > 0 && (n = String(o.sort().reverse()[0][1])), n
                    },
                    _setClientId() {
                        const e = (new Date).getTime(),
                            t = `${Math.round(Math.random()*(Math.pow(2,31)-1))}.${Math.round(e/1e3)}`,
                            n = `GH1.1.${t}`,
                            s = new Date(e + 63072e6).toUTCString(),
                            o = document.domain;
                        if (null == o) throw new Error("Unable to get document domain");
                        const r = `.${o.split(".").reverse().slice(0,2).reverse().join(".")}`;
                        return document.cookie = `_octo=${n}; expires=${s}; path=/; domain=${r}`, t
                    },
                    _encode: e => null != e ? window.encodeURIComponent(e) : "",
                    applyQueuedCalls(e) {
                        const t = [];
                        for (const n of e) t.push(this.applyCall(n));
                        return t
                    },
                    applyCall(e) {
                        const t = e[0],
                            n = e.slice(1);
                        return "function" == typeof this[t] ? this[t](...n) : console && console.warn && console.warn(`${t} is not a valid method`)
                    },
                    applyMetaTags() {
                        const e = this.loadMetaTags();
                        return e.host && this.setHost(e.host), e.app && this.setApp(e.app), this._objectIsEmpty(e.actor) || this.setActor(e.actor), this.addDimensions(e.dimensions), this.addMeasures(e.measures), this.addContext(e.context)
                    },
                    loadMetaTags() {
                        let e, t;
                        const n = {
                                dimensions: {},
                                measures: {},
                                context: {},
                                actor: {}
                            },
                            s = document.getElementsByTagName("meta");
                        for (e = 0, t = s.length; e < t; e++) {
                            const t = s[e];
                            if (t.name && t.content) {
                                const e = t.name.match(this.octolyticsMetaTagName);
                                if (e) switch (e[1]) {
                                    case "host":
                                        n.host = t.content;
                                        break;
                                    case "app-id":
                                    case "app":
                                        n.app = t.content;
                                        break;
                                    case "dimension":
                                        this._addField(n.dimensions, e[2], t);
                                        break;
                                    case "measure":
                                        this._addField(n.measures, e[2], t);
                                        break;
                                    case "context":
                                        this._addField(n.context, e[2], t);
                                        break;
                                    case "actor":
                                        this._addField(n.actor, e[2], t)
                                }
                            }
                        }
                        return n
                    },
                    _addField(e, t, n) {
                        if (n.getAttribute("data-array")) {
                            null == e[t] && (e[t] = []);
                            const s = e[t];
                            Array.isArray(s) && s.push(n.content)
                        } else e[t] = n.content
                    },
                    _objectIsEmpty(e) {
                        let t;
                        for (t in e)
                            if (Br.call(e, t)) return !1;
                        return !0
                    },
                    octolyticsMetaTagName: /^octolytics-(host|app-id|app|dimension|measure|context|actor)-?(.*)/
                };
            if (window._octo) {
                if (window._octo.slice) {
                    const e = window._octo.slice(0);
                    window._octo = Nr, window._octo.applyQueuedCalls(e)
                }
            } else window._octo = Nr;

            function Pr(e) {
                const t = p(e, "data-fieldname");
                return document.querySelectorAll(`span[data-fieldname="${t}"]`)
            }

            function Fr(e, t) {
                if (e.value)
                    for (const n of t) n.textContent = e.value
            }

            function Or(e, t) {
                return e.length < t.length ? -1 : e.length > t.length ? 1 : e.localeCompare(t)
            }

            function Ur(e, t) {
                const n = e.getBoundingClientRect();
                return (t.getBoundingClientRect().width - n.width) / 2
            }

            function Wr(e, t) {
                const n = e.querySelector("svg");
                if (!n) return;
                const s = n.querySelector(".js-highlight-blob"),
                    o = Math.floor(e.clientWidth),
                    r = Math.max(o, 250),
                    i = r,
                    a = n.querySelector(".js-highlight-label-top"),
                    c = n.querySelector(".js-highlight-label-bottom"),
                    l = n.querySelector(".js-highlight-label-right"),
                    u = n.querySelector(".js-highlight-label-left"),
                    d = n.querySelector(".js-highlight-percent-top"),
                    m = n.querySelector(".js-highlight-percent-bottom"),
                    f = n.querySelector(".js-highlight-percent-right"),
                    p = n.querySelector(".js-highlight-percent-left"),
                    g = n.querySelector(".js-highlight-x-axis"),
                    h = n.querySelector(".js-highlight-y-axis"),
                    b = n.querySelector(".js-highlight-top-ellipse"),
                    v = n.querySelector(".js-highlight-right-ellipse"),
                    w = n.querySelector(".js-highlight-bottom-ellipse"),
                    j = n.querySelector(".js-highlight-left-ellipse"),
                    y = e.querySelector(".js-activity-overview-graph-spinner"),
                    E = n.querySelector("g");
                if (!E) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:69");
                if (!s) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:70");
                if (!a) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:71");
                if (!c) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:72");
                if (!l) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:73");
                if (!u) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:74");
                if (!d) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:75");
                if (!m) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:76");
                if (!f) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:77");
                if (!p) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:78");
                if (!g) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:79");
                if (!h) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:80");
                if (!b) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:81");
                if (!v) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:82");
                if (!w) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:83");
                if (!j) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:84");
                if (!y) throw new Error("invariant: app/assets/modules/github/contributions-spider-graph.js:85");
                E.removeAttribute("transform"), n.classList.remove("d-none"), n.classList.add("d-block"), y.classList.remove("d-block"), y.classList.add("d-none"), a.innerHTML = "", l.innerHTML = "", c.innerHTML = "", u.innerHTML = "", d.innerHTML = "&nbsp;", f.innerHTML = "&nbsp;", m.innerHTML = "&nbsp;", p.innerHTML = "&nbsp;";
                const L = Object.keys(t.percentages).sort(Or),
                    [T, k] = L.slice(0, 2).sort(),
                    [M, A] = L.slice(2, 4).sort(),
                    x = t.percentages[M],
                    S = t.percentages[k],
                    H = t.percentages[A],
                    C = t.percentages[T];
                let q = null;
                const I = (e, n) => {
                        const s = t.percentages[e];
                        if (s > 0) return q = n, `${s}%`
                    },
                    _ = I(M, d);
                _ && (d.textContent = _);
                const $ = I(k, f);
                $ && (f.textContent = $);
                const D = I(A, m);
                D && (m.textContent = D);
                const R = I(T, p);
                R && (p.textContent = R);
                const B = r / 2,
                    N = r / 2;
                a.appendChild(document.createTextNode(M)), a.setAttribute("dx", B.toString()), c.appendChild(document.createTextNode(A)), c.setAttribute("dx", N.toString()), d.setAttribute("dx", B.toString()), m.setAttribute("dx", N.toString());
                const P = a.getBoundingClientRect().height;
                let F = 0;
                q && (F = q.getBoundingClientRect().height);
                let O = i / 2 + P / 4,
                    U = i / 2 + P / 4;
                C > 0 && (O = O + F / 2 + 2.5), S > 0 && (U = U + F / 2 + 2.5), u.appendChild(document.createTextNode(T)), u.setAttribute("dy", O.toString()), l.appendChild(document.createTextNode(k)), l.setAttribute("dy", U.toString());
                const W = O - P,
                    z = U - P;
                p.setAttribute("dy", W.toString()), f.setAttribute("dy", z.toString());
                let V = x / 100,
                    K = H / 100,
                    Y = C / 100,
                    X = S / 100;
                const J = Math.max(V, K, Y, X),
                    G = e => {
                        return 1 * e / J + 0
                    };
                V = G(V), K = G(K), Y = G(Y), X = G(X);
                const Q = function(e) {
                        let t = 0;
                        for (const n of e) {
                            const e = n.getBoundingClientRect();
                            e.width > t && (t = e.width)
                        }
                        return t
                    }([u, l, a, c]) + 10,
                    Z = Math.max(Q, P),
                    ee = r / 2,
                    te = i / 2,
                    ne = ee,
                    se = Z,
                    oe = ee,
                    re = i - Z,
                    ie = Z,
                    ae = te,
                    ce = r - Z,
                    le = te,
                    ue = ee - ie,
                    de = te - se;
                let me = se + (1 - V) * de,
                    fe = Math.max(re - (1 - K) * de, te),
                    pe = ie + (1 - Y) * ue,
                    ge = ce - (1 - X) * ue;
                g.setAttribute("x1", ie.toString()), g.setAttribute("y1", te.toString()), g.setAttribute("x2", ce.toString()), g.setAttribute("y2", te.toString()), h.setAttribute("x1", ee.toString()), h.setAttribute("y1", se.toString()), h.setAttribute("x2", ee.toString()), h.setAttribute("y2", re.toString()), me + 4 < te && (me += 4), fe - 4 > te && (fe -= 4), pe + 4 < ee && (pe += 4), ge - 4 > ee && (ge -= 4);
                const he = se - 10,
                    be = ce + 10;
                let ve = re + 10 + 8;
                H > 0 && (ve += F);
                const we = ie - 12;
                a.setAttribute("dy", he.toString()), l.setAttribute("dx", be.toString()), c.setAttribute("dy", ve.toString()), u.setAttribute("dx", we.toString());
                const je = we - Ur(p, u),
                    ye = be + Ur(f, l);
                p.setAttribute("dx", je.toString()), f.setAttribute("dx", ye.toString());
                const Ee = he - P,
                    Le = ve - P;
                d.setAttribute("dy", Ee.toString()), m.setAttribute("dy", Le.toString());
                0 === x ? b.classList.add("d-none") : (b.setAttribute("cx", ne.toString()), b.setAttribute("cy", (me - 2).toString())), 0 === S ? v.classList.add("d-none") : (v.setAttribute("cx", (ge + 2).toString()), v.setAttribute("cy", le.toString())), 0 === H ? w.classList.add("d-none") : (w.setAttribute("cx", oe.toString()), w.setAttribute("cy", (fe + 2).toString())), 0 === C ? j.classList.add("d-none") : (j.setAttribute("cx", (pe - 2).toString()), j.setAttribute("cy", ae.toString()));
                const Te = E.getBoundingClientRect(),
                    ke = n.getBoundingClientRect(),
                    Me = 0 - (Te.top - ke.top),
                    Ae = 0 - (Te.left - ke.left);
                E.setAttribute("transform", `translate(${Ae}, ${Me})`);
                const xe = Math.ceil(Te.width),
                    Se = Math.ceil(Te.height);
                n.setAttribute("width", xe.toString()), n.setAttribute("height", Se.toString());
                const He = `M${ne},${me} ${[[ge,le],[oe,fe],[pe,ae]].map(e=>`L${e[0]},${e[1]}`).join(" ")} z`;
                x + S + H + C !== 0 && s.setAttribute("d", He)
            }
            document.addEventListener("keydown", e => {
                if ("Escape" !== e.key) return;
                if (e.target !== document.body) return;
                const t = document.querySelector(".js-targetable-comment:target");
                t && oe(t, () => {
                    window.location.hash = "", window.history.replaceState(null, null, window.location.pathname + window.location.search)
                })
            }), document.addEventListener("click", e => {
                const t = document.querySelector(".js-targetable-comment:target");
                t && (e.target instanceof HTMLAnchorElement || e.target instanceof HTMLElement && (t.contains(e.target) || oe(t, () => {
                    window.location.hash = "", window.history.replaceState(null, null, window.location.pathname + window.location.search)
                })))
            }), h(".js-template-form-input", function(e) {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/community.js:26");
                const t = Pr(e);

                function n() {
                    Fr(e, t)
                }

                function s(e) {
                    for (const n of t) n.classList.toggle("CommunityTemplate-highlight--focus", e)
                }
                s(!0), e.addEventListener("input", n), e.addEventListener("blur", function t() {
                    s(!1), e.removeEventListener("input", n), e.removeEventListener("blur", t)
                })
            }), u("click", ".js-template-highlight", function(e) {
                (function(e) {
                    const t = p(e, "data-fieldname");
                    return v(document, `input[data-fieldname="${t}"]`, HTMLInputElement)
                })(e.currentTarget).focus()
            }), r(".js-templates", function() {
                for (const e of b(document, ".js-template-form-input", HTMLInputElement)) {
                    Fr(e, Pr(e))
                }
            }), r(".js-activity-overview-graph-container", function(e) {
                const t = p(e, "data-percentages"),
                    n = {
                        percentages: JSON.parse(t)
                    };
                if (Wr(e, n), "true" === e.getAttribute("data-responsive-graph")) {
                    const t = re(Wr.bind(null, e, n), 100);
                    return {
                        add() {
                            window.addEventListener("resize", t)
                        },
                        remove() {
                            window.removeEventListener("resize", t)
                        }
                    }
                }
            }), u("submit", "form.js-post-recovery-token", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/delegated-account-recovery.js:38");
                e.preventDefault(), async function(e) {
                    const t = v(document, ".js-delegated-account-recovery-submit", HTMLButtonElement),
                        n = v(document, ".js-create-recovery-token-form", HTMLFormElement);
                    e.classList.remove("failed"), e.classList.add("loading"), t.disabled = !0;
                    try {
                        const o = await ie(n),
                            r = await o.json();
                        ae(e, {
                            token: r.token,
                            state: r.state_url
                        }), e.submit()
                    } catch (s) {
                        e.classList.remove("loading"), e.classList.add("failed"), t.disabled = !1
                    }
                }(t)
            }), r("form.js-recovery-provider-auto-redirect", {
                constructor: HTMLFormElement,
                initialize: function(e) {
                    e.submit()
                }
            }), u("click", ".js-sub-dependencies", async function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/dependencies.js:8");
                const t = e,
                    n = t.getAttribute("data-loaded"),
                    s = t.querySelector(".js-expanded"),
                    o = t.querySelector(".js-collapsed"),
                    r = t.closest(".js-details-container");
                if (s && s.classList.toggle("d-none"), o && o.classList.toggle("d-none"), r && r.classList.toggle("bg-gray-light"), !n) {
                    t.setAttribute("data-loaded", "true");
                    const e = p(t, "data-sub-dependency-url"),
                        n = t.closest(".js-dependency"),
                        s = await B(document, e);
                    n && n.after(s)
                }
            });
            let zr = null;

            function Vr({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/details-element.js:24");
                e.hasAttribute("open") ? (zr && zr !== e && zr.removeAttribute("open"), zr = e) : e === zr && (zr = null)
            }

            function Kr({
                currentTarget: e
            }) {
                if (!(e instanceof Element)) return;
                const t = d(e, "details"),
                    n = p(t, "data-deferred-details-content-url");
                t.removeAttribute("data-deferred-details-content-url"), v(t, "include-fragment", l).src = n
            }
            async function Yr(e) {
                const t = e.getAttribute("data-url");
                if (await async function(e) {
                        const t = e;
                        if (!t) return !1;
                        try {
                            const e = await O(t);
                            return e.has_gravatar
                        } catch (n) {
                            return !1
                        }
                    }(t)) {
                    const t = e.getAttribute("data-gravatar-text");
                    null != t && (e.textContent = t)
                }
            }
            document.addEventListener("keydown", function(e) {
                !e.defaultPrevented && "Escape" === e.key && zr && zr.removeAttribute("open")
            }), r(".js-dropdown-details", {
                subscribe: e => q(e, "toggle", Vr)
            }), r("[data-deferred-details-content-url]:not([data-details-no-preload-on-hover])", {
                subscribe: e => {
                    const t = v(e, "summary");
                    return q(t, "mouseenter", Kr)
                }
            }), r("[data-deferred-details-content-url]", {
                subscribe: e => q(e, "toggle", Kr)
            }), u("click", "[data-toggle-for]", function(e) {
                const t = e.currentTarget.getAttribute("data-toggle-for") || "",
                    n = document.getElementById(t);
                n && (n.hasAttribute("open") ? n.removeAttribute("open") : n.setAttribute("open", "open"))
            }), r(".js-license-menu", e => {
                const t = v(e, "fuzzy-list input", HTMLInputElement);
                e.addEventListener("toggle", function() {
                    e.hasAttribute("open") || (t.value = "", L(t, "input"))
                })
            }), ce(function({
                target: e
            }) {
                if (!e || e.closest("summary")) return;
                let t = e.parentElement;
                for (; t;)(t = t.closest("details")) && (t.hasAttribute("open") || t.setAttribute("open", ""), t = t.parentElement)
            }), u("click", ".js-anon-download-zip-link", function(e) {
                const t = e.currentTarget,
                    n = d(t, ".js-get-repo-modal"),
                    s = v(n, ".js-modal-downloading");
                n.classList.add("is-downloading"), s.hidden = !1
            }), u("toggle", ".js-anon-get-repo-select-menu", function(e) {
                const t = e.target;
                v(t, ".js-modal-downloading").hidden = t.hasAttribute("open")
            }, {
                capture: !0
            }), r(".js-detect-gravatar", function(e) {
                Yr(e)
            });
            let Xr = !1;
            const Jr = [];

            function Gr() {
                Jr.length ? Xr || (window.addEventListener("resize", Qr, {
                    passive: !0
                }), document.addEventListener("scroll", Qr, {
                    passive: !0
                }), Xr = !0) : (window.removeEventListener("resize", Qr, {
                    passive: !0
                }), document.removeEventListener("scroll", Qr, {
                    passive: !0
                }), Xr = !1)
            }

            function Qr() {
                for (const e of Jr)
                    if (e.element.offsetHeight > 0) {
                        const {
                            element: t,
                            placeholder: n,
                            top: s
                        } = e, o = t.getBoundingClientRect();
                        if (n) {
                            const r = n.getBoundingClientRect();
                            t.classList.contains("is-stuck") ? r.top > parseInt(s) ? ei(e) : ti(e) : o.top <= parseInt(s) && Zr(e)
                        } else o.top <= parseInt(s) ? Zr(e) : ei(e)
                    }
            }

            function Zr({
                element: e,
                placeholder: t,
                top: n
            }) {
                if (t) {
                    const s = e.getBoundingClientRect();
                    e.style.top = n.toString(), e.style.left = `${s.left}px`, e.style.width = `${s.width}px`, e.style.marginTop = "0", e.style.position = "fixed", t.style.display = "block"
                }
                e.classList.add("is-stuck")
            }

            function ei({
                element: e,
                placeholder: t
            }) {
                t && (e.style.position = "static", e.style.marginTop = t.style.marginTop, t.style.display = "none"), e.classList.remove("is-stuck")
            }

            function ti({
                element: e,
                placeholder: t,
                offsetParent: n,
                top: s
            }) {
                if (t) {
                    const o = e.getBoundingClientRect(),
                        r = t.getBoundingClientRect();
                    if (e.style.left = `${r.left}px`, e.style.width = `${r.width}px`, n) {
                        const t = n.getBoundingClientRect();
                        t.bottom < o.height + parseInt(s) && (e.style.top = `${t.bottom-o.height}px`)
                    }
                }
            }

            function ni(e) {
                if (function(e) {
                        const {
                            position: t
                        } = window.getComputedStyle(e);
                        return /sticky/.test(t)
                    }(e)) return null;
                const t = e.previousElementSibling;
                if (t && t.classList.contains("is-placeholder")) {
                    if (!(t instanceof HTMLElement)) throw new Error("invariant: previousElement must be an HTMLElement -- app/assets/modules/github/sticky.js:147");
                    return t
                }
                const n = document.createElement("div");
                if (n.style.visibility = "hidden", n.style.display = "none", n.style.height = window.getComputedStyle(e).height, n.className = e.className, n.classList.remove("js-sticky"), n.classList.add("is-placeholder"), !e.parentNode) throw new Error("invariant: Element must be inserted into the dom -- app/assets/modules/github/sticky.js:158");
                return e.parentNode.insertBefore(n, e)
            }

            function si(e) {
                const t = e.ownerDocument;
                e.scrollIntoView(), t.defaultView.scrollBy(0, -oi(t))
            }

            function oi(e) {
                Qr();
                const t = e.querySelectorAll(".js-sticky-offset-scroll"),
                    n = e.querySelectorAll(".js-position-sticky");
                return Math.max(0, ...Array.from(t).map(e => {
                    const {
                        top: t,
                        height: n
                    } = e.getBoundingClientRect();
                    return 0 === t ? n : 0
                })) + Math.max(0, ...Array.from(n).map(e => {
                    const {
                        top: t,
                        height: n
                    } = e.getBoundingClientRect(), s = parseInt(getComputedStyle(e).top);
                    if (!e.parentElement) return 0;
                    const o = e.parentElement.getBoundingClientRect().top;
                    return t === s && o < 0 ? n : 0
                }))
            }

            function ri(e) {
                const t = ii();
                if (!t) return;
                ai(e, t);
                const n = function(e, t) {
                    const n = function(e, t) {
                        const n = /^(diff-[0-9a-f]{32})(?:[L|R]\d+)?$/.exec(t);
                        if (!n) return;
                        const s = n[1],
                            o = e.querySelector(`a[name='${s}']`);
                        if (!o) return;
                        const r = o.nextElementSibling;
                        if (r && !r.querySelector(".js-diff-load-container")) return;
                        return r
                    }(e, t);
                    if (n) return n;
                    return function(e, t) {
                        const n = /^(?:r|commitcomment-)(\d+)$/.exec(t);
                        if (!n) return;
                        const s = n[1],
                            o = e.querySelector(`#diff-with-comment-${s}`);
                        if (!o) return;
                        return o.closest(".js-file")
                    }(e, t)
                }(e, t);
                n && (si(n), ci(n))
            }

            function ii() {
                return window.location.hash.slice(1)
            }

            function ai(e, t) {
                const n = G(e.ownerDocument, t);
                n && e.contains(n) && si(n)
            }

            function ci(e) {
                const t = v(e, ".js-diff-entry-loader", l),
                    n = v(e, ".js-diff-placeholder", Element),
                    s = v(e, "button.js-diff-load", HTMLButtonElement),
                    o = v(e, ".js-button-text");
                n.setAttribute("fill", "url('#animated-diff-gradient')"), o.textContent = s.getAttribute("data-disable-with") || "", s.disabled = !0;
                const r = new URL(t.getAttribute("data-fragment-url") || "", window.location.origin);
                return t.src = r.toString(), t.data
            }

            function li(e, t) {
                return b(document, ".js-details-container.open.Details--on").filter(n => n.getAttribute(e) === t)
            }

            function ui(e, t, n, s) {
                const o = v(document, ".js-file-filter"),
                    r = new URL(window.location.href, window.location.origin);
                if (!e && !n) return r.search = "", H(ue(), "", r.toString());
                const i = v(o, ".js-file-filter-form", HTMLFormElement),
                    a = new FormData(i),
                    c = t.filter(e => !a.getAll("file-filters[]").includes(e)),
                    l = s.filter(e => !a.getAll("owned-by[]").includes(e));
                for (const d of c) a.append("file-filters[]", d);
                for (const d of l) a.append("owned-by[]", d);
                const u = new URLSearchParams(a);
                u.has("file-filters[]") && "" !== u.toString() || u.set("file-filters[]", ""), r.search = u.toString(), H(ue(), "", r.toString())
            }

            function di(e) {
                var t;
                t = e, v(document, ".js-file-filter-text", HTMLElement).classList.toggle("text-blue", t),
                    function(e) {
                        const t = document.querySelector(".js-reset-filters"),
                            n = document.querySelector(".js-commits-filtered");
                        null == t || n || (t.hidden = !e)
                    }(e),
                    function() {
                        const e = pi(),
                            t = yi();
                        for (const o of e)
                            if (t) {
                                const e = "0" === p(o, "data-non-deleted-files-count");
                                o.disabled = e
                            } else o.disabled = !1;
                        const n = document.querySelector(".js-deleted-files-container"),
                            s = gi();
                        if (s && n) {
                            const t = function(e) {
                                const t = e.find(e => e.checked && "0" !== p(e, "data-deleted-files-count"));
                                return Boolean(t)
                            }(e);
                            n.classList.toggle("text-gray", !t), s.disabled = !t
                        }
                    }(),
                    function() {
                        const e = ji(),
                            t = v(document, ".js-file-filter-select-all-container", HTMLElement),
                            n = p(t, e ? "data-select-all-markup" : "data-all-selected-markup");
                        t.textContent = n, t.classList.toggle("text-gray", !e), t.classList.toggle("text-blue", e)
                    }(),
                    function() {
                        const e = document.querySelector(".js-deleted-files-container");
                        if (e) {
                            const t = yi() ? "data-show-deleted-markup" : "data-hide-deleted-markup",
                                n = p(e, t);
                            e.textContent = n
                        }
                    }(),
                    function() {
                        const e = b(document, ".js-file-type-count");
                        for (const t of e) {
                            const e = yi() ? "data-non-deleted-file-count-markup" : "data-all-file-count-markup",
                                n = t.getAttribute(e);
                            n && (t.textContent = n)
                        }
                    }(), ui(e, fi(), vi(), wi())
            }

            function mi(e) {
                ! function() {
                    const e = gi(),
                        t = fi(),
                        n = b(document, ".js-file"),
                        s = wi(),
                        o = hi();
                    for (const r of n) {
                        let n = !0;
                        const i = r.getAttribute("data-file-type");
                        if (i && (n = t.includes(i)), o && n) {
                            const e = r.hasAttribute("data-file-user-viewed");
                            e && (n = !o.checked)
                        }
                        if (s.length > 0 && n) {
                            const e = (r.getAttribute("data-codeowners") || "").split(",");
                            n = e.filter(e => s.includes(e)).length > 0
                        }
                        if (e && e.checked && n) {
                            const e = "true" === r.getAttribute("data-file-deleted");
                            e && (n = !1)
                        }
                        Ei(r, n)
                    }
                }(), di(e)
            }

            function fi() {
                return pi().filter(e => e.checked).map(e => e.value)
            }

            function pi() {
                return b(document, ".js-diff-file-type-option", HTMLInputElement)
            }

            function gi() {
                const e = document.querySelector(".js-deleted-files-toggle");
                if (e instanceof HTMLInputElement) return e
            }

            function hi() {
                const e = document.querySelector(".js-viewed-files-toggle");
                if (e instanceof HTMLInputElement) return e
            }

            function bi() {
                return ji() || yi() || vi()
            }

            function vi() {
                return wi().length > 0
            }

            function wi() {
                return b(document, ".js-diff-owner-option", HTMLInputElement).filter(e => e.checked).map(e => e.value)
            }

            function ji() {
                return fi().length !== pi().length
            }

            function yi() {
                const e = gi();
                return !!e && e.checked
            }

            function Ei(e, t) {
                const n = d(e, ".js-file.js-details-container");
                n.classList.toggle("open", t), n.classList.toggle("Details--on", t)
            }

            function Li(e) {
                const t = pi();
                for (const n of t) n.checked = e
            }
            r(".js-sticky", {
                constructor: HTMLElement,
                add(e) {
                    ! function(e) {
                        const t = ni(e),
                            n = window.getComputedStyle(e).position;
                        e.style.position = "static";
                        const s = e.offsetParent;
                        e.style.position = "fixed";
                        const o = window.getComputedStyle(e).top,
                            r = {
                                element: e,
                                placeholder: t,
                                offsetParent: s,
                                top: "auto" === o ? 0 : o
                            };
                        e.style.position = n, Jr.push(r)
                    }(e), Qr(), Gr()
                },
                remove(e) {
                    ! function(e) {
                        const t = Jr.map(e => e.element).indexOf(e);
                        Jr.splice(t, 1)
                    }(e), Gr()
                }
            }), r(".js-diff-progressive-container", function(e) {
                ri(e);
                const t = e.querySelector(".js-diff-progressive-loader");
                t && t.addEventListener("load", function() {
                    ri(e)
                })
            }), r(".js-diff-load-container", function(e) {
                const t = e.querySelector(".js-diff-entry-loader");
                t && t.addEventListener("load", function() {
                    d(e, ".js-file").classList.remove("hide-file-notes-toggle");
                    const t = ii();
                    t && ai(e, t)
                })
            }), u("click", ".js-diff-load", function(e) {
                if (e.target.classList.contains("js-ignore-this")) return;
                ci(d(e.currentTarget, ".js-diff-load-container"))
            }), u("click", ".js-rendered, .js-source", function(e) {
                const t = e.currentTarget;
                t.classList.contains("selected") ? e.preventDefault() : (function(e) {
                    const t = d(e, ".js-file-header"),
                        n = e.classList.contains("js-rendered"),
                        s = e.classList.contains("js-source"),
                        o = p(t, "data-short-path"),
                        r = p(t, "data-anchor"),
                        i = new URL(window.location.href, window.location.origin),
                        a = new URLSearchParams(i.search.slice(1));
                    i.hash = r, n ? a.set("short_path", o) : s && a.delete("short_path");
                    i.search = a.toString(), H(null, "", i.toString())
                }(t), function(e) {
                    for (const t of document.querySelectorAll(".js-rendered, .js-source")) t.classList.remove("selected"), t.removeAttribute("aria-current");
                    e.classList.add("selected"), e.setAttribute("aria-current", "true")
                }(t))
            }), j(".js-prose-diff-toggle-form", async function(e, t) {
                const n = d(e, ".js-details-container"),
                    s = v(n, ".js-file-content"),
                    o = await t.html();
                for (; s.lastChild;) s.removeChild(s.lastChild);
                s.append(o.html), n.classList.toggle("display-rich-diff"), n.classList.toggle("show-inline-notes")
            }), u("change", ".js-diff-style-toggle input", function(e) {
                const t = d(e.target, ".js-diff-settings");
                for (const n of b(t, ".js-diff-style-toggle label")) n.classList.toggle("selected")
            }), u("click", ".js-toc-retry", function(e) {
                const t = d(e.target, ".select-menu"),
                    n = v(t, "include-fragment"),
                    s = p(n, "src");
                n.setAttribute("src", ""), n.setAttribute("src", s)
            }), u("change", ".js-diff-file-type-option", function() {
                mi(bi())
            }), u("change", ".js-diff-owner-option", function() {
                mi(vi())
            }), u("click", ".js-file-filter-select-all", function() {
                ji() && (Li(!0), mi(bi()))
            }), u("change", ".js-deleted-files-toggle", function() {
                mi(bi())
            }), u("change", ".js-viewed-files-toggle", function() {
                mi(bi())
            }), r(".js-file-filter", function() {
                bi() ? di(!0) : ui(!1, fi(), vi(), wi())
            }), u("click", ".js-file-header .js-details-target", function({
                currentTarget: e
            }) {
                if (!document.querySelector(".js-file-filter")) return;
                const t = d(e, ".js-details-container"),
                    n = function(e) {
                        const t = p(e, "data-file-type"),
                            n = li("data-file-type", t),
                            s = b(document, ".js-diff-file-type-option", HTMLInputElement).find(e => e.value === t);
                        if (!s) return !1;
                        const o = s.checked !== n.length > 0;
                        return o && (s.checked = n.length > 0), o
                    }(t),
                    s = gi();
                let o = !1;
                s && (o = function(e, t) {
                    let n = !1;
                    if ("true" === p(e, "data-file-deleted")) {
                        const e = li("data-file-deleted", "true");
                        (n = t.checked !== (0 === e.length)) && (t.checked = 0 === e.length)
                    }
                    return n
                }(t, s));
                const r = hi();
                let i = !1;
                r && (i = function(e, t) {
                    let n = !1;
                    if ("true" === e.getAttribute("data-file-user-viewed")) {
                        const e = li("data-file-user-viewed", "true");
                        (n = t.checked !== (0 === e.length)) && (t.checked = 0 === e.length)
                    }
                    return n
                }(t, r)), (n || o || i) && di(bi())
            });
            class Ti {
                constructor(e) {
                    this.files = Array.from(e), this.percentages = this.files.map(() => 0), this.size = this.files.length, this.total = this.files.reduce((e, t) => e + t.size, 0), this.uploaded = 0
                }
                percent() {
                    const e = this.files.map((e, t) => e.size * this.percentages[t] / 100).reduce((e, t) => e + t);
                    return Math.round(e / this.total * 100)
                }
                progress(e, t) {
                    const n = this.files.indexOf(e);
                    this.percentages[n] = t
                }
                completed() {
                    this.uploaded += 1
                }
                isFinished() {
                    return this.uploaded === this.files.length
                }
            }
            const ki = ["is-default", "is-uploading", "is-bad-file", "is-duplicate-filename", "is-too-big", "is-too-many", "is-hidden-file", "is-failed", "is-bad-dimensions", "is-empty", "is-bad-permissions", "is-repository-required", "is-bad-format"];

            function Mi(e, t) {
                e.classList.remove(...ki), e.classList.add(t)
            }
            const Ai = new class {
                constructor() {
                    this.uploads = [], this.busy = !1
                }
                upload(e) {
                    this.uploads.push(e), this.process()
                }
                process() {
                    if (this.busy || 0 === this.uploads.length) return;
                    const e = this.uploads.shift();
                    this.busy = !0;
                    const t = new XMLHttpRequest;
                    t.open("POST", e.to, !0);
                    for (const s in e.header) t.setRequestHeader(s, e.header[s]);
                    t.onloadstart = function() {
                        e.start()
                    }, t.onload = (() => {
                        204 === t.status ? e.complete({}) : 201 === t.status ? e.complete(JSON.parse(t.responseText)) : e.error({
                            status: t.status,
                            body: t.responseText
                        }), this.busy = !1, this.process()
                    }), t.onerror = (() => {
                        e.error({
                            status: 0,
                            body: ""
                        }), this.busy = !1, this.uploads = []
                    }), t.upload.onprogress = function(t) {
                        if (t.lengthComputable) {
                            const n = Math.round(t.loaded / t.total * 100);
                            e.progress(n)
                        }
                    };
                    const n = new FormData;
                    e.sameOrigin && n.append("authenticity_token", e.csrf);
                    for (const s in e.form) n.append(s, e.form[s]);
                    n.append("file", e.file), t.send(n)
                }
            };
            async function xi(e, t) {
                for (const s of e.files) {
                    const o = Si(s, t),
                        r = [];
                    if (!L(t, "upload:setup", {
                            batch: e,
                            file: s,
                            policyRequest: o.options,
                            preprocess: r
                        })) return;
                    try {
                        await Promise.all(r);
                        const i = await O(o.url, o.options);
                        Ai.upload(Hi(e, s, i, t))
                    } catch (n) {
                        if (L(t, "upload:invalid", {
                                batch: e,
                                file: s,
                                error: n
                            }), n.response) {
                            const e = await n.response.text();
                            Mi(t, qi({
                                status: n.response.status,
                                body: e
                            }, s))
                        } else {
                            Mi(t, qi({
                                status: 0,
                                body: ""
                            }))
                        }
                    }
                }
            }

            function Si(e, t) {
                const n = p(t, "data-upload-policy-url"),
                    s = t.getAttribute("data-upload-repository-id");
                let o = t.getAttribute("data-upload-policy-authenticity-token");
                null == o && (o = Ci(t));
                const r = new FormData;
                return r.append("name", e.name), r.append("size", String(e.size)), r.append("content_type", e.type), r.append("authenticity_token", o), s && r.append("repository_id", s), e._path && r.append("directory", String(e._path)), {
                    url: n,
                    options: {
                        method: "post",
                        body: r,
                        headers: {}
                    }
                }
            }

            function Hi(e, t, n, s) {
                let o = n.upload_authenticity_token;
                null == o && (o = Ci(s));
                let r = n.asset_upload_authenticity_token;
                return null == r && (r = Ci(s)), {
                    file: t,
                    to: n.upload_url,
                    form: n.form,
                    header: n.header,
                    sameOrigin: n.same_origin,
                    csrf: o,
                    start() {
                        Mi(s, "is-uploading"), L(s, "upload:start", {
                            batch: e,
                            file: t,
                            policy: n
                        })
                    },
                    progress(n) {
                        e.progress(t, n), L(s, "upload:progress", {
                            batch: e,
                            file: t,
                            percent: n
                        })
                    },
                    complete(o) {
                        if (e.completed(), o && o.href && (n.asset || (n.asset = {}), n.asset.href = o.href), n.asset_upload_url && n.asset_upload_url.length > 0) {
                            const e = new FormData;
                            e.append("authenticity_token", r), O(n.asset_upload_url, {
                                method: "put",
                                body: e
                            })
                        }
                        L(s, "upload:complete", {
                            batch: e,
                            file: t,
                            policy: n,
                            result: o
                        }), Mi(s, "is-default")
                    },
                    error(o) {
                        L(s, "upload:error", {
                            batch: e,
                            file: t,
                            policy: n
                        });
                        const r = qi(o);
                        Mi(s, r)
                    }
                }
            }

            function Ci(e) {
                const t = d(e, "form", HTMLFormElement);
                return T(t, "authenticity_token").value
            }

            function qi(e, t) {
                if (400 === e.status) return "is-bad-file";
                if (422 !== e.status) return "is-failed";
                const n = JSON.parse(e.body);
                if (!n || !n.errors) return "is-failed";
                for (const s of n.errors) switch (s.field) {
                    case "size":
                        {
                            const e = t ? t.size : null;
                            return null != e && 0 === parseInt(e) ? "is-empty" : "is-too-big"
                        }
                    case "file_count":
                        return "is-too-many";
                    case "width":
                    case "height":
                        return "is-bad-dimensions";
                    case "name":
                        return "already_exists" === s.code ? "is-duplicate-filename" : "is-bad-file";
                    case "content_type":
                        return "is-bad-file";
                    case "uploader_id":
                        return "is-bad-permissions";
                    case "repository_id":
                        return "is-repository-required";
                    case "format":
                        return "is-bad-format"
                }
                return "is-failed"
            }

            function Ii(e, t) {
                return t && e.getFilesAndDirectories ? async function(e) {
                    return _i(await async function e(t, n) {
                        if (n.getFilesAndDirectories) {
                            const t = await n.getFilesAndDirectories(),
                                s = $i(t).map(t => e(n.path, t));
                            return Promise.all(s)
                        }
                        return n._path = t, Promise.resolve(n)
                    }("", e))
                }(e) : t && function(e) {
                    return e.items && Array.from(e.items).some(e => {
                        const t = e.webkitGetAsEntry && e.webkitGetAsEntry();
                        return t && t.isDirectory
                    })
                }(e) ? async function(e) {
                    const t = $i(Array.from(e.items).map(e => e.webkitGetAsEntry())).map(e => (async function e(t, n) {
                        if (n.isDirectory) {
                            const t = await (s = n, new Promise(function(e, t) {
                                    s.createReader().readEntries(e, t)
                                })),
                                o = $i(t).map(t => e(n.fullPath, t));
                            return Promise.all(o)
                        } {
                            const e = await
                            function(e) {
                                return new Promise(function(t, n) {
                                    e.file(t, n)
                                })
                            }(n);
                            return e._path = t, e
                        }
                        var s
                    })("", e));
                    return _i(await Promise.all(t))
                }(e) : Promise.resolve($i(Array.from(e.files)))
            }

            function _i(e) {
                return e.reduce((e, t) => Array.isArray(t) ? e.concat(_i(t)) : (e.push(t), e), [])
            }

            function $i(e) {
                return Array.from(e).filter(e => ! function(e) {
                    return e.name.startsWith(".")
                }(e))
            }
            class FileAttachmentElement extends HTMLElement {
                constructor() {
                    super(), this.addEventListener("dragenter", Pi), this.addEventListener("dragover", Pi), this.addEventListener("dragleave", Fi), this.addEventListener("drop", Oi), this.addEventListener("paste", Ui)
                }
                connectedCallback() {}
                get directory() {
                    return this.hasAttribute("directory")
                }
                set directory(e) {
                    e ? this.setAttribute("directory", "") : this.removeAttribute("directory")
                }
                upload(e) {
                    Di(e, this)
                }
            }

            function Di(e, t) {
                xi(new Ti(e), t)
            }

            function Ri(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }

            function Bi(e) {
                switch (e) {
                    case "image/gif":
                        return "image.gif";
                    case "image/png":
                        return "image.png";
                    case "image/jpeg":
                        return "image.jpg"
                }
            }
            window.customElements.get("file-attachment") || (window.FileAttachmentElement = FileAttachmentElement, window.customElements.define("file-attachment", FileAttachmentElement));
            let Ni = null;

            function Pi(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) throw new Error("invariant: app/assets/modules/github/file-attachment-element.js:77");
                Ni && clearTimeout(Ni), Ni = setTimeout(() => t.classList.remove("dragover"), 200);
                const n = e.dataTransfer;
                n && Ri(n) && (n.dropEffect = "copy", t.classList.add("dragover"), e.stopPropagation(), e.preventDefault())
            }

            function Fi(e) {
                if (e.dataTransfer && (e.dataTransfer.dropEffect = "none"), !(e.currentTarget instanceof Element)) throw new Error("invariant: app/assets/modules/github/file-attachment-element.js:98");
                e.currentTarget.classList.remove("dragover"), e.stopPropagation(), e.preventDefault()
            }

            function Oi(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                t.classList.remove("dragover");
                const n = e.dataTransfer;
                n && Ri(n) && (!async function(e, t) {
                    const n = await Ii(t, e.hasAttribute("directory"));
                    if (!n.length) return void Mi(e, "is-hidden-file");
                    const s = Di.bind(null, n);
                    !L(e, "upload:drop:setup", {
                        upload: s,
                        files: n
                    }) || Di(n, e)
                }(t, n), e.stopPropagation(), e.preventDefault())
            }

            function Ui(e) {
                if (!e.clipboardData) return;
                if (!e.clipboardData.items) return;
                const t = e.currentTarget;
                if (!(t instanceof Element)) return;
                const n = Array.from(e.clipboardData.items).map(e => [e, Bi(e.type)]).filter(e => e[1]).shift();
                if (!n) return;
                const [s] = n, o = s.getAsFile();
                o && (Di([o], t), e.preventDefault())
            }

            function Wi() {
                oi(document) && function(e) {
                    const t = le(e);
                    t && si(t)
                }(document)
            }
            ce(Wi), u("click", 'a[href^="#"]', function(e) {
                const {
                    currentTarget: t
                } = e;
                t instanceof HTMLAnchorElement && setTimeout(Wi, 0)
            });
            class zi {
                constructor(e) {
                    this.name = e.getAttribute("data-theme-name") || "", this.slug = e.getAttribute("data-theme-slug") || "", this.gem = e.getAttribute("data-theme-gem") || "", this.selected = e.classList.contains("selected"), this.baseHref = e.getAttribute("href") || ""
                }
            }
            class Vi {
                constructor() {
                    this.pagePreview = v(document, "#page-preview"), this.contextLoader = v(document, ".theme-picker-spinner"), this.fullPicker = v(document, ".theme-picker-thumbs"), this.miniPicker = v(document, ".theme-picker-controls"), this.scrollBackwardsLink = v(document, ".theme-toggle-full-left", HTMLButtonElement), this.scrollForwardsLink = v(document, ".theme-toggle-full-right", HTMLButtonElement), this.themeLinksContainer = v(this.fullPicker, ".js-theme-selector"), this.themeLinks = b(this.themeLinksContainer, ".theme-selector-thumbnail"), this.themes = this.themeLinks.map(e => {
                        const t = new zi(e);
                        return t.selected && (this.selectedTheme = t), t
                    }), this.scrolledPage = 0, this.selectedTheme = this.selectedTheme || this.themes[0], this.pagePreview.addEventListener("load", () => this.onPagePreviewLoad()), this.scrollBackwardsLink.addEventListener("click", () => this.scrollThemeLinksContainer(-1)), this.scrollForwardsLink.addEventListener("click", () => this.scrollThemeLinksContainer(1)), v(document, ".theme-picker-prev").addEventListener("click", e => this.onThemeNavPrevClick(e)), v(document, ".theme-picker-next").addEventListener("click", e => this.onThemeNavNextClick(e));
                    for (const t of this.themeLinks) t.addEventListener("click", e => this.onThemeLinkClick(e));
                    v(document, ".theme-picker-view-toggle").addEventListener("click", e => this.onHideClick(e));
                    const e = document.querySelector("#page-edit");
                    e && e.addEventListener("click", e => this.onEditClick(e)), v(document, "#page-publish").addEventListener("click", e => this.onPublishClick(e)), this.theme(this.selectedTheme), this.updateScrollLinks()
                }
                onPagePreviewLoad() {
                    this.contextLoader.classList.remove("visible")
                }
                onThemeNavPrevClick(e) {
                    this.theme(this.prevTheme()), e.preventDefault()
                }
                onThemeNavNextClick(e) {
                    this.theme(this.nextTheme()), e.preventDefault()
                }
                onThemeLinkClick(e) {
                    this.theme(this.themeForLink(e.currentTarget)), e.preventDefault()
                }
                onHideClick({
                    currentTarget: e
                }) {
                    if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/generated-pages-theme-picker.js:81");
                    this.fullPicker.classList.toggle("d-none"), this.miniPicker.classList.toggle("d-none"), this.scrollToTheme(this.theme(), !1), e.classList.toggle("open")
                }
                onEditClick(e) {
                    E(v(document, "#page-edit-form", HTMLFormElement)), e.preventDefault()
                }
                onPublishClick(e) {
                    const t = v(document, "#page-publish-form", HTMLFormElement),
                        n = this.theme();
                    n && (v(document, 'input[name="page[theme_slug]"]', HTMLInputElement).value = n.slug), E(t), e.preventDefault()
                }
                scrollThemeLinksContainer(e) {
                    this.scrollToTheme(this.themes[e < 0 ? 0 : 6]), this.updateScrollLinks()
                }
                updateScrollLinks() {
                    const e = 0 === this.scrolledPage;
                    this.scrollBackwardsLink.disabled = e, this.scrollBackwardsLink.classList.toggle("disabled", e), this.scrollForwardsLink.disabled = !e, this.scrollForwardsLink.classList.toggle("disabled", !e)
                }
                selectedThemeIndex() {
                    return this.themes.indexOf(this.selectedTheme)
                }
                prevTheme() {
                    let e = (this.selectedThemeIndex() - 1) % this.themes.length;
                    return e < 0 && (e += this.themes.length), this.themes[e]
                }
                nextTheme() {
                    return this.themes[(this.selectedThemeIndex() + 1) % this.themes.length]
                }
                themeForLink(e) {
                    return this.themes[this.themeLinks.indexOf(e)]
                }
                linkForTheme(e) {
                    return this.themeLinks[this.themes.indexOf(e)]
                }
                scrollToTheme(e, t = !0) {
                    this.scrolledPage = Math.floor(this.themes.indexOf(e) / 6);
                    let n = 0;
                    if (this.scrolledPage > 0) {
                        const e = this.linkForTheme(this.themes[6 * this.scrolledPage]);
                        n = e.offsetLeft
                    }
                    const s = this.themeLinksContainer,
                        o = n - s.scrollLeft;
                    if (t && 0 !== o) {
                        const e = 150;
                        r = (t => {
                            if (t < 0) return;
                            const r = s.scrollLeft;
                            return s.scrollLeft = Math[n - r > 0 ? "min" : "max"](r + o * (t / e), n), r !== s.scrollLeft && void 0
                        }), new Promise(e => {
                            let t = performance.now();
                            ! function n() {
                                window.requestAnimationFrame(s => {
                                    !1 !== r(s - t) ? (t = s, n()) : e()
                                })
                            }()
                        })
                    } else s.scrollLeft = n;
                    var r
                }
                theme(e) {
                    if (!e) return this.selectedTheme;
                    this.selectedTheme = e, this.showPreviewFor(e);
                    for (const t of this.themeLinks) t.classList.remove("selected");
                    this.linkForTheme(e).classList.add("selected"), this.scrollToTheme(e), v(this.miniPicker, ".js-theme-name").textContent = e.name
                }
                showPreviewFor(e) {
                    if (this.contextLoader.classList.add("visible"), e.gem) this.pagePreview.setAttribute("src", e.baseHref);
                    else {
                        const t = v(this.fullPicker, "form", HTMLFormElement);
                        v(document, 'input[name="theme_slug"]', HTMLInputElement).value = e.slug, E(t)
                    }
                }
            }

            function Ki() {
                const e = document.querySelector(".js-get-repo-modal");
                if (e) {
                    e.classList.remove("is-downloading");
                    for (const t of e.querySelectorAll(".js-modal-download-mac, .js-modal-download-windows, .js-modal-download-xcode, .js-modal-download-visual-studio")) t.classList.remove("d-block"), t.classList.add("d-none")
                }
            }

            function Yi(e) {
                try {
                    return sessionStorage.getItem(e)
                } catch (t) {
                    return null
                }
            }

            function Xi(e, t) {
                try {
                    sessionStorage.setItem(e, t)
                } catch (n) {}
            }

            function Ji(e) {
                try {
                    sessionStorage.removeItem(e)
                } catch (t) {}
            }

            function Gi(e) {
                const t = document.querySelectorAll(e);
                if (t.length > 0) return t[t.length - 1]
            }

            function Qi() {
                return function() {
                    const e = Gi("meta[name=analytics-location]");
                    return e instanceof HTMLMetaElement ? e.content : window.location.pathname
                }() + function() {
                    let e = "";
                    Gi("meta[name=analytics-location-query-strip]") || (e = window.location.search);
                    const t = Gi("meta[name=analytics-location-params]");
                    t instanceof HTMLMetaElement && (e += (e ? "&" : "?") + t.content);
                    for (const n of b(document, "meta[name=analytics-param-rename]", HTMLMetaElement)) {
                        const t = n.content.split(":", 2);
                        e = e.replace(new RegExp(`(^|[?&])${t[0]}($|=)`, "g"), `$1${t[1]}$2`)
                    }
                    return e
                }()
            }

            function Zi() {
                const e = `${window.location.protocol}//${window.location.host}${Qi()}`;
                me(e), fe(Gi("meta[name=analytics-location]") ? "(masked)" : document.title);
                const t = Gi("meta[name=analytics-ec-payload]");
                t instanceof HTMLMetaElement && ea(t.content);
                const n = Yi("ga-deferred");
                n && (ea(n), Ji("ga-deferred"));
                for (const s of b(document, "meta.js-ga-set", HTMLMetaElement)) pe(s.name, s.content)
            }

            function ea(e) {
                if (e)
                    for (const t of JSON.parse(e)) window.ga.apply(null, t)
            }

            function ta() {
                for (const e of document.querySelectorAll("meta[name=analytics-virtual-pageview]")) e instanceof HTMLMetaElement && ge(e.content, {
                    title: ""
                });
                ge()
            }

            function na(e) {
                const [t, n, s, o] = e.trim().split(/\s*,\s*/);
                return o ? {
                    category: t,
                    action: n,
                    label: s,
                    value: Number(o)
                } : {
                    category: t,
                    action: n,
                    label: s
                }
            }
            r("#theme-picker-wrap", function() {
                new Vi
            }), u("click", ".email-hidden-toggle", function(e) {
                const t = e.currentTarget.nextElementSibling;
                t instanceof HTMLElement && (t.style.display = "", t.classList.toggle("expanded"), e.preventDefault())
            }), u("click", ".js-git-clone-help-container .js-git-clone-help-switcher", function(e) {
                const t = e.currentTarget,
                    n = d(t, ".js-git-clone-help-container"),
                    s = t.getAttribute("data-url") || "";
                if (v(n, ".js-git-clone-help-field", HTMLInputElement).value = s, t.matches(".js-git-protocol-clone-url"))
                    for (const r of n.querySelectorAll(".js-git-clone-help-text")) r.textContent = s;
                const o = n.querySelector(".js-clone-url-button.selected");
                o && o.classList.remove("selected"), d(t, ".js-clone-url-button").classList.add("selected")
            }), u("click", ".js-get-repo", function(e) {
                const t = p(e.currentTarget, "data-open-app");
                ! function(e, t) {
                    let n;
                    switch (e.classList.add("is-downloading"), t) {
                        case "mac":
                            n = e.querySelector(".js-modal-download-mac");
                            break;
                        case "windows":
                            n = e.querySelector(".js-modal-download-windows");
                            break;
                        case "xcode":
                            n = e.querySelector(".js-modal-download-xcode");
                            break;
                        case "visual-studio":
                            n = e.querySelector(".js-modal-download-visual-studio")
                    }
                    n && (n.classList.remove("d-none"), n.classList.add("d-block"))
                }(d(e.currentTarget, ".js-get-repo-modal"), t)
            }), u("toggle", ".js-get-repo-select-menu", Ki, {
                capture: !0
            }), u("click", ".js-get-repo-modal-download-back", Ki), de("octolyticsPlugin", function(e) {
                const t = e.get("sendHitTask");
                e.set("sendHitTask", function(e) {
                    if (t(e), "event" === e.get("hitType") && window._octo) {
                        const t = `//${window._octo.host}/collect`,
                            n = new Blob([e.get("hitPayload")], {
                                type: "application/x-www-form-urlencoded"
                            });
                        navigator.sendBeacon && navigator.sendBeacon(t, n)
                    }
                })
            });
            const sa = document.querySelector("meta[name=google-analytics]");
            sa instanceof HTMLMetaElement && (he(sa.content, "auto"), be("octolyticsPlugin"), be("ec"), Zi()), async function() {
                await K, ta()
            }(), document.addEventListener("pjax:complete", () => {
                setTimeout(() => {
                    Zi(), ta()
                }, 20)
            }, !1), r("[data-ga-load]", function(e) {
                const t = na(e.getAttribute("data-ga-load") || "");
                t.interactive = !1, ve(t)
            }), r("meta[name=analytics-event]", {
                constructor: HTMLMetaElement,
                initialize(e) {
                    const t = na(e.content);
                    t.interactive = !1, ve(t)
                }
            }), u("click", "[data-ga-click]", function(e) {
                ea(e.currentTarget.getAttribute("data-ga-ec") || "");
                const t = na(e.currentTarget.getAttribute("data-ga-click") || "");
                ve(t)
            }, {
                capture: !0
            }), u("click", "[data-ga-deferred]", function(e) {
                Xi("ga-deferred", e.currentTarget.getAttribute("data-ga-deferred") || "")
            }, {
                capture: !0
            }), u("change", "[data-ga-change]", function(e) {
                ea(e.currentTarget.getAttribute("data-ga-ec") || "");
                const t = na(e.currentTarget.getAttribute("data-ga-change") || "");
                ve(t)
            }, {
                capture: !0
            }), u("click", ".js-skip-to-content", function(e) {
                const t = document.getElementById("start-of-content");
                if (t) {
                    const e = t.nextElementSibling;
                    e instanceof HTMLElement && (e.setAttribute("tabindex", "-1"), e.focus())
                }
                e.preventDefault()
            });
            const oa = "ontouchstart" in document;
            for (const n of document.querySelectorAll(".HeaderMenu-details")) n.addEventListener("toggle", ia), oa || (n.addEventListener("mouseover", aa), n.addEventListener("mouseleave", aa));
            let ra = !1;

            function ia(e) {
                if (!ra) {
                    ra = !0;
                    for (const t of document.querySelectorAll(".HeaderMenu-details")) t !== e.currentTarget && t.removeAttribute("open");
                    setTimeout(() => ra = !1)
                }
            }

            function aa(e) {
                const {
                    currentTarget: t
                } = e;
                t instanceof HTMLElement && window.innerWidth > 1012 && ("mouseover" === e.type ? e.target instanceof Node && e.relatedTarget instanceof Node && t.contains(e.target) && !t.contains(e.relatedTarget) && t.setAttribute("open", "") : t.removeAttribute("open"))
            }

            function ca(e) {
                if (!window._octo) return;
                const t = Math.floor((new Date).getTime() / 1e3);
                e.timestamp = t;
                if (document.head && document.head.querySelector('meta[name="octolytics-event-url"]')) {
                    const t = v(document.head, 'meta[name="octolytics-event-url"]', HTMLMetaElement).content,
                        n = JSON.stringify(e);
                    navigator.sendBeacon && navigator.sendBeacon(t, n)
                }
            }
            u("click", ".js-video-play, .js-video-close", function(e) {
                e.preventDefault();
                const t = e.currentTarget,
                    n = t.classList.contains("js-video-play"),
                    s = d(t, ".js-video-container"),
                    o = v(s, ".js-video-iframe", HTMLIFrameElement),
                    r = document.querySelector(".js-video-bg");
                n ? o.src = o.getAttribute("data-src") || "" : o.removeAttribute("src"), s.classList.toggle("is-expanded", n), null != r && r.classList.toggle("is-expanded", n),
                    function(e, t = 0) {
                        const n = e.getBoundingClientRect(),
                            s = n.top - t,
                            o = n.bottom - window.innerHeight + t;
                        s < 0 ? window.scrollBy(0, s) : o > 0 && window.scrollBy(0, o)
                    }(o, 20)
            }), u("click", "[data-octo-click]", function(e) {
                if (!window._octo) return;
                const t = e.currentTarget,
                    n = t instanceof HTMLElement && t.getAttribute("data-octo-click") || "",
                    s = {};
                s.event_type = n;
                const o = {},
                    r = {},
                    i = {};
                let a = [];
                t instanceof HTMLElement && t.hasAttribute("data-octo-dimensions") && (a = (t.getAttribute("data-octo-dimensions") || "").split(","));
                const c = document.head ? document.head.querySelectorAll('meta[name^="octolytics-"]') : [];
                for (const l of c)
                    if (l instanceof HTMLMetaElement)
                        if (l.name.startsWith("octolytics-dimension-")) {
                            o[l.name.replace(/^octolytics-dimension-/, "")] = l.content
                        } else if (l.name.startsWith("octolytics-measure-")) {
                    r[l.name.replace(/^octolytics-measure-/, "")] = l.content
                } else if (l.name.startsWith("octolytics-context-")) {
                    i[l.name.replace(/^octolytics-context-/, "")] = l.content
                } else if (l.name.startsWith("octolytics-actor-")) {
                    o[l.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = l.content
                } else if (l.name.startsWith("octolytics-")) {
                    s[l.name.replace(/^octolytics-/, "").replace(/-/g, "_")] = l.content
                }
                if (t instanceof HTMLElement && t.hasAttribute("data-ga-click")) {
                    const e = (t.getAttribute("data-ga-click") || "").split(",").map(e => e.trim());
                    o.category = e[0], o.action = e[1]
                }
                for (const l of a) {
                    const e = l.split(":"),
                        t = e.shift();
                    t && (o[t] = e.join(":"))
                }
                s.dimensions = o, s.measures = r, s.context = i, ca(s)
            });
            const la = document.querySelector(".js-hovercard-content"),
                ua = {};
            let da, ma, fa = null,
                pa = 0;
            const ga = 12,
                ha = 24,
                ba = ha - 7,
                va = 16,
                wa = 100,
                ja = 250;

            function ya(e) {
                return "Popover-message--" + e
            }

            function Ea() {
                la instanceof HTMLElement && (la.style.display = "none", la.children[0].innerHTML = "", fa = null, da = null)
            }

            function La(e) {
                if (!(la instanceof HTMLElement)) throw new Error("invariant violation, cardContentContainer is not HTMLElement");
                const {
                    width: t,
                    height: n
                } = la.getBoundingClientRect(), {
                    left: s,
                    top: o,
                    height: r,
                    width: i
                } = function(e) {
                    const t = e.getClientRects();
                    let n = t[0];
                    for (const s of t)
                        if (s.left < pa && s.right > pa) {
                            n = s;
                            break
                        }
                    return n
                }(e), a = o > n;
                if (e.classList.contains("js-hovercard-left")) {
                    const e = o + r / 2;
                    return {
                        containerTop: a ? e - n + ba + va / 2 : e - ba - va / 2,
                        containerLeft: s - t - ga,
                        contentClassSuffix: a ? "right-bottom" : "right-top"
                    }
                } {
                    const e = window.innerWidth - s > t,
                        c = s + i / 2;
                    return {
                        containerTop: a ? o - n - ga : o + r + ga,
                        containerLeft: e ? c - ha : c - t + ha,
                        contentClassSuffix: a ? e ? "bottom-left" : "bottom-right" : e ? "top-left" : "top-right"
                    }
                }
            }

            function Ta(e, t) {
                if (!(la instanceof HTMLElement)) return;
                const n = la.children[0];
                n.innerHTML = "";
                const s = document.createElement("div");
                for (const o of e.children) s.appendChild(o.cloneNode(!0));
                n.appendChild(s),
                    function(e, t) {
                        if (!(la instanceof HTMLElement)) return;
                        la.style.visibility = "hidden", la.style.display = "block", t.classList.remove(ya("bottom-left"), ya("bottom-right"), ya("right-top"), ya("right-bottom"), ya("top-left"), ya("top-right"));
                        const {
                            containerTop: n,
                            containerLeft: s,
                            contentClassSuffix: o
                        } = La(e);
                        t.classList.add(ya(o)), la.style.top = `${n+window.pageYOffset}px`, la.style.left = `${s+window.pageXOffset}px`,
                            function(e, t) {
                                const n = e.getAttribute("data-hovercard-z-index-override");
                                t.style.zIndex = n || "100"
                            }(e, la), la.style.visibility = ""
                    }(t, n),
                    function(e) {
                        setTimeout(() => {
                            if (document.body && document.body.contains(e)) {
                                const t = e.querySelector("[data-hovercard-tracking]");
                                if (t) {
                                    const e = t.getAttribute("data-hovercard-tracking");
                                    if (e) {
                                        const t = {
                                            event_type: "user-hovercard-load"
                                        };
                                        t.dimensions = JSON.parse(e), ca(t)
                                    }
                                }
                                const n = e.querySelector("[data-hydro-view]");
                                n instanceof HTMLElement && we(n)
                            }
                        }, 500)
                    }(s), la.style.display = "block"
            }

            function ka(e) {
                const t = e.getAttribute("data-hovercard-url");
                if (t) {
                    const n = function(e) {
                        const t = e.closest("[data-hovercard-subject-tag]");
                        if (t) return t.getAttribute("data-hovercard-subject-tag");
                        const n = document.head && document.head.querySelector('meta[name="hovercard-subject-tag"]');
                        return n ? n.getAttribute("content") : null
                    }(e);
                    if (n) {
                        const e = new URL(t, window.location.origin),
                            s = new URLSearchParams(e.search.slice(1));
                        return s.append("subject", n), s.append("current_path", window.location.pathname + window.location.search), e.search = s.toString(), e.toString()
                    }
                    return t
                }
                return ""
            }
            async function Ma(e, t) {
                const n = e.currentTarget;
                if (e instanceof MouseEvent && (pa = e.clientX), !(n instanceof Element)) return;
                if (da === n) return;
                if (n.closest(".js-hovercard-content")) return;
                if (! function(e) {
                        const t = e.getAttribute("data-hovercard-type");
                        return "pull_request" === t || "issue" === t ? !!e.closest("[data-issue-and-pr-hovercards-enabled]") : "team" === t ? !!e.closest("[data-team-hovercards-enabled]") : "repository" === t ? !!e.closest("[data-repository-hovercards-enabled]") : "commit" === t ? !!e.closest("[data-commit-hovercards-enabled]") : "project" === t ? !!e.closest("[data-project-hovercards-enabled]") : "contributors" !== t || !!e.closest("[data-contributors-hovercards-enabled]")
                    }(n)) return;
                Ea(), da = n, fa = document.activeElement;
                const s = ka(n);
                let o;
                try {
                    const e = new Promise(e => window.setTimeout(e, t, 0));
                    o = await async function(e) {
                        return ua[e] || (ua[e] = B(document, e)), ua[e]
                    }(s), await e
                } catch (r) {
                    const e = r.response;
                    if (e && 404 === e.status) {
                        const e = "Hovercard is unavailable";
                        return n.setAttribute("aria-label", e), void n.classList.add("tooltipped", "tooltipped-ne")
                    }
                    if (e && 410 === e.status) {
                        const t = await e.clone().json();
                        return n.setAttribute("aria-label", t.message), void n.classList.add("tooltipped", "tooltipped-ne")
                    }
                    if (/X-HTML-Safe/.test(r.message)) return;
                    throw r
                }
                n === da && (Ta(o, n), e instanceof KeyboardEvent && la instanceof HTMLElement && la.focus())
            }

            function Aa(e) {
                Ma(e, ja)
            }

            function xa(e) {
                if (da) {
                    if (e instanceof MouseEvent && e.relatedTarget instanceof HTMLElement) {
                        const t = e.relatedTarget;
                        if (t.closest(".js-hovercard-content") || t.closest("[data-hovercard-url]")) return
                    } else e instanceof KeyboardEvent && fa instanceof HTMLElement && fa.focus();
                    Ea()
                }
            }

            function Sa(e) {
                const t = da;
                ma = window.setTimeout(() => {
                    da === t && xa(e)
                }, wa)
            }

            function Ha(e) {
                if (e instanceof KeyboardEvent) switch (e.key) {
                    case "Escape":
                        xa(e)
                }
            }

            function Ca() {
                ma && clearTimeout(ma)
            }

            function qa() {
                return v(document, "input.js-edit-integration-setup-url", HTMLInputElement)
            }

            function Ia(e) {
                e && ((function() {
                    const e = d(qa(), ".form-group");
                    return v(e, ".js-setup-url-hint")
                }()).textContent = e)
            }

            function _a() {
                const e = document.getElementById("js-update-integration-permissions");
                e && e.removeAttribute("disabled")
            }

            function $a() {
                return function() {
                    const e = b(document, '[id^=integration_permission_]:checked:not([data-permission="none"])', HTMLInputElement);
                    return Array.from(e, e => e.getAttribute("data-resource"))
                }().map(e => (function(e) {
                    if (e) return b(document, `.js-integration-hook-event[data-resource~="${e}"]:checked`, HTMLInputElement)
                })(e)).reduce((e, t) => e.concat(t, []), [])
            }

            function Da(e = !1) {
                const t = v(document, ".js-integration-permissions-selector [id=integration_permission_metadata_read]", HTMLInputElement),
                    n = d(t, ".js-list-group-item");
                e && $(t, !0), v(n, ".js-mandatory-label").hidden = !e;
                for (const s of b(n, "input", HTMLInputElement)) s !== t && (s.disabled = e)
            }

            function Ra() {
                const e = v(document, ".js-content-references input", HTMLInputElement),
                    t = v(document, ".js-content-references template", HTMLTemplateElement),
                    n = v(document, ".js-content-references-domain-list"),
                    s = e.value;
                if (!s) return;
                const o = t.content.cloneNode(!0);
                v(o, "input", HTMLInputElement).value = s, v(o, ".js-content-references-domain-url").textContent = s, e.value = "", n.appendChild(o), d(n, ".Box").hidden = !1, _a()
            }
            la && (r("[data-hovercard-url]", {
                subscribe: e => U(q(e, "mouseover", Aa), q(e, "mouseleave", Sa), q(e, "keyup", Ha))
            }), r("[data-hovercard-url]", {
                remove(e) {
                    da === e && Ea()
                }
            }), r(".js-hovercard-content", {
                subscribe: e => U(q(e, "mouseover", Ca), q(e, "mouseleave", xa), q(e, "keyup", Ha))
            }), r(".js-hovercard-include-fragment", {
                constructor: HTMLTemplateElement,
                add(e) {
                    da && Ta(e.content, da)
                }
            }), u("menu:activated", "details", Ea), window.addEventListener("statechange", Ea)), r(".js-scrollnav-listener", function(e) {
                window.addEventListener("scroll", function() {
                    ! function(e) {
                        const t = v(e, ".js-scrollnav").getBoundingClientRect().height;
                        for (const n of e.querySelectorAll(".js-section")) {
                            const s = n.getBoundingClientRect(),
                                o = t >= s.top,
                                r = t <= s.top + s.height;
                            if (o && r) {
                                const t = e.querySelector(`.js-scrollnav-item[href="#${n.id}"]`);
                                if (t && !t.classList.contains("selected")) {
                                    for (const t of e.querySelectorAll(".js-scrollnav-item")) t.classList.remove("selected");
                                    t.classList.add("selected")
                                }
                            }
                        }
                    }(e)
                }, {
                    passive: !0
                })
            }), u("change", ".js-edit-integration-request-oauth-on-install", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/integrations/edit.js:24");
                const n = qa();
                if (t.checked) {
                    n.disabled = !0, n.placeholder = n.getAttribute("data-hint-unavailable-when-install") || "", Ia(n.getAttribute("data-hint-same-as-callback-url") || "")
                } else {
                    n.disabled = !1, n.placeholder = "", n.value = n.getAttribute("data-setup-url") || "", Ia(n.getAttribute("data-hint-setup-url") || "")
                }
            }), u("change", ".js-integration-permissions-selector [id^=integration_permission_]", function({
                currentTarget: e
            }) {
                const t = e.getAttribute("data-permission"),
                    n = e.getAttribute("data-resource") || "",
                    s = b(document, `.js-integration-hook-event[data-resource~="${n}"]`, HTMLInputElement),
                    o = b(document, ".js-integration-single-file-resource", HTMLInputElement),
                    r = b(document, `.js-dropdown-container[data-resource~="${n}"]`);
                if (_a(), "none" !== t) {
                    const t = b(document, `.js-integration-hook-event-permission-error[data-resource~='${n}']`);
                    for (const e of t) e.classList.add("d-none");
                    const i = b(document, ".js-integration-single-file-permission-error");
                    for (const e of i) e.classList.add("d-none");
                    for (const e of s) e.readOnly = !1;
                    for (const e of o) e.readOnly = !1;
                    d(e, ".js-list-group-item").classList.remove("disabled");
                    for (const e of r) e.classList.remove("d-none")
                } else {
                    for (const e of s) i = e, $a().includes(i) || (e.readOnly = !0, e.checked = !1, d(e, ".js-dropdown-container").classList.add("anim-fade-in", "d-none"));
                    if (d(e, ".js-list-group-item").classList.add("disabled"), "single_file" === n)
                        for (const e of o) e.readOnly = !0, e.value = "";
                    else "content_references" === n && (v(document, `.js-dropdown-container[data-resource~='${n}']`).classList.add("anim-fade-in", "d-none"), "none" === t && (v(document, ".js-content-references-domain-list").innerHTML = ""))
                }
                var i
            }), u("change", ".js-integration-permissions-selector [id^=integration_permission_][data-resource-parent^=repository]", function({
                currentTarget: e
            }) {
                const t = e.getAttribute("data-permission");
                "metadata" !== (e.getAttribute("data-resource") || "") && ("none" !== t ? Da(!0) : function() {
                    let e = !0;
                    const t = document.querySelectorAll(".js-integration-permissions-selector [id^=integration_permission_][data-resource-parent=repository]:checked");
                    for (const n of t) {
                        const t = n.getAttribute("data-permission") || "none";
                        if ("metadata" !== (n.getAttribute("data-resource") || "") && "none" !== t) {
                            e = !1;
                            break
                        }
                    }
                    return e
                }() && Da())
            }), u("change", ".js-integration-permissions-selector [name^=integration]", _a), u("click", ".js-integration-permissions-selector .js-integration-hook-event", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/integrations.js:234");
                if (t.readOnly) {
                    const n = d(t, ".js-send-events");
                    v(n, ".js-integration-hook-event-permission-error").classList.remove("d-none"), e.preventDefault()
                }
            }), u("click", ".js-integration-permissions-selector .js-integration-single-file-resource", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/integrations.js:247");
                if (t.readOnly) {
                    const n = d(t, ".js-single-file");
                    v(n, ".js-integration-single-file-permission-error").classList.remove("d-none"), e.preventDefault()
                }
            }), m("keydown", ".js-content-references input", function(e) {
                "Enter" === e.key && (e.preventDefault(), Ra())
            }), u("click", ".js-content-references .js-domain-add", Ra), u("click", ".js-content-references .js-close", function(e) {
                const t = d(e.target, "li"),
                    n = t.parentElement;
                n && (n.removeChild(t), 0 === b(n, "li").length && (d(n, ".Box").hidden = !0), _a())
            }), j(".js-issue-boost-form", async function(e, t) {
                const n = v(e, ".js-issue-boost-error");
                let s;
                n.hidden = !0;
                try {
                    s = await t.html()
                } catch (o) {
                    n.hidden = !1;
                    const t = v(e, ".js-issue-boost-value"),
                        s = p(t, "data-original-boost-value");
                    return void(t.textContent = s)
                }
                d(e, ".js-issue-boost-container").replaceWith(s.html)
            });
            let Ba = null;

            function Na(e, t, n) {
                return e > n ? n : e < t ? t : e
            }
            async function Pa({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/issues/issue-link.js:11");
                const t = e.getAttribute("data-url");
                if (!t) return;
                const n = e.getAttribute("data-id") || "",
                    s = e.textContent,
                    o = document.querySelectorAll(`.js-issue-link[data-id='${n}']`);
                for (const i of o) i.removeAttribute("data-url");
                try {
                    Fa(o, `${s}, ${(await O(t)).title}`)
                } catch (r) {
                    const t = (null != r.response ? r.response.status : void 0) || 500;
                    Fa(o, (() => {
                        switch (t) {
                            case 404:
                                return e.getAttribute("data-permission-text");
                            default:
                                return e.getAttribute("data-error-text")
                        }
                    })() || "")
                }
            }

            function Fa(e, t) {
                for (const s of e)(n = s).getAttribute("data-hovercard-url") && n.closest("[data-issue-and-pr-hovercards-enabled]") || s.classList.add("tooltipped", "tooltipped-ne"), s.setAttribute("aria-label", t);
                var n
            }
            u("click", ".js-issue-boost-button", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/issues/issue-boosts.js:41");
                e.preventDefault();
                const n = t.form;
                if (!n) throw new Error("invariant: app/assets/modules/github/issues/issue-boosts.js:44");
                const s = v(n, ".js-issue-boost-value"),
                    o = parseInt(p(s, "data-original-boost-value"), 10),
                    r = parseInt(t.value, 10),
                    i = parseInt(p(n, "data-min-modifier"), 10),
                    a = parseInt(p(n, "data-max-modifier"), 10),
                    c = parseInt(p(n, "data-min-value"), 10),
                    l = parseInt(p(n, "data-max-value"), 10),
                    u = v(n, ".js-issue-boost-modifier", HTMLInputElement),
                    d = Na(parseInt(u.value, 10) + r, i, a),
                    m = Na(o + d, c, l);
                s.textContent = m.toString(), Ba && clearTimeout(Ba), u.value = d.toString(), t.disabled = m === l && r > 0 || m === c && r < 0, Ba = setTimeout(() => {
                    Ba = null, E(n)
                }, 400)
            }), u("click", ".js-new-issue-boost-button", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/issues/issue-boosts.js:71");
                const n = d(t, ".js-new-issue-boost-container"),
                    s = parseInt(p(n, "data-min"), 10),
                    o = parseInt(p(n, "data-max"), 10),
                    r = parseInt(t.value, 10),
                    i = v(n, ".js-issue-boost-value", HTMLInputElement),
                    a = Na(parseInt(i.value, 10) + r, s, o),
                    c = a === o,
                    l = a === s;
                if (v(n, ".js-issue-boost-value-display").textContent = a.toString(), i.value = a.toString(), t.disabled = c && r > 0 || l && r < 0, r < 0) {
                    v(n, ".js-new-issue-increase-boost-button", HTMLButtonElement).disabled = c
                } else {
                    v(n, ".js-new-issue-decrease-boost-button", HTMLButtonElement).disabled = l
                }
            }), r(".js-issue-link", {
                subscribe: e => q(e, "mouseenter", Pa)
            });
            var Oa = n(function(e, t) {
                var n;
                n = function() {
                    var e = null,
                        t = {};
                    r("monochrome", null, [
                        [0, 0],
                        [100, 0]
                    ]), r("red", [-26, 18], [
                        [20, 100],
                        [30, 92],
                        [40, 89],
                        [50, 85],
                        [60, 78],
                        [70, 70],
                        [80, 60],
                        [90, 55],
                        [100, 50]
                    ]), r("orange", [19, 46], [
                        [20, 100],
                        [30, 93],
                        [40, 88],
                        [50, 86],
                        [60, 85],
                        [70, 70],
                        [100, 70]
                    ]), r("yellow", [47, 62], [
                        [25, 100],
                        [40, 94],
                        [50, 89],
                        [60, 86],
                        [70, 84],
                        [80, 82],
                        [90, 80],
                        [100, 75]
                    ]), r("green", [63, 178], [
                        [30, 100],
                        [40, 90],
                        [50, 85],
                        [60, 81],
                        [70, 74],
                        [80, 64],
                        [90, 50],
                        [100, 40]
                    ]), r("blue", [179, 257], [
                        [20, 100],
                        [30, 86],
                        [40, 80],
                        [50, 74],
                        [60, 60],
                        [70, 52],
                        [80, 44],
                        [90, 39],
                        [100, 35]
                    ]), r("purple", [258, 282], [
                        [20, 100],
                        [30, 87],
                        [40, 79],
                        [50, 70],
                        [60, 65],
                        [70, 59],
                        [80, 52],
                        [90, 45],
                        [100, 42]
                    ]), r("pink", [283, 334], [
                        [20, 100],
                        [30, 90],
                        [40, 86],
                        [60, 84],
                        [80, 80],
                        [90, 75],
                        [100, 73]
                    ]);
                    var n = function(r) {
                        if (void 0 !== (r = r || {}).seed && null !== r.seed && r.seed === parseInt(r.seed, 10)) e = r.seed;
                        else if ("string" == typeof r.seed) e = function(e) {
                            for (var t = 0, n = 0; n !== e.length && !(t >= Number.MAX_SAFE_INTEGER); n++) t += e.charCodeAt(n);
                            return t
                        }(r.seed);
                        else {
                            if (void 0 !== r.seed && null !== r.seed) throw new TypeError("The seed value must be an integer or string");
                            e = null
                        }
                        var c, l, u;
                        if (null !== r.count && void 0 !== r.count) {
                            var d = r.count,
                                m = [];
                            for (r.count = null; d > m.length;) e && r.seed && (r.seed += 1), m.push(n(r));
                            return r.count = d, m
                        }
                        return c = function(e) {
                                var n = o(function(e) {
                                    if ("number" == typeof parseInt(e)) {
                                        var n = parseInt(e);
                                        if (n < 360 && n > 0) return [n, n]
                                    }
                                    if ("string" == typeof e)
                                        if (t[e]) {
                                            var s = t[e];
                                            if (s.hueRange) return s.hueRange
                                        } else if (e.match(/^#?([0-9A-F]{3}|[0-9A-F]{6})$/i)) {
                                        var o = function(e) {
                                            e = 3 === (e = e.replace(/^#/, "")).length ? e.replace(/(.)/g, "$1$1") : e;
                                            var t = parseInt(e.substr(0, 2), 16) / 255,
                                                n = parseInt(e.substr(2, 2), 16) / 255,
                                                s = parseInt(e.substr(4, 2), 16) / 255,
                                                o = Math.max(t, n, s),
                                                r = o - Math.min(t, n, s),
                                                i = o ? r / o : 0;
                                            switch (o) {
                                                case t:
                                                    return [(n - s) / r % 6 * 60 || 0, i, o];
                                                case n:
                                                    return [60 * ((s - t) / r + 2) || 0, i, o];
                                                case s:
                                                    return [60 * ((t - n) / r + 4) || 0, i, o]
                                            }
                                        }(e)[0];
                                        return [o, o]
                                    }
                                    return [0, 360]
                                }(e.hue));
                                n < 0 && (n = 360 + n);
                                return n
                            }(r), l = function(e, t) {
                                if ("monochrome" === t.hue) return 0;
                                if ("random" === t.luminosity) return o([0, 100]);
                                var n = function(e) {
                                        return s(e).saturationRange
                                    }(e),
                                    r = n[0],
                                    i = n[1];
                                switch (t.luminosity) {
                                    case "bright":
                                        r = 55;
                                        break;
                                    case "dark":
                                        r = i - 10;
                                        break;
                                    case "light":
                                        i = 55
                                }
                                return o([r, i])
                            }(c, r), u = function(e, t, n) {
                                var r = function(e, t) {
                                        for (var n = s(e).lowerBounds, o = 0; o < n.length - 1; o++) {
                                            var r = n[o][0],
                                                i = n[o][1],
                                                a = n[o + 1][0],
                                                c = n[o + 1][1];
                                            if (t >= r && t <= a) {
                                                var l = (c - i) / (a - r),
                                                    u = i - l * r;
                                                return l * t + u
                                            }
                                        }
                                        return 0
                                    }(e, t),
                                    i = 100;
                                switch (n.luminosity) {
                                    case "dark":
                                        i = r + 20;
                                        break;
                                    case "light":
                                        r = (i + r) / 2;
                                        break;
                                    case "random":
                                        r = 0, i = 100
                                }
                                return o([r, i])
                            }(c, l, r),
                            function(e, t) {
                                switch (t.format) {
                                    case "hsvArray":
                                        return e;
                                    case "hslArray":
                                        return a(e);
                                    case "hsl":
                                        var n = a(e);
                                        return "hsl(" + n[0] + ", " + n[1] + "%, " + n[2] + "%)";
                                    case "hsla":
                                        var s = a(e),
                                            o = t.alpha || Math.random();
                                        return "hsla(" + s[0] + ", " + s[1] + "%, " + s[2] + "%, " + o + ")";
                                    case "rgbArray":
                                        return i(e);
                                    case "rgb":
                                        var r = i(e);
                                        return "rgb(" + r.join(", ") + ")";
                                    case "rgba":
                                        var c = i(e),
                                            o = t.alpha || Math.random();
                                        return "rgba(" + c.join(", ") + ", " + o + ")";
                                    default:
                                        return function(e) {
                                            var t = i(e);

                                            function n(e) {
                                                var t = e.toString(16);
                                                return 1 == t.length ? "0" + t : t
                                            }
                                            return "#" + n(t[0]) + n(t[1]) + n(t[2])
                                        }(e)
                                }
                            }([c, l, u], r)
                    };

                    function s(e) {
                        for (var n in e >= 334 && e <= 360 && (e -= 360), t) {
                            var s = t[n];
                            if (s.hueRange && e >= s.hueRange[0] && e <= s.hueRange[1]) return t[n]
                        }
                        return "Color not found"
                    }

                    function o(t) {
                        if (null === e) return Math.floor(t[0] + Math.random() * (t[1] + 1 - t[0]));
                        var n = t[1] || 1,
                            s = t[0] || 0,
                            o = (e = (9301 * e + 49297) % 233280) / 233280;
                        return Math.floor(s + o * (n - s))
                    }

                    function r(e, n, s) {
                        var o = s[0][0],
                            r = s[s.length - 1][0],
                            i = s[s.length - 1][1],
                            a = s[0][1];
                        t[e] = {
                            hueRange: n,
                            lowerBounds: s,
                            saturationRange: [o, r],
                            brightnessRange: [i, a]
                        }
                    }

                    function i(e) {
                        var t = e[0];
                        0 === t && (t = 1), 360 === t && (t = 359), t /= 360;
                        var n = e[1] / 100,
                            s = e[2] / 100,
                            o = Math.floor(6 * t),
                            r = 6 * t - o,
                            i = s * (1 - n),
                            a = s * (1 - r * n),
                            c = s * (1 - (1 - r) * n),
                            l = 256,
                            u = 256,
                            d = 256;
                        switch (o) {
                            case 0:
                                l = s, u = c, d = i;
                                break;
                            case 1:
                                l = a, u = s, d = i;
                                break;
                            case 2:
                                l = i, u = s, d = c;
                                break;
                            case 3:
                                l = i, u = a, d = s;
                                break;
                            case 4:
                                l = c, u = i, d = s;
                                break;
                            case 5:
                                l = s, u = i, d = a
                        }
                        var m = [Math.floor(255 * l), Math.floor(255 * u), Math.floor(255 * d)];
                        return m
                    }

                    function a(e) {
                        var t = e[0],
                            n = e[1] / 100,
                            s = e[2] / 100,
                            o = (2 - n) * s;
                        return [t, Math.round(n * s / (o < 1 ? o : 2 - o) * 1e4) / 100, o / 2 * 100]
                    }
                    return n
                }(), e && e.exports && (t = e.exports = n), t.randomColor = n
            });
            Oa.randomColor;

            function Ua(e, t) {
                const n = function(e) {
                    const t = "string" == typeof e ? parseInt(e.replace("#", ""), 16) : e;
                    return +((299 * (t >> 16 & 255) + 587 * (t >> 8 & 255) + 114 * (255 & t)) / 1e3 / 255).toFixed(2)
                }(t);
                null != n && (n < .6 ? (e.classList.remove("text-gray-dark"), e.classList.add("text-white")) : (e.classList.remove("text-white"), e.classList.add("text-gray-dark")))
            }

            function Wa(e, t) {
                let n = t;
                "#" !== n.charAt(0) && (n = `#${n}`), e.style.backgroundColor = n;
                const s = e.querySelector(".js-new-label-color-icon");
                s && Ua(s, t)
            }

            function za(e, t) {
                e.blur();
                const n = d(e, "form");
                v(n, ".js-new-label-color-input", HTMLInputElement).value = t, Wa(v(n, ".js-new-label-color", HTMLButtonElement), t)
            }

            function Va(e, t, n) {
                const s = t.querySelector(e);
                s && (n ? function(e, t) {
                    d(e, ".js-label-error-container").classList.add("errored"), e.textContent = t, e.hidden = !1
                }(s, n[0]) : function(e) {
                    d(e, ".js-label-error-container").classList.remove("errored"), e.hidden = !0
                }(s))
            }

            function Ka(e, t) {
                Va(".js-label-name-error", e, t.name), Va(".js-label-description-error", e, t.description), Va(".js-label-color-error", e, t.color)
            }

            function Ya(e) {
                Va(".js-label-name-error", e, null), Va(".js-label-description-error", e, null), Va(".js-label-color-error", e, null)
            }
            async function Xa(e) {
                const t = e.closest(".js-label-preview-container");
                if (!t) return;
                const n = d(e, ".js-label-form", HTMLFormElement),
                    s = n.querySelector(".js-new-label-error"),
                    o = n.getAttribute("data-label-id"),
                    r = v(t, ".js-label-preview", HTMLElement),
                    i = function(e, t) {
                        let n = v(e, ".js-new-label-name-input", HTMLInputElement).value.trim();
                        return n.length < 1 && (n = p(t, "data-default-name")), n
                    }(n, r),
                    a = function(e) {
                        const t = v(e, ".js-new-label-color-input", HTMLInputElement);
                        return t.checkValidity() ? t.value.trim().replace(/^#/, "") : "ededed"
                    }(n),
                    c = function(e) {
                        let t = null;
                        const n = e.querySelector(".js-new-label-description-input");
                        return n instanceof HTMLInputElement && n.value.trim().length > 0 && (t = n.value.trim()), t
                    }(n),
                    l = function(e, t, n, s, o) {
                        const r = new URL(`${e}${encodeURIComponent(t)}`, window.location.origin),
                            i = new URLSearchParams(r.search.slice(1));
                        return i.append("color", n), s && i.append("description", s), o && i.append("id", o), r.search = i.toString(), r.toString()
                    }(p(r, "data-url-template"), i, a, c, o);
                if (t.hasAttribute("data-last-preview-url")) {
                    if (l === p(t, "data-last-preview-url")) return
                }
                let u;
                try {
                    u = await B(document, l)
                } catch (m) {
                    const e = await m.response.json();
                    return Ka(n, e), void(s && (s.textContent = e.message, s.hidden = !1))
                }
                s && (s.textContent = "", s.hidden = !0), Ya(n), r.innerHTML = "", r.appendChild(u), t.setAttribute("data-last-preview-url", l)
            }

            function Ja(e, t) {
                d(e, ".js-details-container").classList.toggle("is-empty", t)
            }

            function Ga(e) {
                const t = v(document, ".js-labels-count"),
                    n = ye(t.textContent) + e;
                t.textContent = Ee(n);
                const s = v(document, ".js-labels-label");
                return Le(n, s), n
            }

            function Qa(e) {
                const t = e.querySelector(".js-new-label-name-input");
                if (!t) return;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:362");
                const n = v(e, ".js-new-label-color-input", HTMLInputElement);
                let s = Oa();
                if (n.value.length > 0)
                    for (; n.value === s;) s = Oa();
                n.value = s;
                const o = v(e, ".js-new-label-color", HTMLButtonElement);
                Wa(o, s);
                const r = v(document, ".js-new-label-name").textContent;
                $(t, r), Dr(t), Xa(o)
            }
            g(".js-label-filter-field", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:230");
                const n = d(t, "details-menu").querySelector(".js-new-label-name");
                if (!n) return;
                const s = t.value.trim();
                n.textContent = s
            }), u("filterable:change", ".js-filterable-issue-labels", function(e) {
                const t = d(e.currentTarget, "details-menu"),
                    n = t.querySelector(".js-add-label-button");
                if (!n) return;
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:247");
                const s = e.detail.inputField.value.trim().toLowerCase(),
                    o = b(t, 'input[name="issue[labels][]"]').some(e => {
                        return (e.getAttribute("data-label-name") || "").toLowerCase() === s
                    });
                n.hidden = 0 === s.length || o
            }), h(".js-new-label-color-input", function(e) {
                const t = d(e, "form"),
                    n = v(t, ".js-new-label-swatches");
                n.hidden = !1, e.addEventListener("blur", function() {
                    n.hidden = !0
                }, {
                    once: !0
                })
            }), g(".js-new-label-color-input", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:272");
                let n = t.value.trim();
                if (!(n.length < 1))
                    if (0 !== n.indexOf("#") && (n = `#${n}`, t.value = n), t.checkValidity()) {
                        t.classList.remove("text-red");
                        const e = d(t, "form");
                        Wa(v(e, ".js-new-label-color", HTMLButtonElement), n)
                    } else t.classList.add("text-red")
            }), m("keyup", ".js-new-label-color-input", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:296");
                let n = t.value.trim();
                if (0 !== n.indexOf("#") && (n = `#${n}`, t.value = n), t.checkValidity()) {
                    const e = d(t, "form");
                    Wa(v(e, ".js-new-label-color", HTMLButtonElement), n)
                }
                L(t, "change", !1), Ya(d(t, "form", HTMLFormElement))
            }), m("keyup", ".js-new-label-description-input", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:316");
                const n = t.form;
                if (!n) throw new Error("invariant: app/assets/modules/github/issues/labels.js:318");
                Ya(n)
            }), m("keyup", ".js-new-label-color-input", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:323");
                const n = t.form;
                if (!n) throw new Error("invariant: app/assets/modules/github/issues/labels.js:325");
                Ya(n)
            }), u("click", ".js-new-label-color", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:332");
                za(t, Oa()), Xa(t)
            }), u("mousedown", ".js-new-label-color-swatch", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:339");
                za(t, p(t, "data-color")), Xa(t), d(t, ".js-new-label-swatches").hidden = !0
            }), u("toggle", ".js-new-label-modal", function(e) {
                e.target.hasAttribute("open") && Qa(e.target)
            }, {
                capture: !0
            }), j(".js-new-label-modal-form", async function(e, t) {
                const n = v(e, ".js-new-label-error");
                let s;
                try {
                    s = await t.html()
                } catch (a) {
                    const e = a.response.json;
                    n.textContent = e.message, n.hidden = !1
                }
                if (!s) return;
                n.hidden = !0, v(document, ".js-new-label-modal").removeAttribute("open");
                const o = v(document, ".js-filterable-issue-labels"),
                    r = s.html.querySelector("input");
                o.prepend(s.html), r && r.dispatchEvent(new Event("change", {
                    bubbles: !0
                }));
                const i = v(document, ".js-label-filter-field", HTMLInputElement);
                i.value = i.defaultValue, i.focus()
            }), u("click", ".js-edit-label-cancel", function(e) {
                const t = d(e.target, "form", HTMLFormElement);
                Ya(t), t.reset();
                const n = v(t, ".js-new-label-color-input", HTMLInputElement),
                    s = n.value;
                v(t, ".js-new-label-color", HTMLButtonElement).style.backgroundColor = s, Rr(t), Xa(n);
                const o = e.currentTarget.closest(".js-labels-list-item");
                if (o) {
                    v(o, ".js-update-label", HTMLElement).classList.add("d-none");
                    const e = o.querySelector(".js-label-preview");
                    if (e) {
                        e.classList.add("d-none"), v(o, ".js-label-link", HTMLElement).classList.remove("d-none")
                    }
                    const t = o.querySelectorAll(".js-hide-on-label-edit.d-none");
                    for (const n of t) n.classList.remove("d-none")
                }
            }), j(".js-update-label", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (s) {
                    return void Ka(e, s.response.json)
                }
                Ya(e), d(e, ".js-labels-list-item").replaceWith(n.html)
            }), j(".js-create-label", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (o) {
                    return void Ka(e, o.response.json)
                }
                e.reset(), Ya(e), v(document, ".js-label-list").prepend(n.html), Ga(1), Ja(e, !1), za(v(e, ".js-new-label-color", HTMLButtonElement), Oa()), Xa(v(e, ".js-new-label-name-input", HTMLInputElement)), Rr(e);
                const s = e.closest(".js-details-container");
                s instanceof HTMLElement && je(s)
            }), u("click", ".js-details-target-new-label", function() {
                const e = v(document, ".js-create-label");
                v(e, ".js-new-label-name-input", HTMLInputElement).focus()
            }), u("click", ".js-edit-label", function(e) {
                const t = d(e.currentTarget, ".js-labels-list-item"),
                    n = v(t, ".js-update-label", HTMLElement);
                n.classList.remove("d-none"), v(n, ".js-new-label-name-input", HTMLInputElement).focus();
                const s = t.querySelector(".js-label-preview");
                if (s) {
                    s.classList.remove("d-none"), v(t, ".js-label-link", HTMLElement).classList.add("d-none")
                }
                const o = b(t, ".js-hide-on-label-edit", HTMLElement);
                for (const r of o) r.classList.add("d-none")
            }), j(".js-delete-label", async function(e, t) {
                const n = d(e, ".js-labels-list-item");
                v(n, ".js-label-delete-spinner").hidden = !1, await t.text(), Ja(e, 0 === Ga(-1)), n.remove()
            });
            const Za = y(function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:207");
                Xa(t)
            }, 500);

            function ec() {
                const e = v(document, ".js-reveal-custom-thread-settings", HTMLInputElement).checked,
                    t = !document.querySelector(".js-custom-thread-notification-option:checked"),
                    n = v(document, ".js-custom-thread-settings"),
                    s = v(document, "[data-custom-option-required-text]", HTMLInputElement),
                    o = e && t ? p(s, "data-custom-option-required-text") : "";
                s.setCustomValidity(o), n.hidden = !e
            }

            function tc(e) {
                e instanceof HTMLFormElement ? E(e) : sc(e)
            }

            function nc({
                currentTarget: e
            }) {
                if (!(e instanceof Element)) throw new Error("invariant: app/assets/modules/github/issues/sidebar.js:22");
                const t = e.closest(".js-issue-sidebar-form") || e.querySelector(".js-issue-sidebar-form");
                if (!t) throw new Error("invariant: app/assets/modules/github/issues/sidebar.js:24");
                tc(t)
            }
            async function sc(e, t = "post", n) {
                const s = function(e) {
                    const t = d(e, "form", HTMLFormElement),
                        n = Me(t),
                        s = new FormData;
                    for (const [o, r] of n) e.contains(oc(t, o, r)) && s.append(o, r);
                    return s
                }(e);
                n && s.append(n.name, n.value);
                let o = e.getAttribute("data-authenticity-token");
                if (null == o) {
                    const t = d(e, "form", HTMLFormElement).elements.namedItem("authenticity_token");
                    t instanceof HTMLInputElement && (o = t.value)
                }
                if (!o) throw new Error("invariant: app/assets/modules/github/issues/sidebar.js:120");
                s.append("authenticity_token", o);
                const r = p(e, "data-url"),
                    i = await S(r, {
                        method: t,
                        body: s
                    });
                ! function(e, t) {
                    e.replaceWith(Ae(document, t))
                }(d(e, ".js-discussion-sidebar-item"), i)
            }

            function oc(e, t, n) {
                for (const s of e.elements)
                    if ((s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement || s instanceof HTMLButtonElement) && s.name === t && s.value === n) return s
            }
            let rc;

            function ic(e) {
                if (ac(), !e) return;
                const t = document.createElement("div");
                t.innerHTML = e, document.body && document.body.append(t);
                const n = t.querySelector("button");
                n && n.addEventListener("click", ac, {
                    once: !0
                }), document.addEventListener("keydown", e => {
                    "Escape" === e.key && ac() && e.stopImmediatePropagation()
                }), rc = t
            }

            function ac() {
                return !!rc && (rc.remove(), rc = null, !0)
            }
            u("suggester:complete", ".js-new-label-name-input", Za), g(".js-new-label-name-input", Za), g(".js-new-label-description-input", Za), g(".js-new-label-color-input", Za), m("keypress", ".js-new-label-name-input", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:552");
                const n = parseInt(t.getAttribute("data-maxlength"));
                se(t.value) >= n && e.preventDefault()
            }), u("click", ".js-issues-label-select-menu-item", function(e) {
                if (!(e instanceof MouseEvent)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:561");
                e.altKey && (e.preventDefault(), e.stopPropagation(), window.location = p(e.currentTarget, "data-excluded-url"))
            }), m("keydown", ".js-issues-label-select-menu-item", function(e) {
                if (!(e instanceof KeyboardEvent)) throw new Error("invariant: app/assets/modules/github/issues/labels.js:568");
                if ("Enter" !== e.key) return;
                if (!e.altKey) return;
                const t = e.currentTarget;
                e.preventDefault(), e.stopPropagation(), t instanceof HTMLAnchorElement && (window.location = p(t, "data-excluded-url"))
            }), u("click", ".js-open-label-creation-modal", async function(e) {
                e.stopImmediatePropagation(), Qa(await ne({
                    content: v(document, ".js-label-creation-template", HTMLTemplateElement).content.cloneNode(!0),
                    detailsClass: "js-new-label-modal"
                }))
            }, {
                capture: !0
            }), ce(function({
                newURL: e
            }) {
                const t = e.match(/\/issues#issue\/(\d+)$/);
                if (t) {
                    const n = t[1];
                    window.location = e.replace(/\/?#issue\/.+/, `/${n}`)
                }
            }), ce(function({
                newURL: e
            }) {
                const t = e.match(/\/issues#issue\/(\d+)\/comment\/(\d+)$/);
                if (t) {
                    const n = t[1],
                        s = t[2];
                    window.location = e.replace(/\/?#issue\/.+/, `/${n}#issuecomment-${s}`)
                }
            }), r(".js-issue-row .js-issues-list-check:checked", {
                add(e) {
                    d(e, ".js-issue-row").classList.add("selected")
                },
                remove(e) {
                    d(e, ".js-issue-row").classList.remove("selected")
                }
            }), u("navigation:keydown", ".js-issue-row", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/issues/list.js:25");
                "x" === e.detail.hotkey && (! function(e) {
                    const t = e.querySelector(".js-issues-list-check");
                    t instanceof HTMLInputElement && $(t, !t.checked)
                }(e.currentTarget), e.preventDefault(), e.stopPropagation())
            }), h("#js-issues-search", function(e) {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/issues/list.js:37");
                e.value = e.value
            }), u("details-menu-select", ".js-saved-reply-menu", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/issues/replies.js:9");
                const t = v(e.detail.relatedTarget, ".js-saved-reply-body").textContent.trim(),
                    n = d(e.target, ".js-previewable-comment-form"),
                    s = v(n, "textarea.js-comment-field", HTMLTextAreaElement);
                Te(s, t), setTimeout(() => s.focus(), 0)
            }, {
                capture: !0
            }), m("keydown", ".js-saved-reply-shortcut-comment-field", function(e) {
                if ("Control+." === Y(e)) {
                    if (!(e.target instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/issues/replies.js:21");
                    const t = d(e.target, ".js-previewable-comment-form");
                    v(t, ".js-saved-reply-container").setAttribute("open", ""), e.preventDefault(), ve({
                        category: "Markdown Toolbar",
                        action: "shortcut",
                        label: "saved reply"
                    })
                }
            }), m("keydown", ".js-saved-reply-filter-input", function(e) {
                if (/^Control\+[1-9]$/.test(Y(e))) {
                    if (!(e.target instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/issues/replies.js:35");
                    const t = d(e.target, ".js-saved-reply-container").querySelectorAll('[role="menuitem"]'),
                        n = Number(e.key),
                        s = t[n - 1];
                    s && (s.click(), e.preventDefault(), ve({
                        category: "Saved Replies",
                        action: "shortcut",
                        label: `saved reply number ${n}`
                    }))
                }
            }), u("change", ".js-thread-notification-setting", ec), u("change", ".js-custom-thread-notification-option", ec), u("reset", ".js-custom-thread-settings-form", ec), u("details-menu-selected", ".js-discussion-sidebar-menu", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/issues/sidebar.js:30");
                const t = e.detail.relatedTarget,
                    n = e.currentTarget,
                    s = d(t, ".js-issue-sidebar-form"),
                    o = n.hasAttribute("data-multiple");
                if (t.hasAttribute("data-clear-assignees")) {
                    const e = b(n, 'input[name="issue[user_assignee_ids][]"]:checked', HTMLInputElement);
                    for (const t of e) t.disabled = !1, t.checked = !1;
                    tc(s)
                } else o ? d(n, "details").addEventListener("toggle", nc, {
                    once: !0
                }) : tc(s)
            }, {
                capture: !0
            }), j(".js-issue-sidebar-form", async function(e, t) {
                const n = await t.html();
                if (!(e.parentNode instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/issues/sidebar.js:63");
                d(e, ".js-discussion-sidebar-item").replaceWith(n.html)
            }), u("click", "div.js-issue-sidebar-form .js-suggested-reviewer", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/issues/sidebar.js:69");
                sc(d(t, ".js-issue-sidebar-form"), "post", {
                    name: t.name,
                    value: t.value
                }), e.preventDefault()
            }), u("click", "div.js-issue-sidebar-form .js-issue-assign-self", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/issues/sidebar.js:80");
                sc(d(t, ".js-issue-sidebar-form"), "post", {
                    name: t.name,
                    value: t.value
                }), e.preventDefault()
            }), u("click", ".js-issue-unassign-self", function(e) {
                sc(d(e.currentTarget, ".js-issue-sidebar-form"), "delete"), e.preventDefault()
            }), j(".js-pages-preview-toggle-form", async function(e, t) {
                const n = await t.json();
                v(e, "button.btn").textContent = n.json.new_button_value
            }), u("change", ".js-project-menu-checkbox", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/issues/sidebar.js:135");
                const n = d(t, ".js-project-menu-container");
                for (const s of b(n, ".js-project-menu-checkbox", HTMLInputElement))
                    if (s !== t && s.name === t.name) {
                        s.checked = t.checked;
                        const e = s.closest(".js-navigation-item");
                        e && e.classList.toggle("selected", t.checked);
                        const n = s.closest("label[aria-checked]");
                        n && n.setAttribute("aria-checked", t.checked.toString())
                    }
            }), u("click", "div.js-project-column-menu-container .js-project-column-menu-item", async function(e) {
                const t = e.currentTarget;
                ! function(e) {
                    const t = d(e, ".js-project-column-menu-dropdown"),
                        n = v(t, ".js-project-column-menu-summary"),
                        s = p(e, "data-column-name");
                    n.textContent = s
                }(t);
                const n = p(t, "data-url"),
                    s = p(t, "data-authenticity-token"),
                    o = p(t, "data-card-id"),
                    r = new FormData;
                r.append("authenticity_token", s), r.append("card_id", o), r.append("use_automation_prioritization", "true"), e.preventDefault(), await c(n, {
                    method: "put",
                    body: r
                });
                const i = document.activeElement,
                    a = d(t, ".js-project-column-menu-dropdown");
                if (i && a.contains(i)) try {
                    i.blur()
                } catch (Ah) {}
            }), u("click", ".js-prompt-dismiss", function(e) {
                d(e.currentTarget, ".js-prompt").remove()
            }), u("click", ".js-dismiss-issue-xrefs-new-feature-notice", async function(e) {
                const t = p(e.currentTarget, "data-url"),
                    n = new FormData;
                n.append("notice", "issue_xrefs_new_feature"), await S(ke(t, {
                    method: "post",
                    body: n
                }));
                const s = document.querySelectorAll(".js-issue-xrefs-new-feature-notice");
                for (const r of s) r.remove();
                const o = document.querySelector(".js-enable-hovercard");
                o && o.setAttribute("data-issue-and-pr-hovercards-enabled", "")
            }), j(".js-new-issue-form", async function(e, t) {
                ic(v(document, ".js-logbook-toast").innerHTML);
                const n = await t.json();
                n.json.toast ? ic(n.json.toast) : n.json.url && (window.location = n.json.url)
            });
            const cc = new WeakMap,
                lc = new WeakMap;
            u("change", ".js-issues-list-check", function() {
                const e = !!document.querySelector(".js-issues-list-check:checked");
                v(document, "#js-issues-toolbar").classList.toggle("triage-mode", e);
                for (const t of document.querySelectorAll(".js-issue-triage-menu")) cc.set(t, !0)
            }), u("toggle", ".js-issue-triage-menu", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) throw new Error("invariant: app/assets/modules/github/issues/triage.js:31");
                t.hasAttribute("open") ? function(e) {
                    if (!cc.has(e)) return;
                    const t = v(document, ".js-triage-loader-template", HTMLTemplateElement),
                        n = v(e, ".js-triage-deferred-content");
                    n.innerHTML = "", n.append(t.content.cloneNode(!0));
                    const s = function(e, t) {
                        const n = new URL(e, window.location.origin),
                            s = new URLSearchParams(n.search);
                        for (const [o, r] of t) s.append(o, r);
                        return n.search = s.toString(), n.toString()
                    }(p(e, "data-url"), b(document, ".js-issues-list-check:checked", HTMLInputElement).map(e => [e.name, e.value]));
                    v(n, "include-fragment").setAttribute("src", s), cc.delete(e)
                }(t) : async function(e) {
                    const t = v(e, "form", HTMLFormElement);
                    if (!lc.has(t)) return;
                    ! function(e, t) {
                        const n = d(e, ".js-issues-toolbar-triage");
                        v(n, ".js-issue-triage-spinner").hidden = !t, v(n, ".js-issue-triage-error").hidden = !0
                    }(e, !0);
                    try {
                        const s = await O(t.action, {
                            method: t.method,
                            body: new FormData(t)
                        });
                        lc.delete(t), await te(s.job.url, {
                            headers: {
                                accept: "application/json"
                            }
                        }), V({
                            url: window.location.href,
                            container: v(document, "#js-repo-pjax-container"),
                            replace: !0
                        })
                    } catch (n) {
                        ! function(e, t) {
                            const n = d(e, ".js-issues-toolbar-triage");
                            v(n, ".js-issue-triage-spinner").hidden = !0, v(n, ".js-issue-triage-error").hidden = !t
                        }(e, !0)
                    }
                }(t)
            }, {
                capture: !0
            }), u("details-menu-selected", ".js-issue-triage-menu details-menu", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/issues/triage.js:94");
                const t = e.detail.relatedTarget,
                    n = d(t, "form", HTMLFormElement),
                    s = function(e) {
                        const t = "true" === e.getAttribute("aria-checked"),
                            n = e.getAttribute("name") || e.getAttribute("data-name"),
                            s = e.getAttribute("value") || e.getAttribute("data-value");
                        if (!n || !s) throw new Error("invariant: app/assets/modules/github/issues/triage.js:115");
                        const o = document.createElement("input");
                        switch (o.type = "hidden", o.name = n, e.getAttribute("role")) {
                            case "menuitem":
                            case "menuitemradio":
                                o.value = s;
                                break;
                            case "menuitemcheckbox":
                                o.value = t ? s : "0"
                        }
                        return o
                    }(t),
                    o = v(n, ".js-issues-triage-fields"),
                    r = o.querySelector(`[name='${s.name}']`);
                r ? r.replaceWith(s) : o.append(s);
                lc.set(n, !0)
            }, {
                capture: !0
            }), j(".js-undo-issue-event-form", async (e, t) => {
                await t.text();
                const n = p(e, "action");
                e.remove();
                const s = document.querySelectorAll(`.js-undo-issue-event-form[action="${n}"]`);
                for (let o = 0; o < s.length; o++) s[o].remove()
            });
            class uc extends Error {
                constructor(e) {
                    super(e), this.name = "JumpToParseError"
                }
            }
            class dc extends Error {
                constructor(e) {
                    super(e.message), this.name = "JumpToPageViewError", this.stack = e.stack, this.message
                }
            }
            const mc = /^(team|repository|project):[^\/]+\/[^\/]+(\/([^\/]+))?$/,
                fc = "jump_to:page_views";

            function pc(e, t) {
                t.setItem(fc, JSON.stringify(e))
            }

            function gc(e) {
                if (!e) return {};
                const n = e.getItem(fc);
                if (!n) return {};
                let s;
                try {
                    s = JSON.parse(n)
                } catch (Ah) {
                    return t(new uc("Failed to parse jump-to localStorage contents")), pc({}, e), {}
                }
                const o = {};
                for (const r in s)
                    if (r.match(mc)) o[r] = s[r];
                    else {
                        t(new uc("Invalid jump-to pageview map key from localStorage"))
                    }
                return o
            }

            function hc(e) {
                let t;
                const [n, s] = e.name.split("/") || [];
                switch (e.type) {
                    case "Project":
                        if (!e.owner) throw new Error("invariant: suggestion.owner");
                        if (null === e.number || void 0 === e.number) throw new Error("invariant: suggestion.number");
                        t = wc(e.owner.name, `${e.number}`);
                        break;
                    case "Repository":
                        t = vc(n, s);
                        break;
                    case "Team":
                        t = bc(n, s);
                        break;
                    default:
                        throw new Error(`Invalid Suggestion type: ${e.type}`)
                }
                return t
            }

            function bc(e, t) {
                return `team:${e}/${t}`
            }

            function vc(e, t) {
                return `repository:${e}/${t}`
            }

            function wc(e, t) {
                return `project:${e}/${t}`
            }

            function jc(e, t, n) {
                const s = new URL(e, window.location.origin),
                    o = new URLSearchParams(s.search.slice(1));
                o.set("q", t), n && o.set("unscoped_q", t);
                const r = new URLSearchParams(window.location.search).get("type");
                return r && o.set("type", r), s.search = o.toString(), s.toString()
            }
            let yc;

            function Ec(e) {
                return yc || (yc = o(document, "enabled-features").split(",")), -1 !== yc.indexOf(e)
            }
            let Lc = {};

            function Tc(e) {
                const t = p(e, "data-target-type");
                if ("Search" === t) {
                    const e = v(document, ".js-site-search-form", HTMLFormElement),
                        t = e.getAttribute("data-scope-type");
                    t && Mc({
                        dimensions: {
                            scope_id: parseInt(e.getAttribute("data-scope-id") || ""),
                            scope_type: t
                        }
                    }), kc("search")
                } else Mc({
                    dimensions: {
                        target_id: parseInt(e.getAttribute("data-target-id") || ""),
                        target_type: t
                    },
                    measures: {
                        client_rank: parseInt(e.getAttribute("data-client-rank") || ""),
                        server_rank: parseInt(e.getAttribute("data-server-rank") || "")
                    }
                }), kc("click")
            }

            function kc(e) {
                const t = parseInt(o(document, "octolytics-actor-id"));
                if (!t) return !1;
                Lc.dimensions = Lc.dimensions || {}, Lc.dimensions.actor_id = t;
                let n = Lc.dimensions && Lc.dimensions.session_id;
                return ("menu-activation" !== e || !n) && (!("menu-activation" !== e && !n) && ("menu-activation" === e && Mc({
                    dimensions: {
                        session_id: n = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                            const t = 16 * Math.random() | 0,
                                n = "x" === e ? t : 3 & t | 8;
                            return n.toString(16)
                        })
                    }
                }), Lc.event_type = `jump-to-${e}`, !!n && (function(e) {
                    Ec("JUMP_TO_LOGGING") && console.log(JSON.stringify(e));
                    ca(e)
                }(Lc), "menu-deactivation" !== e && "click" !== e && "search" !== e || (Lc = {}), !0)))
            }

            function Mc(e) {
                e.context && (Lc.context = Object.assign(Lc.context || {}, e.context), Lc.dimensions = Object.assign(Lc.dimensions || {}, e.context)), e.dimensions && (Lc.dimensions = Object.assign(Lc.dimensions || {}, e.dimensions)), e.measures && (Lc.measures = Object.assign(Lc.measures || {}, e.measures))
            }

            function Ac(e) {
                v(document, ".js-jump-to-suggestions-container").classList.remove("d-none"), e.classList.add("jump-to-dropdown-visible"), v(document, ".js-jump-to").setAttribute("aria-expanded", "true")
            }

            function xc() {
                v(document, ".js-jump-to-suggestions-container").classList.add("d-none"), v(document, ".js-jump-to-field").classList.remove("jump-to-dropdown-visible"), v(document, ".js-jump-to").setAttribute("aria-expanded", "false"), kc("menu-deactivation")
            }

            function Sc(e) {
                const t = e.form;
                if (!t) throw new Error("invariant: form");
                const n = v(document, ".js-jump-to-suggestions-results-container"),
                    s = e.value.trim(),
                    o = !(!e.form || !e.form.getAttribute("data-scope-type")),
                    r = v(n, ".js-jump-to-scoped-search"),
                    i = v(n, ".js-jump-to-global-search");
                if (r.classList.toggle("d-none", !s || !o), i.classList.toggle("d-none", !s), s && o) {
                    const e = Ic(r, s, jc(p(t, "action"), s, o), !0);
                    n.replaceChild(e, r)
                }
                if (s) {
                    const e = Ic(i, s, jc(p(t, "data-unscoped-search-url"), s, !1), !1);
                    n.replaceChild(e, i)
                }
            }

            function Hc(e, t, n) {
                if (!e.form) return;
                const s = _c(".js-jump-to-suggestions-template-container"),
                    r = document.createDocumentFragment();
                n.length < 1 && !t ? function() {
                    if (!o(document, "user-login")) return;
                    const e = _c(".js-jump-to-no-results-template-container").cloneNode(!0);
                    e instanceof HTMLElement && e.classList.remove("d-none");
                    Cc(e)
                }() : (n.forEach((e, n) => {
                    r.appendChild(function(e, t, n, s) {
                        const o = e.cloneNode(!0);
                        if (!(o instanceof HTMLElement)) throw new Error("invariant: el instanceof HTMLElement");
                        o.id = `jump-to-suggestion-${t.type.toLowerCase()}-${t.databaseId}`;
                        const r = v(o, ".js-jump-to-suggestion-path", HTMLAnchorElement);
                        r.href = t.path, r.setAttribute("data-target-type", t.type), r.setAttribute("data-target-id", `${t.databaseId}`), r.setAttribute("data-client-rank", `${s}`), r.setAttribute("data-server-rank", `${t.rank}`);
                        const i = v(o, ".js-jump-to-suggestion-name");
                        switch (i.textContent = t.name, i.setAttribute("aria-label", t.name), ro(i, n.replace(/\s/g, "")), t.type) {
                            case "Team":
                                {
                                    const e = v(o, ".js-jump-to-suggestion-avatar", HTMLImageElement);e.alt = t.name,
                                    e.src = t.avatarUrl ? t.avatarUrl : "",
                                    e.classList.remove("d-none");
                                    break
                                }
                            case "Project":
                                qc(o, ".js-jump-to-octicon-project");
                                break;
                            case "Repository":
                                qc(o, ".js-jump-to-octicon-repo")
                        }
                        return v(o, ".js-jump-to-badge-jump").classList.remove("d-none"), o
                    }(s, e, t, n))
                }), Cc(r))
            }

            function Cc(e) {
                const t = v(document, ".js-jump-to-suggestions-results-container");
                for (const n of b(t, ".js-jump-to-suggestion")) {
                    if (!n.parentNode) throw new Error("invariant: oldResult.parentNode");
                    n.parentNode.removeChild(n)
                }
                t.appendChild(e)
            }

            function qc(e, t) {
                const n = v(e, ".js-jump-to-octicon"),
                    s = v(n, t, SVGElement);
                n.classList.remove("d-none"), s.classList.remove("d-none")
            }

            function Ic(e, t, n, s) {
                const o = e.cloneNode(!0);
                if (!(o instanceof HTMLElement)) throw new Error("invariant: el instanceof HTMLElement");
                o.id = `jump-to-suggestion-search-${s?"scoped":"global"}`;
                const r = v(o, ".js-jump-to-suggestion-path", HTMLAnchorElement);
                r.href = n, r.setAttribute("data-target-type", "Search");
                const i = v(o, ".js-jump-to-suggestion-name");
                i.textContent = t, i.setAttribute("aria-label", t), qc(o, ".js-jump-to-octicon-search");
                const a = v(o, ".js-jump-to-badge-search");
                return a.classList.remove("d-none"), s ? v(a, ".js-jump-to-badge-search-text-default").classList.remove("d-none") : v(a, ".js-jump-to-badge-search-text-global").classList.remove("d-none"), o
            }

            function _c(e) {
                const t = v(document, ".js-jump-to-suggestions-container"),
                    n = v(t, e).firstElementChild;
                if (!(n instanceof HTMLElement)) throw new Error("invariant: template");
                return n
            }
            const $c = new WeakMap,
                Dc = new WeakMap;

            function Rc(e, t, n) {
                const s = t.toLowerCase(),
                    o = n.text,
                    r = n.score;
                let i = e;
                if (s) {
                    i = [];
                    for (const t of e) {
                        null == $c.get(t) && $c.set(t, o(t));
                        const e = r ? r($c.get(t) || "", s, t) : so($c.get(t) || "", s);
                        Dc.set(t, e), e > 0 && i.push(t)
                    }
                    i.sort(Bc)
                }
                return null != n.limit ? i.slice(0, n.limit) : i
            }

            function Bc(e, t) {
                const n = parseFloat(Dc.get(e)),
                    s = parseFloat(Dc.get(t)),
                    o = $c.get(e) || "",
                    r = $c.get(t) || "";
                return n > s ? -1 : n < s ? 1 : o < r ? -1 : o > r ? 1 : 0
            }
            const Nc = {
                frequency: .6,
                recency: .4
            };

            function Pc(e, t, n) {
                const s = t.get(e) || 0,
                    o = n.get(e) || 0;
                return s * Nc.frequency + o * Nc.recency
            }

            function Fc(e) {
                const t = [...Object.keys(e)].reduce((t, n) => t + e[n].visitCount, 0);
                return new Map(Object.keys(e).map(n => [n, e[n].visitCount / t]))
            }

            function Oc(e) {
                const t = [...Object.keys(e)].sort((t, n) => e[t].lastVisitedAt - e[n].lastVisitedAt),
                    n = t.length;
                return new Map(t.map((e, t) => [e, (t + 1) / n]))
            }

            function Uc(e) {
                return !!(e ? e.closest(".js-jump-to-field") : document.querySelector(".js-jump-to-field"))
            }

            function Wc(e, t) {
                const n = e.value.trim(),
                    s = function(e, t = null) {
                        const n = t || gc(),
                            s = Fc(n),
                            o = Oc(n);
                        return e.map(e => ({
                            suggestion: e,
                            score: Pc(e.pageKey, s, o)
                        })).sort((e, t) => t.score - e.score).map(e => e.suggestion)
                    }(function(e, t, n) {
                        const s = e.replace(/\s/g, ""),
                            o = t.filter(e => e.path !== n);
                        return s ? Rc(o, s, {
                            text: e => e.name
                        }) : o
                    }(n, t, window.location.pathname)),
                    o = s.slice(0, 7);
                Mc({
                    measures: {
                        result_count: s.length,
                        display_count: o.length,
                        filter_count: t.length - s.length
                    },
                    context: {
                        query: n,
                        display_set: o.map(e => [e.type, e.databaseId])
                    }
                }), Hc(e, n, o), kc("menu-activation") || kc("query")
            }
            const zc = /^\/orgs\/([a-z0-9-]+)\/teams\/([\w-]+)/,
                Vc = [/^\/([^\/]+)\/([^\/]+)\/?$/, /^\/([^\/]+)\/([^\/]+)\/blob/, /^\/([^\/]+)\/([^\/]+)\/tree/, /^\/([^\/]+)\/([^\/]+)\/issues/, /^\/([^\/]+)\/([^\/]+)\/pulls?/, /^\/([^\/]+)\/([^\/]+)\/pulse/],
                Kc = [
                    ["organization", /^\/orgs\/([a-z0-9-]+)\/projects\/([0-9-]+)/],
                    ["repository", /^\/([^\/]+)\/([^\/]+)\/projects\/([0-9-]+)/]
                ],
                Yc = 100;

            function Xc(e) {
                return Object.keys(e).length <= Yc ? e : function(e) {
                    const t = Fc(e),
                        n = Oc(e);
                    return Object.keys(e).map(e => ({
                        pageKey: e,
                        score: Pc(e, t, n)
                    })).sort((e, t) => t.score - e.score).map(e => e.pageKey)
                }(e).slice(0, Yc / 2).reduce((t, n) => (t[n] = e[n], t), {})
            }

            function Jc(e, t) {
                const n = gc(t),
                    s = Math.floor(Date.now() / 1e3),
                    o = n[e] || {
                        lastVisitedAt: s,
                        visitCount: 0
                    };
                o.visitCount += 1, o.lastVisitedAt = s, n[e] = o, pc(Xc(n), t)
            }
            const Gc = () => {
                const e = "test-storage-availability";
                try {
                    return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), window.localStorage
                } catch (t) {
                    return null
                }
            };
            let Qc, Zc;
            async function el(e) {
                const t = function(e) {
                        const t = p(e, "data-jump-to-suggestions-path");
                        return window.location.origin + t
                    }(e),
                    n = function() {
                        const e = new FormData;
                        for (const t of Object.keys(gc())) e.append("variables[pageViews][]", t);
                        return e
                    }();
                try {
                    return function(e) {
                        if ("errors" in e.data) return [];
                        if (e.data.errors) return [];
                        let t = 1;
                        const n = [];
                        for (const s of e.data.suggestions.nodes) null != s && (s.rank = t++, s.pageKey = hc(s), "Team" === s.type && (s.name = `@${s.name}`), n.push(s));
                        return n
                    }(await O(ke(t, {
                        method: "POST",
                        body: n
                    })))
                } catch (s) {
                    if (s.response && 422 === s.response.status) return [];
                    throw s
                }
            }
            async function tl(e) {
                const t = e;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/jump-to.js:69");
                ! function(e) {
                    e.classList.add("js-navigation-enable"), e.classList.add("jump-to-field-active")
                }(t), Ac(t), Qc || (Qc = el(t)), Sc(t), nl(t), Wc(t, await Qc)
            }

            function nl(e) {
                const t = e.value.trim(),
                    n = v(document, ".js-jump-to-suggestions-results-container");
                t ? xe(n) : Se(n)
            }
            r(".js-jump-to-field", {
                constructor: HTMLInputElement,
                add(e) {
                    try {
                        ! function(e, t = Gc()) {
                            if (!t) return;
                            const n = e.match(zc);
                            if (n) return void Jc(bc(n[1], n[2]), t);
                            let s, o;
                            for (let r = 0, i = Kc.length; r < i; r++) {
                                const [n, o] = Kc[r];
                                if (s = e.match(o)) {
                                    let e, o;
                                    switch (n) {
                                        case "organization":
                                            e = s[1], o = s[2];
                                            break;
                                        case "repository":
                                            e = `${s[1]}/${s[2]}`, o = s[3]
                                    }
                                    if (!e) throw new Error("invariant: app/assets/modules/github/jump-to/page-views.js:50");
                                    if (!o) throw new Error("invariant: app/assets/modules/github/jump-to/page-views.js:51");
                                    return void Jc(wc(e, o), t)
                                }
                            }
                            for (let r = 0, i = Vc.length; r < i; r++)
                                if (o = e.match(Vc[r])) return void Jc(vc(o[1], o[2]), t)
                        }(window.location.pathname)
                    } catch (Ah) {
                        t(new dc(Ah))
                    }
                    M(e, async function() {
                        Sc(e), nl(e), Wc(e, await Qc)
                    }), document.activeElement && document.activeElement === e && tl(e)
                }
            }), h(".js-jump-to-field", tl), u("navigation:keydown", ".js-site-search-form", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/jump-to.js:85");
                const t = e.currentTarget.querySelector('.js-navigation-item[aria-selected="true"]');
                switch (e.detail.hotkey) {
                    case "Enter":
                        if (t) Tc(v(t, ".js-jump-to-suggestion-path", HTMLElement));
                        else {
                            const t = e.currentTarget;
                            if (!(t instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/jump-to.js:93");
                            E(t)
                        }
                        break;
                    case "Escape":
                        v(e.currentTarget, ".js-jump-to-field", HTMLInputElement).blur(), xc()
                }
            }), u("navigation:focus", ".js-site-search-form", function(e) {
                const t = v(document, ".js-jump-to-field", HTMLInputElement),
                    n = e.target.id;
                t.setAttribute("aria-activedescendant", n)
            }), u("focusout", ".js-jump-to", function() {
                const e = v(document, ".js-jump-to-field", HTMLInputElement);
                Zc = setTimeout(() => {
                    ! function(e) {
                        e.classList.remove("js-navigation-enable"), e.classList.remove("jump-to-field-active")
                    }(e), xc()
                }, 200)
            }), u("focusin", ".js-jump-to", function() {
                clearTimeout(Zc), Ac(v(document, ".js-jump-to-field", HTMLInputElement))
            }), u("click", ".js-jump-to-suggestion-path", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLAnchorElement)) throw new Error("invariant: app/assets/modules/github/jump-to.js:132");
                if ("Search" === t.getAttribute("data-target-type")) {
                    const e = v(document, ".js-jump-to-field", HTMLInputElement);
                    t.href = function(e, t) {
                        const n = new URL(t, window.location.origin),
                            s = new URLSearchParams(n.search.slice(1));
                        return s.get("q") && s.set("q", e), s.get("unscoped_q") && s.set("unscoped_q", e), n.search = s.toString(), n.toString()
                    }(e.value.trim(), t.href)
                }
                Tc(t)
            }), u("submit", ".js-site-search-form", function(e) {
                if (!Uc()) return;
                const t = e.target;
                t.getAttribute("data-scoped-search-url") && Mc({
                    scope_type: t.getAttribute("data-scope-type"),
                    scope_id: t.getAttribute("data-scope-id")
                }), kc("search")
            });
            let sl = 0,
                ol = null;
            const rl = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];

            function il(e) {
                ! function(e) {
                    let t = document.getElementById("konami-overlay");
                    t || ((t = document.createElement("div")).id = "konami-overlay", t.classList.add("konami-overlay"), document && document.body && document.body.appendChild(t));
                    if (!t) return;
                    t.style.background = `rgba(0,0,0,${e+.24})`;
                    const n = 50 * (1 + e),
                        s = (e, t) => e + Math.round(Math.random() * (t - e));
                    for (let o = 0; o < n; o++) {
                        const e = s(0, window.innerHeight),
                            n = s(0, window.innerWidth),
                            o = document.createElement("div");
                        o.classList.add("dot"), o.textContent = `${s(0,1)}`, o.style.fontSize = `${s(1,8)}px`, o.style.color = `rgba(255,255,255,${Math.random()})`, o.style.top = `${e}px`, o.style.left = `${n}px`;
                        const r = s(0, 300);
                        setTimeout(() => t && t.prepend(o), r), setTimeout(() => o.parentNode && o.parentNode.removeChild(o), r + s(100, 500))
                    }
                }((sl = e) / rl.length);
                const t = b(document, ".js-konami-key");
                for (const r of t) r.classList.remove("active"), r.classList.remove("inactive"), r.classList.remove("complete"), r.classList.remove("down");
                const n = t.slice(0, sl),
                    s = t.slice(sl, sl + 1),
                    o = t.slice(sl + 2);
                for (const r of n) r.classList.add("complete");
                for (const r of s) r.classList.add("active");
                for (const r of o) r.classList.add("inactive")
            }

            function al(e) {
                if (!(e.target instanceof Node && He(e.target) || sl >= rl.length || (rl.includes(Y(e)) && (e.preventDefault(), e.stopPropagation()), Y(e) !== rl[sl]))) {
                    const e = document.querySelectorAll(".js-konami-key")[sl];
                    e && e.classList.add("down")
                }
            }

            function cl(e) {
                if (!(e.target instanceof Node && He(e.target) || sl >= rl.length)) {
                    if (Y(e) === rl[sl]) il(sl + 1), sl === rl.length - 1 && function() {
                        const e = document.querySelector(".js-konami-success");
                        e && e.removeAttribute("hidden")
                    }(), sl === rl.length && function() {
                        const e = document.querySelector(".js-konami-form");
                        if (!(e instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/konami/konami.js:133");
                        E(e)
                    }();
                    else {
                        if (!rl.includes(Y(e))) return;
                        il(0)
                    }
                    e.preventDefault(), e.stopPropagation()
                }
            }

            function ll() {
                ol = null, document.removeEventListener("keydown", al), document.removeEventListener("keyup", cl);
                const e = document.getElementById("konami-overlay");
                e && e.parentNode && e.parentNode.removeChild(e)
            }

            function ul(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/length-limited-input-with-warning.js:33");
                const n = parseInt(t.getAttribute("data-input-max-length"), 10),
                    s = parseInt(t.getAttribute("data-warning-length"), 10) || 5,
                    o = t.value.replace(/(\r\n|\n|\r)/g, "\r\n");
                let r = n - o.length;
                if (r <= 0) {
                    let e = o.substr(0, n);
                    e.endsWith("\r") ? (e = e.substr(0, n - 1), r = 1) : r = 0, t.value = e
                }
                const i = p(t, "data-warning-text"),
                    a = d(t, ".js-length-limited-input-container"),
                    c = v(a, ".js-length-limited-input-warning");
                r <= s ? (c.textContent = i.replace(new RegExp("{{remaining}}", "g"), `${r}`), c.classList.remove("d-none")) : (c.textContent = "", c.classList.add("d-none"))
            }

            function dl(e) {
                const t = e.currentTarget,
                    n = v(t, ".js-milestone-edit-cancel"),
                    s = n.getAttribute("data-confirm-changes");
                s && (R(t) ? n.setAttribute("data-confirm", s) : n.removeAttribute("data-confirm"))
            }

            function ml(e, t, n) {
                const s = e.getAttribute("data-direction"),
                    o = fl(t).indexOf(t);
                "up" === s && t.previousElementSibling ? t.previousElementSibling.insertAdjacentElement("beforebegin", t) : "down" === s && t.nextElementSibling && t.nextElementSibling.insertAdjacentElement("afterend", t);
                const r = fl(t).indexOf(t);
                e.focus(), n({
                    oldIndex: o,
                    newIndex: r,
                    item: t
                })
            }

            function fl(e) {
                const t = e.parentElement;
                if (!t) throw new Error("invariant: app/assets/modules/github/sortable-button.js:23");
                return Array.from(t.children)
            }
            u("click", ".js-konami", async function(e) {
                if (e.preventDefault(), ol) return;
                il(5), document.addEventListener("keydown", al), document.addEventListener("keyup", cl);
                const t = `/site/konami?return_to=${e.target.getAttribute("data-return-to")||""}`;
                ol = await ne({
                    content: B(document, t),
                    dialogClass: "kb-konami-dialog container-xl"
                }), il(sl), ol.addEventListener("dialog:remove", ll, {
                    once: !0
                })
            }), u("click", ".js-details-target-new-label", function({
                target: e
            }) {
                if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/labels/maintainer-label-prompt.js:9");
                const t = ks(e, "Popover");
                if (t) {
                    const e = v(t, "form", HTMLFormElement);
                    E(e)
                }
            }), r(".js-length-limited-input", {
                add(e) {
                    e.addEventListener("input", ul), e.addEventListener("change", ul)
                },
                remove(e) {
                    e.removeEventListener("input", ul), e.removeEventListener("change", ul)
                }
            }), r("link[rel=prefetch-viewed]", {
                initialize() {
                    requestIdleCallback(() => {
                        fetch(location.href, {
                            method: "HEAD",
                            credentials: "same-origin",
                            headers: {
                                Purpose: "prefetch-viewed"
                            }
                        })
                    })
                }
            }), u("click", ".js-manage-requests-tabs-item", function({
                currentTarget: e
            }) {
                const t = d(e, ".js-manage-memberships-container");
                v(t, ".js-manage-invitations-tabs-item").classList.remove("selected"), e.classList.add("selected");
                const n = v(t, ".js-manage-invitations-list"),
                    s = v(t, ".js-manage-requests-list");
                n.classList.add("d-none"), s.classList.remove("d-none")
            }), u("click", ".js-manage-invitations-tabs-item", function({
                currentTarget: e
            }) {
                const t = d(e, ".js-manage-memberships-container");
                v(t, ".js-manage-requests-tabs-item").classList.remove("selected"), e.classList.add("selected");
                const n = v(t, ".js-manage-requests-list"),
                    s = v(t, ".js-manage-invitations-list");
                n.classList.add("d-none"), s.classList.remove("d-none")
            }), u("change", ".js-milestone-edit-form", dl), u("click", ".js-milestone-edit-form", dl);
            const pl = new WeakMap;
            u("socket:message", ".js-milestone-issues", async function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/milestone-dragging.js:31");
                const t = e.currentTarget,
                    n = e.detail.data,
                    s = v(t, ".js-milestone-issues-container");
                if ("1" === s.getAttribute("data-is-sorting")) return void s.removeAttribute("data-is-sorting");
                await F();
                const o = document.querySelector(".js-client-uid");
                o instanceof HTMLInputElement && o.value === n.client_uid || async function(e) {
                    if (Ce(e)) return;
                    const t = p(e, "data-url"),
                        n = await B(document, t);
                    qe(document, () => {
                        e.replaceWith(n)
                    })
                }(t)
            }), j(".js-milestone-sort-form", async function(e, t) {
                const n = (await t.json()).json,
                    s = v(e, ".js-milestone-reorder-feedback");
                s.textContent = "", n.error ? v(e, ".js-milestone-changed").classList.remove("d-none") : (v(e, ".js-timestamp", HTMLInputElement).value = n.updated_at, s.textContent = s.getAttribute("data-success-text") || "")
            });
            const gl = y(function(e) {
                const {
                    newIndex: t,
                    item: n
                } = e, s = d(n, ".js-milestone-issues-container"), o = n.getAttribute("data-id") || "", r = function(e, t) {
                    return e.querySelectorAll(".js-draggable-issue")[t]
                }(s, t - 1), i = r && r.getAttribute("data-id"), a = d(s, ".js-milestone-sort-form", HTMLFormElement);
                v(a, ".js-item-id", HTMLInputElement).value = o, v(a, ".js-prev-id", HTMLInputElement).value = i || "", ve({
                    category: "Milestone",
                    action: "reorder",
                    label: "string" == typeof e.trackingLabel ? e.trackingLabel : "drag-and-drop"
                }), s.setAttribute("data-is-sorting", "1"), E(a)
            }, 200);

            function hl(e, t) {
                gl({
                    item: t,
                    newIndex: Array.from(e.querySelectorAll(".js-draggable-issue")).indexOf(t),
                    trackingLabel: "keyboard-shortcut"
                }), Ie(d(t, ".js-navigation-container"), t)
            }

            function bl(e) {
                const t = d(e, ".js-org-insights-hero-container");
                for (const n of t.querySelectorAll("[role=tab]")) n.setAttribute("aria-selected", (n === e).toString());
                for (const n of t.querySelectorAll("[role=tabpanel]")) n.hidden = e.id !== n.getAttribute("aria-labelledby");
                for (const n of b(document, ".js-org-insights-period-selector-link", HTMLAnchorElement)) n.hash = e.hash
            }
            u("click", ".js-draggable-issue .js-sortable-button", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/milestone-dragging.js:102");
                ml(e, d(e, ".js-draggable-issue"), gl)
            }), u("navigation:keydown", ".js-draggable-issues-container .js-draggable-issue", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/milestone-dragging.js:107");
                const t = e.currentTarget,
                    n = d(t, ".js-draggable-issues-container");
                if ("J" === e.detail.hotkey) {
                    const s = t.nextElementSibling;
                    s && (s.after(t), hl(n, t), e.preventDefault(), e.stopPropagation())
                } else if ("K" === e.detail.hotkey) {
                    const s = t.previousElementSibling;
                    s && (s.before(t), hl(n, t), e.preventDefault(), e.stopPropagation())
                }
            }), r(".js-draggable-issues-container", {
                add: function(e) {
                    if (pl.has(e)) return;
                    const t = _e.create(e, {
                        animation: 150,
                        item: ".js-draggable-issue",
                        handle: ".js-drag-handle",
                        onUpdate: gl,
                        chosenClass: "is-dragging"
                    });
                    pl.set(e, t)
                },
                remove: function(e) {
                    const t = pl.get(e);
                    t && t.destroy()
                }
            }), u("submit", ".js-mobile-preference-form", ({
                currentTarget: e
            }) => {
                v(e, ".js-mobile-preference-anchor-field", HTMLInputElement).value = window.location.hash.substr(1)
            }), r("#js-oauth-authorize-btn", e => {
                !async function(e) {
                    if (await $e(document), await new Promise(e => setTimeout(e, 1e3)), !(e instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/oauth.js:8");
                    e.disabled = !1
                }(e)
            }), async function() {
                await I, window._octo.push(["enablePerformance"]), window._octo.push(["recordPageView"])
            }(), r(".js-octo-ga-id", e => {
                window.ga(t => {
                    t && e.setAttribute("content", t.get("clientId"))
                })
            }), r(".js-octo-ga-id-input", e => {
                window.ga(t => {
                    t && e.setAttribute("value", t.get("clientId"))
                })
            }), document.addEventListener("pjax:complete", function() {
                window._octo.push(["recordPageView"])
            }), u("change", ".js-two-factor-needs-enforced", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/orgs/2fa.js:35");
                v(document, ".js-confirm-2fa-modal").classList.toggle("d-none", !e.checked), v(document, ".js-2fa-save-button").classList.toggle("d-none", e.checked)
            }), r(".js-two-factor-enforcement-poller", function(e) {
                e.addEventListener("load", function() {
                    window.location.reload()
                })
            }), u("click", ".js-org-insights-hero-container [role=tab]", ({
                currentTarget: e
            }) => {
                e instanceof HTMLAnchorElement && bl(e)
            }), ce(() => {
                const e = document.querySelector(".js-org-insights-hero-container");
                if (!e) return;
                const t = e.querySelector(`[href='${document.location.hash||"#insights-prs"}']`);
                t instanceof HTMLAnchorElement && bl(t)
            });
            const vl = new C;

            function wl() {
                const e = document.querySelector(".js-org-reinstate-forms"),
                    t = document.querySelectorAll(".js-org-reinstate-option:checked");
                if (!e || 1 !== t.length) return;
                const n = p(t[0], "data-form"),
                    s = e.getElementsByClassName("js-togglable-form");
                for (const r of s) r.classList.add("d-none");
                const o = document.getElementById(n);
                if (!o) throw new Error("invariant: app/assets/modules/github/orgs/invitations.js:44");
                o.classList.remove("d-none")
            }

            function jl() {
                const e = v(document, ".js-seats");
                if (!e) return Ll();
                const t = p(e, "data-filled-seats");
                return parseInt(t) + Ll()
            }

            function yl() {
                ! function() {
                    const e = document.querySelector(".js-filled-seats"),
                        t = jl();
                    e && null !== t && (e.textContent = t.toString())
                }(),
                function() {
                    const e = document.querySelector(".js-seats-remaining");
                    if (e) {
                        e.hidden = !0;
                        const t = Tl() - jl(),
                            n = v(document, ".js-seats-remaining-zero"),
                            s = v(document, ".js-seats-remaining-singular"),
                            o = v(document, ".js-seats-remaining-plural");
                        n.hidden = 0 !== t, s.hidden = 1 !== t, o.hidden = t <= 1
                    }
                }(),
                function() {
                    const e = document.querySelector(".js-max-seats-warning");
                    e && (e.hidden = !kl())
                }(),
                function() {
                    const e = jl();
                    return Tl() < e
                }() ? async function() {
                    const e = v(document, ".js-seats", HTMLElement),
                        t = new URL(p(e, "data-url"), window.location.origin),
                        n = new URLSearchParams(t.search.slice(1));
                    n.append("seats", jl().toString()), t.search = n.toString();
                    const s = await vl.push(O(t));
                    ! function() {
                        const e = v(document, ".js-new-seats"),
                            t = v(document, ".js-new-users-singular"),
                            n = v(document, ".js-new-users-plural"),
                            s = Ll();
                        t.hidden = 1 !== s, n.hidden = 1 === s, e.textContent = String(s)
                    }();
                    const o = s.selectors;
                    for (const r in o)
                        for (const e of document.querySelectorAll(r)) e.innerHTML = o[r];
                    El(".js-plan-no-change", !0), El(".js-plan-changes", !1), El(".js-complete-button", !0), El(".js-invite-button", !1)
                }() : (El(".js-plan-no-change", !1), El(".js-plan-changes", !0), El(".js-complete-button", !1), El(".js-invite-button", !0))
            }

            function El(e, t) {
                const n = document.querySelector(e);
                n && (n.hidden = t)
            }

            function Ll() {
                return b(document, ".js-badge").length || 0
            }

            function Tl() {
                const e = v(document, ".js-seats");
                if (!e) return 0;
                const t = p(e, "data-total-seats");
                return parseInt(t)
            }

            function kl() {
                return Tl() === jl()
            }

            function Ml(e) {
                De(e)
            }
            async function Al(e, t, n, s) {
                const o = p(e, "data-url"),
                    r = new URL(o, window.location.origin),
                    i = new URLSearchParams(r.search.slice(1));
                i.append("member", t), i.append("action_type", n), s && i.append("return_to", s), r.search = i.toString(), xl(!0), v(document, ".js-add-team-member-form").hidden = !0;
                const a = await B(document, r);
                xl(!1), e.innerHTML = "", e.appendChild(a)
            }

            function xl(e) {
                v(document, ".js-add-members-loading-state").hidden = !e, v(document, ".js-add-members-modal-content").hidden = e
            }

            function Sl(e, t) {
                const n = new URL(e.href, window.location.origin),
                    s = new URLSearchParams(n.search);
                s.delete("organization_name"), s.delete("login"), s.append("organization_name", t), s.append("login", v(document, "#organization_login", HTMLInputElement).value);
                const o = new URL(e.href, window.location.origin);
                o.search = s.toString(), e.href = o.toString()
            }

            function Hl(e) {
                for (const t of b(document, ".js-plan-info")) {
                    const n = Cl(e);
                    if ("string" != typeof n) throw new Error("invariant: app/assets/modules/github/orgs/new.js:235");
                    t.classList.contains(n) ? (t.classList.remove("has-removed-contents"), t.hidden = !1) : (t.classList.add("has-removed-contents"), t.hidden = !0)
                }
            }

            function Cl(e) {
                return "business_plus" === e ? function() {
                    const e = v(document, ".js-enterprise-choice:checked", HTMLInputElement);
                    return "server" === e.value ? "js-enterprise-server-plan-info" : "cloud-trial" === e.value ? "js-enterprise-cloud-trial-plan-info" : "js-enterprise-cloud-plan-info"
                }() : "free" === e ? "js-free-plan-info" : "business" === e ? "js-business-plan-info" : void 0
            }

            function ql() {
                return v(document, ".js-saml-provider-settings-form", HTMLFormElement)
            }

            function Il() {
                return ql().querySelector(".js-saml-form-inputs")
            }

            function _l() {
                return v(document, ".js-org-saml-confirm-enforcement-hidden", HTMLInputElement)
            }

            function $l(e) {
                e && e.classList.remove("d-none")
            }

            function Dl() {
                return "1" === v(document, ".js-org-saml-currently-enabled", HTMLInputElement).value && !v(document, ".js-org-enable-saml", HTMLInputElement).checked
            }

            function Rl() {
                return v(document, ".is-submit-button-value", HTMLInputElement)
            }

            function Bl() {
                return v(document, ".js-org-saml-enforce", HTMLInputElement).checked && "0" === _l().value && !("1" === v(document, ".js-org-saml-previously-enforced", HTMLInputElement).value) && "1" === v(document, ".js-org-has-unlinked-saml-members", HTMLInputElement).value
            }

            function Nl() {
                ql().submit()
            }

            function Pl() {
                const e = document.querySelector(".js-org-enable-saml");
                e && e instanceof HTMLInputElement && (e.checked = !0, $l(Il()))
            }

            function Fl(e, t) {
                v(e, ".js-add-child-team-loading-state").hidden = !t, v(e, ".js-add-child-team-modal-content").hidden = t
            }
            u("click", ".js-invitations-team-suggestions-view-all", async function(e) {
                const t = e.currentTarget,
                    n = p(t, "data-url"),
                    s = b(document, ".js-invitation-toggle-team:checked", HTMLInputElement).map(e => e.value),
                    o = await B(document, n),
                    r = d(t, "ul");
                r.innerHTML = "", r.appendChild(o);
                for (const i of s) v(r, `.js-invitation-toggle-team[value="${i}"]`, HTMLInputElement).checked = !0
            }), u("change", ".js-org-reinstate-option", wl), r(".js-org-reinstate-forms", wl), r(".js-member-suggestion", function() {
                const e = b(document, ".js-badge").map(e => v(e, "input", HTMLInputElement).value);
                if (0 !== e.length)
                    for (const t of b(document, ".js-member-suggestion", HTMLLIElement)) {
                        const n = p(t, "data-autocomplete-value");
                        if (e.includes(n)) {
                            t.classList.add("disabled"), t.setAttribute("aria-disabled", "true");
                            const e = t.querySelector(".js-non-member-warning-reason"),
                                n = t.querySelector(".js-non-member-warning-action");
                            if (e && n)
                                for (const t of [e, n]) t.textContent = p(t, "data-markup"), t.hidden = !1
                        }
                    }
            }), u("combobox-commit", ".js-badge-container .js-new-org-members-complete-results", e => {
                const t = v(document, ".js-badge-input", HTMLInputElement),
                    n = v(document, ".js-badges"),
                    s = e.target,
                    o = v(s, ".js-badge-template", HTMLTemplateElement).cloneNode(!0).content;
                n.append(o), yl(),
                    function(e) {
                        const t = e.currentTarget;
                        if (t.hasAttribute("data-ga-event")) {
                            const e = t.getAttribute("data-ga-event-category"),
                                n = t.getAttribute("data-ga-event-action"),
                                s = t.getAttribute("data-ga-event-label");
                            window.ga("send", "event", e, n, s)
                        }
                        const n = e.target;
                        if (!(n instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/orgs/invitations.js:282");
                        De(n)
                    }(e), t.value = ""
            }), u("click", ".js-badge-search-container .js-badge", e => {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/orgs/invitations.js:92");
                "true" === p(t, "aria-pressed") ? t.setAttribute("aria-pressed", "false") : t.setAttribute("aria-pressed", "true")
            }), u("click", ".js-badge-search-container", e => {
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/orgs/invitations.js:105");
                v(t, "input", HTMLInputElement).focus()
            }), u("click", ".js-badge-container .js-member-suggestion", () => {
                v(document, ".js-badge-input", HTMLInputElement).focus()
            }), m("keydown", ".js-badge-search-container .js-badge-input", e => {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/orgs/invitations.js:115");
                const n = d(t, ".js-badge-search-container"),
                    s = b(n, '.js-badges .js-badge[aria-pressed="true"]'),
                    o = n.getAttribute("data-allow-plan-increase"),
                    r = "Backspace" !== e.key || "" !== t.value;
                if (!o && kl() && r) e.preventDefault();
                else if (!r) {
                    if (0 !== s.length)
                        for (const e of s) e.remove(), Ml(e);
                    else {
                        const e = b(n, ".js-badges .js-badge");
                        if (0 === e.length) return;
                        const t = e[e.length - 1];
                        t.remove(), Ml(t)
                    }
                    yl()
                }
            }), u("click", ".js-private-repo-creation-allowed", function(e) {
                const t = e.currentTarget;
                if (t instanceof HTMLInputElement) {
                    const e = "true" === t.getAttribute("data-private-only-policy-allowed"),
                        n = v(document, ".js-public-repo-creation-allowed", HTMLInputElement),
                        s = v(document, ".js-public-disabled-doc-link");
                    e || (t.checked ? (n.disabled = !0, n.checked = !0, s.hidden = !1) : (n.disabled = !1, s.hidden = !0))
                }
            }), u("click", ".js-membership-tab", function(e) {
                const t = p(e.currentTarget, "data-membership"),
                    n = v(document, ".js-member-filter-field", HTMLInputElement),
                    s = n.value,
                    o = new RegExp("membership:[a-z-]+"),
                    r = s.toString().trim().replace(o, "");
                n.value = `${r} ${t}`.replace(/\s\s/, " "), n.focus(), Re(n), v(document, ".js-membership-tabs").classList.remove("selected"), e.currentTarget.classList.add("selected")
            }), u("click", ".js-member-search-filter", function(e) {
                e.preventDefault();
                const t = p(e.currentTarget, "data-filter"),
                    n = d(e.currentTarget, "[data-filter-on]"),
                    s = p(n, "data-filter-on"),
                    o = v(document, ".js-member-filter-field", HTMLInputElement),
                    r = o.value,
                    i = new RegExp(`${s}:[a-z]+`),
                    a = r.toString().trim().replace(i, "");
                o.value = `${a} ${t}`.replace(/\s\s/, " "), o.focus(), Re(o)
            }), u("submit", ".js-needs-interstitial .js-approve-membership-request", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/orgs/members.js:41");
                const n = p(v(t, "[data-member-name]"), "data-member-name"),
                    s = p(t, "data-action-type"),
                    o = d(t, ".js-add-members-container");
                e.preventDefault(), Al(o, n, s, null)
            }), u("submit", ".js-needs-interstitial.js-add-team-member-form", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/orgs/members.js:50");
                const n = T(t, "member");
                if (!n.value) return;
                const s = p(t, "data-action-type"),
                    o = v(document, ".js-add-members-container");
                e.preventDefault();
                const r = t.getAttribute("data-return-to");
                Al(o, n.value, s, r)
            }), r("#add-team-member", function(e) {
                const t = v(e, "details-dialog"),
                    n = t.innerHTML;
                e.addEventListener("toggle", function({
                    currentTarget: e
                }) {
                    if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/orgs/members.js:91");
                    e.hasAttribute("open") || (t.innerHTML = n)
                })
            }), j(".js-add-org-member-form", async function(e, t) {
                const n = v(document, ".js-member-list");
                e.classList.add("is-sending");
                const s = document.querySelector(".flash-messages");
                let o;
                s && s.remove();
                try {
                    o = await t.json()
                } catch (a) {
                    if (!a.response && !a.response.json) return;
                    return void n.insertAdjacentHTML("beforebegin", a.response.json.message_html || "")
                }
                e.classList.remove("is-sending"), v(e, "auto-complete", k).value = "";
                const r = v(Ae(document, o.json.list_item_html), "*"),
                    i = r.getAttribute("data-login");
                if (i)
                    for (const c of n.children)
                        if (c.getAttribute("data-login") === i) {
                            c.remove();
                            break
                        }
                n.prepend(r)
            }), u("auto-check-success", ".js-new-organization-name", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/orgs/new.js:10");
                for (const s of b(document, ".js-enterprise-trial-link", HTMLAnchorElement)) Sl(s, t.value);
                const n = d(t, "dd").querySelector(".js-field-hint-name");
                n && (n.textContent = t.value)
            }), g(".js-company-name-input", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/orgs/new.js:45");
                const n = t.form;
                if (!n) throw new Error("invariant: app/assets/modules/github/orgs/new.js:47");
                const s = n.querySelectorAll(".js-company-name-text");
                if (0 === s.length) return;
                const o = n.querySelector(".js-corp-tos-link"),
                    r = n.querySelector(".js-tos-link");
                r && (r.classList.add("d-none"), r.setAttribute("aria-hidden", "true"), o && (o.classList.remove("d-none"), o.setAttribute("aria-hidden", "false")));
                for (const i of s)
                    if (t.value) {
                        if (i.hasAttribute("data-wording")) {
                            const e = p(i, "data-wording");
                            i.textContent = ` ${e} ${t.value}`
                        } else i.textContent = t.value
                    } else i.textContent = ""
            }), r(".js-company-owned:not(:checked)", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.form;
                    if (!t) throw new Error("invariant: app/assets/modules/github/orgs/new.js:95");
                    const n = v(t, ".js-company-name-input", HTMLInputElement),
                        s = v(document, ".js-company-name-text"),
                        o = v(document, ".js-corp-tos-link"),
                        r = v(document, ".js-tos-link");
                    e.getAttribute("data-optional") && n.removeAttribute("required"), $(n, ""), r.classList.remove("d-none"), r.setAttribute("aria-hidden", "false"), o.classList.add("d-none"), o.setAttribute("aria-hidden", "true"), s.textContent = ""
                }
            }), r(".js-company-owned:checked", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e.form;
                    if (!t) throw new Error("invariant: app/assets/modules/github/orgs/new.js:124");
                    const n = t.querySelector(".js-company-name-input");
                    n && (n.setAttribute("required", ""), L(n, "focus"), L(n, "input"))
                }
            }), r(".js-company-owned-autoselect", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = e;

                    function n() {
                        if (t.checked && t.form) {
                            const e = v(t.form, ".js-company-owned", HTMLInputElement);
                            $(e, !0)
                        }
                    }
                    t.addEventListener("change", n), n()
                }
            }), j(".js-org-list-item .js-org-remove-item", async function(e, t) {
                d(e, ".js-org-list-item").classList.add("d-none");
                try {
                    await t.text()
                } catch (Ah) {
                    d(e, ".js-org-list-item").classList.remove("d-none");
                    const n = e.getAttribute("data-error-message");
                    if (n) return void alert(n)
                }
                d(e, ".js-org-list-item").remove()
            }), u("click", ".js-plan-choice", e => {
                const t = document.querySelector(".SignUpContinueActions"),
                    n = e.target.value;
                if (Hl(n), null != t && t.classList.remove("has-removed-contents"), "business_plus" === n)
                    for (const o of b(document, ".js-after-plan-choice")) o.classList.add("has-removed-contents");
                else
                    for (const o of b(document, ".js-after-plan-choice")) o.classList.remove("has-removed-contents");
                const s = !(n && "business_plus" === n);
                for (const o of b(document, ".js-enterprise-choice", HTMLInputElement)) o.disabled = s
            }), u("click", ".js-enterprise-choice", e => {
                const t = document.querySelector(".js-enterprise-plan-seat-selection"),
                    n = document.querySelector(".js-billing-section"),
                    s = document.querySelector(".SignUpContinueActions"),
                    o = document.querySelector(".js-enterprise-contact"),
                    r = document.querySelector(".js-enterprise-trial-link"),
                    i = e.target.value,
                    a = [n, s, t];
                if (o && o.classList.toggle("has-removed-contents", "server" !== i), r && r.classList.toggle("has-removed-contents", "server" === i), "cloud-trial" === i) n && n.classList.add("has-removed-contents");
                else
                    for (const c of a) null != c && c.classList.toggle("has-removed-contents", "cloud" !== i);
                Hl("business_plus")
            }), u("change", ".js-enterprise-trial-industry", function(e) {
                if (!(e instanceof Event)) throw new Error("invariant: app/assets/modules/github/orgs/new.js:272");
                const t = e.target;
                if (!(t instanceof HTMLSelectElement)) throw new Error("invariant: app/assets/modules/github/orgs/new.js:274");
                const n = t.value,
                    s = document.querySelector(".js-enterprise-trial-other-industry-field");
                s && (s.hidden = n !== p(s, "data-trigger-option-value"))
            }), r(".js-enterprise-trial-ga-id", {
                constructor: HTMLInputElement,
                initialize(e) {
                    const t = p(e, "data-field");
                    window.ga(function(n) {
                        n && $(e, n.get(t))
                    })
                }
            }), j(".js-select-repo-permission", async function(e, t) {
                const n = v(e, ".js-permission-success"),
                    s = v(e, ".js-permission-error");
                let o;
                n.hidden = !0, s.hidden = !0, e.classList.add("is-loading");
                try {
                    o = await t.json()
                } catch (Ah) {
                    return e.classList.remove("is-loading"), void(s.hidden = !1)
                }
                e.classList.remove("is-loading"), n.hidden = !1;
                const r = e.closest(".js-org-repo");
                if (r) {
                    const e = o.json;
                    r.classList.toggle("with-higher-access", e.members_with_higher_access)
                }
            }), j(".js-per-seat-invite-field, .js-per-seat-invite .js-org-remove-item", async function(e, t) {
                ! function(e) {
                    for (const n in e.selectors) {
                        const t = e.selectors[n],
                            s = document.querySelector(n);
                        t && s && (s.textContent = t)
                    }
                    const t = 100 === e.filled_seats_percent;
                    v(document, ".js-live-update-seats-percent").style.width = `${e.filled_seats_percent}%`, v(document, ".js-need-more-seats").classList.toggle("d-none", !t), v(document, ".js-add-org-member-form").classList.toggle("d-none", t)
                }((await t.json()).json)
            }), u("click", ".js-org-enable-saml", function(e) {
                if (!(e.currentTarget instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/orgs/security.js:113");
                var t;
                e.currentTarget.checked ? $l(Il()) : (t = Il()) && t.classList.add("d-none")
            }), u("click", ".js-saml-submit", function(e) {
                e.preventDefault();
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/orgs/security.js:131");
                E(ql(), t)
            }), u("click", ".js-org-saml-confirm-enforce-button", function() {
                _l().value = "true", E(ql())
            }), u("submit", ".js-saml-provider-settings-form", function(e) {
                e.preventDefault(), "test_settings" === Rl().name ? Nl() : "save_settings" === Rl().name && (Dl() ? async function() {
                    (await ne({
                        content: v(document, "#disable-saml-confirmation", HTMLTemplateElement).content.cloneNode(!0)
                    })).addEventListener("dialog:remove", Pl)
                }() : Bl() ? ne({
                    content: v(document, "#enforce-saml-confirmation", HTMLTemplateElement).content.cloneNode(!0)
                }) : Nl())
            }), u("click", ".js-team-remove-user", function(e) {
                e.preventDefault();
                for (const t of document.querySelectorAll(".js-team-add-user-form")) t.classList.remove("d-none");
                v(document, ".js-team-add-user-name").focus(), d(e.currentTarget, "li").remove()
            }), u("click", ".js-team-add-user-button", function(e) {
                e.preventDefault(), async function(e) {
                    const t = d(e, ".js-team-add-user-form"),
                        n = v(t, ".js-team-add-user-name", HTMLInputElement),
                        s = n.value;
                    n.value = "";
                    const o = v(document, ".js-team-user-logins");
                    for (const c of o.querySelectorAll("li"))
                        if (c.getAttribute("data-login") === s) return;
                    if (!(await Be("low"))) return;
                    const r = new URL(t.getAttribute("data-template-url") || "", window.location.origin),
                        i = new URLSearchParams(r.search.slice(1));
                    i.append("member", s), r.search = i.toString(), n.focus();
                    const a = await B(document, r);
                    o.appendChild(a);
                    for (const c of b(document, ".js-login-field", HTMLInputElement)) c.disabled = !1;
                    t.classList.add("d-none")
                }(e.currentTarget)
            }), u("click", ".js-rename-owners-team-next-btn", function() {
                const e = v(document, ".js-rename-owners-team-about-content");
                e.hidden = !e.hidden;
                const t = v(document, ".js-rename-owners-team-rename-form");
                t.hidden = !t.hidden
            }), u("auto-complete-change", ".js-add-child-team-completer", async function({
                target: e
            }) {
                if (!(e instanceof k)) throw new Error("invariant: app/assets/modules/github/orgs/team-add-child.js:15");
                if (!e.value) return;
                const t = d(e, ".js-add-team-container");
                Fl(t, !0);
                const n = d(e, ".js-add-child-team-form"),
                    s = p(n, "data-change-parent-summary-path"),
                    o = await B(document, s);
                v(n, ".js-add-team-search").hidden = !0, v(n, ".js-add-team-warning").append(o), Fl(t, !1)
            }), u("submit", ".js-add-child-team-form", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/orgs/team-add-child.js:28");
                T(t, "child_team[id]").value ? t.submit() : (e.preventDefault(), e.stopPropagation())
            }), u("click", ".js-expandable-team-breadcrumbs .js-team-breadcrumb-trigger", async function(e) {
                const t = d(e.target, ".js-expandable-team-breadcrumbs");
                t.classList.add("is-loading");
                try {
                    await Ne(t)
                } catch (Ah) {}
                t.classList.remove("is-loading")
            });
            class Ol {
                constructor(e, t, n) {
                    this.diffId = e, this.side = t, this.lineNumber = n, this.element = G(document, this.anchor())
                }
                sideForCommenting() {
                    return this.element && this.element.classList.contains("blob-num-context") ? "right" : {
                        R: "right",
                        L: "left"
                    }[this.side]
                }
                anchor() {
                    return `${this.diffId}${this.anchorSuffix()}`
                }
                anchorSuffix() {
                    return `${this.side}${this.lineNumber}`
                }
                is(e) {
                    return this.diffId === e.diffId && this.side === e.side && this.lineNumber === e.lineNumber
                }
            }
            class Ul {
                constructor(e, t, n, s, o) {
                    this.elements = new Set, this.isParsed = !1, this.isSplit = !1, this._rows = new Set, this._isAcrossHunks = !1, this._isContextOnly = !0, this._includesExpandedLine = !1, this.diffId = e, this.diffTable = document.querySelector(`.js-diff-table[data-diff-anchor="${e}"]`), this.diffTable && (this.isSplit = this.diffTable.classList.contains("js-file-diff-split")), this.start = new Ol(e, t, n), this.end = new Ol(e, s, o), this.parse()
                }
                anchor() {
                    const e = [];
                    return e.push(this.start.anchor()), this.start.is(this.end) || e.push(this.end.anchorSuffix()), e.join("-")
                }
                parse() {
                    if (!this.diffTable) return;
                    let e = this.diffTable.querySelectorAll(".js-linkable-line-number");
                    e = this.unify(e), e = this.filterInRange(e), this.lineCount = e.length, this.elements = this.expandRelatedElements(e), this.isParsed = !0
                }
                unify(e) {
                    if (!this.isSplit) return Array.from(e);
                    const t = [];
                    let n = [],
                        s = [];
                    for (const o of e) o.classList.contains("blob-num-addition") ? n.push(o) : o.classList.contains("blob-num-deletion") ? s.push(o) : (t.push(...s, ...n, o), n = [], s = []);
                    return t.push(...s, ...n), t
                }
                filterInRange(e) {
                    if (!this.start.element || !this.end.element) return [];
                    let t = e.indexOf(this.start.element),
                        n = e.indexOf(this.end.element);
                    if (t > n) {
                        [t, n] = [n, t];
                        const [e, s] = [this.end, this.start];
                        this.start = e, this.end = s
                    }
                    return e.slice(t, n + 1)
                }
                isContextOnly() {
                    return this.isParsed || this.parse(), this._isContextOnly
                }
                isAcrossHunks() {
                    return this.isParsed || this.parse(), this._isAcrossHunks
                }
                includesExpandedLine() {
                    return this.isParsed || this.parse(), this._includesExpandedLine
                }
                rows() {
                    return this.isParsed || this.parse(), this._rows
                }
                expandRelatedElements(e) {
                    const t = this.isSplit,
                        n = e[0],
                        s = e[e.length - 1];
                    if (n && s) {
                        const e = n.closest("[data-hunk]"),
                            t = s.closest("[data-hunk]");
                        if (e && t) {
                            e.getAttribute("data-hunk") !== t.getAttribute("data-hunk") && (this._isAcrossHunks = !0)
                        }
                    }
                    return e.reduce((e, n) => {
                        !this._includesExpandedLine && n.closest(".blob-expanded") && (this._includesExpandedLine = !0);
                        const s = n.parentElement;
                        s instanceof HTMLElement && this._rows.add(s);
                        const o = n.classList.contains("blob-num-deletion") || n.classList.contains("blob-num-addition");
                        if (o && (this._isContextOnly = !1), !s) return e;
                        if (t && o) return Array.from(s.children).indexOf(n) < 2 ? e.add(s.children[0]).add(s.children[1]) : e.add(s.children[2]).add(s.children[3]);
                        for (const t of Array.from(s.children)) e.add(t);
                        return e
                    }, new Set)
                }
            }

            function Wl(e) {
                const t = e.match(/^#?(diff-[a-f0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                if (null != t && 6 === t.length) return t;
                const n = e.match(/^#?(discussion-diff-[0-9]+)(L|R)(\d+)(?:-(L|R)(\d+))?$/i);
                return null != n && 6 === n.length ? n : null
            }
            let zl, Vl, Kl = null,
                Yl = !1;

            function Xl(e) {
                return !!e.closest(".js-multi-line-comments-enabled")
            }

            function Jl(e, t) {
                if (!Xl(e)) return !1;
                const {
                    start: {
                        lineNumber: n
                    },
                    end: {
                        lineNumber: s
                    }
                } = t;
                return (n !== s || !t.isContextOnly()) && (!t.isAcrossHunks() && !t.includesExpandedLine())
            }

            function Gl(e) {
                return d(e, ".js-diff-table").classList.contains("is-selecting")
            }

            function Ql(e, t) {
                su();
                let n = e.id;
                if (t) {
                    const t = Wl(n);
                    if (!t) return;
                    const s = t[1],
                        o = t[2],
                        r = t[3];
                    if (Kl && Kl.diffId === s) {
                        if (o === Kl.start.side && r < Kl.start.lineNumber) return;
                        const t = new Ul(s, Kl.start.side, Kl.start.lineNumber, o, +r);
                        n = t.anchor();
                        const i = e.closest(".js-file-content[data-hydro-view]");
                        if (i instanceof HTMLElement && function(e, t) {
                                const n = {
                                    starting_diff_position: t.start.side + t.start.lineNumber,
                                    ending_diff_position: t.end.side + t.end.lineNumber,
                                    line_count: t.lineCount
                                };
                                e.setAttribute("data-hydro-client-context", JSON.stringify(n)), we(e)
                            }(i, t), Yl && Gl(e)) {
                            d(e, ".js-diff-table").classList.toggle("is-commenting", Jl(e, t))
                        }
                        zl = function() {
                            if (Jl(e, t)) {
                                const n = `.js-add-line-comment[data-side="${t.end.sideForCommenting()}"]`,
                                    s = d(e, "tr").querySelector(n);
                                s && t && (! function(e, t) {
                                    const {
                                        start: {
                                            side: n,
                                            lineNumber: s
                                        }
                                    } = t, o = d(e, "tr"), r = v(o, ".js-add-line-comment"), i = {
                                        R: "right",
                                        L: "left"
                                    }[n];
                                    r.setAttribute("data-start_side", i), r.setAttribute("data-start_position", String(s)), r.setAttribute("data-start_line", String(s))
                                }(s, t), s.click())
                            }
                        }
                    }
                }
                window.history.replaceState(null, null, `#${n}`), ou()
            }

            function Zl(e) {
                if (!(e instanceof HTMLElement)) return;
                if (e.classList.contains("js-linkable-line-number")) return e;
                const t = e.previousElementSibling;
                return t ? Zl(t) : void 0
            }

            function eu(e) {
                const t = e.target;
                if (!(t instanceof Element)) return;
                Vl && function() {
                    if (!Vl) return;
                    Ql(Vl, !1);
                    const e = d(Vl, ".js-diff-table");
                    Vl = null, e.classList.add("is-selecting"), e.classList.add("is-commenting"), document.addEventListener("mouseup", function(t) {
                        e.classList.remove("is-selecting"), e.classList.remove("is-selecting", "is-commenting"), zl && zl(), zl = null, nu(e), t.preventDefault()
                    }, {
                        once: !0
                    })
                }();
                const n = t.closest(".blob-code, .js-linkable-line-number");
                var s;
                return n ? n.classList.contains("blob-code") ? function(e) {
                    const t = Zl(e);
                    t && Gl(t) && Ql(t, !0)
                }(n) : void(n.classList.contains("js-linkable-line-number") && Gl(s = n) && Ql(s, !0)) : void 0
            }

            function tu(e) {
                e.addEventListener("mouseenter", eu, {
                    capture: !0
                })
            }

            function nu(e) {
                Yl = !1, e.removeEventListener("mouseenter", eu, {
                    capture: !0
                })
            }

            function su(e) {
                const t = e || document.querySelector(".js-add-line-comment[data-start_side]");
                t && (t.removeAttribute("data-start_side"), t.removeAttribute("data-start_position"), t.removeAttribute("data-start_line"))
            }

            function ou() {
                if (Kl) {
                    for (const e of Kl.elements) e.classList.remove("selected-line", "selected-line-top", "selected-line-bottom", "selected-line-left", "selected-line-right");
                    Kl = null
                }
                const e = Wl(window.location.hash);
                if (!e) return;
                const t = e[1],
                    n = e[2],
                    s = e[3],
                    o = e[4] || n,
                    r = e[5] || s;
                Kl = new Ul(t, n, +s, o, +r);
                const i = Array.from(Kl.elements)[0];
                d(i, ".js-diff-table").classList.contains("file-diff-split") ? function() {
                    if (!Kl) return;
                    for (const r of Kl.elements) r.classList.add("selected-line");
                    const e = [],
                        t = [],
                        n = [],
                        s = [];
                    for (const r of Kl.rows()) {
                        const [o, i, a, c] = r.children;
                        e.push(o), t.push(i), n.push(a), s.push(c)
                    }

                    function o(e) {
                        for (const [t, n] of e.entries()) {
                            if (n.classList.contains("empty-cell")) continue;
                            const s = e[t - 1];
                            s && !s.classList.contains("empty-cell") || n.classList.add("selected-line-top");
                            const o = e[t + 1];
                            o && !o.classList.contains("empty-cell") || n.classList.add("selected-line-bottom")
                        }
                    }
                    o(e), o(t), o(n), o(s);
                    for (const [r, i] of t.entries()) s[r].classList.contains("empty-cell") && i.classList.add("selected-line-right");
                    for (const [r, i] of n.entries()) t[r].classList.contains("empty-cell") && i.classList.add("selected-line-left")
                }() : function() {
                    if (!Kl) return;
                    for (const s of Kl.elements) s.classList.add("selected-line");
                    const e = Array.from(Kl.rows()),
                        t = e[0];
                    for (const s of t.children) s.classList.add("selected-line-top");
                    const n = e[e.length - 1];
                    for (const s of n.children) s.classList.add("selected-line-bottom")
                }()
            }

            function ru(e) {
                const t = v(e, ".js-inline-comment-form-container");
                t.classList.add("open"), v(t, ".js-write-tab").click(), v(t, ".js-comment-field").focus()
            }

            function iu(e) {
                e.reset(), su();
                const t = d(e, ".js-inline-comment-form-container");
                t.classList.remove("open"), L(t, "inlinecomment:collapse")
            }

            function au(e) {
                const t = e.closest(".js-teams-write-a-post");
                return t ? function(e) {
                    const t = v(e, ".js-team-discussions-post-compose");
                    t.classList.contains("d-none") || (t.classList.add("d-none"), v(e, ".js-post-placeholder").classList.remove("d-none"), e.classList.remove("active")), v(e, ".js-comment-form-error").classList.add("d-none")
                }(t) : e.closest(".js-teams-reply-to-post") ? function(e) {
                    if (!(e instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/orgs/team-discussions.js:33");
                    iu(e)
                }(e) : void 0
            }

            function cu(e) {
                const t = e.closest(".js-teams-reply-to-post"),
                    n = t && t.querySelector(".js-comment-form-error");
                n && n.classList.add("d-none")
            }

            function lu(e, t) {
                e.textContent = (parseInt(e.textContent) + t).toString()
            }

            function uu(e, t) {
                if (e.classList.add("d-none"), !e.parentElement) throw new Error("invariant: app/assets/modules/github/orgs/team-discussions.js:206");
                v(e.parentElement, t).classList.remove("d-none")
            }
            u("mousedown", ".js-add-line-comment", function(e) {
                const t = e.target.parentElement;
                if (!t) return;
                if (!Xl(e.target)) return;
                const n = Zl(t);
                if (!n) return;
                const s = d(e.target, ".js-diff-table");
                tu(s), Vl = n, Yl = !0, e.target.addEventListener("mouseup", function() {
                    nu(s), Vl = null, Yl = !1
                }, {
                    once: !0
                }), Kl && Kl.lineCount > 1 && e.preventDefault()
            }), u("mousedown", ".js-linkable-line-number", function(e) {
                const t = d(e.target, ".js-diff-table");
                t.classList.add("is-selecting"), tu(t), document.addEventListener("mouseup", function() {
                    d(e.target, ".js-diff-table").classList.remove("is-selecting"), nu(t)
                }, {
                    once: !0
                }), Ql(e.target, e instanceof MouseEvent && e.shiftKey), e.preventDefault()
            }), ce(ou), r(".blob-expanded", ou), r(".js-diff-progressive-loader", function(e) {
                e.addEventListener("load", ou)
            }), r(".js-diff-entry-loader", function(e) {
                e.addEventListener("load", ou)
            }), u("click", ".js-toggle-inline-comment-form", function(e) {
                ru(d(e.currentTarget, ".js-line-comments"))
            }), u("quote-selection", ".js-line-comments", function(e) {
                ru(e.currentTarget)
            }), m("keydown", ".js-inline-comment-form-container form .js-comment-field", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/behaviors/inline-comment.js:33");
                if (!t.classList.contains("js-navigation-enable") && "Escape" === e.key && 0 === t.value.length) {
                    iu(d(t, "form", HTMLFormElement)), e.preventDefault()
                }
            }), u("click", ".js-hide-inline-comment-form", function(e) {
                const t = d(e.currentTarget, "form", HTMLFormElement);
                !R(t) || confirm(p(e.target, "data-confirm-cancel-text")) ? iu(t) : e.preventDefault()
            }), u("click", ".js-team-discussions-team-description-toggle", function() {
                v(document, ".js-team-discussions-team-description").classList.toggle("d-none"), v(document, ".js-team-discussions-team-description-form").classList.toggle("d-none")
            }), u("click", ".js-team-discussions-post-toggle", function(e) {
                const t = d(e.target, ".js-teams-write-a-post");
                t.classList.contains("active") || (t.classList.add("active"), v(t, ".js-team-discussions-post-compose").classList.remove("d-none"), v(t, ".js-post-placeholder").classList.add("d-none"), v(t, ".js-title-field").focus())
            }), u("click", ".js-hide-post-form", function(e) {
                const t = d(e.target, ".js-new-comment-form", HTMLFormElement);
                !R(t) || confirm(p(e.target, "data-confirm-cancel-text")) ? au(e.target) : e.preventDefault()
            }), u("click", ".js-hide-inline-comment-form", function(e) {
                cu(e.target)
            }), j(".js-new-comment-form", async function(e, t) {
                await t.text(), au(e), cu(e)
            }), j(".js-team-discussions-team-description-form", async function(e, t) {
                try {
                    await t.text()
                } catch (Ah) {}
                const n = v(document, ".js-team-discussions-team-description"),
                    s = v(n, ".description"),
                    o = v(document, ".js-team-discussions-team-description-field", HTMLTextAreaElement);
                n.classList.toggle("d-none"), e.classList.toggle("d-none"), o.value.trim() ? (s.textContent = o.value, o.defaultValue = o.value) : (s.textContent = "This team has no description", o.defaultValue = "")
            }), j(".js-comment-pin", async function(e, t) {
                const n = v(e, "button[type=submit]");
                n.blur(), await t.text();
                const s = v(e, ".js-pinned-discussion-input", HTMLInputElement),
                    o = document.querySelector("#pinned_posts_counter"),
                    r = p(n, "aria-label"),
                    i = p(n, "data-alternate-aria-label");
                n.setAttribute("data-alternate-aria-label", r), n.setAttribute("aria-label", i), n.classList.toggle("pinned");
                const a = n.classList.contains("pinned");
                if (o) {
                    lu(o, a ? 1 : -1);
                    const t = d(o, ".js-pinned-post-tab");
                    if (!a && t.classList.contains("selected")) {
                        const t = d(e, ".js-comment-delete-container");
                        (c = t).addEventListener("transitionend", function(e) {
                            "opacity" === e.propertyName && c.remove()
                        }, {
                            once: !0
                        }), c.classList.add("fade-out")
                    }
                }
                var c;
                s.value = a ? "0" : "1"
            }), j(".js-comment-delete", async function(e, t) {
                await t.text();
                const n = e.closest(".discussion-post"),
                    s = n && n.querySelector(".js-comment-pin button[type=submit]");
                if (s && s.classList.contains("pinned")) {
                    const e = document.querySelector("#pinned_posts_counter");
                    e && lu(e, -1)
                }
            }), u("quote-selection", ".js-discussion-post", function(e) {
                const t = v(e.target, ".js-inline-comment-form-container");
                t.classList.add("open"), v(t, ".js-write-tab").click(), v(t, ".js-comment-field").focus()
            }), j(".js-comment-subscribe", async function(e, t) {
                await t.text(), uu(e, ".js-comment-unsubscribe")
            }), j(".js-comment-unsubscribe", async function(e, t) {
                await t.text(), uu(e, ".js-comment-subscribe")
            }), j(".js-discussion-post-update", async function(e, t) {
                const n = e.closest(".js-comment");
                if (!n) return;
                const s = n.querySelector(".js-comment-title");
                if (!s) return;
                const o = await t.json();
                s.textContent = o.json.title
            }), async function() {
                await I;
                const e = document.querySelector(".js-show-discussion .js-mark-notification-form");
                e instanceof HTMLFormElement && E(e)
            }();
            let du = !1;

            function mu(e) {
                v(document, ".js-selected-group-mappings-container").hidden = e
            }

            function fu(e) {
                const t = d(e, "form", HTMLFormElement),
                    n = t.querySelector(".js-selected-team-id"),
                    s = n instanceof HTMLInputElement && n.value,
                    o = v(t, ".js-team-privacy-closed"),
                    r = v(t, ".js-team-privacy-secret"),
                    i = v(o, "input", HTMLInputElement),
                    a = v(r, "input", HTMLInputElement);
                r.classList.toggle("text-gray", !!s), a.disabled = !!s, s && (i.checked = !0)
            }

            function pu(e, t) {
                const n = e.value;
                e.value = t.textContent, t.textContent = n
            }

            function gu(e) {
                const t = e.match(/#?(?:L)(\d+)((?:C)(\d+))?/g);
                if (t) {
                    if (1 === t.length) {
                        const e = vu(t[0]);
                        if (!e) return;
                        return Object.freeze({
                            start: e,
                            end: e
                        })
                    }
                    if (2 === t.length) {
                        const e = vu(t[0]),
                            n = vu(t[1]);
                        if (!e || !n) return;
                        return ju(Object.freeze({
                            start: e,
                            end: n
                        }))
                    }
                } else;
            }

            function hu(e) {
                return {
                    blobRange: gu(e),
                    anchorPrefix: function(e) {
                        const t = e.match(/(file-.+?-)L\d+?/i);
                        return t ? t[1] : ""
                    }(e)
                }
            }

            function bu({
                anchorPrefix: e,
                blobRange: t
            }) {
                return t ? `#${e}${function(e){const{start:t,end:n}=ju(e);return null!=t.column&&null!=n.column?`
                L$ {
                    t.line
                }
                C$ {
                    t.column
                } - L$ {
                    n.line
                }
                C$ {
                    n.column
                }
                `:t.line===n.line?`
                L$ {
                    t.line
                }
                `:`
                L$ {
                    t.line
                } - L$ {
                    n.line
                }
                `}(t)}`: "#"
            }

            function vu(e) {
                const t = e.match(/L(\d+)/),
                    n = e.match(/C(\d+)/);
                return t ? Object.freeze({
                    line: parseInt(t[1]),
                    column: n ? parseInt(n[1]) : null
                }) : null
            }

            function wu(e, t, n) {
                const s = [null, 0],
                    o = n(e.line);
                if (!o) return s;
                if (null == e.column) return [o, -1];
                let r = e.column - 1;
                const i = function e(t) {
                    if (t.nodeType === Node.TEXT_NODE) return [t];
                    if (!t.childNodes || !t.childNodes.length) return [];
                    let n = [];
                    for (const s of t.childNodes) n = n.concat(e(s));
                    return n
                }(o);
                for (let a = 0; a < i.length; a++) {
                    const e = i[a],
                        n = r - e.textContent.length;
                    if (0 === n) {
                        const n = i[a + 1];
                        return t && n ? [n, 0] : [e, r]
                    }
                    if (n < 0) return [e, r];
                    r = n
                }
                return s
            }

            function ju(e) {
                const t = [e.start, e.end];
                return t.sort(yu), t[0] === e.start && t[1] === e.end ? e : Object.freeze({
                    start: t[0],
                    end: t[1]
                })
            }

            function yu(e, t) {
                return e.line === t.line && e.column === t.column ? 0 : e.line === t.line && "number" == typeof e.column && "number" == typeof t.column ? e.column - t.column : e.line - t.line
            }
            u("click", ".js-open-child-team", function(e) {
                if (du) return;
                du = !0;
                const t = e.currentTarget.getAttribute("data-parent-team-slug");
                if (!t) return;
                const n = document.querySelectorAll(`.js-child-team[data-parent-team-slug="${t}"]`),
                    s = d(e.currentTarget, ".js-team-row");
                if (s.classList.contains("is-open")) e.currentTarget.setAttribute("aria-expanded", "false"),
                    function(e, t) {
                        (function e(t) {
                            for (const n of t) {
                                const t = p(n, "data-team-slug"),
                                    s = document.querySelectorAll(`.js-child-team[data-parent-team-slug="${t}"]`);
                                e(s), n.classList.remove("is-open"), n.classList.add("d-none")
                            }
                        })(t), e.classList.remove("is-open"), du = !1
                    }(s, n);
                else {
                    e.currentTarget.setAttribute("aria-expanded", "true"), async function(e, t, n) {
                        if (t.length) {
                            for (const e of t) e.classList.remove("d-none");
                            e.classList.add("is-open"), du = !1
                        } else {
                            const t = await B(document, n);
                            e.after(t), e.classList.add("is-open"), du = !1
                        }
                    }(s, n, p(e.currentTarget, "data-child-team-url"))
                }
            }), u("click", ".js-show-more-child-teams", async function(e) {
                if (du) return;
                du = !0;
                const t = e.currentTarget,
                    n = d(t, ".js-team-row"),
                    s = p(t, "data-child-team-url"),
                    o = n.parentNode,
                    r = await B(document, s);
                n.before(r), o && o.removeChild(n), du = !1
            }), g(".js-team-ldap-group-field", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/orgs/team-import.js:9");
                d(t, ".form-group").classList.remove("errored")
            }), u("auto-complete-change", ".js-import-ldap-group-completer", function({
                target: e
            }) {
                if (!(e instanceof k)) throw new Error("invariant: app/assets/modules/github/orgs/team-import.js:15");
                const t = d(e, ".js-ldap-group-adder"),
                    n = v(e, ".js-team-ldap-group-field", HTMLInputElement),
                    s = v(t, ".js-team-ldap-dn-field", HTMLInputElement);
                if (s.value = "", e.value) {
                    const {
                        dn: t,
                        cn: o
                    } = JSON.parse(e.value);
                    n.value = o, s.value = t
                }
            }), j(".js-ldap-group-adder", async function(e, t, n) {
                n.headers.set("X-Context", "import");
                const s = d(e, ".js-ldap-import-groups-container");
                let o;
                try {
                    o = await t.html()
                } catch (Ah) {
                    return void(Ah.response && v(e, ".form-group").classList.add("errored"))
                }
                const r = document.querySelector(".js-import-form-actions");
                s.classList.remove("is-empty"), v(s, ".js-ldap-imported-groups").prepend(o.html), e.reset(), v(e, ".js-team-ldap-group-field").focus(), r && r.classList.remove("d-none")
            }), u("submit", ".js-team-remove-group", function(e) {
                d(e.currentTarget, ".js-team").classList.add("is-removing"), v(document, ".js-team-ldap-group-field").focus()
            }), j(".js-team-remove-group", async function(e, t) {
                try {
                    await t.text()
                } catch (n) {
                    return void d(e, ".js-team").classList.remove("is-removing")
                }
                d(e, ".js-team").remove(), document.querySelector(".js-team:not(.is-removing)") || (v(document, ".js-ldap-import-groups-container").classList.add("is-empty"), v(document, ".js-import-form-actions").classList.add("d-none"))
            }), u("click", ".js-edit-team", function(e) {
                const t = d(e.currentTarget, ".js-team");
                t.classList.contains("is-removing") || (t.classList.add("is-editing"), v(t, ".js-team-name-field").focus())
            }), u("click", ".js-cancel-team-edit", function(e) {
                const t = d(e.currentTarget, ".js-team"),
                    n = v(t, ".js-team-form", HTMLFormElement);
                t.classList.remove("is-editing"), n.reset()
            }), j(".js-team-form", async function(e, t, n) {
                n.headers.set("X-Context", "import");
                const s = await t.html();
                d(e, ".js-team").replaceWith(s.html)
            }), u("details-menu-selected", ".js-team-group-mapping-menu", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/orgs/team-external.js:16");
                const t = e.detail.relatedTarget,
                    n = p(t, "data-id"),
                    s = p(t, "data-name"),
                    o = p(t, "data-description"),
                    r = v(document, ".js-team-group-mapping-template", HTMLTemplateElement),
                    i = document.importNode(r.content, !0),
                    a = v(i, ".js-group-mapping-hidden-name", HTMLInputElement),
                    c = v(i, ".js-group-mapping-hidden-description", HTMLInputElement);
                a.name = a.name.replace("{GROUP_ID}", n), c.name = c.name.replace("{GROUP_ID}", n), a.value = s, c.value = o, v(i, ".js-group-mapping-name").textContent = s, v(i, ".js-group-mapping-desc").textContent = o;
                const l = v(document, ".js-selected-group-mappings");
                (function(e, t) {
                    return null != t.querySelector(`input[name="team[group_mappings][${e}][name]"]`)
                })(n, l) || (l.append(i), mu(!1))
            }, {
                capture: !0
            }), u("click", ".js-remove-group-mapping", function(e) {
                d(e.target, ".js-group-mapping-container").remove(), 0 === v(document, ".js-selected-group-mappings").childElementCount && mu(!0)
            }), r(".js-team-group-mapping-menu", function(e) {
                const t = v(e, "remote-input"),
                    n = document.getElementById(p(t, "aria-owns"));
                n && t.addEventListener("error", function() {
                    n.classList.add("is-error")
                })
            }), u("click", ".js-team-search-filter", function(e) {
                e.preventDefault();
                const t = p(e.currentTarget, "data-filter"),
                    n = d(e.currentTarget, "[data-filter-on]"),
                    s = p(n, "data-filter-on"),
                    o = v(document, ".js-team-search-field", HTMLInputElement),
                    r = new RegExp(`${s}:[a-z]+`),
                    i = o.value.trim().replace(r, "");
                o.value = `${i} ${t}`.replace(/\s\s/, " "), o.focus(), Re(o)
            }), r(".js-select-team-menu", function(e) {
                fu(e)
            }), u("details-menu-selected", ".js-select-team-menu", function(e) {
                const t = e.target;
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/orgs/team-new.js:36");
                const n = e.detail.relatedTarget;
                if (!(n instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/orgs/team-new.js:38");
                v(t, ".js-selected-team-id", HTMLInputElement).value = n.value, v(t, ".js-already-selected-team-name", HTMLInputElement).value = p(n, "data-team-name"), fu(t)
            }, {
                capture: !0
            }), u("click", ".js-create-team-button", function(e) {
                const t = d(e.currentTarget, "form"),
                    n = t.querySelector(".js-already-selected-team-name");
                if (!(n instanceof HTMLInputElement)) return;
                const s = t.querySelector(".js-original-team-visibility"),
                    o = t.querySelector(".js-team-privacy-secret");
                if (!o) return;
                const r = v(o, "input", HTMLInputElement),
                    i = function(e) {
                        return e.value !== e.getAttribute("data-original-team-name")
                    }(n),
                    a = function(e, t) {
                        return null != e && t.checked && !["", "SECRET"].includes(e.getAttribute("data-original-team-visibility"))
                    }(s, r);
                if (i || a) {
                    e.preventDefault();
                    const s = p(t, "data-important-changes-summary-url"),
                        o = new URL(s, window.location.origin),
                        r = new URLSearchParams(o.search.slice(1));
                    r.append("parent_team", n.value), a && r.append("visibility_changed", a.toString()), i && r.append("parent_changed", i.toString()), o.search = r.toString(), ne({
                        content: B(document, o),
                        dialogClass: "p-3"
                    })
                }
            }), u("click", ".js-confirm-edit-team", function() {
                v(document, ".js-org-team-form", HTMLFormElement).submit()
            }), u("auto-complete-change", ".js-team-project-completer", function({
                target: e
            }) {
                if (!(e instanceof k)) throw new Error("invariant: app/assets/modules/github/orgs/team-projects.js:8");
                const t = d(e, "form", HTMLFormElement),
                    n = T(t, "project_id"),
                    s = v(t, ".js-team-project-complete-field", HTMLInputElement);
                if (e.value) {
                    const {
                        name: t,
                        id: o
                    } = JSON.parse(e.value);
                    n.value = o, s.value = t
                } else n.value = ""
            }), r(".js-org-transform-poller", function(e) {
                const t = e.getAttribute("data-redirect-url");
                e.addEventListener("load", function() {
                    window.location.href = t
                })
            }), u("click", "#load-readme", function(e) {
                const t = v(document, "#gollum-editor-body", HTMLTextAreaElement),
                    n = v(document, "#editor-body-buffer"),
                    s = v(document, "#undo-load-readme"),
                    o = n.textContent,
                    r = p(e.currentTarget, "data-readme-name");
                if (pu(t, n), !(e.currentTarget instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/pages-composer.js:11");
                e.currentTarget.disabled = !0, e.currentTarget.textContent = `${r} loaded`, s.classList.remove("d-none"), t.addEventListener("input", function e() {
                    t.value !== o && (s.classList.add("d-none"), t.removeEventListener("input", e))
                })
            }), u("click", "#undo-load-readme", function(e) {
                pu(v(document, "#gollum-editor-body", HTMLTextAreaElement), v(document, "#editor-body-buffer"));
                const t = v(document, "#load-readme", HTMLButtonElement),
                    n = p(t, "data-readme-name");
                t.disabled = !1, t.textContent = `Load ${n}`, e.currentTarget.classList.add("d-none")
            });
            let Eu = !1;

            function Lu(e, t) {
                return document.querySelector(`#${e}LC${t}`)
            }

            function Tu({
                blobRange: e,
                anchorPrefix: t
            }) {
                if (0 !== document.querySelectorAll(".js-file-line").length && (function() {
                        for (const e of document.querySelectorAll(".js-file-line.highlighted")) e.classList.remove("highlighted");
                        for (const e of document.querySelectorAll(".js-file-line .highlighted")) {
                            const t = d(e, ".js-file-line");
                            e.replaceWith(...e.childNodes), t.normalize()
                        }
                    }(), e))
                    if (null === e.start.column || null === e.end.column)
                        for (let n = e.start.line; n <= e.end.line; n += 1) {
                            const e = Lu(t, n);
                            e && e.classList.add("highlighted")
                        } else if (e.start.line === e.end.line && null != e.start.column && null != e.end.column) {
                            const n = function(e, t) {
                                const [n, s] = wu(e.start, !0, t), [o, r] = wu(e.end, !1, t);
                                if (!n || !o) return;
                                let i = s,
                                    a = r;
                                if (-1 === i && (i = 0), -1 === a && (a = o.childNodes.length), !n.ownerDocument) throw new Error("DOMRange needs to be inside document");
                                const c = n.ownerDocument.createRange();
                                return c.setStart(n, i), c.setEnd(o, a), c
                            }(e, e => Lu(t, e));
                            if (n) {
                                const e = document.createElement("span");
                                e.classList.add("highlighted"),
                                    function(e, t) {
                                        t.appendChild(e.extractContents()), e.insertNode(t)
                                    }(n, e)
                            }
                        }
            }

            function ku() {
                const e = hu(window.location.hash);
                Tu(e),
                    function() {
                        const e = document.querySelector(".js-file-line-actions");
                        if (!e) return;
                        const t = document.querySelectorAll(".js-file-line.highlighted"),
                            n = t[0];
                        if (n) {
                            ! function(e) {
                                const t = [];
                                for (const s of e) t.push(s.textContent);
                                const n = document.getElementById("js-copy-lines");
                                if (n instanceof ClipboardCopyElement) {
                                    n.textContent = `Copy ${w(e.length,"line")}`, n.value = t.join("\n");
                                    const s = `Blob, copyLines, numLines:${e.length.toString()}`;
                                    n.setAttribute("data-ga-click", s)
                                }
                            }(t),
                            function(e) {
                                const t = document.getElementById("js-view-git-blame");
                                if (!t) return;
                                t.setAttribute("data-ga-click", `Blob, viewGitBlame, numLines:${e.toString()}`)
                            }(t.length);
                            const s = function(e) {
                                const t = document.querySelector(".js-permalink-shortcut");
                                if (t instanceof HTMLAnchorElement) {
                                    const n = `${t.href}${window.location.hash}`,
                                        s = document.getElementById("js-copy-permalink");
                                    if (s instanceof ClipboardCopyElement) {
                                        s.value = n;
                                        const t = `Blob, copyPermalink, numLines:${e.toString()}`;
                                        s.setAttribute("data-ga-click", t)
                                    }
                                    return n
                                }
                            }(t.length);
                            s && function(e, t) {
                                const n = document.getElementById("js-new-issue");
                                if (n instanceof HTMLAnchorElement) {
                                    if (!n.href) return;
                                    const s = new URL(n.href, window.location.origin),
                                        o = new URLSearchParams(s.search.slice(1));
                                    o.set("permalink", e), s.search = o.toString(), n.href = s.toString(), n.setAttribute("data-ga-click", `Blob, newIssue, numLines:${t.toString()}`)
                                }
                            }(s, t.length), e.style.top = `${n.offsetTop-2}px`, e.classList.remove("d-none")
                        } else e.classList.add("d-none")
                    }();
                const {
                    blobRange: t,
                    anchorPrefix: n
                } = e, s = t && Lu(n, t.start.line);
                if (!Eu && s) {
                    s.scrollIntoView(), d(s, ".blob-wrapper, .js-blob-wrapper").scrollLeft = 0
                }
                Eu = !1
            }

            function Mu(e) {
                Pe(e), si(e)
            }
            async function Au(e, t) {
                let n;
                if (t) {
                    const s = "R" === t.slice(-1) ? "data-right-range" : "data-left-range",
                        o = e.getAttribute(s) || "";
                    n = t + parseInt(o.split("-")[0], 10)
                } else n = e.hash.slice(1);
                const s = p(e, "data-url"),
                    o = new URL(s, window.location.origin),
                    r = new URLSearchParams(o.search.slice(1));
                r.append("anchor", n), o.search = r.toString();
                const i = await B(document, o),
                    a = d(e, ".js-expandable-line"),
                    c = function(e, t) {
                        const n = e.nextElementSibling;
                        return n instanceof HTMLElement && n.matches(t) ? n : null
                    }(a, ".file-diff-line");
                c ? oe(c, () => {
                    a.replaceWith(i)
                }) : a.replaceWith(i)
            }

            function xu(e, t, n, s) {
                const o = parseInt(n, 10),
                    r = parseInt(s, 10);
                return b(e, ".js-expand", HTMLAnchorElement).filter(e => {
                    const n = "R" === t ? "data-right-range" : "data-left-range",
                        s = (e.getAttribute(n) || "").split("-"),
                        i = parseInt(s[0], 10),
                        a = parseInt(s[1], 10);
                    return i <= o && o <= a || (o <= i && a <= r || i <= r && r <= a)
                })
            }

            function Su(e, t) {
                const n = e.nextElementSibling;
                return n && n.matches(t) ? n : null
            }

            function Hu(e) {
                const t = e.querySelector(".js-toggle-file-notes");
                t instanceof HTMLInputElement && $(t, !0)
            }

            function Cu() {
                for (const e of document.querySelectorAll(".file .js-inline-comments-container")) {
                    const t = e.querySelectorAll(".js-comments-holder > *").length > 0,
                        n = e.querySelector(".js-inline-comment-form-container"),
                        s = !!n && n.classList.contains("open");
                    t || s || e.remove()
                }
            }

            function qu(e) {
                const t = v(document, e).firstElementChild;
                if (!t) throw new Error("invariant: app/assets/modules/github/pages/diffs/line-comments.js:200");
                const n = t.cloneNode(!0),
                    s = n.querySelector("textarea");
                return s instanceof HTMLTextAreaElement && (s.value = ""), n
            }

            function Iu(e, t) {
                const n = ["type", "path", "position", "line", "side", "original-line", "start_line", "start_position", "start_side"];
                for (const a of n) {
                    const n = e.elements.namedItem(a);
                    if (n instanceof HTMLInputElement) {
                        const e = t.getAttribute(`data-${a}`) || "";
                        n.value = e
                    }
                }
                const s = t.getAttribute("data-position") || "",
                    o = t.getAttribute("data-anchor") || "",
                    r = v(e, ".js-comment-field"),
                    i = r.id.replace(/^r\d+ /, "").replace("${anchor}", o).replace("${position}", s);
                for (const a of e.querySelectorAll(`[for="${r.id}"]`)) a.setAttribute("for", i);
                r.id = i
            }

            function _u(e) {
                return Math.floor(e / 2)
            }

            function $u(e, t) {
                const n = e.parentElement;
                if (!n) return;
                const s = n.children;
                let o;
                if (4 === s.length)
                    for (let r = 0, i = s.length; r < i; r++) {
                        s[r] === e && (o = _u(r))
                    }
                for (let r = 0, i = s.length; r < i; r++) {
                    const e = s[r];
                    null != o && _u(r) !== o || e.classList.toggle("is-hovered", t)
                }
            }

            function Du() {
                const e = document.body;
                if (!e) throw new Error("invariant: app/assets/modules/github/pages/diffs/split.js:6");
                const t = document.querySelector("meta[name=diff-view]"),
                    n = t && t instanceof HTMLMetaElement ? t.content : "",
                    s = document.querySelector(".js-file-diff-split"),
                    o = !!("split" === n && s || document.querySelector(".wants-full-width-container"));
                e.classList.toggle("full-width", o)
            }

            function Ru(e) {
                const t = e.parentElement;
                if (!t) throw new Error("invariant: app/assets/modules/github/pages/diffs/tr-collapsing.js:17");
                const n = t.querySelectorAll("td.js-line-comments").length,
                    s = t.querySelectorAll("td.js-line-comments.is-collapsed").length;
                t.classList.toggle("is-collapsed", s > 0 && n === s)
            }

            function Bu(e) {
                const t = b(document, ".js-hook-event-checkbox", HTMLInputElement);
                for (const n of t) n.checked = n.matches(e)
            }
            ce(function() {
                if (document.querySelector(".js-file-line-container")) {
                    setTimeout(ku, 0);
                    const e = window.location.hash;
                    for (const t of document.querySelectorAll(".js-update-url-with-hash"))
                        if (t instanceof HTMLAnchorElement) t.hash = e;
                        else if (t instanceof HTMLFormElement) {
                        const n = new URL(t.action, window.location.origin);
                        n.hash = e, t.action = n.toString()
                    }
                }
            }), u("click", ".js-line-number", function(e) {
                if (!(e instanceof MouseEvent)) throw new Error("invariant: expected click event to be MouseEvent -- app/assets/modules/github/pages/blob/lines.js:184");
                const t = hu(e.currentTarget.id),
                    {
                        blobRange: n
                    } = t;
                if (!n) throw new Error("invariant: expected line number clicks to match range -- app/assets/modules/github/pages/blob/lines.js:189");
                const s = gu(window.location.hash);
                s && e.shiftKey && (t.blobRange = {
                        start: s.start,
                        end: n.end
                    }),
                    function(e) {
                        const t = window.scrollY;
                        Eu = !0, e(), window.scrollTo(0, t)
                    }(() => {
                        window.location.hash = bu(t)
                    })
            }), u("submit", ".js-jump-to-line-form", function(e) {
                const t = v(e.currentTarget, ".js-jump-to-line-field", HTMLInputElement).value.replace(/[^\d-]/g, "").split("-").map(e => parseInt(e, 10)).filter(e => e > 0).sort((e, t) => e - t);
                t.length && (window.location.hash = `L${t.join("-L")}`), e.preventDefault()
            }), g(".js-csv-filter-field", function(e) {
                if (!(e.target instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/pages/blob/csv.js:4");
                const t = e.target.value.toLowerCase();
                for (const n of document.querySelectorAll(".js-csv-data tbody tr")) n.hidden = !!t && !n.textContent.toLowerCase().includes(t)
            }), u("navigation:keydown", ".js-commits-list-item", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/pages/commits.js:6");
                "c" === e.detail.hotkey && v(e.target, ".js-navigation-open").click()
            }), ce(function() {
                const e = function(e) {
                    if (!e) return;
                    const t = Wl(e);
                    if (!t) return;
                    const n = t[1],
                        s = t[2],
                        o = t[3],
                        r = t[5];
                    return {
                        anchor: n,
                        side: s,
                        line: o,
                        lastLine: r,
                        hashFragment: n + s + o,
                        partialHashFragment: n + s
                    }
                }(window.location.hash);
                e && (G(document, e.hashFragment) && !e.lastLine || async function e(t, n) {
                    const {
                        anchor: s,
                        side: o,
                        line: r,
                        lastLine: i,
                        hashFragment: a,
                        partialHashFragment: c
                    } = t;
                    const l = G(document, s);
                    if (!l) return;
                    const u = l.nextElementSibling;
                    if (!u) return;
                    const d = xu(u, o, r, i);
                    if (!d.length) {
                        const e = G(document, a);
                        if (e) return void Mu(e);
                        const t = u.querySelector(".js-diff-load-container");
                        if (!t) return;
                        try {
                            await ci(t);
                            const e = G(document, a);
                            e instanceof HTMLElement && Mu(e)
                        } catch (Ah) {
                            Mu(u)
                        }
                        return
                    }
                    await
                    function(e, t) {
                        return Promise.all(e.map(e => Au(e, t)))
                    }(d, c);
                    const m = G(document, a);
                    const f = xu(u, o, r, i);
                    f.length ? e(t, n) : m ? Mu(m) : n < 1 && e(t, n + 1)
                }(e, 0))
            }), u("click", ".js-expand", function(e) {
                if (e.preventDefault(), !(e.currentTarget instanceof HTMLAnchorElement)) throw new Error("invariant: app/assets/modules/github/pages/diffs/expander.js:123");
                Au(e.currentTarget, null)
            }), u("click", ".js-add-single-line-comment", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) throw new Error("invariant: app/assets/modules/github/pages/diffs/line-comments.js:15");
                Hu(d(t, ".file"));
                const n = function(e) {
                    const t = d(e, "tr"),
                        n = Su(t, ".js-inline-comments-container");
                    if (n instanceof Element) {
                        const e = v(t, "button.js-add-line-comment"),
                            s = Array.from(n.querySelectorAll(".js-inline-comment-form")).pop();
                        return s instanceof HTMLFormElement && Iu(s, e), n
                    }
                }(t) || function(e) {
                    const t = d(e, "tr"),
                        n = qu("#js-inline-comments-single-container-template"),
                        s = n.querySelector(".js-inline-comment-form");
                    s instanceof HTMLFormElement && Iu(s, e);
                    return t.after(n), n
                }(t);
                ru(Array.from(n.querySelectorAll(".js-line-comments")).pop())
            }), u("click", ".js-add-split-line-comment", function(e) {
                const t = e.currentTarget;
                Hu(d(t, ".file"));
                const n = d(t, "tr"),
                    s = "addition" === t.getAttribute("data-type") ? "js-addition" : "js-deletion",
                    o = function(e, t, n) {
                        const s = e.querySelector(`.js-line-comments.${t}`);
                        if (s) {
                            const e = Array.from(s.querySelectorAll(".js-inline-comment-form")).pop();
                            if (!(e instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/pages/diffs/line-comments.js:225");
                            return Iu(e, n), s
                        }
                        const o = qu("#js-inline-comments-split-form-container-template");
                        o.classList.add(t);
                        const r = o.querySelector(".js-inline-comment-form");
                        r instanceof HTMLFormElement && Iu(r, n);
                        const i = e.querySelectorAll(`.${t}`);
                        i[i.length - 1].after(o);
                        for (const a of i) a.remove();
                        return o
                    }(function(e) {
                        let t = Su(e, ".js-inline-comments-container");
                        return t || (t = qu("#js-inline-comments-split-container-template"), e.after(t), t)
                    }(n), s, t);
                ru(Array.from(o.querySelectorAll(".js-line-comments")).pop())
            }), j(".js-inline-comment-form", async function(e, t) {
                let n;
                try {
                    n = await t.json()
                } catch (a) {
                    if (a.response) {
                        let t;
                        try {
                            t = a.response.json
                        } catch (c) {}
                        if (t) return void
                        function(e, t) {
                            const n = v(e, ".js-comment-form-error");
                            let s;
                            s = t.errors ? Array.isArray(t.errors) ? t.errors.join(", ") : t.errors : "There was an error posting your comment.";
                            n.textContent = s, n.style.display = "block", n.classList.remove("d-none")
                        }(e, t)
                    }
                    throw a
                }
                const s = n.json,
                    o = s.inline_comment,
                    r = e.closest(".js-line-comments");
                if (o) {
                    if (!r) throw new Error("invariant: app/assets/modules/github/pages/diffs/line-comments.js:105");
                    v(r, ".js-comments-holder").append(Ae(document, o))
                }
                const i = s.inline_comment_thread;
                if (i) {
                    if (!r) throw new Error("invariant: app/assets/modules/github/pages/diffs/line-comments.js:113");
                    r.replaceWith(Ae(document, i))
                }
                iu(e)
            }), document.addEventListener("session:resume", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/pages/diffs/line-comments.js:167");
                ! function(e) {
                    const [t, n] = e.match(/^new_inline_comment_(?:discussion|diff)_(?:[\w-]+)_(\d+)_(\d+)$/) || [];
                    if (!t) return;
                    const s = document.querySelector(`.js-inline-comment-form input[name='in_reply_to'][value='${n}']`);
                    if (!s) return;
                    const o = s.closest(".js-line-comments");
                    o && ru(o)
                }(e.detail.targetId),
                function(e) {
                    const [t, n] = e.match(/^new_inline_comment_diff_(?:[\w-]+)_(\d+)$/) || [];
                    if (!t) return;
                    const s = document.querySelector(`.js-add-line-comment[data-anchor='${t}'][data-position='${n}']`);
                    s && s.click()
                }(e.detail.targetId)
            }), r(".js-comment", {
                remove: Cu
            }), document.addEventListener("inlinecomment:collapse", () => {
                Cu()
            }), r(".diff-table", function(e) {
                let t = null;

                function n(e) {
                    if (!(e instanceof MouseEvent)) throw new Error("invariant: app/assets/modules/github/pages/diffs/line-highlight.js:41");
                    t && $u(t, !1), t = null
                }

                function s(e) {
                    if (!(e instanceof MouseEvent)) throw new Error("invariant: app/assets/modules/github/pages/diffs/line-highlight.js:51");
                    t && $u(t, !1), e.target instanceof HTMLElement && (t = e.target.closest("td.blob-code")) && $u(t, !0)
                }
                return {
                    add: function() {
                        e.addEventListener("mouseenter", n), e.addEventListener("mouseleave", n), e.addEventListener("mouseover", s)
                    },
                    remove: function() {
                        e.removeEventListener("mouseenter", n), e.removeEventListener("mouseleave", n), e.removeEventListener("mouseover", s)
                    }
                }
            }), u("click", ".js-rich-diff.collapsed .js-expandable", function(e) {
                e.preventDefault();
                const t = e.target.closest(".js-rich-diff");
                if (!t) throw new Error("invariant: app/assets/modules/github/pages/diffs/prose-diff.js:6");
                t.classList.remove("collapsed")
            }), u("click", ".js-show-rich-diff", function(e) {
                const t = e.currentTarget.closest(".js-warn-no-visible-changes");
                if (!t) return;
                t.classList.add("d-none");
                const n = t.parentElement;
                if (!n) throw new Error("invariant: app/assets/modules/github/pages/diffs/prose-diff.js:16");
                const s = n.querySelector(".js-no-rich-changes");
                s && s.classList.remove("d-none")
            }), r("meta[name=diff-view]", {
                add: Du,
                remove: Du
            }), r(".js-file-diff-split", {
                add: Du,
                remove: Du
            }), r(".js-compare-tab.selected", {
                add: Du,
                remove: Du
            }), r(".wants-full-width-container", {
                add: Du,
                remove: Du
            }), u("change", ".js-toggle-file-notes", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/pages/diffs/toggle-file-notes.js:11");
                d(t, ".file").classList.toggle("show-inline-notes", t.checked)
            }), u("click", ".js-toggle-all-file-notes", function(e) {
                const t = b(document, ".js-toggle-file-notes", HTMLInputElement),
                    n = t.some(e => e.checked);
                for (const s of t) $(s, !n);
                e.preventDefault()
            }), r(".js-inline-comments-container", function(e) {
                let t;
                const n = e.closest(".file");
                if (n) {
                    return {
                        add: t = function() {
                            const e = null != n.querySelector(".js-inline-comments-container");
                            n.classList.toggle("has-inline-notes", e)
                        },
                        remove: t
                    }
                }
            }), u("change", ".js-toggle-file-check-annotations", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/pages/diffs/toggle-check-annotations.js:9");
                const n = d(t, ".file").querySelectorAll(".js-inline-annotations");
                for (const s of n) s.hidden = !t.checked
            }), r("td.js-line-comments.is-collapsed", {
                add: Ru,
                remove: Ru
            }), r(".js-hook-url-field", {
                constructor: HTMLInputElement,
                add(e) {
                    function t() {
                        const t = e.form;
                        if (!t) throw new Error("invariant: app/assets/modules/github/pages/hooks.js:16");
                        let n;
                        try {
                            n = new URL(e.value)
                        } catch (Ah) {}
                        const s = t.querySelector(".js-invalid-url-notice");
                        s && (s.hidden = !!("" === e.value || n && /^https?:/.test(n.protocol)));
                        const o = t.querySelector(".js-insecure-url-notice");
                        o && n && e.value && (o.hidden = /^https:$/.test(n.protocol)), v(t, ".js-ssl-hook-fields").hidden = !(n && "https:" === n.protocol)
                    }
                    M(e, t), t()
                }
            }), u("change", ".js-hook-event-choice", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/pages/hooks.js:58");
                const n = t.checked && "custom" === t.value,
                    s = t.closest(".js-hook-events-field");
                if (s && s.classList.toggle("is-custom", n), t.checked)
                    if (n) {
                        v(document, ".js-hook-wildcard-event", HTMLInputElement).checked = !1
                    } else "push" === t.value ? Bu('[value="push"]') : "all" === t.value && Bu(".js-hook-wildcard-event")
            }), u("details:toggled", ".js-hook-secret", function(e) {
                const t = e.currentTarget,
                    n = v(t, "input[type=password]", HTMLInputElement);
                t.classList.contains("open") && n.focus()
            }), u("click", ".js-hook-deliveries-pagination-button", async function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/pages/hooks.js:88");
                t.disabled = !0;
                const n = t.parentElement;
                if (!n) throw new Error("invariant: app/assets/modules/github/pages/hooks.js:91");
                const s = p(t, "data-url");
                n.before(await B(document, s)), n.remove()
            }), j(".js-redeliver-hook-form", async function(e, t) {
                let n;
                try {
                    n = await t.html()
                } catch (i) {
                    if (!e.parentElement) throw new Error("invariant: app/assets/modules/github/pages/hooks.js:104");
                    return void e.classList.add("failed")
                }
                const s = e.getAttribute("data-delivery-guid") || "",
                    o = v(document, `.js-hook-delivery-container[data-delivery-guid="${s}"]`),
                    r = o.parentElement;
                if (!r) throw new Error("invariant: app/assets/modules/github/pages/hooks.js:112");
                o.replaceWith(n.html), v(r, "poll-include-fragment").addEventListener("load", function() {
                    const e = v(r, ".js-hook-delivery-container"),
                        t = v(r, ".js-item-status"),
                        n = e.getAttribute("data-status-class");
                    t.classList.remove("success", "pending", "failure"), n && t.classList.add(n);
                    const s = r.querySelector(".js-item-status-tooltip"),
                        o = e.getAttribute("data-status-message");
                    s && o && s.setAttribute("aria-label", o)
                })
            }), j(".js-test-hook-form", async function(e, t) {
                const n = v(document, ".js-test-hook-message");
                n.classList.remove("error", "success");
                try {
                    await t.text()
                } catch (s) {
                    n.classList.add("error");
                    const e = v(n, ".js-test-hook-message-errors");
                    if (null != s.response) {
                        const t = await s.response.json();
                        e.textContent = t.errors
                    } else e.textContent = e.getAttribute("data-network-error-message") || "";
                    return
                }
                n.classList.add("success")
            }), j(".js-toggler-container .js-set-approval-state", async function(e, t) {
                const n = d(e, ".js-toggler-container");
                n.classList.add("loading");
                const s = await t.json();
                "approved" === s.json.approval_state ? n.classList.add("on") : "denied" === s.json.approval_state && (n.classList.add("revoked"), n.classList.remove("on")), n.classList.remove("loading")
            }), j(".js-request-access-approval-form", async function(e, t) {
                await t.text();
                const n = p(e, "data-container-id");
                v(document, `#${n}`).classList.add("on")
            }), r(".js-suggested-usernames-container", function(e) {
                const t = b(e, ".js-suggested-username", HTMLInputElement),
                    n = document.querySelector(".js-signup-form");
                if (n && 0 !== t.length)
                    for (const s of t) n.appendChild(s)
            }), h(".js-email-notice-trigger", function(e) {
                const t = b(document, ".js-email-notice");
                for (const n of t) n.classList.add("notice-highlight");
                e.addEventListener("blur", function() {
                    for (const e of t) e.classList.remove("notice-highlight")
                })
            }), r(".js-plan-choice:checked", {
                add(e) {
                    const t = e.closest(".plan-row");
                    t && t.classList.add("selected")
                },
                remove(e) {
                    const t = e.closest(".plan-row");
                    t && t.classList.remove("selected")
                }
            }), r(".js-setup-organization:checked", {
                add() {
                    const e = v(document, ".js-choose-plan-submit");
                    e.getAttribute("data-default-text") || e.setAttribute("data-default-text", e.textContent), e.textContent = e.getAttribute("data-org-text") || ""
                },
                remove() {
                    const e = v(document, ".js-choose-plan-submit");
                    e.textContent = e.getAttribute("data-default-text") || ""
                }
            });
            const Nu = new WeakMap;

            function Pu({
                target: e
            }) {
                if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/pages/signup.js:84");
                const t = d(e, "form");
                if (e.closest("input[type=text]") && !Nu.get(t)) {
                    const e = v(t, ".js-signup-source", HTMLInputElement);
                    ve({
                        category: "Signup",
                        action: "Attempt",
                        label: e.value
                    }), Nu.set(t, !0)
                }
            }

            function Fu() {
                const e = v(document, ".js-password-with-confirmation", HTMLInputElement),
                    t = v(document, ".js-password-confirm", HTMLInputElement);
                t.value !== e.value ? function(e) {
                    const t = d(e, ".js-form-group");
                    t.classList.add("errored");
                    const n = e.getAttribute("data-validity-message");
                    if (n) {
                        e.setCustomValidity(n);
                        const t = d(e, "form", HTMLFormElement);
                        xs(t)
                    }
                    const s = t.querySelector(".error"),
                        o = e.getAttribute("data-error-message");
                    if (!s && o) {
                        const e = document.createElement("dd");
                        e.classList.add("error"), e.innerHTML = o, t.appendChild(e)
                    }
                }(t) : function(e) {
                    const t = d(e, ".js-form-group");
                    e.setCustomValidity(""), t.classList.remove("errored"), xs(d(e, "form", HTMLFormElement));
                    const n = t.querySelector(".error");
                    n && t.removeChild(n)
                }(t)
            }
            let Ou;
            r(".js-signup-form", {
                subscribe: e => q(e, "input", Pu)
            }), r(".js-octocaptcha-parent", function(e) {
                if (!(e instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/pages/signup.js:99");
                const t = v(e, ".js-octocaptcha-spinner"),
                    n = v(e, ".js-octocaptcha-success"),
                    s = v(e, ".js-octocaptcha-token", HTMLInputElement),
                    o = v(e, ".js-octocaptcha-form-submit", HTMLButtonElement),
                    r = v(e, ".js-octocaptcha-frame-container"),
                    i = v(e, ".js-octocaptcha-frame"),
                    a = s.getAttribute("data-octocaptcha-url");
                let c = "true" === e.getAttribute("data-redirect-after-solved"),
                    l = !1;
                const u = () => {
                        l || (l = !0, t.classList.add("d-none"), n.classList.remove("d-none"), m())
                    },
                    d = () => {
                        if (l) return;
                        const t = document.createElement("input");
                        t.type = "hidden", t.id = "error_loading_captcha", t.name = "error_loading_captcha", t.value = "1", c = !1, e.appendChild(t), u()
                    },
                    m = () => {
                        e.checkValidity() && (o.disabled = !1, c && o.click())
                    };
                setTimeout(d, 2e4), i.addEventListener("error", d), window.addEventListener("message", e => {
                    if (e.origin !== a) return;
                    const n = e.data && e.data.event;
                    "captcha-loaded" === n ? l || (l = !0, t.classList.add("d-none"), r.classList.remove("v-hidden", "zero-height")) : "captcha-complete" === n ? (s.value = e.data.sessionToken, (() => {
                        const e = r.getAttribute("data-ga-event-category");
                        e && ve({
                            category: e,
                            action: "success",
                            label: "captcha verified"
                        })
                    })(), m()) : "captcha-suppressed" === n && u()
                })
            }), r(".js-survey-answer-choice:checked", {
                add(e) {
                    const t = e.closest(".js-answer-choice");
                    t && (t.classList.remove("border-black-fade", "bg-gray-light"), t.classList.add("border-blue", "bg-white"))
                },
                remove(e) {
                    const t = e.closest(".js-answer-choice");
                    t && (t.classList.remove("border-blue", "bg-white"), t.classList.add("border-black-fade", "bg-gray-light"))
                }
            }), r(".js-other-field:checked", {
                add(e) {
                    const t = d(e, ".js-answer");
                    v(t, ".js-specify-field", HTMLInputElement).hidden = !1
                },
                remove(e) {
                    const t = d(e, ".js-answer");
                    v(t, ".js-specify-field", HTMLInputElement).hidden = !0
                }
            }), r(".js-allow-multiple:checked", {
                constructor: HTMLInputElement,
                add(e) {
                    const t = parseInt(e.getAttribute("data-max-choices")),
                        n = d(e, ".js-question"),
                        s = b(n, ".js-allow-multiple", HTMLInputElement);
                    if (s.filter(e => !0 === e.checked).length >= t)
                        for (const o of s) !1 === o.checked && (o.disabled = !0)
                },
                remove(e) {
                    const t = d(e, ".js-question");
                    for (const n of b(t, ".js-allow-multiple", HTMLInputElement)) n.disabled = !1
                }
            }), m("keyup", ".js-password-with-confirmation", () => {
                "" !== v(document, ".js-password-confirm", HTMLInputElement).value && Fu()
            }), m("keyup", ".js-password-confirm", Fu);
            let Uu = null;

            function Wu(e) {
                const {
                    item: t,
                    oldIndex: n
                } = e, {
                    parentNode: s
                } = t;
                if (!(s instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/pinned-issue-reordering.js:19");
                Uu = s.children[n + 1]
            }
            async function zu(e) {
                const {
                    oldIndex: t,
                    newIndex: n,
                    item: s
                } = e;
                if (t === n) return;
                const o = d(s, ".js-pinned-issues-reorder-form", HTMLFormElement),
                    r = d(o, ".js-pinned-issues-reorder-container"),
                    i = v(r, ".js-pinned-issues-spinner");
                i.style.display = "inline-block", Ou.option("disabled", !0);
                try {
                    await S(o.action, {
                        method: o.method,
                        body: new FormData(o)
                    }), i.style.display = "none", Ou.option("disabled", !1)
                } catch (Ah) {
                    const t = s.parentNode;
                    if (!t) throw new Error("invariant: app/assets/modules/github/pinned-issue-reordering.js:49");
                    Uu ? t.insertBefore(s, Uu) : t.appendChild(s)
                }
            }
            r(".js-pinned-issues-reorder-list", function(e) {
                Ou = _e.create(e, {
                    animation: 150,
                    item: ".js-pinned-issue-list-item",
                    handle: ".js-pinned-issue-reorder",
                    onUpdate: zu,
                    onStart: Wu,
                    chosenClass: "is-dragging"
                })
            }), u("submit", ".js-pinned-issues-reorder-form", function(e) {
                e.preventDefault()
            }), u("click", ".js-pinned-issue-list-item .js-sortable-button", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/pinned-issue-reordering.js:75");
                ml(e, d(e, ".js-pinned-issue-list-item"), zu)
            });
            let Vu = null;
            u("pjax:click", ".js-pjax-capture-input", function() {
                Vu = function(e) {
                    const t = e.createElement("textarea");
                    if (t.style.position = "fixed", t.style.top = "0", t.style.left = "0", t.style.opacity = "0", !e.body) throw new Error("unconstructed document.body");
                    return e.body.appendChild(t), t.focus(), () => (t.blur(), t.remove(), t.value)
                }(document)
            }), u("pjax:end", "#js-repo-pjax-container", function() {
                if (Vu) {
                    const e = Vu(),
                        t = document.querySelector(".js-pjax-restore-captured-input");
                    t instanceof HTMLInputElement && e && $(t, e), Vu = null
                }
            }), u("pjax:click", ".js-pjax-history-navigate", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/pjax/history-navigate.js:11");
                e.currentTarget.href === Fe() ? (history.back(), e.detail.relatedEvent.preventDefault(), e.preventDefault()) : e.currentTarget.href === Oe() && (history.forward(), e.detail.relatedEvent.preventDefault(), e.preventDefault())
            }), r("link[rel=pjax-prefetch]", {
                constructor: HTMLLinkElement,
                initialize(e) {
                    const t = Ue(e, {
                        headers: {
                            Purpose: "prefetch"
                        }
                    });
                    We(e, t)
                }
            });
            class PreciseTimeAgoElement extends RelativeTimeElement {
                connectedCallback() {
                    Ku.push(this), Yu || (Xu(), Yu = setInterval(Xu, 1e3))
                }
                disconnectedCallback() {
                    const e = Ku.indexOf(this); - 1 !== e && Ku.splice(e, 1), Ku.length || (clearInterval(Yu), Yu = null)
                }
                getFormattedDate() {
                    const e = this.date;
                    if (!e) return;
                    if (!(e instanceof Date)) throw new Error("invariant: app/assets/modules/github/precise-time-ago-element.js:39");
                    const t = (new Date).getTime() - e.getTime(),
                        n = Math.floor(t / 1e3),
                        s = Math.floor(n / 60),
                        o = Math.floor(s / 60),
                        r = Math.floor(o / 24),
                        i = n - 60 * s,
                        a = s - 60 * o;
                    return s < 1 ? `${n}s` : o < 1 ? `${s}m ${i}s` : r < 1 ? `${o}h ${a}m ${i}s` : `${r}d ${o-24*r}h ${a}m ${i}s`
                }
            }
            const Ku = [];
            let Yu;

            function Xu() {
                for (const e of Ku) e.textContent = e.getFormattedDate() || ""
            }
            window.customElements.get("precise-time-ago") || (window.PreciseTimeAgoElement = PreciseTimeAgoElement, window.customElements.define("precise-time-ago", PreciseTimeAgoElement)), r("body.js-print-popup", () => {
                window.print(), setTimeout(window.close, 1e3)
            }), u("click", ".js-new-user-contrib-example", async function(e) {
                const t = v(document, ".js-calendar-graph");
                if (t.classList.contains("sample-graph")) return;
                t.classList.add("sample-graph");
                const n = p(e.currentTarget, "data-url");
                let s;
                try {
                    s = await S(n)
                } catch (Ah) {
                    return void t.classList.remove("sample-graph")
                }
                const o = document.createElement("div");
                o.innerHTML = s;
                const r = t.querySelector(".js-calendar-graph-svg");
                if (!r) throw new Error("invariant: app/assets/modules/github/profile/calendar-sample.js:29");
                r.replaceWith(o.children[0])
            });
            let Ju = null;

            function Gu() {
                const e = v(document, ".js-calendar-graph"),
                    t = p(e, "data-url");
                return new URL(t, window.location.origin)
            }

            function Qu(e) {
                const {
                    target: t
                } = e;
                if (!(t instanceof Element)) throw new Error("invariant: app/assets/modules/github/profile/contributions.js:56");
                t.matches("rect.day") && (Zu(), function(e) {
                    const t = document.body;
                    if (!t) throw new Error("invariant: app/assets/modules/github/profile/contributions.js:87");
                    const n = p(e, "data-date"),
                        s = function(e, t) {
                            const n = `${ed[t.getUTCMonth()].slice(0,3)} ${t.getUTCDate()}, ${t.getUTCFullYear()}`,
                                s = 0 === e ? "No" : Ee(e),
                                o = document.createElement("div");
                            o.classList.add("svg-tip", "svg-tip-one-line"), o.style.pointerEvents = "none";
                            const r = document.createElement("strong");
                            return r.textContent = `${s} ${w(e,"contribution")}`, o.append(r, ` on ${n}`), o
                        }(parseInt(e.getAttribute("data-count")), ld(n));
                    t.appendChild(s);
                    const o = e.getBoundingClientRect(),
                        r = o.left + window.pageXOffset - s.offsetWidth / 2 + o.width / 2,
                        i = o.bottom + window.pageYOffset - s.offsetHeight - 2 * o.height;
                    s.style.top = `${i}px`, s.style.left = `${r}px`
                }(t))
            }

            function Zu() {
                const e = document.querySelector(".svg-tip");
                e && e.remove()
            }
            r(".js-calendar-graph-svg", function(e) {
                const t = d(e, ".js-calendar-graph");
                t.addEventListener("mouseover", Qu), t.addEventListener("mouseout", Zu);
                let n = t.getAttribute("data-from");
                n && (n = Ju = ld(n));
                let s = t.getAttribute("data-to");
                s && (s = ld(s))
            }), u("click", ".js-calendar-graph rect.day", function(e) {
                if (!(e instanceof MouseEvent)) throw new Error("invariant: app/assets/modules/github/profile/contributions.js:37");
                const t = e.currentTarget;
                if (!(t instanceof Element)) throw new Error("invariant: app/assets/modules/github/profile/contributions.js:39");
                const n = d(t, ".js-calendar-graph"),
                    s = p(n, "data-org"),
                    o = p(t, "data-date");
                t.classList.contains("active") ? md(dd()) : function(e, t, n) {
                    let s, o;
                    if (Ju && t) {
                        const t = Ju.getTime(),
                            n = 26784e5,
                            r = t - n,
                            i = t + n;
                        [s, o] = e > Ju ? [Ju, e] : [e, Ju], s = new Date(Math.max(s.getTime(), r)), o = new Date(Math.min(o.getTime(), i)), Ju = null
                    } else Ju = o = s = e;
                    od(s, o);
                    const r = Gu(),
                        i = nd(r.search.slice(1), {
                            from: s,
                            to: o,
                            org: n
                        });
                    i.append("tab", "overview"), r.search = i.toString(), td(r.toString())
                }(ld(o), e.shiftKey, s)
            });
            const ed = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            async function td(e) {
                const t = document.getElementById("js-contribution-activity");
                if (!t) return;
                t.classList.add("loading");
                const n = await B(document, e);
                t.classList.remove("loading"), t.innerHTML = "", t.append(n)
            }

            function nd(e, t) {
                const n = new URLSearchParams(e);
                n.delete("from"), n.delete("to"), n.delete("org");
                let s = t.fromStr;
                t.from && (s = cd(t.from)), s && n.append("from", s);
                let o = t.toStr;
                t.to && (o = cd(t.to)), o && n.append("to", o);
                const r = t.org;
                return r && n.append("org", r), n
            }
            async function sd(e, t, n) {
                const s = v(document, ".js-calendar-graph"),
                    o = p(s, "data-graph-url"),
                    r = new URL(o, window.location.origin),
                    i = nd(r.search.slice(1), {
                        from: e,
                        to: t,
                        org: n
                    });
                r.search = i.toString();
                const a = await B(document, r.toString());
                v(document, ".js-yearly-contributions").replaceWith(a)
            }

            function od(e, t) {
                const n = v(document, ".js-calendar-graph"),
                    s = n.querySelectorAll("rect.day");
                for (const r of s) r.classList.remove("active");
                if (n.classList.remove("days-selected"), e || t) {
                    n.classList.add("days-selected");
                    for (const e of s) o(e) && e.classList.add("active")
                }

                function o(n) {
                    const s = ld(n.getAttribute("data-date") || "").getTime();
                    return e && t ? e.getTime() <= s && s <= t.getTime() : e ? s === e.getTime() : void 0
                }
            }

            function rd() {
                const e = v(document, ".js-calendar-graph").querySelectorAll("rect.active"),
                    t = e[0],
                    n = e[e.length - 1],
                    s = t && p(t, "data-date"),
                    o = n && p(n, "data-date");
                if (s && o) return {
                    first: s,
                    last: o
                }
            }

            function id() {
                const e = rd() || function() {
                    const e = new URLSearchParams(window.location.search.slice(1)),
                        t = e.get("from"),
                        n = e.get("to");
                    if (t && n) return {
                        first: t,
                        last: n
                    }
                }() || function() {
                    const e = new URL(dd(), window.location.origin),
                        t = new URLSearchParams(e.search.slice(1)),
                        n = t.get("from"),
                        s = t.get("to");
                    if (n && s) return {
                        first: n,
                        last: s
                    }
                }();
                if (!e) throw new Error("invariant: app/assets/modules/github/profile/contributions.js:259");
                return e
            }

            function ad(e) {
                return `0${e}`.slice(-2)
            }

            function cd(e) {
                return `${e.getUTCFullYear()}-${ad(e.getUTCMonth()+1)}-${ad(e.getUTCDate())}`
            }

            function ld(e) {
                const [t, n, s] = e.split("-").map(e => parseInt(e, 10));
                return new Date(Date.UTC(t, n - 1, s))
            }
            async function ud(e) {
                const t = rd(),
                    n = function() {
                        const e = v(document, ".js-calendar-graph");
                        return {
                            first: p(e, "data-from"),
                            last: p(e, "data-to")
                        }
                    }(),
                    s = new Date(n.first),
                    o = new Date(n.last);
                if (await sd(s, o, e), t) {
                    od(new Date(t.first), new Date(t.last))
                }
            }

            function dd() {
                return v(document, ".js-profile-timeline-year-list .js-year-link.selected", HTMLAnchorElement).href || ""
            }

            function md(e) {
                const t = new URL(e, window.location.origin).search,
                    n = new URLSearchParams(t.slice(1)),
                    s = n.get("org"),
                    o = n.get("from"),
                    r = n.get("to");
                if (!o || !r) throw new Error("invariant: app/assets/modules/github/profile/contributions.js:408");
                const i = new Date(o),
                    a = new Date(r);
                sd(i, a, s);
                const c = new Gu,
                    l = nd(c.search.slice(1), {
                        from: i,
                        to: a,
                        org: s
                    });
                l.append("tab", "overview"), c.search = l.toString(), td(c.toString())
            }

            function fd(e) {
                const t = e.closest(".js-details-container");
                t && t.classList.add("open");
                const n = e.getBoundingClientRect(),
                    s = window.scrollY + n.top - 62 - 10;
                window.scrollTo(0, s)
            }

            function pd(e) {
                v(document, ".js-profile-editable-area").hidden = e, v(document, ".js-profile-editable-form").hidden = !e, v(document, ".js-profile-editable-error").textContent = ""
            }
            u("click", ".js-org-filter-link", function(e) {
                    e.stopPropagation(), e.preventDefault();
                    const t = e.currentTarget;
                    if (!(t instanceof HTMLAnchorElement)) throw new Error("invariant: app/assets/modules/github/profile/contributions.js:342");
                    const n = d(t, ".js-org-filter-links-container").querySelector(".js-org-filter-link.selected"),
                        s = new URL(t.href, window.location.origin),
                        o = new URLSearchParams(s.search.slice(1)),
                        r = o.get("org"),
                        i = id(),
                        a = new Date(i.first),
                        c = new Date(i.last);
                    n && n.classList.remove("selected"), t !== n && t.classList.add("selected"), ud(r);
                    const l = Gu(),
                        u = {
                            org: r,
                            from: null,
                            to: null
                        };
                    o.has("from") && (u.from = a), o.has("to") && (u.to = c);
                    const m = nd(l.search.slice(1), u);
                    l.search = m.toString(), td(l.toString()), async function(e, t) {
                        const n = document.getElementById("year-list-container");
                        if (!n) return;
                        t.append("year_list", "1"), e.search = t.toString();
                        const s = await B(document, e.toString());
                        n.innerHTML = "", n.append(s)
                    }(l, m), ze(null, "", l.toString())
                }), u("click", ".js-year-link", function(e) {
                    e.stopPropagation(), e.preventDefault();
                    const t = e.currentTarget;
                    if (!(t instanceof HTMLAnchorElement)) throw new Error("invariant: app/assets/modules/github/profile/contributions.js:387");
                    const n = d(t, "ul");
                    v(n, ".js-year-link.selected").classList.remove("selected"), t.classList.add("selected"), md(t.href), ze(null, "", t.href)
                }),
                function() {
                    const e = window.location.hash;
                    if (!e || e.indexOf("#event-") < 0) return;
                    const t = e.slice(1, e.length),
                        n = document.getElementById(t);
                    n && fd(n)
                }(), window.addEventListener("hashchange", function(e) {
                    const t = e.newURL || window.location.href,
                        n = t.slice(t.indexOf("#") + 1, t.length),
                        s = document.getElementById(n);
                    s && (e.stopPropagation(), fd(s))
                }), j(".js-show-more-timeline-form", async function(e, t) {
                    await t.text();
                    const n = document.querySelector(".js-show-more-timeline-form");
                    if (n) {
                        const t = p(n, "data-year"),
                            s = v(document, ".js-year-link.selected"),
                            o = v(document, `#year-link-${t}`);
                        if (s.classList.remove("selected"), o.classList.add("selected"), t !== e.getAttribute("data-year")) {
                            const e = p(n, "data-from"),
                                t = new Date(e),
                                s = p(n, "data-to");
                            sd(t, new Date(s), n.getAttribute("data-org"))
                        }
                    }
                    document.title = e.getAttribute("data-title") || "", ze(null, "", e.getAttribute("data-url") || "")
                });
            let gd = null;
            u("click", ".js-profile-editable-edit-button", function() {
                ! function() {
                    const e = v(document, ".js-user-profile-bio").textContent;
                    "string" == typeof e && (v(document, ".js-user-profile-bio-edit", HTMLTextAreaElement).value = e)
                }(), pd(!0)
            }), u("click", ".js-profile-editable-cancel", function() {
                pd(!1)
            }), u("change", ".js-profile-editable-pro-badge", function(e) {
                if (!(e.target instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/profile/inline-editable-profile.js:33");
                gd = {
                    preference: e.target.checked
                }
            }), j(".js-profile-editable-form", async (e, t) => {
                let n;
                try {
                    n = await t.html()
                } catch (s) {
                    if (422 === s.response.status) {
                        v(document, ".js-profile-editable-error").textContent = s.response.json.message
                    }
                    return
                }
                if (function(e) {
                        v(document, ".js-profile-editable-area").replaceWith(e)
                    }(n.html), pd(!1), gd) {
                    v(document, ".js-pro-badge").classList.toggle("d-none", !gd.preference)
                }
            });
            const hd = new WeakMap,
                bd = 100;
            async function vd(e, t) {
                if (t) {
                    if ((hd.get(e) || 0) > bd) return
                }
                const n = e.querySelector(".js-more-pinnable-items-button");
                if (!n) return;
                if (!(n instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/profile/pinned-items.js:30");
                if (n.textContent = p(n, "data-disable-with"), n.disabled = !0, t) {
                    const t = hd.get(e) || 0;
                    hd.set(e, t + 1)
                }
                const s = p(n, "data-url"),
                    o = await B(document, s);
                n.replaceWith(o),
                    function(e) {
                        const t = e.querySelector(".js-pinned-items-filter");
                        t && L(t, "filterable:change")
                    }(e)
            }
            async function wd({
                currentTarget: e
            }) {
                const t = v(e, ".js-pinned-items-selection-list");
                await f();
                const n = b(t, "input[type=checkbox]", HTMLInputElement),
                    s = n.filter(e => e.checked).length,
                    o = parseInt(t.getAttribute("data-max-repo-count"), 10);
                for (const r of n) r.disabled = s === o && !r.checked;
                ! function(e, t, n) {
                    const s = v(e, ".js-remaining-pinned-items-count"),
                        o = p(s, "data-remaining-label"),
                        r = n - t;
                    s.textContent = `${r} ${o}`, s.classList.toggle("text-red", r < 1)
                }(d(t, ".js-pinned-items-selection-form", HTMLFormElement), s, o)
            }

            function jd(e) {
                const t = v(e, ".js-pinnable-item");
                return {
                    name: t.textContent.toLowerCase().trim(),
                    isPinned: v(e, 'input[type="checkbox"]', HTMLInputElement).checked,
                    element: e,
                    isRepository: t.classList.contains("js-pinnable-repo"),
                    isGist: t.classList.contains("js-pinnable-gist")
                }
            }

            function yd(e, t, n) {
                if (e.isPinned) return !0;
                const s = !t || e.name.indexOf(t) > -1,
                    o = e.isRepository && n.includeRepositories,
                    r = e.isGist && n.includeGists;
                return s && (o || r)
            }

            function Ed(e) {
                const t = e.target;
                if (!(t instanceof Element)) throw new Error("invariant: app/assets/modules/github/profile/pinned-items.js:181");
                const n = d(t, ".js-pinned-items-selection-form");
                let s = null;
                if (t.classList.contains("js-pinned-items-search")) {
                    if (!((s = t) instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/profile/pinned-items.js:187")
                } else s = v(n, ".js-pinned-items-search", HTMLInputElement);
                const o = s.value.toLowerCase().trim(),
                    r = function(e) {
                        if (! function(e) {
                                return !!e.querySelector(".js-pinned-items-type-filter")
                            }(e)) return {
                            includeRepositories: !0,
                            includeGists: !0
                        };
                        const t = b(e, ".js-pinned-items-type-filter:checked", HTMLInputElement),
                            n = t.map(e => e.value),
                            s = n.indexOf("repository") > -1,
                            o = n.indexOf("gist") > -1;
                        for (const r of t) r.disabled = s !== o;
                        return {
                            includeRepositories: s,
                            includeGists: o
                        }
                    }(n);
                let i = !1;
                const a = Array.from(n.querySelectorAll(".js-pinned-items-selection"));
                for (const c of a) {
                    const e = jd(c),
                        t = yd(e, o, r);
                    t && (i = !0), e.element.hidden = !t
                }
                v(n, ".js-no-repos-message").hidden = i
            }
            let Ld;
            r(".js-more-pinnable-items-button", function(e) {
                const t = d(e, ".js-pinned-items-selection-form");
                (function(e) {
                    const t = e.querySelector(".js-pinned-items-filter");
                    if (!t) return !1;
                    if (document.activeElement === t) return !0;
                    if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/profile/pinned-items.js:63");
                    return t.defaultValue.trim().length > 0
                })(t) && vd(t, !0)
            }), u("click", ".js-more-pinnable-items-button", function(e) {
                const t = e.target;
                vd(d(t, ".js-pinned-items-selection-form"), !1)
            }), m("keydown", ".js-pinned-items-search", function(e) {
                if (!(e instanceof KeyboardEvent)) throw new Error("invariant: app/assets/modules/github/profile/pinned-items.js:214");
                "Enter" === Y(e) && e.preventDefault()
            }), h(".js-pinned-items-search", function(e) {
                vd(d(e, ".js-pinned-items-selection-form"), !0)
            }), g(".js-pinned-items-search", Ed), u("change", ".js-pinned-items-filter", Ed), u("search", ".js-pinned-items-search", Ed), u("change", ".js-pinned-items-selection-form", wd), u("reset", ".js-pinned-items-selection-form", wd);
            let Td = null;

            function kd(e) {
                const {
                    item: t,
                    oldIndex: n
                } = e, {
                    parentNode: s
                } = t;
                if (!(s instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/profile/pinned-item-reordering.js:19");
                Td = s.children[n + 1]
            }
            async function Md(e) {
                const {
                    oldIndex: t,
                    newIndex: n,
                    item: s
                } = e;
                if (t === n) return;
                const o = d(s, ".js-pinned-items-reorder-form", HTMLFormElement),
                    r = d(o, ".js-pinned-items-reorder-container"),
                    i = v(r, ".js-pinned-items-spinner"),
                    a = v(r, ".js-pinned-items-reorder-message");
                a.textContent = "", i.style.display = "inline-block", Ld.option("disabled", !0);
                try {
                    await S(o.action, {
                        method: o.method,
                        body: new FormData(o)
                    }), a.textContent = a.getAttribute("data-success-text") || "", i.style.display = "none", Ld.option("disabled", !1)
                } catch (Ah) {
                    a.textContent = a.getAttribute("data-error-text") || "", i.style.display = "none";
                    const t = s.parentNode;
                    if (!t) throw new Error("invariant: app/assets/modules/github/profile/pinned-item-reordering.js:54");
                    Td ? t.insertBefore(s, Td) : t.appendChild(s)
                }
            }

            function Ad(e, t) {
                t > 0 && (e.textContent = function(e) {
                    return e > 999 ? `${(e/1e3).toFixed(1)}k` : e.toLocaleString()
                }(t))
            }
            r(".js-pinned-items-reorder-list", function(e) {
                Ld = _e.create(e, {
                    animation: 150,
                    item: ".js-pinned-item-list-item",
                    handle: ".js-pinned-item-reorder",
                    onUpdate: Md,
                    onStart: kd,
                    chosenClass: "is-dragging"
                })
            }), u("submit", ".js-pinned-items-reorder-form", function(e) {
                e.preventDefault()
            }), u("click", ".js-pinned-item-list-item .js-sortable-button", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/profile/pinned-item-reordering.js:80");
                ml(e, d(e, ".js-pinned-item-list-item"), Md)
            }), r(".js-user-profile-sticky-fields.is-stuck", function() {
                const e = v(document, ".js-user-profile-sticky-bar");
                return {
                    add() {
                        e.classList.add("is-stuck")
                    },
                    remove() {
                        e.classList.remove("is-stuck")
                    }
                }
            }), r(".js-user-profile-follow-button.is-stuck", function() {
                const e = v(document, ".js-user-profile-sticky-bar");
                return {
                    add() {
                        e.classList.add("is-follow-stuck")
                    },
                    remove() {
                        e.classList.remove("is-follow-stuck")
                    }
                }
            }), r(".js-user-profile-following-toggle .js-toggler-container.on", function() {
                return {
                    add() {
                        const e = document.querySelector(".js-user-profile-following-mini-toggle .js-toggler-container");
                        e && e.classList.add("on")
                    },
                    remove() {
                        const e = document.querySelector(".js-user-profile-following-mini-toggle .js-toggler-container");
                        e && e.classList.remove("on")
                    }
                }
            }), r(".js-user-profile-following-mini-toggle .js-toggler-container.on", function() {
                const e = v(document, ".js-user-profile-following-toggle .js-toggler-container");
                return {
                    add() {
                        e.classList.add("on")
                    },
                    remove() {
                        e.classList.remove("on")
                    }
                }
            }), r(".js-profile-tab-count-container", function(e) {
                !async function(e) {
                    const t = new URL(p(e, "data-url"), window.location.origin),
                        n = new URLSearchParams(t.search.slice(1)),
                        s = e.querySelector(".js-profile-repository-count"),
                        o = e.querySelector(".js-profile-project-count"),
                        r = e.querySelector(".js-profile-package-count"),
                        i = e.querySelector(".js-profile-team-count"),
                        a = e.querySelector(".js-profile-member-count");
                    s && n.append("repo", "1"), o && n.append("project", "1"), r && n.append("package", "1"), i && n.append("team", "1"), a && n.append("member", "1"), t.search = n.toString();
                    const l = await c(t.toString()),
                        u = (await l.json()).data;
                    s && u.repositories && Ad(s, u.repositories.totalCount), o && u.projects && Ad(o, u.projects.totalCount), r && u.registryPackages && Ad(r, u.registryPackages.totalCount), i && u.teams && Ad(i, u.teams.totalCount), a && u.members && Ad(a, u.members.totalCount)
                }(e)
            });
            const xd = document.querySelector("meta[name=js-proxy-site-detection-payload]"),
                Sd = document.querySelector("meta[name=expected-hostname]");
            if (xd instanceof HTMLMetaElement && Sd instanceof HTMLMetaElement && s(document)) {
                const e = {
                        url: window.location.href,
                        expectedHostname: Sd.content,
                        documentHostname: document.location.hostname,
                        proxyPayload: xd.content
                    },
                    n = new Error,
                    s = {};
                s.$__ = btoa(JSON.stringify(e)), t(n, s)
            }

            function Hd(e, t, n) {
                const s = Array.from(e.querySelectorAll('[role="menuitem"]'));
                let o = s.indexOf(t),
                    r = s.indexOf(n);
                if (-1 === o) throw new Error("Couldn't find startIndex in container");
                if (-1 === r) throw new Error("Couldn't find endItem in container");
                Cd(e), s[r].classList.add("is-last-in-range"), o > r && ([o, r] = [r, o]);
                for (const i of s.slice(o, r + 1)) i.classList.add("is-range-selected")
            }

            function Cd(e) {
                for (const t of e.querySelectorAll('[role="menuitem"]')) t.classList.remove("is-range-selected", "is-last-in-range")
            }
            let qd;

            function Id(e) {
                const t = document.querySelector("head .js-site-favicon");
                t instanceof HTMLLinkElement && (null == qd && (qd = t.href), t.href = e)
            }
            u("details-menu-select", ".js-pull-base-branch-menu", function() {
                const e = v(document, ".js-change-base-template", HTMLTemplateElement).content.cloneNode(!0);
                ne({
                    content: e
                })
            }, {
                capture: !0
            }), r(".js-diffbar-commits-menu .js-diffbar-commits-list", {
                subscribe: function(e) {
                    const t = d(e, "details-menu");
                    let n = !1;

                    function s(e) {
                        n = e.shiftKey, e.shiftKey && e.preventDefault()
                    }

                    function o(t) {
                        if (!n) return;
                        if (t.preventDefault(), !(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/pulls/commits-range-selection.js:81");
                        const s = t.detail.relatedTarget;
                        if (!(s instanceof Element)) throw new Error("invariant: app/assets/modules/github/pulls/commits-range-selection.js:83");
                        if (s.classList.contains("is-range-selected")) {
                            t.stopPropagation();
                            const n = e.querySelectorAll(".is-range-selected"),
                                s = n[0],
                                o = n[n.length - 1],
                                r = p(e, "data-range-url"),
                                i = s.getAttribute("data-parent-commit"),
                                a = p(o, "data-commit"),
                                c = i && a ? `${i}..${a}` : a,
                                l = r.replace("$range", c);
                            V({
                                url: l,
                                container: v(document, "#js-repo-pjax-container")
                            })
                        } else t.stopImmediatePropagation(), async function(e, t) {
                            function n(n) {
                                if (!(n.target instanceof Element)) throw new Error("invariant: app/assets/modules/github/pulls/commits-range-selection.js:39");
                                Hd(e, t, d(n.target, '[role="menuitem"]'))
                            }
                            Hd(e, t, t), e.addEventListener("mouseover", n), await new Promise(e => window.addEventListener("keyup", e, {
                                once: !0
                            })), e.removeEventListener("mouseover", n), Cd(e)
                        }(e, s)
                    }
                    return e.addEventListener("click", s, {
                        capture: !0
                    }), t.addEventListener("details-menu-select", o), {
                        unsubscribe: () => {
                            e.removeEventListener("click", s, {
                                capture: !0
                            }), t.removeEventListener("details-menu-select", o)
                        }
                    }
                }
            }), u("toggle", ".js-diffbar-commits-menu", function(e) {
                const t = e.currentTarget;
                if (!t.hasAttribute("open")) return;
                const n = t.querySelector(".in-range");
                n && n.focus()
            }, {
                capture: !0
            }), u("click", ".js-compare-tab", function(e) {
                for (const n of document.querySelectorAll(".js-compare-tab.selected")) n.classList.remove("selected");
                e.currentTarget.classList.add("selected");
                for (const n of document.querySelectorAll("#commits_bucket, #files_bucket, #commit_comments_bucket")) n.classList.add("d-none");
                if (!(e.currentTarget instanceof HTMLAnchorElement)) throw new Error("invariant: app/assets/modules/github/pulls/compare.js:19");
                const t = e.currentTarget.hash;
                v(document, t).classList.remove("d-none"), e.preventDefault()
            }), ce(function({
                target: e
            }) {
                if (!(e instanceof HTMLElement)) return;
                const t = e.closest("#commits_bucket, #files_bucket, #commit_comments_bucket");
                t && t instanceof HTMLElement && !Z(t) && v(document, `.js-compare-tab[href="#${t.id}"]`).click()
            }), u("click", ".js-toggle-range-editor-cross-repo", function() {
                v(document, ".js-range-editor").classList.toggle("is-cross-repo")
            }), u("pjax:click", ".js-range-editor", function(e) {
                const t = document.querySelector(".js-compare-pr");
                if (t && t.classList.contains("open")) {
                    if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/pulls/compare.js:51");
                    const t = e.detail.options,
                        n = new URL(t.url, window.location.origin);
                    n.search.match(/expand=1/) || (n.search += `${n.search?"&":""}expand=1`, t.url = n.toString())
                }
            }), r(".js-compare-pr.open", {
                add() {
                    const e = document.body;
                    if (!e) throw new Error("invariant: app/assets/modules/github/pulls/compare.js:64");
                    e.classList.add("is-pr-composer-expanded")
                },
                remove() {
                    const e = document.body;
                    if (!e) throw new Error("invariant: app/assets/modules/github/pulls/compare.js:70");
                    e.classList.remove("is-pr-composer-expanded")
                }
            }), u("change", ".js-collab-checkbox", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/pulls/composer.js:8");
                const t = e.form;
                if (!t) throw new Error("invariant: app/assets/modules/github/pulls/composer.js:10");
                for (const o of t.querySelectorAll(".errored")) o.classList.remove("errored");
                const n = d(e, ".js-collab-option"),
                    s = v(n, ".js-status-indicator");
                s.classList.remove("status-indicator-success", "status-indicator-failed"), s.classList.add("status-indicator-loading")
            }), j(".js-collab-form", async function(e, t) {
                try {
                    await t.text()
                } catch (n) {
                    for (const t of e.querySelectorAll(".status-indicator-loading")) {
                        t.classList.remove("status-indicator-loading"), t.classList.add("status-indicator-failed");
                        const e = d(t, ".js-collab-option");
                        e.classList.add("errored");
                        const n = v(e, ".js-collab-checkbox", HTMLInputElement);
                        n.checked = !n.checked
                    }
                    for (const t of e.querySelectorAll(".status-indicator-success")) t.classList.remove("status-indicator-success");
                    return
                }
                for (const s of e.querySelectorAll(".errored")) s.classList.remove("errored");
                for (const s of e.querySelectorAll(".status-indicator-loading")) s.classList.remove("status-indicator-loading"), s.classList.add("status-indicator-success")
            }), u("details-menu-selected", ".js-pull-request-menu", function(e) {
                const t = v(document, ".js-pull-request-button");
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/pulls/composer.js:58");
                const n = v(e.detail.relatedTarget, "span[data-menu-button-text]").textContent;
                t.textContent = n, t.focus()
            }, {
                capture: !0
            }), r(".js-timeline-item > .js-commit-group", {
                constructor: HTMLElement,
                add(e) {
                    if (e.querySelector(".js-commit-group-header")) return;
                    const t = e.closest(".js-timeline-item");
                    if (!(t instanceof HTMLElement)) return;
                    let n = t.previousElementSibling;
                    n instanceof HTMLElement && (n.classList.contains("js-timeline-item") || (n = n.previousElementSibling) instanceof HTMLElement) && n.querySelector(".js-commit-group") && function(e, t) {
                        const n = v(e, ".js-commit-group-commits"),
                            s = t.querySelectorAll(".js-commit-group-commits > .js-commit");
                        for (const r of s) r.classList.toggle("py-3"), n.appendChild(r);
                        const o = e.querySelector(".js-commit-group-count");
                        o instanceof HTMLElement && (o.textContent = `${n.querySelectorAll(".js-commit").length}`), t.remove()
                    }(n, t)
                }
            }), r("[data-favicon-override]", {
                add(e) {
                    const t = p(e, "data-favicon-override");
                    setTimeout(() => Id(t))
                },
                remove() {
                    null != qd && Id(qd)
                }
            }), u("click", ".js-file-header .js-details-target", function(e) {
                if (!(e instanceof MouseEvent && e.altKey && e.currentTarget instanceof HTMLElement)) {
                    const t = d(e.currentTarget, ".js-file");
                    return void(t.getBoundingClientRect().top < 0 && si(t))
                }
                const {
                    currentTarget: t
                } = e, n = d(t, ".js-details-container");
                n.addEventListener("details:toggled", function(e) {
                    if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/pulls/file-collapsing.js:27");
                    const {
                        open: t
                    } = e.detail;
                    oe(n, () => {
                            for (const e of document.querySelectorAll(".js-file.js-details-container")) e !== n && (e.classList.toggle("open", t), e.classList.toggle("Details--on", t))
                        }),
                        function(e) {
                            if (!document.querySelector(".js-file-filter")) return;
                            Li(e);
                            const t = gi();
                            t && (t.checked = !e), di(bi())
                        }(t)
                }, {
                    once: !0
                })
            }), ce(() => {
                const e = window.location.hash.slice(1);
                if (!e) return;
                const t = document.getElementsByName(e)[0];
                if (!t) return;
                const n = t.nextElementSibling;
                n && n.matches(".js-file.js-details-container") && (n.classList.add("open"), n.classList.add("Details--on"))
            }), r(".js-file-header-dropdown", {
                subscribe: e => q(e, "toggle", function({
                    currentTarget: e
                }) {
                    if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/pulls/file-collapsing.js:65");
                    const t = e,
                        n = t.hasAttribute("open"),
                        s = d(t, ".js-file-header");
                    if (!(s instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/pulls/file-collapsing.js:69");
                    s.classList.toggle("has-open-dropdown", n)
                })
            }), u("click", ".js-fork-cleanup-select-item", function({
                currentTarget: e
            }) {
                const t = d(e, ".js-fork-cleanup-select-menu");
                for (const o of b(t, ".js-fork-cleanup-select-item")) o.classList.remove("selected");
                e.classList.add("selected");
                const n = d(t, ".js-fork-cleanup-button-group"),
                    s = e.getAttribute("data-toggles-button");
                "branch" === s ? (v(n, ".js-fork-cleanup-branch-button").classList.remove("d-none"), v(n, ".js-fork-cleanup-fork-button").classList.add("d-none")) : "fork" === s && (v(n, ".js-fork-cleanup-branch-button").classList.add("d-none"), v(n, ".js-fork-cleanup-fork-button").classList.remove("d-none"))
            });
            const _d = ["work in progress", "draft", "wip"];
            m("keyup", ".js-keyword-listener", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/pulls/keyword-listener.js:8");
                const n = t.value.trim().toLowerCase(),
                    s = document.querySelector(".js-upgrade-popover");
                if (s)
                    for (const o of _d)
                        if (n.includes(o)) {
                            s.hidden = !1;
                            break
                        }
            }), j(".js-upgrade-dismiss-popover-form", async function(e, t) {
                v(document, ".js-upgrade-popover").hidden = !0, await t.text()
            }), u("details:toggled", ".js-pull-merging", function({
                currentTarget: e
            }) {
                const t = b(e, ".js-merge-pull-request"),
                    n = t.some(Z);
                for (const s of t) s.classList.toggle("is-dirty", n)
            }), u("click", ".js-merge-box-try-again", async function({
                currentTarget: e
            }) {
                const t = v(d(e, ".js-pull-merging"), ".js-tryable-again", HTMLFormElement);
                L(t, "submit")
            }), document.addEventListener("session:resume", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/pulls/merge.js:32");
                const t = document.getElementById(e.detail.targetId);
                if (t) {
                    const e = t.closest(".js-merge-pull-request");
                    if (e) {
                        const t = e.closest(".js-details-container");
                        t && t.classList.add("open")
                    }
                }
            }), u("change", ".js-merge-button-toggle", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/pulls/merge.js:47");
                const t = d(e, ".js-merge-pr"),
                    n = !e.checked;
                for (const s of b(t, ".js-merge-commit-button", HTMLButtonElement)) s.disabled = n
            }), u("details-menu-selected", ".js-merge-method-menu", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/pulls/merge.js:60");
                const t = e.detail.relatedTarget,
                    n = d(t, ".js-merge-pr"),
                    s = v(n, ".js-merge-pull-request", HTMLFormElement),
                    o = v(n, ".js-merge-method-menu-button"),
                    r = o.getAttribute("data-merge-button-class");
                o.classList.toggle("btn-danger", t.hasAttribute("data-merge-commit-warning")), r && o.classList.toggle(r, !t.hasAttribute("data-unsafe-rebase"));
                const i = v(n, ".js-merge-title", HTMLInputElement),
                    a = v(n, ".js-merge-message", HTMLTextAreaElement);
                i.defaultValue === i.value && (i.defaultValue = i.value = p(t, "data-input-title-value"));
                a.defaultValue === a.value && (a.defaultValue = a.value = p(t, "data-input-message-value"));
                n.classList.toggle("is-merging", "merge" === t.value), n.classList.toggle("is-squashing", "squash" === t.value), n.classList.toggle("is-rebasing", "rebase" === t.value);
                const c = s.classList.contains("js-admin-override-merge") && "merge" === t.value || s.classList.contains("js-admin-override-squash") && "squash" === t.value || s.classList.contains("js-admin-override-rebase") && "rebase" === t.value,
                    l = b(n, ".js-admin-override");
                for (const d of l) d.hidden = !c;
                const u = c && !v(n, ".js-merge-button-toggle", HTMLInputElement).checked,
                    m = b(n, ".js-merge-pull-request .js-merge-commit-button", HTMLButtonElement);
                for (const d of m) d.type = t.value === d.value ? "submit" : "button", d.disabled = u;
                s.classList.toggle("text-red", c);
                const f = d(n, ".js-pull-merging"),
                    g = new URL(p(f, "data-url"), window.location.origin),
                    h = new URLSearchParams(g.search);
                h.set("merge_type", t.value), g.search = h.toString(), f.setAttribute("data-url", g.toString())
            }, {
                capture: !0
            }), u("details:toggled", ".js-merge-pr", function(e) {
                const t = e.currentTarget.querySelector(".js-merge-message");
                t && L(t, "change")
            }), r(".branch-action-item.js-details-container.open", {
                add(e) {
                    for (const t of e.querySelectorAll(".js-merge-review-section")) t.setAttribute("open", "")
                },
                remove(e) {
                    for (const t of e.querySelectorAll(".js-merge-review-section")) t.removeAttribute("open")
                }
            }), u("toggle", ".js-details-container .js-merge-review-section", function({
                currentTarget: e
            }) {
                const t = d(e, ".js-details-container"),
                    n = t.querySelectorAll(".js-merge-review-section").length,
                    s = t.querySelectorAll(".js-merge-review-section[open]").length,
                    o = s === n;
                0 === s ? je(t, !1) : o && je(t, !0)
            }, {
                capture: !0
            });
            let $d = !1;
            document.addEventListener("keydown", function(e) {
                "Alt" === e.key && ($d = !0)
            }), document.addEventListener("keyup", function(e) {
                "Alt" === e.key && ($d = !1)
            }), u("click", ".js-toggle-outdated-comments", function(e) {
                if (!((e instanceof MouseEvent && e.altKey || $d) && e.currentTarget instanceof HTMLElement)) return;
                const t = e.currentTarget,
                    n = d(t, "details");

                function s() {
                    const e = n.hasAttribute("open");
                    for (const n of document.querySelectorAll(".js-toggle-outdated-comments"))
                        if (n !== t) {
                            d(n, "details").toggleAttribute("open", e)
                        }
                }
                setTimeout(() => {
                    oe(t, s)
                })
            });
            const Dd = 1e4,
                Rd = {};

            function Bd(e) {
                const t = v(e, ".js-presence-users"),
                    n = document.createElement("span");
                n.classList.add("js-presence-users"), n.classList.add("float-left");
                for (const s in Rd) {
                    const e = document.createElement("img");
                    e.alt = s, e.classList.add("avatar"), e.classList.add("participant-avatar"), e.height = 26, e.width = 26, e.src = `/${s}.png`, n.append(e)
                }
                t.replaceWith(n)
            }
            let Nd, Pd;

            function Fd() {
                const e = document.querySelectorAll(".pull-request-ref-restore");
                for (let t = 0; t < e.length; t++) e[t].classList.toggle("last", t === e.length - 1)
            }

            function Od() {
                const e = null != document.querySelector("#js-pull-restorable"),
                    t = document.querySelector(".js-pull-discussion-timeline");
                t && t.classList.toggle("is-pull-restorable", e)
            }

            function Ud() {
                const e = document.querySelector(".js-reviews-container");
                e && setTimeout(() => (function(e) {
                    const t = d(e, ".js-review-state-classes"),
                        n = t.querySelectorAll(".js-pending-review-comment").length,
                        s = v(document, ".js-review-changes");
                    t.classList.toggle("is-review-pending", n > 0);
                    for (const o of document.querySelectorAll(".js-pending-review-comment-count")) o.textContent = String(n);
                    for (const o of document.querySelectorAll(".js-pending-comment-count-type")) Le(n, o);
                    if (n > 0) {
                        s.textContent = s.getAttribute("data-pending-message") || "";
                        const t = v(e, ".js-reviews-toggle");
                        t.classList.add("anim-pulse-in"), t.addEventListener("animationend", () => t.classList.remove("anim-pulse-in"), {
                            once: !0
                        })
                    } else s.textContent = s.getAttribute("data-message") || ""
                })(e))
            }

            function Wd(e) {
                const t = e.getAttribute("ratio");
                if (!t) throw new Error("invariant: app/assets/modules/github/pulls/reviews.js:129");
                return t.split("/")
            }

            function zd(e) {
                if (e) {
                    const [t, n] = Wd(e), s = parseInt(t) / parseInt(n), o = e.querySelector(".js-review-progress"), r = e.querySelector(".js-review-count");
                    o && r && (o.style.width = `${100*s}%`, r.textContent = `${t} / ${n}`)
                }
            }
            u("socket:message", ".js-pr-presence", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/pulls/presence.js:58");
                const t = e.detail.data.who;
                if (!t) throw new Error("invariant: app/assets/modules/github/pulls/presence.js:60");
                const n = e.target,
                    s = n.getAttribute("data-me");
                if (null === s) throw new Error("invariant: app/assets/modules/github/pulls/presence.js:65");
                const o = n.hasAttribute("data-collab");
                if (t !== s && e.detail.data.broadcast && o) {
                    const e = v(n, ".js-presence-reply-form");
                    v(e, ".js-reply-to").value = t, L(e, "submit")
                }
                s !== t && (Rd[t] = e.detail.data.timestamp, Rd[t] || Bd(n))
            }), r(".js-pr-presence", {
                add(e) {
                    Nd = setInterval(function() {
                        ! function(e) {
                            const t = new Date;
                            for (const n in Rd) {
                                const e = Rd[n];
                                t - new Date(1e3 * e) > Dd && delete Rd[n]
                            }
                            Bd(e)
                        }(e)
                    }, 5e3)
                },
                remove() {
                    clearInterval(Nd);
                    for (const e in Rd) delete Rd[e]
                }
            }), r(".js-presence-announce-form", {
                add(e) {
                    L(e, "submit"), Pd = setInterval(function() {
                        L(e, "submit")
                    }, 5e3)
                },
                remove() {
                    clearInterval(Pd)
                }
            }), r(".pull-request-ref-restore", {
                add: Fd,
                remove: Fd
            }), r("#js-pull-restorable", {
                add: Od,
                remove: Od
            }), j(".js-inline-comment-form", async function(e, t) {
                await t.text(), Ud()
            }), j(".js-pending-review-comment .js-comment-delete", async function(e, t) {
                await t.text(), Ud()
            }), j(".js-resolvable-timeline-thread-form", async function(e, t) {
                try {
                    const s = await t.html();
                    d(e, ".js-resolvable-timeline-thread-container").replaceWith(s.html)
                } catch (n) {
                    ee()
                }
            }), u("click", ".js-resolvable-thread-toggler", function(e) {
                const t = d(e.target, ".js-resolvable-timeline-thread-container");
                d(e.target, ".js-resolvable-thread-toggler-container").classList.toggle("border-bottom"), v(t, ".js-resolvable-thread-contents").classList.toggle("d-none");
                for (const n of t.querySelectorAll(".js-resolvable-thread-toggler")) n.classList.toggle("d-none")
            }), j(".js-toggle-user-reviewed-file-form", async function(e, t) {
                const n = d(e, ".js-details-container"),
                    s = !!n.querySelector(".js-reviewed-file"),
                    o = n.classList.contains("open"),
                    r = n.querySelector(".js-file-header"),
                    i = !!r && 60 === r.getBoundingClientRect().top;
                (!s && o || s && !o) && (je(n), i && si(n));
                const a = v(e, ".js-reviewed-toggle");
                s ? (a.classList.remove("bg-blue-2", "border-blue-light"), a.classList.add("text-gray", "border-gray-dark")) : (a.classList.remove("text-gray", "border-gray-dark"), a.classList.add("bg-blue-2", "border-blue-light")), v(a, ".js-reviewed-checkbox", HTMLInputElement).disabled = !0;
                const c = document.querySelector("progress-bar");
                c instanceof ProgressBarElement && (s ? c.decrement() : c.increment());
                const l = await t.html(),
                    u = e.closest(".js-replace-file-header-review");
                u && (u.replaceWith(l.html), n.hasAttribute("data-file-user-viewed") ? n.removeAttribute("data-file-user-viewed") : n.setAttribute("data-file-user-viewed", "true"))
            });
            class ProgressBarElement extends HTMLElement {
                static get observedAttributes() {
                    return ["ratio"]
                }
                attributeChangedCallback(e) {
                    "ratio" === e && zd(this)
                }
                connectedCallback() {
                    zd(this)
                }
                increment() {
                    const [e, t] = Wd(this), n = Math.min(parseInt(e) + 1, parseInt(t));
                    this.setAttribute("ratio", `${n}/${t}`)
                }
                decrement() {
                    const [e, t] = Wd(this), n = Math.min(parseInt(e) - 1, parseInt(t));
                    this.setAttribute("ratio", `${n}/${t}`)
                }
            }
            window.customElements.get("progress-bar") || (window.ProgressBarElement = ProgressBarElement, window.customElements.define("progress-bar", ProgressBarElement)), document.addEventListener("pjax:end", function() {
                for (const e of document.querySelectorAll(".js-pull-refresh-on-pjax")) L(e, "socket:message", {})
            }), r(".js-multi-line-callout", function(e) {
                const t = document.querySelector(".js-linkable-line-number");
                if (!t) return;
                if (d(t, ".js-diff-table").offsetHeight < 343) return;
                const n = t.closest("tr");
                if (!n) return;
                const s = n.lastElementChild;
                s && (e.remove(), s.prepend(e), e.removeAttribute("hidden"))
            }), u("submit", ".js-multi-line-callout", function(e) {
                d(e.target, ".js-multi-line-callout").hidden = !0
            }), r(".js-updating-pull-request-commits-count", {
                add(e) {
                    const t = e.textContent,
                        n = b(document, ".js-updateable-pull-request-commits-count");
                    for (const s of n) s.textContent = t
                }
            }), (async () => {
                if (await K, window.performance && window.performance.navigation && window.performance.navigation.type === window.performance.navigation.TYPE_RELOAD) {
                    const e = document.getElementById("js-report-pull-request-refresh");
                    e && we(e)
                }
            })();
            const Vd = "```suggestion",
                Kd = "```",
                Yd = new RegExp(`${Vd}(?:.*)\n`, "i"),
                Xd = new RegExp(`${Kd}(\n|$)`);

            function Jd(e, t) {
                const n = e.slice(0, t).split("\n");
                return e.split("\n")[n.length - 1]
            }

            function Gd(e) {
                const t = /^(\s+)/.exec(e);
                return t && t[0] || ""
            }

            function Qd(e, t, n = 0) {
                const s = t.substring(n, t.length),
                    o = e.exec(s);
                return o ? o.index + n : -1
            }

            function Zd(e, t) {
                const n = [];
                let s = 0,
                    o = -1;
                for (;
                    (o = Qd(Yd, e, s)) > -1;) {
                    s = o + Vd.length;
                    const t = Qd(Xd, e, s);
                    if (-1 === t) return !1;
                    s = t + Kd.length, n.push([o, t])
                }
                return n.some(e => t > e[0] && t < e[1])
            }

            function em(e, t) {
                const n = function(e) {
                        let t = `${Vd}\n`;
                        return t += `${e}\n`, t += Kd
                    }(e),
                    s = t.selectionStart,
                    o = t.value,
                    r = Qd(/\n/, o, s),
                    i = "" === o.trim(),
                    a = Jd(o, s),
                    c = "" === a.trim(),
                    l = `\n${Kd}`.length;
                let u = o,
                    d = 0;
                if (i) d = (u = n).length - l;
                else if (-1 === r) d = c ? (u = o + n).length - l : (u = [o, n].join("\n")).length - l;
                else if (c) {
                    const e = s - Gd(a).length,
                        t = o.substring(0, e),
                        i = o.substring(r, o.length);
                    d = (u = [t, n, i].join("")).length - i.length - l
                } else if (Zd(o, s)) {
                    const e = Qd(/```/, o, s) + 3,
                        t = o.substring(0, e),
                        r = o.substring(e, o.length);
                    d = (u = [t, "\n", n, r].join("")).length - r.length - l
                } else {
                    const e = o.substring(0, r),
                        t = o.substring(r, o.length);
                    d = (u = [e, "\n", n, t].join("")).length - t.length - l
                }
                $(t, u), t.focus(), t.setSelectionRange(d, d)
            }
            const tm = ".js-add-to-batch-enabled",
                nm = ".js-unchanged-suggestion",
                sm = ".js-closed-pull",
                om = ".js-viewing-subset-changes",
                rm = ".js-validation-on-left-blob",
                im = ".js-validation-on-right-blob",
                am = ".js-outdated-comment",
                cm = ".js-resolved-thread",
                lm = ".js-pending-review";

            function um(e) {
                const t = function(e) {
                    const t = e.closest(".js-inline-comments-container");
                    if (!t) return;
                    const n = e.closest(".js-line-comments.line-comments");
                    let s = null;
                    n && (s = n.classList.contains("js-addition") ? "right" : "left");
                    const o = t.previousElementSibling;
                    if (!o) throw new Error("invariant: app/assets/modules/github/pulls/suggested-changes.js:45");
                    let r = [];
                    if ("TR" === o.tagName) r = Array.from(o.children);
                    else {
                        const e = o.querySelectorAll("tr"),
                            t = Array.from(e).pop();
                        r = Array.from(t.children)
                    }
                    const i = r.filter(e => {
                            const t = e.classList;
                            return !t.contains("blob-code-marker-cell") && (t.contains("code-review") || t.contains("blob-code"))
                        }),
                        a = "right" === s ? i.pop() : i.shift();
                    if (a) return v(a, ".blob-code-inner").textContent
                }(e);
                if (null != t) {
                    const n = d(e, ".js-suggested-changes-container");
                    em(t, v(n, ".js-comment-field", HTMLTextAreaElement))
                }
            }

            function dm(e, t) {
                const n = document.querySelectorAll(".js-apply-suggestion-button"),
                    s = v(e, ".js-disabled-apply-suggestion-button");
                for (const o of n) {
                    const e = s.cloneNode(!0);
                    fm(e, t), d(o, "details").replaceWith(e)
                }
            }

            function mm(e) {
                const t = document.querySelector(".js-batched-suggested-changes-container");
                t && t.classList.add("d-none");
                for (const n of b(document, ".js-apply-single-suggestion", HTMLInputElement)) n.classList.remove("d-none"), n.disabled = !0, n.setAttribute("aria-label", e);
                for (const n of b(document, ".js-batched-suggested-changes-add", HTMLInputElement)) n.classList.remove("d-none"), n.disabled = !0, n.setAttribute("aria-label", e);
                for (const n of document.querySelectorAll(".js-batched-suggested-changes-remove")) n.classList.add("d-none");
                for (const n of document.querySelectorAll(".js-focus-commit-suggestions-form-button")) n.classList.add("d-none");
                for (const n of document.querySelectorAll(".pending-batched-suggestion-label")) n.classList.add("d-none")
            }

            function fm(e, t) {
                e.setAttribute("aria-label", t), e.classList.remove("d-none")
            }

            function pm(e, t) {
                const n = v(document, ".js-suggested-changes-inline-validation-template").cloneNode(!0);
                n.classList.remove("js-suggested-changes-inline-validation-template"), v(n, ".js-suggested-changes-inline-error-message").textContent = e.trim();
                const s = t.parentNode;
                if (!s) throw new Error("invariant: app/assets/modules/github/pulls/suggested-changes.js:142");
                s.insertBefore(n, t.nextSibling)
            }

            function gm() {
                const e = document.querySelector(".js-batched-suggested-changes-container");
                e && setTimeout(() => (function(e) {
                    const t = d(e, ".js-review-state-classes").querySelectorAll("[data-pending-batched-suggestion]").length;
                    for (const s of document.querySelectorAll(".js-pending-batched-suggested-changes-count")) s.textContent = String(t);
                    const n = v(document, ".js-reenable-add-to-batch").textContent;
                    for (const s of document.querySelectorAll("[data-batched-suggestion-reenable-sibling]")) s.removeAttribute("data-batched-suggestion-reenable-sibling"), s.removeAttribute("disabled"), s.setAttribute("aria-label", n);
                    if (t > 0) {
                        e.hidden = !1;
                        const t = v(e, ".js-batched-suggested-changes-toggle");
                        t.classList.add("anim-pulse-in"), t.addEventListener("animationend", () => t.classList.remove("anim-pulse-in"), {
                            once: !0
                        });
                        for (const e of document.querySelectorAll(".js-apply-single-suggestion")) e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-add")) {
                            const t = d(e, ".js-suggested-change-form-container");
                            if ("true" === t.getAttribute("data-pending-batched-suggestion") || "true" === t.getAttribute("data-comment-pending") || "true" === t.getAttribute("data-outdated-comment") ? e.classList.add("d-none") : e.classList.remove("d-none"), "true" === e.getAttribute("data-batched-suggestion-disabled-by-sibling")) {
                                e.removeAttribute("data-batched-suggestion-disabled-by-sibling"), e.setAttribute("disabled", "disabled");
                                const t = v(document, ".js-one-suggestion-per-line").textContent;
                                e.setAttribute("aria-label", t)
                            }
                        }
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-remove")) "true" === d(e, ".js-suggested-change-form-container").getAttribute("data-pending-batched-suggestion") ? e.classList.remove("d-none") : e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".js-focus-commit-suggestions-form-button")) {
                            const t = d(e, ".js-suggested-change-form-container"),
                                n = "true" === t.getAttribute("data-comment-pending"),
                                s = "true" === t.getAttribute("data-outdated-comment"),
                                o = "true" === t.getAttribute("data-resolved-comment"),
                                r = d(e, ".js-inline-comments-container"),
                                i = "left" === v(r, 'input[name="side"]', HTMLInputElement).value;
                            n || s || o || i ? e.classList.add("d-none") : e.classList.remove("d-none")
                        }
                        for (const e of document.querySelectorAll(".pending-batched-suggestion-label")) "true" === d(e, ".js-suggested-change-form-container").getAttribute("data-pending-batched-suggestion") ? e.classList.remove("d-none") : e.classList.add("d-none")
                    } else {
                        e.hidden = !0;
                        for (const e of document.querySelectorAll(".js-apply-single-suggestion")) e.classList.remove("d-none");
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-add")) e.classList.remove("d-none");
                        for (const e of document.querySelectorAll(".js-batched-suggested-changes-remove")) e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".js-focus-commit-suggestions-form-button")) e.classList.add("d-none");
                        for (const e of document.querySelectorAll(".pending-batched-suggestion-label")) e.classList.add("d-none")
                    }
                })(e))
            }

            function hm(e, t) {
                const n = v(e, "input[name=commit_title]", HTMLInputElement),
                    s = v(e, "textarea[name=commit_message]", HTMLTextAreaElement);
                let o = n.value.trim();
                "" === o && (o = n.defaultValue);
                const r = s.value.trim();
                "" !== r && (o = `${o}\n\n${r}\n`), n.disabled = !0, s.disabled = !0;
                const i = document.createElement("input");
                i.setAttribute("type", "hidden"), i.setAttribute("name", "message"), i.value = o, e.appendChild(i);
                const a = document.createElement("input");
                a.setAttribute("type", "hidden"), a.setAttribute("name", "changes"), a.value = JSON.stringify(t), e.appendChild(a)
            }

            function bm(e) {
                const t = e.target;
                if (!(t instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/reactions.js:20");
                const n = p(t, "data-reaction-label"),
                    s = d(t, ".js-add-reaction-popover"),
                    o = v(s, ".js-reaction-description");
                o.hasAttribute("data-default-text") || o.setAttribute("data-default-text", o.textContent), o.textContent = n
            }

            function vm(e) {
                if (!(e.target instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/reactions.js:33");
                const t = d(e.target, ".js-add-reaction-popover"),
                    n = v(t, ".js-reaction-description"),
                    s = n.getAttribute("data-default-text");
                s && (n.textContent = s)
            }
            u("click", ".js-suggested-change-toolbar-item", function(e) {
                const t = e.currentTarget;
                t instanceof HTMLButtonElement && !t.disabled && um(t)
            }), u("click", ".js-refresh-after-suggestion", function() {
                window.location.reload()
            }), r(".js-inline-comments-container", {
                add(e) {
                    const t = e.querySelector('input[name="side"]'),
                        n = document.querySelector(".js-suggested-changes-subset-files"),
                        s = t instanceof HTMLInputElement && "left" === t.value;
                    if (!n && !s) return;
                    const o = b(e, ".js-suggested-change-toolbar-item", HTMLButtonElement),
                        r = v(document, n ? om : rm).textContent.trim();
                    for (const i of o) i.disabled = !0, i.setAttribute("aria-label", r)
                }
            }), r(".js-preview-body .js-apply-changes", {
                add(e) {
                    const t = e.closest(".js-suggested-changes-container");
                    if (!t) return e.remove();
                    const n = v(document, im).textContent,
                        s = v(document, rm).textContent,
                        o = d(e, ".js-suggested-changes-blob");
                    if ("" !== t.getAttribute("data-thread-side")) {
                        if ("left" === t.getAttribute("data-thread-side")) return pm(s, o), e.remove()
                    } else {
                        const t = d(e, ".js-inline-comment-form"),
                            n = v(t, 'input[name="side"]', HTMLInputElement);
                        if (!t || !n) return e.remove();
                        if (t && "left" === n.value) return pm(s, o), e.remove()
                    }
                    const r = e.previousElementSibling;
                    if (!r) throw new Error("invariant: app/assets/modules/github/pulls/suggested-changes.js:211");
                    const i = r.querySelector(".js-blob-code-deletion"),
                        a = r.querySelectorAll(".js-blob-code-addition");
                    return i && 0 !== a.length ? i.textContent === Array.from(a).map(e => e.textContent).join("\n") ? (pm(n, o), e.remove()) : void e.remove() : void 0
                }
            }), r(".js-comment-body .js-apply-changes", {
                add(e) {
                    const t = e.closest(".js-suggested-changes-container");
                    if (!t) return e.remove();
                    const n = t.querySelector(".js-suggested-changes-template");
                    if (!(n instanceof HTMLTemplateElement)) return e.remove();
                    const s = n.content.cloneNode(!0),
                        o = v(s, ".js-disabled-apply-suggestion-button");
                    let r;
                    try {
                        r = v(s, ".js-batched-suggested-changes-add")
                    } catch (h) {
                        if ("QueryError" !== h.name) throw h
                    }
                    if (b(document, ".js-suggested-changes-files-tab").length) {
                        const e = v(document, tm).textContent;
                        r && (r.removeAttribute("disabled"), r.setAttribute("aria-label", e))
                    }
                    const i = v(document, ".js-pull-header-details"),
                        a = i && "true" === i.getAttribute("data-pull-is-open"),
                        c = e.closest(".js-resolvable-timeline-thread-container"),
                        l = "true" === n.getAttribute("data-comment-pending");
                    if (c && "true" === c.getAttribute("data-resolved")) {
                        const t = v(document, cm).textContent,
                            n = s.querySelector("details");
                        return n && n.remove(), fm(o, t), r && (r.setAttribute("disabled", "disabled"), r.setAttribute("aria-label", t)), e.replaceWith(s)
                    }
                    if (!a) {
                        const t = v(document, sm).textContent;
                        return fm(o, t), r && (r.setAttribute("disabled", "disabled"), r.setAttribute("aria-label", t)), e.replaceWith(s)
                    }
                    if (l) {
                        const t = v(document, lm).textContent;
                        return v(s, "details").remove(), fm(o, t), r && (r.setAttribute("disabled", "disabled"), r.setAttribute("aria-label", t)), e.replaceWith(s)
                    }
                    const u = "left" === d(e, ".js-suggested-changes-contents").getAttribute("data-thread-side"),
                        m = document.querySelector(".js-suggested-changes-subset-files"),
                        f = "true" === n.getAttribute("data-outdated-comment");
                    if (u || m || f) {
                        let t;
                        return m ? t = v(document, om).textContent : u ? t = v(document, rm).textContent : f && (t = v(document, am).textContent), v(s, "details").remove(), fm(o, t), r && (r.setAttribute("disabled", "disabled"), r.setAttribute("aria-label", t)), e.replaceWith(s)
                    }
                    const p = v(s, ".js-single-suggested-change-form"),
                        g = e.closest(".js-suggested-changes-blob");
                    if (g) {
                        const e = g.querySelector(".js-blob-code-deletion"),
                            t = g.querySelectorAll(".js-blob-code-addition");
                        if (!e) return;
                        const n = e.textContent,
                            i = Array.from(t).map(e => e.textContent);
                        if (i.length > 0 && n === i.join("\n")) {
                            const e = v(document, nm).textContent;
                            v(s, "details").remove(), fm(o, e), r && (r.setAttribute("disabled", "disabled"), r.setAttribute("aria-label", e))
                        } else
                            for (const s of i) {
                                const e = document.createElement("input");
                                e.setAttribute("type", "hidden"), e.setAttribute("name", "value[]"), e.value = s, p.appendChild(e)
                            }
                    }
                    e.replaceWith(s)
                }
            }), r(".js-pull-header-details", {
                add(e) {
                    const t = "true" === e.getAttribute("data-pull-is-open"),
                        n = document.querySelector(".js-suggested-changes-template");
                    if (t || !(n instanceof HTMLTemplateElement)) return;
                    const s = n.content,
                        o = v(document, sm).textContent;
                    dm(s, o), mm(o)
                }
            }), r(".js-suggested-changes-subset-files", {
                add() {
                    const e = document.querySelector(".js-suggested-changes-template");
                    if (!(e instanceof HTMLTemplateElement)) return;
                    const t = e.content,
                        n = v(document, om).textContent;
                    dm(t, n), mm(n)
                }
            }), u("click", ".js-apply-suggestion-button", async function(e) {
                const t = e.currentTarget.parentElement;
                if (t) {
                    const e = v(t, ".js-suggestion-commit-title");
                    setTimeout(() => e.focus(), 1)
                }
            }), u("click", ".js-dismiss-suggested-change-onboarding-notice", async function(e) {
                const t = p(e.currentTarget, "data-url"),
                    n = new FormData;
                n.append("notice", "suggested_changes_onboarding_prompt"), await S(ke(t, {
                    method: "post",
                    body: n
                }));
                const s = document.querySelectorAll(".js-suggested-change-onboarding-notice");
                for (const o of s) o.remove()
            }), m("keypress", ".js-comment-field", function(e) {
                if ("Enter" === e.key) {
                    const t = e.target;
                    if (!(t instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/pulls/suggested-changes.js:444");
                    (function(e) {
                        const t = e.selectionStart;
                        if (!Zd(e.value, t)) return !1;
                        const n = e.value,
                            s = Jd(n, t);
                        if (null === s) return !1;
                        const o = `\n${Gd(s)}`,
                            r = n.substr(0, t) + o + n.substr(t);
                        $(e, r);
                        const i = t + o.length;
                        return e.setSelectionRange(i, i), !0
                    })(t) && e.preventDefault()
                }
            }), m("keypress", ".js-suggestion-commit-message", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLTextAreaElement)) throw new Error("invariant: app/assets/modules/github/pulls/suggested-changes.js:453");
                "Enter" === e.key && t.setAttribute("rows", "3")
            }), u("click", ".js-batched-suggested-changes-add", function(e) {
                const t = d(e.target, ".js-suggested-change-form-container");
                if ("true" === t.getAttribute("data-comment-pending") || "true" === t.getAttribute("data-outdated-comment") || "true" === e.target.getAttribute("data-batched-suggestion-disabled-by-sibling")) return;
                t.setAttribute("data-pending-batched-suggestion", "true");
                const n = d(e.target, ".js-inline-comments-container");
                for (const s of n.querySelectorAll(".js-batched-suggested-changes-add")) s.setAttribute("data-batched-suggestion-disabled-by-sibling", "true");
                e.target.removeAttribute("data-batched-suggestion-disabled-by-sibling"), gm()
            }), u("click", ".js-batched-suggested-changes-remove", function(e) {
                d(e.currentTarget, ".js-suggested-change-form-container").removeAttribute("data-pending-batched-suggestion");
                const t = d(e.currentTarget, ".js-inline-comments-container");
                for (const n of t.querySelectorAll(".js-batched-suggested-changes-add")) n.setAttribute("data-batched-suggestion-reenable-sibling", "true");
                gm()
            }), u("click", ".js-focus-commit-suggestions-form-button", function(e) {
                e.preventDefault(), window.location = "#clear-commit-suggestions", window.location = "#commit-suggestions"
            }), u("click", ".js-dismiss-batched-suggested-changes-onboarding-notice", async function(e) {
                const t = p(e.currentTarget, "data-url"),
                    n = new FormData;
                n.append("notice", "batched_suggested_changes_onboarding_prompt"), await S(ke(t, {
                    method: "post",
                    body: n
                }));
                for (const s of document.querySelectorAll(".js-batched-suggested-change-onboarding-notice")) s.remove()
            }), u("click", ".js-single-suggested-change-form .js-suggested-changes-submit", function(e) {
                try {
                    const n = e.currentTarget,
                        s = d(n, ".js-single-suggested-change-form", HTMLFormElement),
                        o = b(s, 'input[name="value[]"]', HTMLInputElement).map(e => e.value);
                    hm(s, [{
                        commentId: v(s, "input[name=comment_id]", HTMLInputElement).value,
                        path: v(s, "input[name=path]", HTMLInputElement).value,
                        suggestion: o
                    }])
                } catch (Ah) {
                    t(Ah)
                }
            }), j(".js-single-suggested-change-form", async function(e, t) {
                const n = d(e, ".js-suggested-change-form-container"),
                    s = d(e, "details"),
                    o = v(n, ".js-suggestion-applied"),
                    r = d(e, ".js-suggested-changes-contents"),
                    i = v(r, ".js-error-message-placeholder");
                try {
                    await t.json(), o.classList.remove("d-none"), v(n, ".js-batched-suggested-changes-add").classList.add("d-none"), s.remove(), window.location.reload()
                } catch (a) {
                    if ("QueryError" !== a.name) {
                        const t = a.response.json && a.response.json.error,
                            o = v(i, ".js-error-message");
                        i.hidden = !1, o.textContent = t, n.prepend(i);
                        const r = d(e, ".js-suggested-change-form-container");
                        v(r, ".js-batched-suggested-changes-add").classList.add("d-none"), s.remove()
                    }
                }
            }), u("click", ".js-suggestion-batch-submit", function(e) {
                const n = d(e.currentTarget, ".js-batched-suggested-changes-form", HTMLFormElement),
                    s = [];
                try {
                    for (const e of document.querySelectorAll("[data-pending-batched-suggestion]")) {
                        const t = v(e, ".js-single-suggested-change-form", HTMLFormElement),
                            n = b(t, 'input[name="value[]"]', HTMLInputElement).map(e => e.value);
                        s.push({
                            commentId: v(t, "input[name=comment_id]", HTMLInputElement).value,
                            path: v(t, "input[name=path]", HTMLInputElement).value,
                            suggestion: n
                        })
                    }
                    hm(n, s)
                } catch (Ah) {
                    t(Ah)
                }
            }), j(".js-batched-suggested-changes-form", async function(e, t) {
                try {
                    await t.json(), d(e, ".js-batched-suggested-changes-container", HTMLElement).hidden = !0, window.location.reload()
                } catch (n) {
                    const t = n.response.json && n.response.json.error,
                        s = d(e, ".js-batched-suggested-changes-container"),
                        o = v(s, ".js-error-message-container");
                    v(o, ".js-error-message").textContent = t, o.hidden = !1
                }
            }), r(".js-files-tab-stale", {
                add() {
                    const e = document.querySelector(".js-batched-suggested-changes-container");
                    e && setTimeout(() => {
                        e.hidden = !0
                    })
                }
            }), j(".js-pick-reaction", async function(e, t) {
                const n = await t.json(),
                    s = d(e, ".js-comment"),
                    o = v(s, ".js-reactions-container"),
                    r = v(s, ".js-comment-header-reaction-button"),
                    i = Ae(document, n.json.reactions_container.trim()),
                    a = Ae(document, n.json.comment_header_reaction_button.trim());
                o.replaceWith(i), r.replaceWith(a), s.classList.remove("is-reacting")
            }), u("toggle", ".js-reaction-popover-container", function(e) {
                const t = e.currentTarget.hasAttribute("open");
                for (const n of e.target.querySelectorAll(".js-reaction-option-item")) t ? (n.addEventListener("mouseenter", bm), n.addEventListener("mouseleave", vm)) : (n.removeEventListener("mouseenter", bm), n.removeEventListener("mouseleave", vm));
                d(e.target, ".js-comment").classList.toggle("is-reacting", t)
            }, {
                capture: !0
            });
            const wm = {
                Message: "render:hook:message",
                AfterReady: "render:hook:afterready"
            };

            function jm(e, t) {
                e && e.postMessage && e.postMessage(JSON.stringify(t), "*")
            }

            function ym(e) {
                const t = e.querySelector("iframe");
                return t instanceof HTMLIFrameElement ? t.contentWindow : null
            }
            const Em = "render-editor",
                Lm = "show-code",
                Tm = ".js-render-editor-actions",
                km = {
                    ACQUIRE: "actions:lock:acquire",
                    RELEASE: "actions:lock:release"
                };
            class Mm {
                constructor(e) {
                    this._initialized = !1, this._visual = e
                }
                static init() {
                    if (Mm.initialized) throw Error("Invariant: pjax not supported");
                    Mm.initialized = !0;
                    const e = new Mm({
                        send: e => (function(e) {
                            const t = ym(v(document, ".js-render-target"));
                            if (!t) throw new Error("invariant: app/assets/modules/github/render-editor-utils.js:15");
                            jm(t, e)
                        })({
                            type: e
                        })
                    });
                    u(wm.Message, Tm, t => {
                        if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/actions-editor.js:35");
                        e.handleMessage(t.detail.type)
                    }), u(wm.AfterReady, Tm, () => {
                        e.init()
                    }), u("tab:change", ".js-file-editor-nav", t => {
                        if (!(t instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/actions-editor.js:44");
                        e.tabChange(t.detail.name)
                    })
                }
                init() {
                    this._initialized || (this._initialized = !0, this._handToVisual())
                }
                tabChange(e) {
                    switch (e) {
                        case Em:
                            return void this._handToVisual();
                        case Lm:
                            return this._visual.send(km.ACQUIRE), void
                            function() {
                                const e = v(document, ".js-render-editor-lock");
                                setTimeout(() => {
                                    e.style.opacity = "1"
                                }, 50)
                            }()
                    }
                }
                _handToVisual() {
                    Am(!0), this._visual.send(km.RELEASE)
                }
                handleMessage(e) {
                    switch (e) {
                        case km.RELEASE:
                            Am(!1)
                    }
                }
            }

            function Am(e) {
                const t = v(document, ".js-render-editor-lock");
                t.hidden = !e, e && (t.style.opacity = "0");
                const n = v(document, ".js-code-editor"),
                    s = Ve(n);
                if (!s) throw new Error("invariant: app/assets/modules/github/actions-editor.js:105");
                s.editor.setOption("readOnly", !!e && "nocursor")
            }
            Mm.initialized = !1, r(Tm, Mm.init);
            const xm = "history:replace",
                Sm = /^\/([^\/]+)\/([^\/]+)\/actions(?:\/workflow-runs\/([^\/?]+))?/;
            u(wm.Message, ".js-actions-page", e => {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/actions-page.js:17");
                switch (e.detail.body) {
                    case xm:
                        return void
                        function(e) {
                            const t = new URL(window.location.href, window.location.origin);
                            switch (e.page) {
                                case "actions":
                                    ! function(e, t) {
                                        H({}, "", function(e, t) {
                                            const {
                                                owner: n,
                                                name: s
                                            } = function(e) {
                                                const t = Sm.exec(e);
                                                if (null == t) throw new Error("invariant: expected to be on actions page -- app/assets/modules/github/actions-page.js:59");
                                                const [, n, s, o] = t;
                                                return {
                                                    owner: n,
                                                    name: s,
                                                    runID: o
                                                }
                                            }(e);
                                            return function({
                                                name: e,
                                                owner: t,
                                                runID: n
                                            }) {
                                                return `/${t}/${e}/actions${n?`/workflow-runs/${n}`:""}`
                                            }({
                                                owner: n,
                                                name: s,
                                                runID: t.urlParams.runID
                                            })
                                        }(e.pathname, t))
                                    }(t, e);
                                    break;
                                default:
                                    throw Error(`unknown page history update '${e.page}'`)
                            }
                        }(e.detail.payload)
                }
            });
            const Hm = ["is-render-pending", "is-render-ready", "is-render-loading", "is-render-loaded"],
                Cm = new WeakMap;

            function qm(e) {
                if (null == e) return;
                const t = Cm.get(e);
                null != t && (t.load = t.hello = null, t.helloTimer && (clearTimeout(t.helloTimer), t.helloTimer = null), t.loadTimer && (clearTimeout(t.loadTimer), t.loadTimer = null))
            }

            function Im(e) {
                if (null != e) return e.classList.remove(...Hm), e.classList.add("is-render-failed"), qm(e)
            }

            function _m(e, t = function() {
                return !0
            }) {
                return function() {
                    if (Z(e) && !e.classList.contains("is-render-ready") && !e.classList.contains("is-render-failed") && !e.classList.contains("is-render-failed-fatally") && (!t || t())) return Im(e)
                }
            }
            r(".js-render-target", {
                constructor: HTMLElement,
                initialize: function(e) {
                    const t = Cm.get(e);
                    null != t && t.load || (qm(e), function(e) {
                        if (Cm.get(e)) return;
                        let t = 10,
                            n = 45;
                        "launch_flow_file" === e.getAttribute("data-type") && (t = 15, n = 50);
                        const s = {
                            load: null,
                            hello: null,
                            helloTimer: null,
                            loadTimer: null
                        };
                        s.load = Date.now(), s.helloTimer = setTimeout(_m(e, function() {
                            return !s.hello
                        }), 1e3 * t), s.loadTimer = setTimeout(_m(e), 1e3 * n), Cm.set(e, s)
                    }(e), e.classList.add("is-render-automatic"), e.classList.add("is-render-requested"))
                }
            }), window.addEventListener("message", function(e) {
                const t = e.data;
                if (!t) return;
                const n = function(e) {
                    if ("string" == typeof e) try {
                        return JSON.parse(e)
                    } catch (t) {
                        return
                    }
                }(t) || t;
                if ("string" != typeof n.type && "render" !== n.type) return;
                const s = n.type;
                if ("string" != typeof n.identity) return;
                const o = n.identity;
                if ("string" != typeof n.body) return;
                const r = n.body,
                    i = function(e) {
                        return Array.from(document.querySelectorAll(".js-render-target")).filter(t => !e || t.getAttribute("data-identity") === e)[0]
                    }(o);
                i && e.origin === i.getAttribute("data-host") && function(e, t, n, s, o) {
                    switch (s) {
                        case "hello":
                            {
                                const t = Cm.get(e) || {
                                    untimed: !0
                                };t.hello = Date.now();
                                const n = {
                                        type: "render:cmd",
                                        body: {
                                            cmd: "ack",
                                            ack: !0
                                        }
                                    },
                                    s = {
                                        type: "render:cmd",
                                        body: {
                                            cmd: "branding",
                                            branding: !1
                                        }
                                    },
                                    o = ym(e);
                                if (jm(o, n), jm(o, s), e.classList.contains("is-local") && o && "function" == typeof o.postMessage) {
                                    const t = o,
                                        n = e.closest(".js-code-editor"),
                                        s = n instanceof HTMLElement ? Ve(n) : null,
                                        r = e.getAttribute("data-data");
                                    if (s) {
                                        let e = null;
                                        const n = (n, o) => {
                                            if (function(e) {
                                                    return e && "setValue" === e.origin
                                                }(o)) return;
                                            const r = s.code();
                                            r !== e && (e = r, jm(t, {
                                                type: "render:data",
                                                body: r
                                            }))
                                        };
                                        s.editor.on("change", n), n()
                                    } else r && jm(t, {
                                        type: "render:data",
                                        body: r
                                    })
                                }
                            }
                            break;
                        case "error":
                            return Im(e);
                        case "error:fatal":
                            return Im(e), e.classList.add("is-render-failed-fatal");
                        case "error:invalid":
                            return Im(e), e.classList.add("is-render-failed-invalid");
                        case "loading":
                            return e.classList.remove(...Hm), e.classList.add("is-render-loading");
                        case "loaded":
                            return e.classList.remove(...Hm), e.classList.add("is-render-loaded");
                        case "ready":
                            e.classList.remove(...Hm), e.classList.add("is-render-ready"), o && "number" == typeof o.height && (e.style.height = `${o.height}px`), L(e, wm.AfterReady, {
                                container: e,
                                payload: o
                            });
                            break;
                        case "resize":
                            o && "number" == typeof o.height && (e.style.height = `${o.height}px`);
                            break;
                        case "data":
                            L(e, "edit:visual", o);
                            break;
                        default:
                            L(e, wm.Message, {
                                type: t,
                                body: s,
                                payload: o
                            })
                    }
                }(i, s, 0, r, null != n.payload ? n.payload : void 0)
            });
            let $m = null;
            const Dm = new C;

            function Rm(e) {
                const t = e.form;
                if (!t) throw new Error("invariant: app/assets/modules/github/repositories/branches.js:41");
                const n = d(t, ".js-branches"),
                    s = n.querySelectorAll(".js-branches-subnav .js-subnav-item"),
                    o = n.querySelector(".js-branches-subnav .js-subnav-item.selected"),
                    r = v(n, ".js-branches-subnav .js-branches-all"),
                    i = t.getAttribute("data-results-container");
                $m || ($m = o);
                const a = e.value.trim().length > 0,
                    c = function(e) {
                        const t = e.form;
                        if (!t) throw new Error("invariant: app/assets/modules/github/repositories/branches.js:20");
                        if (e.value.trim()) {
                            const n = new URL(t.action, window.location.origin),
                                s = new URLSearchParams(n.search.slice(1)),
                                o = t.elements.namedItem("utf8");
                            return o instanceof HTMLInputElement && s.append("utf8", o.value), s.append("query", e.value), n.search = s.toString(), n.toString()
                        }
                        return p(t, "data-reset-url")
                    }(e);

                function l() {
                    n.classList.remove("is-loading")
                }
                Dm.push(B(document, c)).then(function(e) {
                    H(null, "", c);
                    const t = i ? document.getElementById(i) : null;
                    t && (t.innerHTML = "", t.appendChild(e))
                }).then(l, l), n.classList.toggle("is-search-mode", a), n.classList.add("is-loading");
                for (const u of s) u.classList.remove("selected");
                a ? r.classList.add("selected") : $m && ($m.classList.add("selected"), $m = null)
            }
            r(".js-branch-search-field", {
                constructor: HTMLInputElement,
                initialize(e) {
                    M(e, Rm)
                },
                subscribe: e => q(e, "keyup", function(t) {
                    if (!(t instanceof KeyboardEvent)) throw new Error("invariant: app/assets/modules/github/repositories/branches.js:101");
                    "Escape" === Y(t) && (! function(e) {
                        const t = e.value.trim();
                        e.value = "", t && Rm(e)
                    }(e), e.blur())
                })
            }), u("submit", ".js-branch-search", e => e.preventDefault()), u("click", ".js-clear-branch-search", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/repositories/branches.js:115");
                if (!t.form) throw new Error("invariant: app/assets/modules/github/repositories/branches.js:116");
                const n = v(t.form, ".js-branch-search-field", HTMLInputElement);
                n.focus(), n.value = "", L(n, "input")
            }), j(".js-branch-destroy, .js-branch-restore", async function(e, t) {
                v(e, "button[type=submit]").blur();
                const n = function(e) {
                    const t = d(e, ".js-branch-row").getAttribute("data-branch-name"),
                        n = d(e, ".js-branches").querySelectorAll(".js-branch-row");
                    return Array.from(n).filter(e => e.getAttribute("data-branch-name") === t)
                }(e);
                for (const r of n) {
                    const e = r.querySelector(".js-branch-delete-target"),
                        t = r.querySelector(".js-loading-spinner");
                    t && (t.hidden = !1), e && (e.hidden = !0)
                }
                let s = !1;
                try {
                    await t.text()
                } catch (o) {
                    s = !0, location.reload()
                } finally {
                    for (const e of n) {
                        const t = e.querySelector(".js-branch-delete-target"),
                            n = e.querySelector(".js-loading-spinner");
                        t && (t.hidden = !1), n && (n.hidden = !0)
                    }
                }
                if (!s) {
                    const t = e.classList.contains("js-branch-destroy");
                    for (const e of n) e.classList.toggle("Details--on", t)
                }
            }), u("socket:message", ".repository-import", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/repositories/import.js:7");
                const t = e.detail.data;
                t.redirect_to && (document.location.href = t.redirect_to, e.stopImmediatePropagation())
            }), u("change", "input.js-repository-import-lfs-opt", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/repositories/import.js:18");
                const t = parseInt(e.getAttribute("data-percent-used")),
                    n = d(e, ".js-repository-import-lfs-container"),
                    s = e.getAttribute("data-used") || "";
                v(n, ".js-repository-import-lfs-warn").classList.toggle("d-none", !(t > 100)), v(n, ".js-usage-bar").classList.toggle("exceeded", t >= 100), v(n, ".js-usage-bar").setAttribute("aria-label", `${t}%`), v(n, ".js-repository-import-lfs-progress").style.width = `${t}%`, v(n, "span.js-usage-text").textContent = s
            }), j(".js-repository-import-author-form", async function(e, t) {
                const n = await t.html();
                d(e, ".js-repository-import-author").replaceWith(n.html)
            }), u("click", ".js-repository-import-projects-cancel-button", function() {
                const e = v(document, ".js-repository-import-projects-cancel-form", HTMLFormElement);
                E(e)
            });
            let Bm = !1;

            function Nm() {
                return "private" === v(document, ".js-privacy-toggle:checked", HTMLInputElement).value
            }

            function Pm() {
                const e = v(document, ".js-repo-name");
                L(e, "change");
                const t = v(document, '.js-owner-container [aria-checked="true"]'),
                    n = "false" !== t.getAttribute("data-org-allow-public-repos"),
                    s = v(document, ".js-privacy-toggle[value=public]", HTMLInputElement);
                Fm(n, s, document.querySelector(".js-privacy-toggle-label-public"), document.querySelector(".js-public-description"), document.querySelector(".js-public-restricted-by-policy-description"));
                const o = function(e, t) {
                        let n = !1;
                        const s = document.querySelectorAll(".js-new-repo-internal-visibility");
                        for (const o of s) {
                            o.hidden = !0;
                            const e = o.querySelector(".js-privacy-toggle[value=internal]");
                            e instanceof HTMLInputElement && e.checked && (n = !0)
                        }
                        if (e) {
                            const s = document.querySelector(`#new-repo-internal-visibility-${e}`);
                            if (s) {
                                s.hidden = !1;
                                const e = s.querySelector(".js-privacy-toggle-label-internal"),
                                    o = s.querySelector(".js-internal-description"),
                                    r = s.querySelector(".js-internal-restricted-by-policy-description"),
                                    i = s.querySelector(".js-privacy-toggle[value=internal]");
                                if (i instanceof HTMLInputElement) return "false" === t.getAttribute("data-org-allow-internal-repos") ? (i.disabled = !0, e && e.classList.add("text-gray-light"), o && (o.hidden = !0), r && (r.hidden = !1)) : (n && (i.checked = !0, L(i, "change")), i.disabled = !1, e && e.classList.remove("text-gray-light"), o && (o.hidden = !1), r && (r.hidden = !0)), i
                            }
                        }
                    }(t.getAttribute("data-business-id"), t),
                    r = "false" !== t.getAttribute("data-org-allow-private-repos"),
                    i = v(document, ".js-privacy-toggle[value=private]", HTMLInputElement),
                    a = document.querySelector(".js-privacy-toggle-label-private"),
                    c = document.querySelector(".js-private-description"),
                    l = document.querySelector(".js-private-restricted-by-policy-description");
                Fm(r, i, a, c, l),
                    function() {
                        const e = document.querySelectorAll('.js-org-upgrade-link:not([hidden=""]');
                        for (const t of e) t.hidden = !0
                    }();
                const u = "false" !== t.getAttribute("data-org-private-restricted-by-plan"),
                    d = document.querySelector(".js-upgrade-private-description"),
                    m = "false" !== t.getAttribute("data-org-show-upgrade"),
                    f = t.getAttribute("data-org-name"),
                    p = f ? document.querySelector(`a[data-upgrade-link="${f}"]`) : null,
                    g = document.querySelector(".js-ask-owner-message");
                r || !u ? (d && (d.hidden = !0), p && (p.hidden = !0), g && (g.hidden = !0)) : (l && (l.hidden = u), d && (d.hidden = !1), p && (p.hidden = !m), g && (g.hidden = m));
                const h = "true" === t.getAttribute("data-org-show-trade-controls"),
                    b = "true" === t.getAttribute("data-user-show-trade-controls"),
                    w = document.querySelector(".js-trade-controls-description"),
                    j = document.querySelector(".js-individual-trade-controls-description");
                (b || h && !r) && (i.disabled = !0, c && (c.hidden = !0), l && (l.hidden = !0), d && (d.hidden = !0), p && (p.hidden = !0), g && (g.hidden = !0)), b ? (w && (w.hidden = !0), j && (j.hidden = !1)) : !r && h && w && (w.hidden = !1),
                    function(e, t, n, s) {
                        let o = null;
                        "private" !== e.getAttribute("data-default") || s.disabled ? t.disabled ? n && !n.disabled && (o = n) : o = t : o = s;
                        if (!o) return;
                        const r = t.disabled && t.checked || s.disabled && s.checked || n && n.disabled && n.checked,
                            i = !(t.checked || n && n.checked || s.checked);
                        !1 !== Bm && !0 !== r && !0 !== i || (o.checked = !0, L(o, "change"))
                    }(t, s, o, i),
                    function(e) {
                        for (const s of document.querySelectorAll(".js-with-permission-fields")) s.hidden = !e;
                        for (const s of document.querySelectorAll(".js-without-permission-fields")) s.hidden = e;
                        const t = document.querySelector(".errored"),
                            n = document.querySelector("dl.warn");
                        t && (t.hidden = !e);
                        n && (n.hidden = !e)
                    }("yes" === t.getAttribute("data-permission")),
                    function() {
                        const e = document.querySelector("#js-upgrade-container");
                        if (!e) return;
                        const t = v(document, "#js-payment-methods-form");
                        e.firstElementChild && t.appendChild(e.firstElementChild);
                        const n = v(document, "input[name=owner]:checked", HTMLInputElement).value,
                            s = t.querySelector(`.js-upgrade[data-login="${n}"]`);
                        s && e.appendChild(s)
                    }(), Om();
                const y = document.querySelector(".js-quick-install-container");
                if (y) {
                    const e = v(y, ".js-quick-install-divider");
                    e.hidden = !0;
                    const t = v(document, "input[name=owner]:checked", HTMLInputElement).parentElement;
                    if (t) {
                        const n = t.querySelector(".js-quick-install-list-template");
                        if (n instanceof HTMLTemplateElement) {
                            const t = v(y, ".js-account-apps");
                            t.innerHTML = "", t.append(n.content.cloneNode(!0)), n.children.length > 0 && (e.hidden = !1)
                        }
                    }
                }
            }

            function Fm(e, t, n, s, o) {
                e ? (t.disabled = !1, n && n.classList.remove("text-gray-light"), s && (s.hidden = !1), o && (o.hidden = !0)) : (t.disabled = !0, n && n.classList.add("text-gray-light"), s && (s.hidden = !0), o && (o.hidden = !1))
            }

            function Om(e) {
                const t = document.querySelector("#js-upgrade-container");
                if (!t) return;
                const n = t.querySelector(".js-billing-section"),
                    s = t.querySelector(".js-confirm-upgrade-checkbox");
                let o = e ? e.target : null;
                if (o || (o = document.querySelector(".js-privacy-toggle:checked")), !(o instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/repositories/new.js:218");
                if ("false" === o.value) {
                    if (t.hidden = !1, n && n.classList.remove("has-removed-contents"), s) {
                        if (!(s instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/repositories/new.js:225");
                        s.checked = !0
                    }
                } else if (t.hidden = !0, n && n.classList.add("has-removed-contents"), s) {
                    if (!(s instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/repositories/new.js:233");
                    s.checked = !1
                }
                Um()
            }

            function Um() {
                const e = v(document, "#new_repository");
                let t = v(e, ".js-repo-name").classList.contains("is-autocheck-successful");
                Nm() && (t = t && function() {
                    const e = document.querySelector("#js-upgrade-container");
                    if (!e) return !0;
                    if (e.querySelector(".js-ofac-sanction-notice")) return !1;
                    const t = e.querySelector(".js-confirm-upgrade-checkbox");
                    if (t instanceof HTMLInputElement && !t.checked) return !1;
                    const n = e.querySelector(".js-zuora-billing-info");
                    if (n && n.classList.contains("d-none")) return !1;
                    return !0
                }()), v(e, "button[type=submit]", HTMLButtonElement).disabled = !t
            }
            async function Wm(e) {
                const t = e.form;
                if (!(t instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/repositories/releases.js:11");
                v(t, "#release_draft", HTMLInputElement).value = "1", Vm(e, "saving");
                try {
                    const s = await O(t.action, {
                        method: t.method,
                        body: new FormData(t)
                    });
                    return Vm(e, "saved"), setTimeout(Vm, 5e3, e, "default"), L(t, "release:saved", {
                        release: s
                    }), s
                } catch (n) {
                    throw Vm(e, "failed"), n
                }
            }

            function zm(e) {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/repositories/releases.js:40");
                const t = d(e, ".js-releases-marketplace-publish-container"),
                    n = v(t, ".js-releases-marketplace-publish-preview");
                e.checked ? n.classList.remove("d-none") : n.classList.add("d-none")
            }

            function Vm(e, t) {
                for (const n of e.querySelectorAll(".js-save-draft-button-state")) n.hidden = n.getAttribute("data-state") !== t;
                e.disabled = "saving" === t
            }

            function Km(e) {
                const t = document.querySelector(".js-release-target-wrapper");
                if (null != t) {
                    switch (e) {
                        case "valid":
                            t.classList.add("d-none");
                            break;
                        case "loading":
                            break;
                        default:
                            t.classList.remove("d-none")
                    }
                    for (const t of document.querySelectorAll(".js-tag-status-message")) t.hidden = t.getAttribute("data-state") !== e
                }
            }
            r("#js-upgrade-container .js-zuora-billing-info:not(.d-none)", Um), r(".page-new-repo", function() {
                Bm = Nm();
                const e = document.querySelector("#js-upgrade-container");
                e && (e.hidden = !0), Pm();
                const t = document.querySelector(".js-owner-select");
                t && t.focus()
            }), u("click", ".js-reponame-suggestion", function(e) {
                const t = v(document, ".js-repo-name", HTMLInputElement);
                t.value = e.currentTarget.textContent, L(t, "input", !1)
            }), u("click", ".js-privacy-toggle", function() {
                Bm = !0
            }), u("change", ".js-privacy-toggle", Om), u("details-menu-selected", ".js-owner-container", Pm, {
                capture: !0
            }), u("change", "#js-upgrade-container input", Um), g("#js-upgrade-container input", Um), u("auto-check-send", ".js-repo-name-auto-check", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/repositories/new.js:328");
                const t = e.currentTarget.form;
                if (!t) throw new Error("invariant: app/assets/modules/github/repositories/new.js:331");
                const n = v(t, "input[name=owner]:checked", HTMLInputElement).value;
                e.detail.body.append("owner", n)
            }), u("auto-check-complete", "#repository_name", function() {
                Um()
            }), u("click", ".js-packages-learn-more-dismiss", function() {
                const e = v(document, ".js-packages-popover-form", HTMLFormElement);
                E(e)
            }), r(".js-pulse-contribution-data", e => {
                !async function(e) {
                    const t = e.getAttribute("data-pulse-diffstat-summary-url");
                    let n;
                    try {
                        t && function(e, t) {
                            t.innerHTML = "", t.appendChild(e)
                        }(n = await async function(e) {
                            return B(document, e)
                        }(t), e)
                    } catch (s) {
                        const t = v(e, ".js-blankslate-loading"),
                            n = v(e, ".js-blankslate-error");
                        t.classList.add("d-none"), n.classList.remove("d-none")
                    }
                }(e)
            }), u("change", ".js-releases-marketplace-publish-field", function(e) {
                zm(e.currentTarget)
            }), r(".js-releases-marketplace-publish-field", function(e) {
                zm(e)
            }), u("click", ".js-save-draft", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/repositories/releases.js:55");
                Wm(t), e.preventDefault()
            }), u("click", ".js-timeline-tags-expander", function(e) {
                const t = e.currentTarget;
                d(t, ".js-timeline-tags").classList.remove("is-collapsed")
            }), u("release:saved", ".js-release-form", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/repositories/releases.js:76");
                const t = e.detail.release,
                    n = e.currentTarget,
                    s = n.getAttribute("data-repo-url"),
                    o = t.update_url || Jm("tag", s, t.tag_name);
                if (n.setAttribute("action", o), t.update_authenticity_token) {
                    n.querySelector("input[name=authenticity_token]").value = t.update_authenticity_token
                }
                const r = t.edit_url || Jm("edit", s, t.tag_name);
                H(Q(), document.title, r);
                const i = document.querySelector("#delete_release_confirm form");
                if (i) {
                    const e = t.delete_url || Jm("tag", s, t.tag_name);
                    if (i.setAttribute("action", e), t.delete_authenticity_token) {
                        v(i, "input[name=authenticity_token]", HTMLInputElement).value = t.delete_authenticity_token
                    }
                }
                const a = n.querySelector("#release_id");
                if (!a.value) {
                    a.value = t.id;
                    const e = document.createElement("input");
                    e.type = "hidden", e.name = "_method", e.value = "put", n.appendChild(e)
                }
            }), u("click", ".js-publish-release", function() {
                v(document, "#release_draft", HTMLInputElement).value = "0"
            });
            const Ym = new WeakMap;
            async function Xm(e) {
                if (!e.value) return;
                if (e.value === Ym.get(e)) return;
                Km("loading"), Ym.set(e, e.value);
                const t = p(e, "data-url"),
                    n = new URL(t, window.location.origin),
                    s = new URLSearchParams(n.search.slice(1));
                s.append("tag_name", e.value), n.search = s.toString();
                try {
                    const t = await O(n);
                    "duplicate" === t.status && parseInt(e.getAttribute("data-existing-id")) === parseInt(t.release_id) ? Km("valid") : (v(document, ".js-release-tag .js-edit-release-link").setAttribute("href", t.url), Km(t.status))
                } catch (Ah) {
                    Km("invalid")
                }
            }

            function Jm(e, t, n) {
                return `${t}/releases/${e}/${n}`
            }

            function Gm(e) {
                const t = d(e, "form", HTMLFormElement).querySelector(".js-previewable-comment-form");
                if (!t) return;
                let n = t.getAttribute("data-base-preview-url");
                n || (n = String(t.getAttribute("data-preview-url")), t.setAttribute("data-base-preview-url", n));
                const s = b(e, 'input[name="release[tag_name]"], input[name="release[target_commitish]"]:checked', HTMLInputElement),
                    o = new URL(n, window.location.origin),
                    r = new URLSearchParams(o.search.slice(1));
                for (const i of s) i.value && r.append(i.name, i.value);
                o.search = r.toString(), t.setAttribute("data-preview-url", o.toString())
            }
            r("input.js-release-tag-field", {
                constructor: HTMLInputElement,
                initialize(e) {
                    Xm(e), e.addEventListener("blur", function() {
                        Xm(e)
                    })
                }
            }), u("change", ".js-release-tag", function(e) {
                Gm(e.currentTarget)
            }), r(".js-release-form .js-previewable-comment-form", function(e) {
                Gm(v(d(e, "form"), ".js-release-tag"))
            }), u("change", ".js-repository-code-search-query", e => {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/repositories/code-search.js:7");
                const n = t.value;
                for (const s of b(document, ".js-repository-code-search-option", HTMLInputElement)) {
                    const e = !!n.match(new RegExp(`\\b${s.value}:true\\b`));
                    $(s, e)
                }
            }), u("click", ".js-repository-code-search-option", async e => {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/repositories/code-search.js:18");
                const n = t.form;
                if (!n) throw new Error("invariant: app/assets/modules/github/repositories/code-search.js:20");
                setTimeout(() => E(n), 0)
            }), u("change", ".js-repository-code-search-option", e => {
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/repositories/code-search.js:25");
                const n = v(document, ".js-repository-code-search-query", HTMLInputElement),
                    s = new RegExp(`\\b${t.value}:\\w*\\s*`, "g"),
                    o = n.value.replace(s, "").trim();
                t.checked ? n.value = `${o} ${t.value}:true` : n.value = o
            }), m("keydown", ".js-tree-finder-field", e => {
                "Escape" === e.key && (e.preventDefault(), history.back())
            });

            function Qm(e, t) {
                if (Uc(e)) return;
                const n = v(document, ".js-site-search-form", HTMLFormElement);
                let s, o;
                v(document, ".js-site-search").classList.toggle("scoped-search", t), t ? (s = p(n, "data-scoped-search-url"), o = p(e, "data-scoped-placeholder")) : (s = p(n, "data-unscoped-search-url"), o = p(e, "data-unscoped-placeholder")), n.setAttribute("action", s), e.setAttribute("placeholder", o)
            }

            function Zm(e) {
                if (!(e.currentTarget instanceof Element)) throw new Error("invariant: app/assets/modules/github/search/results.js:13");
                const t = e.currentTarget.querySelector(".js-search-result-feedback");
                t && t.classList.add("show")
            }

            function ef(e) {
                if (!(e.currentTarget instanceof Element)) throw new Error("invariant: app/assets/modules/github/search/results.js:23");
                const t = e.currentTarget.querySelector(".js-search-result-feedback");
                t && t.classList.remove("show")
            }

            function tf(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/search/results.js:35");
                t.classList.add("text-gray-dark"), t.classList.remove("link-gray");
                const n = d(t, ".js-search-result-feedback");
                for (const s of b(n, ".js-search-rating", HTMLButtonElement)) s.disabled = !0;
                v(n, ".js-search-feedback-form").classList.add("show")
            }

            function nf(e) {
                const t = e.value.slice(0, e.selectionEnd),
                    n = e.value.slice(e.selectionEnd),
                    s = 0 === e.value.trim().length,
                    o = t.match(/(^|\s+)[^\s:]+$/) && n.match(/^(\s|$)/);
                return s || o
            }
            async function sf(e) {
                const t = e.getAttribute("data-contents-url"),
                    n = Ec("SEARCH_SUGGESTIONS");
                if (!t) return;
                const s = v(document, ".js-search-suggester"),
                    o = e.value.slice(0, e.selectionEnd).match(/\S*$/),
                    r = o ? o[0] : "",
                    i = new URL(t, window.location.origin),
                    a = new URLSearchParams;
                a.append("query", r), i.search = a.toString();
                const c = await S(i.toString());
                if ("" === c.trim()) return void of ();
                s.innerHTML = c, n && s.classList.remove("d-none"), Se(v(s, ".js-navigation-container"));
                const l = v(s, ".js-search-suggester-helper"),
                    u = e.value.match(/(^|\s)[^\s:]+$/),
                    d = l.parentElement;
                if (!(d instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/search-suggester.js:49");
                u && (l.textContent = e.value), d.classList.toggle("d-none", n && !u)
            }

            function of () {
                v(document, ".js-search-suggester").classList.add("d-none")
            }

            function rf(e) {
                const t = e.target,
                    n = d(t, ".js-navigation-item"),
                    s = v(document, ".js-search-suggester-field", HTMLInputElement),
                    o = v(document, ".js-search-suggester"),
                    r = n.getAttribute("data-value") || "",
                    i = s.value.slice(0, s.selectionEnd).replace(/\S+$/, ""),
                    a = s.value.slice(s.selectionEnd);
                o.classList.contains("d-none") ? E(v(document, "#search_form", HTMLFormElement)) : (e.preventDefault(), s.value = i + r + a, nf(s) ? sf(s) : of ())
            }

            function af() {
                const e = document.body;
                if (!e) throw new Error("invariant: app/assets/modules/github/sessions/two-factor.js:11");
                e.classList.add("is-sending"), e.classList.remove("is-sent", "is-not-sent")
            }

            function cf() {
                const e = document.body;
                if (!e) throw new Error("invariant: app/assets/modules/github/sessions/two-factor.js:18");
                e.classList.add("is-sent"), e.classList.remove("is-sending")
            }

            function lf(e) {
                const t = document.body;
                if (!t) throw new Error("invariant: app/assets/modules/github/sessions/two-factor.js:25");
                e && (v(document, ".js-sms-error").textContent = e), t.classList.add("is-not-sent"), t.classList.remove("is-sending")
            }

            function uf(e) {
                const t = v(document, ".js-stale-session-flash"),
                    n = v(t, ".js-stale-session-flash-signed-in"),
                    s = v(t, ".js-stale-session-flash-signed-out");
                t.hidden = !1, n.hidden = "false" === e, s.hidden = "true" === e, window.addEventListener("popstate", function(e) {
                    e.state && null != e.state.container && location.reload()
                }), document.addEventListener("submit", function(e) {
                    e.preventDefault()
                })
            }
            let df;
            if (r(".js-tree-finder", e => {
                    const t = v(e, ".js-tree-finder-field", HTMLInputElement),
                        n = v(e, ".js-tree-browser-results");
                    n.childElementCount > 0 || ((async e => {
                        if (!(e instanceof FuzzyListElement)) return;
                        const t = p(e, "data-url"),
                            n = v(e, ".js-tree-browser-result-template", HTMLTemplateElement),
                            {
                                paths: s
                            } = await O(t);
                        e.addLazyItems(s, e => {
                            const t = n.content.cloneNode(!0).firstElementChild;
                            if (!t) throw new Error("invariant: app/assets/modules/github/repositories/tree-finder.js:25");
                            const s = v(t, ".js-tree-browser-result-anchor", HTMLAnchorElement),
                                o = v(s, ".js-tree-browser-result-path"),
                                r = new URL(s.href, window.location.origin);
                            return r.pathname = `${r.pathname}/${encodeURI(e)}`, s.href = String(r), o.textContent = e, t
                        }), e.sort()
                    })(e), fn(t, n), e.addEventListener("fuzzy-list-will-sort", () => {
                        wn(t, n)
                    }), e.addEventListener("fuzzy-list-sorted", () => {
                        vn(t, n)
                    }))
                }), r(".js-codesearch-nav", function(e) {
                    const t = e.querySelector(".selected");
                    if (!t) return;
                    const n = t.offsetLeft,
                        s = t.offsetWidth,
                        o = n + s,
                        r = window.innerWidth;
                    (o - e.scrollLeft > r || o < e.scrollLeft) && (e.scrollLeft = n - r / 2 + s / 2)
                }), r(".js-codesearch-count", function(e) {
                    const t = e.getAttribute("data-search-type");
                    for (const n of document.querySelectorAll(".js-codesearch-deferred-count"))
                        if (t && n.getAttribute("data-search-type") === t) {
                            const t = e.cloneNode(!0);
                            t.classList.remove("js-codesearch-count"), n.replaceWith(t)
                        }
                }), m("keyup", ".js-site-search-field", function(e) {
                    const t = e.target;
                    if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/search/site.js:32");
                    const n = 0 === t.value.length;
                    n && "Backspace" === e.key && t.classList.contains("is-clearable") && Qm(t, !1), n && "Escape" === e.key && Qm(t, !0), t.classList.toggle("is-clearable", n)
                }), h(".js-site-search-focus", function(e) {
                    const t = d(e, ".js-chromeless-input-container");
                    t.classList.add("focus"), e.addEventListener("blur", function n() {
                        if (t.classList.remove("focus"), !(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/search/site.js:51");
                        0 === e.value.length && e.classList.contains("js-site-search-field") && Qm(e, !0), e.removeEventListener("blur", n)
                    })
                }), u("submit", ".js-site-search-form", function(e) {
                    v(e.target, ".js-site-search-type-field", HTMLInputElement).value = new URLSearchParams(window.location.search).get("type") || ""
                }), r(".issue-list-item", {
                    subscribe: e => U(q(e, "mouseover", Zm), q(e, "mouseleave", ef))
                }), r(".js-search-rating", {
                    subscribe: e => q(e, "click", tf)
                }), r(".js-search-suggester-field", {
                    constructor: HTMLInputElement,
                    initialize(e) {
                        sf(e), M(e, function() {
                            nf(e) ? sf(e) : of ()
                        })
                    }
                }), u("focusin", ".js-search-suggester-field", function(e) {
                    const t = e.currentTarget;
                    if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/search-suggester.js:80");
                    nf(t) ? sf(t) : of ()
                }), u("focusout", ".js-search-suggester-field", function() { of ()
                }), u("mousedown", ".js-search-suggester", rf), u("navigation:keydown", ".js-search-suggester", function(e) {
                    if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/search-suggester.js:108");
                    const t = e.currentTarget.querySelector('.js-search-suggester .js-navigation-item[aria-selected="true"]');
                    switch (e.detail.hotkey) {
                        case "Enter":
                            t ? rf(e) : E(v(document, "#search_form", HTMLFormElement));
                            break;
                        case "Tab":
                            t && rf(e);
                            break;
                        case "ArrowLeft":
                        case "ArrowRight":
                        case "Escape":
                            of ()
                    }
                }), u("click", ".js-segmented-nav-button", function(e) {
                    e.preventDefault();
                    const t = e.currentTarget,
                        n = p(t, "data-selected-tab"),
                        s = d(t, ".js-segmented-nav"),
                        o = s.parentElement;
                    if (!o) throw new Error("invariant: app/assets/modules/github/segmented-nav.js:10");
                    for (const r of b(s, ".js-segmented-nav-button")) r.classList.remove("selected");
                    t.classList.add("selected");
                    for (const r of b(o, ".js-selected-nav-tab")) r.parentElement === o && r.classList.remove("active");
                    v(document, `.${n}`).classList.add("active")
                }), j(".js-send-auth-code", async (e, t) => {
                    let n;
                    af();
                    try {
                        n = await t.text()
                    } catch (s) {
                        lf(s.response.text)
                    }
                    n && cf()
                }), u("click", ".js-send-two-factor-code", async function(e) {
                    const t = e.currentTarget;
                    if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/sessions/two-factor.js:54");
                    const n = t.form;
                    if (!n) throw new Error("invariant: app/assets/modules/github/sessions/two-factor.js:56");
                    const s = `${v(n,".js-country-code-select",HTMLSelectElement).value} ${v(n,".js-sms-number",HTMLInputElement).value}`;
                    af();
                    let o = t.getAttribute("data-authenticity-token");
                    null == o && (o = T(n, "authenticity_token").value);
                    const r = new FormData;
                    r.append("number", s), r.append("authenticity_token", o);
                    try {
                        const e = p(t, "data-url");
                        await c(e, {
                            method: "post",
                            body: r
                        }), cf();
                        for (const t of n.querySelectorAll(".js-2fa-enable"))(t instanceof HTMLInputElement || t instanceof HTMLButtonElement) && (t.disabled = !1);
                        v(n, ".js-2fa-otp").focus()
                    } catch (i) {
                        if (i.response) {
                            lf(await i.response.text())
                        }
                        for (const e of n.querySelectorAll(".js-2fa-enable"))(e instanceof HTMLInputElement || e instanceof HTMLButtonElement) && (e.disabled = !0)
                    }
                }), u("click", ".js-enable-enable-two-factor-auth-button", function() {
                    const e = v(document, ".js-enable-two-factor-auth-button", HTMLButtonElement);
                    e.disabled = !1, e.removeAttribute("aria-label"), e.classList.remove("tooltipped")
                }), r(".js-two-factor-sms-fallback-button", function(e) {
                    e.addEventListener("toggle", function(e) {
                        const t = e.currentTarget;
                        if (!(t instanceof Element)) throw new Error("invariant: app/assets/modules/github/sessions/two-factor.js:111");
                        for (const n of t.querySelectorAll(".flash")) n.hidden = !0;
                        v(t, ".js-configure-sms-fallback").hidden = !1, v(t, ".js-verify-sms-fallback").hidden = !0
                    })
                }), j(".js-two-factor-set-sms-fallback", async (e, t) => {
                    let n;
                    try {
                        n = await t.text()
                    } catch (s) {
                        const t = v(e, ".js-configure-sms-fallback"),
                            n = v(e, ".js-verify-sms-fallback"),
                            o = t.hidden ? n : t,
                            r = v(o, ".flash");
                        switch (s.response.status) {
                            case 422:
                            case 429:
                                r.textContent = s.response.text, r.hidden = !1
                        }
                    }
                    if (n) switch (n.status) {
                        case 200:
                        case 201:
                            window.location.reload();
                            break;
                        case 202:
                            v(e, ".js-configure-sms-fallback").hidden = !0, v(e, ".js-verify-sms-fallback").hidden = !1, v(e, ".js-fallback-otp").focus()
                    }
                }), "function" == typeof BroadcastChannel) try {
                (df = new BroadcastChannel("stale-session")).onmessage = (e => {
                    "string" == typeof e.data && uf(e.data)
                })
            } catch (xh) {}
            if (!df) {
                let e = !1;
                df = {
                    postMessage(t) {
                        e = !0;
                        try {
                            window.localStorage.setItem("logged-in", t)
                        } finally {
                            e = !1
                        }
                    }
                }, window.addEventListener("storage", function(t) {
                    if (!e && t.storageArea === window.localStorage && "logged-in" === t.key) try {
                        "true" !== t.newValue && "false" !== t.newValue || uf(t.newValue)
                    } finally {
                        window.localStorage.removeItem(t.key)
                    }
                })
            }
            const mf = document.querySelector(".js-stale-session-flash[data-signedin]");
            if (mf) {
                const e = mf.getAttribute("data-signedin");
                df.postMessage(e)
            }
            document.addEventListener("pjax:end", function() {
                const e = document.querySelector('meta[name="selected-link"]'),
                    t = e && e.getAttribute("value");
                if (t)
                    for (const n of document.querySelectorAll(".js-sidenav-container-pjax .js-selected-navigation-item")) {
                        const e = (n.getAttribute("data-selected-links") || "").split(" ").indexOf(t) >= 0;
                        n.classList.toggle("selected", e)
                    }
            }), r(".js-contact-javascript-flag", {
                constructor: HTMLInputElement,
                add(e) {
                    e.value = "true"
                }
            }), u("socket:message", ".js-notification-indicator", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/site/header-notifications.js:6");
                const t = e.currentTarget,
                    n = e.detail.data;
                t.setAttribute("aria-label", n.aria_label), t.setAttribute("data-ga-click", n.ga_click), t.querySelector("span").setAttribute("class", n.span_class)
            });
            let ff = !1;
            async function pf() {
                if (ff) return;
                ff = !0;
                const e = `/site/keyboard_shortcuts?url=${window.location.pathname}`;
                (await ne({
                    content: B(document, e),
                    dialogClass: "hx_Box--overlay--wide container-xl"
                })).addEventListener("dialog:remove", function() {
                    ff = !1
                }, {
                    once: !0
                })
            }
            u("click", ".js-keyboard-shortcuts", pf), document.addEventListener("keydown", e => {
                e.target instanceof Node && He(e.target) || "?" === Y(e) && pf()
            }), r(".js-site-status-container", {
                initialize(e) {
                    !async function(e) {
                        const t = o(document, "site-status-api-url"),
                            n = await window.fetch(t),
                            s = await n.json(),
                            r = s.status.indicator;
                        if ("none" !== r && e instanceof HTMLElement) {
                            v(e, ".js-site-status-message").textContent = s.status.description, v(e, ".js-site-status-time").setAttribute("datetime", s.page.updated_at);
                            const t = "minor" === r ? "flash-warn" : "flash-error";
                            v(e, ".flash").classList.add(t), e.hidden = !1
                        }
                    }(e)
                }
            });
            const gf = [{
                sectionName: "actions-events",
                percent: 95
            }, {
                sectionName: "actions-workflow",
                percent: 100
            }, {
                sectionName: "actions-workflow-logs",
                percent: 100
            }, {
                sectionName: "actions-templates",
                percent: 100
            }, {
                sectionName: "security-vulnerability",
                percent: 60
            }, {
                sectionName: "security-workspace",
                percent: 70
            }, {
                sectionName: "security-alerts-graph",
                percent: 60
            }, {
                sectionName: "security-alerts",
                percent: 60
            }, {
                sectionName: "security-dependabot",
                percent: 50
            }, {
                sectionName: "security-patches-graph",
                percent: 70
            }, {
                sectionName: "security-token-scanning",
                percent: 70
            }, {
                sectionName: "security-lgtm",
                percent: 60
            }];

            function hf(e) {
                e.map(({
                    sectionName: e,
                    percent: t
                }) => {
                    ! function(e, t, n, s) {
                        const o = window.innerHeight || document.documentElement && document.documentElement.clientHeight;
                        e.map(e => {
                            const r = b(document, `.${t}`),
                                i = e.getBoundingClientRect().top,
                                a = Math.round(i / o * 100);
                            a <= s ? e.classList.contains(t) ? e.classList.add(n) : r.map(e => e.classList.add(n)) : (e.classList.remove(n), e.classList.contains(t) || r.map(e => e.classList.remove(n)))
                        })
                    }(b(document, `.section-${e}`), `section-${e}`, `animate-section-${e}`, t)
                })
            }
            let bf;
            window.addEventListener("scroll", () => hf(gf), !1), window.addEventListener("resize", () => hf(gf), !1), window.addEventListener("load", () => hf(gf), !1), h(".js-skip-password-autofill", e => {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/skip-autofill.js:6");
                e.type = "password"
            }), u("click", ".js-smoothscroll-anchor", function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLAnchorElement)) return;
                const n = le(document, t.hash);
                n && (n.scrollIntoView({
                    behavior: "smooth"
                }), e.preventDefault())
            }), async function() {
                Ec("SERVICE_WORKER") && navigator.serviceWorker && (bf = await navigator.serviceWorker.register("/service-worker.js"))
            }(), u("click", ".js-subscribe-to-web-push", async function(e) {
                if (!window.PushManager) return;
                e.preventDefault();
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement)) throw new Error("invariant: app/assets/modules/github/service-worker-registration.js:24");
                if (!t.form) throw new Error("invariant: app/assets/modules/github/service-worker-registration.js:25");
                const n = v(t.form, "[name=authenticity_token]", HTMLInputElement).value,
                    s = await fetch("/web-push/public-key", {
                        credentials: "same-origin"
                    }),
                    o = (await s.json()).vapid_public_key,
                    r = new Uint8Array(o),
                    i = (await bf.pushManager.subscribe({
                        userVisibleOnly: !0,
                        applicationServerKey: r
                    })).toJSON(),
                    a = new FormData;
                a.append("authenticity_token", n), a.append("endpoint", i.endpoint), a.append("p256dh", i.keys.p256dh), a.append("auth", i.keys.auth), await fetch("/web-push-subscription", {
                    method: "POST",
                    body: a,
                    credentials: "same-origin"
                })
            });
            const vf = {},
                wf = {},
                jf = {};
            let yf = null,
                Ef = 0,
                Lf = null;
            const Tf = 1e3,
                kf = 1008,
                Mf = 1011,
                Af = 1012,
                xf = 1013,
                Sf = [],
                Hf = 36e5;

            function Cf(e) {
                const t = Date.now();
                let n = vf[e] || 0;
                const s = jf[e];
                s && (n = Math.max(n, s[1])), n > 0 && t - n < Hf || (Sf.push(e), vf[e] = t)
            }

            function qf(e) {
                for (const t of Sf) e.send(`subscribe:${t}`);
                Sf.length = 0
            }

            function If() {
                try {
                    return yf = function() {
                        const e = document.head && document.head.querySelector("link[rel=web-socket]");
                        if (!(e instanceof HTMLLinkElement)) return;
                        let t;
                        try {
                            t = new WebSocket(e.href)
                        } catch (o) {
                            if (o.name && "SecurityError" !== o.name) throw new Error(`error opening WebSocket: ${o.message} (${o.name})`);
                            return null
                        }

                        function n() {
                            clearTimeout(s), Ef = 0, qf(t)
                        }
                        t.addEventListener("open", n);
                        const s = setTimeout(function() {
                            t.removeEventListener("open", n), t.close(), t === yf && (yf = null)
                        }, 4e3);
                        return t.addEventListener("close", _f), t.addEventListener("message", function(e) {
                            const [t, n] = JSON.parse(String(e.data));
                            if (!t || !n) return;
                            const s = wf[t] || [];
                            for (const o of s) L(o, "socket:message", {
                                data: n,
                                name: t
                            });
                            jf[t] = [n, Date.now()]
                        }), t
                    }()
                } catch (e) {
                    throw yf = null, e
                }
            }

            function _f(e) {
                if (!1 === navigator.onLine || null == document.querySelector(".js-socket-channel")) return;
                let t = yf,
                    n = Tf;
                if (e instanceof CloseEvent && (n = e.code), e.target instanceof WebSocket && (t = e.target), Ef >= 5 || n === kf || n === Mf) return window.removeEventListener("online", _f), void(t && (t.removeEventListener("close", _f), t.close(Tf, "give-up-reconnects"), t === yf && (yf = null)));
                let s = 0;
                n === Af || n === xf ? s = 100 : Ef > 0 && (s = 1e3 * Math.pow(2, Ef)), Ef += 1, Lf && clearTimeout(Lf), Lf = setTimeout(If, s)
            }

            function $f(e) {
                const t = e.getAttribute("data-channel");
                return t ? t.split(/\s+/) : []
            }

            function Df(e, t) {
                let {
                    wait: n
                } = e;
                return null != n && (n -= t) <= 0 && (n = null), n === e.wait ? e : Object.assign({}, e, {
                    wait: n
                })
            }

            function Rf(e, t, n) {
                const s = e.getBoundingClientRect().height,
                    o = t.getBoundingClientRect(),
                    r = n.getBoundingClientRect();
                let i = r.top;
                i + o.height + 10 >= s && (i = Math.max(s - o.height - 10, 0));
                let a = r.right;
                null != n.closest(".js-build-status-to-the-left") && (a = Math.max(r.left - o.width - 10, 0)), t.style.top = `${i}px`, t.style.left = `${a}px`, t.style.right = "auto"
            }
            async function Bf(e) {
                const t = e.querySelector(".js-dropdown-details"),
                    n = e.querySelector(".js-status-dropdown-menu") || e.closest(".js-status-dropdown-menu");
                if (!(n instanceof HTMLElement)) return;
                const s = v(n, ".js-status-loader"),
                    o = v(n, ".js-status-loading"),
                    r = v(n, ".js-status-error"),
                    i = p(s, "data-contents-url");
                let a;
                o.classList.remove("d-none"), r.classList.add("d-none");
                try {
                    await F(), a = await B(document, i)
                } catch (c) {
                    o.classList.add("d-none"), r.classList.remove("d-none")
                }
                if (a) {
                    s.replaceWith(a), v(n, ".js-details-container").classList.add("open");
                    const e = document.body;
                    e && t && n.classList.contains("js-append-menu-to-body") && Rf(e, n, t)
                }
            }

            function Nf({
                currentTarget: e
            }) {
                if (!(e instanceof Element)) throw new Error("invariant: app/assets/modules/github/statuses.js:129");
                Bf(e)
            }
            async function Pf(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/sudo-required.js:15");
                const n = t.getAttribute("data-sudo-required");
                n && (e.stopPropagation(), e.preventDefault(), await Be(n) && (t.removeAttribute("data-sudo-required"), t instanceof HTMLFormElement ? E(t) : t.click()))
            }

            function Ff(e) {
                const t = new Map;
                return function(...n) {
                    const s = JSON.stringify(n),
                        o = t.get(s);
                    if (void 0 !== o) return o;
                    const r = e(...n);
                    return t.set(s, r), r
                }
            }
            window.WebSocket && (r(".js-socket-channel[data-channel]", {
                add: function(e) {
                    const t = yf || If();
                    if (t) {
                        for (const t of $f(e)) Cf(t), null == wf[t] && (wf[t] = []), wf[t].push(e);
                        t.readyState === WebSocket.OPEN && qf(t)
                    }
                },
                remove: function(e) {
                    for (const t of $f(e)) {
                        const n = wf[t];
                        if (n) {
                            const t = n.indexOf(e); - 1 !== t && n.splice(t, 1)
                        }
                    }
                }
            }), window.addEventListener("online", _f), window.addEventListener("offline", function() {
                yf && yf.close(Tf, "navigator-offline")
            })), document.addEventListener("pjax:popstate", function(e) {
                if (!(e instanceof CustomEvent)) return;
                const t = e.target;
                if (!(t instanceof Element)) return;
                const n = e.detail.cachedAt;
                n && setTimeout(() => {
                    const e = Date.now();
                    for (const s of t.querySelectorAll(".js-socket-channel[data-channel]"))
                        for (const t of $f(s)) {
                            if (!(t in jf)) continue;
                            const [o, r] = jf[t];
                            r < n || L(s, "socket:message", {
                                data: Df(o, e - r),
                                name: t
                            })
                        }
                })
            }), window.addEventListener("visibilitychange", function() {
                if (document.hasFocus()) {
                    for (const e of document.querySelectorAll(".js-socket-channel[data-channel]"))
                        for (const t of $f(e)) Cf(t);
                    yf && yf.readyState === WebSocket.OPEN && qf(yf)
                }
            }), r("form.js-auto-replay-enforced-sso-request", {
                constructor: HTMLFormElement,
                initialize(e) {
                    E(e)
                }
            }), u("toggle", ".js-build-status .js-dropdown-details", function(e) {
                const t = e.currentTarget,
                    n = t.querySelector(".js-status-dropdown-menu");
                if (!n) return;

                function s() {
                    t.hasAttribute("open") || r()
                }

                function o(e) {
                    n.contains(e.target) || r()
                }

                function r() {
                    t.removeAttribute("open"), n.classList.add("d-none"), t.appendChild(n), t.removeEventListener("toggle", s), window.removeEventListener("scroll", o)
                }
                t.addEventListener("toggle", s), n.classList.contains("js-close-menu-on-scroll") && window.addEventListener("scroll", o, {
                    capture: !0,
                    passive: !0
                }), n.classList.remove("d-none"), v(n, ".js-details-container").classList.add("open");
                const i = document.body;
                i && n.classList.contains("js-append-menu-to-body") && (i.appendChild(n), Rf(i, n, t))
            }, {
                capture: !0
            }), u("click", ".js-status-retry", ({
                currentTarget: e
            }) => {
                Bf(e)
            }), r(".js-build-status", {
                add(e) {
                    e.addEventListener("mouseenter", Nf, {
                        once: !0
                    })
                },
                remove(e) {
                    e.removeEventListener("mouseenter", Nf)
                }
            }), u("click", "button[data-sudo-required], summary[data-sudo-required]", Pf), r("form[data-sudo-required]", {
                constructor: HTMLFormElement,
                subscribe: e => q(e, "submit", Pf)
            });
            const Of = {
                "actor:": "ul.js-user-suggestions",
                "user:": "ul.js-user-suggestions",
                "operation:": "ul.js-operation-suggestions",
                "org:": "ul.js-org-suggestions",
                "action:": "ul.js-action-suggestions",
                "repo:": "ul.js-repo-suggestions",
                "country:": "ul.js-country-suggestions"
            };

            function Uf(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/suggesters/audit-log-suggester.js:22");
                const {
                    key: t,
                    item: n
                } = e.detail;
                if (!zf(t)) return;
                const s = p(n, "data-value");
                e.detail.value = `${t}${s}`
            }

            function Wf(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/suggesters/audit-log-suggester.js:33");
                const {
                    key: t,
                    provide: n
                } = e.detail;
                if (!zf(t)) return;
                const s = e.target;
                if (!(s instanceof Element)) throw new Error("invariant: app/assets/modules/github/suggesters/audit-log-suggester.js:40");
                n(async function(e, t, n) {
                    const s = (await Vf(e)).querySelector(function(e) {
                        const t = Of[e];
                        if (!t) throw new Error(`Unknown audit log expander key: ${e}`);
                        return t
                    }(t));
                    if (!s) return {
                        matched: !1
                    };
                    const o = uo(s, n, {
                        limit: 5
                    });
                    return {
                        fragment: s.cloneNode(!0),
                        matched: o > 0
                    }
                }(p(s, "data-audit-url"), t, e.detail.text))
            }

            function zf(e) {
                return Object.getOwnPropertyNames(Of).includes(e)
            }
            r("text-expander[data-audit-url]", {
                subscribe: e => U(q(e, "text-expander-change", Wf), q(e, "text-expander-value", Uf))
            });
            const Vf = Ff(async function(e) {
                const t = await B(document, e),
                    n = document.createElement("div");
                return n.append(t), n
            });
            const Kf = {};

            function Yf(e) {
                const t = e.getAttribute("data-emoji-name") || "";
                return Kf[t] = ` ${function(e){return(e.getAttribute("data-text")||"").trim().toLowerCase()}(e).replace(/_/g," ")}`, t
            }

            function Xf(e, t) {
                const n = Kf[e].indexOf(t);
                return n > -1 ? 1e3 - n : 0
            }

            function Jf(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/suggesters/emoji-suggester.js:62");
                ":" === e.detail.key && (e.detail.value = function(e) {
                    if (e.hasAttribute("data-use-colon-emoji")) return e.getAttribute("data-value");
                    const t = e.firstElementChild;
                    return t && "G-EMOJI" === t.tagName && !t.firstElementChild ? t.textContent : e.getAttribute("data-value")
                }(e.detail.item))
            }

            function Gf(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/suggesters/emoji-suggester.js:68");
                const {
                    key: t,
                    provide: n
                } = e.detail;
                if (":" !== t) return;
                const s = e.target;
                if (!(s instanceof Element)) throw new Error("invariant: app/assets/modules/github/suggesters/emoji-suggester.js:75");
                n(async function(e, t) {
                    const n = await Qf(e),
                        s = function(e, t) {
                            return uo(t, ` ${e.toLowerCase().replace(/_/g," ")}`, {
                                limit: 5,
                                text: Yf,
                                score: Xf
                            })
                        }(t, n);
                    return {
                        fragment: n,
                        matched: s > 0
                    }
                }(p(s, "data-emoji-url"), e.detail.text))
            }
            r("text-expander[data-emoji-url]", {
                subscribe: e => U(q(e, "text-expander-change", Gf), q(e, "text-expander-value", Jf))
            });
            const Qf = Ff(async function(e) {
                const t = (await B(document, e)).firstElementChild;
                if (!(t instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/suggesters/emoji-suggester.js:92");
                return t
            });

            function Zf(e, t, n) {
                const s = new RegExp(`\\b${o=e,o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}`);
                var o;
                const r = /^\d+$/.test(e) ? e => (function(e, t) {
                        const n = e.search(t);
                        return n > -1 ? 1e3 - n : 0
                    })(e, s) : t => so(t, e),
                    i = Rc(n, e, {
                        limit: 5,
                        text: e => `${e.number} ${e.title.trim().toLowerCase()}`,
                        score: r
                    });
                return function(e, t) {
                    const n = e => Ye `
      <li role="option" id="suggester-issue-${e.id}" data-value="${e.number}">
        <small>#${e.number}</small> ${e.title}
      </li>
    `;
                    Ke((e => Ye `
    <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
      ${e.map(n)}
    </ul>
  `)(e), t)
                }(i, t), i.length
            }

            function ep(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/suggesters/issue-suggester.js:62");
                if ("#" !== e.detail.key) return;
                const t = p(e.detail.item, "data-value");
                e.detail.value = `#${t}`
            }

            function tp(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/suggesters/issue-suggester.js:69");
                const {
                    key: t,
                    provide: n
                } = e.detail;
                if ("#" !== t) return;
                const s = e.target;
                if (!(s instanceof Element)) throw new Error("invariant: app/assets/modules/github/suggesters/issue-suggester.js:76");
                n(async function(e, t) {
                    const n = await np(e),
                        s = document.createElement("div"),
                        o = Zf(t, s, n),
                        r = s.firstElementChild;
                    if (!(r instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/suggesters/issue-suggester.js:86");
                    return {
                        fragment: r,
                        matched: o > 0
                    }
                }(p(s, "data-issue-url"), e.detail.text))
            }
            r("text-expander[data-issue-url]", {
                subscribe: e => U(q(e, "text-expander-change", tp), q(e, "text-expander-value", ep))
            });
            const np = Ff(O);

            function sp(e, t, n) {
                const s = Rc(n, e, {
                    limit: 5,
                    score: op(e).score,
                    text: e => e.description ? `${e.name} ${e.description}`.trim().toLowerCase() : `${e.login} ${e.name}`.trim().toLowerCase()
                });
                return function(e, t) {
                    const n = e => {
                        const t = "user" === e.type ? e.login : e.name,
                            n = "user" === e.type ? e.name : e.description;
                        return Ye `
      <li role="option" id="suggester-${e.id}-${e.type}-${t}" data-value="${t}">
        <span>${t}</span>
        <small>${n}</small>
      </li>
    `
                    };
                    Ke((e => Ye `
    <ul role="listbox" class="suggester-container suggester suggestions list-style-none position-absolute">
      ${e.map(n)}
    </ul>
  `)(e), t)
                }(s, t), s.length
            }

            function op(e) {
                let t;
                if (e) {
                    const n = e.toLowerCase().split("");
                    t = function(t) {
                        if (!t) return 0;
                        const s = function(e, t) {
                            let n, s, o, r;
                            const i = function(e, t) {
                                let n = 0;
                                const s = [];
                                for (;
                                    (n = e.indexOf(t, n)) > -1;) s.push(n++);
                                return s
                            }(e, t[0]);
                            if (0 === i.length) return;
                            if (1 === t.length) return [i[0], 1, []];
                            for (r = null, s = 0, o = i.length; s < o; s++) {
                                const o = i[s];
                                if (!(n = rp(e, t, o + 1))) continue;
                                const a = n[n.length - 1] - o;
                                (!r || a < r[1]) && (r = [o, a, n])
                            }
                            return r
                        }(t, n);
                        if (!s) return 0;
                        let o = e.length / s[1];
                        return o /= s[0] / 2 + 1
                    }
                } else t = (() => 2);
                return {
                    score: t
                }
            }

            function rp(e, t, n) {
                let s = n;
                const o = [];
                for (let r = 1; r < t.length; r += 1) {
                    if (-1 === (s = e.indexOf(t[r], s))) return;
                    o.push(s++)
                }
                return o
            }

            function ip(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/suggesters/mention-suggester.js:149");
                if ("@" !== e.detail.key) return;
                const t = p(e.detail.item, "data-value");
                e.detail.value = `@${t}`
            }

            function ap(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/suggesters/mention-suggester.js:156");
                const {
                    key: t,
                    provide: n
                } = e.detail;
                if ("@" !== t) return;
                const s = e.target;
                if (!(s instanceof Element)) throw new Error("invariant: app/assets/modules/github/suggesters/mention-suggester.js:163");
                n(async function(e, t) {
                    const n = await cp(e),
                        s = document.createElement("div"),
                        o = sp(t, s, n),
                        r = s.firstElementChild;
                    if (!(r instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/suggesters/mention-suggester.js:173");
                    return {
                        fragment: r,
                        matched: o > 0
                    }
                }(p(s, "data-mention-url"), e.detail.text))
            }
            r("text-expander[data-mention-url]", {
                subscribe: e => U(q(e, "text-expander-change", ap), q(e, "text-expander-value", ip))
            });
            const cp = Ff(O);

            function lp(e, t) {
                const n = d(e, ".js-survey-question-form"),
                    s = v(n, "input.js-survey-other-text", HTMLInputElement);
                n.classList.toggle("is-other-selected", t), s.hidden = !t, t ? (s.required = !0, s.focus()) : s.required = !1, L(s, "change")
            }
            u("change", "select.js-survey-select", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLSelectElement)) throw new Error("invariant: app/assets/modules/github/survey.js:24");
                lp(e, e.options[e.selectedIndex].classList.contains("js-survey-option-other"))
            }), u("change", "input.js-survey-radio", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/survey.js:31");
                lp(e, e.classList.contains("js-survey-radio-other"))
            }), u("click", ".js-tagsearch-nav-item", e => {
                d(e.currentTarget, ".js-tagsearch-popover-content").scrollTop = 0
            }), r(".js-file-line-container, .js-code-block-container", {
                constructor: HTMLElement,
                subscribe(e) {
                    const t = document.querySelector(".js-tagsearch-popover");
                    if (!t) return {
                        unsubscribe() {}
                    };
                    const n = v(t, ".js-tagsearch-popover-content"),
                        s = new WeakMap,
                        o = new WeakMap;
                    let r;
                    async function i(n) {
                        const r = function(e, t, n) {
                            let s, o;
                            if (document.caretPositionFromPoint) {
                                const e = document.caretPositionFromPoint(t, n);
                                e && (s = e.offsetNode, o = e.offset)
                            } else if (document.caretRangeFromPoint) {
                                const e = document.caretRangeFromPoint(t, n);
                                e && (s = e.startContainer, o = e.startOffset)
                            }
                            if (!s || "number" != typeof o || s.nodeType !== Node.TEXT_NODE) return;
                            const r = s.textContent;
                            if (!r) return null;
                            const i = function(e, t, n) {
                                let s;
                                for (; s = t.exec(e);) {
                                    const e = s.index + s[0].length;
                                    if (s.index < n && n < e) return [s[0], s.index, e]
                                }
                                return null
                            }(r, e, o);
                            if (!i) return null;
                            const a = document.createRange();
                            return a.setStart(s, i[1]), a.setEnd(s, i[2]), a
                        }(/\w+[!?]?/g, n.clientX, n.clientY);
                        if (!r) return;
                        const i = r.commonAncestorContainer.parentElement;
                        if (!i) throw new Error("invariant: app/assets/modules/github/tagsearch.js:27");
                        for (const e of i.classList)
                            if (["pl-token", "pl-c", "pl-s", "pl-k"].includes(e)) return;
                        const a = r.toString();
                        if (!a || a.match(/\n|\s|[();&.=",]/)) return;
                        let l = o.get(i);
                        if (l || (l = new Set, o.set(i, l)), l.has(a)) return;
                        l.add(a);
                        let u = p(t, "data-tagsearch-lang");
                        if ("HTML+ERB" === u) {
                            if (!i.closest(".pl-sre")) return;
                            u = "Ruby"
                        }
                        if (e.classList.contains("js-code-block-container") && !(u = function(e) {
                                const t = e.closest(".highlight");
                                if (t)
                                    for (const n of t.classList) switch (n) {
                                        case "highlight-source-go":
                                            return "Go";
                                        case "highlight-source-js":
                                            return "JavaScript";
                                        case "highlight-source-python":
                                            return "Python";
                                        case "highlight-source-ruby":
                                            return "Ruby";
                                        case "highlight-source-ts":
                                            return "TypeScript"
                                    }
                                return null
                            }(i))) return;
                        const d = await async function(e, t, n) {
                            const s = p(e, "data-tagsearch-url"),
                                o = p(e, "data-tagsearch-path"),
                                r = p(e, "data-tagsearch-ref"),
                                i = new URL(s, window.location.origin),
                                a = new URLSearchParams;
                            a.set("q", t), a.set("context", o), a.set("ref", r), a.set("lang", n), i.search = a.toString();
                            const c = await S(i);
                            return /js-tagsearch-no-definitions/.test(c) ? "" : c
                        }(t, a, u);
                        if (!d) return;
                        const m = document.createElement("span");
                        m.classList.add("pl-token"), m.addEventListener("click", c), m.setAttribute("data-hydro-click", p(t, "data-hydro-click")), m.setAttribute("data-hydro-click-hmac", p(t, "data-hydro-click-hmac")), s.set(m, d), r.surroundContents(m)
                    }

                    function a() {
                        n.scrollTop = 0
                    }

                    function c(e) {
                        if (e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) return;
                        const o = e.currentTarget;
                        if (!(o instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/tagsearch.js:81");
                        o === r ? u() : (function(e) {
                            r && r.classList.remove("active");
                            (r = e).classList.add("active"), n.innerHTML = s.get(e) || "", l(e);
                            const t = e.closest(".js-file-line");
                            t && function(e) {
                                const t = e.id.replace(/^LC/, ""),
                                    s = n.querySelector(".js-tagsearch-looking-at-def"),
                                    o = n.querySelector(".js-tagsearch-defined-on");
                                if (!t || !s || !o) return;
                                p(s, "data-row") === t && (s.hidden = !1, o.hidden = !0)
                            }(t)
                        }(o), function() {
                            if (!t.hidden) return void a();
                            t.hidden = !1, a(), document.addEventListener("click", m), document.addEventListener("keyup", f), window.addEventListener("resize", d, {
                                passive: !0
                            })
                        }()), e.preventDefault()
                    }

                    function l(e) {
                        const n = e.getClientRects()[0];
                        t.style.position = "absolute", t.style.top = `${window.scrollY+n.bottom+7}px`, t.style.left = `${window.scrollX+n.left}px`
                    }

                    function u() {
                        t.hidden || (t.hidden = !0, r && r.classList.remove("active"), r = null, document.removeEventListener("click", m), document.removeEventListener("keyup", f), window.removeEventListener("resize", d))
                    }

                    function d() {
                        r instanceof HTMLElement && l(r)
                    }

                    function m(e) {
                        const {
                            target: n
                        } = e;
                        if (n instanceof Node) {
                            if (!r) throw new Error("invariant: app/assets/modules/github/tagsearch.js:163");
                            t.contains(n) || r.contains(n) || u()
                        }
                    }

                    function f(e) {
                        switch (e.key) {
                            case "Escape":
                                u()
                        }
                    }
                    return e.addEventListener("mousemove", i), {
                        unsubscribe() {
                            e.removeEventListener("mousemove", i)
                        }
                    }
                }
            });
            const up = new C;
            const dp = y(async function() {
                const e = v(document, ".js-quick-pull-new-branch-name", HTMLInputElement),
                    t = e.value,
                    n = e.getAttribute("data-generated-branch");
                if (null == n) throw new Error("Missing attribute `data-generated-branch`");
                const s = v(document, ".js-quick-pull-normalization-info"),
                    o = e.getAttribute("data-check-authenticity-token") || "",
                    r = new FormData;
                r.append("ref", t), r.append("authenticity_token", o);
                const i = p(e, "data-check-url"),
                    a = O(i, {
                        method: "post",
                        body: r
                    }),
                    c = await up.push(a);
                try {
                    ! function(o) {
                        if (t !== e.value) return;
                        const r = o.normalized_ref;
                        s.innerHTML = null == o.message_html ? "" : o.message_html, r || (v(s, "code").textContent = n)
                    }(c)
                } catch (Ah) {
                    e.value
                }
            }, 200);

            function mp() {
                return document.querySelectorAll(".js-template-editor").length > 0
            }

            function fp() {
                return document.querySelectorAll(".js-template-form.is-loading").length > 0 ? "loading" : document.querySelectorAll(".js-template-form.is-errored").length > 0 ? "error" : "ok"
            }

            function pp() {
                const e = v(document, ".js-commit-templates-form", HTMLFormElement),
                    t = v(e, ".js-blob-submit", HTMLButtonElement),
                    n = v(document, ".js-template-commit-form-error-message"),
                    s = v(document, ".js-template-commit-form-loading-message");
                switch (fp()) {
                    case "loading":
                        n.classList.add("d-none"), s.classList.remove("d-none"), e.setAttribute("disabled", "disabled"), t.setAttribute("disabled", "disabled");
                        break;
                    case "error":
                        n.classList.remove("d-none"), s.classList.add("d-none"), e.setAttribute("disabled", "disabled"), t.setAttribute("disabled", "disabled");
                        break;
                    default:
                        n.classList.add("d-none"), s.classList.add("d-none"), e.removeAttribute("disabled"), t.removeAttribute("disabled")
                }
            }
            async function gp(e) {
                e.classList.add("is-loading"), pp();
                const t = v(e, '[name="filename"]', HTMLInputElement).value,
                    n = {};
                for (const c of b(document, ".js-template-form", HTMLFormElement)) {
                    const e = v(c, '[name="filename"]', HTMLInputElement).value;
                    n[e] = {};
                    for (const [t, s] of Me(c)) n[e][t] = s
                }
                const s = new FormData(e);
                s.append("current", t), s.append("templates", JSON.stringify(n));
                const o = await O(e.action, {
                        method: "POST",
                        body: s
                    }),
                    r = Ae(document, o.html);
                d(e, ".js-template-preview").replaceWith(r);
                const i = v(document, ".js-hidden-template-fields");
                let a = i.querySelector(`[data-filename="${o.filename}"]`);
                a instanceof HTMLInputElement ? a.value = o.markdown : ((a = document.createElement("input")).type = "hidden", a.name = `templates[][${o.filename}]`, a.setAttribute("data-filename", o.filename), a.value = o.markdown, i.append(a)), e.classList.remove("is-loading"), pp()
            }

            function hp() {
                for (const e of b(document, ".js-template-form", HTMLFormElement)) gp(e)
            }

            function bp(e) {
                if (function(e) {
                        let t;
                        try {
                            t = new URL(e.url)
                        } catch (n) {
                            return !0
                        }
                        return t.host !== window.location.host
                    }(e) || function(e) {
                        return /[?&]_pjax=/.test(e.url)
                    }(e)) return;
                const t = function() {
                    const e = document.querySelector(".js-timeline-marker");
                    return null != e ? e.getAttribute("data-last-modified") : null
                }();
                t && e.headers.set("X-Timeline-Last-Modified", t)
            }

            function vp(e) {
                ! function(e) {
                    const t = e.closest("details, .js-details-container");
                    if (!t) return;
                    if (!(t instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/timeline/progressive.js:69");
                    "DETAILS" === t.nodeName ? t.setAttribute("open", "open") : Xe(t) || je(t)
                }(e);
                const t = e.querySelector(`[href='#${e.id}']`);
                t && t.click()
            }

            function wp() {
                return window.location.hash.slice(1)
            }
            r(".js-template-form .js-issue-labels", {
                add(e) {
                    const t = e.closest(".js-issue-template-labels-container");
                    if (!t) return;
                    const n = v(t, ".js-issue-template-labels", HTMLInputElement);
                    n.value = "";
                    for (const s of e.children) {
                        const e = s.getAttribute("data-name");
                        e && !n.value.includes(e) && ("" === n.value ? n.value = e : n.value = `${n.value}, ${e}`)
                    }
                }
            }), r(".js-template-form .js-issue-assignees", {
                add(e) {
                    const t = e.closest(".js-issue-template-assignees-container");
                    if (!(t instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/template-editor.js:103");
                    const n = v(t, ".js-issue-template-assignees", HTMLInputElement);
                    n.value = "";
                    for (const s of e.children) {
                        const e = s.querySelector("span");
                        if (e) {
                            const t = e.getAttribute("data-assignee-name");
                            t && !n.value.includes(t) && ("" === n.value ? n.value = t : n.value = `${n.value}, ${t}`)
                        }
                    }
                }
            }), u("change", ".js-quick-pull-choice-option", function(e) {
                if (!mp()) return;
                const t = e.currentTarget;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/template-editor.js:131");
                v(document, ".js-commit-branch-name").classList.toggle("d-none", "quick-pull" !== t.value), v(document, ".js-quick-pull-new-branch-name").toggleAttribute("required", "quick-pull" === t.value)
            }), g(".js-quick-pull-new-branch-name", function(e) {
                if (!mp()) return;
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/template-editor.js:145");
                const n = t.value;
                v(document, ".js-quick-pull-target-branch", HTMLInputElement).value = n, n.length && dp()
            }), g(".js-synced-template-input", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/template-editor.js:156");
                const n = t.getAttribute("data-sync");
                if (!n) return;
                const s = d(t, ".js-sync-container"),
                    o = b(s, `[data-sync-with="${n}"]`),
                    r = t.value;
                if ("" !== r.trim()) {
                    for (const e of o) e.textContent = t.value;
                    if ("name" === n) {
                        v(s, ".js-sync-filename", HTMLInputElement).value = `${r.replace(/[^\w]/g,"-")}.md`.toLowerCase()
                    }
                } else
                    for (const i of o) {
                        const e = i.getAttribute("data-sync-blank");
                        e && (i.innerHTML = `<span class="text-gray">${e}</span>`)
                    }
            }), u("submit", ".js-template-form", function(e) {
                e.preventDefault();
                const t = e.currentTarget;
                if (!(t instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/template-editor.js:305");
                gp(t)
            }), u("click", ".js-toggle-template-commit", function() {
                const e = v(document, ".js-template-commit-pane");
                e.classList.toggle("d-none"), e.classList.contains("d-none") || hp()
            }), u("submit", ".js-commit-templates-form", function(e) {
                "ok" !== fp() && e.preventDefault(), pp()
            }), u("click", ".js-refresh-template-content", async function(e) {
                const t = e.currentTarget,
                    n = d(t, ".js-template-form"),
                    s = v(n, ".js-template-content-preview");
                s.innerHTML = '<span class="text-gray">Loading preview...</span>';
                const o = v(n, ".js-template-content-textarea", HTMLTextAreaElement).value,
                    r = t.getAttribute("data-markdown-preview-url"),
                    i = t.getAttribute("data-markdown-preview-token");
                if (!r || !i) return;
                const a = new FormData;
                a.append("markdown", o), a.append("authenticity_token", i);
                const c = await S(r, {
                    method: "POST",
                    body: a
                });
                s.innerHTML = c
            }), u("click", ".js-custom-template-toggle", e => {
                const t = e.target,
                    n = d(t, ".js-template-preview"),
                    s = !n.classList.contains("expand-preview");
                if (function() {
                        const e = document.querySelectorAll(".js-template-preview");
                        for (const t of e) t.classList.remove("expand-preview")
                    }(), s) n.classList.add("expand-preview"), n.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
                else {
                    gp(v(n, ".js-template-form", HTMLFormElement))
                }
            }), u("click", ".js-remove-template-button", function(e) {
                const t = d(e.target, ".js-template-preview"),
                    n = p(t, "data-filename"),
                    s = v(document, ".js-hidden-template-fields"),
                    o = v(document, ".js-toggle-template-commit", HTMLButtonElement),
                    r = s.querySelector(`[data-filename="${n}"]`);
                r && r.remove(), o.disabled = !1, t.remove(), hp()
            }), u("click", ".js-edit-custom-field-header", function(e) {
                d(e.target, ".js-custom-field-header").classList.toggle("section-focus"), v(document, ".js-toggle-template-commit", HTMLButtonElement).disabled = !1
            }), u("details-menu-selected", ".js-add-template", function(e) {
                const t = v(document, ".js-templates-container"),
                    n = v(document, ".js-toggle-template-commit", HTMLButtonElement);
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/template-editor.js:389");
                const s = e.detail.relatedTarget.getAttribute("data-source");
                if (!s) return;
                n.disabled = !1;
                const o = v(document, `#${s}`);
                t.insertAdjacentHTML("beforeend", o.innerHTML)
            }, {
                capture: !0
            }), u("change", ".js-template-repository-choice", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/template-repositories.js:6");
                const n = t.checked && "" !== t.value,
                    s = t.form;
                if (!s) throw new Error("invariant: app/assets/modules/github/template-repositories.js:9");
                v(s, ".js-repository-auto-init-options").hidden = n;
                const o = b(s, ".js-template-repository-setting"),
                    r = b(s, ".js-template-repository-name-display");
                if (n) {
                    const e = d(t, ".js-template-repository-choice-container"),
                        n = v(e, ".js-template-repository-name");
                    v(s, ".js-repository-readme-choice", HTMLInputElement).checked = !1;
                    const o = v(s, ".js-repository-no-gitignore-choice", HTMLInputElement);
                    o.checked = !0, L(o, "change");
                    const i = v(s, ".js-repository-no-license-choice", HTMLInputElement);
                    i.checked = !0, L(i, "change");
                    const a = p(t, "data-owner"),
                        c = s.querySelector(`.js-repository-owner-choice[value="${a}"]`);
                    if (c) {
                        if (!(c instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/template-repositories.js:30");
                        c.checked = !0, L(c, "change")
                    } else {
                        const e = v(s, ".js-repository-owner-choice.js-repository-owner-is-viewer", HTMLInputElement);
                        e.checked = !0, L(e, "change")
                    }
                    for (const t of r) t.textContent = n.textContent
                } else
                    for (const i of r) i.textContent = "";
                for (const i of o) i.hidden = !n
            }), r(".js-discussion", function() {
                let e;

                function t() {
                    e = new WeakSet(document.querySelectorAll(".js-timeline-item"))
                }
                t(), document.addEventListener("pjax:end", t), r(".js-timeline-item", t => {
                    e.has(t) || Ds(t)
                })
            }), j(".js-needs-timeline-marker-header", function(e, t, n) {
                bp(n)
            }), u("deprecatedAjaxSend", "[data-remote]", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/timeline/marker.js:46");
                const {
                    request: t
                } = e.detail;
                bp(t)
            }), ce(function({
                target: e
            }) {
                const t = wp();
                t && !e && async function(e) {
                    const t = document.getElementById("js-timeline-progressive-loader");
                    if (!t) return;
                    const n = t.getAttribute("data-timeline-item-src");
                    if (!n) return;
                    const s = new URL(n, window.location.origin),
                        o = new URLSearchParams(s.search.slice(1));
                    let r;
                    o.append("anchor", e), s.search = o.toString();
                    try {
                        r = await B(document, s)
                    } catch (l) {
                        return
                    }
                    const i = r.querySelector(".js-timeline-item");
                    if (!i) return;
                    const a = i.getAttribute("data-gid");
                    if (!a) return;
                    const c = document.querySelector(`.js-timeline-item[data-gid='${a}']`);
                    if (c) {
                        c.replaceWith(i);
                        const t = document.getElementById(e);
                        t && vp(t)
                    } else {
                        const t = document.getElementById("js-progressive-timeline-item-container");
                        t && t.replaceWith(r);
                        const n = document.getElementById(e);
                        n && vp(n)
                    }
                }(t)
            }), r(".js-timeline-progressive-focus-container", function(e) {
                const t = wp();
                if (!t) return;
                const n = document.getElementById(t);
                n && e.contains(n) && vp(n)
            });
            const jp = "navigationStart";

            function yp() {
                const e = {};
                e.crossBrowserLoadEvent = Date.now();
                const t = window.performance && window.performance.timing;
                if (t) e.connectEnd = t.connectEnd, e.connectStart = t.connectStart, e.domComplete = t.domComplete, e.domContentLoadedEventEnd = t.domContentLoadedEventEnd, e.domContentLoadedEventStart = t.domContentLoadedEventStart, e.domInteractive = t.domInteractive, e.domLoading = t.domLoading, e.domainLookupEnd = t.domainLookupEnd, e.domainLookupStart = t.domainLookupStart, e.fetchStart = t.fetchStart, e.loadEventEnd = t.loadEventEnd, e.loadEventStart = t.loadEventStart, e.navigationStart = t.navigationStart, e.redirectEnd = t.redirectEnd, e.redirectStart = t.redirectStart, e.requestStart = t.requestStart, e.responseEnd = t.responseEnd, e.responseStart = t.responseStart, e.secureConnectionStart = t.secureConnectionStart, e.unloadEventEnd = t.unloadEventEnd, e.unloadEventStart = t.unloadEventStart;
                else {
                    const t = function() {
                        const e = Yi(jp);
                        if (e) return parseInt(e, 10)
                    }();
                    null != t && (e.simulatedNavigationStart = t)
                }
                const n = function() {
                    if (window.performance && "timeOrigin" in window.performance && window.performance.getEntriesByType) {
                        const e = window.performance.getEntriesByType("paint");
                        if (e.length) {
                            const t = e.find(e => "first-paint" === e.name);
                            if (t) return Math.round((performance.timeOrigin + t.startTime) / 1e6)
                        }
                    }
                }();
                return null != n && (e.chromeFirstPaintTime = n), e
            }

            function Ep(e) {
                const t = d(e, ".js-topic-save-notice-container"),
                    n = v(t, ".js-repo-topics-save-notice");
                n.classList.remove("d-none"), n.classList.add("d-inline-block", "anim-fade-in"), setTimeout(() => {
                    n.classList.remove("d-inline-block"), n.classList.add("d-none")
                }, 1900)
            }

            function Lp(e) {
                const t = v(e, ".js-topic-suggestions-box");
                t.querySelector(".js-topic-suggestion") || t.remove()
            }
            async function Tp(e) {
                const t = e.querySelector(".js-topic-suggestions-container");
                if (!t) return;
                const n = p(t, "data-url"),
                    s = await B(document, n);
                t.innerHTML = "", t.appendChild(s)
            }
            window.performance && window.performance.timing || window.addEventListener("pagehide", function() {
                Xi(jp, Date.now().toString())
            }), async function() {
                await I, await new Promise(e => setTimeout(e));
                const e = function() {
                    const e = [],
                        t = window.performance;
                    if (t && t.getEntriesByType)
                        for (const n of t.getEntriesByType("resource")) {
                            const t = {};
                            e.push(t), "string" == typeof n.name && (t.name = n.name), "string" == typeof n.entryType && (t.entryType = n.entryType), "number" == typeof n.startTime && (t.startTime = n.startTime), "number" == typeof n.duration && (t.duration = n.duration)
                        }
                    return e
                }();
                e.length && _({
                    resourceTimings: e
                });
                const t = function() {
                    const e = [],
                        t = window.performance;
                    if (t && t.getEntriesByType)
                        for (const s of t.getEntriesByType("navigation")) {
                            const t = {};
                            e.push(t), "string" == typeof s.entryType && (t.entryType = s.entryType), "number" == typeof s.startTime && (t.startTime = s.startTime), "number" == typeof s.duration && (t.duration = s.duration)
                        }
                    const n = yp();
                    return n && 0 === e.length && e.push({
                        name: location.href,
                        entryType: "navigation",
                        startTime: 0,
                        duration: n.loadEventEnd - n.navigationStart,
                        initiatorType: "navigation",
                        nextHopProtocol: "http/1.1",
                        type: "navigate",
                        redirectStart: n.redirectStart,
                        redirectEnd: n.redirectEnd,
                        fetchStart: n.fetchStart,
                        domainLookupStart: n.domainLookupStart,
                        domainLookupEnd: n.domainLookupEnd,
                        connectStart: n.connectStart,
                        connectEnd: n.connectEnd,
                        secureConnectionStart: n.secureConnectionStart,
                        requestStart: n.requestStart,
                        responseStart: n.responseStart,
                        responseEnd: n.responseEnd,
                        unloadEventStart: n.unloadEventStart,
                        unloadEventEnd: n.unloadEventEnd,
                        domInteractive: n.domInteractive,
                        domContentLoadedEventStart: n.domContentLoadedEventStart,
                        domContentLoadedEventEnd: n.domContentLoadedEventEnd,
                        domComplete: n.domComplete,
                        loadEventStart: n.loadEventStart,
                        loadEventEnd: n.loadEventEnd
                    }), e
                }();
                t.length && _({
                    navigationTimings: t
                })
            }(), u("click", ".js-toggler-container .js-toggler-target", function(e) {
                if (!(e instanceof MouseEvent)) throw new Error("invariant: app/assets/modules/github/toggler.js:37");
                if (!e.currentTarget) throw new Error("invariant: app/assets/modules/github/toggler.js:38");
                if (0 !== e.button) return;
                const t = e.currentTarget.closest(".js-toggler-container"),
                    n = e.currentTarget.closest(".js-toggler-container-secondary");
                t.classList.toggle("on"), n && n.classList.toggle("on")
            }), j(".js-toggler-container", async (e, t) => {
                e.classList.remove("success", "error"), e.classList.add("loading");
                try {
                    await t.text(), e.classList.add("success")
                } catch (n) {
                    e.classList.add("error")
                } finally {
                    e.classList.remove("loading")
                }
            }), j(".js-accept-topic-form", async function(e, t) {
                await t.html();
                const n = d(e, ".js-topic-form-area"),
                    s = d(e, ".js-topic-suggestion"),
                    o = v(n, ".js-template"),
                    r = v(n, ".js-tag-input-selected-tags"),
                    i = o.cloneNode(!0),
                    a = v(s, 'input[name="input[name]"]', HTMLInputElement).value;
                v(i, "input", HTMLInputElement).value = a, v(i, ".js-placeholder-tag-name").replaceWith(a), i.classList.remove("d-none", "js-template"), r.appendChild(i), s.remove(), Tp(n), Lp(n), Ep(e)
            }), u("click", ".js-repo-topics-form-done", function() {
                !async function() {
                    const e = v(document, ".js-topics-list-container"),
                        t = p(e, "data-url"),
                        n = await B(document, t);
                    e.innerHTML = "", e.appendChild(n)
                }()
            }), j(".js-decline-topic-form", async function(e, t) {
                await t.html(), Ep(e);
                const n = d(e, ".js-topic-form-area");
                d(e, ".js-topic-suggestion").remove(), Tp(n), Lp(n)
            }), j(".js-repo-topics-edit-form", async function(e, t) {
                const n = d(e, ".js-topic-form-area");
                n.classList.remove("errored"), v(n, ".js-topic-error").textContent = "";
                for (const o of n.querySelectorAll(".js-tag-input-tag.invalid-topic")) o.classList.remove("invalid-topic");
                try {
                    await t.json(), Ep(e), Tp(n)
                } catch (s) {
                    const t = s.response.json;
                    if (t.message && (n.classList.add("errored"), v(n, ".js-topic-error").textContent = t.message), t.invalidTopics) {
                        const n = b(e, ".js-topic-input", HTMLInputElement);
                        for (const e of t.invalidTopics)
                            for (const t of n)
                                if (t.value === e) {
                                    d(t, ".js-tag-input-tag").classList.add("invalid-topic")
                                }
                    }
                }
            }), u("tags:changed", ".js-repo-topics-edit-form", function({
                target: e
            }) {
                if (!(e instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/topics.js:128");
                E(e)
            }), u("click", ".js-reveal-hidden-topics", function(e) {
                const t = e.target,
                    n = d(t, ".js-hidden-topics-container").querySelector(".js-hidden-topics");
                n && (n.classList.remove("d-none"), t.remove())
            }), u("click", ".js-hide-content-attachment", function(e) {
                e.preventDefault(),
                    function(e) {
                        const t = d(e, ".js-content-attachment"),
                            n = p(d(e, "[data-unfurl-hide-url]"), "data-unfurl-hide-url"),
                            s = p(d(e, "[data-unfurl-authenticity-token]"), "data-unfurl-authenticity-token"),
                            o = p(e, "data-id"),
                            r = new XMLHttpRequest;
                        r.onload = function() {
                            r.status >= 200 && r.status < 300 && t.remove()
                        }, r.open("POST", n);
                        const i = new FormData;
                        i.append("id", o), i.append("authenticity_token", s), r.send(i)
                    }(e.currentTarget)
            }), r(".js-content-attachment .max--md", function(e) {
                const t = v(e, ".markdown-body");
                var n;
                (t.clientHeight < 188 || "" === ((n = t).textContent || "").trim() && 1 === (n.querySelectorAll("img") || []).length) && (e.classList.remove("max--md"), v(e, ".Details-content--closed").hidden = !0, v(e, ".Details-content--open").hidden = !0)
            }), window.requestIdleCallback(() => {
                const e = function() {
                    if ("Intl" in window) try {
                        return (new window.Intl.DateTimeFormat).resolvedOptions().timeZone
                    } catch (Ah) {
                        if (!(Ah instanceof RangeError)) throw Ah
                    }
                }();
                if (e) {
                    const t = "https:" === location.protocol ? "secure" : "";
                    document.cookie = `tz=${encodeURIComponent(e)}; path=/; ${t}`
                }
            });
            class kp extends Error {
                constructor(e) {
                    super(e), this.name = "LoginRequestDataError"
                }
            }

            function Mp() {
                return v(document, ".js-use-security-key", HTMLButtonElement)
            }

            function Ap(e, t) {
                for (const n of document.querySelectorAll(".js-u2f-message")) n instanceof HTMLElement && (n.hidden = !0);
                if (v(document, e).hidden = !1, Ze() && t) {
                    const e = Mp();
                    e.textContent = p(e, "data-retry-message")
                }
            }

            function xp(e, t) {
                Ap(t, !0), nt.report(e)
            }

            function Sp() {
                return v(document, ".js-u2f-auth-form", HTMLFormElement)
            }

            function Hp(e) {
                const t = Sp();
                v(t, ".js-u2f-auth-response", HTMLInputElement).value = JSON.stringify(e), E(t)
            }
            class Cp {
                constructor() {
                    const e = Sp(),
                        t = e.getAttribute("data-app-id"),
                        n = e.getAttribute("data-challenge"),
                        s = e.getAttribute("data-sign-requests");
                    if (null == t || null == n || null == s) throw new kp("Missing data needed for security key request.");
                    this.appId = t, this.challenge = n;
                    try {
                        this.signRequests = JSON.parse(s)
                    } catch (Ah) {
                        throw new kp("Invalid data for security key request.")
                    }
                }
            }

            function qp(e) {
                e && e.preventDefault(), Qe() && (Ze() ? async function() {
                    try {
                        Ap(".js-webauthn-auth-waiting", !1);
                        const t = JSON.parse(p(Sp(), "data-webauthn-sign-request")),
                            n = await tt(t);
                        Ap(".js-webauthn-auth-success", !1), Mp().disabled = !0, Hp(n)
                    } catch (e) {
                        xp(new Error(e), ".js-webauthn-auth-error")
                    }
                }() : async function() {
                    try {
                        const t = new Cp;
                        Ap(".js-u2f-auth-waiting", !1), Hp(await et(t.appId, t.challenge, t.signRequests))
                    } catch (e) {
                        switch (e.code) {
                            case "4":
                                return xp(e, ".js-u2f-auth-not-registered-error");
                            case "5":
                                return xp(e, ".js-u2f-auth-timeout");
                            default:
                                return xp(e, ".js-u2f-other-error")
                        }
                    }
                }())
            }

            function Ip(e) {
                if (!(e instanceof Event)) throw new Error("invariant: app/assets/modules/github/u2f-login.js:21");
                qp(e)
            }
            r(".js-webauthn-support", {
                constructor: HTMLInputElement,
                add: function(e) {
                    $(e, Je())
                }
            }), r(".js-webauthn-iuvpaa-support", {
                constructor: HTMLInputElement,
                add: function(e) {
                    !async function() {
                        $(e, await Ge())
                    }()
                }
            }), r(".js-u2f-auth-form-body", function(e) {
                if (!e) return;
                const t = Qe();
                if (e.classList.toggle("unavailable", !t), t)
                    if (Ze()) {
                        const e = Mp();
                        e.hidden = !1, e.classList.contains("js-webauthn-autofocus") && e.focus()
                    } else qp()
            }), u("click", ".js-u2f-auth-retry", Ip), u("click", ".js-use-security-key", Ip), nt.report = function(e) {
                t(e)
            }, u("socket:message", ".js-updatable-content", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/updatable-content-observer.js:14");
                const {
                    gid: t,
                    wait: n
                } = e.detail.data || {};
                let s;
                if (t && e.target.getAttribute("data-gid") === t ? s = e.target : t ? s = e.target.querySelector(`[data-url][data-gid="${t}"]`) : e.currentTarget === e.target && (s = e.target), !(s instanceof HTMLElement)) return;
                const o = Ne.bind(null, s);
                null == n ? o("live-update") : setTimeout(o, n, "delayed-live-update")
            }), u("upload:setup", ".js-upload-avatar-image", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/avatar.js:6");
                const t = e.detail.policyRequest,
                    n = e.currentTarget.getAttribute("data-alambic-organization"),
                    s = e.currentTarget.getAttribute("data-alambic-owner-type"),
                    o = e.currentTarget.getAttribute("data-alambic-owner-id");
                n && t.body.append("organization_id", n), s && t.body.append("owner_type", s), o && t.body.append("owner_id", o)
            }), u("upload:complete", ".js-upload-avatar-image", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/avatar.js:25");
                const t = `/settings/avatars/${e.detail.result.id}`;
                ne({
                    content: B(document, t)
                })
            });
            const _p = 2303741511,
                $p = 4;
            class Dp {
                static fromFile(e) {
                    return new Promise(function(t, n) {
                        const s = new FileReader;
                        s.onload = function() {
                            if (!(s.result instanceof ArrayBuffer)) throw new Error("invariant: app/assets/modules/github/png-scanner.js:32");
                            t(new Dp(s.result))
                        }, s.onerror = function() {
                            n(s.error)
                        }, s.readAsArrayBuffer(e)
                    })
                }
                constructor(e) {
                    this.dataview = new DataView(e), this.pos = 0
                }
                advance(e) {
                    this.pos += e
                }
                readInt(e) {
                    const t = this,
                        n = function() {
                            switch (e) {
                                case 1:
                                    return t.dataview.getUint8(t.pos);
                                case 2:
                                    return t.dataview.getUint16(t.pos);
                                case 4:
                                    return t.dataview.getUint32(t.pos);
                                default:
                                    throw new Error("bytes parameter must be 1, 2 or 4")
                            }
                        }();
                    return this.advance(e), n
                }
                readChar() {
                    return this.readInt(1)
                }
                readShort() {
                    return this.readInt(2)
                }
                readLong() {
                    return this.readInt(4)
                }
                readString(e) {
                    const t = [];
                    for (let n = 0; n < e; n++) t.push(String.fromCharCode(this.readChar()));
                    return t.join("")
                }
                scan(e) {
                    if (this.readLong() !== _p) throw new Error("invalid PNG");
                    for (this.advance(4);;) {
                        const t = this.readLong(),
                            n = this.readString(4),
                            s = this.pos + t + $p;
                        if (!1 === e.call(this, n, t) || "IEND" === n) break;
                        this.pos = s
                    }
                }
            }
            const Rp = .0254;

            function Bp(e, t) {
                const n = e.value.substring(0, e.selectionStart),
                    s = e.value.substring(e.selectionEnd),
                    o = 0 === n.length || n.match(/\n$/) ? "" : "\n",
                    r = n + o + t;
                e.value = r + s, e.selectionStart = r.length, e.selectionEnd = e.selectionStart, e.dispatchEvent(new CustomEvent("change", {
                    bubbles: !0,
                    cancelable: !1
                })), e.focus()
            }

            function Np(e) {
                const t = e.dataTransfer;
                if (!t) return;
                if (function(e) {
                        return Array.from(e.types).indexOf("Files") >= 0
                    }(t)) return;
                if (!Up(t)) return;
                const n = Wp(t);
                if (!n.some(Vp)) return;
                e.stopPropagation(), e.preventDefault();
                const s = e.currentTarget;
                s instanceof HTMLTextAreaElement && Bp(s, n.map(Op).join(""))
            }

            function Pp(e) {
                const t = e.dataTransfer;
                t && (t.dropEffect = "link")
            }

            function Fp(e) {
                const t = e.clipboardData;
                if (!t || !Up(t)) return;
                const n = Wp(t);
                if (!n.some(Vp)) return;
                e.stopPropagation(), e.preventDefault();
                const s = e.currentTarget;
                s instanceof HTMLTextAreaElement && Bp(s, n.map(Op).join(""))
            }

            function Op(e) {
                return Vp(e) ? `\n![](${e})\n` : e
            }

            function Up(e) {
                return Array.from(e.types).indexOf("text/uri-list") >= 0
            }

            function Wp(e) {
                return (e.getData("text/uri-list") || "").split("\r\n")
            }
            const zp = /\.(gif|png|jpe?g)$/i;

            function Vp(e) {
                return zp.test(e)
            }

            function Kp(e) {
                const t = e.dataTransfer;
                if (!t) return;
                if (function(e) {
                        return Array.from(e.types).indexOf("Files") >= 0
                    }(t)) return;
                const n = Qp(t);
                if (!n) return;
                e.stopPropagation(), e.preventDefault();
                const s = e.currentTarget;
                s instanceof HTMLTextAreaElement && Bp(s, Gp(n))
            }

            function Yp(e) {
                const t = e.dataTransfer;
                t && (t.dropEffect = "copy")
            }

            function Xp(e) {
                if (!e.clipboardData) return;
                const t = Qp(e.clipboardData);
                if (!t) return;
                e.stopPropagation(), e.preventDefault();
                const n = e.currentTarget;
                n instanceof HTMLTextAreaElement && Bp(n, Gp(t))
            }

            function Jp(e) {
                return e.textContent.trim().replace(/\|/g, "\\|").replace(/\n/g, " ") || " "
            }

            function Gp(e) {
                const t = Array.from(e.querySelectorAll("tr")),
                    n = (s = t.shift(), Array.from(s.querySelectorAll("td, th")).map(Jp));
                var s;
                const o = n.map(() => "--");
                return `\n${`${n.join(" | ")}\n${o.join(" | ")}\n`}${t.map(e=>Array.from(e.querySelectorAll("td")).map(Jp).join(" | ")).join("\n")}\n\n`
            }

            function Qp(e) {
                if (-1 === Array.from(e.types).indexOf("text/html")) return;
                const t = e.getData("text/html");
                if (!/<table/i.test(t)) return;
                const n = function(e) {
                    const t = document.createElement("div");
                    return t.innerHTML = e, t.querySelector("table")
                }(t);
                return n && !n.closest(".js-comment") ? /\b(js|blob|diff)-./.test(n.className) ? null : n : void 0
            }

            function Zp(e) {
                const t = e.clipboardData;
                if (!t || ! function(e) {
                        return Array.from(e.types).indexOf("text/x-gfm") >= 0
                    }(t)) return;
                const n = e.currentTarget;
                if (!(n instanceof HTMLTextAreaElement)) return;
                const s = t.getData("text/x-gfm");
                s && (e.stopPropagation(), e.preventDefault(), Bp(n, s))
            }

            function eg(e) {
                return `${tg(e)?"!":""}[Uploading ${e.name}…]()`
            }

            function tg(e) {
                return ["image/gif", "image/png", "image/jpg", "image/jpeg"].indexOf(e.type) > -1
            }
            r(".js-paste-markdown", {
                subscribe: function(e) {
                    return function(e) {
                            e.addEventListener("dragover", Yp), e.addEventListener("drop", Kp), e.addEventListener("paste", Xp)
                        }(e),
                        function(e) {
                            e.addEventListener("dragover", Pp), e.addEventListener("drop", Np), e.addEventListener("paste", Fp)
                        }(e),
                        function(e) {
                            e.addEventListener("paste", Zp)
                        }(e), {
                            unsubscribe: () => {
                                ! function(e) {
                                    e.removeEventListener("dragover", Yp), e.removeEventListener("drop", Kp), e.removeEventListener("paste", Xp)
                                }(e),
                                function(e) {
                                    e.removeEventListener("dragover", Pp), e.removeEventListener("drop", Np), e.removeEventListener("paste", Fp)
                                }(e),
                                function(e) {
                                    e.removeEventListener("paste", Zp)
                                }(e)
                            }
                        }
                }
            });
            const ng = 144;

            function sg(e) {
                const t = d(e, "form", HTMLFormElement);
                return v(t, "#release_id", HTMLInputElement).value
            }
            u("upload:setup", ".js-upload-markdown-image", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/markdown.js:48");
                const t = v(e.currentTarget, ".js-comment-field", HTMLTextAreaElement);
                t.setCustomValidity("uploading"), Te(t, `${eg(e.detail.file)}\n`)
            }), u("upload:complete", ".js-upload-markdown-image", async function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/markdown.js:54");
                const t = e.detail,
                    n = e.currentTarget,
                    s = v(n, ".js-comment-field", HTMLTextAreaElement),
                    o = eg(t.file);

                function r(e) {
                    let n = `[${t.file.name}](${t.policy.asset.href})`;
                    if (tg(t.file)) {
                        const s = function(e) {
                                return e.replace(/[[\]\\"<>&]/g, ".").replace(/\.{2,}/g, ".").replace(/^\.|\.$/gi, "")
                            }(t.file.name).replace(/\.[^.]+$/, "").replace(/\./g, " "),
                            o = t.policy.asset.href;
                        if (e && e.ppi === ng) {
                            n = `<img width="${Math.round(e.width/2)}" alt="${s}" src="${o}">`
                        } else n = `![${s}](${o})`
                    }
                    s.setCustomValidity(""), st(s, o, n)
                }
                try {
                    r(await async function(e) {
                        if ("image/png" !== e.type) return null;
                        const t = e.slice(0, 10240, e.type),
                            n = await Dp.fromFile(t),
                            s = {
                                width: 0,
                                height: 0,
                                ppi: 1
                            };
                        return n.scan(function(e) {
                            switch (e) {
                                case "IHDR":
                                    return s.width = this.readLong(), s.height = this.readLong(), !0;
                                case "pHYs":
                                    {
                                        const e = this.readLong(),
                                            t = this.readLong();
                                        let n;
                                        return 1 === this.readChar() && (n = Rp),
                                        n && (s.ppi = Math.round((e + t) / 2 * n)),
                                        !1
                                    }
                                case "IDAT":
                                    return !1
                            }
                            return !0
                        }), s
                    }(t.file))
                } catch (i) {
                    r(), setTimeout(function() {
                        throw i
                    })
                }
            }), u("upload:error", ".js-upload-markdown-image", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/markdown.js:90");
                const t = v(e.currentTarget, ".js-comment-field", HTMLTextAreaElement),
                    n = eg(e.detail.file);
                t.setCustomValidity(""), st(t, n, "")
            }), u("upload:invalid", ".js-upload-markdown-image", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/markdown.js:97");
                const t = v(e.currentTarget, ".js-comment-field", HTMLTextAreaElement),
                    n = eg(e.detail.file);
                t.setCustomValidity(""), st(t, n, "")
            }), u("upload:setup", ".js-upload-marketplace-listing-screenshot", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/marketplace-listing-screenshot.js:6");
                const t = e.detail.policyRequest,
                    n = e.currentTarget.getAttribute("data-marketplace-listing-id");
                n && t.body.append("marketplace_listing_id", n)
            }), u("upload:complete", ".js-upload-marketplace-listing-screenshot", async function(e) {
                const t = p(e.currentTarget, "data-screenshots-url"),
                    n = v(document, ".js-marketplace-listing-screenshots-container"),
                    s = await B(document, t);
                n.innerHTML = "", n.appendChild(s)
            }), u("upload:setup", ".js-upload-marketplace-listing-hero-card-background", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/marketplace-listing-hero-card-background.js:5");
                const t = e.detail.policyRequest,
                    n = e.currentTarget.getAttribute("data-marketplace-listing-id");
                n && t.body.append("marketplace_listing_id", n)
            }), u("upload:complete", ".js-upload-marketplace-listing-hero-card-background", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/marketplace-listing-hero-card-background.js:14");
                const t = e.detail,
                    n = t.policy;
                v(document, ".js-marketplace-listing-hero-card-background-id", HTMLInputElement).value = n.asset.id || t.result.id;
                const s = v(document, ".js-hero-listing-container"),
                    o = n.asset.href || t.result.href;
                s.style.backgroundImage = `url(${o})`
            }), u("click", ".js-release-remove-file", function(e) {
                const t = d(e.currentTarget, ".js-release-file");
                t.classList.add("delete"), v(t, "input.destroy", HTMLInputElement).value = "true"
            }), u("click", ".js-release-undo-remove-file", function(e) {
                const t = d(e.currentTarget, ".js-release-file");
                t.classList.remove("delete"), v(t, "input.destroy", HTMLInputElement).value = ""
            });
            let og = null;

            function rg(e, t) {
                const n = t.body;
                if (!(n instanceof FormData)) throw new Error("invariant: app/assets/modules/github/upload/release-file.js:44");
                n.append("release_id", sg(e));
                const s = b(document, ".js-releases-field .js-release-file.delete .id", HTMLInputElement);
                if (s.length) {
                    const e = s.map(e => e.value);
                    n.append("deletion_candidates", e.join(","))
                }
            }
            u("release:saved", ".js-release-form", function(e) {
                const t = e.currentTarget;
                og = null;
                let n = !1;
                for (const o of t.querySelectorAll(".js-releases-field .js-release-file")) o.classList.contains("delete") ? o.remove() : o.classList.contains("js-template") || (n = !0);
                const s = v(t, ".js-releases-field");
                s.classList.toggle("not-populated", !n), s.classList.toggle("is-populated", n)
            }), u("upload:setup", ".js-upload-release-file", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/release-file.js:55");
                const {
                    policyRequest: t,
                    preprocess: n
                } = e.detail, s = e.currentTarget;
                if (sg(s)) return void rg(s, t);
                if (!og) {
                    const e = v(document, ".js-save-draft", HTMLButtonElement);
                    og = Wm(e)
                }
                const o = rg.bind(null, s, t);
                n.push(og.then(o))
            }), u("upload:start", ".js-upload-release-file", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/release-file.js:78");
                const t = e.detail.policy;
                v(e.currentTarget, ".js-upload-meter").classList.remove("d-none");
                const n = t.asset.replaced_asset;
                if (n)
                    for (const s of b(document, ".js-releases-field .js-release-file .id", HTMLInputElement)) Number(s.value) === n && d(s, ".js-release-file").remove()
            }), u("upload:complete", ".js-upload-release-file", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/release-file.js:94");
                const t = e.detail,
                    n = t.policy,
                    s = v(document, ".js-releases-field"),
                    o = v(s, ".js-template").cloneNode(!0);
                o.classList.remove("d-none", "js-template"), v(o, "input.id", HTMLInputElement).value = n.asset.id || t.result.id;
                const r = n.asset.name || n.asset.href.split("/").pop();
                for (const a of o.querySelectorAll(".js-release-asset-filename")) a instanceof HTMLInputElement ? a.value = r : a.textContent = r;
                const i = n.asset.size ? `(${(n.asset.size/1048576).toFixed(2)} MB)` : "";
                v(o, ".js-release-asset-filesize").textContent = i, s.appendChild(o), s.classList.remove("not-populated"), s.classList.add("is-populated"), v(e.currentTarget, ".js-upload-meter").classList.add("d-none")
            }), u("upload:progress", ".js-upload-release-file", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/release-file.js:126");
                v(e.currentTarget, ".js-upload-meter").style.width = `${e.detail.percent}%`
            }), u("upload:setup", ".js-upload-repository-image", function() {
                v(document, ".js-remove-repository-image-button").hidden = !0
            }), u("upload:complete", ".js-upload-repository-image", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/repository-image.js:9");
                const t = e.detail,
                    n = t.policy,
                    s = n.asset.id || t.result.id,
                    o = n.asset.href || t.result.href;
                v(document, ".js-repository-image-id", HTMLInputElement).value = s, v(document, ".js-remove-repository-image-button").hidden = !1, v(document, ".js-repository-image-container").style.backgroundImage = `url(${o})`
            });
            let ig = null;
            const ag = new WeakMap;

            function cg(e) {
                e.classList.remove("is-progress-bar");
                const t = d(e, ".js-upload-manifest-file-container");
                v(t, ".js-upload-progress").classList.remove("active"), v(t, ".js-upload-meter-text .js-upload-meter-filename").textContent = ""
            }

            function lg(e) {
                return e._path ? `${e._path}/${e.name}` : e.name
            }

            function ug(e) {
                cg(e.currentTarget)
            }

            function dg(e) {
                return Array.from(e.types).indexOf("Files") >= 0
            }

            function mg(e, t) {
                xi(new Ti(e), t)
            }

            function fg(e) {
                switch (e) {
                    case "image/gif":
                        return "image.gif";
                    case "image/png":
                        return "image.png";
                    case "image/jpeg":
                        return "image.jpg"
                }
            }

            function pg(e) {
                const t = e.dataTransfer;
                t && dg(t) && e.preventDefault()
            }

            function gg(e) {
                const t = e.dataTransfer;
                t && dg(t) && e.preventDefault()
            }
            u("upload:drop:setup", ".js-upload-manifest-file", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/upload-manifest-file.js:36");
                const t = e.detail.files,
                    n = parseInt(e.currentTarget.getAttribute("data-directory-upload-max-files"), 10);
                t.length > n && (e.preventDefault(), e.currentTarget.classList.add("is-too-many"))
            }), u("upload:drop:setup", ".js-upload-manifest-tree-view", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/upload-manifest-file.js:46");
                e.preventDefault();
                const t = e.detail.upload,
                    n = v(document, "#js-repo-pjax-container");
                n.addEventListener("pjax:success", () => {
                    t(v(n, ".js-upload-manifest-file"))
                }, {
                    once: !0
                });
                const s = p(e.currentTarget, "data-drop-url");
                V({
                    url: s,
                    container: n
                })
            }), u("upload:setup", ".js-upload-manifest-file", async function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/upload-manifest-file.js:63");
                const {
                    policyRequest: t,
                    preprocess: n
                } = e.detail, s = e.currentTarget;

                function o() {
                    t.body.append("upload_manifest_id", ag.get(s))
                }
                if (function(e, t) {
                        const n = d(e, ".js-upload-manifest-file-container"),
                            s = v(n, ".js-upload-progress");
                        s.classList.add("active"), e.classList.add("is-progress-bar");
                        const o = v(s, ".js-upload-meter-text");
                        v(o, ".js-upload-meter-range-start").textContent = String(t.batch.uploaded + 1), v(o, ".js-upload-meter-range-end").textContent = String(t.batch.size)
                    }(s, e.detail), ag.get(s)) return void o();
                if (ig) return void n.push(ig.then(o));
                const r = d(s, ".js-upload-manifest-file-container").querySelector(".js-upload-manifest-form");
                ig = O(r.action, {
                    method: r.method,
                    body: new FormData(r)
                });
                const [i, a] = function() {
                    let e, t;
                    const n = new Promise((n, s) => {
                        e = n, t = s
                    });
                    if (!e) throw new Error("invariant: app/assets/modules/github/upload/upload-manifest-file.js:116");
                    if (!t) throw new Error("invariant: app/assets/modules/github/upload/upload-manifest-file.js:117");
                    return [n, e, t]
                }();
                n.push(i.then(o));
                const c = await ig,
                    l = v(document, ".js-manifest-commit-form", HTMLFormElement).elements.namedItem("manifest_id");
                if (!(l instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/upload/upload-manifest-file.js:101");
                l.value = c.upload_manifest.id, ag.set(s, c.upload_manifest.id), ig = null, a()
            }), u("upload:start", ".js-upload-manifest-file", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/upload-manifest-file.js:130");
                const t = e.detail,
                    n = d(e.currentTarget, ".js-upload-manifest-file-container"),
                    s = v(n, ".js-upload-progress"),
                    o = v(s, ".js-upload-meter-text");
                v(o, ".js-upload-meter-range-start").textContent = t.batch.uploaded + 1, v(o, ".js-upload-meter-filename").textContent = lg(t.file)
            }), u("upload:complete", ".js-upload-manifest-file", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/upload-manifest-file.js:141");
                const t = e.detail,
                    n = v(document, ".js-manifest-commit-file-template", HTMLTableElement).rows[0].cloneNode(!0);
                v(n, ".name").textContent = lg(t.file);
                const s = t.policy.asset.id || t.result.id,
                    o = v(n, ".js-remove-manifest-file-form", HTMLFormElement).elements.namedItem("file_id");
                if (!(o instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/upload/upload-manifest-file.js:154");
                o.value = s;
                const r = v(document, ".js-manifest-file-list");
                r.classList.remove("d-none"), e.currentTarget.classList.add("is-file-list"), v(document, ".js-upload-progress").classList.add("is-file-list"), v(r, ".js-manifest-file-list-root").appendChild(n), t.batch.isFinished() && cg(e.currentTarget)
            }), u("upload:progress", ".js-upload-manifest-file", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/upload-manifest-file.js:171");
                const t = e.detail,
                    n = d(e.currentTarget, ".js-upload-manifest-file-container");
                v(n, ".js-upload-meter").style.width = `${t.batch.percent()}%`
            }), u("upload:error", ".js-upload-manifest-file", ug), u("upload:invalid", ".js-upload-manifest-file", ug), j(".js-remove-manifest-file-form", async function(e, t) {
                await t.html();
                const n = d(e, ".js-manifest-file-list-root");
                if (d(e, ".js-manifest-file-entry").remove(), !n.hasChildNodes()) {
                    d(n, ".js-manifest-file-list").classList.add("d-none"), v(document, ".js-upload-manifest-file").classList.remove("is-file-list"), v(document, ".js-upload-progress").classList.remove("is-file-list")
                }
            }), r(".js-manifest-ready-check", {
                initialize(e) {
                    !async function(e) {
                        const t = p(e, "data-redirect-url");
                        try {
                            await te(p(e, "data-poll-url")), window.location = t
                        } catch (Ah) {
                            v(document, ".js-manifest-ready-check").classList.add("d-none"), v(document, ".js-manifest-ready-check-failed").classList.remove("d-none")
                        }
                    }(e)
                }
            }), u("upload:setup", ".js-upload-enterprise-installation-user-accounts-upload", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/enterprise-installation-user-accounts-upload.js:5");
                const t = e.detail.policyRequest,
                    n = e.currentTarget.getAttribute("data-business-id");
                n && t.body.append("business_id", n);
                const s = e.currentTarget.getAttribute("data-enterprise-installation-id");
                s && t.body.append("enterprise_installation_id", s)
            }), u("upload:complete", ".js-upload-enterprise-installation-user-accounts-upload", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/upload/enterprise-installation-user-accounts-upload.js:20");
                const t = e.detail,
                    n = t.policy,
                    s = v(e.currentTarget, ".js-enterprise-installation-user-accounts-upload-id", HTMLInputElement);
                s.value = n.asset.id || t.result.id;
                const o = v(e.currentTarget, ".js-enterprise-installation-id", HTMLInputElement),
                    r = e.currentTarget.getAttribute("data-enterprise-installation-id");
                r && (o.value = r);
                const i = s.form;
                i && i.submit()
            });
            let hg = null;

            function bg(e) {
                if (kg) return;
                const t = e.currentTarget;
                if (!(t instanceof Element)) throw new Error("invariant: app/assets/modules/github/uploads.js:70");
                hg && clearTimeout(hg), hg = setTimeout(() => t.classList.remove("dragover"), 200);
                const n = e.dataTransfer;
                n && dg(n) && (n.dropEffect = "copy", t.classList.add("dragover"), e.stopPropagation(), e.preventDefault())
            }

            function vg(e) {
                if (e.dataTransfer && (e.dataTransfer.dropEffect = "none"), !(e.currentTarget instanceof Element)) throw new Error("invariant: app/assets/modules/github/uploads.js:91");
                e.currentTarget.classList.remove("dragover"), e.stopPropagation(), e.preventDefault()
            }

            function wg(e) {
                if (e.target instanceof Element && e.target.classList.contains("js-document-dropzone")) {
                    if (!(e.currentTarget instanceof Element)) throw new Error("invariant: app/assets/modules/github/uploads.js:102");
                    e.currentTarget.classList.remove("dragover")
                }
            }

            function jg(e) {
                const t = document.body;
                if (!t) throw new Error("invariant: app/assets/modules/github/uploads.js:130");
                const n = e.currentTarget;
                if (!(n instanceof Element)) throw new Error("invariant: app/assets/modules/github/uploads.js:132");
                n.classList.remove("dragover"), t.classList.remove("dragover");
                const s = e.dataTransfer;
                s && dg(s) && (!async function(e, t) {
                    const n = await Ii(t, e.hasAttribute("data-directory-upload"));
                    if (!n.length) return void Mi(e, "is-hidden-file");
                    const s = mg.bind(null, n);
                    !L(e, "upload:drop:setup", {
                        upload: s,
                        files: n
                    }) || mg(n, e)
                }(n, s), e.stopPropagation(), e.preventDefault())
            }

            function yg(e) {
                if (!e.clipboardData) return;
                if (!e.clipboardData.items) return;
                const t = Array.from(e.clipboardData.items).map(e => [e, fg(e.type)]).filter(e => e[1]).shift();
                if (!t) return;
                const [n] = t, s = n.getAsFile();
                if (!(e.currentTarget instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/uploads.js:163");
                if (!s) throw new Error("invariant: app/assets/modules/github/uploads.js:164");
                mg([s], e.currentTarget), e.preventDefault()
            }

            function Eg(e) {
                const t = e.target;
                if (t instanceof HTMLInputElement && t.classList.contains("js-manual-file-chooser")) {
                    if (e.currentTarget instanceof FileAttachmentElement) e.currentTarget.upload(t.files);
                    else {
                        if (!(e.currentTarget instanceof Element)) throw new Error("invariant: app/assets/modules/github/uploads.js:181");
                        mg(t.files, e.currentTarget)
                    }
                    t.value = ""
                }
            }

            function Lg({
                currentTarget: e
            }) {
                let t;
                if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/uploads.js:196");
                Mi(t = e.classList.contains("js-uploadable-container") ? e : v(e, ".js-uploadable-container, file-attachment"), "is-default")
            }
            let Tg = 0,
                kg = !1;

            function Mg() {
                kg = !0
            }

            function Ag() {
                kg = !1
            }

            function xg(e) {
                return v(e, '[role="tablist"] [role="tab"][aria-selected="true"]')
            }

            function Sg(e) {
                const t = b(e, '[role="tablist"] [role="tab"]'),
                    n = xg(e);
                return b(e, '[role="tabpanel"]', HTMLElement)[Array.from(t).indexOf(n)]
            }

            function Hg(e) {
                const t = e.querySelector(".js-emoji-picker-filter"),
                    n = v(e, ".js-emoji-picker-filter-tab-button"),
                    s = v(e, ".js-emoji-picker-all-emoji");
                t instanceof HTMLInputElement && (t.value = ""), s.setAttribute("value", ""), n.hidden = !0
            }

            function Cg(e) {
                e.classList.add("selected-emoji")
            }

            function qg(e) {
                if (!(e.target instanceof HTMLElement)) return;
                const t = e.target.closest(".js-emoji-picker");
                if (t && t instanceof HTMLElement && !t.hidden) switch (e.key) {
                    case "ArrowRight":
                    case "ArrowLeft":
                    case "ArrowUp":
                    case "ArrowDown":
                        e.preventDefault(),
                            function(e, t) {
                                const n = Sg(e),
                                    s = Array.from(n.querySelectorAll(".js-emoji-button")),
                                    o = n.querySelector(".selected-emoji.js-emoji-button"),
                                    r = function(e) {
                                        let t, n = 0;
                                        const s = e[0].getBoundingClientRect().top;
                                        for (const o of e) {
                                            if (s < (t = o.getBoundingClientRect()).top) break;
                                            n += 1
                                        }
                                        return n
                                    }(s),
                                    i = function(e, t) {
                                        const n = [
                                            []
                                        ];
                                        let s = 0;
                                        for (let o = 0; o < e.length; o++) {
                                            const r = e[o];
                                            o > 0 && o % t == 0 && (s += 1, n.push([])), n[s].push(r)
                                        }
                                        return n
                                    }(s, r);
                                let a = 0,
                                    c = 0;
                                if (o) {
                                    const e = function(e, t) {
                                        let n = 0,
                                            s = 0,
                                            o = [],
                                            r = -1;
                                        for (let i = 0; i < e.length; i++) {
                                            if ((r = (o = e[i]).indexOf(t)) > -1) {
                                                s = r;
                                                break
                                            }
                                            n += 1
                                        }
                                        return {
                                            row: n,
                                            col: s
                                        }
                                    }(i, o);
                                    switch (a = e.row, c = e.col, o.classList.remove("selected-emoji"), t) {
                                        case "ArrowRight":
                                            c += 1;
                                            break;
                                        case "ArrowDown":
                                            a += 1;
                                            break;
                                        case "ArrowLeft":
                                            c -= 1;
                                            break;
                                        case "ArrowUp":
                                            a -= 1
                                    }
                                }
                                const l = i.length - 1,
                                    u = c > i[l].length - 1,
                                    d = a === l;
                                a < 0 ? (a = l, u && (a -= 1)) : (a > l || d && u && "ArrowDown" === t) && (a = 0);
                                const m = i[a].length - 1;
                                c < 0 ? c = m : c > m && (c = 0);
                                const f = i[a][c];
                                Cg(f), f.focus()
                            }(t, e.key)
                }
            }

            function Ig(e) {
                e.hidden = !0, document.removeEventListener("keydown", qg)
            }

            function _g(e) {
                document.addEventListener("click", t => {
                    if (t.target instanceof HTMLElement) {
                        t.target.closest(".js-emoji-picker") !== e && Ig(e)
                    }
                });
                const t = v(e, ".js-emoji-picker-all-emoji"),
                    n = v(e, ".js-emoji-picker-no-results"),
                    s = v(e, ".js-emoji-picker-results-header");
                t.addEventListener("fuzzy-list-sorted", e => {
                    if (!(e instanceof CustomEvent)) return;
                    const o = Number(e.detail) > 0;
                    n.hidden = o, t.hidden = !o, s.hidden = !o
                });
                const o = e.querySelector(".js-emoji-picker-filter");
                o instanceof HTMLInputElement && o.addEventListener("input", () => (function(e) {
                    const t = d(e, ".js-emoji-picker"),
                        n = xg(t),
                        s = v(t, ".js-emoji-picker-filter-tab-button", HTMLButtonElement);
                    if (v(t, ".js-emoji-picker-all-emoji").setAttribute("value", e.value), n.classList.contains("js-emoji-picker-filter-tab-button") || n.classList.add("emoji-picker-prior-selected-tab-button"), e.value) s.hidden = !1, "true" === s.getAttribute("aria-selected") || (s.click(), e.focus());
                    else {
                        s.hidden = !0;
                        const e = t.querySelector(".emoji-picker-prior-selected-tab-button");
                        e instanceof HTMLButtonElement && e.click()
                    }
                })(o))
            }

            function $g(e) {
                return v(e, ".js-user-status-details").hasAttribute("open")
            }

            function Dg(e) {
                const t = e.querySelector(".js-emoji-picker");
                t instanceof HTMLElement && (! function(e) {
                    const t = v(e, ".js-original-emoji-category"),
                        n = v(e, ".js-original-emoji-category-tab", HTMLElement),
                        s = xg(e),
                        o = Sg(e),
                        r = e.querySelector(".js-originally-selected-emoji");
                    if (r) {
                        const t = e.querySelector(".selected-emoji");
                        t && t.classList.remove("selected-emoji"), r.classList.add("selected-emoji")
                    }
                    s.removeAttribute("aria-selected"), t.setAttribute("aria-selected", "true"), o.hidden = !0, n.hidden = !1
                }(t), Hg(t), Ig(t))
            }

            function Rg(e) {
                const t = v(e, ".js-user-status-original-emoji"),
                    n = v(e, ".js-user-status-custom-emoji"),
                    s = v(e, ".js-user-status-no-emoji-icon");
                n.innerHTML = t.innerHTML, s.hidden = n.hasChildNodes()
            }

            function Bg(e, t) {
                Rg(e),
                    function(e, t) {
                        const n = e.querySelector(".js-user-status-emoji-picker");
                        if (!(n instanceof window.IncludeFragmentElement)) return;
                        const s = p(n, "data-url");
                        if (t) {
                            const e = new URL(s, window.location.origin),
                                t = new URLSearchParams(e.search.slice(1));
                            t.append("show_picker", "1"), e.search = t.toString()
                        }
                        n.setAttribute("src", s.toString())
                    }(e, t),
                    function(e) {
                        const t = e.querySelector(".js-user-status-org-picker");
                        if (!(t instanceof window.IncludeFragmentElement)) return;
                        const n = p(t, "data-url");
                        t.src = n.toString()
                    }(e)
            }

            function Ng(e) {
                const t = v(e, ".js-user-status-suggestions"),
                    n = v(e, ".js-user-status-message-field", HTMLInputElement).value.trim().length > 0;
                t.classList.toggle("collapsed", n), t.setAttribute("aria-expanded", n.toString())
            }

            function Pg(e, t) {
                $g(e) ? function(e) {
                    const t = v(e, ".js-user-status-message-field", HTMLInputElement);
                    Rg(e), Dg(e), t.value = t.defaultValue, Rr(e)
                }(e) : Bg(e, t), Wg(e)
            }

            function Fg(e, t) {
                v(e, ".js-user-status-custom-emoji").innerHTML = t.innerHTML, v(e, ".js-user-status-no-emoji-icon").hidden = !0
            }

            function Og(e, t) {
                v(e, ".js-user-status-emoji-field", HTMLInputElement).value = t.value
            }

            function Ug(e, t) {
                if ("Escape" === Y(t)) {
                    const t = e.closest(".js-user-status-container");
                    if (!(t instanceof HTMLElement)) return;
                    e.value = e.defaultValue, Pg(t, !1)
                }
            }

            function Wg(e) {
                const t = v(e, ".js-user-status-submit", HTMLButtonElement),
                    n = v(e, ".js-clear-user-status-button", HTMLButtonElement),
                    s = v(e, ".js-user-status-message-field", HTMLInputElement),
                    o = v(e, ".js-user-status-emoji-field", HTMLInputElement),
                    r = s.value.trim(),
                    i = o.value.trim();
                let a = !1,
                    c = !1;
                var l;
                $r(l = s) - se(l.value) < 0 && (a = !0), r.length < 1 && i.length < 1 && (a = !0, n.classList.contains("js-user-status-exists") || (c = !0)), t.disabled = a, n.disabled = c
            }

            function zg(e) {
                return d(e, ".js-user-status-container")
            }

            function Vg(e, t) {
                if ($g(e)) return;
                const n = e.querySelectorAll(".js-toggle-user-status-edit.Details-content--closed");
                for (const s of n) s.classList.toggle("text-blue", t), s.classList.toggle("link-gray-dark", !t)
            }

            function Kg(e) {
                if (!(e.target instanceof Element)) return;
                Vg(d(e.target, ".js-user-status-container"), !0)
            }

            function Yg(e) {
                if (!(e.target instanceof Element)) return;
                Vg(d(e.target, ".js-user-status-container"), !1)
            }

            function Xg({
                currentTarget: e
            }) {
                if (!(e instanceof Element)) throw new Error("invariant: app/assets/modules/github/warn-unsaved-changes.js:40");
                R(e) ? function(e) {
                    const t = e.getAttribute("data-warn-unsaved-changes") || "Changes you made may not be saved.";
                    window.onbeforeunload = function(e) {
                        return e.returnValue = t, t
                    }
                }(e) : Jg()
            }

            function Jg() {
                window.onbeforeunload = null
            }

            function Gg({
                currentTarget: e
            }) {
                if (!(e instanceof Element)) throw new Error("invariant: app/assets/modules/github/warn-unsaved-changes.js:67");
                e.hasAttribute("open") || Jg()
            }

            function Qg(e) {
                const t = e.currentTarget;
                if (!(t instanceof Element)) throw new Error("invariant: app/assets/modules/github/warn-unsaved-changes.js:77");
                if (!t.closest("details[open]")) return;
                let n = !0;
                const s = b(t, "form[data-warn-unsaved-changes]", HTMLFormElement);
                for (const o of s)
                    if (R(o)) {
                        const e = p(o, "data-warn-unsaved-changes");
                        n = confirm(e);
                        break
                    }
                n || e.preventDefault()
            }

            function Zg(e, t, n) {
                const s = e[n];
                let o = {
                    position_in_list: n,
                    number_of_related_issues: e.length,
                    title_length: t.length
                };
                return s.repository.isPrivate || (o = Object.assign({}, o, {
                    title_string_at_time_of_click: t,
                    id_of_clicked_result: s.databaseId,
                    results_shown_at_time_of_click: e.map(e => e.databaseId)
                })), o
            }
            r(".js-document-dropzone", {
                add(e) {
                    const t = document.body;
                    if (!t) throw new Error("invariant: app/assets/modules/github/uploads.js:224");
                    t.addEventListener("dragstart", Mg), t.addEventListener("dragend", Ag), t.addEventListener("dragenter", bg), t.addEventListener("dragover", bg), t.addEventListener("dragleave", wg), e.addEventListener("drop", jg)
                },
                remove(e) {
                    const t = document.body;
                    if (!t) throw new Error("invariant: app/assets/modules/github/uploads.js:235");
                    t.removeEventListener("dragstart", Mg), t.removeEventListener("dragend", Ag), t.removeEventListener("dragenter", bg), t.removeEventListener("dragover", bg), t.removeEventListener("dragleave", wg), e.removeEventListener("drop", jg)
                }
            }), r(".js-uploadable-container, file-attachment", {
                add(e) {
                    0 == Tg++ && (document.addEventListener("drop", pg), document.addEventListener("dragover", gg)), e.addEventListener("change", Eg);
                    const t = e.closest("form");
                    t && t.addEventListener("reset", Lg)
                },
                remove(e) {
                    0 == --Tg && (document.removeEventListener("drop", pg), document.removeEventListener("dragover", gg)), e.removeEventListener("change", Eg);
                    const t = e.closest("form");
                    t && t.removeEventListener("reset", Lg)
                }
            }), r(".js-uploadable-container", {
                add(e) {
                    e.addEventListener("dragenter", bg), e.addEventListener("dragover", bg), e.addEventListener("dragleave", vg), e.addEventListener("drop", jg), e.addEventListener("paste", yg)
                },
                remove(e) {
                    e.removeEventListener("dragenter", bg), e.removeEventListener("dragover", bg), e.removeEventListener("dragleave", vg), e.removeEventListener("drop", jg), e.removeEventListener("paste", yg)
                }
            }), u("click", ".js-user-status-expire-button", function(e) {
                const t = e.currentTarget;
                t instanceof HTMLButtonElement && function(e, t) {
                    const n = v(e, ".js-user-status-expiration-interval-selected"),
                        s = v(e, ".js-user-status-expire-drop-down"),
                        o = v(e, ".js-user-status-expiration-date-input", HTMLInputElement);
                    n.textContent = t.title, o.value = t.value, s.removeAttribute("open")
                }(zg(t), t)
            }), u("click", ".js-toggle-user-status-edit", function(e) {
                if (!(e.currentTarget instanceof HTMLElement)) return;
                const t = zg(e.currentTarget);
                e.target instanceof HTMLElement && Pg(t, !!e.target.closest(".js-toggle-user-status-emoji-picker"))
            }), u("click", ".js-toggle-user-status-emoji-picker", function(e) {
                if (!(e.currentTarget instanceof HTMLElement)) return;
                const t = zg(e.currentTarget).querySelector(".js-emoji-picker");
                t instanceof HTMLElement && t.hidden && setTimeout(() => (function(e) {
                    const t = e.querySelector(".js-emoji-picker-filter"),
                        n = !e.hidden;
                    e.hidden = n, n ? (t instanceof HTMLInputElement && (t.value = ""), document.removeEventListener("keydown", qg)) : (t instanceof HTMLInputElement && t.focus(), document.addEventListener("keydown", qg))
                })(t), 50)
            }), u("click", ".js-emoji-button", function(e) {
                const t = e.currentTarget;
                t instanceof HTMLButtonElement && function(e) {
                    const t = d(e, ".js-user-status-container"),
                        n = v(t, ".js-emoji-picker");
                    Og(t, e),
                        function(e) {
                            const t = e.querySelector(".selected-emoji");
                            t && t.classList.remove("selected-emoji")
                        }(t), Cg(e), Fg(t, e), Wg(t), Ig(n)
                }(t)
            }), u("click", ".js-user-status-emoji-tab", function(e) {
                const t = e.currentTarget;
                t instanceof HTMLElement && function(e) {
                    const t = d(e, ".js-emoji-picker"),
                        n = t.querySelector(".js-emoji-picker-filter");
                    Hg(t), !t.hidden && n instanceof HTMLInputElement && n.focus()
                }(t)
            }), h(".js-user-status-message-field", function(e) {
                Ng(zg(e))
            }), m("keyup", ".js-user-status-message-field", e => {
                const t = e.target;
                t instanceof HTMLInputElement && e instanceof KeyboardEvent && Ug(t, e)
            }), m("keyup", ".js-emoji-picker-filter", e => {
                const t = e.target;
                t instanceof HTMLInputElement && e instanceof KeyboardEvent && Ug(t, e)
            }), u("click", ".js-clear-user-status-button", function(e) {
                const t = e.currentTarget;
                t instanceof HTMLButtonElement && function(e) {
                    e.hidden = !0, v(e, ".js-user-status-emoji-field", HTMLInputElement).value = "", v(e, ".js-user-status-no-emoji-icon").hidden = !1, v(e, ".js-user-status-custom-emoji").innerHTML = "";
                    const t = v(e, ".js-user-status-message-field", HTMLInputElement);
                    t.value = "", t.classList.contains("js-characters-remaining-field") && Dr(t);
                    const n = e.querySelector(".selected-emoji.js-emoji-button");
                    n && n.classList.remove("selected-emoji"), v(e, ".js-user-status-limited-availability-checkbox", HTMLInputElement).checked = !1;
                    const s = e.querySelector(".js-user-status-expiration-date-input");
                    s && s instanceof HTMLInputElement && (s.value = ""), Wg(e), Ng(e);
                    const o = v(e, ".js-user-status-form", HTMLFormElement);
                    E(o)
                }(d(t, ".js-user-status-container"))
            }), u("click", ".js-predefined-user-status", function(e) {
                const t = e.currentTarget;
                t instanceof HTMLButtonElement && function(e) {
                    const t = d(e, ".js-user-status-container"),
                        n = v(e, ".js-predefined-user-status-emoji"),
                        s = v(e, ".js-predefined-user-status-message"),
                        o = v(t, ".js-user-status-message-field", HTMLInputElement);
                    o.value = (s.textContent || "").trim(), Fg(t, n), Og(t, e), Wg(t), Ng(t), o.classList.contains("js-characters-remaining-field") && Dr(o)
                }(t)
            }), g(".js-user-status-message-field", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLElement)) return;
                const n = d(t, ".js-user-status-form");
                Wg(n), Ng(n)
            }), u("click", ".js-user-status-org-button", function(e) {
                const t = e.currentTarget;
                t instanceof HTMLButtonElement && function(e) {
                    const t = d(e, ".js-user-status-container"),
                        n = v(t, ".js-user-status-org-id-field", HTMLInputElement),
                        s = v(t, ".js-user-status-org-details"),
                        o = v(t, ".js-user-status-selected-org"),
                        r = v(e, ".js-user-status-org-display"),
                        i = v(t, ".js-user-status-org-message"),
                        a = e.value,
                        c = "" !== a,
                        l = v(t, ".js-user-status-message-field", HTMLInputElement),
                        u = t.querySelector(".js-user-status-org-button.selected");
                    let m = "";
                    u && u.classList.remove("selected"), e.classList.add("selected"), n.value = a, o.innerHTML = "";
                    const f = r.cloneNode(!0);
                    if (f instanceof HTMLElement && (f.hidden = !1), o.appendChild(f), s.removeAttribute("open"), c) {
                        const t = p(i, "data-prefix"),
                            n = p(i, "data-suffix"),
                            s = p(e, "data-org");
                        i.textContent = `${t}${s}${n}`, i.hidden = !1;
                        const o = new URL(p(l, "data-org-url"), window.location.origin),
                            r = new URLSearchParams(o.search.slice(1));
                        r.append("global_id", a), o.search = r.toString(), m = o.toString()
                    } else i.textContent = p(i, "data-none"), i.hidden = !0, m = p(l, "data-no-org-url");
                    d(l, "text-expander").setAttribute("data-mention-url", m)
                }(t)
            }), u("change", ".js-user-status-limited-availability-checkbox", function(e) {
                const t = e.target;
                if (!(t instanceof HTMLInputElement)) return;
                const n = d(t, ".js-user-status-form"),
                    s = t.checked,
                    o = p(t, "data-default-message"),
                    r = v(n, ".js-user-status-message-field", HTMLInputElement);
                s && r.value.length < 1 ? r.value = o : s || r.value !== o || (r.value = ""), Wg(n), Ng(n)
            }), j(".js-user-status-form", async function(e, t) {
                const n = v(e, ".js-user-status-form-group");
                let s;
                n.classList.remove("errored");
                try {
                    s = await t.html()
                } catch (a) {
                    return void n.classList.add("errored")
                }
                const o = d(e, ".js-user-status-container"),
                    r = s.html.querySelector(".js-user-status-container");
                o.replaceWith(s.html);
                const i = document.querySelectorAll(".js-user-status-container");
                for (const c of i)
                    if (r !== c) {
                        const e = c.closest(".js-user-status-context");
                        if (e) {
                            const t = p(e, "data-url"),
                                n = await B(document, t);
                            c.replaceWith(n)
                        }
                    }
            }), r(".js-toggle-user-status-edit", function(e) {
                e.addEventListener("mouseenter", Kg), e.addEventListener("mouseleave", Yg)
            }), r(".js-emoji-picker", e => {
                if (!(e instanceof HTMLElement)) throw new Error("invariant: app/assets/modules/github/user-status-submit.js:69");
                _g(e)
            }), r("[data-warn-unsaved-changes]", {
                add(e) {
                    e.addEventListener("input", Xg), e.addEventListener("change", Xg), e.addEventListener("submit", Jg);
                    const t = e.closest("details-dialog");
                    t && (d(t, "details").addEventListener("toggle", Gg), t.addEventListener("details-dialog-close", Qg))
                },
                remove(e) {
                    e.removeEventListener("input", Xg), e.removeEventListener("change", Xg), e.removeEventListener("submit", Jg);
                    const t = e.closest("details-dialog");
                    t && (d(t, "details").removeEventListener("toggle", Gg), t.removeEventListener("details-dialog-close", Qg), Jg())
                }
            });
            const eh = "related-issues-hidden";
            let th;
            async function nh(e) {
                const t = e.value;
                if (th = t, !t) return [];
                ! function(e) {
                    const t = v(document, ".js-related-issues-spinner");
                    "true" === e.getAttribute("data-user-has-opted-in") && (t.hidden = !1)
                }(e);
                const n = p(e, "data-related-issues-path"),
                    s = await O(ke(n, {
                        method: "POST",
                        body: lh(t, e.getAttribute("data-repository-id"))
                    }));
                if (uh(), !s.data) throw new Error("invariant: app/assets/modules/github/related-issues.js:107");
                return s.data.errors ? [] : s.data.repository.similarIssues.nodes
            }

            function sh(e, t) {
                if (0 === t.length) return uh(), oh(), void(v(document, ".js-related-issues-suggestions-results-wrapper").hidden = !0);
                v(document, ".js-number-of-related-issues", HTMLInputElement).value = `${t.length}`,
                    function(e) {
                        const t = v(document, ".js-related-issues-suggestions-results-container");
                        t.innerHTML = "", t.appendChild(e),
                            function() {
                                if (Yi(eh)) return;
                                ch(!0), rh(!0), v(document, ".js-related-issues-results-display").setAttribute("open", "")
                            }(), v(document, ".js-related-issues-suggestions-results-wrapper").hidden = !1
                    }(function(e, t) {
                        const n = v(document, ".js-related-issues-suggestions-template", HTMLTemplateElement),
                            s = document.createDocumentFragment();
                        for (let o = 0; o < t.length; o++) {
                            const r = dh(n, t[o], Zg(t, e.value, o));
                            s.appendChild(r)
                        }
                        return s
                    }(e, t))
            }

            function oh() {
                ch(!1), rh(!1), v(document, ".js-related-issues-results-display").removeAttribute("open")
            }

            function rh(e) {
                const t = v(document, ".js-related-issues-found-message"),
                    n = v(document, ".js-related-issues-feedback-message");
                void 0 !== e ? (t.hidden = !e, n.hidden = !e) : (t.hidden = !t.hidden, n.hidden = !n.hidden)
            }
            r(".js-related-issues-search", {
                constructor: HTMLInputElement,
                add(e) {
                    Yi(eh) && oh(), M(e, async () => {
                        sh(e, await nh(e))
                    }, {
                        wait: 500
                    }), u("change", ".js-related-issues-search", async () => {
                        e.value !== th && sh(e, await nh(e))
                    })
                }
            }), u("submit", "form#new_issue", e => {
                e.defaultPrevented || Ji(eh)
            }), u("click", ".js-toggle-related-results", () => {
                ch(), rh(), v(document, ".js-related-issues-results-display").hasAttribute("open") ? Xi(eh, "true") : (Ji(eh), window.localStorage.removeItem(eh))
            }), u("navigation:keydown", ".js-issue-title-input-container", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/related-issues.js:57");
                const t = document.querySelector('.js-issue-title-input-container .js-navigation-item[aria-selected="true"]'),
                    n = v(document, ".js-related-issues-results-display").hasAttribute("open");
                switch (e.detail.hotkey) {
                    case "Enter":
                        if (!t) {
                            const t = d(e.currentTarget, "form", HTMLFormElement);
                            t.querySelector("input[type=submit], button[type=submit]").disabled || E(t)
                        }
                        break;
                    case "Escape":
                        n && v(document, ".js-hide-related-results").click()
                }
            }), m("keydown", ".js-related-issues-search", function(e) {
                document.querySelector('.js-issue-title-input-container .js-navigation-item[aria-selected="true"]') || $o(e)
            });
            let ih, ah = !1;

            function ch(e) {
                let t;
                t = void 0 === e ? !v(document, ".js-related-issues-results-display").hasAttribute("open") : !!e, !ah && t ? (Se(v(document, ".js-related-issues-suggestions-results-container")), v(document, ".js-related-issues-search").classList.add("js-navigation-enable")) : (ot(v(document, ".js-related-issues-suggestions-results-container")), v(document, ".js-related-issues-search").classList.remove("js-navigation-enable"))
            }

            function lh(e, t) {
                if (!t) throw new Error("invariant: app/assets/modules/github/related-issues.js:235");
                const n = new FormData;
                return n.append("variables[query]", e), n.append("variables[repository_id]", t), n
            }

            function uh() {
                const e = document.querySelector(".js-related-issues-spinner");
                e && (e.hidden = !0)
            }

            function dh(e, t, n) {
                const s = e.content.cloneNode(!0);
                "OPEN" === t.state ? mh(s, ".js-related-issues-octicon-issue-opened") : mh(s, ".js-related-issues-octicon-issue-closed");
                const o = v(s, ".js-related-issue-suggestion-link", HTMLAnchorElement);
                if (o.href = t.url, o.setAttribute("data-hydro-client-context", JSON.stringify(n)), v(s, ".js-related-issue-suggestion-title", HTMLElement).textContent = t.title, v(s, ".js-related-issue-number", HTMLElement).textContent = `#${t.number}`, v(s, ".js-related-issue-opened-at", HTMLElement).setAttribute("datetime", t.createdAt), t.author) {
                    const e = v(s, ".js-related-issue-author", HTMLElement);
                    e.textContent = `${t.author.login}`, e.hidden = !1
                }
                return v(s, ".js-related-issue-updated-at", HTMLElement).setAttribute("datetime", t.updatedAt), v(s, ".js-related-issue-suggestion-comment-count").textContent = t.comments.totalCount, s
            }

            function mh(e, t) {
                const n = v(e, ".js-related-issue-octicon"),
                    s = v(n, t, SVGElement);
                n.classList.remove("d-none"), s.classList.remove("d-none")
            }

            function fh(e, t, n) {
                const s = e[n];
                let o = {
                    position_in_list: n,
                    number_of_similar_issues: e.length,
                    title_length: t.length
                };
                return s.repository.isPrivate || (o = Object.assign({}, o, {
                    title_string_at_time_of_click: t,
                    id_of_clicked_result: s.databaseId,
                    results_shown_at_time_of_click: e.map(e => e.databaseId)
                })), o
            }
            async function ph(e) {
                const t = e.value;
                if (ih = t, !t) return [];
                hh(),
                    function() {
                        const e = v(document, ".js-similar-issues-spinner");
                        e && (e.hidden = !1)
                    }();
                const n = p(e, "data-similar-issues-path"),
                    s = await O(ke(n, {
                        method: "POST",
                        body: jh(t, e.getAttribute("data-repository-id"))
                    }));
                if (yh(), !s.data) throw new Error("invariant: app/assets/modules/github/similar-issues.js:111");
                return s.data.errors ? [] : s.data.repository.similarIssues.nodes
            }

            function gh(e, t) {
                if (0 === t.length) return bh(), void hh();
                v(document, ".js-number-of-similar-issues", HTMLInputElement).value = `${t.length}`,
                    function(e) {
                        const t = v(document, ".js-similar-issues-suggestions-results-container");
                        t.innerHTML = "", t.appendChild(e)
                    }(function(e, t) {
                        const n = v(document, ".js-similar-issues-suggestions-template", HTMLTemplateElement),
                            s = document.createDocumentFragment();
                        for (let o = 0; o < t.length; o++) {
                            const r = Eh(n, t[o], fh(t, e.value, o));
                            s.appendChild(r)
                        }
                        return s
                    }(e, t)),
                    function(e) {
                        const t = v(document, ".js-show-similar-issues", HTMLButtonElement);
                        v(t, ".js-show-similar-issues-count").innerHTML = `${e.length}`, t.hidden = !1
                    }(t)
            }

            function hh() {
                const e = v(document, ".js-show-similar-issues", HTMLButtonElement);
                v(e, ".js-show-similar-issues-count").innerHTML = "", e.hidden = !0
            }

            function bh() {
                yh(), v(document, ".js-similar-issues-suggestions-results-wrapper").hidden = !0
            }
            u("compositionstart", ".js-related-issues-search", () => {
                ch(!1), ah = !0
            }), u("compositionend", ".js-related-issues-search", () => {
                ah = !1, ch()
            }), u("click", ".js-markdown-link-button", async function({
                currentTarget: e
            }) {
                const t = v(document, ".js-markdown-link-dialog", HTMLTemplateElement);
                (await ne({
                    content: t.content.cloneNode(!0)
                })).setAttribute("data-selection-end", function(e) {
                    const t = d(e, "markdown-toolbar", MarkdownToolbarElement).field;
                    if (!t) throw new Error("invariant: app/assets/modules/github/responsive-markdown-toolbar.js:9");
                    return t
                }(e).selectionEnd.toString())
            }), u("click", ".js-markdown-link-insert", ({
                currentTarget: e
            }) => {
                const t = d(e, "details-dialog"),
                    n = v(document, `#${p(e,"data-for-textarea")}`, HTMLTextAreaElement),
                    s = Number(p(t, "data-selection-end")),
                    o = v(t, "#js-dialog-link-href", HTMLInputElement).value,
                    r = `[${v(t,"#js-dialog-link-text",HTMLInputElement).value}](${o}) `,
                    i = n.value.slice(0, s),
                    a = n.value.slice(s);
                n.value = i + r + a, n.focus(), n.selectionStart = n.selectionEnd = s + r.length
            }), j(".js-repository-advisory-title-update", async function(e, t) {
                d(e, ".js-details-container").classList.remove("open");
                const n = (await t.json()).json;
                document.title = n.page_title;
                for (const s of e.elements)(s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement) && (s.defaultValue = s.value)
            }), j(".js-repository-advisory-update", async function(e) {
                d(e, ".previewable-edit").classList.remove("is-comment-editing");
                for (const t of e.elements)(t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement) && (t.defaultValue = t.value)
            }), j(".js-add-repository-advisory-collaborator", async function(e, t) {
                t.html(), e.reset()
            }), r(".js-similar-issues-search", {
                constructor: HTMLInputElement,
                add(e) {
                    M(e, async () => {
                        gh(e, await ph(e))
                    }, {
                        wait: 500
                    })
                }
            }), u("change", ".js-similar-issues-search", async ({
                currentTarget: e
            }) => {
                if (!(e instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/similar-issues.js:32");
                e.value !== ih && gh(e, await ph(e))
            }), u("click", ".js-show-similar-issues", () => {
                v(document, ".js-similar-issues-suggestions-results-wrapper").hasAttribute("hidden") ? v(document, ".js-similar-issues-suggestions-results-wrapper").hidden = !1 : bh()
            }), u("click", ".js-hide-similar-issues", () => {
                bh()
            }), u("navigation:keydown", ".js-issue-title-input-container", function(e) {
                if (!(e instanceof CustomEvent)) throw new Error("invariant: app/assets/modules/github/similar-issues.js:54");
                const t = document.querySelector(".js-similar-issues-suggestions-results-wrapper");
                if (!t) return;
                const n = document.querySelector('.js-issue-title-input-container .js-navigation-item[aria-selected="true"]'),
                    s = t.hasAttribute("hidden");
                switch (e.detail.hotkey) {
                    case "Enter":
                        if (!n) {
                            const t = d(e.currentTarget, "form", HTMLFormElement);
                            t.querySelector("input[type=submit], button[type=submit]").disabled || E(t)
                        }
                        break;
                    case "Escape":
                        s && v(document, ".js-hide-similar-issues").click()
                }
            }), m("keydown", ".js-similar-issues-search", function(e) {
                document.querySelector('.js-issue-title-input-container .js-navigation-item[aria-selected="true"]') || $o(e)
            });
            let vh = !1;

            function wh(e) {
                const t = document.querySelector(".js-similar-issues-suggestions-results-wrapper");
                if (!t) return;
                let n;
                n = void 0 === e ? !t.hasAttribute("hidden") : !!e, !vh && n ? (Se(v(document, ".js-similar-issues-suggestions-results-container")), v(document, ".js-similar-issues-search").classList.add("js-navigation-enable")) : (ot(v(document, ".js-similar-issues-suggestions-results-container")), v(document, ".js-similar-issues-search").classList.remove("js-navigation-enable"))
            }

            function jh(e, t) {
                if (!t) throw new Error("invariant: app/assets/modules/github/similar-issues.js:220");
                const n = new FormData;
                return n.append("variables[query]", e), n.append("variables[repository_id]", t), n
            }

            function yh() {
                const e = document.querySelector(".js-similar-issues-spinner");
                e && (e.hidden = !0)
            }

            function Eh(e, t, n) {
                const s = e.content.cloneNode(!0);
                "OPEN" === t.state ? Lh(s, ".js-similar-issues-octicon-issue-opened") : Lh(s, ".js-similar-issues-octicon-issue-closed");
                const o = v(s, ".js-similar-issue-suggestion-link", HTMLAnchorElement);
                if (o.href = t.url, o.setAttribute("data-hydro-client-context", JSON.stringify(n)), v(s, ".js-similar-issue-suggestion-title", HTMLElement).textContent = t.title, v(s, ".js-similar-issue-number", HTMLElement).textContent = `#${t.number}`, v(s, ".js-similar-issue-opened-at", HTMLElement).setAttribute("datetime", t.createdAt), t.author) {
                    const e = v(s, ".js-similar-issue-author", HTMLElement);
                    e.textContent = `${t.author.login}`, e.hidden = !1
                }
                return v(s, ".js-similar-issue-updated-at", HTMLElement).setAttribute("datetime", t.updatedAt), v(s, ".js-similar-issue-suggestion-comment-count").textContent = t.comments.totalCount, s
            }

            function Lh(e, t) {
                const n = v(e, ".js-similar-issue-octicon");
                v(n, t, SVGElement).removeAttribute("hidden")
            }
            u("compositionstart", ".js-similar-issues-search", () => {
                wh(!1), vh = !0
            }), u("compositionend", ".js-similar-issues-search", () => {
                vh = !1, wh()
            });
            let Th = !1;

            function kh(e) {
                const t = document.importNode(e.content, !0),
                    n = v(document, "#js-flash-container");
                for (const s of n.children) n.removeChild(s);
                n.appendChild(t)
            }

            function Mh() {
                for (const e of document.querySelectorAll(".js-selected-check-run")) e.remove();
                v(document, ".js-zen-blankslate").hidden = !1, Th = !0
            }
            j(".js-check-suite-rerequest-form", async function(e, t) {
                d(e, "details").removeAttribute("open");
                const n = document.querySelector("#js-selected-check-run");
                if (null !== n) {
                    const t = "true" === v(e, "input[name=only_failed_check_runs]", HTMLInputElement).value,
                        s = "true" === p(n, "data-failed");
                    t && !s || Mh()
                }
                try {
                    await t.text(), kh(v(document, "#js-check-suite-rerequest-form-success", HTMLTemplateElement))
                } catch (s) {
                    throw kh(v(document, "#js-check-suite-rerequest-form-error", HTMLTemplateElement)), s
                }
            }), j(".js-check-run-rerequest-form", async function(e, t) {
                Th = !0, v(document, "#js-selected-check-run").contains(e) && Mh();
                try {
                    await t.text(), kh(v(e, ".js-check-run-rerequest-form-success", HTMLTemplateElement))
                } catch (n) {
                    throw kh(v(e, ".js-check-run-rerequest-form-error", HTMLTemplateElement)), n
                }
            }), r(".js-latest-run-link", {
                constructor: HTMLElement,
                add(e) {
                    Th && e.click()
                }
            }), u("click", ".js-timeout-flash-close", function(e) {
                d(e.target, ".js-interactive-component-timeout").hidden = !0
            }), u("click", ".js-interactive-component-button", function(e) {
                const t = e.target;
                if (t instanceof HTMLButtonElement) {
                    const e = t.querySelector(".js-loading-spinner");
                    e && (e.hidden = !1)
                }
            }), j(".js-interactive-component-form", async function(e, t) {
                const n = v(e, ".js-interactive-component-timeout"),
                    s = d(e, ".js-component-container");
                if (n) {
                    n.hidden = !0;
                    const t = b(s, ".js-interactive-component-button", HTMLButtonElement);
                    for (const e of t) e.disabled = !0;
                    const o = parseInt(p(e, "data-timeout"));
                    setTimeout(() => {
                        if (n) {
                            n.hidden = !1;
                            const e = b(s, ".js-interactive-component-button[disabled]", HTMLButtonElement);
                            for (const t of e) {
                                t.disabled = !1;
                                const e = t.querySelector(".loading-spinner");
                                e && (e.hidden = !0)
                            }
                        }
                    }, o)
                }
                await t.text()
            }), u("click", ["form button:not([type])", "form button[type=submit]", "form input[type=submit]"].join(", "), function(e) {
                const t = e.currentTarget;
                if (!(t instanceof HTMLButtonElement || t instanceof HTMLInputElement)) throw new Error("invariant: app/assets/modules/github/remote.js:161");
                t.form && !e.defaultPrevented && rt(t)
            }), j("form[data-remote]", function(e, t, n) {
                "json" === e.getAttribute("data-type") && n.headers.set("Accept", "application/json"), L(e, "deprecatedAjaxSend", {
                    request: n
                }), t.text().catch(e => {
                    if (e.response) return e.response;
                    throw e
                }).then(t => {
                    t.status < 300 ? L(e, "deprecatedAjaxSuccess") : L(e, "deprecatedAjaxError", {
                        error: t.statusText,
                        status: t.status,
                        text: t.text
                    })
                }, t => {
                    L(e, "deprecatedAjaxError", {
                        error: t.message,
                        status: 0,
                        text: null
                    })
                }).then(() => {
                    L(e, "deprecatedAjaxComplete")
                })
            }), u("deprecatedAjaxComplete", "form", function({
                currentTarget: e
            }) {
                if (!(e instanceof HTMLFormElement)) throw new Error("invariant: app/assets/modules/github/remote.js:173");
                const t = it(e);
                t && t.remove()
            }), P(e => {
                const t = it(e);
                t && t.remove()
            }), at(F), window.v = "1"
        }
    }
});
//# sourceMappingURL=github-bootstrap-3d6621d2.js.map