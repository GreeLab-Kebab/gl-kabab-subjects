function fireOrSaveGoogleAdFunctions(e) {
    e()
}

function fireOrSaveJsFunctions(e, t) {
    t()
}

function loadScript(e, t, n) {
    var i = document.createElement("script");
    i.type = "text/javascript";
    for (var o in t) t.hasOwnProperty(o) && i.setAttribute(o, t[o]);
    i.readyState ? i.onreadystatechange = function() {
        "loaded" != i.readyState && "complete" != i.readyState || (i.onreadystatechange = null, n())
    } : i.onload = function() {
        "function" == typeof n && n()
    }, i.src = e, document.getElementsByTagName("head")[0].appendChild(i)
}

function GDPRAccept() {
    $.ajax({
        type: "POST",
        url: "/account/message-session-setter.php",
        data: "mntcookies=1",
        cache: !1,
        success: function(e) {
            glob_mntcookie = 1, $("#gdprModal").modal("hide"), $(".header_message.cookies_eu").slideUp(), $("#mnt_header_ad").removeClass("header_msg"), fireJS("ExternalJS"), fireJS("GA"), fireOrSaveGoogleADs(null, !0);
            var t = setInterval(function() {
                0 == glob_JS.GAInit.length && 0 == glob_JS.GA.length && 0 == glob_JS.ExternalJS.length && 0 == glob_JS.AD.length && (glob_TrueOnGDPR = !1, clearInterval(t))
            }, 100)
        }
    })
}

function modalScroll() {
    var e = document.querySelectorAll("#gdprModal .modal-body"),
        t = e[0].scrollTop,
        n = document.querySelectorAll("#gdprModal .modal-body"),
        i = document.querySelectorAll("#gdprModal .modal-footer"),
        o = document.querySelectorAll("#gdprModal .modal-content"),
        r = n[0].scrollHeight - o[0].offsetHeight;
    console.log("objectHeight:" + r);
    document.querySelectorAll("#gdprModal .scroll_more");
    t >= r ? i[0].classList.remove("gradient") : i[0].classList.add("gradient")
}

function scrollAccept() {
    var e = $("#gdprModal .modal-content");
    e.animate({
        scrollTop: e.height()
    }, 1250)
}

function GDPRReject() {
    1 != glob_mntcookie && $.ajax({
        type: "GET",
        url: "/account/GDPRModalCounter.php",
        data: {
            type: "cancel",
            deviceInfo: glob_deviceInfo,
            currentPath: window.location.pathname
        },
        cache: !1
    }).always(function(e) {
        window.location.href = "http://healthline-anon.flywheelsites.com/"
    }).done(function(e) {
        console.log("add cancel counter success!")
    }).fail(function(e) {
        console.log("add cancel counter failed!")
    })
}

function fireOrSaveGoogleADs(e, t) {
    if (void 0 !== isAdblockOn && isAdblockOn()) return void(glob_JS.AD = []);
    if (1 == glob_mntcookie) {
        if (glob_JS.AD.length > 0) {
            for (var n = 0; n < glob_JS.AD.length; n++) {
                (0, glob_JS.AD[n])()
            }
            try {
                AdBridg.refresh()
            } catch (e) {
                console.log("ad will not be loaded, because googletag pubads not exist")
            }
            glob_JS.AD = []
        }
        "function" == typeof e && e()
    } else glob_JS.AD.push(e)
}

function RunFunctionArrayWithDelay(e, t, n, i) {
    function o() {
        if (n(e[r]), r < e.length - 1)
            if ("GA" === t)
                if (0 === r) var a = setInterval(function() {
                    "function" == typeof window.ga.getAll && (r++, setTimeout(o, i), clearInterval(a))
                }, 50);
                else 1 === r ? ga(function(e) {
                    glob_isGaReady = !0, r++, setTimeout(o, i)
                }) : (r++, setTimeout(o, i));
        else r++, setTimeout(o, i)
    }
    var r = 0;
    setTimeout(o, i)
}

function fireJS(e, t) {
    if (1 == glob_mntcookie || 0 == glob_TrueOnGDPR) {
        if ("GA" === e && glob_JS.GAInit.length > 0) {
            for (var n = glob_JS.GAInit.length - 1; n >= 0; n--) glob_JS[e].unshift(glob_JS.GAInit[n]);
            glob_JS.GAInit = []
        }
        var i = setInterval(function() {
            var n = !1;
            "AD" == e && (window.AdBridg && window.googletag && googletag.apiReady || (n = !0)), n || (glob_JS[e].length > 0 && (RunFunctionArrayWithDelay(glob_JS[e], e, function(e) {
                e()
            }, 10), glob_JS[e] = []), "function" == typeof t && t(), clearInterval(i))
        }, 50)
    } else glob_JS[e].push(t)
}

function confirmDeny() {
    var e = document.querySelector("#gdprModal .modal-footer"),
        t = document.querySelector("#gdprModal .fullscreen_inner"),
        n = document.querySelector("#gdprModal .modal-footer button.primary"),
        i = document.querySelector("#gdprModal .modal-footer button:last-of-type");
    0 == t.classList.contains("confirm") ? (e.classList.remove("gradient"), t.innerHTML = "<h5>Are you sure?</h5><p>This article may only be avaliable if you accept our data privacy terms. Go back and accept our terms to get full access Healthline’s 200,200+ medically reviewed health, nutrition, and wellness articles.</p>", t.classList.add("confirm"), n.setAttribute("onclick", "confirmDeny();"), n.innerHTML = "Go Back", i.classList.remove("secondary"), i.classList.add("secondary-border", "confirm"), i.innerHTML = "I'm sure, Deny permission") : (e.classList.add("gradient"), t.innerHTML = '<h5>Please accept our privacy terms</h5><p>We use cookies and similar technologies to improve your browsing experience, personalize content and offers, show targeted ads, analyze traffic, and better understand you. We may share your information with third-party partners for marketing purposes. To learn more and make choices about data use, visit our <a href="https://www.medicalnewstoday.com/advertising" target="_blank">Advertising Policy</a> and <a href="https://www.medicalnewstoday.com/privacy-policy" target="_blank">Privacy Policy</a>. By clicking “Accept and Continue” below, (1) you consent to these activities unless and until you withdraw your consent using our rights request form, and (2) you consent to allow your data to be transferred, processed, and stored in the United States.</p>', t.classList.remove("confirm"), n.innerHTML = "Accept and Continue to Site", n.setAttribute("onclick", "GDPRAccept();"), i.classList.remove("secondary-border"), i.classList.add("secondary"), i.classList.remove("confirm"), i.setAttribute("onclick", "confirmDeny();"), i.innerHTML = "Deny permission"), 1 == i.classList.contains("confirm") && i.setAttribute("onclick", "GDPRReject();")
}

function isUserIE() {
    return !!(window.navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.match(/Trident.*rv\:11\./))
}

function dynamicFaq() {
    $("dd").hide(), $("dt").bind("click", function() {
        $(this).toggleClass("open").next().slideToggle()
    })
}

function sendMNThistoryGa(e) {
    isAdblockOn() || adsBlockOn ? (fireOrSaveJsFunctions(0, function() {
        ga("send", "event", {
            eventCategory: "Ad Block",
            eventAction: "Ad Block Enabled",
            eventLabel: "Enabled",
            nonInteraction: !0
        })
    }), adBlockValue = "Enabled") : (fireOrSaveJsFunctions(0, function() {
        ga("send", "event", {
            eventCategory: "Ad Block",
            eventAction: "Ad Block Disabled",
            eventLabel: "Disabled",
            nonInteraction: !0
        })
    }), adBlockValue = "Disabled")
}

function isAdblockOn() {
    var e = document.getElementById("ads-text-iframe");
    return "none" == e.style.display || "hidden" == e.style.display || "hidden" == e.style.visibility || 0 == e.offsetHeight ? (googleadsLoaded = !1, is_userMobile && !glob_responsiveOverride ? showAdsOnArticle = !1 : $("body").addClass("adblock_on"), !0) : (googleadsLoaded = !0, !1)
}

function pageFullyLoaded(e) {
    if (isAdblockOn()) is_userMobile && !glob_responsiveOverride && $(".mnt_history").css({
        display: "block"
    }), $("#dlb1_unit").css({
        display: "none"
    }), mobileAdBlockCall(), adsBlockOn = 1, is_userMobile && !glob_responsiveOverride ? $("head").append("<style>#dlb1_container:before, #dlb2_container:before, #dlb3_container:before, #dlb4_container:before, #mnt_dlb_foot_container:before, #dmr1_container:before, #dmr2_container:before, #dmr3_container:before, #dmr4_container:before, #dmr5_container:before, #dmr6_container:before, #dmr7_container:before, #dmr8_container:before, #dmr9_container:before, #dmr10_container:before, #dmr11_container:before, #dmr12_container:before, #dmr13_container:before, #dmr14_container:before, #dmr15_container:before, #mnt_mlb_head_container:before, #mmr1_container:before, #mmr2_container:before, #mmr3_container:before, #mmr4_container:before, #mmr5_container:before,#mnt_header_ad:before, #mnt_article_ad_1:after, #mnt_article_ad_2:before, #mnt_article_ad_3:before, #mnt_sidebar_ad_1:before, #mnt_sidebar_ad_2:before, #sidebar_ad_adam:before {content: '' !important;}</style>") : $("head").append("<style> #mnt_dlb_foot_container:before {content: '' !important;}</style>");
    else {
        var t = 0,
            n = 0;
        $(".mnt_history").each(function(e) {
            t++, googleadsLoaded = !1, $(this).next().children("div").length > 0 && (googleadsLoaded = !0), googleadsLoaded || n++
        }), ($(".adsbygoogle").length > 0 || $("#mobile_unit_docked").length > 0) && is_userMobile && !glob_responsiveOverride && $(".adsbygoogle").children().length < 1 && $("#mobile_unit_docked").children("iframe").length < 1 && (mobileAdBlockCall(), adsBlockOn = 1), is_userMobile || glob_responsiveOverride || t != n || (adsBlockOn = 1)
    }
    sendMNThistoryGa(), "undefined" != typeof articleID && setMNTDataLayer()
}

function mobileAdBlockCall() {
    if (is_userMobile && !glob_responsiveOverride)
        if ($("#mobile_unit_docked").length > 0) {
            var e = $("#mobile_unit_docked");
            mobileAppendBlockImage(e)
        } else {
            $(".adsbygoogle").after('<div id="mnt_history_mobile_sticky"></div>');
            var e = $("#mnt_history_mobile_sticky");
            mobileAppendBlockImage(e)
        }
}

function mobileAppendBlockImage(e) {
    e.append('<a href=\'/whitelist-mnt\'><img class="mnt_history_mobile_sticky" src="https://cdn1.medicalnewstoday.com/structure/images/mnt_ads/mnt_history_article_mobile_sticky.png" alt="Thank you for supporting Medical News Today"></a>'), setTimeout(function() {
        e.css({
            "background-image": "url(https://cdn1.medicalnewstoday.com/structure/images/mnt_ads/mnt_history_article_mobile_sticky.png)",
            "background-size": "320px 50px"
        })
    }, 3e4)
}

function bindNewsletterEvents() {
    $(document).on("keypress", ".newsletterFormEmail", function(e) {
        if (13 == e.keyCode) return !1
    }), $(document).on("click keypress", ".new_reg_signup", function(e) {
        e.preventDefault();
        var t = $(this).data("signup-source") ? $(this).data("signup-source") : "",
            n = getNewsLetterRegisterObj(t);
        n = setNewsletterCategories(n), "legacy_newsletter_page" == t || "footer_newsletter_link" == t || "article_modal_newsletter_btn" == t ? checkEmailExistAndSetErrorMessageForInlineForm(n, function(e, i) {
            if (e) {
                if ("0" == i.isSubscribe) return submitNewsletterRegisterForm(n, i), !0;
                if ("1" == i.isSubscribe) return "footer_newsletter_link" == t || "article_modal_newsletter_btn" == t ? (controlUIStatus(n, "finishRegisterProcess"), handleFinishUIStatus(n, "duplicateSubscribed")) : controlUIStatus(n, "emailValidFailedWithJs", '<label class="formError">' + i.message + "</label>"), !1
            }
        }) : (controlUIStatus(n, "enableAllUI"), n.errorHolder.html(""), $(document).off("click", "#email-start-signup-btn"), $(document).on("click", "#email-start-signup-btn", function(e) {
            if (e.preventDefault(), void 0 !== $(this).attr("disabled")) return !1;
            n.errorHolder.html(""), checkEmailExistAndSetErrorMessageForInlineForm(n, function(e, t) {
                if (e) return submitNewsletterRegisterForm(n, t), !0
            })
        }), n.registration_modal_form.modal("show"))
    })
}

function setNewsletterCategories(e) {
    var t = "",
        n = "";
    return "undefined" != typeof glob_categoryName && "undefined" != typeof glob_categoryID ? (t = glob_categoryID, n = " the latest " + glob_categoryName + " news.", n = n.replace(" category", "")) : (t = t || "popular", n = "our most popular news categories."), e.newsletterCategories.val(t), e.selectedCategoryText.html(n), e
}

function getNewsLetterRegisterObj(e) {
    var t = {
        registration_modal_form: $("#registrationModal"),
        emailField: $("#inputEmail"),
        newsletterDefaultMessage: $("#newsletterTypeMessage"),
        newsletterRegisterInfo: $("#newsletterRegisterInfo"),
        newsletterCategories: $("#newsletterCategories"),
        selectedCategoryText: $("#selectedCategoryText"),
        submitEmailButton: $("#email-start-signup-btn"),
        modalFooter: $("#registrationModal .modal-footer"),
        email: "",
        errorHolder: $("#signFinishErrorHolder"),
        registrationEntryPoint: e,
        gaLabel: "",
        registerTips: !1
    };
    switch (e) {
        case "menu_newsletter_link":
            t.gaLabel = "Menu Item Panel";
            break;
        case "article_modal_newsletter_btn":
            t.gaLabel = "Article Modal", t.submitEmailButton = $("#mobile_newsletter_container .article_modal_newsletter_btn"), $("#articleModalNewsletterErrorHolder").length > 0 && (t.errorHolder = $("#articleModalNewsletterErrorHolder"), t.newsletterRegisterInfo = $("#article_newsletter_info"), t.emailField = $("#mobile_newsletter_container #formEmail"), t.registerTips = $("#articleModalLearnMore"));
            break;
        case "menu_item_link":
            t.gaLabel = "Menu CTA";
            break;
        case "footer_newsletter_link":
            t.gaLabel = "Footer newsletter", t.submitEmailButton = $(".footer_newsletter_link.email-signup-btn"), t.errorHolder = $("#footerNewsletterErrorHolder"), t.newsletterRegisterInfo = $("#footer_newsletter_span"), t.emailField = $("#footerNewsletterSignup #EmailAddress");
            break;
        case "legacy_newsletter_page":
            t.gaLabel = "Newsletter Page", t.submitEmailButton = $("#btnNewsletterFormEmail"), t.errorHolder = $("#legacy_newsletter_page"), t.errorHolder.data("origin-class") ? t.errorHolder.attr("class", t.errorHolder.data("origin-class")) : t.errorHolder.data("origin-class", t.errorHolder.attr("class")), t.emailField = $("#formEmail")
    }
    return t.gaLabel && ga("send", "event", {
        eventCategory: "New HCP - Ingress",
        eventAction: "Ingress - " + t.gaLabel + " - " + glob_deviceInfo + " - " + gaSkinLabel,
        eventLabel: "Ingress - " + t.gaLabel + " - " + glob_deviceInfo + " - " + gaSkinLabel + " - " + document.location.pathname
    }), t
}

function checkEmailExistAndSetErrorMessageForInlineForm(e, t) {
    var n = e.emailField.val();
    if (n)
        if (isValidEmail(n)) {
            controlUIStatus(e, "emailValidSuccessWithJs");
            var i = "";
            i += "action=checkEmailAlreadySubscribedTheCategory", i += "&formEmail=" + n, i += "&newsletterCategories=" + e.newsletterCategories.val();
            var o = Date.now();
            newsletter_currentRequest = $.ajax({
                url: "/account/newsletter-profile-ajax.php?v=" + o,
                type: "GET",
                data: i,
                dataType: "json",
                error: function(e, n) {
                    alert("There's something wrong ,please try it later."), t(!1)
                },
                beforeSend: function() {
                    controlUIStatus(e, "startAjax", "Checking")
                }
            }).done(function(n) {
                controlUIStatus(e, "finishAjax"), "0" == n.isSubscribe || "1" == n.isSubscribe ? t(!0, n) : (controlUIStatus(e, "emailValidFailedWithJs", '<label class="formError">' + n.message + "</label>"), t(!1, n))
            }).fail(function(n) {
                controlUIStatus(e, "finishAjax"), controlUIStatus(e, "emailValidFailedWithJs", '<label class="formError">We just encounter a network error, please try again</label>'), t(!1, !1)
            })
        } else controlUIStatus(e, "emailValidFailedWithJs", '<label class="formError">This is not a valid email address.</label>'), t(!1, !1);
    else controlUIStatus(e, "emailValidFailedWithJs", '<label class="formError">Please enter your email address</label>'), t(!1, !1)
}

function submitNewsletterRegisterForm(e, t) {
    if ("1" == t.isSubscribe) controlUIStatus(e, "finishRegisterProcess"), handleFinishUIStatus(e, "duplicateSubscribed");
    else {
        var n = e.emailField.val(),
            i = "entrypoint=" + e.registrationEntryPoint;
        i += "&newsletterCategories=" + e.newsletterCategories.val(), i += "&formEmail=" + encodeURIComponent(n), i += getApApiParams();
        var o = Date.now();
        newsletter_currentRequest = $.ajax({
            url: "/account/newsletter-profile-ajax.php?v=" + o,
            method: "POST",
            data: i,
            beforeSend: function() {
                controlUIStatus(e, "startAjax", "Saving")
            },
            dataType: "json"
        }).done(function(t) {
            if (t.success && t.userId) controlUIStatus(e, "finishRegisterProcess"), handleFinishUIStatus(e, "finishSubscribed"), "function" == typeof setUserId && "-9999" !== t.userId && setUserId(t.userId);
            else {
                var n = t.resultMsg;
                void 0 !== n ? (n = n.replace("<li>", '<label class="formError">'), n = n.replace("</li>", "</label>")) : n = '<label class="formError">Registration failed, please check the email address you entered and try again.</label>', e.errorHolder.html(n), e.errorHolder.show(), controlUIStatus(e, "enableAllUI"), $("body").animate({
                    scrollTop: e.errorHolder.offset().top
                }, 1e3)
            }
        }).fail(function(t) {
            e.errorHolder.html('<label class="formError">Registration failed, please check the email address you entered and try again.</label>'), e.errorHolder.show(), controlUIStatus(e, "failedRegisterAjax")
        }), e.newsletterDefaultMessage.hide()
    }
}

function controlUIStatus(e, t, n) {
    "startAjax" == t ? (e.submitEmailButton.html(n), e.submitEmailButton.attr("disabled", "disabled"), e.emailField.attr("disabled", "disabled")) : "finishAjax" == t ? (e.submitEmailButton.html("Subscribe"), e.submitEmailButton.attr("disabled", !1), e.emailField.attr("disabled", !1)) : "finishRegisterAjax" == t || ("emailValidFailedWithJs" == t ? (e.errorHolder.html(n), e.errorHolder.show()) : "emailValidSuccessWithJs" == t ? e.errorHolder.hide() : "failedRegisterAjax" == t ? (e.submitEmailButton.html("CONTINUE"), e.emailField.removeAttr("disabled"), e.submitEmailButton.removeAttr("disabled")) : "finishRegisterProcess" == t ? (e.emailField.attr("disabled", "disabled"), e.submitEmailButton.attr("disabled", "disabled"), e.emailField.hide(), e.modalFooter.hide(), "legacy_newsletter_page" === e.errorHolder.attr("id") && (e.errorHolder.removeClass("error"), e.errorHolder.addClass("success"))) : "enableAllUI" == t && (e.submitEmailButton.html("CONTINUE"), e.emailField.removeAttr("disabled"), e.emailField.show(), e.emailField.val(""), e.submitEmailButton.removeAttr("disabled"), e.modalFooter.show(), e.newsletterDefaultMessage.show(), e.newsletterRegisterInfo.hide()))
}

function handleFinishUIStatus(e, t) {
    var n = "undefined" != typeof glob_categoryName ? glob_categoryName : "our top news categories";
    "undefined" != typeof glob_categoryName && (n = n.replace(" category", "") + " news");
    var i = !1;
    if ("finishSubscribed" == t) {
        if ("footer_newsletter_link" == e.registrationEntryPoint || "legacy_newsletter_page" == e.registrationEntryPoint || "article_modal_newsletter_btn" == e.registrationEntryPoint) return e.emailField.hide(), e.submitEmailButton.hide(), e.newsletterRegisterInfo.hide(), e.registerTips && e.registerTips.hide(), e.errorHolder.html("<p>Thank you, we have added " + n + " to your newsletter subscription.<br><br>Please check your email for a message from us. To edit your preferences, please follow the link provided in the email.</p>"), e.errorHolder.show(), !1;
        i = "<p>Thank you, we have added " + n + " to your newsletter subscription.<br><br>Please check your email for a message from us. To edit your preferences, please follow the link provided in the email.</a></p>"
    } else {
        if ("duplicateSubscribed" != t) return !1;
        if ("footer_newsletter_link" == e.registrationEntryPoint || "article_modal_newsletter_btn" == e.registrationEntryPoint) return e.emailField.hide(), e.submitEmailButton.hide(), e.errorHolder.hide(), e.newsletterRegisterInfo.html("<p>Thank you, you are already subscribed to receive news for " + n + ".<br><br>To edit your preferences, please follow the link provided in your next newsletter.</p>"), !1;
        i = "<p>Thank you, you are already subscribed to receive news for " + n + ".<br><br>To edit your preferences, please follow the link provided in your next newsletter.</p>"
    }
    return i && (e.newsletterDefaultMessage.hide(), e.newsletterRegisterInfo.html(i), e.newsletterRegisterInfo.show()), !1
}

function getApApiParams() {
    var e = "",
        t = "";
    return ga(function(e) {
        t = e.get("clientId")
    }), void 0 !== t && t && (e += "&gaid=" + t), "undefined" != typeof ly_cid && ly_cid && (e += "&lytics_id=" + ly_cid), "undefined" != typeof glob_bindingK1 && glob_bindingK1 && (e += "&k1=" + glob_bindingK1), e += "&pagePath=" + window.location.pathname, void 0 !== window.location.search && void 0 !== window.location.search.includes && window.location.search.includes("apFailedTest") && (e += "&apFailedTest=1"), e
}

function isValidEmail(e) {
    return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e)
}

function setClickEffect(e, t, n, i, o, r) {
    var a = 0;
    i ? (a = i, newURL += "articles/" + a + ".php", twitterShareText = o + " " + newURL + " via @mnt") : a = articleID;
    for (var s = 0; s < e.length; s++) {
        var l = e[s],
            c = "shareButton" + r + s;
        void 0 !== l.id && "" != l.id || (l.id = c);
        var d, u = l.getAttribute("data-targetwebsite"),
            h = $("#" + c);
        "facebook" === u ? (l.addEventListener("click", function(e) {
            e.preventDefault(), "no" != n.getAttribute("data-sharing-is-enable") && (fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Article image hover - share",
                    eventAction: "Article share - Facebook",
                    eventLabel: "Article share - Facebook[" + a + "]"
                })
            }), is_userMobile ? initMobileSocialPlugins("facebook") : window.open("https://www.facebook.com/sharer.php?u=" + newURL + "&t=" + encodeURI(document.title), "sharer", "toolbar=0, status=0, width=900, height=500"))
        }), d = document.createElement("a"), d.href = "#", d.className = "facebook", l.appendChild(d)) : "twitter" === u ? (l.addEventListener("click", function(e) {
            e.preventDefault(), "no" != n.getAttribute("data-sharing-is-enable") && (fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Article image hover - share",
                    eventAction: "Article share - Twitter",
                    eventLabel: "Article share - Twitter[" + a + "]"
                })
            }), is_userMobile ? initMobileSocialPlugins("twitter") : window.open("https://twitter.com/intent/tweet?text=" + document.title + " " + newURL + "&via=mnt", "sharer", "toolbar=0, status=0, width=650, height=360"))
        }), d = document.createElement("a"), d.href = "#", d.className = "twitter", l.appendChild(d)) : "pinterest" === u && (IsPinterestPluginExist() ? h.remove() : (l.addEventListener("click", function(e) {
            e.preventDefault(), "no" != n.getAttribute("data-sharing-is-enable") && (fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Article image hover - share",
                    eventAction: "Article share - Pinterest",
                    eventLabel: "Article share - Pinterest[" + a + "]"
                })
            }), is_userMobile ? initMobileSocialPlugins("pinterest") : ("undefined" != typeof articleType && "drugs" == articleType && (t = window.location.origin + "https://cdn1.medicalnewstoday.com/structure/images/social/mnt_sharing.png"), window.open("https://www.pinterest.com/pin/create/link/?url=" + newURL + "&media=" + t + "&description=" + document.title, "sharer", "toolbar=no,width=700,height=300")))
        }), d = document.createElement("a"), d.href = "#", d.className = "twitter", l.appendChild(d)))
    }
}

function customSetSmallImageFunc(e) {
    if ("object" == typeof e && (e = e[0]), void 0 === e) return !1;
    for (var t = e.querySelectorAll(".imageWidgetWrapper"), n = 0; n < t.length; n++) {
        var i = t[n],
            o = i.querySelector("img"),
            r = i.querySelectorAll(".imageSharing_button"),
            a = i.querySelector(G_imageSharingRelativeDOMClassName);
        if (parseInt(getComputedStyle(o).width) <= 250) {
            a && a.classList.add("smallImage");
            try {
                IsPinterestPluginExist() || (r[2].outerHTML = "")
            } catch (e) {}
        } else a && a.classList.add("inReadmoreDivImage")
    }
}

function modifyImageWidgetWrapper() {
    for (var e = document.querySelectorAll(".imageWidgetWrapper"), t = 0; t < e.length; t++) {
        var n = e[t];
        if (is_userMobile && n.parents(".photobox_right").length > 0 && 0 == n.parents(".slideshow").length) {
            var i = n.querySelector("img");
            i && containsAny(i.className, G_imageWidgetClassList) && (n.style.width = parseInt(getComputedStyle(i).width), n.style.marginTop = "0", n.style.marginRight = "auto", n.style.marginBottom = "0", n.style.marginLeft = "auto")
        }
        if (parseInt(getComputedStyle(n).width) <= 250) {
            var o = n.querySelector(G_galleryOverlayMainClassName);
            o && o.classList.add("smallImage")
        }
        if (parseInt(getComputedStyle(n).width) < 150) {
            var o = n.querySelector(".galleryOverlay_button.smallImage");
            o && (o.style.width = "120px")
        }
    }
}

function isValidImageTypeForAddWidget(e) {
    return !e.parents(".mnt_history").length && (!e.classList.contains("original") && (!e.parents(".author_signature").length && !e.parents(".mplace_wrapper").length))
}

function addImageWidgetWrapper() {
    var e = document.querySelectorAll(".article_body img, #factoids img");
    if (e.length > 0) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t];
            if (isValidImageTypeForAddWidget(n) && !n.parentElement.matches(G_imageWidgetWrapperSelector)) {
                var i = n.nextElementSibling;
                if (i && "BR" == i.tagName) try {
                    i.classList.add("content_image")
                } catch (e) {
                    console.log("no br in the photobox")
                }
                var o = document.createElement("span");
                o.className = "imageWidgetWrapper", n.classList.contains("galleryOverlayImage") && (o.style.overflow = "hidden"), n.parentNode.insertBefore(o, n), o.appendChild(n)
            }
        }
        initImageSharingEffect(!1)
    }
    document.querySelectorAll("img.clickable").length && loadScript("/structure/javascript/image_clickable_effect.js", {}, function() {
        if (document.querySelectorAll(".article_body").length > 0) {
            for (var e, t = document.querySelectorAll(".clickable_icon"), n = 0; n < t.length; n++) e = t[n], e.parentNode.removeChild(e);
            for (t = document.querySelectorAll(".clickable_hover"), n = 0; n < t.length; n++) e = t[n], e.parentNode.removeChild(e);
            for (t = document.querySelectorAll(".hover_text"), n = 0; n < t.length; n++) e = t[n], e.parentNode.removeChild(e);
            initClickableEffect(!1)
        }
    })
}

function containsAny(e, t) {
    for (var n = 0; n != t.length; n++) {
        var i = t[n];
        if (-1 != e.indexOf(i)) return i
    }
    return null
}

