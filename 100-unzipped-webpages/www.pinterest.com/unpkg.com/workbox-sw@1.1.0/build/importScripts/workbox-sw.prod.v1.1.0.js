/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

var WorkboxSW = (function() {
    'use strict';

    class ErrorFactory$1 {
        constructor(a) {
            this._errors = a;
        }
        createError(a, b) {
            if (!(a in this._errors)) throw new Error(`Unable to generate error '${a}'.`);
            let c = this._errors[a].replace(/\s+/g, ' '),
                d = null;
            b && (c += ` [${b.message}]`, d = b.stack);
            const e = new Error;
            return e.name = a, e.message = c, e.stack = d, e
        }
    }

    const errors = {
        "not-in-sw": 'workbox-sw must be loaded in your service worker file.',
        "unsupported-route-type": 'The first parameter to registerRoute() should be either an Express-style path string, a RegExp, or a function.',
        "empty-express-string": 'The Express style route string must have some characters, an empty string is invalid.',
        "bad-revisioned-cache-list": `The 'precache()' method expects` + `an array of revisioned urls like so: ['/example/hello.1234.txt', ` + `{path: 'hello.txt', revision: '1234'}]`,
        "navigation-route-url-string": `The registerNavigationRoute() method ` + `expects a URL string as its first parameter.`,
        "bad-cache-id": `The 'cacheId' parameter must be a string with at least ` + `one character`,
        "bad-skip-waiting": `The 'skipWaiting' parameter must be a boolean.`,
        "bad-clients-claim": `The 'clientsClaim' parameter must be a boolean.`,
        "bad-directory-index": `The 'directoryIndex' parameter must be a boolean.`
    };
    var ErrorFactory = new ErrorFactory$1(errors);

    const errors$1 = {
        "express-route-invalid-path": `When using ExpressRoute, you must
    provide a path that starts with a '/' character (to match same-origin
    requests) or that starts with 'http' (to match cross-origin requests)`
    };
    var ErrorFactory$3 = new ErrorFactory$1(errors$1);

    var ErrorStackParser = {
        parse: () => []
    };

    function atLeastOne(a) {
        const b = Object.keys(a);
        b.some((c) => a[c] !== void 0) || throwError('Please set at least one of the following parameters: ' + b.map((c) => `'${c}'`).join(', '));
    }

    function hasMethod(a, b) {
        const c = Object.keys(a).pop(),
            d = typeof a[c][b];
        'function' != d && throwError(`The '${c}' parameter must be an object that exposes a
      '${b}' method.`);
    }

    function isInstance(a, b) {
        const c = Object.keys(a).pop();
        a[c] instanceof b || throwError(`The '${c}' parameter must be an instance of
      '${b.name}'`);
    }

    function isOneOf(a, b) {
        const c = Object.keys(a).pop();
        b.includes(a[c]) || throwError(`The '${c}' parameter must be set to one of the
      following: ${b}`);
    }

    function isType(a, b) {
        const c = Object.keys(a).pop(),
            d = typeof a[c];
        d !== b && throwError(`The '${c}' parameter has the wrong type. (Expected:
      ${b}, actual: ${d})`);
    }

    function isArrayOfType(a, b) {
        const c = Object.keys(a).pop(),
            d = `The '${c}' parameter should be an array containing
    one or more '${b}' elements.`;
        Array.isArray(a[c]) || throwError(d);
        for (let e of a[c]) typeof e !== b && throwError(d);
    }

    function isArrayOfClass(a, b) {
        const c = Object.keys(a).pop(),
            d = `The '${c}' parameter should be an array containing
    one or more '${b.name}' instances.`;
        Array.isArray(a[c]) || throwError(d);
        for (let e of a[c]) e instanceof b || throwError(d);
    }

    function throwError(a) {
        a = a.replace(/\s+/g, ' ');
        const b = new Error(a);
        b.name = 'assertion-failed';
        const c = ErrorStackParser.parse(b);
        throw 3 <= c.length && (b.message = `Invalid call to ${c[2].functionName}() — ` + a), b
    }

    function normalizeHandler(a) {
        return 'object' == typeof a ? (hasMethod({
            handler: a
        }, 'handle'), a) : (isType({
            handler: a
        }, 'function'), {
            handle: a
        })
    }

    const defaultMethod = 'GET';
    const validMethods = ['DELETE', 'GET', 'HEAD', 'POST', 'PUT'];

    class Route {
        constructor({
            match: a,
            handler: b,
            method: c
        } = {}) {
            this.handler = normalizeHandler(b), isType({
                match: a
            }, 'function'), this.match = a, c ? (isOneOf({
                method: c
            }, validMethods), this.method = c) : this.method = defaultMethod;
        }
    }

    var index$1 = Array.isArray || function(a) {
        return '[object Array]' == Object.prototype.toString.call(a)
    };

    var index = pathToRegexp;
    var parse_1 = parse;
    var compile_1 = compile;
    var tokensToFunction_1 = tokensToFunction;
    var tokensToRegExp_1 = tokensToRegExp;
    var PATH_REGEXP = new RegExp(['(\\\\.)', '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');

    function parse(a, b) {
        for (var k, d = [], e = 0, f = 0, g = '', h = b && b.delimiter || '/'; null != (k = PATH_REGEXP.exec(a));) {
            var l = k[0],
                n = k[1],
                o = k.index;
            if (g += a.slice(f, o), f = o + l.length, n) {
                g += n[1];
                continue
            }
            var p = a[f],
                q = k[2],
                r = k[3],
                s = k[4],
                t = k[5],
                u = k[6],
                v = k[7];
            g && (d.push(g), g = '');
            var z = k[2] || h,
                A = s || t;
            d.push({
                name: r || e++,
                prefix: q || '',
                delimiter: z,
                optional: '?' === u || '*' === u,
                repeat: '+' === u || '*' === u,
                partial: null != q && null != p && p !== q,
                asterisk: !!v,
                pattern: A ? escapeGroup(A) : v ? '.*' : '[^' + escapeString(z) + ']+?'
            });
        }
        return f < a.length && (g += a.substr(f)), g && d.push(g), d
    }

    function compile(a, b) {
        return tokensToFunction(parse(a, b))
    }

    function encodeURIComponentPretty(a) {
        return encodeURI(a).replace(/[\/?#]/g, function(b) {
            return '%' + b.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function encodeAsterisk(a) {
        return encodeURI(a).replace(/[?#]/g, function(b) {
            return '%' + b.charCodeAt(0).toString(16).toUpperCase()
        })
    }

    function tokensToFunction(a) {
        for (var b = Array(a.length), d = 0; d < a.length; d++) 'object' == typeof a[d] && (b[d] = new RegExp('^(?:' + a[d].pattern + ')$'));
        return function(e, f) {
            for (var o, g = '', h = e || {}, k = f || {}, l = k.pretty ? encodeURIComponentPretty : encodeURIComponent, n = 0; n < a.length; n++) {
                if (o = a[n], 'string' == typeof o) {
                    g += o;
                    continue
                }
                var q, p = h[o.name];
                if (null == p)
                    if (o.optional) {
                        o.partial && (g += o.prefix);
                        continue
                    } else throw new TypeError('Expected "' + o.name + '" to be defined');
                if (index$1(p)) {
                    if (!o.repeat) throw new TypeError('Expected "' + o.name + '" to not repeat, but received `' + JSON.stringify(p) + '`');
                    if (0 === p.length)
                        if (o.optional) continue;
                        else throw new TypeError('Expected "' + o.name + '" to not be empty');
                    for (var r = 0; r < p.length; r++) {
                        if (q = l(p[r]), !b[n].test(q)) throw new TypeError('Expected all "' + o.name + '" to match "' + o.pattern + '", but received `' + JSON.stringify(q) + '`');
                        g += (0 === r ? o.prefix : o.delimiter) + q;
                    }
                    continue
                }
                if (q = o.asterisk ? encodeAsterisk(p) : l(p), !b[n].test(q)) throw new TypeError('Expected "' + o.name + '" to match "' + o.pattern + '", but received "' + q + '"');
                g += o.prefix + q;
            }
            return g
        }
    }

    function escapeString(a) {
        return a.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
    }

    function escapeGroup(a) {
        return a.replace(/([=!:$\/()])/g, '\\$1')
    }

    function attachKeys(a, b) {
        return a.keys = b, a
    }

    function flags(a) {
        return a.sensitive ? '' : 'i'
    }

    function regexpToRegexp(a, b) {
        var d = a.source.match(/\((?!\?)/g);
        if (d)
            for (var e = 0; e < d.length; e++) b.push({
                name: e,
                prefix: null,
                delimiter: null,
                optional: !1,
                repeat: !1,
                partial: !1,
                asterisk: !1,
                pattern: null
            });
        return attachKeys(a, b)
    }

    function arrayToRegexp(a, b, d) {
        for (var e = [], f = 0; f < a.length; f++) e.push(pathToRegexp(a[f], b, d).source);
        var g = new RegExp('(?:' + e.join('|') + ')', flags(d));
        return attachKeys(g, b)
    }

    function stringToRegexp(a, b, d) {
        return tokensToRegExp(parse(a, d), b, d)
    }

    function tokensToRegExp(a, b, d) {
        index$1(b) || (d = b || d, b = []), d = d || {};
        for (var k, e = d.strict, f = !1 !== d.end, g = '', h = 0; h < a.length; h++)
            if (k = a[h], 'string' == typeof k) g += escapeString(k);
            else {
                var l = escapeString(k.prefix),
                    n = '(?:' + k.pattern + ')';
                b.push(k), k.repeat && (n += '(?:' + l + n + ')*'), n = k.optional ? k.partial ? l + '(' + n + ')?' : '(?:' + l + '(' + n + '))?' : l + '(' + n + ')', g += n;
            }
        var o = escapeString(d.delimiter || '/'),
            p = g.slice(-o.length) === o;
        return e || (g = (p ? g.slice(0, -o.length) : g) + '(?:' + o + '(?=$))?'), g += f ? '$' : e && p ? '' : '(?=' + o + '|$)', attachKeys(new RegExp('^' + g, flags(d)), b)
    }

    function pathToRegexp(a, b, d) {
        return index$1(b) || (d = b || d, b = []), d = d || {}, a instanceof RegExp ? regexpToRegexp(a, b) : index$1(a) ? arrayToRegexp(a, b, d) : stringToRegexp(a, b, d)
    }
    index.parse = parse_1, index.compile = compile_1, index.tokensToFunction = tokensToFunction_1, index.tokensToRegExp = tokensToRegExp_1;

    class ExpressRoute extends Route {
        constructor({
            path: a,
            handler: b,
            method: c
        }) {
            if (!(a.startsWith('/') || a.startsWith('http'))) throw ErrorFactory$3.createError('express-route-invalid-path');
            let d = [];
            const e = index(a, d);
            super({
                match: ({
                    url: g
                }) => {
                    if (a.startsWith('/') && g.origin !== location.origin) return null;
                    const h = a.startsWith('/') ? g.pathname : g.href,
                        i = h.match(e);
                    if (!i) return null;
                    const j = {};
                    return d.forEach((k, l) => {
                        j[k.name] = i[l + 1];
                    }), j
                },
                handler: b,
                method: c
            });
        }
    }

    class LogGroup {
        constructor() {
            this._logs = [], this._childGroups = [], this._isFallbackMode = !1;
            const a = /Firefox\/(\d*)\.\d*/.exec(navigator.userAgent);
            if (a) try {
                const b = parseInt(a[1], 10);
                55 > b && (this._isFallbackMode = !0);
            } catch (b) {
                this._isFallbackMode = !0;
            }
            /Edge\/\d*\.\d*/.exec(navigator.userAgent) && (this._isFallbackMode = !0);
        }
        addPrimaryLog(a) {
            this._primaryLog = a;
        }
        addLog(a) {
            this._logs.push(a);
        }
        addChildGroup(a) {
            0 === a._logs.length || this._childGroups.push(a);
        }
        print() {
            return 0 === this._logs.length && 0 === this._childGroups.length ? void this._printLogDetails(this._primaryLog) : void(this._primaryLog && (this._isFallbackMode ? this._printLogDetails(this._primaryLog) : console.groupCollapsed(...this._getLogContent(this._primaryLog))), this._logs.forEach((a) => {
                this._printLogDetails(a);
            }), this._childGroups.forEach((a) => {
                a.print();
            }), this._primaryLog && !this._isFallbackMode && console.groupEnd())
        }
        _printLogDetails(a) {
            const b = a.logFunc ? a.logFunc : console.log;
            b(...this._getLogContent(a));
        }
        _getLogContent(a) {
            let b = a.message;
            this._isFallbackMode && 'string' == typeof b && (b = b.replace(/%c/g, ''));
            let c = [b];
            return !this._isFallbackMode && a.colors && (c = c.concat(a.colors)), a.args && (c = c.concat(a.args)), c
        }
    }

    function isServiceWorkerGlobalScope() {
        return 'ServiceWorkerGlobalScope' in self && self instanceof ServiceWorkerGlobalScope
    }

    function isDevBuild() {
        return `dev` == `prod`
    }

    function isLocalhost() {
        return !!('localhost' === location.hostname || '[::1]' === location.hostname || location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))
    }

    self.workbox = self.workbox || {}, self.workbox.LOG_LEVEL = self.workbox.LOG_LEVEL || {
        none: -1,
        verbose: 0,
        debug: 1,
        warn: 2,
        error: 3
    };
    const LIGHT_GREY = `#bdc3c7`;
    const DARK_GREY = `#7f8c8d`;
    const LIGHT_GREEN = `#2ecc71`;
    const LIGHT_YELLOW = `#f1c40f`;
    const LIGHT_RED = `#e74c3c`;
    const LIGHT_BLUE = `#3498db`;
    class LogHelper {
        constructor() {
            this._defaultLogLevel = isDevBuild() ? self.workbox.LOG_LEVEL.debug : self.workbox.LOG_LEVEL.warn;
        }
        log(a) {
            this._printMessage(self.workbox.LOG_LEVEL.verbose, a);
        }
        debug(a) {
            this._printMessage(self.workbox.LOG_LEVEL.debug, a);
        }
        warn(a) {
            this._printMessage(self.workbox.LOG_LEVEL.warn, a);
        }
        error(a) {
            this._printMessage(self.workbox.LOG_LEVEL.error, a);
        }
        _printMessage(a, b) {
            if (this._shouldLogMessage(a, b)) {
                const c = this._getAllLogGroups(a, b);
                c.print();
            }
        }
        _getAllLogGroups(a, b) {
            const c = new LogGroup,
                d = this._getPrimaryMessageDetails(a, b);
            if (c.addPrimaryLog(d), b.error) {
                const f = {
                    message: b.error,
                    logFunc: console.error
                };
                c.addLog(f);
            }
            const e = new LogGroup;
            if (b.that && b.that.constructor && b.that.constructor.name) {
                const f = b.that.constructor.name;
                e.addLog(this._getKeyValueDetails('class', f));
            }
            return b.data && ('object' != typeof b.data || b.data instanceof Array ? e.addLog(this._getKeyValueDetails('additionalData', b.data)) : Object.keys(b.data).forEach((f) => {
                e.addLog(this._getKeyValueDetails(f, b.data[f]));
            })), c.addChildGroup(e), c
        }
        _getKeyValueDetails(a, b) {
            return {
                message: `%c${a}: `,
                colors: [`color: ${LIGHT_BLUE}`],
                args: b
            }
        }
        _getPrimaryMessageDetails(a, b) {
            let c, d;
            a === self.workbox.LOG_LEVEL.verbose ? (c = 'Info', d = LIGHT_GREY) : a === self.workbox.LOG_LEVEL.debug ? (c = 'Debug', d = LIGHT_GREEN) : a === self.workbox.LOG_LEVEL.warn ? (c = 'Warn', d = LIGHT_YELLOW) : a === self.workbox.LOG_LEVEL.error ? (c = 'Error', d = LIGHT_RED) : void 0;
            let e = `%c🔧 %c[${c}]`;
            const f = [`color: ${LIGHT_GREY}`, `color: ${d}`];
            let g;
            return 'string' == typeof b ? g = b : b.message && (g = b.message), g && (g = g.replace(/\s+/g, ' '), e += `%c ${g}`, f.push(`color: ${DARK_GREY}; font-weight: normal`)), {
                message: e,
                colors: f
            }
        }
        _shouldLogMessage(a, b) {
            if (!b) return !1;
            let c = this._defaultLogLevel;
            return self && self.workbox && 'number' == typeof self.workbox.logLevel && (c = self.workbox.logLevel), c === self.workbox.LOG_LEVEL.none || a < c ? !1 : !0
        }
    }
    var logHelper = new LogHelper;

    class NavigationRoute extends Route {
        constructor({
            whitelist: a,
            blacklist: b,
            handler: c
        } = {}) {
            isArrayOfClass({
                whitelist: a
            }, RegExp), b ? isArrayOfClass({
                blacklist: b
            }, RegExp) : b = [];
            super({
                match: ({
                    event: e,
                    url: f
                }) => {
                    let g = !1,
                        h;
                    if ('navigate' === e.request.mode) {
                        const i = f.pathname + f.search;
                        a.some((j) => j.test(i)) ? b.some((j) => j.test(i)) ? h = `The navigation route is not being used, since the ` + `request URL matches both the whitelist and blacklist.` : (h = `The navigation route is being used.`, g = !0) : h = `The navigation route is not being used, since the ` + `URL being navigated to doesn't match the whitelist.`, logHelper.debug({
                            that: this,
                            message: h,
                            data: {
                                "request-url": f.href,
                                whitelist: a,
                                blacklist: b,
                                handler: c
                            }
                        });
                    }
                    return g
                },
                handler: c,
                method: 'GET'
            });
        }
    }

    class RegExpRoute extends Route {
        constructor({
            regExp: a,
            handler: b,
            method: c
        }) {
            isInstance({
                regExp: a
            }, RegExp);
            super({
                match: ({
                    url: e
                }) => {
                    const f = a.exec(e.href);
                    return f ? e.origin !== location.origin && 0 !== f.index ? (logHelper.debug({
                        that: this,
                        message: `Skipping route, because the RegExp match didn't occur ` + `at the start of the URL.`,
                        data: {
                            url: e.href,
                            regExp: a
                        }
                    }), null) : f.slice(1) : null
                },
                handler: b,
                method: c
            });
        }
    }

    class Router$2 {
        constructor({
            handleFetch: a
        } = {}) {
            'undefined' == typeof a && (a = !0), this._routes = new Map, a && this._addFetchListener();
        }
        _addFetchListener() {
            self.addEventListener('fetch', (a) => {
                const b = new URL(a.request.url);
                if (!b.protocol.startsWith('http')) return void logHelper.log({
                    that: this,
                    message: 'URL does not start with HTTP and so not passing through the router.',
                    data: {
                        request: a.request
                    }
                });
                let c, d;
                for (let e of this._routes.get(a.request.method) || []) {
                    const f = e.match({
                        url: b,
                        event: a
                    });
                    if (f) {
                        d = e, logHelper.log({
                            that: this,
                            message: 'The router found a matching route.',
                            data: {
                                route: d,
                                request: a.request
                            }
                        });
                        let g = f;
                        Array.isArray(g) && 0 === g.length ? g = void 0 : g.constructor === Object && 0 === Object.keys(g).length && (g = void 0), c = e.handler.handle({
                            url: b,
                            event: a,
                            params: g
                        });
                        break
                    }
                }!c && this.defaultHandler && (c = this.defaultHandler.handle({
                    url: b,
                    event: a
                })), c && this.catchHandler && (c = c.catch((e) => {
                    return this.catchHandler.handle({
                        url: b,
                        event: a,
                        error: e
                    })
                })), c && a.respondWith(c.then((e) => {
                    return logHelper.debug({
                        that: this,
                        message: 'The router is managing a route with a response.',
                        data: {
                            route: d,
                            request: a.request,
                            response: e
                        }
                    }), e
                }));
            });
        }
        setDefaultHandler({
            handler: a
        } = {}) {
            this.defaultHandler = normalizeHandler(a);
        }
        setCatchHandler({
            handler: a
        } = {}) {
            this.catchHandler = normalizeHandler(a);
        }
        registerRoutes({
            routes: a
        } = {}) {
            isArrayOfClass({
                routes: a
            }, Route);
            for (let b of a) this._routes.has(b.method) || this._routes.set(b.method, []), this._routes.get(b.method).unshift(b);
        }
        registerRoute({
            route: a
        } = {}) {
            isInstance({
                route: a
            }, Route), this.registerRoutes({
                routes: [a]
            });
        }
        unregisterRoutes({
            routes: a
        } = {}) {
            isArrayOfClass({
                routes: a
            }, Route);
            for (let b of a) {
                this._routes.has(b.method) || logHelper.error({
                    that: this,
                    message: `Can't unregister route; there are no ${b.method}
            routes registered.`,
                    data: {
                        route: b
                    }
                });
                const c = this._routes.get(b.method).indexOf(b); - 1 < c ? this._routes.get(b.method).splice(c, 1) : logHelper.error({
                    that: this,
                    message: `Can't unregister route; the route wasn't previously
            registered.`,
                    data: {
                        route: b
                    }
                });
            }
        }
        unregisterRoute({
            route: a
        } = {}) {
            isInstance({
                route: a
            }, Route), this.unregisterRoutes({
                routes: [a]
            });
        }
    }

    class Router$$1 extends Router$2 {
        constructor(a, b) {
            super({
                handleFetch: b
            }), this._revisionedCacheName = a;
        }
        registerRoute(a, b, c = 'GET') {
            'function' == typeof b && (b = {
                handle: b
            });
            let d;
            if ('string' == typeof a) {
                if (0 === a.length) throw ErrorFactory.createError('empty-express-string');
                d = new ExpressRoute({
                    path: a,
                    handler: b,
                    method: c
                });
            } else if (a instanceof RegExp) d = new RegExpRoute({
                regExp: a,
                handler: b,
                method: c
            });
            else if ('function' == typeof a) d = new Route({
                match: a,
                handler: b,
                method: c
            });
            else throw ErrorFactory.createError('unsupported-route-type');
            return super.registerRoute({
                route: d
            }), d
        }
        registerNavigationRoute(a, b = {}) {
            if ('string' != typeof a) throw ErrorFactory.createError('navigation-route-url-string');
            const c = 'cacheName' in b ? b.cacheName : this._revisionedCacheName;
            super.registerRoute({
                route: new NavigationRoute({
                    handler: () => caches.match(a, {
                        cacheName: c
                    }),
                    whitelist: b.whitelist || [/./],
                    blacklist: b.blacklist || []
                })
            });
        }
    }

    const errors$2 = {
        "multiple-cache-will-update-plugins": 'You cannot register more than one plugin that implements cacheWillUpdate.',
        "multiple-cache-will-match-plugins": 'You cannot register more than one plugin that implements cacheWillMatch.',
        "invalid-response-for-caching": 'The fetched response could not be cached due to an invalid response code.',
        "no-response-received": 'No response received; falling back to cache.',
        "bad-cache-id": `The 'cacheId' parameter must be a string with at least ` + `one character.`
    };
    var ErrorFactory$4 = new ErrorFactory$1(errors$2);

    class CacheableResponse {
        constructor({
            statuses: a,
            headers: b
        } = {}) {
            atLeastOne({
                statuses: a,
                headers: b
            }), a !== void 0 && isArrayOfType({
                statuses: a
            }, 'number'), b !== void 0 && isType({
                headers: b
            }, 'object'), this.statuses = a, this.headers = b;
        }
        isResponseCacheable({
            request: a,
            response: b
        } = {}) {
            isInstance({
                response: b
            }, Response);
            let c = !0;
            if (this.statuses && (c = this.statuses.includes(b.status)), this.headers && c && (c = Object.keys(this.headers).some((d) => {
                    return b.headers.get(d) === this.headers[d]
                })), !c) {
                const d = {
                    response: b
                };
                this.statuses && (d['valid-status-codes'] = JSON.stringify(this.statuses)), this.headers && (d['valid-headers'] = JSON.stringify(this.headers)), a && (d.request = a), logHelper.debug({
                    message: `The response does not meet the criteria for being added to the
          cache.`,
                    data: d
                });
            }
            return c
        }
    }

    class CacheableResponsePlugin extends CacheableResponse {
        cacheWillUpdate({
            request: a,
            response: b
        } = {}) {
            return this.isResponseCacheable({
                request: a,
                response: b
            })
        }
    }

    const getDefaultCacheName = ({
        cacheId: a
    } = {}) => {
        let b = `workbox-runtime-caching`;
        return a && (b = `${a}-${b}`), self && self.registration && (b += `-${self.registration.scope}`), b
    };
    const pluginCallbacks = ['cacheDidUpdate', 'cacheWillMatch', 'cacheWillUpdate', 'fetchDidFail', 'requestWillFetch'];

    var cleanResponseCopy = (({
        response: a
    }) => {
        isInstance({
            response: a
        }, Response);
        const b = a.clone(),
            c = 'body' in b ? Promise.resolve(b.body) : b.blob();
        return c.then((d) => {
            return new Response(d, {
                headers: b.headers,
                status: b.status,
                statusText: b.statusText
            })
        })
    });

    class RequestWrapper {
        constructor({
            cacheName: a,
            cacheId: b,
            plugins: c,
            fetchOptions: d,
            matchOptions: e
        } = {}) {
            if (b && ('string' != typeof b || 0 === b.length)) throw ErrorFactory$4.createError('bad-cache-id');
            a ? (isType({
                cacheName: a
            }, 'string'), this.cacheName = a, b && (this.cacheName = `${b}-${this.cacheName}`)) : this.cacheName = getDefaultCacheName({
                cacheId: b
            }), d && (isType({
                fetchOptions: d
            }, 'object'), this.fetchOptions = d), e && (isType({
                matchOptions: e
            }, 'object'), this.matchOptions = e), this.plugins = new Map, c && (isArrayOfType({
                plugins: c
            }, 'object'), c.forEach((f) => {
                for (let g of pluginCallbacks)
                    if ('function' == typeof f[g]) {
                        if (!this.plugins.has(g)) this.plugins.set(g, []);
                        else if ('cacheWillUpdate' === g) throw ErrorFactory$4.createError('multiple-cache-will-update-plugins');
                        else if ('cacheWillMatch' === g) throw ErrorFactory$4.createError('multiple-cache-will-match-plugins');
                        this.plugins.get(g).push(f);
                    }
            })), this.plugins.has('cacheWillUpdate') && (this._userSpecifiedCachableResponsePlugin = this.plugins.get('cacheWillUpdate')[0]);
        }
        getDefaultCacheableResponsePlugin() {
            return this._defaultCacheableResponsePlugin || (this._defaultCacheableResponsePlugin = new CacheableResponsePlugin({
                statuses: [200]
            })), this._defaultCacheableResponsePlugin
        }
        async getCache() {
            return this._cache || (this._cache = await caches.open(this.cacheName)), this._cache
        }
        async match({
            request: a
        }) {
            atLeastOne({
                request: a
            });
            const b = await this.getCache();
            let c = await b.match(a, this.matchOptions);
            if (this.plugins.has('cacheWillMatch')) {
                const d = this.plugins.get('cacheWillMatch')[0];
                c = d.cacheWillMatch({
                    request: a,
                    cache: b,
                    cachedResponse: c,
                    matchOptions: this.matchOptions
                });
            }
            return c
        }
        async fetch({
            request: a
        }) {
            'string' == typeof a ? a = new Request(a) : isInstance({
                request: a
            }, Request);
            const b = this.plugins.has('fetchDidFail') ? a.clone() : null;
            if (this.plugins.has('requestWillFetch'))
                for (let c of this.plugins.get('requestWillFetch')) {
                    const d = c.requestWillFetch({
                        request: a
                    });
                    isInstance({
                        returnedPromise: d
                    }, Promise);
                    const e = await d;
                    isInstance({
                        returnedRequest: e
                    }, Request), a = e;
                }
            try {
                return await fetch(a, this.fetchOptions)
            } catch (c) {
                if (this.plugins.has('fetchDidFail'))
                    for (let d of this.plugins.get('fetchDidFail')) d.fetchDidFail({
                        request: b.clone()
                    });
                throw c
            }
        }
        async fetchAndCache({
            request: a,
            waitOnCache: b,
            cacheKey: c,
            cacheResponsePlugin: d,
            cleanRedirects: e
        }) {
            atLeastOne({
                request: a
            });
            let f;
            const g = await this.fetch({
                    request: a
                }),
                h = this._userSpecifiedCachableResponsePlugin || d || this.getDefaultCacheableResponsePlugin(),
                i = h.cacheWillUpdate({
                    request: a,
                    response: g
                });
            if (i) {
                const j = e && g.redirected ? await cleanResponseCopy({
                    response: g
                }) : g.clone();
                f = this.getCache().then(async (k) => {
                    let l;
                    const m = c || a;
                    if ('opaque' !== g.type && this.plugins.has('cacheDidUpdate') && (l = await this.match({
                            request: m
                        })), await k.put(m, j), this.plugins.has('cacheDidUpdate'))
                        for (let n of this.plugins.get('cacheDidUpdate')) await n.cacheDidUpdate({
                            cacheName: this.cacheName,
                            oldResponse: l,
                            newResponse: j,
                            url: 'url' in m ? m.url : m
                        });
                });
            } else if (!i && b) throw ErrorFactory$4.createError('invalid-response-for-caching');
            return b && f && (await f), g
        }
    }

    class Handler {
        constructor({
            requestWrapper: a,
            waitOnCache: b
        } = {}) {
            this.requestWrapper = a ? a : new RequestWrapper, this.waitOnCache = !!b;
        }
        handle({
            event: a,
            params: b
        } = {}) {
            throw Error('This abstract method must be implemented in a subclass.')
        }
    }

    class CacheFirst extends Handler {
        async handle({
            event: a
        } = {}) {
            isInstance({
                event: a
            }, FetchEvent);
            const b = await this.requestWrapper.match({
                request: a.request
            });
            return b || (await this.requestWrapper.fetchAndCache({
                request: a.request,
                waitOnCache: this.waitOnCache
            }))
        }
    }

    class CacheOnly extends Handler {
        async handle({
            event: a
        } = {}) {
            return isInstance({
                event: a
            }, FetchEvent), await this.requestWrapper.match({
                request: a.request
            })
        }
    }

    class NetworkFirst extends Handler {
        constructor(a = {}) {
            super(a), this._cacheablePlugin = new CacheableResponsePlugin({
                statuses: [0, 200]
            });
            const {
                networkTimeoutSeconds: b
            } = a;
            b && (isType({
                networkTimeoutSeconds: b
            }, 'number'), this.networkTimeoutSeconds = b);
        }
        async handle({
            event: a
        } = {}) {
            isInstance({
                event: a
            }, FetchEvent);
            const b = [];
            let c;
            this.networkTimeoutSeconds && b.push(new Promise((e) => {
                c = setTimeout(() => {
                    e(this.requestWrapper.match({
                        request: a.request
                    }));
                }, 1e3 * this.networkTimeoutSeconds);
            }));
            const d = this.requestWrapper.fetchAndCache({
                request: a.request,
                waitOnCache: this.waitOnCache,
                cacheResponsePlugin: this._cacheablePlugin
            }).then((e) => {
                return c && clearTimeout(c), e ? e : Promise.reject(ErrorFactory$4.createError('no-response-received'))
            }).catch(() => this.requestWrapper.match({
                request: a.request
            }));
            return b.push(d), Promise.race(b)
        }
    }

    class NetworkOnly extends Handler {
        async handle({
            event: a
        } = {}) {
            return isInstance({
                event: a
            }, FetchEvent), await this.requestWrapper.fetch({
                request: a.request
            })
        }
    }

    class StaleWhileRevalidate extends Handler {
        constructor(a = {}) {
            super(a), this._cacheablePlugin = new CacheableResponsePlugin({
                statuses: [0, 200]
            });
        }
        async handle({
            event: a
        } = {}) {
            isInstance({
                event: a
            }, FetchEvent);
            const b = this.requestWrapper.fetchAndCache({
                    request: a.request,
                    waitOnCache: this.waitOnCache,
                    cacheResponsePlugin: this._cacheablePlugin
                }).catch(() => Response.error()),
                c = await this.requestWrapper.match({
                    request: a.request
                });
            return c || (await b)
        }
    }

    let tmpIdbName = `workbox-cache-expiration`;
    self && self.registration && (tmpIdbName += `-${self.registration.scope}`);
    const idbName = tmpIdbName;
    const idbVersion = 1;
    const urlPropertyName = 'url';
    const timestampPropertyName = 'timestamp';

    function createCommonjsModule(fn, module) {
        return module = {
            exports: {}
        }, fn(module, module.exports), module.exports;
    }

    var idb = createCommonjsModule(function(a) {
        'use strict';
        (function() {
            function b(r) {
                return Array.prototype.slice.call(r)
            }

            function c(r) {
                return new Promise(function(s, t) {
                    r.onsuccess = function() {
                        s(r.result);
                    }, r.onerror = function() {
                        t(r.error);
                    };
                })
            }

            function d(r, s, t) {
                var u, v = new Promise(function(w, x) {
                    u = r[s].apply(r, t), c(u).then(w, x);
                });
                return v.request = u, v
            }

            function e(r, s, t) {
                var u = d(r, s, t);
                return u.then(function(v) {
                    return v ? new k(v, u.request) : void 0
                })
            }

            function f(r, s, t) {
                t.forEach(function(u) {
                    Object.defineProperty(r.prototype, u, {
                        get: function() {
                            return this[s][u]
                        },
                        set: function(v) {
                            this[s][u] = v;
                        }
                    });
                });
            }

            function g(r, s, t, u) {
                u.forEach(function(v) {
                    v in t.prototype && (r.prototype[v] = function() {
                        return d(this[s], v, arguments)
                    });
                });
            }

            function h(r, s, t, u) {
                u.forEach(function(v) {
                    v in t.prototype && (r.prototype[v] = function() {
                        return this[s][v].apply(this[s], arguments)
                    });
                });
            }

            function i(r, s, t, u) {
                u.forEach(function(v) {
                    v in t.prototype && (r.prototype[v] = function() {
                        return e(this[s], v, arguments)
                    });
                });
            }

            function j(r) {
                this._index = r;
            }

            function k(r, s) {
                this._cursor = r, this._request = s;
            }

            function l(r) {
                this._store = r;
            }

            function m(r) {
                this._tx = r, this.complete = new Promise(function(s, t) {
                    r.oncomplete = function() {
                        s();
                    }, r.onerror = function() {
                        t(r.error);
                    }, r.onabort = function() {
                        t(r.error);
                    };
                });
            }

            function n(r, s, t) {
                this._db = r, this.oldVersion = s, this.transaction = new m(t);
            }

            function o(r) {
                this._db = r;
            }
            f(j, '_index', ['name', 'keyPath', 'multiEntry', 'unique']), g(j, '_index', IDBIndex, ['get', 'getKey', 'getAll', 'getAllKeys', 'count']), i(j, '_index', IDBIndex, ['openCursor', 'openKeyCursor']), f(k, '_cursor', ['direction', 'key', 'primaryKey', 'value']), g(k, '_cursor', IDBCursor, ['update', 'delete']), ['advance', 'continue', 'continuePrimaryKey'].forEach(function(r) {
                r in IDBCursor.prototype && (k.prototype[r] = function() {
                    var s = this,
                        t = arguments;
                    return Promise.resolve().then(function() {
                        return s._cursor[r].apply(s._cursor, t), c(s._request).then(function(u) {
                            return u ? new k(u, s._request) : void 0
                        })
                    })
                });
            }), l.prototype.createIndex = function() {
                return new j(this._store.createIndex.apply(this._store, arguments))
            }, l.prototype.index = function() {
                return new j(this._store.index.apply(this._store, arguments))
            }, f(l, '_store', ['name', 'keyPath', 'indexNames', 'autoIncrement']), g(l, '_store', IDBObjectStore, ['put', 'add', 'delete', 'clear', 'get', 'getAll', 'getKey', 'getAllKeys', 'count']), i(l, '_store', IDBObjectStore, ['openCursor', 'openKeyCursor']), h(l, '_store', IDBObjectStore, ['deleteIndex']), m.prototype.objectStore = function() {
                return new l(this._tx.objectStore.apply(this._tx, arguments))
            }, f(m, '_tx', ['objectStoreNames', 'mode']), h(m, '_tx', IDBTransaction, ['abort']), n.prototype.createObjectStore = function() {
                return new l(this._db.createObjectStore.apply(this._db, arguments))
            }, f(n, '_db', ['name', 'version', 'objectStoreNames']), h(n, '_db', IDBDatabase, ['deleteObjectStore', 'close']), o.prototype.transaction = function() {
                return new m(this._db.transaction.apply(this._db, arguments))
            }, f(o, '_db', ['name', 'version', 'objectStoreNames']), h(o, '_db', IDBDatabase, ['close']), ['openCursor', 'openKeyCursor'].forEach(function(r) {
                [l, j].forEach(function(s) {
                    s.prototype[r.replace('open', 'iterate')] = function() {
                        var t = b(arguments),
                            u = t[t.length - 1],
                            v = this._store || this._index,
                            w = v[r].apply(v, t.slice(0, -1));
                        w.onsuccess = function() {
                            u(w.result);
                        };
                    };
                });
            }), [j, l].forEach(function(r) {
                r.prototype.getAll || (r.prototype.getAll = function(s, t) {
                    var u = this,
                        v = [];
                    return new Promise(function(w) {
                        u.iterateCursor(s, function(x) {
                            return x ? (v.push(x.value), void 0 !== t && v.length == t ? void w(v) : void x.continue()) : void w(v)
                        });
                    })
                });
            });
            var q = {
                open: function(r, s, t) {
                    var u = d(indexedDB, 'open', [r, s]),
                        v = u.request;
                    return v.onupgradeneeded = function(w) {
                        t && t(new n(v.result, w.oldVersion, v.transaction));
                    }, u.then(function(w) {
                        return new o(w)
                    })
                },
                delete: function(r) {
                    return d(indexedDB, 'deleteDatabase', [r])
                }
            };
            a.exports = q, a.exports.default = a.exports;
        })();
    });

    const errors$3 = {
        "max-entries-or-age-required": `Either the maxEntries or maxAgeSeconds
    parameters (or both) are required when constructing Plugin.`,
        "max-entries-must-be-number": `The maxEntries parameter to the Plugin
    constructor must either be a number or undefined.`,
        "max-age-seconds-must-be-number": `The maxAgeSeconds parameter to the Plugin
    constructor must either be a number or undefined.`
    };
    var ErrorFactory$5 = new ErrorFactory$1(errors$3);

    class CacheExpiration {
        constructor({
            maxEntries: a,
            maxAgeSeconds: b
        } = {}) {
            if (!(a || b)) throw ErrorFactory$5.createError('max-entries-or-age-required');
            if (a && 'number' != typeof a) throw ErrorFactory$5.createError('max-entries-must-be-number');
            if (b && 'number' != typeof b) throw ErrorFactory$5.createError('max-age-seconds-must-be-number');
            this.maxEntries = a, this.maxAgeSeconds = b, this._dbs = new Map, this._caches = new Map, this._expirationMutex = !1, this._timestampForNextRun = null;
        }
        async getDB({
            cacheName: a
        } = {}) {
            isType({
                cacheName: a
            }, 'string');
            const b = `${idbName}-${a}`;
            if (!this._dbs.has(b)) {
                const c = await idb.open(b, idbVersion, (d) => {
                    const e = d.createObjectStore(a, {
                        keyPath: urlPropertyName
                    });
                    e.createIndex(timestampPropertyName, timestampPropertyName, {
                        unique: !1
                    });
                });
                this._dbs.set(b, c);
            }
            return this._dbs.get(b)
        }
        async getCache({
            cacheName: a
        } = {}) {
            if (isType({
                    cacheName: a
                }, 'string'), !this._caches.has(a)) {
                const b = await caches.open(a);
                this._caches.set(a, b);
            }
            return this._caches.get(a)
        }
        isResponseFresh({
            cachedResponse: a,
            now: b
        } = {}) {
            if (a && this.maxAgeSeconds) {
                isInstance({
                    cachedResponse: a
                }, Response);
                const c = a.headers.get('date');
                if (c) {
                    'undefined' == typeof b && (b = Date.now());
                    const d = new Date(c);
                    if (d.getTime() + 1e3 * this.maxAgeSeconds < b) return !1
                }
            }
            return !0
        }
        async updateTimestamp({
            cacheName: a,
            url: b,
            now: c
        } = {}) {
            isType({
                url: b
            }, 'string'), isType({
                cacheName: a
            }, 'string');
            const d = new URL(b, location);
            d.hash = '', 'undefined' == typeof c && (c = Date.now());
            const e = await this.getDB({
                    cacheName: a
                }),
                f = e.transaction(a, 'readwrite');
            f.objectStore(a).put({
                [timestampPropertyName]: c,
                [urlPropertyName]: d.href
            }), await f.complete;
        }
        async expireEntries({
            cacheName: a,
            now: b
        } = {}) {
            if (this._expirationMutex) return void(this._timestampForNextRun = b);
            this._expirationMutex = !0, isType({
                cacheName: a
            }, 'string'), 'undefined' == typeof b && (b = Date.now());
            const c = this.maxAgeSeconds ? await this.findOldEntries({
                    cacheName: a,
                    now: b
                }) : [],
                d = this.maxEntries ? await this.findExtraEntries({
                    cacheName: a
                }) : [],
                e = [...new Set(c.concat(d))];
            if (await this.deleteFromCacheAndIDB({
                    cacheName: a,
                    urls: e
                }), 0 < e.length && logHelper.debug({
                    that: this,
                    message: 'Expired entries have been removed from the cache.',
                    data: {
                        cacheName: a,
                        urls: e
                    }
                }), this._expirationMutex = !1, this._timestampForNextRun) {
                const f = this._timestampForNextRun;
                return this._timestampForNextRun = null, this.expireEntries({
                    cacheName: a,
                    now: f
                })
            }
        }
        async findOldEntries({
            cacheName: a,
            now: b
        } = {}) {
            isType({
                cacheName: a
            }, 'string'), isType({
                now: b
            }, 'number');
            const c = b - 1e3 * this.maxAgeSeconds,
                d = [],
                e = await this.getDB({
                    cacheName: a
                }),
                f = e.transaction(a, 'readonly'),
                g = f.objectStore(a),
                h = g.index(timestampPropertyName);
            return h.iterateCursor((i) => {
                i && (i.value[timestampPropertyName] < c && d.push(i.value[urlPropertyName]), i.continue());
            }), await f.complete, d
        }
        async findExtraEntries({
            cacheName: a
        } = {}) {
            isType({
                cacheName: a
            }, 'string');
            const b = [],
                c = await this.getDB({
                    cacheName: a
                });
            let d = c.transaction(a, 'readonly'),
                e = d.objectStore(a),
                f = e.index(timestampPropertyName);
            const g = await f.count();
            return g > this.maxEntries && (d = c.transaction(a, 'readonly'), e = d.objectStore(a), f = e.index(timestampPropertyName), f.iterateCursor((h) => {
                h && (b.push(h.value[urlPropertyName]), g - b.length > this.maxEntries && h.continue());
            })), await d.complete, b
        }
        async deleteFromCacheAndIDB({
            cacheName: a,
            urls: b
        } = {}) {
            if (isType({
                    cacheName: a
                }, 'string'), isArrayOfType({
                    urls: b
                }, 'string'), 0 < b.length) {
                const c = await this.getCache({
                        cacheName: a
                    }),
                    d = await this.getDB({
                        cacheName: a
                    });
                for (let e of b) {
                    await c.delete(e);
                    const f = d.transaction(a, 'readwrite'),
                        g = f.objectStore(a);
                    g.delete(e), await f.complete;
                }
            }
        }
    }

    class CacheExpirationPlugin extends CacheExpiration {
        cacheWillMatch({
            cachedResponse: a,
            now: b
        } = {}) {
            return this.isResponseFresh({
                cachedResponse: a,
                now: b
            }) ? a : null
        }
        async cacheDidUpdate({
            cacheName: a,
            newResponse: b,
            url: c,
            now: d
        } = {}) {
            isType({
                cacheName: a
            }, 'string'), isInstance({
                newResponse: b
            }, Response), 'undefined' == typeof d && (d = Date.now()), await this.updateTimestamp({
                cacheName: a,
                url: c,
                now: d
            }), await this.expireEntries({
                cacheName: a,
                now: d
            });
        }
    }

    const errors$4 = {
        "channel-name-required": `The channelName parameter is required when
    constructing a new BroadcastCacheUpdate instance.`,
        "responses-are-same-parameters-required": `The first, second, and
    headersToCheck parameters must be valid when calling responsesAreSame()`
    };
    var ErrorFactory$6 = new ErrorFactory$1(errors$4);

    const cacheUpdatedMessageType = 'CACHE_UPDATED';
    const defaultHeadersToCheck = ['content-length', 'etag', 'last-modified'];
    const defaultSource = 'workbox-broadcast-cache-update';

    function broadcastUpdate({
        channel: a,
        cacheName: b,
        url: c,
        source: d
    }) {
        isInstance({
            channel: a
        }, BroadcastChannel), isType({
            cacheName: b
        }, 'string'), isType({
            source: d
        }, 'string'), isType({
            url: c
        }, 'string'), a.postMessage({
            type: cacheUpdatedMessageType,
            meta: d,
            payload: {
                cacheName: b,
                updatedUrl: c
            }
        });
    }

    function responsesAreSame({
        first: a,
        second: b,
        headersToCheck: c
    } = {}) {
        if (!(a instanceof Response && b instanceof Response && c instanceof Array)) throw ErrorFactory$6.createError('responses-are-same-parameters-required');
        const d = c.some((e) => {
            return a.headers.has(e) && b.headers.has(e)
        });
        return d ? c.every((e) => {
            return a.headers.has(e) === b.headers.has(e) && a.headers.get(e) === b.headers.get(e)
        }) : (logHelper.log({
            message: `Unable to determine whether the response has been updated
        because none of the headers that would be checked are present.`,
            data: {
                "First Response": a,
                "Second Response": b,
                "Headers To Check": JSON.stringify(c)
            }
        }), !0)
    }

    class BroadcastCacheUpdate {
        constructor({
            channelName: a,
            headersToCheck: b,
            source: c
        } = {}) {
            if ('string' != typeof a || 0 === a.length) throw ErrorFactory$6.createError('channel-name-required');
            this.channelName = a, this.headersToCheck = b || defaultHeadersToCheck, this.source = c || defaultSource;
        }
        get channel() {
            return this._channel || (this._channel = new BroadcastChannel(this.channelName)), this._channel
        }
        notifyIfUpdated({
            first: a,
            second: b,
            cacheName: c,
            url: d
        }) {
            isType({
                cacheName: c
            }, 'string'), responsesAreSame({
                first: a,
                second: b,
                headersToCheck: this.headersToCheck
            }) || broadcastUpdate({
                cacheName: c,
                url: d,
                channel: this.channel,
                source: this.source
            });
        }
    }

    class BroadcastCacheUpdatePlugin extends BroadcastCacheUpdate {
        cacheDidUpdate({
            cacheName: a,
            oldResponse: b,
            newResponse: c,
            url: d
        }) {
            isType({
                cacheName: a
            }, 'string'), isInstance({
                newResponse: c
            }, Response), b && this.notifyIfUpdated({
                cacheName: a,
                first: b,
                second: c,
                url: d
            });
        }
    }

    class Strategies {
        constructor({
            cacheId: a
        } = {}) {
            this._cacheId = a;
        }
        cacheFirst(a) {
            return this._getCachingMechanism(CacheFirst, a)
        }
        cacheOnly(a) {
            return this._getCachingMechanism(CacheOnly, a)
        }
        networkFirst(a) {
            return this._getCachingMechanism(NetworkFirst, a)
        }
        networkOnly(a) {
            return this._getCachingMechanism(NetworkOnly, a)
        }
        staleWhileRevalidate(a) {
            return this._getCachingMechanism(StaleWhileRevalidate, a)
        }
        _getCachingMechanism(a, b = {}) {
            const c = {
                    cacheExpiration: CacheExpirationPlugin,
                    broadcastCacheUpdate: BroadcastCacheUpdatePlugin,
                    cacheableResponse: CacheableResponsePlugin
                },
                d = {
                    plugins: [],
                    cacheId: this._cacheId
                };
            b.cacheName && (d.cacheName = b.cacheName);
            const e = Object.keys(c);
            return e.forEach((f) => {
                if (b[f]) {
                    const g = c[f],
                        h = b[f];
                    d.plugins.push(new g(h));
                }
            }), b.plugins && b.plugins.forEach((f) => {
                d.plugins.push(f);
            }), b.requestWrapper = new RequestWrapper(d), new a(b)
        }
    }

    const errorMessageFactory = (a, b) => {
        let c = `An error was thrown by workbox with error code: ` + `;'${a}'`;
        return b && (c += ` with extras: '${JSON.stringify(b)}'`), c
    };

    class WorkboxError extends Error {
        constructor(a, b) {
            super(), this.name = a, this.message = errorMessageFactory(a, b), b && (this.extras = b);
        }
    }

    class BaseCacheManager {
        constructor({
            cacheName: a,
            cacheId: b,
            plugins: c
        } = {}) {
            if (b && ('string' != typeof b || 0 === b.length)) throw new WorkboxError('bad-cache-id', {
                cacheId: b
            });
            this._entriesToCache = new Map, this._requestWrapper = new RequestWrapper({
                cacheName: a,
                cacheId: b,
                plugins: c,
                fetchOptions: {
                    credentials: 'same-origin'
                }
            });
        }
        _addEntries(a) {
            this._parsedCacheUrls = null, a.forEach((b) => {
                this._addEntryToInstallList(this._parseEntry(b));
            });
        }
        getCacheName() {
            return this._requestWrapper.cacheName
        }
        getCachedUrls() {
            return this._parsedCacheUrls || (this._parsedCacheUrls = Array.from(this._entriesToCache.keys()).map((a) => new URL(a, location).href)), this._parsedCacheUrls
        }
        _addEntryToInstallList(a) {
            const b = a.entryID,
                c = this._entriesToCache.get(a.entryID);
            return c ? void this._onDuplicateInstallEntryFound(a, c) : void this._entriesToCache.set(b, a)
        }
        async install() {
            if (0 === this._entriesToCache.size) return;
            const a = [];
            return this._entriesToCache.forEach((b) => {
                a.push(this._cacheEntry(b));
            }), Promise.all(a)
        }
        async _cacheEntry(a) {
            const b = await this._isAlreadyCached(a);
            if (!b) try {
                return await this._requestWrapper.fetchAndCache({
                    request: a.getNetworkRequest(),
                    waitOnCache: !0,
                    cacheKey: a.request,
                    cleanRedirects: !0
                }), this._onEntryCached(a)
            } catch (c) {
                throw new WorkboxError('request-not-cached', {
                    url: a.request.url,
                    error: c
                })
            }
        }
        async cleanup() {
            if (!(await caches.has(this.getCacheName()))) return;
            const a = [];
            this._entriesToCache.forEach((e) => {
                a.push(e.request.url);
            });
            const b = await this._getCache(),
                c = await b.keys(),
                d = c.filter((e) => !a.includes(e.url));
            return Promise.all(d.map(async (e) => {
                await b.delete(e), await this._onEntryDeleted(e.url);
            }))
        }
        async _getCache() {
            return this._cache || (this._cache = await caches.open(this.getCacheName())), this._cache
        }
        _parseEntry() {
            throw new WorkboxError('requires-overriding')
        }
        _onDuplicateEntryFound() {
            throw new WorkboxError('requires-overriding')
        }
        _isAlreadyCached() {
            throw new WorkboxError('requires-overriding')
        }
        _onEntryCached() {
            throw new WorkboxError('requires-overriding')
        }
        _onEntryDeleted() {
            throw new WorkboxError('requires-overriding')
        }
    }

    class IDBHelper {
        constructor(a, b, c) {
            if (a == void 0 || b == void 0 || c == void 0) throw Error('name, version, storeName must be passed to the constructor.');
            this._name = a, this._version = b, this._storeName = c;
        }
        _getDb() {
            return this._dbPromise ? this._dbPromise : (this._dbPromise = idb.open(this._name, this._version, (a) => {
                a.createObjectStore(this._storeName);
            }).then((a) => {
                return a
            }), this._dbPromise)
        }
        close() {
            return this._dbPromise ? this._dbPromise.then((a) => {
                a.close(), this._dbPromise = null;
            }) : void 0
        }
        put(a, b) {
            return this._getDb().then((c) => {
                const d = c.transaction(this._storeName, 'readwrite'),
                    e = d.objectStore(this._storeName);
                return e.put(b, a), d.complete
            })
        }
        delete(a) {
            return this._getDb().then((b) => {
                const c = b.transaction(this._storeName, 'readwrite'),
                    d = c.objectStore(this._storeName);
                return d.delete(a), c.complete
            })
        }
        get(a) {
            return this._getDb().then((b) => {
                return b.transaction(this._storeName).objectStore(this._storeName).get(a)
            })
        }
        getAllValues() {
            return this._getDb().then((a) => {
                return a.transaction(this._storeName).objectStore(this._storeName).getAll()
            })
        }
        getAllKeys() {
            return this._getDb().then((a) => {
                return a.transaction(this._storeName).objectStore(this._storeName).getAllKeys()
            })
        }
    }

    const cacheBustParamName = '_workbox-precaching';
    const version = 'v1';
    const dbName = 'workbox-precaching';
    const dbVersion = '1';
    const dbStorename = 'asset-revisions';
    let tmpRevisionedCacheName = `workbox-precaching-revisioned-${version}`;
    self && self.registration && (tmpRevisionedCacheName += `-${self.registration.scope}`);
    const defaultRevisionedCacheName = tmpRevisionedCacheName;

    class RevisionDetailsModel {
        constructor() {
            this._idbHelper = new IDBHelper(dbName, dbVersion, dbStorename);
        }
        get(a) {
            return this._idbHelper.get(a)
        }
        put(a, b) {
            return this._idbHelper.put(a, b)
        }
        delete(a) {
            return this._idbHelper.delete(a)
        }
        _close() {
            this._idbHelper.close();
        }
    }

    class BaseCacheEntry {
        constructor({
            entryID: a,
            revision: b,
            request: c,
            cacheBust: d
        }) {
            this.entryID = a, this.revision = b, this.request = c, this.cacheBust = d;
        }
        getNetworkRequest() {
            if (!0 !== this.cacheBust) return this.request;
            let a = this.request.url;
            const b = {};
            if (!0 === this.cacheBust)
                if ('cache' in Request.prototype) b.cache = 'reload';
                else {
                    const c = new URL(a, location);
                    c.search += (c.search ? '&' : '') + encodeURIComponent(cacheBustParamName) + '=' + encodeURIComponent(this.revision), a = c.toString();
                }
            return new Request(a, b)
        }
    }

    class StringCacheEntry extends BaseCacheEntry {
        constructor(a) {
            if (isType({
                    url: a
                }, 'string'), 0 === a.length) throw new WorkboxError('invalid-string-entry', {
                url: a
            });
            super({
                entryID: a,
                revision: a,
                request: new Request(a),
                cacheBust: !1
            });
        }
    }

    class ObjectCacheEntry extends BaseCacheEntry {
        constructor({
            entryID: a,
            revision: b,
            url: c,
            cacheBust: d
        }) {
            if ('undefined' == typeof d && (d = !0), 'undefined' == typeof a && (a = new URL(c, location).toString()), isType({
                    revision: b
                }, 'string'), 0 === b.length) throw new WorkboxError('invalid-object-entry', {
                problemParam: 'revision',
                problemValue: b
            });
            if (isType({
                    url: c
                }, 'string'), 0 === c.length) throw new WorkboxError('invalid-object-entry', {
                problemParam: 'url',
                problemValue: c
            });
            if (isType({
                    entryID: a
                }, 'string'), 0 === a.length) throw new WorkboxError('invalid-object-entry', {
                problemParam: 'entryID',
                problemValue: a
            });
            isType({
                cacheBust: d
            }, 'boolean'), super({
                entryID: a,
                revision: b,
                request: new Request(c),
                cacheBust: d
            });
        }
    }

    class RevisionedCacheManager extends BaseCacheManager {
        constructor(a = {}) {
            a.cacheName = a.cacheName || defaultRevisionedCacheName, super(a), this._revisionDetailsModel = new RevisionDetailsModel;
        }
        addToCacheList({
            revisionedFiles: a
        } = {}) {
            isInstance({
                revisionedFiles: a
            }, Array), super._addEntries(a);
            const b = a.filter((c) => 'string' == typeof c);
            0 < b.length && logHelper.debug({
                that: this,
                message: `Some precache entries are URLs without separate revision
          fields. If the URLs themselves do not contain revisioning info,
          like a hash or a version number, your users won't receive updates.`,
                data: {
                    "URLs without revision fields": JSON.stringify(b),
                    "Examples of safe, versioned URLs": `'/path/file.abcd1234.css' or '/v1.0.0/file.js'`,
                    "Examples of dangerous, unversioned URLs": `'index.html' or '/path/file.css' or '/latest/file.js'`
                }
            });
        }
        _parseEntry(a) {
            if (null === a) throw new WorkboxError('unexpected-precache-entry', {
                input: a
            });
            let b;
            switch (typeof a) {
                case 'string':
                    b = new StringCacheEntry(a);
                    break;
                case 'object':
                    b = new ObjectCacheEntry(a);
                    break;
                default:
                    throw new WorkboxError('unexpected-precache-entry', {
                        input: a
                    });
            }
            return b
        }
        _onDuplicateInstallEntryFound(a, b) {
            if (b.revision !== a.revision) throw new WorkboxError('duplicate-entry-diff-revisions', {
                firstEntry: {
                    url: b.request.url,
                    revision: b.revision
                },
                secondEntry: {
                    url: a.request.url,
                    revision: a.revision
                }
            })
        }
        async _isAlreadyCached(a) {
            const b = await this._revisionDetailsModel.get(a.entryID);
            if (b !== a.revision) return !1;
            const c = await this._getCache(),
                d = await c.match(a.request);
            return !!d
        }
        async _onEntryCached(a) {
            await this._revisionDetailsModel.put(a.entryID, a.revision);
        }
        async _onEntryDeleted(a) {
            await this._revisionDetailsModel.delete(a);
        }
        _close() {
            this._revisionDetailsModel._close();
        }
        cleanup() {
            return super.cleanup().then(() => {
                return this._close()
            })
        }
    }

    if (!isServiceWorkerGlobalScope()) throw new WorkboxError('not-in-sw');

    class WorkboxSW$1 {
        constructor({
            cacheId: a,
            skipWaiting: b,
            clientsClaim: c,
            handleFetch: d,
            directoryIndex: e = 'index.html',
            precacheChannelName: f = 'precache-updates',
            ignoreUrlParametersMatching: g = [/^utm_/]
        } = {}) {
            if (!isServiceWorkerGlobalScope()) throw ErrorFactory.createError('not-in-sw');
            if (isDevBuild() && (isLocalhost() ? logHelper.debug({
                    message: 'Welcome to Workbox!',
                    data: {
                        "📖": 'Read the guides and documentation\nhttps://workboxjs.org/',
                        "❓": 'Use the [workbox] tag on StackOverflow to ask questions\nhttps://stackoverflow.com/questions/ask?tags=workbox',
                        "🐛": 'Found a bug? Report it on GitHub\nhttps://github.com/GoogleChrome/workbox/issues/new'
                    }
                }) : logHelper.warn(`This appears to be a production server. Please switch
          to the smaller, optimized production build of Workbox.`)), a && ('string' != typeof a || 0 === a.length)) throw ErrorFactory.createError('bad-cache-id');
            if (b && 'boolean' != typeof b) throw ErrorFactory.createError('bad-skip-waiting');
            if (c && 'boolean' != typeof c) throw ErrorFactory.createError('bad-clients-claim');
            if ('undefined' != typeof e)
                if (!1 === e || null === e) e = !1;
                else if ('string' != typeof e || 0 === e.length) throw ErrorFactory.createError('bad-directory-index');
            const h = [];
            f && h.push(new BroadcastCacheUpdatePlugin({
                channelName: f,
                source: registration && registration.scope ? registration.scope : location
            })), this._runtimeCacheName = getDefaultCacheName({
                cacheId: a
            }), this._revisionedCacheManager = new RevisionedCacheManager({
                cacheId: a,
                plugins: h
            }), this._strategies = new Strategies({
                cacheId: a
            }), this._router = new Router$$1(this._revisionedCacheManager.getCacheName(), d), this._registerInstallActivateEvents(b, c), this._registerDefaultRoutes(g, e);
        }
        precache(a) {
            if (!Array.isArray(a)) throw ErrorFactory.createError('bad-revisioned-cache-list');
            this._revisionedCacheManager.addToCacheList({
                revisionedFiles: a
            });
        }
        get router() {
            return this._router
        }
        get strategies() {
            return this._strategies
        }
        get runtimeCacheName() {
            return this._runtimeCacheName
        }
        _registerInstallActivateEvents(a, b) {
            self.addEventListener('install', (c) => {
                const d = this._revisionedCacheManager.getCachedUrls();
                0 < d.length && logHelper.debug({
                    that: this,
                    message: `The precached URLs will automatically be served using a
            cache-first strategy.`,
                    data: {
                        "Precached URLs": JSON.stringify(d)
                    }
                }), c.waitUntil(this._revisionedCacheManager.install().then(() => {
                    if (a) return self.skipWaiting()
                }));
            }), self.addEventListener('activate', (c) => {
                c.waitUntil(this._revisionedCacheManager.cleanup().then(() => {
                    if (b) return self.clients.claim()
                }));
            });
        }
        _registerDefaultRoutes(a, b) {
            const c = [];
            (a || b) && c.push(this._getCacheMatchPlugin(a, b));
            const d = this.strategies.cacheFirst({
                cacheName: this._revisionedCacheManager.getCacheName(),
                plugins: c
            });
            this.router.registerRoute(({
                url: f
            }) => {
                f.hash = '';
                const g = this._revisionedCacheManager.getCachedUrls();
                if (-1 !== g.indexOf(f.href)) return !0;
                let h = this._removeIgnoreUrlParams(f.href, a);
                return -1 !== g.indexOf(h.href) || b && h.pathname.endsWith('/') && (f.pathname += b, -1 !== g.indexOf(f.href))
            }, d);
        }
        _getCacheMatchPlugin(a, b) {
            return {
                cacheWillMatch: async ({
                    request: d,
                    cache: e,
                    cachedResponse: f,
                    matchOptions: g
                }) => {
                    if (f) return f;
                    let h = this._removeIgnoreUrlParams(d.url, a);
                    return e.match(h.toString(), g).then((i) => {
                        return !i && h.pathname.endsWith('/') ? (h.pathname += b, e.match(h.toString(), g)) : i
                    })
                }
            }
        }
        _removeIgnoreUrlParams(a, b) {
            const c = new URL(a),
                d = c.search.slice(1),
                e = d.split('&'),
                f = e.map((i) => {
                    return i.split('=')
                }),
                g = f.filter((i) => {
                    return b.every((j) => {
                        return !j.test(i[0])
                    })
                }),
                h = g.map((i) => {
                    return i.join('=')
                });
            return c.search = h.join('&'), c
        }
    }

    return WorkboxSW$1;

}());
//# sourceMappingURL=workbox-sw.prod.v1.1.0.js.map