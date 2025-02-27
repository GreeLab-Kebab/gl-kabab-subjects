define("modules/clean/loggers/notification_logger", ["require", "exports", "tslib", "modules/clean/ajax", "modules/clean/react/user_notifications/models"], function(e, t, n, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), t.NotificationLocations = {
        TRAY: "home",
        HOME_PAGE: "home_page"
    };
    var i = (function() {
        function e() {}
        return e.logReceive = function(t) {
            for (var n = [], o = 0, a = t; o < a.length; o++) {
                var i = a[o];
                n.push(e.getCommonEventData("receive", i))
            }
            e.log(n)
        }, e.logRender = function(t, n, o) {
            var a = [];
            t.forEach(function(t, i) {
                var r = e.getCommonEventData("render", t);
                r.location = o, r.location_index = n + i, a.push(r)
            }), e.log(a)
        }, e.logAction = function(t, n, o) {
            var a = e.getCommonEventData("action", t);
            a.action_taken = n, o && (a.location = o), e.log([a])
        }, e.logMarkAsRead = function(t, n) {
            for (var o = [], a = 0, i = t; a < i.length; a++) {
                var r = i[a],
                    s = e.getCommonEventData("mark_read", r);
                s.location = n, o.push(s)
            }
            e.log(o)
        }, e.log = function(e) {
            0 !== e.length && o.SilentBackgroundRequest({
                url: "/log/notif_events",
                data: {
                    event_list: JSON.stringify(e)
                }
            })
        }, e.getCommonEventData = function(e, t) {
            return {
                event_name: e,
                type_id: t.typeId,
                campaign_id: t.campaignId,
                campaign_version: t.campaignVersion,
                instance_id: parseInt(t.id, 10),
                status: a.NotificationStatusStrings[t.status],
                seen_state: t.seenState,
                target_object_key: t.targetObjectKey
            }
        }, e
    })();
    t.NotificationLogger = i
}), define("modules/clean/loggers/notification_tray_logger", ["require", "exports", "tslib", "modules/clean/ajax"], function(e, t, n, o) {
    "use strict";

    function a(e) {
        r({
            event_name: "tray_popup_shown",
            badge_count: e
        })
    }

    function i() {
        r({
            event_name: "mark_all_as_read"
        })
    }

    function r(e) {
        o.SilentBackgroundRequest({
            url: "/log/notif_tray_events",
            data: {
                event_dict: JSON.stringify(e)
            }
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), t.logTrayOpen = a, t.logMarkAllAsRead = i
}), define("modules/clean/photos/batch_thumb_loader", ["require", "exports", "tslib", "modules/clean/ajax", "modules/clean/react/no-jquery", "modules/constants/env", "modules/core/uri"], function(e, t, n, o, a, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), i = n.__importStar(i);
    var s = (function() {
        function e(e) {
            var t = e.batch_size,
                n = e.max_parallel_requests,
                o = e.on_batch,
                a = e.batch_logger,
                i = e.on_batch_success;
            this.on_batch = o, this.batch_logger = a, this.on_batch_success = i, this.batch_size = t || 16, this.max_parallel_requests = n || 6, this.thumb_url_queue = [], this.batch_queue = [], this.callback_by_id = {}, this.request_ids_by_url = {}, this.num_requests_in_flight = 0, this.flushing = !1, this.last_thumb_request_id = 0, this.next_batch_id = 0, this.cancelled_urls = {}, this.outstanding_batches = {}, this._request_callback_by_request_id = {}
        }
        return e.prototype.vend_request_id = function() {
            return this.last_thumb_request_id++, this.last_thumb_request_id.toString()
        }, e.prototype.queue_thumb = function(e, t, n) {
            void 0 === n && (n = {});
            var o = n.request_id,
                r = n.onrequest;
            if (a.corsSupport() && i.BATCH_THUMB_ENDPOINTS.length) {
                if (o || (o = this.vend_request_id()), this.request_ids_by_url[e] && this.request_ids_by_url[e].length) {
                    var s = !1;
                    for (var c in this.outstanding_batches)
                        if (this.outstanding_batches[c] && this.outstanding_batches[c].urls)
                            for (var u = 0, l = this.outstanding_batches[c].urls; u < l.length; u++) {
                                var d = l[u];
                                d === e && (s = !0)
                            }
                    s && "function" == typeof r && r()
                } else this.thumb_url_queue.push(e), this.request_ids_by_url[e] = [];
                return this.request_ids_by_url[e].push(o), t && (this.callback_by_id[o] = {
                    url: e,
                    callback: t
                }), this._request_callback_by_request_id[o] = r, this.thumb_url_queue.length >= this.batch_size && (this.batch_queue.push(this.thumb_url_queue.splice(0, this.batch_size)), this._send_batch_requests()), o
            }
            "function" == typeof r && r();
            return t && "function" == typeof t && t(e, !0), null
        }, e.prototype.cancel_thumb = function(e) {
            if (this.callback_by_id[e]) {
                var t = this.callback_by_id[e].url;
                delete this.callback_by_id[e], delete this._request_callback_by_request_id[e];
                for (var n = 0; n < this.request_ids_by_url[t].length; n++) {
                    if (this.request_ids_by_url[t][n] === e) {
                        this.request_ids_by_url[t].splice(n, 1);
                        break
                    }
                }
                if (0 === this.request_ids_by_url[t].length) {
                    var o = void 0;
                    delete this.request_ids_by_url[t];
                    for (var n = 0; n < this.thumb_url_queue.length; n++)
                        if (o = this.thumb_url_queue[n], o === t) return void this.thumb_url_queue.splice(n, 1);
                    for (var n = 0; n < this.batch_queue.length; n++)
                        for (var a = this.batch_queue[n], i = 0; i < a.length; i++)
                            if (o = a[i], o === t) return a.splice(i, 1), void(0 === a.length && this.batch_queue.splice(n, 1));
                    this.cancelled_urls[t] = 1;
                    for (var r in this.outstanding_batches)
                        if (this.outstanding_batches[r] && this.outstanding_batches[r].urls) {
                            for (var s = this.outstanding_batches[r], c = s.urls, u = s.request, l = !0, d = 0, _ = c; d < _.length; d++) {
                                var p = _[d];
                                l = null != this.cancelled_urls[p] && l
                            }
                            if (l) {
                                u.abort();
                                break
                            }
                        }
                }
            }
        }, e.prototype.flush = function() {
            for (; this.thumb_url_queue.length;) this.batch_queue.push(this.thumb_url_queue.splice(0, this.batch_size));
            this._send_batch_requests()
        }, e.prototype.reset = function(e) {
            var t = e.batch_size,
                n = e.batch_logger;
            this.batch_logger = n, this.batch_size = t || 16
        }, e.prototype.clear = function() {
            this.thumb_url_queue = []
        }, e.prototype.pause = function() {
            this.flushing = !1
        }, e.prototype._send_batch_requests = function() {
            if (!(0 === this.batch_queue.length || this.num_requests_in_flight >= this.max_parallel_requests) && this.batch_queue.length > 0) {
                this.flushing = !0;
                var e = this.batch_queue.shift(),
                    t = this._generate_request_params(e),
                    n = t.endpoint,
                    a = t.method,
                    i = t.data;
                this.on_batch && "function" == typeof this.on_batch && this.on_batch(e);
                for (var r = 0, s = e; r < s.length; r++)
                    for (var c = s[r], u = 0, l = this.request_ids_by_url[c]; u < l.length; u++) {
                        var d = l[u],
                            _ = this._request_callback_by_request_id[d];
                        _ && "function" == typeof _ && _(), delete this._request_callback_by_request_id[d]
                    }
                var p = this.next_batch_id;
                this.next_batch_id++, this.num_requests_in_flight++;
                var f = o.SilentBackgroundRequest({
                    xhrFields: {
                        withCredentials: !0
                    },
                    url: n,
                    type: a,
                    data: i,
                    success: this._success.bind(this, e),
                    error: this._error.bind(this, e),
                    complete: this._complete.bind(this, p)
                });
                this.outstanding_batches[p] = {
                    urls: e,
                    request: f
                }, this._send_batch_requests()
            }
        }, e.prototype._success = function(e, t) {
            for (var n = t.split("\n"), o = {}, a = 0, i = e; a < i.length; a++) {
                var r = i[a];
                o[r] = !1
            }
            for (var s = 0; s < n.length; s++) {
                var c = n[s],
                    u = c.indexOf(":");
                if (u !== -1) {
                    var l = c.substring(0, u).split("-"),
                        d = parseInt(l[0], 10),
                        _ = c.substring(u + 1),
                        r = e[d];
                    o[r] = !0, this._call_callback(r, _), this.batch_logger && "function" == typeof this.batch_logger && this.batch_logger(s, e.length)
                }
            }
            this.on_batch_success && "function" == typeof this.on_batch_success && this.on_batch_success(e);
            for (var p = 0, f = e.filter(function(e) {
                    return !o[e]
                }); p < f.length; p++) {
                var r = f[p];
                this.cancelled_urls[r] || this._call_callback(r, r)
            }
        }, e.prototype._error = function(e) {
            for (var t = 0, n = e; t < n.length; t++) {
                var o = n[t];
                this._call_callback(o, o)
            }
        }, e.prototype._complete = function(e) {
            this.num_requests_in_flight--;
            for (var t = this.outstanding_batches[e].urls, n = 0, o = t; n < o.length; n++) {
                var a = o[n];
                delete this.cancelled_urls[a]
            }
            delete this.outstanding_batches[e], this.flushing && this._send_batch_requests()
        }, e.prototype._call_callback = function(e, t) {
            var n;
            if (n = 0 === t.indexOf("data:image") ? t : e, this.request_ids_by_url[e])
                for (var o = 0, a = this.request_ids_by_url[e].slice(); o < a.length; o++) {
                    var i = a[o];
                    this.callback_by_id[i] && (this.callback_by_id[i].callback(n, !1), delete this.callback_by_id[i])
                }
            delete this.request_ids_by_url[e]
        }, e.prototype._generate_request_params = function(e) {
            var t = e.map(function(e) {
                    return r.URI.parse(e).setScheme().setAuthority().toString()
                }),
                n = JSON.stringify(t),
                o = Math.abs(this._hash_string_to_int(n)),
                a = o % i.BATCH_THUMB_ENDPOINTS.length,
                s = i.BATCH_THUMB_ENDPOINTS[a],
                c = {
                    image_urls: n
                };
            return {
                endpoint: s,
                method: r.URI.parse(s).setQuery(c).toString().length > 6e3 ? "POST" : "GET",
                data: c
            }
        }, e.prototype._hash_string_to_int = function(e) {
            var t = 0;
            if (0 === e.length) return t;
            for (var n = 0; n < e.length; n++) {
                t = (t << 5) - t + e.charCodeAt(n)
            }
            return t
        }, e
    })();
    t.BatchThumbLoader = s
}), define("modules/clean/react/account_menu/account_menu", ["require", "exports", "tslib", "react", "external/reselect", "modules/clean/ajax_as_promised", "modules/clean/event_handler", "modules/clean/react/account_menu/account_menu_view", "modules/clean/react/css", "modules/core/uri", "modules/clean/api_v2/user_client", "modules/clean/react/account_menu/types", "modules/clean/react/account_menu/urls", "modules/clean/web_timing_logger", "modules/clean/analytics", "modules/clean/snapengage"], function(e, t, n, o, a, i, r, s, c, u, l, d, _, p, f, h) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o);
    var m = function() {
            return a.createSelector(function(e) {
                return e.user
            }, function(e) {
                return e.viewer
            }, function(e, t) {
                var n, o = [];
                return e.is_team || e.paid ? e.is_team || !e.paid || t.role_exists("work") ? e.is_team && t.team_is_limited && (o = [_.upsellLinks.TRY_BUSINESS]) : n = _.upsellLinks.TRY_BUSINESS : n = _.upsellLinks.UPGRADE_PLANS, {
                    quotaBarCTA: n,
                    menuItemUpsells: o
                }
            })
        },
        g = (function(t) {
            function a(o) {
                var a = t.call(this, o) || this;
                return a.getUpsellLinks = m(), a.state = {
                    accountPhotoUrl: a.props.accountPhotoUrl || a.props.user.photo_circle_url,
                    isDisabled: !0,
                    accountSpaceUsage: {
                        currentStatus: d.AccountSpaceUsageStatus.NOT_APPLICABLE
                    },
                    experimentExposuresLogged: !1,
                    experiments: {}
                }, a.logExperimentExposures = function() {
                    var e = a.state.experimentExposuresLogged;
                    a.mounted && !e && a.setState({
                        experimentExposuresLogged: !0
                    })
                }, a.onClickTrigger = function() {
                    var e = a.props.onClick;
                    e && e(), a.logExperimentExposures()
                }, a.handleChatLink = function(e) {
                    a.widgetId && (h.DropboxSnapEngage.startSupportChat(a.widgetId), f.TeamsWebActionsLogger.log("chat_discoverability_account_menu_clicked"))
                }, a.handleChangeAvatar = function() {
                    new Promise(function(t, n) {
                        e(["modules/clean/account_photo_modal/controller"], t, n)
                    }).then(n.__importStar).then(function(e) {
                        return (0, e.AccountPhotoModalController.show)()
                    })
                }, a.mounted = !1, a
            }
            return n.__extends(a, t), a.prototype.componentDidMount = function() {
                var t = this;
                this.mounted = !0, this.getQuotaData(), this.getExperimentVariants(), this.events.on(document, "db:account_photo:photo_set", function(e, n) {
                    var o = u.URI.parse(n.saved_photo_url).updateQuery({
                        size: "64x64"
                    }).toString();
                    t.setState({
                        accountPhotoUrl: o
                    })
                }), this.events.on(document, "db:account_photo:photo_deleted", function() {
                    t.setState({
                        accountPhotoUrl: null
                    })
                }), this.setState({
                    isDisabled: !1
                }), p.waitForTTI().then(function() {
                    new Promise(function(t, n) {
                        e(["modules/clean/account/timezone_detection"], t, n)
                    }).then(n.__importStar).then(function(e) {
                        e.checkTimezone()
                    }), t.getChatVariants()
                })
            }, a.prototype.componentWillUnmount = function() {
                this.mounted = !1
            }, a.prototype.getQuotaData = function() {
                return n.__awaiter(this, void 0, void 0, function() {
                    var e, t, o, a;
                    return n.__generator(this, function(n) {
                        switch (n.label) {
                            case 0:
                                if (e = this.props.user, e.is_team) return [3, 4];
                                this.setState({
                                    accountSpaceUsage: {
                                        currentStatus: d.AccountSpaceUsageStatus.LOADING
                                    }
                                }), n.label = 1;
                            case 1:
                                return n.trys.push([1, 3, , 4]), [4, this.props.apiV2Client.ns("users").rpc("get_space_usage", void 0, {
                                    subjectUserId: e.id
                                })];
                            case 2:
                                return t = n.sent(), this.mounted && (o = t.allocation, this.setState({
                                    accountSpaceUsage: {
                                        currentStatus: d.AccountSpaceUsageStatus.READY,
                                        used: t.used,
                                        allocated: o.allocated
                                    }
                                })), [3, 4];
                            case 3:
                                return a = n.sent(), this.mounted && this.setState({
                                    accountSpaceUsage: {
                                        currentStatus: d.AccountSpaceUsageStatus.NOT_APPLICABLE
                                    }
                                }), [3, 4];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, a.prototype.getExperimentVariants = function() {
                return n.__awaiter(this, void 0, void 0, function() {
                    var e;
                    return n.__generator(this, function(t) {
                        return e = n.__assign({}, this.props.experiments), this.mounted && this.setState({
                            experiments: e
                        }), [2]
                    })
                })
            }, a.prototype.getChatVariants = function() {
                return n.__awaiter(this, void 0, void 0, function() {
                    var e, t, o;
                    return n.__generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return e = this.props.user, [4, i.SilentBackgroundRequest({
                                    url: "/portkey_chat_discoverability_variant",
                                    dataType: "json",
                                    subject_user: e.id
                                })];
                            case 1:
                                return t = a.sent(), o = this.state.experiments, t && (this.widgetId = t.widgetId, this.setState({
                                    experiments: n.__assign({}, o, {
                                        portkeyChatDiscoverability: t.variant
                                    })
                                })), [2]
                        }
                    })
                })
            }, a.prototype.render = function() {
                var e = this.state,
                    t = e.isDisabled,
                    n = e.accountPhotoUrl,
                    a = e.accountSpaceUsage,
                    i = e.experiments,
                    r = this.props,
                    c = r.logoutContinuationPath,
                    u = r.hideInstallLink,
                    l = r.showSettingsLink,
                    d = r.trialsConfig,
                    _ = r.user,
                    p = r.viewer,
                    f = this.getUpsellLinks(this.props),
                    h = f.quotaBarCTA,
                    m = f.menuItemUpsells,
                    g = "V1" === i.portkeyChatDiscoverability && !!this.widgetId;
                return o.default.createElement(s.AccountMenuView, {
                    user: _,
                    viewer: p,
                    accountPhotoUrl: n,
                    disabled: t,
                    accountSpaceUsage: a,
                    quotaBarCTA: h,
                    menuItemUpsells: m,
                    logoutContinuationPath: c,
                    showChatLink: g,
                    hideInstallLink: u,
                    showSettingsLink: l,
                    onClickChatLink: this.handleChatLink,
                    onClickChangeAvatar: this.handleChangeAvatar,
                    onClickTrigger: this.onClickTrigger,
                    experiments: i,
                    trialsConfig: d
                })
            }, a.defaultProps = {
                accountPhotoUrl: null,
                hideInstallLink: !1,
                showSettingsLink: !0,
                apiV2Client: new l.UserApiV2Client
            }, a = n.__decorate([r.eventHandler], a)
        })(o.default.Component),
        v = c.requireCssWithComponent(g, ["/static/css/account_menu_common-vflWBcBIO.css", "/static/css/pagelet-vflVkuuMY.css", "/static/css/spectrum/index.web-vflagwTbb.css"]);
    t.AccountMenu = v
}), define("modules/clean/react/account_menu/account_menu_view", ["require", "exports", "tslib", "spectrum/account_menu", "spectrum/button", "spectrum/popover", "react", "modules/clean/react/account_menu/urls", "modules/core/i18n", "modules/clean/react/account_menu/types", "modules/clean/display_format", "modules/clean/react/account_menu/profile_picture", "modules/clean/react/badge", "modules/clean/react/growth/trials/types", "modules/clean/react/growth/trials/logging_util", "modules/clean/react/growth/trials/util", "modules/clean/react/growth/trials/components/badge", "modules/clean/analytics", "modules/clean/react/retrieval_success_banner/util"], function(e, t, n, o, a, i, r, s, c, u, l, d, _, p, f, h, m, g, v) {
    "use strict";

    function b(e) {
        if (!e || !e.menuItem) return null;
        var t = e.menuItem,
            n = e.project,
            a = t.logDisplayName,
            i = t.text;
        if (!i) return null;
        var s = h.getOnClickHandlerForCta(n, f.ComponentName.AVATAR_MENU, t);
        if (!s) return null;
        a && f.logDisplay(n, f.ComponentName.AVATAR_MENU, {
            featureType: a
        });
        var c = function(e) {
                if ("Enter" === e.key || " " === e.key) {
                    e.preventDefault();
                    e.target.click()
                }
            },
            u = y(p.BadgePosition.RIGHT_OF_MENU_ITEM, e);
        return r.default.createElement(o.AccountMenuItem, {
            className: "trials-menu-item",
            onClick: s,
            onKeyDown: c,
            tabIndex: 0
        }, i, u)
    }

    function y(e, t) {
        if (!t || !t.badges) return null;
        var o = t.badges,
            a = t.project,
            i = null;
        switch (e) {
            case p.BadgePosition.RIGHT_OF_MENU_ITEM:
                i = o.badgeRightOfMenuItem;
                break;
            case p.BadgePosition.RIGHT_OF_QUOTA:
                i = o.badgeRightOfQuota;
                break;
            case p.BadgePosition.UNDER_ACCOUNT_PHOTO:
                i = o.badgeUnderAccountPhoto
        }
        return !!i && r.default.createElement(m.TrialsBadge, n.__assign({
            className: "badge--" + e,
            project: a
        }, i))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), r = n.__importDefault(r);
    var A = function() {
            return null
        },
        E = function(e) {
            return r.default.createElement(o.AccountMenuItem, n.__assign({
                target: "_blank",
                rel: "noopener",
                tabIndex: 0
            }, e))
        },
        S = function(e) {
            return r.default.createElement(o.AccountMenuItem, {
                onClick: v.deleteSearchSuccessBannerSettings,
                href: s.getLogoutUrl(e.continuation),
                tabIndex: 0
            }, c._("Sign out"))
        };
    t.ChatLink = function(e) {
        return r.default.createElement(o.AccountMenuItem, {
            onClick: e.onClick,
            tabIndex: 0
        }, c._("Chat with Support"))
    };
    var T = function() {
        return r.default.createElement(E, {
            href: s.INSTALL_URL
        }, c._("Install"))
    };
    t.OverQuotaIcon = function(e) {
        return r.default.createElement("svg", n.__assign({
            width: "24px",
            height: "24px",
            viewBox: "0 0 24 24"
        }, e), r.default.createElement("g", {
            stroke: "none",
            strokeWidth: "1",
            fillRule: "evenodd"
        }, r.default.createElement("g", {
            transform: "translate(-224.000000, -32.000000)"
        }, r.default.createElement("g", {
            transform: "translate(224.000000, 32.000000)"
        }, r.default.createElement("path", {
            d: "M16.4822397,17.9600934 C18.6953749,17.9600934 19.6038811,16.3972799 18.5180399,14.4810895 L13.960911,6.43909736 C12.8721172,4.51769655 11.1038811,4.52290698 10.0180399,6.43909736 L5.46091101,14.4810895 C4.37211722,16.4024903 5.27664243,17.9600934 7.4967112,17.9600934 L16.4822397,17.9600934 Z M12.9894755,15.9600934 L10.9894755,15.9600934 L10.9894755,13.9600934 L12.9894755,13.9600934 L12.9894755,15.9600934 L12.9894755,15.9600934 Z M12.9894755,12.9600934 L10.9894755,12.9600934 L10.9894755,8.96009345 L12.9894755,8.96009345 L12.9894755,12.9600934 L12.9894755,12.9600934 Z",
            id: "Shape"
        })))))
    }, t.QuotaBar = function(e) {
        var n = e.accountSpaceUsage,
            o = e.experiments;
        if (n.currentStatus === u.AccountSpaceUsageStatus.READY) {
            var a = n.used,
                i = n.allocated,
                s = o && "ON" === o.inPlusToProTrials ? r.default.createElement(_.Badge, {
                    variant: _.BadgeVariant.PRO,
                    color: _.BadgeColor.PINK
                }) : null,
                d = y(p.BadgePosition.RIGHT_OF_QUOTA, e.trialsConfig),
                f = r.default.createElement("div", null, c.ungettext("%(used)s of %(allocated)s used", "%(used)s of %(allocated)s used", a).format({
                    used: l.format_bytes(a),
                    allocated: l.format_bytes(i)
                }), d ? d : s);
            if (a <= i) {
                return r.default.createElement("div", {
                    className: "quota-bar-container"
                }, r.default.createElement("div", {
                    className: "quota-bar-empty"
                }, r.default.createElement("div", {
                    className: "quota-bar-used",
                    style: {
                        width: Math.min(100, a / i * 100) + "%"
                    }
                }), void 0), f, void 0, void 0)
            }
            return r.default.createElement("div", {
                className: "quota-bar-container quota-bar-container--over-quota"
            }, r.default.createElement("div", {
                className: "quota-bar-empty"
            }, r.default.createElement("div", {
                className: "quota-bar-used quota-bar-used--over-quota"
            })), f, r.default.createElement("span", {
                className: "ax-visually-hidden"
            }, c._("Exceeded account quota")), r.default.createElement(t.OverQuotaIcon, null))
        }
        return r.default.createElement("div", {
            className: "quota-bar-container"
        }, r.default.createElement("div", {
            className: "quota-bar-empty"
        }), c._("Loading quota usage..."))
    };
    var N = function(e) {
            var t = e.quotaBarCTA,
                n = t.label,
                o = t.href,
                a = function() {
                    g.GrowthEventsLogger.log("wb_profile_menu_upgrade_link", {
                        action: "click",
                        button_text: n,
                        destination_url: o.split("?")[0],
                        location: "in_menu"
                    })
                };
            return g.GrowthEventsLogger.log("wb_profile_menu_upgrade_link", {
                action: "view",
                button_text: n,
                destination_url: o.split("?")[0],
                location: "in_menu"
            }), r.default.createElement("a", {
                className: "account-menu-upgrade-link",
                href: o,
                onClick: a
            }, n)
        },
        C = function(e) {
            return r.default.createElement(E, {
                href: e.href
            }, e.label)
        },
        w = function() {
            return r.default.createElement(o.AccountMenuItem, {
                href: s.SETTINGS_URL,
                tabIndex: 0
            }, c._("Settings"))
        },
        R = function(e) {
            var t = e.photoUrl ? c._("Change photo") : c._("Add photo");
            return r.default.createElement("button", {
                className: "account-menu-avatar-link " + (e.className || ""),
                onClick: e.changeAvatarCTA,
                tabIndex: 0
            }, t)
        },
        k = function(e) {
            var n, o, i = e.accountSpaceUsage,
                s = e.quotaBarCTA,
                c = e.experiments,
                l = e.trialsConfig;
            i && i.currentStatus !== u.AccountSpaceUsageStatus.NOT_APPLICABLE && (n = r.default.createElement(t.QuotaBar, {
                accountSpaceUsage: i,
                experiments: c,
                trialsConfig: l
            })), null == s || !c || "ON" === c.inPlusToProTrials || l && l.hideQuotaUpsellLink || (o = r.default.createElement(N, {
                quotaBarCTA: s
            }));
            var _ = y(p.BadgePosition.UNDER_ACCOUNT_PHOTO, l),
                f = b(l);
            return r.default.createElement("div", {
                className: "account-menu-user-summary"
            }, r.default.createElement("div", {
                className: "account-menu-user-summary__avatar-and-name"
            }, r.default.createElement(a.Button, {
                variant: "circular",
                className: "account-menu-user-summary__change-avatar",
                onClick: e.onClickChangeAvatar
            }, r.default.createElement(d.ProfilePicture, {
                size: 40,
                src: e.accountPhotoUrl
            })), r.default.createElement("div", {
                className: "account-menu-user-summary__display-name-and-link"
            }, e.userDisplayName, r.default.createElement(R, {
                changeAvatarCTA: e.onClickChangeAvatar,
                photoUrl: e.accountPhotoUrl
            }))), _, n, o, f)
        },
        L = (function(e) {
            function s() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.handleTriggerClick = function() {
                    var e = t.props,
                        n = e.disabled,
                        o = e.onClickTrigger;
                    !n && o && (g.GrowthEventsLogger.log("wb_profile_menu", {
                        action: "click",
                        location: "in_menu"
                    }), o())
                }, t
            }
            return n.__extends(s, e), s.prototype.render = function() {
                var e = this.props,
                    n = e.disabled,
                    s = e.accountPhotoUrl,
                    u = e.accountSpaceUsage,
                    l = e.quotaBarCTA,
                    _ = e.menuItemUpsells,
                    p = e.logoutContinuationPath,
                    f = e.showChatLink,
                    h = e.hideInstallLink,
                    m = e.showSettingsLink,
                    g = e.user,
                    v = e.onClickChangeAvatar,
                    b = e.onClickChatLink,
                    y = e.experiments,
                    E = e.trialsConfig,
                    N = g.display_name;
                return r.default.createElement(i.Popover, {
                    className: "account-menu",
                    onSelection: A
                }, r.default.createElement(i.PopoverTrigger, {
                    disabled: n,
                    "aria-label": c._("Account menu")
                }, r.default.createElement(a.Button, {
                    tagName: "span",
                    onClick: this.handleTriggerClick,
                    disabled: n,
                    variant: "circular"
                }, r.default.createElement(d.ProfilePicture, {
                    size: 32,
                    src: s
                }))), r.default.createElement(i.PopoverContent, {
                    attachment: "right"
                }, r.default.createElement(o.AccountMenuTitle, null, r.default.createElement(k, {
                    accountPhotoUrl: s,
                    userDisplayName: N,
                    onClickChangeAvatar: v,
                    accountSpaceUsage: u,
                    quotaBarCTA: l,
                    experiments: y,
                    trialsConfig: E
                })), m && r.default.createElement(w, null), !h && r.default.createElement(T, null), _ && _.map(C), f && r.default.createElement(t.ChatLink, {
                    onClick: b
                }), r.default.createElement(o.AccountMenuSeparator, null), r.default.createElement(S, {
                    continuation: p
                })))
            }, s
        })(r.default.PureComponent);
    t.AccountMenuView = L
}), define("modules/clean/react/account_menu/maestro_account_menu", ["require", "exports", "tslib", "modules/clean/react/account_menu/account_menu", "react", "modules/constants/account_menu"], function(e, t, n, o, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a), i = n.__importStar(i);
    var r = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            i.SHOW_INSTALL_LINK;
            var e = this.props,
                t = e.experiments,
                n = e.trialsConfig,
                r = e.user,
                s = e.viewer,
                c = e.hideInstallLink,
                u = void 0 !== c && c;
            return a.default.createElement(o.AccountMenu, {
                user: r,
                viewer: s,
                dropdownHorizontalDisplacement: -40,
                hideInstallLink: u,
                experiments: t,
                trialsConfig: n
            })
        }, t
    })(a.default.Component);
    t.MaestroAccountMenu = r
}), define("modules/clean/react/account_menu/profile_picture", ["require", "exports", "tslib", "react", "modules/core/i18n", "modules/clean/static_urls"], function(e, t, n, o, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o);
    var r = i.static_url("/static/images/avatar/faceholder-vflmhyJKO.svg");
    t.ProfilePicture = function(e) {
        return o.default.createElement("img", {
            className: "mc-avatar-image",
            style: {
                height: e.size,
                width: e.size
            },
            src: e.src || r,
            alt: a._("Account photo")
        })
    }
}), define("modules/clean/react/account_menu/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e[e.LOADING = 1] = "LOADING", e[e.READY = 2] = "READY", e[e.NOT_APPLICABLE = 3] = "NOT_APPLICABLE"
    })(t.AccountSpaceUsageStatus || (t.AccountSpaceUsageStatus = {}))
}), define("modules/clean/react/account_menu/urls", ["require", "exports", "modules/core/uri", "modules/core/i18n", "modules/constants/trademark"], function(e, t, n, o, a) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getLogoutUrl = function(e) {
        return new n.URI({
            scheme: "https",
            authority: "www.dropbox.com",
            path: "/logout",
            query: e ? {
                cont: e
            } : void 0
        }).toString()
    }, t.INSTALL_URL = new n.URI({
        scheme: "https",
        authority: "www.dropbox.com",
        path: "/install"
    }).toString(), t.SETTINGS_URL = new n.URI({
        scheme: "https",
        authority: "www.dropbox.com",
        path: "/account"
    }).toString(), t.upsellLinks = {
        UPGRADE_PLANS: {
            label: o._("Upgrade"),
            href: new n.URI({
                scheme: "https",
                authority: "www.dropbox.com",
                path: "/plans",
                query: {
                    trigger: "direct"
                }
            }).toString()
        },
        TRY_BUSINESS: {
            label: o._("Try %(trademark_business)s").format({
                trademark_business: a.TRADEMARK_BUSINESS
            }),
            href: new n.URI({
                scheme: "https",
                authority: "www.dropbox.com",
                path: "/business/try",
                query: {
                    _tk: "dropdown"
                }
            }).toString()
        }
    }
}), define("modules/clean/react/growth/feature_tour_modal/constants", ["require", "exports", "modules/clean/react/growth/trials/types"], function(e, t, n) {
    "use strict";

    function o(e) {
        switch (e) {
            case n.ProjectType.WEB_PLUS_TRIALS:
            case n.ProjectType.POT_OF_GOLD:
                return [a.UPLOAD, a.ORGANIZING, a.SHARING, a.HELP];
            case n.ProjectType.WEB_PLUS_DIRECT:
                return [a.UPLOAD, a.ORGANIZING, a.SHARING, a.HELP]
        }
        return []
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a;
    (function(e) {
        e.UPLOAD = "upload", e.SHARING = "sharing", e.ORGANIZING = "organizing", e.HELP = "help"
    })(a = t.TopicKey || (t.TopicKey = {}));
    (function(e) {
        e.LIST = "list", e.SINGLE = "single"
    })(t.TopicType || (t.TopicType = {}));
    (function(e) {
        e.IMAGE = "image", e.VIDEO = "video"
    })(t.VisualAssetType || (t.VisualAssetType = {}));
    (function(e) {
        e.CLOUD = "cloud", e.ORCHID = "orchid", e.WHEAT = "wheat", e.WHITE = "white"
    })(t.BackgroundColor || (t.BackgroundColor = {})), t.getTopicKeys = o
}), define("modules/clean/react/growth/feature_tour_modal/feature_tour_modal_loader", ["require", "exports", "tslib", "react", "modules/clean/react/async/loadable", "modules/clean/react/growth/feature_tour_modal/constants", "modules/clean/react/growth/trials/logging_util"], function(e, t, n, o, a, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o);
    var s = a.Loadable({
        loader: function() {
            return new Promise(function(t, n) {
                e(["modules/clean/react/growth/feature_tour_modal/components/feature_tour_modal"], t, n)
            }).then(n.__importStar).then(function(e) {
                return e.FeatureTourModal
            })
        }
    });
    t.renderFeatureTourModal = function(t, a, c) {
        var u = i.getTopicKeys(t);
        return u.length ? new Promise(function(t, n) {
            e(["modules/clean/react/modal"], t, n)
        }).then(n.__importStar).then(function(e) {
            e.Modal.showInstance(o.default.createElement(s, {
                topicKeys: u,
                className: a,
                handleDismiss: c,
                loggingProject: t,
                loggingComponentName: r.ComponentName.FEATURE_TOUR_MODAL
            }))
        }) : null
    }
}), define("modules/clean/react/growth/trials/components/badge", ["require", "exports", "tslib", "react", "modules/clean/react/growth/trials/types", "modules/clean/react/growth/trials/logging_util", "modules/clean/react/css"], function(e, t, n, o, a, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o);
    var s = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.componentDidMount = function() {
            this.props.text && i.logDisplay(this.props.project, i.ComponentName.AVATAR_MENU, {
                featureType: (this.props.text + "_badge").toLowerCase()
            })
        }, t.prototype.render = function() {
            var e = this.props,
                t = e.className,
                n = e.color,
                a = e.text;
            return !!a && o.default.createElement("span", {
                className: "growth-trials-badge badge badge--color-" + n + " " + t
            }, a)
        }, t.defaultProps = {
            className: "",
            color: a.BadgeColor.WHITE
        }, t
    })(o.default.PureComponent);
    t.TrialsBadgeComponent = s, t.TrialsBadge = r.requireCssWithComponent(s, ["/static/css/react/badge-vfl4JD5sn.css", "/static/css/react/growth/trials/components/badge-vflx2MoY8.css"])
}), define("modules/clean/react/growth/trials/logging_util", ["require", "exports", "tslib", "modules/core/browser", "modules/clean/analytics"], function(e, t, n, o, a) {
    "use strict";

    function i(e, t, i, r, s, c) {
        var u = "growth_" + t + "_" + i,
            l = {
                path: o.get_href(),
                project: e,
                trialsConfigPlatform: !0
            };
        return c ? a.TeamsWebActionsLogger.log(u, n.__assign({}, r, l), s) : a.ProEventsLogger.log(u, n.__assign({}, r, l), s, !1, e)
    }

    function r(e, t, o, a, r, s) {
        var c = n.__assign({}, a, {
            requestType: o
        });
        return i(e, t, h.AJAX_ERROR, c, r, s)
    }

    function s(e, t, o, a, r, s) {
        var c = n.__assign({}, a, {
            requestType: o
        });
        return i(e, t, h.AJAX_SUCCESS, c, r, s)
    }

    function c(e, t, o, a, r, s) {
        var c = n.__assign({}, a, {
            cta: o
        });
        return i(e, t, h.CTA_CLICKED, c, r, s)
    }

    function u(e, t, n, o, a) {
        return i(e, t, h.DISMISSED, n, o, a)
    }

    function l(e, t, n, o, a) {
        return i(e, t, h.DISPLAYED, n, o, a)
    }

    function d(e, t, o, a, r) {
        return i(e, t, h.COMPLETED, n.__assign({}, o), a, r)
    }

    function _(e, t, n, o, a) {
        return i(e, t, h.RENDER_ERROR, n, o, a)
    }

    function p(e, t, o, a, r, s) {
        return i(e, t, h.TASK_COMPLETED, n.__assign({}, a, {
            task: o
        }), r, s)
    }

    function f(e, t, o, a, r, s) {
        return i(e, t, h.TASK_EXPANDED, n.__assign({}, a, {
            task: o
        }), r, s)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o);
    var h;
    (function(e) {
        e.AJAX_ERROR = "ajax_error", e.AJAX_SUCCESS = "ajax_success", e.COMPLETED = "completed", e.CTA_CLICKED = "cta_clicked", e.DISMISSED = "dismissed", e.DISPLAYED = "displayed", e.RENDER_ERROR = "render_error", e.TASK_COMPLETED = "task_completed", e.TASK_EXPANDED = "task_expanded"
    })(h || (h = {}));
    (function(e) {
        e.AUTO_RENEW_TERMS = "auto_renew_terms", e.AVATAR_MENU = "avatar_menu", e.CANCEL_TRIAL_BIZ_INVITE = "cancel_trial_biz_invite_modal", e.CANCEL_TRIAL_EXPECTATIONS = "cancel_trial_expectations_modal", e.CANCEL_TRIAL_SURVEY = "cancel_trial_survey_modal", e.CONGRATS_MODAL = "congrats_modal", e.CONGRATS_SERVER_VIEW = "congrats_server_view", e.DIRECT_PURCHASE_DIALOG = "direct_purchase_dialog", e.DIRECT_PURCHASE_MODAL = "direct_purchase_modal", e.DIRECT_PURCHASE_SERVER_VIEW = "direct_purchase_server_view", e.FEATURE_TOUR_MODAL = "feature_tour_modal", e.ONBOARDING_SIDEBAR = "onboarding_sidebar", e.START_TRIAL_SERVER_VIEW = "start_trial_server_view", e.TRIAL_BANNER = "trial_banner", e.WELCOME_SERVER_VIEW = "welcome_server_view"
    })(t.ComponentName || (t.ComponentName = {}));
    (function(e) {
        e.CONFIRM = "confirm", e.CONTINUE = "continue", e.OPEN_EXTERNAL_LINK = "open_external_link", e.OPEN_MODAL = "open_modal"
    })(t.CtaType || (t.CtaType = {}));
    (function(e) {
        e.HELP = "help", e.ORGANIZING = "organizing", e.SHARING = "sharing", e.UPLOAD = "upload"
    })(t.FeatureType || (t.FeatureType = {}));
    (function(e) {
        e.CANCEL_TRIAL = "cancel_trial", e.START_TRIAL = "start_trial", e.TRANSITION_PLAN = "transition_plan", e.UPGRADE_TRIAL = "upgrade_trial"
    })(t.RequestType || (t.RequestType = {})), t.logAjaxError = r, t.logAjaxSuccess = s, t.logCtaClick = c, t.logDismiss = u, t.logDisplay = l, t.logCompleted = d, t.logRenderError = _, t.logTaskCompleted = p, t.logTaskExpanded = f
}), define("modules/clean/react/growth/trials/types", ["require", "exports"], function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    (function(e) {
        e.NEON_GREEN = "neon-green", e.STONE_FORTY = "stone-forty", e.SQUASH = "squash", e.PINK = "pink", e.WHITE = "white"
    })(t.BadgeColor || (t.BadgeColor = {}));
    (function(e) {
        e.RIGHT_OF_QUOTA = "right-of-quota", e.RIGHT_OF_MENU_ITEM = "right-of-menu-item", e.UNDER_ACCOUNT_PHOTO = "under-account-photo"
    })(t.BadgePosition || (t.BadgePosition = {}));
    (function(e) {
        e.CANCEL_TRIAL_BIZ_INVITE = "cancel_trial_biz_invite_modal", e.CANCEL_TRIAL_EXPECTATIONS = "cancel_trial_expectations_modal", e.CANCEL_TRIAL_SURVEY = "cancel_trial_survey_modal", e.FEATURE_TOUR_MODAL = "feature_tour_modal"
    })(t.ModalType || (t.ModalType = {}));
    (function(e) {
        e.CONGRATS = "congrats_server_view", e.DIRECT_PURCHASE = "direct_purchase_server_view", e.START_TRIAL = "start_trial_server_view", e.WELCOME = "welcome_server_view"
    })(t.ServerViewType || (t.ServerViewType = {}));
    (function(e) {
        e.SHOW_FEATURE_TOUR_MODAL = "show_feature_tour_modal"
    })(t.OnClickType || (t.OnClickType = {}));
    (function(e) {
        e.PLUS_TO_PRO_TRIALS = "plus_to_pro_trials", e.POT_OF_GOLD = "pot_of_gold", e.RIGHTSIZING = "rightsizing", e.WEB_PLUS_TRIALS = "web_plus_trials", e.WEB_PLUS_DIRECT = "web_plus_direct"
    })(t.ProjectType || (t.ProjectType = {}));
    (function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN", e[e.TRANSITIONS_TRIAL = 1] = "TRANSITIONS_TRIAL", e[e.PLATFORM_TRIAL = 2] = "PLATFORM_TRIAL"
    })(t.TrialSource || (t.TrialSource = {}))
}), define("modules/clean/react/growth/trials/util", ["require", "exports", "tslib", "modules/core/browser", "modules/clean/server_side_client_view_bridge", "modules/clean/react/growth/trials/logging_util", "modules/clean/react/growth/trials/types", "modules/clean/react/growth/util", "modules/clean/react/growth/feature_tour_modal/feature_tour_modal_loader", "modules/clean/api_v2/user_client"], function(e, t, n, o, a, i, r, s, c, u) {
    "use strict";

    function l(e) {
        return n.__awaiter(this, void 0, Promise, function() {
            var t, o, a, i, r, c, l, _, p, f, h;
            return n.__generator(this, function(n) {
                switch (n.label) {
                    case 0:
                        return t = {
                            primaryCTA: {}
                        }, (o = s.getActiveUserId()) ? (a = new u.UserApiV2Client, [4, a.ns("growth").rpc("get_trials_modal_config", {
                            modal_type: e
                        }, {
                            subjectUserId: o
                        })]) : [3, 2];
                    case 1:
                        return i = n.sent(), i ? (r = i.description, c = i.features, l = i.heading, _ = i.primary_cta, p = i.secondary_cta, f = d(_), h = p ? d(p) : void 0, [2, {
                            description: r,
                            features: c,
                            heading: l,
                            primaryCTA: f,
                            secondaryCTA: h
                        }]) : [2, t];
                    case 2:
                        return [2, t];
                    case 3:
                        return [2]
                }
            })
        })
    }

    function d(e) {
        return {
            href: e.href,
            onClickType: e.on_click_type,
            text: e.text
        }
    }

    function _(e, t, n) {
        var o = s.getActiveUserId();
        switch (n.onClickType) {
            case r.OnClickType.SHOW_FEATURE_TOUR_MODAL:
                return function() {
                    n.moduleName && o && s.markModuleAsCompleted(o, n.moduleName), i.logCtaClick(e, t, i.CtaType.OPEN_MODAL, {
                        modalType: r.ModalType.FEATURE_TOUR_MODAL
                    }), c.renderFeatureTourModal(e)
                }
        }
    }

    function p(e, t, n, o) {
        if (n.href || n.onClick || n.onClickType) return n.onClickType ? _(e, t, n) : n.onClick ? n.onClick : function() {
            return f(n.href || "#", e, t, !1, o, !0)
        }
    }

    function f(e, t, n, r, s, c) {
        if (i.logCtaClick(t, n, i.CtaType.OPEN_EXTERNAL_LINK, {
                href: e
            }), a.GetPlatform()) {
            var u = c ? a.ViewManagementClose : void 0;
            s ? a.OpenCredentialedBrowser(e, s, u) : a.OpenUncredentialedBrowser(e, u)
        } else r ? o.open_tab(e) : o.redirect(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), a = n.__importStar(a), t.fetchModalConfig = l, t.formatCtaConfigResult = d, t.getOnClickHandler = _, t.getOnClickHandlerForCta = p, t.openHref = f
}), define("modules/clean/react/maestro/header_conditions", ["require", "exports"], function(e, t) {
    "use strict";

    function n(e, t) {
        return !e.is_team_assume_user_session && !t.is_guest_admin
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.showAccountMenu = n
}), define("modules/clean/react/maestro/non_pagelet_top_menu_container", ["require", "exports", "tslib", "react", "modules/clean/react/maestro/top_menu_container", "modules/clean/react/account_menu/maestro_account_menu", "modules/clean/react/maestro/header_conditions", "modules/clean/react/user_notifications/dropdown", "modules/clean/viewer", "modules/clean/react/css"], function(e, t, n, o, a, i, r, s, c, u) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o);
    var l = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.renderTopMenus = function(e) {
            var t;
            e && (t = o.default.createElement(i.MaestroAccountMenu, {
                user: this.props.user,
                viewer: this.props.viewer
            }));
            var n = this.props.user.is_guest_admin ? "" : o.default.createElement(s.UserNotificationsDropdown, {
                isPagelet: !1
            });
            return [o.default.createElement("div", {
                className: "notifications-widget-container",
                key: "notifications-widget"
            }, n), o.default.createElement("div", {
                className: "account-menu-widget-container",
                key: "account-menu-widget"
            }, t)]
        }, t.prototype.render = function() {
            var e = r.showAccountMenu(this.props.viewer, this.props.user),
                t = e ? "" : "top-menu-container--account-menu-hidden",
                i = n.__assign({}, this.props, {
                    rightContent: this.renderTopMenus(e),
                    classNames: t
                });
            return o.default.createElement(a.TopMenuContainer, n.__assign({}, i))
        }, t.defaultProps = {
            viewer: c.Viewer.get_viewer()
        }, t
    })(o.default.Component);
    t.NonPageletTopMenuContainer = u.requireCssWithComponent(l, ["/static/css/pagelet-vflVkuuMY.css"], [a.TopMenuContainer, s.UserNotificationsDropdown])
}), define("modules/clean/react/maestro/nonpagelet_header", ["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/clean/viewer", "modules/clean/react/maestro/header", "modules/clean/react/maestro/non_pagelet_top_menu_container"], function(e, t, n, o, a, i, r, s) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o);
    var c = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.getUser = function() {
                var e = i.Viewer.get_viewer().get_users();
                if (0 === e.length) throw new Error("No logged in user detected. This header can only be used with a logged in user.");
                return e[0]
            }, t.prototype.render = function() {
                var e = o.default.createElement(s.NonPageletTopMenuContainer, n.__assign({}, this.props, {
                    user: this.getUser()
                }));
                return o.default.createElement("div", {
                    className: "maestro"
                }, o.default.createElement("div", {
                    className: "maestro-header--without-nav"
                }, o.default.createElement("header", {
                    className: "maestro-header page-header__shadow"
                }, o.default.createElement("div", {
                    className: "page-header"
                }, o.default.createElement(r.MaestroHeaderLogo, null), o.default.createElement("div", {
                    className: "maestro-header--right-content"
                }, e)))))
            }, t.defaultProps = {
                showSearchBar: !1,
                isSearchBarExpanded: !1
            }, t
        })(o.default.Component),
        u = a.requireCssWithComponent(c, ["/static/css/maestro_header_without_nav-vflzRZfOI.css"]);
    t.NonPageletMaestroHeader = u
}), define("modules/clean/react/user_notifications/actions", ["require", "exports", "tslib", "modules/clean/bolt", "modules/clean/loggers/notification_logger", "modules/clean/loggers/notification_tray_logger", "modules/clean/react/user_notifications/api", "modules/clean/react/user_notifications/constants", "modules/clean/react/user_notifications/dispatcher", "modules/clean/react/user_notifications/models", "modules/clean/react/user_notifications/store", "modules/clean/referrer_cleansing_redirect"], function(e, t, n, o, a, i, r, s, c, u, l, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), i = n.__importStar(i), r = n.__importStar(r), d = n.__importStar(d);
    var _ = (function() {
            function t() {
                var e = this;
                this.onUserNotificationUpdate = function() {
                    e.load().then(function(t) {
                        var n = e.getBoltChannelStates(t);
                        e.boltClient.update_states(n)
                    }, function() {})
                }, this.userNotificationRefreshCallback = function() {
                    e.load().then(function(t) {
                        e.boltClient.unsubscribe();
                        var n = e.getBoltChannelStates(t);
                        n.length > 0 && (e.boltClient = new o.BoltClient(n, e.onUserNotificationUpdate, e.userNotificationRefreshCallback), e.boltClient.start())
                    }, function() {})
                }
            }
            return t.prototype.asyncSharingAction = function(t) {
                new Promise(function(t, n) {
                    e(["modules/clean/react/user_notifications/sharing_actions"], t, n)
                }).then(n.__importStar).then(t)
            }, t.prototype.asyncGroupAction = function(t) {
                new Promise(function(t, n) {
                    e(["modules/clean/react/user_notifications/group_actions"], t, n)
                }).then(n.__importStar).then(t)
            }, t.prototype.load = function() {
                return c.userNotificationsDispatcher.dispatch({
                    type: s.ActionTypes.LOAD_REQUEST
                }), r.getAll(l.userNotificationsStore.getCursor(), this.activeUserOnlyMode).then(function(e) {
                    var t = [];
                    return t = t.concat(e.notifications), a.NotificationLogger.logReceive(t), c.userNotificationsDispatcher.dispatch({
                        type: s.ActionTypes.LOAD_SUCCESS,
                        data: e
                    }), e
                }, function() {
                    c.userNotificationsDispatcher.dispatch({
                        type: s.ActionTypes.LOAD_FAILURE
                    })
                })
            }, t.prototype.loadOnceAndWatch = function(e) {
                var t = this;
                this.hasLoadedOnce || (this.hasLoadedOnce = !0, this.activeUserOnlyMode = null != e && e, this.load().then(function(e) {
                    t.watch(e)
                }, function() {}))
            }, t.prototype.acknowledge = function(e) {
                c.userNotificationsDispatcher.dispatch({
                    type: s.ActionTypes.ACKNOWLEDGEMENT_REQUEST_SINGLE,
                    data: {
                        notifications: [e]
                    }
                }), r.ack(e)
            }, t.prototype.markAllAsSeen = function() {
                var e = l.userNotificationsStore.getUnseen();
                0 !== e.length && (r.markAsSeen(e), c.userNotificationsDispatcher.dispatch({
                    type: s.ActionTypes.MARK_AS_SEEN_REQUEST
                }))
            }, t.prototype.watch = function(e) {
                var t = this.getBoltChannelStates(e);
                t.length > 0 && (this.boltClient = new o.BoltClient(t, this.onUserNotificationUpdate, this.userNotificationRefreshCallback), this.boltClient.start())
            }, t.prototype.getBoltChannelStates = function(e) {
                var t = [];
                for (var n in e.cursor)
                    if (e.cursor.hasOwnProperty(n)) {
                        var a = null,
                            i = window.ensemble;
                        if (i && i.viewer && (a = i.viewer.getActiveUser()), !this.activeUserOnlyMode || (null != a ? a.userId : null) === parseInt(n, 10)) {
                            var r = new o.SignedChannelState("user_notification", n, e.cursor[n], e.boltToken[n]);
                            t.push(r)
                        }
                    }
                return t
            }, t.prototype.acknowledgeAll = function() {
                0 !== l.userNotificationsStore.getUnacknowledgedCount() && (i.logMarkAllAsRead(), a.NotificationLogger.logMarkAsRead(l.userNotificationsStore.getUnacknowledged(), a.NotificationLocations.TRAY), c.userNotificationsDispatcher.dispatch({
                    type: s.ActionTypes.ACKNOWLEDGEMENT_REQUEST
                }), r.ackAll(this.activeUserOnlyMode))
            }, t.prototype.viewNotifications = function() {
                this.markAllAsSeen()
            }, t.prototype.actionPerformed = function(e, t) {
                a.NotificationLogger.logAction(e, t), e.isUnread && this.acknowledge(e)
            }, t.prototype.triggerGenericLegacyNotificationAction = function(e) {
                this.actionPerformed(e, "click")
            }, t.prototype.dismissLegacySharingNotification = function(e, t) {
                this.actionPerformed(e, "button_1"), this.asyncSharingAction(function(e) {
                    e.registerDismiss(t)
                })
            }, t.prototype.mountFromLegacySharingNotification = function(e, t) {
                this.actionPerformed(e, "button_0"), this.asyncSharingAction(function(e) {
                    e.registerMount(t)
                })
            }, t.prototype.upgradeToMountFromLegacySharingNotification = function(e) {
                this.actionPerformed(e, "button_0"), this.asyncSharingAction(function(e) {
                    e.upgradeToMount()
                })
            }, t.prototype.triggerBluenoteAction = function(e, t, n) {
                this.actionPerformed(e, n), t.actionType === u.BluenoteActionTypes.OpenUrl ? this.performBluenoteOpenUrlAction(t.params) : t.actionType === u.BluenoteActionTypes.MountSharedFolder ? this.asyncSharingAction(function(n) {
                    n.performBluenoteMountSharedFolder(e, t.params)
                }) : t.actionType === u.BluenoteActionTypes.ApproveGroupJoinRequest ? this.asyncGroupAction(function(n) {
                    n.performBluenoteApproveGroupJoinRequestAction(e, t.params)
                }) : t.actionType === u.BluenoteActionTypes.RemoveGroupJoinRequest && this.asyncGroupAction(function(n) {
                    n.performBluenoteRemoveGroupJoinRequestAction(e, t.params)
                })
            }, t.prototype.performBluenoteOpenUrlAction = function(e) {
                e.urlPath && d.redirect(e.urlPath)
            }, t
        })(),
        p = new _;
    t.default = p
}), define("modules/clean/react/user_notifications/api", ["require", "exports", "tslib", "jquery", "modules/clean/ajax", "modules/clean/react/user_notifications/api_helper"], function(e, t, n, o, a, i) {
    "use strict";

    function r(e, t) {
        void 0 === e && (e = null), void 0 === t && (t = !1);
        var n = {
            count: 100,
            template_version: 5
        };
        null != e && (n.last_received_nid_by_user_id = JSON.stringify(e));
        var r;
        if (t) {
            if (null === e) {
                var s = window,
                    c = s.__REGISTER_NOTIFICATIONS_PREFETCH_HANDLER;
                if (c) return c.prefetchDeferred || (c.prefetchDeferred = o.default.Deferred(), c(function(e) {
                    c.prefetchDeferred.resolve(i.parseGetAllResponse(e))
                }, function() {
                    return null
                })), c.prefetchDeferred
            }
            r = a.SilentBackgroundRequest({
                url: "/web/notifications/retrieve_user",
                data: n,
                subject_user: window.ensemble.viewer.getActiveUser().userId,
                dataType: "json"
            })
        } else r = a.SilentBackgroundRequest({
            url: "/web/notifications/retrieve",
            data: n,
            dataType: "json"
        });
        return r.then(i.parseGetAllResponse)
    }

    function s(e) {
        void 0 === e && (e = !1);
        var t;
        return t = e ? a.SilentBackgroundRequest({
            url: "/web/notifications/ack_all_user",
            subject_user: window.ensemble.viewer.getActiveUser().userId,
            dataType: "json"
        }) : a.SilentBackgroundRequest({
            url: "/web/notifications/ack_all",
            dataType: "json"
        }), t.then(function(e) {
            return e.map(i.userNotificationDeserializer)
        })
    }

    function c(e) {
        a.SilentBackgroundBeaconRequest({
            url: "/web/notifications/ack",
            subject_user: e.userId,
            data: {
                nids: JSON.stringify([e.id])
            },
            dataType: "json"
        })
    }

    function u(e) {
        for (var t = {}, n = 0, o = e; n < o.length; n++) {
            var i = o[n];
            i.userId && i.id && (t[i.userId] || (t[i.userId] = [])).push(i.id)
        }
        var r = {
            nids_by_user_id: JSON.stringify(t)
        };
        a.SilentBackgroundRequest({
            url: "/web/notifications/mark_seen",
            data: r,
            dataType: "json"
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o), a = n.__importStar(a);
    t.getAll = r, t.ackAll = s, t.ack = c, t.markAsSeen = u
}), define("modules/clean/react/user_notifications/avatar_icon", ["require", "exports", "tslib", "react", "modules/clean/avatar/initials_avatar", "modules/clean/avatar/size"], function(e, t, n, o, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o);
    var r = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            n.thumbRequestId = null;
            var o = null,
                a = n.props.avatarIconRecord;
            return null != a.avatarUrl && (o = n.props.thumbStore.get_thumb(a.avatarUrl)), n.state = {
                avatarImage: o
            }, n
        }
        return n.__extends(t, e), t.prototype.componentDidMount = function() {
            this.bindAvatarUrl(this.props)
        }, t.prototype.componentWillUnmount = function() {
            this.unbindAvatarUrl()
        }, t.prototype.componentWillReceiveProps = function(e) {
            var t = this.props.avatarIconRecord,
                n = e.avatarIconRecord;
            t.avatarUrl !== n.avatarUrl && (this.unbindAvatarUrl(), this.bindAvatarUrl(e))
        }, t.prototype.bindAvatarUrl = function(e) {
            var t = this,
                n = e.avatarIconRecord;
            null != n.avatarUrl && (this.thumbRequestId = e.thumbStore.bind_url(n.avatarUrl, {
                onSuccess: function() {
                    var o = e.thumbStore.get_thumb(n.avatarUrl);
                    t.setState({
                        avatarImage: o
                    })
                }
            }))
        }, t.prototype.unbindAvatarUrl = function() {
            this.thumbRequestId && (this.props.thumbStore.unbind_url(this.thumbRequestId), this.thumbRequestId = null)
        }, t.prototype.render = function() {
            var e = this.props.avatarIconRecord;
            return null != this.state.avatarImage ? o.default.createElement("img", {
                className: this.props.className,
                src: this.state.avatarImage,
                alt: "",
                width: this.props.size,
                height: this.props.size
            }) : o.default.createElement(a.InitialsAvatarWithColorDerivedFromName, {
                name: e.avatarInitials,
                dimension: this.props.size,
                initials: e.avatarInitials,
                shape: "CIRCLE",
                optionalClass: this.props.className
            })
        }, t.displayName = "AvatarIcon", t.defaultProps = {
            size: i.AVATAR_DIMENSION_BY_SIZE.MEDIUM
        }, t
    })(o.default.Component);
    t.AvatarIcon = r
}), define("modules/clean/react/user_notifications/dispatcher", ["require", "exports", "modules/clean/flux/dispatcher"], function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.userNotificationsDispatcher = n.Dispatcher
}), define("modules/clean/react/user_notifications/dropdown", ["require", "exports", "tslib", "external/lodash", "react", "modules/clean/accessibility/tabbable", "modules/clean/loggers/notification_logger", "modules/clean/loggers/notification_tray_logger", "modules/clean/react/css", "modules/clean/react/user_notifications/actions", "modules/clean/react/user_notifications/dropdown_bell", "modules/clean/react/user_notifications/shared/tray_chrome", "modules/clean/react/user_notifications/renderer", "modules/clean/react/user_notifications/store", "spectrum/popover", "modules/core/i18n"], function(e, t, n, o, a, i, r, s, c, u, l, d, _, p, f, h) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), a = n.__importDefault(a), i = n.__importDefault(i), s = n.__importStar(s), u = n.__importDefault(u);
    var m = (function(t) {
            function c(e) {
                var n = t.call(this, e) || this;
                return n.onTrayMount = function() {
                    s.logTrayOpen(n.state.actionableCount), u.default.viewNotifications()
                }, n.logRenderWrapper = function(e, t) {
                    r.NotificationLogger.logRender(e, t, r.NotificationLocations.TRAY)
                }, n.onMenuToggle = function(e) {
                    var t = e.isOpen;
                    n.setState({
                        isOpen: t
                    }), c.requireAsyncModules()
                }, n.state = {
                    actionableCount: p.userNotificationsStore.getActionableCount(),
                    notifications: p.userNotificationsStore.getAllVisible(),
                    isStoreLoading: p.userNotificationsStore.isLoading(),
                    isDisabled: !0,
                    isOpen: !1
                }, n
            }
            return n.__extends(c, t), c.prototype.componentWillMount = function() {
                new i.default
            }, c.prototype.componentDidMount = function() {
                u.default.loadOnceAndWatch(this.props.isPagelet), this.removeStoreListener = p.userNotificationsStore.addListener(this.onUpdateFromStore.bind(this)), this.onUpdateFromStore();
                var e = new _.NotificationRenderer;
                this.notificationRenderFunc = e.renderNotification.bind(e), this.setState(function(e, t) {
                    return e.isDisabled = !1, e
                })
            }, c.prototype.componentWillUnmount = function() {
                this.removeStoreListener()
            }, c.prototype.onUpdateFromStore = function() {
                this.setState(function(e, t) {
                    return e.actionableCount = p.userNotificationsStore.getActionableCount(), e.notifications = p.userNotificationsStore.getAllVisible(), e.isStoreLoading = p.userNotificationsStore.isLoading(), e
                })
            }, c.prototype.render = function() {
                var e = a.default.createElement("div", {
                        id: "event-feed-container"
                    }, a.default.createElement("div", {
                        id: "event-feed"
                    }, a.default.createElement(d.NotificationsTrayChrome, {
                        unreadSectionTitle: h._("Unread"),
                        readSectionTitle: h._("Recent"),
                        notifications: this.state.notifications,
                        markAllAsReadButtonTitle: h._("Mark all as read"),
                        markAllAsReadAction: u.default.acknowledgeAll,
                        isLoading: this.state.isStoreLoading,
                        loadingMessage: h._("Loading ..."),
                        emptyMessage: h._("You don’t have any notifications yet."),
                        notifRenderFunc: this.notificationRenderFunc,
                        notifLogRenderFunc: this.logRenderWrapper,
                        onTrayMount: this.onTrayMount
                    }))),
                    t = this.state.actionableCount;
                return a.default.createElement(f.Popover, {
                    onSelection: o.noop,
                    onMenuToggle: this.onMenuToggle
                }, a.default.createElement(f.PopoverTrigger, {
                    "aria-label": t > 0 ? h._("Notifications menu, with new notifications") : h._("Notifications menu"),
                    className: "notification-button"
                }, a.default.createElement(l.UserNotificationsDropdownBell, {
                    actionableCount: t,
                    isSelected: this.state.isOpen
                })), a.default.createElement(f.PopoverContent, {
                    attachment: "right",
                    className: "notifications-popover-content"
                }, a.default.createElement(f.PopoverContentTitle, null, h._("Notifications")), a.default.createElement("div", {
                    className: "notifications-dropdown"
                }, e)))
            }, c.displayName = "UserNotificationsDropdown", c.requireAsyncModules = o.once(function() {
                return new Promise(function(t, n) {
                    e(["modules/clean/react/user_notifications/sharing_actions"], t, n)
                }).then(n.__importStar).then(function() {
                    return null
                })
            }), c.defaultProps = {
                isPagelet: !1,
                accountMenuVisible: !0
            }, c
        })(a.default.Component),
        g = c.requireCssWithComponent(m, ["/static/css/scooter/scooter-scoped-vflFpCY2P.css", "/static/css/spectrum/index.web-vflagwTbb.css", "/static/css/notifications-vflQlYjEo.css"]);
    t.UserNotificationsDropdown = g
}), define("modules/clean/react/user_notifications/dropdown_bell", ["require", "exports", "tslib", "spectrum/icon_global", "react", "modules/core/i18n"], function(e, t, n, o, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), a = n.__importDefault(a);
    var r = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this,
                o = n.props.actionableCount > 0;
            return o && n.scheduleShakeReset(), n.state = {
                isShaking: o
            }, n
        }
        return n.__extends(t, e), t.prototype.componentWillUnmount = function() {
            clearTimeout(this.shakeResetTimeout)
        }, t.prototype.componentWillReceiveProps = function(e) {
            e.actionableCount > 0 && e.actionableCount !== this.props.actionableCount && (this.setState({
                isShaking: !0
            }), this.scheduleShakeReset())
        }, t.prototype.scheduleShakeReset = function() {
            var e = this;
            clearTimeout(this.shakeResetTimeout), this.shakeResetTimeout = setTimeout(function() {
                e.setState({
                    isShaking: !1
                })
            }, 500)
        }, t.prototype.renderBell = function() {
            return a.default.createElement(o.IconGlobal, {
                name: "notifications",
                className: "mcl-notifications-icon",
                selected: this.props.isSelected
            })
        }, t.prototype.renderBadge = function() {
            return this.props.actionableCount ? a.default.createElement("div", {
                className: "badge-red-dot"
            }) : null
        }, t.prototype.render = function() {
            var e = "";
            return this.props.actionableCount > 0 && (e = i.ungettext("%(count)s new", "%(count)s new", this.props.actionableCount, {
                comment: "new notification count"
            }).format({
                count: this.props.actionableCount
            })), a.default.createElement("div", {
                className: "notification-button-bell-container"
            }, a.default.createElement("span", {
                className: "ax-visually-hidden"
            }, e), this.renderBell(), this.renderBadge())
        }, t.defaultProps = {
            actionableCount: 0
        }, t
    })(a.default.Component);
    t.UserNotificationsDropdownBell = r
}), define("modules/clean/react/user_notifications/dropdown_bluenote_row", ["require", "exports", "tslib", "external/classnames", "external/purify", "react", "modules/clean/keycode", "modules/clean/react/button", "modules/clean/react/user_notifications/actions", "modules/clean/react/user_notifications/avatar_icon", "modules/clean/react/user_notifications/generic_icon", "modules/clean/react/user_notifications/single_task_preview", "modules/clean/react/user_notifications/thumbnail_preview"], function(e, t, n, o, a, i, r, s, c, u, l, d, _) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o), a = n.__importStar(a), i = n.__importDefault(i), c = n.__importDefault(c);
    var p = (function(e) {
        function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.handleSurfaceAction = function() {
                var e = t.props.notification,
                    n = e.typeData.surfaceAction;
                null != n && c.default.triggerBluenoteAction(e, n, "surface")
            }, t.handleKeyDown = function(e) {
                e.keyCode !== r.KeyCode.ENTER && e.keyCode !== r.KeyCode.SPACE || t.handleSurfaceAction()
            }, t
        }
        return n.__extends(t, e), t.prototype.renderNotificationText = function(e) {
            var t = e.typeData.displayMessage;
            return t ? i.default.createElement("div", {
                className: "feed-text--button-wrapper"
            }, i.default.createElement("button", {
                tabIndex: -1,
                className: "u-unbutton u-font-left feed-text__button"
            }, i.default.createElement("div", {
                className: "feed-text__button-text",
                dangerouslySetInnerHTML: {
                    __html: a.sanitize(t)
                }
            }))) : null
        }, t.prototype.renderImage = function(e) {
            var t = e.typeData.icon;
            return t && (t.avatarInitials || t.avatarUrl) ? i.default.createElement(u.AvatarIcon, {
                avatarIconRecord: t,
                thumbStore: this.props.thumbStore,
                className: "feed-image feed-image--bluenote"
            }) : i.default.createElement(l.GenericIcon, {
                genericIconRecord: t,
                className: "feed-image feed-image--bluenote"
            })
        }, t.prototype.renderTimeStamp = function(e) {
            if (this.props.hideDisplayTimestamp) return null;
            var t = e.displayTime;
            return i.default.createElement("span", {
                className: "feed-time"
            }, t)
        }, t.prototype.renderPreview = function(e) {
            var t = e.typeData.preview;
            if (!t) return null;
            var n = null;
            t.showThumbnail && e.bluenoteObject && (n = i.default.createElement(_.ThumbnailPreview, {
                object: e.bluenoteObject
            }));
            var o = null;
            t.tasks && t.tasks.tasks && t.tasks.tasks.length > 0 && t.tasks.tasks[0] && (o = i.default.createElement(d.SingleTaskPreview, {
                task: t.tasks.tasks[0]
            }));
            var a = null;
            return t.quote && (a = i.default.createElement("div", {
                className: "preview-quote"
            }, t.quote)), i.default.createElement("div", null, n, o, a)
        }, t.prototype.renderButton = function(e, t, n) {
            return i.default.createElement(s.button, {
                className: "notification u-mar-right-xs u-mar-top-xs",
                importance: n > 0 ? "tertiary" : void 0,
                onClick: function(t) {
                    t.target.disabled = !0;
                    var o = (e.typeData.buttonActions || [])[n];
                    c.default.triggerBluenoteAction(e, o, "button_" + n), t.stopPropagation()
                }
            }, t)
        }, t.prototype.renderButtonActions = function(e) {
            var t = this,
                n = [];
            return (e.typeData.buttonActions || []).forEach(function(o, a) {
                n.push(t.renderButton(e, o.buttonLabel, a))
            }), n.length > 0 ? i.default.createElement("span", {
                className: "feed-action action-available"
            }, n) : null
        }, t.prototype.render = function() {
            var e = this.props.notification,
                t = e.typeData;
            if (!t) return null;
            var n = o.default({
                "feed-row": !0,
                clickable: null != t.surfaceAction,
                read: this.props.isAcknowledged
            });
            return i.default.createElement("div", {
                onClick: this.handleSurfaceAction,
                onKeyDown: this.handleKeyDown,
                className: n,
                role: "button",
                tabIndex: 0
            }, this.renderImage(e), this.renderNotificationText(e), this.renderPreview(e), this.renderTimeStamp(e), this.renderButtonActions(e))
        }, t.displayName = "UserNotificationsDropdownBluenoteRow", t
    })(i.default.Component);
    t.UserNotificationsDropdownBluenoteRow = p
}), define("modules/clean/react/user_notifications/dropdown_row", ["require", "exports", "tslib", "react", "external/react-dom-factories", "external/prop-types", "external/lodash", "jquery", "modules/clean/react/user_notifications/actions", "modules/clean/react/user_notifications/legacy_thumb_loader", "modules/clean/react/user_notifications/models", "modules/clean/sprite"], function(e, t, n, o, a, i, r, s, c, u, l, d) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o), a = n.__importStar(a), i = n.__importStar(i), r = n.__importStar(r), s = n.__importDefault(s), c = n.__importDefault(c), d = n.__importDefault(d);
    var _ = a.div,
        p = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t._buildLegacyElement = function(e, n) {
                    var o = s.default(t.refs.dropdownLegacyRow);
                    return o.html(e.rawDropdownRowHtml), t._initImages(o), t._setTimeLabel(o, e), t._addClientStateClasses(o, e, n), t._initActionHandlers(e, o), o
                }, t._initImages = function(e) {
                    return e.find("img").each(function(e, n) {
                        var o = s.default(n);
                        return o.attr("alt", ""), t._loadImage(o)
                    })
                }, t._setTimeLabel = function(e, n) {
                    var o = e.find("#feed-time-label");
                    if (null != o) return t.props.hideDisplayTimestamp ? o.text("") : o.text(n.displayTime)
                }, t._loadImage = function(e) {
                    var n = e.data("src");
                    if (n) return t.props.legacyThumbLoader.load(n).progress(function() {
                        return e.data("src", null), e.data("loading-src", n)
                    }).then(function(t) {
                        e.data("loading-src", null);
                        var n = function() {
                            return e.addClass("thumbnail"), e.parent(".feed-thumbnail").addClass("has-frame")
                        };
                        return 0 === t.indexOf("data:image") ? n() : (e.load(n), e.error(r.once(function() {
                            var t = e.data("fail-src") || d.default.SPACER;
                            return e.attr("src", t)
                        }))), e.attr("src", t)
                    })
                }, t._addClientStateClasses = function(e, t, n) {
                    var o = e.hasClass("feed-row") ? e : e.find(".feed-row");
                    if (t.isInvisible && o.addClass("invisible"), n) return o.addClass("read")
                }, t._initActionHandlers = function(e, t) {
                    return t.on("click", function() {
                        return c.default.triggerGenericLegacyNotificationAction(e), !0
                    }), t.on("click", ".share-content-dismiss", function() {
                        return c.default.dismissLegacySharingNotification(e, this), !1
                    }), t.on("click", ".share-content-mount", function() {
                        return c.default.mountFromLegacySharingNotification(e, this), !1
                    }), t.on("click", ".share-content-upgrade-mount", function() {
                        return c.default.upgradeToMountFromLegacySharingNotification(e), !1
                    })
                }, t
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                return this._buildLegacyElement(this.props.notification, this.props.isAcknowledged)
            }, t.prototype.render = function() {
                return _({
                    ref: "dropdownLegacyRow"
                })
            }, t.displayName = "UserNotificationsDropdownRow", t.propTypes = {
                notification: i.instanceOf(l.UserNotification).isRequired,
                legacyThumbLoader: i.instanceOf(u.LegacyThumbLoader).isRequired,
                isAcknowledged: i.bool.isRequired,
                hideDisplayTimestamp: i.bool
            }, t
        })(o.default.Component);
    t.default = p
}), define("modules/clean/react/user_notifications/generic_icon", ["require", "exports", "tslib", "react", "modules/clean/react/image", "modules/clean/static_urls"], function(e, t, n, o, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o), t.GenericIcon = function(e) {
        var t = e.genericIconRecord,
            n = null != t ? t.lowResIconUrl : null,
            r = null != t ? t.highResIconUrl : null;
        return null != n && null != r || (n = i.static_url("/static/images/icons32/system_notification_default_icon-vflSQSQdl.png"), r = i.static_url("/static/images/icons64/system_notification_default_icon-vfl0Gu6Pt.png")), o.default.createElement("div", {
            className: e.className
        }, o.default.createElement(a.Image, {
            src: n,
            srcHiRes: r
        }))
    }, t.GenericIcon.displayName = "GenericIcon"
}), define("modules/clean/react/user_notifications/legacy_thumb_loader", ["require", "exports", "tslib", "external/lodash", "jquery", "modules/clean/photos/batch_thumb_loader"], function(e, t, n, o, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o), a = n.__importDefault(a);
    var r = (function() {
        function e() {
            this._cache = {};
            var e = new i.BatchThumbLoader({
                batch_size: 16,
                max_parallel_requests: 24
            });
            this._queueThumb = function(t, n, o) {
                return e.queue_thumb(t, n, {
                    onrequest: o
                })
            }, this._flushQueue = o.debounce(function() {
                return e.flush()
            }, 0)
        }
        return e.prototype.load = function(e) {
            if (!this._cache[e]) {
                var t = new a.default.Deferred;
                this._queueThumb(e, t.resolve, t.notify), this._flushQueue(), this._cache[e] = t.promise()
            }
            return this._cache[e]
        }, e
    })();
    t.LegacyThumbLoader = r
}), define("modules/clean/react/user_notifications/renderer", ["require", "exports", "tslib", "react", "modules/clean/photos/thumb_loading/generic_thumb_store", "modules/clean/react/user_notifications/dropdown_bluenote_row", "modules/clean/react/user_notifications/dropdown_row", "modules/clean/react/user_notifications/legacy_thumb_loader", "modules/clean/react/user_notifications/models"], function(e, t, n, o, a, i, r, s, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o), r = n.__importDefault(r);
    var u = (function() {
        function e() {
            this.legacyThumbLoader = new s.LegacyThumbLoader, this.genericThumbStore = new a.GenericThumbStore
        }
        return e.prototype.renderNotification = function(e, t) {
            return e.rawDropdownRowHtml ? o.default.createElement(r.default, {
                notification: e,
                legacyThumbLoader: this.legacyThumbLoader,
                isAcknowledged: t,
                hideDisplayTimestamp: !0
            }) : e.typeId === c.NotificationTypes.Bluenote ? o.default.createElement(i.UserNotificationsDropdownBluenoteRow, {
                notification: e,
                thumbStore: this.genericThumbStore,
                hideDisplayTimestamp: !0,
                isAcknowledged: t
            }) : null
        }, e
    })();
    t.NotificationRenderer = u
}), define("modules/clean/react/user_notifications/shared/notification_row_wrapper", ["require", "exports", "tslib", "external/classnames", "react", "modules/clean/react/css"], function(e, t, n, o, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o), a = n.__importDefault(a);
    var r = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.state = {
                    hover: !1
                }, n.onMouseOver = n.onMouseOver.bind(n), n.onMouseOut = n.onMouseOut.bind(n), n
            }
            return n.__extends(t, e), t.prototype.onMouseOver = function() {
                this.setState({
                    hover: !0
                })
            }, t.prototype.onMouseOut = function() {
                this.setState({
                    hover: !1
                })
            }, t.prototype.renderInfoSheet = function() {
                var e = o.default({
                    "notification-row-info-sheet": !0,
                    "notification-row-info-sheet--visible": this.state.hover,
                    "notification-row-info-sheet--unread": this.props.unread
                });
                return a.default.createElement("div", {
                    className: e
                }, a.default.createElement("div", {
                    className: "notification-row-info-sheet--timestamp"
                }, this.props.timestamp))
            }, t.prototype.render = function() {
                return a.default.createElement("div", {
                    className: "notification-row-wrapper",
                    onMouseOver: this.onMouseOver,
                    onMouseOut: this.onMouseOut
                }, this.renderInfoSheet(), this.props.row)
            }, t
        })(a.default.Component),
        s = i.requireCssWithComponent(r, ["/static/css/user_notifications_shared-vflWMEVxl.css"]);
    t.NotificationRowWrapper = s
}), define("modules/clean/react/user_notifications/shared/tray_chrome", ["require", "exports", "tslib", "react", "external/react-dom", "modules/clean/react/css", "modules/clean/react/user_notifications/shared/tray_section"], function(e, t, n, o, a, i, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o), a = n.__importStar(a);
    var s = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.handleOnScroll = function() {
                    n.scrollWithinOffsetToBottom(10) && (n.logRendersForPage(n.state.visiblePages), n.setState({
                        visiblePages: n.state.visiblePages + 1
                    }))
                }, n.handleOnWheel = function(e) {
                    var t = e.originalEvent || e,
                        o = t.deltaY ? t.deltaY * -40 : t.wheelDelta,
                        i = a.findDOMNode(n);
                    o <= 0 && n.scrollWithinOffsetToBottom(0) ? e.preventDefault() : o >= 0 && 0 === i.scrollTop && e.preventDefault()
                };
                var o = n.processNotifications(n.props.notifications);
                return n.state = {
                    visiblePages: 1,
                    unreadNotifications: o.unreadNotifications,
                    readNotifications: o.readNotifications
                }, n
            }
            return n.__extends(t, e), t.prototype.componentDidMount = function() {
                this.props.onTrayMount(), this.logRendersForPage(0)
            }, t.prototype.processNotifications = function(e) {
                var t = this.state && this.state.unreadNotifications || [],
                    n = {};
                t.forEach(function(e) {
                    return n[e.key] = !0
                });
                var o = [],
                    a = [];
                return e.forEach(function(e) {
                    e.isUnread || n[e.key] ? o.push(e) : a.push(e)
                }), {
                    unreadNotifications: o,
                    readNotifications: a
                }
            }, t.prototype.logRendersForPage = function(e) {
                var t = this.state.unreadNotifications.concat(this.state.readNotifications).slice(10 * e, 10 * (e + 1));
                this.props.notifLogRenderFunc(t, 10 * e)
            }, t.prototype.shouldComponentUpdate = function(e, t, n) {
                return !(e.isLoading && !this.props.isLoading)
            }, t.prototype.componentWillReceiveProps = function(e, t) {
                this.setState(this.processNotifications(e.notifications))
            }, t.prototype.scrollWithinOffsetToBottom = function(e) {
                var t = a.findDOMNode(this);
                return t.scrollHeight - t.scrollTop - t.offsetHeight <= e
            }, t.prototype.render = function() {
                if (this.props.isLoading) return o.default.createElement("div", {
                    className: "notifications-tray--loading"
                }, this.props.loadingMessage);
                if (0 === this.state.unreadNotifications.length && 0 === this.state.readNotifications.length) return o.default.createElement("div", {
                    className: "notifications-tray--empty"
                }, this.props.emptyMessage);
                var e = this.state.unreadNotifications.slice(0, 10 * this.state.visiblePages),
                    t = this.state.readNotifications.slice(0, 10 * this.state.visiblePages - e.length);
                return o.default.createElement("div", {
                    className: "notifications-tray--loaded",
                    onScroll: this.handleOnScroll,
                    onWheel: this.handleOnWheel
                }, o.default.createElement(r.NotificationsTraySection, {
                    notifications: e,
                    sectionTitle: this.props.unreadSectionTitle,
                    actionButtonText: this.props.markAllAsReadButtonTitle,
                    actionButtonAction: this.props.markAllAsReadAction,
                    notifRenderFunc: this.props.notifRenderFunc,
                    isUnreadSection: !0
                }), o.default.createElement(r.NotificationsTraySection, {
                    notifications: t,
                    sectionTitle: this.props.readSectionTitle,
                    notifRenderFunc: this.props.notifRenderFunc,
                    isUnreadSection: !1
                }))
            }, t.displayName = "NotificationsTrayChrome", t
        })(o.default.Component),
        c = i.requireCssWithComponent(s, ["/static/css/user_notifications_shared-vflWMEVxl.css"]);
    t.NotificationsTrayChrome = c
}), define("modules/clean/react/user_notifications/shared/tray_section", ["require", "exports", "tslib", "react", "modules/clean/react/css", "modules/clean/react/user_notifications/shared/notification_row_wrapper"], function(e, t, n, o, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o);
    var r = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.onClickActionButton = n.onClickActionButton.bind(n), n
            }
            return n.__extends(t, e), t.prototype.onClickActionButton = function() {
                this.props.actionButtonAction && this.props.actionButtonAction()
            }, t.prototype.renderReadSectionHeader = function() {
                var e = null;
                return this.props.actionButtonText && (e = o.default.createElement("button", {
                    className: "notifications-tray-section-header--button",
                    onClick: this.onClickActionButton,
                    tabIndex: 0
                }, this.props.actionButtonText)), o.default.createElement("div", {
                    className: "notifications-tray-section-header"
                }, o.default.createElement("span", {
                    className: "notifications-tray-section-header--title"
                }, this.props.sectionTitle), e)
            }, t.prototype.render = function() {
                if (0 === this.props.notifications.length) return null;
                for (var e = [], t = 0, n = this.props.notifications; t < n.length; t++) {
                    var a = n[t],
                        r = this.props.notifRenderFunc(a, !a.isUnread);
                    null != r && e.push(o.default.createElement(i.NotificationRowWrapper, {
                        row: r,
                        timestamp: a.displayTime,
                        unread: a.isUnread
                    }))
                }
                return o.default.createElement("div", null, this.renderReadSectionHeader(), e)
            }, t
        })(o.default.Component),
        s = a.requireCssWithComponent(r, ["/static/css/user_notifications_shared-vflWMEVxl.css"]);
    t.NotificationsTraySection = s
}), define("modules/clean/react/user_notifications/single_task_preview", ["require", "exports", "tslib", "external/classnames", "spectrum/checkbox", "react"], function(e, t, n, o, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o), i = n.__importDefault(i);
    var r = (function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return n.__extends(t, e), t.prototype.render = function() {
            var e = this.props.task,
                t = e.isComplete ? "checked" : "unchecked",
                n = o.default({
                    "preview-single-task--text": !0,
                    "preview-single-task--text--complete": e.isComplete
                });
            return i.default.createElement("div", {
                className: "preview-single-task"
            }, i.default.createElement("div", null, i.default.createElement(a.Checkbox, {
                className: "preview-single-task--checkbox",
                checked: t,
                disabled: !0
            })), i.default.createElement("div", {
                className: n
            }, e.name))
        }, t
    })(i.default.Component);
    t.SingleTaskPreview = r
}), define("modules/clean/react/user_notifications/store", ["require", "exports", "tslib", "external/lodash", "modules/clean/flux/flux_store", "modules/clean/react/user_notifications/constants", "modules/clean/react/user_notifications/dispatcher", "modules/clean/react/user_notifications/models", "modules/clean/react/user_notifications/api_helper"], function(e, t, n, o, a, i, r, s, c) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importStar(o);
    var u = (function(e) {
        function t(t) {
            var n = e.call(this, t) || this;
            return n.isAcknowledged = function(e) {
                return e.isRead
            }, n.markNotificationAsReadLocally = function(e) {
                e.isUnread && (e.status = s.NotificationStatuses.Read)
            }, n.isLoadingFlag = !1, n.userNotifications = [], n
        }
        return n.__extends(t, e), t.prototype.isLoading = function() {
            return this.isLoadingFlag
        }, t.prototype.getActionableCount = function() {
            return this.getUnseenInternal().length
        }, t.prototype.getUnacknowledgedCount = function() {
            return this.getUnacknowledgedInternal().length
        }, t.prototype.getCursor = function() {
            return this.cursor
        }, t.prototype.getAll = function() {
            return this.userNotifications
        }, t.prototype.getAllVisible = function() {
            return this.userNotifications.filter(function(e) {
                return !e.isInvisible
            })
        }, t.prototype.getUnacknowledged = function() {
            return this.getUnacknowledgedInternal()
        }, t.prototype.getUnacknowledgedInternal = function() {
            return this.userNotifications.filter(function(e) {
                return e.isUnread
            })
        }, t.prototype.getUnseen = function() {
            return this.getUnseenInternal()
        }, t.prototype.getUnseenInternal = function() {
            return this.userNotifications.filter(function(e) {
                return !e.isSeen
            })
        }, t.prototype.onLoadRequest = function() {
            this.isLoadingFlag || (this.isLoadingFlag = !0, this.__emitChange())
        }, t.prototype.onLoadSuccess = function(e) {
            if (this.isLoadingFlag && (this.isLoadingFlag = !1, this.__emitChange()), o.isEqual(e.cursor, this.cursor) || (this.cursor = e.cursor, this.__emitChange()), e.notifications.length > 0) {
                var t = {};
                e.notifications.concat(this.userNotifications).forEach(function(e) {
                    t[e.key] || (t[e.key] = e)
                }), this.userNotifications = o.values(t).sort(c.userNotificationComparator), this.__emitChange()
            }
        }, t.prototype.onLoadFailure = function() {
            this.isLoadingFlag && (this.isLoadingFlag = !1, this.__emitChange())
        }, t.prototype.onAcknowledgementRequest = function() {
            this.userNotifications.forEach(this.markNotificationAsReadLocally), this.__emitChange()
        }, t.prototype.onAcknowledgementRequestSingle = function(e) {
            this.markNotificationAsReadLocally(e), this.__emitChange()
        }, t.prototype.onMarkAsSeenRequest = function() {
            this.userNotifications.forEach(function(e) {
                e.isSeen || (e.seenState = s.NotificationSeenState.Seen)
            }), this.__emitChange()
        }, t.prototype.__onDispatch = function(e) {
            switch (e.action.type) {
                case i.ActionTypes.LOAD_REQUEST:
                    this.onLoadRequest();
                    break;
                case i.ActionTypes.LOAD_SUCCESS:
                    this.onLoadSuccess(e.action.data);
                    break;
                case i.ActionTypes.LOAD_FAILURE:
                    this.onLoadFailure();
                    break;
                case i.ActionTypes.ACKNOWLEDGEMENT_REQUEST:
                    this.onAcknowledgementRequest();
                    break;
                case i.ActionTypes.ACKNOWLEDGEMENT_REQUEST_SINGLE:
                    this.onAcknowledgementRequestSingle(e.action.data.notifications[0]);
                    break;
                case i.ActionTypes.MARK_AS_SEEN_REQUEST:
                    this.onMarkAsSeenRequest()
            }
        }, t
    })(a.FluxStore);
    t.UserNotificationsStore = u, t.userNotificationsStore = new u(r.userNotificationsDispatcher)
}), define("modules/clean/react/user_notifications/thumbnail_preview", ["require", "exports", "tslib", "react", "spectrum/file_icon", "spectrum/icon_content"], function(e, t, n, o, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o);
    var r = {
            "paper-pad": "paper-small",
            "paper-folder": "folder-small",
            "dropbox-folder": "folder-small"
        },
        s = (function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return n.__extends(t, e), t.prototype.render = function() {
                var e = this.props.object || {},
                    t = e.type,
                    n = e.name;
                return t && n ? o.default.createElement("div", {
                    className: "preview-thumbnail--wrapper"
                }, o.default.createElement("div", {
                    className: "preview-thumbnail"
                }, "dropbox-file" === t ? o.default.createElement(a.FileIcon, {
                    path: n,
                    variant: "small",
                    className: "preview-thumbnail--icon"
                }) : o.default.createElement(i.IconContent, {
                    name: r[t] || "unknown-small",
                    className: "preview-thumbnail--icon"
                }), o.default.createElement("div", {
                    className: "preview-thumbnail--text"
                }, n))) : null
            }, t.displayName = "ThumbnailPreview", t
        })(o.default.Component);
    t.ThumbnailPreview = s
}), define("modules/clean/sprite", ["require", "exports", "tslib", "jquery", "modules/clean/static_urls", "modules/core/html"], function(e, t, n, o, a, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), o = n.__importDefault(o);
    var r = {
        SPACER: a.static_url("/static/images/icons/icon_spacer-vflN3BYt2.gif"),
        CLASS_PREFIX: "s_",
        _make_class: function(e, t) {
            return this.CLASS_PREFIX + e + "_" + t
        },
        src: function(e, t, n) {
            return this.clear(e), o.default(e).addClass(this._make_class(t, n))
        },
        replace: function(e, t, n, a) {
            return o.default(e).removeClass(this._make_class(t, n)).addClass(this._make_class(t, a))
        },
        clear: function(e) {
            var t = this,
                n = e.className.split(" ");
            return n = o.default.grep(n, function(e) {
                return e && 0 !== e.indexOf(t.CLASS_PREFIX)
            }), e.className = n.join(" ")
        },
        make: function(e, t, n) {
            return n = this._prep_attrs(e, t, n), o.default("<img />", n)[0]
        },
        html: function(e, t, n) {
            n = this._prep_attrs(e, t, n);
            var o = ["<img "];
            for (var a in n) o.push(a, '="', i.HTML._raw_escape(n[a]), '" ');
            return o.push("/>"), new i.HTML(o.join(""))
        },
        _prep_attrs: function(e, t, n) {
            void 0 === n && (n = {}), n.src = n.src || this.SPACER;
            var o = ["sprite", "sprite_" + e, this._make_class(e, t)];
            return n.class && o.push(n.class), n.class = o.join(" "), n
        },
        _get: function(e) {
            return e.className
        },
        _set: function(e, t) {
            return e.className = t, e.src = this.SPACER
        }
    };
    t.default = r
});
//# sourceMappingURL=pkg-notifications.min.js-vflTJrtYr.map