function shortUrlToFullUrl(e) {
    try {
        0 == e.includes("http://") && 0 == e.includes("https://") && (e = e.replace("/content", ""), e = "https://" + window.location.hostname + "/content" + e)
    } catch (e) {
        console.log(e)
    }
    return e
}

function getClosestParentBySelector(e, t) {
    for (; e && e !== document; e = e.parentNode)
        if (e.matches(t)) return e;
    return null
}

function IsPinterestPluginExist() {
    return !(null === document.querySelector('body > span[style*="8675309"][style*="rgb(189, 8, 28)"]'))
}

function hideNotifyBox() {
    $("#navigation_scroll .js-show-notifications").hasClass("active") && $("#navigation_scroll .js-show-notifications").removeClass("active"), $(".personalise").hasClass("hover") && $(".personalise").removeClass("hover")
}
if (function(e, t) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e)
        } : t(e)
    }("undefined" != typeof window ? window : this, function(e, t) {
        function n(e) {
            var t = e.length,
                n = re.type(e);
            return "function" !== n && !re.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
        }

        function i(e, t, n) {
            if (re.isFunction(t)) return re.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
            if (t.nodeType) return re.grep(e, function(e) {
                return e === t !== n
            });
            if ("string" == typeof t) {
                if (fe.test(t)) return re.filter(t, e, n);
                t = re.filter(t, e)
            }
            return re.grep(e, function(e) {
                return re.inArray(e, t) >= 0 !== n
            })
        }

        function o(e, t) {
            do {
                e = e[t]
            } while (e && 1 !== e.nodeType);
            return e
        }

        function r(e) {
            var t = we[e] = {};
            return re.each(e.match(be) || [], function(e, n) {
                t[n] = !0
            }), t
        }

        function a() {
            ge.addEventListener ? (ge.removeEventListener("DOMContentLoaded", s, !1), e.removeEventListener("load", s, !1)) : (ge.detachEvent("onreadystatechange", s), e.detachEvent("onload", s))
        }

        function s() {
            (ge.addEventListener || "load" === event.type || "complete" === ge.readyState) && (a(), re.ready())
        }

        function l(e, t, n) {
            if (void 0 === n && 1 === e.nodeType) {
                var i = "data-" + t.replace(ke, "-$1").toLowerCase();
                if ("string" == typeof(n = e.getAttribute(i))) {
                    try {
                        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? re.parseJSON(n) : n)
                    } catch (e) {}
                    re.data(e, t, n)
                } else n = void 0
            }
            return n
        }

        function c(e) {
            var t;
            for (t in e)
                if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
            return !0
        }

        function d(e, t, n, i) {
            if (re.acceptData(e)) {
                var o, r, a = re.expando,
                    s = e.nodeType,
                    l = s ? re.cache : e,
                    c = s ? e[a] : e[a] && a;
                if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t) return c || (c = s ? e[a] = V.pop() || re.guid++ : a), l[c] || (l[c] = s ? {} : {
                    toJSON: re.noop
                }), ("object" == typeof t || "function" == typeof t) && (i ? l[c] = re.extend(l[c], t) : l[c].data = re.extend(l[c].data, t)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[re.camelCase(t)] = n), "string" == typeof t ? null == (o = r[t]) && (o = r[re.camelCase(t)]) : o = r, o
            }
        }

        function u(e, t, n) {
            if (re.acceptData(e)) {
                var i, o, r = e.nodeType,
                    a = r ? re.cache : e,
                    s = r ? e[re.expando] : re.expando;
                if (a[s]) {
                    if (t && (i = n ? a[s] : a[s].data)) {
                        re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t), t = t in i ? [t] : t.split(" ")), o = t.length;
                        for (; o--;) delete i[t[o]];
                        if (n ? !c(i) : !re.isEmptyObject(i)) return
                    }(n || (delete a[s].data, c(a[s]))) && (r ? re.cleanData([e], !0) : ie.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
                }
            }
        }

        function h() {
            return !0
        }

        function f() {
            return !1
        }

        function p() {
            try {
                return ge.activeElement
            } catch (e) {}
        }

        function g(e) {
            var t = Me.split("|"),
                n = e.createDocumentFragment();
            if (n.createElement)
                for (; t.length;) n.createElement(t.pop());
            return n
        }

        function m(e, t) {
            var n, i, o = 0,
                r = typeof e.getElementsByTagName !== $e ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== $e ? e.querySelectorAll(t || "*") : void 0;
            if (!r)
                for (r = [], n = e.childNodes || e; null != (i = n[o]); o++) !t || re.nodeName(i, t) ? r.push(i) : re.merge(r, m(i, t));
            return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], r) : r
        }

        function v(e) {
            Ne.test(e.type) && (e.defaultChecked = e.checked)
        }

        function y(e, t) {
            return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
        }

        function b(e) {
            return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type, e
        }

        function w(e) {
            var t = Ge.exec(e.type);
            return t ? e.type = t[1] : e.removeAttribute("type"), e
        }

        function _(e, t) {
            for (var n, i = 0; null != (n = e[i]); i++) re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
        }

        function x(e, t) {
            if (1 === t.nodeType && re.hasData(e)) {
                var n, i, o, r = re._data(e),
                    a = re._data(t, r),
                    s = r.events;
                if (s) {
                    delete a.handle, a.events = {};
                    for (n in s)
                        for (i = 0, o = s[n].length; o > i; i++) re.event.add(t, n, s[n][i])
                }
                a.data && (a.data = re.extend({}, a.data))
            }
        }

        function $(e, t) {
            var n, i, o;
            if (1 === t.nodeType) {
                if (n = t.nodeName.toLowerCase(), !ie.noCloneEvent && t[re.expando]) {
                    o = re._data(t);
                    for (i in o.events) re.removeEvent(t, i, o.handle);
                    t.removeAttribute(re.expando)
                }
                "script" === n && t.text !== e.text ? (b(t).text = e.text, w(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ie.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ne.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
            }
        }

        function C(t, n) {
            var i = re(n.createElement(t)).appendTo(n.body),
                o = e.getDefaultComputedStyle ? e.getDefaultComputedStyle(i[0]).display : re.css(i[0], "display");
            return i.detach(), o
        }

        function k(e) {
            var t = ge,
                n = Ze[e];
            return n || (n = C(e, t), "none" !== n && n || (Ye = (Ye || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Ye[0].contentWindow || Ye[0].contentDocument).document, t.write(), t.close(), n = C(e, t), Ye.detach()), Ze[e] = n), n
        }

        function T(e, t) {
            return {
                get: function() {
                    var n = e();
                    if (null != n) return n ? void delete this.get : (this.get = t).apply(this, arguments)
                }
            }
        }

        function S(e, t) {
            if (t in e) return t;
            for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, o = ht.length; o--;)
                if ((t = ht[o] + n) in e) return t;
            return i
        }

        function A(e, t) {
            for (var n, i, o, r = [], a = 0, s = e.length; s > a; a++) i = e[a], i.style && (r[a] = re._data(i, "olddisplay"), n = i.style.display, t ? (r[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ae(i) && (r[a] = re._data(i, "olddisplay", k(i.nodeName)))) : r[a] || (o = Ae(i), (n && "none" !== n || !o) && re._data(i, "olddisplay", o ? n : re.css(i, "display"))));
            for (a = 0; s > a; a++) i = e[a], i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? r[a] || "" : "none"));
            return e
        }

        function E(e, t, n) {
            var i = lt.exec(t);
            return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
        }

        function N(e, t, n, i, o) {
            for (var r = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > r; r += 2) "margin" === n && (a += re.css(e, n + Se[r], !0, o)), i ? ("content" === n && (a -= re.css(e, "padding" + Se[r], !0, o)), "margin" !== n && (a -= re.css(e, "border" + Se[r] + "Width", !0, o))) : (a += re.css(e, "padding" + Se[r], !0, o), "padding" !== n && (a += re.css(e, "border" + Se[r] + "Width", !0, o)));
            return a
        }

        function D(e, t, n) {
            var i = !0,
                o = "width" === t ? e.offsetWidth : e.offsetHeight,
                r = et(e),
                a = ie.boxSizing() && "border-box" === re.css(e, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = tt(e, t, r), (0 > o || null == o) && (o = e.style[t]), it.test(o)) return o;
                i = a && (ie.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0
            }
            return o + N(e, t, n || (a ? "border" : "content"), i, r) + "px"
        }

        function I(e, t, n, i, o) {
            return new I.prototype.init(e, t, n, i, o)
        }

        function L() {
            return setTimeout(function() {
                ft = void 0
            }), ft = re.now()
        }

        function O(e, t) {
            var n, i = {
                    height: e
                },
                o = 0;
            for (t = t ? 1 : 0; 4 > o; o += 2 - t) n = Se[o], i["margin" + n] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e), i
        }

        function j(e, t, n) {
            for (var i, o = (bt[t] || []).concat(bt["*"]), r = 0, a = o.length; a > r; r++)
                if (i = o[r].call(n, t, e)) return i
        }

        function M(e, t, n) {
            var i, o, r, a, s, l, c, d, u = this,
                h = {},
                f = e.style,
                p = e.nodeType && Ae(e),
                g = re._data(e, "fxshow");
            n.queue || (s = re._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() {
                s.unqueued || l()
            }), s.unqueued++, u.always(function() {
                u.always(function() {
                    s.unqueued--, re.queue(e, "fx").length || s.empty.fire()
                })
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], c = re.css(e, "display"), d = k(e.nodeName), "none" === c && (c = d), "inline" === c && "none" === re.css(e, "float") && (ie.inlineBlockNeedsLayout && "inline" !== d ? f.zoom = 1 : f.display = "inline-block")), n.overflow && (f.overflow = "hidden", ie.shrinkWrapBlocks() || u.always(function() {
                f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2]
            }));
            for (i in t)
                if (o = t[i], gt.exec(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                        if ("show" !== o || !g || void 0 === g[i]) continue;
                        p = !0
                    }
                    h[i] = g && g[i] || re.style(e, i)
                }
            if (!re.isEmptyObject(h)) {
                g ? "hidden" in g && (p = g.hidden) : g = re._data(e, "fxshow", {}), r && (g.hidden = !p), p ? re(e).show() : u.done(function() {
                    re(e).hide()
                }), u.done(function() {
                    var t;
                    re._removeData(e, "fxshow");
                    for (t in h) re.style(e, t, h[t])
                });
                for (i in h) a = j(p ? g[i] : 0, i, u), i in g || (g[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0))
            }
        }

        function H(e, t) {
            var n, i, o, r, a;
            for (n in e)
                if (i = re.camelCase(n), o = t[i], r = e[n], re.isArray(r) && (o = r[1], r = e[n] = r[0]), n !== i && (e[i] = r, delete e[n]), (a = re.cssHooks[i]) && "expand" in a) {
                    r = a.expand(r), delete e[i];
                    for (n in r) n in e || (e[n] = r[n], t[n] = o)
                } else t[i] = o
        }

        function F(e, t, n) {
            var i, o, r = 0,
                a = yt.length,
                s = re.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var t = ft || L(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, r = 1 - i, a = 0, l = c.tweens.length; l > a; a++) c.tweens[a].run(r);
                    return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
                },
                c = s.promise({
                    elem: e,
                    props: re.extend({}, t),
                    opts: re.extend(!0, {
                        specialEasing: {}
                    }, n),
                    originalProperties: t,
                    originalOptions: n,
                    startTime: ft || L(),
                    duration: n.duration,
                    tweens: [],
                    createTween: function(t, n) {
                        var i = re.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                        return c.tweens.push(i), i
                    },
                    stop: function(t) {
                        var n = 0,
                            i = t ? c.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i > n; n++) c.tweens[n].run(1);
                        return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
                    }
                }),
                d = c.props;
            for (H(d, c.opts.specialEasing); a > r; r++)
                if (i = yt[r].call(c, e, d, c.opts)) return i;
            return re.map(d, j, c), re.isFunction(c.opts.start) && c.opts.start.call(e, c), re.fx.timer(re.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function B(e) {
            return function(t, n) {
                "string" != typeof t && (n = t, t = "*");
                var i, o = 0,
                    r = t.toLowerCase().match(be) || [];
                if (re.isFunction(n))
                    for (; i = r[o++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
            }
        }

        function R(e, t, n, i) {
            function o(s) {
                var l;
                return r[s] = !0, re.each(e[s] || [], function(e, s) {
                    var c = s(t, n, i);
                    return "string" != typeof c || a || r[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
                }), l
            }
            var r = {},
                a = e === Wt;
            return o(t.dataTypes[0]) || !r["*"] && o("*")
        }

        function P(e, t) {
            var n, i, o = re.ajaxSettings.flatOptions || {};
            for (i in t) void 0 !== t[i] && ((o[i] ? e : n || (n = {}))[i] = t[i]);
            return n && re.extend(!0, e, n), e
        }

        function q(e, t, n) {
            for (var i, o, r, a, s = e.contents, l = e.dataTypes;
                "*" === l[0];) l.shift(), void 0 === o && (o = e.mimeType || t.getResponseHeader("Content-Type"));
            if (o)
                for (a in s)
                    if (s[a] && s[a].test(o)) {
                        l.unshift(a);
                        break
                    }
            if (l[0] in n) r = l[0];
            else {
                for (a in n) {
                    if (!l[0] || e.converters[a + " " + l[0]]) {
                        r = a;
                        break
                    }
                    i || (i = a)
                }
                r = r || i
            }
            return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
        }

        function W(e, t, n, i) {
            var o, r, a, s, l, c = {},
                d = e.dataTypes.slice();
            if (d[1])
                for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
            for (r = d.shift(); r;)
                if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (!(a = c[l + " " + r] || c["* " + r]))
                    for (o in c)
                        if (s = o.split(" "), s[1] === r && (a = c[l + " " + s[0]] || c["* " + s[0]])) {
                            !0 === a ? a = c[o] : !0 !== c[o] && (r = s[0], d.unshift(s[1]));
                            break
                        }
                if (!0 !== a)
                    if (a && e.throws) t = a(t);
                    else try {
                        t = a(t)
                    } catch (e) {
                        return {
                            state: "parsererror",
                            error: a ? e : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function U(e, t, n, i) {
            var o;
            if (re.isArray(t)) re.each(t, function(t, o) {
                n || Jt.test(e) ? i(e, o) : U(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, i)
            });
            else if (n || "object" !== re.type(t)) i(e, t);
            else
                for (o in t) U(e + "[" + o + "]", t[o], n, i)
        }

        function z() {
            try {
                return new e.XMLHttpRequest
            } catch (e) {}
        }

        function J() {
            try {
                return new e.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function G(e) {
            return re.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
        }
        var V = [],
            X = V.slice,
            Q = V.concat,
            K = V.push,
            Y = V.indexOf,
            Z = {},
            ee = Z.toString,
            te = Z.hasOwnProperty,
            ne = "".trim,
            ie = {},
            oe = "1.11.0",
            re = function(e, t) {
                return new re.fn.init(e, t)
            },
            ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            se = /^-ms-/,
            le = /-([\da-z])/gi,
            ce = function(e, t) {
                return t.toUpperCase()
            };
        re.fn = re.prototype = {
            jquery: oe,
            constructor: re,
            selector: "",
            length: 0,
            toArray: function() {
                return X.call(this)
            },
            get: function(e) {
                return null != e ? 0 > e ? this[e + this.length] : this[e] : X.call(this)
            },
            pushStack: function(e) {
                var t = re.merge(this.constructor(), e);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(e, t) {
                return re.each(this, e, t)
            },
            map: function(e) {
                return this.pushStack(re.map(this, function(t, n) {
                    return e.call(t, n, t)
                }))
            },
            slice: function() {
                return this.pushStack(X.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length,
                    n = +e + (0 > e ? t : 0);
                return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: K,
            sort: V.sort,
            splice: V.splice
        }, re.extend = re.fn.extend = function() {
            var e, t, n, i, o, r, a = arguments[0] || {},
                s = 1,
                l = arguments.length,
                c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || re.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++)
                if (null != (o = arguments[s]))
                    for (i in o) e = a[i], n = o[i], a !== n && (c && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1, r = e && re.isArray(e) ? e : []) : r = e && re.isPlainObject(e) ? e : {}, a[i] = re.extend(c, r, n)) : void 0 !== n && (a[i] = n));
            return a
        }, re.extend({
            expando: "jQuery" + (oe + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === re.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === re.type(e)
            },
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return e - parseFloat(e) >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e) return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e)) return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf")) return !1
                } catch (e) {
                    return !1
                }
                if (ie.ownLast)
                    for (t in e) return te.call(e, t);
                for (t in e);
                return void 0 === t || te.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && re.trim(t) && (e.execScript || function(t) {
                    e.eval.call(e, t)
                })(t)
            },
            camelCase: function(e) {
                return e.replace(se, "ms-").replace(le, ce)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var o = 0,
                    r = e.length,
                    a = n(e);
                if (i) {
                    if (a)
                        for (; r > o && !1 !== t.apply(e[o], i); o++);
                    else
                        for (o in e)
                            if (!1 === t.apply(e[o], i)) break
                } else if (a)
                    for (; r > o && !1 !== t.call(e[o], o, e[o]); o++);
                else
                    for (o in e)
                        if (!1 === t.call(e[o], o, e[o])) break;
                return e
            },
            trim: ne && !ne.call("\ufeff ") ? function(e) {
                return null == e ? "" : ne.call(e)
            } : function(e) {
                return null == e ? "" : (e + "").replace(ae, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : K.call(i, e)), i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (Y) return Y.call(t, e, n);
                    for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e) return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, o = e.length; n > i;) e[o++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i];) e[o++] = t[i++];
                return e.length = o, e
            },
            grep: function(e, t, n) {
                for (var i = [], o = 0, r = e.length, a = !n; r > o; o++) !t(e[o], o) !== a && i.push(e[o]);
                return i
            },
            map: function(e, t, i) {
                var o, r = 0,
                    a = e.length,
                    s = n(e),
                    l = [];
                if (s)
                    for (; a > r; r++) null != (o = t(e[r], r, i)) && l.push(o);
                else
                    for (r in e) null != (o = t(e[r], r, i)) && l.push(o);
                return Q.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, o;
                return "string" == typeof t && (o = e[t], t = e, e = o), re.isFunction(e) ? (n = X.call(arguments, 2), i = function() {
                    return e.apply(t || this, n.concat(X.call(arguments)))
                }, i.guid = e.guid = e.guid || re.guid++, i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ie
        }), re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            Z["[object " + t + "]"] = t.toLowerCase()
        });
        var de = function(e) {
            function t(e, t, n, i) {
                var o, r, a, s, c, h, f, p, g, m;
                if ((t ? t.ownerDocument || t : F) !== N && E(t), t = t || N, n = n || [], !e || "string" != typeof e) return n;
                if (1 !== (s = t.nodeType) && 9 !== s) return [];
                if (I && !i) {
                    if (o = me.exec(e))
                        if (a = o[1]) {
                            if (9 === s) {
                                if (!(r = t.getElementById(a)) || !r.parentNode) return n;
                                if (r.id === a) return n.push(r), n
                            } else if (t.ownerDocument && (r = t.ownerDocument.getElementById(a)) && M(t, r) && r.id === a) return n.push(r), n
                        } else {
                            if (o[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                            if ((a = o[3]) && _.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(a)), n
                        }
                    if (_.qsa && (!L || !L.test(e))) {
                        if (p = f = H, g = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                            for (h = d(e), (f = t.getAttribute("id")) ? p = f.replace(ye, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", c = h.length; c--;) h[c] = p + u(h[c]);
                            g = ve.test(e) && l(t.parentNode) || t, m = h.join(",")
                        }
                        if (m) try {
                            return K.apply(n, g.querySelectorAll(m)), n
                        } catch (e) {} finally {
                            f || t.removeAttribute("id")
                        }
                    }
                }
                return b(e.replace(ae, "$1"), t, n, i)
            }

            function n() {
                function e(n, i) {
                    return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = i
                }
                var t = [];
                return e
            }

            function i(e) {
                return e[H] = !0, e
            }

            function o(e) {
                var t = N.createElement("div");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t), t = null
                }
            }

            function r(e, t) {
                for (var n = e.split("|"), i = e.length; i--;) x.attrHandle[n[i]] = t
            }

            function a(e, t) {
                var n = t && e,
                    i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || J) - (~e.sourceIndex || J);
                if (i) return i;
                if (n)
                    for (; n = n.nextSibling;)
                        if (n === t) return -1;
                return e ? 1 : -1
            }

            function s(e) {
                return i(function(t) {
                    return t = +t, i(function(n, i) {
                        for (var o, r = e([], n.length, t), a = r.length; a--;) n[o = r[a]] && (n[o] = !(i[o] = n[o]))
                    })
                })
            }

            function l(e) {
                return e && typeof e.getElementsByTagName !== z && e
            }

            function c() {}

            function d(e, n) {
                var i, o, r, a, s, l, c, d = q[e + " "];
                if (d) return n ? 0 : d.slice(0);
                for (s = e, l = [], c = x.preFilter; s;) {
                    (!i || (o = se.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(r = [])), i = !1, (o = le.exec(s)) && (i = o.shift(), r.push({
                        value: i,
                        type: o[0].replace(ae, " ")
                    }), s = s.slice(i.length));
                    for (a in x.filter) !(o = he[a].exec(s)) || c[a] && !(o = c[a](o)) || (i = o.shift(), r.push({
                        value: i,
                        type: a,
                        matches: o
                    }), s = s.slice(i.length));
                    if (!i) break
                }
                return n ? s.length : s ? t.error(e) : q(e, l).slice(0)
            }

            function u(e) {
                for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
                return i
            }

            function h(e, t, n) {
                var i = t.dir,
                    o = n && "parentNode" === i,
                    r = R++;
                return t.first ? function(t, n, r) {
                    for (; t = t[i];)
                        if (1 === t.nodeType || o) return e(t, n, r)
                } : function(t, n, a) {
                    var s, l, c = [B, r];
                    if (a) {
                        for (; t = t[i];)
                            if ((1 === t.nodeType || o) && e(t, n, a)) return !0
                    } else
                        for (; t = t[i];)
                            if (1 === t.nodeType || o) {
                                if (l = t[H] || (t[H] = {}), (s = l[i]) && s[0] === B && s[1] === r) return c[2] = s[2];
                                if (l[i] = c, c[2] = e(t, n, a)) return !0
                            }
                }
            }

            function f(e) {
                return e.length > 1 ? function(t, n, i) {
                    for (var o = e.length; o--;)
                        if (!e[o](t, n, i)) return !1;
                    return !0
                } : e[0]
            }

            function p(e, t, n, i, o) {
                for (var r, a = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (!n || n(r, i, o)) && (a.push(r), c && t.push(s));
                return a
            }

            function g(e, t, n, o, r, a) {
                return o && !o[H] && (o = g(o)), r && !r[H] && (r = g(r, a)), i(function(i, a, s, l) {
                    var c, d, u, h = [],
                        f = [],
                        g = a.length,
                        m = i || y(t || "*", s.nodeType ? [s] : s, []),
                        v = !e || !i && t ? m : p(m, h, e, s, l),
                        b = n ? r || (i ? e : g || o) ? [] : a : v;
                    if (n && n(v, b, s, l), o)
                        for (c = p(b, f), o(c, [], s, l), d = c.length; d--;)(u = c[d]) && (b[f[d]] = !(v[f[d]] = u));
                    if (i) {
                        if (r || e) {
                            if (r) {
                                for (c = [], d = b.length; d--;)(u = b[d]) && c.push(v[d] = u);
                                r(null, b = [], c, l)
                            }
                            for (d = b.length; d--;)(u = b[d]) && (c = r ? Z.call(i, u) : h[d]) > -1 && (i[c] = !(a[c] = u))
                        }
                    } else b = p(b === a ? b.splice(g, b.length) : b), r ? r(null, a, b, l) : K.apply(a, b)
                })
            }

            function m(e) {
                for (var t, n, i, o = e.length, r = x.relative[e[0].type], a = r || x.relative[" "], s = r ? 1 : 0, l = h(function(e) {
                        return e === t
                    }, a, !0), c = h(function(e) {
                        return Z.call(t, e) > -1
                    }, a, !0), d = [function(e, n, i) {
                        return !r && (i || n !== T) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
                    }]; o > s; s++)
                    if (n = x.relative[e[s].type]) d = [h(f(d), n)];
                    else {
                        if (n = x.filter[e[s].type].apply(null, e[s].matches), n[H]) {
                            for (i = ++s; o > i && !x.relative[e[i].type]; i++);
                            return g(s > 1 && f(d), s > 1 && u(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace(ae, "$1"), n, i > s && m(e.slice(s, i)), o > i && m(e = e.slice(i)), o > i && u(e))
                        }
                        d.push(n)
                    }
                return f(d)
            }

            function v(e, n) {
                var o = n.length > 0,
                    r = e.length > 0,
                    a = function(i, a, s, l, c) {
                        var d, u, h, f = 0,
                            g = "0",
                            m = i && [],
                            v = [],
                            y = T,
                            b = i || r && x.find.TAG("*", c),
                            w = B += null == y ? 1 : Math.random() || .1,
                            _ = b.length;
                        for (c && (T = a !== N && a); g !== _ && null != (d = b[g]); g++) {
                            if (r && d) {
                                for (u = 0; h = e[u++];)
                                    if (h(d, a, s)) {
                                        l.push(d);
                                        break
                                    }
                                c && (B = w)
                            }
                            o && ((d = !h && d) && f--, i && m.push(d))
                        }
                        if (f += g, o && g !== f) {
                            for (u = 0; h = n[u++];) h(m, v, a, s);
                            if (i) {
                                if (f > 0)
                                    for (; g--;) m[g] || v[g] || (v[g] = X.call(l));
                                v = p(v)
                            }
                            K.apply(l, v), c && !i && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                        }
                        return c && (B = w, T = y), m
                    };
                return o ? i(a) : a
            }

            function y(e, n, i) {
                for (var o = 0, r = n.length; r > o; o++) t(e, n[o], i);
                return i
            }

            function b(e, t, n, i) {
                var o, r, a, s, c, h = d(e);
                if (!i && 1 === h.length) {
                    if (r = h[0] = h[0].slice(0), r.length > 2 && "ID" === (a = r[0]).type && _.getById && 9 === t.nodeType && I && x.relative[r[1].type]) {
                        if (!(t = (x.find.ID(a.matches[0].replace(be, we), t) || [])[0])) return n;
                        e = e.slice(r.shift().value.length)
                    }
                    for (o = he.needsContext.test(e) ? 0 : r.length; o-- && (a = r[o], !x.relative[s = a.type]);)
                        if ((c = x.find[s]) && (i = c(a.matches[0].replace(be, we), ve.test(r[0].type) && l(t.parentNode) || t))) {
                            if (r.splice(o, 1), !(e = i.length && u(r))) return K.apply(n, i), n;
                            break
                        }
                }
                return k(e, h)(i, t, !I, n, ve.test(e) && l(t.parentNode) || t), n
            }
            var w, _, x, $, C, k, T, S, A, E, N, D, I, L, O, j, M, H = "sizzle" + -new Date,
                F = e.document,
                B = 0,
                R = 0,
                P = n(),
                q = n(),
                W = n(),
                U = function(e, t) {
                    return e === t && (A = !0), 0
                },
                z = "undefined",
                J = 1 << 31,
                G = {}.hasOwnProperty,
                V = [],
                X = V.pop,
                Q = V.push,
                K = V.push,
                Y = V.slice,
                Z = V.indexOf || function(e) {
                    for (var t = 0, n = this.length; n > t; t++)
                        if (this[t] === e) return t;
                    return -1
                },
                ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                te = "[\\x20\\t\\r\\n\\f]",
                ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                ie = ne.replace("w", "w#"),
                oe = "\\[" + te + "*(" + ne + ")" + te + "*(?:([*^$|!~]?=)" + te + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + ie + ")|)|)" + te + "*\\]",
                re = ":(" + ne + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + oe.replace(3, 8) + ")*)|.*)\\)|)",
                ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
                se = new RegExp("^" + te + "*," + te + "*"),
                le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
                ce = new RegExp("=" + te + "*([^\\]'\"]*?)" + te + "*\\]", "g"),
                de = new RegExp(re),
                ue = new RegExp("^" + ie + "$"),
                he = {
                    ID: new RegExp("^#(" + ne + ")"),
                    CLASS: new RegExp("^\\.(" + ne + ")"),
                    TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + oe),
                    PSEUDO: new RegExp("^" + re),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + ee + ")$", "i"),
                    needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i")
                },
                fe = /^(?:input|select|textarea|button)$/i,
                pe = /^h\d$/i,
                ge = /^[^{]+\{\s*\[native \w/,
                me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ve = /[+~]/,
                ye = /'|\\/g,
                be = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
                we = function(e, t, n) {
                    var i = "0x" + t - 65536;
                    return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
                };
            try {
                K.apply(V = Y.call(F.childNodes), F.childNodes), V[F.childNodes.length].nodeType
            } catch (e) {
                K = {
                    apply: V.length ? function(e, t) {
                        Q.apply(e, Y.call(t))
                    } : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++];);
                        e.length = n - 1
                    }
                }
            }
            _ = t.support = {}, C = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return !!t && "HTML" !== t.nodeName
            }, E = t.setDocument = function(e) {
                var t, n = e ? e.ownerDocument || e : F,
                    i = n.defaultView;
                return n !== N && 9 === n.nodeType && n.documentElement ? (N = n, D = n.documentElement, I = !C(n), i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", function() {
                    E()
                }, !1) : i.attachEvent && i.attachEvent("onunload", function() {
                    E()
                })), _.attributes = o(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), _.getElementsByTagName = o(function(e) {
                    return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
                }), _.getElementsByClassName = ge.test(n.getElementsByClassName) && o(function(e) {
                    return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
                }), _.getById = o(function(e) {
                    return D.appendChild(e).id = H, !n.getElementsByName || !n.getElementsByName(H).length
                }), _.getById ? (x.find.ID = function(e, t) {
                    if (typeof t.getElementById !== z && I) {
                        var n = t.getElementById(e);
                        return n && n.parentNode ? [n] : []
                    }
                }, x.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }) : (delete x.find.ID, x.filter.ID = function(e) {
                    var t = e.replace(be, we);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== z && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }), x.find.TAG = _.getElementsByTagName ? function(e, t) {
                    return typeof t.getElementsByTagName !== z ? t.getElementsByTagName(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        o = 0,
                        r = t.getElementsByTagName(e);
                    if ("*" === e) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, x.find.CLASS = _.getElementsByClassName && function(e, t) {
                    return typeof t.getElementsByClassName !== z && I ? t.getElementsByClassName(e) : void 0
                }, O = [], L = [], (_.qsa = ge.test(n.querySelectorAll)) && (o(function(e) {
                    e.innerHTML = "<select t=''><option selected=''></option></select>", e.querySelectorAll("[t^='']").length && L.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || L.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll(":checked").length || L.push(":checked")
                }), o(function(e) {
                    var t = n.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && L.push("name" + te + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || L.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), L.push(",.*:")
                })), (_.matchesSelector = ge.test(j = D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && o(function(e) {
                    _.disconnectedMatch = j.call(e, "div"), j.call(e, "[s!='']:x"), O.push("!=", re)
                }), L = L.length && new RegExp(L.join("|")), O = O.length && new RegExp(O.join("|")), t = ge.test(D.compareDocumentPosition), M = t || ge.test(D.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode;
                    return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, U = t ? function(e, t) {
                    if (e === t) return A = !0, 0;
                    var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return i || (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & i || !_.sortDetached && t.compareDocumentPosition(e) === i ? e === n || e.ownerDocument === F && M(F, e) ? -1 : t === n || t.ownerDocument === F && M(F, t) ? 1 : S ? Z.call(S, e) - Z.call(S, t) : 0 : 4 & i ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return A = !0, 0;
                    var i, o = 0,
                        r = e.parentNode,
                        s = t.parentNode,
                        l = [e],
                        c = [t];
                    if (!r || !s) return e === n ? -1 : t === n ? 1 : r ? -1 : s ? 1 : S ? Z.call(S, e) - Z.call(S, t) : 0;
                    if (r === s) return a(e, t);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (i = t; i = i.parentNode;) c.unshift(i);
                    for (; l[o] === c[o];) o++;
                    return o ? a(l[o], c[o]) : l[o] === F ? -1 : c[o] === F ? 1 : 0
                }, n) : N
            }, t.matches = function(e, n) {
                return t(e, null, null, n)
            }, t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== N && E(e), n = n.replace(ce, "='$1']"), !(!_.matchesSelector || !I || O && O.test(n) || L && L.test(n))) try {
                    var i = j.call(e, n);
                    if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
                } catch (e) {}
                return t(n, N, null, [e]).length > 0
            }, t.contains = function(e, t) {
                return (e.ownerDocument || e) !== N && E(e), M(e, t)
            }, t.attr = function(e, t) {
                (e.ownerDocument || e) !== N && E(e);
                var n = x.attrHandle[t.toLowerCase()],
                    i = n && G.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
                return void 0 !== i ? i : _.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }, t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, t.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    o = 0;
                if (A = !_.detectDuplicates, S = !_.sortStable && e.slice(0), e.sort(U), A) {
                    for (; t = e[o++];) t === e[o] && (i = n.push(o));
                    for (; i--;) e.splice(n[i], 1)
                }
                return S = null, e
            }, $ = t.getText = function(e) {
                var t, n = "",
                    i = 0,
                    o = e.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += $(e)
                    } else if (3 === o || 4 === o) return e.nodeValue
                } else
                    for (; t = e[i++];) n += $(t);
                return n
            }, x = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: he,
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
                        return e[1] = e[1].replace(be, we), e[3] = (e[4] || e[5] || "").replace(be, we), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[5] && e[2];
                        return he.CHILD.test(e[0]) ? null : (e[3] && void 0 !== e[4] ? e[2] = e[4] : n && de.test(n) && (t = d(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(be, we).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = P[e + " "];
                        return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && P(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== z && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(e, n, i) {
                        return function(o) {
                            var r = t.attr(o, e);
                            return null == r ? "!=" === n : !n || (r += "", "=" === n ? r === i : "!=" === n ? r !== i : "^=" === n ? i && 0 === r.indexOf(i) : "*=" === n ? i && r.indexOf(i) > -1 : "$=" === n ? i && r.slice(-i.length) === i : "~=" === n ? (" " + r + " ").indexOf(i) > -1 : "|=" === n && (r === i || r.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(e, t, n, i, o) {
                        var r = "nth" !== e.slice(0, 3),
                            a = "last" !== e.slice(-4),
                            s = "of-type" === t;
                        return 1 === i && 0 === o ? function(e) {
                            return !!e.parentNode
                        } : function(t, n, l) {
                            var c, d, u, h, f, p, g = r !== a ? "nextSibling" : "previousSibling",
                                m = t.parentNode,
                                v = s && t.nodeName.toLowerCase(),
                                y = !l && !s;
                            if (m) {
                                if (r) {
                                    for (; g;) {
                                        for (u = t; u = u[g];)
                                            if (s ? u.nodeName.toLowerCase() === v : 1 === u.nodeType) return !1;
                                        p = g = "only" === e && !p && "nextSibling"
                                    }
                                    return !0
                                }
                                if (p = [a ? m.firstChild : m.lastChild], a && y) {
                                    for (d = m[H] || (m[H] = {}), c = d[e] || [], f = c[0] === B && c[1], h = c[0] === B && c[2], u = f && m.childNodes[f]; u = ++f && u && u[g] || (h = f = 0) || p.pop();)
                                        if (1 === u.nodeType && ++h && u === t) {
                                            d[e] = [B, f, h];
                                            break
                                        }
                                } else if (y && (c = (t[H] || (t[H] = {}))[e]) && c[0] === B) h = c[1];
                                else
                                    for (;
                                        (u = ++f && u && u[g] || (h = f = 0) || p.pop()) && ((s ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++h || (y && ((u[H] || (u[H] = {}))[e] = [B, h]), u !== t)););
                                return (h -= o) === i || h % i == 0 && h / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var o, r = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return r[H] ? r(n) : r.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                            for (var i, o = r(e, n), a = o.length; a--;) i = Z.call(e, o[a]), e[i] = !(t[i] = o[a])
                        }) : function(e) {
                            return r(e, 0, o)
                        }) : r
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = [],
                            n = [],
                            o = k(e.replace(ae, "$1"));
                        return o[H] ? i(function(e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, i, r) {
                            return t[0] = e, o(t, null, r, n), !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return function(t) {
                            return (t.textContent || t.innerText || $(t)).indexOf(e) > -1
                        }
                    }),
                    lang: i(function(e) {
                        return ue.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, we).toLowerCase(),
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
                        return e === D
                    },
                    focus: function(e) {
                        return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
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
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return pe.test(e.nodeName)
                    },
                    input: function(e) {
                        return fe.test(e.nodeName)
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
                        return [0 > n ? n + t : n]
                    }),
                    even: s(function(e, t) {
                        for (var n = 0; t > n; n += 2) e.push(n);
                        return e
                    }),
                    odd: s(function(e, t) {
                        for (var n = 1; t > n; n += 2) e.push(n);
                        return e
                    }),
                    lt: s(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0;) e.push(i);
                        return e
                    }),
                    gt: s(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }, x.pseudos.nth = x.pseudos.eq;
            for (w in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[w] = function(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }(w);
            for (w in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[w] = function(e) {
                return function(t) {
                    var n = t.nodeName.toLowerCase();
                    return ("input" === n || "button" === n) && t.type === e
                }
            }(w);
            return c.prototype = x.filters = x.pseudos, x.setFilters = new c, k = t.compile = function(e, t) {
                var n, i = [],
                    o = [],
                    r = W[e + " "];
                if (!r) {
                    for (t || (t = d(e)), n = t.length; n--;) r = m(t[n]), r[H] ? i.push(r) : o.push(r);
                    r = W(e, v(o, i))
                }
                return r
            }, _.sortStable = H.split("").sort(U).join("") === H, _.detectDuplicates = !!A, E(), _.sortDetached = o(function(e) {
                return 1 & e.compareDocumentPosition(N.createElement("div"))
            }), o(function(e) {
                return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
            }) || r("type|href|height|width", function(e, t, n) {
                return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }), _.attributes && o(function(e) {
                return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
            }) || r("value", function(e, t, n) {
                return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
            }), o(function(e) {
                return null == e.getAttribute("disabled")
            }) || r(ee, function(e, t, n) {
                var i;
                return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }), t
        }(e);
        re.find = de, re.expr = de.selectors, re.expr[":"] = re.expr.pseudos, re.unique = de.uniqueSort, re.text = de.getText, re.isXMLDoc = de.isXML, re.contains = de.contains;
        var ue = re.expr.match.needsContext,
            he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            fe = /^.[^:#\[\.,]*$/;
        re.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }, re.fn.extend({
            find: function(e) {
                var t, n = [],
                    i = this,
                    o = i.length;
                if ("string" != typeof e) return this.pushStack(re(e).filter(function() {
                    for (t = 0; o > t; t++)
                        if (re.contains(i[t], this)) return !0
                }));
                for (t = 0; o > t; t++) re.find(e, i[t], n);
                return n = this.pushStack(o > 1 ? re.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && ue.test(e) ? re(e) : e || [], !1).length
            }
        });
        var pe, ge = e.document,
            me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (re.fn.init = function(e, t) {
            var n, i;
            if (!e) return this;
            if ("string" == typeof e) {
                if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : me.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || pe).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof re ? t[0] : t, re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : ge, !0)), he.test(n[1]) && re.isPlainObject(t))
                        for (n in t) re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if ((i = ge.getElementById(n[2])) && i.parentNode) {
                    if (i.id !== n[2]) return pe.find(e);
                    this.length = 1, this[0] = i
                }
                return this.context = ge, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : re.isFunction(e) ? void 0 !== pe.ready ? pe.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), re.makeArray(e, this))
        }).prototype = re.fn, pe = re(ge);
        var ve = /^(?:parents|prev(?:Until|All))/,
            ye = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        re.extend({
            dir: function(e, t, n) {
                for (var i = [], o = e[t]; o && 9 !== o.nodeType && (void 0 === n || 1 !== o.nodeType || !re(o).is(n));) 1 === o.nodeType && i.push(o), o = o[t];
                return i
            },
            sibling: function(e, t) {
                for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                return n
            }
        }), re.fn.extend({
            has: function(e) {
                var t, n = re(e, this),
                    i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (re.contains(this, n[t])) return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, o = this.length, r = [], a = ue.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; o > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                            r.push(n);
                            break
                        }
                return this.pushStack(r.length > 1 ? re.unique(r) : r)
            },
            index: function(e) {
                return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }), re.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return re.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return re.dir(e, "parentNode", n)
            },
            next: function(e) {
                return o(e, "nextSibling")
            },
            prev: function(e) {
                return o(e, "previousSibling")
            },
            nextAll: function(e) {
                return re.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return re.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return re.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return re.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return re.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return re.sibling(e.firstChild)
            },
            contents: function(e) {
                return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
            }
        }, function(e, t) {
            re.fn[e] = function(n, i) {
                var o = re.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (o = re.filter(i, o)), this.length > 1 && (ye[e] || (o = re.unique(o)), ve.test(e) && (o = o.reverse())), this.pushStack(o)
            }
        });
        var be = /\S+/g,
            we = {};
        re.Callbacks = function(e) {
            e = "string" == typeof e ? we[e] || r(e) : re.extend({}, e);
            var t, n, i, o, a, s, l = [],
                c = !e.once && [],
                d = function(r) {
                    for (n = e.memory && r, i = !0, a = s || 0, s = 0, o = l.length, t = !0; l && o > a; a++)
                        if (!1 === l[a].apply(r[0], r[1]) && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    t = !1, l && (c ? c.length && d(c.shift()) : n ? l = [] : u.disable())
                },
                u = {
                    add: function() {
                        if (l) {
                            var i = l.length;
                            ! function t(n) {
                                re.each(n, function(n, i) {
                                    var o = re.type(i);
                                    "function" === o ? e.unique && u.has(i) || l.push(i) : i && i.length && "string" !== o && t(i)
                                })
                            }(arguments), t ? o = l.length : n && (s = i, d(n))
                        }
                        return this
                    },
                    remove: function() {
                        return l && re.each(arguments, function(e, n) {
                            for (var i;
                                (i = re.inArray(n, l, i)) > -1;) l.splice(i, 1), t && (o >= i && o--, a >= i && a--)
                        }), this
                    },
                    has: function(e) {
                        return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
                    },
                    empty: function() {
                        return l = [], o = 0, this
                    },
                    disable: function() {
                        return l = c = n = void 0, this
                    },
                    disabled: function() {
                        return !l
                    },
                    lock: function() {
                        return c = void 0, n || u.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(e, n) {
                        return !l || i && !c || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? c.push(n) : d(n)), this
                    },
                    fire: function() {
                        return u.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return u
        }, re.extend({
            Deferred: function(e) {
                var t = [
                        ["resolve", "done", re.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", re.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", re.Callbacks("memory")]
                    ],
                    n = "pending",
                    i = {
                        state: function() {
                            return n
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var e = arguments;
                            return re.Deferred(function(n) {
                                re.each(t, function(t, r) {
                                    var a = re.isFunction(e[t]) && e[t];
                                    o[r[1]](function() {
                                        var e = a && a.apply(this, arguments);
                                        e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                                    })
                                }), e = null
                            }).promise()
                        },
                        promise: function(e) {
                            return null != e ? re.extend(e, i) : i
                        }
                    },
                    o = {};
                return i.pipe = i.then, re.each(t, function(e, r) {
                    var a = r[2],
                        s = r[3];
                    i[r[1]] = a.add, s && a.add(function() {
                        n = s
                    }, t[1 ^ e][2].disable, t[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? i : this, arguments), this
                    }, o[r[0] + "With"] = a.fireWith
                }), i.promise(o), e && e.call(o, o), o
            },
            when: function(e) {
                var t, n, i, o = 0,
                    r = X.call(arguments),
                    a = r.length,
                    s = 1 !== a || e && re.isFunction(e.promise) ? a : 0,
                    l = 1 === s ? e : re.Deferred(),
                    c = function(e, n, i) {
                        return function(o) {
                            n[e] = this, i[e] = arguments.length > 1 ? X.call(arguments) : o, i === t ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
                        }
                    };
                if (a > 1)
                    for (t = new Array(a), n = new Array(a), i = new Array(a); a > o; o++) r[o] && re.isFunction(r[o].promise) ? r[o].promise().done(c(o, i, r)).fail(l.reject).progress(c(o, n, t)) : --s;
                return s || l.resolveWith(i, r), l.promise()
            }
        });
        var _e;
        re.fn.ready = function(e) {
            return re.ready.promise().done(e), this
        }, re.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? re.readyWait++ : re.ready(!0)
            },
            ready: function(e) {
                if (!0 === e ? !--re.readyWait : !re.isReady) {
                    if (!ge.body) return setTimeout(re.ready);
                    re.isReady = !0, !0 !== e && --re.readyWait > 0 || (_e.resolveWith(ge, [re]), re.fn.trigger && re(ge).trigger("ready").off("ready"))
                }
            }
        }), re.ready.promise = function(t) {
            if (!_e)
                if (_e = re.Deferred(), "complete" === ge.readyState) setTimeout(re.ready);
                else if (ge.addEventListener) ge.addEventListener("DOMContentLoaded", s, !1), e.addEventListener("load", s, !1);
            else {
                ge.attachEvent("onreadystatechange", s), e.attachEvent("onload", s);
                var n = !1;
                try {
                    n = null == e.frameElement && ge.documentElement
                } catch (e) {}
                n && n.doScroll && function e() {
                    if (!re.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return setTimeout(e, 50)
                        }
                        a(), re.ready()
                    }
                }()
            }
            return _e.promise(t)
        };
        var xe, $e = "undefined";
        for (xe in re(ie)) break;
        ie.ownLast = "0" !== xe, ie.inlineBlockNeedsLayout = !1, re(function() {
                var e, t, n = ge.getElementsByTagName("body")[0];
                n && (e = ge.createElement("div"), e.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", t = ge.createElement("div"), n.appendChild(e).appendChild(t), typeof t.style.zoom !== $e && (t.style.cssText = "border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1", (ie.inlineBlockNeedsLayout = 3 === t.offsetWidth) && (n.style.zoom = 1)), n.removeChild(e), e = t = null)
            }),
            function() {
                var e = ge.createElement("div");
                if (null == ie.deleteExpando) {
                    ie.deleteExpando = !0;
                    try {
                        delete e.test
                    } catch (e) {
                        ie.deleteExpando = !1
                    }
                }
                e = null
            }(), re.acceptData = function(e) {
                var t = re.noData[(e.nodeName + " ").toLowerCase()],
                    n = +e.nodeType || 1;
                return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t)
            };
        var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            ke = /([A-Z])/g;
        re.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(e) {
                return !!(e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando]) && !c(e)
            },
            data: function(e, t, n) {
                return d(e, t, n)
            },
            removeData: function(e, t) {
                return u(e, t)
            },
            _data: function(e, t, n) {
                return d(e, t, n, !0)
            },
            _removeData: function(e, t) {
                return u(e, t, !0)
            }
        }), re.fn.extend({
            data: function(e, t) {
                var n, i, o, r = this[0],
                    a = r && r.attributes;
                if (void 0 === e) {
                    if (this.length && (o = re.data(r), 1 === r.nodeType && !re._data(r, "parsedAttrs"))) {
                        for (n = a.length; n--;) i = a[n].name, 0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)), l(r, i, o[i]));
                        re._data(r, "parsedAttrs", !0)
                    }
                    return o
                }
                return "object" == typeof e ? this.each(function() {
                    re.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    re.data(this, e, t)
                }) : r ? l(r, e, re.data(r, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    re.removeData(this, e)
                })
            }
        }), re.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue", i = re._data(e, t), n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)), i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = re.queue(e, t),
                    i = n.length,
                    o = n.shift(),
                    r = re._queueHooks(e, t),
                    a = function() {
                        re.dequeue(e, t)
                    };
                "inprogress" === o && (o = n.shift(), i--), o && ("fx" === t && n.unshift("inprogress"), delete r.stop, o.call(e, a, r)), !i && r && r.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return re._data(e, n) || re._data(e, n, {
                    empty: re.Callbacks("once memory").add(function() {
                        re._removeData(e, t + "queue"), re._removeData(e, n)
                    })
                })
            }
        }), re.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                    var n = re.queue(this, e, t);
                    re._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    re.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1,
                    o = re.Deferred(),
                    r = this,
                    a = this.length,
                    s = function() {
                        --i || o.resolveWith(r, [r])
                    };
                for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = re._data(r[a], e + "queueHooks")) && n.empty && (i++, n.empty.add(s));
                return s(), o.promise(t)
            }
        });
        var Te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Se = ["Top", "Right", "Bottom", "Left"],
            Ae = function(e, t) {
                return e = t || e, "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
            },
            Ee = re.access = function(e, t, n, i, o, r, a) {
                var s = 0,
                    l = e.length,
                    c = null == n;
                if ("object" === re.type(n)) {
                    o = !0;
                    for (s in n) re.access(e, t, s, n[s], !0, r, a)
                } else if (void 0 !== i && (o = !0, re.isFunction(i) || (a = !0), c && (a ? (t.call(e, i), t = null) : (c = t, t = function(e, t, n) {
                        return c.call(re(e), n)
                    })), t))
                    for (; l > s; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
                return o ? e : c ? t.call(e) : l ? t(e[0], n) : r
            },
            Ne = /^(?:checkbox|radio)$/i;
        ! function() {
            var e = ge.createDocumentFragment(),
                t = ge.createElement("div"),
                n = ge.createElement("input");
            if (t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a>", ie.leadingWhitespace = 3 === t.firstChild.nodeType, ie.tbody = !t.getElementsByTagName("tbody").length, ie.htmlSerialize = !!t.getElementsByTagName("link").length, ie.html5Clone = "<:nav></:nav>" !== ge.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", n.checked = !0, e.appendChild(n), ie.appendChecked = n.checked, t.innerHTML = "<textarea>x</textarea>", ie.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, e.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", ie.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, ie.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() {
                    ie.noCloneEvent = !1
                }), t.cloneNode(!0).click()), null == ie.deleteExpando) {
                ie.deleteExpando = !0;
                try {
                    delete t.test
                } catch (e) {
                    ie.deleteExpando = !1
                }
            }
            e = t = n = null
        }(),
        function() {
            var t, n, i = ge.createElement("div");
            for (t in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) n = "on" + t, (ie[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"), ie[t + "Bubbles"] = !1 === i.attributes[n].expando);
            i = null
        }();
        var De = /^(?:input|select|textarea)$/i,
            Ie = /^key/,
            Le = /^(?:mouse|contextmenu)|click/,
            Oe = /^(?:focusinfocus|focusoutblur)$/,
            je = /^([^.]*)(?:\.(.+)|)$/;
        re.event = {
            global: {},
            add: function(e, t, n, i, o) {
                var r, a, s, l, c, d, u, h, f, p, g, m = re._data(e);
                if (m) {
                    for (n.handler && (l = n, n = l.handler, o = l.selector), n.guid || (n.guid = re.guid++), (a = m.events) || (a = m.events = {}), (d = m.handle) || (d = m.handle = function(e) {
                            return typeof re === $e || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(d.elem, arguments)
                        }, d.elem = e), t = (t || "").match(be) || [""], s = t.length; s--;) r = je.exec(t[s]) || [], f = g = r[1], p = (r[2] || "").split(".").sort(), f && (c = re.event.special[f] || {}, f = (o ? c.delegateType : c.bindType) || f, c = re.event.special[f] || {}, u = re.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: o,
                        needsContext: o && re.expr.match.needsContext.test(o),
                        namespace: p.join(".")
                    }, l), (h = a[f]) || (h = a[f] = [], h.delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, p, d) || (e.addEventListener ? e.addEventListener(f, d, !1) : e.attachEvent && e.attachEvent("on" + f, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, u) : h.push(u), re.event.global[f] = !0);
                    e = null
                }
            },
            remove: function(e, t, n, i, o) {
                var r, a, s, l, c, d, u, h, f, p, g, m = re.hasData(e) && re._data(e);
                if (m && (d = m.events)) {
                    for (t = (t || "").match(be) || [""], c = t.length; c--;)
                        if (s = je.exec(t[c]) || [], f = g = s[1], p = (s[2] || "").split(".").sort(), f) {
                            for (u = re.event.special[f] || {}, f = (i ? u.delegateType : u.bindType) || f, h = d[f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;) a = h[r], !o && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (h.splice(r, 1), a.selector && h.delegateCount--, u.remove && u.remove.call(e, a));
                            l && !h.length && (u.teardown && !1 !== u.teardown.call(e, p, m.handle) || re.removeEvent(e, f, m.handle), delete d[f])
                        } else
                            for (f in d) re.event.remove(e, f + t[c], n, i, !0);
                    re.isEmptyObject(d) && (delete m.handle, re._removeData(e, "events"))
                }
            },
            trigger: function(t, n, i, o) {
                var r, a, s, l, c, d, u, h = [i || ge],
                    f = te.call(t, "type") ? t.type : t,
                    p = te.call(t, "namespace") ? t.namespace.split(".") : [];
                if (s = d = i = i || ge, 3 !== i.nodeType && 8 !== i.nodeType && !Oe.test(f + re.event.triggered) && (f.indexOf(".") >= 0 && (p = f.split("."), f = p.shift(), p.sort()), a = f.indexOf(":") < 0 && "on" + f, t = t[re.expando] ? t : new re.Event(f, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = p.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = i), n = null == n ? [t] : re.makeArray(n, [t]), c = re.event.special[f] || {}, o || !c.trigger || !1 !== c.trigger.apply(i, n))) {
                    if (!o && !c.noBubble && !re.isWindow(i)) {
                        for (l = c.delegateType || f, Oe.test(l + f) || (s = s.parentNode); s; s = s.parentNode) h.push(s), d = s;
                        d === (i.ownerDocument || ge) && h.push(d.defaultView || d.parentWindow || e)
                    }
                    for (u = 0;
                        (s = h[u++]) && !t.isPropagationStopped();) t.type = u > 1 ? l : c.bindType || f, r = (re._data(s, "events") || {})[t.type] && re._data(s, "handle"), r && r.apply(s, n), (r = a && s[a]) && r.apply && re.acceptData(s) && (t.result = r.apply(s, n), !1 === t.result && t.preventDefault());
                    if (t.type = f, !o && !t.isDefaultPrevented() && (!c._default || !1 === c._default.apply(h.pop(), n)) && re.acceptData(i) && a && i[f] && !re.isWindow(i)) {
                        d = i[a], d && (i[a] = null), re.event.triggered = f;
                        try {
                            i[f]()
                        } catch (e) {}
                        re.event.triggered = void 0, d && (i[a] = d)
                    }
                    return t.result
                }
            },
            dispatch: function(e) {
                e = re.event.fix(e);
                var t, n, i, o, r, a = [],
                    s = X.call(arguments),
                    l = (re._data(this, "events") || {})[e.type] || [],
                    c = re.event.special[e.type] || {};
                if (s[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
                    for (a = re.event.handlers.call(this, e, l), t = 0;
                        (o = a[t++]) && !e.isPropagationStopped();)
                        for (e.currentTarget = o.elem, r = 0;
                            (i = o.handlers[r++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, void 0 !== (n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, e), e.result
                }
            },
            handlers: function(e, t) {
                var n, i, o, r, a = [],
                    s = t.delegateCount,
                    l = e.target;
                if (s && l.nodeType && (!e.button || "click" !== e.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                            for (o = [], r = 0; s > r; r++) i = t[r], n = i.selector + " ", void 0 === o[n] && (o[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null, [l]).length), o[n] && o.push(i);
                            o.length && a.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return s < t.length && a.push({
                    elem: this,
                    handlers: t.slice(s)
                }), a
            },
            fix: function(e) {
                if (e[re.expando]) return e;
                var t, n, i, o = e.type,
                    r = e,
                    a = this.fixHooks[o];
                for (a || (this.fixHooks[o] = a = Le.test(o) ? this.mouseHooks : Ie.test(o) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new re.Event(r), t = i.length; t--;) n = i[t], e[n] = r[n];
                return e.target || (e.target = r.srcElement || ge), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, r) : e
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(e, t) {
                    return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(e, t) {
                    var n, i, o, r = t.button,
                        a = t.fromElement;
                    return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || ge, o = i.documentElement, n = i.body, e.pageX = t.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== p() && this.focus) try {
                            return this.focus(), !1
                        } catch (e) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === p() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(e) {
                        return re.nodeName(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && (e.originalEvent.returnValue = e.result)
                    }
                }
            },
            simulate: function(e, t, n, i) {
                var o = re.extend(new re.Event, n, {
                    type: e,
                    isSimulated: !0,
                    originalEvent: {}
                });
                i ? re.event.trigger(o, null, t) : re.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault()
            }
        }, re.removeEvent = ge.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        } : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === $e && (e[i] = null), e.detachEvent(i, n))
        }, re.Event = function(e, t) {
            return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && (!1 === e.returnValue || e.getPreventDefault && e.getPreventDefault()) ? h : f) : this.type = e, t && re.extend(this, t), this.timeStamp = e && e.timeStamp || re.now(), void(this[re.expando] = !0)) : new re.Event(e, t)
        }, re.Event.prototype = {
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = h, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = h, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = h, this.stopPropagation()
            }
        }, re.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(e, t) {
            re.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this,
                        o = e.relatedTarget,
                        r = e.handleObj;
                    return (!o || o !== i && !re.contains(i, o)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
                }
            }
        }), ie.submitBubbles || (re.event.special.submit = {
            setup: function() {
                return !re.nodeName(this, "form") && void re.event.add(this, "click._submit keypress._submit", function(e) {
                    var t = e.target,
                        n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                    n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
                        e._submit_bubble = !0
                    }), re._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(e) {
                e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
            },
            teardown: function() {
                return !re.nodeName(this, "form") && void re.event.remove(this, "._submit")
            }
        }), ie.changeBubbles || (re.event.special.change = {
            setup: function() {
                return De.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (re.event.add(this, "propertychange._change", function(e) {
                    "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
                }), re.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1), re.event.simulate("change", this, e, !0)
                })), !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                    var t = e.target;
                    De.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                        !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                    }), re._data(t, "changeBubbles", !0))
                })
            },
            handle: function(e) {
                var t = e.target;
                return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return re.event.remove(this, "._change"), !De.test(this.nodeName)
            }
        }), ie.focusinBubbles || re.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                re.event.simulate(t, e.target, re.event.fix(e), !0)
            };
            re.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        o = re._data(i, t);
                    o || i.addEventListener(e, n, !0), re._data(i, t, (o || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        o = re._data(i, t) - 1;
                    o ? re._data(i, t, o) : (i.removeEventListener(e, n, !0), re._removeData(i, t))
                }
            }
        }), re.fn.extend({
            on: function(e, t, n, i, o) {
                var r, a;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t, t = void 0);
                    for (r in e) this.on(r, t, n, e[r], o);
                    return this
                }
                if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = f;
                else if (!i) return this;
                return 1 === o && (a = i, i = function(e) {
                    return re().off(e), a.apply(this, arguments)
                }, i.guid = a.guid || (a.guid = re.guid++)), this.each(function() {
                    re.event.add(this, e, i, n, t)
                })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, o;
                if (e && e.preventDefault && e.handleObj) return i = e.handleObj, re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
                if ("object" == typeof e) {
                    for (o in e) this.off(o, t, e[o]);
                    return this
                }
                return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = f), this.each(function() {
                    re.event.remove(this, e, n, t)
                })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    re.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? re.event.trigger(e, t, n, !0) : void 0
            }
        });
        var Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            He = / jQuery\d+="(?:null|\d+)"/g,
            Fe = new RegExp("<(?:" + Me + ")[\\s/>]", "i"),
            Be = /^\s+/,
            Re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Pe = /<([\w:]+)/,
            qe = /<tbody/i,
            We = /<|&#?\w+;/,
            Ue = /<(?:script|style|link)/i,
            ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
            Je = /^$|\/(?:java|ecma)script/i,
            Ge = /^true\/(.*)/,
            Ve = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            Xe = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ie.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            Qe = g(ge),
            Ke = Qe.appendChild(ge.createElement("div"));
        Xe.optgroup = Xe.option, Xe.tbody = Xe.tfoot = Xe.colgroup = Xe.caption = Xe.thead, Xe.th = Xe.td, re.extend({
            clone: function(e, t, n) {
                var i, o, r, a, s, l = re.contains(e.ownerDocument, e);
                if (ie.html5Clone || re.isXMLDoc(e) || !Fe.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (Ke.innerHTML = e.outerHTML, Ke.removeChild(r = Ke.firstChild)), !(ie.noCloneEvent && ie.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                    for (i = m(r), s = m(e), a = 0; null != (o = s[a]); ++a) i[a] && $(o, i[a]);
                if (t)
                    if (n)
                        for (s = s || m(e), i = i || m(r), a = 0; null != (o = s[a]); a++) x(o, i[a]);
                    else x(e, r);
                return i = m(r, "script"), i.length > 0 && _(i, !l && m(e, "script")), i = s = o = null, r
            },
            buildFragment: function(e, t, n, i) {
                for (var o, r, a, s, l, c, d, u = e.length, h = g(t), f = [], p = 0; u > p; p++)
                    if ((r = e[p]) || 0 === r)
                        if ("object" === re.type(r)) re.merge(f, r.nodeType ? [r] : r);
                        else if (We.test(r)) {
                    for (s = s || h.appendChild(t.createElement("div")), l = (Pe.exec(r) || ["", ""])[1].toLowerCase(), d = Xe[l] || Xe._default, s.innerHTML = d[1] + r.replace(Re, "<$1></$2>") + d[2], o = d[0]; o--;) s = s.lastChild;
                    if (!ie.leadingWhitespace && Be.test(r) && f.push(t.createTextNode(Be.exec(r)[0])), !ie.tbody)
                        for (r = "table" !== l || qe.test(r) ? "<table>" !== d[1] || qe.test(r) ? 0 : s : s.firstChild, o = r && r.childNodes.length; o--;) re.nodeName(c = r.childNodes[o], "tbody") && !c.childNodes.length && r.removeChild(c);
                    for (re.merge(f, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                    s = h.lastChild
                } else f.push(t.createTextNode(r));
                for (s && h.removeChild(s), ie.appendChecked || re.grep(m(f, "input"), v), p = 0; r = f[p++];)
                    if ((!i || -1 === re.inArray(r, i)) && (a = re.contains(r.ownerDocument, r), s = m(h.appendChild(r), "script"), a && _(s), n))
                        for (o = 0; r = s[o++];) Je.test(r.type || "") && n.push(r);
                return s = null, h
            },
            cleanData: function(e, t) {
                for (var n, i, o, r, a = 0, s = re.expando, l = re.cache, c = ie.deleteExpando, d = re.event.special; null != (n = e[a]); a++)
                    if ((t || re.acceptData(n)) && (o = n[s], r = o && l[o])) {
                        if (r.events)
                            for (i in r.events) d[i] ? re.event.remove(n, i) : re.removeEvent(n, i, r.handle);
                        l[o] && (delete l[o], c ? delete n[s] : typeof n.removeAttribute !== $e ? n.removeAttribute(s) : n[s] = null, V.push(o))
                    }
            }
        }), re.fn.extend({
            text: function(e) {
                return Ee(this, function(e) {
                    return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || ge).createTextNode(e))
                }, null, e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        y(this, e).appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? re.filter(e, this) : this, o = 0; null != (n = i[o]); o++) t || 1 !== n.nodeType || re.cleanData(m(n)), n.parentNode && (t && re.contains(n.ownerDocument, n) && _(m(n, "script")), n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && re.cleanData(m(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                    e.options && re.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null != e && e, t = null == t ? e : t, this.map(function() {
                    return re.clone(this, e, t)
                })
            },
            html: function(e) {
                return Ee(this, function(e) {
                    var t = this[0] || {},
                        n = 0,
                        i = this.length;
                    if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(He, "") : void 0;
                    if (!("string" != typeof e || Ue.test(e) || !ie.htmlSerialize && Fe.test(e) || !ie.leadingWhitespace && Be.test(e) || Xe[(Pe.exec(e) || ["", ""])[1].toLowerCase()])) {
                        e = e.replace(Re, "<$1></$2>");
                        try {
                            for (; i > n; n++) t = this[n] || {}, 1 === t.nodeType && (re.cleanData(m(t, !1)), t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode, re.cleanData(m(this)), e && e.replaceChild(t, this)
                }), e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = Q.apply([], e);
                var n, i, o, r, a, s, l = 0,
                    c = this.length,
                    d = this,
                    u = c - 1,
                    h = e[0],
                    f = re.isFunction(h);
                if (f || c > 1 && "string" == typeof h && !ie.checkClone && ze.test(h)) return this.each(function(n) {
                    var i = d.eq(n);
                    f && (e[0] = h.call(this, n, i.html())), i.domManip(e, t)
                });
                if (c && (s = re.buildFragment(e, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
                    for (r = re.map(m(s, "script"), b), o = r.length; c > l; l++) i = s, l !== u && (i = re.clone(i, !0, !0), o && re.merge(r, m(i, "script"))), t.call(this[l], i, l);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument, re.map(r, w), l = 0; o > l; l++) i = r[l], Je.test(i.type || "") && !re._data(i, "globalEval") && re.contains(a, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Ve, "")));
                    s = n = null
                }
                return this
            }
        }), re.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            re.fn[e] = function(e) {
                for (var n, i = 0, o = [], r = re(e), a = r.length - 1; a >= i; i++) n = i === a ? this : this.clone(!0), re(r[i])[t](n), K.apply(o, n.get());
                return this.pushStack(o)
            }
        });
        var Ye, Ze = {};
        ! function() {
            var e, t, n = ge.createElement("div");
            n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = n.getElementsByTagName("a")[0], e.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(e.style.opacity), ie.cssFloat = !!e.style.cssFloat, n.style.backgroundClip = "content-box", n.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === n.style.backgroundClip, e = n = null, ie.shrinkWrapBlocks = function() {
                var e, n, i;
                if (null == t) {
                    if (!(e = ge.getElementsByTagName("body")[0])) return;
                    "border:0;width:0;height:0;position:absolute;top:0;left:-9999px", n = ge.createElement("div"), i = ge.createElement("div"), e.appendChild(n).appendChild(i), t = !1, typeof i.style.zoom !== $e && (i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0;width:1px;padding:1px;zoom:1", i.innerHTML = "<div></div>", i.firstChild.style.width = "5px", t = 3 !== i.offsetWidth), e.removeChild(n), e = n = i = null
                }
                return t
            }
        }();
        var et, tt, nt = /^margin/,
            it = new RegExp("^(" + Te + ")(?!px)[a-z%]+$", "i"),
            ot = /^(top|right|bottom|left)$/;
        e.getComputedStyle ? (et = function(e) {
            return e.ownerDocument.defaultView.getComputedStyle(e, null)
        }, tt = function(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || et(e), a = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || re.contains(e.ownerDocument, e) || (a = re.style(e, t)), it.test(a) && nt.test(t) && (i = s.width, o = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = o, s.maxWidth = r)), void 0 === a ? a : a + ""
        }) : ge.documentElement.currentStyle && (et = function(e) {
            return e.currentStyle
        }, tt = function(e, t, n) {
            var i, o, r, a, s = e.style;
            return n = n || et(e), a = n ? n[t] : void 0, null == a && s && s[t] && (a = s[t]), it.test(a) && !ot.test(t) && (i = s.left, o = e.runtimeStyle, r = o && o.left, r && (o.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, r && (o.left = r)), void 0 === a ? a : a + "" || "auto"
        }), ! function() {
            function t() {
                var t, n, i = ge.getElementsByTagName("body")[0];
                i && (t = ge.createElement("div"), n = ge.createElement("div"), t.style.cssText = c, i.appendChild(t).appendChild(n), n.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%", re.swap(i, null != i.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    o = 4 === n.offsetWidth
                }), r = !0, a = !1, s = !0, e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(n, null) || {}).top, r = "4px" === (e.getComputedStyle(n, null) || {
                    width: "4px"
                }).width), i.removeChild(t), n = i = null)
            }
            var n, i, o, r, a, s, l = ge.createElement("div"),
                c = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px";
            l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = l.getElementsByTagName("a")[0], n.style.cssText = "float:left;opacity:.5", ie.opacity = /^0.5/.test(n.style.opacity), ie.cssFloat = !!n.style.cssFloat, l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", ie.clearCloneStyle = "content-box" === l.style.backgroundClip, n = l = null, re.extend(ie, {
                reliableHiddenOffsets: function() {
                    if (null != i) return i;
                    var e, t, n, o = ge.createElement("div"),
                        r = ge.getElementsByTagName("body")[0];
                    return r ? (o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = ge.createElement("div"), e.style.cssText = c, r.appendChild(e).appendChild(o), o.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", t = o.getElementsByTagName("td"), t[0].style.cssText = "padding:0;margin:0;border:0;display:none", n = 0 === t[0].offsetHeight, t[0].style.display = "", t[1].style.display = "none", i = n && 0 === t[0].offsetHeight, r.removeChild(e), o = r = null, i) : void 0
                },
                boxSizing: function() {
                    return null == o && t(), o
                },
                boxSizingReliable: function() {
                    return null == r && t(), r
                },
                pixelPosition: function() {
                    return null == a && t(), a
                },
                reliableMarginRight: function() {
                    var t, n, i, o;
                    if (null == s && e.getComputedStyle) {
                        if (!(t = ge.getElementsByTagName("body")[0])) return;
                        n = ge.createElement("div"), i = ge.createElement("div"), n.style.cssText = c, t.appendChild(n).appendChild(i), o = i.appendChild(ge.createElement("div")), o.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0", o.style.marginRight = o.style.width = "0", i.style.width = "1px", s = !parseFloat((e.getComputedStyle(o, null) || {}).marginRight), t.removeChild(n)
                    }
                    return s
                }
            })
        }(), re.swap = function(e, t, n, i) {
            var o, r, a = {};
            for (r in t) a[r] = e.style[r], e.style[r] = t[r];
            o = n.apply(e, i || []);
            for (r in t) e.style[r] = a[r];
            return o
        };
        var rt = /alpha\([^)]*\)/i,
            at = /opacity\s*=\s*([^)]*)/,
            st = /^(none|table(?!-c[ea]).+)/,
            lt = new RegExp("^(" + Te + ")(.*)$", "i"),
            ct = new RegExp("^([+-])=(" + Te + ")", "i"),
            dt = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            ut = {
                letterSpacing: 0,
                fontWeight: 400
            },
            ht = ["Webkit", "O", "Moz", "ms"];
        re.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = tt(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
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
                float: ie.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var o, r, a, s = re.camelCase(t),
                        l = e.style;
                    if (t = re.cssProps[s] || (re.cssProps[s] = S(l, s)), a = re.cssHooks[t] || re.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (o = a.get(e, !1, i)) ? o : l[t];
                    if (r = typeof n, "string" === r && (o = ct.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(re.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || re.cssNumber[s] || (n += "px"), ie.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try {
                        l[t] = "", l[t] = n
                    } catch (e) {}
                }
            },
            css: function(e, t, n, i) {
                var o, r, a, s = re.camelCase(t);
                return t = re.cssProps[s] || (re.cssProps[s] = S(e.style, s)), a = re.cssHooks[t] || re.cssHooks[s], a && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = tt(e, t, i)), "normal" === r && t in ut && (r = ut[t]), "" === n || n ? (o = parseFloat(r), !0 === n || re.isNumeric(o) ? o || 0 : r) : r
            }
        }), re.each(["height", "width"], function(e, t) {
            re.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? 0 === e.offsetWidth && st.test(re.css(e, "display")) ? re.swap(e, dt, function() {
                        return D(e, t, i)
                    }) : D(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var o = i && et(e);
                    return E(e, n, i ? N(e, t, i, ie.boxSizing() && "border-box" === re.css(e, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ie.opacity || (re.cssHooks.opacity = {
            get: function(e, t) {
                return at.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
            },
            set: function(e, t) {
                var n = e.style,
                    i = e.currentStyle,
                    o = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                    r = i && i.filter || n.filter || "";
                n.zoom = 1, (t >= 1 || "" === t) && "" === re.trim(r.replace(rt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = rt.test(r) ? r.replace(rt, o) : r + " " + o)
            }
        }), re.cssHooks.marginRight = T(ie.reliableMarginRight, function(e, t) {
            return t ? re.swap(e, {
                display: "inline-block"
            }, tt, [e, "marginRight"]) : void 0
        }), re.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            re.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, o = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) o[e + Se[i] + t] = r[i] || r[i - 2] || r[0];
                    return o
                }
            }, nt.test(e) || (re.cssHooks[e + t].set = E)
        }), re.fn.extend({
            css: function(e, t) {
                return Ee(this, function(e, t, n) {
                    var i, o, r = {},
                        a = 0;
                    if (re.isArray(t)) {
                        for (i = et(e), o = t.length; o > a; a++) r[t[a]] = re.css(e, t[a], !1, i);
                        return r
                    }
                    return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return A(this, !0)
            },
            hide: function() {
                return A(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ae(this) ? re(this).show() : re(this).hide()
                })
            }
        }), re.Tween = I, I.prototype = {
            constructor: I,
            init: function(e, t, n, i, o, r) {
                this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = r || (re.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = I.propHooks[this.prop];
                return e && e.get ? e.get(this) : I.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = I.propHooks[this.prop];
                return this.pos = t = this.options.duration ? re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : I.propHooks._default.set(this), this
            }
        }, I.prototype.init.prototype = I.prototype, I.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        }, I.propHooks.scrollTop = I.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        }, re.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        }, re.fx = I.prototype.init, re.fx.step = {};
        var ft, pt, gt = /^(?:toggle|show|hide)$/,
            mt = new RegExp("^(?:([+-])=|)(" + Te + ")([a-z%]*)$", "i"),
            vt = /queueHooks$/,
            yt = [M],
            bt = {
                "*": [function(e, t) {
                    var n = this.createTween(e, t),
                        i = n.cur(),
                        o = mt.exec(t),
                        r = o && o[3] || (re.cssNumber[e] ? "" : "px"),
                        a = (re.cssNumber[e] || "px" !== r && +i) && mt.exec(re.css(n.elem, e)),
                        s = 1,
                        l = 20;
                    if (a && a[3] !== r) {
                        r = r || a[3], o = o || [], a = +i || 1;
                        do {
                            s = s || ".5", a /= s, re.style(n.elem, e, a + r)
                        } while (s !== (s = n.cur() / i) && 1 !== s && --l)
                    }
                    return o && (a = n.start = +a || +i || 0, n.unit = r, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n
                }]
            };
        re.Animation = re.extend(F, {
                tweener: function(e, t) {
                    re.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
                    for (var n, i = 0, o = e.length; o > i; i++) n = e[i], bt[n] = bt[n] || [], bt[n].unshift(t)
                },
                prefilter: function(e, t) {
                    t ? yt.unshift(e) : yt.push(e)
                }
            }), re.speed = function(e, t, n) {
                var i = e && "object" == typeof e ? re.extend({}, e) : {
                    complete: n || !n && t || re.isFunction(e) && e,
                    duration: e,
                    easing: n && t || t && !re.isFunction(t) && t
                };
                return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
                    re.isFunction(i.old) && i.old.call(this), i.queue && re.dequeue(this, i.queue)
                }, i
            }, re.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(Ae).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(e, t, n, i) {
                    var o = re.isEmptyObject(e),
                        r = re.speed(t, n, i),
                        a = function() {
                            var t = F(this, re.extend({}, e), r);
                            (o || re._data(this, "finish")) && t.stop(!0)
                        };
                    return a.finish = a, o || !1 === r.queue ? this.each(a) : this.queue(r.queue, a)
                },
                stop: function(e, t, n) {
                    var i = function(e) {
                        var t = e.stop;
                        delete e.stop, t(n)
                    };
                    return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
                        var t = !0,
                            o = null != e && e + "queueHooks",
                            r = re.timers,
                            a = re._data(this);
                        if (o) a[o] && a[o].stop && i(a[o]);
                        else
                            for (o in a) a[o] && a[o].stop && vt.test(o) && i(a[o]);
                        for (o = r.length; o--;) r[o].elem !== this || null != e && r[o].queue !== e || (r[o].anim.stop(n), t = !1, r.splice(o, 1));
                        (t || !n) && re.dequeue(this, e)
                    })
                },
                finish: function(e) {
                    return !1 !== e && (e = e || "fx"), this.each(function() {
                        var t, n = re._data(this),
                            i = n[e + "queue"],
                            o = n[e + "queueHooks"],
                            r = re.timers,
                            a = i ? i.length : 0;
                        for (n.finish = !0, re.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                        for (t = 0; a > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
                }
            }), re.each(["toggle", "show", "hide"], function(e, t) {
                var n = re.fn[t];
                re.fn[t] = function(e, i, o) {
                    return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(O(t, !0), e, i, o)
                }
            }), re.each({
                slideDown: O("show"),
                slideUp: O("hide"),
                slideToggle: O("toggle"),
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
                re.fn[e] = function(e, n, i) {
                    return this.animate(t, e, n, i)
                }
            }), re.timers = [], re.fx.tick = function() {
                var e, t = re.timers,
                    n = 0;
                for (ft = re.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
                t.length || re.fx.stop(), ft = void 0
            }, re.fx.timer = function(e) {
                re.timers.push(e), e() ? re.fx.start() : re.timers.pop()
            }, re.fx.interval = 13, re.fx.start = function() {
                pt || (pt = setInterval(re.fx.tick, re.fx.interval))
            }, re.fx.stop = function() {
                clearInterval(pt), pt = null
            }, re.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, re.fn.delay = function(e, t) {
                return e = re.fx ? re.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
            },
            function() {
                var e, t, n, i, o = ge.createElement("div");
                o.setAttribute("className", "t"), o.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = o.getElementsByTagName("a")[0], n = ge.createElement("select"), i = n.appendChild(ge.createElement("option")), t = o.getElementsByTagName("input")[0], e.style.cssText = "top:1px", ie.getSetAttribute = "t" !== o.className, ie.style = /top/.test(e.getAttribute("style")), ie.hrefNormalized = "/a" === e.getAttribute("href"), ie.checkOn = !!t.value, ie.optSelected = i.selected, ie.enctype = !!ge.createElement("form").enctype, n.disabled = !0, ie.optDisabled = !i.disabled, t = ge.createElement("input"), t.setAttribute("value", ""), ie.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ie.radioValue = "t" === t.value, e = t = n = i = o = null
            }();
        var wt = /\r/g;
        re.fn.extend({
            val: function(e) {
                var t, n, i, o = this[0];
                return arguments.length ? (i = re.isFunction(e), this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = i ? e.call(this, n, re(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : re.isArray(o) && (o = re.map(o, function(e) {
                        return null == e ? "" : e + ""
                    })), (t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o))
                })) : o ? (t = re.valHooks[o.type] || re.valHooks[o.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : (n = o.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)) : void 0
            }
        }), re.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = re.find.attr(e, "value");
                        return null != t ? t : re.text(e)
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, o = e.selectedIndex, r = "select-one" === e.type || 0 > o, a = r ? null : [], s = r ? o + 1 : i.length, l = 0 > o ? s : r ? o : 0; s > l; l++)
                            if (n = i[l], !(!n.selected && l !== o || (ie.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && re.nodeName(n.parentNode, "optgroup"))) {
                                if (t = re(n).val(), r) return t;
                                a.push(t)
                            }
                        return a
                    },
                    set: function(e, t) {
                        for (var n, i, o = e.options, r = re.makeArray(t), a = o.length; a--;)
                            if (i = o[a], re.inArray(re.valHooks.option.get(i), r) >= 0) try {
                                i.selected = n = !0
                            } catch (e) {
                                i.scrollHeight
                            } else i.selected = !1;
                        return n || (e.selectedIndex = -1), o
                    }
                }
            }
        }), re.each(["radio", "checkbox"], function() {
            re.valHooks[this] = {
                set: function(e, t) {
                    return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
                }
            }, ie.checkOn || (re.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            })
        });
        var _t, xt, $t = re.expr.attrHandle,
            Ct = /^(?:checked|selected)$/i,
            kt = ie.getSetAttribute,
            Tt = ie.input;
        re.fn.extend({
            attr: function(e, t) {
                return Ee(this, re.attr, e, t, arguments.length > 1)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    re.removeAttr(this, e)
                })
            }
        }), re.extend({
            attr: function(e, t, n) {
                var i, o, r = e.nodeType;
                if (e && 3 !== r && 8 !== r && 2 !== r) return typeof e.getAttribute === $e ? re.prop(e, t, n) : (1 === r && re.isXMLDoc(e) || (t = t.toLowerCase(), i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? xt : _t)), void 0 === n ? i && "get" in i && null !== (o = i.get(e, t)) ? o : (o = re.find.attr(e, t), null == o ? void 0 : o) : null !== n ? i && "set" in i && void 0 !== (o = i.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void re.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, o = 0,
                    r = t && t.match(be);
                if (r && 1 === e.nodeType)
                    for (; n = r[o++];) i = re.propFix[n] || n, re.expr.match.bool.test(n) ? Tt && kt || !Ct.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""), e.removeAttribute(kt ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ie.radioValue && "radio" === t && re.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t), n && (e.value = n), t
                        }
                    }
                }
            }
        }), xt = {
            set: function(e, t, n) {
                return !1 === t ? re.removeAttr(e, n) : Tt && kt || !Ct.test(n) ? e.setAttribute(!kt && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0, n
            }
        }, re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = $t[t] || re.find.attr;
            $t[t] = Tt && kt || !Ct.test(t) ? function(e, t, i) {
                var o, r;
                return i || (r = $t[t], $t[t] = o, o = null != n(e, t, i) ? t.toLowerCase() : null, $t[t] = r), o
            } : function(e, t, n) {
                return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }), Tt && kt || (re.attrHooks.value = {
            set: function(e, t, n) {
                return re.nodeName(e, "input") ? void(e.defaultValue = t) : _t && _t.set(e, t, n)
            }
        }), kt || (_t = {
            set: function(e, t, n) {
                var i = e.getAttributeNode(n);
                return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
            }
        }, $t.id = $t.name = $t.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }, re.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: _t.set
        }, re.attrHooks.contenteditable = {
            set: function(e, t, n) {
                _t.set(e, "" !== t && t, n)
            }
        }, re.each(["width", "height"], function(e, t) {
            re.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
                }
            }
        })), ie.style || (re.attrHooks.style = {
            get: function(e) {
                return e.style.cssText || void 0
            },
            set: function(e, t) {
                return e.style.cssText = t + ""
            }
        });
        var St = /^(?:input|select|textarea|button|object)$/i,
            At = /^(?:a|area)$/i;
        re.fn.extend({
            prop: function(e, t) {
                return Ee(this, re.prop, e, t, arguments.length > 1)
            },
            removeProp: function(e) {
                return e = re.propFix[e] || e, this.each(function() {
                    try {
                        this[e] = void 0, delete this[e]
                    } catch (e) {}
                })
            }
        }), re.extend({
            propFix: {
                for: "htmlFor",
                class: "className"
            },
            prop: function(e, t, n) {
                var i, o, r, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a) return r = 1 !== a || !re.isXMLDoc(e), r && (t = re.propFix[t] || t, o = re.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(e, n, t)) ? i : e[t] = n : o && "get" in o && null !== (i = o.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = re.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : St.test(e.nodeName) || At.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }), ie.hrefNormalized || re.each(["href", "src"], function(e, t) {
            re.propHooks[t] = {
                get: function(e) {
                    return e.getAttribute(t, 4)
                }
            }
        }), ie.optSelected || (re.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
            }
        }), re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            re.propFix[this.toLowerCase()] = this
        }), ie.enctype || (re.propFix.enctype = "encoding");
        var Et = /[\t\r\n\f]/g;
        re.fn.extend({
            addClass: function(e) {
                var t, n, i, o, r, a, s = 0,
                    l = this.length,
                    c = "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).addClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : " ")) {
                            for (r = 0; o = t[r++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                            a = re.trim(i), n.className !== a && (n.className = a)
                        }
                return this
            },
            removeClass: function(e) {
                var t, n, i, o, r, a, s = 0,
                    l = this.length,
                    c = 0 === arguments.length || "string" == typeof e && e;
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).removeClass(e.call(this, t, this.className))
                });
                if (c)
                    for (t = (e || "").match(be) || []; l > s; s++)
                        if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Et, " ") : "")) {
                            for (r = 0; o = t[r++];)
                                for (; i.indexOf(" " + o + " ") >= 0;) i = i.replace(" " + o + " ", " ");
                            a = e ? re.trim(i) : "", n.className !== a && (n.className = a)
                        }
                return this
            },
            toggleClass: function(e, t) {
                var n = typeof e;
                return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(re.isFunction(e) ? function(n) {
                    re(this).toggleClass(e.call(this, n, this.className, t), t)
                } : function() {
                    if ("string" === n)
                        for (var t, i = 0, o = re(this), r = e.match(be) || []; t = r[i++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                    else(n === $e || "boolean" === n) && (this.className && re._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : re._data(this, "__className__") || "")
                })
            },
            hasClass: function(e) {
                for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                    if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Et, " ").indexOf(t) >= 0) return !0;
                return !1
            }
        }), re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            re.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
            }
        }), re.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
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
            }
        });
        var Nt = re.now(),
            Dt = /\?/,
            It = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
        re.parseJSON = function(t) {
            if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
            var n, i = null,
                o = re.trim(t + "");
            return o && !re.trim(o.replace(It, function(e, t, o, r) {
                return n && t && (i = 0), 0 === i ? e : (n = o || t, i += !r - !o, "")
            })) ? Function("return " + o)() : re.error("Invalid JSON: " + t)
        }, re.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t) return null;
            try {
                e.DOMParser ? (i = new DOMParser, n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
            } catch (e) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t), n
        };
        var Lt, Ot, jt = /#.*$/,
            Mt = /([?&])_=[^&]*/,
            Ht = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Bt = /^(?:GET|HEAD)$/,
            Rt = /^\/\//,
            Pt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
            qt = {},
            Wt = {},
            Ut = "*/".concat("*");
        try {
            Ot = location.href
        } catch (e) {
            Ot = ge.createElement("a"), Ot.href = "", Ot = Ot.href
        }
        Lt = Pt.exec(Ot.toLowerCase()) || [], re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ot,
                type: "GET",
                isLocal: Ft.test(Lt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ut,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": re.parseJSON,
                    "text xml": re.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? P(P(e, re.ajaxSettings), t) : P(re.ajaxSettings, e)
            },
            ajaxPrefilter: B(qt),
            ajaxTransport: B(Wt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var o, d, v, y, w, x = t;
                    2 !== b && (b = 2, s && clearTimeout(s), c = void 0, a = i || "", _.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, n && (y = q(u, _, n)), y = W(u, y, _, o), o ? (u.ifModified && (w = _.getResponseHeader("Last-Modified"), w && (re.lastModified[r] = w), (w = _.getResponseHeader("etag")) && (re.etag[r] = w)), 204 === e || "HEAD" === u.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state, d = y.data, v = y.error, o = !v)) : (v = x, (e || !x) && (x = "error", 0 > e && (e = 0))), _.status = e, _.statusText = (t || x) + "", o ? p.resolveWith(h, [d, x, _]) : p.rejectWith(h, [_, x, v]), _.statusCode(m), m = void 0, l && f.trigger(o ? "ajaxSuccess" : "ajaxError", [_, u, o ? d : v]), g.fireWith(h, [_, x]), l && (f.trigger("ajaxComplete", [_, u]), --re.active || re.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e, e = void 0), t = t || {};
                var i, o, r, a, s, l, c, d, u = re.ajaxSetup({}, t),
                    h = u.context || u,
                    f = u.context && (h.nodeType || h.jquery) ? re(h) : re.event,
                    p = re.Deferred(),
                    g = re.Callbacks("once memory"),
                    m = u.statusCode || {},
                    v = {},
                    y = {},
                    b = 0,
                    w = "canceled",
                    _ = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (2 === b) {
                                if (!d)
                                    for (d = {}; t = Ht.exec(a);) d[t[1].toLowerCase()] = t[2];
                                t = d[e.toLowerCase()]
                            }
                            return null == t ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(e, t) {
                            var n = e.toLowerCase();
                            return b || (e = y[n] = y[n] || e, v[e] = t), this
                        },
                        overrideMimeType: function(e) {
                            return b || (u.mimeType = e), this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e)
                                if (2 > b)
                                    for (t in e) m[t] = [m[t], e[t]];
                                else _.always(e[_.status]);
                            return this
                        },
                        abort: function(e) {
                            var t = e || w;
                            return c && c.abort(t), n(0, t), this
                        }
                    };
                if (p.promise(_).complete = g.add, _.success = _.done, _.error = _.fail, u.url = ((e || u.url || Ot) + "").replace(jt, "").replace(Rt, Lt[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = re.trim(u.dataType || "*").toLowerCase().match(be) || [""], null == u.crossDomain && (i = Pt.exec(u.url.toLowerCase()), u.crossDomain = !(!i || i[1] === Lt[1] && i[2] === Lt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Lt[3] || ("http:" === Lt[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = re.param(u.data, u.traditional)), R(qt, u, t, _), 2 === b) return _;
                l = u.global, l && 0 == re.active++ && re.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !Bt.test(u.type), r = u.url, u.hasContent || (u.data && (r = u.url += (Dt.test(r) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = Mt.test(r) ? r.replace(Mt, "$1_=" + Nt++) : r + (Dt.test(r) ? "&" : "?") + "_=" + Nt++)), u.ifModified && (re.lastModified[r] && _.setRequestHeader("If-Modified-Since", re.lastModified[r]), re.etag[r] && _.setRequestHeader("If-None-Match", re.etag[r])), (u.data && u.hasContent && !1 !== u.contentType || t.contentType) && _.setRequestHeader("Content-Type", u.contentType), _.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Ut + "; q=0.01" : "") : u.accepts["*"]);
                for (o in u.headers) _.setRequestHeader(o, u.headers[o]);
                if (u.beforeSend && (!1 === u.beforeSend.call(h, _, u) || 2 === b)) return _.abort();
                w = "abort";
                for (o in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) _[o](u[o]);
                if (c = R(Wt, u, t, _)) {
                    _.readyState = 1, l && f.trigger("ajaxSend", [_, u]), u.async && u.timeout > 0 && (s = setTimeout(function() {
                        _.abort("timeout")
                    }, u.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (e) {
                        if (!(2 > b)) throw e;
                        n(-1, e)
                    }
                } else n(-1, "No Transport");
                return _
            },
            getJSON: function(e, t, n) {
                return re.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return re.get(e, void 0, t, "script")
            }
        }), re.each(["get", "post"], function(e, t) {
            re[t] = function(e, n, i, o) {
                return re.isFunction(n) && (o = o || i, i = n, n = void 0), re.ajax({
                    url: e,
                    type: t,
                    dataType: o,
                    data: n,
                    success: i
                })
            }
        }), re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            re.fn[t] = function(e) {
                return this.on(t, e)
            }
        }), re._evalUrl = function(e) {
            return re.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, re.fn.extend({
            wrapAll: function(e) {
                if (re.isFunction(e)) return this.each(function(t) {
                    re(this).wrapAll(e.call(this, t))
                });
                if (this[0]) {
                    var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                        for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                        return e
                    }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return this.each(re.isFunction(e) ? function(t) {
                    re(this).wrapInner(e.call(this, t))
                } : function() {
                    var t = re(this),
                        n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = re.isFunction(e);
                return this.each(function(n) {
                    re(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                }).end()
            }
        }), re.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ie.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
        }, re.expr.filters.visible = function(e) {
            return !re.expr.filters.hidden(e)
        };
        var zt = /%20/g,
            Jt = /\[\]$/,
            Gt = /\r?\n/g,
            Vt = /^(?:submit|button|image|reset|file)$/i,
            Xt = /^(?:input|select|textarea|keygen)/i;
        re.param = function(e, t) {
            var n, i = [],
                o = function(e, t) {
                    t = re.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
                };
            if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional), re.isArray(e) || e.jquery && !re.isPlainObject(e)) re.each(e, function() {
                o(this.name, this.value)
            });
            else
                for (n in e) U(n, e[n], t, o);
            return i.join("&").replace(zt, "+")
        }, re.fn.extend({
            serialize: function() {
                return re.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = re.prop(this, "elements");
                    return e ? re.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !re(this).is(":disabled") && Xt.test(this.nodeName) && !Vt.test(e) && (this.checked || !Ne.test(e))
                }).map(function(e, t) {
                    var n = re(this).val();
                    return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Gt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Gt, "\r\n")
                    }
                }).get()
            }
        }), re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && z() || J()
        } : z;
        var Qt = 0,
            Kt = {},
            Yt = re.ajaxSettings.xhr();
        e.ActiveXObject && re(e).on("unload", function() {
            for (var e in Kt) Kt[e](void 0, !0)
        }), ie.cors = !!Yt && "withCredentials" in Yt, (Yt = ie.ajax = !!Yt) && re.ajaxTransport(function(e) {
            if (!e.crossDomain || ie.cors) {
                var t;
                return {
                    send: function(n, i) {
                        var o, r = e.xhr(),
                            a = ++Qt;
                        if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                            for (o in e.xhrFields) r[o] = e.xhrFields[o];
                        e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                        for (o in n) void 0 !== n[o] && r.setRequestHeader(o, n[o] + "");
                        r.send(e.hasContent && e.data || null), t = function(n, o) {
                            var s, l, c;
                            if (t && (o || 4 === r.readyState))
                                if (delete Kt[a], t = void 0, r.onreadystatechange = re.noop, o) 4 !== r.readyState && r.abort();
                                else {
                                    c = {}, s = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                                    try {
                                        l = r.statusText
                                    } catch (e) {
                                        l = ""
                                    }
                                    s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                                }
                            c && i(s, l, c, r.getAllResponseHeaders())
                        }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Kt[a] = t : t()
                    },
                    abort: function() {
                        t && t(void 0, !0)
                    }
                }
            }
        }), re.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return re.globalEval(e), e
                }
            }
        }), re.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
        }), re.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = ge.head || re("head")[0] || ge.documentElement;
                return {
                    send: function(i, o) {
                        t = ge.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function(e, n) {
                            (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || o(200, "success"))
                        }, n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
        var Zt = [],
            en = /(=)\?(?=&|$)|\?\?/;
        re.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Zt.pop() || re.expando + "_" + Nt++;
                return this[e] = !0, e
            }
        }), re.ajaxPrefilter("json jsonp", function(t, n, i) {
            var o, r, a, s = !1 !== t.jsonp && (en.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(t.data) && "data");
            return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(en, "$1" + o) : !1 !== t.jsonp && (t.url += (Dt.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function() {
                return a || re.error(o + " was not called"), a[0]
            }, t.dataTypes[0] = "json", r = e[o], e[o] = function() {
                a = arguments
            }, i.always(function() {
                e[o] = r, t[o] && (t.jsonpCallback = n.jsonpCallback, Zt.push(o)), a && re.isFunction(r) && r(a[0]), a = r = void 0
            }), "script") : void 0
        }), re.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || ge;
            var i = he.exec(e),
                o = !n && [];
            return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, o), o && o.length && re(o).remove(), re.merge([], i.childNodes))
        };
        var tn = re.fn.load;
        re.fn.load = function(e, t, n) {
            if ("string" != typeof e && tn) return tn.apply(this, arguments);
            var i, o, r, a = this,
                s = e.indexOf(" ");
            return s >= 0 && (i = e.slice(s, e.length), e = e.slice(0, s)), re.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && re.ajax({
                url: e,
                type: r,
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments, a.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
            }).complete(n && function(e, t) {
                a.each(n, o || [e.responseText, t, e])
            }), this
        }, re.expr.filters.animated = function(e) {
            return re.grep(re.timers, function(t) {
                return e === t.elem
            }).length
        };
        var nn = e.document.documentElement;
        re.offset = {
            setOffset: function(e, t, n) {
                var i, o, r, a, s, l, c, d = re.css(e, "position"),
                    u = re(e),
                    h = {};
                "static" === d && (e.style.position = "relative"), s = u.offset(), r = re.css(e, "top"), l = re.css(e, "left"), c = ("absolute" === d || "fixed" === d) && re.inArray("auto", [r, l]) > -1, c ? (i = u.position(), a = i.top, o = i.left) : (a = parseFloat(r) || 0, o = parseFloat(l) || 0), re.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (h.top = t.top - s.top + a), null != t.left && (h.left = t.left - s.left + o), "using" in t ? t.using.call(e, h) : u.css(h)
            }
        }, re.fn.extend({
            offset: function(e) {
                if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                    re.offset.setOffset(this, e, t)
                });
                var t, n, i = {
                        top: 0,
                        left: 0
                    },
                    o = this[0],
                    r = o && o.ownerDocument;
                return r ? (t = r.documentElement, re.contains(t, o) ? (typeof o.getBoundingClientRect !== $e && (i = o.getBoundingClientRect()), n = G(r), {
                    top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : i) : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                            top: 0,
                            left: 0
                        },
                        i = this[0];
                    return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), re.nodeName(e[0], "html") || (n = e.offset()), n.top += re.css(e[0], "borderTopWidth", !0), n.left += re.css(e[0], "borderLeftWidth", !0)), {
                        top: t.top - n.top - re.css(i, "marginTop", !0),
                        left: t.left - n.left - re.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || nn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position");) e = e.offsetParent;
                    return e || nn
                })
            }
        }), re.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            re.fn[e] = function(i) {
                return Ee(this, function(e, i, o) {
                    var r = G(e);
                    return void 0 === o ? r ? t in r ? r[t] : r.document.documentElement[i] : e[i] : void(r ? r.scrollTo(n ? re(r).scrollLeft() : o, n ? o : re(r).scrollTop()) : e[i] = o)
                }, e, i, arguments.length, null)
            }
        }), re.each(["top", "left"], function(e, t) {
            re.cssHooks[t] = T(ie.pixelPosition, function(e, n) {
                return n ? (n = tt(e, t), it.test(n) ? re(e).position()[t] + "px" : n) : void 0
            })
        }), re.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            re.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                re.fn[i] = function(i, o) {
                    var r = arguments.length && (n || "boolean" != typeof i),
                        a = n || (!0 === i || !0 === o ? "margin" : "border");
                    return Ee(this, function(t, n, i) {
                        var o;
                        return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? re.css(t, n, a) : re.style(t, n, i, a)
                    }, t, r ? i : void 0, r, null)
                }
            })
        }), re.fn.size = function() {
            return this.length
        }, re.fn.andSelf = re.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return re
        });
        var on = e.jQuery,
            rn = e.$;
        return re.noConflict = function(t) {
            return e.$ === re && (e.$ = rn), t && e.jQuery === re && (e.jQuery = on), re
        }, typeof t === $e && (e.jQuery = e.$ = re), re
    }), $(document).ready(function() {
        function e() {
            var e = 0;
            if (!is_userMobile || is_userMobile && glob_responsiveOverride) {
                if ("sponsored" !== glob_pageType) {
                    if (I.length > 0) var i = I.offset().top + I.outerHeight();
                    else var i = $("#dmr2_container").offset().top + $("#dmr2_container").outerHeight() + 250;
                    L.length > 0 ? e = L.offset().top : $("#slidebox_trigger").length > 0 ? e = $("#slidebox_trigger").offset().top : $("#social_bottom").length > 0 && (e = $("#social_bottom").offset().top);
                    var o = Math.floor((e - i) / (y + b))
                } else {
                    var r = $("#dlb2_container");
                    r.wrap("<div class='css_c4zij_holder'></div>"), r.addClass("css_c4zij-semi-sticky");
                    var a = $("#dmr1_container");
                    a.wrap("<div class='sticky_container'></div>").parent().css({
                        height: $(".infobox_large").offset().top - a.parent().offset().top - b,
                        "margin-bottom": b
                    }), a.addClass("required_sticky")
                }
                if (o > 0) {
                    if (O.length > 0) var s = Math.round(O.length / 2);
                    else var s = 0;
                    var l = $("." + k).length || 0,
                        c = o + s;
                    C || t(l, c, o)
                } else "undefined" != typeof showAdsOnArticle && showAdsOnArticle && n()
            } else "undefined" != typeof showAdsOnArticle && showAdsOnArticle && n()
        }

        function t(e, t, i) {
            $.ajax({
                url: "/structure/javascript/ajax/ad-actions.php",
                type: "POST",
                dataType: "json",
                data: {
                    action: "getcss_hs211ads",
                    currentMrecCounts: e,
                    totalMrecNeeded: t,
                    livepreview: A
                },
                beforeSend: function(e) {
                    C = !0
                },
                success: function(t) {
                    t.status && t.adCollect && (t.adCollect.forEach(function(t) {
                        if (!1 !== t.adhtml) {
                            var n = $.parseHTML(t.adhtml);
                            $(".sidebar").append($(n)), t.adNum <= e + i ? (0 == $(".required_sticky").length ? I.length > 0 ? $("#" + t.adContainer).wrap("<div class='sticky_container'></div>").parent().css({
                                height: y,
                                "margin-bottom": b,
                                "margin-top": "58px"
                            }) : $("#" + t.adContainer).wrap("<div class='sticky_container'></div>").parent().css({
                                height: y,
                                "margin-bottom": b,
                                "margin-top": "308px"
                            }) : $("#" + t.adContainer).wrap("<div class='sticky_container'></div>").parent().css({
                                height: y,
                                "margin-bottom": b
                            }), $("#" + t.adContainer).addClass("required_sticky")) : $("#" + t.adContainer).addClass("suggest_reading_sidebar"), "undefined" != typeof googleAdSlotInfo && googleAdSlotInfo.push({
                                slotName: t.adUnit,
                                slotContainer: t.adContainer
                            })
                        }
                    }), "undefined" != typeof showAdsOnArticle && showAdsOnArticle && (w = !0, n()))
                }
            })
        }

        function n() {
            if (!is_userMobile || is_userMobile && glob_responsiveOverride) {
                var e = document.body,
                    t = document.documentElement,
                    n = Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);
                if (n) {
                    var s = $(window),
                        c = .4 * n;
                    if ("undefined" != typeof googleAdSlotInfo && googleAdSlotInfo.length > 0) {
                        var d = [],
                            u = [];
                        googleAdSlotInfo.forEach(function(e, t, n) {
                            if (0 == $("#" + e.slotContainer).length) return void googleAdSlotInfo.splice(t, 1);
                            if ($("#" + e.slotContainer).hasClass(k)) var i = "css_hs211";
                            else if ($("#" + e.slotContainer).hasClass(T)) var i = "css_c4zij";
                            else if ("div-gpt-ad-out-of-page" == e.slotContainer) var i = "out-of-page";
                            if ("sponsored" == glob_pageType && is_userTablet) var o = "under30";
                            else if ($("#" + e.slotContainer).offset().top <= c) var o = "under30";
                            else var o = "upper30";
                            var r = !0;
                            void 0 === window[e.slotName] && (r = !1);
                            var a = document.getElementById(e.slotContainer),
                                h = 0 === a.offsetHeight && 0 === a.offsetWidth;
                            "under30" != o || h ? s.scrollTop() >= $("#" + e.slotContainer).offset().top && !h ? r || (l(e.slotName, i, o), d.push(window[e.slotName])) : "css_c4zij" == i && $("#" + e.slotContainer).offset().top - s.scrollTop() <= m && !h ? r || (l(e.slotName, i, o), d.push(window[e.slotName])) : "css_hs211" == i && $("#" + e.slotContainer).offset().top - s.scrollTop() <= v && !h ? r || d.push(window[e.slotName]) : u.push(e) : r || (l(e.slotName, i, o), d.push(window[e.slotName]))
                        }), AdBridg.cmd.push(function() {
                            AdBridg.serve()
                        })
                    }
                }
                if (L.length > 0) var h = L.offset().top;
                else var h = 0;
                $(window).scroll(function() {
                    if (void 0 !== u && u.length > 0) {
                        var e = s.scrollTop(),
                            t = e + s.height();
                        u.forEach(function(e, n, i) {
                            if (e.slotName.indexOf("DLB") >= 0) var o = m;
                            else var o = v;
                            var r = document.getElementById(e.slotContainer),
                                a = 0 === r.offsetHeight && 0 === r.offsetWidth;
                            if ($("#" + e.slotContainer).offset().top - t <= o && !a && (i.splice(n, 1), void 0 === window[e.slotName])) {
                                if ($("#" + e.slotContainer).hasClass(k)) var s = "css_hs211";
                                else if ($("#" + e.slotContainer).hasClass(T)) var s = "css_c4zij";
                                else if ("div-gpt-ad-out-of-page" == e.slotContainer) var s = "out-of-page";
                                if ("sponsored" == glob_pageType && is_userTablet) var d = "under30";
                                else if ($("#" + e.slotContainer).offset().top <= c) var d = "under30";
                                else var d = "upper30";
                                l(e.slotName, s, d)
                            }
                        })
                    }
                    h > 0 && h !== L.offset().top && (r(), h = L.offset().top), i(), "article" != glob_pageType && "info" != glob_pageType && "sponsored" != glob_pageType || (a(), "sponsored" == glob_pageType && o())
                }), r()
            } else {
                var e = document.body,
                    t = document.documentElement,
                    n = Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight);
                if (n) {
                    var s = $(window),
                        f = .4 * n;
                    if ("undefined" != typeof googleAdSlotInfo && googleAdSlotInfo.length > 0) {
                        var d = [],
                            p = [];
                        googleAdSlotInfo.forEach(function(e, t) {
                            if (0 == $("#" + e.slotContainer).length) return void googleAdSlotInfo.splice(t, 1);
                            if ($("#" + e.slotContainer).hasClass(k)) var n = "css_hs211";
                            else if ($("#" + e.slotContainer).hasClass(T)) var n = "css_c4zij";
                            else if ("div-gpt-ad-out-of-page" == e.slotContainer) var n = "out-of-page";
                            if ("sponsored" == glob_pageType) var i = "under30";
                            else if ($("#" + e.slotContainer).offset().top <= f || "MLB1" == e.slotName) var i = "under30";
                            else var i = "upper30";
                            var o = !0;
                            void 0 === window[e.slotName] && (l(e.slotName, n, i), o = !1), void 0 === window[e.slotName] || o || (d.push(window[e.slotName]), p.push(e))
                        })
                    }
                }
            }
        }

        function i() {
            var e = $(window).scrollTop() + $("#navigation_scroll").outerHeight();
            $(".required_sticky").each(function() {
                var t = $(this).parent().offset().top + $(this).parent().outerHeight() - 20;
                e >= $(this).parent().offset().top - 20 && e <= t ? e >= $(this).parent().offset().top - 20 && e < t - $(this).outerHeight() ? $(this).removeClass("sticky_bottom").addClass("sticky_scroll") : e >= t - $(this).outerHeight() && e <= t ? $(this).removeClass("sticky_scroll").addClass("sticky_bottom") : $(this).removeClass("sticky_scroll sticky_bottom") : e < $(this).parent().offset().top ? $(this).removeClass("sticky_scroll sticky_bottom") : e > t && !$(this).hasClass("sticky_bottom") && $(this).removeClass("sticky_scroll").addClass("sticky_bottom")
            })
        }

        function o() {
            var e = $(".css_c4zij-semi-sticky"),
                t = $(window).scrollTop() + $("#navigation_scroll").outerHeight();
            e.each(function() {
                var e = $(this);
                t < e.parent().offset().top ? (e.hasClass("sticky_scroll") && e.removeClass("sticky_scroll"), e.attr("hasBeenTriggered", "false")) : t >= Math.floor(e.parent().offset().top) && (e.hasClass("sticky_scroll") || "false" !== e.attr("hasBeenTriggered") || (0 == $(".css_c4zij-semi-sticky.sticky_scroll").length ? (e.addClass("sticky_scroll"), e.width(e.parent().width()), setTimeout(function() {
                    e.addClass("sticky_easing"), setTimeout(function() {
                        e.removeClass("sticky_easing sticky_scroll")
                    }, 600), e.attr("hasBeenTriggered", "true")
                }, 2e3)) : e.attr("hasBeenTriggered", "true")))
            })
        }

        function r() {
            if (L.hasClass("place")) {
                var e = $(".article_meta:first").outerHeight() || 0;
                $(".suggest_reading_sidebar").each(function(t) {
                    var n = O.eq(2 * t).offset().top - $(".article_body").offset().top + e;
                    n > 0 && $(this).css({
                        position: "absolute",
                        top: n
                    })
                })
            }
        }

        function a() {
            var e = $(window).scrollTop(),
                t = $("body").hasClass("v3") && is_userTablet && $(window).width() < $(window).height() && e >= B && e + $("." + S).height() <= $(".photobox_header").offset().top,
                n = !1;
            try {
                n = $("body").hasClass("v2") && is_userTablet && $(window).width() < $(window).height() && e >= B && e + $("." + S).height() <= $(".article_meta").offset().top
            } catch (e) {}
            var i = !1;
            "sponsored" == glob_pageType && (i = is_userTablet && e >= B && !$("#dmr1_container").is(":visible")), "sponsored" == glob_pageType && W && e < U && (W = !1), e >= U && !q && "sponsored" == glob_pageType && P && (q = !0, setTimeout(function() {
                P && (is_userTablet && $(window).width() < $(window).height() && e <= B || ($("." + S).css({
                    top: "-300px"
                }), $("#dlb1_container").css({
                    top: "-300px"
                })), setTimeout(function() {
                    s(), W = !0
                }, 600))
            }, 3e3)), e >= B && e + $("." + S).height() <= $("#dmr1_container").offset().top - 10 || t || n || i ? ("sponsored" !== glob_pageType || "sponsored" == glob_pageType && !W) && (P = !0, $("." + S).hasClass("sticky_scroll") || ($("." + S).addClass("sticky_scroll"), $("#dlb1_container").addClass("sticky_scroll"), $("." + S).next().css({
                "margin-top": $("." + S).outerHeight()
            }))) : e + $("." + S).height() >= $("#dmr1_container").offset().top - 10 && $("." + S).hasClass("sticky_scroll") ? (is_userTablet && $(window).width() < $(window).height() && e <= B || ($("." + S).css({
                top: "-300px"
            }), $("#dlb1_container").css({
                top: "-300px"
            })), setTimeout(function() {
                s()
            }, 600)) : s()
        }

        function s() {
            P = !1, q = !1, $("." + S).removeClass("sticky_scroll"), $("#dlb1_container").removeClass("sticky_scroll"), $("." + S).next().css({
                "margin-top": ""
            }), $("." + S).css({
                top: ""
            }), $("#dlb1_container").css({
                top: ""
            })
        }

        function l(e, t, n) {
            if (e) {
                if ("MLB1" == e) var i = [320, 50];
                else if ("css_c4zij" == t) var i = [728, 90];
                else if ("out-of-page" == t);
                else var i = [300, 250];
                AdBridg.cmd.push(function() {
                    if ("out-of-page" == t) var o = "div-gpt-ad-out-of-page";
                    else var o = e.toLowerCase() + "_unit";
                    if ("out-of-page" == t) window[e] = AdBridg.defineOutOfPageSlot(M + e, o);
                    else {
                        var r = c(e);
                        window[e] = AdBridg.defineSlot(M + e, i, o).defineSizeMapping(r), AdBridg.useSizeMapping(window[e], r)
                    }
                    "under30" == n ? window[e].setTargeting("under30", "true") : "upper30" == n && window[e].setTargeting("under30", "false"), AdBridg.serve(), window[e].setTargeting("pos", e), "out-of-page" == t ? AdBridg.display(o) : AdBridg.display(e.toLowerCase() + "_unit"), "out-of-page" !== t && setTimeout(function() {
                        try {
                            BT.clearThrough()
                        } catch (e) {
                            console.log(e)
                        }
                    }, 100)
                })
            }
        }

        function c(e) {
            if ("DLB1" == e) var t = AdBridg.sizeMapping().addSize([1e3, 10], [
                [728, 90],
                [970, 90]
            ]).addSize([0, 0], [728, 90]).build();
            else if ("DLB2" == e || "DLB3" == e || "DLB4" == e || "MNT_DLB_Foot" == e)
                if ("DLB2" == e && "sponsored" == glob_pageType) var t = AdBridg.sizeMapping().addSize([1148, 10], [728, 90]).addSize([0, 0], []).build();
                else var t = AdBridg.sizeMapping().addSize([1148, 10], [728, 90]).addSize([989, 0], []).addSize([0, 0], [728, 90]).build();
            else if ("DMR1" == e) var t = AdBridg.sizeMapping().addSize([989, 10], [
                [300, 250],
                [300, 600]
            ]).addSize([0, 0], []).build();
            else if ("MLB1" == e) var t = AdBridg.sizeMapping().addSize([360, 100], [320, 50]).addSize([0, 0], [320, 50]).build();
            else if (is_userMobile && !glob_responsiveOverride && "MLB1" !== e || "sponsored" == glob_pageType && ("MMR1" == e || "MMR2" == e || "MMR3" == e)) var t = AdBridg.sizeMapping().addSize([989, 10], []).addSize([360, 100], [
                [320, 250],
                [300, 250]
            ]).addSize([0, 0], [300, 250]).build();
            else var t = AdBridg.sizeMapping().addSize([989, 10], [300, 250]).addSize([0, 0], []).build();
            return t
        }

        function d() {
            u(), $(window).scroll(function() {
                z && "portrait" == viewportOrientation && ($(window).scrollTop() - J > viewportHeight - $("#mlb1_container").height() || J - $(window).scrollTop() > viewportHeight - $("#mlb1_container").height()) && (z = !1, _ < 4 && !x ? (f(), u()) : h())
            })
        }

        function u() {
            R = setInterval(function() {
                "portrait" == viewportOrientation && ($(window).scrollTop() - J > viewportHeight - $("#mlb1_container").height() || J - $(window).scrollTop() > viewportHeight - $("#mlb1_container").height()) ? (f(), z = !1) : (z = !0, h()), _ >= 4 && h()
            }, 3e4)
        }

        function h() {
            clearInterval(R)
        }

        function f() {
            void 0 !== window.MLB1 && (_++, p([window.MLB1]), J = $(window).scrollTop())
        }

        function p(e) {
            var t = [];
            e.forEach(function(e) {
                var n = document.getElementById(e.getSlotElementId());
                0 === n.offsetHeight && 0 === n.offsetWidth || t.push(e)
            }), t.length > 0 && AdBridg.cmd.push(function() {
                AdBridg.refresh(t)
            })
        }

        function g() {
            $(".sticky_ad_container_close").click(function(e) {
                e.preventDefault(), void 0 !== window.MLB1 && AdBridg.destroySlots([window.MLB1]), $(".sticky_ad_container").remove(), x = !0
            })
        }
        var m = 500,
            v = 500,
            y = 550,
            b = 250,
            w = !1,
            _ = 0,
            x = !1,
            C = !1,
            k = "css_hs211",
            T = "css_c4zij",
            S = "css_h1ksn",
            A = window.location.href.indexOf("/livepreview/") > -1,
            E = window.location.href.indexOf("/about") > -1,
            N = window.location.href.indexOf("/product-selection-process") > -1,
            D = window.location.href.indexOf("/process") > -1;
        if (glob_siteRevision < 7721 || "account" == glob_pageType || "opinions" == glob_pageType || E || N || D) return !1;
        var I = $(".popular_tabs_container"),
            L = $("#suggest_reading_outer_container"),
            O = $(".suggested_reading_inner");
        if ("undefined" != typeof googleDegfaultAdVars) {
            if (googleDegfaultAdVars.k1) var j = googleDegfaultAdVars.k1;
            else var j = "none";
            j = j.replace(new RegExp("'", "g"), "");
            var M = "/4788/mnt/" + j + "/"
        } else var M = "/4788/";
        0 == document.getElementsByClassName(k).length && (k = "css_hs211"), 0 == document.getElementsByClassName(T).length && (T = "css_c4zij"), 0 == document.getElementsByClassName(S).length && (S = "css_h1ksn"), fireOrSaveGoogleAdFunctions(function() {
            AdBridg.cmd.push(function() {
                (window.AdBridg || A || isAdblockOn()) && ("undefined" != typeof showAdsOnArticle && showAdsOnArticle ? e() : n(), is_userMobile && !glob_responsiveOverride && (g(), d()))
            })
        });
        var H = window.innerWidth,
            F = window.innerWidth;
        (!is_userMobile || is_userMobile && glob_responsiveOverride) && $(window).resize(function() {
            fireOrSaveGoogleAdFunctions(function() {
                var e = window.innerWidth;
                if (e >= 989 && H < 989 || e <= 989 && H > 989) {
                    if ($(".required_sticky").removeClass("sticky_scroll sticky_bottom"), w || "sponsored" === glob_pageType) {
                        if ("sponsored" == glob_pageType) {
                            var n = $("." + k),
                                i = [];
                            n.each(function() {
                                var e = $(this).attr("id").replace("_container", "").toUpperCase();
                                void 0 !== window[e] && i.push(window[e])
                            })
                        } else
                            for (var o = $("." + k).length, i = [], a = 1; a <= o; a++) {
                                var s = "DMR" + a;
                                void 0 !== window[s] && i.push(window[s])
                            }
                        p(i)
                    } else {
                        if (I.length > 0) var l = I.offset().top + I.outerHeight();
                        else if ($("#dmr2_container").length > 0) var l = $("#dmr2_container").offset().top + $("#dmr2_container").outerHeight() + 250;
                        if (L.length > 0) var c = L.offset().top;
                        else if ($("#slidebox_trigger").length > 0) var c = $("#slidebox_trigger").offset().top;
                        var d = Math.floor((c - l) / (y + b));
                        if (d > 0) {
                            if (O.length > 0) var u = Math.round(O.length / 2);
                            else var u = 0;
                            var h = $("." + k).length || 0,
                                f = d + u;
                            C || t(h, f, d), $(window).scroll(), r()
                        }
                    }
                    H = e
                }
                if (F < 989 && e >= 989 || F > 1148 && e <= 1148 || F > 989 && e <= 989 && F < 1148 && e < 1148 || F < 1148 && e >= 1148) {
                    for (var g = $(".article_body ." + T).length || $(".css_c4zij_holder ." + T).length, m = [], a = 2; a <= g + 1; a++) {
                        var s = "DLB" + a;
                        void 0 !== window[s] && m.push(window[s])
                    }
                    p(m)
                }
                F = e
            })
        }), $(window).load(function() {
            fireOrSaveGoogleAdFunctions(function() {
                if (isAdblockOn()) {
                    var e = [];
                    AdBridg.cmd.push(function() {
                        googleAdSlotInfo.forEach(function(t) {
                            void 0 !== window[t.slotName] && e.push(window[t.slotName])
                        }), AdBridg.refresh(e)
                    })
                }
                r()
            })
        });
        var B = $("." + S).offset().top;
        is_userMobile && !glob_responsiveOverride || E || N || $("." + S).is(":visible") || "account" === glob_pageType || "category" === glob_pageType || "search" === glob_pageType || ($("." + S).attr("style", "display: block !important"), B = $("." + S).offset().top);
        var R, P = !1,
            q = !1,
            W = !1,
            U = 150,
            z = !1,
            J = $(window).scrollTop()
    }), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(e) {
    "use strict";
    var t = e.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || 1 == t[0] && 9 == t[1] && t[2] < 1 || t[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var n = e(this),
                o = n.data("bs.alert");
            o || n.data("bs.alert", o = new i(this)), "string" == typeof t && o[t].call(n)
        })
    }
    var n = '[data-dismiss="alert"]',
        i = function(t) {
            e(t).on("click", n, this.close)
        };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 150, i.prototype.close = function(t) {
        function n() {
            a.detach().trigger("closed.bs.alert").remove()
        }
        var o = e(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var a = e("#" === r ? [] : r);
        t && t.preventDefault(), a.length || (a = o.closest(".alert")), a.trigger(t = e.Event("close.bs.alert")), t.isDefaultPrevented() || (a.removeClass("in"), e.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n())
    };
    var o = e.fn.alert;
    e.fn.alert = t, e.fn.alert.Constructor = i, e.fn.alert.noConflict = function() {
        return e.fn.alert = o, this
    }, e(document).on("click.bs.alert.data-api", n, i.prototype.close)
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.button"),
                r = "object" == typeof t && t;
            o || i.data("bs.button", o = new n(this, r)), "toggle" == t ? o.toggle() : t && o.setState(t)
        })
    }
    var n = function(t, i) {
        this.$element = e(t), this.options = e.extend({}, n.DEFAULTS, i), this.isLoading = !1
    };
    n.VERSION = "3.3.7", n.DEFAULTS = {
        loadingText: "loading..."
    }, n.prototype.setState = function(t) {
        var n = "disabled",
            i = this.$element,
            o = i.is("input") ? "val" : "html",
            r = i.data();
        t += "Text", null == r.resetText && i.data("resetText", i[o]()), setTimeout(e.proxy(function() {
            i[o](null == r[t] ? this.options[t] : r[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n).prop(n, !1))
        }, this), 0)
    }, n.prototype.toggle = function() {
        var e = !0,
            t = this.$element.closest('[data-toggle="buttons"]');
        if (t.length) {
            var n = this.$element.find("input");
            "radio" == n.prop("type") ? (n.prop("checked") && (e = !1), t.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (e = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), e && n.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var i = e.fn.button;
    e.fn.button = t, e.fn.button.Constructor = n, e.fn.button.noConflict = function() {
        return e.fn.button = i, this
    }, e(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(n) {
        var i = e(n.target).closest(".btn");
        t.call(i, "toggle"), e(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), i.is("input,button") ? i.trigger("focus") : i.find("input:visible,button:visible").first().trigger("focus"))
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        e(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.carousel"),
                r = e.extend({}, n.DEFAULTS, i.data(), "object" == typeof t && t),
                a = "string" == typeof t ? t : r.slide;
            o || i.data("bs.carousel", o = new n(this, r)), "number" == typeof t ? o.to(t) : a ? o[a]() : r.interval && o.pause().cycle()
        })
    }
    var n = function(t, n) {
        this.$element = e(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", e.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", e.proxy(this.pause, this)).on("mouseleave.bs.carousel", e.proxy(this.cycle, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, n.prototype.keydown = function(e) {
        if (!/input|textarea/i.test(e.target.tagName)) {
            switch (e.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            e.preventDefault()
        }
    }, n.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)), this
    }, n.prototype.getItemIndex = function(e) {
        return this.$items = e.parent().children(".item"), this.$items.index(e || this.$active)
    }, n.prototype.getItemForDirection = function(e, t) {
        var n = this.getItemIndex(t);
        if (("prev" == e && 0 === n || "next" == e && n == this.$items.length - 1) && !this.options.wrap) return t;
        var i = "prev" == e ? -1 : 1,
            o = (n + i) % this.$items.length;
        return this.$items.eq(o)
    }, n.prototype.to = function(e) {
        var t = this,
            n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            t.to(e)
        }) : n == e ? this.pause().cycle() : this.slide(e > n ? "next" : "prev", this.$items.eq(e))
    }, n.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && e.support.transition && (this.$element.trigger(e.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, n.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    }, n.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    }, n.prototype.slide = function(t, i) {
        var o = this.$element.find(".item.active"),
            r = i || this.getItemForDirection(t, o),
            a = this.interval,
            s = "next" == t ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var c = r[0],
            d = e.Event("slide.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
        if (this.$element.trigger(d), !d.isDefaultPrevented()) {
            if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = e(this.$indicators.children()[this.getItemIndex(r)]);
                u && u.addClass("active")
            }
            var h = e.Event("slid.bs.carousel", {
                relatedTarget: c,
                direction: s
            });
            return e.support.transition && this.$element.hasClass("slide") ? (r.addClass(t), r[0].offsetWidth, o.addClass(s), r.addClass(s), o.one("bsTransitionEnd", function() {
                r.removeClass([t, s].join(" ")).addClass("active"), o.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(h)
                }, 0)
            }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(h)), a && this.cycle(), this
        }
    };
    var i = e.fn.carousel;
    e.fn.carousel = t, e.fn.carousel.Constructor = n, e.fn.carousel.noConflict = function() {
        return e.fn.carousel = i, this
    };
    var o = function(n) {
        var i, o = e(this),
            r = e(o.attr("data-target") || (i = o.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var a = e.extend({}, r.data(), o.data()),
                s = o.attr("data-slide-to");
            s && (a.interval = !1), t.call(r, a), s && r.data("bs.carousel").to(s), n.preventDefault()
        }
    };
    e(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), e(window).on("load", function() {
        e('[data-ride="carousel"]').each(function() {
            var n = e(this);
            t.call(n, n.data())
        })
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        var n = t.attr("data-target");
        n || (n = t.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
        var i = n && e(n);
        return i && i.length ? i : t.parent()
    }

    function n(n) {
        n && 3 === n.which || (e(o).remove(), e(r).each(function() {
            var i = e(this),
                o = t(i),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && e.contains(o[0], n.target) || (o.trigger(n = e.Event("hide.bs.dropdown", r)), n.isDefaultPrevented() || (i.attr("aria-expanded", "false"), o.removeClass("open").trigger(e.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function i(t) {
        return this.each(function() {
            var n = e(this),
                i = n.data("bs.dropdown");
            i || n.data("bs.dropdown", i = new a(this)), "string" == typeof t && i[t].call(n)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        a = function(t) {
            e(t).on("click.bs.dropdown", this.toggle)
        };
    a.VERSION = "3.3.7", a.prototype.toggle = function(i) {
        var o = e(this);
        if (!o.is(".disabled, :disabled")) {
            var r = t(o),
                a = r.hasClass("open");
            if (n(), !a) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click", n);
                var s = {
                    relatedTarget: this
                };
                if (r.trigger(i = e.Event("show.bs.dropdown", s)), i.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(e.Event("shown.bs.dropdown", s))
            }
            return !1
        }
    }, a.prototype.keydown = function(n) {
        if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
            var i = e(this);
            if (n.preventDefault(), n.stopPropagation(), !i.is(".disabled, :disabled")) {
                var o = t(i),
                    a = o.hasClass("open");
                if (!a && 27 != n.which || a && 27 == n.which) return 27 == n.which && o.find(r).trigger("focus"), i.trigger("click");
                var s = o.find(".dropdown-menu li:not(.disabled):visible a");
                if (s.length) {
                    var l = s.index(n.target);
                    38 == n.which && l > 0 && l--, 40 == n.which && l < s.length - 1 && l++, ~l || (l = 0), s.eq(l).trigger("focus")
                }
            }
        }
    };
    var s = e.fn.dropdown;
    e.fn.dropdown = i, e.fn.dropdown.Constructor = a, e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = s, this
    }, e(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, a.prototype.toggle).on("keydown.bs.dropdown.data-api", r, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
}(jQuery),
function(e) {
    "use strict";

    function t(t, i) {
        return this.each(function() {
            var o = e(this),
                r = o.data("bs.modal"),
                a = e.extend({}, n.DEFAULTS, o.data(), "object" == typeof t && t);
            r || o.data("bs.modal", r = new n(this, a)), "string" == typeof t ? r[t](i) : a.show && r.show(i)
        })
    }
    var n = function(t, n) {
        this.options = n, this.$body = e(document.body), this.$element = e(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, e.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, n.prototype.toggle = function(e) {
        return this.isShown ? this.hide() : this.show(e)
    }, n.prototype.show = function(t) {
        var i = this,
            o = e.Event("show.bs.modal", {
                relatedTarget: t
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', e.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            i.$element.one("mouseup.dismiss.bs.modal", function(t) {
                e(t.target).is(i.$element) && (i.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = e.support.transition && i.$element.hasClass("fade");
            i.$element.parent().length || i.$element.appendTo(i.$body), i.$element.show().scrollTop(0), i.adjustDialog(), o && i.$element[0].offsetWidth, i.$element.addClass("in"), i.enforceFocus();
            var r = e.Event("shown.bs.modal", {
                relatedTarget: t
            });
            o ? i.$dialog.one("bsTransitionEnd", function() {
                i.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(n.TRANSITION_DURATION) : i.$element.trigger("focus").trigger(r)
        }))
    }, n.prototype.hide = function(t) {
        t && t.preventDefault(), t = e.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), e(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), e.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", e.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
    }, n.prototype.enforceFocus = function() {
        e(document).off("focusin.bs.modal").on("focusin.bs.modal", e.proxy(function(e) {
            document === e.target || this.$element[0] === e.target || this.$element.has(e.target).length || this.$element.trigger("focus")
        }, this))
    }, n.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", e.proxy(function(e) {
            27 == e.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, n.prototype.resize = function() {
        this.isShown ? e(window).on("resize.bs.modal", e.proxy(this.handleUpdate, this)) : e(window).off("resize.bs.modal")
    }, n.prototype.hideModal = function() {
        var e = this;
        this.$element.hide(), this.backdrop(function() {
            e.$body.removeClass("modal-open"), e.resetAdjustments(), e.resetScrollbar(), e.$element.trigger("hidden.bs.modal")
        })
    }, n.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, n.prototype.backdrop = function(t) {
        var i = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = e.support.transition && o;
            if (this.$backdrop = e(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", e.proxy(function(e) {
                    if (this.ignoreBackdropClick) return void(this.ignoreBackdropClick = !1);
                    e.target === e.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
            r ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : t()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function() {
                i.removeBackdrop(), t && t()
            };
            e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
        } else t && t()
    }, n.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, n.prototype.adjustDialog = function() {
        var e = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && e ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !e ? this.scrollbarWidth : ""
        })
    }, n.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, n.prototype.checkScrollbar = function() {
        var e = window.innerWidth;
        if (!e) {
            var t = document.documentElement.getBoundingClientRect();
            e = t.right - Math.abs(t.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < e, this.scrollbarWidth = this.measureScrollbar()
    }, n.prototype.setScrollbar = function() {
        var e = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", e + this.scrollbarWidth)
    }, n.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, n.prototype.measureScrollbar = function() {
        var e = document.createElement("div");
        e.className = "modal-scrollbar-measure", this.$body.append(e);
        var t = e.offsetWidth - e.clientWidth;
        return this.$body[0].removeChild(e), t
    };
    var i = e.fn.modal;
    e.fn.modal = t, e.fn.modal.Constructor = n, e.fn.modal.noConflict = function() {
        return e.fn.modal = i, this
    }, e(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(n) {
        var i = e(this),
            o = i.attr("href"),
            r = e(i.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            a = r.data("bs.modal") ? "toggle" : e.extend({
                remote: !/#/.test(o) && o
            }, r.data(), i.data());
        i.is("a") && n.preventDefault(), r.one("show.bs.modal", function(e) {
            e.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                i.is(":visible") && i.trigger("focus")
            })
        }), t.call(r, a, this)
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tooltip"),
                r = "object" == typeof t && t;
            !o && /destroy|hide/.test(t) || (o || i.data("bs.tooltip", o = new n(this, r)), "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", e, t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, n.prototype.init = function(t, n, i) {
        if (this.enabled = !0, this.type = t, this.$element = e(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && e(e.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var a = o[r];
            if ("click" == a) this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this));
            else if ("manual" != a) {
                var s = "hover" == a ? "mouseenter" : "focusin",
                    l = "hover" == a ? "mouseleave" : "focusout";
                this.$element.on(s + "." + this.type, this.options.selector, e.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, e.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = e.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.getOptions = function(t) {
        return t = e.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && "number" == typeof t.delay && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    }, n.prototype.getDelegateOptions = function() {
        var t = {},
            n = this.getDefaults();
        return this._options && e.each(this._options, function(e, i) {
            n[e] != i && (t[e] = i)
        }), t
    }, n.prototype.enter = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        return n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusin" == t.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function() {
            "in" == n.hoverState && n.show()
        }, n.options.delay.show)) : n.show())
    }, n.prototype.isInStateTrue = function() {
        for (var e in this.inState)
            if (this.inState[e]) return !0;
        return !1
    }, n.prototype.leave = function(t) {
        var n = t instanceof this.constructor ? t : e(t.currentTarget).data("bs." + this.type);
        if (n || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n)), t instanceof e.Event && (n.inState["focusout" == t.type ? "focus" : "hover"] = !1), !n.isInStateTrue()) {
            if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
            n.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }
    }, n.prototype.show = function() {
        var t = e.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(t);
            var i = e.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (t.isDefaultPrevented() || !i) return;
            var o = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent(), r.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && r.addClass("fade");
            var s = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                c = l.test(s);
            c && (s = s.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(s).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var d = this.getPosition(),
                u = r[0].offsetWidth,
                h = r[0].offsetHeight;
            if (c) {
                var f = s,
                    p = this.getPosition(this.$viewport);
                s = "bottom" == s && d.bottom + h > p.bottom ? "top" : "top" == s && d.top - h < p.top ? "bottom" : "right" == s && d.right + u > p.width ? "left" : "left" == s && d.left - u < p.left ? "right" : s, r.removeClass(f).addClass(s)
            }
            var g = this.getCalculatedOffset(s, d, u, h);
            this.applyPlacement(g, s);
            var m = function() {
                var e = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == e && o.leave(o)
            };
            e.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(n.TRANSITION_DURATION) : m()
        }
    }, n.prototype.applyPlacement = function(t, n) {
        var i = this.tip(),
            o = i[0].offsetWidth,
            r = i[0].offsetHeight,
            a = parseInt(i.css("margin-top"), 10),
            s = parseInt(i.css("margin-left"), 10);
        isNaN(a) && (a = 0), isNaN(s) && (s = 0), t.top += a, t.left += s, e.offset.setOffset(i[0], e.extend({
            using: function(e) {
                i.css({
                    top: Math.round(e.top),
                    left: Math.round(e.left)
                })
            }
        }, t), 0), i.addClass("in");
        var l = i[0].offsetWidth,
            c = i[0].offsetHeight;
        "top" == n && c != r && (t.top = t.top + r - c);
        var d = this.getViewportAdjustedDelta(n, t, l, c);
        d.left ? t.left += d.left : t.top += d.top;
        var u = /top|bottom/.test(n),
            h = u ? 2 * d.left - o + l : 2 * d.top - r + c,
            f = u ? "offsetWidth" : "offsetHeight";
        i.offset(t), this.replaceArrow(h, i[0][f], u)
    }, n.prototype.replaceArrow = function(e, t, n) {
        this.arrow().css(n ? "left" : "top", 50 * (1 - e / t) + "%").css(n ? "top" : "left", "")
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle();
        e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t), e.removeClass("fade in top bottom left right")
    }, n.prototype.hide = function(t) {
        function i() {
            "in" != o.hoverState && r.detach(), o.$element && o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), t && t()
        }
        var o = this,
            r = e(this.$tip),
            a = e.Event("hide.bs." + this.type);
        if (this.$element.trigger(a), !a.isDefaultPrevented()) return r.removeClass("in"), e.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i(), this.hoverState = null, this
    }, n.prototype.fixTitle = function() {
        var e = this.$element;
        (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
    }, n.prototype.hasContent = function() {
        return this.getTitle()
    }, n.prototype.getPosition = function(t) {
        t = t || this.$element;
        var n = t[0],
            i = "BODY" == n.tagName,
            o = n.getBoundingClientRect();
        null == o.width && (o = e.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = window.SVGElement && n instanceof window.SVGElement,
            a = i ? {
                top: 0,
                left: 0
            } : r ? null : t.offset(),
            s = {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            l = i ? {
                width: e(window).width(),
                height: e(window).height()
            } : null;
        return e.extend({}, o, s, l, a)
    }, n.prototype.getCalculatedOffset = function(e, t, n, i) {
        return "bottom" == e ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - n / 2
        } : "top" == e ? {
            top: t.top - i,
            left: t.left + t.width / 2 - n / 2
        } : "left" == e ? {
            top: t.top + t.height / 2 - i / 2,
            left: t.left - n
        } : {
            top: t.top + t.height / 2 - i / 2,
            left: t.left + t.width
        }
    }, n.prototype.getViewportAdjustedDelta = function(e, t, n, i) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            a = this.getPosition(this.$viewport);
        if (/right|left/.test(e)) {
            var s = t.top - r - a.scroll,
                l = t.top + r - a.scroll + i;
            s < a.top ? o.top = a.top - s : l > a.top + a.height && (o.top = a.top + a.height - l)
        } else {
            var c = t.left - r,
                d = t.left + r + n;
            c < a.left ? o.left = a.left - c : d > a.right && (o.left = a.left + a.width - d)
        }
        return o
    }, n.prototype.getTitle = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-original-title") || ("function" == typeof t.title ? t.title.call(e[0]) : t.title)
    }, n.prototype.getUID = function(e) {
        do {
            e += ~~(1e6 * Math.random())
        } while (document.getElementById(e));
        return e
    }, n.prototype.tip = function() {
        if (!this.$tip && (this.$tip = e(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, n.prototype.enable = function() {
        this.enabled = !0
    }, n.prototype.disable = function() {
        this.enabled = !1
    }, n.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, n.prototype.toggle = function(t) {
        var n = this;
        t && ((n = e(t.currentTarget).data("bs." + this.type)) || (n = new this.constructor(t.currentTarget, this.getDelegateOptions()), e(t.currentTarget).data("bs." + this.type, n))), t ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
    }, n.prototype.destroy = function() {
        var e = this;
        clearTimeout(this.timeout), this.hide(function() {
            e.$element.off("." + e.type).removeData("bs." + e.type), e.$tip && e.$tip.detach(), e.$tip = null, e.$arrow = null, e.$viewport = null, e.$element = null
        })
    };
    var i = e.fn.tooltip;
    e.fn.tooltip = t, e.fn.tooltip.Constructor = n, e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = i, this
    }
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.popover"),
                r = "object" == typeof t && t;
            !o && /destroy|hide/.test(t) || (o || i.data("bs.popover", o = new n(this, r)), "string" == typeof t && o[t]())
        })
    }
    var n = function(e, t) {
        this.init("popover", e, t)
    };
    if (!e.fn.tooltip) throw new Error("Popover requires tooltip.js");
    n.VERSION = "3.3.7", n.DEFAULTS = e.extend({}, e.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), n.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function() {
        return n.DEFAULTS
    }, n.prototype.setContent = function() {
        var e = this.tip(),
            t = this.getTitle(),
            n = this.getContent();
        e.find(".popover-title")[this.options.html ? "html" : "text"](t), e.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), e.removeClass("fade top bottom left right in"), e.find(".popover-title").html() || e.find(".popover-title").hide()
    }, n.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, n.prototype.getContent = function() {
        var e = this.$element,
            t = this.options;
        return e.attr("data-content") || ("function" == typeof t.content ? t.content.call(e[0]) : t.content)
    }, n.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var i = e.fn.popover;
    e.fn.popover = t, e.fn.popover.Constructor = n, e.fn.popover.noConflict = function() {
        return e.fn.popover = i, this
    }
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.tab");
            o || i.data("bs.tab", o = new n(this)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t) {
        this.element = e(t)
    };
    n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function() {
        var t = this.element,
            n = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target");
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var o = n.find(".active:last a"),
                r = e.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                a = e.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), t.trigger(a), !a.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var s = e(i);
                this.activate(t.closest("li"), n), this.activate(s, s.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: t[0]
                    }), t.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, n.prototype.activate = function(t, i, o) {
        function r() {
            a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var a = i.find("> .active"),
            s = o && e.support.transition && (a.length && a.hasClass("fade") || !!i.find("> .fade").length);
        a.length && s ? a.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), a.removeClass("in")
    };
    var i = e.fn.tab;
    e.fn.tab = t, e.fn.tab.Constructor = n, e.fn.tab.noConflict = function() {
        return e.fn.tab = i, this
    };
    var o = function(n) {
        n.preventDefault(), t.call(e(this), "show")
    };
    e(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o)
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.affix"),
                r = "object" == typeof t && t;
            o || i.data("bs.affix", o = new n(this, r)), "string" == typeof t && o[t]()
        })
    }
    var n = function(t, i) {
        this.options = e.extend({}, n.DEFAULTS, i), this.$target = e(this.options.target).on("scroll.bs.affix.data-api", e.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", e.proxy(this.checkPositionWithEventLoop, this)), this.$element = e(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
        offset: 0,
        target: window
    }, n.prototype.getState = function(e, t, n, i) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            a = this.$target.height();
        if (null != n && "top" == this.affixed) return o < n && "top";
        if ("bottom" == this.affixed) return null != n ? !(o + this.unpin <= r.top) && "bottom" : !(o + a <= e - i) && "bottom";
        var s = null == this.affixed,
            l = s ? o : r.top,
            c = s ? a : t;
        return null != n && o <= n ? "top" : null != i && l + c >= e - i && "bottom"
    }, n.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(n.RESET).addClass("affix");
        var e = this.$target.scrollTop(),
            t = this.$element.offset();
        return this.pinnedOffset = t.top - e
    }, n.prototype.checkPositionWithEventLoop = function() {
        setTimeout(e.proxy(this.checkPosition, this), 1)
    }, n.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t = this.$element.height(),
                i = this.options.offset,
                o = i.top,
                r = i.bottom,
                a = Math.max(e(document).height(), e(document.body).height());
            "object" != typeof i && (r = o = i), "function" == typeof o && (o = i.top(this.$element)), "function" == typeof r && (r = i.bottom(this.$element));
            var s = this.getState(a, t, o, r);
            if (this.affixed != s) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (s ? "-" + s : ""),
                    c = e.Event(l + ".bs.affix");
                if (this.$element.trigger(c), c.isDefaultPrevented()) return;
                this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == s && this.$element.offset({
                top: a - t - r
            })
        }
    };
    var i = e.fn.affix;
    e.fn.affix = t, e.fn.affix.Constructor = n, e.fn.affix.noConflict = function() {
        return e.fn.affix = i, this
    }, e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var n = e(this),
                i = n.data();
            i.offset = i.offset || {}, null != i.offsetBottom && (i.offset.bottom = i.offsetBottom), null != i.offsetTop && (i.offset.top = i.offsetTop), t.call(n, i)
        })
    })
}(jQuery),
function(e) {
    "use strict";

    function t(t) {
        var n, i = t.attr("data-target") || (n = t.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
        return e(i)
    }

    function n(t) {
        return this.each(function() {
            var n = e(this),
                o = n.data("bs.collapse"),
                r = e.extend({}, i.DEFAULTS, n.data(), "object" == typeof t && t);
            !o && r.toggle && /show|hide/.test(t) && (r.toggle = !1), o || n.data("bs.collapse", o = new i(this, r)), "string" == typeof t && o[t]()
        })
    }
    var i = function(t, n) {
        this.$element = e(t), this.options = e.extend({}, i.DEFAULTS, n), this.$trigger = e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    i.VERSION = "3.3.7", i.TRANSITION_DURATION = 350, i.DEFAULTS = {
        toggle: !0
    }, i.prototype.dimension = function() {
        return this.$element.hasClass("width") ? "width" : "height"
    }, i.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var t, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (t = o.data("bs.collapse")) && t.transitioning)) {
                var r = e.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (n.call(o, "hide"), t || o.data("bs.collapse", null));
                    var a = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var s = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!e.support.transition) return s.call(this);
                    var l = e.camelCase(["scroll", a].join("-"));
                    this.$element.one("bsTransitionEnd", e.proxy(s, this)).emulateTransitionEnd(i.TRANSITION_DURATION)[a](this.$element[0][l])
                }
            }
        }
    }, i.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var t = e.Event("hide.bs.collapse");
            if (this.$element.trigger(t), !t.isDefaultPrevented()) {
                var n = this.dimension();
                this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                if (!e.support.transition) return o.call(this);
                this.$element[n](0).one("bsTransitionEnd", e.proxy(o, this)).emulateTransitionEnd(i.TRANSITION_DURATION)
            }
        }
    }, i.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, i.prototype.getParent = function() {
        return e(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(e.proxy(function(n, i) {
            var o = e(i);
            this.addAriaAndCollapsedClass(t(o), o)
        }, this)).end()
    }, i.prototype.addAriaAndCollapsedClass = function(e, t) {
        var n = e.hasClass("in");
        e.attr("aria-expanded", n), t.toggleClass("collapsed", !n).attr("aria-expanded", n)
    };
    var o = e.fn.collapse;
    e.fn.collapse = n, e.fn.collapse.Constructor = i, e.fn.collapse.noConflict = function() {
        return e.fn.collapse = o, this
    }, e(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(i) {
        var o = e(this);
        o.attr("data-target") || i.preventDefault();
        var r = t(o),
            a = r.data("bs.collapse"),
            s = a ? "toggle" : o.data();
        n.call(r, s)
    })
}(jQuery),
function(e) {
    "use strict";

    function t(n, i) {
        this.$body = e(document.body), this.$scrollElement = e(e(n).is(document.body) ? window : n), this.options = e.extend({}, t.DEFAULTS, i), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", e.proxy(this.process, this)), this.refresh(), this.process()
    }

    function n(n) {
        return this.each(function() {
            var i = e(this),
                o = i.data("bs.scrollspy"),
                r = "object" == typeof n && n;
            o || i.data("bs.scrollspy", o = new t(this, r)), "string" == typeof n && o[n]()
        })
    }
    t.VERSION = "3.3.7", t.DEFAULTS = {
        offset: 10
    }, t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, t.prototype.refresh = function() {
        var t = this,
            n = "offset",
            i = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), e.isWindow(this.$scrollElement[0]) || (n = "position", i = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var t = e(this),
                o = t.data("target") || t.attr("href"),
                r = /^#./.test(o) && e(o);
            return r && r.length && r.is(":visible") && [
                [r[n]().top + i, o]
            ] || null
        }).sort(function(e, t) {
            return e[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]), t.targets.push(this[1])
        })
    }, t.prototype.process = function() {
        var e, t = this.$scrollElement.scrollTop() + this.options.offset,
            n = this.getScrollHeight(),
            i = this.options.offset + n - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            a = this.activeTarget;
        if (this.scrollHeight != n && this.refresh(), t >= i) return a != (e = r[r.length - 1]) && this.activate(e);
        if (a && t < o[0]) return this.activeTarget = null, this.clear();
        for (e = o.length; e--;) a != r[e] && t >= o[e] && (void 0 === o[e + 1] || t < o[e + 1]) && this.activate(r[e])
    }, t.prototype.activate = function(t) {
        this.activeTarget = t, this.clear();
        var n = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = e(n).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
    }, t.prototype.clear = function() {
        e(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var i = e.fn.scrollspy;
    e.fn.scrollspy = n, e.fn.scrollspy.Constructor = t, e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = i, this
    }, e(window).on("load.bs.scrollspy.data-api", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            n.call(t, t.data())
        })
    })
}(jQuery),
function(e) {
    "use strict";

    function t() {
        var e = document.createElement("bootstrap"),
            t = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var n in t)
            if (void 0 !== e.style[n]) return {
                end: t[n]
            };
        return !1
    }
    e.fn.emulateTransitionEnd = function(t) {
        var n = !1,
            i = this;
        e(this).one("bsTransitionEnd", function() {
            n = !0
        });
        var o = function() {
            n || e(i).trigger(e.support.transition.end)
        };
        return setTimeout(o, t), this
    }, e(function() {
        e.support.transition = t(), e.support.transition && (e.event.special.bsTransitionEnd = {
            bindType: e.support.transition.end,
            delegateType: e.support.transition.end,
            handle: function(t) {
                if (e(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery), "undefined" == typeof glob_mntcookie && (glob_mntcookie = 1, glob_TrueOnGDPR = !1, glob_JS = "undefined" == typeof glob_JS ? {
        GAInit: [],
        GA: [],
        ExternalJS: [],
        AD: []
    } : glob_JS), $(document).ready(function() {
        1 != glob_mntcookie && glob_TrueOnGDPR ? "/privacy-policy" !== window.location.pathname && "/advertising" !== window.location.pathname && ($("#gdprModal").modal("show"), $.ajax({
            type: "GET",
            url: "/account/GDPRModalCounter.php",
            data: {
                type: "show",
                deviceInfo: glob_deviceInfo,
                currentPath: window.location.pathname
            },
            cache: !1,
            done: function(e) {
                console.log("add show counter success!")
            },
            fail: function(e) {
                console.log("add show counter failed!")
            }
        })) : (fireJS("ExternalJS"), fireJS("GA"), fireOrSaveGoogleADs(null, !0))
    }), $("#gdprModal").on("shown.bs.modal", function() {
        $(this).find(".modal-content").removeAttr("style");
        var e = document.querySelectorAll("#gdprModal .modal-body"),
            t = document.querySelectorAll("#gdprModal .modal-footer"),
            n = document.querySelector("#gdprModal .modal-content"),
            i = e[0].offsetHeight + t[0].offsetHeight,
            o = n.offsetHeight,
            r = document.querySelectorAll("#gdprModal .scroll_more");
        i <= o && r[0].classList.add("hidden")
    }),
    function(e) {
        e.organicTabs = function(t, n) {
            var i = this;
            i.$el = e(t), i.$nav = i.$el.find(".nav"), i.init = function() {
                i.options = e.extend({}, e.organicTabs.defaultOptions, n), e(".hide").css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    display: "none"
                }), i.$nav.delegate("li > a", "click", function() {
                    var t = i.$el.find("a.current").attr("href").substring(1),
                        n = e(this),
                        o = n.attr("href").substring(1),
                        r = i.$el.find(".list-wrap"),
                        a = r.height();
                    return r.height(a), o != t && 0 == i.$el.find(":animated").length && i.$el.find("#" + t).fadeOut(i.options.speed, function() {
                        i.$el.find("#" + t).addClass("hide"), i.$el.find("#" + o).fadeIn(i.options.speed), i.$el.find("#" + o).removeClass("hide");
                        var a = i.$el.find("#" + o).height();
                        r.animate({
                            height: a + 22
                        }), i.$el.find(".nav li a").removeClass("current"), n.addClass("current"), "citations" === n.text().toLowerCase() ? e("#article_tabs .list-wrap, #info_tabs .list-wrap").css({
                            "max-height": a + 22
                        }) : e("#article_tabs .list-wrap, #info_tabs .list-wrap").css({
                            "max-height": "300px"
                        })
                    }), !1
                })
            }, i.init()
        }, e.organicTabs.defaultOptions = {
            speed: 300
        }, e.fn.organicTabs = function(t) {
            return this.each(function() {
                new e.organicTabs(this, t)
            })
        }
    }(jQuery), $(function() {
        $("#popular_tabs").organicTabs({
            speed: 100
        })
    }), $(document).ready(function() {
        function e(e) {
            e.find("#search_area").hasClass("show") && (e.find("#searchwrapper").removeClass("hidden"), is_userTablet || setTimeout(function() {
                e.find(".show #header_search").focus()
            }, 100))
        }
        $("#navigation #search_toggle").click(function(t) {
            t.stopPropagation(), $(this).toggleClass("active");
            var n = "";
            if (n = $(this).closest("#navigation").length ? $("#navigation") : $("#navigation_scroll"), n.find("#search_area").hasClass("show") && n.find("#searchwrapper").addClass("hidden"), is_userTablet && (n.find("#search_area").css({
                    transition: "initial"
                }), n.find("#searchwrapper").css({
                    transition: "initial"
                })), is_userMobile && (n.find("#search_area").hasClass("show") ? n.find("#search_area").css({
                    visibility: "hidden"
                }) : n.find("#search_area").css({
                    visibility: "visible"
                })), n.find("#search_area").toggleClass("show"), e(n), is_userMobile && !glob_responsiveOverride)
                if (n.find("#search_area").hasClass("show")) {
                    if (document.documentElement.clientHeight > document.documentElement.clientWidth) var i = screen.height;
                    else var i = document.documentElement.clientHeight;
                    var o = $("#navigation").outerHeight();
                    n.find("#search_area").css({
                        "max-height": i - o,
                        height: "100%",
                        "overflow-y": "scroll"
                    }), $("html").hasClass("noscroll") || $("html").addClass("noscroll"), $("#navigation .menu_topics").hasClass("active") && $(".menu_topics").removeClass("active"), $("#navigation .menu_login").hasClass("active") && $(".menu_login").removeClass("active"), fireOrSaveJsFunctions(0, function() {
                        ga("send", "event", {
                            eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Main menu - Search",
                            eventAction: "Search click - Main nav",
                            eventLabel: "Search open - Main nav"
                        })
                    })
                } else n.find("#search_area").css({
                    height: ""
                }), $("html").hasClass("noscroll") && $("html").removeClass("noscroll")
        }), $(document).click(function() {
            $("#navigation #search_area").hasClass("show") && ($("#navigation #search_area").removeClass("show"), $("#navigation #searchwrapper").addClass("hidden"), $("#navigation #search_area").css({
                visibility: "hidden",
                height: ""
            }), $("#navigation #search_toggle").css({
                "background-position": "0 -550px"
            }), $("#navigation #search_toggle").removeClass("active")), $("#navigation_scroll #search_area").hasClass("show") && ($("#navigation_scroll #search_area").removeClass("show"), $("#navigation_scroll #search_area").css({
                visibility: "hidden",
                height: ""
            }), $("#navigation_scroll #searchwrapper").addClass("hidden"), $("#navigation_scroll #search_toggle").css({
                "background-position": "0 -550px"
            }), $("#navigation_scroll #search_toggle").removeClass("active"))
        }), $("#navigation #search_area").click(function(e) {
            e.stopPropagation()
        })
    }), $(document).ready(function() {
        $('.article_body a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var e = $(this.hash);
                if (e = e.length ? e : $("[name=" + this.hash.slice(1) + "]"), e.length) return $("html, body").animate({
                    scrollTop: e.offset().top
                }, 1e3), !1
            }
        }), $('.article_toc a[href*="#"]:not([href="#"])').click(function(e) {
            var t = $('.article_toc a[href*="#"]:not([href="#"])').index(this) + 1;
            t > 0 && fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: "tabs - " + glob_pageType,
                    eventAction: "TAB - " + t,
                    eventLabel: articleID
                })
            })
        })
    }), $(function() {
        var e, t = !1,
            n = $("#message a"),
            i = $(window),
            o = .6 * $("body").height();
        i.scroll(function() {
            window.clearTimeout(e), e = window.setTimeout(function() {
                i.scrollTop() <= o ? (t = !1, n.fadeOut(500)) : 0 == t && (t = !0, n.show(), n.fadeIn(), n.stop(!0, !0).show().click(function() {
                    return n.fadeOut(500), $("html, body").animate({
                        scrollTop: 0
                    }, 600), !1
                }))
            }, 500)
        }), $(".top_button").click(function(e) {
            return $("html, body").animate({
                scrollTop: 0
            }, 600), $("#navigation_social").length > 0 && $("#navigation_social").hasClass("visible") && $("#navigation_social").removeClass("visible"), !1
        })
    });
