var _lgy_lift_callback_4275688 = function(_lgy_json) {};
(function() {
    var log = function() {
        var module = {};
        var exports = {};
        var _config = {};
        var _error_count = 0;
        var _error_send_limit = 3;
        var _is_browser_direct = function() {
            if (typeof debug_config != "undefined") {
                return debug_config.is_browser_direct
            }
            return false
        };
        var _send = function(data) {
            if (module.exports._error_count++ >= _error_send_limit) {
                module.exports.log_level_var = 0;
                return
            }
            if (_is_browser_direct() || !/^prod/.test(String(_config.env))) {
                console.log(data);
                return
            }
            var url = module.exports.log_url_var;
            if (!/^https/.test(url)) {
                url = "https://er.logly.co.jp/errors"
            }
            var xhr = new XMLHttpRequest;
            var handle_error = function() {
                module.exports.log_level_var = 0
            };
            xhr.onerror = xhr.ontimeout = xhr.onabort = handle_error;
            xhr.open("POST", url, true);
            xhr.timeout = 1e4;
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(data))
        };
        var _extract_messages = function(message_or_error) {
            var result = {
                serviceContext: _config.serviceContext || {}
            };
            if (_config.extra) {
                result.extra = _config.extra
            }
            if (message_or_error instanceof Error) {
                result.error = {
                    columnNumber: message_or_error.columnNumber,
                    description: message_or_error.description,
                    fileName: message_or_error.fileName,
                    lineNumber: message_or_error.lineNumber,
                    message: message_or_error.message,
                    name: message_or_error.name,
                    number: message_or_error.number,
                    stack: message_or_error.stack
                }
            } else {
                result.error = {
                    message: message_or_error.toString()
                }
            }
            return result
        };
        var _critical = function(message_or_error) {
            if (module.exports.log_level_var < 1) {
                return
            }
            var data = _extract_messages(message_or_error);
            data.level = "critical";
            module.exports._send(data)
        };
        var _warning = function(message_or_error) {
            if (module.exports.log_level_var < 2) {
                return
            }
            var data = _extract_messages(message_or_error);
            data.level = "warning";
            module.exports._send(data)
        };
        var _info = function(message_or_error) {
            if (module.exports.log_level_var < 3) {
                return
            }
            var data = _extract_messages(message_or_error);
            data.level = "info";
            module.exports._send(data)
        };
        var _debug = function(message_or_error) {
            if (module.exports.log_level_var < 4) {
                return
            }
            var data = _extract_messages(message_or_error);
            data.level = "debug";
            module.exports._send(data)
        };
        var _critical_on_catch_func = function(func) {
            return function() {
                try {
                    func()
                } catch (err) {
                    module.exports.critical(err);
                    if (_is_browser_direct()) {
                        throw err
                    }
                }
            }
        };
        var _critical_on_catch = function(func) {
            _critical_on_catch_func(func)()
        };
        var _init = function(config, is_test) {
            _config = config;
            config.modules = config.modules || {};
            config.modules.log = module.exports;
            module.exports.log_level_var = typeof config.log_level != "undefined" ? config.log_level : 1;
            module.exports.log_url_var = config.log_url || "";
            if (is_test) {
                module.exports._send = function(data) {
                    if (module.exports._error_count++ >= _error_send_limit) {
                        module.exports.log_level_var = 0;
                        return
                    }
                    module.exports.last_log_data = data
                };
                _is_browser_direct = function() {
                    return false
                }
            }
            return module.exports
        };
        module.exports = {
            _send: _send,
            _extract_messages: _extract_messages,
            _error_count: _error_count,
            init: _init,
            log_level_var: !isNaN(parseInt("")) ? parseInt("") : 1,
            log_url_var: "https://er.logly.co.jp/errors",
            critical: _critical,
            warning: _warning,
            info: _info,
            debug: _debug,
            critical_on_catch_func: _critical_on_catch_func,
            critical_on_catch: _critical_on_catch
        };
        return module.exports || exports
    }();
    _lgy_lift_callback_4275688 = function(_lgy_json) {
        var config = {};
        try {
            config = function() {
                var module = {};
                var exports = {};
                var _config = {};
                if (typeof debug_config != "undefined") {
                    _config = debug_config
                }
                var config_set_default = function(tag, value, default_value) {
                    if (typeof default_value == "undefined") {
                        default_value = ""
                    }
                    if (!_config.hasOwnProperty(tag)) {
                        if (typeof value === "string" && value.match(/^\[\% .* %\]/)) {
                            value = default_value
                        }
                        if (typeof default_value == "number") {
                            if (typeof value === "string" && value.length === 0) {
                                _config[tag] = default_value
                            } else {
                                _config[tag] = Number(value)
                            }
                        } else if (typeof default_value == "boolean") {
                            _config[tag] = Boolean(value)
                        } else {
                            _config[tag] = value
                        }
                    }
                };
                _config._config_set_default = config_set_default;
                config_set_default("is_debug", "", _config.is_debug || false);
                config_set_default("is_browser_direct", "__1__".indexOf("%]__") > 0, _config.is_browser_direct || false);
                config_set_default("env", "prod", "development");
                config_set_default("log_level", "1", 1);
                config_set_default("log_url", "https://er.logly.co.jp/errors", "");
                config_set_default("active_tab", "custom");
                config_set_default("ad_count", "1");
                config_set_default("ad_width", "100%");
                config_set_default("adspot_id", "4275688", "ADSPOT_ID");
                config_set_default("article_position", "1");
                config_set_default("bandit_count", "0");
                config_set_default("color_pattern", "1");
                config_set_default("disable_cookie_sync", "0");
                config_set_default("display_pattern", "1");
                config_set_default("column_count", "5", 0);
                config_set_default("css_style_prefix", "compass-fit", "logly-lift");
                config_set_default("custom_ad_html", "<div id=\"advs\"><link href=\"https://fonts.googleapis.com/css?family=Open+Sans\" rel=\"stylesheet\"><style type=\"text/css\">/*FILL FROM CSS*/</style><div class=\"advs_box\"><a href=\"{{URL}}\" target=\"_blank\" class=\"advs_link\">  <div class=\"box\">  	<div class=\"img\" style=\"background-image:url('{{IMAGE_URL}}');\"></div>  </div>  <div class=\"desc\">    {{TITLE}}    <br>    <div class=\"adv\"><span>Supported  by {{ADV}}</span></div>  </div></a></div></div><div style=\"display:none\" >{{BEACON_IMG_TAG}}{{IMAGE_TOP}}{{IMAGE_LEFT}}{{IMAGE_WIDTH}}{{IMAGE_HEIGHT}}</div>");
                config_set_default("custom_video_html", "");
                config_set_default("custom_article_html", "", "");
                config_set_default("custom_css", "#advs{\n  font-family: 'Open Sans', sans-serif;\n  border-bottom: 1px solid rgba(0,0,0,.1);\n  color: #016fba;\n}\n#advs div.advs_box {\n  min-height: 105px;\n}\n#advs div.advs_box a.advs_link {\n  text-decoration: none;\n}\n#advs div.advs_box div.box {\n  width: 90px;\n  height: 90px;\n  float: right;\n}\n#advs div.advs_box div.box div.img {\n  position: relative;\n  height: 90px;\n  width: auto;\n  max-width: 90px;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n#advs div.advs_box div.desc {\n  font-size: 16px;\n  font-weight: 600!important;\n  line-height: 22px;\n  color: #016fba;\n  margin: 0px;\n  padding: 0px;\n  cursor: auto;\n}\n#advs div.advs_box div.desc div.adv {\n  font-size: 13px;\n  padding-top: 5px;\n  color: #999;\n}", "");
                config_set_default("custom_js_after", "", "");
                config_set_default("custom_js_before", "", "");
                config_set_default("custom_widget_html", "", "");
                config_set_default("design_type", "0");
                config_set_default("dfp_imp_url", "", "");
                config_set_default("dfp_click_url", "https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsukpUga90FTnNWwcphMoDNDuwCPmuPgmMuEn9XZVo734gpPYjnyILADNzy0l9EC456vYxCjgYJSOTR2OHjKhh0Y3oO9FZyM6c_s4mLz2o_OxSLWLAZUkbn0NlLKASSCC8NSMZTTlszZ89_ni5qsyNfMKM-YGVFUGx6pOhhQG72fmFVsLWSZVMf6DHGmCTu3AX-vcvdFre4S8UsGAzBmYHudC2_b5VGMIq1es7Yqs2MmHCmPRhRyt4Ew3f1nFPeImH_dDJqzOFjWr_Yq0sUCQg&sig=Cg0ArKJSzGpFkAYnsdBoEAE&urlfix=1&adurl=", "");
                config_set_default("disclosure_caption", "広告", "AD");
                config_set_default("disclosure_font_color", "999999");
                config_set_default("disclosure_font_size", "");
                config_set_default("disclosure_position", "left");
                config_set_default("disclosure_position_for_title", "after_right");
                config_set_default("image_display_pattern", "pad", "crop");
                config_set_default("image_position", "left");
                config_set_default("image_sample_pattern", "1");
                config_set_default("image_scale", "100");
                config_set_default("image_height", "90", 90);
                config_set_default("image_width", "120", 120);
                config_set_default("is_disclosure_display", "0", 1);
                config_set_default("is_disclosure_position_for_title", "0", 1);
                config_set_default("is_image_display", "1", 1);
                config_set_default("is_image_left", "1", 1);
                config_set_default("is_label_display", "0", 0);
                config_set_default("is_lead_display", "0", 1);
                config_set_default("is_limit_bandit_count", "0", 1);
                config_set_default("is_site_display", "0", 1);
                config_set_default("is_title_display", "1", 1);
                config_set_default("label_background_color", "5C97FF");
                config_set_default("label_border_position", "bottom");
                config_set_default("label_border_width", "2");
                config_set_default("label_caption", "広告", "Ads by logly");
                config_set_default("label_font_color", "FFFFFF");
                config_set_default("label_font_size", "");
                config_set_default("label_horizontal_position", "left");
                config_set_default("label_vertical_position", "top");
                config_set_default("lead_font_color", "");
                config_set_default("lead_font_size", "");
                config_set_default("lead_max_characters", "120", 40);
                config_set_default("lead_sample_text", "豊富なデータをもつ企業はそこから価値を見出そうとしている。データを活用してビジネスの成果を高めるためには、何を行うべきなのか。");
                config_set_default("no_image_url", "");
                config_set_default("recommend_type", "0");
                config_set_default("recommended_span", "");
                config_set_default("site_font_color", "");
                config_set_default("site_font_size", "");
                config_set_default("site_sample_text", "○○社");
                config_set_default("tile_conf_adpos_raw", "0");
                config_set_default("tile_conf_ad_rand_num", "1");
                config_set_default("title_font_color", "");
                config_set_default("title_font_size", "");
                config_set_default("title_max_characters", "120", 40);
                config_set_default("title_sample_text", "データがビジネスの鍵を握る。分析から見えるものとは？");
                config_set_default("third_party_tags", "ARRAY(0x5445028)");
                config_set_default("url_pattern2", "");
                config_set_default("url_pattern", "");
                config_set_default("url_replacement2", "");
                config_set_default("url_replacement", "");
                config_set_default("watchdog_timeout_msec", "", 4 * 1e3);
                config_set_default("widget_background_color", "");
                config_set_default("widget_font_family", "");
                config_set_default("widget_type", "0");
                config_set_default("widget_width", "100%");
                config_set_default("video_type", "1", 1);
                config_set_default("is_debug", "", 0);
                _config.container_id = _config.css_style_prefix + "-" + _config.adspot_id;
                _config.is_disclosure_position_for_title__after_right = _config.disclosure_position_for_title === "after_right";
                _config.is_disclosure_position_for_title__before = _config.disclosure_position_for_title === "before";
                _config.is_not_disclosure_position_for_title__after_right = _config.disclosure_position_for_title !== "after_right";
                _config.is_not_disclosure_position_and_for_title__before = !(_config.is_disclosure_position_for_title && _config.disclosure_position_for_title === "before");
                _config.is_label_vertical_position__top = _config.is_label_display && _config.label_vertical_position == "top";
                _config.is_label_vertical_position__bottom = _config.is_label_display && _config.label_vertical_position == "bottom";
                _config.is_any_title_lead_site_disclosure_display = _config.is_title_display || _config.is_lead_display || _config.is_site_display || _config.is_disclosure_display;
                _config.is_lead_or_site_display = _config.is_lead_display || _config.is_site_display;
                if (_config.tile_conf_adpos_raw.match(/^\[[\d\s,]*\]$/)) {
                    _config.tile_conf_adpos = eval(_config.tile_conf_adpos_raw)
                } else {
                    _config.tile_conf_adpos = Number(_config.tile_conf_adpos_raw)
                }
                if (!_config.ad_width.match(/^\d+(%|px)$/)) {
                    _config.ad_width = "49%"
                }
                if (!_config.widget_width.match(/^\d+(%|px)$/)) {
                    _config.widget_width = "100%"
                }
                _config.serviceContext = {
                    service: "lift_widget",
                    version: "1.3.6"
                };
                _config.extra = {
                    adspot_id: _config.adspot_id,
                    design_type: _config.design_type,
                    template_name: _config.template_name || "default"
                };
                _config.modules = {};
                module.exports = _config;
                return module.exports || exports
            }();
            config.template_name = "";
            log.init(config);
            (function() {
                var module = {};
                var exports = {};
                var timeout_msec = 4 * 1e3;
                var _logger;
                var _stopped = false;
                var _watchdog_func = function() {
                    if (_stopped) {
                        return
                    }
                    if (_logger) {
                        _logger.critical("watchdog timeout: " + timeout_msec + " msec passed.")
                    }
                    module.exports.watchdog_timer = null
                };
                var _run = function(logger, is_test) {
                    _logger = logger;
                    if (is_test) {
                        timeout_msec = 100
                    }
                    _stopped = false;
                    module.exports.watchdog_timer_var = setTimeout(function() {
                        module.exports.watchdog_func()
                    }, timeout_msec);
                    return module.exports
                };
                var _stop = function() {
                    clearTimeout(module.exports.watchdog_timer_var);
                    module.exports.watchdog_timer_var = null;
                    _stopped = true
                };
                var _init = function(config) {
                    config.modules = config.modules || {};
                    config.modules.watchdog = module.exports;
                    timeout_msec = config.watchdog_timeout_msec || 4 * 1e3;
                    return module.exports
                };
                module.exports = {
                    init: _init,
                    run: _run,
                    stop: _stop,
                    watchdog_func: _watchdog_func,
                    watchdog_timer_var: null
                };
                return module.exports || exports
            })().init(config).run(log);
            (function() {
                var module = {};
                var exports = {};
                var _config;
                var _log;
                var _uaBrowser;
                var _uaDevice;
                var _addEvent;
                var _removeEvent;
                if (window.addEventListener) {
                    _addEvent = function(target, name, fn) {
                        if (!name) {
                            return false
                        }
                        target.addEventListener(name, fn, false)
                    };
                    if (window.removeEventListener) {
                        _removeEvent = function(target, name, fn) {
                            if (!name) {
                                return false
                            }
                            target.removeEventListener(name, fn)
                        }
                    }
                } else if (window.attachEvent) {
                    _addEvent = function(target, name, fn) {
                        if (!name) {
                            return false
                        }
                        target.attachEvent("on" + name, fn)
                    };
                    if (window.detachEvent) {
                        _removeEvent = function(target, name, fn) {
                            if (!name) {
                                return false
                            }
                            target.detachEvent("on" + name, fn)
                        }
                    }
                }
                var _splitBySpace = function(str) {
                    return str.replace(/^\s+|\s+$/, "").replace(/\s+/, " ").split(" ")
                };
                var _addClass = function(tgt, name) {
                    var classes = _splitBySpace(tgt.className);
                    for (var i = 0; i < classes.length; i++) {
                        if (classes[i] === name) {
                            return false
                        }
                    }
                    classes.push(name);
                    tgt.className = classes.join(" ");
                    return true
                };
                var _removeClass = function(tgt, name) {
                    var classes = _splitBySpace(tgt.className);
                    var results = [];
                    for (var i = 0; i < classes.length; i++) {
                        if (classes[i] !== name) {
                            results.push(classes[i])
                        }
                    }
                    tgt.className = results.join(" ");
                    return true
                };
                var _hasClass = function(tgt, name) {
                    var classes = _splitBySpace(tgt.className);
                    for (var i = 0; i < classes.length; i++) {
                        if (classes[i] === name) {
                            return true
                        }
                    }
                    return false
                };
                var _checkUA = function(in_userAgent, in_appVersion) {
                    var userAgent = (in_userAgent || navigator.userAgent).toLowerCase();
                    var appVersion = (in_appVersion || navigator.appVersion).toLowerCase();
                    if (userAgent.indexOf("iphone") > 0 || userAgent.indexOf("ipod") > 0 || userAgent.indexOf("android") > 0) {
                        _uaDevice = "device-mobile"
                    }
                    if (userAgent.indexOf("opera") !== -1) {
                        _uaBrowser = "opera"
                    } else if (userAgent.indexOf("msie") !== -1) {
                        if (appVersion.indexOf("msie 6.") !== -1) {
                            _uaBrowser = "ie6"
                        } else if (appVersion.indexOf("msie 7.") !== -1) {
                            _uaBrowser = "ie7"
                        } else if (appVersion.indexOf("msie 8.") !== -1) {
                            _uaBrowser = "ie8"
                        } else if (appVersion.indexOf("msie 9.") !== -1) {
                            _uaBrowser = "ie9"
                        } else {
                            _uaBrowser = "ie"
                        }
                    } else if (userAgent.indexOf("trident") !== -1) {
                        _uaBrowser = "ie11"
                    } else if (userAgent.indexOf("chrome") !== -1) {
                        _uaBrowser = "chrome"
                    } else if (userAgent.indexOf("safari") !== -1) {
                        _uaBrowser = "safari"
                    } else if (userAgent.indexOf("firefox") !== -1) {
                        _uaBrowser = "firefox"
                    } else {
                        _uaBrowser = false
                    }
                    module.exports.uaDevice = _uaDevice;
                    module.exports.uaBrowser = _uaBrowser
                };
                var _isIE789 = function() {
                    return _uaBrowser === "ie9" || _uaBrowser === "ie8" || _uaBrowser === "ie7"
                };
                var _substr = function(_lgy_str, _lgy_count) {
                    if (_lgy_str && _lgy_count && _lgy_count < _lgy_str.length) {
                        return _lgy_str.substr(0, _lgy_count) + "..."
                    } else {
                        return _lgy_str
                    }
                };
                var _extend = function(destination, source) {
                    for (var property in source) destination[property] = source[property];
                    return destination
                };
                var _splitData = function(json) {
                    var i, len, result = {};
                    result.dataset = [];
                    result.dataset_3pas = [];
                    result.dataset_ad = [];
                    result.dataset_video = [];
                    for (i = 0, len = json.length; i < len; i++) {
                        var item = json[i];
                        if (item.is_article === 1) {
                            result.dataset.push(item)
                        } else {
                            if (item.tag_3pas) {
                                result.dataset_3pas.push(item)
                            } else if (item.is_video) {
                                result.dataset_video.push(item)
                            } else {
                                result.dataset_ad.push(item)
                            }
                        }
                    }
                    return result
                };
                var inFadingClass;
                var _isInFading = function(tgt) {
                    return _hasClass(tgt, inFadingClass)
                };
                var _repeatAction = function(tgt, obj, countObj) {
                    var csstxt = "";
                    countObj.num += countObj.addcnt;
                    if (countObj.direction === "plus") {
                        countObj.propnum += countObj.addcnt
                    } else {
                        countObj.propnum -= countObj.addcnt
                    }
                    if (countObj.num > countObj.countlimit) {
                        csstxt = obj.selector + ": " + obj.end + countObj.unitname + ";";
                        if (obj.selector === "opacity") {
                            csstxt += " " + '-ms-filter: "alpha(opacity=' + obj.end * 100 + ')";' + " filter: alpha( opacity=" + obj.end * 100 + " );"
                        }
                        tgt.style.cssText = csstxt;
                        if (_config.visChecker) {
                            _config.visChecker.check()
                        }
                        _removeClass(tgt, inFadingClass);
                        return true
                    } else {
                        csstxt = obj.selector + ": " + countObj.propnum + countObj.unitname + ";";
                        if (obj.selector === "opacity") {
                            csstxt += " " + '-ms-filter: "alpha(opacity=' + countObj.propnum * 100 + ')";' + " filter: alpha( opacity=" + countObj.propnum * 100 + " );"
                        }
                        tgt.style.cssText = csstxt;
                        setTimeout(function() {
                            _log.critical_on_catch(function() {
                                _repeatAction(tgt, obj, countObj)
                            })
                        }, countObj.repeattime)
                    }
                };
                var _fadeAction = function(tgt, obj) {
                    if (_isInFading(tgt)) {
                        return false
                    }
                    _addClass(tgt, inFadingClass);
                    var countObj = {
                        num: 0,
                        propnum: obj.start,
                        countlimit: Math.abs(obj.start - obj.end),
                        repeattime: obj.duration / 10,
                        unitname: obj.unitname
                    };
                    countObj.addcnt = countObj.countlimit / 10;
                    if (obj.start - obj.end < 0) {
                        countObj.direction = "plus"
                    } else {
                        countObj.direction = "minus"
                    }
                    tgt.style.cssText = obj.selector + ": " + obj.start + ";";
                    _repeatAction(tgt, obj, countObj);
                    return false
                };
                var _getStyleProp = function(elemobj, tgtprop) {
                    if (_uaBrowser === "ie8") {
                        return "24px"
                    } else if (elemobj.currentStyle) {
                        return elemobj.currentStyle[tgtprop]
                    } else {
                        var style = document.defaultView.getComputedStyle(elemobj, null);
                        return style.getPropertyValue(tgtprop)
                    }
                };
                var _setTimeout = function(func, millisec) {
                    return setTimeout(_log.critical_on_catch_func(func), millisec)
                };
                var _init = function(config) {
                    _config = config;
                    _log = config.modules.log;
                    _checkUA();
                    inFadingClass = _config.css_style_prefix + "-utils-fade-action-in-fading";
                    config.modules.utils = module.exports;
                    return module.exports
                };
                module.exports = {
                    addEvent: _addEvent,
                    removeEvent: _removeEvent,
                    addClass: _addClass,
                    removeClass: _removeClass,
                    hasClass: _hasClass,
                    checkUA: _checkUA,
                    isIE789: _isIE789,
                    uaBrowser: _uaBrowser,
                    uaDevice: _uaDevice,
                    substr: _substr,
                    extend: _extend,
                    splitData: _splitData,
                    fadeAction: _fadeAction,
                    isInFading: _isInFading,
                    getStyleProp: _getStyleProp,
                    setTimeout: _setTimeout,
                    init: _init
                };
                return module.exports || exports
            })().init(config);
            (function() {
                var module = {};
                var exports = {};
                var _lgy_config;
                var unescape = function(_lgy_str) {
                    var _lgy_div = document.createElement("div");
                    _lgy_div.innerHTML = _lgy_str;
                    return _lgy_div.textContent || _lgy_div.innerText
                };
                var escape = function(_lgy_str) {
                    return (_lgy_str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
                };
                var _lgy_template_pattern = new RegExp("{{([#|/|^]?)(.+?)}}", "g");
                var template = function(template_str, params) {
                    var skip_to_tag = "";
                    var result = template_str.replace(_lgy_template_pattern, function(match, prefix, tag) {
                        if (skip_to_tag != "" && (prefix != "/" || skip_to_tag != tag)) {
                            return ""
                        }
                        if (prefix === "#") {
                            if (params[tag]) {
                                return ""
                            }
                            skip_to_tag = tag;
                            return "/**--"
                        } else if (prefix === "^") {
                            if (!params[tag]) {
                                return ""
                            }
                            skip_to_tag = tag;
                            return "/**--"
                        } else if (prefix === "/") {
                            if (skip_to_tag == "") {
                                return ""
                            }
                            skip_to_tag = "";
                            return "--**/"
                        } else {
                            if (params.hasOwnProperty(tag)) {
                                return params[tag]
                            } else {
                                return "{{" + tag + "}}"
                            }
                        }
                    });
                    if (_lgy_config.is_debug && skip_to_tag != "") {
                        console.log("mustache template block tag unmatched!");
                        throw "ERROR"
                    }
                    return result.replace(/\/\*\*--[\s\S]*?--\*\*\//g, "")
                };
                var init = function(config) {
                    _lgy_config = config;
                    config.modules.template = module.exports;
                    return module.exports
                };
                module.exports = {
                    init: init,
                    escape: escape,
                    unescape: unescape,
                    process: template
                };
                return module.exports || exports
            })().init(config);
            (function() {
                var module = {};
                var exports = {};
                var _utils, _log, _lgy_item_visibilities = {};
                var _computeFrameOffset = function(win, dims) {
                    dims = {
                        top: dims.top || 0,
                        left: dims.left || 0,
                        right: dims.right || 0,
                        bottom: dims.bottom || 0
                    };
                    if (win !== top) {
                        var rect = win.frameElement.getBoundingClientRect();
                        dims.left += rect.left;
                        dims.right += rect.left;
                        dims.top += rect.top;
                        dims.bottom += rect.top;
                        if (win.parent !== null) {
                            dims = _computeFrameOffset(win.parent, dims)
                        }
                    }
                    return dims
                };
                var _isCrossOriginFrame = function() {
                    try {
                        return !window.top.location.hostname
                    } catch (e) {
                        return true
                    }
                };
                var _isAddedCheckToTop = false;
                var _addCheckToTop = function() {
                    _utils.addEvent(top, "scroll", _check);
                    _utils.addEvent(top, "resize", _check);
                    _utils.addEvent(window, "beforeunload", _removeCheckFromTop);
                    _isAddedCheckToTop = true
                };
                var _removeCheckFromTop = function() {
                    _log.critical_on_catch(function() {
                        if (_isAddedCheckToTop) {
                            _utils.removeEvent(top, "scroll", _check);
                            _utils.removeEvent(top, "resize", _check);
                            _utils.removeEvent(window, "beforeunload", _removeCheckFromTop);
                            _isAddedCheckToTop = false
                        }
                    })
                };
                var _delay_set_status = function(item_id2, data, status) {
                    data.timer = _utils.setTimeout(function() {
                        var data2 = _lgy_item_visibilities[item_id2];
                        data2.status = status;
                        _check()
                    }, 1e3)
                };
                var _do_check = function() {
                    if (!top) {
                        return
                    }
                    var ww = top.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body")[0].clientWidth || 0;
                    var wh = top.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body")[0].clientHeight || 0;
                    var win_area = ww * wh;
                    var is_iframe = window != top;
                    for (var item_id in _lgy_item_visibilities) {
                        var data = _lgy_item_visibilities[item_id];
                        if (data.status == "visible") {
                            continue
                        }
                        var item = data.ref || document.getElementById(item_id);
                        if (!item || !item.getBoundingClientRect) {
                            continue
                        }
                        var rect = item.getBoundingClientRect();
                        if (is_iframe) {
                            rect = _computeFrameOffset(window, rect)
                        }
                        var item_area = (rect.right - rect.left) * (rect.bottom - rect.top);
                        item_area = Math.min(item_area, win_area);
                        var vis_width = 0,
                            vis_height = 0;
                        if (rect.right > 0 && rect.left < ww) {
                            vis_width = Math.min(rect.right, ww) - Math.max(0, rect.left)
                        }
                        if (rect.bottom > 0 && rect.top < wh) {
                            vis_height = Math.min(rect.bottom, wh) - Math.max(0, rect.top)
                        }
                        var vis_area = vis_width * vis_height;
                        if (item_area > 0 && vis_area >= item_area * .5) {
                            if (data.status == "invisible") {
                                data.status = "timer";
                                _delay_set_status(item_id, data, "timeout")
                            } else if (data.status == "timeout") {
                                data.status = "visible";
                                data.timer = null;
                                item.setAttribute("visibility", "visible");
                                if (data.data) {
                                    var url = data.data.viewable_beacon_url;
                                    if (url) {
                                        _call(item, url)
                                    }
                                    var urls = data.data.viewable_beacon_urls;
                                    if (urls) {
                                        for (var i = 0, len = urls.length; i < len; i++) {
                                            _call(item, urls[i])
                                        }
                                    }
                                }
                                _removeCheckFromTop()
                            }
                        } else if (data.status == "timer") {
                            data.status = "invisible";
                            if (data.timer) {
                                clearTimeout(data.timer)
                            }
                            data.timer = null
                        }
                    }
                };
                var _check = function() {
                    _log.critical_on_catch(_do_check)
                };
                var _add = function(item_id, data) {
                    if (data && data.constructor === Array) {
                        var urls = {};
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            if (obj.viewable_beacon_url) {
                                urls[obj.viewable_beacon_url] = 1
                            }
                        }
                        data = {
                            viewable_beacon_urls: []
                        };
                        for (var url in urls) {
                            data.viewable_beacon_urls.push(url)
                        }
                    }
                    var ref = document.getElementById(item_id);
                    _lgy_item_visibilities[item_id] = {
                        status: "invisible",
                        timer: null,
                        data: data,
                        ref: ref
                    }
                };
                var _call = function(item, url) {
                    var dummy = document.createElement("div");
                    dummy.innerHTML = '<img src="' + url + '" width="1" height="1" style="position: absolute; width: 1px; height: 1px; top: -32767px; left: -32767px;">';
                    item.appendChild(dummy.firstChild)
                };
                var _start = function() {
                    if (window != top && _isCrossOriginFrame()) {
                        return
                    }
                    _addCheckToTop();
                    _check()
                };
                var _init = function(config) {
                    _utils = config.modules.utils;
                    _log = config.modules.log;
                    config.visChecker = config.modules.viewable_impression = module.exports;
                    return module.exports
                };
                module.exports = {
                    _getdata: function() {
                        return _lgy_item_visibilities
                    },
                    _cleandata: function() {
                        _lgy_item_visibilities = {}
                    },
                    _removeCheckFromTop: _removeCheckFromTop,
                    init: _init,
                    start: _start,
                    add: _add,
                    check: _check
                };
                return module.exports || exports
            })().init(config);
            (function() {
                var module = {};
                var exports = {};
                var _lgy_item_jstrackers = {};
                var _add = function(item_id, data) {
                    if (data && data.constructor === Array) {
                        var urls = {};
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            if (obj.jstracker_url) {
                                urls[obj.jstracker_url] = 1
                            }
                        }
                        data = {
                            jstracker_urls: []
                        };
                        for (var url in urls) {
                            data.jstracker_urls.push(url)
                        }
                    }
                    _lgy_item_jstrackers[item_id] = {
                        data: data
                    }
                };
                var _call = function(item, url) {
                    var tracker = document.createElement("script");
                    tracker.type = "text/javascript";
                    tracker.async = true;
                    tracker.src = url;
                    item.appendChild(tracker)
                };
                var _start = function() {
                    for (var item_id in _lgy_item_jstrackers) {
                        var data = _lgy_item_jstrackers[item_id];
                        var item = document.getElementById(item_id);
                        if (data.data) {
                            var urls = data.data.jstracker_urls;
                            if (urls) {
                                for (var i = 0, len = urls.length; i < len; i++) {
                                    _call(item, urls[i])
                                }
                            }
                        }
                    }
                };
                var _init = function(config) {
                    config.jstChecker = config.modules.jstracker = module.exports;
                    return module.exports
                };
                module.exports = {
                    _data: _lgy_item_jstrackers,
                    _getdata: function() {
                        return _lgy_item_jstrackers
                    },
                    init: _init,
                    start: _start,
                    add: _add
                };
                return module.exports || exports
            })().init(config);
            (function() {
                var module = {};
                var exports = {};
                var _lgy_item_video_inserts = {};
                var _add = function(item_id, data) {
                    if (data && data.constructor === Array) {
                        var items = {};
                        for (var i = 0; i < data.length; i++) {
                            var obj = data[i];
                            if (obj.video_js) {
                                items[obj.video_js] = 1
                            }
                        }
                        data = {
                            video_js_contens: []
                        };
                        for (var item in items) {
                            data.video_js_contens.push(item)
                        }
                    }
                    _lgy_item_video_inserts[item_id] = {
                        data: data
                    }
                };
                var _call = function(item, content) {
                    var tracker = document.createElement("script");
                    tracker.innerHTML = content;
                    item.appendChild(tracker)
                };
                var _start = function() {
                    for (var item_id in _lgy_item_video_inserts) {
                        var data = _lgy_item_video_inserts[item_id];
                        var item = document.getElementById(item_id);
                        if (data.data) {
                            var contents = data.data.video_js_contens;
                            if (contents) {
                                for (var i = 0, len = contents.length; i < len; i++) {
                                    _call(item, contents[i])
                                }
                            }
                        }
                    }
                };
                var _init = function(config) {
                    config.videoJs = config.modules.video_js = module.exports;
                    return module.exports
                };
                module.exports = {
                    _data: _lgy_item_video_inserts,
                    _getdata: function() {
                        return _lgy_item_video_inserts
                    },
                    init: _init,
                    start: _start,
                    add: _add
                };
                return module.exports || exports
            })().init(config);
            var template = config.modules.template;
            config.widget_tmpl = function() {
                var module = {};
                var exports = {};
                module.exports = {
                    body: '\x3c!--[if lte IE 9 ]><div id="{{css_style_prefix}}-widget" class="ie-lte9"><![endif]--\x3e\n' + '\x3c!--[if (gt IE 9)|!(IE)]>\x3c!--\x3e<div id="{{css_style_prefix}}-widget">\x3c!--<![endif]--\x3e\n' + "  {{#is_label_vertical_position__top}}\n" + '    <div id="{{css_style_prefix}}-widget-label">\n' + '      <div id="{{css_style_prefix}}-widget-label-caption">\n' + '        <a href="https://www.logly.co.jp/privacy.html" target="_blank">{{label_caption}}</a>\n' + "      </div>\n" + '      <div class="{{css_style_prefix}}-clear"></div>\n' + "    </div>\n" + "  {{/is_label_vertical_position__top}}\n" + '  <div id="{{css_style_prefix}}-widget-content">\n' + "    {{ADS}}\n" + '    <div class="{{css_style_prefix}}-clear"></div>\n' + "  </div>\n" + "  {{#is_label_vertical_position__bottom}}\n" + '    <div id="{{css_style_prefix}}-widget-label">\n' + '      <div id="{{css_style_prefix}}-widget-label-caption">\n' + '        <a href="https://www.logly.co.jp/privacy.html">{{label_caption}}</a>\n' + "      </div>\n" + '      <div class="{{css_style_prefix}}-clear"></div>\n' + "    </div>\n" + "  {{/is_label_vertical_position__bottom}}\n" + "</div>\n" + "\n" + ""
                };
                return module.exports || exports
            }().body;
            config.ad_tmpl = function() {
                var module = {};
                var exports = {};
                module.exports = {
                    body: '<div class="{{css_style_prefix}}-ad" id="{{ITEM_ID}}">\n' + '  <div class="{{css_style_prefix}}-ad-inner">\n' + "    {{#is_image_display}}\n" + '      <div class="{{css_style_prefix}}-ad-image">\n' + '        <div class="{{css_style_prefix}}-ad-image-inner">\n' + "          <a href={{URL}} target={{TARGET}}>\n" + '            <img src={{IMAGE_URL}} width={{IMAGE_WIDTH}} height={{IMAGE_HEIGHT}} style="width: {{IMAGE_WIDTH}}px; height: {{IMAGE_HEIGHT}}px; top: {{IMAGE_TOP}}px; left: {{IMAGE_LEFT}}px;"/>\n' + "          </a>\n" + "        </div>\n" + "      </div>\n" + "    {{/is_image_display}}\n" + "    {{#is_any_title_lead_site_disclosure_display}}\n" + '      <div class="{{css_style_prefix}}-ad-content">\n' + '        <div class="{{css_style_prefix}}-ad-content-inner">\n' + "          {{#is_disclosure_display}}\n" + "          {{#is_disclosure_position_for_title}}\n" + "          {{#is_disclosure_position_for_title__before}}\n" + '            <div class="{{css_style_prefix}}-ad-disclosure">\n' + '              <a href="https://www.logly.co.jp/privacy.html" target="_blank">{{disclosure_caption}}</a>\n' + "              &nbsp;\n" + "            </div>\n" + "          {{/is_disclosure_position_for_title__before}}\n" + "          {{/is_disclosure_position_for_title}}\n" + "          {{/is_disclosure_display}}\n" + "          {{#is_title_display}}\n" + '            <div class="{{css_style_prefix}}-ad-title">\n' + "              <a href={{URL}} target={{TARGET}}>{{TITLE}}</a>\n" + "            </div>\n" + "          {{/is_title_display}}\n" + "          {{#is_lead_or_site_display}}\n" + '            <div class="{{css_style_prefix}}-ad-body">\n' + "              {{#is_lead_display}}\n" + '                <span class="{{css_style_prefix}}-ad-lead">{{LEAD}}</span>\n' + "              {{/is_lead_display}}\n" + "              {{#is_site_display}}\n" + '                <span class="{{css_style_prefix}}-ad-site">(</span><a href={{URL}} target={{TARGET}} class="{{css_style_prefix}}-ad-site">{{ADV}}</a><span class="{{css_style_prefix}}-ad-site">)</span>\n' + "              {{/is_site_display}}\n" + "            </div>\n" + "          {{/is_lead_or_site_display}}\n" + "          {{#is_disclosure_display}}\n" + "          {{#is_not_disclosure_position_and_for_title__before}}\n" + '            <div class="{{css_style_prefix}}-ad-disclosure">\n' + "              {{#is_disclosure_position_for_title}}\n" + "              {{#is_not_disclosure_position_for_title__after_right}}\n" + "                &nbsp;\n" + "              {{/is_not_disclosure_position_for_title__after_right}}\n" + "              {{/is_disclosure_position_for_title}}\n" + '              <a href="https://www.logly.co.jp/privacy.html" target="_blank">{{disclosure_caption}}</a>\n' + "            </div>\n" + "          {{/is_not_disclosure_position_and_for_title__before}}\n" + "          {{/is_disclosure_display}}\n" + "          {{BEACON_IMG_TAG}}\n" + "        </div>\n" + "      </div>\n" + "    {{/is_any_title_lead_site_disclosure_display}}\n" + "  </div>\n" + "</div>\n" + "\n" + ""
                };
                return module.exports || exports
            }().body;
            config.ad_video_tmpl = function() {
                var module = {};
                var exports = {};
                module.exports = {
                    body: '<div class="{{css_style_prefix}}-widget-video-content">\n' + '  <div class="{{css_style_prefix}}-video-wrap {{css_style_prefix}}-video-type-{{VIDEO_TYPE}}">\n' + '    <div class="{{css_style_prefix}}-video-header">\n' + '      <a class="{{css_style_prefix}}-video-headerlink" href={{URL}}>\n' + '        <div class="{{css_style_prefix}}-video-title">{{TITLE}}</div>\n' + '        <div class="{{css_style_prefix}}-video-adv">{{ADV}}</div>\n' + '        <div class="{{css_style_prefix}}-video-cv"></div>\n' + "      </a>\n" + "    </div>\n" + '    <div id="{{css_style_prefix}}-video" class="{{css_style_prefix}}-video" data-url={{URL}}></div>\n' + '    <div class="{{css_style_prefix}}-video-footer">\n' + '      <a class="{{css_style_prefix}}-video-footerlink" href={{URL}}>\n' + '        <div class="{{css_style_prefix}}-video-title">{{TITLE}}</div>\n' + '        <div class="{{css_style_prefix}}-video-adv">{{ADV}}</div>\n' + '        <div class="{{css_style_prefix}}-video-cv"></div>\n' + "      </a>\n" + "    </div>\n" + "  </div>\n" + "  {{BEACON_IMG_TAG}}\n" + "</div>\n" + "\n" + ""
                };
                return module.exports || exports
            }().body;
            config.article_tmpl = function() {
                var module = {};
                var exports = {};
                module.exports = {
                    body: '<div class="{{css_style_prefix}}-ad {{css_style_prefix}}-article" id="{{ITEM_ID}}">\n' + '  <div class="{{css_style_prefix}}-ad-inner">\n' + "    {{#is_image_display}}\n" + '      <div class="{{css_style_prefix}}-ad-image">\n' + '        <div class="{{css_style_prefix}}-ad-image-inner">\n' + "          <a href={{URL}} target={{TARGET}}>\n" + '            <img src={{IMAGE_URL}} width={{IMAGE_WIDTH}} height={{IMAGE_HEIGHT}} style="width: {{IMAGE_WIDTH}}px; height: {{IMAGE_HEIGHT}}px; top: {{IMAGE_TOP}}px; left: {{IMAGE_LEFT}}px;"/>\n' + "          </a>\n" + "        </div>\n" + "      </div>\n" + "    {{/is_image_display}}\n" + "    {{#is_any_title_lead_site_disclosure_display}}\n" + '      <div class="{{css_style_prefix}}-ad-content">\n' + '        <div class="{{css_style_prefix}}-ad-content-inner">\n' + "          {{#is_title_display}}\n" + '            <div class="{{css_style_prefix}}-ad-title">\n' + "              <a href={{URL}} target={{TARGET}}>{{TITLE}}</a>\n" + "            </div>\n" + "          {{/is_title_display}}\n" + "          {{#is_lead_or_site_display}}\n" + '            <div class="{{css_style_prefix}}-ad-body">\n' + "              {{#is_lead_display}}\n" + '                <span class="{{css_style_prefix}}-ad-lead">{{LEAD}}</span>\n' + "              {{/is_lead_display}}\n" + "              {{#is_site_display}}\n" + '                <span class="{{css_style_prefix}}-ad-site">(</span><a href={{URL}} target={{TARGET}} class="{{css_style_prefix}}-ad-site">{{SITE}}</a><span class="{{css_style_prefix}}-ad-site">)</span>\n' + "              {{/is_site_display}}\n" + "            </div>\n" + "          {{/is_lead_or_site_display}}\n" + "          {{BEACON_IMG_TAG}}\n" + "        </div>\n" + "      </div>\n" + "    {{/is_any_title_lead_site_disclosure_display}}\n" + "  </div>\n" + "</div>\n" + "\n" + ""
                };
                return module.exports || exports
            }().body;
            config.css_tmpl = template.unescape(function() {
                var module = {};
                var exports = {};
                module.exports = {
                    body: "#{{container_id}} #{{css_style_prefix}}-widget {\n" + "  {{#widget_width}}\n" + "  width: {{widget_width}};\n" + "  {{/widget_width}}\n" + "  {{#widget_background_color}}\n" + "  background-color: #{{widget_background_color}};\n" + "  {{/widget_background_color}}\n" + "  {{#widget_font_family}}\n" + "  font-family: {{widget_font_family}};\n" + "  {{/widget_font_family}}\n" + "  clear: both;\n" + "}\n" + "\n" + "#{{container_id}} #{{css_style_prefix}}-widget-label {\n" + "  border-{{label_border_position}}-style: solid;\n" + "  border-{{label_border_position}}-width: {{label_border_width}}px;\n" + "  {{#label_background_color}}\n" + "  border-{{label_border_position}}-color: #{{label_background_color}};\n" + "  {{/label_background_color}}\n" + "}\n" + "\n" + "#{{container_id}} #{{css_style_prefix}}-widget-label-caption {\n" + "  padding: 5px 10px;\n" + "  {{#label_background_color}}\n" + "  background-color: #{{label_background_color}};\n" + "  {{/label_background_color}}\n" + "  float: {{label_horizontal_position}};\n" + "}\n" + "\n" + "#{{container_id}} #{{css_style_prefix}}-widget-label-caption a {\n" + "  {{#label_font_color}}\n" + "  color: #{{label_font_color}};\n" + "  {{/label_font_color}}\n" + "  {{#label_font_size}}\n" + "  font-size: {{label_font_size}}px;\n" + "  {{/label_font_size}}\n" + "  text-decoration: none;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-ad {\n" + "  display: inline-block;\n" + "  zoom: 1;\n" + "  vertical-align:top;\n" + "  {{#ad_width}}\n" + "  width: {{ad_width}};\n" + "  {{/ad_width}}\n" + "  margin: 5px 0;\n" + "  padding: 0;\n" + "}\n" + "\n" + "{{#is_image_left}}\n" + "#{{container_id}} .{{css_style_prefix}}-ad-inner {\n" + "  display: table;\n" + "  width: 100%;\n" + "}\n" + "{{/is_image_left}}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-ad-image {\n" + "  {{#is_image_left}}\n" + "  display: table-cell;\n" + "  {{/is_image_left}}\n" + "  vertical-align: top;\n" + "  width: {{image_width}}px;\n" + "  height: {{image_height}}px;\n" + "  padding-right: {{#is_image_left}}5px{{/is_image_left}}{{^is_image_left}}0{{/is_image_left}};\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-ad-image-inner {\n" + "  position: relative;\n" + "  overflow: hidden;\n" + "  width: {{image_width}}px;\n" + "  height: {{image_height}}px;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-ad-image-inner img {\n" + "  position: absolute;\n" + "  max-width: none;\n" + "  max-height: none;\n" + "  border-style:none;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-ad-content {\n" + "  {{#is_image_left}}\n" + "  display: table-cell;\n" + "  position: relative;\n" + "  height: 100%;\n" + "  vertical-align: top;\n" + "  {{/is_image_left}}\n" + "  word-break: break-all;\n" + "}\n" + "\n" + "{{#is_image_left}}\n" + "@-moz-document url-prefix() {\n" + "  #{{container_id}} .{{css_style_prefix}}-ad-content-inner {\n" + "    position: relative;\n" + "    height: 100%;\n" + "  }\n" + "}\n" + "{{/is_image_left}}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-ad-title {\n" + "  {{#is_disclosure_position_for_title}}\n" + "  {{#is_disclosure_position_for_title__after_right}}\n" + "  float: left;\n" + "  {{/is_disclosure_position_for_title__after_right}}\n" + "  {{^is_disclosure_position_for_title__after_right}}\n" + "  display: inline;\n" + "  {{/is_disclosure_position_for_title__after_right}}\n" + "  {{/is_disclosure_position_for_title}}\n" + "  {{#title_font_size}}\n" + "  font-size: {{title_font_size}}px;\n" + "  {{/title_font_size}}\n" + "}\n" + "\n" + "{{#title_font_color}}\n" + "#{{container_id}} .{{css_style_prefix}}-ad-title a {\n" + "  color: #{{title_font_color}};\n" + "}\n" + "{{/title_font_color}}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-ad-lead {\n" + "  {{#lead_font_size}}\n" + "  font-size: {{lead_font_size}}px;\n" + "  {{/lead_font_size}}\n" + "  {{#lead_font_color}}\n" + "  color: #{{lead_font_color}};\n" + "  {{/lead_font_color}}\n" + "}\n" + "\n" + "{{#lead_font_color}}\n" + "#{{container_id}} span.{{css_style_prefix}}-ad-site {\n" + "  color: #{{lead_font_color}};\n" + "}\n" + "{{/lead_font_color}}\n" + "\n" + "#{{container_id}} a.{{css_style_prefix}}-ad-site {\n" + "  {{#site_font_size}}\n" + "  font-size: {{site_font_size}}px;\n" + "  {{/site_font_size}}\n" + "  {{#site_font_color}}\n" + "  color: #{{site_font_color}};\n" + "  {{/site_font_color}}\n" + "}\n" + "\n" + "{{#is_image_left}}\n" + "#{{container_id}} .{{css_style_prefix}}-ad-body {\n" + "  margin-bottom: 20px;\n" + "}\n" + "{{/is_image_left}}\n" + "\n" + "{{#is_disclosure_position_for_title}}\n" + "#{{container_id}} .{{css_style_prefix}}-ad-body {\n" + "  {{#is_disclosure_position_for_title__after_right}}\n" + "  float: left;\n" + "  {{/is_disclosure_position_for_title__after_right}}\n" + "  {{^is_disclosure_position_for_title__after_right}}\n" + "  display: inline;\n" + "  {{/is_disclosure_position_for_title__after_right}}\n" + "}\n" + "{{/is_disclosure_position_for_title}}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-ad-disclosure {\n" + "  {{#is_image_left}}\n" + "  width: 100%;\n" + "  height: 20px;\n" + "  position: absolute;\n" + "  bottom: 0;\n" + "  {{/is_image_left}}\n" + "  {{#is_disclosure_position_for_title}}\n" + "  {{#is_disclosure_position_for_title__after_right}}\n" + "  float: right;\n" + "  {{/is_disclosure_position_for_title__after_right}}\n" + "  {{^is_disclosure_position_for_title__after_right}}\n" + "  display: inline;\n" + "  {{/is_disclosure_position_for_title__after_right}}\n" + "  {{/is_disclosure_position_for_title}}\n" + "  {{^is_disclosure_position_for_title}}\n" + "  text-align: {{disclosure_position}};\n" + "  {{/is_disclosure_position_for_title}}\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-ad-disclosure a {\n" + "  {{#disclosure_font_size}}\n" + "  font-size: {{disclosure_font_size}}px;\n" + "  {{/disclosure_font_size}}\n" + "  {{#disclosure_font_color}}\n" + "  color: #{{disclosure_font_color}};\n" + "  {{/disclosure_font_color}}\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-clear {\n" + "  clear: both;\n" + "}\n" + "\n" + "{{#is_image_left}}\n" + "#{{container_id}} .ie-lte9 .{{css_style_prefix}}-ad-image {\n" + "  float: left;\n" + "}\n" + "\n" + "#{{container_id}} .ie-lte9 .{{css_style_prefix}}-ad-body{\n" + "  margin-bottom:0;\n" + "}\n" + "\n" + "#{{container_id}} .ie-lte9 .{{css_style_prefix}}-ad-disclosure{\n" + "  position: relative;\n" + "}\n" + "{{/is_image_left}}\n" + "\n" + "#{{container_id}} .ie-lte9 .{{css_style_prefix}}-ad {\n" + "  display: inline;\n" + "}\n" + "\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit,\n" + "#{{container_id}} .{{css_style_prefix}}-credit {\n" + "  clear:both;\n" + "  padding:0 8px 10px;\n" + "  text-align:right;\n" + "}\n" + "\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit {\n" + "  padding-right:0;\n" + "}\n" + "\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit a,\n" + "#{{container_id}} .{{css_style_prefix}}-credit a {\n" + "  color: #999;\n" + "  text-decoration: none;\n" + "  font-size:13px;\n" + "}\n" + "\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit a .{{css_style_prefix}}-credit-logo,\n" + "#{{container_id}} .{{css_style_prefix}}-credit a .{{css_style_prefix}}-credit-logo {\n" + "  display:inline-block;\n" + '  background: url("//cdn.logly.co.jp/spritesource-s5c12c753d2.png") no-repeat 0 -103px;\n' + "  color:transparent;\n" + "  margin-left:3px;\n" + "  width:36px;\n" + "  height:14px;\n" + "  vertical-align:middle;\n" + "  *display:inline;\n" + "  *zoom:1;\n" + "}\n" + "\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit a:hover .{{css_style_prefix}}-credit-logo,\n" + "#{{container_id}} .{{css_style_prefix}}-credit a:hover .{{css_style_prefix}}-credit-logo {\n" + '  background: url("//cdn.logly.co.jp/spritesource-s5c12c753d2.png") no-repeat 0 -117px;\n' + "}\n" + "\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit2 a .{{css_style_prefix}}-credit-logo,\n" + "#{{css_style_prefix}}-{{adspot_id}} .{{css_style_prefix}}-credit2 a .{{css_style_prefix}}-credit-logo,\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit2 a:hover .{{css_style_prefix}}-credit-logo,\n" + "#{{css_style_prefix}}-{{adspot_id}} .{{css_style_prefix}}-credit2 a:hover .{{css_style_prefix}}-credit-logo,\n" + "#{{css_style_prefix}}-modal-contents-inner h3 {\n" + "  background-image: url('https://cdn.logly.co.jp/spritesource-s6c20d2e001.png');\n" + "  background-repeat: no-repeat;\n" + "}\n" + "\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit2 a .{{css_style_prefix}}-credit-logo,\n" + "#{{css_style_prefix}}-{{adspot_id}} .{{css_style_prefix}}-credit2 a .{{css_style_prefix}}-credit-logo {\n" + "  background-position: 0 -110px;\n" + "  height: 14px;\n" + "  width: 68px;\n" + "}\n" + "\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit2 a:hover .{{css_style_prefix}}-credit-logo,\n" + "#{{css_style_prefix}}-{{adspot_id}} .{{css_style_prefix}}-credit2 a:hover .{{css_style_prefix}}-credit-logo {\n" + "  background-position: 0 -196px;\n" + "  height: 14px;\n" + "  width: 68px;\n" + "}\n" + "#{{css_style_prefix}}-modal-contents-inner h3 {\n" + "  background-position: 0 -232px;\n" + "  height: 40px;\n" + "  width: 194px;\n" + "}\n" + "\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit2 {\n" + "  padding-right: 0;\n" + "}\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit2,\n" + "#{{css_style_prefix}}-{{adspot_id}} .{{css_style_prefix}}-credit2 {\n" + "  clear: both;\n" + "  padding: 0 8px 10px;\n" + "  text-align: right;\n" + "}\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit2 a,\n" + "#{{css_style_prefix}}-{{adspot_id}} .{{css_style_prefix}}-credit2 a {\n" + "  color: #999;\n" + "  text-decoration: none;\n" + "  font-size: 11px;\n" + "}\n" + "#{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit2 a .{{css_style_prefix}}-credit-logo,\n" + "#{{css_style_prefix}}-{{adspot_id}} .{{css_style_prefix}}-credit2 a .{{css_style_prefix}}-credit-logo {\n" + "  display: inline-block;\n" + "  color: transparent;\n" + "  margin-left: 3px;\n" + "  vertical-align: middle;\n" + "  margin-top: -2px;\n" + "}\n" + "@media only screen and (-webkit-min-device-pixel-ratio: 2),\n" + "only screen and (min-device-pixel-ratio: 2),\n" + "(min-resolution: 2dppx) {\n" + "  #{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit2 a .{{css_style_prefix}}-credit-logo,\n" + "  #{{css_style_prefix}}-{{adspot_id}} .{{css_style_prefix}}-credit2 a .{{css_style_prefix}}-credit-logo {\n" + "    display: inline-block;\n" + "    background-position: 0 -62px;\n" + "    height: 14px;\n" + "    width: 68px;\n" + "    background-size: 106px 136px;\n" + "  }\n" + "}\n" + "@media only screen and (-webkit-min-device-pixel-ratio: 2),\n" + "only screen and (min-device-pixel-ratio: 2),\n" + "(min-resolution: 2dppx) {\n" + "  #{{css_style_prefix}}-toaster .{{css_style_prefix}}-credit2 a:hover .{{css_style_prefix}}-credit-logo,\n" + "  #{{css_style_prefix}}-{{adspot_id}} .{{css_style_prefix}}-credit2 a:hover .{{css_style_prefix}}-credit-logo {\n" + "    display: inline-block;\n" + "    background-position: 0 -62px;\n" + "    height: 14px;\n" + "    width: 68px;\n" + "    background-size: 106px 136px;\n" + "  }\n" + "}\n" + "\n" + ""
                };
                return module.exports || exports
            }().body);
            config.css_custom_tmpl = template.unescape(function() {
                var module = {};
                var exports = {};
                module.exports = {
                    body: "{{#custom_css}}\n" + "  {{custom_css}}\n" + "{{/custom_css}}\n" + "\n" + ""
                };
                return module.exports || exports
            }().body);
            config.css_video_main_tmpl = template.unescape(function() {
                var module = {};
                var exports = {};
                module.exports = {
                    body: "#{{container_id}} .{{css_style_prefix}}-widget-video-content {\n" + "  padding: 20px;\n" + "  background: #fff;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video {\n" + "  width: auto;\n" + "  height: auto;\n" + "  margin: 0 -20px;\n" + "  position: relative;\n" + "  overflow: hidden;\n" + "  box-sizing: border-box;\n" + "  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.17);\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-header {\n" + "  padding-bottom: 15px;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-footer {\n" + "  padding-top: 15px;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-header .{{css_style_prefix}}-video-headerlink,\n" + "#{{container_id}} .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-footerlink {\n" + "  display: block;\n" + "  text-decoration: none;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-header .{{css_style_prefix}}-video-headerlink::after,\n" + "#{{container_id}} .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-footerlink::after {\n" + '  content: "";\n' + "  display: block;\n" + "  clear:both;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-title {\n" + "  font-size: 16px;\n" + "  line-height: 25px;\n" + "  font-weight: bold;\n" + "  margin-bottom: 8px;\n" + "  color: #333;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-adv {\n" + "  font-size: 11px;\n" + "  line-height: 1;\n" + "  color: #CCC;\n" + "  text-align: right;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-cv {\n" + "  display: block;\n" + "  text-align: center;\n" + "  background: #4285f4;\n" + "  color: #FFF;\n" + "  border-radius: 3px;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-cv:hover {\n" + "  opacity: 0.85;\n" + "}\n" + "\n" + ""
                };
                return module.exports || exports
            }().body);
            config.css_video_type1_tmpl = template.unescape(function() {
                var module = {};
                var exports = {};
                module.exports = {
                    body: "/* type-1 */\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-1 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-title,\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-1 .{{css_style_prefix}}-video-header .{{css_style_prefix}}-video-adv {\n" + "  display: none;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-1 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-adv {\n" + "  text-align: left;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-1 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-cv {\n" + "  float: right;\n" + "  padding: 3px 20px;\n" + "  line-height: 1.8;\n" + "  font-size: 14px;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-1 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-cv::before {\n" + '  content: "詳細を見る";\n' + "}\n" + "\n" + ""
                };
                return module.exports || exports
            }().body);
            config.css_video_type2_tmpl = template.unescape(function() {
                var module = {};
                var exports = {};
                module.exports = {
                    body: "/* type-2 */\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-2 .{{css_style_prefix}}-video-footer {\n" + "  overflow: hidden;\n" + "  padding-bottom: 20px;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-2 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-title {\n" + "  display: none;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-2 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-adv {\n" + "  display: none;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-2 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-cv {\n" + "  margin: 0 auto;\n" + "  font-size: 16px;\n" + "  padding: 15px 20px;\n" + "  margin: -15px -20px -20px;\n" + "  border-radius: 0;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-2 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-cv::before {\n" + '  content: "» 詳細はこちら";\n' + "}\n" + "\n" + ""
                };
                return module.exports || exports
            }().body);
            config.css_video_type3_tmpl = template.unescape(function() {
                var module = {};
                var exports = {};
                module.exports = {
                    body: "/* type-3 */\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-3 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-title,\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-3 .{{css_style_prefix}}-video-header .{{css_style_prefix}}-video-adv {\n" + "  display: none;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-3 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-adv {\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-3 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-cv {\n" + "  display: none;\n" + "}\n" + "\n" + ""
                };
                return module.exports || exports
            }().body);
            config.css_video_type4_tmpl = template.unescape(function() {
                var module = {};
                var exports = {};
                module.exports = {
                    body: "/* type-4 */\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-4 .{{css_style_prefix}}-video-header {\n" + "  display: none;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-4 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-adv {\n" + "  text-align: left;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-4 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-cv {\n" + "  float: right;\n" + "  padding: 3px 20px;\n" + "  line-height: 1.8;\n" + "  font-size: 14px;\n" + "}\n" + "\n" + "#{{container_id}} .{{css_style_prefix}}-video-type-4 .{{css_style_prefix}}-video-footer .{{css_style_prefix}}-video-cv::before {\n" + '  content: "詳細を見る";\n' + "}\n" + "\n" + ""
                };
                return module.exports || exports
            }().body);
            (function() {
                var module = {};
                var exports = {};
                var _visChecker;
                var _jstChecker;
                var _vidChecker;
                var _config, _utils, _log, _watchdog, _json, _template_name, _css_style_prefix, _container_id, _use_template, _lgy_html, _self;
                var _amp_render_start = function() {
                    if (!window.context) {
                        return
                    }
                    if ("renderStart" in window.context) {
                        window.context.renderStart()
                    }
                };
                var _amp_no_content_available = function() {
                    if (!window.context) {
                        return
                    }
                    if ("noContentAvailable" in window.context) {
                        window.context.noContentAvailable()
                    }
                };
                var _add_third_party_tags = function(in_json) {
                    if (_config.third_party_tags) {
                        var JSON = window.JSON || {
                            parse: function(str) {
                                if (str === "") str = '""';
                                return eval(str)
                            }
                        };
                        var third_party_tags = JSON.parse(_config.third_party_tags);
                        in_json = in_json.concat(third_party_tags)
                    }
                    return in_json
                };
                var _custom_js_before = function() {
                    if (_config.custom_js_before) {
                        var code = "(function(json, modules) {\n" + _config.custom_js_before + "\n})(_json, {visChecker: _visChecker });";
                        eval(code)
                    }
                };
                var _custom_js_after = function() {
                    if (_config.custom_js_after) {
                        var code = "(function(json, modules) {\n" + _config.custom_js_after + "\n})(_json, { visChecker: _visChecker });";
                        eval(code)
                    }
                };
                var _call_dfp_beacon = function() {
                    if (_config.dfp_imp_url) {
                        var _img = new Image;
                        _img.src = _config.dfp_imp_url
                    }
                };
                var _construct_css = function() {
                    var css_tmpl;
                    var add_css;
                    css_tmpl = template.process(_config.css_tmpl, _config);
                    add_css = _video_main_css();
                    if (add_css) {
                        css_tmpl = css_tmpl + add_css
                    }
                    add_css = _video_type_css();
                    if (add_css) {
                        css_tmpl = css_tmpl + add_css
                    }
                    if (_config.custom_css) {
                        css_tmpl = css_tmpl + template.process(_config.css_custom_tmpl, _config)
                    }
                    _construct_css_base(css_tmpl)
                };
                var _construct_css_base = function(css) {
                    var style_node = document.createElement("style");
                    style_node.type = "text/css";
                    if (_utils.uaBrowser === "ie8") {
                        document.getElementsByTagName("head")[0].appendChild(style_node)
                    }
                    if (style_node.styleSheet) {
                        style_node.styleSheet.cssText = css
                    } else {
                        style_node.appendChild(document.createTextNode(css))
                    }
                    if (_utils.uaBrowser !== "ie8") {
                        document.getElementsByTagName("head")[0].appendChild(style_node)
                    }
                };
                var _video_main_css = function() {
                    var design_type = parseInt(_config.design_type);
                    if (design_type === 3 || design_type === 4 || design_type === 7) {
                        return
                    }
                    return template.process(_config.css_video_main_tmpl, _config)
                };
                var _video_type_css = function() {
                    var design_type = parseInt(_config.design_type);
                    var type_css = _config.css_video_type1_tmpl;
                    if (design_type === 3 || design_type === 4 || design_type === 7) {
                        return
                    }
                    switch (parseInt(_config.video_type)) {
                        case 2:
                            type_css = _config.css_video_type2_tmpl;
                            break;
                        case 3:
                            type_css = _config.css_video_type3_tmpl;
                            break;
                        case 4:
                            type_css = _config.css_video_type4_tmpl;
                            break
                    }
                    return template.process(type_css, _config)
                };
                var _construct_click_handler = function(lift_container) {
                    var event_name;
                    if ("ontouchstart" in window) {
                        event_name = "ontouchstart"
                    } else if ("onmousedown" in window) {
                        event_name = "onmousedown"
                    } else {
                        event_name = "onclick"
                    }
                    var links;
                    if (_template_name === "toaster") {
                        var toaster_contents = document.getElementById(_css_style_prefix + "-toaster-contents");
                        links = toaster_contents.getElementsByTagName("a")
                    } else {
                        links = lift_container.getElementsByTagName("a")
                    }
                    for (var i = links.length; i--;) {
                        var _lgy_link = links[i];
                        var _lgy_article_link = _config.modules.construct.article_links[_lgy_link.href];
                        var _lgy_touch_event;
                        if (_lgy_article_link) {
                            _lgy_link.setAttribute("data-click-url", _lgy_article_link.click_url);
                            if (_lgy_article_link.click_beacon) {
                                _lgy_touch_event = "new Image().src = this.getAttribute('data-click-url');"
                            } else {
                                _lgy_touch_event = "this.setAttribute('href',this.getAttribute('data-click-url'));"
                            }
                            _lgy_link.setAttribute(event_name, _lgy_touch_event);
                            if (event_name === "ontouchstart") {
                                _lgy_link.setAttribute("onmousedown", _lgy_touch_event)
                            }
                        } else {
                            var _lgy_click_beacon = _config.modules.construct.click_beacons[_lgy_link.href];
                            if (_lgy_click_beacon) {
                                _lgy_link.setAttribute("data-click-beacon-url", _lgy_click_beacon);
                                _lgy_touch_event = "if (this.getAttribute('data-click-beacon-send') !== 'true') { new Image().src = this.getAttribute('data-click-beacon-url'); this.setAttribute('data-click-beacon-send', 'true')}";
                                _lgy_link.setAttribute("onclick", _lgy_touch_event)
                            }
                            _lgy_link.setAttribute("rel", "nofollow")
                        }
                    }
                };
                var _construct_checkers = function() {
                    var id_to_check = _container_id;
                    if (_template_name === "toaster") {
                        id_to_check = "logly-lift-toaster-contents"
                    }
                    if (_visChecker) {
                        _visChecker.add(id_to_check, _json);
                        _visChecker.start()
                    }
                    if (_jstChecker) {
                        _jstChecker.add(id_to_check, _json);
                        _jstChecker.start()
                    }
                    if (_vidChecker) {
                        _vidChecker.add(id_to_check, _json);
                        _vidChecker.start()
                    }
                };
                var _widget_custom = function(lgy_html) {};
                var _done_construct = function() {
                    var watchdog = _config.modules.watchdog;
                    if (watchdog) {
                        watchdog.stop()
                    }
                    _amp_render_start()
                };
                var _start_construct = function(container_id, json) {
                    var lift_container = document.getElementById(container_id);
                    if (!lift_container) {
                        _watchdog.stop();
                        _log.warning("no container found. skip construct.");
                        _amp_no_content_available();
                        return null
                    }
                    if (!json || json.length == 0) {
                        _watchdog.stop();
                        _log.warning("no json data. skip construct.");
                        lift_container.style.display = "none";
                        _amp_no_content_available();
                        return null
                    }
                    return lift_container
                };
                var _do_construct = function() {
                    var container = _self.start_construct(_container_id, _json);
                    if (!container) {
                        return false
                    }
                    _self.custom_js_before();
                    _self.call_dfp_beacon();
                    if (_template_name !== "toaster") {
                        container.innerHTML = _lgy_html
                    }
                    _self.construct_css();
                    if (_use_template) {
                        _self.widget_custom(_lgy_html)
                    }
                    _self.construct_click_handler(container);
                    _self.construct_checkers();
                    _self.custom_js_after();
                    _self.done_construct()
                };
                var _construct = function() {
                    _log.critical_on_catch(_do_construct)
                };
                var _invoke_on_dom_ready = function(callback, is_test) {
                    var is_dom_ready = document.readyState == "complete" || document.readyState == "interactive";
                    if (is_test) {
                        is_dom_ready = false
                    }
                    var lgy_lift_container = document.getElementById(_container_id);
                    if (is_dom_ready || lgy_lift_container) {
                        callback()
                    } else if (document.addEventListener) {
                        document.addEventListener("DOMContentLoaded", callback, false)
                    } else if (/^ie/.test(_utils.uaBrowser)) {
                        try {
                            document.documentElement.doScroll("left")
                        } catch (error) {
                            _log.warning("re-run construct.js:_invoke_on_dom_ready() later.");
                            _utils.setTimeout(arguments.callee, 0);
                            return
                        }
                    } else {
                        window.onload = callback
                    }
                };
                var _calc_image_size = function(item) {
                    var widget_image_width = _config.image_width;
                    var widget_image_height = _config.image_height;
                    var widget_image_ratio = widget_image_width / widget_image_height;
                    var real_image_width = item.image_width;
                    var real_image_height = item.image_height;
                    var real_image_ratio = real_image_width / real_image_height;
                    var is_pad = _config.image_display_pattern === "pad";
                    var result = {};
                    if (_use_template) {
                        result.width = real_image_width;
                        result.height = real_image_height
                    } else if (widget_image_ratio >= 1 && widget_image_ratio >= real_image_ratio && is_pad || widget_image_ratio >= 1 && widget_image_ratio < real_image_ratio && !is_pad || widget_image_ratio < 1 && real_image_ratio >= widget_image_ratio && !is_pad || widget_image_ratio < 1 && real_image_ratio < widget_image_ratio && is_pad) {
                        result.width = parseInt(real_image_width * widget_image_height / real_image_height);
                        result.height = widget_image_height;
                        result.top = 0;
                        result.left = parseInt((widget_image_width - result.width) / 2)
                    } else {
                        result.width = widget_image_width;
                        result.height = parseInt(real_image_height * widget_image_width / real_image_width);
                        result.top = parseInt((widget_image_height - result.height) / 2);
                        result.left = 0
                    }
                    return result
                };
                var _calc_small_image = function(item) {
                    var result = {};
                    var tmp_image_url = item.image_url;
                    tmp_image_url = tmp_image_url.replace(/original/g, "small");
                    tmp_image_url = tmp_image_url.replace(/normal/g, "small");
                    result.image_url = tmp_image_url;
                    return result
                };
                var _make_html = function() {
                    var template = _config.modules.template;
                    var widget_tmpl = _config.custom_widget_html || _config.widget_tmpl;
                    var ad_tmpl = _config.custom_ad_html || _config.ad_tmpl;
                    var ad_video_tmpl = _config.custom_video_html || _config.ad_video_tmpl || "";
                    var article_tmpl = _config.custom_article_html || _config.article_tmpl;
                    var all_ads_str = "";
                    var video_ad_str = "";
                    if (_template_name == "toaster" && _json.length > 2) {
                        _json = _json.slice(0, 2)
                    }
                    for (var i = 0, len = _json.length; i < len; i++) {
                        var item = _json[i];
                        var ad_data;
                        if (item.click_beacon_url) {
                            _config.modules.construct.click_beacons[item.url] = item.click_beacon_url
                        }
                        var one_ad_tmpl;
                        if (item.is_article) {
                            ad_data = _ad_data(item, i);
                            ad_data.URL = item.ld_url;
                            _config.modules.construct.article_links[item.ld_url] = {
                                click_url: item.url,
                                click_beacon: item.is_click_beacon
                            };
                            one_ad_tmpl = article_tmpl
                        } else if (item.is_video) {
                            ad_data = _ad_video_data(item);
                            ad_data.URL = item.url;
                            one_ad_tmpl = ad_video_tmpl
                        } else {
                            ad_data = _ad_data(item, i);
                            ad_data.URL = item.url;
                            one_ad_tmpl = ad_tmpl
                        }
                        _utils.extend(ad_data, config);
                        var one_ad = template.process(one_ad_tmpl, ad_data);
                        if (item.is_video && widget_tmpl.indexOf("{{VIDEO_AD}}") != -1) {
                            video_ad_str = one_ad
                        } else {
                            all_ads_str += one_ad
                        }
                    }
                    _lgy_html = template.process(widget_tmpl, _utils.extend({
                        ADS: all_ads_str,
                        VIDEO_AD: video_ad_str
                    }, config));
                    return _lgy_html
                };
                var _ad_data = function(item, i) {
                    var beacon_img_tag = item.beacon_url ? '<img src="' + template.escape(item.beacon_url) + '" width="1" height="1" style="position: absolute; width: 1px; height: 1px; top: -32767px; left: -32767px;"/>' : "";
                    var image_property = _calc_image_size(item);
                    var s_image_property = _calc_small_image(item);
                    var ad_data = {
                        TITLE: template.escape(_utils.substr(item.title, _config.title_max_characters)),
                        LEAD: template.escape(_utils.substr(item.lead, _config.lead_max_characters)),
                        CATEGORY: template.escape(item.category),
                        SUBCATEGORY1: template.escape(item.subcategory ? item.subcategory[0] : ""),
                        SUBCATEGORY2: template.escape(item.subcategory ? item.subcategory[1] : ""),
                        SUBCATEGORY3: template.escape(item.subcategory ? item.subcategory[2] : ""),
                        SUBCATEGORY4: template.escape(item.subcategory ? item.subcategory[3] : ""),
                        SUBCATEGORY5: template.escape(item.subcategory ? item.subcategory[4] : ""),
                        ITEM_ID: _container_id + "-item-" + (i + 1),
                        ADV: item.advertising_subject ? item.advertising_subject : item.site,
                        IMAGE_URL: item.image_url,
                        IMAGE_WIDTH: image_property.width,
                        IMAGE_HEIGHT: image_property.height,
                        IMAGE_TOP: image_property.top,
                        IMAGE_LEFT: image_property.left,
                        IMAGE_S_URL: s_image_property.image_url,
                        SITE: item.site,
                        BEACON_URL: template.escape(item.beacon_url),
                        BEACON_IMG_TAG: beacon_img_tag,
                        I: i + 1,
                        TARGET: document.URL.indexOf(item.site) == -1 ? "_blank" : "_top"
                    };
                    if (item.published_at) {
                        var _lgy_datetime = item.published_at.split("T");
                        var _lgy_ymd = _lgy_datetime[0].split("-");
                        var _lgy_time = _lgy_datetime[1].split(":");
                        ad_data.YYYY = _lgy_ymd[0];
                        ad_data.MM = _lgy_ymd[1];
                        ad_data.DD = _lgy_ymd[2];
                        ad_data.M = ad_data.MM.replace(/^0*/, "");
                        ad_data.D = ad_data.DD.replace(/^0*/, "");
                        ad_data.HH = _lgy_time[0];
                        ad_data.mm = _lgy_time[1];
                        ad_data.H = ad_data.HH.replace(/^0/, "")
                    }
                    return ad_data
                };
                var _ad_video_data = function(item) {
                    var beacon_img_tag = item.beacon_url ? '<img src="' + template.escape(item.beacon_url) + '" width="1" height="1" style="position: absolute; width: 1px; height: 1px; top: -32767px; left: -32767px;"/>' : "";
                    return {
                        css_style_prefix: _config.css_style_prefix,
                        TITLE: template.escape(_utils.substr(item.title, _config.title_max_characters)),
                        ADV: item.advertising_subject,
                        VIDEO_TYPE: _config.video_type,
                        BEACON_IMG_TAG: beacon_img_tag,
                        URL: item.url
                    }
                };
                var _init = function(config, json, override) {
                    config.modules.construct = module.exports;
                    _config = config;
                    _json = json;
                    _utils = config.modules.utils;
                    _log = config.modules.log;
                    _watchdog = config.modules.watchdog;
                    _template_name = config.template_name;
                    _css_style_prefix = config.css_style_prefix;
                    _container_id = config.container_id;
                    _use_template = _template_name != "";
                    _visChecker = config.modules.viewable_impression;
                    _jstChecker = config.modules.jstracker;
                    _vidChecker = config.modules.video_js;
                    _self = _utils.extend({}, module.exports);
                    if (override && typeof override === "object") {
                        _utils.extend(_self, override)
                    }
                    _self.make_html();
                    _self.invoke_on_dom_ready(_self.construct);
                    return _self
                };
                module.exports = {
                    init: _init,
                    add_third_party_tags: _add_third_party_tags,
                    custom_js_before: _custom_js_before,
                    custom_js_after: _custom_js_after,
                    call_dfp_beacon: _call_dfp_beacon,
                    construct_css: _construct_css,
                    construct_click_handler: _construct_click_handler,
                    construct_checkers: _construct_checkers,
                    widget_custom: _widget_custom,
                    start_construct: _start_construct,
                    construct: _construct,
                    done_construct: _done_construct,
                    invoke_on_dom_ready: _invoke_on_dom_ready,
                    calc_image_size: _calc_image_size,
                    calc_small_image: _calc_small_image,
                    make_html: _make_html,
                    _construct_css_base: _construct_css_base,
                    _video_main_css: _video_main_css,
                    _video_type_css: _video_type_css,
                    _ad_data: _ad_data,
                    _ad_video_data: _ad_video_data,
                    article_links: {},
                    click_beacons: {}
                };
                return module.exports || exports
            })().init(config, _lgy_json)
        } catch (e) {
            log.critical(e);
            if (config.is_browser_direct) {
                throw e
            }
        }
    };
    (function() {
        var module = {};
        var exports = {};
        var _run = function(log) {
            var is_browser_direct = false;
            try {
                if (typeof debug_config != "undefined") {
                    is_browser_direct = debug_config.is_browser_direct
                }
                if (!is_browser_direct) {
                    var _lgy_script = document.createElement("script");
                    var _lgy_url = window._lgy_lw_imp_url && window._lgy_lw_imp_url != "" ? window._lgy_lw_imp_url : document.URL;
                    var _lgy_ref = window._lgy_lw_imp_ref_url && window._lgy_lw_imp_ref_url != "" ? window._lgy_lw_imp_ref_url : document.referrer;
                    var _lgy_dcu = "https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsukpUga90FTnNWwcphMoDNDuwCPmuPgmMuEn9XZVo734gpPYjnyILADNzy0l9EC456vYxCjgYJSOTR2OHjKhh0Y3oO9FZyM6c_s4mLz2o_OxSLWLAZUkbn0NlLKASSCC8NSMZTTlszZ89_ni5qsyNfMKM-YGVFUGx6pOhhQG72fmFVsLWSZVMf6DHGmCTu3AX-vcvdFre4S8UsGAzBmYHudC2_b5VGMIq1es7Yqs2MmHCmPRhRyt4Ew3f1nFPeImH_dDJqzOFjWr_Yq0sUCQg&sig=Cg0ArKJSzGpFkAYnsdBoEAE&urlfix=1&adurl=";
                    _lgy_script.type = "text/javascript";
                    _lgy_script.charset = "UTF-8";
                    _lgy_script.async = true;
                    _lgy_script.src = ("https:" == document.location.protocol ? "https://" : "http://") + "l.logly.co.jp/lift.json?adspot_id=4275688&widget_id=7685&auc_id=&callback=_lgy_lift_callback_4275688&url=" + encodeURIComponent(_lgy_url) + "&ref=" + encodeURIComponent(_lgy_ref);
                    if (typeof _lgy_dcu !== "undefined" && _lgy_dcu !== "") {
                        _lgy_script.src += "&dcu=" + encodeURIComponent(_lgy_dcu)
                    }
                    var _lgy_script_0 = document.getElementsByTagName("script")[0];
                    _lgy_script_0.parentNode.insertBefore(_lgy_script, _lgy_script_0);
                    " ".concat("");
                    var _lgy_insert_iframe = function(iframe) {
                        document.body.insertBefore(iframe, document.body.firstChild)
                    };
                    var _lgy_iframe = document.createElement("iframe");
                    _lgy_iframe.src = ("https:" == document.location.protocol ? "https://" : "http://") + "sync.logly.co.jp/sync/sync.html";
                    _lgy_iframe.style.display = "none";
                    _lgy_iframe.style.border = "none";
                    _lgy_iframe.scrolling = "no";
                    setTimeout(function() {
                        log.critical_on_catch(function() {
                            _lgy_insert_iframe(_lgy_iframe)
                        })
                    }, 500);
                    " ".concat("")
                }
            } catch (err) {
                log.critical(err);
                if (is_browser_direct) {
                    throw err
                }
            }
        };
        module.exports = {
            run: _run
        };
        return module.exports || exports
    })().run(log)
})();