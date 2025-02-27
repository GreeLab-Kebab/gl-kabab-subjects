"use strict";

function moveScroller() {
    var e = $("#scroller").width(),
        t = function() {
            var t = "lg" === StackExchange.responsive.currentRange(),
                n = $(window).scrollTop(),
                o = $("#scroller-anchor").offset().top,
                i = $("#scroller"),
                r = StackExchange.scrollPadding.getPaddingTop(),
                a = r + "px";
            t && n > o ? i.height() > $(window).height() ? i.css({
                "position": "fixed",
                "top": "",
                "bottom": "0",
                "width": e,
                "z-index": 3
            }) : i.css({
                "position": "fixed",
                "top": a,
                "bottom": "",
                "width": e,
                "z-index": 3
            }) : i.css({
                "position": "relative",
                "top": "",
                "bottom": "",
                "width": ""
            })
        };
    StackExchange.responsive.addBreakpointListener(function() {
        var n = $("#scroller"),
            o = n[0].style.width,
            i = n[0].style.position;
        n.css({
            "position": "relative",
            "width": ""
        }), e = n.width(), n.css({
            "position": i,
            "width": o
        }), t()
    }), $(window).scroll(t).resize(t), t()
}

function initTagRenderer(e, t, n) {
    window.tagRenderer || (n = n || {
        "tags": [],
        "id": ""
    }, window.tagRendererRaw = function(o, i, r, a) {
        i = i || "", r = r || "a";
        var s = "",
            c = a ? "s-tag" : "post-tag";
        i || (e && $.inArray(o, e) > -1 ? s = a ? "s-tag__required" : "required-tag" : t && $.inArray(o, t) > -1 && (s = a ? "s-tag__moderator" : "moderator-tag"));
        var l = $("<" + r + ">").addClass(c).addClass(s).addClass($.inArray(o, n.tags) > -1 ? "channel" + n.id + "-tag" : "").text(o);
        return "a" === r.toLowerCase() && l.attr({
            "rel": "tag",
            "href": i + "/questions/tagged/" + encodeURIComponent(o),
            "title": function(e) {
                return "show questions tagged '" + e.tag + "'"
            }({
                "tag": o
            })
        }), l.outerHTML()
    }, window.tagRenderer = function(e, t, n, o) {
        return $(tagRendererRaw(e, t, n, o))
    })
}

function showFadingHelpText(e) {
    e.wrap('<div class="dno" />').show().parent().fadeIn("slow", function() {
        $(this).children().unwrap()
    })
}