var gaSkinLabel = "";
"undefined" != typeof glob_newSkin && (gaSkinLabel = "1" == glob_newSkin ? "New" : "Old"), $(document).ready(function() {
    ($(".cookies_eu").length > 0 || $(".header_message").length > 0 || $(".header_error").length > 0 || $(".header_message_IE6").length > 0) && $("#mnt_header_ad").length > 0 && ($(".cookies_eu,.header_message,.header_error,.header_message_IE6").show(), $("#mnt_header_ad").addClass("header_msg"), is_userMobile && $("." + glob_headerBarClassName).hide());
    var e = $("html").attr("class");
    $("body").on("click", "#mask", function(t) {
        $(".article_print").length > 0 && (e.indexOf("ie") > 0 && (ie_version = e.substring(e.lastIndexOf("ie"), e.lastIndexOf("ie") + 3), "" == !ie_version && $("html").addClass(ie_version)), $(".article_print").remove(), $("#print-pre").remove(), $(".article").find("*").removeClass("non_print")), is_userMobile || is_userTablet || ($(".login-popup").fadeOut(300), $(".article_print").fadeOut(300)), $(".smcx-widget").length > 0 && $(".smcx-modal-close").click()
    }), $("#navigation,#navigation_scroll").bind("click", function(e) {
        $(e.target).hasClass("menu_topics") || $(e.target).parents(".menu_topics").length > 0 || $(e.target).hasClass("menu_mask") || ($("#navigation .menu_topics").hasClass("active") && $("#navigation .menu_topics > a").click(), $("#navigation_scroll .menu_topics").hasClass("active") && $("#navigation_scroll .menu_topics > a").click())
    }), $(document).keyup(function(e) {
        27 == e.keyCode && $(".menu_topics").hasClass("active") && ($("#navigation .menu_topics").hasClass("active") ? $("#navigation .menu_topics > a").click() : $("#navigation_scroll .menu_topics").hasClass("active") && $("#navigation_scroll .menu_topics > a").click())
    }), $(".show_all_categories").click(function(e) {
        e.preventDefault(), $(this).hide(), $(this).next().slideDown()
    })
}), $(".cookies_eu #header_close_button").click(function(e) {
    GDPRAccept()
}), $(".topic_popular_list li > a").click(function() {
    var e = $(this).text();
    if (e) {
        if ($(this).parents("#navigation").length > 0) var t = "Main menu";
        else var t = "Sticky menu";
        fireOrSaveJsFunctions(0, function() {
            ga("send", "event", {
                eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + t + " - Topics",
                eventAction: "Menu click - Single topic",
                eventLabel: "Menu click - " + e
            })
        })
    }
}), $(".topic_all_list li > a").click(function() {
    var e = $(this).text();
    if (e) {
        if ($(this).parents("#navigation").length > 0) var t = "Main menu";
        else var t = "Sticky menu";
        fireOrSaveJsFunctions(0, function() {
            ga("send", "event", {
                eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + t + " - Topics",
                eventAction: "Menu click - " + e,
                eventLabel: "Menu click - " + e
            })
        })
    }
});
var scrollPos = 0;
$(document).on("show.bs.modal", ".modal", function(e) {
        var t = 1040 + 10 * $(".modal:visible").length;
        $(this).css("z-index", t), setTimeout(function() {
            $(".modal-backdrop").not(".modal-stack").css("z-index", t - 1).addClass("modal-stack")
        }, 0), is_userMobile && !glob_responsiveOverride && ($(".modal-dialog").css({
            width: "100%",
            height: "100%",
            margin: "0",
            padding: "0"
        }), $(".modal-content").css({
            height: "auto",
            "min-height": "100%",
            "border-radius": "0"
        }), $(".iframe_scroll_container").css({
            "-webkit-overflow-scrolling": "touch",
            "overflow-y": "auto",
            "max-height": screen.height - 86
        }))
    }), $(document).on("hidden.bs.modal", ".modal", function() {
        $(".modal:visible").length && $(document.body).addClass("modal-open"), !$("html").hasClass("noscroll") || $(".modal:visible").length || $("#mask").is(":visible") || $(".menu_topics").hasClass("active") || $("html").removeClass("noscroll"), is_userMobile && !glob_responsiveOverride && $("html").css({
            position: ""
        })
    }),
    function(e) {
        "use strict";
        var t = function(t, n) {
            if (this.$element = e(t), this.options = e.extend(!0, {}, e.fn.typeahead.defaults, n), this.$menu = e(this.options.menu).appendTo(this.$element.parent()), this.shown = !1, this.eventSupported = this.options.eventSupported || this.eventSupported, this.grepper = this.options.grepper || this.grepper, this.highlighter = this.options.highlighter || this.highlighter, this.lookup = this.options.lookup || this.lookup, this.matcher = this.options.matcher || this.matcher, this.render = this.options.render || this.render, this.select = this.options.select || this.select, this.sorter = this.options.sorter || this.sorter, this.source = this.options.source || this.source, !this.source.length) {
                var i = this.options.ajax;
                this.ajax = "string" == typeof i ? e.extend({}, e.fn.typeahead.defaults.ajax, {
                    url: i
                }) : e.extend({}, e.fn.typeahead.defaults.ajax, i), this.ajax.url || (this.ajax = null)
            }
            this.listen()
        };
        t.prototype = {
            constructor: t,
            eventSupported: function(e) {
                var t = e in this.$element;
                return t || (this.$element.setAttribute(e, "return;"), t = "function" == typeof this.$element[e]), t
            },
            ajaxer: function() {
                var t = this,
                    n = t.$element.val();
                return n === t.query ? t : (t.query = n, t.ajax.timerId && (clearTimeout(t.ajax.timerId), t.ajax.timerId = null), !n || n.length < t.ajax.triggerLength ? (t.ajax.xhr && (t.ajax.xhr.abort(), t.ajax.xhr = null, t.ajaxToggleLoadClass(!1)), t.shown ? t.hide() : t) : (t.ajax.timerId = setTimeout(function() {
                    e.proxy(t.ajaxExecute(n), t)
                }, t.ajax.timeout), t))
            },
            ajaxExecute: function(t) {
                this.ajaxToggleLoadClass(!0), this.ajax.xhr && this.ajax.xhr.abort();
                var n = this.ajax.preDispatch ? this.ajax.preDispatch(t) : {
                        query: t
                    },
                    i = "post" === this.ajax.method ? e.post : e.get;
                this.ajax.xhr = i(this.ajax.url, n, e.proxy(this.ajaxLookup, this)), this.ajax.timerId = null
            },
            ajaxLookup: function(e) {
                var t;
                if (this.ajaxToggleLoadClass(!1), this.ajax.xhr) return this.ajax.preProcess && (e = this.ajax.preProcess(e)), this.ajax.data = e, (t = this.grepper(this.ajax.data)) && t.length ? (this.ajax.xhr = null, this.render(t.slice(0, this.options.items)).show()) : this.shown ? this.hide() : this
            },
            ajaxToggleLoadClass: function(e) {
                this.ajax.loadingClass && this.$element.toggleClass(this.ajax.loadingClass, e)
            },
            lookup: function(e) {
                var t, n = this;
                if (!n.ajax) return n.query = n.$element.val(), n.query ? (t = n.grepper(n.source), t && t.length ? n.render(t.slice(0, n.options.items)).show() : n.shown ? n.hide() : n) : n.shown ? n.hide() : n;
                n.ajaxer()
            },
            grepper: function(t) {
                var n, i = this;
                return t && t.length && !t[0].hasOwnProperty(i.options.display) ? null : (n = e.grep(t, function(e) {
                    return i.matcher(e[i.options.display], e)
                }), this.sorter(n))
            },
            matcher: function(e) {
                return ~e.toLowerCase().indexOf(this.query.toLowerCase())
            },
            sorter: function(e) {
                for (var t, n = this, i = [], o = [], r = []; t = e.shift();) t[n.options.display].toLowerCase().indexOf(this.query.toLowerCase()) ? ~t[n.options.display].indexOf(this.query) ? o.push(t) : r.push(t) : i.push(t);
                return i.concat(o, r)
            },
            show: function() {
                e.extend({}, this.$element.offset(), {
                    height: this.$element[0].offsetHeight
                });
                return this.$menu.css({
                    top: e(".header_search").position() + e(".header_search").height(),
                    position: "absolute"
                }), e(".nav_new").length > 0 ? this.$menu.prepend("<li></li>") : this.$menu.prepend("<li class='message'><a><strong>Matching categories:</strong></a></li>"), this.$menu.show(), this.shown = !0, this
            },
            hide: function() {
                return this.$menu.hide(), this.shown = !1, this
            },
            highlighter: function(e) {
                var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
                return e.replace(new RegExp("(" + t + ")", "ig"), function(e, t) {
                    return "<strong>" + t + "</strong>"
                })
            },
            render: function(t) {
                var n = this;
                return t = e(t).map(function(t, i) {
                    return t = e(n.options.item).attr("data-value", i[n.options.val]), t.find("a").html(n.highlighter(i[n.options.display], i)), t[0]
                }), t.first().html().indexOf("category_no_result") >= 0 ? t.first().addClass("active message") : t.first().addClass("active"), this.$menu.html(t), this
            },
            select: function() {
                var e = this.$menu.find(".active");
                return e.text().indexOf("categories") >= 0 || this.$element.val(e.text()).change(), this.options.itemSelected(e, e.attr("data-value"), e.text()), this.hide()
            },
            next: function(t) {
                var n = this.$menu.find(".active").removeClass("active"),
                    i = n.next();
                i.length || (i = e(this.$menu.find("li")[0])), i.addClass("active")
            },
            prev: function(e) {
                var t = this.$menu.find(".active").removeClass("active"),
                    n = t.prev();
                n.length || (n = this.$menu.find("li").last()), n.addClass("active")
            },
            listen: function() {
                this.$element.on("blur", e.proxy(this.blur, this)).on("keyup", e.proxy(this.keyup, this)), this.eventSupported("keydown") ? this.$element.on("keydown", e.proxy(this.keypress, this)) : this.$element.on("keypress", e.proxy(this.keypress, this)), this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this))
            },
            keyup: function(t) {
                switch (t.stopPropagation(), t.preventDefault(), t.keyCode) {
                    case 40:
                    case 38:
                        break;
                    case 9:
                    case 13:
                        e(this.$menu).parents("#navigation").length > 0 && e("#navigation #header_search_button").click(), e(this.$menu).parents("#navigation_scroll").length > 0 && e("#navigation_scroll #header_search_button").click();
                        break;
                    case 27:
                        this.hide();
                        break;
                    default:
                        this.lookup()
                }
            },
            keypress: function(e) {
                if (e.stopPropagation(), this.shown) switch (e.keyCode) {
                    case 9:
                    case 13:
                    case 27:
                        e.preventDefault();
                        break;
                    case 38:
                        e.preventDefault(), this.prev();
                        break;
                    case 40:
                        e.preventDefault(), this.next()
                }
            },
            blur: function(t) {
                if (!e(".nav_new").length > 0) {
                    var n = this;
                    t.stopPropagation(), t.preventDefault(), setTimeout(function() {
                        n.$menu.is(":focus") || n.hide()
                    }, 150)
                }
            },
            click: function(e) {
                e.stopPropagation(), e.preventDefault(), this.select()
            },
            mouseenter: function(t) {
                this.$menu.find(".active").removeClass("active"), e(t.currentTarget).addClass("active")
            }
        }, e.fn.typeahead = function(n) {
            return this.each(function() {
                var i = e(this),
                    o = i.data("typeahead"),
                    r = "object" == typeof n && n;
                o || i.data("typeahead", o = new t(this, r)), "string" == typeof n && o[n]()
            })
        }, e.fn.typeahead.defaults = {
            source: [],
            items: 8,
            menu: '<ul class="typeahead dropdown-menu"></ul>',
            item: '<li><a href="#"></a></li>',
            display: "name",
            val: "id",
            itemSelected: function() {},
            ajax: {
                url: null,
                timeout: 300,
                method: "post",
                triggerLength: 3,
                loadingClass: null,
                displayField: null,
                preDispatch: null,
                preProcess: null
            }
        }, e.fn.typeahead.Constructor = t, e(function() {
            e("body").on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(t) {
                var n = e(this);
                n.data("typeahead") || (t.preventDefault(), n.typeahead(n.data()))
            })
        })
    }(window.jQuery), $(document).ready(function() {
        function e(e, n, i) {
            if (e.hasClass("message"));
            else {
                if (e.parents("#navigation").length > 0) var o = "Main menu - Search";
                else var o = "Sticky menu - Search";
                fireOrSaveJsFunctions(0, function() {
                    ga("send", "event", {
                        eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + o,
                        eventAction: "Search - Completed via typeahead",
                        eventLabel: "Search - Completed via typeahead"
                    })
                }), t = !0, location.href = "/categories/" + n
            }
        }
        var t = !1;
        "undefined" == typeof category && (category = catrgory), $(window).unload(function() {
            ($("#navigation #search").hasClass("active") || $(".navigation_scroll_search #search").hasClass("active") || $("#search_toggle").hasClass("active")) && !t && ($("#navigation #search").hasClass("active") ? fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Main menu - Search",
                    eventAction: "Search - Interrupted",
                    eventLabel: "Search - Interrupted"
                })
            }) : fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Sticky menu - Search",
                    eventAction: "Search - Interrupted",
                    eventLabel: "Search - Interrupted"
                })
            }))
        }), $("#navigation #header_search,#navigation_scroll #header_search,#header_search").typeahead({
            source: category,
            display: "displayNavName",
            itemSelected: e,
            val: "url"
        }), $(".default_menu .menu_search,.navigation_scroll_search").click(function(e) {
            e.preventDefault(), e.stopPropagation(), $(this).parent().hasClass("main_nav") ? ($(".nav_new .menu_topics").hasClass("active") && $(".nav_new .menu_topics").removeClass("active"), $(".js-show-notifications").hasClass("active") && ($(".js-show-notifications").removeClass("active"), $(".notification_container").removeClass("active")), $("#navigation #search").removeClass("inactive").addClass("active"), $("#navigation #header_search").focus(), fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Main menu - Search",
                    eventAction: "Search click - Main nav",
                    eventLabel: "Search open - Main nav"
                })
            })) : ($(this).hasClass("navigation_scroll_search") && ($(".scroll_menu_left").hide(), "undefined" != typeof articleID && articleID ? fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Main menu - Search",
                    eventAction: "Search click - Article sticky nav",
                    eventLabel: "Search open - Article sticky nav"
                })
            }) : fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Main menu - Search",
                    eventAction: "Search click - Non-article sticky nav",
                    eventLabel: "Search open - Non-article sticky nav"
                })
            }), $(window).innerWidth() > $(window).innerHeight() ? $("body.site_mobile #navigation_scroll div#search form ul.typeahead").css({
                height: "220px",
                overflow: "scroll"
            }) : $("body.site_mobile #navigation_scroll div#search form ul.typeahead").css({
                height: "auto",
                overflow: ""
            })), $(this).find("#search").removeClass("inactive").addClass("active"), $(this).find("#header_search").focus())
        }), $(".mobile_menu .menu_search").click(function(e) {
            e.preventDefault(), e.stopPropagation(), glob_newSkin && is_userMobile && !glob_responsiveOverride && ($("#navigation.mobile_menu nav div#search").height($(window).innerHeight()), $("html,body").addClass("noscroll"), $("html,body").css({
                height: "100%"
            }), $(window).innerWidth() > $(window).innerHeight() ? $("#navigation.mobile_menu nav div#search form ul.typeahead").css({
                height: "220px",
                overflow: "scroll"
            }) : $("#navigation.mobile_menu nav div#search form ul.typeahead").css({
                height: "auto",
                overflow: ""
            })), $(this).next().removeClass("inactive").addClass("active"), fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Main menu - Search",
                    eventAction: "Search click - Main nav",
                    eventLabel: "Search open - Main nav"
                })
            })
        }), $("#navigation #header_search_button,#navigation_scroll #header_search_button").click(function(e) {
            if (e.preventDefault(), "" !== $(this).prev("input").val()) {
                if ($(this).parents("#navigation").length > 0) var n = "Main menu - Search";
                else var n = "Sticky menu - Search";
                fireOrSaveJsFunctions(0, function() {
                    ga("send", "event", {
                        eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - " + n,
                        eventAction: "Search - Completed via button",
                        eventLabel: "Search - Completed via button"
                    })
                }), t = !0, $(this).parent().submit()
            }
        }), $("#search_toggle a").click(function(e) {
            e.preventDefault()
        })
    }), $(document).ready(function() {
        function e() {
            i = !0,
                $(".mobile_newsletter_container").length > 0 ? n() : $.get("/structure/framework/main/article/mobile_newsletter_modal.php", function(e) {
                    $("body").append(e), n(), $(".mobile_newsletter_container_outer").on("hidden.bs.modal", function() {
                        showNewsletterPopup && t()
                    })
                })
        }

        function t() {
            $.ajax({
                type: "POST",
                url: "/account/message-session-setter.php",
                data: "mobile_newsletter=1",
                cache: !1,
                success: function(e) {}
            })
        }

        function n() {
            var e = setInterval(function() {
                1 == glob_mntcookie && ($(".mobile_newsletter_container_outer").length > 0 && $(".mobile_newsletter_container_outer").modal("show"), fireOrSaveJsFunctions(0, function() {
                    ga("send", "event", {
                        eventCategory: "UI Elements",
                        eventAction: "Article Modal - " + glob_deviceInfo,
                        eventLabel: "Visible"
                    })
                }), clearInterval(e))
            }, 2e3)
        }
        $(".tour-btn").click(function(e) {
            e.preventDefault(), window.location.href = $(this).parent().attr("href")
        });
        var i = !1;
        showNewsletterPopup && setTimeout(function() {
            o()
        }, 45e3);
        var o = function() {
            $(".modal_window.active_open").length > 0 || $(".article_print").is(":visible") || $(".article_email").is(":visible") || $(".newsletter_success_message.active").length > 0 || "undefined" != typeof interstitialTrigger || $(".modal").hasClass("in") || $("#mask").is(":visible") || $(".menu_topics.active").length > 0 || i || e()
        }
    }), $(document).ready(function() {
        if ("help" == window.location.pathname.split("/").pop()) {
            dynamicFaq();
            var e = window.location.hash,
                t = 'a[href="' + e + '"]';
            if ("" !== e) {
                var n = $(t).closest("dt").position().top;
                $("html, body").animate({
                    scrollTop: $(window).scrollTop() + n
                }), $(t).closest("dt").click()
            }
        }
    });
