(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(_dereq_,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function webpackUniversalModuleDefinition(root, factory) {
    if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define([], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["dolphin"] = factory();else root["dolphin"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
    return (/******/function (modules) {
            // webpackBootstrap
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/ };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/ });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 80);
            /******/
        }(
        /************************************************************************/
        /******/[
        /* 0 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (immutable) */
            __webpack_exports__["c"] = exists;
            /* harmony export (immutable) */__webpack_exports__["a"] = checkMethod;
            /* harmony export (immutable) */__webpack_exports__["b"] = checkParam;
            var _checkMethodName;

            function exists(object) {
                return typeof object !== 'undefined' && object !== null;
            }

            function checkMethod(name) {
                _checkMethodName = name;
            }

            function checkParam(param, parameterName) {
                if (!exists(param)) {
                    throw new Error('The parameter ' + parameterName + ' is mandatory in ' + _checkMethodName);
                }
            }

            /***/
        },
        /* 1 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            var ATTRIBUTE_METADATA_CHANGED_COMMAND_ID = 'AttributeMetadataChanged';
            /* harmony export (immutable) */__webpack_exports__["b"] = ATTRIBUTE_METADATA_CHANGED_COMMAND_ID;

            var CALL_ACTION_COMMAND_ID = 'CallAction';
            /* harmony export (immutable) */__webpack_exports__["c"] = CALL_ACTION_COMMAND_ID;

            var CHANGE_ATTRIBUTE_METADATA_COMMAND_ID = 'ChangeAttributeMetadata';
            /* harmony export (immutable) */__webpack_exports__["d"] = CHANGE_ATTRIBUTE_METADATA_COMMAND_ID;

            var CREATE_CONTEXT_COMMAND_ID = 'CreateContext';
            /* harmony export (immutable) */__webpack_exports__["f"] = CREATE_CONTEXT_COMMAND_ID;

            var CREATE_CONTROLLER_COMMAND_ID = 'CreateController';
            /* harmony export (immutable) */__webpack_exports__["g"] = CREATE_CONTROLLER_COMMAND_ID;

            var CREATE_PRESENTATION_MODEL_COMMAND_ID = 'CreatePresentationModel';
            /* harmony export (immutable) */__webpack_exports__["h"] = CREATE_PRESENTATION_MODEL_COMMAND_ID;

            var DELETE_PRESENTATION_MODEL_COMMAND_ID = 'DeletePresentationModel';
            /* harmony export (immutable) */__webpack_exports__["i"] = DELETE_PRESENTATION_MODEL_COMMAND_ID;

            var DESTROY_CONTEXT_COMMAND_ID = 'DestroyContext';
            /* harmony export (immutable) */__webpack_exports__["j"] = DESTROY_CONTEXT_COMMAND_ID;

            var DESTROY_CONTROLLER_COMMAND_ID = 'DestroyController';
            /* harmony export (immutable) */__webpack_exports__["k"] = DESTROY_CONTROLLER_COMMAND_ID;

            var INTERRUPT_LONG_POLL_COMMAND_ID = 'InterruptLongPoll';
            /* harmony export (immutable) */__webpack_exports__["m"] = INTERRUPT_LONG_POLL_COMMAND_ID;

            var PRESENTATION_MODEL_DELETED_COMMAND_ID = 'PresentationModelDeleted';
            /* harmony export (immutable) */__webpack_exports__["s"] = PRESENTATION_MODEL_DELETED_COMMAND_ID;

            var START_LONG_POLL_COMMAND_ID = 'StartLongPoll';
            /* harmony export (immutable) */__webpack_exports__["t"] = START_LONG_POLL_COMMAND_ID;

            var VALUE_CHANGED_COMMAND_ID = 'ValueChanged';
            /* harmony export (immutable) */__webpack_exports__["v"] = VALUE_CHANGED_COMMAND_ID;

            var ID = "id";
            /* harmony export (immutable) */__webpack_exports__["l"] = ID;

            var ATTRIBUTE_ID = "a_id";
            /* harmony export (immutable) */__webpack_exports__["a"] = ATTRIBUTE_ID;

            var PM_ID = "p_id";
            /* harmony export (immutable) */__webpack_exports__["q"] = PM_ID;

            var CONTROLLER_ID = "c_id";
            /* harmony export (immutable) */__webpack_exports__["e"] = CONTROLLER_ID;

            var PM_TYPE = "t";
            /* harmony export (immutable) */__webpack_exports__["r"] = PM_TYPE;

            var NAME = "n";
            /* harmony export (immutable) */__webpack_exports__["n"] = NAME;

            var VALUE = "v";
            /* harmony export (immutable) */__webpack_exports__["u"] = VALUE;

            var PARAMS = "p";
            /* harmony export (immutable) */__webpack_exports__["o"] = PARAMS;

            var PM_ATTRIBUTES = "a";
            /* harmony export (immutable) */__webpack_exports__["p"] = PM_ATTRIBUTES;

            /***/
        },
        /* 2 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(57);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__loggerfactory__ = __webpack_require__(87);
            /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
                return __WEBPACK_IMPORTED_MODULE_0__constants__["a"];
            });
            /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
                return __WEBPACK_IMPORTED_MODULE_1__loggerfactory__["a"];
            });

            /***/
        },
        /* 3 */
        /***/function (module, exports) {

            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
            // eslint-disable-next-line no-new-func
            : Function('return this')();
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {

            var store = __webpack_require__(62)('wks');
            var uid = __webpack_require__(35);
            var _Symbol = __webpack_require__(3).Symbol;
            var USE_SYMBOL = typeof _Symbol == 'function';

            var $exports = module.exports = function (name) {
                return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
            };

            $exports.store = store;

            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {

            var global = __webpack_require__(3);
            var core = __webpack_require__(7);
            var ctx = __webpack_require__(8);
            var hide = __webpack_require__(9);
            var PROTOTYPE = 'prototype';

            var $export = function $export(type, name, source) {
                var IS_FORCED = type & $export.F;
                var IS_GLOBAL = type & $export.G;
                var IS_STATIC = type & $export.S;
                var IS_PROTO = type & $export.P;
                var IS_BIND = type & $export.B;
                var IS_WRAP = type & $export.W;
                var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
                var expProto = exports[PROTOTYPE];
                var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
                var key, own, out;
                if (IS_GLOBAL) source = name;
                for (key in source) {
                    // contains in native
                    own = !IS_FORCED && target && target[key] !== undefined;
                    if (own && key in exports) continue;
                    // export native or passed
                    out = own ? target[key] : source[key];
                    // prevent global pollution for namespaces
                    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                    // bind timers to global for call from export context
                    : IS_BIND && own ? ctx(out, global)
                    // wrap global constructors for prevent change them in library
                    : IS_WRAP && target[key] == out ? function (C) {
                        var F = function F(a, b, c) {
                            if (this instanceof C) {
                                switch (arguments.length) {
                                    case 0:
                                        return new C();
                                    case 1:
                                        return new C(a);
                                    case 2:
                                        return new C(a, b);
                                }return new C(a, b, c);
                            }return C.apply(this, arguments);
                        };
                        F[PROTOTYPE] = C[PROTOTYPE];
                        return F;
                        // make static versions for prototype methods
                    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                    if (IS_PROTO) {
                        (exports.virtual || (exports.virtual = {}))[key] = out;
                        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                        if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
                    }
                }
            };
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            $export.U = 64; // safe
            $export.R = 128; // real proto method for `library`
            module.exports = $export;

            /***/
        },
        /* 6 */
        /***/function (module, exports) {

            module.exports = function (it) {
                return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
            };

            /***/
        },
        /* 7 */
        /***/function (module, exports) {

            var core = module.exports = { version: '2.5.3' };
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {

            // optional / simple context binding
            var aFunction = __webpack_require__(13);
            module.exports = function (fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch (length) {
                    case 1:
                        return function (a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function (a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function (a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function () /* ...args */{
                    return fn.apply(that, arguments);
                };
            };

            /***/
        },
        /* 9 */
        /***/function (module, exports, __webpack_require__) {

            var dP = __webpack_require__(10);
            var createDesc = __webpack_require__(59);
            module.exports = __webpack_require__(12) ? function (object, key, value) {
                return dP.f(object, key, createDesc(1, value));
            } : function (object, key, value) {
                object[key] = value;
                return object;
            };

            /***/
        },
        /* 10 */
        /***/function (module, exports, __webpack_require__) {

            var anObject = __webpack_require__(11);
            var IE8_DOM_DEFINE = __webpack_require__(89);
            var toPrimitive = __webpack_require__(90);
            var dP = Object.defineProperty;

            exports.f = __webpack_require__(12) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return dP(O, P, Attributes);
                } catch (e) {/* empty */}
                if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                if ('value' in Attributes) O[P] = Attributes.value;
                return O;
            };

            /***/
        },
        /* 11 */
        /***/function (module, exports, __webpack_require__) {

            var isObject = __webpack_require__(6);
            module.exports = function (it) {
                if (!isObject(it)) throw TypeError(it + ' is not an object!');
                return it;
            };

            /***/
        },
        /* 12 */
        /***/function (module, exports, __webpack_require__) {

            // Thank's IE8 for his funny defineProperty
            module.exports = !__webpack_require__(19)(function () {
                return Object.defineProperty({}, 'a', { get: function get() {
                        return 7;
                    } }).a != 7;
            });

            /***/
        },
        /* 13 */
        /***/function (module, exports) {

            module.exports = function (it) {
                if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                return it;
            };

            /***/
        },
        /* 14 */
        /***/function (module, exports) {

            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function (it, key) {
                return hasOwnProperty.call(it, key);
            };

            /***/
        },
        /* 15 */
        /***/function (module, exports) {

            module.exports = {};

            /***/
        },
        /* 16 */
        /***/function (module, exports) {

            var toString = {}.toString;

            module.exports = function (it) {
                return toString.call(it).slice(8, -1);
            };

            /***/
        },
        /* 17 */
        /***/function (module, exports, __webpack_require__) {

            var ctx = __webpack_require__(8);
            var call = __webpack_require__(102);
            var isArrayIter = __webpack_require__(103);
            var anObject = __webpack_require__(11);
            var toLength = __webpack_require__(33);
            var getIterFn = __webpack_require__(104);
            var BREAK = {};
            var RETURN = {};
            var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
                var iterFn = ITERATOR ? function () {
                    return iterable;
                } : getIterFn(iterable);
                var f = ctx(fn, that, entries ? 2 : 1);
                var index = 0;
                var length, step, iterator, result;
                if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
                // fast case for arrays with default iterator
                if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
                    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                    if (result === BREAK || result === RETURN) return result;
                } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
                    result = call(iterator, f, step.value, entries);
                    if (result === BREAK || result === RETURN) return result;
                }
            };
            exports.BREAK = BREAK;
            exports.RETURN = RETURN;

            /***/
        },
        /* 18 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            var JS_STRING_TYPE = 'string';
            /* harmony export (immutable) */__webpack_exports__["k"] = JS_STRING_TYPE;

            var DOLPHIN_BEAN = 0;
            /* harmony export (immutable) */__webpack_exports__["f"] = DOLPHIN_BEAN;

            var BYTE = 1;
            /* harmony export (immutable) */__webpack_exports__["c"] = BYTE;

            var SHORT = 2;
            /* harmony export (immutable) */__webpack_exports__["p"] = SHORT;

            var INT = 3;
            /* harmony export (immutable) */__webpack_exports__["j"] = INT;

            var LONG = 4;
            /* harmony export (immutable) */__webpack_exports__["n"] = LONG;

            var FLOAT = 5;
            /* harmony export (immutable) */__webpack_exports__["i"] = FLOAT;

            var DOUBLE = 6;
            /* harmony export (immutable) */__webpack_exports__["g"] = DOUBLE;

            var BOOLEAN = 7;
            /* harmony export (immutable) */__webpack_exports__["b"] = BOOLEAN;

            var STRING = 8;
            /* harmony export (immutable) */__webpack_exports__["q"] = STRING;

            var DATE = 9;
            /* harmony export (immutable) */__webpack_exports__["e"] = DATE;

            var ENUM = 10;
            /* harmony export (immutable) */__webpack_exports__["h"] = ENUM;

            var CALENDAR = 11;
            /* harmony export (immutable) */__webpack_exports__["d"] = CALENDAR;

            var LOCAL_DATE_FIELD_TYPE = 55;
            /* harmony export (immutable) */__webpack_exports__["l"] = LOCAL_DATE_FIELD_TYPE;

            var LOCAL_DATE_TIME_FIELD_TYPE = 52;
            /* harmony export (immutable) */__webpack_exports__["m"] = LOCAL_DATE_TIME_FIELD_TYPE;

            var ZONED_DATE_TIME_FIELD_TYPE = 54;
            /* harmony export (immutable) */__webpack_exports__["r"] = ZONED_DATE_TIME_FIELD_TYPE;

            var ADDED_TYPE = "ADDED";
            /* harmony export (immutable) */__webpack_exports__["a"] = ADDED_TYPE;

            var REMOVED_TYPE = "REMOVED";
            /* harmony export (immutable) */__webpack_exports__["o"] = REMOVED_TYPE;

            /***/
        },
        /* 19 */
        /***/function (module, exports) {

            module.exports = function (exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };

            /***/
        },
        /* 20 */
        /***/function (module, exports, __webpack_require__) {

            var def = __webpack_require__(10).f;
            var has = __webpack_require__(14);
            var TAG = __webpack_require__(4)('toStringTag');

            module.exports = function (it, tag, stat) {
                if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
            };

            /***/
        },
        /* 21 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__impl_createContextCommand__ = __webpack_require__(47);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__impl_createControllerCommand__ = __webpack_require__(48);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__impl_callActionCommand__ = __webpack_require__(45);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__impl_destroyControllerCommand__ = __webpack_require__(52);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__impl_destroyContextCommand__ = __webpack_require__(51);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__impl_startLongPollCommand__ = __webpack_require__(55);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__impl_interruptLongPollCommand__ = __webpack_require__(53);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__impl_createPresentationModelCommand__ = __webpack_require__(49);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__impl_deletePresentationModelCommand__ = __webpack_require__(50);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__impl_presentationModelDeletedCommand__ = __webpack_require__(54);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__impl_valueChangedCommand__ = __webpack_require__(43);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__impl_changeAttributeMetadataCommand__ = __webpack_require__(46);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__impl_attributeMetadataChangedCommand__ = __webpack_require__(44);

            var CommandFactory = function () {
                function CommandFactory() {
                    _classCallCheck(this, CommandFactory);
                }

                _createClass(CommandFactory, null, [{
                    key: 'createCreateContextCommand',
                    value: function createCreateContextCommand() {
                        return new __WEBPACK_IMPORTED_MODULE_0__impl_createContextCommand__["a" /* default */]();
                    }
                }, {
                    key: 'createCreateControllerCommand',
                    value: function createCreateControllerCommand(controllerName, parentControllerId) {
                        var command = new __WEBPACK_IMPORTED_MODULE_1__impl_createControllerCommand__["a" /* default */]();
                        command.init(controllerName, parentControllerId);
                        return command;
                    }
                }, {
                    key: 'createCallActionCommand',
                    value: function createCallActionCommand(controllerid, actionName, params) {
                        var command = new __WEBPACK_IMPORTED_MODULE_2__impl_callActionCommand__["a" /* default */]();
                        command.init(controllerid, actionName, params);
                        return command;
                    }
                }, {
                    key: 'createDestroyControllerCommand',
                    value: function createDestroyControllerCommand(controllerId) {
                        var command = new __WEBPACK_IMPORTED_MODULE_3__impl_destroyControllerCommand__["a" /* default */]();
                        command.init(controllerId);
                        return command;
                    }
                }, {
                    key: 'createDestroyContextCommand',
                    value: function createDestroyContextCommand() {
                        return new __WEBPACK_IMPORTED_MODULE_4__impl_destroyContextCommand__["a" /* default */]();
                    }
                }, {
                    key: 'createStartLongPollCommand',
                    value: function createStartLongPollCommand() {
                        return new __WEBPACK_IMPORTED_MODULE_5__impl_startLongPollCommand__["a" /* default */]();
                    }
                }, {
                    key: 'createInterruptLongPollCommand',
                    value: function createInterruptLongPollCommand() {
                        return new __WEBPACK_IMPORTED_MODULE_6__impl_interruptLongPollCommand__["a" /* default */]();
                    }
                }, {
                    key: 'createCreatePresentationModelCommand',
                    value: function createCreatePresentationModelCommand(presentationModel) {
                        var command = new __WEBPACK_IMPORTED_MODULE_7__impl_createPresentationModelCommand__["a" /* default */]();
                        command.init(presentationModel);
                        return command;
                    }
                }, {
                    key: 'createDeletePresentationModelCommand',
                    value: function createDeletePresentationModelCommand(pmId) {
                        var command = new __WEBPACK_IMPORTED_MODULE_8__impl_deletePresentationModelCommand__["a" /* default */]();
                        command.init(pmId);
                        return command;
                    }
                }, {
                    key: 'createPresentationModelDeletedCommand',
                    value: function createPresentationModelDeletedCommand(pmId) {
                        var command = new __WEBPACK_IMPORTED_MODULE_9__impl_presentationModelDeletedCommand__["a" /* default */]();
                        command.init(pmId);
                        return command;
                    }
                }, {
                    key: 'createValueChangedCommand',
                    value: function createValueChangedCommand(attributeId, newValue) {
                        var command = new __WEBPACK_IMPORTED_MODULE_10__impl_valueChangedCommand__["a" /* default */]();
                        command.init(attributeId, newValue);
                        return command;
                    }
                }, {
                    key: 'createChangeAttributeMetadataCommand',
                    value: function createChangeAttributeMetadataCommand(attributeId, metadataName, value) {
                        var command = new __WEBPACK_IMPORTED_MODULE_11__impl_changeAttributeMetadataCommand__["a" /* default */]();
                        command.init(attributeId, metadataName, value);
                        return command;
                    }
                }, {
                    key: 'createAttributeMetadataChangedCommand',
                    value: function createAttributeMetadataChangedCommand(attributeId, metadataName, value) {
                        var command = new __WEBPACK_IMPORTED_MODULE_12__impl_attributeMetadataChangedCommand__["a" /* default */]();
                        command.init(attributeId, metadataName, value);
                        return command;
                    }
                }]);

                return CommandFactory;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = CommandFactory;

            /***/
        },
        /* 22 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "b", function () {
                return SOURCE_SYSTEM;
            });
            /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
                return SOURCE_SYSTEM_CLIENT;
            });
            /* unused harmony export SOURCE_SYSTEM_SERVER */
            /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
                return ACTION_CALL_BEAN;
            });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise__ = __webpack_require__(41);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__commands_commandFactory__ = __webpack_require__(21);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(18);

            var DOLPHIN_BEAN = '@@@ DOLPHIN_BEAN @@@';
            var ACTION_CALL_BEAN = '@@@ CONTROLLER_ACTION_CALL_BEAN @@@';
            var HIGHLANDER_BEAN = '@@@ HIGHLANDER_BEAN @@@';
            var DOLPHIN_LIST_SPLICE = '@DP:LS@';
            var SOURCE_SYSTEM = '@@@ SOURCE_SYSTEM @@@';
            var SOURCE_SYSTEM_CLIENT = 'client';
            var SOURCE_SYSTEM_SERVER = 'server';

            var Connector = function () {
                function Connector(url, dolphin, classRepository, config) {
                    _classCallCheck(this, Connector);

                    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('Connector(url, dolphin, classRepository, config)');
                    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(url, 'url');
                    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(dolphin, 'dolphin');
                    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(classRepository, 'classRepository');

                    var self = this;
                    this.dolphin = dolphin;
                    this.config = config;
                    this.classRepository = classRepository;
                    this.highlanderPMResolver = function () {};
                    this.highlanderPMPromise = new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise___default.a(function (resolve) {
                        self.highlanderPMResolver = resolve;
                    });

                    dolphin.getClientModelStore().onModelStoreChange(function (event) {
                        var model = event.clientPresentationModel;
                        var sourceSystem = model.findAttributeByPropertyName(SOURCE_SYSTEM);
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(sourceSystem) && sourceSystem.value === SOURCE_SYSTEM_SERVER) {
                            if (event.eventType === __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ADDED_TYPE */]) {
                                self.onModelAdded(model);
                            } else if (event.eventType === __WEBPACK_IMPORTED_MODULE_3__constants__["o" /* REMOVED_TYPE */]) {
                                self.onModelRemoved(model);
                            }
                        }
                    });
                }

                _createClass(Connector, [{
                    key: 'connect',
                    value: function connect() {
                        var that = this;
                        that.dolphin.startPushListening(__WEBPACK_IMPORTED_MODULE_2__commands_commandFactory__["a" /* default */].createStartLongPollCommand(), __WEBPACK_IMPORTED_MODULE_2__commands_commandFactory__["a" /* default */].createInterruptLongPollCommand());
                    }
                }, {
                    key: 'onModelAdded',
                    value: function onModelAdded(model) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('Connector.onModelAdded(model)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(model, 'model');

                        var type = model.presentationModelType;
                        switch (type) {
                            case ACTION_CALL_BEAN:
                                // ignore
                                break;
                            case DOLPHIN_BEAN:
                                this.classRepository.registerClass(model);
                                break;
                            case HIGHLANDER_BEAN:
                                this.highlanderPMResolver(model);
                                break;
                            case DOLPHIN_LIST_SPLICE:
                                this.classRepository.spliceListEntry(model);
                                this.dolphin.deletePresentationModel(model);
                                break;
                            default:
                                this.classRepository.load(model);
                                break;
                        }
                    }
                }, {
                    key: 'onModelRemoved',
                    value: function onModelRemoved(model) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('Connector.onModelRemoved(model)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(model, 'model');
                        var type = model.presentationModelType;
                        switch (type) {
                            case DOLPHIN_BEAN:
                                this.classRepository.unregisterClass(model);
                                break;
                            case DOLPHIN_LIST_SPLICE:
                                // do nothing
                                break;
                            default:
                                this.classRepository.unload(model);
                                break;
                        }
                    }
                }, {
                    key: 'invoke',
                    value: function invoke(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('Connector.invoke(command)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(command, 'command');

                        var dolphin = this.dolphin;
                        return new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise___default.a(function (resolve) {
                            dolphin.send(command, {
                                onFinished: function onFinished() {
                                    resolve();
                                }
                            });
                        });
                    }
                }, {
                    key: 'getHighlanderPM',
                    value: function getHighlanderPM() {
                        return this.highlanderPMPromise;
                    }
                }]);

                return Connector;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["d"] = Connector;

            /***/
        },
        /* 23 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(18);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__commandConstants__ = __webpack_require__(1);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__impl_valueChangedCommand__ = __webpack_require__(43);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__impl_attributeMetadataChangedCommand__ = __webpack_require__(44);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__impl_callActionCommand__ = __webpack_require__(45);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__impl_changeAttributeMetadataCommand__ = __webpack_require__(46);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__impl_createContextCommand__ = __webpack_require__(47);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__impl_createControllerCommand__ = __webpack_require__(48);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__impl_createPresentationModelCommand__ = __webpack_require__(49);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__impl_deletePresentationModelCommand__ = __webpack_require__(50);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__impl_destroyContextCommand__ = __webpack_require__(51);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__impl_destroyControllerCommand__ = __webpack_require__(52);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__impl_interruptLongPollCommand__ = __webpack_require__(53);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_14__impl_presentationModelDeletedCommand__ = __webpack_require__(54);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_15__impl_startLongPollCommand__ = __webpack_require__(55);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_16__codecError__ = __webpack_require__(86);

            var Codec = function () {
                function Codec() {
                    _classCallCheck(this, Codec);
                }

                _createClass(Codec, null, [{
                    key: '_encodeAttributeMetadataChangedCommand',
                    value: function _encodeAttributeMetadataChangedCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.encodeAttributeMetadataChangedCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.attributeId, "command.attributeId");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.metadataName, "command.metadataName");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["b" /* ATTRIBUTE_METADATA_CHANGED_COMMAND_ID */];
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["a" /* ATTRIBUTE_ID */]] = command.attributeId;
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]] = command.metadataName;
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]] = command.value;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeAttributeMetadataChangedCommand',
                    value: function _decodeAttributeMetadataChangedCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.decodeAttributeMetadataChangedCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["a" /* ATTRIBUTE_ID */]], "jsonCommand[ATTRIBUTE_ID]");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]], "jsonCommand[NAME]");

                        var command = new __WEBPACK_IMPORTED_MODULE_4__impl_attributeMetadataChangedCommand__["a" /* default */]();
                        command.attributeId = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["a" /* ATTRIBUTE_ID */]];
                        command.metadataName = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]];
                        command.value = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]];
                        return command;
                    }
                }, {
                    key: '_encodeCallActionCommand',
                    value: function _encodeCallActionCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.encodeCallActionCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.controllerid, "command.controllerid");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.actionName, "command.actionName");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.params, "command.params");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["c" /* CALL_ACTION_COMMAND_ID */];
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["e" /* CONTROLLER_ID */]] = command.controllerid;
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]] = command.actionName;
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["o" /* PARAMS */]] = command.params.map(function (param) {
                            var result = {};
                            result[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]] = param.name;
                            if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(param.value)) {
                                result[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]] = param.value;
                            }
                            return result;
                        });
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeCallActionCommand',
                    value: function _decodeCallActionCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.decodeCallActionCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["e" /* CONTROLLER_ID */]], "jsonCommand[CONTROLLER_ID]");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]], "jsonCommand[NAME]");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["o" /* PARAMS */]], "jsonCommand[PARAMS]");

                        var command = new __WEBPACK_IMPORTED_MODULE_5__impl_callActionCommand__["a" /* default */]();
                        command.controllerid = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["e" /* CONTROLLER_ID */]];
                        command.actionName = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]];
                        //TODO: Für die Params sollten wir eine Klasse bereitstellen
                        command.params = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["o" /* PARAMS */]].map(function (param) {
                            return {
                                'name': param[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]],
                                'value': Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(param[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]]) ? param[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]] : null
                            };
                        });
                        return command;
                    }
                }, {
                    key: '_encodeChangeAttributeMetadataCommand',
                    value: function _encodeChangeAttributeMetadataCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.encodeChangeAttributeMetadataCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.attributeId, "command.attributeId");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.metadataName, "command.metadataName");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["d" /* CHANGE_ATTRIBUTE_METADATA_COMMAND_ID */];
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["a" /* ATTRIBUTE_ID */]] = command.attributeId;
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]] = command.metadataName;
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]] = command.value;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeChangeAttributeMetadataCommand',
                    value: function _decodeChangeAttributeMetadataCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.decodeChangeAttributeMetadataCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["a" /* ATTRIBUTE_ID */]], "jsonCommand[ATTRIBUTE_ID]");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]], "jsonCommand[NAME]");

                        var command = new __WEBPACK_IMPORTED_MODULE_6__impl_changeAttributeMetadataCommand__["a" /* default */]();
                        command.attributeId = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["a" /* ATTRIBUTE_ID */]];
                        command.metadataName = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]];
                        command.value = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]];
                        return command;
                    }
                }, {
                    key: '_encodeCreateContextCommand',
                    value: function _encodeCreateContextCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.encodeCreateContextCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["f" /* CREATE_CONTEXT_COMMAND_ID */];
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeCreateContextCommand',
                    value: function _decodeCreateContextCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.decodeCreateContextCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");

                        var command = new __WEBPACK_IMPORTED_MODULE_7__impl_createContextCommand__["a" /* default */]();
                        return command;
                    }
                }, {
                    key: '_encodeCreateControllerCommand',
                    value: function _encodeCreateControllerCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._encodeCreateControllerCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.controllerName, "command.controllerName");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["g" /* CREATE_CONTROLLER_COMMAND_ID */];
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]] = command.controllerName;
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["e" /* CONTROLLER_ID */]] = command.parentControllerId;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeCreateControllerCommand',
                    value: function _decodeCreateControllerCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._decodeCreateControllerCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]], "jsonCommand[NAME]");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["e" /* CONTROLLER_ID */]], "jsonCommand[CONTROLLER_ID]");

                        var command = new __WEBPACK_IMPORTED_MODULE_8__impl_createControllerCommand__["a" /* default */]();
                        command.controllerName = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]];
                        command.parentControllerId = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["e" /* CONTROLLER_ID */]];
                        return command;
                    }
                }, {
                    key: '_encodeCreatePresentationModelCommand',
                    value: function _encodeCreatePresentationModelCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.encodeCreatePresentationModelCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.pmId, "command.pmId");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.pmType, "command.pmType");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["h" /* CREATE_PRESENTATION_MODEL_COMMAND_ID */];
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["q" /* PM_ID */]] = command.pmId;
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["r" /* PM_TYPE */]] = command.pmType;
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["p" /* PM_ATTRIBUTES */]] = command.attributes.map(function (attribute) {
                            var result = {};
                            result[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]] = attribute.propertyName;
                            result[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["a" /* ATTRIBUTE_ID */]] = attribute.id;
                            if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(attribute.value)) {
                                result[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]] = attribute.value;
                            }
                            return result;
                        });
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeCreatePresentationModelCommand',
                    value: function _decodeCreatePresentationModelCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.decodeCreatePresentationModelCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["q" /* PM_ID */]], "jsonCommand[PM_ID]");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["r" /* PM_TYPE */]], "jsonCommand[PM_TYPE]");

                        var command = new __WEBPACK_IMPORTED_MODULE_9__impl_createPresentationModelCommand__["a" /* default */]();
                        command.pmId = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["q" /* PM_ID */]];
                        command.pmType = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["r" /* PM_TYPE */]];

                        //TODO: Für die Attribute sollten wir eine Klasse bereitstellen
                        command.attributes = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["p" /* PM_ATTRIBUTES */]].map(function (attribute) {
                            return {
                                'propertyName': attribute[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["n" /* NAME */]],
                                'id': attribute[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["a" /* ATTRIBUTE_ID */]],
                                'value': Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(attribute[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]]) ? attribute[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]] : null
                            };
                        });
                        return command;
                    }
                }, {
                    key: '_encodeDeletePresentationModelCommand',
                    value: function _encodeDeletePresentationModelCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._encodeDeletePresentationModelCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.pmId, "command.pmId");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["i" /* DELETE_PRESENTATION_MODEL_COMMAND_ID */];
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["q" /* PM_ID */]] = command.pmId;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeDeletePresentationModelCommand',
                    value: function _decodeDeletePresentationModelCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._decodeDeletePresentationModelCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["q" /* PM_ID */]], "jsonCommand[PM_ID]");

                        var command = new __WEBPACK_IMPORTED_MODULE_10__impl_deletePresentationModelCommand__["a" /* default */]();
                        command.pmId = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["q" /* PM_ID */]];
                        return command;
                    }
                }, {
                    key: '_encodeDestroyContextCommand',
                    value: function _encodeDestroyContextCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._encodeDestroyContextCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["j" /* DESTROY_CONTEXT_COMMAND_ID */];
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeDestroyContextCommand',
                    value: function _decodeDestroyContextCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._decodeDestroyContextCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");

                        var command = new __WEBPACK_IMPORTED_MODULE_11__impl_destroyContextCommand__["a" /* default */]();
                        return command;
                    }
                }, {
                    key: '_encodeDestroyControllerCommand',
                    value: function _encodeDestroyControllerCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._encodeDestroyControllerCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.controllerId, "command.controllerId");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["k" /* DESTROY_CONTROLLER_COMMAND_ID */];
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["e" /* CONTROLLER_ID */]] = command.controllerId;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeDestroyControllerCommand',
                    value: function _decodeDestroyControllerCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._decodeDestroyControllerCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["e" /* CONTROLLER_ID */]], "jsonCommand[CONTROLLER_ID]");

                        var command = new __WEBPACK_IMPORTED_MODULE_12__impl_destroyControllerCommand__["a" /* default */]();
                        command.controllerId = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["e" /* CONTROLLER_ID */]];
                        return command;
                    }
                }, {
                    key: '_encodeInterruptLongPollCommand',
                    value: function _encodeInterruptLongPollCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._encodeInterruptLongPollCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["m" /* INTERRUPT_LONG_POLL_COMMAND_ID */];
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeInterruptLongPollCommand',
                    value: function _decodeInterruptLongPollCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._decodeInterruptLongPollCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");

                        var command = new __WEBPACK_IMPORTED_MODULE_13__impl_interruptLongPollCommand__["a" /* default */]();
                        return command;
                    }
                }, {
                    key: '_encodePresentationModelDeletedCommand',
                    value: function _encodePresentationModelDeletedCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._encodePresentationModelDeletedCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.pmId, "command.pmId");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["s" /* PRESENTATION_MODEL_DELETED_COMMAND_ID */];
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["q" /* PM_ID */]] = command.pmId;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodePresentationModelDeletedCommand',
                    value: function _decodePresentationModelDeletedCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._decodePresentationModelDeletedCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["q" /* PM_ID */]], "jsonCommand[PM_ID]");

                        var command = new __WEBPACK_IMPORTED_MODULE_14__impl_presentationModelDeletedCommand__["a" /* default */]();
                        command.pmId = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["q" /* PM_ID */]];
                        return command;
                    }
                }, {
                    key: '_encodeStartLongPollCommand',
                    value: function _encodeStartLongPollCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._encodeStartLongPollCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["t" /* START_LONG_POLL_COMMAND_ID */];
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeStartLongPollCommand',
                    value: function _decodeStartLongPollCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec._decodeStartLongPollCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");

                        var command = new __WEBPACK_IMPORTED_MODULE_15__impl_startLongPollCommand__["a" /* default */]();
                        return command;
                    }
                }, {
                    key: '_encodeValueChangedCommand',
                    value: function _encodeValueChangedCommand(command) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.encodeValueChangedCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command, "command");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(command.attributeId, "command.attributeId");

                        var jsonCommand = {};
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["l" /* ID */]] = __WEBPACK_IMPORTED_MODULE_2__commandConstants__["v" /* VALUE_CHANGED_COMMAND_ID */];
                        jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["a" /* ATTRIBUTE_ID */]] = command.attributeId;
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(command.newValue)) {
                            jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]] = command.newValue;
                        }
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeValueChangedCommand',
                    value: function _decodeValueChangedCommand(jsonCommand) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.decodeValueChangedCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand, "jsonCommand");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["a" /* ATTRIBUTE_ID */]], "jsonCommand[ATTRIBUTE_ID]");

                        var command = new __WEBPACK_IMPORTED_MODULE_3__impl_valueChangedCommand__["a" /* default */]();
                        command.attributeId = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["a" /* ATTRIBUTE_ID */]];
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]])) {
                            command.newValue = jsonCommand[__WEBPACK_IMPORTED_MODULE_2__commandConstants__["u" /* VALUE */]];
                        } else {
                            command.newValue = null;
                        }
                        return command;
                    }
                }, {
                    key: 'encode',
                    value: function encode(commands) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.encode");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(commands, "commands");

                        var self = this;
                        return JSON.stringify(commands.map(function (command) {
                            if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["b" /* ATTRIBUTE_METADATA_CHANGED_COMMAND_ID */]) {
                                return self._encodeAttributeMetadataChangedCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["c" /* CALL_ACTION_COMMAND_ID */]) {
                                return self._encodeCallActionCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["d" /* CHANGE_ATTRIBUTE_METADATA_COMMAND_ID */]) {
                                return self._encodeChangeAttributeMetadataCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["f" /* CREATE_CONTEXT_COMMAND_ID */]) {
                                return self._encodeCreateContextCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["g" /* CREATE_CONTROLLER_COMMAND_ID */]) {
                                return self._encodeCreateControllerCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["h" /* CREATE_PRESENTATION_MODEL_COMMAND_ID */]) {
                                return self._encodeCreatePresentationModelCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["i" /* DELETE_PRESENTATION_MODEL_COMMAND_ID */]) {
                                return self._encodeDeletePresentationModelCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["j" /* DESTROY_CONTEXT_COMMAND_ID */]) {
                                return self._encodeDestroyContextCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["k" /* DESTROY_CONTROLLER_COMMAND_ID */]) {
                                return self._encodeDestroyControllerCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["m" /* INTERRUPT_LONG_POLL_COMMAND_ID */]) {
                                return self._encodeInterruptLongPollCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["s" /* PRESENTATION_MODEL_DELETED_COMMAND_ID */]) {
                                return self._encodePresentationModelDeletedCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["t" /* START_LONG_POLL_COMMAND_ID */]) {
                                return self._encodeStartLongPollCommand(command);
                            } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["v" /* VALUE_CHANGED_COMMAND_ID */]) {
                                return self._encodeValueChangedCommand(command);
                            } else {
                                throw new __WEBPACK_IMPORTED_MODULE_16__codecError__["a" /* default */]('Command of type ' + command.id + ' can not be handled');
                            }
                        }));
                    }
                }, {
                    key: 'decode',
                    value: function decode(transmitted) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* checkMethod */])("Codec.decode");
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(transmitted, "transmitted");

                        if ((typeof transmitted === 'undefined' ? 'undefined' : _typeof(transmitted)) === __WEBPACK_IMPORTED_MODULE_1__constants__["k" /* JS_STRING_TYPE */]) {
                            var _self = this;
                            return JSON.parse(transmitted).map(function (command) {
                                if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["b" /* ATTRIBUTE_METADATA_CHANGED_COMMAND_ID */]) {
                                    return _self._decodeAttributeMetadataChangedCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["c" /* CALL_ACTION_COMMAND_ID */]) {
                                    return _self._decodeCallActionCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["d" /* CHANGE_ATTRIBUTE_METADATA_COMMAND_ID */]) {
                                    return _self._decodeChangeAttributeMetadataCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["f" /* CREATE_CONTEXT_COMMAND_ID */]) {
                                    return _self._decodeCreateContextCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["g" /* CREATE_CONTROLLER_COMMAND_ID */]) {
                                    return _self._decodeCreateControllerCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["h" /* CREATE_PRESENTATION_MODEL_COMMAND_ID */]) {
                                    return _self._decodeCreatePresentationModelCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["i" /* DELETE_PRESENTATION_MODEL_COMMAND_ID */]) {
                                    return _self._decodeDeletePresentationModelCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["j" /* DESTROY_CONTEXT_COMMAND_ID */]) {
                                    return _self._decodeDestroyContextCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["k" /* DESTROY_CONTROLLER_COMMAND_ID */]) {
                                    return _self._decodeDestroyControllerCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["m" /* INTERRUPT_LONG_POLL_COMMAND_ID */]) {
                                    return _self._decodeInterruptLongPollCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["s" /* PRESENTATION_MODEL_DELETED_COMMAND_ID */]) {
                                    return _self._decodePresentationModelDeletedCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["t" /* START_LONG_POLL_COMMAND_ID */]) {
                                    return _self._decodeStartLongPollCommand(command);
                                } else if (command.id === __WEBPACK_IMPORTED_MODULE_2__commandConstants__["v" /* VALUE_CHANGED_COMMAND_ID */]) {
                                    return _self._decodeValueChangedCommand(command);
                                } else {
                                    throw new __WEBPACK_IMPORTED_MODULE_16__codecError__["a" /* default */]('Command of type ' + command.id + ' can not be handled');
                                }
                            });
                        } else {
                            throw new __WEBPACK_IMPORTED_MODULE_16__codecError__["a" /* default */]('Can not decode data that is not of type string');
                        }
                    }
                }]);

                return Codec;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = Codec;

            /***/
        },
        /* 24 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            var EventBus = function () {
                function EventBus() {
                    _classCallCheck(this, EventBus);

                    this.eventHandlers = [];
                }

                _createClass(EventBus, [{
                    key: 'onEvent',
                    value: function onEvent(eventHandler) {
                        this.eventHandlers.push(eventHandler);
                    }
                }, {
                    key: 'trigger',
                    value: function trigger(event) {
                        this.eventHandlers.forEach(function (handle) {
                            return handle(event);
                        });
                    }
                }]);

                return EventBus;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = EventBus;

            /***/
        },
        /* 25 */
        /***/function (module, exports, __webpack_require__) {

            __webpack_require__(26);
            __webpack_require__(27);
            __webpack_require__(36);
            __webpack_require__(101);
            __webpack_require__(109);
            __webpack_require__(111);
            __webpack_require__(112);
            module.exports = __webpack_require__(7).Map;

            /***/
        },
        /* 26 */
        /***/function (module, exports) {

            /***/},
        /* 27 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var $at = __webpack_require__(88)(true);

            // 21.1.3.27 String.prototype[@@iterator]()
            __webpack_require__(30)(String, 'String', function (iterated) {
                this._t = String(iterated); // target
                this._i = 0; // next index
                // 21.1.5.2.1 %StringIteratorPrototype%.next()
            }, function () {
                var O = this._t;
                var index = this._i;
                var point;
                if (index >= O.length) return { value: undefined, done: true };
                point = $at(O, index);
                this._i += point.length;
                return { value: point, done: false };
            });

            /***/
        },
        /* 28 */
        /***/function (module, exports) {

            // 7.1.4 ToInteger
            var ceil = Math.ceil;
            var floor = Math.floor;
            module.exports = function (it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
            };

            /***/
        },
        /* 29 */
        /***/function (module, exports) {

            // 7.2.1 RequireObjectCoercible(argument)
            module.exports = function (it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };

            /***/
        },
        /* 30 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var LIBRARY = __webpack_require__(58);
            var $export = __webpack_require__(5);
            var redefine = __webpack_require__(91);
            var hide = __webpack_require__(9);
            var has = __webpack_require__(14);
            var Iterators = __webpack_require__(15);
            var $iterCreate = __webpack_require__(92);
            var setToStringTag = __webpack_require__(20);
            var getPrototypeOf = __webpack_require__(98);
            var ITERATOR = __webpack_require__(4)('iterator');
            var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
            var FF_ITERATOR = '@@iterator';
            var KEYS = 'keys';
            var VALUES = 'values';

            var returnThis = function returnThis() {
                return this;
            };

            module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function getMethod(kind) {
                    if (!BUGGY && kind in proto) return proto[kind];
                    switch (kind) {
                        case KEYS:
                            return function keys() {
                                return new Constructor(this, kind);
                            };
                        case VALUES:
                            return function values() {
                                return new Constructor(this, kind);
                            };
                    }return function entries() {
                        return new Constructor(this, kind);
                    };
                };
                var TAG = NAME + ' Iterator';
                var DEF_VALUES = DEFAULT == VALUES;
                var VALUES_BUG = false;
                var proto = Base.prototype;
                var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                var $default = !BUGGY && $native || getMethod(DEFAULT);
                var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
                var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                var methods, key, IteratorPrototype;
                // Fix native
                if ($anyNative) {
                    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                        // Set @@toStringTag to native iterators
                        setToStringTag(IteratorPrototype, TAG, true);
                        // fix for some old engines
                        if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
                    }
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if (DEF_VALUES && $native && $native.name !== VALUES) {
                    VALUES_BUG = true;
                    $default = function values() {
                        return $native.call(this);
                    };
                }
                // Define iterator
                if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                    hide(proto, ITERATOR, $default);
                }
                // Plug for library
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if (DEFAULT) {
                    methods = {
                        values: DEF_VALUES ? $default : getMethod(VALUES),
                        keys: IS_SET ? $default : getMethod(KEYS),
                        entries: $entries
                    };
                    if (FORCED) for (key in methods) {
                        if (!(key in proto)) redefine(proto, key, methods[key]);
                    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                }
                return methods;
            };

            /***/
        },
        /* 31 */
        /***/function (module, exports, __webpack_require__) {

            var isObject = __webpack_require__(6);
            var document = __webpack_require__(3).document;
            // typeof document.createElement is 'object' in old IE
            var is = isObject(document) && isObject(document.createElement);
            module.exports = function (it) {
                return is ? document.createElement(it) : {};
            };

            /***/
        },
        /* 32 */
        /***/function (module, exports, __webpack_require__) {

            // to indexed object, toObject with fallback for non-array-like ES3 strings
            var IObject = __webpack_require__(61);
            var defined = __webpack_require__(29);
            module.exports = function (it) {
                return IObject(defined(it));
            };

            /***/
        },
        /* 33 */
        /***/function (module, exports, __webpack_require__) {

            // 7.1.15 ToLength
            var toInteger = __webpack_require__(28);
            var min = Math.min;
            module.exports = function (it) {
                return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
            };

            /***/
        },
        /* 34 */
        /***/function (module, exports, __webpack_require__) {

            var shared = __webpack_require__(62)('keys');
            var uid = __webpack_require__(35);
            module.exports = function (key) {
                return shared[key] || (shared[key] = uid(key));
            };

            /***/
        },
        /* 35 */
        /***/function (module, exports) {

            var id = 0;
            var px = Math.random();
            module.exports = function (key) {
                return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
            };

            /***/
        },
        /* 36 */
        /***/function (module, exports, __webpack_require__) {

            __webpack_require__(99);
            var global = __webpack_require__(3);
            var hide = __webpack_require__(9);
            var Iterators = __webpack_require__(15);
            var TO_STRING_TAG = __webpack_require__(4)('toStringTag');

            var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

            for (var i = 0; i < DOMIterables.length; i++) {
                var NAME = DOMIterables[i];
                var Collection = global[NAME];
                var proto = Collection && Collection.prototype;
                if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = Iterators.Array;
            }

            /***/
        },
        /* 37 */
        /***/function (module, exports, __webpack_require__) {

            var hide = __webpack_require__(9);
            module.exports = function (target, src, safe) {
                for (var key in src) {
                    if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
                }return target;
            };

            /***/
        },
        /* 38 */
        /***/function (module, exports) {

            module.exports = function (it, Constructor, name, forbiddenField) {
                if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
                    throw TypeError(name + ': incorrect invocation!');
                }return it;
            };

            /***/
        },
        /* 39 */
        /***/function (module, exports, __webpack_require__) {

            // getting tag from 19.1.3.6 Object.prototype.toString()
            var cof = __webpack_require__(16);
            var TAG = __webpack_require__(4)('toStringTag');
            // ES3 wrong here
            var ARG = cof(function () {
                return arguments;
            }()) == 'Arguments';

            // fallback for IE11 Script Access Denied error
            var tryGet = function tryGet(it, key) {
                try {
                    return it[key];
                } catch (e) {/* empty */}
            };

            module.exports = function (it) {
                var O, T, B;
                return it === undefined ? 'Undefined' : it === null ? 'Null'
                // @@toStringTag case
                : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
                // builtinTag case
                : ARG ? cof(O)
                // ES3 arguments fallback
                : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
            };

            /***/
        },
        /* 40 */
        /***/function (module, exports, __webpack_require__) {

            var isObject = __webpack_require__(6);
            module.exports = function (it, TYPE) {
                if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
                return it;
            };

            /***/
        },
        /* 41 */
        /***/function (module, exports, __webpack_require__) {

            __webpack_require__(26);
            __webpack_require__(27);
            __webpack_require__(36);
            __webpack_require__(120);
            __webpack_require__(124);
            __webpack_require__(125);
            module.exports = __webpack_require__(7).Promise;

            /***/
        },
        /* 42 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            // 25.4.1.5 NewPromiseCapability(C)

            var aFunction = __webpack_require__(13);

            function PromiseCapability(C) {
                var resolve, reject;
                this.promise = new C(function ($$resolve, $$reject) {
                    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
                    resolve = $$resolve;
                    reject = $$reject;
                });
                this.resolve = aFunction(resolve);
                this.reject = aFunction(reject);
            }

            module.exports.f = function (C) {
                return new PromiseCapability(C);
            };

            /***/
        },
        /* 43 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);

            var ValueChangedCommand = function () {
                function ValueChangedCommand() {
                    _classCallCheck(this, ValueChangedCommand);

                    this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["v" /* VALUE_CHANGED_COMMAND_ID */];
                }

                _createClass(ValueChangedCommand, [{
                    key: 'init',
                    value: function init(attributeId, newValue) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('ValueChangedCommand.init()');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(attributeId, 'attributeId');

                        this.attributeId = attributeId;
                        this.newValue = newValue;
                    }
                }]);

                return ValueChangedCommand;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = ValueChangedCommand;

            /***/
        },
        /* 44 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);

            var AttributeMetadataChangedCommand = function () {
                function AttributeMetadataChangedCommand() {
                    _classCallCheck(this, AttributeMetadataChangedCommand);

                    this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["b" /* ATTRIBUTE_METADATA_CHANGED_COMMAND_ID */];
                }

                _createClass(AttributeMetadataChangedCommand, [{
                    key: 'init',
                    value: function init(attributeId, metadataName, value) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('AttributeMetadataChangedCommand.init()');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(attributeId, 'attributeId');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(metadataName, 'metadataName');

                        this.attributeId = attributeId;
                        this.metadataName = metadataName;
                        this.value = value;
                    }
                }]);

                return AttributeMetadataChangedCommand;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = AttributeMetadataChangedCommand;

            /***/
        },
        /* 45 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);

            var CallActionCommand = function () {
                function CallActionCommand() {
                    _classCallCheck(this, CallActionCommand);

                    this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["c" /* CALL_ACTION_COMMAND_ID */];
                }

                _createClass(CallActionCommand, [{
                    key: 'init',
                    value: function init(controllerid, actionName, params) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('CreateControllerCommand.init()');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(controllerid, 'controllerid');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(actionName, 'actionName');

                        this.controllerid = controllerid;
                        this.actionName = actionName;
                        this.params = params;
                    }
                }]);

                return CallActionCommand;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = CallActionCommand;

            /***/
        },
        /* 46 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);

            var ChangeAttributeMetadataCommand = function () {
                function ChangeAttributeMetadataCommand() {
                    _classCallCheck(this, ChangeAttributeMetadataCommand);

                    this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["d" /* CHANGE_ATTRIBUTE_METADATA_COMMAND_ID */];
                }

                _createClass(ChangeAttributeMetadataCommand, [{
                    key: 'init',
                    value: function init(attributeId, metadataName, value) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('ChangeAttributeMetadataCommand.init()');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(attributeId, 'attributeId');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(metadataName, 'metadataName');

                        this.attributeId = attributeId;
                        this.metadataName = metadataName;
                        this.value = value;
                    }
                }]);

                return ChangeAttributeMetadataCommand;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = ChangeAttributeMetadataCommand;

            /***/
        },
        /* 47 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);

            var CreateContextCommand = function CreateContextCommand() {
                _classCallCheck(this, CreateContextCommand);

                this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["f" /* CREATE_CONTEXT_COMMAND_ID */];
            };
            /* harmony export (immutable) */

            __webpack_exports__["a"] = CreateContextCommand;

            /***/
        },
        /* 48 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);

            var CreateControllerCommand = function () {
                function CreateControllerCommand() {
                    _classCallCheck(this, CreateControllerCommand);

                    this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["g" /* CREATE_CONTROLLER_COMMAND_ID */];
                }

                _createClass(CreateControllerCommand, [{
                    key: 'init',
                    value: function init(controllerName, parentControllerId) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('CreateControllerCommand.init()');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(controllerName, 'controllerName');

                        this.controllerName = controllerName;
                        this.parentControllerId = parentControllerId;
                    }
                }]);

                return CreateControllerCommand;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = CreateControllerCommand;

            /***/
        },
        /* 49 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);

            var CreatePresentationModelCommand = function () {
                function CreatePresentationModelCommand() {
                    _classCallCheck(this, CreatePresentationModelCommand);

                    this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["h" /* CREATE_PRESENTATION_MODEL_COMMAND_ID */];
                }

                _createClass(CreatePresentationModelCommand, [{
                    key: 'init',
                    value: function init(presentationModel) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('CreatePresentationModelCommand.init()');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(presentationModel, 'presentationModel');

                        this.attributes = [];
                        this.clientSideOnly = false;
                        this.pmId = presentationModel.id;
                        this.pmType = presentationModel.presentationModelType;
                        var command = this;
                        presentationModel.getAttributes().forEach(function (attr) {
                            command.attributes.push({
                                propertyName: attr.propertyName,
                                id: attr.id,
                                value: attr.getValue()
                            });
                        });
                    }
                }]);

                return CreatePresentationModelCommand;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = CreatePresentationModelCommand;

            /***/
        },
        /* 50 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);

            var DeletePresentationModelCommand = function () {
                function DeletePresentationModelCommand() {
                    _classCallCheck(this, DeletePresentationModelCommand);

                    this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["i" /* DELETE_PRESENTATION_MODEL_COMMAND_ID */];
                }

                _createClass(DeletePresentationModelCommand, [{
                    key: 'init',
                    value: function init(pmId) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('DeletePresentationModelCommand.init()');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(pmId, 'pmId');

                        this.pmId = pmId;
                    }
                }]);

                return DeletePresentationModelCommand;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = DeletePresentationModelCommand;

            /***/
        },
        /* 51 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);

            var DestroyContextCommand = function DestroyContextCommand() {
                _classCallCheck(this, DestroyContextCommand);

                this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["j" /* DESTROY_CONTEXT_COMMAND_ID */];
            };
            /* harmony export (immutable) */

            __webpack_exports__["a"] = DestroyContextCommand;

            /***/
        },
        /* 52 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);

            var DestroyControllerCommand = function () {
                function DestroyControllerCommand() {
                    _classCallCheck(this, DestroyControllerCommand);

                    this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["k" /* DESTROY_CONTROLLER_COMMAND_ID */];
                }

                _createClass(DestroyControllerCommand, [{
                    key: 'init',
                    value: function init(controllerId) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('DestroyControllerCommand.init()');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(controllerId, 'controllerId');

                        this.controllerId = controllerId;
                    }
                }]);

                return DestroyControllerCommand;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = DestroyControllerCommand;

            /***/
        },
        /* 53 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);

            var InterruptLongPollCommand = function InterruptLongPollCommand() {
                _classCallCheck(this, InterruptLongPollCommand);

                this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["m" /* INTERRUPT_LONG_POLL_COMMAND_ID */];
            };
            /* harmony export (immutable) */

            __webpack_exports__["a"] = InterruptLongPollCommand;

            /***/
        },
        /* 54 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);

            var PresentationModelDeletedCommand = function () {
                function PresentationModelDeletedCommand() {
                    _classCallCheck(this, PresentationModelDeletedCommand);

                    this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["s" /* PRESENTATION_MODEL_DELETED_COMMAND_ID */];
                }

                _createClass(PresentationModelDeletedCommand, [{
                    key: 'init',
                    value: function init(pmId) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('PresentationModelDeletedCommand.init()');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(pmId, 'pmId');

                        this.pmId = pmId;
                    }
                }]);

                return PresentationModelDeletedCommand;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = PresentationModelDeletedCommand;

            /***/
        },
        /* 55 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandConstants__ = __webpack_require__(1);

            var StartLongPollCommand = function StartLongPollCommand() {
                _classCallCheck(this, StartLongPollCommand);

                this.id = __WEBPACK_IMPORTED_MODULE_0__commandConstants__["t" /* START_LONG_POLL_COMMAND_ID */];
            };
            /* harmony export (immutable) */

            __webpack_exports__["a"] = StartLongPollCommand;

            /***/
        },
        /* 56 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__eventBus__ = __webpack_require__(24);

            var presentationModelInstanceCount = 0; // todo dk: consider making this static in class

            var ClientPresentationModel = function () {
                function ClientPresentationModel(id, presentationModelType) {
                    _classCallCheck(this, ClientPresentationModel);

                    this.id = id;
                    this.presentationModelType = presentationModelType;
                    this.attributes = [];
                    this.clientSideOnly = false;
                    this.dirty = false;
                    if (typeof id !== 'undefined' && id != null) {
                        this.id = id;
                    } else {
                        this.id = (presentationModelInstanceCount++).toString();
                    }
                    this.invalidBus = new __WEBPACK_IMPORTED_MODULE_0__eventBus__["a" /* default */]();
                    this.dirtyValueChangeBus = new __WEBPACK_IMPORTED_MODULE_0__eventBus__["a" /* default */]();
                }
                // todo dk: align with Java version: move to ClientDolphin and auto-add to model store
                /** a copy constructor for anything but IDs. Per default, copies are client side only, no automatic update applies. */


                _createClass(ClientPresentationModel, [{
                    key: 'copy',
                    value: function copy() {
                        var result = new ClientPresentationModel(null, this.presentationModelType);
                        result.clientSideOnly = true;
                        this.getAttributes().forEach(function (attribute) {
                            var attributeCopy = attribute.copy();
                            result.addAttribute(attributeCopy);
                        });
                        return result;
                    }
                    //add array of attributes

                }, {
                    key: 'addAttributes',
                    value: function addAttributes(attributes) {
                        var _this = this;

                        if (!attributes || attributes.length < 1) return;
                        attributes.forEach(function (attr) {
                            _this.addAttribute(attr);
                        });
                    }
                }, {
                    key: 'addAttribute',
                    value: function addAttribute(attribute) {
                        var _this2 = this;

                        if (!attribute || this.attributes.indexOf(attribute) > -1) {
                            return;
                        }
                        if (this.findAttributeByPropertyName(attribute.propertyName)) {
                            throw new Error("There already is an attribute with property name: " + attribute.propertyName + " in presentation model with id: " + this.id);
                        }
                        if (attribute.getQualifier() && this.findAttributeByQualifier(attribute.getQualifier())) {
                            throw new Error("There already is an attribute with qualifier: " + attribute.getQualifier() + " in presentation model with id: " + this.id);
                        }
                        attribute.setPresentationModel(this);
                        this.attributes.push(attribute);
                        attribute.onValueChange(function () {
                            _this2.invalidBus.trigger({ source: _this2 });
                        });
                    }
                }, {
                    key: 'onInvalidated',
                    value: function onInvalidated(handleInvalidate) {
                        this.invalidBus.onEvent(handleInvalidate);
                    }
                    /** returns a copy of the internal state */

                }, {
                    key: 'getAttributes',
                    value: function getAttributes() {
                        return this.attributes.slice(0);
                    }
                }, {
                    key: 'getAt',
                    value: function getAt(propertyName) {
                        return this.findAttributeByPropertyName(propertyName);
                    }
                }, {
                    key: 'findAllAttributesByPropertyName',
                    value: function findAllAttributesByPropertyName(propertyName) {
                        var result = [];
                        if (!propertyName) return null;
                        this.attributes.forEach(function (attribute) {
                            if (attribute.propertyName == propertyName) {
                                result.push(attribute);
                            }
                        });
                        return result;
                    }
                }, {
                    key: 'findAttributeByPropertyName',
                    value: function findAttributeByPropertyName(propertyName) {
                        if (!propertyName) return null;
                        for (var i = 0; i < this.attributes.length; i++) {
                            if (this.attributes[i].propertyName == propertyName) {
                                return this.attributes[i];
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'findAttributeByQualifier',
                    value: function findAttributeByQualifier(qualifier) {
                        if (!qualifier) return null;
                        for (var i = 0; i < this.attributes.length; i++) {
                            if (this.attributes[i].getQualifier() == qualifier) {
                                return this.attributes[i];
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'findAttributeById',
                    value: function findAttributeById(id) {
                        if (!id) return null;
                        for (var i = 0; i < this.attributes.length; i++) {
                            if (this.attributes[i].id == id) {
                                return this.attributes[i];
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'syncWith',
                    value: function syncWith(sourcePresentationModel) {
                        this.attributes.forEach(function (targetAttribute) {
                            var sourceAttribute = sourcePresentationModel.getAt(targetAttribute.propertyName);
                            if (sourceAttribute) {
                                targetAttribute.syncWith(sourceAttribute);
                            }
                        });
                    }
                }]);

                return ClientPresentationModel;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = ClientPresentationModel;

            /***/
        },
        /* 57 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return LogLevel;
            });
            var LogLevel = {
                NONE: { name: 'NONE', text: '[NONE ]', level: 0 },
                ALL: { name: 'ALL', text: '[ALL  ]', level: 100 },
                TRACE: { name: 'TRACE', text: '[TRACE]', level: 5 },
                DEBUG: { name: 'DEBUG', text: '[DEBUG]', level: 4 },
                INFO: { name: 'INFO', text: '[INFO ]', level: 3 },
                WARN: { name: 'WARN', text: '[WARN ]', level: 2 },
                ERROR: { name: 'ERROR', text: '[ERROR]', level: 1 }
            };

            /***/
        },
        /* 58 */
        /***/function (module, exports) {

            module.exports = true;

            /***/
        },
        /* 59 */
        /***/function (module, exports) {

            module.exports = function (bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };

            /***/
        },
        /* 60 */
        /***/function (module, exports, __webpack_require__) {

            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
            var anObject = __webpack_require__(11);
            var dPs = __webpack_require__(93);
            var enumBugKeys = __webpack_require__(63);
            var IE_PROTO = __webpack_require__(34)('IE_PROTO');
            var Empty = function Empty() {/* empty */};
            var PROTOTYPE = 'prototype';

            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var _createDict = function createDict() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = __webpack_require__(31)('iframe');
                var i = enumBugKeys.length;
                var lt = '<';
                var gt = '>';
                var iframeDocument;
                iframe.style.display = 'none';
                __webpack_require__(64).appendChild(iframe);
                iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                // createDict = iframe.contentWindow.Object;
                // html.removeChild(iframe);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                iframeDocument.close();
                _createDict = iframeDocument.F;
                while (i--) {
                    delete _createDict[PROTOTYPE][enumBugKeys[i]];
                }return _createDict();
            };

            module.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty();
                    Empty[PROTOTYPE] = null;
                    // add "__proto__" for Object.getPrototypeOf polyfill
                    result[IE_PROTO] = O;
                } else result = _createDict();
                return Properties === undefined ? result : dPs(result, Properties);
            };

            /***/
        },
        /* 61 */
        /***/function (module, exports, __webpack_require__) {

            // fallback for non-array-like ES3 and non-enumerable old V8 strings
            var cof = __webpack_require__(16);
            // eslint-disable-next-line no-prototype-builtins
            module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
                return cof(it) == 'String' ? it.split('') : Object(it);
            };

            /***/
        },
        /* 62 */
        /***/function (module, exports, __webpack_require__) {

            var global = __webpack_require__(3);
            var SHARED = '__core-js_shared__';
            var store = global[SHARED] || (global[SHARED] = {});
            module.exports = function (key) {
                return store[key] || (store[key] = {});
            };

            /***/
        },
        /* 63 */
        /***/function (module, exports) {

            // IE 8- don't enum bug keys
            module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

            /***/
        },
        /* 64 */
        /***/function (module, exports, __webpack_require__) {

            var document = __webpack_require__(3).document;
            module.exports = document && document.documentElement;

            /***/
        },
        /* 65 */
        /***/function (module, exports, __webpack_require__) {

            // 7.1.13 ToObject(argument)
            var defined = __webpack_require__(29);
            module.exports = function (it) {
                return Object(defined(it));
            };

            /***/
        },
        /* 66 */
        /***/function (module, exports) {

            module.exports = function (done, value) {
                return { value: value, done: !!done };
            };

            /***/
        },
        /* 67 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var dP = __webpack_require__(10).f;
            var create = __webpack_require__(60);
            var redefineAll = __webpack_require__(37);
            var ctx = __webpack_require__(8);
            var anInstance = __webpack_require__(38);
            var forOf = __webpack_require__(17);
            var $iterDefine = __webpack_require__(30);
            var step = __webpack_require__(66);
            var setSpecies = __webpack_require__(68);
            var DESCRIPTORS = __webpack_require__(12);
            var fastKey = __webpack_require__(69).fastKey;
            var validate = __webpack_require__(40);
            var SIZE = DESCRIPTORS ? '_s' : 'size';

            var getEntry = function getEntry(that, key) {
                // fast case
                var index = fastKey(key);
                var entry;
                if (index !== 'F') return that._i[index];
                // frozen object case
                for (entry = that._f; entry; entry = entry.n) {
                    if (entry.k == key) return entry;
                }
            };

            module.exports = {
                getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
                    var C = wrapper(function (that, iterable) {
                        anInstance(that, C, NAME, '_i');
                        that._t = NAME; // collection type
                        that._i = create(null); // index
                        that._f = undefined; // first entry
                        that._l = undefined; // last entry
                        that[SIZE] = 0; // size
                        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                    });
                    redefineAll(C.prototype, {
                        // 23.1.3.1 Map.prototype.clear()
                        // 23.2.3.2 Set.prototype.clear()
                        clear: function clear() {
                            for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                                entry.r = true;
                                if (entry.p) entry.p = entry.p.n = undefined;
                                delete data[entry.i];
                            }
                            that._f = that._l = undefined;
                            that[SIZE] = 0;
                        },
                        // 23.1.3.3 Map.prototype.delete(key)
                        // 23.2.3.4 Set.prototype.delete(value)
                        'delete': function _delete(key) {
                            var that = validate(this, NAME);
                            var entry = getEntry(that, key);
                            if (entry) {
                                var next = entry.n;
                                var prev = entry.p;
                                delete that._i[entry.i];
                                entry.r = true;
                                if (prev) prev.n = next;
                                if (next) next.p = prev;
                                if (that._f == entry) that._f = next;
                                if (that._l == entry) that._l = prev;
                                that[SIZE]--;
                            }return !!entry;
                        },
                        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                        forEach: function forEach(callbackfn /* , that = undefined */) {
                            validate(this, NAME);
                            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                            var entry;
                            while (entry = entry ? entry.n : this._f) {
                                f(entry.v, entry.k, this);
                                // revert to the last existing entry
                                while (entry && entry.r) {
                                    entry = entry.p;
                                }
                            }
                        },
                        // 23.1.3.7 Map.prototype.has(key)
                        // 23.2.3.7 Set.prototype.has(value)
                        has: function has(key) {
                            return !!getEntry(validate(this, NAME), key);
                        }
                    });
                    if (DESCRIPTORS) dP(C.prototype, 'size', {
                        get: function get() {
                            return validate(this, NAME)[SIZE];
                        }
                    });
                    return C;
                },
                def: function def(that, key, value) {
                    var entry = getEntry(that, key);
                    var prev, index;
                    // change existing entry
                    if (entry) {
                        entry.v = value;
                        // create new entry
                    } else {
                        that._l = entry = {
                            i: index = fastKey(key, true), // <- index
                            k: key, // <- key
                            v: value, // <- value
                            p: prev = that._l, // <- previous entry
                            n: undefined, // <- next entry
                            r: false // <- removed
                        };
                        if (!that._f) that._f = entry;
                        if (prev) prev.n = entry;
                        that[SIZE]++;
                        // add to index
                        if (index !== 'F') that._i[index] = entry;
                    }return that;
                },
                getEntry: getEntry,
                setStrong: function setStrong(C, NAME, IS_MAP) {
                    // add .keys, .values, .entries, [@@iterator]
                    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
                    $iterDefine(C, NAME, function (iterated, kind) {
                        this._t = validate(iterated, NAME); // target
                        this._k = kind; // kind
                        this._l = undefined; // previous
                    }, function () {
                        var that = this;
                        var kind = that._k;
                        var entry = that._l;
                        // revert to the last existing entry
                        while (entry && entry.r) {
                            entry = entry.p;
                        } // get next entry
                        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                            // or finish the iteration
                            that._t = undefined;
                            return step(1);
                        }
                        // return step by kind
                        if (kind == 'keys') return step(0, entry.k);
                        if (kind == 'values') return step(0, entry.v);
                        return step(0, [entry.k, entry.v]);
                    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

                    // add [@@species], 23.1.2.2, 23.2.2.2
                    setSpecies(NAME);
                }
            };

            /***/
        },
        /* 68 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var global = __webpack_require__(3);
            var core = __webpack_require__(7);
            var dP = __webpack_require__(10);
            var DESCRIPTORS = __webpack_require__(12);
            var SPECIES = __webpack_require__(4)('species');

            module.exports = function (KEY) {
                var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
                if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
                    configurable: true,
                    get: function get() {
                        return this;
                    }
                });
            };

            /***/
        },
        /* 69 */
        /***/function (module, exports, __webpack_require__) {

            var META = __webpack_require__(35)('meta');
            var isObject = __webpack_require__(6);
            var has = __webpack_require__(14);
            var setDesc = __webpack_require__(10).f;
            var id = 0;
            var isExtensible = Object.isExtensible || function () {
                return true;
            };
            var FREEZE = !__webpack_require__(19)(function () {
                return isExtensible(Object.preventExtensions({}));
            });
            var setMeta = function setMeta(it) {
                setDesc(it, META, { value: {
                        i: 'O' + ++id, // object ID
                        w: {} // weak collections IDs
                    } });
            };
            var fastKey = function fastKey(it, create) {
                // return primitive with prefix
                if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                if (!has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return 'F';
                    // not necessary to add metadata
                    if (!create) return 'E';
                    // add missing metadata
                    setMeta(it);
                    // return object ID
                }return it[META].i;
            };
            var getWeak = function getWeak(it, create) {
                if (!has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return true;
                    // not necessary to add metadata
                    if (!create) return false;
                    // add missing metadata
                    setMeta(it);
                    // return hash weak collections IDs
                }return it[META].w;
            };
            // add metadata on freeze-family methods calling
            var onFreeze = function onFreeze(it) {
                if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
                return it;
            };
            var meta = module.exports = {
                KEY: META,
                NEED: false,
                fastKey: fastKey,
                getWeak: getWeak,
                onFreeze: onFreeze
            };

            /***/
        },
        /* 70 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var global = __webpack_require__(3);
            var $export = __webpack_require__(5);
            var meta = __webpack_require__(69);
            var fails = __webpack_require__(19);
            var hide = __webpack_require__(9);
            var redefineAll = __webpack_require__(37);
            var forOf = __webpack_require__(17);
            var anInstance = __webpack_require__(38);
            var isObject = __webpack_require__(6);
            var setToStringTag = __webpack_require__(20);
            var dP = __webpack_require__(10).f;
            var each = __webpack_require__(105)(0);
            var DESCRIPTORS = __webpack_require__(12);

            module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
                var Base = global[NAME];
                var C = Base;
                var ADDER = IS_MAP ? 'set' : 'add';
                var proto = C && C.prototype;
                var O = {};
                if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
                    new C().entries().next();
                }))) {
                    // create collection constructor
                    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
                    redefineAll(C.prototype, methods);
                    meta.NEED = true;
                } else {
                    C = wrapper(function (target, iterable) {
                        anInstance(target, C, NAME, '_c');
                        target._c = new Base();
                        if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
                    });
                    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
                        var IS_ADDER = KEY == 'add' || KEY == 'set';
                        if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
                            anInstance(this, C, KEY);
                            if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
                            var result = this._c[KEY](a === 0 ? 0 : a, b);
                            return IS_ADDER ? this : result;
                        });
                    });
                    IS_WEAK || dP(C.prototype, 'size', {
                        get: function get() {
                            return this._c.size;
                        }
                    });
                }

                setToStringTag(C, NAME);

                O[NAME] = C;
                $export($export.G + $export.W + $export.F, O);

                if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

                return C;
            };

            /***/
        },
        /* 71 */
        /***/function (module, exports, __webpack_require__) {

            // https://github.com/DavidBruant/Map-Set.prototype.toJSON
            var classof = __webpack_require__(39);
            var from = __webpack_require__(110);
            module.exports = function (NAME) {
                return function toJSON() {
                    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
                    return from(this);
                };
            };

            /***/
        },
        /* 72 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            // https://tc39.github.io/proposal-setmap-offrom/

            var $export = __webpack_require__(5);

            module.exports = function (COLLECTION) {
                $export($export.S, COLLECTION, { of: function of() {
                        var length = arguments.length;
                        var A = new Array(length);
                        while (length--) {
                            A[length] = arguments[length];
                        }return new this(A);
                    } });
            };

            /***/
        },
        /* 73 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            // https://tc39.github.io/proposal-setmap-offrom/

            var $export = __webpack_require__(5);
            var aFunction = __webpack_require__(13);
            var ctx = __webpack_require__(8);
            var forOf = __webpack_require__(17);

            module.exports = function (COLLECTION) {
                $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
                        var mapFn = arguments[1];
                        var mapping, A, n, cb;
                        aFunction(this);
                        mapping = mapFn !== undefined;
                        if (mapping) aFunction(mapFn);
                        if (source == undefined) return new this();
                        A = [];
                        if (mapping) {
                            n = 0;
                            cb = ctx(mapFn, arguments[2], 2);
                            forOf(source, false, function (nextItem) {
                                A.push(cb(nextItem, n++));
                            });
                        } else {
                            forOf(source, false, A.push, A);
                        }
                        return new this(A);
                    } });
            };

            /***/
        },
        /* 74 */
        /***/function (module, exports, __webpack_require__) {

            // 7.3.20 SpeciesConstructor(O, defaultConstructor)
            var anObject = __webpack_require__(11);
            var aFunction = __webpack_require__(13);
            var SPECIES = __webpack_require__(4)('species');
            module.exports = function (O, D) {
                var C = anObject(O).constructor;
                var S;
                return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
            };

            /***/
        },
        /* 75 */
        /***/function (module, exports, __webpack_require__) {

            var ctx = __webpack_require__(8);
            var invoke = __webpack_require__(121);
            var html = __webpack_require__(64);
            var cel = __webpack_require__(31);
            var global = __webpack_require__(3);
            var process = global.process;
            var setTask = global.setImmediate;
            var clearTask = global.clearImmediate;
            var MessageChannel = global.MessageChannel;
            var Dispatch = global.Dispatch;
            var counter = 0;
            var queue = {};
            var ONREADYSTATECHANGE = 'onreadystatechange';
            var defer, channel, port;
            var run = function run() {
                var id = +this;
                // eslint-disable-next-line no-prototype-builtins
                if (queue.hasOwnProperty(id)) {
                    var fn = queue[id];
                    delete queue[id];
                    fn();
                }
            };
            var listener = function listener(event) {
                run.call(event.data);
            };
            // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
            if (!setTask || !clearTask) {
                setTask = function setImmediate(fn) {
                    var args = [];
                    var i = 1;
                    while (arguments.length > i) {
                        args.push(arguments[i++]);
                    }queue[++counter] = function () {
                        // eslint-disable-next-line no-new-func
                        invoke(typeof fn == 'function' ? fn : Function(fn), args);
                    };
                    defer(counter);
                    return counter;
                };
                clearTask = function clearImmediate(id) {
                    delete queue[id];
                };
                // Node.js 0.8-
                if (__webpack_require__(16)(process) == 'process') {
                    defer = function defer(id) {
                        process.nextTick(ctx(run, id, 1));
                    };
                    // Sphere (JS game engine) Dispatch API
                } else if (Dispatch && Dispatch.now) {
                    defer = function defer(id) {
                        Dispatch.now(ctx(run, id, 1));
                    };
                    // Browsers with MessageChannel, includes WebWorkers
                } else if (MessageChannel) {
                    channel = new MessageChannel();
                    port = channel.port2;
                    channel.port1.onmessage = listener;
                    defer = ctx(port.postMessage, port, 1);
                    // Browsers with postMessage, skip WebWorkers
                    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
                } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                    defer = function defer(id) {
                        global.postMessage(id + '', '*');
                    };
                    global.addEventListener('message', listener, false);
                    // IE8-
                } else if (ONREADYSTATECHANGE in cel('script')) {
                    defer = function defer(id) {
                        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                            html.removeChild(this);
                            run.call(id);
                        };
                    };
                    // Rest old browsers
                } else {
                    defer = function defer(id) {
                        setTimeout(ctx(run, id, 1), 0);
                    };
                }
            }
            module.exports = {
                set: setTask,
                clear: clearTask
            };

            /***/
        },
        /* 76 */
        /***/function (module, exports) {

            module.exports = function (exec) {
                try {
                    return { e: false, v: exec() };
                } catch (e) {
                    return { e: true, v: e };
                }
            };

            /***/
        },
        /* 77 */
        /***/function (module, exports, __webpack_require__) {

            var anObject = __webpack_require__(11);
            var isObject = __webpack_require__(6);
            var newPromiseCapability = __webpack_require__(42);

            module.exports = function (C, x) {
                anObject(C);
                if (isObject(x) && x.constructor === C) return x;
                var promiseCapability = newPromiseCapability.f(C);
                var resolve = promiseCapability.resolve;
                resolve(x);
                return promiseCapability.promise;
            };

            /***/
        },
        /* 78 */
        /***/function (module, exports, __webpack_require__) {

            __webpack_require__(26);
            __webpack_require__(27);
            __webpack_require__(36);
            __webpack_require__(129);
            __webpack_require__(130);
            __webpack_require__(131);
            __webpack_require__(132);
            module.exports = __webpack_require__(7).Set;

            /***/
        },
        /* 79 */
        /***/function (module, exports) {

            /**
             * Expose `Emitter`.
             */

            module.exports = Emitter;

            /**
             * Initialize a new `Emitter`.
             *
             * @api public
             */

            function Emitter(obj) {
                if (obj) return mixin(obj);
            };

            /**
             * Mixin the emitter properties.
             *
             * @param {Object} obj
             * @return {Object}
             * @api private
             */

            function mixin(obj) {
                for (var key in Emitter.prototype) {
                    obj[key] = Emitter.prototype[key];
                }
                return obj;
            }

            /**
             * Listen on the given `event` with `fn`.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
                this._callbacks = this._callbacks || {};
                (this._callbacks[event] = this._callbacks[event] || []).push(fn);
                return this;
            };

            /**
             * Adds an `event` listener that will be invoked a single
             * time then automatically removed.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.once = function (event, fn) {
                var self = this;
                this._callbacks = this._callbacks || {};

                function on() {
                    self.off(event, on);
                    fn.apply(this, arguments);
                }

                on.fn = fn;
                this.on(event, on);
                return this;
            };

            /**
             * Remove the given callback for `event` or all
             * registered callbacks.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
                this._callbacks = this._callbacks || {};

                // all
                if (0 == arguments.length) {
                    this._callbacks = {};
                    return this;
                }

                // specific event
                var callbacks = this._callbacks[event];
                if (!callbacks) return this;

                // remove all handlers
                if (1 == arguments.length) {
                    delete this._callbacks[event];
                    return this;
                }

                // remove specific handler
                var cb;
                for (var i = 0; i < callbacks.length; i++) {
                    cb = callbacks[i];
                    if (cb === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break;
                    }
                }
                return this;
            };

            /**
             * Emit `event` with the given args.
             *
             * @param {String} event
             * @param {Mixed} ...
             * @return {Emitter}
             */

            Emitter.prototype.emit = function (event) {
                this._callbacks = this._callbacks || {};
                var args = [].slice.call(arguments, 1),
                    callbacks = this._callbacks[event];

                if (callbacks) {
                    callbacks = callbacks.slice(0);
                    for (var i = 0, len = callbacks.length; i < len; ++i) {
                        callbacks[i].apply(this, args);
                    }
                }

                return this;
            };

            /**
             * Return array of callbacks for `event`.
             *
             * @param {String} event
             * @return {Array}
             * @api public
             */

            Emitter.prototype.listeners = function (event) {
                this._callbacks = this._callbacks || {};
                return this._callbacks[event] || [];
            };

            /**
             * Check if this emitter has `event` handlers.
             *
             * @param {String} event
             * @return {Boolean}
             * @api public
             */

            Emitter.prototype.hasListeners = function (event) {
                return !!this.listeners(event).length;
            };

            /***/
        },
        /* 80 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__clientContextFactory__ = __webpack_require__(81);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__logging__ = __webpack_require__(2);
            /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "createClientContext", function () {
                return __WEBPACK_IMPORTED_MODULE_0__clientContextFactory__["b"];
            });
            /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "ClientContextFactory", function () {
                return __WEBPACK_IMPORTED_MODULE_0__clientContextFactory__["a"];
            });
            /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "LoggerFactory", function () {
                return __WEBPACK_IMPORTED_MODULE_1__logging__["b"];
            });
            /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "LogLevel", function () {
                return __WEBPACK_IMPORTED_MODULE_1__logging__["a"];
            });

            /***/
        },
        /* 81 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "b", function () {
                return createClientContext;
            });
            /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
                return ClientContextFactory;
            });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__openDolphin_js__ = __webpack_require__(82);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__logging__ = __webpack_require__(2);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__connector__ = __webpack_require__(22);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__beanmanager__ = __webpack_require__(126);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__classrepo__ = __webpack_require__(127);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__controllermanager__ = __webpack_require__(128);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__clientcontext__ = __webpack_require__(134);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__platformHttpTransmitter__ = __webpack_require__(135);
            /* Copyright 2015 Canoo Engineering AG.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *     http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */

            var ClientContextFactory = function () {
                function ClientContextFactory() {
                    _classCallCheck(this, ClientContextFactory);
                }

                _createClass(ClientContextFactory, [{
                    key: 'create',
                    value: function create(url, config) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('connect(url, config)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(url, 'url');
                        ClientContextFactory.LOGGER.info('Dolphin Platform Version:', "0.18.0");
                        ClientContextFactory.LOGGER.debug('Creating client context', url, config);

                        var builder = Object(__WEBPACK_IMPORTED_MODULE_0__openDolphin_js__["a" /* makeDolphin */])().url(url).reset(false).slackMS(4).supportCORS(true).maxBatchSize(Number.MAX_SAFE_INTEGER);
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(config)) {
                            if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(config.errorHandler)) {
                                builder.errorHandler(config.errorHandler);
                            }
                            if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(config.headersInfo) && Object.keys(config.headersInfo).length > 0) {
                                builder.headersInfo(config.headersInfo);
                            }
                        }

                        var dolphin = builder.build();

                        var transmitter = new __WEBPACK_IMPORTED_MODULE_8__platformHttpTransmitter__["a" /* default */](url, config);
                        transmitter.on('error', function (error) {
                            clientContext.emit('error', error);
                        });
                        dolphin.clientConnector.transmitter = transmitter;

                        var classRepository = new __WEBPACK_IMPORTED_MODULE_5__classrepo__["a" /* default */](dolphin);
                        var beanManager = new __WEBPACK_IMPORTED_MODULE_4__beanmanager__["a" /* default */](classRepository);
                        var connector = new __WEBPACK_IMPORTED_MODULE_3__connector__["d" /* default */](url, dolphin, classRepository, config);
                        var controllerManager = new __WEBPACK_IMPORTED_MODULE_6__controllermanager__["a" /* default */](dolphin, classRepository, connector);

                        var clientContext = new __WEBPACK_IMPORTED_MODULE_7__clientcontext__["a" /* default */](dolphin, beanManager, controllerManager, connector);

                        ClientContextFactory.LOGGER.debug('clientContext created with', clientContext);

                        return clientContext;
                    }
                }]);

                return ClientContextFactory;
            }();

            ClientContextFactory.LOGGER = __WEBPACK_IMPORTED_MODULE_2__logging__["b" /* LoggerFactory */].getLogger('ClientContextFactory');

            var createClientContext = new ClientContextFactory().create;

            /***/
        },
        /* 82 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* unused harmony export dolphin */
            /* harmony export (immutable) */
            __webpack_exports__["a"] = makeDolphin;
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__dolphinBuilder__ = __webpack_require__(83);

            function dolphin(url, reset) {
                var slackMS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;

                return makeDolphin().url(url).reset(reset).slackMS(slackMS).build();
            }

            function makeDolphin() {
                return new __WEBPACK_IMPORTED_MODULE_0__dolphinBuilder__["a" /* default */]();
            }

            /***/
        },
        /* 83 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__clientConnector__ = __webpack_require__(84);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__clientDolphin__ = __webpack_require__(114);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__clientModelStore__ = __webpack_require__(116);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__httpTransmitter__ = __webpack_require__(118);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__noTransmitter__ = __webpack_require__(119);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__logging__ = __webpack_require__(2);

            var DolphinBuilder = function () {
                function DolphinBuilder() {
                    _classCallCheck(this, DolphinBuilder);

                    this.reset_ = false;
                    this.slackMS_ = 300;
                    this.maxBatchSize_ = 50;
                    this.supportCORS_ = false;
                }

                _createClass(DolphinBuilder, [{
                    key: 'url',
                    value: function url(_url) {
                        this.url_ = _url;
                        return this;
                    }
                }, {
                    key: 'reset',
                    value: function reset(_reset) {
                        this.reset_ = _reset;
                        return this;
                    }
                }, {
                    key: 'slackMS',
                    value: function slackMS(_slackMS) {
                        this.slackMS_ = _slackMS;
                        return this;
                    }
                }, {
                    key: 'maxBatchSize',
                    value: function maxBatchSize(_maxBatchSize) {
                        this.maxBatchSize_ = _maxBatchSize;
                        return this;
                    }
                }, {
                    key: 'supportCORS',
                    value: function supportCORS(_supportCORS) {
                        this.supportCORS_ = _supportCORS;
                        return this;
                    }
                }, {
                    key: 'errorHandler',
                    value: function errorHandler(_errorHandler) {
                        this.errorHandler_ = _errorHandler;
                        return this;
                    }
                }, {
                    key: 'headersInfo',
                    value: function headersInfo(_headersInfo) {
                        this.headersInfo_ = _headersInfo;
                        return this;
                    }
                }, {
                    key: 'build',
                    value: function build() {
                        var clientDolphin = new __WEBPACK_IMPORTED_MODULE_1__clientDolphin__["a" /* default */]();
                        var transmitter = void 0;
                        if (this.url_ != null && this.url_.length > 0) {
                            transmitter = new __WEBPACK_IMPORTED_MODULE_3__httpTransmitter__["a" /* default */](this.url_, this.reset_, "UTF-8", this.errorHandler_, this.supportCORS_, this.headersInfo_);
                        } else {
                            transmitter = new __WEBPACK_IMPORTED_MODULE_4__noTransmitter__["a" /* default */]();
                        }
                        clientDolphin.setClientConnector(new __WEBPACK_IMPORTED_MODULE_0__clientConnector__["a" /* default */](transmitter, clientDolphin, this.slackMS_, this.maxBatchSize_));
                        clientDolphin.setClientModelStore(new __WEBPACK_IMPORTED_MODULE_2__clientModelStore__["a" /* default */](clientDolphin));
                        DolphinBuilder.LOGGER.debug("ClientDolphin initialized", clientDolphin, transmitter);
                        return clientDolphin;
                    }
                }]);

                return DolphinBuilder;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = DolphinBuilder;

            DolphinBuilder.LOGGER = __WEBPACK_IMPORTED_MODULE_5__logging__["b" /* LoggerFactory */].getLogger('DolphinBuilder');

            /***/
        },
        /* 84 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commandBatcher__ = __webpack_require__(85);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__commands_codec__ = __webpack_require__(23);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__clientPresentationModel__ = __webpack_require__(56);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__logging__ = __webpack_require__(2);

            var ClientConnector = function () {
                function ClientConnector(transmitter, clientDolphin) {
                    var slackMS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    var maxBatchSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;

                    _classCallCheck(this, ClientConnector);

                    this.commandQueue = [];
                    this.currentlySending = false;
                    this.pushEnabled = false;
                    this.waiting = false;
                    this.transmitter = transmitter;
                    this.clientDolphin = clientDolphin;
                    this.slackMS = slackMS;
                    this.codec = new __WEBPACK_IMPORTED_MODULE_1__commands_codec__["a" /* default */]();
                    this.commandBatcher = new __WEBPACK_IMPORTED_MODULE_0__commandBatcher__["a" /* default */](true, maxBatchSize);
                }

                _createClass(ClientConnector, [{
                    key: 'setCommandBatcher',
                    value: function setCommandBatcher(newBatcher) {
                        this.commandBatcher = newBatcher;
                    }
                }, {
                    key: 'setPushEnabled',
                    value: function setPushEnabled(enabled) {
                        this.pushEnabled = enabled;
                    }
                }, {
                    key: 'setPushListener',
                    value: function setPushListener(newListener) {
                        this.pushListener = newListener;
                    }
                }, {
                    key: 'setReleaseCommand',
                    value: function setReleaseCommand(newCommand) {
                        this.releaseCommand = newCommand;
                    }
                }, {
                    key: 'send',
                    value: function send(command, onFinished) {
                        this.commandQueue.push({ command: command, handler: onFinished });
                        if (this.currentlySending) {
                            this.release(); // there is not point in releasing if we do not send atm
                            return;
                        }
                        this.doSendNext();
                    }
                }, {
                    key: 'doSendNext',
                    value: function doSendNext() {
                        var _this3 = this;

                        if (this.commandQueue.length < 1) {
                            if (this.pushEnabled) {
                                this.enqueuePushCommand();
                            } else {
                                this.currentlySending = false;
                                return;
                            }
                        }
                        this.currentlySending = true;
                        var cmdsAndHandlers = this.commandBatcher.batch(this.commandQueue);

                        if (cmdsAndHandlers.length > 0) {
                            var callback = cmdsAndHandlers[cmdsAndHandlers.length - 1].handler;
                            var commands = cmdsAndHandlers.map(function (cah) {
                                return cah.command;
                            });
                            this.transmitter.transmit(commands, function (response) {
                                var touchedPMs = [];
                                response.forEach(function (command) {
                                    var touched = _this3.handle(command);
                                    if (touched) touchedPMs.push(touched);
                                });
                                if (callback) {
                                    callback.onFinished(touchedPMs); // todo: make them unique?
                                }
                                setTimeout(function () {
                                    return _this3.doSendNext();
                                }, _this3.slackMS);
                            });
                        } else {
                            setTimeout(function () {
                                return _this3.doSendNext();
                            }, this.slackMS);
                        }
                    }
                }, {
                    key: 'handle',
                    value: function handle(command) {
                        if (command.id === "DeletePresentationModel") {
                            return this.handleDeletePresentationModelCommand(command);
                        } else if (command.id === "CreatePresentationModel") {
                            return this.handleCreatePresentationModelCommand(command);
                        } else if (command.id === "ValueChanged") {
                            return this.handleValueChangedCommand(command);
                        } else if (command.id === "AttributeMetadataChanged") {
                            return this.handleAttributeMetadataChangedCommand(command);
                        } else {
                            ClientConnector.LOGGER.error("Cannot handle, unknown command " + command);
                        }
                        return null;
                    }
                }, {
                    key: 'handleDeletePresentationModelCommand',
                    value: function handleDeletePresentationModelCommand(serverCommand) {
                        var model = this.clientDolphin.findPresentationModelById(serverCommand.pmId);
                        if (!model) return null;
                        this.clientDolphin.getClientModelStore().deletePresentationModel(model, true);
                        return model;
                    }
                }, {
                    key: 'handleCreatePresentationModelCommand',
                    value: function handleCreatePresentationModelCommand(serverCommand) {
                        var _this4 = this;

                        if (this.clientDolphin.getClientModelStore().containsPresentationModel(serverCommand.pmId)) {
                            throw new Error("There already is a presentation model with id " + serverCommand.pmId + "  known to the client.");
                        }
                        var attributes = [];
                        serverCommand.attributes.forEach(function (attr) {
                            var clientAttribute = _this4.clientDolphin.attribute(attr.propertyName, attr.qualifier, attr.value);
                            if (attr.id && attr.id.match(".*S$")) {
                                clientAttribute.id = attr.id;
                            }
                            attributes.push(clientAttribute);
                        });
                        var clientPm = new __WEBPACK_IMPORTED_MODULE_2__clientPresentationModel__["a" /* default */](serverCommand.pmId, serverCommand.pmType);
                        clientPm.addAttributes(attributes);
                        if (serverCommand.clientSideOnly) {
                            clientPm.clientSideOnly = true;
                        }
                        this.clientDolphin.getClientModelStore().add(clientPm, false);
                        this.clientDolphin.updatePresentationModelQualifier(clientPm);
                        return clientPm;
                    }
                }, {
                    key: 'handleValueChangedCommand',
                    value: function handleValueChangedCommand(serverCommand) {
                        var clientAttribute = this.clientDolphin.getClientModelStore().findAttributeById(serverCommand.attributeId);
                        if (!clientAttribute) {
                            ClientConnector.LOGGER.error("attribute with id " + serverCommand.attributeId + " not found, cannot update to new value " + serverCommand.newValue);
                            return null;
                        }
                        if (clientAttribute.getValue() === serverCommand.newValue) {
                            return null;
                        }
                        clientAttribute.setValueFromServer(serverCommand.newValue);
                        return null;
                    }
                }, {
                    key: 'handleAttributeMetadataChangedCommand',
                    value: function handleAttributeMetadataChangedCommand(serverCommand) {
                        var clientAttribute = this.clientDolphin.getClientModelStore().findAttributeById(serverCommand.attributeId);
                        if (!clientAttribute) return null;
                        clientAttribute[serverCommand.metadataName] = serverCommand.value;
                        return null;
                    }
                }, {
                    key: 'listen',
                    value: function listen() {
                        if (!this.pushEnabled) return;
                        if (this.waiting) return;
                        // todo: how to issue a warning if no pushListener is set?
                        if (!this.currentlySending) {
                            this.doSendNext();
                        }
                    }
                }, {
                    key: 'enqueuePushCommand',
                    value: function enqueuePushCommand() {
                        var me = this;
                        this.waiting = true;
                        this.commandQueue.push({
                            command: this.pushListener,
                            handler: {
                                onFinished: function onFinished() {
                                    me.waiting = false;
                                },
                                onFinishedData: null
                            }
                        });
                    }
                }, {
                    key: 'release',
                    value: function release() {
                        if (!this.waiting) return;
                        this.waiting = false;
                        // todo: how to issue a warning if no releaseCommand is set?
                        this.transmitter.signal(this.releaseCommand);
                    }
                }]);

                return ClientConnector;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = ClientConnector;

            ClientConnector.LOGGER = __WEBPACK_IMPORTED_MODULE_3__logging__["b" /* LoggerFactory */].getLogger('ClientConnector');

            /***/
        },
        /* 85 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commands_commandConstants__ = __webpack_require__(1);

            var BlindCommandBatcher = function () {
                function BlindCommandBatcher() {
                    var folding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                    var maxBatchSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

                    _classCallCheck(this, BlindCommandBatcher);

                    this.folding = folding;
                    this.maxBatchSize = maxBatchSize;
                }

                _createClass(BlindCommandBatcher, [{
                    key: 'batch',
                    value: function batch(queue) {
                        var batch = [];
                        var batchLength = 0;
                        while (queue[batchLength] && batchLength <= this.maxBatchSize) {
                            var element = queue[batchLength];
                            batchLength++;
                            if (this.folding) {
                                if (element.command.id == __WEBPACK_IMPORTED_MODULE_0__commands_commandConstants__["v" /* VALUE_CHANGED_COMMAND_ID */] && batch.length > 0 && batch[batch.length - 1].command.id == __WEBPACK_IMPORTED_MODULE_0__commands_commandConstants__["v" /* VALUE_CHANGED_COMMAND_ID */] && element.command.attributeId == batch[batch.length - 1].command.attributeId) {
                                    //merge ValueChange for same value
                                    batch[batch.length - 1].command.newValue = element.command.newValue;
                                } else if (element.command.id == __WEBPACK_IMPORTED_MODULE_0__commands_commandConstants__["s" /* PRESENTATION_MODEL_DELETED_COMMAND_ID */]) {
                                        //We do not need it...
                                    } else {
                                    batch.push(element);
                                }
                            } else {
                                batch.push(element);
                            }
                            if (element.handler) {
                                break;
                            }
                        }
                        queue.splice(0, batchLength);
                        return batch;
                    }
                }]);

                return BlindCommandBatcher;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = BlindCommandBatcher;

            /***/
        },
        /* 86 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            var CodecError = function (_Error) {
                _inherits(CodecError, _Error);

                function CodecError(message) {
                    _classCallCheck(this, CodecError);

                    return _possibleConstructorReturn(this, (CodecError.__proto__ || Object.getPrototypeOf(CodecError)).call(this, message));
                }

                return CodecError;
            }(Error);
            /* harmony export (immutable) */

            __webpack_exports__["a"] = CodecError;

            /***/
        },
        /* 87 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return LoggerFactory;
            });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map__ = __webpack_require__(25);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__logger__ = __webpack_require__(113);

            var ROOT_LOGGER = new __WEBPACK_IMPORTED_MODULE_2__logger__["a" /* Logger */]('ROOT');

            // private methods
            var LOCALS = {
                loggers: new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default.a()
            };

            // public

            var LoggerFactory = function () {
                function LoggerFactory() {
                    _classCallCheck(this, LoggerFactory);
                }

                _createClass(LoggerFactory, null, [{
                    key: 'getLogger',
                    value: function getLogger(context) {
                        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(context) || context === 'ROOT') {
                            return ROOT_LOGGER;
                        }
                        var existingLogger = LOCALS.loggers.get(context);
                        if (existingLogger) {
                            return existingLogger;
                        }

                        var logger = new __WEBPACK_IMPORTED_MODULE_2__logger__["a" /* Logger */](context, ROOT_LOGGER);
                        LOCALS.loggers.set(context, logger);
                        return logger;
                    }
                }]);

                return LoggerFactory;
            }();

            /***/
        },
        /* 88 */
        /***/function (module, exports, __webpack_require__) {

            var toInteger = __webpack_require__(28);
            var defined = __webpack_require__(29);
            // true  -> String#at
            // false -> String#codePointAt
            module.exports = function (TO_STRING) {
                return function (that, pos) {
                    var s = String(defined(that));
                    var i = toInteger(pos);
                    var l = s.length;
                    var a, b;
                    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                    a = s.charCodeAt(i);
                    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                };
            };

            /***/
        },
        /* 89 */
        /***/function (module, exports, __webpack_require__) {

            module.exports = !__webpack_require__(12) && !__webpack_require__(19)(function () {
                return Object.defineProperty(__webpack_require__(31)('div'), 'a', { get: function get() {
                        return 7;
                    } }).a != 7;
            });

            /***/
        },
        /* 90 */
        /***/function (module, exports, __webpack_require__) {

            // 7.1.1 ToPrimitive(input [, PreferredType])
            var isObject = __webpack_require__(6);
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module.exports = function (it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
                if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value");
            };

            /***/
        },
        /* 91 */
        /***/function (module, exports, __webpack_require__) {

            module.exports = __webpack_require__(9);

            /***/
        },
        /* 92 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var create = __webpack_require__(60);
            var descriptor = __webpack_require__(59);
            var setToStringTag = __webpack_require__(20);
            var IteratorPrototype = {};

            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            __webpack_require__(9)(IteratorPrototype, __webpack_require__(4)('iterator'), function () {
                return this;
            });

            module.exports = function (Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
                setToStringTag(Constructor, NAME + ' Iterator');
            };

            /***/
        },
        /* 93 */
        /***/function (module, exports, __webpack_require__) {

            var dP = __webpack_require__(10);
            var anObject = __webpack_require__(11);
            var getKeys = __webpack_require__(94);

            module.exports = __webpack_require__(12) ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties);
                var length = keys.length;
                var i = 0;
                var P;
                while (length > i) {
                    dP.f(O, P = keys[i++], Properties[P]);
                }return O;
            };

            /***/
        },
        /* 94 */
        /***/function (module, exports, __webpack_require__) {

            // 19.1.2.14 / 15.2.3.14 Object.keys(O)
            var $keys = __webpack_require__(95);
            var enumBugKeys = __webpack_require__(63);

            module.exports = Object.keys || function keys(O) {
                return $keys(O, enumBugKeys);
            };

            /***/
        },
        /* 95 */
        /***/function (module, exports, __webpack_require__) {

            var has = __webpack_require__(14);
            var toIObject = __webpack_require__(32);
            var arrayIndexOf = __webpack_require__(96)(false);
            var IE_PROTO = __webpack_require__(34)('IE_PROTO');

            module.exports = function (object, names) {
                var O = toIObject(object);
                var i = 0;
                var result = [];
                var key;
                for (key in O) {
                    if (key != IE_PROTO) has(O, key) && result.push(key);
                } // Don't enum bug & hidden keys
                while (names.length > i) {
                    if (has(O, key = names[i++])) {
                        ~arrayIndexOf(result, key) || result.push(key);
                    }
                }return result;
            };

            /***/
        },
        /* 96 */
        /***/function (module, exports, __webpack_require__) {

            // false -> Array#indexOf
            // true  -> Array#includes
            var toIObject = __webpack_require__(32);
            var toLength = __webpack_require__(33);
            var toAbsoluteIndex = __webpack_require__(97);
            module.exports = function (IS_INCLUDES) {
                return function ($this, el, fromIndex) {
                    var O = toIObject($this);
                    var length = toLength(O.length);
                    var index = toAbsoluteIndex(fromIndex, length);
                    var value;
                    // Array#includes uses SameValueZero equality algorithm
                    // eslint-disable-next-line no-self-compare
                    if (IS_INCLUDES && el != el) while (length > index) {
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if (value != value) return true;
                        // Array#indexOf ignores holes, Array#includes - not
                    } else for (; length > index; index++) {
                        if (IS_INCLUDES || index in O) {
                            if (O[index] === el) return IS_INCLUDES || index || 0;
                        }
                    }return !IS_INCLUDES && -1;
                };
            };

            /***/
        },
        /* 97 */
        /***/function (module, exports, __webpack_require__) {

            var toInteger = __webpack_require__(28);
            var max = Math.max;
            var min = Math.min;
            module.exports = function (index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
            };

            /***/
        },
        /* 98 */
        /***/function (module, exports, __webpack_require__) {

            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
            var has = __webpack_require__(14);
            var toObject = __webpack_require__(65);
            var IE_PROTO = __webpack_require__(34)('IE_PROTO');
            var ObjectProto = Object.prototype;

            module.exports = Object.getPrototypeOf || function (O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];
                if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                    return O.constructor.prototype;
                }return O instanceof Object ? ObjectProto : null;
            };

            /***/
        },
        /* 99 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var addToUnscopables = __webpack_require__(100);
            var step = __webpack_require__(66);
            var Iterators = __webpack_require__(15);
            var toIObject = __webpack_require__(32);

            // 22.1.3.4 Array.prototype.entries()
            // 22.1.3.13 Array.prototype.keys()
            // 22.1.3.29 Array.prototype.values()
            // 22.1.3.30 Array.prototype[@@iterator]()
            module.exports = __webpack_require__(30)(Array, 'Array', function (iterated, kind) {
                this._t = toIObject(iterated); // target
                this._i = 0; // next index
                this._k = kind; // kind
                // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
            }, function () {
                var O = this._t;
                var kind = this._k;
                var index = this._i++;
                if (!O || index >= O.length) {
                    this._t = undefined;
                    return step(1);
                }
                if (kind == 'keys') return step(0, index);
                if (kind == 'values') return step(0, O[index]);
                return step(0, [index, O[index]]);
            }, 'values');

            // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
            Iterators.Arguments = Iterators.Array;

            addToUnscopables('keys');
            addToUnscopables('values');
            addToUnscopables('entries');

            /***/
        },
        /* 100 */
        /***/function (module, exports) {

            module.exports = function () {/* empty */};

            /***/
        },
        /* 101 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var strong = __webpack_require__(67);
            var validate = __webpack_require__(40);
            var MAP = 'Map';

            // 23.1 Map Objects
            module.exports = __webpack_require__(70)(MAP, function (get) {
                return function Map() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            }, {
                // 23.1.3.6 Map.prototype.get(key)
                get: function get(key) {
                    var entry = strong.getEntry(validate(this, MAP), key);
                    return entry && entry.v;
                },
                // 23.1.3.9 Map.prototype.set(key, value)
                set: function set(key, value) {
                    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
                }
            }, strong, true);

            /***/
        },
        /* 102 */
        /***/function (module, exports, __webpack_require__) {

            // call something on iterator step with safe closing on error
            var anObject = __webpack_require__(11);
            module.exports = function (iterator, fn, value, entries) {
                try {
                    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                    // 7.4.6 IteratorClose(iterator, completion)
                } catch (e) {
                    var ret = iterator['return'];
                    if (ret !== undefined) anObject(ret.call(iterator));
                    throw e;
                }
            };

            /***/
        },
        /* 103 */
        /***/function (module, exports, __webpack_require__) {

            // check on default Array iterator
            var Iterators = __webpack_require__(15);
            var ITERATOR = __webpack_require__(4)('iterator');
            var ArrayProto = Array.prototype;

            module.exports = function (it) {
                return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
            };

            /***/
        },
        /* 104 */
        /***/function (module, exports, __webpack_require__) {

            var classof = __webpack_require__(39);
            var ITERATOR = __webpack_require__(4)('iterator');
            var Iterators = __webpack_require__(15);
            module.exports = __webpack_require__(7).getIteratorMethod = function (it) {
                if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
            };

            /***/
        },
        /* 105 */
        /***/function (module, exports, __webpack_require__) {

            // 0 -> Array#forEach
            // 1 -> Array#map
            // 2 -> Array#filter
            // 3 -> Array#some
            // 4 -> Array#every
            // 5 -> Array#find
            // 6 -> Array#findIndex
            var ctx = __webpack_require__(8);
            var IObject = __webpack_require__(61);
            var toObject = __webpack_require__(65);
            var toLength = __webpack_require__(33);
            var asc = __webpack_require__(106);
            module.exports = function (TYPE, $create) {
                var IS_MAP = TYPE == 1;
                var IS_FILTER = TYPE == 2;
                var IS_SOME = TYPE == 3;
                var IS_EVERY = TYPE == 4;
                var IS_FIND_INDEX = TYPE == 6;
                var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
                var create = $create || asc;
                return function ($this, callbackfn, that) {
                    var O = toObject($this);
                    var self = IObject(O);
                    var f = ctx(callbackfn, that, 3);
                    var length = toLength(self.length);
                    var index = 0;
                    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
                    var val, res;
                    for (; length > index; index++) {
                        if (NO_HOLES || index in self) {
                            val = self[index];
                            res = f(val, index, O);
                            if (TYPE) {
                                if (IS_MAP) result[index] = res; // map
                                else if (res) switch (TYPE) {
                                        case 3:
                                            return true; // some
                                        case 5:
                                            return val; // find
                                        case 6:
                                            return index; // findIndex
                                        case 2:
                                            result.push(val); // filter
                                    } else if (IS_EVERY) return false; // every
                            }
                        }
                    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
                };
            };

            /***/
        },
        /* 106 */
        /***/function (module, exports, __webpack_require__) {

            // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
            var speciesConstructor = __webpack_require__(107);

            module.exports = function (original, length) {
                return new (speciesConstructor(original))(length);
            };

            /***/
        },
        /* 107 */
        /***/function (module, exports, __webpack_require__) {

            var isObject = __webpack_require__(6);
            var isArray = __webpack_require__(108);
            var SPECIES = __webpack_require__(4)('species');

            module.exports = function (original) {
                var C;
                if (isArray(original)) {
                    C = original.constructor;
                    // cross-realm fallback
                    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
                    if (isObject(C)) {
                        C = C[SPECIES];
                        if (C === null) C = undefined;
                    }
                }return C === undefined ? Array : C;
            };

            /***/
        },
        /* 108 */
        /***/function (module, exports, __webpack_require__) {

            // 7.2.2 IsArray(argument)
            var cof = __webpack_require__(16);
            module.exports = Array.isArray || function isArray(arg) {
                return cof(arg) == 'Array';
            };

            /***/
        },
        /* 109 */
        /***/function (module, exports, __webpack_require__) {

            // https://github.com/DavidBruant/Map-Set.prototype.toJSON
            var $export = __webpack_require__(5);

            $export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(71)('Map') });

            /***/
        },
        /* 110 */
        /***/function (module, exports, __webpack_require__) {

            var forOf = __webpack_require__(17);

            module.exports = function (iter, ITERATOR) {
                var result = [];
                forOf(iter, false, result.push, result, ITERATOR);
                return result;
            };

            /***/
        },
        /* 111 */
        /***/function (module, exports, __webpack_require__) {

            // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
            __webpack_require__(72)('Map');

            /***/
        },
        /* 112 */
        /***/function (module, exports, __webpack_require__) {

            // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
            __webpack_require__(73)('Map');

            /***/
        },
        /* 113 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "a", function () {
                return Logger;
            });
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(0);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(57);

            // private methods
            var LOCALS = {
                pad: function pad(text, size) {
                    var result = '' + text;
                    while (result.length < size) {
                        result = '0' + result;
                    }
                    return result;
                },
                internalLog: function internalLog() {
                    var args = Array.from(arguments);
                    var func = args.shift();
                    var context = args.shift();
                    var logLevel = args.shift();
                    var date = new Date();
                    var dateString = date.getFullYear() + '-' + LOCALS.pad(date.getMonth() + 1, 2) + '-' + LOCALS.pad(date.getDate(), 2) + ' ' + LOCALS.pad(date.getHours(), 2) + ':' + LOCALS.pad(date.getMinutes(), 2) + ':' + LOCALS.pad(date.getSeconds(), 2) + '.' + LOCALS.pad(date.getMilliseconds(), 3);
                    func.apply(undefined, [dateString, logLevel.text, context].concat(_toConsumableArray(args)));
                },
                getCookie: function getCookie(name) {
                    if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(window) && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(window.document) && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(window.document.cookie)) {
                        var value = '; ' + document.cookie;
                        var parts = value.split('; ' + name + '=');
                        if (parts.length === 2) {
                            return parts.pop().split(';').shift();
                        }
                    }
                }
            };

            // public

            var Logger = function () {
                function Logger(context, rootLogger) {
                    _classCallCheck(this, Logger);

                    this.context = context;
                    this.rootLogger = rootLogger;
                    var cookieLogLevel = LOCALS.getCookie('DOLPHIN_PLATFORM_LOGGER_' + this.context);
                    switch (cookieLogLevel) {
                        case 'NONE':
                            this.logLevel = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].NONE;
                            break;
                        case 'ALL':
                            this.logLevel = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].ALL;
                            break;
                        case 'TRACE':
                            this.logLevel = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].TRACE;
                            break;
                        case 'DEBUG':
                            this.logLevel = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].DEBUG;
                            break;
                        case 'INFO':
                            this.logLevel = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].INFO;
                            break;
                        case 'WARN':
                            this.logLevel = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].WARN;
                            break;
                        case 'ERROR':
                            this.logLevel = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].ERROR;
                            break;
                    }
                }

                _createClass(Logger, [{
                    key: 'trace',
                    value: function trace() {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(console) && this.isLogLevel(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].TRACE)) {
                            LOCALS.internalLog.apply(LOCALS, [console.log, this.context, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].TRACE].concat(Array.prototype.slice.call(arguments)));
                        }
                    }
                }, {
                    key: 'debug',
                    value: function debug() {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(console) && this.isLogLevel(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].DEBUG)) {
                            LOCALS.internalLog.apply(LOCALS, [console.log, this.context, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].DEBUG].concat(Array.prototype.slice.call(arguments)));
                        }
                    }
                }, {
                    key: 'info',
                    value: function info() {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(console) && this.isLogLevel(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].INFO)) {
                            LOCALS.internalLog.apply(LOCALS, [console.log, this.context, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].INFO].concat(Array.prototype.slice.call(arguments)));
                        }
                    }
                }, {
                    key: 'warn',
                    value: function warn() {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(console) && this.isLogLevel(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].WARN)) {
                            LOCALS.internalLog.apply(LOCALS, [console.warn, this.context, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].WARN].concat(Array.prototype.slice.call(arguments)));
                        }
                    }
                }, {
                    key: 'error',
                    value: function error() {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(console) && this.isLogLevel(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].ERROR)) {
                            LOCALS.internalLog.apply(LOCALS, [console.error, this.context, __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].ERROR].concat(Array.prototype.slice.call(arguments)));
                        }
                    }
                }, {
                    key: 'getLogLevel',
                    value: function getLogLevel() {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(this.logLevel)) {
                            return this.logLevel;
                        } else if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(this.rootLogger)) {
                            return this.rootLogger.getLogLevel();
                        } else {
                            return __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].INFO;
                        }
                    }
                }, {
                    key: 'setLogLevel',
                    value: function setLogLevel(level) {
                        this.logLevel = level;
                    }
                }, {
                    key: 'setLogLevelByName',
                    value: function setLogLevelByName(levelName) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* exists */])(__WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */][levelName])) {
                            this.logLevel = __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */][levelName];
                        }
                    }
                }, {
                    key: 'isLogLevel',
                    value: function isLogLevel(level) {
                        if (this.getLogLevel() === __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].NONE) {
                            return false;
                        }
                        if (this.getLogLevel() === __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].ALL) {
                            return true;
                        }
                        if (this.getLogLevel() === __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].TRACE) {
                            return true;
                        }
                        if (this.getLogLevel() === __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].DEBUG && level !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].TRACE) {
                            return true;
                        }
                        if (this.getLogLevel() === __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].INFO && level !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].TRACE && level !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].DEBUG) {
                            return true;
                        }
                        if (this.getLogLevel() === __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].WARN && level !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].TRACE && level !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].DEBUG && level !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].INFO) {
                            return true;
                        }
                        if (this.getLogLevel() === __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].ERROR && level !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].TRACE && level !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].DEBUG && level !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].INFO && level !== __WEBPACK_IMPORTED_MODULE_1__constants__["a" /* LogLevel */].WARN) {
                            return true;
                        }
                        return false;
                    }
                }, {
                    key: 'isLogLevelUseable',
                    value: function isLogLevelUseable(level) {
                        Object(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* checkParam */])(level, 'level');
                        if (level.level) {
                            return this.getLogLevel().level >= level.level;
                        } else {
                            return false;
                        }
                    }
                }]);

                return Logger;
            }();

            /***/
        },
        /* 114 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__clientAttribute__ = __webpack_require__(115);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__clientPresentationModel__ = __webpack_require__(56);

            var ClientDolphin = function () {
                function ClientDolphin() {
                    _classCallCheck(this, ClientDolphin);
                }

                _createClass(ClientDolphin, [{
                    key: 'setClientConnector',
                    value: function setClientConnector(clientConnector) {
                        this.clientConnector = clientConnector;
                    }
                }, {
                    key: 'getClientConnector',
                    value: function getClientConnector() {
                        return this.clientConnector;
                    }
                }, {
                    key: 'send',
                    value: function send(command, onFinished) {
                        this.clientConnector.send(command, onFinished);
                    }
                }, {
                    key: 'attribute',
                    value: function attribute(propertyName, qualifier, value) {
                        return new __WEBPACK_IMPORTED_MODULE_0__clientAttribute__["a" /* default */](propertyName, qualifier, value);
                    }
                }, {
                    key: 'presentationModel',
                    value: function presentationModel(id, type) {
                        var model = new __WEBPACK_IMPORTED_MODULE_1__clientPresentationModel__["a" /* default */](id, type);

                        for (var _len = arguments.length, attributes = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                            attributes[_key - 2] = arguments[_key];
                        }

                        if (attributes && attributes.length > 0) {
                            attributes.forEach(function (attribute) {
                                model.addAttribute(attribute);
                            });
                        }
                        this.getClientModelStore().add(model, true);
                        return model;
                    }
                }, {
                    key: 'setClientModelStore',
                    value: function setClientModelStore(clientModelStore) {
                        this.clientModelStore = clientModelStore;
                    }
                }, {
                    key: 'getClientModelStore',
                    value: function getClientModelStore() {
                        return this.clientModelStore;
                    }
                }, {
                    key: 'listPresentationModelIds',
                    value: function listPresentationModelIds() {
                        return this.getClientModelStore().listPresentationModelIds();
                    }
                }, {
                    key: 'listPresentationModels',
                    value: function listPresentationModels() {
                        return this.getClientModelStore().listPresentationModels();
                    }
                }, {
                    key: 'findAllPresentationModelByType',
                    value: function findAllPresentationModelByType(presentationModelType) {
                        return this.getClientModelStore().findAllPresentationModelByType(presentationModelType);
                    }
                }, {
                    key: 'getAt',
                    value: function getAt(id) {
                        return this.findPresentationModelById(id);
                    }
                }, {
                    key: 'findPresentationModelById',
                    value: function findPresentationModelById(id) {
                        return this.getClientModelStore().findPresentationModelById(id);
                    }
                }, {
                    key: 'deletePresentationModel',
                    value: function deletePresentationModel(modelToDelete) {
                        this.getClientModelStore().deletePresentationModel(modelToDelete, true);
                    }
                }, {
                    key: 'updatePresentationModelQualifier',
                    value: function updatePresentationModelQualifier(presentationModel) {
                        var _this6 = this;

                        presentationModel.getAttributes().forEach(function (sourceAttribute) {
                            _this6.updateAttributeQualifier(sourceAttribute);
                        });
                    }
                }, {
                    key: 'updateAttributeQualifier',
                    value: function updateAttributeQualifier(sourceAttribute) {
                        if (!sourceAttribute.getQualifier()) return;
                        var attributes = this.getClientModelStore().findAllAttributesByQualifier(sourceAttribute.getQualifier());
                        attributes.forEach(function (targetAttribute) {
                            targetAttribute.setValue(sourceAttribute.getValue()); // should always have the same value
                        });
                    }
                }, {
                    key: 'startPushListening',
                    value: function startPushListening(pushCommand, releaseCommand) {
                        var _this7 = this;

                        this.clientConnector.setPushListener(pushCommand);
                        this.clientConnector.setReleaseCommand(releaseCommand);
                        this.clientConnector.setPushEnabled(true);

                        setTimeout(function () {
                            _this7.clientConnector.listen();
                        }, 0);
                    }
                }, {
                    key: 'stopPushListening',
                    value: function stopPushListening() {
                        this.clientConnector.setPushEnabled(false);
                    }
                }]);

                return ClientDolphin;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = ClientDolphin;

            /***/
        },
        /* 115 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__eventBus__ = __webpack_require__(24);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__logging__ = __webpack_require__(2);

            var ClientAttribute = function () {
                function ClientAttribute(propertyName, qualifier, value) {
                    _classCallCheck(this, ClientAttribute);

                    this.propertyName = propertyName;
                    this.id = "" + ClientAttribute.clientAttributeInstanceCount++ + "C";
                    this.valueChangeBus = new __WEBPACK_IMPORTED_MODULE_0__eventBus__["a" /* default */]();
                    this.qualifierChangeBus = new __WEBPACK_IMPORTED_MODULE_0__eventBus__["a" /* default */]();
                    this.setValue(value);
                    this.setQualifier(qualifier);
                }

                _createClass(ClientAttribute, [{
                    key: 'copy',
                    value: function copy() {
                        var result = new ClientAttribute(this.propertyName, this.getQualifier(), this.getValue());
                        return result;
                    }
                }, {
                    key: 'setPresentationModel',
                    value: function setPresentationModel(presentationModel) {
                        if (this.presentationModel) {
                            throw new Error("You can not set a presentation model for an attribute that is already bound.");
                        }
                        this.presentationModel = presentationModel;
                    }
                }, {
                    key: 'getPresentationModel',
                    value: function getPresentationModel() {
                        return this.presentationModel;
                    }
                }, {
                    key: 'getValue',
                    value: function getValue() {
                        return this.value;
                    }
                }, {
                    key: 'setValueFromServer',
                    value: function setValueFromServer(newValue) {
                        var verifiedValue = ClientAttribute.checkValue(newValue);
                        if (this.value === verifiedValue) return;
                        var oldValue = this.value;
                        this.value = verifiedValue;
                        this.valueChangeBus.trigger({ 'oldValue': oldValue, 'newValue': verifiedValue, 'sendToServer': false });
                    }
                }, {
                    key: 'setValue',
                    value: function setValue(newValue) {
                        var verifiedValue = ClientAttribute.checkValue(newValue);
                        if (this.value === verifiedValue) return;
                        var oldValue = this.value;
                        this.value = verifiedValue;
                        this.valueChangeBus.trigger({ 'oldValue': oldValue, 'newValue': verifiedValue, 'sendToServer': true });
                    }
                }, {
                    key: 'setQualifier',
                    value: function setQualifier(newQualifier) {
                        if (this.qualifier === newQualifier) return;
                        var oldQualifier = this.qualifier;
                        this.qualifier = newQualifier;
                        this.qualifierChangeBus.trigger({ 'oldValue': oldQualifier, 'newValue': newQualifier });
                        this.valueChangeBus.trigger({ "oldValue": this.value, "newValue": this.value, 'sendToServer': false });
                    }
                }, {
                    key: 'getQualifier',
                    value: function getQualifier() {
                        return this.qualifier;
                    }
                }, {
                    key: 'onValueChange',
                    value: function onValueChange(eventHandler) {
                        this.valueChangeBus.onEvent(eventHandler);
                        eventHandler({ "oldValue": this.value, "newValue": this.value, 'sendToServer': false });
                    }
                }, {
                    key: 'onQualifierChange',
                    value: function onQualifierChange(eventHandler) {
                        this.qualifierChangeBus.onEvent(eventHandler);
                    }
                }, {
                    key: 'syncWith',
                    value: function syncWith(sourceAttribute) {
                        if (sourceAttribute) {
                            this.setQualifier(sourceAttribute.getQualifier()); // sequence is important
                            this.setValue(sourceAttribute.value);
                        }
                    }
                }], [{
                    key: 'checkValue',
                    value: function checkValue(value) {
                        if (value == null || typeof value === 'undefined') {
                            return null;
                        }
                        var result = value;
                        if (result instanceof String || result instanceof Boolean || result instanceof Number) {
                            result = value.valueOf();
                        }
                        if (result instanceof ClientAttribute) {
                            ClientAttribute.LOGGER.warn("An Attribute may not itself contain an attribute as a value. Assuming you forgot to call value.");
                            result = this.checkValue(value.value);
                        }
                        var ok = false;
                        if (this.SUPPORTED_VALUE_TYPES.indexOf(typeof result === 'undefined' ? 'undefined' : _typeof(result)) > -1 || result instanceof Date) {
                            ok = true;
                        }
                        if (!ok) {
                            throw new Error("Attribute values of this type are not allowed: " + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
                        }
                        return result;
                    }
                }]);

                return ClientAttribute;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = ClientAttribute;

            ClientAttribute.LOGGER = __WEBPACK_IMPORTED_MODULE_1__logging__["b" /* LoggerFactory */].getLogger('ClientAttribute');
            ClientAttribute.SUPPORTED_VALUE_TYPES = ["string", "number", "boolean"];
            ClientAttribute.clientAttributeInstanceCount = 0;

            /***/
        },
        /* 116 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__attribute__ = __webpack_require__(117);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__eventBus__ = __webpack_require__(24);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__commands_commandFactory__ = __webpack_require__(21);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(18);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__logging__ = __webpack_require__(2);

            var ClientModelStore = function () {
                function ClientModelStore(clientDolphin) {
                    _classCallCheck(this, ClientModelStore);

                    this.clientDolphin = clientDolphin;
                    this.presentationModels = new Map();
                    this.presentationModelsPerType = new Map();
                    this.attributesPerId = new Map();
                    this.attributesPerQualifier = new Map();
                    this.modelStoreChangeBus = new __WEBPACK_IMPORTED_MODULE_1__eventBus__["a" /* default */]();
                }

                _createClass(ClientModelStore, [{
                    key: 'getClientDolphin',
                    value: function getClientDolphin() {
                        return this.clientDolphin;
                    }
                }, {
                    key: 'registerAttribute',
                    value: function registerAttribute(attribute) {
                        var _this8 = this;

                        this.addAttributeById(attribute);
                        if (attribute.getQualifier()) {
                            this.addAttributeByQualifier(attribute);
                        }
                        // whenever an attribute changes its value, the server needs to be notified
                        // and all other attributes with the same qualifier are given the same value
                        attribute.onValueChange(function (evt) {
                            if (evt.newValue !== evt.oldValue && evt.sendToServer === true) {
                                var command = __WEBPACK_IMPORTED_MODULE_2__commands_commandFactory__["a" /* default */].createValueChangedCommand(attribute.id, evt.newValue);
                                _this8.clientDolphin.getClientConnector().send(command, null);
                            }

                            if (attribute.getQualifier()) {
                                var attrs = _this8.findAttributesByFilter(function (attr) {
                                    return attr !== attribute && attr.getQualifier() === attribute.getQualifier();
                                });
                                attrs.forEach(function (attr) {
                                    attr.setValue(attribute.getValue());
                                });
                            }
                        });
                        attribute.onQualifierChange(function (evt) {
                            _this8.clientDolphin.getClientConnector().send(__WEBPACK_IMPORTED_MODULE_2__commands_commandFactory__["a" /* default */].createChangeAttributeMetadataCommand(attribute.id, __WEBPACK_IMPORTED_MODULE_0__attribute__["a" /* default */].QUALIFIER_PROPERTY, evt.newValue), null);
                        });
                    }
                }, {
                    key: 'add',
                    value: function add(model) {
                        var _this9 = this;

                        var sendToServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                        if (!model) {
                            return false;
                        }
                        if (this.presentationModels.has(model.id)) {
                            ClientModelStore.LOGGER.error("There already is a PM with id " + model.id);
                        }
                        var added = false;
                        if (!this.presentationModels.has(model.id)) {
                            this.presentationModels.set(model.id, model);
                            this.addPresentationModelByType(model);

                            if (sendToServer) {
                                var connector = this.clientDolphin.getClientConnector();
                                connector.send(__WEBPACK_IMPORTED_MODULE_2__commands_commandFactory__["a" /* default */].createCreatePresentationModelCommand(model), null);
                            }

                            model.getAttributes().forEach(function (attribute) {
                                _this9.registerAttribute(attribute);
                            });
                            this.modelStoreChangeBus.trigger({ 'eventType': __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* ADDED_TYPE */], 'clientPresentationModel': model });
                            added = true;
                        }
                        return added;
                    }
                }, {
                    key: 'remove',
                    value: function remove(model) {
                        var _this10 = this;

                        if (!model) {
                            return false;
                        }
                        var removed = false;
                        if (this.presentationModels.has(model.id)) {
                            this.removePresentationModelByType(model);
                            this.presentationModels.delete(model.id);
                            model.getAttributes().forEach(function (attribute) {
                                _this10.removeAttributeById(attribute);
                                if (attribute.getQualifier()) {
                                    _this10.removeAttributeByQualifier(attribute);
                                }
                            });
                            this.modelStoreChangeBus.trigger({ 'eventType': __WEBPACK_IMPORTED_MODULE_3__constants__["o" /* REMOVED_TYPE */], 'clientPresentationModel': model });
                            removed = true;
                        }
                        return removed;
                    }
                }, {
                    key: 'findAttributesByFilter',
                    value: function findAttributesByFilter(filter) {
                        var matches = [];
                        this.presentationModels.forEach(function (model) {
                            model.getAttributes().forEach(function (attr) {
                                if (filter(attr)) {
                                    matches.push(attr);
                                }
                            });
                        });
                        return matches;
                    }
                }, {
                    key: 'addPresentationModelByType',
                    value: function addPresentationModelByType(model) {
                        if (!model) {
                            return;
                        }
                        var type = model.presentationModelType;
                        if (!type) {
                            return;
                        }
                        var presentationModels = this.presentationModelsPerType.get(type);
                        if (!presentationModels) {
                            presentationModels = [];
                            this.presentationModelsPerType.set(type, presentationModels);
                        }
                        if (!(presentationModels.indexOf(model) > -1)) {
                            presentationModels.push(model);
                        }
                    }
                }, {
                    key: 'removePresentationModelByType',
                    value: function removePresentationModelByType(model) {
                        if (!model || !model.presentationModelType) {
                            return;
                        }
                        var presentationModels = this.presentationModelsPerType.get(model.presentationModelType);
                        if (!presentationModels) {
                            return;
                        }
                        if (presentationModels.length > -1) {
                            presentationModels.splice(presentationModels.indexOf(model), 1);
                        }
                        if (presentationModels.length === 0) {
                            this.presentationModelsPerType.delete(model.presentationModelType);
                        }
                    }
                }, {
                    key: 'listPresentationModelIds',
                    value: function listPresentationModelIds() {
                        var result = [];
                        var iter = this.presentationModels.keys();
                        var next = iter.next();
                        while (!next.done) {
                            result.push(next.value);
                            next = iter.next();
                        }
                        return result;
                    }
                }, {
                    key: 'listPresentationModels',
                    value: function listPresentationModels() {
                        var result = [];
                        var iter = this.presentationModels.values();
                        var next = iter.next();
                        while (!next.done) {
                            result.push(next.value);
                            next = iter.next();
                        }
                        return result;
                    }
                }, {
                    key: 'findPresentationModelById',
                    value: function findPresentationModelById(id) {
                        return this.presentationModels.get(id);
                    }
                }, {
                    key: 'findAllPresentationModelByType',
                    value: function findAllPresentationModelByType(type) {
                        if (!type || !this.presentationModelsPerType.has(type)) {
                            return [];
                        }
                        return this.presentationModelsPerType.get(type).slice(0); // slice is used to clone the array
                    }
                }, {
                    key: 'deletePresentationModel',
                    value: function deletePresentationModel(model, notify) {
                        if (!model) {
                            return;
                        }
                        if (this.containsPresentationModel(model.id)) {
                            this.remove(model);
                            if (!notify || model.clientSideOnly) {
                                return;
                            }
                            this.clientDolphin.getClientConnector().send(__WEBPACK_IMPORTED_MODULE_2__commands_commandFactory__["a" /* default */].createPresentationModelDeletedCommand(model.id), null);
                        }
                    }
                }, {
                    key: 'containsPresentationModel',
                    value: function containsPresentationModel(id) {
                        return this.presentationModels.has(id);
                    }
                }, {
                    key: 'addAttributeById',
                    value: function addAttributeById(attribute) {
                        if (!attribute || this.attributesPerId.has(attribute.id)) {
                            return;
                        }
                        this.attributesPerId.set(attribute.id, attribute);
                    }
                }, {
                    key: 'removeAttributeById',
                    value: function removeAttributeById(attribute) {
                        if (!attribute || !this.attributesPerId.has(attribute.id)) {
                            return;
                        }
                        this.attributesPerId.delete(attribute.id);
                    }
                }, {
                    key: 'findAttributeById',
                    value: function findAttributeById(id) {
                        return this.attributesPerId.get(id);
                    }
                }, {
                    key: 'addAttributeByQualifier',
                    value: function addAttributeByQualifier(attribute) {
                        if (!attribute || !attribute.getQualifier()) {
                            return;
                        }
                        var attributes = this.attributesPerQualifier.get(attribute.getQualifier());
                        if (!attributes) {
                            attributes = [];
                            this.attributesPerQualifier.set(attribute.getQualifier(), attributes);
                        }
                        if (!(attributes.indexOf(attribute) > -1)) {
                            attributes.push(attribute);
                        }
                    }
                }, {
                    key: 'removeAttributeByQualifier',
                    value: function removeAttributeByQualifier(attribute) {
                        if (!attribute || !attribute.getQualifier()) {
                            return;
                        }
                        var attributes = this.attributesPerQualifier.get(attribute.getQualifier());
                        if (!attributes) {
                            return;
                        }
                        if (attributes.length > -1) {
                            attributes.splice(attributes.indexOf(attribute), 1);
                        }
                        if (attributes.length === 0) {
                            this.attributesPerQualifier.delete(attribute.getQualifier());
                        }
                    }
                }, {
                    key: 'findAllAttributesByQualifier',
                    value: function findAllAttributesByQualifier(qualifier) {
                        if (!qualifier || !this.attributesPerQualifier.has(qualifier)) {
                            return [];
                        }
                        return this.attributesPerQualifier.get(qualifier).slice(0); // slice is used to clone the array
                    }
                }, {
                    key: 'onModelStoreChange',
                    value: function onModelStoreChange(eventHandler) {
                        this.modelStoreChangeBus.onEvent(eventHandler);
                    }
                }, {
                    key: 'onModelStoreChangeForType',
                    value: function onModelStoreChangeForType(presentationModelType, eventHandler) {
                        this.modelStoreChangeBus.onEvent(function (pmStoreEvent) {
                            if (pmStoreEvent.clientPresentationModel.presentationModelType == presentationModelType) {
                                eventHandler(pmStoreEvent);
                            }
                        });
                    }
                }]);

                return ClientModelStore;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = ClientModelStore;

            ClientModelStore.LOGGER = __WEBPACK_IMPORTED_MODULE_4__logging__["b" /* LoggerFactory */].getLogger('ClientModelStore');

            /***/
        },
        /* 117 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            var Attribute = function Attribute() {
                _classCallCheck(this, Attribute);
            };
            /* harmony export (immutable) */

            __webpack_exports__["a"] = Attribute;

            Attribute.QUALIFIER_PROPERTY = "qualifier";
            Attribute.VALUE = "value";

            /***/
        },
        /* 118 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__commands_codec__ = __webpack_require__(23);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__logging__ = __webpack_require__(2);

            var HttpTransmitter = function () {
                function HttpTransmitter(url) {
                    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    var charset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "UTF-8";
                    var errorHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                    var supportCORS = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                    var headersInfo = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

                    _classCallCheck(this, HttpTransmitter);

                    this.url = url;
                    this.charset = charset;
                    this.HttpCodes = {
                        finished: 4,
                        success: 200
                    };
                    this.errorHandler = errorHandler;
                    this.supportCORS = supportCORS;
                    this.headersInfo = headersInfo;
                    this.http = new XMLHttpRequest();
                    this.sig = new XMLHttpRequest();
                    if (this.supportCORS) {
                        if ("withCredentials" in this.http) {
                            this.http.withCredentials = true; // NOTE: doing this for non CORS requests has no impact
                            this.sig.withCredentials = true;
                        }
                    }
                    this.codec = new __WEBPACK_IMPORTED_MODULE_0__commands_codec__["a" /* default */]();
                    if (reset) {
                        HttpTransmitter.LOGGER.error('HttpTransmitter.invalidate() is deprecated. Use ClientDolphin.reset(OnSuccessHandler) instead');
                        this.invalidate();
                    }
                }

                _createClass(HttpTransmitter, [{
                    key: 'transmit',
                    value: function transmit(commands, onDone) {
                        var _this11 = this;

                        this.http.onerror = function () {
                            _this11.handleError('onerror', "");
                            onDone([]);
                        };
                        this.http.onreadystatechange = function () {
                            if (_this11.http.readyState === _this11.HttpCodes.finished) {
                                if (_this11.http.status === _this11.HttpCodes.success) {
                                    var responseText = _this11.http.responseText;
                                    if (responseText.trim().length > 0) {
                                        try {
                                            var responseCommands = _this11.codec.decode(responseText);
                                            onDone(responseCommands);
                                        } catch (err) {
                                            HttpTransmitter.LOGGER.error("Error occurred parsing responseText: ", err, responseText);
                                            _this11.handleError('application', "HttpTransmitter: Incorrect responseText: " + responseText);
                                            onDone([]);
                                        }
                                    } else {
                                        _this11.handleError('application', "HttpTransmitter: empty responseText");
                                        onDone([]);
                                    }
                                } else {
                                    _this11.handleError('application', "HttpTransmitter: HTTP Status != 200");
                                    onDone([]);
                                }
                            }
                        };
                        this.http.open('POST', this.url, true);
                        this.setHeaders(this.http);
                        if ("overrideMimeType" in this.http) {
                            this.http.overrideMimeType("application/json; charset=" + this.charset); // todo make injectable
                        }
                        var encodedCommands = this.codec.encode([commands]);
                        HttpTransmitter.LOGGER.trace('transmitting', commands, encodedCommands);
                        this.http.send(encodedCommands);
                    }
                }, {
                    key: 'setHeaders',
                    value: function setHeaders(httpReq) {
                        if (this.headersInfo) {
                            for (var i in this.headersInfo) {
                                if (this.headersInfo.hasOwnProperty(i)) {
                                    httpReq.setRequestHeader(i, this.headersInfo[i]);
                                }
                            }
                        }
                    }
                }, {
                    key: 'handleError',
                    value: function handleError(kind, message) {
                        var errorEvent = { kind: kind, url: this.url, httpStatus: this.http.status, message: message };
                        if (this.errorHandler) {
                            this.errorHandler(errorEvent);
                        } else {
                            HttpTransmitter.LOGGER.error("Error occurred: ", errorEvent);
                        }
                    }
                }, {
                    key: 'signal',
                    value: function signal(command) {
                        this.sig.open('POST', this.url, true);
                        this.setHeaders(this.sig);
                        var encodedCommand = this.codec.encode([command]);
                        HttpTransmitter.LOGGER.trace('signal', command, encodedCommand);
                        this.sig.send(encodedCommand);
                    }
                }, {
                    key: 'invalidate',
                    value: function invalidate() {
                        this.http.open('POST', this.url + 'invalidate?', false);
                        this.http.send();
                    }
                }]);

                return HttpTransmitter;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = HttpTransmitter;

            HttpTransmitter.LOGGER = __WEBPACK_IMPORTED_MODULE_1__logging__["b" /* LoggerFactory */].getLogger('HttpTransmitter');

            /***/
        },
        /* 119 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            var NoTransmitter = function () {
                function NoTransmitter() {
                    _classCallCheck(this, NoTransmitter);
                }

                _createClass(NoTransmitter, [{
                    key: 'transmit',
                    value: function transmit(commands, onDone) {
                        // do nothing special
                        onDone([]);
                    }
                }, {
                    key: 'signal',
                    value: function signal() {
                        // do nothing
                    }
                }, {
                    key: 'reset',
                    value: function reset() {
                        // do nothing
                    }
                }]);

                return NoTransmitter;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = NoTransmitter;

            /***/
        },
        /* 120 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var LIBRARY = __webpack_require__(58);
            var global = __webpack_require__(3);
            var ctx = __webpack_require__(8);
            var classof = __webpack_require__(39);
            var $export = __webpack_require__(5);
            var isObject = __webpack_require__(6);
            var aFunction = __webpack_require__(13);
            var anInstance = __webpack_require__(38);
            var forOf = __webpack_require__(17);
            var speciesConstructor = __webpack_require__(74);
            var task = __webpack_require__(75).set;
            var microtask = __webpack_require__(122)();
            var newPromiseCapabilityModule = __webpack_require__(42);
            var perform = __webpack_require__(76);
            var promiseResolve = __webpack_require__(77);
            var PROMISE = 'Promise';
            var TypeError = global.TypeError;
            var process = global.process;
            var $Promise = global[PROMISE];
            var isNode = classof(process) == 'process';
            var empty = function empty() {/* empty */};
            var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
            var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

            var USE_NATIVE = !!function () {
                try {
                    // correct subclassing with @@species support
                    var promise = $Promise.resolve(1);
                    var FakePromise = (promise.constructor = {})[__webpack_require__(4)('species')] = function (exec) {
                        exec(empty, empty);
                    };
                    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
                    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
                } catch (e) {/* empty */}
            }();

            // helpers
            var isThenable = function isThenable(it) {
                var then;
                return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
            };
            var notify = function notify(promise, isReject) {
                if (promise._n) return;
                promise._n = true;
                var chain = promise._c;
                microtask(function () {
                    var value = promise._v;
                    var ok = promise._s == 1;
                    var i = 0;
                    var run = function run(reaction) {
                        var handler = ok ? reaction.ok : reaction.fail;
                        var resolve = reaction.resolve;
                        var reject = reaction.reject;
                        var domain = reaction.domain;
                        var result, then;
                        try {
                            if (handler) {
                                if (!ok) {
                                    if (promise._h == 2) onHandleUnhandled(promise);
                                    promise._h = 1;
                                }
                                if (handler === true) result = value;else {
                                    if (domain) domain.enter();
                                    result = handler(value);
                                    if (domain) domain.exit();
                                }
                                if (result === reaction.promise) {
                                    reject(TypeError('Promise-chain cycle'));
                                } else if (then = isThenable(result)) {
                                    then.call(result, resolve, reject);
                                } else resolve(result);
                            } else reject(value);
                        } catch (e) {
                            reject(e);
                        }
                    };
                    while (chain.length > i) {
                        run(chain[i++]);
                    } // variable length - can't use forEach
                    promise._c = [];
                    promise._n = false;
                    if (isReject && !promise._h) onUnhandled(promise);
                });
            };
            var onUnhandled = function onUnhandled(promise) {
                task.call(global, function () {
                    var value = promise._v;
                    var unhandled = isUnhandled(promise);
                    var result, handler, console;
                    if (unhandled) {
                        result = perform(function () {
                            if (isNode) {
                                process.emit('unhandledRejection', value, promise);
                            } else if (handler = global.onunhandledrejection) {
                                handler({ promise: promise, reason: value });
                            } else if ((console = global.console) && console.error) {
                                console.error('Unhandled promise rejection', value);
                            }
                        });
                        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
                        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
                    }promise._a = undefined;
                    if (unhandled && result.e) throw result.v;
                });
            };
            var isUnhandled = function isUnhandled(promise) {
                return promise._h !== 1 && (promise._a || promise._c).length === 0;
            };
            var onHandleUnhandled = function onHandleUnhandled(promise) {
                task.call(global, function () {
                    var handler;
                    if (isNode) {
                        process.emit('rejectionHandled', promise);
                    } else if (handler = global.onrejectionhandled) {
                        handler({ promise: promise, reason: promise._v });
                    }
                });
            };
            var $reject = function $reject(value) {
                var promise = this;
                if (promise._d) return;
                promise._d = true;
                promise = promise._w || promise; // unwrap
                promise._v = value;
                promise._s = 2;
                if (!promise._a) promise._a = promise._c.slice();
                notify(promise, true);
            };
            var $resolve = function $resolve(value) {
                var promise = this;
                var then;
                if (promise._d) return;
                promise._d = true;
                promise = promise._w || promise; // unwrap
                try {
                    if (promise === value) throw TypeError("Promise can't be resolved itself");
                    if (then = isThenable(value)) {
                        microtask(function () {
                            var wrapper = { _w: promise, _d: false }; // wrap
                            try {
                                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                            } catch (e) {
                                $reject.call(wrapper, e);
                            }
                        });
                    } else {
                        promise._v = value;
                        promise._s = 1;
                        notify(promise, false);
                    }
                } catch (e) {
                    $reject.call({ _w: promise, _d: false }, e); // wrap
                }
            };

            // constructor polyfill
            if (!USE_NATIVE) {
                // 25.4.3.1 Promise(executor)
                $Promise = function Promise(executor) {
                    anInstance(this, $Promise, PROMISE, '_h');
                    aFunction(executor);
                    Internal.call(this);
                    try {
                        executor(ctx($resolve, this, 1), ctx($reject, this, 1));
                    } catch (err) {
                        $reject.call(this, err);
                    }
                };
                // eslint-disable-next-line no-unused-vars
                Internal = function Promise(executor) {
                    this._c = []; // <- awaiting reactions
                    this._a = undefined; // <- checked in isUnhandled reactions
                    this._s = 0; // <- state
                    this._d = false; // <- done
                    this._v = undefined; // <- value
                    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
                    this._n = false; // <- notify
                };
                Internal.prototype = __webpack_require__(37)($Promise.prototype, {
                    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
                    then: function then(onFulfilled, onRejected) {
                        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                        reaction.fail = typeof onRejected == 'function' && onRejected;
                        reaction.domain = isNode ? process.domain : undefined;
                        this._c.push(reaction);
                        if (this._a) this._a.push(reaction);
                        if (this._s) notify(this, false);
                        return reaction.promise;
                    },
                    // 25.4.5.1 Promise.prototype.catch(onRejected)
                    'catch': function _catch(onRejected) {
                        return this.then(undefined, onRejected);
                    }
                });
                OwnPromiseCapability = function OwnPromiseCapability() {
                    var promise = new Internal();
                    this.promise = promise;
                    this.resolve = ctx($resolve, promise, 1);
                    this.reject = ctx($reject, promise, 1);
                };
                newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
                    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
                };
            }

            $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
            __webpack_require__(20)($Promise, PROMISE);
            __webpack_require__(68)(PROMISE);
            Wrapper = __webpack_require__(7)[PROMISE];

            // statics
            $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
                // 25.4.4.5 Promise.reject(r)
                reject: function reject(r) {
                    var capability = newPromiseCapability(this);
                    var $$reject = capability.reject;
                    $$reject(r);
                    return capability.promise;
                }
            });
            $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
                // 25.4.4.6 Promise.resolve(x)
                resolve: function resolve(x) {
                    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
                }
            });
            $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(123)(function (iter) {
                $Promise.all(iter)['catch'](empty);
            })), PROMISE, {
                // 25.4.4.1 Promise.all(iterable)
                all: function all(iterable) {
                    var C = this;
                    var capability = newPromiseCapability(C);
                    var resolve = capability.resolve;
                    var reject = capability.reject;
                    var result = perform(function () {
                        var values = [];
                        var index = 0;
                        var remaining = 1;
                        forOf(iterable, false, function (promise) {
                            var $index = index++;
                            var alreadyCalled = false;
                            values.push(undefined);
                            remaining++;
                            C.resolve(promise).then(function (value) {
                                if (alreadyCalled) return;
                                alreadyCalled = true;
                                values[$index] = value;
                                --remaining || resolve(values);
                            }, reject);
                        });
                        --remaining || resolve(values);
                    });
                    if (result.e) reject(result.v);
                    return capability.promise;
                },
                // 25.4.4.4 Promise.race(iterable)
                race: function race(iterable) {
                    var C = this;
                    var capability = newPromiseCapability(C);
                    var reject = capability.reject;
                    var result = perform(function () {
                        forOf(iterable, false, function (promise) {
                            C.resolve(promise).then(capability.resolve, reject);
                        });
                    });
                    if (result.e) reject(result.v);
                    return capability.promise;
                }
            });

            /***/
        },
        /* 121 */
        /***/function (module, exports) {

            // fast apply, http://jsperf.lnkit.com/fast-apply/5
            module.exports = function (fn, args, that) {
                var un = that === undefined;
                switch (args.length) {
                    case 0:
                        return un ? fn() : fn.call(that);
                    case 1:
                        return un ? fn(args[0]) : fn.call(that, args[0]);
                    case 2:
                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                    case 3:
                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                    case 4:
                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                }return fn.apply(that, args);
            };

            /***/
        },
        /* 122 */
        /***/function (module, exports, __webpack_require__) {

            var global = __webpack_require__(3);
            var macrotask = __webpack_require__(75).set;
            var Observer = global.MutationObserver || global.WebKitMutationObserver;
            var process = global.process;
            var Promise = global.Promise;
            var isNode = __webpack_require__(16)(process) == 'process';

            module.exports = function () {
                var head, last, notify;

                var flush = function flush() {
                    var parent, fn;
                    if (isNode && (parent = process.domain)) parent.exit();
                    while (head) {
                        fn = head.fn;
                        head = head.next;
                        try {
                            fn();
                        } catch (e) {
                            if (head) notify();else last = undefined;
                            throw e;
                        }
                    }last = undefined;
                    if (parent) parent.enter();
                };

                // Node.js
                if (isNode) {
                    notify = function notify() {
                        process.nextTick(flush);
                    };
                    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
                } else if (Observer && !(global.navigator && global.navigator.standalone)) {
                    var toggle = true;
                    var node = document.createTextNode('');
                    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
                    notify = function notify() {
                        node.data = toggle = !toggle;
                    };
                    // environments with maybe non-completely correct, but existent Promise
                } else if (Promise && Promise.resolve) {
                    var promise = Promise.resolve();
                    notify = function notify() {
                        promise.then(flush);
                    };
                    // for other environments - macrotask based on:
                    // - setImmediate
                    // - MessageChannel
                    // - window.postMessag
                    // - onreadystatechange
                    // - setTimeout
                } else {
                    notify = function notify() {
                        // strange IE + webpack dev server bug - use .call(global)
                        macrotask.call(global, flush);
                    };
                }

                return function (fn) {
                    var task = { fn: fn, next: undefined };
                    if (last) last.next = task;
                    if (!head) {
                        head = task;
                        notify();
                    }last = task;
                };
            };

            /***/
        },
        /* 123 */
        /***/function (module, exports, __webpack_require__) {

            var ITERATOR = __webpack_require__(4)('iterator');
            var SAFE_CLOSING = false;

            try {
                var riter = [7][ITERATOR]();
                riter['return'] = function () {
                    SAFE_CLOSING = true;
                };
                // eslint-disable-next-line no-throw-literal
                Array.from(riter, function () {
                    throw 2;
                });
            } catch (e) {/* empty */}

            module.exports = function (exec, skipClosing) {
                if (!skipClosing && !SAFE_CLOSING) return false;
                var safe = false;
                try {
                    var arr = [7];
                    var iter = arr[ITERATOR]();
                    iter.next = function () {
                        return { done: safe = true };
                    };
                    arr[ITERATOR] = function () {
                        return iter;
                    };
                    exec(arr);
                } catch (e) {/* empty */}
                return safe;
            };

            /***/
        },
        /* 124 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";
            // https://github.com/tc39/proposal-promise-finally

            var $export = __webpack_require__(5);
            var core = __webpack_require__(7);
            var global = __webpack_require__(3);
            var speciesConstructor = __webpack_require__(74);
            var promiseResolve = __webpack_require__(77);

            $export($export.P + $export.R, 'Promise', { 'finally': function _finally(onFinally) {
                    var C = speciesConstructor(this, core.Promise || global.Promise);
                    var isFunction = typeof onFinally == 'function';
                    return this.then(isFunction ? function (x) {
                        return promiseResolve(C, onFinally()).then(function () {
                            return x;
                        });
                    } : onFinally, isFunction ? function (e) {
                        return promiseResolve(C, onFinally()).then(function () {
                            throw e;
                        });
                    } : onFinally);
                } });

            /***/
        },
        /* 125 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            // https://github.com/tc39/proposal-promise-try

            var $export = __webpack_require__(5);
            var newPromiseCapability = __webpack_require__(42);
            var perform = __webpack_require__(76);

            $export($export.S, 'Promise', { 'try': function _try(callbackfn) {
                    var promiseCapability = newPromiseCapability.f(this);
                    var result = perform(callbackfn);
                    (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
                    return promiseCapability.promise;
                } });

            /***/
        },
        /* 126 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map__ = __webpack_require__(25);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__logging__ = __webpack_require__(2);

            var BeanManager = function () {
                function BeanManager(classRepository) {
                    _classCallCheck(this, BeanManager);

                    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager(classRepository)');
                    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(classRepository, 'classRepository');

                    this.classRepository = classRepository;
                    this.addedHandlers = new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default.a();
                    this.removedHandlers = new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default.a();
                    this.updatedHandlers = new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default.a();
                    this.arrayUpdatedHandlers = new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default.a();
                    this.allAddedHandlers = [];
                    this.allRemovedHandlers = [];
                    this.allUpdatedHandlers = [];
                    this.allArrayUpdatedHandlers = [];

                    var self = this;
                    this.classRepository.onBeanAdded(function (type, bean) {
                        var handlerList = self.addedHandlers.get(type);
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean);
                                } catch (e) {
                                    BeanManager.LOGGER.error('An exception occurred while calling an onBeanAdded-handler for type', type, e);
                                }
                            });
                        }
                        self.allAddedHandlers.forEach(function (handler) {
                            try {
                                handler(bean);
                            } catch (e) {
                                BeanManager.LOGGER.error('An exception occurred while calling a general onBeanAdded-handler', e);
                            }
                        });
                    });
                    this.classRepository.onBeanRemoved(function (type, bean) {
                        var handlerList = self.removedHandlers.get(type);
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean);
                                } catch (e) {
                                    BeanManager.LOGGER.error('An exception occurred while calling an onBeanRemoved-handler for type', type, e);
                                }
                            });
                        }
                        self.allRemovedHandlers.forEach(function (handler) {
                            try {
                                handler(bean);
                            } catch (e) {
                                BeanManager.LOGGER.error('An exception occurred while calling a general onBeanRemoved-handler', e);
                            }
                        });
                    });
                    this.classRepository.onBeanUpdate(function (type, bean, propertyName, newValue, oldValue) {
                        var handlerList = self.updatedHandlers.get(type);
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean, propertyName, newValue, oldValue);
                                } catch (e) {
                                    BeanManager.LOGGER.error('An exception occurred while calling an onBeanUpdate-handler for type', type, e);
                                }
                            });
                        }
                        self.allUpdatedHandlers.forEach(function (handler) {
                            try {
                                handler(bean, propertyName, newValue, oldValue);
                            } catch (e) {
                                BeanManager.LOGGER.error('An exception occurred while calling a general onBeanUpdate-handler', e);
                            }
                        });
                    });
                    this.classRepository.onArrayUpdate(function (type, bean, propertyName, index, count, newElements) {
                        var handlerList = self.arrayUpdatedHandlers.get(type);
                        if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean, propertyName, index, count, newElements);
                                } catch (e) {
                                    BeanManager.LOGGER.error('An exception occurred while calling an onArrayUpdate-handler for type', type, e);
                                }
                            });
                        }
                        self.allArrayUpdatedHandlers.forEach(function (handler) {
                            try {
                                handler(bean, propertyName, index, count, newElements);
                            } catch (e) {
                                BeanManager.LOGGER.error('An exception occurred while calling a general onArrayUpdate-handler', e);
                            }
                        });
                    });
                }

                _createClass(BeanManager, [{
                    key: 'notifyBeanChange',
                    value: function notifyBeanChange(bean, propertyName, newValue) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.notifyBeanChange(bean, propertyName, newValue)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(bean, 'bean');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(propertyName, 'propertyName');

                        return this.classRepository.notifyBeanChange(bean, propertyName, newValue);
                    }
                }, {
                    key: 'notifyArrayChange',
                    value: function notifyArrayChange(bean, propertyName, index, count, removedElements) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.notifyArrayChange(bean, propertyName, index, count, removedElements)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(bean, 'bean');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(propertyName, 'propertyName');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(index, 'index');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(count, 'count');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(removedElements, 'removedElements');

                        this.classRepository.notifyArrayChange(bean, propertyName, index, count, removedElements);
                    }
                }, {
                    key: 'isManaged',
                    value: function isManaged(bean) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.isManaged(bean)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(bean, 'bean');

                        // TODO: Implement dolphin.isManaged() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'create',
                    value: function create(type) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.create(type)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(type, 'type');

                        // TODO: Implement dolphin.create() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'add',
                    value: function add(type, bean) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.add(type, bean)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(type, 'type');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(bean, 'bean');

                        // TODO: Implement dolphin.add() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'addAll',
                    value: function addAll(type, collection) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.addAll(type, collection)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(type, 'type');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(collection, 'collection');

                        // TODO: Implement dolphin.addAll() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'remove',
                    value: function remove(bean) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.remove(bean)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(bean, 'bean');

                        // TODO: Implement dolphin.remove() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'removeAll',
                    value: function removeAll(collection) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.removeAll(collection)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(collection, 'collection');

                        // TODO: Implement dolphin.removeAll() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'removeIf',
                    value: function removeIf(predicate) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.removeIf(predicate)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(predicate, 'predicate');

                        // TODO: Implement dolphin.removeIf() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'onAdded',
                    value: function onAdded(type, eventHandler) {
                        var self = this;
                        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(eventHandler)) {
                            eventHandler = type;
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.onAdded(eventHandler)');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(eventHandler, 'eventHandler');

                            self.allAddedHandlers = self.allAddedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allAddedHandlers = self.allAddedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.onAdded(type, eventHandler)');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(type, 'type');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(eventHandler, 'eventHandler');

                            var handlerList = self.addedHandlers.get(type);
                            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                                handlerList = [];
                            }
                            self.addedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.addedHandlers.get(type);
                                    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                                        self.addedHandlers.set(type, handlerList.filter(function (value) {
                                            return value !== eventHandler;
                                        }));
                                    }
                                }
                            };
                        }
                    }
                }, {
                    key: 'onRemoved',
                    value: function onRemoved(type, eventHandler) {
                        var self = this;
                        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(eventHandler)) {
                            eventHandler = type;
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.onRemoved(eventHandler)');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(eventHandler, 'eventHandler');

                            self.allRemovedHandlers = self.allRemovedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allRemovedHandlers = self.allRemovedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.onRemoved(type, eventHandler)');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(type, 'type');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(eventHandler, 'eventHandler');

                            var handlerList = self.removedHandlers.get(type);
                            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                                handlerList = [];
                            }
                            self.removedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.removedHandlers.get(type);
                                    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                                        self.removedHandlers.set(type, handlerList.filter(function (value) {
                                            return value !== eventHandler;
                                        }));
                                    }
                                }
                            };
                        }
                    }
                }, {
                    key: 'onBeanUpdate',
                    value: function onBeanUpdate(type, eventHandler) {
                        var self = this;
                        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(eventHandler)) {
                            eventHandler = type;
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.onBeanUpdate(eventHandler)');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(eventHandler, 'eventHandler');

                            self.allUpdatedHandlers = self.allUpdatedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allUpdatedHandlers = self.allUpdatedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.onBeanUpdate(type, eventHandler)');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(type, 'type');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(eventHandler, 'eventHandler');

                            var handlerList = self.updatedHandlers.get(type);
                            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                                handlerList = [];
                            }
                            self.updatedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.updatedHandlers.get(type);
                                    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                                        self.updatedHandlers.set(type, handlerList.filter(function (value) {
                                            return value !== eventHandler;
                                        }));
                                    }
                                }
                            };
                        }
                    }
                }, {
                    key: 'onArrayUpdate',
                    value: function onArrayUpdate(type, eventHandler) {
                        var self = this;
                        if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(eventHandler)) {
                            eventHandler = type;
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.onArrayUpdate(eventHandler)');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(eventHandler, 'eventHandler');

                            self.allArrayUpdatedHandlers = self.allArrayUpdatedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allArrayUpdatedHandlers = self.allArrayUpdatedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('BeanManager.onArrayUpdate(type, eventHandler)');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(type, 'type');
                            Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(eventHandler, 'eventHandler');

                            var handlerList = self.arrayUpdatedHandlers.get(type);
                            if (!Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                                handlerList = [];
                            }
                            self.arrayUpdatedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.arrayUpdatedHandlers.get(type);
                                    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(handlerList)) {
                                        self.arrayUpdatedHandlers.set(type, handlerList.filter(function (value) {
                                            return value !== eventHandler;
                                        }));
                                    }
                                }
                            };
                        }
                    }
                }]);

                return BeanManager;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = BeanManager;

            BeanManager.LOGGER = __WEBPACK_IMPORTED_MODULE_2__logging__["b" /* LoggerFactory */].getLogger('BeanManager');

            /***/
        },
        /* 127 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map__ = __webpack_require__(25);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__constants__ = __webpack_require__(18);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(0);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__logging__ = __webpack_require__(2);

            var blocked = null;

            var ClassRepository = function () {
                function ClassRepository(dolphin) {
                    _classCallCheck(this, ClassRepository);

                    Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository(dolphin)');
                    Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(dolphin, 'dolphin');

                    this.dolphin = dolphin;
                    this.classes = new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default.a();
                    this.beanFromDolphin = new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default.a();
                    this.beanToDolphin = new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default.a();
                    this.classInfos = new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_map___default.a();
                    this.beanAddedHandlers = [];
                    this.beanRemovedHandlers = [];
                    this.propertyUpdateHandlers = [];
                    this.arrayUpdateHandlers = [];
                }

                _createClass(ClassRepository, [{
                    key: 'fixType',
                    value: function fixType(type, value) {
                        switch (type) {
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["c" /* BYTE */]:
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["p" /* SHORT */]:
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["j" /* INT */]:
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["n" /* LONG */]:
                                return parseInt(value);
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["i" /* FLOAT */]:
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["g" /* DOUBLE */]:
                                return parseFloat(value);
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["b" /* BOOLEAN */]:
                                return 'true' === String(value).toLowerCase();
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["q" /* STRING */]:
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["h" /* ENUM */]:
                                return String(value);
                            default:
                                return value;
                        }
                    }
                }, {
                    key: 'fromDolphin',
                    value: function fromDolphin(classRepository, type, value) {
                        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(value)) {
                            return null;
                        }
                        switch (type) {
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* DOLPHIN_BEAN */]:
                                return classRepository.beanFromDolphin.get(String(value));
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* DATE */]:
                                return new Date(String(value));
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* CALENDAR */]:
                                return new Date(String(value));
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["l" /* LOCAL_DATE_FIELD_TYPE */]:
                                return new Date(String(value));
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["m" /* LOCAL_DATE_TIME_FIELD_TYPE */]:
                                return new Date(String(value));
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["r" /* ZONED_DATE_TIME_FIELD_TYPE */]:
                                return new Date(String(value));
                            default:
                                return this.fixType(type, value);
                        }
                    }
                }, {
                    key: 'toDolphin',
                    value: function toDolphin(classRepository, type, value) {
                        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(value)) {
                            return null;
                        }
                        switch (type) {
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* DOLPHIN_BEAN */]:
                                return classRepository.beanToDolphin.get(value);
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["e" /* DATE */]:
                                return value instanceof Date ? value.toISOString() : value;
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["d" /* CALENDAR */]:
                                return value instanceof Date ? value.toISOString() : value;
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["l" /* LOCAL_DATE_FIELD_TYPE */]:
                                return value instanceof Date ? value.toISOString() : value;
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["m" /* LOCAL_DATE_TIME_FIELD_TYPE */]:
                                return value instanceof Date ? value.toISOString() : value;
                            case __WEBPACK_IMPORTED_MODULE_1__constants__["r" /* ZONED_DATE_TIME_FIELD_TYPE */]:
                                return value instanceof Date ? value.toISOString() : value;
                            default:
                                return this.fixType(type, value);
                        }
                    }
                }, {
                    key: 'sendListSplice',
                    value: function sendListSplice(classRepository, modelId, propertyName, from, to, newElements) {
                        var dolphin = classRepository.dolphin;
                        var model = dolphin.findPresentationModelById(modelId);
                        var self = this;
                        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(model)) {
                            var classInfo = classRepository.classes.get(model.presentationModelType);
                            var type = classInfo[propertyName];
                            if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(type)) {

                                var attributes = [dolphin.attribute('@@@ SOURCE_SYSTEM @@@', null, 'client'), dolphin.attribute('source', null, modelId), dolphin.attribute('attribute', null, propertyName), dolphin.attribute('from', null, from), dolphin.attribute('to', null, to), dolphin.attribute('count', null, newElements.length)];
                                newElements.forEach(function (element, index) {
                                    attributes.push(dolphin.attribute(index.toString(), null, self.toDolphin(classRepository, type, element)));
                                });
                                dolphin.presentationModel.apply(dolphin, [null, '@DP:LS@'].concat(attributes));
                            }
                        }
                    }
                }, {
                    key: 'validateList',
                    value: function validateList(classRepository, type, bean, propertyName) {
                        var list = bean[propertyName];
                        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(list)) {
                            classRepository.propertyUpdateHandlers.forEach(function (handler) {
                                try {
                                    handler(type, bean, propertyName, [], undefined);
                                } catch (e) {
                                    ClassRepository.LOGGER.error('An exception occurred while calling an onBeanUpdate-handler', e);
                                }
                            });
                        }
                    }
                }, {
                    key: 'block',
                    value: function block(bean, propertyName) {
                        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(blocked)) {
                            throw new Error('Trying to create a block while another block exists');
                        }
                        blocked = {
                            bean: bean,
                            propertyName: propertyName
                        };
                    }
                }, {
                    key: 'isBlocked',
                    value: function isBlocked(bean, propertyName) {
                        return Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(blocked) && blocked.bean === bean && blocked.propertyName === propertyName;
                    }
                }, {
                    key: 'unblock',
                    value: function unblock() {
                        blocked = null;
                    }
                }, {
                    key: 'notifyBeanChange',
                    value: function notifyBeanChange(bean, propertyName, newValue) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository.notifyBeanChange(bean, propertyName, newValue)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(bean, 'bean');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(propertyName, 'propertyName');

                        var modelId = this.beanToDolphin.get(bean);
                        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(modelId)) {
                            var model = this.dolphin.findPresentationModelById(modelId);
                            if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(model)) {
                                var classInfo = this.classes.get(model.presentationModelType);
                                var type = classInfo[propertyName];
                                var attribute = model.findAttributeByPropertyName(propertyName);
                                if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(type) && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(attribute)) {
                                    var oldValue = attribute.getValue();
                                    attribute.setValue(this.toDolphin(this, type, newValue));
                                    return this.fromDolphin(this, type, oldValue);
                                }
                            }
                        }
                    }
                }, {
                    key: 'notifyArrayChange',
                    value: function notifyArrayChange(bean, propertyName, index, count, removedElements) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository.notifyArrayChange(bean, propertyName, index, count, removedElements)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(bean, 'bean');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(propertyName, 'propertyName');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(index, 'index');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(count, 'count');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(removedElements, 'removedElements');

                        if (this.isBlocked(bean, propertyName)) {
                            return;
                        }
                        var modelId = this.beanToDolphin.get(bean);
                        var array = bean[propertyName];
                        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(modelId) && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(array)) {
                            var removedElementsCount = Array.isArray(removedElements) ? removedElements.length : 0;
                            this.sendListSplice(this, modelId, propertyName, index, index + removedElementsCount, array.slice(index, index + count));
                        }
                    }
                }, {
                    key: 'onBeanAdded',
                    value: function onBeanAdded(handler) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository.onBeanAdded(handler)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(handler, 'handler');
                        this.beanAddedHandlers.push(handler);
                    }
                }, {
                    key: 'onBeanRemoved',
                    value: function onBeanRemoved(handler) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository.onBeanRemoved(handler)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(handler, 'handler');
                        this.beanRemovedHandlers.push(handler);
                    }
                }, {
                    key: 'onBeanUpdate',
                    value: function onBeanUpdate(handler) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository.onBeanUpdate(handler)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(handler, 'handler');
                        this.propertyUpdateHandlers.push(handler);
                    }
                }, {
                    key: 'onArrayUpdate',
                    value: function onArrayUpdate(handler) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository.onArrayUpdate(handler)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(handler, 'handler');
                        this.arrayUpdateHandlers.push(handler);
                    }
                }, {
                    key: 'registerClass',
                    value: function registerClass(model) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository.registerClass(model)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(model, 'model');

                        if (this.classes.has(model.id)) {
                            return;
                        }

                        var classInfo = {};
                        model.attributes.filter(function (attribute) {
                            return attribute.propertyName.search(/^@/) < 0;
                        }).forEach(function (attribute) {
                            classInfo[attribute.propertyName] = attribute.value;
                        });
                        this.classes.set(model.id, classInfo);
                    }
                }, {
                    key: 'unregisterClass',
                    value: function unregisterClass(model) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository.unregisterClass(model)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(model, 'model');
                        this.classes['delete'](model.id);
                    }
                }, {
                    key: 'load',
                    value: function load(model) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository.load(model)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(model, 'model');

                        var self = this;
                        var classInfo = this.classes.get(model.presentationModelType);
                        var bean = {};
                        model.attributes.filter(function (attribute) {
                            return attribute.propertyName.search(/^@/) < 0;
                        }).forEach(function (attribute) {
                            bean[attribute.propertyName] = null;
                            attribute.onValueChange(function (event) {
                                if (event.oldValue !== event.newValue) {
                                    var oldValue = self.fromDolphin(self, classInfo[attribute.propertyName], event.oldValue);
                                    var newValue = self.fromDolphin(self, classInfo[attribute.propertyName], event.newValue);
                                    self.propertyUpdateHandlers.forEach(function (handler) {
                                        try {
                                            handler(model.presentationModelType, bean, attribute.propertyName, newValue, oldValue);
                                        } catch (e) {
                                            ClassRepository.LOGGER.error('An exception occurred while calling an onBeanUpdate-handler', e);
                                        }
                                    });
                                }
                            });
                        });
                        this.beanFromDolphin.set(model.id, bean);
                        this.beanToDolphin.set(bean, model.id);
                        this.classInfos.set(model.id, classInfo);
                        this.beanAddedHandlers.forEach(function (handler) {
                            try {
                                handler(model.presentationModelType, bean);
                            } catch (e) {
                                ClassRepository.LOGGER.error('An exception occurred while calling an onBeanAdded-handler', e);
                            }
                        });
                        return bean;
                    }
                }, {
                    key: 'unload',
                    value: function unload(model) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository.unload(model)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(model, 'model');

                        var bean = this.beanFromDolphin.get(model.id);
                        this.beanFromDolphin['delete'](model.id);
                        this.beanToDolphin['delete'](bean);
                        this.classInfos['delete'](model.id);
                        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(bean)) {
                            this.beanRemovedHandlers.forEach(function (handler) {
                                try {
                                    handler(model.presentationModelType, bean);
                                } catch (e) {
                                    ClassRepository.LOGGER.error('An exception occurred while calling an onBeanRemoved-handler', e);
                                }
                            });
                        }
                        return bean;
                    }
                }, {
                    key: 'spliceListEntry',
                    value: function spliceListEntry(model) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ClassRepository.spliceListEntry(model)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(model, 'model');

                        var source = model.findAttributeByPropertyName('source');
                        var attribute = model.findAttributeByPropertyName('attribute');
                        var from = model.findAttributeByPropertyName('from');
                        var to = model.findAttributeByPropertyName('to');
                        var count = model.findAttributeByPropertyName('count');

                        if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(source) && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(attribute) && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(from) && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(to) && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(count)) {
                            var classInfo = this.classInfos.get(source.value);
                            var bean = this.beanFromDolphin.get(source.value);
                            if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(bean) && Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(classInfo)) {
                                var type = model.presentationModelType;
                                //var entry = fromDolphin(this, classInfo[attribute.value], element.value);
                                this.validateList(this, type, bean, attribute.value);
                                var newElements = [],
                                    element = null;
                                for (var i = 0; i < count.value; i++) {
                                    element = model.findAttributeByPropertyName(i.toString());
                                    if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(element)) {
                                        throw new Error("Invalid list modification update received");
                                    }
                                    newElements.push(this.fromDolphin(this, classInfo[attribute.value], element.value));
                                }
                                try {
                                    this.block(bean, attribute.value);
                                    this.arrayUpdateHandlers.forEach(function (handler) {
                                        try {
                                            handler(type, bean, attribute.value, from.value, to.value - from.value, newElements);
                                        } catch (e) {
                                            ClassRepository.LOGGER.error('An exception occurred while calling an onArrayUpdate-handler', e);
                                        }
                                    });
                                } finally {
                                    this.unblock();
                                }
                            } else {
                                throw new Error("Invalid list modification update received. Source bean unknown.");
                            }
                        } else {
                            throw new Error("Invalid list modification update received");
                        }
                    }
                }, {
                    key: 'mapParamToDolphin',
                    value: function mapParamToDolphin(param) {
                        if (!Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(param)) {
                            return param;
                        }
                        var type = typeof param === 'undefined' ? 'undefined' : _typeof(param);
                        if (type === 'object') {
                            if (param instanceof Date) {
                                return param.toISOString();
                            } else {
                                var value = this.beanToDolphin.get(param);
                                if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(value)) {
                                    return value;
                                }
                                throw new TypeError("Only managed Dolphin Beans can be used");
                            }
                        }
                        if (type === 'string' || type === 'number' || type === 'boolean') {
                            return param;
                        }
                        throw new TypeError("Only managed Dolphin Beans and primitive types can be used");
                    }
                }, {
                    key: 'mapDolphinToBean',
                    value: function mapDolphinToBean(value) {
                        return this.fromDolphin(this, __WEBPACK_IMPORTED_MODULE_1__constants__["f" /* DOLPHIN_BEAN */], value);
                    }
                }]);

                return ClassRepository;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = ClassRepository;

            ClassRepository.LOGGER = __WEBPACK_IMPORTED_MODULE_3__logging__["b" /* LoggerFactory */].getLogger('ClassRepository');

            /***/
        },
        /* 128 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise__ = __webpack_require__(41);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_set__ = __webpack_require__(78);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_set__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(0);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__controllerproxy_js__ = __webpack_require__(133);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__commands_commandFactory_js__ = __webpack_require__(21);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__connector_js__ = __webpack_require__(22);

            var CONTROLLER_ID = 'controllerId';
            var MODEL = 'model';
            var ERROR_CODE = 'errorCode';

            var ControllerManager = function () {
                function ControllerManager(dolphin, classRepository, connector) {
                    _classCallCheck(this, ControllerManager);

                    Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ControllerManager(dolphin, classRepository, connector)');
                    Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(dolphin, 'dolphin');
                    Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(classRepository, 'classRepository');
                    Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(connector, 'connector');

                    this.dolphin = dolphin;
                    this.classRepository = classRepository;
                    this.connector = connector;
                    this.controllers = new __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_set___default.a();
                }

                _createClass(ControllerManager, [{
                    key: 'createController',
                    value: function createController(name) {
                        return this._createController(name, null);
                    }
                }, {
                    key: '_createController',
                    value: function _createController(name, parentControllerId) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ControllerManager.createController(name)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(name, 'name');

                        var self = this;
                        var controllerId = void 0,
                            modelId = void 0,
                            model = void 0,
                            controller = void 0;
                        return new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise___default.a(function (resolve) {
                            self.connector.getHighlanderPM().then(function (highlanderPM) {
                                self.connector.invoke(__WEBPACK_IMPORTED_MODULE_4__commands_commandFactory_js__["a" /* default */].createCreateControllerCommand(name, parentControllerId)).then(function () {
                                    controllerId = highlanderPM.findAttributeByPropertyName(CONTROLLER_ID).getValue();
                                    modelId = highlanderPM.findAttributeByPropertyName(MODEL).getValue();
                                    model = self.classRepository.mapDolphinToBean(modelId);
                                    controller = new __WEBPACK_IMPORTED_MODULE_3__controllerproxy_js__["a" /* default */](controllerId, model, self);
                                    self.controllers.add(controller);
                                    resolve(controller);
                                });
                            });
                        });
                    }
                }, {
                    key: 'invokeAction',
                    value: function invokeAction(controllerId, actionName, params) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ControllerManager.invokeAction(controllerId, actionName, params)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(controllerId, 'controllerId');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(actionName, 'actionName');

                        var self = this;
                        return new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise___default.a(function (resolve, reject) {

                            var attributes = [self.dolphin.attribute(__WEBPACK_IMPORTED_MODULE_5__connector_js__["b" /* SOURCE_SYSTEM */], null, __WEBPACK_IMPORTED_MODULE_5__connector_js__["c" /* SOURCE_SYSTEM_CLIENT */]), self.dolphin.attribute(ERROR_CODE)];

                            var pm = self.dolphin.presentationModel.apply(self.dolphin, [null, __WEBPACK_IMPORTED_MODULE_5__connector_js__["a" /* ACTION_CALL_BEAN */]].concat(attributes));

                            var actionParams = [];
                            if (Object(__WEBPACK_IMPORTED_MODULE_2__utils__["c" /* exists */])(params)) {
                                for (var param in params) {
                                    if (params.hasOwnProperty(param)) {
                                        var value = self.classRepository.mapParamToDolphin(params[param]);
                                        actionParams.push({ name: param, value: value });
                                    }
                                }
                            }

                            self.connector.invoke(__WEBPACK_IMPORTED_MODULE_4__commands_commandFactory_js__["a" /* default */].createCallActionCommand(controllerId, actionName, actionParams)).then(function () {
                                var isError = pm.findAttributeByPropertyName(ERROR_CODE).getValue();
                                if (isError) {
                                    reject(new Error("Server side ControllerAction " + actionName + " caused an error. Please see server log for details."));
                                } else {
                                    resolve();
                                }
                                self.dolphin.deletePresentationModel(pm);
                            });
                        });
                    }
                }, {
                    key: 'destroyController',
                    value: function destroyController(controller) {
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* checkMethod */])('ControllerManager.destroyController(controller)');
                        Object(__WEBPACK_IMPORTED_MODULE_2__utils__["b" /* checkParam */])(controller, 'controller');

                        var self = this;
                        return new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise___default.a(function (resolve) {
                            self.connector.getHighlanderPM().then(function (highlanderPM) {
                                self.controllers.delete(controller);
                                highlanderPM.findAttributeByPropertyName(CONTROLLER_ID).setValue(controller.controllerId);
                                self.connector.invoke(__WEBPACK_IMPORTED_MODULE_4__commands_commandFactory_js__["a" /* default */].createDestroyControllerCommand(controller.getId())).then(resolve);
                            });
                        });
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var controllersCopy = this.controllers;
                        var promises = [];
                        this.controllers = new __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_set___default.a();
                        controllersCopy.forEach(function (controller) {
                            try {
                                promises.push(controller.destroy());
                            } catch (e) {
                                // ignore
                            }
                        });
                        return __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_promise___default.a.all(promises);
                    }
                }]);

                return ControllerManager;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = ControllerManager;

            /***/
        },
        /* 129 */
        /***/function (module, exports, __webpack_require__) {

            "use strict";

            var strong = __webpack_require__(67);
            var validate = __webpack_require__(40);
            var SET = 'Set';

            // 23.2 Set Objects
            module.exports = __webpack_require__(70)(SET, function (get) {
                return function Set() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            }, {
                // 23.2.3.1 Set.prototype.add(value)
                add: function add(value) {
                    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
                }
            }, strong);

            /***/
        },
        /* 130 */
        /***/function (module, exports, __webpack_require__) {

            // https://github.com/DavidBruant/Map-Set.prototype.toJSON
            var $export = __webpack_require__(5);

            $export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(71)('Set') });

            /***/
        },
        /* 131 */
        /***/function (module, exports, __webpack_require__) {

            // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
            __webpack_require__(72)('Set');

            /***/
        },
        /* 132 */
        /***/function (module, exports, __webpack_require__) {

            // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
            __webpack_require__(73)('Set');

            /***/
        },
        /* 133 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_set__ = __webpack_require__(78);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_set__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__logging__ = __webpack_require__(2);

            var ControllerProxy = function () {
                function ControllerProxy(controllerId, model, manager) {
                    _classCallCheck(this, ControllerProxy);

                    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('ControllerProxy(controllerId, model, manager)');
                    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(controllerId, 'controllerId');
                    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(model, 'model');
                    Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(manager, 'manager');

                    this.controllerId = controllerId;
                    this.model = model;
                    this.manager = manager;
                    this.destroyed = false;
                    this.onDestroyedHandlers = new __WEBPACK_IMPORTED_MODULE_0_core_js_library_fn_set___default.a();
                }

                _createClass(ControllerProxy, [{
                    key: 'getModel',
                    value: function getModel() {
                        return this.model;
                    }
                }, {
                    key: 'getId',
                    value: function getId() {
                        return this.controllerId;
                    }
                }, {
                    key: 'invoke',
                    value: function invoke(name, params) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('ControllerProxy.invoke(name, params)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(name, 'name');

                        if (this.destroyed) {
                            throw new Error('The controller was already destroyed');
                        }
                        return this.manager.invokeAction(this.controllerId, name, params);
                    }
                }, {
                    key: 'createController',
                    value: function createController(name) {
                        return this.manager._createController(name, this.getId());
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this12 = this;

                        if (this.destroyed) {
                            throw new Error('The controller was already destroyed');
                        }
                        this.destroyed = true;
                        this.onDestroyedHandlers.forEach(function (handler) {
                            try {
                                handler(_this12);
                            } catch (e) {
                                ControllerProxy.LOGGER.error('An exception occurred while calling an onDestroyed-handler', e);
                            }
                        }, this);
                        return this.manager.destroyController(this);
                    }
                }, {
                    key: 'onDestroyed',
                    value: function onDestroyed(handler) {
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["a" /* checkMethod */])('ControllerProxy.onDestroyed(handler)');
                        Object(__WEBPACK_IMPORTED_MODULE_1__utils__["b" /* checkParam */])(handler, 'handler');

                        var self = this;
                        this.onDestroyedHandlers.add(handler);
                        return {
                            unsubscribe: function unsubscribe() {
                                self.onDestroyedHandlers.delete(handler);
                            }
                        };
                    }
                }]);

                return ControllerProxy;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = ControllerProxy;

            ControllerProxy.LOGGER = __WEBPACK_IMPORTED_MODULE_2__logging__["b" /* LoggerFactory */].getLogger('ControllerProxy');

            /***/
        },
        /* 134 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0_emitter_component__ = __webpack_require__(79);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_emitter_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_emitter_component__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_promise__ = __webpack_require__(41);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_promise__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__commands_commandFactory__ = __webpack_require__(21);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(0);

            var ClientContext = function () {
                function ClientContext(dolphin, beanManager, controllerManager, connector) {
                    _classCallCheck(this, ClientContext);

                    Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* checkMethod */])('ClientContext(dolphin, beanManager, controllerManager, connector)');
                    Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* checkParam */])(dolphin, 'dolphin');
                    Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* checkParam */])(beanManager, 'beanManager');
                    Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* checkParam */])(controllerManager, 'controllerManager');
                    Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* checkParam */])(connector, 'connector');

                    this.dolphin = dolphin;
                    this.beanManager = beanManager;
                    this._controllerManager = controllerManager;
                    this._connector = connector;
                    this.connectionPromise = null;
                    this.isConnected = false;
                }

                _createClass(ClientContext, [{
                    key: 'connect',
                    value: function connect() {
                        var self = this;
                        this.connectionPromise = new __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_promise___default.a(function (resolve) {
                            self._connector.connect();
                            self._connector.invoke(__WEBPACK_IMPORTED_MODULE_2__commands_commandFactory__["a" /* default */].createCreateContextCommand()).then(function () {
                                self.isConnected = true;
                                resolve();
                            });
                        });
                        return this.connectionPromise;
                    }
                }, {
                    key: 'onConnect',
                    value: function onConnect() {
                        if (Object(__WEBPACK_IMPORTED_MODULE_3__utils__["c" /* exists */])(this.connectionPromise)) {
                            if (!this.isConnected) {
                                return this.connectionPromise;
                            } else {
                                return new __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_promise___default.a(function (resolve) {
                                    resolve();
                                });
                            }
                        } else {
                            return this.connect();
                        }
                    }
                }, {
                    key: 'createController',
                    value: function createController(name) {
                        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["a" /* checkMethod */])('ClientContext.createController(name)');
                        Object(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* checkParam */])(name, 'name');

                        return this._controllerManager.createController(name);
                    }
                }, {
                    key: 'disconnect',
                    value: function disconnect() {
                        var self = this;
                        this.dolphin.stopPushListening();
                        return new __WEBPACK_IMPORTED_MODULE_1_core_js_library_fn_promise___default.a(function (resolve) {
                            self._controllerManager.destroy().then(function () {
                                self._connector.invoke(__WEBPACK_IMPORTED_MODULE_2__commands_commandFactory__["a" /* default */].createDestroyContextCommand());
                                self.dolphin = null;
                                self.beanManager = null;
                                self._controllerManager = null;
                                self._connector = null;
                                resolve();
                            });
                        });
                    }
                }]);

                return ClientContext;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = ClientContext;

            __WEBPACK_IMPORTED_MODULE_0_emitter_component___default()(ClientContext.prototype);

            /***/
        },
        /* 135 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0_emitter_component__ = __webpack_require__(79);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_emitter_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_emitter_component__);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__utils__ = __webpack_require__(0);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__errors__ = __webpack_require__(136);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__commands_codec__ = __webpack_require__(23);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__remotingErrorHandler__ = __webpack_require__(137);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__logging__ = __webpack_require__(2);
            /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__commands_commandConstants__ = __webpack_require__(1);

            var FINISHED = 4;
            var SUCCESS = 200;
            var REQUEST_TIMEOUT = 408;

            var DOLPHIN_PLATFORM_PREFIX = 'dolphin_platform_intern_';
            var CLIENT_ID_HTTP_HEADER_NAME = DOLPHIN_PLATFORM_PREFIX + 'dolphinClientId';

            var PlatformHttpTransmitter = function () {
                function PlatformHttpTransmitter(url, config) {
                    _classCallCheck(this, PlatformHttpTransmitter);

                    this.url = url;
                    this.config = config;
                    this.headersInfo = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(config) ? config.headersInfo : null;
                    var connectionConfig = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(config) ? config.connection : null;
                    this.maxRetry = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(connectionConfig) && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(connectionConfig.maxRetry) ? connectionConfig.maxRetry : 3;
                    this.timeout = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(connectionConfig) && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(connectionConfig.timeout) ? connectionConfig.timeout : 5000;
                    this.failed_attempt = 0;
                }

                _createClass(PlatformHttpTransmitter, [{
                    key: '_handleError',
                    value: function _handleError(reject, error) {
                        var connectionConfig = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(this.config) ? this.config.connection : null;
                        var errorHandlers = Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(connectionConfig) && Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(connectionConfig.errorHandlers) ? connectionConfig.errorHandlers : [new __WEBPACK_IMPORTED_MODULE_4__remotingErrorHandler__["a" /* default */]()];
                        errorHandlers.forEach(function (handler) {
                            handler.onError(error);
                        });
                        reject(error);
                    }
                }, {
                    key: '_send',
                    value: function _send(commands) {
                        var _this13 = this;

                        return new Promise(function (resolve, reject) {
                            var http = new XMLHttpRequest();
                            http.withCredentials = true;
                            http.onerror = function (errorContent) {
                                PlatformHttpTransmitter.LOGGER.error('HTTP network error', errorContent);
                                _this13._handleError(reject, new __WEBPACK_IMPORTED_MODULE_2__errors__["c" /* HttpNetworkError */]('PlatformHttpTransmitter: Network error', errorContent));
                            };

                            http.onreadystatechange = function () {
                                if (http.readyState === FINISHED) {
                                    switch (http.status) {

                                        case SUCCESS:
                                            {
                                                _this13.failed_attempt = 0;
                                                var currentClientId = http.getResponseHeader(CLIENT_ID_HTTP_HEADER_NAME);
                                                if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(currentClientId)) {
                                                    if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(_this13.clientId) && _this13.clientId !== currentClientId) {
                                                        _this13._handleError(reject, new __WEBPACK_IMPORTED_MODULE_2__errors__["b" /* DolphinSessionError */]('PlatformHttpTransmitter: ClientId of the response did not match'));
                                                    }
                                                    _this13.clientId = currentClientId;
                                                } else {
                                                    _this13._handleError(reject, new __WEBPACK_IMPORTED_MODULE_2__errors__["b" /* DolphinSessionError */]('PlatformHttpTransmitter: Server did not send a clientId'));
                                                }

                                                if (PlatformHttpTransmitter.LOGGER.isLogLevelUseable(__WEBPACK_IMPORTED_MODULE_5__logging__["a" /* LogLevel */].DEBUG) && !PlatformHttpTransmitter.LOGGER.isLogLevelUseable(__WEBPACK_IMPORTED_MODULE_5__logging__["a" /* LogLevel */].TRACE)) {
                                                    try {
                                                        var json = JSON.parse(http.responseText);
                                                        if (json.length > 0) {
                                                            PlatformHttpTransmitter.LOGGER.debug('HTTP response with SUCCESS', currentClientId, json);
                                                        }
                                                    } catch (error) {
                                                        PlatformHttpTransmitter.LOGGER.error('Response could not be parsed to JSON for logging');
                                                    }
                                                }

                                                PlatformHttpTransmitter.LOGGER.trace('HTTP response with SUCCESS', currentClientId, http.responseText);
                                                resolve(http.responseText);
                                                break;
                                            }

                                        case REQUEST_TIMEOUT:
                                            PlatformHttpTransmitter.LOGGER.error('HTTP request timeout');
                                            _this13._handleError(reject, new __WEBPACK_IMPORTED_MODULE_2__errors__["b" /* DolphinSessionError */]('PlatformHttpTransmitter: Session Timeout'));
                                            break;

                                        default:
                                            if (_this13.failed_attempt <= _this13.maxRetry) {
                                                _this13.failed_attempt = _this13.failed_attempt + 1;
                                            }
                                            PlatformHttpTransmitter.LOGGER.error('HTTP unsupported status, with HTTP status', http.status);
                                            _this13._handleError(reject, new __WEBPACK_IMPORTED_MODULE_2__errors__["d" /* HttpResponseError */]('PlatformHttpTransmitter: HTTP Status != 200 (' + http.status + ')'));
                                            break;
                                    }
                                }
                            };

                            http.open('POST', _this13.url);
                            if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(_this13.clientId)) {
                                http.setRequestHeader(CLIENT_ID_HTTP_HEADER_NAME, _this13.clientId);
                            }

                            if (Object(__WEBPACK_IMPORTED_MODULE_1__utils__["c" /* exists */])(_this13.headersInfo)) {
                                for (var i in _this13.headersInfo) {
                                    if (_this13.headersInfo.hasOwnProperty(i)) {
                                        http.setRequestHeader(i, _this13.headersInfo[i]);
                                    }
                                }
                            }

                            var encodedCommands = __WEBPACK_IMPORTED_MODULE_3__commands_codec__["a" /* default */].encode(commands);

                            if (PlatformHttpTransmitter.LOGGER.isLogLevelUseable(__WEBPACK_IMPORTED_MODULE_5__logging__["a" /* LogLevel */].DEBUG) && !PlatformHttpTransmitter.LOGGER.isLogLevelUseable(__WEBPACK_IMPORTED_MODULE_5__logging__["a" /* LogLevel */].TRACE)) {
                                for (var _i = 0; _i < commands.length; _i++) {
                                    var command = commands[_i];
                                    if (command.id === __WEBPACK_IMPORTED_MODULE_6__commands_commandConstants__["v" /* VALUE_CHANGED_COMMAND_ID */]) {
                                        PlatformHttpTransmitter.LOGGER.debug('send', command, encodedCommands);
                                    }
                                }
                            }

                            PlatformHttpTransmitter.LOGGER.trace('send', commands, encodedCommands);
                            if (_this13.failed_attempt > _this13.maxRetry) {
                                setTimeout(function () {
                                    http.send(encodedCommands);
                                }, _this13.timeout);
                            } else {
                                http.send(encodedCommands);
                            }
                        });
                    }
                }, {
                    key: 'transmit',
                    value: function transmit(commands, onDone) {
                        var _this14 = this;

                        this._send(commands).then(function (responseText) {
                            if (responseText.trim().length > 0) {
                                try {
                                    var responseCommands = __WEBPACK_IMPORTED_MODULE_3__commands_codec__["a" /* default */].decode(responseText);
                                    onDone(responseCommands);
                                } catch (err) {
                                    _this14.emit('error', new __WEBPACK_IMPORTED_MODULE_2__errors__["a" /* DolphinRemotingError */]('PlatformHttpTransmitter: Parse error: (Incorrect response = ' + responseText + ')'));
                                    onDone([]);
                                }
                            } else {
                                _this14.emit('error', new __WEBPACK_IMPORTED_MODULE_2__errors__["a" /* DolphinRemotingError */]('PlatformHttpTransmitter: Empty response'));
                                onDone([]);
                            }
                        }).catch(function (error) {
                            _this14.emit('error', error);
                            onDone([]);
                        });
                    }
                }, {
                    key: 'signal',
                    value: function signal(command) {
                        var _this15 = this;

                        this._send([command]).catch(function (error) {
                            return _this15.emit('error', error);
                        });
                    }
                }]);

                return PlatformHttpTransmitter;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = PlatformHttpTransmitter;

            PlatformHttpTransmitter.LOGGER = __WEBPACK_IMPORTED_MODULE_5__logging__["b" /* LoggerFactory */].getLogger('PlatformHttpTransmitter');

            __WEBPACK_IMPORTED_MODULE_0_emitter_component___default()(PlatformHttpTransmitter.prototype);

            /***/
        },
        /* 136 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";

            var DolphinRemotingError = function (_Error2) {
                _inherits(DolphinRemotingError, _Error2);

                function DolphinRemotingError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Remoting Error';
                    var detail = arguments[1];

                    _classCallCheck(this, DolphinRemotingError);

                    var _this16 = _possibleConstructorReturn(this, (DolphinRemotingError.__proto__ || Object.getPrototypeOf(DolphinRemotingError)).call(this, message));

                    _this16.detail = detail || undefined;
                    return _this16;
                }

                return DolphinRemotingError;
            }(Error);
            /* harmony export (immutable) */

            __webpack_exports__["a"] = DolphinRemotingError;

            var DolphinSessionError = function (_Error3) {
                _inherits(DolphinSessionError, _Error3);

                function DolphinSessionError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Session Error';

                    _classCallCheck(this, DolphinSessionError);

                    return _possibleConstructorReturn(this, (DolphinSessionError.__proto__ || Object.getPrototypeOf(DolphinSessionError)).call(this, message));
                }

                return DolphinSessionError;
            }(Error);
            /* harmony export (immutable) */

            __webpack_exports__["b"] = DolphinSessionError;

            var HttpResponseError = function (_Error4) {
                _inherits(HttpResponseError, _Error4);

                function HttpResponseError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Http Response Error';

                    _classCallCheck(this, HttpResponseError);

                    return _possibleConstructorReturn(this, (HttpResponseError.__proto__ || Object.getPrototypeOf(HttpResponseError)).call(this, message));
                }

                return HttpResponseError;
            }(Error);
            /* harmony export (immutable) */

            __webpack_exports__["d"] = HttpResponseError;

            var HttpNetworkError = function (_Error5) {
                _inherits(HttpNetworkError, _Error5);

                function HttpNetworkError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Http Network Error';

                    _classCallCheck(this, HttpNetworkError);

                    return _possibleConstructorReturn(this, (HttpNetworkError.__proto__ || Object.getPrototypeOf(HttpNetworkError)).call(this, message));
                }

                return HttpNetworkError;
            }(Error);
            /* harmony export (immutable) */

            __webpack_exports__["c"] = HttpNetworkError;

            /***/
        },
        /* 137 */
        /***/function (module, __webpack_exports__, __webpack_require__) {

            "use strict";
            /* harmony import */
            var __WEBPACK_IMPORTED_MODULE_0__logging__ = __webpack_require__(2);

            var RemotingErrorHandler = function () {
                function RemotingErrorHandler() {
                    _classCallCheck(this, RemotingErrorHandler);
                }

                _createClass(RemotingErrorHandler, [{
                    key: 'onError',
                    value: function onError(error) {
                        RemotingErrorHandler.LOGGER.error(error);
                    }
                }]);

                return RemotingErrorHandler;
            }();
            /* harmony export (immutable) */

            __webpack_exports__["a"] = RemotingErrorHandler;

            RemotingErrorHandler.LOGGER = __WEBPACK_IMPORTED_MODULE_0__logging__["b" /* LoggerFactory */].getLogger('RemotingErrorHandler');

            /***/
        }]
        /******/)
    );
});


},{}],2:[function(_dereq_,module,exports){
/* Copyright 2015 Canoo Engineering AG.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var dolphinClient = _dereq_('../bower_components/dolphin-platform-js/dist/dolphin-platform.js');
angular.module('DolphinPlatform', []);

angular.module('DolphinPlatform').provider('$dolphinConfig', [function () {

    var $cfg = {};
    this.configure = function (cfg) {
        $cfg = cfg;
    };

    this.$get = function () {
        return $cfg;
    };
}]);

angular.module('DolphinPlatform').factory('logger', function () {
    return dolphinClient.LoggerFactory.getLogger('DolphinPlatform');
});

angular.module('DolphinPlatform').factory('clientContextFactory', function () {
    return new dolphinClient.ClientContextFactory();
});

angular.module('DolphinPlatform').factory('vanillaClientContext', ['clientContextFactory', '$dolphinConfig', function (clientContextFactory, $dolphinConfig) {
    return clientContextFactory.create($dolphinConfig.DOLPHIN_URL, $dolphinConfig);
}]);

angular.module('DolphinPlatform').factory('dolphinBinding', ['$rootScope', '$timeout', 'vanillaClientContext', 'logger', function ($rootScope, $timeout, vanillaClientContext, logger) {

    $rootScope.waitingForGlobalDolphinApply = false;

    $rootScope.applyInAngular = function () {
        if (!$rootScope.waitingForGlobalDolphinApply) {
            $rootScope.waitingForGlobalDolphinApply = true;
            $timeout(function () {
                $rootScope.waitingForGlobalDolphinApply = false;
                logger.debug('Creating Dolphin Platform controller');
                $rootScope.$apply();
            }, 100);
        }
    };

    var dolphinBinding = {

        injectArray: function injectArray(baseArray, startIndex, insertArray) {
            baseArray.splice.apply(baseArray, [startIndex, 0].concat(insertArray));
        },
        exists: function exists(object) {
            return typeof object !== 'undefined' && object !== null;
        },
        deepEqual: function deepEqual(array1, array2) {
            if (array1 === array2 || !this.exists(array1) && !this.exists(array2)) {
                return true;
            }
            if (this.exists(array1) !== this.exists(array2)) {
                return false;
            }
            var n = array1.length;
            if (array2.length !== n) {
                return false;
            }
            for (var i = 0; i < n; i++) {
                if (array1[i] !== array2[i]) {
                    return false;
                }
            }
            return true;
        },
        init: function init(beanManager) {
            beanManager.onAdded(dolphinBinding.onBeanAddedHandler);
            beanManager.onRemoved(dolphinBinding.onBeanRemovedHandler);
            beanManager.onBeanUpdate(dolphinBinding.onBeanUpdateHandler);
            beanManager.onArrayUpdate(dolphinBinding.onArrayUpdateHandler);
            logger.debug('Dolphin Platform binding listeners for Angular registered');
        },
        watchAttribute: function watchAttribute(bean, attribute) {
            logger.debug('Added Angular listener for property ' + attribute + ' of bean ' + JSON.stringify(bean));
            $rootScope.$watch(function () {
                return bean[attribute];
            }, function (newValue, oldValue) {
                logger.debug('Value ' + attribute + ' of bean ' + JSON.stringify(bean) + ' changed from ' + oldValue + ' to ' + newValue);
                vanillaClientContext.beanManager.classRepository.notifyBeanChange(bean, attribute, newValue);
            });
        },
        onBeanAddedHandler: function onBeanAddedHandler(bean) {
            logger.debug('Bean ' + JSON.stringify(bean) + ' added');

            for (var attr in bean) {
                dolphinBinding.watchAttribute(bean, attr);
            }

            $rootScope.applyInAngular();
        },
        onBeanRemovedHandler: function onBeanRemovedHandler(bean) {
            logger.debug('Bean ' + JSON.stringify(bean) + ' removed');
            $rootScope.applyInAngular();
        },
        onBeanUpdateHandler: function onBeanUpdateHandler(bean, propertyName, newValue, oldValue) {
            var newProperty = true;
            for (var attr in bean) {
                if (attr === propertyName) {
                    newProperty = false;
                }
            }

            if (newProperty) {
                logger.debug('Value ' + propertyName + ' was added to bean ' + JSON.stringify(bean));
                dolphinBinding.watchAttribute(bean, propertyName);
            }

            if (oldValue === newValue) {
                logger.debug('Received bean update for property ' + propertyName + ' without any change');
                return;
            }

            logger.debug('Bean update for property ' + propertyName + ' with new value "' + newValue + '"');

            bean[propertyName] = newValue;
            $rootScope.applyInAngular();
        },
        onArrayUpdateHandler: function onArrayUpdateHandler(bean, propertyName, index, count, newElements) {
            var array = bean[propertyName];
            var oldElements = array.slice(index, index + count);
            if (dolphinBinding.deepEqual(newElements, oldElements)) {
                return;
            }

            logger.debug('Array update for property ' + propertyName + ' starting at index ' + index + ' with ' + JSON.stringify(newElements));

            if (typeof newElements === 'undefined' || newElements && newElements.length === 0) {
                array.splice(index, count);
                $rootScope.applyInAngular();
            } else {
                dolphinBinding.injectArray(array, index, newElements);

                for (bean in newElements) {
                    for (var attr in bean) {
                        dolphinBinding.watchAttribute(bean, attr);
                    }
                }

                $rootScope.applyInAngular();
            }
        }
    };

    logger.debug('Dolphin Platform binding created');

    return dolphinBinding;
}]);

angular.module('DolphinPlatform').factory('clientContext', ['vanillaClientContext', 'dolphinBinding', '$window', 'logger', function (vanillaClientContext, dolphinBinding, $window, logger) {
    var clientContext = {
        createController: function createController(scope, controllerName) {
            return vanillaClientContext.createController(controllerName).then(function (controllerProxy) {
                logger.debug('Creating Dolphin Platform controller ' + controllerName);
                scope.$on('$destroy', function () {
                    logger.debug('Destroying Dolphin Platform controller ' + controllerName);
                    controllerProxy.destroy();
                });
                scope.model = controllerProxy.model;
                return controllerProxy;
            });
        },
        disconnect: function disconnect() {
            vanillaClientContext.disconnect().then(function () {
                logger.debug('Dolphin Platform context disconnected');
            });
        },
        connect: function connect() {
            vanillaClientContext.connect().then(function () {
                logger.debug('Dolphin Platform context connected');
            });
        },
        onConnect: function onConnect() {
            return vanillaClientContext.onConnect().then(function () {
                logger.debug('Dolphin Platform context connected');
            });
        }
    };

    dolphinBinding.init(vanillaClientContext.beanManager);
    $window.onbeforeunload = clientContext.disconnect;

    logger.debug('Dolphin Platform context created');

    return clientContext;
}]);

},{"../bower_components/dolphin-platform-js/dist/dolphin-platform.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9kb2xwaGluLXBsYXRmb3JtLmpzIiwic3JjL2RvbHBoaW4tcGxhdGZvcm0tYW5ndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsQ0FBQyxTQUFTLGdDQUFULENBQTBDLElBQTFDLEVBQWdELE9BQWhELEVBQXlEO0FBQ3pELFFBQUcsUUFBTyxPQUFQLHlDQUFPLE9BQVAsT0FBbUIsUUFBbkIsSUFBK0IsUUFBTyxNQUFQLHlDQUFPLE1BQVAsT0FBa0IsUUFBcEQsRUFDQyxPQUFPLE9BQVAsR0FBaUIsU0FBakIsQ0FERCxLQUVLLElBQUcsT0FBTyxNQUFQLEtBQWtCLFVBQWxCLElBQWdDLE9BQU8sR0FBMUMsRUFDSixPQUFPLEVBQVAsRUFBVyxPQUFYLEVBREksS0FFQSxJQUFHLFFBQU8sT0FBUCx5Q0FBTyxPQUFQLE9BQW1CLFFBQXRCLEVBQ0osUUFBUSxTQUFSLElBQXFCLFNBQXJCLENBREksS0FHSixLQUFLLFNBQUwsSUFBa0IsU0FBbEI7QUFDRCxDQVRELEVBU0csT0FBTyxJQUFQLEtBQWdCLFdBQWhCLEdBQThCLElBQTlCLFlBVEgsRUFTOEMsWUFBVztBQUN6RCxXQUFPLFNBQVUsVUFBUyxPQUFULEVBQWtCO0FBQUU7QUFDckMsb0JBRG1DLENBQ3pCO0FBQ1Ysb0JBQVUsSUFBSSxtQkFBbUIsRUFBdkI7QUFDVjtBQUNBLG9CQUptQyxDQUl6QjtBQUNWLG9CQUFVLFNBQVMsbUJBQVQsQ0FBNkIsUUFBN0IsRUFBdUM7QUFDakQ7QUFDQSx3QkFGaUQsQ0FFdEM7QUFDWCx3QkFBVyxJQUFHLGlCQUFpQixRQUFqQixDQUFILEVBQStCO0FBQzFDLDRCQUFZLE9BQU8saUJBQWlCLFFBQWpCLEVBQTJCLE9BQWxDO0FBQ1o7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U0FyQmU7QUFzQmhCLG1CQUFXLHFCQUFZO0FBQ25CLG1CQUFPLHFCQUFxQixTQUFyQixHQUFpQyxJQUFqQyxDQUFzQyxZQUFZO0FBQ3JELHVCQUFPLEtBQVAsQ0FBYSxvQ0FBYjtBQUNILGFBRk0sQ0FBUDtBQUdIO0FBMUJlLEtBQXBCOztBQTZCQSxtQkFBZSxJQUFmLENBQW9CLHFCQUFxQixXQUF6QztBQUNBLFlBQVEsY0FBUixHQUF5QixjQUFjLFVBQXZDOztBQUVBLFdBQU8sS0FBUCxDQUFhLGtDQUFiOztBQUVBLFdBQU8sYUFBUDtBQUNILENBcEMwRCxDQUEzRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9cmV0dXJuIGV9KSgpIiwiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZG9scGhpblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJkb2xwaGluXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuLyoqKioqKi8gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gXHRcdFx0aTogbW9kdWxlSWQsXG4vKioqKioqLyBcdFx0XHRsOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4vKioqKioqLyBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbi8qKioqKiovIFx0XHRtb2R1bGUubCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4vKioqKioqLyBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbi8qKioqKiovIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbi8qKioqKiovIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbi8qKioqKiovIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbi8qKioqKiovIFx0XHRcdH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuLyoqKioqKi8gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4vKioqKioqLyBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuLyoqKioqKi8gXHRcdHJldHVybiBnZXR0ZXI7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4MCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImNcIl0gPSBleGlzdHM7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9IGNoZWNrTWV0aG9kO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImJcIl0gPSBjaGVja1BhcmFtO1xudmFyIF9jaGVja01ldGhvZE5hbWU7XG5cbmZ1bmN0aW9uIGV4aXN0cyhvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgb2JqZWN0ICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBjaGVja01ldGhvZChuYW1lKSB7XG4gICAgX2NoZWNrTWV0aG9kTmFtZSA9IG5hbWU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrUGFyYW0ocGFyYW0sIHBhcmFtZXRlck5hbWUpIHtcbiAgICBpZighZXhpc3RzKHBhcmFtKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwYXJhbWV0ZXIgJyArIHBhcmFtZXRlck5hbWUgKyAnIGlzIG1hbmRhdG9yeSBpbiAnICsgX2NoZWNrTWV0aG9kTmFtZSk7XG4gICAgfVxufVxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBBVFRSSUJVVEVfTUVUQURBVEFfQ0hBTkdFRF9DT01NQU5EX0lEID0gJ0F0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZCc7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYlwiXSA9IEFUVFJJQlVURV9NRVRBREFUQV9DSEFOR0VEX0NPTU1BTkRfSUQ7XG5cbmNvbnN0IENBTExfQUNUSU9OX0NPTU1BTkRfSUQgPSAnQ2FsbEFjdGlvbic7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiY1wiXSA9IENBTExfQUNUSU9OX0NPTU1BTkRfSUQ7XG5cbmNvbnN0IENIQU5HRV9BVFRSSUJVVEVfTUVUQURBVEFfQ09NTUFORF9JRCA9ICdDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YSc7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZFwiXSA9IENIQU5HRV9BVFRSSUJVVEVfTUVUQURBVEFfQ09NTUFORF9JRDtcblxuY29uc3QgQ1JFQVRFX0NPTlRFWFRfQ09NTUFORF9JRCA9ICdDcmVhdGVDb250ZXh0Jztcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJmXCJdID0gQ1JFQVRFX0NPTlRFWFRfQ09NTUFORF9JRDtcblxuY29uc3QgQ1JFQVRFX0NPTlRST0xMRVJfQ09NTUFORF9JRCA9ICdDcmVhdGVDb250cm9sbGVyJztcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJnXCJdID0gQ1JFQVRFX0NPTlRST0xMRVJfQ09NTUFORF9JRDtcblxuY29uc3QgQ1JFQVRFX1BSRVNFTlRBVElPTl9NT0RFTF9DT01NQU5EX0lEID0gJ0NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsJztcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJoXCJdID0gQ1JFQVRFX1BSRVNFTlRBVElPTl9NT0RFTF9DT01NQU5EX0lEO1xuXG5jb25zdCBERUxFVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQgPSAnRGVsZXRlUHJlc2VudGF0aW9uTW9kZWwnO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImlcIl0gPSBERUxFVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQ7XG5cbmNvbnN0IERFU1RST1lfQ09OVEVYVF9DT01NQU5EX0lEID0gJ0Rlc3Ryb3lDb250ZXh0Jztcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJqXCJdID0gREVTVFJPWV9DT05URVhUX0NPTU1BTkRfSUQ7XG5cbmNvbnN0IERFU1RST1lfQ09OVFJPTExFUl9DT01NQU5EX0lEID0gJ0Rlc3Ryb3lDb250cm9sbGVyJztcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJrXCJdID0gREVTVFJPWV9DT05UUk9MTEVSX0NPTU1BTkRfSUQ7XG5cbmNvbnN0IElOVEVSUlVQVF9MT05HX1BPTExfQ09NTUFORF9JRCA9ICdJbnRlcnJ1cHRMb25nUG9sbCc7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wibVwiXSA9IElOVEVSUlVQVF9MT05HX1BPTExfQ09NTUFORF9JRDtcblxuY29uc3QgUFJFU0VOVEFUSU9OX01PREVMX0RFTEVURURfQ09NTUFORF9JRCA9ICdQcmVzZW50YXRpb25Nb2RlbERlbGV0ZWQnO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcInNcIl0gPSBQUkVTRU5UQVRJT05fTU9ERUxfREVMRVRFRF9DT01NQU5EX0lEO1xuXG5jb25zdCBTVEFSVF9MT05HX1BPTExfQ09NTUFORF9JRCA9ICdTdGFydExvbmdQb2xsJztcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJ0XCJdID0gU1RBUlRfTE9OR19QT0xMX0NPTU1BTkRfSUQ7XG5cbmNvbnN0IFZBTFVFX0NIQU5HRURfQ09NTUFORF9JRCA9ICdWYWx1ZUNoYW5nZWQnO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcInZcIl0gPSBWQUxVRV9DSEFOR0VEX0NPTU1BTkRfSUQ7XG5cblxuY29uc3QgSUQgPSBcImlkXCI7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wibFwiXSA9IElEO1xuXG5jb25zdCBBVFRSSUJVVEVfSUQgPSBcImFfaWRcIjtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQVRUUklCVVRFX0lEO1xuXG5jb25zdCBQTV9JRCA9IFwicF9pZFwiO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcInFcIl0gPSBQTV9JRDtcblxuY29uc3QgQ09OVFJPTExFUl9JRCA9IFwiY19pZFwiO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImVcIl0gPSBDT05UUk9MTEVSX0lEO1xuXG5jb25zdCBQTV9UWVBFID0gXCJ0XCI7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiclwiXSA9IFBNX1RZUEU7XG5cbmNvbnN0IE5BTUUgPSBcIm5cIjtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJuXCJdID0gTkFNRTtcblxuY29uc3QgVkFMVUUgPSBcInZcIjtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJ1XCJdID0gVkFMVUU7XG5cbmNvbnN0IFBBUkFNUyA9IFwicFwiO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcIm9cIl0gPSBQQVJBTVM7XG5cbmNvbnN0IFBNX0FUVFJJQlVURVMgPSBcImFcIjtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJwXCJdID0gUE1fQVRUUklCVVRFUztcblxuXG4vKioqLyB9KSxcbi8qIDIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb25zdGFudHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fbG9nZ2VyZmFjdG9yeV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4Nyk7XG4vKiBoYXJtb255IHJlZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb25zdGFudHNfX1tcImFcIl07IH0pO1xuLyogaGFybW9ueSByZWV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiYlwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fbG9nZ2VyZmFjdG9yeV9fW1wiYVwiXTsgfSk7XG5cblxuXG5cblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHN0b3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MikoJ3drcycpO1xudmFyIHVpZCA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xudmFyIFN5bWJvbCA9IF9fd2VicGFja19yZXF1aXJlX18oMykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG5cblxuLyoqKi8gfSksXG4vKiA1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIGNvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIGN0eCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciBJU19XUkFQID0gdHlwZSAmICRleHBvcnQuVztcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGtleSwgb3duLCBvdXQ7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYgKG93biAmJiBrZXkgaW4gZXhwb3J0cykgY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbiAoQykge1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEMpIHtcbiAgICAgICAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDKCk7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmIChJU19QUk9UTykge1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmICh0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKSBoaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKiovIH0pLFxuLyogNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS4zJyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBkUCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xudmFyIGNyZWF0ZURlc2MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU5KTtcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMikgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xudmFyIElFOF9ET01fREVGSU5FID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4OSk7XG52YXIgdG9QcmltaXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkwKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMikgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDExICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhX193ZWJwYWNrX3JlcXVpcmVfXygxOSkoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiovIH0pLFxuLyogMTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAxNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgY3R4ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciBjYWxsID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMDIpO1xudmFyIGlzQXJyYXlJdGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMDMpO1xudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG52YXIgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcbnZhciBnZXRJdGVyRm4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwNCk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG5cblxuLyoqKi8gfSksXG4vKiAxOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmNvbnN0IEpTX1NUUklOR19UWVBFID0gJ3N0cmluZyc7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wia1wiXSA9IEpTX1NUUklOR19UWVBFO1xuXG5cbmNvbnN0IERPTFBISU5fQkVBTiA9IDA7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZlwiXSA9IERPTFBISU5fQkVBTjtcblxuY29uc3QgQllURSA9IDE7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiY1wiXSA9IEJZVEU7XG5cbmNvbnN0IFNIT1JUID0gMjtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJwXCJdID0gU0hPUlQ7XG5cbmNvbnN0IElOVCA9IDM7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wialwiXSA9IElOVDtcblxuY29uc3QgTE9ORyA9IDQ7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiblwiXSA9IExPTkc7XG5cbmNvbnN0IEZMT0FUID0gNTtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJpXCJdID0gRkxPQVQ7XG5cbmNvbnN0IERPVUJMRSA9IDY7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZ1wiXSA9IERPVUJMRTtcblxuY29uc3QgQk9PTEVBTiA9IDc7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYlwiXSA9IEJPT0xFQU47XG5cbmNvbnN0IFNUUklORyA9IDg7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wicVwiXSA9IFNUUklORztcblxuY29uc3QgREFURSA9IDk7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZVwiXSA9IERBVEU7XG5cbmNvbnN0IEVOVU0gPSAxMDtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJoXCJdID0gRU5VTTtcblxuY29uc3QgQ0FMRU5EQVIgPSAxMTtcbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJkXCJdID0gQ0FMRU5EQVI7XG5cbmNvbnN0IExPQ0FMX0RBVEVfRklFTERfVFlQRSA9IDU1O1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImxcIl0gPSBMT0NBTF9EQVRFX0ZJRUxEX1RZUEU7XG5cbmNvbnN0IExPQ0FMX0RBVEVfVElNRV9GSUVMRF9UWVBFID0gNTI7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wibVwiXSA9IExPQ0FMX0RBVEVfVElNRV9GSUVMRF9UWVBFO1xuXG5jb25zdCBaT05FRF9EQVRFX1RJTUVfRklFTERfVFlQRSA9IDU0O1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcInJcIl0gPSBaT05FRF9EQVRFX1RJTUVfRklFTERfVFlQRTtcblxuXG5cbmNvbnN0IEFEREVEX1RZUEUgPSBcIkFEREVEXCI7XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9IEFEREVEX1RZUEU7XG5cbmNvbnN0IFJFTU9WRURfVFlQRSA9IFwiUkVNT1ZFRFwiO1xuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcIm9cIl0gPSBSRU1PVkVEX1RZUEU7XG5cblxuXG4vKioqLyB9KSxcbi8qIDE5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcbi8qIDIwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBkZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKS5mO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xudmFyIFRBRyA9IF9fd2VicGFja19yZXF1aXJlX18oNCkoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAyMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2ltcGxfY3JlYXRlQ29udGV4dENvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDcpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9faW1wbF9jcmVhdGVDb250cm9sbGVyQ29tbWFuZF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0OCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19pbXBsX2NhbGxBY3Rpb25Db21tYW5kX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ1KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2ltcGxfZGVzdHJveUNvbnRyb2xsZXJDb21tYW5kX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX2ltcGxfZGVzdHJveUNvbnRleHRDb21tYW5kX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX2ltcGxfc3RhcnRMb25nUG9sbENvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNTUpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9faW1wbF9pbnRlcnJ1cHRMb25nUG9sbENvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNTMpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfN19faW1wbF9jcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9faW1wbF9kZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNTApO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9faW1wbF9wcmVzZW50YXRpb25Nb2RlbERlbGV0ZWRDb21tYW5kX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU0KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzEwX19pbXBsX3ZhbHVlQ2hhbmdlZENvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTFfX2ltcGxfY2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ2KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzEyX19pbXBsX2F0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZENvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDQpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNsYXNzIENvbW1hbmRGYWN0b3J5IHtcblxuICAgIHN0YXRpYyBjcmVhdGVDcmVhdGVDb250ZXh0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2ltcGxfY3JlYXRlQ29udGV4dENvbW1hbmRfX1tcImFcIiAvKiBkZWZhdWx0ICovXSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDcmVhdGVDb250cm9sbGVyQ29tbWFuZChjb250cm9sbGVyTmFtZSwgcGFyZW50Q29udHJvbGxlcklkKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19pbXBsX2NyZWF0ZUNvbnRyb2xsZXJDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgY29tbWFuZC5pbml0KGNvbnRyb2xsZXJOYW1lLCBwYXJlbnRDb250cm9sbGVySWQpO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2FsbEFjdGlvbkNvbW1hbmQoY29udHJvbGxlcmlkLCBhY3Rpb25OYW1lLCBwYXJhbXMpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2ltcGxfY2FsbEFjdGlvbkNvbW1hbmRfX1tcImFcIiAvKiBkZWZhdWx0ICovXSgpO1xuICAgICAgICBjb21tYW5kLmluaXQoY29udHJvbGxlcmlkLCBhY3Rpb25OYW1lLCBwYXJhbXMpO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKGNvbnRyb2xsZXJJZCkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19faW1wbF9kZXN0cm95Q29udHJvbGxlckNvbW1hbmRfX1tcImFcIiAvKiBkZWZhdWx0ICovXSgpO1xuICAgICAgICBjb21tYW5kLmluaXQoY29udHJvbGxlcklkKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZURlc3Ryb3lDb250ZXh0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX2ltcGxfZGVzdHJveUNvbnRleHRDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlU3RhcnRMb25nUG9sbENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19pbXBsX3N0YXJ0TG9uZ1BvbGxDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9faW1wbF9pbnRlcnJ1cHRMb25nUG9sbENvbW1hbmRfX1tcImFcIiAvKiBkZWZhdWx0ICovXSgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQocHJlc2VudGF0aW9uTW9kZWwpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfX2ltcGxfY3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgY29tbWFuZC5pbml0KHByZXNlbnRhdGlvbk1vZGVsKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZURlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChwbUlkKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X19pbXBsX2RlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZF9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKCk7XG4gICAgICAgIGNvbW1hbmQuaW5pdChwbUlkKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQocG1JZCkge1xuICAgICAgICBsZXQgY29tbWFuZCA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzlfX2ltcGxfcHJlc2VudGF0aW9uTW9kZWxEZWxldGVkQ29tbWFuZF9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKCk7XG4gICAgICAgIGNvbW1hbmQuaW5pdChwbUlkKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVZhbHVlQ2hhbmdlZENvbW1hbmQoYXR0cmlidXRlSWQsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTBfX2ltcGxfdmFsdWVDaGFuZ2VkQ29tbWFuZF9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKCk7XG4gICAgICAgIGNvbW1hbmQuaW5pdChhdHRyaWJ1dGVJZCwgbmV3VmFsdWUpO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kKGF0dHJpYnV0ZUlkLCBtZXRhZGF0YU5hbWUsIHZhbHVlKSB7XG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTFfX2ltcGxfY2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgY29tbWFuZC5pbml0KGF0dHJpYnV0ZUlkLCBtZXRhZGF0YU5hbWUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUF0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZENvbW1hbmQoYXR0cmlidXRlSWQsIG1ldGFkYXRhTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xMl9faW1wbF9hdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgY29tbWFuZC5pbml0KGF0dHJpYnV0ZUlkLCBtZXRhZGF0YU5hbWUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBDb21tYW5kRmFjdG9yeTtcblxuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImJcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBTT1VSQ0VfU1lTVEVNOyB9KTtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJjXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gU09VUkNFX1NZU1RFTV9DTElFTlQ7IH0pO1xuLyogdW51c2VkIGhhcm1vbnkgZXhwb3J0IFNPVVJDRV9TWVNURU1fU0VSVkVSICovXG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiYVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIEFDVElPTl9DQUxMX0JFQU47IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9jb3JlX2pzX2xpYnJhcnlfZm5fcHJvbWlzZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2NvcmVfanNfbGlicmFyeV9mbl9wcm9taXNlX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX3Byb21pc2VfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRzX2NvbW1hbmRGYWN0b3J5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2NvbnN0YW50c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG5cblxuXG5cblxuXG5jb25zdCBET0xQSElOX0JFQU4gPSAnQEBAIERPTFBISU5fQkVBTiBAQEAnO1xuY29uc3QgQUNUSU9OX0NBTExfQkVBTiA9ICdAQEAgQ09OVFJPTExFUl9BQ1RJT05fQ0FMTF9CRUFOIEBAQCc7XG5jb25zdCBISUdITEFOREVSX0JFQU4gPSAnQEBAIEhJR0hMQU5ERVJfQkVBTiBAQEAnO1xuY29uc3QgRE9MUEhJTl9MSVNUX1NQTElDRSA9ICdARFA6TFNAJztcbmNvbnN0IFNPVVJDRV9TWVNURU0gPSAnQEBAIFNPVVJDRV9TWVNURU0gQEBAJztcbmNvbnN0IFNPVVJDRV9TWVNURU1fQ0xJRU5UID0gJ2NsaWVudCc7XG5jb25zdCBTT1VSQ0VfU1lTVEVNX1NFUlZFUiA9ICdzZXJ2ZXInO1xuXG5jbGFzcyBDb25uZWN0b3J7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGRvbHBoaW4sIGNsYXNzUmVwb3NpdG9yeSwgY29uZmlnKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnQ29ubmVjdG9yKHVybCwgZG9scGhpbiwgY2xhc3NSZXBvc2l0b3J5LCBjb25maWcpJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKHVybCwgJ3VybCcpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShkb2xwaGluLCAnZG9scGhpbicpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjbGFzc1JlcG9zaXRvcnksICdjbGFzc1JlcG9zaXRvcnknKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZG9scGhpbiA9IGRvbHBoaW47XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeSA9IGNsYXNzUmVwb3NpdG9yeTtcbiAgICAgICAgdGhpcy5oaWdobGFuZGVyUE1SZXNvbHZlciA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIHRoaXMuaGlnaGxhbmRlclBNUHJvbWlzZSA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX3Byb21pc2VfX19kZWZhdWx0LmEoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICAgICAgc2VsZi5oaWdobGFuZGVyUE1SZXNvbHZlciA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLm9uTW9kZWxTdG9yZUNoYW5nZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IGV2ZW50LmNsaWVudFByZXNlbnRhdGlvbk1vZGVsO1xuICAgICAgICAgICAgbGV0IHNvdXJjZVN5c3RlbSA9IG1vZGVsLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShTT1VSQ0VfU1lTVEVNKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKHNvdXJjZVN5c3RlbSkgJiYgc291cmNlU3lzdGVtLnZhbHVlID09PSBTT1VSQ0VfU1lTVEVNX1NFUlZFUikge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5ldmVudFR5cGUgPT09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fY29uc3RhbnRzX19bXCJhXCIgLyogQURERURfVFlQRSAqL10pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vbk1vZGVsQWRkZWQobW9kZWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZXZlbnRUeXBlID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2NvbnN0YW50c19fW1wib1wiIC8qIFJFTU9WRURfVFlQRSAqL10pIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vbk1vZGVsUmVtb3ZlZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5kb2xwaGluLnN0YXJ0UHVzaExpc3RlbmluZyhfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRzX2NvbW1hbmRGYWN0b3J5X19bXCJhXCIgLyogZGVmYXVsdCAqL10uY3JlYXRlU3RhcnRMb25nUG9sbENvbW1hbmQoKSwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kc19jb21tYW5kRmFjdG9yeV9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dLmNyZWF0ZUludGVycnVwdExvbmdQb2xsQ29tbWFuZCgpKTtcbiAgICB9XG5cbiAgICBvbk1vZGVsQWRkZWQobW9kZWwpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDb25uZWN0b3Iub25Nb2RlbEFkZGVkKG1vZGVsKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgdmFyIHR5cGUgPSBtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBQ1RJT05fQ0FMTF9CRUFOOlxuICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBET0xQSElOX0JFQU46XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkucmVnaXN0ZXJDbGFzcyhtb2RlbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEhJR0hMQU5ERVJfQkVBTjpcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsYW5kZXJQTVJlc29sdmVyKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRE9MUEhJTl9MSVNUX1NQTElDRTpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5zcGxpY2VMaXN0RW50cnkobW9kZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9scGhpbi5kZWxldGVQcmVzZW50YXRpb25Nb2RlbChtb2RlbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5LmxvYWQobW9kZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb2RlbFJlbW92ZWQobW9kZWwpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDb25uZWN0b3Iub25Nb2RlbFJlbW92ZWQobW9kZWwpJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKG1vZGVsLCAnbW9kZWwnKTtcbiAgICAgICAgbGV0IHR5cGUgPSBtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBET0xQSElOX0JFQU46XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkudW5yZWdpc3RlckNsYXNzKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRE9MUEhJTl9MSVNUX1NQTElDRTpcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5LnVubG9hZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2UoY29tbWFuZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0Nvbm5lY3Rvci5pbnZva2UoY29tbWFuZCknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZCwgJ2NvbW1hbmQnKTtcblxuICAgICAgICB2YXIgZG9scGhpbiA9IHRoaXMuZG9scGhpbjtcbiAgICAgICAgcmV0dXJuIG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX3Byb21pc2VfX19kZWZhdWx0LmEoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGRvbHBoaW4uc2VuZChjb21tYW5kLCB7XG4gICAgICAgICAgICAgICAgb25GaW5pc2hlZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEhpZ2hsYW5kZXJQTSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxhbmRlclBNUHJvbWlzZTtcbiAgICB9XG59XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZFwiXSA9IENvbm5lY3RvcjtcblxuXG5cblxuXG4vKioqLyB9KSxcbi8qIDIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2ltcGxfdmFsdWVDaGFuZ2VkQ29tbWFuZF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Myk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19pbXBsX2F0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZENvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDQpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9faW1wbF9jYWxsQWN0aW9uQ29tbWFuZF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X19pbXBsX2NoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Nik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19pbXBsX2NyZWF0ZUNvbnRleHRDb21tYW5kX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX2ltcGxfY3JlYXRlQ29udHJvbGxlckNvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDgpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9faW1wbF9jcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDkpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTBfX2ltcGxfZGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUwKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzExX19pbXBsX2Rlc3Ryb3lDb250ZXh0Q29tbWFuZF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1MSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xMl9faW1wbF9kZXN0cm95Q29udHJvbGxlckNvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNTIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTNfX2ltcGxfaW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUzKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzE0X19pbXBsX3ByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNTQpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTVfX2ltcGxfc3RhcnRMb25nUG9sbENvbW1hbmRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNTUpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTZfX2NvZGVjRXJyb3JfXyA9IF9fd2VicGFja19yZXF1aXJlX18oODYpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbmNsYXNzIENvZGVjIHtcblxuICAgIHN0YXRpYyBfZW5jb2RlQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKShcIkNvZGVjLmVuY29kZUF0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZENvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGNvbW1hbmQsIFwiY29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZC5hdHRyaWJ1dGVJZCwgXCJjb21tYW5kLmF0dHJpYnV0ZUlkXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb21tYW5kLm1ldGFkYXRhTmFtZSwgXCJjb21tYW5kLm1ldGFkYXRhTmFtZVwiKTtcblxuICAgICAgICBsZXQganNvbkNvbW1hbmQgPSB7fTtcbiAgICAgICAganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJsXCIgLyogSUQgKi9dXSA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiYlwiIC8qIEFUVFJJQlVURV9NRVRBREFUQV9DSEFOR0VEX0NPTU1BTkRfSUQgKi9dO1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImFcIiAvKiBBVFRSSUJVVEVfSUQgKi9dXSA9IGNvbW1hbmQuYXR0cmlidXRlSWQ7XG4gICAgICAgIGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiblwiIC8qIE5BTUUgKi9dXSA9IGNvbW1hbmQubWV0YWRhdGFOYW1lO1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcInVcIiAvKiBWQUxVRSAqL11dID0gY29tbWFuZC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGpzb25Db21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZGVjb2RlQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZChqc29uQ29tbWFuZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoXCJDb2RlYy5kZWNvZGVBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShqc29uQ29tbWFuZCwgXCJqc29uQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoanNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJhXCIgLyogQVRUUklCVVRFX0lEICovXV0sIFwianNvbkNvbW1hbmRbQVRUUklCVVRFX0lEXVwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoanNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJuXCIgLyogTkFNRSAqL11dLCBcImpzb25Db21tYW5kW05BTUVdXCIpO1xuXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9faW1wbF9hdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgY29tbWFuZC5hdHRyaWJ1dGVJZCA9IGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiYVwiIC8qIEFUVFJJQlVURV9JRCAqL11dO1xuICAgICAgICBjb21tYW5kLm1ldGFkYXRhTmFtZSA9IGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiblwiIC8qIE5BTUUgKi9dXTtcbiAgICAgICAgY29tbWFuZC52YWx1ZSA9IGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1widVwiIC8qIFZBTFVFICovXV07XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZW5jb2RlQ2FsbEFjdGlvbkNvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoXCJDb2RlYy5lbmNvZGVDYWxsQWN0aW9uQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZCwgXCJjb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb21tYW5kLmNvbnRyb2xsZXJpZCwgXCJjb21tYW5kLmNvbnRyb2xsZXJpZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZC5hY3Rpb25OYW1lLCBcImNvbW1hbmQuYWN0aW9uTmFtZVwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZC5wYXJhbXMsIFwiY29tbWFuZC5wYXJhbXNcIik7XG5cblxuICAgICAgICBsZXQganNvbkNvbW1hbmQgPSB7fTtcbiAgICAgICAganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJsXCIgLyogSUQgKi9dXSA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiY1wiIC8qIENBTExfQUNUSU9OX0NPTU1BTkRfSUQgKi9dO1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImVcIiAvKiBDT05UUk9MTEVSX0lEICovXV0gPSBjb21tYW5kLmNvbnRyb2xsZXJpZDtcbiAgICAgICAganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJuXCIgLyogTkFNRSAqL11dID0gY29tbWFuZC5hY3Rpb25OYW1lO1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcIm9cIiAvKiBQQVJBTVMgKi9dXSA9IGNvbW1hbmQucGFyYW1zLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIHJlc3VsdFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcIm5cIiAvKiBOQU1FICovXV0gPSBwYXJhbS5uYW1lO1xuICAgICAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkocGFyYW0udmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1widVwiIC8qIFZBTFVFICovXV0gPSBwYXJhbS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ganNvbkNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9kZWNvZGVDYWxsQWN0aW9uQ29tbWFuZChqc29uQ29tbWFuZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoXCJDb2RlYy5kZWNvZGVDYWxsQWN0aW9uQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoanNvbkNvbW1hbmQsIFwianNvbkNvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiZVwiIC8qIENPTlRST0xMRVJfSUQgKi9dXSwgXCJqc29uQ29tbWFuZFtDT05UUk9MTEVSX0lEXVwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoanNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJuXCIgLyogTkFNRSAqL11dLCBcImpzb25Db21tYW5kW05BTUVdXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcIm9cIiAvKiBQQVJBTVMgKi9dXSwgXCJqc29uQ29tbWFuZFtQQVJBTVNdXCIpO1xuXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9faW1wbF9jYWxsQWN0aW9uQ29tbWFuZF9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKCk7XG4gICAgICAgIGNvbW1hbmQuY29udHJvbGxlcmlkID0ganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJlXCIgLyogQ09OVFJPTExFUl9JRCAqL11dO1xuICAgICAgICBjb21tYW5kLmFjdGlvbk5hbWUgPSBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcIm5cIiAvKiBOQU1FICovXV07XG4gICAgICAgIC8vVE9ETzogRsO8ciBkaWUgUGFyYW1zIHNvbGx0ZW4gd2lyIGVpbmUgS2xhc3NlIGJlcmVpdHN0ZWxsZW5cbiAgICAgICAgY29tbWFuZC5wYXJhbXMgPSBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcIm9cIiAvKiBQQVJBTVMgKi9dXS5tYXAoKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICduYW1lJzogcGFyYW1bX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJuXCIgLyogTkFNRSAqL11dLFxuICAgICAgICAgICAgICAgICd2YWx1ZSc6IE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkocGFyYW1bX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJ1XCIgLyogVkFMVUUgKi9dXSkgPyBwYXJhbVtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcInVcIiAvKiBWQUxVRSAqL11dIDogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZW5jb2RlQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKFwiQ29kZWMuZW5jb2RlQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb21tYW5kLCBcImNvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGNvbW1hbmQuYXR0cmlidXRlSWQsIFwiY29tbWFuZC5hdHRyaWJ1dGVJZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZC5tZXRhZGF0YU5hbWUsIFwiY29tbWFuZC5tZXRhZGF0YU5hbWVcIik7XG5cbiAgICAgICAgbGV0IGpzb25Db21tYW5kID0ge307XG4gICAgICAgIGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wibFwiIC8qIElEICovXV0gPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImRcIiAvKiBDSEFOR0VfQVRUUklCVVRFX01FVEFEQVRBX0NPTU1BTkRfSUQgKi9dO1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImFcIiAvKiBBVFRSSUJVVEVfSUQgKi9dXSA9IGNvbW1hbmQuYXR0cmlidXRlSWQ7XG4gICAgICAgIGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiblwiIC8qIE5BTUUgKi9dXSA9IGNvbW1hbmQubWV0YWRhdGFOYW1lO1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcInVcIiAvKiBWQUxVRSAqL11dID0gY29tbWFuZC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGpzb25Db21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZGVjb2RlQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kKGpzb25Db21tYW5kKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKShcIkNvZGVjLmRlY29kZUNoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoanNvbkNvbW1hbmQsIFwianNvbkNvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiYVwiIC8qIEFUVFJJQlVURV9JRCAqL11dLCBcImpzb25Db21tYW5kW0FUVFJJQlVURV9JRF1cIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiblwiIC8qIE5BTUUgKi9dXSwgXCJqc29uQ29tbWFuZFtOQU1FXVwiKTtcblxuICAgICAgICBsZXQgY29tbWFuZCA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfX2ltcGxfY2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgY29tbWFuZC5hdHRyaWJ1dGVJZCA9IGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiYVwiIC8qIEFUVFJJQlVURV9JRCAqL11dO1xuICAgICAgICBjb21tYW5kLm1ldGFkYXRhTmFtZSA9IGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiblwiIC8qIE5BTUUgKi9dXTtcbiAgICAgICAgY29tbWFuZC52YWx1ZSA9IGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1widVwiIC8qIFZBTFVFICovXV07XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZW5jb2RlQ3JlYXRlQ29udGV4dENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoXCJDb2RlYy5lbmNvZGVDcmVhdGVDb250ZXh0Q29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZCwgXCJjb21tYW5kXCIpO1xuXG4gICAgICAgIGxldCBqc29uQ29tbWFuZCA9IHt9O1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImxcIiAvKiBJRCAqL11dID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJmXCIgLyogQ1JFQVRFX0NPTlRFWFRfQ09NTUFORF9JRCAqL107XG4gICAgICAgIHJldHVybiBqc29uQ29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RlY29kZUNyZWF0ZUNvbnRleHRDb21tYW5kKGpzb25Db21tYW5kKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKShcIkNvZGVjLmRlY29kZUNyZWF0ZUNvbnRleHRDb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShqc29uQ29tbWFuZCwgXCJqc29uQ29tbWFuZFwiKTtcblxuICAgICAgICBsZXQgY29tbWFuZCA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfX2ltcGxfY3JlYXRlQ29udGV4dENvbW1hbmRfX1tcImFcIiAvKiBkZWZhdWx0ICovXSgpO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2VuY29kZUNyZWF0ZUNvbnRyb2xsZXJDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKFwiQ29kZWMuX2VuY29kZUNyZWF0ZUNvbnRyb2xsZXJDb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb21tYW5kLCBcImNvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGNvbW1hbmQuY29udHJvbGxlck5hbWUsIFwiY29tbWFuZC5jb250cm9sbGVyTmFtZVwiKTtcblxuICAgICAgICBsZXQganNvbkNvbW1hbmQgPSB7fTtcbiAgICAgICAganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJsXCIgLyogSUQgKi9dXSA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiZ1wiIC8qIENSRUFURV9DT05UUk9MTEVSX0NPTU1BTkRfSUQgKi9dO1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcIm5cIiAvKiBOQU1FICovXV0gPSBjb21tYW5kLmNvbnRyb2xsZXJOYW1lO1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImVcIiAvKiBDT05UUk9MTEVSX0lEICovXV0gPSBjb21tYW5kLnBhcmVudENvbnRyb2xsZXJJZDtcbiAgICAgICAgcmV0dXJuIGpzb25Db21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZGVjb2RlQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQoanNvbkNvbW1hbmQpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKFwiQ29kZWMuX2RlY29kZUNyZWF0ZUNvbnRyb2xsZXJDb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShqc29uQ29tbWFuZCwgXCJqc29uQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoanNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJuXCIgLyogTkFNRSAqL11dLCBcImpzb25Db21tYW5kW05BTUVdXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImVcIiAvKiBDT05UUk9MTEVSX0lEICovXV0sIFwianNvbkNvbW1hbmRbQ09OVFJPTExFUl9JRF1cIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X19pbXBsX2NyZWF0ZUNvbnRyb2xsZXJDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgY29tbWFuZC5jb250cm9sbGVyTmFtZSA9IGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiblwiIC8qIE5BTUUgKi9dXTtcbiAgICAgICAgY29tbWFuZC5wYXJlbnRDb250cm9sbGVySWQgPSBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImVcIiAvKiBDT05UUk9MTEVSX0lEICovXV07XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZW5jb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKFwiQ29kZWMuZW5jb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb21tYW5kLCBcImNvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGNvbW1hbmQucG1JZCwgXCJjb21tYW5kLnBtSWRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGNvbW1hbmQucG1UeXBlLCBcImNvbW1hbmQucG1UeXBlXCIpO1xuXG4gICAgICAgIGxldCBqc29uQ29tbWFuZCA9IHt9O1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImxcIiAvKiBJRCAqL11dID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJoXCIgLyogQ1JFQVRFX1BSRVNFTlRBVElPTl9NT0RFTF9DT01NQU5EX0lEICovXTtcbiAgICAgICAganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJxXCIgLyogUE1fSUQgKi9dXSA9IGNvbW1hbmQucG1JZDtcbiAgICAgICAganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJyXCIgLyogUE1fVFlQRSAqL11dID0gY29tbWFuZC5wbVR5cGU7XG4gICAgICAgIGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wicFwiIC8qIFBNX0FUVFJJQlVURVMgKi9dXSA9IGNvbW1hbmQuYXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHt9O1xuICAgICAgICAgICAgcmVzdWx0W19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiblwiIC8qIE5BTUUgKi9dXSA9IGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgICByZXN1bHRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJhXCIgLyogQVRUUklCVVRFX0lEICovXV0gPSBhdHRyaWJ1dGUuaWQ7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShhdHRyaWJ1dGUudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1widVwiIC8qIFZBTFVFICovXV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGpzb25Db21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZGVjb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGpzb25Db21tYW5kKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKShcIkNvZGVjLmRlY29kZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoanNvbkNvbW1hbmQsIFwianNvbkNvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wicVwiIC8qIFBNX0lEICovXV0sIFwianNvbkNvbW1hbmRbUE1fSURdXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcInJcIiAvKiBQTV9UWVBFICovXV0sIFwianNvbkNvbW1hbmRbUE1fVFlQRV1cIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV85X19pbXBsX2NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZF9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKCk7XG4gICAgICAgIGNvbW1hbmQucG1JZCA9IGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wicVwiIC8qIFBNX0lEICovXV07XG4gICAgICAgIGNvbW1hbmQucG1UeXBlID0ganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJyXCIgLyogUE1fVFlQRSAqL11dO1xuXG4gICAgICAgIC8vVE9ETzogRsO8ciBkaWUgQXR0cmlidXRlIHNvbGx0ZW4gd2lyIGVpbmUgS2xhc3NlIGJlcmVpdHN0ZWxsZW5cbiAgICAgICAgY29tbWFuZC5hdHRyaWJ1dGVzID0ganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJwXCIgLyogUE1fQVRUUklCVVRFUyAqL11dLm1hcCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdwcm9wZXJ0eU5hbWUnOiBhdHRyaWJ1dGVbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJuXCIgLyogTkFNRSAqL11dLFxuICAgICAgICAgICAgICAgICdpZCc6IGF0dHJpYnV0ZVtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImFcIiAvKiBBVFRSSUJVVEVfSUQgKi9dXSxcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGF0dHJpYnV0ZVtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcInVcIiAvKiBWQUxVRSAqL11dKSA/IGF0dHJpYnV0ZVtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcInVcIiAvKiBWQUxVRSAqL11dIDogbnVsbFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZW5jb2RlRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKFwiQ29kZWMuX2VuY29kZURlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZCwgXCJjb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb21tYW5kLnBtSWQsIFwiY29tbWFuZC5wbUlkXCIpO1xuXG4gICAgICAgIGxldCBqc29uQ29tbWFuZCA9IHt9O1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImxcIiAvKiBJRCAqL11dID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJpXCIgLyogREVMRVRFX1BSRVNFTlRBVElPTl9NT0RFTF9DT01NQU5EX0lEICovXTtcbiAgICAgICAganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJxXCIgLyogUE1fSUQgKi9dXSA9IGNvbW1hbmQucG1JZDtcbiAgICAgICAgcmV0dXJuIGpzb25Db21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZGVjb2RlRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGpzb25Db21tYW5kKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKShcIkNvZGVjLl9kZWNvZGVEZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGpzb25Db21tYW5kLCBcImpzb25Db21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcInFcIiAvKiBQTV9JRCAqL11dLCBcImpzb25Db21tYW5kW1BNX0lEXVwiKTtcblxuXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTBfX2ltcGxfZGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgY29tbWFuZC5wbUlkID0ganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJxXCIgLyogUE1fSUQgKi9dXTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9lbmNvZGVEZXN0cm95Q29udGV4dENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoXCJDb2RlYy5fZW5jb2RlRGVzdHJveUNvbnRleHRDb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb21tYW5kLCBcImNvbW1hbmRcIik7XG5cbiAgICAgICAgbGV0IGpzb25Db21tYW5kID0ge307XG4gICAgICAgIGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wibFwiIC8qIElEICovXV0gPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImpcIiAvKiBERVNUUk9ZX0NPTlRFWFRfQ09NTUFORF9JRCAqL107XG4gICAgICAgIHJldHVybiBqc29uQ29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RlY29kZURlc3Ryb3lDb250ZXh0Q29tbWFuZChqc29uQ29tbWFuZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoXCJDb2RlYy5fZGVjb2RlRGVzdHJveUNvbnRleHRDb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShqc29uQ29tbWFuZCwgXCJqc29uQ29tbWFuZFwiKTtcblxuICAgICAgICBsZXQgY29tbWFuZCA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzExX19pbXBsX2Rlc3Ryb3lDb250ZXh0Q29tbWFuZF9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKCk7XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZW5jb2RlRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKFwiQ29kZWMuX2VuY29kZURlc3Ryb3lDb250cm9sbGVyQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZCwgXCJjb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb21tYW5kLmNvbnRyb2xsZXJJZCwgXCJjb21tYW5kLmNvbnRyb2xsZXJJZFwiKTtcblxuICAgICAgICBsZXQganNvbkNvbW1hbmQgPSB7fTtcbiAgICAgICAganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJsXCIgLyogSUQgKi9dXSA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wia1wiIC8qIERFU1RST1lfQ09OVFJPTExFUl9DT01NQU5EX0lEICovXTtcbiAgICAgICAganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJlXCIgLyogQ09OVFJPTExFUl9JRCAqL11dID0gY29tbWFuZC5jb250cm9sbGVySWQ7XG4gICAgICAgIHJldHVybiBqc29uQ29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RlY29kZURlc3Ryb3lDb250cm9sbGVyQ29tbWFuZChqc29uQ29tbWFuZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoXCJDb2RlYy5fZGVjb2RlRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShqc29uQ29tbWFuZCwgXCJqc29uQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoanNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJlXCIgLyogQ09OVFJPTExFUl9JRCAqL11dLCBcImpzb25Db21tYW5kW0NPTlRST0xMRVJfSURdXCIpO1xuXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTJfX2ltcGxfZGVzdHJveUNvbnRyb2xsZXJDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgY29tbWFuZC5jb250cm9sbGVySWQgPSBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImVcIiAvKiBDT05UUk9MTEVSX0lEICovXV07XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZW5jb2RlSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKFwiQ29kZWMuX2VuY29kZUludGVycnVwdExvbmdQb2xsQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZCwgXCJjb21tYW5kXCIpO1xuXG4gICAgICAgIGxldCBqc29uQ29tbWFuZCA9IHt9O1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImxcIiAvKiBJRCAqL11dID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJtXCIgLyogSU5URVJSVVBUX0xPTkdfUE9MTF9DT01NQU5EX0lEICovXTtcbiAgICAgICAgcmV0dXJuIGpzb25Db21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZGVjb2RlSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kKGpzb25Db21tYW5kKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKShcIkNvZGVjLl9kZWNvZGVJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGpzb25Db21tYW5kLCBcImpzb25Db21tYW5kXCIpO1xuXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTNfX2ltcGxfaW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9lbmNvZGVQcmVzZW50YXRpb25Nb2RlbERlbGV0ZWRDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKFwiQ29kZWMuX2VuY29kZVByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGNvbW1hbmQsIFwiY29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZC5wbUlkLCBcImNvbW1hbmQucG1JZFwiKTtcblxuICAgICAgICBsZXQganNvbkNvbW1hbmQgPSB7fTtcbiAgICAgICAganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJsXCIgLyogSUQgKi9dXSA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wic1wiIC8qIFBSRVNFTlRBVElPTl9NT0RFTF9ERUxFVEVEX0NPTU1BTkRfSUQgKi9dO1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcInFcIiAvKiBQTV9JRCAqL11dID0gY29tbWFuZC5wbUlkO1xuICAgICAgICByZXR1cm4ganNvbkNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9kZWNvZGVQcmVzZW50YXRpb25Nb2RlbERlbGV0ZWRDb21tYW5kKGpzb25Db21tYW5kKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKShcIkNvZGVjLl9kZWNvZGVQcmVzZW50YXRpb25Nb2RlbERlbGV0ZWRDb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShqc29uQ29tbWFuZCwgXCJqc29uQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoanNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJxXCIgLyogUE1fSUQgKi9dXSwgXCJqc29uQ29tbWFuZFtQTV9JRF1cIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xNF9faW1wbF9wcmVzZW50YXRpb25Nb2RlbERlbGV0ZWRDb21tYW5kX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgY29tbWFuZC5wbUlkID0ganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJxXCIgLyogUE1fSUQgKi9dXTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9lbmNvZGVTdGFydExvbmdQb2xsQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKShcIkNvZGVjLl9lbmNvZGVTdGFydExvbmdQb2xsQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29tbWFuZCwgXCJjb21tYW5kXCIpO1xuXG4gICAgICAgIGxldCBqc29uQ29tbWFuZCA9IHt9O1xuICAgICAgICBqc29uQ29tbWFuZFtfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImxcIiAvKiBJRCAqL11dID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJ0XCIgLyogU1RBUlRfTE9OR19QT0xMX0NPTU1BTkRfSUQgKi9dO1xuICAgICAgICByZXR1cm4ganNvbkNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9kZWNvZGVTdGFydExvbmdQb2xsQ29tbWFuZChqc29uQ29tbWFuZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoXCJDb2RlYy5fZGVjb2RlU3RhcnRMb25nUG9sbENvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGpzb25Db21tYW5kLCBcImpzb25Db21tYW5kXCIpO1xuXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTVfX2ltcGxfc3RhcnRMb25nUG9sbENvbW1hbmRfX1tcImFcIiAvKiBkZWZhdWx0ICovXSgpO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2VuY29kZVZhbHVlQ2hhbmdlZENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoXCJDb2RlYy5lbmNvZGVWYWx1ZUNoYW5nZWRDb21tYW5kXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb21tYW5kLCBcImNvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGNvbW1hbmQuYXR0cmlidXRlSWQsIFwiY29tbWFuZC5hdHRyaWJ1dGVJZFwiKTtcblxuICAgICAgICBsZXQganNvbkNvbW1hbmQgPSB7fTtcbiAgICAgICAganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJsXCIgLyogSUQgKi9dXSA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1widlwiIC8qIFZBTFVFX0NIQU5HRURfQ09NTUFORF9JRCAqL107XG4gICAgICAgIGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiYVwiIC8qIEFUVFJJQlVURV9JRCAqL11dID0gY29tbWFuZC5hdHRyaWJ1dGVJZDtcbiAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoY29tbWFuZC5uZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1widVwiIC8qIFZBTFVFICovXV0gPSBjb21tYW5kLm5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBqc29uQ29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RlY29kZVZhbHVlQ2hhbmdlZENvbW1hbmQoanNvbkNvbW1hbmQpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKFwiQ29kZWMuZGVjb2RlVmFsdWVDaGFuZ2VkQ29tbWFuZFwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoanNvbkNvbW1hbmQsIFwianNvbkNvbW1hbmRcIik7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiYVwiIC8qIEFUVFJJQlVURV9JRCAqL11dLCBcImpzb25Db21tYW5kW0FUVFJJQlVURV9JRF1cIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19pbXBsX3ZhbHVlQ2hhbmdlZENvbW1hbmRfX1tcImFcIiAvKiBkZWZhdWx0ICovXSgpO1xuICAgICAgICBjb21tYW5kLmF0dHJpYnV0ZUlkID0ganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJhXCIgLyogQVRUUklCVVRFX0lEICovXV07XG4gICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGpzb25Db21tYW5kW19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1widVwiIC8qIFZBTFVFICovXV0pKSB7XG4gICAgICAgICAgICBjb21tYW5kLm5ld1ZhbHVlID0ganNvbkNvbW1hbmRbX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJ1XCIgLyogVkFMVUUgKi9dXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbW1hbmQubmV3VmFsdWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBlbmNvZGUoY29tbWFuZHMpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKFwiQ29kZWMuZW5jb2RlXCIpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb21tYW5kcywgXCJjb21tYW5kc1wiKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShjb21tYW5kcy5tYXAoKGNvbW1hbmQpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImJcIiAvKiBBVFRSSUJVVEVfTUVUQURBVEFfQ0hBTkdFRF9DT01NQU5EX0lEICovXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9lbmNvZGVBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImNcIiAvKiBDQUxMX0FDVElPTl9DT01NQU5EX0lEICovXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9lbmNvZGVDYWxsQWN0aW9uQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJkXCIgLyogQ0hBTkdFX0FUVFJJQlVURV9NRVRBREFUQV9DT01NQU5EX0lEICovXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9lbmNvZGVDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQuaWQgPT09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiZlwiIC8qIENSRUFURV9DT05URVhUX0NPTU1BTkRfSUQgKi9dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2VuY29kZUNyZWF0ZUNvbnRleHRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImdcIiAvKiBDUkVBVEVfQ09OVFJPTExFUl9DT01NQU5EX0lEICovXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9lbmNvZGVDcmVhdGVDb250cm9sbGVyQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJoXCIgLyogQ1JFQVRFX1BSRVNFTlRBVElPTl9NT0RFTF9DT01NQU5EX0lEICovXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9lbmNvZGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQuaWQgPT09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wiaVwiIC8qIERFTEVURV9QUkVTRU5UQVRJT05fTU9ERUxfQ09NTUFORF9JRCAqL10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZW5jb2RlRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImpcIiAvKiBERVNUUk9ZX0NPTlRFWFRfQ09NTUFORF9JRCAqL10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZW5jb2RlRGVzdHJveUNvbnRleHRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImtcIiAvKiBERVNUUk9ZX0NPTlRST0xMRVJfQ09NTUFORF9JRCAqL10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZW5jb2RlRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcIm1cIiAvKiBJTlRFUlJVUFRfTE9OR19QT0xMX0NPTU1BTkRfSUQgKi9dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2VuY29kZUludGVycnVwdExvbmdQb2xsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJzXCIgLyogUFJFU0VOVEFUSU9OX01PREVMX0RFTEVURURfQ09NTUFORF9JRCAqL10pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZW5jb2RlUHJlc2VudGF0aW9uTW9kZWxEZWxldGVkQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJ0XCIgLyogU1RBUlRfTE9OR19QT0xMX0NPTU1BTkRfSUQgKi9dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2VuY29kZVN0YXJ0TG9uZ1BvbGxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcInZcIiAvKiBWQUxVRV9DSEFOR0VEX0NPTU1BTkRfSUQgKi9dKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2VuY29kZVZhbHVlQ2hhbmdlZENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzE2X19jb2RlY0Vycm9yX19bXCJhXCIgLyogZGVmYXVsdCAqL10oJ0NvbW1hbmQgb2YgdHlwZSAnICsgY29tbWFuZC5pZCArICcgY2FuIG5vdCBiZSBoYW5kbGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVjb2RlKHRyYW5zbWl0dGVkKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKShcIkNvZGVjLmRlY29kZVwiKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkodHJhbnNtaXR0ZWQsIFwidHJhbnNtaXR0ZWRcIik7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc21pdHRlZCA9PT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImtcIiAvKiBKU19TVFJJTkdfVFlQRSAqL10pIHtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRyYW5zbWl0dGVkKS5tYXAoZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZC5pZCA9PT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJiXCIgLyogQVRUUklCVVRFX01FVEFEQVRBX0NIQU5HRURfQ09NTUFORF9JRCAqL10pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RlY29kZUF0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImNcIiAvKiBDQUxMX0FDVElPTl9DT01NQU5EX0lEICovXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZGVjb2RlQ2FsbEFjdGlvbkNvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImRcIiAvKiBDSEFOR0VfQVRUUklCVVRFX01FVEFEQVRBX0NPTU1BTkRfSUQgKi9dKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9kZWNvZGVDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImZcIiAvKiBDUkVBVEVfQ09OVEVYVF9DT01NQU5EX0lEICovXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZGVjb2RlQ3JlYXRlQ29udGV4dENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImdcIiAvKiBDUkVBVEVfQ09OVFJPTExFUl9DT01NQU5EX0lEICovXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZGVjb2RlQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImhcIiAvKiBDUkVBVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQgKi9dKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9kZWNvZGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImlcIiAvKiBERUxFVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQgKi9dKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9kZWNvZGVEZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcImpcIiAvKiBERVNUUk9ZX0NPTlRFWFRfQ09NTUFORF9JRCAqL10pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RlY29kZURlc3Ryb3lDb250ZXh0Q29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQuaWQgPT09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZENvbnN0YW50c19fW1wia1wiIC8qIERFU1RST1lfQ09OVFJPTExFUl9DT01NQU5EX0lEICovXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZGVjb2RlRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJtXCIgLyogSU5URVJSVVBUX0xPTkdfUE9MTF9DT01NQU5EX0lEICovXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZGVjb2RlSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJzXCIgLyogUFJFU0VOVEFUSU9OX01PREVMX0RFTEVURURfQ09NTUFORF9JRCAqL10pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RlY29kZVByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRDb25zdGFudHNfX1tcInRcIiAvKiBTVEFSVF9MT05HX1BPTExfQ09NTUFORF9JRCAqL10pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RlY29kZVN0YXJ0TG9uZ1BvbGxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kQ29uc3RhbnRzX19bXCJ2XCIgLyogVkFMVUVfQ0hBTkdFRF9DT01NQU5EX0lEICovXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZGVjb2RlVmFsdWVDaGFuZ2VkQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xNl9fY29kZWNFcnJvcl9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKCdDb21tYW5kIG9mIHR5cGUgJyArIGNvbW1hbmQuaWQgKyAnIGNhbiBub3QgYmUgaGFuZGxlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTZfX2NvZGVjRXJyb3JfX1tcImFcIiAvKiBkZWZhdWx0ICovXSgnQ2FuIG5vdCBkZWNvZGUgZGF0YSB0aGF0IGlzIG5vdCBvZiB0eXBlIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgfVxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBDb2RlYztcblxuXG4vKioqLyB9KSxcbi8qIDI0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuY2xhc3MgRXZlbnRCdXMge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycyA9IFtdO1xuICAgIH1cblxuICAgIG9uRXZlbnQoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgdHJpZ2dlcihldmVudCkge1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMuZm9yRWFjaChoYW5kbGUgPT4gaGFuZGxlKGV2ZW50KSk7XG4gICAgfVxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBFdmVudEJ1cztcblxuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbl9fd2VicGFja19yZXF1aXJlX18oMjYpO1xuX193ZWJwYWNrX3JlcXVpcmVfXygyNyk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKDM2KTtcbl9fd2VicGFja19yZXF1aXJlX18oMTAxKTtcbl9fd2VicGFja19yZXF1aXJlX18oMTA5KTtcbl9fd2VicGFja19yZXF1aXJlX18oMTExKTtcbl9fd2VicGFja19yZXF1aXJlX18oMTEyKTtcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KS5NYXA7XG5cblxuLyoqKi8gfSksXG4vKiAyNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cblxuLyoqKi8gfSksXG4vKiAyNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyICRhdCA9IF9fd2VicGFja19yZXF1aXJlX18oODgpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDMwKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuXG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAyOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMzAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBMSUJSQVJZID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1OCk7XG52YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkxKTtcbnZhciBoaWRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcbnZhciBJdGVyYXRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbnZhciAkaXRlckNyZWF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oOTIpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDk4KTtcbnZhciBJVEVSQVRPUiA9IF9fd2VicGFja19yZXF1aXJlX18oNCkoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gKCFCVUdHWSAmJiAkbmF0aXZlKSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqKi8gfSksXG4vKiAzMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAzMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MSk7XG52YXIgZGVmaW5lZCA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDMzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqKi8gfSksXG4vKiAzNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgc2hhcmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MikoJ2tleXMnKTtcbnZhciB1aWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDM1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMzYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXyg5OSk7XG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBoaWRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciBJdGVyYXRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbnZhciBUT19TVFJJTkdfVEFHID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSgndG9TdHJpbmdUYWcnKTtcblxudmFyIERPTUl0ZXJhYmxlcyA9ICgnQ1NTUnVsZUxpc3QsQ1NTU3R5bGVEZWNsYXJhdGlvbixDU1NWYWx1ZUxpc3QsQ2xpZW50UmVjdExpc3QsRE9NUmVjdExpc3QsRE9NU3RyaW5nTGlzdCwnICtcbiAgJ0RPTVRva2VuTGlzdCxEYXRhVHJhbnNmZXJJdGVtTGlzdCxGaWxlTGlzdCxIVE1MQWxsQ29sbGVjdGlvbixIVE1MQ29sbGVjdGlvbixIVE1MRm9ybUVsZW1lbnQsSFRNTFNlbGVjdEVsZW1lbnQsJyArXG4gICdNZWRpYUxpc3QsTWltZVR5cGVBcnJheSxOYW1lZE5vZGVNYXAsTm9kZUxpc3QsUGFpbnRSZXF1ZXN0TGlzdCxQbHVnaW4sUGx1Z2luQXJyYXksU1ZHTGVuZ3RoTGlzdCxTVkdOdW1iZXJMaXN0LCcgK1xuICAnU1ZHUGF0aFNlZ0xpc3QsU1ZHUG9pbnRMaXN0LFNWR1N0cmluZ0xpc3QsU1ZHVHJhbnNmb3JtTGlzdCxTb3VyY2VCdWZmZXJMaXN0LFN0eWxlU2hlZXRMaXN0LFRleHRUcmFja0N1ZUxpc3QsJyArXG4gICdUZXh0VHJhY2tMaXN0LFRvdWNoTGlzdCcpLnNwbGl0KCcsJyk7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgRE9NSXRlcmFibGVzLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gRE9NSXRlcmFibGVzW2ldO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYgKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn1cblxuXG4vKioqLyB9KSxcbi8qIDM3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBoaWRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHtcbiAgICBpZiAoc2FmZSAmJiB0YXJnZXRba2V5XSkgdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDM4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMzkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbnZhciBUQUcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA0MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA0MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDI2KTtcbl9fd2VicGFja19yZXF1aXJlX18oMjcpO1xuX193ZWJwYWNrX3JlcXVpcmVfXygzNik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKDEyMCk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKDEyNCk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKDEyNSk7XG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNykuUHJvbWlzZTtcblxuXG4vKioqLyB9KSxcbi8qIDQyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDQzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZENvbnN0YW50c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuY2xhc3MgVmFsdWVDaGFuZ2VkQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZENvbnN0YW50c19fW1widlwiIC8qIFZBTFVFX0NIQU5HRURfQ09NTUFORF9JRCAqL107XG4gICAgfVxuXG4gICAgaW5pdChhdHRyaWJ1dGVJZCwgbmV3VmFsdWUpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdWYWx1ZUNoYW5nZWRDb21tYW5kLmluaXQoKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShhdHRyaWJ1dGVJZCwgJ2F0dHJpYnV0ZUlkJyk7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVJZCA9IGF0dHJpYnV0ZUlkO1xuICAgICAgICB0aGlzLm5ld1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBWYWx1ZUNoYW5nZWRDb21tYW5kO1xuXG5cbi8qKiovIH0pLFxuLyogNDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQ29uc3RhbnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG5jbGFzcyBBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQ29uc3RhbnRzX19bXCJiXCIgLyogQVRUUklCVVRFX01FVEFEQVRBX0NIQU5HRURfQ09NTUFORF9JRCAqL107XG4gICAgfVxuXG4gICAgaW5pdChhdHRyaWJ1dGVJZCwgbWV0YWRhdGFOYW1lLCB2YWx1ZSkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0F0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZENvbW1hbmQuaW5pdCgpJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGF0dHJpYnV0ZUlkLCAnYXR0cmlidXRlSWQnKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkobWV0YWRhdGFOYW1lLCAnbWV0YWRhdGFOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVJZCA9IGF0dHJpYnV0ZUlkO1xuICAgICAgICB0aGlzLm1ldGFkYXRhTmFtZSA9IG1ldGFkYXRhTmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZDtcblxuXG4vKioqLyB9KSxcbi8qIDQ1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZENvbnN0YW50c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuY2xhc3MgQ2FsbEFjdGlvbkNvbW1hbmQge1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQ29uc3RhbnRzX19bXCJjXCIgLyogQ0FMTF9BQ1RJT05fQ09NTUFORF9JRCAqL107XG4gICAgfVxuXG4gICAgaW5pdChjb250cm9sbGVyaWQsIGFjdGlvbk5hbWUsIHBhcmFtcykge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0NyZWF0ZUNvbnRyb2xsZXJDb21tYW5kLmluaXQoKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb250cm9sbGVyaWQsICdjb250cm9sbGVyaWQnKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoYWN0aW9uTmFtZSwgJ2FjdGlvbk5hbWUnKTtcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJpZCA9IGNvbnRyb2xsZXJpZDtcbiAgICAgICAgdGhpcy5hY3Rpb25OYW1lID0gYWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gICAgfVxuXG59XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9IENhbGxBY3Rpb25Db21tYW5kO1xuXG5cbi8qKiovIH0pLFxuLyogNDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQ29uc3RhbnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG5jbGFzcyBDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2NvbW1hbmRDb25zdGFudHNfX1tcImRcIiAvKiBDSEFOR0VfQVRUUklCVVRFX01FVEFEQVRBX0NPTU1BTkRfSUQgKi9dO1xuICAgIH1cblxuICAgIGluaXQoYXR0cmlidXRlSWQsIG1ldGFkYXRhTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmQuaW5pdCgpJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGF0dHJpYnV0ZUlkLCAnYXR0cmlidXRlSWQnKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkobWV0YWRhdGFOYW1lLCAnbWV0YWRhdGFOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVJZCA9IGF0dHJpYnV0ZUlkO1xuICAgICAgICB0aGlzLm1ldGFkYXRhTmFtZSA9IG1ldGFkYXRhTmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kO1xuXG5cbi8qKiovIH0pLFxuLyogNDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQ29uc3RhbnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG5cbmNsYXNzIENyZWF0ZUNvbnRleHRDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQ29uc3RhbnRzX19bXCJmXCIgLyogQ1JFQVRFX0NPTlRFWFRfQ09NTUFORF9JRCAqL107XG4gICAgfVxuXG59XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9IENyZWF0ZUNvbnRleHRDb21tYW5kO1xuXG5cbi8qKiovIH0pLFxuLyogNDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQ29uc3RhbnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG5jbGFzcyBDcmVhdGVDb250cm9sbGVyQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZENvbnN0YW50c19fW1wiZ1wiIC8qIENSRUFURV9DT05UUk9MTEVSX0NPTU1BTkRfSUQgKi9dO1xuICAgIH1cblxuICAgIGluaXQoY29udHJvbGxlck5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0NyZWF0ZUNvbnRyb2xsZXJDb21tYW5kLmluaXQoKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb250cm9sbGVyTmFtZSwgJ2NvbnRyb2xsZXJOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVyTmFtZSA9IGNvbnRyb2xsZXJOYW1lO1xuICAgICAgICB0aGlzLnBhcmVudENvbnRyb2xsZXJJZCA9IHBhcmVudENvbnRyb2xsZXJJZDtcbiAgICB9XG5cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQ7XG5cblxuLyoqKi8gfSksXG4vKiA0OSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2NvbW1hbmRDb25zdGFudHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbmNsYXNzIENyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZENvbnN0YW50c19fW1wiaFwiIC8qIENSRUFURV9QUkVTRU5UQVRJT05fTU9ERUxfQ09NTUFORF9JRCAqL107XG4gICAgfVxuXG4gICAgaW5pdChwcmVzZW50YXRpb25Nb2RlbCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZC5pbml0KCknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkocHJlc2VudGF0aW9uTW9kZWwsICdwcmVzZW50YXRpb25Nb2RlbCcpO1xuXG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICB0aGlzLmNsaWVudFNpZGVPbmx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG1JZCA9IHByZXNlbnRhdGlvbk1vZGVsLmlkO1xuICAgICAgICB0aGlzLnBtVHlwZSA9IHByZXNlbnRhdGlvbk1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZTtcbiAgICAgICAgdmFyIGNvbW1hbmQgPSB0aGlzO1xuICAgICAgICBwcmVzZW50YXRpb25Nb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgY29tbWFuZC5hdHRyaWJ1dGVzLnB1c2goe1xuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogYXR0ci5wcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IGF0dHIuaWQsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGF0dHIuZ2V0VmFsdWUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kO1xuXG5cbi8qKiovIH0pLFxuLyogNTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQ29uc3RhbnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG5jbGFzcyBEZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2NvbW1hbmRDb25zdGFudHNfX1tcImlcIiAvKiBERUxFVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQgKi9dO1xuICAgIH1cblxuICAgIGluaXQocG1JZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0RlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZC5pbml0KCknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkocG1JZCwgJ3BtSWQnKTtcblxuICAgICAgICB0aGlzLnBtSWQgPSBwbUlkO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kO1xuXG5cblxuLyoqKi8gfSksXG4vKiA1MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2NvbW1hbmRDb25zdGFudHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cblxuY2xhc3MgRGVzdHJveUNvbnRleHRDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQ29uc3RhbnRzX19bXCJqXCIgLyogREVTVFJPWV9DT05URVhUX0NPTU1BTkRfSUQgKi9dO1xuICAgIH1cblxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBEZXN0cm95Q29udGV4dENvbW1hbmQ7XG5cblxuLyoqKi8gfSksXG4vKiA1MiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2NvbW1hbmRDb25zdGFudHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbmNsYXNzIERlc3Ryb3lDb250cm9sbGVyQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZENvbnN0YW50c19fW1wia1wiIC8qIERFU1RST1lfQ09OVFJPTExFUl9DT01NQU5EX0lEICovXTtcbiAgICB9XG5cbiAgICBpbml0KGNvbnRyb2xsZXJJZCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0Rlc3Ryb3lDb250cm9sbGVyQ29tbWFuZC5pbml0KCknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29udHJvbGxlcklkLCAnY29udHJvbGxlcklkJyk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVySWQgPSBjb250cm9sbGVySWQ7XG4gICAgfVxuXG59XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9IERlc3Ryb3lDb250cm9sbGVyQ29tbWFuZDtcblxuXG4vKioqLyB9KSxcbi8qIDUzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZENvbnN0YW50c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXG5jbGFzcyBJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2NvbW1hbmRDb25zdGFudHNfX1tcIm1cIiAvKiBJTlRFUlJVUFRfTE9OR19QT0xMX0NPTU1BTkRfSUQgKi9dO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kO1xuXG5cbi8qKiovIH0pLFxuLyogNTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQ29uc3RhbnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG5jbGFzcyBQcmVzZW50YXRpb25Nb2RlbERlbGV0ZWRDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQ29uc3RhbnRzX19bXCJzXCIgLyogUFJFU0VOVEFUSU9OX01PREVMX0RFTEVURURfQ09NTUFORF9JRCAqL107XG4gICAgfVxuXG4gICAgaW5pdChwbUlkKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnUHJlc2VudGF0aW9uTW9kZWxEZWxldGVkQ29tbWFuZC5pbml0KCknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkocG1JZCwgJ3BtSWQnKTtcblxuICAgICAgICB0aGlzLnBtSWQgPSBwbUlkO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gUHJlc2VudGF0aW9uTW9kZWxEZWxldGVkQ29tbWFuZDtcblxuXG4vKioqLyB9KSxcbi8qIDU1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZENvbnN0YW50c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXG5jbGFzcyBTdGFydExvbmdQb2xsQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZENvbnN0YW50c19fW1widFwiIC8qIFNUQVJUX0xPTkdfUE9MTF9DT01NQU5EX0lEICovXTtcbiAgICB9XG59XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9IFN0YXJ0TG9uZ1BvbGxDb21tYW5kO1xuXG5cblxuLyoqKi8gfSksXG4vKiA1NiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2V2ZW50QnVzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcblxuXG52YXIgcHJlc2VudGF0aW9uTW9kZWxJbnN0YW5jZUNvdW50ID0gMDsgLy8gdG9kbyBkazogY29uc2lkZXIgbWFraW5nIHRoaXMgc3RhdGljIGluIGNsYXNzXG5cbmNsYXNzIENsaWVudFByZXNlbnRhdGlvbk1vZGVsIHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgcHJlc2VudGF0aW9uTW9kZWxUeXBlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbFR5cGUgPSBwcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICB0aGlzLmNsaWVudFNpZGVPbmx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBpZCAhPT0gJ3VuZGVmaW5lZCcgJiYgaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pZCA9IChwcmVzZW50YXRpb25Nb2RlbEluc3RhbmNlQ291bnQrKykudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmludmFsaWRCdXMgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19ldmVudEJ1c19fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKCk7XG4gICAgICAgIHRoaXMuZGlydHlWYWx1ZUNoYW5nZUJ1cyA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2V2ZW50QnVzX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICB9XG4gICAgLy8gdG9kbyBkazogYWxpZ24gd2l0aCBKYXZhIHZlcnNpb246IG1vdmUgdG8gQ2xpZW50RG9scGhpbiBhbmQgYXV0by1hZGQgdG8gbW9kZWwgc3RvcmVcbiAgICAvKiogYSBjb3B5IGNvbnN0cnVjdG9yIGZvciBhbnl0aGluZyBidXQgSURzLiBQZXIgZGVmYXVsdCwgY29waWVzIGFyZSBjbGllbnQgc2lkZSBvbmx5LCBubyBhdXRvbWF0aWMgdXBkYXRlIGFwcGxpZXMuICovXG4gICAgY29weSgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDbGllbnRQcmVzZW50YXRpb25Nb2RlbChudWxsLCB0aGlzLnByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgICAgIHJlc3VsdC5jbGllbnRTaWRlT25seSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0QXR0cmlidXRlcygpLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZUNvcHkgPSBhdHRyaWJ1dGUuY29weSgpO1xuICAgICAgICAgICAgcmVzdWx0LmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVDb3B5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vYWRkIGFycmF5IG9mIGF0dHJpYnV0ZXNcbiAgICBhZGRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzIHx8IGF0dHJpYnV0ZXMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGRBdHRyaWJ1dGUoYXR0cmlidXRlKSB7XG4gICAgICAgIGlmICghYXR0cmlidXRlIHx8ICh0aGlzLmF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpID4gLTEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhbHJlYWR5IGlzIGFuIGF0dHJpYnV0ZSB3aXRoIHByb3BlcnR5IG5hbWU6IFwiICsgYXR0cmlidXRlLnByb3BlcnR5TmFtZVxuICAgICAgICAgICAgICAgICsgXCIgaW4gcHJlc2VudGF0aW9uIG1vZGVsIHdpdGggaWQ6IFwiICsgdGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSAmJiB0aGlzLmZpbmRBdHRyaWJ1dGVCeVF1YWxpZmllcihhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhbHJlYWR5IGlzIGFuIGF0dHJpYnV0ZSB3aXRoIHF1YWxpZmllcjogXCIgKyBhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKClcbiAgICAgICAgICAgICAgICArIFwiIGluIHByZXNlbnRhdGlvbiBtb2RlbCB3aXRoIGlkOiBcIiArIHRoaXMuaWQpO1xuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZS5zZXRQcmVzZW50YXRpb25Nb2RlbCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgYXR0cmlidXRlLm9uVmFsdWVDaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnZhbGlkQnVzLnRyaWdnZXIoeyBzb3VyY2U6IHRoaXMgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkludmFsaWRhdGVkKGhhbmRsZUludmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy5pbnZhbGlkQnVzLm9uRXZlbnQoaGFuZGxlSW52YWxpZGF0ZSk7XG4gICAgfVxuICAgIC8qKiByZXR1cm5zIGEgY29weSBvZiB0aGUgaW50ZXJuYWwgc3RhdGUgKi9cbiAgICBnZXRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNsaWNlKDApO1xuICAgIH1cbiAgICBnZXRBdChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG4gICAgfVxuICAgIGZpbmRBbGxBdHRyaWJ1dGVzQnlQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUgPT0gcHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgodGhpcy5hdHRyaWJ1dGVzW2ldLnByb3BlcnR5TmFtZSA9PSBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZmluZEF0dHJpYnV0ZUJ5UXVhbGlmaWVyKHF1YWxpZmllcikge1xuICAgICAgICBpZiAoIXF1YWxpZmllcilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlc1tpXS5nZXRRdWFsaWZpZXIoKSA9PSBxdWFsaWZpZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmaW5kQXR0cmlidXRlQnlJZChpZCkge1xuICAgICAgICBpZiAoIWlkKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3luY1dpdGgoc291cmNlUHJlc2VudGF0aW9uTW9kZWwpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKHRhcmdldEF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIHNvdXJjZUF0dHJpYnV0ZSA9IHNvdXJjZVByZXNlbnRhdGlvbk1vZGVsLmdldEF0KHRhcmdldEF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZS5zeW5jV2l0aChzb3VyY2VBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9IENsaWVudFByZXNlbnRhdGlvbk1vZGVsO1xuXG5cblxuLyoqKi8gfSksXG4vKiA1NyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJhXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gTG9nTGV2ZWw7IH0pO1xuY29uc3QgTG9nTGV2ZWwgPSB7XG4gICAgTk9ORTogeyBuYW1lOiAnTk9ORScsIHRleHQ6ICdbTk9ORSBdJywgbGV2ZWw6IDAgfSxcbiAgICBBTEw6IHsgbmFtZTogJ0FMTCcsIHRleHQ6ICdbQUxMICBdJywgbGV2ZWw6IDEwMCB9LFxuICAgIFRSQUNFOiB7IG5hbWU6ICdUUkFDRScsIHRleHQ6ICdbVFJBQ0VdJywgbGV2ZWw6IDUgfSxcbiAgICBERUJVRzogeyBuYW1lOiAnREVCVUcnLCB0ZXh0OiAnW0RFQlVHXScsIGxldmVsOiA0IH0sXG4gICAgSU5GTzogeyBuYW1lOiAnSU5GTycsIHRleHQ6ICdbSU5GTyBdJywgbGV2ZWw6IDMgfSxcbiAgICBXQVJOOiB7IG5hbWU6ICdXQVJOJywgdGV4dDogJ1tXQVJOIF0nLCBsZXZlbDogMiB9LFxuICAgIEVSUk9SOiB7IG5hbWU6ICdFUlJPUicsIHRleHQ6ICdbRVJST1JdJywgbGV2ZWw6IDEgfSxcbn07XG5cblxuXG4vKioqLyB9KSxcbi8qIDU4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gdHJ1ZTtcblxuXG4vKioqLyB9KSxcbi8qIDU5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA2MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xudmFyIGRQcyA9IF9fd2VicGFja19yZXF1aXJlX18oOTMpO1xudmFyIGVudW1CdWdLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2Myk7XG52YXIgSUVfUFJPVE8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgX193ZWJwYWNrX3JlcXVpcmVfXyg2NCkuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDYyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDYzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuXG5cbi8qKiovIH0pLFxuLyogNjQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKiovIH0pLFxuLyogNjUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDY2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNjcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkUCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApLmY7XG52YXIgY3JlYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MCk7XG52YXIgcmVkZWZpbmVBbGwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM3KTtcbnZhciBjdHggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIGFuSW5zdGFuY2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KTtcbnZhciBmb3JPZiA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xudmFyICRpdGVyRGVmaW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCk7XG52YXIgc3RlcCA9IF9fd2VicGFja19yZXF1aXJlX18oNjYpO1xudmFyIHNldFNwZWNpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDY4KTtcbnZhciBERVNDUklQVE9SUyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xudmFyIGZhc3RLZXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDY5KS5mYXN0S2V5O1xudmFyIHZhbGlkYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MCk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcbi8qIDY4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBjb3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBkUCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xudmFyIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG52YXIgU1BFQ0lFUyA9IF9fd2VicGFja19yZXF1aXJlX18oNCkoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDY5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBNRVRBID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNSkoJ21ldGEnKTtcbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG52YXIgc2V0RGVzYyA9IF9fd2VicGFja19yZXF1aXJlX18oMTApLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIV9fd2VicGFja19yZXF1aXJlX18oMTkpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbiAoaXQpIHtcbiAgc2V0RGVzYyhpdCwgTUVUQSwgeyB2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbiAoaXQsIGNyZWF0ZSkge1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZiAoIWhhcyhpdCwgTUVUQSkpIHtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmICghaXNFeHRlbnNpYmxlKGl0KSkgcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKSBzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogTUVUQSxcbiAgTkVFRDogZmFsc2UsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWs6IGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTtcblxuXG4vKioqLyB9KSxcbi8qIDcwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBtZXRhID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2OSk7XG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcbnZhciBoaWRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciByZWRlZmluZUFsbCA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpO1xudmFyIGZvck9mID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG52YXIgYW5JbnN0YW5jZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpO1xudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjApO1xudmFyIGRQID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCkuZjtcbnZhciBlYWNoID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMDUpKDApO1xudmFyIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIGlmICghREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKSB7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0YXJnZXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSwgJ19jJyk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZSgpO1xuICAgICAgaWYgKGl0ZXJhYmxlICE9IHVuZGVmaW5lZCkgZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICBlYWNoKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcyx0b0pTT04nLnNwbGl0KCcsJyksIGZ1bmN0aW9uIChLRVkpIHtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZiAoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpIGhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZiAoIUlTX0FEREVSICYmIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpKSByZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIElTX1dFQUsgfHwgZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmICghSVNfV0VBSykgY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDcxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG52YXIgZnJvbSA9IF9fd2VicGFja19yZXF1aXJlX18oMTEwKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpIHtcbiAgICBpZiAoY2xhc3NvZih0aGlzKSAhPSBOQU1FKSB0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDcyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vXG52YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTExFQ1RJT04pIHtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsIENPTExFQ1RJT04sIHsgb2Y6IGZ1bmN0aW9uIG9mKCkge1xuICAgIHZhciBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBBID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gICAgd2hpbGUgKGxlbmd0aC0tKSBBW2xlbmd0aF0gPSBhcmd1bWVudHNbbGVuZ3RoXTtcbiAgICByZXR1cm4gbmV3IHRoaXMoQSk7XG4gIH0gfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNzMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vcHJvcG9zYWwtc2V0bWFwLW9mZnJvbS9cbnZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcbnZhciBjdHggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIGZvck9mID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENPTExFQ1RJT04pIHtcbiAgJGV4cG9ydCgkZXhwb3J0LlMsIENPTExFQ1RJT04sIHsgZnJvbTogZnVuY3Rpb24gZnJvbShzb3VyY2UgLyogLCBtYXBGbiwgdGhpc0FyZyAqLykge1xuICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50c1sxXTtcbiAgICB2YXIgbWFwcGluZywgQSwgbiwgY2I7XG4gICAgYUZ1bmN0aW9uKHRoaXMpO1xuICAgIG1hcHBpbmcgPSBtYXBGbiAhPT0gdW5kZWZpbmVkO1xuICAgIGlmIChtYXBwaW5nKSBhRnVuY3Rpb24obWFwRm4pO1xuICAgIGlmIChzb3VyY2UgPT0gdW5kZWZpbmVkKSByZXR1cm4gbmV3IHRoaXMoKTtcbiAgICBBID0gW107XG4gICAgaWYgKG1hcHBpbmcpIHtcbiAgICAgIG4gPSAwO1xuICAgICAgY2IgPSBjdHgobWFwRm4sIGFyZ3VtZW50c1syXSwgMik7XG4gICAgICBmb3JPZihzb3VyY2UsIGZhbHNlLCBmdW5jdGlvbiAobmV4dEl0ZW0pIHtcbiAgICAgICAgQS5wdXNoKGNiKG5leHRJdGVtLCBuKyspKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JPZihzb3VyY2UsIGZhbHNlLCBBLnB1c2gsIEEpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IHRoaXMoQSk7XG4gIH0gfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNzQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbnZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcbnZhciBTUEVDSUVTID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDc1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjdHggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIGludm9rZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTIxKTtcbnZhciBodG1sID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2NCk7XG52YXIgY2VsID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSk7XG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAoX193ZWJwYWNrX3JlcXVpcmVfXygxNikocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDc2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG5cblxuLyoqKi8gfSksXG4vKiA3NyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQyKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDc4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbl9fd2VicGFja19yZXF1aXJlX18oMjYpO1xuX193ZWJwYWNrX3JlcXVpcmVfXygyNyk7XG5fX3dlYnBhY2tfcmVxdWlyZV9fKDM2KTtcbl9fd2VicGFja19yZXF1aXJlX18oMTI5KTtcbl9fd2VicGFja19yZXF1aXJlX18oMTMwKTtcbl9fd2VicGFja19yZXF1aXJlX18oMTMxKTtcbl9fd2VicGFja19yZXF1aXJlX18oMTMyKTtcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KS5TZXQ7XG5cblxuLyoqKi8gfSksXG4vKiA3OSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICBmdW5jdGlvbiBvbigpIHtcbiAgICBzZWxmLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA4MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfZXhwb3J0c19fLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2NsaWVudENvbnRleHRGYWN0b3J5X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2xvZ2dpbmdfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG4vKiBoYXJtb255IHJlZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJjcmVhdGVDbGllbnRDb250ZXh0XCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jbGllbnRDb250ZXh0RmFjdG9yeV9fW1wiYlwiXTsgfSk7XG4vKiBoYXJtb255IHJlZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJDbGllbnRDb250ZXh0RmFjdG9yeVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY2xpZW50Q29udGV4dEZhY3RvcnlfX1tcImFcIl07IH0pO1xuLyogaGFybW9ueSByZWV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiTG9nZ2VyRmFjdG9yeVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fbG9nZ2luZ19fW1wiYlwiXTsgfSk7XG4vKiBoYXJtb255IHJlZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJMb2dMZXZlbFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fbG9nZ2luZ19fW1wiYVwiXTsgfSk7XG5cblxuXG5cblxuLyoqKi8gfSksXG4vKiA4MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJiXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gY3JlYXRlQ2xpZW50Q29udGV4dDsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiYVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIENsaWVudENvbnRleHRGYWN0b3J5OyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX29wZW5Eb2xwaGluX2pzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fbG9nZ2luZ19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2Nvbm5lY3Rvcl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19iZWFubWFuYWdlcl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjYpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fY2xhc3NyZXBvX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyNyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X19jb250cm9sbGVybWFuYWdlcl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMjgpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfN19fY2xpZW50Y29udGV4dF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMzQpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fcGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTM1KTtcbi8qIENvcHlyaWdodCAyMDE1IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5cblxuXG5cblxuXG5cblxuXG5cbmNsYXNzIENsaWVudENvbnRleHRGYWN0b3J5IHtcblxuICAgIGNyZWF0ZSh1cmwsIGNvbmZpZyl7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnY29ubmVjdCh1cmwsIGNvbmZpZyknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkodXJsLCAndXJsJyk7XG4gICAgICAgIENsaWVudENvbnRleHRGYWN0b3J5LkxPR0dFUi5pbmZvKCdEb2xwaGluIFBsYXRmb3JtIFZlcnNpb246JyAsIFwiMC4xOC4wXCIpO1xuICAgICAgICBDbGllbnRDb250ZXh0RmFjdG9yeS5MT0dHRVIuZGVidWcoJ0NyZWF0aW5nIGNsaWVudCBjb250ZXh0JywgdXJsLCBjb25maWcpO1xuXG4gICAgICAgIGxldCBidWlsZGVyID0gT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fb3BlbkRvbHBoaW5fanNfX1tcImFcIiAvKiBtYWtlRG9scGhpbiAqL10pKCkudXJsKHVybCkucmVzZXQoZmFsc2UpLnNsYWNrTVMoNCkuc3VwcG9ydENPUlModHJ1ZSkubWF4QmF0Y2hTaXplKE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKTtcbiAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoY29uZmlnKSkge1xuICAgICAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoY29uZmlnLmVycm9ySGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBidWlsZGVyLmVycm9ySGFuZGxlcihjb25maWcuZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGNvbmZpZy5oZWFkZXJzSW5mbykgJiYgT2JqZWN0LmtleXMoY29uZmlnLmhlYWRlcnNJbmZvKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYnVpbGRlci5oZWFkZXJzSW5mbyhjb25maWcuaGVhZGVyc0luZm8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRvbHBoaW4gPSBidWlsZGVyLmJ1aWxkKCk7XG5cbiAgICAgICAgbGV0IHRyYW5zbWl0dGVyID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fcGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXJfX1tcImFcIiAvKiBkZWZhdWx0ICovXSh1cmwsIGNvbmZpZyk7XG4gICAgICAgIHRyYW5zbWl0dGVyLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2xpZW50Q29udGV4dC5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvbHBoaW4uY2xpZW50Q29ubmVjdG9yLnRyYW5zbWl0dGVyID0gdHJhbnNtaXR0ZXI7XG5cbiAgICAgICAgbGV0IGNsYXNzUmVwb3NpdG9yeSA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX2NsYXNzcmVwb19fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKGRvbHBoaW4pO1xuICAgICAgICBsZXQgYmVhbk1hbmFnZXIgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19iZWFubWFuYWdlcl9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKGNsYXNzUmVwb3NpdG9yeSk7XG4gICAgICAgIGxldCBjb25uZWN0b3IgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19jb25uZWN0b3JfX1tcImRcIiAvKiBkZWZhdWx0ICovXSh1cmwsIGRvbHBoaW4sIGNsYXNzUmVwb3NpdG9yeSwgY29uZmlnKTtcbiAgICAgICAgbGV0IGNvbnRyb2xsZXJNYW5hZ2VyID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fY29udHJvbGxlcm1hbmFnZXJfX1tcImFcIiAvKiBkZWZhdWx0ICovXShkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbm5lY3Rvcik7XG5cbiAgICAgICAgbGV0IGNsaWVudENvbnRleHQgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X19jbGllbnRjb250ZXh0X19bXCJhXCIgLyogZGVmYXVsdCAqL10oZG9scGhpbiwgYmVhbk1hbmFnZXIsIGNvbnRyb2xsZXJNYW5hZ2VyLCBjb25uZWN0b3IpO1xuXG4gICAgICAgIENsaWVudENvbnRleHRGYWN0b3J5LkxPR0dFUi5kZWJ1ZygnY2xpZW50Q29udGV4dCBjcmVhdGVkIHdpdGgnLCBjbGllbnRDb250ZXh0KTtcblxuICAgICAgICByZXR1cm4gY2xpZW50Q29udGV4dDtcbiAgICB9XG59XG5cbkNsaWVudENvbnRleHRGYWN0b3J5LkxPR0dFUiA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fbG9nZ2luZ19fW1wiYlwiIC8qIExvZ2dlckZhY3RvcnkgKi9dLmdldExvZ2dlcignQ2xpZW50Q29udGV4dEZhY3RvcnknKTtcblxubGV0IGNyZWF0ZUNsaWVudENvbnRleHQgPSBuZXcgQ2xpZW50Q29udGV4dEZhY3RvcnkoKS5jcmVhdGU7XG5cblxuXG4vKioqLyB9KSxcbi8qIDgyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogdW51c2VkIGhhcm1vbnkgZXhwb3J0IGRvbHBoaW4gKi9cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gbWFrZURvbHBoaW47XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19kb2xwaGluQnVpbGRlcl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4Myk7XG5cblxuZnVuY3Rpb24gZG9scGhpbih1cmwsIHJlc2V0LCBzbGFja01TID0gMzAwKSB7XG4gICAgcmV0dXJuIG1ha2VEb2xwaGluKCkudXJsKHVybCkucmVzZXQocmVzZXQpLnNsYWNrTVMoc2xhY2tNUykuYnVpbGQoKTtcbn1cblxuZnVuY3Rpb24gbWFrZURvbHBoaW4oKSB7XG4gICAgcmV0dXJuIG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2RvbHBoaW5CdWlsZGVyX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbn1cblxuLyoqKi8gfSksXG4vKiA4MyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2NsaWVudENvbm5lY3Rvcl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jbGllbnREb2xwaGluX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExNCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jbGllbnRNb2RlbFN0b3JlX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExNik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19odHRwVHJhbnNtaXR0ZXJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTE4KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX25vVHJhbnNtaXR0ZXJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTE5KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX2xvZ2dpbmdfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblxuXG5cblxuXG5cblxuY2xhc3MgRG9scGhpbkJ1aWxkZXIge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzZXRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2xhY2tNU18gPSAzMDA7XG4gICAgICAgIHRoaXMubWF4QmF0Y2hTaXplXyA9IDUwO1xuICAgICAgICB0aGlzLnN1cHBvcnRDT1JTXyA9IGZhbHNlO1xuICAgIH1cblxuICAgIHVybCh1cmwpIHtcbiAgICAgICAgdGhpcy51cmxfID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXNldChyZXNldCkge1xuICAgICAgICB0aGlzLnJlc2V0XyA9IHJlc2V0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzbGFja01TKHNsYWNrTVMpIHtcbiAgICAgICAgdGhpcy5zbGFja01TXyA9IHNsYWNrTVM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIG1heEJhdGNoU2l6ZShtYXhCYXRjaFNpemUpIHtcbiAgICAgICAgdGhpcy5tYXhCYXRjaFNpemVfID0gbWF4QmF0Y2hTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBzdXBwb3J0Q09SUyhzdXBwb3J0Q09SUykge1xuICAgICAgICB0aGlzLnN1cHBvcnRDT1JTXyA9IHN1cHBvcnRDT1JTO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBlcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyXyA9IGVycm9ySGFuZGxlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgaGVhZGVyc0luZm8oaGVhZGVyc0luZm8pIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzSW5mb18gPSBoZWFkZXJzSW5mbztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgYnVpbGQoKSB7XG4gICAgICAgIGxldCBjbGllbnREb2xwaGluID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY2xpZW50RG9scGhpbl9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKCk7XG4gICAgICAgIGxldCB0cmFuc21pdHRlcjtcbiAgICAgICAgaWYgKHRoaXMudXJsXyAhPSBudWxsICYmIHRoaXMudXJsXy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0cmFuc21pdHRlciA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2h0dHBUcmFuc21pdHRlcl9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKHRoaXMudXJsXywgdGhpcy5yZXNldF8sIFwiVVRGLThcIiwgdGhpcy5lcnJvckhhbmRsZXJfLCB0aGlzLnN1cHBvcnRDT1JTXywgdGhpcy5oZWFkZXJzSW5mb18pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNtaXR0ZXIgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19ub1RyYW5zbWl0dGVyX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgfVxuICAgICAgICBjbGllbnREb2xwaGluLnNldENsaWVudENvbm5lY3RvcihuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jbGllbnRDb25uZWN0b3JfX1tcImFcIiAvKiBkZWZhdWx0ICovXSh0cmFuc21pdHRlciwgY2xpZW50RG9scGhpbiwgdGhpcy5zbGFja01TXywgdGhpcy5tYXhCYXRjaFNpemVfKSk7XG4gICAgICAgIGNsaWVudERvbHBoaW4uc2V0Q2xpZW50TW9kZWxTdG9yZShuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jbGllbnRNb2RlbFN0b3JlX19bXCJhXCIgLyogZGVmYXVsdCAqL10oY2xpZW50RG9scGhpbikpO1xuICAgICAgICBEb2xwaGluQnVpbGRlci5MT0dHRVIuZGVidWcoXCJDbGllbnREb2xwaGluIGluaXRpYWxpemVkXCIsIGNsaWVudERvbHBoaW4sIHRyYW5zbWl0dGVyKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudERvbHBoaW47XG4gICAgfVxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBEb2xwaGluQnVpbGRlcjtcblxuXG5Eb2xwaGluQnVpbGRlci5MT0dHRVIgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfX2xvZ2dpbmdfX1tcImJcIiAvKiBMb2dnZXJGYWN0b3J5ICovXS5nZXRMb2dnZXIoJ0RvbHBoaW5CdWlsZGVyJyk7XG5cbi8qKiovIH0pLFxuLyogODQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kQmF0Y2hlcl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb21tYW5kc19jb2RlY19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jbGllbnRQcmVzZW50YXRpb25Nb2RlbF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Nik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19sb2dnaW5nX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cblxuXG5cbmNsYXNzIENsaWVudENvbm5lY3RvciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih0cmFuc21pdHRlciwgY2xpZW50RG9scGhpbiwgc2xhY2tNUyA9IDAsIG1heEJhdGNoU2l6ZSA9IDUwKSB7XG5cbiAgICAgICAgdGhpcy5jb21tYW5kUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50bHlTZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHVzaEVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53YWl0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJhbnNtaXR0ZXIgPSB0cmFuc21pdHRlcjtcbiAgICAgICAgdGhpcy5jbGllbnREb2xwaGluID0gY2xpZW50RG9scGhpbjtcbiAgICAgICAgdGhpcy5zbGFja01TID0gc2xhY2tNUztcbiAgICAgICAgdGhpcy5jb2RlYyA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbW1hbmRzX2NvZGVjX19bXCJhXCIgLyogZGVmYXVsdCAqL10oKTtcbiAgICAgICAgdGhpcy5jb21tYW5kQmF0Y2hlciA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2NvbW1hbmRCYXRjaGVyX19bXCJhXCIgLyogZGVmYXVsdCAqL10odHJ1ZSwgbWF4QmF0Y2hTaXplKTtcbiAgICB9XG5cbiAgICBzZXRDb21tYW5kQmF0Y2hlcihuZXdCYXRjaGVyKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZEJhdGNoZXIgPSBuZXdCYXRjaGVyO1xuICAgIH1cblxuICAgIHNldFB1c2hFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5wdXNoRW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgfVxuXG4gICAgc2V0UHVzaExpc3RlbmVyKG5ld0xpc3RlbmVyKSB7XG4gICAgICAgIHRoaXMucHVzaExpc3RlbmVyID0gbmV3TGlzdGVuZXI7XG4gICAgfVxuXG4gICAgc2V0UmVsZWFzZUNvbW1hbmQobmV3Q29tbWFuZCkge1xuICAgICAgICB0aGlzLnJlbGVhc2VDb21tYW5kID0gbmV3Q29tbWFuZDtcbiAgICB9XG5cbiAgICBzZW5kKGNvbW1hbmQsIG9uRmluaXNoZWQpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kUXVldWUucHVzaCh7IGNvbW1hbmQ6IGNvbW1hbmQsIGhhbmRsZXI6IG9uRmluaXNoZWQgfSk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRseVNlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpOyAvLyB0aGVyZSBpcyBub3QgcG9pbnQgaW4gcmVsZWFzaW5nIGlmIHdlIGRvIG5vdCBzZW5kIGF0bVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9TZW5kTmV4dCgpO1xuICAgIH1cblxuICAgIGRvU2VuZE5leHQoKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbW1hbmRRdWV1ZS5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wdXNoRW5hYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW5xdWV1ZVB1c2hDb21tYW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRseVNlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jdXJyZW50bHlTZW5kaW5nID0gdHJ1ZTtcbiAgICAgICAgbGV0IGNtZHNBbmRIYW5kbGVycyA9IHRoaXMuY29tbWFuZEJhdGNoZXIuYmF0Y2godGhpcy5jb21tYW5kUXVldWUpO1xuXG4gICAgICAgIGlmKGNtZHNBbmRIYW5kbGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgY2FsbGJhY2sgPSBjbWRzQW5kSGFuZGxlcnNbY21kc0FuZEhhbmRsZXJzLmxlbmd0aCAtIDFdLmhhbmRsZXI7XG4gICAgICAgICAgICBsZXQgY29tbWFuZHMgPSBjbWRzQW5kSGFuZGxlcnMubWFwKGNhaCA9PiB7IHJldHVybiBjYWguY29tbWFuZDsgfSk7XG4gICAgICAgICAgICB0aGlzLnRyYW5zbWl0dGVyLnRyYW5zbWl0KGNvbW1hbmRzLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgdG91Y2hlZFBNcyA9IFtdO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goKGNvbW1hbmQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvdWNoZWQgPSB0aGlzLmhhbmRsZShjb21tYW5kKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRvdWNoZWQpXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3VjaGVkUE1zLnB1c2godG91Y2hlZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLm9uRmluaXNoZWQodG91Y2hlZFBNcyk7IC8vIHRvZG86IG1ha2UgdGhlbSB1bmlxdWU/XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kb1NlbmROZXh0KCksIHRoaXMuc2xhY2tNUyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kb1NlbmROZXh0KCksIHRoaXMuc2xhY2tNUyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGUoY29tbWFuZCkge1xuICAgICAgICBpZiAoY29tbWFuZC5pZCA9PT0gXCJEZWxldGVQcmVzZW50YXRpb25Nb2RlbFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVEZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gXCJDcmVhdGVQcmVzZW50YXRpb25Nb2RlbFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gXCJWYWx1ZUNoYW5nZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2VkQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21tYW5kLmlkID09PSBcIkF0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgQ2xpZW50Q29ubmVjdG9yLkxPR0dFUi5lcnJvcihcIkNhbm5vdCBoYW5kbGUsIHVua25vd24gY29tbWFuZCBcIiArIGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGhhbmRsZURlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChzZXJ2ZXJDb21tYW5kKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IHRoaXMuY2xpZW50RG9scGhpbi5maW5kUHJlc2VudGF0aW9uTW9kZWxCeUlkKHNlcnZlckNvbW1hbmQucG1JZCk7XG4gICAgICAgIGlmICghbW9kZWwpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudE1vZGVsU3RvcmUoKS5kZWxldGVQcmVzZW50YXRpb25Nb2RlbChtb2RlbCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICBoYW5kbGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoc2VydmVyQ29tbWFuZCkge1xuICAgICAgICBpZiAodGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudE1vZGVsU3RvcmUoKS5jb250YWluc1ByZXNlbnRhdGlvbk1vZGVsKHNlcnZlckNvbW1hbmQucG1JZCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFscmVhZHkgaXMgYSBwcmVzZW50YXRpb24gbW9kZWwgd2l0aCBpZCBcIiArIHNlcnZlckNvbW1hbmQucG1JZCArIFwiICBrbm93biB0byB0aGUgY2xpZW50LlwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICBzZXJ2ZXJDb21tYW5kLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgICAgbGV0IGNsaWVudEF0dHJpYnV0ZSA9IHRoaXMuY2xpZW50RG9scGhpbi5hdHRyaWJ1dGUoYXR0ci5wcm9wZXJ0eU5hbWUsIGF0dHIucXVhbGlmaWVyLCBhdHRyLnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChhdHRyLmlkICYmIGF0dHIuaWQubWF0Y2goXCIuKlMkXCIpKSB7XG4gICAgICAgICAgICAgICAgY2xpZW50QXR0cmlidXRlLmlkID0gYXR0ci5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChjbGllbnRBdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGNsaWVudFBtID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY2xpZW50UHJlc2VudGF0aW9uTW9kZWxfX1tcImFcIiAvKiBkZWZhdWx0ICovXShzZXJ2ZXJDb21tYW5kLnBtSWQsIHNlcnZlckNvbW1hbmQucG1UeXBlKTtcbiAgICAgICAgY2xpZW50UG0uYWRkQXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcbiAgICAgICAgaWYgKHNlcnZlckNvbW1hbmQuY2xpZW50U2lkZU9ubHkpIHtcbiAgICAgICAgICAgIGNsaWVudFBtLmNsaWVudFNpZGVPbmx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmFkZChjbGllbnRQbSwgZmFsc2UpO1xuICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4udXBkYXRlUHJlc2VudGF0aW9uTW9kZWxRdWFsaWZpZXIoY2xpZW50UG0pO1xuICAgICAgICByZXR1cm4gY2xpZW50UG07XG4gICAgfVxuXG4gICAgaGFuZGxlVmFsdWVDaGFuZ2VkQ29tbWFuZChzZXJ2ZXJDb21tYW5kKSB7XG4gICAgICAgIGxldCBjbGllbnRBdHRyaWJ1dGUgPSB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmZpbmRBdHRyaWJ1dGVCeUlkKHNlcnZlckNvbW1hbmQuYXR0cmlidXRlSWQpO1xuICAgICAgICBpZiAoIWNsaWVudEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgQ2xpZW50Q29ubmVjdG9yLkxPR0dFUi5lcnJvcihcImF0dHJpYnV0ZSB3aXRoIGlkIFwiICsgc2VydmVyQ29tbWFuZC5hdHRyaWJ1dGVJZCArIFwiIG5vdCBmb3VuZCwgY2Fubm90IHVwZGF0ZSB0byBuZXcgdmFsdWUgXCIgKyBzZXJ2ZXJDb21tYW5kLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGllbnRBdHRyaWJ1dGUuZ2V0VmFsdWUoKSA9PT0gc2VydmVyQ29tbWFuZC5uZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY2xpZW50QXR0cmlidXRlLnNldFZhbHVlRnJvbVNlcnZlcihzZXJ2ZXJDb21tYW5kLm5ld1ZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaGFuZGxlQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZChzZXJ2ZXJDb21tYW5kKSB7XG4gICAgICAgIGxldCBjbGllbnRBdHRyaWJ1dGUgPSB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmZpbmRBdHRyaWJ1dGVCeUlkKHNlcnZlckNvbW1hbmQuYXR0cmlidXRlSWQpO1xuICAgICAgICBpZiAoIWNsaWVudEF0dHJpYnV0ZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjbGllbnRBdHRyaWJ1dGVbc2VydmVyQ29tbWFuZC5tZXRhZGF0YU5hbWVdID0gc2VydmVyQ29tbWFuZC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGlzdGVuKCkge1xuICAgICAgICBpZiAoIXRoaXMucHVzaEVuYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLndhaXRpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIHRvZG86IGhvdyB0byBpc3N1ZSBhIHdhcm5pbmcgaWYgbm8gcHVzaExpc3RlbmVyIGlzIHNldD9cbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRseVNlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZG9TZW5kTmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5xdWV1ZVB1c2hDb21tYW5kKCkge1xuICAgICAgICBsZXQgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLndhaXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbW1hbmRRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgIGNvbW1hbmQ6IHRoaXMucHVzaExpc3RlbmVyLFxuICAgICAgICAgICAgaGFuZGxlcjoge1xuICAgICAgICAgICAgICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uICgpIHsgbWUud2FpdGluZyA9IGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIG9uRmluaXNoZWREYXRhOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbGVhc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy53YWl0aW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLndhaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gdG9kbzogaG93IHRvIGlzc3VlIGEgd2FybmluZyBpZiBubyByZWxlYXNlQ29tbWFuZCBpcyBzZXQ/XG4gICAgICAgIHRoaXMudHJhbnNtaXR0ZXIuc2lnbmFsKHRoaXMucmVsZWFzZUNvbW1hbmQpO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQ2xpZW50Q29ubmVjdG9yO1xuXG5cbkNsaWVudENvbm5lY3Rvci5MT0dHRVIgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2xvZ2dpbmdfX1tcImJcIiAvKiBMb2dnZXJGYWN0b3J5ICovXS5nZXRMb2dnZXIoJ0NsaWVudENvbm5lY3RvcicpO1xuXG4vKioqLyB9KSxcbi8qIDg1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZHNfY29tbWFuZENvbnN0YW50c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXG5jbGFzcyBCbGluZENvbW1hbmRCYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihmb2xkaW5nID0gdHJ1ZSwgbWF4QmF0Y2hTaXplID0gNTApIHtcbiAgICAgICAgdGhpcy5mb2xkaW5nID0gZm9sZGluZztcbiAgICAgICAgdGhpcy5tYXhCYXRjaFNpemUgPSBtYXhCYXRjaFNpemU7XG4gICAgfVxuICAgIGJhdGNoKHF1ZXVlKSB7XG4gICAgICAgIGxldCBiYXRjaCA9IFtdO1xuICAgICAgICBsZXQgYmF0Y2hMZW5ndGggPSAwO1xuICAgICAgICB3aGlsZShxdWV1ZVtiYXRjaExlbmd0aF0gJiYgYmF0Y2hMZW5ndGggPD0gdGhpcy5tYXhCYXRjaFNpemUpIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBxdWV1ZVtiYXRjaExlbmd0aF07XG4gICAgICAgICAgICBiYXRjaExlbmd0aCsrO1xuICAgICAgICAgICAgaWYodGhpcy5mb2xkaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudC5jb21tYW5kLmlkID09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZHNfY29tbWFuZENvbnN0YW50c19fW1widlwiIC8qIFZBTFVFX0NIQU5HRURfQ09NTUFORF9JRCAqL10gJiZcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2gubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICAgICBiYXRjaFtiYXRjaC5sZW5ndGggLSAxXS5jb21tYW5kLmlkID09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZHNfY29tbWFuZENvbnN0YW50c19fW1widlwiIC8qIFZBTFVFX0NIQU5HRURfQ09NTUFORF9JRCAqL10gJiZcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jb21tYW5kLmF0dHJpYnV0ZUlkID09IGJhdGNoW2JhdGNoLmxlbmd0aCAtIDFdLmNvbW1hbmQuYXR0cmlidXRlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tZXJnZSBWYWx1ZUNoYW5nZSBmb3Igc2FtZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBiYXRjaFtiYXRjaC5sZW5ndGggLSAxXS5jb21tYW5kLm5ld1ZhbHVlID0gZWxlbWVudC5jb21tYW5kLm5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlbGVtZW50LmNvbW1hbmQuaWQgPT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19jb21tYW5kc19jb21tYW5kQ29uc3RhbnRzX19bXCJzXCIgLyogUFJFU0VOVEFUSU9OX01PREVMX0RFTEVURURfQ09NTUFORF9JRCAqL10pIHtcbiAgICAgICAgICAgICAgICAgICAgLy9XZSBkbyBub3QgbmVlZCBpdC4uLlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhdGNoLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYXRjaC5wdXNoKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoZWxlbWVudC5oYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWUuc3BsaWNlKDAsIGJhdGNoTGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGJhdGNoO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQmxpbmRDb21tYW5kQmF0Y2hlcjtcblxuXG4vKioqLyB9KSxcbi8qIDg2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuY2xhc3MgQ29kZWNFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQ29kZWNFcnJvcjtcblxuXG4vKioqLyB9KSxcbi8qIDg3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBMb2dnZXJGYWN0b3J5OyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX21hcF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2NvcmVfanNfbGlicmFyeV9mbl9tYXBfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9jb3JlX2pzX2xpYnJhcnlfZm5fbWFwX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19sb2dnZXJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEzKTtcblxuXG5cblxuY29uc3QgUk9PVF9MT0dHRVIgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19sb2dnZXJfX1tcImFcIiAvKiBMb2dnZXIgKi9dKCdST09UJyk7XG5cbi8vIHByaXZhdGUgbWV0aG9kc1xuY29uc3QgTE9DQUxTID0ge1xuICAgIGxvZ2dlcnM6IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX21hcF9fX2RlZmF1bHQuYSgpXG59O1xuXG5cbi8vIHB1YmxpY1xuY2xhc3MgTG9nZ2VyRmFjdG9yeSB7XG5cbiAgICBzdGF0aWMgZ2V0TG9nZ2VyKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKCFPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGNvbnRleHQpIHx8IGNvbnRleHQgPT09ICdST09UJykge1xuICAgICAgICAgICAgcmV0dXJuIFJPT1RfTE9HR0VSO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nTG9nZ2VyID0gTE9DQUxTLmxvZ2dlcnMuZ2V0KGNvbnRleHQpO1xuICAgICAgICBpZiAoZXhpc3RpbmdMb2dnZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ0xvZ2dlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxvZ2dlciA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2xvZ2dlcl9fW1wiYVwiIC8qIExvZ2dlciAqL10oY29udGV4dCwgUk9PVF9MT0dHRVIpO1xuICAgICAgICBMT0NBTFMubG9nZ2Vycy5zZXQoY29udGV4dCwgbG9nZ2VyKTtcbiAgICAgICAgcmV0dXJuIGxvZ2dlcjtcbiAgICB9XG59XG5cblxuXG4vKioqLyB9KSxcbi8qIDg4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciB0b0ludGVnZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KTtcbnZhciBkZWZpbmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuLyogODkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxubW9kdWxlLmV4cG9ydHMgPSAhX193ZWJwYWNrX3JlcXVpcmVfXygxMikgJiYgIV9fd2VicGFja19yZXF1aXJlX18oMTkpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShfX3dlYnBhY2tfcmVxdWlyZV9fKDMxKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKi8gfSksXG4vKiA5MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDkxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxuXG4vKioqLyB9KSxcbi8qIDkyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY3JlYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MCk7XG52YXIgZGVzY3JpcHRvciA9IF9fd2VicGFja19yZXF1aXJlX18oNTkpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbl9fd2VicGFja19yZXF1aXJlX18oOSkoSXRlcmF0b3JQcm90b3R5cGUsIF9fd2VicGFja19yZXF1aXJlX18oNCkoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogOTMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGRQID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbnZhciBnZXRLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5NCk7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMikgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKi8gfSksXG4vKiA5NCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oOTUpO1xudmFyIGVudW1CdWdLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2Myk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogOTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xudmFyIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xudmFyIGFycmF5SW5kZXhPZiA9IF9fd2VicGFja19yZXF1aXJlX18oOTYpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDk2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMik7XG52YXIgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDk3KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuLyogOTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHRvSW50ZWdlciA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDk4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG52YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDY1KTtcbnZhciBJRV9QUk9UTyA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA5OSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFkZFRvVW5zY29wYWJsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwMCk7XG52YXIgc3RlcCA9IF9fd2VicGFja19yZXF1aXJlX18oNjYpO1xudmFyIEl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xudmFyIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMzIpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMzApKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqKi8gfSksXG4vKiAxMDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG5cblxuLyoqKi8gfSksXG4vKiAxMDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHJvbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDY3KTtcbnZhciB2YWxpZGF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNDApO1xudmFyIE1BUCA9ICdNYXAnO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNzApKE1BUCwgZnVuY3Rpb24gKGdldCkge1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCkgeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpIHtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTUFQKSwga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSkge1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHZhbGlkYXRlKHRoaXMsIE1BUCksIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcblxuXG4vKioqLyB9KSxcbi8qIDEwMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcbi8qIDEwMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG52YXIgSVRFUkFUT1IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMTA0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBjbGFzc29mID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOSk7XG52YXIgSVRFUkFUT1IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAxMDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNjEpO1xudmFyIHRvT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2NSk7XG52YXIgdG9MZW5ndGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMzKTtcbnZhciBhc2MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwNik7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAxMDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTA3KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwsIGxlbmd0aCkge1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDEwNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIGlzQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwOCk7XG52YXIgU1BFQ0lFUyA9IF9fd2VicGFja19yZXF1aXJlX18oNCkoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob3JpZ2luYWwpIHtcbiAgdmFyIEM7XG4gIGlmIChpc0FycmF5KG9yaWdpbmFsKSkge1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmICh0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpIEMgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGlzT2JqZWN0KEMpKSB7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmIChDID09PSBudWxsKSBDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDEwOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKSB7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDEwOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywgeyB0b0pTT046IF9fd2VicGFja19yZXF1aXJlX18oNzEpKCdNYXAnKSB9KTtcblxuXG4vKioqLyB9KSxcbi8qIDExMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZm9yT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlciwgSVRFUkFUT1IpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDExMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1tYXAub2Zcbl9fd2VicGFja19yZXF1aXJlX18oNzIpKCdNYXAnKTtcblxuXG4vKioqLyB9KSxcbi8qIDExMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL3Byb3Bvc2FsLXNldG1hcC1vZmZyb20vI3NlYy1tYXAuZnJvbVxuX193ZWJwYWNrX3JlcXVpcmVfXyg3MykoJ01hcCcpO1xuXG5cbi8qKiovIH0pLFxuLyogMTEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImFcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBMb2dnZXI7IH0pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpO1xuXG5cblxuLy8gcHJpdmF0ZSBtZXRob2RzXG5jb25zdCBMT0NBTFMgPSB7XG4gICAgcGFkICh0ZXh0LCBzaXplKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSAnJyArIHRleHQ7XG4gICAgICAgIHdoaWxlIChyZXN1bHQubGVuZ3RoIDwgc2l6ZSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gJzAnICsgcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICBpbnRlcm5hbExvZyAoKSB7XG4gICAgICAgIGNvbnN0IGFyZ3MgPSBBcnJheS5mcm9tKGFyZ3VtZW50cyk7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBhcmdzLnNoaWZ0KCk7XG4gICAgICAgIGNvbnN0IGxvZ0xldmVsID0gYXJncy5zaGlmdCgpO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9ICBkYXRlLmdldEZ1bGxZZWFyKCkgKyAnLScgKyBMT0NBTFMucGFkKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpICsgJy0nICsgTE9DQUxTLnBhZChkYXRlLmdldERhdGUoKSwgMikgKyAnICcgKyBMT0NBTFMucGFkKGRhdGUuZ2V0SG91cnMoKSwgMikgKyAnOicgKyBMT0NBTFMucGFkKGRhdGUuZ2V0TWludXRlcygpLCAyKSArICc6JyArIExPQ0FMUy5wYWQoZGF0ZS5nZXRTZWNvbmRzKCksIDIpICsgJy4nICsgTE9DQUxTLnBhZChkYXRlLmdldE1pbGxpc2Vjb25kcygpLCAzKTtcbiAgICAgICAgZnVuYyhkYXRlU3RyaW5nLCBsb2dMZXZlbC50ZXh0LCBjb250ZXh0LCAuLi5hcmdzKTtcblxuICAgIH0sXG4gICAgZ2V0Q29va2llIChuYW1lKSB7XG4gICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKHdpbmRvdykgJiYgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKSh3aW5kb3cuZG9jdW1lbnQpICYmIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkod2luZG93LmRvY3VtZW50LmNvb2tpZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJzsgJyArIGRvY3VtZW50LmNvb2tpZTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gdmFsdWUuc3BsaXQoJzsgJyArIG5hbWUgKyAnPScpO1xuICAgICAgICAgICAgaWYgKCBwYXJ0cy5sZW5ndGggPT09IDIgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnRzLnBvcCgpLnNwbGl0KCc7Jykuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuLy8gcHVibGljXG5jbGFzcyBMb2dnZXIge1xuXG4gICAgY29uc3RydWN0b3IoY29udGV4dCwgcm9vdExvZ2dlcikge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLnJvb3RMb2dnZXIgPSByb290TG9nZ2VyO1xuICAgICAgICBjb25zdCBjb29raWVMb2dMZXZlbCA9IExPQ0FMUy5nZXRDb29raWUoJ0RPTFBISU5fUExBVEZPUk1fTE9HR0VSXycgKyB0aGlzLmNvbnRleHQpO1xuICAgICAgICBzd2l0Y2ggKGNvb2tpZUxvZ0xldmVsKSB7XG4gICAgICAgICAgICBjYXNlICdOT05FJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0xldmVsID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImFcIiAvKiBMb2dMZXZlbCAqL10uTk9ORTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0FMTCc6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dMZXZlbCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLkFMTDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1RSQUNFJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0xldmVsID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImFcIiAvKiBMb2dMZXZlbCAqL10uVFJBQ0U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdERUJVRyc6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dMZXZlbCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLkRFQlVHO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSU5GTyc6XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dMZXZlbCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLklORk87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdXQVJOJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0xldmVsID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImFcIiAvKiBMb2dMZXZlbCAqL10uV0FSTjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0VSUk9SJzpcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ0xldmVsID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImFcIiAvKiBMb2dMZXZlbCAqL10uRVJST1I7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHRyYWNlKCkge1xuICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShjb25zb2xlKSAmJiB0aGlzLmlzTG9nTGV2ZWwoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImFcIiAvKiBMb2dMZXZlbCAqL10uVFJBQ0UpKSB7XG4gICAgICAgICAgICBMT0NBTFMuaW50ZXJuYWxMb2coY29uc29sZS5sb2csIHRoaXMuY29udGV4dCwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImFcIiAvKiBMb2dMZXZlbCAqL10uVFJBQ0UsIC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWJ1ZygpIHtcbiAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoY29uc29sZSkgJiYgdGhpcy5pc0xvZ0xldmVsKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLkRFQlVHKSkge1xuICAgICAgICAgICAgTE9DQUxTLmludGVybmFsTG9nKGNvbnNvbGUubG9nLCB0aGlzLmNvbnRleHQsIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLkRFQlVHLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW5mbygpIHtcbiAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoY29uc29sZSkgJiYgdGhpcy5pc0xvZ0xldmVsKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLklORk8pKSB7XG4gICAgICAgICAgICBMT0NBTFMuaW50ZXJuYWxMb2coY29uc29sZS5sb2csIHRoaXMuY29udGV4dCwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImFcIiAvKiBMb2dMZXZlbCAqL10uSU5GTywgLi4uYXJndW1lbnRzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHdhcm4oKSB7XG4gICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGNvbnNvbGUpICYmIHRoaXMuaXNMb2dMZXZlbChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5XQVJOKSkge1xuICAgICAgICAgICAgTE9DQUxTLmludGVybmFsTG9nKGNvbnNvbGUud2FybiwgdGhpcy5jb250ZXh0LCBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5XQVJOLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXJyb3IoKSB7XG4gICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGNvbnNvbGUpICYmIHRoaXMuaXNMb2dMZXZlbChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5FUlJPUikpIHtcbiAgICAgICAgICAgIExPQ0FMUy5pbnRlcm5hbExvZyhjb25zb2xlLmVycm9yLCB0aGlzLmNvbnRleHQsIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLkVSUk9SLCAuLi5hcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TG9nTGV2ZWwoKSB7XG4gICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKHRoaXMubG9nTGV2ZWwpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sb2dMZXZlbDtcbiAgICAgICAgfSBlbHNlIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKHRoaXMucm9vdExvZ2dlcikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3RMb2dnZXIuZ2V0TG9nTGV2ZWwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5JTkZPO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0TG9nTGV2ZWwobGV2ZWwpIHtcbiAgICAgICAgdGhpcy5sb2dMZXZlbCA9IGxldmVsO1xuICAgIH1cblxuICAgIHNldExvZ0xldmVsQnlOYW1lKGxldmVsTmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXVtsZXZlbE5hbWVdKSkge1xuICAgICAgICAgICAgdGhpcy5sb2dMZXZlbCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dW2xldmVsTmFtZV07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpc0xvZ0xldmVsKGxldmVsKSB7XG4gICAgICAgIGlmICh0aGlzLmdldExvZ0xldmVsKCkgPT09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLk5PTkUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nZXRMb2dMZXZlbCgpID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5BTEwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdldExvZ0xldmVsKCkgPT09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLlRSQUNFKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nZXRMb2dMZXZlbCgpID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5ERUJVRyAmJiBsZXZlbCAhPT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImFcIiAvKiBMb2dMZXZlbCAqL10uVFJBQ0UpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmdldExvZ0xldmVsKCkgPT09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLklORk8gJiYgbGV2ZWwgIT09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLlRSQUNFICYmIGxldmVsICE9PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5ERUJVRykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZ2V0TG9nTGV2ZWwoKSA9PT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImFcIiAvKiBMb2dMZXZlbCAqL10uV0FSTiAmJiBsZXZlbCAhPT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImFcIiAvKiBMb2dMZXZlbCAqL10uVFJBQ0UgJiYgbGV2ZWwgIT09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLkRFQlVHICYmIGxldmVsICE9PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5JTkZPKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5nZXRMb2dMZXZlbCgpID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5FUlJPUiAmJiBsZXZlbCAhPT0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImFcIiAvKiBMb2dMZXZlbCAqL10uVFJBQ0UgJiYgbGV2ZWwgIT09IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLkRFQlVHICYmIGxldmVsICE9PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5JTkZPICYmIGxldmVsICE9PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5XQVJOKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaXNMb2dMZXZlbFVzZWFibGUobGV2ZWwpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkobGV2ZWwsICdsZXZlbCcpO1xuICAgICAgICBpZiAobGV2ZWwubGV2ZWwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldExvZ0xldmVsKCkubGV2ZWwgPj0gbGV2ZWwubGV2ZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vKioqLyB9KSxcbi8qIDExNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2NsaWVudEF0dHJpYnV0ZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMTUpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY2xpZW50UHJlc2VudGF0aW9uTW9kZWxfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNTYpO1xuXG5cblxuY2xhc3MgQ2xpZW50RG9scGhpbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzZXRDbGllbnRDb25uZWN0b3IoY2xpZW50Q29ubmVjdG9yKSB7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yID0gY2xpZW50Q29ubmVjdG9yO1xuICAgIH1cblxuICAgIGdldENsaWVudENvbm5lY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50Q29ubmVjdG9yO1xuICAgIH1cblxuICAgIHNlbmQoY29tbWFuZCwgb25GaW5pc2hlZCkge1xuICAgICAgICB0aGlzLmNsaWVudENvbm5lY3Rvci5zZW5kKGNvbW1hbmQsIG9uRmluaXNoZWQpO1xuICAgIH1cblxuICAgIGF0dHJpYnV0ZShwcm9wZXJ0eU5hbWUsIHF1YWxpZmllciwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2NsaWVudEF0dHJpYnV0ZV9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKHByb3BlcnR5TmFtZSwgcXVhbGlmaWVyLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgcHJlc2VudGF0aW9uTW9kZWwoaWQsIHR5cGUsIC4uLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY2xpZW50UHJlc2VudGF0aW9uTW9kZWxfX1tcImFcIiAvKiBkZWZhdWx0ICovXShpZCwgdHlwZSk7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RlbC5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmFkZChtb2RlbCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG5cbiAgICBzZXRDbGllbnRNb2RlbFN0b3JlKGNsaWVudE1vZGVsU3RvcmUpIHtcbiAgICAgICAgdGhpcy5jbGllbnRNb2RlbFN0b3JlID0gY2xpZW50TW9kZWxTdG9yZTtcbiAgICB9XG5cbiAgICBnZXRDbGllbnRNb2RlbFN0b3JlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRNb2RlbFN0b3JlO1xuICAgIH1cblxuICAgIGxpc3RQcmVzZW50YXRpb25Nb2RlbElkcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmxpc3RQcmVzZW50YXRpb25Nb2RlbElkcygpO1xuICAgIH1cblxuICAgIGxpc3RQcmVzZW50YXRpb25Nb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5saXN0UHJlc2VudGF0aW9uTW9kZWxzKCk7XG4gICAgfVxuXG4gICAgZmluZEFsbFByZXNlbnRhdGlvbk1vZGVsQnlUeXBlKHByZXNlbnRhdGlvbk1vZGVsVHlwZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZmluZEFsbFByZXNlbnRhdGlvbk1vZGVsQnlUeXBlKHByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgfVxuXG4gICAgZ2V0QXQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChpZCk7XG4gICAgfVxuXG4gICAgZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChpZCk7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJlc2VudGF0aW9uTW9kZWwobW9kZWxUb0RlbGV0ZSkge1xuICAgICAgICB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5kZWxldGVQcmVzZW50YXRpb25Nb2RlbChtb2RlbFRvRGVsZXRlLCB0cnVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVQcmVzZW50YXRpb25Nb2RlbFF1YWxpZmllcihwcmVzZW50YXRpb25Nb2RlbCkge1xuICAgICAgICBwcmVzZW50YXRpb25Nb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaChzb3VyY2VBdHRyaWJ1dGUgPT4ge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVBdHRyaWJ1dGVRdWFsaWZpZXIoc291cmNlQXR0cmlidXRlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQXR0cmlidXRlUXVhbGlmaWVyKHNvdXJjZUF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIXNvdXJjZUF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5maW5kQWxsQXR0cmlidXRlc0J5UXVhbGlmaWVyKHNvdXJjZUF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSk7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCh0YXJnZXRBdHRyaWJ1dGUgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0QXR0cmlidXRlLnNldFZhbHVlKHNvdXJjZUF0dHJpYnV0ZS5nZXRWYWx1ZSgpKTsgLy8gc2hvdWxkIGFsd2F5cyBoYXZlIHRoZSBzYW1lIHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHN0YXJ0UHVzaExpc3RlbmluZyhwdXNoQ29tbWFuZCwgcmVsZWFzZUNvbW1hbmQpIHtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3Iuc2V0UHVzaExpc3RlbmVyKHB1c2hDb21tYW5kKTtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3Iuc2V0UmVsZWFzZUNvbW1hbmQocmVsZWFzZUNvbW1hbmQpO1xuICAgICAgICB0aGlzLmNsaWVudENvbm5lY3Rvci5zZXRQdXNoRW5hYmxlZCh0cnVlKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLmxpc3RlbigpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBzdG9wUHVzaExpc3RlbmluZygpIHtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3Iuc2V0UHVzaEVuYWJsZWQoZmFsc2UpO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQ2xpZW50RG9scGhpbjtcblxuXG4vKioqLyB9KSxcbi8qIDExNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2V2ZW50QnVzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2xvZ2dpbmdfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblxuXG5jbGFzcyBDbGllbnRBdHRyaWJ1dGUge1xuXG4gICAgY29uc3RydWN0b3IocHJvcGVydHlOYW1lLCBxdWFsaWZpZXIsIHZhbHVlKSB7XG5cbiAgICAgICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgICAgIHRoaXMuaWQgPSBcIlwiICsgKENsaWVudEF0dHJpYnV0ZS5jbGllbnRBdHRyaWJ1dGVJbnN0YW5jZUNvdW50KyspICsgXCJDXCI7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VCdXMgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19ldmVudEJ1c19fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKCk7XG4gICAgICAgIHRoaXMucXVhbGlmaWVyQ2hhbmdlQnVzID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fZXZlbnRCdXNfX1tcImFcIiAvKiBkZWZhdWx0ICovXSgpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRRdWFsaWZpZXIocXVhbGlmaWVyKTtcbiAgICB9XG5cbiAgICBjb3B5KCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gbmV3IENsaWVudEF0dHJpYnV0ZSh0aGlzLnByb3BlcnR5TmFtZSwgdGhpcy5nZXRRdWFsaWZpZXIoKSwgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBzZXRQcmVzZW50YXRpb25Nb2RlbChwcmVzZW50YXRpb25Nb2RlbCkge1xuICAgICAgICBpZiAodGhpcy5wcmVzZW50YXRpb25Nb2RlbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbiBub3Qgc2V0IGEgcHJlc2VudGF0aW9uIG1vZGVsIGZvciBhbiBhdHRyaWJ1dGUgdGhhdCBpcyBhbHJlYWR5IGJvdW5kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVsID0gcHJlc2VudGF0aW9uTW9kZWw7XG4gICAgfVxuXG4gICAgZ2V0UHJlc2VudGF0aW9uTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZXNlbnRhdGlvbk1vZGVsO1xuICAgIH1cblxuICAgIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZUZyb21TZXJ2ZXIobmV3VmFsdWUpIHtcbiAgICAgICAgbGV0IHZlcmlmaWVkVmFsdWUgPSBDbGllbnRBdHRyaWJ1dGUuY2hlY2tWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09PSB2ZXJpZmllZFZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBsZXQgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmVyaWZpZWRWYWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZUJ1cy50cmlnZ2VyKHsgJ29sZFZhbHVlJzogb2xkVmFsdWUsICduZXdWYWx1ZSc6IHZlcmlmaWVkVmFsdWUsICdzZW5kVG9TZXJ2ZXInOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBsZXQgdmVyaWZpZWRWYWx1ZSA9IENsaWVudEF0dHJpYnV0ZS5jaGVja1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IHZlcmlmaWVkVmFsdWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2ZXJpZmllZFZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlQnVzLnRyaWdnZXIoeyAnb2xkVmFsdWUnOiBvbGRWYWx1ZSwgJ25ld1ZhbHVlJzogdmVyaWZpZWRWYWx1ZSwgJ3NlbmRUb1NlcnZlcic6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgc2V0UXVhbGlmaWVyKG5ld1F1YWxpZmllcikge1xuICAgICAgICBpZiAodGhpcy5xdWFsaWZpZXIgPT09IG5ld1F1YWxpZmllcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgbGV0IG9sZFF1YWxpZmllciA9IHRoaXMucXVhbGlmaWVyO1xuICAgICAgICB0aGlzLnF1YWxpZmllciA9IG5ld1F1YWxpZmllcjtcbiAgICAgICAgdGhpcy5xdWFsaWZpZXJDaGFuZ2VCdXMudHJpZ2dlcih7ICdvbGRWYWx1ZSc6IG9sZFF1YWxpZmllciwgJ25ld1ZhbHVlJzogbmV3UXVhbGlmaWVyIH0pO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlQnVzLnRyaWdnZXIoeyBcIm9sZFZhbHVlXCI6IHRoaXMudmFsdWUsIFwibmV3VmFsdWVcIjogdGhpcy52YWx1ZSwgJ3NlbmRUb1NlcnZlcic6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGdldFF1YWxpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbGlmaWVyO1xuICAgIH1cblxuICAgIG9uVmFsdWVDaGFuZ2UoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VCdXMub25FdmVudChldmVudEhhbmRsZXIpO1xuICAgICAgICBldmVudEhhbmRsZXIoeyBcIm9sZFZhbHVlXCI6IHRoaXMudmFsdWUsIFwibmV3VmFsdWVcIjogdGhpcy52YWx1ZSwgJ3NlbmRUb1NlcnZlcic6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIG9uUXVhbGlmaWVyQ2hhbmdlKGV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLnF1YWxpZmllckNoYW5nZUJ1cy5vbkV2ZW50KGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgc3luY1dpdGgoc291cmNlQXR0cmlidXRlKSB7XG4gICAgICAgIGlmIChzb3VyY2VBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UXVhbGlmaWVyKHNvdXJjZUF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSk7IC8vIHNlcXVlbmNlIGlzIGltcG9ydGFudFxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShzb3VyY2VBdHRyaWJ1dGUudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrVmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgU3RyaW5nIHx8IHJlc3VsdCBpbnN0YW5jZW9mIEJvb2xlYW4gfHwgcmVzdWx0IGluc3RhbmNlb2YgTnVtYmVyKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB2YWx1ZS52YWx1ZU9mKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIENsaWVudEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgQ2xpZW50QXR0cmlidXRlLkxPR0dFUi53YXJuKFwiQW4gQXR0cmlidXRlIG1heSBub3QgaXRzZWxmIGNvbnRhaW4gYW4gYXR0cmlidXRlIGFzIGEgdmFsdWUuIEFzc3VtaW5nIHlvdSBmb3Jnb3QgdG8gY2FsbCB2YWx1ZS5cIik7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmNoZWNrVmFsdWUodmFsdWUudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvayA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5TVVBQT1JURURfVkFMVUVfVFlQRVMuaW5kZXhPZih0eXBlb2YgcmVzdWx0KSA+IC0xIHx8IHJlc3VsdCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRyaWJ1dGUgdmFsdWVzIG9mIHRoaXMgdHlwZSBhcmUgbm90IGFsbG93ZWQ6IFwiICsgdHlwZW9mIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBDbGllbnRBdHRyaWJ1dGU7XG5cblxuQ2xpZW50QXR0cmlidXRlLkxPR0dFUiA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fbG9nZ2luZ19fW1wiYlwiIC8qIExvZ2dlckZhY3RvcnkgKi9dLmdldExvZ2dlcignQ2xpZW50QXR0cmlidXRlJyk7XG5DbGllbnRBdHRyaWJ1dGUuU1VQUE9SVEVEX1ZBTFVFX1RZUEVTID0gW1wic3RyaW5nXCIsIFwibnVtYmVyXCIsIFwiYm9vbGVhblwiXTtcbkNsaWVudEF0dHJpYnV0ZS5jbGllbnRBdHRyaWJ1dGVJbnN0YW5jZUNvdW50ID0gMDtcblxuXG4vKioqLyB9KSxcbi8qIDExNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2F0dHJpYnV0ZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMTcpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fZXZlbnRCdXNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZHNfY29tbWFuZEZhY3RvcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fY29uc3RhbnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX2xvZ2dpbmdfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblxuXG5cblxuXG5jbGFzcyBDbGllbnRNb2RlbFN0b3JlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudERvbHBoaW4pIHtcblxuICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4gPSBjbGllbnREb2xwaGluO1xuICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVscyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbHNQZXJUeXBlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNQZXJJZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm1vZGVsU3RvcmVDaGFuZ2VCdXMgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19ldmVudEJ1c19fW1wiYVwiIC8qIGRlZmF1bHQgKi9dKCk7XG4gICAgfVxuXG4gICAgZ2V0Q2xpZW50RG9scGhpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50RG9scGhpbjtcbiAgICB9XG5cbiAgICByZWdpc3RlckF0dHJpYnV0ZShhdHRyaWJ1dGUpIHtcbiAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVCeUlkKGF0dHJpYnV0ZSk7XG4gICAgICAgIGlmIChhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlQnlRdWFsaWZpZXIoYXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3aGVuZXZlciBhbiBhdHRyaWJ1dGUgY2hhbmdlcyBpdHMgdmFsdWUsIHRoZSBzZXJ2ZXIgbmVlZHMgdG8gYmUgbm90aWZpZWRcbiAgICAgICAgLy8gYW5kIGFsbCBvdGhlciBhdHRyaWJ1dGVzIHdpdGggdGhlIHNhbWUgcXVhbGlmaWVyIGFyZSBnaXZlbiB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICBhdHRyaWJ1dGUub25WYWx1ZUNoYW5nZSgoZXZ0KSA9PiB7XG4gICAgICAgICAgICBpZihldnQubmV3VmFsdWUgIT09IGV2dC5vbGRWYWx1ZSAmJiBldnQuc2VuZFRvU2VydmVyID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tbWFuZCA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZHNfY29tbWFuZEZhY3RvcnlfX1tcImFcIiAvKiBkZWZhdWx0ICovXS5jcmVhdGVWYWx1ZUNoYW5nZWRDb21tYW5kKGF0dHJpYnV0ZS5pZCwgZXZ0Lm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50Q29ubmVjdG9yKCkuc2VuZChjb21tYW5kLCBudWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSkge1xuICAgICAgICAgICAgICAgIGxldCBhdHRycyA9IHRoaXMuZmluZEF0dHJpYnV0ZXNCeUZpbHRlcigoYXR0cikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ciAhPT0gYXR0cmlidXRlICYmIGF0dHIuZ2V0UXVhbGlmaWVyKCkgPT09IGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhdHRycy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2V0VmFsdWUoYXR0cmlidXRlLmdldFZhbHVlKCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0pO1xuICAgICAgICBhdHRyaWJ1dGUub25RdWFsaWZpZXJDaGFuZ2UoKGV2dCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudENvbm5lY3RvcigpLnNlbmQoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19jb21tYW5kc19jb21tYW5kRmFjdG9yeV9fW1wiYVwiIC8qIGRlZmF1bHQgKi9dLmNyZWF0ZUNoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZChhdHRyaWJ1dGUuaWQsIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fYXR0cmlidXRlX19bXCJhXCIgLyogZGVmYXVsdCAqL10uUVVBTElGSUVSX1BST1BFUlRZLCBldnQubmV3VmFsdWUpLCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkKG1vZGVsLCBzZW5kVG9TZXJ2ZXIgPSB0cnVlKSB7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuaGFzKG1vZGVsLmlkKSkge1xuICAgICAgICAgICAgQ2xpZW50TW9kZWxTdG9yZS5MT0dHRVIuZXJyb3IoXCJUaGVyZSBhbHJlYWR5IGlzIGEgUE0gd2l0aCBpZCBcIiArIG1vZGVsLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYWRkZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5oYXMobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5zZXQobW9kZWwuaWQsIG1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUHJlc2VudGF0aW9uTW9kZWxCeVR5cGUobW9kZWwpO1xuXG4gICAgICAgICAgICBpZihzZW5kVG9TZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29ubmVjdG9yID0gdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudENvbm5lY3RvcigpO1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5zZW5kKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZHNfY29tbWFuZEZhY3RvcnlfX1tcImFcIiAvKiBkZWZhdWx0ICovXS5jcmVhdGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQobW9kZWwpLCBudWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbW9kZWwuZ2V0QXR0cmlidXRlcygpLmZvckVhY2goYXR0cmlidXRlID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubW9kZWxTdG9yZUNoYW5nZUJ1cy50cmlnZ2VyKHsgJ2V2ZW50VHlwZSc6IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fY29uc3RhbnRzX19bXCJhXCIgLyogQURERURfVFlQRSAqL10sICdjbGllbnRQcmVzZW50YXRpb25Nb2RlbCc6IG1vZGVsIH0pO1xuICAgICAgICAgICAgYWRkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZGRlZDtcbiAgICB9XG5cbiAgICByZW1vdmUobW9kZWwpIHtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZW1vdmVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5oYXMobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVByZXNlbnRhdGlvbk1vZGVsQnlUeXBlKG1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmRlbGV0ZShtb2RlbC5pZCk7XG4gICAgICAgICAgICBtb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVCeUlkKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZUJ5UXVhbGlmaWVyKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsU3RvcmVDaGFuZ2VCdXMudHJpZ2dlcih7ICdldmVudFR5cGUnOiBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2NvbnN0YW50c19fW1wib1wiIC8qIFJFTU9WRURfVFlQRSAqL10sICdjbGllbnRQcmVzZW50YXRpb25Nb2RlbCc6IG1vZGVsIH0pO1xuICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbW92ZWQ7XG4gICAgfVxuXG4gICAgZmluZEF0dHJpYnV0ZXNCeUZpbHRlcihmaWx0ZXIpIHtcbiAgICAgICAgbGV0IG1hdGNoZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuZm9yRWFjaCgobW9kZWwpID0+IHtcbiAgICAgICAgICAgIG1vZGVsLmdldEF0dHJpYnV0ZXMoKS5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpbHRlcihhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVzLnB1c2goYXR0cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICB9XG5cbiAgICBhZGRQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZShtb2RlbCkge1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHR5cGUgPSBtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcmVzZW50YXRpb25Nb2RlbHMgPSB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuZ2V0KHR5cGUpO1xuICAgICAgICBpZiAoIXByZXNlbnRhdGlvbk1vZGVscykge1xuICAgICAgICAgICAgcHJlc2VudGF0aW9uTW9kZWxzID0gW107XG4gICAgICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuc2V0KHR5cGUsIHByZXNlbnRhdGlvbk1vZGVscyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEocHJlc2VudGF0aW9uTW9kZWxzLmluZGV4T2YobW9kZWwpID4gLTEpKSB7XG4gICAgICAgICAgICBwcmVzZW50YXRpb25Nb2RlbHMucHVzaChtb2RlbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZShtb2RlbCkge1xuICAgICAgICBpZiAoIW1vZGVsIHx8ICEobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcmVzZW50YXRpb25Nb2RlbHMgPSB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuZ2V0KG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgICAgIGlmICghcHJlc2VudGF0aW9uTW9kZWxzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXNlbnRhdGlvbk1vZGVscy5sZW5ndGggPiAtMSkge1xuICAgICAgICAgICAgcHJlc2VudGF0aW9uTW9kZWxzLnNwbGljZShwcmVzZW50YXRpb25Nb2RlbHMuaW5kZXhPZihtb2RlbCksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVzZW50YXRpb25Nb2RlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuZGVsZXRlKG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaXN0UHJlc2VudGF0aW9uTW9kZWxJZHMoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IGl0ZXIgPSB0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5rZXlzKCk7XG4gICAgICAgIGxldCBuZXh0ID0gaXRlci5uZXh0KCk7XG4gICAgICAgIHdoaWxlICghbmV4dC5kb25lKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChuZXh0LnZhbHVlKTtcbiAgICAgICAgICAgIG5leHQgPSBpdGVyLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxpc3RQcmVzZW50YXRpb25Nb2RlbHMoKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgbGV0IGl0ZXIgPSB0aGlzLnByZXNlbnRhdGlvbk1vZGVscy52YWx1ZXMoKTtcbiAgICAgICAgbGV0IG5leHQgPSBpdGVyLm5leHQoKTtcbiAgICAgICAgd2hpbGUgKCFuZXh0LmRvbmUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5leHQudmFsdWUpO1xuICAgICAgICAgICAgbmV4dCA9IGl0ZXIubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuZ2V0KGlkKTtcbiAgICB9XG5cbiAgICBmaW5kQWxsUHJlc2VudGF0aW9uTW9kZWxCeVR5cGUodHlwZSkge1xuICAgICAgICBpZiAoIXR5cGUgfHwgIXRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZS5oYXModHlwZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wcmVzZW50YXRpb25Nb2RlbHNQZXJUeXBlLmdldCh0eXBlKS5zbGljZSgwKTsgLy8gc2xpY2UgaXMgdXNlZCB0byBjbG9uZSB0aGUgYXJyYXlcbiAgICB9XG5cbiAgICBkZWxldGVQcmVzZW50YXRpb25Nb2RlbChtb2RlbCwgbm90aWZ5KSB7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb250YWluc1ByZXNlbnRhdGlvbk1vZGVsKG1vZGVsLmlkKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUobW9kZWwpO1xuICAgICAgICAgICAgaWYgKCFub3RpZnkgfHwgbW9kZWwuY2xpZW50U2lkZU9ubHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50Q29ubmVjdG9yKCkuc2VuZChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRzX2NvbW1hbmRGYWN0b3J5X19bXCJhXCIgLyogZGVmYXVsdCAqL10uY3JlYXRlUHJlc2VudGF0aW9uTW9kZWxEZWxldGVkQ29tbWFuZChtb2RlbC5pZCksIG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29udGFpbnNQcmVzZW50YXRpb25Nb2RlbChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuaGFzKGlkKTtcbiAgICB9XG5cbiAgICBhZGRBdHRyaWJ1dGVCeUlkKGF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZSB8fCB0aGlzLmF0dHJpYnV0ZXNQZXJJZC5oYXMoYXR0cmlidXRlLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1BlcklkLnNldChhdHRyaWJ1dGUuaWQsIGF0dHJpYnV0ZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cmlidXRlQnlJZChhdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUgfHwgIXRoaXMuYXR0cmlidXRlc1BlcklkLmhhcyhhdHRyaWJ1dGUuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVySWQuZGVsZXRlKGF0dHJpYnV0ZS5pZCk7XG4gICAgfVxuXG4gICAgZmluZEF0dHJpYnV0ZUJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1BlcklkLmdldChpZCk7XG4gICAgfVxuXG4gICAgYWRkQXR0cmlidXRlQnlRdWFsaWZpZXIoYXR0cmlidXRlKSB7XG4gICAgICAgIGlmICghYXR0cmlidXRlIHx8ICFhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXR0cmlidXRlcyA9IHRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllci5nZXQoYXR0cmlidXRlLmdldFF1YWxpZmllcigpKTtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNQZXJRdWFsaWZpZXIuc2V0KGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSwgYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoYXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSkgPiAtMSkpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyaWJ1dGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cmlidXRlQnlRdWFsaWZpZXIoYXR0cmlidXRlKSB7XG4gICAgICAgIGlmICghYXR0cmlidXRlIHx8ICFhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXR0cmlidXRlcyA9IHRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllci5nZXQoYXR0cmlidXRlLmdldFF1YWxpZmllcigpKTtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoID4gLTEpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3BsaWNlKGF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllci5kZWxldGUoYXR0cmlidXRlLmdldFF1YWxpZmllcigpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpbmRBbGxBdHRyaWJ1dGVzQnlRdWFsaWZpZXIocXVhbGlmaWVyKSB7XG4gICAgICAgIGlmICghcXVhbGlmaWVyIHx8ICF0aGlzLmF0dHJpYnV0ZXNQZXJRdWFsaWZpZXIuaGFzKHF1YWxpZmllcikpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyLmdldChxdWFsaWZpZXIpLnNsaWNlKDApOyAvLyBzbGljZSBpcyB1c2VkIHRvIGNsb25lIHRoZSBhcnJheVxuICAgIH1cblxuICAgIG9uTW9kZWxTdG9yZUNoYW5nZShldmVudEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5tb2RlbFN0b3JlQ2hhbmdlQnVzLm9uRXZlbnQoZXZlbnRIYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvbk1vZGVsU3RvcmVDaGFuZ2VGb3JUeXBlKHByZXNlbnRhdGlvbk1vZGVsVHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMubW9kZWxTdG9yZUNoYW5nZUJ1cy5vbkV2ZW50KHBtU3RvcmVFdmVudCA9PiB7XG4gICAgICAgICAgICBpZiAocG1TdG9yZUV2ZW50LmNsaWVudFByZXNlbnRhdGlvbk1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSA9PSBwcmVzZW50YXRpb25Nb2RlbFR5cGUpIHtcbiAgICAgICAgICAgICAgICBldmVudEhhbmRsZXIocG1TdG9yZUV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBDbGllbnRNb2RlbFN0b3JlO1xuXG5cbkNsaWVudE1vZGVsU3RvcmUuTE9HR0VSID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19sb2dnaW5nX19bXCJiXCIgLyogTG9nZ2VyRmFjdG9yeSAqL10uZ2V0TG9nZ2VyKCdDbGllbnRNb2RlbFN0b3JlJyk7XG5cblxuXG4vKioqLyB9KSxcbi8qIDExNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgQXR0cmlidXRlIHtcbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQXR0cmlidXRlO1xuXG5cbkF0dHJpYnV0ZS5RVUFMSUZJRVJfUFJPUEVSVFkgPSBcInF1YWxpZmllclwiO1xuQXR0cmlidXRlLlZBTFVFID0gXCJ2YWx1ZVwiO1xuXG5cbi8qKiovIH0pLFxuLyogMTE4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZHNfY29kZWNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fbG9nZ2luZ19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuXG5cbmNsYXNzIEh0dHBUcmFuc21pdHRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwsIHJlc2V0ID0gdHJ1ZSwgY2hhcnNldCA9IFwiVVRGLThcIiwgZXJyb3JIYW5kbGVyID0gbnVsbCwgc3VwcG9ydENPUlMgPSBmYWxzZSwgaGVhZGVyc0luZm8gPSBudWxsKSB7XG5cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuY2hhcnNldCA9IGNoYXJzZXQ7XG4gICAgICAgIHRoaXMuSHR0cENvZGVzID0ge1xuICAgICAgICAgICAgZmluaXNoZWQ6IDQsXG4gICAgICAgICAgICBzdWNjZXNzOiAyMDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIgPSBlcnJvckhhbmRsZXI7XG4gICAgICAgIHRoaXMuc3VwcG9ydENPUlMgPSBzdXBwb3J0Q09SUztcbiAgICAgICAgdGhpcy5oZWFkZXJzSW5mbyA9IGhlYWRlcnNJbmZvO1xuICAgICAgICB0aGlzLmh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdGhpcy5zaWcgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydENPUlMpIHtcbiAgICAgICAgICAgIGlmIChcIndpdGhDcmVkZW50aWFsc1wiIGluIHRoaXMuaHR0cCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlOyAvLyBOT1RFOiBkb2luZyB0aGlzIGZvciBub24gQ09SUyByZXF1ZXN0cyBoYXMgbm8gaW1wYWN0XG4gICAgICAgICAgICAgICAgdGhpcy5zaWcud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvZGVjID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fY29tbWFuZHNfY29kZWNfX1tcImFcIiAvKiBkZWZhdWx0ICovXSgpO1xuICAgICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgICAgIEh0dHBUcmFuc21pdHRlci5MT0dHRVIuZXJyb3IoJ0h0dHBUcmFuc21pdHRlci5pbnZhbGlkYXRlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIENsaWVudERvbHBoaW4ucmVzZXQoT25TdWNjZXNzSGFuZGxlcikgaW5zdGVhZCcpO1xuICAgICAgICAgICAgdGhpcy5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc21pdChjb21tYW5kcywgb25Eb25lKSB7XG4gICAgICAgIHRoaXMuaHR0cC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcignb25lcnJvcicsIFwiXCIpO1xuICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmh0dHAucmVhZHlTdGF0ZSA9PT0gdGhpcy5IdHRwQ29kZXMuZmluaXNoZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5odHRwLnN0YXR1cyA9PT0gdGhpcy5IdHRwQ29kZXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUZXh0ID0gdGhpcy5odHRwLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVGV4dC50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VDb21tYW5kcyA9IHRoaXMuY29kZWMuZGVjb2RlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lKHJlc3BvbnNlQ29tbWFuZHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEh0dHBUcmFuc21pdHRlci5MT0dHRVIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZCBwYXJzaW5nIHJlc3BvbnNlVGV4dDogXCIsIGVyciwgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKCdhcHBsaWNhdGlvbicsIFwiSHR0cFRyYW5zbWl0dGVyOiBJbmNvcnJlY3QgcmVzcG9uc2VUZXh0OiBcIiArIHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoJ2FwcGxpY2F0aW9uJywgXCJIdHRwVHJhbnNtaXR0ZXI6IGVtcHR5IHJlc3BvbnNlVGV4dFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRG9uZShbXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoJ2FwcGxpY2F0aW9uJywgXCJIdHRwVHJhbnNtaXR0ZXI6IEhUVFAgU3RhdHVzICE9IDIwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHR0cC5vcGVuKCdQT1NUJywgdGhpcy51cmwsIHRydWUpO1xuICAgICAgICB0aGlzLnNldEhlYWRlcnModGhpcy5odHRwKTtcbiAgICAgICAgaWYgKFwib3ZlcnJpZGVNaW1lVHlwZVwiIGluIHRoaXMuaHR0cCkge1xuICAgICAgICAgICAgdGhpcy5odHRwLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVwiICsgdGhpcy5jaGFyc2V0KTsgLy8gdG9kbyBtYWtlIGluamVjdGFibGVcbiAgICAgICAgfVxuICAgICAgICBsZXQgZW5jb2RlZENvbW1hbmRzID0gdGhpcy5jb2RlYy5lbmNvZGUoW2NvbW1hbmRzXSk7XG4gICAgICAgIEh0dHBUcmFuc21pdHRlci5MT0dHRVIudHJhY2UoJ3RyYW5zbWl0dGluZycsIGNvbW1hbmRzLCBlbmNvZGVkQ29tbWFuZHMpO1xuICAgICAgICB0aGlzLmh0dHAuc2VuZChlbmNvZGVkQ29tbWFuZHMpO1xuICAgIH1cblxuICAgIHNldEhlYWRlcnMoaHR0cFJlcSkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJzSW5mbykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmhlYWRlcnNJbmZvKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyc0luZm8uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cFJlcS5zZXRSZXF1ZXN0SGVhZGVyKGksIHRoaXMuaGVhZGVyc0luZm9baV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZUVycm9yKGtpbmQsIG1lc3NhZ2UpIHtcbiAgICAgICAgbGV0IGVycm9yRXZlbnQgPSB7IGtpbmQ6IGtpbmQsIHVybDogdGhpcy51cmwsIGh0dHBTdGF0dXM6IHRoaXMuaHR0cC5zdGF0dXMsIG1lc3NhZ2U6IG1lc3NhZ2UgfTtcbiAgICAgICAgaWYgKHRoaXMuZXJyb3JIYW5kbGVyKSB7XG4gICAgICAgICAgICB0aGlzLmVycm9ySGFuZGxlcihlcnJvckV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEh0dHBUcmFuc21pdHRlci5MT0dHRVIuZXJyb3IoXCJFcnJvciBvY2N1cnJlZDogXCIsIGVycm9yRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2lnbmFsKGNvbW1hbmQpIHtcbiAgICAgICAgdGhpcy5zaWcub3BlbignUE9TVCcsIHRoaXMudXJsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRIZWFkZXJzKHRoaXMuc2lnKTtcbiAgICAgICAgbGV0IGVuY29kZWRDb21tYW5kID0gdGhpcy5jb2RlYy5lbmNvZGUoW2NvbW1hbmRdKTtcbiAgICAgICAgSHR0cFRyYW5zbWl0dGVyLkxPR0dFUi50cmFjZSgnc2lnbmFsJywgY29tbWFuZCwgZW5jb2RlZENvbW1hbmQpO1xuICAgICAgICB0aGlzLnNpZy5zZW5kKGVuY29kZWRDb21tYW5kKTtcbiAgICB9XG5cbiAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICB0aGlzLmh0dHAub3BlbignUE9TVCcsIHRoaXMudXJsICsgJ2ludmFsaWRhdGU/JywgZmFsc2UpO1xuICAgICAgICB0aGlzLmh0dHAuc2VuZCgpO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gSHR0cFRyYW5zbWl0dGVyO1xuXG5cbkh0dHBUcmFuc21pdHRlci5MT0dHRVIgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2xvZ2dpbmdfX1tcImJcIiAvKiBMb2dnZXJGYWN0b3J5ICovXS5nZXRMb2dnZXIoJ0h0dHBUcmFuc21pdHRlcicpO1xuXG4vKioqLyB9KSxcbi8qIDExOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbmNsYXNzIE5vVHJhbnNtaXR0ZXIge1xuXG4gICAgdHJhbnNtaXQoY29tbWFuZHMsIG9uRG9uZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nIHNwZWNpYWxcbiAgICAgICAgb25Eb25lKFtdKTtcbiAgICB9XG5cbiAgICBzaWduYWwoKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gTm9UcmFuc21pdHRlcjtcblxuXG4vKioqLyB9KSxcbi8qIDEyMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIExJQlJBUlkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU4KTtcbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIGN0eCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgY2xhc3NvZiA9IF9fd2VicGFja19yZXF1aXJlX18oMzkpO1xudmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIGlzT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcbnZhciBhbkluc3RhbmNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzOCk7XG52YXIgZm9yT2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc0KTtcbnZhciB0YXNrID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3NSkuc2V0O1xudmFyIG1pY3JvdGFzayA9IF9fd2VicGFja19yZXF1aXJlX18oMTIyKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0Mik7XG52YXIgcGVyZm9ybSA9IF9fd2VicGFja19yZXF1aXJlX18oNzYpO1xudmFyIHByb21pc2VSZXNvbHZlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3Nyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW19fd2VicGFja19yZXF1aXJlX18oNCkoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xuX193ZWJwYWNrX3JlcXVpcmVfXygyMCkoJFByb21pc2UsIFBST01JU0UpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyg2OCkoUFJPTUlTRSk7XG5XcmFwcGVyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyMykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8qKiovIH0pLFxuLyogMTIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDEyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBtYWNyb3Rhc2sgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc1KS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMTIzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBJVEVSQVRPUiA9IF9fd2VicGFja19yZXF1aXJlX18oNCkoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDEyNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuXG52YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgY29yZSA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc0KTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNzcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcblxuXG4vKioqLyB9KSxcbi8qIDEyNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xudmFyIHBlcmZvcm0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc2KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuXG5cbi8qKiovIH0pLFxuLyogMTI2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9jb3JlX2pzX2xpYnJhcnlfZm5fbWFwX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX21hcF9fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2NvcmVfanNfbGlicmFyeV9mbl9tYXBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2xvZ2dpbmdfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblxuXG5cbmNsYXNzIEJlYW5NYW5hZ2VyIHtcblxuICAgIGNvbnN0cnVjdG9yKGNsYXNzUmVwb3NpdG9yeSkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0JlYW5NYW5hZ2VyKGNsYXNzUmVwb3NpdG9yeSknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY2xhc3NSZXBvc2l0b3J5LCAnY2xhc3NSZXBvc2l0b3J5Jyk7XG5cbiAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkgPSBjbGFzc1JlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMuYWRkZWRIYW5kbGVycyA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX21hcF9fX2RlZmF1bHQuYSgpO1xuICAgICAgICB0aGlzLnJlbW92ZWRIYW5kbGVycyA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX21hcF9fX2RlZmF1bHQuYSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZWRIYW5kbGVycyA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX21hcF9fX2RlZmF1bHQuYSgpO1xuICAgICAgICB0aGlzLmFycmF5VXBkYXRlZEhhbmRsZXJzID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9jb3JlX2pzX2xpYnJhcnlfZm5fbWFwX19fZGVmYXVsdC5hKCk7XG4gICAgICAgIHRoaXMuYWxsQWRkZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFsbFJlbW92ZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFsbFVwZGF0ZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFsbEFycmF5VXBkYXRlZEhhbmRsZXJzID0gW107XG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5vbkJlYW5BZGRlZCgodHlwZSwgYmVhbikgPT4ge1xuICAgICAgICAgICAgbGV0IGhhbmRsZXJMaXN0ID0gc2VsZi5hZGRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbik7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJlYW5NYW5hZ2VyLkxPR0dFUi5lcnJvcignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuQWRkZWQtaGFuZGxlciBmb3IgdHlwZScsIHR5cGUsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmFsbEFkZGVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBCZWFuTWFuYWdlci5MT0dHRVIuZXJyb3IoJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGEgZ2VuZXJhbCBvbkJlYW5BZGRlZC1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5vbkJlYW5SZW1vdmVkKCh0eXBlLCBiZWFuKSA9PiB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlckxpc3QgPSBzZWxmLnJlbW92ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyTGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKGJlYW4pO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBCZWFuTWFuYWdlci5MT0dHRVIuZXJyb3IoJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhblJlbW92ZWQtaGFuZGxlciBmb3IgdHlwZScsIHR5cGUsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmFsbFJlbW92ZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIEJlYW5NYW5hZ2VyLkxPR0dFUi5lcnJvcignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYSBnZW5lcmFsIG9uQmVhblJlbW92ZWQtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkub25CZWFuVXBkYXRlKCh0eXBlLCBiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgbGV0IGhhbmRsZXJMaXN0ID0gc2VsZi51cGRhdGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJlYW5NYW5hZ2VyLkxPR0dFUi5lcnJvcignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuVXBkYXRlLWhhbmRsZXIgZm9yIHR5cGUnLCB0eXBlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgQmVhbk1hbmFnZXIuTE9HR0VSLmVycm9yKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhIGdlbmVyYWwgb25CZWFuVXBkYXRlLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5Lm9uQXJyYXlVcGRhdGUoKHR5cGUsIGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCBuZXdFbGVtZW50cykgPT4ge1xuICAgICAgICAgICAgbGV0IGhhbmRsZXJMaXN0ID0gc2VsZi5hcnJheVVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyTGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCBuZXdFbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEJlYW5NYW5hZ2VyLkxPR0dFUi5lcnJvcignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25BcnJheVVwZGF0ZS1oYW5kbGVyIGZvciB0eXBlJywgdHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWxsQXJyYXlVcGRhdGVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIG5ld0VsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIEJlYW5NYW5hZ2VyLkxPR0dFUi5lcnJvcignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYSBnZW5lcmFsIG9uQXJyYXlVcGRhdGUtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cbiAgICBub3RpZnlCZWFuQ2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdCZWFuTWFuYWdlci5ub3RpZnlCZWFuQ2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGJlYW4sICdiZWFuJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKHByb3BlcnR5TmFtZSwgJ3Byb3BlcnR5TmFtZScpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzUmVwb3NpdG9yeS5ub3RpZnlCZWFuQ2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpO1xuICAgIH1cblxuXG4gICAgbm90aWZ5QXJyYXlDaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIHJlbW92ZWRFbGVtZW50cykge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0JlYW5NYW5hZ2VyLm5vdGlmeUFycmF5Q2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCByZW1vdmVkRWxlbWVudHMpJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGJlYW4sICdiZWFuJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKHByb3BlcnR5TmFtZSwgJ3Byb3BlcnR5TmFtZScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShpbmRleCwgJ2luZGV4Jyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGNvdW50LCAnY291bnQnKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkocmVtb3ZlZEVsZW1lbnRzLCAncmVtb3ZlZEVsZW1lbnRzJyk7XG5cbiAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkubm90aWZ5QXJyYXlDaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIHJlbW92ZWRFbGVtZW50cyk7XG4gICAgfVxuXG5cbiAgICBpc01hbmFnZWQoYmVhbikge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0JlYW5NYW5hZ2VyLmlzTWFuYWdlZChiZWFuKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShiZWFuLCAnYmVhbicpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLmlzTWFuYWdlZCgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgY3JlYXRlKHR5cGUpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdCZWFuTWFuYWdlci5jcmVhdGUodHlwZSknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkodHlwZSwgJ3R5cGUnKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5jcmVhdGUoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIGFkZCh0eXBlLCBiZWFuKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnQmVhbk1hbmFnZXIuYWRkKHR5cGUsIGJlYW4pJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKHR5cGUsICd0eXBlJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGJlYW4sICdiZWFuJyk7XG5cbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGRvbHBoaW4uYWRkKCkgW0RQLTddXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG4gICAgfVxuXG5cbiAgICBhZGRBbGwodHlwZSwgY29sbGVjdGlvbikge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0JlYW5NYW5hZ2VyLmFkZEFsbCh0eXBlLCBjb2xsZWN0aW9uKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKSh0eXBlLCAndHlwZScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb2xsZWN0aW9uLCAnY29sbGVjdGlvbicpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLmFkZEFsbCgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlKGJlYW4pIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdCZWFuTWFuYWdlci5yZW1vdmUoYmVhbiknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoYmVhbiwgJ2JlYW4nKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5yZW1vdmUoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIHJlbW92ZUFsbChjb2xsZWN0aW9uKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnQmVhbk1hbmFnZXIucmVtb3ZlQWxsKGNvbGxlY3Rpb24pJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGNvbGxlY3Rpb24sICdjb2xsZWN0aW9uJyk7XG5cbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGRvbHBoaW4ucmVtb3ZlQWxsKCkgW0RQLTddXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG4gICAgfVxuXG5cbiAgICByZW1vdmVJZihwcmVkaWNhdGUpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdCZWFuTWFuYWdlci5yZW1vdmVJZihwcmVkaWNhdGUpJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKHByZWRpY2F0ZSwgJ3ByZWRpY2F0ZScpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLnJlbW92ZUlmKCkgW0RQLTddXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG4gICAgfVxuXG5cbiAgICBvbkFkZGVkKHR5cGUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShldmVudEhhbmRsZXIpKSB7XG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSB0eXBlO1xuICAgICAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdCZWFuTWFuYWdlci5vbkFkZGVkKGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGV2ZW50SGFuZGxlciwgJ2V2ZW50SGFuZGxlcicpO1xuXG4gICAgICAgICAgICBzZWxmLmFsbEFkZGVkSGFuZGxlcnMgPSBzZWxmLmFsbEFkZGVkSGFuZGxlcnMuY29uY2F0KGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsQWRkZWRIYW5kbGVycyA9IHNlbGYuYWxsQWRkZWRIYW5kbGVycy5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnQmVhbk1hbmFnZXIub25BZGRlZCh0eXBlLCBldmVudEhhbmRsZXIpJyk7XG4gICAgICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKSh0eXBlLCAndHlwZScpO1xuICAgICAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIGxldCBoYW5kbGVyTGlzdCA9IHNlbGYuYWRkZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoIU9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWRkZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuY29uY2F0KGV2ZW50SGFuZGxlcikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZGxlckxpc3QgPSBzZWxmLmFkZGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25SZW1vdmVkKHR5cGUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShldmVudEhhbmRsZXIpKSB7XG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSB0eXBlO1xuICAgICAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdCZWFuTWFuYWdlci5vblJlbW92ZWQoZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHNlbGYuYWxsUmVtb3ZlZEhhbmRsZXJzID0gc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMuY29uY2F0KGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsUmVtb3ZlZEhhbmRsZXJzID0gc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0JlYW5NYW5hZ2VyLm9uUmVtb3ZlZCh0eXBlLCBldmVudEhhbmRsZXIpJyk7XG4gICAgICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKSh0eXBlLCAndHlwZScpO1xuICAgICAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIGxldCBoYW5kbGVyTGlzdCA9IHNlbGYucmVtb3ZlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyTGlzdCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5yZW1vdmVkSGFuZGxlcnMuc2V0KHR5cGUsIGhhbmRsZXJMaXN0LmNvbmNhdChldmVudEhhbmRsZXIpKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhhbmRsZXJMaXN0ID0gc2VsZi5yZW1vdmVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbkJlYW5VcGRhdGUodHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGV2ZW50SGFuZGxlcikpIHtcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IHR5cGU7XG4gICAgICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0JlYW5NYW5hZ2VyLm9uQmVhblVwZGF0ZShldmVudEhhbmRsZXIpJyk7XG4gICAgICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMgPSBzZWxmLmFsbFVwZGF0ZWRIYW5kbGVycy5jb25jYXQoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMgPSBzZWxmLmFsbFVwZGF0ZWRIYW5kbGVycy5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnQmVhbk1hbmFnZXIub25CZWFuVXBkYXRlKHR5cGUsIGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKHR5cGUsICd0eXBlJyk7XG4gICAgICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgbGV0IGhhbmRsZXJMaXN0ID0gc2VsZi51cGRhdGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuY29uY2F0KGV2ZW50SGFuZGxlcikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZGxlckxpc3QgPSBzZWxmLnVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi51cGRhdGVkSGFuZGxlcnMuc2V0KHR5cGUsIGhhbmRsZXJMaXN0LmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkFycmF5VXBkYXRlKHR5cGUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShldmVudEhhbmRsZXIpKSB7XG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSB0eXBlO1xuICAgICAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdCZWFuTWFuYWdlci5vbkFycmF5VXBkYXRlKGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGV2ZW50SGFuZGxlciwgJ2V2ZW50SGFuZGxlcicpO1xuXG4gICAgICAgICAgICBzZWxmLmFsbEFycmF5VXBkYXRlZEhhbmRsZXJzID0gc2VsZi5hbGxBcnJheVVwZGF0ZWRIYW5kbGVycy5jb25jYXQoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxBcnJheVVwZGF0ZWRIYW5kbGVycyA9IHNlbGYuYWxsQXJyYXlVcGRhdGVkSGFuZGxlcnMuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0JlYW5NYW5hZ2VyLm9uQXJyYXlVcGRhdGUodHlwZSwgZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkodHlwZSwgJ3R5cGUnKTtcbiAgICAgICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGV2ZW50SGFuZGxlciwgJ2V2ZW50SGFuZGxlcicpO1xuXG4gICAgICAgICAgICBsZXQgaGFuZGxlckxpc3QgPSBzZWxmLmFycmF5VXBkYXRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyTGlzdCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hcnJheVVwZGF0ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuY29uY2F0KGV2ZW50SGFuZGxlcikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGFuZGxlckxpc3QgPSBzZWxmLmFycmF5VXBkYXRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFycmF5VXBkYXRlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBCZWFuTWFuYWdlcjtcblxuXG5CZWFuTWFuYWdlci5MT0dHRVIgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2xvZ2dpbmdfX1tcImJcIiAvKiBMb2dnZXJGYWN0b3J5ICovXS5nZXRMb2dnZXIoJ0JlYW5NYW5hZ2VyJyk7XG5cblxuLyoqKi8gfSksXG4vKiAxMjcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2NvcmVfanNfbGlicmFyeV9mbl9tYXBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9jb3JlX2pzX2xpYnJhcnlfZm5fbWFwX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX21hcF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2xvZ2dpbmdfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblxuXG5cblxubGV0IGJsb2NrZWQgPSBudWxsO1xuXG5jbGFzcyBDbGFzc1JlcG9zaXRvcnkge1xuXG4gICAgY29uc3RydWN0b3IoZG9scGhpbikge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0NsYXNzUmVwb3NpdG9yeShkb2xwaGluKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShkb2xwaGluLCAnZG9scGhpbicpO1xuXG4gICAgICAgIHRoaXMuZG9scGhpbiA9IGRvbHBoaW47XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX21hcF9fX2RlZmF1bHQuYSgpO1xuICAgICAgICB0aGlzLmJlYW5Gcm9tRG9scGhpbiA9IG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX21hcF9fX2RlZmF1bHQuYSgpO1xuICAgICAgICB0aGlzLmJlYW5Ub0RvbHBoaW4gPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2NvcmVfanNfbGlicmFyeV9mbl9tYXBfX19kZWZhdWx0LmEoKTtcbiAgICAgICAgdGhpcy5jbGFzc0luZm9zID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9jb3JlX2pzX2xpYnJhcnlfZm5fbWFwX19fZGVmYXVsdC5hKCk7XG4gICAgICAgIHRoaXMuYmVhbkFkZGVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5iZWFuUmVtb3ZlZEhhbmRsZXJzID0gW107XG4gICAgICAgIHRoaXMucHJvcGVydHlVcGRhdGVIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFycmF5VXBkYXRlSGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBmaXhUeXBlKHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiY1wiIC8qIEJZVEUgKi9dOlxuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wicFwiIC8qIFNIT1JUICovXTpcbiAgICAgICAgICAgIGNhc2UgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImpcIiAvKiBJTlQgKi9dOlxuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiblwiIC8qIExPTkcgKi9dOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJpXCIgLyogRkxPQVQgKi9dOlxuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiZ1wiIC8qIERPVUJMRSAqL106XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiYlwiIC8qIEJPT0xFQU4gKi9dOlxuICAgICAgICAgICAgICAgIHJldHVybiAndHJ1ZScgPT09IFN0cmluZyh2YWx1ZSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGNhc2UgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcInFcIiAvKiBTVFJJTkcgKi9dOlxuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiaFwiIC8qIEVOVU0gKi9dOlxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcm9tRG9scGhpbihjbGFzc1JlcG9zaXRvcnksIHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICghT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiZlwiIC8qIERPTFBISU5fQkVBTiAqL106XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzUmVwb3NpdG9yeS5iZWFuRnJvbURvbHBoaW4uZ2V0KFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiZVwiIC8qIERBVEUgKi9dOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIGNhc2UgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImRcIiAvKiBDQUxFTkRBUiAqL106XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wibFwiIC8qIExPQ0FMX0RBVEVfRklFTERfVFlQRSAqL106XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wibVwiIC8qIExPQ0FMX0RBVEVfVElNRV9GSUVMRF9UWVBFICovXTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICBjYXNlIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJyXCIgLyogWk9ORURfREFURV9USU1FX0ZJRUxEX1RZUEUgKi9dOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZml4VHlwZSh0eXBlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b0RvbHBoaW4oY2xhc3NSZXBvc2l0b3J5LCB0eXBlLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIU9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkodmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19jb25zdGFudHNfX1tcImZcIiAvKiBET0xQSElOX0JFQU4gKi9dOlxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc1JlcG9zaXRvcnkuYmVhblRvRG9scGhpbi5nZXQodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiZVwiIC8qIERBVEUgKi9dOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZS50b0lTT1N0cmluZygpIDogdmFsdWU7XG4gICAgICAgICAgICBjYXNlIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJkXCIgLyogQ0FMRU5EQVIgKi9dOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZS50b0lTT1N0cmluZygpIDogdmFsdWU7XG4gICAgICAgICAgICBjYXNlIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJsXCIgLyogTE9DQUxfREFURV9GSUVMRF9UWVBFICovXTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wibVwiIC8qIExPQ0FMX0RBVEVfVElNRV9GSUVMRF9UWVBFICovXTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICAgICAgY2FzZSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX2NvbnN0YW50c19fW1wiclwiIC8qIFpPTkVEX0RBVEVfVElNRV9GSUVMRF9UWVBFICovXTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maXhUeXBlKHR5cGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbmRMaXN0U3BsaWNlKGNsYXNzUmVwb3NpdG9yeSwgbW9kZWxJZCwgcHJvcGVydHlOYW1lLCBmcm9tLCB0bywgbmV3RWxlbWVudHMpIHtcbiAgICAgICAgbGV0IGRvbHBoaW4gPSBjbGFzc1JlcG9zaXRvcnkuZG9scGhpbjtcbiAgICAgICAgbGV0IG1vZGVsID0gZG9scGhpbi5maW5kUHJlc2VudGF0aW9uTW9kZWxCeUlkKG1vZGVsSWQpO1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKG1vZGVsKSkge1xuICAgICAgICAgICAgbGV0IGNsYXNzSW5mbyA9IGNsYXNzUmVwb3NpdG9yeS5jbGFzc2VzLmdldChtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUpO1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBjbGFzc0luZm9bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKHR5cGUpKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ0BAQCBTT1VSQ0VfU1lTVEVNIEBAQCcsIG51bGwsICdjbGllbnQnKSxcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ3NvdXJjZScsIG51bGwsIG1vZGVsSWQpLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnYXR0cmlidXRlJywgbnVsbCwgcHJvcGVydHlOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ2Zyb20nLCBudWxsLCBmcm9tKSxcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ3RvJywgbnVsbCwgdG8pLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnY291bnQnLCBudWxsLCBuZXdFbGVtZW50cy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goZG9scGhpbi5hdHRyaWJ1dGUoaW5kZXgudG9TdHJpbmcoKSwgbnVsbCwgc2VsZi50b0RvbHBoaW4oY2xhc3NSZXBvc2l0b3J5LCB0eXBlLCBlbGVtZW50KSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRvbHBoaW4ucHJlc2VudGF0aW9uTW9kZWwuYXBwbHkoZG9scGhpbiwgW251bGwsICdARFA6TFNAJ10uY29uY2F0KGF0dHJpYnV0ZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlTGlzdChjbGFzc1JlcG9zaXRvcnksIHR5cGUsIGJlYW4sIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBsZXQgbGlzdCA9IGJlYW5bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYgKCFPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGxpc3QpKSB7XG4gICAgICAgICAgICBjbGFzc1JlcG9zaXRvcnkucHJvcGVydHlVcGRhdGVIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcih0eXBlLCBiZWFuLCBwcm9wZXJ0eU5hbWUsIFtdLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgQ2xhc3NSZXBvc2l0b3J5LkxPR0dFUi5lcnJvcignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuVXBkYXRlLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJsb2NrKGJlYW4sIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShibG9ja2VkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gY3JlYXRlIGEgYmxvY2sgd2hpbGUgYW5vdGhlciBibG9jayBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBibG9ja2VkID0ge1xuICAgICAgICAgICAgYmVhbjogYmVhbixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaXNCbG9ja2VkKGJlYW4sIHByb3BlcnR5TmFtZSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShibG9ja2VkKSAmJiBibG9ja2VkLmJlYW4gPT09IGJlYW4gJiYgYmxvY2tlZC5wcm9wZXJ0eU5hbWUgPT09IHByb3BlcnR5TmFtZTtcbiAgICB9XG5cbiAgICB1bmJsb2NrKCkge1xuICAgICAgICBibG9ja2VkID0gbnVsbDtcbiAgICB9XG5cbiAgICBub3RpZnlCZWFuQ2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDbGFzc1JlcG9zaXRvcnkubm90aWZ5QmVhbkNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShiZWFuLCAnYmVhbicpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShwcm9wZXJ0eU5hbWUsICdwcm9wZXJ0eU5hbWUnKTtcblxuICAgICAgICBsZXQgbW9kZWxJZCA9IHRoaXMuYmVhblRvRG9scGhpbi5nZXQoYmVhbik7XG4gICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKG1vZGVsSWQpKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLmRvbHBoaW4uZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChtb2RlbElkKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKG1vZGVsKSkge1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc0luZm8gPSB0aGlzLmNsYXNzZXMuZ2V0KG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBjbGFzc0luZm9bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gbW9kZWwuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkodHlwZSkgJiYgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvbGRWYWx1ZSA9IGF0dHJpYnV0ZS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUuc2V0VmFsdWUodGhpcy50b0RvbHBoaW4odGhpcywgdHlwZSwgbmV3VmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbURvbHBoaW4odGhpcywgdHlwZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUFycmF5Q2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCByZW1vdmVkRWxlbWVudHMpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDbGFzc1JlcG9zaXRvcnkubm90aWZ5QXJyYXlDaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIHJlbW92ZWRFbGVtZW50cyknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoYmVhbiwgJ2JlYW4nKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkocHJvcGVydHlOYW1lLCAncHJvcGVydHlOYW1lJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGluZGV4LCAnaW5kZXgnKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY291bnQsICdjb3VudCcpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShyZW1vdmVkRWxlbWVudHMsICdyZW1vdmVkRWxlbWVudHMnKTtcblxuICAgICAgICBpZiAodGhpcy5pc0Jsb2NrZWQoYmVhbiwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtb2RlbElkID0gdGhpcy5iZWFuVG9Eb2xwaGluLmdldChiZWFuKTtcbiAgICAgICAgbGV0IGFycmF5ID0gYmVhbltwcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShtb2RlbElkKSAmJiBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGFycmF5KSkge1xuICAgICAgICAgICAgbGV0IHJlbW92ZWRFbGVtZW50c0NvdW50ID0gQXJyYXkuaXNBcnJheShyZW1vdmVkRWxlbWVudHMpID8gcmVtb3ZlZEVsZW1lbnRzLmxlbmd0aCA6IDA7XG4gICAgICAgICAgICB0aGlzLnNlbmRMaXN0U3BsaWNlKHRoaXMsIG1vZGVsSWQsIHByb3BlcnR5TmFtZSwgaW5kZXgsIGluZGV4ICsgcmVtb3ZlZEVsZW1lbnRzQ291bnQsIGFycmF5LnNsaWNlKGluZGV4LCBpbmRleCArIGNvdW50KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkJlYW5BZGRlZChoYW5kbGVyKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnQ2xhc3NSZXBvc2l0b3J5Lm9uQmVhbkFkZGVkKGhhbmRsZXIpJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGhhbmRsZXIsICdoYW5kbGVyJyk7XG4gICAgICAgIHRoaXMuYmVhbkFkZGVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvbkJlYW5SZW1vdmVkKGhhbmRsZXIpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDbGFzc1JlcG9zaXRvcnkub25CZWFuUmVtb3ZlZChoYW5kbGVyKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShoYW5kbGVyLCAnaGFuZGxlcicpO1xuICAgICAgICB0aGlzLmJlYW5SZW1vdmVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvbkJlYW5VcGRhdGUoaGFuZGxlcikge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0NsYXNzUmVwb3NpdG9yeS5vbkJlYW5VcGRhdGUoaGFuZGxlciknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoaGFuZGxlciwgJ2hhbmRsZXInKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eVVwZGF0ZUhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25BcnJheVVwZGF0ZShoYW5kbGVyKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnQ2xhc3NSZXBvc2l0b3J5Lm9uQXJyYXlVcGRhdGUoaGFuZGxlciknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoaGFuZGxlciwgJ2hhbmRsZXInKTtcbiAgICAgICAgdGhpcy5hcnJheVVwZGF0ZUhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDbGFzcyhtb2RlbCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0NsYXNzUmVwb3NpdG9yeS5yZWdpc3RlckNsYXNzKG1vZGVsKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3Nlcy5oYXMobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NJbmZvID0ge307XG4gICAgICAgIG1vZGVsLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGUucHJvcGVydHlOYW1lLnNlYXJjaCgvXkAvKSA8IDA7XG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgY2xhc3NJbmZvW2F0dHJpYnV0ZS5wcm9wZXJ0eU5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGFzc2VzLnNldChtb2RlbC5pZCwgY2xhc3NJbmZvKTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyQ2xhc3MobW9kZWwpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDbGFzc1JlcG9zaXRvcnkudW5yZWdpc3RlckNsYXNzKG1vZGVsKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShtb2RlbCwgJ21vZGVsJyk7XG4gICAgICAgIHRoaXMuY2xhc3Nlc1snZGVsZXRlJ10obW9kZWwuaWQpO1xuICAgIH1cblxuICAgIGxvYWQobW9kZWwpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDbGFzc1JlcG9zaXRvcnkubG9hZChtb2RlbCknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkobW9kZWwsICdtb2RlbCcpO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGNsYXNzSW5mbyA9IHRoaXMuY2xhc3Nlcy5nZXQobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgbGV0IGJlYW4gPSB7fTtcbiAgICAgICAgbW9kZWwuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIChhdHRyaWJ1dGUucHJvcGVydHlOYW1lLnNlYXJjaCgvXkAvKSA8IDApO1xuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGJlYW5bYXR0cmlidXRlLnByb3BlcnR5TmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgYXR0cmlidXRlLm9uVmFsdWVDaGFuZ2UoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Lm9sZFZhbHVlICE9PSBldmVudC5uZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkVmFsdWUgPSBzZWxmLmZyb21Eb2xwaGluKHNlbGYsIGNsYXNzSW5mb1thdHRyaWJ1dGUucHJvcGVydHlOYW1lXSwgZXZlbnQub2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBzZWxmLmZyb21Eb2xwaGluKHNlbGYsIGNsYXNzSW5mb1thdHRyaWJ1dGUucHJvcGVydHlOYW1lXSwgZXZlbnQubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BlcnR5VXBkYXRlSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSwgYmVhbiwgYXR0cmlidXRlLnByb3BlcnR5TmFtZSwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbGFzc1JlcG9zaXRvcnkuTE9HR0VSLmVycm9yKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkJlYW5VcGRhdGUtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYmVhbkZyb21Eb2xwaGluLnNldChtb2RlbC5pZCwgYmVhbik7XG4gICAgICAgIHRoaXMuYmVhblRvRG9scGhpbi5zZXQoYmVhbiwgbW9kZWwuaWQpO1xuICAgICAgICB0aGlzLmNsYXNzSW5mb3Muc2V0KG1vZGVsLmlkLCBjbGFzc0luZm8pO1xuICAgICAgICB0aGlzLmJlYW5BZGRlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcihtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUsIGJlYW4pO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIENsYXNzUmVwb3NpdG9yeS5MT0dHRVIuZXJyb3IoJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhbkFkZGVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBiZWFuO1xuICAgIH1cblxuICAgIHVubG9hZChtb2RlbCkge1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0NsYXNzUmVwb3NpdG9yeS51bmxvYWQobW9kZWwpJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKG1vZGVsLCAnbW9kZWwnKTtcblxuICAgICAgICBsZXQgYmVhbiA9IHRoaXMuYmVhbkZyb21Eb2xwaGluLmdldChtb2RlbC5pZCk7XG4gICAgICAgIHRoaXMuYmVhbkZyb21Eb2xwaGluWydkZWxldGUnXShtb2RlbC5pZCk7XG4gICAgICAgIHRoaXMuYmVhblRvRG9scGhpblsnZGVsZXRlJ10oYmVhbik7XG4gICAgICAgIHRoaXMuY2xhc3NJbmZvc1snZGVsZXRlJ10obW9kZWwuaWQpO1xuICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShiZWFuKSkge1xuICAgICAgICAgICAgdGhpcy5iZWFuUmVtb3ZlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSwgYmVhbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBDbGFzc1JlcG9zaXRvcnkuTE9HR0VSLmVycm9yKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkJlYW5SZW1vdmVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmVhbjtcbiAgICB9XG5cbiAgICBzcGxpY2VMaXN0RW50cnkobW9kZWwpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDbGFzc1JlcG9zaXRvcnkuc3BsaWNlTGlzdEVudHJ5KG1vZGVsKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgbGV0IHNvdXJjZSA9IG1vZGVsLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZSgnc291cmNlJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ2F0dHJpYnV0ZScpO1xuICAgICAgICBsZXQgZnJvbSA9IG1vZGVsLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZSgnZnJvbScpO1xuICAgICAgICBsZXQgdG8gPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ3RvJyk7XG4gICAgICAgIGxldCBjb3VudCA9IG1vZGVsLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZSgnY291bnQnKTtcblxuICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShzb3VyY2UpICYmIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoYXR0cmlidXRlKSAmJiBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGZyb20pICYmIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkodG8pICYmIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoY291bnQpKSB7XG4gICAgICAgICAgICBsZXQgY2xhc3NJbmZvID0gdGhpcy5jbGFzc0luZm9zLmdldChzb3VyY2UudmFsdWUpO1xuICAgICAgICAgICAgbGV0IGJlYW4gPSB0aGlzLmJlYW5Gcm9tRG9scGhpbi5nZXQoc291cmNlLnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGJlYW4pICYmIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoY2xhc3NJbmZvKSkge1xuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gbW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlO1xuICAgICAgICAgICAgICAgIC8vdmFyIGVudHJ5ID0gZnJvbURvbHBoaW4odGhpcywgY2xhc3NJbmZvW2F0dHJpYnV0ZS52YWx1ZV0sIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVMaXN0KHRoaXMsIHR5cGUsIGJlYW4sIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0VsZW1lbnRzID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQudmFsdWU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gbW9kZWwuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKGkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBsaXN0IG1vZGlmaWNhdGlvbiB1cGRhdGUgcmVjZWl2ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudHMucHVzaCh0aGlzLmZyb21Eb2xwaGluKHRoaXMsIGNsYXNzSW5mb1thdHRyaWJ1dGUudmFsdWVdLCBlbGVtZW50LnZhbHVlKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2soYmVhbiwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcnJheVVwZGF0ZUhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcih0eXBlLCBiZWFuLCBhdHRyaWJ1dGUudmFsdWUsIGZyb20udmFsdWUsIHRvLnZhbHVlIC0gZnJvbS52YWx1ZSwgbmV3RWxlbWVudHMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsYXNzUmVwb3NpdG9yeS5MT0dHRVIuZXJyb3IoJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQXJyYXlVcGRhdGUtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuYmxvY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGlzdCBtb2RpZmljYXRpb24gdXBkYXRlIHJlY2VpdmVkLiBTb3VyY2UgYmVhbiB1bmtub3duLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGlzdCBtb2RpZmljYXRpb24gdXBkYXRlIHJlY2VpdmVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFwUGFyYW1Ub0RvbHBoaW4ocGFyYW0pIHtcbiAgICAgICAgaWYgKCFPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKHBhcmFtKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW0udG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5iZWFuVG9Eb2xwaGluLmdldChwYXJhbSk7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9ubHkgbWFuYWdlZCBEb2xwaGluIEJlYW5zIGNhbiBiZSB1c2VkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJhbTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT25seSBtYW5hZ2VkIERvbHBoaW4gQmVhbnMgYW5kIHByaW1pdGl2ZSB0eXBlcyBjYW4gYmUgdXNlZFwiKTtcbiAgICB9XG5cbiAgICBtYXBEb2xwaGluVG9CZWFuKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZyb21Eb2xwaGluKHRoaXMsIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fY29uc3RhbnRzX19bXCJmXCIgLyogRE9MUEhJTl9CRUFOICovXSwgdmFsdWUpO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQ2xhc3NSZXBvc2l0b3J5O1xuXG5cbkNsYXNzUmVwb3NpdG9yeS5MT0dHRVIgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2xvZ2dpbmdfX1tcImJcIiAvKiBMb2dnZXJGYWN0b3J5ICovXS5nZXRMb2dnZXIoJ0NsYXNzUmVwb3NpdG9yeScpO1xuXG5cbi8qKiovIH0pLFxuLyogMTI4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9jb3JlX2pzX2xpYnJhcnlfZm5fcHJvbWlzZV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2NvcmVfanNfbGlicmFyeV9mbl9wcm9taXNlX19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX3Byb21pc2VfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX2NvcmVfanNfbGlicmFyeV9mbl9zZXRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNzgpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9jb3JlX2pzX2xpYnJhcnlfZm5fc2V0X19fZGVmYXVsdCA9IF9fd2VicGFja19yZXF1aXJlX18ubihfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY29yZV9qc19saWJyYXJ5X2ZuX3NldF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fY29udHJvbGxlcnByb3h5X2pzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzMyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19jb21tYW5kc19jb21tYW5kRmFjdG9yeV9qc19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19jb25uZWN0b3JfanNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5jb25zdCBDT05UUk9MTEVSX0lEID0gJ2NvbnRyb2xsZXJJZCc7XG5jb25zdCBNT0RFTCA9ICdtb2RlbCc7XG5jb25zdCBFUlJPUl9DT0RFID0gJ2Vycm9yQ29kZSc7XG5cbmNsYXNzIENvbnRyb2xsZXJNYW5hZ2Vye1xuXG4gICAgY29uc3RydWN0b3IoZG9scGhpbiwgY2xhc3NSZXBvc2l0b3J5LCBjb25uZWN0b3Ipe1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYVwiIC8qIGNoZWNrTWV0aG9kICovXSkoJ0NvbnRyb2xsZXJNYW5hZ2VyKGRvbHBoaW4sIGNsYXNzUmVwb3NpdG9yeSwgY29ubmVjdG9yKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShkb2xwaGluLCAnZG9scGhpbicpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjbGFzc1JlcG9zaXRvcnksICdjbGFzc1JlcG9zaXRvcnknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29ubmVjdG9yLCAnY29ubmVjdG9yJyk7XG5cbiAgICAgICAgdGhpcy5kb2xwaGluID0gZG9scGhpbjtcbiAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkgPSBjbGFzc1JlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMuY29ubmVjdG9yID0gY29ubmVjdG9yO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJzID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9jb3JlX2pzX2xpYnJhcnlfZm5fc2V0X19fZGVmYXVsdC5hKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbGxlcihuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVDb250cm9sbGVyKG5hbWUsIG51bGwpXG4gICAgfVxuXG4gICAgX2NyZWF0ZUNvbnRyb2xsZXIobmFtZSwgcGFyZW50Q29udHJvbGxlcklkKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnQ29udHJvbGxlck1hbmFnZXIuY3JlYXRlQ29udHJvbGxlcihuYW1lKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShuYW1lLCAnbmFtZScpO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGNvbnRyb2xsZXJJZCwgbW9kZWxJZCwgbW9kZWwsIGNvbnRyb2xsZXI7XG4gICAgICAgIHJldHVybiBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2NvcmVfanNfbGlicmFyeV9mbl9wcm9taXNlX19fZGVmYXVsdC5hKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmNvbm5lY3Rvci5nZXRIaWdobGFuZGVyUE0oKS50aGVuKChoaWdobGFuZGVyUE0pID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3Rvci5pbnZva2UoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X19jb21tYW5kc19jb21tYW5kRmFjdG9yeV9qc19fW1wiYVwiIC8qIGRlZmF1bHQgKi9dLmNyZWF0ZUNyZWF0ZUNvbnRyb2xsZXJDb21tYW5kKG5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVySWQgPSBoaWdobGFuZGVyUE0uZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKENPTlRST0xMRVJfSUQpLmdldFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsSWQgPSBoaWdobGFuZGVyUE0uZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKE1PREVMKS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbCA9IHNlbGYuY2xhc3NSZXBvc2l0b3J5Lm1hcERvbHBoaW5Ub0JlYW4obW9kZWxJZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19jb250cm9sbGVycHJveHlfanNfX1tcImFcIiAvKiBkZWZhdWx0ICovXShjb250cm9sbGVySWQsIG1vZGVsLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250cm9sbGVycy5hZGQoY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW52b2tlQWN0aW9uKGNvbnRyb2xsZXJJZCwgYWN0aW9uTmFtZSwgcGFyYW1zKSB7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnQ29udHJvbGxlck1hbmFnZXIuaW52b2tlQWN0aW9uKGNvbnRyb2xsZXJJZCwgYWN0aW9uTmFtZSwgcGFyYW1zKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb250cm9sbGVySWQsICdjb250cm9sbGVySWQnKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoYWN0aW9uTmFtZSwgJ2FjdGlvbk5hbWUnKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2NvcmVfanNfbGlicmFyeV9mbl9wcm9taXNlX19fZGVmYXVsdC5hKChyZXNvbHZlLCByZWplY3QpID0+e1xuXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IFtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbHBoaW4uYXR0cmlidXRlKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fY29ubmVjdG9yX2pzX19bXCJiXCIgLyogU09VUkNFX1NZU1RFTSAqL10sIG51bGwsIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fY29ubmVjdG9yX2pzX19bXCJjXCIgLyogU09VUkNFX1NZU1RFTV9DTElFTlQgKi9dKSxcbiAgICAgICAgICAgICAgICBzZWxmLmRvbHBoaW4uYXR0cmlidXRlKEVSUk9SX0NPREUpXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBsZXQgcG0gPSBzZWxmLmRvbHBoaW4ucHJlc2VudGF0aW9uTW9kZWwuYXBwbHkoc2VsZi5kb2xwaGluLCBbbnVsbCwgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19jb25uZWN0b3JfanNfX1tcImFcIiAvKiBBQ1RJT05fQ0FMTF9CRUFOICovXV0uY29uY2F0KGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICAgICAgbGV0IGFjdGlvblBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgaWYoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShwYXJhbXMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBzZWxmLmNsYXNzUmVwb3NpdG9yeS5tYXBQYXJhbVRvRG9scGhpbihwYXJhbXNbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblBhcmFtcy5wdXNoKHtuYW1lOiBwYXJhbSwgdmFsdWU6IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY29ubmVjdG9yLmludm9rZShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX2NvbW1hbmRzX2NvbW1hbmRGYWN0b3J5X2pzX19bXCJhXCIgLyogZGVmYXVsdCAqL10uY3JlYXRlQ2FsbEFjdGlvbkNvbW1hbmQoY29udHJvbGxlcklkLCBhY3Rpb25OYW1lLCBhY3Rpb25QYXJhbXMpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXNFcnJvciA9IHBtLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShFUlJPUl9DT0RFKS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJTZXJ2ZXIgc2lkZSBDb250cm9sbGVyQWN0aW9uIFwiICsgYWN0aW9uTmFtZSArIFwiIGNhdXNlZCBhbiBlcnJvci4gUGxlYXNlIHNlZSBzZXJ2ZXIgbG9nIGZvciBkZXRhaWxzLlwiKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmRvbHBoaW4uZGVsZXRlUHJlc2VudGF0aW9uTW9kZWwocG0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3lDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDb250cm9sbGVyTWFuYWdlci5kZXN0cm95Q29udHJvbGxlcihjb250cm9sbGVyKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShjb250cm9sbGVyLCAnY29udHJvbGxlcicpO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX3Byb21pc2VfX19kZWZhdWx0LmEoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdG9yLmdldEhpZ2hsYW5kZXJQTSgpLnRoZW4oKGhpZ2hsYW5kZXJQTSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuY29udHJvbGxlcnMuZGVsZXRlKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICAgIGhpZ2hsYW5kZXJQTS5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoQ09OVFJPTExFUl9JRCkuc2V0VmFsdWUoY29udHJvbGxlci5jb250cm9sbGVySWQpO1xuICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdG9yLmludm9rZShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX2NvbW1hbmRzX2NvbW1hbmRGYWN0b3J5X2pzX19bXCJhXCIgLyogZGVmYXVsdCAqL10uY3JlYXRlRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKGNvbnRyb2xsZXIuZ2V0SWQoKSkpLnRoZW4ocmVzb2x2ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xsZXJzQ29weSA9IHRoaXMuY29udHJvbGxlcnM7XG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJzID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9jb3JlX2pzX2xpYnJhcnlfZm5fc2V0X19fZGVmYXVsdC5hKCk7XG4gICAgICAgIGNvbnRyb2xsZXJzQ29weS5mb3JFYWNoKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goY29udHJvbGxlci5kZXN0cm95KCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9jb3JlX2pzX2xpYnJhcnlfZm5fcHJvbWlzZV9fX2RlZmF1bHQuYS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQ29udHJvbGxlck1hbmFnZXI7XG5cblxuXG4vKioqLyB9KSxcbi8qIDEyOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIHN0cm9uZyA9IF9fd2VicGFja19yZXF1aXJlX18oNjcpO1xudmFyIHZhbGlkYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0MCk7XG52YXIgU0VUID0gJ1NldCc7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3MCkoU0VULCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBTRVQpLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG5cblxuLyoqKi8gfSksXG4vKiAxMzAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1NldCcsIHsgdG9KU09OOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDcxKSgnU2V0JykgfSk7XG5cblxuLyoqKi8gfSksXG4vKiAxMzEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0Lm9mXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDcyKSgnU2V0Jyk7XG5cblxuLyoqKi8gfSksXG4vKiAxMzIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9wcm9wb3NhbC1zZXRtYXAtb2Zmcm9tLyNzZWMtc2V0LmZyb21cbl9fd2VicGFja19yZXF1aXJlX18oNzMpKCdTZXQnKTtcblxuXG4vKioqLyB9KSxcbi8qIDEzMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfY29yZV9qc19saWJyYXJ5X2ZuX3NldF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3OCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2NvcmVfanNfbGlicmFyeV9mbl9zZXRfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9jb3JlX2pzX2xpYnJhcnlfZm5fc2V0X18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19sb2dnaW5nX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuXG5cblxuXG5jbGFzcyBDb250cm9sbGVyUHJveHkge1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcklkLCBtb2RlbCwgbWFuYWdlcil7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnQ29udHJvbGxlclByb3h5KGNvbnRyb2xsZXJJZCwgbW9kZWwsIG1hbmFnZXIpJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGNvbnRyb2xsZXJJZCwgJ2NvbnRyb2xsZXJJZCcpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShtb2RlbCwgJ21vZGVsJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKG1hbmFnZXIsICdtYW5hZ2VyJyk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVySWQgPSBjb250cm9sbGVySWQ7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3llZEhhbmRsZXJzID0gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9jb3JlX2pzX2xpYnJhcnlfZm5fc2V0X19fZGVmYXVsdC5hKCk7XG4gICAgfVxuXG4gICAgZ2V0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICAgIH1cblxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVySWQ7XG4gICAgfVxuXG4gICAgaW52b2tlKG5hbWUsIHBhcmFtcyl7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJhXCIgLyogY2hlY2tNZXRob2QgKi9dKSgnQ29udHJvbGxlclByb3h5Lmludm9rZShuYW1lLCBwYXJhbXMpJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKG5hbWUsICduYW1lJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb250cm9sbGVyIHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIuaW52b2tlQWN0aW9uKHRoaXMuY29udHJvbGxlcklkLCBuYW1lLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbnRyb2xsZXIobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLl9jcmVhdGVDb250cm9sbGVyKG5hbWUsIHRoaXMuZ2V0SWQoKSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpe1xuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNvbnRyb2xsZXIgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRGVzdHJveWVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHRoaXMpO1xuICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgQ29udHJvbGxlclByb3h5LkxPR0dFUi5lcnJvcignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25EZXN0cm95ZWQtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5kZXN0cm95Q29udHJvbGxlcih0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3llZChoYW5kbGVyKXtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDb250cm9sbGVyUHJveHkub25EZXN0cm95ZWQoaGFuZGxlciknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoaGFuZGxlciwgJ2hhbmRsZXInKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMub25EZXN0cm95ZWRIYW5kbGVycy5hZGQoaGFuZGxlcik7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYub25EZXN0cm95ZWRIYW5kbGVycy5kZWxldGUoaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBDb250cm9sbGVyUHJveHk7XG5cblxuQ29udHJvbGxlclByb3h5LkxPR0dFUiA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fbG9nZ2luZ19fW1wiYlwiIC8qIExvZ2dlckZhY3RvcnkgKi9dLmdldExvZ2dlcignQ29udHJvbGxlclByb3h5Jyk7XG5cblxuLyoqKi8gfSksXG4vKiAxMzQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2VtaXR0ZXJfY29tcG9uZW50X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc5KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfZW1pdHRlcl9jb21wb25lbnRfX19kZWZhdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9lbWl0dGVyX2NvbXBvbmVudF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfY29yZV9qc19saWJyYXJ5X2ZuX3Byb21pc2VfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9jb3JlX2pzX2xpYnJhcnlfZm5fcHJvbWlzZV9fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX2NvcmVfanNfbGlicmFyeV9mbl9wcm9taXNlX18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fY29tbWFuZHNfY29tbWFuZEZhY3RvcnlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG5cblxuY2xhc3MgQ2xpZW50Q29udGV4dHtcblxuICAgIGNvbnN0cnVjdG9yKGRvbHBoaW4sIGJlYW5NYW5hZ2VyLCBjb250cm9sbGVyTWFuYWdlciwgY29ubmVjdG9yKXtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDbGllbnRDb250ZXh0KGRvbHBoaW4sIGJlYW5NYW5hZ2VyLCBjb250cm9sbGVyTWFuYWdlciwgY29ubmVjdG9yKScpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShkb2xwaGluLCAnZG9scGhpbicpO1xuICAgICAgICBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX191dGlsc19fW1wiYlwiIC8qIGNoZWNrUGFyYW0gKi9dKShiZWFuTWFuYWdlciwgJ2JlYW5NYW5hZ2VyJyk7XG4gICAgICAgIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX3V0aWxzX19bXCJiXCIgLyogY2hlY2tQYXJhbSAqL10pKGNvbnRyb2xsZXJNYW5hZ2VyLCAnY29udHJvbGxlck1hbmFnZXInKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkoY29ubmVjdG9yLCAnY29ubmVjdG9yJyk7XG5cbiAgICAgICAgdGhpcy5kb2xwaGluID0gZG9scGhpbjtcbiAgICAgICAgdGhpcy5iZWFuTWFuYWdlciA9IGJlYW5NYW5hZ2VyO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyTWFuYWdlciA9IGNvbnRyb2xsZXJNYW5hZ2VyO1xuICAgICAgICB0aGlzLl9jb25uZWN0b3IgPSBjb25uZWN0b3I7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblByb21pc2UgPSBudWxsO1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29ubmVjdCgpe1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblByb21pc2UgPSBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX2NvcmVfanNfbGlicmFyeV9mbl9wcm9taXNlX19fZGVmYXVsdC5hKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9jb25uZWN0b3IuY29ubmVjdCgpO1xuICAgICAgICAgICAgc2VsZi5fY29ubmVjdG9yLmludm9rZShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRzX2NvbW1hbmRGYWN0b3J5X19bXCJhXCIgLyogZGVmYXVsdCAqL10uY3JlYXRlQ3JlYXRlQ29udGV4dENvbW1hbmQoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uUHJvbWlzZTtcbiAgICB9XG5cbiAgICBvbkNvbm5lY3QoKXtcbiAgICAgICAgaWYoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKSh0aGlzLmNvbm5lY3Rpb25Qcm9taXNlKSl7XG4gICAgICAgICAgICBpZighdGhpcy5pc0Nvbm5lY3RlZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblByb21pc2U7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9jb3JlX2pzX2xpYnJhcnlfZm5fcHJvbWlzZV9fX2RlZmF1bHQuYSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbGxlcihuYW1lKXtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fdXRpbHNfX1tcImFcIiAvKiBjaGVja01ldGhvZCAqL10pKCdDbGllbnRDb250ZXh0LmNyZWF0ZUNvbnRyb2xsZXIobmFtZSknKTtcbiAgICAgICAgT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fdXRpbHNfX1tcImJcIiAvKiBjaGVja1BhcmFtICovXSkobmFtZSwgJ25hbWUnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlck1hbmFnZXIuY3JlYXRlQ29udHJvbGxlcihuYW1lKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCl7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kb2xwaGluLnN0b3BQdXNoTGlzdGVuaW5nKCk7XG4gICAgICAgIHJldHVybiBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX2NvcmVfanNfbGlicmFyeV9mbl9wcm9taXNlX19fZGVmYXVsdC5hKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9jb250cm9sbGVyTWFuYWdlci5kZXN0cm95KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5fY29ubmVjdG9yLmludm9rZShfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2NvbW1hbmRzX2NvbW1hbmRGYWN0b3J5X19bXCJhXCIgLyogZGVmYXVsdCAqL10uY3JlYXRlRGVzdHJveUNvbnRleHRDb21tYW5kKCkpO1xuICAgICAgICAgICAgICAgIHNlbGYuZG9scGhpbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi5iZWFuTWFuYWdlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi5fY29udHJvbGxlck1hbmFnZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYuX2Nvbm5lY3RvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJhXCJdID0gQ2xpZW50Q29udGV4dDtcblxuXG5fX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfZW1pdHRlcl9jb21wb25lbnRfX19kZWZhdWx0KCkoQ2xpZW50Q29udGV4dC5wcm90b3R5cGUpO1xuXG4vKioqLyB9KSxcbi8qIDEzNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfZW1pdHRlcl9jb21wb25lbnRfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNzkpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9lbWl0dGVyX2NvbXBvbmVudF9fX2RlZmF1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm4oX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2VtaXR0ZXJfY29tcG9uZW50X18pO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19lcnJvcnNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMTM2KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2NvbW1hbmRzX2NvZGVjX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfX3JlbW90aW5nRXJyb3JIYW5kbGVyX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzNyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19sb2dnaW5nX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNl9fY29tbWFuZHNfY29tbWFuZENvbnN0YW50c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXG5cblxuXG5cblxuXG5cblxuY29uc3QgRklOSVNIRUQgPSA0O1xuY29uc3QgU1VDQ0VTUyA9IDIwMDtcbmNvbnN0IFJFUVVFU1RfVElNRU9VVCA9IDQwODtcblxuY29uc3QgRE9MUEhJTl9QTEFURk9STV9QUkVGSVggPSAnZG9scGhpbl9wbGF0Zm9ybV9pbnRlcm5fJztcbmNvbnN0IENMSUVOVF9JRF9IVFRQX0hFQURFUl9OQU1FID0gRE9MUEhJTl9QTEFURk9STV9QUkVGSVggKyAnZG9scGhpbkNsaWVudElkJztcblxuY2xhc3MgUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIge1xuXG4gICAgY29uc3RydWN0b3IodXJsLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmhlYWRlcnNJbmZvID0gT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShjb25maWcpID8gY29uZmlnLmhlYWRlcnNJbmZvIDogbnVsbDtcbiAgICAgICAgbGV0IGNvbm5lY3Rpb25Db25maWcgPSBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGNvbmZpZykgPyBjb25maWcuY29ubmVjdGlvbiA6IG51bGw7XG4gICAgICAgIHRoaXMubWF4UmV0cnkgPSBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGNvbm5lY3Rpb25Db25maWcpICYmIE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkoY29ubmVjdGlvbkNvbmZpZy5tYXhSZXRyeSk/Y29ubmVjdGlvbkNvbmZpZy5tYXhSZXRyeTogMztcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShjb25uZWN0aW9uQ29uZmlnKSAmJiBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGNvbm5lY3Rpb25Db25maWcudGltZW91dCk/Y29ubmVjdGlvbkNvbmZpZy50aW1lb3V0OiA1MDAwO1xuICAgICAgICB0aGlzLmZhaWxlZF9hdHRlbXB0ID0gMDtcbiAgICB9XG5cbiAgICBfaGFuZGxlRXJyb3IocmVqZWN0LCBlcnJvcikge1xuICAgICAgICBsZXQgY29ubmVjdGlvbkNvbmZpZyA9IE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkodGhpcy5jb25maWcpID8gdGhpcy5jb25maWcuY29ubmVjdGlvbiA6IG51bGw7XG4gICAgICAgIGxldCBlcnJvckhhbmRsZXJzID0gT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKShjb25uZWN0aW9uQ29uZmlnKSAmJiBPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGNvbm5lY3Rpb25Db25maWcuZXJyb3JIYW5kbGVycyk/Y29ubmVjdGlvbkNvbmZpZy5lcnJvckhhbmRsZXJzOiBbbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fcmVtb3RpbmdFcnJvckhhbmRsZXJfX1tcImFcIiAvKiBkZWZhdWx0ICovXSgpXTtcbiAgICAgICAgZXJyb3JIYW5kbGVycy5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgICAgICAgIGhhbmRsZXIub25FcnJvcihlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgIH1cblxuICAgIF9zZW5kKGNvbW1hbmRzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBodHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICBodHRwLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgICAgICBodHRwLm9uZXJyb3IgPSAoZXJyb3JDb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIuTE9HR0VSLmVycm9yKCdIVFRQIG5ldHdvcmsgZXJyb3InLCBlcnJvckNvbnRlbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKHJlamVjdCwgbmV3IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fZXJyb3JzX19bXCJjXCIgLyogSHR0cE5ldHdvcmtFcnJvciAqL10oJ1BsYXRmb3JtSHR0cFRyYW5zbWl0dGVyOiBOZXR3b3JrIGVycm9yJywgZXJyb3JDb250ZW50KSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaHR0cC5yZWFkeVN0YXRlID09PSBGSU5JU0hFRCl7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaHR0cC5zdGF0dXMpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVUNDRVNTOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbGVkX2F0dGVtcHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGllbnRJZCA9IGh0dHAuZ2V0UmVzcG9uc2VIZWFkZXIoQ0xJRU5UX0lEX0hUVFBfSEVBREVSX05BTUUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3QoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX191dGlsc19fW1wiY1wiIC8qIGV4aXN0cyAqL10pKGN1cnJlbnRDbGllbnRJZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkodGhpcy5jbGllbnRJZCkgJiYgdGhpcy5jbGllbnRJZCAhPT0gY3VycmVudENsaWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihyZWplY3QsIG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2Vycm9yc19fW1wiYlwiIC8qIERvbHBoaW5TZXNzaW9uRXJyb3IgKi9dKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogQ2xpZW50SWQgb2YgdGhlIHJlc3BvbnNlIGRpZCBub3QgbWF0Y2gnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRJZCA9IGN1cnJlbnRDbGllbnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihyZWplY3QsIG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2Vycm9yc19fW1wiYlwiIC8qIERvbHBoaW5TZXNzaW9uRXJyb3IgKi9dKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogU2VydmVyIGRpZCBub3Qgc2VuZCBhIGNsaWVudElkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChQbGF0Zm9ybUh0dHBUcmFuc21pdHRlci5MT0dHRVIuaXNMb2dMZXZlbFVzZWFibGUoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19sb2dnaW5nX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLkRFQlVHKSAmJiAhUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIuTE9HR0VSLmlzTG9nTGV2ZWxVc2VhYmxlKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fbG9nZ2luZ19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5UUkFDRSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBqc29uID0gSlNPTi5wYXJzZShodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoanNvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIuTE9HR0VSLmRlYnVnKCdIVFRQIHJlc3BvbnNlIHdpdGggU1VDQ0VTUycsIGN1cnJlbnRDbGllbnRJZCwganNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybUh0dHBUcmFuc21pdHRlci5MT0dHRVIuZXJyb3IoJ1Jlc3BvbnNlIGNvdWxkIG5vdCBiZSBwYXJzZWQgdG8gSlNPTiBmb3IgbG9nZ2luZycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIuTE9HR0VSLnRyYWNlKCdIVFRQIHJlc3BvbnNlIHdpdGggU1VDQ0VTUycsIGN1cnJlbnRDbGllbnRJZCwgaHR0cC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaHR0cC5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFJFUVVFU1RfVElNRU9VVDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybUh0dHBUcmFuc21pdHRlci5MT0dHRVIuZXJyb3IoJ0hUVFAgcmVxdWVzdCB0aW1lb3V0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IocmVqZWN0LCBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19lcnJvcnNfX1tcImJcIiAvKiBEb2xwaGluU2Vzc2lvbkVycm9yICovXSgnUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IFNlc3Npb24gVGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZhaWxlZF9hdHRlbXB0IDw9IHRoaXMubWF4UmV0cnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxlZF9hdHRlbXB0ID0gdGhpcy5mYWlsZWRfYXR0ZW1wdCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsYXRmb3JtSHR0cFRyYW5zbWl0dGVyLkxPR0dFUi5lcnJvcignSFRUUCB1bnN1cHBvcnRlZCBzdGF0dXMsIHdpdGggSFRUUCBzdGF0dXMnLCBodHRwLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IocmVqZWN0LCBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19lcnJvcnNfX1tcImRcIiAvKiBIdHRwUmVzcG9uc2VFcnJvciAqL10oJ1BsYXRmb3JtSHR0cFRyYW5zbWl0dGVyOiBIVFRQIFN0YXR1cyAhPSAyMDAgKCcgKyBodHRwLnN0YXR1cyArICcpJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaHR0cC5vcGVuKCdQT1NUJywgdGhpcy51cmwpO1xuICAgICAgICAgICAgaWYgKE9iamVjdChfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX3V0aWxzX19bXCJjXCIgLyogZXhpc3RzICovXSkodGhpcy5jbGllbnRJZCkpIHtcbiAgICAgICAgICAgICAgICBodHRwLnNldFJlcXVlc3RIZWFkZXIoQ0xJRU5UX0lEX0hUVFBfSEVBREVSX05BTUUsIHRoaXMuY2xpZW50SWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0KF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fdXRpbHNfX1tcImNcIiAvKiBleGlzdHMgKi9dKSh0aGlzLmhlYWRlcnNJbmZvKSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5oZWFkZXJzSW5mbykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJzSW5mby5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cC5zZXRSZXF1ZXN0SGVhZGVyKGksIHRoaXMuaGVhZGVyc0luZm9baV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgZW5jb2RlZENvbW1hbmRzID0gX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19jb21tYW5kc19jb2RlY19fW1wiYVwiIC8qIGRlZmF1bHQgKi9dLmVuY29kZShjb21tYW5kcyk7XG5cbiAgICAgICAgICAgIGlmIChQbGF0Zm9ybUh0dHBUcmFuc21pdHRlci5MT0dHRVIuaXNMb2dMZXZlbFVzZWFibGUoX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV81X19sb2dnaW5nX19bXCJhXCIgLyogTG9nTGV2ZWwgKi9dLkRFQlVHKSAmJiAhUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIuTE9HR0VSLmlzTG9nTGV2ZWxVc2VhYmxlKF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fbG9nZ2luZ19fW1wiYVwiIC8qIExvZ0xldmVsICovXS5UUkFDRSkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbW1hbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21tYW5kID0gY29tbWFuZHNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21tYW5kLmlkID09PSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfX2NvbW1hbmRzX2NvbW1hbmRDb25zdGFudHNfX1tcInZcIiAvKiBWQUxVRV9DSEFOR0VEX0NPTU1BTkRfSUQgKi9dKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBQbGF0Zm9ybUh0dHBUcmFuc21pdHRlci5MT0dHRVIuZGVidWcoJ3NlbmQnLCBjb21tYW5kLCBlbmNvZGVkQ29tbWFuZHMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBQbGF0Zm9ybUh0dHBUcmFuc21pdHRlci5MT0dHRVIudHJhY2UoJ3NlbmQnLCBjb21tYW5kcywgZW5jb2RlZENvbW1hbmRzKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZhaWxlZF9hdHRlbXB0ID4gdGhpcy5tYXhSZXRyeSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGh0dHAuc2VuZChlbmNvZGVkQ29tbWFuZHMpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMudGltZW91dCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBodHRwLnNlbmQoZW5jb2RlZENvbW1hbmRzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0cmFuc21pdChjb21tYW5kcywgb25Eb25lKSB7XG4gICAgICAgIHRoaXMuX3NlbmQoY29tbWFuZHMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZVRleHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQ29tbWFuZHMgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX2NvbW1hbmRzX2NvZGVjX19bXCJhXCIgLyogZGVmYXVsdCAqL10uZGVjb2RlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmUocmVzcG9uc2VDb21tYW5kcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX2Vycm9yc19fW1wiYVwiIC8qIERvbHBoaW5SZW1vdGluZ0Vycm9yICovXSgnUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IFBhcnNlIGVycm9yOiAoSW5jb3JyZWN0IHJlc3BvbnNlID0gJyArIHJlc3BvbnNlVGV4dCArICcpJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19lcnJvcnNfX1tcImFcIiAvKiBEb2xwaGluUmVtb3RpbmdFcnJvciAqL10oJ1BsYXRmb3JtSHR0cFRyYW5zbWl0dGVyOiBFbXB0eSByZXNwb25zZScpKTtcbiAgICAgICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIG9uRG9uZShbXSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaWduYWwoY29tbWFuZCkge1xuICAgICAgICB0aGlzLl9zZW5kKFtjb21tYW5kXSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpKTtcbiAgICB9XG59XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9IFBsYXRmb3JtSHR0cFRyYW5zbWl0dGVyO1xuXG5cblBsYXRmb3JtSHR0cFRyYW5zbWl0dGVyLkxPR0dFUiA9IF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fbG9nZ2luZ19fW1wiYlwiIC8qIExvZ2dlckZhY3RvcnkgKi9dLmdldExvZ2dlcignUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXInKTtcblxuX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX2VtaXR0ZXJfY29tcG9uZW50X19fZGVmYXVsdCgpKFBsYXRmb3JtSHR0cFRyYW5zbWl0dGVyLnByb3RvdHlwZSk7XG5cblxuLyoqKi8gfSksXG4vKiAxMzYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5jbGFzcyBEb2xwaGluUmVtb3RpbmdFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSA9ICdSZW1vdGluZyBFcnJvcicsIGRldGFpbCkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZGV0YWlsID0gZGV0YWlsIHx8IHVuZGVmaW5lZDtcbiAgfVxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBEb2xwaGluUmVtb3RpbmdFcnJvcjtcblxuXG5jbGFzcyBEb2xwaGluU2Vzc2lvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlID0gJ1Nlc3Npb24gRXJyb3InKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJiXCJdID0gRG9scGhpblNlc3Npb25FcnJvcjtcblxuXG5jbGFzcyBIdHRwUmVzcG9uc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSA9ICdIdHRwIFJlc3BvbnNlIEVycm9yJykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICB9XG59XG4vKiBoYXJtb255IGV4cG9ydCAoaW1tdXRhYmxlKSAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiZFwiXSA9IEh0dHBSZXNwb25zZUVycm9yO1xuXG5cbmNsYXNzIEh0dHBOZXR3b3JrRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSA9ICdIdHRwIE5ldHdvcmsgRXJyb3InKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIH1cbn1cbi8qIGhhcm1vbnkgZXhwb3J0IChpbW11dGFibGUpICovIF9fd2VicGFja19leHBvcnRzX19bXCJjXCJdID0gSHR0cE5ldHdvcmtFcnJvcjtcblxuXG4vKioqLyB9KSxcbi8qIDEzNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2xvZ2dpbmdfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cblxuY2xhc3MgUmVtb3RpbmdFcnJvckhhbmRsZXIge1xuXG4gICAgb25FcnJvcihlcnJvcikge1xuICAgICAgICBSZW1vdGluZ0Vycm9ySGFuZGxlci5MT0dHRVIuZXJyb3IoZXJyb3IpO1xuICAgIH1cblxufVxuLyogaGFybW9ueSBleHBvcnQgKGltbXV0YWJsZSkgKi8gX193ZWJwYWNrX2V4cG9ydHNfX1tcImFcIl0gPSBSZW1vdGluZ0Vycm9ySGFuZGxlcjtcblxuXG5SZW1vdGluZ0Vycm9ySGFuZGxlci5MT0dHRVIgPSBfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX2xvZ2dpbmdfX1tcImJcIiAvKiBMb2dnZXJGYWN0b3J5ICovXS5nZXRMb2dnZXIoJ1JlbW90aW5nRXJyb3JIYW5kbGVyJyk7XG5cbi8qKiovIH0pXG4vKioqKioqLyBdKTtcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZG9scGhpbi1wbGF0Zm9ybS5qcy5tYXAiLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbid1c2Ugc3RyaWN0JztcbnZhciBkb2xwaGluQ2xpZW50ID0gcmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvZG9scGhpbi1wbGF0Zm9ybS5qcycpO1xuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScsIFtdKTtcblxuXG5hbmd1bGFyLm1vZHVsZSgnRG9scGhpblBsYXRmb3JtJykucHJvdmlkZXIoJyRkb2xwaGluQ29uZmlnJywgW2Z1bmN0aW9uICgpIHtcblxuICAgIHZhciAkY2ZnID0ge307XG4gICAgdGhpcy5jb25maWd1cmUgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgICAgICRjZmcgPSBjZmc7XG4gICAgfTtcblxuICAgIHRoaXMuJGdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICRjZmc7XG4gICAgfTtcblxufV0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnRG9scGhpblBsYXRmb3JtJykuZmFjdG9yeSgnbG9nZ2VyJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkb2xwaGluQ2xpZW50LkxvZ2dlckZhY3RvcnkuZ2V0TG9nZ2VyKCdEb2xwaGluUGxhdGZvcm0nKTtcbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnRG9scGhpblBsYXRmb3JtJykuZmFjdG9yeSgnY2xpZW50Q29udGV4dEZhY3RvcnknLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBkb2xwaGluQ2xpZW50LkNsaWVudENvbnRleHRGYWN0b3J5KCk7XG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScpLmZhY3RvcnkoJ3ZhbmlsbGFDbGllbnRDb250ZXh0JywgWydjbGllbnRDb250ZXh0RmFjdG9yeScsICckZG9scGhpbkNvbmZpZycsIGZ1bmN0aW9uIChjbGllbnRDb250ZXh0RmFjdG9yeSwgJGRvbHBoaW5Db25maWcpIHtcbiAgICByZXR1cm4gY2xpZW50Q29udGV4dEZhY3RvcnkuY3JlYXRlKCRkb2xwaGluQ29uZmlnLkRPTFBISU5fVVJMLCAkZG9scGhpbkNvbmZpZyk7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nKS5mYWN0b3J5KCdkb2xwaGluQmluZGluZycsIFsnJHJvb3RTY29wZScsICckdGltZW91dCcsICd2YW5pbGxhQ2xpZW50Q29udGV4dCcsICdsb2dnZXInLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQsIHZhbmlsbGFDbGllbnRDb250ZXh0LCBsb2dnZXIpIHtcblxuICAgICRyb290U2NvcGUud2FpdGluZ0Zvckdsb2JhbERvbHBoaW5BcHBseSA9IGZhbHNlO1xuXG4gICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEkcm9vdFNjb3BlLndhaXRpbmdGb3JHbG9iYWxEb2xwaGluQXBwbHkpIHtcbiAgICAgICAgICAgICRyb290U2NvcGUud2FpdGluZ0Zvckdsb2JhbERvbHBoaW5BcHBseSA9IHRydWU7XG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS53YWl0aW5nRm9yR2xvYmFsRG9scGhpbkFwcGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdDcmVhdGluZyBEb2xwaGluIFBsYXRmb3JtIGNvbnRyb2xsZXInKTtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZG9scGhpbkJpbmRpbmcgPSB7XG5cbiAgICAgICAgaW5qZWN0QXJyYXk6IGZ1bmN0aW9uIChiYXNlQXJyYXksIHN0YXJ0SW5kZXgsIGluc2VydEFycmF5KSB7XG4gICAgICAgICAgICBiYXNlQXJyYXkuc3BsaWNlLmFwcGx5KGJhc2VBcnJheSwgW3N0YXJ0SW5kZXgsIDBdLmNvbmNhdChpbnNlcnRBcnJheSkpO1xuICAgICAgICB9LFxuICAgICAgICBleGlzdHM6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBvYmplY3QgIT09IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGRlZXBFcXVhbDogZnVuY3Rpb24gKGFycmF5MSwgYXJyYXkyKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXkxID09PSBhcnJheTIgfHwgKCF0aGlzLmV4aXN0cyhhcnJheTEpICYmICF0aGlzLmV4aXN0cyhhcnJheTIpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZXhpc3RzKGFycmF5MSkgIT09IHRoaXMuZXhpc3RzKGFycmF5MikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbiA9IGFycmF5MS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoYXJyYXkyLmxlbmd0aCAhPT0gbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGJlYW5NYW5hZ2VyKSB7XG4gICAgICAgICAgICBiZWFuTWFuYWdlci5vbkFkZGVkKGRvbHBoaW5CaW5kaW5nLm9uQmVhbkFkZGVkSGFuZGxlcik7XG4gICAgICAgICAgICBiZWFuTWFuYWdlci5vblJlbW92ZWQoZG9scGhpbkJpbmRpbmcub25CZWFuUmVtb3ZlZEhhbmRsZXIpO1xuICAgICAgICAgICAgYmVhbk1hbmFnZXIub25CZWFuVXBkYXRlKGRvbHBoaW5CaW5kaW5nLm9uQmVhblVwZGF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgYmVhbk1hbmFnZXIub25BcnJheVVwZGF0ZShkb2xwaGluQmluZGluZy5vbkFycmF5VXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gYmluZGluZyBsaXN0ZW5lcnMgZm9yIEFuZ3VsYXIgcmVnaXN0ZXJlZCcpO1xuICAgICAgICB9LFxuICAgICAgICB3YXRjaEF0dHJpYnV0ZTogZnVuY3Rpb24gKGJlYW4sIGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdBZGRlZCBBbmd1bGFyIGxpc3RlbmVyIGZvciBwcm9wZXJ0eSAnICsgYXR0cmlidXRlICsgJyBvZiBiZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSk7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiR3YXRjaChcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiZWFuW2F0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnVmFsdWUgJyArIGF0dHJpYnV0ZSArICcgb2YgYmVhbiAnICsgSlNPTi5zdHJpbmdpZnkoYmVhbikgKyAnIGNoYW5nZWQgZnJvbSAnICsgb2xkVmFsdWUgKyAnIHRvICcgKyBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbmlsbGFDbGllbnRDb250ZXh0LmJlYW5NYW5hZ2VyLmNsYXNzUmVwb3NpdG9yeS5ub3RpZnlCZWFuQ2hhbmdlKGJlYW4sIGF0dHJpYnV0ZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVhbkFkZGVkSGFuZGxlcjogZnVuY3Rpb24gKGJlYW4pIHtcbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnQmVhbiAnICsgSlNPTi5zdHJpbmdpZnkoYmVhbikgKyAnIGFkZGVkJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGF0dHIgaW4gYmVhbikge1xuICAgICAgICAgICAgICAgIGRvbHBoaW5CaW5kaW5nLndhdGNoQXR0cmlidXRlKGJlYW4sIGF0dHIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcm9vdFNjb3BlLmFwcGx5SW5Bbmd1bGFyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVhblJlbW92ZWRIYW5kbGVyOiBmdW5jdGlvbiAoYmVhbikge1xuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdCZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSArICcgcmVtb3ZlZCcpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlYW5VcGRhdGVIYW5kbGVyOiBmdW5jdGlvbiAoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBuZXdQcm9wZXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBhdHRyIGluIGJlYW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ciA9PT0gcHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3UHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ1ZhbHVlICcgKyBwcm9wZXJ0eU5hbWUgKyAnIHdhcyBhZGRlZCB0byBiZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSk7XG4gICAgICAgICAgICAgICAgZG9scGhpbkJpbmRpbmcud2F0Y2hBdHRyaWJ1dGUoYmVhbiwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnUmVjZWl2ZWQgYmVhbiB1cGRhdGUgZm9yIHByb3BlcnR5ICcgKyBwcm9wZXJ0eU5hbWUgKyAnIHdpdGhvdXQgYW55IGNoYW5nZScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdCZWFuIHVwZGF0ZSBmb3IgcHJvcGVydHkgJyArIHByb3BlcnR5TmFtZSArICcgd2l0aCBuZXcgdmFsdWUgXCInICsgbmV3VmFsdWUgKyAnXCInKTtcblxuICAgICAgICAgICAgYmVhbltwcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLmFwcGx5SW5Bbmd1bGFyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQXJyYXlVcGRhdGVIYW5kbGVyOiBmdW5jdGlvbiAoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIG5ld0VsZW1lbnRzKSB7XG4gICAgICAgICAgICB2YXIgYXJyYXkgPSBiZWFuW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICB2YXIgb2xkRWxlbWVudHMgPSBhcnJheS5zbGljZShpbmRleCwgaW5kZXggKyBjb3VudCk7XG4gICAgICAgICAgICBpZiAoZG9scGhpbkJpbmRpbmcuZGVlcEVxdWFsKG5ld0VsZW1lbnRzLCBvbGRFbGVtZW50cykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnQXJyYXkgdXBkYXRlIGZvciBwcm9wZXJ0eSAnICsgcHJvcGVydHlOYW1lICsgJyBzdGFydGluZyBhdCBpbmRleCAnICsgaW5kZXggKyAnIHdpdGggJyArIEpTT04uc3RyaW5naWZ5KG5ld0VsZW1lbnRzKSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3RWxlbWVudHMgPT09ICd1bmRlZmluZWQnIHx8IChuZXdFbGVtZW50cyAmJiBuZXdFbGVtZW50cy5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCBjb3VudCk7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2xwaGluQmluZGluZy5pbmplY3RBcnJheShhcnJheSwgaW5kZXgsIG5ld0VsZW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIGZvciAoYmVhbiBpbiBuZXdFbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhdHRyIGluIGJlYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbHBoaW5CaW5kaW5nLndhdGNoQXR0cmlidXRlKGJlYW4sIGF0dHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGxvZ2dlci5kZWJ1ZygnRG9scGhpbiBQbGF0Zm9ybSBiaW5kaW5nIGNyZWF0ZWQnKTtcblxuICAgIHJldHVybiBkb2xwaGluQmluZGluZztcblxufV0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnRG9scGhpblBsYXRmb3JtJykuZmFjdG9yeSgnY2xpZW50Q29udGV4dCcsIFsndmFuaWxsYUNsaWVudENvbnRleHQnLCAnZG9scGhpbkJpbmRpbmcnLCAnJHdpbmRvdycsICdsb2dnZXInLCBmdW5jdGlvbiAodmFuaWxsYUNsaWVudENvbnRleHQsIGRvbHBoaW5CaW5kaW5nLCAkd2luZG93LCBsb2dnZXIpIHtcbiAgICB2YXIgY2xpZW50Q29udGV4dCA9IHtcbiAgICAgICAgY3JlYXRlQ29udHJvbGxlcjogZnVuY3Rpb24gKHNjb3BlLCBjb250cm9sbGVyTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbmlsbGFDbGllbnRDb250ZXh0LmNyZWF0ZUNvbnRyb2xsZXIoY29udHJvbGxlck5hbWUpLnRoZW4oZnVuY3Rpb24gKGNvbnRyb2xsZXJQcm94eSkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnQ3JlYXRpbmcgRG9scGhpbiBQbGF0Zm9ybSBjb250cm9sbGVyICcgKyBjb250cm9sbGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyLmRlYnVnKCdEZXN0cm95aW5nIERvbHBoaW4gUGxhdGZvcm0gY29udHJvbGxlciAnICsgY29udHJvbGxlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyUHJveHkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNjb3BlLm1vZGVsID0gY29udHJvbGxlclByb3h5Lm1vZGVsO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyUHJveHk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzY29ubmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFuaWxsYUNsaWVudENvbnRleHQuZGlzY29ubmVjdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5kZWJ1ZygnRG9scGhpbiBQbGF0Zm9ybSBjb250ZXh0IGRpc2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhbmlsbGFDbGllbnRDb250ZXh0LmNvbm5lY3QoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gY29udGV4dCBjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YW5pbGxhQ2xpZW50Q29udGV4dC5vbkNvbm5lY3QoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gY29udGV4dCBjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRvbHBoaW5CaW5kaW5nLmluaXQodmFuaWxsYUNsaWVudENvbnRleHQuYmVhbk1hbmFnZXIpO1xuICAgICR3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBjbGllbnRDb250ZXh0LmRpc2Nvbm5lY3Q7XG5cbiAgICBsb2dnZXIuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gY29udGV4dCBjcmVhdGVkJyk7XG5cbiAgICByZXR1cm4gY2xpZW50Q29udGV4dDtcbn1dKTtcbiJdfQ==