function initFadingHelpText() {
    var e = {
            "wmd-input": "#how-to-format",
            "tagnames": "#how-to-tag",
            "tag-editor": "#how-to-tag",
            "title": "#how-to-title",
            "wmd-input-42": "#how-to-format",
            "edit-comment": "#how-to-comment"
        },
        t = $(".wmd-input, #tagnames, #title, .tag-editor input, #wmd-input-42, .edit-comment"),
        n = function(t) {
            var n = $(t);
            return n.parent().hasClass("tag-editor") && !n.closest(".js-mentions-input").length ? e["tag-editor"] : n.hasClass("wmd-input") ? e["wmd-input"] : n.hasClass("edit-comment") ? e["edit-comment"] : e[$(t).attr("id")]
        };
    $(".js-help-pointer").click(function(e) {
        var t = null;
        $(e.target).hasClass("js-dismiss-pointer") || $(e.target).closest(".js-dismiss-pointer").length ? $($(this).data("focus-on-dismiss")).focus() : t = $($(this).attr("data-for"));
        var n = this;
        return setTimeout(function() {
            $(n).remove(), $("html,body").animate({
                "scrollTop": t.offset().top - 20
            })
        }), !1
    }), $(".js-back-to-edit-field").click(function() {
        var e = $($(this).attr("href")),
            t = $(this).attr("data-focus"),
            n = t ? $(t) : e;
        return $("html,body").animate({
            "scrollTop": e.offset().top - 40
        }, function() {
            n.focus()
        }), !1
    }), t.focus(function() {
        var e = n(this);
        t.each(function() {
            var t = n(this);
            t != e && $(t).hide()
        });
        var o = $(e);
        o.is(":visible") || showFadingHelpText(o), $(".js-help-pointer").addClass("d-none");
        var i = $(".js-help-pointer[data-for='" + e + "']");
        i.removeClass("d-none"), i.data("focus-on-dismiss", this)
    })
}! function(e) {
    function t() {}

    function n(e, t) {
        if (r) return t.indexOf(e);
        for (var n = t.length; n--;)
            if (t[n] === e) return n;
        return -1
    }
    var o = t.prototype,
        i = [],
        r = i.indexOf ? !0 : !1;
    o.getListeners = function(e) {
        var t = this._events || (this._events = {});
        return t[e] || (t[e] = [])
    }, o.addListener = function(e, t) {
        var o = this.getListeners(e);
        return -1 === n(t, o) && o.push(t), this
    }, o.removeListener = function(e, t) {
        var o = this.getListeners(e),
            i = n(t, o);
        return -1 !== i && (o.splice(i, 1), 0 === o.length && (this._events[e] = null)), this
    }, o.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, o.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, o.manipulateListeners = function(e, t, n) {
        var o, i, r = e ? this.removeListener : this.addListener,
            a = e ? this.removeListeners : this.addListeners;
        if ("object" == typeof t)
            for (o in t) t.hasOwnProperty(o) && (i = t[o]) && ("function" == typeof i ? r.call(this, o, i) : a.call(this, o, i));
        else
            for (o = n.length; o--;) r.call(this, t, n[o]);
        return this
    }, o.removeEvent = function(e) {
        return e ? this._events[e] = null : this._events = null, this
    }, o.emitEvent = function(e, t) {
        for (var n = this.getListeners(e), o = n.length; o--;) n[o].apply(null, t || i) === !0 && this.removeListener(e, n[o]);
        return this
    }, "function" == typeof define && define.amd ? define(function() {
        return t
    }) : e.EventEmitter = t
}(this);
var StackExchange = StackExchange || {};
StackExchange.realtime = function() {
    function e() {
        return {
            "creationfailed": null,
            "onopen": null,
            "onmessage": null,
            "onclose": null,
            "onerror": null
        }
    }

    function t(t) {
        function n() {
            try {
                return "WebSocket" in window ? new WebSocket(t) : new MozWebSocket(t)
            } catch (e) {
                return e.message
            }
        }
        var o;
        return {
            "on": new e,
            "isOpen": function() {
                return o && 1 === o.readyState
            },
            "readyState": function() {
                return o ? o.readyState : null
            },
            "start": function() {
                if (!o) {
                    var e = this.on,
                        t = n();
                    "string" == typeof t ? e.creationfailed && e.creationfailed(t) : (o = t, o.onopen = function() {
                        e.open && e.open()
                    }, o.onclose = function() {
                        e.close && e.close(), o = null
                    }, o.onmessage = function(t) {
                        e.message && e.message(t)
                    }, o.onerror = function() {
                        e.error && e.error(), o = null
                    })
                }
            },
            "close": function() {
                o && (o.close(), o = null)
            },
            "dispose": function() {
                this.close()
            },
            "send": function(e) {
                o && o.send(e)
            },
            "open": function() {}
        }
    }

    function n() {
        V && (V.dispose(), V = null)
    }

    function o(e) {
        return new t(e)
    }

    function i(e) {
        var t = e.split(","),
            i = t.length,
            c = z % i,
            l = t[c],
            u = StackExchange.options.realtime.staleDisconnectIntervalInHours;
        if ("WebSocket" in window || "MozWebSocket" in window) {
            if (V) return;
            if (V = new o(l), null === V) return;
            V.on.open = function() {
                if (K || (K = !0), z = 0, a("WebSocket opened"), V && 1 === V.readyState()) {
                    var e = "",
                        t = StackExchange.options;
                    if (t) {
                        var e = "|";
                        t.routeName && (e += t.routeName.toString()), e += "|", t.user && t.user.userId && (e += t.user.userId.toString()), e += "|", t.user && t.user.accountId && (e += t.user.accountId.toString()), e += "|", t.user && t.user.rep && (e += t.user.rep.toString()), e = e + "|" + window.location.host + "|", t.serverTime && (e += t.serverTime.toString()), e += "|", a("analytic: " + e), V.send(e)
                    }
                }
                r(), s(), setInterval(B, 6e4), u > 0 && setTimeout(U, 1e3 * u * 60 * 60)
            }, V.on.message = function(e) {
                var t = $.parseJSON(e.data || e);
                if ("realtime-broadcast" === t.action) {
                    a("broadcast message - " + t.data);
                    var o = $.parseJSON(t.data).a;
                    ("killWebSocket" === o || "restartWebSocket" === o) && (a("Applying action: " + o), Q = "killWebSocket" === o, Q ? n() : V.close())
                } else X.emitEvent(t.action, [t.data])
            }, V.on.close = function() {
                V = null, a("WebSocket closed"), !Q && 5 > z && J > 0 && (z++, J--, a("reconnect attempt:" + z + " max retries:" + J), setTimeout(function() {
                    StackExchange.realtime.init(e)
                }, (new Date).getTime() % 50 / 20 * 1e3))
            }, V.on.error = function() {
                a("WebSocket failed"), n()
            }, V.on.creationfailed = function(e) {
                a("Sockets disabled - " + e), n()
            }, V.start(), G.length > 0 && V && V.open()
        }
    }

    function r() {
        if (null != V && V.isOpen())
            for (var e = 0, t = G.length; t > e; e++) a("sending " + G[e]), V.send(G[e])
    }

    function a(e) {
        (StackExchange && StackExchange.options && StackExchange.options.enableLogging || $ && $.cookie && $.cookie("devlog")) && console.log("realtime: " + e)
    }

    function s() {
        X.addListener("hb", function(e) {
            a("heartbeat received; responding"), V.send(e)
        })
    }

    function c(e, t) {
        G.push(e), t = t === !1 ? !1 : !0, t && r()
    }

    function l(e, t) {
        X.removeListener(e, t), d(e)
    }

    function u(e, t) {
        X.addListener(e, t), c(e)
    }

    function d(e) {
        a("unsubscribing " + e);
        var t = $.inArray(e, G); - 1 != t && (G.splice(t, 1), null != V && V.isOpen() && V.send("-" + e))
    }

    function p(e, t) {
        var n = e + "-question-" + t;
        d(n)
    }

    function f(e, t) {
        var n = e + "-question-" + t;
        c(n), X.addListener(n, function(e) {
            if (!StackExchange.realtime.pauseQuestionNotifications) {
                var t = $.parseJSON(e);
                if (t.acctid != StackExchange.options.user.accountId) switch (a(n + " " + e), t.a) {
                    case "score":
                        j(t);
                        break;
                    case "comment-add":
                        m(t);
                        break;
                    case "answer-add":
                        P(t);
                        break;
                    case "accept":
                        g(t);
                        break;
                    case "unaccept":
                        g(t, !0);
                        break;
                    case "post-edit":
                        I(t);
                        break;
                    case "post-deleted":
                        h(t)
                }
            }
        })
    }

    function h(e) {
        var t = e.aId || e.qId,
            n = !!e.aId,
            o = n ? $("#answer-" + e.aId) : $("#question");
        o.css("opacity", .1);
        var i = $('<div class="realtime-post-deleted-notification" />');
        i.insertBefore(o);
        var r = StackExchange.options.user.canSeeDeletedPosts ? "This post has been deleted - click to refresh the page" : "This post has been deleted and is no longer viewable",
            a = $("<p>").text(r).appendTo(i);
        a.click(function() {
            window.location.reload(!0)
        }), $(".popup[data-postid=" + t + "]").fadeOutAndRemove()
    }

    function g(e, t) {
        $(".js-accepted-answer-indicator").each(function() {
            var n = !t && $(this).closest(".js-voting-container").data("post-id") === e.answerid;
            $(this).toggleClass("d-none", !n)
        })
    }

    function m(e) {
        0 == $("#comment-" + e.commentid).length && StackExchange.comments.realtimeMessage(e.id)
    }

    function v(e, t, n, o, i) {
        var r = e + "-" + t;
        c(r), X.addListener(r, function(e) {
            a("received (active) on " + r);
            var s = $.parseJSON(e);
            (!o || o(s)) && (D(s, n, t), i && i(s))
        })
    }

    function b(e, t, n, o, i, r, a) {
        q = n, Y = r, v(e, t, o, function(e) {
            if (i)
                for (var t = 0; t < i.length; t++)
                    if (-1 == $.inArray(i[t], e.tags)) return !1;
            return !0
        }, a)
    }

    function y(e) {
        var t = [],
            n = [];
        return e.forEach(function(e) {
            "or" === e ? n.length > 0 && (t.push(n), n = []) : e.length > 0 && "and" !== e && n.push(e)
        }), n.length > 0 && t.push(n), t
    }

    function k(e, t, n, o, i) {
        var r = function(e) {
                return o.noAnswers && !e.noAnswers ? (a("ignoring because has answers"), !1) : o.hasBounty && !e.hasBounty ? (a("ignoring because no bounty"), !1) : !0
            },
            s = function(e) {
                for (var t = e.length - 1; t >= 0; t--)
                    if ("-" !== e[t][0]) return e[t];
                return null
            };
        q = i, 0 === n.length ? v(e, "questions-" + t, !1, r) : y(n).forEach(function(n) {
            var o = s(n);
            if (null !== o) {
                var i = "questions-" + t + "-tag-" + o;
                v(e, i, !1, function(e) {
                    if (!r(e)) return !1;
                    for (var t = 0; t < n.length; t++) {
                        var o = n[t];
                        if ("-" !== o[0]) {
                            if (-1 === $.inArray(o, e.tags)) return a("ignoring because post does not contain " + o + " in " + i), !1
                        } else {
                            var s = o.substr(1);
                            if (-1 !== $.inArray(s, e.tags)) return a("ignoring because post contains " + s + " in " + i), !1
                        }
                    }
                    return !0
                })
            }
        })
    }

    function w(e) {
        c(e + "-qcnt-feed"), X.addListener(e + "-qcnt-feed", function(e) {
            $("div#q-cnt").html(e)
        }), c(e + "-evc-feed"), X.addListener(e + "-evc-feed", function(e) {
            $("div#evc-cnt").html(e)
        }), c(e + "-acnt-feed"), X.addListener(e + "-acnt-feed", function(e) {
            $("div#a-cnt").html(e)
        })
    }

    function x(e) {
        var t = e + "-review-dashboard-update";
        c(t), X.addListener(t, function(e) {
            var t = $.parseJSON(e),
                n = $('.dashboard-activity[data-review-task="' + t.i + '"]');
            0 == n.find('.dashboard-user[data-user="' + t.u + '"]').length && (n.find(".dashboard-user:nth-child(6)").remove(), n.css("overflow", "hidden"), n.children().css({
                "left": "-44px"
            }), n.prepend(t.html).children().animate({
                "left": 0
            }, function() {
                n.css("overflow", "visible")
            }))
        })
    }

    function S() {
        if (null != StackExchange.options.user.accountId) {
            var e = StackExchange.options.user.accountId + "-topbar";
            c(e), X.addListener(e, function(e) {
                StackExchange.topbar.handleRealtimeMessage(e)
            })
        }
    }

    function C(e) {
        if (null != StackExchange.options.user.accountId) {
            var t = e + "-" + StackExchange.options.user.userId + "-reputation";
            c(t), X.addListener(t, function(e) {
                T(e)
            })
        }
    }

    function E(e) {
        var t = e + "-suggested-edits-count-update";
        c(t), X.addListener(t, function() {
            O()
        })
    }

    function j(e) {
        var t = $(".js-voting-container").filter(function() {
            return $(this).data("post-id") === e.id
        }).find(".js-vote-count");
        if (t.data("value") !== e.score) {
            var n = StackExchange.vote.normalizePostScore(e.score);
            t.data("value", e.score).text(n), 0 === $(":animated").length && t.fadeTo("fast", .7).fadeTo("fast", 1), StackExchange.question.canViewVoteCounts() && StackExchange.vote.bindFetchVoteCounts()
        }
    }

    function T(e) {
        var t = $("#hlinks .reputation-score, .links-container .reputation, .js-header-rep");
        t.text() != e.score && (0 == $(":animated").length && t.fadeTo("fast", .8).fadeTo("fast", 1), t.text(e).attr("title", function(e) {
            return "your reputation: " + e.reputation
        }({
            "reputation": e
        })), t.trigger("reputationchange"))
    }

    function O() {
        $.ajax({
            "type": "POST",
            "url": "/review/suggested-edit-count",
            "data": {
                "fkey": StackExchange.options.user.fkey
            },
            "dataType": "json",
            "success": function(e) {
                e && e.count && _(e.count)
            }
        })
    }

    function _(e) {
        var t = $(".suggested-edits-count");
        t.text() != e && (0 == $(":animated").length && t.fadeTo("fast", .5).fadeTo("fast", 1), t.text(e))
    }

    function P(e) {
        if (0 == $("#answer-" + e.answerid).length && (H.push(e.answerid), StackExchange.cardiologist)) {
            if (StackExchange.cardiologist.isHeartBeating()) {
                var t = StackExchange.helpers.DelayedReaction(A, 5e3);
                t.trigger()
            } else A();
            StackExchange.cardiologist.notifiedOfNewAnswer()
        }
    }

    function A() {
        $(".js-new-answer-activity").remove(), $("#answers-header").prepend(Z)
    }

    function I(e) {
        var t = $(".question[data-questionid=" + e.id + "], .answer[data-answerid=" + e.id + "]");
        if (!(t.find(".js-new-post-activity[data-postid=" + e.id + "]").length > 0)) {
            var n = $('<div class="new-post-activity bar-sm ta-center mb16 js-new-post-activity" data-postid="' + e.id + '">').append($('<a class="d-block py8" href="#">').text("An edit has been made to this post")),
                o = 0 === t.find(".inline-editor").length,
                i = function() {
                    $(".js-new-post-activity[data-postid=" + e.id + "]").remove(), o && t.off("click", i), 0 === $("#review-content").length && et([e.id]), $(document).trigger("refreshEdit", e.id)
                };
            o && t.click(i), n.prependTo(t).find("a").click(function(e) {
                return e.stopPropagation(), i(), !1
            })
        }
    }

    function M() {
        $("#tabs").show(), $(".js-new-answer-activity").remove();
        var e = $("#answers #answers-header"),
            t = e.find(".answers-subheader h2"),
            n = parseInt(t.text()) + H.length;
        isNaN(n) && (n = H.length), t.text(function(e) {
            return 1 == e.answerCount ? e.answerCount + " Answer" : e.answerCount + " Answers"
        }({
            "answerCount": n
        })), $.ajax({
            "url": "/posts/ajax-load-realtime/{postIdsSemiColonDelimited}".formatUnicorn({
                "postIdsSemiColonDelimited": H.join(";")
            })
        }).done(function(t) {
            var n = $('<div class="dno" />').append(t);
            n.insertAfter(e).fadeIn(400, function() {
                n.removeClass("dno"), styleCode(), StackExchange.vote.init($(".question").data("questionid")), n.find(".answer").each(function() {
                    StackExchange.comments.init({
                        "post": $(this)
                    })
                })
            })
        }), StackExchange.question.bindSuggestedEditPopupLinks(), B(), H = []
    }

    function D(e, t, n) {
        null != StackExchange.options.user.accountId && StackExchange.tagPreferences.isIgnored(e.body) || (e.fetch && $.ajax({
            "url": "/posts/" + e.id + "/" + n
        }).done(function(t) {
            e.body = t, W[e.id] = {
                "id": e.id,
                "body": e.body,
                "index": (new Date).getTime(),
                "siteid": e.siteid
            }
        }), W[e.id] = {
            "id": e.id,
            "body": e.body,
            "index": (new Date).getTime(),
            "siteid": e.siteid
        }, $(".js-new-post-activity").remove(), $("#question-mini-list, #questions").prepend(nt), $(".tag-sponsorship").length > 0 && $("#question-mini-list, #questions").css("margin-top", "0px"), t && F())
    }

    function L(e, t) {
        return e.index < t.index ? -1 : e.index > t.index ? 1 : 0
    }

    function F() {
        var e = [];
        for (var t in W) W.hasOwnProperty(t) && e.push(W[t]);
        for (var n = e.sort(L), o = 0; o < n.length; o++) {
            var i = n[o];
            $("#question-summary-" + i.id).remove(), $(i.body).prependTo("#question-mini-list, #questions").hide().fadeIn()
        }
        N(0), null != StackExchange.options.user.accountId && StackExchange.tagPreferences.applyPrefs(!0, q), styleCode(), B(), $(".js-new-post-activity").remove(), W = {}
    }

    function N(e) {
        var t = document.title.replace(/^\(\d*\*?\) /, "");
        e > 0 && (t = "(" + e + ") " + t), window.setTimeout(function() {
            $(document).attr("title", t)
        }, 200)
    }

    function U() {
        Q = !0, StackExchange.notify.show('Instant updates have been disabled due to inactivity <a href=".">refresh</a> to reconnect', 312), V.dispose()
    }

    function B() {
        for (var e = $("span.relativetime, span.relativetime-clean"), t = 0; t < e.length; t++)
            if (e[t].title) {
                var n = R(e[t].title);
                n && (e[t].innerHTML = n)
            }
    }

    function R(e) {
        if (null != e && 20 == e.length) {
            e = e.substr(0, 10) + "T" + e.substr(11, 10);
            var t = new Date(e),
                n = ((new Date).getTime() - t.getTime()) / 1e3 + StackExchange.options.serverTimeOffsetSec,
                o = Math.floor(n / 86400);
            if (!(isNaN(o) || 0 > o || o >= 31)) return 0 == o && (2 > n && "just now" || 60 > n && (Y ? function(e) {
                return 1 == e.seconds, e.seconds + "s ago"
            }({
                "seconds": Math.floor(n)
            }) : function(e) {
                return 1 == e.seconds ? e.seconds + " sec ago" : e.seconds + " secs ago"
            }({
                "seconds": Math.floor(n)
            })) || 120 > n && (Y ? "1m ago" : "1 min ago") || 3600 > n && (Y ? function(e) {
                return 1 == e.minutes, e.minutes + "m ago"
            }({
                "minutes": Math.floor(n / 60)
            }) : function(e) {
                return 1 == e.minutes ? e.minutes + " min ago" : e.minutes + " mins ago"
            }({
                "minutes": Math.floor(n / 60)
            })) || 7200 > n && (Y ? "1h ago" : "1 hour ago") || 86400 > n && (Y ? function(e) {
                return 1 == e.hours, e.hours + "h ago"
            }({
                "hours": Math.floor(n / 3600)
            }) : function(e) {
                return 1 == e.hours ? e.hours + " hour ago" : e.hours + " hours ago"
            }({
                "hours": Math.floor(n / 3600)
            })))
        }
    }
    var q, V = null,
        W = {},
        H = [],
        z = 0,
        G = [],
        J = 10,
        K = !1,
        Y = !1,
        Q = !1,
        X = new EventEmitter,
        Z = function() {
            var e = Object.keys(H).length;
            0 == e && $(".js-new-answer-activity").remove();
            var t = $('<div class="new-answer-activity ta-center bar-sm mb16 js-new-answer-activity">').append($('<a class="d-block py8" href="#">').text(function(e) {
                return 1 == e.count ? e.count + " new answer to this question" : e.count + " new answers to this question"
            }({
                "count": e
            })));
            return t.click(function() {
                StackExchange.realtime.expandAnswers()
            }), t.find("a").click(function(e) {
                return e.stopPropagation(), StackExchange.realtime.expandAnswers(), !1
            }), t
        },
        et = function(e, t) {
            var n = [],
                o = {};
            if ($(e).each(function(e, t) {
                    var i = $(".question[data-questionid=" + t + "], .answer[data-answerid=" + t + "]");
                    i.length > 0 && (n.push(+t), o[+t] = i)
                }), 0 === n.length) return $.Deferred().resolve(o);
            var i = "/posts/ajax-load-realtime/{postIdsSemiColonDelimited}?title=true&includeComments={includeComments}".formatUnicorn({
                "postIdsSemiColonDelimited": n.join(";"),
                "includeComments": !!t
            });
            return $.ajax({
                "type": "GET",
                "url": i,
                "dataType": "html"
            }).then(function(e) {
                var n = $(e),
                    i = n.filter(".question, .answer").map(function() {
                        var e = $(this),
                            n = +(e.data("questionid") || e.data("answerid") || 0),
                            i = o[n];
                        return tt(i, e, n, t)
                    }).get();
                return $.when.apply($, i)
            }).then(function() {
                return o
            })
        },
        tt = function(e, t, n, o) {
            var i = e.find(".postcell, .answercell"),
                r = t.find(".postcell, .answercell").css({
                    "opacity": 0
                }),
                a = e.hasClass("question"),
                s = $("body").hasClass("question-page"),
                c = $("h1 a.question-hyperlink"),
                l = t.data("title"),
                u = a && s && $.trim(c.text()) !== l,
                d = e.find(".js-post-notices"),
                p = t.find(".js-post-notices").css({
                    "opacity": 0
                }),
                f = e.find(".js-comments-list"),
                h = 150,
                g = function(e) {
                    return e.animate({
                        "opacity": 0
                    }, h)
                },
                m = function(e) {
                    return e.animate({
                        "opacity": 1
                    }, h)
                };
            if (window.history && s) {
                var v = u ? function(e) {
                    return e.pageTitle + " - " + e.siteName
                }({
                    "pageTitle": l,
                    "siteName": StackExchange.options.site.name
                }) : document.title;
                window.history.replaceState(window.history.state, v, "#" + n)
            }
            return $.when(u ? g(c) : !0, o ? g(f) : !0, g(i), g(d)).then(function() {
                return e.prop("classList", t.prop("classList")), u && c.text(l), o && StackExchange.comments.replaceAll(e, t.find(".js-comment")), i.replaceWith(r), d.replaceWith(p), $.when(u ? m(c) : !0, o ? m(f) : !0, m(r), m(p))
            })
        },
        nt = function() {
            var e = Object.keys(W).length;
            N(e);
            var t = $('<div class="js-new-post-activity bg-black-050 bar-sm ta-center mt8 ml8">').append($('<a class="d-block py8" href="#">').text(function(e) {
                return 1 == e.count ? e.count + " question with new activity" : e.count + " questions with new activity"
            }({
                "count": e
            })));
            return t.click(function() {
                StackExchange.realtime.expandActiveQuestions()
            }), t.find("a").click(function(e) {
                return e.stopPropagation(), StackExchange.realtime.expandActiveQuestions(), !1
            }), t
        };
    return {
        "init": i,
        "log": a,
        "expandActiveQuestions": F,
        "expandAnswers": M,
        "subscribeToActiveQuestions": b,
        "subscribeToUQL": k,
        "subscribeToQuestion": f,
        "unsubscribeToQuestion": p,
        "pauseQuestionNotifications": !1,
        "subscribeToReputationNotifications": C,
        "subscribeToSuggestedEdits": E,
        "updateRelativeDates": B,
        "subscribeToReviewDashboard": x,
        "subscribeToTopBarNotifications": S,
        "subscribeToCounts": w,
        "genericSubscribe": u,
        "genericUnsubscribe": l,
        "reloadPosts": et
    }
}(), StackExchange.anonymous = {}, ! function(e, t, n) {
    "function" == typeof define ? define(n) : "undefined" != typeof module ? module.exports = n() : t[e] = n(t)
}("klass", this, function(e) {
    function t(e) {
        return r.call(n(e) ? e : function() {}, e, 1)
    }

    function n(e) {
        return typeof e === s
    }

    function o(e, t, n) {
        return function() {
            var o = this.supr;
            this.supr = n[l][e];
            var i = {}.fabricatedUndefined,
                r = i;
            try {
                r = t.apply(this, arguments)
            } finally {
                this.supr = o
            }
            return r
        }
    }

    function i(e, t, i) {
        for (var r in t) t.hasOwnProperty(r) && (e[r] = n(t[r]) && n(i[l][r]) && c.test(t[r]) ? o(r, t[r], i) : t[r])
    }

    function r(e, t) {
        function o() {}

        function a() {
            this.initialize ? this.initialize.apply(this, arguments) : (t || u && s.apply(this, arguments), d.apply(this, arguments))
        }
        o[l] = this[l];
        var s = this,
            c = new o,
            u = n(e),
            d = u ? e : this,
            p = u ? {} : e;
        return a.methods = function(e) {
            return i(c, e, s), a[l] = c, this
        }, a.methods.call(a, p).prototype.constructor = a, a.extend = r, a[l].implement = a.statics = function(e, t) {
            return e = "string" == typeof e ? function() {
                var n = {};
                return n[e] = t, n
            }() : e, i(this, e, s), this
        }, a
    }
    e = e || this;
    var a = e.klass,
        s = "function",
        c = /.*/,
        l = "prototype";
    return t.noConflict = function() {
        return e.klass = a, this
    }, t
}), StackExchange.topbar = function() {
    function e(e, t) {
        var n = e.data("cookie");
        if (n) {
            var o = t($.cookie(n));
            o && $.cookie(n, o, {
                "expires": new Date(e.data("expire-date")),
                "path": "/"
            })
        }
    }

    function t(e) {
        StackExchange.options.enableLogging && console.log("topbar: " + e)
    }

    function n(e) {
        for (var t = 0; t < M.length; t++) {
            var n = M[t];
            if ((n.$button || $()).get(0) === e) return !0;
            if (n.dialog && n.dialog.contains(e)) return !0
        }
        return !1
    }

    function o() {
        for (var e = 0; e < M.length; e++) M[e].toggle(!1)
    }

    function i(e) {
        var n;
        if (e && (n = JSON.parse(e))) {
            t("realtime message - " + e);
            for (var o in n)
                for (var i = 0; i < M.length; i++)
                    if (o == M[i].name) {
                        M[i].handleRealtimeMessage(n[o]);
                        break
                    }
        }
    }

    function r(e) {
        this.resultsCache = {}, this.searchHintsLoaded = !1;
        var t = $(".js-top-search-popover"),
            n = t.find(".js-ac-results");
        if (StackExchange.mobile && e.css("font-size", "16px"), this.$searchPopover = t, this.$searchBox = e, this.$resultsDiv = n, this.$screenReaderInfo = t.find(".js-screen-reader-info"), this.$loadingIndicator = t.find(".js-spinner"), this.$searchHintsContainer = t.find(".js-search-hints"), e.on("s-popover:show", this.fetchSearchHints.bind(this)), $(".js-products-menu").on("s-popover:show", this.hidePopover.bind(this)), e.on("s-popover:show", StackExchange.topbar.hideAll), e.hasClass("js-search-autocomplete")) {
            var o = StackExchange.helpers.DelayedReaction(this.suggest.bind(this), 500, {
                "sliding": !0
            });
            e.on(/Trident/.test(navigator.userAgent) ? "textinput" : "input", !0, this.toggleSpinner.bind(this)), e.on(/Trident/.test(navigator.userAgent) ? "textinput" : "input", o.trigger), e.on("keydown", this.searchBoxOnKeyDown.bind(this)), t.on("keydown", this.searchPopoverOnKeyDown.bind(this)), n.on("click", ".js-ac-result", this.choose.bind(this))
        }
    }

    function a() {
        var e = $(".js-search-field");
        $("#search-channel-selector").change(function() {
            var e = $(this).find("option:selected");
            if (e && 1 == e.length) {
                var t = e.data("url");
                if (t) {
                    var n = !!$("#search").data("action");
                    n ? $("#search").data("action", t) : $("#search").attr("action", t)
                }
                var o = e.data("mixed");
                void 0 === o ? $("#search-channel-mixed").attr("disabled", "disabled") : $("#search-channel-mixed").removeAttr("disabled").val(o)
            }
        }).trigger("change"), $("#search").on("submit", function(e) {
            var t = $(this).data("action");
            if (t) {
                var n = location.pathname + location.hash.replace(/%20/g, "+"),
                    o = t + "#" + $(this).serialize();
                return n !== o && (location.href = o), e.preventDefault(), !1
            }
        }), new r(e)
    }

    function s() {
        function e(e) {
            n.toggleClass(i, e), t.toggleClass(r, e)
        }
        var t = $(".js-searchbar"),
            n = $(".js-searchbar-trigger a"),
            o = $(".js-search-field"),
            i = "topbar-icon-on",
            r = "searchbar__open";
        n.on("click", function(t) {
            t.preventDefault(), e(), StackExchange.helpers.DelayedReaction(function() {
                o.focus()
            }, 0).trigger()
        })
    }

    function c(e) {
        var t = $("html").hasClass("html__unpinned-leftnav");
        if (arguments.length || (e = !t), t !== !!e) {
            var n, o;
            e ? ($("html").addClass("html__unpinned-leftnav"), n = "sm md lg", o = "") : ($("html").removeClass("html__unpinned-leftnav"), n = "sm", o = "md lg"), $(".js-pinned-left-sidebar").attr("data-is-here-when", o), $(".js-unpinned-left-sidebar").attr("data-is-here-when", n), StackExchange.responsive.forceCheck()
        }
    }

    function l() {
        function e() {
            if (i.is(":visible")) {
                var e = i.offset(),
                    t = e.top - a.scrollTop() + StackExchange.scrollPadding.getPaddingTop(),
                    n = Math.max(StackExchange.scrollPadding.getPaddingTopMinimal(), t) + r,
                    s = o.height(),
                    c = n + s - t - i.height();
                n -= Math.max(0, c), o.css("top", n), i.css("min-height", s + r)
            }
        }
        var t = !1,
            n = (navigator.userAgent || "").match(/\bEdge\/(\d+)/);
        if (n && parseInt(n[1], 10) < 17 && (t = !0), t || !window.CSS || !CSS.supports || !CSS.supports("(position: sticky) or (position: -webkit-sticky)")) {
            var o = $(".js-sticky-leftnav");
            if (o.length) {
                t && o.addClass("left-sidebar__fake-sticky");
                var i = $(".js-pinned-left-sidebar"),
                    r = parseInt(i.css("padding-top"), 10),
                    a = $(window);
                a.on("scroll", e), StackExchange.responsive.addBreakpointListener(e), e()
            }
        }
    }

    function u() {
        var e = $("#js-gdpr-consent-banner"),
            t = e.find(".js-notice-close");
        t.click(function() {
            t.prop("disabled", !0), $.ajax({
                "method": "POST",
                "url": "/accounts/accept-gdpr-consent-banner",
                "data": {
                    "fkey": StackExchange.options.user.fkey
                },
                "dataType": "json",
                "success": function(t) {
                    t && e.remove()
                },
                "complete": function() {
                    t.prop("disabled", !1)
                }
            })
        })
    }

    function d() {
        function e() {
            function e() {
                if (c++, c > 30) throw StackExchange.debug.log("checkSize ran into an infinite loop"), "checkSize ran into an infinite loop"
            }
            var r, a, s = $(window).width(),
                c = 0;
            do
                if (e(), r = !1, !(t.length && (i || s >= t[0][1]) && (t.shift()[0].removeClass("d-none"), r = !0, i))) {
                    i = !1, a = !1;
                    for (var l = n.find("[data-remove-order]:visible"); l.length && o();) {
                        e();
                        var u, d = null;
                        l.each(function() {
                            var e = parseInt($(this).attr("data-remove-order"), 10);
                            (!d || u > e) && (d = $(this), u = e)
                        }), d.addClass("d-none"), l = l.not(d), t.unshift([d, s + 1]), a = !0
                    }
                }
            while (r && !a)
        }
        var t = [],
            n = $(".js-secondary-topbar-links");
        if (n.length) {
            n.addClass("the-js-is-handling-responsiveness");
            var o;
            o = /Trident/.test(navigator.userAgent) ? function() {
                var e = n.find(".-item:visible:last");
                return e.offset().left + e.width() > $(window).width()
            } : function() {
                return n.position().left + n.width() > n.offsetParent().width()
            };
            var i = !1,
                r = StackExchange.helpers.DelayedReaction(e, 100);
            StackExchange.responsive.addBreakpointListener(function(e, t) {
                $(window)["sm" === e ? "on" : "off"]("resize", r.trigger), ("sm" === e || "sm" === t) && r.trigger()
            }), "sm" === StackExchange.responsive.currentRange() && ($(window).on("resize", r.trigger), e()), I = function() {
                i = !0, e()
            }
        }
    }
    var p = klass({
            "name": "",
            "url": "",
            "cssClass": "",
            "button": null,
            "$dialog": null,
            "$loadingPlaceholder": null,
            "$preloadedDialog": null,
            "$parent": null,
            "alignment": null,
            "hasRead": !1
        }).methods({
            "isLoading": function() {
                return null != this.$loadingPlaceholder
            },
            "isLoaded": function() {
                return null != this.$dialog
            },
            "isVisible": function() {
                var e = this.$dialog || this.$loadingPlaceholder;
                return null != e && e.is(":visible")
            },
            "toggle": function(e, t) {
                if ("boolean" != typeof e) throw new Error("showOrHide is a required parameter");
                if (!e) {
                    if (this.isLoading()) return this.showOrHide(!1), void 0;
                    if (!this.isLoaded()) return
                }
                if (this.isLoaded() || this.isLoading() ? (this.showOrHide(e), e || t || !this.hasRead || this.markAsRead()) : this.$preloadedDialog ? this.loadChildContent() : this.loadDialog(), e) {
                    for (var n = 0; n < M.length; n++) this.button != M[n] && M[n].toggle(!1, t);
                    $(".js-top-search-popover").removeClass("is-visible")
                }
            },
            "showOrHide": function(e) {
                var t = this.$dialog || this.$loadingPlaceholder || $(),
                    n = this.button.$button;
                if (e) {
                    var o = n.closest("li");
                    this.$parent || (StackExchange.mobile ? this.$parent = $(".js-topbar-dialog-corral") : o.length > 0 && (this.$parent = $('<li role="presentation" />').insertAfter(o))), this.$parent ? this.$parent.append(t) : t.insertAfter(this.button.$button), this._bound_pdub || (this._bound_pdub = this.positionDialogUnderButton.bind(this)), this.positionDialogUnderButton(), StackExchange.responsive && StackExchange.responsive.addBreakpointListener(this._bound_pdub)
                } else StackExchange.responsive && this._bound_pdub && StackExchange.responsive.removeBreakpointListener(this._bound_pdub);
                t.toggle(e), e && this.isLoaded() && (this.hasRead = !0)
            },
            "loadChildContent": function() {
                var e = this.$preloadedDialog.find(".child-content");
                if (this.$dialog = this.$preloadedDialog, this.showOrHide(!0), this.url) {
                    $("<div>", {
                        "class": "child-content-loading"
                    }).addSpinner().appendTo(e);
                    var t = this;
                    this.fetchUrl().done(function(n) {
                        e.html(n), t.afterLoad()
                    })
                }
            },
            "loadDialog": function() {
                if (!this.isLoading()) {
                    this.$loadingPlaceholder = this.getLoadingPlaceholder(), this.showOrHide(!0);
                    var e = this;
                    this.fetchUrl().done(function(t) {
                        e.$dialog = $(t), e.afterLoad();
                        var n = e.$loadingPlaceholder.is(":visible");
                        e.showOrHide(n)
                    }).always(function() {
                        e.$loadingPlaceholder.remove(), e.$loadingPlaceholder = null
                    })
                }
            },
            "afterLoad": function() {
                this.$dialog.find(".js-close-button").click(function() {
                    StackExchange.topbar.hideAll()
                }), StackExchange.gps.bindTrackClicks(this.$dialog)
            },
            "getLoadingPlaceholder": function() {
                var e = $("<div/>").append(StackExchange.helpers.getSpinnerImg()).html(),
                    t = this.cssClass + (StackExchange.options.user.isAnonymousNetworkWide ? " anon" : ""),
                    n = ['<div class="topbar-dialog ', t, ' dno">', '<div class="header">', e, "</div>", '<div class="modal-content"/>', "</div>"];
                return $(n.join(""))
            },
            "positionDialogUnderButton": function() {
                var e = this.alignment || "right",
                    t = this.button.$button.outerHeight(),
                    n = this.$dialog || this.$loadingPlaceholder,
                    o = n.parent();
                for (["top", "left", "right", "max-width"].forEach(function(e) {
                        n[0].style.removeProperty(e)
                    }); o.not("body").length && "static" === o.css("position");) o = o.parent();
                o = o.length ? o : $("body");
                var i, r = this.button.$button.offset().left - o.offset().left;
                "right" === e && (r = o.outerWidth() - r - this.button.$button.outerWidth(), i = o.offset().left + o.outerWidth() - r);
                var a = {
                    "top": t
                };
                StackExchange.responsive && "sm" === StackExchange.responsive.currentRange() || (a[e] = r, i && (a.maxWidth = i)), (this.$dialog || this.$loadingPlaceholder).css(a)
            },
            "fetchUrl": function() {
                t("fetching " + this.url);
                var e = $.ajax({
                    "type": "GET",
                    "url": this.url,
                    "dataType": "html"
                });
                return e
            },
            "markAsRead": function() {
                this.button.markAsRead(), this.isLoaded() && this.$dialog.find(".unread-item").removeClass("unread-item")
            },
            "handleRealtimeMessage": function() {
                this.clearLoadedDialog()
            },
            "clearLoadedDialog": function() {
                this.isLoaded() && (this.$dialog.remove(), this.$dialog = null, this.hasRead = !1)
            },
            "hasFocus": function() {
                return this.contains(document.activeElement)
            },
            "contains": function(e) {
                var t = this.$dialog || this.$loadingPlaceholder;
                return t && t.length && e && $.contains(t.get(0), e)
            }
        }),
        f = klass({
            "name": "",
            "selector": "",
            "dialog": null,
            "$button": null,
            "onClass": "",
            "unreadCountPrefix": "",
            "queuedUnreadCount": 0,
            "showsOnMouseOver": !1,
            "pendingUnread": {}
        }).methods({
            "initialize": function() {
                this.dialog.name = name, this.dialog.button = this, D.push(this.dialog);
                var e = this;
                this.$button = $(this.selector), this.$button.click(function() {
                    return e.toggle(), !1
                }), this.showsOnMouseOver && this.$button.mouseover(function() {
                    e.showOnMouseOver()
                }), this.onClass = "topbar-icon-on" + (this.onClass ? " " : "") + this.onClass
            },
            "toggle": function(e, t) {
                e = "boolean" == typeof e ? e : !this.$button.hasClass(this.onClass), this.$button.toggleClass(this.onClass, e), this.$button.attr("aria-expanded", e), this.dialog.toggle(e, t), !e && this.dialog.hasFocus() && this.$button.focus()
            },
            "showOnMouseOver": function() {
                for (var e = !1, t = 0; t < M.length; t++) {
                    var n = M[t];
                    if (n != this && n.showsOnMouseOver && n.isOn()) {
                        e = !0;
                        break
                    }
                }
                e && this.toggle(!0, !0)
            },
            "isOn": function() {
                return this.$button.hasClass(this.onClass)
            },
            "markAsRead": function() {
                this.setUnread($.extend({
                    "count": 0,
                    "litUp": !1
                }, this.pendingUnread))
            },
            "setUnread": function(e) {
                return this.isOn() ? ($.extend(this.pendingUnread, e), void 0) : (this.pendingUnread = {}, this.applyUnreadCount(e.count, e.litUp), (e.count > 0 || e.litUp) && this.dialog.clearLoadedDialog(), void 0)
            },
            "applyUnreadCount": function(e, t) {
                var n = this.$button,
                    o = n.find(".unread-count, .js-unread-count"),
                    i = n.data("unread-class");
                void 0 !== t && i && n.toggleClass(i, t).data("lit-up", t), void 0 !== e && (n.data("unread-count", e), e > 0 ? o.text(this.unreadCountPrefix + e).fadeIn().removeClass("d-none") : o.fadeOut());
                var r = this.getButtonLabelAndTitle(n.data("unread-count") || 0, !!n.data("lit-up"));
                r && (n.attr("aria-label", r.label), n.attr("title", r.title))
            },
            "handleRealtimeMessage": function() {},
            "getButtonLabelAndTitle": function() {
                return null
            }
        }),
        h = p.extend({
            "url": "/topbar/site-switcher/site-list",
            "cssClass": "siteSwitcher-dialog",
            "$searchItems": null,
            "$pinnedSiteSearchItems": null,
            "isPreloaded": !0,
            "$preloadedDialog": $(".siteSwitcher-dialog")
        }).methods({
            "afterLoad": function() {
                this.$dialog.find("#js-site-filter-txt").typeWatch({
                    "highlight": !1,
                    "wait": 250,
                    "captureLength": -1,
                    "callback": $.proxy(this.filterSites, this)
                }), this.$searchItems = this.$dialog.find(".js-other-sites li").clone().map(function() {
                    return {
                        "title": $(".site-icon", this).attr("title").toLowerCase(),
                        "description": $(".site-desc", this).text().toLowerCase(),
                        "hostname": $("a", this).first().attr("href"),
                        "li": this
                    }
                });
                var e = this.$dialog;
                this.$dialog.find("#js-site-filter-txt").focus(function() {
                    var t = e.offset().top + e.height(),
                        n = e.find(".other-sites li:nth-child(2)"),
                        o = n.offset().top + n.height();
                    o > t && e.animate({
                        "scrollTop": e.scrollTop() + o - t
                    }, 750)
                }), StackExchange.options.user.isAnonymous && !StackExchange.options.user.isAnonymousOnThisSite || !$(".pinned-site-editor-container").length || ($(".js-found-sites").css({
                    "width": $("#js-site-search-txt").outerWidth()
                }), $(".js-found-sites").hide(), this.$dialog.find("#js-site-search-txt").typeWatch({
                    "highlight": !1,
                    "wait": 100,
                    "captureLength": -1,
                    "callback": $.proxy(this.findSitesToPin, this)
                }), this.$dialog.find("#edit-pinned-sites").click($.proxy(this.editPinnedSites, this)), this.$dialog.find("#cancel-pinned-sites").click({
                    "forceListRefresh": $("#save-pinned-sites-btn").is(":enabled")
                }, this.cancelSiteListEdits), this.$dialog.find("#pin-site-btn").click($.proxy(this.pinSite, this)), this.$dialog.on("click", ".remove-pinned-site-link", function() {
                    return $(this).parent().remove(), $("#save-pinned-sites-btn").enable(), $("#reset-pinned-sites").show(), !1
                }), this.$dialog.find("#save-pinned-sites-btn").click($.proxy(this.savePinnedSites, this)), this.$dialog.find("#reset-pinned-sites").click($.proxy(this.resetPinnedSites, this))), this.supr()
            },
            "showOrHide": function(e) {
                this.supr(e)
            },
            "pinSite": function() {
                $("#pin-site-btn").disable();
                var e = $("#js-site-search-txt").val(),
                    t = $.grep(this.$pinnedSiteSearchItems, function(t) {
                        return t.sitename === e
                    });
                if (!t.length) return $("#pin-site-btn").enable(), void 0;
                var n = t[0],
                    o = $(".pinned-site-link").map(function(e, t) {
                        return $(t).data("id")
                    }).toArray();
                if (o.indexOf(n.siteid) > -1) return $("#pin-site-btn").enable(), void 0;
                var i = this;
                $.ajax({
                    "type": "GET",
                    "url": "/topbar/site-switcher/pin-site",
                    "data": {
                        "siteId": n.siteid
                    },
                    "dataType": "html"
                }).done(function(e) {
                    var t = $(e);
                    t.hide(), $(".pinned-site-list").append(t), t.fadeIn("slow"), $("#js-site-search-txt").val(""), $("#save-pinned-sites-btn").enable(), i.toggleSiteListResetLink(!0)
                }).fail(function() {
                    $("#pin-site-btn").parent().showErrorMessage("Something bad happened; please try again"), $("#pin-site-btn").enable()
                })
            },
            "savePinnedSites": function() {
                var e = $(".pinned-site-list li .pinned-site-link").map(function(e, t) {
                        return $(t).data("id")
                    }).toArray(),
                    t = !$("#reset-pinned-sites").is(":visible") || !e.length;
                this.toggleSiteListResetLink(!t);
                var n = $("#reset-pinned-sites").siblings("input[name=fkey]").val();
                return $.ajax({
                    "type": "POST",
                    "url": "/topbar/site-switcher/save-pinned-sites",
                    "data": {
                        "siteIds": t ? [] : e,
                        "fkey": n || StackExchange.options.user.fkey
                    },
                    "dataType": "html",
                    "traditional": !0
                }).done($.proxy(function(e) {
                    $(".my-sites").html(e), this.cancelSiteListEdits(!1), $(".pinned-site-list").data("custom-list", !t), StackExchange.using("gps", function() {
                        StackExchange.gps.track("site_switcher.edit", {})
                    })
                }, this)).fail(function() {
                    $("#save-pinned-sites-btn").parent().showErrorMessage("Something bad happened; please try again")
                }), !1
            },
            "resetPinnedSites": function() {
                var e = this;
                return $.ajax({
                    "type": "GET",
                    "url": "/topbar/site-switcher/default-active-sites",
                    "dataType": "html"
                }).done(function(t) {
                    $(".pinned-site-list").html(t), $("#save-pinned-sites-btn").enable(), e.toggleSiteListResetLink(!1)
                }).error(function() {
                    $("#reset-pinned-sites").parent().showErrorMessage("Something bad happened; please try again")
                }), !1
            },
            "doSearch": function(e, t, n) {
                var o;
                t = t.toLowerCase();
                var i = [];
                return $.each(e, function(e, n) {
                    var o = {
                            "index": e,
                            "li": n.li,
                            "item": n
                        },
                        r = n.title.indexOf(t);
                    n.title == t ? o.priority = 1 : 0 == r ? o.priority = 2 : r > -1 ? o.priority = 3 : n.description.indexOf(t) > -1 ? o.priority = 4 : n.hostname.indexOf(t) > -1 && (o.priority = 5), o.priority && i.push(o)
                }), o = i.sort(function(e, t) {
                    return e.priority - t.priority || e.index - t.index
                }), n && StackExchange.using("gps", function() {
                    StackExchange.gps.track("sitesearch.submit", {
                        "term": t,
                        "numresults": i.length
                    }, !1)
                }), o
            },
            "_findSitesToPin": function(e) {
                var t = $(".js-found-sites"),
                    n = this.$pinnedSiteSearchItems;
                if (t.empty(), "" === e) return t.hide(), $("#pin-site-btn").disable(), void 0;
                if (n = this.doSearch(n, e, !1), n.length) {
                    t.show(), $("#pin-site-btn").enable();
                    var o = $(".pinned-site-link").map(function(e, t) {
                        return $(t).data("id")
                    }).toArray();
                    $.each(n, function(e, n) {
                        var i = $('<li class="pinned-site-candidate">' + n.item.sitename + "</li>");
                        o.indexOf(n.item.siteid) > -1 ? i.addClass("already-pinned-site") : i.click(function() {
                            var e = $(this).text();
                            return $("#js-site-search-txt").val(e), $(".js-found-sites").hide(), !1
                        }), i.appendTo(t)
                    })
                }
            },
            "findSitesToPin": function(e) {
                if (this.$pinnedSiteSearchItems) return this._findSitesToPin(e), void 0;
                var t = this;
                $.ajax({
                    "type": "GET",
                    "url": "/topbar/site-switcher/all-pinnable-sites",
                    "dataType": "json"
                }).done(function(n) {
                    t.$pinnedSiteSearchItems = n, t._findSitesToPin(e)
                })
            },
            "filterSites": function(e) {
                var t = $(".js-other-sites"),
                    n = this.$searchItems;
                t.empty(), "" != e && (n = this.doSearch(n, e, !0)), t.append(n.map(function(e) {
                    return this && this.li || e.li
                }))
            },
            "editPinnedSites": function() {
                $(".siteSwitcher-dialog .header").not("#your-communities-header").css("opacity", .2), $(".siteSwitcher-dialog .modal-content").not("#your-communities-section").css("opacity", .2), $(".my-sites").hide(), $(".pinned-site-editor-container").show(), $("#edit-pinned-sites").hide(), $("#cancel-pinned-sites").show();
                var e = $(".pinned-site-list");
                if ("" === e.html().trim()) {
                    var t = $("<div/>").append(StackExchange.helpers.getSpinnerImg()).html();
                    e.append('<li style="text-align:center;">' + t + "</li>"), $.ajax({
                        "type": "GET",
                        "url": "/topbar/site-switcher/current-pinned-sites",
                        "dataType": "html"
                    }).done(function(t) {
                        e.html(t)
                    }).fail(function() {
                        e.showErrorMessage("Something bad happened; please try again")
                    }).always(function() {
                        e.find(".ajax-loader").remove()
                    })
                }
                this.toggleSiteListResetLink("true" === e.data("custom-list").toString().toLowerCase());
                var n = $(".sortable"),
                    o = this;
                return n.data("isSortable") || StackExchange.loadJqueryUi().done(function() {
                    n.sortable({
                        "axis": "y",
                        "update": function() {
                            $("#save-pinned-sites-btn").enable(), o.toggleSiteListResetLink(!0)
                        }
                    }).disableSelection().data("isSortable", !0)
                }), !1
            },
            "toggleSiteListResetLink": function(e) {
                $("#reset-pinned-sites").toggle(e)
            },
            "cancelSiteListEdits": function(e) {
                return $(".header").not("#your-communities-header").css("opacity", 1), $(".modal-content").not("#your-communities-section").css("opacity", 1), $(".my-sites").show(), $("#edit-pinned-sites").show(), $(".pinned-site-editor-container").hide(), $("#cancel-pinned-sites").hide(), $("#save-pinned-sites-btn").disable(), e && ($(".pinned-site-list").empty(), $(".js-found-sites").hide(), $("#js-site-search-txt").val(""), $("#pin-site-btn").disable()), !1
            }
        }),
        g = f.extend({
            "name": "SiteSwitcher",
            "selector": ".js-site-switcher-button",
            "dialog": new h,
            "showsOnMouseOver": !1,
            "onClass": "icon-site-switcher-on"
        }),
        m = p.extend({
            "cssClass": "feature-notice-dialog",
            "alignment": "left"
        }).methods({
            "loadDialog": function() {
                this.$dialog = $(".js-feature-notice-dialog");
                var e = this.button,
                    t = e.$button;
                this.$dialog.find(".js-close-button").click(function() {
                    return e.mark(4), t.hide(), e.toggle(!1), I(), !1
                }), this.$dialog.find(".js-cta-button").click(function() {
                    return e.didClickCTA = !0, e.mark(2), !0
                }), this.showOrHide(!0)
            }
        }),
        v = f.extend({
            "name": "FeatureNotice",
            "selector": ".-feature-notice",
            "dialog": new m
        }).methods({
            "initialize": function() {
                f.prototype.initialize.apply(this, arguments);
                var t = this.$button;
                e(t, function(e) {
                    return e ? "!" == e.substring(0, 1) ? "!" + (1 + parseInt(e.substring(1))) : null : "!1"
                }), t.data("autopopup") && this.toggle(!0, !1, !0)
            },
            "mark": function(t) {
                e(this.$button, function(e) {
                    if (e) {
                        var n = e.split(";");
                        if (2 == n.length && !isNaN(n[0]) && !isNaN(n[1])) return (n[0] | t) + ";" + n[1]
                    }
                    return t + ";" + Date.now()
                })
            },
            "markAsRead": function() {
                this.didClickCTA && f.prototype.markAsRead.apply(this, arguments)
            },
            "toggle": function(e, t, n) {
                e = "boolean" == typeof e ? e : !this.$button.hasClass(this.onClass), n = !!n, f.prototype.toggle.apply(this, arguments); {
                    var o = this.$button;
                    this.dialog.$dialog
                }
                e && (this.mark(1), n || this.mark(8), o.hasClass("js-sample") && StackExchange.using("gps", function() {
                    StackExchange.gps.track("new_feature.show", {
                        "campaign": o.data("campaign"),
                        "location": o.data("location"),
                        "auto_popup": n
                    })
                }))
            }
        }),
        b = p.extend({
            "url": "/topbar/inbox",
            "cssClass": "inbox-dialog"
        }),
        y = f.extend({
            "name": "Inbox",
            "selector": ".js-inbox-button",
            "dialog": new b,
            "showsOnMouseOver": !1
        }).methods({
            "handleRealtimeMessage": function(e) {
                this.setUnread({
                    "count": e.UnreadInboxCount
                })
            },
            "getButtonLabelAndTitle": function(e) {
                var t, n;
                return e > 0 ? (t = function(e) {
                    return 1 == e.__count, "Inbox (" + e.__count + " unread messages)"
                }({
                    "__count": e
                }), n = "You have unread inbox messages") : (t = "Inbox", n = "Recent inbox messages"), {
                    "label": t,
                    "title": n
                }
            }
        }),
        k = p.extend({
            "url": "/topbar/achievements",
            "cssClass": "achievements-dialog"
        }).methods({
            "afterLoad": function() {
                this.alignRep(), this.bindDateGroupToggles(), this.displayUtcTime(), this.bindGpsTracker(), this.supr()
            },
            "alignRep": function() {
                var e = this.$dialog.find(".js-items .js-faux-column"),
                    t = 0;
                e.filter(".js-rep-change").each(function() {
                    var e = $.trim($(this).text()).length;
                    e > t && (t = e)
                }), t > 0 && e.width(6 * (t + 1))
            },
            "bindDateGroupToggles": function() {
                this.$dialog.find(".js-date-group-toggle").click(function() {
                    var e = $(this),
                        t = e.closest(".js-date-group"),
                        n = t.find(".js-items"),
                        o = t.find(".rep-site-container");
                    e.find(".date-group-toggle").toggleClass("toggle-hidden"), n.add(o).fadeToggle("fast")
                }), this.$dialog.find(".rep-site-container").on("click", function(e) {
                    e.stopImmediatePropagation()
                })
            },
            "displayUtcTime": function() {
                var e = this.$dialog,
                    t = function() {
                        var t = new Date;
                        t.setTime(t.getTime() + 1e3 * StackExchange.options.serverTimeOffsetSec);
                        var n = t.getUTCHours(),
                            o = t.getUTCMinutes();
                        10 > n && (n = "0" + n), 10 > o && (o = "0" + o), e.find(".js-utc-time").text(n + ":" + o)
                    };
                t(), setInterval(t, 6e4)
            },
            "bindGpsTracker": function() {
                var e = $("#js-gps-container.js-empty-achiev");
                e.find("a:first").addClass("js-gps-track").data("gps-track", "achievements_popup.click({ item_type:6 })"), e.find("a:last").addClass("js-gps-track").data("gps-track", "achievements_popup.click({ item_type:7 })"), StackExchange.gps.bindTrackClicks(e)
            }
        }),
        w = f.extend({
            "name": "Achievements",
            "selector": ".js-achievements-button",
            "dialog": new k,
            "unreadCountPrefix": "+",
            "showsOnMouseOver": !1
        }).methods({
            "handleRealtimeMessage": function(e) {
                var t = {
                    "count": e.UnreadRepCount
                };
                void 0 !== e.UnreadNonRepCount && (t.litUp = e.UnreadNonRepCount > 0), this.setUnread(t)
            },
            "getButtonLabelAndTitle": function(e, t) {
                var n, o;
                return e > 0 ? (n = function(e) {
                    return 1 == e.__count, "Achievements (" + e.__count + " new reputation)"
                }({
                    "__count": e
                }), o = "You have new reputation changes") : t ? (n = "Achievements (unread)", o = "You have new achievements") : (n = "Achievements", o = "Recent achievements: reputation, badges, and privileges earned"), {
                    "label": n,
                    "title": o
                }
            }
        }),
        x = p.extend({
            "cssClass": "help-dialog"
        }).methods({
            "loadDialog": function() {
                this.$dialog = $(".js-help-dialog"), this.showOrHide(!0)
            }
        }),
        S = f.extend({
            "name": "Help",
            "selector": ".js-help-button",
            "dialog": new x
        }),
        C = p.extend({
            "cssClass": "network-logo-dialog",
            "alignment": "left"
        }).methods({
            "loadDialog": function() {
                this.$dialog = $(".js-network-logo-dialog"), this.showOrHide(!0);
                var e = this.button;
                this.$dialog.find(".js-close-button").click(function() {
                    return e.toggle(!1), !1
                })
            }
        }),
        E = f.extend({
            "name": "NetworkLogo",
            "selector": ".js-network-logo",
            "dialog": new C
        }),
        j = p.extend({
            "url": "/topbar/review",
            "cssClass": "review-dialog"
        }),
        T = f.extend({
            "name": "Review",
            "selector": ".js-review-button",
            "dialog": new j
        }),
        O = p.extend({
            "url": "/topbar/mod-inbox",
            "cssClass": "modInbox-dialog"
        }).methods({}),
        _ = f.extend({
            "name": "ModInbox",
            "selector": ".js-mod-inbox-button",
            "dialog": new O
        }),
        P = p.extend({
            "cssClass": "js-leftnav-dialog",
            "alignment": "left"
        }).methods({
            "loadDialog": function() {
                this.$dialog = $(".js-leftnav-dialog"), this.showOrHide(!0);
                var e = this;
                StackExchange.responsive && StackExchange.responsive.addBreakpointListener(function(t, n) {
                    $("html").hasClass("html__unpinned-leftnav") || "sm" === n && e.button.toggle(!1)
                })
            }
        }),
        A = f.extend({
            "name": "LeftNav",
            "selector": ".js-left-sidebar-toggle",
            "dialog": new P
        });
    r.prototype = {
        "query": function() {
            return this.$searchBox.val().trim()
        },
        "fetchSearchHints": function() {
            var e = this;
            this.searchHintsLoaded || $.ajax({
                "type": "GET",
                "url": "/search/hints"
            }).success(function(t) {
                e.$searchHintsContainer.append(t), e.searchHintsLoaded = !0
            }).fail(function(e, t, n) {
                StackExchange.debug.log("Autocomplete Error: " + n.toString())
            })
        },
        "hasResults": function() {
            return this.$resultsDiv[0].childElementCount > 0
        },
        "hideResults": function() {
            this.showResults("")
        },
        "hidePopover": function() {
            this.$searchPopover.removeClass("is-visible")
        },
        "showResults": function(e) {
            var t = 0 === $.trim(e).length;
            this.$searchHintsContainer.find(".js-search-hints-text").toggleClass("d-none", !t), this.toggleSpinner(!1), this.$resultsDiv.html(e).toggleClass("d-none", t);
            var n = this.$resultsDiv.find(".js-ac-result").length;
            this.$screenReaderInfo.text(0 === n ? "No results" : function(e) {
                return 1 == e.__results, e.__results + " results found"
            }({
                "__results": n
            }))
        },
        "toggleSpinner": function(e) {
            this.$loadingIndicator.toggleClass("d-none", !e)
        },
        "suggest": function() {
            var e = this,
                t = e.query();
            if ("" === t) return e.hideResults(), void 0;
            var n = e.resultsCache[t];
            if (void 0 !== n) e.showResults(n);
            else {
                var o = new URL("/search/ac?q=" + encodeURIComponent(t), location.href);
                $.get(o.href).done(function(n) {
                    e.resultsCache[t] = n, e.showResults(n)
                }).fail(function(t, n, o) {
                    StackExchange.debug.log("Autocomplete Error: " + o.toString()), e.toggleSpinner(!1)
                })
            }
        },
        "selected": function(e) {
            if (0 === arguments.length) return this.$resultsDiv.find(".js-ac-result:focus");
            if (e) {
                if (e = $(e), !e.hasClass("js-ac-result")) return;
                e.siblings().find(".js-ac-enter-hint").addClass("d-none"), e.siblings().blur(), e.focus(), e.find(".js-ac-enter-hint").toggleClass("d-none")
            } else this.$resultsDiv.children().blur()
        },
        "selectNext": function() {
            if (this.hasResults()) {
                var e = this.selected(),
                    t = e.next(".js-ac-result");
                return 0 === e.length ? (this.$resultsDiv.children(".js-ac-result").first().focus().find(".js-ac-enter-hint").toggleClass("d-none"), void 0) : (t.length > 0 && (this.selected(t), t[0].scrollIntoView({
                    "behavior": "smooth",
                    "block": "nearest"
                })), void 0)
            }
        },
        "selectPrev": function() {
            if (this.hasResults()) {
                var e = this.selected(),
                    t = e.prev(".js-ac-result");
                t.length > 0 ? (this.selected(t), t[0].scrollIntoView({
                    "behavior": "smooth",
                    "block": "nearest"
                })) : (this.$searchBox.focus(), this.$resultsDiv.children(".js-ac-result").first().find(".js-ac-enter-hint").addClass("d-none"))
            }
        },
        "searchBoxOnKeyDown": function(e) {
            switch (e.key) {
                case "ArrowDown":
                    this.hasResults() && this.selectNext(), e.preventDefault();
                    break;
                case "Escape":
                    this.hidePopover()
            }
        },
        "searchPopoverOnKeyDown": function(e) {
            switch (e.key) {
                case "ArrowDown":
                    this.hasResults() && this.selectNext(), e.preventDefault();
                    break;
                case "ArrowUp":
                    this.hasResults() && this.selectPrev(), e.preventDefault();
                    break;
                case "Enter":
                    this.selected() && this.choose(this.selected());
                    break;
                case "Escape":
                    this.hidePopover(), this.$searchBox.focus()
            }
        },
        "choose": function(e) {
            var t = $(e.target).closest(".js-ac-result"),
                n = this.$resultsDiv.find(".js-ac-result").index(t);
            StackExchange.using("gps", function() {
                StackExchange.gps.track("sitesearch.autocomplete.click", {
                    "completion_index": n
                })
            })
        }
    };
    var I = function() {},
        M = [],
        D = [];
    return {
        "init": function(e) {
            e = e || {}, window.devicePixelRatio >= 1.5 && $(".js-avatar-me").attr("src", function(e, t) {
                return t.replace("?s=24", "?s=48")
            }), M.push(new g), M.push(new E), $(".js-left-sidebar-toggle").length && M.push(new A), StackExchange.settings.userMessaging && StackExchange.settings.userMessaging.showNewFeatureNotice && M.push(new v), M.push(new y), M.push(new w), M.push(new S), M.push(new T), StackExchange.options.user.isModerator && M.push(new _), $(document).click(function(e) {
                n(e.target) || o()
            });
            var t = document.body.style;
            "justifyContent" in t || "WebkitJustifyContent" in t || $(".top-bar *:visible").css({
                "display": "inline-block",
                "white-space": "nowrap",
                "vertical-align": "middle"
            }).not(".-logo, .-logo *, svg, .-badges *").css("width", "auto"), a(), s(), l(), u(), e.observeSize && d(), $(".js-products-menu").click(function() {
                return !1
            })
        },
        "hideAll": o,
        "handleRealtimeMessage": i,
        "toggleUnpinnedLeftNav": c
    }
}(), StackExchange.notify = function() {
    function e(e, t) {
        var n = $("#dismissed-messages");
        n.val(n.val() + "~" + e + (t ? " " + t : "") + "~")
    }

    function t(e, t) {
        var n = $("#dismissed-messages").val();
        return n ? new RegExp("~" + e + (t ? " " + t : "") + "~").test(n) : !1
    }

    function n(e, t, n) {
        var o = parseInt($("body").css("margin-top").match(/\d+/)),
            i = t * o / e;
        n ? $("body:not(.no-message-slide), body:not(.no-message-slide) .js-top-bar").animate({
            "marginTop": i + "px"
        }, "fast", "linear") : $("body:not(.no-message-slide), body:not(.no-message-slide) .js-top-bar").css("marginTop", i + "px")
    }
    var o = 0,
        i = -1,
        r = "m",
        a = function(t, r) {
            var a = $("#notify-" + t + (r ? "-" + r : ""));
            a.length && (t == i ? c() : t > i && $.post("/messages/mark-as-read", {
                "messagetypeid": t,
                "id": r ? r : null
            }), e(t, r), o--, a.fadeOut("fast", function() {
                n(o + 1, o, !0), a.remove(), 0 === $("#notify-container div").length && $("#notify-container").hide()
            }))
        },
        s = function(e) {
            if (o++, t(e.messageTypeId, e.id)) return !1;
            var n = "";
            e.messageTypeId && (n = ' id="notify-' + e.messageTypeId + (e.id ? "-" + e.id : "") + '"');
            var i = "<div" + n + ' style="display:none"><span class="notify-close">' + $("<a>&times;</a>").attr("title", "dismiss this notification").outerHTML() + '</span><span class="notify-text">' + e.text + "</span>";
            if (e.showProfile) {
                var r = encodeURIComponent("/users/" + e.userId + "?tab=badges&sort=recent");
                i += " " + function(e) {
                    return 'See your <a href="' + e.url + '">profile</a>.'
                }({
                    "url": "/messages/mark-as-read?messagetypeid=" + e.messageTypeId + "&returnurl=" + r
                })
            }
            i += "</div>";
            var s = $(i);
            return e.cssClass && s.addClass(e.cssClass), s.find(".notify-close").click(function() {
                e.close && e.close(), a(e.messageTypeId, e.id)
            }), $("#notify-container").append(s), $("#notify-container").show(), !0
        },
        c = function(e) {
            $.cookie(r, e ? e : "0", {
                "expires": 90,
                "path": "/"
            })
        },
        l = function() {
            $("#notify-container div").fadeIn("slow")
        },
        u = function() {
            $("body:not(.no-message-slide), body:not(.no-message-slide) .js-top-bar").animate({
                "marginTop": "2.5em"
            }, "fast", "linear")
        },
        d = function(e, t) {
            var n = $('<div class="link-more">').append($("<a>").text(function(e) {
                return 1 == e.numNotifications ? "view " + e.numNotifications + " more notification" : "view " + e.numNotifications + " more notifications"
            }({
                "numNotifications": e
            })));
            $("#notify-container").append(n), n.click(function() {
                n.detach();
                for (var e = 0; e < t.length; e++) s(t[e]);
                l()
            })
        };
    return {
        "showMessages": function(e, t) {
            for (var i = 0, r = o, a = t ? 2 : e.length, c = 0; a > c && c < e.length; c++) s(e[c]) && i++;
            if (n(r, i, !1), l(), t && i < e.length) {
                var u = e.slice(a);
                d(e.length - i, u)
            }
        },
        "show": function(e, t, n) {
            u(), s({
                "text": e,
                "messageTypeId": t,
                "cssClass": n
            }), l()
        },
        "close": a,
        "getMessageText": function(e) {
            return $("#notify-" + e + " .notify-text").text()
        }
    }
}();
var styleCode = function() {
    function e(e) {
        var t = $("#prettify-lang").text();
        return "" != t ? (e.addClass(t), !0) : !1
    }
    return function() {
        "undefined" != typeof MathJax && MathJax.Hub.Queue(["Typeset", MathJax.Hub]), StackExchange.ifUsing("snippets", function() {
            StackExchange.snippets.redraw && StackExchange.snippets.redraw()
        });
        var t = !1;
        if ($("pre code").parent().each(function() {
                $(this).hasClass("prettyprint-override") && ($(this).removeClass("prettyprint-override").addClass("prettyprint"), t = !0), $(this).hasClass("prettyprint") || e($(this)) && ($(this).addClass("prettyprint"), t = !0)
            }), t) {
            if ("undefined" != typeof jtab) return jtab.renderimplicit(), void 0;
            StackExchange.using("prettify", function() {
                StackExchange.prettify.applyCodeStyling()
            })
        }
        $(".spoiler").click(function() {
            $(this).toggleClass("spoiler")
        })
    }
}();
styleCode.updateLangdivDelayed = StackExchange.helpers.DelayedReaction(function(e) {
        var t = $("#prettify-lang");
        t.length && $.get("/api/tags/langdiv", {
            "tags": e.join(" ")
        }).done(function(e) {
            e ? t.replaceWith(e) : t.empty(), StackExchange.MarkdownEditor.refreshAllPreviews(), styleCode()
        })
    }, 1500, {
        "sliding": !0
    }), StackExchange.helpers.MagicPopup = function(e) {
        function t(t, o) {
            if ($.contains(document.documentElement, t) && (!e.predicate || e.predicate(t))) {
                var r = $("<div />").attr("id", e.id).addClass(e.className).html(o),
                    a = $(".lightbox, .lightbox-panel"),
                    s = a.length > 0 ? +a.css("z-index") : 1e3,
                    c = $("<div />").css({
                        "position": "absolute",
                        "z-index": s + 2,
                        "width": 1,
                        "height": 1,
                        "top": 0,
                        "left": 0
                    });
                e.unclipped || c.css({
                    "overflow": "hidden"
                }), c.append(r).appendTo("body"), window.MathJax && MathJax.Hub.Typeset(r[0]);
                var l = e.showing(t, r),
                    u = {
                        "left": l.left
                    };
                l.hasOwnProperty("bottom") ? (u.bottom = l.bottom, u.top = "auto") : u.top = 0 | l.top;
                var d;
                e.shown && (d = function() {
                    e.shown(t, r)
                }), c.css(u);
                var p = {
                    "height": r.outerHeight() + 8,
                    "width": r.outerWidth() + 8
                };
                e.fade ? c.css(p).css("display", "none").fadeIn(300, d) : c.animate(p, 300, d), n = function() {
                    c.stop().remove(), e.removed && e.removed(t, r), i = null, n = null
                }, i = StackExchange.helpers.DelayedReaction(n, e.dismissDelay || 5);
                var f = c;
                l.additional && (f = f.add(l.additional)), f.hover(i.cancel, i.trigger)
            }
        }
        var n, o, i, r, a = {},
            s = StackExchange.helpers.DelayedReaction(function(o, i) {
                if (!r && o) {
                    var s;
                    e.cache && "c_" + o in a ? s = $.Deferred().resolve(a["c_" + o]) : (s = $.ajax({
                        "type": "GET",
                        "url": o,
                        "dataType": "html"
                    }), e.cache && s.done(function(e) {
                        a["c_" + o] = e
                    })), s.done(function(e) {
                        n && n(), "" != e && t(i, e)
                    })
                }
            }, 500);
        $(document).delegate(e.selector, {
            "mouseenter": function() {
                return i && this === o ? (i.cancel(), void 0) : (o = this, s.trigger(e.getUrl(this), this), r = !1, !1)
            },
            "mouseleave": function() {
                r = !0, s.cancel(), i && i.trigger()
            }
        })
    }, StackExchange.tagmenu = function() {
        function e(e) {
            return function(n) {
                var o = t(n);
                return null !== o ? o + e : o
            }
        }

        function t(e) {
            var t = $(e);
            if (t.closest(".mixed-site-content, .post-text, .js-tag-preferences-container").length) return null;
            var n = t.attr("href"),
                o = t.data("tag-menu-tagname");
            if (o && (o = o.toString()), !(o || n && "/" === n.charAt(0))) return null;
            var i = o || t.text();
            return i.indexOf("*") > -1 ? null : (t.attr("title", ""), "/tags/" + encodeURIComponent(i))
        }

        function n(e, t) {
            var n = $(e),
                o = $(window),
                i = t.find(".js-source-arrow"),
                r = $(".left-sidebar:visible"),
                a = n.offset(),
                s = n.outerHeight(),
                c = a.left + n.outerWidth() / 2,
                l = t.outerWidth(),
                u = {
                    "left": c - l / 2
                },
                d = a.top + s,
                p = o.scrollTop(),
                f = p + o.height() + -StackExchange.scrollPadding.getPaddingTop();
            t.outerHeight() + d > f && a.top + 8 - t.outerHeight() > p ? (u.bottom = o.height() - a.top - 8, i.addClass("-bottom")) : (u.top = d, i.addClass("-top"));
            var h = r.length ? r.offset().left + r.outerWidth() : 0,
                g = o.width();
            a.left + l > g && (u.left = g - l), u.left < h && (u.left = h);
            var m = c - (u.left + l / 2);
            return i.css("margin-left", m + "px"), u
        }
        var o = !1,
            i = function() {
                if (!o && (o = !0, !StackExchange.options.isMobile)) {
                    var t = {
                        "selector": ".post-tag:not(.user-tag,.no-tag-menu,.invalid-tag,.job-link)",
                        "className": "tag-popup",
                        "getUrl": e("/popup"),
                        "showing": n,
                        "fade": !0,
                        "unclipped": !0
                    };
                    StackExchange.helpers.MagicPopup(t)
                }
            };
        return {
            "init": i
        }
    }(), StackExchange.usermenu = function() {
        function e(e, t) {
            var n = $(e),
                o = n.find("img:last"),
                s = o.offset(),
                c = o.height(),
                l = o.width(),
                u = Math.max(l, c),
                d = 64 * c / u,
                p = 64 * l / u,
                f = t.find("img:first").css({
                    "width": p,
                    "height": d
                }),
                h = f.offset();
            f.css("visibility", "hidden"), i = o.clone().css({
                "position": "absolute",
                "zIndex": 1003,
                "left": s.left,
                "top": s.top,
                "width": l,
                "height": c
            }).appendTo("body");
            var g = function() {
                    return f[0].complete ? (f.css("visibility", "visible"), i.fadeOutAndRemove(), void 0) : (setTimeout(g, 100), void 0)
                },
                m = Math.max(0, s.left - h.left + t.outerWidth() - $(window).width() + 8);
            i.animate({
                "width": p,
                "height": d,
                "top": s.top + h.top,
                "left": s.left - m
            }, 200, g), t.trigger("userhovershowing", e), r = !0;
            var v = t.find(".um-header-info a:not(.um-user-link), .um-about-me a, .um-links a").length > 0;
            return StackExchange.gps.track("user_popup.show", {
                "is_own": a,
                "has_links": v
            }), setTimeout(function() {
                r && StackExchange.gps.track("user_popup.read", {
                    "is_own": a,
                    "has_links": v
                })
            }, 2e3), t.on("click", ".um-gravatar a, a.um-user-link", function() {
                StackExchange.gps.track("user_popup.click", {
                    "clicked_link": 0,
                    "is_own": a
                })
            }), t.on("click", ".um-header-info a:not(.um-user-link)", function() {
                StackExchange.gps.track("user_popup.click", {
                    "clicked_link": 1,
                    "is_own": a
                })
            }), t.on("click", ".um-about-me a", function() {
                StackExchange.gps.track("user_popup.click", {
                    "clicked_link": 2,
                    "is_own": a
                })
            }), t.on("click", ".um-links a", function() {
                StackExchange.gps.track("user_popup.click", {
                    "clicked_link": 3,
                    "is_own": a
                })
            }), {
                "top": s.top,
                "left": s.left - h.left - m,
                "additional": i
            }
        }

        function t(e, t) {
            t.trigger("userhovershown")
        }

        function n(e) {
            $(e).trigger("userhoverremoved"), i.remove(), r = !1
        }
        var o, i, r, a, s = function() {
            function i(e) {
                var t = $(e),
                    n = t.closest(".user-hover"),
                    o = n.find(".user-details a").attr("href"),
                    i = new RegExp("/users/([^/]+).*$"),
                    r = i.exec(o);
                return r ? (a = StackExchange.options.user.isAnonymous ? !1 : (0 | r[1]) > 0 && (0 | r[1]) == (0 | StackExchange.options.user.userId), "/users/user-info/" + r[1]) : null
            }
            o || (o = !0, StackExchange.options.isMobile || StackExchange.helpers.MagicPopup({
                "selector": ".user-hover .user-gravatar48, .user-hover .user-gravatar32",
                "predicate": function(e) {
                    return !$(e).closest(".mixed-site-content").length
                },
                "getUrl": i,
                "cache": !0,
                "id": "user-menu",
                "showing": e,
                "shown": t,
                "removed": n
            }))
        };
        return {
            "init": s
        }
    }(), StackExchange.chatAd = function() {
        function e(e) {
            if (/^\/questions\/\d+/i.test(window.location.pathname) && (m = 0), p = e.chatUrl, f = e.reloadUrl, e.tagBased) {
                var n = t();
                if (!n) return;
                f && (f += (/\?/.test(f) ? "&" : "?") + "tags=" + encodeURIComponent(n))
            }
            null === e.preloadedData ? r() : d(e.preloadedData, null, null)
        }

        function t() {
            var e = $(".question .post-taglist .post-tag");
            return e.length ? e.map(function(e, t) {
                return $(t).text()
            }).get().join(" ") : null
        }

        function n(e) {
            return 10 > e ? "0" + e : e
        }

        function o(e) {
            var t = new Date;
            return t.setTime(1e3 * e), [t.getUTCFullYear(), "-", n(t.getUTCMonth() + 1), "-", n(t.getUTCDate()), " ", n(t.getUTCHours()), ":", n(t.getUTCMinutes()), ":", n(t.getUTCSeconds()), "Z"].join("")
        }

        function i(e) {
            var t = Math.floor((new Date).getTime() / 1e3),
                o = t - e,
                i = o % 60,
                r = Math.floor(o / 60),
                a = Math.floor(o / 3600);
            if (1 > o) return "just now";
            if (60 > o) return function(e) {
                return 1 == e.seconds ? e.seconds + " sec ago" : e.seconds + " secs ago"
            }({
                "seconds": i
            });
            if (3600 > o) return function(e) {
                return 1 == e.minutes ? e.minutes + " min ago" : e.minutes + " mins ago"
            }({
                "minutes": r
            });
            if (86400 > o) return function(e) {
                return 1 == e.hours ? e.hours + " hour ago" : e.hours + " hours ago"
            }({
                "hours": a
            });
            var s = Math.floor(o / 86400);
            if (1 == s) return "yesterday";
            if (2 >= s) return function(e) {
                return 1 == e.__count ? e.__count + " day ago" : e.__count + " days ago"
            }({
                "__count": s
            });
            var c = new Date(1e3 * e);
            return function(e) {
                return e.month + " " + e.date + " at " + e.hours + ":" + e.minutes
            }({
                "month": v[c.getMonth()],
                "date": c.getDate(),
                "hours": c.getHours(),
                "minutes": n(c.getMinutes())
            })
        }

        function r() {
            f && $.get(f, null, d)
        }

        function a(e) {
            if ("!" === e.charAt(0)) {
                var t = e.substr(1);
                if (/^https?:\/\/i.stack.imgur.com\//.test(t)) {
                    var n = /\?/.test(t) ? "&" : "?";
                    t += n + "g&s=32"
                }
                return t
            }
            return "https://www.gravatar.com/avatar/" + e + "?s=23&d=identicon&r=PG"
        }

        function s(e) {
            for (var t = $('<div class="grid gs4 ai-center fw-wrap" />'), n = 0; n < e.length && 7 > n; n++) {
                var o = e[n],
                    r = o.name;
                o.lastPost && (r += ": " + i(o.lastPost));
                var s = $('<img class="bar-sm">').attr({
                        "title": r,
                        "src": a(o.emailhash),
                        "width": 23,
                        "height": 23
                    }),
                    c = $('<a class="grid--cell">').attr("href", p + "/users/" + o.id).append(s);
                t.append(c)
            }
            return t
        }

        function c(e) {
            return $('<div class="grid--cell"><img src="' + p + "/rooms/users/" + e + '.jpeg" /></div>')
        }

        function l(e) {
            var t = e.user,
                n = e.userid;
            return n ? $("<a>").attr("href", p + "/users/" + n).text(t) : $("<span>").text(t)
        }

        function u() {
            f && (m >= h && window.setTimeout(r, 1e3 * h), h += g)
        }

        function d(e) {
            var t = $(".js-chat-ad-rooms");
            if (e.error) return u(), void 0;
            t.empty();
            for (var n = e.rooms, r = 0; r < n.length && 2 > r; r++) {
                var a = n[r],
                    d = p + "/rooms/" + a.id,
                    f = (a.messages || []).length > 0 ? a.messages[0] : null,
                    h = $('<div class="grid fd-column gs2" />');
                $('<a class="grid--cell" />').attr("href", d).text(a.name).appendTo(h), f && $('<div class="grid--cell fs-fine fc-black-300 mb4" />').attr("title", o(a.lastPost)).html(i(a.lastPost) + " - ").append(l(f)).appendTo(h), a.singleImage ? h.append(c(a.id)) : h.append(s(a.users)), t.append($('<div class="s-sidebarwidget--item" />').append(h))
            }
            t.toggleClass("d-none", 0 === n.length);
            var g = $(".js-chat-ad-link");
            e.activeUsers > 1 ? g.text(function(e) {
                return 1 == e.num, e.num + " people chatting"
            }({
                "num": e.activeUsers
            })) : g.text("Visit chat"), g.attr("title", function(e) {
                return 1 == e.users && 1 == e.rooms ? e.users + " user active in " + e.rooms + " room the last 60 minutes" : 1 == e.users ? e.users + " user active in " + e.rooms + " rooms the last 60 minutes" : 1 == e.rooms ? e.users + " users active in " + e.rooms + " room the last 60 minutes" : e.users + " users active in " + e.rooms + " rooms the last 60 minutes"
            }({
                "users": e.activeUsers,
                "rooms": e.activeRooms
            })), u()
        }
        var p, f, h = 180,
            g = 30,
            m = 480,
            v = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return {
            "init": e
        }
    }(), $.extend(StackExchange.helpers, function() {
        function e(e) {
            for (var t in o) o.hasOwnProperty(t) && (e = e.replace(new RegExp("[" + t + "]", "g"), o[t]));
            return e
        }

        function t(e) {
            if (e = $.trim(e), /^\|.*\|$/.test(e)) return "|";
            var t = StackExchange.settings.tags.allowNonAsciiTags ? i : "";
            return !/\s/.test(e) && RegExp("[A-Za-z" + t + "0-9#\\-.*]\\+[A-za-z" + t + "0-9#\\-.]").test(e) ? "+" : /[\s|,;]+/
        }

        function n(e, t, n, o) {
            for (var r = $.trim(e).split(StackExchange.helpers.tagSeparator(e)), a = [], s = 0; s < r.length; s++) {
                var c = r[s];
                o || (c = c.toLowerCase()), StackExchange.settings.tags.allowNonAsciiTags || (c = StackExchange.helpers.noDiacritics(c)), c = c.replace(/_/g, "-");
                var l = (o ? "[^A-Za-z0-9.#+" : "[^a-z0-9.#+") + (t ? "*" : "") + (StackExchange.settings.tags.allowNonAsciiTags ? i : "") + "-]";
                c = c.replace(new RegExp(l, "g"), ""), c = c.replace(/^[#+-]+/, ""), c = c.replace(/[.-]+$/, "");
                var u = ["or", "and", "not"],
                    d = -1 !== u.indexOf(c),
                    p = -1 !== a.indexOf(c);
                c.length > 0 && (!d && !p || n) && a.push(c)
            }
            return a
        }
        var o = {
                "àåáâäãåąɐᵄᶛ": "a",
                "æǣǽᴂᵆ": "ae",
                "çćčĉ": "c",
                "đƍðÐ": "d",
                "èéêëęǝᴈᵌ": "e",
                "ⅎ": "f",
                "ğĝᵷ": "g",
                "ĥɥʮᶣ": "h",
                "ìíîïıᴉᵎ": "i",
                "ĵ": "j",
                "ʞ": "k",
                "ł": "l",
                "ɯɰᵚᶭᴟ": "m",
                "ñń": "n",
                "òóôõöøő": "o",
                "œɶᴔ": "oe",
                "řɹɺɻʴʵ": "r",
                "śşšŝ": "s",
                "ß": "ss",
                "ʇ": "t",
                "Þ": "th",
                "ùúûüŭů": "u",
                "ʌᶺ": "v",
                "ʍ": "w",
                "ýŸÿʎ": "y",
                "żźž": "z"
            },
            i = "\\u0030-\\u0039\\u0041-\\u005a\\u005f\\u0061-\\u007a\\u00aa\\u00b5\\u00ba\\u00c0-\\u00d6\\u00d8-\\u00f6\\u00f8-\\u02c1\\u02c6-\\u02d1\\u02e0-\\u02e4\\u02ec\\u02ee\\u0370-\\u0374\\u0376-\\u0377\\u037a-\\u037d\\u0386\\u0388-\\u038a\\u038c\\u038e-\\u03a1\\u03a3-\\u03f5\\u03f7-\\u0481\\u048a-\\u0523\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05d0-\\u05ea\\u05f0-\\u05f2\\u0621-\\u064a\\u0660-\\u0669\\u066e-\\u066f\\u0671-\\u06d3\\u06d5\\u06e5-\\u06e6\\u06ee-\\u06fc\\u06ff\\u0710\\u0712-\\u072f\\u074d-\\u07a5\\u07b1\\u07c0-\\u07ea\\u07f4-\\u07f5\\u07fa\\u0904-\\u0939\\u093d\\u0950\\u0958-\\u0961\\u0966-\\u096f\\u0971-\\u0972\\u097b-\\u097f\\u0985-\\u098c\\u098f-\\u0990\\u0993-\\u09a8\\u09aa-\\u09b0\\u09b2\\u09b6-\\u09b9\\u09bd\\u09ce\\u09dc-\\u09dd\\u09df-\\u09e1\\u09e6-\\u09f1\\u0a05-\\u0a0a\\u0a0f-\\u0a10\\u0a13-\\u0a28\\u0a2a-\\u0a30\\u0a32-\\u0a33\\u0a35-\\u0a36\\u0a38-\\u0a39\\u0a59-\\u0a5c\\u0a5e\\u0a66-\\u0a6f\\u0a72-\\u0a74\\u0a85-\\u0a8d\\u0a8f-\\u0a91\\u0a93-\\u0aa8\\u0aaa-\\u0ab0\\u0ab2-\\u0ab3\\u0ab5-\\u0ab9\\u0abd\\u0ad0\\u0ae0-\\u0ae1\\u0ae6-\\u0aef\\u0b05-\\u0b0c\\u0b0f-\\u0b10\\u0b13-\\u0b28\\u0b2a-\\u0b30\\u0b32-\\u0b33\\u0b35-\\u0b39\\u0b3d\\u0b5c-\\u0b5d\\u0b5f-\\u0b61\\u0b66-\\u0b6f\\u0b71\\u0b83\\u0b85-\\u0b8a\\u0b8e-\\u0b90\\u0b92-\\u0b95\\u0b99-\\u0b9a\\u0b9c\\u0b9e-\\u0b9f\\u0ba3-\\u0ba4\\u0ba8-\\u0baa\\u0bae-\\u0bb9\\u0bd0\\u0be6-\\u0bef\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c28\\u0c2a-\\u0c33\\u0c35-\\u0c39\\u0c3d\\u0c58-\\u0c59\\u0c60-\\u0c61\\u0c66-\\u0c6f\\u0c85-\\u0c8c\\u0c8e-\\u0c90\\u0c92-\\u0ca8\\u0caa-\\u0cb3\\u0cb5-\\u0cb9\\u0cbd\\u0cde\\u0ce0-\\u0ce1\\u0ce6-\\u0cef\\u0d05-\\u0d0c\\u0d0e-\\u0d10\\u0d12-\\u0d28\\u0d2a-\\u0d39\\u0d3d\\u0d60-\\u0d61\\u0d66-\\u0d6f\\u0d7a-\\u0d7f\\u0d85-\\u0d96\\u0d9a-\\u0db1\\u0db3-\\u0dbb\\u0dbd\\u0dc0-\\u0dc6\\u0e01-\\u0e30\\u0e32-\\u0e33\\u0e40-\\u0e46\\u0e50-\\u0e59\\u0e81-\\u0e82\\u0e84\\u0e87-\\u0e88\\u0e8a\\u0e8d\\u0e94-\\u0e97\\u0e99-\\u0e9f\\u0ea1-\\u0ea3\\u0ea5\\u0ea7\\u0eaa-\\u0eab\\u0ead-\\u0eb0\\u0eb2-\\u0eb3\\u0ebd\\u0ec0-\\u0ec4\\u0ec6\\u0ed0-\\u0ed9\\u0edc-\\u0edd\\u0f00\\u0f20-\\u0f29\\u0f40-\\u0f47\\u0f49-\\u0f6c\\u0f88-\\u0f8b\\u1000-\\u102a\\u103f-\\u1049\\u1050-\\u1055\\u105a-\\u105d\\u1061\\u1065-\\u1066\\u106e-\\u1070\\u1075-\\u1081\\u108e\\u1090-\\u1099\\u10a0-\\u10c5\\u10d0-\\u10fa\\u10fc\\u1100-\\u1159\\u115f-\\u11a2\\u11a8-\\u11f9\\u1200-\\u1248\\u124a-\\u124d\\u1250-\\u1256\\u1258\\u125a-\\u125d\\u1260-\\u1288\\u128a-\\u128d\\u1290-\\u12b0\\u12b2-\\u12b5\\u12b8-\\u12be\\u12c0\\u12c2-\\u12c5\\u12c8-\\u12d6\\u12d8-\\u1310\\u1312-\\u1315\\u1318-\\u135a\\u1380-\\u138f\\u13a0-\\u13f4\\u1401-\\u166c\\u166f-\\u1676\\u1681-\\u169a\\u16a0-\\u16ea\\u1700-\\u170c\\u170e-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176c\\u176e-\\u1770\\u1780-\\u17b3\\u17d7\\u17dc\\u17e0-\\u17e9\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18a8\\u18aa\\u1900-\\u191c\\u1946-\\u196d\\u1970-\\u1974\\u1980-\\u19a9\\u19c1-\\u19c7\\u19d0-\\u19d9\\u1a00-\\u1a16\\u1b05-\\u1b33\\u1b45-\\u1b4b\\u1b50-\\u1b59\\u1b83-\\u1ba0\\u1bae-\\u1bb9\\u1c00-\\u1c23\\u1c40-\\u1c49\\u1c4d-\\u1c7d\\u1d00-\\u1dbf\\u1e00-\\u1f15\\u1f18-\\u1f1d\\u1f20-\\u1f45\\u1f48-\\u1f4d\\u1f50-\\u1f57\\u1f59\\u1f5b\\u1f5d\\u1f5f-\\u1f7d\\u1f80-\\u1fb4\\u1fb6-\\u1fbc\\u1fbe\\u1fc2-\\u1fc4\\u1fc6-\\u1fcc\\u1fd0-\\u1fd3\\u1fd6-\\u1fdb\\u1fe0-\\u1fec\\u1ff2-\\u1ff4\\u1ff6-\\u1ffc\\u203f-\\u2040\\u2054\\u2071\\u207f\\u2090-\\u2094\\u2102\\u2107\\u210a-\\u2113\\u2115\\u2119-\\u211d\\u2124\\u2126\\u2128\\u212a-\\u212d\\u212f-\\u2139\\u213c-\\u213f\\u2145-\\u2149\\u214e\\u2183-\\u2184\\u2c00-\\u2c2e\\u2c30-\\u2c5e\\u2c60-\\u2c6f\\u2c71-\\u2c7d\\u2c80-\\u2ce4\\u2d00-\\u2d25\\u2d30-\\u2d65\\u2d6f\\u2d80-\\u2d96\\u2da0-\\u2da6\\u2da8-\\u2dae\\u2db0-\\u2db6\\u2db8-\\u2dbe\\u2dc0-\\u2dc6\\u2dc8-\\u2dce\\u2dd0-\\u2dd6\\u2dd8-\\u2dde\\u2e2f\\u3005-\\u3006\\u3031-\\u3035\\u303b-\\u303c\\u3041-\\u3096\\u309d-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312d\\u3131-\\u318e\\u31a0-\\u31b7\\u31f0-\\u31ff\\u3400-\\u4db5\\u4e00-\\u9fc3\\ua000-\\ua48c\\ua500-\\ua60c\\ua610-\\ua62b\\ua640-\\ua65f\\ua662-\\ua66e\\ua67f-\\ua697\\ua717-\\ua71f\\ua722-\\ua788\\ua78b-\\ua78c\\ua7fb-\\ua801\\ua803-\\ua805\\ua807-\\ua80a\\ua80c-\\ua822\\ua840-\\ua873\\ua882-\\ua8b3\\ua8d0-\\ua8d9\\ua900-\\ua925\\ua930-\\ua946\\uaa00-\\uaa28\\uaa40-\\uaa42\\uaa44-\\uaa4b\\uaa50-\\uaa59\\uac00-\\ud7a3\\uf900-\\ufa2d\\ufa30-\\ufa6a\\ufa70-\\ufad9\\ufb00-\\ufb06\\ufb13-\\ufb17\\ufb1d\\ufb1f-\\ufb28\\ufb2a-\\ufb36\\ufb38-\\ufb3c\\ufb3e\\ufb40-\\ufb41\\ufb43-\\ufb44\\ufb46-\\ufbb1\\ufbd3-\\ufd3d\\ufd50-\\ufd8f\\ufd92-\\ufdc7\\ufdf0-\\ufdfb\\ufe33-\\ufe34\\ufe4d-\\ufe4f\\ufe70-\\ufe74\\ufe76-\\ufefc\\uff10-\\uff19\\uff21-\\uff3a\\uff3f\\uff41-\\uff5a\\uff66-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc";
        return {
            "noDiacritics": e,
            "tagSeparator": t,
            "sanitizeAndSplitTags": n
        }
    }()), StackExchange.question = function() {
        function e() {
            $(".js-answer-help").removeClass("d-none").attr("aria-hidden", "false")
        }

        function t(e) {
            e.preventDefault(), $(".js-answer-help").addClass("d-none").attr("aria-hidden", "true")
        }

        function n() {
            $("#qualityBanWarningShown").val("true"), $(".js-answer-ban").removeClass("d-none").attr("aria-hidden", "false")
        }

        function o(e) {
            e.preventDefault(), $(".js-answer-ban").addClass("d-none").attr("aria-hidden", "true")
        }

        function i() {
            var e = "hashchange.highlightDestination";
            $(window).off(e).on(e, function() {
                var e = window.location.href;
                if (!(e.indexOf("#") < 0)) {
                    var t = decodeURI(e).match(/#(\d+|comment(\d+)_(\d+))/i);
                    t && (t[2] ? p(t[2], t[3]) : f(r(t[1])))
                }
            }).trigger(e)
        }

        function r(e) {
            return $(".question[data-questionid=" + e + "], .answer[data-answerid=" + e + "]")
        }

        function a(e) {
            var t = r(e);
            if (0 === t.length) return !1;
            var n = t.hasClass("question") ? "#question" : "#" + e;
            return location.hash !== n ? location.hash = n : t.scrollIntoView(), f(t), !0
        }

        function s(e, t) {
            var n = r(t);
            if (0 === n.length) return !1;
            var o = "#comment" + e + "_" + t;
            return location.hash !== o ? location.hash = o : p(e, t), !0
        }
        var c, l, u, d = function(e) {
                var t = e ? e.closest(".question") : $(".question"),
                    n = t.data("questionid");
                if (!n) throw new Error("getQuestionId could not find an id");
                return n
            },
            p = function(e, t) {
                var n = "#comment-" + e,
                    o = $(n);
                if (o.length) StackExchange.comments.flashHighlight(o), o[0].scrollIntoView(!0);
                else {
                    var i = $("#comments-link-" + t);
                    i.length && StackExchange.comments.loadAll(i).done(function() {
                        StackExchange.comments.flashHighlight(e), ($(n)[0] || i.closest(".question, .answer")[0]).scrollIntoView(!0)
                    })
                }
            },
            f = function(e) {
                var t = u;
                e.css({
                    "backgroundColor": c
                }).animate({
                    "backgroundColor": t
                }, 2e3, "linear", function() {
                    $(this).css("background-color", "")
                })
            },
            h = function() {
                var e = "click.shareLinks";
                $(document).off(e).on(e, ".bottom-share-links a", function() {
                    var e = $(this).attr("href"),
                        t = null;
                    e && e.length && (e.indexOf("%3fsgp%3d") >= 0 ? t = 1 : e.indexOf("%3fsfb%3d") >= 0 ? t = 2 : e.indexOf("%3fstw%3d") >= 0 ? t = 3 : e.indexOf("%3fsem%3d") >= 0 && (t = 4)), t && StackExchange.gps.track("share.click", {
                        "location": 3,
                        "service": t
                    }, !0)
                });
                var t = $(".bottom-notice");
                t && t.length && t.data("loc") && t.off(e).on(e, "a", function() {
                    var e = 0,
                        n = t.data("loc"),
                        o = $(this).attr("href");
                    $(this).hasClass("post-tag") ? e = 1 : /\/ask$/.test(o) ? e = 2 : /\/tags$/.test(o) ? e = 4 : /\/unanswered$/.test(o) ? e = 5 : (/\/questions$/.test(o) || /\/questions[?\/]/.test(o)) && (e = 3), StackExchange.gps.track("next_action.click", {
                        "type": e,
                        "location": n
                    }, !0)
                })
            },
            g = function(e, t, n) {
                var o, i, r = document.title,
                    a = n.searchRouteOverride || "/search/titles",
                    s = n.onResults || function() {},
                    c = 0;
                e.attr("autocomplete", "off");
                var l = function(l) {
                        var u = e.val();
                        if (!("" == u || u == o && l !== !0 || StackExchange.settings.site.newTitleSearchBoxEnabled && $(".title-float-selected:visible").length > 0)) {
                            for (var d = u.split(" "), p = 0, f = 0; f < d.length; f++) $.trim(d[f]).length > 0 && p++;
                            var h = (new Date).getTime(),
                                g = (h - c) / 1e3;
                            (l === !0 || !(3 > p || 5 > g) || e.hasClass("edit-field-overlayed")) && (c = h, o = u, n.siteName && (document.title = u ? u + " - " + n.siteName : r), $(".js-similar-questions-loader").length ? (t.empty(), StackExchange.helpers.addStacksSpinner(t, "lg", "fc-orange-400 ml16 mt12")) : (t.empty(), StackExchange.helpers.addSpinner(t)), i && i.fadeOutAndRemove(), $.ajax({
                                "url": a,
                                "dataType": "json",
                                "data": {
                                    "title": u
                                },
                                "success": function(e) {
                                    e && e.content ? (t.html(e.content), setTimeout(function() {
                                        s(t.find(".answer-link a").attr("target", "_blank"))
                                    }, 1), $(".js-link").attr("target", "_blank"), $(".js-similar-questions-outer-div").length && ($(".js-similar-questions-outer-div").removeClass("d-none"), $(".js-question-summary-scroll").one("scroll", function() {
                                        StackExchange.using("gps", function() {
                                            StackExchange.gps.track("similarquestions.title_scroll")
                                        })
                                    }))) : s(null)
                                },
                                "complete": function(e) {
                                    e.responseJSON.content.length > 0 && StackExchange.helpers.removeSpinner(t)
                                }
                            }))
                        }
                    },
                    u = !1;
                return t.mouseenter(function() {
                        u = !0
                    }).mouseleave(function() {
                        u = !1
                    }), e.keyup(l).blur(function() {
                        var e = function() {
                            c = 0, l()
                        };
                        u ? t.one("mouseleave", e) : e()
                    }),
                    function(e) {
                        c = 0, l(e)
                    }
            },
            m = function() {
                try {
                    localStorage.removeItem("nextPrevTrackState"), localStorage.removeItem("nextPrevTrackState2"), localStorage.removeItem("nextPrevState")
                } catch (e) {}
            },
            v = function() {
                var e, t;
                $(document).on({
                    "mouseenter": function() {
                        var n = $(this),
                            o = n.find(".js-new-contributor-label"),
                            i = n.find(".js-new-contributor-popover");
                        t && this === e ? t.cancel() : (i.addClass("is-visible").css({
                            "top": n.height() + 4,
                            "left": o.position().left + o.width() / 2 - n.width() / 2,
                            "width": n.width()
                        }), e = this, t = StackExchange.helpers.DelayedReaction(function() {
                            i.removeClass("is-visible"), t = null
                        }, 100))
                    },
                    "mouseleave": function() {
                        t && t.trigger()
                    }
                }, ".js-new-contributor-indicator")
            },
            b = function() {
                var e = window.location.hash.replace("#", "").toLowerCase();
                if (e) {
                    var t = e.split("_"),
                        n = t[0],
                        o = t[1],
                        i = !0;
                    switch (n) {
                        case "answer":
                            StackExchange.using("editor", function() {
                                var e = $("#wmd-input");
                                e.is(":visible") ? e.focus() : window.setTimeout(function() {
                                    $(".js-add-another-answer").click()
                                }, 10)
                            });
                            break;
                        case "addcomment":
                            o && $("#comments-link-" + o).find(".js-add-link").click();
                            break;
                        case "notify":
                            $(".js-inline-mentions-edit-link").click();
                            break;
                        default:
                            i = !1
                    }
                    i && window.history.replaceState(null, null, window.location.href.split("#")[0])
                }
            };
        return {
            "initTitleSearch": g,
            "getQuestionId": d,
            "initShareLinks": h,
            "canViewVoteCounts": function() {
                return l
            },
            "scrollToPost": a,
            "scrollToComment": s,
            "init": function(r) {
                l = r.canViewVoteCounts, StackExchange.question.fullInit ? StackExchange.question.fullInit(r) : StackExchange.question.bindAnonymousVoteDisclaimers(), StackExchange.comments.init({
                    "autoShowCommentHelp": r.autoShowCommentHelp,
                    "commentHighlightFocus": r.commentHighlightFocus
                }), h(), r.showAnswerBanWarning && $("#wmd-input").one("focus", n), $(".js-answer-ban-close-btn").on("click", o), r.showAnswerHelp && !r.showAnswerBanWarning && $("#wmd-input").one("focus", e), $(".js-answer-help-close-btn").on("click", t), r.focusPostEditor && ($("#wmd-input").focus(), $("#post-form")[0].scrollIntoView(!0)), r.showCitation && $(document).on("click", "div .cite-link", function() {
                    citation.show($(this))
                }), u = r.backgroundColor, c = r.highlightColor, i(), m(), v(), window.setTimeout(b, 0)
            }
        }
    }(), StackExchange.question.bindAnonymousVoteDisclaimers = function() {
        function e(e) {
            var t = $(this),
                n = t.closest(".js-voting-container"),
                o = t.hasClass("js-vote-up-btn"),
                i = t.hasClass("js-vote-down-btn"),
                r = t.hasClass("js-favorite-btn"),
                a = t.closest(".answer").length;
            if (e.preventDefault(), o || i) {
                if (StackExchange.options.inReadOnly) return n.showErrorMessage("Voting isn't available in read-only mode.", {
                    "transient": !0
                }), void 0;
                var s = n.data("post-id");
                if (StackExchange.options.isMobile) {
                    StackExchange.helpers.fireAndForget("/posts/popup/anon-vote/" + s + "?voteTypeId=" + (o ? 2 : 3));
                    var c = "Thank you for your feedback.<br />" + (a ? function(e) {
                        return "Please " + e.startAnchor + "log in or register" + e.endAnchor + " to vote for this answer."
                    }({
                        "startAnchor": '<a href="/users/login?returnurl=' + escape(document.location) + '">',
                        "endAnchor": "</a>"
                    }) : function(e) {
                        return "Please " + e.startAnchor + "log in or register" + e.endAnchor + " to vote for this question."
                    }({
                        "startAnchor": '<a href="/users/login?returnurl=' + escape(document.location) + '">',
                        "endAnchor": "</a>"
                    }));
                    StackExchange.helpers.showMessage(t, c, {
                        "type": "info",
                        "position": {
                            "my": "left top",
                            "at": "right center"
                        },
                        "css": {
                            "margin-left": "-10px"
                        }
                    })
                } else {
                    var l = "anon-vote-popup-" + s;
                    if (n.is(":working") || $("." + l).length) return;
                    n.data("working", !0), $(".anon-vote-popup").fadeOutAndRemove(), StackExchange.helpers.removeMessages();
                    var u = $('<div class="anon-vote-popup vote-popup popup">' + function(e) {
                        return "Sending feedback" + e.nbsp
                    }({
                        "nbsp": "&nbsp;"
                    }) + "</div>").addClass(l).addSpinner();
                    u.appendTo("body").center().fadeIn("fast"), StackExchange.using("gps", function() {
                        StackExchange.gps.track("vote_popup.show", {
                            "type": a ? 2 : 1
                        })
                    }), $.ajax({
                        "type": "POST",
                        "url": "/posts/popup/anon-vote/" + s + "?voteTypeId=" + (o ? 2 : 3),
                        "data": {
                            "fkey": StackExchange.options.user.fkey
                        },
                        "dataType": "html",
                        "success": function(e) {
                            u.html(e).attr("data-controller", "se-draggable")
                        },
                        "error": function() {
                            u.remove()
                        },
                        "complete": function() {
                            n.data("working", !1)
                        }
                    })
                }
            } else if (r) {
                if (StackExchange.options.inReadOnly) return n.showErrorMessage("Favoriting isn't available in read-only mode.", {
                    "transient": !0
                }), void 0;
                $(".anon-vote-popup").fadeOutAndRemove();
                var c = a ? function(e) {
                    return "Please " + e.startAnchor + "log in or register" + e.endAnchor + " to favorite this answer."
                }({
                    "startAnchor": '<a href="/users/login?ssrc=fav_answer&returnurl=' + escape(document.location) + '">',
                    "endAnchor": "</a>"
                }) : function(e) {
                    return "Please " + e.startAnchor + "log in or register" + e.endAnchor + " to favorite this question."
                }({
                    "startAnchor": '<a href="/users/login?ssrc=fav_question&returnurl=' + escape(document.location) + '">',
                    "endAnchor": "</a>"
                });
                StackExchange.using("gps", function() {
                    StackExchange.gps.track("favorite_popup.show", {})
                }), StackExchange.helpers.showMessage(t, c, {
                    "type": "info",
                    "position": {
                        "my": "left top",
                        "at": "right center"
                    },
                    "css": {
                        "margin-left": "-10px"
                    }
                })
            }
        }
        $(".js-vote-down-btn, .js-vote-up-btn, .js-favorite-btn:not(.disabled)").each(function() {
            var t = $(this);
            t.data("bound-anonymous") || (t.data("bound-anonymous", !0), t.click(e))
        }), StackExchange.question.bindFetchAcceptedAnswerDates()
    }, StackExchange.question.bindFetchAcceptedAnswerDates = function() {
        $(".js-accepted-answer-indicator").on("mouseenter mouseleave focus", function() {
            var e = $(this);
            if (!e.is(":working")) {
                e.working(!0);
                var t = e.closest(".answer").data("answerid");
                if (!t) return e.attr("title", ""), void 0;
                var n = "/posts/" + t + "/accepted-answer-date";
                $.get(n, function(t) {
                    e.attr("title", t)
                })
            }
        })
    }, StackExchange.comments = function() {
        function e(e, t, n) {
            this.postId = e, this.jPost = t.closest(".question, .answer, div[id^='post-']"), this.jDiv = t, this.jCommentsList = t.find(".js-comments-list"), this.jCommentsLinkContainer = $("#comments-link-" + e), this.context = n
        }

        function t(e) {
            "string" == typeof e && (e = $("#comment-" + e)), e.addClass("comment__highlight"), setTimeout(function() {
                e.removeClass("comment__highlight new_comment")
            }, 0)
        }

        function n(e) {
            var t = $("#comments-" + e);
            if (t.length) {
                var n = o(t),
                    i = n.jCommentsLinkContainer,
                    r = (n.jCommentsList, n.remainingCommentsCount());
                r++, i.data("comments-count", r), i.attr("title", "expand to show all comments on this post, or add one of your own"), n.setCommentsMenu(r), i.removeClass("disabled-link"), n.remainingCommentsCount(r), i.show().fadeTo("fast", .7).fadeTo("fast", 1)
            }
        }

        function o(t) {
            var n = t.constructor === $ ? t : $(t),
                o = n.closest(".js-comments-container");
            0 === o.length && (o = n.closest(".question, .answer, div[id^='post-']").find(".js-comments-container"));
            var i = o.data("post-id"),
                r = o.data("comment-context") || "none",
                a = i + "-" + r;
            if (d[a]) return d[a];
            var s = new e(i, o, r);
            return d[a] = s, s
        }

        function i(e) {
            return 0 === window.location.pathname.indexOf("/review") ? 0 : e.closest(".question").length ? 1 : e.closest(".answer").length ? 2 : 0
        }

        function r(e) {
            var t = $(this),
                n = o(t),
                r = 0 === n.remainingCommentsCount(),
                s = t.hasClass("disabled-link"),
                c = n.jCommentsLinkContainer.data("rep");
            r && n.jCommentsLinkContainer.data("anon") && (StackExchange.options.isMobile ? StackExchange.helpers.showMessage(n.jCommentsLinkContainer, function(e) {
                return 1 == e.rep, "Commenting requires an account with " + e.rep + " reputation"
            }({
                "rep": c
            }), {
                "type": "info",
                "position": {
                    "my": "left top",
                    "at": "right center"
                },
                "relativeToBody": !0
            }) : a(n.jCommentsLinkContainer.attr("id").replace("comments-link-", ""), i(t))), r && n.jCommentsLinkContainer.data("reg") && StackExchange.helpers.showMessage(t, function(e) {
                return 1 == e.rep, "You must have " + e.linkStart + e.rep + " reputation" + e.linkEnd + " to comment"
            }({
                "rep": c,
                "linkStart": "<a href='/help/privileges/comment'>",
                "linkEnd": "</a>"
            }), {
                "type": "info",
                "position": {
                    "my": "left top",
                    "at": "right center"
                },
                "relativeToBody": !0
            }), t.hasClass("js-show-link") && StackExchange.using("gps", function() {
                StackExchange.gps.track("comment.show")
            });
            var l = !1;
            if (t.hasClass("js-add-link")) {
                l = !0;
                var u = "other";
                n.jPost.hasClass("question") ? u = "question" : n.jPost.hasClass("answer") && (u = "answer");
                var d = r ? "all_shown" : "hidden";
                StackExchange.using("gps", function() {
                    StackExchange.gps.track("comment.add", {
                        "location": u,
                        "type": d
                    })
                })
            }
            s || (e.preventDefault(), n.addShow(!1, l))
        }

        function a(e, t) {
            var n = "anon-vote-popup-" + e;
            if (!$("." + n).length) {
                $(".anon-vote-popup").fadeOutAndRemove(), StackExchange.helpers.removeMessages();
                var o = $('<div class="anon-vote-popup comment-popup popup">' + function(e) {
                    return "Loading" + e.nbsp
                }({
                    "nbsp": "&nbsp;"
                }) + "</div>").addClass(n).addSpinner();
                o.appendTo("body").center().fadeIn("fast"), StackExchange.using("gps", function() {
                    StackExchange.gps.track("comment_popup.show", {
                        "type": t
                    })
                }), $.ajax({
                    "type": "POST",
                    "url": "/posts/popup/anon-comment/" + e,
                    "data": {
                        "fkey": StackExchange.options.user.fkey
                    },
                    "dataType": "html",
                    "success": function(e) {
                        o.html(e).attr("data-controller", "se-draggable")
                    },
                    "error": function() {
                        o.remove()
                    }
                })
            }
        }

        function s(e) {
            var t = e && e.post || document;
            d = {}, $(t).off("click", "a.js-add-link", r).on("click", "a.js-add-link", r), $(t).off("click", "a.js-show-link", r).on("click", "a.js-show-link", r), t == document && l(), c(null, !0), e && e.commentHighlightFocus && (u = e.commentHighlightFocus)
        }

        function c(t, n) {
            n || (f = t), t = t || f || {};
            for (var o in t) t.hasOwnProperty(o) && (e.prototype[o] = t[o])
        }

        function l() {
            if (0 != $(".question[data-questionid]").length) {
                var e = StackExchange.question.getQuestionId();
                $(".js-comment .comment-date > span").each(function() {
                    var t = $(this),
                        n = t.closest(".answer"),
                        o = n && n.length ? n.data("answerid") : 0,
                        i = t.closest(".js-comment").attr("id").substr("comment-".length),
                        r = o ? o : e,
                        a = "#comment" + i + "_" + r;
                    location.href.indexOf("/questions/") > 0 ? t.wrap('<a class="comment-link" href="{hash}"></a>'.formatUnicorn({
                        "hash": a
                    })) : t.wrap('<a class="comment-link" href="/q/{pid}/{hash}"></a>'.formatUnicorn({
                        "hash": a,
                        "pid": r
                    }))
                })
            }
        }
        var u, d = {},
            p = function() {};
        e.prototype = {
            "checkDiscussion": p,
            "ensureInput": p,
            "renderTextInput": p,
            "alterAddEditDataBeforeSubmit": p,
            "saveEditingComments": p,
            "restoreEditingComments": p,
            "isInputShown": function() {
                var e = this.jDiv.find('form[id^="add-comment-"]');
                return e.children().length && e.is(":visible")
            },
            "commentsShown": function() {
                this.remainingCommentsCount(0)
            },
            "remainingCommentsCount": function(e) {
                return "undefined" == typeof e ? parseInt(this.jCommentsList.data("remaining-comments-count")) || 0 : (this.jCommentsList.data("remaining-comments-count", e), void 0)
            },
            "addShow": function(e, t) {
                var n = this,
                    o = this.loadAllComments().done(function() {
                        n.checkDiscussion()
                    });
                if (t) {
                    var i = this.ensureInput();
                    i && !e && i.focus()
                }
                o.done(function() {
                    i && i.length > 0 && n.jCommentsLinkContainer.hide()
                })
            },
            "ajax": function(e, t, n, o) {
                n && !o && StackExchange.helpers.addSpinner(n, {
                    "margin-left": "10px"
                });
                var i = this;
                return $.ajax(e).fail(function(e) {
                    var r = e.responseText;
                    (!r || r.indexOf("<html") >= 0) && (r = t || "An error occured"), StackExchange.helpers.showErrorMessage(n || i.jDiv, r, {
                        "transient": 409 == e.status
                    }), n && !o && StackExchange.helpers.removeSpinner()
                }).done(StackExchange.helpers.removeSpinner).promise()
            },
            "setCommentsMenu": function(e) {
                var t = "",
                    n = "";
                e > 0 && (n = function(e) {
                    return 1 == e.count ? "show <b>" + e.count + "</b> more comment" : "show <b>" + e.count + "</b> more comments"
                }({
                    "count": e
                })), this.isInputShown() || !this.jCommentsList.data("cansee") && !this.jCommentsList.data("canpost") || (t = StackExchange.settings.comments.addButtonSaysSuggestImprovements ? "suggest improvements" : "add a comment"), t.length || n || !this.jCommentsList.data("comments-unavailable") || (t = "comments disabled on deleted / locked posts / reviews"), StackExchange.options.inReadOnly && (t = "");
                var o = this.jCommentsLinkContainer.find(".js-add-link"),
                    i = this.jCommentsLinkContainer.find(".js-show-link");
                o.html(t), i.html(n), t.length ? o.removeClass("dno") : o.addClass("dno"), n.length ? i.removeClass("dno") : i.addClass("dno"), t.length && n.length ? this.jCommentsLinkContainer.find(".js-link-separator").removeClass("dno") : this.jCommentsLinkContainer.find(".js-link-separator").addClass("dno"), this.jCommentsList.data("addlink-disabled") && o.addClass("disabled-link")
            },
            "clearHighlights": function() {
                this.jCommentsList.find(".js-comment").removeClass("new_comment").css("background-color", "")
            },
            "showComments": function(e, n, o, i) {
                this.saveEditingComments(n);
                var r = !o,
                    a = {};
                if (this.clearHighlights(), r && this.jCommentsList.find(".js-comment").each(function(e, t) {
                        t.id && t.id.length && (a[t.id] = !0)
                    }), this.jCommentsList.empty().append(e), r) {
                    var s = null;
                    this.jCommentsList.find(".js-comment").each(function(e, t) {
                        t.id && t.id.length && !a[t.id] && (s || (s = t), $(t).addClass("new_comment"))
                    });
                    var c = this.jCommentsList.find(".new_comment");
                    t(c), u && c.length && !i && c[0].scrollIntoView(!0)
                }
                this.restoreEditingComments(), this.setCommentsMenu(0), "undefined" != typeof MathJax && MathJax.Hub.Queue(["Typeset", MathJax.Hub]), l(), this.commentsShown()
            },
            "loadAllComments": function(e, t, n, o) {
                this.jDiv.removeClass("dno");
                var i = 0 === this.remainingCommentsCount();
                if (!e && i) return $.Deferred().resolve().promise();
                var r = this;
                return this.ajax({
                    "type": "GET",
                    "url": "/posts/" + this.postId + "/comments" + (t || ""),
                    "dataType": "html"
                }, "An error occurred while fetching comments").done(function(e) {
                    r.showComments(e, null, n, o)
                }).promise()
            }
        };
        var f;
        return {
            "init": s,
            "loadAll": function(e, t) {
                return o(e).loadAllComments(!0, t, !0, !0)
            },
            "replaceAll": function(e, t) {
                o(e).showComments(t, null, !0, !0)
            },
            "realtimeMessage": n,
            "flashHighlight": t,
            "extendPostUi": c,
            "uiForPost": o
        }
    }(), StackExchange.share = function() {
        function e(e, t, n) {
            window.open(e, t, n) || (window.location.href = e)
        }

        function t(e, t, n) {
            n = "undefined" != typeof n ? n : "1", t += "=" + n;
            var o = e.indexOf("?"),
                i = e.indexOf("#");
            return -1 == o ? -1 == i ? e + "?" + t : e.substring(0, i) + "?" + t + e.substring(i) : -1 == i ? e + "&" + t : e.substring(0, i) + "&" + t + e.substring(i)
        }
        return {
            "twitter": function(n, o, i, r) {
                o = t(o, "stw", r);
                var a = 257;
                i.length > a && (i = i.substring(0, a - 3) + "..."), n.click(function() {
                    e("https://twitter.com/share?url=" + encodeURIComponent(o) + "&ref=twitbtn&text=" + encodeURIComponent(i), "sharetwitter", "toolbar=1,status=1,resizable=1,scrollbars=1,width=800,height=526")
                })
            },
            "facebook": function(n, o, i, r) {
                o = t(o, "sfb", r), n.click(function() {
                    e("https://www.facebook.com/sharer.php?u=" + encodeURIComponent(o) + "&ref=fbshare&t=" + encodeURIComponent(i), "sharefacebook", "toolbar=1,status=1,resizable=1,scrollbars=1,width=626,height=436")
                })
            },
            "devTo": function(n, o, i, r) {
                var a, s;
                a = (s = o.match(/^.*:\/\/stackoverflow\.com\/[qa]\/(\d+)(?:\/\d+)?$/)) ? "{% stackoverflow {postId} %}".formatUnicorn({
                    "postId": s[1]
                }) : (s = o.match(/^.*:\/\/([a-z]*(?:\.meta)?\.stackoverflow)\.com\/[qa]\/(\d+)(?:\/\d+)?$/)) ? "{% stackexchange {postId} {host} %}".formatUnicorn({
                    "postId": s[2],
                    "host": s[1]
                }) : (s = o.match(/^.*:\/\/(([a-z0-9]*(?:\.meta)?)\.stackexchange\.com)\/[qa]\/(\d+)(?:\/\d+)?$/)) ? "{% stackexchange {postId} {host} %}".formatUnicorn({
                    "postId": s[3],
                    "host": s[2] || s[1]
                }) : (s = o.match(/^.*:\/\/((?:meta\.)?[a-z0-9]*)\.(?:com|net|org)\/[qa]\/(\d+)(?:\/\d+)?$/)) ? "{% stackexchange {postId} {host} %}".formatUnicorn({
                    "postId": s[2],
                    "host": s[1]
                }) : t(o, "sdv", r), n.click(function() {
                    e("https://dev.to/new?prefill=---%0Atitle%3A%20{title}%0Apublished%3A%20true%0A---%0A%0A{body}".formatUnicorn({
                        "title": encodeURIComponent(i),
                        "body": encodeURIComponent(a)
                    }), "sharedev", "toolbar=1,status=1,resizable=1,scrollbars=1,width=800,height=526")
                })
            }
        }
    }(), StackExchange.newsletterAd = function() {
        function e(e) {
            var t = $('<div class="popup newsletter-popup lightbox-panel" style="display:block"></div>').append($("<div />", {
                "class": "popup-close"
            }).append("<a>&times;</a>", {
                "title": "close this popup (or hit Esc)"
            })).append(e);
            $("body").loadPopup({
                "lightbox": !0,
                "html": t,
                "target": $("body")
            })
        }

        function t(t) {
            $("#newsletter-signup").click(function() {
                var e = $(this);
                StackExchange.helpers.addSpinner("#newsletter-signup-container"), $.ajax({
                    "url": t.subscribeUrl.replace(/-1/, StackExchange.options.user.userId),
                    "type": "POST",
                    "dataType": "json",
                    "data": {
                        "fkey": StackExchange.options.user.fkey,
                        "siteId": StackExchange.options.site.id
                    },
                    "success": function(t) {
                        t.url ? window.location.href = t.url : "confirmed" == t.status ? $("#newsletter-signup-container").replaceWith('<div style="line-height: 200%; text-align: center;"><strong>Subscribed!</strong></div>') : "unconfirmed" == t.status ? $("#newsletter-signup-container").replaceWith('<span style="line-height: 120%;"><strong>Success!</strong> Please click the link in the confirmation email to activate your subscription.</span>') : e.parent().showErrorMessage(function(e) {
                            return "there was a problem signing up for the newsletter" + e.br + "please try again later"
                        }({
                            "br": "<br />"
                        }))
                    },
                    "error": function() {
                        e.parent().showErrorMessage(function(e) {
                            return "there was a problem signing up for the newsletter" + e.br + "please try again later"
                        }({
                            "br": "<br />"
                        }))
                    },
                    "complete": function() {
                        StackExchange.helpers.removeSpinner("#newsletter-signup-container")
                    }
                })
            }), $("#newsletter-preview").click(function() {
                var t = $(window).height(),
                    n = Math.min(600, t - 100),
                    o = ['<div id="newsleter-preview-pane" style="overflow: hidden; width: 660px; height: ', n, 'px;">', '<iframe src="', $(this).attr("href"), '" width="660" height="', n, '" frameborder="0"></iframe>', "</div>"].join("");
                return e(o), !1
            })
        }
        return {
            "init": t
        }
    }(),
    function(e, t, n, o) {
        var i = !("selectionStart" in e("<input type='text' />")[0]);
        e.fn.caret = function(e, r) {
            var a, s, c = this[0];
            if ("object" == typeof e && "number" == typeof e.start && "number" == typeof e.end) a = e.start, s = e.end;
            else if ("number" == typeof e && "number" == typeof r) a = e, s = r;
            else if ("string" == typeof e)(a = c.value.indexOf(e)) > -1 ? s = a + e[t] : a = null;
            else if ("[object RegExp]" === Object.prototype.toString.call(e)) {
                var l = e.exec(c.value);
                null != l && (a = l.index, s = a + l[0][t])
            }
            if ("undefined" != typeof a) {
                if (i) {
                    var u = this[0].createTextRange();
                    u.collapse(!0), u.moveStart("character", a), u.moveEnd("character", s - a), u.select()
                } else this[0].selectionStart = a, this[0].selectionEnd = s;
                return this[0].focus(), this
            }
            if (i) {
                var d = document.selection;
                if ("textarea" != this[0].tagName.toLowerCase()) {
                    var p = this.val(),
                        f = d[n]()[o]();
                    f.moveEnd("character", p[t]);
                    var h = "" == f.text ? p[t] : p.lastIndexOf(f.text);
                    f = d[n]()[o](), f.moveStart("character", -p[t]);
                    var g = f.text[t]
                } else {
                    var f = d[n](),
                        m = f[o]();
                    m.moveToElementText(this[0]), m.setEndPoint("EndToEnd", f);
                    var h = m.text[t] - f.text[t],
                        g = h + f.text[t]
                }
            } else var h = c.selectionStart,
                g = c.selectionEnd;
            var v = c.value.substring(h, g);
            return {
                "start": h,
                "end": g,
                "text": v,
                "replace": function(e) {
                    return c.value.substring(0, h) + e + c.value.substring(g, c.value[t])
                }
            }
        }
    }(jQuery, "length", "createRange", "duplicate"), StackExchange.nocaptcha = function() {
        function e(e, n) {
            var o = ['<div class="popup captcha-popup lightbox-panel" style="display: block; text-align: left;">', '<div class="popup-close">', $("<a>", {
                "title": "close this popup (or hit Esc)",
                "text": "×"
            }).prop("outerHTML"), "</div>", e, "</div>"].join("");
            $("body").loadPopup({
                "target": $("body"),
                "html": o,
                "lightbox": !0,
                "loaded": function(e) {
                    t(e, n)
                }
            })
        }

        function t(e, t) {
            var n = e.find("form:first");
            StackExchange.helpers.enableSubmitButton(n), n.submit(function() {
                return StackExchange.helpers.disableSubmitButton(n), n.find('input[type="submit"]').addSpinnerAfter(), $.ajax({
                    "url": "/nocaptcha",
                    "type": "POST",
                    "dataType": "json",
                    "data": n.serialize(),
                    "success": function(o) {
                        o.captchaError ? (StackExchange.helpers.removeSpinner(), StackExchange.helpers.enableSubmitButton(n), n.find(".form-error").html(o.captchaError), Recaptcha.reload()) : (e.find(".popup-close a").click(), t(o))
                    },
                    "error": function() {
                        StackExchange.helpers.removeSpinner(), StackExchange.helpers.enableSubmitButton(n), StackExchange.helpers.showErrorMessage(n, "An error occurred submitting the CAPTCHA")
                    }
                }), !1
            })
        }
        return {
            "init": e
        }
    }(), StackExchange.gps = function() {
        function e(e) {
            return m ? !0 : (m = !0, e && t() ? (StackExchange.gps.sendPending = a, StackExchange.gps.track = s, l(), a(), n(".tagged-questions-page, .questions-page, .tags-page", ".js-gps-related-tags .post-tag", "related_tags.click", ", item_type:1"), n(".question-page", ".js-gps-related-questions .spacer", "related_questions.click"), n(".question-page .post-taglist", ".post-tag", "question_tags.click", ", location:1"), n(".question-page #sidebar .tagged", ".post-tag", "question_tags.click", ", location:2"), o(), !0) : (StackExchange.gps.track = function(e, t, n, o) {
                o && o()
            }, delete StackExchange._gps_track, !1))
        }

        function t() {
            if (!window.localStorage) return !1;
            try {
                if (window.localStorage["gps-probe"] = "1", "1" != window.localStorage["gps-probe"]) return !1;
                window.localStorage.removeItem("gps-probe")
            } catch (e) {
                return !1
            }
            return !0
        }

        function n(e, t, n, o) {
            $(e).find(t).each(function(e) {
                $(this).addClass("js-gps-track").data("gps-track", n + "({ position:" + (e + 1) + o + " })")
            })
        }

        function o(e) {
            var t = $(e || document).find(".js-gps-track").off("click.gps").one("click.gps", function() {
                var e = $.trim($(this).data("gps-track"));
                if (e)
                    for (var t = i(e), n = 0; n < t.length; n++) {
                        var o = t[n];
                        StackExchange.gps.track(o[0], o[1], !0)
                    }
            });
            h("bindTrackClicks bound {0} elements in {1}", t.length, e || "document")
        }

        function i(e) {
            function t(e) {
                if ("true" === e) return !0;
                if ("false" === e) return !1;
                if ("'" === e[0] || '"' === e[0]) return e.substring(1, e.length - 1);
                var t = parseFloat(e);
                return isNaN(t) ? e : t
            }
            for (var n = [], o = e.match(/([a-z._-]+)(\([^)]+\))?/gi), i = 0; i < o.length; i++) {
                var r = o[i];
                if (r.indexOf("{") < 0) n.push([r, {}]);
                else {
                    for (var a = r.match(/([a-z._-]+)\s*\(\s*\{([^}]+)\}\s*\)/i) || [], s = a[1], c = $.trim(a[2]) || "", l = c.match(/[^,]+/gi) || [], u = {}, d = 0; d < l.length; d++) {
                        var p = l[d],
                            f = p.indexOf(":"),
                            h = $.trim(p.substr(0, f)),
                            g = $.trim(p.substr(f + 1)),
                            m = t(g);
                        u[h] = m
                    }
                    n.push([s, u])
                }
            }
            return n
        }

        function r(e, t) {
            $(e).on("click", t + " a[href]:not(.question-hyperlink, .answer-hyperlink)", function() {
                var e = $(this),
                    t = e.attr("href");
                StackExchange.helpers.isInNetwork(t) || ("undefined" == typeof ga ? h("outbound link clicked " + t) : ga("send", "event", "outbound", "click", t, {
                    "useBeacon": !0
                }))
            })
        }

        function a(e) {
            var t = u();
            if (t.length > 0) {
                for (var n = (new Date).getTime(), o = [], i = 0; i < t.length && o.length < 20; i++) {
                    var r = t[i],
                        a = n - r.now;
                    0 > a || a > 36e5 ? p(r) : o.push(r)
                }
                o.length > 0 ? f(o, e) : e && e()
            }
        }

        function s(e, t, n, o) {
            var i = {
                "evt": e,
                "properties": t || {},
                "now": (new Date).getTime()
            };
            d(i), navigator && navigator.sendBeacon && (n = !1), n ? (o && o(), window.setTimeout(a, 1e4)) : a(o)
        }

        function c(e) {
            e && StackExchange.options && StackExchange.options.user && (e.properties && !e.properties.user_type && (e.properties.user_type = StackExchange.options.user.user_type), !e.ab && StackExchange.options.user.ab && (e.ab = StackExchange.options.user.ab))
        }

        function l() {
            StackExchange._gps_track && ($.each(StackExchange._gps_track, function(e, t) {
                d(t)
            }), delete StackExchange._gps_track)
        }

        function u() {
            var e = localStorage[g];
            return e ? JSON.parse(e) : []
        }

        function d(e) {
            c(e);
            var t, n = localStorage[g];
            if (n) {
                var o = JSON.parse(n);
                o.push(e), t = JSON.stringify(o)
            } else t = JSON.stringify([e]);
            h("addToPending " + JSON.stringify(e)), localStorage[g] = t
        }

        function p(e) {
            var t = localStorage[g];
            if (t) {
                for (var n = JSON.parse(t), o = JSON.stringify(e), i = -1, r = 0; r < n.length; r++) {
                    var a = JSON.stringify(n[r]);
                    if (o == a) {
                        i = r;
                        break
                    }
                }
                if (-1 != i) return n.splice(i, 1), 0 == n.length ? (localStorage.removeItem(g), void 0) : (localStorage[g] = JSON.stringify(n), void 0)
            }
        }

        function f(e, t) {
            $.isArray(e) || (e = [e]);
            for (var n = 0; n < e.length; n++) {
                var o = JSON.stringify(e[n]);
                v[o] && (e.splice(n, 1), n--)
            }
            for (var n = 0; n < e.length; n++) {
                var o = JSON.stringify(e[n]);
                v[o] = !0
            }
            var i = JSON.stringify(e);
            if (navigator && navigator.sendBeacon) try {
                h("sending (beacon): " + i);
                var r = "/gps/event";
                if (StackExchange && StackExchange.options && StackExchange.options.site && StackExchange.options.site.routePrefix && StackExchange.options.site.routePrefix.length && (r = StackExchange.options.site.routePrefix + r), navigator && navigator.sendBeacon(r, i)) {
                    for (var n = 0; n < e.length; n++) {
                        p(e[n]);
                        var o = JSON.stringify(e[n]);
                        delete v[o]
                    }
                    return t && t(), void 0
                }
            } catch (a) {
                h(a)
            }
            h("sending (AJAX): " + i), $.ajax({
                "type": "POST",
                "url": "/gps/event",
                "data": {
                    "data": i
                },
                "success": function() {
                    for (var t = 0; t < e.length; t++) p(e[t])
                },
                "complete": function() {
                    for (var n = 0; n < e.length; n++) {
                        var o = JSON.stringify(e[n]);
                        delete v[o]
                    }
                    t && t()
                }
            })
        }

        function h(e) {
            if ((StackExchange.options && StackExchange.options.enableLogging || $.cookie("devlog")) && "string" == typeof e) {
                if (arguments.length > 1) {
                    var t = Array.prototype.slice.call(arguments, 1);
                    e = String.prototype.formatUnicorn.apply(e, t)
                }
                console.log("gps: " + e)
            }
        }
        var g = "gps-pending",
            m = !1,
            v = {},
            b = StackExchange.gps.track,
            y = StackExchange.gps.sendPending;
        return {
            "init": e,
            "bindTrackClicks": o,
            "track": b,
            "sendPending": y,
            "trackOutboundClicks": r
        }
    }(), StackExchange.openid = function() {
        function e(e, t) {
            return e ? (t && $(e).data("ssrc", t), $(e).data("ssrc")) : c
        }

        function t(t, n) {
            var o = e(n);
            t && (StackExchange.gps.track("openid.click", {
                "openid_provider": t,
                "location": o
            }, !0), StackExchange.gps.track("signup.openid.click", {
                "openid_provider": t,
                "location": o
            }, !0)), StackExchange.gps.track("signup.start", {
                "openid_provider": t,
                "location": o,
                "tid": StackExchange.options.user.tid
            }, !0)
        }

        function n(n, o, c) {
            var l = decodeURIComponent(o),
                u = "unknown";
            c && c.length ? u = c : (0 === l.indexOf("/questions/") && (u = "question_page"), "/questions/ask" === l && (u = "question_ask"));
            var d = $(n);
            e(d, u), d.removeClass("dno");
            var p = d.find(".google-login");
            p.click(function() {
                t("Google", d), r(d)
            });
            var f = d.find(".facebook-login");
            f.click(function() {
                t("Facebook", d), i(d)
            });
            var h = d.find(".stackexchange-login");
            h.click(a(function() {
                t("Stack Exchange", d), StackExchange.navPrevention.stop(), window.location = "/users/signup?ssrc=" + encodeURIComponent(u) + "&returnUrl=" + encodeURIComponent(l)
            })), d.find(".submit-openid").click(function() {
                s(d, l)
            })
        }

        function o(n, o, a, c, l) {
            var u = decodeURIComponent(o);
            e(n, a);
            var d = n.find(".google-login");
            d.click(function() {
                t("Google", n), r(n)
            });
            var p = n.find(".facebook-login");
            p.click(function() {
                t("Facebook", n), i(n)
            });
            var f = n.find(".stackexchange-login");
            f.click(function() {
                t("Stack Exchange", n), window.location = "/users/signup?ssrc=" + encodeURIComponent(a) + "&returnUrl=" + encodeURIComponent(u)
            }), n.find(".submit-openid").click(function() {
                s(n, u, c, l)
            })
        }

        function i(t) {
            t.find(".ssrc").val(e(t)), t.find(".use-facebook").val("true"), t.find(".use-google").val(""), t.find(".submit-openid").click()
        }

        function r(t) {
            t.find(".ssrc").val(e(t)), t.find(".use-google").val("true"), t.find(".use-facebook").val(""), t.find(".submit-openid").click()
        }

        function a(e) {
            return function() {
                StackExchange.using("editor", function() {
                    StackExchange.cardiologist.ensureDraftSaved(e)
                })
            }
        }

        function s(t, n, o, i) {
            var r = t.find(".use-facebook").val(),
                s = t.find(".use-google").val();
            a(function() {
                var a = !!StackExchange.options.site.isChildMeta,
                    c = (a ? StackExchange.options.site.parentUrl : "") + "/users/signup?returnurl=" + encodeURIComponent(n),
                    l = $('<form method="post" action="' + c + '"></form>'),
                    u = $('<input type="hidden" name="oauth_version" />'),
                    d = $('<input type="hidden" name="oauth_server" />');
                l.append(u), l.append(d), u.val("2.0"), r ? d.val("https://www.facebook.com/v2.0/dialog/oauth") : s && d.val("https://accounts.google.com/o/oauth2/auth"), l.append("<input type='hidden' name='fkey' value='" + StackExchange.options.user.fkey + "' />"), $('<input type="hidden" name="ssrc" />').val(e(t)).appendTo(l), o && i && ($('<input type="hidden" name="anon_vote_type" />').val(o).appendTo(l), $('<input type="hidden" name="anon_vote_hash" />').val(i).appendTo(l)), StackExchange.navPrevention.stop(), l.hide().appendTo("body").submit()
            })()
        }
        var c = "unknown";
        return {
            "initPostLogin": n,
            "initAnonPopup": o
        }
    }();
var UniversalAuth = function() {
    var e = 1,
        t = 200,
        n = 1e4,
        o = 5 * n,
        i = !1;
    return {
        "redirectOnCompletion": function(e, r) {
            if (i) return window.location.replace(e), void 0;
            var a, s = 0,
                c = function() {
                    if (i) return window.location.replace(e), clearInterval(a), void 0;
                    var c = n > s,
                        l = o > s;
                    s += t;
                    var u = s >= n,
                        d = s >= o,
                        p = c && u;
                    p && r && r();
                    var f = l && d;
                    f && clearInterval(a)
                };
            a = setInterval(c, t)
        },
        "performAuth": function() {
            if (UniversalAuth.enabled()) {
                var t = $.cookie("uauth");
                null !== t && ($.post("/users/login/universal/request", function(t) {
                    var n = [],
                        o = function() {
                            var e = null !== $.cookie("uauth");
                            if (!e && n) {
                                for (var t = 0; t < n.length; t++) {
                                    var o = n[t],
                                        r = o[0];
                                    if (!r.complete) return
                                }
                                i = !0
                            }
                        };
                    $.each(t, function(t, i) {
                        var r = "//" + i.Host + "/users/login/universal.gif?authToken=" + encodeURIComponent(i.Token) + "&nonce=" + encodeURIComponent(i.Nonce);
                        $(document).ready(function() {
                            var t = $("<img/>").attr({
                                "style": "display:none",
                                "src": r,
                                "crossOrigin": "use-credentials"
                            });
                            n.push(t), t.one("load", function() {
                                var i = t[0].width,
                                    r = t[0].height;
                                if (2 === i && 2 === r && e > 0) {
                                    e--;
                                    var a = $.cookie("uauth");
                                    if (!a) {
                                        var s = new Date,
                                            c = new Date(s.getTime() + 3e5);
                                        $.cookie("uauth", "true", {
                                            "path": "/",
                                            "domain": document.domain,
                                            "expires": c
                                        }), n = null, setTimeout(function() {
                                            UniversalAuth.performAuth()
                                        }, 10)
                                    }
                                }
                                o()
                            }), $("#footer").append(t)
                        })
                    })
                }, "json"), $.cookie("uauth", null, {
                    "path": "/",
                    "domain": document.domain
                }))
            }
        },
        "enabled": function() {
            return !0
        }
    }
}();
StackExchange.ready(function() {
        function e() {
            try {
                $.cookie("fkey", StackExchange.options.user.fkey, {
                    "path": "/",
                    "expires": 1 / 144
                })
            } catch (e) {}
        }
        if (StackExchange.options.user.isAnonymous) {
            var t = /\bfkey=/i;
            $(document).ajaxSend(function(n, o, i) {
                "post" === i.type.toLowerCase() && (t.test(i.url) || t.test(i.data)) && e()
            }), $(document).on("submit", "form", function() {
                var t = $(this);
                "post" === (t.attr("method") || "").toLowerCase() && t.find("input[name='fkey']").length && e()
            })
        }
    }), StackExchange.loadJqueryUi = function() {
        var cssLink = StackExchange.settings.paths.jQueryUICSSPathOverride,
            jsLink = StackExchange.settings.paths.jQueryUIJSPathOverride;
        if (cssLink || (cssLink = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/themes/smoothness/jquery-ui.css"), jsLink || (jsLink = "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"), $.ui) return $.Deferred().resolve();
        $("<link>").attr({
            "href": cssLink,
            "rel": "stylesheet",
            "type": "text/css",
            "media": "all"
        }).appendTo("head");
        var result = $.Deferred(),
            locale = StackExchange.options.locale,
            datepickerLanguageGetter, datepickerLanguageScript;
        return $.ajaxSetup({
            "cache": !0
        }), "en" !== locale && (datepickerLanguageGetter = $.ajax({
            "url": "/content/js/third-party/jquery-ui/datepicker-" + locale + ".js",
            "dataType": "text",
            "type": "GET"
        }).done(function(e) {
            datepickerLanguageScript = e
        })), $.when(datepickerLanguageGetter || $.Deferred().resolve(), $.getScript(jsLink)).done(function() {
            eval(datepickerLanguageScript), result.resolve()
        }), $.ajaxSetup({
            "cache": !1
        }), result.promise()
    }, StackExchange.processTimings = function() {
        function e(e, t) {
            var n = {};
            t = t || e.name || !1;
            for (var o in e)
                if ("toJSON" !== o && "entryType" !== o)
                    if (t) {
                        if ("subresources" === o) continue;
                        var i = Math.round(e[o]);
                        n[o] = i ? i : e[o]
                    } else 0 !== e[o] && (n[o] = 0 === e[o] ? null : e[o] - e.navigationStart);
            return n
        }

        function t() {
            if (StackExchange.options.timingsGuid && window.performance && window.performance.timing && window.performance.getEntriesByType) {
                var t = [],
                    n = [],
                    o = !1,
                    i = function(i) {
                        for (var r = 0; r < n.length; r++) n[r].cancel();
                        if (!o) {
                            o = !0;
                            var a = $.extend(e(window.performance.timing, !1), {
                                    "guid": StackExchange.options.timingsGuid,
                                    "Info": StackExchange.options.timingsInfo,
                                    "fkey": StackExchange.options.user.fkey,
                                    "subresources": t.map(function(t) {
                                        return e(t, !0)
                                    })
                                }),
                                s = JSON.stringify(a);
                            if (navigator && navigator.sendBeacon && -1 === location.search.indexOf("__debug=1")) try {
                                var c = "/_/client-timings";
                                if (StackExchange.options.site && StackExchange.options.site.routePrefix && StackExchange.options.site.routePrefix.length && (c = StackExchange.options.site.routePrefix + c), navigator && navigator.sendBeacon(c, s)) return
                            } catch (l) {}
                            i || $.post("/_/client-timings", s)
                        }
                    },
                    r = StackExchange.helpers.DelayedReaction(i, StackExchange.settings.monitoring.clientTimingsDebounceTimeout, {
                        "sliding": !0
                    });
                n.push(r);
                var a = StackExchange.helpers.DelayedReaction(i, StackExchange.settings.monitoring.clientTimingsAbsoluteTimeout);
                a.trigger(), n.push(a);
                var s = {},
                    c = window.setInterval(function() {
                        for (var e = window.performance.getEntriesByType("resource"), n = !1, o = 0; o < e.length; o++)
                            if (!s[o]) {
                                var i = e[o];
                                t.push(i), n = !0, s[o] = !0
                            }
                        n && r.trigger()
                    }, 50);
                n.push({
                    "cancel": function() {
                        c && (window.clearInterval(c), c = null)
                    }
                }), window.performance.onresourcetimingbufferfull = function() {
                    window.performance.clearResourceTimings(), s = {}
                }, $(window).unload(function() {
                    i(!0)
                })
            }
        }
        return t
    }(), StackExchange.showFlashMessageIfAny = function() {
        var e = "flash-message-json",
            t = $.cookie(e);
        if (t) try {
            $.cookie(e, null, {
                "path": "/",
                "domain": document.domain
            });
            var n = decodeURIComponent(t.replace(/[+]/g, " ")),
                o = JSON.parse(n);
            if (StackExchange.options.enableLogging && console.log("flash message: showing " + n), StackExchange.options.isMobile) return StackExchange.helpers.showMobileMessage(o.message, o.type), void 0;
            switch (o.position) {
                case "toast":
                    var i = {
                        "type": o.type,
                        "position": o.position,
                        "transient": !0
                    };
                    StackExchange.helpers.showMessage(document.body, o.message, i);
                    break;
                case "notice":
                    StackExchange.helpers.showStacksNotice(o.message, o.type);
                    break;
                default:
                    StackExchange.helpers.showBannerMessage(o.message, o.type)
            }
        } catch (r) {}
    }, StackExchange.prepareEditor = function(e) {
        var t = e.postfix || "",
            n = function() {
                setTimeout(function() {
                    StackExchange.editor.initIfShown(e)
                }, 1)
            };
        if (!e.onDemand) return StackExchange.using("editor", n), void 0;
        for (var o = "bold-button italic-button spacer1 link-button quote-button code-button image-button spacer2 olist-button ulist-button heading-button hr-button spacer3 undo-button redo-button".split(" "), i = $('<ul id="wmd-button-row' + t + '" class="wmd-button-row" />').appendTo(".wmd-button-bar"), r = 0, a = 0; a < o.length; a++) {
            var s = o[a],
                c = /spacer/.test(s),
                l = $("<li id='wmd-" + s + t + "' />").prop("className", "wmd-" + (c ? "spacer" : "button")).css("left", 25 * a).appendTo(i);
            $("<span />").css("background-position", r + "px -20px").appendTo(l), c || (r -= 20)
        }
        var u = document.createElement("li");
        u.className = "wmd-spacer wmd-spacer-max", i.append(u);
        var d = !1;
        $("#wmd-input, #title, #tagnames, #edit-comment, #m-address, #display-name").one("focus click keydown", function() {
            if (!d) {
                d = !0;
                var t = function() {
                    i.remove(), e.autoShowMarkdownHelp && (e.immediatelyShowMarkdownHelp = !0), n()
                };
                i.addSpinner({
                    "float": "right"
                }), StackExchange.using("editor", t)
            }
        })
    }, StackExchange.Auth = function() {
        var e = function(e, t) {
                for (var n = !1, o = 0; o < e.length; o++)
                    if (e[o].id == t.id) {
                        t.changed = e[o].message == t.message, e[o].message = t.message, n = !0;
                        break
                    }
                n || (t.changed = !0, t.index >= e.length ? e.push(t) : e.splice(t.index, 0, t))
            },
            t = function(t, n, o) {
                var i = 15,
                    r = 8,
                    a = t.val(),
                    s = /[a-z]/.test(a),
                    c = /[A-Z]/.test(a),
                    l = /\d/.test(a),
                    u = /(_|[^\w\d])/.test(a),
                    d = 0;
                if (s && d++, c && d++, l && d++, u && d++, 2 === d && a.length >= i) return o(n, "pw-weak", t), o(n, "pw-short", t), void 0;
                var p = $("<span><p>" + function(e) {
                    return "Please add one of the following things to make your password stronger:" + e.pEnd + " " + e.listStart + " " + e.char + " letters " + e.itemEnd + " " + e.num + " numbers " + e.itemEnd + " " + e.listEnd
                }({
                    "pEnd": "</p>",
                    "listStart": "<ul>",
                    "listEnd": "</ul>",
                    "itemEnd": "</li>",
                    "char": '<li id="ch">',
                    "num": '<li id="num">'
                }) + "</span>");
                (s || c) && l ? o(n, "pw-weak", t) : 3 > d ? ((s || c) && p.find("#ch").remove(), l && p.find("#num").remove(), e(n, {
                    "id": "pw-weak",
                    "index": 1,
                    "attachTo": t,
                    "message": p
                })) : o(n, "pw-weak", t);
                var f = t.val().length;
                if (r > f) {
                    var h = r - f;
                    e(n, {
                        "id": "pw-short",
                        "index": 2,
                        "attachTo": t,
                        "message": function(e) {
                            return 1 == e.remaining ? "Must contain at least " + e.remaining + " more character." : "Must contain at least " + e.remaining + " more characters."
                        }({
                            "remaining": h
                        })
                    })
                } else o(n, "pw-short", t)
            };
        return {
            "addOrUpdateError": e,
            "passwordStrengthValidation": t
        }
    }(), StackExchange.Hero = function() {
        var e = {
                "name": null,
                "version": null
            },
            t = function() {
                var t = "hero-dismissed",
                    o = {
                        "ld": "",
                        "d": []
                    },
                    i = $.cookie(t);
                if (i) {
                    var r = i.split("!");
                    r.shift(), o.d = r
                }
                o.ld = (new Date).getTime();
                var a = e.name + "_" + e.version,
                    s = !0;
                for (var c in o.d)
                    if (o.d.hasOwnProperty(c)) {
                        var l = o.d[c],
                            u = l.split("_");
                        if (u === e.name) {
                            o.d[c] = a, s = !1;
                            break
                        }
                    }
                s && o.d.push(a), $.cookie(t, n(o), {
                    "path": "/",
                    "expires": 365
                })
            },
            n = function(e) {
                return [e.ld].concat(e.d).join("!")
            },
            o = function(t, n) {
                e.name = t, e.version = n
            };
        return {
            "init": o,
            "dismiss": t
        }
    }(), StackExchange.checklist = function() {
        function e(e, t, n) {
            return $.post(e, {
                "fkey": StackExchange.options.user.fkey,
                "preference": t,
                "hideCompletedOrDismiss": n
            })
        }
        $(document).on("click", ".js-toggle-completed-requirements", function(t) {
            var n = $(t.target),
                o = n.closest(".js-checklist"),
                i = n.hasClass("is-visible"),
                r = n.data("preference"),
                a = n.data("url");
            e(a, r, i).always(function() {
                o.find(".js-requirement.is-finished").closest("li").toggleClass("dno"), n.toggleClass("is-visible is-hidden").text(i ? "Show all items" : "Hide completed items")
            })
        })
    }(), StackExchange.responsiveness = StackExchange.responsiveness || {},
    function() {
        StackExchange.responsiveness.addSwitcher = function() {
            var e = !!$.cookie("no-responsiveness");
            $('<li class="-item"><a class="-link" role="button" /></a></li>').find("a").text(e ? "Enable Responsiveness" : "Disable Responsiveness").click(function() {
                $.cookie("no-responsiveness", e ? null : "1", e ? {
                    "path": "/"
                } : {
                    "path": "/",
                    "expires": 180
                }), location.reload(!0)
            }).end().appendTo(".js-primary-footer-links")
        }
    }(), StackExchange.userQuestionList = function() {
        function e(e) {
            var t = e.split(/[\s|,;]+/).filter(function(e) {
                return e.length > 0
            });
            t = a(t.join(" ")).split(" ");
            for (var n = t.length - 2; n >= 0; n--) "not" === t[n] && t.splice(n, 2, "-" + t[n + 1]);
            return t.join(" ")
        }

        function t(e, t) {
            var n = function(t, n) {
                    return t.test(e[n])
                },
                o = function(e) {
                    return n(/^not$/i, e) ? y : n(/^and$/i, e) ? v : n(/^or$/i, e) ? b : m
                };
            if (0 === t) return ["and", "or"];
            var i = [],
                r = o(t - 1);
            r === y ? i.push("and", "or", "not") : r !== m && i.push("and", "or");
            for (var a = t - 1; a >= 0; a--) {
                var s = o(a);
                if (s === b) break;
                s === m && i.push(e[a])
            }
            return i
        }

        function n(e, t) {
            var n = e.map(function() {
                    return !0
                }),
                o = function(t, n) {
                    return t.test(e[n])
                },
                i = function(e) {
                    return o(/^not$/i, e) ? y : o(/^and$/i, e) ? v : o(/^or$/i, e) ? b : m
                },
                r = function(t, o) {
                    for (var r = [], a = [], s = -1, c = t; o >= c; c++) switch (i(c)) {
                        case b:
                            r = [], a = [], s = -1;
                            break;
                        case v:
                            s = -1;
                            break;
                        case y:
                            s = c;
                            break;
                        case m:
                            var l = e[c],
                                u = -1 !== s ? a : r; - 1 === u.indexOf(l) ? u.push(l) : (n[c] = !1, -1 !== s && (n[s] = !1)), s = -1
                    }
                },
                a = function(e, t) {
                    for (var o = m, r = t, a = t; a >= e; a--)
                        if (n[a]) {
                            var s = i(a);
                            if (o !== m) {
                                if (s === y) {
                                    n[a] = !1;
                                    continue
                                }
                                if (s === v && (o === v || o === b)) {
                                    n[a] = !1;
                                    continue
                                }
                                s !== b || o !== v && o !== b || (n[r] = !1)
                            }
                            o = s, r = a
                        }
                };
            r(0, t - 1), r(t, e.length - 1), a(0, t - 1), a(t, e.length - 1);
            var s;
            for (s = 0; t > s && o(g, s); s++) n[s] = !1;
            for (s = e.length - 1; s >= t && o(h, s); s--) n[s] = !1;
            return n
        }

        function o(e) {
            for (var t = e.split(StackExchange.helpers.tagSeparator(e)), n = t.length - 1; n >= 0; n--) {
                var o = t[n];
                /^-[^-]/.test(o) && (t.splice(n + 1, 0, o.substring(1)), t[n] = "not")
            }
            return StackExchange.helpers.sanitizeAndSplitTags(t.join(" "), !0, !0) || []
        }

        function i(e) {
            var t = o(e);
            return t.length > 1 && "not" === t[0] ? "-" + t[1] : t[0]
        }

        function r(e) {
            var t = /^-/.test(e);
            return $.get("/filter/tags", {
                "q": e.replace(/^-/, ""),
                "newstyle": !0
            }, "json").then(function(n) {
                var o = Math.max(n.length, 6);
                return t && n.forEach(function(e) {
                    e.Negated = !0
                }), ["not", "or", "and"].forEach(function(t) {
                    (0 === e.length || -1 !== t.indexOf(e)) && n.unshift({
                        "Name": t
                    })
                }), n.length > o ? n.slice(0, o) : n
            })
        }

        function a(e) {
            var t, i = o(e || "");
            return i.length > 0 && (t = n(i, 0), i = i.filter(function(e, n) {
                return t[n]
            })), i.length > 0 && (t = n(i, i.length), i = i.filter(function(e, n) {
                return t[n]
            })), i.join(" ")
        }

        function s(e) {
            var t = "";
            switch (e.tagModeId) {
                case "Watched":
                    t = "";
                    break;
                default:
                    t = encodeURIComponent(e.tagQuery)
            }
            var n = [];
            e.sortId.length > 0 && n.push("sort=" + e.sortId), e.filterIds.length > 0 && n.push("filters=" + e.filterIds), "Specified" !== e.tagModeId && n.push("tagMode=" + e.tagModeId), e.uqlId && n.push("uqlId=" + e.uqlId), n.push("edited=true");
            var o = "Watched" === e.tagModeId ? "/questions/tagged" : t ? "/questions/tagged/" + t : "/questions",
                i = StackExchange.options.site.routePrefix || "";
            return window.location.origin + i + o + "?" + n.join("&")
        }

        function c(e, t, n, o, i) {
            o.prop("disabled", !0), $.ajax({
                "type": "POST",
                "url": e,
                "data": $.extend({}, t, {
                    "fkey": StackExchange.options.user.fkey,
                    "name": n
                }),
                "dataType": "json",
                "success": function(e) {
                    if (e.Success) i ? i(e) : e.RedirectUrl ? location.href = e.RedirectUrl : e.Message && StackExchange.helpers.showToast(e.Message, {
                        "type": "info",
                        "transient": !0
                    });
                    else {
                        var t = e.Message || "An error occurred during save.";
                        if ($(".js-modal-container").hasClass("d-none")) StackExchange.helpers.showToast(t, {
                            "type": "danger",
                            "transient": !0
                        });
                        else {
                            var n = StackExchange.stacksValidation.handlerFor($("#uql-name-field"));
                            n.add("error", t)
                        }
                    }
                },
                "error": function(e) {
                    var t = e.responseText && e.responseText.length < 100 ? e.responseText : "An error occurred during save.";
                    if ($(".js-modal-container").hasClass("d-none")) StackExchange.helpers.showToast(t, {
                        "type": "danger",
                        "transient": 409 === e.status
                    });
                    else {
                        var n = StackExchange.stacksValidation.handlerFor($("#uql-name-field"));
                        n.add("error", t)
                    }
                },
                "complete": function() {
                    o.prop("disabled", !1)
                }
            })
        }

        function l(e, t, n, o) {
            confirm(function(e) {
                return 'Are you sure you want to delete "' + e.name + '"?'
            }({
                "name": t
            })) && c("/questions/user-lists/" + e + "/delete", {}, null, n, o)
        }

        function u(e, a) {
            StackExchange.using("tagEditor", function() {
                StackExchange.tagEditor(e, null, null, {
                    "excerpts": !1,
                    "columns": 1,
                    "operators": h,
                    "customFilterTags": n,
                    "customSafeTags": o,
                    "customExistingTags": t,
                    "sanitizeSearchTerm": i,
                    "getDataPromise": r,
                    "useStacksClasses": !0
                }), e.next(".tag-editor").on("change", function() {
                    a.prop("checked", !0)
                }).on("keypress", function(e) {
                    0 !== e.which && a.prop("checked", !0)
                }).on("click", ".js-delete-tag", function() {
                    a.prop("checked", !0)
                })
            })
        }

        function d() {
            Stacks.addController("se-uql", {
                "targets": ["tagQuery", "name", "toggleMoreButton", "morePopover", "toggleFormButton", "form", "saveButton", "saveTemplate", "applyButton"],
                "resetForm": function() {
                    this.formTarget.reset();
                    var e = this.tagQueryTarget;
                    if (e.func_clear) {
                        var t = a(e.value);
                        e.func_clear(), t.split(/ +/).forEach(e.func_add, e)
                    }
                },
                "showSaveModal": function(e) {
                    e.preventDefault();
                    var t = $($(this.saveTemplateTarget).text());
                    t.data("passed-data", this.readForm()), StackExchange.helpers.showModal(t, {
                        "returnElements": $(e.currentTarget)
                    })
                },
                "toggleEditor": function() {
                    $(this.toggleFormButtonTarget).click().focus()
                },
                "cancelEditor": function() {
                    this.resetForm(), $(this.formTarget).hasClass("is-expanded") && $(this.toggleFormButtonTarget).click()
                },
                "readForm": function() {
                    function t(e) {
                        return $(n[e]).filter(":checked")
                    }
                    var n = this.formTarget.elements,
                        o = t("sortId").val() || "",
                        i = t("filterId").map(function() {
                            return this.value
                        }).get().join(","),
                        r = t("tagModeId").val() || "Specified",
                        a = "Specified" === r ? e(this.tagQueryTarget.value || "") : "",
                        s = $(n.uqlId).val();
                    return {
                        "sortId": o,
                        "filterIds": i,
                        "tagModeId": r,
                        "tagQuery": a,
                        "id": s
                    }
                },
                "navigate": function(e) {
                    e.preventDefault();
                    var t = this.readForm();
                    t.uqlId = this.data.get("id");
                    var n = t.tagQuery.trim();
                    if ("true" === this.data.get("sanitize-tag-query") && n.length > 0) {
                        var o = $(this.applyButtonTarget);
                        o.addClass("is-loading"), $.ajax({
                            "type": "POST",
                            "url": "/questions/sanitize-tag-query",
                            "data": {
                                "fkey": StackExchange.options.user.fkey,
                                "tagQuery": n
                            },
                            "dataType": "json",
                            "success": function(e) {
                                t.tagQuery = e.TagQuery, location.href = s(t)
                            },
                            "error": function(e) {
                                var t = e.responseText && e.responseText.length < 100 ? e.responseText : "An error occurred processing the tag query.";
                                StackExchange.helpers.showToast(t, {
                                    "type": "danger",
                                    "transient": 409 === e.status
                                })
                            },
                            "complete": function() {
                                o.removeClass("is-loading")
                            }
                        })
                    } else location.href = s(t)
                },
                "connect": function() {
                    var e = $(this.tagQueryTarget);
                    e.attr("value", o(e.val()).join(" "));
                    var t = $(this.formTarget.elements.tagModeId).filter("[value=Specified]");
                    u(e, t)
                }
            })
        }

        function p() {
            Stacks.addController("se-uql-save", {
                "targets": ["name", "saveButton"],
                "validateName": function(e, t) {
                    var n = StackExchange.stacksValidation.handlerFor($(this.nameTarget));
                    if (!n) return !0;
                    if (e && !n.hasType("error")) return !0;
                    n.clear("error");
                    var o = this.nameTarget.value.trim();
                    return t || "" !== o || n.add("error", "Title is missing."), o.length > 32 && n.add("error", function(e) {
                        return 1 == e.count ? "Title is " + e.count + " character too long." : "Title is " + e.count + " characters too long."
                    }({
                        "count": o.length - 32
                    })), "en" !== StackExchange.options.locale || /^[ -~]*$/.test(o) || n.add("error", "Please only include ASCII characters."), !n.hasType("error")
                },
                "liveValidate": function() {
                    this.validateName(!0, !0)
                },
                "updateExisting": function(e) {
                    if (e.preventDefault(), this.validateName()) {
                        var t = $(this.element).data("passed-data");
                        c("/questions/user-lists/" + t.id + "/update", t, this.nameTarget.value.trim(), $(this.saveButtonTargets))
                    }
                },
                "createNew": function(e) {
                    if (e.preventDefault(), this.validateName()) {
                        var t = $(this.element).data("passed-data");
                        c("/questions/user-lists/create", t, this.nameTarget.value.trim(), $(this.saveButtonTargets))
                    }
                }
            })
        }

        function f() {
            Stacks.addController("se-uql-list", {
                "targets": ["item"],
                "getParentItem": function(e) {
                    return $(this.itemTargets).has(e).get(0)
                },
                "deleteCurrent": function(e) {
                    var t = e.currentTarget,
                        n = this.getParentItem(t);
                    l(this.getElementData(n, "id"), this.getElementData(n, "name"), $(t), function() {
                        location.reload()
                    })
                },
                "editCurrent": function(e) {
                    e.preventDefault(), this.triggerEvent("edit-current-requested")
                }
            })
        }
        var h = /^(?:and|or|not)$/i,
            g = /^(?:and|or)$/i,
            m = 0,
            v = 1,
            b = 2,
            y = 3,
            k = function(e) {
                d(), p(), f(), e.sharingUrl && history.replaceState && history.replaceState({}, document.title, e.sharingUrl + location.hash)
            };
        return {
            "init": k
        }
    }(), StackExchange.stacksValidation = function() {
        function e(e) {
            var n = e.data("stacks-validation-handler");
            return n || (n = new t(e), e.data("stacks-validation-handler", n)), n.invalid ? null : n
        }

        function t(e) {
            return this.hideIcons = !1, this.$input = e, this.$container = e.closest(".js-stacks-validation"), this.$container.length ? (this.$message = this.$container.find(".js-stacks-validation-message"), this.messages = [], void 0) : (this.invalid = !0, void 0)
        }

        function n(e) {
            return e.html
        }

        function o(e) {
            return e.type
        }
        t.prototype = {
            "_updateMessages": function() {
                if (this.$message.empty().toggleClass("d-none", !this.messages.length), this.messages.length) {
                    var e;
                    e = 1 === this.messages.length ? this.messages[0].html : "<ul><li>" + this.messages.map(n).join("</li><li class='mt8'>") + "</li></ul>", this.$message.html(e).find("a").attr("target", "_blank")
                }
            },
            "_updateIcon": function() {
                if (this.$container.find(".js-stacks-validation-icon").remove(), this.messages.length && !this.hideIcons) {
                    var e = this.highestType();
                    Svg[i[e]].With("s-input-icon js-stacks-validation-icon").insertAfter(this.$input)
                }
            },
            "_updateClass": function() {
                this.$container.removeClass("has-error has-warning has-success"), this.messages.length && this.$container.addClass("has-" + this.highestType())
            },
            "_update": function() {
                this._updateMessages(), this._updateIcon(), this._updateClass()
            },
            "highestType": function() {
                return this.messages.map(o).reduce(function(e, t) {
                    return "error" === e || "error" === t ? "error" : "warning" === e || "warning" === t ? "warning" : "success"
                })
            },
            "hasType": function(e) {
                return this.messages.some(function(t) {
                    return t.type === e
                })
            },
            "add": function(e, t) {
                this.messages.some(function(n) {
                    return n.type === e && n.html === t
                }) || (this.messages.push({
                    "type": e,
                    "html": t
                }), this._update())
            },
            "clear": function(e) {
                this.messages = e ? this.messages.filter(function(t) {
                    return t.type !== e
                }) : [], this._update()
            }
        };
        var i = {
            "error": "AlertCircle",
            "warning": "Alert",
            "success": "Checkmark"
        };
        return {
            "handlerFor": e
        }
    }(), StackExchange.Notice = function() {
        var e = {
                "cookieId": null,
                "expireDate": null
            },
            t = function(t) {
                $.cookie(e.cookieId, t, {
                    "expires": new Date(e.expireDate),
                    "path": "/"
                })
            },
            n = function(n) {
                if (e.cookieId) {
                    var o = n($.cookie(e.cookieId));
                    o && t(o)
                }
            },
            o = function() {
                t("2;" + Date.now())
            },
            i = function() {
                t("4;" + Date.now())
            },
            r = function() {
                var t = $(".js-announcement-banner");
                e.cookieId = t.data("cookie"), e.expireDate = t.data("expire-date");
                var n = 16,
                    r = 8,
                    a = $(window),
                    s = $("#footer"),
                    c = !0,
                    l = $("#content"),
                    u = $("#left-sidebar"),
                    d = $("#js-gdpr-consent-banner"),
                    p = $(".js-dismissable-hero"),
                    f = $(".container");
                t.each(function() {
                    var e = $(this),
                        h = e.hasClass("js-announcement-sidebar");
                    if (h) {
                        var g, m = function() {
                                var e = a.height(),
                                    t = s[0].getBoundingClientRect().top,
                                    o = e - t,
                                    i = n;
                                return o > 0 && (i = o + n), d.is(":visible") && (i += d[0].getBoundingClientRect().height), p.is(":visible") && (i += p[0].getBoundingClientRect().height), i
                            },
                            v = function() {
                                var t = l[0].getBoundingClientRect().left,
                                    n = u.width(),
                                    o = e.width(),
                                    i = r;
                                return t > n && (i = t - o - r), Math.max(r, i)
                            },
                            b = function(t) {
                                e.attr("style", "bottom: " + m() + "px !important; left: " + v() + "px !important;"), c && (t || f.scrollTop() > 0) && (c = !1, e.removeClass("d-none"))
                            };
                        $(document).on("scroll", function() {
                            clearTimeout(g), g = setTimeout(function() {
                                b(!0)
                            }, 10)
                        });
                        var y;
                        $(window).on("resize", function() {
                            clearTimeout(y), y = setTimeout(function() {
                                b(!1)
                            }, 10)
                        }), setTimeout(function() {
                            b(!0)
                        }, 3e3)
                    }
                    var k = function() {
                        e.animate({
                            "height": "0",
                            "opacity": 0
                        }, "fast", "linear", function() {
                            t.remove()
                        })
                    };
                    e.hasClass("js-link") ? e.click(function() {
                        o(), k()
                    }) : e.find(".js-link").click(function() {
                        o(), k()
                    }), e.find(".js-dismiss").click(function(e) {
                        return e.preventDefault(), i(), k(), $(this).parents(".js-satisfaction-survey").length && $.post("/survey/site-satisfaction/dismiss", {
                            "fkey": StackExchange.options.user.fkey
                        }), !1
                    })
                })
            },
            a = function() {
                var t = $(".js-research-banner"),
                    n = new Date,
                    r = t.data("days-to-expire");
                e.cookieId = t.data("cookie"), e.expireDate = n.setDate(n.getDate() + r);
                var a = function() {
                        var e = $(this).closest(".research-banner__state");
                        if (!e) return !1;
                        var t = $(".js-research-banner"),
                            n = t.find(".research-banner__state");
                        n.hide();
                        var o = n.index(e),
                            i = $(n.get(o + 1));
                        t.removeClass(e.data("propagateClass")), t.addClass(i.data("propagateClass")), i.show()
                    },
                    s = function(e) {
                        StackExchange.helpers.showToast(e, {
                            "type": "danger",
                            "transientTimeout": 3e3
                        })
                    };
                $(".js-research-banner form.js-submit").submit(function(e) {
                    return e.preventDefault(), $.ajax({
                        "type": "POST",
                        "url": t.data("cta-url"),
                        "data": {
                            "fkey": StackExchange.options.user.fkey
                        }
                    }).done(function(e) {
                        e.success ? o() : s(e.message)
                    }).fail(s), a.call(this), !1
                }), $(".js-research-banner .js-research-dismiss").click(function() {
                    return i(), $(".js-research-banner").remove(), !1
                }), $(".js-research-banner-state .js-research-confirm").click(a)
            },
            s = function() {
                var r = $(".js-create-team-tooltip"),
                    a = $(".js-create-team-btn-with-tooltip");
                e.cookieId = r.data("cookie"), e.expireDate = r.data("expire-date"), r.hasClass("d-none") || $(".js-pinned-left-sidebar").addClass("z-selected");
                var s = function() {
                    StackExchange.using("gps", function() {
                        StackExchange.gps.track("teams.create.left-sidenav-tooltip.dismiss")
                    })
                };
                r.on("click", function() {
                    return $(this).fadeOutAndRemove(), i(), s(), $(".js-pinned-left-sidebar").removeClass("z-selected"), !1
                }), a.on("click", function() {
                    o()
                });
                var c = "notice-UserMessaging-CreateTeamTooltip",
                    l = $.cookie(c);
                l && (t(l), $.cookie(c, null, {
                    "path": "/"
                })), n(function(e) {
                    return e ? "!" === e.substring(0, 1) ? "!" + (1 + parseInt(e.substring(1))) : null : "!1"
                })
            };
        return {
            "announcementBannerInit": r,
            "researchBannerInit": a,
            "tooltipInit": s
        }
    }(), StackExchange.bindShowMoreHotNetworkQuestions = function() {
        var e = $("#hot-network-questions"),
            t = e.find(".js-show-more"),
            n = e.find(".js-hidden");
        if (e.length && t.length && n.length) {
            var o = $("#mainbar").height(),
                i = $("#sidebar").height() + 550;
            n.attr("style", "visibility:hidden").removeClass("dno");
            var r = 0,
                a = [];
            n.each(function(e, t) {
                var n = $(t).height();
                a.push(n), r += n
            });
            var s = i + r;
            if (o >= s) return t.remove(), n.attr("style", "").show(), void 0;
            var c = [],
                l = i;
            n.each(function(e, t) {
                var n = $(t),
                    i = a[e];
                o >= l + i && (c.push(n), l += i)
            }), n.attr("style", "").addClass("dno"), c.forEach(function(e) {
                return e.show()
            }), t.click(function() {
                return n.show(), t.remove(), !1
            })
        }
    }, StackExchange.mockups = function() {
        function e() {
            StackExchange.externalEditor.init({
                "thingName": "mockup",
                "getIframeUrl": function(e) {
                    var t = "/plugins/mockups/editor";
                    return e && (t += "?edit=" + encodeURIComponent(e)), t
                },
                "buttonTooltip": "UI wireframe",
                "buttonImageUrl": "/content/Shared/Balsamiq/wmd-mockup-button.png",
                "onShow": function(e) {
                    window.addMockupToEditor = e
                },
                "onRemove": function() {
                    window.addMockupToEditor = null
                }
            })
        }
        return {
            "init": e
        }
    }(), StackExchange.schematics = function() {
        function e() {
            if (!window.postMessage) return 0;
            var e = document.createElement("div");
            e.innerHTML = "<svg/>";
            var t = "http://www.w3.org/2000/svg" === (e.firstChild && e.firstChild.namespaceURI);
            if (!t) return 0;
            var n = navigator.userAgent;
            return /Firefox|Chrome/.test(n) ? 3 : /Apple/.test(navigator.vendor) || /Opera/.test(n) ? 2 : 1
        }

        function t() {
            var t;
            StackExchange.externalEditor.init({
                "thingName": "schematic",
                "getIframeUrl": function(e) {
                    var t = "/plugins/schematics/editor";
                    return e && (t += "?edit=" + encodeURIComponent(e)), t
                },
                "buttonTooltip": "Schematic",
                "buttonImageUrl": "/content/Sites/electronics/img/wmd-schematic-button.png?v=1",
                "checkSupport": function() {
                    var t = e();
                    switch (t) {
                        case 3:
                            return !0;
                        case 2:
                            return confirm("Your browser is not officially supported by the schematics editor; however it has been reported to work. Launch the editor?");
                        case 1:
                            return confirm("Your browser is not officially supported by the schematics editor; it may or may not work. Launch the editor anyway?");
                        default:
                        case 0:
                            return alert("Sorry, your browser does not support all the necessary features for the schematics editor."), !1
                    }
                },
                "onShow": function(e) {
                    var n = $("<div class='popup'>").css("z-index", 1111).text("Loading editor").appendTo("body").show().addSpinner({
                        "marginLeft": 5
                    }).center({
                        "dy": -200
                    });
                    $("<div style='text-align:right;margin-top: 10px'>").append($("<button>cancel</button>").click(function() {
                        n.remove(), e()
                    })).appendTo(n), t = function(t) {
                        if (t = t.originalEvent, "https://www.circuitlab.com" === t.origin) {
                            t.data || e();
                            var o = $.parseJSON(t.data);
                            if (o && "success" === o.load) return n.remove(), void 0;
                            if (o && o.edit_url && o.image_url) {
                                o.fkey = StackExchange.options.user.fkey;
                                var i = $("<div class='popup'>").css("z-index", 1111).appendTo("body").show(),
                                    r = function() {
                                        i.text("Storing image").addSpinner({
                                            "marginLeft": 5
                                        }).center(), $.post("/plugins/schematics/save", o).done(function(t) {
                                            i.remove(), e(t.img)
                                        }).fail(function(e) {
                                            if (409 === e.status) {
                                                var t = "Storing aborted";
                                                e.responseText.length < 200 && (t = e.responseText), i.text(t + ", will retry shortly").addSpinner({
                                                    "marginLeft": 5
                                                }).center(), setTimeout(r, 1e4)
                                            } else i.remove(), alert("Failed to upload the schematic image.")
                                        })
                                    };
                                r()
                            }
                        }
                    }, $(window).on("message", t)
                },
                "onRemove": function() {
                    $(window).off("message", t)
                }
            })
        }
        return {
            "init": t
        }
    }(), StackExchange.externalEditor = function() {
        function e(e) {
            if ("function" == typeof e) return e;
            var t = e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
                n = "<!-- Begin " + t + "[^>]*? -->\\s*!\\[[^\\]]*\\]\\((http://[^ )]+)[^)]*\\)\\s*<!-- End " + t + " -->";
            return function(e, t, o, i, r) {
                function a(e, t, n) {
                    for (var o = -1, i = -1;;) {
                        if (i = t.indexOf(e, i + 1), -1 === i) break;
                        (0 > o || Math.abs(i - n) < Math.abs(i - o)) && (o = i)
                    }
                    return o
                }
                return e.replace(new RegExp(n, "g"), function(e, n, s) {
                    var c = {
                        "payload": n.replace(/[^-A-Za-z0-9+&@#\/%?=~_|!:,.;\(\)]/g, ""),
                        "pos": a(e, t, s),
                        "len": e.length
                    };
                    return -1 === c.pos ? e : (r.push(c), e + "\n\n" + o + i + "-" + (r.length - 1) + "%")
                })
            }
        }

        function t(t) {
            function n(e, t) {
                function n(t) {
                    function n() {
                        StackExchange.helpers.closePopups(g.add(i)), d()
                    }
                    var i, r = m || b.caret(),
                        c = b[0].value || "",
                        l = t ? t.pos : r.start,
                        p = t ? t.len : r.end - r.start,
                        f = c.substring(0, l),
                        h = c.substring(l + p);
                    m = null;
                    var g = null,
                        v = function(t, i) {
                            if (!t) return setTimeout(n, 0), b.focus(), void 0;
                            StackExchange.navPrevention.start();
                            var a = void 0 === i ? o(t) : i,
                                s = f.replace(/(?:\r\n|\r|\n){1,2}$/, ""),
                                c = s + a + h.replace(/^(?:\r\n|\r|\n){1,2}/, ""),
                                l = r.start + a.length - f.length + s.length;
                            setTimeout(function() {
                                e.textOperation(function() {
                                    b.val(c).focus().caret(l, l)
                                }), n()
                            }, 0)
                        };
                    if (a) {
                        var y = a(t ? t.payload : null);
                        g = $("<iframe>", {
                            "src": y
                        })
                    } else if (s) {
                        var k = s(t ? t.payload : null);
                        g = $(k)
                    }
                    g.addClass("esc-remove").css({
                        "position": "fixed",
                        "top": "2.5%",
                        "left": "2.5%",
                        "width": "95%",
                        "height": "95%",
                        "background": "white",
                        "z-index": 1001
                    }), $("body").loadPopup({
                        "html": g,
                        "target": $("body"),
                        "lightbox": !0
                    }).done(function() {
                        $(window).resize(), u(v)
                    })
                }
                $('<style type="text/css"> .wmd-' + i + "-button span { background-position: 0 0; } .wmd-" + i + "-button:hover span { background-position: 0 -40px; }</style>)").appendTo("head");
                var h, g, m, v = e.getConverter().hooks,
                    b = $("#wmd-input" + t);
                b.on("keyup", function(e) {
                    var t = e.keyCode || e.charCode;
                    if (8 === t || 46 === t) {
                        var n = b.caret().start;
                        b.caret(n, n)
                    }
                }), v.chain("preConversion", function(e) {
                    var t = (e.match(/%/g) || []).length,
                        n = b.length ? b[0].value || "" : "";
                    return h = new Array(t + 2).join("%"), g = [], r(e, n, h, i, g)
                }), v.chain("postConversion", function(e) {
                    return e.replace(new RegExp(h + i + "-(\\d+)%", "g"), function(e, t) {
                        return "<sup><a href='#' class='edit-" + i + "' data-id='" + t + "'>" + p + "</a></sup>"
                    })
                });
                var y = "The " + i + " editor does not support touch devices.",
                    k = !1;
                $("#wmd-preview" + t).on("touchend", function() {
                    k = !0
                }).on("click", "a.edit-" + i, function(e) {
                    return k ? (alert(y), k = !1, !1) : (k = !1, (!f || f()) && n(g[$(e.target).attr("data-id")]), !1)
                }), $("#wmd-input" + t).keyup(function(e) {
                    e.shiftKey || e.altKey || e.metaKey || !e.ctrlKey || 77 !== e.which || (!f || f()) && n()
                }), setTimeout(function() {
                    var e = $("#wmd-image-button" + t),
                        o = $("<li class='wmd-button wmd-" + i + "-button' id='wmd-" + i + "-button" + t + "' title='" + c + " Ctrl-M'>").insertAfter(e),
                        r = !1;
                    $("<span>").css({
                        "backgroundImage": "url(" + l + ")"
                    }).appendTo(o).on("touchend", function() {
                        r = !0
                    }).click(function() {
                        return r ? (alert(y), r = !1, void 0) : (r = !1, (!f || f()) && n(), void 0)
                    })
                }, 0)
            }

            function o(e) {
                return ('\n\n<!-- Begin {THING}: In order to preserve an editable {THING}, please\n     don\'t edit this section directly.\n     Click the "edit" link below the image in the preview instead. -->\n\n![{THING}](' + e + ")\n\n<!-- End {THING} -->\n\n").replace(/{THING}/g, i)
            }
            var i = t.thingName,
                r = e(t.thingFinder || t.thingName),
                a = t.getIframeUrl,
                s = t.getDivContent,
                c = t.buttonTooltip,
                l = t.buttonImageUrl,
                u = t.onShow,
                d = t.onRemove || function() {},
                p = t.editLabel || "edit the above " + i,
                f = t.checkSupport;
            StackExchange.MarkdownEditor.creationCallbacks.add(n)
        }
        return {
            "init": t
        }
    }(),
    function(e, t) {
        function n(t) {
            return e("<div>").addClass(t)
        }

        function o() {
            var e = "sif" + E;
            return E++, e
        }

        function i() {
            return e("<iframe>").attr({
                "name": o(),
                "sandbox": "allow-forms allow-modals allow-scripts",
                "class": "snippet-box-edit",
                "frameBorder": 0
            })
        }

        function r(t) {
            return e("<pre>").addClass("prettyprint-override lang-" + t + " snippet-code-" + t)
        }

        function a(t) {
            return e("<a>").text(t)
        }

        function s(t, n) {
            return e("<textarea>").attr("name", t).val(n)
        }

        function c(t, n, o) {
            return e("<form>").css("display", "none").attr({
                "action": t,
                "method": n,
                "target": o
            })
        }

        function l(t, n) {
            return e("<input>").attr({
                "type": "text",
                "name": t,
                "value": n
            })
        }

        function u() {
            return e('<button type="button">')
        }

        function d(t) {
            return e("<code>").text(t)
        }

        function p(n, o) {
            o = o || {}, n.each(function() {
                var n = e(this),
                    i = n.data("_snippet");
                if (!i) {
                    var r = o.markdownPluginMode;
                    if (i = r ? f() : h(), r) {
                        var a = function() {
                            i && (i.setUIInnerHtml(S), i.generate(n), i.resize(), e(t).resize(function() {
                                i && i.resize()
                            }), n.data("_snippet", i), o.state && i.load(o.state))
                        };
                        StackExchange.using("snippetsJsCodeMirror", function() {
                            setTimeout(function() {
                                C().then(a)
                            }, 1)
                        })
                    } else i.generate(n), n.data("_snippet", i), o.state && i.load(o.state)
                }
            })
        }

        function f() {
            function n(e) {
                F = e
            }

            function o(n, o, i) {
                function r() {
                    var e = i.getValue(),
                        t = e.match(s);
                    t && t.length > 2 ? n.val(t[1] + ":" + t[2]) : n.val("")
                }
                var a = "function" == typeof o ? o : function(e, t) {
                        return o.replace(/\*version\*/g, e).replace(/\*file\*/g, t)
                    },
                    s = a("##version##", "##file##").replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&").replace("cdnjs\\.cloudflare\\.com", "(?:cdnjs\\.cloudflare\\.com|ajax\\.googleapis\\.com)").replace(/##version##/g, "(.*?)").replace(/##file##/g, "(.*?)");
                n.change(function() {
                    var t = e(this).val().split(":"),
                        n = t.length > 1 ? t[1] : "";
                    t = t[0];
                    var o = i.getValue(),
                        r = !1,
                        c = "" === t ? "" : a(t, n);
                    return o = o.replace(new RegExp(s, "g"), function() {
                        return r = !0, c
                    }), o = o.trim(), r ? (i.setValue(o), void 0) : ("" !== t && (i.setValue(c + "\n" + o), i.save()), void 0)
                });
                var c;
                i.on("change", function() {
                    t.clearTimeout(c), c = t.setTimeout(r, 1e3)
                })
            }

            function i(n) {
                function i(e, n, o) {
                    var i, r = CodeMirror.fromTextArea(e, {
                        "electricChars": !1,
                        "smartIndent": !1,
                        "lineNumbers": !0,
                        "lineWrapping": !0,
                        "mode": n,
                        "tabSize": 2,
                        "indentWithTabs": !1,
                        "readOnly": !1
                    });
                    return r.on("change", function() {
                        w = !0, t.clearTimeout(i), i = t.setTimeout(function() {
                            r.save()
                        }, 500)
                    }), r.beautify = function() {
                        r.setValue(o(r.getValue().trim(), {
                            "indent_size": r.options.tabSize,
                            "indent_char": " ",
                            "unformatted": ["a", "abbr", "area", "audio", "b", "bdi", "bdo", "br", "button", "canvas", "cite", "code", "data", "datalist", "del", "dfn", "em", "embed", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "map", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "s", "samp", "small", "span", "strong", "sub", "sup", "svg", "template", "textarea", "time", "u", "var", "video", "wbr", "text", "acronym", "address", "big", "dt", "ins", "strike", "tt"]
                        }))
                    }, r
                }

                function a(e) {
                    return '<script src="https://cdnjs.cloudflare.com/ajax/libs/' + e + '/*version*/*file*"></script>'
                }
                return m ? m : (m = e(F), e(m).find("#snpte-close-button").click(function(t) {
                    return StackExchange.helpers.closePopups(e(this).closest(".snippet-modal"), "esc"), t.preventDefault(), !1
                }), v = m.find("#snpte-jquery-select"), b = m.find("#snpte-d3-select"), y = m.find("#snpte-knockout-select"), k = m.find("#snpte-angular-select"), $ = m.find("#snpte-vue-select"), S = m.find("#snpte-react-select"), C = m.find("#snpte-react-dom-select"), E = m.find("#snpte-hide-snippet"), j = m.find("#snpte-show-console"), T = m.find("#snpte-use-babel"), m.find("#snpte-button-run").click(function() {
                    r()
                }), m.find("#snpte-button-tidy").click(function() {
                    M.beautify(), D.beautify(), L.beautify()
                }), m.find("#snpte-button-insert").click(function() {
                    StackExchange.helpers.closePopups(e(".snippet-modal"))
                }), m.find("#snpte-button-reset").click(function() {
                    u()
                }), n.empty().append(m), O = m.find("#snpte-box-edit-html"), _ = m.find("#snpte-box-edit-css"), P = m.find("#snpte-box-edit-js"), I = m.find("#snpte-box-edit-result"), A = I.clone(), CodeMirror.commands.insertTab = CodeMirror.commands.insertSoftTab, CodeMirror.keyMap.default["Shift-Tab"] = "indentLess", CodeMirror.commands.indentAuto = function(e) {
                    e.beautify()
                }, M = i(O[0], "htmlmixed", html_beautify), D = i(_[0], "css", css_beautify), L = i(P[0], "javascript", js_beautify), o(v, a("jquery"), M), o(b, a("d3"), M), o(y, a("knockout"), M), o(k, a("angular.js"), M), o($, a("vue"), M), o(S, function(e, t) {
                    var n = (C.find("option[value^='" + e + "']").attr("value") || "").split(":"),
                        o = n[1] || t;
                    return '<script src="https://cdnjs.cloudflare.com/ajax/libs/react/' + e + "/" + t + '"></script>\n<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/' + e + "/" + o + '"></script>'
                }, M), m.find("#snpte-button-extlib").click(function() {
                    function e(e, t) {
                        return e.length < t.length ? !1 : (e = e.toLowerCase(), 0 != e.indexOf("https://") && 0 != e.indexOf("http://") && 0 != e.indexOf("//") ? !1 : e.substr(e.length - t.length, t.length).toLowerCase() == t.toLowerCase() ? !0 : !1)
                    }
                    var t = prompt("Please enter the URL of an external JS or CSS file");
                    if (null != t && "" != t && "" != t.trim()) {
                        var n = M.getValue();
                        if (e(t, ".css")) {
                            var o = '<link href="' + t + '" rel="stylesheet"/>';
                            M.setValue(o + "\n" + n)
                        } else if (e(t, ".js")) {
                            var o = '<script src="' + t + '"></script>';
                            M.setValue(o + "\n" + n)
                        } else alert("Sorry, but that resource is invalid. Resources must begin with http:// or https:// and allowed extensions are: .css, .js")
                    }
                }), e.each([M, D, L], function(t, n) {
                    n.on("focus", function() {
                        e(n.getInputField()).parent().parent().parent().children(".-name").hide()
                    }), n.on("blur", function() {
                        e(n.getInputField()).parent().parent().parent().children(".-name").show()
                    })
                }), void 0)
            }

            function r() {
                d(), p()
            }

            function a(e) {
                var t = e.html,
                    n = e.css,
                    o = e.js,
                    i = e.console,
                    r = e.hide,
                    a = e.babel;
                null != t && (g.html = t, O.val(t)), null != n && (g.css = n, _.val(n)), null != o && (g.js = o, P.val(o)), null != i && (g.console = i, i === !1 && j.prop("checked", i)), r && (g.hide = r, E.prop("checked", !0)), a && (g.babel = a, T.prop("checked", !0)), M.setValue(t), D.setValue(n), L.setValue(o), w = !1
            }

            function u() {
                O.val(""), _.val(""), P.val(""), v.val(""), b.val(""), y.val(""), k.val(""), $.val(""), S.val(""), j.prop("checked", !0), E.prop("checked", !1), T.prop("checked", !1);
                var e = "";
                x && (e = "//" + x), f();
                var t = e + "/js",
                    n = c(t, "GET", I.attr("name")).appendTo("body");
                n.submit(), M.setValue(""), D.setValue(""), L.setValue("")
            }

            function d() {
                return g.html = O.val(), g.css = _.val(), g.js = P.val(), g.console = j.prop("checked"), g.hide = E.prop("checked"), g.babel = T.prop("checked"), g
            }

            function p() {
                var e = g.css,
                    t = g.js,
                    n = g.html,
                    o = g.console,
                    i = g.babel;
                if ("" != e || "" != t || "" != n) {
                    var r = "";
                    x && (r = "//" + x), f();
                    var a = r + "/js",
                        u = c(a, "POST", I.attr("name"));
                    s("js", t).appendTo(u), s("css", e).appendTo(u), s("html", n).appendTo(u), l("console", "" + (o === !0)).appendTo(u), l("babel", "" + (i === !0)).appendTo(u), u.appendTo("body"), u.submit().remove()
                }
            }

            function f() {
                if (!A) throw "No template available for result destination";
                if (!I) throw "Cannot insert new result destination";
                var e = A.clone();
                I.replaceWith(e), I = e
            }

            function h() {
                var e = w;
                M.refresh(), D.refresh(), L.refresh(), w = e
            }
            var g = {
                    "html": null,
                    "css": null,
                    "js": null,
                    "console": !0,
                    "hide": !1,
                    "babel": null
                },
                m = null,
                v = null,
                b = null,
                y = null,
                k = null,
                $ = null,
                S = null,
                C = null,
                E = !1,
                j = !0,
                T = null,
                O = null,
                _ = null,
                P = null,
                A = null,
                I = null,
                M = null,
                D = null,
                L = null,
                F = null;
            return {
                "setUIInnerHtml": n,
                "resize": h,
                "writeResult": p,
                "save": d,
                "clear": u,
                "load": a,
                "run": r,
                "generate": i,
                "registerExternalLibChange": o
            }
        }

        function h() {
            function o(o) {
                var s = null;
                if (v) return v;
                k = null, y = i(), v = !0;
                var c = u().append(e('<span class="icon-play-white _hover">'), e("<span>").text(" Run code snippet")).click(function() {
                        r(), s.hide()
                    }),
                    l = u().addClass("hideResults btn-clear").text("Hide results").click(function() {
                        d(), s.show()
                    });
                l.hide(), StackExchange.options.isMobile || (s = n("popout-code").append(a("Expand snippet").addClass("snippet-expand-link")).click(function() {
                    var n = k;
                    if (n) {
                        var o = n.element;
                        o.removeClass("expanded-snippet"), o.find(".snippet-expand-link").text("Expand snippet"), o.find(".snippet-show-link, .snippet-show-link-chevron").show();
                        var i = n.parent,
                            r = i.children();
                        r.length ? e(r[n.indexWithinParent]).before(o) : e(i).append(o), k = null, e(".topbar, .container, .top-bar, #footer").show(), p.show(), e(t).scrollTop($)
                    } else {
                        $ = e(t).scrollTop();
                        var o = e(this).closest(".snippet");
                        k = {
                            "element": o,
                            "indexWithinParent": o.index(),
                            "parent": o.parent()
                        }, o.addClass("expanded-snippet"), o.find(".snippet-expand-link").text("Return to post"), o.find(".snippet-show-link, .snippet-show-link-chevron").hide(), e(".topbar, .container, .top-bar, #footer").hide(), e("body").append(o), p.hide()
                    }
                }));
                var p = e('<input class="copySnippet btn-secondary" type="button">').click(function() {
                    var t = e("#show-editor-button"),
                        n = e("#post-editor").find("textarea.wmd-input");
                    if (t.is(":visible")) {
                        var o = t.offset().top;
                        e("html").animate({
                            "scrollTop": o - 60
                        }), e("body").animate({
                            "scrollTop": o - 60
                        }, {
                            "complete": function() {
                                t.children("input").click()
                            }
                        })
                    } else {
                        var i = n.offset().top;
                        e("html, body").animate({
                            "scrollTop": i - 60
                        })
                    }
                    var r = m(g);
                    n.val(n.val() + "\n\n" + r), StackExchange.MarkdownEditor.refreshAllPreviews()
                });
                p.val("Copy snippet to answer");
                var f = n("snippet-ctas").append(c, p, l);
                StackExchange.options.isMobile || f.append(s), b = n("snippet-result-code").append(y).hide();
                var h = n("snippet-result").append(f, b);
                return o.append(h), v
            }

            function r() {
                y && y.remove(), y = i(), b.append(y), y.parent().is(":hidden") && (y.closest(".snippet-result").find(".hideResults").css("display", ""), y.parent().slideDown(200, function() {
                    if (!k) {
                        var t = n("popout").append(a("Full page")),
                            o = n("popin").append(a("Close")).hide();
                        t.click(function() {
                            y.data("_style", y.attr("style")), y.css({
                                "position": "fixed",
                                "top": 0,
                                "left": 0,
                                "width": "100%",
                                "height": "100%",
                                "background-color": "#FFFFFF",
                                "z-index": 9e3
                            }), y.parent().css("position", ""), e(this).hide(), o.show(), e("body").css("overflow", "hidden")
                        }), o.click(function() {
                            y.removeAttr("style"), y.attr("style", y.data("_style")), y.parent().css("position", "relative"), e(this).hide(), t.show(), e("body").css("overflow", "")
                        }), e(this).append(t, o)
                    }
                })), f()
            }

            function d() {
                var t = y.parent();
                t.is(":visible") && (y.closest(".snippet-result").find(".hideResults").hide(), t.children(".popout, .popin").remove(), t.slideUp(200, function() {
                    e(this).hide(), y.remove(), y = null
                }))
            }

            function p(e) {
                var t = e.css,
                    n = e.js,
                    o = e.html,
                    i = e.console,
                    r = e.hide,
                    a = e.babel;
                null != t && (g.css = t), null != n && (g.js = n), null != o && (g.html = o), i && (g.console = i), r && (g.hide = r), a && (g.babel = a)
            }

            function f() {
                var e = g.css,
                    t = g.js,
                    n = g.html,
                    o = g.console,
                    i = g.babel;
                if ("" != e || "" != t || "" != n) {
                    var r = "";
                    x && (r = "//" + x);
                    var a = r + "/js",
                        u = c(a, "POST", y.attr("name")).append(s("js", t), s("css", e), s("html", n), l("console", "" + (o === !0)), l("babel", "" + (i === !0)));
                    u.appendTo("body").submit().remove()
                }
            }

            function h() {}
            var g = {
                    "html": null,
                    "css": null,
                    "js": null,
                    "console": !1,
                    "hide": !1,
                    "babel": null
                },
                v = null,
                b = null,
                y = null,
                k = null;
            return {
                "resize": h,
                "writeResult": f,
                "load": p,
                "hide": d,
                "run": r,
                "generate": o
            }
        }

        function g(e, t, n) {
            return e.replace(/^(?=.)/gm, new Array(t * n + 1).join(" "))
        }

        function m(e) {
            var t = "\n\n<!-- begin snippet: js hide: " + e.hide + " console: " + e.console + " babel: " + e.babel + " -->\n\n",
                n = e.js,
                o = e.css,
                i = e.html;
            return "" != n && (t += "<!-- language: lang-js -->\n\n" + g(n, 1, 4) + "\n\n"), "" != o && (t += "<!-- language: lang-css -->\n\n" + g(o, 1, 4) + "\n\n"), "" != i && (t += "<!-- language: lang-html -->\n\n" + g(i, 1, 4) + "\n\n"), t += "<!-- end snippet -->\n\n"
        }

        function v(e, t, n, o) {
            var i = /<!--\s+language:\s*lang-js\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi,
                r = /<!--\s+language:\s*lang-css\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi,
                a = /<!--\s+language:\s*lang-html\s+-->([\s\S]*?)(?:<!--\s+language:|$)/gi;
            try {
                var s = i.exec(e),
                    c = r.exec(e),
                    l = a.exec(e),
                    u = "",
                    d = "",
                    p = "";
                if (s && (u = s[1].trim().replace(/^    /gm, "")), c && (d = c[1].trim().replace(/^    /gm, "")), l && (p = l[1].trim().replace(/^    /gm, "")), "" == u && "" == d && "" == p) return null;
                var f = {
                    "js": u,
                    "css": d,
                    "html": p,
                    "console": n,
                    "hide": t,
                    "babel": o
                };
                return f
            } catch (h) {
                return null
            }
        }

        function b(e) {
            var t = StackExchange.snippets.renderer;
            if (!t) return e;
            var n = t,
                o = "sandbox" in document.createElement("iframe");
            if (!o) return e;
            var i = /<!--\s+begin snippet:\s*[a-z]+\s*(?:hide:\s*([a-zA-Z]+))?\s*(?:console:\s*([a-zA-Z]+))?\s*(?:babel:\s*([a-zA-Z]+))?\s+-->([\s\S]*?)<!--\s+end snippet\s+-->/gi;
            return e = e.replace(i, function(e, t, o, i, r) {
                return n(r, t, o, i)
            })
        }

        function y() {
            StackExchange.snippets.renderer && StackExchange.snippets.redraw || (StackExchange.snippets.redraw = function() {
                e("div.snippet").each(function() {
                    var t = e(this);
                    return t.closest(".downvoted-answer").length > 0 ? !0 : (k(t), void 0)
                })
            }, StackExchange.snippets.renderer = function(e, t, i, a) {
                t = t === !0 || "true" === (t || "").toLowerCase(), i = i === !0 || "true" === (i || "").toLowerCase(), a = a === !0 || "true" === (a || "").toLowerCase();
                var s = v(e, t, i, a);
                if (!s) return e;
                var c = n("snippet").data({
                        "lang": "js",
                        "hide": t,
                        "console": i
                    }),
                    l = n("snippet-code");
                t && l.addClass("snippet-currently-hidden"), c.append(l);
                var u = s.js,
                    f = s.css,
                    h = s.html;
                u && l.append(r("js").append(d(u))), f && l.append(r("css").append(d(f))), h && l.append(r("html").append(d(h)));
                var g = o();
                return p(l, {
                    "state": s
                }), j[g] = c, "<pre>" + g + "</pre>"
            }, StackExchange.snippets.redraw())
        }

        function k(t) {
            var o = t.find(".snippet-code");
            0 == o.length && (o = t);
            var i = o.find("pre.snippet-code-js").text(),
                r = o.find("pre.snippet-code-css").text(),
                a = o.find("pre.snippet-code-html").text(),
                s = {
                    "js": i,
                    "css": r,
                    "html": a,
                    "console": t.data("console") === !0,
                    "hide": t.data("hide") === !0,
                    "babel": t.data("babel") === !0
                };
            if (p(o, {
                    "state": s
                }), (StackExchange.options.user.isAnonymous || 0 == t.parent().length || 0 == e("textarea#wmd-input").length || e(".popup-suggested-edit").length) && t.find(".copySnippet").hide(), t.data("hide") === !0) {
                o.hide(), o.addClass("snippet-currently-hidden"), t.find(".snippet-display").remove();
                var c = n("snippet-display").attr("style", "vertical-align: center").append(e("<p>").append(e('<a class="snippet-show-link-chevron"><span class="expander-arrow-hide" style="vertical-align: middle;"></span><a class="snippet-show-link"><span class="show-hide" data-ishidden="true" style="vertical-align: middle"></span></a>')));
                c.find("span.show-hide").text("Show code snippet"), c.click(function() {
                    o.toggle();
                    var t = e(this),
                        n = t.find(".show-hide");
                    n.data("ishidden") === !0 ? (n.text("Hide code snippet"), t.find(".expander-arrow-hide").removeClass("expander-arrow-hide").addClass("expander-arrow-show"), n.data("ishidden", !1)) : (n.text("Show code snippet"), t.find(".expander-arrow-show").removeClass("expander-arrow-show").addClass("expander-arrow-hide"), n.data("ishidden", !0))
                }), t.prepend(c)
            } else o.show().removeClass("snippet-currently-hidden"), t.find(".snippet-display").remove()
        }
        if (StackExchange.settings && StackExchange.settings.snippets) {
            var $, w = !1,
                x = StackExchange.settings.snippets.renderDomain,
                S = null,
                C = function() {
                    return S ? e.when() : e.ajax("/snippets/editor-ui", {
                        "success": function(e) {
                            S = e
                        }
                    })
                },
                E = 1,
                j = {};
            StackExchange.snippets = function() {
                function t(e, t, n, o, i) {
                    function r(e, t, n) {
                        for (var o = -1, i = -1;;) {
                            if (i = t.indexOf(e, i + 1), -1 == i) break;
                            (0 > o || Math.abs(i - n) < Math.abs(i - o)) && (o = i)
                        }
                        return o
                    }
                    return e.replace(/<!--\s+begin snippet:\s*[a-z]+\s*(?:hide:\s*([a-zA-Z]+))?\s*(?:console:\s*([a-zA-Z]+))?\s*(?:babel:\s*([a-zA-Z]+))?\s+-->([\s\S]*?)<!--\s+end snippet\s+-->/gi, function(e, a, s, c, l, u) {
                        var d = {
                            "payload": {
                                "code": l,
                                "hide": "true" === (a || "").toLowerCase(),
                                "console": "true" === (s || "").toLowerCase(),
                                "babel": "true" === (c || "").toLowerCase()
                            },
                            "pos": r(e, t, u),
                            "len": e.length
                        };
                        return -1 === d.pos ? e : (i.push(d), e + "\n\n" + n + o + "-" + (i.length - 1) + "%")
                    })
                }

                function o() {
                    y();
                    var o = StackExchange.MarkdownEditor && StackExchange.externalEditor;
                    o && i && (i = !1, StackExchange.externalEditor.init({
                        "thingName": "snippet",
                        "thingFinder": t,
                        "editLabel": "edit the above snippet",
                        "getDivContent": function(e) {
                            var t = e ? v(e.code, e.hide, e.console, e.babel) : null,
                                o = n("modal auto-center snippet-modal");
                            return p(o, {
                                "markdownPluginMode": !0,
                                "state": t
                            }), o
                        },
                        "buttonTooltip": "JavaScript/HTML/CSS snippet",
                        "buttonImageUrl": "/content/Shared/balsamiq/wmd-mockup-button.png",
                        "onShow": function(t) {
                            var n = e(".snippet-modal"),
                                o = function(e) {
                                    var o = n.data("_snippet").save();
                                    if (e || "" == o.html && "" == o.css && "" == o.js) t(null);
                                    else {
                                        var i = m(o);
                                        t(i, i)
                                    }
                                };
                            n.on("popupClosing", function(e) {
                                var t = "esc" == e.closeTrigger;
                                if (!t || w) return t && !confirm("Are you sure you want to abandon any changes?") ? (e.preventDefault(), void 0) : (o(t), void 0)
                            })
                        }
                    })), StackExchange.MarkdownEditor && StackExchange.MarkdownEditor.creationCallbacks.add(function(t, n) {
                        var o = t.getConverter().hooks;
                        o.chain("preConversion", b);
                        var i = e("#wmd-preview" + n);
                        i.on("wmdrefresh", function() {
                            i.find("pre").each(function() {
                                var t = e(this),
                                    n = t.text();
                                if (j[n]) {
                                    var o = j[n];
                                    delete j[n], k(o), t.replaceWith(e("<p>").append(o))
                                }
                            })
                        })
                    })
                }
                var i = !0;
                return {
                    "init": o,
                    "initSnippetRenderer": y,
                    "makeSnippets": b
                }
            }()
        }
    }(jQuery, window), $(document).on("click", ".js-feed-link", function(e) {
        var t = $(this),
            n = t.siblings(".js-feed-link-modal").clone();
        n.length > 0 && (e.preventDefault(), StackExchange.helpers.showModal(n, {
            "returnElements": t,
            "shown": function() {
                n.find(".s-input").focus().select()
            }
        }))
    }), StackExchange.ga = function() {
        function e(e) {
            try {
                if (!StackExchange.options.enableLogging) return;
                console.log("StackExchange.ga: " + e)
            } catch (t) {}
        }
        var t, n = 0,
            o = null,
            i = {},
            r = function(e) {
                e.find("[data-ga]").each(function() {
                    var e = $(this),
                        t = e.is("form"),
                        n = t ? "submit" : "click";
                    e.on(n, function() {
                        var n = g(e);
                        null !== n && (d(e, n), t && f(e, n))
                    })
                }), e.find("[data-ga-action]").each(function() {
                    var e = $(this);
                    e.on("change", function() {
                        return h(e)
                    })
                })
            },
            a = function(e, n, o) {
                if (t)
                    for (var i = 0; i < t.trackingCodes.length; i++) {
                        var r = v(i, "set");
                        e && t.tracker(r, "campaignMedium", e), n && t.tracker(r, "campaignName", n), o && t.tracker(r, "campaignSource", o)
                    }
            },
            s = function(e, n) {
                if (t)
                    for (var o = 0; o < t.trackingCodes.length; o++) t.tracker(v(o, "set"), e, n)
            },
            c = function(e) {
                if (t)
                    for (var n = 0; n < t.trackingCodes.length; n++) t.tracker(v(n, "set"), "page", e)
            },
            l = function(e) {
                if (t)
                    for (var n = 0; n < t.trackingCodes.length; n++) t.tracker(v(n, "set"), "title", e)
            },
            u = function(n, o, i, r) {
                if (e("track: category: '" + n + "', action: '" + o + "', label: '" + i + "'"), t && null != n && null != o)
                    for (var a = 0; a < t.trackingCodes.length; a++) t.sendTitles || t.tracker(v(a, "set"), "title", "Channel Page"), t.tracker(v(a, "send"), "event", n, o, i, void 0, r)
            },
            d = function(e, n) {
                t && (void 0 === n && (n = g(e)), null !== n && u(n.category, n.action, n.label, n.fields))
            },
            p = function() {
                if (t)
                    for (var e = 0; e < t.trackingCodes.length; e++) t.sendTitles || t.tracker(v(e, "set"), "title", "Channel Page"), t.tracker(v(e, "send"), "pageview")
            },
            f = function(e, n) {
                if (t && (void 0 === n && (n = g(e)), null !== n)) {
                    var o = e.attr("id"),
                        r = i[o];
                    if (void 0 !== r) {
                        for (var a in r) {
                            var s = n.inputActionPrefix + " | " + a,
                                c = r[a];
                            u(n.category, s, c, {
                                "nonInteraction": !1
                            })
                        }
                        i[o] = {}
                    }
                }
            },
            h = function(e) {
                if (t) {
                    var o;
                    o = e.is(":checkbox") ? e.is(":checked") : e.is("select") ? e.find(":selected").toArray().map(function(e) {
                        return $(e).data("ga-value") || $(e).val()
                    }).join(" ") : e.data("ga-value") || e.val();
                    var r = e.closest("form");
                    if (0 !== r.length && null !== o) {
                        var a = r.attr("id");
                        void 0 === a && (a = "ga-form-" + n++, r.attr("id", a));
                        var s = i[a];
                        void 0 === s && (s = i[a] = {});
                        var c = e.attr("data-ga-action"),
                            l = "false" === e.attr("data-ga-is-pii") ? !1 : !0,
                            u = l ? "PII Omitted" : o;
                        s[c] = u
                    }
                }
            },
            g = function(e) {
                var t = e.data("ga");
                return void 0 === t ? null : {
                    "category": t[0],
                    "action": t[1],
                    "label": t[2],
                    "inputActionPrefix": t[3],
                    "fields": t[4]
                }
            },
            m = function(e) {
                return "tracker_" + e
            },
            v = function(e, t) {
                if (0 == e) return t;
                var n = m(e);
                return n + "." + t
            },
            b = function() {
                return t ? o : void 0
            };
        return {
            "init": function(e) {
                if (e && e.tracker && e.trackingCodes && 0 !== e.trackingCodes.length) {
                    t = e;
                    var n = {},
                        i = "auto";
                    window.location.host.indexOf("stackexchange.com") >= 0 && (i = "stackexchange.com"), StackExchange.options.user.accountId && (n.userId = StackExchange.options.user.accountId.toString()), t.tracker("create", e.trackingCodes[0], i, n), t.tracker("set", "transport", "beacon");
                    for (var a = 1; a < e.trackingCodes.length; a++) t.tracker("create", e.trackingCodes[a], i, m(a), n);
                    r($(document)), t.tracker(function(e) {
                        e && (o = e.get("clientId")), StackExchange.gaInitialized.resolve()
                    })
                }
            },
            "bindHandlers": r,
            "setCampaign": a,
            "setDimension": s,
            "setTitle": l,
            "setUrl": c,
            "track": u,
            "trackElement": d,
            "trackFormInputs": f,
            "trackPageView": p,
            "recordInputChange": h,
            "getClientId": b
        }
    }();
var Svg = function() {
    function e() {}
    return e.GetImage = function() {
        return e._placeholder || (e._placeholder = function() {
            throw "Svg icon getters must be initialized before an icon can be retrieved"
        }, e._placeholder.With = e._placeholder), e._placeholder
    }, e.init = function(t, n) {
        function o(t) {
            var n = function() {
                return e.get(t)
            };
            return n.With = function(n) {
                var o = e.get(t);
                return o.addClass(n), o
            }, n
        }
        "/" !== t[t.length - 1] && (t += "/"), e.rootPath = t, e.cacheBreaker = n;
        var i = [];
        for (var r in e) e.hasOwnProperty(r) && e[r] === e._placeholder && i.push(r);
        for (var a = 0; a < i.length; a++) e[i[a]] = o(i[a])
    }, e.ensureCSS = function() {
        if (!e.cssAdded) {
            var t = document.createElement("style");
            t.setAttribute("type", "text/css"), t.textContent = ".svg-skeleton-element-during-loading { display: none !important; }", document.head && (document.head.appendChild(t), e.cssAdded = !0)
        }
    }, e.get = function(t) {
        e.ensureCSS();
        var n, o = e.cache[t];
        if ("string" == typeof o) {
            var i = document.createElement("div");
            i.innerHTML = o;
            var r = i.children[0];
            return i.removeChild(r), $(r)
        }
        o && o.done ? n = o : (n = $.ajax({
            "url": e.rootPath + t + ".svg",
            "data": {
                "v": e.cacheBreaker
            },
            "cache": !0,
            "dataType": "text"
        }), e.cache[t] = n);
        var a = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            s = $(a);
        return s.addClass("svg-skeleton-element-during-loading"), n.done(function(n) {
            n = n || "", e.cache[t] = n;
            for (var o = $("<div>" + n + "</div>"), i = o.children()[0]; i.attributes.length;) {
                var r = i.attributes[0];
                if (i.removeAttributeNode(r), "class" === r.name) s.addClass(r.value);
                else {
                    var c = r.namespaceURI ? a.hasAttributeNS(r.namespaceURI, r.name) : a.hasAttribute(r.name);
                    c || a.setAttributeNodeNS(r)
                }
            }
            for (; i.childNodes.length;) {
                var l = i.childNodes[0];
                i.removeChild(l), a.appendChild(l)
            }
            s.removeClass("svg-skeleton-element-during-loading")
        }), s
    }, e.Alert = e.GetImage(), e.AlertCircle = e.GetImage(), e.AlertSm = e.GetImage(), e.AchievementsSm = e.GetImage(), e.Checkmark = e.GetImage(), e.ClearSm = e.GetImage(), e.ShareSm = e.GetImage(), e.TrendingUp = e.GetImage(), e.TrendingDown = e.GetImage(), e.TrendingNone = e.GetImage(), e.UndoSm = e.GetImage(), e.Facebook = e.GetImage(), e.Twitter = e.GetImage(), e.DevTo = e.GetImage(), e.cache = Object.create(null), e.cssAdded = !1, e
}();
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.Stimulus = {})
}(this, function(e) {
    function t(e) {
        if ("immediatePropagationStopped" in e) return e;
        var t = e.stopImmediatePropagation;
        return Object.assign(e, {
            "immediatePropagationStopped": !1,
            "stopImmediatePropagation": function() {
                this.immediatePropagationStopped = !0, t.call(this)
            }
        })
    }

    function n(e) {
        var t = e.trim(),
            n = t.match(j) || [];
        return {
            "eventTarget": o(n[4]),
            "eventName": n[2],
            "identifier": n[5],
            "methodName": n[7]
        }
    }

    function o(e) {
        return "window" == e ? window : "document" == e ? document : void 0
    }

    function i(e) {
        return e == window ? "window" : e == document ? "document" : void 0
    }

    function r(e) {
        var t = e.tagName.toLowerCase();
        return t in O ? O[t](e) : void 0
    }

    function a(e) {
        throw new Error(e)
    }

    function s(e, t, n) {
        l(e, t).add(n)
    }

    function c(e, t, n) {
        l(e, t).delete(n), u(e, t)
    }

    function l(e, t) {
        var n = e.get(t);
        return n || (n = new Set, e.set(t, n)), n
    }

    function u(e, t) {
        var n = e.get(t);
        null != n && 0 == n.size && e.delete(t)
    }

    function d(e, t, n) {
        return e.trim().split(/\s+/).filter(function(e) {
            return e.length
        }).map(function(e, o) {
            return {
                "element": t,
                "attributeName": n,
                "content": e,
                "index": o
            }
        })
    }

    function p(e, t) {
        var n = Math.max(e.length, t.length);
        return Array.from({
            "length": n
        }, function(n, o) {
            return [e[o], t[o]]
        })
    }

    function f(e, t) {
        return e && t && e.index == t.index && e.content == t.content
    }

    function h(e) {
        return {
            "identifier": e.identifier,
            "controllerConstructor": g(e.controllerConstructor)
        }
    }

    function g(e) {
        var t = B(e);
        return t.bless(), t
    }

    function m(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        })
    }

    function v(e, t) {
        return "[" + e + '~="' + t + '"]'
    }

    function b() {
        return new Promise(function(e) {
            "loading" == document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
        })
    }

    function y(e) {
        var t = e.prototype,
            n = k(e);
        n.forEach(function(e) {
            var n;
            return x(t, (n = {}, n[e + "Target"] = {
                "get": function() {
                    var t = this.targets.find(e);
                    if (t) return t;
                    throw new Error('Missing target element "' + this.identifier + "." + e + '"')
                }
            }, n[e + "Targets"] = {
                "get": function() {
                    return this.targets.findAll(e)
                }
            }, n["has" + S(e) + "Target"] = {
                "get": function() {
                    return this.targets.has(e)
                }
            }, n))
        })
    }

    function k(e) {
        var t = $(e);
        return Array.from(t.reduce(function(e, t) {
            return w(t).forEach(function(t) {
                return e.add(t)
            }), e
        }, new Set))
    }

    function $(e) {
        for (var t = []; e;) t.push(e), e = Object.getPrototypeOf(e);
        return t
    }

    function w(e) {
        var t = e.targets;
        return Array.isArray(t) ? t : []
    }

    function x(e, t) {
        Object.keys(t).forEach(function(n) {
            if (!(n in e)) {
                var o = t[n];
                Object.defineProperty(e, n, o)
            }
        })
    }

    function S(e) {
        return e.charAt(0).toUpperCase() + e.slice(1)
    }
    var C = function() {
            function e(e, t) {
                this.eventTarget = e, this.eventName = t, this.unorderedBindings = new Set
            }
            return e.prototype.connect = function() {
                this.eventTarget.addEventListener(this.eventName, this, !1)
            }, e.prototype.disconnect = function() {
                this.eventTarget.removeEventListener(this.eventName, this, !1)
            }, e.prototype.bindingConnected = function(e) {
                this.unorderedBindings.add(e)
            }, e.prototype.bindingDisconnected = function(e) {
                this.unorderedBindings.delete(e)
            }, e.prototype.handleEvent = function(e) {
                for (var n = t(e), o = 0, i = this.bindings; o < i.length; o++) {
                    var r = i[o];
                    if (n.immediatePropagationStopped) break;
                    r.handleEvent(n)
                }
            }, Object.defineProperty(e.prototype, "bindings", {
                "get": function() {
                    return Array.from(this.unorderedBindings).sort(function(e, t) {
                        var n = e.index,
                            o = t.index;
                        return o > n ? -1 : n > o ? 1 : 0
                    })
                },
                "enumerable": !0,
                "configurable": !0
            }), e
        }(),
        E = function() {
            function e(e) {
                this.application = e, this.eventListenerMaps = new Map, this.started = !1
            }
            return e.prototype.start = function() {
                this.started || (this.started = !0, this.eventListeners.forEach(function(e) {
                    return e.connect()
                }))
            }, e.prototype.stop = function() {
                this.started && (this.started = !1, this.eventListeners.forEach(function(e) {
                    return e.disconnect()
                }))
            }, Object.defineProperty(e.prototype, "eventListeners", {
                "get": function() {
                    return Array.from(this.eventListenerMaps.values()).reduce(function(e, t) {
                        return e.concat(Array.from(t.values()))
                    }, [])
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.bindingConnected = function(e) {
                this.fetchEventListenerForBinding(e).bindingConnected(e)
            }, e.prototype.bindingDisconnected = function(e) {
                this.fetchEventListenerForBinding(e).bindingDisconnected(e)
            }, e.prototype.handleError = function(e, t, n) {
                void 0 === n && (n = {}), this.application.handleError(e, "Error " + t, n)
            }, e.prototype.fetchEventListenerForBinding = function(e) {
                var t = e.eventTarget,
                    n = e.eventName;
                return this.fetchEventListener(t, n)
            }, e.prototype.fetchEventListener = function(e, t) {
                var n = this.fetchEventListenerMapForEventTarget(e),
                    o = n.get(t);
                return o || (o = this.createEventListener(e, t), n.set(t, o)), o
            }, e.prototype.createEventListener = function(e, t) {
                var n = new C(e, t);
                return this.started && n.connect(), n
            }, e.prototype.fetchEventListenerMapForEventTarget = function(e) {
                var t = this.eventListenerMaps.get(e);
                return t || (t = new Map, this.eventListenerMaps.set(e, t)), t
            }, e
        }(),
        j = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/,
        T = function() {
            function e(e, t, n) {
                this.element = e, this.index = t, this.eventTarget = n.eventTarget || e, this.eventName = n.eventName || r(e) || a("missing event name"), this.identifier = n.identifier || a("missing identifier"), this.methodName = n.methodName || a("missing method name")
            }
            return e.forToken = function(e) {
                return new this(e.element, e.index, n(e.content))
            }, e.prototype.toString = function() {
                var e = this.eventTargetName ? "@" + this.eventTargetName : "";
                return "" + this.eventName + e + "->" + this.identifier + "#" + this.methodName
            }, Object.defineProperty(e.prototype, "eventTargetName", {
                "get": function() {
                    return i(this.eventTarget)
                },
                "enumerable": !0,
                "configurable": !0
            }), e
        }(),
        O = {
            "a": function() {
                return "click"
            },
            "button": function() {
                return "click"
            },
            "form": function() {
                return "submit"
            },
            "input": function(e) {
                return "submit" == e.getAttribute("type") ? "click" : "change"
            },
            "select": function() {
                return "change"
            },
            "textarea": function() {
                return "change"
            }
        },
        _ = function() {
            function e(e, t) {
                this.context = e, this.action = t
            }
            return Object.defineProperty(e.prototype, "index", {
                "get": function() {
                    return this.action.index
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "eventTarget", {
                "get": function() {
                    return this.action.eventTarget
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "identifier", {
                "get": function() {
                    return this.context.identifier
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.handleEvent = function(e) {
                this.willBeInvokedByEvent(e) && this.invokeWithEvent(e)
            }, Object.defineProperty(e.prototype, "eventName", {
                "get": function() {
                    return this.action.eventName
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "method", {
                "get": function() {
                    var e = this.controller[this.methodName];
                    if ("function" == typeof e) return e;
                    throw new Error('Action "' + this.action + '" references undefined method "' + this.methodName + '"')
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.invokeWithEvent = function(e) {
                try {
                    this.method.call(this.controller, e)
                } catch (t) {
                    var n = this,
                        o = n.identifier,
                        i = n.controller,
                        r = n.element,
                        a = n.index,
                        s = {
                            "identifier": o,
                            "controller": i,
                            "element": r,
                            "index": a,
                            "event": e
                        };
                    this.context.handleError(t, 'invoking action "' + this.action + '"', s)
                }
            }, e.prototype.willBeInvokedByEvent = function(e) {
                var t = e.target;
                return this.element === t ? !0 : t instanceof Element && this.element.contains(t) ? this.scope.containsElement(t) : !0
            }, Object.defineProperty(e.prototype, "controller", {
                "get": function() {
                    return this.context.controller
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "methodName", {
                "get": function() {
                    return this.action.methodName
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "element", {
                "get": function() {
                    return this.scope.element
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "scope", {
                "get": function() {
                    return this.context.scope
                },
                "enumerable": !0,
                "configurable": !0
            }), e
        }(),
        P = function() {
            function e(e, t) {
                var n = this;
                this.element = e, this.started = !1, this.delegate = t, this.elements = new Set, this.mutationObserver = new MutationObserver(function(e) {
                    return n.processMutations(e)
                })
            }
            return e.prototype.start = function() {
                this.started || (this.started = !0, this.mutationObserver.observe(this.element, {
                    "attributes": !0,
                    "childList": !0,
                    "subtree": !0
                }), this.refresh())
            }, e.prototype.stop = function() {
                this.started && (this.mutationObserver.takeRecords(), this.mutationObserver.disconnect(), this.started = !1)
            }, e.prototype.refresh = function() {
                if (this.started) {
                    for (var e = new Set(this.matchElementsInTree()), t = 0, n = Array.from(this.elements); t < n.length; t++) {
                        var o = n[t];
                        e.has(o) || this.removeElement(o)
                    }
                    for (var i = 0, r = Array.from(e); i < r.length; i++) {
                        var o = r[i];
                        this.addElement(o)
                    }
                }
            }, e.prototype.processMutations = function(e) {
                if (this.started)
                    for (var t = 0, n = e; t < n.length; t++) {
                        var o = n[t];
                        this.processMutation(o)
                    }
            }, e.prototype.processMutation = function(e) {
                "attributes" == e.type ? this.processAttributeChange(e.target, e.attributeName) : "childList" == e.type && (this.processRemovedNodes(e.removedNodes), this.processAddedNodes(e.addedNodes))
            }, e.prototype.processAttributeChange = function(e, t) {
                var n = e;
                this.elements.has(n) ? this.delegate.elementAttributeChanged && this.matchElement(n) ? this.delegate.elementAttributeChanged(n, t) : this.removeElement(n) : this.matchElement(n) && this.addElement(n)
            }, e.prototype.processRemovedNodes = function(e) {
                for (var t = 0, n = Array.from(e); t < n.length; t++) {
                    var o = n[t],
                        i = this.elementFromNode(o);
                    i && this.processTree(i, this.removeElement)
                }
            }, e.prototype.processAddedNodes = function(e) {
                for (var t = 0, n = Array.from(e); t < n.length; t++) {
                    var o = n[t],
                        i = this.elementFromNode(o);
                    i && this.elementIsActive(i) && this.processTree(i, this.addElement)
                }
            }, e.prototype.matchElement = function(e) {
                return this.delegate.matchElement(e)
            }, e.prototype.matchElementsInTree = function(e) {
                return void 0 === e && (e = this.element), this.delegate.matchElementsInTree(e)
            }, e.prototype.processTree = function(e, t) {
                for (var n = 0, o = this.matchElementsInTree(e); n < o.length; n++) {
                    var i = o[n];
                    t.call(this, i)
                }
            }, e.prototype.elementFromNode = function(e) {
                return e.nodeType == Node.ELEMENT_NODE ? e : void 0
            }, e.prototype.elementIsActive = function(e) {
                return e.isConnected != this.element.isConnected ? !1 : this.element.contains(e)
            }, e.prototype.addElement = function(e) {
                this.elements.has(e) || this.elementIsActive(e) && (this.elements.add(e), this.delegate.elementMatched && this.delegate.elementMatched(e))
            }, e.prototype.removeElement = function(e) {
                this.elements.has(e) && (this.elements.delete(e), this.delegate.elementUnmatched && this.delegate.elementUnmatched(e))
            }, e
        }(),
        A = function() {
            function e(e, t, n) {
                this.attributeName = t, this.delegate = n, this.elementObserver = new P(e, this)
            }
            return Object.defineProperty(e.prototype, "element", {
                "get": function() {
                    return this.elementObserver.element
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "selector", {
                "get": function() {
                    return "[" + this.attributeName + "]"
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.start = function() {
                this.elementObserver.start()
            }, e.prototype.stop = function() {
                this.elementObserver.stop()
            }, e.prototype.refresh = function() {
                this.elementObserver.refresh()
            }, Object.defineProperty(e.prototype, "started", {
                "get": function() {
                    return this.elementObserver.started
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.matchElement = function(e) {
                return e.hasAttribute(this.attributeName)
            }, e.prototype.matchElementsInTree = function(e) {
                var t = this.matchElement(e) ? [e] : [],
                    n = Array.from(e.querySelectorAll(this.selector));
                return t.concat(n)
            }, e.prototype.elementMatched = function(e) {
                this.delegate.elementMatchedAttribute && this.delegate.elementMatchedAttribute(e, this.attributeName)
            }, e.prototype.elementUnmatched = function(e) {
                this.delegate.elementUnmatchedAttribute && this.delegate.elementUnmatchedAttribute(e, this.attributeName)
            }, e.prototype.elementAttributeChanged = function(e, t) {
                this.delegate.elementAttributeValueChanged && this.attributeName == t && this.delegate.elementAttributeValueChanged(e, t)
            }, e
        }(),
        I = function() {
            function e() {
                this.valuesByKey = new Map
            }
            return Object.defineProperty(e.prototype, "values", {
                "get": function() {
                    var e = Array.from(this.valuesByKey.values());
                    return e.reduce(function(e, t) {
                        return e.concat(Array.from(t))
                    }, [])
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "size", {
                "get": function() {
                    var e = Array.from(this.valuesByKey.values());
                    return e.reduce(function(e, t) {
                        return e + t.size
                    }, 0)
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.add = function(e, t) {
                s(this.valuesByKey, e, t)
            }, e.prototype.delete = function(e, t) {
                c(this.valuesByKey, e, t)
            }, e.prototype.has = function(e, t) {
                var n = this.valuesByKey.get(e);
                return null != n && n.has(t)
            }, e.prototype.hasKey = function(e) {
                return this.valuesByKey.has(e)
            }, e.prototype.hasValue = function(e) {
                var t = Array.from(this.valuesByKey.values());
                return t.some(function(t) {
                    return t.has(e)
                })
            }, e.prototype.getValuesForKey = function(e) {
                var t = this.valuesByKey.get(e);
                return t ? Array.from(t) : []
            }, e.prototype.getKeysForValue = function(e) {
                return Array.from(this.valuesByKey).filter(function(t) {
                    var n = (t[0], t[1]);
                    return n.has(e)
                }).map(function(e) {
                    {
                        var t = e[0];
                        e[1]
                    }
                    return t
                })
            }, e
        }(),
        M = void 0 || function() {
            var e = Object.setPrototypeOf || {
                "__proto__": []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
            }
        }(),
        D = (function(e) {
            function t() {
                var t = e.call(this) || this;
                return t.keysByValue = new Map, t
            }
            return M(t, e), Object.defineProperty(t.prototype, "values", {
                "get": function() {
                    return Array.from(this.keysByValue.keys())
                },
                "enumerable": !0,
                "configurable": !0
            }), t.prototype.add = function(t, n) {
                e.prototype.add.call(this, t, n), s(this.keysByValue, n, t)
            }, t.prototype.delete = function(t, n) {
                e.prototype.delete.call(this, t, n), c(this.keysByValue, n, t)
            }, t.prototype.hasValue = function(e) {
                return this.keysByValue.has(e)
            }, t.prototype.getKeysForValue = function(e) {
                var t = this.keysByValue.get(e);
                return t ? Array.from(t) : []
            }, t
        }(I), function() {
            function e(e, t, n) {
                this.attributeObserver = new A(e, t, this), this.delegate = n, this.tokensByElement = new I
            }
            return Object.defineProperty(e.prototype, "started", {
                "get": function() {
                    return this.attributeObserver.started
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.start = function() {
                this.attributeObserver.start()
            }, e.prototype.stop = function() {
                this.attributeObserver.stop()
            }, e.prototype.refresh = function() {
                this.attributeObserver.refresh()
            }, Object.defineProperty(e.prototype, "element", {
                "get": function() {
                    return this.attributeObserver.element
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "attributeName", {
                "get": function() {
                    return this.attributeObserver.attributeName
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.elementMatchedAttribute = function(e) {
                this.tokensMatched(this.readTokensForElement(e))
            }, e.prototype.elementAttributeValueChanged = function(e) {
                var t = this.refreshTokensForElement(e),
                    n = t[0],
                    o = t[1];
                this.tokensUnmatched(n), this.tokensMatched(o)
            }, e.prototype.elementUnmatchedAttribute = function(e) {
                this.tokensUnmatched(this.tokensByElement.getValuesForKey(e))
            }, e.prototype.tokensMatched = function(e) {
                var t = this;
                e.forEach(function(e) {
                    return t.tokenMatched(e)
                })
            }, e.prototype.tokensUnmatched = function(e) {
                var t = this;
                e.forEach(function(e) {
                    return t.tokenUnmatched(e)
                })
            }, e.prototype.tokenMatched = function(e) {
                this.delegate.tokenMatched(e), this.tokensByElement.add(e.element, e)
            }, e.prototype.tokenUnmatched = function(e) {
                this.delegate.tokenUnmatched(e), this.tokensByElement.delete(e.element, e)
            }, e.prototype.refreshTokensForElement = function(e) {
                var t = this.tokensByElement.getValuesForKey(e),
                    n = this.readTokensForElement(e),
                    o = p(t, n).findIndex(function(e) {
                        var t = e[0],
                            n = e[1];
                        return !f(t, n)
                    });
                return -1 == o ? [
                    [],
                    []
                ] : [t.slice(o), n.slice(o)]
            }, e.prototype.readTokensForElement = function(e) {
                var t = this.attributeName,
                    n = e.getAttribute(t) || "";
                return d(n, e, t)
            }, e
        }()),
        L = function() {
            function e(e, t, n) {
                this.tokenListObserver = new D(e, t, this), this.delegate = n, this.parseResultsByToken = new WeakMap, this.valuesByTokenByElement = new WeakMap
            }
            return Object.defineProperty(e.prototype, "started", {
                "get": function() {
                    return this.tokenListObserver.started
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.start = function() {
                this.tokenListObserver.start()
            }, e.prototype.stop = function() {
                this.tokenListObserver.stop()
            }, e.prototype.refresh = function() {
                this.tokenListObserver.refresh()
            }, Object.defineProperty(e.prototype, "element", {
                "get": function() {
                    return this.tokenListObserver.element
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "attributeName", {
                "get": function() {
                    return this.tokenListObserver.attributeName
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.tokenMatched = function(e) {
                var t = e.element,
                    n = this.fetchParseResultForToken(e).value;
                n && (this.fetchValuesByTokenForElement(t).set(e, n), this.delegate.elementMatchedValue(t, n))
            }, e.prototype.tokenUnmatched = function(e) {
                var t = e.element,
                    n = this.fetchParseResultForToken(e).value;
                n && (this.fetchValuesByTokenForElement(t).delete(e), this.delegate.elementUnmatchedValue(t, n))
            }, e.prototype.fetchParseResultForToken = function(e) {
                var t = this.parseResultsByToken.get(e);
                return t || (t = this.parseToken(e), this.parseResultsByToken.set(e, t)), t
            }, e.prototype.fetchValuesByTokenForElement = function(e) {
                var t = this.valuesByTokenByElement.get(e);
                return t || (t = new Map, this.valuesByTokenByElement.set(e, t)), t
            }, e.prototype.parseToken = function(e) {
                try {
                    var t = this.delegate.parseValueForToken(e);
                    return {
                        "value": t
                    }
                } catch (n) {
                    return {
                        "error": n
                    }
                }
            }, e
        }(),
        F = function() {
            function e(e, t) {
                this.context = e, this.delegate = t, this.bindingsByAction = new Map
            }
            return e.prototype.start = function() {
                this.valueListObserver || (this.valueListObserver = new L(this.element, this.actionAttribute, this), this.valueListObserver.start())
            }, e.prototype.stop = function() {
                this.valueListObserver && (this.valueListObserver.stop(), delete this.valueListObserver, this.disconnectAllActions())
            }, Object.defineProperty(e.prototype, "element", {
                "get": function() {
                    return this.context.element
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "identifier", {
                "get": function() {
                    return this.context.identifier
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "actionAttribute", {
                "get": function() {
                    return this.schema.actionAttribute
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "schema", {
                "get": function() {
                    return this.context.schema
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "bindings", {
                "get": function() {
                    return Array.from(this.bindingsByAction.values())
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.connectAction = function(e) {
                var t = new _(this.context, e);
                this.bindingsByAction.set(e, t), this.delegate.bindingConnected(t)
            }, e.prototype.disconnectAction = function(e) {
                var t = this.bindingsByAction.get(e);
                t && (this.bindingsByAction.delete(e), this.delegate.bindingDisconnected(t))
            }, e.prototype.disconnectAllActions = function() {
                var e = this;
                this.bindings.forEach(function(t) {
                    return e.delegate.bindingDisconnected(t)
                }), this.bindingsByAction.clear()
            }, e.prototype.parseValueForToken = function(e) {
                var t = T.forToken(e);
                return t.identifier == this.identifier ? t : void 0
            }, e.prototype.elementMatchedValue = function(e, t) {
                this.connectAction(t)
            }, e.prototype.elementUnmatchedValue = function(e, t) {
                this.disconnectAction(t)
            }, e
        }(),
        N = function() {
            function e(e, t) {
                this.module = e, this.scope = t, this.controller = new e.controllerConstructor(this), this.bindingObserver = new F(this, this.dispatcher);
                try {
                    this.controller.initialize()
                } catch (n) {
                    this.handleError(n, "initializing controller")
                }
            }
            return e.prototype.connect = function() {
                this.bindingObserver.start();
                try {
                    this.controller.connect()
                } catch (e) {
                    this.handleError(e, "connecting controller")
                }
            }, e.prototype.disconnect = function() {
                try {
                    this.controller.disconnect()
                } catch (e) {
                    this.handleError(e, "disconnecting controller")
                }
                this.bindingObserver.stop()
            }, Object.defineProperty(e.prototype, "application", {
                "get": function() {
                    return this.module.application
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "identifier", {
                "get": function() {
                    return this.module.identifier
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "schema", {
                "get": function() {
                    return this.application.schema
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "dispatcher", {
                "get": function() {
                    return this.application.dispatcher
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "element", {
                "get": function() {
                    return this.scope.element
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "parentElement", {
                "get": function() {
                    return this.element.parentElement
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.handleError = function(e, t, n) {
                void 0 === n && (n = {});
                var o = this,
                    i = o.identifier,
                    r = o.controller,
                    a = o.element;
                n = Object.assign({
                    "identifier": i,
                    "controller": r,
                    "element": a
                }, n), this.application.handleError(e, "Error " + t, n)
            }, e
        }(),
        U = void 0 || function() {
            var e = Object.setPrototypeOf || {
                "__proto__": []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            };
            return function(t, n) {
                function o() {
                    this.constructor = t
                }
                e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
            }
        }(),
        B = function() {
            function e(e) {
                function t() {
                    var n = this && this instanceof t ? this.constructor : void 0;
                    return Reflect.construct(e, arguments, n)
                }
                return t.prototype = Object.create(e.prototype, {
                    "constructor": {
                        "value": t
                    }
                }), Reflect.setPrototypeOf(t, e), t
            }

            function t() {
                var t = function() {
                        this.a.call(this)
                    },
                    n = e(t);
                return n.prototype.a = function() {}, new n
            }
            try {
                return t(), e
            } catch (n) {
                return function(e) {
                    return function(e) {
                        function t() {
                            return null !== e && e.apply(this, arguments) || this
                        }
                        return U(t, e), t
                    }(e)
                }
            }
        }(),
        R = function() {
            function e(e, t) {
                this.application = e, this.definition = h(t), this.contextsByScope = new WeakMap, this.connectedContexts = new Set
            }
            return Object.defineProperty(e.prototype, "identifier", {
                "get": function() {
                    return this.definition.identifier
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "controllerConstructor", {
                "get": function() {
                    return this.definition.controllerConstructor
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "contexts", {
                "get": function() {
                    return Array.from(this.connectedContexts)
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.connectContextForScope = function(e) {
                var t = this.fetchContextForScope(e);
                this.connectedContexts.add(t), t.connect()
            }, e.prototype.disconnectContextForScope = function(e) {
                var t = this.contextsByScope.get(e);
                t && (this.connectedContexts.delete(t), t.disconnect())
            }, e.prototype.fetchContextForScope = function(e) {
                var t = this.contextsByScope.get(e);
                return t || (t = new N(this, e), this.contextsByScope.set(e, t)), t
            }, e
        }(),
        q = function() {
            function e(e) {
                this.scope = e
            }
            return Object.defineProperty(e.prototype, "element", {
                "get": function() {
                    return this.scope.element
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "identifier", {
                "get": function() {
                    return this.scope.identifier
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.get = function(e) {
                return e = this.getFormattedKey(e), this.element.getAttribute(e)
            }, e.prototype.set = function(e, t) {
                return e = this.getFormattedKey(e), this.element.setAttribute(e, t), this.get(e)
            }, e.prototype.has = function(e) {
                return e = this.getFormattedKey(e), this.element.hasAttribute(e)
            }, e.prototype.delete = function(e) {
                return this.has(e) ? (e = this.getFormattedKey(e), this.element.removeAttribute(e), !0) : !1
            }, e.prototype.getFormattedKey = function(e) {
                return "data-" + this.identifier + "-" + m(e)
            }, e
        }(),
        V = function() {
            function e(e) {
                this.scope = e
            }
            return Object.defineProperty(e.prototype, "element", {
                "get": function() {
                    return this.scope.element
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "identifier", {
                "get": function() {
                    return this.scope.identifier
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "schema", {
                "get": function() {
                    return this.scope.schema
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.has = function(e) {
                return null != this.find(e)
            }, e.prototype.find = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = this.getSelectorForTargetNames(e);
                return this.scope.findElement(n)
            }, e.prototype.findAll = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = this.getSelectorForTargetNames(e);
                return this.scope.findAllElements(n)
            }, e.prototype.getSelectorForTargetNames = function(e) {
                var t = this;
                return e.map(function(e) {
                    return t.getSelectorForTargetName(e)
                }).join(", ")
            }, e.prototype.getSelectorForTargetName = function(e) {
                var t = this.identifier + "." + e;
                return v(this.schema.targetAttribute, t)
            }, e
        }(),
        W = function() {
            function e(e, t, n) {
                this.schema = e, this.identifier = t, this.element = n, this.targets = new V(this), this.data = new q(this)
            }
            return e.prototype.findElement = function(e) {
                return this.findAllElements(e)[0]
            }, e.prototype.findAllElements = function(e) {
                var t = this.element.matches(e) ? [this.element] : [],
                    n = this.filterElements(Array.from(this.element.querySelectorAll(e)));
                return t.concat(n)
            }, e.prototype.filterElements = function(e) {
                var t = this;
                return e.filter(function(e) {
                    return t.containsElement(e)
                })
            }, e.prototype.containsElement = function(e) {
                return e.closest(this.controllerSelector) === this.element
            }, Object.defineProperty(e.prototype, "controllerSelector", {
                "get": function() {
                    return v(this.schema.controllerAttribute, this.identifier)
                },
                "enumerable": !0,
                "configurable": !0
            }), e
        }(),
        H = function() {
            function e(e, t, n) {
                this.element = e, this.schema = t, this.delegate = n, this.valueListObserver = new L(this.element, this.controllerAttribute, this), this.scopesByIdentifierByElement = new WeakMap, this.scopeReferenceCounts = new WeakMap
            }
            return e.prototype.start = function() {
                this.valueListObserver.start()
            }, e.prototype.stop = function() {
                this.valueListObserver.stop()
            }, Object.defineProperty(e.prototype, "controllerAttribute", {
                "get": function() {
                    return this.schema.controllerAttribute
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.parseValueForToken = function(e) {
                var t = e.element,
                    n = e.content,
                    o = this.fetchScopesByIdentifierForElement(t),
                    i = o.get(n);
                return i || (i = new W(this.schema, n, t), o.set(n, i)), i
            }, e.prototype.elementMatchedValue = function(e, t) {
                var n = (this.scopeReferenceCounts.get(t) || 0) + 1;
                this.scopeReferenceCounts.set(t, n), 1 == n && this.delegate.scopeConnected(t)
            }, e.prototype.elementUnmatchedValue = function(e, t) {
                var n = this.scopeReferenceCounts.get(t);
                n && (this.scopeReferenceCounts.set(t, n - 1), 1 == n && this.delegate.scopeDisconnected(t))
            }, e.prototype.fetchScopesByIdentifierForElement = function(e) {
                var t = this.scopesByIdentifierByElement.get(e);
                return t || (t = new Map, this.scopesByIdentifierByElement.set(e, t)), t
            }, e
        }(),
        z = function() {
            function e(e) {
                this.application = e, this.scopeObserver = new H(this.element, this.schema, this), this.scopesByIdentifier = new I, this.modulesByIdentifier = new Map
            }
            return Object.defineProperty(e.prototype, "element", {
                "get": function() {
                    return this.application.element
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "schema", {
                "get": function() {
                    return this.application.schema
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "controllerAttribute", {
                "get": function() {
                    return this.schema.controllerAttribute
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "modules", {
                "get": function() {
                    return Array.from(this.modulesByIdentifier.values())
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "contexts", {
                "get": function() {
                    return this.modules.reduce(function(e, t) {
                        return e.concat(t.contexts)
                    }, [])
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.start = function() {
                this.scopeObserver.start()
            }, e.prototype.stop = function() {
                this.scopeObserver.stop()
            }, e.prototype.loadDefinition = function(e) {
                this.unloadIdentifier(e.identifier);
                var t = new R(this.application, e);
                this.connectModule(t)
            }, e.prototype.unloadIdentifier = function(e) {
                var t = this.modulesByIdentifier.get(e);
                t && this.disconnectModule(t)
            }, e.prototype.getContextForElementAndIdentifier = function(e, t) {
                var n = this.modulesByIdentifier.get(t);
                return n ? n.contexts.find(function(t) {
                    return t.element == e
                }) : void 0
            }, e.prototype.handleError = function(e, t, n) {
                this.application.handleError(e, t, n)
            }, e.prototype.scopeConnected = function(e) {
                this.scopesByIdentifier.add(e.identifier, e);
                var t = this.modulesByIdentifier.get(e.identifier);
                t && t.connectContextForScope(e)
            }, e.prototype.scopeDisconnected = function(e) {
                this.scopesByIdentifier.delete(e.identifier, e);
                var t = this.modulesByIdentifier.get(e.identifier);
                t && t.disconnectContextForScope(e)
            }, e.prototype.connectModule = function(e) {
                this.modulesByIdentifier.set(e.identifier, e);
                var t = this.scopesByIdentifier.getValuesForKey(e.identifier);
                t.forEach(function(t) {
                    return e.connectContextForScope(t)
                })
            }, e.prototype.disconnectModule = function(e) {
                this.modulesByIdentifier.delete(e.identifier);
                var t = this.scopesByIdentifier.getValuesForKey(e.identifier);
                t.forEach(function(t) {
                    return e.disconnectContextForScope(t)
                })
            }, e
        }(),
        G = {
            "controllerAttribute": "data-controller",
            "actionAttribute": "data-action",
            "targetAttribute": "data-target"
        },
        J = void 0 || function(e, t, n, o) {
            return new(n || (n = Promise))(function(i, r) {
                function a(e) {
                    try {
                        c(o.next(e))
                    } catch (t) {
                        r(t)
                    }
                }

                function s(e) {
                    try {
                        c(o["throw"](e))
                    } catch (t) {
                        r(t)
                    }
                }

                function c(e) {
                    e.done ? i(e.value) : new n(function(t) {
                        t(e.value)
                    }).then(a, s)
                }
                c((o = o.apply(e, t || [])).next())
            })
        },
        K = void 0 || function(e, t) {
            function n(e) {
                return function(t) {
                    return o([e, t])
                }
            }

            function o(n) {
                if (i) throw new TypeError("Generator is already executing.");
                for (; c;) try {
                    if (i = 1, r && (a = r[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(a = a.call(r, n[1])).done) return a;
                    switch (r = 0, a && (n = [0, a.value]), n[0]) {
                        case 0:
                        case 1:
                            a = n;
                            break;
                        case 4:
                            return c.label++, {
                                "value": n[1],
                                "done": !1
                            };
                        case 5:
                            c.label++, r = n[1], n = [0];
                            continue;
                        case 7:
                            n = c.ops.pop(), c.trys.pop();
                            continue;
                        default:
                            if (a = c.trys, !(a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
                                c.label = n[1];
                                break
                            }
                            if (6 === n[0] && c.label < a[1]) {
                                c.label = a[1], a = n;
                                break
                            }
                            if (a && c.label < a[2]) {
                                c.label = a[2], c.ops.push(n);
                                break
                            }
                            a[2] && c.ops.pop(), c.trys.pop();
                            continue
                    }
                    n = t.call(e, c)
                } catch (o) {
                    n = [6, o], r = 0
                } finally {
                    i = a = 0
                }
                if (5 & n[0]) throw n[1];
                return {
                    "value": n[0] ? n[1] : void 0,
                    "done": !0
                }
            }
            var i, r, a, s, c = {
                "label": 0,
                "sent": function() {
                    if (1 & a[0]) throw a[1];
                    return a[1]
                },
                "trys": [],
                "ops": []
            };
            return s = {
                "next": n(0),
                "throw": n(1),
                "return": n(2)
            }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                return this
            }), s
        },
        Y = function() {
            function e(e, t) {
                void 0 === e && (e = document.documentElement), void 0 === t && (t = G), this.element = e, this.schema = t, this.dispatcher = new E(this), this.router = new z(this)
            }
            return e.start = function(t, n) {
                var o = new e(t, n);
                return o.start(), o
            }, e.prototype.start = function() {
                return J(this, void 0, void 0, function() {
                    return K(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, b()];
                            case 1:
                                return e.sent(), this.router.start(), this.dispatcher.start(), [2]
                        }
                    })
                })
            }, e.prototype.stop = function() {
                this.router.stop(), this.dispatcher.stop()
            }, e.prototype.register = function(e, t) {
                this.load({
                    "identifier": e,
                    "controllerConstructor": t
                })
            }, e.prototype.load = function(e) {
                for (var t = this, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                var i = Array.isArray(e) ? e : [e].concat(n);
                i.forEach(function(e) {
                    return t.router.loadDefinition(e)
                })
            }, e.prototype.unload = function(e) {
                for (var t = this, n = [], o = 1; o < arguments.length; o++) n[o - 1] = arguments[o];
                var i = Array.isArray(e) ? e : [e].concat(n);
                i.forEach(function(e) {
                    return t.router.unloadIdentifier(e)
                })
            }, Object.defineProperty(e.prototype, "controllers", {
                "get": function() {
                    return this.router.contexts.map(function(e) {
                        return e.controller
                    })
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.getControllerForElementAndIdentifier = function(e, t) {
                var n = this.router.getContextForElementAndIdentifier(e, t);
                return n ? n.controller : null
            }, e.prototype.handleError = function(e, t, n) {
                console.error("%s\n\n%o\n\n%o", t, e, n)
            }, e
        }(),
        Q = function() {
            function e(e) {
                this.context = e
            }
            return e.bless = function() {
                y(this)
            }, Object.defineProperty(e.prototype, "application", {
                "get": function() {
                    return this.context.application
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "scope", {
                "get": function() {
                    return this.context.scope
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "element", {
                "get": function() {
                    return this.scope.element
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "identifier", {
                "get": function() {
                    return this.scope.identifier
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "targets", {
                "get": function() {
                    return this.scope.targets
                },
                "enumerable": !0,
                "configurable": !0
            }), Object.defineProperty(e.prototype, "data", {
                "get": function() {
                    return this.scope.data
                },
                "enumerable": !0,
                "configurable": !0
            }), e.prototype.initialize = function() {}, e.prototype.connect = function() {}, e.prototype.disconnect = function() {}, e.targets = [], e
        }();
    e.Application = Y, e.Context = N, e.Controller = Q, e.defaultSchema = G, Object.defineProperty(e, "__esModule", {
        "value": !0
    })
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function() {
    function e(e) {
        var t = !1;
        return function() {
            t || (t = !0, window.Promise.resolve().then(function() {
                t = !1, e()
            }))
        }
    }

    function t(e) {
        var t = !1;
        return function() {
            t || (t = !0, setTimeout(function() {
                t = !1, e()
            }, ut))
        }
    }

    function n(e) {
        var t = {};
        return e && "[object Function]" === t.toString.call(e)
    }

    function o(e, t) {
        if (1 !== e.nodeType) return [];
        var n = e.ownerDocument.defaultView,
            o = n.getComputedStyle(e, null);
        return t ? o[t] : o
    }

    function i(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function r(e) {
        if (!e) return document.body;
        switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
        }
        var t = o(e),
            n = t.overflow,
            a = t.overflowX,
            s = t.overflowY;
        return /(auto|scroll|overlay)/.test(n + s + a) ? e : r(i(e))
    }

    function a(e) {
        return 11 === e ? ht : 10 === e ? gt : ht || gt
    }

    function s(e) {
        if (!e) return document.documentElement;
        for (var t = a(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling;) n = (e = e.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === o(n, "position") ? s(n) : n : e ? e.ownerDocument.documentElement : document.documentElement
    }

    function c(e) {
        var t = e.nodeName;
        return "BODY" === t ? !1 : "HTML" === t || s(e.firstElementChild) === e
    }

    function l(e) {
        return null !== e.parentNode ? l(e.parentNode) : e
    }

    function u(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
        var n = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
            o = n ? e : t,
            i = n ? t : e,
            r = document.createRange();
        r.setStart(o, 0), r.setEnd(i, 0);
        var a = r.commonAncestorContainer;
        if (e !== a && t !== a || o.contains(i)) return c(a) ? a : s(a);
        var d = l(e);
        return d.host ? u(d.host, t) : u(e, l(t).host)
    }

    function d(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
            n = "top" === t ? "scrollTop" : "scrollLeft",
            o = e.nodeName;
        if ("BODY" === o || "HTML" === o) {
            var i = e.ownerDocument.documentElement,
                r = e.ownerDocument.scrollingElement || i;
            return r[n]
        }
        return e[n]
    }

    function p(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1,
            o = d(t, "top"),
            i = d(t, "left"),
            r = n ? -1 : 1;
        return e.top += o * r, e.bottom += o * r, e.left += i * r, e.right += i * r, e
    }

    function f(e, t) {
        var n = "x" === t ? "Left" : "Top",
            o = "Left" === n ? "Right" : "Bottom";
        return parseFloat(e["border" + n + "Width"], 10) + parseFloat(e["border" + o + "Width"], 10)
    }

    function h(e, t, n, o) {
        return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], a(10) ? parseInt(n["offset" + e]) + parseInt(o["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(o["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
    }

    function g(e) {
        var t = e.body,
            n = e.documentElement,
            o = a(10) && getComputedStyle(n);
        return {
            "height": h("Height", t, n, o),
            "width": h("Width", t, n, o)
        }
    }

    function m(e) {
        return yt({}, e, {
            "right": e.left + e.width,
            "bottom": e.top + e.height
        })
    }

    function v(e) {
        var t = {};
        try {
            if (a(10)) {
                t = e.getBoundingClientRect();
                var n = d(e, "top"),
                    i = d(e, "left");
                t.top += n, t.left += i, t.bottom += n, t.right += i
            } else t = e.getBoundingClientRect()
        } catch (r) {}
        var s = {
                "left": t.left,
                "top": t.top,
                "width": t.right - t.left,
                "height": t.bottom - t.top
            },
            c = "HTML" === e.nodeName ? g(e.ownerDocument) : {},
            l = c.width || e.clientWidth || s.right - s.left,
            u = c.height || e.clientHeight || s.bottom - s.top,
            p = e.offsetWidth - l,
            h = e.offsetHeight - u;
        if (p || h) {
            var v = o(e);
            p -= f(v, "x"), h -= f(v, "y"), s.width -= p, s.height -= h
        }
        return m(s)
    }

    function b(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !1,
            i = a(10),
            s = "HTML" === t.nodeName,
            c = v(e),
            l = v(t),
            u = r(e),
            d = o(t),
            f = parseFloat(d.borderTopWidth, 10),
            h = parseFloat(d.borderLeftWidth, 10);
        n && s && (l.top = Math.max(l.top, 0), l.left = Math.max(l.left, 0));
        var g = m({
            "top": c.top - l.top - f,
            "left": c.left - l.left - h,
            "width": c.width,
            "height": c.height
        });
        if (g.marginTop = 0, g.marginLeft = 0, !i && s) {
            var b = parseFloat(d.marginTop, 10),
                y = parseFloat(d.marginLeft, 10);
            g.top -= f - b, g.bottom -= f - b, g.left -= h - y, g.right -= h - y, g.marginTop = b, g.marginLeft = y
        }
        return (i && !n ? t.contains(u) : t === u && "BODY" !== u.nodeName) && (g = p(g, t)), g
    }

    function y(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
            n = e.ownerDocument.documentElement,
            o = b(e, n),
            i = Math.max(n.clientWidth, window.innerWidth || 0),
            r = Math.max(n.clientHeight, window.innerHeight || 0),
            a = t ? 0 : d(n),
            s = t ? 0 : d(n, "left"),
            c = {
                "top": a - o.top + o.marginTop,
                "left": s - o.left + o.marginLeft,
                "width": i,
                "height": r
            };
        return m(c)
    }

    function k(e) {
        var t = e.nodeName;
        if ("BODY" === t || "HTML" === t) return !1;
        if ("fixed" === o(e, "position")) return !0;
        var n = i(e);
        return n ? k(n) : !1
    }

    function $(e) {
        if (!e || !e.parentElement || a()) return document.documentElement;
        for (var t = e.parentElement; t && "none" === o(t, "transform");) t = t.parentElement;
        return t || document.documentElement
    }

    function w(e, t, n, o) {
        var a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : !1,
            s = {
                "top": 0,
                "left": 0
            },
            c = a ? $(e) : u(e, t);
        if ("viewport" === o) s = y(c, a);
        else {
            var l = void 0;
            "scrollParent" === o ? (l = r(i(t)), "BODY" === l.nodeName && (l = e.ownerDocument.documentElement)) : l = "window" === o ? e.ownerDocument.documentElement : o;
            var d = b(l, c, a);
            if ("HTML" !== l.nodeName || k(c)) s = d;
            else {
                var p = g(e.ownerDocument),
                    f = p.height,
                    h = p.width;
                s.top += d.top - d.marginTop, s.bottom = f + d.top, s.left += d.left - d.marginLeft, s.right = h + d.left
            }
        }
        n = n || 0;
        var m = "number" == typeof n;
        return s.left += m ? n : n.left || 0, s.top += m ? n : n.top || 0, s.right -= m ? n : n.right || 0, s.bottom -= m ? n : n.bottom || 0, s
    }

    function x(e) {
        var t = e.width,
            n = e.height;
        return t * n
    }

    function S(e, t, n, o, i) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = w(n, o, r, i),
            s = {
                "top": {
                    "width": a.width,
                    "height": t.top - a.top
                },
                "right": {
                    "width": a.right - t.right,
                    "height": a.height
                },
                "bottom": {
                    "width": a.width,
                    "height": a.bottom - t.bottom
                },
                "left": {
                    "width": t.left - a.left,
                    "height": a.height
                }
            },
            c = Object.keys(s).map(function(e) {
                return yt({
                    "key": e
                }, s[e], {
                    "area": x(s[e])
                })
            }).sort(function(e, t) {
                return t.area - e.area
            }),
            l = c.filter(function(e) {
                var t = e.width,
                    o = e.height;
                return t >= n.clientWidth && o >= n.clientHeight
            }),
            u = l.length > 0 ? l[0].key : c[0].key,
            d = e.split("-")[1];
        return u + (d ? "-" + d : "")
    }

    function C(e, t, n) {
        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
            i = o ? $(t) : u(t, n);
        return b(n, i, o)
    }

    function E(e) {
        var t = e.ownerDocument.defaultView,
            n = t.getComputedStyle(e),
            o = parseFloat(n.marginTop || 0) + parseFloat(n.marginBottom || 0),
            i = parseFloat(n.marginLeft || 0) + parseFloat(n.marginRight || 0),
            r = {
                "width": e.offsetWidth + i,
                "height": e.offsetHeight + o
            };
        return r
    }

    function j(e) {
        var t = {
            "left": "right",
            "right": "left",
            "bottom": "top",
            "top": "bottom"
        };
        return e.replace(/left|right|bottom|top/g, function(e) {
            return t[e]
        })
    }

    function T(e, t, n) {
        n = n.split("-")[0];
        var o = E(e),
            i = {
                "width": o.width,
                "height": o.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            a = r ? "top" : "left",
            s = r ? "left" : "top",
            c = r ? "height" : "width",
            l = r ? "width" : "height";
        return i[a] = t[a] + t[c] / 2 - o[c] / 2, i[s] = n === s ? t[s] - o[l] : t[j(s)], i
    }

    function O(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function _(e, t, n) {
        if (Array.prototype.findIndex) return e.findIndex(function(e) {
            return e[t] === n
        });
        var o = O(e, function(e) {
            return e[t] === n
        });
        return e.indexOf(o)
    }

    function P(e, t, o) {
        var i = void 0 === o ? e : e.slice(0, _(e, "name", o));
        return i.forEach(function(e) {
            e["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var o = e["function"] || e.fn;
            e.enabled && n(o) && (t.offsets.popper = m(t.offsets.popper), t.offsets.reference = m(t.offsets.reference), t = o(t, e))
        }), t
    }

    function A() {
        if (!this.state.isDestroyed) {
            var e = {
                "instance": this,
                "styles": {},
                "arrowStyles": {},
                "attributes": {},
                "flipped": !1,
                "offsets": {}
            };
            e.offsets.reference = C(this.state, this.popper, this.reference, this.options.positionFixed), e.placement = S(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.positionFixed = this.options.positionFixed, e.offsets.popper = T(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function I(e, t) {
        return e.some(function(e) {
            var n = e.name,
                o = e.enabled;
            return o && n === t
        })
    }

    function M(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), o = 0; o < t.length; o++) {
            var i = t[o],
                r = i ? "" + i + n : e;
            if ("undefined" != typeof document.body.style[r]) return r
        }
        return null
    }

    function D() {
        return this.state.isDestroyed = !0, I(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[M("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function L(e) {
        var t = e.ownerDocument;
        return t ? t.defaultView : window
    }

    function F(e, t, n, o) {
        var i = "BODY" === e.nodeName,
            a = i ? e.ownerDocument.defaultView : e;
        a.addEventListener(t, n, {
            "passive": !0
        }), i || F(r(a.parentNode), t, n, o), o.push(a)
    }

    function N(e, t, n, o) {
        n.updateBound = o, L(e).addEventListener("resize", n.updateBound, {
            "passive": !0
        });
        var i = r(e);
        return F(i, "scroll", n.updateBound, n.scrollParents), n.scrollElement = i, n.eventsEnabled = !0, n
    }

    function U() {
        this.state.eventsEnabled || (this.state = N(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function B(e, t) {
        return L(e).removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function(e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function R() {
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = B(this.reference, this.state))
    }

    function q(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function V(e, t) {
        Object.keys(t).forEach(function(n) {
            var o = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && q(t[n]) && (o = "px"), e.style[n] = t[n] + o
        })
    }

    function W(e, t) {
        Object.keys(t).forEach(function(n) {
            var o = t[n];
            o !== !1 ? e.setAttribute(n, t[n]) : e.removeAttribute(n)
        })
    }

    function H(e) {
        return V(e.instance.popper, e.styles), W(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && V(e.arrowElement, e.arrowStyles), e
    }

    function z(e, t, n, o, i) {
        var r = C(i, t, e, n.positionFixed),
            a = S(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
        return t.setAttribute("x-placement", a), V(t, {
            "position": n.positionFixed ? "fixed" : "absolute"
        }), n
    }

    function G(e, t) {
        var n = e.offsets,
            o = n.popper,
            i = n.reference,
            r = Math.round,
            a = Math.floor,
            s = function(e) {
                return e
            },
            c = r(i.width),
            l = r(o.width),
            u = -1 !== ["left", "right"].indexOf(e.placement),
            d = -1 !== e.placement.indexOf("-"),
            p = c % 2 === l % 2,
            f = c % 2 === 1 && l % 2 === 1,
            h = t ? u || d || p ? r : a : s,
            g = t ? r : s;
        return {
            "left": h(f && !d && t ? o.left - 1 : o.left),
            "top": g(o.top),
            "bottom": g(o.bottom),
            "right": h(o.right)
        }
    }

    function J(e, t) {
        var n = t.x,
            o = t.y,
            i = e.offsets.popper,
            r = O(e.instance.modifiers, function(e) {
                return "applyStyle" === e.name
            }).gpuAcceleration;
        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
        var a = void 0 !== r ? r : t.gpuAcceleration,
            c = s(e.instance.popper),
            l = v(c),
            u = {
                "position": i.position
            },
            d = G(e, window.devicePixelRatio < 2 || !kt),
            p = "bottom" === n ? "top" : "bottom",
            f = "right" === o ? "left" : "right",
            h = M("transform"),
            g = void 0,
            m = void 0;
        if (m = "bottom" === p ? "HTML" === c.nodeName ? -c.clientHeight + d.bottom : -l.height + d.bottom : d.top, g = "right" === f ? "HTML" === c.nodeName ? -c.clientWidth + d.right : -l.width + d.right : d.left, a && h) u[h] = "translate3d(" + g + "px, " + m + "px, 0)", u[p] = 0, u[f] = 0, u.willChange = "transform";
        else {
            var b = "bottom" === p ? -1 : 1,
                y = "right" === f ? -1 : 1;
            u[p] = m * b, u[f] = g * y, u.willChange = p + ", " + f
        }
        var k = {
            "x-placement": e.placement
        };
        return e.attributes = yt({}, k, e.attributes), e.styles = yt({}, u, e.styles), e.arrowStyles = yt({}, e.offsets.arrow, e.arrowStyles), e
    }

    function K(e, t, n) {
        var o = O(e, function(e) {
                var n = e.name;
                return n === t
            }),
            i = !!o && e.some(function(e) {
                return e.name === n && e.enabled && e.order < o.order
            });
        if (!i) {
            var r = "`" + t + "`",
                a = "`" + n + "`";
            console.warn(a + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return i
    }

    function Y(e, t) {
        var n;
        if (!K(e.instance.modifiers, "arrow", "keepTogether")) return e;
        var i = t.element;
        if ("string" == typeof i) {
            if (i = e.instance.popper.querySelector(i), !i) return e
        } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
        var r = e.placement.split("-")[0],
            a = e.offsets,
            s = a.popper,
            c = a.reference,
            l = -1 !== ["left", "right"].indexOf(r),
            u = l ? "height" : "width",
            d = l ? "Top" : "Left",
            p = d.toLowerCase(),
            f = l ? "left" : "top",
            h = l ? "bottom" : "right",
            g = E(i)[u];
        c[h] - g < s[p] && (e.offsets.popper[p] -= s[p] - (c[h] - g)), c[p] + g > s[h] && (e.offsets.popper[p] += c[p] + g - s[h]), e.offsets.popper = m(e.offsets.popper);
        var v = c[p] + c[u] / 2 - g / 2,
            b = o(e.instance.popper),
            y = parseFloat(b["margin" + d], 10),
            k = parseFloat(b["border" + d + "Width"], 10),
            $ = v - e.offsets.popper[p] - y - k;
        return $ = Math.max(Math.min(s[u] - g, $), 0), e.arrowElement = i, e.offsets.arrow = (n = {}, bt(n, p, Math.round($)), bt(n, f, ""), n), e
    }

    function Q(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e
    }

    function X(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !1,
            n = wt.indexOf(e),
            o = wt.slice(n + 1).concat(wt.slice(0, n));
        return t ? o.reverse() : o
    }

    function Z(e, t) {
        if (I(e.instance.modifiers, "inner")) return e;
        if (e.flipped && e.placement === e.originalPlacement) return e;
        var n = w(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement, e.positionFixed),
            o = e.placement.split("-")[0],
            i = j(o),
            r = e.placement.split("-")[1] || "",
            a = [];
        switch (t.behavior) {
            case xt.FLIP:
                a = [o, i];
                break;
            case xt.CLOCKWISE:
                a = X(o);
                break;
            case xt.COUNTERCLOCKWISE:
                a = X(o, !0);
                break;
            default:
                a = t.behavior
        }
        return a.forEach(function(s, c) {
            if (o !== s || a.length === c + 1) return e;
            o = e.placement.split("-")[0], i = j(o);
            var l = e.offsets.popper,
                u = e.offsets.reference,
                d = Math.floor,
                p = "left" === o && d(l.right) > d(u.left) || "right" === o && d(l.left) < d(u.right) || "top" === o && d(l.bottom) > d(u.top) || "bottom" === o && d(l.top) < d(u.bottom),
                f = d(l.left) < d(n.left),
                h = d(l.right) > d(n.right),
                g = d(l.top) < d(n.top),
                m = d(l.bottom) > d(n.bottom),
                v = "left" === o && f || "right" === o && h || "top" === o && g || "bottom" === o && m,
                b = -1 !== ["top", "bottom"].indexOf(o),
                y = !!t.flipVariations && (b && "start" === r && f || b && "end" === r && h || !b && "start" === r && g || !b && "end" === r && m),
                k = !!t.flipVariationsByContent && (b && "start" === r && h || b && "end" === r && f || !b && "start" === r && m || !b && "end" === r && g),
                $ = y || k;
            (p || v || $) && (e.flipped = !0, (p || v) && (o = a[c + 1]), $ && (r = Q(r)), e.placement = o + (r ? "-" + r : ""), e.offsets.popper = yt({}, e.offsets.popper, T(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, "flip"))
        }), e
    }

    function et(e) {
        var t = e.offsets,
            n = t.popper,
            o = t.reference,
            i = e.placement.split("-")[0],
            r = Math.floor,
            a = -1 !== ["top", "bottom"].indexOf(i),
            s = a ? "right" : "bottom",
            c = a ? "left" : "top",
            l = a ? "width" : "height";
        return n[s] < r(o[c]) && (e.offsets.popper[c] = r(o[c]) - n[l]), n[c] > r(o[s]) && (e.offsets.popper[c] = r(o[s])), e
    }

    function tt(e, t, n, o) {
        var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
            r = +i[1],
            a = i[2];
        if (!r) return e;
        if (0 === a.indexOf("%")) {
            var s = void 0;
            switch (a) {
                case "%p":
                    s = n;
                    break;
                case "%":
                case "%r":
                default:
                    s = o
            }
            var c = m(s);
            return c[t] / 100 * r
        }
        if ("vh" === a || "vw" === a) {
            var l = void 0;
            return l = "vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0), l / 100 * r
        }
        return r
    }

    function nt(e, t, n, o) {
        var i = [0, 0],
            r = -1 !== ["right", "left"].indexOf(o),
            a = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            }),
            s = a.indexOf(O(a, function(e) {
                return -1 !== e.search(/,|\s/)
            }));
        a[s] && -1 === a[s].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var c = /\s*,\s*|\s+/,
            l = -1 !== s ? [a.slice(0, s).concat([a[s].split(c)[0]]), [a[s].split(c)[1]].concat(a.slice(s + 1))] : [a];
        return l = l.map(function(e, o) {
            var i = (1 === o ? !r : r) ? "height" : "width",
                a = !1;
            return e.reduce(function(e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
            }, []).map(function(e) {
                return tt(e, i, t, n)
            })
        }), l.forEach(function(e, t) {
            e.forEach(function(n, o) {
                q(n) && (i[t] += n * ("-" === e[o - 1] ? -1 : 1))
            })
        }), i
    }

    function ot(e, t) {
        var n = t.offset,
            o = e.placement,
            i = e.offsets,
            r = i.popper,
            a = i.reference,
            s = o.split("-")[0],
            c = void 0;
        return c = q(+n) ? [+n, 0] : nt(n, r, a, s), "left" === s ? (r.top += c[0], r.left -= c[1]) : "right" === s ? (r.top += c[0], r.left += c[1]) : "top" === s ? (r.left += c[0], r.top -= c[1]) : "bottom" === s && (r.left += c[0], r.top += c[1]), e.popper = r, e
    }

    function it(e, t) {
        var n = t.boundariesElement || s(e.instance.popper);
        e.instance.reference === n && (n = s(n));
        var o = M("transform"),
            i = e.instance.popper.style,
            r = i.top,
            a = i.left,
            c = i[o];
        i.top = "", i.left = "", i[o] = "";
        var l = w(e.instance.popper, e.instance.reference, t.padding, n, e.positionFixed);
        i.top = r, i.left = a, i[o] = c, t.boundaries = l;
        var u = t.priority,
            d = e.offsets.popper,
            p = {
                "primary": function(e) {
                    var n = d[e];
                    return d[e] < l[e] && !t.escapeWithReference && (n = Math.max(d[e], l[e])), bt({}, e, n)
                },
                "secondary": function(e) {
                    var n = "right" === e ? "left" : "top",
                        o = d[n];
                    return d[e] > l[e] && !t.escapeWithReference && (o = Math.min(d[n], l[e] - ("right" === e ? d.width : d.height))), bt({}, n, o)
                }
            };
        return u.forEach(function(e) {
            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
            d = yt({}, d, p[t](e))
        }), e.offsets.popper = d, e
    }

    function rt(e) {
        var t = e.placement,
            n = t.split("-")[0],
            o = t.split("-")[1];
        if (o) {
            var i = e.offsets,
                r = i.reference,
                a = i.popper,
                s = -1 !== ["bottom", "top"].indexOf(n),
                c = s ? "left" : "top",
                l = s ? "width" : "height",
                u = {
                    "start": bt({}, c, r[c]),
                    "end": bt({}, c, r[c] + r[l] - a[l])
                };
            e.offsets.popper = yt({}, a, u[o])
        }
        return e
    }

    function at(e) {
        if (!K(e.instance.modifiers, "hide", "preventOverflow")) return e;
        var t = e.offsets.reference,
            n = O(e.instance.modifiers, function(e) {
                return "preventOverflow" === e.name
            }).boundaries;
        if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
            if (e.hide === !0) return e;
            e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
        } else {
            if (e.hide === !1) return e;
            e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
        }
        return e
    }

    function st(e) {
        var t = e.placement,
            n = t.split("-")[0],
            o = e.offsets,
            i = o.popper,
            r = o.reference,
            a = -1 !== ["left", "right"].indexOf(n),
            s = -1 === ["top", "left"].indexOf(n);
        return i[a ? "left" : "top"] = r[n] - (s ? i[a ? "width" : "height"] : 0), e.placement = j(t), e.offsets.popper = m(i), e
    }
    for (var ct = "undefined" != typeof window && "undefined" != typeof document, lt = ["Edge", "Trident", "Firefox"], ut = 0, dt = 0; dt < lt.length; dt += 1)
        if (ct && navigator.userAgent.indexOf(lt[dt]) >= 0) {
            ut = 1;
            break
        }
    var pt = ct && window.Promise,
        ft = pt ? e : t,
        ht = ct && !(!window.MSInputMethodContext || !document.documentMode),
        gt = ct && /MSIE 10/.test(navigator.userAgent),
        mt = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        vt = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                }
            }
            return function(t, n, o) {
                return n && e(t.prototype, n), o && e(t, o), t
            }
        }(),
        bt = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                "value": n,
                "enumerable": !0,
                "configurable": !0,
                "writable": !0
            }) : e[t] = n, e
        },
        yt = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
            }
            return e
        },
        kt = ct && /Firefox/i.test(navigator.userAgent),
        $t = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        wt = $t.slice(3),
        xt = {
            "FLIP": "flip",
            "CLOCKWISE": "clockwise",
            "COUNTERCLOCKWISE": "counterclockwise"
        },
        St = {
            "shift": {
                "order": 100,
                "enabled": !0,
                "fn": rt
            },
            "offset": {
                "order": 200,
                "enabled": !0,
                "fn": ot,
                "offset": 0
            },
            "preventOverflow": {
                "order": 300,
                "enabled": !0,
                "fn": it,
                "priority": ["left", "right", "top", "bottom"],
                "padding": 5,
                "boundariesElement": "scrollParent"
            },
            "keepTogether": {
                "order": 400,
                "enabled": !0,
                "fn": et
            },
            "arrow": {
                "order": 500,
                "enabled": !0,
                "fn": Y,
                "element": "[x-arrow]"
            },
            "flip": {
                "order": 600,
                "enabled": !0,
                "fn": Z,
                "behavior": "flip",
                "padding": 5,
                "boundariesElement": "viewport",
                "flipVariations": !1,
                "flipVariationsByContent": !1
            },
            "inner": {
                "order": 700,
                "enabled": !1,
                "fn": st
            },
            "hide": {
                "order": 800,
                "enabled": !0,
                "fn": at
            },
            "computeStyle": {
                "order": 850,
                "enabled": !0,
                "fn": J,
                "gpuAcceleration": !0,
                "x": "bottom",
                "y": "right"
            },
            "applyStyle": {
                "order": 900,
                "enabled": !0,
                "fn": H,
                "onLoad": z,
                "gpuAcceleration": void 0
            }
        },
        Ct = {
            "placement": "bottom",
            "positionFixed": !1,
            "eventsEnabled": !0,
            "removeOnDestroy": !1,
            "onCreate": function() {},
            "onUpdate": function() {},
            "modifiers": St
        },
        Et = function() {
            function e(t, o) {
                var i = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                mt(this, e), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = ft(this.update.bind(this)), this.options = yt({}, e.Defaults, r), this.state = {
                    "isDestroyed": !1,
                    "isCreated": !1,
                    "scrollParents": []
                }, this.reference = t && t.jquery ? t[0] : t, this.popper = o && o.jquery ? o[0] : o, this.options.modifiers = {}, Object.keys(yt({}, e.Defaults.modifiers, r.modifiers)).forEach(function(t) {
                    i.options.modifiers[t] = yt({}, e.Defaults.modifiers[t] || {}, r.modifiers ? r.modifiers[t] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                    return yt({
                        "name": e
                    }, i.options.modifiers[e])
                }).sort(function(e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function(e) {
                    e.enabled && n(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state)
                }), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }
            return vt(e, [{
                "key": "update",
                "value": function() {
                    return A.call(this)
                }
            }, {
                "key": "destroy",
                "value": function() {
                    return D.call(this)
                }
            }, {
                "key": "enableEventListeners",
                "value": function() {
                    return U.call(this)
                }
            }, {
                "key": "disableEventListeners",
                "value": function() {
                    return R.call(this)
                }
            }]), e
        }();
    return Et.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Et.placements = $t, Et.Defaults = Ct, Et
});
var __extends = this && this.__extends || function() {
        var e = function(t, n) {
            return (e = Object.setPrototypeOf || {
                    "__proto__": []
                }
                instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                })(t, n)
        };
        return function(t, n) {
            function o() {
                this.constructor = t
            }
            e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
        }
    }(),
    Stacks;
! function(e) {
    function t(e) {
        var t, n = e.hasOwnProperty("targets") ? (t = function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t
        }(i), t.targets = e.targets, t) : function(e) {
            function t() {
                return null !== e && e.apply(this, arguments) || this
            }
            return __extends(t, e), t
        }(i);
        for (var o in e) "targets" !== o && e.hasOwnProperty(o) && Object.defineProperty(n.prototype, o, Object.getOwnPropertyDescriptor(e, o));
        return n
    }

    function n(n, o) {
        e.application.register(n, t(o))
    }
    var o = function(t) {
        function n() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(n, t), n.prototype.load = function(n) {
            for (var o = [], i = 1; i < arguments.length; i++) o[i - 1] = arguments[i];
            for (var r = Array.isArray(n) ? n : [n].concat(o), a = 0, s = r; a < s.length; a++) {
                var c = s[a],
                    l = /^s-/.test(c.identifier);
                if (e._initializing && !l) throw 'Stacks-created Stimulus controller names must start with "s-".';
                if (!e._initializing && l) throw 'The "s-" prefix on Stimulus controller names is reserved for Stacks-created controllers.'
            }
            t.prototype.load.call(this, r)
        }, n.start = function(e, t) {
            var o = new n(e, t);
            return o.start(), o
        }, n
    }(Stimulus.Application);
    e.application = o.start(), e._initializing = !0;
    var i = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.getElementData = function(e, t) {
            return e.getAttribute("data-" + this.identifier + "-" + t)
        }, t.prototype.setElementData = function(e, t, n) {
            e.setAttribute("data-" + this.identifier + "-" + t, n)
        }, t.prototype.removeElementData = function(e, t) {
            e.removeAttribute("data-" + this.identifier + "-" + t)
        }, t.prototype.triggerEvent = function(e, t, n) {
            var o, i = this.identifier + ":" + e;
            try {
                o = new CustomEvent(i, {
                    "bubbles": !0,
                    "detail": t
                })
            } catch (r) {
                o = document.createEvent("CustomEvent"), o.initCustomEvent(i, !0, !0, t)
            }
            return (n || this.element).dispatchEvent(o), o
        }, t
    }(Stimulus.Controller);
    e.StacksController = i, e.createController = t, e.addController = n
}(Stacks || (Stacks = {}));
var __extends = this && this.__extends || function() {
    var e = function(t, n) {
        return (e = Object.setPrototypeOf || {
                "__proto__": []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
    };
    return function(t, n) {
        function o() {
            this.constructor = t
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
    }
}();
! function() {
    function e(e) {
        var t = e.target;
        t instanceof HTMLInputElement && "INPUT" === t.nodeName && "radio" === t.type && document.querySelectorAll('input[type="radio"][name="' + t.name + '"]').forEach(function(t) {
            if (t !== e.target) {
                var o;
                try {
                    o = new Event(n)
                } catch (i) {
                    o = document.createEvent("Event"), o.initEvent(n, !0, !0)
                }
                t.dispatchEvent(o)
            }
        })
    }

    function t(t) {
        t ? (o++, 1 === o && document.body.addEventListener("change", e)) : (o--, 0 === o && document.body.removeEventListener("change", e))
    }
    var n = "s-expandable-control:radio-off",
        o = 0;
    Stacks.application.register("s-expandable-control", function(e) {
        function o() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(o, e), o.prototype.initialize = function() {
            "INPUT" === this.element.nodeName && ["radio", "checkbox"].indexOf(this.element.type) >= 0 ? (this.isCollapsed = this._isCollapsedForCheckable, this.events = ["change", n], this.isCheckable = !0, this.isRadio = "radio" === this.element.type) : (this.isCollapsed = this._isCollapsedForClickable, this.events = ["click", "keydown"]), this.listener = this.listener.bind(this)
        }, o.prototype._isCollapsedForClickable = function() {
            var e = this.controlledCollapsible;
            return e ? !e.classList.contains("is-expanded") : "false" === this.element.getAttribute("aria-expanded")
        }, o.prototype._isCollapsedForCheckable = function() {
            return !this.element.checked
        }, Object.defineProperty(o.prototype, "controlledCollapsible", {
            "get": function() {
                var e = this.element.getAttribute("aria-controls");
                if (!e) throw "couldn't find controls";
                var t = document.getElementById(e);
                if (!t) throw "couldn't find controls";
                return t
            },
            "enumerable": !0,
            "configurable": !0
        }), o.prototype._dispatchShowHideEvent = function(e) {
            this.triggerEvent(e ? "show" : "hide")
        }, o.prototype._toggleClass = function(e) {
            if (this.data.has("toggle-class")) {
                var t = this.element.classList,
                    n = this.data.get("toggle-class");
                if (!n) throw "couldn't find toggle class";
                n.split(/\s+/).forEach(function(n) {
                    t.toggle(n, !!e)
                })
            }
        }, o.prototype.listener = function(e) {
            var t;
            if (this.isCheckable) t = !this.element.checked;
            else {
                if ("keydown" == e.type && e instanceof KeyboardEvent && 13 != e.keyCode && 32 != e.keyCode) return;
                if (e.target !== e.currentTarget && ["A", "BUTTON"].indexOf(e.target.nodeName) >= 0) return;
                t = "true" === this.element.getAttribute("aria-expanded"), e.preventDefault(), "click" === e.type && this.element.blur()
            }
            this.element.setAttribute("aria-expanded", t ? "false" : "true"), this.controlledCollapsible.classList.toggle("is-expanded", !t), this._dispatchShowHideEvent(!t), this._toggleClass(!t)
        }, o.prototype.connect = function() {
            var e = this;
            if (this.events.forEach(function(t) {
                    e.element.addEventListener(t, e.listener)
                }, this), this.isRadio && t(!0), this.element.setAttribute("aria-expanded", this.isCollapsed() ? "false" : "true"), this.isCheckable) {
                var n = this.controlledCollapsible;
                if (n) {
                    var o = !this.isCollapsed(),
                        i = n.classList.contains("is-expanded");
                    o !== i && (n.classList.toggle("is-expanded", o), this._dispatchShowHideEvent(o), this._toggleClass(o))
                }
            }
        }, o.prototype.disconnect = function() {
            var e = this;
            this.events.forEach(function(t) {
                e.element.removeEventListener(t, e.listener)
            }, this), this.isRadio && t(!1)
        }, o
    }(Stacks.StacksController))
}();
var __extends = this && this.__extends || function() {
    var e = function(t, n) {
        return (e = Object.setPrototypeOf || {
                "__proto__": []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
    };
    return function(t, n) {
        function o() {
            this.constructor = t
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
    }
}();
! function() {
    var e;
    Stacks.application.register("s-popover", (e = function(e) {
        function t() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(t, e), t.prototype.connect = function() {
            var e = this.data.get("reference-selector");
            this.referenceElement = e && this.element.querySelector(e) || this.element;
            var t = this.referenceElement.getAttribute("aria-controls");
            if (!t) throw '[aria-controls="{POPOVER_ID}"] required';
            var n = document.getElementById(t);
            if (!n) throw "element with popover id not found";
            this.popoverElement = n;
            var o = this.popoverElement.classList.contains("is-visible");
            this.popper = new Popper(this.referenceElement, this.popoverElement, {
                "placement": this.data.get("placement") || "bottom",
                "eventsEnabled": o
            }), this._toggleOptionalClasses(o)
        }, t.prototype.disconnect = function() {
            this.popper.destroy(), this._unbindDocumentEvents()
        }, t.prototype.toggle = function() {
            this._toggle()
        }, t.prototype.show = function() {
            this._toggle(!0)
        }, t.prototype.hide = function() {
            this._toggle(!1)
        }, t.prototype._toggle = function(e) {
            var t = e;
            "undefined" == typeof t && (t = !this.popoverElement.classList.contains("is-visible")), this.triggerEvent(t ? "show" : "hide"), this.popper.update(), this.popoverElement.classList.toggle("is-visible", e), this._toggleOptionalClasses(e), this.popoverElement.classList.contains("is-visible") ? this._bindDocumentEvents() : this._unbindDocumentEvents(), this.triggerEvent(t ? "shown" : "hidden")
        }, t.prototype._bindDocumentEvents = function() {
            this._boundClickFn = this._boundClickFn || this._hideOnOutsideClick.bind(this), this._boundKeypressFn = this._boundKeypressFn || this._hideOnEscapePress.bind(this), document.addEventListener("click", this._boundClickFn), document.addEventListener("keyup", this._boundKeypressFn), this.popper.enableEventListeners()
        }, t.prototype._unbindDocumentEvents = function() {
            document.removeEventListener("click", this._boundClickFn), document.removeEventListener("keyup", this._boundKeypressFn), this.popper.disableEventListeners()
        }, t.prototype._hideOnOutsideClick = function(e) {
            var t = e.target;
            this.referenceElement.contains(t) || this.popoverElement.contains(t) || this.hide()
        }, t.prototype._hideOnEscapePress = function(e) {
            27 === e.which && this.popoverElement.classList.contains("is-visible") && (this.popoverElement.contains(e.target) && this.referenceElement.focus(), this.hide())
        }, t.prototype._toggleOptionalClasses = function(e) {
            if (this.data.has("toggle-class")) {
                var t = this.referenceElement.classList;
                this.data.get("toggle-class").split(/\s+/).forEach(function(n) {
                    t.toggle(n, e)
                })
            }
        }, t
    }(Stacks.StacksController), e.targets = [], e))
}();
var __extends = this && this.__extends || function() {
    var e = function(t, n) {
        return (e = Object.setPrototypeOf || {
                "__proto__": []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            })(t, n)
    };
    return function(t, n) {
        function o() {
            this.constructor = t
        }
        e(t, n), t.prototype = null === n ? Object.create(n) : (o.prototype = n.prototype, new o)
    }
}();
! function() {
    function e(e) {
        var t = n(e);
        if (!(t instanceof Array)) throw "shouldn't happen";
        return t
    }

    function t(e) {
        if (!(e.parentElement && e.parentElement.parentElement instanceof HTMLTableSectionElement)) throw "invalid table";
        var t = n(e.parentElement.parentElement, e);
        if ("number" != typeof t) throw "shouldn't happen";
        return t
    }

    function n(e, t) {
        for (var n = [], o = e.children[0], i = [], r = []; o || r.some(function(e) {
                return 0 !== e
            });) {
            var a = [];
            n.push(a);
            var s = 0;
            if (o)
                for (var c = 0; c < o.children.length; c++) {
                    for (; r[s];) r[s]--, a[s] = i[s], s++;
                    var l = o.children[c];
                    if (!(l instanceof HTMLTableCellElement)) throw "invalid table";
                    if ("none" !== getComputedStyle(l).display) {
                        if (l === t) return s;
                        for (var u = s + l.colSpan; u > s; s++) r[s] = l.rowSpan - 1, i[s] = l, a[s] = l
                    }
                }
            for (; s < i.length;) r[s] && (r[s]--, a[s] = i[s]), s++;
            o && (o = o.nextElementSibling)
        }
        return t ? -1 : n
    }
    var o;
    Stacks.application.register("s-table", (o = function(n) {
        function o() {
            return null !== n && n.apply(this, arguments) || this
        }
        return __extends(o, n), o.prototype.setCurrentSort = function(e, t) {
            if (["asc", "desc", "none"].indexOf(t) < 0) throw "direction must be one of asc, desc, or none";
            var n = this;
            this.columnTargets.forEach(function(o) {
                var i = o === e;
                o.classList.toggle("is-sorted", i && "none" !== t), o.querySelectorAll(".js-sorting-indicator").forEach(function(e) {
                    var n = i ? t : "none";
                    e.classList.toggle("d-none", !e.classList.contains("js-sorting-indicator-" + n))
                }), i && "none" !== t ? n.setElementData(o, "sort-direction", t) : n.removeElementData(o, "sort-direction")
            })
        }, o.prototype.sort = function(n) {
            var o = this,
                i = n.currentTarget;
            if (!(i instanceof HTMLTableCellElement)) throw "invalid event target";
            var r = this.element,
                a = r.tBodies[0],
                s = t(i);
            if (!(0 > s)) {
                var c, l = e(a),
                    u = "asc" === this.getElementData(i, "sort-direction") ? -1 : 1,
                    d = Array.from(r.tBodies[0].rows),
                    p = !1,
                    f = [];
                d.forEach(function(e, t) {
                    var n = o.getElementData(e, "sort-to");
                    if ("top" !== n) {
                        if ("bottom" === n) return c || (c = e), void 0;
                        var i = l[t][s];
                        if (!i) return f.push(["", t]), void 0;
                        var r = o.getElementData(i, "sort-val"),
                            a = "string" == typeof r ? r : i.textContent.trim();
                        "" !== a && parseInt(a, 10) + "" !== a && (p = !0), f.push([a, t])
                    }
                }), p || f.forEach(function(e) {
                    e[0] = "" === e[0] ? Number.MIN_VALUE : parseInt(e[0], 10)
                }), f.sort(function(e, t) {
                    return e[0] > t[0] ? 1 * u : e[0] < t[0] ? -1 * u : e[1] > t[1] ? 1 : -1
                }), f.forEach(function(e) {
                    var t = d[e[1]];
                    t.parentElement.removeChild(t), c ? a.insertBefore(t, c) : a.appendChild(t)
                }), this.setCurrentSort(i, 1 === u ? "asc" : "desc")
            }
        }, o
    }(Stacks.StacksController), o.targets = ["column"], o))
}(), Stacks._initializing = !1,
    function() {
        Stacks.addController("se-char-counter", {
            "targets": ["field", "output"],
            "connect": function() {
                $(this.fieldTarget).charCounter({
                    "min": +(this.data.get("min") || "0"),
                    "max": +(this.data.get("max") || "0"),
                    "target": $(this.outputTarget),
                    "setIsValid": this.setIsValid.bind(this)
                })
            },
            "setIsValid": function(e) {
                var t = "data-is-valid-length",
                    n = $(this.fieldTarget);
                "true" !== this.data.get("allow-empty") || n.val() || (e = !0);
                var o = e.toString();
                n.attr(t) !== o && (n.attr(t, o), this.triggerEvent("validated"))
            }
        })
    }(),
    function() {
        var e, t, n, o = function() {
            e = t = null, $("body").removeClass("c-move")
        };
        Stacks.addController("se-draggable", {
            "targets": ["handle"],
            "connect": function() {
                if (!StackExchange.options.isMobile && this.hasHandleTarget) {
                    var i = $(this.element),
                        r = $(this.handleTarget);
                    r.hasClass("c-move") || r.addClass("c-move"), r.unbind("mousedown").bind("mousedown", function(n) {
                        i.css({
                            "minWidth": i.outerWidth()
                        });
                        var o = i.offset();
                        t = {
                            "x": o.left - n.pageX,
                            "y": o.top - n.pageY
                        }, e = i;
                        var r = e.offset();
                        e.offset(r).offset(r), $("body").addClass("c-move"), n.preventDefault()
                    }), n || (n = !0, $(document).on("mousemove", function(n) {
                        if (e) {
                            e.removeClass("responsively-horizontally-centered-legacy-popup");
                            var o = n.pageY + t.y,
                                i = n.pageX + t.x;
                            e.offset({
                                "top": o,
                                "left": i
                            })
                        }
                    }).on("keypress", o).on("mouseup", o))
                }
            }
        })
    }(),
    function() {
        function e() {
            return "se-share-sheet-" + t++
        }
        var t = 0,
            n = !1;
        Stacks.addController("se-share-sheet", {
            get $el() {
                return $(this.element)
            },
            get controlId() {
                var t = this.$el.attr("aria-controls");
                return t || (t = e(), this.$el.attr("aria-controls", t)), t
            },
            get $sheet() {
                var e = this.controlId,
                    t = $("#" + e);
                return 0 === t.length && (t = this.generateSheet(e), this.$el.after(t)), t
            },
            get location() {
                return +this.data.get("location") || 0
            },
            "initialize": function() {
                function e(e, n) {
                    var o = t.attr(e) || ""; - 1 === o.indexOf(n) && t.attr(e, o + " " + n)
                }
                var t = this.$el;
                this.updateSheet(!1), e("data-action", "s-popover#toggle"), e("data-action", this.identifier + "#preventNavigation"), e("data-action", "s-popover:show->" + this.identifier + "#willShow"), e("data-action", "s-popover:shown->" + this.identifier + "#didShow"), e("data-controller", "s-popover")
            },
            "generateSheet": function(e) {
                var t = $('<div class="s-popover z-dropdown" style="width: unset; max-width: 28em;"><div class="s-popover--arrow"></div></div>').attr("id", e).append('<div><span class="js-title fw-bold"></span> <span class="js-subtitle"></span></div>').append('<div class="my8"><input type="text" class="js-input s-input wmn3 sm:wmn-initial" readonly /></div>').append('<div class="d-flex jc-space-between mbn4"><button class="js-copy-link-btn s-btn s-btn__link"></button><div class="js-social-container"></div></div>').insertAfter($(this.element));
                return t.find(".js-copy-link-btn").text("Copy link").click(this.copy.bind(this)), t.find(".js-input").on("copy", this.didCopy.bind(this)), t
            },
            "willShow": function() {
                this.updateSheet(!0)
            },
            "didShow": function() {
                var e = this.$sheet.find(".js-input");
                setTimeout(function() {
                    e.focus().select()
                });
                var t = this.location;
                t && StackExchange.gps.track("share.show", {
                    "location": t
                })
            },
            "copy": function() {
                var e = this;
                this.tryCopy().then(function() {
                    StackExchange.helpers.showToast($("<span>").text("Link copied to clipboard."), {
                        "transientTimeout": 3e3,
                        "type": "success"
                    }), e.didCopy()
                }, function() {
                    StackExchange.helpers.showToast($("<span>").text("Could not copy link to clipboard."), {
                        "transientTimeout": 5e3,
                        "type": "danger"
                    })
                })
            },
            "didCopy": function() {
                if (!n) {
                    var e = this.location;
                    e && StackExchange.gps.track("share.click", {
                        "location": e,
                        "service": 6
                    })
                }
            },
            "tryCopy": function() {
                var e = this.$sheet.find(".js-input");
                if (navigator.clipboard) return navigator.clipboard.writeText(e.val());
                e.focus().select();
                var t;
                n = !0;
                try {
                    t = document.execCommand("copy")
                } catch (o) {
                    t = !1
                }
                n = !1;
                var i = $.Deferred();
                return t ? i.resolve() : i.reject(), i.promise()
            },
            "preventNavigation": function(e) {
                e.ctrlKey || e.metaKey || e.preventDefault()
            },
            "updateSheet": function(e) {
                this.triggerEvent("update");
                var t = this.$sheet;
                t.find(".js-title").text(this.data.get("title") || "Copy and share this link:"), t.find(".js-subtitle").text(this.data.get("subtitle") || ""), t.find(".js-input").val(this.element.href), t.find(".js-social-container").empty();
                var n = this.data.get("post-type");
                if (e && ("question" === n || "answer" === n)) {
                    var o = (this.data.get("social") || "").split(/\s+/); - 1 !== o.indexOf("facebook") && this.addSocialComponent("question" === n, "Facebook", Svg.Facebook.With("native"), "Share on Facebook", 2, StackExchange.share.facebook), -1 !== o.indexOf("twitter") && this.addSocialComponent("question" === n, "Twitter", Svg.Twitter.With("native"), "Share on Twitter", 3, StackExchange.share.twitter), -1 !== o.indexOf("devto") && this.addSocialComponent("question" === n, "DEV", Svg.DevTo.With("native"), "Share on DEV", 5, StackExchange.share.devTo)
                }
            },
            "addSocialComponent": function(e, t, n, o, i, r) {
                var a = e ? function(e) {
                        return "Share link to this question on " + e.socialNetwork
                    }({
                        "socialNetwork": t
                    }) : function(e) {
                        return "Share link to this answer on " + e.socialNetwork
                    }({
                        "socialNetwork": t
                    }),
                    s = $("<button>", {
                        "class": "s-btn p4",
                        "role": "button",
                        "title": a,
                        "aria-label": o
                    }).append(n),
                    c = $("#question-header a.question-hyperlink").text(),
                    l = e ? c : function(e) {
                        return "Answer: " + e.title
                    }({
                        "title": c
                    });
                r(s, this.element.href, l, "2");
                var u = this.location;
                s.click(function() {
                    u && StackExchange.gps.track("share.click", {
                        "location": u,
                        "service": i
                    })
                }).appendTo(this.$sheet.find(".js-social-container"))
            }
        })
    }(), StackExchange.InlineAuth = function() {
        var e = {
            "using_universal_ui": !1,
            "getSsrc": function(e) {
                var t = $('#login-form input[name="ssrc"]'),
                    n = void 0;
                return t && 1 === t.length && (n = t.val()), n || (n = e), n
            },
            "init": function() {
                var t = [],
                    n = [],
                    o = [],
                    i = [],
                    r = [],
                    a = null,
                    s = null,
                    c = null,
                    l = null;
                this.setOAuthInfo("", "");
                var u = function(e, t, n) {
                    if (!StackExchange.options.isMobile) return StackExchange.helpers.showMessage(e, t, n);
                    if (0 === e.next(".form-error").length) {
                        var o = $('<div class="form-error">').append($('<div class="message-text">').html(t));
                        return e.after(o), o
                    }
                };
                $("#openid-buttons").on("click", ".js-major-provider", function(t) {
                    var n = $(this).data("provider");
                    if (n) {
                        var o = !1;
                        StackExchange.using("gps", function() {
                            StackExchange.gps.track("signup.start", {
                                "openid_provider": n,
                                "location": e.getSsrc("signup_inline"),
                                "tid": StackExchange.options.user.tid
                            }, !0)
                        }), o = !0, e.signin($(this), t, o)
                    }
                });
                var d = $("#se-login-fields");
                $(d).on("keyup", "input[name=inline-password],input[name=inline-display-name],input[name=inline-email]", function(e) {
                    var t = $(e.target);
                    if (!t.data("entered")) {
                        var n = "signup." + t.attr("name").replace("display-", "") + ".entered";
                        t.data("entered", !0), StackExchange.using("gps", function() {
                            StackExchange.gps.track(n, {}, !0)
                        })
                    }
                }), $("#se-login-fields").on("click", "input[name=submit-button]", function() {
                    StackExchange.using("gps", function() {
                        StackExchange.gps.track("signup.se.click", {}, !0)
                    })
                }), $(".js-terms").on("click", "a[name=privacy],a[name=tos]", function(e) {
                    var t = $(e.target),
                        n = "signup." + t.attr("name") + ".click";
                    StackExchange.using("gps", function() {
                        StackExchange.gps.track(n, {}, !0)
                    })
                });
                var p = null,
                    f = null,
                    h = $("input.js-inline-signup"),
                    g = function() {
                        if (0 === h.val().length) {
                            var e = function(e) {
                                return e.pStart + "Password must contain at least eight characters, including:" + e.pEnd + " " + e.listStart + " " + e.itemStart + " letters " + e.itemEnd + " " + e.itemStart + " numbers " + e.itemEnd + " " + e.listEnd
                            }({
                                "pStart": "<p>",
                                "pEnd": "</p>",
                                "listStart": "<ul>",
                                "listEnd": "</ul>",
                                "itemStart": "<li>",
                                "itemEnd": "</li>"
                            });
                            j(n, {
                                "id": "pw-requirements",
                                "index": -1,
                                "attachTo": h,
                                "message": e
                            })
                        } else E(n, "pw-requirements"), T(!0);
                        for (var t = null, o = 0; o < n.length; o++)
                            if (t) {
                                var i = t.index,
                                    r = n[o].index;
                                i > r && (t = n[o])
                            } else t = n[o];
                        t ? p && f == t.attachTo ? p.find(".message-text").html(t.message) : (p && (p.remove(), f = null), f = t.attachTo, p = u(f, t.message, {
                            "position": w(f),
                            "css": {
                                "width": "250px;",
                                "color": "#fff"
                            },
                            "cssClass": "_black",
                            "closeOthers": !1,
                            "dismissable": !1,
                            "type": "info"
                        }), t.popup && t.popup.fadeOutAndRemove()) : p && (p.remove(), p = null, f = null)
                    };
                $('input.js-inline-signup, input[name="password2"]').on("keyup focus paste", g), $('input[name="submit-button"]').click(function() {
                    p && (p.remove(), p = null, f = null)
                });
                var m = $('<div class="caps-lock-warning"></div>').text("Caps lock is on"),
                    v = $("input.js-inline-signup"),
                    b = !1;
                v.keypress(function(e) {
                    var t = String.fromCharCode(e.which),
                        n = /[a-z]/i.test(t);
                    if (n) {
                        var o = t == t.toUpperCase();
                        b = o && !e.shiftKey
                    }
                    var i = document.msCapsLockWarningOff === !1,
                        r = i;
                    b && !r ? v.after(m) : m.remove()
                }), v.blur(function() {
                    m.remove()
                });
                var y = !1;
                $("#login-form input").blur(function(t) {
                    "" == $(t.target).val() || y || (StackExchange.gps.track("signup.start", {
                        "openid_provider": "Stack Exchange",
                        "location": e.getSsrc("signup_inline"),
                        "tid": StackExchange.options.user.tid
                    }, !0), y = !0)
                }), $("#login-form input[type='text'], #login-form input[type='password'], #login-form input[type='email']").keypress(function(e) {
                    return 13 === e.which ? ($("#submit-button").is(":hidden") ? $("#login-form").submit() : $("#login-form input[name='submit-button']").click(), e.preventDefault(), !1) : void 0
                });
                var k = function(e, t) {
                        if (e.length > 0) {
                            if (null != t) {
                                for (var n = !0, o = 0; o < e.length; o++)
                                    if (e[o].message == t.message) {
                                        n = !1;
                                        break
                                    }
                                e[0].changed = n
                            }
                            return e[0]
                        }
                        return null != t && t.popup && t.popup.fadeOutAndRemove(), null
                    },
                    w = function(e) {
                        return {
                            "my": e.data("error-my") || "left top",
                            "at": e.data("error-at") || "right center"
                        }
                    },
                    x = function(e) {
                        null != e && (e.popup || (e.popup = u(e.attachTo, e.message, {
                            "position": w(e.attachTo),
                            "css": {
                                "width": "120px;",
                                "color": "#fff"
                            },
                            "closeOthers": !1,
                            "dismissable": !1
                        })), e.changed && (r.push(e.popup), e.popup = u(e.attachTo, e.message, {
                            "position": w(e.attachTo),
                            "css": {
                                "width": "120px;",
                                "color": "#fff"
                            },
                            "closeOthers": !1,
                            "dismissable": !1
                        })))
                    },
                    S = function() {
                        for (var e = 0; e < r.length; e++) r[e] && r[e].fadeOutAndRemove();
                        r = []
                    },
                    C = function() {
                        x(a), x(s), x(l), x(c), setTimeout(S, StackExchange.options.isMobile ? 2e3 : 200)
                    },
                    E = function(e, t) {
                        for (var n = "all" === t, o = 0; o < e.length && (e[o].id != t && !n || (e[o].popup && r.push(e[o].popup), e.splice(o, 1), n)); o++);
                    };
                this.removeAllErrors = function() {
                    E(t, "all"), E(n, "all"), E(o, "all"), E(i, "all"), StackExchange.helpers.removeMessages(), StackExchange.options.isMobile && $(".form-error").remove()
                };
                var j = StackExchange.Auth.addOrUpdateError,
                    T = function(e) {
                        var t = $("input[name = 'inline-password']"),
                            o = 0 === $.trim(t.val()).length;
                        o && !e ? j(n, {
                            "id": "pw-empty",
                            "index": 0,
                            "attachTo": t,
                            "message": "Password cannot be empty."
                        }) : E(n, "pw-empty"), StackExchange.Auth.passwordStrengthValidation(t, n, E)
                    },
                    O = function() {
                        var e = $("input[name='inline-email']"),
                            n = 0 === $.trim(e.val()).length;
                        n ? j(t, {
                            "id": "em-empty",
                            "index": 0,
                            "attachTo": e,
                            "message": "Email cannot be empty."
                        }) : E(t, "em-empty")
                    },
                    _ = function() {
                        var e = $("#no-captcha-here iframe").length > 0;
                        if (e) {
                            var t = grecaptcha.getResponse().length > 0;
                            t ? E(i, "cp") : j(i, {
                                "id": "cp",
                                "index": 0,
                                "attachTo": $("#no-captcha-here"),
                                "message": "CAPTCHA response required."
                            })
                        }
                    },
                    P = function() {
                        var e = $.trim($("input[name='inline-email']").val()).toUpperCase(),
                            t = $("input[name='inline-display-name']"),
                            n = $.trim(t.val()).toUpperCase();
                        e === n && "" != e ? j(o, {
                            "id": "nm",
                            "index": 0,
                            "attachTo": t,
                            "message": "Name and email address must be different. If you don't want to enter a name, just leave it blank.",
                            "faileType": "name_email_same"
                        }) : E(o, "nm")
                    },
                    A = function() {
                        return T(), P(), _(), O(), a = k(t, a), s = k(n, s), c = k(o, c), l = k(i, l), null == a && null == s && null == c && null == l
                    },
                    I = !0;
                $("#login-form input[name='submit-button']").click(function() {
                    var e = {
                        "isSignup": !0
                    };
                    $("#login-form input").each(function(t, n) {
                        var o = $(n).attr("name");
                        o && (o = o.replace(/(\W|_)/gi, ""), e[o] = $(n).val())
                    }), $.ajax({
                        "url": "/users/login-or-signup/validation/track",
                        "data": e,
                        "type": "POST",
                        "complete": function() {
                            var e = A();
                            return I && ($("#login-form input").blur(function() {
                                A();
                                var e = $("#login-form input[name='inline-email']"),
                                    n = $.trim(e.val());
                                E(t, "em-ajax"), $.ajax({
                                    "type": "POST",
                                    "url": "/users/signup/email/validate",
                                    "data": {
                                        "email": n,
                                        "fkey": StackExchange.options.user.fkey
                                    },
                                    "success": function(n) {
                                        n.IsValid ? a = null : (j(t, {
                                            "id": "em-ajax",
                                            "index": 1,
                                            "attachTo": e,
                                            "message": n.ErrorMessage
                                        }), a = k(t, a))
                                    },
                                    "complete": function() {
                                        C()
                                    }
                                })
                            }), I = !1), e ? ($("#login-form").submit(), void 0) : (C(), void 0)
                        }
                    })
                })
            },
            "removeAllErrors": function() {},
            "signin": function(t, n, o) {
                function i(t, n) {
                    var o = "signup_inline";
                    n || StackExchange.using("gps", function() {
                        StackExchange.gps.track("signup.start", {
                            "openid_provider": t,
                            "location": e.getSsrc(o),
                            "tid": StackExchange.options.user.tid
                        }, !0)
                    }), t && (StackExchange.using("gps", function() {
                        StackExchange.gps.track("signup.openid.click", {
                            "openid_provider": t,
                            "location": o
                        }, !0)
                    }), StackExchange.using("gps", function() {
                        StackExchange.gps.track("openid.click", {
                            "openid_provider": t,
                            "location": o
                        }, !0)
                    }))
                }

                function r(e) {
                    var t = {
                        "name": e.data("provider")
                    };
                    return e.data("oauthserver") && (t.oauth_server = e.data("oauthserver")), e.data("oauthversion") && (t.oauth_version = e.attr("data-oauthversion")), t
                }
                var a = t.data ? r(t) : t;
                a && (i(a.name.replace(/_/g, " "), o), "2.0" === a.oauth_version && this.setOAuthInfo(a.oauth_version, a.oauth_server), $("#login-form").submit())
            },
            "setOAuthInfo": function(e, t) {
                $("#oauth_version").val(e), $("#oauth_server").val(t)
            }
        };
        return {
            "init": function() {
                e.init()
            }
        }
    }();