var googleadsLoaded = !1,
    iframe = document.createElement("iframe");
iframe.height = "1px", iframe.width = "1px", iframe.id = "ads-text-iframe", iframe.src = "/ads.html", document.body.appendChild(iframe), "undefined" != typeof AdBridg && fireOrSaveGoogleAdFunctions(function() {
    AdBridg.cmd.push({
        events: {
            "gpt.render_raw": function() {
                googleadsLoaded = !0
            }
        }
    })
});
var adsBlockOn = 0,
    adBlockValue = "";
window.addEventListener ? window.addEventListener("load", pageFullyLoaded, !1) : window.attachEvent && window.attachEvent("onload", pageFullyLoaded);
var isUserIphone = function() {
    return /(iphone|ipod).*/.test(navigator.userAgent.toLowerCase())
};
$(document).ready(function(e) {
        e(window).resize(function() {
            var t = ".modal_window.active_open",
                n = e(t).outerHeight() / 2,
                i = e(t).outerWidth() / 2;
            e(t).css({
                "margin-top": -n,
                "margin-left": -i
            })
        }), e(document).on("click", "#header_close_button,#mask", function(t) {
            if (e(".modal_window.active_open").fadeOut(300), e("#mask").fadeOut(300), e("#mask").css({
                    opacity: "0"
                }), e("html").removeClass("noscroll"), setTimeout(function() {
                    e(".modal_window.active_open").removeClass("active_open")
                }, 400), isUserIphone && glob_responsiveOverride) {
                var n = e("head");
                n.find("meta[name=viewport]").remove(), n.prepend('<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.1, maximum-scale=2.0, user-scalable=1" />')
            }
        }), e(".sidebar_sponsor_modal_trigger").click(function(t) {
            t.preventDefault(), e(".sidebar_sponsored_modal").modal("show")
        })
    }),
    function(e) {
        e.fn.modal_popup = function(t) {
            function n(t) {
                r.targetWidth && e(t).css({
                    width: r.width,
                    "max-width": r["max-width"]
                }), r.targetHeight && e(t).css({
                    height: r.height
                }), e(t).css({
                    "z-index": "100000000",
                    "box-sizing": "border-box"
                });
                var n = e(t).outerHeight() / 2,
                    i = e(t).outerWidth() / 2;
                e(t).css({
                    "margin-left": -i,
                    "margin-top": -n
                })
            }

            function i(t) {
                if (t.indexOf("#") > -1) {
                    t = t.slice(1);
                    var n = e('<div class="modal_window" id="' + t + '"></div>')
                } else {
                    t = t.slice(1);
                    var n = e('<div class="modal_window ' + t + '"></div>')
                }
                e(n).appendTo("body")
            }

            function o() {
                var t = e('<div id="header_close_button"></div>' + r.content + "<div></div>");
                e(t).appendTo(r.targetElement)
            }
            var r = e.extend({
                width: "90%",
                "max-width": "600px",
                height: "",
                targetElement: "",
                content: "",
                targetWidth: !0,
                targetHeight: !0
            }, t);
            return this.click(function(t) {
                t.preventDefault();
                var a = r.targetElement;
                if ("" !== r.content && !e(a).length > 0 && (i(a), o()), 0 == e("#mask").length) {
                    e("body").append('<div id="mask"></div>')
                }
                if (e(a).fadeIn(300).addClass("active_open"), n(a), e(a).children("#header_close_button").show(), e("#mask").css({
                        opacity: "0.7"
                    }), e("#mask").fadeIn(300), glob_responsiveOverride) {
                    if (isUserIphone && glob_responsiveOverride) {
                        var s = e("head");
                        s.find("meta[name=viewport]").remove(), s.prepend('<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0" />')
                    }
                    e("#mask").bind("touchmove", function(e) {
                        e.preventDefault()
                    }, !1)
                } else e("html").addClass("noscroll")
            })
        }
    }(jQuery);
