!(function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react"), require("react-dom")) : "function" == typeof define && define.amd ? define("react-aria-menubutton", ["react", "react-dom"], t) : "object" == typeof exports ? exports.ReactAriaMenuButton = t(require("react"), require("react-dom")) : e.ReactAriaMenuButton = t(e.React, e.ReactDOM)
})(window, function(e, t) {
    return (function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var r = n[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function(e, n, o) {
            t.o(e, n) || Object.defineProperty(e, n, {
                enumerable: !0,
                get: o
            })
        }, t.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.t = function(e, n) {
            if (1 & n && (e = t(e)), 8 & n) return e;
            if (4 & n && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (t.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & n && "string" != typeof e)
                for (var r in e) t.d(o, r, function(t) {
                    return e[t]
                }.bind(null, r));
            return o
        }, t.n = function(e) {
            var n = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return t.d(n, "a", n), n
        }, t.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, t.p = "", t(t.s = 16)
    })([function(e, t, n) {
        "use strict";
        e.exports = function(e, t, n) {
            for (var o in n = n || {}, t) t.hasOwnProperty(o) && (n[o] || (e[o] = t[o]))
        }
    }, function(e, t, n) {
        e.exports = n(14)()
    }, function(t, n) {
        t.exports = e
    }, function(e, n) {
        e.exports = t
    }, function(e, t, n) {
        "use strict";
        var o = {},
            r = "a menu outside a mounted Wrapper with an id, or a menu that does not exist";
        e.exports = {
            registerManager: function(e, t) {
                o[e] = t
            },
            unregisterManager: function(e) {
                delete o[e]
            },
            openMenu: function(e, t) {
                var n = o[e];
                if (!n) throw new Error("Cannot open " + r);
                n.openMenu(t)
            },
            closeMenu: function(e, t) {
                var n = o[e];
                if (!n) throw new Error("Cannot close " + r);
                n.closeMenu(t)
            }
        }
    }, function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        var r = n(2),
            i = n(1),
            s = n(0),
            a = {
                children: i.node.isRequired,
                tag: i.string,
                text: i.string,
                value: i.any
            },
            c = (function(e) {
                function t() {
                    var n, r;
                    !(function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, t);
                    for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return n = r = o(this, e.call.apply(e, [this].concat(s))), r.handleKeyDown = function(e) {
                        "Enter" !== e.key && " " !== e.key || "a" === r.props.tag && r.props.href || (e.preventDefault(), r.selectItem(e))
                    }, r.selectItem = function(e) {
                        var t = void 0 !== r.props.value ? r.props.value : r.props.children;
                        r.context.ambManager.handleSelection(t, e)
                    }, r.registerNode = function(e) {
                        r.node = e
                    }, o(r, n)
                }
                return (function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                })(t, e), t.prototype.componentDidMount = function() {
                    this.context.ambManager.addItem({
                        node: this.node,
                        text: this.props.text
                    })
                }, t.prototype.render = function() {
                    var e = {
                        onClick: this.selectItem,
                        onKeyDown: this.handleKeyDown,
                        role: "menuitem",
                        tabIndex: "-1",
                        ref: this.registerNode
                    };
                    return s(e, this.props, a), r.createElement(this.props.tag, e, this.props.children)
                }, t
            })(r.Component);
        c.propTypes = a, c.defaultProps = {
            tag: "div"
        }, c.contextTypes = {
            ambManager: i.object.isRequired
        }, e.exports = c
    }, function(e, t) {
        e.exports = function(e, t, n) {
            function o(e) {
                d || t(e)
            }

            function r(t) {
                d = !0, l || (l = !0, e.addEventListener("touchmove", i, n), e.addEventListener("touchend", s, n), e.addEventListener("touchcancel", a, n), m = !1, p = t.touches[0].clientX, u = t.touches[0].clientY)
            }

            function i(e) {
                m || Math.abs(e.touches[0].clientX - p) <= 10 && Math.abs(e.touches[0].clientY - u) <= 10 || (m = !0)
            }

            function s(e) {
                l = !1, c(), m || t(e)
            }

            function a() {
                l = !1, m = !1, p = 0, u = 0
            }

            function c() {
                e.removeEventListener("touchmove", i, n), e.removeEventListener("touchend", s, n), e.removeEventListener("touchcancel", a, n)
            }
            var p = 0,
                u = 0,
                l = !1,
                m = !1,
                d = !1;
            return e.addEventListener("click", o, n), e.addEventListener("touchstart", r, n), {
                remove: function() {
                    e.removeEventListener("click", o, n), e.removeEventListener("touchstart", r, n), c()
                }
            }
        }
    }, function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        var r, i, s = n(2),
            a = n(3),
            c = n(1),
            p = n(6),
            u = n(0),
            l = {
                children: c.oneOfType([c.func, c.node]).isRequired,
                tag: c.string
            };
        e.exports = (i = r = (function(e) {
            function t() {
                var n, r;
                !(function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, t);
                for (var i = arguments.length, s = Array(i), c = 0; c < i; c++) s[c] = arguments[c];
                return n = r = o(this, e.call.apply(e, [this].concat(s))), r.addTapListener = function() {
                    var e = a.findDOMNode(r);
                    if (e) {
                        var t = e.ownerDocument;
                        t && (r.tapListener = p(t.documentElement, r.handleTap))
                    }
                }, r.handleTap = function(e) {
                    a.findDOMNode(r).contains(e.target) || a.findDOMNode(r.context.ambManager.button).contains(e.target) || r.context.ambManager.closeMenu()
                }, o(r, n)
            }
            return (function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            })(t, e), t.prototype.componentWillMount = function() {
                this.context.ambManager.menu = this
            }, t.prototype.componentDidUpdate = function() {
                var e = this.context.ambManager;
                e.options.closeOnBlur && (e.isOpen && !this.tapListener ? this.addTapListener() : !e.isOpen && this.tapListener && (this.tapListener.remove(), delete this.tapListener), e.isOpen || e.clearItems())
            }, t.prototype.componentWillUnmount = function() {
                this.tapListener && this.tapListener.remove(), this.context.ambManager.destroy()
            }, t.prototype.render = function() {
                var e = this.props,
                    t = this.context.ambManager,
                    n = "function" == typeof e.children ? e.children({
                        isOpen: t.isOpen
                    }) : !!t.isOpen && e.children;
                if (!n) return !1;
                var o = {
                    onKeyDown: t.handleMenuKey,
                    role: "menu",
                    tabIndex: -1
                };
                return t.options.closeOnBlur && (o.onBlur = t.handleBlur), u(o, e, l), s.createElement(e.tag, o, n)
            }, t
        })(s.Component), r.propTypes = l, r.defaultProps = {
            tag: "div"
        }, r.contextTypes = {
            ambManager: c.object.isRequired
        }, i)
    }, function(e, t, n) {
        "use strict";

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }
        var r = n(2),
            i = n(1),
            s = n(0),
            a = {
                children: i.node.isRequired,
                disabled: i.bool,
                tag: i.string
            },
            c = (function(e) {
                function t() {
                    var n, r;
                    !(function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, t);
                    for (var i = arguments.length, s = Array(i), a = 0; a < i; a++) s[a] = arguments[a];
                    return n = r = o(this, e.call.apply(e, [this].concat(s))), r.handleKeyDown = function(e) {
                        if (!r.props.disabled) {
                            var t = r.context.ambManager;
                            switch (e.key) {
                                case "ArrowDown":
                                    e.preventDefault(), t.isOpen ? t.focusItem(0) : t.openMenu();
                                    break;
                                case "Enter":
                                case " ":
                                    e.preventDefault(), t.toggleMenu();
                                    break;
                                case "Escape":
                                    t.handleMenuKey(e);
                                    break;
                                default:
                                    t.handleButtonNonArrowKey(e)
                            }
                        }
                    }, r.handleClick = function() {
                        r.props.disabled || r.context.ambManager.toggleMenu({}, {
                            focusMenu: !1
                        })
                    }, o(r, n)
                }
                return (function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                })(t, e), t.prototype.componentWillMount = function() {
                    this.context.ambManager.button = this
                }, t.prototype.componentWillUnmount = function() {
                    this.context.ambManager.destroy()
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = this.context.ambManager,
                        n = {
                            role: "button",
                            tabIndex: e.disabled ? "" : "0",
                            "aria-haspopup": !0,
                            "aria-expanded": t.isOpen,
                            "aria-disabled": e.disabled,
                            onKeyDown: this.handleKeyDown,
                            onClick: this.handleClick
                        },
                        o = {};
                    return s(o, a), ["button", "fieldset", "input", "optgroup", "option", "select", "textarea"].indexOf(e.tag) >= 0 && delete o.disabled, t.options.closeOnBlur && (n.onBlur = t.handleBlur), s(n, e, o), r.createElement(e.tag, n, e.children)
                }, t
            })(r.Component);
        c.propTypes = a, c.contextTypes = {
            ambManager: i.object.isRequired
        }, c.defaultProps = {
            tag: "span"
        }, e.exports = c
    }, function(e, t) {
        function n(e) {
            var t, n, o = (e = e || {}).keybindings || {};
            for (t in this._settings = {
                    keybindings: {
                        next: o.next || {
                            keyCode: 40
                        },
                        prev: o.prev || {
                            keyCode: 38
                        },
                        first: o.first,
                        last: o.last
                    },
                    wrap: e.wrap,
                    stringSearch: e.stringSearch,
                    stringSearchDelay: 800
                }, this._keybindingsLookup = [], this._settings.keybindings)(n = this._settings.keybindings[t]) && [].concat(n).forEach(function(e) {
                e.metaKey = e.metaKey || !1, e.ctrlKey = e.ctrlKey || !1, e.altKey = e.altKey || !1, e.shiftKey = e.shiftKey || !1, this._keybindingsLookup.push({
                    action: t,
                    eventMatcher: e
                })
            }.bind(this));
            this._searchString = "", this._members = [], e.members && this.setMembers(e.members), this._boundHandleKeydownEvent = this._handleKeydownEvent.bind(this)
        }

        function o(e) {
            e && e.focus && (e.focus(), "input" === e.tagName.toLowerCase() && e.select())
        }
        n.prototype.activate = function() {
            return document.addEventListener("keydown", this._boundHandleKeydownEvent, !0), this
        }, n.prototype.deactivate = function() {
            return document.removeEventListener("keydown", this._boundHandleKeydownEvent, !0), this._clearSearchStringRefreshTimer(), this
        }, n.prototype._handleKeydownEvent = function(e) {
            if (-1 !== this._getActiveElementIndex()) {
                var t = !1;
                this._keybindingsLookup.forEach(function(n) {
                    if ((function(e, t) {
                            for (var n in e)
                                if (void 0 !== t[n] && e[n] !== t[n]) return !1;
                            return !0
                        })(n.eventMatcher, e)) switch (t = !0, e.preventDefault(), n.action) {
                        case "next":
                            this.moveFocusForward();
                            break;
                        case "prev":
                            this.moveFocusBack();
                            break;
                        case "first":
                            this.moveFocusToFirst();
                            break;
                        case "last":
                            this.moveFocusToLast();
                            break;
                        default:
                            return
                    }
                }.bind(this)), t || this._handleUnboundKey(e)
            }
        }, n.prototype.moveFocusForward = function() {
            var e, t = this._getActiveElementIndex();
            return e = t < this._members.length - 1 ? t + 1 : this._settings.wrap ? 0 : t, this.focusNodeAtIndex(e), e
        }, n.prototype.moveFocusBack = function() {
            var e, t = this._getActiveElementIndex();
            return e = t > 0 ? t - 1 : this._settings.wrap ? this._members.length - 1 : t, this.focusNodeAtIndex(e), e
        }, n.prototype.moveFocusToFirst = function() {
            this.focusNodeAtIndex(0)
        }, n.prototype.moveFocusToLast = function() {
            this.focusNodeAtIndex(this._members.length - 1)
        }, n.prototype._handleUnboundKey = function(e) {
            if (this._settings.stringSearch) {
                if ("" !== this._searchString && (" " === e.key || 32 === e.keyCode)) return e.preventDefault(), -1;
                if (!(function(e) {
                        return e >= 65 && e <= 90
                    })(e.keyCode)) return -1;
                if (e.ctrlKey || e.metaKey || e.altKey) return -1;
                e.preventDefault(), this._addToSearchString(String.fromCharCode(e.keyCode)), this._runStringSearch()
            }
        }, n.prototype._clearSearchString = function() {
            this._searchString = ""
        }, n.prototype._addToSearchString = function(e) {
            this._searchString += e.toLowerCase()
        }, n.prototype._startSearchStringRefreshTimer = function() {
            var e = this;
            this._clearSearchStringRefreshTimer(), this._stringSearchTimer = setTimeout(function() {
                e._clearSearchString()
            }, this._settings.stringSearchDelay)
        }, n.prototype._clearSearchStringRefreshTimer = function() {
            clearTimeout(this._stringSearchTimer)
        }, n.prototype._runStringSearch = function() {
            this._startSearchStringRefreshTimer(), this.moveFocusByString(this._searchString)
        }, n.prototype.moveFocusByString = function(e) {
            for (var t, n = 0, r = this._members.length; n < r; n++)
                if ((t = this._members[n]).text && 0 === t.text.indexOf(e)) return o(t.node)
        }, n.prototype._findIndexOfNode = function(e) {
            for (var t = 0, n = this._members.length; t < n; t++)
                if (this._members[t].node === e) return t;
            return -1
        }, n.prototype._getActiveElementIndex = function() {
            return this._findIndexOfNode(document.activeElement)
        }, n.prototype.focusNodeAtIndex = function(e) {
            var t = this._members[e];
            return t && o(t.node), this
        }, n.prototype.addMember = function(e, t) {
            var n = e.node || e,
                o = e.text || n.getAttribute("data-focus-group-text") || n.textContent || "";
            this._checkNode(n);
            var r = {
                node: n,
                text: o.replace(/[\W_]/g, "").toLowerCase()
            };
            return null !== t && void 0 !== t ? this._members.splice(t, 0, r) : this._members.push(r), this
        }, n.prototype.removeMember = function(e) {
            var t = "number" == typeof e ? e : this._findIndexOfNode(e);
            if (-1 !== t) return this._members.splice(t, 1), this
        }, n.prototype.clearMembers = function() {
            return this._members = [], this
        }, n.prototype.setMembers = function(e) {
            this.clearMembers();
            for (var t = 0, n = e.length; t < n; t++) this.addMember(e[t]);
            return this
        }, n.prototype.getMembers = function() {
            return this._members
        }, n.prototype._checkNode = function(e) {
            if (!e.nodeType || e.nodeType !== window.Node.ELEMENT_NODE) throw new Error("focus-group: only DOM nodes allowed");
            return e
        }, e.exports = function(e) {
            return new n(e)
        }
    }, function(e, t, n) {
        "use strict";
        var o = n(3),
            r = n(9),
            i = n(4),
            s = {
                wrap: !0,
                stringSearch: !0
            },
            a = {
                init: function(e) {
                    this.options = e || {}, void 0 === this.options.closeOnSelection && (this.options.closeOnSelection = !0), void 0 === this.options.closeOnBlur && (this.options.closeOnBlur = !0), this.options.id && i.registerManager(this.options.id, this), this.handleBlur = function() {
                        var e = this;
                        e.blurTimer = setTimeout(function() {
                            var t = o.findDOMNode(e.button);
                            if (t) {
                                var n = t.ownerDocument.activeElement;
                                if (!t || n !== t) {
                                    var r = o.findDOMNode(e.menu);
                                    r !== n ? r && r.contains(n) || e.isOpen && e.closeMenu({
                                        focusButton: !1
                                    }) : e.focusItem(0)
                                }
                            }
                        }, 0)
                    }.bind(this), this.handleSelection = function(e, t) {
                        this.options.closeOnSelection && this.closeMenu({
                            focusButton: !0
                        }), this.options.onSelection && this.options.onSelection(e, t)
                    }.bind(this), this.handleMenuKey = function(e) {
                        this.isOpen && "Escape" === e.key && (e.preventDefault(), this.closeMenu({
                            focusButton: !0
                        }))
                    }.bind(this), this.focusGroup = r(s), this.button = null, this.menu = null, this.isOpen = !1
                },
                focusItem: function(e) {
                    this.focusGroup.focusNodeAtIndex(e)
                },
                addItem: function(e) {
                    this.focusGroup.addMember(e)
                },
                clearItems: function() {
                    this.focusGroup.clearMembers()
                },
                handleButtonNonArrowKey: function(e) {
                    this.focusGroup._handleUnboundKey(e)
                },
                destroy: function() {
                    this.button = null, this.menu = null, this.focusGroup.deactivate(), clearTimeout(this.blurTimer), clearTimeout(this.moveFocusTimer)
                },
                update: function() {
                    this.menu.setState({
                        isOpen: this.isOpen
                    }), this.button.setState({
                        menuOpen: this.isOpen
                    }), this.options.onMenuToggle && this.options.onMenuToggle({
                        isOpen: this.isOpen
                    })
                },
                openMenu: function(e) {
                    if (!this.isOpen && (void 0 === (e = e || {}).focusMenu && (e.focusMenu = !0), this.isOpen = !0, this.update(), this.focusGroup.activate(), e.focusMenu)) {
                        var t = this;
                        this.moveFocusTimer = setTimeout(function() {
                            t.focusItem(0)
                        }, 0)
                    }
                },
                closeMenu: function(e) {
                    this.isOpen && (e = e || {}, this.isOpen = !1, this.update(), e.focusButton && o.findDOMNode(this.button).focus())
                },
                toggleMenu: function(e, t) {
                    e = e || {}, t = t || {}, this.isOpen ? this.closeMenu(e) : this.openMenu(t)
                }
            };
        e.exports = function(e) {
            var t = Object.create(a);
            return t.init(e), t
        }
    }, function(e, t, n) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    }, function(e, t, n) {
        "use strict";
        var o = function(e) {};
        e.exports = function(e, t, n, r, i, s, a, c) {
            if (o(t), !e) {
                var p;
                if (void 0 === t) p = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, r, i, s, a, c],
                        l = 0;
                    (p = new Error(t.replace(/%s/g, function() {
                        return u[l++]
                    }))).name = "Invariant Violation"
                }
                throw p.framesToPop = 1, p
            }
        }
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return function() {
                return e
            }
        }
        var r = function() {};
        r.thatReturns = o, r.thatReturnsFalse = o(!1), r.thatReturnsTrue = o(!0), r.thatReturnsNull = o(null), r.thatReturnsThis = function() {
            return this
        }, r.thatReturnsArgument = function(e) {
            return e
        }, e.exports = r
    }, function(e, t, n) {
        "use strict";
        var o = n(13),
            r = n(12),
            i = n(11);
        e.exports = function() {
            function e(e, t, n, o, s, a) {
                a !== i && r(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")
            }

            function t() {
                return e
            }
            e.isRequired = e;
            var n = {
                array: e,
                bool: e,
                func: e,
                number: e,
                object: e,
                string: e,
                symbol: e,
                any: e,
                arrayOf: t,
                element: e,
                instanceOf: t,
                node: e,
                objectOf: t,
                oneOf: t,
                oneOfType: t,
                shape: t,
                exact: t
            };
            return n.checkPropTypes = o, n.PropTypes = n, n
        }
    }, function(e, t, n) {
        "use strict";
        var o = n(2),
            r = n(1),
            i = n(10),
            s = n(0),
            a = {
                children: r.node.isRequired,
                onMenuToggle: r.func,
                onSelection: r.func,
                closeOnSelection: r.bool,
                closeOnBlur: r.bool,
                tag: r.string
            },
            c = (function(e) {
                function t() {
                    return (function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    })(this, t), (function(e, t) {
                        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return !t || "object" != typeof t && "function" != typeof t ? e : t
                    })(this, e.apply(this, arguments))
                }
                return (function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                })(t, e), t.prototype.getChildContext = function() {
                    return {
                        ambManager: this.manager
                    }
                }, t.prototype.componentWillMount = function() {
                    this.manager = i({
                        onMenuToggle: this.props.onMenuToggle,
                        onSelection: this.props.onSelection,
                        closeOnSelection: this.props.closeOnSelection,
                        closeOnBlur: this.props.closeOnBlur,
                        id: this.props.id
                    })
                }, t.prototype.render = function() {
                    var e = {};
                    return s(e, this.props, a), o.createElement(this.props.tag, e, this.props.children)
                }, t
            })(o.Component);
        c.propTypes = a, c.defaultProps = {
            tag: "div"
        }, c.childContextTypes = {
            ambManager: r.object
        }, e.exports = c
    }, function(e, t, n) {
        "use strict";
        var o = n(4);
        e.exports = {
            Wrapper: n(15),
            Button: n(8),
            Menu: n(7),
            MenuItem: n(5),
            openMenu: o.openMenu,
            closeMenu: o.closeMenu
        }
    }])
}), define("spectrum/button/button", ["require", "exports", "tslib", "tslib", "classnames", "react"], function(e, t, n, o, r, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), t.Button = i.forwardRef(function(e, t) {
            function n() {
                M && M.current && M.current.focus(), _ && _.apply(void 0, arguments)
            }
            var s = e.children,
                a = e.className,
                c = void 0 === a ? "" : a,
                p = e.disabled,
                u = e.href,
                l = e.size,
                m = void 0 === l ? "default" : l,
                d = e.variant,
                f = void 0 === d ? "primary" : d,
                h = e.fullWidth,
                v = void 0 !== h && h,
                _ = e.onClick,
                b = e.shouldWrapContent,
                g = void 0 !== b && b,
                y = e.type,
                x = o.__rest(e, ["children", "className", "disabled", "href", "size", "variant", "fullWidth", "onClick", "shouldWrapContent", "type"]),
                M = t || i.createRef(),
                S = x.tagName,
                w = void 0 === S ? "button" : S,
                k = o.__rest(x, ["tagName"]),
                O = r.default(c, {
                    "mc-button": "styleless" !== f,
                    "mc-button-styleless": "styleless" === f,
                    "mc-button-primary": "primary" === f,
                    "mc-button-secondary": "secondary" === f || "borderless" === f,
                    "mc-button-circular": "circular" === f,
                    "mc-button-invisible": "invisible" === f,
                    "mc-button-borderless": "borderless" === f,
                    "mc-button-large": "large" === m,
                    "mc-button-small": "small" === m,
                    "mc-button-disabled": p,
                    "mc-button-full-width": v,
                    "mc-button-wrap-content": g
                }),
                N = i.createElement("span", {
                    className: "mc-button-content"
                }, s),
                E = o.__assign({}, k, {
                    className: O,
                    onClick: n
                });
            return u && (w = "a"), "button" === w ? (E.disabled = p, E.type = y) : ("a" === w && (E.href = u), p && (E.tabIndex = -1)), i.createElement(w, o.__assign({}, E, {
                ref: M
            }), N)
        }), t.Button.displayName = "Button"
    }), define("spectrum/button", ["require", "exports", "tslib", "spectrum/button/button"], function(e, t, n, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.__exportStar(o, t)
    }), define("spectrum/checkbox/checkbox", ["require", "exports", "tslib", "tslib", "classnames", "spectrum/util/debounce", "react"], function(e, t, n, o, r, i, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), s = n.__importStar(s);
        var a = (function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.triggerChange = function(e, t, o) {
                    !n.props.disabled && n.props.onChange && n.props.onChange(e, t, o)
                }, n.handleChange = function(e) {
                    var t = e.currentTarget.checked ? "checked" : "unchecked";
                    "mixed" === n.props.checked && (t = "unchecked"), n.debouncedTriggerChange(t, {
                        shiftKey: !1
                    }, {
                        target: e.currentTarget
                    })
                }, n.handleClick = function(e) {
                    var t = "unchecked";
                    "unchecked" === n.props.checked && (t = "checked"), n.input && (n.input.focus(), n.debouncedTriggerChange(t, {
                        shiftKey: e.shiftKey
                    }, {
                        target: n.input
                    }))
                }, n.debouncedTriggerChange = i.debounce(n.triggerChange, 0, !0), n
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = this,
                    t = this.props,
                    n = t.ariaLabel,
                    o = void 0 === n ? "" : n,
                    i = t.checked,
                    a = void 0 === i ? "unchecked" : i,
                    c = t.className,
                    p = void 0 === c ? "" : c,
                    u = t.disabled,
                    d = t.id,
                    f = void 0 === d ? "" : d,
                    h = t.isHovered,
                    v = t.name,
                    _ = t.tabIndex,
                    b = t.variant,
                    g = void 0 === b ? "default" : b,
                    y = t.autoFocus,
                    x = void 0 !== y && y,
                    M = t.platform,
                    S = void 0 === M ? "web" : M,
                    w = r.default(p, {
                        "mc-checkbox": !0,
                        "mc-checkbox-checked": "checked" === a,
                        "mc-checkbox-disabled": u,
                        "mc-checkbox-hovered": h,
                        "mc-checkbox-invisible": "invisible" === g,
                        "mc-checkbox-mixed": "mixed" === a,
                        "mc-checkbox-unchecked": "unchecked" === a
                    }),
                    k = "mixed" === a ? "mixed" : "checked" === a;
                return s.createElement("label", {
                    className: w,
                    onClick: this.handleClick
                }, s.createElement("input", {
                    "aria-checked": k,
                    "aria-label": o,
                    checked: "checked" === a,
                    className: "mc-checkbox-input",
                    disabled: u,
                    id: f,
                    name: v,
                    onChange: this.handleChange,
                    ref: function(t) {
                        e.input = t, t && (t.indeterminate = "mixed" === a)
                    },
                    tabIndex: _,
                    type: "checkbox",
                    autoFocus: x
                }), s.createElement("span", {
                    className: "mc-checkbox-border"
                }), s.createElement(l, {
                    platform: S
                }), s.createElement(m, null))
            }, t
        })(s.PureComponent);
        t.Checkbox = a;
        var c = s.createElement("svg", {
                "aria-hidden": "true",
                width: 9,
                height: 6,
                version: "1.1",
                className: "mc-checkbox-checked-icon"
            }, s.createElement("path", {
                d: "M4 8L6.94444 11L12.4444 5.5",
                stroke: "#ffffff",
                strokeWidth: "1.5",
                fill: "none"
            }), ";"),
            p = s.createElement("svg", {
                "aria-hidden": "true",
                width: 9,
                height: 6,
                version: "1.1",
                className: "mc-checkbox-checked-icon"
            }, s.createElement("path", {
                d: "M3.5 8L6.14645 10.6464C6.34171 10.8417 6.65829 10.8417 6.85355 10.6464L12.5 5",
                stroke: "#ffffff",
                strokeWidth: "1.5",
                fill: "none"
            })),
            u = s.createElement("svg", {
                "aria-hidden": "true",
                width: "24px",
                height: "24px",
                viewBox: "0 0 24 24",
                version: "1.1",
                className: "mc-checkbox-checked-icon"
            }, s.createElement("path", {
                fill: "#ffffff",
                d: "M13.1239594,15.613961 L9.12395935,15.613961 L9.12395935,17.613961 L14.1239594,17.613961 L15.1239594,17.613961 L15.1239594,5.61396103 L13.1239594,5.61396103 L13.1239594,15.613961 Z",
                transform: "translate(12.123959, 11.613961) rotate(-315.000000) translate(-12.123959, -11.613961)"
            })),
            l = function(e) {
                var t = e.platform;
                return "win" === t ? c : "mac" === t ? p : u
            };
        l.displayName = "CheckedCheckboxIcon";
        var m = function() {
            return s.createElement("svg", {
                "aria-hidden": "true",
                className: "mc-checkbox-mixed-icon",
                width: "6px",
                height: "2px"
            }, s.createElement("rect", {
                id: "Rectangle",
                x: "0",
                y: "0",
                width: "6",
                height: "2",
                fill: "#C1C7CD"
            }))
        };
        m.displayName = "MixedCheckboxIcon"
    }), define("spectrum/checkbox", ["require", "exports", "tslib", "spectrum/checkbox/checkbox"], function(e, t, n, o) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.__exportStar(o, t)
    }), define("spectrum/popover", ["require", "exports", "tslib", "spectrum/popover/popover", "spectrum/popover/popover_content", "spectrum/popover/popover_content_description", "spectrum/popover/popover_content_item", "spectrum/popover/popover_content_separator", "spectrum/popover/popover_content_submenu_item", "spectrum/popover/popover_content_title", "spectrum/popover/popover_item_group", "spectrum/popover/popover_item_group_separator", "spectrum/popover/popover_item_group_title", "spectrum/popover/popover_selectable_item", "spectrum/popover/popover_trigger"], function(e, t, n, o, r, i, s, a, c, p, u, l, m, d, f) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), n.__exportStar(o, t), n.__exportStar(r, t), n.__exportStar(i, t), n.__exportStar(s, t), n.__exportStar(a, t), n.__exportStar(c, t), n.__exportStar(p, t), n.__exportStar(u, t), n.__exportStar(l, t), n.__exportStar(m, t), n.__exportStar(d, t), n.__exportStar(f, t)
    }), define("spectrum/popover/popover", ["require", "exports", "tslib", "tslib", "classnames", "react", "react-aria-menubutton"], function(e, t, n, o, r, i, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i);
        var a = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registerWrapper = function(e) {
                    e && (t.wrapper = e)
                }, t.isOpen = function() {
                    return !!t.wrapper && t.wrapper.manager.isOpen
                }, t.close = function() {
                    if (!t.wrapper) return !1;
                    var e = t.wrapper.manager;
                    e.isOpen && e.closeMenu()
                }, t.open = function(e) {
                    if (!t.wrapper) return !1;
                    var n = t.wrapper.manager;
                    n.isOpen || n.openMenu(e)
                }, t
            }
            return o.__extends(t, e), t.prototype.render = function() {
                var e = this.props,
                    t = e.className,
                    n = o.__rest(e, ["className"]),
                    a = r.default(t, "mc-popover");
                return i.createElement(s.Wrapper, o.__assign({
                    className: a,
                    ref: this.registerWrapper
                }, n))
            }, t
        })(i.PureComponent);
        t.Popover = a
    }), define("spectrum/popover/popover_content", ["require", "exports", "tslib", "tslib", "classnames", "react", "react-aria-menubutton"], function(e, t, n, o, r, i, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), t.PopoverContent = function(e) {
            var t = e.attachment,
                n = void 0 === t ? "left" : t,
                a = e.position,
                c = void 0 === a ? "below" : a,
                p = e.children,
                u = e.className,
                l = e.height,
                m = e.isRevealed,
                d = (e.ref, e.tagName),
                f = void 0 === d ? "nav" : d,
                h = e.width,
                v = o.__rest(e, ["attachment", "position", "children", "className", "height", "isRevealed", "ref", "tagName", "width"]),
                _ = r.default(u, {
                    "mc-popover-content": !0,
                    "mc-popover-content-attach-left": "left" === n,
                    "mc-popover-content-attach-right": "right" === n,
                    "mc-popover-content-position-above": "above" === c,
                    "mc-popover-content-position-below": "below" === c,
                    "mc-popover-content-position-right": "right" === c,
                    "mc-popover-content-position-left": "left" === c
                }),
                b = {
                    width: h,
                    height: l
                },
                g = i.createElement("div", {
                    className: "mc-popover-content-scroller",
                    style: b
                }, i.createElement("div", {
                    className: "mc-popover-content-background"
                }, p));
            return i.createElement("div", {
                className: _
            }, i.createElement(s.Menu, o.__assign({
                tag: f,
                className: "mc-popover-content-menu"
            }, v), function(e) {
                var t = e.isOpen;
                return ("boolean" == typeof m ? m : t) && g
            }))
        }, t.PopoverContent.displayName = "PopoverContent"
    }), define("spectrum/popover/popover_content_description", ["require", "exports", "tslib", "tslib", "classnames", "react"], function(e, t, n, o, r, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), t.PopoverContentDescription = function(e) {
            var t = e.className,
                n = o.__rest(e, ["className"]),
                s = r.default(t, "mc-popover-content-description");
            return i.createElement("div", o.__assign({
                className: s
            }, n))
        }, t.PopoverContentDescription.displayName = "PopoverContentDescription"
    }), define("spectrum/popover/popover_content_item", ["require", "exports", "tslib", "tslib", "classnames", "react", "react-aria-menubutton"], function(e, t, n, o, r, i, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), t.PopoverContentItem = function(e) {
            var t = e.className,
                n = e.disabled,
                a = e.href,
                c = (e.ref, o.__rest(e, ["className", "disabled", "href", "ref"])),
                p = a && !n ? "a" : "span",
                u = r.default(t, "mc-popover-content-item", {
                    "mc-popover-content-item-disabled": n
                });
            return n ? i.createElement(p, o.__assign({
                className: u,
                href: "a" === p ? a : void 0
            }, c)) : i.createElement(s.MenuItem, o.__assign({
                tag: p,
                className: u,
                href: a
            }, c))
        }, t.PopoverContentItem.displayName = "PopoverContentItem"
    }), define("spectrum/popover/popover_content_separator", ["require", "exports", "tslib", "tslib", "classnames", "react"], function(e, t, n, o, r, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), t.PopoverContentSeparator = function(e) {
            var t = e.className,
                n = o.__rest(e, ["className"]),
                s = r.default(t, "mc-popover-content-separator");
            return i.createElement("hr", o.__assign({
                className: s,
                role: "separator"
            }, n))
        }, t.PopoverContentSeparator.displayName = "PopoverContentSeparator"
    }), define("spectrum/popover/popover_content_submenu_item", ["require", "exports", "tslib", "tslib", "classnames", "prop-types", "react", "spectrum/popover/popover", "spectrum/popover/popover_content", "spectrum/popover/popover_trigger"], function(e, t, n, o, r, i, s, a, c, p) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), s = n.__importStar(s);
        var u = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registerWrapper = function(e) {
                    e && (t.wrapper = e)
                }, t.registerNode = function(e) {
                    e && (t.node = e)
                }, t.handleMouseEnter = function(e) {
                    t.wrapper.open({
                        focusMenu: !1
                    })
                }, t.handleMouseLeave = function(e) {
                    t.wrapper.close()
                }, t.handleKeyDown = function(e) {
                    var n = t.wrapper.isOpen() && "left" !== t.props.position && 37 === e.keyCode,
                        o = t.wrapper.isOpen() && "left" === t.props.position && 39 === e.keyCode;
                    27 === e.keyCode || n || o ? e.target === t.node ? t.context.ambManager.handleMenuKey(e) : (e.stopPropagation(), t.node.focus()) : 13 !== e.keyCode && 32 !== e.keyCode && 39 !== e.keyCode || (e.preventDefault(), t.wrapper.isOpen() || t.wrapper.open({
                        focusMenu: !0
                    }))
                }, t.handleSelection = function(e, n) {
                    e && t.context.ambManager.handleSelection(e, n)
                }, t
            }
            return o.__extends(t, e), t.prototype.componentDidMount = function() {
                this.context.ambManager.addItem({
                    node: this.node,
                    text: this.props.buttonLabel
                })
            }, t.prototype.render = function() {
                var e = this.props,
                    t = e.buttonLabel,
                    n = e.className,
                    i = e.children,
                    u = e.position,
                    l = void 0 === u ? "right" : u,
                    m = o.__rest(e, ["buttonLabel", "className", "children", "position"]),
                    d = r.default(n, "mc-popover-content-item", "mc-popover-content-submenu-item"),
                    f = "right" === l ? "left" : "right";
                return s.createElement("span", o.__assign({
                    ref: this.registerNode,
                    role: "menuitem",
                    tabIndex: -1,
                    onMouseEnter: this.handleMouseEnter,
                    onMouseLeave: this.handleMouseLeave,
                    onKeyDown: this.handleKeyDown,
                    className: d
                }, m), s.createElement(a.Popover, {
                    className: "mc-popover-submenu",
                    onSelection: this.handleSelection,
                    ref: this.registerWrapper
                }, s.createElement(p.PopoverTrigger, null, s.createElement("span", {
                    className: "mc-popover-content-submenu-label"
                }, t), s.createElement("span", {
                    className: "mc-popover-content-submenu-arrow"
                }, "▸")), s.createElement(c.PopoverContent, {
                    attachment: f,
                    position: l
                }, i)))
            }, t.contextTypes = {
                ambManager: i.object.isRequired
            }, t
        })(s.Component);
        t.PopoverContentSubmenuItem = u
    }), define("spectrum/popover/popover_content_title", ["require", "exports", "tslib", "tslib", "classnames", "react"], function(e, t, n, o, r, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), t.PopoverContentTitle = function(e) {
            var t = e.className,
                n = o.__rest(e, ["className"]),
                s = r.default(t, "mc-popover-content-title");
            return i.createElement("h2", o.__assign({
                className: s
            }, n))
        }, t.PopoverContentTitle.displayName = "PopoverContentTitle"
    }), define("spectrum/popover/popover_item_group", ["require", "exports", "tslib", "tslib", "classnames", "react"], function(e, t, n, o, r, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), t.PopoverItemGroup = function(e) {
            var t = e.className,
                n = o.__rest(e, ["className"]),
                s = r.default("mc-popover-item-group", t);
            return i.createElement("div", o.__assign({
                className: s,
                role: "group"
            }, n))
        }, t.PopoverItemGroup.displayName = "PopoverItemGroup"
    }), define("spectrum/popover/popover_item_group_separator", ["require", "exports", "tslib", "tslib", "classnames", "react"], function(e, t, n, o, r, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), t.PopoverItemGroupSeparator = function(e) {
            var t = e.className,
                n = o.__rest(e, ["className"]),
                s = r.default(t, "mc-popover-item-group-separator");
            return i.createElement("hr", o.__assign({
                className: s,
                role: "separator"
            }, n))
        }, t.PopoverItemGroupSeparator.displayName = "PopoverItemGroupSeparator"
    }), define("spectrum/popover/popover_item_group_title", ["require", "exports", "tslib", "tslib", "classnames", "react"], function(e, t, n, o, r, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), t.PopoverItemGroupTitle = function(e) {
            var t = e.className,
                n = o.__rest(e, ["className"]),
                s = r.default("mc-popover-item-group-title", t);
            return i.createElement("h2", o.__assign({
                className: s
            }, n))
        }, t.PopoverItemGroupTitle.displayName = "PopoverItemGroupTitle"
    }),
    define("spectrum/popover/popover_selectable_item", ["require", "exports", "tslib", "tslib", "classnames", "react", "react-aria-menubutton", "spectrum/checkbox"], function(e, t, n, o, r, i, s, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), t.BlueCheckIcon = function() {
            return i.createElement("svg", {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                "aria-hidden": "true"
            }, i.createElement("path", {
                d: "M10.003 15.15L7.174 12.32 5.76 13.735l3.536 3.536.707.707 8.485-8.485-1.414-1.415-7.071 7.071z",
                fill: "#0070E0",
                fillRule: "evenodd"
            }))
        }, t.PopoverSelectableItem = function(e) {
            var n = e.children,
                c = e.className,
                p = e.disabled,
                u = e.icon,
                l = (e.ref, e.role, e.selected),
                m = e.tagName,
                d = void 0 === m ? "span" : m,
                f = e.variant,
                h = void 0 === f ? "single" : f,
                v = o.__rest(e, ["children", "className", "disabled", "icon", "ref", "role", "selected", "tagName", "variant"]),
                _ = "multiple" === h,
                b = r.default(c, "mc-popover-selectable-item", {
                    "mc-popover-selectable-item-disabled": p,
                    "mc-popover-selectable-item-selected": l,
                    "mc-popover-multiple-selection-item": _
                }),
                g = function() {
                    return _ ? i.createElement(a.Checkbox, {
                        className: "mc-popover-selectable-item-checkbox",
                        disabled: p,
                        checked: l ? "checked" : "unchecked"
                    }) : l && i.createElement(t.BlueCheckIcon, null)
                },
                y = _ ? "menuitemcheckbox" : "menuitemradio",
                x = i.createElement("span", {
                    className: "mc-popover-selectable-item-content"
                }, i.createElement("span", {
                    className: "mc-popover-selectable-item-check-wrapper"
                }, g()), i.createElement("span", {
                    className: "mc-popover-selectable-item-text"
                }, n), u && i.createElement("span", {
                    className: "mc-popover-selectable-item-icon-wrapper"
                }, u));
            return p ? i.createElement(d, o.__assign({
                className: b,
                role: y,
                "aria-checked": l
            }, v), x) : i.createElement(s.MenuItem, o.__assign({
                tag: d,
                className: b,
                role: y,
                "aria-checked": l
            }, v), x)
        }, t.PopoverSelectableItem.displayName = "PopoverSelectableItem"
    }), define("spectrum/popover/popover_trigger", ["require", "exports", "tslib", "tslib", "classnames", "react", "react-dom", "react-aria-menubutton"], function(e, t, n, o, r, i, s, a) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), o = n.__importStar(o), r = n.__importDefault(r), i = n.__importStar(i), s = n.__importStar(s);
        var c = function(e) {
            var t = e.className,
                n = (e.ref, o.__rest(e, ["className", "ref"])),
                s = r.default(t, "mc-popover-trigger");
            return i.createElement(a.Button, o.__assign({
                tag: "span",
                className: s
            }, n))
        };
        c.displayName = "PopoverTrigger";
        t.PopoverTrigger = c
    }), define("spectrum/util/debounce", ["require", "exports"], function(e, t) {
        "use strict";

        function n(e, t, n) {
            var o = this;
            void 0 === t && (t = 0), void 0 === n && (n = !1);
            var r = null;
            return function() {
                for (var i = [], s = 0; s < arguments.length; s++) i[s] = arguments[s];
                var a = o;
                r ? clearTimeout(r) : n && e.apply(a, i), r = window.setTimeout(function() {
                    r = null, n || e.apply(a, i)
                }, t)
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.debounce = n
    });
//# sourceMappingURL=pkg-mcl-base.min.js-vfltwTPTK.map