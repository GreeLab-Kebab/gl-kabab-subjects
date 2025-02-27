! function(e) {
    var n = {};

    function t(o) {
        if (n[o]) return n[o].exports;
        var i = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = n, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "https://static.quantcast.mgr.consensu.org/v25/", t(t.s = 22)
}([function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.isUnsupportedBrowser = n.isValidUrl = n.isValidNonIabVendorListUrl = n.isValidPublisherVendorListUrl = n.isValidMarkdownLink = n.isPositiveInt = n.isNonEmptyString = n.isObjectAllFalse = n.displayPersistentConsentLink = n.isArrayAllFalse = n.isObject = n.isArray = n.doCallbackApply = n.doCallback = n.executePendingCalls = n.CallbackArray = n.logWarning = n.logError = n.getJson = n.MILLISEC_DAY = void 0;
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = t(1),
        a = t(7),
        s = (n.MILLISEC_DAY = 864e5, n.getJson = function(e, n) {
            var t = new XMLHttpRequest;
            t.onreadystatechange = function() {
                n(t)
            }, t.open("GET", e.url), t.withCredentials = !!e.withCredentials, t.responseType = "json", t.send()
        }, n.logError = function(e, n) {
            console.error(e + ": " + n + (n && n.stack ? "\n" + n.stack : ""))
        }),
        r = (n.logWarning = function(e, n) {
            console.warn(e + ": " + n + (n && n.stack ? "\n" + n.stack : ""))
        }, n.CallbackArray = function() {
            return {
                cbArray: [],
                push: function(e) {
                    if ("function" != typeof e) throw "Should push only functions into Callback array. Trying to push " + (void 0 === e ? "undefined" : o(e));
                    var n = [].slice.call(arguments, 1);
                    this.cbArray.push({
                        func: e,
                        args: n
                    })
                },
                call: function() {
                    for (; this.cbArray.length > 0;) {
                        var e = this.cbArray.shift(),
                            n = [].slice.call(arguments);
                        this.asyncCall(e, n)
                    }
                    this.cbArray = []
                },
                asyncCall: function(e, n) {
                    setTimeout(function() {
                        e.func.apply(null, e.args.concat(n))
                    }, 0)
                },
                size: function() {
                    return this.cbArray.length
                }
            }
        }, n.executePendingCalls = function(e) {
            for (; e.length > 0;) try {
                var n = e.shift();
                if (!n) continue;
                window.__cmp.apply(null, n)
            } catch (e) {
                s("Error running pending call", e)
            }
        }, n.doCallback = function(e) {
            if ("function" == typeof e) return e.apply(null, [].slice.call(arguments, 1))
        }, n.doCallbackApply = function(e, n) {
            if ("function" == typeof e) return e.apply(null, n)
        }, n.isArray = function(e) {
            return e && "object" === (void 0 === e ? "undefined" : o(e)) && e.constructor === Array
        }),
        l = n.isObject = function(e) {
            return e && "object" === (void 0 === e ? "undefined" : o(e)) && e.constructor === Object
        };
    n.isArrayAllFalse = function(e) {
        return !!r(e) && e.every(function(e) {
            return !e
        })
    }, n.displayPersistentConsentLink = function(e) {
        if ((e && e.displayPersistentConsentLink || e.softOptInEnabled) && !document.querySelector(".qc-cmp-persistent-link")) {
            var n = i.PERSISTENT_LINK_POSITIONS[e.persistentConsentLinkLocation],
                t = document.createElement("a");
            t.addEventListener("click", function() {
                window.__cmp("displayConsentUi", 2, !0)
            }), t.innerHTML = i.COG_SVG_ICON + e.persistentConsentLinkLabel, t.classList.add("qc-cmp-persistent-link"), t.style.cssText = i.PERSISTENT_LINK_STYLE + n, document.getElementsByTagName("body")[0].appendChild(t)
        }
    }, n.isObjectAllFalse = function(e) {
        if (!l(e)) return !1;
        for (var n in e)
            if (Object.prototype.hasOwnProperty.call(e, n) && e[n]) return !1;
        return !0
    }, n.isNonEmptyString = function(e) {
        return e && e.length && e.trim()
    }, n.isPositiveInt = function(e) {
        return "number" == typeof e && isFinite(e) && Math.floor(e) === e && e >= 0
    }, n.isValidMarkdownLink = function(e) {
        if ("string" == typeof e) {
            var n = e.match(i.MARKDOWN_LINK_REGEX);
            return n && a.isUri(n[2])
        }
    }, n.isValidPublisherVendorListUrl = function(e) {
        return a.isUri(e) && -1 != e.indexOf("/.well-known/pubvendors.json")
    }, n.isValidNonIabVendorListUrl = function(e) {
        return a.isUri(e) && -1 != e.indexOf("/.well-known/noniab-vendorlist.json")
    }, n.isValidUrl = function(e) {
        return a.isUri(e)
    }, n.isUnsupportedBrowser = function() {
        return window.navigator.userAgent.match(/MSIE [2-9]\.(0|5)/)
    }
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    n.VENDOR_CONSENT_COOKIE_NAME = "euconsent", n.PUBLISHER_CONSENT_COOKIE_NAME = "eupubconsent", n.GOOGLE_CONSENT_COOKIE_NAME = "googlepersonalization", n.NONIABVENDOR_CONSENT_COOKIE_NAME = "noniabvendorconsent", n.BLOCKED_HASH_COOKIE_NAME = "_cmpBlockedVendorsHash", n.NON_IAB_HASH_COOKIE_NAME = "_cmpNonIabVendorsHash", n.REPROMPT_OPTIONS_COOKIE_NAME = "_cmpRepromptOptions", n.NOT_VALID_CMP_IDS = [0, 1], n.MAX_VALID_CMP_ID = 299, n.COOKIE_MAX_AGE = 33696e3, n.CONSENT_STRING_VERSION = 1, n.BETA_MAX_VENDOR_ID = 4020, n.MARKDOWN_LINK_REGEX = /^\[(.+)\]\((http\:\/\/.+|https\:\/\/.+)\)$/, n.DEFAULT_LANGUAGE = "en", n.PERSISTENT_LINK_POSITIONS = {
        1: "top: 0; left: 0; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;",
        2: "top: 0; right: 0; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;",
        3: "bottom: 0; right: 0; border-top-left-radius: 3px; border-top-right-radius: 3px;",
        4: "bottom: 0; left: 0; border-top-left-radius: 3px; border-top-right-radius: 3px;"
    }, n.PERSISTENT_LINK_STYLE = "cursor: pointer; position: fixed; background-color: #368bd6; padding: 5px 15px; color: #FFFFFF; display: flex; align-items: center; max-height: 30px; z-index: 2147483640;", n.COG_SVG_ICON = '<svg width="16px" height="17px" viewBox="0 0 16 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin-right: 5px; height: 17px;"><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="cog" fill="#FFFFFF" fill-rule="nonzero"><path d="M15.596917,9.98326938 L14.5041079,9.33798816 C14.5728064,8.7815386 14.5728064,8.2184614 14.5041079,7.66201184 L15.596917,7.01673062 C15.9178229,6.82726259 16.0726124,6.43742732 15.9670848,6.0741546 C15.5912871,4.78033611 14.9223646,3.61573153 14.0390021,2.66061113 C13.7831755,2.38401797 13.3749053,2.32348965 13.0525249,2.51384881 L11.9613243,3.15813608 C11.5248519,2.81840117 11.0481221,2.53648663 10.542482,2.31910255 L10.542482,1.02991108 C10.542482,0.648438733 10.2860522,0.316869683 9.92305592,0.229024792 C8.66155,-0.07632446 7.33871809,-0.0763587342 6.07694408,0.229024792 C5.71398131,0.316869683 5.457518,0.648404458 5.457518,1.02991108 L5.457518,2.31910255 C4.95187406,2.53647872 4.47514334,2.81839382 4.03867572,3.15813608 L2.94747511,2.51384881 C2.62506122,2.32348965 2.21679094,2.38401797 1.96099786,2.66061113 C1.07763542,3.61573153 0.40871289,4.78037038 0.0329152236,6.0741546 C-0.072612407,6.43742732 0.0821770899,6.82722832 0.403082962,7.01673062 L1.49589212,7.66201184 C1.42719356,8.2184614 1.42719356,8.7815386 1.49589212,9.33798816 L0.403082962,9.98326938 C0.0821770899,10.1727374 -0.072612407,10.5625727 0.0329152236,10.9258454 C0.40871289,12.2196296 1.07763542,13.3842685 1.96099786,14.3393889 C2.21682445,14.615982 2.62509474,14.6765103 2.94747511,14.4861855 L4.03867572,13.8418982 C4.47514096,14.1816349 4.95187243,14.4635389 5.457518,14.6808975 L5.457518,15.9700889 C5.457518,16.3515613 5.7139478,16.6831303 6.07694408,16.7709752 C7.33848351,17.0763245 8.66128191,17.0763587 9.92305592,16.7709752 C10.2860187,16.6831303 10.542482,16.3515955 10.542482,15.9700889 L10.542482,14.6808975 C11.0481183,14.4635198 11.5248475,14.1816171 11.9613243,13.8418982 L13.0525249,14.4861855 C13.3749053,14.6765446 13.7831755,14.6160163 14.0390021,14.3393889 C14.9223646,13.3842685 15.5912871,12.2196296 15.9670848,10.9258454 C16.0726124,10.5625727 15.9178229,10.1727717 15.596917,9.98326938 Z M13.4026193,13.4264943 L11.8507364,12.510001 C10.9463288,13.3007421 10.6255905,13.4997041 9.47011484,13.9172673 L9.47011484,15.7502196 C8.50024808,15.9548373 7.49975192,15.9548373 6.52988516,15.7502196 L6.52988516,13.9172673 C5.4031959,13.5101235 5.07699522,13.3210668 4.14926358,12.510001 L2.59738075,13.4264943 C1.9368696,12.6693763 1.43490124,11.7817076 1.12525522,10.8230912 L2.67780828,9.90659789 C2.4588108,8.69270694 2.45871027,8.30790999 2.67780828,7.09340211 L1.12525522,6.17690879 C1.43490124,5.21829242 1.93690311,4.33058946 2.59738075,3.57312864 L4.14926358,4.49030745 C5.0667072,3.68712478 5.39129933,3.4941265 6.52988516,3.08269846 L6.52988516,1.24978037 C7.49971774,1.04482059 8.50028226,1.04482059 9.47011484,1.24978037 L9.47011484,3.08273274 C10.6087677,3.49419505 10.9333933,3.6872276 11.8507364,4.49034172 L13.4026193,3.57316291 C14.0630969,4.33058946 14.5650988,5.21829242 14.8747448,6.17694306 L13.3221917,7.09343638 C13.5412227,8.3076358 13.5412897,8.69212428 13.3221917,9.90663217 L14.8747448,10.8231255 C14.5650988,11.7817076 14.0631304,12.6694105 13.4026193,13.4264943 Z M8,5.20968958 C6.22607014,5.20968958 4.78289853,6.68570996 4.78289853,8.50001714 C4.78289853,10.3143243 6.22607014,11.7903447 8,11.7903447 C9.77392986,11.7903447 11.2171015,10.3143243 11.2171015,8.50001714 C11.2171015,6.68570996 9.77392986,5.20968958 8,5.20968958 Z M8,10.6935688 C6.81738009,10.6935688 5.85526568,9.70955526 5.85526568,8.50001714 C5.85526568,7.29047902 6.81738009,6.30646543 8,6.30646543 C9.18261991,6.30646543 10.1447343,7.29047902 10.1447343,8.50001714 C10.1447343,9.70955526 9.18261991,10.6935688 8,10.6935688 Z" id="Shape"></path></g></g></svg>', n.THIRD_PARTY_COOKIE_CHECK_TIMEOUT = 3e3, n.THIRD_PARTY_COOKIE_MARK = "_cmpQcif3pcsupported", n.COOKIE_TYPE = {
        GROUP: "GROUP",
        FIRST_PARTY: "1p",
        THIRD_PARTY: "3p",
        LOCAL_STORAGE: "LOCAL_STORAGE"
    }, n.COOKIE_ACCESS_IFRAME_ID = "_qc_cookie_access", n.COOKIE_ACCESS_IFRAME_TIMEOUT = 50
}, function(e, n, t) {
    "use strict";
    var o;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.initializeConfig = n.getConfig = n.isParentOrSameDomain = n.isParentOrSamePath = n.isConfigInitialized = n.config = void 0;
    var i = t(0),
        a = t(1),
        s = t(5);

    function r(e, n, t) {
        return n in e ? Object.defineProperty(e, n, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[n] = t, e
    }
    var l = n.config = {},
        u = (n.isConfigInitialized = !1, function(e) {
            return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
        }),
        d = n.isParentOrSamePath = function(e, n) {
            return !!n.match(new RegExp("^" + u(e) + ("/" === e[e.length - 1] ? "" : "($|/)")))
        },
        c = n.isParentOrSameDomain = function(e, n) {
            return !!n.match(new RegExp("(^|\\.)" + u(e) + "$"))
        },
        E = (r(o = {
            pCode: {
                publicConfigKey: "PCode",
                getDefaultValue: function() {
                    return null
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            googlePersonalization: {
                publicConfigKey: "Google Personalization",
                getDefaultValue: function() {
                    return !0
                },
                isValidValue: function(e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            displayUi: {
                publicConfigKey: "Display UI",
                getDefaultValue: function() {
                    return window.__cmp.gdprAppliesGlobally ? "always" : "inEU"
                },
                isValidValue: function(e) {
                    var n = !1;
                    return ["never", "inEU", "always"].forEach(function(t) {
                        t === e && (n = !0)
                    }), n
                },
                validValue: "one of 'never', 'inEU', or 'always'"
            },
            uiLayout: {
                publicConfigKey: "UI Layout",
                getDefaultValue: function() {
                    return "popup"
                },
                isValidValue: function(e) {
                    var n = !1;
                    return ["popup", "banner"].forEach(function(t) {
                        t === e && (n = !0)
                    }), n
                },
                validValue: "one of 'popup', or 'banner'"
            },
            vendorListUpdateFreq: {
                publicConfigKey: "Min Days Between UI Displays",
                getDefaultValue: function() {
                    return 30
                },
                isValidValue: i.isPositiveInt,
                validValue: "a positive integer"
            },
            nonconsentDisplayFrequency: {
                publicConfigKey: "Non-Consent Display Frequency",
                getDefaultValue: function() {
                    return 1
                },
                isValidValue: i.isPositiveInt,
                validValue: "a positive integer"
            },
            cookieDomain: {
                publicConfigKey: "Cookie Domain",
                getDefaultValue: function() {
                    return window.location.hostname
                },
                isValidValue: function(e) {
                    return c(e, window.location.hostname)
                },
                validValue: "a parent of, or equal to, the current domain"
            },
            cookiePath: {
                publicConfigKey: "Cookie Path",
                getDefaultValue: function() {
                    return "/"
                },
                isValidValue: function(e) {
                    return d(e, window.location.pathname)
                },
                validValue: "a parent of, or equal to, the current URL's path"
            },
            consentScope: {
                publicConfigKey: "Consent Scope",
                getDefaultValue: function() {
                    return "global"
                },
                isValidValue: function(e) {
                    return ["global", "service", "global group", "service group"].includes(e)
                },
                validValue: "one of 'global', 'service', 'global group', 'service group'",
                hasDependency: function() {
                    var e = E.groupCookieAccessHostUrl.isValidValue(l.groupCookieAccessHostUrl) || E.consentScopeGroupURL.isValidValue(l.consentScopeGroupURL);
                    return ["global", "service"].includes(l.consentScope) ? {
                        dependentConfig: null,
                        isValid: !0,
                        invalidValueMessage: ""
                    } : e ? {
                        dependentConfig: E.groupCookieAccessHostUrl.isValidValue(l.groupCookieAccessHostUrl) ? E.groupCookieAccessHostUrl.publicConfigKey : E.consentScopeGroupURL.publicConfigKey,
                        isValid: !0,
                        invalidValueMessage: ""
                    } : (l.consentScope = "global group" === l.consentScope ? "global" : "service", {
                        dependentConfig: E.consentScopeGroupURL.publicConfigKey,
                        isValid: !1,
                        invalidValueMessage: E.consentScopeGroupURL.publicConfigKey + " must be " + E.consentScopeGroupURL.validValue + " when " + this.publicConfigKey + " is 'global group', or 'service group'. Resetting it to " + l.consentScope
                    })
                }
            },
            consentScopeGroupURL: {
                publicConfigKey: "Consent Scope Group URL",
                getDefaultValue: function() {
                    return ""
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty domain",
                hasDependency: function() {
                    return ["global group", "service group"].includes(l.consentScope) ? {
                        dependentConfig: E.consentScope.publicConfigKey,
                        isValid: !0,
                        invalidValueMessage: ""
                    } : {
                        dependentConfig: E.consentScope.publicConfigKey,
                        isValid: !1,
                        invalidValueMessage: E.consentScope.publicConfigKey + " should be either 'global group', or 'service group' for Group Url to be effective. Group Url will be ignored"
                    }
                }
            },
            rejectConsentRedirectUrl: {
                publicConfigKey: "Post Consent Page",
                getDefaultValue: function() {
                    return null
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            publisherName: {
                publicConfigKey: "Publisher Name",
                getDefaultValue: function() {
                    return "[Company Name]"
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            publisherPurposeIds: {
                publicConfigKey: "Publisher Purpose IDs",
                getDefaultValue: function() {
                    return []
                },
                isValidValue: function(e) {
                    return (0, i.isArray)(e) && e.reduce(function(e, n) {
                        return e && (0, i.isPositiveInt)(n)
                    }, !0)
                },
                validValue: "an array containing purpose ids"
            },
            publisherPurposeLegitimateInterestIds: {
                publicConfigKey: "Publisher Purpose Legitimate Interest IDs",
                getDefaultValue: function() {
                    return []
                },
                isValidValue: function(e) {
                    return (0, i.isArray)(e) && e.reduce(function(e, n) {
                        return e && (0, i.isPositiveInt)(n)
                    }, !0)
                },
                validValue: "an array containing only purpose ids listed in the Publisher Purpose IDs array",
                hasDependency: function() {
                    return l.publisherPurposeLegitimateInterestIds.every(function(e) {
                        return l.publisherPurposeIds.includes(e)
                    }) ? {
                        dependentConfig: E.publisherPurposeIds.publicConfigKey,
                        isValid: !0,
                        invalidValueMessage: ""
                    } : {
                        dependentConfig: E.publisherPurposeIds.publicConfigKey,
                        isValid: !1,
                        invalidValueMessage: "Publisher Purpose Legitimate Interest IDs must be an array containing only purpose IDs contained in the Publisher Purpose IDs array, the following purpose IDs will be ignored: " + l.publisherPurposeLegitimateInterestIds.filter(function(e) {
                            if (!l.publisherPurposeIds.includes(e)) return e
                        }).join(", ")
                    }
                }
            },
            publisherLogo: {
                publicConfigKey: "Publisher Logo",
                getDefaultValue: function() {
                    return ""
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            displayPersistentConsentLink: {
                publicConfigKey: "Display Persistent Consent Link",
                getDefaultValue: function() {
                    return !0
                },
                isValidValue: function(e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            softOptInEnabled: {
                publicConfigKey: "Soft Opt-in Enabled",
                getDefaultValue: function() {
                    return !1
                },
                isValidValue: function(e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            persistentConsentLinkLocation: {
                publicConfigKey: "Persistent Consent Link Location",
                getDefaultValue: function() {
                    return 3
                },
                isValidValue: function(e) {
                    return [1, 2, 3, 4].includes(e)
                },
                validValue: "one of the following values: {1, 2, 3, 4}"
            },
            defaultToggleValue: {
                publicConfigKey: "Default Value for Toggles",
                getDefaultValue: function() {
                    return "off"
                },
                isValidValue: function(e) {
                    return ["on", "off"].indexOf(e) >= 0
                },
                validValue: "one of either 'on', or 'off'"
            },
            language: {
                publicConfigKey: "Language",
                getValue: function(e) {
                    return e.toLowerCase()
                },
                getDefaultValue: function() {
                    return a.DEFAULT_LANGUAGE
                },
                isValidValue: function(e) {
                    return !(!e || !s.IAB_SUPPORTED_LANGUAGES.includes(e.toLowerCase()) && !s.QC_SUPPORTED_LANGUAGES.includes(e.toLowerCase()))
                },
                validValue: "one of the following languages: {" + s.IAB_SUPPORTED_LANGUAGES + "}"
            },
            softOptInAlertTitle: {
                publicConfigKey: "Soft Opt-in Alert Title Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "SOFT_OPT_IN_ALERT_TITLE_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            softOptInAlertBody: {
                publicConfigKey: "Soft Opt-in Alert Body Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "SOFT_OPT_IN_ALERT_BODY_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenTitle: {
                publicConfigKey: "Initial Screen Title Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_TITLE_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenBodyTextOption: {
                publicConfigKey: "Initial Screen Body Text Option",
                getDefaultValue: function() {
                    return 1
                },
                isValidValue: function(e) {
                    return [1, 2, 3, 4].includes(e)
                },
                validValue: "one of the following values: {1, 2, 3, 4}"
            },
            initScreenBody: {
                publicConfigKey: "Initial Screen Body Text",
                getDefaultValue: function() {
                    return l.publisherName + " and our partners use technology such as cookies on our site to personalize content and ads, provide social media features, and analyze our traffic. Click below to consent to the use of this technology by " + l.publisherName + " and these 3rd parties across the web. You can change your mind and revisit your consent choices at anytime by returning to this site."
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            customInitScreenBodyText: {
                publicConfigKey: "Custom Initial Screen Body Text",
                getDefaultValue: function() {
                    return ""
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenRejectButton: {
                publicConfigKey: "Initial Screen Reject Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_REJECT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenRejectButtonAsLink: {
                publicConfigKey: "Display No Button as Link",
                getDefaultValue: function() {
                    return !1
                },
                isValidValue: function(e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            initScreenRejectButtonShowing: {
                publicConfigKey: "No Option",
                getDefaultValue: function() {
                    return !0
                },
                isValidValue: function(e) {
                    return "boolean" == typeof e
                },
                validValue: "a boolean"
            },
            initScreenSettingsButton: {
                publicConfigKey: "Initial Screen Settings Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_SETTINGS_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenAcceptButton: {
                publicConfigKey: "Initial Screen Accept Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_ACCEPT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenPurposeLink: {
                publicConfigKey: "Initial Screen Purpose Link Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_PURPOSE_LINK_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            initScreenCustomLinks: {
                publicConfigKey: "Custom Links Displayed on Initial Screen",
                getDefaultValue: function() {
                    return []
                },
                isValidValue: function(e) {
                    return e.length <= 2 && e.every(function(e) {
                        return (0, i.isValidMarkdownLink)(e)
                    })
                },
                validValue: 'an array of 2 or fewer markdown links: "[link text](url)"'
            },
            initScreenAttributionText: {
                publicConfigKey: "Initial Screen Attribution Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_ATTRIBUTION_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenHeaderTitle: {
                publicConfigKey: "Purpose Screen Header Title Text",
                getDefaultValue: function() {
                    return "Privacy Settings"
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenTitle: {
                publicConfigKey: "Purpose Screen Title Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSE_SCREEN_TITLE_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenBody: {
                publicConfigKey: "Purpose Screen Body Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSE_SCREEN_BODY_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenEnableAllButtonLabel: {
                publicConfigKey: "Purpose Screen Enable All Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "ACCEPT_ALL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenDisableAllButtonLabel: {
                publicConfigKey: "Purpose Screen Disable All Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "REJECT_ALL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenVendorLink: {
                publicConfigKey: "Purpose Screen Vendor Link Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSE_SCREEN_VENDOR_LINK_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenCancelButton: {
                publicConfigKey: "Purpose Screen Cancel Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSE_SCREEN_CANCEL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposeScreenSaveAndExitButton: {
                publicConfigKey: "Purpose Screen Save and Exit Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenTitle: {
                publicConfigKey: "Vendor Screen Title Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VENDOR_SCREEN_TITLE_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenBody: {
                publicConfigKey: "Vendor Screen Body Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VENDOR_SCREEN_BODY_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenRejectAllButton: {
                publicConfigKey: "Vendor Screen Reject All Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "REJECT_ALL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenAcceptAllButton: {
                publicConfigKey: "Vendor Screen Accept All Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "ACCEPT_ALL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenPurposesLink: {
                publicConfigKey: "Vendor Screen Purposes Link Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VENDOR_SCREEN_PURPOSES_LINK_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenCancelButton: {
                publicConfigKey: "Vendor Screen Cancel Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VENDOR_SCREEN_CANCEL_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorScreenSaveAndExitButton: {
                publicConfigKey: "Vendor Screen Save and Exit Button Text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            vendorWhiteBlackList: {
                publicConfigKey: "Vendor White List or Black List",
                getDefaultValue: function() {
                    return {}
                },
                isValidValue: function(e) {
                    if (void 0 === e.isWhitelist || "boolean" != typeof e.isWhitelist) return !1;
                    if (!(0, i.isArray)(e.vendorIds) || !e.vendorIds.length) return !1;
                    for (var n = 0; n < e.vendorIds.length; n++)
                        if (!(0, i.isPositiveInt)(e.vendorIds[n])) return !1;
                    return !0
                },
                validValue: "{ isWhitelist: <true/false>, vendorIds: <an array of vendor ID> }"
            },
            publisherVendorListUrl: {
                publicConfigKey: "Publisher Vendor List URL",
                getDefaultValue: function() {
                    return ""
                },
                isValidValue: i.isValidPublisherVendorListUrl,
                validValue: "a valid URL containing /.well-known/pubvendors.json"
            },
            nonIabVendorListUrl: {
                publicConfigKey: "Non IAB Vendor List URL",
                getDefaultValue: function() {
                    return ""
                },
                isValidValue: i.isValidNonIabVendorListUrl,
                validValue: "a valid URL containing /.well-known/noniab-vendorlist.json"
            },
            backLabel: {
                publicConfigKey: "Back Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "BACK_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            persistentConsentLinkLabel: {
                publicConfigKey: "Persistent Consent Link Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "CONSENT_LINK_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non empty string"
            },
            viewCompaniesLabel: {
                publicConfigKey: "View Companies Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "VIEW_COMPANIES_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            hideCompaniesLabel: {
                publicConfigKey: "Hide Companies Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "HIDE_COMPANIES_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            thirdPartyVendorsLabel: {
                publicConfigKey: "Third Party Vendors Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "THIRD_PARTY_VENDORS_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            onLabel: {
                publicConfigKey: "On Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "ON_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            offLabel: {
                publicConfigKey: "Off Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "OFF_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            offOnLabel: {
                publicConfigKey: "Off On Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "OFF_ON_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            companyLabel: {
                publicConfigKey: "Company Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "COMPANY_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            otherLabel: {
                publicConfigKey: "Other",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "OTHER")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            nonIabVendorsLabel: {
                publicConfigKey: "Non-IAB Vendors",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "NON_IAB_TITLE")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            googlePurposesText: {
                publicConfigKey: "Google purposes text",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "GOOGLE_PURPOSES_TEXT")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            featuresLabel: {
                publicConfigKey: "Feature Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "FEATURES_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            descriptionLabel: {
                publicConfigKey: "Description",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "DESCRIPTION")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            requiredLabel: {
                publicConfigKey: "Required Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "REQUIRED_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            privacyPolicyLabel: {
                publicConfigKey: "Privacy Policy Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PRIVACY_POLICY_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            },
            purposesLabel: {
                publicConfigKey: "Purposes Label",
                getDefaultValue: function() {
                    return (0, s.getTranslationOrDefault)(l.language, "PURPOSES_LABEL")
                },
                isValidValue: i.isNonEmptyString,
                validValue: "a non-empty string"
            }
        }, "featuresLabel", {
            publicConfigKey: "Features Label",
            getDefaultValue: function() {
                return (0, s.getTranslationOrDefault)(l.language, "FEATURES_LABEL")
            },
            isValidValue: i.isNonEmptyString,
            validValue: "a non-empty string"
        }), r(o, "legitimateInterestPurposesLabel", {
            publicConfigKey: "Legitimate Interest Purposes Label",
            getDefaultValue: function() {
                return (0, s.getTranslationOrDefault)(l.language, "LEGITIMATE_INTEREST_PURPOSES_LABEL")
            },
            isValidValue: i.isNonEmptyString,
            validValue: "a non-empty string"
        }), r(o, "groupCookieAccessHostUrl", {
            publicConfigKey: "Group Hosted HTML Cookie Access URL",
            getDefaultValue: function() {
                return null
            },
            isValidValue: i.isValidUrl,
            validValue: "a valid URL",
            hasDependency: function() {
                return ["global group", "service group"].includes(l.consentScope) ? {
                    dependentConfig: E.consentScope.publicConfigKey,
                    isValid: !0,
                    invalidValueMessage: ""
                } : {
                    dependentConfig: E.consentScope.publicConfigKey,
                    isValid: !1,
                    invalidValueMessage: E.consentScope.publicConfigKey + " should be either 'global group', or 'service group' for Group Hosted HTML Cookie Access URL to be effective. Group Hosted HTML Cookie Access URL will be ignored"
                }
            }
        }), o);
    n.getConfig = function() {
        var e = {};
        if ("external" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "external")) {
            for (var n in l) e[E[n].publicConfigKey] = l[n];
            return e
        }
        return l
    }, n.initializeConfig = function(e) {
        for (var t in e = e || {}, E) {
            var o = e[E[t].publicConfigKey];
            if (void 0 !== o)
                if (E[t].isValidValue(o)) void 0 !== E[t].getValue ? l[t] = E[t].getValue(o) : l[t] = o;
                else {
                    l[t] = E[t].getDefaultValue();
                    var i = E[t].publicConfigKey,
                        a = o + " is not a valid value for the config option " + i + ". ",
                        r = i + " must be " + E[t].validValue;
                    console.warn(a + r)
                }
            else l[t] = E[t].getDefaultValue()
        }
        for (var t in E)
            if (e[E[t].publicConfigKey] && E[t].hasDependency) {
                var u = E[t].hasDependency();
                u.isValid || console.warn("Dependency check failed for " + E[t].publicConfigKey + ": " + u.invalidValueMessage)
            }! function(e) {
            var n = e[E.initScreenBodyTextOption.publicConfigKey],
                t = e[E.language.publicConfigKey],
                o = e[E.initScreenBody.publicConfigKey];
            if (e[E.softOptInEnabled.publicConfigKey]) l.initScreenBody = (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_BODY_TEXT").softOptIn;
            else if (4 === n) {
                var i = JSON.parse(l.customInitScreenBodyText);
                l.initScreenBody = i[l.language], void 0 === l.initScreenBody && (l.initScreenBody = i.en)
            } else {
                if (E.initScreenBodyTextOption.isValidValue(n) && E.language.isValidValue(t)) return void(l.initScreenBody = (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_BODY_TEXT")[l.initScreenBodyTextOption]);
                E.initScreenBody.isValidValue(o) || (l.initScreenBody = l.initScreenBody = (0, s.getTranslationOrDefault)(l.language, "INIT_SCREEN_BODY_TEXT")[l.initScreenBodyTextOption])
            }
        }(e), n.isConfigInitialized = !0
    };
    n.default = l
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = t(2),
        i = t(0),
        a = t(4),
        s = t(1),
        r = t(6),
        l = t(0),
        u = null,
        d = null,
        c = window.localStorage,
        E = {},
        p = {},
        T = {},
        _ = !1,
        f = !1,
        g = void 0,
        h = function(e, n, t, o) {
            if (n && n.trim()) {
                n = n.trim();
                var i = m(n);
                i.isNonGDPRCookie || i.isRepromptOptionsCookie ? C(n, t, o) : !_ || i.isGlobalGroupVendorCookie || i.isNonGroupConsent ? null == e || "" === e ? C(n, t, o) : S(e, n, t, o) : k("set", n, t, o)
            } else "function" == typeof o && o({
                status: "error",
                message: "Cookie name cannot be empty"
            }, !1)
        },
        N = function(e, n, t) {
            if (n && n.trim())
                if (n = n.trim(), void 0 == E[n]) {
                    var o = m(n);
                    if (o.isNonGDPRCookie || o.isRepromptOptionsCookie) return O(n, t);
                    if (!_ || o.isGlobalGroupVendorCookie || o.isNonGroupConsent) {
                        if (null == e || "" === e) return O(n, t);
                        L(e, n, t)
                    } else k("get", n, void 0, t)
                } else "function" == typeof t && t(E[n], !0);
            else "function" == typeof t && t({
                status: "error",
                message: "Cookie name cannot be empty"
            }, !1)
        },
        m = function(e) {
            var n = (0, o.getConfig)("internal");
            return {
                isNonGroupConsent: "service" === n.consentScope || "global" === n.consentScope,
                isGlobalGroupVendorCookie: e === s.VENDOR_CONSENT_COOKIE_NAME && "global group" === n.consentScope,
                isNonGDPRCookie: e === s.GOOGLE_CONSENT_COOKIE_NAME || e === s.NONIABVENDOR_CONSENT_COOKIE_NAME,
                isRepromptOptionsCookie: e === s.REPROMPT_OPTIONS_COOKIE_NAME
            }
        },
        C = function(e, n, t) {
            if (e && e.trim()) {
                e = e.trim();
                var i = new Date(Date.now() + 1e3 * s.COOKIE_MAX_AGE).toUTCString(),
                    a = (0, o.getConfig)("internal");
                document.cookie = e + "=" + n + ";path=" + a.cookiePath + ";max-age=" + s.COOKIE_MAX_AGE + ";expires=" + i + ";domain=" + a.cookieDomain, E[e] = {
                    value: n,
                    status: "found"
                }, (0, r.logSetCookieEvent)({
                    type: s.COOKIE_TYPE.FIRST_PARTY,
                    name: e,
                    value: n
                }), "function" == typeof t && t(E[e], !0)
            } else "function" == typeof t && t({
                status: "error",
                message: "empty cookie name"
            }, !1)
        },
        O = function(e, n) {
            if (e && e.trim()) {
                e = e.trim();
                var t = document.cookie.split(";").filter(function(n) {
                        return n.trim().startsWith(e + "=")
                    }).map(function(n) {
                        return n.trim().substring(e.length + 1)
                    }),
                    o = I(e, t);
                return E[e] = {
                    value: o,
                    status: o ? "found" : "notfound"
                }, "function" == typeof n && n(E[e], !0), E[e]
            }
            "function" == typeof n && n({
                status: "error",
                message: "empty cookie name"
            }, !1)
        },
        I = function(e, n) {
            var t;
            if ((0, i.isArray)(n) && 0 !== n.length) {
                if (e === s.VENDOR_CONSENT_COOKIE_NAME) t = a.VendorConsentAccess;
                else if (e === s.NONIABVENDOR_CONSENT_COOKIE_NAME) t = a.NonIabVendorConsentAccess;
                else if (e === s.PUBLISHER_CONSENT_COOKIE_NAME) t = a.PublisherConsentAccess;
                else if (e === s.GOOGLE_CONSENT_COOKIE_NAME) t = a.GoogleConsentAccess;
                else {
                    if (e !== s.REPROMPT_OPTIONS_COOKIE_NAME) return e === s.BLOCKED_HASH_COOKIE_NAME || e === s.NON_IAB_HASH_COOKIE_NAME ? n[0] : void 0;
                    t = a.RepromptOptionsAccess
                }
                for (var o, r, l = 0; l < n.length; l++) {
                    var u = new t,
                        d = n[l];
                    if (u.setAll(d)) {
                        var c = u.getLastUpdated();
                        (void 0 === o || c > o) && (o = c, r = d)
                    }
                }
                return r
            }
        },
        S = function(e, n, t, o) {
            if (e && n && n.trim()) {
                n = n.trim();
                var i = new XMLHttpRequest;
                i.onreadystatechange = function() {
                    v(n, t, i, o)
                }, i.open("POST", e), i.setRequestHeader("Content-Type", "application/json"), i.withCredentials = !0;
                var a = {};
                a[n] = t, i.send(JSON.stringify(a)), (0, r.logSetCookieEvent)({
                    type: s.COOKIE_TYPE.THIRD_PARTY,
                    name: n,
                    value: t
                })
            } else "function" == typeof o && o({
                status: "error",
                message: "Could not set cookie for " + n + " using api : " + e
            }, !1)
        },
        L = function(e, n, t) {
            e && n && n.trim() ? (n = n.trim(), p[n] ? p[n].push(t) : (p[n] = new i.CallbackArray, p[n].push(t), (0, i.getJson)({
                url: e,
                withCredentials: !0
            }, function(e) {
                y(n, e, function(e, t) {
                    p[n].call(e, t), p[n] = void 0
                })
            }))) : "function" == typeof t && t({
                status: "error",
                message: "Could not get cookie for " + n + " using api : " + e
            }, !1)
        },
        v = function(e, n, t, o) {
            if (4 === t.readyState) {
                var i, a = !0;
                if (200 === t.status ? i = E[e] = {
                        value: n,
                        status: "found"
                    } : ((0, l.logWarning)("Setting cookie for " + e + " with value " + n + " failed with httpRequest status", t.status), i = {
                        status: "error"
                    }, a = !1), 404 === t.status) return !1;
                "function" == typeof o && o(i, a)
            }
        },
        y = function(e, n, t) {
            if (4 === n.readyState) {
                var o, a = !0;
                if (200 === n.status) {
                    var s = {};
                    if ("string" == typeof n.response) try {
                        s = JSON.parse(n.response)
                    } catch (e) {
                        (0, i.logError)("error parsing cookie response", e)
                    } else s = n.response;
                    s ? o = s[e] ? E[e] = {
                        value: s[e],
                        status: "found"
                    } : E[e] = {
                        value: null,
                        status: "notfound"
                    } : (o = E[e] = {
                        value: void 0,
                        status: "error"
                    }, a = !1)
                } else 404 === n.status ? o = E[e] = {
                    value: null,
                    status: "notfound"
                } : ((0, i.logError)("error fetching cookie response for " + e + " with status ", n.status), o = E[e] = {
                    value: void 0,
                    status: "error"
                }, a = !1);
                "function" == typeof t && t(o, a)
            }
        },
        k = function e(n, t, o, i) {
            f ? A(n, t, o, i) : setTimeout(function() {
                e(n, t, o, i)
            }, s.COOKIE_ACCESS_IFRAME_TIMEOUT)
        },
        A = function(e, n, t, i) {
            var a = Math.random().toString(),
                r = {
                    callId: a,
                    __qcCmpCookieAccessCall: {
                        cmd: e,
                        cookieName: n
                    }
                },
                l = (0, o.getConfig)("internal");
            if ("set" === e) {
                T[a] = {
                    cb: i,
                    cookieName: n,
                    cookieValue: t
                };
                var u = new Date(Date.now() + 1e3 * s.COOKIE_MAX_AGE).toUTCString();
                r.__qcCmpCookieAccessCall.cookieValue = t, r.__qcCmpCookieAccessCall.cookiePath = l.cookiePath, r.__qcCmpCookieAccessCall.expires = u, E[n] = {
                    value: t,
                    status: "found"
                }
            } else T[a] = {
                cb: i,
                cookieName: n
            };
            g.contentWindow.postMessage(r, "*")
        },
        b = function(e, n) {
            var t = document.body,
                o = document.createElement("iframe");
            o.src = e, o.style.display = "none", o.id = n, t.appendChild(o), g = o
        },
        R = function(e) {
            var n, t = "string" == typeof e.data,
                a = (0, o.getConfig)("internal");
            if ((n = t ? -1 !== e.data.indexOf("__qcCmpCookieAccessReturn") ? JSON.parse(e.data) : {} : e.data).__qcCmpCookieAccessReturn) {
                if (n.__qcCmpCookieAccessReturn.isHandlerRegistered) return void(f = !0);
                var l = n.__qcCmpCookieAccessReturn,
                    u = T[n.callId];
                if (u.cb) {
                    if ("get" === l.cmd) {
                        var d = l.isSuccess ? I(u.cookieName, l.cookies) : null;
                        E[u.cookieName] = {
                            value: d,
                            status: l.isSuccess && d ? "found" : "notfound"
                        }, (0, i.doCallback)(u.cb, E[u.cookieName], !0)
                    } else(0, i.doCallback)(u.cb, E[u.cookieName], !0);
                    delete T[n.callId]
                }(0, r.logSetCookieEvent)({
                    type: s.COOKIE_TYPE.GROUP,
                    name: u.cookieName,
                    value: u.cookieValue,
                    cookieDomain: a.cookieDomain
                })
            }
        },
        P = function(e, n, t, i) {
            var a = (0, o.getConfig)("internal");
            try {
                c.setItem(e, n), "function" == typeof t && t(c.getItem(e), null !== c.getItem(e) && "" !== c.getItem(e)), i && (document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; max-age=-1; domain=" + a.cookieDomain), (0, r.logSetCookieEvent)({
                    type: s.COOKIE_TYPE.LOCAL_STORAGE,
                    name: e,
                    value: n
                })
            } catch (o) {
                h(null, e, n, t)
            }
        },
        V = function(e, n) {
            var t = c.getItem(e),
                i = N(null, e, null),
                a = (0, o.getConfig)("internal");
            return t && "function" == typeof n ? (i && i.value && (document.cookie = e + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; max-age=-1; domain=" + a.cookieDomain), n(t, null !== t && "" !== t)) : !t && i.value || t && i.value ? P(e, i.value, n, !0) : "function" == typeof n && n(null, !1), t || i.value
        },
        B = {
            isGlobalScope: !1,
            cookie: E,
            setPublisherConsentCookie: function(e, n) {
                e && e.trim() ? h(d, s.PUBLISHER_CONSENT_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty publisher purpose cookie value"
                }, !1)
            },
            fetchPublisherConsentCookie: function(e) {
                N(d, s.PUBLISHER_CONSENT_COOKIE_NAME, e)
            },
            setVendorConsentCookie: function(e, n) {
                e && e.trim() ? h(u, s.VENDOR_CONSENT_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty vendor purpose cookie value"
                }, !1)
            },
            fetchVendorConsentCookie: function(e) {
                N(u, s.VENDOR_CONSENT_COOKIE_NAME, e)
            },
            setGoogleConsentCookie: function(e, n) {
                e && e.trim() ? h(null, s.GOOGLE_CONSENT_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty google consent cookie value"
                }, !1)
            },
            setNonIabVendorCookie: function(e, n) {
                e && e.trim() ? h(null, s.NONIABVENDOR_CONSENT_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set nonIabVendor consent cookie value"
                }, !1)
            },
            fetchGoogleConsentCookie: function(e) {
                N(null, s.GOOGLE_CONSENT_COOKIE_NAME, e)
            },
            fetchNonIabConsentCookie: function(e) {
                N(null, s.NONIABVENDOR_CONSENT_COOKIE_NAME, e)
            },
            setNonIabVendorsHashValue: function(e, n) {
                e && e.trim() ? P(s.NON_IAB_HASH_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty vendor hash cookie value"
                }, !1)
            },
            fetchNonIabVendorsHashValue: function(e) {
                V(s.NON_IAB_HASH_COOKIE_NAME, e)
            },
            setBlockedVendorsHashValue: function(e, n) {
                e && e.trim() ? P(s.BLOCKED_HASH_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty vendor hash cookie value"
                }, !1)
            },
            fetchBlockedVendorsHashValue: function(e) {
                V(s.BLOCKED_HASH_COOKIE_NAME, e)
            },
            setRepromptOptionsValue: function(e, n) {
                e && e.trim() ? P(s.REPROMPT_OPTIONS_COOKIE_NAME, e, n) : "function" == typeof n && n({
                    status: "error",
                    message: "cannot set empty reprompt consent cookie value"
                }, !1)
            },
            fetchRepromptOptionsValue: function(e) {
                V(s.REPROMPT_OPTIONS_COOKIE_NAME, e)
            },
            init: function(e, n) {
                if (e && (e.groupCookieAccessHostUrl && (_ = !0, window.addEventListener ? window.addEventListener("message", R, !1) : window.attachEvent("onmessage", R), b(e.groupCookieAccessHostUrl, s.COOKIE_ACCESS_IFRAME_ID)), n)) {
                    var t = _ || e.consentScopeGroupURL && "" !== e.consentScopeGroupURL,
                        o = e.groupCookieAccessHostUrl || e.consentScopeGroupURL;
                    switch (e.consentScope) {
                        case "global group":
                            "" === e.publisherVendorListUrl ? (u = "https://api.quantcast.mgr.consensu.org/CookieAccess", this.isGlobalScope = !0) : t ? (u = o, this.isGlobalScope = !1) : (u = null, this.isGlobalScope = !1), d = t ? o : null;
                            break;
                        case "global":
                            "" === e.publisherVendorListUrl ? (u = "https://api.quantcast.mgr.consensu.org/CookieAccess", this.isGlobalScope = !0) : (u = null, this.isGlobalScope = !1), d = null;
                            break;
                        case "service group":
                            u = d = t ? o : null, this.isGlobalScope = !1;
                            break;
                        case "service":
                        default:
                            u = null, d = null, this.isGlobalScope = !1
                    }
                }
            }
        };
    n.default = B
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.PublisherConsentAccess = n.NonIabVendorConsentAccess = n.VendorConsentAccess = n.ConsentAccess = n.RepromptOptionsAccess = n.GoogleConsentAccess = void 0;
    var o = t(1),
        i = t(0),
        a = {
            CMP_ID: 10,
            LOWERCASE_START: "a".charCodeAt(0),
            PAD_ZEROS: "00000000000000000000000000000000000000000000000000",
            BITFIELD_ENCODING: 0,
            RANGES_ENCODING: 1
        },
        s = function() {
            this.binaryStr = "", this.addField = function(e, n, t) {
                var o = (e + 0 || 0).toString(2);
                if (o.length < n) o = a.PAD_ZEROS.substr(0, n - o.length) + o;
                else if (o.length > n) throw new Error("Encountered an overflow setting cookie field " + t);
                this.binaryStr += o
            }
        },
        r = function(e) {
            this.fieldSizes = e, this.fields = {}
        };
    r.prototype.build = function(e, n) {
        var t = this.encodeBinary(e, n),
            o = this.binaryToBytes(t);
        return this.toWebSafeBase64(o)
    }, r.prototype.setAll = function(e) {
        var n = this.fromWebSafeBase64(e),
            t = this.bytesToBinary(n);
        return this.decodeBinary(t)
    }, r.prototype.bytesToBinary = function(e) {
        for (var n = "", t = ["0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"], o = function(e) {
                return t[e >>> 4 & 15] + t[15 & e]
            }, i = 0; i < e.length; i++) n += o(e.charCodeAt(i));
        return {
            string: n,
            atPos: 0,
            getBits: function(e) {
                var n = parseInt(this.string.substr(this.atPos, e), 2);
                return this.atPos += e, n
            }
        }
    }, r.prototype.binaryToBytes = function(e) {
        var n = "";
        e += a.PAD_ZEROS.substr(0, 7 - (e.length + 7) % 8);
        for (var t = 0; t < e.length; t += 8) n += String.fromCharCode(parseInt(e.substr(t, 8), 2));
        return n
    }, r.prototype.toWebSafeBase64 = function(e) {
        return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
    }, r.prototype.fromWebSafeBase64 = function(e) {
        return atob(e.replace(/-/g, "+").replace(/_/g, "/"))
    }, r.prototype.languageFromCookieValue = function(e) {
        return String.fromCharCode(a.LOWERCASE_START + e / 64 >>> 0) + String.fromCharCode(a.LOWERCASE_START + e % 64)
    }, r.prototype.languageToCookieValue = function(e) {
        return 64 * (e.charCodeAt(0) - a.LOWERCASE_START) + (e.charCodeAt(1) - a.LOWERCASE_START)
    }, r.prototype.dateFromDeciseconds = function(e) {
        return new Date(100 * e)
    }, r.prototype.dateToDeciseconds = function(e) {
        return Math.floor(e.getTime() / 100)
    }, r.prototype.decodeSharedFields = function(e) {
        var n = this.fieldSizes,
            t = e.getBits(n.version);
        if (t != o.CONSENT_STRING_VERSION) throw new Error("Cookie version " + t + " is not supported");
        var i = {
            version: t,
            created: this.dateFromDeciseconds(e.getBits(n.created)),
            lastUpdated: this.dateFromDeciseconds(e.getBits(n.lastUpdated)),
            cmpId: e.getBits(n.cmpId),
            cmpVersion: e.getBits(n.cmpVersion)
        };
        return i.cmpVersion >= Math.pow(2, n.cmpVersionOld) && (e.atPos -= n.cmpVersion, i.cmpVersion = e.getBits(n.cmpVersionOld)), i.consentScreen = e.getBits(n.consentScreen), i.consentLanguage = this.languageFromCookieValue(e.getBits(n.consentLanguage)), i.vendorListVersion = e.getBits(n.vendorListVersion), i
    }, r.prototype.encodeSharedFields = function(e) {
        var n = this.fieldSizes,
            t = new s;
        if (e.version != o.CONSENT_STRING_VERSION) throw new Error("version " + e.version + " not supported");
        return t.addField(e.version, n.version, "version"), t.addField(this.dateToDeciseconds(e.created), n.created, "created"), t.addField(this.dateToDeciseconds(e.lastUpdated), n.lastUpdated, "lastUpdated"), t.addField(e.cmpId, n.cmpId, "cmpId"), t.addField(e.cmpVersion, n.cmpVersion, "cmpVersion"), t.addField(e.consentScreen, n.consentScreen, "consentScreen"), t.addField(this.languageToCookieValue(e.consentLanguage || "en"), n.consentLanguage, "consentLanguage"), t.addField(e.vendorListVersion, n.vendorListVersion, "vendorListVersion"), t
    };
    var l = {
        created: 36,
        lastUpdated: 36,
        cmpId: 12,
        cmpVersion: 12,
        maxVendorId: 16
    };

    function u() {
        r.call(this, l)
    }
    u.prototype = Object.create(r.prototype), u.prototype.constructor = u, u.prototype.decodeBinary = function(e) {
        for (var n = this.fieldSizes, t = {
                created: this.dateFromDeciseconds(e.getBits(n.created)),
                lastUpdated: this.dateFromDeciseconds(e.getBits(n.lastUpdated)),
                cmpId: e.getBits(n.cmpId),
                cmpVersion: e.getBits(n.cmpVersion),
                maxVendorId: e.getBits(n.maxVendorId)
            }, o = t.maxVendorId, i = new Array(o + 1), a = 0; a < o; a++) i[a + 1] = "1" == e.string.charAt(e.atPos + a);
        return t.vendorConsents = i, t
    }, u.prototype.encodeBinary = function(e, n) {
        var t = this.fieldSizes,
            o = e.vendorConsents,
            i = new s;
        if (i.addField(this.dateToDeciseconds(e.created), t.created, "created"), i.addField(this.dateToDeciseconds(e.lastUpdated), t.lastUpdated, "lastUpdated"), i.addField(e.cmpId, t.cmpId, "cmpId"), i.addField(e.cmpVersion, t.cmpVersion, "cmpVersion"), n) return i.binaryStr;
        i.addField(e.maxVendorId, t.maxVendorId, "maxVendorId");
        for (var a = 1; a <= e.maxVendorId; a++) i.binaryStr += o[a] ? "1" : "0";
        return i.binaryStr
    };
    var d = {
        version: 6,
        created: 36,
        lastUpdated: 36,
        cmpId: 12,
        cmpVersion: 12,
        cmpVersionOld: 6,
        consentScreen: 6,
        consentLanguage: 12,
        vendorListVersion: 12,
        purposesAllowed: 24,
        maxVendorId: 16,
        encodingType: 1,
        numEntries: 12,
        defaultConsent: 1,
        isRange: 1,
        startVendorId: 16,
        endVendorId: 16
    };

    function c() {
        r.call(this, d)
    }
    c.prototype = Object.create(r.prototype), c.prototype.constructor = c, c.prototype.decodeBinary = function(e) {
        var n = this.fieldSizes,
            t = this.decodeSharedFields(e);
        t.purposesAllowed = e.getBits(n.purposesAllowed), t.maxVendorId = e.getBits(n.maxVendorId), t.encodingType = e.getBits(n.encodingType);
        var o = t.maxVendorId,
            i = new Array(o + 1);
        if (t.encodingType == a.BITFIELD_ENCODING) {
            var s = e.string.length - e.atPos;
            if (s < o) throw new Error("Incorrect bitfield size: " + s + " < " + o);
            for (var r = 0; r < o; r++) i[r + 1] = "1" == e.string.charAt(e.atPos + r)
        } else {
            t.defaultConsent = 1 == e.getBits(n.defaultConsent);
            for (r = 0; r < o; r++) i[r + 1] = t.defaultConsent;
            t.numEntries = e.getBits(n.numEntries);
            for (r = 0; r < t.numEntries; r++) {
                var l = 1 == e.getBits(n.isRange),
                    u = e.getBits(n.startVendorId),
                    d = l ? e.getBits(n.endVendorId) : u;
                if (e.atPos > e.string.length) throw new Error("Not enough bits for numEntries in ranges");
                if (u > d || d > o) throw new Error("Invalid vendorId range: " + u + "-" + d + ". The max valid vendorId is: " + o);
                for (var c = u; c <= d; c++) i[c] = !t.defaultConsent
            }
        }
        return t.vendorConsents = i, t
    }, c.prototype.encodeRanges = function(e) {
        for (var n, t, o = this.fieldSizes, i = new s, a = e.vendorConsents, r = !!a[1], l = !1, u = e.maxVendorId, d = 0, c = 2; c <= u; c++) {
            var E = !!a[c] != !!r;
            if (E && (l || (n = c, l = !0), t = c), l && (!E || c == u)) {
                d++;
                var p = t > n;
                if (i.addField(p ? 1 : 0, o.isRange, "isRange"), i.addField(n, o.startVendorId, "startVendorId"), p && i.addField(t, o.endVendorId, "endVendorId"), 13 + i.binaryStr.length > u) return null;
                l = !1
            }
        }
        return {
            binary: i,
            defaultConsent: r ? 1 : 0,
            numEntries: d
        }
    }, c.prototype.encodeBinary = function(e, n) {
        var t = this.fieldSizes,
            o = e.vendorConsents,
            i = this.encodeSharedFields(e);
        if (n) return i.binaryStr;
        i.addField(e.purposesAllowed, t.purposesAllowed, "purposesAllowed"), i.addField(e.maxVendorId, t.maxVendorId, "maxVendorId");
        var s = this.encodeRanges(e);
        if (e.encodingType = s ? a.RANGES_ENCODING : a.BITFIELD_ENCODING, i.addField(e.encodingType, t.encodingType, "encodingType"), e.encodingType == a.BITFIELD_ENCODING)
            for (var r = 1; r <= e.maxVendorId; r++) i.binaryStr += o[r] ? "1" : "0";
        else e.defaultConsent = s.defaultConsent, e.numEntries = s.numEntries, i.addField(e.defaultConsent, t.defaultConsent, "defaultConsent"), i.addField(e.numEntries, t.numEntries, "numEntries"), i.binaryStr += s.binary.binaryStr;
        return i.binaryStr
    };
    var E = {
        created: 36,
        lastUpdated: 36,
        consentValue: 1
    };

    function p() {
        r.call(this, E)
    }
    p.prototype = Object.create(r.prototype), p.prototype.constructor = p, p.prototype.encodeRanges = function(e) {
        return {
            binary: new s,
            consentValue: e.consentValue ? 1 : 0
        }
    }, p.prototype.encodeBinary = function(e, n) {
        var t = this.fieldSizes,
            o = new s;
        if (o.addField(this.dateToDeciseconds(e.created), t.created, "created"), o.addField(this.dateToDeciseconds(e.lastUpdated), t.lastUpdated, "lastUpdated"), n) return o.binaryStr;
        var i = this.encodeRanges(e);
        return e.consentValue = i.consentValue, o.addField(e.consentValue, t.consentValue, "consentValue"), o.binaryStr += i.binary.binaryStr, o.binaryStr
    }, p.prototype.decodeBinary = function(e) {
        var n = this.fieldSizes;
        return {
            created: this.dateFromDeciseconds(e.getBits(n.created)),
            lastUpdated: this.dateFromDeciseconds(e.getBits(n.lastUpdated)),
            consentValue: e.getBits(n.consentValue)
        }
    };
    var T = n.GoogleConsentAccess = function() {
        this.data = new p, this.fields = {}
    };
    T.prototype.getConsentValue = function() {
        return this.fields.consentValue
    }, T.prototype.getCreated = function() {
        return this.fields.created
    }, T.prototype.getLastUpdated = function() {
        return this.fields.lastUpdated
    }, T.prototype.setConsentValue = function(e) {
        this.fields.consentValue = e
    }, T.prototype.initializeFields = function(e) {
        void 0 === this.fields.created && (this.fields.created = new Date), (e || void 0 === this.fields.lastUpdated) && (this.fields.lastUpdated = new Date)
    }, T.prototype.build = function() {
        return this.initializeFields(!0), this.data.build(this.fields, !1)
    };
    var _ = {};
    T.prototype.setAll = function(e) {
        var n = !0;
        if (!e) return !1;
        if (_[e]) this.fields = _[e];
        else try {
            this.fields = this.data.setAll(e), _[e] = this.fields
        } catch (t) {
            (0, i.logError)("Error parsing cookie: " + e, t), n = !1
        }
        return n
    }, T.prototype.getMetadata = function(e) {
        return e ? (this.initializeFields(!1), this.data.build(this.fields, !0)) : {
            consentValue: this.fields.consentValue,
            created: this.fields.created,
            lastUpdated: this.fields.lastUpdated
        }
    };
    var f = {
        created: 36,
        lastUpdated: 36,
        initScreenBodyTextOption: 3
    };

    function g() {
        r.call(this, f)
    }
    g.prototype = Object.create(r.prototype), g.prototype.constructor = g, g.prototype.encodeRanges = function(e) {
        return {
            binary: new s,
            initScreenBodyTextOption: e.initScreenBodyTextOption
        }
    }, g.prototype.encodeBinary = function(e, n) {
        var t = this.fieldSizes,
            o = new s;
        if (o.addField(this.dateToDeciseconds(e.created), t.created, "created"), o.addField(this.dateToDeciseconds(e.lastUpdated), t.lastUpdated, "lastUpdated"), n) return o.binaryStr;
        var i = this.encodeRanges(e);
        return e.initScreenBodyTextOption = i.initScreenBodyTextOption, o.addField(e.initScreenBodyTextOption, t.initScreenBodyTextOption, "initScreenBodyTextOption"), o.binaryStr += i.binary.binaryStr, o.binaryStr
    }, g.prototype.decodeBinary = function(e) {
        var n = this.fieldSizes;
        return {
            created: this.dateFromDeciseconds(e.getBits(n.created)),
            lastUpdated: this.dateFromDeciseconds(e.getBits(n.lastUpdated)),
            initScreenBodyTextOption: e.getBits(n.initScreenBodyTextOption)
        }
    };
    var h = n.RepromptOptionsAccess = function() {
        this.data = new g, this.fields = {}
    };
    h.prototype.getInitScreenBodyTextOption = function() {
        return this.fields.initScreenBodyTextOption
    }, h.prototype.getCreated = function() {
        return this.fields.created
    }, h.prototype.getLastUpdated = function() {
        return this.fields.lastUpdated
    }, h.prototype.setInitScreenBodyTextOption = function(e) {
        this.fields.initScreenBodyTextOption = e
    }, h.prototype.initializeFields = function(e) {
        void 0 === this.fields.created && (this.fields.created = new Date), (e || void 0 === this.fields.lastUpdated) && (this.fields.lastUpdated = new Date)
    }, h.prototype.build = function() {
        return this.initializeFields(!0), this.data.build(this.fields, !1)
    };
    var N = {};
    h.prototype.setAll = function(e) {
        var n = !0;
        if (!e) return !1;
        if (N[e]) this.fields = N[e];
        else try {
            this.fields = this.data.setAll(e), N[e] = this.fields
        } catch (t) {
            (0, i.logError)("Error parsing cookie: " + e, t), n = !1
        }
        return n
    }, h.prototype.getMetadata = function(e) {
        return e ? (this.initializeFields(!1), this.data.build(this.fields, !0)) : {
            initScreenBodyTextOption: this.fields.initScreenBodyTextOption,
            created: this.fields.created,
            lastUpdated: this.fields.lastUpdated
        }
    };
    var m = n.ConsentAccess = function(e, n) {
        this.data = e, this.fields = n
    };
    m.prototype.getVersion = function() {
        return this.fields.version
    }, m.prototype.getCreated = function() {
        return this.fields.created
    }, m.prototype.getLastUpdated = function() {
        return this.fields.lastUpdated
    }, m.prototype.getCmpId = function() {
        return this.fields.cmpId
    }, m.prototype.getCmpVersion = function() {
        return this.fields.cmpVersion
    }, m.prototype.getConsentScreen = function() {
        return this.fields.consentScreen
    }, m.prototype.setConsentScreen = function(e) {
        this.fields.consentScreen = e
    }, m.prototype.getVendorListVersion = function() {
        return this.fields.vendorListVersion
    }, m.prototype.setVendorListVersion = function(e) {
        this.fields.vendorListVersion = e
    }, m.prototype._setPurposeConsent = function(e, n, t) {
        var o = 1 << this.data.fieldSizes[t] - n;
        this.fields[t] = e ? this.fields[t] | o : this.fields[t] & ~o
    }, m.prototype._getPurposeConsent = function(e, n) {
        var t = this.data.fieldSizes;
        if (e) {
            var o = 1 << t[n] - e;
            return 0 != (this.fields[n] & o)
        }
        for (var i = {}, a = 1; a < t[n] + 1; a++) {
            o = 1 << t[n] - a;
            i[a] = 0 != (this.fields[n] & o)
        }
        return i
    }, m.prototype.initializeFields = function(e) {
        (e || void 0 === this.fields.version) && (this.fields.version = o.CONSENT_STRING_VERSION), (e || void 0 === this.fields.cmpId) && (this.fields.cmpId = a.CMP_ID), (e || void 0 === this.fields.cmpVersion) && (this.fields.cmpVersion = 25), void 0 === this.fields.created && (this.fields.created = new Date), (e || void 0 === this.fields.lastUpdated) && (this.fields.lastUpdated = new Date)
    }, m.prototype.build = function() {
        return this.initializeFields(!0), this.data.build(this.fields, !1)
    };
    var C = {};
    m.prototype.setAll = function(e) {
        var n = !0;
        if (!e) return !1;
        if (C[e]) this.fields = C[e];
        else try {
            this.fields = this.data.setAll(e), C[e] = this.fields
        } catch (t) {
            (0, i.logError)("Error parsing cookie: " + e, t), n = !1
        }
        return n
    }, m.prototype.getMetadata = function(e) {
        return e ? (this.initializeFields(!1), this.data.build(this.fields, !0)) : {
            version: this.fields.version,
            created: this.fields.created,
            lastUpdated: this.fields.lastUpdated,
            cmpId: this.fields.cmpId,
            cmpVersion: this.fields.cmpVersion,
            consentScreen: this.fields.consentScreen,
            consentLanguage: this.fields.consentLanguage,
            vendorListVersion: this.fields.vendorListVersion
        }
    };
    var O = n.VendorConsentAccess = function() {
        m.call(this, new c, {
            vendorConsents: []
        })
    };
    O.prototype = Object.create(m.prototype), O.prototype.constructor = O, O.prototype.setPurposeConsent = function(e, n) {
        this._setPurposeConsent(e, n, "purposesAllowed")
    }, O.prototype.getPurposeConsent = function(e) {
        return this._getPurposeConsent(e, "purposesAllowed")
    }, O.prototype.getMaxVendorId = function(e) {
        return this.fields.maxVendorId
    }, O.prototype.setMaxVendorId = function(e) {
        this.fields.maxVendorId = e
    }, O.prototype.getVendorConsent = function(e) {
        if (!(e > this.fields.maxVendorId)) return e ? !!this.fields.vendorConsents[e] : this.fields.vendorConsents
    }, O.prototype.setVendorConsent = function(e, n) {
        this.fields.vendorConsents[n] = !!e
    };
    var I = n.NonIabVendorConsentAccess = function() {
        m.call(this, new u, {
            vendorConsents: []
        })
    };
    I.prototype = Object.create(m.prototype), I.prototype.constructor = I, I.prototype.getMaxVendorId = function(e) {
        return this.fields.maxVendorId
    }, I.prototype.setMaxVendorId = function(e) {
        this.fields.maxVendorId = e
    }, I.prototype.getVendorConsent = function(e) {
        return !(e > this.fields.maxVendorId) && (e ? !!this.fields.vendorConsents[e] : this.fields.vendorConsents)
    }, I.prototype.setVendorConsent = function(e, n) {
        this.fields.vendorConsents[n] = !!e
    };
    var S = {
        version: 6,
        created: 36,
        lastUpdated: 36,
        cmpId: 12,
        cmpVersion: 12,
        cmpVersionOld: 6,
        consentScreen: 6,
        consentLanguage: 12,
        vendorListVersion: 12,
        publisherPurposesVersion: 12,
        standardPurposesAllowed: 24,
        numberCustomPurposes: 6
    };

    function L() {
        r.call(this, S)
    }
    L.prototype = Object.create(r.prototype), L.prototype.constructor = L, L.prototype.decodeBinary = function(e) {
        var n = this.fieldSizes,
            t = this.decodeSharedFields(e);
        t.publisherPurposesVersion = e.getBits(n.publisherPurposesVersion), t.standardPurposesAllowed = e.getBits(n.standardPurposesAllowed), t.numberCustomPurposes = e.getBits(n.numberCustomPurposes);
        for (var o = new Array(t.numberCustomPurposes + 1), i = 0; i < t.numberCustomPurposes; i++) o[i + 1] = "1" == e.string.charAt(e.atPos + i);
        return t.customPurposeConsents = o, t
    }, L.prototype.encodeBinary = function(e, n) {
        var t = this.fieldSizes,
            o = this.encodeSharedFields(e);
        if (o.addField(e.publisherPurposesVersion, t.publisherPurposesVersion, "publisherPurposesVersion"), n) return o.binaryStr;
        o.addField(e.standardPurposesAllowed, t.standardPurposesAllowed, "standardPurposesAllowed"), o.addField(e.numberCustomPurposes, t.numberCustomPurposes, "numberCustomPurposes");
        for (var i = 1; i <= e.numberCustomPurposes; i++) o.binaryStr += e.customPurposeConsents[i] ? "1" : "0";
        return o.binaryStr
    };
    var v = n.PublisherConsentAccess = function() {
        m.call(this, new L, {
            customPurposeConsents: []
        })
    };
    v.prototype = Object.create(m.prototype), v.prototype.constructor = v, v.prototype.setStandardPurposeConsent = function(e, n) {
        this._setPurposeConsent(e, n, "standardPurposesAllowed")
    }, v.prototype.getStandardPurposeConsent = function(e) {
        return this._getPurposeConsent(e, "standardPurposesAllowed")
    }, v.prototype.getNumberCustomPurposes = function() {
        return this.fields.numberCustomPurposes
    }, v.prototype.setNumberCustomPurposes = function(e) {
        this.fields.numberCustomPurposes = e
    }, v.prototype.setCustomPurposeConsent = function(e, n) {
        this.fields.customPurposeConsents[n] = !!e
    }, v.prototype.getCustomPurposeConsent = function(e) {
        return !!this.fields.customPurposeConsents[e]
    }
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.TRANSLATIONS = n.getTranslationOrDefault = n.QC_SUPPORTED_LANGUAGES = n.IAB_SUPPORTED_LANGUAGES = void 0;
    var o = t(1),
        i = (n.IAB_SUPPORTED_LANGUAGES = ["bg", "cs", "da", "de", "el", "en", "es", "et", "fi", "fr", "ga", "hr", "hu", "it", "lt", "lv", "mt", "nl", "no", "pl", "pt", "ro", "sk", "sl", "sv"], n.QC_SUPPORTED_LANGUAGES = ["da", "de", "el", "en", "es", "fi", "fr", "hu", "it", "nl", "no", "pl", "pt", "ro", "sk", "sv", "ru", "ar", "fa"], n.getTranslationOrDefault = function(e, n) {
            return i[e] && i[e][n] ? i[e][n] : i[o.DEFAULT_LANGUAGE][n]
        }, n.TRANSLATIONS = {
            en: {
                INIT_SCREEN_TITLE_TEXT: "We value your privacy",
                INIT_SCREEN_BODY_TEXT: {
                    1: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site.",
                    2: "We and our partners process your personal data, such as IP addresses and cookie identifiers, using technology such as cookies in order to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Click below to consent or to choose which Partners process your data and for what Purposes. You can make changes to your settings at any time.",
                    3: "The quality content and information we provide to you depends on the revenue we generate from advertising. We and our partners use your personal data, such as IP addresses and cookie identifiers, in order to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Click below to consent to the use of cookies and the processing of your data. You can revisit your choices at any time.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MORE OPTIONS",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "I do not accept",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "I accept",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Show Purposes",
                INIT_SCREEN_ATTRIBUTION_TEXT: "Powered by",
                PURPOSE_SCREEN_TITLE_TEXT: "We value your privacy",
                PURPOSE_SCREEN_BODY_TEXT: "You can set your consent preferences and determine how you want your data to be used based on the purposes below. You may set your preferences for us independently from those of third-party partners. Each purpose has a description so that you know how we and partners use your data.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "See Vendors",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Cancel",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Save & Exit",
                VENDOR_SCREEN_TITLE_TEXT: "We value your privacy",
                VENDOR_SCREEN_BODY_TEXT: "You can set consent preferences for individual third-party partners we work with below. Expand each company list item to see what purposes they use data for to help make your choices. In some cases, companies may use your data without asking for your consent, based on their legitimate interests. You can click on their privacy policy links for more information and to object to such processing.",
                REJECT_ALL_BUTTON_TEXT: "Reject all",
                ACCEPT_ALL_BUTTON_TEXT: "Accept all",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Back to Purposes",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Cancel",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Save & Exit",
                CONSENT_LINK_LABEL: "Privacy",
                BACK_LABEL: "Back",
                VIEW_COMPANIES_LABEL: "View Companies",
                HIDE_COMPANIES_LABEL: "Hide Companies",
                THIRD_PARTY_VENDORS_LABEL: "Third Party Vendors",
                ON_LABEL: "On",
                OFF_LABEL: "Off",
                OFF_ON_LABEL: "Off/On",
                OTHER: "Other",
                COMPANY_LABEL: "Company",
                NON_IAB_TITLE: "Non-IAB Vendors",
                DESCRIPTION: "Vendor Description:",
                REQUIRED_LABEL: "Required",
                PRIVACY_POLICY_LABEL: "Privacy Policy: ",
                PURPOSES_LABEL: "Purposes (Consent)",
                FEATURES_LABEL: "Features",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Purposes (Legitimate Interests)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong> button.",
                GOOGLE_PURPOSES_TEXT: "Allow Google and their technology partners to collect data and use cookies for ad personalisation and measurement."
            },
            fr: {
                INIT_SCREEN_TITLE_TEXT: "Le respect de votre vie privée est notre priorité",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Nos partenaires et nous-mêmes exploitons différentes technologies, telles que celle des cookies, et traitons vos données à caractère personnel, telles que les adresses IP et les identifiants de cookie, afin de personnaliser les publicités et les contenus en fonction de vos centres d’intérêt, d’évaluer la performance de ces publicités et contenus, et de recueillir des informations sur les publics qui les ont visionnés. Cliquez ci-dessous si vous consentez à l’utilisation de cette technologie et au traitement de vos données à caractère personnel en vue de ces objectifs. Vous pouvez changer d’avis et modifier votre consentement à tout moment en revenant sur ce site.",
                    2: "Nos partenaires et nous-mêmes traitons vos données à caractère personnel, telles que les adresses IP et les identifiants de cookie, et exploitons différentes technologies, telles que celle des cookies, afin de personnaliser les publicités et les contenus en fonction de vos centres d’intérêt, d’évaluer la performance de ces publicités et contenus, et de recueillir des informations sur les publics qui les ont visionnés. Cliquez ci-dessous si vous consentez au traitement de vos données ou si vous désirez choisir les partenaires qui pourront les traiter et à quelles fins. Vous pouvez modifier vos paramètres à tout moment.",
                    3: "Les informations et le contenu relatifs à la qualité que nous vous communiquons dépendent des revenus générés par notre publicité. Nos partenaires et nous-mêmes exploitons vos données à caractère personnel, telles que les adresses IP et les identifiants de cookie, afin de personnaliser les publicités et les contenus en fonction de vos centres d’intérêt, d’évaluer la performance de ces publicités et contenus, et de recueillir des informations sur les différents publics qui les ont visionnés. Cliquez ci-dessous si vous consentez à l’utilisation des cookies et au traitement de vos données. Vous pouvez revenir sur votre choix à tout moment.",
                    softOptIn: "Nos partenaires et nous-mêmes exploitons différentes technologies, telles que celle des cookies, et traitons vos données à caractère personnel, telles que les adresses IP et les identifiants de cookie, afin de personnaliser les publicités et les contenus en fonction de vos centres d’intérêt, d’évaluer la performance de ces publicités et contenus, et de recueillir des informations sur les publics qui les ont visionnés. Poursuivre la navigation sur ce site ou cliquer sur le bouton d’acceptation signifie que vous consentez à l’utilisation de cette technologie et au traitement de vos données à caractère personnel en vue de ces objectifs. Vous pouvez changer d’avis et modifier votre consentement à tout moment en revenant sur ce site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "PLUS D'OPTIONS",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "JE N’ACCEPTE PAS",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "J'accepte",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Afficher les objectifs",
                INIT_SCREEN_ATTRIBUTION_TEXT: "Powered by",
                PURPOSE_SCREEN_TITLE_TEXT: "Le respect de votre vie privée est notre priorité",
                PURPOSE_SCREEN_BODY_TEXT: "Vous pouvez définir ci-dessous vos préférences de consentement et déterminer la manière dont vous souhaitez que vos données soient utilisées en fonction des objectifs mentionnés. Vous pouvez définir vos préférences pour notre société, indépendamment de celles de nos partenaires tiers. Chaque objectif est décrit afin que vous sachiez comment nos partenaires et nous-mêmes exploitons vos données.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Consulter les fournisseurs",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Annuler",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Enregistrer et quitter",
                VENDOR_SCREEN_TITLE_TEXT: "Le respect de votre vie privée est notre priorité",
                VENDOR_SCREEN_BODY_TEXT: "Vous pouvez définir ci-dessous vos préférences de consentement pour les partenaires tiers avec lesquels nous collaborons. Développez chaque élément de la liste des sociétés afin de découvrir l’objectif de ce traitement de données et de préciser votre choix. Dans certains cas, les sociétés peuvent exploiter vos données sans demander votre consentement, sur la base de leurs intérêts légitimes. Vous pouvez cliquer sur les liens relatifs à leur politique de confidentialité afin d’obtenir plus d’informations et de vous opposer à un tel traitement si vous le désirez.",
                REJECT_ALL_BUTTON_TEXT: "Tout Refuser",
                ACCEPT_ALL_BUTTON_TEXT: "Tout Accepter",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Revenir aux Objectifs",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Annuler",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Enregistrer et quitter",
                CONSENT_LINK_LABEL: "Confidentialité",
                BACK_LABEL: "Retour",
                VIEW_COMPANIES_LABEL: "Voir la liste",
                HIDE_COMPANIES_LABEL: "Fermer la liste ",
                THIRD_PARTY_VENDORS_LABEL: "Partenaires",
                ON_LABEL: "Activé",
                OFF_LABEL: "Désactivé",
                OFF_ON_LABEL: "Désactivé/Activé",
                OTHER: "Autre",
                NON_IAB_TITLE: "Fournisseurs non IAB",
                DESCRIPTION: "Description du fournisseur:",
                COMPANY_LABEL: "Société",
                REQUIRED_LABEL: "Requis",
                PRIVACY_POLICY_LABEL: "Politique de confidentialité: ",
                PURPOSES_LABEL: "Objectifs (consentement)",
                FEATURES_LABEL: "Fonctionnalités",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Objectifs (intérêts légitimes)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Vos choix relatifs au traitement de vos données personnelles ont été pris en compte.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "Pour refuser ou modifier vos préférences, veuillez cliquer sur le bouton <strong>Confidentialité</strong>.",
                GOOGLE_PURPOSES_TEXT: "Autoriser Google et ses partenaires technologiques à recueillir des données et à utiliser des cookies à des fins de personnalisation et d’évaluation publicitaires."
            },
            de: {
                INIT_SCREEN_TITLE_TEXT: "Wir respektieren Ihre Privatsphäre",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Wir und unsere Partner verwenden Technologien wie Cookies und verarbeiten personenbezogene Daten wie IP-Adressen und Cookie-IDs, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über die Zielgruppen zu gewinnen, die Anzeigen und Inhalte gesehen haben. Klicken Sie unten, um der Verwendung dieser Technologie und der Verarbeitung Ihrer persönlichen Daten für diese Zwecke zuzustimmen. Sie können Ihre Meinung und Ihre Einwilligungsentscheidungen jederzeit ändern, indem Sie auf diese Website zurückkehren.",
                    2: "Wir und unsere Partner verarbeiten Ihre personenbezogenen Daten wie IP-Adressen und Cookie-IDs mithilfe von Technologien wie Cookies, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über die Zielgruppen zu gewinnen, die Anzeigen und Inhalte gesehen haben. Klicken Sie unten, um zuzustimmen oder auszuwählen, welche Partner Ihre Daten zu welchen Zwecken verarbeiten dürfen. Sie können jederzeit Änderungen an Ihren Einstellungen vornehmen.",
                    3: "Die Qualität der Inhalte und Informationen, die wir Ihnen zur Verfügung stellen, hängt von den Einnahmen ab, die wir durch Werbung erzielen. Wir und unsere Partner verwenden Ihre personenbezogenen Daten wie IP-Adressen und Cookie-IDs, um Anzeigen und Inhalte auf Grundlage Ihrer Interessen zu personalisieren, die Leistung von Anzeigen und Inhalten zu messen und Erkenntnisse über die Zielgruppen zu gewinnen, die Anzeigen und Inhalte gesehen haben. Klicken Sie unten, um der Verwendung von Cookies und der Verarbeitung Ihrer Daten zuzustimmen. Sie können jederzeit zu Ihrer Auswahl zurückgehen.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MEHR OPTIONEN",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "ICH STIMME NICHT ZU",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "ICH STIMME ZU",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Zwecke anzeigen",
                INIT_SCREEN_ATTRIBUTION_TEXT: "Unterstützt von",
                PURPOSE_SCREEN_TITLE_TEXT: "Wir respektieren Ihre Privatsphäre",
                PURPOSE_SCREEN_BODY_TEXT: "Sie können Ihre Einwilligungsvorgaben festlegen und bestimmen, wie Ihre Daten basierend auf den folgenden Zwecken verwendet werden sollen. Sie können Ihre Einstellungen für uns unabhängig von denen von Drittanbietern vornehmen. Jeder Zweck hat eine Beschreibung, damit Sie wissen, wie wir und unsere Partner Ihre Daten verwenden.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Anbieter anzeigen",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Abbrechen",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Speichern & verlassen",
                VENDOR_SCREEN_TITLE_TEXT: "Wir respektieren Ihre Privatsphäre",
                VENDOR_SCREEN_BODY_TEXT: "Im Folgenden können Sie Einwilligungsvorgaben für einzelne Drittanbieter festlegen, mit denen wir zusammenarbeiten. Zur Erleichterung Ihrer Auswahl können Sie die einzelnen Einträge auf der Unternehmensliste erweitern, um zu sehen, für welche Zwecke sie Daten verwenden. In einigen Fällen können Unternehmen Ihre Daten aufgrund ihrer berechtigten Interessen verwenden, ohne Sie um Ihre Zustimmung zu bitten. Sie können auf deren Datenschutzrichtlinien-Links klicken, um weitere Informationen zu erhalten und einer solchen Verarbeitung zu widersprechen.",
                REJECT_ALL_BUTTON_TEXT: "Alle ablehnen",
                ACCEPT_ALL_BUTTON_TEXT: "Alle akzeptieren",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Zurück zu den Zwecken",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Abbrechen",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Speichern & verlassen",
                CONSENT_LINK_LABEL: "Datenschutz",
                BACK_LABEL: "Zurück",
                VIEW_COMPANIES_LABEL: "Unternehmen einblenden",
                HIDE_COMPANIES_LABEL: "Unternehmen ausblenden",
                THIRD_PARTY_VENDORS_LABEL: "Drittanbieter",
                ON_LABEL: "An",
                OFF_LABEL: "Aus",
                OFF_ON_LABEL: "Aus/An",
                OTHER: "Sonstiges",
                NON_IAB_TITLE: "Nicht-IAB-Anbieter",
                DESCRIPTION: "Anbieterbeschreibung:",
                COMPANY_LABEL: "Unternehmen",
                REQUIRED_LABEL: "Erforderlich",
                PRIVACY_POLICY_LABEL: "Datenschutzerklärung: ",
                PURPOSES_LABEL: "ZZwecke (Zustimmung)",
                FEATURES_LABEL: "Funktionalitäten",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Zwecke (berechtigte Interessen)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Google und seinen Technologiepartnern erlauben, Daten zu sammeln und Cookies zur Personalisierung und Messung von Anzeigen zu verwenden."
            },
            it: {
                INIT_SCREEN_TITLE_TEXT: "Il rispetto della tua privacy è la nostra priorità",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Noi e i nostri partner utilizziamo tecnologie, quali quelle dei cookie, ed elaboriamo i dati personali, quali gli indirizzi IP e gli identificatori dei cookie, per personalizzare gli annunci e i contenuti in base ai tuoi interessi, misurare le prestazioni di annunci e contenuti e ricavare informazioni sul pubblico che ha visualizzato gli annunci e i contenuti. Fai clic sotto per acconsentire all'utilizzo di questa tecnologia e al trattamento dei tuoi dati personali per queste finalità. Puoi cambiare idea e modificare le tue opzioni sul consenso in qualsiasi momento ritornando su questo sito.",
                    2: "Noi e i nostri partner elaboriamo i tuoi dati personali, quali gli indirizzi IP e gli identificatori dei cookie, utilizzando tecnologie quali quelle dei cookie per personalizzare gli annunci e i contenuti in base ai tuoi interessi, misurare le prestazioni di annunci e contenuti e ricavare informazioni sul pubblico che ha visualizzato gli annunci e i contenuti. Fai clic di seguito per acconsentire o scegliere i Partner che elaboreranno i tuoi dati e per quali finalità. Puoi modificare le tue impostazioni in qualsiasi momento.",
                    3: "I contenuti e le informazioni di qualità che forniamo dipendono dalle entrate generate dalla pubblicità. Noi e i nostri partner utilizziamo i tuoi dati personali, quali gli indirizzi IP e gli identificatori dei cookie, per personalizzare gli annunci e i contenuti in base ai tuoi interessi, misurare le prestazioni di annunci e contenuti e ricavare informazioni sul pubblico che ha visualizzato gli annunci e i contenuti. Fai clic sotto per acconsentire all'utilizzo dei cookie e al trattamento dei tuoi dati. Puoi rivedere le tue scelte in qualsiasi momento.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "PIÙ OPZIONI",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "Non Accetto",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Accetto",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Mostra finalità",
                INIT_SCREEN_ATTRIBUTION_TEXT: "Offerto da",
                PURPOSE_SCREEN_TITLE_TEXT: "Il rispetto della tua privacy è la nostra priorità",
                PURPOSE_SCREEN_BODY_TEXT: "Di seguito puoi impostare le preferenze sul consenso e determinare come desideri utilizzare i dati in base alle finalità. Puoi impostare le tue preferenze per noi indipendentemente da quelle dei partner di terze parti. Ogni finalità ha una descrizione in modo che tu sappia come noi e i nostri partner utilizziamo i tuoi dati.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Visualizza i fornitori",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Annullare",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Salva ed Esci",
                VENDOR_SCREEN_TITLE_TEXT: "Il rispetto della tua privacy è la nostra priorità",
                VENDOR_SCREEN_BODY_TEXT: "Di seguito puoi impostare le preferenze sul consenso per i singoli partner di terze parti con cui collaboriamo. Per visualizzare le finalità rispetto alle quali i singoli partner di terze parti usano i dati per agevolarti nelle tue scelte, espandi ogni voce dell'elenco di aziende. In alcuni casi, le aziende potrebbero utilizzare i tuoi dati senza chiedere il tuo consenso, in base ai loro legittimi interessi. Per ulteriori informazioni e per opporti a tale elaborazione, puoi fare clic sui rispettivi link alla policy sulla privacy.",
                REJECT_ALL_BUTTON_TEXT: "RIFIUTA TUTTO",
                ACCEPT_ALL_BUTTON_TEXT: "ACCETTA TUTTO",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Torna alle finalità",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Annullare",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Salva ed Esci",
                CONSENT_LINK_LABEL: "Privacy",
                BACK_LABEL: "Indietro",
                VIEW_COMPANIES_LABEL: "Vedi la lista",
                HIDE_COMPANIES_LABEL: "Nascondi la lista",
                THIRD_PARTY_VENDORS_LABEL: "Partner di terze parti",
                ON_LABEL: "Attivare",
                OFF_LABEL: "Disattivare",
                OFF_ON_LABEL: "Disattivare/Attivare",
                OTHER: "Altro",
                NON_IAB_TITLE: "Non-IAB Fornitori non IAB",
                DESCRIPTION: "Descrizione del fornitore:",
                COMPANY_LABEL: "Azienda",
                REQUIRED_LABEL: "Obbligatorio",
                PRIVACY_POLICY_LABEL: "Informativa sulla privacy: ",
                PURPOSES_LABEL: "Finalità (consenso)",
                FEATURES_LABEL: "Funzionalità",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Finalità (interessi legittimi)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Consenti a Google e ai suoi partner tecnologici di raccogliere i dati e utilizzare i cookie per la personalizzazione e la misurazione degli annunci."
            },
            es: {
                INIT_SCREEN_TITLE_TEXT: "Tu privacidad es importante para nosotros",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Nosotros y nuestros socios utilizamos tecnologías, como las cookies, y procesamos datos personales, como las direcciones IP y los identificadores de cookies, para personalizar los anuncios y el contenido según sus intereses, medir el rendimiento de los anuncios y el contenido y obtener información sobre las audiencias que vieron los anuncios y el contenido. Haga clic a continuación para autorizar el uso de esta tecnología y el procesamiento de sus datos personales para estos fines. Puede cambiar de opinión y cambiar sus opciones de consentimiento en cualquier momento al regresar a este sitio.",
                    2: "Nosotros y nuestros socios procesamos sus datos personales, como las direcciones IP y los identificadores de cookies, con tecnología como las cookies para personalizar los anuncios y el contenido según sus intereses, medir el rendimiento de los anuncios y el contenido y obtener información sobre las audiencias que vieron los anuncios y el contenido. Haga clic a continuación para dar su consentimiento o para elegir qué Socios procesan sus datos y para qué fines. Puede realizar cambios en su configuración en cualquier momento.",
                    3: "La calidad del contenido y la información que le proporcionamos depende de los ingresos que generamos de la publicidad. Nosotros y nuestros socios utilizamos sus datos personales, como las direcciones IP y los identificadores de cookies, para personalizar los anuncios y el contenido según sus intereses, medir el rendimiento de los anuncios y el contenido y obtener información sobre las audiencias que vieron los anuncios y el contenido. Haga clic a continuación para autorizar el uso de cookies y el procesamiento de sus datos. Puede volver a visitar sus opciones en cualquier momento.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MÁS OPCIONES",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "No acepto",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Acepto",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Mostrar objetivos",
                INIT_SCREEN_ATTRIBUTION_TEXT: "Accionado por",
                PURPOSE_SCREEN_TITLE_TEXT: "Tu privacidad es importante para nosotros",
                PURPOSE_SCREEN_BODY_TEXT: "Puede establecer sus preferencias de consentimiento y determinar cómo desea que se utilicen sus datos según los fines que se detallan a continuación. Puede establecer sus preferencias con respecto a nosotros independientemente de las de los socios externos. Cada objetivo tiene una descripción para que sepa cómo nosotros y los socios usamos sus datos.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Ver vendedores",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Cancelar",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Guardar y salir",
                VENDOR_SCREEN_TITLE_TEXT: "Tu privacidad es importante para nosotros",
                VENDOR_SCREEN_BODY_TEXT: "Puede configurar las preferencias de consentimiento para los terceros externos individuales con los que trabajamos a continuación. Expanda cada elemento de la lista de la compañía para ver para qué fines usan los datos para ayudarlo a tomar sus decisiones. En algunos casos, las compañías pueden usar sus datos sin pedir su consentimiento en función de sus intereses legítimos. Puede hacer clic en los enlaces de sus políticas de privacidad para obtener más información y para objetar dicho procesamiento.",
                REJECT_ALL_BUTTON_TEXT: "Rechazar todo",
                ACCEPT_ALL_BUTTON_TEXT: "Aceptar todo",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Volver a propósitos",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Cancelar",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Guardar y salir",
                CONSENT_LINK_LABEL: "Privacidad",
                BACK_LABEL: "Volver",
                VIEW_COMPANIES_LABEL: "Ver empresas",
                HIDE_COMPANIES_LABEL: "Ocultar empresas",
                THIRD_PARTY_VENDORS_LABEL: "Partners",
                ON_LABEL: "Activar",
                OFF_LABEL: "Desactivar",
                OFF_ON_LABEL: "Desactivar/Activar",
                OTHER: "Otro",
                NON_IAB_TITLE: "Proveedores que no pertenecen a IAB",
                DESCRIPTION: "Descripción del vendedor:",
                COMPANY_LABEL: "Empresa",
                REQUIRED_LABEL: "Obligatorio",
                PRIVACY_POLICY_LABEL: "Política de privacidad: ",
                PURPOSES_LABEL: "Objetivos (consentimiento)",
                FEATURES_LABEL: "Características",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Objetivos (intereses legítimos)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Permitir que Google y sus socios tecnológicos recopilen datos y utilicen cookies para la personalización de anuncios y medición."
            },
            da: {
                INIT_SCREEN_TITLE_TEXT: "Vi respekterer privatlivets fred",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Vi og vores partnere bruger teknologier, såsom cookies, og behandler personlige data, såsom IP-adresser og cookie-identifikatorer, til at skræddersy reklamer og indhold på basis af dine interesser, for at måle reklamernes og indholdenes virkningsgrad og for at lære noget om dem, der har set reklamerne og indholdene. Klik nedenunder for at give samtykke til brugen af denne teknologi og behandling af dine personlige data til disse formål. Du kan til enhver tid skifte holdning og ændre dine valg ved at vende tilbage til denne site.",
                    2: "Vi og vores partnere behandler dine personlige data, såsom IP-adresser og cookie-identifikatorer, ved hjælp af teknologier, såsom cookies, til at skræddersy reklamer og indhold på basis af dine interesser, for at måle reklamernes og indholdenes virkningsgrad og for at lære noget om dem, der har set reklamerne og indholdene. Klik nedenunder for at give samtykke eller for at vælge hvilke partnere, der skal behandle dine data, og til hvilke formål. Du kan til enhver tid ændre dine indstillinger.",
                    3: "Kvalitetsindholdet og oplysningerne, som vi tilbyder dig, er afhængige af de indtægter, vi generer igennem reklamer. Vi og vores partnere bruger dine personlige data, såsom IP-adresser og cookie-identifikatorer, til at skræddersy reklamer og indhold på basis af dine interesser, til at måle reklamernes og indholdenes virkningsgrad og til at lære noget om dem, der har set reklamerne og indholdene. Klik nedenunder for at give samtykke til brugen af cookies og behandling af dine data. Du kan til enhver tid ændre dine valg.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "FLERE MULIGHEDER",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "JEG SAMTYKKER IKKE",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "JEG SAMTYKKER",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Vis formål",
                PURPOSE_SCREEN_TITLE_TEXT: "Vi respekterer privatlivets fred",
                PURPOSE_SCREEN_BODY_TEXT: "Du kan vælge dine samtykkepræferencer og bestemme, hvordan dine data skal behandles på basis af formålene nedenunder. Du kan vælge dine præferencer i forhold til os uafhængigt af dine præferencer for tredjemandspartnere. Til hvert formål foreligger der en beskrivelse, så du ved, hvordan vi og vores partnere bruger dine data.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Se Forhandlere",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Annuller",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Gem og luk",
                VENDOR_SCREEN_TITLE_TEXT: "Vi respekterer privatlivets fred",
                VENDOR_SCREEN_BODY_TEXT: "Du kan vælge dine præferencer for samtykke vedrørende enkelte tredjemandspartnere nedenfor. Udvid hver firmaliste for at se, hvilke formål de bruger data til, så du nemmere kan træffe dine valg. I nogle tilfælde kan virksomheder bruge dine data uden at bede om dit samtykke baseret på deres egne legitime interesser. Klik på linkene til deres politikker om privatlivets fred for yderligere oplysninger og for eventuelt at protestere imod den slags databehandling.",
                REJECT_ALL_BUTTON_TEXT: "AFVIS ALT",
                ACCEPT_ALL_BUTTON_TEXT: "HYVÄKSY KAIKKI",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Tilbage til formål",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Annuller",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Gem og luk",
                CONSENT_LINK_LABEL: "Privatlivets fred",
                BACK_LABEL: "Tilbage",
                VIEW_COMPANIES_LABEL: "Vis virksomheder",
                HIDE_COMPANIES_LABEL: "Skjul virksomheder",
                THIRD_PARTY_VENDORS_LABEL: "Tredjepartsleverandører",
                ON_LABEL: "Til",
                OFF_LABEL: "Fra",
                OFF_ON_LABEL: "Fra/Til",
                OTHER: "Andet",
                NON_IAB_TITLE: "Ikke-IAB-forhandlere",
                DESCRIPTION: "Forhandlerbeskrivelse:",
                COMPANY_LABEL: "Virksomhed",
                REQUIRED_LABEL: "Obligatorisk",
                PRIVACY_POLICY_LABEL: "Politik for beskyttelse af personoplysninger: ",
                PURPOSES_LABEL: "Formål (samtykke)",
                FEATURES_LABEL: "Formål - Legitime interesser:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Formål (legitime interesser)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Giv samtykke til, at Google og deres teknologiske partnere indsamler data og bruger cookies til at personliggøre reklame og måling."
            },
            nl: {
                INIT_SCREEN_TITLE_TEXT: "We respecteren uw privacy",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Wij en onze partners gebruiken technologieën, zoals cookies, en verwerken persoonlijke gegevens, zoals IP-adressen en cookie-identificatoren, om advertenties en inhoud te personaliseren op basis van uw interesses, de resultaten van advertenties en inhoud te meten en inzichten te verkrijgen over het publiek dat deze advertenties en inhoud heeft bekeken. Klik hieronder om toestemming te geven voor het gebruik van deze technologie en de verwerking van uw persoonlijke gegevens voor deze doeleinden. U kunt op elk moment van gedachten veranderen en uw toestemmingskeuzes wijzigen door terug te keren naar deze site.",
                    2: "Wij en onze partners verwerken uw persoonlijke gegevens, zoals IP-adressen en cookie-identificatoren, met behulp van technologie zoals cookies om advertenties en inhoud te personaliseren op basis van uw interesses, de resultaten van advertenties en inhoud te meten en inzichten te verkrijgen over het publiek dat deze advertenties en inhoud heeft bekeken. Klik hieronder om toestemming te geven of om te kiezen welke partners uw gegevens verwerken en voor welke doeleinden. U kunt uw instellingen op elk gewenst moment wijzigen.",
                    3: "De kwaliteit van de inhoud en informatie die we u verstrekken, is afhankelijk van de inkomsten die we genereren uit advertenties. Wij en onze partners gebruiken uw persoonlijke gegevens, zoals IP-adressen en cookie-identificatoren om advertenties en inhoud te personaliseren op basis van uw interesses, de resultaten van advertenties en inhoud te meten en inzichten te verkrijgen over het publiek dat advertenties en inhoud heeft bekeken. Klik hieronder om toestemming te geven voor het gebruik van cookies en de verwerking van uw gegevens. U kunt op elk gewenst moment terugkomen op uw keuzes.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MEER OPTIES",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "IK GA NIET AKKOORD",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "IK GA AKKOORD",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Doeleinden weergeven",
                PURPOSE_SCREEN_TITLE_TEXT: "Wij respecteren uw privacy",
                PURPOSE_SCREEN_BODY_TEXT: "U kunt uw toestemmingsvoorkeuren instellen en bepalen hoe u uw gegevens wilt gebruiken op basis van de onderstaande doeleinden. U kunt uw voorkeuren voor ons onafhankelijk van die van externe partners instellen. Elk doeleinde heeft een beschrijving zodat u weet hoe wij en onze partners uw gegevens gebruiken.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Zie leveranciers",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Annuleer",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Opslaan en afsluiten",
                VENDOR_SCREEN_TITLE_TEXT: "Wij respecteren uw privacy",
                VENDOR_SCREEN_BODY_TEXT: "U kunt hieronder toestemmingsvoorkeuren instellen voor individuele externe partners waarmee wij werken. Vouw elk item uit de bedrijfslijst uit om te zien voor welke doeleinden ze gegevens gebruiken om u te helpen bij het maken van uw keuzes. In sommige gevallen kunnen bedrijven uw gegevens gebruiken zonder uw toestemming te vragen, op basis van hun legitieme belangen. U kunt op hun privacybeleidlinks klikken voor meer informatie en bezwaar maken tegen dergelijke verwerking.",
                REJECT_ALL_BUTTON_TEXT: "ALLES AFWIJZEN",
                ACCEPT_ALL_BUTTON_TEXT: "ALLES ACCEPTEREN",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Terug naar Doeleinden",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Annuleer",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Opslaan en afsluiten",
                CONSENT_LINK_LABEL: "Privacy",
                BACK_LABEL: "Terug",
                VIEW_COMPANIES_LABEL: "Lijst weergeven",
                HIDE_COMPANIES_LABEL: "Lijst verbergen",
                THIRD_PARTY_VENDORS_LABEL: "Partners",
                ON_LABEL: "Aan",
                OFF_LABEL: "Uit",
                OFF_ON_LABEL: "Uit/Aan",
                OTHER: "Overige",
                NON_IAB_TITLE: "Niet-IAB-leveranciers",
                DESCRIPTION: "Beschrijving leverancier:",
                COMPANY_LABEL: "Bedrijf",
                REQUIRED_LABEL: "Verplicht",
                PRIVACY_POLICY_LABEL: "Privacybeleid: ",
                PURPOSES_LABEL: "Doeleinden (toestemming)",
                FEATURES_LABEL: "Functies",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Doeleinden (legitieme belangen)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Google en zijn technologiepartners toestaan om gegevens te verzamelen en cookies te gebruiken voor gepersonaliseerde advertenties en metingen."
            },
            el: {
                INIT_SCREEN_TITLE_TEXT: "Σεβόμαστε την ιδιωτικότητά σας",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Εμείς και οι συνεργάτες μας χρησιμοποιούμε τεχνολογίες, όπως cookies, και επεξεργαζόμαστε προσωπικά δεδομένα, όπως διευθύνσεις IP και αναγνωριστικά cookies, για να προσαρμόζουμε τις διαφημίσεις και το περιεχόμενο με βάση τα ενδιαφέροντά σας, για να μετρήσουμε την απόδοση των διαφημίσεων και του περιεχομένου και για να αποκτήσουμε εις βάθος γνώση του κοινού που είδε τις διαφημίσεις και το περιεχόμενο. Κάντε κλικ παρακάτω για να συμφωνήσετε με τη χρήση αυτής της τεχνολογίας και την επεξεργασία των προσωπικών σας δεδομένων για αυτούς τους σκοπούς. Μπορείτε να αλλάξετε γνώμη και να αλλάξετε τις επιλογές της συγκατάθεσής σας ανά πάσα στιγμή επιστρέφοντας σε αυτόν τον ιστότοπο.",
                    2: "Εμείς και οι συνεργάτες μας χρησιμοποιούμε τα προσωπικά σας δεδομένα, όπως διευθύνσεις IP και αναγνωριστικά cookies, χρησιμοποιώντας τεχνολογία όπως cookies για να προσαρμόζουμε τις διαφημίσεις και το περιεχόμενο με βάση τα ενδιαφέροντά σας, για να μετρήσουμε την απόδοση των διαφημίσεων και του περιεχομένου και για να αποκτήσουμε εις βάθος γνώση του κοινού που είδε τις διαφημίσεις και το περιεχόμενο. Κάντε κλικ παρακάτω για να δώσετε τη συγκατάθεσή σας ή για να επιλέξετε ποιοι συνεργάτες θα επεξεργαστούν τα δεδομένα σας και για ποιους σκοπούς. Μπορείτε να αλλάξετε τις ρυθμίσεις σας ανά πάσα στιγμή.",
                    3: "Η ποιότητα του περιεχομένου και οι πληροφορίες που σας παρέχουμε εξαρτώνται από τα έσοδα από τη διαφήμιση. Εμείς και οι συνεργάτες μας χρησιμοποιούμε τα προσωπικά σας δεδομένα, όπως διευθύνσεις IP και αναγνωριστικά cookies, για να προσαρμόζουμε τις διαφημίσεις και το περιεχόμενο με βάση τα ενδιαφέροντά σας, για να μετρήσουμε την απόδοση των διαφημίσεων και του περιεχομένου και για να αποκτήσουμε εις βάθος γνώση του κοινού που είδε τις διαφημίσεις και το περιεχόμενο. Κάντε κλικ παρακάτω για να δώσετε τη συγκατάθεσή σας για τη χρήση των cookies και την επεξεργασία των δεδομένων σας. Μπορείτε να επανεξετάσετε τις επιλογές σας ανά πάσα στιγμή.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "ΠΕΡΙΣΣΟΤΕΡΕΣ ΕΠΙΛΟΓΕΣ",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "ΔΕ ΣΥΜΦΩΝΩ",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "ΣΥΜΦΩΝΩ",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Εμφάνιση σκοπών",
                PURPOSE_SCREEN_TITLE_TEXT: "Σεβόμαστε την ιδιωτικότητά σας",
                PURPOSE_SCREEN_BODY_TEXT: "Μπορείτε να ορίσετε τις προτιμήσεις συγκατάθεσης σας και να καθορίσετε τον τρόπο με τον οποίο θέλετε να χρησιμοποιηθούν τα δεδομένα σας, με βάση τους παρακάτω σκοπούς. Μπορείτε να ορίσετε τις προτιμήσεις σας για εμάς, ανεξάρτητα από αυτούς τους τρίτους συνεργάτες. Κάθε σκοπός έχει μια περιγραφή, έτσι ώστε να ξέρετε πώς χρησιμοποιούμε τα δεδομένα σας εμείς και οι συνεργάτες μας.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Εμφάνιση παρόχων",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Άκυρο",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Αποθήκευση και έξοδος",
                VENDOR_SCREEN_TITLE_TEXT: "Σεβόμαστε την ιδιωτικότητά σας",
                VENDOR_SCREEN_BODY_TEXT: "Μπορείτε να ορίσετε τις προτιμήσεις συγκατάθεσης για τους επιμέρους τρίτους συνεργάτες με τους οποίους συνεργαζόμαστε, παρακάτω. Επεκτείνετε το στοιχείο λίστας κάθε εταιρείας, για να δείτε τους σκοπούς για τους οποίους χρησιμοποιούν τα δεδομένα σας, ώστε να κάνετε την επιλογή σας. Σε ορισμένες περιπτώσεις, οι εταιρείες μπορεί να χρησιμοποιήσουν τα δεδομένα σας χωρίς να ζητήσουν τη συγκατάθεσή σας, με βάση τα νόμιμα συμφέροντά τους. Μπορείτε να κάνετε κλικ στους συνδέσμους της πολιτικής απορρήτου τους για περισσότερες πληροφορίες και για να εναντιωθείτε σε αυτή την επεξεργασία.",
                REJECT_ALL_BUTTON_TEXT: "ΑΠΟΡΡΙΨΗ ΟΛΩΝ",
                ACCEPT_ALL_BUTTON_TEXT: "ΑΠΟΔΟΧΗ ΟΛΩΝ",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Πίσω στους Σκοπούς",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Άκυρο",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Αποθήκευση και έξοδος",
                CONSENT_LINK_LABEL: "Απόρρητο",
                BACK_LABEL: "Επιστροφή",
                VIEW_COMPANIES_LABEL: "Προβολή εταιρειών",
                HIDE_COMPANIES_LABEL: "Απόκρυψη εταιρειών",
                THIRD_PARTY_VENDORS_LABEL: "Τρίτοι προμηθευτές",
                ON_LABEL: "Ναι",
                OFF_LABEL: "Όχι",
                OFF_ON_LABEL: "Όχι/Ναι",
                OTHER: "Άλλο",
                NON_IAB_TITLE: "Πάροχοι μη-IAB",
                DESCRIPTION: "Περιγραφή παρόχου:",
                COMPANY_LABEL: "Εταιρεία",
                REQUIRED_LABEL: "Απαιτείται",
                PRIVACY_POLICY_LABEL: "Πολιτική απορρήτου: ",
                PURPOSES_LABEL: "Σκοποί (Συγκατάθεση)",
                FEATURES_LABEL: "Λειτουργίες:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Σκοποί (Νόμιμα συμφέροντα)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Επιτρέψτε στο Google και στους τεχνολογικούς συνεργάτες του να συλλέγουν δεδομένα και να χρησιμοποιούν cookies για εξατομίκευση και μέτρηση διαφημίσεων."
            },
            hu: {
                INIT_SCREEN_TITLE_TEXT: "Fontos számunkra adatainak védelme",
                INIT_SCREEN_BODY_TEXT: {
                    1: "A partnereinkkel együtt olyan technológiákat, például cookie-kat használunk, amelyekkel a személyes adatait – például az IP-címeit és a cookie-azonosítóit – feldolgozzuk annak érdekében, hogy az Ön érdeklődési köre alapján személyre szabjuk a hirdetéseket és a tartalmakat, mérjük a hirdetések és a tartalmak teljesítményét, valamint következtetéseket vonjunk le a hirdetések és a tartalom közönségével kapcsolatban. A gombra kattintva hozzájárulhat ennek a technológiának a használatához és az adatai e célokkal történő feldolgozásához. Az oldal későbbi meglátogatásaikor bármikor meggondolhatja magát, és megváltoztathatja a döntését.",
                    2: "A személyes adatait – például az IP-címeit és a cookie-azonosítóit – a partnereinkkel együtt a cookie-khoz hasonló technológiák segítségével feldolgozzuk annak érdekében, hogy az Ön érdeklődési köre alapján személyre szabjuk a hirdetéseket és a tartalmakat, mérjük a hirdetések és a tartalmak teljesítményét, valamint következtetéseket vonjunk le a hirdetések és a tartalom közönségével kapcsolatban. A gombra kattintva hozzájárulást adhat, vagy kiválaszthatja, mely partnerek, milyen céllal dolgozhatják fel az adatait. A beállításokat bármikor módosíthatja.",
                    3: "A hirdetésekből származó bevétel teszi lehetővé, hogy minőségi tartalmat és tájékoztatást biztosítsunk Önnek. A személyes adatait – például az IP-címeit és a cookie-azonosítóit – partnereinkkel együtt feldolgozzuk annak érdekében, hogy az Ön érdeklődési köre alapján személyre szabjuk a hirdetéseket és a tartalmakat, mérjük a hirdetések és a tartalmak teljesítményét, valamint következtetéseket vonjunk le a hirdetések és a tartalom közönségével kapcsolatban. A gombra kattintva hozzájárulhat a cookie-k használatához és az adatok feldolgozásához. A döntését bármikor megváltoztathatja.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "TÖBB LEHETŐSÉG",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "NEM FOGADOM EL",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "ELFOGADOM",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "A célok megjelenítése",
                PURPOSE_SCREEN_TITLE_TEXT: "Fontos számunkra adatainak védelme",
                PURPOSE_SCREEN_BODY_TEXT: "Beállíthatja a hozzájárulási preferenciáit, és meghatározhatja, hogyan kerüljenek felhasználásra az adatai a jövőben az alábbi célok vonatkozásában. A ránk vonatkozó preferenciáit a harmadik felektől függetlenül adhatja meg. A célok melletti leírásból megtudhatja, hogy a partnereinkkel együtt hogyan használjuk fel az adatait.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Beszállítók megtekintése",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Kilépés",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Mentés és bezárás",
                VENDOR_SCREEN_TITLE_TEXT: "Fontos számunkra adatainak védelme",
                VENDOR_SCREEN_BODY_TEXT: "Az alábbiakban megadhatja az egyes független harmadik felekre vonatkozó hozzájárulással kapcsolatos preferenciáit. A döntése megkönnyítése érdekében kattintson a listában a vállalatok nevére, és megtudhatja, azok milyen célokra használják fel az adatokat. A vállalatok bizonyos esetekben az Ön hozzájárulása nélkül is használhatják az adatait, amennyiben ez jogos érdekük. A vállalatok adatvédelmi szabályzatának linkjére kattintva további információkat tekinthet meg, és elutasíthatja az adott célú feldolgozást.",
                REJECT_ALL_BUTTON_TEXT: "ÖSSZES ELUTASÍTÁSA",
                ACCEPT_ALL_BUTTON_TEXT: "ÖSSZES ELFOGADÁSA",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Vissza a Célok oldalra",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Kilépés",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Mentés és bezárás",
                CONSENT_LINK_LABEL: "Adatvédelem",
                BACK_LABEL: "Vissza",
                VIEW_COMPANIES_LABEL: "Vállalatok megjelenítése",
                HIDE_COMPANIES_LABEL: "Vállalatok elrejtése",
                THIRD_PARTY_VENDORS_LABEL: "Harmadik fél beszállítók",
                ON_LABEL: "Be",
                OFF_LABEL: "Ki",
                OFF_ON_LABEL: "Ki/Be",
                OTHER: "Egyéb",
                NON_IAB_TITLE: "Nem IAB-hez tartozó beszállítók",
                DESCRIPTION: "Beszállító leírása:",
                COMPANY_LABEL: "Vállalat",
                REQUIRED_LABEL: "Kötelező",
                PRIVACY_POLICY_LABEL: "Adatvédelmi szabályzat: ",
                PURPOSES_LABEL: "Célok (hozzájárulás)",
                FEATURES_LABEL: "Jellemzők:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Célok (jogszerű érdekek)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Engedélyezze, hogy a Google és technológiai partnerei adatokat gyűjtsenek és cookie-kat használjanak a hirdetések személyre szabásához és a mérésekhez."
            },
            pt: {
                INIT_SCREEN_TITLE_TEXT: "Damos valor à sua privacidade",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Nós e os nossos parceiros utilizamos tecnologias, como cookies, e processamos dados pessoais, como endereços IP e identificadores de cookies, para personalizar anúncios e conteúdos baseados nos seus interesses, avaliar o desempenho desses anúncios e conteúdos, bem como para obter informações sobre o público que os visualizou. Clique abaixo para consentir a utilização desta tecnologia e o processamento dos seus dados pessoais para estas finalidades. Pode mudar de ideias e alterar as suas opções de consentimento a qualquer momento voltando a este site.",
                    2: "Nós e os nossos parceiros processamos os seus dados pessoais, como endereços IP e identificadores de cookies, utilizando tecnologias, como cookies, para personalizar anúncios e conteúdos baseados nos seus interesses, avaliar o desempenho desses anúncios e conteúdos, bem como para obter informações sobre o público que os visualizou. Clique abaixo para consentir ou escolher os Parceiros que irão processar os seus dados e para quais Finalidades. Poderá realizar alterações às suas definições a qualquer momento.",
                    3: "O conteúdo de qualidade e as informações que lhe fornecemos dependem da receita gerada pela publicidade. Nós e os nossos parceiros utilizamos os seus dados pessoais, como endereços IP e identificadores de cookies, para personalizar anúncios e conteúdos baseados nos seus interesses, avaliar o desempenho desses anúncios e conteúdos, bem como para obter informações sobre o público que os visualizou. Clique abaixo para consentir a utilização de cookies e o processamento dos seus dados. Poderá rever as suas escolhas a qualquer momento.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MAIS OPÇÕES",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "EU NÃO ACEITO",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "EU ACEITO",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Mostrar Finalidades",
                PURPOSE_SCREEN_TITLE_TEXT: "Damos valor à sua privacidade",
                PURPOSE_SCREEN_BODY_TEXT: "Com base nas finalidades que se seguem, pode definir as suas preferências de consentimento e determinar como deseja que os seus dados sejam utilizados. Pode definir as suas preferências relativas à nossa empresa de forma independente das de terceiros. Cada finalidade contém uma descrição para saber como nós e os nossos parceiros utilizamos os seus dados.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Ver Fornecedores",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Cancelar",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Guardar e sair",
                VENDOR_SCREEN_TITLE_TEXT: "Damos valor à sua privacidade",
                VENDOR_SCREEN_BODY_TEXT: "Em seguida, pode definir as preferências de consentimento para parceiros terceiros com os quais trabalhamos. Para ajudar no momento da escolha, expanda cada item da lista de empresas para ver com que finalidade utilizam os dados. Em alguns casos, as empresas, com base nos seus interesses legítimos, podem utilizar os seus dados sem solicitar o seu consentimento. Clique nas ligações das respetivas políticas de privacidade para obter mais informações e para se opor a esse processamento.",
                REJECT_ALL_BUTTON_TEXT: "Rejeitar tudo",
                ACCEPT_ALL_BUTTON_TEXT: "Aceitar tudo",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Voltar para Finalidades",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Cancelar",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Guardar e sair",
                CONSENT_LINK_LABEL: "Privacidade",
                BACK_LABEL: "Anterior",
                VIEW_COMPANIES_LABEL: "Ver companhias",
                HIDE_COMPANIES_LABEL: "Ocultar companhias",
                THIRD_PARTY_VENDORS_LABEL: "Vendedores terceiros",
                ON_LABEL: "Ligar",
                OFF_LABEL: "Desligar",
                OFF_ON_LABEL: "Desligar/Ligar",
                OTHER: "Outros",
                NON_IAB_TITLE: "Fornecedores não IAB",
                DESCRIPTION: "Descrição do Fornecedor:",
                COMPANY_LABEL: "Companhia",
                REQUIRED_LABEL: "Obrigatório",
                PRIVACY_POLICY_LABEL: "Política de privacidade: ",
                PURPOSES_LABEL: "Finalidades (Consentimento)",
                FEATURES_LABEL: "Funcionalidades:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Finalidades (Interesses legítimos)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Permitir que a Google e os seus parceiros tecnológicos recolham dados e utilizem cookies para personalização e medição de anúncios."
            },
            ro: {
                INIT_SCREEN_TITLE_TEXT: "Pentru noi, confidențialitatea dvs. este importantă",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Noi și partenerii noștri utilizăm tehnologii, cum ar fi modulele cookie, și vă procesăm datele cu caracter personal, precum adresele IP și identificatorii cookie, pentru a personaliza anunțurile publicitare și conținutul în funcție de interesele dvs., pentru a măsura eficiența anunțurilor și a conținutului și pentru a obține informații despre publicul care a văzut anunțurile și conținutul. Faceți clic mai jos pentru a vă da consimțământul privind utilizarea acestei tehnologii și procesarea datelor dvs. cu caracter personal în aceste scopuri. Vă puteți răzgândi și puteți schimba opțiunile în orice moment, revenind la acest site.",
                    2: "Noi și partenerii noștri vă procesăm datele cu caracter personal, cum ar fi adresele IP și identificatorii cookie, utilizând tehnologii precum cookie-urile, pentru a personaliza anunțurile publicitare și conținutul în funcție de interesele dvs., pentru a măsura eficiența anunțurilor și a conținutului și pentru a obține informații despre publicul care a văzut anunțurile și conținutul. Faceți clic mai jos pentru a vă da consimțământul sau pentru a alege care parteneri să vă proceseze datele și în ce scopuri. Puteți edita setările în orice moment.",
                    3: "Calitatea conținutului și informațiile pe care vi le furnizăm depind de veniturile generate de publicitate. Noi și partenerii noștri vă utilizăm datele cu caracter personal, cum ar fi adresele IP și identificatorii cookie, pentru a personaliza anunțurile publicitare și conținutul în funcție de interesele dvs., pentru a măsura eficiența anunțurilor și a conținutului și pentru a obține informații despre publicul care a văzut anunțurile și conținutul. Faceți clic mai jos pentru a vă da acordul privind utilizarea cookie-urilor și procesarea datelor dvs. Vă puteți schimba opțiunile în orice moment.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "MAI MULTE OPȚIUNI",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "NU SUNT DE ACORD",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Sunt de acord",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Afișați scopurile",
                PURPOSE_SCREEN_TITLE_TEXT: "Pentru noi, confidențialitatea dvs. este importantă",
                PURPOSE_SCREEN_BODY_TEXT: "Vă puteți seta preferințele de consimțământ și determina cum doriți să vă fie utilizate datele în funcție de scopurile de mai jos. Vă puteți seta preferințele pentru noi independent de cele pentru partenerii terți. Fiecare scop are o descriere, astfel încât să știți modul în care noi și partenerii noștri vă utilizăm datele.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Vizualizați furnizorii",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Anulare",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Salvare și ieșire",
                VENDOR_SCREEN_TITLE_TEXT: "Pentru noi, confidențialitatea dvs. este importantă",
                VENDOR_SCREEN_BODY_TEXT: "Mai jos, puteți stabili preferințele de consimțământ pentru partenerii terți cu care lucrăm. Pentru a decide, deschideți fiecare element din lista companiei pentru a vedea scopurile în care utilizează datele. Este posibil ca, în unele cazuri, companiile să vă utilizeze datele fără a vă cere consimțământul, bazându-se pe interesele lor legitime. Puteți face clic pe linkurile politicilor de confidențialitate ale acestora pentru a afla mai multe informații și a vă opune unor astfel de procesări.",
                REJECT_ALL_BUTTON_TEXT: "RRESPINGEȚI-LE PE TOATE",
                ACCEPT_ALL_BUTTON_TEXT: "ACCEPTAȚI-LE PE TOATE",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Înapoi la Scopuri",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Anulare",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Salvare și ieșire",
                CONSENT_LINK_LABEL: "Confidențialitate",
                BACK_LABEL: "Înapoi",
                VIEW_COMPANIES_LABEL: "Vizualizare companii",
                HIDE_COMPANIES_LABEL: "Ascundere companii",
                THIRD_PARTY_VENDORS_LABEL: "Furnizori terți",
                ON_LABEL: "Activare",
                OFF_LABEL: "Dezactivare",
                OFF_ON_LABEL: "Dezactivare/Activare",
                OTHER: "Altul",
                NON_IAB_TITLE: "Furnizori non-IAB",
                DESCRIPTION: "Descriere furnizor:",
                COMPANY_LABEL: "Companie",
                REQUIRED_LABEL: "Obligatoriu",
                PRIVACY_POLICY_LABEL: "Politica de confidențialitate: ",
                PURPOSES_LABEL: "Scopuri (Consimțământ)",
                FEATURES_LABEL: "Funcții:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Scopuri (Interese legitime)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Permiteți companiei Google și partenerilor săi de tehnologie să colecteze date și să utilizeze cookie-uri pentru măsurări și personalizarea anunțurilor."
            },
            fi: {
                INIT_SCREEN_TITLE_TEXT: "Yksityisyytesi on meille tärkeää",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Me ja yhteistyökumppanimme käytämme tekniikoita, kuten evästeitä, ja käsittelemme henkilökohtaisia tietojasi, kuten IP-osoitteita ja evästetunnisteita, yksilöimään mainoksia ja sisältöä mielenkiintojesi kohteiden perusteella, sekä mitataksemme mainosten ja sisällön tehokkuutta sekä saadaksemme tietoa mainoksia ja sisältöä nähneistä yleisöistä. Napsauta alta, jos haluat hyväksyä tämän tekniikan käytön ja henkilötietojesi käsittelyn näihin tarkoituksiin. Mikäli muutat mielesi, voit muuttaa antamaasi suostumusta milloin tahansa palaamalla tälle sivustolle.",
                    2: "Me ja yhteistyökumppanimme käsittelemme henkilökohtaisia tietojasi, kuten IP-osoitteita ja evästetunnisteita, käyttämällä tekniikoita, kuten evästeitä, jotta voimme muokata mainoksia ja sisältöä mielenkiintojesi kohteiden perusteella sekä mitataksemme mainosten ja sisällön tehokkuutta sekä saadaksemme tietoa mainoksia ja sisältöä nähneistä yleisöistä. Napsauta alta, jos haluat hyväksyä tai valita, mitkä kumppanit käsittelevät tietojasi ja mihin tarkoituksiin. Voit tehdä muutoksia asetuksiisi milloin tahansa.",
                    3: "Laadukas sisältö ja tiedot, jotka annamme sinulle, riippuvat mainonnasta syntyvästä tulosta. Me ja yhteistyökumppanimme käytämme henkilökohtaisia tietojasi, kuten IP-osoitteita ja evästetunnisteita, voidaksemme muokata mainoksia ja sisältöä mielenkiintojesi kohteiden perusteella ja mitataksemme mainosten ja sisällön tehokkuutta sekä saadaksemme tietoa mainoksia ja sisältöä nähneistä yleisöistä. Napsauta alta, jos haluat hyväksyä evästeiden käytön ja tietojen käsittelyn. Voit tarkastella valintojasi milloin tahansa.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "LISÄÄ VAIHTOEHTOJA",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "EN HYVÄKSY",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Hyväksyn",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Näytä tarkoitukset",
                PURPOSE_SCREEN_TITLE_TEXT: "Yksityisyytesi on meille tärkeää",
                PURPOSE_SCREEN_BODY_TEXT: "Voit asettaa suostumusasetuksesi ja määrittää, miten haluat tietojasi käytettävän alla olevien tarkoitusten perusteella. Voit asettaa meitä koskevat asetuksesi riippumatta kolmannen osapuolen yhteistyökumppaneita koskevista asetuksista. Jokaisella tarkoituksella on kuvaus, jotta tiedät, miten me ja yhteistyökumppanimme käytämme tietojasi.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Katso toimittajat",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Peruuta",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Tallenna ja poistu",
                VENDOR_SCREEN_TITLE_TEXT: "Yksityisyytesi on meille tärkeää",
                VENDOR_SCREEN_BODY_TEXT: "Voit määrittää alla suostumusasetukset yksittäisille yhteistyökumppaneina toimiville kolmansille osapuolille, joiden kanssa työskentelemme. Jotta voit tehdä valintasi, laajenna jokainen yritysluettelon kohde nähdäksesi mihin tarkoituksiin he käyttävät tietojasi. Joissakin tapauksissa yritykset voivat oikeutettujen etujensa perusteella käyttää tietojasi pyytämättä suostumustasi. Voit napsauttaa heidän tietosuojakäytäntölinkkejään saadaksesi lisätietoja ja vastustaaksesi tällaista käsittelyä.",
                REJECT_ALL_BUTTON_TEXT: "HYLKÄÄ KAIKKI",
                ACCEPT_ALL_BUTTON_TEXT: "HYVÄKSY KAIKKI",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Takaisin tarkoituksiin",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Peruuta",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Tallenna ja poistu",
                CONSENT_LINK_LABEL: "Yksityisyys",
                BACK_LABEL: "Takaisin",
                VIEW_COMPANIES_LABEL: "Katso yritykset",
                HIDE_COMPANIES_LABEL: "Piilota yritykset",
                THIRD_PARTY_VENDORS_LABEL: "Kolmannen osapuolen myyjät",
                ON_LABEL: "Päälle",
                OFF_LABEL: "Pois",
                OFF_ON_LABEL: "Pois/Päälle",
                OTHER: "Muut",
                NON_IAB_TITLE: "Ei IAB-toimittajat",
                DESCRIPTION: "Toimittajan kuvaus:",
                COMPANY_LABEL: "Yritys",
                REQUIRED_LABEL: "Vaaditaan",
                PRIVACY_POLICY_LABEL: "Tietosuojaseloste: ",
                PURPOSES_LABEL: "Tarkoitukset (suostumus)",
                FEATURES_LABEL: "Ominaisuudet:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Tarkoitukset (oikeutetut edut)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Salli Googlen ja sen teknologiakumppaneiden kerätä tietoja ja käyttää evästeitä mainosten mukauttamiseen ja mittaamiseen."
            },
            pl: {
                INIT_SCREEN_TITLE_TEXT: "Szanujemy Twoją prywatność",
                INIT_SCREEN_BODY_TEXT: {
                    1: "My i nasi partnerzy wykorzystujemy technologie, takie jak pliki cookie, i przetwarzamy dane osobowe, takie jak adresy IP i identyfikatory plików cookie, w celu spersonalizowania reklam i treści w oparciu o Twoje zainteresowania, mierzenia wydajności reklam i treści oraz uzyskiwania wglądu w odbiorców, którzy widzieli reklamy i treści. Kliknij poniżej, aby wyrazić zgodę na wykorzystanie tej technologii i przetwarzanie danych osobowych w tych celach. Możesz zmienić zdanie i zmienić wybór zgody w dowolnym momencie, wracając na tę stronę.",
                    2: "My i nasi partnerzy przetwarzamy Twoje dane osobowe, takie jak adresy IP i identyfikatory plików cookie, używając technologii takich jak pliki cookie, aby spersonalizować reklamy i treści w oparciu o Twoje zainteresowania, zmierzyć wydajność reklam i treści oraz uzyskać informacje o odbiorcach, którzy widzieli reklamy i treści. Kliknij poniżej, aby wyrazić zgodę lub wybrać, którzy Partnerzy przetwarzają Twoje dane i do jakich celów. Możesz dokonać zmian w swoich ustawieniach w dowolnym momencie.",
                    3: "Jakość treści i informacje, które przekazujemy, zależą od przychodów generowanych przez reklamę. My i nasi partnerzy wykorzystujemy Twoje dane osobowe, takie jak adresy IP i identyfikatory plików cookie, w celu spersonalizowania reklam i treści na podstawie Twoich zainteresowań, pomiaru wydajności reklam i treści oraz uzyskania informacji o odbiorcach, którzy obejrzeli reklamy i treści. Kliknij poniżej, aby wyrazić zgodę na używanie plików cookie i przetwarzanie Twoich danych. Możesz powrócić do swoich wyborów w dowolnym momencie.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "WIĘCEJ OPCJI",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "NIE AKCEPTUJĘ",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "AKCEPTUJĘ",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Pokaż cele",
                PURPOSE_SCREEN_TITLE_TEXT: "Szanujemy Twoją prywatność",
                PURPOSE_SCREEN_BODY_TEXT: "Możesz ustawić preferencje dotyczące zgody i określić, w jaki sposób chcesz, aby Twoje dane były używane w oparciu o poniższe cele. Możesz ustawić swoje preferencje dla nas niezależnie od preferencji partnerów zewnętrznych. Każdy cel zawiera opis, dzięki któremu wiesz, jak my i partnerzy korzystamy z Twoich danych.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Zobacz dostawców",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Anuluj",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Zapisz i zamknij",
                VENDOR_SCREEN_TITLE_TEXT: "Szanujemy Twoją prywatność",
                VENDOR_SCREEN_BODY_TEXT: "Możesz ustawić preferencje zgody dla poszczególnych partnerów zewnętrznych, z którymi współpracujemy poniżej. Rozwiń każdy element listy firm, aby sprawdzić, do jakich celów wykorzystują dane, aby pomóc w dokonaniu wyboru. W niektórych przypadkach firmy mogą wykorzystywać dane użytkownika bez pytania o zgodę w oparciu o ich uzasadnione interesy. Możesz kliknąć ich linki polityki prywatności, aby uzyskać więcej informacji i sprzeciwić się takiemu przetwarzaniu.",
                REJECT_ALL_BUTTON_TEXT: "ODRZUĆ WSZYSTKIE",
                ACCEPT_ALL_BUTTON_TEXT: "AKCEPTUJ WSZYSTKIE",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Powrót do celów",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Anuluj",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Zapisz i zamknij",
                CONSENT_LINK_LABEL: "Prywatność",
                BACK_LABEL: "Wstecz",
                VIEW_COMPANIES_LABEL: "Pokaż firmy",
                HIDE_COMPANIES_LABEL: "Ukryj firmy",
                THIRD_PARTY_VENDORS_LABEL: "Zaangażowane strony trzecie",
                ON_LABEL: "Włącz",
                OFF_LABEL: "Wyłącz",
                OFF_ON_LABEL: "Wyłącz/Włącz",
                OTHER: "Inny",
                NON_IAB_TITLE: "Dostawcy spoza IAB",
                DESCRIPTION: "Opis dostawcy:",
                COMPANY_LABEL: "Firma",
                REQUIRED_LABEL: "Wymagane",
                PRIVACY_POLICY_LABEL: "Zasady ochrony prywatności: ",
                PURPOSES_LABEL: "Cele (zgoda)",
                FEATURES_LABEL: "Funkcje:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Cele (uzasadnione interesy)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Pozwól Google i partnerom technologicznym tej firmy na gromadzenie danych i wykorzystywanie plików cookie do personalizacji i pomiaru reklam."
            },
            sk: {
                INIT_SCREEN_TITLE_TEXT: "Vážime si vaše súkromie",
                INIT_SCREEN_BODY_TEXT: {
                    1: "My a naši partneri používame technológie, ako napríklad súbory cookie, a spracúvame osobné údaje, ako sú adresy IP a identifikátory súborov cookie, na prispôsobenie reklám a obsahu na základe vašich záujmov, meranie výkonnosti reklám a obsahu a získanie informácií o používateľoch, ktorí videli konkrétne reklamy a obsah. Kliknutím nižšie potvrdzujete svoj súhlas s používaním tejto technológie a so spracúvaním svojich osobných údajov na tieto účely. Svoj názor môžete kedykoľvek zmeniť a svoj súhlas zrušiť po návrate na túto stránku.",
                    2: "My a naši partneri spracúvame vaše osobné údaje, ako sú adresy IP a identifikátory súborov cookie, pomocou technológie, akou je napríklad používanie súborov cookie, aby sme prispôsobili reklamy a obsah vašim záujmom, merali výkonnosť reklám a obsahu a získali prehľad o používateľoch, ktorí videli konkrétne reklamy a obsah. Kliknutím nižšie potvrdíte svoj súhlas, prípadne sa môžete rozhodnúť, ktorí partneri budú spracúvať vaše údaje a na aké účely. Tieto nastavenia môžete kedykoľvek zmeniť.",
                    3: "Kvalitný obsah a informácie, ktoré vám poskytujeme, závisia od našich príjmov z reklamy. My a naši partneri používame vaše osobné údaje, ako sú adresy IP a identifikátory súborov cookie, aby sme mohli prispôsobiť reklamy a obsah na základe vašich záujmov, merať výkonnosť reklám a obsahu a získať prehľad o používateľoch, ktorí videli konkrétne reklamy a obsah. Kliknutím nižšie súhlasíte s používaním súborov cookie a spracúvaním svojich údajov. Svoje rozhodnutie môžete kedykoľvek zmeniť.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "VIAC MOŽNOSTÍ",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "NESÚHLASÍM",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Súhlasím",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Zobraziť účely",
                PURPOSE_SCREEN_TITLE_TEXT: "Vážime si vaše súkromie",
                PURPOSE_SCREEN_BODY_TEXT: "Na základe nižšie uvedených účelov môžete upraviť preferencie svojho súhlasu týkajúce sa používania vašich údajov. Svoje preferencie pre naše používanie vašich údajov môžete nastaviť nezávisle od preferencií v súvislosti s externými partnermi. Každý účel má svoj opis, aby ste vedeli, ako my a naši partneri používame vaše údaje.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Zobraziť dodávateľov",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Zrušiť",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Uložiť a skončiť",
                VENDOR_SCREEN_TITLE_TEXT: "Vážime si vaše súkromie",
                VENDOR_SCREEN_BODY_TEXT: "Preferencie v súvislosti so súhlasom môžete nastaviť pre jednotlivých externých partnerov, s ktorými spolupracujeme. Rozbaľte každú položku zoznamu spoločností a prečítajte si, na aké účely používajú údaje. To vám môže pomôcť pri výbere nastavení. V niektorých prípadoch môžu spoločnosti používať vaše údaje bez toho, aby požiadali o váš súhlas. Môžu tak robiť na základe svojich oprávnených záujmov. Pre ďalšie informácie a námietky voči takémuto spracúvaniu môžete kliknúť na príslušné prepojenia na ich zásady ochrany osobných údajov.",
                REJECT_ALL_BUTTON_TEXT: "Odmietnuť všetko",
                ACCEPT_ALL_BUTTON_TEXT: "Prijať všetko",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Späť na účely",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Zrušiť",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Uložiť a skončiť",
                CONSENT_LINK_LABEL: "Súkromie",
                BACK_LABEL: "Späť",
                VIEW_COMPANIES_LABEL: "Zobraziť spoločnosti",
                HIDE_COMPANIES_LABEL: "Skryť spoločnosti",
                THIRD_PARTY_VENDORS_LABEL: "Predajcovia tretích strán",
                ON_LABEL: "Zap.",
                OFF_LABEL: "Vyp.",
                OFF_ON_LABEL: "Vyp./Zap.",
                OTHER: "Iné",
                NON_IAB_TITLE: "Dodávatelia bez IAB",
                DESCRIPTION: "Opis dodávateľa:",
                COMPANY_LABEL: "Spoločnosť",
                REQUIRED_LABEL: "Vyžadované",
                PRIVACY_POLICY_LABEL: "Zásady ochrany osobných údajov: ",
                PURPOSES_LABEL: "Účely (súhlas)",
                FEATURES_LABEL: "Funkcie:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Účely (oprávnené záujmy)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Umožnite spoločnosti Google a jej technologickým partnerom zhromažďovať údaje a používať súbory cookie na prispôsobenie reklám a meranie."
            },
            sv: {
                INIT_SCREEN_TITLE_TEXT: "Vi värdesätter din integritet",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Vi och våra samarbetspartner använder teknologi såsom cookies för att behandla personuppgifter, exempelvis IP-adresser och cookie-identifierare, för att anpassa annonser och innehåll enligt dina intressen, mäta effektiviteten hos annonser och innehåll samt härleda information om de personer som sett annonserna och innehållet. Klicka nedan för att godkänna användningen av denna teknologi och behandling av dina personuppgifter för dessa ändamål. Du kan när som helst ändra dina val gällande samtycke genom att återkomma till denna sida.",
                    2: "Vi och våra samarbetspartner behandlar dina personuppgifter, exempelvis IP-adresser och cookie-identifierare, med hjälp av teknologi såsom cookies för att anpassa annonser och innehåll enligt dina intressen, mäta effektiviteten hos annonser och innehåll samt härleda information om de personer som sett annonserna och innehållet. Klicka nedan för att godkänna eller för att välja vilka samarbetspartner som får behandla dina data för vilka ändamål. Du kan när som helst ändra dina inställningar.",
                    3: "Kvaliteten på det innehåll och den information vi erbjuder dig beror på den inkomst vi får från annonser. Vi och våra samarbetspartner använder dina personuppgifter, exempelvis IP-adresser och cookie-identifierare, för att anpassa annonser och innehåll enligt dina intressen, mäta effektiviteten hos annonser och innehåll samt härleda information om de personer som sett annonserna och innehållet. Klicka nedan för att godkänna användning av cookies och behandling av dina uppgifter. Du kan när som helst återkomma för att ändra dina val.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "FLER ALTERNATIV",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "JAG GODKÄNNER INTE",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "JAG GODKÄNNER",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Visa ändamål",
                PURPOSE_SCREEN_TITLE_TEXT: "Vi värderar din integritet",
                PURPOSE_SCREEN_BODY_TEXT: "Du kan ange dina samtyckespreferenser och avgöra hur du vill att dina data ska användas utifrån ändamålen nedan. Du kan ange separata preferenser för oss och tredje parter. Varje ändamål har en beskrivning så att du kan se hur vi och våra samarbetspartner använder dina uppgifter.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Visa säljare",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Avbryt",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Spara & Avsluta",
                VENDOR_SCREEN_TITLE_TEXT: "Vi värderar din integritet",
                VENDOR_SCREEN_BODY_TEXT: "Du kan ange samtyckespreferenser för de enskilda tredje parter vi samarbetar med nedan. Du kan maximera informationen om företagen på listan för att se för vilka ändamål de använder uppgifter och på så sätt få hjälp att göra dina val. I vissa fall kan företag använda dina data utan att be om ditt samtycke, med stöd av sina legitima intressen. Du kan klicka på länkarna till deras integritetspolicyer för att få mer information och för att neka till sådan användning.",
                REJECT_ALL_BUTTON_TEXT: "AVVISA ALLA",
                ACCEPT_ALL_BUTTON_TEXT: "GODKÄNN ALLA",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Tillbaka till ändamål",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Avbryt",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Spara och Avsluta",
                CONSENT_LINK_LABEL: "Integritet",
                BACK_LABEL: "Tillbaka",
                VIEW_COMPANIES_LABEL: "Visa företag",
                HIDE_COMPANIES_LABEL: "Göm företag",
                THIRD_PARTY_VENDORS_LABEL: "Tredjepartsleverantörer",
                ON_LABEL: "På",
                OFF_LABEL: "Av",
                OFF_ON_LABEL: "Av/På",
                OTHER: "Övriga",
                NON_IAB_TITLE: "Icke-IAB-säljare",
                DESCRIPTION: "Beskrivning av säljaren:",
                COMPANY_LABEL: "Företag",
                REQUIRED_LABEL: "Vad som krävs",
                PRIVACY_POLICY_LABEL: "Integritetspolicy: ",
                PURPOSES_LABEL: "Ändamål (samtycke)",
                FEATURES_LABEL: "Funktioner:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Ändamål (legitima intressen)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Tillåt Google och deras teknologipartner att samla in data och använda cookies för personanpassning av annonser och mätningar."
            },
            ru: {
                INIT_SCREEN_TITLE_TEXT: "Мы с большим уважением относимся к Bашей конфиденциальности",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Мы и наши партнеры используем технологии, такие как cookie-файлы, и обрабатываем персональные данные, включая IP-адреса и идентификаторы cookie-файлов, чтобы персонализировать рекламу и контент в соответствии с вашими интересами, оценивать эффективность рекламы и контента, а также получать представление об аудитории, которая просматривает рекламу и контент. Нажмите ниже, чтобы дать согласие на использование этой технологии и обработку ваших персональных данных в этих целях. Вы можете в любой момент изменить свое решение и отказаться, вернувшись на этот сайт.",
                    2: "Мы и наши партнеры обрабатываем ваши персональные данные, включая IP-адреса и идентификаторы cookie-файлов, с использованием таких технологий, как cookie-файлы, чтобы персонализировать рекламу и контент в соответствии с вашими интересами, оценивать эффективность рекламы и контента, а также получать представление об аудитории, которая просматривает рекламу и контент. Нажмите ниже, чтобы дать согласие или выбрать, какие партнеры смогут обрабатывать ваши данные и для каких целей. Вы можете изменить настройки в любое время.",
                    3: "Предоставляемый контент и информация зависят от дохода, который мы получаем от рекламы. Мы и наши партнеры используем ваши персональные данные, включая IP-адреса и идентификаторы cookie-файлов, чтобы персонализировать рекламу и контент в соответствии с вашими интересами, оценивать эффективность рекламы и контента, а также получать представление об аудитории, которая просматривает рекламу и контент. Нажмите ниже, чтобы дать согласие на использование cookie-файлов и обработку ваших данных. Вы можете изменить свое решение в любое время.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "БОЛЬШЕ ВАРИАНТОВ",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "Я НЕ СОГЛАСЕН / НЕ СОГЛАСНА",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "Я даю согласие",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Показать цели",
                PURPOSE_SCREEN_TITLE_TEXT: "Мы с большим уважением относимся к Bашей конфиденциальности",
                PURPOSE_SCREEN_BODY_TEXT: "Вы можете установить настройки и решить, хотите ли вы, чтобы ваши данные использовались в указанных ниже целях. Вы можете установить настройки для нас отдельно от сторонних партнеров. Каждая цель подробно описана, чтобы вы знали, как мы и партнеры используем ваши данные.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Посмотреть поставщиков",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Отменить",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Сохранить и выйти",
                VENDOR_SCREEN_TITLE_TEXT: "Мы с большим уважением относимся к Bашей конфиденциальности",
                VENDOR_SCREEN_BODY_TEXT: "Ниже вы можете установить настройки для отдельных сторонних партнеров, с которыми мы работаем. Разверните каждый элемент списка компаний, чтобы узнать, для каких целей они используют данные. В некоторых случаях компании могут использовать ваши данные без вашего согласия, исходя из своих законных интересов. Вы можете перейти по ссылкам на их политики конфиденциальности, чтобы получить дополнительную информацию и отказаться от обработки.",
                REJECT_ALL_BUTTON_TEXT: "ОТКЛОНИТЬ ВСЁ",
                ACCEPT_ALL_BUTTON_TEXT: "ПРИНЯТЬ ВСЁ",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Вернуться к алгоритму",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Отменить",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "Сохранить и выйти",
                CONSENT_LINK_LABEL: "Конфиденциальность",
                BACK_LABEL: "Назад",
                VIEW_COMPANIES_LABEL: "Показать компании",
                HIDE_COMPANIES_LABEL: "Скрыть компании",
                THIRD_PARTY_VENDORS_LABEL: "Сторонние поставщики",
                ON_LABEL: "Вкл.",
                OFF_LABEL: "Выкл.",
                OFF_ON_LABEL: "Выкл./Вкл.",
                OTHER: "Другое",
                NON_IAB_TITLE: "Сторонние поставщики",
                DESCRIPTION: "Описание поставщика:",
                COMPANY_LABEL: "Компания",
                REQUIRED_LABEL: "Обязательное поле",
                PRIVACY_POLICY_LABEL: "Политика конфиденциальности: ",
                PURPOSES_LABEL: "Цели (согласие)",
                FEATURES_LABEL: "Особенности:",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Цели (законные интересы)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "RUSO !Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the Privacy <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Разрешить компании Google и ее технологическим партнерам собирать данные и использовать cookie-файлы для персонализации и оценки рекламы."
            },
            no: {
                INIT_SCREEN_TITLE_TEXT: "Vi verdsetter personvernet ditt",
                INIT_SCREEN_BODY_TEXT: {
                    1: "Vi og partnerne våre bruker teknologier, for eksempel informasjonskapsler, og behandler personlige data, for eksempel IP-adresser og informasjonskapsler, for å tilpasse annonser og innhold basert på interessene dine, måle resultatene til annonser og innhold, og få innsikt om publikum som tittet på annonser og innhold. Klikk nedenfor for å samtykke til bruken av denne teknologien og behandlingen av de personlige dataene dine for disse formålene. Du kan ombestemme deg og endre samtykkevalgene dine når som helst ved å returnere til dette nettstedet.",
                    2: "Vi og partnerne våre behandler de personlige dataene dine, for eksempel IP-adresser og informasjonskapsler, ved hjelp av teknologi som informasjonskapsler for å tilpasse annonser og innhold basert på interessene dine, måle resultatene til annonser og innhold, og få innsikt om publikum som tittet på annonser og innhold. Klikk nedenfor for å samtykke eller velge hvilke partnere som behandler dataene dine og for hvilke formål. Du kan når som helst endre innstillingene dine.",
                    3: "Kvalitetsinnholdet og informasjonen vi gir deg, avhenger av inntektene vi genererer fra annonsering. Vi og partnerne våre bruker de personlige dataene dine, for eksempel IP-adresser og informasjonskapsler, ved hjelp av teknologi som informasjonskapsler for å måle resultatene til annonser og innhold, og få innsikt om publikum som tittet på annonser og innhold. Klikk nedenfor for å samtykke til bruken av informasjonskapsler og behandlingen av dataene dine. Du kan når som helst gå tilbake til valgene dine.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "FLERE VALG",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "JEG AKSEPTERER IKKE",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "JEG AKSEPTERER",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "Vis formål",
                PURPOSE_SCREEN_TITLE_TEXT: "Vi verdsetter personvernet ditt",
                PURPOSE_SCREEN_BODY_TEXT: "Du kan angi samtykkepreferansene dine og bestemme hvordan du vil at dataene skal brukes, basert på formålene nedenfor. Du kan angi preferansene dine uavhengig av tredjepartspartnere. Hvert formål har en beskrivelse slik at du vet hvordan vi og partnerne bruker dataene dine.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "Se leverandører",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "Avbryt",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "LAGRE OG AVSLUTT",
                VENDOR_SCREEN_TITLE_TEXT: "Vi verdsetter personvernet ditt",
                VENDOR_SCREEN_BODY_TEXT: "Du kan angi samtykkepreferanser for de individuelle tredjepartspartnerne vi jobber med nedenfor. Utvid hvert selskapslisteelement for å se hvilke formål de bruker dataene for å bidra til å foreta valgene dine. I noen tilfeller kan selskaper bruke dataene dine uten å be om samtykke fra deg, basert på deres legitime interesser. Du kan klikke på deres personvernregler-lenker for mer informasjon og motsette deg slik behandling.",
                REJECT_ALL_BUTTON_TEXT: "AVVIS ALT",
                ACCEPT_ALL_BUTTON_TEXT: "AKSEPTER ALT",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "Vis formål",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "Avbryt",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "LAGRE OG AVSLUTT",
                CONSENT_LINK_LABEL: "Personvern",
                BACK_LABEL: "Tilbake",
                VIEW_COMPANIES_LABEL: "Vis selskaper",
                HIDE_COMPANIES_LABEL: "Skjul selskaper",
                THIRD_PARTY_VENDORS_LABEL: "Tredjepartsleverandører",
                ON_LABEL: "På",
                OFF_LABEL: "Av",
                OFF_ON_LABEL: "Av/På",
                OTHER: "Annet",
                COMPANY_LABEL: "Selskap",
                NON_IAB_TITLE: "Ikke-IAB-leverandører",
                DESCRIPTION: "Leverandørbeskrivelse:",
                REQUIRED_LABEL: "Obligatorisk",
                PRIVACY_POLICY_LABEL: "Personvernregler:",
                PURPOSES_LABEL: "Formål (samtykke)",
                FEATURES_LABEL: "Egenskaper",
                LEGITIMATE_INTEREST_PURPOSES_LABEL: "Formål (legitime interesser)",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                GOOGLE_PURPOSES_TEXT: "Tillat Google og deres teknologipartnere å samle inn data og bruke informasjonskapsler for annonsetilpassing og -måling."
            },
            ar: {
                INIT_SCREEN_TITLE_TEXT: "خصوصيتك تهمنا",
                INIT_SCREEN_BODY_TEXT: {
                    1: "نستخدم نحن وشركاؤنا ملفات التعريف على موقعنا بهدف تخصيص المحتوى والإعلانات المبوبة. كما يمكننا عن طريقها تزويد الصفحة بأيقونات وسائل التواصل الاجتماعي المختلفة. باستخدام هذه الخاصية يمكننا السيطرة على انتقاء زوار الصفحة.أنقر أدناه للموافقة على استخدام هذه التقنية عبر الويب يمكنك تغيير قرارك عبر تغيير خيارات الموافقة الموجودة على الموقع في جميع الأوقات.",
                    2: "نحن وشركاؤنا نعالج البيانات الشخصية عن طريق استخدام التكنولوجيا المعلوماتية للتعرف على ما يحلوا لزوار الصفحة مما يساعد الفريق الصحفي على اتخاذ قراراته التحريرية. ولديك مطلق الحرية في اختيار من يستخدم بياناتك ولأي هدف. كما يمكنك العودة لتغيير بياناتك الشخصية على الصفحة في أي وقت أردت",
                    3: "تعتمد جودة المعلومات التي نقدمها لك على الأرباح التي نحققها من الإعلانات. نحن وشركاؤنا نستخدم بياناتك الشخصية لتزويدك بالإعلانات التي تهمك ومعرفة الموضوعات التي تهمك على موقعنا ونسبة نشاطك. إذا وافقت على استخدام بياناتك الشخصية للأهداف السابقة فقط أنقر أدناه، يمكنك تغيير اختيارك في أي وقت.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "Settings",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "غير موافق",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "موافق",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "اظهار الاستخدامات",
                PURPOSE_SCREEN_TITLE_TEXT: "خصوصيتك تهمنا",
                PURPOSE_SCREEN_BODY_TEXT: "يمكنك تحديد كيفية استخدام بياناتك الشخصية وفقا للأدوات الموضحة أدناه. يمكنك أيضا اختيار قائمتك المفضلة بشكل مستقل بعيدا عن شركاء الطرف الثالث كل غرض له تعريف مفصل لكي تتعرف على كيفية استخدامنا لبياناتك الشخصية",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "تعرف على قائمة المشاركين",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "حذف",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "حفظ وخروج",
                VENDOR_SCREEN_TITLE_TEXT: "خصوصيتك تهمنا",
                VENDOR_SCREEN_BODY_TEXT: "يمكنك التعرف على خواص كل شركة على حدا فيما يلي. هناك قائمة خاصة بكل شركة لمعرفة كيفية استخدامهم لبياناتك الشخصية. في بعض الحالات تتعرف الشركات على بياناتك الخاصة دون استئذانك سعيا لتقديم ما هو أفضل. أنقر هنا للتعرف على سياسات الخصوصية والمعلومات لاختيار ما يناسبك.",
                REJECT_ALL_BUTTON_TEXT: "غير موافق على كل ما سبق",
                ACCEPT_ALL_BUTTON_TEXT: "أوافق على كل ما سبق",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "العودة إلى الاستخدامات",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "حذف",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "حفظ وخروج",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                CONSENT_LINK_LABEL: "إعدادات الخصوصية"
            },
            fa: {
                INIT_SCREEN_TITLE_TEXT: "ما به حریم خصوصی شما احترام می‌گذاریم",
                INIT_SCREEN_BODY_TEXT: {
                    1: "ما و شرکایمان از فناوری کوکی برروی سایتمان استفاده می کنیم و به این ترتیب محتوا و تبلیغات متناسب شخصیت شما ارائه خواهد شد. برای اعلام موافقت خود در زیر کلیک می کنید. شما می‌توانید این تنظیمات را هر موقع که خواستید تغییر دهید.",
                    2: "ما و شرکایمان داده‌های شخصی را با استفاده از فناوری کوکی بررسی می کنیم تا از آن برای تبلیغ، تحلیل ترافیک سایت و ارائه بهتر اطلاعات به شما استفاده کنیم. شما امکان تعیین اینکه چه کسی از داده های شما برای چه هدفی استفاده کند را خواهید داشت و می‌توانید این تنظیمات را در آینده تغییر دهید.",
                    3: "کیفیت مطالبی که به شما ارائه می کنیم به درآمدی که از راه تبلیغات کسب می کنیم، بستگی خواهد شد. ما و شرکایمان از داده های شخصی شما برای ارائه تبلیغات متناسب با وضعیت شما و بررسی میزان فعالیت بر روی وبسایت و ارائه محتوای متناسب با حال شما استفاده خواهیم کرد. برای اعلام موافقت خود در زیر کلیک کنید. هر گاه خواستید می‌توانید در انتخاب خود تجدیدنظر کنید.",
                    softOptIn: "We and our partners use technologies, such as cookies, and process personal data, such as IP addresses and cookie identifiers, to personalise ads and content based on your interests, measure the performance of ads and content, and derive insights about the audiences who saw ads and content. Continue using this website or click below to consent to the use of this technology and the processing of your personal data for these purposes. You can change your mind and change your consent choices at any time by returning to this site."
                },
                INIT_SCREEN_SETTINGS_BUTTON_TEXT: "Settings",
                INIT_SCREEN_REJECT_BUTTON_TEXT: "قبول نمی کنم",
                INIT_SCREEN_ACCEPT_BUTTON_TEXT: "قبول می کنم",
                INIT_SCREEN_PURPOSE_LINK_TEXT: "اهداف را نشان دهید",
                PURPOSE_SCREEN_TITLE_TEXT: "ما به حریم خصوصی شما احترام می‌گذاریم",
                PURPOSE_SCREEN_BODY_TEXT: "شما می‌توانید درجه رضایت خود را تنظیم و اعلام کنید. می توانید تعیین کنید چگونه می‌خواهید از داده های شما برای اهداف زیر استفاده شود. می توانید تنظیمات خود را به طور مستقل از شرکای ما اعلام کنید. برای هر هدف تعریفی ارائه شده است تا شما بدانید ما چگونه از داده های شما بهره می گیریم.",
                PURPOSE_SCREEN_VENDOR_LINK_TEXT: "دیدن فهرست کامل شرکاء",
                PURPOSE_SCREEN_CANCEL_BUTTON_TEXT: "لغو",
                PURPOSE_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "ثبت تنظیمات و خروج",
                VENDOR_SCREEN_TITLE_TEXT: "ما به حریم خصوصی شما احترام می‌گذاریم",
                VENDOR_SCREEN_BODY_TEXT: "می توانید ترجیحات خود در زمینه اعلام رضایت برای هر کدام از شرکت ها زیر اعلام کنید. فهرست هر کدام از شرکت ها را باز کنید تا ببینید برای چه هدفی آنها از داده های شما استفاده می کنند. در برخی موارد شرکت‌ها ممکن است استفاده از اطلاعات شما را براساس منافع مشروع خود و بدون کسب رضایت شما افشاء کنند. می‌توانید بر روی سیاست‌های آن‌ها در زمینه حریم خصوصی کلیک کنید تا به اطلاعات بیشتر دست یابید.",
                REJECT_ALL_BUTTON_TEXT: "هیچکدام از موارد را نمی‌پذیرم",
                ACCEPT_ALL_BUTTON_TEXT: "پذیرش کلیه موارد",
                VENDOR_SCREEN_PURPOSES_LINK_TEXT: "بازگشت به اهداف",
                VENDOR_SCREEN_CANCEL_BUTTON_TEXT: "لغو",
                VENDOR_SCREEN_SAVE_AND_EXIT_BUTTON_TEXT: "ثبت تنظیمات و خروج",
                SOFT_OPT_IN_ALERT_TITLE_TEXT: "Your consent preferences have been saved.",
                SOFT_OPT_IN_ALERT_BODY_TEXT: "To withdraw your consent or change your preferences, please click on the <strong>Privacy</strong>button.",
                CONSENT_LINK_LABEL: "تنظیمات حریم خصوصی"
            }
        })
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.logSetCookieEvent = n.logTracking = n.track = void 0;
    var o = t(2),
        i = t(0),
        a = "",
        s = (n.track = function(e, n) {
            a += e + (n ? ":" + n : "") + ","
        }, function() {
            return encodeURIComponent(navigator && navigator.userAgent)
        }),
        r = function(e) {
            return [e.uiLayout[0], e.defaultToggleValue, e.initScreenRejectButtonShowing, e.pCode, e.initScreenBodyTextOption, e.language].join(",")
        },
        l = (n.logTracking = function(e, n) {
            var t = "";
            window.location && window.location.href && (t = encodeURIComponent(window.location.href));
            var o = [n, (new Date).getTime(), encodeURIComponent(e.publisherName), t, "", "", "", "", r(e), a, s()].join(";");
            l(o), a = ""
        }, n.logSetCookieEvent = function(e, n) {
            if (e && e.value) {
                var t = "";
                window.location && window.location.href && (t = encodeURIComponent(window.location.href)), a = "setCookie";
                var i = [n, (new Date).getTime(), encodeURIComponent(o.config.publisherName), t, e.type, e.name, e.value, e.cookieDomain, r(o.config), a, s()].join(";");
                l(i), a = ""
            }
        }, function(e) {
            var n = "https://audit.quantcast.mgr.consensu.org/?log=" + e;
            (0, i.getJson)({
                url: n
            }, function() {})
        })
}, function(e, n, t) {
    (function(e) {
        ! function(e) {
            "use strict";
            e.exports.is_uri = t, e.exports.is_http_uri = o, e.exports.is_https_uri = i, e.exports.is_web_uri = a, e.exports.isUri = t, e.exports.isHttpUri = o, e.exports.isHttpsUri = i, e.exports.isWebUri = a;
            var n = function(e) {
                return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)
            };

            function t(e) {
                if (e && !/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e) && !/%[^0-9a-f]/i.test(e) && !/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)) {
                    var t, o, i, a, s, r = "",
                        l = "";
                    if (r = (t = n(e))[1], o = t[2], i = t[3], a = t[4], s = t[5], r && r.length && i.length >= 0) {
                        if (o && o.length) {
                            if (0 !== i.length && !/^\//.test(i)) return
                        } else if (/^\/\//.test(i)) return;
                        if (/^[a-z][a-z0-9\+\-\.]*$/.test(r.toLowerCase())) return l += r + ":", o && o.length && (l += "//" + o), l += i, a && a.length && (l += "?" + a), s && s.length && (l += "#" + s), l
                    }
                }
            }

            function o(e, o) {
                if (t(e)) {
                    var i, a, s, r, l = "",
                        u = "",
                        d = "",
                        c = "";
                    if (l = (i = n(e))[1], u = i[2], a = i[3], s = i[4], r = i[5], l) {
                        if (o) {
                            if ("https" != l.toLowerCase()) return
                        } else if ("http" != l.toLowerCase()) return;
                        if (u) return /:(\d+)$/.test(u) && (d = u.match(/:(\d+)$/)[0], u = u.replace(/:\d+$/, "")), c += l + ":", c += "//" + u, d && (c += d), c += a, s && s.length && (c += "?" + s), r && r.length && (c += "#" + r), c
                    }
                }
            }

            function i(e) {
                return o(e, !0)
            }

            function a(e) {
                return o(e) || i(e)
            }
        }(e)
    }).call(n, t(8)(e))
}, function(e, n) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0,
            get: function() {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0,
            get: function() {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    n.default = {
        isUserInEU: true,
        setUserInEU: function(e) {
            this.isUserInEU = e
        },
        checkUserIsInEU: function(e) {
            null == this.isUserInEU && (this.isUserInEU = !0), "function" == typeof e && e(this.isUserInEU)
        }
    }
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = t(0),
        i = u(t(2)),
        a = u(t(3)),
        s = t(4),
        r = t(1),
        l = u(t(15));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var d = {
        cachedVendorLists: {},
        cachedVendorIdMap: {},
        cachedNonIabVendorList: [],
        cachedPublisherVendorList: void 0,
        blockedVendorsHash: "",
        nonIabVendorsHash: "",
        vendorListCallbacks: {},
        vendorListResponseHandler: function(e, n, t, o) {
            try {
                if (4 === e.readyState) {
                    if (200 !== e.status) throw "cannot fetch the vendor list";
                    t(e.response ? "string" == typeof e.response ? JSON.parse(e.response) : e.response : JSON.parse(e.responseText))
                }
            } catch (e) {
                o(n)
            }
        },
        mergeVendorList: function(e) {
            for (var n = d.cachedPublisherVendorList.vendors, t = d.getVendorIdMap(e), o = [], i = 0; i < n.length; i++) {
                var a = t[n[i].id.toString()];
                a && o.push(a)
            }
            return o
        },
        getVendorIdMap: function(e) {
            if (d.cachedVendorIdMap[e.vendorListVersion]) return d.cachedVendorIdMap[e.vendorListVersion];
            for (var n, t = {}, o = e.vendors, i = 0; i < o.length; i++) {
                var a = o[i].id;
                (void 0 === n || a > n) && (n = a), t[a] = o[i]
            }
            return t.max = n, d.cachedVendorIdMap[e.vendorListVersion] = t, t
        },
        getNonIabVendorIdMax: function(e) {
            for (var n, t = 0; t < e.length; t++) {
                var o = e[t].vendorId;
                (void 0 === n || o > n) && (n = o)
            }
            return n
        },
        retrieveVendorList: function(e, n, t) {
            if (this.cachedVendorLists[n]) t(this.cachedVendorLists[n], !0);
            else if (this.vendorListCallbacks[n] && this.vendorListCallbacks[n].size() > 0) this.vendorListCallbacks[n].push(t);
            else {
                this.vendorListCallbacks[n] = new o.CallbackArray, this.vendorListCallbacks[n].push(t);
                var i = e.replace("/VERSION", "LATEST" === n ? "" : "/v-" + n);
                d.fetchGlobalVendorList(i, n)
            }
        },
        fetchGlobalVendorList: function(e, n) {
            (0, o.getJson)({
                url: e
            }, function(e) {
                d.vendorListResponseHandler(e, n, function(e) {
                    e.vendors = d.sortVendorList(e.vendors);
                    var t = d.getVendorIdMap(e);
                    d.cachedVendorIdMap[n] = t, d.cachedVendorLists[n] = e, l.default.setPurposeList(r.DEFAULT_LANGUAGE, {
                        purposes: e.purposes,
                        features: e.features
                    }), "" !== i.default.publisherVendorListUrl ? d.fetchPublisherVendorList(n) : d.vendorListCallbacks[n].call(d.cachedVendorLists[n], !0)
                }, function(n) {
                    d.vendorListCallbacks[n].call({
                        status: "Exception caught when parsing & handling global vendor list." + e.responseURL
                    }, !1)
                })
            })
        },
        fetchPublisherVendorList: function(e) {
            if (void 0 === d.cachedPublisherVendorList)(0, o.getJson)({
                url: i.default.publisherVendorListUrl
            }, function(n) {
                d.vendorListResponseHandler(n, e, function(n) {
                    d.cachedPublisherVendorList = n;
                    var t = d.mergeVendorList(d.cachedVendorLists[e]);
                    d.cachedVendorLists[e].vendors = d.sortVendorList(t), n.blockedVendorsHash && "" !== n.blockedVendorsHash && (d.blockedVendorsHash = n.blockedVendorsHash), d.vendorListCallbacks[e].call(d.cachedVendorLists[e], !0)
                }, function(n) {
                    d.vendorListCallbacks[n].call(d.cachedVendorLists[e], !0)
                })
            });
            else {
                var n = d.mergeVendorList(d.cachedVendorLists[e]);
                d.cachedVendorLists[e].vendors = d.sortVendorList(n), d.vendorListCallbacks[e].call(d.cachedVendorLists[e], !0)
            }
        },
        fetchNonIabVendorList: function(e, n) {
            "" !== i.default.nonIabVendorListUrl ? 0 === d.cachedNonIabVendorList.length ? (0, o.getJson)({
                url: i.default.nonIabVendorListUrl
            }, function(t) {
                d.vendorListResponseHandler(t, e, function(e) {
                    "nonIabVendorList" in e && e.nonIabVendorList.length && (d.cachedNonIabVendorList = e.nonIabVendorList, e.nonIabVendorsHash && "" !== e.nonIabVendorsHash && (d.nonIabVendorsHash = e.nonIabVendorsHash)), d.cachedNonIabVendorList = d.sortVendorList(d.cachedNonIabVendorList), n(d.cachedNonIabVendorList, d.cachedNonIabVendorList.length > 0)
                })
            }) : n(d.cachedNonIabVendorList, d.cachedNonIabVendorList.length > 0) : n(void 0, !1)
        },
        getVendorList: function(e, n) {
            null === e || void 0 === e ? a.default.fetchVendorConsentCookie(function(e) {
                var t = "LATEST";
                if (e && "found" === e.status) {
                    var o = new s.VendorConsentAccess;
                    o.setAll(e.value) && (t = o.getVendorListVersion(), d.isBetaVendorListVersion(o) && (t = "LATEST"))
                }
                d.retrieveVendorList("https://vendorlist.consensu.org/VERSION/vendorlist.json", t, n)
            }) : "number" == typeof e || "LATEST" === e ? d.retrieveVendorList("https://vendorlist.consensu.org/VERSION/vendorlist.json", e, n) : n({
                error: "Requesting invalid version: " + e
            }, !1)
        },
        getNonIabVendorList: function(e) {
            d.fetchNonIabVendorList("LATEST", e)
        },
        isBlockedVendorsHashUpdated: function(e) {
            i.default.pCode && a.default.fetchBlockedVendorsHashValue(function(n, t) {
                if (n && t) {
                    var a = n;
                    (0, o.getJson)({
                        url: i.default.publisherVendorListUrl
                    }, function(n) {
                        d.vendorListResponseHandler(n, "LATEST", function(n) {
                            n.blockedVendorsHash && "" !== n.blockedVendorsHash && n.blockedVendorsHash !== a ? (d.blockedVendorsHash = n.blockedVendorsHash, "function" == typeof e && e()) : d.blockedVendorsHash = a
                        }, function(e) {
                            d.blockedVendorsHash = a
                        })
                    })
                } else console.log("BLOCKED VENDORS HASH NOT FOUND"), "function" == typeof e && e()
            })
        },
        isNonIabVendorsHashUpdated: function(e) {
            i.default.pCode && a.default.fetchNonIabVendorsHashValue(function(n, t) {
                if (n && t) {
                    var a = n;
                    (0, o.getJson)({
                        url: i.default.nonIabVendorListUrl
                    }, function(n) {
                        d.vendorListResponseHandler(n, "LATEST", function(n) {
                            n.nonIabVendorsHash && "" !== n.nonIabVendorsHash && n.nonIabVendorsHash !== a ? (d.nonIabVendorsHash = n.nonIabVendorsHash, "function" == typeof e && e()) : d.nonIabVendorsHash = a
                        }, function(e) {
                            d.nonIabVendorsHash = a
                        })
                    })
                } else console.log("NON-IAB VENDORS HASH NOT FOUND"), "function" == typeof e && e()
            })
        },
        checkForNewVendorList: function(e, n) {
            var t = !1;
            d.getVendorList("LATEST", function(o) {
                "error" !== o.status && o.vendorListVersion > e && (t = !0), "function" == typeof n && n(t)
            })
        },
        shouldUpdateVendorList: function(e) {
            return Date.now() - e > i.default.vendorListUpdateFreq * o.MILLISEC_DAY
        },
        isBetaVendorListVersion: function(e) {
            return e.getMaxVendorId() == r.BETA_MAX_VENDOR_ID
        },
        sortVendorList: function(e) {
            return e.sort(function(e, n) {
                var t = e.name.toLowerCase(),
                    o = n.name.toLowerCase();
                return t < o ? -1 : t > o ? 1 : 0
            }), e
        }
    };
    n.default = d
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    }), n.getNonIABVendorConsents = n.getGooglePersonalization = n.getConsentData = n.getCurrentVendorConsents = n.getVendorConsents = n.retrieveParsedPublisherConsents = n.getCurrentPublisherConsents = n.getPublisherConsents = n.callbacksWaitingForConsent = n.runConsentUiCallback = n.setConsentUiCallback = n.saveConsents = n.displayConsentUi = n.nonIabConsentValues = n.RepromptOptionsValues = n.googleConsentValues = n.publisherConsentValues = n.vendorConsentValues = void 0;
    var o = E(t(9)),
        i = E(t(12)),
        a = E(t(3)),
        s = E(t(10)),
        r = t(2),
        l = E(r),
        u = t(0),
        d = t(4),
        c = t(1);

    function E(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var p = n.vendorConsentValues = new d.VendorConsentAccess,
        T = n.publisherConsentValues = new d.PublisherConsentAccess,
        _ = n.googleConsentValues = new d.GoogleConsentAccess,
        f = n.RepromptOptionsValues = new d.RepromptOptionsAccess,
        g = n.nonIabConsentValues = new d.NonIabVendorConsentAccess,
        h = (n.displayConsentUi = function(e, n, t) {
            if (!(0, u.isUnsupportedBrowser)())
                if (e = e || 1, r.isConfigInitialized)
                    if (window.__cmpui) window.__cmpui("init", e, n), window.__cmpui("track", "CMP_Display", i.default.isInitialized ? "changeconsentdisplay" : "initializationdisplay"), window.__cmpui("logTracking", l.default);
                    else {
                        var o = window.innerWidth < 500 ? "popup" : l.default.uiLayout,
                            a = document.createElement("script");
                        a.type = "text/javascript", document.head.insertBefore(a, document.head.childNodes[0]), a.onload = function() {
                            window.__cmpui("init", e, n), window.__cmpui("track", "CMP_Display", i.default.isInitialized ? "changeconsentdisplay" : "initializationdisplay"), window.__cmpui("logTracking", l.default)
                        }, a.src = "https://static.quantcast.mgr.consensu.org/v25/cmpui-" + o + ".js", a.integrity = "banner" === o ? "sha256-aKyqY267T5JgyLW1+poGzZbk1CpscK1bTUclUKIj2kM=" : "sha256-eMNy+K7OgJIlExqP6fexF88WdcB7yq3hZZh0C6wO02w=", a.crossOrigin = "anonymous"
                    }
            else console.error("You must initialize the config before displaying the consent ui!")
        }, n.saveConsents = function(e, n) {
            if (!(0, u.isUnsupportedBrowser)()) {
                l.default.googlePersonalization && (_.setConsentValue(e.googlePurposeConsents), a.default.setGoogleConsentCookie(_.build(), null));
                var t = e.vendorList,
                    o = s.default.getVendorIdMap(t);
                if (e.nonIabVendorList.length) var i = e.nonIabVendorList,
                    r = s.default.getNonIabVendorIdMax(i);
                for (var d = e.publisherPurposes, c = d.length, E = 0; E < c; E++) T.setStandardPurposeConsent(e.publisherPurposeConsents[E], d[E].id);
                c && a.default.setPublisherConsentCookie(T.build(), null);
                var h = t.purposes,
                    N = h.length;
                for (E = 0; E < N; E++) p.setPurposeConsent(e.purposeConsents[E], h[E].id);
                if (e.nonIabVendorList.length) {
                    g.setMaxVendorId(r);
                    for (var m = 0; m < i.length; m++) {
                        var C = i[m].vendorId;
                        g.setVendorConsent(e.nonIabVendorConsents[C], C)
                    }
                    a.default.setNonIabVendorsHashValue(s.default.nonIabVendorsHash, null), a.default.setNonIabVendorCookie(g.build(), null)
                }
                f.setInitScreenBodyTextOption(l.default.initScreenBodyTextOption), a.default.setRepromptOptionsValue(f.build(), null), "" !== s.default.blockedVendorsHash && a.default.setBlockedVendorsHashValue(s.default.blockedVendorsHash, null);
                var O = t.vendors;
                p.setMaxVendorId(o.max);
                for (m = 0; m < O.length; m++) {
                    C = O[m].id;
                    p.setVendorConsent(e.vendorConsents[C], C)
                }
                p.setVendorListVersion(t.vendorListVersion), p.setConsentScreen(e.consentPage), a.default.setVendorConsentCookie(p.build(), n)
            }
        }, []),
        N = (n.setConsentUiCallback = function(e) {
            "function" == typeof e && h.push(e)
        }, n.runConsentUiCallback = function(e) {
            if (h.length > 0)
                for (var n = [].concat(h); n.length > 0;) n.shift()(e)
        }, n.callbacksWaitingForConsent = []),
        m = (n.getPublisherConsents = function(e, n) {
            if (i.default.isInitialized) return m(e, n);
            N.push(["getPublisherConsents", e, n])
        }, n.getCurrentPublisherConsents = function(e, t) {
            C(function(o, i) {
                var a = {},
                    s = i;
                i && "parsed" === o.status && (n.publisherConsentValues = T = o.publisherConsentValues, (0, u.isArray)(e) && e.length > 0 ? (e.forEach(function(e) {
                    a[e] = T.getStandardPurposeConsent(e)
                }), s = !0) : null === e || void 0 === e || (0, u.isArray)(e) && 0 === e.length ? (a = T.getStandardPurposeConsent(), s = !0) : (a = null, s = !1)), (0, u.doCallback)(t, {
                    standardPurposeConsents: a
                }, s)
            })
        }),
        C = n.retrieveParsedPublisherConsents = function(e) {
            l.default.publisherPurposeIds && 0 != l.default.publisherPurposeIds.length ? a.default.fetchPublisherConsentCookie(function(n, t) {
                if (t)
                    if ("notfound" !== n.status) {
                        var o = new d.PublisherConsentAccess;
                        o.setAll(n.value) ? (0, u.doCallback)(e, {
                            status: "parsed",
                            publisherConsentValues: o
                        }, !0) : (0, u.doCallback)(e, {
                            status: "parse_error"
                        }, !1)
                    } else(0, u.doCallback)(e, {
                        status: "notfound"
                    }, !0);
                else(0, u.doCallback)(e, {
                    status: "fetch_error"
                }, !1)
            }) : (0, u.doCallback)(e, {
                status: "notneeded"
            }, !0)
        },
        O = (n.getVendorConsents = function(e, n) {
            L("getVendorConsents", e, n, !0)
        }, n.getCurrentVendorConsents = function(e, n) {
            (0, u.isUnsupportedBrowser)() || L("getCurrentVendorConsents", e, n, !1)
        }),
        I = function(e) {
            return !!(e || l.default && "always" === l.default.displayUi)
        },
        S = function(e, n, t) {
            "function" == typeof e && e({
                metadata: null,
                gdprApplies: I(n),
                hasGlobalConsent: a.default.isGlobalScope,
                hasGlobalScope: a.default.isGlobalScope,
                purposeConsents: t ? {} : null,
                vendorConsents: t ? {} : null
            }, !0)
        },
        L = function(e, n, t, r) {
            if ("function" == typeof t) {
                var l = !1;
                l = r ? i.default.isInitialized : !!a.default.cookie[c.VENDOR_CONSENT_COOKIE_NAME];
                var d = a.default.cookie[c.VENDOR_CONSENT_COOKIE_NAME];
                l ? o.default.checkUserIsInEU(function(e) {
                    var o = {};
                    if (d && "notfound" !== d.status)
                        if (p.setAll(d.value)) {
                            if (s.default.isBetaVendorListVersion(p) && S(t, e, !0), n && 0 !== n.length)
                                for (r = 0; r < n.length; r++) o[n[r]] = p.getVendorConsent(n[r]);
                            else {
                                var i = p.getVendorConsent(null);
                                if (i)
                                    for (var r = 0; r < i.length; r++) void 0 !== i[r] && (o[r] = !!i[r])
                            }
                            "function" == typeof t && t({
                                metadata: (0, u.isUnsupportedBrowser)() ? null : p.getMetadata(!0),
                                gdprApplies: I(e),
                                hasGlobalConsent: a.default.isGlobalScope,
                                hasGlobalScope: a.default.isGlobalScope,
                                purposeConsents: p.getPurposeConsent(),
                                vendorConsents: o
                            }, !0)
                        } else(0, u.logError)("error fetching consents"), S(t, e, !1);
                    else S(t, e, !0)
                }) : "getVendorConsents" === e ? N.push(["getVendorConsents", n, t]) : "getCurrentVendorConsents" === e && a.default.fetchVendorConsentCookie(function() {
                    O(n, t)
                })
            }
        };
    n.getConsentData = function(e, n) {
        (0, u.isUnsupportedBrowser)() || (null === e || void 0 === e || e == c.CONSENT_STRING_VERSION ? i.default.isInitialized ? o.default.checkUserIsInEU(function(e) {
            try {
                var t = a.default.cookie[c.VENDOR_CONSENT_COOKIE_NAME].value;
                "function" == typeof n && n({
                    gdprApplies: I(e),
                    hasGlobalConsent: a.default.isGlobalScope,
                    hasGlobalScope: a.default.isGlobalScope,
                    consentData: t
                }, !0)
            } catch (t) {
                "function" == typeof n && n({
                    gdprApplies: I(e),
                    hasGlobalConsent: null,
                    hasGlobalScope: null,
                    consentData: null
                }, !1)
            }
        }) : N.push(["getConsentData", e, n]) : "function" == typeof n && n(null, !1))
    }, n.getGooglePersonalization = function(e) {
        (0, u.isUnsupportedBrowser)() || (i.default.isInitialized ? a.default.fetchGoogleConsentCookie(function(n) {
            _.setAll(n.value), "function" == typeof e && e({
                googlePersonalizationData: _.fields
            }, void 0 !== n.value)
        }) : N.push(["getGooglePersonalization", e, null]))
    }, n.getNonIABVendorConsents = function(e, n) {
        (0, u.isUnsupportedBrowser)() || "function" == typeof n && (i.default.isInitialized ? o.default.checkUserIsInEU(function(t) {
            a.default.fetchNonIabConsentCookie(function(o) {
                var i = {};
                if (o && "notfound" !== o.status)
                    if (g.setAll(o.value)) {
                        if (e)
                            for (r = 0; r < e.length; r++) i[e[r]] = g.getVendorConsent([e[r]]);
                        else {
                            var s = g.getVendorConsent(null);
                            if (s)
                                for (var r = 0; r < s.length; r++) void 0 !== s[r] && (i[r] = !!s[r])
                        }
                        "function" == typeof n && n({
                            metadata: (0, u.isUnsupportedBrowser)() ? null : g.getMetadata(!0),
                            gdprApplies: I(t),
                            hasGlobalConsent: a.default.isGlobalScope,
                            hastGlobalScope: a.default.isGlobalScope,
                            nonIABVendorConsents: i
                        }, !0)
                    } else n({}, !1);
                else n({}, !1)
            })
        }) : N.push(["getNonIABVendorConsents", e, n]))
    }
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        i = t(0),
        a = t(11),
        s = t(1),
        r = T(t(9)),
        l = T(t(3)),
        u = T(t(14)),
        d = T(t(10)),
        c = t(4),
        E = t(2),
        p = T(E);

    function T(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var _ = {
        isInitialized: !1,
        initCalled: !1,
        initConsentState: function() {
            (0, a.retrieveParsedPublisherConsents)(function(e, n) {
                n && "notfound" !== e.status ? l.default.fetchGoogleConsentCookie(function(e, n) {
                    if (p.default.googlePersonalization) {
                        if (!n || "notfound" === e.status) return void(0, a.displayConsentUi)(null, null, !0)
                    } else n && (document.cookie = s.GOOGLE_CONSENT_COOKIE_NAME + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; max-age=-1; domain=" + p.default.cookieDomain);
                    l.default.fetchVendorConsentCookie(function(e, n) {
                        if (n && "notfound" !== e.status)
                            if ("found" === e.status) {
                                var t = new c.VendorConsentAccess;
                                if (t.setAll(e.value)) {
                                    var o = d.default.isBetaVendorListVersion(t),
                                        r = t.getLastUpdated(),
                                        l = t.getCmpId();
                                    "" !== p.default.publisherVendorListUrl && d.default.isBlockedVendorsHashUpdated(function() {
                                        (0, a.displayConsentUi)(null, null, !0)
                                    }), (l < 0 || l > s.MAX_VALID_CMP_ID || -1 !== s.NOT_VALID_CMP_IDS.indexOf(l)) && (0, a.displayConsentUi)(null, null, !0);
                                    var u = function() {
                                        (0, a.getCurrentPublisherConsents)(null, function(e) {
                                            (0, i.isObjectAllFalse)(e.standardPurposeConsents) ? (0, a.getCurrentVendorConsents)(null, function(e) {
                                                (0, i.isObjectAllFalse)(e.purposeConsents) && d.default.shouldUpdateVendorList(r) ? (0, a.displayConsentUi)(null, null, !0) : ((0, a.runConsentUiCallback)({
                                                    reason: "consent-current",
                                                    uiShown: !1
                                                }), (0, i.displayPersistentConsentLink)(p.default))
                                            }) : ((0, a.runConsentUiCallback)({
                                                reason: "consent-current",
                                                uiShown: !1
                                            }), (0, i.displayPersistentConsentLink)(p.default))
                                        })
                                    };
                                    if (d.default.shouldUpdateVendorList(t.getLastUpdated()) || o) {
                                        var E = o ? 0 : t.getVendorListVersion();
                                        d.default.checkForNewVendorList(E, function(e) {
                                            e ? (0, a.displayConsentUi)(null, null, !0) : u()
                                        })
                                    } else u()
                                } else(0, i.logError)("error parsing cookie"), (0, a.displayConsentUi)(null, null, !0)
                            } else(0, i.logError)("Fetch Cookie response is invalid: ", e.status);
                        else(0, a.displayConsentUi)(null, null, !0)
                    }), l.default.fetchRepromptOptionsValue(function(e, n) {
                        if (n) {
                            var t = new c.RepromptOptionsAccess,
                                i = "object" === (void 0 === e ? "undefined" : o(e)) ? e.value : e;
                            if (t.setAll(i)) t.getInitScreenBodyTextOption() != p.default.initScreenBodyTextOption && (0, a.displayConsentUi)()
                        } else(0, a.displayConsentUi)()
                    }), l.default.fetchNonIabConsentCookie(function(e, n) {
                        n && "" !== p.default.nonIabVendorListUrl && d.default.isNonIabVendorsHashUpdated(function() {
                            (0, a.displayConsentUi)(null, null, !0)
                        })
                    })
                }) : (0, a.displayConsentUi)(null, null, !0)
            })
        },
        initConsentStateForIE: function() {
            for (var e = p.default.publisherPurposeIds, n = e.length, t = 0; t < n; t++) a.publisherConsentValues.setStandardPurposeConsent(!0, e[t]);
            for (t = 1; t <= 5; t++) a.vendorConsentValues.setPurposeConsent(!0, t);
            a.vendorConsentValues.setMaxVendorId(300);
            for (t = 1; t <= 300; t++) a.vendorConsentValues.setVendorConsent(!1, t);
            (0, a.runConsentUiCallback)({
                reason: "unsupported-browser",
                uiShown: !1
            })
        },
        init: function(e) {
            if (_.initCalled) console.warn("init has already been called and should only be run one time.");
            else {
                _.initCalled = !0, !e && E.isConfigInitialized || (0, E.initializeConfig)(e);
                var n = function(e) {
                    return function() {
                        l.default.init(p.default, e), (0, a.setConsentUiCallback)(function() {
                            _.isInitialized = !0, (0, i.executePendingCalls)(a.callbacksWaitingForConsent)
                        }), (0, i.isUnsupportedBrowser)() ? (r.default.setUserInEU(!1), _.initConsentStateForIE()) : "always" === p.default.displayUi ? _.initConsentState() : r.default.checkUserIsInEU(function(e) {
                            e ? _.initConsentState() : (0, a.runConsentUiCallback)({
                                reason: "not-EU",
                                uiShown: !1
                            })
                        })
                    }
                };
                u.default.setup(n(!0), n(!1))
            }
        }
    };
    n.default = _
}, , function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    t(0);
    var o = t(1),
        i = {
            setup: function(e, n) {
                var t = !1,
                    i = !1,
                    a = function() {
                        var e = document.getElementById("qc_choice_3pc_frame");
                        try {
                            e && document.body.removeChild(e)
                        } catch (e) {}
                    },
                    s = setTimeout(function() {
                        i || (t = !0, -1 != document.cookie.indexOf(o.THIRD_PARTY_COOKIE_MARK + "=1") ? e() : (document.cookie.indexOf(o.THIRD_PARTY_COOKIE_MARK + "=0"), n()), a())
                    }, o.THIRD_PARTY_COOKIE_CHECK_TIMEOUT),
                    r = function(r) {
                        "string" == typeof r.data && -1 != r.data.indexOf("3PC_check:") && (clearTimeout(s), t || (i = !0, "3PC_check:supported" === r.data ? (document.cookie = o.THIRD_PARTY_COOKIE_MARK + "=1; path=/", e()) : "3PC_check:unsupported" === r.data && (document.cookie = o.THIRD_PARTY_COOKIE_MARK + "=0; path=/", n()), a()))
                    };
                void 0 == window.addEventListener ? window.attachEvent("onmessage", r) : window.addEventListener("message", r, !1);
                ! function e() {
                    if (document.body) {
                        var n = document.createElement("iframe");
                        n.style.display = "none", n.src = "https://static.quantcast.mgr.consensu.org/v25/cmp-3pc-check.html", n.id = "qc_choice_3pc_frame", n.integrity = "sha256-T8dpP8lDEFrer+RTfTh0cxDmLaO3kSco55MPB33xOMU=", n.crossOrigin = "anonymous", document.body.appendChild(n)
                    } else setTimeout(e, 10)
                }()
            }
        };
    n.default = i
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = t(0),
        i = (t(1), t(5)),
        a = {
            cachedPurposeList: {},
            purposeListCallbacks: {},
            purposeListResponseHandler: function(e, n, t) {
                try {
                    if (4 === e.readyState) {
                        if (200 !== e.status) throw "could fetch the purpose list for language: " + n;
                        var i;
                        i = e.response ? "string" == typeof e.response ? JSON.parse(e.response) : e.response : JSON.parse(e.responseText), (0, o.doCallback)(t, i, !0)
                    }
                } catch (e) {
                    (0, o.doCallback)(t, null, !1)
                }
            },
            fetchPurposeList: function(e, n) {
                if (i.IAB_SUPPORTED_LANGUAGES.includes(e))
                    if (a.cachedPurposeList[e])(0, o.doCallback)(n, a.cachedPurposeList[e], !0);
                    else if (a.purposeListCallbacks[e] && a.purposeListCallbacks[e].size() > 0) a.purposeListCallbacks[e].push(n);
                else {
                    a.purposeListCallbacks[e] = new o.CallbackArray, a.purposeListCallbacks[e].push(n);
                    var t = (new Date).getTime(),
                        s = "https://vendorlist.consensu.org/purposes-{language}.json".replace("{language}", e.toLowerCase()).concat("?timestamp=", t);
                    (0, o.getJson)({
                        url: s
                    }, function(n) {
                        a.purposeListResponseHandler(n, e, function(n, t) {
                            t && (a.cachedPurposeList[e] = n), a.purposeListCallbacks[e].call(n, t)
                        })
                    })
                } else(0, o.doCallback)(n, {
                    error: "Does not support the requested Language: " + e
                }, !1)
            },
            setPurposeList: function(e, n) {
                a.cachedPurposeList[e] = n
            }
        };
    n.default = a
}, , , , , , , function(e, n, t) {
    "use strict";
    var o = t(2),
        i = function(e) {
            if (e && e.__esModule) return e;
            var n = {};
            if (null != e)
                for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (n[t] = e[t]);
            return n.default = e, n
        }(t(11)),
        a = (d(t(3)), d(t(12))),
        s = (d(t(23)), d(t(10))),
        r = d(t(24)),
        l = t(0),
        u = d(t(15));

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = [];
    window.__cmp = new function(e) {
        var n;
        if (e.__cmp) {
            n = e.__cmp.gdprAppliesGlobally;
            try {
                if (e.__cmp("__cmp")) return e.__cmp;
                c = __cmp() || []
            } catch (n) {
                return e.__cmp
            }
        }
        var t = function(e) {
            return {
                displayConsentUi: i.displayConsentUi,
                getConfig: o.getConfig,
                getCurrentVendorConsents: i.getCurrentVendorConsents,
                getConsentData: i.getConsentData,
                getGooglePersonalization: i.getGooglePersonalization,
                getPublisherConsents: i.getPublisherConsents,
                getCurrentPublisherConsents: i.getCurrentPublisherConsents,
                getVendorConsents: i.getVendorConsents,
                getVendorList: s.default.getVendorList,
                getNonIabVendorList: s.default.getNonIabVendorList,
                getNonIABVendorConsents: i.getNonIABVendorConsents,
                getGoogleVendorList: r.default.getGoogleVendorList,
                init: a.default.init,
                initConfig: o.initializeConfig,
                runConsentUiCallback: i.runConsentUiCallback,
                saveConsents: i.saveConsents,
                setConsentUiCallback: i.setConsentUiCallback,
                fetchPurposeList: u.default.fetchPurposeList,
                ping: function(e, n) {
                    var t = o.config.displayUi ? "always" === o.config.displayUi : window.__cmp.gdprAppliesGlobally;
                    (0, l.doCallback)(n, {
                        gdprAppliesGlobally: t,
                        cmpLoaded: !0
                    }, !0)
                },
                __cmp: function() {
                    return !0
                }
            }[e].apply(null, [].slice.call(arguments, 1))
        };
        return t.gdprAppliesGlobally = n, t
    }(window), (0, l.executePendingCalls)(c)
}, function(e, n, t) {
    "use strict";
    window.NodeList && !window.NodeList.prototype.forEach && (NodeList.prototype.forEach = function(e, n) {
        n = n || window;
        for (var t = 0; t < this.length; t++) e.call(n, this[t], t, this)
    }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
        value: function(e) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n = Object(this),
                t = n.length >>> 0;
            if ("function" != typeof e) throw new TypeError("predicate must be a function");
            for (var o = arguments[1], i = 0; i < t;) {
                var a = n[i];
                if (e.call(o, a, i, n)) return a;
                i++
            }
        },
        configurable: !0,
        writable: !0
    }), Array.prototype.fill || Object.defineProperty(Array.prototype, "fill", {
        value: function(e) {
            if (null == this) throw new TypeError("this is null or not defined");
            for (var n = Object(this), t = n.length >>> 0, o = arguments[1] >> 0, i = o < 0 ? Math.max(t + o, 0) : Math.min(o, t), a = arguments[2], s = void 0 === a ? t : a >> 0, r = s < 0 ? Math.max(t + s, 0) : Math.min(s, t); i < r;) n[i] = e, i++;
            return n
        }
    }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, n) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var t = Object(this),
                o = t.length >>> 0;
            if (0 === o) return !1;
            var i = 0 | n,
                a = Math.max(i >= 0 ? i : o - Math.abs(i), 0);

            function s(e, n) {
                return e === n || "number" == typeof e && "number" == typeof n && isNaN(e) && isNaN(n)
            }
            for (; a < o;) {
                if (s(t[a], e)) return !0;
                a++
            }
            return !1
        }
    }), String.prototype.startsWith || function() {
        var e = function() {
                try {
                    var e = {},
                        n = Object.defineProperty,
                        t = n(e, e, e) && n
                } catch (e) {}
                return t
            }(),
            n = {}.toString,
            t = function(e) {
                if (null == this) throw TypeError();
                var t = String(this);
                if (e && "[object RegExp]" == n.call(e)) throw TypeError();
                var o = t.length,
                    i = String(e),
                    a = i.length,
                    s = arguments.length > 1 ? arguments[1] : void 0,
                    r = s ? Number(s) : 0;
                r != r && (r = 0);
                var l = Math.min(Math.max(r, 0), o);
                if (a + l > o) return !1;
                for (var u = -1; ++u < a;)
                    if (t.charCodeAt(l + u) != i.charCodeAt(u)) return !1;
                return !0
            };
        e ? e(String.prototype, "startsWith", {
            value: t,
            configurable: !0,
            writable: !0
        }) : String.prototype.startsWith = t
    }(), Array.prototype.filter || (Array.prototype.filter = function(e, n) {
        if ("Function" != typeof e && "function" != typeof e || !this) throw new TypeError;
        var t = this.length >>> 0,
            o = new Array(t),
            i = this,
            a = 0,
            s = -1;
        if (void 0 === n)
            for (; ++s !== t;) s in this && e(i[s], s, i) && (o[a++] = i[s]);
        else
            for (; ++s !== t;) s in this && e.call(n, i[s], s, i) && (o[a++] = i[s]);
        return o.length = a, o
    })
}, function(e, n, t) {
    "use strict";
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var o = {
        getGoogleVendorList: function(e) {
            var n = new XMLHttpRequest;
            n.open("GET", "https://2ttq8jlhg5.execute-api.us-west-2.amazonaws.com/default/google-vendor-list-proxy", !0), n.addEventListener("load", function() {
                n.status >= 200 && n.status < 400 ? e(JSON.parse(n.responseText), !0) : e(null, !1)
            }), n.send()
        }
    };
    n.default = o
}]);