var getNewsletterData = !1,
    completeFollowModal = !1,
    followClickByButton = !0;
$(document).ready(function() {
        function e(e) {
            if (e.parents("#navigation").length || e.parents("#navigation_scroll").length) {
                var t = screen.height;
                if (e.parents("#navigation").length > 0) {
                    var n = $("#navigation").outerHeight();
                    n += $("#mfPreviewBar").outerHeight()
                } else var n = $("#navigation_scroll").outerHeight();
                if (e.parent().hasClass("active")) {
                    if (e.next(".topics").css({
                            height: "100%"
                        }), is_userMobile && !glob_responsiveOverride) {
                        var i = t - n;
                        e.next(".topics").css({
                            width: "100%",
                            "max-height": i
                        }), e.next(".topics").css({
                            "overflow-y": "scroll"
                        })
                    }
                } else e.next(".topics").css({
                    height: "",
                    width: ""
                })
            }
        }
        var t = !1;
        if ($(window).unload(function() {
                $(".newsletter_selection_container_outer").hasClass("active_open") && fireOrSaveJsFunctions(0, function() {
                    ga("send", "event", {
                        eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Modal - Follow",
                        eventAction: "Modal - Follow incomplete",
                        eventLabel: "Modal - Follow incomplete"
                    })
                })
            }), $(".menu_forums > a").click(function(e) {
                fireOrSaveJsFunctions(0, function() {
                    ga("send", "event", {
                        eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Main menu - Forums",
                        eventAction: "Menu click - Forums",
                        eventLabel: "Menu click - Forums"
                    })
                })
            }), $(".menu_topics > a,.menu_login > a").click(function(t) {
                t.preventDefault(), $(this).hasClass("new_account_dashboard_trigger") || (0 == $("#mask").length && $("#navigation").before("<div id='mask' style='display:none;'></div>"), $(this).parent().hasClass("menu_login") || $(this).parent().hasClass("menu_topics") && $(this).parent().toggleClass("active"), $(this).parent().hasClass("menu_login") ? $(".menu_topics").removeClass("active") : $(this).parent().hasClass("menu_topics") && $(this).parent().hasClass("active") && $(".menu_login").removeClass("active"), e($(this)), $(this).parent().hasClass("active") ? is_userTablet && $(this).parents("#navigation_scroll").length > 0 || $("html").addClass("noscroll") : $("html").removeClass("noscroll"))
            }), $(".navigation_scroll_share > a").click(function(e) {
                e.preventDefault(), $(".navigation_scroll_share").toggleClass("active")
            }), $(".topic_bar li ul li > a").click(function(e) {
                var t = $.trim($(this).text()),
                    n = $.trim($(this).parents("ul:first").closest("li").children("a").text()).capitalizeFirstLetter();
                fireOrSaveJsFunctions(0, function() {
                    ga("send", "event", {
                        eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Main menu - Topics",
                        eventAction: "Menu click - " + n,
                        eventLabel: "Menu click - " + t
                    })
                })
            }), String.prototype.capitalizeFirstLetter = function() {
                return this.charAt(0).toUpperCase() + this.slice(1)
            }, $(".newsletter_selection_container_outer").hasClass("signup_form")) var n = "560px",
            i = "230px";
        else var n = "300px",
            i = "600px";
        $(".newsletter_category_follow .modal-popup").modal_popup({
            width: n,
            "max-width": n,
            height: i,
            targetElement: ".newsletter_selection_container_outer",
            targetWidth: !1,
            targetHeight: !1
        }), $(".menu_login .sign_up a").click(function(e) {
            e.preventDefault(), fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Main menu - Create account",
                    eventAction: "Register - Main nav",
                    eventLabel: "Register - Main nav"
                })
            })
        }), $(".nav_scroll_create_account").click(function(e) {
            e.preventDefault(), t || fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Main menu - Create account",
                    eventAction: "Register - Sticky nav",
                    eventLabel: "Register - Sticky nav"
                })
            }), t = !1
        }), $(document).on("click", ".newsletter_selection_container_outer #header_close_button,#mask", function(e) {
            e.preventDefault(), $(".newsletter_category_follow .follow_btn").removeClass("active"), $(".newsletter_selection_container_outer").hasClass("active_open") && !completeFollowModal && fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Modal - Follow",
                    eventAction: "Modal - Follow incomplete",
                    eventLabel: "Modal - Follow incomplete"
                })
            }), completeFollowModal = !1
        }), $("#footer_social .fa-facebook,#footer_social .fa-linkedin,#footer_social .fa-google-plus,#footer_social .fa-pinterest,#footer_social .fa-twitter").click(function(e) {
            switch (!0) {
                case $(this).hasClass("fa-facebook"):
                    var t = "Footer - Facebook";
                    break;
                case $(this).hasClass("fa-linkedin"):
                    var t = "Footer - LinkedIn";
                    break;
                case $(this).hasClass("fa-google-plus"):
                    var t = "Footer - Google+";
                    break;
                case $(this).hasClass("fa-pinterest"):
                    var t = "Footer - Pinterest";
                    break;
                case $(this).hasClass("fa-twitter"):
                    var t = "Footer - Twitter"
            }
            fireOrSaveJsFunctions(0, function() {
                ga("send", "event", {
                    eventCategory: glob_menu_prefix + " - " + glob_deviceInfo + " - Footer",
                    eventAction: t,
                    eventLabel: t
                })
            })
        })
    }), $("body").on("click", ".menu_login a", function(e) {
        e.preventDefault(), glob_customUserID || "account" === glob_pageType || $(".modal_login_panel").modal("show")
    }), $(document).ready(function() {
        $(".weekly").change(function() {
            var e = $(this),
                t = $("#weekly_cat"),
                n = $(".weekly_choose");
            "hidden" == n.attr("type") ? e.prop("checked") ? t.show() : t.hide() : e.prop("checked") ? n.length > 0 ? (n.attr("disabled", !1), $("#last_weekly_cats").length > 0 && $("#last_weekly_cats").val() ? $(".weekly_choose option[value=select]").prop("selected", "selected") : $(".weekly_choose option[value=full]").prop("selected", "selected"), n.change()) : t.show() : n.length > 0 ? (n.attr("disabled", !0), $('.weekly_choose option[value="full"]').prop("selected", "selected"), n.change()) : t.hide()
        }), $(".weekly_choose").change(function() {
            var e = $(".weekly_choose").val(),
                t = $("#weekly_cat");
            if ("select" == e) $("#last_weekly_cats").length > 0 && $("#last_weekly_cats").val() && $.each($("#last_weekly_cats").val().split(","), function(e, t) {
                $("#weekly_cat input[type=checkbox][value=" + t + "]").prop("checked", !0)
            }), t.show(), $("#weekly_cat .cat_normal :checked").length > 0 && $("#weekly_cat .show_all_categories").click();
            else {
                var n = [];
                $("#weekly_cat :checkbox:checked").each(function(e) {
                    n[e] = $(this).val()
                }), $("#last_weekly_cats").length > 0 && n.length > 0 && $("#last_weekly_cats").val(n.join()), t.hide(), $("#weekly_cat").find($(":checkbox")).each(function() {
                    $(this).prop("checked", !1)
                })
            }
        }), ($(".weekly_choose").length > 0 && "select" == $(".weekly_choose").val() || $("#from_follower").length > 0 && $(".weekly").is(":checked")) && $("#weekly_cat .show_all_categories").click(), $(".show_all_categories").click(function(e) {
            e.preventDefault(), $(this).hide(), $(this).next().slideDown()
        }), $("#btn_tickall_daily").click(function() {
            this.checked;
            $("#daily_cat").find($(":checkbox")).each(function() {
                $(this).closest(".cat_normal").length > 0 ? $(this).closest(".cat_normal").is(":visible") && $(this).prop("checked", !0) : $(this).prop("checked", !0)
            })
        }), $("#btn_untick_daily").click(function() {
            $("#daily_cat").find($(":checkbox")).each(function() {
                $(this).prop("checked", !1)
            })
        }), $("#btn_tickall_weekly").click(function() {
            this.checked;
            $("#weekly_cat").find($(":checkbox")).each(function() {
                $(this).closest(".cat_normal").length > 0 ? $(this).closest(".cat_normal").is(":visible") && $(this).prop("checked", !0) : $(this).prop("checked", !0)
            })
        }), $("#btn_tickall_popular").click(function() {
            $("#cat_popular").find($(":checkbox")).each(function() {
                $(this).prop("checked", !0)
            })
        }), $("#btn_untick_weekly").click(function() {
            $("#weekly_cat").find($(":checkbox")).each(function() {
                $(this).prop("checked", !1)
            })
        })
    }),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
    }(function(e) {
        "use strict";
        var t, n, i, o, r = {
                minHeight: 0,
                elements: [],
                percentage: !0,
                userTiming: !0,
                pixelDepth: !0,
                nonInteraction: !0,
                gaGlobal: !1,
                gtmOverride: !1,
                trackerName: !1,
                dataLayer: "dataLayer"
            },
            a = e(window),
            s = [],
            l = !1,
            c = 0;
        return e.scrollDepth = function(d) {
            function u(e, r, a, s) {
                var l = d.trackerName ? d.trackerName + ".send" : "send";
                o ? (o({
                    event: "ScrollDistance",
                    eventCategory: "Scroll Depth",
                    eventAction: e,
                    eventLabel: r,
                    eventValue: 1,
                    eventNonInteraction: d.nonInteraction
                }), d.pixelDepth && arguments.length > 2 && a > c && (c = a, o({
                    event: "ScrollDistance",
                    eventCategory: "Scroll Depth",
                    eventAction: "Pixel Depth",
                    eventLabel: g(a),
                    eventValue: 1,
                    eventNonInteraction: d.nonInteraction
                })), d.userTiming && arguments.length > 3 && o({
                    event: "ScrollTiming",
                    eventCategory: "Scroll Depth",
                    eventAction: e,
                    eventLabel: r,
                    eventTiming: s
                })) : (t && (window[i](l, "event", "Scroll Depth", e, r, 1, {
                    nonInteraction: d.nonInteraction
                }), d.pixelDepth && arguments.length > 2 && a > c && (c = a, window[i](l, "event", "Scroll Depth", "Pixel Depth", g(a), 1, {
                    nonInteraction: d.nonInteraction
                })), d.userTiming && arguments.length > 3 && window[i](l, "timing", "Scroll Depth", e, s, r)), n && (_gaq.push(["_trackEvent", "Scroll Depth", e, r, 1, d.nonInteraction]), d.pixelDepth && arguments.length > 2 && a > c && (c = a, _gaq.push(["_trackEvent", "Scroll Depth", "Pixel Depth", g(a), 1, d.nonInteraction])), d.userTiming && arguments.length > 3 && _gaq.push(["_trackTiming", "Scroll Depth", e, s, r, 100])))
            }

            function h(e) {
                return {
                    "25%": parseInt(.25 * e, 10),
                    "50%": parseInt(.5 * e, 10),
                    "75%": parseInt(.75 * e, 10),
                    "100%": e - 5
                }
            }

            function f(t, n, i) {
                e.each(t, function(t, o) {
                    -1 === e.inArray(t, s) && n >= o && (u("Percentage", t, n, i), s.push(t))
                })
            }

            function p(t, n, i) {
                e.each(t, function(t, o) {
                    -1 === e.inArray(o, s) && e(o).length && n >= e(o).offset().top && (u("Elements", o, n, i), s.push(o))
                })
            }

            function g(e) {
                return (250 * Math.floor(e / 250)).toString()
            }

            function m(e, t) {
                var n, i, o, r = null,
                    a = 0,
                    s = function() {
                        a = new Date, r = null, o = e.apply(n, i)
                    };
                return function() {
                    var l = new Date;
                    a || (a = l);
                    var c = t - (l - a);
                    return n = this, i = arguments, 0 >= c ? (clearTimeout(r), r = null, a = l, o = e.apply(n, i)) : r || (r = setTimeout(s, c)), o
                }
            }

            function v() {
                l = !0, a.on("scroll.scrollDepth", m(function() {
                    var t = e(document).height(),
                        n = window.innerHeight ? window.innerHeight : a.height(),
                        i = a.scrollTop() + n,
                        o = h(t),
                        r = +new Date - y;
                    return s.length >= d.elements.length + (d.percentage ? 4 : 0) ? (a.off("scroll.scrollDepth"), void(l = !1)) : (d.elements && p(d.elements, i, r), void(d.percentage && f(o, i, r)))
                }, 500))
            }
            var y = +new Date;
            d = e.extend({}, r, d), e(document).height() < d.minHeight || (d.gaGlobal ? (t = !0, i = d.gaGlobal) : "function" == typeof ga ? (t = !0, i = "ga") : "function" == typeof __gaTracker && (t = !0, i = "__gaTracker"), "undefined" != typeof _gaq && "function" == typeof _gaq.push && (n = !0), "function" == typeof d.eventHandler ? o = d.eventHandler : void 0 === window[d.dataLayer] || "function" != typeof window[d.dataLayer].push || d.gtmOverride || (o = function(e) {
                window[d.dataLayer].push(e)
            }), e.scrollDepth.reset = function() {
                s = [], c = 0, a.off("scroll.scrollDepth"), v()
            }, e.scrollDepth.addElements = function(t) {
                void 0 !== t && e.isArray(t) && (e.merge(d.elements, t), l || v())
            }, e.scrollDepth.removeElements = function(t) {
                void 0 !== t && e.isArray(t) && e.each(t, function(t, n) {
                    var i = e.inArray(n, d.elements),
                        o = e.inArray(n, s); - 1 != i && d.elements.splice(i, 1), -1 != o && s.splice(o, 1)
                })
            }, function() {
                v()
            }())
        }, e.scrollDepth
    });
