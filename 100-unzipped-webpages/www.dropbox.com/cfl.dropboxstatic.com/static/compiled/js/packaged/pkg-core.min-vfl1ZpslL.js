define("modules/clean/ajax", ["require", "exports", "tslib", "jquery", "modules/clean/devtools/panels/performance/perf_hub_action_types", "modules/clean/devtools/panels/performance/perf_hub_actions", "modules/clean/job_progress", "modules/clean/storage", "modules/constants/ajax_strings", "modules/constants/debug", "modules/constants/page_load", "modules/constants/request", "modules/core/browser", "modules/core/exception", "modules/core/html", "modules/core/notify", "modules/core/uri", "modules/clean/csrf", "modules/clean/viewer"], function(e, t, r, n, i, o, s, a, u, l, c, d, _, f, h, p, g, m, v) {
    "use strict";

    function y(e, t) {
        null == e && (e = {}), null == t && (t = []);
        var r;
        null == e.type && (null != e.method ? (f.reportStack("Use of method property within modules/clean/ajax's Request", {
            tags: ["module:ajax"]
        }), r = e.method) : r = "POST", e.type = r);
        var i = new R(e),
            o = L(i, t),
            s = n.default.ajax({
                url: o.url(),
                type: e.type,
                data: o.data(),
                dataType: e.dataType || "text",
                headers: o.headers(),
                traditional: !0,
                xhrFields: o.xhrFields(),
                success: function(e, t, r) {
                    return o.success(e, t, r)
                },
                error: function(e, t, r) {
                    return o.error(e, t, r)
                },
                complete: function(e, t) {
                    return o.complete(e, t)
                },
                async: null == e.async || e.async,
                timeout: e.timeout
            });
        return o.request(s)
    }

    function w(e) {
        return null == e && (e = {}), y(e, ee)
    }

    function b(e) {
        return null == e && (e = {}), y(e, [].concat(V, ee))
    }

    function x(e) {
        return null == e && (e = {}), y(e, te)
    }

    function S(e) {
        return null == e && (e = {}), y(e, re)
    }

    function E(e) {
        return null == e && (e = {}), y(e, [].concat(z, $, X))
    }

    function O(e) {
        return null == e && (e = {}), y(e, ie)
    }

    function k(e) {
        return null == e && (e = {}), y(e, [].concat(V, ie))
    }

    function T(e) {
        null == e && (e = {});
        var t = new R(e),
            r = L(t, X),
            i = n.default.ajax({
                url: r.url(),
                type: "OPTIONS",
                data: r.data(),
                success: function(e, t, n) {
                    return r.success(e, t, n)
                },
                error: function(e, t, n) {
                    return r.error(e, t, n)
                },
                complete: function(e, t) {
                    return r.complete(e, t)
                }
            });
        return r.request(i)
    }

    function A(e) {
        if (null == e && (e = {}), delete e.success, delete e.error, delete e.complete, null == navigator.sendBeacon) return O(e);
        null == e.type && (e.type = "POST");
        var t = new R(e),
            r = L(t, [].concat(ne, D)),
            n = r.url(),
            i = new FormData,
            o = r.data();
        for (var s in o) {
            var a = o[s];
            null != a && "" !== a && i.append(s, a)
        }
        navigator.sendBeacon(n, i) || console.warn("Beacon request failed: " + n)
    }

    function I(e, t) {
        return void 0 !== e && null !== e ? t(e) : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), s = r.__importStar(s), a = r.__importStar(a), u = r.__importStar(u), l = r.__importStar(l), c = r.__importStar(c), d = r.__importStar(d), _ = r.__importStar(_), f = r.__importStar(f);
    t.Request = y;
    var L = function(e, t) {
            for (var r = [e], n = 0, i = Array.from(t.slice(0).reverse()); n < i.length; n++) {
                var o = i[n];
                r.push(new o)
            }
            for (var s = null, a = 0, u = Array.from(r); a < u.length; a++) {
                var o = u[a];
                s && (o.next = s), s = o
            }
            return s
        },
        R = (function() {
            function e(e) {
                null == e && (e = {}), this.options = function() {
                    return e
                }, this.url = function() {
                    return String(e.url || "")
                }, this.data = function() {
                    return e.data || {}
                }, this.headers = function() {
                    return e.headers || {}
                }, this.xhrFields = function() {
                    return e.xhrFields || {}
                }, this.success = e.success || this.identity, this.error = e.error || this.identity, this.complete = e.complete || this.identity, this.request = this.identity
            }
            return e.prototype.identity = function(e) {
                return e
            }, e
        })(),
        C = (function() {
            function e() {}
            return e.prototype.options = function() {
                return this.next.options()
            }, e.prototype.url = function() {
                return this.next.url()
            }, e.prototype.data = function() {
                return this.next.data()
            }, e.prototype.headers = function() {
                return this.next.headers()
            }, e.prototype.xhrFields = function() {
                return this.next.xhrFields()
            }, e.prototype.success = function(e, t, r) {
                return this.next.success(e, t, r)
            }, e.prototype.error = function(e, t, r) {
                return this.next.error(e, t, r)
            }, e.prototype.complete = function(e, t) {
                return this.next.complete(e, t)
            }, e.prototype.request = function(e) {
                return this.next.request(e)
            }, e
        })(),
        P = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.initClass = function() {
                this.prototype.SUPPORTED_TLDS = ["dropbox.com"]
            }, t.prototype.data = function() {
                if (this.options().skipInjectCsrf) return this.next.data();
                f.assert(this._is_db_domain(), "injecting CSRF token into request to non-dropbox domain");
                var e = {
                    is_xhr: !0
                };
                return "get" !== (this.options().type || "post").toLowerCase() && (e.t = m.readCsrfToken()), n.default.extend(e, this.next.data())
            }, t.prototype._is_db_domain = function() {
                var e = g.URI.parse(String(this.url())).getAuthority();
                if (!e) return !0;
                var t = e.split(".");
                return this.SUPPORTED_TLDS.reduce(function(e, r) {
                    var n = r.split("."),
                        i = t.slice(-1 * n.length).join(".");
                    return e || r === i
                }, !1)
            }, t
        })(C);
    P.initClass();
    var M = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.data = function() {
                var e = this.next.data(),
                    t = this.options();
                return t.subject_user && !e._subject_uid && (e._subject_uid = String(t.subject_user)), e
            }, t.prototype.headers = function() {
                var e = this.next.headers(),
                    t = this.options();
                return t.subject_user && (e["X-DROPBOX-UID"] = String(t.subject_user)), e
            }, t
        })(C),
        N = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.headers = function() {
                var e = this.next.headers(),
                    t = this.options().teamAuthParams || {},
                    r = t.team_id || v.Viewer.get_viewer().team_id;
                r && (e["X-Dropbox-Teamid"] = String(r));
                var n = t.auth_role || v.Viewer.get_viewer().auth_role,
                    i = t.auth_action_type || v.Viewer.get_viewer().auth_action_type;
                return (n || i) && (e["X-Dropbox-Team-Authorization"] = JSON.stringify({
                    auth_role: String(n),
                    auth_action_type: String(i)
                })), e
            }, t
        })(C),
        q = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.error = function(e, t, r) {
                if (403 === e.status) {
                    var n = a.SessionStorage.get("reload-timestamp"),
                        i = (new Date).getTime();
                    (!n || i - n > 3e4) && (a.SessionStorage.set("reload-timestamp", i), window.location.reload(!0))
                }
                return this.next.error(e, t, r)
            }, t
        })(C),
        j = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.data = function() {
                var e = this.next.data();
                return null != n.default.ajaxSettings.restrict && (e.restrict = n.default.ajaxSettings.restrict), e
            }, t
        })(C),
        D = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.data = function() {
                var e = this.next.data();
                if (!d.REQUEST_TRACING_ENABLED || "post" !== this.options().type.toLowerCase()) return e;
                var t = {
                    parent_request_id: d.REQUEST_ID
                };
                return n.default.extend(t, e)
            }, t
        })(C),
        U = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.data = function() {
                var e = this.next.data(),
                    t = {};
                return c.PUBLIC_MODE_OVERRIDE && (t.public_mode_override = 1), c.COUNTRY_OVERRIDE && (t.country_override = c.COUNTRY_OVERRIDE), n.default.extend(t, e)
            }, t
        })(C),
        F = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.headers = function() {
                var e = this.next.headers();
                return l.CPROFILE_ENABLED && (e[i.PerfHubHeaderNames.FORCE_REQUEST_TRACING_HEADER] = "ON"), e
            }, t.prototype.url = function() {
                var e = this.next.url();
                if (!l.CPROFILE_ENABLED) return e;
                var t = l.CPROFILE_PARAMETER;
                return 0 !== t.indexOf("deps:") ? g.URI.parse(e).updateQuery({
                    cProfile: t
                }).toString() : e
            }, t.prototype.success = function(e, t, r) {
                var n = r.getResponseHeader(i.PerfHubHeaderNames.SERVER_RESPONSE_TIME) || "-1",
                    s = r.getResponseHeader(i.PerfHubHeaderNames.REQUEST_PROFILE_ID) || "",
                    a = r.getResponseHeader(i.PerfHubHeaderNames.REQUEST_ID);
                return o.PerfHubActions.add_ajax_profile(this.url(), n, s, a), this.next.success(e, t, r)
            }, t
        })(C),
        H = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.error = function(e, t, r) {
                return this._notify_dev(e, t, r), this.next.error(e, t, r)
            }, t.prototype._notify_dev = function(e, t, r) {}, t
        })(C),
        B = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.success = function(e, t, r) {
                var n;
                if (!r.responseText.length) return this.next.error(r, t, "");
                var i = !0,
                    o = !1;
                if (0 === r.responseText.indexOf("err:")) n = r.responseText.substr("err:".length), ["{", "["].includes(n[0]) && (i = !1);
                else {
                    if (0 !== r.responseText.indexOf("htmlerr:")) return this.next.success(e, t, r);
                    n = r.responseText.substr("htmlerr:".length), o = !0
                }
                var s = this.next.error(r, t, n);
                return i && !this.options().skipNotifyError && (o && (n = new h.HTML(n)), p.Notify.error(n)), s
            }, t.prototype.error = function(e, t, r) {
                return "abort" !== t && p.Notify.error(u.PROBLEM_COMPLETING_REQUEST), this.next.error(e, t, r)
            }, t
        })(C),
        J = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.success = function(e, t, r) {
                if (!this.options().skipErrorHandling) {
                    if (!r.responseText.length) return this.next.error(r, t, "");
                    if (0 === r.responseText.indexOf("err:")) {
                        var n = r.responseText.substr("err:".length);
                        return this.next.error(r, t, n)
                    }
                }
                return this.next.success(e, t, r)
            }, t
        })(C),
        G = (function(e) {
            function t() {
                var t = e.call(this) || this;
                return t._clear_working_msg = t._clear_working_msg.bind(t), t
            }
            return r.__extends(t, e), t.prototype.request = function(e) {
                var t = this;
                return this.xhr = e, setTimeout(function() {
                    if (!t._request_finished()) return t._should_show_working_msg() ? (t._show_working_msg(), t.xhr.done(t._clear_working_msg)) : void 0
                }, 4e3), this.next.request(this.xhr)
            }, t.prototype._request_finished = function() {
                return 4 === this.xhr.readyState
            }, t.prototype._should_show_working_msg = function() {
                return p.Notify.isShown()
            }, t.prototype._show_working_msg = function() {
                return this.notification = p.Notify.success(u.STILL_WORKING)
            }, t.prototype._clear_working_msg = function() {
                if (p.Notify.isShown() && this.notification === p.Notify.current()) return p.Notify.clear()
            }, t
        })(C),
        W = (function(e) {
            function t() {
                var t = e.call(this) || this;
                return t._watch = t._watch.bind(t), t
            }
            return r.__extends(t, e), t.prototype.data = function() {
                this.job_id = t.generate_job_id();
                var e = this.next.data();
                this.uid = e._subject_uid;
                var r = this.options().subject_user;
                return !this.uid && r && (this.uid = String(r)), n.default.extend({
                    job_id: this.job_id
                }, e)
            }, t.prototype.request = function(e) {
                return this._interval = 1e3, this._failures = 0, this._watch_count = 0, this._watch_id = setInterval(this._watch, this._interval), this.next.request(e)
            }, t.prototype.success = function(e, t, r) {
                return this.next.success(e, t, r)
            }, t.prototype.error = function(e, t, r) {
                return this.next.error(e, t, r)
            }, t.prototype.complete = function(e, t) {
                return this._stop(), s.Job.handled(this.job_id), this.next.complete(e, t)
            }, t.prototype._watch = function() {
                return s.Job.peek(this.job_id) ? this._stop() : (this._watch_count++, this._watch_count % 10 === 0 && (clearInterval(this._watch_id), this._interval = Math.min(Math.floor(1.5 * this._interval), 3e4), this._watch_id = setInterval(this._watch, this._interval)), this._show_progress_modal(), this._fetch_progress())
            }, t.prototype._stop = function() {
                return clearInterval(this._watch_id), s.ModalProgress.hide()
            }, t.prototype._show_progress_modal = function() {
                if (!this._modal_shown) return this._modal_shown = !0, s.ModalProgress.show(this.options().progress_text)
            }, t.prototype._fetch_progress = function() {
                var e = this,
                    t = {};
                return this.uid && (t._subject_uid = this.uid), E({
                    url: "/job_status/" + this.job_id,
                    data: t,
                    success: function(e, t, r) {
                        var n;
                        return n = 0 === r.responseText.indexOf("done") ? "1/1" : r.responseText, s.ModalProgress.update(n)
                    },
                    error: function(t, r, n) {
                        if (e._failures++, !(e._failures < 3)) return e._stop(), e.next.error(t, r, n)
                    }
                })
            }, t.generate_job_id = function() {
                var e = new Date,
                    t = e.getTime().toString(),
                    r = Math.floor(1e6 * Math.random()).toString();
                return r = ("000000" + r).substring(r.length), t + r
            }, t
        })(C),
        Q = (function(e) {
            function t() {
                var t = e.call(this) || this;
                return t._watch = t._watch.bind(t), t
            }
            return r.__extends(t, e), t.prototype.data = function() {
                var e = this.next.data();
                this.uid = e._subject_uid;
                var t = this.options().subject_user;
                return !this.uid && t && (this.uid = String(t)), e
            }, t.prototype.success = function(e, t, r) {
                return this._is_async_job_response(r) ? (this.job_id = r.responseText.split(":")[1], this._interval = 1e3, this._failures = 0, this._watch_count = 0, this._watch_id = setInterval(this._watch, this._interval)) : this.next.success(e, t, r)
            }, t.prototype.complete = function(e, t) {
                if (!this._is_async_job_response(e)) return this.next.complete(e, t)
            }, t.prototype._is_async_job_response = function(e) {
                return 0 === (null != e.responseText ? e.responseText.indexOf("async_task_started:") : void 0) && e.responseText.split(":")[1].match(/^[A-Za-z0-9_\-=]*$/)
            }, t.prototype._watch = function() {
                return s.Job.peek(this.job_id) ? this._stop() : (this._watch_count++, this._watch_count % 10 === 0 && (clearInterval(this._watch_id), this._interval = Math.min(Math.floor(1.5 * this._interval), 3e4), this._watch_id = setInterval(this._watch, this._interval)), this._show_progress_modal(), this._fetch_progress())
            }, t.prototype._stop = function() {
                return clearInterval(this._watch_id), s.ModalProgress.hide()
            }, t.prototype._show_progress_modal = function() {
                if (!this._modal_shown) return this._modal_shown = !0, s.ModalProgress.show(this.options().progress_text)
            }, t.prototype._fetch_progress = function() {
                var e = this,
                    t = {};
                return this.uid && (t._subject_uid = this.uid), O({
                    url: "/async_task_status/" + this.job_id,
                    data: t,
                    success: function(t, r, n) {
                        var i = n.responseText;
                        if (0 === i.indexOf("done:")) return s.Job.handled(e.job_id), e._stop(), i = i.substr("done:".length), n.responseText = i, e.next.success(i, r, n), e.next.complete(n, r);
                        if (0 === i.indexOf("err:")) {
                            s.Job.handled(e.job_id), e._stop();
                            var o = i.substr("err:".length);
                            return p.Notify.error(o), e.next.error(n, r, o), e.next.complete(n, r)
                        }
                        if (0 === i.indexOf("async_task_err:")) {
                            s.Job.handled(e.job_id), e._stop();
                            var a = i.substr("async_task_err:".length);
                            return p.Notify.error(new h.HTML(a)), e.next.complete(n, r)
                        }
                        return s.ModalProgress.update(i)
                    },
                    error: function(t, r, n) {
                        if (e._failures++, !(e._failures < 3)) return e._stop(), e.next.error(t, r, n), e.next.complete(t, r)
                    }
                })
            }, t
        })(C),
        V = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.data = function() {
                var e = _.get_uri().getQuery().oref;
                return !I(this.next.data(), function(e) {
                    return e.oref
                }) && e ? n.default.extend({
                    oref: e
                }, this.next.data()) : this.next.data()
            }, t
        })(C),
        K = (function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.browser_unload_handler = t.browser_unload_handler.bind(t), t.is_browser_unloading = !1, t
            }
            return r.__extends(t, e), t.prototype.browser_unload_handler = function() {
                this.is_browser_unloading = !0
            }, t.prototype.request = function(e) {
                var t;
                return n.default(window).on("beforeunload", this.browser_unload_handler), (t = this.next).request.apply(t, arguments)
            }, t.prototype.error = function(e, t, r) {
                var n;
                return 0 === e.status && 0 === e.readyState && "error" === t && !r && this.is_browser_unloading ? this.next.error(e, "abort", "unload") : (n = this.next).error.apply(n, arguments)
            }, t.prototype.complete = function() {
                var e;
                return n.default(window).off("beforeunload", this.browser_unload_handler), (e = this.next).complete.apply(e, arguments)
            }, t
        })(C),
        z = [K],
        X = [M, N, P, q, j],
        Y = [G],
        $ = [H, F, D, U],
        Z = [Q],
        ee = [].concat(z, Y, B, $, X, Z);
    t.WebRequest = w, t.WebRequestOref = b;
    var te = [].concat(z, Y, J, $, X, Z);
    t.FormWebRequest = x;
    var re = [].concat(z, Y, B, $, X, W, Z);
    t.WebProgressRequest = S, t.BackgroundRequest = E;
    var ne = [M, N, P, j],
        ie = [].concat(z, $, ne);
    t.SilentBackgroundRequest = O, t.SilentBackgroundRequestOref = k, t.ValidationSchemaRequest = T, t.SilentBackgroundBeaconRequest = A
}), define("modules/clean/analytics", ["require", "exports", "tslib", "jquery", "modules/clean/ajax", "modules/clean/insecure_uuid", "modules/clean/viewer"], function(e, t, r, n, i, o, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i), t.get_uids_for_logging = function(e) {
        var t = s.Viewer.get_viewer();
        return e ? [e] : t.get_users().map(function(e) {
            return e.id
        })
    };
    var a = function(e, t) {
        void 0 === t && (t = !0);
        var r = s.Viewer.get_viewer();
        return e ? [r.get_user_by_id(e).account_id] : r.get_account_ids ? r.get_account_ids(t) : []
    };
    t.BrowseActionsContextMenuLogger = {
        log: function(e, t) {
            for (var r = 0, n = 0, o = e; n < o.length; n++) {
                o[n].is_dir && r++
            }
            var s = e.length - r;
            i.SilentBackgroundRequest({
                url: "/browse_actions_context_menu_logger",
                data: {
                    file_count: s,
                    folder_count: r,
                    action: t
                }
            })
        }
    }, t.UXAnalyticsLogger = {
        log: function(e, t, r) {
            var n = {
                url: "/log/ux_analytics",
                data: {
                    event_type: e,
                    extra_params: JSON.stringify(t)
                }
            };
            r ? i.SilentBackgroundBeaconRequest(n) : i.SilentBackgroundRequest(n)
        }
    }, t.GrowthEventsLogger = {
        log: function(e, t, r, n) {
            i.SilentBackgroundRequest({
                url: "/log/pro_events",
                data: {
                    event: e,
                    extra: JSON.stringify(t),
                    is_client: !!n
                },
                success: r ? r : void 0,
                error: r ? r : void 0
            })
        }
    };
    (function(e) {
        e.BUY_TRY_PAGE_CHECKOUT = "buy_try_page_checkout", e.BUY_TRY_PAGE_CHECKOUT_CRASH = "buy_try_page_checkout_crash"
    })(t.ProEventNames || (t.ProEventNames = {})), t.ProEventsLogger = {
        log: function(e, t, r, n, o) {
            i.SilentBackgroundRequest({
                url: "/log/pro_events",
                data: {
                    event: e,
                    extra: JSON.stringify(t),
                    is_client: !!n,
                    project: o
                },
                success: r ? r : void 0,
                error: r ? r : void 0
            })
        }
    }, t.ProWebActivityLogger = {
        log: function(e, t, r) {
            i.SilentBackgroundRequest({
                url: "/log/pro_web_activity",
                data: {
                    endpoint_name: e,
                    url: t,
                    query_params: r ? JSON.stringify(r) : void 0
                }
            })
        }
    }, t.RestorationStepsLogger = {
        generate_restore_id: function(e) {
            return {
                type: "restore",
                value: "restore#" + e + "#" + o.InsecureUUID.v4()
            }
        },
        restore_id_from_string: function(e) {
            return {
                type: "restore",
                value: e
            }
        },
        log_step: function(e) {
            var t = e.postHandler || void 0;
            i.SilentBackgroundRequest({
                url: "/log/restoration_step/step",
                data: {
                    restore_id: e.restoreId.value,
                    step: e.step,
                    extra: JSON.stringify(e.extra)
                },
                subject_user: e.userId,
                success: t,
                error: t
            })
        },
        log_entry: function(e) {
            var r = e.postHandler || void 0,
                n = e.restoreId || t.RestorationStepsLogger.generate_restore_id(e.userId);
            return i.SilentBackgroundRequest({
                url: "/log/restoration_step/entry",
                data: {
                    restore_id: n.value,
                    step: e.step,
                    entry_point: e.entry_point,
                    extra: JSON.stringify(e.extra)
                },
                subject_user: e.userId,
                success: r,
                error: r
            }), n
        },
        log_success: function(e) {
            var t = e.postHandler || void 0;
            i.SilentBackgroundRequest({
                url: "/log/restoration_step/success",
                data: {
                    restore_id: e.restoreId.value,
                    step: e.step,
                    success: e.success || "success",
                    extra: JSON.stringify(e.extra)
                },
                subject_user: e.userId,
                success: t,
                error: t
            })
        },
        log_failure: function(e) {
            var t = e.postHandler || void 0;
            i.SilentBackgroundRequest({
                url: "/log/restoration_step/failure",
                data: {
                    restore_id: e.restoreId.value,
                    step: e.step,
                    failure: e.failure,
                    extra: JSON.stringify(e.extra)
                },
                subject_user: e.userId,
                success: t,
                error: t
            })
        }
    }, t.PreviewActivityLogger = {
        start_times: {},
        start: function(e, r) {
            t.PreviewActivityLogger.start_times[e] = r || Date.now()
        },
        stop: function(e, r) {
            null != t.PreviewActivityLogger.start_times[e] && (r.total_time = Date.now() - t.PreviewActivityLogger.start_times[e], t.PreviewActivityLogger.log(e, r), delete t.PreviewActivityLogger.start_times[e])
        },
        log: function(e, t) {
            i.SilentBackgroundRequest({
                url: "/preview_activity_log",
                data: {
                    event_name: e,
                    input_method: t.input_method,
                    file_ext: t.file_ext,
                    extra: t.extra
                }
            })
        }
    }, t.MobileFilePreviewLogger = {
        log: function(e, t, r, n, o, s) {
            i.SilentBackgroundRequest({
                url: "/log/mobile_file_preview",
                data: {
                    client_time: +new Date,
                    event_name: e,
                    file_viewer_session_id: t,
                    file_preview_session_id: r,
                    file_ns_id: n,
                    file_sjid: o,
                    extra: JSON.stringify(s)
                }
            })
        }
    }, t.SearchClientActivityLogger = {
        create_search_log_dict: function(e, t, r, n, i, o, s) {
            return null != t && (e.request_id = t), null != r && (e.latency = (new Date).getTime() - r), null != n && (e.query_string = n), null != i && (e.result_count = i), null != o && "200" !== o && (e.failure_type = o), null != s && (e.search_session_id = s), e
        },
        log: function(e, t, n) {
            i.SilentBackgroundRequest({
                url: "/searchclientlogger",
                subject_user: t,
                data: r.__assign({
                    event_name: e,
                    typeahead_session_id: n.search_session_id
                }, n, {
                    extra: JSON.stringify(n.extra)
                })
            })
        }
    }, t.ShareTibEventLogger = {
        log: function(e, t, r, n) {
            i.SilentBackgroundRequest({
                url: "/share_tib_log",
                data: {
                    event: t,
                    origin: r,
                    extra: JSON.stringify(n)
                },
                subject_user: e
            })
        },
        log_unauth: function(e, t, r) {
            i.SilentBackgroundRequest({
                url: "/share_tib_log_unauth",
                data: {
                    event: e,
                    origin: t,
                    extra: JSON.stringify(r)
                }
            })
        }
    }, t.SharingExperimentsLogger = {
        log: function(e, t, r) {
            void 0 === r && (r = {}), i.SilentBackgroundRequest({
                url: "/log/sharing_experiments",
                data: {
                    action_type: t,
                    action_extras: JSON.stringify(r)
                },
                subject_user: e
            })
        }
    }, t.TeamsWebActionsLogger = {
        LOG_CATEGORY: {
            PROMO_TEAMS: "promo_teams",
            TEAM_INFO: "team_info",
            UPGRADE: "upgrade_to_dfb",
            USAGE_INFO: "usage_info",
            LIMITED_TEAM_INFO_DETAILED: "limited_team_info_detailed",
            TEAM_AND_USER_INFO: "team_and_user_info"
        },
        log: function(e, r, n, o, s, a) {
            var u = t.get_uids_for_logging(o);
            return new Promise(function(t, o) {
                i.SilentBackgroundRequest({
                    url: "/teamswalogger",
                    data: {
                        event_name: e,
                        extra: r ? JSON.stringify(r) : void 0,
                        for_uids: JSON.stringify(u),
                        log_category: a,
                        restricted: s ? "1" : void 0
                    },
                    success: n || void 0,
                    error: n || void 0
                }).then(t, o)
            })
        },
        log_for_category: function(e, r, n) {
            t.TeamsWebActionsLogger.log(e, n, void 0, void 0, !1, r)
        },
        registerToLogClickEvent: function(e, r, i) {
            n.default(e).click(function() {
                t.TeamsWebActionsLogger.log(r, void 0, void 0, void 0, !1, i)
            })
        }
    }, t.IntentLogger = {
        log: function(e, t, n, o) {
            var s = a(o),
                u = {};
            t && t.extra && (u = t.extra, delete t.extra);
            var l = r.__assign({
                event_name: e,
                extra: JSON.stringify(u),
                for_acc_ids: JSON.stringify(s)
            }, t);
            i.SilentBackgroundRequest({
                url: "/intentlogger",
                data: l,
                success: n ? n : void 0,
                error: n ? n : void 0
            })
        }
    }, t.UserActivityLogger = {
        start_times: {},
        start: function(e, r, n) {
            t.UserActivityLogger.start_times[r] = n || Date.now()
        },
        stop: function(e, r, n, i) {
            null != t.UserActivityLogger.start_times[r] && (n.total_time = Date.now() - t.UserActivityLogger.start_times[r], t.UserActivityLogger.log(e, r, n, i), delete t.UserActivityLogger.start_times[r])
        },
        log: function(e, r, n, o) {
            n = n || {};
            var s = t.get_uids_for_logging(o);
            i.SilentBackgroundRequest({
                url: "/ualogger",
                data: {
                    platform: e,
                    event_name: r,
                    extra: JSON.stringify(n),
                    for_uids: JSON.stringify(s)
                }
            })
        }
    }, t.ViralLogger = {
        log: function(e, t, r, n) {
            i.SilentBackgroundRequest({
                url: "/virallogger",
                data: {
                    user_ids: JSON.stringify(e),
                    viral_type: t,
                    action: r,
                    extra: JSON.stringify(n || {})
                }
            })
        }
    }, t.WebMiscActivityLogger = {
        log: function(e, r, n, o) {
            var s = t.get_uids_for_logging(n);
            i.SilentBackgroundRequest({
                url: "/misclogger",
                data: {
                    event_name: e,
                    extra: JSON.stringify(r),
                    for_uids: JSON.stringify(s)
                },
                success: o ? o : void 0,
                error: o ? o : void 0
            })
        }
    }, t.SupportExperimentsWebLogger = {
        _log: function(e, t) {
            i.SilentBackgroundRequest({
                url: "/support_experiments_log",
                data: {
                    event_name: e,
                    extra: JSON.stringify(t)
                }
            })
        },
        log_file_restore: function(e) {
            t.SupportExperimentsWebLogger._log("file_restore", {
                ref: e
            })
        }
    };
    var u = (function() {
        function e(e, t) {
            void 0 === e && (e = null), this.context = e, this.search_mode = t, this._clear_buffers()
        }
        return e.prototype._clear_buffers = function() {
            this.selection_buffer = [], this.timing_buffer = [], this.total_searches = 0, this.slow_searches = 0, this.downloaded_contacts = null, this.downloading_time = null
        }, e.prototype.add_record = function(e) {
            e.deleted = !1, this.selection_buffer.push(e)
        }, e.prototype.flag_record_as_removed = function(e) {
            for (var t = 0, r = this.selection_buffer; t < r.length; t++) {
                var n = r[t];
                if (n.contact_id === e && !n.deleted) return void(n.deleted = !0)
            }
        }, e.prototype.add_timing_record = function(e) {
            this.timing_buffer.push(e)
        }, e.prototype.count_search = function(e) {
            this.total_searches += 1, e && (this.slow_searches += 1)
        }, e.prototype.add_downloading_stats = function(e) {
            e && (this.downloading_time = e.downloading_time, this.downloaded_contacts = e.num_contacts)
        }, e.prototype.log_records = function(e, t, r) {
            void 0 === r && (r = 0);
            var n = {
                events: JSON.stringify(this.selection_buffer),
                canceled: t
            };
            if (this.total_searches || this.timing_buffer.length) {
                var o = {
                    context: this.context,
                    search_mode: this.search_mode,
                    total_searches: this.total_searches,
                    slow_searches: this.slow_searches,
                    downloading_time: this.downloading_time,
                    downloaded_contacts: this.downloaded_contacts
                };
                n.total_contacts = r, n.timing_events = JSON.stringify(this.timing_buffer), n.session_summary = JSON.stringify(o)
            }
            i.SilentBackgroundRequest({
                url: "/contact_search_log",
                subject_user: e,
                data: n
            }), this._clear_buffers()
        }, e
    })();
    t.ContactSearchLogger = u, t.LegacySharingVortexLogger = {
        log: function(e) {
            i.SilentBackgroundRequest({
                url: "/legacy_sharing_vortex_log",
                data: {
                    event_name: e
                }
            })
        }
    }, t.WebOnboardingLogger = {
        log: function(e, t, r, n, o) {
            i.SilentBackgroundRequest({
                url: "/log/onboarding",
                data: {
                    module_name: t,
                    event_name: r,
                    status: n,
                    extra: JSON.stringify(o)
                },
                subject_user: e
            })
        }
    }, t.NQOQLogger = {
        logViewModal: function(e, r) {
            var n = {
                modal_type: r.modal_type
            };
            t.ProEventsLogger.log(e + "_view", n)
        },
        logCloseModal: function(e, r) {
            var n = {
                modal_type: r.modal_type,
                cta_type: "close"
            };
            t.ProEventsLogger.log(e + "_click", n)
        },
        logPreviewLink: function(e, r) {
            var n = {
                modal_type: r.modal_type,
                cta_type: "secondary",
                cta_text: "preview link"
            };
            t.ProEventsLogger.log(e + "_click", n)
        },
        logCancelModal: function(e, r) {
            var n = {
                modal_type: r.modal_type,
                cta_type: "secondary",
                cta_text: "cancel"
            };
            t.ProEventsLogger.log(e + "_click", n)
        },
        logAcceptModal: function(e, r) {
            var n = {
                modal_type: r.modal_type,
                cta_type: "primary",
                cta_text: r.cta_text
            };
            t.ProEventsLogger.log(e + "_click", n)
        }
    }
}), define("modules/clean/css", ["require", "exports", "modules/clean/static_urls", "modules/core/exception", "modules/core/uri"], function(e, t, r, n, i) {
    "use strict";

    function o(e) {
        var t = e;
        return t._cssCache || (t._cssCache = {
            loaded_css: Object.create(null),
            already_loaded_css_paths: Object.create(null)
        }), t._cssCache
    }

    function s(e) {
        void 0 === e && (e = document);
        for (var t = o(e), r = e.querySelectorAll('link[rel="stylesheet"]'), n = 0; n < r.length; n++) {
            var s = r[n],
                a = i.URI.parse(s.href).getPath();
            null == t.already_loaded_css_paths[a] && (t.loaded_css[a] = Promise.resolve(), t.already_loaded_css_paths[a] = "loaded")
        }
    }

    function a(e) {
        return 'url("' + String(e).replace(/\\/g, "\\\\").replace(/"/g, '\\"') + '")'
    }

    function u(e, t, i, s) {
        void 0 === s && (s = document), n.assert(e.startsWith("/static/"), "invalid static css path: " + e);
        var a = o(s),
            u = a.loaded_css[e];
        return u || (u = new Promise(function(t, n) {
            var i = s.createElement("link");
            return i.href = r.static_url(e), i.rel = "stylesheet", i.type = "text/css", i.crossorigin = "anonymous", i.onload = function() {
                return a.already_loaded_css_paths[e] = "loaded", t()
            }, i.onerror = n, s.head.appendChild(i)
        }), a.loaded_css[e] = u, a.already_loaded_css_paths[e] = "downloading"), u.then(t, i)
    }

    function l(e, t, r, n) {
        void 0 === n && (n = document);
        var i = e.map(function(e) {
            return u(e, void 0, void 0, n)
        });
        return Promise.all(i).then(t, r)
    }

    function c(e, t) {
        void 0 === t && (t = document);
        var r = o(t);
        return !!e.every(function(e) {
            return n.assert(e.startsWith("/static/"), "invalid static css path: " + e), "loaded" === r.already_loaded_css_paths[e]
        }) || (s(t), e.every(function(e) {
            return "loaded" === r.already_loaded_css_paths[e]
        }))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), s(), t.css_url = a, t.require_css = u, t.require_css_multi = l, t.is_loaded = c
}), define("modules/clean/dbmodal_stack", ["require", "exports", "tslib", "jquery"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var i = (function() {
        function e() {}
        return e.initClass = function() {
            this.__stack = [], this.CLEAR = "dbmodal:clear"
        }, e.pop = function(t) {
            null != t ? e.remove(t) : t = e.__stack.pop(), null != t && t._hide();
            var r = e.top();
            null != r ? r._show() : n.default(document).trigger(e.CLEAR)
        }, e.push = function(t) {
            e.remove(t);
            var r = e.top();
            (null != r ? r.visible : void 0) && r._hide(), e.__stack.push(t), t._show()
        }, e.top = function() {
            var t = e.__stack.length;
            return t ? e.__stack[t - 1] : null
        }, e.remove = function(t) {
            for (var r = [], n = 0, i = Array.from(e.__stack); n < i.length; n++) {
                var o = i[n];
                o !== t && r.push(o)
            }
            e.__stack = r
        }, e.clear = function() {
            for (var t = e.__stack.length - 1; t >= 0; t--) {
                var r = e.__stack[t];
                r.visible && r._hide()
            }
            n.default(document).trigger(e.CLEAR), e.__stack = []
        }, e.register = function(t, r) {
            n.default(document).on(t, r), n.default(document).on(e.CLEAR, function() {
                return n.default(document).off(t, r)
            })
        }, e.unregister = function(e, t) {
            n.default(document).off(e, t)
        }, e.trigger = function(e, t) {
            n.default(document).trigger(e, t)
        }, e
    })();
    t.DBModalStack = i, i.initClass()
}), define("modules/clean/devtools/panels/performance/perf_hub_action_types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.PROFILED_AJAX_LOAD_FINISHED = "PROFILED_AJAX_LOAD_FINISHED", e.WEB_TIMING_FETCHED = "WEB_TIMING_FETCHED"
    })(t.ActionTypes || (t.ActionTypes = {}));
    (function(e) {
        e.SERVER_RESPONSE_TIME = "x-server-response-time", e.REQUEST_PROFILE_ID = "x-dropbox-request-profile-id", e.REQUEST_ID = "x-dropbox-request-id", e.FORCE_REQUEST_TRACING_HEADER = "x-dropbox-force-request-tracing"
    })(t.PerfHubHeaderNames || (t.PerfHubHeaderNames = {}))
}), define("modules/clean/devtools/panels/performance/perf_hub_actions", ["require", "exports", "modules/clean/devtools/panels/performance/perf_hub_action_types", "modules/clean/flux/dispatcher"], function(e, t, r, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function() {
        function e() {}
        return e.prototype.add_ajax_profile = function(e, t, i, o) {
            var s = o ? o.substring(0, Math.min(o.length, 16)) : o;
            return n.Dispatcher.dispatch({
                type: r.ActionTypes.PROFILED_AJAX_LOAD_FINISHED,
                data: {
                    url: e,
                    serverResponseTime: t,
                    profileRequestId: i,
                    traceId: s
                }
            })
        }, e.prototype.add_web_timing_details = function(e) {
            return n.Dispatcher.dispatch({
                type: r.ActionTypes.WEB_TIMING_FETCHED,
                data: e
            })
        }, e
    })();
    t.PerfHubActions = new i
}), define("modules/clean/em_string", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function() {
        function e(t) {
            if (!(this instanceof e)) return new e(t);
            this.s = t, this.info = this.widthInfo(), this.length = t.length ? this.info[this.s.length - 1] : 0
        }
        return e.initClass = function() {
            this.ACCURACY = 2, this.CODEPOINT_TO_WIDTH = {
                32: 38,
                33: 25,
                34: 42,
                35: 67,
                36: 58,
                37: 92,
                38: 75,
                39: 25,
                40: 33,
                41: 33,
                42: 58,
                43: 58,
                44: 25,
                45: 33,
                46: 25,
                47: 42,
                48: 58,
                49: 58,
                50: 58,
                51: 58,
                52: 58,
                53: 58,
                54: 58,
                55: 58,
                56: 58,
                57: 58,
                58: 25,
                59: 25,
                60: 58,
                61: 58,
                62: 58,
                63: 50,
                64: 100,
                65: 67,
                66: 67,
                67: 67,
                68: 75,
                69: 58,
                70: 58,
                71: 75,
                72: 83,
                73: 33,
                74: 25,
                75: 67,
                76: 58,
                77: 100,
                78: 83,
                79: 83,
                80: 67,
                81: 83,
                82: 67,
                83: 58,
                84: 58,
                85: 75,
                86: 67,
                87: 100,
                88: 67,
                89: 58,
                90: 58,
                91: 33,
                92: 42,
                93: 33,
                94: 58,
                95: 50,
                96: 67,
                97: 58,
                98: 67,
                99: 50,
                100: 67,
                101: 58,
                102: 33,
                103: 58,
                104: 67,
                105: 25,
                106: 25,
                107: 58,
                108: 25,
                109: 100,
                110: 67,
                111: 67,
                112: 67,
                113: 67,
                114: 42,
                115: 50,
                116: 42,
                117: 67,
                118: 58,
                119: 83,
                120: 58,
                121: 58,
                122: 50,
                123: 42,
                124: 58,
                125: 42,
                126: 58,
                161: 25,
                162: 58,
                163: 58,
                164: 58,
                165: 58,
                166: 58,
                167: 58,
                168: 67,
                169: 92,
                170: 42,
                171: 50,
                172: 58,
                174: 92,
                175: 58,
                176: 50,
                177: 58,
                178: 42,
                179: 42,
                180: 67,
                181: 67,
                182: 75,
                183: 25,
                184: 25,
                185: 42,
                186: 42,
                187: 50,
                188: 83,
                189: 83,
                190: 83,
                191: 50,
                192: 67,
                193: 67,
                194: 67,
                195: 67,
                196: 67,
                197: 67,
                198: 92,
                199: 67,
                200: 58,
                201: 58,
                202: 58,
                203: 58,
                204: 33,
                205: 33,
                206: 33,
                207: 33,
                208: 75,
                209: 83,
                210: 83,
                211: 83,
                212: 83,
                213: 83,
                214: 83,
                215: 58,
                216: 83,
                217: 75,
                218: 75,
                219: 75,
                220: 75,
                221: 58,
                222: 67,
                223: 67,
                224: 58,
                225: 58,
                226: 58,
                227: 58,
                228: 58,
                229: 58,
                230: 92,
                231: 50,
                232: 58,
                233: 58,
                234: 58,
                235: 58,
                236: 25,
                237: 25,
                238: 25,
                239: 25,
                240: 67,
                241: 67,
                242: 67,
                243: 67,
                244: 67,
                245: 67,
                246: 67,
                247: 58,
                248: 67,
                249: 67,
                250: 67,
                251: 67,
                252: 67,
                253: 58,
                254: 67,
                255: 58,
                256: 75,
                257: 67,
                258: 75,
                259: 67,
                260: 75,
                261: 67,
                262: 75,
                263: 58,
                264: 75,
                265: 58,
                266: 75,
                267: 58,
                268: 75,
                269: 58,
                270: 83,
                271: 83,
                272: 83,
                273: 75,
                274: 67,
                275: 67,
                276: 67,
                277: 67,
                278: 67,
                279: 67,
                280: 67,
                281: 67,
                282: 67,
                283: 67,
                284: 83,
                285: 75,
                286: 83,
                287: 75,
                288: 83,
                289: 75,
                290: 83,
                291: 75,
                292: 83,
                293: 75,
                294: 92,
                295: 75,
                296: 33,
                297: 33,
                298: 33,
                299: 33,
                300: 33,
                301: 33,
                302: 33,
                303: 33,
                304: 33,
                305: 25,
                306: 67,
                307: 67,
                308: 42,
                309: 33,
                310: 75,
                311: 67,
                312: 67,
                313: 58,
                314: 33,
                315: 58,
                316: 33,
                317: 58,
                318: 42,
                319: 58,
                320: 50,
                321: 67,
                322: 42,
                323: 83,
                324: 75,
                325: 83,
                326: 75,
                327: 83,
                328: 75,
                329: 83,
                330: 83,
                331: 75,
                332: 92,
                333: 67,
                334: 92,
                335: 67,
                336: 92,
                337: 67,
                338: 100,
                339: 100,
                340: 75,
                341: 50,
                342: 75,
                343: 50,
                344: 75,
                345: 50,
                346: 67,
                347: 58,
                348: 67,
                349: 58,
                350: 67,
                351: 58,
                352: 67,
                353: 58,
                354: 75,
                355: 42,
                356: 75,
                357: 42,
                358: 75,
                359: 42,
                360: 83,
                361: 75,
                362: 83,
                363: 75,
                364: 83,
                365: 75,
                366: 83,
                367: 75,
                368: 83,
                369: 75,
                370: 83,
                371: 75,
                372: 100,
                373: 92,
                374: 75,
                375: 58,
                376: 75,
                377: 67,
                378: 67,
                379: 67,
                380: 67,
                381: 67,
                382: 67,
                383: 42,
                384: 75,
                385: 83,
                386: 67,
                387: 75,
                388: 75,
                389: 67,
                390: 75,
                391: 83,
                392: 58,
                393: 83,
                394: 100,
                395: 67,
                396: 75,
                397: 67,
                398: 67,
                399: 75,
                400: 58,
                401: 58,
                402: 75,
                403: 83,
                404: 75,
                405: 100,
                406: 50,
                407: 50,
                408: 75,
                409: 67,
                410: 50,
                411: 67,
                412: 117,
                413: 83,
                414: 75,
                415: 92,
                416: 92,
                417: 75,
                418: 117,
                419: 100,
                420: 75,
                421: 75,
                422: 75,
                423: 67,
                424: 58,
                425: 67,
                426: 58,
                427: 42,
                428: 75,
                429: 42,
                430: 75,
                431: 83,
                432: 75,
                433: 92,
                434: 83,
                435: 75,
                436: 75,
                437: 67,
                438: 67,
                439: 67,
                440: 67,
                441: 58,
                442: 58,
                443: 75,
                444: 75,
                445: 58,
                446: 50,
                447: 67,
                448: 33,
                449: 50,
                450: 50,
                451: 33,
                452: 142,
                453: 142,
                454: 133,
                455: 100,
                456: 92,
                457: 67,
                458: 117,
                459: 117,
                460: 100,
                461: 75,
                462: 67,
                463: 33,
                464: 33,
                465: 92,
                466: 67,
                467: 83,
                468: 75,
                469: 83,
                470: 75,
                471: 83,
                472: 75,
                473: 83,
                474: 75,
                475: 83,
                476: 75,
                477: 67,
                478: 75,
                479: 67,
                480: 75,
                481: 67,
                482: 100,
                483: 100,
                484: 92,
                485: 75,
                486: 83,
                487: 75,
                488: 75,
                489: 67,
                490: 92,
                491: 67,
                492: 92,
                493: 67,
                494: 67,
                495: 58,
                496: 33,
                497: 142,
                498: 142,
                499: 133,
                500: 83,
                501: 75,
                502: 117,
                503: 67,
                504: 83,
                505: 75,
                506: 75,
                507: 67,
                508: 100,
                509: 100,
                510: 92,
                511: 67,
                512: 75,
                513: 67,
                514: 75,
                515: 67,
                516: 67,
                517: 67,
                518: 67,
                519: 67,
                520: 33,
                521: 33,
                522: 33,
                523: 33,
                524: 92,
                525: 67,
                526: 92,
                527: 67,
                528: 75,
                529: 50,
                530: 75,
                531: 50,
                532: 83,
                533: 75,
                534: 83,
                535: 75,
                536: 67,
                537: 58,
                538: 75,
                539: 42,
                540: 58,
                541: 58,
                542: 83,
                543: 75,
                544: 83,
                545: 100,
                546: 92,
                547: 67,
                548: 67,
                549: 67,
                550: 75,
                551: 67,
                552: 67,
                553: 67,
                554: 92,
                555: 67,
                556: 92,
                557: 67,
                558: 92,
                559: 67,
                560: 92,
                561: 67,
                562: 75,
                563: 58,
                564: 67,
                565: 100,
                566: 67,
                567: 33,
                568: 100,
                569: 100,
                570: 75,
                571: 75,
                572: 58,
                573: 58,
                574: 67,
                575: 58,
                576: 58,
                577: 67,
                578: 50,
                579: 75,
                580: 75,
                581: 75,
                582: 75,
                583: 58,
                584: 58,
                585: 25,
                586: 83,
                587: 58,
                588: 75,
                589: 33,
                590: 75,
                591: 58,
                880: 67,
                881: 50,
                882: 67,
                883: 50,
                884: 33,
                885: 33,
                886: 75,
                887: 67,
                888: 108,
                889: 108,
                890: 67,
                891: 58,
                892: 58,
                893: 58,
                894: 42,
                895: 108,
                896: 108,
                897: 108,
                898: 108,
                899: 108,
                900: 67,
                901: 67,
                902: 75,
                903: 42,
                904: 83,
                905: 100,
                906: 58,
                907: 108,
                908: 100,
                909: 108,
                910: 100,
                911: 100,
                912: 42,
                913: 75,
                914: 67,
                915: 58,
                916: 83,
                917: 67,
                918: 67,
                919: 83,
                920: 92,
                921: 33,
                922: 75,
                923: 75,
                924: 100,
                925: 83,
                926: 75,
                927: 92,
                928: 83,
                929: 67,
                930: 108,
                931: 67,
                932: 75,
                933: 75,
                934: 83,
                935: 75,
                936: 83,
                937: 92,
                938: 33,
                939: 75,
                940: 83,
                941: 58,
                942: 75,
                943: 42,
                944: 67,
                945: 83,
                946: 67,
                947: 67,
                948: 67,
                949: 58,
                950: 75,
                951: 75,
                952: 67,
                953: 42,
                954: 67,
                955: 67,
                956: 75,
                957: 67,
                958: 67,
                959: 67,
                960: 92,
                961: 67,
                962: 67,
                963: 75,
                964: 67,
                965: 67,
                966: 92,
                967: 67,
                968: 92,
                969: 100,
                970: 42,
                971: 67,
                972: 67,
                973: 67,
                974: 100,
                975: 108,
                976: 58,
                977: 75,
                978: 75,
                979: 100,
                980: 75,
                981: 92,
                982: 100,
                983: 67,
                984: 92,
                985: 67,
                986: 75,
                987: 58,
                988: 58,
                989: 58,
                990: 67,
                991: 58,
                992: 75,
                993: 92,
                994: 100,
                995: 92,
                996: 75,
                997: 58,
                998: 75,
                999: 58,
                1e3: 75,
                1001: 75,
                1002: 67,
                1003: 67,
                1004: 83,
                1005: 58,
                1006: 50,
                1007: 42,
                1008: 67,
                1009: 67,
                1010: 58,
                1011: 33,
                1012: 92,
                1013: 58,
                1014: 58,
                1015: 67,
                1016: 67,
                1017: 75,
                1018: 100,
                1019: 83,
                1020: 58,
                1021: 75,
                1022: 75,
                1023: 75,
                1024: 67,
                1025: 67,
                1026: 92,
                1027: 58,
                1028: 75,
                1029: 67,
                1030: 33,
                1031: 33,
                1032: 42,
                1033: 108,
                1034: 108,
                1035: 83,
                1036: 75,
                1037: 83,
                1038: 75,
                1039: 83,
                1040: 75,
                1041: 67,
                1042: 67,
                1043: 58,
                1044: 83,
                1045: 67,
                1046: 92,
                1047: 67,
                1048: 83,
                1049: 83,
                1050: 75,
                1051: 83,
                1052: 100,
                1053: 83,
                1054: 92,
                1055: 83,
                1056: 67,
                1057: 75,
                1058: 75,
                1059: 75,
                1060: 83,
                1061: 75,
                1062: 83,
                1063: 75,
                1064: 108,
                1065: 108,
                1066: 75,
                1067: 92,
                1068: 67,
                1069: 75,
                1070: 108,
                1071: 75,
                1072: 67,
                1073: 67,
                1074: 58,
                1075: 58,
                1076: 75,
                1077: 67,
                1078: 83,
                1079: 58,
                1080: 75,
                1081: 75,
                1082: 67,
                1083: 67,
                1084: 83,
                1085: 75,
                1086: 67,
                1087: 75,
                1088: 75,
                1089: 58,
                1090: 58,
                1091: 58,
                1092: 92,
                1093: 67,
                1094: 75,
                1095: 58,
                1096: 92,
                1097: 100,
                1098: 67,
                1099: 83,
                1100: 58,
                1101: 58,
                1102: 92,
                1103: 58,
                1104: 67,
                1105: 67,
                1106: 75,
                1107: 58,
                1108: 58,
                1109: 58,
                1110: 33,
                1111: 33,
                1112: 42,
                1113: 92,
                1114: 92,
                1115: 75,
                1116: 67,
                1117: 75,
                1118: 58,
                1119: 75,
                1120: 100,
                1121: 75,
                1122: 75,
                1123: 67,
                1124: 83,
                1125: 83,
                1126: 75,
                1127: 67,
                1128: 100,
                1129: 92,
                1130: 92,
                1131: 83,
                1132: 117,
                1133: 108,
                1134: 67,
                1135: 67,
                1136: 83,
                1137: 83,
                1138: 92,
                1139: 67,
                1140: 83,
                1141: 67,
                1142: 83,
                1143: 67,
                1144: 133,
                1145: 125,
                1146: 92,
                1147: 67,
                1148: 100,
                1149: 75,
                1150: 100,
                1151: 75,
                1152: 75,
                1153: 58,
                1154: 75,
                1155: 0,
                1156: 0,
                1157: 0,
                1158: 0,
                1159: 108,
                1160: 0,
                1161: 0,
                1162: 83,
                1163: 75,
                1164: 67,
                1165: 58,
                1166: 67,
                1167: 75,
                1168: 58,
                1169: 58,
                1170: 67,
                1171: 58,
                1172: 75,
                1173: 67,
                1174: 100,
                1175: 92,
                1176: 67,
                1177: 58,
                1178: 75,
                1179: 67,
                1180: 83,
                1181: 75,
                1182: 75,
                1183: 67,
                1184: 83,
                1185: 75,
                1186: 83,
                1187: 75,
                1188: 100,
                1189: 83,
                1190: 117,
                1191: 100,
                1192: 92,
                1193: 75,
                1194: 75,
                1195: 58,
                1196: 75,
                1197: 58,
                1198: 75,
                1199: 58,
                1200: 75,
                1201: 58,
                1202: 75,
                1203: 75,
                1204: 100,
                1205: 83,
                1206: 75,
                1207: 67,
                1208: 75,
                1209: 67,
                1210: 75,
                1211: 58,
                1212: 92,
                1213: 75,
                1214: 92,
                1215: 75,
                1216: 33,
                1217: 92,
                1218: 83,
                1219: 75,
                1220: 67,
                1221: 83,
                1222: 67,
                1223: 83,
                1224: 75,
                1225: 83,
                1226: 75,
                1227: 75,
                1228: 58,
                1229: 100,
                1230: 83,
                1231: 25,
                1232: 75,
                1233: 67,
                1234: 75,
                1235: 67,
                1236: 100,
                1237: 100,
                1238: 67,
                1239: 67,
                1240: 75,
                1241: 67,
                1242: 75,
                1243: 67,
                1244: 92,
                1245: 83,
                1246: 67,
                1247: 58,
                1248: 67,
                1249: 58,
                1250: 83,
                1251: 75,
                1252: 83,
                1253: 75,
                1254: 92,
                1255: 67,
                1256: 92,
                1257: 67,
                1258: 92,
                1259: 67,
                1260: 75,
                1261: 58,
                1262: 75,
                1263: 58,
                1264: 75,
                1265: 58,
                1266: 75,
                1267: 58,
                1268: 75,
                1269: 58,
                1270: 58,
                1271: 42,
                1272: 92,
                1273: 83,
                1274: 58,
                1275: 42,
                1276: 75,
                1277: 58,
                1278: 75,
                1279: 58,
                2026: 67,
                19977: 108,
                65403: 58
            }, this._ELLIPSIS_LENGTH = new e("…").length
        }, e.em_snippet = function(t, r, n) {
            return null == r && (r = 50), null == n && (n = .75), new e(t.toString()).snippet(r, n).toString()
        }, e.prototype.widthInfo = function() {
            var e = {};
            e[-1] = 0;
            for (var t = 0, r = this.s.length, n = 0 <= r; n ? t < r : t > r; n ? t++ : t--) e[t] = e[t - 1] + this.ems(this.s.charAt(t));
            return e
        }, e.prototype.findSpot = function(e) {
            var t;
            if (!e) return 0;
            for (var r = 0, n = this.s.length; r <= n;) {
                t = Math.floor(r / 2 + n / 2);
                var i = this.info[t - 1];
                if (i > e) n = t - 1;
                else {
                    if (!(i < e)) return t;
                    r = t + 1
                }
            }
            return r > t ? r : t
        }, e.prototype.ems = function(t) {
            var r = t.charCodeAt(0),
                n = e.CODEPOINT_TO_WIDTH[r];
            return n ? n / Math.pow(10, e.ACCURACY) : 768 <= r && r <= 879 ? 0 : 65377 <= r && r <= 65500 ? .58 : 11904 <= r && r <= 40911 || 44032 <= r && r <= 55215 || 4352 <= r && r <= 4607 || 63744 <= r && r <= 64255 || 65280 <= r && r <= 65535 || 131072 <= r && r <= 196607 ? 1.08 : .65
        }, e.prototype.substr = function(t, r) {
            var n = this.findSpot(t);
            if (null != r) {
                var i = this.findSpot(t + r);
                if (i - n < this.s.length) {
                    var o = this.s.charCodeAt(i - n);
                    65024 <= o && o <= 65039 && i--
                }
                return new e(this.s.substr(n, i - n))
            }
            return new e(this.s.substr(n))
        }, e.prototype.toString = function() {
            return this.s
        }, e.prototype.snippet = function(t, r) {
            if (void 0 === t && (t = 50), void 0 === r && (r = .75), this.length <= t) return this;
            t -= e._ELLIPSIS_LENGTH;
            var n = t * r,
                i = t - n,
                o = this.length - i,
                s = this.substr(0, n),
                a = this.substr(o);
            return new e(s.toString() + "…" + a.toString())
        }, e
    })();
    t.Emstring = r, r.initClass()
}), define("modules/clean/event_load", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e) {
        return window.setTimeout(function() {
            return e.apply(e)
        }, 0)
    };
    t.window_load = function(e) {
        "complete" === document.readyState && r(e), window.addEventListener("load", e, !1)
    }
}), define("modules/clean/filepath", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        return e ? ("/" !== e.charAt(0) && (e = "/" + e), "/" === e.charAt(e.length - 1) ? e.substr(0, e.length - 1) : e) : ""
    }

    function n(e, t) {
        return r(e).toLowerCase() === r(t).toLowerCase()
    }

    function i(e) {
        if (!e.length) return !1;
        var t = d(e[0]);
        return !e.find(function(e) {
            return d(e) !== t
        })
    }

    function o(e, t) {
        e = r(e);
        var n = e.split("/");
        t = r(t);
        var i = t.split("/");
        if (i.length <= n.length) return !1;
        for (var o = 0; o < n.length; o++)
            if (n[o] !== i[o]) return !1;
        return !0
    }

    function s(e, t) {
        e = r(e);
        var n = e.split("/"),
            i = n.pop();
        return i ? i : t || "Dropbox"
    }

    function a(e) {
        return e ? e.indexOf(".") === -1 ? e : e.split(".").slice(0, -1).join(".") : ""
    }

    function u(e) {
        if (!e) return {
            name: "",
            ext: ""
        };
        var t = e.split("."),
            r = e.length > 0 && "." === e[0],
            n = e.indexOf(".") < 0;
        r && (n = t.length <= 2);
        var i = t.pop();
        return i && !n ? {
            name: t.join("."),
            ext: i
        } : {
            name: e,
            ext: ""
        }
    }

    function l(e) {
        return u(e).ext.toLowerCase()
    }

    function c(e) {
        return e.indexOf(".") === -1 ? "" : l(e).toLowerCase()
    }

    function d(e) {
        return e.split("/").slice(0, -1).join("/") || "/"
    }

    function _(e) {
        for (var t = [], r = d(e);
            "/" !== r;) t.push(r), r = d(r);
        return t
    }

    function f(e) {
        return e.split("/").pop() || ""
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.normalize = r, t.paths_are_equal = n, t.inSameDirectory = i, t.inSubDirectory = o, t.filename = s, t.filename_without_extension = a, t.split_filename = u, t.file_extension = l, t.file_extension_for_logging = c, t.parent_dir = d, t.parent_dirs = _, t.child_dir = f
}), define("modules/clean/flux/dispatcher", ["require", "exports", "tslib", "external/flux", "modules/core/exception"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importStar(i);
    var o = null,
        s = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return r.__extends(t, e), t.prototype.dispatch = function(t) {
                i.assert(null != t.type, "Invariant error: cannot dispatch action without 'type' property."), i.assert(null === o, "Invariant error: cannot dispatch " + t.type + " while also dispatching " + o + "."), o = t.type;
                try {
                    "function" == typeof this.dispatch_begin && this.dispatch_begin();
                    try {
                        return e.prototype.dispatch.call(this, {
                            action: t
                        })
                    } catch (e) {
                        return i.reportException({
                            err: e
                        }), console.error(e)
                    } finally {
                        "function" == typeof this.dispatch_end && this.dispatch_end()
                    }
                } finally {
                    o = null
                }
            }, t
        })(n.Dispatcher);
    t.DispatcherClass = s;
    var a = new s;
    t.Dispatcher = a
}), define("modules/clean/global_constants", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.GlobalConstants = window.GlobalConstants
}), define("modules/clean/insecure_uuid", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = (function() {
            var e, t, r = [];
            for (t = 0, e = t; t <= 255; t++, e = t) r.push((e + 256).toString(16).substr(1));
            return r
        })(),
        n = (function() {
            function e() {}
            return e.bytesToHex = function(e) {
                return e.map(function(e) {
                    return r[e]
                }).join("")
            }, e.toByte = function(e) {
                return 255 & e
            }, e.bytesToUUIDString = function(e) {
                var t = this;
                return [e.slice(0, 4), e.slice(4, 6), e.slice(6, 8), e.slice(8, 10), e.slice(10, 16)].map(function(e) {
                    return t.bytesToHex(e)
                }).join("-")
            }, e.getRandomBytes = function() {
                var e = this,
                    t = new Array(16);
                return this.getInsecureRandomValues(t), t.map(function(t) {
                    return e.toByte(t)
                })
            }, e.getInsecureRandomValues = function(e) {
                for (var t = Math.pow(2, 8), r = 0; r < e.length; r++) e[r] = Math.floor(Math.random() * t);
                return e
            }, e.v4 = function() {
                var e = this.getRandomBytes();
                return e[6] = 15 & e[6] | 64, e[8] = 63 & e[8] | 128, this.bytesToUUIDString(e)
            }, e
        })();
    t.InsecureUUID = n
}), define("modules/clean/job_progress", ["require", "exports", "tslib", "jquery", "modules/clean/dbmodal_stack", "modules/core/dom"], function(e, t, r, n, i, o) {
    "use strict";

    function s(e, t) {
        return void 0 !== e && null !== e ? t(e) : void 0
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), o = r.__importStar(o);
    var a = {
            make: function(e, t) {
                void 0 === t && (t = 300);
                var r = t.toString() + "px",
                    i = n.default("<div />", {
                        class: "outer-progress-bar"
                    }).css({
                        width: r
                    }),
                    o = n.default("<div />", {
                        class: "inner-progress-bar",
                        id: "pb_" + e
                    }).css({
                        width: r
                    }),
                    s = n.default("<div />", {
                        class: "under-pb progress-bar"
                    }).css({
                        width: r
                    }),
                    a = n.default("<div />", {
                        class: "over-pb progress-bar",
                        id: "pb_" + e + "_over"
                    }).css({
                        display: "none"
                    }),
                    u = n.default("<div />", {
                        class: "pb-percentage",
                        id: "pb_" + e + "_upct"
                    }).css({
                        width: r
                    }),
                    l = n.default("<div />", {
                        class: "pb-percentage",
                        id: "pb_" + e + "_opct"
                    }).css({
                        width: r
                    });
                return s.append(u), a.append(l), o.append(s), o.append(a), i.append(o), a.data("progress-width", t), i
            },
            set: function(e, t) {
                var r = n.default("#pb_" + e + "_over");
                if (r) {
                    var i = t.split("/").map(Number);
                    t = i.length > 1 ? i[0] / i[1] : i[0], t = isNaN(t) ? 0 : t;
                    var o = 100 * Math.min(t, 1),
                        s = String(o) + "%";
                    return r.show(), r.css({
                        backgroundColor: "#348DD3",
                        overflow: "hidden",
                        width: s
                    })
                }
            }
        },
        u = {
            complete: {},
            handled: function(e) {
                if (!e) return !1;
                var t = !!u.complete[e];
                return u.complete[e] = !0, t
            },
            peek: function(e) {
                return !!e && !!u.complete[e]
            }
        };
    t.Job = u;
    var l = {
        show: function(e) {
            if (e) {
                s(i.DBModalStack.top(), function(e) {
                    return e.hide()
                });
                var t = n.default("body"),
                    r = n.default("<div />", {
                        id: "modal-progress-overlay"
                    });
                if (r.hide(), r.appendTo(t), n.default("#browse-box").length ? o.clone_position(r, n.default("#browse-box")) : n.default("#gallery-view-media").length ? o.clone_position(r, n.default("#gallery-view-media")) : r.css({
                        position: "fixed",
                        width: "100%",
                        height: "100%"
                    }), r.width()) {
                    var u = n.default("<div />", {
                            id: "modal-progress-content"
                        }),
                        l = n.default("<div />", {
                            id: "modal-progress-container"
                        }),
                        c = n.default("<div />", {
                            id: "modal-progress-bar",
                            opacity: 1,
                            html: a.make("modal-progress", 150, "")
                        }),
                        d = n.default("<div />", {
                            id: "modal-progress-text",
                            text: e
                        });
                    return u.hide(), l.append(c, d), u.append(l), t.append(u), r.fadeTo(250, .7), u.fadeIn(250)
                }
            }
        },
        update: function(e) {
            if (!(e.indexOf("progress") > -1 && (e = e.substring("progress".length), isNaN(e)))) return a.set("modal-progress", e)
        },
        hide: function() {
            return n.default("#modal-progress-overlay").fadeOut(250, function() {
                return n.default("#modal-progress-overlay").remove()
            }), n.default("#modal-progress-content").fadeOut(250, function() {
                return n.default("#modal-progress-content").remove()
            })
        }
    };
    t.ModalProgress = l
}), define("modules/clean/keycode", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e[e.A = 65] = "A", e[e.F = 70] = "F", e[e.P = 80] = "P", e[e.BACKSPACE = 8] = "BACKSPACE", e[e.TAB = 9] = "TAB", e[e.ENTER = 13] = "ENTER", e[e.SHIFT = 16] = "SHIFT", e[e.CONTROL = 17] = "CONTROL", e[e.ALT = 18] = "ALT", e[e.ESC = 27] = "ESC", e[e.SPACE = 32] = "SPACE", e[e.PAGE_UP = 33] = "PAGE_UP", e[e.PAGE_DOWN = 34] = "PAGE_DOWN", e[e.END = 35] = "END", e[e.HOME = 36] = "HOME", e[e.LEFT = 37] = "LEFT", e[e.UP = 38] = "UP", e[e.RIGHT = 39] = "RIGHT", e[e.DOWN = 40] = "DOWN", e[e.INSERT = 45] = "INSERT", e[e.DELETE = 46] = "DELETE", e[e.TWO_KEY = 50] = "TWO_KEY", e[e.EQUALS = 61] = "EQUALS", e[e.COMMAND = 91] = "COMMAND", e[e.PLUS_EQUALS_FF = 107] = "PLUS_EQUALS_FF", e[e.MINUS_FF = 109] = "MINUS_FF", e[e.F1 = 112] = "F1", e[e.F2 = 113] = "F2", e[e.F3 = 114] = "F3", e[e.F4 = 115] = "F4", e[e.F5 = 116] = "F5", e[e.F6 = 117] = "F6", e[e.F7 = 118] = "F7", e[e.F8 = 119] = "F8", e[e.F9 = 120] = "F9", e[e.F10 = 121] = "F10", e[e.F11 = 122] = "F11", e[e.F12 = 123] = "F12", e[e.PLUS_EQUALS_FF_GERMAN = 171] = "PLUS_EQUALS_FF_GERMAN", e[e.MINUS_FF_MAC = 173] = "MINUS_FF_MAC", e[e.PLUS_CHROME = 187] = "PLUS_CHROME", e[e.MINUS_CHROME = 189] = "MINUS_CHROME", e[e.FORWARD_SLASH = 191] = "FORWARD_SLASH", e[e.AT_SIGN = 64] = "AT_SIGN", e[e.PROCESSING = 229] = "PROCESSING"
    })(t.KeyCode || (t.KeyCode = {}))
}), define("modules/clean/static_urls", ["require", "exports", "modules/constants/env", "modules/core/exception", "modules/core/uri"], function(e, t, r, n, i) {
    "use strict";

    function o(e) {
        n.assert(0 === e.indexOf("/static/"), "#{path} is not a /static url");
        return new i.URI({
            scheme: "https",
            authority: r.STATIC_CONTENT_HOST,
            path: e
        }).toString()
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.static_url = o
}), define("modules/clean/storage", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        var t;
        try {
            t = e() || new i
        } catch (e) {
            t = new i
        }
        try {
            var r = "__storage_test__";
            return t.setItem(r, r), t.removeItem(r), t
        } catch (e) {
            return t && n(e) ? t : new i
        }
    }

    function n(e) {
        return e instanceof DOMException && (22 === e.code || 1014 === e.code || "QuotaExceededError" === e.name || "NS_ERROR_DOM_QUOTA_REACHED" === e.name)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = (function() {
        function e() {
            this.storage = {}
        }
        return e.prototype.clear = function() {
            this.storage = {}
        }, e.prototype.getItem = function(e) {
            return this.storage[e]
        }, e.prototype.key = function(e) {
            return Object.keys(this.storage)[e]
        }, e.prototype.removeItem = function(e) {
            delete this.storage[e]
        }, e.prototype.setItem = function(e, t) {
            this.storage[e] = t
        }, e
    })();
    t.MemoryStorage = i;
    var o = (function() {
        function e(e) {
            this.initFn = e
        }
        return Object.defineProperty(e.prototype, "storage", {
            get: function() {
                return this.initFn && (this._storage = r(this.initFn), delete this.initFn), this._storage
            },
            enumerable: !0,
            configurable: !0
        }), e.prototype.get = function(e) {
            if (this.storage) {
                var t = this.storage.getItem(e);
                return t ? JSON.parse(t) : t
            }
        }, e.prototype.set = function(e, t) {
            if (this.storage) try {
                return null === t ? this.delete(e) : this.storage.setItem(e, JSON.stringify(t))
            } catch (e) {
                if (n(e)) return;
                throw e
            }
        }, e.prototype.delete = function(e) {
            return this.storage ? this.storage.removeItem(e) : void 0
        }, e.prototype.reset = function() {
            return this.storage ? this.storage.clear() : void 0
        }, e
    })();
    t.BrowserStorage = o;
    var s = (function() {
        function e(e) {
            this.idPrefix = "userId:", this.browserStorage = e
        }
        return e.prototype.get = function(e, t) {
            return this.browserStorage.get(this.formatKey(e, t))
        }, e.prototype.set = function(e, t, r) {
            return this.browserStorage.set(this.formatKey(e, t), r)
        }, e.prototype.clearOtherUsers = function(e) {
            var t = this;
            Object.keys(this.browserStorage.storage).map(function(r) {
                if (r.startsWith(t.idPrefix)) {
                    var n = r.substring(t.idPrefix.length, r.indexOf("."));
                    e.includes(Number(n)) || t.browserStorage.delete(r)
                }
            })
        }, e.prototype.delete = function(e, t) {
            return this.browserStorage.delete(this.formatKey(e, t))
        }, e.prototype.formatKey = function(e, t) {
            return "" + this.idPrefix + e + "." + t
        }, e
    })();
    t.SessionStorage = new o(function() {
        return window.sessionStorage
    }), t.LocalStorage = new o(function() {
        return window.localStorage
    }), t.UserLocalStorage = new s(t.LocalStorage)
}), define("modules/clean/user", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        return new n(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = (function() {
        function e(e) {
            Object.assign(this, e)
        }
        return e.prototype.toString = function() {
            return String(this.id)
        }, e
    })();
    t.mkUser = r
}), define("modules/clean/ux_analytics", ["require", "exports", "modules/clean/ux_analytics/lazy_ux_analytics"], function(e, t, r) {
    "use strict";

    function n() {
        return (new Date).getTime()
    }

    function i() {
        var e = document.documentElement;
        return (window.pageYOffset || e.scrollTop) - (e.clientTop || 0)
    }

    function o(e) {
        return void 0 === e && (e = window), e.location.href
    }

    function s(e) {
        return void 0 === e && (e = window), e.location.search
    }

    function a(e, t, r) {
        void 0 === r && (r = {});
        var i = null,
            o = 0;
        return function() {
            var s = n();
            o || r.leading !== !1 || (o = s);
            var a = t - (s.valueOf() - o.valueOf()),
                u = arguments;
            if (a <= 0 || a > t) i && (clearTimeout(i), i = null), o = s, e.apply(null, u), u = null;
            else if (!i && r.trailing !== !1) {
                var l = function() {
                    o = r.leading === !1 ? 0 : n(), i = null, e.apply(null, u), u = null
                };
                i = setTimeout(l, a)
            }
        }
    }

    function u() {
        var e = {},
            t = s();
        if (t.length)
            for (var r = t.substring(1).replace(/&amp;/g, "&").split("&"), n = 0, i = r; n < i.length; n++) {
                var o = i[n],
                    a = o.split("="),
                    u = a[0],
                    l = a[1];
                u && l && (u = u.trim(), l = l.trim(), u.length && l.length && (e[u] = decodeURIComponent(l.replace(/\+/g, " "))))
            }
        return e
    }

    function l(e) {
        return e && e.hasAttribute("data-uxa-log")
    }

    function c(e) {
        return e && "A" === e.nodeName
    }

    function d(e) {
        return e && e.getAttribute("data-trackingid")
    }

    function _(e) {
        return e && "BODY" === e.nodeName
    }

    function f(e) {
        for (var t = e, r = 0; r < 6 && !l(t) && !_(t); r++) {
            var n = t.parentNode;
            if (!(n instanceof HTMLElement)) break;
            t = n
        }
        return t
    }

    function h(e) {
        for (var t = e, r = 0; r < 6 && (!c(t) && !d(t)) && !_(t); r++) {
            var n = t.parentNode;
            if (!(n instanceof HTMLElement)) break;
            t = n
        }
        return t
    }

    function p() {
        return Math.random().toString().slice(2)
    }

    function g(e) {
        return S.test(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.UXA_HISTORY_CHANGE_EVENT = "historyChange";
    var m, v = (function() {
            var e = null,
                t = "uxa.onedoesnotsimplyusesessionstorage";
            try {
                e = window.sessionStorage, e && (e.setItem(t, t), e.removeItem(t))
            } catch (t) {
                e = null
            }
            return e
        })(),
        y = (function() {
            var e = window;
            return e.hasOwnProperty("JSON") ? e.JSON : null
        })();
    (function(e) {
        function t(e) {
            return "uxa." + e
        }

        function r() {
            return !!a
        }

        function n(e) {
            if (!a || !u) return null;
            try {
                var r = a.getItem(t(e));
                return null === r ? null : u.parse(r)
            } catch (e) {
                return null
            }
        }

        function i(e, r) {
            if (!a || !u) return null;
            try {
                return null === r ? o(e) : (a.setItem(t(e), u.stringify(r)), null)
            } catch (e) {
                return null
            }
        }

        function o(e) {
            return a ? (a.removeItem(t(e)), null) : null
        }

        function s(e) {
            return a ? (a.clear(), null) : null
        }
        var a = v,
            u = y;
        e.isEnabled = r, e.get = n, e.set = i, e.remove = o, e.clear = s
    })(m = t.UXStorage || (t.UXStorage = {}));
    var w = {
            heartbeat: "heartbeat",
            linkClick: "link_click",
            elementClick: "element_click",
            linkNoSessionStorage: "link_no_session_storage",
            modalClose: "modal_close",
            modalOpen: "modal_open",
            pageView: "page_view",
            scroll: "scroll_event",
            finalHeartbeat: "final_heartbeat"
        },
        b = Object.keys(w).map(function(e) {
            return w[e]
        }),
        x = {
            linkClick: "clicked_link",
            trackingParams: "tracking_params",
            visitId: "visit_id",
            previousURL: "previous_url",
            lastActiveTime: "last_active_time"
        },
        S = /\/account|\/share|\/buy|\/pro\/try/,
        E = (function() {
            function e(e, t) {
                var r = this;
                this.currentModalId = null, this.lastScrollOffset = 0, this.scrollTimer = null, this.startHeartbeat = function() {
                    for (var e = 0, t = [2, 5, 10, 15, 30]; e < t.length; e++) {
                        var n = t[e];
                        setTimeout(r.logOnPage.bind(r, w.heartbeat), 1e3 * n)
                    }
                    for (var i = 0, o = [1, 2, 4, 9]; i < o.length; i++) {
                        var n = o[i];
                        setTimeout(r.logOnPage.bind(r, w.heartbeat), 60 * n * 1e3)
                    }
                }, this.delayedInit = function() {
                    r.saveTrackingParams(), r.logPageView(), r.logDelayedClickEvent(), r.setupListeners()
                }, this.trackScrolling = function() {
                    r.scrollTimer && clearTimeout(r.scrollTimer), r.scrollTimer = setTimeout(r.onScroll, 500)
                }, this.onScroll = function() {
                    var e = i();
                    r.lastScrollOffset !== e && (r.lastScrollOffset = e, r.logOnPage(w.scroll, {
                        vertical_offset: e
                    }))
                }, this.handlePageShow = function(e) {
                    if (e.persisted) {
                        r.cleanSessionStorage();
                        var t = m.get(x.previousURL);
                        m.set(x.previousURL, o()), r.previousUrl = t, r.visitId = m.get(x.visitId), setTimeout(r.delayedInit, 200)
                    }
                }, this.handlePageClose = function(e) {
                    var t = {};
                    t.vertical_offset = t.vertical_offset || i(), t.time_on_page = t.time_on_page || r.getTimeOnPage(), r.logEvent(r.createEvent(w.finalHeartbeat, t))
                }, this.handleElementClick = function(e) {
                    var t = f(e.target);
                    if (l(t)) {
                        var n = t.getBoundingClientRect(),
                            o = r.createEvent(w.elementClick, {
                                left: Math.round(n.left),
                                element_id: t.getAttribute("data-uxa-log"),
                                element_rank: r.getElementRank(t),
                                time_on_page: r.getTimeOnPage(),
                                top: Math.round(n.top),
                                vertical_offset: i(),
                                tag_name: t.tagName.toLowerCase()
                            });
                        r.logEvent(o)
                    }
                }, this.handleLinkClick = function(e) {
                    var t = h(e.target);
                    if (c(t) || d(t)) {
                        var n = t.getBoundingClientRect(),
                            o = r.createEvent(w.linkClick, {
                                left: Math.round(n.left),
                                link_id: t.getAttribute("data-trackingid"),
                                link_rank: r.getLinkRank(t),
                                origin_href: t.getAttribute("href"),
                                time_on_page: r.getTimeOnPage(),
                                top: Math.round(n.top),
                                vertical_offset: i(),
                                tag_name: t.tagName.toLowerCase()
                            });
                        r.delayedLinkClickLogging && c(t) ? r.storeDelayedLinkClick(o) : r.logEvent(o)
                    }
                }, this.onHistoryChange = function(e) {
                    g(e.detail.url) && (m.set(x.previousURL, e.detail.previousUrl), r.previousUrl = e.detail.previousUrl, r.requestSeq = r.requestSeq + 1, r.logPageView())
                }, this.handleMousedown = function(e) {
                    r.handleLinkClick(e), r.handleElementClick(e)
                }, this.handleKeyboardEnter = function(e) {
                    13 === e.keyCode && (r.handleLinkClick(e), r.handleElementClick(e))
                }, this._modalIdSanitizer = function(e) {
                    if ("upsell-home-modal" === e.id) {
                        var t = Array.from(e.classList).find(function(e) {
                            return e.indexOf("db-modal-custom-") > -1
                        });
                        if (t) return t.replace("db-modal-custom-", "")
                    }
                    return e.id
                }, this.trackModalShow = function() {
                    var e = document.querySelectorAll(r.modalClass),
                        t = Array.from(e).find(function(e) {
                            return "none" !== window.getComputedStyle(e).display || e.classList.contains("clean-react-modal") || e.classList.contains("uxa-modal-tracking-span")
                        });
                    t && (r.currentModalId = r._modalIdSanitizer(t) || "n/a -- file bug to retain-expand", r.logModal(w.modalOpen, r.currentModalId))
                }, this.trackModalHide = function() {
                    r.currentModalId && (r.logModal(w.modalClose, r.currentModalId), r.currentModalId = null)
                }, this.cleanSessionStorage();
                var s = m.get(x.previousURL) || t.previousUrl;
                m.set(x.previousURL, o()), this.requestId = t.requestId, this.orgReferrer = t.orgReferrer, this.httpReferrer = t.httpReferrer, this.previousUrl = s, this.visitId = m.get(x.visitId), this.requestSeq = 0, this.logger = e, void 0 !== t.delayed_link_click_logging ? this.delayedLinkClickLogging = t.delayed_link_click_logging : this.delayedLinkClickLogging = !0, void 0 !== t.modal_class ? this.modalClass = t.modal_class : this.modalClass = ".uxa-modal", this.initTime = n(), this.startHeartbeat(), setTimeout(this.delayedInit, 200)
            }
            return e.resetStorage = function() {
                for (var e = 0, t = Object.keys(x); e < t.length; e++) {
                    var r = t[e];
                    "visit_id" !== x[r] && "last_active_time" !== x[r] && "previous_url" !== x[r] && m.remove(x[r])
                }
            }, e.initialize = function(t, r, n) {
                if (void 0 === n && (n = null), null === e.singleton) e.singleton = new e(t, r);
                else if (n) {
                    var i = [
                        ["requestId", r.requestId, e.singleton.requestId],
                        ["orgReferrer", r.orgReferrer, e.singleton.orgReferrer],
                        ["httpReferrer", r.httpReferrer, e.singleton.httpReferrer],
                        ["configs.delayed_link_click_logging", r.delayed_link_click_logging, e.singleton.delayedLinkClickLogging],
                        ["configs.modal_class", r.modal_class, e.singleton.modalClass]
                    ];
                    i.forEach(function(e) {
                        var t = e[0],
                            r = e[1],
                            i = e[2];
                        void 0 !== r && r !== i && n(new Error("UX Analytics initialize overload attempt; " + t + " '" + r + "' !== '" + i + "'"))
                    })
                }
                return e.singleton
            }, e.prototype.setupListeners = function() {
                window.addEventListener("scroll", a(this.trackScrolling, 2e3, {
                    leading: !0
                })), window.addEventListener("pageshow", this.handlePageShow), window.addEventListener("unload", this.handlePageClose), document.body.addEventListener("mousedown", this.handleMousedown), document.body.addEventListener("keydown", this.handleKeyboardEnter), document.addEventListener("modalOpened", this.trackModalShow), document.addEventListener("modalClosed", this.trackModalHide), window.addEventListener(t.UXA_HISTORY_CHANGE_EVENT, this.onHistoryChange), r.uxaIsListening()
            }, e.prototype.cleanSessionStorage = function() {
                var e = (new Date).getTime(),
                    t = m.get(x.visitId),
                    r = m.get(x.lastActiveTime);
                null === t ? m.set(x.visitId, p()) : null !== r && e - r >= 18e5 && (m.remove(x.previousURL), m.set(x.visitId, p())), m.set(x.lastActiveTime, e)
            }, e.prototype.logPageView = function() {
                this.logEvent(this.createEvent(w.pageView))
            }, e.prototype.logModal = function(e, t) {
                var r = {
                    modal: t
                };
                this.logOnPage(e, r, !0)
            }, e.prototype.logDelayedClickEvent = function() {
                if (!m.isEnabled()) return null;
                var e = m.get(x.linkClick);
                if (e) try {
                    e.destination_url = o();
                    var t = {
                        eventName: w.linkClick,
                        extra: e
                    };
                    this.logEvent(t), m.remove(x.linkClick)
                } catch (e) {}
                return null
            }, e.prototype.logOnPage = function(e, t, r) {
                void 0 === t && (t = {}), void 0 === r && (r = !1);
                var n = this.getTimeOnPage();
                t.vertical_offset = t.vertical_offset || i(), t.time_on_page = t.time_on_page || n, (n < 600 || r) && this.logEvent(this.createEvent(e, t))
            }, e.prototype.logEvent = function(e) {
                try {
                    if (b.indexOf(e.eventName) === -1) throw new Error("UXAnalytics.log: trying to log an invalid event (" + e.eventName + ")");
                    e.eventName === w.finalHeartbeat ? this.logger.log(e.eventName, e.extra, !0) : this.logger.log(e.eventName, e.extra, !1)
                } catch (e) {
                    throw e
                }
            }, e.prototype.createEvent = function(e, t) {
                if (void 0 === t && (t = {}), this.orgReferrer && (t.org_referrer = this.orgReferrer), this.visitId && (t.visit_id = this.visitId), t.request_seq = this.requestSeq, this.httpReferrer && (t.http_referrer = this.httpReferrer), this.previousUrl && (t.previous_url = this.previousUrl), t.request_id = t.request_id || this.requestId, t.url = t.url || o(), t.uxa_v = 2.2, this.trackingParams)
                    for (var r = 0, n = Object.keys(this.trackingParams); r < n.length; r++) {
                        var i = n[r],
                            s = i.replace(/^_/, ""),
                            a = this.trackingParams[i];
                        t["param_" + s] = a
                    }
                return {
                    eventName: e,
                    extra: t
                }
            }, e.prototype.storeDelayedLinkClick = function(e) {
                if (!m.isEnabled()) return this.logOnPage(w.linkNoSessionStorage), !1;
                try {
                    m.set(x.linkClick, e.extra)
                } catch (e) {
                    return !1
                }
                return !0
            }, e.prototype.saveTrackingParams = function() {
                var e = this.getTrackingParams();
                Object.keys(e).length ? (m.set(x.trackingParams, e), this.trackingParams = e) : this.trackingParams = null
            }, e.prototype.getTrackingParams = function() {
                for (var e = m.get(x.trackingParams) || {}, t = ["gclid", "oqa", "trigger", "msclkid", "_tk", "_camp", "_ad", "_net", "_kw", "utm_campaign", "utm_content", "utm_medium", "utm_source", "utm_term"], r = u(), n = 0, i = t; n < i.length; n++) {
                    var o = i[n];
                    r.hasOwnProperty(o) && (e[o] = r[o])
                }
                return e
            }, e.prototype.getTimeOnPage = function() {
                return Math.round((n() - this.initTime) / 1e3)
            }, e.prototype.getElementRank = function(e) {
                var t = e.nodeName.toLowerCase(),
                    r = e.getAttribute("data-uxa-log"),
                    n = document.querySelectorAll(t + '[data-uxa-log="' + r + '"]');
                if (1 === n.length) return 1;
                for (var i = 0; i < n.length; i++)
                    if (n[i] === e) return i + 1;
                return -1
            }, e.prototype.getLinkRank = function(e) {
                var t = e.getAttribute("href"),
                    r = document.querySelectorAll('a[href="' + t + '"]');
                if (1 === r.length) return 1;
                for (var n = 0; n < r.length; n++)
                    if (r[n] === e) return n + 1;
                return -1
            }, e.singleton = null, e
        })();
    t.UXAnalytics = E
}), define("modules/clean/ux_analytics_utils", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function(e, t) {
        if ("function" == typeof CustomEvent) document.dispatchEvent(new CustomEvent(e, {
            detail: t
        }));
        else {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(e, !0, !0, t), document.dispatchEvent(r)
        }
    };
    t.dispatchModalOpened = function() {
        r("modalOpened")
    }, t.dispatchModalClosed = function() {
        r("modalClosed")
    }, t.getModalId = function(e) {
        if (e.id) return e.id;
        var t = e.className;
        if (t) {
            var r = t.split(" ");
            if (r.length > 1) {
                return r.find(function(e) {
                    return e.indexOf("modal") > -1
                }) || t[0] + "-modal"
            }
            return t.indexOf("modal") > -1 ? t : t + "-modal"
        }
    }
}), define("modules/clean/viewer", ["require", "exports", "tslib", "modules/constants/viewer", "modules/core/exception", "modules/clean/user"], function(e, t, r, n, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = (function() {
        function e(e) {
            void 0 === e && (e = {}), this.replace_viewer_data(e)
        }
        return e.get_viewer = function() {
            return e._cached_viewer
        }, e.get_role_title = function(e) {
            return this.get_viewer().get_title_by_role(e.role)
        }, e.get_root_name = function(e) {
            return this.get_viewer().get_root_name_by_role(e.role)
        }, e.get_is_signed_in = function(e) {
            return e.is_signed_in
        }, e.prototype.replace_viewer_data = function(e) {
            void 0 === e && (e = {}), this._authed_users = {}, this._all_users = {};
            for (var t = e._user_data || [], r = 0, n = t; r < n.length; r++) {
                var i = n[r],
                    s = o.mkUser(i);
                this._all_users[s.id] = s, i._authed && (this._authed_users[s.id] = s)
            }
            this.display_name = e.display_name, this.team_id = e.team_id, this.auth_role = e.auth_role, this.auth_action_type = e.auth_action_type, this.team_dbtid = e.team_dbtid, this.team_name = e.team_name, this.team_type = e.team_type, this.team_is_limited = e.team_is_limited || !1, this.team_is_locked = e.team_is_locked || !1, this.is_assume_user_session = e.is_assume_user_session || !1, this.is_team_assume_user_session = e.is_team_assume_user_session || !1, this.is_signed_in = t.length > 0, this.is_paired = t.length > 1, e.deprecated_first_user_in_the_cookie_id && (this.deprecated_first_user_in_the_cookie = this.get_user_by_id(e.deprecated_first_user_in_the_cookie_id)), this._load_cached_users()
        }, e.prototype.get_user_by_role = function(e, t) {
            var r = this.get_uid_by_role(e);
            return null != r ? this.get_user_by_id(r, t) : void 0
        }, e.prototype.role_exists = function(e) {
            return null != this.get_uid_by_role(e)
        }, e.prototype.get_user_by_id = function(e, t) {
            i.assert(this.is_uid_associated(e), "User " + e + " is not associated with this viewer");
            var r = t ? this._all_users : this._authed_users,
                n = r[e];
            return i.assert(!!n, "User " + e + " is not signed in"), n
        }, e.prototype.is_role_signed_in = function(e) {
            var t = this.get_uid_by_role(e);
            return null != t && t in this._authed_users
        }, e.prototype.is_uid_signed_in = function(e) {
            return e in this._authed_users
        }, e.prototype.is_user_signed_in = function(e) {
            return null != e && this.is_uid_signed_in(e.id)
        }, e.prototype.is_uid_associated = function(e) {
            return e in this._all_users
        }, e.prototype.get_users = function(e) {
            var t = e ? this._all_users : this._authed_users,
                r = Object.keys(t).map(function(e) {
                    return t[e]
                });
            return r.sort(function(e, t) {
                return "personal" === e.role ? -1 : 1
            }), r
        }, e.prototype.get_user_ids = function(e) {
            return this.get_users(e).map(function(e) {
                return e.id
            })
        }, e.prototype.get_roles = function(e) {
            return this.get_users(e).map(function(e) {
                return e.role
            })
        }, e.prototype.get_account_ids = function(e) {
            return this.get_users(e).map(function(e) {
                return e.account_id
            })
        }, e.prototype.get_email_by_role = function(e) {
            var t = this.get_user_by_role(e, !0);
            return t && t.email
        }, e.prototype.get_uid_by_role = function(e) {
            "photos" === e && (e = this.is_paired || !this.is_signed_in ? "personal" : this._all_users[Object.keys(this._all_users)[0]].role);
            for (var t in this._all_users)
                if (this._all_users.hasOwnProperty(t)) {
                    var r = this._all_users[t];
                    if (r.role === e) return r.id
                }
        }, e.prototype.get_title_by_role = function(e) {
            return "work" === e ? this.team_name : this.is_paired ? n.PERSONAL_ROLE_STRING : ""
        }, e.prototype.get_root_name_by_role = function(e) {
            return this.get_title_by_role(e) || n.DEFAULT_ROOT_NAME
        }, e.prototype._sign_in_all_users = function() {
            this._authed_users = r.__assign({}, this._all_users), this._load_cached_users()
        }, e.prototype._sign_out_user_by_id = function(e) {
            delete this._authed_users[e], this._load_cached_users()
        }, e.prototype.sign_in_user_by_id = function(e) {
            i.assert(this.is_uid_associated(e), "User " + e + " is not associated with this viewer"), this._authed_users[e] = this._all_users[e], this._load_cached_users()
        }, e.prototype._load_cached_users = function() {
            this.personal_user = this._authed_users[this.get_uid_by_role("personal")], this.photos_user = this._authed_users[this.get_uid_by_role("photos")], this.work_user = this._authed_users[this.get_uid_by_role("work")], this.personal_email = this.get_email_by_role("personal"), this.work_email = this.get_email_by_role("work"), this.is_personal_user_signed_in = this.is_role_signed_in("personal"), this.is_photos_user_signed_in = this.is_role_signed_in("photos"), this.is_work_user_signed_in = this.is_role_signed_in("work")
        }, e._cached_viewer = new e(n._viewer_properties), e
    })();
    t.Viewer = s
}), define("modules/core/accessible_announce", ["require", "exports", "tslib", "jquery", "external/purify", "modules/clean/css"], function(e, t, r, n, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n), i = r.__importStar(i);
    var s = (function() {
        function e() {}
        return e.polite = function(e, t) {
            return void 0 === t && (t = 10), this.announce("polite", e, t)
        }, e.assertive = function(e, t) {
            return void 0 === t && (t = 10), this.announce("assertive", e, t)
        }, e.clear = function() {
            return this.lastTimeout && clearTimeout(this.lastTimeout), n.default("#accessible-announce").html("").attr("aria-live", "off")
        }, e.announce = function(e, t, r) {
            var i = this;
            return void 0 === r && (r = 10), o.require_css("/static/css/accessibility-vfliGZNRm.css", function() {
                return n.default("#accessible-announce").length ? (i.setMessage(t, e), i.scheduleClear(r)) : (n.default("body").append("<div id='accessible-announce' aria-live='assertive' class='ax-visually-hidden'></div>"), setTimeout(function() {
                    return i.setMessage(t, e), i.scheduleClear(r)
                }, i.TIMEOUT_LENGTH))
            })
        }, e.setMessage = function(e, t) {
            this.clear();
            var r = n.default("#accessible-announce");
            r.attr("aria-live", t),
                e.toHTML ? r.html(i.sanitize(e.toHTML())) : "string" == typeof e ? r.text(e) : e instanceof n.default && r.html(i.sanitize(e.html()))
        }, e.scheduleClear = function(e) {
            return this.lastTimeout = setTimeout(this.clear, 1e3 * e)
        }, e.TIMEOUT_LENGTH = 50, e
    })();
    t.AccessibleAnnounce = s
}), define("modules/core/browser", ["require", "exports", "tslib", "modules/constants/env", "modules/core/exception", "modules/core/uri"], function(e, t, r, n, i, o) {
    "use strict";

    function s(e) {
        return void 0 === e && (e = window), e.location.href
    }

    function a(e) {
        return void 0 === e && (e = window), e.location.pathname
    }

    function u(e) {
        return void 0 === e && (e = window), e.location.hostname
    }

    function l(e) {
        return void 0 === e && (e = window), o.URI.parse(s(e))
    }

    function c() {
        return window.location.hash.split("#")[1]
    }

    function d() {
        return s().split("#")[0]
    }

    function _(e) {
        window.location.hash = e
    }

    function f(e, r) {
        void 0 === r && (r = !1);
        var n = t.mockableInternalMethods._parse_target(e),
            i = window.open(n, "_blank");
        return r ? i : null
    }

    function h(e) {
        return e = t.mockableInternalMethods._parse_target(e, {
            checkDomainWhitelist: !1,
            httpsOnly: !1
        }), window.open(e, "_blank")
    }

    function p(e, t) {
        void 0 === t && (t = "_blank"), i.assert(e.startsWith("mailto:"), "Mailto link is malformed."), window.open(e, t)
    }

    function g(e) {
        E.push(e)
    }

    function m(e, r) {
        void 0 === r && (r = window);
        for (var n = "string" == typeof e ? e : e.toString(), i = 0, o = E; i < o.length; i++) {
            (0, o[i])(n)
        }
        var s = t.mockableInternalMethods._parse_target(e, {
            target_window: r
        });
        t.mockableInternalMethods._navigate(s, r)
    }

    function v(e) {
        var r = t.mockableInternalMethods._parse_target(e);
        window.location.replace(r)
    }

    function y(e) {
        void 0 === e && (e = !1), window.location.reload(e)
    }

    function w() {
        return window.performance || null
    }

    function b() {
        var e = w();
        return e && e.now && e.timing ? Math.round(e.now() + e.timing.navigationStart) : Date.now()
    }

    function x(e) {
        e = t.mockableInternalMethods._parse_target(e, {
            checkDomainWhitelist: !1,
            httpsOnly: !1
        }), t.mockableInternalMethods._navigate(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n);
    var S = n.REDIRECT_SAFE_ORIGINS;
    t.get_href = s, t.get_pathname = a, t.get_hostname = u, t.get_uri = l, t.get_hash = c, t.get_href_no_hash = d, t.set_hash = _, t.mockableInternalMethods = {
        _navigate: function(e, t) {
            void 0 === t && (t = window), t.location.href = e
        },
        _parse_target: function(e, t) {
            var r = void 0 === t ? {} : t,
                n = r.target_window,
                s = void 0 === n ? window : n,
                a = r.checkDomainWhitelist,
                u = void 0 === a || a,
                l = r.httpsOnly,
                c = void 0 === l || l,
                d = s.document.createElement("a");
            e instanceof o.URI ? d.href = e.toString() : d.href = e;
            var _ = d.protocol || s.location.protocol;
            ":" === d.protocol && (_ = s.location.protocol);
            var f = d.hostname || s.location.hostname,
                h = d.port || s.location.port;
            "443" === h && "https:" === _ && (h = ""), u && i.assert(!h, "Non-default port not legal when checking the whitelist.");
            var p = 0 === d.pathname.indexOf("/") ? d.pathname : "/" + d.pathname;
            c ? i.assert("https:" === _, "Target URI must be secure") : i.assert("data:" !== _ && "javascript:" !== _ && "vbscript:" !== _, "Target URI can't use the data or javascript scheme"), u && i.assert(S.indexOf(f) > -1, "Target URI must be in the domain whitelist");
            var g = f;
            return h && (g = g + ":" + h), e = _ + "//" + g + p + d.search + d.hash
        }
    }, t.open_tab = f, t.unsafe_open_tab = h, t.open_mail = p;
    var E = [];
    t.onBrowserRedirect = g, t.redirect = m, t.replace_location = v, t.reload = y, t.performance = w, t.now = b, t.unsafeRedirect = x
}), define("modules/core/browser_detection", ["require", "exports"], function(e, t) {
    "use strict";

    function r(e) {
        var t = e.toLowerCase(),
            r = /(ipad)/.exec(t) || /(edge)[ \/]([\w.]+)/.exec(t) || /(edg)[ \/]([\w.]+)/.exec(t) || /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || /(trident).*? rv:([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [],
            n = t.match(/version\/([\d.]+)/i),
            i = null != n ? r[1] : null;
        return "webkit" === i && (i = null != n ? n[1] : null), {
            browser: r[1] || "",
            version: i || r[2] || "0",
            userAgent: e
        }
    }

    function n(e) {
        void 0 === e && (e = navigator.userAgent);
        var t = r(e);
        return "trident" === t.browser && (t.browser = "msie"), t
    }

    function i(e) {
        return void 0 === e && (e = navigator.plugins || []), Array.from(e)
    }

    function o(e) {
        return c(t.msie, e, !1)
    }

    function s() {
        if (window.matchMedia) {
            return Boolean(window.matchMedia("(-webkit-min-device-pixel-ratio: 1.1), (min-resolution: 192dpx), (min-resolution: 1.1dppx)").matches)
        }
        return !1
    }

    function a() {
        return navigator.onLine
    }

    function u(e) {
        window.addEventListener("online", e), window.addEventListener("offline", e)
    }

    function l(e) {
        window.removeEventListener("online", e), window.removeEventListener("offline", e)
    }

    function c(e, r, n) {
        return void 0 === n && (n = !0), n ? Boolean(e) && parseInt(t.version, 10) >= r : Boolean(e) && parseInt(t.version, 10) <= r
    }

    function d(e) {
        void 0 === e && (e = navigator.userAgent);
        var r = (e || "").toLowerCase();
        return t.ipod || t.iphone || r.indexOf("tizen") !== -1 || r.indexOf("android") !== -1 && r.indexOf("mobile") !== -1 || r.indexOf("bb10") !== -1 || r.indexOf("netfront") !== -1 || /windows phone|opera mini|blackberry|nokia/.test(r) || r.indexOf("firefox") !== -1 && r.indexOf("mobile") !== -1 || r.indexOf("googlebot-mobile") !== -1 || r.indexOf("iemobile") !== -1 || r.indexOf("opera mobi") !== -1 || /ucweb|ucbrowser/.test(r) || r.indexOf("microsoft office mobile") !== -1
    }

    function _(e) {
        void 0 === e && (e = navigator.userAgent);
        var t = (e || "").toLowerCase();
        return t.indexOf("android") !== -1 || t.indexOf("silk") !== -1
    }

    function f(e) {
        return void 0 === e && (e = navigator.userAgent), t.ipad || _(e) && !d(e)
    }

    function h(e) {
        return void 0 === e && (e = navigator.userAgent), d(e) || f(e)
    }

    function p() {
        return "webkitdirectory" in document.createElement("input")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.get_browser_info = n, t.get_plugins = i;
    var g = n();
    t.ipad = "ipad" === g.browser || void 0, t.chrome = "chrome" === g.browser || void 0, t.safari = !("webkit" !== g.browser && !Boolean(t.ipad)) || void 0, t.opera = "opera" === g.browser || void 0, t.msie = "msie" === g.browser || void 0, t.edge = "edge" === g.browser || "edg" === g.browser, t.edgeChromium = function() {
        return "edg" === n().browser
    }, t.chromium = function() {
        return Boolean(t.chrome) || t.edgeChromium()
    }, t.mozilla = "mozilla" === g.browser || void 0, t.webkit = !("webkit" !== g.browser && !Boolean(t.ipad) && !Boolean(t.chrome)) || void 0, t.mac = Boolean(/(macintosh)/.exec(navigator.userAgent.toLowerCase())), t.windows = Boolean(/(windows)/.exec(navigator.userAgent.toLowerCase())), t.iphone = Boolean(/(iphone)/.exec(navigator.userAgent.toLowerCase())), t.ipod = Boolean(/(ipod)/.exec(navigator.userAgent.toLowerCase())), t.iOS = t.ipad || t.ipod || t.iphone, t.browser_name = g.browser, t.version = g.version, t.userAgent = g.userAgent, t.plugins = i(), t.pluginNames = t.plugins.map(function(e) {
        return e.name
    }), t.msie_version_at_most = o, t.is_high_density_display = s, t.isOnline = a, t.subscribeConnectivityStatusChange = u, t.unsubscribeConnectivityStatusChange = l, t.checkBrowserVersion = c, t.is_supported_mobile_browser = d, t.is_android = _, t.is_tablet = f, t.is_mobile_or_tablet = h, t.is_input_webkitdirectory_supported = p, t.INTERNAL_FILE_DATA_TRANSFER_TYPE = t.msie ? "text" : t.edge ? "text/plain" : "application/x-dropbox-file-list"
}), define("modules/core/dom", ["require", "exports", "tslib", "jquery", "modules/clean/keycode"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    t.is_element = function(e) {
        return !!e && (1 === e.nodeType || e.length >= 1 && 1 === e[0].nodeType)
    }, t.focus_in_input = function() {
        return t.is_input(document.activeElement)
    }, t.is_input = function(e) {
        return null != e && (["INPUT", "TEXTAREA", "SELECT"].includes(e.tagName) && !(e.type in ["submit", "button"]) || t.is_content_editable(e))
    }, t.is_content_editable = function(e) {
        return null != e && (e.hasAttribute && e.hasAttribute("contenteditable") && "false" !== e.getAttribute("contenteditable").toLowerCase())
    }, t.viewport_offset = function(e) {
        var t = n.default(e),
            r = t.offset(),
            i = n.default(window);
        return {
            left: r.left - i.scrollLeft(),
            top: r.top - i.scrollTop()
        }
    };
    var o = null,
        s = null;
    t.viewport_dimensions = function() {
        return o || (o = {
            height: n.default(window).height(),
            width: n.default(window).width()
        }), s || (s = n.default(window).on("resize", function() {
            return o = null
        })), o
    }, t.document_height = function() {
        return Math.max(n.default(document).height(), n.default(window).height(), document.documentElement.clientHeight)
    };
    var a = null,
        u = null,
        l = 0,
        c = null;
    t.scroll_offsets = function() {
        var e, r;
        return a || (a = n.default(window).scroll(function() {
            return u = null
        })), t.is_page_scrollable() ? u || (r = n.default(window).scrollTop(), e = n.default(window).scrollLeft(), u = {
            0: e,
            1: r,
            left: e,
            top: r
        }) : (r = c.top, e = c.left, u = {
            0: e,
            1: r,
            left: e,
            top: r
        }), u
    }, t.scroll_clear_cache = function() {
        return u = null
    }, t.is_page_scrollable = function() {
        return !n.default(document.documentElement).hasClass("no-scroll")
    }, t.scroll_lock_document = function() {
        l++;
        var e = n.default(document.documentElement);
        if (!e.hasClass("no-scroll")) {
            c = t.scroll_offsets();
            var r = -1 * c.top + "px",
                i = -1 * c.left + "px";
            e.css({
                top: r,
                left: i
            }), e.addClass("no-scroll")
        }
    }, t.scroll_unlock_document = function() {
        l > 0 && l--;
        var e = n.default(document.documentElement);
        if (0 === l && e.hasClass("no-scroll") && c) {
            var r = c.top,
                i = c.left;
            e.css({
                top: "",
                left: ""
            }), e.removeClass("no-scroll"), t.scroll_to(i, r + 1), t.scroll_to(i, r - 1), t.scroll_to(i, r)
        }
    }, t.scroll_to = function(e, r) {
        if (e = Math.max(e, 0), r = Math.max(r, 0), r > t.scroll_offsets().top && (r = Math.min(r, t.document_height() - t.viewport_dimensions().height)), t.is_page_scrollable()) window.scrollTo(e, r), u = {
            0: e,
            1: r,
            left: e,
            top: r
        };
        else {
            c = {
                0: e,
                1: r,
                left: e,
                top: r
            };
            var i = -1 * r + "px",
                o = -1 * e + "px";
            n.default(document.documentElement).css({
                top: i,
                left: o
            })
        }
    }, t.clone_position = function(e, r, i) {
        var o = n.default(r),
            s = n.default(e),
            a = {
                setLeft: !0,
                setTop: !0,
                setWidth: !0,
                setHeight: !0,
                offsetTop: 0,
                offsetLeft: 0
            },
            u = n.default.extend({}, a, i),
            l = t.viewport_offset(o),
            c = {
                top: 0,
                left: 0
            },
            d = null;
        if ("absolute" === s.css("position") && (d = s.offsetParent(), c = t.viewport_offset(d)), d && d[0] === document.body && (c.left -= document.body.offsetLeft, c.top -= document.body.offsetTop), u.setLeft) {
            var _ = l.left - c.left + u.offsetLeft + "px";
            s.css("left", _)
        }
        if (u.setTop) {
            var f = l.top - c.top + u.offsetTop + "px";
            s.css("top", f)
        }
        return u.setWidth && s.width(o[0].offsetWidth), u.setHeight && s.height(o[0].offsetHeight), s
    }, t.getFocusableElementsIn = function(e, t) {
        var r = n.default(e).find("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]").filter(function() {
            return !!(this.offsetWidth && this.offsetHeight || this.getClientRects().length)
        });
        return t ? r.not('*[tabindex="-1"]') : r
    }, t.getTabbableElementsIn = function(e) {
        var r = t.getFocusableElementsIn(e, !0),
            n = r.filter('*:not([tabindex]), *[tabindex="0"]'),
            i = r.not(n).toArray();
        if (!i.length) return n.toArray();
        var o = function(e, t) {
            return parseInt(e.getAttribute("tabindex"), 10) - parseInt(t.getAttribute("tabindex"), 10)
        };
        return i.sort(o), i.concat(n.toArray())
    }, t.keepFocusIn = function(e, r, n) {
        if (r.which === i.KeyCode.TAB) {
            var o = t.getTabbableElementsIn(e);
            if (o.length) {
                var s = o.indexOf(r.target);
                if (s !== -1) r.shiftKey ? 0 === s ? (r.preventDefault(), o[o.length - 1].focus()) : n && o[s - 1] && (r.preventDefault(), o[s - 1].focus()) : s === o.length - 1 ? (r.preventDefault(), o[0].focus()) : n && o[s + 1] && (r.preventDefault(), o[s + 1].focus());
                else {
                    r.preventDefault();
                    var a = t.getFocusableElementsIn(e).toArray();
                    r.shiftKey && a.reverse();
                    var u = a.indexOf(r.target);
                    if (u === -1) o[0].focus();
                    else {
                        for (var l = null, c = 0, d = a.slice(u); c < d.length; c++) {
                            var _ = d[c];
                            if (o.includes(_)) {
                                l = _;
                                break
                            }
                        }
                        l ? l.focus() : r.shiftKey ? o[o.length - 1].focus() : o[0].focus()
                    }
                }
            }
        }
    }, t.isElementInViewport = function(e, t) {
        if (void 0 === t && (t = 0), !e) return !1;
        var r = e.getBoundingClientRect().top;
        return r + t >= 0 && r - t <= window.innerHeight
    }
}), define("modules/core/html", ["require", "exports", "tslib", "external/lodash", "jquery", "modules/clean/global_constants"], function(e, t, r, n, i, o) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importStar(n), i = r.__importDefault(i);
    var s = function(e) {
            return "&#" + e.charCodeAt(0) + ";"
        },
        a = function(e) {
            return ("" + e).replace(/[^\w@\.\ \-\(\)\,\$~%#\[\]\{\}\!\^]/g, s)
        },
        u = (function() {
            function e(e) {
                this._str_DONT_TOUCH = e
            }
            return e.prototype.toHTML = function() {
                return this._str_DONT_TOUCH
            }, e.prototype.toString = function() {
                return "[object HTML]"
            }, e.tmpl = function(t, r) {
                if (!/[^\w:.-]/.test(t)) {
                    var s = document.getElementById(t);
                    t = s.innerHTML, o.GlobalConstants.CSP_SCRIPT_NONCE !== (s.nonce || s.getAttribute("nonce")) && (t = "")
                }
                var a = t.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.*?)%>/g, "',__no_conflict_HTML__._raw_escape($1),'").split("<%").join("');").split("%>").join("p.push('"),
                    u = new Function("__no_conflict_HTML__", "__no_conflict_jQuery__", "TEMPLATE_DATA", "var p=[],print=function(){p.push.apply(p,arguments);}; p.push('" + a + "'); return new __no_conflict_HTML__(__no_conflict_jQuery__.trim(p.join('')));"),
                    l = n.partial(u, e, i.default);
                return r ? l(r) : l
            }, e.escape = function(t) {
                return t instanceof e ? t : new e(a(t))
            }, e._raw_escape = function(t) {
                return t instanceof e ? t.toHTML() : "number" == typeof t ? t : a(t)
            }, e
        })();
    t.HTML = u
}), define("modules/core/notify", ["require", "exports", "tslib", "jquery", "modules/core/accessible_announce"], function(e, t, r, n, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), n = r.__importDefault(n);
    var o = (function() {
        function e() {}
        return e.success = function(e, t, r) {
            return void 0 === t && (t = 10), i.AccessibleAnnounce.polite(e, t + 1), this._show(e, t, "server-success", r), this.current()
        }, e.error = function(e, t, r) {
            return void 0 === t && (t = 10), i.AccessibleAnnounce.assertive(e, t + 1), this._show(e, t, "server-error", r), this.current()
        }, e.warning = function(e, t, r) {
            return void 0 === t && (t = 10), i.AccessibleAnnounce.polite(e, t + 1), this._show(e, t, "server-warning", r), this.current()
        }, e.info = function(e, t, r) {
            return void 0 === t && (t = 10), i.AccessibleAnnounce.polite(e, t + 1), this._show(e, t, "server-info", r), this.current()
        }, e.clear = function() {
            this._last_timeout && clearTimeout(this._last_timeout), this._last_animation && this._last_animation.stop(), this._last_timeout = null, this._last_animation = null, n.default("#notify").removeClass("server-error server-info server-success server-warning").hide()
        }, e.isShown = function() {
            return n.default("#notify").is(":visible")
        }, e.current = function() {
            return this._last_timeout
        }, e._show = function(e, t, r, n) {
            return this._buildElement(), this.clear(), this._setMessage(e), this._showElement(r), this._scheduleHide(t, n), this.current()
        }, e._buildElement = function() {
            if (!n.default("#notify").length) {
                n.default("body").append('<div id="notify-wrapper" class="notify-wrapper"> <span id="notify" style="display: inline-block"> <span id="notify-msg" class="notify-msg" /> </span> </div>'), n.default(".maestro .has-top-notification").length && n.default("#notify-wrapper").addClass("with-top-notification")
            }
        }, e._setMessage = function(e) {
            var t = n.default("#notify-msg");
            e.toHTML ? t.html(e.toHTML()) : "string" == typeof e ? t.text(e) : e instanceof n.default && (t.empty(), t.append(e))
        }, e._showElement = function(e) {
            var t = n.default("#notify");
            t.addClass(e), this._last_animation = t.fadeIn(500)
        }, e._scheduleHide = function(e, t) {
            this._last_timeout = setTimeout(this._hide(t), 1e3 * e)
        }, e._hide = function(e) {
            var t = this;
            return function() {
                var r = n.default("#notify");
                return t._last_animation = r.fadeOut(1e3), e && e(), t._last_timeout = null
            }
        }, e
    })();
    t.Notify = o
}), define("modules/core/uri", ["require", "exports", "modules/core/exception"], function(e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = (function() {
        function e(e) {
            void 0 === e && (e = {}), this.dict = {}, this.add(e)
        }
        return e.parseString = function(t) {
            if (!t) return {};
            var r = {};
            return t.split("&").forEach(function(t) {
                if ("" !== t) {
                    var n = t.split("="),
                        i = e.decode(n[0]),
                        o = e.decode(n.slice(1).join("="));
                    if (r.hasOwnProperty(i)) {
                        var s = r[i];
                        "string" == typeof s && (r[i] = [s]), r[i].push(o)
                    } else r[i] = o
                }
            }), r
        }, e.prototype.add = function(e, t) {
            if ("string" == typeof e) t && (Array.isArray(t) ? this.dict[e] = t.map(String) : this.dict[e] = String(t));
            else
                for (var r in e)
                    if (e.hasOwnProperty(r)) {
                        var n = e[r];
                        null != n && (Array.isArray(n) ? this.dict[r] = n.map(String) : this.dict[r] = String(n))
                    } return this
        }, e.prototype.remove = function(e) {
            return delete this.dict[e], this
        }, e.prototype.replace = function(e) {
            return this.dict = e, this
        }, e.prototype.toString = function() {
            for (var t = [], r = Object.keys(this.dict).sort(), n = function(r) {
                    if (i.dict.hasOwnProperty(r)) {
                        var n = i.dict[r];
                        Array.isArray(n) ? n.forEach(function(n) {
                            t.push(e.encode(r) + "=" + e.encode(n))
                        }) : t.push(e.encode(r) + "=" + e.encode(n))
                    }
                }, i = this, o = 0, s = r; o < s.length; o++) {
                n(s[o])
            }
            return t.length ? t.join("&") : ""
        }, e.decode = function(e) {
            return null == e ? "" : i.decode(e.replace(/\+/g, "%20"))
        }, e.encode = function(e) {
            return null == e ? "" : i.encode(e).replace(/%20/g, "+")
        }, e
    })();
    t.QueryComponent = n;
    var i = (function() {
        function e(e) {
            void 0 === e && (e = {}), this.query = new n, this.initFromObject(e)
        }
        return e.prototype.initFromObject = function(e) {
            this.setScheme(e.scheme), this.authority = e.authority || "", this.path = e.path || "", this.setQuery(e.query), this.fragment = e.fragment || ""
        }, e.prototype.getScheme = function() {
            return this.scheme
        }, e.prototype.getAuthority = function() {
            return this.authority
        }, e.prototype.getPath = function() {
            return this.path
        }, e.prototype.getQuery = function() {
            return this.query.dict
        }, e.prototype.getFragment = function() {
            return this.fragment
        }, e.prototype.setScheme = function(e) {
            void 0 === e && (e = "");
            var t = !e || Boolean(e.match(/^[a-zA-Z][a-zA-Z0-9+.\-]*$/));
            return r.assert(t, "Invalid scheme", {
                exc_extra: {
                    scheme_param: e
                }
            }), this.scheme = e, this
        }, e.prototype.setAuthority = function(e) {
            return void 0 === e && (e = ""), this.authority = e, this
        }, e.prototype.setPath = function(e) {
            return void 0 === e && (e = ""), this.path = e, this
        }, e.prototype.setQuery = function(e) {
            return void 0 === e && (e = {}), this.query = new n(e), this
        }, e.prototype.setFragment = function(e) {
            return void 0 === e && (e = ""), this.fragment = e, this
        }, e.prototype.updateQuery = function(e, t) {
            return this.query.add(e, t), this
        }, e.prototype.removeQuery = function(e) {
            return this.query.remove(e), this
        }, e.prototype.clone = function() {
            return new e(this.toObject())
        }, e.prototype.toObject = function() {
            return {
                scheme: this.getScheme(),
                authority: this.getAuthority(),
                path: this.getPath(),
                query: this.getQuery(),
                fragment: this.getFragment()
            }
        }, e.prototype.toString = function() {
            var t = "";
            this.scheme && (t += this.scheme + ":"), this.authority && (t += "//" + e.encode(this.authority, ":@[]")), this.path && (r.assert(!this.authority || !this.path.length || "/" === this.path[0], 'Path must start with a "/" if URI is not relative'), t += e.encode(this.path, "/"));
            var n = this.query.toString();
            return n && (t += "?" + n), this.fragment && (t += "#" + e.encode(this.fragment, ":@[]/&=+?#!")), t
        }, e.parse = function(t) {
            var r = String(t).match(/^(?:([^:\/\\?#]+):)?(?:[\/\\]{2}([^\/\\?#]*))?([^?#]*)(?:\?([^#]*))?(?:[#](.*))?$/) || [],
                i = r[1],
                o = r[2],
                s = r[3],
                a = r[4],
                u = r[5],
                l = new e;
            return l.setScheme(i), l.setAuthority(e.decode(o)), l.setPath(e.decode(s)), l.setQuery(n.parseString(a)), l.setFragment(e.decode(u)), l
        }, e.decode = function(e) {
            return e ? decodeURIComponent(e) : ""
        }, e.encode = function(e, t) {
            if (void 0 === t && (t = ""), !e) return "";
            e = encodeURIComponent(e), t += "~";
            for (var r = 0, n = t; r < n.length; r++) {
                var i = n[r],
                    o = encodeURIComponent(i);
                e = e.replace(new RegExp(o, "g"), i)
            }
            return e
        }, e.encode_parts = function(t, r) {
            return void 0 === r && (r = "/"), t.split(r).map(function(t) {
                return e.encode(t)
            }).join(r)
        }, e.Query = n, e
    })();
    t.URI = i
});
//# sourceMappingURL=pkg-core.min.js-vflvUfCzn.map