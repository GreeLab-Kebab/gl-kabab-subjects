! function(e) {
  function t(i) {
    if (n[i]) return n[i].exports;
    var r = n[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
  }
  var n = {};
  t.m = e, t.c = n, t.d = function(e, n, i) {
    t.o(e, n) || Object.defineProperty(e, n, {
      configurable: !1,
      enumerable: !0,
      get: i
    })
  }, t.n = function(e) {
    var n = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "", t(t.s = 316)
}([function(e, t, n) {
  "use strict";
  if (STR.Tag) console.log("SHARETHROUGH'S TAG.JS IS ALREADY DEFINED ON PAGE");
  else {
    STR.Tag = STR.Tag || {}, STR.Tag.AppConfig = {
      appnexus_callback_function: "STRAppNexusCallback",
      appnexus_js: "//sharethrough.adnxs.com/getuidp",
      bakery_non_cdn_url: "//platform.sharethrough.com",
      bakery_url: "//platform-cdn.sharethrough.com",
      blue_kai_callback_function: "STRBKCallback",
      blue_kai_js: "//tags.bluekai.com/site/20087",
      butler_url: "//btlr.sharethrough.com/v4",
      clickout_host: "//clickout.sharethrough.com",
      clientjs_url: "//native.sharethrough.com",
      criteo_callback_function: "STRCriteoCallback",
      criteo_js: "//gum.criteo.com/sync",
      adserver_url: "//ad-faker.sharethrough.com/v4",
      gdpr_applies: !1,
      google_ad_test_url: "//ad.doubleclick.net/ad/N8609.160770.SHARETHROUGH/B7516981.3;sz=1x1;ord=[timestamp]?",
      mediation_url: "//platform-cdn.sharethrough.com/api/external/v1/placements",
      serving_ad_sys_test_url: "//bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=7020267&PluID=0&ord=[timestamp]&rtu=-1",
      sharethrough_ad_test_url: "//native.sharethrough.com/assets/pixel.gif",
      tag_version: "777-c5d51187",
      tracking_host: "//b.sharethrough.com",
      ttd_callback: "STRTradeDeskCallback",
      ttd_js: "//match.adsrvr.org/track/rid?v=1.0.0&ttd_pid=sharethrough"
    };
    var i = STR.Tag.AppConfig,
      r = i.butler_url,
      a = i.mediation_url,
      o = i.clientjs_url,
      s = i.bakery_url,
      l = i.tracking_host,
      c = i.clickout_host,
      u = i.tag_version,
      d = i.gdpr_applies;
    STR.Tag.AdserverUrl = r, STR.Tag.MediationUrl = a, STR.Tag.ClientJsUrl = o, STR.Tag.BakeryUrl = s, STR.Tag.TrackingHost = l, STR.Tag.ClickoutHost = c, STR.Tag.GdprApplies = d, STR.Tag.Version = u, STR.Tag.placements = STR.Tag.placements || {}, STR.Tag.templateStores = STR.Tag.templateStores = {}
  }
  e.exports = STR.Tag
}, function(e, t, n) {
  var i;
  n(123), n(0), null == (i = STR.Tag).Helpers && (i.Helpers = {})
}, function(e, t) {
  var n = e.exports = {
    version: "2.4.0"
  };
  "number" == typeof __e && (__e = n)
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0, t.default = function(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var i = n(112),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i);
  t.default = function() {
    function e(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, r.default)(e, i.key, i)
      }
    }
    return function(t, n, i) {
      return n && e(t.prototype, n), i && e(t, i), t
    }
  }()
}, function(e, t, n) {
  var i = n(37)("wks"),
    r = n(25),
    a = n(6).Symbol,
    o = "function" == typeof a;
  (e.exports = function(e) {
    return i[e] || (i[e] = o && a[e] || (o ? a : r)("Symbol." + e))
  }).store = i
}, function(e, t) {
  var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
  "number" == typeof __g && (__g = n)
}, function(e, t, n) {
  var i = n(11),
    r = n(61),
    a = n(40),
    o = Object.defineProperty;
  t.f = n(8) ? Object.defineProperty : function(e, t, n) {
    if (i(e), t = a(t, !0), i(n), r) try {
      return o(e, t, n)
    } catch (e) {}
    if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
    return "value" in n && (e[t] = n.value), e
  }
}, function(e, t, n) {
  e.exports = !n(16)(function() {
    return 7 != Object.defineProperty({}, "a", {
      get: function() {
        return 7
      }
    }).a
  })
}, function(e, t, n) {
  var i = n(72),
    r = n(33);
  e.exports = function(e) {
    return i(r(e))
  }
}, function(e, t) {
  var n = {}.hasOwnProperty;
  e.exports = function(e, t) {
    return n.call(e, t)
  }
}, function(e, t, n) {
  var i = n(15);
  e.exports = function(e) {
    if (!i(e)) throw TypeError(e + " is not an object!");
    return e
  }
}, function(e, t, n) {
  var i = n(7),
    r = n(21);
  e.exports = n(8) ? function(e, t, n) {
    return i.f(e, t, r(1, n))
  } : function(e, t, n) {
    return e[t] = n, e
  }
}, function(e, t, n) {
  var i;
  n(0), null == (i = STR.Tag).Views && (i.Views = {})
}, function(e, t, n) {
  var i = n(6),
    r = n(2),
    a = n(26),
    o = n(12),
    s = function(e, t, n) {
      var l, c, u, d = e & s.F,
        p = e & s.G,
        h = e & s.S,
        f = e & s.P,
        m = e & s.B,
        g = e & s.W,
        v = p ? r : r[t] || (r[t] = {}),
        y = v.prototype,
        b = p ? i : h ? i[t] : (i[t] || {}).prototype;
      p && (n = t);
      for (l in n)(c = !d && b && void 0 !== b[l]) && l in v || (u = c ? b[l] : n[l], v[l] = p && "function" != typeof b[l] ? n[l] : m && c ? a(u, i) : g && b[l] == u ? function(e) {
        var t = function(t, n, i) {
          if (this instanceof e) {
            switch (arguments.length) {
              case 0:
                return new e;
              case 1:
                return new e(t);
              case 2:
                return new e(t, n)
            }
            return new e(t, n, i)
          }
          return e.apply(this, arguments)
        };
        return t.prototype = e.prototype, t
      }(u) : f && "function" == typeof u ? a(Function.call, u) : u, f && ((v.virtual || (v.virtual = {}))[l] = u, e & s.R && y && !y[l] && o(y, l, u)))
    };
  s.F = 1, s.G = 2, s.S = 4, s.P = 8, s.B = 16, s.W = 32, s.U = 64, s.R = 128, e.exports = s
}, function(e, t) {
  e.exports = function(e) {
    return "object" == typeof e ? null !== e : "function" == typeof e
  }
}, function(e, t) {
  e.exports = function(e) {
    try {
      return !!e()
    } catch (e) {
      return !0
    }
  }
}, function(e, t, n) {
  "use strict";
  var i = {
    replaceCacheBusterParam: function(e) {
      return e = e.replace(/\[timestamp\]/g, (new Date).getTime()), e.replace(/%%/g, "%25%25")
    },
    isHttps: function() {
      return "https:" === window.location.protocol
    },
    windowLocationOrigin: function() {
      return window.location.origin
    },
    referrerParam: function(e, t) {
      var n = void 0;
      return n = e.match(/\?/) ? "&" : "?", n += "strref=" + encodeURIComponent(this.windowLocationOrigin())
    },
    isSite: function(e) {
      var t = window.location.hostname.match(e);
      return t && t.length > 0
    },
    queryStringBuilder: function(e) {
      var t = [];
      for (var n in e) {
        var i = e[n];
        t.push(n + "=" + i)
      }
      return t.join("&")
    },
    getLocationProtocol: function() {
      return window.location.protocol
    },
    getValidLocationProtocol: function() {
      var e = i.getLocationProtocol();
      return -1 == e.indexOf("http") ? "http:" : e
    }
  };
  e.exports = i
}, function(e, t) {
  e.exports = {}
}, function(e, t, n) {
  var i = n(63),
    r = n(38);
  e.exports = Object.keys || function(e) {
    return i(e, r)
  }
}, function(e, t, n) {
  e.exports = {
    default: n(161),
    __esModule: !0
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
  n(0), n(1), STR.Vendor.$, STR.Tag.Helpers.HtmlUtility = {
    createHTMLElFromString: function(e) {
      var t;
      return t = document.createElement("div"), t.innerHTML = e.trim(), this.filterNodes(t)
    },
    filterNodes: function(e) {
      var t, n, i;
      for (n = document.createNodeIterator(e, NodeFilter.SHOW_ALL, function(e) {
          return NodeFilter.FILTER_ACCEPT
        }, !1), i = []; t = n.nextNode();) this.validNode(t) ? "SCRIPT" === t.tagName && (i.push(t), t.remove()) : t.remove();
      return [e.firstChild, i]
    },
    validNode: function(e) {
      return 1 === e.nodeType || 3 === e.nodeType
    },
    decodeString: function(e) {
      return e && (e.indexOf("<") > -1 && e.indexOf(">") > -1 || (e = STR.Vendor.$("<div/>").html(e).text())), e
    },
    getParameterByName: function(e) {
      var t, n;
      return e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), t = new RegExp("[\\?&]" + e + "=([^&#]*)"), n = t.exec(this.queryString()), n = null !== n && "false" !== n && ("true" === decodeURIComponent(n[1]).replace(/\+/g, " ") || "false" !== decodeURIComponent(n[1]).replace(/\+/g, " ") && "0" !== decodeURIComponent(n[1]).replace(/\+/g, " ") && decodeURIComponent(n[1]).replace(/\+/g, " "))
    },
    queryString: function() {
      return location.search
    },
    previewMediation: function() {
      return this.getParameterByName("str_preview_mediation")
    },
    selectThirdParty: function() {
      return this.getParameterByName("str_select_third_party")
    },
    forceFeaturedContent: function() {
      return this.getParameterByName("str_force_featured_content")
    },
    getDomPlacementIndex: function(e) {
      var t, n;
      return t = e.attr("data-str-placement-index"), t || (n = e.find("[data-str-placement-index]"), t = n.attr("data-str-placement-index")), parseInt(t)
    },
    getCustomAttributeParams: function() {
      var e, t, n, i;
      for (n = {}, e = "cattr_", i = /([^&=]+)=?([^&]*)/g; t = i.exec(this.queryString().substring(1));) t[1].startsWith(e) && (n[decodeURIComponent(t[1]).replace(/\+/g, " ")] = decodeURIComponent(t[2]).replace(/\+/g, " "));
      return n
    },
    generateSTRDiv: function(e) {
      return STR.Vendor.$("<div>", {
        "data-str-native-key": e.placementKey,
        "data-str-placement-index": e.getDomIndexAndIntialize()
      })
    },
    isInIframe: function(e) {
      try {
        return e.self !== e.top
      } catch (e) {
        return e, !0
      }
    }
  }, e.exports = STR.Tag.Helpers.HtmlUtility
}, function(e, t, n) {
  var i;
  n(0), null == (i = STR.Tag).Models && (i.Models = {})
}, function(e, t, n) {
  var i, r;
  ! function(t, n) {
    "object" == typeof e && "object" == typeof e.exports ? e.exports = t.document ? n(t, !0) : function(e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return n(e)
    } : n(t)
  }("undefined" != typeof window ? window : this, function(n, a) {
    function o(e) {
      var t = !!e && "length" in e && e.length,
        n = le.type(e);
      return "function" !== n && !le.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function s(e, t, n) {
      if (le.isFunction(t)) return le.grep(e, function(e, i) {
        return !!t.call(e, i, e) !== n
      });
      if (t.nodeType) return le.grep(e, function(e) {
        return e === t !== n
      });
      if ("string" == typeof t) {
        if (ye.test(t)) return le.filter(t, e, n);
        t = le.filter(t, e)
      }
      return le.grep(e, function(e) {
        return ie.call(t, e) > -1 !== n
      })
    }

    function l(e, t) {
      for (;
        (e = e[t]) && 1 !== e.nodeType;);
      return e
    }

    function c(e) {
      var t = {};
      return le.each(e.match(Se) || [], function(e, n) {
        t[n] = !0
      }), t
    }

    function u() {
      Z.removeEventListener("DOMContentLoaded", u), n.removeEventListener("load", u), le.ready()
    }

    function d() {
      this.expando = le.expando + d.uid++
    }

    function p(e, t, n) {
      var i;
      if (void 0 === n && 1 === e.nodeType)
        if (i = "data-" + t.replace(Ae, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
          try {
            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Pe.test(n) ? le.parseJSON(n) : n)
          } catch (e) {}
          Ee.set(e, t, n)
        } else n = void 0;
      return n
    }

    function h(e, t, n, i) {
      var r, a = 1,
        o = 20,
        s = i ? function() {
          return i.cur()
        } : function() {
          return le.css(e, t, "")
        },
        l = s(),
        c = n && n[3] || (le.cssNumber[t] ? "" : "px"),
        u = (le.cssNumber[t] || "px" !== c && +l) && Ie.exec(le.css(e, t));
      if (u && u[3] !== c) {
        c = c || u[3], n = n || [], u = +l || 1;
        do {
          a = a || ".5", u /= a, le.style(e, t, u + c)
        } while (a !== (a = s() / l) && 1 !== a && --o)
      }
      return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = r)), r
    }

    function f(e, t) {
      var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
      return void 0 === t || t && le.nodeName(e, t) ? le.merge([e], n) : n
    }

    function m(e, t) {
      for (var n = 0, i = e.length; n < i; n++) Re.set(e[n], "globalEval", !t || Re.get(t[n], "globalEval"))
    }

    function g(e, t, n, i, r) {
      for (var a, o, s, l, c, u, d = t.createDocumentFragment(), p = [], h = 0, g = e.length; h < g; h++)
        if ((a = e[h]) || 0 === a)
          if ("object" === le.type(a)) le.merge(p, a.nodeType ? [a] : a);
          else if (Ue.test(a)) {
        for (o = o || d.appendChild(t.createElement("div")), s = (Me.exec(a) || ["", ""])[1].toLowerCase(), l = Be[s] || Be._default, o.innerHTML = l[1] + le.htmlPrefilter(a) + l[2], u = l[0]; u--;) o = o.lastChild;
        le.merge(p, o.childNodes), o = d.firstChild, o.textContent = ""
      } else p.push(t.createTextNode(a));
      for (d.textContent = "", h = 0; a = p[h++];)
        if (i && le.inArray(a, i) > -1) r && r.push(a);
        else if (c = le.contains(a.ownerDocument, a), o = f(d.appendChild(a), "script"), c && m(o), n)
        for (u = 0; a = o[u++];) Ne.test(a.type || "") && n.push(a);
      return d
    }

    function v() {
      return !0
    }

    function y() {
      return !1
    }

    function b() {
      try {
        return Z.activeElement
      } catch (e) {}
    }

    function T(e, t, n, i, r, a) {
      var o, s;
      if ("object" == typeof t) {
        "string" != typeof n && (i = i || n, n = void 0);
        for (s in t) T(e, s, n, i, t[s], a);
        return e
      }
      if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = y;
      else if (!r) return e;
      return 1 === a && (o = r, r = function(e) {
        return le().off(e), o.apply(this, arguments)
      }, r.guid = o.guid || (o.guid = le.guid++)), e.each(function() {
        le.event.add(this, t, r, i, n)
      })
    }

    function w(e, t) {
      return le.nodeName(e, "table") && le.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function k(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function S(e) {
      var t = ze.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function x(e, t) {
      var n, i, r, a, o, s, l, c;
      if (1 === t.nodeType) {
        if (Re.hasData(e) && (a = Re.access(e), o = Re.set(t, a), c = a.events)) {
          delete o.handle, o.events = {};
          for (r in c)
            for (n = 0, i = c[r].length; n < i; n++) le.event.add(t, r, c[r][n])
        }
        Ee.hasData(e) && (s = Ee.access(e), l = le.extend({}, s), Ee.set(t, l))
      }
    }

    function C(e, t) {
      var n = t.nodeName.toLowerCase();
      "input" === n && Ve.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function _(e, t, n, i) {
      t = te.apply([], t);
      var r, a, o, s, l, c, u = 0,
        d = e.length,
        p = d - 1,
        h = t[0],
        m = le.isFunction(h);
      if (m || d > 1 && "string" == typeof h && !se.checkClone && qe.test(h)) return e.each(function(r) {
        var a = e.eq(r);
        m && (t[0] = h.call(this, r, a.html())), _(a, t, n, i)
      });
      if (d && (r = g(t, e[0].ownerDocument, !1, e, i), a = r.firstChild, 1 === r.childNodes.length && (r = a), a || i)) {
        for (o = le.map(f(r, "script"), k), s = o.length; u < d; u++) l = r, u !== p && (l = le.clone(l, !0, !0), s && le.merge(o, f(l, "script"))), n.call(e[u], l, u);
        if (s)
          for (c = o[o.length - 1].ownerDocument, le.map(o, S), u = 0; u < s; u++) l = o[u], Ne.test(l.type || "") && !Re.access(l, "globalEval") && le.contains(c, l) && (l.src ? le._evalUrl && le._evalUrl(l.src) : le.globalEval(l.textContent.replace(Ke, "")))
      }
      return e
    }

    function R(e, t, n) {
      for (var i, r = t ? le.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || le.cleanData(f(i)), i.parentNode && (n && le.contains(i.ownerDocument, i) && m(f(i, "script")), i.parentNode.removeChild(i));
      return e
    }

    function E(e, t) {
      var n = le(t.createElement(e)).appendTo(t.body),
        i = le.css(n[0], "display");
      return n.detach(), i
    }

    function P(e) {
      var t = Z,
        n = Ge[e];
      return n || (n = E(e, t), "none" !== n && n || (Ye = (Ye || le("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = Ye[0].contentDocument, t.write(), t.close(), n = E(e, t), Ye.detach()), Ge[e] = n), n
    }

    function A(e, t, n) {
      var i, r, a, o, s = e.style;
      return n = n || Qe(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, "" !== o && void 0 !== o || le.contains(e.ownerDocument, e) || (o = le.style(e, t)), n && !se.pixelMarginRight() && Xe.test(o) && Je.test(t) && (i = s.width, r = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = i, s.minWidth = r, s.maxWidth = a), void 0 !== o ? o + "" : o
    }

    function H(e, t) {
      return {
        get: function() {
          return e() ? void delete this.get : (this.get = t).apply(this, arguments)
        }
      }
    }

    function I(e) {
      if (e in at) return e;
      for (var t = e[0].toUpperCase() + e.slice(1), n = rt.length; n--;)
        if ((e = rt[n] + t) in at) return e
    }

    function D(e, t, n) {
      var i = Ie.exec(t);
      return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function O(e, t, n, i, r) {
      for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; a < 4; a += 2) "margin" === n && (o += le.css(e, n + De[a], !0, r)), i ? ("content" === n && (o -= le.css(e, "padding" + De[a], !0, r)), "margin" !== n && (o -= le.css(e, "border" + De[a] + "Width", !0, r))) : (o += le.css(e, "padding" + De[a], !0, r), "padding" !== n && (o += le.css(e, "border" + De[a] + "Width", !0, r)));
      return o
    }

    function V(e, t, n) {
      var i = !0,
        r = "width" === t ? e.offsetWidth : e.offsetHeight,
        a = Qe(e),
        o = "border-box" === le.css(e, "boxSizing", !1, a);
      if (r <= 0 || null == r) {
        if (r = A(e, t, a), (r < 0 || null == r) && (r = e.style[t]), Xe.test(r)) return r;
        i = o && (se.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
      }
      return r + O(e, t, n || (o ? "border" : "content"), i, a) + "px"
    }

    function M(e, t) {
      for (var n, i, r, a = [], o = 0, s = e.length; o < s; o++) i = e[o], i.style && (a[o] = Re.get(i, "olddisplay"), n = i.style.display, t ? (a[o] || "none" !== n || (i.style.display = ""), "" === i.style.display && Oe(i) && (a[o] = Re.access(i, "olddisplay", P(i.nodeName)))) : (r = Oe(i), "none" === n && r || Re.set(i, "olddisplay", r ? n : le.css(i, "display"))));
      for (o = 0; o < s; o++) i = e[o], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[o] || "" : "none"));
      return e
    }

    function N(e, t, n, i, r) {
      return new N.prototype.init(e, t, n, i, r)
    }

    function B() {
      return n.setTimeout(function() {
        ot = void 0
      }), ot = le.now()
    }

    function U(e, t) {
      var n, i = 0,
        r = {
          height: e
        };
      for (t = t ? 1 : 0; i < 4; i += 2 - t) n = De[i], r["margin" + n] = r["padding" + n] = e;
      return t && (r.opacity = r.width = e), r
    }

    function L(e, t, n) {
      for (var i, r = ($.tweeners[t] || []).concat($.tweeners["*"]), a = 0, o = r.length; a < o; a++)
        if (i = r[a].call(n, t, e)) return i
    }

    function F(e, t, n) {
      var i, r, a, o, s, l, c, u = this,
        d = {},
        p = e.style,
        h = e.nodeType && Oe(e),
        f = Re.get(e, "fxshow");
      n.queue || (s = le._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
        s.unqueued || l()
      }), s.unqueued++, u.always(function() {
        u.always(function() {
          s.unqueued--, le.queue(e, "fx").length || s.empty.fire()
        })
      })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], c = le.css(e, "display"), "inline" === ("none" === c ? Re.get(e, "olddisplay") || P(e.nodeName) : c) && "none" === le.css(e, "float") && (p.display = "inline-block")), n.overflow && (p.overflow = "hidden", u.always(function() {
        p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
      }));
      for (i in t)
        if (r = t[i], lt.exec(r)) {
          if (delete t[i], a = a || "toggle" === r, r === (h ? "hide" : "show")) {
            if ("show" !== r || !f || void 0 === f[i]) continue;
            h = !0
          }
          d[i] = f && f[i] || le.style(e, i)
        } else c = void 0;
      if (le.isEmptyObject(d)) "inline" === ("none" === c ? P(e.nodeName) : c) && (p.display = c);
      else {
        f ? "hidden" in f && (h = f.hidden) : f = Re.access(e, "fxshow", {}), a && (f.hidden = !h), h ? le(e).show() : u.done(function() {
          le(e).hide()
        }), u.done(function() {
          var t;
          Re.remove(e, "fxshow");
          for (t in d) le.style(e, t, d[t])
        });
        for (i in d) o = L(h ? f[i] : 0, i, u), i in f || (f[i] = o.start, h && (o.end = o.start, o.start = "width" === i || "height" === i ? 1 : 0))
      }
    }

    function j(e, t) {
      var n, i, r, a, o;
      for (n in e)
        if (i = le.camelCase(n), r = t[i], a = e[n], le.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (o = le.cssHooks[i]) && "expand" in o) {
          a = o.expand(a), delete e[i];
          for (n in a) n in e || (e[n] = a[n], t[n] = r)
        } else t[i] = r
    }

    function $(e, t, n) {
      var i, r, a = 0,
        o = $.prefilters.length,
        s = le.Deferred().always(function() {
          delete l.elem
        }),
        l = function() {
          if (r) return !1;
          for (var t = ot || B(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, a = 1 - i, o = 0, l = c.tweens.length; o < l; o++) c.tweens[o].run(a);
          return s.notifyWith(e, [c, a, n]), a < 1 && l ? n : (s.resolveWith(e, [c]), !1)
        },
        c = s.promise({
          elem: e,
          props: le.extend({}, t),
          opts: le.extend(!0, {
            specialEasing: {},
            easing: le.easing._default
          }, n),
          originalProperties: t,
          originalOptions: n,
          startTime: ot || B(),
          duration: n.duration,
          tweens: [],
          createTween: function(t, n) {
            var i = le.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
            return c.tweens.push(i), i
          },
          stop: function(t) {
            var n = 0,
              i = t ? c.tweens.length : 0;
            if (r) return this;
            for (r = !0; n < i; n++) c.tweens[n].run(1);
            return t ? (s.notifyWith(e, [c, 1, 0]), s.resolveWith(e, [c, t])) : s.rejectWith(e, [c, t]), this
          }
        }),
        u = c.props;
      for (j(u, c.opts.specialEasing); a < o; a++)
        if (i = $.prefilters[a].call(c, e, u, c.opts)) return le.isFunction(i.stop) && (le._queueHooks(c.elem, c.opts.queue).stop = le.proxy(i.stop, i)), i;
      return le.map(u, L, c), le.isFunction(c.opts.start) && c.opts.start.call(e, c), le.fx.timer(le.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    function W(e) {
      return e.getAttribute && e.getAttribute("class") || ""
    }

    function q(e) {
      return function(t, n) {
        "string" != typeof t && (n = t, t = "*");
        var i, r = 0,
          a = t.toLowerCase().match(Se) || [];
        if (le.isFunction(n))
          for (; i = a[r++];) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
      }
    }

    function z(e, t, n, i) {
      function r(s) {
        var l;
        return a[s] = !0, le.each(e[s] || [], function(e, s) {
          var c = s(t, n, i);
          return "string" != typeof c || o || a[c] ? o ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
        }), l
      }
      var a = {},
        o = e === Et;
      return r(t.dataTypes[0]) || !a["*"] && r("*")
    }

    function K(e, t) {
      var n, i, r = le.ajaxSettings.flatOptions || {};
      for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
      return i && le.extend(!0, e, i), e
    }

    function Y(e, t, n) {
      for (var i, r, a, o, s = e.contents, l = e.dataTypes;
        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
      if (i)
        for (r in s)
          if (s[r] && s[r].test(i)) {
            l.unshift(r);
            break
          } if (l[0] in n) a = l[0];
      else {
        for (r in n) {
          if (!l[0] || e.converters[r + " " + l[0]]) {
            a = r;
            break
          }
          o || (o = r)
        }
        a = a || o
      }
      if (a) return a !== l[0] && l.unshift(a), n[a]
    }

    function G(e, t, n, i) {
      var r, a, o, s, l, c = {},
        u = e.dataTypes.slice();
      if (u[1])
        for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
      for (a = u.shift(); a;)
        if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
          if ("*" === a) a = l;
          else if ("*" !== l && l !== a) {
        if (!(o = c[l + " " + a] || c["* " + a]))
          for (r in c)
            if (s = r.split(" "), s[1] === a && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
              !0 === o ? o = c[r] : !0 !== c[r] && (a = s[0], u.unshift(s[1]));
              break
            } if (!0 !== o)
          if (o && e.throws) t = o(t);
          else try {
            t = o(t)
          } catch (e) {
            return {
              state: "parsererror",
              error: o ? e : "No conversion from " + l + " to " + a
            }
          }
      }
      return {
        state: "success",
        data: t
      }
    }

    function J(e, t, n, i) {
      var r;
      if (le.isArray(t)) le.each(t, function(t, r) {
        n || It.test(e) ? i(e, r) : J(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i)
      });
      else if (n || "object" !== le.type(t)) i(e, t);
      else
        for (r in t) J(e + "[" + r + "]", t[r], n, i)
    }

    function X(e) {
      return le.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
    }
    var Q = [],
      Z = n.document,
      ee = Q.slice,
      te = Q.concat,
      ne = Q.push,
      ie = Q.indexOf,
      re = {},
      ae = re.toString,
      oe = re.hasOwnProperty,
      se = {},
      le = function(e, t) {
        return new le.fn.init(e, t)
      },
      ce = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ue = /^-ms-/,
      de = /-([\da-z])/gi,
      pe = function(e, t) {
        return t.toUpperCase()
      };
    le.fn = le.prototype = {
      jquery: "2.2.4",
      constructor: le,
      selector: "",
      length: 0,
      toArray: function() {
        return ee.call(this)
      },
      get: function(e) {
        return null != e ? e < 0 ? this[e + this.length] : this[e] : ee.call(this)
      },
      pushStack: function(e) {
        var t = le.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
      },
      each: function(e) {
        return le.each(this, e)
      },
      map: function(e) {
        return this.pushStack(le.map(this, function(t, n) {
          return e.call(t, n, t)
        }))
      },
      slice: function() {
        return this.pushStack(ee.apply(this, arguments))
      },
      first: function() {
        return this.eq(0)
      },
      last: function() {
        return this.eq(-1)
      },
      eq: function(e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
      },
      end: function() {
        return this.prevObject || this.constructor()
      },
      push: ne,
      sort: Q.sort,
      splice: Q.splice
    }, le.extend = le.fn.extend = function() {
      var e, t, n, i, r, a, o = arguments[0] || {},
        s = 1,
        l = arguments.length,
        c = !1;
      for ("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || le.isFunction(o) || (o = {}), s === l && (o = this, s--); s < l; s++)
        if (null != (e = arguments[s]))
          for (t in e) n = o[t], i = e[t], o !== i && (c && i && (le.isPlainObject(i) || (r = le.isArray(i))) ? (r ? (r = !1, a = n && le.isArray(n) ? n : []) : a = n && le.isPlainObject(n) ? n : {}, o[t] = le.extend(c, a, i)) : void 0 !== i && (o[t] = i));
      return o
    }, le.extend({
      expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function(e) {
        throw new Error(e)
      },
      noop: function() {},
      isFunction: function(e) {
        return "function" === le.type(e)
      },
      isArray: Array.isArray,
      isWindow: function(e) {
        return null != e && e === e.window
      },
      isNumeric: function(e) {
        var t = e && e.toString();
        return !le.isArray(e) && t - parseFloat(t) + 1 >= 0
      },
      isPlainObject: function(e) {
        var t;
        if ("object" !== le.type(e) || e.nodeType || le.isWindow(e)) return !1;
        if (e.constructor && !oe.call(e, "constructor") && !oe.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
        for (t in e);
        return void 0 === t || oe.call(e, t)
      },
      isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
      },
      type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? re[ae.call(e)] || "object" : typeof e
      },
      globalEval: function(e) {
        var t, n = eval;
        (e = le.trim(e)) && (1 === e.indexOf("use strict") ? (t = Z.createElement("script"), t.text = e, Z.head.appendChild(t).parentNode.removeChild(t)) : n(e))
      },
      camelCase: function(e) {
        return e.replace(ue, "ms-").replace(de, pe)
      },
      nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
      },
      each: function(e, t) {
        var n, i = 0;
        if (o(e))
          for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
        else
          for (i in e)
            if (!1 === t.call(e[i], i, e[i])) break;
        return e
      },
      trim: function(e) {
        return null == e ? "" : (e + "").replace(ce, "")
      },
      makeArray: function(e, t) {
        var n = t || [];
        return null != e && (o(Object(e)) ? le.merge(n, "string" == typeof e ? [e] : e) : ne.call(n, e)), n
      },
      inArray: function(e, t, n) {
        return null == t ? -1 : ie.call(t, e, n)
      },
      merge: function(e, t) {
        for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
        return e.length = r, e
      },
      grep: function(e, t, n) {
        for (var i = [], r = 0, a = e.length, o = !n; r < a; r++) !t(e[r], r) !== o && i.push(e[r]);
        return i
      },
      map: function(e, t, n) {
        var i, r, a = 0,
          s = [];
        if (o(e))
          for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
        else
          for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
        return te.apply([], s)
      },
      guid: 1,
      proxy: function(e, t) {
        var n, i, r;
        if ("string" == typeof t && (n = e[t], t = e, e = n), le.isFunction(e)) return i = ee.call(arguments, 2), r = function() {
          return e.apply(t || this, i.concat(ee.call(arguments)))
        }, r.guid = e.guid = e.guid || le.guid++, r
      },
      now: Date.now,
      support: se
    }), "function" == typeof Symbol && (le.fn[Symbol.iterator] = Q[Symbol.iterator]), le.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
      re["[object " + t + "]"] = t.toLowerCase()
    });
    var he = function(e) {
      function t(e, t, n, i) {
        var r, a, o, s, c, d, p, h, f = t && t.ownerDocument,
          m = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
        if (!i && ((t ? t.ownerDocument || t : B) !== A && P(t), t = t || A, I)) {
          if (11 !== m && (d = me.exec(e)))
            if (r = d[1]) {
              if (9 === m) {
                if (!(o = t.getElementById(r))) return n;
                if (o.id === r) return n.push(o), n
              } else if (f && (o = f.getElementById(r)) && M(t, o) && o.id === r) return n.push(o), n
            } else {
              if (d[2]) return J.apply(n, t.getElementsByTagName(e)), n;
              if ((r = d[3]) && b.getElementsByClassName && t.getElementsByClassName) return J.apply(n, t.getElementsByClassName(r)), n
            } if (b.qsa && !$[e + " "] && (!D || !D.test(e))) {
            if (1 !== m) f = t, h = e;
            else if ("object" !== t.nodeName.toLowerCase()) {
              for ((s = t.getAttribute("id")) ? s = s.replace(ve, "\\$&") : t.setAttribute("id", s = N), p = S(e), a = p.length, c = ue.test(s) ? "#" + s : "[id='" + s + "']"; a--;) p[a] = c + " " + u(p[a]);
              h = p.join(","), f = ge.test(e) && l(t.parentNode) || t
            }
            if (h) try {
              return J.apply(n, f.querySelectorAll(h)), n
            } catch (e) {} finally {
              s === N && t.removeAttribute("id")
            }
          }
        }
        return C(e.replace(ae, "$1"), t, n, i)
      }

      function n() {
        function e(n, i) {
          return t.push(n + " ") > T.cacheLength && delete e[t.shift()], e[n + " "] = i
        }
        var t = [];
        return e
      }

      function i(e) {
        return e[N] = !0, e
      }

      function r(e) {
        var t = A.createElement("div");
        try {
          return !!e(t)
        } catch (e) {
          return !1
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null
        }
      }

      function a(e, t) {
        for (var n = e.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = t
      }

      function o(e, t) {
        var n = t && e,
          i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || q) - (~e.sourceIndex || q);
        if (i) return i;
        if (n)
          for (; n = n.nextSibling;)
            if (n === t) return -1;
        return e ? 1 : -1
      }

      function s(e) {
        return i(function(t) {
          return t = +t, i(function(n, i) {
            for (var r, a = e([], n.length, t), o = a.length; o--;) n[r = a[o]] && (n[r] = !(i[r] = n[r]))
          })
        })
      }

      function l(e) {
        return e && void 0 !== e.getElementsByTagName && e
      }

      function c() {}

      function u(e) {
        for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
        return i
      }

      function d(e, t, n) {
        var i = t.dir,
          r = n && "parentNode" === i,
          a = L++;
        return t.first ? function(t, n, a) {
          for (; t = t[i];)
            if (1 === t.nodeType || r) return e(t, n, a)
        } : function(t, n, o) {
          var s, l, c, u = [U, a];
          if (o) {
            for (; t = t[i];)
              if ((1 === t.nodeType || r) && e(t, n, o)) return !0
          } else
            for (; t = t[i];)
              if (1 === t.nodeType || r) {
                if (c = t[N] || (t[N] = {}), l = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = l[i]) && s[0] === U && s[1] === a) return u[2] = s[2];
                if (l[i] = u, u[2] = e(t, n, o)) return !0
              }
        }
      }

      function p(e) {
        return e.length > 1 ? function(t, n, i) {
          for (var r = e.length; r--;)
            if (!e[r](t, n, i)) return !1;
          return !0
        } : e[0]
      }

      function h(e, n, i) {
        for (var r = 0, a = n.length; r < a; r++) t(e, n[r], i);
        return i
      }

      function f(e, t, n, i, r) {
        for (var a, o = [], s = 0, l = e.length, c = null != t; s < l; s++)(a = e[s]) && (n && !n(a, i, r) || (o.push(a), c && t.push(s)));
        return o
      }

      function m(e, t, n, r, a, o) {
        return r && !r[N] && (r = m(r)), a && !a[N] && (a = m(a, o)), i(function(i, o, s, l) {
          var c, u, d, p = [],
            m = [],
            g = o.length,
            v = i || h(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !i && t ? v : f(v, p, e, s, l),
            b = n ? a || (i ? e : g || r) ? [] : o : y;
          if (n && n(y, b, s, l), r)
            for (c = f(b, m), r(c, [], s, l), u = c.length; u--;)(d = c[u]) && (b[m[u]] = !(y[m[u]] = d));
          if (i) {
            if (a || e) {
              if (a) {
                for (c = [], u = b.length; u--;)(d = b[u]) && c.push(y[u] = d);
                a(null, b = [], c, l)
              }
              for (u = b.length; u--;)(d = b[u]) && (c = a ? Q(i, d) : p[u]) > -1 && (i[c] = !(o[c] = d))
            }
          } else b = f(b === o ? b.splice(g, b.length) : b), a ? a(null, o, b, l) : J.apply(o, b)
        })
      }

      function g(e) {
        for (var t, n, i, r = e.length, a = T.relative[e[0].type], o = a || T.relative[" "], s = a ? 1 : 0, l = d(function(e) {
            return e === t
          }, o, !0), c = d(function(e) {
            return Q(t, e) > -1
          }, o, !0), h = [function(e, n, i) {
            var r = !a && (i || n !== _) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
            return t = null, r
          }]; s < r; s++)
          if (n = T.relative[e[s].type]) h = [d(p(h), n)];
          else {
            if (n = T.filter[e[s].type].apply(null, e[s].matches), n[N]) {
              for (i = ++s; i < r && !T.relative[e[i].type]; i++);
              return m(s > 1 && p(h), s > 1 && u(e.slice(0, s - 1).concat({
                value: " " === e[s - 2].type ? "*" : ""
              })).replace(ae, "$1"), n, s < i && g(e.slice(s, i)), i < r && g(e = e.slice(i)), i < r && u(e))
            }
            h.push(n)
          } return p(h)
      }

      function v(e, n) {
        var r = n.length > 0,
          a = e.length > 0,
          o = function(i, o, s, l, c) {
            var u, d, p, h = 0,
              m = "0",
              g = i && [],
              v = [],
              y = _,
              b = i || a && T.find.TAG("*", c),
              w = U += null == y ? 1 : Math.random() || .1,
              k = b.length;
            for (c && (_ = o === A || o || c); m !== k && null != (u = b[m]); m++) {
              if (a && u) {
                for (d = 0, o || u.ownerDocument === A || (P(u), s = !I); p = e[d++];)
                  if (p(u, o || A, s)) {
                    l.push(u);
                    break
                  } c && (U = w)
              }
              r && ((u = !p && u) && h--, i && g.push(u))
            }
            if (h += m, r && m !== h) {
              for (d = 0; p = n[d++];) p(g, v, o, s);
              if (i) {
                if (h > 0)
                  for (; m--;) g[m] || v[m] || (v[m] = Y.call(l));
                v = f(v)
              }
              J.apply(l, v), c && !i && v.length > 0 && h + n.length > 1 && t.uniqueSort(l)
            }
            return c && (U = w, _ = y), g
          };
        return r ? i(o) : o
      }
      var y, b, T, w, k, S, x, C, _, R, E, P, A, H, I, D, O, V, M, N = "sizzle" + 1 * new Date,
        B = e.document,
        U = 0,
        L = 0,
        F = n(),
        j = n(),
        $ = n(),
        W = function(e, t) {
          return e === t && (E = !0), 0
        },
        q = 1 << 31,
        z = {}.hasOwnProperty,
        K = [],
        Y = K.pop,
        G = K.push,
        J = K.push,
        X = K.slice,
        Q = function(e, t) {
          for (var n = 0, i = e.length; n < i; n++)
            if (e[n] === t) return n;
          return -1
        },
        Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ee = "[\\x20\\t\\r\\n\\f]",
        te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
        ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
        re = new RegExp(ee + "+", "g"),
        ae = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
        oe = new RegExp("^" + ee + "*," + ee + "*"),
        se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
        le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
        ce = new RegExp(ie),
        ue = new RegExp("^" + te + "$"),
        de = {
          ID: new RegExp("^#(" + te + ")"),
          CLASS: new RegExp("^\\.(" + te + ")"),
          TAG: new RegExp("^(" + te + "|[*])"),
          ATTR: new RegExp("^" + ne),
          PSEUDO: new RegExp("^" + ie),
          CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
          bool: new RegExp("^(?:" + Z + ")$", "i"),
          needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        },
        pe = /^(?:input|select|textarea|button)$/i,
        he = /^h\d$/i,
        fe = /^[^{]+\{\s*\[native \w/,
        me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ge = /[+~]/,
        ve = /'|\\/g,
        ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
        be = function(e, t, n) {
          var i = "0x" + t - 65536;
          return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        },
        Te = function() {
          P()
        };
      try {
        J.apply(K = X.call(B.childNodes), B.childNodes), K[B.childNodes.length].nodeType
      } catch (e) {
        J = {
          apply: K.length ? function(e, t) {
            G.apply(e, X.call(t))
          } : function(e, t) {
            for (var n = e.length, i = 0; e[n++] = t[i++];);
            e.length = n - 1
          }
        }
      }
      b = t.support = {}, k = t.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, P = t.setDocument = function(e) {
        var t, n, i = e ? e.ownerDocument || e : B;
        return i !== A && 9 === i.nodeType && i.documentElement ? (A = i, H = A.documentElement, I = !k(A), (n = A.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)), b.attributes = r(function(e) {
          return e.className = "i", !e.getAttribute("className")
        }), b.getElementsByTagName = r(function(e) {
          return e.appendChild(A.createComment("")), !e.getElementsByTagName("*").length
        }), b.getElementsByClassName = fe.test(A.getElementsByClassName), b.getById = r(function(e) {
          return H.appendChild(e).id = N, !A.getElementsByName || !A.getElementsByName(N).length
        }), b.getById ? (T.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && I) {
            var n = t.getElementById(e);
            return n ? [n] : []
          }
        }, T.filter.ID = function(e) {
          var t = e.replace(ye, be);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }) : (delete T.find.ID, T.filter.ID = function(e) {
          var t = e.replace(ye, be);
          return function(e) {
            var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return n && n.value === t
          }
        }), T.find.TAG = b.getElementsByTagName ? function(e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0
        } : function(e, t) {
          var n, i = [],
            r = 0,
            a = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; n = a[r++];) 1 === n.nodeType && i.push(n);
            return i
          }
          return a
        }, T.find.CLASS = b.getElementsByClassName && function(e, t) {
          if (void 0 !== t.getElementsByClassName && I) return t.getElementsByClassName(e)
        }, O = [], D = [], (b.qsa = fe.test(A.querySelectorAll)) && (r(function(e) {
          H.appendChild(e).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || D.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + N + "-]").length || D.push("~="), e.querySelectorAll(":checked").length || D.push(":checked"), e.querySelectorAll("a#" + N + "+*").length || D.push(".#.+[+~]")
        }), r(function(e) {
          var t = A.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && D.push("name" + ee + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), D.push(",.*:")
        })), (b.matchesSelector = fe.test(V = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && r(function(e) {
          b.disconnectedMatch = V.call(e, "div"), V.call(e, "[s!='']:x"), O.push("!=", ie)
        }), D = D.length && new RegExp(D.join("|")), O = O.length && new RegExp(O.join("|")), t = fe.test(H.compareDocumentPosition), M = t || fe.test(H.contains) ? function(e, t) {
          var n = 9 === e.nodeType ? e.documentElement : e,
            i = t && t.parentNode;
          return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, W = t ? function(e, t) {
          if (e === t) return E = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === A || e.ownerDocument === B && M(B, e) ? -1 : t === A || t.ownerDocument === B && M(B, t) ? 1 : R ? Q(R, e) - Q(R, t) : 0 : 4 & n ? -1 : 1)
        } : function(e, t) {
          if (e === t) return E = !0, 0;
          var n, i = 0,
            r = e.parentNode,
            a = t.parentNode,
            s = [e],
            l = [t];
          if (!r || !a) return e === A ? -1 : t === A ? 1 : r ? -1 : a ? 1 : R ? Q(R, e) - Q(R, t) : 0;
          if (r === a) return o(e, t);
          for (n = e; n = n.parentNode;) s.unshift(n);
          for (n = t; n = n.parentNode;) l.unshift(n);
          for (; s[i] === l[i];) i++;
          return i ? o(s[i], l[i]) : s[i] === B ? -1 : l[i] === B ? 1 : 0
        }, A) : A
      }, t.matches = function(e, n) {
        return t(e, null, null, n)
      }, t.matchesSelector = function(e, n) {
        if ((e.ownerDocument || e) !== A && P(e), n = n.replace(le, "='$1']"), b.matchesSelector && I && !$[n + " "] && (!O || !O.test(n)) && (!D || !D.test(n))) try {
          var i = V.call(e, n);
          if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
        } catch (e) {}
        return t(n, A, null, [e]).length > 0
      }, t.contains = function(e, t) {
        return (e.ownerDocument || e) !== A && P(e), M(e, t)
      }, t.attr = function(e, t) {
        (e.ownerDocument || e) !== A && P(e);
        var n = T.attrHandle[t.toLowerCase()],
          i = n && z.call(T.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
        return void 0 !== i ? i : b.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }, t.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, t.uniqueSort = function(e) {
        var t, n = [],
          i = 0,
          r = 0;
        if (E = !b.detectDuplicates, R = !b.sortStable && e.slice(0), e.sort(W), E) {
          for (; t = e[r++];) t === e[r] && (i = n.push(r));
          for (; i--;) e.splice(n[i], 1)
        }
        return R = null, e
      }, w = t.getText = function(e) {
        var t, n = "",
          i = 0,
          r = e.nodeType;
        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += w(e)
          } else if (3 === r || 4 === r) return e.nodeValue
        } else
          for (; t = e[i++];) n += w(t);
        return n
      }, T = t.selectors = {
        cacheLength: 50,
        createPseudo: i,
        match: de,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function(e) {
            return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, n = !e[6] && e[2];
            return de.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(ye, be).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = F[e + " "];
            return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && F(e, function(e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, n, i) {
            return function(r) {
              var a = t.attr(r, e);
              return null == a ? "!=" === n : !n || (a += "", "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (a === i || a.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function(e, t, n, i, r) {
            var a = "nth" !== e.slice(0, 3),
              o = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === i && 0 === r ? function(e) {
              return !!e.parentNode
            } : function(t, n, l) {
              var c, u, d, p, h, f, m = a !== o ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                y = !l && !s,
                b = !1;
              if (g) {
                if (a) {
                  for (; m;) {
                    for (p = t; p = p[m];)
                      if (s ? p.nodeName.toLowerCase() === v : 1 === p.nodeType) return !1;
                    f = m = "only" === e && !f && "nextSibling"
                  }
                  return !0
                }
                if (f = [o ? g.firstChild : g.lastChild], o && y) {
                  for (p = g, d = p[N] || (p[N] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], h = c[0] === U && c[1], b = h && c[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();)
                    if (1 === p.nodeType && ++b && p === t) {
                      u[e] = [U, h, b];
                      break
                    }
                } else if (y && (p = t, d = p[N] || (p[N] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), c = u[e] || [], h = c[0] === U && c[1], b = h), !1 === b)
                  for (;
                    (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((s ? p.nodeName.toLowerCase() !== v : 1 !== p.nodeType) || !++b || (y && (d = p[N] || (p[N] = {}), u = d[p.uniqueID] || (d[p.uniqueID] = {}), u[e] = [U, b]), p !== t)););
                return (b -= r) === i || b % i == 0 && b / i >= 0
              }
            }
          },
          PSEUDO: function(e, n) {
            var r, a = T.pseudos[e] || T.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
            return a[N] ? a(n) : a.length > 1 ? (r = [e, e, "", n], T.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
              for (var i, r = a(e, n), o = r.length; o--;) i = Q(e, r[o]), e[i] = !(t[i] = r[o])
            }) : function(e) {
              return a(e, 0, r)
            }) : a
          }
        },
        pseudos: {
          not: i(function(e) {
            var t = [],
              n = [],
              r = x(e.replace(ae, "$1"));
            return r[N] ? i(function(e, t, n, i) {
              for (var a, o = r(e, null, i, []), s = e.length; s--;)(a = o[s]) && (e[s] = !(t[s] = a))
            }) : function(e, i, a) {
              return t[0] = e, r(t, null, a, n), t[0] = null, !n.pop()
            }
          }),
          has: i(function(e) {
            return function(n) {
              return t(e, n).length > 0
            }
          }),
          contains: i(function(e) {
            return e = e.replace(ye, be),
              function(t) {
                return (t.textContent || t.innerText || w(t)).indexOf(e) > -1
              }
          }),
          lang: i(function(e) {
            return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(),
              function(t) {
                var n;
                do {
                  if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          }),
          target: function(t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
          },
          root: function(e) {
            return e === H
          },
          focus: function(e) {
            return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function(e) {
            return !1 === e.disabled
          },
          disabled: function(e) {
            return !0 === e.disabled
          },
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !T.pseudos.empty(e)
          },
          header: function(e) {
            return he.test(e.nodeName)
          },
          input: function(e) {
            return pe.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: s(function() {
            return [0]
          }),
          last: s(function(e, t) {
            return [t - 1]
          }),
          eq: s(function(e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: s(function(e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e
          }),
          odd: s(function(e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e
          }),
          lt: s(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; --i >= 0;) e.push(i);
            return e
          }),
          gt: s(function(e, t, n) {
            for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
            return e
          })
        }
      }, T.pseudos.nth = T.pseudos.eq;
      for (y in {
          radio: !0,
          checkbox: !0,
          file: !0,
          password: !0,
          image: !0
        }) T.pseudos[y] = function(e) {
        return function(t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e
        }
      }(y);
      for (y in {
          submit: !0,
          reset: !0
        }) T.pseudos[y] = function(e) {
        return function(t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e
        }
      }(y);
      return c.prototype = T.filters = T.pseudos, T.setFilters = new c, S = t.tokenize = function(e, n) {
        var i, r, a, o, s, l, c, u = j[e + " "];
        if (u) return n ? 0 : u.slice(0);
        for (s = e, l = [], c = T.preFilter; s;) {
          i && !(r = oe.exec(s)) || (r && (s = s.slice(r[0].length) || s), l.push(a = [])), i = !1, (r = se.exec(s)) && (i = r.shift(), a.push({
            value: i,
            type: r[0].replace(ae, " ")
          }), s = s.slice(i.length));
          for (o in T.filter) !(r = de[o].exec(s)) || c[o] && !(r = c[o](r)) || (i = r.shift(), a.push({
            value: i,
            type: o,
            matches: r
          }), s = s.slice(i.length));
          if (!i) break
        }
        return n ? s.length : s ? t.error(e) : j(e, l).slice(0)
      }, x = t.compile = function(e, t) {
        var n, i = [],
          r = [],
          a = $[e + " "];
        if (!a) {
          for (t || (t = S(e)), n = t.length; n--;) a = g(t[n]), a[N] ? i.push(a) : r.push(a);
          a = $(e, v(r, i)), a.selector = e
        }
        return a
      }, C = t.select = function(e, t, n, i) {
        var r, a, o, s, c, d = "function" == typeof e && e,
          p = !i && S(e = d.selector || e);
        if (n = n || [], 1 === p.length) {
          if (a = p[0] = p[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && b.getById && 9 === t.nodeType && I && T.relative[a[1].type]) {
            if (!(t = (T.find.ID(o.matches[0].replace(ye, be), t) || [])[0])) return n;
            d && (t = t.parentNode), e = e.slice(a.shift().value.length)
          }
          for (r = de.needsContext.test(e) ? 0 : a.length; r-- && (o = a[r], !T.relative[s = o.type]);)
            if ((c = T.find[s]) && (i = c(o.matches[0].replace(ye, be), ge.test(a[0].type) && l(t.parentNode) || t))) {
              if (a.splice(r, 1), !(e = i.length && u(a))) return J.apply(n, i), n;
              break
            }
        }
        return (d || x(e, p))(i, t, !I, n, !t || ge.test(e) && l(t.parentNode) || t), n
      }, b.sortStable = N.split("").sort(W).join("") === N, b.detectDuplicates = !!E, P(), b.sortDetached = r(function(e) {
        return 1 & e.compareDocumentPosition(A.createElement("div"))
      }), r(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
      }) || a("type|href|height|width", function(e, t, n) {
        if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
      }), b.attributes && r(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
      }) || a("value", function(e, t, n) {
        if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
      }), r(function(e) {
        return null == e.getAttribute("disabled")
      }) || a(Z, function(e, t, n) {
        var i;
        if (!n) return !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
      }), t
    }(n);
    le.find = he, le.expr = he.selectors, le.expr[":"] = le.expr.pseudos, le.uniqueSort = le.unique = he.uniqueSort, le.text = he.getText, le.isXMLDoc = he.isXML, le.contains = he.contains;
    var fe = function(e, t, n) {
        for (var i = [], r = void 0 !== n;
          (e = e[t]) && 9 !== e.nodeType;)
          if (1 === e.nodeType) {
            if (r && le(e).is(n)) break;
            i.push(e)
          } return i
      },
      me = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
      },
      ge = le.expr.match.needsContext,
      ve = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
      ye = /^.[^:#\[\.,]*$/;
    le.filter = function(e, t, n) {
      var i = t[0];
      return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? le.find.matchesSelector(i, e) ? [i] : [] : le.find.matches(e, le.grep(t, function(e) {
        return 1 === e.nodeType
      }))
    }, le.fn.extend({
      find: function(e) {
        var t, n = this.length,
          i = [],
          r = this;
        if ("string" != typeof e) return this.pushStack(le(e).filter(function() {
          for (t = 0; t < n; t++)
            if (le.contains(r[t], this)) return !0
        }));
        for (t = 0; t < n; t++) le.find(e, r[t], i);
        return i = this.pushStack(n > 1 ? le.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, i
      },
      filter: function(e) {
        return this.pushStack(s(this, e || [], !1))
      },
      not: function(e) {
        return this.pushStack(s(this, e || [], !0))
      },
      is: function(e) {
        return !!s(this, "string" == typeof e && ge.test(e) ? le(e) : e || [], !1).length
      }
    });
    var be, Te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (le.fn.init = function(e, t, n) {
      var i, r;
      if (!e) return this;
      if (n = n || be, "string" == typeof e) {
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : Te.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
        if (i[1]) {
          if (t = t instanceof le ? t[0] : t, le.merge(this, le.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : Z, !0)), ve.test(i[1]) && le.isPlainObject(t))
            for (i in t) le.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
          return this
        }
        return r = Z.getElementById(i[2]), r && r.parentNode && (this.length = 1, this[0] = r), this.context = Z, this.selector = e, this
      }
      return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : le.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(le) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), le.makeArray(e, this))
    }).prototype = le.fn, be = le(Z);
    var we = /^(?:parents|prev(?:Until|All))/,
      ke = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
      };
    le.fn.extend({
      has: function(e) {
        var t = le(e, this),
          n = t.length;
        return this.filter(function() {
          for (var e = 0; e < n; e++)
            if (le.contains(this, t[e])) return !0
        })
      },
      closest: function(e, t) {
        for (var n, i = 0, r = this.length, a = [], o = ge.test(e) || "string" != typeof e ? le(e, t || this.context) : 0; i < r; i++)
          for (n = this[i]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && le.find.matchesSelector(n, e))) {
              a.push(n);
              break
            } return this.pushStack(a.length > 1 ? le.uniqueSort(a) : a)
      },
      index: function(e) {
        return e ? "string" == typeof e ? ie.call(le(e), this[0]) : ie.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
      },
      add: function(e, t) {
        return this.pushStack(le.uniqueSort(le.merge(this.get(), le(e, t))))
      },
      addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
      }
    }), le.each({
      parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
      },
      parents: function(e) {
        return fe(e, "parentNode")
      },
      parentsUntil: function(e, t, n) {
        return fe(e, "parentNode", n)
      },
      next: function(e) {
        return l(e, "nextSibling")
      },
      prev: function(e) {
        return l(e, "previousSibling")
      },
      nextAll: function(e) {
        return fe(e, "nextSibling")
      },
      prevAll: function(e) {
        return fe(e, "previousSibling")
      },
      nextUntil: function(e, t, n) {
        return fe(e, "nextSibling", n)
      },
      prevUntil: function(e, t, n) {
        return fe(e, "previousSibling", n)
      },
      siblings: function(e) {
        return me((e.parentNode || {}).firstChild, e)
      },
      children: function(e) {
        return me(e.firstChild)
      },
      contents: function(e) {
        return e.contentDocument || le.merge([], e.childNodes)
      }
    }, function(e, t) {
      le.fn[e] = function(n, i) {
        var r = le.map(this, t, n);
        return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = le.filter(i, r)), this.length > 1 && (ke[e] || le.uniqueSort(r), we.test(e) && r.reverse()), this.pushStack(r)
      }
    });
    var Se = /\S+/g;
    le.Callbacks = function(e) {
      e = "string" == typeof e ? c(e) : le.extend({}, e);
      var t, n, i, r, a = [],
        o = [],
        s = -1,
        l = function() {
          for (r = e.once, i = t = !0; o.length; s = -1)
            for (n = o.shift(); ++s < a.length;) !1 === a[s].apply(n[0], n[1]) && e.stopOnFalse && (s = a.length, n = !1);
          e.memory || (n = !1), t = !1, r && (a = n ? [] : "")
        },
        u = {
          add: function() {
            return a && (n && !t && (s = a.length - 1, o.push(n)), function t(n) {
              le.each(n, function(n, i) {
                le.isFunction(i) ? e.unique && u.has(i) || a.push(i) : i && i.length && "string" !== le.type(i) && t(i)
              })
            }(arguments), n && !t && l()), this
          },
          remove: function() {
            return le.each(arguments, function(e, t) {
              for (var n;
                (n = le.inArray(t, a, n)) > -1;) a.splice(n, 1), n <= s && s--
            }), this
          },
          has: function(e) {
            return e ? le.inArray(e, a) > -1 : a.length > 0
          },
          empty: function() {
            return a && (a = []), this
          },
          disable: function() {
            return r = o = [], a = n = "", this
          },
          disabled: function() {
            return !a
          },
          lock: function() {
            return r = o = [], n || (a = n = ""), this
          },
          locked: function() {
            return !!r
          },
          fireWith: function(e, n) {
            return r || (n = n || [], n = [e, n.slice ? n.slice() : n], o.push(n), t || l()), this
          },
          fire: function() {
            return u.fireWith(this, arguments), this
          },
          fired: function() {
            return !!i
          }
        };
      return u
    }, le.extend({
      Deferred: function(e) {
        var t = [
            ["resolve", "done", le.Callbacks("once memory"), "resolved"],
            ["reject", "fail", le.Callbacks("once memory"), "rejected"],
            ["notify", "progress", le.Callbacks("memory")]
          ],
          n = "pending",
          i = {
            state: function() {
              return n
            },
            always: function() {
              return r.done(arguments).fail(arguments), this
            },
            then: function() {
              var e = arguments;
              return le.Deferred(function(n) {
                le.each(t, function(t, a) {
                  var o = le.isFunction(e[t]) && e[t];
                  r[a[1]](function() {
                    var e = o && o.apply(this, arguments);
                    e && le.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this === i ? n.promise() : this, o ? [e] : arguments)
                  })
                }), e = null
              }).promise()
            },
            promise: function(e) {
              return null != e ? le.extend(e, i) : i
            }
          },
          r = {};
        return i.pipe = i.then, le.each(t, function(e, a) {
          var o = a[2],
            s = a[3];
          i[a[1]] = o.add, s && o.add(function() {
            n = s
          }, t[1 ^ e][2].disable, t[2][2].lock), r[a[0]] = function() {
            return r[a[0] + "With"](this === r ? i : this, arguments), this
          }, r[a[0] + "With"] = o.fireWith
        }), i.promise(r), e && e.call(r, r), r
      },
      when: function(e) {
        var t, n, i, r = 0,
          a = ee.call(arguments),
          o = a.length,
          s = 1 !== o || e && le.isFunction(e.promise) ? o : 0,
          l = 1 === s ? e : le.Deferred(),
          c = function(e, n, i) {
            return function(r) {
              n[e] = this, i[e] = arguments.length > 1 ? ee.call(arguments) : r, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
            }
          };
        if (o > 1)
          for (t = new Array(o), n = new Array(o), i = new Array(o); r < o; r++) a[r] && le.isFunction(a[r].promise) ? a[r].promise().progress(c(r, n, t)).done(c(r, i, a)).fail(l.reject) : --s;
        return s || l.resolveWith(i, a), l.promise()
      }
    });
    var xe;
    le.fn.ready = function(e) {
      return le.ready.promise().done(e), this
    }, le.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function(e) {
        e ? le.readyWait++ : le.ready(!0)
      },
      ready: function(e) {
        (!0 === e ? --le.readyWait : le.isReady) || (le.isReady = !0, !0 !== e && --le.readyWait > 0 || (xe.resolveWith(Z, [le]), le.fn.triggerHandler && (le(Z).triggerHandler("ready"), le(Z).off("ready"))))
      }
    }), le.ready.promise = function(e) {
      return xe || (xe = le.Deferred(), "complete" === Z.readyState || "loading" !== Z.readyState && !Z.documentElement.doScroll ? n.setTimeout(le.ready) : (Z.addEventListener("DOMContentLoaded", u), n.addEventListener("load", u))), xe.promise(e)
    }, le.ready.promise();
    var Ce = function(e, t, n, i, r, a, o) {
        var s = 0,
          l = e.length,
          c = null == n;
        if ("object" === le.type(n)) {
          r = !0;
          for (s in n) Ce(e, t, s, n[s], !0, a, o)
        } else if (void 0 !== i && (r = !0, le.isFunction(i) || (o = !0), c && (o ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
            return c.call(le(e), n)
          })), t))
          for (; s < l; s++) t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : a
      },
      _e = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
      };
    d.uid = 1, d.prototype = {
      register: function(e, t) {
        var n = t || {};
        return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
          value: n,
          writable: !0,
          configurable: !0
        }), e[this.expando]
      },
      cache: function(e) {
        if (!_e(e)) return {};
        var t = e[this.expando];
        return t || (t = {}, _e(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t
      },
      set: function(e, t, n) {
        var i, r = this.cache(e);
        if ("string" == typeof t) r[t] = n;
        else
          for (i in t) r[i] = t[i];
        return r
      },
      get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
      },
      access: function(e, t, n) {
        var i;
        return void 0 === t || t && "string" == typeof t && void 0 === n ? (i = this.get(e, t), void 0 !== i ? i : this.get(e, le.camelCase(t))) : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function(e, t) {
        var n, i, r, a = e[this.expando];
        if (void 0 !== a) {
          if (void 0 === t) this.register(e);
          else {
            le.isArray(t) ? i = t.concat(t.map(le.camelCase)) : (r = le.camelCase(t), t in a ? i = [t, r] : (i = r, i = i in a ? [i] : i.match(Se) || [])), n = i.length;
            for (; n--;) delete a[i[n]]
          }(void 0 === t || le.isEmptyObject(a)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
      },
      hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !le.isEmptyObject(t)
      }
    };
    var Re = new d,
      Ee = new d,
      Pe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Ae = /[A-Z]/g;
    le.extend({
      hasData: function(e) {
        return Ee.hasData(e) || Re.hasData(e)
      },
      data: function(e, t, n) {
        return Ee.access(e, t, n)
      },
      removeData: function(e, t) {
        Ee.remove(e, t)
      },
      _data: function(e, t, n) {
        return Re.access(e, t, n)
      },
      _removeData: function(e, t) {
        Re.remove(e, t)
      }
    }), le.fn.extend({
      data: function(e, t) {
        var n, i, r, a = this[0],
          o = a && a.attributes;
        if (void 0 === e) {
          if (this.length && (r = Ee.get(a), 1 === a.nodeType && !Re.get(a, "hasDataAttrs"))) {
            for (n = o.length; n--;) o[n] && (i = o[n].name, 0 === i.indexOf("data-") && (i = le.camelCase(i.slice(5)), p(a, i, r[i])));
            Re.set(a, "hasDataAttrs", !0)
          }
          return r
        }
        return "object" == typeof e ? this.each(function() {
          Ee.set(this, e)
        }) : Ce(this, function(t) {
          var n, i;
          if (a && void 0 === t) {
            if (void 0 !== (n = Ee.get(a, e) || Ee.get(a, e.replace(Ae, "-$&").toLowerCase()))) return n;
            if (i = le.camelCase(e), void 0 !== (n = Ee.get(a, i))) return n;
            if (void 0 !== (n = p(a, i, void 0))) return n
          } else i = le.camelCase(e), this.each(function() {
            var n = Ee.get(this, i);
            Ee.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && Ee.set(this, e, t)
          })
        }, null, t, arguments.length > 1, null, !0)
      },
      removeData: function(e) {
        return this.each(function() {
          Ee.remove(this, e)
        })
      }
    }), le.extend({
      queue: function(e, t, n) {
        var i;
        if (e) return t = (t || "fx") + "queue", i = Re.get(e, t), n && (!i || le.isArray(n) ? i = Re.access(e, t, le.makeArray(n)) : i.push(n)), i || []
      },
      dequeue: function(e, t) {
        t = t || "fx";
        var n = le.queue(e, t),
          i = n.length,
          r = n.shift(),
          a = le._queueHooks(e, t),
          o = function() {
            le.dequeue(e, t)
          };
        "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, o, a)), !i && a && a.empty.fire()
      },
      _queueHooks: function(e, t) {
        var n = t + "queueHooks";
        return Re.get(e, n) || Re.access(e, n, {
          empty: le.Callbacks("once memory").add(function() {
            Re.remove(e, [t + "queue", n])
          })
        })
      }
    }), le.fn.extend({
      queue: function(e, t) {
        var n = 2;
        return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? le.queue(this[0], e) : void 0 === t ? this : this.each(function() {
          var n = le.queue(this, e, t);
          le._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && le.dequeue(this, e)
        })
      },
      dequeue: function(e) {
        return this.each(function() {
          le.dequeue(this, e)
        })
      },
      clearQueue: function(e) {
        return this.queue(e || "fx", [])
      },
      promise: function(e, t) {
        var n, i = 1,
          r = le.Deferred(),
          a = this,
          o = this.length,
          s = function() {
            --i || r.resolveWith(a, [a])
          };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(n = Re.get(a[o], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
        return s(), r.promise(t)
      }
    });
    var He = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      Ie = new RegExp("^(?:([+-])=|)(" + He + ")([a-z%]*)$", "i"),
      De = ["Top", "Right", "Bottom", "Left"],
      Oe = function(e, t) {
        return e = t || e, "none" === le.css(e, "display") || !le.contains(e.ownerDocument, e)
      },
      Ve = /^(?:checkbox|radio)$/i,
      Me = /<([\w:-]+)/,
      Ne = /^$|\/(?:java|ecma)script/i,
      Be = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
      };
    Be.optgroup = Be.option, Be.tbody = Be.tfoot = Be.colgroup = Be.caption = Be.thead, Be.th = Be.td;
    var Ue = /<|&#?\w+;/;
    ! function() {
      var e = Z.createDocumentFragment(),
        t = e.appendChild(Z.createElement("div")),
        n = Z.createElement("input");
      n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), se.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", se.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Le = /^key/,
      Fe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
      je = /^([^.]*)(?:\.(.+)|)/;
    le.event = {
      global: {},
      add: function(e, t, n, i, r) {
        var a, o, s, l, c, u, d, p, h, f, m, g = Re.get(e);
        if (g)
          for (n.handler && (a = n, n = a.handler, r = a.selector), n.guid || (n.guid = le.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(t) {
              return void 0 !== le && le.event.triggered !== t.type ? le.event.dispatch.apply(e, arguments) : void 0
            }), t = (t || "").match(Se) || [""], c = t.length; c--;) s = je.exec(t[c]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h && (d = le.event.special[h] || {}, h = (r ? d.delegateType : d.bindType) || h, d = le.event.special[h] || {}, u = le.extend({
            type: h,
            origType: m,
            data: i,
            handler: n,
            guid: n.guid,
            selector: r,
            needsContext: r && le.expr.match.needsContext.test(r),
            namespace: f.join(".")
          }, a), (p = l[h]) || (p = l[h] = [], p.delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, f, o) || e.addEventListener && e.addEventListener(h, o)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, u) : p.push(u), le.event.global[h] = !0)
      },
      remove: function(e, t, n, i, r) {
        var a, o, s, l, c, u, d, p, h, f, m, g = Re.hasData(e) && Re.get(e);
        if (g && (l = g.events)) {
          for (t = (t || "").match(Se) || [""], c = t.length; c--;)
            if (s = je.exec(t[c]) || [], h = m = s[1], f = (s[2] || "").split(".").sort(), h) {
              for (d = le.event.special[h] || {}, h = (i ? d.delegateType : d.bindType) || h, p = l[h] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = a = p.length; a--;) u = p[a], !r && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(e, u));
              o && !p.length && (d.teardown && !1 !== d.teardown.call(e, f, g.handle) || le.removeEvent(e, h, g.handle), delete l[h])
            } else
              for (h in l) le.event.remove(e, h + t[c], n, i, !0);
          le.isEmptyObject(l) && Re.remove(e, "handle events")
        }
      },
      dispatch: function(e) {
        e = le.event.fix(e);
        var t, n, i, r, a, o = [],
          s = ee.call(arguments),
          l = (Re.get(this, "events") || {})[e.type] || [],
          c = le.event.special[e.type] || {};
        if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
          for (o = le.event.handlers.call(this, e, l), t = 0;
            (r = o[t++]) && !e.isPropagationStopped();)
            for (e.currentTarget = r.elem, n = 0;
              (a = r.handlers[n++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(a.namespace) || (e.handleObj = a, e.data = a.data, void 0 !== (i = ((le.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s)) && !1 === (e.result = i) && (e.preventDefault(), e.stopPropagation()));
          return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
      },
      handlers: function(e, t) {
        var n, i, r, a, o = [],
          s = t.delegateCount,
          l = e.target;
        if (s && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
          for (; l !== this; l = l.parentNode || this)
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
              for (i = [], n = 0; n < s; n++) a = t[n], r = a.selector + " ", void 0 === i[r] && (i[r] = a.needsContext ? le(r, this).index(l) > -1 : le.find(r, this, null, [l]).length), i[r] && i.push(a);
              i.length && o.push({
                elem: l,
                handlers: i
              })
            } return s < t.length && o.push({
          elem: this,
          handlers: t.slice(s)
        }), o
      },
      props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
          return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
      },
      mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, t) {
          var n, i, r, a = t.button;
          return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || Z, i = n.documentElement, r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
        }
      },
      fix: function(e) {
        if (e[le.expando]) return e;
        var t, n, i, r = e.type,
          a = e,
          o = this.fixHooks[r];
        for (o || (this.fixHooks[r] = o = Fe.test(r) ? this.mouseHooks : Le.test(r) ? this.keyHooks : {}), i = o.props ? this.props.concat(o.props) : this.props, e = new le.Event(a), t = i.length; t--;) n = i[t], e[n] = a[n];
        return e.target || (e.target = Z), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, a) : e
      },
      special: {
        load: {
          noBubble: !0
        },
        focus: {
          trigger: function() {
            if (this !== b() && this.focus) return this.focus(), !1
          },
          delegateType: "focusin"
        },
        blur: {
          trigger: function() {
            if (this === b() && this.blur) return this.blur(), !1
          },
          delegateType: "focusout"
        },
        click: {
          trigger: function() {
            if ("checkbox" === this.type && this.click && le.nodeName(this, "input")) return this.click(), !1
          },
          _default: function(e) {
            return le.nodeName(e.target, "a")
          }
        },
        beforeunload: {
          postDispatch: function(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
          }
        }
      }
    }, le.removeEvent = function(e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }, le.Event = function(e, t) {
      if (!(this instanceof le.Event)) return new le.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? v : y) : this.type = e, t && le.extend(this, t), this.timeStamp = e && e.timeStamp || le.now(), this[le.expando] = !0
    }, le.Event.prototype = {
      constructor: le.Event,
      isDefaultPrevented: y,
      isPropagationStopped: y,
      isImmediatePropagationStopped: y,
      isSimulated: !1,
      preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = v, e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = v, e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = v, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
      }
    }, le.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(e, t) {
      le.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function(e) {
          var n, i = this,
            r = e.relatedTarget,
            a = e.handleObj;
          return r && (r === i || le.contains(i, r)) || (e.type = a.origType, n = a.handler.apply(this, arguments), e.type = t), n
        }
      }
    }), le.fn.extend({
      on: function(e, t, n, i) {
        return T(this, e, t, n, i)
      },
      one: function(e, t, n, i) {
        return T(this, e, t, n, i, 1)
      },
      off: function(e, t, n) {
        var i, r;
        if (e && e.preventDefault && e.handleObj) return i = e.handleObj, le(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
          for (r in e) this.off(r, t, e[r]);
          return this
        }
        return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = y), this.each(function() {
          le.event.remove(this, e, n, t)
        })
      }
    });
    var $e = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
      We = /<script|<style|<link/i,
      qe = /checked\s*(?:[^=]|=\s*.checked.)/i,
      ze = /^true\/(.*)/,
      Ke = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    le.extend({
      htmlPrefilter: function(e) {
        return e.replace($e, "<$1></$2>")
      },
      clone: function(e, t, n) {
        var i, r, a, o, s = e.cloneNode(!0),
          l = le.contains(e.ownerDocument, e);
        if (!(se.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || le.isXMLDoc(e)))
          for (o = f(s), a = f(e), i = 0, r = a.length; i < r; i++) C(a[i], o[i]);
        if (t)
          if (n)
            for (a = a || f(e), o = o || f(s), i = 0, r = a.length; i < r; i++) x(a[i], o[i]);
          else x(e, s);
        return o = f(s, "script"), o.length > 0 && m(o, !l && f(e, "script")), s
      },
      cleanData: function(e) {
        for (var t, n, i, r = le.event.special, a = 0; void 0 !== (n = e[a]); a++)
          if (_e(n)) {
            if (t = n[Re.expando]) {
              if (t.events)
                for (i in t.events) r[i] ? le.event.remove(n, i) : le.removeEvent(n, i, t.handle);
              n[Re.expando] = void 0
            }
            n[Ee.expando] && (n[Ee.expando] = void 0)
          }
      }
    }), le.fn.extend({
      domManip: _,
      detach: function(e) {
        return R(this, e, !0)
      },
      remove: function(e) {
        return R(this, e)
      },
      text: function(e) {
        return Ce(this, function(e) {
          return void 0 === e ? le.text(this) : this.empty().each(function() {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
          })
        }, null, e, arguments.length)
      },
      append: function() {
        return _(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            w(this, e).appendChild(e)
          }
        })
      },
      prepend: function() {
        return _(this, arguments, function(e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = w(this, e);
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function() {
        return _(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function() {
        return _(this, arguments, function(e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (le.cleanData(f(e, !1)), e.textContent = "");
        return this
      },
      clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
          return le.clone(this, e, t)
        })
      },
      html: function(e) {
        return Ce(this, function(e) {
          var t = this[0] || {},
            n = 0,
            i = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
          if ("string" == typeof e && !We.test(e) && !Be[(Me.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = le.htmlPrefilter(e);
            try {
              for (; n < i; n++) t = this[n] || {}, 1 === t.nodeType && (le.cleanData(f(t, !1)), t.innerHTML = e);
              t = 0
            } catch (e) {}
          }
          t && this.empty().append(e)
        }, null, e, arguments.length)
      },
      replaceWith: function() {
        var e = [];
        return _(this, arguments, function(t) {
          var n = this.parentNode;
          le.inArray(this, e) < 0 && (le.cleanData(f(this)), n && n.replaceChild(t, this))
        }, e)
      }
    }), le.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(e, t) {
      le.fn[e] = function(e) {
        for (var n, i = [], r = le(e), a = r.length - 1, o = 0; o <= a; o++) n = o === a ? this : this.clone(!0), le(r[o])[t](n), ne.apply(i, n.get());
        return this.pushStack(i)
      }
    });
    var Ye, Ge = {
        HTML: "block",
        BODY: "block"
      },
      Je = /^margin/,
      Xe = new RegExp("^(" + He + ")(?!px)[a-z%]+$", "i"),
      Qe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = n), t.getComputedStyle(e)
      },
      Ze = function(e, t, n, i) {
        var r, a, o = {};
        for (a in t) o[a] = e.style[a], e.style[a] = t[a];
        r = n.apply(e, i || []);
        for (a in t) e.style[a] = o[a];
        return r
      },
      et = Z.documentElement;
    ! function() {
      function e() {
        s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", et.appendChild(o);
        var e = n.getComputedStyle(s);
        t = "1%" !== e.top, a = "2px" === e.marginLeft, i = "4px" === e.width, s.style.marginRight = "50%", r = "4px" === e.marginRight, et.removeChild(o)
      }
      var t, i, r, a, o = Z.createElement("div"),
        s = Z.createElement("div");
      s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", se.clearCloneStyle = "content-box" === s.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(s), le.extend(se, {
        pixelPosition: function() {
          return e(), t
        },
        boxSizingReliable: function() {
          return null == i && e(), i
        },
        pixelMarginRight: function() {
          return null == i && e(), r
        },
        reliableMarginLeft: function() {
          return null == i && e(), a
        },
        reliableMarginRight: function() {
          var e, t = s.appendChild(Z.createElement("div"));
          return t.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", s.style.width = "1px", et.appendChild(o), e = !parseFloat(n.getComputedStyle(t).marginRight), et.removeChild(o), s.removeChild(t), e
        }
      }))
    }();
    var tt = /^(none|table(?!-c[ea]).+)/,
      nt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
      },
      it = {
        letterSpacing: "0",
        fontWeight: "400"
      },
      rt = ["Webkit", "O", "Moz", "ms"],
      at = Z.createElement("div").style;
    le.extend({
      cssHooks: {
        opacity: {
          get: function(e, t) {
            if (t) {
              var n = A(e, "opacity");
              return "" === n ? "1" : n
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {
        float: "cssFloat"
      },
      style: function(e, t, n, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var r, a, o, s = le.camelCase(t),
            l = e.style;
          if (t = le.cssProps[s] || (le.cssProps[s] = I(s) || s), o = le.cssHooks[t] || le.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (r = o.get(e, !1, i)) ? r : l[t];
          a = typeof n, "string" === a && (r = Ie.exec(n)) && r[1] && (n = h(e, t, r), a = "number"), null != n && n === n && ("number" === a && (n += r && r[3] || (le.cssNumber[s] ? "" : "px")), se.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (n = o.set(e, n, i)) || (l[t] = n))
        }
      },
      css: function(e, t, n, i) {
        var r, a, o, s = le.camelCase(t);
        return t = le.cssProps[s] || (le.cssProps[s] = I(s) || s), o = le.cssHooks[t] || le.cssHooks[s], o && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = A(e, t, i)), "normal" === r && t in it && (r = it[t]), "" === n || n ? (a = parseFloat(r), !0 === n || isFinite(a) ? a || 0 : r) : r
      }
    }), le.each(["height", "width"], function(e, t) {
      le.cssHooks[t] = {
        get: function(e, n, i) {
          if (n) return tt.test(le.css(e, "display")) && 0 === e.offsetWidth ? Ze(e, nt, function() {
            return V(e, t, i)
          }) : V(e, t, i)
        },
        set: function(e, n, i) {
          var r, a = i && Qe(e),
            o = i && O(e, t, i, "border-box" === le.css(e, "boxSizing", !1, a), a);
          return o && (r = Ie.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = le.css(e, t)), D(e, n, o)
        }
      }
    }), le.cssHooks.marginLeft = H(se.reliableMarginLeft, function(e, t) {
      if (t) return (parseFloat(A(e, "marginLeft")) || e.getBoundingClientRect().left - Ze(e, {
        marginLeft: 0
      }, function() {
        return e.getBoundingClientRect().left
      })) + "px"
    }), le.cssHooks.marginRight = H(se.reliableMarginRight, function(e, t) {
      if (t) return Ze(e, {
        display: "inline-block"
      }, A, [e, "marginRight"])
    }), le.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(e, t) {
      le.cssHooks[e + t] = {
        expand: function(n) {
          for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[e + De[i] + t] = a[i] || a[i - 2] || a[0];
          return r
        }
      }, Je.test(e) || (le.cssHooks[e + t].set = D)
    }), le.fn.extend({
      css: function(e, t) {
        return Ce(this, function(e, t, n) {
          var i, r, a = {},
            o = 0;
          if (le.isArray(t)) {
            for (i = Qe(e), r = t.length; o < r; o++) a[t[o]] = le.css(e, t[o], !1, i);
            return a
          }
          return void 0 !== n ? le.style(e, t, n) : le.css(e, t)
        }, e, t, arguments.length > 1)
      },
      show: function() {
        return M(this, !0)
      },
      hide: function() {
        return M(this)
      },
      toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
          Oe(this) ? le(this).show() : le(this).hide()
        })
      }
    }), le.Tween = N, N.prototype = {
      constructor: N,
      init: function(e, t, n, i, r, a) {
        this.elem = e, this.prop = n, this.easing = r || le.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (le.cssNumber[n] ? "" : "px")
      },
      cur: function() {
        var e = N.propHooks[this.prop];
        return e && e.get ? e.get(this) : N.propHooks._default.get(this)
      },
      run: function(e) {
        var t, n = N.propHooks[this.prop];
        return this.options.duration ? this.pos = t = le.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : N.propHooks._default.set(this), this
      }
    }, N.prototype.init.prototype = N.prototype, N.propHooks = {
      _default: {
        get: function(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = le.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0)
        },
        set: function(e) {
          le.fx.step[e.prop] ? le.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[le.cssProps[e.prop]] && !le.cssHooks[e.prop] ? e.elem[e.prop] = e.now : le.style(e.elem, e.prop, e.now + e.unit)
        }
      }
    }, N.propHooks.scrollTop = N.propHooks.scrollLeft = {
      set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
      }
    }, le.easing = {
      linear: function(e) {
        return e
      },
      swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
      },
      _default: "swing"
    }, le.fx = N.prototype.init, le.fx.step = {};
    var ot, st, lt = /^(?:toggle|show|hide)$/,
      ct = /queueHooks$/;
    le.Animation = le.extend($, {
        tweeners: {
          "*": [function(e, t) {
            var n = this.createTween(e, t);
            return h(n.elem, e, Ie.exec(t), n), n
          }]
        },
        tweener: function(e, t) {
          le.isFunction(e) ? (t = e, e = ["*"]) : e = e.match(Se);
          for (var n, i = 0, r = e.length; i < r; i++) n = e[i], $.tweeners[n] = $.tweeners[n] || [], $.tweeners[n].unshift(t)
        },
        prefilters: [F],
        prefilter: function(e, t) {
          t ? $.prefilters.unshift(e) : $.prefilters.push(e)
        }
      }), le.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? le.extend({}, e) : {
          complete: n || !n && t || le.isFunction(e) && e,
          duration: e,
          easing: n && t || t && !le.isFunction(t) && t
        };
        return i.duration = le.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in le.fx.speeds ? le.fx.speeds[i.duration] : le.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
          le.isFunction(i.old) && i.old.call(this), i.queue && le.dequeue(this, i.queue)
        }, i
      }, le.fn.extend({
        fadeTo: function(e, t, n, i) {
          return this.filter(Oe).css("opacity", 0).show().end().animate({
            opacity: t
          }, e, n, i)
        },
        animate: function(e, t, n, i) {
          var r = le.isEmptyObject(e),
            a = le.speed(t, n, i),
            o = function() {
              var t = $(this, le.extend({}, e), a);
              (r || Re.get(this, "finish")) && t.stop(!0)
            };
          return o.finish = o, r || !1 === a.queue ? this.each(o) : this.queue(a.queue, o)
        },
        stop: function(e, t, n) {
          var i = function(e) {
            var t = e.stop;
            delete e.stop, t(n)
          };
          return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
            var t = !0,
              r = null != e && e + "queueHooks",
              a = le.timers,
              o = Re.get(this);
            if (r) o[r] && o[r].stop && i(o[r]);
            else
              for (r in o) o[r] && o[r].stop && ct.test(r) && i(o[r]);
            for (r = a.length; r--;) a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n), t = !1, a.splice(r, 1));
            !t && n || le.dequeue(this, e)
          })
        },
        finish: function(e) {
          return !1 !== e && (e = e || "fx"), this.each(function() {
            var t, n = Re.get(this),
              i = n[e + "queue"],
              r = n[e + "queueHooks"],
              a = le.timers,
              o = i ? i.length : 0;
            for (n.finish = !0, le.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = a.length; t--;) a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
            for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
            delete n.finish
          })
        }
      }), le.each(["toggle", "show", "hide"], function(e, t) {
        var n = le.fn[t];
        le.fn[t] = function(e, i, r) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(U(t, !0), e, i, r)
        }
      }), le.each({
        slideDown: U("show"),
        slideUp: U("hide"),
        slideToggle: U("toggle"),
        fadeIn: {
          opacity: "show"
        },
        fadeOut: {
          opacity: "hide"
        },
        fadeToggle: {
          opacity: "toggle"
        }
      }, function(e, t) {
        le.fn[e] = function(e, n, i) {
          return this.animate(t, e, n, i)
        }
      }), le.timers = [], le.fx.tick = function() {
        var e, t = 0,
          n = le.timers;
        for (ot = le.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || le.fx.stop(), ot = void 0
      }, le.fx.timer = function(e) {
        le.timers.push(e), e() ? le.fx.start() : le.timers.pop()
      }, le.fx.interval = 13, le.fx.start = function() {
        st || (st = n.setInterval(le.fx.tick, le.fx.interval))
      }, le.fx.stop = function() {
        n.clearInterval(st), st = null
      }, le.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
      }, le.fn.delay = function(e, t) {
        return e = le.fx ? le.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, i) {
          var r = n.setTimeout(t, e);
          i.stop = function() {
            n.clearTimeout(r)
          }
        })
      },
      function() {
        var e = Z.createElement("input"),
          t = Z.createElement("select"),
          n = t.appendChild(Z.createElement("option"));
        e.type = "checkbox", se.checkOn = "" !== e.value, se.optSelected = n.selected, t.disabled = !0, se.optDisabled = !n.disabled, e = Z.createElement("input"), e.value = "t", e.type = "radio", se.radioValue = "t" === e.value
      }();
    var ut, dt = le.expr.attrHandle;
    le.fn.extend({
      attr: function(e, t) {
        return Ce(this, le.attr, e, t, arguments.length > 1)
      },
      removeAttr: function(e) {
        return this.each(function() {
          le.removeAttr(this, e)
        })
      }
    }), le.extend({
      attr: function(e, t, n) {
        var i, r, a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? le.prop(e, t, n) : (1 === a && le.isXMLDoc(e) || (t = t.toLowerCase(), r = le.attrHooks[t] || (le.expr.match.bool.test(t) ? ut : void 0)), void 0 !== n ? null === n ? void le.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : (i = le.find.attr(e, t), null == i ? void 0 : i))
      },
      attrHooks: {
        type: {
          set: function(e, t) {
            if (!se.radioValue && "radio" === t && le.nodeName(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t
            }
          }
        }
      },
      removeAttr: function(e, t) {
        var n, i, r = 0,
          a = t && t.match(Se);
        if (a && 1 === e.nodeType)
          for (; n = a[r++];) i = le.propFix[n] || n, le.expr.match.bool.test(n) && (e[i] = !1), e.removeAttribute(n)
      }
    }), ut = {
      set: function(e, t, n) {
        return !1 === t ? le.removeAttr(e, n) : e.setAttribute(n, n), n
      }
    }, le.each(le.expr.match.bool.source.match(/\w+/g), function(e, t) {
      var n = dt[t] || le.find.attr;
      dt[t] = function(e, t, i) {
        var r, a;
        return i || (a = dt[t], dt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, dt[t] = a), r
      }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
      ht = /^(?:a|area)$/i;
    le.fn.extend({
      prop: function(e, t) {
        return Ce(this, le.prop, e, t, arguments.length > 1)
      },
      removeProp: function(e) {
        return this.each(function() {
          delete this[le.propFix[e] || e]
        })
      }
    }), le.extend({
      prop: function(e, t, n) {
        var i, r, a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a) return 1 === a && le.isXMLDoc(e) || (t = le.propFix[t] || t, r = le.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
      },
      propHooks: {
        tabIndex: {
          get: function(e) {
            var t = le.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : pt.test(e.nodeName) || ht.test(e.nodeName) && e.href ? 0 : -1
          }
        }
      },
      propFix: {
        for: "htmlFor",
        class: "className"
      }
    }), se.optSelected || (le.propHooks.selected = {
      get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
      },
      set: function(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
      }
    }), le.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
      le.propFix[this.toLowerCase()] = this
    });
    var ft = /[\t\r\n\f]/g;
    le.fn.extend({
      addClass: function(e) {
        var t, n, i, r, a, o, s, l = 0;
        if (le.isFunction(e)) return this.each(function(t) {
          le(this).addClass(e.call(this, t, W(this)))
        });
        if ("string" == typeof e && e)
          for (t = e.match(Se) || []; n = this[l++];)
            if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(ft, " ")) {
              for (o = 0; a = t[o++];) i.indexOf(" " + a + " ") < 0 && (i += a + " ");
              s = le.trim(i), r !== s && n.setAttribute("class", s)
            } return this
      },
      removeClass: function(e) {
        var t, n, i, r, a, o, s, l = 0;
        if (le.isFunction(e)) return this.each(function(t) {
          le(this).removeClass(e.call(this, t, W(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof e && e)
          for (t = e.match(Se) || []; n = this[l++];)
            if (r = W(n), i = 1 === n.nodeType && (" " + r + " ").replace(ft, " ")) {
              for (o = 0; a = t[o++];)
                for (; i.indexOf(" " + a + " ") > -1;) i = i.replace(" " + a + " ", " ");
              s = le.trim(i), r !== s && n.setAttribute("class", s)
            } return this
      },
      toggleClass: function(e, t) {
        var n = typeof e;
        return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : le.isFunction(e) ? this.each(function(n) {
          le(this).toggleClass(e.call(this, n, W(this), t), t)
        }) : this.each(function() {
          var t, i, r, a;
          if ("string" === n)
            for (i = 0, r = le(this), a = e.match(Se) || []; t = a[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
          else void 0 !== e && "boolean" !== n || (t = W(this), t && Re.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Re.get(this, "__className__") || ""))
        })
      },
      hasClass: function(e) {
        var t, n, i = 0;
        for (t = " " + e + " "; n = this[i++];)
          if (1 === n.nodeType && (" " + W(n) + " ").replace(ft, " ").indexOf(t) > -1) return !0;
        return !1
      }
    });
    var mt = /\r/g,
      gt = /[\x20\t\r\n\f]+/g;
    le.fn.extend({
      val: function(e) {
        var t, n, i, r = this[0]; {
          if (arguments.length) return i = le.isFunction(e), this.each(function(n) {
            var r;
            1 === this.nodeType && (r = i ? e.call(this, n, le(this).val()) : e, null == r ? r = "" : "number" == typeof r ? r += "" : le.isArray(r) && (r = le.map(r, function(e) {
              return null == e ? "" : e + ""
            })), (t = le.valHooks[this.type] || le.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
          });
          if (r) return (t = le.valHooks[r.type] || le.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value, "string" == typeof n ? n.replace(mt, "") : null == n ? "" : n)
        }
      }
    }), le.extend({
      valHooks: {
        option: {
          get: function(e) {
            var t = le.find.attr(e, "value");
            return null != t ? t : le.trim(le.text(e)).replace(gt, " ")
          }
        },
        select: {
          get: function(e) {
            for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || r < 0, o = a ? null : [], s = a ? r + 1 : i.length, l = r < 0 ? s : a ? r : 0; l < s; l++)
              if (n = i[l], (n.selected || l === r) && (se.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !le.nodeName(n.parentNode, "optgroup"))) {
                if (t = le(n).val(), a) return t;
                o.push(t)
              } return o
          },
          set: function(e, t) {
            for (var n, i, r = e.options, a = le.makeArray(t), o = r.length; o--;) i = r[o], (i.selected = le.inArray(le.valHooks.option.get(i), a) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), a
          }
        }
      }
    }), le.each(["radio", "checkbox"], function() {
      le.valHooks[this] = {
        set: function(e, t) {
          if (le.isArray(t)) return e.checked = le.inArray(le(e).val(), t) > -1
        }
      }, se.checkOn || (le.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
      })
    });
    var vt = /^(?:focusinfocus|focusoutblur)$/;
    le.extend(le.event, {
      trigger: function(e, t, i, r) {
        var a, o, s, l, c, u, d, p = [i || Z],
          h = oe.call(e, "type") ? e.type : e,
          f = oe.call(e, "namespace") ? e.namespace.split(".") : [];
        if (o = s = i = i || Z, 3 !== i.nodeType && 8 !== i.nodeType && !vt.test(h + le.event.triggered) && (h.indexOf(".") > -1 && (f = h.split("."), h = f.shift(), f.sort()), c = h.indexOf(":") < 0 && "on" + h, e = e[le.expando] ? e : new le.Event(h, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : le.makeArray(t, [e]), d = le.event.special[h] || {}, r || !d.trigger || !1 !== d.trigger.apply(i, t))) {
          if (!r && !d.noBubble && !le.isWindow(i)) {
            for (l = d.delegateType || h, vt.test(l + h) || (o = o.parentNode); o; o = o.parentNode) p.push(o), s = o;
            s === (i.ownerDocument || Z) && p.push(s.defaultView || s.parentWindow || n)
          }
          for (a = 0;
            (o = p[a++]) && !e.isPropagationStopped();) e.type = a > 1 ? l : d.bindType || h, u = (Re.get(o, "events") || {})[e.type] && Re.get(o, "handle"), u && u.apply(o, t), (u = c && o[c]) && u.apply && _e(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
          return e.type = h, r || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(p.pop(), t) || !_e(i) || c && le.isFunction(i[h]) && !le.isWindow(i) && (s = i[c], s && (i[c] = null), le.event.triggered = h, i[h](), le.event.triggered = void 0, s && (i[c] = s)), e.result
        }
      },
      simulate: function(e, t, n) {
        var i = le.extend(new le.Event, n, {
          type: e,
          isSimulated: !0
        });
        le.event.trigger(i, null, t)
      }
    }), le.fn.extend({
      trigger: function(e, t) {
        return this.each(function() {
          le.event.trigger(e, t, this)
        })
      },
      triggerHandler: function(e, t) {
        var n = this[0];
        if (n) return le.event.trigger(e, t, n, !0)
      }
    }), le.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
      le.fn[t] = function(e, n) {
        return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
      }
    }), le.fn.extend({
      hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      }
    }), se.focusin = "onfocusin" in n, se.focusin || le.each({
      focus: "focusin",
      blur: "focusout"
    }, function(e, t) {
      var n = function(e) {
        le.event.simulate(t, e.target, le.event.fix(e))
      };
      le.event.special[t] = {
        setup: function() {
          var i = this.ownerDocument || this,
            r = Re.access(i, t);
          r || i.addEventListener(e, n, !0), Re.access(i, t, (r || 0) + 1)
        },
        teardown: function() {
          var i = this.ownerDocument || this,
            r = Re.access(i, t) - 1;
          r ? Re.access(i, t, r) : (i.removeEventListener(e, n, !0), Re.remove(i, t))
        }
      }
    });
    var yt = n.location,
      bt = le.now(),
      Tt = /\?/;
    le.parseJSON = function(e) {
      return JSON.parse(e + "")
    }, le.parseXML = function(e) {
      var t;
      if (!e || "string" != typeof e) return null;
      try {
        t = (new n.DOMParser).parseFromString(e, "text/xml")
      } catch (e) {
        t = void 0
      }
      return t && !t.getElementsByTagName("parsererror").length || le.error("Invalid XML: " + e), t
    };
    var wt = /#.*$/,
      kt = /([?&])_=[^&]*/,
      St = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ct = /^(?:GET|HEAD)$/,
      _t = /^\/\//,
      Rt = {},
      Et = {},
      Pt = "*/".concat("*"),
      At = Z.createElement("a");
    At.href = yt.href, le.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: yt.href,
        type: "GET",
        isLocal: xt.test(yt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Pt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": le.parseJSON,
          "text xml": le.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function(e, t) {
        return t ? K(K(e, le.ajaxSettings), t) : K(le.ajaxSettings, e)
      },
      ajaxPrefilter: q(Rt),
      ajaxTransport: q(Et),
      ajax: function(e, t) {
        function i(e, t, i, s) {
          var c, d, y, b, w, S = t;
          2 !== T && (T = 2, l && n.clearTimeout(l), r = void 0, o = s || "", k.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, i && (b = Y(p, k, i)), b = G(p, b, k, c), c ? (p.ifModified && (w = k.getResponseHeader("Last-Modified"), w && (le.lastModified[a] = w), (w = k.getResponseHeader("etag")) && (le.etag[a] = w)), 204 === e || "HEAD" === p.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = b.state, d = b.data, y = b.error, c = !y)) : (y = S, !e && S || (S = "error", e < 0 && (e = 0))), k.status = e, k.statusText = (t || S) + "", c ? m.resolveWith(h, [d, S, k]) : m.rejectWith(h, [k, S, y]), k.statusCode(v), v = void 0, u && f.trigger(c ? "ajaxSuccess" : "ajaxError", [k, p, c ? d : y]), g.fireWith(h, [k, S]), u && (f.trigger("ajaxComplete", [k, p]), --le.active || le.event.trigger("ajaxStop")))
        }
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var r, a, o, s, l, c, u, d, p = le.ajaxSetup({}, t),
          h = p.context || p,
          f = p.context && (h.nodeType || h.jquery) ? le(h) : le.event,
          m = le.Deferred(),
          g = le.Callbacks("once memory"),
          v = p.statusCode || {},
          y = {},
          b = {},
          T = 0,
          w = "canceled",
          k = {
            readyState: 0,
            getResponseHeader: function(e) {
              var t;
              if (2 === T) {
                if (!s)
                  for (s = {}; t = St.exec(o);) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()]
              }
              return null == t ? null : t
            },
            getAllResponseHeaders: function() {
              return 2 === T ? o : null
            },
            setRequestHeader: function(e, t) {
              var n = e.toLowerCase();
              return T || (e = b[n] = b[n] || e, y[e] = t), this
            },
            overrideMimeType: function(e) {
              return T || (p.mimeType = e), this
            },
            statusCode: function(e) {
              var t;
              if (e)
                if (T < 2)
                  for (t in e) v[t] = [v[t], e[t]];
                else k.always(e[k.status]);
              return this
            },
            abort: function(e) {
              var t = e || w;
              return r && r.abort(t), i(0, t), this
            }
          };
        if (m.promise(k).complete = g.add, k.success = k.done, k.error = k.fail, p.url = ((e || p.url || yt.href) + "").replace(wt, "").replace(_t, yt.protocol + "//"), p.type = t.method || t.type || p.method || p.type, p.dataTypes = le.trim(p.dataType || "*").toLowerCase().match(Se) || [""], null == p.crossDomain) {
          c = Z.createElement("a");
          try {
            c.href = p.url, c.href = c.href, p.crossDomain = At.protocol + "//" + At.host != c.protocol + "//" + c.host
          } catch (e) {
            p.crossDomain = !0
          }
        }
        if (p.data && p.processData && "string" != typeof p.data && (p.data = le.param(p.data, p.traditional)), z(Rt, p, t, k), 2 === T) return k;
        u = le.event && p.global, u && 0 == le.active++ && le.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Ct.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Tt.test(a) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = kt.test(a) ? a.replace(kt, "$1_=" + bt++) : a + (Tt.test(a) ? "&" : "?") + "_=" + bt++)), p.ifModified && (le.lastModified[a] && k.setRequestHeader("If-Modified-Since", le.lastModified[a]), le.etag[a] && k.setRequestHeader("If-None-Match", le.etag[a])), (p.data && p.hasContent && !1 !== p.contentType || t.contentType) && k.setRequestHeader("Content-Type", p.contentType), k.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Pt + "; q=0.01" : "") : p.accepts["*"]);
        for (d in p.headers) k.setRequestHeader(d, p.headers[d]);
        if (p.beforeSend && (!1 === p.beforeSend.call(h, k, p) || 2 === T)) return k.abort();
        w = "abort";
        for (d in {
            success: 1,
            error: 1,
            complete: 1
          }) k[d](p[d]);
        if (r = z(Et, p, t, k)) {
          if (k.readyState = 1, u && f.trigger("ajaxSend", [k, p]), 2 === T) return k;
          p.async && p.timeout > 0 && (l = n.setTimeout(function() {
            k.abort("timeout")
          }, p.timeout));
          try {
            T = 1, r.send(y, i)
          } catch (e) {
            if (!(T < 2)) throw e;
            i(-1, e)
          }
        } else i(-1, "No Transport");
        return k
      },
      getJSON: function(e, t, n) {
        return le.get(e, t, n, "json")
      },
      getScript: function(e, t) {
        return le.get(e, void 0, t, "script")
      }
    }), le.each(["get", "post"], function(e, t) {
      le[t] = function(e, n, i, r) {
        return le.isFunction(n) && (r = r || i, i = n, n = void 0), le.ajax(le.extend({
          url: e,
          type: t,
          dataType: r,
          data: n,
          success: i
        }, le.isPlainObject(e) && e))
      }
    }), le._evalUrl = function(e) {
      return le.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0
      })
    }, le.fn.extend({
      wrapAll: function(e) {
        var t;
        return le.isFunction(e) ? this.each(function(t) {
          le(this).wrapAll(e.call(this, t))
        }) : (this[0] && (t = le(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
          for (var e = this; e.firstElementChild;) e = e.firstElementChild;
          return e
        }).append(this)), this)
      },
      wrapInner: function(e) {
        return le.isFunction(e) ? this.each(function(t) {
          le(this).wrapInner(e.call(this, t))
        }) : this.each(function() {
          var t = le(this),
            n = t.contents();
          n.length ? n.wrapAll(e) : t.append(e)
        })
      },
      wrap: function(e) {
        var t = le.isFunction(e);
        return this.each(function(n) {
          le(this).wrapAll(t ? e.call(this, n) : e)
        })
      },
      unwrap: function() {
        return this.parent().each(function() {
          le.nodeName(this, "body") || le(this).replaceWith(this.childNodes)
        }).end()
      }
    }), le.expr.filters.hidden = function(e) {
      return !le.expr.filters.visible(e)
    }, le.expr.filters.visible = function(e) {
      return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Ht = /%20/g,
      It = /\[\]$/,
      Dt = /\r?\n/g,
      Ot = /^(?:submit|button|image|reset|file)$/i,
      Vt = /^(?:input|select|textarea|keygen)/i;
    le.param = function(e, t) {
      var n, i = [],
        r = function(e, t) {
          t = le.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
      if (void 0 === t && (t = le.ajaxSettings && le.ajaxSettings.traditional), le.isArray(e) || e.jquery && !le.isPlainObject(e)) le.each(e, function() {
        r(this.name, this.value)
      });
      else
        for (n in e) J(n, e[n], t, r);
      return i.join("&").replace(Ht, "+")
    }, le.fn.extend({
      serialize: function() {
        return le.param(this.serializeArray())
      },
      serializeArray: function() {
        return this.map(function() {
          var e = le.prop(this, "elements");
          return e ? le.makeArray(e) : this
        }).filter(function() {
          var e = this.type;
          return this.name && !le(this).is(":disabled") && Vt.test(this.nodeName) && !Ot.test(e) && (this.checked || !Ve.test(e))
        }).map(function(e, t) {
          var n = le(this).val();
          return null == n ? null : le.isArray(n) ? le.map(n, function(e) {
            return {
              name: t.name,
              value: e.replace(Dt, "\r\n")
            }
          }) : {
            name: t.name,
            value: n.replace(Dt, "\r\n")
          }
        }).get()
      }
    }), le.ajaxSettings.xhr = function() {
      try {
        return new n.XMLHttpRequest
      } catch (e) {}
    };
    var Mt = {
        0: 200,
        1223: 204
      },
      Nt = le.ajaxSettings.xhr();
    se.cors = !!Nt && "withCredentials" in Nt, se.ajax = Nt = !!Nt, le.ajaxTransport(function(e) {
      var t, i;
      if (se.cors || Nt && !e.crossDomain) return {
        send: function(r, a) {
          var o, s = e.xhr();
          if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
            for (o in e.xhrFields) s[o] = e.xhrFields[o];
          e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
          for (o in r) s.setRequestHeader(o, r[o]);
          t = function(e) {
            return function() {
              t && (t = i = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === e ? s.abort() : "error" === e ? "number" != typeof s.status ? a(0, "error") : a(s.status, s.statusText) : a(Mt[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {
                binary: s.response
              } : {
                text: s.responseText
              }, s.getAllResponseHeaders()))
            }
          }, s.onload = t(), i = s.onerror = t("error"), void 0 !== s.onabort ? s.onabort = i : s.onreadystatechange = function() {
            4 === s.readyState && n.setTimeout(function() {
              t && i()
            })
          }, t = t("abort");
          try {
            s.send(e.hasContent && e.data || null)
          } catch (e) {
            if (t) throw e
          }
        },
        abort: function() {
          t && t()
        }
      }
    }), le.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(e) {
          return le.globalEval(e), e
        }
      }
    }), le.ajaxPrefilter("script", function(e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), le.ajaxTransport("script", function(e) {
      if (e.crossDomain) {
        var t, n;
        return {
          send: function(i, r) {
            t = le("<script>").prop({
              charset: e.scriptCharset,
              src: e.url
            }).on("load error", n = function(e) {
              t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type)
            }), Z.head.appendChild(t[0])
          },
          abort: function() {
            n && n()
          }
        }
      }
    });
    var Bt = [],
      Ut = /(=)\?(?=&|$)|\?\?/;
    le.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var e = Bt.pop() || le.expando + "_" + bt++;
        return this[e] = !0, e
      }
    }), le.ajaxPrefilter("json jsonp", function(e, t, i) {
      var r, a, o, s = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
      if (s || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = le.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
        return o || le.error(r + " was not called"), o[0]
      }, e.dataTypes[0] = "json", a = n[r], n[r] = function() {
        o = arguments
      }, i.always(function() {
        void 0 === a ? le(n).removeProp(r) : n[r] = a, e[r] && (e.jsonpCallback = t.jsonpCallback, Bt.push(r)), o && le.isFunction(a) && a(o[0]), o = a = void 0
      }), "script"
    }), le.parseHTML = function(e, t, n) {
      if (!e || "string" != typeof e) return null;
      "boolean" == typeof t && (n = t, t = !1), t = t || Z;
      var i = ve.exec(e),
        r = !n && [];
      return i ? [t.createElement(i[1])] : (i = g([e], t, r), r && r.length && le(r).remove(), le.merge([], i.childNodes))
    };
    var Lt = le.fn.load;
    le.fn.load = function(e, t, n) {
      if ("string" != typeof e && Lt) return Lt.apply(this, arguments);
      var i, r, a, o = this,
        s = e.indexOf(" ");
      return s > -1 && (i = le.trim(e.slice(s)), e = e.slice(0, s)), le.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && le.ajax({
        url: e,
        type: r || "GET",
        dataType: "html",
        data: t
      }).done(function(e) {
        a = arguments, o.html(i ? le("<div>").append(le.parseHTML(e)).find(i) : e)
      }).always(n && function(e, t) {
        o.each(function() {
          n.apply(this, a || [e.responseText, t, e])
        })
      }), this
    }, le.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
      le.fn[t] = function(e) {
        return this.on(t, e)
      }
    }), le.expr.filters.animated = function(e) {
      return le.grep(le.timers, function(t) {
        return e === t.elem
      }).length
    }, le.offset = {
      setOffset: function(e, t, n) {
        var i, r, a, o, s, l, c, u = le.css(e, "position"),
          d = le(e),
          p = {};
        "static" === u && (e.style.position = "relative"), s = d.offset(), a = le.css(e, "top"), l = le.css(e, "left"), c = ("absolute" === u || "fixed" === u) && (a + l).indexOf("auto") > -1, c ? (i = d.position(), o = i.top, r = i.left) : (o = parseFloat(a) || 0, r = parseFloat(l) || 0), le.isFunction(t) && (t = t.call(e, n, le.extend({}, s))), null != t.top && (p.top = t.top - s.top + o), null != t.left && (p.left = t.left - s.left + r), "using" in t ? t.using.call(e, p) : d.css(p)
      }
    }, le.fn.extend({
      offset: function(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function(t) {
          le.offset.setOffset(this, e, t)
        });
        var t, n, i = this[0],
          r = {
            top: 0,
            left: 0
          },
          a = i && i.ownerDocument;
        if (a) return t = a.documentElement, le.contains(t, i) ? (r = i.getBoundingClientRect(), n = X(a), {
          top: r.top + n.pageYOffset - t.clientTop,
          left: r.left + n.pageXOffset - t.clientLeft
        }) : r
      },
      position: function() {
        if (this[0]) {
          var e, t, n = this[0],
            i = {
              top: 0,
              left: 0
            };
          return "fixed" === le.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), le.nodeName(e[0], "html") || (i = e.offset()), i.top += le.css(e[0], "borderTopWidth", !0), i.left += le.css(e[0], "borderLeftWidth", !0)), {
            top: t.top - i.top - le.css(n, "marginTop", !0),
            left: t.left - i.left - le.css(n, "marginLeft", !0)
          }
        }
      },
      offsetParent: function() {
        return this.map(function() {
          for (var e = this.offsetParent; e && "static" === le.css(e, "position");) e = e.offsetParent;
          return e || et
        })
      }
    }), le.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function(e, t) {
      var n = "pageYOffset" === t;
      le.fn[e] = function(i) {
        return Ce(this, function(e, i, r) {
          var a = X(e);
          if (void 0 === r) return a ? a[t] : e[i];
          a ? a.scrollTo(n ? a.pageXOffset : r, n ? r : a.pageYOffset) : e[i] = r
        }, e, i, arguments.length)
      }
    }), le.each(["top", "left"], function(e, t) {
      le.cssHooks[t] = H(se.pixelPosition, function(e, n) {
        if (n) return n = A(e, t), Xe.test(n) ? le(e).position()[t] + "px" : n
      })
    }), le.each({
      Height: "height",
      Width: "width"
    }, function(e, t) {
      le.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function(n, i) {
        le.fn[i] = function(i, r) {
          var a = arguments.length && (n || "boolean" != typeof i),
            o = n || (!0 === i || !0 === r ? "margin" : "border");
          return Ce(this, function(t, n, i) {
            var r;
            return le.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? le.css(t, n, o) : le.style(t, n, i, o)
          }, t, a ? i : void 0, a, null)
        }
      })
    }), le.fn.extend({
      bind: function(e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function(e, t) {
        return this.off(e, null, t)
      },
      delegate: function(e, t, n, i) {
        return this.on(t, e, n, i)
      },
      undelegate: function(e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
      },
      size: function() {
        return this.length
      }
    }), le.fn.andSelf = le.fn.addBack, i = [], void 0 !== (r = function() {
      return le
    }.apply(t, i)) && (e.exports = r);
    var Ft = n.jQuery,
      jt = n.$;
    return le.noConflict = function(e) {
      return n.$ === le && (n.$ = jt), e && n.jQuery === le && (n.jQuery = Ft), le
    }, a || (n.jQuery = n.$ = le), le
  })
}, function(e, t) {
  var n = 0,
    i = Math.random();
  e.exports = function(e) {
    return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + i).toString(36))
  }
}, function(e, t, n) {
  var i = n(58);
  e.exports = function(e, t, n) {
    if (i(e), void 0 === t) return e;
    switch (n) {
      case 1:
        return function(n) {
          return e.call(t, n)
        };
      case 2:
        return function(n, i) {
          return e.call(t, n, i)
        };
      case 3:
        return function(n, i, r) {
          return e.call(t, n, i, r)
        }
    }
    return function() {
      return e.apply(t, arguments)
    }
  }
}, function(e, t) {
  var n = {}.toString;
  e.exports = function(e) {
    return n.call(e).slice(8, -1)
  }
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(154),
    a = i(r),
    o = n(20),
    s = i(o),
    l = {
      theTradeDesk: 21,
      appNexus: 32,
      sharethrough: 80,
      criteo: 91,
      flashtalking: 78,
      jivox: 294
    },
    c = {
      21: [1, 2],
      32: [1],
      78: [1],
      80: [3, 5],
      91: [1, 2, 3],
      294: []
    },
    u = !1,
    d = !1,
    p = null,
    h = null,
    f = {
      get hasCMP() {
        return !!u
      },
      get gdprApplies() {
        return !!d
      },
      get consentData() {
        return p
      },
      get consentString() {
        return h
      },
      noConsentRequired: function() {
        f.registerConsentData({
          gdprApplies: !1,
          consentData: null,
          consentString: null
        })
      },
      registerNoCMP: function() {
        f.registerConsentData({
          gdprApplies: !0,
          consentData: null,
          consentString: null
        })
      },
      registerConsentData: function(e) {
        var t = e.gdprApplies,
          n = e.consentData,
          i = e.consentString;
        u = f.isValidConsentData(n), d = t, p = n, h = i
      },
      sharethroughAllowed: function() {
        return f.vendorAllowed(l.sharethrough)
      },
      criteoAllowed: function() {
        return f.vendorAllowed(l.criteo)
      },
      appNexusAllowed: function() {
        return f.vendorAllowed(l.appNexus)
      },
      tradeDeskAllowed: function() {
        return f.vendorAllowed(l.theTradeDesk)
      },
      flashtalkingAllowed: function() {
        return f.vendorAllowed(l.flashtalking)
      },
      jivoxAllowed: function() {
        return f.vendorAllowed(l.jivox)
      },
      vendorAllowed: function(e) {
        if (!f.gdprApplies) return !0;
        if (!f.consentString || !f.consentData || !f.consentData.vendorConsents) return !1;
        var t = 1 == f.consentData.vendorConsents[e],
          n = c[e].every(function(e) {
            return 1 == f.consentData.purposeConsents[e]
          });
        return t && n
      },
      isValidConsentData: function(e) {
        return e && e.vendorConsents && e.purposeConsents
      },
      setup: function(e, t) {
        return e ? "function" != typeof window.__cmp ? (f.registerNoCMP(), t()) : void s.default.all([f.getVendorConsents(), f.getConsentData()]).then(function(n) {
          var i = (0, a.default)(n, 2),
            r = i[0],
            o = i[1];
          f.registerConsentData({
            gdprApplies: e,
            consentData: r || void 0,
            consentString: o.consentData || void 0
          }), t()
        }) : (f.noConsentRequired(), t())
      },
      getVendorConsents: function() {
        return new s.default(function(e) {
          window.__cmp("getVendorConsents", null, function(t) {
            return e(t)
          })
        })
      },
      getConsentData: function() {
        return new s.default(function(e) {
          window.__cmp("getConsentData", null, function(t) {
            return e(t)
          })
        })
      }
    };
  e.exports = f
}, function(e, t, n) {
  var i = n(7).f,
    r = n(10),
    a = n(5)("toStringTag");
  e.exports = function(e, t, n) {
    e && !r(e = n ? e : e.prototype, a) && i(e, a, {
      configurable: !0,
      value: t
    })
  }
}, function(e, t) {
  e.exports = !0
}, function(e, t, n) {
  "use strict";
  var i = n(20),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i),
    a = STR.Vendor.$,
    o = {
      jsonGet: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new r.default(function(n, i) {
          a.ajax({
            url: e,
            data: t.data,
            xhrFields: {
              withCredentials: t.withCredentials || !1
            },
            cache: void 0 === t.cache || t.cache,
            dataType: t.dataType || "json",
            timeout: t.timeout || 0,
            jsonpCallback: t.jsonpCallback || void 0,
            success: function(e) {
              return n(t.success ? t.success(e) : e)
            },
            error: function(e, n, r) {
              return t.error ? i(t.error(e, n, r)) : i(e, n, r)
            }
          })
        })
      }
    };
  e.exports = o
}, function(e, t) {
  t.f = {}.propertyIsEnumerable
}, function(e, t) {
  e.exports = function(e) {
    if (void 0 == e) throw TypeError("Can't call method on  " + e);
    return e
  }
}, function(e, t) {
  var n = Math.ceil,
    i = Math.floor;
  e.exports = function(e) {
    return isNaN(e = +e) ? 0 : (e > 0 ? i : n)(e)
  }
}, function(e, t, n) {
  var i = n(37)("keys"),
    r = n(25);
  e.exports = function(e) {
    return i[e] || (i[e] = r(e))
  }
}, function(e, t, n) {
  "use strict";
  var i = n(89)(!0);
  n(59)(String, "String", function(e) {
    this._t = String(e), this._i = 0
  }, function() {
    var e, t = this._t,
      n = this._i;
    return n >= t.length ? {
      value: void 0,
      done: !0
    } : (e = i(t, n), this._i += e.length, {
      value: e,
      done: !1
    })
  })
}, function(e, t, n) {
  var i = n(6),
    r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
  e.exports = function(e) {
    return r[e] || (r[e] = {})
  }
}, function(e, t) {
  e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function r() {
    return STR.Tag.Version.match(p) ? STR.Tag.Version : "production"
  }

  function a() {
    var e = document.createElement("script");
    e.src = d, document.body.appendChild(e)
  }
  var o = n(20),
    s = i(o),
    l = n(48),
    c = i(l),
    u = n(53),
    d = "https://cdnjs.cloudflare.com/ajax/libs/airbrake-js/1.4.1/client.min.js",
    p = /^development|^ci/,
    h = null,
    f = {
      sample: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        u.should(.001) && (e instanceof Error ? f.log(e, t) : f.log((0, c.default)(e), t))
      },
      log: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t.pKey && "%%PATTERN:strnativekey%%" === t.pKey ? s.default.resolve("illegal macro") : f.getAirbrakeClient().then(function(n) {
          n.notify({
            error: e,
            context: {
              version: STR.Tag.Version,
              options: t
            }
          })
        })
      },
      getAirbrakeClient: function() {
        return h || (h = new s.default(function(e, t) {
          a();
          var n = setInterval(function() {
            if ("undefined" != typeof airbrakeJs) {
              clearInterval(n);
              var t = new airbrakeJs.Client({
                projectId: 189213,
                projectKey: "ebc34e84264c326b1b68b9a69d2ab7b1",
                ignoreWindowError: !0,
                environment: r()
              });
              e(t)
            }
          }, 100)
        }))
      }
    };
  e.exports = f
}, function(e, t, n) {
  var i = n(15);
  e.exports = function(e, t) {
    if (!i(e)) return e;
    var n, r;
    if (t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
    if ("function" == typeof(n = e.valueOf) && !i(r = n.call(e))) return r;
    if (!t && "function" == typeof(n = e.toString) && !i(r = n.call(e))) return r;
    throw TypeError("Can't convert object to primitive value")
  }
}, function(e, t, n) {
  var i = n(33);
  e.exports = function(e) {
    return Object(i(e))
  }
}, function(e, t, n) {
  var i = n(15),
    r = n(6).document,
    a = i(r) && i(r.createElement);
  e.exports = function(e) {
    return a ? r.createElement(e) : {}
  }
}, function(e, t, n) {
  t.f = n(5)
}, function(e, t, n) {
  var i = n(6),
    r = n(2),
    a = n(30),
    o = n(43),
    s = n(7).f;
  e.exports = function(e) {
    var t = r.Symbol || (r.Symbol = a ? {} : i.Symbol || {});
    "_" == e.charAt(0) || e in t || s(t, e, {
      value: o.f(e)
    })
  }
}, function(e, t, n) {
  e.exports = {
    default: n(210),
    __esModule: !0
  }
}, function(e, t, n) {
  "use strict";
  var i = n(136),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i),
    a = ["ncLjr", "4b7j3", "YxyWM", "ogTxK", "3kQoU"],
    o = ["Ft3zX", "1fgKH", "3MokL", "6ErXi", "9TieW", "FrR3b", "uvMHU", "ZFBnD", "4psMs", "hpqe6", "98rQ8", "iPhJm"],
    s = ["ZYSdP", "hJcc1", "RHQqG", "BJ9B5", "8JcSr", "qZxDJ", "dAhUS", "z2n7D", "3auML", "GGaUn", "hZot8", "hbH7c", "txnASL3ZCbrHifK3y9766PJK", "n1hSN", "pURiW", "2wBCi", "1659Y", "NamGS", "sdzMt", "dBhV4", "E6gop", "bMnqS", "KJUjJ", "9zkbK", "qqYe2", "fuxfu", "wRgA6", "yTDdx", "iLiWs"],
    l = {
      KZChn: "PURPOSE AND SAFETY SUMMARY"
    },
    c = ["JZypX"],
    u = {
      zjCxH: {
        event: "impression",
        url: "https://ev.surveywall-api.survata.com/s?eid=bbb14911-5285-4c1b-8fa2-ea933221f781&cid=%%TTD_ADGROUPID%%,%%TTD_CAMPAIGNID%%,%%TTD_CREATIVEID%%,noValue,%%TTD_SITE%%,&did=%%TTD_DEVICEID%%"
      },
      K2Xa1: {
        event: "impression",
        url: "https://ev.surveywall-api.survata.com/s?eid=91b6019e-ff0c-4244-b3e2-d3f377e03317"
      },
      "4hW85": {
        event: "impression",
        url: "https://in.qbk1.com/p/1.gif?campaignid=TFYTlRDwt9&clientid=TJX&c=2&did=%%TTD_DEVICEID%%&lat=%%TTD_LAT%%&lng=%%TTD_LONG%%&sid=%%TTD_CREATIVEID%%&sid2=%%TTD_ZIPCODE%%&iid=[IID]"
      },
      dBCUn: {
        event: "visible",
        url: "https://p.placed.com/api/v2/sync/impression?partner=sharethrough&version=1.0&plaid=a919dir-sthomedsept&payload_campaign_identifier=homedepot&payload_timestamp=MACRO_TIMESTAMP&payload_type=impression"
      },
      t63nh: {
        event: "visible",
        url: "https://p.placed.com/api/v2/sync/impression?partner=sharethrough&version=1.0&plaid=a919dir-sthomedsept&payload_campaign_identifier=homedepot&payload_timestamp=MACRO_TIMESTAMP&payload_type=impression"
      },
      UDuA7: {
        event: "visible",
        url: "https://ev.surveywall-api.survata.com/s?eid=44038848-4f82-4d6b-a7f7-7cb792d02e7f"
      },
      "7hiY1": {
        event: "visible",
        url: "https://ev.surveywall-api.survata.com/s?eid=44038848-4f82-4d6b-a7f7-7cb792d02e7f"
      },
      "3y8FC": {
        event: "visible",
        url: "https://ev.surveywall-api.survata.com/s?eid=44038848-4f82-4d6b-a7f7-7cb792d02e7f"
      },
      Y7irC: {
        event: "visible",
        url: "https://ev.surveywall-api.survata.com/s?eid=44038848-4f82-4d6b-a7f7-7cb792d02e7f"
      },
      "7noAH": {
        event: "visible",
        url: "https://ev.surveywall-api.survata.com/s?eid=44038848-4f82-4d6b-a7f7-7cb792d02e7f&cid=%eaid!,%ebuy!,%ecid!,%epid!,%%SITE%%,&did=%%ADVERTISING_IDENTIFIER_PLAIN%%"
      },
      LphDz: {
        event: "visible",
        url: "https://ev.surveywall-api.survata.com/s?eid=44038848-4f82-4d6b-a7f7-7cb792d02e7f&cid=%eaid!,%ebuy!,%ecid!,%epid!,%%SITE%%,&did=%%ADVERTISING_IDENTIFIER_PLAIN%%"
      },
      BjwW5: {
        event: "visible",
        url: "https://ev.surveywall-api.survata.com/s?eid=44038848-4f82-4d6b-a7f7-7cb792d02e7f&cid=%eaid!,%ebuy!,%ecid!,%epid!,%%SITE%%,&did=%%ADVERTISING_IDENTIFIER_PLAIN%%"
      },
      WYZXU: {
        event: "visible",
        url: "https://ev.surveywall-api.survata.com/s?eid=44038848-4f82-4d6b-a7f7-7cb792d02e7f&cid=%eaid!,%ebuy!,%ecid!,%epid!,%%SITE%%,&did=%%ADVERTISING_IDENTIFIER_PLAIN%%"
      },
      sM4ji: {
        event: "visible",
        url: "https://ev.surveywall-api.survata.com/s?eid=0d7b8a00-767c-4179-8224-863d27ffeb7b&cid=noValue,noValue,noValue,noValue,noValue,&did=noValue"
      }
    },
    d = ["F5rBN"],
    p = ["F5rBN"],
    h = function(e) {
      var t = u[e.deal_id];
      t && (e.beacons[t.event] = [].concat((0, r.default)(e.beacons[t.event]), [t.url]))
    },
    f = {
      OUT_OF_VIEW_PAUSE_THRESHOLD: .5,
      shouldPauseOutOfView: function(e) {
        return a.indexOf(e) >= 0
      },
      shouldNotPauseOutOfView: function(e) {
        return o.indexOf(e) >= 0
      },
      shouldContainThumbnail: function(e) {
        return s.indexOf(e) >= 0
      },
      shouldOnlyRenderBannerThumbnail: function(e) {
        return c.indexOf(e) >= 0
      },
      isiHeadlineSwap: function(e) {
        return l[e] || null
      },
      shouldHideAdvertiser: function(e) {
        return d.indexOf(e) >= 0
      },
      shouldNotExpandVideo: function(e) {
        return p.indexOf(e) >= 0
      },
      appendResearchBeacon: h
    };
  e.exports = f
}, function(e, t, n) {
  n(83);
  for (var i = n(6), r = n(12), a = n(18), o = n(5)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
    var c = s[l],
      u = i[c],
      d = u && u.prototype;
    d && !d[o] && r(d, o, c), a[c] = a.Array
  }
}, function(e, t, n) {
  e.exports = {
    default: n(93),
    __esModule: !0
  }
}, function(e, t, n) {
  var i = n(11),
    r = n(81),
    a = n(38),
    o = n(35)("IE_PROTO"),
    s = function() {},
    l = function() {
      var e, t = n(42)("iframe"),
        i = a.length;
      for (t.style.display = "none", n(71).appendChild(t), t.src = "javascript:", e = t.contentWindow.document, e.open(), e.write("<script>document.F=Object<\/script>"), e.close(), l = e.F; i--;) delete l.prototype[a[i]];
      return l()
    };
  e.exports = Object.create || function(e, t) {
    var n;
    return null !== e ? (s.prototype = i(e), n = new s, s.prototype = null, n[o] = e) : n = l(), void 0 === t ? n : r(n, t)
  }
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o),
    l = function(e, t) {
      void 0 !== window.Audit && void 0 === window.Audit.timing.audit[e] && (window.Audit.timing.audit[e] = t)
    },
    c = function() {
      return window.Audit ? window.Audit.t0 : -1
    },
    u = function() {
      function e() {
        (0, a.default)(this, e)
      }
      return (0, s.default)(e, null, [{
        key: "init",
        value: function() {
          void 0 === window.Audit && (window.Audit = {
            sdk: "clientjs",
            t0: e.now(),
            timing: {
              audit: {}
            }
          })
        }
      }, {
        key: "getTimeOrigin",
        value: function() {
          return c()
        }
      }, {
        key: "now",
        value: function() {
          return void 0 !== window.performance && void 0 !== window.performance.now ? window.performance.now() : 0
        }
      }, {
        key: "time",
        value: function() {
          return e.now() - c()
        }
      }, {
        key: "assign",
        value: function(e, t) {
          l(e, t)
        }
      }, {
        key: "tick",
        value: function(t) {
          l(t, e.now() - c())
        }
      }, {
        key: "getTime",
        value: function(e) {
          return window.Audit.timing.audit[e] || void 0
        }
      }]), e
    }(),
    d = {},
    p = function() {
      function e(t) {
        (0, a.default)(this, e), this.start = u.now(), this.end = -1, this.type = t, d[t] = this
      }
      return (0, s.default)(e, [{
        key: "stop",
        value: function() {
          return this.end = u.now(), l(this.type, this.end - this.start), this
        }
      }], [{
        key: "retrieve",
        value: function(t) {
          return d[t] || new e("_default")
        }
      }]), e
    }();
  e.exports = {
    Audit: u,
    AuditTimer: p
  }
}, function(e, t, n) {
  "use strict";
  var i = n(143),
    r = i({
      uidType: "apnxsuid",
      uid: "",
      status: "uninitialized"
    }),
    a = i({
      uidType: "rtusuid",
      uid: "",
      status: "uninitialized"
    }),
    o = i({
      uidType: "ttduid",
      uid: "",
      status: "uninitialized"
    }),
    s = {
      criteo: a,
      appNexus: r,
      ttd: o,
      isReady: function() {
        return a.isReady() && r.isReady() && o.isReady()
      },
      uids: function() {
        return {
          criteo: a.uid,
          appNexus: r.uid,
          ttd: o.uid
        }
      },
      adServerParams: function() {
        var e = {};
        return [a, r, o].filter(function(e) {
          return null != e.uid && e.uid.length > 0
        }).forEach(function(t) {
          e[t.uidType] = t.uid
        }), e
      }
    };
  e.exports = s
}, function(e, t) {
  t.f = Object.getOwnPropertySymbols
}, function(e, t, n) {
  "use strict";
  var i = {
    should: function(e) {
      if (0 == e) return !1;
      var t = 1 / e;
      return 1 === Math.floor(Math.random() * t + 1)
    },
    assignRandomGroup: function(e) {
      return Math.floor(Math.random() * e)
    }
  };
  e.exports = i
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var i = n(65),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i);
  t.default = function(e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" !== (void 0 === t ? "undefined" : (0, r.default)(t)) && "function" != typeof t ? e : t
  }
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.__esModule = !0;
  var r = n(45),
    a = i(r),
    o = n(212),
    s = i(o);
  t.default = function e(t, n, i) {
    null === t && (t = Function.prototype);
    var r = (0, s.default)(t, n);
    if (void 0 === r) {
      var o = (0, a.default)(t);
      return null === o ? void 0 : e(o, n, i)
    }
    if ("value" in r) return r.value;
    var l = r.get;
    if (void 0 !== l) return l.call(i)
  }
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.__esModule = !0;
  var r = n(215),
    a = i(r),
    o = n(219),
    s = i(o),
    l = n(65),
    c = i(l);
  t.default = function(e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, c.default)(t)));
    e.prototype = (0, s.default)(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (a.default ? (0, a.default)(e, t) : e.__proto__ = t)
  }
}, function(e, t, n) {
  "use strict";
  var i = {
    createElement: function(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = document.createElement(e);
      for (var i in t) n[i] = t[i];
      return n
    },
    bundleElements: function(e, t) {
      return t.forEach(function(t) {
        return e.appendChild(t)
      }), e
    }
  };
  e.exports = i
}, function(e, t) {
  e.exports = function(e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");
    return e
  }
}, function(e, t, n) {
  "use strict";
  var i = n(30),
    r = n(14),
    a = n(62),
    o = n(12),
    s = n(10),
    l = n(18),
    c = n(86),
    u = n(29),
    d = n(73),
    p = n(5)("iterator"),
    h = !([].keys && "next" in [].keys()),
    f = function() {
      return this
    };
  e.exports = function(e, t, n, m, g, v, y) {
    c(n, t, m);
    var b, T, w, k = function(e) {
        if (!h && e in _) return _[e];
        switch (e) {
          case "keys":
          case "values":
            return function() {
              return new n(this, e)
            }
        }
        return function() {
          return new n(this, e)
        }
      },
      S = t + " Iterator",
      x = "values" == g,
      C = !1,
      _ = e.prototype,
      R = _[p] || _["@@iterator"] || g && _[g],
      E = R || k(g),
      P = g ? x ? k("entries") : E : void 0,
      A = "Array" == t ? _.entries || R : R;
    if (A && (w = d(A.call(new e))) !== Object.prototype && (u(w, S, !0), i || s(w, p) || o(w, p, f)), x && R && "values" !== R.name && (C = !0, E = function() {
        return R.call(this)
      }), i && !y || !h && !C && _[p] || o(_, p, E), l[t] = E, l[S] = f, g)
      if (b = {
          values: x ? E : k("values"),
          keys: v ? E : k("keys"),
          entries: P
        }, y)
        for (T in b) T in _ || a(_, T, b[T]);
      else r(r.P + r.F * (h || C), t, b);
    return b
  }
}, function(e, t, n) {
  var i = n(34),
    r = Math.min;
  e.exports = function(e) {
    return e > 0 ? r(i(e), 9007199254740991) : 0
  }
}, function(e, t, n) {
  e.exports = !n(8) && !n(16)(function() {
    return 7 != Object.defineProperty(n(42)("div"), "a", {
      get: function() {
        return 7
      }
    }).a
  })
}, function(e, t, n) {
  e.exports = n(12)
}, function(e, t, n) {
  var i = n(10),
    r = n(9),
    a = n(87)(!1),
    o = n(35)("IE_PROTO");
  e.exports = function(e, t) {
    var n, s = r(e),
      l = 0,
      c = [];
    for (n in s) n != o && i(s, n) && c.push(n);
    for (; t.length > l;) i(s, n = t[l++]) && (~a(c, n) || c.push(n));
    return c
  }
}, function(e, t, n) {
  "use strict";
  var i = {
    debounce: function(e, t, n) {
      var i = null;
      return function() {
        for (var r = arguments.length, a = Array(r), o = 0; o < r; o++) a[o] = arguments[o];
        var s = this,
          l = function() {
            return n || e.apply(s, a), i = null
          };
        return i ? clearTimeout(i) : n && e.apply(s, a), i = setTimeout(l, t || 100)
      }
    },
    throttle: function(e, t) {
      var n = !1;
      return function() {
        if (!n) return e.call(), n = !0, setTimeout(function() {
          return n = !1
        }, t)
      }
    },
    isNative: function(e) {
      return !!e.toString().match(/\[native code\]/)
    }
  };
  e.exports = i
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.__esModule = !0;
  var r = n(94),
    a = i(r),
    o = n(96),
    s = i(o),
    l = "function" == typeof s.default && "symbol" == typeof a.default ? function(e) {
      return typeof e
    } : function(e) {
      return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : typeof e
    };
  t.default = "function" == typeof s.default && "symbol" === l(a.default) ? function(e) {
    return void 0 === e ? "undefined" : l(e)
  } : function(e) {
    return e && "function" == typeof s.default && e.constructor === s.default && e !== s.default.prototype ? "symbol" : void 0 === e ? "undefined" : l(e)
  }
}, function(e, t, n) {
  var i = n(63),
    r = n(38).concat("length", "prototype");
  t.f = Object.getOwnPropertyNames || function(e) {
    return i(e, r)
  }
}, function(e, t, n) {
  var i = n(32),
    r = n(21),
    a = n(9),
    o = n(40),
    s = n(10),
    l = n(61),
    c = Object.getOwnPropertyDescriptor;
  t.f = n(8) ? c : function(e, t) {
    if (e = a(e), t = o(t, !0), l) try {
      return c(e, t)
    } catch (e) {}
    if (s(e, t)) return r(!i.f.call(e, t), e[t])
  }
}, function(e, t, n) {
  "use strict";
  var i = n(20),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i);
  n(0), n(1), STR.Tag.Helpers.Html5Video = {
    generateObjectMarkup: function(e, t, n, i) {
      var r = STR.Vendor.$("<video>").attr("width", t).attr("height", n).attr("class", "str-html5video-player").attr("playsinline", "true").attr("src", e.media_url).attr("poster", e.thumbnail_url);
      return i ? r.attr("muted", "true") : r.attr("controls", "true"), r
    },
    safePlay: function(e) {
      var t = e.play();
      return t && t.then ? t.catch(function(e) {
        return console.error(e)
      }) : r.default.resolve()
    }
  }, e.exports = STR.Tag.Helpers.Html5Video
}, function(e, t, n) {
  "use strict";
  var i = n(106),
    r = n(209),
    a = n(107),
    o = {
      create: function(e) {
        var t = e.creative,
          n = e.tracker,
          o = e.element,
          s = e.guid,
          l = e.preExpanded,
          c = void 0 !== l && l,
          u = e.oneClickPlay,
          d = void 0 !== u && u,
          p = e.placementIndex,
          h = e.placementKey;
        return i.isSafeFrame() ? new r(t, n, o, s, c, d, p, h) : new a(t, n, o, s, c, d, p, h)
      }
    };
  e.exports = o
}, function(e, t, n) {
  "use strict";
  var i = n(22),
    r = n(53),
    a = {
      enabled: function(e) {
        if ("loading_spinner" === e) return i.getParameterByName("loading_spinner") && i.getParameterByName("str_modify");
        if ("moat_video" === e) {
          return i.getParameterByName("str_modify") && i.getParameterByName("moat_video") || r.should(.05)
        }
        return !1
      }
    };
  e.exports = a
}, function(e, t, n) {
  e.exports = n(6).document && document.documentElement
}, function(e, t, n) {
  var i = n(27);
  e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
    return "String" == i(e) ? e.split("") : Object(e)
  }
}, function(e, t, n) {
  var i = n(10),
    r = n(41),
    a = n(35)("IE_PROTO"),
    o = Object.prototype;
  e.exports = Object.getPrototypeOf || function(e) {
    return e = r(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null
  }
}, function(e, t) {}, function(e, t, n) {
  e.exports = {
    default: n(189),
    __esModule: !0
  }
}, function(e, t, n) {
  var i, r, a, o = n(26),
    s = n(150),
    l = n(71),
    c = n(42),
    u = n(6),
    d = u.process,
    p = u.setImmediate,
    h = u.clearImmediate,
    f = u.MessageChannel,
    m = 0,
    g = {},
    v = function() {
      var e = +this;
      if (g.hasOwnProperty(e)) {
        var t = g[e];
        delete g[e], t()
      }
    },
    y = function(e) {
      v.call(e.data)
    };
  p && h || (p = function(e) {
    for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
    return g[++m] = function() {
      s("function" == typeof e ? e : Function(e), t)
    }, i(m), m
  }, h = function(e) {
    delete g[e]
  }, "process" == n(27)(d) ? i = function(e) {
    d.nextTick(o(v, e, 1))
  } : f ? (r = new f, a = r.port2, r.port1.onmessage = y, i = o(a.postMessage, a, 1)) : u.addEventListener && "function" == typeof postMessage && !u.importScripts ? (i = function(e) {
    u.postMessage(e + "", "*")
  }, u.addEventListener("message", y, !1)) : i = "onreadystatechange" in c("script") ? function(e) {
    l.appendChild(c("script")).onreadystatechange = function() {
      l.removeChild(this), v.call(e)
    }
  } : function(e) {
    setTimeout(o(v, e, 1), 0)
  }), e.exports = {
    set: p,
    clear: h
  }
}, function(e, t, n) {
  var i = n(25)("meta"),
    r = n(15),
    a = n(10),
    o = n(7).f,
    s = 0,
    l = Object.isExtensible || function() {
      return !0
    },
    c = !n(16)(function() {
      return l(Object.preventExtensions({}))
    }),
    u = function(e) {
      o(e, i, {
        value: {
          i: "O" + ++s,
          w: {}
        }
      })
    },
    d = function(e, t) {
      if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
      if (!a(e, i)) {
        if (!l(e)) return "F";
        if (!t) return "E";
        u(e)
      }
      return e[i].i
    },
    p = function(e, t) {
      if (!a(e, i)) {
        if (!l(e)) return !0;
        if (!t) return !1;
        u(e)
      }
      return e[i].w
    },
    h = function(e) {
      return c && f.NEED && l(e) && !a(e, i) && u(e), e
    },
    f = e.exports = {
      KEY: i,
      NEED: !1,
      fastKey: d,
      getWeak: p,
      onFreeze: h
    }
}, function(e, t, n) {
  var i = n(14),
    r = n(2),
    a = n(16);
  e.exports = function(e, t) {
    var n = (r.Object || {})[e] || Object[e],
      o = {};
    o[e] = t(n), i(i.S + i.F * a(function() {
      n(1)
    }), "Object", o)
  }
}, function(e, t, n) {
  var i, r, a, o, s, l, c, u, d, p, h, f, m, g, v, y = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(13), n(178), h = n(135), c = n(91), f = n(109), r = n(31), d = n(70), u = n(39), p = n(22), l = n(46), g = n(137), a = n(230), v = n(50), o = v.Audit, s = v.AuditTimer, i = STR.Vendor.$, m = STR.Vendor.Mustache, STR.Tag.Views.AdUnit = function() {
    function e(e, t, n, a) {
      this.handleClick = y(this.handleClick, this), this.appendScriptsTo = y(this.appendScriptsTo, this), this.setFeatureFlags = y(this.setFeatureFlags, this), this.render = y(this.render, this);
      var o, s, l;
      this.creative = e.creative, this.creativePayload = e, this.element = t, this.$element = i(t), this.placementIndex = STR.Tag.Helpers.HtmlUtility.getDomPlacementIndex(this.$element), this.placementKey = n, this.placement = a.placement, this.template = this.getAdUnitTemplate(a), this.messageId = a.messageId, o = this.$element.find("div[data-str-click-tracker]").addBack("div[data-str-click-tracker]").data("str-click-tracker"), o && this.creative.beacons.click.push(o), this.creative.jsTracker || (this.creative.jsTracker = this.$element.find("div[data-str-js-tracker]").addBack("div[data-str-js-tracker]").data("str-js-tracker")), s = this.creative.creative_key + "-" + this.placementKey + "-" + this.placementIndex, this.guid = s.replace(/[^a-zA-Z0-9]/g, ""), this.placeholderImage = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", this.delayedRenderPixelOffset = 0, l = this.element.querySelector("div[data-dfp-line-item]"), l && (this.dfpLineItemId = l.getAttribute("data-dfp-line-item")), r.jsonGet(f.getMoatTagUrl(this.creative, this.placement, this.placementKey, this.placementIndex), {
        dataType: "script"
      })
    }
    return e.prototype.EMBED_MINIMUM_WIDTH = 225, e.prototype.SHARE_LABEL_MIN_WIDTH = 360, e.prototype.render = function() {
      return this.fireRenderStartEvent(), this.setFeatureFlags(), this.creative = a.swap(this.creative), l.appendResearchBeacon(this.creative), this.swapTagWithRenderedCreative(), !this.creative.advertiser && this.element.querySelector(".str-advertiser") && (this.element.querySelector(".str-advertiser").style.display = "none"), !this.creative.brand_logo_url && this.element.querySelector(".str-brand-logo") && (this.element.querySelector(".str-brand-logo").style.display = "none"), this.$element.addClass("str-adunit"), this.$element.on("click", this.handleClick), this.tracker = this.getTracker(), s.retrieve("rendering").stop(), new s("visible"), o.tick("total"), this.postRender()
    }, e.prototype.setFeatureFlags = function() {
      if (this.creative.shouldExperimentLoadingSpinner = d.enabled("loading_spinner"), ["clickout", "article"].indexOf(this.creative.action) >= 0) return this.creative.shouldContainThumbnail = l.shouldContainThumbnail(this.creative.deal_id)
    }, e.prototype.getTracker = function() {
      return new STR.Tag.Models.ViewTracker({
        element: this.element,
        creativeKey: this.creative.creative_key,
        variantKey: this.creative.variant_key,
        placementKey: this.placementKey,
        beacons: this.creative.beacons,
        beaconMetaData: this.creative.beaconMetaData,
        price: this.creativePayload.price,
        priceType: this.creativePayload.priceType,
        priceSignature: this.creativePayload.signature,
        inPlace: this.inPlace(),
        placementIndex: this.placementIndex,
        placementStatus: this.creative.placementStatus,
        arid: this.creative.arid,
        awid: this.creativePayload.auctionWinId,
        deal_id: null != this.creative.deal_id ? this.creative.deal_id : void 0,
        featuredContent: this.creative.featured_content,
        messageId: this.messageId,
        renderPixelOffset: this.delayedRenderPixelOffset,
        action: this.creative.action,
        isVast: !!this.creative.vast_url,
        tkey: this.placement.placementAttributes.template_key,
        dfpLineItemId: this.dfpLineItemId
      })
    }, e.prototype.postRender = function() {
      var e;
      return this.tracker.fireWinNotifications(), this.tracker.fireImpressionBeacons(), e = new STR.Tag.Helpers.VisibilityHelper(this.creative, this.element, this.placementKey, this.placement, this.tracker, this.placementIndex), e.insertThirdPartyTags(), STR.Tag.Models.LatencyTracker.end("renderTime"), this.checkAdUnitCropped()
    }, e.prototype.swapTagWithRenderedCreative = function() {
      var e, t, n, r;
      n = this.adUnitBeforeEnterDom(), e = n[0], r = n[1];
      try {
        return this.element.parentNode.replaceChild(e, this.element), this.element = e, this.$element = i(this.element), this.appendScriptsTo(this.element, r), this.adUnitAfterEnterDom()
      } catch (e) {
        return t = e, u.sample(t, {
          function: "STR.Tag.Views.AdUnit.swapTagWithRenderedCreative"
        })
      }
    }, e.prototype.appendScriptsTo = function(e, t) {
      return t.forEach(function(t) {
        return function(t) {
          var n, i;
          return i = document.createElement("script"), n = document.createTextNode(t.innerText), i.appendChild(n), e.appendChild(i)
        }
      }())
    }, e.prototype.adUnitBeforeEnterDom = function() {
      var e, t, n, r, a, o, s, u, d, f, g, v, y, b;
      for (this.updateThumbnailUrl(), this.creative.impression_html && (r = this.template.lastIndexOf("<"), this.template = [this.template.slice(0, r), i("<div/>").html(this.creative.impression_html).text(), this.template.slice(r)].join("")), this.creative.rendered_time = Date.now(), t = m.render(this.template, this.creative).trim(), u = p.createHTMLElFromString(t), e = u[0], b = u[1], a = 0, s = b.length; a < s; a++) y = b[a], "custom_card_options" === y.id && (n = y);
      return null !== n && void 0 !== n && this.setCustomOptions(n), ((null != (d = this.creative.isi) && null != (f = d.text) ? f.length : void 0) > 0 || c.shouldForce("isi")) && (o = (null != (g = this.creative.isi) ? g.text : void 0) || c.ISI_EXAMPLE_TEXT, h.appendTo(e, o, null != (v = this.creative.isi) ? v.autoscroll : void 0, l.isiHeadlineSwap(this.creative.deal_id))), this.creative.directSold || this.placeOptOut(e), this.addDataAttributes(e), e.style.cursor = "pointer", [e, b]
    }, e.prototype.creativeShouldInstantPlay = function() {
      var e;
      return -1 !== ["hosted-video", "outstream", "native-outstream"].indexOf(this.creative.action) && (e = !this.creative.force_click_to_play && !!this.placement.allowInstantPlay && !this.$element.hasClass("str-no-instant"), this.creative.vast_url && "" !== this.creative.vast_url ? e && this.thumbnailWidth() >= this.EMBED_MINIMUM_WIDTH : e)
    }, e.prototype.setCustomOptions = function(e) {
      var t;
      if ("SCRIPT" === e.tagName && "custom_card_options" === e.id) try {
        return this.creative.custom = JSON.parse(e.innerText)
      } catch (e) {
        return t = e, console.error(t)
      }
    }, e.prototype.adUnitAfterEnterDom = function() {
      return this.updateThumbnailAfterEnterDom(), this.addLabels(), STR.Tag.Helpers.TextHelper.clampText()
    }, e.prototype.checkAdUnitCropped = function() {
      var e, t;
      if (e = this.$element[0], t = this.evaluateCropping(e), t.isCropped) return this.tracker.trackEvent("adUnitCropped", t.deltas)
    }, e.prototype.evaluateCropping = function(e) {
      var t, n, i, r, a, o, s;
      return e.parentNode && e.parentNode.getBoundingClientRect() ? (s = e.getBoundingClientRect(), o = e.parentNode.getBoundingClientRect(), r = s.top - o.top || 0, n = s.left - o.left || 0, t = s.bottom - o.bottom || 0, i = s.right - o.right || 0, a = r < 0 || n < 0 || t > 0 || i > 0, {
        isCropped: a,
        deltas: {
          croppedDeltaTop: r < 0 ? Math.floor(r) : 0,
          croppedDeltaLeft: n < 0 ? Math.floor(n) : 0,
          croppedDeltaBottom: t > 0 ? Math.floor(t) : 0,
          croppedDeltaRight: i > 0 ? Math.floor(i) : 0
        }
      }) : {}
    }, e.prototype.updateThumbnailAfterEnterDom = function() {
      var e;
      if (e = this.getThumbnailElement(), this.chooseAlternateThumbnail(e), this.placeThumbnailWrapperAndSource(e), 0 === this.creative.thumbnail_fillimages || this.creative.shouldContainThumbnail) return this.setContainCSS(e[0])
    }, e.prototype.placeThumbnailWrapperAndSource = function(e) {
      var t, n;
      return this.adjustThumbnailAspectRatio(e), n = Math.max(e.outerWidth(), 1), t = Math.max(e.outerHeight(), 1), this.placeWrapper(e, n, t), this.updateThumbnail(e)
    }, e.prototype.updateThumbnail = function(e) {
      return STR.Tag.Helpers.AdUnitHelper.shouldCropThumbnail(this.placement, this.creative) && (this.creative.thumbnail_url = STR.Tag.Helpers.AdUnitHelper.imgixThumbnailUrlForElement(this.creative.original_thumbnail_url, e)), this.setThumbnailUrl(e, this.creative.thumbnail_url)
    }, e.prototype.setThumbnailUrl = function(e, t) {
      var n;
      return this.creative.shouldExperimentLoadingSpinner ? (n = new g(e[0], t), n.render()) : e.is("img") ? e.attr("src", t) : e.css("background-image", "url(" + t + ")")
    }, e.prototype.adjustThumbnailAspectRatio = function(e) {
      var t, n;
      if (this.creative.video_aspect_ratio && ["6dc2ae98", "160993bb", "70d37b90", "8edfb47c", "h1N5areUA6UmvQ5YSGPz5QrG", "preview-key"].indexOf(this.placementKey) >= 0) return n = e.outerWidth(), t = n * this.creative.video_aspect_ratio, e.outerHeight(t)
    }, e.prototype.setContainCSS = function(e) {
      return e.style.backgroundSize = "contain", e.style.backgroundRepeat = "no-repeat", e.style.backgroundPosition = "center center", e.style.backgroundColor = "transparent"
    }, e.prototype.getThumbnailElement = function() {
      var e;
      return this.$element.hasClass("str-thumbnail") ? this.$element : (e = this.$element.find(".str-thumbnail"), e.length > 0 ? e : (e = this.$element.find("img[src='" + this.placeholderImage + "']"), e.length > 0 ? e : (this.$element.children().each(function(t) {
        return function(n, r) {
          if (i(r).css("background-image").match(RegExp("" + t.placeholderImage))) return e = i(r), !1
        }
      }(this)), e)))
    }, e.prototype.chooseAlternateThumbnail = function(e) {
      var t;
      if (null != (t = new STR.Tag.Helpers.ThumbnailChooser(e, this.creative.alternateThumbnailAssets).thumbnailUrl())) return this.creative.original_thumbnail_url = t, this.creative.thumbnail_url = t
    }, e.prototype.addDataAttributes = function(e) {
      return i(e).attr("data-str-native-key", this.placementKey), "creative" === this.creative.directSold && i(e).attr("data-str-creative-key", this.creative.creative_key), "campaign" === this.creative.directSold && i(e).attr("data-str-campaign-key", this.creative.campaign_key), i(e).attr("data-str-rendered", (new Date).getTime()), i(e).attr("data-str-visited-flag", !0)
    }, e.prototype.addLabels = function() {
      if (this.$element.width() <= this.SHARE_LABEL_MIN_WIDTH) return this.$element.addClass("str-no-share-labels")
    }, e.prototype.updateThumbnailUrl = function() {
      if (this.creative.original_thumbnail_url = this.creative.original_thumbnail_url || this.creative.thumbnail_url, STR.Tag.Helpers.AdUnitHelper.shouldCropThumbnail(this.placement, this.creative)) return this.creative.thumbnail_url = this.placeholderImage
    }, e.prototype.placeWrapper = function(e, t, n) {
      var r, a;
      if (0 === this.$element.find(".thumbnail-wrapper").length) return a = "position:relative;", t > 0 && (a += "width:" + t + "px;"), n > 0 && (a += "height:" + n + "px;"), r = i("<div>", {
        class: "thumbnail-wrapper",
        style: a
      }), e.wrap(r), this.transferCssAttributes(e, this.$element.find(".thumbnail-wrapper")), this.placeIcon(t, n)
    }, e.prototype.placeOptOut = function(e) {
      var t, n;
      if (this.creative.privacyPolicyUrl = this.privacyPolicyUrl(), !(i(e).find(".str-opt-out-icon").length > 0)) return t = STR.Tag.Helpers.BrowserHelper.isMobile(), n = STR.Tag.Helpers.AdUnitHelper.getOptOut(t, function(e) {
        return function(t) {
          return t.stopPropagation(), window.open(e.privacyPolicyUrl(), "_blank")
        }
      }(this)), e.appendChild(n), e.style.position = "relative"
    }, e.prototype.privacyPolicyUrl = function() {
      var e;
      return e = this.placement.placementAttributes.strOptOutUrl, this.creative.opt_out_url && this.creative.opt_out_text && (e += "&opt_out_url=" + encodeURIComponent(this.creative.opt_out_url) + "&opt_out_text=" + encodeURIComponent(this.creative.opt_out_text)), e
    }, e.prototype.transferCssAttributes = function(e, t) {
      var n, i, r, a, o, s;
      if (i = [{
          attr: "float",
          defaultVal: "none"
        }, {
          attr: "margin-top",
          defaultVal: "auto"
        }, {
          attr: "margin-right",
          defaultVal: "auto"
        }, {
          attr: "margin-bottom",
          defaultVal: "auto"
        }, {
          attr: "margin-left",
          defaultVal: "auto"
        }, {
          attr: "clear",
          defaultVal: "none"
        }], (s = e.get(0)) instanceof Element && null !== window.getComputedStyle(s)) {
        for (o = [], r = 0, a = i.length; r < a; r++) n = i[r], o.push(this.swapElementCss(e, t, n.attr, n.defaultVal));
        return o
      }
    }, e.prototype.swapElementCss = function(e, t, n, i) {
      return t.css(n, e.css(n)), e.css(n, i)
    }, e.prototype.placeIcon = function(e, t) {
      var n, i;
      if (n = STR.Tag.Helpers.AdUnitHelper.getIconForCreative(this.creative, this.creativeShouldInstantPlay()), "video" === this.creative.action && this.inPlace());
      else if (n) return i = STR.Tag.Helpers.AdUnitHelper.getIconWrapper(e), i.append(n), n.attr("src").match(/(md-icon-volume-off\.svg)/i) && (i.css({
        "min-width": "unset",
        "min-height": "unset",
        "max-width": "unset",
        "max-height": "unset",
        "z-index": 999999,
        right: "0",
        bottom: "0",
        left: "unset",
        top: "unset",
        "background-color": "rgba(0,0,0,0)",
        height: "60px",
        width: "60px"
      }), n.css({
        "min-width": "unset",
        "min-height": "unset",
        "max-width": "unset",
        "max-height": "unset",
        height: "24px",
        width: "24px",
        right: "16px",
        bottom: "16px",
        position: "absolute"
      })), this.$element.find(".thumbnail-wrapper").append(i)
    }, e.prototype.handleClick = function(e) {
      var t;
      return t = !1, this.$element.trigger("view:click"), (i(e.target).is(".str-opt-out-container, .str-share-button, .str-button-text, .str-isi-text") || this.element.querySelector(".str-isi-text") && this.element.querySelector(".str-isi-text").contains(e.target)) && (t = !0), t
    }, e.prototype.inPlace = function() {
      return !this.$element.hasClass("str-card-exp") && (this.$element.hasClass("str-in-place") || this.thumbnailWidth() >= this.EMBED_MINIMUM_WIDTH)
    }, e.prototype.thumbnailWidth = function() {
      return this.$element.find(".str-thumbnail,.str-html5video-player").width()
    }, e.prototype.fireRenderStartEvent = function() {
      var e;
      return e = new CustomEvent("str-render-start", {
        bubbles: !0,
        cancelable: !0
      }), this.element.dispatchEvent(e)
    }, e.prototype.getAdUnitTemplate = function(e) {
      switch (this.creative.action) {
        case "outstream":
          return this.getOutstreamVideoTemplate();
        default:
          return e.getTemplate()
      }
    }, e.prototype.setDelayedRenderPixelOffset = function(e) {
      return this.delayedRenderPixelOffset = e
    }, e.prototype.getOutstreamVideoTemplate = function() {
      return '<div class="str-adunit-outstream"> <div class="str-advertiser">Advertisement</div> <div class="str-thumbnail" style="background-image:url(\'{{thumbnail_url}}\');"></div> <script type="text/javascript"> var widthsub =  STR.Vendor.$(".str-adunit-outstream").width(); var heightsub = (widthsub - 20) * 0.5625; var advertiserHeight = 20; STR.Vendor.$(\'.str-adunit-outstream\').css("height", heightsub + advertiserHeight); <\/script> <style>.str-adunit-outstream{background-color:#e7e7e7;left:50%;-webkit-transform:translate(-50%, -0%);transform:translate(-50%, -0%);height:auto;clear:both;overflow:hidden;cursor:pointer;padding-top:10px;padding-bottom:10px;border-bottom:1px solid #ccc;border-top:1px solid #ccc;text-align: left !important;} .str-adunit-outstream{position:inline;} .str-adunit-outstream .str-advertiser{line-height: 14px;padding-left:10px;padding-right:10px;color:#909c9d;text-transform:uppercase;padding-bottom:6px;}.str-adunit-outstream .str-thumbnail{width:100% !important;height: 100% !important;margin: 0 !important; padding: 0 !important;background-size:cover;background-position:50%;background-repeat:no-repeat;background-color:#eee;}.str-adunit-outstream .thumbnail-wrapper{width:calc(100% - 20px) !important;height:calc(100% - 20px) !important;margin:0 10px !important;}.str-adunit-outstream .str-opt-out-icon{right:2px; !important;top:0px !important;}</style> </div>'
    }, e
  }(), e.exports = STR.Tag.Views.AdUnit
}, function(e, t, n) {
  var i = n(27),
    r = n(5)("toStringTag"),
    a = "Arguments" == i(function() {
      return arguments
    }()),
    o = function(e, t) {
      try {
        return e[t]
      } catch (e) {}
    };
  e.exports = function(e) {
    var t, n, s;
    return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = o(t = Object(e), r)) ? n : a ? i(t) : "Object" == (s = i(t)) && "function" == typeof t.callee ? "Arguments" : s
  }
}, function(e, t, n) {
  var i = n(7),
    r = n(11),
    a = n(19);
  e.exports = n(8) ? Object.defineProperties : function(e, t) {
    r(e);
    for (var n, o = a(t), s = o.length, l = 0; s > l;) i.f(e, n = o[l++], t[n]);
    return e
  }
}, function(e, t, n) {
  var i = n(80),
    r = n(5)("iterator"),
    a = n(18);
  e.exports = n(2).getIteratorMethod = function(e) {
    if (void 0 != e) return e[r] || e["@@iterator"] || a[i(e)]
  }
}, function(e, t, n) {
  "use strict";
  var i = n(84),
    r = n(85),
    a = n(18),
    o = n(9);
  e.exports = n(59)(Array, "Array", function(e, t) {
    this._t = o(e), this._i = 0, this._k = t
  }, function() {
    var e = this._t,
      t = this._k,
      n = this._i++;
    return !e || n >= e.length ? (this._t = void 0, r(1)) : "keys" == t ? r(0, n) : "values" == t ? r(0, e[n]) : r(0, [n, e[n]])
  }, "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
}, function(e, t) {
  e.exports = function() {}
}, function(e, t) {
  e.exports = function(e, t) {
    return {
      value: t,
      done: !!e
    }
  }
}, function(e, t, n) {
  "use strict";
  var i = n(49),
    r = n(21),
    a = n(29),
    o = {};
  n(12)(o, n(5)("iterator"), function() {
    return this
  }), e.exports = function(e, t, n) {
    e.prototype = i(o, {
      next: r(1, n)
    }), a(e, t + " Iterator")
  }
}, function(e, t, n) {
  var i = n(9),
    r = n(60),
    a = n(88);
  e.exports = function(e) {
    return function(t, n, o) {
      var s, l = i(t),
        c = r(l.length),
        u = a(o, c);
      if (e && n != n) {
        for (; c > u;)
          if ((s = l[u++]) != s) return !0
      } else
        for (; c > u; u++)
          if ((e || u in l) && l[u] === n) return e || u || 0;
      return !e && -1
    }
  }
}, function(e, t, n) {
  var i = n(34),
    r = Math.max,
    a = Math.min;
  e.exports = function(e, t) {
    return e = i(e), e < 0 ? r(e + t, 0) : a(e, t)
  }
}, function(e, t, n) {
  var i = n(34),
    r = n(33);
  e.exports = function(e) {
    return function(t, n) {
      var a, o, s = String(r(t)),
        l = i(n),
        c = s.length;
      return l < 0 || l >= c ? e ? "" : void 0 : (a = s.charCodeAt(l), a < 55296 || a > 56319 || l + 1 === c || (o = s.charCodeAt(l + 1)) < 56320 || o > 57343 ? e ? s.charAt(l) : a : e ? s.slice(l, l + 2) : o - 56320 + (a - 55296 << 10) + 65536)
    }
  }
}, function(e, t, n) {
  n(0), n(1), n(22), n(124), n(125), STR.Vendor.$, STR.Tag.Helpers.MediationHelper = {
    mediateNextThirdPartyPartner: function(e, t, n) {
      var i;
      return STR.Tag.Helpers.HtmlUtility.previewMediation() ? void console.log("There is no fill for third party partner") : (n || STR.Vendor.$("[data-str-mediation-key]").each(function(i, r) {
        if (STR.Vendor.$(r).attr("data-str-mediation-key") === e && STR.Vendor.$(r).attr("data-str-placement-index") === t) return n = r
      }), STR.Tag.Models.MediationTracker.fireNetworkNoFill(e, t), i = STR.Tag.placements[e], STR.Tag.Helpers.ThirdPartyChooser.choose(i, n, t))
    },
    findPlacementKey: function() {
      var e, t, n;
      return t = STR.Vendor.$("#str-in-prog"), n = t.closest("[data-str-mediation-key]").attr("data-str-mediation-key"), e = t.closest("[data-str-mediation-key]").attr("data-str-placement-index"), t.attr("id", "str-done"), [n, e]
    },
    getMrId: function(e, t) {
      var n;
      return e && t ? (n = STR.Tag.findPlacementFor(e), n.mediationStates.getMrId(t)) : void 0
    }
  }, e.exports = STR.Tag.Helpers.MediationHelper
}, function(e, t, n) {
  "use strict";
  var i = n(22),
    r = !1,
    a = {
      params: void 0,
      adserverParams: ["default_template", "creative_type"],
      ISI_EXAMPLE_TEXT: 'A drug is "prescription only" when medical professionals must supervise its use because patients are not able to use the drug safely on their own. Because of this, Congress laid out different requirements for prescription and non-prescription or "over-the-counter" drugs. Congress also gave the Food and Drug Administration (FDA) authority to oversee prescription drug ads.  In turn, the FDA passed regulations detailing how it would enforce those requirements. These regulations are also known as "rules." However, while the FDA oversees ads for prescription drugs, the Federal Trade Commission (FTC) oversees ads for over-the-counter (non-prescription) drugs. \n A drug is "prescription only" when medical professionals must supervise its use because patients are not able to use the drug safely on their own. Because of this, Congress laid out different requirements for prescription and non-prescription or "over-the-counter" drugs. Congress also gave the Food and Drug Administration (FDA) authority to oversee prescription drug ads.  In turn, the FDA passed regulations detailing how it would enforce those requirements. These regulations are also known as "rules." However, while the FDA oversees ads for prescription drugs, the Federal Trade Commission (FTC) oversees ads for over-the-counter (non-prescription) drugs.',
      shouldIntercept: function() {
        return i.getParameterByName("str_modify") && (r = !0), r
      },
      shouldForce: function(e) {
        return r && i.getParameterByName(e)
      },
      queryParams: function() {
        var e = {};
        return a.adserverParams.forEach(function(t) {
          var n = i.getParameterByName(t);
          n && (e[t] = n)
        }), e
      }
    };
  e.exports = a
}, function(e, t, n) {
  "use strict";
  (function(t) {
    n(185);
    var i = n(196);
    n(197), n(198), n(199);
    var r = n(123),
      a = r.Vendor;
    a.$ = a.$ || t.noConflict(!0), a.UUID = a.UUID || UUIDv1.noConflict(!0), a.Mustache = a.Mustache || i, a.Clamp = a.Clamp || clamp, e.exports = a
  }).call(t, n(24))
}, function(e, t, n) {
  var i = n(2),
    r = i.JSON || (i.JSON = {
      stringify: JSON.stringify
    });
  e.exports = function(e) {
    return r.stringify.apply(r, arguments)
  }
}, function(e, t, n) {
  e.exports = {
    default: n(95),
    __esModule: !0
  }
}, function(e, t, n) {
  n(36), n(47), e.exports = n(43).f("iterator")
}, function(e, t, n) {
  e.exports = {
    default: n(97),
    __esModule: !0
  }
}, function(e, t, n) {
  n(98), n(74), n(103), n(104), e.exports = n(2).Symbol
}, function(e, t, n) {
  "use strict";
  var i = n(6),
    r = n(10),
    a = n(8),
    o = n(14),
    s = n(62),
    l = n(77).KEY,
    c = n(16),
    u = n(37),
    d = n(29),
    p = n(25),
    h = n(5),
    f = n(43),
    m = n(44),
    g = n(99),
    v = n(100),
    y = n(101),
    b = n(11),
    T = n(9),
    w = n(40),
    k = n(21),
    S = n(49),
    x = n(102),
    C = n(67),
    _ = n(7),
    R = n(19),
    E = C.f,
    P = _.f,
    A = x.f,
    H = i.Symbol,
    I = i.JSON,
    D = I && I.stringify,
    O = h("_hidden"),
    V = h("toPrimitive"),
    M = {}.propertyIsEnumerable,
    N = u("symbol-registry"),
    B = u("symbols"),
    U = u("op-symbols"),
    L = Object.prototype,
    F = "function" == typeof H,
    j = i.QObject,
    $ = !j || !j.prototype || !j.prototype.findChild,
    W = a && c(function() {
      return 7 != S(P({}, "a", {
        get: function() {
          return P(this, "a", {
            value: 7
          }).a
        }
      })).a
    }) ? function(e, t, n) {
      var i = E(L, t);
      i && delete L[t], P(e, t, n), i && e !== L && P(L, t, i)
    } : P,
    q = function(e) {
      var t = B[e] = S(H.prototype);
      return t._k = e, t
    },
    z = F && "symbol" == typeof H.iterator ? function(e) {
      return "symbol" == typeof e
    } : function(e) {
      return e instanceof H
    },
    K = function(e, t, n) {
      return e === L && K(U, t, n), b(e), t = w(t, !0), b(n), r(B, t) ? (n.enumerable ? (r(e, O) && e[O][t] && (e[O][t] = !1), n = S(n, {
        enumerable: k(0, !1)
      })) : (r(e, O) || P(e, O, k(1, {})), e[O][t] = !0), W(e, t, n)) : P(e, t, n)
    },
    Y = function(e, t) {
      b(e);
      for (var n, i = v(t = T(t)), r = 0, a = i.length; a > r;) K(e, n = i[r++], t[n]);
      return e
    },
    G = function(e, t) {
      return void 0 === t ? S(e) : Y(S(e), t)
    },
    J = function(e) {
      var t = M.call(this, e = w(e, !0));
      return !(this === L && r(B, e) && !r(U, e)) && (!(t || !r(this, e) || !r(B, e) || r(this, O) && this[O][e]) || t)
    },
    X = function(e, t) {
      if (e = T(e), t = w(t, !0), e !== L || !r(B, t) || r(U, t)) {
        var n = E(e, t);
        return !n || !r(B, t) || r(e, O) && e[O][t] || (n.enumerable = !0), n
      }
    },
    Q = function(e) {
      for (var t, n = A(T(e)), i = [], a = 0; n.length > a;) r(B, t = n[a++]) || t == O || t == l || i.push(t);
      return i
    },
    Z = function(e) {
      for (var t, n = e === L, i = A(n ? U : T(e)), a = [], o = 0; i.length > o;) !r(B, t = i[o++]) || n && !r(L, t) || a.push(B[t]);
      return a
    };
  F || (H = function() {
    if (this instanceof H) throw TypeError("Symbol is not a constructor!");
    var e = p(arguments.length > 0 ? arguments[0] : void 0),
      t = function(n) {
        this === L && t.call(U, n), r(this, O) && r(this[O], e) && (this[O][e] = !1), W(this, e, k(1, n))
      };
    return a && $ && W(L, e, {
      configurable: !0,
      set: t
    }), q(e)
  }, s(H.prototype, "toString", function() {
    return this._k
  }), C.f = X, _.f = K, n(66).f = x.f = Q, n(32).f = J, n(52).f = Z, a && !n(30) && s(L, "propertyIsEnumerable", J, !0), f.f = function(e) {
    return q(h(e))
  }), o(o.G + o.W + o.F * !F, {
    Symbol: H
  });
  for (var ee = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), te = 0; ee.length > te;) h(ee[te++]);
  for (var ee = R(h.store), te = 0; ee.length > te;) m(ee[te++]);
  o(o.S + o.F * !F, "Symbol", {
    for: function(e) {
      return r(N, e += "") ? N[e] : N[e] = H(e)
    },
    keyFor: function(e) {
      if (z(e)) return g(N, e);
      throw TypeError(e + " is not a symbol!")
    },
    useSetter: function() {
      $ = !0
    },
    useSimple: function() {
      $ = !1
    }
  }), o(o.S + o.F * !F, "Object", {
    create: G,
    defineProperty: K,
    defineProperties: Y,
    getOwnPropertyDescriptor: X,
    getOwnPropertyNames: Q,
    getOwnPropertySymbols: Z
  }), I && o(o.S + o.F * (!F || c(function() {
    var e = H();
    return "[null]" != D([e]) || "{}" != D({
      a: e
    }) || "{}" != D(Object(e))
  })), "JSON", {
    stringify: function(e) {
      if (void 0 !== e && !z(e)) {
        for (var t, n, i = [e], r = 1; arguments.length > r;) i.push(arguments[r++]);
        return t = i[1], "function" == typeof t && (n = t), !n && y(t) || (t = function(e, t) {
          if (n && (t = n.call(this, e, t)), !z(t)) return t
        }), i[1] = t, D.apply(I, i)
      }
    }
  }), H.prototype[V] || n(12)(H.prototype, V, H.prototype.valueOf), d(H, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0)
}, function(e, t, n) {
  var i = n(19),
    r = n(9);
  e.exports = function(e, t) {
    for (var n, a = r(e), o = i(a), s = o.length, l = 0; s > l;)
      if (a[n = o[l++]] === t) return n
  }
}, function(e, t, n) {
  var i = n(19),
    r = n(52),
    a = n(32);
  e.exports = function(e) {
    var t = i(e),
      n = r.f;
    if (n)
      for (var o, s = n(e), l = a.f, c = 0; s.length > c;) l.call(e, o = s[c++]) && t.push(o);
    return t
  }
}, function(e, t, n) {
  var i = n(27);
  e.exports = Array.isArray || function(e) {
    return "Array" == i(e)
  }
}, function(e, t, n) {
  var i = n(9),
    r = n(66).f,
    a = {}.toString,
    o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    s = function(e) {
      try {
        return r(e)
      } catch (e) {
        return o.slice()
      }
    };
  e.exports.f = function(e) {
    return o && "[object Window]" == a.call(e) ? s(e) : r(i(e))
  }
}, function(e, t, n) {
  n(44)("asyncIterator")
}, function(e, t, n) {
  n(44)("observable")
}, function(e, t, n) {
  "use strict";
  var i = n(53),
    r = {
      pixelOffset: function(e, t, n) {
        if (n) return 0;
        if (r.sfpDirectSold(t.creative) || r.sfpDeal(t.creative)) return 0;
        var a = e && e.placementAttributes ? e.placementAttributes : void 0;
        return void 0 === a ? 0 : a.sampleRenderOptPixelOffset > 0 && i.should(.05) ? a.sampleRenderOptPixelOffset : a.renderingPixelOffset > 0 && i.should(.95) ? a.renderingPixelOffset : 0
      },
      sfpDeal: function(e) {
        return !(!e || !e.deal_id) && e.deal_id.match(/^sfp-/)
      },
      sfpDirectSold: function(e) {
        return !!e && e.directSold
      }
    };
  e.exports = r
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return function() {
      o.unsubscribe("sf"), e && e()
    }
  }
  var r = n(20),
    a = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(r),
    o = n(208),
    s = {
      isSafeFrame: function() {
        return !(!window.$sf || !$sf.ext)
      },
      register: function() {
        var e = s.currentGeometry(),
          t = e.w,
          n = e.h;
        $sf.ext.register(t, n, s.publishStatus)
      },
      expandFullScreen: function() {
        return s.expand($sf.ext.geom().exp)
      },
      expand: function(e) {
        return "expanded" == $sf.ext.status() ? a.default.resolve() : new a.default(function(t, n) {
          o.subscribe("sf.expanded", i(t)), o.subscribe("sf.failed", i(n)), $sf.ext.expand(e)
        })
      },
      collapse: function() {
        return "collapsed" == $sf.ext.status() ? a.default.resolve() : new a.default(function(e, t) {
          o.subscribe("sf.collapsed", i(e)), o.subscribe("sf.failed", i(t)), $sf.ext.collapse()
        })
      },
      currentGeometry: function() {
        return $sf.ext.geom().self
      },
      publishStatus: function(e, t) {
        switch (e) {
          case "geom-update":
            o.publish("sf.geom-update");
            break;
          case "expanded":
            o.publish("sf.expanded");
          case "collapsed":
            o.publish("sf.collapsed");
            break;
          case "failed":
            o.publish("sf.failed")
        }
      }
    };
  e.exports = s
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o),
    l = STR.Vendor.$,
    c = STR.Vendor.Mustache,
    u = n(17),
    d = n(64),
    p = n(127),
    h = p.AdUnitHelper,
    f = p.CardHelper,
    m = p.SharingHelper,
    g = n(141),
    v = function() {
      function e(t, n, i, r, o, s, c, u) {
        (0, a.default)(this, e), this.customOptions = t.custom, this.registerEscapeKeydownListener = this.registerEscapeKeydownListener.bind(this), this.registerScreenRotationListener = this.registerScreenRotationListener.bind(this), null == o && (o = !1), null == s && (s = !1), this.skipAnimation = !1, this.creative = t, this.tracker = n, this.cardId = "str-card-" + r, this.embedId = "str-embed-" + r, this.tagElement = i, this.$tagElement = l(i), this.$body = l("body"), this.$html = l("html"), this.$head = l("head"), this.hasOpened = o, this.postEngagementDisplayOpen = !1, this.oneClickPlay = s, this.placementIndex = c, this.placementKey = u, this.generateHTML()
      }
      return (0, s.default)(e, [{
        key: "toggle",
        value: function() {
          return this.postEngagementDisplayOpen ? this.close() : this.open()
        }
      }, {
        key: "registerEscapeKeydownListener",
        value: function() {
          var e = this;
          this.escapeHandler = function(t) {
            if (27 === t.keyCode) return e.close()
          }, l(document).keydown(this.escapeHandler)
        }
      }, {
        key: "registerScreenRotationListener",
        value: function() {
          var e = this;
          if (window.matchMedia("(max-width: 767px)").matches || window.matchMedia("(min-width: 768px) and (max-width:1024px)").matches) return this.orientationHandler = d.debounce(function() {
            return "article" === e.creative.action && e.resetEmbed(), f.animateIn(e.cardOptions(), function() {
              if (null != e.onOpenCallback) return e.onOpenCallback()
            })
          }, 250), l(window).on("orientationchange", this.orientationHandler)
        }
      }, {
        key: "onOpen",
        value: function(e) {
          if (this.onOpenCallback = e, this.hasOpened) return this.onOpenCallback()
        }
      }, {
        key: "beforeOpen",
        value: function(e) {
          if (this.beforeOpenCallback = e, this.hasOpened) return this.beforeOpenCallback()
        }
      }, {
        key: "open",
        value: function() {
          var e = this;
          if (!this.postEngagementDisplayOpen) return this.registerEscapeKeydownListener(), this.registerScreenRotationListener(), u.isSite(/nytimes.com/) || this.$html.addClass("str-no-scroll"), this.toggleMetaViewport(), this.iniFrame() || this.$body.addClass("str-no-scroll"), this.$body.append(this.$cardContainer).append(this.$cardBg), this.$tagElement.addClass("str-card-open"), null != this.beforeOpenCallback && this.beforeOpenCallback(), f.animateIn(this.cardOptions(), function() {
            if (e.hasOpened || e.oneClickPlay ? e.tracker.trackUserEvent("openDrawer") : e.tracker.trackUserEvent("openDrawer", {
                engagement: !0
              }), e.hasOpened = !0, e.postEngagementDisplayOpen = !0, e.$tagElement.trigger("str-card-open"), e.creative.video_aspect_ratio && e.$embedContainer.css("padding-bottom", 100 * e.creative.video_aspect_ratio + "%"), null != e.onOpenCallback) return e.onOpenCallback()
          })
        }
      }, {
        key: "onClose",
        value: function(e) {
          return this.onCloseCallback = e
        }
      }, {
        key: "onBeforeClose",
        value: function(e) {
          return this.onBeforeCloseCallback = e
        }
      }, {
        key: "close",
        value: function() {
          var e = this;
          return null != this.onBeforeCloseCallback && this.onBeforeCloseCallback(), this.tracker.trackUserEvent("closeDrawer"), this.resetEmbed(), l(document).off("keydown", this.escapeHandler), this.orientationHandler && l(window).off("resize", this.orientationHandler), f.animateOut(this.cardOptions(), function() {
            if (e.$tagElement.removeClass("str-card-open"), e.$html.removeClass("str-no-scroll"), e.$body.removeClass("str-no-scroll"), e.$cardContainer.detach(), e.$cardBg.detach(), e.toggleMetaViewport(), e.postEngagementDisplayOpen = !1, e.$tagElement.trigger("str-card-close"), null != e.onCloseCallback) return e.onCloseCallback()
          })
        }
      }, {
        key: "width",
        value: function() {
          return Math.floor(this.$cardContainer.width())
        }
      }, {
        key: "contentHeight",
        value: function() {
          return Math.floor(this.$cardContainer.height() - f.HEADER_FOOTER_HEIGHT)
        }
      }, {
        key: "generateHTML",
        value: function() {
          return this.createCardElement(), this.addStyle(), this.addHeader(), this.addEmbed(), this.addFooter()
        }
      }, {
        key: "createCardElement",
        value: function() {
          var e = this;
          return this.$cardBg = l("<div>", {
            class: "str-card-bg"
          }).click(function(t) {
            return t.stopPropagation(), e.close()
          }), this.$cardContainer = l("<div>", {
            id: this.cardId,
            class: "str-card-container",
            "data-str-native-key": this.placementKey,
            "data-str-placement-index": this.placementIndex
          }).on("touchmove", function(e) {
            return e.preventDefault(), e.stopPropagation()
          }), this.$cardWrapper = l("<div>", {
            class: "str-card-wrapper str-cr-" + this.creative.action
          }).click(function(e) {
            return e.stopPropagation()
          }), this.$cardContainer.append(this.$cardWrapper)
        }
      }, {
        key: "addStyle",
        value: function() {
          var e = l("<style>", {
            html: g.sharingStyle(this.cardId) + g.cardStyle(this.cardId)
          });
          return this.$cardContainer.append(e)
        }
      }, {
        key: "addHeader",
        value: function() {
          var t = this;
          this.$header = l("<div>", {
            class: "str-header"
          }), this.$cardWrapper.append(this.$header);
          var n = '<div class="header-controls"> <span class="str-ico-close"></span> <span class="str-advertiser"> <span class="ad-sub">{{promoted_by_text}}</span> {{brand_logo}}{{advertiser}} </span>';
          this.creative.directSold ? n += "</div>" : n += '<span class="str-ico-info"></span> </div> <div class="privacy-policy"> This ad is powered by Sharethrough. <a href="' + this.creative.privacyPolicyUrl + '" target="_blank">View our privacy policy</a>. <button><span class="str-ico-up"></span></button> </div>', this.creative.brand_logo_url && (n = h.insertBrandLogo(n));
          var i = c.render(n, this.creative);
          if (this.$header.append(i), this.$header.find(".str-ico-close").click(function() {
              return t.close()
            }), !this.creative.directSold) return this.$header.find(".str-ico-info").click(function() {
            var t = l(this).parent().next();
            return e.prototype.togglePolicy(t)
          }), this.$header.find(".privacy-policy button").click(function() {
            var t = l(this).parent();
            return e.prototype.togglePolicy(t)
          })
        }
      }, {
        key: "addEmbed",
        value: function() {
          return this.$embedWrapper = l("<div>", {
            class: "str-embed-wrapper"
          }), this.$embedContainer = l("<div>", {
            class: "str-embed-container"
          }), this.$embed = l("<div>", {
            id: this.embedId,
            class: "str-embed-video"
          }), this.$embedContainer.append(this.$embed), this.$embedWrapper.append(this.$embedContainer), this.$cardWrapper.append(this.$embedWrapper)
        }
      }, {
        key: "addFooter",
        value: function() {
          this.$footer = l("<div>", {
            class: "str-footer"
          }), this.$cardWrapper.append(this.$footer);
          var e = m.createCardSharing(this.creative, this.tracker, this.$footer, this.$tagElement);
          return this.$footer.append(e)
        }
      }, {
        key: "togglePolicy",
        value: function(e) {
          return e.hasClass("open") ? (e.removeClass("open"), e.animate({
            top: "-75%"
          }, 350, "easeInOutQuint")) : (e.addClass("open"), e.animate({
            top: "100%"
          }, 350, "easeInOutQuint"))
        }
      }, {
        key: "resetEmbed",
        value: function() {
          return this.$embedContainer.empty(), this.$embedContainer.append(this.$embed)
        }
      }, {
        key: "toggleMetaViewport",
        value: function() {
          var e = l('meta[name="viewport"]'),
            t = l("meta[data-str-meta-viewport]");
          return t.length > 0 ? t.detach() : 0 !== e.length || u.isSite(/cbssports.com/) ? void 0 : this.$head.append('<meta content="width=device-width, initial-scale=1" name="viewport" data-str-meta-viewport />')
        }
      }, {
        key: "iniFrame",
        value: function() {
          return window !== window.top
        }
      }, {
        key: "cardOptions",
        value: function() {
          return {
            $tagElement: this.$tagElement,
            $cardBg: this.$cardBg,
            $cardContainer: this.$cardContainer,
            $cardWrapper: this.$cardWrapper,
            creative: this.creative,
            skipAnimation: this.skipAnimation,
            custom: this.customOptions
          }
        }
      }]), e
    }();
  e.exports = v
}, function(e, t, n) {
  e.exports = {
    default: n(228),
    __esModule: !0
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    var n = {
      getMoatTagUrl: function(e, i, r, a) {
        var o = n.determineAdvertiser(e, i);
        return "https://z.moatads.com/sharethroughv2465247317527/moatad.js?" + t.param(n.getMoatCustomParams(o, e.campaign_key, e.creative_key, e.variant_key, e.source_id, i.placementAttributes.site_key, r, a))
      },
      getMoatCustomParams: function(e, t, i, r, a, o, s, l) {
        return {
          moatClientLevel1: e ? e.replace(/[^\w]+/g, "_") : "",
          moatClientLevel2: t,
          moatClientLevel3: i,
          moatClientLevel4: r,
          moatClientSlicer1: o,
          moatClientSlicer2: s,
          zMoatDSP: a,
          zMoatURLFunc: n.thirdPartyGuid(i, s, l),
          zMoatIsInView: n.isVisibleGuid(i, s, l),
          zMoatTimeInView: n.timeInViewGuid(i, s, l)
        }
      },
      thirdPartyGuid: function(e, t, n) {
        return "str-third-party-" + e + "-" + t + "-" + n
      },
      isVisibleGuid: function(e, t, n) {
        return "str-visibility-" + e + "-" + t + "-" + n
      },
      timeInViewGuid: function(e, t, n) {
        return "str-time-" + e + "-" + t + "-" + n
      },
      determineAdvertiser: function(e, t) {
        return "sfp" === e.source_id ? t.placementAttributes.publisher_key : "sam" === e.source_id ? e.advertiser_key : e.advertiser
      }
    };
    e.exports = n
  }).call(t, n(24))
}, function(e, t, n) {
  var i, r, a = function(e, t) {
      function n() {
        this.constructor = e
      }
      for (var i in t) o.call(t, i) && (e[i] = t[i]);
      return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    },
    o = {}.hasOwnProperty,
    s = [].slice;
  n(13), i = STR.Vendor.$, r = n(17), STR.Tag.Views.Clickout = function(e) {
    function t(e, n, i, a) {
      t.__super__.constructor.apply(this, arguments), this.protocol = r.getValidLocationProtocol()
    }
    return a(t, e), t.prototype.render = function() {
      var e, n, i, r, a;
      return t.__super__.render.apply(this, arguments), this.beaconsToFire = this.tracker.beacons.click, n = /doubleclick/, r = /b.sharethrough.com/, a = /insight.adsrvr.org/, e = /ib.adnxs.com/, i = /jivox/, this.beaconsToFire = this.getBeaconsToFireOnClientAndRemoveFromTracker(n, r, a, e, i), this.redirectUrl = this.generateRedirectUrl(), STR.Tag.Creatives = {
        clickoutRedirectUrl: function(e) {
          return function() {
            return e.redirectUrl
          }
        }(this)
      }
    }, t.prototype.getBeaconsToFireOnClientAndRemoveFromTracker = function() {
      var e, t, n, i, r, a;
      for (r = 1 <= arguments.length ? s.call(arguments, 0) : [], a = [], t = 0, n = r.length; t < n; t++) i = r[t], e = this.filterBeacons(i), a = a.concat(e);
      return a
    }, t.prototype.filterBeacons = function(e) {
      return this.result = this.tracker.beacons.click.filter(function(t) {
        return t.match(e)
      }), this.tracker.beacons.click = this.tracker.beacons.click.filter(function(t) {
        return null === t.match(e)
      }), this.result
    }, t.prototype.handleClick = function(e) {
      if (!t.__super__.handleClick.apply(this, arguments)) return this.creative.clickout_same_page ? this.tracker.fireThirdPartyPixel(this.beaconsToFire).then(function(e) {
        return function() {
          return e.beaconsToFire = [], e.setLocation(e.redirectUrl)
        }
      }(this)) : (this.tracker.fireThirdPartyPixel(this.beaconsToFire), this.beaconsToFire = [], window.open(this.redirectUrl, "_blank"))
    }, t.prototype.setLocation = function(e) {
      return window.location.href = e
    }, t.prototype.generateRedirectUrl = function() {
      return this.protocol + STR.Tag.ClickoutHost + "/?clickout_url=" + encodeURIComponent(this.creative.media_url) + "&tracking_url=" + this.trackingUrl() + this.thirdPartyBeacons()
    }, t.prototype.trackingUrl = function() {
      var e, t, n, r;
      return e = i.extend({}, this.tracker.defaultBeaconParams), e.umtime = (new Date).getTime(), e.engagement = !0, e.userEvent = "clickout", e.type = "userEvent", e.tkey = this.placement.placementAttributes.template_key, n = function() {
        var n;
        n = [];
        for (t in e) r = e[t], n.push(t + "=" + r);
        return n
      }(), encodeURIComponent("" + this.protocol + STR.Tag.TrackingHost + "/butler?" + n.join("&"))
    }, t.prototype.thirdPartyBeacons = function() {
      var e, t, n, i, a, o;
      for (a = "", i = this.tracker.beacons.click, t = 0, n = i.length; t < n; t++) e = i[t], o = e.match(/^http/) ? e : "" + this.protocol + e, a += "&tracking_url=" + encodeURIComponent(r.replaceCacheBusterParam(o));
      return a
    }, t
  }(STR.Tag.Views.AdUnit), e.exports = STR.Tag.Views.Clickout
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, o))
  }

  function r(e) {
    return "string" == typeof e ? JSON.parse(a(e)) : e
  }

  function a(e) {
    try {
      return decodeURIComponent(atob(s(e)).split("").map(function(e) {
        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
      }).join(""))
    } catch (t) {
      return atob(s(e))
    }
  }

  function o(e, t) {
    return String.fromCharCode("0x" + t)
  }

  function s(e) {
    return (e + "===").slice(0, e.length + e.length % 4).replace(/-/g, "+").replace(/_/g, "/")
  }
  e.exports = {
    b64DecodeUnicode: a,
    b64EncodeUnicode: i,
    getJsonObject: r
  }
}, function(e, t, n) {
  e.exports = {
    default: n(113),
    __esModule: !0
  }
}, function(e, t, n) {
  n(114);
  var i = n(2).Object;
  e.exports = function(e, t, n) {
    return i.defineProperty(e, t, n)
  }
}, function(e, t, n) {
  var i = n(14);
  i(i.S + i.F * !n(8), "Object", {
    defineProperty: n(7).f
  })
}, function(e, t, n) {
  n(0), n(1), STR.Tag.Helpers.BrowserHelper = {
    isiPhone: function() {
      return /iPhone/i.test(STR.Tag.Helpers.BrowserHelper.userAgent())
    },
    isiOS: function() {
      return /iPhone|iPad|iPod/i.test(STR.Tag.Helpers.BrowserHelper.userAgent())
    },
    isAndroid: function() {
      return /Android/i.test(STR.Tag.Helpers.BrowserHelper.userAgent())
    },
    chromeVersion: function() {
      return parseInt((/Chrome\/([0-9]+)/.exec(STR.Tag.Helpers.BrowserHelper.userAgent()) || [0, 0])[1])
    },
    chromeiOSVersion: function() {
      return parseInt((/CriOS\/([0-9]+)/.exec(STR.Tag.Helpers.BrowserHelper.userAgent()) || [0, 0])[1])
    },
    safariVersion: function() {
      return parseInt((/Version\/([0-9]+)/.exec(STR.Tag.Helpers.BrowserHelper.userAgent()) || [0, 0])[1])
    },
    canAutoPlayHTML5Video: function() {
      return !document.getElementsByTagName("body")[0].className.match(/force-sprite/) && (!!STR.Tag.Helpers.BrowserHelper.html5VideoSupportedBrowser() || !(STR.Tag.Helpers.BrowserHelper.isiOS() || STR.Tag.Helpers.BrowserHelper.isAndroid()))
    },
    html5VideoSupportedBrowser: function() {
      return !!(STR.Tag.Helpers.BrowserHelper.isAndroid() && STR.Tag.Helpers.BrowserHelper.chromeVersion() >= 53) || !(!STR.Tag.Helpers.BrowserHelper.isiOS() || !(STR.Tag.Helpers.BrowserHelper.safariVersion() >= 10 || STR.Tag.Helpers.BrowserHelper.chromeiOSVersion() >= 53))
    },
    devicePixelRatio: function() {
      return window.devicePixelRatio ? window.devicePixelRatio : 1
    },
    userAgent: function() {
      return navigator.userAgent
    },
    isMobile: function() {
      return this.isiOS() || this.isAndroid()
    }
  }, e.exports = STR.Tag.Helpers.BrowserHelper
}, function(e, t, n) {
  var i, r;
  null == window.STR && (window.STR = {}), STR.Tag ? STR.Tag.AppConfig = {
    appnexus_callback_function: "STRAppNexusCallback",
    appnexus_js: "//sharethrough.adnxs.com/getuidp",
    bakery_non_cdn_url: "//platform.sharethrough.com",
    bakery_url: "//platform-cdn.sharethrough.com",
    blue_kai_callback_function: "STRBKCallback",
    blue_kai_js: "//tags.bluekai.com/site/20087",
    butler_url: "//btlr.sharethrough.com/v4",
    clickout_host: "//clickout.sharethrough.com",
    clientjs_url: "//native.sharethrough.com",
    criteo_callback_function: "STRCriteoCallback",
    criteo_js: "//gum.criteo.com/sync",
    adserver_url: "//ad-faker.sharethrough.com/v4",
    gdpr_applies: !1,
    google_ad_test_url: "//ad.doubleclick.net/ad/N8609.160770.SHARETHROUGH/B7516981.3;sz=1x1;ord=[timestamp]?",
    mediation_url: "//platform-cdn.sharethrough.com/api/external/v1/placements",
    serving_ad_sys_test_url: "//bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=7020267&PluID=0&ord=[timestamp]&rtu=-1",
    sharethrough_ad_test_url: "//native.sharethrough.com/assets/pixel.gif",
    tag_version: "777-c5d51187",
    tracking_host: "//b.sharethrough.com",
    ttd_callback: "STRTradeDeskCallback",
    ttd_js: "//match.adsrvr.org/track/rid?v=1.0.0&ttd_pid=sharethrough"
  } : STR.Tag = {
    AppConfig: {
      appnexus_callback_function: "STRAppNexusCallback",
      appnexus_js: "//sharethrough.adnxs.com/getuidp",
      bakery_non_cdn_url: "//platform.sharethrough.com",
      bakery_url: "//platform-cdn.sharethrough.com",
      blue_kai_callback_function: "STRBKCallback",
      blue_kai_js: "//tags.bluekai.com/site/20087",
      butler_url: "//btlr.sharethrough.com/v4",
      clickout_host: "//clickout.sharethrough.com",
      clientjs_url: "//native.sharethrough.com",
      criteo_callback_function: "STRCriteoCallback",
      criteo_js: "//gum.criteo.com/sync",
      adserver_url: "//ad-faker.sharethrough.com/v4",
      gdpr_applies: !1,
      google_ad_test_url: "//ad.doubleclick.net/ad/N8609.160770.SHARETHROUGH/B7516981.3;sz=1x1;ord=[timestamp]?",
      mediation_url: "//platform-cdn.sharethrough.com/api/external/v1/placements",
      serving_ad_sys_test_url: "//bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=7020267&PluID=0&ord=[timestamp]&rtu=-1",
      sharethrough_ad_test_url: "//native.sharethrough.com/assets/pixel.gif",
      tag_version: "777-c5d51187",
      tracking_host: "//b.sharethrough.com",
      ttd_callback: "STRTradeDeskCallback",
      ttd_js: "//match.adsrvr.org/track/rid?v=1.0.0&ttd_pid=sharethrough"
    }
  }, null == STR.PassbackTag && (STR.PassbackTag = {}), null == (i = STR.PassbackTag).Models && (i.Models = {}), null == (r = STR.PassbackTag).Helpers && (r.Helpers = {})
}, , function(e, t, n) {
  var i = n(11);
  e.exports = function(e, t, n, r) {
    try {
      return r ? t(i(n)[0], n[1]) : t(n)
    } catch (t) {
      var a = e.return;
      throw void 0 !== a && i(a.call(e)), t
    }
  }
}, function(e, t, n) {
  var i = n(18),
    r = n(5)("iterator"),
    a = Array.prototype;
  e.exports = function(e) {
    return void 0 !== e && (i.Array === e || a[r] === e)
  }
}, function(e, t, n) {
  var i = n(5)("iterator"),
    r = !1;
  try {
    var a = [7][i]();
    a.return = function() {
      r = !0
    }, Array.from(a, function() {
      throw 2
    })
  } catch (e) {}
  e.exports = function(e, t) {
    if (!t && !r) return !1;
    var n = !1;
    try {
      var a = [7],
        o = a[i]();
      o.next = function() {
        return {
          done: n = !0
        }
      }, a[i] = function() {
        return o
      }, e(a)
    } catch (e) {}
    return n
  }
}, function(e, t, n) {
  "use strict";
  (function(e) {
    function t(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var i = n(65),
      r = t(i),
      a = n(169),
      o = t(a);
    ! function(e) {
      var t = !0;
      e.flexslider = function(n, i) {
        var r = e(n);
        void 0 === i.rtl && "rtl" == e("html").attr("dir") && (i.rtl = !0), r.vars = e.extend({}, e.flexslider.defaults, i);
        var a, s = r.vars.namespace,
          l = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
          c = ("ontouchstart" in window || l || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
          u = "click touchend MSPointerUp keyup",
          d = "",
          p = "vertical" === r.vars.direction,
          h = r.vars.reverse,
          f = r.vars.itemWidth > 0,
          m = "fade" === r.vars.animation,
          g = "" !== r.vars.asNavFor,
          v = {};
        e.data(n, "flexslider", r), v = {
          init: function() {
            r.animating = !1, r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10), isNaN(r.currentSlide) && (r.currentSlide = 0), r.animatingTo = r.currentSlide, r.atEnd = 0 === r.currentSlide || r.currentSlide === r.last, r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" ")), r.slides = e(r.vars.selector, r), r.container = e(r.containerSelector, r), r.count = r.slides.length, r.syncExists = e(r.vars.sync).length > 0, "slide" === r.vars.animation && (r.vars.animation = "swing"), r.prop = p ? "top" : r.vars.rtl ? "marginRight" : "marginLeft", r.args = {}, r.manualPause = !1, r.stopped = !1, r.started = !1, r.startTimeout = null, r.transitions = !r.vars.video && !m && r.vars.useCSS && function() {
              var e = document.createElement("div"),
                t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
              for (var n in t)
                if (void 0 !== e.style[t[n]]) return r.pfx = t[n].replace("Perspective", "").toLowerCase(), r.prop = "-" + r.pfx + "-transform", !0;
              return !1
            }(), r.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1, r.ensureAnimationEnd = "", "" !== r.vars.controlsContainer && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer)), "" !== r.vars.manualControls && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls)), "" !== r.vars.customDirectionNav && (r.customDirectionNav = 2 === e(r.vars.customDirectionNav).length && e(r.vars.customDirectionNav)), r.vars.randomize && (r.slides.sort(function() {
              return Math.round(Math.random()) - .5
            }), r.container.empty().append(r.slides)), r.doMath(), r.setup("init"), r.vars.controlNav && v.controlNav.setup(), r.vars.directionNav && v.directionNav.setup(), r.vars.keyboard && (1 === e(r.containerSelector).length || r.vars.multipleKeyboard) && e(document).bind("keyup", function(e) {
              var t = e.keyCode;
              if (!r.animating && (39 === t || 37 === t)) {
                var n = r.vars.rtl ? 37 === t ? r.getTarget("next") : 39 === t && r.getTarget("prev") : 39 === t ? r.getTarget("next") : 37 === t && r.getTarget("prev");
                r.flexAnimate(n, r.vars.pauseOnAction)
              }
            }), r.vars.mousewheel && r.bind("mousewheel", function(e, t, n, i) {
              e.preventDefault();
              var a = t < 0 ? r.getTarget("next") : r.getTarget("prev");
              r.flexAnimate(a, r.vars.pauseOnAction)
            }), r.vars.pausePlay && v.pausePlay.setup(), r.vars.slideshow && r.vars.pauseInvisible && v.pauseInvisible.init(), r.vars.slideshow && (r.vars.pauseOnHover && r.hover(function() {
              r.manualPlay || r.manualPause || r.pause()
            }, function() {
              r.manualPause || r.manualPlay || r.stopped || r.play()
            }), r.vars.pauseInvisible && v.pauseInvisible.isHidden() || (r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play())), g && v.asNav.setup(), c && r.vars.touch && v.touch(), (!m || m && r.vars.smoothHeight) && e(window).bind("resize orientationchange focus", v.resize), r.find("img").attr("draggable", "false"), setTimeout(function() {
              r.vars.start(r)
            }, 200)
          },
          asNav: {
            setup: function() {
              r.asNav = !0, r.animatingTo = Math.floor(r.currentSlide / r.move), r.currentItem = r.currentSlide, r.slides.removeClass(s + "active-slide").eq(r.currentItem).addClass(s + "active-slide"), l ? (n._slider = r, r.slides.each(function() {
                var t = this;
                t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function(e) {
                  e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                }, !1), t.addEventListener("MSGestureTap", function(t) {
                  t.preventDefault();
                  var n = e(this),
                    i = n.index();
                  e(r.vars.asNavFor).data("flexslider").animating || n.hasClass("active") || (r.direction = r.currentItem < i ? "next" : "prev", r.flexAnimate(i, r.vars.pauseOnAction, !1, !0, !0))
                })
              })) : r.slides.on(u, function(t) {
                t.preventDefault();
                var n, i = e(this),
                  a = i.index();
                n = r.vars.rtl ? -1 * (i.offset().right - e(r).scrollLeft()) : i.offset().left - e(r).scrollLeft(), n <= 0 && i.hasClass(s + "active-slide") ? r.flexAnimate(r.getTarget("prev"), !0) : e(r.vars.asNavFor).data("flexslider").animating || i.hasClass(s + "active-slide") || (r.direction = r.currentItem < a ? "next" : "prev", r.flexAnimate(a, r.vars.pauseOnAction, !1, !0, !0))
              })
            }
          },
          controlNav: {
            setup: function() {
              r.manualControls ? v.controlNav.setupManual() : v.controlNav.setupPaging()
            },
            setupPaging: function() {
              var t, n, i = "thumbnails" === r.vars.controlNav ? "control-thumbs" : "control-paging",
                a = 1;
              if (r.controlNavScaffold = e('<ol class="' + s + "control-nav " + s + i + '"></ol>'), r.pagingCount > 1)
                for (var o = 0; o < r.pagingCount; o++) {
                  n = r.slides.eq(o), void 0 === n.attr("data-thumb-alt") && n.attr("data-thumb-alt", "");
                  var l = "" !== n.attr("data-thumb-alt") ? l = ' alt="' + n.attr("data-thumb-alt") + '"' : "";
                  if (t = "thumbnails" === r.vars.controlNav ? '<img src="' + n.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + a + "</a>", "thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) {
                    var c = n.attr("data-thumbcaption");
                    "" !== c && void 0 !== c && (t += '<span class="' + s + 'caption">' + c + "</span>")
                  }
                  r.controlNavScaffold.append("<li>" + t + "</li>"), a++
                }
              r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold), v.controlNav.set(), v.controlNav.active(), r.controlNavScaffold.delegate("a, img", u, function(t) {
                if (t.preventDefault(), "" === d || d === t.type) {
                  var n = e(this),
                    i = r.controlNav.index(n);
                  n.hasClass(s + "active") || (r.direction = i > r.currentSlide ? "next" : "prev", r.flexAnimate(i, r.vars.pauseOnAction))
                }
                "" === d && (d = t.type), v.setToClearWatchedEvent()
              })
            },
            setupManual: function() {
              r.controlNav = r.manualControls, v.controlNav.active(), r.controlNav.bind(u, function(t) {
                if (t.preventDefault(), "" === d || d === t.type) {
                  var n = e(this),
                    i = r.controlNav.index(n);
                  n.hasClass(s + "active") || (i > r.currentSlide ? r.direction = "next" : r.direction = "prev", r.flexAnimate(i, r.vars.pauseOnAction))
                }
                "" === d && (d = t.type), v.setToClearWatchedEvent()
              })
            },
            set: function() {
              var t = "thumbnails" === r.vars.controlNav ? "img" : "a";
              r.controlNav = e("." + s + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r)
            },
            active: function() {
              r.controlNav.removeClass(s + "active").eq(r.animatingTo).addClass(s + "active")
            },
            update: function(t, n) {
              r.pagingCount > 1 && "add" === t ? r.controlNavScaffold.append(e('<li><a href="#">' + r.count + "</a></li>")) : 1 === r.pagingCount ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(n).closest("li").remove(), v.controlNav.set(), r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(n, t) : v.controlNav.active()
            }
          },
          directionNav: {
            setup: function() {
              var t = e('<ul class="' + s + 'direction-nav"><li class="' + s + 'nav-prev"><a class="' + s + 'prev" href="#">' + r.vars.prevText + '</a></li><li class="' + s + 'nav-next"><a class="' + s + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
              r.customDirectionNav ? r.directionNav = r.customDirectionNav : r.controlsContainer ? (e(r.controlsContainer).append(t), r.directionNav = e("." + s + "direction-nav li a", r.controlsContainer)) : (r.append(t), r.directionNav = e("." + s + "direction-nav li a", r)), v.directionNav.update(), r.directionNav.bind(u, function(t) {
                t.preventDefault();
                var n;
                "" !== d && d !== t.type || (n = e(this).hasClass(s + "next") ? r.getTarget("next") : r.getTarget("prev"), r.flexAnimate(n, r.vars.pauseOnAction)), "" === d && (d = t.type), v.setToClearWatchedEvent()
              })
            },
            update: function() {
              var e = s + "disabled";
              1 === r.pagingCount ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : 0 === r.animatingTo ? r.directionNav.removeClass(e).filter("." + s + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + s + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex")
            }
          },
          pausePlay: {
            setup: function() {
              var t = e('<div class="' + s + 'pauseplay"><a href="#"></a></div>');
              r.controlsContainer ? (r.controlsContainer.append(t), r.pausePlay = e("." + s + "pauseplay a", r.controlsContainer)) : (r.append(t), r.pausePlay = e("." + s + "pauseplay a", r)), v.pausePlay.update(r.vars.slideshow ? s + "pause" : s + "play"), r.pausePlay.bind(u, function(t) {
                t.preventDefault(), "" !== d && d !== t.type || (e(this).hasClass(s + "pause") ? (r.manualPause = !0, r.manualPlay = !1, r.pause()) : (r.manualPause = !1, r.manualPlay = !0, r.play())), "" === d && (d = t.type), v.setToClearWatchedEvent()
              })
            },
            update: function(e) {
              "play" === e ? r.pausePlay.removeClass(s + "pause").addClass(s + "play").html(r.vars.playText) : r.pausePlay.removeClass(s + "play").addClass(s + "pause").html(r.vars.pauseText)
            }
          },
          touch: function() {
            function e(e) {
              e.stopPropagation(), r.animating ? e.preventDefault() : (r.pause(), n._gesture.addPointer(e.pointerId), S = 0, u = p ? r.h : r.w, g = Number(new Date), c = f && h && r.animatingTo === r.last ? 0 : f && h ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : f && r.currentSlide === r.last ? r.limit : f ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : h ? (r.last - r.currentSlide + r.cloneOffset) * u : (r.currentSlide + r.cloneOffset) * u)
            }

            function t(e) {
              e.stopPropagation();
              var t = e.target._slider;
              if (t) {
                var i = -e.translationX,
                  r = -e.translationY;
                if (S += p ? r : i, d = (t.vars.rtl ? -1 : 1) * S, T = p ? Math.abs(S) < Math.abs(-i) : Math.abs(S) < Math.abs(-r), e.detail === e.MSGESTURE_FLAG_INERTIA) return void(0, o.default)(function() {
                  n._gesture.stop()
                });
                (!T || Number(new Date) - g > 500) && (e.preventDefault(), !m && t.transitions && (t.vars.animationLoop || (d = S / (0 === t.currentSlide && S < 0 || t.currentSlide === t.last && S > 0 ? Math.abs(S) / u + 2 : 1)), t.setProps(c + d, "setTouch")))
              }
            }

            function i(e) {
              e.stopPropagation();
              var t = e.target._slider;
              if (t) {
                if (t.animatingTo === t.currentSlide && !T && null !== d) {
                  var n = h ? -d : d,
                    i = n > 0 ? t.getTarget("next") : t.getTarget("prev");
                  t.canAdvance(i) && (Number(new Date) - g < 550 && Math.abs(n) > 50 || Math.abs(n) > u / 2) ? t.flexAnimate(i, t.vars.pauseOnAction) : m || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                }
                a = null, s = null, d = null, c = null, S = 0
              }
            }
            var a, s, c, u, d, g, v, y, b, T = !1,
              w = 0,
              k = 0,
              S = 0;
            l ? (n.style.msTouchAction = "none", n._gesture = new MSGesture, n._gesture.target = n, n.addEventListener("MSPointerDown", e, !1), n._slider = r, n.addEventListener("MSGestureChange", t, !1), n.addEventListener("MSGestureEnd", i, !1)) : (v = function(e) {
              r.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (r.pause(), u = p ? r.h : r.w, g = Number(new Date), w = e.touches[0].pageX, k = e.touches[0].pageY, c = f && h && r.animatingTo === r.last ? 0 : f && h ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : f && r.currentSlide === r.last ? r.limit : f ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : h ? (r.last - r.currentSlide + r.cloneOffset) * u : (r.currentSlide + r.cloneOffset) * u, a = p ? k : w, s = p ? w : k, n.addEventListener("touchmove", y, !1), n.addEventListener("touchend", b, !1))
            }, y = function(e) {
              w = e.touches[0].pageX, k = e.touches[0].pageY, d = p ? a - k : (r.vars.rtl ? -1 : 1) * (a - w), T = p ? Math.abs(d) < Math.abs(w - s) : Math.abs(d) < Math.abs(k - s);
              (!T || Number(new Date) - g > 500) && (e.preventDefault(), !m && r.transitions && (r.vars.animationLoop || (d /= 0 === r.currentSlide && d < 0 || r.currentSlide === r.last && d > 0 ? Math.abs(d) / u + 2 : 1), r.setProps(c + d, "setTouch")))
            }, b = function(e) {
              if (n.removeEventListener("touchmove", y, !1), r.animatingTo === r.currentSlide && !T && null !== d) {
                var t = h ? -d : d,
                  i = t > 0 ? r.getTarget("next") : r.getTarget("prev");
                r.canAdvance(i) && (Number(new Date) - g < 550 && Math.abs(t) > 50 || Math.abs(t) > u / 2) ? r.flexAnimate(i, r.vars.pauseOnAction) : m || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
              }
              n.removeEventListener("touchend", b, !1), a = null, s = null, d = null, c = null
            }, n.addEventListener("touchstart", v, !1))
          },
          resize: function() {
            !r.animating && r.is(":visible") && (f || r.doMath(), m ? v.smoothHeight() : f ? (r.slides.width(r.computedW), r.update(r.pagingCount), r.setProps()) : p ? (r.viewport.height(r.h), r.setProps(r.h, "setTotal")) : (r.vars.smoothHeight && v.smoothHeight(), r.newSlides.width(r.computedW), r.setProps(r.computedW, "setTotal")))
          },
          smoothHeight: function(e) {
            if (!p || m) {
              var t = m ? r : r.viewport;
              e ? t.animate({
                height: r.slides.eq(r.animatingTo).innerHeight()
              }, e) : t.innerHeight(r.slides.eq(r.animatingTo).innerHeight())
            }
          },
          sync: function(t) {
            var n = e(r.vars.sync).data("flexslider"),
              i = r.animatingTo;
            switch (t) {
              case "animate":
                n.flexAnimate(i, r.vars.pauseOnAction, !1, !0);
                break;
              case "play":
                n.playing || n.asNav || n.play();
                break;
              case "pause":
                n.pause()
            }
          },
          uniqueID: function(t) {
            return t.filter("[id]").add(t.find("[id]")).each(function() {
              var t = e(this);
              t.attr("id", t.attr("id") + "_clone")
            }), t
          },
          pauseInvisible: {
            visProp: null,
            init: function() {
              var e = v.pauseInvisible.getHiddenProp();
              if (e) {
                var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                document.addEventListener(t, function() {
                  v.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play()
                })
              }
            },
            isHidden: function() {
              var e = v.pauseInvisible.getHiddenProp();
              return !!e && document[e]
            },
            getHiddenProp: function() {
              var e = ["webkit", "moz", "ms", "o"];
              if ("hidden" in document) return "hidden";
              for (var t = 0; t < e.length; t++)
                if (e[t] + "Hidden" in document) return e[t] + "Hidden";
              return null
            }
          },
          setToClearWatchedEvent: function() {
            clearTimeout(a), a = setTimeout(function() {
              d = ""
            }, 3e3)
          }
        }, r.flexAnimate = function(t, n, i, a, o) {
          if (r.vars.animationLoop || t === r.currentSlide || (r.direction = t > r.currentSlide ? "next" : "prev"), g && 1 === r.pagingCount && (r.direction = r.currentItem < t ? "next" : "prev"), !r.animating && (r.canAdvance(t, o) || i) && r.is(":visible")) {
            if (g && a) {
              var l = e(r.vars.asNavFor).data("flexslider");
              if (r.atEnd = 0 === t || t === r.count - 1, l.flexAnimate(t, !0, !1, !0, o), r.direction = r.currentItem < t ? "next" : "prev", l.direction = r.direction, Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || 0 === t) return r.currentItem = t, r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), !1;
              r.currentItem = t, r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), t = Math.floor(t / r.visible)
            }
            if (r.animating = !0, r.animatingTo = t, n && r.pause(), r.vars.before(r), r.syncExists && !o && v.sync("animate"), r.vars.controlNav && v.controlNav.active(), f || r.slides.removeClass(s + "active-slide").eq(t).addClass(s + "active-slide"), r.atEnd = 0 === t || t === r.last, r.vars.directionNav && v.directionNav.update(), t === r.last && (r.vars.end(r), r.vars.animationLoop || r.pause()), m) c ? (r.slides.eq(r.currentSlide).css({
              opacity: 0,
              zIndex: 1
            }), r.slides.eq(t).css({
              opacity: 1,
              zIndex: 2
            }), r.wrapup(b)) : (r.slides.eq(r.currentSlide).css({
              zIndex: 1
            }).animate({
              opacity: 0
            }, r.vars.animationSpeed, r.vars.easing), r.slides.eq(t).css({
              zIndex: 2
            }).animate({
              opacity: 1
            }, r.vars.animationSpeed, r.vars.easing, r.wrapup));
            else {
              var u, d, y, b = p ? r.slides.filter(":first").height() : r.computedW;
              f ? (u = r.vars.itemMargin, y = (r.itemW + u) * r.move * r.animatingTo, d = y > r.limit && 1 !== r.visible ? r.limit : y) : d = 0 === r.currentSlide && t === r.count - 1 && r.vars.animationLoop && "next" !== r.direction ? h ? (r.count + r.cloneOffset) * b : 0 : r.currentSlide === r.last && 0 === t && r.vars.animationLoop && "prev" !== r.direction ? h ? 0 : (r.count + 1) * b : h ? (r.count - 1 - t + r.cloneOffset) * b : (t + r.cloneOffset) * b, r.setProps(d, "", r.vars.animationSpeed), r.transitions ? (r.vars.animationLoop && r.atEnd || (r.animating = !1, r.currentSlide = r.animatingTo), r.container.unbind("webkitTransitionEnd transitionend"), r.container.bind("webkitTransitionEnd transitionend", function() {
                clearTimeout(r.ensureAnimationEnd), r.wrapup(b)
              }), clearTimeout(r.ensureAnimationEnd), r.ensureAnimationEnd = setTimeout(function() {
                r.wrapup(b)
              }, r.vars.animationSpeed + 100)) : r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function() {
                r.wrapup(b)
              })
            }
            r.vars.smoothHeight && v.smoothHeight(r.vars.animationSpeed)
          }
        }, r.wrapup = function(e) {
          m || f || (0 === r.currentSlide && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && 0 === r.animatingTo && r.vars.animationLoop && r.setProps(e, "jumpStart")), r.animating = !1, r.currentSlide = r.animatingTo, r.vars.after(r)
        }, r.animateSlides = function() {
          !r.animating && t && r.flexAnimate(r.getTarget("next"))
        }, r.pause = function() {
          clearInterval(r.animatedSlides), r.animatedSlides = null, r.playing = !1, r.vars.pausePlay && v.pausePlay.update("play"), r.syncExists && v.sync("pause")
        }, r.play = function() {
          r.playing && clearInterval(r.animatedSlides), r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed), r.started = r.playing = !0, r.vars.pausePlay && v.pausePlay.update("pause"), r.syncExists && v.sync("play")
        }, r.stop = function() {
          r.pause(), r.stopped = !0
        }, r.canAdvance = function(e, t) {
          var n = g ? r.pagingCount - 1 : r.last;
          return !(!t && (!g || r.currentItem !== r.count - 1 || 0 !== e || "prev" !== r.direction) && (g && 0 === r.currentItem && e === r.pagingCount - 1 && "next" !== r.direction || e === r.currentSlide && !g || !r.vars.animationLoop && (r.atEnd && 0 === r.currentSlide && e === n && "next" !== r.direction || r.atEnd && r.currentSlide === n && 0 === e && "next" === r.direction)))
        }, r.getTarget = function(e) {
          return r.direction = e, "next" === e ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : 0 === r.currentSlide ? r.last : r.currentSlide - 1
        }, r.setProps = function(e, t, n) {
          var i = function() {
            var n = e || (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo;
            return function() {
              if (f) return "setTouch" === t ? e : h && r.animatingTo === r.last ? 0 : h ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : n;
              switch (t) {
                case "setTotal":
                  return h ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
                case "setTouch":
                  return e;
                case "jumpEnd":
                  return h ? e : r.count * e;
                case "jumpStart":
                  return h ? r.count * e : e;
                default:
                  return e
              }
            }() * (r.vars.rtl ? 1 : -1) + "px"
          }();
          r.transitions && (i = r.isFirefox ? p ? "translate3d(0," + i + ",0)" : "translate3d(" + parseInt(i) + "px,0,0)" : p ? "translate3d(0," + i + ",0)" : "translate3d(" + (r.vars.rtl ? -1 : 1) * parseInt(i) + "px,0,0)", n = void 0 !== n ? n / 1e3 + "s" : "0s", r.container.css("-" + r.pfx + "-transition-duration", n), r.container.css("transition-duration", n)), r.args[r.prop] = i, (r.transitions || void 0 === n) && r.container.css(r.args), r.container.css("transform", i)
        }, r.setup = function(t) {
          if (m) r.vars.rtl ? r.slides.css({
            width: "100%",
            float: "right",
            marginLeft: "-100%",
            position: "relative"
          }) : r.slides.css({
            width: "100%",
            float: "left",
            marginRight: "-100%",
            position: "relative"
          }), "init" === t && (c ? r.slides.css({
            opacity: 0,
            display: "block",
            webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
            zIndex: 1
          }).eq(r.currentSlide).css({
            opacity: 1,
            zIndex: 2
          }) : 0 == r.vars.fadeFirstSlide ? r.slides.css({
            opacity: 0,
            display: "block",
            zIndex: 1
          }).eq(r.currentSlide).css({
            zIndex: 2
          }).css({
            opacity: 1
          }) : r.slides.css({
            opacity: 0,
            display: "block",
            zIndex: 1
          }).eq(r.currentSlide).css({
            zIndex: 2
          }).animate({
            opacity: 1
          }, r.vars.animationSpeed, r.vars.easing)), r.vars.smoothHeight && v.smoothHeight();
          else {
            var n, i;
            "init" === t && (r.viewport = e('<div class="' + s + 'viewport"></div>').css({
              overflow: "hidden",
              position: "relative"
            }).appendTo(r).append(r.container), r.cloneCount = 0, r.cloneOffset = 0, h && (i = e.makeArray(r.slides).reverse(), r.slides = e(i), r.container.empty().append(r.slides))), r.vars.animationLoop && !f && (r.cloneCount = 2, r.cloneOffset = 1, "init" !== t && r.container.find(".clone").remove(), r.container.append(v.uniqueID(r.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(v.uniqueID(r.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), r.newSlides = e(r.vars.selector, r), n = h ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset, p && !f ? (r.container.height(200 * (r.count + r.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
              r.newSlides.css({
                display: "block"
              }), r.doMath(), r.viewport.height(r.h), r.setProps(n * r.h, "init")
            }, "init" === t ? 100 : 0)) : (r.container.width(200 * (r.count + r.cloneCount) + "%"), r.setProps(n * r.computedW, "init"), setTimeout(function() {
              r.doMath(), r.vars.rtl && r.isFirefox ? r.newSlides.css({
                width: r.computedW,
                marginRight: r.computedM,
                float: "right",
                display: "block"
              }) : r.newSlides.css({
                width: r.computedW,
                marginRight: r.computedM,
                float: "left",
                display: "block"
              }), r.vars.smoothHeight && v.smoothHeight()
            }, "init" === t ? 100 : 0))
          }
          f || r.slides.removeClass(s + "active-slide").eq(r.currentSlide).addClass(s + "active-slide"), r.vars.init(r)
        }, r.doMath = function() {
          var e = r.slides.first(),
            t = r.vars.itemMargin,
            n = r.vars.minItems,
            i = r.vars.maxItems;
          r.w = void 0 === r.viewport ? r.width() : r.viewport.width(), r.isFirefox && (r.w = r.width()), r.h = e.height(), r.boxPadding = e.outerWidth() - e.width(), f ? (r.itemT = r.vars.itemWidth + t, r.itemM = t, r.minW = n ? n * r.itemT : r.w, r.maxW = i ? i * r.itemT - t : r.w, r.itemW = r.minW > r.w ? (r.w - t * (n - 1)) / n : r.maxW < r.w ? (r.w - t * (i - 1)) / i : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth, r.visible = Math.floor(r.w / r.itemW), r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible, r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1), r.last = r.pagingCount - 1, r.limit = 1 === r.pagingCount ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t) : (r.itemW = r.w, r.itemM = t, r.pagingCount = r.count, r.last = r.count - 1), r.computedW = r.itemW - r.boxPadding, r.computedM = r.itemM
        }, r.update = function(e, t) {
          r.doMath(), f || (e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && 0 !== e && (r.currentSlide -= 1), r.animatingTo = r.currentSlide), r.vars.controlNav && !r.manualControls && ("add" === t && !f || r.pagingCount > r.controlNav.length ? v.controlNav.update("add") : ("remove" === t && !f || r.pagingCount < r.controlNav.length) && (f && r.currentSlide > r.last && (r.currentSlide -= 1, r.animatingTo -= 1), v.controlNav.update("remove", r.last))), r.vars.directionNav && v.directionNav.update()
        }, r.addSlide = function(t, n) {
          var i = e(t);
          r.count += 1, r.last = r.count - 1, p && h ? void 0 !== n ? r.slides.eq(r.count - n).after(i) : r.container.prepend(i) : void 0 !== n ? r.slides.eq(n).before(i) : r.container.append(i), r.update(n, "add"), r.slides = e(r.vars.selector + ":not(.clone)", r), r.setup(), r.vars.added(r)
        }, r.removeSlide = function(t) {
          var n = isNaN(t) ? r.slides.index(e(t)) : t;
          r.count -= 1, r.last = r.count - 1, isNaN(t) ? e(t, r.slides).remove() : p && h ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove(), r.doMath(), r.update(n, "remove"), r.slides = e(r.vars.selector + ":not(.clone)", r), r.setup(), r.vars.removed(r)
        }, v.init()
      }, e(window).blur(function(e) {
        t = !1
      }).focus(function(e) {
        t = !0
      }), e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        isFirefox: !1,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {},
        rtl: !1
      }, e.fn.flexslider = function(t) {
        if (void 0 === t && (t = {}), "object" == (void 0 === t ? "undefined" : (0, r.default)(t))) return this.each(function() {
          var n = e(this),
            i = t.selector ? t.selector : ".slides > li",
            r = n.find(i);
          1 === r.length && !1 === t.allowOneSlide || 0 === r.length ? (r.fadeIn(400), t.start && t.start(n)) : void 0 === n.data("flexslider") && new e.flexslider(this, t)
        });
        var n = e(this).data("flexslider");
        switch (t) {
          case "play":
            n.play();
            break;
          case "pause":
            n.pause();
            break;
          case "stop":
            n.stop();
            break;
          case "next":
            n.flexAnimate(n.getTarget("next"), !0);
            break;
          case "prev":
          case "previous":
            n.flexAnimate(n.getTarget("prev"), !0);
            break;
          default:
            "number" == typeof t && n.flexAnimate(t, !0)
        }
      }
    }(e)
  }).call(t, n(24))
}, function(e, t) {
  var n;
  n = function() {
    return this
  }();
  try {
    n = n || Function("return this")() || (0, eval)("this")
  } catch (e) {
    "object" == typeof window && (n = window)
  }
  e.exports = n
}, function(e, t, n) {
  "use strict";
  window.STR = window.STR || {}, STR.Vendor = STR.Vendor || {}, e.exports = STR
}, function(e, t, n) {
  n(23), STR.Tag.Models.MediationTracker = {
    fireNetworkImpressionRequest: function(e, t, n) {
      var i, r, a, o;
      return i = STR.Tag.Helpers.BeaconCannon.getInstance(), a = STR.Tag.findPlacementFor(e), o = a.mediationStates.get(n), r = a.creativeStore, i.fireBeacon(STR.Tag.TrackingHost, "butler", {
        type: STR.Tag.Helpers.BeaconCannon.networkImpressionRequest,
        pkey: e,
        placementIndex: n,
        networkKey: t,
        networkOrder: o + 1,
        messageId: null != r ? r.messageId : void 0
      })
    },
    fireNetworkNoFill: function(e, t) {
      var n, i, r, a, o, s, l;
      return r = STR.Tag.placements[e], l = r.mediationStates.get(t), s = null != (o = r.thirdPartyPartners) ? o.get(l) : void 0, a = null != s ? s.key : void 0, i = r.creativeStore, n = STR.Tag.Helpers.BeaconCannon.getInstance(), n.fireBeacon(STR.Tag.TrackingHost, "butler", {
        type: STR.Tag.Helpers.BeaconCannon.networkNoFill,
        pkey: e,
        placementIndex: t,
        networkKey: a,
        networkOrder: l + 1,
        messageId: null != i ? i.messageId : void 0
      })
    }
  }
}, function(e, t, n) {
  var i;
  n(0), n(1), i = STR.Vendor.$, STR.Tag.Helpers.ThirdPartyChooser = {
    choose: function(e, t, n) {
      var i, r, a;
      return STR.Tag.Helpers.SpecialCaseRenderer.isSpecialCase() ? void STR.Tag.Helpers.SpecialCaseRenderer.render(e, t, n) : (r = e.nextThirdPartyPartnerForElement(n), null != r && STR.Tag.Helpers.ThirdPartyChooser.isSTXNetwork(r.key) ? e.handleMonetizeSTXCall(t) : r ? (a = STR.Tag.Helpers.HtmlUtility.decodeString(r.tag), new STR.Tag.Views.ThirdPartyPartner(t, e.placementKey, r.key, a, n).render()) : e.hasFeaturedContent() ? (i = new STR.Tag.Models.CreativeStore(e.placementKey, "", "", [], "arid", e.placementData), new STR.Tag.Views.FeaturedContent(e.featuredContent.getFeaturedContent(), t, e.placementKey, i).render()) : STR.Tag.Helpers.ThirdPartyChooser.hideElement(t))
    },
    isSTXNetwork: function(e) {
      return "stxnetwork" === e
    },
    hideElement: function(e) {
      return i(e).css("display", "none")
    }
  }, e.exports = STR.Tag.Helpers.ThirdPartyChooser
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(20),
    a = i(r),
    o = n(3),
    s = i(o),
    l = n(4),
    c = i(l),
    u = n(0),
    d = n(39),
    p = n(232),
    h = function() {
      function e() {
        (0, s.default)(this, e)
      }
      return (0, c.default)(e, [{
        key: "getWaterfall",
        value: function(e, t) {
          if (!e || "%%PATTERN:strnativekey%%" === e) return a.default.reject();
          if (!u.MediationUrl) return a.default.resolve(p).then(t);
          var n = u.MediationUrl + "/" + e + "/public.json";
          return u.Helpers.AjaxHelper.jsonGet(n, {
            success: t
          }).catch(function(e) {
            if (0 === e.readyState && "error" === e.statusText && 0 === e.status) throw "ad-blocker-detected";
            d.sample("AJAX error in MediationWaterfallFactory:getWaterfall", {
              function: "MediationWaterfallFactory:getWaterfall",
              url: n,
              error: e
            })
          })
        }
      }]), e
    }();
  e.exports = h
}, function(e, t, n) {
  "use strict";
  var i = n(222),
    r = n(223),
    a = n(224),
    o = n(225),
    s = n(226),
    l = n(227),
    c = n(236),
    u = n(237),
    d = n(238),
    p = n(109);
  STR.Tag.Helpers.InViewHelper = a, STR.Tag.Helpers.OptOutHelper = s, e.exports = {
    AdUnitHelper: i,
    CardHelper: r,
    InViewHelper: a,
    LoadWelcomeFormHelper: o,
    MoatHelper: p,
    OptOutHelper: s,
    Renderer: l,
    SharingHelper: c,
    SpecialCaseRenderer: u,
    TextHelper: d
  }
}, function(e, t, n) {
  "use strict";

  function i(e, t, n) {
    return !p.disableThirdPartyTracking && u.sharethroughAllowed() && n() ? e.requestUserSync().then(p.triggerFinished) : new a.default(function(e, n) {
      c[t].uid = "", c[t].status = "not allowed", e()
    })
  }
  var r = n(20),
    a = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(r),
    o = n(144),
    s = n(145),
    l = n(142),
    c = n(51),
    u = n(28),
    d = [],
    p = {
      whenUidReady: function(e) {
        return p.isFinished() ? e() : d.push(e)
      },
      adServerParams: function() {
        return c.adServerParams()
      },
      disableThirdPartyTracking: !!document.querySelector("[data-str-disable-tracking]"),
      isFinished: function() {
        return p.disableThirdPartyTracking || c.isReady()
      },
      requestSyncs: function() {
        return a.default.all([i(o, "criteo", u.criteoAllowed), i(l, "ttd", u.tradeDeskAllowed), i(s, "appNexus", u.appNexusAllowed)])
      },
      triggerFinished: function() {
        c.isReady() && d.forEach(function(e) {
          return e(c)
        })
      }
    };
  e.exports = p
}, function(e, t, n) {
  e.exports = {
    default: n(186),
    __esModule: !0
  }
}, function(e, t) {
  function n() {
    throw new Error("setTimeout has not been defined")
  }

  function i() {
    throw new Error("clearTimeout has not been defined")
  }

  function r(e) {
    if (u === setTimeout) return setTimeout(e, 0);
    if ((u === n || !u) && setTimeout) return u = setTimeout, setTimeout(e, 0);
    try {
      return u(e, 0)
    } catch (t) {
      try {
        return u.call(null, e, 0)
      } catch (t) {
        return u.call(this, e, 0)
      }
    }
  }

  function a(e) {
    if (d === clearTimeout) return clearTimeout(e);
    if ((d === i || !d) && clearTimeout) return d = clearTimeout, clearTimeout(e);
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

  function o() {
    m && h && (m = !1, h.length ? f = h.concat(f) : g = -1, f.length && s())
  }

  function s() {
    if (!m) {
      var e = r(o);
      m = !0;
      for (var t = f.length; t;) {
        for (h = f, f = []; ++g < t;) h && h[g].run();
        g = -1, t = f.length
      }
      h = null, m = !1, a(e)
    }
  }

  function l(e, t) {
    this.fun = e, this.array = t
  }

  function c() {}
  var u, d, p = e.exports = {};
  ! function() {
    try {
      u = "function" == typeof setTimeout ? setTimeout : n
    } catch (e) {
      u = n
    }
    try {
      d = "function" == typeof clearTimeout ? clearTimeout : i
    } catch (e) {
      d = i
    }
  }();
  var h, f = [],
    m = !1,
    g = -1;
  p.nextTick = function(e) {
    var t = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
    f.push(new l(e, t)), 1 !== f.length || m || r(s)
  }, l.prototype.run = function() {
    this.fun.apply(null, this.array)
  }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.prependListener = c, p.prependOnceListener = c, p.listeners = function(e) {
    return []
  }, p.binding = function(e) {
    throw new Error("process.binding is not supported")
  }, p.cwd = function() {
    return "/"
  }, p.chdir = function(e) {
    throw new Error("process.chdir is not supported")
  }, p.umask = function() {
    return 0
  }
}, function(e, t, n) {
  var i, r;
  n(0), n(1), n(90), n(132), r = n(17), n(28), i = STR.Vendor.$, STR.Tag.Helpers.BeaconCannon = function() {
    function e() {}
    return e.thirdPartyImpressionRequest = "thirdPartyImpressionRequest", e.thirdPartyNoFill = "thirdPartyNoFill", e.networkImpressionRequest = "networkImpressionRequest", e.networkNoFill = "networkNoFill", e.error = "error", e.impressionRequest = "impressionRequest", e.timing = "timing", e.latency = "latency", e.articleView = "articleView", e.articleViewDuration = "articleViewDuration", e.youtubeReady = "youtubeReady", e.youtubePlay = "youtubePlay", e.videoStart = "videoStart", e.videoPlay = "videoPlay", e.videoStop = "videoStop", e.autoplayVideoEngagement = "autoplayVideoEngagement", e.silentAutoPlayDuration = "silentAutoPlayDuration", e.videoViewDuration = "videoViewDuration", e.share = "share", e.userEvent = "userEvent", e.completionPercent = "completionPercent", e.visible = "visible", e.strVisible = "strVisible", e.timeInView = "timeInView", e.placementSwipe = "placementSwipe", e.dcoRequest = "DCORequest", e.impressionReceived = "impressionReceived", e.nurlFail = "winNotificationFail", e.vastImpression = "vastImpression", e.appNexusUserIdFound = "appNexusUserIdFound", e.appNexusUserIdNotFound = "appNexusUserIdNotFound", e.moatLatency = "moatLatency", e.instance = void 0, e.getInstance = function() {
      return this.instance || (this.instance = new STR.Tag.Helpers.BeaconCannon), this.instance
    }, e.prototype.firePixel = function(e, t, n) {
      var i;
      return i = new Image, null != t && i.addEventListener("load", t), null != n && i.addEventListener("error", n), i.src = r.replaceCacheBusterParam(e), i
    }, e.prototype.fireBeacon = function(e, t, n) {
      var i;
      return i = this.generateBeaconRequest(e, t, n), this.firePixel(i)
    }, e.prototype.generateBeaconRequest = function(e, t, n) {
      var r, a, o, s, l, c;
      return r = i.extend({}, n, this.defaultParams()), s = STR.Tag.Helpers.MediationHelper.getMrId(n.pkey, n.placementIndex), s && (r.mrid = s), a = this.getBidId(n.pkey, n.placementIndex), a && (r.bidId = a), l = function() {
        var e;
        e = [];
        for (o in r) c = r[o], e.push(encodeURIComponent(o) + "=" + encodeURIComponent(c));
        return e
      }(), e + "/" + t + "?" + l.join("&")
    }, e.prototype.defaultParams = function() {
      var e, t;
      return t = STR.Tag.Helpers.PageGeometryHelper.viewportDimensions(), e = STR.Tag.Helpers.PageGeometryHelper.viewportScroll(), {
        bwidth: t[0],
        bheight: t[1],
        byscroll: e,
        ploc: this.getPloc(),
        umtime: (new Date).getTime(),
        version: STR.Tag.Version
      }
    }, e.prototype.getPloc = function() {
      return this.ploc || (this.ploc = encodeURIComponent(window.document.location.href))
    }, e.prototype.getBidId = function(e, t) {
      var n;
      return n = STR.Tag.findPlacementFor(e), n.bidIdManager.get(t)
    }, e.prototype.nurlError = function(e, t) {
      var n;
      return n = i.extend({
        type: STR.Tag.Helpers.BeaconCannon.nurlFail,
        nurl: e.currentTarget.src
      }, t), this.fireBeacon(STR.Tag.TrackingHost, "butler", n)
    }, e.prototype.fireNurl = function(e, t) {
      return this.firePixel(e, null, function(e) {
        return function(n) {
          return e.nurlError(n, t)
        }
      }(this))
    }, e
  }(), e.exports = STR.Tag.Helpers.BeaconCannon
}, function(e, t, n) {
  var i;
  n(0), n(1), i = STR.Vendor.$, STR.Tag.Helpers.PageGeometryHelper = {
    TABLET_MIN_WIDTH: 768,
    viewportDimensions: function() {
      var e, t;
      return t = e = 0, "number" == typeof window.innerWidth ? (t = window.innerWidth, e = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (t = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (t = document.body.clientWidth, e = document.body.clientHeight), [t, e]
    },
    viewportScroll: function() {
      return i(document).scrollTop()
    },
    elementDimensions: function(e) {
      var t;
      return t = e.getBoundingClientRect(), [t.width, t.height]
    },
    elementPosition: function(e) {
      var t, n;
      for (t = e.offsetLeft, n = e.offsetTop; e.offsetParent;) e = e.offsetParent, t += e.offsetLeft, n += e.offsetTop;
      return [t, n]
    },
    thumbnailDimensions: function(e) {
      var t, n, r;
      return r = i(e).find(".str-thumbnail"), n = null != r ? r.width() : void 0, t = null != r ? r.height() : void 0, [n, t]
    },
    isDesktopAndTablet: function() {
      return this.viewportDimensions()[0] >= this.TABLET_MIN_WIDTH
    },
    fullPath: function(e) {
      var t, n, i;
      for (i = []; e.parentNode;) {
        if (e.id) {
          i.unshift("#" + e.id);
          break
        }
        if (e === e.ownerDocument.documentElement) i.unshift(e.tagName);
        else {
          for (t = 1, n = e; n.previousElementSibling;) n = n.previousElementSibling, t++;
          i.unshift(e.tagName + ":nth-child(" + t + ")")
        }
        e = e.parentNode
      }
      return i.join(" > ")
    },
    distanceFromBottomOfViewport: function(e) {
      return e.getBoundingClientRect().top - this.bottomOfViewport()
    },
    elementOnPage: function(e) {
      var t;
      return t = e.getBoundingClientRect(), !(0 === t.top && 0 === t.bottom && 0 === t.left && 0 === t.right)
    },
    bottomOfViewport: function() {
      return window.innerHeight
    }
  }, e.exports = STR.Tag.Helpers.PageGeometryHelper
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o);
  n(0), n(1);
  var l = n(31),
    c = n(17),
    u = n(28),
    d = STR.Vendor.$,
    p = function() {
      function e(t, n) {
        (0, a.default)(this, e), this.loadAd = this.loadAd.bind(this), this.adRequestCallback = this.adRequestCallback.bind(this), this.adRequestFailCallback = this.adRequestFailCallback.bind(this), this.setBestTitle = this.setBestTitle.bind(this), this.renderCreative = this.renderCreative.bind(this), this.truncateIfNeeded = this.truncateIfNeeded.bind(this), this.fireBeacon = this.fireBeacon.bind(this), this.success = "success", this.renderFail = "renderFail", this.failure = "failure", this.timeout = "requestTimeout", this.noConsent = "gdprNoConsent", this.creativeStore = t, this.creative = t.peek().creative, this.creative ? (this.ckey = this.creative.creative_key, this.campaignKey = this.creative.campaign_key) : (this.ckey = null, this.campaignKey = null), this.assetsUrl = c.replaceCacheBusterParam(n), this.appendArid(), t && t.placement && t.placement.placementAttributes ? this.maxHeadlineLength = t.placement.placementAttributes.max_headline_length : this.maxHeadlineLength = void 0, this.description = void 0, this.alternateThumbnailAssets = [], this.brandLogoUrl = void 0, this.advertiser = void 0, this.creativeType = void 0, this.mediaUrl = void 0, this.vastTag = void 0, this.creativeType = void 0, this.selectedTitleAsset = void 0, this.visibleBeacons = [], this.impressionBeacons = [], this.clickBeacons = [], this.cannon = STR.Tag.Helpers.BeaconCannon.getInstance()
      }
      return (0, s.default)(e, [{
        key: "handleFallbackMacro",
        value: function(e) {
          this.creative.beacons.impression = this.creative.beacons.impression.map(function(t) {
            return t.replace("{isfallback}", e ? 0 : 1)
          })
        }
      }, {
        key: "loadAd",
        value: function(e, t) {
          this.renderCallback = e, this.targetElement = t, this.$targetElement = d(t), this.dynamicCreativeAllowed() ? l.jsonGet(this.assetsUrl, {
            success: this.adRequestCallback,
            error: this.adRequestFailCallback,
            timeout: 1200,
            withCredentials: !0
          }) : (this.fireBeacon(this.noConsent, {
            message: u.consentString
          }), this.renderCallback(this.creativeStore, this.targetElement))
        }
      }, {
        key: "adRequestCallback",
        value: function(e) {
          try {
            e.assets && this.parseAssets(e.assets), e.eventtrackers && this.parseEventTrackers(e.eventtrackers), this.renderCreative(), this.handleFallbackMacro(!0), this.renderCallback(this.creativeStore, this.targetElement), this.fireBeacon(this.success)
          } catch (e) {
            this.handleFallbackMacro(!1), this.fireBeacon(this.renderFail, e), this.renderCallback(this.creativeStore, this.targetElement)
          }
        }
      }, {
        key: "adRequestFailCallback",
        value: function(e, t, n) {
          this.handleFallbackMacro(!1);
          var i = "timeout" === t ? this.timeout : this.failure;
          this.fireBeacon(i, {
            message: n
          }), this.renderCallback(this.creativeStore, this.targetElement)
        }
      }, {
        key: "handleThumbnailAsset",
        value: function(e) {
          this.alternateThumbnailAssets.push(e.img)
        }
      }, {
        key: "handleTitleAsset",
        value: function(e) {
          this.setBestTitle(e)
        }
      }, {
        key: "handleImageAsset",
        value: function(e) {
          switch (e.img.type) {
            case 1:
              this.brandLogoUrl = e.img.url;
              break;
            case 3:
              this.handleThumbnailAsset(e)
          }
        }
      }, {
        key: "handleDataAsset",
        value: function(e) {
          var t = e.data.type;
          switch (!1) {
            case 1 !== t:
              this.advertiser = e.data.value;
            case 2 !== t:
              this.description = e.data.value
          }
        }
      }, {
        key: "handleVideoAsset",
        value: function(e) {
          this.creativeType = "outstream", this.vastTag = e.video.vasttag
        }
      }, {
        key: "handleLinkAsset",
        value: function(e) {
          this.mediaUrl = e.link.url, null != e.link.clicktrackers && (this.clickBeacons = e.link.clicktrackers)
        }
      }, {
        key: "parseAssets",
        value: function(e) {
          var t = this;
          this.creativeType = "clickout", e.forEach(function(e) {
            null != e.title ? t.handleTitleAsset(e) : null != e.img ? t.handleImageAsset(e) : null != e.data ? t.handleDataAsset(e) : null != e.video ? t.handleVideoAsset(e) : null != e.link && t.handleLinkAsset(e)
          })
        }
      }, {
        key: "parseEventTrackers",
        value: function(e) {
          var t = this;
          e.forEach(function(e) {
            1 === e.event && 1 === e.method && t.impressionBeacons.push(e.url), 2 === e.event && 1 === e.method && t.visibleBeacons.push(e.url)
          })
        }
      }, {
        key: "setBestTitle",
        value: function(e) {
          null == this.selectedTitleAsset && (this.selectedTitleAsset = e);
          var t = this.selectedTitleAsset.title.text.length,
            n = e.title.text.length;
          t <= this.maxHeadlineLength ? n > t && n <= this.maxHeadlineLength && (this.selectedTitleAsset = e) : t > this.maxHeadlineLength && n < t && (this.selectedTitleAsset = e)
        }
      }, {
        key: "renderCreative",
        value: function() {
          var e = this.creative;
          this.selectedTitleAsset && (e.title = this.truncateIfNeeded(this.selectedTitleAsset.title.text)), null != this.description && (e.description = this.description), null != this.brandLogoUrl && (e.brand_logo_url = this.brandLogoUrl), null != this.advertiser && (e.advertiser = this.advertiser), null != this.mediaUrl && (e.media_url = this.mediaUrl), null != this.vastTag && (e.vast_url = this.vastTag), null != this.creativeType && (e.action = this.creativeType), this.visibleBeacons.length > 0 && (e.beacons.visible || (e.beacons.visible = []), e.beacons.visible = e.beacons.visible.concat(this.visibleBeacons)), this.clickBeacons.length > 0 && (e.beacons.click || (e.beacons.click = []), e.beacons.click = e.beacons.click.concat(this.clickBeacons)), this.impressionBeacons.length > 0 && (e.beacons.impression || (e.beacons.impression = []), e.beacons.impression = e.beacons.impression.concat(this.impressionBeacons)), e.alternateThumbnailAssets = this.alternateThumbnailAssets
        }
      }, {
        key: "truncateIfNeeded",
        value: function(e) {
          return e.length > this.maxHeadlineLength && (e = e.substring(0, this.maxHeadlineLength) + "..."), e
        }
      }, {
        key: "fireBeacon",
        value: function(e, t) {
          this.cannon.fireBeacon(STR.Tag.TrackingHost, "butler", {
            type: STR.Tag.Helpers.BeaconCannon.dcoRequest,
            arid: this.creativeStore.adserverRequestId,
            pkey: this.creativeStore.placementKey,
            placementIndex: STR.Tag.Helpers.HtmlUtility.getDomPlacementIndex(this.$targetElement),
            url: this.assetsUrl,
            result: e,
            message: null != t ? t.message : void 0,
            name: null != t ? t.name : void 0,
            ckey: this.ckey,
            campaign_key: this.campaignKey
          })
        }
      }, {
        key: "dynamicCreativeAllowed",
        value: function() {
          switch (!0) {
            case /nativead\.flashtalking\.com/.test(this.assetsUrl):
              return u.flashtalkingAllowed();
            case /jivox\.com/.test(this.assetsUrl):
              return u.jivoxAllowed();
            case /criteo\.com/.test(this.assetsUrl):
              return u.criteoAllowed();
            default:
              return !1
          }
        }
      }, {
        key: "appendArid",
        value: function() {
          if (/nativead\.flashtalking\.com/.test(this.assetsUrl)) {
            var e = void 0;
            e = /\?/.test(this.assetsUrl) ? "&" : "?", this.assetsUrl += e + "ft_custom=" + this.creativeStore.adserverRequestId
          }
        }
      }]), e
    }();
  e.exports = p
}, function(e, t, n) {
  "use strict";
  (function(t) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var r = n(20),
      a = i(r),
      o = n(108),
      s = i(o),
      l = n(45),
      c = i(l),
      u = n(3),
      d = i(u),
      p = n(4),
      h = i(p),
      f = n(54),
      m = i(f),
      g = n(55),
      v = i(g),
      y = n(56),
      b = i(y),
      T = n(79),
      w = n(231),
      k = n(138),
      S = n(22),
      x = n(126),
      C = n(57),
      _ = ["0e8893f90b606c9c5d33f1be-175261103", "0e8893f90b606c9c5d33f1be-175260978", "0e8893f90b606c9c5d33f1be-175261008", "0e8893f90b606c9c5d33f1be-175914706"],
      R = function(e) {
        return _.indexOf(e) >= 0
      },
      E = function(e) {
        function n(e, t, i, r) {
          (0, d.default)(this, n);
          var a = (0, m.default)(this, (n.__proto__ || (0, c.default)(n)).apply(this, arguments));
          return a.postBannerMetaDataMessage = a.postBannerMetaDataMessage.bind(a), a.creative.adm = a.creative.adm || a.creative.banner_asset, a.creative.adm = a.creative.adm.replace(/<\\\/script>/gi, "<\/script>"), a.creative.title = a.creative.title || "Click to find out more about a new promotion", a.creative.description = a.creative.description || "Don't miss this content from our sponsor", a.creative.media_url && ("https://sharethrough.com" === a.creative.media_url || a.creative.media_url.indexOf("https://sfa.sharethrough.com/trackable_redirect") >= 0) && (a.creative.media_url = null), a.creative.advertiser || (a.creative.promoted_by_text = ""), a
        }
        return (0, b.default)(n, e), (0, h.default)(n, [{
          key: "fireClickBeacons",
          value: function(e) {
            var n = t(e.target).closest(".str-thumbnail").length > 0,
              i = this._findClickableElement(),
              r = this._findClickoutUrl(),
              a = this.creative.media_url;
            this.tracker.trackUserEvent("clickout"), (i || r || n || a) && this.tracker.handleShare("custom")
          }
        }, {
          key: "handleClick",
          value: function(e) {
            if ((0, v.default)(n.prototype.__proto__ || (0, c.default)(n.prototype), "handleClick", this).call(this, e), "thumbnail" != (t(e.target).closest(".str-thumbnail").length > 0 ? "thumbnail" : "rest-of-placement")) {
              if (R(this.creative.creative_key)) return void window.open(this.creative.media_url, "_blank");
              var i = this._findClickableElement();
              if (i) return void i.dispatchEvent(new MouseEvent("click"));
              var r = this._findClickoutUrl();
              return r ? void window.open(r, "_blank") : void 0
            }
          }
        }, {
          key: "_findClickableElement",
          value: function() {
            var e = k.bannerType(this.creative.adm),
              t = this.getThumbnailElement()[0];
            if ("appnexus" === e) {
              var n = t.querySelector("img[onclick]");
              if (n && n.getAttribute("onclick").match(/EBG\.ads/)) return n
            }
            return t.querySelector('a:not(.qc-adchoices-link):not([href*="adssettings.google.com"]):not([href*="privacy.centro.net"]):not([href="#"])')
          }
        }, {
          key: "_findClickoutUrl",
          value: function() {
            for (var e = this.getThumbnailElement()[0], t = k.bannerType(this.creative.adm), n = e.querySelectorAll("iframe"), i = 0; i < n.length; i++) {
              var r = n[i],
                a = void 0;
              try {
                a = r && JSON.parse(r.getAttribute("name"))
              } catch (e) {}
              if (a && a.clicks && a.clicks.clickTag) return a.clicks.clickTag
            }
            if ("adform" === t) {
              var o = C.createElement("div");
              return o.innerHTML = this.creative.adm, this._getUrlFromElement(o.querySelector("noscript"))
            }
            if (window.studioV2 && window.studioV2.api && window.studioV2.api.creatives && window.studioV2.api.creatives.length > 0 && window.studioV2.api.creatives[0].a) {
              var l = window.studioV2.api.creatives[0].a,
                c = (0, s.default)(l),
                u = c.filter(function(e) {
                  return l[e] && l[e].Exit
                })[0];
              if (!u) return;
              var d = l[u].Exit,
                p = (0, s.default)(d),
                h = ["mediaClickTag", "clickTag1"];
              return d[p.filter(function(e) {
                return h.indexOf(e) >= 0
              })[0] || p[0]].url
            }
            return this._getUrlFromElement(e.querySelector("noscript"))
          }
        }, {
          key: "_getUrlFromElement",
          value: function(e) {
            var t = e && e.innerHTML.match(/href=['"](.*?)['"]/);
            return t && t[1]
          }
        }, {
          key: "_getBannerClickable",
          value: function() {
            return !!(this.creative.media_url || this._findClickableElement() || this._findClickoutUrl())
          }
        }, {
          key: "_updateTemplate",
          value: function() {
            var e = this,
              t = S.getParameterByName("placement_key");
            if (S.getParameterByName("str_modify") && t) {
              return (new x).getWaterfall(t).then(function(t) {
                var n = t.placement.placementAttributes.template;
                e.template = S.decodeString(n)
              })
            }
            return a.default.resolve()
          }
        }, {
          key: "initClickBlocker",
          value: function() {
            var e = this,
              t = C.createElement("div");
            t.style.width = this.element.offsetWidth + "px", t.style.height = this.element.offsetHeight + "px", t.style.position = "absolute", t.style.zIndex = "9999", t.setAttribute("data-testid", "str-banner-clickblocker");
            var n = C.createElement("div");
            n.style.width = this.element.offsetWidth + "px", n.style.height = this.element.offsetHeight + "px", n.style.margin = "auto", n.setAttribute("data-testid", "str-banner-wrapper"), this.element.parentNode.insertBefore(n, this.element), n.appendChild(t), n.appendChild(this.element), t.addEventListener("click", function(t) {
              window.open(e.creative.media_url, "_blank"), e.fireClickBeacons(t)
            })
          }
        }, {
          key: "postBannerMetaDataMessage",
          value: function() {
            var e = {
                key: "BannerMetadata",
                payload: {
                  bannerType: k.bannerType(this.creative.adm),
                  renderMethod: k.getRenderMethod(this.creative.adm),
                  clickable: this._getBannerClickable()
                }
              },
              t = void 0;
            t = "development" === STR.Tag.Version ? ["http://localhost:3003", "http://localhost:3008"] : ["https://enhanced-ads.nativeadvertising.com", "http://enhanced-ads.nativeadvertising.com", "http://generator.sharethrough.com", "https://generator.sharethrough.com", "https://sfa.sharethrough.com"], t.indexOf(window.parent.origin) >= 0 && window.parent.postMessage(e, window.parent.origin)
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = arguments;
            return this._updateTemplate().then(function() {
              (0, v.default)(n.prototype.__proto__ || (0, c.default)(n.prototype), "render", e).apply(e, t), e.element.querySelector("#str-cta, .str-cta") && (e.element.querySelector("#str-cta, .str-cta").style.display = "none");
              var i = new w(e.getThumbnailElement()[0], e.creative, e.tracker),
                r = k.bannerType(e.creative.adm),
                a = k.getRenderMethod(e.creative.adm);
              return i.render().then(function() {
                e.creative.media_url && !R(e.creative.creative_key) && e.initClickBlocker(), e.tracker.trackEvent("banner.rendered", {
                  bannerType: r,
                  renderMethod: a,
                  clickable: e._getBannerClickable()
                }), e.element.addEventListener("click", e.fireClickBeacons.bind(e)), e.postBannerMetaDataMessage()
              }).catch(function() {
                e.tracker.trackEvent("banner.renderFailure", {
                  bannerType: r,
                  renderMethod: a
                })
              })
            })
          }
        }]), n
      }(T);
    e.exports = E
  }).call(t, n(24))
}, function(e, t, n) {
  "use strict";
  var i = n(57),
    r = {
      appendTo: function(e, t, n, i) {
        i = i || "IMPORTANT SAFETY INFORMATION";
        var a = r.createContainer(t, i);
        r.addStyle(e, a), r.addAnimation(a, {
          scroll: n
        }), e.appendChild(a)
      },
      addStyle: function(e, t) {
        var n = i.createElement("style", {
          innerHTML: ".str-isi-text{font-size:10px;line-height: 12px;background-color:white;overflow-y:scroll;height:82px;width:100%;}.str-isi-headline{width:100%;line-height: 18px;font-size: 14px;font-weight:bold;}.str-isi-bundle{height:100px;position:absolute;bottom:14px;}"
        });
        t.appendChild(n), e.style["padding-bottom"] = "114px"
      },
      addAnimation: function(e) {
        (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}).scroll && r.autoScroll(e.querySelector(".str-isi-text"))
      },
      createContainer: function(e, t) {
        var n = i.createElement("div", {
            className: "str-isi-headline",
            textContent: t
          }),
          r = i.createElement("div", {
            className: "str-isi-text",
            innerHTML: e
          }),
          a = i.createElement("div", {
            className: "str-isi-bundle"
          });
        return i.bundleElements(a, [n, r])
      },
      autoScroll: function(e) {
        var t = e.scrollTop,
          n = setInterval(function() {
            e.scrollBy(0, 1);
            var i = e.scrollTop;
            t === e.scrollTop && clearTimeout(n), t = i
          }, 200)
      }
    };
  e.exports = r
}, function(e, t, n) {
  "use strict";
  t.__esModule = !0;
  var i = n(129),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i);
  t.default = function(e) {
    if (Array.isArray(e)) {
      for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
      return n
    }
    return (0, r.default)(e)
  }
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o),
    l = n(57),
    c = function() {
      function e(t, n) {
        (0, a.default)(this, e), this.targetElement = t, this.url = n, this.loadingSpinner = this._loadingSpinnerElement()
      }
      return (0, s.default)(e, [{
        key: "render",
        value: function() {
          this.targetElement.appendChild(this.loadingSpinner);
          var e = new Image;
          return e.onload = this._onload.bind(this), e.src = this.url, e
        }
      }, {
        key: "_onload",
        value: function() {
          this.loadingSpinner.parentElement.removeChild(this.loadingSpinner), "IMG" === this.targetElement.tagName ? this.targetElement.src = this.url : this.targetElement.style.backgroundImage = "url(" + this.url + ")"
        }
      }, {
        key: "_loadingSpinnerElement",
        value: function() {
          var e = l.createElement("div");
          return e.innerHTML = '\n  <style>\n  .str-thumbnail-loading {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin: -14px 0 0 -42px;\n    padding: 10px;\n    background: rgba(20, 20, 20, 0.9);\n    -webkit-border-radius: 5px;\n    -moz-border-radius: 5px;\n    border-radius: 5px;\n    -webkit-box-shadow: inset 0 0 5px #000, 0 1px 1px rgba(255, 255, 255, 0.1);\n    -moz-box-shadow: inset 0 0 5px #000, 0 1px 1px rgba(255, 255, 255, 0.1);\n    -ms-box-shadow: inset 0 0 5px #000, 0 1px 1px rgba(255, 255, 255, 0.1);\n    -o-box-shadow: inset 0 0 5px #000, 0 1px 1px rgba(255, 255, 255, 0.1);\n    box-shadow: inset 0 0 5px #000, 0 1px 1px rgba(255, 255, 255, 0.1);\n  }\n  .str-thumbnail-loading-dot {\n    float: left;\n    width: 8px;\n    height: 8px;\n    margin: 0 4px;\n    background: white;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    border-radius: 50%;\n    opacity: 0;\n    -webkit-box-shadow: 0 0 2px black;\n    -moz-box-shadow: 0 0 2px black;\n    -ms-box-shadow: 0 0 2px black;\n    -o-box-shadow: 0 0 2px black;\n    box-shadow: 0 0 2px black;\n    -webkit-animation: loadingFade 1s infinite;\n    -moz-animation: loadingFade 1s infinite;\n    animation: loadingFade 1s infinite;\n  }\n  .str-thumbnail-loading-dot:nth-child(1) {\n    -webkit-animation-delay: 0s;\n    -moz-animation-delay: 0s;\n    animation-delay: 0s;\n  }\n  .str-thumbnail-loading-dot:nth-child(2) {\n    -webkit-animation-delay: 0.1s;\n    -moz-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n  }\n  .str-thumbnail-loading-dot:nth-child(3) {\n    -webkit-animation-delay: 0.2s;\n    -moz-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n  }\n  .str-thumbnail-loading-dot:nth-child(4) {\n    -webkit-animation-delay: 0.3s;\n    -moz-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n  }\n  @-webkit-keyframes loadingFade {\n    0% { opacity: 0; }\n    50% { opacity: 0.8; }\n    100% { opacity: 0; }\n  }\n  @-moz-keyframes loadingFade {\n    0% { opacity: 0; }\n    50% { opacity: 0.8; }\n    100% { opacity: 0; }\n  }\n  @keyframes loadingFade {\n    0% { opacity: 0; }\n    50% { opacity: 0.8; }\n    100% { opacity: 0; }\n  }\n</style >\n  <div class="str-thumbnail-loading">\n    <div class="str-thumbnail-loading-dot"></div>\n    <div class="str-thumbnail-loading-dot"></div>\n    <div class="str-thumbnail-loading-dot"></div>\n    <div class="str-thumbnail-loading-dot"></div>\n  </div> \n', e
        }
      }]), e
    }();
  e.exports = c
}, function(e, t, n) {
  "use strict";
  var i = /data-dcm-rendering-mode\s*=\s*('|")script('|")/,
    r = /<a onclick\s*=\s*('|")new Image\(\)\.src\s*=\s*('|")\S+('|")\s*href=('|")https?:\/\/clickserv\.sitescout\.com\/\S*('|")/,
    a = /.*servedby\.flashtalking\.com/,
    o = /a2\.adform\.net/,
    s = /<script src="https:\/\/\w{4}-ib\.adnxs\.com/,
    l = /content\.quantcount\.com/,
    c = /(rubicon_cb\s?=\s?)|(window\.rubicon_ad\s?=\s?)/,
    u = /data-str-render-strategy="(ps|div|iframe)"/,
    d = function(e) {
      return e.match(u) && e.match(u)[1]
    },
    p = {
      bannerType: function(e) {
        return "ps" === d(e) ? "postscribe" : "iframe" === d(e) ? "iframe" : "div" === d(e) ? "div" : e.match(i) ? "dcm_script" : e.match(r) ? "centro_js" : e.match(a) ? "flashtalking" : e.match(o) ? "adform" : e.match(s) ? "appnexus" : e.match(l) ? "quantcast" : e.match(c) ? "rubicon" : "other"
      },
      getRenderMethod: function(e) {
        switch (p.bannerType(e || "")) {
          case "centro_js":
          case "div":
            return "div";
          case "dcm_script":
          case "flashtalking":
          case "appnexus":
          case "quantcast":
          case "rubicon":
          case "postscribe":
            return "postscribe";
          case "adform":
          case "iframe":
          default:
            return "iframe"
        }
      }
    };
  e.exports = p
}, function(e, t, n) {
  "use strict";
  var i = n(140),
    r = i.styles,
    a = function(e) {
      for (var t = [], n = 0; n < e; n++) t.push(null);
      return t
    },
    o = function(e) {
      return e.map(function() {
        return '<li class="slide"><div data-str-native-key="demo-key"></div></li>'
      }).join("")
    },
    s = function(e) {
      var t = a(e);
      return '\n    <div class="carousel-wrapper">\n      <div class="str-flexslider">\n        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">\n        <style>' + r() + '</style>\n        <ul class="slides">' + o(t) + "</ul>\n      </div>\n    </div>\n  "
    },
    l = function() {
      return '\n    <div class="flex-direction-nav str-slide-control">\n      <a class="flex-prev str-slide-control">\n        <i class="material-icons str-slide-control">chevron_left</i>\n      </a>\n      <a class="flex-next str-slide-control">\n        <i class="material-icons str-slide-control">chevron_right</i>\n      </a>\n    </div>'
    },
    c = function(e) {
      return '\n    <ul class="flex-control-nav">\n      ' + a(e).map(function() {
        return '<li class="direct-nav-control str-slide-control">\n                    <a class="str-slide-control"><i class="material-icons str-slide-control">fiber_manual_record</i></a>\n                  </li>'
      }).join("") + "\n    </ul>\n  "
    };
  e.exports = {
    generateCarouselContainerTemplate: s,
    generateSequentialControlsTemplate: l,
    generateDirectNavControlsTemplate: c
  }
}, function(e, t, n) {
  "use strict";
  (function(t) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var r = n(3),
      a = i(r),
      o = n(4),
      s = i(o),
      l = function() {
        return ".str-flexslider ul.slides li.slide {\n      margin: 0;\n      padding: 0;\n    }\n    .str-flexslider .slides {\n      padding: 0;\n      margin: 0;\n    }\n    .str-flexslider:hover .flex-direction-nav a {\n      display: block;\n    }\n    .flex-direction-nav a {\n      display: none;\n      position: absolute;\n      top: 50%;\n      margin-top: -20px;\n      color: rgba(0, 0, 0, 0.4);\n      text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);\n      z-index: 10;\n    }\n    .str-flexslider ul.flex-control-nav {\n      position: absolute;\n      z-index: 10;\n      bottom: 10px;\n      width: 100%;\n      text-align: center;\n      padding: 0;\n      margin: 0;\n      border: none;\n      background: none;\n    }\n    .str-flexslider ul.flex-control-nav li {\n      margin: 0;\n      padding: 0;\n      border: none;\n      float: none;\n      width: unset;\n      display: inline-block;\n    }\n    .str-flexslider ul.flex-control-nav li a {\n      color: rgba(0, 0, 0, 0.3) !important;\n    }\n    .str-flexslider ul.flex-control-nav li a.flex-active {\n      color: white !important;\n    }\n    .flex-direction-nav a:hover {\n      color: white;\n      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);\n    }\n    .flex-direction-nav .material-icons {\n      font-size: 40px;\n    }\n    .flex-control-nav .material-icons {\n      font-size: 10px;\n    }\n    .flex-prev { left: 0 }\n    .flex-next { right: 0 }"
      },
      c = function() {
        function e(t, n) {
          (0, a.default)(this, e), this.imageUrls = t, this.thumbnailElement = n
        }
        return (0, s.default)(e, [{
          key: "thumbnailStyles",
          value: function() {
            var e = t(this.thumbnailElement);
            this.thumbnailElement.style.backgroundImage = "", this.thumbnailElement.style.width = "";
            var n = e.outerHeight(),
              i = this.thumbnailElement.getAttribute("style") + "\n      width: " + e.outerWidth() + "px !important;\n      position: relative !important;\n      padding-bottom: 0 !important;\n    ";
            return n > 0 && (i += "height: " + n + "px !important;"), i
          }
        }, {
          key: "slideshowTemplate",
          value: function() {
            return '\n      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"\n      rel="stylesheet">\n      <style>.str-flexslider ul.slides li.slide {\n      margin: 0;\n      padding: 0;\n    }\n    .str-flexslider .slides {\n      padding: 0;\n      margin: 0;\n    }\n    .str-flexslider:hover .flex-direction-nav a {\n      display: block;\n    }\n    .flex-direction-nav a {\n      display: none;\n      position: absolute;\n      top: 50%;\n      margin-top: -20px;\n      color: rgba(0, 0, 0, 0.4);\n      text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.3);\n      z-index: 10;\n    }\n    .str-flexslider ul.flex-control-nav {\n      position: absolute;\n      z-index: 10;\n      bottom: 10px;\n      width: 100%;\n      text-align: center;\n      padding: 0;\n      margin: 0;\n      border: none;\n      background: none;\n    }\n    .str-flexslider ul.flex-control-nav li {\n      margin: 0;\n      padding: 0;\n      border: none;\n      float: none;\n      width: unset;\n      display: inline-block;\n    }\n    .str-flexslider ul.flex-control-nav li a {\n      color: rgba(0, 0, 0, 0.3) !important;\n    }\n    .str-flexslider ul.flex-control-nav li a.flex-active {\n      color: white !important;\n    }\n    .flex-direction-nav a:hover {\n      color: white;\n      text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);\n    }\n    .flex-direction-nav .material-icons {\n      font-size: 40px;\n    }\n    .flex-control-nav .material-icons {\n      font-size: 10px;\n    }\n    .flex-prev { left: 0 }\n    .flex-next { right: 0 }</style>\n      <div class="str-flexslider">\n        <ul class="slides">' + this.slides() + '</ul>\n        <div class="flex-direction-nav str-slide-control">\n          <a class="flex-prev str-slide-control">\n            <i class="material-icons str-slide-control">chevron_left</i>\n          </a>\n          <a class="flex-next str-slide-control">\n            <i class="material-icons str-slide-control">chevron_right</i>\n          </a>\n        </div>\n        <ul class="flex-control-nav str-slide-control">' + this.controlNavToggles() + "</ul>\n      </div>\n    "
          }
        }, {
          key: "slides",
          value: function() {
            var e = this;
            return this.imageUrls.map(function() {
              return '<li class="slide"><div class="str-thumbnail" style="' + e.thumbnailStyles() + " background-image: url('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7')\"></div></li>"
            }).join("")
          }
        }, {
          key: "controlNavToggles",
          value: function() {
            return this.imageUrls.map(function() {
              return '<li class="str-slide-control"><a class="str-slide-control"><i class="material-icons str-slide-control">fiber_manual_record</i></a></li>'
            }).join("")
          }
        }]), e
      }();
    e.exports = {
      SlideshowElement: c,
      styles: l
    }
  }).call(t, n(24))
}, function(e, t, n) {
  n(0), n(1), STR.Tag.Helpers.StyleHelper = {
    sharingStyle: function(e) {
      return "#" + e + " div { margin: 0px; padding: 0px; } .str-clear{ clear: both; } #" + e + " .str-embed-wrapper, #" + e + " .str-details-wrapper { width:100%; } #" + e + " .str-embed-container { padding-bottom: 56.25%; height: 0; overflow: hidden; position: relative; } #" + e + " iframe.str-embed-video { position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; max-height: 100%; } #" + e + " .str-sharing-container { margin-bottom:3px; float: left; } #" + e + " .str-sharing-icon { background-size: cover; background-repeat: no-repeat; background-position: 50%; } #" + e + " a.str-custom-share { background-color: #37B99A; }"
    },
    cardStyle: function(e) {
      return "#" + e + ".str-overlay { display:none; position: absolute; width: 100%; background: #000; font-family: Helvetica Neue, Helvetica, sans-serif; opacity: .5; z-index:100; } .str-card-open { overflow: visible !important; } #" + e + " .str-embed-container.str-article-content{ padding-bottom: 0; height: auto; overflow: hidden; position: relative; } .str-card-bg { opacity: 0; background: rgba(0,0,0,0.8); position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 999999998; cursor: default; overflow: hidden; } .str-card-container { background: white; position: fixed; top: 0; left: 0; width: 100%; height: 100%; font-family: Helvetica Neue, Helvetica, sans-serif; box-shadow: 0 0 12px 0 rgba(0,0,0,0.4); z-index: 999999999; cursor: default; opacity: 0; overflow: hidden; outline: none !important; } .str-card-container * { box-sizing: border-box; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; font-family: Helvetica Neue, Helvetica, sans-serif; } .str-card-wrapper { opacity: 0; } .str-no-scroll { overflow: hidden !important; height: auto !important; } .str-header { position: relative; top: 0; left: 0; height: 60px; width: 100%; text-align: center; @include transition(all 500ms ease); } #" + e + " .str-header .str-advertiser { display: inline-block; margin: 2px 0 0; color: black; line-height: 14px; font-size: 14px; font-weight: bold; max-width: calc(100% - 70px); } .str-header .ad-sub { display: block; margin-bottom: 5px; font-weight: 400; font-size: 12px; color: #ababab; } #" + e + " .header-controls { position: relative; height: 100%; width: 100%; padding: 10px 20px; background: #ffffff; background: -moz-linear-gradient(top,  #ffffff 0%, #eeeeee 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#eeeeee)); background: -webkit-linear-gradient(top,  #ffffff 0%,#eeeeee 100%); background: -o-linear-gradient(top,  #ffffff 0%,#eeeeee 100%); background: -ms-linear-gradient(top,  #ffffff 0%,#eeeeee 100%); background: linear-gradient(to bottom,  #ffffff 0%,#eeeeee 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#eeeeee',GradientType=0 ); border-bottom: 1px solid #e0e0e0; color: #777; padding: 10px 15px; z-index: 100; } #" + e + " .privacy-policy { background: white; position: absolute; top: -75%; width: 100%; padding: 20px 20px 5px; font-size: 12px; line-height: 18px; color: #777; text-align: center; box-shadow: 0 2px 6px 0 rgba(0,0,0,0.2); z-index:99; } #" + e + " .privacy-policy a { color: #37b99a; font-weight: 400; text-decoration: none; } .privacy-policy button { background: none; display: block; position: relative; margin: 10px auto 0; color: #777; text-align: center; border: none; outline: 0; } .privacy-policy .str-ico-up { width: 24px; height: 24px; display: block; margin: auto; } #" + e + " .str-footer { background: white; background: -moz-linear-gradient(top,  #ffffff 0%, #eeeeee 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(100%,#eeeeee)); background: -webkit-linear-gradient(top,  #ffffff 0%,#eeeeee 100%); background: -o-linear-gradient(top,  #ffffff 0%,#eeeeee 100%); background: -ms-linear-gradient(top,  #ffffff 0%,#eeeeee 100%); background: linear-gradient(to bottom,  #ffffff 0%,#eeeeee 100%); filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#eeeeee',GradientType=0 ); padding: 15px; box-shadow: 0 -1px 0  0 #e0e0e0; bottom: 0; left: 0; width: 100%; height: 60px; text-align: center; } .str-ico-info, .str-ico-close, .str-ico-up { background-repeat: no-repeat; background-position: 50%; display: inline-block; cursor:pointer; width:24px; height:40px; } .str-ico-up { background-image: url('" + STR.Tag.ClientJsUrl + "/assets/card-icon-sprite.png'); background-size: 257px 24px; background-position: -52px -1px; } .str-ico-info { background-image: url('" + STR.Tag.ClientJsUrl + "/assets/card-icon-sprite.png'); background-size: 257px 24px; background-position: -25px 8px; float:right; width: 25px; } .str-ico-close { background-image: url('" + STR.Tag.ClientJsUrl + "/assets/card-icon-sprite.png'); background-size: 185px 18px; background-position: 6px 11px; float:left; } a .str-sharing-icon { float: left; margin: 3px 20px 0 0; height: 24px; width: 24px; } #" + e + " a.str-facebook-share .str-sharing-icon { background-image: url('" + STR.Tag.ClientJsUrl + "/assets/card-icon-sprite.png'); background-size: 257px 24px; background-position: -103px 0px; } #" + e + " a.str-twitter-share .str-sharing-icon { background-image: url('" + STR.Tag.ClientJsUrl + "/assets/card-icon-sprite.png'); background-size: 257px 24px; background-position: -129px 0px; } #" + e + " a.str-email-share .str-sharing-icon { background-image: url('" + STR.Tag.ClientJsUrl + "/assets/card-icon-sprite.png'); background-size: 257px 24px; background-position: -77px 0px; } #" + e + " a.str-custom-share .str-sharing-icon { background-color: #37B99A; } #" + e + ".str-overlay a.str-facebook-share .str-sharing-icon { background-position: -205px 0px; margin-left: 15px; margin-top: 5px; } #" + e + ".str-overlay a.str-email-share .str-sharing-icon { background-position: -179px 0px; margin-top: 5px; } #" + e + ".str-overlay a.str-twitter-share .str-sharing-icon { background-position: -231px 0px; margin-top: 5px; } #" + e + " a.str-custom-share { float: right; height: 40px; margin-top: -5px; padding: 0 15px; font-size: 12px; line-height: 40px; color: #fff; border-radius: 3px; } #" + e + " .str-custom-container { float: right; max-width:158px; } #" + e + " .str-card-wrapper.str-cr-video .str-embed-wrapper, #" + e + " .str-card-wrapper.str-cr-hosted-video .str-embed-wrapper #" + e + " .str-card-wrapper.str-cr-autoplay .str-embed-wrapper { background-color: black; } @media screen and (-webkit-min-device-pixel-ratio:0) and (min-resolution:.001dpcm) { video::-webkit-media-controls-enclosure { overflow:hidden; } video::-webkit-media-controls-panel { width: calc(100% + 30px); /* Adjust as needed */ } } @media only screen and (max-width: 767px) { #" + e + " .str-container { position: fixed; overflow: auto; overflow-y: auto; overflow-x: hidden; } #" + e + " .str-card-wrapper { height: 100%; } #" + e + " .str-embed-wrapper { height: calc(100% - 120px); height: -webkit-calc(100% - 120px); height: -moz-calc(100% - 120px); overflow: auto; overflow-y: auto; overflow-x: hidden; -webkit-overflow-scrolling: touch; } #" + e + " .str-embed-container { position: relative; top: 50%; transform: translateY(-50%); -webkit-transform: translateY(-50%); -moz-transform: translateY(-50%); } #" + e + " .str-embed-container.str-article-content { top: 0; transform: none; -webkit-transform: none; -moz-transform: none; } }"
    }
  }, e.exports = STR.Tag.Helpers.StyleHelper
}, function(e, t, n) {
  "use strict";

  function i() {
    if (!(Math.random() > .01)) {
      return STR.Tag.Helpers.BeaconCannon.getInstance().fireBeacon(STR.Tag.TrackingHost, "butler", {
        type: "ttdTimeout",
        timeout: !0
      })
    }
  }

  function r() {
    window.OpenID = {
      getIds: function(e) {
        return u = e.TDID
      }
    }
  }
  var a = STR.Tag.AppConfig.ttd_js,
    o = n(31),
    s = o.jsonGet,
    l = n(51),
    c = l.ttd,
    u = "",
    d = {
      requestUserSync: function() {
        return r(), s(a, {
          timeout: 2e3,
          dataType: "script"
        }).then(function() {
          c.uid = u, c.status = u ? "OK" : "ERR"
        }).catch(function() {
          c.uid = "", c.status = "timeout", i()
        })
      }
    };
  e.exports = d
}, function(e, t, n) {
  "use strict";

  function i(e) {
    function t() {
      return "uninitialized" != this.status
    }
    var n = e.uidType,
      i = e.uid,
      r = e.status;
    return STR.Vendor.$.extend({}, {
      uid: i,
      status: r,
      uidType: n,
      isReady: t
    })
  }
  e.exports = i
}, function(e, t, n) {
  "use strict";
  n(0), n(1);
  var i = n(31),
    r = i.jsonGet,
    a = STR.Tag.AppConfig,
    o = a.criteo_callback_function,
    s = a.criteo_js,
    l = n(51),
    c = l.criteo,
    u = {
      requestUserSync: function() {
        return r(s + "?r=2&c=158&j=" + o, {
          dataType: "jsonp",
          timeout: 2e3,
          jsonpCallback: o
        }).then(function(e) {
          c.uid = e.userid, c.status = e.status
        }).catch(function(e) {
          c.uid = "", c.status = "not_available"
        })
      }
    };
  e.exports = u
}, function(e, t, n) {
  "use strict";

  function i(e, t) {
    d.uid = e, d.status = t
  }

  function r(e) {
    return e && e.length <= 32 && "0" != e
  }
  var a = n(31),
    o = a.jsonGet,
    s = STR.Tag.AppConfig,
    l = s.appnexus_js,
    c = s.appnexus_callback_function,
    u = n(51),
    d = u.appNexus,
    p = n(17),
    h = p.getValidLocationProtocol,
    f = {
      requestUserSync: function() {
        return o(l, {
          timeout: 2e3,
          dataType: "jsonp",
          jsonpCallback: c
        }).then(function(e) {
          var t = e.uid,
            n = void 0;
          r(t) ? n = "OK" : (n = "not_available", t = ""), i(t, n), f.trackUid(n)
        }).catch(function(e) {
          i("", "timeout")
        })
      },
      getResponseTime: function() {
        var e = "" + h() + l + "?callback=" + c;
        try {
          return Math.floor(window.performance.getEntriesByName(e)[0].duration)
        } catch (e) {
          return null
        }
      },
      trackUid: function(e) {
        if (!(Math.random() > .01)) {
          var t = f.getResponseTime();
          if (null != t) {
            var n = "OK" === e ? STR.Tag.Helpers.BeaconCannon.appNexusUserIdFound : STR.Tag.Helpers.BeaconCannon.appNexusUserIdNotFound;
            STR.Tag.Helpers.BeaconCannon.getInstance().fireBeacon(STR.Tag.TrackingHost, "butler", {
              type: n,
              responseTime: t
            })
          }
        }
      }
    };
  e.exports = f
}, function(e, t, n) {
  "use strict";
  (function(t) {
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    var r = n(3),
      a = i(r),
      o = n(4),
      s = i(o),
      l = n(256),
      c = n(106),
      u = function() {
        function e(t, n, i) {
          var r = this;
          (0, a.default)(this, e), c.isSafeFrame() && (this.isSafeFrame = !0, c.register()), this.$playerWrappers = t, this.playerWrapper = this.$playerWrappers[0], this.adsManager = n, this.$iconWrapper = i, this.fullScreen = !1, this.toggleFullScreen = this.toggleFullScreen.bind(this), this.innovidListener = new l({
            onInit: function() {
              i.remove();
              var e = r.playerWrapper.querySelector("#click-blocker");
              e && e.parentNode.removeChild(e)
            },
            onEnterFullScreen: function() {
              n.setVolume(1), r.enterFullScreen()
            },
            onExitFullScreen: function() {
              n.setVolume(0), r.exitFullScreen()
            }
          }), this.innovidListener.listenTo(window)
        }
        return (0, s.default)(e, [{
          key: "toggleFullScreen",
          value: function() {
            var e = this;
            return this.isSafeFrame ? this.fullScreen ? c.collapse().then(function() {
              return e.exitFullScreen()
            }) : c.expandFullScreen().then(function() {
              return e.enterFullScreen()
            }) : this.fullScreen ? this.exitFullScreen() : this.enterFullScreen()
          }
        }, {
          key: "exitFullScreen",
          value: function() {
            if (this.fullScreen) {
              this.fullScreen = !1, this.$overlayBg.remove(), this.$playerWrappers.css(this.originalStyle), this.fullscreenStyleOverrides.parentNode.removeChild(this.fullscreenStyleOverrides), this.adsManager.resize(parseInt(this.originalStyle.width), parseInt(this.originalStyle.height), google.ima.ViewMode.NORMAL), this.$iconWrapper.css({
                display: "block"
              });
              var e = document.querySelector("body");
              e.style.position = "unset", e.style.width = "unset", e.style.top = "unset", window.scrollTo(0, this.scrollPosition)
            }
          }
        }, {
          key: "enterFullScreen",
          value: function() {
            if (!this.fullScreen) {
              var e = void 0,
                t = void 0;
              this.fullScreen = !0, this.adsManager.setVolume(1), this.adsManager.resume(), this.storeOriginalStyle(), window.innerWidth < 600 ? (t = window.innerWidth, e = 0) : (t = 600, e = window.innerWidth / 2 - 300);
              var n = .5625 * t,
                i = window.innerHeight / 2 - n / 2;
              this.$iconWrapper.css({
                display: "none"
              }), this.appendTranslucentBackground(), this.updateStyleForFullscreen(e, i, t, n)
            }
          }
        }, {
          key: "storeOriginalStyle",
          value: function() {
            this.originalStyle = {
              position: this.playerWrapper.style.position,
              left: this.playerWrapper.style.left,
              top: this.playerWrapper.style.top,
              width: this.$playerWrappers.width() + "px",
              height: this.$playerWrappers.height() + "px",
              zIndex: this.playerWrapper.style.zIndex
            }
          }
        }, {
          key: "updateStyleForFullscreen",
          value: function(e, t, n, i) {
            var r = {
              position: "fixed",
              left: e,
              top: t,
              width: n,
              "max-width": n,
              height: i,
              zIndex: 999999
            };
            this.normalizeBody(), this.$playerWrappers.css(r), this.adsManager.resize(n, i, google.ima.ViewMode.NORMAL), this.scrollPosition = window.pageYOffset;
            var a = document.querySelector("body");
            a.style.position = "fixed", a.style.width = "100%", a.style.top = -this.scrollPosition + "px"
          }
        }, {
          key: "appendTranslucentBackground",
          value: function() {
            var e = this;
            this.$overlayBg = t("<div>", {
              id: "str-overlay-bg"
            }).click(function(t) {
              return t.preventDefault(), e.toggleFullScreen(), e.adsManager.setVolume(0), e.innovidListener.requestClose(), !1
            });
            var n = t("<style>", {
              html: "#str-overlay-bg {           opacity: 1;           background: rgba(0,0,0,0.8);           position: fixed;           top: 0;           left: 0;           width: 100% !important;           height: 100% !important;           z-index: -1;           cursor: default;           overflow: hidden;           }           div.str-opt-out-container { display: none!important; }          "
            });
            this.$playerWrappers.append(this.$overlayBg).append(n), this.isSafeFrame && this.$playerWrappers.append(t("<style>", {
              html: "#str-overlay-bg { background: rgba(0,0,0,1); }"
            }))
          }
        }, {
          key: "normalizeBody",
          value: function() {
            this.fullscreenStyleOverrides = document.createElement("style"), this.fullscreenStyleOverrides.innerHTML = "            * {\n                -webkit-transform: none !important;\n                -moz-transform: none !important;\n                -ms-transform: none !important;\n                transform: none !important;\n            }            ", document.body.appendChild(this.fullscreenStyleOverrides)
          }
        }]), e
      }();
    e.exports = u
  }).call(t, n(24))
}, function(e, t, n) {
  var i = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    r = function(e, t) {
      function n() {
        this.constructor = e
      }
      for (var i in t) a.call(t, i) && (e[i] = t[i]);
      return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    },
    a = {}.hasOwnProperty;
  n(13), n(79), STR.Vendor.$, STR.Tag.Views.VideoBase = function(e) {
    function t() {
      this.checkVideoCompletion = i(this.checkVideoCompletion, this), this.handleClose = i(this.handleClose, this), this.handleStop = i(this.handleStop, this), t.__super__.constructor.apply(this, arguments), this.sent3 = !1, this.sent10 = !1, this.sent15 = !1, this.sent30 = !1
    }
    return r(t, e), t.prototype.VIDEO_COMPLETION_INTERVAL = 1e3, t.prototype.removeThumbnail = function() {
      return this.$element.find(".str-thumbnail").remove()
    }, t.prototype.removeEmbedWrapperFromPostEngagementDisplay = function() {
      return this.$element.find(".str-embed-wrapper").remove()
    }, t.prototype.handleStop = function() {
      return clearInterval(this.videoCompletionIntervalId)
    }, t.prototype.handleClose = function() {
      return clearInterval(this.videoCompletionIntervalId)
    }, t.prototype.checkVideoCompletion = function(e, t) {
      var n;
      if (n = e / t * 100, this.tracker.trackCompletion(n), !this.sent3 && e >= 3 && (this.sent3 = !0, this.tracker.handleSilentAutoplayLength(3e3)), !this.sent10 && e >= 10 && (this.sent10 = !0, this.tracker.handleSilentAutoplayLength(1e4)), !this.sent15 && e >= 15 && (this.sent15 = !0, this.tracker.handleSilentAutoplayLength(15e3)), !this.sent30 && e >= 30) return this.sent30 = !0, this.tracker.handleSilentAutoplayLength(3e4)
    }, t
  }(STR.Tag.Views.AdUnit)
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }

  function r(e) {
    var t = e.placementKey,
      n = void 0,
      i = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        if (null != e) return l.default.resolve(e.placement);
        if (!n) {
          var i = new c;
          n = new l.default(function(e, n) {
            i.getWaterfall(t).then(function(t) {
              e(t.placement)
            }).catch(function(e) {
              n(e)
            })
          })
        }
        return n
      };
    return (0, o.default)({
      fetchPlacementData: i
    })
  }
  var a = n(272),
    o = i(a),
    s = n(20),
    l = i(s),
    c = n(126);
  e.exports = r
}, function(e, t, n) {
  var i;
  n(0), null == (i = STR.Tag).Network && (i.Network = {})
}, function(e, t) {
  e.exports = function(e, t, n) {
    var i = void 0 === n;
    switch (t.length) {
      case 0:
        return i ? e() : e.call(n);
      case 1:
        return i ? e(t[0]) : e.call(n, t[0]);
      case 2:
        return i ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
      case 3:
        return i ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
      case 4:
        return i ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
    }
    return e.apply(n, t)
  }
}, function(e, t, n) {
  n(0), n(1), STR.Tag.Helpers.UidHelper = {
    setup: function() {
      if (!STR.Tag.Helpers.UidProvider) return STR.Tag.Helpers.TagUserInformationProvider.requestSyncs(), STR.Tag.Helpers.UidProvider = STR.Tag.Helpers.TagUserInformationProvider
    }
  }, e.exports = STR.Tag.Helpers.UidHelper
}, function(e, t, n) {
  var i, r, a, o, s, l, c, u, d, p = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(23), n(131), o = n(133), c = n(271), u = n(148), s = n(111), l = n(39), d = n(50), r = d.Audit, a = d.AuditTimer, i = STR.Vendor.$, STR.Tag.Models.Placement = function() {
    function e(e) {
      this.handleDynamicCreative = p(this.handleDynamicCreative, this), this.setCreativeStore = p(this.setCreativeStore, this), this.beginRenderingProcess = p(this.beginRenderingProcess, this), this.noFillCallback = p(this.noFillCallback, this), this.creativeStoreCallback = p(this.creativeStoreCallback, this), this.setPlacementData = p(this.setPlacementData, this), this.handleMonetizeSTXCall = p(this.handleMonetizeSTXCall, this), this.placeAd = p(this.placeAd, this), this.addBidId = p(this.addBidId, this), this.placementKey = e, this.creativeStore = void 0, this.mediationStates = new c, this.networkManager = new STR.Tag.Network.NetworkManager, this.placementData = void 0, this.thirdPartyPartners = void 0, this.featuredContent = void 0, this.dfpMacroWorkaround = void 0, this.bidIdManager = new STR.Tag.Models.BidIdManager, this.adUnitManager = new STR.Tag.Models.AdUnitManager, this.placementNetwork = u({
        placementKey: e
      })
    }
    return e.prototype.getDomIndexAndIntialize = function(e) {
      var t, n;
      return t = this.mediationStates.addWaterfallState(), n = null != e ? e.data("stx-response-name") : void 0, this.addBidId(t, n), this.mediationStates.generateMrid(t), t
    }, e.prototype.addBidId = function(e, t) {
      return this.bidIdManager.set(e, window[t])
    }, e.prototype.endOfWaterfallForElement = function(e) {
      return !this.thirdPartyPartners || this.mediationStates.get(e) >= this.thirdPartyPartners.length() - 1
    }, e.prototype.nextThirdPartyPartnerForElement = function(e) {
      var t, n, i;
      return this.endOfWaterfallForElement(e) ? null : (this.mediationStates.increment(e), t = this.mediationStates.get(e), i = this.thirdPartyPartners.get(t), STR.Tag.Helpers.ThirdPartyChooser.isSTXNetwork(i.key) && (null != (n = window.str_pkeys) ? n.indexOf(this.placementKey) : void 0) > -1 ? this.nextThirdPartyPartnerForElement(e) : i)
    }, e.prototype.placeAd = function(e, t, n, o) {
      var c, u, d;
      if (d = n || t || o, c = null, "" !== o && window[o]) {
        c = window[o];
        try {
          c = s.getJsonObject(c)
        } catch (e) {
          throw e + " ; Butler response: " + c
        }
      }
      return r.tick("boot"), u = new a("butlerResponseTime"), this.placementNetwork.fetchPlacementData(c).then(function(r) {
        return function(s) {
          var l, c;
          if (u.stop(), new a("rendering"), "live" === (c = s.status) || "pre-live" === c) return r.setPlacementData(s), d && !STR.Tag.Helpers.SpecialCaseRenderer.isSpecialCase() ? r.handleDirectSell(t, n, e, o) : (l = STR.Tag.Helpers.HtmlUtility.getDomPlacementIndex(i(e)), STR.Tag.Helpers.ThirdPartyChooser.choose(r, e, l))
        }
      }(this)).catch(function(e) {
        return function(e) {
          if ("ad-blocker-detected" !== e) return l.sample("Error placing the Ad", {
            function: "STR.Tag.Models.Placement:placeAd",
            error: e
          }), console.error(e)
        }
      }())
    }, e.prototype.handleDirectSell = function(e, t, n, r) {
      var a;
      return this.mediationStates.increment(STR.Tag.Helpers.HtmlUtility.getDomPlacementIndex(i(n))), a = new STR.Tag.Network.NetworkManager, a.fetchAd(this.placementKey, e, t, n, r, this.creativeStoreCallback)
    }, e.prototype.handleMonetizeSTXCall = function(e, t) {
      return this.networkManager.fetchAd(this.placementKey, "", "", e, t, this.creativeStoreCallback, this.noFillCallback)
    }, e.prototype.hasFeaturedContent = function() {
      var e, t;
      return (null != (e = this.featuredContent) && null != (t = e.featuredContent) ? t.length : void 0) > 0
    }, e.prototype.setPlacementData = function(e) {
      return this.placementData = e, this.thirdPartyPartners = new STR.Tag.Models.ThirdPartyPartners(e.placementAttributes.third_party_partners), this.featuredContent = new STR.Tag.Models.FeaturedContents(e.placementAttributes.featured_content)
    }, e.prototype.creativeStoreCallback = function(e, t) {
      var n;
      return this.creativeStore = e, STR.Tag.overrideTemplate(e), (n = e.getDynamicCreativeUrl()) ? this.handleDynamicCreative(e, t, n) : this.beginRenderingProcess(e, t)
    }, e.prototype.noFillCallback = function(e, t) {
      var n, r, a;
      return this.placementData.placementAttributes && this.placementData.placementAttributes.passback_tag ? (r = document.createElement("div"), r.innerHTML = this.placementData.placementAttributes.passback_tag, a = Array.from(r.getElementsByTagName("script")), a.forEach(function(e) {
        return function(e) {
          var t, n;
          t = document.createElement("script"), Array.from(e.attributes).forEach(function(e) {
            return t.setAttribute(e.nodeName, e.nodeValue || "")
          }), n = e.innerHTML;
          try {
            t.appendChild(document.createTextNode(n))
          } catch (e) {
            t.text = n
          }
          return e.parentNode.replaceChild(t, e)
        }
      }()), t.parentNode.replaceChild(r, t)) : (n = STR.Tag.Helpers.HtmlUtility.getDomPlacementIndex(i(t)), STR.Tag.Helpers.MediationHelper.mediateNextThirdPartyPartner(e, n, t))
    }, e.prototype.beginRenderingProcess = function(e, t) {
      var n;
      return n = new STR.Tag.Models.Element(t, e, this), n.beginRender()
    }, e.prototype.setCreativeStore = function(e) {
      return this.creativeStore || (this.creativeStore = e)
    }, e.prototype.handleDynamicCreative = function(e, t, n) {
      var i;
      return i = new o(e, n), i.loadAd(this.beginRenderingProcess, t)
    }, e.prototype.setDfpMacroWorkaround = function() {
      return this.dfpMacroWorkaround = !0
    }, e.prototype.hasDfpMacro = function() {
      return !!this.dfpMacroWorkaround
    }, e
  }()
}, function(e, t, n) {
  n(172), n(173)
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  t.__esModule = !0;
  var r = n(155),
    a = i(r),
    o = n(158),
    s = i(o);
  t.default = function() {
    function e(e, t) {
      var n = [],
        i = !0,
        r = !1,
        a = void 0;
      try {
        for (var o, l = (0, s.default)(e); !(i = (o = l.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
      } catch (e) {
        r = !0, a = e
      } finally {
        try {
          !i && l.return && l.return()
        } finally {
          if (r) throw a
        }
      }
      return n
    }
    return function(t, n) {
      if (Array.isArray(t)) return t;
      if ((0, a.default)(Object(t))) return e(t, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
  }()
}, function(e, t, n) {
  e.exports = {
    default: n(156),
    __esModule: !0
  }
}, function(e, t, n) {
  n(47), n(36), e.exports = n(157)
}, function(e, t, n) {
  var i = n(80),
    r = n(5)("iterator"),
    a = n(18);
  e.exports = n(2).isIterable = function(e) {
    var t = Object(e);
    return void 0 !== t[r] || "@@iterator" in t || a.hasOwnProperty(i(t))
  }
}, function(e, t, n) {
  e.exports = {
    default: n(159),
    __esModule: !0
  }
}, function(e, t, n) {
  n(47), n(36), e.exports = n(160)
}, function(e, t, n) {
  var i = n(11),
    r = n(82);
  e.exports = n(2).getIterator = function(e) {
    var t = r(e);
    if ("function" != typeof t) throw TypeError(e + " is not iterable!");
    return i(t.call(e))
  }
}, function(e, t, n) {
  n(74), n(36), n(47), n(162), e.exports = n(2).Promise
}, function(e, t, n) {
  "use strict";
  var i, r, a, o = n(30),
    s = n(6),
    l = n(26),
    c = n(80),
    u = n(14),
    d = n(15),
    p = n(58),
    h = n(163),
    f = n(164),
    m = n(165),
    g = n(76).set,
    v = n(166)(),
    y = s.TypeError,
    b = s.process,
    T = s.Promise,
    b = s.process,
    w = "process" == c(b),
    k = function() {},
    S = !! function() {
      try {
        var e = T.resolve(1),
          t = (e.constructor = {})[n(5)("species")] = function(e) {
            e(k, k)
          };
        return (w || "function" == typeof PromiseRejectionEvent) && e.then(k) instanceof t
      } catch (e) {}
    }(),
    x = function(e, t) {
      return e === t || e === T && t === a
    },
    C = function(e) {
      var t;
      return !(!d(e) || "function" != typeof(t = e.then)) && t
    },
    _ = function(e) {
      return x(T, e) ? new R(e) : new r(e)
    },
    R = r = function(e) {
      var t, n;
      this.promise = new e(function(e, i) {
        if (void 0 !== t || void 0 !== n) throw y("Bad Promise constructor");
        t = e, n = i
      }), this.resolve = p(t), this.reject = p(n)
    },
    E = function(e) {
      try {
        e()
      } catch (e) {
        return {
          error: e
        }
      }
    },
    P = function(e, t) {
      if (!e._n) {
        e._n = !0;
        var n = e._c;
        v(function() {
          for (var i = e._v, r = 1 == e._s, a = 0; n.length > a;) ! function(t) {
            var n, a, o = r ? t.ok : t.fail,
              s = t.resolve,
              l = t.reject,
              c = t.domain;
            try {
              o ? (r || (2 == e._h && I(e), e._h = 1), !0 === o ? n = i : (c && c.enter(), n = o(i), c && c.exit()), n === t.promise ? l(y("Promise-chain cycle")) : (a = C(n)) ? a.call(n, s, l) : s(n)) : l(i)
            } catch (e) {
              l(e)
            }
          }(n[a++]);
          e._c = [], e._n = !1, t && !e._h && A(e)
        })
      }
    },
    A = function(e) {
      g.call(s, function() {
        var t, n, i, r = e._v;
        if (H(e) && (t = E(function() {
            w ? b.emit("unhandledRejection", r, e) : (n = s.onunhandledrejection) ? n({
              promise: e,
              reason: r
            }) : (i = s.console) && i.error && i.error("Unhandled promise rejection", r)
          }), e._h = w || H(e) ? 2 : 1), e._a = void 0, t) throw t.error
      })
    },
    H = function(e) {
      if (1 == e._h) return !1;
      for (var t, n = e._a || e._c, i = 0; n.length > i;)
        if (t = n[i++], t.fail || !H(t.promise)) return !1;
      return !0
    },
    I = function(e) {
      g.call(s, function() {
        var t;
        w ? b.emit("rejectionHandled", e) : (t = s.onrejectionhandled) && t({
          promise: e,
          reason: e._v
        })
      })
    },
    D = function(e) {
      var t = this;
      t._d || (t._d = !0, t = t._w || t, t._v = e, t._s = 2, t._a || (t._a = t._c.slice()), P(t, !0))
    },
    O = function(e) {
      var t, n = this;
      if (!n._d) {
        n._d = !0, n = n._w || n;
        try {
          if (n === e) throw y("Promise can't be resolved itself");
          (t = C(e)) ? v(function() {
            var i = {
              _w: n,
              _d: !1
            };
            try {
              t.call(e, l(O, i, 1), l(D, i, 1))
            } catch (e) {
              D.call(i, e)
            }
          }): (n._v = e, n._s = 1, P(n, !1))
        } catch (e) {
          D.call({
            _w: n,
            _d: !1
          }, e)
        }
      }
    };
  S || (T = function(e) {
    h(this, T, "Promise", "_h"), p(e), i.call(this);
    try {
      e(l(O, this, 1), l(D, this, 1))
    } catch (e) {
      D.call(this, e)
    }
  }, i = function(e) {
    this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1
  }, i.prototype = n(167)(T.prototype, {
    then: function(e, t) {
      var n = _(m(this, T));
      return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = w ? b.domain : void 0, this._c.push(n), this._a && this._a.push(n), this._s && P(this, !1), n.promise
    },
    catch: function(e) {
      return this.then(void 0, e)
    }
  }), R = function() {
    var e = new i;
    this.promise = e, this.resolve = l(O, e, 1), this.reject = l(D, e, 1)
  }), u(u.G + u.W + u.F * !S, {
    Promise: T
  }), n(29)(T, "Promise"), n(168)("Promise"), a = n(2).Promise, u(u.S + u.F * !S, "Promise", {
    reject: function(e) {
      var t = _(this);
      return (0, t.reject)(e), t.promise
    }
  }), u(u.S + u.F * (o || !S), "Promise", {
    resolve: function(e) {
      if (e instanceof T && x(e.constructor, this)) return e;
      var t = _(this);
      return (0, t.resolve)(e), t.promise
    }
  }), u(u.S + u.F * !(S && n(120)(function(e) {
    T.all(e).catch(k)
  })), "Promise", {
    all: function(e) {
      var t = this,
        n = _(t),
        i = n.resolve,
        r = n.reject,
        a = E(function() {
          var n = [],
            a = 0,
            o = 1;
          f(e, !1, function(e) {
            var s = a++,
              l = !1;
            n.push(void 0), o++, t.resolve(e).then(function(e) {
              l || (l = !0, n[s] = e, --o || i(n))
            }, r)
          }), --o || i(n)
        });
      return a && r(a.error), n.promise
    },
    race: function(e) {
      var t = this,
        n = _(t),
        i = n.reject,
        r = E(function() {
          f(e, !1, function(e) {
            t.resolve(e).then(n.resolve, i)
          })
        });
      return r && i(r.error), n.promise
    }
  })
}, function(e, t) {
  e.exports = function(e, t, n, i) {
    if (!(e instanceof t) || void 0 !== i && i in e) throw TypeError(n + ": incorrect invocation!");
    return e
  }
}, function(e, t, n) {
  var i = n(26),
    r = n(118),
    a = n(119),
    o = n(11),
    s = n(60),
    l = n(82),
    c = {},
    u = {},
    t = e.exports = function(e, t, n, d, p) {
      var h, f, m, g, v = p ? function() {
          return e
        } : l(e),
        y = i(n, d, t ? 2 : 1),
        b = 0;
      if ("function" != typeof v) throw TypeError(e + " is not iterable!");
      if (a(v)) {
        for (h = s(e.length); h > b; b++)
          if ((g = t ? y(o(f = e[b])[0], f[1]) : y(e[b])) === c || g === u) return g
      } else
        for (m = v.call(e); !(f = m.next()).done;)
          if ((g = r(m, y, f.value, t)) === c || g === u) return g
    };
  t.BREAK = c, t.RETURN = u
}, function(e, t, n) {
  var i = n(11),
    r = n(58),
    a = n(5)("species");
  e.exports = function(e, t) {
    var n, o = i(e).constructor;
    return void 0 === o || void 0 == (n = i(o)[a]) ? t : r(n)
  }
}, function(e, t, n) {
  var i = n(6),
    r = n(76).set,
    a = i.MutationObserver || i.WebKitMutationObserver,
    o = i.process,
    s = i.Promise,
    l = "process" == n(27)(o);
  e.exports = function() {
    var e, t, n, c = function() {
      var i, r;
      for (l && (i = o.domain) && i.exit(); e;) {
        r = e.fn, e = e.next;
        try {
          r()
        } catch (i) {
          throw e ? n() : t = void 0, i
        }
      }
      t = void 0, i && i.enter()
    };
    if (l) n = function() {
      o.nextTick(c)
    };
    else if (a) {
      var u = !0,
        d = document.createTextNode("");
      new a(c).observe(d, {
        characterData: !0
      }), n = function() {
        d.data = u = !u
      }
    } else if (s && s.resolve) {
      var p = s.resolve();
      n = function() {
        p.then(c)
      }
    } else n = function() {
      r.call(i, c)
    };
    return function(i) {
      var r = {
        fn: i,
        next: void 0
      };
      t && (t.next = r), e || (e = r, n()), t = r
    }
  }
}, function(e, t, n) {
  var i = n(12);
  e.exports = function(e, t, n) {
    for (var r in t) n && e[r] ? e[r] = t[r] : i(e, r, t[r]);
    return e
  }
}, function(e, t, n) {
  "use strict";
  var i = n(6),
    r = n(2),
    a = n(7),
    o = n(8),
    s = n(5)("species");
  e.exports = function(e) {
    var t = "function" == typeof r[e] ? r[e] : i[e];
    o && t && !t[s] && a.f(t, s, {
      configurable: !0,
      get: function() {
        return this
      }
    })
  }
}, function(e, t, n) {
  e.exports = {
    default: n(170),
    __esModule: !0
  }
}, function(e, t, n) {
  n(171), e.exports = n(2).setImmediate
}, function(e, t, n) {
  var i = n(14),
    r = n(76);
  i(i.G + i.B, {
    setImmediate: r.set,
    clearImmediate: r.clear
  })
}, function(e, t, n) {
  n(116), STR.PassbackTag.Models.MessageHandler = function() {
    function e() {}
    return e.prototype.firePostMessage = function() {
      var e, t;
      if (e = {
          STRMessage: "mediateNext"
        }, t = JSON.stringify(e), window.parent.postMessage(t, "*"), window.parent !== window.parent.parent) return window.parent.parent.postMessage(t, "*")
    }, e
  }()
}, function(e, t, n) {
  n(116), n(90), STR.PassbackTag.boot = function(e) {
    var t, n, i;
    return e ? (i = e[0], t = e[1], STR.Tag.Helpers.MediationHelper.mediateNextThirdPartyPartner(i, t)) : STR.PassbackTag.isInIFrame() ? (n = new STR.PassbackTag.Models.MessageHandler, n.firePostMessage()) : void 0
  }, STR.PassbackTag.isInIFrame = function() {
    return self !== top
  }
}, function(e, t, n) {
  "use strict";
  var i = n(133);
  e.exports = {
    DynamicCreativeAdapter: i
  }
}, function(e, t, n) {
  "use strict";
  var i = n(202),
    r = n(203),
    a = n(204);
  e.exports = {
    ContentCardEngagementListener: i,
    DfpMessageListener: r,
    MediationMessageListener: a
  }
}, function(e, t, n) {
  "use strict";
  var i = n(105);
  e.exports = {
    DelayedRenderingHelper: i
  }
}, function(e, t, n) {
  "use strict";
  var i = n(205),
    r = n(206),
    a = n(68),
    o = n(207),
    s = n(239),
    l = n(240);
  e.exports = {
    HostedVideoViewChooserHelper: i,
    HostedVsVastChooserHelper: r,
    Html5Video: a,
    PostEngagementDisplayHelper: o,
    VideoRenderingHelper: s,
    VideoViewDurationHelper: l
  }
}, function(e, t, n) {
  n(0), n(1), STR.Tag.Helpers.ThumbnailChooser = function() {
    function e(e, t) {
      this.thumbnailSize = {
        h: Math.max(e.outerWidth(), 1),
        w: Math.max(e.outerHeight(), 1)
      }, this.thumbnailAssets = t || []
    }
    return e.prototype.thumbnailUrl = function() {
      var e, t, n, i, r;
      for (i = this.thumbnailAssets, t = 0, n = i.length; t < n; t++) e = i[t], this.isBestImage(e) && (this.bestImage = e);
      return null != (r = this.bestImage) ? r.url : void 0
    }, e.prototype.isBestImage = function(e) {
      return null == this.bestImage || (this.bestImageIsBiggerThanThumbnail() ? !!this.isBiggerThan(e, this.thumbnailSize) && this.isSmallerThan(e, this.bestImage) : this.isBiggerThan(e, this.bestImage))
    }, e.prototype.bestImageIsBiggerThanThumbnail = function() {
      return this.isBiggerThan(this.bestImage, this.thumbnailSize)
    }, e.prototype.isBiggerThan = function(e, t) {
      return e.h >= t.h && e.w >= t.w
    }, e.prototype.isSmallerThan = function(e, t) {
      return e.h <= t.h && e.w <= t.w
    }, e
  }()
}, function(e, t, n) {
  "use strict";
  var i = n(115),
    r = n(57),
    a = n(22),
    o = n(132),
    s = n(141);
  STR.Tag.Helpers.DocumentHelper = r, e.exports = {
    BrowserHelper: i,
    DocumentHelper: r,
    HtmlUtility: a,
    PageGeometryHelper: o,
    StyleHelper: s
  }
}, function(e, t, n) {
  "use strict";
  var i = n(90),
    r = n(125);
  e.exports = {
    MediationHelper: i,
    ThirdPartyChooser: r
  }
}, function(e, t, n) {
  "use strict";
  var i = n(31);
  STR.Tag.Helpers.AjaxHelper = i, e.exports = {
    AjaxHelper: i
  }
}, function(e, t, n) {
  var i, r, a;
  n(248), n(253), n(79), n(258), n(110), n(259), n(260), n(262), n(147), n(263), n(264), r = n(107), STR.Tag.Views.Card = r, a = n(135), STR.Tag.Views.Isi = a, i = n(134), e.exports = {
    Banner: i
  }
}, function(e, t, n) {
  var i, r;
  n(265), n(266), n(267), n(268), n(269), n(270), n(124), n(152), n(275), n(51), n(276), r = n(143), i = n(51), STR.Tag.Models.UserInformationBase = r, STR.Tag.Models.UserInformation = i
}, function(e, t, n) {
  n(283), n(148), n(284)
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(129),
    a = i(r),
    o = n(75),
    s = i(o),
    l = n(192);
  n(195), window.Promise || (window.Promise = l),
    function(e) {
      e.forEach(function(e) {
        e.hasOwnProperty("remove") || Object.defineProperty(e, "remove", {
          configurable: !0,
          enumerable: !0,
          writable: !0,
          value: function() {
            null !== this.parentNode && this.parentNode.removeChild(this)
          }
        })
      })
    }([Element.prototype, CharacterData.prototype, DocumentType.prototype]), "function" != typeof s.default && Object.defineProperty(Object, "assign", {
      value: function(e, t) {
        if (null == e) throw new TypeError("Cannot convert undefined or null to object");
        for (var n = Object(e), i = 1; i < arguments.length; i++) {
          var r = arguments[i];
          if (null != r)
            for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a])
        }
        return n
      },
      writable: !0,
      configurable: !0
    }),
    function() {
      function e(e, t) {
        t = t || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
      }
      if ("function" == typeof window.CustomEvent) return !1;
      e.prototype = window.Event.prototype, window.CustomEvent = e
    }(),
    function() {
      if ("performance" in window == !1 && (window.performance = {}), Date.now = Date.now || function() {
          return (new Date).getTime()
        }, "now" in window.performance == !1) {
        var e = Date.now();
        performance.timing && performance.timing.navigationStart && (e = performance.timing.navigationStart), window.performance.now = function() {
          return Date.now() - e
        }
      }
    }(),
    function() {
      a.default || (Array.from = function() {
        var e = Object.prototype.toString,
          t = function(t) {
            return "function" == typeof t || "[object Function]" === e.call(t)
          },
          n = function(e) {
            var t = Number(e);
            return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (t > 0 ? 1 : -1) * Math.floor(Math.abs(t)) : t
          },
          i = Math.pow(2, 53) - 1,
          r = function(e) {
            var t = n(e);
            return Math.min(Math.max(t, 0), i)
          };
        return function(e) {
          var n = this,
            i = Object(e);
          if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
          var a, o = arguments.length > 1 ? arguments[1] : void 0;
          if (void 0 !== o) {
            if (!t(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
            arguments.length > 2 && (a = arguments[2])
          }
          for (var s, l = r(i.length), c = t(n) ? Object(new n(l)) : new Array(l), u = 0; u < l;) s = i[u], c[u] = o ? void 0 === a ? o(s, u) : o.call(a, s, u) : s, u += 1;
          return c.length = l, c
        }
      }())
    }()
}, function(e, t, n) {
  n(36), n(187), e.exports = n(2).Array.from
}, function(e, t, n) {
  "use strict";
  var i = n(26),
    r = n(14),
    a = n(41),
    o = n(118),
    s = n(119),
    l = n(60),
    c = n(188),
    u = n(82);
  r(r.S + r.F * !n(120)(function(e) {
    Array.from(e)
  }), "Array", {
    from: function(e) {
      var t, n, r, d, p = a(e),
        h = "function" == typeof this ? this : Array,
        f = arguments.length,
        m = f > 1 ? arguments[1] : void 0,
        g = void 0 !== m,
        v = 0,
        y = u(p);
      if (g && (m = i(m, f > 2 ? arguments[2] : void 0, 2)), void 0 == y || h == Array && s(y))
        for (t = l(p.length), n = new h(t); t > v; v++) c(n, v, g ? m(p[v], v) : p[v]);
      else
        for (d = y.call(p), n = new h; !(r = d.next()).done; v++) c(n, v, g ? o(d, m, [r.value, v], !0) : r.value);
      return n.length = v, n
    }
  })
}, function(e, t, n) {
  "use strict";
  var i = n(7),
    r = n(21);
  e.exports = function(e, t, n) {
    t in e ? i.f(e, t, r(0, n)) : e[t] = n
  }
}, function(e, t, n) {
  n(190), e.exports = n(2).Object.assign
}, function(e, t, n) {
  var i = n(14);
  i(i.S + i.F, "Object", {
    assign: n(191)
  })
}, function(e, t, n) {
  "use strict";
  var i = n(19),
    r = n(52),
    a = n(32),
    o = n(41),
    s = n(72),
    l = Object.assign;
  e.exports = !l || n(16)(function() {
    var e = {},
      t = {},
      n = Symbol(),
      i = "abcdefghijklmnopqrst";
    return e[n] = 7, i.split("").forEach(function(e) {
      t[e] = e
    }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != i
  }) ? function(e, t) {
    for (var n = o(e), l = arguments.length, c = 1, u = r.f, d = a.f; l > c;)
      for (var p, h = s(arguments[c++]), f = u ? i(h).concat(u(h)) : i(h), m = f.length, g = 0; m > g;) d.call(h, p = f[g++]) && (n[p] = h[p]);
    return n
  } : l
}, function(e, t, n) {
  (function(t) {
    ! function(n) {
      function i() {}

      function r(e, t) {
        return function() {
          e.apply(t, arguments)
        }
      }

      function a(e) {
        if (!(this instanceof a)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
      }

      function o(e, t) {
        for (; 3 === e._state;) e = e._value;
        if (0 === e._state) return void e._deferreds.push(t);
        e._handled = !0, a._immediateFn(function() {
          var n = 1 === e._state ? t.onFulfilled : t.onRejected;
          if (null === n) return void(1 === e._state ? s : l)(t.promise, e._value);
          var i;
          try {
            i = n(e._value)
          } catch (e) {
            return void l(t.promise, e)
          }
          s(t.promise, i)
        })
      }

      function s(e, t) {
        try {
          if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
          if (t && ("object" == typeof t || "function" == typeof t)) {
            var n = t.then;
            if (t instanceof a) return e._state = 3, e._value = t, void c(e);
            if ("function" == typeof n) return void d(r(n, t), e)
          }
          e._state = 1, e._value = t, c(e)
        } catch (t) {
          l(e, t)
        }
      }

      function l(e, t) {
        e._state = 2, e._value = t, c(e)
      }

      function c(e) {
        2 === e._state && 0 === e._deferreds.length && a._immediateFn(function() {
          e._handled || a._unhandledRejectionFn(e._value)
        });
        for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
        e._deferreds = null
      }

      function u(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
      }

      function d(e, t) {
        var n = !1;
        try {
          e(function(e) {
            n || (n = !0, s(t, e))
          }, function(e) {
            n || (n = !0, l(t, e))
          })
        } catch (e) {
          if (n) return;
          n = !0, l(t, e)
        }
      }
      var p = setTimeout;
      a.prototype.catch = function(e) {
        return this.then(null, e)
      }, a.prototype.then = function(e, t) {
        var n = new this.constructor(i);
        return o(this, new u(e, t, n)), n
      }, a.all = function(e) {
        return new a(function(t, n) {
          function i(e, o) {
            try {
              if (o && ("object" == typeof o || "function" == typeof o)) {
                var s = o.then;
                if ("function" == typeof s) return void s.call(o, function(t) {
                  i(e, t)
                }, n)
              }
              r[e] = o, 0 == --a && t(r)
            } catch (e) {
              n(e)
            }
          }
          if (!e || void 0 === e.length) throw new TypeError("Promise.all accepts an array");
          var r = Array.prototype.slice.call(e);
          if (0 === r.length) return t([]);
          for (var a = r.length, o = 0; o < r.length; o++) i(o, r[o])
        })
      }, a.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === a ? e : new a(function(t) {
          t(e)
        })
      }, a.reject = function(e) {
        return new a(function(t, n) {
          n(e)
        })
      }, a.race = function(e) {
        return new a(function(t, n) {
          for (var i = 0, r = e.length; i < r; i++) e[i].then(t, n)
        })
      }, a._immediateFn = "function" == typeof t && function(e) {
        t(e)
      } || function(e) {
        p(e, 0)
      }, a._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
      }, a._setImmediateFn = function(e) {
        a._immediateFn = e
      }, a._setUnhandledRejectionFn = function(e) {
        a._unhandledRejectionFn = e
      }, void 0 !== e && e.exports ? e.exports = a : n.Promise || (n.Promise = a)
    }(this)
  }).call(t, n(193).setImmediate)
}, function(e, t, n) {
  function i(e, t) {
    this._id = e, this._clearFn = t
  }
  var r = Function.prototype.apply;
  t.setTimeout = function() {
    return new i(r.call(setTimeout, window, arguments), clearTimeout)
  }, t.setInterval = function() {
    return new i(r.call(setInterval, window, arguments), clearInterval)
  }, t.clearTimeout = t.clearInterval = function(e) {
    e && e.close()
  }, i.prototype.unref = i.prototype.ref = function() {}, i.prototype.close = function() {
    this._clearFn.call(window, this._id)
  }, t.enroll = function(e, t) {
    clearTimeout(e._idleTimeoutId), e._idleTimeout = t
  }, t.unenroll = function(e) {
    clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
  }, t._unrefActive = t.active = function(e) {
    clearTimeout(e._idleTimeoutId);
    var t = e._idleTimeout;
    t >= 0 && (e._idleTimeoutId = setTimeout(function() {
      e._onTimeout && e._onTimeout()
    }, t))
  }, n(194), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
}, function(e, t, n) {
  (function(e, t) {
    ! function(e, n) {
      "use strict";

      function i(e) {
        "function" != typeof e && (e = new Function("" + e));
        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++) t[n] = arguments[n + 1];
        var i = {
          callback: e,
          args: t
        };
        return c[l] = i, s(l), l++
      }

      function r(e) {
        delete c[e]
      }

      function a(e) {
        var t = e.callback,
          i = e.args;
        switch (i.length) {
          case 0:
            t();
            break;
          case 1:
            t(i[0]);
            break;
          case 2:
            t(i[0], i[1]);
            break;
          case 3:
            t(i[0], i[1], i[2]);
            break;
          default:
            t.apply(n, i)
        }
      }

      function o(e) {
        if (u) setTimeout(o, 0, e);
        else {
          var t = c[e];
          if (t) {
            u = !0;
            try {
              a(t)
            } finally {
              r(e), u = !1
            }
          }
        }
      }
      if (!e.setImmediate) {
        var s, l = 1,
          c = {},
          u = !1,
          d = e.document,
          p = Object.getPrototypeOf && Object.getPrototypeOf(e);
        p = p && p.setTimeout ? p : e, "[object process]" === {}.toString.call(e.process) ? function() {
          s = function(e) {
            t.nextTick(function() {
              o(e)
            })
          }
        }() : function() {
          if (e.postMessage && !e.importScripts) {
            var t = !0,
              n = e.onmessage;
            return e.onmessage = function() {
              t = !1
            }, e.postMessage("", "*"), e.onmessage = n, t
          }
        }() ? function() {
          var t = "setImmediate$" + Math.random() + "$",
            n = function(n) {
              n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && o(+n.data.slice(t.length))
            };
          e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n), s = function(n) {
            e.postMessage(t + n, "*")
          }
        }() : e.MessageChannel ? function() {
          var e = new MessageChannel;
          e.port1.onmessage = function(e) {
            o(e.data)
          }, s = function(t) {
            e.port2.postMessage(t)
          }
        }() : d && "onreadystatechange" in d.createElement("script") ? function() {
          var e = d.documentElement;
          s = function(t) {
            var n = d.createElement("script");
            n.onreadystatechange = function() {
              o(t), n.onreadystatechange = null, e.removeChild(n), n = null
            }, e.appendChild(n)
          }
        }() : function() {
          s = function(e) {
            setTimeout(o, 0, e)
          }
        }(), p.setImmediate = i, p.clearImmediate = r
      }
    }("undefined" == typeof self ? void 0 === e ? this : e : self)
  }).call(t, n(122), n(130))
}, function(e, t) {
  ! function() {
    "use strict";

    function e(e) {
      this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || l(), this.isIntersecting = !!e.intersectionRect;
      var t = this.boundingClientRect,
        n = t.width * t.height,
        i = this.intersectionRect,
        r = i.width * i.height;
      this.intersectionRatio = n ? Number((r / n).toFixed(4)) : this.isIntersecting ? 1 : 0
    }

    function t(e, t) {
      var n = t || {};
      if ("function" != typeof e) throw new Error("callback must be a function");
      if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
      this._checkForIntersections = i(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map(function(e) {
        return e.value + e.unit
      }).join(" ")
    }

    function n() {
      return window.performance && performance.now && performance.now()
    }

    function i(e, t) {
      var n = null;
      return function() {
        n || (n = setTimeout(function() {
          e(), n = null
        }, t))
      }
    }

    function r(e, t, n, i) {
      "function" == typeof e.addEventListener ? e.addEventListener(t, n, i || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
    }

    function a(e, t, n, i) {
      "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, i || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
    }

    function o(e, t) {
      var n = Math.max(e.top, t.top),
        i = Math.min(e.bottom, t.bottom),
        r = Math.max(e.left, t.left),
        a = Math.min(e.right, t.right),
        o = a - r,
        s = i - n;
      return o >= 0 && s >= 0 && {
        top: n,
        bottom: i,
        left: r,
        right: a,
        width: o,
        height: s
      }
    }

    function s(e) {
      var t;
      try {
        t = e.getBoundingClientRect()
      } catch (e) {}
      return t ? (t.width && t.height || (t = {
        top: t.top,
        right: t.right,
        bottom: t.bottom,
        left: t.left,
        width: t.right - t.left,
        height: t.bottom - t.top
      }), t) : l()
    }

    function l() {
      return {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        width: 0,
        height: 0
      }
    }

    function c(e, t) {
      for (var n = t; n;) {
        if (n == e) return !0;
        n = u(n)
      }
      return !1
    }

    function u(e) {
      var t = e.parentNode;
      return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t
    }
    if ("object" == typeof window) {
      if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) return void("isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
        get: function() {
          return this.intersectionRatio > 0
        }
      }));
      var d = window.document,
        p = [];
      t.prototype.THROTTLE_TIMEOUT = 100, t.prototype.POLL_INTERVAL = null, t.prototype.USE_MUTATION_OBSERVER = !0, t.prototype.observe = function(e) {
        if (!this._observationTargets.some(function(t) {
            return t.element == e
          })) {
          if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
          this._registerInstance(), this._observationTargets.push({
            element: e,
            entry: null
          }), this._monitorIntersections(), this._checkForIntersections()
        }
      }, t.prototype.unobserve = function(e) {
        this._observationTargets = this._observationTargets.filter(function(t) {
          return t.element != e
        }), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
      }, t.prototype.disconnect = function() {
        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
      }, t.prototype.takeRecords = function() {
        var e = this._queuedEntries.slice();
        return this._queuedEntries = [], e
      }, t.prototype._initThresholds = function(e) {
        var t = e || [0];
        return Array.isArray(t) || (t = [t]), t.sort().filter(function(e, t, n) {
          if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
          return e !== n[t - 1]
        })
      }, t.prototype._parseRootMargin = function(e) {
        var t = e || "0px",
          n = t.split(/\s+/).map(function(e) {
            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
            if (!t) throw new Error("rootMargin must be specified in pixels or percent");
            return {
              value: parseFloat(t[1]),
              unit: t[2]
            }
          });
        return n[1] = n[1] || n[0], n[2] = n[2] || n[0], n[3] = n[3] || n[1], n
      }, t.prototype._monitorIntersections = function() {
        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(window, "resize", this._checkForIntersections, !0), r(d, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(d, {
          attributes: !0,
          childList: !0,
          characterData: !0,
          subtree: !0
        }))))
      }, t.prototype._unmonitorIntersections = function() {
        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, a(window, "resize", this._checkForIntersections, !0), a(d, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
      }, t.prototype._checkForIntersections = function() {
        var t = this._rootIsInDom(),
          i = t ? this._getRootRect() : l();
        this._observationTargets.forEach(function(r) {
          var a = r.element,
            o = s(a),
            l = this._rootContainsTarget(a),
            c = r.entry,
            u = t && l && this._computeTargetAndRootIntersection(a, i),
            d = r.entry = new e({
              time: n(),
              target: a,
              boundingClientRect: o,
              rootBounds: i,
              intersectionRect: u
            });
          c ? t && l ? this._hasCrossedThreshold(c, d) && this._queuedEntries.push(d) : c && c.isIntersecting && this._queuedEntries.push(d) : this._queuedEntries.push(d)
        }, this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
      }, t.prototype._computeTargetAndRootIntersection = function(e, t) {
        if ("none" != window.getComputedStyle(e).display) {
          for (var n = s(e), i = n, r = u(e), a = !1; !a;) {
            var l = null,
              c = 1 == r.nodeType ? window.getComputedStyle(r) : {};
            if ("none" == c.display) return;
            if (r == this.root || r == d ? (a = !0, l = t) : r != d.body && r != d.documentElement && "visible" != c.overflow && (l = s(r)), l && !(i = o(l, i))) break;
            r = u(r)
          }
          return i
        }
      }, t.prototype._getRootRect = function() {
        var e;
        if (this.root) e = s(this.root);
        else {
          var t = d.documentElement,
            n = d.body;
          e = {
            top: 0,
            left: 0,
            right: t.clientWidth || n.clientWidth,
            width: t.clientWidth || n.clientWidth,
            bottom: t.clientHeight || n.clientHeight,
            height: t.clientHeight || n.clientHeight
          }
        }
        return this._expandRectByRootMargin(e)
      }, t.prototype._expandRectByRootMargin = function(e) {
        var t = this._rootMarginValues.map(function(t, n) {
            return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
          }),
          n = {
            top: e.top - t[0],
            right: e.right + t[1],
            bottom: e.bottom + t[2],
            left: e.left - t[3]
          };
        return n.width = n.right - n.left, n.height = n.bottom - n.top, n
      }, t.prototype._hasCrossedThreshold = function(e, t) {
        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
          i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
        if (n !== i)
          for (var r = 0; r < this.thresholds.length; r++) {
            var a = this.thresholds[r];
            if (a == n || a == i || a < n != a < i) return !0
          }
      }, t.prototype._rootIsInDom = function() {
        return !this.root || c(d, this.root)
      }, t.prototype._rootContainsTarget = function(e) {
        return c(this.root || d, e)
      }, t.prototype._registerInstance = function() {
        p.indexOf(this) < 0 && p.push(this)
      }, t.prototype._unregisterInstance = function() {
        var e = p.indexOf(this); - 1 != e && p.splice(e, 1)
      }, window.IntersectionObserver = t, window.IntersectionObserverEntry = e
    }
  }()
}, function(e, t, n) {
  var i, r, a;
  ! function(n, o) {
    "object" == typeof t && t && "string" != typeof t.nodeName ? o(t) : (r = [t], i = o, void 0 !== (a = "function" == typeof i ? i.apply(t, r) : i) && (e.exports = a))
  }(0, function(e) {
    function t(e) {
      return "function" == typeof e
    }

    function n(e) {
      return m(e) ? "array" : typeof e
    }

    function i(e) {
      return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    }

    function r(e, t) {
      return null != e && "object" == typeof e && t in e
    }

    function a(e, t) {
      return g.call(e, t)
    }

    function o(e) {
      return !a(v, e)
    }

    function s(e) {
      return String(e).replace(/[&<>"'`=\/]/g, function(e) {
        return y[e]
      })
    }

    function l(t, n) {
      function r(e) {
        if ("string" == typeof e && (e = e.split(T, 2)), !m(e) || 2 !== e.length) throw new Error("Invalid tags: " + e);
        a = new RegExp(i(e[0]) + "\\s*"), s = new RegExp("\\s*" + i(e[1])), l = new RegExp("\\s*" + i("}" + e[1]))
      }
      if (!t) return [];
      var a, s, l, p = [],
        h = [],
        f = [],
        g = !1,
        v = !1;
      r(n || e.tags);
      for (var y, x, C, _, R, E, P = new d(t); !P.eos();) {
        if (y = P.pos, C = P.scanUntil(a))
          for (var A = 0, H = C.length; A < H; ++A) _ = C.charAt(A), o(_) ? f.push(h.length) : v = !0, h.push(["text", _, y, y + 1]), y += 1, "\n" === _ && function() {
            if (g && !v)
              for (; f.length;) delete h[f.pop()];
            else f = [];
            g = !1, v = !1
          }();
        if (!P.scan(a)) break;
        if (g = !0, x = P.scan(S) || "name", P.scan(b), "=" === x ? (C = P.scanUntil(w), P.scan(w), P.scanUntil(s)) : "{" === x ? (C = P.scanUntil(l), P.scan(k), P.scanUntil(s), x = "&") : C = P.scanUntil(s), !P.scan(s)) throw new Error("Unclosed tag at " + P.pos);
        if (R = [x, C, y, P.pos], h.push(R), "#" === x || "^" === x) p.push(R);
        else if ("/" === x) {
          if (!(E = p.pop())) throw new Error('Unopened section "' + C + '" at ' + y);
          if (E[1] !== C) throw new Error('Unclosed section "' + E[1] + '" at ' + y)
        } else "name" === x || "{" === x || "&" === x ? v = !0 : "=" === x && r(C)
      }
      if (E = p.pop()) throw new Error('Unclosed section "' + E[1] + '" at ' + P.pos);
      return u(c(h))
    }

    function c(e) {
      for (var t, n, i = [], r = 0, a = e.length; r < a; ++r)(t = e[r]) && ("text" === t[0] && n && "text" === n[0] ? (n[1] += t[1], n[3] = t[3]) : (i.push(t), n = t));
      return i
    }

    function u(e) {
      for (var t, n, i = [], r = i, a = [], o = 0, s = e.length; o < s; ++o) switch (t = e[o], t[0]) {
        case "#":
        case "^":
          r.push(t), a.push(t), r = t[4] = [];
          break;
        case "/":
          n = a.pop(), n[5] = t[2], r = a.length > 0 ? a[a.length - 1][4] : i;
          break;
        default:
          r.push(t)
      }
      return i
    }

    function d(e) {
      this.string = e, this.tail = e, this.pos = 0
    }

    function p(e, t) {
      this.view = e, this.cache = {
        ".": this.view
      }, this.parent = t
    }

    function h() {
      this.cache = {}
    }
    var f = Object.prototype.toString,
      m = Array.isArray || function(e) {
        return "[object Array]" === f.call(e)
      },
      g = RegExp.prototype.test,
      v = /\S/,
      y = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      },
      b = /\s*/,
      T = /\s+/,
      w = /\s*=/,
      k = /\s*\}/,
      S = /#|\^|\/|>|\{|&|=|!/;
    d.prototype.eos = function() {
      return "" === this.tail
    }, d.prototype.scan = function(e) {
      var t = this.tail.match(e);
      if (!t || 0 !== t.index) return "";
      var n = t[0];
      return this.tail = this.tail.substring(n.length), this.pos += n.length, n
    }, d.prototype.scanUntil = function(e) {
      var t, n = this.tail.search(e);
      switch (n) {
        case -1:
          t = this.tail, this.tail = "";
          break;
        case 0:
          t = "";
          break;
        default:
          t = this.tail.substring(0, n), this.tail = this.tail.substring(n)
      }
      return this.pos += t.length, t
    }, p.prototype.push = function(e) {
      return new p(e, this)
    }, p.prototype.lookup = function(e) {
      var n, i = this.cache;
      if (i.hasOwnProperty(e)) n = i[e];
      else {
        for (var a, o, s = this, l = !1; s;) {
          if (e.indexOf(".") > 0)
            for (n = s.view, a = e.split("."), o = 0; null != n && o < a.length;) o === a.length - 1 && (l = r(n, a[o])), n = n[a[o++]];
          else n = s.view[e], l = r(s.view, e);
          if (l) break;
          s = s.parent
        }
        i[e] = n
      }
      return t(n) && (n = n.call(this.view)), n
    }, h.prototype.clearCache = function() {
      this.cache = {}
    }, h.prototype.parse = function(e, t) {
      var n = this.cache,
        i = n[e];
      return null == i && (i = n[e] = l(e, t)), i
    }, h.prototype.render = function(e, t, n) {
      var i = this.parse(e),
        r = t instanceof p ? t : new p(t);
      return this.renderTokens(i, r, n, e)
    }, h.prototype.renderTokens = function(e, t, n, i) {
      for (var r, a, o, s = "", l = 0, c = e.length; l < c; ++l) o = void 0, r = e[l], a = r[0], "#" === a ? o = this.renderSection(r, t, n, i) : "^" === a ? o = this.renderInverted(r, t, n, i) : ">" === a ? o = this.renderPartial(r, t, n, i) : "&" === a ? o = this.unescapedValue(r, t) : "name" === a ? o = this.escapedValue(r, t) : "text" === a && (o = this.rawValue(r)), void 0 !== o && (s += o);
      return s
    }, h.prototype.renderSection = function(e, n, i, r) {
      function a(e) {
        return o.render(e, n, i)
      }
      var o = this,
        s = "",
        l = n.lookup(e[1]);
      if (l) {
        if (m(l))
          for (var c = 0, u = l.length; c < u; ++c) s += this.renderTokens(e[4], n.push(l[c]), i, r);
        else if ("object" == typeof l || "string" == typeof l || "number" == typeof l) s += this.renderTokens(e[4], n.push(l), i, r);
        else if (t(l)) {
          if ("string" != typeof r) throw new Error("Cannot use higher-order sections without the original template");
          l = l.call(n.view, r.slice(e[3], e[5]), a), null != l && (s += l)
        } else s += this.renderTokens(e[4], n, i, r);
        return s
      }
    }, h.prototype.renderInverted = function(e, t, n, i) {
      var r = t.lookup(e[1]);
      if (!r || m(r) && 0 === r.length) return this.renderTokens(e[4], t, n, i)
    }, h.prototype.renderPartial = function(e, n, i) {
      if (i) {
        var r = t(i) ? i(e[1]) : i[e[1]];
        return null != r ? this.renderTokens(this.parse(r), n, i, r) : void 0
      }
    }, h.prototype.unescapedValue = function(e, t) {
      var n = t.lookup(e[1]);
      if (null != n) return n
    }, h.prototype.escapedValue = function(t, n) {
      var i = n.lookup(t[1]);
      if (null != i) return e.escape(i)
    }, h.prototype.rawValue = function(e) {
      return e[1]
    }, e.name = "mustache.js", e.version = "2.3.0", e.tags = ["{{", "}}"];
    var x = new h;
    return e.clearCache = function() {
      return x.clearCache()
    }, e.parse = function(e, t) {
      return x.parse(e, t)
    }, e.render = function(e, t, i) {
      if ("string" != typeof e) throw new TypeError('Invalid template! Template should be a "string" but "' + n(e) + '" was given as the first argument for mustache#render(template, view, partials)');
      return x.render(e, t, i)
    }, e.to_html = function(n, i, r, a) {
      var o = e.render(n, i, r);
      if (!t(a)) return o;
      a(o)
    }, e.escape = s, e.Scanner = d, e.Context = p, e.Writer = h, e
  })
}, function(e, t, n) {
  "use strict";
  ! function() {
    function e(e, t) {
      var n = t || 0,
        i = r;
      return i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + "-" + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]] + i[e[n++]]
    }

    function t(t, n, i) {
      var r = n && i || 0,
        a = n || [];
      t = t || {};
      var o = void 0 !== t.clockseq ? t.clockseq : p,
        s = void 0 !== t.msecs ? t.msecs : (new Date).getTime(),
        l = void 0 !== t.nsecs ? t.nsecs : f + 1,
        c = s - h + (l - f) / 1e4;
      if (c < 0 && void 0 === t.clockseq && (o = o + 1 & 16383), (c < 0 || s > h) && void 0 === t.nsecs && (l = 0), l >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      h = s, f = l, p = o, s += 122192928e5;
      var u = (1e4 * (268435455 & s) + l) % 4294967296;
      a[r++] = u >>> 24 & 255, a[r++] = u >>> 16 & 255, a[r++] = u >>> 8 & 255, a[r++] = 255 & u;
      var m = s / 4294967296 * 1e4 & 268435455;
      a[r++] = m >>> 8 & 255, a[r++] = 255 & m, a[r++] = m >>> 24 & 15 | 16, a[r++] = m >>> 16 & 255, a[r++] = o >>> 8 | 128, a[r++] = 255 & o;
      for (var g = t.node || d, v = 0; v < 6; ++v) a[r + v] = g[v];
      return n || e(a)
    }
    var n = window.UUIDv1,
      i = function() {};
    i.noConflict = function() {
      var e = window.UUIDv1;
      return window.UUID = n, e
    };
    for (var r = [], a = 0; a < 256; ++a) r[a] = (a + 256).toString(16).substr(1);
    var o, s = window.crypto || window.msCrypto;
    if (s && s.getRandomValues) {
      var l = new Uint8Array(16);
      o = function() {
        return s.getRandomValues(l), l
      }
    }
    if (!o) {
      var c = new Array(16);
      o = function() {
        for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), c[t] = e >>> ((3 & t) << 3) & 255;
        return c
      }
    }
    var u = o(),
      d = [1 | u[0], u[1], u[2], u[3], u[4], u[5]],
      p = 16383 & (u[6] << 8 | u[7]),
      h = 0,
      f = 0;
    i.generate = t, window.UUIDv1 = i
  }()
}, function(e, t, n) {
  "use strict";
  ! function(e, t) {
    var n, i, r, a, o, s, l, c, u, d, p, h, f, m = t.createElement.bind(t),
      g = t.createTextNode.bind(t);
    i = m("span"),
      function(e) {
        e.position = "absolute", e.whiteSpace = "pre", e.visibility = "hidden"
      }(i.style), p = m("span"), h = m("span"), h.style.display = "block", h.style.overflow = "hidden", h.appendChild(g("⁠")), n = function(e, n) {
        var v;
        if (e.ownerDocument && !e.ownerDocument !== t) {
          for (o = l = 0, s = 1, d = !1, a = [], r = (e.textContent || e.innerText).replace(/\n/g, " "), v = 1; v < n; v++) f = h.cloneNode(!0), p.appendChild(f), 1 === v && (h.style.textIndent = 0);
          for (h.style.textIndent = "", f = void 0; e.firstChild;) e.removeChild(e.firstChild);
          for (e.appendChild(p), v = 0; v < n - 1; v++) a.push(p.childNodes[v].clientWidth);
          for (e.removeChild(p); p.firstChild;) p.removeChild(p.firstChild);
          e.appendChild(i), r.replace(/ /g, function(t, p) {
            s !== n && (i.appendChild(g(r.substr(o, p - o))), a[s - 1] <= i.clientWidth ? (d ? (u = r.substr(o, p + 1 - o), o = p + 1) : (u = r.substr(o, l - o), o = l), c = m("span"), c.appendChild(g(u)), e.appendChild(c), d = !0, s++) : d = !1, l = p + 1, i.removeChild(i.firstChild))
          }), e.removeChild(i), c = m("span"), s === n && function(e) {
            e.display = "block", e.overflow = "hidden", e.textIndent = 0, e.textOverflow = "ellipsis", e.whiteSpace = "nowrap"
          }(c.style), c.appendChild(g(r.substr(o))), e.appendChild(c)
        }
      }, e.clamp = n
  }(window, window.document)
}, function(e, t, n) {
  "use strict";
  var i = n(24);
  "undefined" != typeof STR && null !== STR || (window.STR = {
    Vendor: {}
  }), void 0 !== STR.Vendor && null !== STR.Vendor || (STR.Vendor = {}), void 0 !== STR.Vendor.$ && null !== STR.Vendor.$ || (STR.Vendor.$ = i.noConflict(!0)), STR.Vendor.$ && STR.Vendor.$.extend(STR.Vendor.$.easing, {
    def: "easeOutQuad",
    swing: function(e, t, n, i, r) {
      return STR.Vendor.$.easing[STR.Vendor.$.easing.def](e, t, n, i, r)
    },
    easeOutQuad: function(e, t, n, i, r) {
      return -i * (t /= r) * (t - 2) + n
    },
    easeInOutQuint: function(e, t, n, i, r) {
      return (t /= r / 2) < 1 ? i / 2 * t * t * t * t * t + n : i / 2 * ((t -= 2) * t * t * t * t + 2) + n
    }
  })
}, function(e, t, n) {
  "use strict";
  var i = n(201),
    r = n(174),
    a = n(175),
    o = n(176),
    s = n(177),
    l = n(179),
    c = n(180),
    u = n(181),
    d = n(127),
    p = n(241),
    h = n(64),
    f = n(17),
    m = n(242),
    g = n(247),
    v = n(91);
  e.exports = {
    BeaconCannon: i,
    CreativeRedirector: v,
    DyanmicCreativeOptimization: r,
    EventListeners: a,
    Experiments: o,
    HostedVideo: s,
    Html: l,
    Mediation: c,
    Network: u,
    Rendering: d,
    Uid: p,
    FunctionHelper: h,
    ObjectHelper: f,
    VastVideo: m,
    VisibilityHelper: g
  }
}, function(e, t, n) {
  "use strict";
  var i = n(131);
  e.exports = i
}, function(e, t, n) {
  var i = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(0), n(1), STR.Tag.Helpers.ContentCardEngagementListener = function() {
    function e() {
      this.validateMessageAndFireBeacon = i(this.validateMessageAndFireBeacon, this)
    }
    return e.prototype.registerListener = function() {
      return window.addEventListener("message", this.validateMessageAndFireBeacon)
    }, e.prototype.validateMessageAndFireBeacon = function(e) {
      var t, n, i;
      if (i = null, "string" == typeof(t = e.data) && t.indexOf("STRMessage") > -1) try {
        if (null == (i = JSON.parse(t)) || null == i.STRMessage || "engagement" !== i.STRMessage || null == i.engagementType) return;
        return this.fireEngagementBeacon(e, i)
      } catch (e) {
        n = e, console.log("Error parsing json", n.message)
      }
    }, e.prototype.fireEngagementBeacon = function(e, t) {
      var n, i, r, a, o, s, l, c, u, d, p;
      for (window, r = e.source, d = document.getElementsByTagName("iframe"), l = o = 0, c = d.length; o < c; l = ++o) a = d[l], a.contentWindow === r && (s = a);
      return n = STR.Vendor.$(s), u = n.closest("[data-str-native-key]").attr("data-str-native-key"), i = n.closest("[data-str-native-key]").attr("data-str-placement-index"), p = STR.Tag.placements[u].adUnitManager.get(i).tracker, p.trackUserEvent(t.engagementType, {
        engagement: !0
      })
    }, e
  }(), e.exports = STR.Tag.Helpers.ContentCardEngagementListener
}, function(t, n, i) {
  var r, a, o, s = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  i(0), i(1), r = i(28), o = i(39), a = i(111), STR.Tag.Helpers.DfpMessageListener = function() {
    function t() {
      this.replaceIframeWithPlacementTag = s(this.replaceIframeWithPlacementTag, this)
    }
    return t.listen = function() {
      if (!window.STR.DfpMessageListenerRegistered) return (new STR.Tag.Helpers.DfpMessageListener).registerListener(), window.STR.DfpMessageListenerRegistered = !0
    }, t.prototype.registerListener = function() {
      return window.addEventListener("message", this.replaceIframeWithPlacementTag)
    }, t.prototype.findPkeyFromPreviousDom = function(e) {
      var t, n, i, r;
      for (t = e, n = null; 0 !== t.length && null === n;) r = t.prevAll("[data-str-set-targeting-placement]"), r.length > 0 ? n = r.first() : (i = t.parent("[data-str-set-targeting-placement]"), i.length > 0 ? n = i : t = t.parent());
      if (null != n) {
        if ("true" === n.attr("data-str-visited-flag")) return console.log("STR Integration Error, trying to access placeholder that has already been used"), null;
        n.attr("data-str-visited-flag", "true")
      }
      return n
    }, t.prototype.replaceTemplatedKeyWithPlacementKey = function() {
      var e, t, n, i;
      if (e = new STR.Tag.Helpers.DfpMessageListener, i = STR.Vendor.$('div[data-str-native-key="%%PATTERN:strnativekey%%"],div[data-str-native-key=""]').first(), null !== (t = e.findPkeyFromPreviousDom(i))) return n = t.attr("data-str-set-targeting-placement"), i.attr("data-str-native-key", n), r.setup(STR.Tag.GdprApplies, STR.Tag.boot)
    }, t.prototype.getDFPIframe = function(e, t, n) {
      var i, r, a, o, s, l, c, u, d;
      if (e) return i = document.getElementById(e) || document.getElementsByName(e)[0], "DIV" === (null != i ? i.nodeName : void 0) && "IFRAME" === (null != i && null != (c = i.firstChild) ? c.nodeName : void 0) ? STR.Vendor.$(i.firstChild) : STR.Vendor.$(i);
      for (u = document.getElementsByTagName("iframe"), s = a = 0, l = u.length; a < l; s = ++a) r = u[s], d = n.source ? n.source : n.target ? n.target : null, r.contentWindow === d && (o = r);
      return STR.Vendor.$(o)
    }, t.prototype.generateSTRDivTag = function(e) {
      var t;
      return t = STR.Vendor.$("<div>").attr("id", "str-native-key").attr("data-str-native-key", e.strNativeKey).css("display", "none"), null != e.strCreativeKey && t.attr("data-str-creative-key", e.strCreativeKey), null != e.strCampaignKey && t.attr("data-str-campaign-key", e.strCampaignKey), null != e.strClickTracker && t.attr("data-str-click-tracker", e.strClickTracker), null != e.strJsTracker && t.attr("data-str-js-tracker", e.strJsTracker), null != e.retainInvisibleIframe && t.attr("data-str-retain-invisible-iframe", e.retainInvisibleIframe), null != e.dfpLineItemId && t.attr("data-dfp-line-item", e.dfpLineItemId), null != e.bidResponse && this.appendSTXResponse(t, e.bidResponse), t
    }, t.prototype.appendSTXResponse = function(e, t) {
      var n, i, r;
      n = void 0;
      try {
        n = a.getJsonObject(t).bidId
      } catch (e) {
        r = e, console.error(r), o.sample(r, {
          function: "STR.Tag.Helpers.DfpMessageListener:appendSTXResponse"
        })
      }
      return i = "str_response_" + n, window["" + i] = t, e.attr("data-stx-response-name", i)
    }, t.prototype.replaceIframeWithPlacementTag = function(t) {
      var n, i, a, s, l, c, u, d, p;
      if (c = null, "string" == typeof(n = t.data)) {
        if (!(n.indexOf("strNativeKey") > -1 && n.indexOf("dfpIframeIdentifier") > -1)) return;
        try {
          c = JSON.parse(n)
        } catch (e) {
          a = e, console.log("Error parsing json", a.message)
        }
      }
      if (null != c && null != c.strNativeKey && null != c.dfpIframeIdentifier) try {
        if (l = c.dfpIframeIdentifier.replace(/\//g, "/"), null == (i = this.getDFPIframe(l, c, t)) || null == i[0] || "true" === i[0].getAttribute("data-str-iframe-visited") || null == i[0].contentWindow) return;
        return i[0].setAttribute("data-str-iframe-visited", "true"), i[0].contentWindow.postMessage("strStopPosting", "*"), p = this.generateSTRDivTag(c), "" !== (d = p.attr("data-str-native-key")) && "%%PATTERN:strnativekey%%" !== d || ("%%PATTERN:strnativekey%%" === p.attr("data-str-native-key") && p.attr("data-str-dfp-macro-workaround", !0), null !== (s = this.findPkeyFromPreviousDom(i)) && (u = s.attr("data-str-set-targeting-placement"), p.attr("data-str-native-key", u))), i.after(p), i.hide(), r.setup(STR.Tag.GdprApplies, STR.Tag.boot)
      } catch (t) {
        if (a = t, 2148144019 !== e.number) return o.sample(a, {
          STR: !!window.top.STR,
          function: "STR.Tag.Helpers.DfpMessageListener:replaceIframeWithPlacementTag"
        }), console.log("ERROR in replaceIframeWithPlacementTag", a.message)
      }
    }, t
  }(), t.exports = STR.Tag.Helpers.DfpMessageListener
}, function(e, t, n) {
  n(0), n(1), STR.Tag.Helpers.MediationMessageListener = function() {
    function e() {}
    return e.prototype.registerListener = function() {
      return window.addEventListener("message", this.replaceIframeWithNextThirdPartyTag)
    }, e.prototype.replaceIframeWithNextThirdPartyTag = function(e) {
      var t, n, i, r, a, o, s, l, c, u, d, p, h, f;
      if (d = null, "string" == typeof(n = e.data)) {
        if (!(n.indexOf("STRMessage") > -1)) return;
        try {
          d = JSON.parse(n)
        } catch (e) {
          r = e, console.log("Error parsing json", r.message)
        }
      }
      if (null != d && null != d.STRMessage && "mediateNext" === d.STRMessage) try {
        for (t = window, a = e.source.parent === t ? e.source : e.source.parent, h = document.getElementsByTagName("iframe"), c = s = 0, u = h.length; s < u; c = ++s) o = h[c], o.contentWindow === a && (l = o);
        if (f = STR.Vendor.$(l), p = f.closest("[data-str-mediation-key]").attr("data-str-mediation-key"), i = f.closest("[data-str-mediation-key]").attr("data-str-placement-index"), f.remove(), p && i) return STR.Tag.Helpers.MediationHelper.mediateNextThirdPartyPartner(p, i)
      } catch (e) {
        return r = e, console.log("ERROR in replaceIframeWithNextThirdPartyTag", r.message)
      }
    }, e
  }(), e.exports = STR.Tag.Helpers.MediationMessageListener
}, function(e, t, n) {
  n(0), n(1), STR.Tag.Helpers.HostedVideoViewChooserHelper = function() {
    function e(e) {
      e.creativeShouldInstantPlay() ? this.chooseInstantPlayUnit(e) : this.chooseClickToPlayUnit(e)
    }
    return e.prototype.chooseInstantPlayUnit = function(e) {
      return STR.Tag.Helpers.BrowserHelper.canAutoPlayHTML5Video() ? e.inPlace() ? new STR.Tag.Views.InstantPlayInPlaceHtml5Player(e).render() : new STR.Tag.Views.InstantPlayCollapsedHtml5Player(e).render() : this.chooseClickToPlayUnit(e)
    }, e.prototype.chooseClickToPlayUnit = function(e) {
      return e.inPlace() ? new STR.Tag.Views.ClickToPlayInPlaceHtml5Player(e).render() : new STR.Tag.Views.ClickToPlayCollapsedHtml5Player(e).render()
    }, e
  }(), e.exports = STR.Tag.Helpers.HostedVideoViewChooserHelper
}, function(e, t, n) {
  n(0), n(1), STR.Tag.Helpers.HostedVsVastChooserHelper = function() {
    function e(e, t, n, i) {
      this.creative = e, this.element = t, this.placementKey = n, this.creativeStore = i, this.adUnit = new STR.Tag.Views.AdUnit(this.creative, this.element, this.placementKey, this.creativeStore)
    }
    return e.prototype.render = function() {
      return this.adUnit.render(), this.adUnit.creative.vast_url && "" !== this.adUnit.creative.vast_url ? new STR.Tag.Helpers.VastVideoViewChooserHelper(this.adUnit) : new STR.Tag.Helpers.HostedVideoViewChooserHelper(this.adUnit)
    }, e
  }(), e.exports = STR.Tag.Helpers.HostedVsVastChooserHelper
}, function(e, t, n) {
  var i;
  n(0), n(1), i = n(69), STR.Tag.Helpers.PostEngagementDisplayHelper = {
    get: function(e, t, n, r, a, o, s, l) {
      return null == s && (s = !1), null == l && (l = !1), s ? new STR.Tag.Views.VideoOverlay(e, t, n, a, s, l) : i.create({
        creative: e,
        tracker: t,
        element: n,
        guid: a,
        preExpanded: s,
        oneClickPlay: l,
        placementIndex: o,
        placementKey: r
      })
    }
  }, e.exports = STR.Tag.Helpers.PostEngagementDisplayHelper
}, function(e, t, n) {
  "use strict";
  ! function(t) {
    var n = {};
    ! function(e) {
      function t(e) {
        var t;
        for (t in e)
          if (e.hasOwnProperty(t)) return !0;
        return !1
      }

      function n(e) {
        return function() {
          throw e
        }
      }

      function i(e, t, i) {
        try {
          e(t, i)
        } catch (e) {
          setTimeout(n(e), 0)
        }
      }

      function r(e, t, n) {
        e(t, n)
      }

      function a(e, t, n, a) {
        var o, s = c[t],
          l = a ? r : i;
        if (c.hasOwnProperty(t))
          for (o in s) s.hasOwnProperty(o) && l(s[o], e, n)
      }

      function o(e, t, n) {
        return function() {
          var i = String(e),
            r = i.lastIndexOf(".");
          for (a(e, e, t, n); - 1 !== r;) i = i.substr(0, r), r = i.lastIndexOf("."), a(e, i, t, n)
        }
      }

      function s(e) {
        for (var n = String(e), i = Boolean(c.hasOwnProperty(n) && t(c[n])), r = n.lastIndexOf("."); !i && -1 !== r;) n = n.substr(0, r), r = n.lastIndexOf("."), i = Boolean(c.hasOwnProperty(n) && t(c[n]));
        return i
      }

      function l(e, t, n, i) {
        var r = o(e, t, i);
        return !!s(e) && (!0 === n ? r() : setTimeout(r, 0), !0)
      }
      var c = {},
        u = -1;
      e.publish = function(t, n) {
        return l(t, n, !1, e.immediateExceptions)
      }, e.publishSync = function(t, n) {
        return l(t, n, !0, e.immediateExceptions)
      }, e.subscribe = function(e, t) {
        if ("function" != typeof t) return !1;
        c.hasOwnProperty(e) || (c[e] = {});
        var n = "uid_" + String(++u);
        return c[e][n] = t, n
      }, e.subscribeOnce = function(t, n) {
        var i = e.subscribe(t, function() {
          e.unsubscribe(i), n.apply(this, arguments)
        });
        return e
      }, e.clearAllSubscriptions = function() {
        c = {}
      }, e.clearSubscriptions = function(e) {
        var t;
        for (t in c) c.hasOwnProperty(t) && 0 === t.indexOf(e) && delete c[t]
      }, e.unsubscribe = function(t) {
        var n, i, r, a = "string" == typeof t && (c.hasOwnProperty(t) || function(e) {
            var t;
            for (t in c)
              if (c.hasOwnProperty(t) && 0 === t.indexOf(e)) return !0;
            return !1
          }(t)),
          o = !a && "string" == typeof t,
          s = "function" == typeof t,
          l = !1;
        if (a) return void e.clearSubscriptions(t);
        for (n in c)
          if (c.hasOwnProperty(n)) {
            if (i = c[n], o && i[t]) {
              delete i[t], l = t;
              break
            }
            if (s)
              for (r in i) i.hasOwnProperty(r) && i[r] === t && (delete i[r], l = !0)
          } return l
      }
    }(n), e.exports = n
  }()
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(45),
    a = i(r),
    o = n(3),
    s = i(o),
    l = n(4),
    c = i(l),
    u = n(54),
    d = i(u),
    p = n(55),
    h = i(p),
    f = n(56),
    m = i(f),
    g = n(107),
    v = n(106),
    y = function(e) {
      function t(e, n, i, r) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
          l = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          c = arguments[6],
          u = arguments[7];
        (0, s.default)(this, t);
        var p = (0, d.default)(this, (t.__proto__ || (0, a.default)(t)).call(this, e, n, i, r, o, l, c, u));
        return p.skipAnimation = !0, v.register(), p
      }
      return (0, m.default)(t, e), (0, c.default)(t, [{
        key: "open",
        value: function() {
          var e = this;
          if (!this.postEngagementDisplayOpen) return v.expandFullScreen().then(function() {
            e.$tagElement.hide(), (0, h.default)(t.prototype.__proto__ || (0, a.default)(t.prototype), "open", e).call(e)
          })
        }
      }, {
        key: "close",
        value: function() {
          var e = this;
          return v.collapse().then(function() {
            e.$tagElement.show(), (0, h.default)(t.prototype.__proto__ || (0, a.default)(t.prototype), "close", e).call(e)
          })
        }
      }]), t
    }(g);
  e.exports = y
}, function(e, t, n) {
  n(211), e.exports = n(2).Object.getPrototypeOf
}, function(e, t, n) {
  var i = n(41),
    r = n(73);
  n(78)("getPrototypeOf", function() {
    return function(e) {
      return r(i(e))
    }
  })
}, function(e, t, n) {
  e.exports = {
    default: n(213),
    __esModule: !0
  }
}, function(e, t, n) {
  n(214);
  var i = n(2).Object;
  e.exports = function(e, t) {
    return i.getOwnPropertyDescriptor(e, t)
  }
}, function(e, t, n) {
  var i = n(9),
    r = n(67).f;
  n(78)("getOwnPropertyDescriptor", function() {
    return function(e, t) {
      return r(i(e), t)
    }
  })
}, function(e, t, n) {
  e.exports = {
    default: n(216),
    __esModule: !0
  }
}, function(e, t, n) {
  n(217), e.exports = n(2).Object.setPrototypeOf
}, function(e, t, n) {
  var i = n(14);
  i(i.S, "Object", {
    setPrototypeOf: n(218).set
  })
}, function(e, t, n) {
  var i = n(15),
    r = n(11),
    a = function(e, t) {
      if (r(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
    };
  e.exports = {
    set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, i) {
      try {
        i = n(26)(Function.call, n(67).f(Object.prototype, "__proto__").set, 2), i(e, []), t = !(e instanceof Array)
      } catch (e) {
        t = !0
      }
      return function(e, n) {
        return a(e, n), t ? e.__proto__ = n : i(e, n), e
      }
    }({}, !1) : void 0),
    check: a
  }
}, function(e, t, n) {
  e.exports = {
    default: n(220),
    __esModule: !0
  }
}, function(e, t, n) {
  n(221);
  var i = n(2).Object;
  e.exports = function(e, t) {
    return i.create(e, t)
  }
}, function(e, t, n) {
  var i = n(14);
  i(i.S, "Object", {
    create: n(49)
  })
}, function(e, t, n) {
  var i;
  n(0), n(1), i = STR.Vendor.$, STR.Tag.Helpers.AdUnitHelper = {
    getIconForCreative: function(e, t) {
      return e.icon_url ? this.getCornerImgTag(e.icon_url) : t ? this.getCornerImgTag(STR.Tag.ClientJsUrl + "/assets/md-icon-volume-off.svg") : "outstream" === e.action ? this.getCornerImgTag(STR.Tag.ClientJsUrl + "/assets/ic-soundoff.png") : ""
    },
    getCornerImgTag: function(e) {
      var t, n;
      return n = this.imgTagWidthAttributes("100%"), t = this.imgTagHeightAttributes("100%"), i("<img>", {
        src: e,
        style: "margin:0;padding:0;" + n + t
      })
    },
    getIconWrapper: function(e, t) {
      var n;
      return null == t && (t = .25), n = e * t, i("<div>", {
        class: "icon-wrapper",
        style: "position:absolute;height:" + n + "px;min-height:16px;max-height:40px;width:" + n + "px;min-width:16px;max-width:40px;left:0;top:0;"
      })
    },
    imgTagWidthAttributes: function(e) {
      var t, n;
      return n = ["width", "min-width", "max-width"],
        function() {
          var i, r, a;
          for (a = [], i = 0, r = n.length; i < r; i++) t = n[i], a.push(t + ":" + e + ";");
          return a
        }().join("")
    },
    imgTagHeightAttributes: function(e) {
      var t, n;
      return n = ["height", "min-height", "max-height"],
        function() {
          var i, r, a;
          for (a = [], i = 0, r = n.length; i < r; i++) t = n[i], a.push(t + ":" + e + ";");
          return a
        }().join("")
    },
    insertBrandLogo: function(e) {
      var t;
      return t = this.brandLogoImgTag(), e.replace(/{{brand_logo}}/, "" + t)
    },
    brandLogoImgTag: function() {
      var e, t;
      return t = this.imgTagWidthAttributes("16px"), e = this.imgTagHeightAttributes("16px"), "<img src={{brand_logo_url}} style='" + t + e + "position:relative;top:-1px;display:inline-block;margin-bottom:0;border:none;margin-left:0;margin-right:5px;'>"
    },
    getOptOut: function(e, t) {
      return STR.Tag.Helpers.OptOutHelper.createAdChoicesOptOut(e, t)
    },
    imgixThumbnailUrl: function(e, t, n) {
      var i, r;
      return r = e.replace("//static.sharethrough.com", "//str-assets.imgix.net").replace("/thumb_320/", "/original/"), i = STR.Tag.Helpers.BrowserHelper.devicePixelRatio(), i > 2 && (i = 2), r.match("w=320&h=250") ? (r = r.replace("w=320&h=250", "w=" + t + "&h=" + n), r += "&dpr=" + i + "&auto=format") : r.match(/str-.*\.imgix\.net/) && (r += "?w=" + t + "&h=" + n + "&auto=format&fit=crop", r += "&dpr=" + i), r
    },
    imgixThumbnailUrlForElement: function(e, t) {
      var n, i;
      return i = Math.max(t.outerWidth(), 1), n = Math.max(t.outerHeight(), 1), this.imgixThumbnailUrl(e, i, n)
    },
    shouldCropThumbnail: function(e, t) {
      return "scroller" !== t.action && !t.shouldContainThumbnail && e.placementAttributes.allow_dynamic_cropping
    }
  }, e.exports = STR.Tag.Helpers.AdUnitHelper
}, function(e, t, n) {
  "use strict";
  var i = n(75),
    r = function(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }(i),
    a = (n(92), STR.Vendor.$),
    o = n(115),
    s = {
      HEADER_FOOTER_HEIGHT: 120,
      getDimensions: function(e) {
        var t = void 0,
          n = void 0,
          i = void 0,
          r = void 0,
          o = void 0,
          l = s.getInnerWidth(window),
          c = s.getInnerHeight(window),
          u = s.getMarginLeft("body"),
          d = a(window).scrollTop();
        if (window.matchMedia("(max-width: 767px)").matches) r = d, n = 0, o = l, t = c;
        else if (window.matchMedia("(min-width: 768px) and (max-width:1024px)").matches) {
          o = .6 * l;
          var p = s.maxWidthForCreative(e);
          o > p && (o = p), i = s.ratioForCreative(e), o * i + s.HEADER_FOOTER_HEIGHT > c ? (t = c, o = Math.floor(t / i)) : t = o * i + s.HEADER_FOOTER_HEIGHT, r = (c - t) / 2 + d, n = (l - o) / 2 - u
        } else o = s.maxWidthForCreative(e), i = s.ratioForCreative(e), o * i + s.HEADER_FOOTER_HEIGHT > c ? (t = c - s.HEADER_FOOTER_HEIGHT, o = Math.floor(t / i), "article" !== e.action && (e.video_aspect_ratio = (t - s.HEADER_FOOTER_HEIGHT) / o)) : t = o * i + s.HEADER_FOOTER_HEIGHT, r = (c - t) / 2 + d, n = l / 2 - o / 2 - u;
        return {
          top: r,
          left: n,
          width: o,
          height: t
        }
      },
      animateIn: function(e, t) {
        var n = e.$tagElement,
          i = e.$cardBg,
          l = e.$cardContainer,
          c = e.$cardWrapper,
          u = e.creative,
          d = e.skipAnimation,
          p = e.custom;
        p = p || {};
        var h = p["str-card-container"] || {},
          f = d ? 0 : 200,
          m = d ? 0 : 400,
          g = d ? 0 : 600;
        i.animate({
          opacity: 1
        });
        var v = window.innerHeight / 2,
          y = window.innerWidth / 2,
          b = {};
        b.height = s.getDimensions(u).height, b.width = s.getDimensions(u).width;
        var T = {
          height: b.height,
          width: b.width,
          top: this.computeTop(v, b.height),
          left: this.computeLeft(y, b.width)
        };
        o.isMobile() && h.mobile ? (0, r.default)(T, h.mobile) : !o.isMobile() && h.desktop && (0, r.default)(T, h.desktop), l.css({
          left: n.offset().left - a(window).scrollLeft(),
          top: n.offset().top - a(window).scrollTop(),
          width: n.outerWidth(),
          height: n.outerHeight()
        }).animate({
          opacity: 1
        }, f).animate(T, m, "easeInOutQuint", t), c.delay(g).animate({
          opacity: 1
        })
      },
      animateOut: function(e, t) {
        var n = e.$tagElement,
          i = e.$cardBg,
          r = e.$cardContainer,
          o = e.$cardWrapper,
          s = (e.creative, e.skipAnimation),
          l = s ? 0 : 200,
          c = s ? 0 : 500,
          u = s ? 0 : 200;
        i.animate({
          opacity: 0
        }), o.animate({
          opacity: 0
        }, l), r.delay(u).animate({
          left: n.offset().left - a(window).scrollLeft(),
          top: n.offset().top - a(window).scrollTop(),
          height: n.outerHeight(),
          width: n.outerWidth()
        }, c, "easeInOutQuint").animate({
          opacity: 0
        }, c, "swing", t)
      },
      RATIO_VIDEO: 9 / 16,
      RATIO_ARTICLE: 8 / 6,
      MAX_WIDTH_VIDEO: 600,
      MAX_WIDTH_VERTICAL: 400,
      ratioForCreative: function(e) {
        return e.video_aspect_ratio ? e.video_aspect_ratio : "video" === e.action || "hosted-video" === e.action || "autoplay" === e.action ? s.RATIO_VIDEO : "article" === e.action ? s.RATIO_ARTICLE : void 0
      },
      maxWidthForCreative: function(e) {
        return e.video_aspect_ratio && e.video_aspect_ratio === 16 / 9 ? s.MAX_WIDTH_VERTICAL : "video" === e.action || "hosted-video" === e.action || "autoplay" === e.action || "article" === e.action ? s.MAX_WIDTH_VIDEO : void 0
      },
      getInnerWidth: function(e) {
        return e.innerWidth
      },
      getInnerHeight: function(e) {
        var t = 1 / 0;
        try {
          t = window.top.innerHeight
        } catch (e) {}
        return Math.min(e.innerHeight, t)
      },
      getMarginLeft: function(e) {
        var t = a(e).css("margin-left");
        return t ? parseFloat(t) : 0
      },
      computeTop: function(e, t) {
        return e - t / 2
      },
      computeLeft: function(e, t) {
        return e - t / 2
      }
    };
  e.exports = s
}, function(e, t, n) {
  "use strict";
  var i = n(64),
    r = {
      registerElementForVisibilityCheck: function(e, t, n, a, o) {
        var s = r._onVisibilityChange(e, t, n, function(e) {
            e ? a() : o()
          }),
          l = i.debounce(s, 100, !1);
        window.addEventListener("DOMContentLoaded", l, !1), window.addEventListener("load", l, !1), window.addEventListener("scroll", l, !1), window.addEventListener("resize", l, !1), l()
      },
      _isElementInViewport: function(e, t, n, i) {
        var a = r._getBoundingRect(e),
          o = r._getWindowHeight(),
          s = r._getWindowWidth(),
          l = r._inVerticalView(a, o, s, t);
        return r._outVerticalView(a, o, s, n) && a.left >= 0 && a.right <= s ? (i.played = !1, !1) : l && a.left >= 0 && a.right <= s ? (i.played = !0, !0) : i.played
      },
      _onVisibilityChange: function(e, t, n, i) {
        var a = {
            played: !1
          },
          o = !1;
        return function() {
          var s = r._isElementInViewport(e, t, n, a);
          s != o && (o = s, i(s))
        }
      },
      _getBoundingRect: function(e) {
        return e ? e.getBoundingClientRect() : {
          top: -1,
          bottom: -1,
          left: -1,
          right: -1,
          height: -1
        }
      },
      _getWindowHeight: function() {
        return window.innerHeight || document.documentElement.clientHeight
      },
      _getWindowWidth: function() {
        return window.innerWidth || document.documentElement.clientWidth
      },
      _inVerticalView: function(e, t, n, i) {
        var r = e.top >= 0 && e.bottom <= t;
        return !r && e.top >= 0 && e.bottom > t ? t - e.top >= i * e.height && (r = !0) : !r && e.top < 0 && e.bottom > 0 && e.bottom >= i * e.height && (r = !0), r
      },
      _outVerticalView: function(e, t, n, i) {
        var r = e.top <= 0 && e.bottom <= 0;
        return !r && e.top >= 0 && e.bottom > t ? t - e.top <= i * e.height && (r = !0) : !r && e.top < 0 && e.bottom > 0 && e.bottom <= i * e.height && (r = !0), r
      }
    };
  e.exports = r
}, function(e, t, n) {
  var i, r;
  n(0), n(1), r = n(28), i = STR.Vendor.$, STR.Tag.Helpers.LoadWelcomeFormHelper = {
    noop: function() {},
    noop2: function() {},
    load: function() {
      if (null == STR.Tag.welcomeFormLoaded) return i(".str-integration-placeholder").each(function(e, t) {
        var n, a;
        return n = i(t), STR.Tag.placementKey = n.attr("data-str-native-key"), STR.Tag.referrer = window.document.referrer, n.removeAttr("data-str-visited-flag"), a = "43347a47", n.attr("data-str-creative-key", a), STR.Tag.placements = {}, r.setup(STR.Tag.GdprApplies, STR.Tag.boot)
      }), STR.Tag.welcomeFormLoaded = !0
    }
  }, e.exports = STR.Tag.Helpers.LoadWelcomeFormHelper
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o),
    l = n(92),
    c = l.$,
    u = function() {
      function e() {
        (0, a.default)(this, e)
      }
      return (0, s.default)(e, null, [{
        key: "createAdChoicesOptOut",
        value: function(e, t) {
          var n = this.adChoicesContainer();
          return n.appendChild(this.adChoicesIcon()), e ? n.appendChild(this.createMobileTouchContainer()) : (n.appendChild(this.adChoicesText()), n.addEventListener("mouseenter", function() {
            n.querySelector(".str-opt-out-label").style.display = "inline"
          }), n.addEventListener("mouseleave", function() {
            n.querySelector(".str-opt-out-label").style.display = "none"
          })), n.addEventListener("click", t), n
        }
      }, {
        key: "createMobileTouchContainer",
        value: function() {
          return c("<div>", {
            class: "str-opt-out-touch",
            style: "\n        position: absolute;\n        width: 30px;\n        height: 30px;\n        bottom: 0;\n        right: 0;\n      "
          })[0]
        }
      }, {
        key: "adChoicesContainer",
        value: function() {
          return c("<div>", {
            class: "str-opt-out-container",
            style: "\n        cursor:pointer;\n        position:absolute;\n        right:0;\n        bottom:0;\n        border-radius: 8px 0px 0px 0px;\n        background-color: rgba(255, 255, 255, 0.7);\n        z-index: 10;\n        display: flex;\n        flex-direction: row-reverse;\n      "
          })[0]
        }
      }, {
        key: "adChoicesText",
        value: function() {
          return c("<div>", {
            class: "str-opt-out-label",
            style: "\n        margin-left: 9px;\n        font-size: 11px;\n        font-family: arial;\n        font-weight: regular;\n        line-height: 14px;\n        display: none;\n      ",
            text: "AdChoices"
          })[0]
        }
      }, {
        key: "adChoicesIcon",
        value: function() {
          return c("<span>", {
            class: "str-opt-out-icon",
            style: "\n        height:13px;\n        width:13px;\n        background-size:13px 13px;\n        background-repeat:no-repeat;\n        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAABGdBTUEAALGPC/xhBQAAAghJREFUKBV9kU1oE0EUx9+bmd1kszVNithEi9qiFox4KhERhFjU4kVED+pFKfYkCOJB0Etv3jxYkJ5UFERarBokN6EgAamp1g8QqmIU0w9NSD/S3WR3Zp5bDxKK+i7vY/6/P4832JV9db/oyiPrDDactPhwIrzwfTyTkfCfQGO0UGMIttYEtsB5i8MtU8LQ1+M9s//imCSKdFlibHvE3L/g6dxsnQbKRPm2scnrHY8Le/4GMgJCRnqGA76Hk+n+3TEzHdRvl6U+M+9RLvGocGNL9k1nM8wYIiwqsKqC48Wpjymnoc62cz64MYQnYgZ7sCzp3IzTmEpmJ69uHZlIrMKs2WHO0YoIwzYDOx21XtqxpUtRgx22DTb6o6EGK8iepXKvBwQRgYkMvIAuN5wwCtZSU0r8DPpiJlMP0vPOJ++moyi7v9W8fSUXrgkKppaBYAX5yxJtLvp+JvAZr9Rdvi33Ikqe0bsoG6dWNKRbEPIpWwyJQAtaAzEOEEamOWhqNY31ES2PVVxx0FH6dPBU7ggbF0yybuf7Ut5vSCC5IBV5DAJDUFXPv1kFguCKpWQILlsh+96Hvp1//k0YDP0VRbvqqn4oLoQbFzjtK3IEsGxUwcjnoz2fVrdpDgw9LFR9olaQGvduiFyJk3n3aW93qVm0tmZtHCeEptKmCD/f7vE71oEdc2tFa/tfdMfbvTEpKWgAAAAASUVORK5CYII=');\n        margin: 1px 2px 1px 4px;\n      "
          })[0]
        }
      }]), e
    }();
  e.exports = u
}, function(e, t, n) {
  var i, r, a, o;
  n(0), n(1), i = n(134), r = n(233), o = n(235), n(105), a = n(64), n(70), STR.Tag.Helpers.Renderer = {
    pixelOffsets: {},
    render: function(e, t, n, i) {
      var r, a;
      if (n) return r = new(STR.Tag.Helpers.Renderer.viewByType(n.creative))(n, t, e.placementKey, e.creativeStore), e.adUnitManager.set(i, r), a = e.creativeStore.adserverRequestId, STR.Tag.Helpers.Renderer.pixelOffsets[a] > 0 ? this.setupDelayedRender(r, t, e) : r.render()
    },
    viewByType: function(e) {
      var t;
      return t = void 0, e.beacons.impression.forEach(function(e) {
        return function(e, n) {
          if (e.match(/NAG_WORKAROUND_BANNER/i)) return t = n
        }
      }()), e.beacons.impression.length >= 2 && t >= 0 && (e.action = "banner", e.adm = e.beacons.impression[t + 1].replace(/^\/\//, ""), e.beacons.impression.splice(t, 2)), {
        video: STR.Tag.Views.Youtube,
        clickout: STR.Tag.Views.Clickout,
        "hosted-video": STR.Tag.Helpers.HostedVsVastChooserHelper,
        outstream: STR.Tag.Helpers.HostedVsVastChooserHelper,
        "native-outstream": STR.Tag.Helpers.HostedVsVastChooserHelper,
        article: STR.Tag.Views.Article,
        scroller: STR.Tag.Views.ScrollerAdUnit,
        banner: i,
        slideshow: o,
        carousel: r
      } [e.action]
    },
    scrollHandlerGenerator: function(e) {
      return function(e, t) {
        var n;
        return n = STR.Tag.Helpers.Renderer.pixelOffsets[t.creativeStore.adserverRequestId] || 0, a.throttle(function() {
          return STR.Tag.Helpers.Renderer.delayedRenderCallback(e, n)
        }, 100)
      }
    }(),
    delayedRenderCallback: function(e) {
      return function(e, t) {
        if (STR.Tag.Helpers.PageGeometryHelper.distanceFromBottomOfViewport(e.element) <= t && STR.Tag.Helpers.PageGeometryHelper.elementOnPage(e.element)) return document.removeEventListener("scroll", e.scrollHandler), STR.Tag.Models.LatencyTracker.start("renderTime"), e.render()
      }
    }(),
    setupDelayedRender: function(e, t, n) {
      return e.scrollHandler = STR.Tag.Helpers.Renderer.scrollHandlerGenerator(e, n), this.setDelayedRenderPixelOffset(e, n), document.addEventListener("scroll", e.scrollHandler), STR.Vendor.$(t).css("display", "inline"), STR.Tag.Helpers.Renderer.delayedRenderCallback(e, 0)
    },
    setDelayedRenderPixelOffset: function(e, t) {
      var n;
      return n = STR.Tag.Helpers.Renderer.pixelOffsets[t.creativeStore.adserverRequestId] || 0, null != e.adUnit ? e.adUnit.setDelayedRenderPixelOffset(n) : e.setDelayedRenderPixelOffset(n)
    }
  }, e.exports = STR.Tag.Helpers.Renderer
}, function(e, t, n) {
  n(229), e.exports = n(2).Object.keys
}, function(e, t, n) {
  var i = n(41),
    r = n(19);
  n(78)("keys", function() {
    return function(e) {
      return r(i(e))
    }
  })
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(75),
    a = i(r),
    o = n(108),
    s = i(o),
    l = n(46),
    c = {
      "gBgkxrVErPj9wqivTDd2AmVY-3015338": {
        advertiser: "Synchrony",
        description: "Enjoy everyday benefits, everywhere the card is accepted",
        title: "Apply Now for the Synchrony HOME™ Credit Card, a Card for All Your Home Shopping Needs."
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3015335": {
        advertiser: "Synchrony",
        description: "For all of your car care needs",
        title: "The Synchrony Car Care™ Credit Card is There No Matter Where the Road Takes You."
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3045900": {
        advertiser: "Synchrony",
        description: "Reach Every Destination",
        title: "Your customers are looking for convenient ways to pay. We're here to help."
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3131266": {
        advertiser: "Monster",
        description: "The tools you need to find the right fit",
        title: "Don't Just Find Any Job. Find the Right Fit."
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3131264": {
        advertiser: "Monster",
        description: "The tools you need to find the right fit",
        title: "Don't Just Find Any Job. Find the Right Fit."
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3131260": {
        advertiser: "Monster",
        description: "The tools you need to find the right fit",
        title: "Don't Just Find Any Job. Find the Right Fit."
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3131261": {
        advertiser: "Monster",
        description: "The tools you need to find the right fit",
        title: "Don't Just Find Any Job. Find the Right Fit."
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3131259": {
        advertiser: "Monster",
        description: "The tools you need to find the right fit",
        title: "Don't Just Find Any Job. Find the Right Fit."
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3131265": {
        advertiser: "Monster",
        description: "The tools you need to find the right fit",
        title: "Don't Just Find Any Job. Find the Right Fit."
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3131263": {
        advertiser: "Monster",
        description: "The tools you need to find the right fit",
        title: "Don't Just Find Any Job. Find the Right Fit."
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3131262": {
        advertiser: "Monster",
        description: "The tools you need to find the right fit",
        title: "Don't Just Find Any Job. Find the Right Fit."
      },
      "gBgkxrVErPj9wqivTDd2AmVY-2541927": {
        media_url: "https://ad.doubleclick.net/ddm/clk/443147057;238964728;t"
      },
      "bf2b131f1f7eff9d8892972c-16_182151595": {
        media_url: "https://ad.doubleclick.net/ddm/trackclk/N6311.160770SHARETHROUGH/B22812313.248172490;dc_trk_aid=445526245;dc_trk_cid=112635789;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3118580": {
        advertiser: "IVM",
        description: "IVM's smart vending solutions offer instant access to essential tools, 24/7",
        title: "Transforming Workplaces, One Supply At a Time"
      },
      "bf2b131f1f7eff9d8892972c-16_185402854": {
        media_url: "https://ad.doubleclick.net/ddm/trackclk/N5823.2093103DBM/B22602122.249181403;dc_trk_aid=445730248;dc_trk_cid=115258038;aucid=${AUCTION_ID};exchange=${EXCHANGE_ID};dsp=DV360;referrer=${SOURCE_URL_ENC};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
      },
      "bf2b131f1f7eff9d8892972c-16_185412739": {
        media_url: "https://ad.doubleclick.net/ddm/trackclk/N5823.2093103DBM/B22602122.249181403;dc_trk_aid=445730248;dc_trk_cid=115258038;aucid=${AUCTION_ID};exchange=${EXCHANGE_ID};dsp=DV360;referrer=${SOURCE_URL_ENC};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
      },
      "bf2b131f1f7eff9d8892972c-16_185411248": {
        media_url: "https://ad.doubleclick.net/ddm/trackclk/N5823.2093103DBM/B22602122.249181403;dc_trk_aid=445730248;dc_trk_cid=115258038;aucid=${AUCTION_ID};exchange=${EXCHANGE_ID};dsp=DV360;referrer=${SOURCE_URL_ENC};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
      },
      "bf2b131f1f7eff9d8892972c-16_185413033": {
        media_url: "https://ad.doubleclick.net/ddm/trackclk/N5823.2093103DBM/B22602122.249181403;dc_trk_aid=445730248;dc_trk_cid=115258038;aucid=${AUCTION_ID};exchange=${EXCHANGE_ID};dsp=DV360;referrer=${SOURCE_URL_ENC};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
      },
      "bf2b131f1f7eff9d8892972c-16_185414134": {
        media_url: "https://ad.doubleclick.net/ddm/trackclk/N5823.2093103DBM/B22602122.249181403;dc_trk_aid=445730248;dc_trk_cid=115258038;aucid=${AUCTION_ID};exchange=${EXCHANGE_ID};dsp=DV360;referrer=${SOURCE_URL_ENC};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
      },
      "bf2b131f1f7eff9d8892972c-16_185412738": {
        media_url: "https://ad.doubleclick.net/ddm/trackclk/N5823.2093103DBM/B22602122.249181403;dc_trk_aid=445730248;dc_trk_cid=115258038;aucid=${AUCTION_ID};exchange=${EXCHANGE_ID};dsp=DV360;referrer=${SOURCE_URL_ENC};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
      },
      "bf2b131f1f7eff9d8892972c-16_185411138": {
        media_url: "https://ad.doubleclick.net/ddm/trackclk/N5823.2093103DBM/B22602122.249181403;dc_trk_aid=445730248;dc_trk_cid=115258038;aucid=${AUCTION_ID};exchange=${EXCHANGE_ID};dsp=DV360;referrer=${SOURCE_URL_ENC};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
      },
      "bf2b131f1f7eff9d8892972c-16_185411137": {
        media_url: "https://ad.doubleclick.net/ddm/trackclk/N5823.2093103DBM/B22602122.249181403;dc_trk_aid=445730248;dc_trk_cid=115258038;aucid=${AUCTION_ID};exchange=${EXCHANGE_ID};dsp=DV360;referrer=${SOURCE_URL_ENC};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua="
      },
      "bf2b131f1f7eff9d8892972c-16_190248454": {
        media_url: "https://ad.doubleclick.net/ddm/clk/447389551;251189755;y"
      },
      "0e8893f90b606c9c5d33f1be-168570391": {
        advertiser: "Pokerstars",
        description: "Jouer comporte des risques : endettement, dépendance...Appelez le  09.74.75.13.13 (appel non surtaxé)",
        title: "Recevez 15 € avec votre premier dépôt de 10 €. Utilisez le code : 15KDO"
      },
      "0e8893f90b606c9c5d33f1be-170326396": {
        advertiser: "Pokerstars",
        description: "Jouer comporte des risques : isolement, endettement...Appelez le 09.74.75.13.13 (appel non surtaxé)",
        title: "Recevez 15 € avec votre premier dépôt de 10 €. Utilisez le code : 15KDO"
      },
      "0e8893f90b606c9c5d33f1be-170326640": {
        advertiser: "Pokerstars",
        description: "Jouer comporte des risques : dépendance, isolement...Appelez le 09.74.75.13.13 (appel non surtaxé)",
        title: "Recevez 15 € avec votre premier dépôt de 10 €. Utilisez le code : 15KDO"
      },
      "k1jJghvBi79yX1NZ2sM5fXrm-186770901-33de9.d4ca0.3bb4": {
        description: "Listen to Best Sellers, Exclusive Originals, And More.",
        title: "Listen Free for 30 Days"
      },
      "k1jJghvBi79yX1NZ2sM5fXrm-186770527-33de9.d4ca0.3bb4": {
        description: "Enjoy Books In A Whole New Way. Listen Anytime, Anyplace. Get Started Today.",
        title: "Download a Free Audiobook"
      },
      "0e8893f90b606c9c5d33f1be-170925188": {
        advertiser: "Premier League",
        description: "Sky Total Football offer for just £18 a month. More Premier League and EFL than before",
        title: "Premier League on Sky"
      },
      "0e8893f90b606c9c5d33f1be-170924744": {
        advertiser: "Premier League",
        description: "Sky Total Football offer for just £18 a month. More Premier League and EFL than before",
        title: "Premier League on Sky"
      },
      "0e8893f90b606c9c5d33f1be-174256004": {
        advertiser: "Subway",
        title: "Ciabatta Believe It!",
        description: "We've got an important question to ask...will you try our new Savory Chicken Pesto Ciabatta?"
      },
      "0e8893f90b606c9c5d33f1be-174255850": {
        advertiser: "Subway",
        title: "Ciabatta Believe It!",
        description: "We've got an important question to ask...will you try our new Savory Chicken Pesto Ciabatta?"
      },
      "0e8893f90b606c9c5d33f1be-174255195": {
        advertiser: "Subway",
        title: "Unboxing New Italian Ciabatta",
        description: "I couldn't wait to unbox the new Italian Ciabatta..."
      },
      "0e8893f90b606c9c5d33f1be-174254870": {
        advertiser: "Subway",
        title: "Unboxing New Italian Ciabatta",
        description: "I couldn't wait to unbox the new Italian Ciabatta..."
      },
      "0e8893f90b606c9c5d33f1be-172905427": {
        title: "Premier League on Sky",
        description: "Sky Total Football offer for just £18 a month. More Premier League and EFL than before",
        advertiser: "Premier League"
      },
      "0e8893f90b606c9c5d33f1be-172907104": {
        title: "Premier League on Sky",
        description: "Sky Total Football offer for just £18 a month. More Premier League and EFL than before",
        advertiser: "Premier League"
      },
      "0e8893f90b606c9c5d33f1be-152238720": {
        title: "New Citroën C5 Aircross SUV. Book a test drive today",
        description: "Click for more information",
        advertiser: "Citroën"
      },
      "0e8893f90b606c9c5d33f1be-152238755": {
        title: "Citroën C4 Cactus Hatch. Book a test drive today",
        description: "Click for more information",
        advertiser: "Citroën"
      },
      "0e8893f90b606c9c5d33f1be-152238768": {
        title: "Citroën C3 Aircross. Book a test drive today",
        description: "Click for more information",
        advertiser: "Citroën"
      },
      "0e8893f90b606c9c5d33f1be-152238779": {
        title: "Citroën C3. Book a test drive today",
        description: "Click for more information",
        advertiser: "Citroën"
      },
      "0e8893f90b606c9c5d33f1be-152238793": {
        title: "Citroën C1. Book a test drive today",
        description: "Click for more information",
        advertiser: "Citroën"
      },
      "0e8893f90b606c9c5d33f1be-152343750": {
        title: "New Citroën C5 Aircross SUV. Book a test drive today",
        description: "Click for more information",
        advertiser: "Citroën"
      },
      "0e8893f90b606c9c5d33f1be-152343927": {
        title: "New Citroën C5 Aircross SUV. Book a test drive today",
        description: "Click for more information",
        advertiser: "Citroën"
      },
      "0e8893f90b606c9c5d33f1be-152343855": {
        title: "Citroën C3 Aircross. Book a test drive today",
        description: "Click for more information",
        advertiser: "Citroën"
      },
      "0e8893f90b606c9c5d33f1be-152343889": {
        title: "Citroën C4 Cactus Hatch. Book a test drive today",
        description: "Click for more information",
        advertiser: "Citroën"
      },
      "0e8893f90b606c9c5d33f1be-152343810": {
        title: "Citroën C3. Book a test drive today",
        description: "Click for more information",
        advertiser: "Citroën"
      },
      "0e8893f90b606c9c5d33f1be-152343779": {
        title: "Citroën C1. Book a test drive today",
        description: "Click for more information",
        advertiser: "Citroën"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2307:1l3ykpxa": {
        title: "Our daughters go through a world of firsts. Make her first deodorant a caring one.",
        description: "Care you can count on.",
        advertiser: "Dove"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2307:1a52miwf": {
        title: "Goodbye Dull Skin. Hello smooth.",
        description: "Exfoliate + Nourish with a burst of pomegranate fragrance",
        advertiser: "Dove"
      },
      "bf2b131f1f7eff9d8892972c-16_196778166": {
        title: "Dave's Single is now just $3",
        description: "Only at Wendy's can you get a ¼ lb. of fresh Canadian beef and all your favourite toppings for just $3. Offer ends Sept. 22.",
        advertiser: "Wendy's"
      },
      "bf2b131f1f7eff9d8892972c-16_196777164": {
        title: "Dave's Single is now just $3",
        description: "Only at Wendy's can you get a ¼ lb. of fresh Canadian beef and all your favourite toppings for just $3. Offer ends Sept. 22.",
        advertiser: "Wendy's"
      },
      "bf2b131f1f7eff9d8892972c-16_196775074": {
        title: "Wendy's $3 Dave's Single is back!",
        description: "Just in time for football. And the best part? You don't need to hold out on your contract to afford it. Only until Sept. 22.",
        advertiser: "Wendy's"
      },
      "gBgkxrVErPj9wqivTDd2AmVY-3435556": {
        title: "Drop Gold, Go Digital.",
        advertiser: "Grayscale"
      },
      "0e8893f90b606c9c5d33f1be-176610067": {
        title: "Bring clarity to your communication and lead with impact on our short course",
        description: "High performance people skills for leaders. Discover more.",
        advertiser: "London Business School"
      },
      "0e8893f90b606c9c5d33f1be-176609948": {
        title: "Gear up for global business with our short course",
        description: "Senior Executive Programme. Discover more.",
        advertiser: "London Business School"
      },
      "0e8893f90b606c9c5d33f1be-176609732": {
        title: "Essentials from the MBA curriculum, delivered in London",
        description: "Accelerated Development Programme. Discover more.",
        advertiser: "London Business School"
      },
      "0e8893f90b606c9c5d33f1be-175260682": {
        title: "Prep. Paint. Perfect.",
        advertiser: "The Home Depot"
      },
      "0e8893f90b606c9c5d33f1be-175260749": {
        title: "Prep. Paint. Perfect.",
        advertiser: "The Home Depot"
      },
      "0e8893f90b606c9c5d33f1be-175260848": {
        title: "Prep. Paint. Perfect.",
        advertiser: "The Home Depot"
      },
      "0e8893f90b606c9c5d33f1be-175260903": {
        title: "Prep. Paint. Perfect.",
        advertiser: "The Home Depot"
      },
      "0e8893f90b606c9c5d33f1be-175260978": {
        title: "Shop All Exclusive New Offers",
        advertiser: "The Home Depot",
        media_url: "https://ad.doubleclick.net/ddm/clk/451905447;253669512;n"
      },
      "0e8893f90b606c9c5d33f1be-175261008": {
        title: "Shop All Exclusive New Offers",
        advertiser: "The Home Depot",
        media_url: "https://ad.doubleclick.net/ddm/clk/451905447;253670376;n"
      },
      "0e8893f90b606c9c5d33f1be-175261103": {
        title: "Shop All Exclusive New Offers",
        advertiser: "The Home Depot",
        media_url: "https://ad.doubleclick.net/ddm/clk/451905447;253670382;k"
      },
      "0e8893f90b606c9c5d33f1be-175914706": {
        title: "Free All-Inclusive Carpet Installation",
        advertiser: "The Home Depot",
        media_url: "https://ad.doubleclick.net/ddm/clk/451964258;253926768;b"
      },
      "5b286190338513af73f09c28-r7i16ra0": {
        title: "Transform your face to a flawless finish with Shiseido self-refreshing foundation.",
        description: "Discover the impeccable self-refreshing foundation from Shiseido first hand and fall in love with having flawless skin.",
        advertiser: "Shiseido"
      },
      "5b286190338513af73f09c28-5zf3pzzv": {
        title: "Transform your face to a flawless finish with Shiseido self-refreshing foundation.",
        description: "Discover the impeccable self-refreshing foundation from Shiseido first hand and fall in love with having flawless skin.",
        advertiser: "Shiseido"
      },
      "5b286190338513af73f09c28-63jj985t": {
        title: "Refine and polish your beauty with handcrafted hake brushes from Shiseido.",
        description: "Reimagine your complexion and breathe life into your skin with intuitively designed, ergonomic Shiseido hake brushes.",
        advertiser: "Shiseido"
      },
      "5b286190338513af73f09c28-87udi2cp": {
        title: "Achieve flawless 24-hour coverage with self-refreshing foundation from Shiseido.",
        description: "Shine bright with a healthy, natural glow all day with Shiseido self-refreshing foundation that fits your life.",
        advertiser: "Shiseido"
      },
      "5b286190338513af73f09c28-wvvman6n": {
        title: "Achieve flawless 24-hour coverage with self-refreshing foundation from Shiseido.",
        description: "Shine bright with a healthy, natural glow all day with Shiseido self-refreshing foundation that fits your life.",
        advertiser: "Shiseido"
      },
      "bf2b131f1f7eff9d8892972c-16_200875500": {
        title: "Finances are often a reason domestic violence victims can’t leave.",
        description: "There are ways to help survivors reach financial independence.",
        advertiser: "Santander"
      },
      "bf2b131f1f7eff9d8892972c-16_200873943": {
        title: "Finances are often a reason domestic violence victims can’t leave.",
        description: "There are ways to help survivors reach financial independence.",
        advertiser: "Santander"
      },
      "bf2b131f1f7eff9d8892972c-16_200873637": {
        title: "Finances are often a reason domestic violence victims can’t leave.",
        description: "There are ways to help survivors reach financial independence.",
        advertiser: "Santander"
      },
      "bf2b131f1f7eff9d8892972c-16_200874949": {
        title: "Finances are often a reason domestic violence victims can’t leave.",
        description: "There are ways to help survivors reach financial independence.",
        advertiser: "Santander"
      },
      "bf2b131f1f7eff9d8892972c-16_200871250": {
        title: "Getting out of an abusive home is never as easy as just leaving.",
        description: "One of the biggest reasons domestic violence survivors stay is financial.",
        advertiser: "Santander"
      },
      "bf2b131f1f7eff9d8892972c-16_200876427": {
        title: "Getting out of an abusive home is never as easy as just leaving.",
        description: "One of the biggest reasons domestic violence survivors stay is financial.",
        advertiser: "Santander"
      },
      "bf2b131f1f7eff9d8892972c-16_200873540": {
        title: "Getting out of an abusive home is never as easy as just leaving.",
        description: "One of the biggest reasons domestic violence survivors stay is financial.",
        advertiser: "Santander"
      },
      "bf2b131f1f7eff9d8892972c-16_200873639": {
        title: "Getting out of an abusive home is never as easy as just leaving.",
        description: "One of the biggest reasons domestic violence survivors stay is financial.",
        advertiser: "Santander"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199091875": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199091878": {
        title: "Discover magnificent radiance bottled in every Clé de Peau Beauté skincare product.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199091882": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092060": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092066": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092076": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092151": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092154": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092358": {
        title: "Discover magnificent radiance bottled in every Clé de Peau Beauté skincare product.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092433": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092535": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092539": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092625": {
        title: "Discover magnificent radiance bottled in every Clé de Peau Beauté skincare product.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092630": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092635": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092727": {
        title: "Discover magnificent radiance bottled in every Clé de Peau Beauté skincare product.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092730": {
        title: "Discover magnificent radiance bottled in every Clé de Peau Beauté skincare product.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092740": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092743": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092796": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092800": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092805": {
        title: "Discover magnificent radiance bottled in every Clé de Peau Beauté skincare product.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199092806": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093013": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093016": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093023": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093031": {
        title: "Discover magnificent radiance bottled in every Clé de Peau Beauté skincare product.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093033": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093039": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093095": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093099": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093100": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093102": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093109": {
        title: "Discover magnificent radiance bottled in every Clé de Peau Beauté skincare product.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093201": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093203": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093293": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093387": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093392": {
        title: "Revitalize your skincare routine with silky serums and cleansers from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "HDHY4fY4bB65i2Rv4N42K1Ed-2249:199093590": {
        title: "Restore your skin to its ultimate shine with beauty products from Clé de Peau Beauté.",
        description: "Achieve glowing, healthy skin with Key Radiance Care Ritual from Clé de Peau Beauté that is backed by 40 years of Proprietary Skin Science.",
        advertiser: "Clé de Peau Beauté"
      },
      "0e8893f90b606c9c5d33f1be-185775289": {
        title: "Your Happy Hour starts now!",
        description: "Indulge in offers exclusive to Changi Airport. Return home happier when you buy before you fly or on iShopChangi and Collect on Return.",
        advertiser: "Singapore Changi Airport"
      },
      "0e8893f90b606c9c5d33f1be-185775254": {
        title: "Your Happy Hour starts now!",
        description: "Indulge in offers exclusive to Changi Airport. Return home happier when you buy before you fly or on iShopChangi and Collect on Return.",
        advertiser: "Singapore Changi Airport"
      },
      "0e8893f90b606c9c5d33f1be-185775193": {
        title: "Your Happy Hour starts now!",
        description: "Indulge in offers exclusive to Changi Airport. Return home happier when you buy before you fly or on iShopChangi and Collect on Return.",
        advertiser: "Singapore Changi Airport"
      },
      "0e8893f90b606c9c5d33f1be-185775119": {
        title: "Your Happy Hour starts now!",
        description: "Indulge in offers exclusive to Changi Airport. Return home happier when you buy before you fly or on iShopChangi and Collect on Return.",
        advertiser: "Singapore Changi Airport"
      },
      "0e8893f90b606c9c5d33f1be-185775056": {
        title: "Your Happy Hour starts now!",
        description: "Indulge in offers exclusive to Changi Airport. Return home happier when you buy before you fly or on iShopChangi and Collect on Return.",
        advertiser: "Singapore Changi Airport"
      },
      "5b286190338513af73f09c28-y3tqpkj6": {
        title: "Imagine All The Play-Doh Pizza Possibilities",
        description: "Your little chef can slice up some oven-fresh fun again and again with this pizza play food set. Makes a great gift or creative activity!",
        advertiser: "Hasbro"
      },
      "5b286190338513af73f09c28-c4nvxwkh": {
        title: "Here Comes The Play-Doh Firetruck",
        description: "Roll to the rescue with this toy firetruck! Squishy Play-Doh fun helps them imagine their own fire rescue stories again and again.",
        advertiser: "Hasbro"
      }
    },
    u = {
      "33de9.c9b23.5768": {
        title: "#PhonesAreGood on the Best Network for Data",
        description: "If it weren't for your mobile how would you find love lounging on the sofa? Or get a pizza delivered at the drop of a thumb? #PhonesAreGood",
        advertiser: "Three"
      },
      "33de9.72cd2.11eb": {
        title: "#PhonesAreGood on the Best Network for Data",
        description: "If it weren't for your mobile how would you find love lounging on the sofa? Or get a pizza delivered at the drop of a thumb? #PhonesAreGood",
        advertiser: "Three"
      },
      "33de9.4f658.a9a4": {
        title: "Modern Warfare Launch Trailer",
        advertiser: "Activision"
      }
    },
    d = function(e) {
      if (l.shouldOnlyRenderBannerThumbnail(e.deal_id)) return {
        title: "",
        description: "",
        advertiser: "",
        promoted_by_text: ""
      };
      if (l.shouldHideAdvertiser(e.deal_id)) return {
        advertiser: "",
        promoted_by_text: "",
        brand_logo_url: ""
      };
      var t = c[e.creative_key] || {};
      return (0, s.default)(u).forEach(function(n) {
        e.creative_key.indexOf(n) >= 0 && (t = u[n])
      }), t
    },
    p = {
      swap: function(e) {
        return (0, a.default)({}, e, d(e))
      }
    };
  e.exports = p
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(136),
    a = i(r),
    o = n(20),
    s = i(o),
    l = n(3),
    c = i(l),
    u = n(4),
    d = i(u),
    p = n(57),
    h = n(138),
    f = 250,
    m = function() {
      function e(t, n, i) {
        (0, c.default)(this, e), this.thumbnail = t, this.creative = n, this.tracker = i, this.thumbnailWidth = this.thumbnail.offsetWidth, this.thumbnailHeight = this.thumbnail.offsetHeight, this.scale = this.thumbnailHeight / f
      }
      return (0, d.default)(e, [{
        key: "render",
        value: function() {
          switch (h.getRenderMethod(this.creative.adm)) {
            case "div":
              return s.default.resolve(this._replaceThumbnailWithBanner(this._bannerInDiv()));
            case "postscribe":
              return this._renderWithPostScribe();
            case "iframe":
            default:
              return "0e8893f90b606c9c5d33f1be" === this.creative.source_id ? s.default.resolve(this._renderInIframe()) : s.default.resolve(this._replaceThumbnailWithBanner(this._bannerInIframe()))
          }
        }
      }, {
        key: "_renderWithPostScribe",
        value: function() {
          var e = this;
          return new s.default(function(t, n) {
            STR.Vendor.$.getScript("https://cdnjs.cloudflare.com/ajax/libs/postscribe/1.4.0/postscribe.min.js", function() {
              var i = e._bannerInDiv();
              e._replaceThumbnailWithBanner(i);
              var r = [].concat((0, a.default)(i.querySelectorAll("script")));
              if (!r || 0 === r.length) return t();
              var o = r.map(function(e) {
                var t = e.parentNode;
                if (!e.attributes.src || "mraid.js" !== e.attributes.src.value) return new s.default(function(n, i) {
                  return postscribe(t, e.outerHTML, {
                    done: function() {
                      return n()
                    },
                    error: function(e) {
                      return i(e.message)
                    }
                  })
                })
              });
              s.default.all(o).then(function() {
                return t()
              }).catch(function(e) {
                return n(e.message)
              })
            })
          })
        }
      }, {
        key: "_replaceThumbnailWithBanner",
        value: function(e) {
          var t = this._randomClass();
          e.classList.add(t);
          var n = this.thumbnail.parentNode;
          n.replaceChild(e, this.thumbnail);
          var i = p.createElement("style");
          i.innerHTML = "\n      .str-adunit[data-str-native-key] ." + t + " {\n        width: " + this.thumbnailWidth + "px !important;\n        height: " + this.thumbnailHeight + "px !important;\n        padding: unset !important;\n        text-align: center;\n        text-align: -webkit-center;\n        text-align: -moz-center;\n      }\n    ", n.append(i)
        }
      }, {
        key: "_randomClass",
        value: function() {
          return "str-thumbnail-" + Math.ceil(1e5 * Math.random())
        }
      }, {
        key: "_bannerInDiv",
        value: function() {
          var e = p.createElement("div");
          e.classList.add("str-thumbnail"), e.style.backgroundColor = "rgba(0,0,0,0)", e.style.transform = "scale(" + this.scale + ")", e.style.transformOrigin = "center top", e.innerHTML = this.creative.adm;
          var t = p.createElement("style");
          return t.innerHTML = '\n      .str-adunit[data-str-native-key] .str-thumbnail img:not([width="1"]):not([width="0"]):not(.qc-adchoices-icon):not([src="https://cdn01.centro.net/assets/centro/m_ac.svg"]) {\n        max-width: 100% !important;\n        max-height: unset !important;\n        width: 300px !important;\n        height: 250px !important;\n        vertical-align: middle !important;\n        margin: 0 auto !important;\n      }\n\n      .str-adunit[data-str-native-key] .str-thumbnail img[width="1"],\n      .str-adunit[data-str-native-key] .str-thumbnail img[width="0"] {\n        display: none;\n      }\n    ', e.appendChild(t), e
        }
      }, {
        key: "_bannerInIframe",
        value: function() {
          var e = p.createElement("iframe", {
            frameBorder: "0",
            scrolling: "no"
          });
          e.classList.add("str-thumbnail"), e.style.backgroundColor = "rgba(0,0,0,0)";
          var t = Math.max((this.thumbnailWidth - 300 * this.scale) / 2, 0),
            n = "<html>\n    <head>\n      <style>\n        .str-thumbnail-body {\n          margin: 0;\n          padding-left: " + t + "px;\n          padding-right: " + t + "px;\n        }\n        .str-thumbnail-banner {\n          width: 300px;\n          height: " + f + "px;\n          transform: scale(" + this.scale + ");\n          transform-origin: left top;\n        }\n      </style>\n    </head>\n    <body class='str-thumbnail-body'>\n      <div class='str-thumbnail-banner'>\n        " + this.creative.adm + "\n      </div>\n    </body>\n    </html>";
          return e.src = "data:text/html;charset=utf-8," + encodeURI(n), e
        }
      }, {
        key: "_renderInIframe",
        value: function() {
          var e = p.createElement("iframe", {
            frameBorder: "0",
            scrolling: "no"
          });
          e.classList.add("str-thumbnail"), e.style.width = this.thumbnailWidth + "px", e.style.height = this.thumbnailHeight + "px", e.style.backgroundColor = "rgba(0,0,0,0)", this._replaceThumbnailWithBanner(e);
          var t = Math.max((this.thumbnailWidth - 300 * this.scale) / 2, 0),
            n = "<html>\n    <head>\n      <style>\n        .str-thumbnail-body {\n          margin: 0;\n          padding-left: " + t + "px;\n          padding-right: " + t + "px;\n        }\n        .str-thumbnail-banner {\n          width: 300px;\n          height: " + f + "px;\n          transform: scale(" + this.scale + ");\n          transform-origin: left top;\n        }\n      </style>\n    </head>\n    <body class='str-thumbnail-body'>\n      <div class='str-thumbnail-banner'>\n        " + this.creative.adm + "\n      </div>\n    </body>\n    </html>",
            i = e.contentDocument || e.contentWindow.document;
          return i.open(), i.write(n), i.close(), e
        }
      }]), e
    }();
  e.exports = m
}, function(e, t) {
  e.exports = {
    placement: {
      layout: "multiple",
      status: "pre-live",
      articlesBeforeFirstAd: 2,
      articlesBetweenAds: 2,
      allowInstantPlay: !0,
      placementAttributes: {
        template: "&lt;article class=&quot;post has-thumbnail related-article str-adunit&quot; style=&quot;background-color: rgb(238, 238, 238);&quot;&gt; &lt;a name=&quot;&amp;amp;lpos=EarthBox&quot; class=&quot;photo ui-link str-thumbnail&quot; style=&quot;background-image:url({{thumbnail_url}});background-position-x: 50%;&quot; id=&quot;{{creative_key}}-0&quot;&gt; &lt;/a&gt; &lt;div class=&quot;inner-post&quot;&gt; &lt;h3 class=&quot;headline&quot;&gt; &lt;a name=&quot;&amp;amp;lpos=EarthBox&quot; class=&quot;ui-link&quot; id=&quot;{{creative_key}}-1&quot;&gt;{{title}}&lt;/a&gt; &lt;/h3&gt; &lt;div class=&quot;dek&quot;&gt;{{promoted_by_text}} {{advertiser}}&lt;/div&gt; &lt;/div&gt; &lt;/article&gt; &lt;!-- #### DO NOT REMOVE #### --&gt; &lt;!-- ~~~~ script tag test ~~~~ --&gt; &lt;script&gt;console.log(&apos;script test from bakery, yo!! ;)&apos;)&lt;/script&gt;",
        template_key: "fake-template-key",
        promoted_by_text: "Ad by",
        allow_dynamic_cropping: !0,
        dfp_path: "",
        featured_content: [{
          creative: {
            creative_key: "fake_featured_content_creative_key",
            advertiser: "The Atlantic",
            title: "Introducing: The Atlantic's Science Section",
            description: "The Atlantic has been covering science - and covering it well - for some time now. But until today, we have hosted most of our science coverage here at TheAtlantic.com in our Technology and Health sections. From today on, Science will have its own section.",
            thumbnail_url: "https://cdn.theatlantic.com/assets/media/img/mt/2015/09/Earthrise2/lead_960.jpg?1442234751",
            content_url: "https://www.theatlantic.com/science/archive/2015/09/introducing-the-atlantics-new-science-section/405088/",
            media_url: "https://www.theatlantic.com/science/archive/2015/09/introducing-the-atlantics-new-science-section/405088/",
            share_url: "https://www.theatlantic.com/science/archive/2015/09/introducing-the-atlantics-new-science-section/405088/",
            action: "clickout",
            promoted_by_text: "Gladly brought to you by: "
          }
        }],
        third_party_partners: [{
          key: "stxnetwork",
          tag: "&lt;i class=&apos;use-iframe&apos; data-width=&apos;100%&apos; data-height=&apos;200&apos; data-url=&apos;//placement-networks.sharethrough.com/f37048e2/tag&apos;&gt;"
        }, {
          key: "785ff21e",
          tag: "&lt;i class=&apos;use-iframe&apos; data-width=&apos;700&apos; data-height=&apos;200&apos; data-url=&apos;//placement-networks.sharethrough.com/fa2e028a/tag&apos;&gt;"
        }, {
          key: "7860afa7",
          tag: "&lt;i class=&apos;use-iframe&apos; data-width=&apos;300&apos; data-height=&apos;200&apos; data-url=&apos;//placement-networks.sharethrough.com/919ff672/tag&apos;&gt;"
        }],
        strOptOutIcon: !0,
        strOptOutUrl: "https://platform-cdn.sharethrough.com/privacy-policy?language=EN",
        enable_link_redirection: !1,
        customCardCss: "body{background-color:#e6e6e6;}"
      },
      metadata: {
        cardExperience: !0,
        strOptOutIcon: !0
      }
    }
  }
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(48),
    a = i(r),
    o = n(75),
    s = i(o),
    l = n(45),
    c = i(l),
    u = n(3),
    d = i(u),
    p = n(4),
    h = i(p),
    f = n(54),
    m = i(f),
    g = n(55),
    v = i(g),
    y = n(56),
    b = i(y);
  n(121);
  var T = n(24),
    w = n(79),
    k = n(22),
    S = n(234),
    x = n(139),
    C = function(e) {
      function t(e, n, i, r) {
        (0, d.default)(this, t);
        var a = (0, m.default)(this, (t.__proto__ || (0, c.default)(t)).call(this, e, n, i, r));
        return a.creativeStore = r, a.creativePayloads = a.transformSlides(e), a.slides = [], a
      }
      return (0, b.default)(t, e), (0, h.default)(t, [{
        key: "transformSlides",
        value: function(e) {
          return e.creative.slides.map(function(t) {
            var n = (0, s.default)({}, JSON.parse((0, a.default)(e.creative)), {
                description: t.description,
                title: t.headline,
                media_url: t.media_url,
                original_thumbnail_url: t.thumbnail_url,
                thumbnail_url: t.thumbnail_url
              }),
              i = (0, s.default)({}, e);
            return i.creative = n, i
          })
        }
      }, {
        key: "insertCarouselTemplate",
        value: function() {
          var e = k.createHTMLElFromString(x.generateCarouselContainerTemplate(this.creative.slides.length))[0];
          (0, v.default)(t.prototype.__proto__ || (0, c.default)(t.prototype), "addDataAttributes", this).call(this, e), this.element.parentElement.replaceChild(e, this.element), this.element = e, this.$element = T(this.element);
          for (var n = e.querySelectorAll("[data-str-native-key]"), i = 0; i < n.length; i++) {
            var r = n[i],
              a = new S(this.creativePayloads[i], r, this.placementKey, this.creativeStore, this.creative.slides.length);
            this.slides.push(a), a.render()
          }
          return e
        }
      }, {
        key: "initializeFlexSlider",
        value: function() {
          var e = this.$element.find(".str-flexslider");
          return this.element.style.width = this.$element.outerWidth() + "px", e.flexslider({
            animation: "slide",
            slideshow: !1,
            slideshowSpeed: 3e3,
            controlNav: !1,
            directionNav: !1,
            pauseOnHover: !0,
            manualControls: "",
            prevText: "",
            nextText: "",
            before: this.updateSlideDirectNav.bind(this)
          }), this.initializeSlideDirectNav(), e
        }
      }, {
        key: "initializeSlideDirectNav",
        value: function() {
          this.slides.forEach(function(e) {
            var t = e.element.querySelector(".direct-nav-control a");
            t && t.classList.add("flex-active")
          })
        }
      }, {
        key: "updateSlideDirectNav",
        value: function(e) {
          var t = e.animatingTo;
          this.slides.forEach(function(e) {
            for (var n = e.element.querySelectorAll(".direct-nav-control a"), i = 0; i < n.length; i++) {
              var r = n[i];
              r.classList.remove("flex-active"), i === t && r.classList.add("flex-active")
            }
          })
        }
      }, {
        key: "swapTagWithRenderedCreative",
        value: function() {
          this.insertCarouselTemplate()
        }
      }, {
        key: "attachEvents",
        value: function() {
          var e = this;
          this.creative.slideshow_autoscroll && (this.$element.on("view:visible", function() {
            e.$slider.flexslider("play")
          }), this.$element.on("view:notVisible", function() {
            e.$slider.flexslider("pause")
          }));
          for (var t = this.element.querySelectorAll(".flex-prev"), n = 0; n < t.length; n++) {
            t[n].addEventListener("click", function() {
              e.$slider.flexslider("prev")
            })
          }
          for (var i = this.element.querySelectorAll(".flex-next"), r = 0; r < i.length; r++) {
            i[r].addEventListener("click", function() {
              e.$slider.flexslider("next")
            })
          }
          this.slides.forEach(function(t) {
            return t.attachEvents(e.$slider)
          })
        }
      }, {
        key: "render",
        value: function() {
          (0, v.default)(t.prototype.__proto__ || (0, c.default)(t.prototype), "render", this).call(this), this.$slider = this.initializeFlexSlider(), this.attachEvents()
        }
      }]), t
    }(w);
  e.exports = C
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(45),
    a = i(r),
    o = n(3),
    s = i(o),
    l = n(4),
    c = i(l),
    u = n(54),
    d = i(u),
    p = n(55),
    h = i(p),
    f = n(56),
    m = i(f),
    g = n(110),
    v = n(22),
    y = n(139),
    b = (n(46), function(e) {
      function t(e, n, i, r, o) {
        (0, s.default)(this, t);
        var l = (0, d.default)(this, (t.__proto__ || (0, a.default)(t)).call(this, e, n, i, r));
        return l.slideCount = o, l
      }
      return (0, m.default)(t, e), (0, c.default)(t, [{
        key: "handleClick",
        value: function(e) {
          e.target.classList.contains("str-slide-control") || (0, h.default)(t.prototype.__proto__ || (0, a.default)(t.prototype), "handleClick", this).call(this, e)
        }
      }, {
        key: "attachEvents",
        value: function(e) {
          for (var t = this.directNavControls.querySelectorAll(".direct-nav-control"), n = 0; n < t.length; n++) ! function(n) {
            t[n].addEventListener("click", function() {
              e.flexslider(n)
            })
          }(n)
        }
      }, {
        key: "render",
        value: function() {
          (0, h.default)(t.prototype.__proto__ || (0, a.default)(t.prototype), "render", this).call(this);
          var e = this.element.querySelector(".thumbnail-wrapper"),
            n = document.createElement("div"),
            i = v.createHTMLElFromString(y.generateSequentialControlsTemplate())[0];
          this.directNavControls = v.createHTMLElFromString(y.generateDirectNavControlsTemplate(this.slideCount))[0], n.appendChild(i), n.appendChild(this.directNavControls), e.appendChild(n)
        }
      }, {
        key: "postRender",
        value: function() {
          return !0
        }
      }, {
        key: "appendScriptsTo",
        value: function() {
          return !0
        }
      }, {
        key: "addDataAttributes",
        value: function() {
          return !0
        }
      }, {
        key: "fireRenderStartEvent",
        value: function() {
          return !0
        }
      }]), t
    }(g));
  e.exports = b
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(45),
    a = i(r),
    o = n(3),
    s = i(o),
    l = n(4),
    c = i(l),
    u = n(54),
    d = i(u),
    p = n(55),
    h = i(p),
    f = n(56),
    m = i(f);
  n(121);
  var g = (n(24), n(110)),
    v = n(57),
    y = n(140),
    b = y.SlideshowElement,
    T = n(137),
    w = function(e) {
      function t(e, n, i, r) {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, a.default)(t)).apply(this, arguments))
      }
      return (0, m.default)(t, e), (0, c.default)(t, [{
        key: "handleClick",
        value: function(e) {
          e.target.classList.contains("str-slide-control") || (0, h.default)(t.prototype.__proto__ || (0, a.default)(t.prototype), "handleClick", this).call(this, e)
        }
      }, {
        key: "updateThumbnail",
        value: function(e) {
          var t = this.imageUrls(e),
            n = this.slideshowTemplate(t);
          this.insertSlideshowTemplate(n), this.setSlideshowThumbnails(t);
          var i = this.initializeFlexSlider();
          this.creative.slideshow_autoscroll && this.attachEvents(i)
        }
      }, {
        key: "attachEvents",
        value: function(e) {
          this.$element.on("view:visible", function() {
            e.flexslider("play")
          }), this.$element.on("view:notVisible", function() {
            e.flexslider("pause")
          })
        }
      }, {
        key: "setSlideshowThumbnails",
        value: function(e) {
          for (var t = this.element.querySelectorAll(".str-thumbnail"), n = 0; n < t.length; n++) {
            var i = t[n],
              r = e[n];
            if (this.creative.shouldExperimentLoadingSpinner) {
              new T(i, r).render()
            } else i.style.backgroundImage = "url(" + r + ")"
          }
        }
      }, {
        key: "insertSlideshowTemplate",
        value: function(e) {
          var t = this.element.querySelector(".str-thumbnail"),
            n = v.createElement("div");
          n.innerHTML = e, this.element.querySelector(".thumbnail-wrapper").replaceChild(n, t)
        }
      }, {
        key: "initializeFlexSlider",
        value: function() {
          var e = this.$element.find(".str-flexslider");
          return e.flexslider({
            animation: "slide",
            slideshow: !1,
            slideshowSpeed: 2e3,
            customDirectionNav: this.$element.find(".flex-direction-nav a"),
            pauseOnHover: !0,
            manualControls: this.$element.find(".flex-control-nav a")
          }), e
        }
      }, {
        key: "slideshowTemplate",
        value: function(e) {
          return new b(e, this.element.querySelector(".str-thumbnail")).slideshowTemplate()
        }
      }, {
        key: "imageUrls",
        value: function(e) {
          var t = this.creative.slides.map(function(e) {
            return e.thumbnail_url
          });
          return this.placement.placementAttributes.allow_dynamic_cropping ? t.map(function(t) {
            return STR.Tag.Helpers.AdUnitHelper.imgixThumbnailUrlForElement(t, e)
          }) : t
        }
      }]), t
    }(g);
  e.exports = w
}, function(e, t, n) {
  var i, r;
  n(0), n(1), i = STR.Vendor.$, r = n(17), STR.Tag.Helpers.SharingHelper = {
    isSharingButton: function(e) {
      return STR.Vendor.$(e).parents().hasClass("str-sharing-container")
    },
    facebookShareUrl: function(e) {
      return "http://www.facebook.com/sharer.php?u=" + e
    },
    twitterShareUrl: function(e, t) {
      return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(t) + "&url=" + encodeURIComponent(e)
    },
    emailShareUrl: function(e, t, n) {
      var i;
      return i = n + " Click here to learn more: " + e, "mailto:?subject=" + encodeURIComponent(t) + "&body=" + encodeURIComponent(i)
    },
    createSharingElement: function(e, t, n, r, a, o, s) {
      var l, c, u, d, p;
      return u = "<span class='str-button-text'>" + n + "</span>", d = "<span class='str-sharing-icon'></span>", p = "custom" === t ? u : u + d, c = i("<a>", {
        class: "str-" + t + "-share str-share-button",
        target: "_blank",
        href: r,
        html: p
      }), l = i("<div>", {
        class: "str-sharing-container str-" + t + "-container"
      }).append(c), c.on("click", function(n) {
        return function() {
          return "custom" !== t && e.handleShare(t), s && e.fireThirdPartyPixel(s), o.trigger("str-share-clicked")
        }
      }()), a.append(l)
    },
    createCardSharing: function(e, t, n, i) {
      var r;
      if (e.share_url && (r = STR.Tag.Helpers.SharingHelper, this.createSharingElement(t, "facebook", "", r.facebookShareUrl(e.share_url), n, i), this.createSharingElement(t, "twitter", "", r.twitterShareUrl(e.share_url, e.title), n, i), this.createSharingElement(t, "email", "", r.emailShareUrl(e.share_url, e.title, e.description), n, i)), this.customButtonPresent(e)) return this.createSharingElement(t, "custom", e.custom_engagement_label, this.customShareRedirectUrl(e.custom_engagement_url, t), n, i, e.beacons.custom_click)
    },
    customButtonPresent: function(e) {
      return !!e.custom_engagement_url
    },
    customShareRedirectUrl: function(e, t) {
      return STR.Tag.ClickoutHost + "/?clickout_url=" + encodeURIComponent(e) + "&tracking_url=" + this.customShareTrackingUrl(t)
    },
    customShareTrackingUrl: function(e) {
      var t, n, a, o;
      return t = i.extend({}, e.defaultBeaconParams), t.umtime = (new Date).getTime(), t.engagement = !0, t.userEvent = STR.Tag.Helpers.BeaconCannon.share, t.type = STR.Tag.Helpers.BeaconCannon.userEvent, t.share = "custom", t.tkey = e.tkey, a = function() {
        var e;
        e = [];
        for (n in t) o = t[n], e.push(n + "=" + o);
        return e
      }(), encodeURIComponent("" + r.getValidLocationProtocol() + STR.Tag.TrackingHost + "/butler?" + a.join("&"))
    }
  }, e.exports = STR.Tag.Helpers.SharingHelper
}, function(e, t, n) {
  var i;
  n(0), n(1), i = STR.Vendor.$, STR.Tag.Helpers.SpecialCaseRenderer = {
    render: function(e, t, n) {
      var r, a, o, s, l, c;
      return r = STR.Tag.Helpers.HtmlUtility.forceFeaturedContent(), a = STR.Tag.Helpers.HtmlUtility.previewMediation(), o = STR.Tag.Helpers.HtmlUtility.selectThirdParty(), a && null != e.thirdPartyPartners ? (c = "//sfp.sharethrough.com/placement_networks/" + a + "/tag", i.get(c, function(r) {
        return function(r) {
          var a, o;
          return o = i("<div>").html(r), a = o.html().trim(), new STR.Tag.Views.ThirdPartyPartner(t, e.placementKey, "mediation-preview", a, n).render()
        }
      }())) : o && null != e.thirdPartyPartners ? (s = e.thirdPartyPartners.getThirdPartyPartner(o), l = STR.Tag.Helpers.HtmlUtility.decodeString(s.tag), "stxnetwork" === s.key ? e.handleMonetizeSTXCall(t) : new STR.Tag.Views.ThirdPartyPartner(t, e.placementKey, s.key, l, n).render()) : r && e.hasFeaturedContent() ? new STR.Tag.Views.FeaturedContent(e.featuredContent.getFeaturedContent(), t, e.placementKey, e.creativeStore).render() : void 0
    },
    isSpecialCase: function() {
      var e, t, n;
      return e = STR.Tag.Helpers.HtmlUtility.forceFeaturedContent(), t = STR.Tag.Helpers.HtmlUtility.previewMediation(), n = STR.Tag.Helpers.HtmlUtility.selectThirdParty(), e || t || n
    }
  }, e.exports = STR.Tag.Helpers.SpecialCaseRenderer
}, function(e, t, n) {
  n(0), n(1), STR.Tag.Helpers.TextHelper = {
    clampText: function() {
      var e, t, n, i, r, a, o;
      if (t = document.getElementsByClassName("str-text-clamp")) {
        for (a = [], n = 0, i = t.length; n < i; n++) e = t[n], r = e.getAttribute("data-str-text-clamp"), o = Math.floor(r), a.push(STR.Vendor.Clamp(e, o));
        return a
      }
    }
  }, e.exports = STR.Tag.Helpers.TextHelper
}, function(e, t, n) {
  n(0), n(1), STR.Tag.Helpers.HostedVideoRenderingHelper = {
    insertVideoAfter: function(e, t, n, i, r) {
      var a, o;
      return a = STR.Vendor.$("<div>", {
        style: "position: relative; height: " + n + "px"
      }), o = STR.Tag.Helpers.Html5Video.generateObjectMarkup(i, t, n, r), a.append(o), a.insertAfter(e), a.find("video")
    },
    swapVideoWithElement: function(e, t, n, i, r) {
      var a, o;
      return a = STR.Vendor.$("<div>", {
        style: "position: relative; height: " + n + "px"
      }), o = STR.Tag.Helpers.Html5Video.generateObjectMarkup(i, t, n, r), a.append(o), e.html(a), a.find("video")
    },
    setThumbnailWrapperBackground: function(e) {
      var t;
      return t = e.data("str-video-frame-color"), t || (t = "black"), e.find(".thumbnail-wrapper").css("background-color", t)
    },
    swapVideoWithThumbnail: function(e, t, n) {
      return t.insertAfter(e), e.remove()
    }
  }, e.exports = STR.Tag.Helpers.HostedVideoRenderingHelper
}, function(e, t, n) {
  var i = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(0), n(1), STR.Tag.Helpers.HostedVideoViewDurationHelper = function() {
    function e(e) {
      this.checkVideoCompletion = i(this.checkVideoCompletion, this), this.handleStop = i(this.handleStop, this), this.tracker = e, this.sent3 = !1, this.sent10 = !1, this.sent15 = !1, this.sent30 = !1
    }
    return e.prototype.VIDEO_COMPLETION_INTERVAL = 500, e.prototype.handleStop = function(e) {
      return clearInterval(this.videoCompletionIntervalId), this.tracker.handleVideoViewDuration(1e3 * e.currentTime, e.muted), this.checkVideoCompletion(e.currentTime, e.duration)
    }, e.prototype.setVideoCompletionInterval = function(e) {
      var t;
      return t = function(t) {
        return function() {
          return t.checkVideoCompletion(e.currentTime, e.duration)
        }
      }(this), this.videoCompletionIntervalId = setInterval(t, this.VIDEO_COMPLETION_INTERVAL)
    }, e.prototype.checkVideoCompletion = function(e, t) {
      var n;
      if (!(e > t)) return n = e / t * 100, this.tracker.trackCompletion(n), !this.sent3 && e >= 3 && (this.sent3 = !0, this.tracker.handleSilentAutoplayLength(3e3)), !this.sent10 && e >= 10 && (this.sent10 = !0, this.tracker.handleSilentAutoplayLength(1e4)), !this.sent15 && e >= 15 && (this.sent15 = !0, this.tracker.handleSilentAutoplayLength(15e3)), !this.sent30 && e >= 30 ? (this.sent30 = !0, this.tracker.handleSilentAutoplayLength(3e4)) : void 0
    }, e
  }(), e.exports = STR.Tag.Helpers.HostedVideoViewDurationHelper
}, function(e, t, n) {
  "use strict";
  n(151);
  var i = n(142),
    r = n(144),
    a = n(145),
    o = n(128);
  STR.Tag.Helpers.AppNexusHelper = a, STR.Tag.Helpers.CriteoHelper = r, STR.Tag.Helpers.TagUserInformationProvider = o, STR.Tag.Helpers.TradeDeskHelper = i, e.exports = {
    TradeDeskHelper: i,
    CriteoHelper: r,
    AppNexusHelper: a,
    TagUserInformationProvider: o
  }
}, function(e, t, n) {
  "use strict";
  var i = n(243),
    r = n(245),
    a = n(246);
  e.exports = {
    ImaHelper: i,
    VastVideoViewChooserHelper: r,
    VastVideoViewDurationHelper: a
  }
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(48),
    a = i(r),
    o = n(3),
    s = i(o),
    l = n(4),
    c = i(l);
  n(0), n(1);
  var u = n(244),
    d = n(70),
    p = function() {
      function e(t, n, i) {
        (0, s.default)(this, e), this.adUnit = t, this.element = n, this.loadedCallback = i, this.shouldMoatTrack = d.enabled("moat_video"), window.google && window.google.ima ? this.shouldMoatTrack ? this.prerender() : this.render() : (STR.Vendor.$.ajaxSetup({
          cache: !0
        }), STR.Vendor.$.getScript("https://imasdk.googleapis.com/prerelease/js/3.332.1/ima3.js", this.shouldMoatTrack ? this.prerender.bind(this) : this.render.bind(this)))
      }
      return (0, c.default)(e, [{
        key: "prerender",
        value: function() {
          STR.Vendor.$.getScript(STR.Tag.ClientJsUrl + "/assets/moat-video-tracker.js", this.render.bind(this))
        }
      }, {
        key: "trackImaError",
        value: function(e) {
          var t = e.getError();
          this.adUnit.tracker.trackEvent("imaError", {
            errorType: t.getType(),
            errorCode: t.getErrorCode(),
            message: t.getMessage(),
            vastErrorCode: t.getVastErrorCode()
          })
        }
      }, {
        key: "render",
        value: function() {
          google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.INSECURE), STR.Vendor.$.ajaxSetup({
            cache: !1
          });
          var e = new google.ima.AdDisplayContainer(this.element);
          e.initialize();
          var t = new google.ima.AdsLoader(e);
          return t.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.trackImaError.bind(this)), t.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, this.onAdsManagerLoaded.bind(this), !1), t.requestAds(this.setupAdRequest())
        }
      }, {
        key: "setupAdRequest",
        value: function() {
          var e = new google.ima.AdsRequest;
          return this.adUnit.creative.vast_url.match("</VAST>") ? e.adsResponse = this.adUnit.creative.vast_url : e.adTagUrl = this.adUnit.creative.vast_url, e.linearAdSlotWidth = this.element.offsetWidth, e.linearAdSlotHeight = this.element.offsetHeight, e.nonLinearAdSlotWidth = this.element.offsetWidth, e.nonLinearAdSlotHeight = this.element.offsetHeight, e.setAdWillAutoPlay(!0), e
        }
      }, {
        key: "onAdsManagerLoaded",
        value: function(e) {
          var t = {
              currentTime: 0,
              duration: 0
            },
            n = new google.ima.AdsRenderingSettings;
          n.uiElements = [], n.enablePreloading = !0;
          var i = e.getAdsManager(t, n);
          return i.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, this.trackImaError.bind(this)), this.shouldMoatTrack && this.initializeMoat(i), i.init(this.element.offsetWidth, this.element.offsetHeight, google.ima.ViewMode.NORMAL), new u(i).render(this.element), i.setVolume(0), i.addEventListener(google.ima.AdEvent.Type.CLICK, this.trackClick.bind(this)), this.loadedCallback(i)
        }
      }, {
        key: "trackClick",
        value: function(e) {
          var t = e.getAdData() || {};
          this.adUnit.tracker.trackEvent("imaClick", {
            adData: (0, a.default)(t)
          })
        }
      }, {
        key: "initializeMoat",
        value: function(e) {
          this.adUnit.tracker.trackEvent("moatVideo");
          var t = {
            partnerCode: "sharethroughjsvideoimasdk4009819437",
            viewMode: google.ima.ViewMode.NORMAL,
            moatClientLevel1: this.adUnit.creative.source_id,
            moatClientLevel2: this.adUnit.creative.action,
            moatClientLevel3: this.adUnit.creative.creative_key,
            moatClientSlicer1: this.adUnit.placement.placementAttributes.site_key,
            moatClientSlicer2: this.adUnit.placementKey
          };
          window.MoatVideoTracker.initMoatTracking(e, t, this.element)
        }
      }]), e
    }();
  e.exports = STR.Tag.Helpers.ImaHelper = p
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o),
    l = function(e, t, n) {
      return "\n    height: " + e + ";\n    background-color: #1796DD;\n    width: " + t + ";\n    transition: width " + n + " linear 0s, height 500ms linear 0s;\n    -webkit-transition: width " + n + " linear 0s, height 500ms linear 0s;\n    -moz-transition: width " + n + " linear 0s, height 500ms linear 0s;\n  "
    },
    c = function() {
      function e(t) {
        (0, a.default)(this, e), this.adsManager = t, this.el = document.createElement("div"), this.el.className = "str-progress-bar", this.bindEvents()
      }
      return (0, s.default)(e, [{
        key: "render",
        value: function(e) {
          var t = document.createElement("div");
          t.className = "str-progress-bar-container", t.appendChild(this.el), t.style = "\n  z-index: 2;\n  position: absolute;\n  bottom: 0px;\n  width: 100%;\n  padding-bottom: 0px;\n", e.appendChild(t)
        }
      }, {
        key: "bindEvents",
        value: function() {
          var e = google.ima.AdEvent.Type;
          this.adsManager.addEventListener(e.STARTED, this.start.bind(this)), this.adsManager.addEventListener(e.PAUSED, this.pause.bind(this)), this.adsManager.addEventListener(e.RESUMED, this.resume.bind(this))
        }
      }, {
        key: "start",
        value: function() {
          var e = this;
          this.el.style = l("12px", "0%", this.getAdDuration() + "s"), setTimeout(function() {
            e.el.style.width = "100%"
          }, 10), setTimeout(function() {
            e.el.style.height = "4px"
          }, 2500)
        }
      }, {
        key: "pause",
        value: function() {
          var e = this.getAdDuration(),
            t = e - this.adsManager.getRemainingTime(),
            n = t / e * 100;
          this.el.style = l("4px", n + "%", "0s")
        }
      }, {
        key: "resume",
        value: function() {
          this.el.style = l("4px", "100%", this.adsManager.getRemainingTime() + "s")
        }
      }, {
        key: "getAdDuration",
        value: function() {
          return this.adsManager.getCurrentAd().getDuration()
        }
      }]), e
    }();
  e.exports = c
}, function(e, t, n) {
  var i = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(0), n(1), n(53), STR.Tag.Helpers.VastVideoViewChooserHelper = function() {
    function e(e) {
      var t;
      this.adUnit = e, this.handleIMACallback = i(this.handleIMACallback, this), this.adUnit.creativeShouldInstantPlay() ? (t = this.createVastWrapper(), this.adUnit.$element.find(".thumbnail-wrapper").prepend(t), new STR.Tag.Helpers.ImaHelper(this.adUnit, t, this.handleIMACallback)) : new STR.Tag.Views.ClickToPlayVastPlayer(this.adUnit)
    }
    return e.prototype.handleIMACallback = function(e) {
      return new STR.Tag.Helpers.VastVideoViewDurationHelper(this.adUnit.tracker, e, "instant"), this.postResponseRender(this.adUnit, e)
    }, e.prototype.postResponseRender = function(e, t) {
      return "outstream" === this.adUnit.creative.action ? new STR.Tag.Views.OutstreamInstantPlayInPlaceVastPlayer(e, t) : new STR.Tag.Views.InstantPlayVastPlayer(e, t)
    }, e.prototype.createVastWrapper = function(e) {
      var t;
      return t = document.createElement("div"), t.className = "str-vast-wrapper", t.style.width = "100%", t.style.height = "100%", t.style.position = "absolute", t
    }, e
  }(), e.exports = STR.Tag.Helpers.VastVideoViewChooserHelper
}, function(e, t, n) {
  var i = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(0), n(1), STR.Tag.Helpers.VastVideoViewDurationHelper = function() {
    function e(e, t, n) {
      this.tracker = e, this.adsManager = t, this.vidType = n, this.checkVideoCompletion = i(this.checkVideoCompletion, this), this.handleResume = i(this.handleResume, this), this.handleStop = i(this.handleStop, this), this.handleStart = i(this.handleStart, this), this.handleImpression = i(this.handleImpression, this), this.sent3 = !1, this.sent10 = !1, this.sent15 = !1, this.sent30 = !1, this.adsManager.addEventListener(google.ima.AdEvent.Type.IMPRESSION, this.handleImpression), this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this.handleStart), this.adsManager.addEventListener(google.ima.AdEvent.Type.PAUSED, this.handleStop), this.adsManager.addEventListener(google.ima.AdEvent.Type.RESUMED, this.handleResume)
    }
    return e.prototype.VIDEO_COMPLETION_INTERVAL = 1e3, e.prototype.handleImpression = function() {
      return this.tracker.handleVideoStart(this.vidType)
    }, e.prototype.handleStart = function(e) {
      var t;
      return t = e.getAd(), this.adDuration = t.getDuration(), this.setVideoCompletionInterval()
    }, e.prototype.handleStop = function() {
      var e, t;
      return clearInterval(this.videoCompletionIntervalId), e = this.adDuration - this.adsManager.getRemainingTime(), t = 0 === this.adsManager.getVolume(), this.tracker.handleVideoViewDuration(1e3 * e, t), this.checkVideoCompletion()
    }, e.prototype.handleResume = function() {
      return this.setVideoCompletionInterval()
    }, e.prototype.setVideoCompletionInterval = function() {
      return this.videoCompletionIntervalId = setInterval(this.checkVideoCompletion, this.VIDEO_COMPLETION_INTERVAL)
    }, e.prototype.checkVideoCompletion = function() {
      var e, t;
      if (!((t = this.adDuration - this.adsManager.getRemainingTime()) < 0)) return e = t / this.adDuration * 100, this.tracker.trackCompletion(e), !this.sent3 && t >= 3 && (this.sent3 = !0, this.tracker.handleSilentAutoplayLength(3e3)), !this.sent10 && t >= 10 && (this.sent10 = !0, this.tracker.handleSilentAutoplayLength(1e4)), !this.sent15 && t >= 15 && (this.sent15 = !0, this.tracker.handleSilentAutoplayLength(15e3)), !this.sent30 && t >= 30 ? (this.sent30 = !0, this.tracker.handleSilentAutoplayLength(3e4)) : void 0
    }, e
  }(), e.exports = STR.Tag.Helpers.VastVideoViewDurationHelper
}, function(e, t, n) {
  var i, r, a, o, s, l;
  n(0), n(1), l = n(50), r = l.Audit, a = l.AuditTimer, s = n(17), o = n(109), i = STR.Vendor.$, STR.Tag.Helpers.VisibilityHelper = function() {
    function e(e, t, n, r, a, o) {
      this.creative = e, this.element = t, this.$element = i(t), this.placementKey = n, this.placement = r, this.tracker = a, this.placementIndex = o
    }
    return e.prototype.insertThirdPartyTags = function() {
      var e, t;
      return e = o.determineAdvertiser(this.creative, this.placement), this.insertMoatTag(this.$element, e, this.creative.campaign_key, this.creative.creative_key, this.creative.variant_key, this.creative.source_id, this.placement.placementAttributes.site_key, this.placementKey), t = this.determineJsTracker(this.$element), this.setupAppNexusJsTracker(this.$element, t), this.insertJsTracker(this.$element, t)
    }, e.prototype.insertMoatTag = function(e, t, n, i, r, a, o, s) {
      var l;
      return this.setupGlobalMoatFunctions(t, n, i, o, a, s), l = this.generateMoatTag(), e[0].appendChild(l)
    }, e.prototype.generateMoatTag = function() {
      var e, t;
      return e = document.createElement("script"), t = o.getMoatTagUrl(this.creative, this.placement, this.placementKey, this.placementIndex), e.src = t, e.type = "text/javascript", e.addEventListener("load", function(e) {
        return function() {
          var n;
          try {
            if (1 === (n = window.performance.getEntriesByName(t)[0].duration) || 0 === n) return;
            return e.tracker.trackEvent("moatLatency", {
              responseTime: n
            })
          } catch (e) {
            e
          }
        }
      }(this)), e
    }, e.prototype.insertJsTracker = function(e, t) {
      var n, i, r, a, o, s, l;
      if (this.trackersLoaded = {}, this.trackerSources = [], null != t) {
        for (n = 0, a = t.length; n < a; n++)
          for (r = t[n], s = this.createScriptTracker(r), i = 0, o = s.length; i < o; i++) l = s[i], l.src && (this.trackerSources.push(l.src), l.addEventListener("load", function(e) {
            return function() {
              return e.trackersLoaded[l.src] = !0
            }
          }(this))), e[0].appendChild(l);
        return this.monitorTrackerLoads()
      }
    }, e.prototype.createScriptTracker = function(e) {
      var t, n, i, r, a, o, s;
      if (e = e.replace(/<\\\/script>/, "<\/script>"), s = document.implementation.createHTMLDocument(""), s.body.innerHTML = e, o = [], 0 === s.body.children.length) r = document.createElement("script"), r.src = e, o.push(r);
      else
        for (i = s.body.children, t = 0, n = i.length; t < n; t++) a = i[t], "SCRIPT" === a.tagName && (r = document.createElement("script"), a.src.length > 0 ? r.src = a.src : r.innerHTML = a.innerHTML, o.push(r));
      return o
    }, e.prototype.monitorTrackerLoads = function() {
      return setTimeout(function(e) {
        return function() {
          var t;
          if (t = [], Object.keys(e.trackersLoaded).length !== e.trackerSources.length) return e.trackerSources.forEach(function(n) {
            if (!e.trackersLoaded[n]) return t.push(n)
          }), STR.Tag.Helpers.BeaconCannon.getInstance().fireBeacon(STR.Tag.TrackingHost, "butler", {
            type: "jsTrackerFailedToLoad",
            arid: e.creative.arid,
            sources: t.join(",")
          })
        }
      }(this), 4e3)
    }, e.prototype.determineJsTracker = function(e) {
      var t, n, i, r, a, o;
      if (i = void 0, this.creative.jsTracker) {
        if (i = [], "string" == typeof this.creative.jsTracker || this.creative.jsTracker instanceof String) try {
          this.creative.jsTracker = JSON.parse(this.creative.jsTracker)
        } catch (e) {
          t = e, t instanceof SyntaxError && (this.creative.jsTracker = [this.creative.jsTracker])
        }
        for (a = this.creative.jsTracker, n = 0, r = a.length; n < r; n++) o = a[n], i.push(this.replaceJsTrackerMacros(o, this.creative, this.placement, e))
      }
      return i
    }, e.prototype.replaceJsTrackerMacros = function(e, t, n, i) {
      var r, a;
      return r = e.replace(/\${CREATIVE_ID}/g, encodeURIComponent(t.creative_key)), r = r.replace(/\${REFERER_URL_ENC}/g, encodeURIComponent(this.getUrl())), r = r.replace(/{{Publisher}}/g, encodeURIComponent(n.placementAttributes.publisher_key)), r = r.replace(/{{Site}}/g, encodeURIComponent(n.placementAttributes.site_key)), r = r.replace(/{{Placement}}/g, encodeURIComponent(this.placementKey)), r = r.replace(/{{Campaign}}/g, encodeURIComponent(t.campaign_key)), r = r.replace(/{{Creative}}/g, encodeURIComponent(t.creative_key)), r = r.replace(/{{Variant}}/g, encodeURIComponent(t.variant_key)), r = r.replace(/{{Advertiser}}/g, encodeURIComponent(t.advertiser_key)), r = r.replace(/{{adTag}}/g, encodeURIComponent(i.prop("tagName"))), r = r.replace(/{{RenderTime}}/g, encodeURIComponent(i.data("str-rendered"))), a = "[data-str-rendered='" + i.data("str-rendered") + "']", r = r.replace(/{{AdSelector}}/g, encodeURIComponent(a).replace(/'/g, "%27"))
    }, e.prototype.isAppNexusJsTracker = function(e) {
      return e.match(/\/\/cdn\.adnxs\.com.*\/trk\.js/)
    }, e.prototype.setupAppNexusJsTracker = function(e, t) {
      if (t && t.some(this.isAppNexusJsTracker)) return t.forEach(function(e) {
        return function(t, n, i) {
          if (e.isAppNexusJsTracker(t)) return i[n] = t.replace("%native_dom_id%", "")
        }
      }(this)), e.addClass("anx_cr_loc")
    }, e.prototype.getUrl = function() {
      return window.location.href
    }, e.prototype.setupGlobalMoatFunctions = function(e, t, n, i, r, a) {
      return this.setupTimeInViewFunction(n, a), this.setupVisibleBeacons(n, a), this.setupVisibleEvents(n, a)
    }, e.prototype.setupVisibleBeacons = function(e, t) {
      var n, i, r, l, c;
      if (n = [], "live" === this.placement.status || ["demo-key", "preview-key"].indexOf(this.placementKey) >= 0)
        for (l = this.creative.beacons.visible, i = 0, r = l.length; i < r; i++) c = l[i], n.push(s.replaceCacheBusterParam(c));
      return window[o.thirdPartyGuid(e, t, this.placementIndex)] = function(e) {
        return function() {
          return a.retrieve("visible").stop(), n.unshift(e.generateVisibleBeacon()), n
        }
      }(this)
    }, e.prototype.setupVisibleEvents = function(e, t) {
      return window[o.isVisibleGuid(e, t, this.placementIndex)] = function(e) {
        return function(t) {
          return t ? e.$element.trigger("view:visible") : e.$element.trigger("view:notVisible")
        }
      }(this)
    }, e.prototype.setupTimeInViewFunction = function(e, t) {
      return window[o.timeInViewGuid(e, t, this.placementIndex)] = function(e) {
        return function(t) {
          if (e.shouldTrackTimeInView()) return e.tracker.trackEvent(STR.Tag.Helpers.BeaconCannon.timeInView, {
            duration: t
          })
        }
      }(this)
    }, e.prototype.shouldTrackTimeInView = function() {
      return Math.random() < .01
    }, e.prototype.generateVisibleBeacon = function() {
      var e, t;
      return t = {
        type: STR.Tag.Helpers.BeaconCannon.visible
      }, e = r.getTime("visible"), void 0 !== e && (t.benchmarkVisible = e.toString()), this.tracker.cannon.generateBeaconRequest(STR.Tag.TrackingHost, "butler", i.extend({}, this.tracker.defaultBeaconParams, t))
    }, e
  }(), e.exports = STR.Tag.Helpers.VisibilityHelper
}, function(e, t, n) {
  n(249), n(250), n(251), n(252)
}, function(e, t, n) {
  var i, r, a, o = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(13), r = n(69), a = n(68), i = STR.Vendor.$, STR.Tag.Views.ClickToPlayCollapsedHtml5Player = function() {
    function e(e) {
      this.adUnit = e, this.handleStop = o(this.handleStop, this), this.handlePlay = o(this.handlePlay, this), this.resizeVideo = o(this.resizeVideo, this), this.handleClick = o(this.handleClick, this), this.placeVideoInPostEngagementDisplay = o(this.placeVideoInPostEngagementDisplay, this), this.viewDurationHelper = new STR.Tag.Helpers.HostedVideoViewDurationHelper(this.adUnit.tracker), this.played = !1, this.hasCompleted = !1
    }
    return e.prototype.render = function() {
      return this.initializePostEngagementDisplay(), this.adUnit.$element.off("click").on("click", this.handleClick)
    }, e.prototype.initializePostEngagementDisplay = function() {
      return this.postEngagementDisplay = r.create({
        creative: this.adUnit.creative,
        tracker: this.adUnit.tracker,
        element: this.adUnit.element,
        guid: this.adUnit.guid,
        preExpanded: !1,
        oneClickPlay: !0,
        placementIndex: this.adUnit.placementIndex,
        placementKey: this.adUnit.placementKey
      }), this.postEngagementDisplay.beforeOpen(this.placeVideoInPostEngagementDisplay), this.postEngagementDisplay.onOpen(this.resizeVideo), this.postEngagementDisplay.onBeforeClose(this.handleStop), this.adUnit.$element.on("str-share-clicked", function(e) {
        return function() {
          return e.videoTag.pause()
        }
      }(this))
    }, e.prototype.placeVideoInPostEngagementDisplay = function() {
      var e;
      return e = i("#" + this.postEngagementDisplay.embedId), this.$cardVideo = STR.Tag.Helpers.HostedVideoRenderingHelper.swapVideoWithElement(e, this.postEngagementDisplay.width(), this.postEngagementDisplay.width() * this.adUnit.creative.video_aspect_ratio, this.adUnit.creative, !1), this.videoTag = this.$cardVideo[0], this.$cardVideo.on({
        playing: this.handlePlay,
        ended: this.handleStop
      }), e.closest(".str-embed-container").addClass("str-html5video-player"), a.safePlay(this.videoTag)
    }, e.prototype.handleClick = function(e) {
      if (!this.adUnit.handleClick(e)) return this.adUnit.tracker.handleClick(), e.preventDefault(), this.postEngagementDisplay.toggle()
    }, e.prototype.resizeVideo = function(e, t) {
      var n, i;
      return i = this.postEngagementDisplay.width(), n = i * this.adUnit.creative.video_aspect_ratio, this.$cardVideo.width(i).height(n)
    }, e.prototype.handlePlay = function() {
      return this.played || (this.adUnit.tracker.handleNonYoutubePlay(this.videoTag.duration), this.adUnit.tracker.handleVideoStart("clickToPlay"), this.played = !0), this.viewDurationHelper.setVideoCompletionInterval(this.videoTag)
    }, e.prototype.handleStop = function() {
      if (this.viewDurationHelper.handleStop(this.videoTag), !this.hasCompleted) return this.hasCompleted = !0
    }, e
  }()
}, function(e, t, n) {
  var i, r = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(13), i = n(68), STR.Vendor.$, STR.Tag.Views.ClickToPlayInPlaceHtml5Player = function() {
    function e(e) {
      this.adUnit = e, this.handleStop = r(this.handleStop, this), this.handlePlay = r(this.handlePlay, this), this.handleClick = r(this.handleClick, this), this.viewDurationHelper = new STR.Tag.Helpers.HostedVideoViewDurationHelper(this.adUnit.tracker), this.played = !1, this.hasCompleted = !1
    }
    return e.prototype.render = function() {
      return this.initializePostEngagementDisplay(), this.adUnit.$element.off("click").on("click", this.handleClick)
    }, e.prototype.initializePostEngagementDisplay = function() {
      return this.postEngagementDisplay = new STR.Tag.Views.VideoOverlay(this.adUnit.creative, this.adUnit.tracker, this.adUnit.element, this.adUnit.guid, !0, !0), this.postEngagementDisplay.onBeforeClose(this.handleStop), this.adUnit.$element.on("str-share-clicked", function(e) {
        return function() {
          return e.videoTag.pause()
        }
      }(this))
    }, e.prototype.handleClick = function(e) {
      var t;
      if (!this.adUnit.handleClick(e)) return STR.Tag.Helpers.SharingHelper.isSharingButton(e.target) || (null != (t = e.target.className) ? t.indexOf("str-html5video-player") : void 0) >= 0 ? void 0 : (this.adUnit.tracker.handleClick(), e.preventDefault(), this.postEngagementDisplay.toggle(), this.swapThumbnailWithVideo(), i.safePlay(this.videoTag))
    }, e.prototype.swapThumbnailWithVideo = function() {
      var e;
      return e = this.adUnit.$element.find(".str-thumbnail"), this.$videoElement = STR.Tag.Helpers.HostedVideoRenderingHelper.insertVideoAfter(e, e.outerWidth(), e.outerHeight(), this.adUnit.creative, !1), this.videoTag = this.$videoElement[0], this.$videoElement.on({
        playing: this.handlePlay,
        ended: this.handleStop
      }), this.adUnit.$element.find(".str-embed-container").remove(), this.adUnit.$element.find(".str-thumbnail").remove(), this.adUnit.$element.find(".icon-wrapper").hide()
    }, e.prototype.handlePlay = function() {
      return this.played || (this.adUnit.tracker.handleNonYoutubePlay(this.videoTag.duration), this.adUnit.tracker.handleVideoStart("clickToPlay"), this.played = !0), this.viewDurationHelper.setVideoCompletionInterval(this.videoTag)
    }, e.prototype.handleStop = function() {
      if (this.viewDurationHelper.handleStop(this.videoTag), !this.hasCompleted) return this.hasCompleted = !0
    }, e
  }()
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o);
  n(13);
  var l = n(69),
    c = n(46),
    u = n(68),
    d = STR.Vendor.$,
    p = function() {
      function e(t) {
        (0, a.default)(this, e), this.placeVideoInPostEngagementDisplay = this.placeVideoInPostEngagementDisplay.bind(this), this.resizeVideo = this.resizeVideo.bind(this), this.inViewCallback = this.inViewCallback.bind(this), this.shouldPauseOOV = this.shouldPauseOOV.bind(this), this.outOfViewCallback = this.outOfViewCallback.bind(this), this.handlePlay = this.handlePlay.bind(this), this.handleStop = this.handleStop.bind(this), this.setStartTime = this.setStartTime.bind(this), this.handleClose = this.handleClose.bind(this), this.handleInPlaceVideoClick = this.handleInPlaceVideoClick.bind(this), this.handleClick = this.handleClick.bind(this), this.adUnit = t, this.viewDurationHelper = new STR.Tag.Helpers.HostedVideoViewDurationHelper(this.adUnit.tracker), this.hasCompleted = !1, this.hasStarted = !1
      }
      return (0, s.default)(e, [{
        key: "render",
        value: function() {
          this.initializePostEngagementDisplay(), this.swapThumbnailWithVideo(), STR.Tag.Helpers.InViewHelper.registerElementForVisibilityCheck(this.adUnit.element.querySelector(".str-html5video-player"), .5, c.shouldPauseOutOfView(this.adUnit.creative.deal_id) ? c.OUT_OF_VIEW_PAUSE_THRESHOLD : .01, this.inViewCallback, this.outOfViewCallback), STR.Tag.Helpers.HostedVideoRenderingHelper.setThumbnailWrapperBackground(this.adUnit.$element), this.adUnit.$element.off("click").on("click", this.handleClick)
        }
      }, {
        key: "initializePostEngagementDisplay",
        value: function() {
          var e = this;
          this.postEngagementDisplay = l.create({
            creative: this.adUnit.creative,
            tracker: this.adUnit.tracker,
            element: this.adUnit.element,
            guid: this.adUnit.guid,
            preExpanded: !1,
            oneClickPlay: !0,
            placementIndex: this.adUnit.placementIndex,
            placementKey: this.adUnit.placementKey
          }), this.postEngagementDisplay.beforeOpen(this.placeVideoInPostEngagementDisplay), this.postEngagementDisplay.onOpen(this.resizeVideo), this.postEngagementDisplay.onBeforeClose(this.handleClose), this.adUnit.$element.on("str-share-clicked", function() {
            e.videoTag.pause()
          })
        }
      }, {
        key: "placeVideoInPostEngagementDisplay",
        value: function() {
          var e = d("#" + this.postEngagementDisplay.embedId);
          this.$cardVideoTag = STR.Tag.Helpers.HostedVideoRenderingHelper.insertVideoAfter(e, this.postEngagementDisplay.width(), this.postEngagementDisplay.width() * this.adUnit.creative.video_aspect_ratio, this.adUnit.creative, !1), this.videoTag = this.$cardVideoTag[0], u.safePlay(this.videoTag), this.$cardVideoTag.on({
            playing: this.handlePlay,
            "ended pause": this.handleStop,
            loadeddata: this.setStartTime
          }), e.closest(".str-embed-container").addClass("str-html5video-player")
        }
      }, {
        key: "resizeVideo",
        value: function() {
          var e = this.postEngagementDisplay.width(),
            t = e * this.adUnit.creative.video_aspect_ratio;
          this.$cardVideoTag.width(e).height(t)
        }
      }, {
        key: "inViewCallback",
        value: function() {
          this.hasStarted || (this.hasStarted = !0, this.adUnit.tracker.handleVideoStart("instant")), u.safePlay(this.inPlaceVideoTag)
        }
      }, {
        key: "shouldPauseOOV",
        value: function() {
          return "hosted-video" !== this.adUnit.creative.action || !c.shouldNotPauseOutOfView(this.adUnit.creative.deal_id)
        }
      }, {
        key: "outOfViewCallback",
        value: function() {
          this.shouldPauseOOV() && this.inPlaceVideoTag.pause(), this.adUnit.tracker.handleVideoViewDuration(1e3 * this.inPlaceVideoTag.currentTime, !0)
        }
      }, {
        key: "swapThumbnailWithVideo",
        value: function() {
          var e = this.adUnit.$element.find(".str-thumbnail");
          this.$inPlaceVideo = STR.Tag.Helpers.HostedVideoRenderingHelper.insertVideoAfter(e, e.outerWidth(), e.outerHeight(), this.adUnit.creative, !0), this.inPlaceVideoTag = this.$inPlaceVideo[0], this.inPlaceVideoTag.muted = !0, this.$inPlaceVideo.on({
            playing: this.handlePlay,
            ended: this.handleStop,
            click: this.handleInPlaceVideoClick
          }), this.adUnit.$element.find(".str-embed-container").remove(), this.oldThumbnail = this.adUnit.$element.find(".str-thumbnail").detach()
        }
      }, {
        key: "handlePlay",
        value: function(e) {
          var t = e.target;
          return this.viewDurationHelper.setVideoCompletionInterval(t)
        }
      }, {
        key: "handleStop",
        value: function(e) {
          var t = e.target;
          this.viewDurationHelper.handleStop(t), "ended" === e.type && (STR.Tag.Helpers.HostedVideoRenderingHelper.swapVideoWithThumbnail(this.$inPlaceVideo, this.oldThumbnail, this.adUnit.creative), this.adUnit.$element.off("view:visible view:notVisible"), this.inPlaceVideoTag.currentTime = 0, this.hasCompleted = !0)
        }
      }, {
        key: "setStartTime",
        value: function() {
          this.videoTag.currentTime = this.inPlaceVideoTag.currentTime
        }
      }, {
        key: "handleClose",
        value: function() {
          this.handleStop({
            target: this.videoTag,
            type: "closed"
          })
        }
      }, {
        key: "handleInPlaceVideoClick",
        value: function(e) {
          return this.handleClick(e), !1
        }
      }, {
        key: "handleClick",
        value: function(e) {
          if (!this.adUnit.handleClick(e)) {
            if (("VIDEO" === e.target.tagName || this.hasCompleted) && this.adUnit.creative.custom_engagement_url) return this.adUnit.tracker.handleShare("custom"), void window.open(this.adUnit.creative.custom_engagement_url, "_blank");
            if (c.shouldNotExpandVideo(this.adUnit.creative.deal_id)) {
              this.inPlaceVideoTag.muted = !this.inPlaceVideoTag.muted;
              var t = this.inPlaceVideoTag.muted ? STR.Tag.ClientJsUrl + "/assets/md-icon-volume-off.svg" : STR.Tag.ClientJsUrl + "/assets/md-icon-volume-up.svg",
                n = this.adUnit.element.querySelector(".icon-wrapper img");
              n && (n.src = t)
            } else this._expandVideo()
          }
        }
      }, {
        key: "playVideoPostEngagement",
        value: function() {
          this.adUnit.tracker.handleAutoplayVideoEngagement(1e3 * this.inPlaceVideoTag.currentTime), this.adUnit.tracker.handleNonYoutubePlay(1e3 * this.inPlaceVideoTag.currentTime), this.postEngagementDisplay.toggle(), this.inPlaceVideoTag.pause()
        }
      }, {
        key: "_expandVideo",
        value: function() {
          this.adUnit.$element.off("view:visible view:notVisible"), this.playVideoPostEngagement()
        }
      }]), e
    }();
  e.exports = STR.Tag.Views.InstantPlayCollapsedHtml5Player = p
}, function(e, t, n) {
  var i, r, a = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(13), i = n(46), r = n(68), STR.Vendor.$, STR.Tag.Views.InstantPlayInPlaceHtml5Player = function() {
    function e(e) {
      this.adUnit = e, this.handleClick = a(this.handleClick, this), this.handleStop = a(this.handleStop, this), this.handlePlay = a(this.handlePlay, this), this.outOfViewCallback = a(this.outOfViewCallback, this), this.shouldPauseOOV = a(this.shouldPauseOOV, this), this.inViewCallback = a(this.inViewCallback, this), this.viewDurationHelper = new STR.Tag.Helpers.HostedVideoViewDurationHelper(this.adUnit.tracker), this.hasCompleted = !1, this.hasStarted = !1
    }
    return e.prototype.render = function() {
      return this.initializePostEngagementDisplay(), this.swapThumbnailWithVideo(), STR.Tag.Helpers.InViewHelper.registerElementForVisibilityCheck(this.adUnit.element.querySelector(".str-html5video-player"), .5, i.shouldPauseOutOfView(this.adUnit.creative.deal_id) ? i.OUT_OF_VIEW_PAUSE_THRESHOLD : .01, this.inViewCallback, this.outOfViewCallback), STR.Tag.Helpers.HostedVideoRenderingHelper.setThumbnailWrapperBackground(this.adUnit.$element), this.adUnit.$element.off("click").on("click", this.handleClick)
    }, e.prototype.initializePostEngagementDisplay = function() {
      return this.postEngagementDisplay = new STR.Tag.Views.VideoOverlay(this.adUnit.creative, this.adUnit.tracker, this.adUnit.element, this.adUnit.guid, !0, !0), this.postEngagementDisplay.onBeforeClose(this.handleStop), this.adUnit.$element.on("str-share-clicked", function(e) {
        return function() {
          return e.videoTag.pause()
        }
      }(this))
    }, e.prototype.inViewCallback = function() {
      return this.hasStarted || (this.hasStarted = !0, this.adUnit.tracker.handleVideoStart("instant")), r.safePlay(this.videoTag)
    }, e.prototype.shouldPauseOOV = function() {
      return "hosted-video" !== this.adUnit.creative.action || !i.shouldNotPauseOutOfView(this.adUnit.creative.deal_id)
    }, e.prototype.outOfViewCallback = function() {
      return this.shouldPauseOOV() && this.videoTag.pause(), this.adUnit.tracker.handleVideoViewDuration(1e3 * this.videoTag.currentTime, !0)
    }, e.prototype.swapThumbnailWithVideo = function() {
      var e;
      return e = this.adUnit.$element.find(".str-thumbnail"), this.$videoElement = STR.Tag.Helpers.HostedVideoRenderingHelper.insertVideoAfter(e, e.outerWidth(), e.outerHeight(), this.adUnit.creative, !0), this.videoTag = this.$videoElement[0], this.videoTag.muted = !0, this.$videoElement.on({
        playing: this.handlePlay,
        ended: this.handleStop,
        click: this.handleClick
      }), this.adUnit.$element.find(".str-embed-container").remove(), this.$oldThumbnail = this.adUnit.$element.find(".str-thumbnail").detach()
    }, e.prototype.handlePlay = function() {
      return this.viewDurationHelper.setVideoCompletionInterval(this.videoTag)
    }, e.prototype.handleStop = function() {
      return this.viewDurationHelper.handleStop(this.videoTag), STR.Tag.Helpers.HostedVideoRenderingHelper.swapVideoWithThumbnail(this.$videoElement, this.$oldThumbnail, this.adUnit.creative), this.adUnit.$element.off("view:visible view:notVisible"), this.videoTag.currentTime = 0, this.hasCompleted = !0
    }, e.prototype.handleClick = function(e) {
      if (!this.adUnit.handleClick(e)) return this.hasCompleted ? this.adUnit.creative.custom_engagement_url ? (this.adUnit.tracker.handleShare("custom"), window.open(this.adUnit.creative.custom_engagement_url, "_blank"), !1) : (this.$oldThumbnail.replaceWith(this.$videoElement), r.safePlay(this.videoTag), this.playVideoPostEngagement()) : (this.adUnit.$element.off("view:visible view:notVisible"), this.playVideoPostEngagement())
    }, e.prototype.playVideoPostEngagement = function() {
      return this.adUnit.tracker.handleAutoplayVideoEngagement(1e3 * this.videoTag.currentTime), this.adUnit.tracker.handleNonYoutubePlay(1e3 * this.videoTag.currentTime), this.videoTag.controls = !0, this.videoTag.muted = !1, this.adUnit.$element.find(".icon-wrapper").hide(), this.postEngagementDisplay.$overlay.fadeIn()
    }, e
  }()
}, function(e, t, n) {
  n(254), n(255), n(257)
}, function(e, t, n) {
  var i, r = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(13), i = n(69), STR.Tag.Views.ClickToPlayVastPlayer = function() {
    function e(e) {
      this.adUnit = e, this.resizeAndPlayVideo = r(this.resizeAndPlayVideo, this), this.handleClick = r(this.handleClick, this), this.handleCardOpen = r(this.handleCardOpen, this), this.handleStart = r(this.handleStart, this), this.handleIMACallback = r(this.handleIMACallback, this), this.initIMA = r(this.initIMA, this), this.cardOpened = !1, this.initializePostEngagementDisplay(), this.adUnit.$element.off("click").on("click", this.handleClick)
    }
    return e.prototype.initializePostEngagementDisplay = function() {
      return this.postEngagementDisplay = i.create({
        creative: this.adUnit.creative,
        tracker: this.adUnit.tracker,
        element: this.adUnit.element,
        guid: this.adUnit.guid,
        preExpanded: !1,
        oneClickPlay: !0,
        placementIndex: this.adUnit.placementIndex,
        placementKey: this.adUnit.placementKey
      }), this.postEngagementDisplay.beforeOpen(this.initIMA), this.postEngagementDisplay.onOpen(this.handleCardOpen)
    }, e.prototype.initIMA = function() {
      var e;
      return e = document.querySelector("#" + this.postEngagementDisplay.embedId), new STR.Tag.Helpers.ImaHelper(this.adUnit, e, this.handleIMACallback)
    }, e.prototype.handleIMACallback = function(e) {
      return this.adsManager = e, this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this.handleStart), new STR.Tag.Helpers.VastVideoViewDurationHelper(this.adUnit.tracker, e, "clickToPlay"), this.resizeAndPlayVideo()
    }, e.prototype.handleStart = function(e) {
      var t, n;
      return t = e.getAd(), n = t.getDuration(), this.adUnit.tracker.handleNonYoutubePlay(n)
    }, e.prototype.handleCardOpen = function() {
      return this.cardOpened = !0, this.resizeAndPlayVideo()
    }, e.prototype.handleClick = function(e) {
      if (!this.adUnit.handleClick(e)) return this.adUnit.tracker.handleClick(), e.preventDefault(), this.postEngagementDisplay.toggle()
    }, e.prototype.resizeAndPlayVideo = function() {
      var e, t;
      if (this.cardOpened && this.adsManager) return t = this.postEngagementDisplay.width(), e = t * this.adUnit.creative.video_aspect_ratio, this.adsManager.resize(t, e, google.ima.ViewMode.NORMAL), this.adsManager.setVolume(1), this.adsManager.start()
    }, e
  }()
}, function(e, t, n) {
  var i, r, a = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(13), i = n(46), n(70), r = n(146), STR.Tag.Views.InstantPlayVastPlayer = function() {
    function e(e, t) {
      this.adUnit = e, this.adsManager = t, this.handleClick = a(this.handleClick, this), this.handleStop = a(this.handleStop, this), this.handleStart = a(this.handleStart, this), this.outOfViewCallback = a(this.outOfViewCallback, this), this.shouldPauseOOV = a(this.shouldPauseOOV, this), this.isOutstreamCreative = a(this.isOutstreamCreative, this), this.inViewCallback = a(this.inViewCallback, this), this.toggleExpansionClick = a(this.toggleExpansionClick, this), this.hasCompleted = !1, this.hasStarted = !1, this.$playerWrapper = this.adUnit.$element.find(".str-vast-wrapper"), this.$iconWrapper = this.adUnit.$element.find(".icon-wrapper"), STR.Tag.Helpers.HostedVideoRenderingHelper.setThumbnailWrapperBackground(this.adUnit.$element), STR.Tag.Helpers.InViewHelper.registerElementForVisibilityCheck(this.adUnit.getThumbnailElement()[0], .5, i.shouldPauseOutOfView(this.adUnit.creative.deal_id) ? i.OUT_OF_VIEW_PAUSE_THRESHOLD : .01, this.inViewCallback, this.outOfViewCallback), this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this.handleStart), this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.handleStop), this.imaExpansionHelper = new r(this.$playerWrapper, this.adsManager, this.$iconWrapper), this.setupExpansionClickListener()
    }
    return e.prototype.setupExpansionClickListener = function() {
      return this.adUnit.tracker.trackEvent("loadVastClickoutUnit"), this.adUnit.$element.off("click").on("click", this.handleClick)
    }, e.prototype.toggleExpansionClick = function(e) {
      return e.stopPropagation(), this.trackVideoEngagement(), this.imaExpansionHelper.toggleFullScreen()
    }, e.prototype.inViewCallback = function() {
      return this.hasStarted ? this.adsManager.resume() : (this.hasStarted = !0, void this.adsManager.start())
    }, e.prototype.isOutstreamCreative = function() {
      return "native-outstream" === this.adUnit.creative.action
    }, e.prototype.shouldPauseOOV = function() {
      return ("hosted-video" !== this.adUnit.creative.action || !i.shouldNotPauseOutOfView(this.adUnit.creative.deal_id)) && (!this.isOutstreamCreative() || !!i.shouldPauseOutOfView(this.adUnit.creative.deal_id))
    }, e.prototype.outOfViewCallback = function() {
      if (this.shouldPauseOOV()) return this.adsManager.pause()
    }, e.prototype.handleStart = function(e) {
      var t;
      return this.adsManager.getVolume() > 0 && this.adsManager.setVolume(0), t = e.getAd(), this.adDuration = t.getDuration()
    }, e.prototype.handleStop = function() {
      if (this.hasCompleted = !0, this.imaExpansionHelper.fullScreen) return this.imaExpansionHelper.toggleFullScreen()
    }, e.prototype.handleClick = function(e) {
      var t;
      if (!this.adUnit.handleClick(e)) {
        if (this.hasCompleted) return void(this.adUnit.creative.custom_engagement_url && (this.adUnit.tracker.handleShare("custom"), window.open(this.adUnit.creative.custom_engagement_url, "_blank")));
        if ("IFRAME" === e.target.tagName) return void this.adUnit.tracker.handleShare("custom");
        if (!i.shouldNotExpandVideo(this.adUnit.creative.deal_id)) return this.trackVideoEngagement(), this.imaExpansionHelper.toggleFullScreen();
        if (t = this.adUnit.element.querySelector(".icon-wrapper img"), this.adsManager.getVolume() > 0) {
          if (this.adsManager.setVolume(0), t) return t.src = STR.Tag.ClientJsUrl + "/assets/md-icon-volume-off.svg"
        } else if (this.adsManager.setVolume(1), t) return t.src = STR.Tag.ClientJsUrl + "/assets/md-icon-volume-up.svg"
      }
    }, e.prototype.trackVideoEngagement = function() {
      var e, t;
      return t = this.adsManager.getRemainingTime(), e = this.adDuration - t, this.adUnit.tracker.handleAutoplayVideoEngagement(1e3 * e), this.adUnit.tracker.handleNonYoutubePlay(1e3 * e)
    }, e
  }()
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(48),
    a = i(r),
    o = n(3),
    s = i(o),
    l = n(4),
    c = i(l),
    u = function() {
      function e(t) {
        var n = t.onInit,
          i = t.onEnterFullScreen,
          r = t.onExitFullScreen;
        (0, s.default)(this, e), this.externalSource = null, this.externalOrigin = null, this.onInit = n, this.onEnterFullScreen = i, this.onExitFullScreen = r
      }
      return (0, c.default)(e, [{
        key: "listenTo",
        value: function(e) {
          var t = this,
            n = function(e) {
              var n = void 0;
              try {
                n = JSON.parse(e.data)
              } catch (e) {
                return
              }
              if ("Innovid_Sharethrough_Custom_Event" === n.eventName) switch (n.eventValue) {
                case "Innovid_creative_Ready":
                  return t.externalSource = e.source, t.externalOrigin = e.origin, void t.onInit();
                case "Open_Interactive":
                  return t.onEnterFullScreen();
                case "Close_Interactive":
                  return t.onExitFullScreen()
              }
            };
          e.addEventListener("message", n)
        }
      }, {
        key: "requestClose",
        value: function() {
          this.externalOrigin && this.externalSource && this.externalSource.postMessage((0, a.default)({
            eventName: "Innovid_Sharethrough_Custom_Event",
            eventValue: "Close_Interactive"
          }), this.externalOrigin)
        }
      }]), e
    }();
  e.exports = u
}, function(e, t, n) {
  var i, r, a = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(13), i = n(46), r = n(146), n(70), STR.Tag.Views.OutstreamInstantPlayInPlaceVastPlayer = function() {
    function e(e, t) {
      this.adUnit = e, this.adsManager = t, this.handleStop = a(this.handleStop, this), this.handleStart = a(this.handleStart, this), this.outOfViewCallback = a(this.outOfViewCallback, this), this.inViewCallback = a(this.inViewCallback, this), this.toggleExpansionClick = a(this.toggleExpansionClick, this), this.handleAdUnitClick = a(this.handleAdUnitClick, this), this.hasStarted = !1, STR.Tag.Helpers.HostedVideoRenderingHelper.setThumbnailWrapperBackground(this.adUnit.$element), this.initializeInPlaceSoundToggle(), STR.Tag.Helpers.InViewHelper.registerElementForVisibilityCheck(this.adUnit.getThumbnailElement()[0], .5, i.shouldPauseOutOfView(this.adUnit.creative.deal_id) ? i.OUT_OF_VIEW_PAUSE_THRESHOLD : .01, this.inViewCallback, this.outOfViewCallback), this.adsManager.addEventListener(google.ima.AdEvent.Type.STARTED, this.handleStart), this.adsManager.addEventListener(google.ima.AdEvent.Type.COMPLETE, this.handleStop)
    }
    return e.prototype.initializeInPlaceSoundToggle = function() {
      var e, t;
      return e = this.adUnit.$element.find(".icon-wrapper"), this.$iconImg = e.find("img"), t = this.adUnit.$element.find(".str-vast-wrapper"), this.imaExpansionHelper = new r(t, this.adsManager, e), this.setupExpansionClickListener(e), this.adUnit.$element.off("click").on("click", this.handleAdUnitClick), this.adUnit.tracker.trackEvent("loadVastClickoutUnit")
    }, e.prototype.setupExpansionClickListener = function(e) {
      return e.on("click", this.toggleExpansionClick)
    }, e.prototype.handleAdUnitClick = function(e) {
      return "IFRAME" === e.target.tagName ? this.adUnit.tracker.handleShare("custom") : (this.trackVideoEngagement(), this.imaExpansionHelper.toggleFullScreen())
    }, e.prototype.toggleExpansionClick = function(e) {
      return e.stopPropagation(), this.trackVideoEngagement(), this.imaExpansionHelper.toggleFullScreen()
    }, e.prototype.inViewCallback = function() {
      return this.hasStarted ? this.adsManager.resume() : (this.hasStarted = !0, void this.adsManager.start())
    }, e.prototype.outOfViewCallback = function() {
      if (i.shouldPauseOutOfView(this.adUnit.creative.deal_id)) return this.adsManager.pause()
    }, e.prototype.handleStart = function(e) {
      var t;
      return t = e.getAd(), this.adDuration = t.getDuration()
    }, e.prototype.handleStop = function() {
      return this.adUnit.$element.hide(600)
    }, e.prototype.trackVideoEngagement = function() {
      var e, t;
      return t = this.adsManager.getRemainingTime(), e = this.adDuration - t, this.adUnit.tracker.handleAutoplayVideoEngagement(1e3 * e), this.adUnit.tracker.handleNonYoutubePlay(1e3 * e)
    }, e
  }()
}, function(e, t, n) {
  var i, r, a = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    o = function(e, t) {
      function n() {
        this.constructor = e
      }
      for (var i in t) s.call(t, i) && (e[i] = t[i]);
      return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    },
    s = {}.hasOwnProperty;
  r = n(69), i = STR.Vendor.$, STR.Tag.Views.Article = function(e) {
    function t(e, n, i, r) {
      this.trackDuration = a(this.trackDuration, this), this.placeArticleContentInPostEngagementDisplay = a(this.placeArticleContentInPostEngagementDisplay, this), this.onCloseCallbacks = a(this.onCloseCallbacks, this), this.onOpenCallbacks = a(this.onOpenCallbacks, this), t.__super__.constructor.apply(this, arguments)
    }
    return o(t, e), t.prototype.render = function() {
      return t.__super__.render.apply(this, arguments), this.initializePostEngagementDisplay()
    }, t.prototype.initializePostEngagementDisplay = function() {
      return this.postEngagementDisplay = r.create({
        creative: this.creative,
        tracker: this.tracker,
        element: this.element,
        guid: this.guid,
        preExpanded: !1,
        oneClickPlay: !0,
        placementIndex: this.placementIndex,
        placementKey: this.placementKey
      }), this.postEngagementDisplay.onOpen(this.onOpenCallbacks), this.postEngagementDisplay.onClose(this.onCloseCallbacks), this.addWindowVisibilityListener()
    }, t.prototype.onOpenCallbacks = function() {
      return this.placeArticleContentInPostEngagementDisplay(), this.registerDeviceOrientationListener(), this.registerDeviceMotionListener()
    }, t.prototype.onCloseCallbacks = function() {
      if (this.trackDuration(), this.deviceOrientationHandler && window.removeEventListener("deviceorientation", this.deviceOrientationHandler), this.deviceOrientationMessageHandler && window.removeEventListener("message", this.deviceOrientationMessageHandler), this.deviceMotionHandler && window.removeEventListener("devicemotion", this.deviceMotionHandler), this.deviceMotionMessageHandler) return window.removeEventListener("message", this.deviceMotionMessageHandler)
    }, t.prototype.placeArticleContentInPostEngagementDisplay = function() {
      var e, t;
      return e = i("#" + this.postEngagementDisplay.embedId), t = e.closest(".str-embed-container"), t.addClass("str-article-content"), this.insertArticleContentAfter(e, this.postEngagementDisplay.width(), this.postEngagementDisplay.contentHeight()), STR.Tag.Helpers.BrowserHelper.isiOS() && this.adjustEmbedContainer(t, this.postEngagementDisplay.contentHeight()), this.articleStartInViewTime = new Date, this.totalTimeInArticleView = 0, this.tracker.handleArticleView()
    }, t.prototype.trackDuration = function() {
      var e;
      return e = new Date, this.totalTimeInArticleView = this.totalTimeInArticleView + (e - this.articleStartInViewTime), this.tracker.handleArticleViewDuration(this.totalTimeInArticleView)
    }, t.prototype.handleClick = function(e) {
      if (!t.__super__.handleClick.apply(this, arguments)) return this.tracker.handleClick(), e.preventDefault(), this.postEngagementDisplay.open()
    }, t.prototype.insertArticleContentAfter = function(e, t, n) {
      var r;
      return r = i("<iframe>", {
        src: this.iframeSrc(),
        height: "" + n,
        width: "" + t,
        frameborder: "0"
      }), e.after(r), this.injectIframeCss(r)
    }, t.prototype.iframeSrc = function() {
      var e;
      return e = "" + this.creative.media_url, this.creative.media_url.indexOf("?") > -1 ? e += "&" : e += "?", e += "referrer=" + encodeURIComponent(this.windowOrigin()) + "&pkey=" + this.placementKey + "&layout=" + this.placement.layout + "&status=" + this.placement.status + "&utm_source=" + encodeURIComponent(this.windowOrigin()) + "&utm_medium=vcpm&utm_campaign=" + this.creative.campaign_key
    }, t.prototype.injectIframeCss = function(e) {
      var t;
      if (this.placement.placementAttributes.customCardCss) return t = {
        type: "customCardCss",
        content: this.placement.placementAttributes.customCardCss
      }, e.load(function(n) {
        return function() {
          return e[0].contentWindow.postMessage(t, "*")
        }
      }())
    }, t.prototype.adjustEmbedContainer = function(e, t) {
      return e.css({
        height: t,
        overflow: "auto",
        "-webkit-overflow-scrolling": "touch"
      })
    }, t.prototype.windowOrigin = function() {
      return window.location.origin
    }, t.prototype.addWindowVisibilityListener = function() {
      var e, t, n;
      return t = this.determineHiddenAndVisibilityListener(), e = t[0], n = t[1], window.addEventListener(n, function(t) {
        return function() {
          return t.visibilityChangeCallbacks(e)
        }
      }(this))
    }, t.prototype.visibilityChangeCallbacks = function(e) {
      var t;
      return document[e] ? (t = new Date, this.totalTimeInArticleView = this.totalTimeInArticleView + (t - this.articleStartInViewTime)) : this.articleStartInViewTime = new Date
    }, t.prototype.determineHiddenAndVisibilityListener = function() {
      var e, t;
      return e = void 0, t = void 0, void 0 !== document.hidden ? (e = "hidden", t = "visibilitychange") : void 0 !== document.msHidden ? (e = "msHidden", t = "msvisibilitychange") : void 0 !== document.webkitHidden && (e = "webkitHidden", t = "webkitvisibilitychange"), [e, t]
    }, t.prototype.registerDeviceOrientationListener = function() {
      var e;
      return e = i(".str-embed-container iframe")[0].contentWindow, window.DeviceOrientationEvent && self === top ? (this.deviceOrientationHandler = function(t) {
        var n;
        return n = {
          type: "deviceorientation",
          deviceOrientationEvent: {
            alpha: t.alpha,
            beta: t.beta,
            gamma: t.gamma,
            timeStamp: t.timeStamp
          }
        }, e.postMessage(n, "*")
      }, window.addEventListener("deviceorientation", this.deviceOrientationHandler)) : (this.deviceOrientationMessageHandler = function(t) {
        if (t.data.type && "deviceorientation" === t.data.type) return e.postMessage(t.data, "*")
      }, window.addEventListener("message", this.deviceOrientationMessageHandler))
    }, t.prototype.registerDeviceMotionListener = function() {
      var e;
      return e = i(".str-embed-container iframe")[0].contentWindow, window.DeviceMotionEvent && self === top ? (this.deviceMotionHandler = function(t) {
        var n;
        return n = {
          type: "devicemotion",
          deviceMotionEvent: {
            acceleration: {
              x: t.acceleration.x,
              y: t.acceleration.y,
              z: t.acceleration.z
            },
            accelerationIncludingGravity: {
              x: t.accelerationIncludingGravity.x,
              y: t.accelerationIncludingGravity.y,
              z: t.accelerationIncludingGravity.z
            },
            rotationRate: {
              alpha: t.rotationRate.alpha,
              beta: t.rotationRate.beta,
              gamma: t.rotationRate.gamma
            },
            interval: t.interval,
            timeStamp: t.timeStamp
          }
        }, e.postMessage(n, "*")
      }, window.addEventListener("devicemotion", this.deviceMotionHandler)) : (this.deviceMotionMessageHandler = function(t) {
        if (t.data.type && "devicemotion" === t.data.type) return e.postMessage(t.data, "*")
      }, window.addEventListener("message", this.deviceMotionMessageHandler))
    }, t
  }(STR.Tag.Views.AdUnit)
}, function(e, t, n) {
  var i, r, a = function(e, t) {
      function n() {
        this.constructor = e
      }
      for (var i in t) o.call(t, i) && (e[i] = t[i]);
      return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    },
    o = {}.hasOwnProperty;
  n(13), i = STR.Vendor.$, r = n(17), STR.Tag.Views.FeaturedContent = function(e) {
    function t(e, n, i, r) {
      t.__super__.constructor.apply(this, arguments)
    }
    return a(t, e), t.prototype.render = function() {
      return t.__super__.render.apply(this, arguments), this.redirectUrl = this.generateRedirectUrl(), this.$element.addClass("str-featured-content")
    }, t.prototype.placeOptOut = function() {}, t.prototype.handleClick = function(e) {
      return window.open(this.redirectUrl, "_blank")
    }, t.prototype.generateRedirectUrl = function() {
      return STR.Tag.ClickoutHost + "/?clickout_url=" + this.clickoutUrl() + "&tracking_url=" + this.trackingUrl()
    }, t.prototype.clickoutUrl = function() {
      return encodeURIComponent(this.creative.media_url)
    }, t.prototype.trackingUrl = function() {
      var e, t, n, a;
      return e = i.extend({}, this.tracker.defaultBeaconParams), e.umtime = (new Date).getTime(), e.engagement = !0, e.userEvent = "clickout", e.type = "userEvent", e.uid = "", e.featuredContent = !0, e.mrid = STR.Tag.Helpers.MediationHelper.getMrId(this.placementKey, this.placementIndex), n = function() {
        var n;
        n = [];
        for (t in e) a = e[t], n.push(t + "=" + a);
        return n
      }(), encodeURIComponent("" + r.getValidLocationProtocol() + STR.Tag.TrackingHost + "/butler?" + n.join("&"))
    }, t
  }(STR.Tag.Views.AdUnit)
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(45),
    a = i(r),
    o = n(3),
    s = i(o),
    l = n(4),
    c = i(l),
    u = n(54),
    d = i(u),
    p = n(55),
    h = i(p),
    f = n(56),
    m = i(f);
  n(13);
  var g = n(261),
    v = (n(22), function(e) {
      function t(e, n, i, r) {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, a.default)(t)).apply(this, arguments))
      }
      return (0, m.default)(t, e), (0, c.default)(t, [{
        key: "render",
        value: function() {
          (0, h.default)(t.prototype.__proto__ || (0, a.default)(t.prototype), "render", this).apply(this, arguments), new g({
            imageElement: this.element.querySelector(".str-thumbnail"),
            imageUrl: this.creative.thumbnail_url,
            scrollDirection: this.creative.scroll_direction
          }).setup()
        }
      }]), t
    }(STR.Tag.Views.Clickout));
  e.exports = STR.Tag.Views.ScrollerAdUnit = v
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o),
    l = function() {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, a.default)(this, e);
        var n = t.imageElement,
          i = t.imageUrl,
          r = t.document,
          o = t.scrollDirection;
        if (!n) throw new Error("options.imageElement is required");
        if (!i) throw new Error("options.imageUrl is required");
        this.document = r || document, this.imageUrl = i, this.scrollDirection = o, this.imageElement = n
      }
      return (0, s.default)(e, [{
        key: "setup",
        value: function() {
          var e = this;
          this.document.removeEventListener("scroll", function() {
            return e.updatePosition()
          }), this.document.addEventListener("scroll", function() {
            return e.updatePosition()
          });
          var t = new Image;
          t.onload = function() {
            e.wiggleRoom = e.calculateWiggleRoom(t.width, t.height), e.updatePosition()
          }, t.src = this.imageUrl
        }
      }, {
        key: "calculateWiggleRoom",
        value: function(e, t) {
          return this.imageElement.clientWidth / e * t - this.imageElement.clientHeight
        }
      }, {
        key: "calculateScrollableDistance",
        value: function() {
          return this.document.documentElement.clientHeight - this.imageElement.clientHeight
        }
      }, {
        key: "imageIsFullyInView",
        value: function() {
          var e = this.imageElement.getBoundingClientRect().bottom <= this.document.documentElement.clientHeight,
            t = this.imageElement.getBoundingClientRect().top >= 0;
          return e && t
        }
      }, {
        key: "calculateMovePercent",
        value: function() {
          return this.wiggleRoom / this.calculateScrollableDistance()
        }
      }, {
        key: "calculateScrollAmount",
        value: function() {
          var e = this.imageElement.getBoundingClientRect().top,
            t = this.calculateMovePercent();
          if ("top_to_bottom" === this.scrollDirection) {
            var n = e - this.calculateScrollableDistance();
            return Math.round(n * t)
          }
          var i = -1 * e;
          return Math.round(i * t)
        }
      }, {
        key: "updatePosition",
        value: function() {
          this.imageIsFullyInView() && (this.imageElement.style.backgroundPosition = "0px " + this.calculateScrollAmount() + "px")
        }
      }]), e
    }();
  e.exports = l
}, function(e, t, n) {
  var i, r;
  n(13), i = STR.Vendor.$, r = n(17), STR.Tag.Views.ThirdPartyPartner = function() {
    function e(e, t, n, r, a) {
      this.element = e, this.$element = i(this.element), this.placementKey = t, this.thirdPartyKey = n, this.thirdPartyTag = r, this.domPlacementIndex = a, this.thirdPartyKey.match(/preview/) || STR.Tag.Models.MediationTracker.fireNetworkImpressionRequest(this.placementKey, this.thirdPartyKey, this.domPlacementIndex), STR.Tag.Helpers.HtmlUtility.previewMediation() && console.log("Impression request for third party partner")
    }
    return e.prototype.render = function() {
      var e, t, n;
      return t = this.getRandom(), n = this.thirdPartyTag.replace(/{{random}}/g, t), e = i(n), this.determineTagToInsert(e)
    }, e.prototype.determineTagToInsert = function(e) {
      var t, n, i, r;
      return t = e.hasClass("use-iframe") ? e : e.find(".use-iframe"), t.length > 0 ? (r = t.data("width"), n = t.data("height"), i = t.data("url"), r.toString().match(/%$/) ? this.insertDynamicIFrame(this.$element, i, r, n) : this.insertFixedIFrame(this.$element, i, r, n)) : this.insertNonIFrame(this.$element, e)
    }, e.prototype.insertFixedIFrame = function(e, t, n, r) {
      var a, o;
      return o = this.getThirdPartyTagWrapper(), a = i("<iframe src='" + t + "' frameborder='0' width='" + n + "' height='" + r + "' id='str-third-party-mediation-key-" + this.placementKey + "' name='str-third-party-mediation-key-" + this.placementKey + "'>"), this.insertThirdPartyTag(e, o, a)
    }, e.prototype.insertDynamicIFrame = function(e, t, n, a) {
      var o, s, l;
      return s = this.getThirdPartyTagWrapper(), s.css({
        width: n,
        height: a,
        margin: "0 auto"
      }), s.insertAfter(e), l = s.height() / s.width(), o = i("<div style='position:relative;height:0;padding-bottom:" + 100 * l + "%'> <iframe src='" + t + "' frameborder='0' style='position:absolute;top:0;left:0;width:100%;height:100%;'></iframe> </div> </div>"), r.isSite(/skysports.com/) && o.find("iframe").attr("scrolling", "no"), s.append(o), e.remove()
    }, e.prototype.insertNonIFrame = function(e, t) {
      var n;
      return n = this.getThirdPartyTagWrapper(), this.insertThirdPartyTag(e, n, t)
    }, e.prototype.getRandom = function() {
      return Date.now()
    }, e.prototype.getThirdPartyTagWrapper = function() {
      return i("<div/>", {
        "data-str-third-party-source": this.thirdPartyKey,
        "data-str-mediation-key": this.placementKey,
        "data-str-placement-index": this.domPlacementIndex
      })
    }, e.prototype.insertThirdPartyTag = function(e, t, n) {
      var r;
      i.ajaxSetup({
        cache: !0
      });
      try {
        t.append(n), t.insertAfter(e)
      } catch (e) {
        r = e, console.error(r)
      }
      return e.remove(), i.ajaxSetup({
        cache: !1
      })
    }, e
  }()
}, function(e, t, n) {
  var i;
  n(13), i = STR.Vendor.$, STR.Tag.Views.VideoOverlay = function() {
    function e(e, t, n, i, r, a) {
      null == r && (r = !1), null == a && (a = !1), this.creative = e, this.tracker = t, this.overlayId = "str-overlay-" + i, this.embedId = "str-embed-" + i, this.insertIntoDOM(n), this.hasOpened = r, this.postEngagementDisplayOpen = !1, this.preExpandedAtStart = r
    }
    return e.prototype.insertIntoDOM = function(e) {
      var t;
      return this.$overlay = i("<div>", {
        id: this.overlayId,
        class: "str-overlay"
      }), t = STR.Tag.Helpers.SharingHelper.createCardSharing(this.creative, this.tracker, this.$overlay, i(e)), this.$overlay.append(t), this.addStyle(), i(e).find(".thumbnail-wrapper").prepend(this.$overlay)
    }, e.prototype.addStyle = function() {
      var e;
      return e = i("<style>", {
        html: STR.Tag.Helpers.StyleHelper.cardStyle(this.overlayId)
      }), this.$overlay.append(e)
    }, e.prototype.toggle = function() {
      return this.postEngagementDisplayOpen ? this.close() : this.open()
    }, e.prototype.onOpen = function(e) {
      if (this.onOpenCallback = e, this.hasOpened) return this.onOpenCallback()
    }, e.prototype.open = function() {
      if (!this.postEngagementDisplayOpen && (this.$overlay.fadeIn(), this.postEngagementDisplayOpen = !0, null != this.onOpenCallback)) return this.onOpenCallback()
    }, e.prototype.onClose = function(e) {
      return this.onCloseCallback = e
    }, e.prototype.onBeforeClose = function(e) {
      return this.onBeforeCloseCallback = e
    }, e.prototype.close = function() {
      if (null != this.onBeforeCloseCallback && this.onBeforeCloseCallback(), this.$overlay.fadeOut(), this.postEngagementDisplayOpen = !1, null != this.onCloseCallback) return this.onCloseCallback()
    }, e
  }()
}, function(e, t, n) {
  var i, r = function(e, t) {
      return function() {
        return e.apply(t, arguments)
      }
    },
    a = function(e, t) {
      function n() {
        this.constructor = e
      }
      for (var i in t) o.call(t, i) && (e[i] = t[i]);
      return n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype, e
    },
    o = {}.hasOwnProperty;
  n(13), n(147), i = STR.Vendor.$, STR.Tag.Views.Youtube = function(e) {
    function t(e, n, i, a) {
      this.handleClose = r(this.handleClose, this), this.handleStateChange = r(this.handleStateChange, this), this.handleReady = r(this.handleReady, this), this.combine = r(this.combine, this), t.__super__.constructor.apply(this, arguments), this.played = !1, this.youtubeId = this.extractYoutubeId(this.creative.media_url)
    }
    return a(t, e), t.prototype.render = function() {
      return t.__super__.render.apply(this, arguments), this.initializePostEngagementDisplay(), this.initializeYoutube()
    }, t.prototype.initializePostEngagementDisplay = function() {
      return this.postEngagementDisplay = STR.Tag.Helpers.PostEngagementDisplayHelper.get(this.creative, this.tracker, this.element, this.placementKey, this.guid, this.placementIndex, this.inPlace()), this.postEngagementDisplay.onBeforeClose(this.handleClose)
    }, t.prototype.initializeYoutube = function() {
      return null != window.YT ? this.createYoutubePlayer() : (document.getElementById("str-yt-api") || this.dropYoutubeTag(), window.onYouTubeIframeAPIReady = this.combine(window.onYouTubeIframeAPIReady, this.createYoutubePlayer))
    }, t.prototype.extractYoutubeId = function(e) {
      var t;
      return t = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/i, e.match(t)[1]
    }, t.prototype.combine = function(e, t) {
      return function(n) {
        return function() {
          return t.apply(n, arguments), null != e ? e.apply(n, arguments) : void 0
        }
      }(this)
    }, t.prototype.handleClick = function(e) {
      if (!t.__super__.handleClick.apply(this, arguments)) return STR.Tag.Helpers.SharingHelper.isSharingButton(e.target) ? void 0 : (this.tracker.handleClick(), e.preventDefault(), this.postEngagementDisplay.toggle())
    }, t.prototype.createYoutubePlayer = function() {
      var e, t;
      return t = {
        videoId: this.youtubeId,
        events: {
          onReady: this.handleReady,
          onStateChange: this.handleStateChange
        },
        playerVars: {
          wmode: "opaque",
          rel: 0,
          html5: 1,
          showinfo: 0
        }
      }, e = function(e) {
        return function() {
          return e.youtubePlayer = new window.YT.Player(e.postEngagementDisplay.embedId, t)
        }
      }(this), this.inPlace() ? (this.removeEmbedWrapperFromPostEngagementDisplay(), this.addEmbedIdToThumbnail(), t = i.extend({}, t, this.getYoutubeSizeVars()), e()) : this.postEngagementDisplay.onOpen(e)
    }, t.prototype.handleReady = function(e) {
      var t;
      return this.videoDuration = "function" == typeof(t = this.youtubePlayer).getDuration ? t.getDuration() : void 0
    }, t.prototype.handleStateChange = function(e) {
      return e.data === window.YT.PlayerState.PLAYING ? (this.setVideoCompletionInterval(), this.played || (this.tracker.handleYoutubePlay(this.videoDuration), this.postEngagementDisplay.postEngagementDisplayOpen || this.postEngagementDisplay.open()), this.played = !0) : e.data === window.YT.PlayerState.PAUSED || e.data === window.YT.PlayerState.ENDED ? this.handleStop() : void 0
    }, t.prototype.addEmbedIdToThumbnail = function() {
      return this.$element.find(".str-thumbnail").attr("id", this.postEngagementDisplay.embedId)
    }, t.prototype.getYoutubeSizeVars = function() {
      return {
        width: this.$element.find(".str-thumbnail").width(),
        height: this.$element.find(".str-thumbnail").height()
      }
    }, t.prototype.dropYoutubeTag = function() {
      var e;
      return e = document.createElement("script"), e.id = "str-yt-api", e.src = "//www.youtube.com/iframe_api", document.body.appendChild(e)
    }, t.prototype.handleClose = function() {
      return clearInterval(this.videoCompletionIntervalId)
    }, t.prototype.setVideoCompletionInterval = function() {
      var e;
      return e = function(e) {
        return function() {
          var t;
          return e.checkVideoCompletion("function" == typeof(t = e.youtubePlayer).getCurrentTime ? t.getCurrentTime() : void 0, e.videoDuration)
        }
      }(this), this.videoCompletionIntervalId = setInterval(e, this.VIDEO_COMPLETION_INTERVAL)
    }, t
  }(STR.Tag.Views.VideoBase)
}, function(e, t, n) {
  n(0), n(23), STR.Tag.Models.AdUnitManager = function() {
    function e() {
      this.placementIndexToAdUnit = {}
    }
    return e.prototype.set = function(e, t) {
      return this.placementIndexToAdUnit[e] = t
    }, e.prototype.get = function(e) {
      return this.placementIndexToAdUnit[e]
    }, e
  }()
}, function(e, t, n) {
  n(0), n(23), STR.Tag.Models.BidIdManager = function() {
    function e() {
      this.placementIndexToBidIds = {}
    }
    return e.prototype.set = function(e, t) {
      var n;
      try {
        return n = t.bidId, this.placementIndexToBidIds[e] = n
      } catch (t) {
        return t, this.placementIndexToBidIds[e] = "NO_BID_ID"
      }
    }, e.prototype.get = function(e) {
      return this.placementIndexToBidIds[e]
    }, e
  }()
}, function(e, t, n) {
  var i = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(0), n(23), STR.Tag.Models.CreativeStore = function() {
    function e(e, t, n, r, a, o, s) {
      this.creativeAvailable = i(this.creativeAvailable, this), this.placementKey = e, this.creativeKey = t, this.campaignKey = n, this.creatives = r, this.adserverRequestId = a, this.placement = o, this.messageId = s
    }
    return e.prototype.creativeAvailable = function() {
      return this.creatives.length > 0
    }, e.prototype.nextCreative = function() {
      return this.creatives.shift()
    }, e.prototype.peek = function() {
      return this.creativeAvailable() ? this.creatives[0] : void 0
    }, e.prototype.getTemplate = function() {
      var e, t, n;
      return n = null != (e = this.placement) && null != (t = e.placementAttributes) ? t.template : void 0, STR.Tag.Helpers.HtmlUtility.decodeString(n)
    }, e.prototype.getChildPlacementKey = function() {
      return this.placement.placementAttributes.child_placement_key
    }, e.prototype.getDynamicCreativeUrl = function() {
      if (null != this.peek()) return this.peek().creative.dco_asset_url
    }, e
  }()
}, function(e, t, n) {
  var i, r = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(23), i = STR.Vendor.$, STR.Tag.Models.Element = function() {
    function e(e, t, n) {
      this.beginRender = r(this.beginRender, this), this.placement = n, this.placementKey = n.placementKey, this.element = e, this.creativeStore = t
    }
    return e.prototype.beginRender = function() {
      var e;
      return e = STR.Tag.Helpers.HtmlUtility.getDomPlacementIndex(i(this.element)), STR.Tag.Helpers.Renderer.render(this.placement, this.element, this.creativeStore.nextCreative(), e)
    }, e
  }()
}, function(e, t, n) {
  n(23), STR.Tag.Models.FeaturedContents = function() {
    function e(e, t) {
      var n, i, r, a, o;
      if (this.featuredContent = e, (null != (a = this.featuredContent) ? a.length : void 0) > 0)
        for (o = this.featuredContent, i = 0, r = o.length; i < r; i++) n = o[i], this.setupFeaturedContent(n, t)
    }
    return e.prototype.getFeaturedContent = function() {
      var e;
      return e = this.featuredContent.shift(), e && (this.lastFCCreative = e), this.lastFCCreative
    }, e.prototype.setupFeaturedContent = function(e, t) {
      var n;
      return e.creative.featured_content = !0, e.creative.mrid = t, (n = e.creative).beacons || (n.beacons = {
        impression: [],
        visible: [],
        play: [],
        click: [],
        silent_play: [],
        ten_second_silent_play: [],
        fifteen_second_silent_play: [],
        thirty_second_silent_play: [],
        completed_silent_play: []
      })
    }, e
  }()
}, function(e, t, n) {
  var i;
  n(23), i = n(53), STR.Tag.Models.LatencyTracker = {
    PERCENTAGE_OF_TRAFFIC: .05,
    start: function(e) {
      return this.tracker = this.tracker || {}, this.tracker[e] = new Date
    },
    end: function(e) {
      var t;
      if (null != this.tracker && null != this.tracker[e] && this.shouldFireBeacon()) return t = STR.Tag.Helpers.BeaconCannon.getInstance(), t.fireBeacon(STR.Tag.TrackingHost, "butler", {
        type: STR.Tag.Helpers.BeaconCannon.timing,
        url: e,
        latency: new Date - this.tracker[e]
      })
    },
    shouldFireBeacon: function() {
      return i.should(this.PERCENTAGE_OF_TRAFFIC)
    }
  }
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(108),
    a = i(r),
    o = n(3),
    s = i(o),
    l = n(4),
    c = i(l),
    u = function() {
      function e() {
        (0, s.default)(this, e), this.waterfallStates = {}, this.mrIds = {}, this.NOT_IN_WATERFALL_YET = -1
      }
      return (0, c.default)(e, [{
        key: "get",
        value: function(e) {
          return this.waterfallStates[e]
        }
      }, {
        key: "getMrId",
        value: function(e) {
          return this.mrIds[e]
        }
      }, {
        key: "increment",
        value: function(e) {
          return this.waterfallStates[e] += 1
        }
      }, {
        key: "size",
        value: function() {
          return (0, a.default)(this.waterfallStates).length
        }
      }, {
        key: "addWaterfallState",
        value: function() {
          var e = this.size() + 1;
          return this.waterfallStates[e] = this.NOT_IN_WATERFALL_YET, e
        }
      }, {
        key: "generateMrid",
        value: function(e) {
          return this.mrIds[e] = STR.Vendor.UUID.generate()
        }
      }, {
        key: "toString",
        value: function() {
          if (0 === this.size()) return "empty";
          for (var e = 1, t = ""; void 0 !== this.get(e);) t += "(" + e + ", " + this.get(e) + "),", e += 1;
          return t
        }
      }]), e
    }();
  e.exports = u
}, function(e, t, n) {
  e.exports = {
    default: n(273),
    __esModule: !0
  }
}, function(e, t, n) {
  n(274), e.exports = n(2).Object.freeze
}, function(e, t, n) {
  var i = n(15),
    r = n(77).onFreeze;
  n(78)("freeze", function(e) {
    return function(t) {
      return e && i(t) ? e(r(t)) : t
    }
  })
}, function(e, t, n) {
  var i = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(23), STR.Tag.Models.ThirdPartyPartners = function() {
    function e(e) {
      this.get = i(this.get, this), this.length = i(this.length, this), this.getThirdPartyPartner = i(this.getThirdPartyPartner, this), this.thirdPartyPartners = e
    }
    return e.prototype.getThirdPartyPartner = function(e) {
      var t, n, i, r;
      for (i = this.thirdPartyPartners, t = 0, n = i.length; t < n; t++)
        if (r = i[t], r.key === e) return r
    }, e.prototype.length = function() {
      return this.thirdPartyPartners.length
    }, e.prototype.get = function(e) {
      return this.thirdPartyPartners[e]
    }, e
  }()
}, function(e, t, n) {
  var i, r, a, o = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(23), a = n(277), r = n(50).Audit, i = STR.Vendor.$, STR.Tag.Models.ViewTracker = function() {
    function e(e) {
      this.handleVideoStart = o(this.handleVideoStart, this), this.handleVideoViewDuration = o(this.handleVideoViewDuration, this), this.handleSilentAutoplayLength = o(this.handleSilentAutoplayLength, this), this.handleAutoplayVideoEngagement = o(this.handleAutoplayVideoEngagement, this), this.handleNonYoutubePlay = o(this.handleNonYoutubePlay, this), this.handleYoutubePlay = o(this.handleYoutubePlay, this), this.handleArticleViewDuration = o(this.handleArticleViewDuration, this), this.handleArticleView = o(this.handleArticleView, this), this.handleClick = o(this.handleClick, this);
      e.element, this.creativeKey = e.creativeKey, this.placementKey = e.placementKey, this.variantKey = "" + e.variantKey, this.status = e.placementStatus, this.arid = e.arid, this.awid = e.awid, this.inPlace = e.inPlace, this.placementIndex = e.placementIndex, this.beacons = e.beacons || {
        impression: [],
        visible: [],
        play: [],
        click: [],
        silent_play: [],
        ten_second_silent_play: [],
        fifteen_second_silent_play: [],
        thirty_second_silent_play: [],
        completed_silent_play: [],
        first_quartile: [],
        midpoint: [],
        third_quartile: [],
        "win-notification": [],
        "video-impression": [],
        "video-win-notification": []
      }, this.firedCompletionBeacons = {
        25: !1,
        50: !1,
        75: !1,
        95: !1
      }, this.firedSilentDurationBeacons = {
        3000: !1,
        10000: !1,
        15000: !1,
        30000: !1
      }, this.isVast = e.isVast, this.action = e.action, this.tkey = e.tkey, this.dfpLineItemId = e.dfpLineItemId, this.elementWasUnwrapped = e.elementWasUnwrapped, this.renderPixelOffset = e.renderPixelOffset, this.buildDefaultBeaconParams(e), this.cannon = STR.Tag.Helpers.BeaconCannon.getInstance()
    }
    return e.prototype.fireImpressionBeacons = function() {
      var e, t;
      if (r.tick("impression"), e = {
          renderOffset: STR.Tag.Helpers.Renderer.pixelOffsets[this.arid]
        }, t = r.getTime("rendering"), void 0 !== t && (e.renderLatency = t.toString()), this.trackEvent("impression", e), null != this.beacons.impression) return this.fireThirdPartyPixel(this.beacons.impression)
    }, e.prototype.buildDefaultBeaconParams = function(e) {
      var t, n, r, a;
      if (t = STR.Tag.Helpers.PageGeometryHelper.viewportDimensions(), n = STR.Tag.Helpers.PageGeometryHelper.elementDimensions(e.element), r = STR.Tag.Helpers.PageGeometryHelper.elementPosition(e.element), a = STR.Tag.Helpers.PageGeometryHelper.thumbnailDimensions(e.element), this.defaultBeaconParams = {
          bwidth: t[0],
          bheight: t[1],
          pwidth: n[0],
          pheight: n[1],
          pxoff: r[0],
          pyoff: r[1],
          pkey: this.placementKey,
          ckey: this.creativeKey,
          tkey: this.tkey,
          vkey: this.variantKey,
          arid: this.arid,
          awid: this.awid,
          sourceId: this.parseSourceIdFromCreativeKey(this.creativeKey),
          renderInPlace: this.inPlace,
          placementIndex: this.placementIndex,
          messageId: e.messageId,
          deal_id: e.deal_id,
          twidth: a[0],
          theight: a[1],
          action: this.action,
          isVast: this.isVast
        }, this.dfpLineItemId && (this.defaultBeaconParams.dfpLineItemId = this.dfpLineItemId), null != e.price && null != e.priceType && null != e.priceSignature && (this.defaultBeaconParams.ap = e.price, this.defaultBeaconParams.at = e.priceType, this.defaultBeaconParams.as = e.priceSignature), null != e.beaconMetaData && (this.defaultBeaconParams = i.extend({}, e.beaconMetaData, this.defaultBeaconParams)), null != e.featuredContent) return this.defaultBeaconParams.featuredContent = !0
    }, e.prototype.parseSourceIdFromCreativeKey = function(e) {
      if (e) return e.split("-")[0]
    }, e.prototype.fireThirdPartyPixel = function(e) {
      var t;
      return "pre-live" !== this.status && e ? (t = e.map(function(e) {
        return function(t) {
          return new Promise(function(n, i) {
            var r;
            return r = a(n, 500), e.cannon.firePixel(t, r, r)
          })
        }
      }(this)), Promise.all(t)) : Promise.resolve()
    }, e.prototype.handleClick = function() {
      return this.fireThirdPartyPixel(this.beacons.click), this.handleClick = function() {}
    }, e.prototype.handleArticleView = function() {
      return this.trackUserEvent(STR.Tag.Helpers.BeaconCannon.articleView, {
        engagement: !0
      }), this.handleClick()
    }, e.prototype.handleArticleViewDuration = function(e) {
      return this.trackUserEvent(STR.Tag.Helpers.BeaconCannon.articleViewDuration, {
        duration: e
      })
    }, e.prototype.handleYoutubePlay = function(e) {
      return this.trackUserEvent(STR.Tag.Helpers.BeaconCannon.youtubePlay, {
        engagement: !0,
        videoDuration: e
      }), this.handleVideoStart("youtube"), null != this.beacons.play && this.fireThirdPartyPixel(this.beacons.play), this.handleClick()
    }, e.prototype.handleNonYoutubePlay = function(e) {
      return this.trackUserEvent(STR.Tag.Helpers.BeaconCannon.videoPlay, {
        engagement: !0,
        videoDuration: e
      }), null != this.beacons.play && this.fireThirdPartyPixel(this.beacons.play), this.handleClick()
    }, e.prototype.handleAutoplayVideoEngagement = function(e) {
      return this.trackUserEvent(STR.Tag.Helpers.BeaconCannon.autoplayVideoEngagement, {
        engagement: !0,
        videoDuration: e
      })
    }, e.prototype.handleSilentAutoplayLength = function(e) {
      if (!this.firedSilentDurationBeacons[e]) {
        if (this.firedSilentDurationBeacons[e] = !0, this.trackEvent(STR.Tag.Helpers.BeaconCannon.silentAutoPlayDuration, {
            duration: e
          }), 3e3 === e && null != this.beacons.silent_play) return this.fireThirdPartyPixel(this.beacons.silent_play);
        if (1e4 === e && null != this.beacons.ten_second_silent_play) return this.fireThirdPartyPixel(this.beacons.ten_second_silent_play);
        if (15e3 === e && null != this.beacons.fifteen_second_silent_play) return this.fireThirdPartyPixel(this.beacons.fifteen_second_silent_play);
        if (3e4 === e && null != this.beacons.thirty_second_silent_play) return this.fireThirdPartyPixel(this.beacons.thirty_second_silent_play)
      }
    }, e.prototype.handleVideoViewDuration = function(e, t) {
      if (!(e < 1)) return this.trackEvent(STR.Tag.Helpers.BeaconCannon.videoViewDuration, {
        duration: e,
        silent: t
      })
    }, e.prototype.handleShare = function(e) {
      return this.trackUserEvent(STR.Tag.Helpers.BeaconCannon.share, {
        share: e,
        engagement: !0
      })
    }, e.prototype.handleVideoStart = function(e) {
      if (this.trackEvent(STR.Tag.Helpers.BeaconCannon.videoStart, {
          vidType: e
        }), this.beacons["video-win-notification"] && this.fireThirdPartyPixel(this.beacons["video-win-notification"]), this.beacons["video-impression"]) return this.fireThirdPartyPixel(this.beacons["video-impression"])
    }, e.prototype.trackEvent = function(e, t) {
      return null == t && (t = {}), t.type = e, this.cannon.fireBeacon(STR.Tag.TrackingHost, "butler", i.extend({}, this.defaultBeaconParams, t))
    }, e.prototype.trackUserEvent = function(e, t) {
      var n;
      return null == t && (t = {}), n = i.extend({}, {
        userEvent: e
      }, t), this.trackEvent(STR.Tag.Helpers.BeaconCannon.userEvent, n)
    }, e.prototype.trackCompletion = function(e, t) {
      var n, i, r, a;
      null == t && (t = !1), r = this.firedCompletionBeacons, a = [];
      for (i in r) {
        if (n = r[i], e >= i && !n) {
          this.firedCompletionBeacons[i] = !0, this.trackEvent(STR.Tag.Helpers.BeaconCannon.completionPercent, {
            value: i,
            isSilentPlay: t
          }), "25" === i && null != this.beacons.first_quartile && this.fireThirdPartyPixel(this.beacons.first_quartile), "50" === i && null != this.beacons.midpoint && this.fireThirdPartyPixel(this.beacons.midpoint), "75" === i && null != this.beacons.third_quartile && this.fireThirdPartyPixel(this.beacons.third_quartile), "95" === i && null != this.beacons.completed_silent_play && this.fireThirdPartyPixel(this.beacons.completed_silent_play);
          break
        }
        a.push(void 0)
      }
      return a
    }, e.prototype.generateBeaconRequest = function(e, t) {
      return null == t && (t = {}), t.type = e, this.cannon.generateBeaconRequest(STR.Tag.TrackingHost, "butler", i.extend({}, this.defaultBeaconParams, t))
    }, e.prototype.fireWinNotifications = function() {
      var e, t, n, i, r;
      if (null != this.beacons["win-notification"]) {
        for (i = this.beacons["win-notification"], r = [], e = 0, t = i.length; e < t; e++) n = i[e], r.push(this.cannon.fireNurl(n, {
          pkey: this.placementKey,
          arid: this.arid,
          awid: this.awid
        }));
        return r
      }
    }, e
  }()
}, function(e, t, n) {
  var i = n(278);
  e.exports = function(e, t, n) {
    function r() {
      clearTimeout(o), o = null;
      var r = n || "timeout of " + t + "ms exceeded for callback " + (e.name || "anonymous");
      e.call(e, new i.TimeoutError(r))
    }

    function a() {
      o && (clearTimeout(o), e.apply(e, arguments))
    }
    if (!t) return e;
    var o = setTimeout(r, t);
    return a
  }
}, function(e, t, n) {
  function i() {
    this.code = "ETIMEDOUT"
  }
  var r = n(279);
  e.exports.TimeoutError = r("TimeoutError", i)
}, function(e, t, n) {
  var i = n(280).inherits;
  e.exports = function(e, t) {
    function n(e) {
      Error.captureStackTrace ? Error.captureStackTrace(this, n) : this.stack = (new Error).stack, this.message = e, t.apply(this, arguments)
    }
    return e = "string" == typeof e ? e : "UndefinedError", t = "function" == typeof t ? t : function() {}, i(n, Error), n.prototype.name = e, n
  }
}, function(e, t, n) {
  (function(e, i) {
    function r(e, n) {
      var i = {
        seen: [],
        stylize: o
      };
      return arguments.length >= 3 && (i.depth = arguments[2]), arguments.length >= 4 && (i.colors = arguments[3]), m(n) ? i.showHidden = n : n && t._extend(i, n), w(i.showHidden) && (i.showHidden = !1), w(i.depth) && (i.depth = 2), w(i.colors) && (i.colors = !1), w(i.customInspect) && (i.customInspect = !0), i.colors && (i.stylize = a), l(i, e, i.depth)
    }

    function a(e, t) {
      var n = r.styles[t];
      return n ? "[" + r.colors[n][0] + "m" + e + "[" + r.colors[n][1] + "m" : e
    }

    function o(e, t) {
      return e
    }

    function s(e) {
      var t = {};
      return e.forEach(function(e, n) {
        t[e] = !0
      }), t
    }

    function l(e, n, i) {
      if (e.customInspect && n && _(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
        var r = n.inspect(i, e);
        return b(r) || (r = l(e, r, i)), r
      }
      var a = c(e, n);
      if (a) return a;
      var o = Object.keys(n),
        m = s(o);
      if (e.showHidden && (o = Object.getOwnPropertyNames(n)), C(n) && (o.indexOf("message") >= 0 || o.indexOf("description") >= 0)) return u(n);
      if (0 === o.length) {
        if (_(n)) {
          var g = n.name ? ": " + n.name : "";
          return e.stylize("[Function" + g + "]", "special")
        }
        if (k(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
        if (x(n)) return e.stylize(Date.prototype.toString.call(n), "date");
        if (C(n)) return u(n)
      }
      var v = "",
        y = !1,
        T = ["{", "}"];
      if (f(n) && (y = !0, T = ["[", "]"]), _(n)) {
        v = " [Function" + (n.name ? ": " + n.name : "") + "]"
      }
      if (k(n) && (v = " " + RegExp.prototype.toString.call(n)), x(n) && (v = " " + Date.prototype.toUTCString.call(n)), C(n) && (v = " " + u(n)), 0 === o.length && (!y || 0 == n.length)) return T[0] + v + T[1];
      if (i < 0) return k(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special");
      e.seen.push(n);
      var w;
      return w = y ? d(e, n, i, m, o) : o.map(function(t) {
        return p(e, n, i, m, t, y)
      }), e.seen.pop(), h(w, v, T)
    }

    function c(e, t) {
      if (w(t)) return e.stylize("undefined", "undefined");
      if (b(t)) {
        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return e.stylize(n, "string")
      }
      return y(t) ? e.stylize("" + t, "number") : m(t) ? e.stylize("" + t, "boolean") : g(t) ? e.stylize("null", "null") : void 0
    }

    function u(e) {
      return "[" + Error.prototype.toString.call(e) + "]"
    }

    function d(e, t, n, i, r) {
      for (var a = [], o = 0, s = t.length; o < s; ++o) H(t, String(o)) ? a.push(p(e, t, n, i, String(o), !0)) : a.push("");
      return r.forEach(function(r) {
        r.match(/^\d+$/) || a.push(p(e, t, n, i, r, !0))
      }), a
    }

    function p(e, t, n, i, r, a) {
      var o, s, c;
      if (c = Object.getOwnPropertyDescriptor(t, r) || {
          value: t[r]
        }, c.get ? s = c.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : c.set && (s = e.stylize("[Setter]", "special")), H(i, r) || (o = "[" + r + "]"), s || (e.seen.indexOf(c.value) < 0 ? (s = g(n) ? l(e, c.value, null) : l(e, c.value, n - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n").map(function(e) {
          return "  " + e
        }).join("\n").substr(2) : "\n" + s.split("\n").map(function(e) {
          return "   " + e
        }).join("\n"))) : s = e.stylize("[Circular]", "special")), w(o)) {
        if (a && r.match(/^\d+$/)) return s;
        o = JSON.stringify("" + r), o.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (o = o.substr(1, o.length - 2), o = e.stylize(o, "name")) : (o = o.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), o = e.stylize(o, "string"))
      }
      return o + ": " + s
    }

    function h(e, t, n) {
      var i = 0;
      return e.reduce(function(e, t) {
        return i++, t.indexOf("\n") >= 0 && i++, e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
      }, 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
    }

    function f(e) {
      return Array.isArray(e)
    }

    function m(e) {
      return "boolean" == typeof e
    }

    function g(e) {
      return null === e
    }

    function v(e) {
      return null == e
    }

    function y(e) {
      return "number" == typeof e
    }

    function b(e) {
      return "string" == typeof e
    }

    function T(e) {
      return "symbol" == typeof e
    }

    function w(e) {
      return void 0 === e
    }

    function k(e) {
      return S(e) && "[object RegExp]" === E(e)
    }

    function S(e) {
      return "object" == typeof e && null !== e
    }

    function x(e) {
      return S(e) && "[object Date]" === E(e)
    }

    function C(e) {
      return S(e) && ("[object Error]" === E(e) || e instanceof Error)
    }

    function _(e) {
      return "function" == typeof e
    }

    function R(e) {
      return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
    }

    function E(e) {
      return Object.prototype.toString.call(e)
    }

    function P(e) {
      return e < 10 ? "0" + e.toString(10) : e.toString(10)
    }

    function A() {
      var e = new Date,
        t = [P(e.getHours()), P(e.getMinutes()), P(e.getSeconds())].join(":");
      return [e.getDate(), V[e.getMonth()], t].join(" ")
    }

    function H(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }
    var I = /%[sdj%]/g;
    t.format = function(e) {
      if (!b(e)) {
        for (var t = [], n = 0; n < arguments.length; n++) t.push(r(arguments[n]));
        return t.join(" ")
      }
      for (var n = 1, i = arguments, a = i.length, o = String(e).replace(I, function(e) {
          if ("%%" === e) return "%";
          if (n >= a) return e;
          switch (e) {
            case "%s":
              return String(i[n++]);
            case "%d":
              return Number(i[n++]);
            case "%j":
              try {
                return JSON.stringify(i[n++])
              } catch (e) {
                return "[Circular]"
              }
              default:
                return e
          }
        }), s = i[n]; n < a; s = i[++n]) g(s) || !S(s) ? o += " " + s : o += " " + r(s);
      return o
    }, t.deprecate = function(n, r) {
      function a() {
        if (!o) {
          if (i.throwDeprecation) throw new Error(r);
          i.traceDeprecation ? console.trace(r) : console.error(r), o = !0
        }
        return n.apply(this, arguments)
      }
      if (w(e.process)) return function() {
        return t.deprecate(n, r).apply(this, arguments)
      };
      if (!0 === i.noDeprecation) return n;
      var o = !1;
      return a
    };
    var D, O = {};
    t.debuglog = function(e) {
      if (w(D) && (D = i.env.NODE_DEBUG || ""), e = e.toUpperCase(), !O[e])
        if (new RegExp("\\b" + e + "\\b", "i").test(D)) {
          var n = i.pid;
          O[e] = function() {
            var i = t.format.apply(t, arguments);
            console.error("%s %d: %s", e, n, i)
          }
        } else O[e] = function() {};
      return O[e]
    }, t.inspect = r, r.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }, r.styles = {
      special: "cyan",
      number: "yellow",
      boolean: "yellow",
      undefined: "grey",
      null: "bold",
      string: "green",
      date: "magenta",
      regexp: "red"
    }, t.isArray = f, t.isBoolean = m, t.isNull = g, t.isNullOrUndefined = v, t.isNumber = y, t.isString = b, t.isSymbol = T, t.isUndefined = w, t.isRegExp = k, t.isObject = S, t.isDate = x, t.isError = C, t.isFunction = _, t.isPrimitive = R, t.isBuffer = n(281);
    var V = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    t.log = function() {
      console.log("%s - %s", A(), t.format.apply(t, arguments))
    }, t.inherits = n(282), t._extend = function(e, t) {
      if (!t || !S(t)) return e;
      for (var n = Object.keys(t), i = n.length; i--;) e[n[i]] = t[n[i]];
      return e
    }
  }).call(t, n(122), n(130))
}, function(e, t) {
  e.exports = function(e) {
    return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
  }
}, function(e, t) {
  "function" == typeof Object.create ? e.exports = function(e, t) {
    e.super_ = t, e.prototype = Object.create(t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    })
  } : e.exports = function(e, t) {
    e.super_ = t;
    var n = function() {};
    n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
  }
}, function(e, t, n) {
  var i = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(149), STR.Tag.Network.NetworkManager = function() {
    function e() {
      this.createNetwork = i(this.createNetwork, this), this.fetchAd = i(this.fetchAd, this)
    }
    return e.prototype.fetchAd = function(e, t, n, i, r, a, o) {
      return this.createNetwork().fetchAd(e, t, n, i, r, a, o)
    }, e.prototype.createNetwork = function() {
      return new STR.Tag.Network.STXNetwork
    }, e
  }()
}, function(e, t, n) {
  var i, r, a, o, s, l = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(149), r = n(285), s = n(64), n(286), a = n(105), o = n(39), n(17), n(28), n(128), i = n(50).Audit, STR.Vendor.$, STR.Tag.Network.STXNetwork = function() {
    function e() {
      this.directSoldType = l(this.directSoldType, this), this.adRequestCallback = l(this.adRequestCallback, this), this.fetchAd = l(this.fetchAd, this), this.cannon = STR.Tag.Helpers.BeaconCannon.getInstance()
    }
    return e.prototype.fetchAd = function(e, t, n, i, r, a, o) {
      var s, l, c, u;
      return this.placementKey = e, this.creativeKey = t, this.campaignKey = n, this.creativeStoreCallback = a, this.failureCallback = o, this.targetElement = i, this.startTime, this.butlerStartTime, this.elapsedTime, this.butlerLatencyTime, l = STR.Tag.Helpers.HtmlUtility.getDomPlacementIndex(STR.Vendor.$(i)), STR.Tag.Models.MediationTracker.fireNetworkImpressionRequest(e, "stxnetwork", l), c = STR.Tag.findPlacementFor(e), this.mrid = c.mediationStates.getMrId(STR.Tag.Helpers.HtmlUtility.getDomPlacementIndex(STR.Vendor.$(i))), this.startTime = "undefined" != typeof Date && null !== Date ? Date.now() : void 0, this.butlerStartTime = null != (u = window.performance) ? u.now() : void 0, s = STR.Tag.Factories.FactoryChooser.chooseFactories(t, n, r, i), s.getCreative(this.placementKey, this.adRequestCallback, this.creativeKey, this.campaignKey, this.mrid)
    }, e.prototype.adRequestCallback = function(e) {
      var t, n, i, s, l, c, u, d, p, h;
      try {
        if (this.startTime && (this.elapsedTime = ("undefined" != typeof Date && null !== Date ? Date.now() : void 0) - this.startTime, this.butlerLatencyTime = (null != (u = window.performance) ? u.now() : void 0) - this.butlerStartTime), (null != e && null != (d = e.cookieSyncUrls) ? d.length : void 0) > 0 && r.sync(e.cookieSyncUrls), (null != e && null != (p = e.htmlBeacons) ? p.length : void 0) > 0 && r.syncHtml(e.htmlBeacons), !((null != e ? e.creatives.length : void 0) > 0)) return void(null != this.failureCallback && this.failureCallback(this.placementKey, this.targetElement));
        for (h = e.creatives, s = 0, c = h.length; s < c; s++) n = h[s], this.setupCreative(n, e.placement, e.adserverRequestId, n.auctionWinId);
        return l = STR.Tag.Helpers.HtmlUtility.isInIframe(window), STR.Tag.Helpers.Renderer.pixelOffsets[e.adserverRequestId] || (STR.Tag.Helpers.Renderer.pixelOffsets[e.adserverRequestId] = a.pixelOffset(e.placement, e.creatives[0], l)), this.fireImpressionReceivedBeacon(this.placementKey, e.creatives[0], STR.Tag.Helpers.Renderer.pixelOffsets[e.adserverRequestId]), t = new STR.Tag.Models.CreativeStore(this.placementKey, this.creativeKey, this.campaignKey, JSON.parse(JSON.stringify(e.creatives)), e.adserverRequestId, e.placement, this.messageId), this.creativeStoreCallback(t, this.targetElement)
      } catch (t) {
        return i = t, o.sample(i, {
          function: "STR.Tag.Network.STXNetwork:adRequestCallback",
          args: e
        }), console.error(i)
      }
    }, e.prototype.setupCreative = function(e, t, n, i) {
      var r;
      return e.creative.directSold = this.directSoldType(), e.creative.placementStatus = t.status, (r = e.creative).promoted_by_text || (r.promoted_by_text = this.getPromotedByText(e.creative, t)), e.creative.arid = n, e.creative.awid = i
    }, e.prototype.getPromotedByText = function(e, t) {
      return e.directSold ? t.placementAttributes.direct_sell_promoted_by_text || t.placementAttributes.promoted_by_text : t.placementAttributes.promoted_by_text
    }, e.prototype.directSoldType = function() {
      var e;
      return e = !1, this.creativeKey ? e = "creative" : this.campaignKey && (e = "campaign"), e
    }, e.prototype.fireImpressionReceivedBeacon = function(e, t, n) {
      var r, a, o, l;
      return i.tick("impressionReceived"), o = STR.Tag.Helpers.HtmlUtility.getDomPlacementIndex(STR.Vendor.$(this.targetElement)), r = {
        type: STR.Tag.Helpers.BeaconCannon.impressionReceived,
        pkey: e,
        placementIndex: o,
        ckey: t.creative.creative_key,
        vkey: t.creative.variant_key,
        arid: t.creative.arid,
        awid: t.auctionWinId,
        renderOffset: n
      }, STR.Tag.placements[e] && STR.Tag.placements[e].hasDfpMacro() && (r.dfpMacro = 1), a = i.getTimeOrigin(), a > 0 && (r.bootTime = a.toFixed(2)), l = i.getTime("boot"), void 0 !== l && (r.benchmarkBoot = l.toString()), t.cpm || (("undefined" != typeof Date && null !== Date ? Date.now : void 0) && s.isNative(Date.now) && (r.responseTime = this.elapsedTime), window.performance && s.isNative(window.performance.now) && (r.butlerLatency = this.butlerLatencyTime)), STR.Tag.Helpers.BeaconCannon.getInstance().fireBeacon(STR.Tag.TrackingHost, "butler", r)
    }, e
  }()
}, function(e, t, n) {
  "use strict";
  var i = n(28),
    r = n(39),
    a = {
      synced: !1,
      htmlSynced: !1,
      sync: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3;
        if (!a.synced) try {
          var n = a.createIframe();
          if (n.contentDocument) {
            e = a.addGdprConsentParams(e);
            var i = a.createImageTags(e),
              o = n.contentDocument;
            null == o.body && o.write("<body></body>"), o.body.appendChild(i);
            var s = a.createRemovalScript(t);
            o.body.appendChild(s), a.synced = !0
          }
        } catch (e) {
          a.synced = !0, r.sample(e, {
            function: "CookieSyncHelper:sync"
          })
        }
      },
      syncHtml: function(e) {
        if (!a.htmlSynced) try {
          var t = new DOMParser;
          e.forEach(function(e) {
            var n = t.parseFromString(e, "text/html");
            if (n) {
              var i = n.documentElement.querySelector("body").firstChild;
              document.querySelector("body").appendChild(i)
            }
          }), a.htmlSynced = !0
        } catch (e) {
          a.htmlSynced = !0, r.sample(e, {
            function: "CookieSyncHelper:syncHtml"
          })
        }
      },
      createIframe: function() {
        var e = document.createElement("iframe");
        return e.style.cssText = "display:none;", document.body.appendChild(e), e
      },
      createImageTags: function(e) {
        var t = e.map(function(e) {
            return "<img src='" + e + "'>"
          }).join("\n"),
          n = document.createElement("div");
        return n.innerHTML = t, n
      },
      createRemovalScript: function(e) {
        var t = document.createElement("script");
        return t.innerHTML = "\n        setTimeout(() => {\n          try {\n            window.frameElement.remove();\n          } catch(err) {\n            console.log('STR Unable to remove iframe');\n          }\n        }, " + e + ");\n      ", t
      },
      addGdprConsentParams: function(e) {
        return i.gdprApplies ? e.map(function(e) {
          return e + (e.match(/\?/) ? "&" : "?") + "gdpr=1&gdpr_consent=" + i.consentString
        }) : e
      }
    };
  e.exports = a
}, function(e, t, n) {
  "use strict";
  var i = n(53),
    r = [0, 1, 100, 200, 400, 800, 1200],
    a = {
      T7YtphVpuFne3aBaqWxvyLyT: !0,
      "9m1fK7YTC2neSmpm2xNDeE3o": !0,
      cQu3D1XdrMMYzdop3t9vJcvb: !0,
      ohsDx4vLhpbhSgBsMpPt3QGK: !0,
      G9KrPmNXYipskJt4r4L9bUPf: !0,
      "51RqQaPgDkKuv3qWYR8f2iXb": !0,
      EcpXF8vwxxLwzWehMN3D1tQN: !0,
      aUw54i6t6rCkXviAvBfPSxRR: !0,
      qaMusDTRyTm17aRCzwaJCm8d: !0,
      WW2fBvegkwczkFXSjuHrUEic: !0,
      DB4SdYNB4Dj1Ujw1E9eaaU8u: !0,
      eeYSCxzidAkuWRhLkauhHGfU: !0,
      F3JMk4ia1AaAwcaKA7VrNEyS: !0
    },
    o = {
      setPixelOffset: function(e, t) {
        if (o.shouldExperimentPlacement(e)) {
          var n = r[i.assignRandomGroup(r.length)];
          t.placementAttributes.renderingPixelOffset = n
        }
      },
      shouldExperimentPlacement: function(e) {
        return !!a[e]
      }
    };
  e.exports = o
}, , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
  var i, r;
  n(317), r = n(39), i = STR.Vendor.$, STR.Tag.boot = function() {
    var e, t;
    try {
      return (e = STR.Tag).placements || (e.placements = {}), STR.Tag.Helpers.UidHelper.setup(), STR.Tag.process()
    } catch (e) {
      return t = e, r.sample(t, {
        function: "STR.Tag.boot"
      }), console.error(t)
    }
  }, STR.Tag.process = function() {
    return i("[data-str-native-key]:not([data-str-visited-flag])").each(function(e, t) {
      var n, r, a, o, s, l;
      return n = i(t), n.attr("data-str-visited-flag", !0), s = n.data("str-native-key"), a = n.data("str-creative-key") || "", r = n.data("str-campaign-key") || "", l = n.data("stx-response-name") || "", o = STR.Tag.findPlacementFor(s), n.attr("data-str-dfp-macro-workaround") && o.setDfpMacroWorkaround(), void 0 === n.attr("data-str-placement-index") && n.attr("data-str-placement-index", o.getDomIndexAndIntialize(n)), o.placeAd(t, a, r, l)
    })
  }, STR.Tag.findPlacementFor = function(e) {
    return void 0 === STR.Tag.placements[e] && (STR.Tag.placements[e] = new STR.Tag.Models.Placement(e)), STR.Tag.placements[e]
  }, STR.Tag.overrideTemplate = function() {}
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(75),
    a = i(r),
    o = n(20),
    s = i(o),
    l = n(3),
    c = i(l),
    u = n(4),
    d = i(u),
    p = n(28),
    h = n(31),
    f = n(39),
    m = function() {
      function e() {
        (0, c.default)(this, e)
      }
      return (0, d.default)(e, [{
        key: "getCreative",
        value: function(e, t) {
          var n = (arguments.length > 2 && void 0 !== arguments[2] && arguments[2], arguments.length > 3 && void 0 !== arguments[3] && arguments[3], arguments[4]);
          return new s.default(function(i) {
            STR.Tag.Helpers.UidProvider.whenUidReady(function() {
              var r = (0, a.default)({
                placement_key: e,
                instant_play_capable: STR.Tag.Helpers.BrowserHelper.canAutoPlayHTML5Video(),
                mrid: n,
                consent_string: p.consentString || void 0
              }, STR.Tag.Helpers.UidProvider.adServerParams());
              h.jsonGet(STR.Tag.AdserverUrl, {
                data: r,
                withCredentials: !0
              }).then(function(e) {
                return i(t(e))
              }).catch(function(e) {
                if (0 === e.readyState && "error" === e.statusText && 0 === e.status) throw "ad-blocker-detected";
                f.sample("AJAX error in CreativeFactory:getCreative", {
                  function: "CreativeFactory:getCreative",
                  params: r,
                  error: e
                })
              })
            })
          })
        }
      }]), e
    }();
  e.exports = m
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o),
    l = n(28),
    c = n(31),
    u = n(39),
    d = function() {
      function e() {
        (0, a.default)(this, e)
      }
      return (0, s.default)(e, [{
        key: "getCreative",
        value: function(e, t, n, i, r) {
          var a = {
            placement_key: e,
            creative_key: n,
            mrid: r,
            consent_string: l.consentString || void 0
          };
          return c.jsonGet(STR.Tag.AdserverUrl, {
            data: a,
            success: t,
            withCredentials: !0
          }).catch(function(e) {
            if (0 === e.readyState && "error" === e.statusText && 0 === e.status) throw "ad-blocker-detected";
            u.sample("AJAX error in SfpCreativeFactory:getCreative", {
              function: "SfpCreativeFactory:getCreative",
              params: a,
              error: e
            })
          })
        }
      }]), e
    }();
  e.exports = d
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o),
    l = n(28),
    c = n(31),
    u = n(39),
    d = function() {
      function e() {
        (0, a.default)(this, e)
      }
      return (0, s.default)(e, [{
        key: "getCreative",
        value: function(e, t, n, i, r) {
          var a = {
            placement_key: e,
            campaign_key: i,
            mrid: r,
            consent_string: l.consentString || void 0
          };
          return c.jsonGet(STR.Tag.AdserverUrl, {
            data: a,
            success: t,
            withCredentials: !0
          }).catch(function(e) {
            if (0 === e.readyState && "error" === e.statusText && 0 === e.status) throw "ad-blocker-detected";
            u.sample("AJAX error in SfpCampaignFactory:getCreative", {
              function: "SfpCampaignFactory:getCreative",
              params: a,
              error: e
            })
          })
        }
      }]), e
    }();
  e.exports = d
}, function(e, t, n) {
  var i, r, a = function(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  };
  n(0), n(322), i = STR.Vendor.$, r = function() {
    function e() {
      this.makeCreativeKeysUnique = a(this.makeCreativeKeysUnique, this), this.deepCopyCreatives = a(this.deepCopyCreatives, this), this.localCallback = a(this.localCallback, this), this.creativeKeyCounter = 0, this.callback = {}
    }
    return e.prototype.getCreative = function(e, t) {
      var n;
      return this.callback = t, n = {
        placement_key: e
      }, STR.Tag.Helpers.AjaxHelper.jsonGet(STR.Tag.AdserverUrl, {
        data: n,
        success: this.localCallback,
        withCredentials: !0
      })
    }, e.prototype.localCallback = function(e) {
      var t, n;
      return t = this.constructCreativeFromQueryString(), e.creatives = this.deepCopyCreatives(t), e.creatives = this.makeCreativeKeysUnique(e.creatives), n = this.getParameterByName("promoted_by_text"), "" !== n && (e.placement.placementAttributes.promoted_by_text = n), this.callback(e)
    }, e.prototype.deepCopyCreatives = function(e) {
      var t, n;
      for (t = 0, n = []; t < 5;) n.push({
        creative: i.extend(!0, {}, e)
      }), t++;
      return n
    }, e.prototype.makeCreativeKeysUnique = function(e) {
      var t, n, i;
      for (n = 0, i = e.length; n < i; n++) t = e[n], t.creative.creative_key = t.creative.creative_key + this.creativeKeyCounter, this.creativeKeyCounter++;
      return e
    }, e.prototype.constructCreativeFromQueryString = function() {
      return i.extend({}, this.creativeParams(), STR.Tag.Helpers.HtmlUtility.getCustomAttributeParams())
    }, e.prototype.creativeParams = function() {
      return {
        action: this.getParameterByName("action"),
        advertiser: this.getParameterByName("advertiser"),
        advertiser_key: "fake-advertiser-key",
        beacons: {
          impression: [],
          visible: [],
          click: [],
          play: [],
          completed_silent_play: [],
          thirty_second_silent_play: [],
          fifteen_second_silent_play: [],
          ten_second_silent_play: [],
          silent_play: []
        },
        brand_logo_url: this.getParameterByName("brand_logo_url"),
        campaign_key: "fake-campaign-key",
        creative_key: "fake-creative-key",
        custom_engagement_label: this.getParameterByName("custom_engagement_label"),
        custom_engagement_url: this.getParameterByName("custom_engagement_url"),
        description: this.getParameterByName("description"),
        media_url: this.getParameterByName("media_url"),
        share_url: this.getParameterByName("share_url"),
        thumbnail_url: this.getParameterByName("thumbnail_url"),
        title: this.getParameterByName("title"),
        variant_key: "fake-variant-key",
        force_click_to_play: this.getParameterByName("force_click_to_play"),
        video_aspect_ratio: this.getVideoAspectRatio(this.getParameterByName("action"))
      }
    }, e.prototype.getParameterByName = function(e) {
      return STR.Tag.Helpers.HtmlUtility.getParameterByName(e) ? decodeURIComponent(decodeURIComponent(STR.Tag.Helpers.HtmlUtility.getParameterByName(e))) : ""
    }, e.prototype.getVideoAspectRatio = function(e) {
      return "video" === e || "hosted-video" === e ? .5625 : null
    }, e
  }(), e.exports = r
}, , , , , function(e, t, n) {
  "use strict";
  n(307);
  var i = n(50).Audit,
    r = n(28);
  i.init(), STR.Tag.Helpers.DfpMessageListener.listen(), (new STR.Tag.Helpers.MediationMessageListener).registerListener(), (new STR.Tag.Helpers.ContentCardEngagementListener).registerListener(), STR.Vendor.$(function() {
    r.noConsentRequired(), STR.Tag.boot()
  })
}, function(e, t, n) {
  n(92), n(200), n(318), n(182), n(183), n(184), n(307), n(153)
}, function(e, t, n) {
  var i, r, a;
  i = n(308), r = n(319), a = n(126), n(311), n(310), n(309), STR.Tag.Factories.CreativeFactory = i, STR.Tag.Factories.FactoryChooser = r, STR.Tag.Factories.MediationWaterfallFactory = a
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o),
    l = n(0),
    c = n(91),
    u = n(320),
    d = n(321),
    p = n(308),
    h = n(309),
    f = n(310),
    m = n(311),
    g = function() {
      function e() {
        (0, a.default)(this, e)
      }
      return (0, s.default)(e, null, [{
        key: "chooseFactories",
        value: function(e, t, n) {
          return l.Helpers.HtmlUtility.getParameterByName("preview_mode") ? new m : c.shouldIntercept() ? u : e ? new h : t ? new f : n ? new d(n) : new p
        }
      }]), e
    }();
  e.exports = g
}, function(e, t, n) {
  "use strict";
  var i = n(91),
    r = n(22),
    a = n(31),
    o = {
      getCreative: function(e, t, n, o, s) {
        var l = "",
          c = {
            placement_key: e
          };
        if (r.getParameterByName("sam")) {
          l = "https://sam.sharethrough.com/api/external/v1/paparazzi_creatives/" + r.getParameterByName("sam")
        } else if (r.getParameterByName("nag")) {
          var u = r.getParameterByName("nag");
          l = "https://generator.sharethrough.com/api/external/v1/paparazzi_creatives/" + u
        } else if (r.getParameterByName("sfp")) {
          var d = r.getParameterByName("sfp");
          l = "https://sfp.sharethrough.com/creatives/" + d + "/iag"
        } else l = STR.Tag.AdserverUrl, c = STR.Vendor.$.extend(c, i.queryParams());
        return a.jsonGet(l, {
          data: c,
          success: t
        })
      }
    };
  e.exports = o
}, function(e, t, n) {
  "use strict";

  function i(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }
  var r = n(3),
    a = i(r),
    o = n(4),
    s = i(o),
    l = n(111),
    c = function() {
      function e(t) {
        (0, a.default)(this, e), this.cacheKey = t
      }
      return (0, s.default)(e, [{
        key: "getCreative",
        value: function(e, t, n, i) {
          var r = window[this.cacheKey];
          r = l.getJsonObject(r), t(r)
        }
      }]), e
    }();
  e.exports = c
}, function(e, t, n) {
  "use strict";
  STR.Tag.Factories = STR.Tag.Factories || {}, e.exports = STR.Tag.Factories
}]);
//# sourceMappingURL=sfp.js.map