var passInitCheck = !1,
    passedDepth = 0;
jQuery.scrollDepth({
    userTiming: !1,
    pixelDepth: !1,
    nonInteraction: !1,
    eventHandler: function(e) {
        if (e) switch (e.eventLabel) {
            case "25%":
                fireOrSaveJsFunctions(0, function() {
                    ga("send", "event", {
                        eventCategory: "Scroll events",
                        eventAction: "26-50%",
                        eventLabel: window.location.href
                    })
                }), passInitCheck = !0, passedDepth = "26-50";
                break;
            case "50%":
                fireOrSaveJsFunctions(0, function() {
                    ga("send", "event", {
                        eventCategory: "Scroll events",
                        eventAction: "51-75%",
                        eventLabel: window.location.href
                    })
                }), passInitCheck = !0, passedDepth = "51-75";
                break;
            case "75%":
                fireOrSaveJsFunctions(0, function() {
                    ga("send", "event", {
                        eventCategory: "Scroll events",
                        eventAction: "76-99%",
                        eventLabel: window.location.href
                    })
                }), passInitCheck = !0, passedDepth = "76-99";
                break;
            case "100%":
                passInitCheck = !0, fireOrSaveJsFunctions(0, function() {
                    ga("send", "event", {
                        eventCategory: "Scroll events",
                        eventAction: "100%",
                        eventLabel: window.location.href
                    })
                }), passedDepth = "100"
        }
    }
}), passInitCheck || fireOrSaveJsFunctions(0, function() {
    ga("send", "event", {
        eventCategory: "Scroll events",
        eventAction: "0",
        eventLabel: window.location.href,
        nonInteraction: !0
    })
}), firstCheckSent = !1, $(window).scroll(function() {
    passInitCheck || firstCheckSent || (fireOrSaveJsFunctions(0, function() {
        ga("send", "event", {
            eventCategory: "Scroll events",
            eventAction: "1-25%",
            eventLabel: window.location.href
        })
    }), firstCheckSent = !0, passedDepth = "1-25")
});
var newsletter_currentRequest = !1;
$(document).on("ready", function(e) {
    bindNewsletterEvents()
}), window.addEventListener("load", function() {
    for (var e = document.querySelectorAll(G_imageSharingRelativeDOMClassName), t = 0; t < e.length; t++) {
        var n = e[t];
        n.parentNode.removeChild(n)
    }
});
var initImageSharingEffect = function(e) {
        var t = "";
        e && (t = ".owl-carousel ");
        for (var n = document.querySelectorAll(".article_body " + t + "img,#factoids img"), i = 0; i < n.length; i++) {
            var o = n[i];
            "suggest_reading_outer_container" != o.id && loadImageSharingImageByIndex(i, t, o)
        }
    },
    loadImageSharingImageByIndex = function(e, t, n) {
        if (null == n) {
            var i = document.querySelectorAll(".article_body " + t + "img,#factoids img");
            n = i[e]
        }
        if (!n.classList.contains("clickable") && !n.classList.contains("galleryOverlayImage") && n.parents(G_imageWidgetWrapperSelector).length && (!n.getAttribute("data-article-id") || "Desktop" == glob_deviceInfo)) {
            if ((n.classList.contains("lazy") || n.classList.contains("owl-lazy")) && null != n.getAttribute("data-src")) return n.setAttribute("data-sharing-image-index", e), void console.log("skip sharing:" + e);
            var o = document.createElement("div");
            o.innerHTML = G_imageSharing_html_str;
            var r = o.firstChild;
            n.parentNode.insertBefore(r, n.nextSibling);
            var a = getClosestParentBySelector(n, G_imageWidgetWrapperSelector),
                s = a.querySelector(".imageSharing_hover_text"),
                l = s.querySelectorAll(".imageSharing_button");
            n.style.display = "block", n.style.float = "none";
            is_userMobile && (a.setAttribute("data-sharing-is-enable", "no"), a.addEventListener("click", function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1, setTimeout(function() {
                        a.setAttribute("data-sharing-is-enable", "")
                    }, 50)
                }), a.addEventListener("mouseover", function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1, setTimeout(function() {
                        a.setAttribute("data-sharing-is-enable", "")
                    }, 50)
                }), a.addEventListener("mouseleave", function(e) {
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setAttribute("data-sharing-is-enable", "no")
                })),
                function() {
                    if (parseInt(getComputedStyle(n).width) <= 250 && !a.parents(".read-more-fulltext").length && !a.parents(".owl-carousel").length) {
                        var e = a.querySelector(G_imageSharingRelativeDOMClassName);
                        e && e.classList.add("smallImage");
                        try {
                            IsPinterestPluginExist() || (l[2].outerHTML = "")
                        } catch (e) {}
                    }
                }(), n.getAttribute("data-article-id") ? setClickEffect(l, shortUrlToFullUrl(n.src), a, n.getAttribute("data-article-id"), n.alt, e) : setClickEffect(l, shortUrlToFullUrl(n.src), a, "", "", e)
        }
    },
    newURL = window.location.protocol + "//www.medicalnewstoday.com" + window.location.pathname,
    twitterShareText = $(document).find("title").text();
twitterShareText = twitterShareText.replace("- Medical News Today", "") + " " + newURL + " via @mnt";
var G_imageWidgetWrapperSelector = "span.imageWidgetWrapper",
    G_galleryOverlay_html_str = '<div class="galleryOverlay_hover image-galleryOverlay" >\r\n  \r\n  <div class="galleryOverlay_hover_text image-galleryOverlay">\r\n      <h2 class="galleryOverlay_title image-galleryOverlay">\r\n      WARNING\r\n      </h2>\r\n\r\n      <span class="galleryOverlay_subtitle image-galleryOverlay">\r\n\r\n    Graphic Imagery\r\n\r\n    </span>\r\n\r\n      <span class="galleryOverlay_button image-galleryOverlay">\r\n\r\n      SHOW IMAGE\r\n        \r\n\r\n      </span>\r\n\r\n  </div>\r\n\r\n</div>',
    G_galleryOverlayMainClassName = ".image-galleryOverlay",
    G_galleryOverlayInitFinishClass = "image-galleryOverlay-initialized",
    G_imageSharing_html_str = '<div class="imageSharing_hover image-imageSharing" >\r\n  \r\n  <div class="imageSharing_hover_text image-imageSharing">\r\n\r\n      <div class="imageSharing_button pinterest image-imageSharing sharrre" data-targetwebsite="pinterest"> </div>\r\n\r\n <div class="imageSharing_button facebook image-imageSharing" data-targetwebsite="facebook"></div>\r\n\r\n <div class="imageSharing_button twitter image-imageSharing sharrre" data-targetwebsite="twitter"> </div>\r\n\r\n </div>\r\n\r\n</div>\r\n',
    G_imageSharingMainDOMClassName = "",
    G_imageSharingRelativeDOMClassName = ".image-imageSharing",
    G_settimtoutID, G_imageWidgetClassList = ["clickable", "galleryOverlayImage"];
window.addEventListener("load", function() {
    addImageWidgetWrapper()
}), Element.prototype.parents = function(e) {
    for (var t = [], n = this, i = void 0 !== e; null !== (n = n.parentElement);) n.nodeType === Node.ELEMENT_NODE && (i && !n.matches(e) || t.push(n));
    return t
};
var initial = 1,
    scrollUpPosition = 0;
$(function() {
        var e = function() {
            var e = $(window).scrollTop();
            t - e > 1e3 && "0" == e && (hideNotifyBox(), $("#navigation_scroll").removeClass("show_scroll_nav"), $(".about_nav_scroll").removeClass("show_scroll_nav"));
            $("html").attr("class");
            e > 530 && (t < e || initial) ? (initial && (initial = 0), $("#navigation_scroll").show().addClass("show_scroll_nav"), $(".about_nav_scroll").show().addClass("show_scroll_nav"), scrollUpPosition = 0) : t > e && e < 400 && t > 0 && ($("#navigation_scroll").removeClass("show_scroll_nav"), $(".about_nav_scroll").removeClass("show_scroll_nav"), hideNotifyBox()), t = $(window).scrollTop()
        };
        is_userMobile || navigator.userAgent.match(/MSIE\s(?!9.0)/) || e();
        var t = 0;
        $(window).scroll(function() {
            e()
        })
    }), $(window).resize(function() {
        $(window).width() >= 490 && !navigator.userAgent.match(/MSIE\s(?!9.0)/) && $(window).scrollTop() < 330 && $("#navigation_scroll").length > 0 && "0" == $("#navigation_scroll").offset().top && ($("#navigation_scroll").removeClass("show_scroll_nav"), hideNotifyBox())
    }).resize(), $(document).ready(function() {
        if (glob_newSkin && is_userMobile && !glob_responsiveOverride) {
            var e = $(".topic_headings");
            $(".topic_headings >li > span").click(function(t) {
                t.preventDefault(), $(this).parent().hasClass("active") ? (e.children("li.active").children("ul").hide(), $(this).parent().removeClass("active"), $(this).find("i").removeClass("fa-chevron-up"), $(this).find("i").addClass("fa-chevron-down")) : (e.children("li.active").children("ul").hide(), e.children("li.active").children("span").find("i").removeClass("fa-chevron-up"), e.children("li.active").children("span").find("i").addClass("fa-chevron-down"), e.children("li.active").removeClass("active"), $(this).parent().addClass("active").children("ul").css({
                    display: "block"
                }), $(this).find("i").removeClass("fa-chevron-down"), $(this).find("i").addClass("fa-chevron-up"));
                var n = ($(".topic_headings").height(), $(".menu_cta_container").height(), screen.height),
                    i = $("#navigation").outerHeight();
                minMenuHeight = n - i, $("#navigation .topics").css({
                    "max-height": minMenuHeight
                }), $("#navigation .menu_cta_container").css({
                    top: $("#navigation .topic_headings").height() + 38
                })
            })
        }
    }),
    function(e, t, n, i) {
        e.fn.doubleTapToGo = function(i) {
            return !!("ontouchstart" in t || navigator.msMaxTouchPoints || navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) && (this.each(function() {
                var t = !1;
                e(this).on("click", function(n) {
                    var i = e(this);
                    i[0] != t[0] && (n.preventDefault(), t = i)
                }), e(n).on("click touchstart MSPointerDown", function(n) {
                    for (var i = !0, o = e(n.target).parents(), r = 0; r < o.length; r++) o[r] == t[0] && (i = !1);
                    i && (t = !1)
                })
            }), this)
        }
    }(jQuery, window, document), $(function() {
        $(".doubletap_actions").doubleTapToGo()
    });
//# sourceMappingURL=maps/mnt_mobile.js.map