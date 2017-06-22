(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
    if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (typeof define === "function" && define.amd) {
        define([], f);
    } else {
        var g;if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }g.dolphin = f();
    }
})(function () {
    var define, module, exports;return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }return n[o].exports;
        }var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) {
            s(r[o]);
        }return s;
    }({ 1: [function (_dereq_, module, exports) {
            'use strict';

            _dereq_('../modules/es6.object.to-string');
            _dereq_('../modules/es6.string.iterator');
            _dereq_('../modules/web.dom.iterable');
            _dereq_('../modules/es6.map');
            _dereq_('../modules/es7.map.to-json');
            module.exports = _dereq_('../modules/_core').Map;
        }, { "../modules/_core": 18, "../modules/es6.map": 72, "../modules/es6.object.to-string": 73, "../modules/es6.string.iterator": 76, "../modules/es7.map.to-json": 77, "../modules/web.dom.iterable": 79 }], 2: [function (_dereq_, module, exports) {
            'use strict';

            _dereq_('../modules/es6.object.to-string');
            _dereq_('../modules/es6.string.iterator');
            _dereq_('../modules/web.dom.iterable');
            _dereq_('../modules/es6.promise');
            module.exports = _dereq_('../modules/_core').Promise;
        }, { "../modules/_core": 18, "../modules/es6.object.to-string": 73, "../modules/es6.promise": 74, "../modules/es6.string.iterator": 76, "../modules/web.dom.iterable": 79 }], 3: [function (_dereq_, module, exports) {
            'use strict';

            _dereq_('../modules/es6.object.to-string');
            _dereq_('../modules/es6.string.iterator');
            _dereq_('../modules/web.dom.iterable');
            _dereq_('../modules/es6.set');
            _dereq_('../modules/es7.set.to-json');
            module.exports = _dereq_('../modules/_core').Set;
        }, { "../modules/_core": 18, "../modules/es6.object.to-string": 73, "../modules/es6.set": 75, "../modules/es6.string.iterator": 76, "../modules/es7.set.to-json": 78, "../modules/web.dom.iterable": 79 }], 4: [function (_dereq_, module, exports) {
            'use strict';

            module.exports = function (it) {
                if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                return it;
            };
        }, {}], 5: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = function () {/* empty */};
        }, {}], 6: [function (_dereq_, module, exports) {
            'use strict';

            module.exports = function (it, Constructor, name, forbiddenField) {
                if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
                    throw TypeError(name + ': incorrect invocation!');
                }return it;
            };
        }, {}], 7: [function (_dereq_, module, exports) {
            'use strict';

            var isObject = _dereq_('./_is-object');
            module.exports = function (it) {
                if (!isObject(it)) throw TypeError(it + ' is not an object!');
                return it;
            };
        }, { "./_is-object": 36 }], 8: [function (_dereq_, module, exports) {
            'use strict';

            var forOf = _dereq_('./_for-of');

            module.exports = function (iter, ITERATOR) {
                var result = [];
                forOf(iter, false, result.push, result, ITERATOR);
                return result;
            };
        }, { "./_for-of": 26 }], 9: [function (_dereq_, module, exports) {
            'use strict';

            // false -> Array#indexOf
            // true  -> Array#includes

            var toIObject = _dereq_('./_to-iobject'),
                toLength = _dereq_('./_to-length'),
                toIndex = _dereq_('./_to-index');
            module.exports = function (IS_INCLUDES) {
                return function ($this, el, fromIndex) {
                    var O = toIObject($this),
                        length = toLength(O.length),
                        index = toIndex(fromIndex, length),
                        value;
                    // Array#includes uses SameValueZero equality algorithm
                    if (IS_INCLUDES && el != el) while (length > index) {
                        value = O[index++];
                        if (value != value) return true;
                        // Array#toIndex ignores holes, Array#includes - not
                    } else for (; length > index; index++) {
                        if (IS_INCLUDES || index in O) {
                            if (O[index] === el) return IS_INCLUDES || index || 0;
                        }
                    }return !IS_INCLUDES && -1;
                };
            };
        }, { "./_to-index": 62, "./_to-iobject": 64, "./_to-length": 65 }], 10: [function (_dereq_, module, exports) {
            'use strict';

            // 0 -> Array#forEach
            // 1 -> Array#map
            // 2 -> Array#filter
            // 3 -> Array#some
            // 4 -> Array#every
            // 5 -> Array#find
            // 6 -> Array#findIndex

            var ctx = _dereq_('./_ctx'),
                IObject = _dereq_('./_iobject'),
                toObject = _dereq_('./_to-object'),
                toLength = _dereq_('./_to-length'),
                asc = _dereq_('./_array-species-create');
            module.exports = function (TYPE, $create) {
                var IS_MAP = TYPE == 1,
                    IS_FILTER = TYPE == 2,
                    IS_SOME = TYPE == 3,
                    IS_EVERY = TYPE == 4,
                    IS_FIND_INDEX = TYPE == 6,
                    NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
                    create = $create || asc;
                return function ($this, callbackfn, that) {
                    var O = toObject($this),
                        self = IObject(O),
                        f = ctx(callbackfn, that, 3),
                        length = toLength(self.length),
                        index = 0,
                        result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
                        val,
                        res;
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
        }, { "./_array-species-create": 12, "./_ctx": 19, "./_iobject": 33, "./_to-length": 65, "./_to-object": 66 }], 11: [function (_dereq_, module, exports) {
            'use strict';

            var isObject = _dereq_('./_is-object'),
                isArray = _dereq_('./_is-array'),
                SPECIES = _dereq_('./_wks')('species');

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
        }, { "./_is-array": 35, "./_is-object": 36, "./_wks": 69 }], 12: [function (_dereq_, module, exports) {
            'use strict';

            // 9.4.2.3 ArraySpeciesCreate(originalArray, length)

            var speciesConstructor = _dereq_('./_array-species-constructor');

            module.exports = function (original, length) {
                return new (speciesConstructor(original))(length);
            };
        }, { "./_array-species-constructor": 11 }], 13: [function (_dereq_, module, exports) {
            'use strict';

            // getting tag from 19.1.3.6 Object.prototype.toString()

            var cof = _dereq_('./_cof'),
                TAG = _dereq_('./_wks')('toStringTag'
            // ES3 wrong here
            ),
                ARG = cof(function () {
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
                : ARG ? cof(O
                // ES3 arguments fallback
                ) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
            };
        }, { "./_cof": 14, "./_wks": 69 }], 14: [function (_dereq_, module, exports) {
            "use strict";

            var toString = {}.toString;

            module.exports = function (it) {
                return toString.call(it).slice(8, -1);
            };
        }, {}], 15: [function (_dereq_, module, exports) {
            'use strict';

            var dP = _dereq_('./_object-dp').f,
                create = _dereq_('./_object-create'),
                redefineAll = _dereq_('./_redefine-all'),
                ctx = _dereq_('./_ctx'),
                anInstance = _dereq_('./_an-instance'),
                defined = _dereq_('./_defined'),
                forOf = _dereq_('./_for-of'),
                $iterDefine = _dereq_('./_iter-define'),
                step = _dereq_('./_iter-step'),
                setSpecies = _dereq_('./_set-species'),
                DESCRIPTORS = _dereq_('./_descriptors'),
                fastKey = _dereq_('./_meta').fastKey,
                SIZE = DESCRIPTORS ? '_s' : 'size';

            var getEntry = function getEntry(that, key) {
                // fast case
                var index = fastKey(key),
                    entry;
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
                            for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
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
                            var that = this,
                                entry = getEntry(that, key);
                            if (entry) {
                                var next = entry.n,
                                    prev = entry.p;
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
                        forEach: function forEach(callbackfn /*, that = undefined */) {
                            anInstance(this, C, 'forEach');
                            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
                                entry;
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
                            return !!getEntry(this, key);
                        }
                    });
                    if (DESCRIPTORS) dP(C.prototype, 'size', {
                        get: function get() {
                            return defined(this[SIZE]);
                        }
                    });
                    return C;
                },
                def: function def(that, key, value) {
                    var entry = getEntry(that, key),
                        prev,
                        index;
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
                        this._t = iterated; // target
                        this._k = kind; // kind
                        this._l = undefined; // previous
                    }, function () {
                        var that = this,
                            kind = that._k,
                            entry = that._l;
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
        }, { "./_an-instance": 6, "./_ctx": 19, "./_defined": 20, "./_descriptors": 21, "./_for-of": 26, "./_iter-define": 39, "./_iter-step": 41, "./_meta": 44, "./_object-create": 46, "./_object-dp": 47, "./_redefine-all": 53, "./_set-species": 55 }], 16: [function (_dereq_, module, exports) {
            'use strict';

            // https://github.com/DavidBruant/Map-Set.prototype.toJSON

            var classof = _dereq_('./_classof'),
                from = _dereq_('./_array-from-iterable');
            module.exports = function (NAME) {
                return function toJSON() {
                    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
                    return from(this);
                };
            };
        }, { "./_array-from-iterable": 8, "./_classof": 13 }], 17: [function (_dereq_, module, exports) {
            'use strict';

            var global = _dereq_('./_global'),
                $export = _dereq_('./_export'),
                meta = _dereq_('./_meta'),
                fails = _dereq_('./_fails'),
                hide = _dereq_('./_hide'),
                redefineAll = _dereq_('./_redefine-all'),
                forOf = _dereq_('./_for-of'),
                anInstance = _dereq_('./_an-instance'),
                isObject = _dereq_('./_is-object'),
                setToStringTag = _dereq_('./_set-to-string-tag'),
                dP = _dereq_('./_object-dp').f,
                each = _dereq_('./_array-methods')(0),
                DESCRIPTORS = _dereq_('./_descriptors');

            module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
                var Base = global[NAME],
                    C = Base,
                    ADDER = IS_MAP ? 'set' : 'add',
                    proto = C && C.prototype,
                    O = {};
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
                    if ('size' in proto) dP(C.prototype, 'size', {
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
        }, { "./_an-instance": 6, "./_array-methods": 10, "./_descriptors": 21, "./_export": 24, "./_fails": 25, "./_for-of": 26, "./_global": 27, "./_hide": 29, "./_is-object": 36, "./_meta": 44, "./_object-dp": 47, "./_redefine-all": 53, "./_set-to-string-tag": 56 }], 18: [function (_dereq_, module, exports) {
            'use strict';

            var core = module.exports = { version: '2.4.0' };
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
        }, {}], 19: [function (_dereq_, module, exports) {
            'use strict';

            // optional / simple context binding

            var aFunction = _dereq_('./_a-function');
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
        }, { "./_a-function": 4 }], 20: [function (_dereq_, module, exports) {
            "use strict";

            // 7.2.1 RequireObjectCoercible(argument)

            module.exports = function (it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };
        }, {}], 21: [function (_dereq_, module, exports) {
            'use strict';

            // Thank's IE8 for his funny defineProperty

            module.exports = !_dereq_('./_fails')(function () {
                return Object.defineProperty({}, 'a', { get: function get() {
                        return 7;
                    } }).a != 7;
            });
        }, { "./_fails": 25 }], 22: [function (_dereq_, module, exports) {
            'use strict';

            var isObject = _dereq_('./_is-object'),
                document = _dereq_('./_global').document
            // in old IE typeof document.createElement is 'object'

            ,
                is = isObject(document) && isObject(document.createElement);
            module.exports = function (it) {
                return is ? document.createElement(it) : {};
            };
        }, { "./_global": 27, "./_is-object": 36 }], 23: [function (_dereq_, module, exports) {
            'use strict';

            // IE 8- don't enum bug keys

            module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
        }, {}], 24: [function (_dereq_, module, exports) {
            'use strict';

            var global = _dereq_('./_global'),
                core = _dereq_('./_core'),
                ctx = _dereq_('./_ctx'),
                hide = _dereq_('./_hide'),
                PROTOTYPE = 'prototype';

            var $export = function $export(type, name, source) {
                var IS_FORCED = type & $export.F,
                    IS_GLOBAL = type & $export.G,
                    IS_STATIC = type & $export.S,
                    IS_PROTO = type & $export.P,
                    IS_BIND = type & $export.B,
                    IS_WRAP = type & $export.W,
                    exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
                    expProto = exports[PROTOTYPE],
                    target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
                    key,
                    own,
                    out;
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
                    : IS_BIND && own ? ctx(out, global
                    // wrap global constructors for prevent change them in library
                    ) : IS_WRAP && target[key] == out ? function (C) {
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
        }, { "./_core": 18, "./_ctx": 19, "./_global": 27, "./_hide": 29 }], 25: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = function (exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };
        }, {}], 26: [function (_dereq_, module, exports) {
            'use strict';

            var ctx = _dereq_('./_ctx'),
                call = _dereq_('./_iter-call'),
                isArrayIter = _dereq_('./_is-array-iter'),
                anObject = _dereq_('./_an-object'),
                toLength = _dereq_('./_to-length'),
                getIterFn = _dereq_('./core.get-iterator-method'),
                BREAK = {},
                RETURN = {};
            var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
                var iterFn = ITERATOR ? function () {
                    return iterable;
                } : getIterFn(iterable),
                    f = ctx(fn, that, entries ? 2 : 1),
                    index = 0,
                    length,
                    step,
                    iterator,
                    result;
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
            _exports.BREAK = BREAK;
            _exports.RETURN = RETURN;
        }, { "./_an-object": 7, "./_ctx": 19, "./_is-array-iter": 34, "./_iter-call": 37, "./_to-length": 65, "./core.get-iterator-method": 70 }], 27: [function (_dereq_, module, exports) {
            'use strict';

            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028

            var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
        }, {}], 28: [function (_dereq_, module, exports) {
            "use strict";

            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function (it, key) {
                return hasOwnProperty.call(it, key);
            };
        }, {}], 29: [function (_dereq_, module, exports) {
            'use strict';

            var dP = _dereq_('./_object-dp'),
                createDesc = _dereq_('./_property-desc');
            module.exports = _dereq_('./_descriptors') ? function (object, key, value) {
                return dP.f(object, key, createDesc(1, value));
            } : function (object, key, value) {
                object[key] = value;
                return object;
            };
        }, { "./_descriptors": 21, "./_object-dp": 47, "./_property-desc": 52 }], 30: [function (_dereq_, module, exports) {
            'use strict';

            module.exports = _dereq_('./_global').document && document.documentElement;
        }, { "./_global": 27 }], 31: [function (_dereq_, module, exports) {
            'use strict';

            module.exports = !_dereq_('./_descriptors') && !_dereq_('./_fails')(function () {
                return Object.defineProperty(_dereq_('./_dom-create')('div'), 'a', { get: function get() {
                        return 7;
                    } }).a != 7;
            });
        }, { "./_descriptors": 21, "./_dom-create": 22, "./_fails": 25 }], 32: [function (_dereq_, module, exports) {
            "use strict";

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
        }, {}], 33: [function (_dereq_, module, exports) {
            'use strict';

            // fallback for non-array-like ES3 and non-enumerable old V8 strings

            var cof = _dereq_('./_cof');
            module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
                return cof(it) == 'String' ? it.split('') : Object(it);
            };
        }, { "./_cof": 14 }], 34: [function (_dereq_, module, exports) {
            'use strict';

            // check on default Array iterator

            var Iterators = _dereq_('./_iterators'),
                ITERATOR = _dereq_('./_wks')('iterator'),
                ArrayProto = Array.prototype;

            module.exports = function (it) {
                return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
            };
        }, { "./_iterators": 42, "./_wks": 69 }], 35: [function (_dereq_, module, exports) {
            'use strict';

            // 7.2.2 IsArray(argument)

            var cof = _dereq_('./_cof');
            module.exports = Array.isArray || function isArray(arg) {
                return cof(arg) == 'Array';
            };
        }, { "./_cof": 14 }], 36: [function (_dereq_, module, exports) {
            'use strict';

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            module.exports = function (it) {
                return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
            };
        }, {}], 37: [function (_dereq_, module, exports) {
            'use strict';

            // call something on iterator step with safe closing on error

            var anObject = _dereq_('./_an-object');
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
        }, { "./_an-object": 7 }], 38: [function (_dereq_, module, exports) {
            'use strict';

            var create = _dereq_('./_object-create'),
                descriptor = _dereq_('./_property-desc'),
                setToStringTag = _dereq_('./_set-to-string-tag'),
                IteratorPrototype = {};

            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            _dereq_('./_hide')(IteratorPrototype, _dereq_('./_wks')('iterator'), function () {
                return this;
            });

            module.exports = function (Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
                setToStringTag(Constructor, NAME + ' Iterator');
            };
        }, { "./_hide": 29, "./_object-create": 46, "./_property-desc": 52, "./_set-to-string-tag": 56, "./_wks": 69 }], 39: [function (_dereq_, module, exports) {
            'use strict';

            var LIBRARY = _dereq_('./_library'),
                $export = _dereq_('./_export'),
                redefine = _dereq_('./_redefine'),
                hide = _dereq_('./_hide'),
                has = _dereq_('./_has'),
                Iterators = _dereq_('./_iterators'),
                $iterCreate = _dereq_('./_iter-create'),
                setToStringTag = _dereq_('./_set-to-string-tag'),
                getPrototypeOf = _dereq_('./_object-gpo'),
                ITERATOR = _dereq_('./_wks')('iterator'),
                BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`

            ,
                FF_ITERATOR = '@@iterator',
                KEYS = 'keys',
                VALUES = 'values';

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
                var TAG = NAME + ' Iterator',
                    DEF_VALUES = DEFAULT == VALUES,
                    VALUES_BUG = false,
                    proto = Base.prototype,
                    $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
                    $default = $native || getMethod(DEFAULT),
                    $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
                    $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
                    methods,
                    key,
                    IteratorPrototype;
                // Fix native
                if ($anyNative) {
                    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                    if (IteratorPrototype !== Object.prototype) {
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
        }, { "./_export": 24, "./_has": 28, "./_hide": 29, "./_iter-create": 38, "./_iterators": 42, "./_library": 43, "./_object-gpo": 49, "./_redefine": 54, "./_set-to-string-tag": 56, "./_wks": 69 }], 40: [function (_dereq_, module, exports) {
            'use strict';

            var ITERATOR = _dereq_('./_wks')('iterator'),
                SAFE_CLOSING = false;

            try {
                var riter = [7][ITERATOR]();
                riter['return'] = function () {
                    SAFE_CLOSING = true;
                };
                Array.from(riter, function () {
                    throw 2;
                });
            } catch (e) {/* empty */}

            module.exports = function (exec, skipClosing) {
                if (!skipClosing && !SAFE_CLOSING) return false;
                var safe = false;
                try {
                    var arr = [7],
                        iter = arr[ITERATOR]();
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
        }, { "./_wks": 69 }], 41: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = function (done, value) {
                return { value: value, done: !!done };
            };
        }, {}], 42: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = {};
        }, {}], 43: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = true;
        }, {}], 44: [function (_dereq_, module, exports) {
            'use strict';

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            var META = _dereq_('./_uid')('meta'),
                isObject = _dereq_('./_is-object'),
                has = _dereq_('./_has'),
                setDesc = _dereq_('./_object-dp').f,
                id = 0;
            var isExtensible = Object.isExtensible || function () {
                return true;
            };
            var FREEZE = !_dereq_('./_fails')(function () {
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
        }, { "./_fails": 25, "./_has": 28, "./_is-object": 36, "./_object-dp": 47, "./_uid": 68 }], 45: [function (_dereq_, module, exports) {
            'use strict';

            var global = _dereq_('./_global'),
                macrotask = _dereq_('./_task').set,
                Observer = global.MutationObserver || global.WebKitMutationObserver,
                process = global.process,
                Promise = global.Promise,
                isNode = _dereq_('./_cof')(process) == 'process';

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
                    // browsers with MutationObserver
                } else if (Observer) {
                    var toggle = true,
                        node = document.createTextNode('');
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
        }, { "./_cof": 14, "./_global": 27, "./_task": 61 }], 46: [function (_dereq_, module, exports) {
            'use strict';

            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])

            var anObject = _dereq_('./_an-object'),
                dPs = _dereq_('./_object-dps'),
                enumBugKeys = _dereq_('./_enum-bug-keys'),
                IE_PROTO = _dereq_('./_shared-key')('IE_PROTO'),
                Empty = function Empty() {/* empty */},
                PROTOTYPE = 'prototype';

            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var _createDict = function createDict() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = _dereq_('./_dom-create')('iframe'),
                    i = enumBugKeys.length,
                    lt = '<',
                    gt = '>',
                    iframeDocument;
                iframe.style.display = 'none';
                _dereq_('./_html').appendChild(iframe);
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
        }, { "./_an-object": 7, "./_dom-create": 22, "./_enum-bug-keys": 23, "./_html": 30, "./_object-dps": 48, "./_shared-key": 57 }], 47: [function (_dereq_, module, exports) {
            'use strict';

            var anObject = _dereq_('./_an-object'),
                IE8_DOM_DEFINE = _dereq_('./_ie8-dom-define'),
                toPrimitive = _dereq_('./_to-primitive'),
                dP = Object.defineProperty;

            exports.f = _dereq_('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
        }, { "./_an-object": 7, "./_descriptors": 21, "./_ie8-dom-define": 31, "./_to-primitive": 67 }], 48: [function (_dereq_, module, exports) {
            'use strict';

            var dP = _dereq_('./_object-dp'),
                anObject = _dereq_('./_an-object'),
                getKeys = _dereq_('./_object-keys');

            module.exports = _dereq_('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties),
                    length = keys.length,
                    i = 0,
                    P;
                while (length > i) {
                    dP.f(O, P = keys[i++], Properties[P]);
                }return O;
            };
        }, { "./_an-object": 7, "./_descriptors": 21, "./_object-dp": 47, "./_object-keys": 51 }], 49: [function (_dereq_, module, exports) {
            'use strict';

            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)

            var has = _dereq_('./_has'),
                toObject = _dereq_('./_to-object'),
                IE_PROTO = _dereq_('./_shared-key')('IE_PROTO'),
                ObjectProto = Object.prototype;

            module.exports = Object.getPrototypeOf || function (O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];
                if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                    return O.constructor.prototype;
                }return O instanceof Object ? ObjectProto : null;
            };
        }, { "./_has": 28, "./_shared-key": 57, "./_to-object": 66 }], 50: [function (_dereq_, module, exports) {
            'use strict';

            var has = _dereq_('./_has'),
                toIObject = _dereq_('./_to-iobject'),
                arrayIndexOf = _dereq_('./_array-includes')(false),
                IE_PROTO = _dereq_('./_shared-key')('IE_PROTO');

            module.exports = function (object, names) {
                var O = toIObject(object),
                    i = 0,
                    result = [],
                    key;
                for (key in O) {
                    if (key != IE_PROTO) has(O, key) && result.push(key);
                } // Don't enum bug & hidden keys
                while (names.length > i) {
                    if (has(O, key = names[i++])) {
                        ~arrayIndexOf(result, key) || result.push(key);
                    }
                }return result;
            };
        }, { "./_array-includes": 9, "./_has": 28, "./_shared-key": 57, "./_to-iobject": 64 }], 51: [function (_dereq_, module, exports) {
            'use strict';

            // 19.1.2.14 / 15.2.3.14 Object.keys(O)

            var $keys = _dereq_('./_object-keys-internal'),
                enumBugKeys = _dereq_('./_enum-bug-keys');

            module.exports = Object.keys || function keys(O) {
                return $keys(O, enumBugKeys);
            };
        }, { "./_enum-bug-keys": 23, "./_object-keys-internal": 50 }], 52: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = function (bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };
        }, {}], 53: [function (_dereq_, module, exports) {
            'use strict';

            var hide = _dereq_('./_hide');
            module.exports = function (target, src, safe) {
                for (var key in src) {
                    if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
                }return target;
            };
        }, { "./_hide": 29 }], 54: [function (_dereq_, module, exports) {
            'use strict';

            module.exports = _dereq_('./_hide');
        }, { "./_hide": 29 }], 55: [function (_dereq_, module, exports) {
            'use strict';

            var global = _dereq_('./_global'),
                core = _dereq_('./_core'),
                dP = _dereq_('./_object-dp'),
                DESCRIPTORS = _dereq_('./_descriptors'),
                SPECIES = _dereq_('./_wks')('species');

            module.exports = function (KEY) {
                var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
                if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
                    configurable: true,
                    get: function get() {
                        return this;
                    }
                });
            };
        }, { "./_core": 18, "./_descriptors": 21, "./_global": 27, "./_object-dp": 47, "./_wks": 69 }], 56: [function (_dereq_, module, exports) {
            'use strict';

            var def = _dereq_('./_object-dp').f,
                has = _dereq_('./_has'),
                TAG = _dereq_('./_wks')('toStringTag');

            module.exports = function (it, tag, stat) {
                if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
            };
        }, { "./_has": 28, "./_object-dp": 47, "./_wks": 69 }], 57: [function (_dereq_, module, exports) {
            'use strict';

            var shared = _dereq_('./_shared')('keys'),
                uid = _dereq_('./_uid');
            module.exports = function (key) {
                return shared[key] || (shared[key] = uid(key));
            };
        }, { "./_shared": 58, "./_uid": 68 }], 58: [function (_dereq_, module, exports) {
            'use strict';

            var global = _dereq_('./_global'),
                SHARED = '__core-js_shared__',
                store = global[SHARED] || (global[SHARED] = {});
            module.exports = function (key) {
                return store[key] || (store[key] = {});
            };
        }, { "./_global": 27 }], 59: [function (_dereq_, module, exports) {
            'use strict';

            // 7.3.20 SpeciesConstructor(O, defaultConstructor)

            var anObject = _dereq_('./_an-object'),
                aFunction = _dereq_('./_a-function'),
                SPECIES = _dereq_('./_wks')('species');
            module.exports = function (O, D) {
                var C = anObject(O).constructor,
                    S;
                return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
            };
        }, { "./_a-function": 4, "./_an-object": 7, "./_wks": 69 }], 60: [function (_dereq_, module, exports) {
            'use strict';

            var toInteger = _dereq_('./_to-integer'),
                defined = _dereq_('./_defined');
            // true  -> String#at
            // false -> String#codePointAt
            module.exports = function (TO_STRING) {
                return function (that, pos) {
                    var s = String(defined(that)),
                        i = toInteger(pos),
                        l = s.length,
                        a,
                        b;
                    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                    a = s.charCodeAt(i);
                    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                };
            };
        }, { "./_defined": 20, "./_to-integer": 63 }], 61: [function (_dereq_, module, exports) {
            'use strict';

            var ctx = _dereq_('./_ctx'),
                invoke = _dereq_('./_invoke'),
                html = _dereq_('./_html'),
                cel = _dereq_('./_dom-create'),
                global = _dereq_('./_global'),
                process = global.process,
                setTask = global.setImmediate,
                clearTask = global.clearImmediate,
                MessageChannel = global.MessageChannel,
                counter = 0,
                queue = {},
                ONREADYSTATECHANGE = 'onreadystatechange',
                defer,
                channel,
                port;
            var run = function run() {
                var id = +this;
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
                    var args = [],
                        i = 1;
                    while (arguments.length > i) {
                        args.push(arguments[i++]);
                    }queue[++counter] = function () {
                        invoke(typeof fn == 'function' ? fn : Function(fn), args);
                    };
                    defer(counter);
                    return counter;
                };
                clearTask = function clearImmediate(id) {
                    delete queue[id];
                };
                // Node.js 0.8-
                if (_dereq_('./_cof')(process) == 'process') {
                    defer = function defer(id) {
                        process.nextTick(ctx(run, id, 1));
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
        }, { "./_cof": 14, "./_ctx": 19, "./_dom-create": 22, "./_global": 27, "./_html": 30, "./_invoke": 32 }], 62: [function (_dereq_, module, exports) {
            'use strict';

            var toInteger = _dereq_('./_to-integer'),
                max = Math.max,
                min = Math.min;
            module.exports = function (index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
            };
        }, { "./_to-integer": 63 }], 63: [function (_dereq_, module, exports) {
            "use strict";

            // 7.1.4 ToInteger

            var ceil = Math.ceil,
                floor = Math.floor;
            module.exports = function (it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
            };
        }, {}], 64: [function (_dereq_, module, exports) {
            'use strict';

            // to indexed object, toObject with fallback for non-array-like ES3 strings

            var IObject = _dereq_('./_iobject'),
                defined = _dereq_('./_defined');
            module.exports = function (it) {
                return IObject(defined(it));
            };
        }, { "./_defined": 20, "./_iobject": 33 }], 65: [function (_dereq_, module, exports) {
            'use strict';

            // 7.1.15 ToLength

            var toInteger = _dereq_('./_to-integer'),
                min = Math.min;
            module.exports = function (it) {
                return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
            };
        }, { "./_to-integer": 63 }], 66: [function (_dereq_, module, exports) {
            'use strict';

            // 7.1.13 ToObject(argument)

            var defined = _dereq_('./_defined');
            module.exports = function (it) {
                return Object(defined(it));
            };
        }, { "./_defined": 20 }], 67: [function (_dereq_, module, exports) {
            'use strict';

            // 7.1.1 ToPrimitive(input [, PreferredType])

            var isObject = _dereq_('./_is-object');
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
        }, { "./_is-object": 36 }], 68: [function (_dereq_, module, exports) {
            'use strict';

            var id = 0,
                px = Math.random();
            module.exports = function (key) {
                return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
            };
        }, {}], 69: [function (_dereq_, module, exports) {
            'use strict';

            var store = _dereq_('./_shared')('wks'),
                uid = _dereq_('./_uid'),
                _Symbol = _dereq_('./_global').Symbol,
                USE_SYMBOL = typeof _Symbol == 'function';

            var $exports = module.exports = function (name) {
                return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
            };

            $exports.store = store;
        }, { "./_global": 27, "./_shared": 58, "./_uid": 68 }], 70: [function (_dereq_, module, exports) {
            'use strict';

            var classof = _dereq_('./_classof'),
                ITERATOR = _dereq_('./_wks')('iterator'),
                Iterators = _dereq_('./_iterators');
            module.exports = _dereq_('./_core').getIteratorMethod = function (it) {
                if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
            };
        }, { "./_classof": 13, "./_core": 18, "./_iterators": 42, "./_wks": 69 }], 71: [function (_dereq_, module, exports) {
            'use strict';

            var addToUnscopables = _dereq_('./_add-to-unscopables'),
                step = _dereq_('./_iter-step'),
                Iterators = _dereq_('./_iterators'),
                toIObject = _dereq_('./_to-iobject');

            // 22.1.3.4 Array.prototype.entries()
            // 22.1.3.13 Array.prototype.keys()
            // 22.1.3.29 Array.prototype.values()
            // 22.1.3.30 Array.prototype[@@iterator]()
            module.exports = _dereq_('./_iter-define')(Array, 'Array', function (iterated, kind) {
                this._t = toIObject(iterated); // target
                this._i = 0; // next index
                this._k = kind; // kind
                // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
            }, function () {
                var O = this._t,
                    kind = this._k,
                    index = this._i++;
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
        }, { "./_add-to-unscopables": 5, "./_iter-define": 39, "./_iter-step": 41, "./_iterators": 42, "./_to-iobject": 64 }], 72: [function (_dereq_, module, exports) {
            'use strict';

            var strong = _dereq_('./_collection-strong');

            // 23.1 Map Objects
            module.exports = _dereq_('./_collection')('Map', function (get) {
                return function Map() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            }, {
                // 23.1.3.6 Map.prototype.get(key)
                get: function get(key) {
                    var entry = strong.getEntry(this, key);
                    return entry && entry.v;
                },
                // 23.1.3.9 Map.prototype.set(key, value)
                set: function set(key, value) {
                    return strong.def(this, key === 0 ? 0 : key, value);
                }
            }, strong, true);
        }, { "./_collection": 17, "./_collection-strong": 15 }], 73: [function (_dereq_, module, exports) {
            "use strict";
        }, {}], 74: [function (_dereq_, module, exports) {
            'use strict';

            var LIBRARY = _dereq_('./_library'),
                global = _dereq_('./_global'),
                ctx = _dereq_('./_ctx'),
                classof = _dereq_('./_classof'),
                $export = _dereq_('./_export'),
                isObject = _dereq_('./_is-object'),
                aFunction = _dereq_('./_a-function'),
                anInstance = _dereq_('./_an-instance'),
                forOf = _dereq_('./_for-of'),
                speciesConstructor = _dereq_('./_species-constructor'),
                task = _dereq_('./_task').set,
                microtask = _dereq_('./_microtask')(),
                PROMISE = 'Promise',
                TypeError = global.TypeError,
                process = global.process,
                $Promise = global[PROMISE],
                process = global.process,
                isNode = classof(process) == 'process',
                empty = function empty() {/* empty */},
                Internal,
                GenericPromiseCapability,
                Wrapper;

            var USE_NATIVE = !!function () {
                try {
                    // correct subclassing with @@species support
                    var promise = $Promise.resolve(1),
                        FakePromise = (promise.constructor = {})[_dereq_('./_wks')('species')] = function (exec) {
                        exec(empty, empty);
                    };
                    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
                    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
                } catch (e) {/* empty */}
            }();

            // helpers
            var sameConstructor = function sameConstructor(a, b) {
                // with library wrapper special case
                return a === b || a === $Promise && b === Wrapper;
            };
            var isThenable = function isThenable(it) {
                var then;
                return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
            };
            var newPromiseCapability = function newPromiseCapability(C) {
                return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
            };
            var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
                var resolve, reject;
                this.promise = new C(function ($$resolve, $$reject) {
                    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
                    resolve = $$resolve;
                    reject = $$reject;
                });
                this.resolve = aFunction(resolve);
                this.reject = aFunction(reject);
            };
            var perform = function perform(exec) {
                try {
                    exec();
                } catch (e) {
                    return { error: e };
                }
            };
            var notify = function notify(promise, isReject) {
                if (promise._n) return;
                promise._n = true;
                var chain = promise._c;
                microtask(function () {
                    var value = promise._v,
                        ok = promise._s == 1,
                        i = 0;
                    var run = function run(reaction) {
                        var handler = ok ? reaction.ok : reaction.fail,
                            resolve = reaction.resolve,
                            reject = reaction.reject,
                            domain = reaction.domain,
                            result,
                            then;
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
                    var value = promise._v,
                        abrupt,
                        handler,
                        console;
                    if (isUnhandled(promise)) {
                        abrupt = perform(function () {
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
                    if (abrupt) throw abrupt.error;
                });
            };
            var isUnhandled = function isUnhandled(promise) {
                if (promise._h == 1) return false;
                var chain = promise._a || promise._c,
                    i = 0,
                    reaction;
                while (chain.length > i) {
                    reaction = chain[i++];
                    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
                }return true;
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
                var promise = this,
                    then;
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
                Internal = function Promise(executor) {
                    this._c = []; // <- awaiting reactions
                    this._a = undefined; // <- checked in isUnhandled reactions
                    this._s = 0; // <- state
                    this._d = false; // <- done
                    this._v = undefined; // <- value
                    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
                    this._n = false; // <- notify
                };
                Internal.prototype = _dereq_('./_redefine-all')($Promise.prototype, {
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
                PromiseCapability = function PromiseCapability() {
                    var promise = new Internal();
                    this.promise = promise;
                    this.resolve = ctx($resolve, promise, 1);
                    this.reject = ctx($reject, promise, 1);
                };
            }

            $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
            _dereq_('./_set-to-string-tag')($Promise, PROMISE);
            _dereq_('./_set-species')(PROMISE);
            Wrapper = _dereq_('./_core')[PROMISE];

            // statics
            $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
                // 25.4.4.5 Promise.reject(r)
                reject: function reject(r) {
                    var capability = newPromiseCapability(this),
                        $$reject = capability.reject;
                    $$reject(r);
                    return capability.promise;
                }
            });
            $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
                // 25.4.4.6 Promise.resolve(x)
                resolve: function resolve(x) {
                    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
                    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
                    var capability = newPromiseCapability(this),
                        $$resolve = capability.resolve;
                    $$resolve(x);
                    return capability.promise;
                }
            });
            $export($export.S + $export.F * !(USE_NATIVE && _dereq_('./_iter-detect')(function (iter) {
                $Promise.all(iter)['catch'](empty);
            })), PROMISE, {
                // 25.4.4.1 Promise.all(iterable)
                all: function all(iterable) {
                    var C = this,
                        capability = newPromiseCapability(C),
                        resolve = capability.resolve,
                        reject = capability.reject;
                    var abrupt = perform(function () {
                        var values = [],
                            index = 0,
                            remaining = 1;
                        forOf(iterable, false, function (promise) {
                            var $index = index++,
                                alreadyCalled = false;
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
                    if (abrupt) reject(abrupt.error);
                    return capability.promise;
                },
                // 25.4.4.4 Promise.race(iterable)
                race: function race(iterable) {
                    var C = this,
                        capability = newPromiseCapability(C),
                        reject = capability.reject;
                    var abrupt = perform(function () {
                        forOf(iterable, false, function (promise) {
                            C.resolve(promise).then(capability.resolve, reject);
                        });
                    });
                    if (abrupt) reject(abrupt.error);
                    return capability.promise;
                }
            });
        }, { "./_a-function": 4, "./_an-instance": 6, "./_classof": 13, "./_core": 18, "./_ctx": 19, "./_export": 24, "./_for-of": 26, "./_global": 27, "./_is-object": 36, "./_iter-detect": 40, "./_library": 43, "./_microtask": 45, "./_redefine-all": 53, "./_set-species": 55, "./_set-to-string-tag": 56, "./_species-constructor": 59, "./_task": 61, "./_wks": 69 }], 75: [function (_dereq_, module, exports) {
            'use strict';

            var strong = _dereq_('./_collection-strong');

            // 23.2 Set Objects
            module.exports = _dereq_('./_collection')('Set', function (get) {
                return function Set() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            }, {
                // 23.2.3.1 Set.prototype.add(value)
                add: function add(value) {
                    return strong.def(this, value = value === 0 ? 0 : value, value);
                }
            }, strong);
        }, { "./_collection": 17, "./_collection-strong": 15 }], 76: [function (_dereq_, module, exports) {
            'use strict';

            var $at = _dereq_('./_string-at')(true);

            // 21.1.3.27 String.prototype[@@iterator]()
            _dereq_('./_iter-define')(String, 'String', function (iterated) {
                this._t = String(iterated); // target
                this._i = 0; // next index
                // 21.1.5.2.1 %StringIteratorPrototype%.next()
            }, function () {
                var O = this._t,
                    index = this._i,
                    point;
                if (index >= O.length) return { value: undefined, done: true };
                point = $at(O, index);
                this._i += point.length;
                return { value: point, done: false };
            });
        }, { "./_iter-define": 39, "./_string-at": 60 }], 77: [function (_dereq_, module, exports) {
            'use strict';

            // https://github.com/DavidBruant/Map-Set.prototype.toJSON

            var $export = _dereq_('./_export');

            $export($export.P + $export.R, 'Map', { toJSON: _dereq_('./_collection-to-json')('Map') });
        }, { "./_collection-to-json": 16, "./_export": 24 }], 78: [function (_dereq_, module, exports) {
            'use strict';

            // https://github.com/DavidBruant/Map-Set.prototype.toJSON

            var $export = _dereq_('./_export');

            $export($export.P + $export.R, 'Set', { toJSON: _dereq_('./_collection-to-json')('Set') });
        }, { "./_collection-to-json": 16, "./_export": 24 }], 79: [function (_dereq_, module, exports) {
            'use strict';

            _dereq_('./es6.array.iterator');
            var global = _dereq_('./_global'),
                hide = _dereq_('./_hide'),
                Iterators = _dereq_('./_iterators'),
                TO_STRING_TAG = _dereq_('./_wks')('toStringTag');

            for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
                var NAME = collections[i],
                    Collection = global[NAME],
                    proto = Collection && Collection.prototype;
                if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = Iterators.Array;
            }
        }, { "./_global": 27, "./_hide": 29, "./_iterators": 42, "./_wks": 69, "./es6.array.iterator": 71 }], 80: [function (_dereq_, module, exports) {

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
        }, {}], 81: [function (_dereq_, module, exports) {
            "use strict";

            var Attribute = function () {
                function Attribute() {}
                Attribute.QUALIFIER_PROPERTY = "qualifier";
                Attribute.VALUE = "value";
                return Attribute;
            }();
            exports.__esModule = true;
            exports["default"] = Attribute;
        }, {}], 82: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var ChangeAttributeMetadataCommand = function (_super) {
                __extends(ChangeAttributeMetadataCommand, _super);
                function ChangeAttributeMetadataCommand(attributeId, metadataName, value) {
                    _super.call(this);
                    this.attributeId = attributeId;
                    this.metadataName = metadataName;
                    this.value = value;
                    this.id = 'ChangeAttributeMetadata';
                    this.className = "org.opendolphin.core.comm.ChangeAttributeMetadataCommand";
                }
                return ChangeAttributeMetadataCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = ChangeAttributeMetadataCommand;
        }, { "./Command": 89 }], 83: [function (_dereq_, module, exports) {
            "use strict";

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            var EventBus_1 = _dereq_('./EventBus');
            var ClientAttribute = function () {
                function ClientAttribute(propertyName, qualifier, value) {
                    this.propertyName = propertyName;
                    this.id = "" + ClientAttribute.clientAttributeInstanceCount++ + "C";
                    this.valueChangeBus = new EventBus_1["default"]();
                    this.qualifierChangeBus = new EventBus_1["default"]();
                    this.setValue(value);
                    this.setQualifier(qualifier);
                }
                /** a copy constructor with new id and no presentation model */
                ClientAttribute.prototype.copy = function () {
                    var result = new ClientAttribute(this.propertyName, this.getQualifier(), this.getValue());
                    return result;
                };
                ClientAttribute.prototype.setPresentationModel = function (presentationModel) {
                    if (this.presentationModel) {
                        alert("You can not set a presentation model for an attribute that is already bound.");
                    }
                    this.presentationModel = presentationModel;
                };
                ClientAttribute.prototype.getPresentationModel = function () {
                    return this.presentationModel;
                };
                ClientAttribute.prototype.getValue = function () {
                    return this.value;
                };
                ClientAttribute.prototype.setValue = function (newValue) {
                    var verifiedValue = ClientAttribute.checkValue(newValue);
                    if (this.value == verifiedValue) return;
                    var oldValue = this.value;
                    this.value = verifiedValue;
                    this.valueChangeBus.trigger({ 'oldValue': oldValue, 'newValue': verifiedValue });
                };
                ClientAttribute.prototype.setQualifier = function (newQualifier) {
                    if (this.qualifier == newQualifier) return;
                    var oldQualifier = this.qualifier;
                    this.qualifier = newQualifier;
                    this.qualifierChangeBus.trigger({ 'oldValue': oldQualifier, 'newValue': newQualifier });
                };
                ClientAttribute.prototype.getQualifier = function () {
                    return this.qualifier;
                };
                ClientAttribute.checkValue = function (value) {
                    if (value == null || value == undefined) {
                        return null;
                    }
                    var result = value;
                    if (result instanceof String || result instanceof Boolean || result instanceof Number) {
                        result = value.valueOf();
                    }
                    if (result instanceof ClientAttribute) {
                        console.log("An Attribute may not itself contain an attribute as a value. Assuming you forgot to call value.");
                        result = this.checkValue(value.value);
                    }
                    var ok = false;
                    if (this.SUPPORTED_VALUE_TYPES.indexOf(typeof result === "undefined" ? "undefined" : _typeof(result)) > -1 || result instanceof Date) {
                        ok = true;
                    }
                    if (!ok) {
                        throw new Error("Attribute values of this type are not allowed: " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
                    }
                    return result;
                };
                ClientAttribute.prototype.onValueChange = function (eventHandler) {
                    this.valueChangeBus.onEvent(eventHandler);
                    eventHandler({ "oldValue": this.value, "newValue": this.value });
                };
                ClientAttribute.prototype.onQualifierChange = function (eventHandler) {
                    this.qualifierChangeBus.onEvent(eventHandler);
                };
                ClientAttribute.prototype.syncWith = function (sourceAttribute) {
                    if (sourceAttribute) {
                        this.setQualifier(sourceAttribute.getQualifier()); // sequence is important
                        this.setValue(sourceAttribute.value);
                    }
                };
                ClientAttribute.SUPPORTED_VALUE_TYPES = ["string", "number", "boolean"];
                ClientAttribute.clientAttributeInstanceCount = 0;
                return ClientAttribute;
            }();
            exports.ClientAttribute = ClientAttribute;
        }, { "./EventBus": 97 }], 84: [function (_dereq_, module, exports) {
            "use strict";

            var ClientPresentationModel_1 = _dereq_("./ClientPresentationModel");
            var Codec_1 = _dereq_("./Codec");
            var CommandBatcher_1 = _dereq_("./CommandBatcher");
            var ClientConnector = function () {
                function ClientConnector(transmitter, clientDolphin, slackMS, maxBatchSize) {
                    if (slackMS === void 0) {
                        slackMS = 0;
                    }
                    if (maxBatchSize === void 0) {
                        maxBatchSize = 50;
                    }
                    this.commandQueue = [];
                    this.currentlySending = false;
                    this.pushEnabled = false;
                    this.waiting = false;
                    this.transmitter = transmitter;
                    this.clientDolphin = clientDolphin;
                    this.slackMS = slackMS;
                    this.codec = new Codec_1["default"]();
                    this.commandBatcher = new CommandBatcher_1.BlindCommandBatcher(true, maxBatchSize);
                }
                ClientConnector.prototype.setCommandBatcher = function (newBatcher) {
                    this.commandBatcher = newBatcher;
                };
                ClientConnector.prototype.setPushEnabled = function (enabled) {
                    this.pushEnabled = enabled;
                };
                ClientConnector.prototype.setPushListener = function (newListener) {
                    this.pushListener = newListener;
                };
                ClientConnector.prototype.setReleaseCommand = function (newCommand) {
                    this.releaseCommand = newCommand;
                };
                ClientConnector.prototype.send = function (command, onFinished) {
                    this.commandQueue.push({ command: command, handler: onFinished });
                    if (this.currentlySending) {
                        this.release(); // there is not point in releasing if we do not send atm
                        return;
                    }
                    this.doSendNext();
                };
                ClientConnector.prototype.doSendNext = function () {
                    var _this = this;
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
                    var callback = cmdsAndHandlers[cmdsAndHandlers.length - 1].handler;
                    var commands = cmdsAndHandlers.map(function (cah) {
                        return cah.command;
                    });
                    this.transmitter.transmit(commands, function (response) {
                        //console.log("server response: [" + response.map(it => it.id).join(", ") + "] ");
                        var touchedPMs = [];
                        response.forEach(function (command) {
                            var touched = _this.handle(command);
                            if (touched) touchedPMs.push(touched);
                        });
                        if (callback) {
                            callback.onFinished(touchedPMs); // todo: make them unique?
                        }
                        // recursive call: fetch the next in line but allow a bit of slack such that
                        // document events can fire, rendering is done and commands can batch up
                        setTimeout(function () {
                            return _this.doSendNext();
                        }, _this.slackMS);
                    });
                };
                ClientConnector.prototype.handle = function (command) {
                    if (command.id == "DeletePresentationModel") {
                        return this.handleDeletePresentationModelCommand(command);
                    } else if (command.id == "CreatePresentationModel") {
                        return this.handleCreatePresentationModelCommand(command);
                    } else if (command.id == "ValueChanged") {
                        return this.handleValueChangedCommand(command);
                    } else if (command.id == "AttributeMetadataChanged") {
                        return this.handleAttributeMetadataChangedCommand(command);
                    } else {
                        console.log("Cannot handle, unknown command " + command);
                    }
                    return null;
                };
                ClientConnector.prototype.handleDeletePresentationModelCommand = function (serverCommand) {
                    var model = this.clientDolphin.findPresentationModelById(serverCommand.pmId);
                    if (!model) return null;
                    this.clientDolphin.getClientModelStore().deletePresentationModel(model, true);
                    return model;
                };
                ClientConnector.prototype.handleCreatePresentationModelCommand = function (serverCommand) {
                    var _this = this;
                    if (this.clientDolphin.getClientModelStore().containsPresentationModel(serverCommand.pmId)) {
                        throw new Error("There already is a presentation model with id " + serverCommand.pmId + "  known to the client.");
                    }
                    var attributes = [];
                    serverCommand.attributes.forEach(function (attr) {
                        var clientAttribute = _this.clientDolphin.attribute(attr.propertyName, attr.qualifier, attr.value);
                        if (attr.id && attr.id.match(".*S$")) {
                            clientAttribute.id = attr.id;
                        }
                        attributes.push(clientAttribute);
                    });
                    var clientPm = new ClientPresentationModel_1.ClientPresentationModel(serverCommand.pmId, serverCommand.pmType);
                    clientPm.addAttributes(attributes);
                    if (serverCommand.clientSideOnly) {
                        clientPm.clientSideOnly = true;
                    }
                    this.clientDolphin.getClientModelStore().add(clientPm);
                    this.clientDolphin.updatePresentationModelQualifier(clientPm);
                    return clientPm;
                };
                ClientConnector.prototype.handleValueChangedCommand = function (serverCommand) {
                    var clientAttribute = this.clientDolphin.getClientModelStore().findAttributeById(serverCommand.attributeId);
                    if (!clientAttribute) {
                        console.log("attribute with id " + serverCommand.attributeId + " not found, cannot update old value " + serverCommand.oldValue + " to new value " + serverCommand.newValue);
                        return null;
                    }
                    if (clientAttribute.getValue() == serverCommand.newValue) {
                        //console.log("nothing to do. new value == old value");
                        return null;
                    }
                    // Below was the code that would enforce that value changes only appear when the proper oldValue is given.
                    // While that seemed appropriate at first, there are actually valid command sequences where the oldValue is not properly set.
                    // We leave the commented code in the codebase to allow for logging/debugging such cases.
                    //            if(clientAttribute.getValue() != serverCommand.oldValue) {
                    //                console.log("attribute with id "+serverCommand.attributeId+" and value " + clientAttribute.getValue() +
                    //                            " was set to value " + serverCommand.newValue + " even though the change was based on an outdated old value of " + serverCommand.oldValue);
                    //            }
                    clientAttribute.setValue(serverCommand.newValue);
                    return null;
                };
                ClientConnector.prototype.handleAttributeMetadataChangedCommand = function (serverCommand) {
                    var clientAttribute = this.clientDolphin.getClientModelStore().findAttributeById(serverCommand.attributeId);
                    if (!clientAttribute) return null;
                    clientAttribute[serverCommand.metadataName] = serverCommand.value;
                    return null;
                };
                ///////////// push support ///////////////
                ClientConnector.prototype.listen = function () {
                    if (!this.pushEnabled) return;
                    if (this.waiting) return;
                    // todo: how to issue a warning if no pushListener is set?
                    if (!this.currentlySending) {
                        this.doSendNext();
                    }
                };
                ClientConnector.prototype.enqueuePushCommand = function () {
                    var me = this;
                    this.waiting = true;
                    this.commandQueue.push({
                        command: this.pushListener,
                        handler: {
                            onFinished: function onFinished(models) {
                                me.waiting = false;
                            },
                            onFinishedData: null
                        }
                    });
                };
                ClientConnector.prototype.release = function () {
                    if (!this.waiting) return;
                    this.waiting = false;
                    // todo: how to issue a warning if no releaseCommand is set?
                    this.transmitter.signal(this.releaseCommand);
                };
                return ClientConnector;
            }();
            exports.ClientConnector = ClientConnector;
        }, { "./ClientPresentationModel": 87, "./Codec": 88, "./CommandBatcher": 90 }], 85: [function (_dereq_, module, exports) {
            "use strict";

            var ClientAttribute_1 = _dereq_("./ClientAttribute");
            var ClientPresentationModel_1 = _dereq_("./ClientPresentationModel");
            var ClientDolphin = function () {
                function ClientDolphin() {}
                ClientDolphin.prototype.setClientConnector = function (clientConnector) {
                    this.clientConnector = clientConnector;
                };
                ClientDolphin.prototype.getClientConnector = function () {
                    return this.clientConnector;
                };
                ClientDolphin.prototype.send = function (command, onFinished) {
                    this.clientConnector.send(command, onFinished);
                };
                // factory method for attributes
                ClientDolphin.prototype.attribute = function (propertyName, qualifier, value) {
                    return new ClientAttribute_1.ClientAttribute(propertyName, qualifier, value);
                };
                // factory method for presentation models
                ClientDolphin.prototype.presentationModel = function (id, type) {
                    var attributes = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        attributes[_i - 2] = arguments[_i];
                    }
                    var model = new ClientPresentationModel_1.ClientPresentationModel(id, type);
                    if (attributes && attributes.length > 0) {
                        attributes.forEach(function (attribute) {
                            model.addAttribute(attribute);
                        });
                    }
                    this.getClientModelStore().add(model);
                    return model;
                };
                ClientDolphin.prototype.setClientModelStore = function (clientModelStore) {
                    this.clientModelStore = clientModelStore;
                };
                ClientDolphin.prototype.getClientModelStore = function () {
                    return this.clientModelStore;
                };
                ClientDolphin.prototype.listPresentationModelIds = function () {
                    return this.getClientModelStore().listPresentationModelIds();
                };
                ClientDolphin.prototype.listPresentationModels = function () {
                    return this.getClientModelStore().listPresentationModels();
                };
                ClientDolphin.prototype.findAllPresentationModelByType = function (presentationModelType) {
                    return this.getClientModelStore().findAllPresentationModelByType(presentationModelType);
                };
                ClientDolphin.prototype.getAt = function (id) {
                    return this.findPresentationModelById(id);
                };
                ClientDolphin.prototype.findPresentationModelById = function (id) {
                    return this.getClientModelStore().findPresentationModelById(id);
                };
                ClientDolphin.prototype.deletePresentationModel = function (modelToDelete) {
                    this.getClientModelStore().deletePresentationModel(modelToDelete, true);
                };
                ClientDolphin.prototype.updatePresentationModelQualifier = function (presentationModel) {
                    var _this = this;
                    presentationModel.getAttributes().forEach(function (sourceAttribute) {
                        _this.updateAttributeQualifier(sourceAttribute);
                    });
                };
                ClientDolphin.prototype.updateAttributeQualifier = function (sourceAttribute) {
                    if (!sourceAttribute.getQualifier()) return;
                    var attributes = this.getClientModelStore().findAllAttributesByQualifier(sourceAttribute.getQualifier());
                    attributes.forEach(function (targetAttribute) {
                        targetAttribute.setValue(sourceAttribute.getValue()); // should always have the same value
                    });
                };
                ////// push support ///////
                ClientDolphin.prototype.startPushListening = function (pushCommand, releaseCommand) {
                    this.clientConnector.setPushListener(pushCommand);
                    this.clientConnector.setReleaseCommand(releaseCommand);
                    this.clientConnector.setPushEnabled(true);
                    this.clientConnector.listen();
                };
                ClientDolphin.prototype.stopPushListening = function () {
                    this.clientConnector.setPushEnabled(false);
                };
                return ClientDolphin;
            }();
            exports.__esModule = true;
            exports["default"] = ClientDolphin;
        }, { "./ClientAttribute": 83, "./ClientPresentationModel": 87 }], 86: [function (_dereq_, module, exports) {
            /// <reference path="./core-js.d.ts" />
            "use strict";

            var Attribute_1 = _dereq_("./Attribute");
            var ChangeAttributeMetadataCommand_1 = _dereq_("./ChangeAttributeMetadataCommand");
            var CreatePresentationModelCommand_1 = _dereq_("./CreatePresentationModelCommand");
            var DeletedPresentationModelNotification_1 = _dereq_("./DeletedPresentationModelNotification");
            var EventBus_1 = _dereq_("./EventBus");
            var ValueChangedCommand_1 = _dereq_("./ValueChangedCommand");
            (function (Type) {
                Type[Type["ADDED"] = 'ADDED'] = "ADDED";
                Type[Type["REMOVED"] = 'REMOVED'] = "REMOVED";
            })(exports.Type || (exports.Type = {}));
            var Type = exports.Type;
            var ClientModelStore = function () {
                function ClientModelStore(clientDolphin) {
                    this.clientDolphin = clientDolphin;
                    this.presentationModels = new Map();
                    this.presentationModelsPerType = new Map();
                    this.attributesPerId = new Map();
                    this.attributesPerQualifier = new Map();
                    this.modelStoreChangeBus = new EventBus_1["default"]();
                }
                ClientModelStore.prototype.getClientDolphin = function () {
                    return this.clientDolphin;
                };
                ClientModelStore.prototype.registerModel = function (model) {
                    var _this = this;
                    if (model.clientSideOnly) {
                        return;
                    }
                    var connector = this.clientDolphin.getClientConnector();
                    var createPMCommand = new CreatePresentationModelCommand_1["default"](model);
                    connector.send(createPMCommand, null);
                    model.getAttributes().forEach(function (attribute) {
                        _this.registerAttribute(attribute);
                    });
                };
                ClientModelStore.prototype.registerAttribute = function (attribute) {
                    var _this = this;
                    this.addAttributeById(attribute);
                    if (attribute.getQualifier()) {
                        this.addAttributeByQualifier(attribute);
                    }
                    // whenever an attribute changes its value, the server needs to be notified
                    // and all other attributes with the same qualifier are given the same value
                    attribute.onValueChange(function (evt) {
                        var valueChangeCommand = new ValueChangedCommand_1["default"](attribute.id, evt.oldValue, evt.newValue);
                        _this.clientDolphin.getClientConnector().send(valueChangeCommand, null);
                        if (attribute.getQualifier()) {
                            var attrs = _this.findAttributesByFilter(function (attr) {
                                return attr !== attribute && attr.getQualifier() == attribute.getQualifier();
                            });
                            attrs.forEach(function (attr) {
                                attr.setValue(attribute.getValue());
                            });
                        }
                    });
                    attribute.onQualifierChange(function (evt) {
                        var changeAttrMetadataCmd = new ChangeAttributeMetadataCommand_1["default"](attribute.id, Attribute_1["default"].QUALIFIER_PROPERTY, evt.newValue);
                        _this.clientDolphin.getClientConnector().send(changeAttrMetadataCmd, null);
                    });
                };
                ClientModelStore.prototype.add = function (model) {
                    if (!model) {
                        return false;
                    }
                    if (this.presentationModels.has(model.id)) {
                        console.log("There already is a PM with id " + model.id);
                    }
                    var added = false;
                    if (!this.presentationModels.has(model.id)) {
                        this.presentationModels.set(model.id, model);
                        this.addPresentationModelByType(model);
                        this.registerModel(model);
                        this.modelStoreChangeBus.trigger({ 'eventType': Type.ADDED, 'clientPresentationModel': model });
                        added = true;
                    }
                    return added;
                };
                ClientModelStore.prototype.remove = function (model) {
                    var _this = this;
                    if (!model) {
                        return false;
                    }
                    var removed = false;
                    if (this.presentationModels.has(model.id)) {
                        this.removePresentationModelByType(model);
                        this.presentationModels.delete(model.id);
                        model.getAttributes().forEach(function (attribute) {
                            _this.removeAttributeById(attribute);
                            if (attribute.getQualifier()) {
                                _this.removeAttributeByQualifier(attribute);
                            }
                        });
                        this.modelStoreChangeBus.trigger({ 'eventType': Type.REMOVED, 'clientPresentationModel': model });
                        removed = true;
                    }
                    return removed;
                };
                ClientModelStore.prototype.findAttributesByFilter = function (filter) {
                    var matches = [];
                    this.presentationModels.forEach(function (model) {
                        model.getAttributes().forEach(function (attr) {
                            if (filter(attr)) {
                                matches.push(attr);
                            }
                        });
                    });
                    return matches;
                };
                ClientModelStore.prototype.addPresentationModelByType = function (model) {
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
                };
                ClientModelStore.prototype.removePresentationModelByType = function (model) {
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
                };
                ClientModelStore.prototype.listPresentationModelIds = function () {
                    var result = [];
                    var iter = this.presentationModels.keys();
                    var next = iter.next();
                    while (!next.done) {
                        result.push(next.value);
                        next = iter.next();
                    }
                    return result;
                };
                ClientModelStore.prototype.listPresentationModels = function () {
                    var result = [];
                    var iter = this.presentationModels.values();
                    var next = iter.next();
                    while (!next.done) {
                        result.push(next.value);
                        next = iter.next();
                    }
                    return result;
                };
                ClientModelStore.prototype.findPresentationModelById = function (id) {
                    return this.presentationModels.get(id);
                };
                ClientModelStore.prototype.findAllPresentationModelByType = function (type) {
                    if (!type || !this.presentationModelsPerType.has(type)) {
                        return [];
                    }
                    return this.presentationModelsPerType.get(type).slice(0); // slice is used to clone the array
                };
                ClientModelStore.prototype.deletePresentationModel = function (model, notify) {
                    if (!model) {
                        return;
                    }
                    if (this.containsPresentationModel(model.id)) {
                        this.remove(model);
                        if (!notify || model.clientSideOnly) {
                            return;
                        }
                        this.clientDolphin.getClientConnector().send(new DeletedPresentationModelNotification_1["default"](model.id), null);
                    }
                };
                ClientModelStore.prototype.containsPresentationModel = function (id) {
                    return this.presentationModels.has(id);
                };
                ClientModelStore.prototype.addAttributeById = function (attribute) {
                    if (!attribute || this.attributesPerId.has(attribute.id)) {
                        return;
                    }
                    this.attributesPerId.set(attribute.id, attribute);
                };
                ClientModelStore.prototype.removeAttributeById = function (attribute) {
                    if (!attribute || !this.attributesPerId.has(attribute.id)) {
                        return;
                    }
                    this.attributesPerId.delete(attribute.id);
                };
                ClientModelStore.prototype.findAttributeById = function (id) {
                    return this.attributesPerId.get(id);
                };
                ClientModelStore.prototype.addAttributeByQualifier = function (attribute) {
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
                };
                ClientModelStore.prototype.removeAttributeByQualifier = function (attribute) {
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
                };
                ClientModelStore.prototype.findAllAttributesByQualifier = function (qualifier) {
                    if (!qualifier || !this.attributesPerQualifier.has(qualifier)) {
                        return [];
                    }
                    return this.attributesPerQualifier.get(qualifier).slice(0); // slice is used to clone the array
                };
                ClientModelStore.prototype.onModelStoreChange = function (eventHandler) {
                    this.modelStoreChangeBus.onEvent(eventHandler);
                };
                ClientModelStore.prototype.onModelStoreChangeForType = function (presentationModelType, eventHandler) {
                    this.modelStoreChangeBus.onEvent(function (pmStoreEvent) {
                        if (pmStoreEvent.clientPresentationModel.presentationModelType == presentationModelType) {
                            eventHandler(pmStoreEvent);
                        }
                    });
                };
                return ClientModelStore;
            }();
            exports.ClientModelStore = ClientModelStore;
        }, { "./Attribute": 81, "./ChangeAttributeMetadataCommand": 82, "./CreatePresentationModelCommand": 93, "./DeletedPresentationModelNotification": 94, "./EventBus": 97, "./ValueChangedCommand": 104 }], 87: [function (_dereq_, module, exports) {
            "use strict";

            var EventBus_1 = _dereq_('./EventBus');
            var presentationModelInstanceCount = 0; // todo dk: consider making this static in class
            var ClientPresentationModel = function () {
                function ClientPresentationModel(id, presentationModelType) {
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
                    this.invalidBus = new EventBus_1["default"]();
                    this.dirtyValueChangeBus = new EventBus_1["default"]();
                }
                // todo dk: align with Java version: move to ClientDolphin and auto-add to model store
                /** a copy constructor for anything but IDs. Per default, copies are client side only, no automatic update applies. */
                ClientPresentationModel.prototype.copy = function () {
                    var result = new ClientPresentationModel(null, this.presentationModelType);
                    result.clientSideOnly = true;
                    this.getAttributes().forEach(function (attribute) {
                        var attributeCopy = attribute.copy();
                        result.addAttribute(attributeCopy);
                    });
                    return result;
                };
                //add array of attributes
                ClientPresentationModel.prototype.addAttributes = function (attributes) {
                    var _this = this;
                    if (!attributes || attributes.length < 1) return;
                    attributes.forEach(function (attr) {
                        _this.addAttribute(attr);
                    });
                };
                ClientPresentationModel.prototype.addAttribute = function (attribute) {
                    var _this = this;
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
                    attribute.onValueChange(function (evt) {
                        _this.invalidBus.trigger({ source: _this });
                    });
                };
                ClientPresentationModel.prototype.onInvalidated = function (handleInvalidate) {
                    this.invalidBus.onEvent(handleInvalidate);
                };
                /** returns a copy of the internal state */
                ClientPresentationModel.prototype.getAttributes = function () {
                    return this.attributes.slice(0);
                };
                ClientPresentationModel.prototype.getAt = function (propertyName) {
                    return this.findAttributeByPropertyName(propertyName);
                };
                ClientPresentationModel.prototype.findAllAttributesByPropertyName = function (propertyName) {
                    var result = [];
                    if (!propertyName) return null;
                    this.attributes.forEach(function (attribute) {
                        if (attribute.propertyName == propertyName) {
                            result.push(attribute);
                        }
                    });
                    return result;
                };
                ClientPresentationModel.prototype.findAttributeByPropertyName = function (propertyName) {
                    if (!propertyName) return null;
                    for (var i = 0; i < this.attributes.length; i++) {
                        if (this.attributes[i].propertyName == propertyName) {
                            return this.attributes[i];
                        }
                    }
                    return null;
                };
                ClientPresentationModel.prototype.findAttributeByQualifier = function (qualifier) {
                    if (!qualifier) return null;
                    for (var i = 0; i < this.attributes.length; i++) {
                        if (this.attributes[i].getQualifier() == qualifier) {
                            return this.attributes[i];
                        }
                    }
                    ;
                    return null;
                };
                ClientPresentationModel.prototype.findAttributeById = function (id) {
                    if (!id) return null;
                    for (var i = 0; i < this.attributes.length; i++) {
                        if (this.attributes[i].id == id) {
                            return this.attributes[i];
                        }
                    }
                    ;
                    return null;
                };
                ClientPresentationModel.prototype.syncWith = function (sourcePresentationModel) {
                    this.attributes.forEach(function (targetAttribute) {
                        var sourceAttribute = sourcePresentationModel.getAt(targetAttribute.propertyName);
                        if (sourceAttribute) {
                            targetAttribute.syncWith(sourceAttribute);
                        }
                    });
                };
                return ClientPresentationModel;
            }();
            exports.ClientPresentationModel = ClientPresentationModel;
        }, { "./EventBus": 97 }], 88: [function (_dereq_, module, exports) {
            "use strict";

            var Codec = function () {
                function Codec() {}
                Codec.prototype.encode = function (commands) {
                    return JSON.stringify(commands); // todo dk: look for possible API support for character encoding
                };
                Codec.prototype.decode = function (transmitted) {
                    if (typeof transmitted == 'string') {
                        return JSON.parse(transmitted);
                    } else {
                        return transmitted;
                    }
                };
                return Codec;
            }();
            exports.__esModule = true;
            exports["default"] = Codec;
        }, {}], 89: [function (_dereq_, module, exports) {
            "use strict";

            var Command = function () {
                function Command() {
                    this.id = "dolphin-core-command";
                }
                return Command;
            }();
            exports.__esModule = true;
            exports["default"] = Command;
        }, {}], 90: [function (_dereq_, module, exports) {
            "use strict";

            var ValueChangedCommand_1 = _dereq_('./ValueChangedCommand');
            /** A Batcher that does no batching but merely takes the first element of the queue as the single item in the batch */
            var NoCommandBatcher = function () {
                function NoCommandBatcher() {}
                NoCommandBatcher.prototype.batch = function (queue) {
                    return [queue.shift()];
                };
                return NoCommandBatcher;
            }();
            exports.NoCommandBatcher = NoCommandBatcher;
            /** A batcher that batches the blinds (commands with no callback) and optionally also folds value changes */
            var BlindCommandBatcher = function () {
                /** folding: whether we should try folding ValueChangedCommands */
                function BlindCommandBatcher(folding, maxBatchSize) {
                    if (folding === void 0) {
                        folding = true;
                    }
                    if (maxBatchSize === void 0) {
                        maxBatchSize = 50;
                    }
                    this.folding = folding;
                    this.maxBatchSize = maxBatchSize;
                }
                BlindCommandBatcher.prototype.batch = function (queue) {
                    var batch = [];
                    var n = Math.min(queue.length, this.maxBatchSize);
                    for (var counter = 0; counter < n; counter++) {
                        var candidate = queue.shift();
                        if (this.folding && candidate.command instanceof ValueChangedCommand_1["default"] && !candidate.handler) {
                            var found = null;
                            var canCmd = candidate.command;
                            for (var i = 0; i < batch.length && found == null; i++) {
                                if (batch[i].command instanceof ValueChangedCommand_1["default"]) {
                                    var batchCmd = batch[i].command;
                                    if (canCmd.attributeId == batchCmd.attributeId && batchCmd.newValue == canCmd.oldValue) {
                                        found = batchCmd;
                                    }
                                }
                            }
                            if (found) {
                                found.newValue = canCmd.newValue; // change existing value, do not batch
                            } else {
                                batch.push(candidate); // we cannot merge, so batch the candidate
                            }
                        } else {
                            batch.push(candidate);
                        }
                        if (candidate.handler || candidate.command['className'] == "org.opendolphin.core.comm.EmptyNotification" // or unknown client side effect
                        ) {
                                break; // leave the loop
                            }
                    }
                    return batch;
                };
                return BlindCommandBatcher;
            }();
            exports.BlindCommandBatcher = BlindCommandBatcher;
        }, { "./ValueChangedCommand": 104 }], 91: [function (_dereq_, module, exports) {
            "use strict";

            var CommandConstants = function () {
                function CommandConstants() {}
                CommandConstants.DOLPHIN_PLATFORM_PREFIX = 'dolphin_platform_intern_';
                CommandConstants.CREATE_CONTEXT_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'initClientContext';
                CommandConstants.DESTROY_CONTEXT_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'disconnectClientContext';
                CommandConstants.CREATE_CONTROLLER_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'registerController';
                CommandConstants.DESTROY_CONTROLLER_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'destroyController';
                CommandConstants.CALL_CONTROLLER_ACTION_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'callControllerAction';
                CommandConstants.START_LONG_POLL_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'longPoll';
                CommandConstants.INTERRUPT_LONG_POLL_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'release';
                return CommandConstants;
            }();
            exports.__esModule = true;
            exports["default"] = CommandConstants;
        }, {}], 92: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var CommandConstants_1 = _dereq_("./CommandConstants");
            var CreateContextCommand = function (_super) {
                __extends(CreateContextCommand, _super);
                function CreateContextCommand() {
                    _super.call(this);
                    this.id = CommandConstants_1["default"].CREATE_CONTEXT_COMMAND_NAME;
                    this.className = "com.canoo.dolphin.impl.commands.CreateContextCommand";
                }
                return CreateContextCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = CreateContextCommand;
        }, { "./Command": 89, "./CommandConstants": 91 }], 93: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var CreatePresentationModelCommand = function (_super) {
                __extends(CreatePresentationModelCommand, _super);
                function CreatePresentationModelCommand(presentationModel) {
                    _super.call(this);
                    this.attributes = [];
                    this.clientSideOnly = false;
                    this.id = "CreatePresentationModel";
                    this.className = "org.opendolphin.core.comm.CreatePresentationModelCommand";
                    this.pmId = presentationModel.id;
                    this.pmType = presentationModel.presentationModelType;
                    var attrs = this.attributes;
                    presentationModel.getAttributes().forEach(function (attr) {
                        attrs.push({
                            propertyName: attr.propertyName,
                            id: attr.id,
                            qualifier: attr.getQualifier(),
                            value: attr.getValue()
                        });
                    });
                }
                return CreatePresentationModelCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = CreatePresentationModelCommand;
        }, { "./Command": 89 }], 94: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var DeletedPresentationModelNotification = function (_super) {
                __extends(DeletedPresentationModelNotification, _super);
                function DeletedPresentationModelNotification(pmId) {
                    _super.call(this);
                    this.pmId = pmId;
                    this.id = 'DeletedPresentationModel';
                    this.className = "org.opendolphin.core.comm.DeletedPresentationModelNotification";
                }
                return DeletedPresentationModelNotification;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = DeletedPresentationModelNotification;
        }, { "./Command": 89 }], 95: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var CommandConstants_1 = _dereq_("./CommandConstants");
            var DestroyContextCommand = function (_super) {
                __extends(DestroyContextCommand, _super);
                function DestroyContextCommand() {
                    _super.call(this);
                    this.id = CommandConstants_1["default"].DESTROY_CONTEXT_COMMAND_NAME;
                    this.className = "com.canoo.dolphin.impl.commands.DestroyContextCommand";
                }
                return DestroyContextCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = DestroyContextCommand;
        }, { "./Command": 89, "./CommandConstants": 91 }], 96: [function (_dereq_, module, exports) {
            "use strict";

            var ClientConnector_1 = _dereq_("./ClientConnector");
            var ClientDolphin_1 = _dereq_("./ClientDolphin");
            var ClientModelStore_1 = _dereq_("./ClientModelStore");
            var HttpTransmitter_1 = _dereq_("./HttpTransmitter");
            var NoTransmitter_1 = _dereq_("./NoTransmitter");
            var DolphinBuilder = function () {
                function DolphinBuilder() {
                    this.reset_ = false;
                    this.slackMS_ = 300;
                    this.maxBatchSize_ = 50;
                    this.supportCORS_ = false;
                }
                DolphinBuilder.prototype.url = function (url) {
                    this.url_ = url;
                    return this;
                };
                DolphinBuilder.prototype.reset = function (reset) {
                    this.reset_ = reset;
                    return this;
                };
                DolphinBuilder.prototype.slackMS = function (slackMS) {
                    this.slackMS_ = slackMS;
                    return this;
                };
                DolphinBuilder.prototype.maxBatchSize = function (maxBatchSize) {
                    this.maxBatchSize_ = maxBatchSize;
                    return this;
                };
                DolphinBuilder.prototype.supportCORS = function (supportCORS) {
                    this.supportCORS_ = supportCORS;
                    return this;
                };
                DolphinBuilder.prototype.errorHandler = function (errorHandler) {
                    this.errorHandler_ = errorHandler;
                    return this;
                };
                DolphinBuilder.prototype.headersInfo = function (headersInfo) {
                    this.headersInfo_ = headersInfo;
                    return this;
                };
                DolphinBuilder.prototype.build = function () {
                    console.log("OpenDolphin js found");
                    var clientDolphin = new ClientDolphin_1["default"]();
                    var transmitter;
                    if (this.url_ != null && this.url_.length > 0) {
                        transmitter = new HttpTransmitter_1["default"](this.url_, this.reset_, "UTF-8", this.errorHandler_, this.supportCORS_, this.headersInfo_);
                    } else {
                        transmitter = new NoTransmitter_1["default"]();
                    }
                    clientDolphin.setClientConnector(new ClientConnector_1.ClientConnector(transmitter, clientDolphin, this.slackMS_, this.maxBatchSize_));
                    clientDolphin.setClientModelStore(new ClientModelStore_1.ClientModelStore(clientDolphin));
                    console.log("ClientDolphin initialized");
                    return clientDolphin;
                };
                return DolphinBuilder;
            }();
            exports.__esModule = true;
            exports["default"] = DolphinBuilder;
        }, { "./ClientConnector": 84, "./ClientDolphin": 85, "./ClientModelStore": 86, "./HttpTransmitter": 98, "./NoTransmitter": 100 }], 97: [function (_dereq_, module, exports) {
            "use strict";

            var EventBus = function () {
                function EventBus() {
                    this.eventHandlers = [];
                }
                EventBus.prototype.onEvent = function (eventHandler) {
                    this.eventHandlers.push(eventHandler);
                };
                EventBus.prototype.trigger = function (event) {
                    this.eventHandlers.forEach(function (handle) {
                        return handle(event);
                    });
                };
                return EventBus;
            }();
            exports.__esModule = true;
            exports["default"] = EventBus;
        }, {}], 98: [function (_dereq_, module, exports) {
            "use strict";

            var Codec_1 = _dereq_("./Codec");
            var HttpTransmitter = function () {
                function HttpTransmitter(url, reset, charset, errorHandler, supportCORS, headersInfo) {
                    if (reset === void 0) {
                        reset = true;
                    }
                    if (charset === void 0) {
                        charset = "UTF-8";
                    }
                    if (errorHandler === void 0) {
                        errorHandler = null;
                    }
                    if (supportCORS === void 0) {
                        supportCORS = false;
                    }
                    if (headersInfo === void 0) {
                        headersInfo = null;
                    }
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
                    this.codec = new Codec_1["default"]();
                    if (reset) {
                        console.log('HttpTransmitter.invalidate() is deprecated. Use ClientDolphin.reset(OnSuccessHandler) instead');
                        this.invalidate();
                    }
                }
                HttpTransmitter.prototype.transmit = function (commands, onDone) {
                    var _this = this;
                    this.http.onerror = function (evt) {
                        _this.handleError('onerror', "");
                        onDone([]);
                    };
                    this.http.onreadystatechange = function (evt) {
                        if (_this.http.readyState == _this.HttpCodes.finished) {
                            if (_this.http.status == _this.HttpCodes.success) {
                                var responseText = _this.http.responseText;
                                if (responseText.trim().length > 0) {
                                    try {
                                        var responseCommands = _this.codec.decode(responseText);
                                        onDone(responseCommands);
                                    } catch (err) {
                                        console.log("Error occurred parsing responseText: ", err);
                                        console.log("Incorrect responseText: ", responseText);
                                        _this.handleError('application', "HttpTransmitter: Incorrect responseText: " + responseText);
                                        onDone([]);
                                    }
                                } else {
                                    _this.handleError('application', "HttpTransmitter: empty responseText");
                                    onDone([]);
                                }
                            } else {
                                _this.handleError('application', "HttpTransmitter: HTTP Status != 200");
                                onDone([]);
                            }
                        }
                    };
                    this.http.open('POST', this.url, true);
                    this.setHeaders(this.http);
                    if ("overrideMimeType" in this.http) {
                        this.http.overrideMimeType("application/json; charset=" + this.charset); // todo make injectable
                    }
                    this.http.send(this.codec.encode(commands));
                };
                HttpTransmitter.prototype.setHeaders = function (httpReq) {
                    if (this.headersInfo) {
                        for (var i in this.headersInfo) {
                            if (this.headersInfo.hasOwnProperty(i)) {
                                httpReq.setRequestHeader(i, this.headersInfo[i]);
                            }
                        }
                    }
                };
                HttpTransmitter.prototype.handleError = function (kind, message) {
                    var errorEvent = { kind: kind, url: this.url, httpStatus: this.http.status, message: message };
                    if (this.errorHandler) {
                        this.errorHandler(errorEvent);
                    } else {
                        console.log("Error occurred: ", errorEvent);
                    }
                };
                HttpTransmitter.prototype.signal = function (command) {
                    this.sig.open('POST', this.url, true);
                    this.setHeaders(this.sig);
                    this.sig.send(this.codec.encode([command]));
                };
                // Deprecated ! Use 'reset(OnSuccessHandler) instead
                HttpTransmitter.prototype.invalidate = function () {
                    this.http.open('POST', this.url + 'invalidate?', false);
                    this.http.send();
                };
                return HttpTransmitter;
            }();
            exports.__esModule = true;
            exports["default"] = HttpTransmitter;
        }, { "./Codec": 88 }], 99: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var SignalCommand_1 = _dereq_("./SignalCommand");
            var CommandConstants_1 = _dereq_("./CommandConstants");
            var InterruptLongPollCommand = function (_super) {
                __extends(InterruptLongPollCommand, _super);
                function InterruptLongPollCommand() {
                    _super.call(this, CommandConstants_1["default"].INTERRUPT_LONG_POLL_COMMAND_NAME);
                    this.className = "com.canoo.dolphin.impl.commands.InterruptLongPollCommand";
                }
                return InterruptLongPollCommand;
            }(SignalCommand_1["default"]);
            exports.__esModule = true;
            exports["default"] = InterruptLongPollCommand;
        }, { "./CommandConstants": 91, "./SignalCommand": 102 }], 100: [function (_dereq_, module, exports) {
            "use strict";
            /**
             * A transmitter that is not transmitting at all.
             * It may serve as a stand-in when no real transmitter is needed.
             */

            var NoTransmitter = function () {
                function NoTransmitter() {}
                NoTransmitter.prototype.transmit = function (commands, onDone) {
                    // do nothing special
                    onDone([]);
                };
                NoTransmitter.prototype.signal = function (command) {
                    // do nothing
                };
                NoTransmitter.prototype.reset = function (successHandler) {
                    // do nothing
                };
                return NoTransmitter;
            }();
            exports.__esModule = true;
            exports["default"] = NoTransmitter;
        }, {}], 101: [function (_dereq_, module, exports) {
            "use strict";

            var DolphinBuilder_1 = _dereq_("./DolphinBuilder");
            var CreateContextCommand_1 = _dereq_("./CreateContextCommand");
            var DestroyContextCommand_1 = _dereq_("./DestroyContextCommand");
            var InterruptLongPollCommand_1 = _dereq_("./InterruptLongPollCommand");
            var StartLongPollCommand_1 = _dereq_("./StartLongPollCommand");
            /**
             * JS-friendly facade to avoid too many dependencies in plain JS code.
             * The name of this file is also used for the initial lookup of the
             * one javascript file that contains all the dolphin code.
             * Changing the name requires the build support and all users
             * to be updated as well.
             * Dierk Koenig
             */
            // factory method for the initialized dolphin
            // Deprecated ! Use 'makeDolphin() instead
            function dolphin(url, reset, slackMS) {
                if (slackMS === void 0) {
                    slackMS = 300;
                }
                return makeDolphin().url(url).reset(reset).slackMS(slackMS).build();
            }
            exports.dolphin = dolphin;
            // factory method to build an initialized dolphin
            function makeDolphin() {
                return new DolphinBuilder_1["default"]();
            }
            exports.makeDolphin = makeDolphin;
            //Factory methods to have a better integration of ts sources in JS & es6
            function createCreateContextCommand() {
                return new CreateContextCommand_1["default"]();
            }
            exports.createCreateContextCommand = createCreateContextCommand;
            function createDestroyContextCommand() {
                return new DestroyContextCommand_1["default"]();
            }
            exports.createDestroyContextCommand = createDestroyContextCommand;
            function createInterruptLongPollCommand() {
                return new InterruptLongPollCommand_1["default"]();
            }
            exports.createInterruptLongPollCommand = createInterruptLongPollCommand;
            function createStartLongPollCommand() {
                return new StartLongPollCommand_1["default"]();
            }
            exports.createStartLongPollCommand = createStartLongPollCommand;
        }, { "./CreateContextCommand": 92, "./DestroyContextCommand": 95, "./DolphinBuilder": 96, "./InterruptLongPollCommand": 99, "./StartLongPollCommand": 103 }], 102: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var SignalCommand = function (_super) {
                __extends(SignalCommand, _super);
                function SignalCommand(name) {
                    _super.call(this);
                    this.id = name;
                    this.className = "org.opendolphin.core.comm.SignalCommand";
                }
                return SignalCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = SignalCommand;
        }, { "./Command": 89 }], 103: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var CommandConstants_1 = _dereq_("./CommandConstants");
            var StartLongPollCommand = function (_super) {
                __extends(StartLongPollCommand, _super);
                function StartLongPollCommand() {
                    _super.call(this);
                    this.id = CommandConstants_1["default"].START_LONG_POLL_COMMAND_NAME;
                    this.className = "com.canoo.dolphin.impl.commands.StartLongPollCommand";
                }
                return StartLongPollCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = StartLongPollCommand;
        }, { "./Command": 89, "./CommandConstants": 91 }], 104: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var ValueChangedCommand = function (_super) {
                __extends(ValueChangedCommand, _super);
                function ValueChangedCommand(attributeId, oldValue, newValue) {
                    _super.call(this);
                    this.attributeId = attributeId;
                    this.oldValue = oldValue;
                    this.newValue = newValue;
                    this.id = "ValueChanged";
                    this.className = "org.opendolphin.core.comm.ValueChangedCommand";
                }
                return ValueChangedCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = ValueChangedCommand;
        }, { "./Command": 89 }], 105: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _map = _dereq_('../bower_components/core.js/library/fn/map');

            var _map2 = _interopRequireDefault(_map);

            var _utils = _dereq_('./utils.js');

            var _utils2 = _dereq_('./utils');

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var BeanManager = function () {
                function BeanManager(classRepository) {
                    _classCallCheck(this, BeanManager);

                    (0, _utils2.checkMethod)('BeanManager(classRepository)');
                    (0, _utils2.checkParam)(classRepository, 'classRepository');

                    this.classRepository = classRepository;
                    this.addedHandlers = new _map2.default();
                    this.removedHandlers = new _map2.default();
                    this.updatedHandlers = new _map2.default();
                    this.arrayUpdatedHandlers = new _map2.default();
                    this.allAddedHandlers = [];
                    this.allRemovedHandlers = [];
                    this.allUpdatedHandlers = [];
                    this.allArrayUpdatedHandlers = [];

                    var self = this;
                    this.classRepository.onBeanAdded(function (type, bean) {
                        var handlerList = self.addedHandlers.get(type);
                        if ((0, _utils.exists)(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onBeanAdded-handler for type', type, e);
                                }
                            });
                        }
                        self.allAddedHandlers.forEach(function (handler) {
                            try {
                                handler(bean);
                            } catch (e) {
                                console.warn('An exception occurred while calling a general onBeanAdded-handler', e);
                            }
                        });
                    });
                    this.classRepository.onBeanRemoved(function (type, bean) {
                        var handlerList = self.removedHandlers.get(type);
                        if ((0, _utils.exists)(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onBeanRemoved-handler for type', type, e);
                                }
                            });
                        }
                        self.allRemovedHandlers.forEach(function (handler) {
                            try {
                                handler(bean);
                            } catch (e) {
                                console.warn('An exception occurred while calling a general onBeanRemoved-handler', e);
                            }
                        });
                    });
                    this.classRepository.onBeanUpdate(function (type, bean, propertyName, newValue, oldValue) {
                        var handlerList = self.updatedHandlers.get(type);
                        if ((0, _utils.exists)(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean, propertyName, newValue, oldValue);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onBeanUpdate-handler for type', type, e);
                                }
                            });
                        }
                        self.allUpdatedHandlers.forEach(function (handler) {
                            try {
                                handler(bean, propertyName, newValue, oldValue);
                            } catch (e) {
                                console.warn('An exception occurred while calling a general onBeanUpdate-handler', e);
                            }
                        });
                    });
                    this.classRepository.onArrayUpdate(function (type, bean, propertyName, index, count, newElements) {
                        var handlerList = self.arrayUpdatedHandlers.get(type);
                        if ((0, _utils.exists)(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean, propertyName, index, count, newElements);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onArrayUpdate-handler for type', type, e);
                                }
                            });
                        }
                        self.allArrayUpdatedHandlers.forEach(function (handler) {
                            try {
                                handler(bean, propertyName, index, count, newElements);
                            } catch (e) {
                                console.warn('An exception occurred while calling a general onArrayUpdate-handler', e);
                            }
                        });
                    });
                }

                _createClass(BeanManager, [{
                    key: 'notifyBeanChange',
                    value: function notifyBeanChange(bean, propertyName, newValue) {
                        (0, _utils2.checkMethod)('BeanManager.notifyBeanChange(bean, propertyName, newValue)');
                        (0, _utils2.checkParam)(bean, 'bean');
                        (0, _utils2.checkParam)(propertyName, 'propertyName');

                        return this.classRepository.notifyBeanChange(bean, propertyName, newValue);
                    }
                }, {
                    key: 'notifyArrayChange',
                    value: function notifyArrayChange(bean, propertyName, index, count, removedElements) {
                        (0, _utils2.checkMethod)('BeanManager.notifyArrayChange(bean, propertyName, index, count, removedElements)');
                        (0, _utils2.checkParam)(bean, 'bean');
                        (0, _utils2.checkParam)(propertyName, 'propertyName');
                        (0, _utils2.checkParam)(index, 'index');
                        (0, _utils2.checkParam)(count, 'count');
                        (0, _utils2.checkParam)(removedElements, 'removedElements');

                        this.classRepository.notifyArrayChange(bean, propertyName, index, count, removedElements);
                    }
                }, {
                    key: 'isManaged',
                    value: function isManaged(bean) {
                        (0, _utils2.checkMethod)('BeanManager.isManaged(bean)');
                        (0, _utils2.checkParam)(bean, 'bean');

                        // TODO: Implement dolphin.isManaged() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'create',
                    value: function create(type) {
                        (0, _utils2.checkMethod)('BeanManager.create(type)');
                        (0, _utils2.checkParam)(type, 'type');

                        // TODO: Implement dolphin.create() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'add',
                    value: function add(type, bean) {
                        (0, _utils2.checkMethod)('BeanManager.add(type, bean)');
                        (0, _utils2.checkParam)(type, 'type');
                        (0, _utils2.checkParam)(bean, 'bean');

                        // TODO: Implement dolphin.add() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'addAll',
                    value: function addAll(type, collection) {
                        (0, _utils2.checkMethod)('BeanManager.addAll(type, collection)');
                        (0, _utils2.checkParam)(type, 'type');
                        (0, _utils2.checkParam)(collection, 'collection');

                        // TODO: Implement dolphin.addAll() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'remove',
                    value: function remove(bean) {
                        (0, _utils2.checkMethod)('BeanManager.remove(bean)');
                        (0, _utils2.checkParam)(bean, 'bean');

                        // TODO: Implement dolphin.remove() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'removeAll',
                    value: function removeAll(collection) {
                        (0, _utils2.checkMethod)('BeanManager.removeAll(collection)');
                        (0, _utils2.checkParam)(collection, 'collection');

                        // TODO: Implement dolphin.removeAll() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'removeIf',
                    value: function removeIf(predicate) {
                        (0, _utils2.checkMethod)('BeanManager.removeIf(predicate)');
                        (0, _utils2.checkParam)(predicate, 'predicate');

                        // TODO: Implement dolphin.removeIf() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'onAdded',
                    value: function onAdded(type, eventHandler) {
                        var self = this;
                        if (!(0, _utils.exists)(eventHandler)) {
                            eventHandler = type;
                            (0, _utils2.checkMethod)('BeanManager.onAdded(eventHandler)');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            self.allAddedHandlers = self.allAddedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allAddedHandlers = self.allAddedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils2.checkMethod)('BeanManager.onAdded(type, eventHandler)');
                            (0, _utils2.checkParam)(type, 'type');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            var handlerList = self.addedHandlers.get(type);
                            if (!(0, _utils.exists)(handlerList)) {
                                handlerList = [];
                            }
                            self.addedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.addedHandlers.get(type);
                                    if ((0, _utils.exists)(handlerList)) {
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
                        if (!(0, _utils.exists)(eventHandler)) {
                            eventHandler = type;
                            (0, _utils2.checkMethod)('BeanManager.onRemoved(eventHandler)');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            self.allRemovedHandlers = self.allRemovedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allRemovedHandlers = self.allRemovedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils2.checkMethod)('BeanManager.onRemoved(type, eventHandler)');
                            (0, _utils2.checkParam)(type, 'type');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            var handlerList = self.removedHandlers.get(type);
                            if (!(0, _utils.exists)(handlerList)) {
                                handlerList = [];
                            }
                            self.removedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.removedHandlers.get(type);
                                    if ((0, _utils.exists)(handlerList)) {
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
                        if (!(0, _utils.exists)(eventHandler)) {
                            eventHandler = type;
                            (0, _utils2.checkMethod)('BeanManager.onBeanUpdate(eventHandler)');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            self.allUpdatedHandlers = self.allUpdatedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allUpdatedHandlers = self.allUpdatedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils2.checkMethod)('BeanManager.onBeanUpdate(type, eventHandler)');
                            (0, _utils2.checkParam)(type, 'type');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            var handlerList = self.updatedHandlers.get(type);
                            if (!(0, _utils.exists)(handlerList)) {
                                handlerList = [];
                            }
                            self.updatedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.updatedHandlers.get(type);
                                    if ((0, _utils.exists)(handlerList)) {
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
                        if (!(0, _utils.exists)(eventHandler)) {
                            eventHandler = type;
                            (0, _utils2.checkMethod)('BeanManager.onArrayUpdate(eventHandler)');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            self.allArrayUpdatedHandlers = self.allArrayUpdatedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allArrayUpdatedHandlers = self.allArrayUpdatedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils2.checkMethod)('BeanManager.onArrayUpdate(type, eventHandler)');
                            (0, _utils2.checkParam)(type, 'type');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            var handlerList = self.arrayUpdatedHandlers.get(type);
                            if (!(0, _utils.exists)(handlerList)) {
                                handlerList = [];
                            }
                            self.arrayUpdatedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.arrayUpdatedHandlers.get(type);
                                    if ((0, _utils.exists)(handlerList)) {
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

            exports.default = BeanManager;
        }, { "../bower_components/core.js/library/fn/map": 1, "./utils": 121, "./utils.js": 121 }], 106: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _map = _dereq_('../bower_components/core.js/library/fn/map');

            var _map2 = _interopRequireDefault(_map);

            var _constants = _dereq_('./constants');

            var consts = _interopRequireWildcard(_constants);

            var _utils = _dereq_('./utils.js');

            var _utils2 = _dereq_('./utils');

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }newObj.default = obj;return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var blocked = null;

            var ClassRepository = function () {
                function ClassRepository(dolphin) {
                    _classCallCheck(this, ClassRepository);

                    (0, _utils2.checkMethod)('ClassRepository(dolphin)');
                    (0, _utils2.checkParam)(dolphin, 'dolphin');

                    this.dolphin = dolphin;
                    this.classes = new _map2.default();
                    this.beanFromDolphin = new _map2.default();
                    this.beanToDolphin = new _map2.default();
                    this.classInfos = new _map2.default();
                    this.beanAddedHandlers = [];
                    this.beanRemovedHandlers = [];
                    this.propertyUpdateHandlers = [];
                    this.arrayUpdateHandlers = [];
                }

                _createClass(ClassRepository, [{
                    key: 'fixType',
                    value: function fixType(type, value) {
                        switch (type) {
                            case consts.BYTE:
                            case consts.SHORT:
                            case consts.INT:
                            case consts.LONG:
                                return parseInt(value);
                            case consts.FLOAT:
                            case consts.DOUBLE:
                                return parseFloat(value);
                            case consts.BOOLEAN:
                                return 'true' === String(value).toLowerCase();
                            case consts.STRING:
                            case consts.ENUM:
                                return String(value);
                            default:
                                return value;
                        }
                    }
                }, {
                    key: 'fromDolphin',
                    value: function fromDolphin(classRepository, type, value) {
                        if (!(0, _utils.exists)(value)) {
                            return null;
                        }
                        switch (type) {
                            case consts.DOLPHIN_BEAN:
                                return classRepository.beanFromDolphin.get(String(value));
                            case consts.DATE:
                                return new Date(String(value));
                            case consts.CALENDAR:
                                return new Date(String(value));
                            case consts.LOCAL_DATE_FIELD_TYPE:
                                return new Date(String(value));
                            case consts.LOCAL_DATE_TIME_FIELD_TYPE:
                                return new Date(String(value));
                            case consts.ZONED_DATE_TIME_FIELD_TYPE:
                                return new Date(String(value));
                            default:
                                return this.fixType(type, value);
                        }
                    }
                }, {
                    key: 'toDolphin',
                    value: function toDolphin(classRepository, type, value) {
                        if (!(0, _utils.exists)(value)) {
                            return null;
                        }
                        switch (type) {
                            case consts.DOLPHIN_BEAN:
                                return classRepository.beanToDolphin.get(value);
                            case consts.DATE:
                                return value instanceof Date ? value.toISOString() : value;
                            case consts.CALENDAR:
                                return value instanceof Date ? value.toISOString() : value;
                            case consts.LOCAL_DATE_FIELD_TYPE:
                                return value instanceof Date ? value.toISOString() : value;
                            case consts.LOCAL_DATE_TIME_FIELD_TYPE:
                                return value instanceof Date ? value.toISOString() : value;
                            case consts.ZONED_DATE_TIME_FIELD_TYPE:
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
                        if ((0, _utils.exists)(model)) {
                            var classInfo = classRepository.classes.get(model.presentationModelType);
                            var type = classInfo[propertyName];
                            if ((0, _utils.exists)(type)) {

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
                        if (!(0, _utils.exists)(list)) {
                            classRepository.propertyUpdateHandlers.forEach(function (handler) {
                                try {
                                    handler(type, bean, propertyName, [], undefined);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onBeanUpdate-handler', e);
                                }
                            });
                        }
                    }
                }, {
                    key: 'block',
                    value: function block(bean, propertyName) {
                        if ((0, _utils.exists)(blocked)) {
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
                        return (0, _utils.exists)(blocked) && blocked.bean === bean && blocked.propertyName === propertyName;
                    }
                }, {
                    key: 'unblock',
                    value: function unblock() {
                        blocked = null;
                    }
                }, {
                    key: 'notifyBeanChange',
                    value: function notifyBeanChange(bean, propertyName, newValue) {
                        (0, _utils2.checkMethod)('ClassRepository.notifyBeanChange(bean, propertyName, newValue)');
                        (0, _utils2.checkParam)(bean, 'bean');
                        (0, _utils2.checkParam)(propertyName, 'propertyName');

                        var modelId = this.beanToDolphin.get(bean);
                        if ((0, _utils.exists)(modelId)) {
                            var model = this.dolphin.findPresentationModelById(modelId);
                            if ((0, _utils.exists)(model)) {
                                var classInfo = this.classes.get(model.presentationModelType);
                                var type = classInfo[propertyName];
                                var attribute = model.findAttributeByPropertyName(propertyName);
                                if ((0, _utils.exists)(type) && (0, _utils.exists)(attribute)) {
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
                        (0, _utils2.checkMethod)('ClassRepository.notifyArrayChange(bean, propertyName, index, count, removedElements)');
                        (0, _utils2.checkParam)(bean, 'bean');
                        (0, _utils2.checkParam)(propertyName, 'propertyName');
                        (0, _utils2.checkParam)(index, 'index');
                        (0, _utils2.checkParam)(count, 'count');
                        (0, _utils2.checkParam)(removedElements, 'removedElements');

                        if (this.isBlocked(bean, propertyName)) {
                            return;
                        }
                        var modelId = this.beanToDolphin.get(bean);
                        var array = bean[propertyName];
                        if ((0, _utils.exists)(modelId) && (0, _utils.exists)(array)) {
                            var removedElementsCount = Array.isArray(removedElements) ? removedElements.length : 0;
                            this.sendListSplice(this, modelId, propertyName, index, index + removedElementsCount, array.slice(index, index + count));
                        }
                    }
                }, {
                    key: 'onBeanAdded',
                    value: function onBeanAdded(handler) {
                        (0, _utils2.checkMethod)('ClassRepository.onBeanAdded(handler)');
                        (0, _utils2.checkParam)(handler, 'handler');
                        this.beanAddedHandlers.push(handler);
                    }
                }, {
                    key: 'onBeanRemoved',
                    value: function onBeanRemoved(handler) {
                        (0, _utils2.checkMethod)('ClassRepository.onBeanRemoved(handler)');
                        (0, _utils2.checkParam)(handler, 'handler');
                        this.beanRemovedHandlers.push(handler);
                    }
                }, {
                    key: 'onBeanUpdate',
                    value: function onBeanUpdate(handler) {
                        (0, _utils2.checkMethod)('ClassRepository.onBeanUpdate(handler)');
                        (0, _utils2.checkParam)(handler, 'handler');
                        this.propertyUpdateHandlers.push(handler);
                    }
                }, {
                    key: 'onArrayUpdate',
                    value: function onArrayUpdate(handler) {
                        (0, _utils2.checkMethod)('ClassRepository.onArrayUpdate(handler)');
                        (0, _utils2.checkParam)(handler, 'handler');
                        this.arrayUpdateHandlers.push(handler);
                    }
                }, {
                    key: 'registerClass',
                    value: function registerClass(model) {
                        (0, _utils2.checkMethod)('ClassRepository.registerClass(model)');
                        (0, _utils2.checkParam)(model, 'model');

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
                        (0, _utils2.checkMethod)('ClassRepository.unregisterClass(model)');
                        (0, _utils2.checkParam)(model, 'model');
                        this.classes['delete'](model.id);
                    }
                }, {
                    key: 'load',
                    value: function load(model) {
                        (0, _utils2.checkMethod)('ClassRepository.load(model)');
                        (0, _utils2.checkParam)(model, 'model');

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
                                            console.warn('An exception occurred while calling an onBeanUpdate-handler', e);
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
                                console.warn('An exception occurred while calling an onBeanAdded-handler', e);
                            }
                        });
                        return bean;
                    }
                }, {
                    key: 'unload',
                    value: function unload(model) {
                        (0, _utils2.checkMethod)('ClassRepository.unload(model)');
                        (0, _utils2.checkParam)(model, 'model');

                        var bean = this.beanFromDolphin.get(model.id);
                        this.beanFromDolphin['delete'](model.id);
                        this.beanToDolphin['delete'](bean);
                        this.classInfos['delete'](model.id);
                        if ((0, _utils.exists)(bean)) {
                            this.beanRemovedHandlers.forEach(function (handler) {
                                try {
                                    handler(model.presentationModelType, bean);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onBeanRemoved-handler', e);
                                }
                            });
                        }
                        return bean;
                    }
                }, {
                    key: 'spliceListEntry',
                    value: function spliceListEntry(model) {
                        (0, _utils2.checkMethod)('ClassRepository.spliceListEntry(model)');
                        (0, _utils2.checkParam)(model, 'model');

                        var source = model.findAttributeByPropertyName('source');
                        var attribute = model.findAttributeByPropertyName('attribute');
                        var from = model.findAttributeByPropertyName('from');
                        var to = model.findAttributeByPropertyName('to');
                        var count = model.findAttributeByPropertyName('count');

                        if ((0, _utils.exists)(source) && (0, _utils.exists)(attribute) && (0, _utils.exists)(from) && (0, _utils.exists)(to) && (0, _utils.exists)(count)) {
                            var classInfo = this.classInfos.get(source.value);
                            var bean = this.beanFromDolphin.get(source.value);
                            if ((0, _utils.exists)(bean) && (0, _utils.exists)(classInfo)) {
                                var type = model.presentationModelType;
                                //var entry = fromDolphin(this, classInfo[attribute.value], element.value);
                                this.validateList(this, type, bean, attribute.value);
                                var newElements = [],
                                    element = null;
                                for (var i = 0; i < count.value; i++) {
                                    element = model.findAttributeByPropertyName(i.toString());
                                    if (!(0, _utils.exists)(element)) {
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
                                            console.warn('An exception occurred while calling an onArrayUpdate-handler', e);
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
                        if (!(0, _utils.exists)(param)) {
                            return param;
                        }
                        var type = typeof param === 'undefined' ? 'undefined' : _typeof(param);
                        if (type === 'object') {
                            if (param instanceof Date) {
                                return param.toISOString();
                            } else {
                                var value = this.beanToDolphin.get(param);
                                if ((0, _utils.exists)(value)) {
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
                        return this.fromDolphin(this, consts.DOLPHIN_BEAN, value);
                    }
                }]);

                return ClassRepository;
            }();

            exports.default = ClassRepository;
        }, { "../bower_components/core.js/library/fn/map": 1, "./constants": 115, "./utils": 121, "./utils.js": 121 }], 107: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
            /* global exports */
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _OpenDolphin = _dereq_('../opendolphin/build/OpenDolphin.js');

            var _OpenDolphin2 = _interopRequireDefault(_OpenDolphin);

            var _utils = _dereq_('./utils');

            var _connector = _dereq_('./connector.js');

            var _connector2 = _interopRequireDefault(_connector);

            var _beanmanager = _dereq_('./beanmanager.js');

            var _beanmanager2 = _interopRequireDefault(_beanmanager);

            var _classrepo = _dereq_('./classrepo.js');

            var _classrepo2 = _interopRequireDefault(_classrepo);

            var _controllermanager = _dereq_('./controllermanager.js');

            var _controllermanager2 = _interopRequireDefault(_controllermanager);

            var _clientcontext = _dereq_('./clientcontext.js');

            var _clientcontext2 = _interopRequireDefault(_clientcontext);

            var _platformHttpTransmitter = _dereq_('./platformHttpTransmitter.js');

            var _platformHttpTransmitter2 = _interopRequireDefault(_platformHttpTransmitter);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ClientContextFactory = function () {
                function ClientContextFactory() {
                    _classCallCheck(this, ClientContextFactory);
                }

                _createClass(ClientContextFactory, [{
                    key: 'create',
                    value: function create(url, config) {
                        (0, _utils.checkMethod)('connect(url, config)');
                        (0, _utils.checkParam)(url, 'url');
                        console.log('Creating client context ' + url + '    ' + JSON.stringify(config));

                        var builder = _OpenDolphin2.default.makeDolphin().url(url).reset(false).slackMS(4).supportCORS(true).maxBatchSize(Number.MAX_SAFE_INTEGER);
                        if ((0, _utils.exists)(config)) {
                            if ((0, _utils.exists)(config.errorHandler)) {
                                builder.errorHandler(config.errorHandler);
                            }
                            if ((0, _utils.exists)(config.headersInfo) && Object.keys(config.headersInfo).length > 0) {
                                builder.headersInfo(config.headersInfo);
                            }
                        }

                        var dolphin = builder.build();

                        var transmitter = new _platformHttpTransmitter2.default(url, config);
                        transmitter.on('error', function (error) {
                            clientContext.emit('error', error);
                        });
                        dolphin.clientConnector.transmitter = transmitter;

                        var classRepository = new _classrepo2.default(dolphin);
                        var beanManager = new _beanmanager2.default(classRepository);
                        var connector = new _connector2.default(url, dolphin, classRepository, config);
                        var controllerManager = new _controllermanager2.default(dolphin, classRepository, connector);

                        var clientContext = new _clientcontext2.default(dolphin, beanManager, controllerManager, connector);
                        return clientContext;
                    }
                }]);

                return ClientContextFactory;
            }();

            exports.default = ClientContextFactory;

            exports.ClientContextFactory = ClientContextFactory;
        }, { "../opendolphin/build/OpenDolphin.js": 101, "./beanmanager.js": 105, "./classrepo.js": 106, "./clientcontext.js": 108, "./connector.js": 114, "./controllermanager.js": 116, "./platformHttpTransmitter.js": 119, "./utils": 121 }], 108: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _OpenDolphin = _dereq_('../opendolphin/build/OpenDolphin.js');

            var _OpenDolphin2 = _interopRequireDefault(_OpenDolphin);

            var _emitterComponent = _dereq_('emitter-component');

            var _emitterComponent2 = _interopRequireDefault(_emitterComponent);

            var _promise = _dereq_('../bower_components/core.js/library/fn/promise');

            var _promise2 = _interopRequireDefault(_promise);

            var _utils = _dereq_('./utils.js');

            var _utils2 = _dereq_('./utils');

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ClientContext = function () {
                function ClientContext(dolphin, beanManager, controllerManager, connector) {
                    _classCallCheck(this, ClientContext);

                    (0, _utils2.checkMethod)('ClientContext(dolphin, beanManager, controllerManager, connector)');
                    (0, _utils2.checkParam)(dolphin, 'dolphin');
                    (0, _utils2.checkParam)(beanManager, 'beanManager');
                    (0, _utils2.checkParam)(controllerManager, 'controllerManager');
                    (0, _utils2.checkParam)(connector, 'connector');

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
                        this.connectionPromise = new _promise2.default(function (resolve) {
                            self._connector.connect();
                            self._connector.invoke(_OpenDolphin2.default.createCreateContextCommand()).then(function () {
                                self.isConnected = true;
                                resolve();
                            });
                        });
                        return this.connectionPromise;
                    }
                }, {
                    key: 'onConnect',
                    value: function onConnect() {
                        if ((0, _utils.exists)(this.connectionPromise)) {
                            if (!this.isConnected) {
                                return this.connectionPromise;
                            } else {
                                return new _promise2.default(function (resolve) {
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
                        (0, _utils2.checkMethod)('ClientContext.createController(name)');
                        (0, _utils2.checkParam)(name, 'name');

                        return this._controllerManager.createController(name);
                    }
                }, {
                    key: 'disconnect',
                    value: function disconnect() {
                        var self = this;
                        this.dolphin.stopPushListening();
                        return new _promise2.default(function (resolve) {
                            self._controllerManager.destroy().then(function () {
                                self._connector.invoke(_OpenDolphin2.default.createDestroyContextCommand());
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

            exports.default = ClientContext;

            (0, _emitterComponent2.default)(ClientContext.prototype);
        }, { "../bower_components/core.js/library/fn/promise": 2, "../opendolphin/build/OpenDolphin.js": 101, "./utils": 121, "./utils.js": 121, "emitter-component": 80 }], 109: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }(); /* Copyright 2016 Canoo Engineering AG.
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

            /*jslint browserify: true */

            var _utils = _dereq_('./utils.js');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Codec = function () {
                function Codec() {
                    _classCallCheck(this, Codec);
                }

                _createClass(Codec, null, [{
                    key: 'encodeCreatePresentationModelCommand',
                    value: function encodeCreatePresentationModelCommand(command) {
                        return {
                            'p': command.pmId,
                            't': command.pmType,
                            'a': command.attributes.map(function (attribute) {
                                var result = {
                                    'n': attribute.propertyName,
                                    'i': attribute.id
                                };
                                if ((0, _utils.exists)(attribute.value)) {
                                    result.v = attribute.value;
                                }
                                return result;
                            }),
                            'id': 'CreatePresentationModel'
                        };
                    }
                }, {
                    key: 'decodeCreatePresentationModelCommand',
                    value: function decodeCreatePresentationModelCommand(command) {
                        return {
                            'id': 'CreatePresentationModel',
                            'className': "org.opendolphin.core.comm.CreatePresentationModelCommand",
                            'clientSideOnly': false,
                            'pmId': command.p,
                            'pmType': command.t,
                            'attributes': command.a.map(function (attribute) {
                                return {
                                    'propertyName': attribute.n,
                                    'id': attribute.i,
                                    'value': (0, _utils.exists)(attribute.v) ? attribute.v : null,
                                    'qualifier': null
                                };
                            })
                        };
                    }
                }, {
                    key: 'encodeValueChangedCommand',
                    value: function encodeValueChangedCommand(command) {
                        var result = {
                            'a': command.attributeId
                        };
                        if ((0, _utils.exists)(command.oldValue)) {
                            result.o = command.oldValue;
                        }
                        if ((0, _utils.exists)(command.newValue)) {
                            result.n = command.newValue;
                        }
                        result.id = 'ValueChanged';
                        return result;
                    }
                }, {
                    key: 'decodeValueChangedCommand',
                    value: function decodeValueChangedCommand(command) {
                        return {
                            'id': 'ValueChanged',
                            'className': "org.opendolphin.core.comm.ValueChangedCommand",
                            'attributeId': command.a,
                            'oldValue': (0, _utils.exists)(command.o) ? command.o : null,
                            'newValue': (0, _utils.exists)(command.n) ? command.n : null
                        };
                    }
                }, {
                    key: 'encode',
                    value: function encode(commands) {
                        var self = this;
                        return JSON.stringify(commands.map(function (command) {
                            if (command.id === 'CreatePresentationModel') {
                                return self.encodeCreatePresentationModelCommand(command);
                            } else if (command.id === 'ValueChanged') {
                                return self.encodeValueChangedCommand(command);
                            }
                            return command;
                        }));
                    }
                }, {
                    key: 'decode',
                    value: function decode(transmitted) {
                        var self = this;
                        if (typeof transmitted === 'string') {
                            return JSON.parse(transmitted).map(function (command) {
                                if (command.id === 'CreatePresentationModel') {
                                    return self.decodeCreatePresentationModelCommand(command);
                                } else if (command.id === 'ValueChanged') {
                                    return self.decodeValueChangedCommand(command);
                                }
                                return command;
                            });
                        } else {
                            return transmitted;
                        }
                    }
                }]);

                return Codec;
            }();

            exports.default = Codec;
        }, { "./utils.js": 121 }], 110: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.CommandFactory = undefined;

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _destroyControllerCommand = _dereq_('./commands/destroyControllerCommand.js');

            var _destroyControllerCommand2 = _interopRequireDefault(_destroyControllerCommand);

            var _createControllerCommand = _dereq_('./commands/createControllerCommand.js');

            var _createControllerCommand2 = _interopRequireDefault(_createControllerCommand);

            var _callActionCommand = _dereq_('./commands/callActionCommand.js');

            var _callActionCommand2 = _interopRequireDefault(_callActionCommand);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CommandFactory = exports.CommandFactory = function () {
                function CommandFactory() {
                    _classCallCheck(this, CommandFactory);
                }

                _createClass(CommandFactory, null, [{
                    key: 'createDestroyControllerCommand',
                    value: function createDestroyControllerCommand(controllerId) {
                        return new _destroyControllerCommand2.default(controllerId);
                    }
                }, {
                    key: 'createCreateControllerCommand',
                    value: function createCreateControllerCommand(controllerName, parentControllerId) {
                        return new _createControllerCommand2.default(controllerName, parentControllerId);
                    }
                }, {
                    key: 'createCallActionCommand',
                    value: function createCallActionCommand(controllerid, actionName, params) {
                        return new _callActionCommand2.default(controllerid, actionName, params);
                    }
                }]);

                return CommandFactory;
            }();
        }, { "./commands/callActionCommand.js": 111, "./commands/createControllerCommand.js": 112, "./commands/destroyControllerCommand.js": 113 }], 111: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _utils = _dereq_('../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CallActionCommand = function CallActionCommand(controllerid, actionName, params) {
                _classCallCheck(this, CallActionCommand);

                (0, _utils.checkMethod)('CreateControllerCommand.invoke(controllerid, actionName, params)');
                (0, _utils.checkParam)(controllerid, 'controllerid');
                (0, _utils.checkParam)(actionName, 'actionName');

                this.id = 'CallAction';
                this.c = controllerid;
                this.n = actionName;
                this.p = params;
            };

            exports.default = CallActionCommand;
        }, { "../utils": 121 }], 112: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _utils = _dereq_('../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CreateControllerCommand = function CreateControllerCommand(controllerName, parentControllerId) {
                _classCallCheck(this, CreateControllerCommand);

                (0, _utils.checkMethod)('CreateControllerCommand.invoke(controllerName, parentControllerId)');
                (0, _utils.checkParam)(controllerName, 'controllerName');

                this.id = 'CreateController';
                this.n = controllerName;
                this.p = parentControllerId;
            };

            exports.default = CreateControllerCommand;
        }, { "../utils": 121 }], 113: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _utils = _dereq_('../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var DestroyControllerCommand = function DestroyControllerCommand(controllerId) {
                _classCallCheck(this, DestroyControllerCommand);

                (0, _utils.checkMethod)('DestroyControllerCommand(controllerId)');
                (0, _utils.checkParam)(controllerId, 'controllerId');

                this.id = 'DestroyController';
                this.c = controllerId;
            };

            exports.default = DestroyControllerCommand;
        }, { "../utils": 121 }], 114: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _OpenDolphin = _dereq_('../opendolphin/build/OpenDolphin.js');

            var _OpenDolphin2 = _interopRequireDefault(_OpenDolphin);

            var _promise = _dereq_('../bower_components/core.js/library/fn/promise');

            var _promise2 = _interopRequireDefault(_promise);

            var _ClientModelStore = _dereq_('../opendolphin/build/ClientModelStore');

            var _ClientModelStore2 = _interopRequireDefault(_ClientModelStore);

            var _utils = _dereq_('./utils.js');

            var _utils2 = _dereq_('./utils');

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

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

                    (0, _utils2.checkMethod)('Connector(url, dolphin, classRepository, config)');
                    (0, _utils2.checkParam)(url, 'url');
                    (0, _utils2.checkParam)(dolphin, 'dolphin');
                    (0, _utils2.checkParam)(classRepository, 'classRepository');

                    var self = this;
                    this.dolphin = dolphin;
                    this.config = config;
                    this.classRepository = classRepository;
                    this.highlanderPMResolver = function () {};
                    this.highlanderPMPromise = new _promise2.default(function (resolve) {
                        self.highlanderPMResolver = resolve;
                    });

                    dolphin.getClientModelStore().onModelStoreChange(function (event) {
                        var model = event.clientPresentationModel;
                        var sourceSystem = model.findAttributeByPropertyName(SOURCE_SYSTEM);
                        if ((0, _utils.exists)(sourceSystem) && sourceSystem.value === SOURCE_SYSTEM_SERVER) {
                            if (event.eventType === _ClientModelStore2.default.Type.ADDED) {
                                self.onModelAdded(model);
                            } else if (event.eventType === _ClientModelStore2.default.Type.REMOVED) {
                                self.onModelRemoved(model);
                            }
                        }
                    });
                }

                _createClass(Connector, [{
                    key: 'connect',
                    value: function connect() {
                        var that = this;
                        setTimeout(function () {
                            that.dolphin.startPushListening(_OpenDolphin2.default.createStartLongPollCommand(), _OpenDolphin2.default.createInterruptLongPollCommand());
                        }, 0);
                    }
                }, {
                    key: 'onModelAdded',
                    value: function onModelAdded(model) {
                        (0, _utils2.checkMethod)('Connector.onModelAdded(model)');
                        (0, _utils2.checkParam)(model, 'model');

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
                        (0, _utils2.checkMethod)('Connector.onModelRemoved(model)');
                        (0, _utils2.checkParam)(model, 'model');
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
                        (0, _utils2.checkMethod)('Connector.invoke(command)');
                        (0, _utils2.checkParam)(command, 'command');

                        var dolphin = this.dolphin;
                        return new _promise2.default(function (resolve) {
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

            exports.default = Connector;

            exports.SOURCE_SYSTEM = SOURCE_SYSTEM;
            exports.SOURCE_SYSTEM_CLIENT = SOURCE_SYSTEM_CLIENT;
            exports.SOURCE_SYSTEM_SERVER = SOURCE_SYSTEM_SERVER;
            exports.ACTION_CALL_BEAN = ACTION_CALL_BEAN;
        }, { "../bower_components/core.js/library/fn/promise": 2, "../opendolphin/build/ClientModelStore": 86, "../opendolphin/build/OpenDolphin.js": 101, "./utils": 121, "./utils.js": 121 }], 115: [function (_dereq_, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var DOLPHIN_BEAN = exports.DOLPHIN_BEAN = 0;
            var BYTE = exports.BYTE = 1;
            var SHORT = exports.SHORT = 2;
            var INT = exports.INT = 3;
            var LONG = exports.LONG = 4;
            var FLOAT = exports.FLOAT = 5;
            var DOUBLE = exports.DOUBLE = 6;
            var BOOLEAN = exports.BOOLEAN = 7;
            var STRING = exports.STRING = 8;
            var DATE = exports.DATE = 9;
            var ENUM = exports.ENUM = 10;
            var CALENDAR = exports.CALENDAR = 11;
            var LOCAL_DATE_FIELD_TYPE = exports.LOCAL_DATE_FIELD_TYPE = 55;
            var LOCAL_DATE_TIME_FIELD_TYPE = exports.LOCAL_DATE_TIME_FIELD_TYPE = 52;
            var ZONED_DATE_TIME_FIELD_TYPE = exports.ZONED_DATE_TIME_FIELD_TYPE = 54;
        }, {}], 116: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _promise = _dereq_('../bower_components/core.js/library/fn/promise');

            var _promise2 = _interopRequireDefault(_promise);

            var _set = _dereq_('../bower_components/core.js/library/fn/set');

            var _set2 = _interopRequireDefault(_set);

            var _utils = _dereq_('./utils');

            var _controllerproxy = _dereq_('./controllerproxy.js');

            var _controllerproxy2 = _interopRequireDefault(_controllerproxy);

            var _commandFactory = _dereq_('./commandFactory.js');

            var _connector = _dereq_('./connector.js');

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CONTROLLER_ID = 'controllerId';
            var MODEL = 'model';
            var ERROR_CODE = 'errorCode';

            var ControllerManager = function () {
                function ControllerManager(dolphin, classRepository, connector) {
                    _classCallCheck(this, ControllerManager);

                    (0, _utils.checkMethod)('ControllerManager(dolphin, classRepository, connector)');
                    (0, _utils.checkParam)(dolphin, 'dolphin');
                    (0, _utils.checkParam)(classRepository, 'classRepository');
                    (0, _utils.checkParam)(connector, 'connector');

                    this.dolphin = dolphin;
                    this.classRepository = classRepository;
                    this.connector = connector;
                    this.controllers = new _set2.default();
                }

                _createClass(ControllerManager, [{
                    key: 'createController',
                    value: function createController(name) {
                        return this._createController(name, null);
                    }
                }, {
                    key: '_createController',
                    value: function _createController(name, parentControllerId) {
                        (0, _utils.checkMethod)('ControllerManager.createController(name)');
                        (0, _utils.checkParam)(name, 'name');

                        var self = this;
                        var controllerId = void 0,
                            modelId = void 0,
                            model = void 0,
                            controller = void 0;
                        return new _promise2.default(function (resolve) {
                            self.connector.getHighlanderPM().then(function (highlanderPM) {
                                self.connector.invoke(_commandFactory.CommandFactory.createCreateControllerCommand(name, parentControllerId)).then(function () {
                                    controllerId = highlanderPM.findAttributeByPropertyName(CONTROLLER_ID).getValue();
                                    modelId = highlanderPM.findAttributeByPropertyName(MODEL).getValue();
                                    model = self.classRepository.mapDolphinToBean(modelId);
                                    controller = new _controllerproxy2.default(controllerId, model, self);
                                    self.controllers.add(controller);
                                    resolve(controller);
                                });
                            });
                        });
                    }
                }, {
                    key: 'invokeAction',
                    value: function invokeAction(controllerId, actionName, params) {
                        (0, _utils.checkMethod)('ControllerManager.invokeAction(controllerId, actionName, params)');
                        (0, _utils.checkParam)(controllerId, 'controllerId');
                        (0, _utils.checkParam)(actionName, 'actionName');

                        var self = this;
                        return new _promise2.default(function (resolve, reject) {

                            var attributes = [self.dolphin.attribute(_connector.SOURCE_SYSTEM, null, _connector.SOURCE_SYSTEM_CLIENT), self.dolphin.attribute(ERROR_CODE)];

                            var pm = self.dolphin.presentationModel.apply(self.dolphin, [null, _connector.ACTION_CALL_BEAN].concat(attributes));

                            var actionParams = [];
                            if ((0, _utils.exists)(params)) {
                                for (var param in params) {
                                    if (params.hasOwnProperty(param)) {
                                        var value = self.classRepository.mapParamToDolphin(params[param]);
                                        actionParams.push({ n: param, v: value });
                                    }
                                }
                            }

                            self.connector.invoke(_commandFactory.CommandFactory.createCallActionCommand(controllerId, actionName, actionParams)).then(function () {
                                var isError = pm.findAttributeByPropertyName(ERROR_CODE).getValue();
                                if (isError) {
                                    reject(new Error("ControllerAction caused an error"));
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
                        (0, _utils.checkMethod)('ControllerManager.destroyController(controller)');
                        (0, _utils.checkParam)(controller, 'controller');

                        var self = this;
                        return new _promise2.default(function (resolve) {
                            self.connector.getHighlanderPM().then(function (highlanderPM) {
                                self.controllers.delete(controller);
                                highlanderPM.findAttributeByPropertyName(CONTROLLER_ID).setValue(controller.controllerId);
                                self.connector.invoke(_commandFactory.CommandFactory.createDestroyControllerCommand(controller.getId())).then(resolve);
                            });
                        });
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var controllersCopy = this.controllers;
                        var promises = [];
                        this.controllers = new _set2.default();
                        controllersCopy.forEach(function (controller) {
                            try {
                                promises.push(controller.destroy());
                            } catch (e) {
                                // ignore
                            }
                        });
                        return _promise2.default.all(promises);
                    }
                }]);

                return ControllerManager;
            }();

            exports.default = ControllerManager;
        }, { "../bower_components/core.js/library/fn/promise": 2, "../bower_components/core.js/library/fn/set": 3, "./commandFactory.js": 110, "./connector.js": 114, "./controllerproxy.js": 117, "./utils": 121 }], 117: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _set = _dereq_('../bower_components/core.js/library/fn/set');

            var _set2 = _interopRequireDefault(_set);

            var _utils = _dereq_('./utils');

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ControllerProxy = function () {
                function ControllerProxy(controllerId, model, manager) {
                    _classCallCheck(this, ControllerProxy);

                    (0, _utils.checkMethod)('ControllerProxy(controllerId, model, manager)');
                    (0, _utils.checkParam)(controllerId, 'controllerId');
                    (0, _utils.checkParam)(model, 'model');
                    (0, _utils.checkParam)(manager, 'manager');

                    this.controllerId = controllerId;
                    this.model = model;
                    this.manager = manager;
                    this.destroyed = false;
                    this.onDestroyedHandlers = new _set2.default();
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
                        (0, _utils.checkMethod)('ControllerProxy.invoke(name, params)');
                        (0, _utils.checkParam)(name, 'name');

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
                        var _this = this;

                        if (this.destroyed) {
                            throw new Error('The controller was already destroyed');
                        }
                        this.destroyed = true;
                        this.onDestroyedHandlers.forEach(function (handler) {
                            try {
                                handler(_this);
                            } catch (e) {
                                console.warn('An exception occurred while calling an onDestroyed-handler', e);
                            }
                        }, this);
                        return this.manager.destroyController(this);
                    }
                }, {
                    key: 'onDestroyed',
                    value: function onDestroyed(handler) {
                        (0, _utils.checkMethod)('ControllerProxy.onDestroyed(handler)');
                        (0, _utils.checkParam)(handler, 'handler');

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

            exports.default = ControllerProxy;
        }, { "../bower_components/core.js/library/fn/set": 3, "./utils": 121 }], 118: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
                }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var DolphinRemotingError = exports.DolphinRemotingError = function (_Error) {
                _inherits(DolphinRemotingError, _Error);

                function DolphinRemotingError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Remoting Error';
                    var detail = arguments[1];

                    _classCallCheck(this, DolphinRemotingError);

                    var _this = _possibleConstructorReturn(this, (DolphinRemotingError.__proto__ || Object.getPrototypeOf(DolphinRemotingError)).call(this, message));

                    _this.detail = detail || undefined;
                    return _this;
                }

                return DolphinRemotingError;
            }(Error);

            var DolphinSessionError = exports.DolphinSessionError = function (_Error2) {
                _inherits(DolphinSessionError, _Error2);

                function DolphinSessionError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Session Error';

                    _classCallCheck(this, DolphinSessionError);

                    return _possibleConstructorReturn(this, (DolphinSessionError.__proto__ || Object.getPrototypeOf(DolphinSessionError)).call(this, message));
                }

                return DolphinSessionError;
            }(Error);

            var HttpResponseError = exports.HttpResponseError = function (_Error3) {
                _inherits(HttpResponseError, _Error3);

                function HttpResponseError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Http Response Error';

                    _classCallCheck(this, HttpResponseError);

                    return _possibleConstructorReturn(this, (HttpResponseError.__proto__ || Object.getPrototypeOf(HttpResponseError)).call(this, message));
                }

                return HttpResponseError;
            }(Error);

            var HttpNetworkError = exports.HttpNetworkError = function (_Error4) {
                _inherits(HttpNetworkError, _Error4);

                function HttpNetworkError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Http Network Error';

                    _classCallCheck(this, HttpNetworkError);

                    return _possibleConstructorReturn(this, (HttpNetworkError.__proto__ || Object.getPrototypeOf(HttpNetworkError)).call(this, message));
                }

                return HttpNetworkError;
            }(Error);
        }, {}], 119: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }(); /* Copyright 2016 Canoo Engineering AG.
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

            var _emitterComponent = _dereq_('emitter-component');

            var _emitterComponent2 = _interopRequireDefault(_emitterComponent);

            var _utils = _dereq_('./utils');

            var _errors = _dereq_('./errors.js');

            var _codec = _dereq_('./codec.js');

            var _codec2 = _interopRequireDefault(_codec);

            var _remotingErrorHandler = _dereq_('./remotingErrorHandler');

            var _remotingErrorHandler2 = _interopRequireDefault(_remotingErrorHandler);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

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
                    this.headersInfo = (0, _utils.exists)(config) ? config.headersInfo : null;
                    var connectionConfig = (0, _utils.exists)(config) ? config.connection : null;
                    this.maxRetry = (0, _utils.exists)(connectionConfig) && (0, _utils.exists)(connectionConfig.maxRetry) ? connectionConfig.maxRetry : 3;
                    this.timeout = (0, _utils.exists)(connectionConfig) && (0, _utils.exists)(connectionConfig.timeout) ? connectionConfig.timeout : 5000;
                    this.failed_attempt = 0;
                }

                _createClass(PlatformHttpTransmitter, [{
                    key: '_handleError',
                    value: function _handleError(reject, error) {
                        var connectionConfig = (0, _utils.exists)(this.config) ? this.config.connection : null;
                        var errorHandlers = (0, _utils.exists)(connectionConfig) && (0, _utils.exists)(connectionConfig.errorHandlers) ? connectionConfig.errorHandlers : [new _remotingErrorHandler2.default()];
                        errorHandlers.forEach(function (handler) {
                            handler.onError(error);
                        });
                        reject(error);
                    }
                }, {
                    key: '_send',
                    value: function _send(commands) {
                        var _this = this;

                        return new Promise(function (resolve, reject) {
                            var http = new XMLHttpRequest();
                            http.withCredentials = true;
                            http.onerror = function (errorContent) {
                                _this._handleError(reject, new _errors.HttpNetworkError('PlatformHttpTransmitter: Network error', errorContent));
                            };

                            http.onreadystatechange = function () {
                                if (http.readyState === FINISHED) {
                                    switch (http.status) {

                                        case SUCCESS:
                                            {
                                                _this.failed_attempt = 0;
                                                var currentClientId = http.getResponseHeader(CLIENT_ID_HTTP_HEADER_NAME);
                                                if ((0, _utils.exists)(currentClientId)) {
                                                    if ((0, _utils.exists)(_this.clientId) && _this.clientId !== currentClientId) {
                                                        _this._handleError(reject, new _errors.DolphinSessionError('PlatformHttpTransmitter: ClientId of the response did not match'));
                                                    }
                                                    _this.clientId = currentClientId;
                                                } else {
                                                    _this._handleError(reject, new _errors.DolphinSessionError('PlatformHttpTransmitter: Server did not send a clientId'));
                                                }
                                                resolve(http.responseText);
                                                break;
                                            }

                                        case REQUEST_TIMEOUT:
                                            _this._handleError(reject, new _errors.DolphinSessionError('PlatformHttpTransmitter: Session Timeout'));
                                            break;

                                        default:
                                            if (_this.failed_attempt <= _this.maxRetry) {
                                                _this.failed_attempt = _this.failed_attempt + 1;
                                            }
                                            _this._handleError(reject, new _errors.HttpResponseError('PlatformHttpTransmitter: HTTP Status != 200 (' + http.status + ')'));
                                            break;
                                    }
                                }
                            };

                            http.open('POST', _this.url);
                            if ((0, _utils.exists)(_this.clientId)) {
                                http.setRequestHeader(CLIENT_ID_HTTP_HEADER_NAME, _this.clientId);
                            }

                            if ((0, _utils.exists)(_this.headersInfo)) {
                                for (var i in _this.headersInfo) {
                                    if (_this.headersInfo.hasOwnProperty(i)) {
                                        http.setRequestHeader(i, _this.headersInfo[i]);
                                    }
                                }
                            }
                            if (_this.failed_attempt > _this.maxRetry) {
                                setTimeout(function () {
                                    http.send(_codec2.default.encode(commands));
                                }, _this.timeout);
                            } else {
                                http.send(_codec2.default.encode(commands));
                            }
                        });
                    }
                }, {
                    key: 'transmit',
                    value: function transmit(commands, onDone) {
                        var _this2 = this;

                        this._send(commands).then(function (responseText) {
                            if (responseText.trim().length > 0) {
                                try {
                                    var responseCommands = _codec2.default.decode(responseText);
                                    onDone(responseCommands);
                                } catch (err) {
                                    _this2.emit('error', new _errors.DolphinRemotingError('PlatformHttpTransmitter: Parse error: (Incorrect response = ' + responseText + ')'));
                                    onDone([]);
                                }
                            } else {
                                _this2.emit('error', new _errors.DolphinRemotingError('PlatformHttpTransmitter: Empty response'));
                                onDone([]);
                            }
                        }).catch(function (error) {
                            _this2.emit('error', error);
                            onDone([]);
                        });
                    }
                }, {
                    key: 'signal',
                    value: function signal(command) {
                        var _this3 = this;

                        this._send([command]).catch(function (error) {
                            return _this3.emit('error', error);
                        });
                    }
                }]);

                return PlatformHttpTransmitter;
            }();

            exports.default = PlatformHttpTransmitter;

            (0, _emitterComponent2.default)(PlatformHttpTransmitter.prototype);
        }, { "./codec.js": 109, "./errors.js": 118, "./remotingErrorHandler": 120, "./utils": 121, "emitter-component": 80 }], 120: [function (_dereq_, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var RemotingErrorHandler = function () {
                function RemotingErrorHandler() {
                    _classCallCheck(this, RemotingErrorHandler);
                }

                _createClass(RemotingErrorHandler, [{
                    key: "onError",
                    value: function onError(error) {
                        window.console.error(error);
                    }
                }]);

                return RemotingErrorHandler;
            }();

            exports.default = RemotingErrorHandler;
        }, {}], 121: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            "use strict";

            var checkMethodName;

            var exists = function exists(object) {
                return typeof object !== 'undefined' && object !== null;
            };

            module.exports.exists = exists;

            module.exports.checkMethod = function (name) {
                checkMethodName = name;
            };

            module.exports.checkParam = function (param, parameterName) {
                if (!exists(param)) {
                    throw new Error('The parameter ' + parameterName + ' is mandatory in ' + checkMethodName);
                }
            };
        }, {}] }, {}, [107])(107);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

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

angular.module('DolphinPlatform').factory('clientContextFactory', function () {
    return new dolphinClient.ClientContextFactory();
});

angular.module('DolphinPlatform').factory('vanillaClientContext', ['clientContextFactory', '$dolphinConfig', function (clientContextFactory, $dolphinConfig) {
    return clientContextFactory.create($dolphinConfig.DOLPHIN_URL, $dolphinConfig);
}]);

angular.module('DolphinPlatform').factory('dolphinBinding', ['$rootScope', '$timeout', 'vanillaClientContext', '$log', function ($rootScope, $timeout, vanillaClientContext, $log) {

    $rootScope.waitingForGlobalDolphinApply = false;

    $rootScope.applyInAngular = function () {
        if (!$rootScope.waitingForGlobalDolphinApply) {
            $rootScope.waitingForGlobalDolphinApply = true;
            $timeout(function () {
                $rootScope.waitingForGlobalDolphinApply = false;
                $log.debug('Angular apply is called by Dolphin Platform');
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

            $log.debug('Dolphin Platform binding listeners for Angular registered');
        },
        watchAttribute: function watchAttribute(bean, attribute) {
            $log.debug('Added Angular listener for property ' + attribute + ' of bean ' + JSON.stringify(bean));
            $rootScope.$watch(function () {
                return bean[attribute];
            }, function (newValue, oldValue) {
                $log.debug('Value ' + attribute + ' of bean ' + JSON.stringify(bean) + ' changed from ' + oldValue + ' to ' + newValue);
                vanillaClientContext.beanManager.classRepository.notifyBeanChange(bean, attribute, newValue);
            });
        },
        onBeanAddedHandler: function onBeanAddedHandler(bean) {
            $log.debug('Bean ' + JSON.stringify(bean) + ' added');

            for (var attr in bean) {
                dolphinBinding.watchAttribute(bean, attr);
            }

            $rootScope.applyInAngular();
        },
        onBeanRemovedHandler: function onBeanRemovedHandler(bean) {
            $log.debug('Bean ' + JSON.stringify(bean) + ' removed');
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
                $log.debug('Value ' + propertyName + ' was added to bean ' + JSON.stringify(bean));
                dolphinBinding.watchAttribute(bean, propertyName);
            }

            if (oldValue === newValue) {
                $log.debug('Received bean update for property ' + propertyName + ' without any change');
                return;
            }

            $log.debug('Bean update for property ' + propertyName + ' with new value "' + newValue + '"');

            bean[propertyName] = newValue;
            $rootScope.applyInAngular();
        },
        onArrayUpdateHandler: function onArrayUpdateHandler(bean, propertyName, index, count, newElements) {
            var array = bean[propertyName];
            var oldElements = array.slice(index, index + count);
            if (dolphinBinding.deepEqual(newElements, oldElements)) {
                return;
            }

            $log.debug('Array update for property ' + propertyName + ' starting at index ' + index + ' with ' + JSON.stringify(newElements));

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

    $log.debug('Dolphin Platform binding created');

    return dolphinBinding;
}]);

angular.module('DolphinPlatform').factory('clientContext', ['vanillaClientContext', 'dolphinBinding', '$window', '$log', function (vanillaClientContext, dolphinBinding, $window, $log) {
    var clientContext = {
        createController: function createController(scope, controllerName) {
            return vanillaClientContext.createController(controllerName).then(function (controllerProxy) {
                $log.debug('Creating Dolphin Platform controller ' + controllerName);
                scope.$on('$destroy', function () {
                    $log.debug('Destroying Dolphin Platform controller ' + controllerName);
                    controllerProxy.destroy();
                });
                scope.model = controllerProxy.model;
                return controllerProxy;
            });
        },
        disconnect: function disconnect() {
            vanillaClientContext.disconnect().then(function () {
                $log.debug('Dolphin Platform context disconnected');
            });
        },
        connect: function connect() {
            vanillaClientContext.connect().then(function () {
                dolphinBinding.init(vanillaClientContext.beanManager);
                $log.debug('Dolphin Platform context connected');
            });
        },
        onConnect: function onConnect() {
            return vanillaClientContext.onConnect().then(function () {
                $log.debug('Dolphin Platform context connected');
            });
        }
    };

    dolphinBinding.init(vanillaClientContext.beanManager);
    $window.onbeforeunload = clientContext.disconnect;

    $log.debug('Dolphin Platform context created');

    return clientContext;
}]);

},{"../bower_components/dolphin-platform-js/dist/dolphin-platform.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vbWFwLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL3NldC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc2V0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L25vZGVfbW9kdWxlcy9lbWl0dGVyLWNvbXBvbmVudC9pbmRleC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0F0dHJpYnV0ZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NsaWVudEF0dHJpYnV0ZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NsaWVudENvbm5lY3Rvci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NsaWVudERvbHBoaW4uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9DbGllbnRNb2RlbFN0b3JlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvb3BlbmRvbHBoaW4vYnVpbGQvQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9Db2RlYy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9Db21tYW5kQmF0Y2hlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NvbW1hbmRDb25zdGFudHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9DcmVhdGVDb250ZXh0Q29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0RlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvbi5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0Rlc3Ryb3lDb250ZXh0Q29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0RvbHBoaW5CdWlsZGVyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvb3BlbmRvbHBoaW4vYnVpbGQvRXZlbnRCdXMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9IdHRwVHJhbnNtaXR0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9JbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9Ob1RyYW5zbWl0dGVyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvb3BlbmRvbHBoaW4vYnVpbGQvT3BlbkRvbHBoaW4uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9TaWduYWxDb21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvb3BlbmRvbHBoaW4vYnVpbGQvU3RhcnRMb25nUG9sbENvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9WYWx1ZUNoYW5nZWRDb21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2JlYW5tYW5hZ2VyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NsYXNzcmVwby5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jbGllbnRDb250ZXh0RmFjdG9yeS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jbGllbnRjb250ZXh0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvZGVjLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRGYWN0b3J5LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRzL2NhbGxBY3Rpb25Db21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRzL2NyZWF0ZUNvbnRyb2xsZXJDb21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRzL2Rlc3Ryb3lDb250cm9sbGVyQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb25uZWN0b3IuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29uc3RhbnRzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbnRyb2xsZXJtYW5hZ2VyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbnRyb2xsZXJwcm94eS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9lcnJvcnMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvcGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvcmVtb3RpbmdFcnJvckhhbmRsZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvdXRpbHMuanMiLCJzcmMvZG9scGhpbi1wbGF0Zm9ybS1hbmd1bGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG9CQUFBLEFBQVE7QUFDUixvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG1CQUFBLEFBQU8sVUFBVSxRQUFBLEFBQVEsb0JBQXpCLEFBQTZDOzs7O0FDTDdDLG9CQUFBLEFBQVE7QUFDUixvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG9CQUFBLEFBQVE7QUFDUixtQkFBQSxBQUFPLFVBQVUsUUFBQSxBQUFRLG9CQUF6QixBQUE2Qzs7OztBQ0o3QyxvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG9CQUFBLEFBQVE7QUFDUixvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG1CQUFBLEFBQU8sVUFBVSxRQUFBLEFBQVEsb0JBQXpCLEFBQTZDOzs7O0FDTDdDLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBRyxBQUMzQjtvQkFBRyxPQUFBLEFBQU8sTUFBVixBQUFnQixZQUFXLE1BQU0sVUFBVSxLQUFoQixBQUFNLEFBQWUsQUFDaEQ7dUJBQUEsQUFBTyxBQUNSO0FBSEQ7Ozs7QUNBQSxtQkFBQSxBQUFPLFVBQVUsWUFBVSxDQUFFLEFBQWEsV0FBMUM7Ozs7QUNBQSxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLElBQVQsQUFBYSxhQUFiLEFBQTBCLE1BQTFCLEFBQWdDLGdCQUFlLEFBQzlEO29CQUFHLEVBQUUsY0FBRixBQUFnQixnQkFBaUIsbUJBQUEsQUFBbUIsYUFBYSxrQkFBcEUsQUFBc0YsSUFBSSxBQUN4RjswQkFBTSxVQUFVLE9BQWhCLEFBQU0sQUFBaUIsQUFDeEI7QUFBQyx3QkFBQSxBQUFPLEFBQ1Y7QUFKRDs7OztBQ0FBLGdCQUFJLFdBQVcsUUFBZixBQUFlLEFBQVE7QUFDdkIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFHLEFBQzNCO29CQUFHLENBQUMsU0FBSixBQUFJLEFBQVMsS0FBSSxNQUFNLFVBQVUsS0FBaEIsQUFBTSxBQUFlLEFBQ3RDO3VCQUFBLEFBQU8sQUFDUjtBQUhEOzs7O0FDREEsZ0JBQUksUUFBUSxRQUFaLEFBQVksQUFBUTs7QUFFcEIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxNQUFULEFBQWUsVUFBUyxBQUN2QztvQkFBSSxTQUFKLEFBQWEsQUFDYjtzQkFBQSxBQUFNLE1BQU4sQUFBWSxPQUFPLE9BQW5CLEFBQTBCLE1BQTFCLEFBQWdDLFFBQWhDLEFBQXdDLEFBQ3hDO3VCQUFBLEFBQU8sQUFDUjtBQUpEOzs7O0FDRkE7QUFDQTs7QUFDQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLFdBQVksUUFEaEIsQUFDZ0IsQUFBUTtnQkFDcEIsVUFBWSxRQUZoQixBQUVnQixBQUFRO0FBQ3hCLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsYUFBWSxBQUNwQzt1QkFBTyxVQUFBLEFBQVMsT0FBVCxBQUFnQixJQUFoQixBQUFvQixXQUFVLEFBQ25DO3dCQUFJLElBQVMsVUFBYixBQUFhLEFBQVU7d0JBQ25CLFNBQVMsU0FBUyxFQUR0QixBQUNhLEFBQVc7d0JBQ3BCLFFBQVMsUUFBQSxBQUFRLFdBRnJCLEFBRWEsQUFBbUI7d0JBRmhDLEFBR0ksQUFDSjtBQUNBO3dCQUFHLGVBQWUsTUFBbEIsQUFBd0IsSUFBRyxPQUFNLFNBQU4sQUFBZSxPQUFNLEFBQzlDO2dDQUFRLEVBQVIsQUFBUSxBQUFFLEFBQ1Y7NEJBQUcsU0FBSCxBQUFZLE9BQU0sT0FBQSxBQUFPLEFBQzNCO0FBQ0M7QUFKRCwyQkFJTyxPQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLFNBQVE7NEJBQUcsZUFBZSxTQUFsQixBQUEyQixHQUFFLEFBQy9EO2dDQUFHLEVBQUEsQUFBRSxXQUFMLEFBQWdCLElBQUcsT0FBTyxlQUFBLEFBQWUsU0FBdEIsQUFBK0IsQUFDbkQ7QUFGTTtBQUVMLDRCQUFPLENBQUEsQUFBQyxlQUFlLENBQXZCLEFBQXdCLEFBQzNCO0FBYkQsQUFjRDtBQWZEOzs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsZ0JBQUksTUFBVyxRQUFmLEFBQWUsQUFBUTtnQkFDbkIsVUFBVyxRQURmLEFBQ2UsQUFBUTtnQkFDbkIsV0FBVyxRQUZmLEFBRWUsQUFBUTtnQkFDbkIsV0FBVyxRQUhmLEFBR2UsQUFBUTtnQkFDbkIsTUFBVyxRQUpmLEFBSWUsQUFBUTtBQUN2QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLE1BQVQsQUFBZSxTQUFRLEFBQ3RDO29CQUFJLFNBQWdCLFFBQXBCLEFBQTRCO29CQUN4QixZQUFnQixRQURwQixBQUM0QjtvQkFDeEIsVUFBZ0IsUUFGcEIsQUFFNEI7b0JBQ3hCLFdBQWdCLFFBSHBCLEFBRzRCO29CQUN4QixnQkFBZ0IsUUFKcEIsQUFJNEI7b0JBQ3hCLFdBQWdCLFFBQUEsQUFBUSxLQUw1QixBQUtpQztvQkFDN0IsU0FBZ0IsV0FOcEIsQUFNK0IsQUFDL0I7dUJBQU8sVUFBQSxBQUFTLE9BQVQsQUFBZ0IsWUFBaEIsQUFBNEIsTUFBSyxBQUN0Qzt3QkFBSSxJQUFTLFNBQWIsQUFBYSxBQUFTO3dCQUNsQixPQUFTLFFBRGIsQUFDYSxBQUFRO3dCQUNqQixJQUFTLElBQUEsQUFBSSxZQUFKLEFBQWdCLE1BRjdCLEFBRWEsQUFBc0I7d0JBQy9CLFNBQVMsU0FBUyxLQUh0QixBQUdhLEFBQWM7d0JBQ3ZCLFFBSkosQUFJYTt3QkFDVCxTQUFTLFNBQVMsT0FBQSxBQUFPLE9BQWhCLEFBQVMsQUFBYyxVQUFVLFlBQVksT0FBQSxBQUFPLE9BQW5CLEFBQVksQUFBYyxLQUx4RSxBQUs2RTt3QkFMN0UsQUFNSTt3QkFOSixBQU1TLEFBQ1Q7MkJBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsU0FBUTs0QkFBRyxZQUFZLFNBQWYsQUFBd0IsTUFBSyxBQUN4RDtrQ0FBTSxLQUFOLEFBQU0sQUFBSyxBQUNYO2tDQUFNLEVBQUEsQUFBRSxLQUFGLEFBQU8sT0FBYixBQUFNLEFBQWMsQUFDcEI7Z0NBQUEsQUFBRyxNQUFLLEFBQ047b0NBQUEsQUFBRyxRQUFPLE9BQUEsQUFBTyxTQUFqQixBQUFVLEFBQWdCLEtBQTFCLEFBQTBDO3FDQUNyQyxJQUFBLEFBQUcsYUFBSSxBQUFPLEFBQ2pCOzZDQUFBLEFBQUssQUFBRzttREFERSxBQUNGLEFBQU8sTUFBeUIsQUFDeEM7NkNBQUEsQUFBSyxBQUFHO21EQUZFLEFBRUYsQUFBTyxLQUF5QixBQUN4Qzs2Q0FBQSxBQUFLLEFBQUc7bURBSEUsQUFHRixBQUFPLE9BQXlCLEFBQ3hDOzZDQUFBLEFBQUssQUFBRzttREFBQSxBQUFPLEtBSkwsQUFJRixBQUFZLE1BSmpCLEFBQU8sQUFJOEI7QUFKOUIsMkNBS0wsSUFBQSxBQUFHLFVBQVMsT0FQYixBQU9hLEFBQU8sT0FBZ0IsQUFDM0M7QUFDRjtBQVpEO0FBYUEsNEJBQU8sZ0JBQWdCLENBQWhCLEFBQWlCLElBQUksV0FBQSxBQUFXLFdBQVgsQUFBc0IsV0FBbEQsQUFBNkQsQUFDOUQ7QUF0QkQsQUF1QkQ7QUEvQkQ7Ozs7QUNaQSxnQkFBSSxXQUFXLFFBQWYsQUFBZSxBQUFRO2dCQUNuQixVQUFXLFFBRGYsQUFDZSxBQUFRO2dCQUNuQixVQUFXLFFBQUEsQUFBUSxVQUZ2QixBQUVlLEFBQWtCOztBQUVqQyxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLFVBQVMsQUFDakM7b0JBQUEsQUFBSSxBQUNKO29CQUFHLFFBQUgsQUFBRyxBQUFRLFdBQVUsQUFDbkI7d0JBQUksU0FBSixBQUFhLEFBQ2I7QUFDQTt3QkFBRyxPQUFBLEFBQU8sS0FBUCxBQUFZLGVBQWUsTUFBQSxBQUFNLFNBQVMsUUFBUSxFQUFyRCxBQUFHLEFBQTBDLEFBQVUsYUFBWSxJQUFBLEFBQUksQUFDdkU7d0JBQUcsU0FBSCxBQUFHLEFBQVMsSUFBRyxBQUNiOzRCQUFJLEVBQUosQUFBSSxBQUFFLEFBQ047NEJBQUcsTUFBSCxBQUFTLE1BQUssSUFBQSxBQUFJLEFBQ25CO0FBQ0Y7QUFBQyx3QkFBTyxNQUFBLEFBQU0sWUFBTixBQUFrQixRQUF6QixBQUFpQyxBQUNwQztBQVhEOzs7O0FDSkE7O0FBQ0EsZ0JBQUkscUJBQXFCLFFBQXpCLEFBQXlCLEFBQVE7O0FBRWpDLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsVUFBVCxBQUFtQixRQUFPLEFBQ3pDO3VCQUFPLEtBQUssbUJBQUwsQUFBSyxBQUFtQixXQUEvQixBQUFPLEFBQW1DLEFBQzNDO0FBRkQ7Ozs7QUNIQTs7QUFDQSxnQkFBSSxNQUFNLFFBQVYsQUFBVSxBQUFRO2dCQUNkLGNBQU0sQUFBUSxVQUFVO0FBRDVCLEFBQ1UsQUFDUjtBQURRO2dCQUVOLHNCQUFvQixBQUFFO3VCQUFBLEFBQU8sQUFBWTtBQUFuQyxBQUFJLGFBQUEsRUFBSixLQUhWLEFBR29EOztBQUVwRDtBQUNBLGdCQUFJLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBUyxJQUFULEFBQWEsS0FBSSxBQUM1QjtvQkFBSSxBQUNGOzJCQUFPLEdBQVAsQUFBTyxBQUFHLEFBQ1g7QUFGRCxrQkFFRSxPQUFBLEFBQU0sR0FBRSxDQUFFLEFBQWEsV0FDMUI7QUFKRDs7QUFNQSxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLElBQUcsQUFDM0I7b0JBQUEsQUFBSSxHQUFKLEFBQU8sR0FBUCxBQUFVLEFBQ1Y7dUJBQU8sT0FBQSxBQUFPLFlBQVAsQUFBbUIscUJBQWMsQUFBTyxPQUFPLEFBQ3BEO0FBRHNDO0FBQUEsMEJBRTVCLElBQUksT0FBTyxJQUFJLE9BQVgsQUFBVyxBQUFPLEtBQTlCLEFBQVksQUFBdUIsU0FBbkMsQUFBNEMsV0FBVyxBQUN6RDtBQURFO0FBQUEsNEJBRVUsQUFDWjtBQURFLEFBQU07QUFBQSxpQkFBTixHQUVBLENBQUMsSUFBSSxJQUFMLEFBQUssQUFBSSxPQUFULEFBQWdCLFlBQVksT0FBTyxFQUFQLEFBQVMsVUFBckMsQUFBK0MsYUFBL0MsQUFBNEQsY0FOaEUsQUFNOEUsQUFDL0U7QUFURDs7OztBQ2JBLGdCQUFJLFdBQVcsR0FBZixBQUFrQjs7QUFFbEIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFHLEFBQzNCO3VCQUFPLFNBQUEsQUFBUyxLQUFULEFBQWMsSUFBZCxBQUFrQixNQUFsQixBQUF3QixHQUFHLENBQWxDLEFBQU8sQUFBNEIsQUFDcEM7QUFGRDs7QUNGQTs7QUFDQSxnQkFBSSxLQUFjLFFBQUEsQUFBUSxnQkFBMUIsQUFBMEM7Z0JBQ3RDLFNBQWMsUUFEbEIsQUFDa0IsQUFBUTtnQkFDdEIsY0FBYyxRQUZsQixBQUVrQixBQUFRO2dCQUN0QixNQUFjLFFBSGxCLEFBR2tCLEFBQVE7Z0JBQ3RCLGFBQWMsUUFKbEIsQUFJa0IsQUFBUTtnQkFDdEIsVUFBYyxRQUxsQixBQUtrQixBQUFRO2dCQUN0QixRQUFjLFFBTmxCLEFBTWtCLEFBQVE7Z0JBQ3RCLGNBQWMsUUFQbEIsQUFPa0IsQUFBUTtnQkFDdEIsT0FBYyxRQVJsQixBQVFrQixBQUFRO2dCQUN0QixhQUFjLFFBVGxCLEFBU2tCLEFBQVE7Z0JBQ3RCLGNBQWMsUUFWbEIsQUFVa0IsQUFBUTtnQkFDdEIsVUFBYyxRQUFBLEFBQVEsV0FYMUIsQUFXcUM7Z0JBQ2pDLE9BQWMsY0FBQSxBQUFjLE9BWmhDLEFBWXVDOztBQUV2QyxnQkFBSSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQVMsTUFBVCxBQUFlLEtBQUksQUFDaEM7QUFDQTtvQkFBSSxRQUFRLFFBQVosQUFBWSxBQUFRO29CQUFwQixBQUEwQixBQUMxQjtvQkFBRyxVQUFILEFBQWEsS0FBSSxPQUFPLEtBQUEsQUFBSyxHQUFaLEFBQU8sQUFBUSxBQUNoQztBQUNBO3FCQUFJLFFBQVEsS0FBWixBQUFpQixJQUFqQixBQUFxQixPQUFPLFFBQVEsTUFBcEMsQUFBMEMsR0FBRSxBQUMxQzt3QkFBRyxNQUFBLEFBQU0sS0FBVCxBQUFjLEtBQUksT0FBQSxBQUFPLEFBQzFCO0FBQ0Y7QUFSRDs7QUFVQSxtQkFBQSxBQUFPO2dDQUNXLHdCQUFBLEFBQVMsU0FBVCxBQUFrQixNQUFsQixBQUF3QixRQUF4QixBQUFnQyxPQUFNLEFBQ3BEO3dCQUFJLFlBQVksVUFBQSxBQUFTLE1BQVQsQUFBZTttQ0FDN0IsQUFBVyxNQUFYLEFBQWlCLEdBQWpCLEFBQW9CLE1BQXBCLEFBQTBCLEFBQzFCOzZCQUFBLEFBQUssS0FBSyxPQUY0QixBQUV0QyxBQUFVLEFBQU8sT0FBTyxBQUN4Qjs2QkFBQSxBQUFLLEtBSGlDLEFBR3RDLEFBQVUsV0FBYyxBQUN4Qjs2QkFBQSxBQUFLLEtBSmlDLEFBSXRDLEFBQVUsV0FBYyxBQUN4Qjs2QkFBQSxBQUFLLFFBTGlDLEFBS3RDLEFBQWEsRUFMeUIsQUFDdEMsQ0FJd0IsQUFDeEI7NEJBQUcsWUFBSCxBQUFlLFdBQVUsTUFBQSxBQUFNLFVBQU4sQUFBZ0IsUUFBUSxLQUF4QixBQUF3QixBQUFLLFFBQTdCLEFBQXFDLEFBQy9EO0FBUEQsQUFBUSxBQVFSLHFCQVJRO2dDQVFJLEVBQVosQUFBYztBQUVaO0FBQ0E7K0JBQU8sU0FBQSxBQUFTLFFBQU8sQUFDckI7aUNBQUksSUFBSSxPQUFKLEFBQVcsTUFBTSxPQUFPLEtBQXhCLEFBQTZCLElBQUksUUFBUSxLQUE3QyxBQUFrRCxJQUFsRCxBQUFzRCxPQUFPLFFBQVEsTUFBckUsQUFBMkUsR0FBRSxBQUMzRTtzQ0FBQSxBQUFNLElBQU4sQUFBVSxBQUNWO29DQUFHLE1BQUgsQUFBUyxHQUFFLE1BQUEsQUFBTSxJQUFJLE1BQUEsQUFBTSxFQUFOLEFBQVEsSUFBbEIsQUFBc0IsQUFDakM7dUNBQU8sS0FBSyxNQUFaLEFBQU8sQUFBVyxBQUNuQjtBQUNEO2lDQUFBLEFBQUssS0FBSyxLQUFBLEFBQUssS0FBZixBQUFvQixBQUNwQjtpQ0FBQSxBQUFLLFFBQUwsQUFBYSxBQUNkO0FBWHNCLEFBWXZCO0FBQ0E7QUFDQTtrQ0FBVSxpQkFBQSxBQUFTLEtBQUksQUFDckI7Z0NBQUksT0FBSixBQUFZO2dDQUNSLFFBQVEsU0FBQSxBQUFTLE1BRHJCLEFBQ1ksQUFBZSxBQUMzQjtnQ0FBQSxBQUFHLE9BQU0sQUFDUDtvQ0FBSSxPQUFPLE1BQVgsQUFBaUI7b0NBQ2IsT0FBTyxNQURYLEFBQ2lCLEFBQ2pCO3VDQUFPLEtBQUEsQUFBSyxHQUFHLE1BQWYsQUFBTyxBQUFjLEFBQ3JCO3NDQUFBLEFBQU0sSUFBTixBQUFVLEFBQ1Y7b0NBQUEsQUFBRyxNQUFLLEtBQUEsQUFBSyxJQUFMLEFBQVMsQUFDakI7b0NBQUEsQUFBRyxNQUFLLEtBQUEsQUFBSyxJQUFMLEFBQVMsQUFDakI7b0NBQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxPQUFNLEtBQUEsQUFBSyxLQUFMLEFBQVUsQUFDOUI7b0NBQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxPQUFNLEtBQUEsQUFBSyxLQUFMLEFBQVUsQUFDOUI7cUNBQUEsQUFBSyxBQUNOO0FBQUMsb0NBQU8sQ0FBQyxDQUFSLEFBQVMsQUFDWjtBQTVCc0IsQUE2QnZCO0FBQ0E7QUFDQTtpQ0FBUyxTQUFBLEFBQVMsUUFBVCxBQUFpQixXQUFqQixBQUE0Qix5QkFBd0IsQUFDM0Q7dUNBQUEsQUFBVyxNQUFYLEFBQWlCLEdBQWpCLEFBQW9CLEFBQ3BCO2dDQUFJLElBQUksSUFBQSxBQUFJLFlBQVksVUFBQSxBQUFVLFNBQVYsQUFBbUIsSUFBSSxVQUF2QixBQUF1QixBQUFVLEtBQWpELEFBQXNELFdBQTlELEFBQVEsQUFBaUU7Z0NBQXpFLEFBQ0ksQUFDSjttQ0FBTSxRQUFRLFFBQVEsTUFBUixBQUFjLElBQUksS0FBaEMsQUFBcUMsSUFBRyxBQUN0QztrQ0FBRSxNQUFGLEFBQVEsR0FBRyxNQUFYLEFBQWlCLEdBQWpCLEFBQW9CLEFBQ3BCO0FBQ0E7dUNBQU0sU0FBUyxNQUFmLEFBQXFCLEdBQUU7NENBQVEsTUFBL0IsQUFBdUIsQUFBYztBQUN0QztBQUNGO0FBeENzQixBQXlDdkI7QUFDQTtBQUNBOzZCQUFLLFNBQUEsQUFBUyxJQUFULEFBQWEsS0FBSSxBQUNwQjttQ0FBTyxDQUFDLENBQUMsU0FBQSxBQUFTLE1BQWxCLEFBQVMsQUFBZSxBQUN6QjtBQTdDSCxBQUF5QixBQStDekI7QUEvQ3lCLEFBQ3ZCO3dCQThDRixBQUFHLGdCQUFlLEVBQUgsQUFBSyxXQUFMLEFBQWdCOzZCQUN4QixlQUFVLEFBQ2I7bUNBQU8sUUFBUSxLQUFmLEFBQU8sQUFBUSxBQUFLLEFBQ3JCO0FBSFksQUFBd0IsQUFLdkM7QUFMdUMsQUFDckMscUJBRGE7MkJBS2YsQUFBTyxBQUNSO0FBL0RjLEFBZ0VmO3FCQUFLLGFBQUEsQUFBUyxNQUFULEFBQWUsS0FBZixBQUFvQixPQUFNLEFBQzdCO3dCQUFJLFFBQVEsU0FBQSxBQUFTLE1BQXJCLEFBQVksQUFBZTt3QkFBM0IsQUFDSTt3QkFESixBQUNVLEFBQ1Y7QUFDQTt3QkFBQSxBQUFHLE9BQU0sQUFDUDs4QkFBQSxBQUFNLElBQU4sQUFBVSxBQUNaO0FBQ0M7QUFIRCwyQkFHTyxBQUNMOzZCQUFBLEFBQUssS0FBSzsrQkFDTCxRQUFRLFFBQUEsQUFBUSxLQURILEFBQ0wsQUFBYSxPQUFPLEFBQy9COytCQUZnQixBQUViLEtBQTRCLEFBQy9COytCQUhnQixBQUdiLE9BQTRCLEFBQy9COytCQUFHLE9BQU8sS0FKTSxBQUlELElBQWdCLEFBQy9COytCQUxnQixBQUtiLFdBQTRCLEFBQy9COytCQU5nQixBQU1iLE1BTkwsQUFBa0IsQUFNZSxBQUVqQztBQVJrQixBQUNoQjs0QkFPQyxDQUFDLEtBQUosQUFBUyxJQUFHLEtBQUEsQUFBSyxLQUFMLEFBQVUsQUFDdEI7NEJBQUEsQUFBRyxNQUFLLEtBQUEsQUFBSyxJQUFMLEFBQVMsQUFDakI7NkJBQUEsQUFBSyxBQUNMO0FBQ0E7NEJBQUcsVUFBSCxBQUFhLEtBQUksS0FBQSxBQUFLLEdBQUwsQUFBUSxTQUFSLEFBQWlCLEFBQ25DO0FBQUMsNEJBQUEsQUFBTyxBQUNWO0FBdEZjLEFBdUZmOzBCQXZGZSxBQXVGTCxBQUNWOzJCQUFXLG1CQUFBLEFBQVMsR0FBVCxBQUFZLE1BQVosQUFBa0IsUUFBTyxBQUNsQztBQUNBO0FBQ0E7Z0NBQUEsQUFBWSxHQUFaLEFBQWUsTUFBTSxVQUFBLEFBQVMsVUFBVCxBQUFtQjs2QkFDdEMsQUFBSyxLQURzQyxBQUMzQyxBQUFVLFVBQVcsQUFDckI7NkJBQUEsQUFBSyxLQUZzQyxBQUUzQyxBQUFVLEtBRmlDLEFBQzNDLENBQ3FCLEFBQ3JCOzZCQUFBLEFBQUssS0FIc0MsQUFHM0MsQUFBVSxXQUFXLEFBQ3RCO0FBSkQsdUJBSUc7NEJBQ0csT0FBSixBQUFZOzRCQUNSLE9BQVEsS0FEWixBQUNpQjs0QkFDYixRQUFRLEtBRlosQUFFaUIsQUFDakI7QUFDQTsrQkFBTSxTQUFTLE1BQWYsQUFBcUIsR0FBRTtvQ0FBUSxNQUEvQixBQUF1QixBQUFjO0FBTDFCLHlCQUFBLEFBQ1gsQ0FLQSxBQUNBOzRCQUFHLENBQUMsS0FBRCxBQUFNLE1BQU0sRUFBRSxLQUFBLEFBQUssS0FBSyxRQUFRLFFBQVEsTUFBUixBQUFjLElBQUksS0FBQSxBQUFLLEdBQTFELEFBQWUsQUFBOEMsS0FBSSxBQUMvRDtBQUNBO2lDQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7bUNBQU8sS0FBUCxBQUFPLEFBQUssQUFDYjtBQUNEO0FBQ0E7NEJBQUcsUUFBSCxBQUFXLFFBQVMsT0FBTyxLQUFBLEFBQUssR0FBRyxNQUFmLEFBQU8sQUFBYyxBQUN6Qzs0QkFBRyxRQUFILEFBQVcsVUFBUyxPQUFPLEtBQUEsQUFBSyxHQUFHLE1BQWYsQUFBTyxBQUFjLEFBQ3pDOytCQUFPLEtBQUEsQUFBSyxHQUFHLENBQUMsTUFBRCxBQUFPLEdBQUcsTUFBekIsQUFBTyxBQUFRLEFBQWdCLEFBQ2hDO0FBcEJELHVCQW9CRyxTQUFBLEFBQVMsWUFwQlosQUFvQndCLFVBQVcsQ0FwQm5DLEFBb0JvQyxRQXBCcEMsQUFvQjRDLEFBRTVDOztBQUNBOytCQUFBLEFBQVcsQUFDWjtBQW5ISCxBQUFpQjtBQUFBLEFBQ2Y7Ozs7QUMxQkY7O0FBQ0EsZ0JBQUksVUFBVSxRQUFkLEFBQWMsQUFBUTtnQkFDbEIsT0FBVSxRQURkLEFBQ2MsQUFBUTtBQUN0QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLE1BQUssQUFDN0I7dUJBQU8sU0FBQSxBQUFTLFNBQVEsQUFDdEI7d0JBQUcsUUFBQSxBQUFRLFNBQVgsQUFBb0IsTUFBSyxNQUFNLFVBQVUsT0FBaEIsQUFBTSxBQUFpQixBQUNoRDsyQkFBTyxLQUFQLEFBQU8sQUFBSyxBQUNiO0FBSEQsQUFJRDtBQUxEOztBQ0hBOztBQUNBLGdCQUFJLFNBQWlCLFFBQXJCLEFBQXFCLEFBQVE7Z0JBQ3pCLFVBQWlCLFFBRHJCLEFBQ3FCLEFBQVE7Z0JBQ3pCLE9BQWlCLFFBRnJCLEFBRXFCLEFBQVE7Z0JBQ3pCLFFBQWlCLFFBSHJCLEFBR3FCLEFBQVE7Z0JBQ3pCLE9BQWlCLFFBSnJCLEFBSXFCLEFBQVE7Z0JBQ3pCLGNBQWlCLFFBTHJCLEFBS3FCLEFBQVE7Z0JBQ3pCLFFBQWlCLFFBTnJCLEFBTXFCLEFBQVE7Z0JBQ3pCLGFBQWlCLFFBUHJCLEFBT3FCLEFBQVE7Z0JBQ3pCLFdBQWlCLFFBUnJCLEFBUXFCLEFBQVE7Z0JBQ3pCLGlCQUFpQixRQVRyQixBQVNxQixBQUFRO2dCQUN6QixLQUFpQixRQUFBLEFBQVEsZ0JBVjdCLEFBVTZDO2dCQUN6QyxPQUFpQixRQUFBLEFBQVEsb0JBWDdCLEFBV3FCLEFBQTRCO2dCQUM3QyxjQUFpQixRQVpyQixBQVlxQixBQUFROztBQUU3QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLE1BQVQsQUFBZSxTQUFmLEFBQXdCLFNBQXhCLEFBQWlDLFFBQWpDLEFBQXlDLFFBQXpDLEFBQWlELFNBQVEsQUFDeEU7b0JBQUksT0FBUSxPQUFaLEFBQVksQUFBTztvQkFDZixJQURKLEFBQ1k7b0JBQ1IsUUFBUSxTQUFBLEFBQVMsUUFGckIsQUFFNkI7b0JBQ3pCLFFBQVEsS0FBSyxFQUhqQixBQUdtQjtvQkFDZixJQUpKLEFBSVksQUFDWjtvQkFBRyxDQUFBLEFBQUMsZUFBZSxPQUFBLEFBQU8sS0FBdkIsQUFBNEIsZ0JBQWdCLFdBQVcsTUFBQSxBQUFNLFdBQVcsT0FBTyxZQUFVLEFBQzFGO3dCQUFBLEFBQUksSUFBSixBQUFRLFVBQVIsQUFBa0IsQUFDbkI7QUFGRCxBQUE2QyxBQUErQixpQkFBQSxDQUEvQixHQUV6QyxBQUNGO0FBQ0E7d0JBQUksT0FBQSxBQUFPLGVBQVAsQUFBc0IsU0FBdEIsQUFBK0IsTUFBL0IsQUFBcUMsUUFBekMsQUFBSSxBQUE2QyxBQUNqRDtnQ0FBWSxFQUFaLEFBQWMsV0FBZCxBQUF5QixBQUN6Qjt5QkFBQSxBQUFLLE9BQUwsQUFBWSxBQUNiO0FBUEQsdUJBT08sQUFDTDtnQ0FBWSxVQUFBLEFBQVMsUUFBVCxBQUFpQixVQUFTLEFBQ3BDO21DQUFBLEFBQVcsUUFBWCxBQUFtQixHQUFuQixBQUFzQixNQUF0QixBQUE0QixBQUM1QjsrQkFBQSxBQUFPLEtBQUssSUFBWixBQUFZLEFBQUksQUFDaEI7NEJBQUcsWUFBSCxBQUFlLFdBQVUsTUFBQSxBQUFNLFVBQU4sQUFBZ0IsUUFBUSxPQUF4QixBQUF3QixBQUFPLFFBQS9CLEFBQXVDLEFBQ2pFO0FBSkQsQUFBSSxBQUtKLHFCQUxJO3lCQUtDLGtFQUFBLEFBQWtFLE1BQXZFLEFBQUssQUFBd0UsTUFBSyxVQUFBLEFBQVMsS0FBSSxBQUM3Rjs0QkFBSSxXQUFXLE9BQUEsQUFBTyxTQUFTLE9BQS9CLEFBQXNDLEFBQ3RDOzRCQUFHLE9BQUEsQUFBTyxTQUFTLEVBQUUsV0FBVyxPQUFoQyxBQUFtQixBQUFvQixlQUFjLEVBQUwsQUFBTyxXQUFQLEFBQWtCLEtBQUssVUFBQSxBQUFTLEdBQVQsQUFBWSxHQUFFLEFBQ25GO3VDQUFBLEFBQVcsTUFBWCxBQUFpQixHQUFqQixBQUFvQixBQUNwQjtnQ0FBRyxDQUFBLEFBQUMsWUFBRCxBQUFhLFdBQVcsQ0FBQyxTQUE1QixBQUE0QixBQUFTLElBQUcsT0FBTyxPQUFBLEFBQU8sUUFBUCxBQUFlLFlBQXRCLEFBQWtDLEFBQzFFO2dDQUFJLFNBQVMsS0FBQSxBQUFLLEdBQUwsQUFBUSxLQUFLLE1BQUEsQUFBTSxJQUFOLEFBQVUsSUFBdkIsQUFBMkIsR0FBeEMsQUFBYSxBQUE4QixBQUMzQzttQ0FBTyxXQUFBLEFBQVcsT0FBbEIsQUFBeUIsQUFDMUI7QUFMK0MsQUFNakQseUJBTmlEO0FBRmxELEFBU0E7d0JBQUcsVUFBSCxBQUFhLFVBQVMsRUFBSCxBQUFLLFdBQUwsQUFBZ0I7NkJBQzVCLGVBQVUsQUFDYjttQ0FBTyxLQUFBLEFBQUssR0FBWixBQUFlLEFBQ2hCO0FBSGdCLEFBQXdCLEFBSzVDO0FBTDRDLEFBQ3pDLHFCQURpQjtBQU9yQjs7K0JBQUEsQUFBZSxHQUFmLEFBQWtCLEFBRWxCOztrQkFBQSxBQUFFLFFBQUYsQUFBVSxBQUNWO3dCQUFRLFFBQUEsQUFBUSxJQUFJLFFBQVosQUFBb0IsSUFBSSxRQUFoQyxBQUF3QyxHQUF4QyxBQUEyQyxBQUUzQzs7b0JBQUcsQ0FBSCxBQUFJLFNBQVEsT0FBQSxBQUFPLFVBQVAsQUFBaUIsR0FBakIsQUFBb0IsTUFBcEIsQUFBMEIsQUFFdEM7O3VCQUFBLEFBQU8sQUFDUjtBQTNDRDs7OztBQ2ZBLGdCQUFJLE9BQU8sT0FBQSxBQUFPLFVBQVUsRUFBQyxTQUE3QixBQUE0QixBQUFVO0FBQ3RDLGdCQUFHLE9BQUEsQUFBTyxPQUFWLEFBQWlCLFVBQVMsTSxBQUFBLEFBQU0sTUFBTTs7OztBQ0R0Qzs7QUFDQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7QUFDeEIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFULEFBQWEsTUFBYixBQUFtQixRQUFPLEFBQ3pDOzBCQUFBLEFBQVUsQUFDVjtvQkFBRyxTQUFILEFBQVksV0FBVSxPQUFBLEFBQU8sQUFDN0I7d0JBQUEsQUFBTyxBQUNMO3lCQUFBLEFBQUssQUFBRzsrQkFBTyxVQUFBLEFBQVMsR0FBRSxBQUN4QjttQ0FBTyxHQUFBLEFBQUcsS0FBSCxBQUFRLE1BQWYsQUFBTyxBQUFjLEFBQ3RCO0FBRk8sQUFHUjt5QkFBQSxBQUFLLEFBQUc7K0JBQU8sVUFBQSxBQUFTLEdBQVQsQUFBWSxHQUFFLEFBQzNCO21DQUFPLEdBQUEsQUFBRyxLQUFILEFBQVEsTUFBUixBQUFjLEdBQXJCLEFBQU8sQUFBaUIsQUFDekI7QUFGTyxBQUdSO3lCQUFBLEFBQUssQUFBRzsrQkFBTyxVQUFBLEFBQVMsR0FBVCxBQUFZLEdBQVosQUFBZSxHQUFFLEFBQzlCO21DQUFPLEdBQUEsQUFBRyxLQUFILEFBQVEsTUFBUixBQUFjLEdBQWQsQUFBaUIsR0FBeEIsQUFBTyxBQUFvQixBQUM1QjtBQVRILEFBT1UsQUFJVjs7dUJBQU8sWUFBUyxhQUFjLEFBQzVCOzJCQUFPLEdBQUEsQUFBRyxNQUFILEFBQVMsTUFBaEIsQUFBTyxBQUFlLEFBQ3ZCO0FBRkQsQUFHRDtBQWpCRDs7OztBQ0ZBOztBQUNBLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBRyxBQUMzQjtvQkFBRyxNQUFILEFBQVMsV0FBVSxNQUFNLFVBQVUsMkJBQWhCLEFBQU0sQUFBcUMsQUFDOUQ7dUJBQUEsQUFBTyxBQUNSO0FBSEQ7Ozs7QUNEQTs7QUFDQSxtQkFBQSxBQUFPLFVBQVUsU0FBQyxBQUFRLFlBQVksWUFBVSxBQUM5Qzt1QkFBTyxPQUFBLEFBQU8sZUFBUCxBQUFzQixJQUF0QixBQUEwQixPQUFNLEtBQUssZUFBVSxBQUFFOytCQUFBLEFBQU8sQUFBSTtBQUE1RCxBQUErQixxQkFBQSxJQUEvQixBQUErRCxLQUF0RSxBQUEyRSxBQUM1RTtBQUZELEFBQWtCLGFBQUE7Ozs7QUNEbEIsZ0JBQUksV0FBVyxRQUFmLEFBQWUsQUFBUTtnQkFDbkIsV0FBVyxRQUFBLEFBQVEsYUFBYTtBQURwQyxBQUVFOzs7Z0JBQ0UsS0FBSyxTQUFBLEFBQVMsYUFBYSxTQUFTLFNBSHhDLEFBRytCLEFBQWtCO0FBQ2pELG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBRyxBQUMzQjt1QkFBTyxLQUFLLFNBQUEsQUFBUyxjQUFkLEFBQUssQUFBdUIsTUFBbkMsQUFBeUMsQUFDMUM7QUFGRDs7OztBQ0pBOztBQUNBLG1CQUFBLEFBQU8sVUFBVSxBQUNmLGdHQURlLEFBRWYsTUFGRixBQUFpQixBQUVUOzs7O0FDSFIsZ0JBQUksU0FBWSxRQUFoQixBQUFnQixBQUFRO2dCQUNwQixPQUFZLFFBRGhCLEFBQ2dCLEFBQVE7Z0JBQ3BCLE1BQVksUUFGaEIsQUFFZ0IsQUFBUTtnQkFDcEIsT0FBWSxRQUhoQixBQUdnQixBQUFRO2dCQUNwQixZQUpKLEFBSWdCOztBQUVoQixnQkFBSSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQVMsTUFBVCxBQUFlLE1BQWYsQUFBcUIsUUFBTyxBQUN4QztvQkFBSSxZQUFZLE9BQU8sUUFBdkIsQUFBK0I7b0JBQzNCLFlBQVksT0FBTyxRQUR2QixBQUMrQjtvQkFDM0IsWUFBWSxPQUFPLFFBRnZCLEFBRStCO29CQUMzQixXQUFZLE9BQU8sUUFIdkIsQUFHK0I7b0JBQzNCLFVBQVksT0FBTyxRQUp2QixBQUkrQjtvQkFDM0IsVUFBWSxPQUFPLFFBTHZCLEFBSytCO29CQUMzQixVQUFZLFlBQUEsQUFBWSxPQUFPLEtBQUEsQUFBSyxVQUFVLEtBQUEsQUFBSyxRQU52RCxBQU1tQyxBQUE0QjtvQkFDM0QsV0FBWSxRQVBoQixBQU9nQixBQUFRO29CQUNwQixTQUFZLFlBQUEsQUFBWSxTQUFTLFlBQVksT0FBWixBQUFZLEFBQU8sUUFBUSxDQUFDLE9BQUEsQUFBTyxTQUFSLEFBQWlCLElBUmpGLEFBUWdFLEFBQXFCO29CQVJyRixBQVNJO29CQVRKLEFBU1M7b0JBVFQsQUFTYyxBQUNkO29CQUFBLEFBQUcsV0FBVSxTQUFBLEFBQVMsQUFDdEI7cUJBQUEsQUFBSSxPQUFKLEFBQVcsUUFBTyxBQUNoQjtBQUNBOzBCQUFNLENBQUEsQUFBQyxhQUFELEFBQWMsVUFBVSxPQUFBLEFBQU8sU0FBckMsQUFBOEMsQUFDOUM7d0JBQUcsT0FBTyxPQUFWLEFBQWlCLFNBQVEsQUFDekI7QUFDQTswQkFBTSxNQUFNLE9BQU4sQUFBTSxBQUFPLE9BQU8sT0FBMUIsQUFBMEIsQUFBTyxBQUNqQztBQUNBOzRCQUFBLEFBQVEsb0JBQW9CLE9BQU8sT0FBUCxBQUFPLEFBQU8sUUFBM0IsQUFBbUMsYUFBYSxPQUFBLEFBQU8sQUFDdEU7QUFEZTtBQUFBLGlDQUViLEFBQVcsVUFBTSxBQUFJLEtBQUssQUFDNUI7QUFERSxBQUFpQjtBQUFBLHFCQUFqQixHQUVBLFdBQVcsT0FBQSxBQUFPLFFBQWxCLEFBQTBCLGdCQUFPLEFBQVMsR0FBRSxBQUM1Qzs0QkFBSSxJQUFJLFNBQUosQUFBSSxFQUFBLEFBQVMsR0FBVCxBQUFZLEdBQVosQUFBZSxHQUFFLEFBQ3ZCO2dDQUFHLGdCQUFILEFBQW1CLEdBQUUsQUFDbkI7d0NBQU8sVUFBUCxBQUFpQixBQUNmO3lDQUFBLEFBQUssQUFBRzsrQ0FBTyxJQUFQLEFBQU8sQUFBSSxBQUNuQjt5Q0FBQSxBQUFLLEFBQUc7K0NBQU8sSUFBQSxBQUFJLEVBQVgsQUFBTyxBQUFNLEFBQ3JCO3lDQUFBLEFBQUssQUFBRzsrQ0FBTyxJQUFBLEFBQUksRUFBSixBQUFNLEdBSHZCLEFBR1UsQUFBTyxBQUFTO2lDQUN4QixPQUFPLElBQUEsQUFBSSxFQUFKLEFBQU0sR0FBTixBQUFTLEdBQWhCLEFBQU8sQUFBWSxBQUN0QjtBQUFDLG9DQUFPLEVBQUEsQUFBRSxNQUFGLEFBQVEsTUFBZixBQUFPLEFBQWMsQUFDeEI7QUFSRCxBQVNBOzBCQUFBLEFBQUUsYUFBYSxFQUFmLEFBQWUsQUFBRSxBQUNqQjsrQkFBQSxBQUFPLEFBQ1Q7QUFDQztBQWJpQyxxQkFBQyxDQUFqQyxBQUFnQyxBQWEvQixPQUFPLFlBQVksT0FBQSxBQUFPLE9BQW5CLEFBQTBCLGFBQWEsSUFBSSxTQUFKLEFBQWEsTUFBcEQsQUFBdUMsQUFBbUIsT0FqQnBFLEFBaUIyRSxBQUMzRTtBQUNBO3dCQUFBLEFBQUcsVUFBUyxBQUNWO3lCQUFDLFFBQUEsQUFBUSxZQUFZLFFBQUEsQUFBUSxVQUE3QixBQUFDLEFBQXNDLEtBQXZDLEFBQTRDLE9BQTVDLEFBQW1ELEFBQ25EO0FBQ0E7NEJBQUcsT0FBTyxRQUFQLEFBQWUsS0FBZixBQUFvQixZQUFZLENBQUMsU0FBcEMsQUFBb0MsQUFBUyxNQUFLLEtBQUEsQUFBSyxVQUFMLEFBQWUsS0FBZixBQUFvQixBQUN2RTtBQUNGO0FBQ0Y7QUE1Q0Q7QUE2Q0E7QUFDQSxvQkFBQSxBQUFRLEksQUFBUixBQUFZLEdBQUs7QUFDakIsb0JBQUEsQUFBUSxJLEFBQVIsQUFBWSxHQUFLO0FBQ2pCLG9CQUFBLEFBQVEsSSxBQUFSLEFBQVksR0FBSztBQUNqQixvQkFBQSxBQUFRLEksQUFBUixBQUFZLEdBQUs7QUFDakIsb0JBQUEsQUFBUSxJLEFBQVIsQUFBWSxJQUFLO0FBQ2pCLG9CQUFBLEFBQVEsSSxBQUFSLEFBQVksSUFBSztBQUNqQixvQkFBQSxBQUFRLEksQUFBUixBQUFZLElBQUs7QUFDakIsb0JBQUEsQUFBUSxJLEFBQVIsQUFBWSxLQUFLO0FBQ2pCLG1CQUFBLEFBQU8sVUFBUCxBQUFpQjs7OztBQzVEakIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxNQUFLLEFBQzdCO29CQUFJLEFBQ0Y7MkJBQU8sQ0FBQyxDQUFSLEFBQVMsQUFDVjtBQUZELGtCQUVFLE9BQUEsQUFBTSxHQUFFLEFBQ1I7MkJBQUEsQUFBTyxBQUNSO0FBQ0Y7QUFORDs7OztBQ0FBLGdCQUFJLE1BQWMsUUFBbEIsQUFBa0IsQUFBUTtnQkFDdEIsT0FBYyxRQURsQixBQUNrQixBQUFRO2dCQUN0QixjQUFjLFFBRmxCLEFBRWtCLEFBQVE7Z0JBQ3RCLFdBQWMsUUFIbEIsQUFHa0IsQUFBUTtnQkFDdEIsV0FBYyxRQUpsQixBQUlrQixBQUFRO2dCQUN0QixZQUFjLFFBTGxCLEFBS2tCLEFBQVE7Z0JBQ3RCLFFBTkosQUFNa0I7Z0JBQ2QsU0FQSixBQU9rQjtBQUNsQixnQkFBSSxXQUFVLE9BQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxVQUFULEFBQW1CLFNBQW5CLEFBQTRCLElBQTVCLEFBQWdDLE1BQWhDLEFBQXNDLFVBQVMsQUFDNUU7b0JBQUksb0JBQW9CLFlBQVUsQUFBRTsyQkFBQSxBQUFPLEFBQVc7QUFBekMsaUJBQUEsR0FBNEMsVUFBekQsQUFBeUQsQUFBVTtvQkFDL0QsSUFBUyxJQUFBLEFBQUksSUFBSixBQUFRLE1BQU0sVUFBQSxBQUFVLElBRHJDLEFBQ2EsQUFBNEI7b0JBQ3JDLFFBRkosQUFFYTtvQkFGYixBQUdJO29CQUhKLEFBR1k7b0JBSFosQUFHa0I7b0JBSGxCLEFBRzRCLEFBQzVCO29CQUFHLE9BQUEsQUFBTyxVQUFWLEFBQW9CLFlBQVcsTUFBTSxVQUFVLFdBQWhCLEFBQU0sQUFBcUIsQUFDMUQ7QUFDQTtvQkFBRyxZQUFILEFBQUcsQUFBWSxTQUFRLEtBQUksU0FBUyxTQUFTLFNBQXRCLEFBQWEsQUFBa0IsU0FBUyxTQUF4QyxBQUFpRCxPQUFqRCxBQUF3RCxTQUFRLEFBQ3JGOzZCQUFTLFVBQVUsRUFBRSxTQUFTLE9BQU8sU0FBaEIsQUFBZ0IsQUFBUyxRQUEzQixBQUFFLEFBQWlDLElBQUksS0FBakQsQUFBVSxBQUF1QyxBQUFLLE1BQU0sRUFBRSxTQUF2RSxBQUFxRSxBQUFFLEFBQVMsQUFDaEY7d0JBQUcsV0FBQSxBQUFXLFNBQVMsV0FBdkIsQUFBa0MsUUFBTyxPQUFBLEFBQU8sQUFDakQ7QUFIRCx1QkFHTyxLQUFJLFdBQVcsT0FBQSxBQUFPLEtBQXRCLEFBQWUsQUFBWSxXQUFXLENBQUMsQ0FBQyxPQUFPLFNBQVIsQUFBUSxBQUFTLFFBQXhELEFBQWdFLE9BQU8sQUFDNUU7NkJBQVMsS0FBQSxBQUFLLFVBQUwsQUFBZSxHQUFHLEtBQWxCLEFBQXVCLE9BQWhDLEFBQVMsQUFBOEIsQUFDdkM7d0JBQUcsV0FBQSxBQUFXLFNBQVMsV0FBdkIsQUFBa0MsUUFBTyxPQUFBLEFBQU8sQUFDakQ7QUFDRjtBQWREO0FBZUEscUJBQUEsQUFBUSxRQUFSLEFBQWlCO0FBQ2pCLHFCQUFBLEFBQVEsU0FBUixBQUFpQjs7OztBQ3hCakI7O0FBQ0EsZ0JBQUksU0FBUyxPQUFBLEFBQU8sVUFBVSxPQUFBLEFBQU8sVUFBUCxBQUFpQixlQUFlLE9BQUEsQUFBTyxRQUF2QyxBQUErQyxPQUEvQyxBQUMxQixTQUFTLE9BQUEsQUFBTyxRQUFQLEFBQWUsZUFBZSxLQUFBLEFBQUssUUFBbkMsQUFBMkMsT0FBM0MsQUFBa0QsT0FBTyxTQUR0RSxBQUNzRSxBQUFTO0FBQy9FLGdCQUFHLE9BQUEsQUFBTyxPQUFWLEFBQWlCLFVBQVMsTSxBQUFBLEFBQU0sUUFBUTs7OztBQ0h4QyxnQkFBSSxpQkFBaUIsR0FBckIsQUFBd0I7QUFDeEIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFULEFBQWEsS0FBSSxBQUNoQzt1QkFBTyxlQUFBLEFBQWUsS0FBZixBQUFvQixJQUEzQixBQUFPLEFBQXdCLEFBQ2hDO0FBRkQ7Ozs7QUNEQSxnQkFBSSxLQUFhLFFBQWpCLEFBQWlCLEFBQVE7Z0JBQ3JCLGFBQWEsUUFEakIsQUFDaUIsQUFBUTtBQUN6QixtQkFBQSxBQUFPLGtCQUFVLEFBQVEsb0JBQW9CLFVBQUEsQUFBUyxRQUFULEFBQWlCLEtBQWpCLEFBQXNCLE9BQU0sQUFDdkU7dUJBQU8sR0FBQSxBQUFHLEVBQUgsQUFBSyxRQUFMLEFBQWEsS0FBSyxXQUFBLEFBQVcsR0FBcEMsQUFBTyxBQUFrQixBQUFjLEFBQ3hDO0FBRmdCLGFBQUEsR0FFYixVQUFBLEFBQVMsUUFBVCxBQUFpQixLQUFqQixBQUFzQixPQUFNLEFBQzlCO3VCQUFBLEFBQU8sT0FBUCxBQUFjLEFBQ2Q7dUJBQUEsQUFBTyxBQUNSO0FBTEQ7Ozs7QUNGQSxtQkFBQSxBQUFPLFVBQVUsUUFBQSxBQUFRLGFBQVIsQUFBcUIsWUFBWSxTQUFsRCxBQUEyRDs7OztBQ0EzRCxtQkFBQSxBQUFPLFVBQVUsQ0FBQyxRQUFELEFBQUMsQUFBUSxxQkFBcUIsU0FBQyxBQUFRLFlBQVksWUFBVSxBQUM1RTt1QkFBTyxPQUFBLEFBQU8sZUFBZSxRQUFBLEFBQVEsaUJBQTlCLEFBQXNCLEFBQXlCLFFBQS9DLEFBQXVELE9BQU0sS0FBSyxlQUFVLEFBQUU7K0JBQUEsQUFBTyxBQUFJO0FBQXpGLEFBQTRELHFCQUFBLElBQTVELEFBQTRGLEtBQW5HLEFBQXdHLEFBQ3pHO0FBRkQsQUFBZ0QsYUFBQTs7OztBQ0FoRDs7QUFDQSxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLElBQVQsQUFBYSxNQUFiLEFBQW1CLE1BQUssQUFDdkM7b0JBQUksS0FBSyxTQUFULEFBQWtCLEFBQ2xCO3dCQUFPLEtBQVAsQUFBWSxBQUNWO3lCQUFBLEFBQUssQUFBRzsrQkFBTyxLQUFBLEFBQUssT0FDQSxHQUFBLEFBQUcsS0FEZixBQUNZLEFBQVEsQUFDNUI7eUJBQUEsQUFBSyxBQUFHOytCQUFPLEtBQUssR0FBRyxLQUFSLEFBQUssQUFBRyxBQUFLLE1BQ1IsR0FBQSxBQUFHLEtBQUgsQUFBUSxNQUFNLEtBRDFCLEFBQ1ksQUFBYyxBQUFLLEFBQ3ZDO3lCQUFBLEFBQUssQUFBRzsrQkFBTyxLQUFLLEdBQUcsS0FBSCxBQUFHLEFBQUssSUFBSSxLQUFqQixBQUFLLEFBQVksQUFBSyxNQUNqQixHQUFBLEFBQUcsS0FBSCxBQUFRLE1BQU0sS0FBZCxBQUFjLEFBQUssSUFBSSxLQURuQyxBQUNZLEFBQXVCLEFBQUssQUFDaEQ7eUJBQUEsQUFBSyxBQUFHOytCQUFPLEtBQUssR0FBRyxLQUFILEFBQUcsQUFBSyxJQUFJLEtBQVosQUFBWSxBQUFLLElBQUksS0FBMUIsQUFBSyxBQUFxQixBQUFLLE1BQzFCLEdBQUEsQUFBRyxLQUFILEFBQVEsTUFBTSxLQUFkLEFBQWMsQUFBSyxJQUFJLEtBQXZCLEFBQXVCLEFBQUssSUFBSSxLQUQ1QyxBQUNZLEFBQWdDLEFBQUssQUFDekQ7eUJBQUEsQUFBSyxBQUFHOytCQUFPLEtBQUssR0FBRyxLQUFILEFBQUcsQUFBSyxJQUFJLEtBQVosQUFBWSxBQUFLLElBQUksS0FBckIsQUFBcUIsQUFBSyxJQUFJLEtBQW5DLEFBQUssQUFBOEIsQUFBSyxNQUNuQyxHQUFBLEFBQUcsS0FBSCxBQUFRLE1BQU0sS0FBZCxBQUFjLEFBQUssSUFBSSxLQUF2QixBQUF1QixBQUFLLElBQUksS0FBaEMsQUFBZ0MsQUFBSyxJQUFJLEtBVi9ELEFBU1UsQUFDWSxBQUF5QyxBQUFLO2lCQUNsRSxPQUFvQixHQUFBLEFBQUcsTUFBSCxBQUFTLE1BQTdCLEFBQW9CLEFBQWUsQUFDdEM7QUFkRDs7OztBQ0RBOztBQUNBLGdCQUFJLE1BQU0sUUFBVixBQUFVLEFBQVE7QUFDbEIsbUJBQUEsQUFBTyxVQUFVLE9BQUEsQUFBTyxLQUFQLEFBQVkscUJBQVosQUFBaUMsS0FBakMsQUFBc0MsU0FBUyxVQUFBLEFBQVMsSUFBRyxBQUMxRTt1QkFBTyxJQUFBLEFBQUksT0FBSixBQUFXLFdBQVcsR0FBQSxBQUFHLE1BQXpCLEFBQXNCLEFBQVMsTUFBTSxPQUE1QyxBQUE0QyxBQUFPLEFBQ3BEO0FBRkQ7Ozs7QUNGQTs7QUFDQSxnQkFBSSxZQUFhLFFBQWpCLEFBQWlCLEFBQVE7Z0JBQ3JCLFdBQWEsUUFBQSxBQUFRLFVBRHpCLEFBQ2lCLEFBQWtCO2dCQUMvQixhQUFhLE1BRmpCLEFBRXVCOztBQUV2QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLElBQUcsQUFDM0I7dUJBQU8sT0FBQSxBQUFPLGNBQWMsVUFBQSxBQUFVLFVBQVYsQUFBb0IsTUFBTSxXQUFBLEFBQVcsY0FBakUsQUFBTyxBQUF3RSxBQUNoRjtBQUZEOzs7O0FDTEE7O0FBQ0EsZ0JBQUksTUFBTSxRQUFWLEFBQVUsQUFBUTtBQUNsQixtQkFBQSxBQUFPLFVBQVUsTUFBQSxBQUFNLFdBQVcsU0FBQSxBQUFTLFFBQVQsQUFBaUIsS0FBSSxBQUNyRDt1QkFBTyxJQUFBLEFBQUksUUFBWCxBQUFtQixBQUNwQjtBQUZEOzs7Ozs7Ozs7O0FDRkEsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFHLEFBQzNCO3VCQUFPLFFBQUEsQUFBTywyQ0FBUCxBQUFPLFNBQVAsQUFBYyxXQUFXLE9BQXpCLEFBQWdDLE9BQU8sT0FBQSxBQUFPLE9BQXJELEFBQTRELEFBQzdEO0FBRkQ7Ozs7QUNBQTs7QUFDQSxnQkFBSSxXQUFXLFFBQWYsQUFBZSxBQUFRO0FBQ3ZCLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsVUFBVCxBQUFtQixJQUFuQixBQUF1QixPQUF2QixBQUE4QixTQUFRLEFBQ3JEO29CQUFJLEFBQ0Y7MkJBQU8sVUFBVSxHQUFHLFNBQUEsQUFBUyxPQUFaLEFBQUcsQUFBZ0IsSUFBSSxNQUFqQyxBQUFVLEFBQXVCLEFBQU0sTUFBTSxHQUFwRCxBQUFvRCxBQUFHLEFBQ3pEO0FBQ0M7QUFIRCxrQkFHRSxPQUFBLEFBQU0sR0FBRSxBQUNSO3dCQUFJLE1BQU0sU0FBVixBQUFVLEFBQVMsQUFDbkI7d0JBQUcsUUFBSCxBQUFXLFdBQVUsU0FBUyxJQUFBLEFBQUksS0FBYixBQUFTLEFBQVMsQUFDdkM7MEJBQUEsQUFBTSxBQUNQO0FBQ0Y7QUFURDs7QUNGQTs7QUFDQSxnQkFBSSxTQUFpQixRQUFyQixBQUFxQixBQUFRO2dCQUN6QixhQUFpQixRQURyQixBQUNxQixBQUFRO2dCQUN6QixpQkFBaUIsUUFGckIsQUFFcUIsQUFBUTtnQkFDekIsb0JBSEosQUFHd0I7O0FBRXhCO0FBQ0Esb0JBQUEsQUFBUSxXQUFSLEFBQW1CLG1CQUFtQixRQUFBLEFBQVEsVUFBOUMsQUFBc0MsQUFBa0IsYUFBYSxZQUFVLEFBQUU7dUJBQUEsQUFBTyxBQUFPO0FBQS9GOztBQUVBLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsYUFBVCxBQUFzQixNQUF0QixBQUE0QixNQUFLLEFBQ2hEOzRCQUFBLEFBQVksWUFBWSxPQUFBLEFBQU8sbUJBQW1CLEVBQUMsTUFBTSxXQUFBLEFBQVcsR0FBcEUsQUFBd0IsQUFBMEIsQUFBTyxBQUFjLEFBQ3ZFOytCQUFBLEFBQWUsYUFBYSxPQUE1QixBQUFtQyxBQUNwQztBQUhEOztBQ1RBOztBQUNBLGdCQUFJLFVBQWlCLFFBQXJCLEFBQXFCLEFBQVE7Z0JBQ3pCLFVBQWlCLFFBRHJCLEFBQ3FCLEFBQVE7Z0JBQ3pCLFdBQWlCLFFBRnJCLEFBRXFCLEFBQVE7Z0JBQ3pCLE9BQWlCLFFBSHJCLEFBR3FCLEFBQVE7Z0JBQ3pCLE1BQWlCLFFBSnJCLEFBSXFCLEFBQVE7Z0JBQ3pCLFlBQWlCLFFBTHJCLEFBS3FCLEFBQVE7Z0JBQ3pCLGNBQWlCLFFBTnJCLEFBTXFCLEFBQVE7Z0JBQ3pCLGlCQUFpQixRQVByQixBQU9xQixBQUFRO2dCQUN6QixpQkFBaUIsUUFSckIsQUFRcUIsQUFBUTtnQkFDekIsV0FBaUIsUUFBQSxBQUFRLFVBVDdCLEFBU3FCLEFBQWtCO2dCQUNuQyxRQUFpQixFQUFFLEdBQUEsQUFBRyxRQUFRLFVBQVUsR0FWNUMsQUFVcUIsQUFBdUIsQUFBRyxRQVYvQyxBQVV1RDs7O2dCQUNuRCxjQVhKLEFBV3FCO2dCQUNqQixPQVpKLEFBWXFCO2dCQUNqQixTQWJKLEFBYXFCOztBQUVyQixnQkFBSSxhQUFhLFNBQWIsQUFBYSxhQUFVLEFBQUU7dUJBQUEsQUFBTyxBQUFPO0FBQTNDOztBQUVBLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsTUFBVCxBQUFlLE1BQWYsQUFBcUIsYUFBckIsQUFBa0MsTUFBbEMsQUFBd0MsU0FBeEMsQUFBaUQsUUFBakQsQUFBeUQsUUFBTyxBQUMvRTs0QkFBQSxBQUFZLGFBQVosQUFBeUIsTUFBekIsQUFBK0IsQUFDL0I7b0JBQUksWUFBWSxTQUFaLEFBQVksVUFBQSxBQUFTLE1BQUssQUFDNUI7d0JBQUcsQ0FBQSxBQUFDLFNBQVMsUUFBYixBQUFxQixPQUFNLE9BQU8sTUFBUCxBQUFPLEFBQU0sQUFDeEM7NEJBQUEsQUFBTyxBQUNMOzZCQUFBLEFBQUssQUFBTTttQ0FBTyxTQUFBLEFBQVMsT0FBTSxBQUFFO3VDQUFPLElBQUEsQUFBSSxZQUFKLEFBQWdCLE1BQXZCLEFBQU8sQUFBc0IsQUFBUTtBQUE3RCxBQUNYOzZCQUFBLEFBQUssQUFBUTttQ0FBTyxTQUFBLEFBQVMsU0FBUSxBQUFFO3VDQUFPLElBQUEsQUFBSSxZQUFKLEFBQWdCLE1BQXZCLEFBQU8sQUFBc0IsQUFBUTtBQUY5RSxBQUVlO3FCQUNiLE9BQU8sU0FBQSxBQUFTLFVBQVMsQUFBRTsrQkFBTyxJQUFBLEFBQUksWUFBSixBQUFnQixNQUF2QixBQUFPLEFBQXNCLEFBQVE7QUFBaEUsQUFDSDtBQU5ELEFBT0E7b0JBQUksTUFBYSxPQUFqQixBQUF3QjtvQkFDcEIsYUFBYSxXQURqQixBQUM0QjtvQkFDeEIsYUFGSixBQUVpQjtvQkFDYixRQUFhLEtBSGpCLEFBR3NCO29CQUNsQixVQUFhLE1BQUEsQUFBTSxhQUFhLE1BQW5CLEFBQW1CLEFBQU0sZ0JBQWdCLFdBQVcsTUFKckUsQUFJcUUsQUFBTTtvQkFDdkUsV0FBYSxXQUFXLFVBTDVCLEFBSzRCLEFBQVU7b0JBQ2xDLFdBQWEsVUFBVSxDQUFBLEFBQUMsYUFBRCxBQUFjLFdBQVcsVUFBbkMsQUFBbUMsQUFBVSxhQU45RCxBQU0yRTtvQkFDdkUsYUFBYSxRQUFBLEFBQVEsVUFBVSxNQUFBLEFBQU0sV0FBeEIsQUFBbUMsVUFQcEQsQUFPOEQ7b0JBUDlELEFBUUk7b0JBUkosQUFRYTtvQkFSYixBQVFrQixBQUNsQjtBQUNBO29CQUFBLEFBQUcsWUFBVyxBQUNaO3dDQUFvQixlQUFlLFdBQUEsQUFBVyxLQUFLLElBQW5ELEFBQW9CLEFBQWUsQUFBZ0IsQUFBSSxBQUN2RDt3QkFBRyxzQkFBc0IsT0FBekIsQUFBZ0MsV0FBVSxBQUN4QztBQUNBO3VDQUFBLEFBQWUsbUJBQWYsQUFBa0MsS0FBbEMsQUFBdUMsQUFDdkM7QUFDQTs0QkFBRyxDQUFBLEFBQUMsV0FBVyxDQUFDLElBQUEsQUFBSSxtQkFBcEIsQUFBZ0IsQUFBdUIsV0FBVSxLQUFBLEFBQUssbUJBQUwsQUFBd0IsVUFBeEIsQUFBa0MsQUFDcEY7QUFDRjtBQUNEO0FBQ0E7b0JBQUcsY0FBQSxBQUFjLFdBQVcsUUFBQSxBQUFRLFNBQXBDLEFBQTZDLFFBQU8sQUFDbEQ7aUNBQUEsQUFBYSxBQUNiOytCQUFXLFNBQUEsQUFBUyxTQUFRLEFBQUU7K0JBQU8sUUFBQSxBQUFRLEtBQWYsQUFBTyxBQUFhLEFBQVE7QUFBMUQsQUFDRDtBQUNEO0FBQ0E7b0JBQUcsQ0FBQyxDQUFBLEFBQUMsV0FBRixBQUFhLFlBQVksU0FBQSxBQUFTLGNBQWMsQ0FBQyxNQUFwRCxBQUFHLEFBQWlELEFBQU0sWUFBVyxBQUNuRTt5QkFBQSxBQUFLLE9BQUwsQUFBWSxVQUFaLEFBQXNCLEFBQ3ZCO0FBQ0Q7QUFDQTswQkFBQSxBQUFVLFFBQVYsQUFBa0IsQUFDbEI7MEJBQUEsQUFBVSxPQUFWLEFBQWtCLEFBQ2xCO29CQUFBLEFBQUcsU0FBUSxBQUNUOztnQ0FDVyxhQUFBLEFBQWEsV0FBVyxVQUR6QixBQUN5QixBQUFVLEFBQzNDOzhCQUFTLFNBQUEsQUFBYSxXQUFXLFVBRnpCLEFBRXlCLEFBQVUsQUFDM0M7aUNBSEYsQUFBVSxBQUdDLEFBRVg7QUFMVSxBQUNSO3dCQUlGLEFBQUcsUUFBTyxLQUFBLEFBQUksT0FBSixBQUFXLFNBQVEsQUFDM0I7NEJBQUcsRUFBRSxPQUFMLEFBQUcsQUFBUyxRQUFPLFNBQUEsQUFBUyxPQUFULEFBQWdCLEtBQUssUUFBckIsQUFBcUIsQUFBUSxBQUNqRDtBQUZELDJCQUVPLFFBQVEsUUFBQSxBQUFRLElBQUksUUFBQSxBQUFRLEtBQUssU0FBakMsQUFBb0IsQUFBc0IsYUFBMUMsQUFBdUQsTUFBdkQsQUFBNkQsQUFDckU7QUFDRDt1QkFBQSxBQUFPLEFBQ1I7QUFuREQ7Ozs7QUNsQkEsZ0JBQUksV0FBZSxRQUFBLEFBQVEsVUFBM0IsQUFBbUIsQUFBa0I7Z0JBQ2pDLGVBREosQUFDbUI7O0FBRW5CLGdCQUFJLEFBQ0Y7b0JBQUksUUFBUSxDQUFBLEFBQUMsR0FBYixBQUFZLEFBQUksQUFDaEI7c0JBQUEsQUFBTSxZQUFZLFlBQVUsQUFBRTttQ0FBQSxBQUFlLEFBQU87QUFBcEQsQUFDQTtzQkFBQSxBQUFNLEtBQU4sQUFBVyxPQUFPLFlBQVUsQUFBRTswQkFBQSxBQUFNLEFBQUk7QUFBeEMsQUFDRDtBQUpELGNBSUUsT0FBQSxBQUFNLEdBQUUsQ0FBRSxBQUFhOztBQUV6QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLE1BQVQsQUFBZSxhQUFZLEFBQzFDO29CQUFHLENBQUEsQUFBQyxlQUFlLENBQW5CLEFBQW9CLGNBQWEsT0FBQSxBQUFPLEFBQ3hDO29CQUFJLE9BQUosQUFBVyxBQUNYO29CQUFJLEFBQ0Y7d0JBQUksTUFBTyxDQUFYLEFBQVcsQUFBQzt3QkFDUixPQUFPLElBRFgsQUFDVyxBQUFJLEFBQ2Y7eUJBQUEsQUFBSyxPQUFPLFlBQVUsQUFBRTsrQkFBTyxFQUFDLE1BQU0sT0FBZCxBQUFPLEFBQWMsQUFBUTtBQUFyRCxBQUNBO3dCQUFBLEFBQUksWUFBWSxZQUFVLEFBQUU7K0JBQUEsQUFBTyxBQUFPO0FBQTFDLEFBQ0E7eUJBQUEsQUFBSyxBQUNOO0FBTkQsa0JBTUUsT0FBQSxBQUFNLEdBQUUsQ0FBRSxBQUFhLFdBQ3pCO3VCQUFBLEFBQU8sQUFDUjtBQVhEOzs7O0FDVEEsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxNQUFULEFBQWUsT0FBTSxBQUNwQzt1QkFBTyxFQUFDLE9BQUQsQUFBUSxPQUFPLE1BQU0sQ0FBQyxDQUE3QixBQUFPLEFBQXVCLEFBQy9CO0FBRkQ7Ozs7QUNBQSxtQkFBQSxBQUFPLFVBQVAsQUFBaUI7Ozs7QUNBakIsbUJBQUEsQUFBTyxVQUFQLEFBQWlCOzs7Ozs7Ozs7O0FDQWpCLGdCQUFJLE9BQVcsUUFBQSxBQUFRLFVBQXZCLEFBQWUsQUFBa0I7Z0JBQzdCLFdBQVcsUUFEZixBQUNlLEFBQVE7Z0JBQ25CLE1BQVcsUUFGZixBQUVlLEFBQVE7Z0JBQ25CLFVBQVcsUUFBQSxBQUFRLGdCQUh2QixBQUd1QztnQkFDbkMsS0FKSixBQUllO0FBQ2YsZ0JBQUksZUFBZSxPQUFBLEFBQU8sZ0JBQWdCLFlBQVUsQUFDbEQ7dUJBQUEsQUFBTyxBQUNSO0FBRkQ7QUFHQSxnQkFBSSxTQUFTLFNBQUMsQUFBUSxZQUFZLFlBQVUsQUFDMUM7dUJBQU8sYUFBYSxPQUFBLEFBQU8sa0JBQTNCLEFBQU8sQUFBYSxBQUF5QixBQUM5QztBQUZELEFBQWMsYUFBQTtBQUdkLGdCQUFJLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBUyxJQUFHLEFBQ3hCO3dCQUFBLEFBQVEsSUFBUixBQUFZLFFBQU87MkJBQ2QsTUFBTSxFQURlLEFBQ2IsSUFBSSxBQUNmOzJCQUZ3QixBQUVyQixHQUZMLEFBQWtCLEFBQVEsQUFFVCxBQUVsQjtBQUoyQixBQUN4QixxQkFEZ0I7QUFEcEI7QUFNQSxnQkFBSSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQVMsSUFBVCxBQUFhLFFBQU8sQUFDaEM7QUFDQTtvQkFBRyxDQUFDLFNBQUosQUFBSSxBQUFTLEtBQUksT0FBTyxRQUFBLEFBQU8sMkNBQVAsQUFBTyxRQUFQLEFBQWEsV0FBYixBQUF3QixLQUFLLENBQUMsT0FBQSxBQUFPLE1BQVAsQUFBYSxXQUFiLEFBQXdCLE1BQXpCLEFBQStCLE9BQW5FLEFBQTBFLEFBQzNGO29CQUFHLENBQUMsSUFBQSxBQUFJLElBQVIsQUFBSSxBQUFRLE9BQU0sQUFDaEI7QUFDQTt3QkFBRyxDQUFDLGFBQUosQUFBSSxBQUFhLEtBQUksT0FBQSxBQUFPLEFBQzVCO0FBQ0E7d0JBQUcsQ0FBSCxBQUFJLFFBQU8sT0FBQSxBQUFPLEFBQ2xCO0FBQ0E7NEJBQUEsQUFBUSxBQUNWO0FBQ0M7QUFBQyx3QkFBTyxHQUFBLEFBQUcsTUFBVixBQUFnQixBQUNuQjtBQVpEO0FBYUEsZ0JBQUksVUFBVSxTQUFWLEFBQVUsUUFBQSxBQUFTLElBQVQsQUFBYSxRQUFPLEFBQ2hDO29CQUFHLENBQUMsSUFBQSxBQUFJLElBQVIsQUFBSSxBQUFRLE9BQU0sQUFDaEI7QUFDQTt3QkFBRyxDQUFDLGFBQUosQUFBSSxBQUFhLEtBQUksT0FBQSxBQUFPLEFBQzVCO0FBQ0E7d0JBQUcsQ0FBSCxBQUFJLFFBQU8sT0FBQSxBQUFPLEFBQ2xCO0FBQ0E7NEJBQUEsQUFBUSxBQUNWO0FBQ0M7QUFBQyx3QkFBTyxHQUFBLEFBQUcsTUFBVixBQUFnQixBQUNuQjtBQVZEO0FBV0E7QUFDQSxnQkFBSSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQVMsSUFBRyxBQUN6QjtvQkFBRyxVQUFVLEtBQVYsQUFBZSxRQUFRLGFBQXZCLEFBQXVCLEFBQWEsT0FBTyxDQUFDLElBQUEsQUFBSSxJQUFuRCxBQUErQyxBQUFRLE9BQU0sUUFBQSxBQUFRLEFBQ3JFO3VCQUFBLEFBQU8sQUFDUjtBQUhEO0FBSUEsZ0JBQUksT0FBTyxPQUFBLEFBQU87cUJBQVUsQUFDaEIsQUFDVjtzQkFGMEIsQUFFaEIsQUFDVjt5QkFIMEIsQUFHaEIsQUFDVjt5QkFKMEIsQUFJaEIsQUFDVjswQkFMRixBQUE0QixBQUtoQjtBQUxnQixBQUMxQjs7OztBQy9DRixnQkFBSSxTQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLFlBQVksUUFBQSxBQUFRLFdBRHhCLEFBQ21DO2dCQUMvQixXQUFZLE9BQUEsQUFBTyxvQkFBb0IsT0FGM0MsQUFFa0Q7Z0JBQzlDLFVBQVksT0FIaEIsQUFHdUI7Z0JBQ25CLFVBQVksT0FKaEIsQUFJdUI7Z0JBQ25CLFNBQVksUUFBQSxBQUFRLFVBQVIsQUFBa0IsWUFMbEMsQUFLOEM7O0FBRTlDLG1CQUFBLEFBQU8sVUFBVSxZQUFVLEFBQ3pCO29CQUFBLEFBQUksTUFBSixBQUFVLE1BQVYsQUFBZ0IsQUFFaEI7O29CQUFJLFFBQVEsU0FBUixBQUFRLFFBQVUsQUFDcEI7d0JBQUEsQUFBSSxRQUFKLEFBQVksQUFDWjt3QkFBRyxXQUFXLFNBQVMsUUFBdkIsQUFBRyxBQUE0QixTQUFRLE9BQUEsQUFBTyxBQUM5QzsyQkFBQSxBQUFNLE1BQUssQUFDVDs2QkFBTyxLQUFQLEFBQVksQUFDWjsrQkFBTyxLQUFQLEFBQVksQUFDWjs0QkFBSSxBQUNGO0FBQ0Q7QUFGRCwwQkFFRSxPQUFBLEFBQU0sR0FBRSxBQUNSO2dDQUFBLEFBQUcsTUFBSCxBQUFRLGNBQ0gsT0FBQSxBQUFPLEFBQ1o7a0NBQUEsQUFBTSxBQUNQO0FBQ0Y7QUFBQyw0QkFBQSxBQUFPLEFBQ1Q7d0JBQUEsQUFBRyxRQUFPLE9BQUEsQUFBTyxBQUNsQjtBQWZELEFBaUJBOztBQUNBO29CQUFBLEFBQUcsUUFBTyxBQUNSOzZCQUFTLGtCQUFVLEFBQ2pCO2dDQUFBLEFBQVEsU0FBUixBQUFpQixBQUNsQjtBQUZELEFBR0Y7QUFDQztBQUxELDJCQUtPLEFBQUcsVUFBUyxBQUNqQjt3QkFBSSxTQUFKLEFBQWE7d0JBQ1QsT0FBUyxTQUFBLEFBQVMsZUFEdEIsQUFDYSxBQUF3QixBQUNyQzt3QkFBQSxBQUFJLFNBQUosQUFBYSxPQUFiLEFBQW9CLFFBQXBCLEFBQTRCLE1BQU0sRUFBQyxlQUhsQixBQUdqQixBQUFrQyxBQUFnQixTQUFRLEFBQzFEOzZCQUFTLGtCQUFVLEFBQ2pCOzZCQUFBLEFBQUssT0FBTyxTQUFTLENBQXJCLEFBQXNCLEFBQ3ZCO0FBRkQsQUFHRjtBQUNDO0FBUk0saUJBQUEsVUFRRyxXQUFXLFFBQWQsQUFBc0IsU0FBUSxBQUNuQzt3QkFBSSxVQUFVLFFBQWQsQUFBYyxBQUFRLEFBQ3RCOzZCQUFTLGtCQUFVLEFBQ2pCO2dDQUFBLEFBQVEsS0FBUixBQUFhLEFBQ2Q7QUFGRCxBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBWE0saUJBQUEsTUFXQSxBQUNMOzZCQUFTLGtCQUFVLEFBQ2pCO0FBQ0E7a0NBQUEsQUFBVSxLQUFWLEFBQWUsUUFBZixBQUF1QixBQUN4QjtBQUhELEFBSUQ7QUFFRDs7dUJBQU8sVUFBQSxBQUFTLElBQUcsQUFDakI7d0JBQUksT0FBTyxFQUFDLElBQUQsQUFBSyxJQUFJLE1BQXBCLEFBQVcsQUFBZSxBQUMxQjt3QkFBQSxBQUFHLE1BQUssS0FBQSxBQUFLLE9BQUwsQUFBWSxBQUNwQjt3QkFBRyxDQUFILEFBQUksTUFBSyxBQUNQOytCQUFBLEFBQU8sQUFDUDtBQUNEO0FBQUMsNEJBQUEsQUFBTyxBQUNWO0FBUEQsQUFRRDtBQTVERDs7OztBQ1BBOztBQUNBLGdCQUFJLFdBQWMsUUFBbEIsQUFBa0IsQUFBUTtnQkFDdEIsTUFBYyxRQURsQixBQUNrQixBQUFRO2dCQUN0QixjQUFjLFFBRmxCLEFBRWtCLEFBQVE7Z0JBQ3RCLFdBQWMsUUFBQSxBQUFRLGlCQUgxQixBQUdrQixBQUF5QjtnQkFDdkMsUUFBYyxTQUFkLEFBQWMsUUFBVSxDQUFFLEFBQWEsV0FKM0M7Z0JBS0ksWUFMSixBQUtrQjs7QUFFbEI7QUFDQSxnQkFBSSxjQUFhO0FBRWY7b0JBQUksU0FBUyxRQUFBLEFBQVEsaUJBQXJCLEFBQWEsQUFBeUI7b0JBQ2xDLElBQVMsWUFEYixBQUN5QjtvQkFDckIsS0FGSixBQUVhO29CQUNULEtBSEosQUFHYTtvQkFIYixBQUlJLEFBQ0o7dUJBQUEsQUFBTyxNQUFQLEFBQWEsVUFBYixBQUF1QixBQUN2Qjt3QkFBQSxBQUFRLFdBQVIsQUFBbUIsWUFBbkIsQUFBK0IsQUFDL0I7dUJBQUEsQUFBTyxNQVRrQixBQVN6QixBQUFhLGNBVFksQUFDekIsQ0FRNEIsQUFDNUI7QUFDQTtBQUNBO2lDQUFpQixPQUFBLEFBQU8sY0FBeEIsQUFBc0MsQUFDdEM7K0JBQUEsQUFBZSxBQUNmOytCQUFBLEFBQWUsTUFBTSxLQUFBLEFBQUssV0FBTCxBQUFnQixLQUFoQixBQUFxQixzQkFBckIsQUFBMkMsS0FBM0MsQUFBZ0QsWUFBckUsQUFBaUYsQUFDakY7K0JBQUEsQUFBZSxBQUNmOzhCQUFhLGVBQWIsQUFBNEIsQUFDNUI7dUJBQUEsQUFBTSxLQUFJOzJCQUFPLFlBQUEsQUFBVyxXQUFXLFlBQXZDLEFBQVUsQUFBTyxBQUFzQixBQUFZO0FBQ25ELHdCQUFBLEFBQU8sQUFDUjtBQW5CRDs7QUFxQkEsbUJBQUEsQUFBTyxVQUFVLE9BQUEsQUFBTyxVQUFVLFNBQUEsQUFBUyxPQUFULEFBQWdCLEdBQWhCLEFBQW1CLFlBQVcsQUFDOUQ7b0JBQUEsQUFBSSxBQUNKO29CQUFHLE1BQUgsQUFBUyxNQUFLLEFBQ1o7MEJBQUEsQUFBTSxhQUFhLFNBQW5CLEFBQW1CLEFBQVMsQUFDNUI7NkJBQVMsSUFBVCxBQUFTLEFBQUksQUFDYjswQkFBQSxBQUFNLGFBQU4sQUFBbUIsQUFDbkI7QUFDQTsyQkFBQSxBQUFPLFlBQVAsQUFBbUIsQUFDcEI7QUFORCx1QkFNTyxTQUFBLEFBQVMsQUFDaEI7dUJBQU8sZUFBQSxBQUFlLFlBQWYsQUFBMkIsU0FBUyxJQUFBLEFBQUksUUFBL0MsQUFBMkMsQUFBWSxBQUN4RDtBQVZEOzs7O0FDOUJBLGdCQUFJLFdBQWlCLFFBQXJCLEFBQXFCLEFBQVE7Z0JBQ3pCLGlCQUFpQixRQURyQixBQUNxQixBQUFRO2dCQUN6QixjQUFpQixRQUZyQixBQUVxQixBQUFRO2dCQUN6QixLQUFpQixPQUhyQixBQUc0Qjs7QUFFNUIsb0JBQUEsQUFBUSxJQUFJLFFBQUEsQUFBUSxvQkFBb0IsT0FBNUIsQUFBbUMsaUJBQWlCLFNBQUEsQUFBUyxlQUFULEFBQXdCLEdBQXhCLEFBQTJCLEdBQTNCLEFBQThCLFlBQVcsQUFDdkc7eUJBQUEsQUFBUyxBQUNUO29CQUFJLFlBQUEsQUFBWSxHQUFoQixBQUFJLEFBQWUsQUFDbkI7eUJBQUEsQUFBUyxBQUNUO29CQUFBLEFBQUcsb0JBQW1CLEFBQ3BCOzJCQUFPLEdBQUEsQUFBRyxHQUFILEFBQU0sR0FBYixBQUFPLEFBQVMsQUFDakI7QUFGaUIsaUJBQUEsQ0FFaEIsT0FBQSxBQUFNLEdBQUUsQ0FBRSxBQUFhLFdBQ3pCO29CQUFHLFNBQUEsQUFBUyxjQUFjLFNBQTFCLEFBQW1DLFlBQVcsTUFBTSxVQUFOLEFBQU0sQUFBVSxBQUM5RDtvQkFBRyxXQUFILEFBQWMsWUFBVyxFQUFBLEFBQUUsS0FBSyxXQUFQLEFBQWtCLEFBQzNDO3VCQUFBLEFBQU8sQUFDUjtBQVZEOzs7O0FDTEEsZ0JBQUksS0FBVyxRQUFmLEFBQWUsQUFBUTtnQkFDbkIsV0FBVyxRQURmLEFBQ2UsQUFBUTtnQkFDbkIsVUFBVyxRQUZmLEFBRWUsQUFBUTs7QUFFdkIsbUJBQUEsQUFBTyxVQUFVLFFBQUEsQUFBUSxvQkFBb0IsT0FBNUIsQUFBbUMsbUJBQW1CLFNBQUEsQUFBUyxpQkFBVCxBQUEwQixHQUExQixBQUE2QixZQUFXLEFBQzdHO3lCQUFBLEFBQVMsQUFDVDtvQkFBSSxPQUFTLFFBQWIsQUFBYSxBQUFRO29CQUNqQixTQUFTLEtBRGIsQUFDa0I7b0JBQ2QsSUFGSixBQUVRO29CQUZSLEFBR0ksQUFDSjt1QkFBTSxTQUFOLEFBQWUsR0FBRTt1QkFBQSxBQUFHLEVBQUgsQUFBSyxHQUFHLElBQUksS0FBWixBQUFZLEFBQUssTUFBTSxXQUF4QyxBQUFpQixBQUF1QixBQUFXO0FBQ25ELHdCQUFBLEFBQU8sQUFDUjtBQVJEOzs7O0FDSkE7O0FBQ0EsZ0JBQUksTUFBYyxRQUFsQixBQUFrQixBQUFRO2dCQUN0QixXQUFjLFFBRGxCLEFBQ2tCLEFBQVE7Z0JBQ3RCLFdBQWMsUUFBQSxBQUFRLGlCQUYxQixBQUVrQixBQUF5QjtnQkFDdkMsY0FBYyxPQUhsQixBQUd5Qjs7QUFFekIsbUJBQUEsQUFBTyxVQUFVLE9BQUEsQUFBTyxrQkFBa0IsVUFBQSxBQUFTLEdBQUUsQUFDbkQ7b0JBQUksU0FBSixBQUFJLEFBQVMsQUFDYjtvQkFBRyxJQUFBLEFBQUksR0FBUCxBQUFHLEFBQU8sV0FBVSxPQUFPLEVBQVAsQUFBTyxBQUFFLEFBQzdCO29CQUFHLE9BQU8sRUFBUCxBQUFTLGVBQVQsQUFBd0IsY0FBYyxhQUFhLEVBQXRELEFBQXdELGFBQVksQUFDbEU7MkJBQU8sRUFBQSxBQUFFLFlBQVQsQUFBcUIsQUFDdEI7QUFBQyx3QkFBTyxhQUFBLEFBQWEsU0FBYixBQUFzQixjQUE3QixBQUEyQyxBQUM5QztBQU5EOzs7O0FDTkEsZ0JBQUksTUFBZSxRQUFuQixBQUFtQixBQUFRO2dCQUN2QixZQUFlLFFBRG5CLEFBQ21CLEFBQVE7Z0JBQ3ZCLGVBQWUsUUFBQSxBQUFRLHFCQUYzQixBQUVtQixBQUE2QjtnQkFDNUMsV0FBZSxRQUFBLEFBQVEsaUJBSDNCLEFBR21CLEFBQXlCOztBQUU1QyxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLFFBQVQsQUFBaUI7b0JBQzVCLElBQVMsVUFBYixBQUFhLEFBQVU7b0JBQ25CLElBREosQUFDYTtvQkFDVCxTQUZKLEFBRWE7b0JBRmIsQUFHSSxBQUNKO3FCQUFBLEFBQUksT0FBSixBQUFXLEdBQUU7d0JBQUcsT0FBSCxBQUFVLFVBQVMsSUFBQSxBQUFJLEdBQUosQUFBTyxRQUFRLE9BQUEsQUFBTyxLQUF0RCxBQUFnQyxBQUFlLEFBQVk7QUFMckIsaUJBQUEsQUFDdEMsQ0FLQSxBQUNBO3VCQUFNLE1BQUEsQUFBTSxTQUFaLEFBQXFCLEdBQUU7d0JBQUcsSUFBQSxBQUFJLEdBQUcsTUFBTSxNQUFoQixBQUFHLEFBQWEsQUFBTSxPQUFNLEFBQ2pEO3lCQUFDLGFBQUEsQUFBYSxRQUFkLEFBQUMsQUFBcUIsUUFBUSxPQUFBLEFBQU8sS0FBckMsQUFBOEIsQUFBWSxBQUMzQztBQUZEO0FBR0Esd0JBQUEsQUFBTyxBQUNSO0FBWEQ7Ozs7QUNMQTs7QUFDQSxnQkFBSSxRQUFjLFFBQWxCLEFBQWtCLEFBQVE7Z0JBQ3RCLGNBQWMsUUFEbEIsQUFDa0IsQUFBUTs7QUFFMUIsbUJBQUEsQUFBTyxVQUFVLE9BQUEsQUFBTyxRQUFRLFNBQUEsQUFBUyxLQUFULEFBQWMsR0FBRSxBQUM5Qzt1QkFBTyxNQUFBLEFBQU0sR0FBYixBQUFPLEFBQVMsQUFDakI7QUFGRDs7OztBQ0pBLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsUUFBVCxBQUFpQixPQUFNLEFBQ3RDOztnQ0FDZ0IsRUFBRSxTQURYLEFBQ1MsQUFBVyxBQUN6QjtrQ0FBYyxFQUFFLFNBRlgsQUFFUyxBQUFXLEFBQ3pCOzhCQUFjLEVBQUUsU0FIWCxBQUdTLEFBQVcsQUFDekI7MkJBSkYsQUFBTyxBQUlTLEFBRWpCO0FBTlEsQUFDTDtBQUZKOzs7O0FDQUEsZ0JBQUksT0FBTyxRQUFYLEFBQVcsQUFBUTtBQUNuQixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLFFBQVQsQUFBaUIsS0FBakIsQUFBc0IsTUFBSyxBQUMxQztxQkFBSSxJQUFKLEFBQVEsT0FBUixBQUFlLEtBQUksQUFDakI7d0JBQUcsUUFBUSxPQUFYLEFBQVcsQUFBTyxNQUFLLE9BQUEsQUFBTyxPQUFPLElBQXJDLEFBQXVCLEFBQWMsQUFBSSxVQUNwQyxLQUFBLEFBQUssUUFBTCxBQUFhLEtBQUssSUFBbEIsQUFBa0IsQUFBSSxBQUM1QjtBQUFDLHdCQUFBLEFBQU8sQUFDVjtBQUxEOzs7O0FDREEsbUJBQUEsQUFBTyxVQUFVLFFBQWpCLEFBQWlCLEFBQVE7O0FDQXpCOztBQUNBLGdCQUFJLFNBQWMsUUFBbEIsQUFBa0IsQUFBUTtnQkFDdEIsT0FBYyxRQURsQixBQUNrQixBQUFRO2dCQUN0QixLQUFjLFFBRmxCLEFBRWtCLEFBQVE7Z0JBQ3RCLGNBQWMsUUFIbEIsQUFHa0IsQUFBUTtnQkFDdEIsVUFBYyxRQUFBLEFBQVEsVUFKMUIsQUFJa0IsQUFBa0I7O0FBRXBDLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsS0FBSSxBQUM1QjtvQkFBSSxJQUFJLE9BQU8sS0FBUCxBQUFPLEFBQUssUUFBWixBQUFvQixhQUFhLEtBQWpDLEFBQWlDLEFBQUssT0FBTyxPQUFyRCxBQUFxRCxBQUFPLEFBQzVEO29CQUFHLGVBQUEsQUFBZSxLQUFLLENBQUMsRUFBeEIsQUFBd0IsQUFBRSxhQUFTLEFBQUcsRUFBSCxBQUFLLEdBQUwsQUFBUTtrQ0FBUyxBQUNwQyxBQUNkO3lCQUFLLGVBQVUsQUFBRTsrQkFBQSxBQUFPLEFBQU87QUFGRSxBQUFpQixBQUlyRDtBQUpxRCxBQUNsRCxpQkFEaUM7QUFGckM7Ozs7QUNQQSxnQkFBSSxNQUFNLFFBQUEsQUFBUSxnQkFBbEIsQUFBa0M7Z0JBQzlCLE1BQU0sUUFEVixBQUNVLEFBQVE7Z0JBQ2QsTUFBTSxRQUFBLEFBQVEsVUFGbEIsQUFFVSxBQUFrQjs7QUFFNUIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFULEFBQWEsS0FBYixBQUFrQixNQUFLLEFBQ3RDO29CQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBQSxBQUFPLEtBQUssR0FBckIsQUFBd0IsV0FBbEMsQUFBVSxBQUFtQyxNQUFLLElBQUEsQUFBSSxJQUFKLEFBQVEsS0FBSyxFQUFDLGNBQUQsQUFBZSxNQUFNLE9BQWxDLEFBQWEsQUFBNEIsQUFDNUY7QUFGRDs7OztBQ0pBLGdCQUFJLFNBQVMsUUFBQSxBQUFRLGFBQXJCLEFBQWEsQUFBcUI7Z0JBQzlCLE1BQVMsUUFEYixBQUNhLEFBQVE7QUFDckIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxLQUFJLEFBQzVCO3VCQUFPLE9BQUEsQUFBTyxTQUFTLE9BQUEsQUFBTyxPQUFPLElBQXJDLEFBQU8sQUFBOEIsQUFBSSxBQUMxQztBQUZEOzs7O0FDRkEsZ0JBQUksU0FBUyxRQUFiLEFBQWEsQUFBUTtnQkFDakIsU0FESixBQUNhO2dCQUNULFFBQVMsT0FBQSxBQUFPLFlBQVksT0FBQSxBQUFPLFVBRnZDLEFBRWEsQUFBb0M7QUFDakQsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxLQUFJLEFBQzVCO3VCQUFPLE1BQUEsQUFBTSxTQUFTLE1BQUEsQUFBTSxPQUE1QixBQUFPLEFBQTRCLEFBQ3BDO0FBRkQ7Ozs7QUNIQTs7QUFDQSxnQkFBSSxXQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLFlBQVksUUFEaEIsQUFDZ0IsQUFBUTtnQkFDcEIsVUFBWSxRQUFBLEFBQVEsVUFGeEIsQUFFZ0IsQUFBa0I7QUFDbEMsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxHQUFULEFBQVksR0FBRSxBQUM3QjtvQkFBSSxJQUFJLFNBQUEsQUFBUyxHQUFqQixBQUFvQjtvQkFBcEIsQUFBaUMsQUFDakM7dUJBQU8sTUFBQSxBQUFNLGFBQWEsQ0FBQyxJQUFJLFNBQUEsQUFBUyxHQUFkLEFBQUssQUFBWSxhQUFwQyxBQUFpRCxZQUFqRCxBQUE2RCxJQUFJLFVBQXhFLEFBQXdFLEFBQVUsQUFDbkY7QUFIRDs7OztBQ0pBLGdCQUFJLFlBQVksUUFBaEIsQUFBZ0IsQUFBUTtnQkFDcEIsVUFBWSxRQURoQixBQUNnQixBQUFRO0FBQ3hCO0FBQ0E7QUFDQSxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLFdBQVUsQUFDbEM7dUJBQU8sVUFBQSxBQUFTLE1BQVQsQUFBZSxLQUFJLEFBQ3hCO3dCQUFJLElBQUksT0FBTyxRQUFmLEFBQVEsQUFBTyxBQUFRO3dCQUNuQixJQUFJLFVBRFIsQUFDUSxBQUFVO3dCQUNkLElBQUksRUFGUixBQUVVO3dCQUZWLEFBR0k7d0JBSEosQUFHTyxBQUNQO3dCQUFHLElBQUEsQUFBSSxLQUFLLEtBQVosQUFBaUIsR0FBRSxPQUFPLFlBQUEsQUFBWSxLQUFuQixBQUF3QixBQUMzQzt3QkFBSSxFQUFBLEFBQUUsV0FBTixBQUFJLEFBQWEsQUFDakI7MkJBQU8sSUFBQSxBQUFJLFVBQVUsSUFBZCxBQUFrQixVQUFVLElBQUEsQUFBSSxNQUFoQyxBQUFzQyxLQUFLLENBQUMsSUFBSSxFQUFBLEFBQUUsV0FBVyxJQUFsQixBQUFLLEFBQWlCLE1BQWpFLEFBQXVFLFVBQVUsSUFBakYsQUFBcUYsU0FDeEYsWUFBWSxFQUFBLEFBQUUsT0FBZCxBQUFZLEFBQVMsS0FEbEIsQUFDdUIsSUFDMUIsWUFBWSxFQUFBLEFBQUUsTUFBRixBQUFRLEdBQUcsSUFBdkIsQUFBWSxBQUFlLEtBQUssQ0FBQyxJQUFBLEFBQUksVUFBTCxBQUFlLE9BQU8sSUFBdEIsQUFBMEIsVUFGOUQsQUFFd0UsQUFDekU7QUFWRCxBQVdEO0FBWkQ7Ozs7QUNKQSxnQkFBSSxNQUFxQixRQUF6QixBQUF5QixBQUFRO2dCQUM3QixTQUFxQixRQUR6QixBQUN5QixBQUFRO2dCQUM3QixPQUFxQixRQUZ6QixBQUV5QixBQUFRO2dCQUM3QixNQUFxQixRQUh6QixBQUd5QixBQUFRO2dCQUM3QixTQUFxQixRQUp6QixBQUl5QixBQUFRO2dCQUM3QixVQUFxQixPQUx6QixBQUtnQztnQkFDNUIsVUFBcUIsT0FOekIsQUFNZ0M7Z0JBQzVCLFlBQXFCLE9BUHpCLEFBT2dDO2dCQUM1QixpQkFBcUIsT0FSekIsQUFRZ0M7Z0JBQzVCLFVBVEosQUFTeUI7Z0JBQ3JCLFFBVkosQUFVeUI7Z0JBQ3JCLHFCQVhKLEFBV3lCO2dCQVh6QixBQVlJO2dCQVpKLEFBWVc7Z0JBWlgsQUFZb0I7QUFDcEIsZ0JBQUksTUFBTSxTQUFOLEFBQU0sTUFBVSxBQUNsQjtvQkFBSSxLQUFLLENBQVQsQUFBVSxBQUNWO29CQUFHLE1BQUEsQUFBTSxlQUFULEFBQUcsQUFBcUIsS0FBSSxBQUMxQjt3QkFBSSxLQUFLLE1BQVQsQUFBUyxBQUFNLEFBQ2Y7MkJBQU8sTUFBUCxBQUFPLEFBQU0sQUFDYjtBQUNEO0FBQ0Y7QUFQRDtBQVFBLGdCQUFJLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBUyxPQUFNLEFBQzVCO29CQUFBLEFBQUksS0FBSyxNQUFULEFBQWUsQUFDaEI7QUFGRDtBQUdBO0FBQ0EsZ0JBQUcsQ0FBQSxBQUFDLFdBQVcsQ0FBZixBQUFnQixXQUFVLEFBQ3hCOzBCQUFVLFNBQUEsQUFBUyxhQUFULEFBQXNCLElBQUcsQUFDakM7d0JBQUksT0FBSixBQUFXO3dCQUFJLElBQWYsQUFBbUIsQUFDbkI7MkJBQU0sVUFBQSxBQUFVLFNBQWhCLEFBQXlCLEdBQUU7NkJBQUEsQUFBSyxLQUFLLFVBQXJDLEFBQTJCLEFBQVUsQUFBVTtBQUMvQywyQkFBTSxFQUFOLEFBQVEsV0FBVyxZQUFVLEFBQzNCOytCQUFPLE9BQUEsQUFBTyxNQUFQLEFBQWEsYUFBYixBQUEwQixLQUFLLFNBQXRDLEFBQXNDLEFBQVMsS0FBL0MsQUFBb0QsQUFDckQ7QUFGRCxBQUdBOzBCQUFBLEFBQU0sQUFDTjsyQkFBQSxBQUFPLEFBQ1I7QUFSRCxBQVNBOzRCQUFZLFNBQUEsQUFBUyxlQUFULEFBQXdCLElBQUcsQUFDckM7MkJBQU8sTUFBUCxBQUFPLEFBQU0sQUFDZDtBQUZELEFBR0E7QUFDQTtvQkFBRyxRQUFBLEFBQVEsVUFBUixBQUFrQixZQUFyQixBQUFpQyxXQUFVLEFBQ3pDOzRCQUFRLGVBQUEsQUFBUyxJQUFHLEFBQ2xCO2dDQUFBLEFBQVEsU0FBUyxJQUFBLEFBQUksS0FBSixBQUFTLElBQTFCLEFBQWlCLEFBQWEsQUFDL0I7QUFGRCxBQUdGO0FBQ0M7QUFMRCwyQkFLTyxBQUFHLGdCQUFlLEFBQ3ZCOzhCQUFVLElBQVYsQUFBVSxBQUFJLEFBQ2Q7MkJBQVUsUUFBVixBQUFrQixBQUNsQjs0QkFBQSxBQUFRLE1BQVIsQUFBYyxZQUFkLEFBQTBCLEFBQzFCOzRCQUFRLElBQUksS0FBSixBQUFTLGFBQVQsQUFBc0IsTUFBOUIsQUFBUSxBQUE0QixBQUN0QztBQUNBO0FBQ0M7QUFQTSxpQkFBQSxVQU9HLE9BQUEsQUFBTyxvQkFBb0IsT0FBQSxBQUFPLGVBQWxDLEFBQWlELGNBQWMsQ0FBQyxPQUFuRSxBQUEwRSxlQUFjLEFBQzdGOzRCQUFRLGVBQUEsQUFBUyxJQUFHLEFBQ2xCOytCQUFBLEFBQU8sWUFBWSxLQUFuQixBQUF3QixJQUF4QixBQUE0QixBQUM3QjtBQUZELEFBR0E7MkJBQUEsQUFBTyxpQkFBUCxBQUF3QixXQUF4QixBQUFtQyxVQUFuQyxBQUE2QyxBQUMvQztBQUNDO0FBTk0saUJBQUEsVUFNRyxzQkFBc0IsSUFBekIsQUFBeUIsQUFBSSxXQUFVLEFBQzVDOzRCQUFRLGVBQUEsQUFBUyxJQUFHLEFBQ2xCOzZCQUFBLEFBQUssWUFBWSxJQUFqQixBQUFpQixBQUFJLFdBQXJCLEFBQWdDLHNCQUFzQixZQUFVLEFBQzlEO2lDQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjtnQ0FBQSxBQUFJLEtBQUosQUFBUyxBQUNWO0FBSEQsQUFJRDtBQUxELEFBTUY7QUFDQztBQVJNLGlCQUFBLE1BUUEsQUFDTDs0QkFBUSxlQUFBLEFBQVMsSUFBRyxBQUNsQjttQ0FBVyxJQUFBLEFBQUksS0FBSixBQUFTLElBQXBCLEFBQVcsQUFBYSxJQUF4QixBQUE0QixBQUM3QjtBQUZELEFBR0Q7QUFDRjs7QUFDRCxtQkFBQSxBQUFPO3FCQUFVLEFBQ1IsQUFDUDt1QkFGRixBQUFpQixBQUVSO0FBRlEsQUFDZjs7OztBQ3hFRixnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLE1BQVksS0FEaEIsQUFDcUI7Z0JBQ2pCLE1BQVksS0FGaEIsQUFFcUI7QUFDckIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxPQUFULEFBQWdCLFFBQU8sQUFDdEM7d0JBQVEsVUFBUixBQUFRLEFBQVUsQUFDbEI7dUJBQU8sUUFBQSxBQUFRLElBQUksSUFBSSxRQUFKLEFBQVksUUFBeEIsQUFBWSxBQUFvQixLQUFLLElBQUEsQUFBSSxPQUFoRCxBQUE0QyxBQUFXLEFBQ3hEO0FBSEQ7Ozs7QUNIQTs7QUFDQSxnQkFBSSxPQUFRLEtBQVosQUFBaUI7Z0JBQ2IsUUFBUSxLQURaLEFBQ2lCO0FBQ2pCLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBRyxBQUMzQjt1QkFBTyxNQUFNLEtBQUssQ0FBWCxBQUFZLE1BQVosQUFBa0IsSUFBSSxDQUFDLEtBQUEsQUFBSyxJQUFMLEFBQVMsUUFBVixBQUFrQixNQUEvQyxBQUE2QixBQUF3QixBQUN0RDtBQUZEOzs7O0FDSEE7O0FBQ0EsZ0JBQUksVUFBVSxRQUFkLEFBQWMsQUFBUTtnQkFDbEIsVUFBVSxRQURkLEFBQ2MsQUFBUTtBQUN0QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLElBQUcsQUFDM0I7dUJBQU8sUUFBUSxRQUFmLEFBQU8sQUFBUSxBQUFRLEFBQ3hCO0FBRkQ7Ozs7QUNIQTs7QUFDQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLE1BQVksS0FEaEIsQUFDcUI7QUFDckIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFHLEFBQzNCO3VCQUFPLEtBQUEsQUFBSyxJQUFJLElBQUksVUFBSixBQUFJLEFBQVUsS0FBdkIsQUFBUyxBQUFtQixvQkFEUixBQUMzQixBQUF1RCxHQUFHLEFBQzNEO0FBRkQ7Ozs7QUNIQTs7QUFDQSxnQkFBSSxVQUFVLFFBQWQsQUFBYyxBQUFRO0FBQ3RCLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBRyxBQUMzQjt1QkFBTyxPQUFPLFFBQWQsQUFBTyxBQUFPLEFBQVEsQUFDdkI7QUFGRDs7OztBQ0ZBOztBQUNBLGdCQUFJLFdBQVcsUUFBZixBQUFlLEFBQVE7QUFDdkI7QUFDQTtBQUNBLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBVCxBQUFhLEdBQUUsQUFDOUI7b0JBQUcsQ0FBQyxTQUFKLEFBQUksQUFBUyxLQUFJLE9BQUEsQUFBTyxBQUN4QjtvQkFBQSxBQUFJLElBQUosQUFBUSxBQUNSO29CQUFHLEtBQUssUUFBUSxLQUFLLEdBQWIsQUFBZ0IsYUFBckIsQUFBa0MsY0FBYyxDQUFDLFNBQVMsTUFBTSxHQUFBLEFBQUcsS0FBdEUsQUFBb0QsQUFBZSxBQUFRLE1BQUssT0FBQSxBQUFPLEFBQ3ZGO29CQUFHLFFBQVEsS0FBSyxHQUFiLEFBQWdCLFlBQWhCLEFBQTRCLGNBQWMsQ0FBQyxTQUFTLE1BQU0sR0FBQSxBQUFHLEtBQWhFLEFBQThDLEFBQWUsQUFBUSxNQUFLLE9BQUEsQUFBTyxBQUNqRjtvQkFBRyxDQUFBLEFBQUMsS0FBSyxRQUFRLEtBQUssR0FBYixBQUFnQixhQUF0QixBQUFtQyxjQUFjLENBQUMsU0FBUyxNQUFNLEdBQUEsQUFBRyxLQUF2RSxBQUFxRCxBQUFlLEFBQVEsTUFBSyxPQUFBLEFBQU8sQUFDeEY7c0JBQU0sVUFBTixBQUFNLEFBQVUsQUFDakI7QUFQRDs7OztBQ0pBLGdCQUFJLEtBQUosQUFBUztnQkFDTCxLQUFLLEtBRFQsQUFDUyxBQUFLO0FBQ2QsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxLQUFJLEFBQzVCO3VCQUFPLFVBQUEsQUFBVSxPQUFPLFFBQUEsQUFBUSxZQUFSLEFBQW9CLEtBQXJDLEFBQTBDLEtBQTFDLEFBQStDLE1BQU0sQ0FBQyxFQUFBLEFBQUUsS0FBSCxBQUFRLElBQVIsQUFBWSxTQUF4RSxBQUFPLEFBQXFELEFBQXFCLEFBQ2xGO0FBRkQ7Ozs7QUNGQSxnQkFBSSxRQUFhLFFBQUEsQUFBUSxhQUF6QixBQUFpQixBQUFxQjtnQkFDbEMsTUFBYSxRQURqQixBQUNpQixBQUFRO2dCQUNyQixVQUFhLFFBQUEsQUFBUSxhQUZ6QixBQUVzQztnQkFDbEMsYUFBYSxPQUFBLEFBQU8sV0FIeEIsQUFHa0M7O0FBRWxDLGdCQUFJLFdBQVcsT0FBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLE1BQUssQUFDNUM7dUJBQU8sTUFBQSxBQUFNLFVBQVUsTUFBQSxBQUFNLFFBQzNCLGNBQWMsUUFBZCxBQUFjLEFBQU8sU0FBUyxDQUFDLGFBQUEsQUFBYSxVQUFkLEFBQXVCLEtBQUssWUFENUQsQUFBTyxBQUN5QixBQUF3QyxBQUN6RTtBQUhEOztBQUtBLHFCQUFBLEFBQVMsUUFBVCxBQUFpQjs7OztBQ1ZqQixnQkFBSSxVQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLFdBQVksUUFBQSxBQUFRLFVBRHhCLEFBQ2dCLEFBQWtCO2dCQUM5QixZQUFZLFFBRmhCLEFBRWdCLEFBQVE7QUFDeEIsbUJBQUEsQUFBTyxVQUFVLFFBQUEsQUFBUSxXQUFSLEFBQW1CLG9CQUFvQixVQUFBLEFBQVMsSUFBRyxBQUNsRTtvQkFBRyxNQUFILEFBQVMsV0FBVSxPQUFPLEdBQUEsQUFBRyxhQUN4QixHQURxQixBQUNyQixBQUFHLGlCQUNILFVBQVUsUUFGSSxBQUVkLEFBQVUsQUFBUSxBQUN4QjtBQUpEOztBQ0hBOztBQUNBLGdCQUFJLG1CQUFtQixRQUF2QixBQUF1QixBQUFRO2dCQUMzQixPQUFtQixRQUR2QixBQUN1QixBQUFRO2dCQUMzQixZQUFtQixRQUZ2QixBQUV1QixBQUFRO2dCQUMzQixZQUFtQixRQUh2QixBQUd1QixBQUFROztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFBLEFBQU8sa0JBQVUsQUFBUSxrQkFBUixBQUEwQixPQUExQixBQUFpQyxTQUFTLFVBQUEsQUFBUyxVQUFULEFBQW1CO3FCQUM1RSxBQUFLLEtBQUssVUFEdUUsQUFDakYsQUFBVSxBQUFVLFdBQVcsQUFDL0I7cUJBQUEsQUFBSyxLQUY0RSxBQUVqRixBQUFVLEVBRnVFLEFBQ2pGLENBQytCLEFBQy9CO3FCQUFBLEFBQUssS0FINEUsQUFHakYsQUFBVSxNQUFxQixBQUNqQztBQUNDO0FBTGdCLGFBQUEsRUFLZCxZQUFVLEFBQ1g7b0JBQUksSUFBUSxLQUFaLEFBQWlCO29CQUNiLE9BQVEsS0FEWixBQUNpQjtvQkFDYixRQUFRLEtBRlosQUFFWSxBQUFLLEFBQ2pCO29CQUFHLENBQUEsQUFBQyxLQUFLLFNBQVMsRUFBbEIsQUFBb0IsUUFBTyxBQUN6Qjt5QkFBQSxBQUFLLEtBQUwsQUFBVSxBQUNWOzJCQUFPLEtBQVAsQUFBTyxBQUFLLEFBQ2I7QUFDRDtvQkFBRyxRQUFILEFBQVcsUUFBUyxPQUFPLEtBQUEsQUFBSyxHQUFaLEFBQU8sQUFBUSxBQUNuQztvQkFBRyxRQUFILEFBQVcsVUFBUyxPQUFPLEtBQUEsQUFBSyxHQUFHLEVBQWYsQUFBTyxBQUFRLEFBQUUsQUFDckM7dUJBQU8sS0FBQSxBQUFLLEdBQUcsQ0FBQSxBQUFDLE9BQU8sRUFBdkIsQUFBTyxBQUFRLEFBQVEsQUFBRSxBQUMxQjtBQWhCZ0IsZUFBakIsQUFBaUIsQUFnQmQ7O0FBRUg7QUFDQSxzQkFBQSxBQUFVLFlBQVksVUFBdEIsQUFBZ0M7O0FBRWhDLDZCQUFBLEFBQWlCO0FBQ2pCLDZCQUFBLEFBQWlCO0FBQ2pCLDZCQUFBLEFBQWlCOztBQ2pDakI7O0FBQ0EsZ0JBQUksU0FBUyxRQUFiLEFBQWEsQUFBUTs7QUFFckI7QUFDQSxtQkFBQSxBQUFPLGtCQUFVLEFBQVEsaUJBQVIsQUFBeUIsT0FBTyxVQUFBLEFBQVMsS0FBSSxBQUM1RDt1QkFBTyxTQUFBLEFBQVMsTUFBSyxBQUFFOzJCQUFPLElBQUEsQUFBSSxNQUFNLFVBQUEsQUFBVSxTQUFWLEFBQW1CLElBQUksVUFBdkIsQUFBdUIsQUFBVSxLQUFsRCxBQUFPLEFBQWdELEFBQWE7QUFBM0YsQUFDRDtBQUZnQixhQUFBO0FBSWY7cUJBQUssU0FBQSxBQUFTLElBQVQsQUFBYSxLQUFJLEFBQ3BCO3dCQUFJLFFBQVEsT0FBQSxBQUFPLFNBQVAsQUFBZ0IsTUFBNUIsQUFBWSxBQUFzQixBQUNsQzsyQkFBTyxTQUFTLE1BQWhCLEFBQXNCLEFBQ3ZCO0FBTEEsQUFNRDtBQUNBO3FCQUFLLFNBQUEsQUFBUyxJQUFULEFBQWEsS0FBYixBQUFrQixPQUFNLEFBQzNCOzJCQUFPLE9BQUEsQUFBTyxJQUFQLEFBQVcsTUFBTSxRQUFBLEFBQVEsSUFBUixBQUFZLElBQTdCLEFBQWlDLEtBQXhDLEFBQU8sQUFBc0MsQUFDOUM7QUFYYyxBQUVkO0FBQUEsQUFDRCxlQUhlLEFBWWQsUUFaSCxBQUFpQixBQVlOOztBQ2hCWCxBQUNBOztBQ0RBOztBQUNBLGdCQUFJLFVBQXFCLFFBQXpCLEFBQXlCLEFBQVE7Z0JBQzdCLFNBQXFCLFFBRHpCLEFBQ3lCLEFBQVE7Z0JBQzdCLE1BQXFCLFFBRnpCLEFBRXlCLEFBQVE7Z0JBQzdCLFVBQXFCLFFBSHpCLEFBR3lCLEFBQVE7Z0JBQzdCLFVBQXFCLFFBSnpCLEFBSXlCLEFBQVE7Z0JBQzdCLFdBQXFCLFFBTHpCLEFBS3lCLEFBQVE7Z0JBQzdCLFlBQXFCLFFBTnpCLEFBTXlCLEFBQVE7Z0JBQzdCLGFBQXFCLFFBUHpCLEFBT3lCLEFBQVE7Z0JBQzdCLFFBQXFCLFFBUnpCLEFBUXlCLEFBQVE7Z0JBQzdCLHFCQUFxQixRQVR6QixBQVN5QixBQUFRO2dCQUM3QixPQUFxQixRQUFBLEFBQVEsV0FWakMsQUFVNEM7Z0JBQ3hDLFlBQXFCLFFBWHpCLEFBV3lCLEFBQVE7Z0JBQzdCLFVBWkosQUFZeUI7Z0JBQ3JCLFlBQXFCLE9BYnpCLEFBYWdDO2dCQUM1QixVQUFxQixPQWR6QixBQWNnQztnQkFDNUIsV0FBcUIsT0FmekIsQUFleUIsQUFBTztnQkFDNUIsVUFBcUIsT0FoQnpCLEFBZ0JnQztnQkFDNUIsU0FBcUIsUUFBQSxBQUFRLFlBakJqQyxBQWlCNkM7Z0JBQ3pDLFFBQXFCLFNBQXJCLEFBQXFCLFFBQVUsQ0FBRSxBQUFhLFdBbEJsRDtnQkFBQSxBQW1CSTtnQkFuQkosQUFtQmM7Z0JBbkJkLEFBbUJ3Qzs7QUFFeEMsZ0JBQUksYUFBYSxDQUFDLGFBQVcsQUFDM0I7b0JBQUksQUFDRjtBQUNBO3dCQUFJLFVBQWMsU0FBQSxBQUFTLFFBQTNCLEFBQWtCLEFBQWlCO3dCQUMvQixjQUFjLENBQUMsUUFBQSxBQUFRLGNBQVQsQUFBdUIsSUFBSSxRQUFBLEFBQVEsVUFBbkMsQUFBMkIsQUFBa0IsY0FBYyxVQUFBLEFBQVMsTUFBSyxBQUFFOzZCQUFBLEFBQUssT0FBTCxBQUFZLEFBQVM7QUFEbEgsQUFFQTtBQUNBOzJCQUFPLENBQUMsVUFBVSxPQUFBLEFBQU8seUJBQWxCLEFBQTJDLGVBQWUsUUFBQSxBQUFRLEtBQVIsQUFBYSxrQkFBOUUsQUFBZ0csQUFDakc7QUFORCxrQkFNRSxPQUFBLEFBQU0sR0FBRSxDQUFFLEFBQWEsV0FDMUI7QUFSRCxBQUFtQixhQUFBOztBQVVuQjtBQUNBLGdCQUFJLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFTLEdBQVQsQUFBWSxHQUFFLEFBQ2xDO0FBQ0E7dUJBQU8sTUFBQSxBQUFNLEtBQUssTUFBQSxBQUFNLFlBQVksTUFBcEMsQUFBMEMsQUFDM0M7QUFIRDtBQUlBLGdCQUFJLGFBQWEsU0FBYixBQUFhLFdBQUEsQUFBUyxJQUFHLEFBQzNCO29CQUFBLEFBQUksQUFDSjt1QkFBTyxTQUFBLEFBQVMsT0FBTyxRQUFRLE9BQU8sR0FBZixBQUFrQixTQUFsQyxBQUEyQyxhQUEzQyxBQUF3RCxPQUEvRCxBQUFzRSxBQUN2RTtBQUhEO0FBSUEsZ0JBQUksdUJBQXVCLFNBQXZCLEFBQXVCLHFCQUFBLEFBQVMsR0FBRSxBQUNwQzt1QkFBTyxnQkFBQSxBQUFnQixVQUFoQixBQUEwQixLQUM3QixJQUFBLEFBQUksa0JBREQsQUFDSCxBQUFzQixLQUN0QixJQUFBLEFBQUkseUJBRlIsQUFFSSxBQUE2QixBQUNsQztBQUpEO0FBS0EsZ0JBQUksb0JBQW9CLDJCQUEyQixrQ0FBQSxBQUFTLEdBQUUsQUFDNUQ7b0JBQUEsQUFBSSxTQUFKLEFBQWEsQUFDYjtxQkFBQSxBQUFLLGNBQVUsQUFBSSxFQUFFLFVBQUEsQUFBUyxXQUFULEFBQW9CLFVBQVMsQUFDaEQ7d0JBQUcsWUFBQSxBQUFZLGFBQWEsV0FBNUIsQUFBdUMsV0FBVSxNQUFNLFVBQU4sQUFBTSxBQUFVLEFBQ2pFOzhCQUFBLEFBQVUsQUFDVjs2QkFBQSxBQUFVLEFBQ1g7QUFKRCxBQUFlLEFBS2YsaUJBTGU7cUJBS2YsQUFBSyxVQUFVLFVBQWYsQUFBZSxBQUFVLEFBQ3pCO3FCQUFBLEFBQUssU0FBVSxVQUFmLEFBQWUsQUFBVSxBQUMxQjtBQVREO0FBVUEsZ0JBQUksVUFBVSxTQUFWLEFBQVUsUUFBQSxBQUFTLE1BQUssQUFDMUI7b0JBQUksQUFDRjtBQUNEO0FBRkQsa0JBRUUsT0FBQSxBQUFNLEdBQUUsQUFDUjsyQkFBTyxFQUFDLE9BQVIsQUFBTyxBQUFRLEFBQ2hCO0FBQ0Y7QUFORDtBQU9BLGdCQUFJLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBUyxTQUFULEFBQWtCLFVBQVMsQUFDdEM7b0JBQUcsUUFBSCxBQUFXLElBQUcsQUFDZDt3QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNiO29CQUFJLFFBQVEsUUFBWixBQUFvQixBQUNwQjswQkFBVTt3QkFDSixRQUFRLFFBQVosQUFBb0I7d0JBQ2hCLEtBQVEsUUFBQSxBQUFRLE1BRHBCLEFBQzBCO3dCQUN0QixJQUZKLEFBRVksQUFDWjt3QkFBSSxNQUFNLFNBQU4sQUFBTSxJQUFBLEFBQVMsVUFBUyxBQUMxQjs0QkFBSSxVQUFVLEtBQUssU0FBTCxBQUFjLEtBQUssU0FBakMsQUFBMEM7NEJBQ3RDLFVBQVUsU0FEZCxBQUN1Qjs0QkFDbkIsU0FBVSxTQUZkLEFBRXVCOzRCQUNuQixTQUFVLFNBSGQsQUFHdUI7NEJBSHZCLEFBSUk7NEJBSkosQUFJWSxBQUNaOzRCQUFJLEFBQ0Y7Z0NBQUEsQUFBRyxTQUFRLEFBQ1Q7b0NBQUcsQ0FBSCxBQUFJLElBQUcsQUFDTDt3Q0FBRyxRQUFBLEFBQVEsTUFBWCxBQUFpQixHQUFFLGtCQUFBLEFBQWtCLEFBQ3JDOzRDQUFBLEFBQVEsS0FBUixBQUFhLEFBQ2Q7QUFDRDtvQ0FBRyxZQUFILEFBQWUsTUFBSyxTQUFwQixBQUFvQixBQUFTLFdBQ3hCLEFBQ0g7d0NBQUEsQUFBRyxRQUFPLE9BQUEsQUFBTyxBQUNqQjs2Q0FBUyxRQUFULEFBQVMsQUFBUSxBQUNqQjt3Q0FBQSxBQUFHLFFBQU8sT0FBQSxBQUFPLEFBQ2xCO0FBQ0Q7b0NBQUcsV0FBVyxTQUFkLEFBQXVCLFNBQVEsQUFDN0I7MkNBQU8sVUFBUCxBQUFPLEFBQVUsQUFDbEI7QUFGRCwyQ0FFVSxPQUFPLFdBQVYsQUFBVSxBQUFXLFNBQVEsQUFDbEM7eUNBQUEsQUFBSyxLQUFMLEFBQVUsUUFBVixBQUFrQixTQUFsQixBQUEyQixBQUM1QjtBQUZNLGlDQUFBLE1BRUEsUUFBQSxBQUFRLEFBQ2hCO0FBaEJELG1DQWdCTyxPQUFBLEFBQU8sQUFDZjtBQWxCRCwwQkFrQkUsT0FBQSxBQUFNLEdBQUUsQUFDUjttQ0FBQSxBQUFPLEFBQ1I7QUFDRjtBQTNCRCxBQTRCQTsyQkFBTSxNQUFBLEFBQU0sU0FBWixBQUFxQixHQUFFOzRCQUFJLE1BQTNCLEFBQXVCLEFBQUksQUFBTTtBQWhDZixxQkFBQSxBQUNsQixDQStCd0MsQUFDeEM7NEJBQUEsQUFBUSxLQUFSLEFBQWEsQUFDYjs0QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNiO3dCQUFHLFlBQVksQ0FBQyxRQUFoQixBQUF3QixJQUFHLFlBQUEsQUFBWSxBQUN4QztBQXBDRCxBQXFDRDtBQXpDRDtBQTBDQSxnQkFBSSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQVMsU0FBUSxBQUNqQztxQkFBQSxBQUFLLEtBQUwsQUFBVSxRQUFRLFlBQVUsQUFDMUI7d0JBQUksUUFBUSxRQUFaLEFBQW9CO3dCQUFwQixBQUNJO3dCQURKLEFBQ1k7d0JBRFosQUFDcUIsQUFDckI7d0JBQUcsWUFBSCxBQUFHLEFBQVksVUFBUyxBQUN0Qjt5Q0FBaUIsWUFBVSxBQUN6QjtnQ0FBQSxBQUFHLFFBQU8sQUFDUjt3Q0FBQSxBQUFRLEtBQVIsQUFBYSxzQkFBYixBQUFtQyxPQUFuQyxBQUEwQyxBQUMzQztBQUZELHVDQUVVLFVBQVUsT0FBYixBQUFvQixzQkFBcUIsQUFDOUM7d0NBQVEsRUFBQyxTQUFELEFBQVUsU0FBUyxRQUEzQixBQUFRLEFBQTJCLEFBQ3BDO0FBRk0sNkJBQUEsTUFFQSxJQUFHLENBQUMsVUFBVSxPQUFYLEFBQWtCLFlBQVksUUFBakMsQUFBeUMsT0FBTSxBQUNwRDt3Q0FBQSxBQUFRLE1BQVIsQUFBYywrQkFBZCxBQUE2QyxBQUM5QztBQUNGO0FBUkQsQUFBUyxBQVNULHlCQVRTO0FBVVQ7Z0NBQUEsQUFBUSxLQUFLLFVBQVUsWUFBVixBQUFVLEFBQVksV0FBdEIsQUFBaUMsSUFBOUMsQUFBa0QsQUFDbkQ7QUFBQyw2QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNmO3dCQUFBLEFBQUcsUUFBTyxNQUFNLE9BQU4sQUFBYSxBQUN4QjtBQWpCRCxBQWtCRDtBQW5CRDtBQW9CQSxnQkFBSSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQVMsU0FBUSxBQUNqQztvQkFBRyxRQUFBLEFBQVEsTUFBWCxBQUFpQixHQUFFLE9BQUEsQUFBTyxBQUMxQjtvQkFBSSxRQUFRLFFBQUEsQUFBUSxNQUFNLFFBQTFCLEFBQWtDO29CQUM5QixJQURKLEFBQ1k7b0JBRFosQUFFSSxBQUNKO3VCQUFNLE1BQUEsQUFBTSxTQUFaLEFBQXFCLEdBQUUsQUFDckI7K0JBQVcsTUFBWCxBQUFXLEFBQU0sQUFDakI7d0JBQUcsU0FBQSxBQUFTLFFBQVEsQ0FBQyxZQUFZLFNBQWpDLEFBQXFCLEFBQXFCLFVBQVMsT0FBQSxBQUFPLEFBQzNEO0FBQUMsd0JBQUEsQUFBTyxBQUNWO0FBVEQ7QUFVQSxnQkFBSSxvQkFBb0IsU0FBcEIsQUFBb0Isa0JBQUEsQUFBUyxTQUFRLEFBQ3ZDO3FCQUFBLEFBQUssS0FBTCxBQUFVLFFBQVEsWUFBVSxBQUMxQjt3QkFBQSxBQUFJLEFBQ0o7d0JBQUEsQUFBRyxRQUFPLEFBQ1I7Z0NBQUEsQUFBUSxLQUFSLEFBQWEsb0JBQWIsQUFBaUMsQUFDbEM7QUFGRCwyQkFFTyxJQUFHLFVBQVUsT0FBYixBQUFvQixvQkFBbUIsQUFDNUM7Z0NBQVEsRUFBQyxTQUFELEFBQVUsU0FBUyxRQUFRLFFBQW5DLEFBQVEsQUFBbUMsQUFDNUM7QUFDRjtBQVBELEFBUUQ7QUFURDtBQVVBLGdCQUFJLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBUztvQkFDakIsVUFBSixBQUFjLEFBQ2Q7b0JBQUcsUUFBSCxBQUFXLElBQUcsQUFDZDt3QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNiOzBCQUFVLFFBQUEsQUFBUSxNQUpTLEFBSTNCLEFBQXdCLFFBSkcsQUFDM0IsQ0FHaUMsQUFDakM7d0JBQUEsQUFBUSxLQUFSLEFBQWEsQUFDYjt3QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNiO29CQUFHLENBQUMsUUFBSixBQUFZLElBQUcsUUFBQSxBQUFRLEtBQUssUUFBQSxBQUFRLEdBQXJCLEFBQWEsQUFBVyxBQUN2Qzt1QkFBQSxBQUFPLFNBQVAsQUFBZ0IsQUFDakI7QUFURDtBQVVBLGdCQUFJLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBUztvQkFDbEIsVUFBSixBQUFjO29CQUFkLEFBQ0ksQUFDSjtvQkFBRyxRQUFILEFBQVcsSUFBRyxBQUNkO3dCQUFBLEFBQVEsS0FBUixBQUFhLEFBQ2I7MEJBQVUsUUFBQSxBQUFRLE1BTFUsQUFLNUIsQUFBd0IsUUFMSSxBQUM1QixDQUlpQyxBQUNqQztvQkFBSSxBQUNGO3dCQUFHLFlBQUgsQUFBZSxPQUFNLE1BQU0sVUFBTixBQUFNLEFBQVUsQUFDckM7d0JBQUcsT0FBTyxXQUFWLEFBQVUsQUFBVyxRQUFPLEFBQzFCO2tDQUFVLFlBQVUsQUFDbEI7Z0NBQUksVUFBVSxFQUFDLElBQUQsQUFBSyxTQUFTLElBRFYsQUFDbEIsQUFBYyxBQUFrQixTQUFRLEFBQ3hDO2dDQUFJLEFBQ0Y7cUNBQUEsQUFBSyxLQUFMLEFBQVUsT0FBTyxJQUFBLEFBQUksVUFBSixBQUFjLFNBQS9CLEFBQWlCLEFBQXVCLElBQUksSUFBQSxBQUFJLFNBQUosQUFBYSxTQUF6RCxBQUE0QyxBQUFzQixBQUNuRTtBQUZELDhCQUVFLE9BQUEsQUFBTSxHQUFFLEFBQ1I7d0NBQUEsQUFBUSxLQUFSLEFBQWEsU0FBYixBQUFzQixBQUN2QjtBQUNGO0FBUEQsQUFRRDtBQVRELDJCQVNPLEFBQ0w7Z0NBQUEsQUFBUSxLQUFSLEFBQWEsQUFDYjtnQ0FBQSxBQUFRLEtBQVIsQUFBYSxBQUNiOytCQUFBLEFBQU8sU0FBUCxBQUFnQixBQUNqQjtBQUNGO0FBaEJELGtCQWdCRSxPQUFBLEFBQU0sR0FBRSxBQUNSOzRCQUFBLEFBQVEsS0FBSyxFQUFDLElBQUQsQUFBSyxTQUFTLElBQTNCLEFBQWEsQUFBa0IsU0FEdkIsQUFDUixBQUF1QyxJQUFJLEFBQzVDO0FBQ0Y7QUF6QkQ7O0FBMkJBO0FBQ0EsZ0JBQUcsQ0FBSCxBQUFJLFlBQVcsQUFDYjtBQUNBOzJCQUFXLFNBQUEsQUFBUyxRQUFULEFBQWlCLFVBQVMsQUFDbkM7K0JBQUEsQUFBVyxNQUFYLEFBQWlCLFVBQWpCLEFBQTJCLFNBQTNCLEFBQW9DLEFBQ3BDOzhCQUFBLEFBQVUsQUFDVjs2QkFBQSxBQUFTLEtBQVQsQUFBYyxBQUNkO3dCQUFJLEFBQ0Y7aUNBQVMsSUFBQSxBQUFJLFVBQUosQUFBYyxNQUF2QixBQUFTLEFBQW9CLElBQUksSUFBQSxBQUFJLFNBQUosQUFBYSxNQUE5QyxBQUFpQyxBQUFtQixBQUNyRDtBQUZELHNCQUVFLE9BQUEsQUFBTSxLQUFJLEFBQ1Y7Z0NBQUEsQUFBUSxLQUFSLEFBQWEsTUFBYixBQUFtQixBQUNwQjtBQUNGO0FBVEQsQUFVQTsyQkFBVyxTQUFBLEFBQVMsUUFBVCxBQUFpQjt5QkFDMUIsQUFBSyxLQUQ4QixBQUNuQyxBQUFVLElBQWdCLEFBQzFCO3lCQUFBLEFBQUssS0FGOEIsQUFFbkMsQUFBVSxXQUFnQixBQUMxQjt5QkFBQSxBQUFLLEtBSDhCLEFBR25DLEFBQVUsRUFIeUIsQUFDbkMsQ0FFMEIsQUFDMUI7eUJBQUEsQUFBSyxLQUo4QixBQUluQyxBQUFVLE9BQWdCLEFBQzFCO3lCQUFBLEFBQUssS0FMOEIsQUFLbkMsQUFBVSxXQUFnQixBQUMxQjt5QkFBQSxBQUFLLEtBTjhCLEFBTW5DLEFBQVUsR0FBZ0IsQUFDMUI7eUJBQUEsQUFBSyxLQVA4QixBQU9uQyxBQUFVLE9BQWdCLEFBQzNCO0FBUkQsQUFTQTt5QkFBQSxBQUFTLG9CQUFZLEFBQVEsbUJBQW1CLFNBQTNCLEFBQW9DO0FBRXZEOzBCQUFNLFNBQUEsQUFBUyxLQUFULEFBQWMsYUFBZCxBQUEyQixZQUFXLEFBQzFDOzRCQUFJLFdBQWMscUJBQXFCLG1CQUFBLEFBQW1CLE1BQTFELEFBQWtCLEFBQXFCLEFBQXlCLEFBQ2hFO2lDQUFBLEFBQVMsS0FBUyxPQUFBLEFBQU8sZUFBUCxBQUFzQixhQUF0QixBQUFtQyxjQUFyRCxBQUFtRSxBQUNuRTtpQ0FBQSxBQUFTLE9BQVMsT0FBQSxBQUFPLGNBQVAsQUFBcUIsY0FBdkMsQUFBcUQsQUFDckQ7aUNBQUEsQUFBUyxTQUFTLFNBQVMsUUFBVCxBQUFpQixTQUFuQyxBQUE0QyxBQUM1Qzs2QkFBQSxBQUFLLEdBQUwsQUFBUSxLQUFSLEFBQWEsQUFDYjs0QkFBRyxLQUFILEFBQVEsSUFBRyxLQUFBLEFBQUssR0FBTCxBQUFRLEtBQVIsQUFBYSxBQUN4Qjs0QkFBRyxLQUFILEFBQVEsSUFBRyxPQUFBLEFBQU8sTUFBUCxBQUFhLEFBQ3hCOytCQUFPLFNBQVAsQUFBZ0IsQUFDakI7QUFYaUUsQUFZbEU7QUFDQTs2QkFBUyxnQkFBQSxBQUFTLFlBQVcsQUFDM0I7K0JBQU8sS0FBQSxBQUFLLEtBQUwsQUFBVSxXQUFqQixBQUFPLEFBQXFCLEFBQzdCO0FBZkgsQUFBcUIsQUFBK0MsQUFpQnBFO0FBakJvRSxBQUNsRSxpQkFEbUI7b0NBaUJELDZCQUFVLEFBQzVCO3dCQUFJLFVBQVcsSUFBZixBQUFlLEFBQUksQUFDbkI7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjt5QkFBQSxBQUFLLFVBQVUsSUFBQSxBQUFJLFVBQUosQUFBYyxTQUE3QixBQUFlLEFBQXVCLEFBQ3RDO3lCQUFBLEFBQUssU0FBVSxJQUFBLEFBQUksU0FBSixBQUFhLFNBQTVCLEFBQWUsQUFBc0IsQUFDdEM7QUFMRCxBQU1EOzs7QUFFRCxvQkFBUSxRQUFBLEFBQVEsSUFBSSxRQUFaLEFBQW9CLElBQUksUUFBQSxBQUFRLElBQUksQ0FBNUMsQUFBNkMsWUFBWSxFQUFDLFNBQTFELEFBQXlELEFBQVU7QUFDbkUsb0JBQUEsQUFBUSx3QkFBUixBQUFnQyxVQUFoQyxBQUEwQztBQUMxQyxvQkFBQSxBQUFRLGtCQUFSLEFBQTBCO0FBQzFCLHNCQUFVLFFBQUEsQUFBUSxXQUFsQixBQUFVLEFBQW1COztBQUU3QjtBQUNBLG9CQUFRLFFBQUEsQUFBUSxJQUFJLFFBQUEsQUFBUSxJQUFJLENBQWhDLEFBQWlDLFlBQWpDLEFBQTZDO0FBRTNDO3dCQUFRLFNBQUEsQUFBUyxPQUFULEFBQWdCLEdBQUUsQUFDeEI7d0JBQUksYUFBYSxxQkFBakIsQUFBaUIsQUFBcUI7d0JBQ2xDLFdBQWEsV0FEakIsQUFDNEIsQUFDNUI7NkJBQUEsQUFBUyxBQUNUOzJCQUFPLFdBQVAsQUFBa0IsQUFDbkI7QUFQSCxBQUFzRDtBQUFBLEFBQ3BEO0FBUUYsb0JBQVEsUUFBQSxBQUFRLElBQUksUUFBQSxBQUFRLEtBQUssV0FBVyxDQUE1QyxBQUFvQixBQUF5QixhQUE3QyxBQUEwRDtBQUV4RDt5QkFBUyxTQUFBLEFBQVMsUUFBVCxBQUFpQixHQUFFLEFBQzFCO0FBQ0E7d0JBQUcsYUFBQSxBQUFhLFlBQVksZ0JBQWdCLEVBQWhCLEFBQWtCLGFBQTlDLEFBQTRCLEFBQStCLE9BQU0sT0FBQSxBQUFPLEFBQ3hFO3dCQUFJLGFBQWEscUJBQWpCLEFBQWlCLEFBQXFCO3dCQUNsQyxZQUFhLFdBRGpCLEFBQzRCLEFBQzVCOzhCQUFBLEFBQVUsQUFDVjsyQkFBTyxXQUFQLEFBQWtCLEFBQ25CO0FBVEgsQUFBbUU7QUFBQSxBQUNqRTtBQVVGLG9CQUFRLFFBQUEsQUFBUSxJQUFJLFFBQUEsQUFBUSxNQUFNLHNCQUFjLEFBQVEsa0JBQWtCLFVBQUEsQUFBUyxNQUFLLEFBQ3RGO3lCQUFBLEFBQVMsSUFBVCxBQUFhLE1BQWIsQUFBbUIsU0FBbkIsQUFBNEIsQUFDN0I7QUFGRCxBQUFnQyxBQUFnQixhQUFBLENBQWhCLEdBQWhDLEFBRUs7QUFFSDtxQkFBSyxTQUFBLEFBQVMsSUFBVCxBQUFhLFVBQVMsQUFDekI7d0JBQUksSUFBSixBQUFpQjt3QkFDYixhQUFhLHFCQURqQixBQUNpQixBQUFxQjt3QkFDbEMsVUFBYSxXQUZqQixBQUU0Qjt3QkFDeEIsU0FBYSxXQUhqQixBQUc0QixBQUM1Qjt3QkFBSSxpQkFBaUIsWUFBVSxBQUM3Qjs0QkFBSSxTQUFKLEFBQWdCOzRCQUNaLFFBREosQUFDZ0I7NEJBQ1osWUFGSixBQUVnQixBQUNoQjs4QkFBQSxBQUFNLFVBQU4sQUFBZ0IsT0FBTyxVQUFBLEFBQVMsU0FBUSxBQUN0QztnQ0FBSSxTQUFKLEFBQW9CO2dDQUNoQixnQkFESixBQUNvQixBQUNwQjttQ0FBQSxBQUFPLEtBQVAsQUFBWSxBQUNaO0FBQ0E7OEJBQUEsQUFBRSxRQUFGLEFBQVUsU0FBVixBQUFtQixLQUFLLFVBQUEsQUFBUyxPQUFNLEFBQ3JDO29DQUFBLEFBQUcsZUFBYyxBQUNqQjtnREFBQSxBQUFpQixBQUNqQjt1Q0FBQSxBQUFPLFVBQVAsQUFBaUIsQUFDakI7a0NBQUEsQUFBRSxhQUFhLFFBQWYsQUFBZSxBQUFRLEFBQ3hCO0FBTEQsK0JBQUEsQUFLRyxBQUNKO0FBWEQsQUFZQTswQkFBQSxBQUFFLGFBQWEsUUFBZixBQUFlLEFBQVEsQUFDeEI7QUFqQkQsQUFBYSxBQWtCYixxQkFsQmE7d0JBa0JiLEFBQUcsUUFBTyxPQUFPLE9BQVAsQUFBYyxBQUN4QjsyQkFBTyxXQUFQLEFBQWtCLEFBQ25CO0FBM0JXLEFBNEJaO0FBQ0E7c0JBQU0sU0FBQSxBQUFTLEtBQVQsQUFBYyxVQUFTLEFBQzNCO3dCQUFJLElBQUosQUFBaUI7d0JBQ2IsYUFBYSxxQkFEakIsQUFDaUIsQUFBcUI7d0JBQ2xDLFNBQWEsV0FGakIsQUFFNEIsQUFDNUI7d0JBQUksaUJBQWlCLFlBQVUsQUFDN0I7OEJBQUEsQUFBTSxVQUFOLEFBQWdCLE9BQU8sVUFBQSxBQUFTLFNBQVEsQUFDdEM7OEJBQUEsQUFBRSxRQUFGLEFBQVUsU0FBVixBQUFtQixLQUFLLFdBQXhCLEFBQW1DLFNBQW5DLEFBQTRDLEFBQzdDO0FBRkQsQUFHRDtBQUpELEFBQWEsQUFLYixxQkFMYTt3QkFLYixBQUFHLFFBQU8sT0FBTyxPQUFQLEFBQWMsQUFDeEI7MkJBQU8sV0FBUCxBQUFrQixBQUNuQjtBQTFDSCxBQUVjO0FBQUEsQUFDWjs7QUNsUUY7O0FBQ0EsZ0JBQUksU0FBUyxRQUFiLEFBQWEsQUFBUTs7QUFFckI7QUFDQSxtQkFBQSxBQUFPLGtCQUFVLEFBQVEsaUJBQVIsQUFBeUIsT0FBTyxVQUFBLEFBQVMsS0FBSSxBQUM1RDt1QkFBTyxTQUFBLEFBQVMsTUFBSyxBQUFFOzJCQUFPLElBQUEsQUFBSSxNQUFNLFVBQUEsQUFBVSxTQUFWLEFBQW1CLElBQUksVUFBdkIsQUFBdUIsQUFBVSxLQUFsRCxBQUFPLEFBQWdELEFBQWE7QUFBM0YsQUFDRDtBQUZnQixhQUFBO0FBSWY7cUJBQUssU0FBQSxBQUFTLElBQVQsQUFBYSxPQUFNLEFBQ3RCOzJCQUFPLE9BQUEsQUFBTyxJQUFQLEFBQVcsTUFBTSxRQUFRLFVBQUEsQUFBVSxJQUFWLEFBQWMsSUFBdkMsQUFBMkMsT0FBbEQsQUFBTyxBQUFrRCxBQUMxRDtBQU5jLEFBRWQ7QUFBQSxBQUNELGVBSEYsQUFBaUIsQUFPZDs7QUNYSDs7QUFDQSxnQkFBSSxNQUFPLFFBQUEsQUFBUSxnQkFBbkIsQUFBVyxBQUF3Qjs7QUFFbkM7QUFDQSxvQkFBQSxBQUFRLGtCQUFSLEFBQTBCLFFBQTFCLEFBQWtDLFVBQVUsVUFBQSxBQUFTO3FCQUNuRCxBQUFLLEtBQUssT0FEa0QsQUFDNUQsQUFBVSxBQUFPLFdBQVcsQUFDNUI7cUJBQUEsQUFBSyxLQUZ1RCxBQUU1RCxBQUFVLEVBRmtELEFBQzVELENBQzRCLEFBQzlCO0FBQ0M7QUFKRCxlQUlHLFlBQVUsQUFDWDtvQkFBSSxJQUFRLEtBQVosQUFBaUI7b0JBQ2IsUUFBUSxLQURaLEFBQ2lCO29CQURqQixBQUVJLEFBQ0o7b0JBQUcsU0FBUyxFQUFaLEFBQWMsUUFBTyxPQUFPLEVBQUMsT0FBRCxBQUFRLFdBQVcsTUFBMUIsQUFBTyxBQUF5QixBQUNyRDt3QkFBUSxJQUFBLEFBQUksR0FBWixBQUFRLEFBQU8sQUFDZjtxQkFBQSxBQUFLLE1BQU0sTUFBWCxBQUFpQixBQUNqQjt1QkFBTyxFQUFDLE9BQUQsQUFBUSxPQUFPLE1BQXRCLEFBQU8sQUFBcUIsQUFDN0I7QUFaRDs7OztBQ0pBOztBQUNBLGdCQUFJLFVBQVcsUUFBZixBQUFlLEFBQVE7O0FBRXZCLG9CQUFRLFFBQUEsQUFBUSxJQUFJLFFBQXBCLEFBQTRCLEdBQTVCLEFBQStCLE9BQU8sRUFBQyxRQUFRLFFBQUEsQUFBUSx5QkFBdkQsQUFBc0MsQUFBUyxBQUFpQzs7OztBQ0hoRjs7QUFDQSxnQkFBSSxVQUFXLFFBQWYsQUFBZSxBQUFROztBQUV2QixvQkFBUSxRQUFBLEFBQVEsSUFBSSxRQUFwQixBQUE0QixHQUE1QixBQUErQixPQUFPLEVBQUMsUUFBUSxRQUFBLEFBQVEseUJBQXZELEFBQXNDLEFBQVMsQUFBaUM7Ozs7QUNIaEYsb0JBQUEsQUFBUTtBQUNSLGdCQUFJLFNBQWdCLFFBQXBCLEFBQW9CLEFBQVE7Z0JBQ3hCLE9BQWdCLFFBRHBCLEFBQ29CLEFBQVE7Z0JBQ3hCLFlBQWdCLFFBRnBCLEFBRW9CLEFBQVE7Z0JBQ3hCLGdCQUFnQixRQUFBLEFBQVEsVUFINUIsQUFHb0IsQUFBa0I7O0FBRXRDLGlCQUFJLElBQUksY0FBYyxDQUFBLEFBQUMsWUFBRCxBQUFhLGdCQUFiLEFBQTZCLGFBQTdCLEFBQTBDLGtCQUE1RCxBQUFrQixBQUE0RCxnQkFBZ0IsSUFBbEcsQUFBc0csR0FBRyxJQUF6RyxBQUE2RyxHQUE3RyxBQUFnSCxLQUFJLEFBQ2xIO29CQUFJLE9BQWEsWUFBakIsQUFBaUIsQUFBWTtvQkFDekIsYUFBYSxPQURqQixBQUNpQixBQUFPO29CQUNwQixRQUFhLGNBQWMsV0FGL0IsQUFFMEMsQUFDMUM7b0JBQUcsU0FBUyxDQUFDLE1BQWIsQUFBYSxBQUFNLGdCQUFlLEtBQUEsQUFBSyxPQUFMLEFBQVksZUFBWixBQUEyQixBQUM3RDswQkFBQSxBQUFVLFFBQVEsVUFBbEIsQUFBNEIsQUFDN0I7O3VKQ1pEOztBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7O0FBQ0EsNkJBQ0E7O0FBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7QUFDQSxrQ0FDQTtzQ0FDQTtBQUNBOztBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7Ozs7Ozs7O0FBQ0EsZ0NBQ0E7bURBQ0E7aURBQ0E7QUFDQTt1QkFDQTtBQUNBOztBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7Ozs7Ozs7O0FBQ0EsbUNBQ0EsMERBQ0E7cURBQ0E7b0VBQ0EsU0FDQTt1QkFDQTtBQUNBOztBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7Ozs7O0FBQ0EsMERBQ0E7MkJBQ0E7cURBQ0EsQUFDQTs7OEJBQ0E7b0NBQ0E7bUNBQ0E7QUFDQSxBQUNBOzt3QkFDQTsrQkFDQTt1QkFDQTtBQUNBOztBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7Ozs7O0FBQ0Esb0NBQ0EsbUNBQ0EsdUNBQ0EsNkRBQ0E7cURBQ0EsQUFDQTs7QUFDQTsyQ0FDQTtzQ0FDQTsyQkFDQTtBQUNBLEFBQ0E7O0FBQ0E7Z0RBQ0E7dUNBQ0EsQUFDQTs7QUFDQTsyQ0FDQTsyQ0FDQTsyQkFDQTtBQUNBLEFBQ0E7O0FBQ0E7b0JBQ0E7MkRBQ0E7bUNBQ0E7bURBQ0E7NENBQ0E7QUFDQTtBQUNBO0FBQ0E7dUJBQ0E7QUFDQTs7QUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7OztBQUNBLHNEQUNBO3FEQUNBO29EQUNBO2dEQUNBLEFBQ0E7OytCQUNBO2dEQUNBOzBFQUNBO2lEQUNBO0FBQ0E7QUFDQSxBQUNBOzt1QkFDQTtBQUNBOztBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7Ozs7Ozs7O0FBQ0EsMkRBQ0E7cURBQ0E7aURBQ0E7QUFDQTs7QUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7OztBQUNBLDhEQUNBOytDQUNBO0FBQ0E7O0FDcEtBOztBQUNBLGdCQUFJLHdCQUF5QixBQUN6Qjt5QkFBQSxBQUFTLFlBQVksQUFDcEIsQ0FDRDswQkFBQSxBQUFVLHFCQUFWLEFBQStCLEFBQy9COzBCQUFBLEFBQVUsUUFBVixBQUFrQixBQUNsQjt1QkFBQSxBQUFPLEFBQ1Y7QUFORCxBQUFpQixhQUFBO0FBT2pCLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDWEE7O0FBQ0EsZ0JBQUksWUFBYSxhQUFRLFVBQVQsQUFBYyxhQUFjLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUN4RDtxQkFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7d0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUNuRCwwQkFBQSxBQUFTLEtBQUssQUFBRTt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFBSTtBQUN2QztrQkFBQSxBQUFFLFlBQVksTUFBQSxBQUFNLE9BQU8sT0FBQSxBQUFPLE9BQXBCLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRDtBQUtBLGdCQUFJLFlBQVksUUFBaEIsQUFBZ0IsQUFBUTtBQUN4QixnQkFBSSwyQ0FBa0MsQUFBVSxRQUFRLEFBQ3BEOzBCQUFBLEFBQVUsZ0NBQVYsQUFBMEMsQUFDMUM7eUJBQUEsQUFBUywrQkFBVCxBQUF3QyxhQUF4QyxBQUFxRCxjQUFyRCxBQUFtRSxPQUFPLEFBQ3RFOzJCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ1o7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ25CO3lCQUFBLEFBQUssZUFBTCxBQUFvQixBQUNwQjt5QkFBQSxBQUFLLFFBQUwsQUFBYSxBQUNiO3lCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7eUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ3BCO0FBQ0Q7dUJBQUEsQUFBTyxBQUNWO0FBWHFDLGFBQUEsQ0FXcEMsVUFYRixBQUFzQyxBQVdwQyxBQUFVO0FBQ1osb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUN0QkE7Ozs7Ozs7O0FBQ0EsZ0JBQUksYUFBYSxRQUFqQixBQUFpQixBQUFRO0FBQ3pCLGdCQUFJLDhCQUErQixBQUMvQjt5QkFBQSxBQUFTLGdCQUFULEFBQXlCLGNBQXpCLEFBQXVDLFdBQXZDLEFBQWtELE9BQU8sQUFDckQ7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLEFBQ3BCO3lCQUFBLEFBQUssS0FBSyxLQUFNLGdCQUFOLEFBQU0sQUFBZ0IsaUNBQWhDLEFBQWtFLEFBQ2xFO3lCQUFBLEFBQUssaUJBQWlCLElBQUksV0FBMUIsQUFBc0IsQUFBSSxBQUFXLEFBQ3JDO3lCQUFBLEFBQUsscUJBQXFCLElBQUksV0FBOUIsQUFBMEIsQUFBSSxBQUFXLEFBQ3pDO3lCQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7eUJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ3JCO0FBQ0Q7QUFDQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixPQUFPLFlBQVksQUFDekM7d0JBQUksU0FBUyxJQUFBLEFBQUksZ0JBQWdCLEtBQXBCLEFBQXlCLGNBQWMsS0FBdkMsQUFBdUMsQUFBSyxnQkFBZ0IsS0FBekUsQUFBYSxBQUE0RCxBQUFLLEFBQzlFOzJCQUFBLEFBQU8sQUFDVjtBQUhELEFBSUE7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsdUJBQXVCLFVBQUEsQUFBVSxtQkFBbUIsQUFDMUU7d0JBQUksS0FBSixBQUFTLG1CQUFtQixBQUN4Qjs4QkFBQSxBQUFNLEFBQ1Q7QUFDRDt5QkFBQSxBQUFLLG9CQUFMLEFBQXlCLEFBQzVCO0FBTEQsQUFNQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQix1QkFBdUIsWUFBWSxBQUN6RDsyQkFBTyxLQUFQLEFBQVksQUFDZjtBQUZELEFBR0E7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsV0FBVyxZQUFZLEFBQzdDOzJCQUFPLEtBQVAsQUFBWSxBQUNmO0FBRkQsQUFHQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixXQUFXLFVBQUEsQUFBVSxVQUFVLEFBQ3JEO3dCQUFJLGdCQUFnQixnQkFBQSxBQUFnQixXQUFwQyxBQUFvQixBQUEyQixBQUMvQzt3QkFBSSxLQUFBLEFBQUssU0FBVCxBQUFrQixlQUNkLEFBQ0o7d0JBQUksV0FBVyxLQUFmLEFBQW9CLEFBQ3BCO3lCQUFBLEFBQUssUUFBTCxBQUFhLEFBQ2I7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLFFBQVEsRUFBRSxZQUFGLEFBQWMsVUFBVSxZQUFwRCxBQUE0QixBQUFvQyxBQUNuRTtBQVBELEFBUUE7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsZUFBZSxVQUFBLEFBQVUsY0FBYyxBQUM3RDt3QkFBSSxLQUFBLEFBQUssYUFBVCxBQUFzQixjQUNsQixBQUNKO3dCQUFJLGVBQWUsS0FBbkIsQUFBd0IsQUFDeEI7eUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ2pCO3lCQUFBLEFBQUssbUJBQUwsQUFBd0IsUUFBUSxFQUFFLFlBQUYsQUFBYyxjQUFjLFlBQTVELEFBQWdDLEFBQXdDLEFBQzNFO0FBTkQsQUFPQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixlQUFlLFlBQVksQUFDakQ7MkJBQU8sS0FBUCxBQUFZLEFBQ2Y7QUFGRCxBQUdBO2dDQUFBLEFBQWdCLGFBQWEsVUFBQSxBQUFVLE9BQU8sQUFDMUM7d0JBQUksU0FBQSxBQUFTLFFBQVEsU0FBckIsQUFBOEIsV0FBVyxBQUNyQzsrQkFBQSxBQUFPLEFBQ1Y7QUFDRDt3QkFBSSxTQUFKLEFBQWEsQUFDYjt3QkFBSSxrQkFBQSxBQUFrQixVQUFVLGtCQUE1QixBQUE4QyxXQUFXLGtCQUE3RCxBQUErRSxRQUFRLEFBQ25GO2lDQUFTLE1BQVQsQUFBUyxBQUFNLEFBQ2xCO0FBQ0Q7d0JBQUksa0JBQUosQUFBc0IsaUJBQWlCLEFBQ25DO2dDQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7aUNBQVMsS0FBQSxBQUFLLFdBQVcsTUFBekIsQUFBUyxBQUFzQixBQUNsQztBQUNEO3dCQUFJLEtBQUosQUFBUyxBQUNUO3dCQUFJLEtBQUEsQUFBSyxzQkFBTCxBQUEyQixlQUEzQixBQUEwQywrQ0FBMUMsQUFBMEMsV0FBVSxDQUFwRCxBQUFxRCxLQUFLLGtCQUE5RCxBQUFnRixNQUFNLEFBQ2xGOzZCQUFBLEFBQUssQUFDUjtBQUNEO3dCQUFJLENBQUosQUFBSyxJQUFJLEFBQ0w7OEJBQU0sSUFBQSxBQUFJLE1BQU0sNERBQUEsQUFBMkQsOENBQTNFLEFBQU0sQUFBVSxBQUEyRCxBQUM5RTtBQUNEOzJCQUFBLEFBQU8sQUFDVjtBQXBCRCxBQXFCQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixnQkFBZ0IsVUFBQSxBQUFVLGNBQWMsQUFDOUQ7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLFFBQXBCLEFBQTRCLEFBQzVCO2lDQUFhLEVBQUUsWUFBWSxLQUFkLEFBQW1CLE9BQU8sWUFBWSxLQUFuRCxBQUFhLEFBQTJDLEFBQzNEO0FBSEQsQUFJQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixvQkFBb0IsVUFBQSxBQUFVLGNBQWMsQUFDbEU7eUJBQUEsQUFBSyxtQkFBTCxBQUF3QixRQUF4QixBQUFnQyxBQUNuQztBQUZELEFBR0E7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsV0FBVyxVQUFBLEFBQVUsaUJBQWlCLEFBQzVEO3dCQUFBLEFBQUksaUJBQWlCLEFBQ2pCOzZCQUFBLEFBQUssYUFBYSxnQkFERCxBQUNqQixBQUFrQixBQUFnQixpQkFBaUIsQUFDbkQ7NkJBQUEsQUFBSyxTQUFTLGdCQUFkLEFBQThCLEFBQ2pDO0FBQ0o7QUFMRCxBQU1BO2dDQUFBLEFBQWdCLHdCQUF3QixDQUFBLEFBQUMsVUFBRCxBQUFXLFVBQW5ELEFBQXdDLEFBQXFCLEFBQzdEO2dDQUFBLEFBQWdCLCtCQUFoQixBQUErQyxBQUMvQzt1QkFBQSxBQUFPLEFBQ1Y7QUFqRkQsQUFBdUIsYUFBQTtBQWtGdkIsb0JBQUEsQUFBUSxrQkFBUixBQUEwQixBQUUxQjs7QUN0RkE7O0FBQ0EsZ0JBQUksNEJBQTRCLFFBQWhDLEFBQWdDLEFBQVE7QUFDeEMsZ0JBQUksVUFBVSxRQUFkLEFBQWMsQUFBUTtBQUN0QixnQkFBSSxtQkFBbUIsUUFBdkIsQUFBdUIsQUFBUTtBQUMvQixnQkFBSSw4QkFBK0IsQUFDL0I7eUJBQUEsQUFBUyxnQkFBVCxBQUF5QixhQUF6QixBQUFzQyxlQUF0QyxBQUFxRCxTQUFyRCxBQUE4RCxjQUFjLEFBQ3hFO3dCQUFJLFlBQVksS0FBaEIsQUFBcUIsR0FBRyxBQUFFO2tDQUFBLEFBQVUsQUFBSTtBQUN4Qzt3QkFBSSxpQkFBaUIsS0FBckIsQUFBMEIsR0FBRyxBQUFFO3VDQUFBLEFBQWUsQUFBSztBQUNuRDt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDcEI7eUJBQUEsQUFBSyxtQkFBTCxBQUF3QixBQUN4Qjt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUNyQjt5QkFBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO3lCQUFBLEFBQUssUUFBUSxJQUFJLFFBQWpCLEFBQWEsQUFBSSxBQUFRLEFBQ3pCO3lCQUFBLEFBQUssaUJBQWlCLElBQUksaUJBQUosQUFBcUIsb0JBQXJCLEFBQXlDLE1BQS9ELEFBQXNCLEFBQStDLEFBQ3hFO0FBQ0Q7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsb0JBQW9CLFVBQUEsQUFBVSxZQUFZLEFBQ2hFO3lCQUFBLEFBQUssaUJBQUwsQUFBc0IsQUFDekI7QUFGRCxBQUdBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLGlCQUFpQixVQUFBLEFBQVUsU0FBUyxBQUMxRDt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDdEI7QUFGRCxBQUdBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLGtCQUFrQixVQUFBLEFBQVUsYUFBYSxBQUMvRDt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDdkI7QUFGRCxBQUdBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLG9CQUFvQixVQUFBLEFBQVUsWUFBWSxBQUNoRTt5QkFBQSxBQUFLLGlCQUFMLEFBQXNCLEFBQ3pCO0FBRkQsQUFHQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixPQUFPLFVBQUEsQUFBVSxTQUFWLEFBQW1CLFlBQVksQUFDNUQ7eUJBQUEsQUFBSyxhQUFMLEFBQWtCLEtBQUssRUFBRSxTQUFGLEFBQVcsU0FBUyxTQUEzQyxBQUF1QixBQUE2QixBQUNwRDt3QkFBSSxLQUFKLEFBQVM7NkJBQWtCLEFBQ3ZCLEFBQUssVUFEa0IsQUFDdkIsQ0FBZ0IsQUFDaEI7QUFDSDtBQUNEO3lCQUFBLEFBQUssQUFDUjtBQVBELEFBUUE7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsYUFBYSxZQUFZLEFBQy9DO3dCQUFJLFFBQUosQUFBWSxBQUNaO3dCQUFJLEtBQUEsQUFBSyxhQUFMLEFBQWtCLFNBQXRCLEFBQStCLEdBQUcsQUFDOUI7NEJBQUksS0FBSixBQUFTLGFBQWEsQUFDbEI7aUNBQUEsQUFBSyxBQUNSO0FBRkQsK0JBR0ssQUFDRDtpQ0FBQSxBQUFLLG1CQUFMLEFBQXdCLEFBQ3hCO0FBQ0g7QUFDSjtBQUNEO3lCQUFBLEFBQUssbUJBQUwsQUFBd0IsQUFDeEI7d0JBQUksa0JBQWtCLEtBQUEsQUFBSyxlQUFMLEFBQW9CLE1BQU0sS0FBaEQsQUFBc0IsQUFBK0IsQUFDckQ7d0JBQUksV0FBVyxnQkFBZ0IsZ0JBQUEsQUFBZ0IsU0FBaEMsQUFBeUMsR0FBeEQsQUFBMkQsQUFDM0Q7d0JBQUksMkJBQVcsQUFBZ0IsSUFBSSxVQUFBLEFBQVUsS0FBSyxBQUFFOytCQUFPLElBQVAsQUFBVyxBQUFVO0FBQXpFLEFBQWUsQUFDZixxQkFEZTt5QkFDZixBQUFLLFlBQUwsQUFBaUIsU0FBakIsQUFBMEIsVUFBVSxVQUFBLEFBQVUsVUFBVSxBQUNwRDtBQUNBOzRCQUFJLGFBQUosQUFBaUIsQUFDakI7aUNBQUEsQUFBUyxRQUFRLFVBQUEsQUFBVSxTQUFTLEFBQ2hDO2dDQUFJLFVBQVUsTUFBQSxBQUFNLE9BQXBCLEFBQWMsQUFBYSxBQUMzQjtnQ0FBQSxBQUFJLFNBQ0EsV0FBQSxBQUFXLEtBQVgsQUFBZ0IsQUFDdkI7QUFKRCxBQUtBOzRCQUFBLEFBQUksVUFBVSxBQUNWO3FDQUFBLEFBQVMsV0FEQyxBQUNWLEFBQW9CLGFBQWEsQUFDcEM7QUFDRDtBQUNBO0FBQ0E7bUNBQVcsWUFBWSxBQUFFO21DQUFPLE1BQVAsQUFBTyxBQUFNLEFBQWU7QUFBckQsMkJBQXVELE1BQXZELEFBQTZELEFBQ2hFO0FBZEQsQUFlSDtBQTlCRCxBQStCQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixTQUFTLFVBQUEsQUFBVSxTQUFTLEFBQ2xEO3dCQUFJLFFBQUEsQUFBUSxNQUFaLEFBQWtCLDJCQUEyQixBQUN6QzsrQkFBTyxLQUFBLEFBQUsscUNBQVosQUFBTyxBQUEwQyxBQUNwRDtBQUZELCtCQUdTLFFBQUEsQUFBUSxNQUFaLEFBQWtCLDJCQUEyQixBQUM5QzsrQkFBTyxLQUFBLEFBQUsscUNBQVosQUFBTyxBQUEwQyxBQUNwRDtBQUZJLHFCQUFBLFVBR0ksUUFBQSxBQUFRLE1BQVosQUFBa0IsZ0JBQWdCLEFBQ25DOytCQUFPLEtBQUEsQUFBSywwQkFBWixBQUFPLEFBQStCLEFBQ3pDO0FBRkkscUJBQUEsVUFHSSxRQUFBLEFBQVEsTUFBWixBQUFrQiw0QkFBNEIsQUFDL0M7K0JBQU8sS0FBQSxBQUFLLHNDQUFaLEFBQU8sQUFBMkMsQUFDckQ7QUFGSSxxQkFBQSxNQUdBLEFBQ0Q7Z0NBQUEsQUFBUSxJQUFJLG9DQUFaLEFBQWdELEFBQ25EO0FBQ0Q7MkJBQUEsQUFBTyxBQUNWO0FBakJELEFBa0JBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLHVDQUF1QyxVQUFBLEFBQVUsZUFBZSxBQUN0Rjt3QkFBSSxRQUFRLEtBQUEsQUFBSyxjQUFMLEFBQW1CLDBCQUEwQixjQUF6RCxBQUFZLEFBQTJELEFBQ3ZFO3dCQUFJLENBQUosQUFBSyxPQUNELE9BQUEsQUFBTyxBQUNYO3lCQUFBLEFBQUssY0FBTCxBQUFtQixzQkFBbkIsQUFBeUMsd0JBQXpDLEFBQWlFLE9BQWpFLEFBQXdFLEFBQ3hFOzJCQUFBLEFBQU8sQUFDVjtBQU5ELEFBT0E7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsdUNBQXVDLFVBQUEsQUFBVSxlQUFlLEFBQ3RGO3dCQUFJLFFBQUosQUFBWSxBQUNaO3dCQUFJLEtBQUEsQUFBSyxjQUFMLEFBQW1CLHNCQUFuQixBQUF5QywwQkFBMEIsY0FBdkUsQUFBSSxBQUFpRixPQUFPLEFBQ3hGOzhCQUFNLElBQUEsQUFBSSxNQUFNLG1EQUFtRCxjQUFuRCxBQUFpRSxPQUFqRixBQUFNLEFBQWtGLEFBQzNGO0FBQ0Q7d0JBQUksYUFBSixBQUFpQixBQUNqQjtrQ0FBQSxBQUFjLFdBQWQsQUFBeUIsUUFBUSxVQUFBLEFBQVUsTUFBTSxBQUM3Qzs0QkFBSSxrQkFBa0IsTUFBQSxBQUFNLGNBQU4sQUFBb0IsVUFBVSxLQUE5QixBQUFtQyxjQUFjLEtBQWpELEFBQXNELFdBQVcsS0FBdkYsQUFBc0IsQUFBc0UsQUFDNUY7NEJBQUksS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLEdBQUwsQUFBUSxNQUF2QixBQUFlLEFBQWMsU0FBUyxBQUNsQzs0Q0FBQSxBQUFnQixLQUFLLEtBQXJCLEFBQTBCLEFBQzdCO0FBQ0Q7bUNBQUEsQUFBVyxLQUFYLEFBQWdCLEFBQ25CO0FBTkQsQUFPQTt3QkFBSSxXQUFXLElBQUksMEJBQUosQUFBOEIsd0JBQXdCLGNBQXRELEFBQW9FLE1BQU0sY0FBekYsQUFBZSxBQUF3RixBQUN2Rzs2QkFBQSxBQUFTLGNBQVQsQUFBdUIsQUFDdkI7d0JBQUksY0FBSixBQUFrQixnQkFBZ0IsQUFDOUI7aUNBQUEsQUFBUyxpQkFBVCxBQUEwQixBQUM3QjtBQUNEO3lCQUFBLEFBQUssY0FBTCxBQUFtQixzQkFBbkIsQUFBeUMsSUFBekMsQUFBNkMsQUFDN0M7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLGlDQUFuQixBQUFvRCxBQUNwRDsyQkFBQSxBQUFPLEFBQ1Y7QUFyQkQsQUFzQkE7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsNEJBQTRCLFVBQUEsQUFBVSxlQUFlLEFBQzNFO3dCQUFJLGtCQUFrQixLQUFBLEFBQUssY0FBTCxBQUFtQixzQkFBbkIsQUFBeUMsa0JBQWtCLGNBQWpGLEFBQXNCLEFBQXlFLEFBQy9GO3dCQUFJLENBQUosQUFBSyxpQkFBaUIsQUFDbEI7Z0NBQUEsQUFBUSxJQUFJLHVCQUF1QixjQUF2QixBQUFxQyxjQUFyQyxBQUFtRCx5Q0FBeUMsY0FBNUYsQUFBMEcsV0FBMUcsQUFBcUgsbUJBQW1CLGNBQXBKLEFBQWtLLEFBQ2xLOytCQUFBLEFBQU8sQUFDVjtBQUNEO3dCQUFJLGdCQUFBLEFBQWdCLGNBQWMsY0FBbEMsQUFBZ0QsVUFBVSxBQUN0RDtBQUNBOytCQUFBLEFBQU8sQUFDVjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7b0NBQUEsQUFBZ0IsU0FBUyxjQUF6QixBQUF1QyxBQUN2QzsyQkFBQSxBQUFPLEFBQ1Y7QUFuQkQsQUFvQkE7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsd0NBQXdDLFVBQUEsQUFBVSxlQUFlLEFBQ3ZGO3dCQUFJLGtCQUFrQixLQUFBLEFBQUssY0FBTCxBQUFtQixzQkFBbkIsQUFBeUMsa0JBQWtCLGNBQWpGLEFBQXNCLEFBQXlFLEFBQy9GO3dCQUFJLENBQUosQUFBSyxpQkFDRCxPQUFBLEFBQU8sQUFDWDtvQ0FBZ0IsY0FBaEIsQUFBOEIsZ0JBQWdCLGNBQTlDLEFBQTRELEFBQzVEOzJCQUFBLEFBQU8sQUFDVjtBQU5ELEFBT0E7QUFDQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixTQUFTLFlBQVksQUFDM0M7d0JBQUksQ0FBQyxLQUFMLEFBQVUsYUFDTixBQUNKO3dCQUFJLEtBQUosQUFBUyxTQUNMLEFBQ0o7QUFDQTt3QkFBSSxDQUFDLEtBQUwsQUFBVSxrQkFBa0IsQUFDeEI7NkJBQUEsQUFBSyxBQUNSO0FBQ0o7QUFURCxBQVVBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLHFCQUFxQixZQUFZLEFBQ3ZEO3dCQUFJLEtBQUosQUFBUyxBQUNUO3lCQUFBLEFBQUssVUFBTCxBQUFlLEFBQ2Y7eUJBQUEsQUFBSyxhQUFMLEFBQWtCO2lDQUNMLEtBRFUsQUFDTCxBQUNkOzt3Q0FDZ0Isb0JBQUEsQUFBVSxRQUFRLEFBQUU7bUNBQUEsQUFBRyxVQUFILEFBQWEsQUFBUTtBQURoRCxBQUVMOzRDQUpSLEFBQXVCLEFBRVYsQUFFVyxBQUczQjtBQUxnQixBQUNMO0FBSGUsQUFDbkI7QUFKUixBQVdBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLFVBQVUsWUFBWSxBQUM1Qzt3QkFBSSxDQUFDLEtBQUwsQUFBVSxTQUNOLEFBQ0o7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjtBQUNBO3lCQUFBLEFBQUssWUFBTCxBQUFpQixPQUFPLEtBQXhCLEFBQTZCLEFBQ2hDO0FBTkQsQUFPQTt1QkFBQSxBQUFPLEFBQ1Y7QUF6S0QsQUFBdUIsYUFBQTtBQTBLdkIsb0JBQUEsQUFBUSxrQkFBUixBQUEwQixBQUUxQjs7QUNoTEE7O0FBQ0EsZ0JBQUksb0JBQW9CLFFBQXhCLEFBQXdCLEFBQVE7QUFDaEMsZ0JBQUksNEJBQTRCLFFBQWhDLEFBQWdDLEFBQVE7QUFDeEMsZ0JBQUksNEJBQTZCLEFBQzdCO3lCQUFBLEFBQVMsZ0JBQWdCLEFBQ3hCLENBQ0Q7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLHFCQUFxQixVQUFBLEFBQVUsaUJBQWlCLEFBQ3BFO3lCQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFDMUI7QUFGRCxBQUdBOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixxQkFBcUIsWUFBWSxBQUNyRDsyQkFBTyxLQUFQLEFBQVksQUFDZjtBQUZELEFBR0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLE9BQU8sVUFBQSxBQUFVLFNBQVYsQUFBbUIsWUFBWSxBQUMxRDt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLEtBQXJCLEFBQTBCLFNBQTFCLEFBQW1DLEFBQ3RDO0FBRkQsQUFHQTtBQUNBOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixZQUFZLFVBQUEsQUFBVSxjQUFWLEFBQXdCLFdBQXhCLEFBQW1DLE9BQU8sQUFDMUU7MkJBQU8sSUFBSSxrQkFBSixBQUFzQixnQkFBdEIsQUFBc0MsY0FBdEMsQUFBb0QsV0FBM0QsQUFBTyxBQUErRCxBQUN6RTtBQUZELEFBR0E7QUFDQTs4QkFBQSxBQUFjLFVBQWQsQUFBd0Isb0JBQW9CLFVBQUEsQUFBVSxJQUFWLEFBQWMsTUFBTSxBQUM1RDt3QkFBSSxhQUFKLEFBQWlCLEFBQ2pCO3lCQUFLLElBQUksS0FBVCxBQUFjLEdBQUcsS0FBSyxVQUF0QixBQUFnQyxRQUFoQyxBQUF3QyxNQUFNLEFBQzFDO21DQUFXLEtBQVgsQUFBZ0IsS0FBSyxVQUFyQixBQUFxQixBQUFVLEFBQ2xDO0FBQ0Q7d0JBQUksUUFBUSxJQUFJLDBCQUFKLEFBQThCLHdCQUE5QixBQUFzRCxJQUFsRSxBQUFZLEFBQTBELEFBQ3RFO3dCQUFJLGNBQWMsV0FBQSxBQUFXLFNBQTdCLEFBQXNDLEdBQUcsQUFDckM7bUNBQUEsQUFBVyxRQUFRLFVBQUEsQUFBVSxXQUFXLEFBQ3BDO2tDQUFBLEFBQU0sYUFBTixBQUFtQixBQUN0QjtBQUZELEFBR0g7QUFDRDt5QkFBQSxBQUFLLHNCQUFMLEFBQTJCLElBQTNCLEFBQStCLEFBQy9COzJCQUFBLEFBQU8sQUFDVjtBQWJELEFBY0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLHNCQUFzQixVQUFBLEFBQVUsa0JBQWtCLEFBQ3RFO3lCQUFBLEFBQUssbUJBQUwsQUFBd0IsQUFDM0I7QUFGRCxBQUdBOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixzQkFBc0IsWUFBWSxBQUN0RDsyQkFBTyxLQUFQLEFBQVksQUFDZjtBQUZELEFBR0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLDJCQUEyQixZQUFZLEFBQzNEOzJCQUFPLEtBQUEsQUFBSyxzQkFBWixBQUFPLEFBQTJCLEFBQ3JDO0FBRkQsQUFHQTs4QkFBQSxBQUFjLFVBQWQsQUFBd0IseUJBQXlCLFlBQVksQUFDekQ7MkJBQU8sS0FBQSxBQUFLLHNCQUFaLEFBQU8sQUFBMkIsQUFDckM7QUFGRCxBQUdBOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixpQ0FBaUMsVUFBQSxBQUFVLHVCQUF1QixBQUN0RjsyQkFBTyxLQUFBLEFBQUssc0JBQUwsQUFBMkIsK0JBQWxDLEFBQU8sQUFBMEQsQUFDcEU7QUFGRCxBQUdBOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixRQUFRLFVBQUEsQUFBVSxJQUFJLEFBQzFDOzJCQUFPLEtBQUEsQUFBSywwQkFBWixBQUFPLEFBQStCLEFBQ3pDO0FBRkQsQUFHQTs4QkFBQSxBQUFjLFVBQWQsQUFBd0IsNEJBQTRCLFVBQUEsQUFBVSxJQUFJLEFBQzlEOzJCQUFPLEtBQUEsQUFBSyxzQkFBTCxBQUEyQiwwQkFBbEMsQUFBTyxBQUFxRCxBQUMvRDtBQUZELEFBR0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLDBCQUEwQixVQUFBLEFBQVUsZUFBZSxBQUN2RTt5QkFBQSxBQUFLLHNCQUFMLEFBQTJCLHdCQUEzQixBQUFtRCxlQUFuRCxBQUFrRSxBQUNyRTtBQUZELEFBR0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLG1DQUFtQyxVQUFBLEFBQVUsbUJBQW1CLEFBQ3BGO3dCQUFJLFFBQUosQUFBWSxBQUNaO3NDQUFBLEFBQWtCLGdCQUFsQixBQUFrQyxRQUFRLFVBQUEsQUFBVSxpQkFBaUIsQUFDakU7OEJBQUEsQUFBTSx5QkFBTixBQUErQixBQUNsQztBQUZELEFBR0g7QUFMRCxBQU1BOzhCQUFBLEFBQWMsVUFBZCxBQUF3QiwyQkFBMkIsVUFBQSxBQUFVLGlCQUFpQixBQUMxRTt3QkFBSSxDQUFDLGdCQUFMLEFBQUssQUFBZ0IsZ0JBQ2pCLEFBQ0o7d0JBQUksYUFBYSxLQUFBLEFBQUssc0JBQUwsQUFBMkIsNkJBQTZCLGdCQUF6RSxBQUFpQixBQUF3RCxBQUFnQixBQUN6RjsrQkFBQSxBQUFXLFFBQVEsVUFBQSxBQUFVLGlCQUFpQixBQUMxQzt3Q0FBQSxBQUFnQixTQUFTLGdCQURpQixBQUMxQyxBQUF5QixBQUFnQixhQUFhLEFBQ3pEO0FBRkQsQUFHSDtBQVBELEFBUUE7QUFDQTs4QkFBQSxBQUFjLFVBQWQsQUFBd0IscUJBQXFCLFVBQUEsQUFBVSxhQUFWLEFBQXVCLGdCQUFnQixBQUNoRjt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLGdCQUFyQixBQUFxQyxBQUNyQzt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLGtCQUFyQixBQUF1QyxBQUN2Qzt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLGVBQXJCLEFBQW9DLEFBQ3BDO3lCQUFBLEFBQUssZ0JBQUwsQUFBcUIsQUFDeEI7QUFMRCxBQU1BOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixvQkFBb0IsWUFBWSxBQUNwRDt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLGVBQXJCLEFBQW9DLEFBQ3ZDO0FBRkQsQUFHQTt1QkFBQSxBQUFPLEFBQ1Y7QUFoRkQsQUFBcUIsYUFBQTtBQWlGckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUN2RkE7QUFDQTs7QUFDQSxnQkFBSSxjQUFjLFFBQWxCLEFBQWtCLEFBQVE7QUFDMUIsZ0JBQUksbUNBQW1DLFFBQXZDLEFBQXVDLEFBQVE7QUFDL0MsZ0JBQUksbUNBQW1DLFFBQXZDLEFBQXVDLEFBQVE7QUFDL0MsZ0JBQUkseUNBQXlDLFFBQTdDLEFBQTZDLEFBQVE7QUFDckQsZ0JBQUksYUFBYSxRQUFqQixBQUFpQixBQUFRO0FBQ3pCLGdCQUFJLHdCQUF3QixRQUE1QixBQUE0QixBQUFRO0FBQ3BDLGFBQUMsVUFBQSxBQUFVLE1BQU0sQUFDYjtxQkFBSyxLQUFBLEFBQUssV0FBVixBQUFxQixXQUFyQixBQUFnQyxBQUNoQztxQkFBSyxLQUFBLEFBQUssYUFBVixBQUF1QixhQUF2QixBQUFvQyxBQUN2QztBQUhELGVBR0csUUFBQSxBQUFRLFNBQVMsUUFBQSxBQUFRLE9BSDVCLEFBR0csQUFBZ0M7QUFDbkMsZ0JBQUksT0FBTyxRQUFYLEFBQW1CO0FBQ25CLGdCQUFJLCtCQUFnQyxBQUNoQzt5QkFBQSxBQUFTLGlCQUFULEFBQTBCLGVBQWUsQUFDckM7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUNyQjt5QkFBQSxBQUFLLHFCQUFxQixJQUExQixBQUEwQixBQUFJLEFBQzlCO3lCQUFBLEFBQUssNEJBQTRCLElBQWpDLEFBQWlDLEFBQUksQUFDckM7eUJBQUEsQUFBSyxrQkFBa0IsSUFBdkIsQUFBdUIsQUFBSSxBQUMzQjt5QkFBQSxBQUFLLHlCQUF5QixJQUE5QixBQUE4QixBQUFJLEFBQ2xDO3lCQUFBLEFBQUssc0JBQXNCLElBQUksV0FBL0IsQUFBMkIsQUFBSSxBQUFXLEFBQzdDO0FBQ0Q7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsbUJBQW1CLFlBQVksQUFDdEQ7MkJBQU8sS0FBUCxBQUFZLEFBQ2Y7QUFGRCxBQUdBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLGdCQUFnQixVQUFBLEFBQVUsT0FBTyxBQUN4RDt3QkFBSSxRQUFKLEFBQVksQUFDWjt3QkFBSSxNQUFKLEFBQVUsZ0JBQWdCLEFBQ3RCO0FBQ0g7QUFDRDt3QkFBSSxZQUFZLEtBQUEsQUFBSyxjQUFyQixBQUFnQixBQUFtQixBQUNuQzt3QkFBSSxrQkFBa0IsSUFBSSxpQ0FBSixBQUFJLEFBQWlDLFdBQTNELEFBQXNCLEFBQWdELEFBQ3RFOzhCQUFBLEFBQVUsS0FBVixBQUFlLGlCQUFmLEFBQWdDLEFBQ2hDOzBCQUFBLEFBQU0sZ0JBQU4sQUFBc0IsUUFBUSxVQUFBLEFBQVUsV0FBVyxBQUMvQzs4QkFBQSxBQUFNLGtCQUFOLEFBQXdCLEFBQzNCO0FBRkQsQUFHSDtBQVhELEFBWUE7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsb0JBQW9CLFVBQUEsQUFBVSxXQUFXLEFBQ2hFO3dCQUFJLFFBQUosQUFBWSxBQUNaO3lCQUFBLEFBQUssaUJBQUwsQUFBc0IsQUFDdEI7d0JBQUksVUFBSixBQUFJLEFBQVUsZ0JBQWdCLEFBQzFCOzZCQUFBLEFBQUssd0JBQUwsQUFBNkIsQUFDaEM7QUFDRDtBQUNBO0FBQ0E7OEJBQUEsQUFBVSxjQUFjLFVBQUEsQUFBVSxLQUFLLEFBQ25DOzRCQUFJLHFCQUFxQixJQUFJLHNCQUFKLEFBQUksQUFBc0IsV0FBVyxVQUFyQyxBQUErQyxJQUFJLElBQW5ELEFBQXVELFVBQVUsSUFBMUYsQUFBeUIsQUFBcUUsQUFDOUY7OEJBQUEsQUFBTSxjQUFOLEFBQW9CLHFCQUFwQixBQUF5QyxLQUF6QyxBQUE4QyxvQkFBOUMsQUFBa0UsQUFDbEU7NEJBQUksVUFBSixBQUFJLEFBQVUsZ0JBQWdCLEFBQzFCO2dDQUFJLGNBQVEsQUFBTSx1QkFBdUIsVUFBQSxBQUFVLE1BQU0sQUFDckQ7dUNBQU8sU0FBQSxBQUFTLGFBQWEsS0FBQSxBQUFLLGtCQUFrQixVQUFwRCxBQUFvRCxBQUFVLEFBQ2pFO0FBRkQsQUFBWSxBQUdaLDZCQUhZO2tDQUdaLEFBQU0sUUFBUSxVQUFBLEFBQVUsTUFBTSxBQUMxQjtxQ0FBQSxBQUFLLFNBQVMsVUFBZCxBQUFjLEFBQVUsQUFDM0I7QUFGRCxBQUdIO0FBQ0o7QUFYRCxBQVlBOzhCQUFBLEFBQVUsa0JBQWtCLFVBQUEsQUFBVSxLQUFLLEFBQ3ZDOzRCQUFJLHdCQUF3QixJQUFJLGlDQUFKLEFBQUksQUFBaUMsV0FBVyxVQUFoRCxBQUEwRCxJQUFJLFlBQUEsQUFBWSxXQUExRSxBQUFxRixvQkFBb0IsSUFBckksQUFBNEIsQUFBNkcsQUFDekk7OEJBQUEsQUFBTSxjQUFOLEFBQW9CLHFCQUFwQixBQUF5QyxLQUF6QyxBQUE4Qyx1QkFBOUMsQUFBcUUsQUFDeEU7QUFIRCxBQUlIO0FBeEJELEFBeUJBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLE1BQU0sVUFBQSxBQUFVLE9BQU8sQUFDOUM7d0JBQUksQ0FBSixBQUFLLE9BQU8sQUFDUjsrQkFBQSxBQUFPLEFBQ1Y7QUFDRDt3QkFBSSxLQUFBLEFBQUssbUJBQUwsQUFBd0IsSUFBSSxNQUFoQyxBQUFJLEFBQWtDLEtBQUssQUFDdkM7Z0NBQUEsQUFBUSxJQUFJLG1DQUFtQyxNQUEvQyxBQUFxRCxBQUN4RDtBQUNEO3dCQUFJLFFBQUosQUFBWSxBQUNaO3dCQUFJLENBQUMsS0FBQSxBQUFLLG1CQUFMLEFBQXdCLElBQUksTUFBakMsQUFBSyxBQUFrQyxLQUFLLEFBQ3hDOzZCQUFBLEFBQUssbUJBQUwsQUFBd0IsSUFBSSxNQUE1QixBQUFrQyxJQUFsQyxBQUFzQyxBQUN0Qzs2QkFBQSxBQUFLLDJCQUFMLEFBQWdDLEFBQ2hDOzZCQUFBLEFBQUssY0FBTCxBQUFtQixBQUNuQjs2QkFBQSxBQUFLLG9CQUFMLEFBQXlCLFFBQVEsRUFBRSxhQUFhLEtBQWYsQUFBb0IsT0FBTywyQkFBNUQsQUFBaUMsQUFBc0QsQUFDdkY7Z0NBQUEsQUFBUSxBQUNYO0FBQ0Q7MkJBQUEsQUFBTyxBQUNWO0FBaEJELEFBaUJBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLFNBQVMsVUFBQSxBQUFVLE9BQU8sQUFDakQ7d0JBQUksUUFBSixBQUFZLEFBQ1o7d0JBQUksQ0FBSixBQUFLLE9BQU8sQUFDUjsrQkFBQSxBQUFPLEFBQ1Y7QUFDRDt3QkFBSSxVQUFKLEFBQWMsQUFDZDt3QkFBSSxLQUFBLEFBQUssbUJBQUwsQUFBd0IsSUFBSSxNQUFoQyxBQUFJLEFBQWtDLEtBQUssQUFDdkM7NkJBQUEsQUFBSyw4QkFBTCxBQUFtQyxBQUNuQzs2QkFBQSxBQUFLLG1CQUFMLEFBQXdCLE9BQU8sTUFBL0IsQUFBcUMsQUFDckM7OEJBQUEsQUFBTSxnQkFBTixBQUFzQixRQUFRLFVBQUEsQUFBVSxXQUFXLEFBQy9DO2tDQUFBLEFBQU0sb0JBQU4sQUFBMEIsQUFDMUI7Z0NBQUksVUFBSixBQUFJLEFBQVUsZ0JBQWdCLEFBQzFCO3NDQUFBLEFBQU0sMkJBQU4sQUFBaUMsQUFDcEM7QUFDSjtBQUxELEFBTUE7NkJBQUEsQUFBSyxvQkFBTCxBQUF5QixRQUFRLEVBQUUsYUFBYSxLQUFmLEFBQW9CLFNBQVMsMkJBQTlELEFBQWlDLEFBQXdELEFBQ3pGO2tDQUFBLEFBQVUsQUFDYjtBQUNEOzJCQUFBLEFBQU8sQUFDVjtBQW5CRCxBQW9CQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQix5QkFBeUIsVUFBQSxBQUFVLFFBQVEsQUFDbEU7d0JBQUksVUFBSixBQUFjLEFBQ2Q7eUJBQUEsQUFBSyxtQkFBTCxBQUF3QixRQUFRLFVBQUEsQUFBVSxPQUFPLEFBQzdDOzhCQUFBLEFBQU0sZ0JBQU4sQUFBc0IsUUFBUSxVQUFBLEFBQVUsTUFBTSxBQUMxQztnQ0FBSSxPQUFKLEFBQUksQUFBTyxPQUFPLEFBQ2Q7d0NBQUEsQUFBUSxLQUFSLEFBQWEsQUFDaEI7QUFDSjtBQUpELEFBS0g7QUFORCxBQU9BOzJCQUFBLEFBQU8sQUFDVjtBQVZELEFBV0E7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsNkJBQTZCLFVBQUEsQUFBVSxPQUFPLEFBQ3JFO3dCQUFJLENBQUosQUFBSyxPQUFPLEFBQ1I7QUFDSDtBQUNEO3dCQUFJLE9BQU8sTUFBWCxBQUFpQixBQUNqQjt3QkFBSSxDQUFKLEFBQUssTUFBTSxBQUNQO0FBQ0g7QUFDRDt3QkFBSSxxQkFBcUIsS0FBQSxBQUFLLDBCQUFMLEFBQStCLElBQXhELEFBQXlCLEFBQW1DLEFBQzVEO3dCQUFJLENBQUosQUFBSyxvQkFBb0IsQUFDckI7NkNBQUEsQUFBcUIsQUFDckI7NkJBQUEsQUFBSywwQkFBTCxBQUErQixJQUEvQixBQUFtQyxNQUFuQyxBQUF5QyxBQUM1QztBQUNEO3dCQUFJLEVBQUUsbUJBQUEsQUFBbUIsUUFBbkIsQUFBMkIsU0FBUyxDQUExQyxBQUFJLEFBQXVDLElBQUksQUFDM0M7MkNBQUEsQUFBbUIsS0FBbkIsQUFBd0IsQUFDM0I7QUFDSjtBQWhCRCxBQWlCQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQixnQ0FBZ0MsVUFBQSxBQUFVLE9BQU8sQUFDeEU7d0JBQUksQ0FBQSxBQUFDLFNBQVMsQ0FBRSxNQUFoQixBQUFzQix1QkFBd0IsQUFDMUM7QUFDSDtBQUNEO3dCQUFJLHFCQUFxQixLQUFBLEFBQUssMEJBQUwsQUFBK0IsSUFBSSxNQUE1RCxBQUF5QixBQUF5QyxBQUNsRTt3QkFBSSxDQUFKLEFBQUssb0JBQW9CLEFBQ3JCO0FBQ0g7QUFDRDt3QkFBSSxtQkFBQSxBQUFtQixTQUFTLENBQWhDLEFBQWlDLEdBQUcsQUFDaEM7MkNBQUEsQUFBbUIsT0FBTyxtQkFBQSxBQUFtQixRQUE3QyxBQUEwQixBQUEyQixRQUFyRCxBQUE2RCxBQUNoRTtBQUNEO3dCQUFJLG1CQUFBLEFBQW1CLFdBQXZCLEFBQWtDLEdBQUcsQUFDakM7NkJBQUEsQUFBSywwQkFBTCxBQUErQixPQUFPLE1BQXRDLEFBQTRDLEFBQy9DO0FBQ0o7QUFkRCxBQWVBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLDJCQUEyQixZQUFZLEFBQzlEO3dCQUFJLFNBQUosQUFBYSxBQUNiO3dCQUFJLE9BQU8sS0FBQSxBQUFLLG1CQUFoQixBQUFXLEFBQXdCLEFBQ25DO3dCQUFJLE9BQU8sS0FBWCxBQUFXLEFBQUssQUFDaEI7MkJBQU8sQ0FBQyxLQUFSLEFBQWEsTUFBTSxBQUNmOytCQUFBLEFBQU8sS0FBSyxLQUFaLEFBQWlCLEFBQ2pCOytCQUFPLEtBQVAsQUFBTyxBQUFLLEFBQ2Y7QUFDRDsyQkFBQSxBQUFPLEFBQ1Y7QUFURCxBQVVBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLHlCQUF5QixZQUFZLEFBQzVEO3dCQUFJLFNBQUosQUFBYSxBQUNiO3dCQUFJLE9BQU8sS0FBQSxBQUFLLG1CQUFoQixBQUFXLEFBQXdCLEFBQ25DO3dCQUFJLE9BQU8sS0FBWCxBQUFXLEFBQUssQUFDaEI7MkJBQU8sQ0FBQyxLQUFSLEFBQWEsTUFBTSxBQUNmOytCQUFBLEFBQU8sS0FBSyxLQUFaLEFBQWlCLEFBQ2pCOytCQUFPLEtBQVAsQUFBTyxBQUFLLEFBQ2Y7QUFDRDsyQkFBQSxBQUFPLEFBQ1Y7QUFURCxBQVVBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLDRCQUE0QixVQUFBLEFBQVUsSUFBSSxBQUNqRTsyQkFBTyxLQUFBLEFBQUssbUJBQUwsQUFBd0IsSUFBL0IsQUFBTyxBQUE0QixBQUN0QztBQUZELEFBR0E7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsaUNBQWlDLFVBQUEsQUFBVTt3QkFDOUQsQ0FBQSxBQUFDLFFBQVEsQ0FBQyxLQUFBLEFBQUssMEJBQUwsQUFBK0IsSUFBN0MsQUFBYyxBQUFtQyxPQUFPLEFBQ3BEOytCQUFBLEFBQU8sQUFDVjtBQUNEOzJCQUFPLEtBQUEsQUFBSywwQkFBTCxBQUErQixJQUEvQixBQUFtQyxNQUFuQyxBQUF5QyxNQUp3QixBQUl4RSxBQUFPLEFBQStDLEdBSmtCLEFBQ3hFLENBRzBELEFBQzdEO0FBTEQsQUFNQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQiwwQkFBMEIsVUFBQSxBQUFVLE9BQVYsQUFBaUIsUUFBUSxBQUMxRTt3QkFBSSxDQUFKLEFBQUssT0FBTyxBQUNSO0FBQ0g7QUFDRDt3QkFBSSxLQUFBLEFBQUssMEJBQTBCLE1BQW5DLEFBQUksQUFBcUMsS0FBSyxBQUMxQzs2QkFBQSxBQUFLLE9BQUwsQUFBWSxBQUNaOzRCQUFJLENBQUEsQUFBQyxVQUFVLE1BQWYsQUFBcUIsZ0JBQWdCLEFBQ2pDO0FBQ0g7QUFDRDs2QkFBQSxBQUFLLGNBQUwsQUFBbUIscUJBQW5CLEFBQXdDLEtBQUssSUFBSSx1Q0FBSixBQUFJLEFBQXVDLFdBQVcsTUFBbkcsQUFBNkMsQUFBNEQsS0FBekcsQUFBOEcsQUFDakg7QUFDSjtBQVhELEFBWUE7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsNEJBQTRCLFVBQUEsQUFBVSxJQUFJLEFBQ2pFOzJCQUFPLEtBQUEsQUFBSyxtQkFBTCxBQUF3QixJQUEvQixBQUFPLEFBQTRCLEFBQ3RDO0FBRkQsQUFHQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQixtQkFBbUIsVUFBQSxBQUFVLFdBQVcsQUFDL0Q7d0JBQUksQ0FBQSxBQUFDLGFBQWEsS0FBQSxBQUFLLGdCQUFMLEFBQXFCLElBQUksVUFBM0MsQUFBa0IsQUFBbUMsS0FBSyxBQUN0RDtBQUNIO0FBQ0Q7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUFJLFVBQXpCLEFBQW1DLElBQW5DLEFBQXVDLEFBQzFDO0FBTEQsQUFNQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQixzQkFBc0IsVUFBQSxBQUFVLFdBQVcsQUFDbEU7d0JBQUksQ0FBQSxBQUFDLGFBQWEsQ0FBQyxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsSUFBSSxVQUE1QyxBQUFtQixBQUFtQyxLQUFLLEFBQ3ZEO0FBQ0g7QUFDRDt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLE9BQU8sVUFBNUIsQUFBc0MsQUFDekM7QUFMRCxBQU1BO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLG9CQUFvQixVQUFBLEFBQVUsSUFBSSxBQUN6RDsyQkFBTyxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsSUFBNUIsQUFBTyxBQUF5QixBQUNuQztBQUZELEFBR0E7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsMEJBQTBCLFVBQUEsQUFBVSxXQUFXLEFBQ3RFO3dCQUFJLENBQUEsQUFBQyxhQUFhLENBQUMsVUFBbkIsQUFBbUIsQUFBVSxnQkFBZ0IsQUFDekM7QUFDSDtBQUNEO3dCQUFJLGFBQWEsS0FBQSxBQUFLLHVCQUFMLEFBQTRCLElBQUksVUFBakQsQUFBaUIsQUFBZ0MsQUFBVSxBQUMzRDt3QkFBSSxDQUFKLEFBQUssWUFBWSxBQUNiO3FDQUFBLEFBQWEsQUFDYjs2QkFBQSxBQUFLLHVCQUFMLEFBQTRCLElBQUksVUFBaEMsQUFBZ0MsQUFBVSxnQkFBMUMsQUFBMEQsQUFDN0Q7QUFDRDt3QkFBSSxFQUFFLFdBQUEsQUFBVyxRQUFYLEFBQW1CLGFBQWEsQ0FBdEMsQUFBSSxBQUFtQyxJQUFJLEFBQ3ZDO21DQUFBLEFBQVcsS0FBWCxBQUFnQixBQUNuQjtBQUNKO0FBWkQsQUFhQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQiw2QkFBNkIsVUFBQSxBQUFVLFdBQVcsQUFDekU7d0JBQUksQ0FBQSxBQUFDLGFBQWEsQ0FBQyxVQUFuQixBQUFtQixBQUFVLGdCQUFnQixBQUN6QztBQUNIO0FBQ0Q7d0JBQUksYUFBYSxLQUFBLEFBQUssdUJBQUwsQUFBNEIsSUFBSSxVQUFqRCxBQUFpQixBQUFnQyxBQUFVLEFBQzNEO3dCQUFJLENBQUosQUFBSyxZQUFZLEFBQ2I7QUFDSDtBQUNEO3dCQUFJLFdBQUEsQUFBVyxTQUFTLENBQXhCLEFBQXlCLEdBQUcsQUFDeEI7bUNBQUEsQUFBVyxPQUFPLFdBQUEsQUFBVyxRQUE3QixBQUFrQixBQUFtQixZQUFyQyxBQUFpRCxBQUNwRDtBQUNEO3dCQUFJLFdBQUEsQUFBVyxXQUFmLEFBQTBCLEdBQUcsQUFDekI7NkJBQUEsQUFBSyx1QkFBTCxBQUE0QixPQUFPLFVBQW5DLEFBQW1DLEFBQVUsQUFDaEQ7QUFDSjtBQWRELEFBZUE7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsK0JBQStCLFVBQUEsQUFBVTt3QkFDNUQsQ0FBQSxBQUFDLGFBQWEsQ0FBQyxLQUFBLEFBQUssdUJBQUwsQUFBNEIsSUFBL0MsQUFBbUIsQUFBZ0MsWUFBWSxBQUMzRDsrQkFBQSxBQUFPLEFBQ1Y7QUFDRDsyQkFBTyxLQUFBLEFBQUssdUJBQUwsQUFBNEIsSUFBNUIsQUFBZ0MsV0FBaEMsQUFBMkMsTUFKeUIsQUFJM0UsQUFBTyxBQUFpRCxHQUptQixBQUMzRSxDQUc0RCxBQUMvRDtBQUxELEFBTUE7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIscUJBQXFCLFVBQUEsQUFBVSxjQUFjLEFBQ3BFO3lCQUFBLEFBQUssb0JBQUwsQUFBeUIsUUFBekIsQUFBaUMsQUFDcEM7QUFGRCxBQUdBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLDRCQUE0QixVQUFBLEFBQVUsdUJBQVYsQUFBaUMsY0FBYyxBQUNsRzt5QkFBQSxBQUFLLG9CQUFMLEFBQXlCLFFBQVEsVUFBQSxBQUFVLGNBQWMsQUFDckQ7NEJBQUksYUFBQSxBQUFhLHdCQUFiLEFBQXFDLHlCQUF6QyxBQUFrRSx1QkFBdUIsQUFDckY7eUNBQUEsQUFBYSxBQUNoQjtBQUNKO0FBSkQsQUFLSDtBQU5ELEFBT0E7dUJBQUEsQUFBTyxBQUNWO0FBek9ELEFBQXdCLGFBQUE7QUEwT3hCLG9CQUFBLEFBQVEsbUJBQVIsQUFBMkIsQUFFM0I7O0FDelBBOztBQUNBLGdCQUFJLGFBQWEsUUFBakIsQUFBaUIsQUFBUTtBQUN6QixnQkFBSSxpQyxBQUFKLEFBQXFDLEdBQUc7QUFDeEMsZ0JBQUksc0NBQXVDLEFBQ3ZDO3lCQUFBLEFBQVMsd0JBQVQsQUFBaUMsSUFBakMsQUFBcUMsdUJBQXVCLEFBQ3hEO3lCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7eUJBQUEsQUFBSyx3QkFBTCxBQUE2QixBQUM3Qjt5QkFBQSxBQUFLLGFBQUwsQUFBa0IsQUFDbEI7eUJBQUEsQUFBSyxpQkFBTCxBQUFzQixBQUN0Qjt5QkFBQSxBQUFLLFFBQUwsQUFBYSxBQUNiO3dCQUFJLE9BQUEsQUFBTyxPQUFQLEFBQWMsZUFBZSxNQUFqQyxBQUF1QyxNQUFNLEFBQ3pDOzZCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ2I7QUFGRCwyQkFHSyxBQUNEOzZCQUFBLEFBQUssS0FBSyxDQUFBLEFBQUMsa0NBQVgsQUFBVSxBQUFtQyxBQUNoRDtBQUNEO3lCQUFBLEFBQUssYUFBYSxJQUFJLFdBQXRCLEFBQWtCLEFBQUksQUFBVyxBQUNqQzt5QkFBQSxBQUFLLHNCQUFzQixJQUFJLFdBQS9CLEFBQTJCLEFBQUksQUFBVyxBQUM3QztBQUNEO0FBQ0E7QUFDQTt3Q0FBQSxBQUF3QixVQUF4QixBQUFrQyxPQUFPLFlBQVksQUFDakQ7d0JBQUksU0FBUyxJQUFBLEFBQUksd0JBQUosQUFBNEIsTUFBTSxLQUEvQyxBQUFhLEFBQXVDLEFBQ3BEOzJCQUFBLEFBQU8saUJBQVAsQUFBd0IsQUFDeEI7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixRQUFRLFVBQUEsQUFBVSxXQUFXLEFBQzlDOzRCQUFJLGdCQUFnQixVQUFwQixBQUFvQixBQUFVLEFBQzlCOytCQUFBLEFBQU8sYUFBUCxBQUFvQixBQUN2QjtBQUhELEFBSUE7MkJBQUEsQUFBTyxBQUNWO0FBUkQsQUFTQTtBQUNBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLGdCQUFnQixVQUFBLEFBQVUsWUFBWSxBQUNwRTt3QkFBSSxRQUFKLEFBQVksQUFDWjt3QkFBSSxDQUFBLEFBQUMsY0FBYyxXQUFBLEFBQVcsU0FBOUIsQUFBdUMsR0FDbkMsQUFDSjsrQkFBQSxBQUFXLFFBQVEsVUFBQSxBQUFVLE1BQU0sQUFDL0I7OEJBQUEsQUFBTSxhQUFOLEFBQW1CLEFBQ3RCO0FBRkQsQUFHSDtBQVBELEFBUUE7d0NBQUEsQUFBd0IsVUFBeEIsQUFBa0MsZUFBZSxVQUFBLEFBQVUsV0FBVyxBQUNsRTt3QkFBSSxRQUFKLEFBQVksQUFDWjt3QkFBSSxDQUFBLEFBQUMsYUFBYyxLQUFBLEFBQUssV0FBTCxBQUFnQixRQUFoQixBQUF3QixhQUFhLENBQXhELEFBQXlELEdBQUksQUFDekQ7QUFDSDtBQUNEO3dCQUFJLEtBQUEsQUFBSyw0QkFBNEIsVUFBckMsQUFBSSxBQUEyQyxlQUFlLEFBQzFEOzhCQUFNLElBQUEsQUFBSSxNQUFNLHVEQUF1RCxVQUF2RCxBQUFpRSxlQUFqRSxBQUNWLHFDQUFxQyxLQUQzQyxBQUFNLEFBQzBDLEFBQ25EO0FBQ0Q7d0JBQUksVUFBQSxBQUFVLGtCQUFrQixLQUFBLEFBQUsseUJBQXlCLFVBQTlELEFBQWdDLEFBQThCLEFBQVUsaUJBQWlCLEFBQ3JGOzhCQUFNLElBQUEsQUFBSSxNQUFNLG1EQUFtRCxVQUFuRCxBQUFtRCxBQUFVLGlCQUE3RCxBQUNWLHFDQUFxQyxLQUQzQyxBQUFNLEFBQzBDLEFBQ25EO0FBQ0Q7OEJBQUEsQUFBVSxxQkFBVixBQUErQixBQUMvQjt5QkFBQSxBQUFLLFdBQUwsQUFBZ0IsS0FBaEIsQUFBcUIsQUFDckI7OEJBQUEsQUFBVSxjQUFjLFVBQUEsQUFBVSxLQUFLLEFBQ25DOzhCQUFBLEFBQU0sV0FBTixBQUFpQixRQUFRLEVBQUUsUUFBM0IsQUFBeUIsQUFBVSxBQUN0QztBQUZELEFBR0g7QUFsQkQsQUFtQkE7d0NBQUEsQUFBd0IsVUFBeEIsQUFBa0MsZ0JBQWdCLFVBQUEsQUFBVSxrQkFBa0IsQUFDMUU7eUJBQUEsQUFBSyxXQUFMLEFBQWdCLFFBQWhCLEFBQXdCLEFBQzNCO0FBRkQsQUFHQTtBQUNBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLGdCQUFnQixZQUFZLEFBQzFEOzJCQUFPLEtBQUEsQUFBSyxXQUFMLEFBQWdCLE1BQXZCLEFBQU8sQUFBc0IsQUFDaEM7QUFGRCxBQUdBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLFFBQVEsVUFBQSxBQUFVLGNBQWMsQUFDOUQ7MkJBQU8sS0FBQSxBQUFLLDRCQUFaLEFBQU8sQUFBaUMsQUFDM0M7QUFGRCxBQUdBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLGtDQUFrQyxVQUFBLEFBQVUsY0FBYyxBQUN4Rjt3QkFBSSxTQUFKLEFBQWEsQUFDYjt3QkFBSSxDQUFKLEFBQUssY0FDRCxPQUFBLEFBQU8sQUFDWDt5QkFBQSxBQUFLLFdBQUwsQUFBZ0IsUUFBUSxVQUFBLEFBQVUsV0FBVyxBQUN6Qzs0QkFBSSxVQUFBLEFBQVUsZ0JBQWQsQUFBOEIsY0FBYyxBQUN4QzttQ0FBQSxBQUFPLEtBQVAsQUFBWSxBQUNmO0FBQ0o7QUFKRCxBQUtBOzJCQUFBLEFBQU8sQUFDVjtBQVZELEFBV0E7d0NBQUEsQUFBd0IsVUFBeEIsQUFBa0MsOEJBQThCLFVBQUEsQUFBVSxjQUFjLEFBQ3BGO3dCQUFJLENBQUosQUFBSyxjQUNELE9BQUEsQUFBTyxBQUNYO3lCQUFLLElBQUksSUFBVCxBQUFhLEdBQUcsSUFBSSxLQUFBLEFBQUssV0FBekIsQUFBb0MsUUFBcEMsQUFBNEMsS0FBSyxBQUM3Qzs0QkFBSyxLQUFBLEFBQUssV0FBTCxBQUFnQixHQUFoQixBQUFtQixnQkFBeEIsQUFBd0MsY0FBZSxBQUNuRDttQ0FBTyxLQUFBLEFBQUssV0FBWixBQUFPLEFBQWdCLEFBQzFCO0FBQ0o7QUFDRDsyQkFBQSxBQUFPLEFBQ1Y7QUFURCxBQVVBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLDJCQUEyQixVQUFBLEFBQVUsV0FBVyxBQUM5RTt3QkFBSSxDQUFKLEFBQUssV0FDRCxPQUFBLEFBQU8sQUFDWDt5QkFBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQUksS0FBQSxBQUFLLFdBQXpCLEFBQW9DLFFBQXBDLEFBQTRDLEtBQUssQUFDN0M7NEJBQUksS0FBQSxBQUFLLFdBQUwsQUFBZ0IsR0FBaEIsQUFBbUIsa0JBQXZCLEFBQXlDLFdBQVcsQUFDaEQ7bUNBQU8sS0FBQSxBQUFLLFdBQVosQUFBTyxBQUFnQixBQUMxQjtBQUNKO0FBQ0Q7QUFDQTsyQkFBQSxBQUFPLEFBQ1Y7QUFWRCxBQVdBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLG9CQUFvQixVQUFBLEFBQVUsSUFBSSxBQUNoRTt3QkFBSSxDQUFKLEFBQUssSUFDRCxPQUFBLEFBQU8sQUFDWDt5QkFBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQUksS0FBQSxBQUFLLFdBQXpCLEFBQW9DLFFBQXBDLEFBQTRDLEtBQUssQUFDN0M7NEJBQUksS0FBQSxBQUFLLFdBQUwsQUFBZ0IsR0FBaEIsQUFBbUIsTUFBdkIsQUFBNkIsSUFBSSxBQUM3QjttQ0FBTyxLQUFBLEFBQUssV0FBWixBQUFPLEFBQWdCLEFBQzFCO0FBQ0o7QUFDRDtBQUNBOzJCQUFBLEFBQU8sQUFDVjtBQVZELEFBV0E7d0NBQUEsQUFBd0IsVUFBeEIsQUFBa0MsV0FBVyxVQUFBLEFBQVUseUJBQXlCLEFBQzVFO3lCQUFBLEFBQUssV0FBTCxBQUFnQixRQUFRLFVBQUEsQUFBVSxpQkFBaUIsQUFDL0M7NEJBQUksa0JBQWtCLHdCQUFBLEFBQXdCLE1BQU0sZ0JBQXBELEFBQXNCLEFBQThDLEFBQ3BFOzRCQUFBLEFBQUksaUJBQWlCLEFBQ2pCOzRDQUFBLEFBQWdCLFNBQWhCLEFBQXlCLEFBQzVCO0FBQ0o7QUFMRCxBQU1IO0FBUEQsQUFRQTt1QkFBQSxBQUFPLEFBQ1Y7QUFySEQsQUFBK0IsYUFBQTtBQXNIL0Isb0JBQUEsQUFBUSwwQkFBUixBQUFrQyxBQUVsQzs7QUMzSEE7O0FBQ0EsZ0JBQUksb0JBQXFCLEFBQ3JCO3lCQUFBLEFBQVMsUUFBUSxBQUNoQixDQUNEO3NCQUFBLEFBQU0sVUFBTixBQUFnQixTQUFTLFVBQUEsQUFBVTsyQkFDeEIsS0FBQSxBQUFLLFVBRDZCLEFBQ3pDLEFBQU8sQUFBZSxVQURtQixBQUN6QyxDQUFpQyxBQUNwQztBQUZELEFBR0E7c0JBQUEsQUFBTSxVQUFOLEFBQWdCLFNBQVMsVUFBQSxBQUFVLGFBQWEsQUFDNUM7d0JBQUksT0FBQSxBQUFPLGVBQVgsQUFBMEIsVUFBVSxBQUNoQzsrQkFBTyxLQUFBLEFBQUssTUFBWixBQUFPLEFBQVcsQUFDckI7QUFGRCwyQkFHSyxBQUNEOytCQUFBLEFBQU8sQUFDVjtBQUNKO0FBUEQsQUFRQTt1QkFBQSxBQUFPLEFBQ1Y7QUFmRCxBQUFhLGFBQUE7QUFnQmIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUNwQkE7O0FBQ0EsZ0JBQUksc0JBQXVCLEFBQ3ZCO3lCQUFBLEFBQVMsVUFBVSxBQUNmO3lCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ2I7QUFDRDt1QkFBQSxBQUFPLEFBQ1Y7QUFMRCxBQUFlLGFBQUE7QUFNZixvQkFBQSxBQUFRLGFBQVIsQUFBcUI7QUFDckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCLEFBRXJCOztBQ1ZBOztBQUNBLGdCQUFJLHdCQUF3QixRQUE1QixBQUE0QixBQUFRO0FBQ3BDO0FBQ0EsZ0JBQUksK0JBQWdDLEFBQ2hDO3lCQUFBLEFBQVMsbUJBQW1CLEFBQzNCLENBQ0Q7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsUUFBUSxVQUFBLEFBQVUsT0FBTyxBQUNoRDsyQkFBTyxDQUFDLE1BQVIsQUFBTyxBQUFDLEFBQU0sQUFDakI7QUFGRCxBQUdBO3VCQUFBLEFBQU8sQUFDVjtBQVBELEFBQXdCLGFBQUE7QUFReEIsb0JBQUEsQUFBUSxtQkFBUixBQUEyQjtBQUMzQjtBQUNBLGdCQUFJLGtDQUFtQyxBQUNuQztBQUNBO3lCQUFBLEFBQVMsb0JBQVQsQUFBNkIsU0FBN0IsQUFBc0MsY0FBYyxBQUNoRDt3QkFBSSxZQUFZLEtBQWhCLEFBQXFCLEdBQUcsQUFBRTtrQ0FBQSxBQUFVLEFBQU87QUFDM0M7d0JBQUksaUJBQWlCLEtBQXJCLEFBQTBCLEdBQUcsQUFBRTt1Q0FBQSxBQUFlLEFBQUs7QUFDbkQ7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDdkI7QUFDRDtvQ0FBQSxBQUFvQixVQUFwQixBQUE4QixRQUFRLFVBQUEsQUFBVSxPQUFPLEFBQ25EO3dCQUFJLFFBQUosQUFBWSxBQUNaO3dCQUFJLElBQUksS0FBQSxBQUFLLElBQUksTUFBVCxBQUFlLFFBQVEsS0FBL0IsQUFBUSxBQUE0QixBQUNwQzt5QkFBSyxJQUFJLFVBQVQsQUFBbUIsR0FBRyxVQUF0QixBQUFnQyxHQUFoQyxBQUFtQyxXQUFXLEFBQzFDOzRCQUFJLFlBQVksTUFBaEIsQUFBZ0IsQUFBTSxBQUN0Qjs0QkFBSSxLQUFBLEFBQUssV0FBVyxVQUFBLEFBQVUsbUJBQW1CLHNCQUE3QyxBQUE2QyxBQUFzQixjQUFlLENBQUMsVUFBdkYsQUFBaUcsU0FBVSxBQUN2RztnQ0FBSSxRQUFKLEFBQVksQUFDWjtnQ0FBSSxTQUFTLFVBQWIsQUFBdUIsQUFDdkI7aUNBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFJLE1BQUosQUFBVSxVQUFVLFNBQXBDLEFBQTZDLE1BQTdDLEFBQW1ELEtBQUssQUFDcEQ7b0NBQUksTUFBQSxBQUFNLEdBQU4sQUFBUyxtQkFBbUIsc0JBQWhDLEFBQWdDLEFBQXNCLFlBQVksQUFDOUQ7d0NBQUksV0FBVyxNQUFBLEFBQU0sR0FBckIsQUFBd0IsQUFDeEI7d0NBQUksT0FBQSxBQUFPLGVBQWUsU0FBdEIsQUFBK0IsZUFBZSxTQUFBLEFBQVMsWUFBWSxPQUF2RSxBQUE4RSxVQUFVLEFBQ3BGO2dEQUFBLEFBQVEsQUFDWDtBQUNKO0FBQ0o7QUFDRDtnQ0FBQSxBQUFJLE9BQU8sQUFDUDtzQ0FBQSxBQUFNLFdBQVcsT0FEVixBQUNQLEFBQXdCLFVBQVUsQUFDckM7QUFGRCxtQ0FHSyxBQUNEO3NDQUFBLEFBQU0sS0FETCxBQUNELEFBQVcsWUFBWSxBQUMxQjtBQUNKO0FBakJELCtCQWtCSyxBQUNEO2tDQUFBLEFBQU0sS0FBTixBQUFXLEFBQ2Q7QUFDRDs0QkFBSSxVQUFBLEFBQVUsV0FDVCxVQUFBLEFBQVUsUUFBVixBQUFrQixnQkFEdkIsQUFDdUMsOENBRHZDLEFBQ3NGOzBCQUNwRixBQUNFO0FBREYsdUNBQ1MsQUFDVjtBQUNKO0FBQ0Q7MkJBQUEsQUFBTyxBQUNWO0FBakNELEFBa0NBO3VCQUFBLEFBQU8sQUFDVjtBQTNDRCxBQUEyQixhQUFBO0FBNEMzQixvQkFBQSxBQUFRLHNCQUFSLEFBQThCLEFBRTlCOztBQzNEQTs7QUFDQSxnQkFBSSwrQkFBZ0MsQUFDaEM7eUJBQUEsQUFBUyxtQkFBbUIsQUFDM0IsQ0FDRDtpQ0FBQSxBQUFpQiwwQkFBakIsQUFBMkMsQUFDM0M7aUNBQUEsQUFBaUIsOEJBQThCLGlCQUFBLEFBQWlCLDBCQUFoRSxBQUEwRixBQUMxRjtpQ0FBQSxBQUFpQiwrQkFBK0IsaUJBQUEsQUFBaUIsMEJBQWpFLEFBQTJGLEFBQzNGO2lDQUFBLEFBQWlCLGlDQUFpQyxpQkFBQSxBQUFpQiwwQkFBbkUsQUFBNkYsQUFDN0Y7aUNBQUEsQUFBaUIsa0NBQWtDLGlCQUFBLEFBQWlCLDBCQUFwRSxBQUE4RixBQUM5RjtpQ0FBQSxBQUFpQixzQ0FBc0MsaUJBQUEsQUFBaUIsMEJBQXhFLEFBQWtHLEFBQ2xHO2lDQUFBLEFBQWlCLCtCQUErQixpQkFBQSxBQUFpQiwwQkFBakUsQUFBMkYsQUFDM0Y7aUNBQUEsQUFBaUIsbUNBQW1DLGlCQUFBLEFBQWlCLDBCQUFyRSxBQUErRixBQUMvRjt1QkFBQSxBQUFPLEFBQ1Y7QUFaRCxBQUF3QixhQUFBO0FBYXhCLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDakJBOztBQUNBLGdCQUFJLFlBQWEsYUFBUSxVQUFULEFBQWMsYUFBYyxVQUFBLEFBQVUsR0FBVixBQUFhLEdBQUcsQUFDeEQ7cUJBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxHQUFHO3dCQUFJLEVBQUEsQUFBRSxlQUFOLEFBQUksQUFBaUIsSUFBSSxFQUFBLEFBQUUsS0FBSyxFQUFqRCxBQUEwQyxBQUFPLEFBQUU7QUFDbkQsMEJBQUEsQUFBUyxLQUFLLEFBQUU7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQUk7QUFDdkM7a0JBQUEsQUFBRSxZQUFZLE1BQUEsQUFBTSxPQUFPLE9BQUEsQUFBTyxPQUFwQixBQUFhLEFBQWMsTUFBTSxHQUFBLEFBQUcsWUFBWSxFQUFmLEFBQWlCLFdBQVcsSUFBM0UsQUFBYyxBQUE2RCxBQUFJLEFBQ2xGO0FBSkQ7QUFLQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7QUFDeEIsZ0JBQUkscUJBQXFCLFFBQXpCLEFBQXlCLEFBQVE7QUFDakMsZ0JBQUksaUNBQXdCLEFBQVUsUUFBUSxBQUMxQzswQkFBQSxBQUFVLHNCQUFWLEFBQWdDLEFBQ2hDO3lCQUFBLEFBQVMsdUJBQXVCLEFBQzVCOzJCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ1o7eUJBQUEsQUFBSyxLQUFLLG1CQUFBLEFBQW1CLFdBQTdCLEFBQXdDLEFBQ3hDO3lCQUFBLEFBQUssWUFBTCxBQUFpQixBQUNwQjtBQUNEO3VCQUFBLEFBQU8sQUFDVjtBQVIyQixhQUFBLENBUTFCLFVBUkYsQUFBNEIsQUFRMUIsQUFBVTtBQUNaLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDcEJBOztBQUNBLGdCQUFJLFlBQWEsYUFBUSxVQUFULEFBQWMsYUFBYyxVQUFBLEFBQVUsR0FBVixBQUFhLEdBQUcsQUFDeEQ7cUJBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxHQUFHO3dCQUFJLEVBQUEsQUFBRSxlQUFOLEFBQUksQUFBaUIsSUFBSSxFQUFBLEFBQUUsS0FBSyxFQUFqRCxBQUEwQyxBQUFPLEFBQUU7QUFDbkQsMEJBQUEsQUFBUyxLQUFLLEFBQUU7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQUk7QUFDdkM7a0JBQUEsQUFBRSxZQUFZLE1BQUEsQUFBTSxPQUFPLE9BQUEsQUFBTyxPQUFwQixBQUFhLEFBQWMsTUFBTSxHQUFBLEFBQUcsWUFBWSxFQUFmLEFBQWlCLFdBQVcsSUFBM0UsQUFBYyxBQUE2RCxBQUFJLEFBQ2xGO0FBSkQ7QUFLQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7QUFDeEIsZ0JBQUksMkNBQWtDLEFBQVUsUUFBUSxBQUNwRDswQkFBQSxBQUFVLGdDQUFWLEFBQTBDLEFBQzFDO3lCQUFBLEFBQVMsK0JBQVQsQUFBd0MsbUJBQW1CLEFBQ3ZEOzJCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ1o7eUJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCO3lCQUFBLEFBQUssaUJBQUwsQUFBc0IsQUFDdEI7eUJBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjt5QkFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDakI7eUJBQUEsQUFBSyxPQUFPLGtCQUFaLEFBQThCLEFBQzlCO3lCQUFBLEFBQUssU0FBUyxrQkFBZCxBQUFnQyxBQUNoQzt3QkFBSSxRQUFRLEtBQVosQUFBaUIsQUFDakI7c0NBQUEsQUFBa0IsZ0JBQWxCLEFBQWtDLFFBQVEsVUFBQSxBQUFVLE1BQU0sQUFDdEQ7OEJBQUEsQUFBTTswQ0FDWSxLQURQLEFBQ1ksQUFDbkI7Z0NBQUksS0FGRyxBQUVFLEFBQ1Q7dUNBQVcsS0FISixBQUdJLEFBQUssQUFDaEI7bUNBQU8sS0FKWCxBQUFXLEFBSUEsQUFBSyxBQUVuQjtBQU5jLEFBQ1A7QUFGUixBQVFIO0FBQ0Q7dUJBQUEsQUFBTyxBQUNWO0FBckJxQyxhQUFBLENBcUJwQyxVQXJCRixBQUFzQyxBQXFCcEMsQUFBVTtBQUNaLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDaENBOztBQUNBLGdCQUFJLFlBQWEsYUFBUSxVQUFULEFBQWMsYUFBYyxVQUFBLEFBQVUsR0FBVixBQUFhLEdBQUcsQUFDeEQ7cUJBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxHQUFHO3dCQUFJLEVBQUEsQUFBRSxlQUFOLEFBQUksQUFBaUIsSUFBSSxFQUFBLEFBQUUsS0FBSyxFQUFqRCxBQUEwQyxBQUFPLEFBQUU7QUFDbkQsMEJBQUEsQUFBUyxLQUFLLEFBQUU7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQUk7QUFDdkM7a0JBQUEsQUFBRSxZQUFZLE1BQUEsQUFBTSxPQUFPLE9BQUEsQUFBTyxPQUFwQixBQUFhLEFBQWMsTUFBTSxHQUFBLEFBQUcsWUFBWSxFQUFmLEFBQWlCLFdBQVcsSUFBM0UsQUFBYyxBQUE2RCxBQUFJLEFBQ2xGO0FBSkQ7QUFLQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7QUFDeEIsZ0JBQUksaURBQXdDLEFBQVUsUUFBUSxBQUMxRDswQkFBQSxBQUFVLHNDQUFWLEFBQWdELEFBQ2hEO3lCQUFBLEFBQVMscUNBQVQsQUFBOEMsTUFBTSxBQUNoRDsyQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNaO3lCQUFBLEFBQUssT0FBTCxBQUFZLEFBQ1o7eUJBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjt5QkFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDcEI7QUFDRDt1QkFBQSxBQUFPLEFBQ1Y7QUFUMkMsYUFBQSxDQVMxQyxVQVRGLEFBQTRDLEFBUzFDLEFBQVU7QUFDWixvQkFBQSxBQUFRLGFBQVIsQUFBcUI7QUFDckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCLEFBRXJCOztBQ3BCQTs7QUFDQSxnQkFBSSxZQUFhLGFBQVEsVUFBVCxBQUFjLGFBQWMsVUFBQSxBQUFVLEdBQVYsQUFBYSxHQUFHLEFBQ3hEO3FCQUFLLElBQUwsQUFBUyxLQUFULEFBQWMsR0FBRzt3QkFBSSxFQUFBLEFBQUUsZUFBTixBQUFJLEFBQWlCLElBQUksRUFBQSxBQUFFLEtBQUssRUFBakQsQUFBMEMsQUFBTyxBQUFFO0FBQ25ELDBCQUFBLEFBQVMsS0FBSyxBQUFFO3lCQUFBLEFBQUssY0FBTCxBQUFtQixBQUFJO0FBQ3ZDO2tCQUFBLEFBQUUsWUFBWSxNQUFBLEFBQU0sT0FBTyxPQUFBLEFBQU8sT0FBcEIsQUFBYSxBQUFjLE1BQU0sR0FBQSxBQUFHLFlBQVksRUFBZixBQUFpQixXQUFXLElBQTNFLEFBQWMsQUFBNkQsQUFBSSxBQUNsRjtBQUpEO0FBS0EsZ0JBQUksWUFBWSxRQUFoQixBQUFnQixBQUFRO0FBQ3hCLGdCQUFJLHFCQUFxQixRQUF6QixBQUF5QixBQUFRO0FBQ2pDLGdCQUFJLGtDQUF5QixBQUFVLFFBQVEsQUFDM0M7MEJBQUEsQUFBVSx1QkFBVixBQUFpQyxBQUNqQzt5QkFBQSxBQUFTLHdCQUF3QixBQUM3QjsyQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNaO3lCQUFBLEFBQUssS0FBSyxtQkFBQSxBQUFtQixXQUE3QixBQUF3QyxBQUN4Qzt5QkFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDcEI7QUFDRDt1QkFBQSxBQUFPLEFBQ1Y7QUFSNEIsYUFBQSxDQVEzQixVQVJGLEFBQTZCLEFBUTNCLEFBQVU7QUFDWixvQkFBQSxBQUFRLGFBQVIsQUFBcUI7QUFDckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCLEFBRXJCOztBQ3BCQTs7QUFDQSxnQkFBSSxvQkFBb0IsUUFBeEIsQUFBd0IsQUFBUTtBQUNoQyxnQkFBSSxrQkFBa0IsUUFBdEIsQUFBc0IsQUFBUTtBQUM5QixnQkFBSSxxQkFBcUIsUUFBekIsQUFBeUIsQUFBUTtBQUNqQyxnQkFBSSxvQkFBb0IsUUFBeEIsQUFBd0IsQUFBUTtBQUNoQyxnQkFBSSxrQkFBa0IsUUFBdEIsQUFBc0IsQUFBUTtBQUM5QixnQkFBSSw2QkFBOEIsQUFDOUI7eUJBQUEsQUFBUyxpQkFBaUIsQUFDdEI7eUJBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZDt5QkFBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDaEI7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUNyQjt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDdkI7QUFDRDsrQkFBQSxBQUFlLFVBQWYsQUFBeUIsTUFBTSxVQUFBLEFBQVUsS0FBSyxBQUMxQzt5QkFBQSxBQUFLLE9BQUwsQUFBWSxBQUNaOzJCQUFBLEFBQU8sQUFDVjtBQUhELEFBSUE7K0JBQUEsQUFBZSxVQUFmLEFBQXlCLFFBQVEsVUFBQSxBQUFVLE9BQU8sQUFDOUM7eUJBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZDsyQkFBQSxBQUFPLEFBQ1Y7QUFIRCxBQUlBOytCQUFBLEFBQWUsVUFBZixBQUF5QixVQUFVLFVBQUEsQUFBVSxTQUFTLEFBQ2xEO3lCQUFBLEFBQUssV0FBTCxBQUFnQixBQUNoQjsyQkFBQSxBQUFPLEFBQ1Y7QUFIRCxBQUlBOytCQUFBLEFBQWUsVUFBZixBQUF5QixlQUFlLFVBQUEsQUFBVSxjQUFjLEFBQzVEO3lCQUFBLEFBQUssZ0JBQUwsQUFBcUIsQUFDckI7MkJBQUEsQUFBTyxBQUNWO0FBSEQsQUFJQTsrQkFBQSxBQUFlLFVBQWYsQUFBeUIsY0FBYyxVQUFBLEFBQVUsYUFBYSxBQUMxRDt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDcEI7MkJBQUEsQUFBTyxBQUNWO0FBSEQsQUFJQTsrQkFBQSxBQUFlLFVBQWYsQUFBeUIsZUFBZSxVQUFBLEFBQVUsY0FBYyxBQUM1RDt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLEFBQ3JCOzJCQUFBLEFBQU8sQUFDVjtBQUhELEFBSUE7K0JBQUEsQUFBZSxVQUFmLEFBQXlCLGNBQWMsVUFBQSxBQUFVLGFBQWEsQUFDMUQ7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLEFBQ3BCOzJCQUFBLEFBQU8sQUFDVjtBQUhELEFBSUE7K0JBQUEsQUFBZSxVQUFmLEFBQXlCLFFBQVEsWUFBWSxBQUN6Qzs0QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3dCQUFJLGdCQUFnQixJQUFJLGdCQUF4QixBQUFvQixBQUFJLEFBQWdCLEFBQ3hDO3dCQUFBLEFBQUksQUFDSjt3QkFBSSxLQUFBLEFBQUssUUFBTCxBQUFhLFFBQVEsS0FBQSxBQUFLLEtBQUwsQUFBVSxTQUFuQyxBQUE0QyxHQUFHLEFBQzNDO3NDQUFjLElBQUksa0JBQUosQUFBSSxBQUFrQixXQUFXLEtBQWpDLEFBQXNDLE1BQU0sS0FBNUMsQUFBaUQsUUFBakQsQUFBeUQsU0FBUyxLQUFsRSxBQUF1RSxlQUFlLEtBQXRGLEFBQTJGLGNBQWMsS0FBdkgsQUFBYyxBQUE4RyxBQUMvSDtBQUZELDJCQUdLLEFBQ0Q7c0NBQWMsSUFBSSxnQkFBbEIsQUFBYyxBQUFJLEFBQWdCLEFBQ3JDO0FBQ0Q7a0NBQUEsQUFBYyxtQkFBbUIsSUFBSSxrQkFBSixBQUFzQixnQkFBdEIsQUFBc0MsYUFBdEMsQUFBbUQsZUFBZSxLQUFsRSxBQUF1RSxVQUFVLEtBQWxILEFBQWlDLEFBQXNGLEFBQ3ZIO2tDQUFBLEFBQWMsb0JBQW9CLElBQUksbUJBQUosQUFBdUIsaUJBQXpELEFBQWtDLEFBQXdDLEFBQzFFOzRCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7MkJBQUEsQUFBTyxBQUNWO0FBZEQsQUFlQTt1QkFBQSxBQUFPLEFBQ1Y7QUFuREQsQUFBc0IsYUFBQTtBQW9EdEIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUM3REE7O0FBQ0EsZ0JBQUksdUJBQXdCLEFBQ3hCO3lCQUFBLEFBQVMsV0FBVyxBQUNoQjt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLEFBQ3hCO0FBQ0Q7eUJBQUEsQUFBUyxVQUFULEFBQW1CLFVBQVUsVUFBQSxBQUFVLGNBQWMsQUFDakQ7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEtBQW5CLEFBQXdCLEFBQzNCO0FBRkQsQUFHQTt5QkFBQSxBQUFTLFVBQVQsQUFBbUIsVUFBVSxVQUFBLEFBQVUsT0FBTyxBQUMxQzt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsUUFBUSxVQUFBLEFBQVUsUUFBUSxBQUFFOytCQUFPLE9BQVAsQUFBTyxBQUFPLEFBQVM7QUFBdEUsQUFDSDtBQUZELEFBR0E7dUJBQUEsQUFBTyxBQUNWO0FBWEQsQUFBZ0IsYUFBQTtBQVloQixvQkFBQSxBQUFRLGFBQVIsQUFBcUI7QUFDckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCLEFBRXJCOztBQ2hCQTs7QUFDQSxnQkFBSSxVQUFVLFFBQWQsQUFBYyxBQUFRO0FBQ3RCLGdCQUFJLDhCQUErQixBQUMvQjt5QkFBQSxBQUFTLGdCQUFULEFBQXlCLEtBQXpCLEFBQThCLE9BQTlCLEFBQXFDLFNBQXJDLEFBQThDLGNBQTlDLEFBQTRELGFBQTVELEFBQXlFLGFBQWEsQUFDbEY7d0JBQUksVUFBVSxLQUFkLEFBQW1CLEdBQUcsQUFBRTtnQ0FBQSxBQUFRLEFBQU87QUFDdkM7d0JBQUksWUFBWSxLQUFoQixBQUFxQixHQUFHLEFBQUU7a0NBQUEsQUFBVSxBQUFVO0FBQzlDO3dCQUFJLGlCQUFpQixLQUFyQixBQUEwQixHQUFHLEFBQUU7dUNBQUEsQUFBZSxBQUFPO0FBQ3JEO3dCQUFJLGdCQUFnQixLQUFwQixBQUF5QixHQUFHLEFBQUU7c0NBQUEsQUFBYyxBQUFRO0FBQ3BEO3dCQUFJLGdCQUFnQixLQUFwQixBQUF5QixHQUFHLEFBQUU7c0NBQUEsQUFBYyxBQUFPO0FBQ25EO3lCQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjt5QkFBQSxBQUFLO2tDQUFZLEFBQ0gsQUFDVjtpQ0FGSixBQUFpQixBQUVKLEFBRWI7QUFKaUIsQUFDYjt5QkFHSixBQUFLLGVBQUwsQUFBb0IsQUFDcEI7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ25CO3lCQUFBLEFBQUssY0FBTCxBQUFtQixBQUNuQjt5QkFBQSxBQUFLLE9BQU8sSUFBWixBQUFZLEFBQUksQUFDaEI7eUJBQUEsQUFBSyxNQUFNLElBQVgsQUFBVyxBQUFJLEFBQ2Y7d0JBQUksS0FBSixBQUFTLGFBQWEsQUFDbEI7NEJBQUkscUJBQXFCLEtBQXpCLEFBQThCLE1BQU0sQUFDaEM7aUNBQUEsQUFBSyxLQUFMLEFBQVUsa0JBRHNCLEFBQ2hDLEFBQTRCLE1BQU0sQUFDbEM7aUNBQUEsQUFBSyxJQUFMLEFBQVMsa0JBQVQsQUFBMkIsQUFDOUI7QUFDSjtBQUNEO3lCQUFBLEFBQUssUUFBUSxJQUFJLFFBQWpCLEFBQWEsQUFBSSxBQUFRLEFBQ3pCO3dCQUFBLEFBQUksT0FBTyxBQUNQO2dDQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7NkJBQUEsQUFBSyxBQUNSO0FBQ0o7QUFDRDtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixXQUFXLFVBQUEsQUFBVSxVQUFWLEFBQW9CLFFBQVEsQUFDN0Q7d0JBQUksUUFBSixBQUFZLEFBQ1o7eUJBQUEsQUFBSyxLQUFMLEFBQVUsVUFBVSxVQUFBLEFBQVUsS0FBSyxBQUMvQjs4QkFBQSxBQUFNLFlBQU4sQUFBa0IsV0FBbEIsQUFBNkIsQUFDN0I7K0JBQUEsQUFBTyxBQUNWO0FBSEQsQUFJQTt5QkFBQSxBQUFLLEtBQUwsQUFBVSxxQkFBcUIsVUFBQSxBQUFVLEtBQUssQUFDMUM7NEJBQUksTUFBQSxBQUFNLEtBQU4sQUFBVyxjQUFjLE1BQUEsQUFBTSxVQUFuQyxBQUE2QyxVQUFVLEFBQ25EO2dDQUFJLE1BQUEsQUFBTSxLQUFOLEFBQVcsVUFBVSxNQUFBLEFBQU0sVUFBL0IsQUFBeUMsU0FBUyxBQUM5QztvQ0FBSSxlQUFlLE1BQUEsQUFBTSxLQUF6QixBQUE4QixBQUM5QjtvQ0FBSSxhQUFBLEFBQWEsT0FBYixBQUFvQixTQUF4QixBQUFpQyxHQUFHLEFBQ2hDO3dDQUFJLEFBQ0E7NENBQUksbUJBQW1CLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBbkMsQUFBdUIsQUFBbUIsQUFDMUM7K0NBQUEsQUFBTyxBQUNWO0FBSEQsc0NBSUEsT0FBQSxBQUFPLEtBQUssQUFDUjtnREFBQSxBQUFRLElBQVIsQUFBWSx5Q0FBWixBQUFxRCxBQUNyRDtnREFBQSxBQUFRLElBQVIsQUFBWSw0QkFBWixBQUF3QyxBQUN4Qzs4Q0FBQSxBQUFNLFlBQU4sQUFBa0IsZUFBZSw4Q0FBakMsQUFBK0UsQUFDL0U7K0NBQUEsQUFBTyxBQUNWO0FBQ0o7QUFYRCx1Q0FZSyxBQUNEOzBDQUFBLEFBQU0sWUFBTixBQUFrQixlQUFsQixBQUFpQyxBQUNqQzsyQ0FBQSxBQUFPLEFBQ1Y7QUFDSjtBQWxCRCxtQ0FtQkssQUFDRDtzQ0FBQSxBQUFNLFlBQU4sQUFBa0IsZUFBbEIsQUFBaUMsQUFDakM7dUNBQUEsQUFBTyxBQUNWO0FBQ0o7QUFDSjtBQTFCRCxBQTJCQTt5QkFBQSxBQUFLLEtBQUwsQUFBVSxLQUFWLEFBQWUsUUFBUSxLQUF2QixBQUE0QixLQUE1QixBQUFpQyxBQUNqQzt5QkFBQSxBQUFLLFdBQVcsS0FBaEIsQUFBcUIsQUFDckI7d0JBQUksc0JBQXNCLEtBQTFCLEFBQStCLE1BQU0sQUFDakM7NkJBQUEsQUFBSyxLQUFMLEFBQVUsaUJBQWlCLCtCQUErQixLQUR6QixBQUNqQyxBQUErRCxVQUFVLEFBQzVFO0FBQ0Q7eUJBQUEsQUFBSyxLQUFMLEFBQVUsS0FBSyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQTFCLEFBQWUsQUFBa0IsQUFDcEM7QUF2Q0QsQUF3Q0E7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsYUFBYSxVQUFBLEFBQVUsU0FBUyxBQUN0RDt3QkFBSSxLQUFKLEFBQVMsYUFBYSxBQUNsQjs2QkFBSyxJQUFMLEFBQVMsS0FBSyxLQUFkLEFBQW1CLGFBQWEsQUFDNUI7Z0NBQUksS0FBQSxBQUFLLFlBQUwsQUFBaUIsZUFBckIsQUFBSSxBQUFnQyxJQUFJLEFBQ3BDO3dDQUFBLEFBQVEsaUJBQVIsQUFBeUIsR0FBRyxLQUFBLEFBQUssWUFBakMsQUFBNEIsQUFBaUIsQUFDaEQ7QUFDSjtBQUNKO0FBQ0o7QUFSRCxBQVNBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLGNBQWMsVUFBQSxBQUFVLE1BQVYsQUFBZ0IsU0FBUyxBQUM3RDt3QkFBSSxhQUFhLEVBQUUsTUFBRixBQUFRLE1BQU0sS0FBSyxLQUFuQixBQUF3QixLQUFLLFlBQVksS0FBQSxBQUFLLEtBQTlDLEFBQW1ELFFBQVEsU0FBNUUsQUFBaUIsQUFBb0UsQUFDckY7d0JBQUksS0FBSixBQUFTLGNBQWMsQUFDbkI7NkJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ3JCO0FBRkQsMkJBR0ssQUFDRDtnQ0FBQSxBQUFRLElBQVIsQUFBWSxvQkFBWixBQUFnQyxBQUNuQztBQUNKO0FBUkQsQUFTQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixTQUFTLFVBQUEsQUFBVSxTQUFTLEFBQ2xEO3lCQUFBLEFBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxRQUFRLEtBQXRCLEFBQTJCLEtBQTNCLEFBQWdDLEFBQ2hDO3lCQUFBLEFBQUssV0FBVyxLQUFoQixBQUFxQixBQUNyQjt5QkFBQSxBQUFLLElBQUwsQUFBUyxLQUFLLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBTyxDQUFoQyxBQUFjLEFBQWtCLEFBQUMsQUFDcEM7QUFKRCxBQUtBO0FBQ0E7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsYUFBYSxZQUFZLEFBQy9DO3lCQUFBLEFBQUssS0FBTCxBQUFVLEtBQVYsQUFBZSxRQUFRLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxlQUFsQyxBQUFpRCxBQUNqRDt5QkFBQSxBQUFLLEtBQUwsQUFBVSxBQUNiO0FBSEQsQUFJQTt1QkFBQSxBQUFPLEFBQ1Y7QUFuR0QsQUFBdUIsYUFBQTtBQW9HdkIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUN6R0E7O0FBQ0EsZ0JBQUksWUFBYSxhQUFRLFVBQVQsQUFBYyxhQUFjLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUN4RDtxQkFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7d0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUNuRCwwQkFBQSxBQUFTLEtBQUssQUFBRTt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFBSTtBQUN2QztrQkFBQSxBQUFFLFlBQVksTUFBQSxBQUFNLE9BQU8sT0FBQSxBQUFPLE9BQXBCLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRDtBQUtBLGdCQUFJLGtCQUFrQixRQUF0QixBQUFzQixBQUFRO0FBQzlCLGdCQUFJLHFCQUFxQixRQUF6QixBQUF5QixBQUFRO0FBQ2pDLGdCQUFJLHFDQUE0QixBQUFVLFFBQVEsQUFDOUM7MEJBQUEsQUFBVSwwQkFBVixBQUFvQyxBQUNwQzt5QkFBQSxBQUFTLDJCQUEyQixBQUNoQzsyQkFBQSxBQUFPLEtBQVAsQUFBWSxNQUFNLG1CQUFBLEFBQW1CLFdBQXJDLEFBQWdELEFBQ2hEO3lCQUFBLEFBQUssWUFBTCxBQUFpQixBQUNwQjtBQUNEO3VCQUFBLEFBQU8sQUFDVjtBQVArQixhQUFBLENBTzlCLGdCQVBGLEFBQWdDLEFBTzlCLEFBQWdCO0FBQ2xCLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDbkJBO0FBQ0E7Ozs7O0FBSUEsZ0JBQUksNEJBQTZCLEFBQzdCO3lCQUFBLEFBQVMsZ0JBQWdCLEFBQ3hCLENBQ0Q7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLFdBQVcsVUFBQSxBQUFVLFVBQVYsQUFBb0IsUUFBUSxBQUMzRDtBQUNBOzJCQUFBLEFBQU8sQUFDVjtBQUhELEFBSUE7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLFNBQVMsVUFBQSxBQUFVLFNBQVMsQUFDaEQ7QUFDSDtBQUZELEFBR0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLFFBQVEsVUFBQSxBQUFVLGdCQUFnQixBQUN0RDtBQUNIO0FBRkQsQUFHQTt1QkFBQSxBQUFPLEFBQ1Y7QUFkRCxBQUFxQixhQUFBO0FBZXJCLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDdkJBOztBQUNBLGdCQUFJLG1CQUFtQixRQUF2QixBQUF1QixBQUFRO0FBQy9CLGdCQUFJLHlCQUF5QixRQUE3QixBQUE2QixBQUFRO0FBQ3JDLGdCQUFJLDBCQUEwQixRQUE5QixBQUE4QixBQUFRO0FBQ3RDLGdCQUFJLDZCQUE2QixRQUFqQyxBQUFpQyxBQUFRO0FBQ3pDLGdCQUFJLHlCQUF5QixRQUE3QixBQUE2QixBQUFRO0FBQ3JDOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQSxxQkFBQSxBQUFTLFFBQVQsQUFBaUIsS0FBakIsQUFBc0IsT0FBdEIsQUFBNkIsU0FBUyxBQUNsQztvQkFBSSxZQUFZLEtBQWhCLEFBQXFCLEdBQUcsQUFBRTs4QkFBQSxBQUFVLEFBQU07QUFDMUM7dUJBQU8sY0FBQSxBQUFjLElBQWQsQUFBa0IsS0FBbEIsQUFBdUIsTUFBdkIsQUFBNkIsT0FBN0IsQUFBb0MsUUFBcEMsQUFBNEMsU0FBbkQsQUFBTyxBQUFxRCxBQUMvRDs7QUFDRCxvQkFBQSxBQUFRLFVBQVIsQUFBa0I7QUFDbEI7QUFDQSxxQkFBQSxBQUFTLGNBQWMsQUFDbkI7dUJBQU8sSUFBSSxpQkFBWCxBQUFPLEFBQUksQUFBaUIsQUFDL0I7O0FBQ0Qsb0JBQUEsQUFBUSxjQUFSLEFBQXNCO0FBQ3RCO0FBQ0EscUJBQUEsQUFBUyw2QkFBNkIsQUFDbEM7dUJBQU8sSUFBSSx1QkFBWCxBQUFPLEFBQUksQUFBdUIsQUFDckM7O0FBQ0Qsb0JBQUEsQUFBUSw2QkFBUixBQUFxQztBQUNyQyxxQkFBQSxBQUFTLDhCQUE4QixBQUNuQzt1QkFBTyxJQUFJLHdCQUFYLEFBQU8sQUFBSSxBQUF3QixBQUN0Qzs7QUFDRCxvQkFBQSxBQUFRLDhCQUFSLEFBQXNDO0FBQ3RDLHFCQUFBLEFBQVMsaUNBQWlDLEFBQ3RDO3VCQUFPLElBQUksMkJBQVgsQUFBTyxBQUFJLEFBQTJCLEFBQ3pDOztBQUNELG9CQUFBLEFBQVEsaUNBQVIsQUFBeUM7QUFDekMscUJBQUEsQUFBUyw2QkFBNkIsQUFDbEM7dUJBQU8sSUFBSSx1QkFBWCxBQUFPLEFBQUksQUFBdUIsQUFDckM7O0FBQ0Qsb0JBQUEsQUFBUSw2QkFBUixBQUFxQyxBQUVyQzs7QUM1Q0E7O0FBQ0EsZ0JBQUksWUFBYSxhQUFRLFVBQVQsQUFBYyxhQUFjLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUN4RDtxQkFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7d0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUNuRCwwQkFBQSxBQUFTLEtBQUssQUFBRTt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFBSTtBQUN2QztrQkFBQSxBQUFFLFlBQVksTUFBQSxBQUFNLE9BQU8sT0FBQSxBQUFPLE9BQXBCLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRDtBQUtBLGdCQUFJLFlBQVksUUFBaEIsQUFBZ0IsQUFBUTtBQUN4QixnQkFBSSwwQkFBaUIsQUFBVSxRQUFRLEFBQ25DOzBCQUFBLEFBQVUsZUFBVixBQUF5QixBQUN6Qjt5QkFBQSxBQUFTLGNBQVQsQUFBdUIsTUFBTSxBQUN6QjsyQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNaO3lCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7eUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ3BCO0FBQ0Q7dUJBQUEsQUFBTyxBQUNWO0FBUm9CLGFBQUEsQ0FRbkIsVUFSRixBQUFxQixBQVFuQixBQUFVO0FBQ1osb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUNuQkE7O0FBQ0EsZ0JBQUksWUFBYSxhQUFRLFVBQVQsQUFBYyxhQUFjLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUN4RDtxQkFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7d0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUNuRCwwQkFBQSxBQUFTLEtBQUssQUFBRTt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFBSTtBQUN2QztrQkFBQSxBQUFFLFlBQVksTUFBQSxBQUFNLE9BQU8sT0FBQSxBQUFPLE9BQXBCLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRDtBQUtBLGdCQUFJLFlBQVksUUFBaEIsQUFBZ0IsQUFBUTtBQUN4QixnQkFBSSxxQkFBcUIsUUFBekIsQUFBeUIsQUFBUTtBQUNqQyxnQkFBSSxpQ0FBd0IsQUFBVSxRQUFRLEFBQzFDOzBCQUFBLEFBQVUsc0JBQVYsQUFBZ0MsQUFDaEM7eUJBQUEsQUFBUyx1QkFBdUIsQUFDNUI7MkJBQUEsQUFBTyxLQUFQLEFBQVksQUFDWjt5QkFBQSxBQUFLLEtBQUssbUJBQUEsQUFBbUIsV0FBN0IsQUFBd0MsQUFDeEM7eUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ3BCO0FBQ0Q7dUJBQUEsQUFBTyxBQUNWO0FBUjJCLGFBQUEsQ0FRMUIsVUFSRixBQUE0QixBQVExQixBQUFVO0FBQ1osb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUNwQkE7O0FBQ0EsZ0JBQUksWUFBYSxhQUFRLFVBQVQsQUFBYyxhQUFjLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUN4RDtxQkFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7d0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUNuRCwwQkFBQSxBQUFTLEtBQUssQUFBRTt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFBSTtBQUN2QztrQkFBQSxBQUFFLFlBQVksTUFBQSxBQUFNLE9BQU8sT0FBQSxBQUFPLE9BQXBCLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRDtBQUtBLGdCQUFJLFlBQVksUUFBaEIsQUFBZ0IsQUFBUTtBQUN4QixnQkFBSSxnQ0FBdUIsQUFBVSxRQUFRLEFBQ3pDOzBCQUFBLEFBQVUscUJBQVYsQUFBK0IsQUFDL0I7eUJBQUEsQUFBUyxvQkFBVCxBQUE2QixhQUE3QixBQUEwQyxVQUExQyxBQUFvRCxVQUFVLEFBQzFEOzJCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ1o7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ25CO3lCQUFBLEFBQUssV0FBTCxBQUFnQixBQUNoQjt5QkFBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDaEI7eUJBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjt5QkFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDcEI7QUFDRDt1QkFBQSxBQUFPLEFBQ1Y7QUFYMEIsYUFBQSxDQVd6QixVQVhGLEFBQTJCLEFBV3pCLEFBQVU7QUFDWixvQkFBQSxBQUFRLGFBQVIsQUFBcUI7QUFDckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCLEFBRXJCOztBQ3RCQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O2dCLEFBR3FCLDBCQUNqQjtxQ0FBQSxBQUFZLGlCQUFpQjswQ0FDekI7OzZDQUFBLEFBQVksQUFDWjs0Q0FBQSxBQUFXLGlCQUFYLEFBQTRCLEFBRTVCOzt5QkFBQSxBQUFLLGtCQUFMLEFBQXVCLEFBQ3ZCO3lCQUFBLEFBQUssZ0JBQWdCLFVBQXJCLEFBQ0E7eUJBQUEsQUFBSyxrQkFBa0IsVUFBdkIsQUFDQTt5QkFBQSxBQUFLLGtCQUFrQixVQUF2QixBQUNBO3lCQUFBLEFBQUssdUJBQXVCLFVBQTVCLEFBQ0E7eUJBQUEsQUFBSyxtQkFBTCxBQUF3QixBQUN4Qjt5QkFBQSxBQUFLLHFCQUFMLEFBQTBCLEFBQzFCO3lCQUFBLEFBQUsscUJBQUwsQUFBMEIsQUFDMUI7eUJBQUEsQUFBSywwQkFBTCxBQUErQixBQUUvQjs7d0JBQUksT0FBSixBQUFXLEFBQ1g7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixZQUFZLFVBQUEsQUFBQyxNQUFELEFBQU8sTUFBUyxBQUM3Qzs0QkFBSSxjQUFjLEtBQUEsQUFBSyxjQUFMLEFBQW1CLElBQXJDLEFBQWtCLEFBQXVCLEFBQ3pDOzRCQUFJLG1CQUFKLEFBQUksQUFBTyxjQUFjLEFBQ3JCO3dDQUFBLEFBQVksUUFBUSxVQUFBLEFBQUMsU0FBWSxBQUM3QjtvQ0FBSSxBQUNBOzRDQUFBLEFBQVEsQUFDWDtBQUZELGtDQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7NENBQUEsQUFBUSxLQUFSLEFBQWEsdUVBQWIsQUFBb0YsTUFBcEYsQUFBMEYsQUFDN0Y7QUFDSjtBQU5ELEFBT0g7QUFDRDs2QkFBQSxBQUFLLGlCQUFMLEFBQXNCLFFBQVEsVUFBQSxBQUFDLFNBQVksQUFDdkM7Z0NBQUksQUFDQTt3Q0FBQSxBQUFRLEFBQ1g7QUFGRCw4QkFFRSxPQUFBLEFBQU8sR0FBRyxBQUNSO3dDQUFBLEFBQVEsS0FBUixBQUFhLHFFQUFiLEFBQWtGLEFBQ3JGO0FBQ0o7QUFORCxBQU9IO0FBbEJELEFBbUJBO3lCQUFBLEFBQUssZ0JBQUwsQUFBcUIsY0FBYyxVQUFBLEFBQUMsTUFBRCxBQUFPLE1BQVMsQUFDL0M7NEJBQUksY0FBYyxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsSUFBdkMsQUFBa0IsQUFBeUIsQUFDM0M7NEJBQUksbUJBQUosQUFBSSxBQUFPLGNBQWMsQUFDckI7d0NBQUEsQUFBWSxRQUFRLFVBQUEsQUFBQyxTQUFZLEFBQzdCO29DQUFJLEFBQ0E7NENBQUEsQUFBUSxBQUNYO0FBRkQsa0NBRUUsT0FBQSxBQUFPLEdBQUcsQUFDUjs0Q0FBQSxBQUFRLEtBQVIsQUFBYSx5RUFBYixBQUFzRixNQUF0RixBQUE0RixBQUMvRjtBQUNKO0FBTkQsQUFPSDtBQUNEOzZCQUFBLEFBQUssbUJBQUwsQUFBd0IsUUFBUSxVQUFBLEFBQUMsU0FBWSxBQUN6QztnQ0FBSSxBQUNBO3dDQUFBLEFBQVEsQUFDWDtBQUZELDhCQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7d0NBQUEsQUFBUSxLQUFSLEFBQWEsdUVBQWIsQUFBb0YsQUFDdkY7QUFDSjtBQU5ELEFBT0g7QUFsQkQsQUFtQkE7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixhQUFhLFVBQUEsQUFBQyxNQUFELEFBQU8sTUFBUCxBQUFhLGNBQWIsQUFBMkIsVUFBM0IsQUFBcUMsVUFBYSxBQUNoRjs0QkFBSSxjQUFjLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUF2QyxBQUFrQixBQUF5QixBQUMzQzs0QkFBSSxtQkFBSixBQUFJLEFBQU8sY0FBYyxBQUNyQjt3Q0FBQSxBQUFZLFFBQVEsVUFBQSxBQUFDLFNBQVksQUFDN0I7b0NBQUksQUFDQTs0Q0FBQSxBQUFRLE1BQVIsQUFBYyxjQUFkLEFBQTRCLFVBQTVCLEFBQXNDLEFBQ3pDO0FBRkQsa0NBRUUsT0FBQSxBQUFPLEdBQUcsQUFDUjs0Q0FBQSxBQUFRLEtBQVIsQUFBYSx3RUFBYixBQUFxRixNQUFyRixBQUEyRixBQUM5RjtBQUNKO0FBTkQsQUFPSDtBQUNEOzZCQUFBLEFBQUssbUJBQUwsQUFBd0IsUUFBUSxVQUFBLEFBQUMsU0FBWSxBQUN6QztnQ0FBSSxBQUNBO3dDQUFBLEFBQVEsTUFBUixBQUFjLGNBQWQsQUFBNEIsVUFBNUIsQUFBc0MsQUFDekM7QUFGRCw4QkFFRSxPQUFBLEFBQU8sR0FBRyxBQUNSO3dDQUFBLEFBQVEsS0FBUixBQUFhLHNFQUFiLEFBQW1GLEFBQ3RGO0FBQ0o7QUFORCxBQU9IO0FBbEJELEFBbUJBO3lCQUFBLEFBQUssZ0JBQUwsQUFBcUIsY0FBYyxVQUFBLEFBQUMsTUFBRCxBQUFPLE1BQVAsQUFBYSxjQUFiLEFBQTJCLE9BQTNCLEFBQWtDLE9BQWxDLEFBQXlDLGFBQWdCLEFBQ3hGOzRCQUFJLGNBQWMsS0FBQSxBQUFLLHFCQUFMLEFBQTBCLElBQTVDLEFBQWtCLEFBQThCLEFBQ2hEOzRCQUFJLG1CQUFKLEFBQUksQUFBTyxjQUFjLEFBQ3JCO3dDQUFBLEFBQVksUUFBUSxVQUFBLEFBQUMsU0FBWSxBQUM3QjtvQ0FBSSxBQUNBOzRDQUFBLEFBQVEsTUFBUixBQUFjLGNBQWQsQUFBNEIsT0FBNUIsQUFBbUMsT0FBbkMsQUFBMEMsQUFDN0M7QUFGRCxrQ0FFRSxPQUFBLEFBQU8sR0FBRyxBQUNSOzRDQUFBLEFBQVEsS0FBUixBQUFhLHlFQUFiLEFBQXNGLE1BQXRGLEFBQTRGLEFBQy9GO0FBQ0o7QUFORCxBQU9IO0FBQ0Q7NkJBQUEsQUFBSyx3QkFBTCxBQUE2QixRQUFRLFVBQUEsQUFBQyxTQUFZLEFBQzlDO2dDQUFJLEFBQ0E7d0NBQUEsQUFBUSxNQUFSLEFBQWMsY0FBZCxBQUE0QixPQUE1QixBQUFtQyxPQUFuQyxBQUEwQyxBQUM3QztBQUZELDhCQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7d0NBQUEsQUFBUSxLQUFSLEFBQWEsdUVBQWIsQUFBb0YsQUFDdkY7QUFDSjtBQU5ELEFBT0g7QUFsQkQsQUFxQkg7Ozs7O3FELEFBR2dCLE0sQUFBTSxjLEFBQWMsVUFBVSxBQUMzQztpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBQ2pCO2dEQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7K0JBQU8sS0FBQSxBQUFLLGdCQUFMLEFBQXFCLGlCQUFyQixBQUFzQyxNQUF0QyxBQUE0QyxjQUFuRCxBQUFPLEFBQTBELEFBQ3BFOzs7O3NELEFBR2lCLE0sQUFBTSxjLEFBQWMsTyxBQUFPLE8sQUFBTyxpQkFBaUIsQUFDakU7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsTUFBWCxBQUFpQixBQUNqQjtnREFBQSxBQUFXLGNBQVgsQUFBeUIsQUFDekI7Z0RBQUEsQUFBVyxPQUFYLEFBQWtCLEFBQ2xCO2dEQUFBLEFBQVcsT0FBWCxBQUFrQixBQUNsQjtnREFBQSxBQUFXLGlCQUFYLEFBQTRCLEFBRTVCOzs2QkFBQSxBQUFLLGdCQUFMLEFBQXFCLGtCQUFyQixBQUF1QyxNQUF2QyxBQUE2QyxjQUE3QyxBQUEyRCxPQUEzRCxBQUFrRSxPQUFsRSxBQUF5RSxBQUM1RTs7Ozs4QyxBQUdTLE1BQU0sQUFDWjtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBRWpCOztBQUNBOzhCQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjs7OzsyQyxBQUdNLE1BQU0sQUFDVDtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBRWpCOztBQUNBOzhCQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjs7Ozt3QyxBQUdHLE0sQUFBTSxNQUFNLEFBQ1o7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsTUFBWCxBQUFpQixBQUNqQjtnREFBQSxBQUFXLE1BQVgsQUFBaUIsQUFFakI7O0FBQ0E7OEJBQU0sSUFBQSxBQUFJLE1BQVYsQUFBTSxBQUFVLEFBQ25COzs7OzJDLEFBR00sTSxBQUFNLFlBQVksQUFDckI7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsTUFBWCxBQUFpQixBQUNqQjtnREFBQSxBQUFXLFlBQVgsQUFBdUIsQUFFdkI7O0FBQ0E7OEJBQU0sSUFBQSxBQUFJLE1BQVYsQUFBTSxBQUFVLEFBQ25COzs7OzJDLEFBR00sTUFBTSxBQUNUO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLE1BQVgsQUFBaUIsQUFFakI7O0FBQ0E7OEJBQU0sSUFBQSxBQUFJLE1BQVYsQUFBTSxBQUFVLEFBQ25COzs7OzhDLEFBR1MsWUFBWSxBQUNsQjtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxZQUFYLEFBQXVCLEFBRXZCOztBQUNBOzhCQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjs7Ozs2QyxBQUdRLFdBQVcsQUFDaEI7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsV0FBWCxBQUFzQixBQUV0Qjs7QUFDQTs4QkFBTSxJQUFBLEFBQUksTUFBVixBQUFNLEFBQVUsQUFDbkI7Ozs7NEMsQUFHTyxNLEFBQU0sY0FBYyxBQUN4Qjs0QkFBSSxPQUFKLEFBQVcsQUFDWDs0QkFBSSxDQUFDLG1CQUFMLEFBQUssQUFBTyxlQUFlLEFBQ3ZCOzJDQUFBLEFBQWUsQUFDZjtxREFBQSxBQUFZLEFBQ1o7b0RBQUEsQUFBVyxjQUFYLEFBQXlCLEFBRXpCOztpQ0FBQSxBQUFLLG1CQUFtQixLQUFBLEFBQUssaUJBQUwsQUFBc0IsT0FBOUMsQUFBd0IsQUFBNkIsQUFDckQ7OzZDQUNpQix1QkFBWSxBQUNyQjt5Q0FBQSxBQUFLLHdCQUFtQixBQUFLLGlCQUFMLEFBQXNCLE9BQU8sVUFBQSxBQUFDLE9BQVUsQUFDNUQ7K0NBQU8sVUFBUCxBQUFpQixBQUNwQjtBQUZELEFBQXdCLEFBRzNCLHFDQUgyQjtBQUZoQyxBQUFPLEFBT1Y7QUFQVSxBQUNIO0FBUFIsK0JBYU8sQUFDSDtxREFBQSxBQUFZLEFBQ1o7b0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBQ2pCO29EQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7Z0NBQUksY0FBYyxLQUFBLEFBQUssY0FBTCxBQUFtQixJQUFyQyxBQUFrQixBQUF1QixBQUN6QztnQ0FBSSxDQUFDLG1CQUFMLEFBQUssQUFBTyxjQUFjLEFBQ3RCOzhDQUFBLEFBQWMsQUFDakI7QUFDRDtpQ0FBQSxBQUFLLGNBQUwsQUFBbUIsSUFBbkIsQUFBdUIsTUFBTSxZQUFBLEFBQVksT0FBekMsQUFBNkIsQUFBbUIsQUFDaEQ7OzZDQUNpQix1QkFBTSxBQUNmO3dDQUFJLGNBQWMsS0FBQSxBQUFLLGNBQUwsQUFBbUIsSUFBckMsQUFBa0IsQUFBdUIsQUFDekM7d0NBQUksbUJBQUosQUFBSSxBQUFPLGNBQWMsQUFDckI7NkNBQUEsQUFBSyxjQUFMLEFBQW1CLElBQW5CLEFBQXVCLGtCQUFNLEFBQVksT0FBTyxVQUFBLEFBQVUsT0FBTyxBQUM3RDttREFBTyxVQUFQLEFBQWlCLEFBQ3BCO0FBRkQsQUFBNkIsQUFHaEMseUNBSGdDO0FBSXBDO0FBUkwsQUFBTyxBQVVWO0FBVlUsQUFDSDtBQVVYOzs7OzhDLEFBR1MsTSxBQUFNLGNBQWMsQUFDMUI7NEJBQUksT0FBSixBQUFXLEFBQ1g7NEJBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sZUFBZSxBQUN2QjsyQ0FBQSxBQUFlLEFBQ2Y7cURBQUEsQUFBWSxBQUNaO29EQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7aUNBQUEsQUFBSyxxQkFBcUIsS0FBQSxBQUFLLG1CQUFMLEFBQXdCLE9BQWxELEFBQTBCLEFBQStCLEFBQ3pEOzs2Q0FDaUIsdUJBQU0sQUFDZjt5Q0FBQSxBQUFLLDBCQUFxQixBQUFLLG1CQUFMLEFBQXdCLE9BQU8sVUFBQSxBQUFDLE9BQVUsQUFDaEU7K0NBQU8sVUFBUCxBQUFpQixBQUNwQjtBQUZELEFBQTBCLEFBRzdCLHFDQUg2QjtBQUZsQyxBQUFPLEFBT1Y7QUFQVSxBQUNIO0FBUFIsK0JBYU8sQUFDSDtxREFBQSxBQUFZLEFBQ1o7b0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBQ2pCO29EQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7Z0NBQUksY0FBYyxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsSUFBdkMsQUFBa0IsQUFBeUIsQUFDM0M7Z0NBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sY0FBYyxBQUN0Qjs4Q0FBQSxBQUFjLEFBQ2pCO0FBQ0Q7aUNBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUFyQixBQUF5QixNQUFNLFlBQUEsQUFBWSxPQUEzQyxBQUErQixBQUFtQixBQUNsRDs7NkNBQ2lCLHVCQUFNLEFBQ2Y7d0NBQUksY0FBYyxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsSUFBdkMsQUFBa0IsQUFBeUIsQUFDM0M7d0NBQUksbUJBQUosQUFBSSxBQUFPLGNBQWMsQUFDckI7NkNBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUFyQixBQUF5QixrQkFBTSxBQUFZLE9BQU8sVUFBQSxBQUFDLE9BQVUsQUFDekQ7bURBQU8sVUFBUCxBQUFpQixBQUNwQjtBQUZELEFBQStCLEFBR2xDLHlDQUhrQztBQUl0QztBQVJMLEFBQU8sQUFVVjtBQVZVLEFBQ0g7QUFVWDs7OztpRCxBQUdZLE0sQUFBTSxjQUFjLEFBQzdCOzRCQUFJLE9BQUosQUFBVyxBQUNYOzRCQUFJLENBQUMsbUJBQUwsQUFBSyxBQUFPLGVBQWUsQUFDdkI7MkNBQUEsQUFBZSxBQUNmO3FEQUFBLEFBQVksQUFDWjtvREFBQSxBQUFXLGNBQVgsQUFBeUIsQUFFekI7O2lDQUFBLEFBQUsscUJBQXFCLEtBQUEsQUFBSyxtQkFBTCxBQUF3QixPQUFsRCxBQUEwQixBQUErQixBQUN6RDs7NkNBQ2lCLHVCQUFZLEFBQ3JCO3lDQUFBLEFBQUssMEJBQXFCLEFBQUssbUJBQUwsQUFBd0IsT0FBTyxVQUFBLEFBQUMsT0FBVSxBQUNoRTsrQ0FBTyxVQUFQLEFBQWlCLEFBQ3BCO0FBRkQsQUFBMEIsQUFHN0IscUNBSDZCO0FBRmxDLEFBQU8sQUFPVjtBQVBVLEFBQ0g7QUFQUiwrQkFhTyxBQUNIO3FEQUFBLEFBQVksQUFDWjtvREFBQSxBQUFXLE1BQVgsQUFBaUIsQUFDakI7b0RBQUEsQUFBVyxjQUFYLEFBQXlCLEFBRXpCOztnQ0FBSSxjQUFjLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUF2QyxBQUFrQixBQUF5QixBQUMzQztnQ0FBSSxDQUFDLG1CQUFMLEFBQUssQUFBTyxjQUFjLEFBQ3RCOzhDQUFBLEFBQWMsQUFDakI7QUFDRDtpQ0FBQSxBQUFLLGdCQUFMLEFBQXFCLElBQXJCLEFBQXlCLE1BQU0sWUFBQSxBQUFZLE9BQTNDLEFBQStCLEFBQW1CLEFBQ2xEOzs2Q0FDaUIsdUJBQU0sQUFDZjt3Q0FBSSxjQUFjLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUF2QyxBQUFrQixBQUF5QixBQUMzQzt3Q0FBSSxtQkFBSixBQUFJLEFBQU8sY0FBYyxBQUNyQjs2Q0FBQSxBQUFLLGdCQUFMLEFBQXFCLElBQXJCLEFBQXlCLGtCQUFNLEFBQVksT0FBTyxVQUFBLEFBQUMsT0FBVSxBQUN6RDttREFBTyxVQUFQLEFBQWlCLEFBQ3BCO0FBRkQsQUFBK0IsQUFHbEMseUNBSGtDO0FBSXRDO0FBUkwsQUFBTyxBQVVWO0FBVlUsQUFDSDtBQVVYOzs7O2tELEFBRWEsTSxBQUFNLGNBQWMsQUFDOUI7NEJBQUksT0FBSixBQUFXLEFBQ1g7NEJBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sZUFBZSxBQUN2QjsyQ0FBQSxBQUFlLEFBQ2Y7cURBQUEsQUFBWSxBQUNaO29EQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7aUNBQUEsQUFBSywwQkFBMEIsS0FBQSxBQUFLLHdCQUFMLEFBQTZCLE9BQTVELEFBQStCLEFBQW9DLEFBQ25FOzs2Q0FDaUIsdUJBQU0sQUFDZjt5Q0FBQSxBQUFLLCtCQUEwQixBQUFLLHdCQUFMLEFBQTZCLE9BQU8sVUFBQSxBQUFDLE9BQVUsQUFDMUU7K0NBQU8sVUFBUCxBQUFpQixBQUNwQjtBQUZELEFBQStCLEFBR2xDLHFDQUhrQztBQUZ2QyxBQUFPLEFBT1Y7QUFQVSxBQUNIO0FBUFIsK0JBYU8sQUFDSDtxREFBQSxBQUFZLEFBQ1o7b0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBQ2pCO29EQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7Z0NBQUksY0FBYyxLQUFBLEFBQUsscUJBQUwsQUFBMEIsSUFBNUMsQUFBa0IsQUFBOEIsQUFDaEQ7Z0NBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sY0FBYyxBQUN0Qjs4Q0FBQSxBQUFjLEFBQ2pCO0FBQ0Q7aUNBQUEsQUFBSyxxQkFBTCxBQUEwQixJQUExQixBQUE4QixNQUFNLFlBQUEsQUFBWSxPQUFoRCxBQUFvQyxBQUFtQixBQUN2RDs7NkNBQ2lCLHVCQUFNLEFBQ2Y7d0NBQUksY0FBYyxLQUFBLEFBQUsscUJBQUwsQUFBMEIsSUFBNUMsQUFBa0IsQUFBOEIsQUFDaEQ7d0NBQUksbUJBQUosQUFBSSxBQUFPLGNBQWMsQUFDckI7NkNBQUEsQUFBSyxxQkFBTCxBQUEwQixJQUExQixBQUE4QixrQkFBTSxBQUFZLE9BQU8sVUFBQSxBQUFDLE9BQVUsQUFDOUQ7bURBQU8sVUFBUCxBQUFpQixBQUNwQjtBQUZELEFBQW9DLEFBR3ZDLHlDQUh1QztBQUkzQztBQVJMLEFBQU8sQUFVVjtBQVZVLEFBQ0g7QUFVWDs7Ozs7Ozs4QixBQS9VZ0I7O0FDeEJyQjs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7O2dCLEFBQVk7O0FBRVo7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLGdCQUFJLFVBQUosQUFBYzs7Z0IsQUFFTyw4QkFFakI7eUNBQUEsQUFBWSxTQUFTOzBDQUNqQjs7NkNBQUEsQUFBWSxBQUNaOzRDQUFBLEFBQVcsU0FBWCxBQUFvQixBQUVwQjs7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjt5QkFBQSxBQUFLLFVBQVUsVUFBZixBQUNBO3lCQUFBLEFBQUssa0JBQWtCLFVBQXZCLEFBQ0E7eUJBQUEsQUFBSyxnQkFBZ0IsVUFBckIsQUFDQTt5QkFBQSxBQUFLLGFBQWEsVUFBbEIsQUFDQTt5QkFBQSxBQUFLLG9CQUFMLEFBQXlCLEFBQ3pCO3lCQUFBLEFBQUssc0JBQUwsQUFBMkIsQUFDM0I7eUJBQUEsQUFBSyx5QkFBTCxBQUE4QixBQUM5Qjt5QkFBQSxBQUFLLHNCQUFMLEFBQTJCLEFBQzlCOzs7Ozs0QyxBQUVPLE0sQUFBTSxPQUFPLEFBQ2pCO2dDQUFBLEFBQVEsQUFDSjtpQ0FBSyxPQUFMLEFBQVksQUFDWjtpQ0FBSyxPQUFMLEFBQVksQUFDWjtpQ0FBSyxPQUFMLEFBQVksQUFDWjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxTQUFQLEFBQU8sQUFBUyxBQUNwQjtpQ0FBSyxPQUFMLEFBQVksQUFDWjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxXQUFQLEFBQU8sQUFBVyxBQUN0QjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxXQUFXLE9BQUEsQUFBTyxPQUF6QixBQUFrQixBQUFjLEFBQ3BDO2lDQUFLLE9BQUwsQUFBWSxBQUNaO2lDQUFLLE9BQUwsQUFBWSxBQUNSO3VDQUFPLE9BQVAsQUFBTyxBQUFPLEFBQ2xCO0FBQ0k7dUNBZlIsQUFlUSxBQUFPLEFBRWxCOzs7OztnRCxBQUVXLGlCLEFBQWlCLE0sQUFBTSxPQUFPLEFBQ3RDOzRCQUFJLENBQUMsbUJBQUwsQUFBSyxBQUFPLFFBQVEsQUFDaEI7bUNBQUEsQUFBTyxBQUNWO0FBQ0Q7Z0NBQUEsQUFBUSxBQUNKO2lDQUFLLE9BQUwsQUFBWSxBQUNSO3VDQUFPLGdCQUFBLEFBQWdCLGdCQUFoQixBQUFnQyxJQUFJLE9BQTNDLEFBQU8sQUFBb0MsQUFBTyxBQUN0RDtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxJQUFBLEFBQUksS0FBSyxPQUFoQixBQUFPLEFBQVMsQUFBTyxBQUMzQjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxJQUFBLEFBQUksS0FBSyxPQUFoQixBQUFPLEFBQVMsQUFBTyxBQUMzQjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxJQUFBLEFBQUksS0FBSyxPQUFoQixBQUFPLEFBQVMsQUFBTyxBQUMzQjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxJQUFBLEFBQUksS0FBSyxPQUFoQixBQUFPLEFBQVMsQUFBTyxBQUMzQjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxJQUFBLEFBQUksS0FBSyxPQUFoQixBQUFPLEFBQVMsQUFBTyxBQUMzQjtBQUNJO3VDQUFPLEtBQUEsQUFBSyxRQUFMLEFBQWEsTUFkNUIsQUFjUSxBQUFPLEFBQW1CLEFBRXJDOzs7Ozs4QyxBQUVTLGlCLEFBQWlCLE0sQUFBTSxPQUFPLEFBQ3BDOzRCQUFJLENBQUMsbUJBQUwsQUFBSyxBQUFPLFFBQVEsQUFDaEI7bUNBQUEsQUFBTyxBQUNWO0FBQ0Q7Z0NBQUEsQUFBUSxBQUNKO2lDQUFLLE9BQUwsQUFBWSxBQUNSO3VDQUFPLGdCQUFBLEFBQWdCLGNBQWhCLEFBQThCLElBQXJDLEFBQU8sQUFBa0MsQUFDN0M7aUNBQUssT0FBTCxBQUFZLEFBQ1I7dUNBQU8saUJBQUEsQUFBaUIsT0FBTyxNQUF4QixBQUF3QixBQUFNLGdCQUFyQyxBQUFxRCxBQUN6RDtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxpQkFBQSxBQUFpQixPQUFPLE1BQXhCLEFBQXdCLEFBQU0sZ0JBQXJDLEFBQXFELEFBQ3pEO2lDQUFLLE9BQUwsQUFBWSxBQUNSO3VDQUFPLGlCQUFBLEFBQWlCLE9BQU8sTUFBeEIsQUFBd0IsQUFBTSxnQkFBckMsQUFBcUQsQUFDekQ7aUNBQUssT0FBTCxBQUFZLEFBQ1I7dUNBQU8saUJBQUEsQUFBaUIsT0FBTyxNQUF4QixBQUF3QixBQUFNLGdCQUFyQyxBQUFxRCxBQUN6RDtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxpQkFBQSxBQUFpQixPQUFPLE1BQXhCLEFBQXdCLEFBQU0sZ0JBQXJDLEFBQXFELEFBQ3pEO0FBQ0k7dUNBQU8sS0FBQSxBQUFLLFFBQUwsQUFBYSxNQWQ1QixBQWNRLEFBQU8sQUFBbUIsQUFFckM7Ozs7O21ELEFBRWMsaUIsQUFBaUIsUyxBQUFTLGMsQUFBYyxNLEFBQU0sSSxBQUFJLGFBQWEsQUFDMUU7NEJBQUksVUFBVSxnQkFBZCxBQUE4QixBQUM5Qjs0QkFBSSxRQUFRLFFBQUEsQUFBUSwwQkFBcEIsQUFBWSxBQUFrQyxBQUM5Qzs0QkFBSSxPQUFKLEFBQVcsQUFDWDs0QkFBSSxtQkFBSixBQUFJLEFBQU8sUUFBUSxBQUNmO2dDQUFJLFlBQVksZ0JBQUEsQUFBZ0IsUUFBaEIsQUFBd0IsSUFBSSxNQUE1QyxBQUFnQixBQUFrQyxBQUNsRDtnQ0FBSSxPQUFPLFVBQVgsQUFBVyxBQUFVLEFBQ3JCO2dDQUFJLG1CQUFKLEFBQUksQUFBTyxPQUFPLEFBRWQ7O29DQUFJLGFBQWEsQ0FDYixRQUFBLEFBQVEsVUFBUixBQUFrQix5QkFBbEIsQUFBMkMsTUFEOUIsQUFDYixBQUFpRCxXQUNqRCxRQUFBLEFBQVEsVUFBUixBQUFrQixVQUFsQixBQUE0QixNQUZmLEFBRWIsQUFBa0MsVUFDbEMsUUFBQSxBQUFRLFVBQVIsQUFBa0IsYUFBbEIsQUFBK0IsTUFIbEIsQUFHYixBQUFxQyxlQUNyQyxRQUFBLEFBQVEsVUFBUixBQUFrQixRQUFsQixBQUEwQixNQUpiLEFBSWIsQUFBZ0MsT0FDaEMsUUFBQSxBQUFRLFVBQVIsQUFBa0IsTUFBbEIsQUFBd0IsTUFMWCxBQUtiLEFBQThCLEtBQzlCLFFBQUEsQUFBUSxVQUFSLEFBQWtCLFNBQWxCLEFBQTJCLE1BQU0sWUFOckMsQUFBaUIsQUFNYixBQUE2QyxBQUVqRDs0Q0FBQSxBQUFZLFFBQVEsVUFBQSxBQUFVLFNBQVYsQUFBbUIsT0FBTyxBQUMxQzsrQ0FBQSxBQUFXLEtBQUssUUFBQSxBQUFRLFVBQVUsTUFBbEIsQUFBa0IsQUFBTSxZQUF4QixBQUFvQyxNQUFNLEtBQUEsQUFBSyxVQUFMLEFBQWUsaUJBQWYsQUFBZ0MsTUFBMUYsQUFBZ0IsQUFBMEMsQUFBc0MsQUFDbkc7QUFGRCxBQUdBO3dDQUFBLEFBQVEsa0JBQVIsQUFBMEIsTUFBMUIsQUFBZ0MsU0FBUyxDQUFBLEFBQUMsTUFBRCxBQUFPLFdBQVAsQUFBa0IsT0FBM0QsQUFBeUMsQUFBeUIsQUFDckU7QUFDSjtBQUNKOzs7O2lELEFBRVksaUIsQUFBaUIsTSxBQUFNLE0sQUFBTSxjQUFjLEFBQ3BEOzRCQUFJLE9BQU8sS0FBWCxBQUFXLEFBQUssQUFDaEI7NEJBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sT0FBTyxBQUNmOzRDQUFBLEFBQWdCLHVCQUFoQixBQUF1QyxRQUFRLFVBQUEsQUFBVSxTQUFTLEFBQzlEO29DQUFJLEFBQ0E7NENBQUEsQUFBUSxNQUFSLEFBQWMsTUFBZCxBQUFvQixjQUFwQixBQUFrQyxJQUFsQyxBQUFzQyxBQUN6QztBQUZELGtDQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7NENBQUEsQUFBUSxLQUFSLEFBQWEsK0RBQWIsQUFBNEUsQUFDL0U7QUFDSjtBQU5ELEFBT0g7QUFDSjs7OzswQyxBQUVLLE0sQUFBTSxjQUFjLEFBQ3RCOzRCQUFJLG1CQUFKLEFBQUksQUFBTyxVQUFVLEFBQ2pCO2tDQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjtBQUNEOztrQ0FBVSxBQUNBLEFBQ047MENBRkosQUFBVSxBQUVRLEFBRXJCO0FBSmEsQUFDTjs7Ozs4QyxBQUtFLE0sQUFBTSxjQUFjLEFBQzFCOytCQUFPLG1CQUFBLEFBQU8sWUFBWSxRQUFBLEFBQVEsU0FBM0IsQUFBb0MsUUFBUSxRQUFBLEFBQVEsaUJBQTNELEFBQTRFLEFBQy9FOzs7OzhDQUVTLEFBQ047a0NBQUEsQUFBVSxBQUNiOzs7O3FELEFBRWdCLE0sQUFBTSxjLEFBQWMsVUFBVSxBQUMzQztpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBQ2pCO2dEQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7NEJBQUksVUFBVSxLQUFBLEFBQUssY0FBTCxBQUFtQixJQUFqQyxBQUFjLEFBQXVCLEFBQ3JDOzRCQUFJLG1CQUFKLEFBQUksQUFBTyxVQUFVLEFBQ2pCO2dDQUFJLFFBQVEsS0FBQSxBQUFLLFFBQUwsQUFBYSwwQkFBekIsQUFBWSxBQUF1QyxBQUNuRDtnQ0FBSSxtQkFBSixBQUFJLEFBQU8sUUFBUSxBQUNmO29DQUFJLFlBQVksS0FBQSxBQUFLLFFBQUwsQUFBYSxJQUFJLE1BQWpDLEFBQWdCLEFBQXVCLEFBQ3ZDO29DQUFJLE9BQU8sVUFBWCxBQUFXLEFBQVUsQUFDckI7b0NBQUksWUFBWSxNQUFBLEFBQU0sNEJBQXRCLEFBQWdCLEFBQWtDLEFBQ2xEO29DQUFJLG1CQUFBLEFBQU8sU0FBUyxtQkFBcEIsQUFBb0IsQUFBTyxZQUFZLEFBQ25DO3dDQUFJLFdBQVcsVUFBZixBQUFlLEFBQVUsQUFDekI7OENBQUEsQUFBVSxTQUFTLEtBQUEsQUFBSyxVQUFMLEFBQWUsTUFBZixBQUFxQixNQUF4QyxBQUFtQixBQUEyQixBQUM5QzsyQ0FBTyxLQUFBLEFBQUssWUFBTCxBQUFpQixNQUFqQixBQUF1QixNQUE5QixBQUFPLEFBQTZCLEFBQ3ZDO0FBQ0o7QUFDSjtBQUNKOzs7O3NELEFBRWlCLE0sQUFBTSxjLEFBQWMsTyxBQUFPLE8sQUFBTyxpQkFBaUIsQUFDakU7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsTUFBWCxBQUFpQixBQUNqQjtnREFBQSxBQUFXLGNBQVgsQUFBeUIsQUFDekI7Z0RBQUEsQUFBVyxPQUFYLEFBQWtCLEFBQ2xCO2dEQUFBLEFBQVcsT0FBWCxBQUFrQixBQUNsQjtnREFBQSxBQUFXLGlCQUFYLEFBQTRCLEFBRTVCOzs0QkFBSSxLQUFBLEFBQUssVUFBTCxBQUFlLE1BQW5CLEFBQUksQUFBcUIsZUFBZSxBQUNwQztBQUNIO0FBQ0Q7NEJBQUksVUFBVSxLQUFBLEFBQUssY0FBTCxBQUFtQixJQUFqQyxBQUFjLEFBQXVCLEFBQ3JDOzRCQUFJLFFBQVEsS0FBWixBQUFZLEFBQUssQUFDakI7NEJBQUksbUJBQUEsQUFBTyxZQUFZLG1CQUF2QixBQUF1QixBQUFPLFFBQVEsQUFDbEM7Z0NBQUksdUJBQXVCLE1BQUEsQUFBTSxRQUFOLEFBQWMsbUJBQW1CLGdCQUFqQyxBQUFpRCxTQUE1RSxBQUFxRixBQUNyRjtpQ0FBQSxBQUFLLGVBQUwsQUFBb0IsTUFBcEIsQUFBMEIsU0FBMUIsQUFBbUMsY0FBbkMsQUFBaUQsT0FBTyxRQUF4RCxBQUFnRSxzQkFBc0IsTUFBQSxBQUFNLE1BQU4sQUFBWSxPQUFPLFFBQXpHLEFBQXNGLEFBQTJCLEFBQ3BIO0FBQ0o7Ozs7Z0QsQUFFVyxTQUFTLEFBQ2pCO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLFNBQVgsQUFBb0IsQUFDcEI7NkJBQUEsQUFBSyxrQkFBTCxBQUF1QixLQUF2QixBQUE0QixBQUMvQjs7OztrRCxBQUVhLFNBQVMsQUFDbkI7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsU0FBWCxBQUFvQixBQUNwQjs2QkFBQSxBQUFLLG9CQUFMLEFBQXlCLEtBQXpCLEFBQThCLEFBQ2pDOzs7O2lELEFBRVksU0FBUyxBQUNsQjtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxTQUFYLEFBQW9CLEFBQ3BCOzZCQUFBLEFBQUssdUJBQUwsQUFBNEIsS0FBNUIsQUFBaUMsQUFDcEM7Ozs7a0QsQUFFYSxTQUFTLEFBQ25CO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLFNBQVgsQUFBb0IsQUFDcEI7NkJBQUEsQUFBSyxvQkFBTCxBQUF5QixLQUF6QixBQUE4QixBQUNqQzs7OztrRCxBQUVhLE9BQU8sQUFDakI7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsT0FBWCxBQUFrQixBQUVsQjs7NEJBQUksS0FBQSxBQUFLLFFBQUwsQUFBYSxJQUFJLE1BQXJCLEFBQUksQUFBdUIsS0FBSyxBQUM1QjtBQUNIO0FBRUQ7OzRCQUFJLFlBQUosQUFBZ0IsQUFDaEI7OEJBQUEsQUFBTSxXQUFOLEFBQWlCLE9BQU8sVUFBQSxBQUFVLFdBQVcsQUFDekM7bUNBQU8sVUFBQSxBQUFVLGFBQVYsQUFBdUIsT0FBdkIsQUFBOEIsUUFBckMsQUFBNkMsQUFDaEQ7QUFGRCwyQkFBQSxBQUVHLFFBQVEsVUFBQSxBQUFVLFdBQVcsQUFDNUI7c0NBQVUsVUFBVixBQUFvQixnQkFBZ0IsVUFBcEMsQUFBOEMsQUFDakQ7QUFKRCxBQUtBOzZCQUFBLEFBQUssUUFBTCxBQUFhLElBQUksTUFBakIsQUFBdUIsSUFBdkIsQUFBMkIsQUFDOUI7Ozs7b0QsQUFFZSxPQUFPLEFBQ25CO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLE9BQVgsQUFBa0IsQUFDbEI7NkJBQUEsQUFBSyxRQUFMLEFBQWEsVUFBVSxNQUF2QixBQUE2QixBQUNoQzs7Ozt5QyxBQUVJLE9BQU8sQUFDUjtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxPQUFYLEFBQWtCLEFBRWxCOzs0QkFBSSxPQUFKLEFBQVcsQUFDWDs0QkFBSSxZQUFZLEtBQUEsQUFBSyxRQUFMLEFBQWEsSUFBSSxNQUFqQyxBQUFnQixBQUF1QixBQUN2Qzs0QkFBSSxPQUFKLEFBQVcsQUFDWDs4QkFBQSxBQUFNLFdBQU4sQUFBaUIsT0FBTyxVQUFBLEFBQVUsV0FBVyxBQUN6QzttQ0FBUSxVQUFBLEFBQVUsYUFBVixBQUF1QixPQUF2QixBQUE4QixRQUF0QyxBQUE4QyxBQUNqRDtBQUZELDJCQUFBLEFBRUcsUUFBUSxVQUFBLEFBQVUsV0FBVyxBQUM1QjtpQ0FBSyxVQUFMLEFBQWUsZ0JBQWYsQUFBK0IsQUFDL0I7c0NBQUEsQUFBVSxjQUFjLFVBQUEsQUFBVSxPQUFPLEFBQ3JDO29DQUFJLE1BQUEsQUFBTSxhQUFhLE1BQXZCLEFBQTZCLFVBQVUsQUFDbkM7d0NBQUksV0FBVyxLQUFBLEFBQUssWUFBTCxBQUFpQixNQUFNLFVBQVUsVUFBakMsQUFBdUIsQUFBb0IsZUFBZSxNQUF6RSxBQUFlLEFBQWdFLEFBQy9FO3dDQUFJLFdBQVcsS0FBQSxBQUFLLFlBQUwsQUFBaUIsTUFBTSxVQUFVLFVBQWpDLEFBQXVCLEFBQW9CLGVBQWUsTUFBekUsQUFBZSxBQUFnRSxBQUMvRTt5Q0FBQSxBQUFLLHVCQUFMLEFBQTRCLFFBQVEsVUFBQSxBQUFDLFNBQVksQUFDN0M7NENBQUksQUFDQTtvREFBUSxNQUFSLEFBQWMsdUJBQWQsQUFBcUMsTUFBTSxVQUEzQyxBQUFxRCxjQUFyRCxBQUFtRSxVQUFuRSxBQUE2RSxBQUNoRjtBQUZELDBDQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7b0RBQUEsQUFBUSxLQUFSLEFBQWEsK0RBQWIsQUFBNEUsQUFDL0U7QUFDSjtBQU5ELEFBT0g7QUFDSjtBQVpELEFBYUg7QUFqQkQsQUFrQkE7NkJBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUFJLE1BQXpCLEFBQStCLElBQS9CLEFBQW1DLEFBQ25DOzZCQUFBLEFBQUssY0FBTCxBQUFtQixJQUFuQixBQUF1QixNQUFNLE1BQTdCLEFBQW1DLEFBQ25DOzZCQUFBLEFBQUssV0FBTCxBQUFnQixJQUFJLE1BQXBCLEFBQTBCLElBQTFCLEFBQThCLEFBQzlCOzZCQUFBLEFBQUssa0JBQUwsQUFBdUIsUUFBUSxVQUFBLEFBQUMsU0FBWSxBQUN4QztnQ0FBSSxBQUNBO3dDQUFRLE1BQVIsQUFBYyx1QkFBZCxBQUFxQyxBQUN4QztBQUZELDhCQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7d0NBQUEsQUFBUSxLQUFSLEFBQWEsOERBQWIsQUFBMkUsQUFDOUU7QUFDSjtBQU5ELEFBT0E7K0JBQUEsQUFBTyxBQUNWOzs7OzJDLEFBRU0sT0FBTyxBQUNWO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLE9BQVgsQUFBa0IsQUFFbEI7OzRCQUFJLE9BQU8sS0FBQSxBQUFLLGdCQUFMLEFBQXFCLElBQUksTUFBcEMsQUFBVyxBQUErQixBQUMxQzs2QkFBQSxBQUFLLGdCQUFMLEFBQXFCLFVBQVUsTUFBL0IsQUFBcUMsQUFDckM7NkJBQUEsQUFBSyxjQUFMLEFBQW1CLFVBQW5CLEFBQTZCLEFBQzdCOzZCQUFBLEFBQUssV0FBTCxBQUFnQixVQUFVLE1BQTFCLEFBQWdDLEFBQ2hDOzRCQUFJLG1CQUFKLEFBQUksQUFBTyxPQUFPLEFBQ2Q7aUNBQUEsQUFBSyxvQkFBTCxBQUF5QixRQUFRLFVBQUEsQUFBQyxTQUFZLEFBQzFDO29DQUFJLEFBQ0E7NENBQVEsTUFBUixBQUFjLHVCQUFkLEFBQXFDLEFBQ3hDO0FBRkQsa0NBRUUsT0FBQSxBQUFPLEdBQUcsQUFDUjs0Q0FBQSxBQUFRLEtBQVIsQUFBYSxnRUFBYixBQUE2RSxBQUNoRjtBQUNKO0FBTkQsQUFPSDtBQUNEOytCQUFBLEFBQU8sQUFDVjs7OztvRCxBQUVlLE9BQU8sQUFDbkI7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsT0FBWCxBQUFrQixBQUVsQjs7NEJBQUksU0FBUyxNQUFBLEFBQU0sNEJBQW5CLEFBQWEsQUFBa0MsQUFDL0M7NEJBQUksWUFBWSxNQUFBLEFBQU0sNEJBQXRCLEFBQWdCLEFBQWtDLEFBQ2xEOzRCQUFJLE9BQU8sTUFBQSxBQUFNLDRCQUFqQixBQUFXLEFBQWtDLEFBQzdDOzRCQUFJLEtBQUssTUFBQSxBQUFNLDRCQUFmLEFBQVMsQUFBa0MsQUFDM0M7NEJBQUksUUFBUSxNQUFBLEFBQU0sNEJBQWxCLEFBQVksQUFBa0MsQUFFOUM7OzRCQUFJLG1CQUFBLEFBQU8sV0FBVyxtQkFBbEIsQUFBa0IsQUFBTyxjQUFjLG1CQUF2QyxBQUF1QyxBQUFPLFNBQVMsbUJBQXZELEFBQXVELEFBQU8sT0FBTyxtQkFBekUsQUFBeUUsQUFBTyxRQUFRLEFBQ3BGO2dDQUFJLFlBQVksS0FBQSxBQUFLLFdBQUwsQUFBZ0IsSUFBSSxPQUFwQyxBQUFnQixBQUEyQixBQUMzQztnQ0FBSSxPQUFPLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUFJLE9BQXBDLEFBQVcsQUFBZ0MsQUFDM0M7Z0NBQUksbUJBQUEsQUFBTyxTQUFTLG1CQUFwQixBQUFvQixBQUFPLFlBQVksQUFDbkM7b0NBQUksT0FBTyxNQUFYLEFBQWlCLEFBQ2pCO0FBQ0E7cUNBQUEsQUFBSyxhQUFMLEFBQWtCLE1BQWxCLEFBQXdCLE1BQXhCLEFBQThCLE1BQU0sVUFBcEMsQUFBOEMsQUFDOUM7b0NBQUksY0FBSixBQUFrQjtvQ0FDZCxVQURKLEFBQ2MsQUFDZDtxQ0FBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQUksTUFBcEIsQUFBMEIsT0FBMUIsQUFBaUMsS0FBSyxBQUNsQzs4Q0FBVSxNQUFBLEFBQU0sNEJBQTRCLEVBQTVDLEFBQVUsQUFBa0MsQUFBRSxBQUM5Qzt3Q0FBSSxDQUFDLG1CQUFMLEFBQUssQUFBTyxVQUFVLEFBQ2xCOzhDQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjtBQUNEO2dEQUFBLEFBQVksS0FBSyxLQUFBLEFBQUssWUFBTCxBQUFpQixNQUFNLFVBQVUsVUFBakMsQUFBdUIsQUFBb0IsUUFBUSxRQUFwRSxBQUFpQixBQUEyRCxBQUMvRTtBQUNEO29DQUFJLEFBQ0E7eUNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxVQUFqQixBQUEyQixBQUMzQjt5Q0FBQSxBQUFLLG9CQUFMLEFBQXlCLFFBQVEsVUFBQSxBQUFDLFNBQVksQUFDMUM7NENBQUksQUFDQTtvREFBQSxBQUFRLE1BQVIsQUFBYyxNQUFNLFVBQXBCLEFBQThCLE9BQU8sS0FBckMsQUFBMEMsT0FBTyxHQUFBLEFBQUcsUUFBUSxLQUE1RCxBQUFpRSxPQUFqRSxBQUF3RSxBQUMzRTtBQUZELDBDQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7b0RBQUEsQUFBUSxLQUFSLEFBQWEsZ0VBQWIsQUFBNkUsQUFDaEY7QUFDSjtBQU5ELEFBT0g7QUFURCwwQ0FTVSxBQUNOO3lDQUFBLEFBQUssQUFDUjtBQUNKO0FBekJELG1DQXlCTyxBQUNIO3NDQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjtBQUNKO0FBL0JELCtCQStCTyxBQUNIO2tDQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjtBQUNKOzs7O3NELEFBRWlCLE9BQU8sQUFDckI7NEJBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sUUFBUSxBQUNoQjttQ0FBQSxBQUFPLEFBQ1Y7QUFDRDs0QkFBSSxjQUFBLEFBQWMsOENBQWxCLEFBQUksQUFBYyxBQUNsQjs0QkFBSSxTQUFKLEFBQWEsVUFBVSxBQUNuQjtnQ0FBSSxpQkFBSixBQUFxQixNQUFNLEFBQ3ZCO3VDQUFPLE1BQVAsQUFBTyxBQUFNLEFBQ2hCO0FBRkQsbUNBRU8sQUFDSDtvQ0FBSSxRQUFRLEtBQUEsQUFBSyxjQUFMLEFBQW1CLElBQS9CLEFBQVksQUFBdUIsQUFDbkM7b0NBQUksbUJBQUosQUFBSSxBQUFPLFFBQVEsQUFDZjsyQ0FBQSxBQUFPLEFBQ1Y7QUFDRDtzQ0FBTSxJQUFBLEFBQUksVUFBVixBQUFNLEFBQWMsQUFDdkI7QUFDSjtBQUNEOzRCQUFJLFNBQUEsQUFBUyxZQUFZLFNBQXJCLEFBQThCLFlBQVksU0FBOUMsQUFBdUQsV0FBVyxBQUM5RDttQ0FBQSxBQUFPLEFBQ1Y7QUFDRDs4QkFBTSxJQUFBLEFBQUksVUFBVixBQUFNLEFBQWMsQUFDdkI7Ozs7cUQsQUFFZ0IsT0FBTyxBQUNwQjsrQkFBTyxLQUFBLEFBQUssWUFBTCxBQUFpQixNQUFNLE9BQXZCLEFBQThCLGNBQXJDLEFBQU8sQUFBNEMsQUFDdEQ7Ozs7Ozs7OEIsQUFoV2dCOztBQzNCckI7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O2dCLEFBRXFCOzs7Ozs7OzJDLEFBRVYsSyxBQUFLLFFBQU8sQUFDZjtnREFBQSxBQUFZLEFBQ1o7K0NBQUEsQUFBVyxLQUFYLEFBQWdCLEFBQ2hCO2dDQUFBLEFBQVEsSUFBSSw2QkFBQSxBQUE0QixNQUE1QixBQUFpQyxTQUFRLEtBQUEsQUFBSyxVQUExRCxBQUFxRCxBQUFlLEFBRXBFOzs0QkFBSSxVQUFVLHNCQUFBLEFBQVksY0FBWixBQUEwQixJQUExQixBQUE4QixLQUE5QixBQUFtQyxNQUFuQyxBQUF5QyxPQUF6QyxBQUFnRCxRQUFoRCxBQUF3RCxHQUF4RCxBQUEyRCxZQUEzRCxBQUF1RSxNQUF2RSxBQUE2RSxhQUFhLE9BQXhHLEFBQWMsQUFBaUcsQUFDL0c7NEJBQUksbUJBQUosQUFBSSxBQUFPLFNBQVMsQUFDaEI7Z0NBQUksbUJBQU8sT0FBWCxBQUFJLEFBQWMsZUFBZSxBQUM3Qjt3Q0FBQSxBQUFRLGFBQWEsT0FBckIsQUFBNEIsQUFDL0I7QUFDRDtnQ0FBSSxtQkFBTyxPQUFQLEFBQWMsZ0JBQWdCLE9BQUEsQUFBTyxLQUFLLE9BQVosQUFBbUIsYUFBbkIsQUFBZ0MsU0FBbEUsQUFBMkUsR0FBRyxBQUMxRTt3Q0FBQSxBQUFRLFlBQVksT0FBcEIsQUFBMkIsQUFDOUI7QUFDSjtBQUVEOzs0QkFBSSxVQUFVLFFBQWQsQUFBYyxBQUFRLEFBRXRCOzs0QkFBSSxjQUFjLHNDQUFBLEFBQTRCLEtBQTlDLEFBQWtCLEFBQWlDLEFBQ25EO29DQUFBLEFBQVksR0FBWixBQUFlLFNBQVMsVUFBQSxBQUFVLE9BQU8sQUFDckM7MENBQUEsQUFBYyxLQUFkLEFBQW1CLFNBQW5CLEFBQTRCLEFBQy9CO0FBRkQsQUFHQTtnQ0FBQSxBQUFRLGdCQUFSLEFBQXdCLGNBQXhCLEFBQXNDLEFBRXRDOzs0QkFBSSxrQkFBa0Isd0JBQXRCLEFBQXNCLEFBQW9CLEFBQzFDOzRCQUFJLGNBQWMsMEJBQWxCLEFBQWtCLEFBQWdCLEFBQ2xDOzRCQUFJLFlBQVksd0JBQUEsQUFBYyxLQUFkLEFBQW1CLFNBQW5CLEFBQTRCLGlCQUE1QyxBQUFnQixBQUE2QyxBQUM3RDs0QkFBSSxvQkFBb0IsZ0NBQUEsQUFBc0IsU0FBdEIsQUFBK0IsaUJBQXZELEFBQXdCLEFBQWdELEFBRXhFOzs0QkFBSSxnQkFBZ0IsNEJBQUEsQUFBa0IsU0FBbEIsQUFBMkIsYUFBM0IsQUFBd0MsbUJBQTVELEFBQW9CLEFBQTJELEFBQy9FOytCQUFBLEFBQU8sQUFDVjs7Ozs7Ozs4QixBQWhDZ0I7O0FBbUNyQixvQkFBQSxBQUFRLHVCQUFSLEFBQStCOztBQ2pFL0I7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Z0IsQUFHcUIsNEJBRWpCO3VDQUFBLEFBQVksU0FBWixBQUFxQixhQUFyQixBQUFrQyxtQkFBbEMsQUFBcUQsV0FBVTswQ0FDM0Q7OzZDQUFBLEFBQVksQUFDWjs0Q0FBQSxBQUFXLFNBQVgsQUFBb0IsQUFDcEI7NENBQUEsQUFBVyxhQUFYLEFBQXdCLEFBQ3hCOzRDQUFBLEFBQVcsbUJBQVgsQUFBOEIsQUFDOUI7NENBQUEsQUFBVyxXQUFYLEFBQXNCLEFBRXRCOzt5QkFBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO3lCQUFBLEFBQUssY0FBTCxBQUFtQixBQUNuQjt5QkFBQSxBQUFLLHFCQUFMLEFBQTBCLEFBQzFCO3lCQUFBLEFBQUssYUFBTCxBQUFrQixBQUNsQjt5QkFBQSxBQUFLLG9CQUFMLEFBQXlCLEFBQ3pCO3lCQUFBLEFBQUssY0FBTCxBQUFtQixBQUN0Qjs7Ozs7OENBRVEsQUFDTDs0QkFBSSxPQUFKLEFBQVcsQUFDWDs2QkFBQSxBQUFLLDBDQUFnQyxVQUFBLEFBQUMsU0FBWSxBQUM5QztpQ0FBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDaEI7aUNBQUEsQUFBSyxXQUFMLEFBQWdCLE9BQU8sc0JBQXZCLEFBQXVCLEFBQVksOEJBQW5DLEFBQWlFLEtBQUssWUFBTSxBQUN4RTtxQ0FBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7QUFDSDtBQUhELEFBSUg7QUFORCxBQUF5QixBQU96Qix5QkFQeUI7K0JBT2xCLEtBQVAsQUFBWSxBQUNmOzs7O2dEQUVVLEFBQ1A7NEJBQUcsbUJBQU8sS0FBVixBQUFHLEFBQVksb0JBQW1CLEFBQzlCO2dDQUFHLENBQUMsS0FBSixBQUFTLGFBQVksQUFDakI7dUNBQU8sS0FBUCxBQUFZLEFBQ2Y7QUFGRCxtQ0FFSyxBQUNEOzZEQUFtQixVQUFBLEFBQUMsU0FBWSxBQUM1QjtBQUNIO0FBRkQsQUFBTyxBQUdWLGlDQUhVO0FBSWQ7QUFSRCwrQkFRSyxBQUNEO21DQUFPLEtBQVAsQUFBTyxBQUFLLEFBQ2Y7QUFDSjs7OztxRCxBQUVnQixNQUFLLEFBQ2xCO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLE1BQVgsQUFBaUIsQUFFakI7OytCQUFPLEtBQUEsQUFBSyxtQkFBTCxBQUF3QixpQkFBL0IsQUFBTyxBQUF5QyxBQUNuRDs7OztpREFFVyxBQUNSOzRCQUFJLE9BQUosQUFBVyxBQUNYOzZCQUFBLEFBQUssUUFBTCxBQUFhLEFBQ2I7cURBQW1CLFVBQUEsQUFBQyxTQUFZLEFBQzVCO2lDQUFBLEFBQUssbUJBQUwsQUFBd0IsVUFBeEIsQUFBa0MsS0FBSyxZQUFNLEFBQ3pDO3FDQUFBLEFBQUssV0FBTCxBQUFnQixPQUFPLHNCQUF2QixBQUF1QixBQUFZLEFBQ25DO3FDQUFBLEFBQUssVUFBTCxBQUFlLEFBQ2Y7cUNBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ25CO3FDQUFBLEFBQUsscUJBQUwsQUFBMEIsQUFDMUI7cUNBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCO0FBQ0g7QUFQRCxBQVFIO0FBVEQsQUFBTyxBQVVWLHlCQVZVOzs7Ozs7OzhCLEFBckRNOztBQWtFckIsNENBQVEsY0FBUixBQUFzQjs7Ozs7Ozs7Ozs7Ozs7OztpQkM1RnRCOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFHQTs7Ozs7Ozs7Z0IsQUFFcUI7Ozs7Ozs7eUUsQUFFMkIsU0FBUyxBQUNqRDs7aUNBQ1MsUUFERixBQUNVLEFBQ2I7aUNBQUssUUFGRixBQUVVLEFBQ2I7eUNBQUssQUFBUSxXQUFSLEFBQW1CLElBQUksVUFBQSxBQUFDLFdBQWMsQUFDdkM7b0NBQUk7eUNBQ0ssVUFESSxBQUNNLEFBQ2Y7eUNBQUssVUFGVCxBQUFhLEFBRU0sQUFFbkI7QUFKYSxBQUNUO29DQUdBLG1CQUFPLFVBQVgsQUFBSSxBQUFpQixRQUFRLEFBQ3pCOzJDQUFBLEFBQU8sSUFBSSxVQUFYLEFBQXFCLEFBQ3hCO0FBQ0Q7dUNBQUEsQUFBTyxBQUNWO0FBWkUsQUFHRSxBQVVMLDZCQVZLO2tDQUhULEFBQU8sQUFhRyxBQUViO0FBZlUsQUFDSDs7Ozt5RSxBQWdCb0MsU0FBUyxBQUNqRDs7a0NBQU8sQUFDRyxBQUNOO3lDQUZHLEFBRVUsQUFDYjs4Q0FIRyxBQUdlLEFBQ2xCO29DQUFRLFFBSkwsQUFJYSxBQUNoQjtzQ0FBVSxRQUxQLEFBS2UsQUFDbEI7a0RBQWMsQUFBUSxFQUFSLEFBQVUsSUFBSSxVQUFBLEFBQUMsV0FBYyxBQUN2Qzs7b0RBQ29CLFVBRGIsQUFDdUIsQUFDMUI7MENBQU0sVUFGSCxBQUVhLEFBQ2hCOzZDQUFTLG1CQUFPLFVBQVAsQUFBaUIsS0FBSSxVQUFyQixBQUErQixJQUhyQyxBQUd5QyxBQUM1QztpREFKSixBQUFPLEFBSVUsQUFFcEI7QUFOVSxBQUNIO0FBUlosQUFBTyxBQU1XLEFBU3JCLDZCQVRxQjtBQU5YLEFBQ0g7Ozs7OEQsQUFnQnlCLFNBQVMsQUFDdEM7NEJBQUk7aUNBQ0ssUUFEVCxBQUFhLEFBQ0ksQUFFakI7QUFIYSxBQUNUOzRCQUVBLG1CQUFPLFFBQVgsQUFBSSxBQUFlLFdBQVcsQUFDMUI7bUNBQUEsQUFBTyxJQUFJLFFBQVgsQUFBbUIsQUFDdEI7QUFDRDs0QkFBSSxtQkFBTyxRQUFYLEFBQUksQUFBZSxXQUFXLEFBQzFCO21DQUFBLEFBQU8sSUFBSSxRQUFYLEFBQW1CLEFBQ3RCO0FBQ0Q7K0JBQUEsQUFBTyxLQUFQLEFBQVksQUFDWjsrQkFBQSxBQUFPLEFBQ1Y7Ozs7OEQsQUFFZ0MsU0FBUyxBQUN0Qzs7a0NBQU8sQUFDRyxBQUNOO3lDQUZHLEFBRVUsQUFDYjsyQ0FBZSxRQUhaLEFBR29CLEFBQ3ZCO3dDQUFZLG1CQUFPLFFBQVAsQUFBZSxLQUFJLFFBQW5CLEFBQTJCLElBSnBDLEFBSXdDLEFBQzNDO3dDQUFZLG1CQUFPLFFBQVAsQUFBZSxLQUFJLFFBQW5CLEFBQTJCLElBTDNDLEFBQU8sQUFLd0MsQUFFbEQ7QUFQVSxBQUNIOzs7OzJDLEFBUU0sVUFBVSxBQUNwQjs0QkFBSSxPQUFKLEFBQVcsQUFDWDtvQ0FBTyxBQUFLLG1CQUFVLEFBQVMsSUFBSSxVQUFBLEFBQUMsU0FBWSxBQUM1QztnQ0FBSSxRQUFBLEFBQVEsT0FBWixBQUFtQiwyQkFBMkIsQUFDMUM7dUNBQU8sS0FBQSxBQUFLLHFDQUFaLEFBQU8sQUFBMEMsQUFDcEQ7QUFGRCxtQ0FFTyxJQUFJLFFBQUEsQUFBUSxPQUFaLEFBQW1CLGdCQUFnQixBQUN0Qzt1Q0FBTyxLQUFBLEFBQUssMEJBQVosQUFBTyxBQUErQixBQUN6QztBQUNEO21DQUFBLEFBQU8sQUFDVjtBQVBELEFBQU8sQUFBZSxBQVF6Qix5QkFSeUIsQ0FBZjs7OzsyQyxBQVVHLGFBQWEsQUFDdkI7NEJBQUksT0FBSixBQUFXLEFBQ1g7NEJBQUksT0FBQSxBQUFPLGdCQUFYLEFBQTJCLFVBQVUsQUFDakM7d0NBQU8sQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixJQUFJLFVBQUEsQUFBVSxTQUFTLEFBQ2xEO29DQUFJLFFBQUEsQUFBUSxPQUFaLEFBQW1CLDJCQUEyQixBQUMxQzsyQ0FBTyxLQUFBLEFBQUsscUNBQVosQUFBTyxBQUEwQyxBQUNwRDtBQUZELHVDQUVPLElBQUksUUFBQSxBQUFRLE9BQVosQUFBbUIsZ0JBQWdCLEFBQ3RDOzJDQUFPLEtBQUEsQUFBSywwQkFBWixBQUFPLEFBQStCLEFBQ3pDO0FBQ0Q7dUNBQUEsQUFBTyxBQUNWO0FBUEQsQUFBTyxBQVFWLDZCQVJVO0FBRFgsK0JBU08sQUFDSDttQ0FBQSxBQUFPLEFBQ1Y7QUFDSjs7Ozs7Ozs4QixBQXhGZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Z0IsQUFFYSx5QixBQUFBOzs7Ozs7O21FLEFBRTZCLGNBQWMsQUFDaEQ7K0JBQU8sdUNBQVAsQUFBTyxBQUE2QixBQUN2Qzs7OztrRSxBQUVvQyxnQixBQUFnQixvQkFBb0IsQUFDckU7K0JBQU8sc0NBQUEsQUFBNEIsZ0JBQW5DLEFBQU8sQUFBNEMsQUFDdEQ7Ozs7NEQsQUFFOEIsYyxBQUFjLFksQUFBWSxRQUFRLEFBQzdEOytCQUFPLGdDQUFBLEFBQXNCLGNBQXRCLEFBQW9DLFlBQTNDLEFBQU8sQUFBZ0QsQUFDMUQ7Ozs7Ozs7Ozs7Ozs7QUNoQkw7Ozs7Ozs7O2dCLEFBR3FCLG9CQUVqQiwyQkFBQSxBQUFZLGNBQVosQUFBMEIsWUFBMUIsQUFBc0MsUUFBUTtzQ0FDMUM7O3dDQUFBLEFBQVksQUFDWjt1Q0FBQSxBQUFXLGNBQVgsQUFBeUIsQUFDekI7dUNBQUEsQUFBVyxZQUFYLEFBQXVCLEFBRXZCOztxQkFBQSxBQUFLLEtBQUwsQUFBVSxBQUNWO3FCQUFBLEFBQUssSUFBTCxBQUFTLEFBQ1Q7cUJBQUEsQUFBSyxJQUFMLEFBQVMsQUFDVDtxQkFBQSxBQUFLLElBQUwsQUFBUyxBQUNaO0E7OzhCLEFBWGdCOzs7Ozs7OztBQ0hyQjs7Ozs7Ozs7Z0IsQUFHcUIsMEJBRWpCLGlDQUFBLEFBQVksZ0JBQVosQUFBNEIsb0JBQW9CO3NDQUM1Qzs7d0NBQUEsQUFBWSxBQUNaO3VDQUFBLEFBQVcsZ0JBQVgsQUFBMkIsQUFFM0I7O3FCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7cUJBQUEsQUFBSyxJQUFMLEFBQVMsQUFDVDtxQkFBQSxBQUFLLElBQUwsQUFBUyxBQUNaO0E7OzhCLEFBVGdCOzs7Ozs7OztBQ0hyQjs7Ozs7Ozs7Z0IsQUFHcUIsMkJBRWpCLGtDQUFBLEFBQVksY0FBYztzQ0FDdEI7O3dDQUFBLEFBQVksQUFDWjt1Q0FBQSxBQUFXLGNBQVgsQUFBeUIsQUFFekI7O3FCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7cUJBQUEsQUFBSyxJQUFMLEFBQVMsQUFDWjtBOzs4QixBQVJnQjs7QUNIckI7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxnQkFBTSxlQUFOLEFBQXFCO0FBQ3JCLGdCQUFNLG1CQUFOLEFBQXlCO0FBQ3pCLGdCQUFNLGtCQUFOLEFBQXdCO0FBQ3hCLGdCQUFNLHNCQUFOLEFBQTRCO0FBQzVCLGdCQUFNLGdCQUFOLEFBQXNCO0FBQ3RCLGdCQUFNLHVCQUFOLEFBQTZCO0FBQzdCLGdCQUFNLHVCQUFOLEFBQTZCOztnQixBQUVSLHdCQUVqQjttQ0FBQSxBQUFZLEtBQVosQUFBaUIsU0FBakIsQUFBMEIsaUJBQTFCLEFBQTJDLFFBQVE7MENBQy9DOzs2Q0FBQSxBQUFZLEFBQ1o7NENBQUEsQUFBVyxLQUFYLEFBQWdCLEFBQ2hCOzRDQUFBLEFBQVcsU0FBWCxBQUFvQixBQUNwQjs0Q0FBQSxBQUFXLGlCQUFYLEFBQTRCLEFBRTVCOzt3QkFBSSxPQUFKLEFBQVcsQUFDWDt5QkFBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO3lCQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7eUJBQUEsQUFBSyxrQkFBTCxBQUF1QixBQUN2Qjt5QkFBQSxBQUFLLHVCQUF1QixZQUFXLEFBQUUsQ0FBekMsQUFDQTt5QkFBQSxBQUFLLDRDQUFrQyxVQUFBLEFBQVMsU0FBUyxBQUNyRDs2QkFBQSxBQUFLLHVCQUFMLEFBQTRCLEFBQy9CO0FBRkQsQUFBMkIsQUFJM0IscUJBSjJCOzs0QkFJM0IsQUFBUSxzQkFBUixBQUE4QixtQkFBbUIsVUFBQSxBQUFDLE9BQVUsQUFDeEQ7NEJBQUksUUFBUSxNQUFaLEFBQWtCLEFBQ2xCOzRCQUFJLGVBQWUsTUFBQSxBQUFNLDRCQUF6QixBQUFtQixBQUFrQyxBQUNyRDs0QkFBSSxtQkFBQSxBQUFPLGlCQUFpQixhQUFBLEFBQWEsVUFBekMsQUFBbUQsc0JBQXNCLEFBQ3JFO2dDQUFJLE1BQUEsQUFBTSxjQUFjLDJCQUFBLEFBQWlCLEtBQXpDLEFBQThDLE9BQU8sQUFDakQ7cUNBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ3JCO0FBRkQsbUNBRU8sSUFBSSxNQUFBLEFBQU0sY0FBYywyQkFBQSxBQUFpQixLQUF6QyxBQUE4QyxTQUFTLEFBQzFEO3FDQUFBLEFBQUssZUFBTCxBQUFvQixBQUN2QjtBQUNKO0FBQ0o7QUFWRCxBQVdIOzs7Ozs4Q0FDUyxBQUNOOzRCQUFJLE9BQUosQUFBVyxBQUNYO21DQUFXLFlBQU0sQUFDYjtpQ0FBQSxBQUFLLFFBQUwsQUFBYSxtQkFBbUIsc0JBQWhDLEFBQWdDLEFBQVksOEJBQThCLHNCQUExRSxBQUEwRSxBQUFZLEFBQ3pGO0FBRkQsMkJBQUEsQUFFRyxBQUNOOzs7O2lELEFBRVksT0FBTyxBQUNoQjtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxPQUFYLEFBQWtCLEFBRWxCOzs0QkFBSSxPQUFPLE1BQVgsQUFBaUIsQUFDakI7Z0NBQUEsQUFBUSxBQUNKO2lDQUFBLEFBQUssQUFDRDtBQUNBO0FBQ0o7aUNBQUEsQUFBSyxBQUNEO3FDQUFBLEFBQUssZ0JBQUwsQUFBcUIsY0FBckIsQUFBbUMsQUFDbkM7QUFDSjtpQ0FBQSxBQUFLLEFBQ0Q7cUNBQUEsQUFBSyxxQkFBTCxBQUEwQixBQUMxQjtBQUNKO2lDQUFBLEFBQUssQUFDRDtxQ0FBQSxBQUFLLGdCQUFMLEFBQXFCLGdCQUFyQixBQUFxQyxBQUNyQztxQ0FBQSxBQUFLLFFBQUwsQUFBYSx3QkFBYixBQUFxQyxBQUNyQztBQUNKO0FBQ0k7cUNBQUEsQUFBSyxnQkFBTCxBQUFxQixLQUFyQixBQUEwQixBQUMxQjtBQWhCUixBQWtCSDs7Ozs7bUQsQUFFYyxPQUFPLEFBQ2xCO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLE9BQVgsQUFBa0IsQUFDbEI7NEJBQUksT0FBTyxNQUFYLEFBQWlCLEFBQ2pCO2dDQUFBLEFBQVEsQUFDSjtpQ0FBQSxBQUFLLEFBQ0Q7cUNBQUEsQUFBSyxnQkFBTCxBQUFxQixnQkFBckIsQUFBcUMsQUFDckM7QUFDSjtpQ0FBQSxBQUFLLEFBQ0Q7QUFDQTtBQUNKO0FBQ0k7cUNBQUEsQUFBSyxnQkFBTCxBQUFxQixPQUFyQixBQUE0QixBQUM1QjtBQVRSLEFBV0g7Ozs7OzJDLEFBRU0sU0FBUyxBQUNaO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLFNBQVgsQUFBb0IsQUFFcEI7OzRCQUFJLFVBQVUsS0FBZCxBQUFtQixBQUNuQjtxREFBbUIsVUFBQSxBQUFDLFNBQVksQUFDNUI7b0NBQUEsQUFBUSxLQUFSLEFBQWE7NENBQ0csc0JBQU0sQUFDZDtBQUNIO0FBSEwsQUFBc0IsQUFLekI7QUFMeUIsQUFDbEI7QUFGUixBQUFPLEFBT1YseUJBUFU7Ozs7c0RBU08sQUFDZDsrQkFBTyxLQUFQLEFBQVksQUFDZjs7Ozs7Ozs4QixBQTlGZ0I7O0FBaUdyQixvQkFBQSxBQUFRLGdCQUFSLEFBQXdCO0FBQ3hCLG9CQUFBLEFBQVEsdUJBQVIsQUFBK0I7QUFDL0Isb0JBQUEsQUFBUSx1QkFBUixBQUErQjtBQUMvQixvQkFBQSxBQUFRLG1CQUFSLEFBQTJCOzs7Ozs7O0FDdklwQixnQkFBTSxzQ0FBTixBQUFxQjtBQUNyQixnQkFBTSxzQkFBTixBQUFhO0FBQ2IsZ0JBQU0sd0JBQU4sQUFBYztBQUNkLGdCQUFNLG9CQUFOLEFBQVk7QUFDWixnQkFBTSxzQkFBTixBQUFhO0FBQ2IsZ0JBQU0sd0JBQU4sQUFBYztBQUNkLGdCQUFNLDBCQUFOLEFBQWU7QUFDZixnQkFBTSw0QkFBTixBQUFnQjtBQUNoQixnQkFBTSwwQkFBTixBQUFlO0FBQ2YsZ0JBQU0sc0JBQU4sQUFBYTtBQUNiLGdCQUFNLHNCQUFOLEFBQWE7QUFDYixnQkFBTSw4QkFBTixBQUFpQjtBQUNqQixnQkFBTSx3REFBTixBQUE4QjtBQUM5QixnQkFBTSxrRUFBTixBQUFtQztBQUNuQyxnQkFBTSxrRUFBTixBQUFtQzs7QUNkMUM7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7OztBQUVBOztBQUdBOzs7Ozs7Ozs7Ozs7QUFJQSxnQkFBTSxnQkFBTixBQUFzQjtBQUN0QixnQkFBTSxRQUFOLEFBQWM7QUFDZCxnQkFBTSxhQUFOLEFBQW1COztnQixBQUVFLGdDQUVqQjsyQ0FBQSxBQUFZLFNBQVosQUFBcUIsaUJBQXJCLEFBQXNDLFdBQVU7MENBQzVDOzs0Q0FBQSxBQUFZLEFBQ1o7MkNBQUEsQUFBVyxTQUFYLEFBQW9CLEFBQ3BCOzJDQUFBLEFBQVcsaUJBQVgsQUFBNEIsQUFDNUI7MkNBQUEsQUFBVyxXQUFYLEFBQXNCLEFBRXRCOzt5QkFBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO3lCQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFDdkI7eUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ2pCO3lCQUFBLEFBQUssY0FBYyxVQUFuQixBQUNIOzs7OztxRCxBQUVnQixNQUFNLEFBQ25COytCQUFPLEtBQUEsQUFBSyxrQkFBTCxBQUF1QixNQUE5QixBQUFPLEFBQTZCLEFBQ3ZDOzs7O3NELEFBRWlCLE0sQUFBTSxvQkFBb0IsQUFDeEM7Z0RBQUEsQUFBWSxBQUNaOytDQUFBLEFBQVcsTUFBWCxBQUFpQixBQUVqQjs7NEJBQUksT0FBSixBQUFXLEFBQ1g7NEJBQUksb0JBQUo7NEJBQWtCLGVBQWxCOzRCQUEyQixhQUEzQjs0QkFBa0Msa0JBQWxDLEFBQ0E7cURBQW1CLFVBQUEsQUFBQyxTQUFZLEFBQzVCO2lDQUFBLEFBQUssVUFBTCxBQUFlLGtCQUFmLEFBQWlDLEtBQUssVUFBQSxBQUFDLGNBQWlCLEFBQ3BEO3FDQUFBLEFBQUssVUFBTCxBQUFlLE9BQU8sK0JBQUEsQUFBZSw4QkFBZixBQUE2QyxNQUFuRSxBQUFzQixBQUFtRCxxQkFBekUsQUFBOEYsS0FBSyxZQUFNLEFBQ3JHO21EQUFlLGFBQUEsQUFBYSw0QkFBYixBQUF5QyxlQUF4RCxBQUFlLEFBQXdELEFBQ3ZFOzhDQUFVLGFBQUEsQUFBYSw0QkFBYixBQUF5QyxPQUFuRCxBQUFVLEFBQWdELEFBQzFEOzRDQUFRLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixpQkFBN0IsQUFBUSxBQUFzQyxBQUM5QztpREFBYSw4QkFBQSxBQUFvQixjQUFwQixBQUFrQyxPQUEvQyxBQUFhLEFBQXlDLEFBQ3REO3lDQUFBLEFBQUssWUFBTCxBQUFpQixJQUFqQixBQUFxQixBQUNyQjs0Q0FBQSxBQUFRLEFBQ1g7QUFQRCxBQVFIO0FBVEQsQUFVSDtBQVhELEFBQU8sQUFZVix5QkFaVTs7OztpRCxBQWNFLGMsQUFBYyxZLEFBQVksUUFBUSxBQUMzQztnREFBQSxBQUFZLEFBQ1o7K0NBQUEsQUFBVyxjQUFYLEFBQXlCLEFBQ3pCOytDQUFBLEFBQVcsWUFBWCxBQUF1QixBQUV2Qjs7NEJBQUksT0FBSixBQUFXLEFBQ1g7cURBQW1CLFVBQUEsQUFBQyxTQUFELEFBQVUsUUFBVSxBQUVuQzs7Z0NBQUksYUFBYSxDQUNiLEtBQUEsQUFBSyxRQUFMLEFBQWEsb0NBQWIsQUFBc0MsaUJBRHpCLHVCQUViLEtBQUEsQUFBSyxRQUFMLEFBQWEsVUFGakIsQUFBaUIsQUFFYixBQUF1QixBQUczQjs7Z0NBQUksS0FBSyxLQUFBLEFBQUssUUFBTCxBQUFhLGtCQUFiLEFBQStCLE1BQU0sS0FBckMsQUFBMEMsU0FBUyxDQUFBLEFBQUMsbUNBQUQsQUFBeUIsT0FBckYsQUFBUyxBQUFtRCxBQUFnQyxBQUU1Rjs7Z0NBQUksZUFBSixBQUFtQixBQUNuQjtnQ0FBRyxtQkFBSCxBQUFHLEFBQU8sU0FBUyxBQUNmO3FDQUFLLElBQUwsQUFBUyxTQUFULEFBQWtCLFFBQVEsQUFDdEI7d0NBQUksT0FBQSxBQUFPLGVBQVgsQUFBSSxBQUFzQixRQUFRLEFBQzlCOzRDQUFJLFFBQVEsS0FBQSxBQUFLLGdCQUFMLEFBQXFCLGtCQUFrQixPQUFuRCxBQUFZLEFBQXVDLEFBQU8sQUFDMUQ7cURBQUEsQUFBYSxLQUFLLEVBQUMsR0FBRCxBQUFJLE9BQU8sR0FBN0IsQUFBa0IsQUFBYyxBQUNuQztBQUNKO0FBQ0o7QUFFRDs7aUNBQUEsQUFBSyxVQUFMLEFBQWUsT0FBTywrQkFBQSxBQUFlLHdCQUFmLEFBQXVDLGNBQXZDLEFBQXFELFlBQTNFLEFBQXNCLEFBQWlFLGVBQXZGLEFBQXNHLEtBQUssWUFBTSxBQUM3RztvQ0FBSSxVQUFVLEdBQUEsQUFBRyw0QkFBSCxBQUErQixZQUE3QyxBQUFjLEFBQTJDLEFBQ3pEO29DQUFBLEFBQUksU0FBUyxBQUNUOzJDQUFPLElBQUEsQUFBSSxNQUFYLEFBQU8sQUFBVSxBQUNwQjtBQUZELHVDQUVPLEFBQ0g7QUFDSDtBQUNEO3FDQUFBLEFBQUssUUFBTCxBQUFhLHdCQUFiLEFBQXFDLEFBQ3hDO0FBUkQsQUFTSDtBQTVCRCxBQUFPLEFBNkJWLHlCQTdCVTs7OztzRCxBQStCTyxZQUFZLEFBQzFCO2dEQUFBLEFBQVksQUFDWjsrQ0FBQSxBQUFXLFlBQVgsQUFBdUIsQUFFdkI7OzRCQUFJLE9BQUosQUFBVyxBQUNYO3FEQUFtQixVQUFBLEFBQUMsU0FBWSxBQUM1QjtpQ0FBQSxBQUFLLFVBQUwsQUFBZSxrQkFBZixBQUFpQyxLQUFLLFVBQUEsQUFBQyxjQUFpQixBQUNwRDtxQ0FBQSxBQUFLLFlBQUwsQUFBaUIsT0FBakIsQUFBd0IsQUFDeEI7NkNBQUEsQUFBYSw0QkFBYixBQUF5QyxlQUF6QyxBQUF3RCxTQUFTLFdBQWpFLEFBQTRFLEFBQzVFO3FDQUFBLEFBQUssVUFBTCxBQUFlLE9BQU8sK0JBQUEsQUFBZSwrQkFBK0IsV0FBcEUsQUFBc0IsQUFBOEMsQUFBVyxVQUEvRSxBQUF5RixLQUF6RixBQUE4RixBQUNqRztBQUpELEFBS0g7QUFORCxBQUFPLEFBT1YseUJBUFU7Ozs7OENBU0QsQUFDTjs0QkFBSSxrQkFBa0IsS0FBdEIsQUFBMkIsQUFDM0I7NEJBQUksV0FBSixBQUFlLEFBQ2Y7NkJBQUEsQUFBSyxjQUFjLFVBQW5CLEFBQ0E7d0NBQUEsQUFBZ0IsUUFBUSxVQUFBLEFBQUMsWUFBZSxBQUNwQztnQ0FBSSxBQUNBO3lDQUFBLEFBQVMsS0FBSyxXQUFkLEFBQWMsQUFBVyxBQUM1QjtBQUZELDhCQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7QUFDSDtBQUNKO0FBTkQsQUFPQTsrQkFBTyxrQkFBQSxBQUFRLElBQWYsQUFBTyxBQUFZLEFBQ3RCOzs7Ozs7OzhCLEFBckdnQjs7QUN0Q3JCOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Z0IsQUFHcUIsOEJBRWpCO3lDQUFBLEFBQVksY0FBWixBQUEwQixPQUExQixBQUFpQyxTQUFROzBDQUNyQzs7NENBQUEsQUFBWSxBQUNaOzJDQUFBLEFBQVcsY0FBWCxBQUF5QixBQUN6QjsyQ0FBQSxBQUFXLE9BQVgsQUFBa0IsQUFDbEI7MkNBQUEsQUFBVyxTQUFYLEFBQW9CLEFBRXBCOzt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDcEI7eUJBQUEsQUFBSyxRQUFMLEFBQWEsQUFDYjt5QkFBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO3lCQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjt5QkFBQSxBQUFLLHNCQUFzQixVQUEzQixBQUNIOzs7OzsrQ0FFVSxBQUNQOytCQUFPLEtBQVAsQUFBWSxBQUNmOzs7OzRDQUVPLEFBQ0o7K0JBQU8sS0FBUCxBQUFZLEFBQ2Y7Ozs7MkMsQUFFTSxNLEFBQU0sUUFBTyxBQUNoQjtnREFBQSxBQUFZLEFBQ1o7K0NBQUEsQUFBVyxNQUFYLEFBQWlCLEFBRWpCOzs0QkFBSSxLQUFKLEFBQVMsV0FBVyxBQUNoQjtrQ0FBTSxJQUFBLEFBQUksTUFBVixBQUFNLEFBQVUsQUFDbkI7QUFDRDsrQkFBTyxLQUFBLEFBQUssUUFBTCxBQUFhLGFBQWEsS0FBMUIsQUFBK0IsY0FBL0IsQUFBNkMsTUFBcEQsQUFBTyxBQUFtRCxBQUM3RDs7OztxRCxBQUVnQixNQUFNLEFBQ25COytCQUFPLEtBQUEsQUFBSyxRQUFMLEFBQWEsa0JBQWIsQUFBK0IsTUFBTSxLQUE1QyxBQUFPLEFBQXFDLEFBQUssQUFDcEQ7Ozs7OENBRVE7b0NBQ0w7OzRCQUFJLEtBQUosQUFBUyxXQUFXLEFBQ2hCO2tDQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjtBQUNEOzZCQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjs2QkFBQSxBQUFLLG9CQUFMLEFBQXlCLFFBQVEsVUFBQSxBQUFDLFNBQVksQUFDMUM7Z0NBQUksQUFDQTt3Q0FDSDtBQUZELDhCQUVFLE9BQUEsQUFBTSxHQUFHLEFBQ1A7d0NBQUEsQUFBUSxLQUFSLEFBQWEsOERBQWIsQUFBMkUsQUFDOUU7QUFDSjtBQU5ELDJCQUFBLEFBTUcsQUFDSDsrQkFBTyxLQUFBLEFBQUssUUFBTCxBQUFhLGtCQUFwQixBQUFPLEFBQStCLEFBQ3pDOzs7O2dELEFBRVcsU0FBUSxBQUNoQjtnREFBQSxBQUFZLEFBQ1o7K0NBQUEsQUFBVyxTQUFYLEFBQW9CLEFBRXBCOzs0QkFBSSxPQUFKLEFBQVcsQUFDWDs2QkFBQSxBQUFLLG9CQUFMLEFBQXlCLElBQXpCLEFBQTZCLEFBQzdCOzt5Q0FDaUIsdUJBQU0sQUFDZjtxQ0FBQSxBQUFLLG9CQUFMLEFBQXlCLE9BQXpCLEFBQWdDLEFBQ25DO0FBSEwsQUFBTyxBQUtWO0FBTFUsQUFDSDs7Ozs7Ozs4QixBQTNEUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0IsQUN2QlIsK0IsQUFBQTtnREFDWDs7Z0RBQWdEO3dCQUFwQyxBQUFvQyw4RUFBMUIsQUFBMEI7d0JBQVIsQUFBUSxtQkFBQTs7MENBQUE7OzRKQUFBLEFBQ3hDLEFBQ047OzBCQUFBLEFBQUssU0FBUyxVQUZnQyxBQUU5QyxBQUF3QjsyQkFDekI7Ozs7YyxBQUp1Qzs7Z0IsQUFPN0IsOEIsQUFBQTsrQ0FDWDs7K0NBQXVDO3dCQUEzQixBQUEyQiw4RUFBakIsQUFBaUI7OzBDQUFBOztxSkFBQSxBQUMvQixBQUNQOzs7O2MsQUFIc0M7O2dCLEFBTTVCLDRCLEFBQUE7NkNBQ1g7OzZDQUE2Qzt3QkFBakMsQUFBaUMsOEVBQXZCLEFBQXVCOzswQ0FBQTs7aUpBQUEsQUFDckMsQUFDUDs7OztjLEFBSG9DOztnQixBQU0xQiwyQixBQUFBOzRDQUNUOzs0Q0FBNEM7d0JBQWhDLEFBQWdDLDhFQUF0QixBQUFzQjs7MENBQUE7OytJQUFBLEFBQ2xDLEFBQ1Q7Ozs7YyxBQUhpQzs7Ozs7Ozs7Ozs7Ozs7OztpQkNuQnRDOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7OztBQUdBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBR0EsZ0JBQU0sV0FBTixBQUFpQjtBQUNqQixnQkFBTSxVQUFOLEFBQWdCO0FBQ2hCLGdCQUFNLGtCQUFOLEFBQXdCOztBQUV4QixnQkFBTSwwQkFBTixBQUFnQztBQUNoQyxnQkFBTSw2QkFBNkIsMEJBQW5DLEFBQTZEOztnQixBQUV4QyxzQ0FFakI7aURBQUEsQUFBWSxLQUFaLEFBQWlCLFFBQVE7MENBQ3JCOzt5QkFBQSxBQUFLLE1BQUwsQUFBVyxBQUNYO3lCQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7eUJBQUEsQUFBSyxjQUFjLG1CQUFBLEFBQU8sVUFBVSxPQUFqQixBQUF3QixjQUEzQyxBQUF5RCxBQUN6RDt3QkFBSSxtQkFBbUIsbUJBQUEsQUFBTyxVQUFVLE9BQWpCLEFBQXdCLGFBQS9DLEFBQTRELEFBQzVEO3lCQUFBLEFBQUssV0FBVyxtQkFBQSxBQUFPLHFCQUFxQixtQkFBTyxpQkFBbkMsQUFBNEIsQUFBd0IsWUFBVSxpQkFBOUQsQUFBK0UsV0FBL0YsQUFBeUcsQUFDekc7eUJBQUEsQUFBSyxVQUFVLG1CQUFBLEFBQU8scUJBQXFCLG1CQUFPLGlCQUFuQyxBQUE0QixBQUF3QixXQUFTLGlCQUE3RCxBQUE4RSxVQUE3RixBQUFzRyxBQUN0Rzt5QkFBQSxBQUFLLGlCQUFMLEFBQXNCLEFBQ3pCOzs7OztpRCxBQUVZLFEsQUFBUSxPQUFPLEFBQ3hCOzRCQUFJLG1CQUFtQixtQkFBTyxLQUFQLEFBQVksVUFBVSxLQUFBLEFBQUssT0FBM0IsQUFBa0MsYUFBekQsQUFBc0UsQUFDdEU7NEJBQUksZ0JBQWdCLG1CQUFBLEFBQU8scUJBQXFCLG1CQUFPLGlCQUFuQyxBQUE0QixBQUF3QixpQkFBZSxpQkFBbkUsQUFBb0YsZ0JBQWUsQ0FBQywyQkFBeEgsQUFBdUgsQUFDdkg7c0NBQUEsQUFBYyxRQUFRLFVBQUEsQUFBUyxTQUFTLEFBQ3BDO29DQUFBLEFBQVEsUUFBUixBQUFnQixBQUNuQjtBQUZELEFBR0E7K0JBQUEsQUFBTyxBQUNWOzs7OzBDLEFBRUssVUFBVTtvQ0FDWjs7bUNBQU8sQUFBSSxRQUFRLFVBQUEsQUFBQyxTQUFELEFBQVUsUUFBVyxBQUNwQztnQ0FBTSxPQUFPLElBQWIsQUFBYSxBQUFJLEFBQ2pCO2lDQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFDdkI7aUNBQUEsQUFBSyxVQUFVLFVBQUEsQUFBQyxjQUFpQixBQUM3QjtzQ0FBQSxBQUFLLGFBQUwsQUFBa0IsUUFBUSw2QkFBQSxBQUFxQiwwQ0FBL0MsQUFBMEIsQUFBK0QsQUFDNUY7QUFGRCxBQUlBOztpQ0FBQSxBQUFLLHFCQUFxQixZQUFNLEFBQzVCO29DQUFJLEtBQUEsQUFBSyxlQUFULEFBQXdCLFVBQVMsQUFDN0I7NENBQVEsS0FBUixBQUFhLEFBRVQ7OzZDQUFBLEFBQUssQUFDTDtBQUNJO3NEQUFBLEFBQUssaUJBQUwsQUFBc0IsQUFDdEI7b0RBQU0sa0JBQWtCLEtBQUEsQUFBSyxrQkFBN0IsQUFBd0IsQUFBdUIsQUFDL0M7b0RBQUksbUJBQUosQUFBSSxBQUFPLGtCQUFrQixBQUN6Qjt3REFBSSxtQkFBTyxNQUFQLEFBQVksYUFBYSxNQUFBLEFBQUssYUFBbEMsQUFBK0MsaUJBQWlCLEFBQzVEOzhEQUFBLEFBQUssYUFBTCxBQUFrQixRQUFRLGdDQUExQixBQUEwQixBQUF3QixBQUNyRDtBQUNEOzBEQUFBLEFBQUssV0FBTCxBQUFnQixBQUNuQjtBQUxELHVEQUtPLEFBQ0g7MERBQUEsQUFBSyxhQUFMLEFBQWtCLFFBQVEsZ0NBQTFCLEFBQTBCLEFBQXdCLEFBQ3JEO0FBQ0Q7d0RBQVEsS0FBUixBQUFhLEFBQ2I7QUFDSDtBQUVEOzs2Q0FBQSxBQUFLLEFBQ0Q7a0RBQUEsQUFBSyxhQUFMLEFBQWtCLFFBQVEsZ0NBQTFCLEFBQTBCLEFBQXdCLEFBQ2xEO0FBRUo7O0FBQ0k7Z0RBQUcsTUFBQSxBQUFLLGtCQUFrQixNQUExQixBQUErQixVQUFTLEFBQ3BDO3NEQUFBLEFBQUssaUJBQWlCLE1BQUEsQUFBSyxpQkFBM0IsQUFBNEMsQUFDL0M7QUFDRDtrREFBQSxBQUFLLGFBQUwsQUFBa0IsUUFBUSw4QkFBc0Isa0RBQWtELEtBQWxELEFBQXVELFNBQXZHLEFBQTBCLEFBQXNGLEFBQ2hIO0FBM0JSLEFBNkJIOztBQUNKO0FBaENELEFBa0NBOztpQ0FBQSxBQUFLLEtBQUwsQUFBVSxRQUFRLE1BQWxCLEFBQXVCLEFBQ3ZCO2dDQUFJLG1CQUFPLE1BQVgsQUFBSSxBQUFZLFdBQVcsQUFDdkI7cUNBQUEsQUFBSyxpQkFBTCxBQUFzQiw0QkFBNEIsTUFBbEQsQUFBdUQsQUFDMUQ7QUFFRDs7Z0NBQUksbUJBQU8sTUFBWCxBQUFJLEFBQVksY0FBYyxBQUMxQjtxQ0FBSyxJQUFMLEFBQVMsS0FBSyxNQUFkLEFBQW1CLGFBQWEsQUFDNUI7d0NBQUksTUFBQSxBQUFLLFlBQUwsQUFBaUIsZUFBckIsQUFBSSxBQUFnQyxJQUFJLEFBQ3BDOzZDQUFBLEFBQUssaUJBQUwsQUFBc0IsR0FBRyxNQUFBLEFBQUssWUFBOUIsQUFBeUIsQUFBaUIsQUFDN0M7QUFDSjtBQUNKO0FBQ0Q7Z0NBQUksTUFBQSxBQUFLLGlCQUFpQixNQUExQixBQUErQixVQUFVLEFBQ3JDOzJDQUFXLFlBQVcsQUFDbEI7eUNBQUEsQUFBSyxLQUFLLGdCQUFBLEFBQU0sT0FBaEIsQUFBVSxBQUFhLEFBQzFCO0FBRkQsbUNBRUcsTUFGSCxBQUVRLEFBQ1g7QUFKRCxtQ0FJSyxBQUNEO3FDQUFBLEFBQUssS0FBSyxnQkFBQSxBQUFNLE9BQWhCLEFBQVUsQUFBYSxBQUMxQjtBQUVKO0FBN0RELEFBQU8sQUE4RFYseUJBOURVOzs7OzZDLEFBZ0VGLFUsQUFBVSxRQUFRO3FDQUN2Qjs7NkJBQUEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUNLLEtBQUssd0JBQWdCLEFBQ2xCO2dDQUFJLGFBQUEsQUFBYSxPQUFiLEFBQW9CLFNBQXhCLEFBQWlDLEdBQUcsQUFDaEM7b0NBQUksQUFDQTt3Q0FBTSxtQkFBbUIsZ0JBQUEsQUFBTSxPQUEvQixBQUF5QixBQUFhLEFBQ3RDOzJDQUFBLEFBQU8sQUFDVjtBQUhELGtDQUdFLE9BQUEsQUFBTyxLQUFLLEFBQ1Y7MkNBQUEsQUFBSyxLQUFMLEFBQVUsU0FBUyxpQ0FBeUIsaUVBQUEsQUFBaUUsZUFBN0csQUFBbUIsQUFBeUcsQUFDNUg7MkNBQUEsQUFBTyxBQUNWO0FBQ0o7QUFSRCxtQ0FRTyxBQUNIO3VDQUFBLEFBQUssS0FBTCxBQUFVLFNBQVMsaUNBQW5CLEFBQW1CLEFBQXlCLEFBQzVDO3VDQUFBLEFBQU8sQUFDVjtBQUNKO0FBZEwsMkJBQUEsQUFlSyxNQUFNLGlCQUFTLEFBQ1o7bUNBQUEsQUFBSyxLQUFMLEFBQVUsU0FBVixBQUFtQixBQUNuQjttQ0FBQSxBQUFPLEFBQ1Y7QUFsQkwsQUFtQkg7Ozs7MkMsQUFFTSxTQUFTO3FDQUNaOzs2QkFBQSxBQUFLLE1BQU0sQ0FBWCxBQUFXLEFBQUMsVUFBWixBQUNLLE1BQU0saUJBQUE7bUNBQVMsT0FBQSxBQUFLLEtBQUwsQUFBVSxTQUFuQixBQUFTLEFBQW1CO0FBRHZDLEFBRUg7Ozs7Ozs7OEIsQUEvR2dCOztBQWtIckIsNENBQVEsd0JBQVIsQUFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQixBQ2hKWDs7Ozs7Ozs0QyxBQUVULE9BQU8sQUFDWDsrQkFBQSxBQUFPLFFBQVAsQUFBZSxNQUFmLEFBQXFCLEFBQ3hCOzs7Ozs7OzhCLEFBSmdCOztBQ0RyQjs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTs7QUFFQSxnQkFBQSxBQUFJOztBQUVKLGdCQUFJLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBUyxRQUFRLEFBQzFCO3VCQUFPLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsV0FBeEMsQUFBbUQsQUFDdEQ7QUFGRDs7QUFJQSxtQkFBQSxBQUFPLFFBQVAsQUFBZSxTQUFmLEFBQXdCOztBQUV4QixtQkFBQSxBQUFPLFFBQVAsQUFBZSxjQUFjLFVBQUEsQUFBUyxNQUFNLEFBQ3hDO2tDQUFBLEFBQWtCLEFBQ3JCO0FBRkQ7O0FBSUEsbUJBQUEsQUFBTyxRQUFQLEFBQWUsYUFBYSxVQUFBLEFBQVMsT0FBVCxBQUFnQixlQUFlLEFBQ3ZEO29CQUFJLENBQUMsT0FBTCxBQUFLLEFBQU8sUUFBUSxBQUNoQjswQkFBTSxJQUFBLEFBQUksTUFBTSxtQkFBQSxBQUFtQixnQkFBbkIsQUFBbUMsc0JBQW5ELEFBQU0sQUFBbUUsQUFDNUU7QUFDSjtBQUpEOzs7Ozs7O0FDOUJBOzs7Ozs7Ozs7Ozs7OztBQWNBOztBQUNBLElBQUksZ0JBQWdCLFFBQVEsa0VBQVIsQ0FBcEI7QUFDQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxFQUFsQzs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxRQUFsQyxDQUEyQyxnQkFBM0MsRUFBNkQsQ0FBQyxZQUFZOztBQUV0RSxRQUFJLE9BQU8sRUFBWDtBQUNBLFNBQUssU0FBTCxHQUFpQixVQUFVLEdBQVYsRUFBZTtBQUM1QixlQUFPLEdBQVA7QUFDSCxLQUZEOztBQUlBLFNBQUssSUFBTCxHQUFZLFlBQVk7QUFDcEIsZUFBTyxJQUFQO0FBQ0gsS0FGRDtBQUlILENBWDRELENBQTdEOztBQWFBLFFBQVEsTUFBUixDQUFlLGlCQUFmLEVBQWtDLE9BQWxDLENBQTBDLHNCQUExQyxFQUFrRSxZQUFZO0FBQzFFLFdBQU8sSUFBSSxjQUFjLG9CQUFsQixFQUFQO0FBQ0gsQ0FGRDs7QUFJQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxPQUFsQyxDQUEwQyxzQkFBMUMsRUFBa0UsQ0FBQyxzQkFBRCxFQUF5QixnQkFBekIsRUFBMkMsVUFBVSxvQkFBVixFQUFnQyxjQUFoQyxFQUFnRDtBQUN6SixXQUFPLHFCQUFxQixNQUFyQixDQUE0QixlQUFlLFdBQTNDLEVBQXdELGNBQXhELENBQVA7QUFDSCxDQUZpRSxDQUFsRTs7QUFJQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxPQUFsQyxDQUEwQyxnQkFBMUMsRUFBNEQsQ0FBQyxZQUFELEVBQWUsVUFBZixFQUEyQixzQkFBM0IsRUFBbUQsTUFBbkQsRUFBMkQsVUFBVSxVQUFWLEVBQXNCLFFBQXRCLEVBQWdDLG9CQUFoQyxFQUFzRCxJQUF0RCxFQUE0RDs7QUFFL0ssZUFBVyw0QkFBWCxHQUEwQyxLQUExQzs7QUFFQSxlQUFXLGNBQVgsR0FBNEIsWUFBWTtBQUNwQyxZQUFJLENBQUMsV0FBVyw0QkFBaEIsRUFBOEM7QUFDMUMsdUJBQVcsNEJBQVgsR0FBMEMsSUFBMUM7QUFDQSxxQkFBUyxZQUFZO0FBQ2pCLDJCQUFXLDRCQUFYLEdBQTBDLEtBQTFDO0FBQ0EscUJBQUssS0FBTCxDQUFXLDZDQUFYO0FBQ0EsMkJBQVcsTUFBWDtBQUNILGFBSkQsRUFJRyxHQUpIO0FBS0g7QUFDSixLQVREOztBQVdBLFFBQUksaUJBQWlCOztBQUVqQixxQkFBYSxxQkFBVSxTQUFWLEVBQXFCLFVBQXJCLEVBQWlDLFdBQWpDLEVBQThDO0FBQ3ZELHNCQUFVLE1BQVYsQ0FBaUIsS0FBakIsQ0FBdUIsU0FBdkIsRUFBa0MsQ0FBQyxVQUFELEVBQWEsQ0FBYixFQUFnQixNQUFoQixDQUF1QixXQUF2QixDQUFsQztBQUNILFNBSmdCO0FBS2pCLGdCQUFRLGdCQUFVLE1BQVYsRUFBa0I7QUFDdEIsbUJBQU8sT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFdBQVcsSUFBbkQ7QUFDSCxTQVBnQjtBQVFqQixtQkFBVyxtQkFBVSxNQUFWLEVBQWtCLE1BQWxCLEVBQTBCO0FBQ2pDLGdCQUFJLFdBQVcsTUFBWCxJQUFzQixDQUFDLEtBQUssTUFBTCxDQUFZLE1BQVosQ0FBRCxJQUF3QixDQUFDLEtBQUssTUFBTCxDQUFZLE1BQVosQ0FBbkQsRUFBeUU7QUFDckUsdUJBQU8sSUFBUDtBQUNIO0FBQ0QsZ0JBQUksS0FBSyxNQUFMLENBQVksTUFBWixNQUF3QixLQUFLLE1BQUwsQ0FBWSxNQUFaLENBQTVCLEVBQWlEO0FBQzdDLHVCQUFPLEtBQVA7QUFDSDtBQUNELGdCQUFJLElBQUksT0FBTyxNQUFmO0FBQ0EsZ0JBQUksT0FBTyxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLHVCQUFPLEtBQVA7QUFDSDtBQUNELGlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksQ0FBcEIsRUFBdUIsR0FBdkIsRUFBNEI7QUFDeEIsb0JBQUksT0FBTyxDQUFQLE1BQWMsT0FBTyxDQUFQLENBQWxCLEVBQTZCO0FBQ3pCLDJCQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sSUFBUDtBQUNILFNBekJnQjtBQTBCakIsY0FBTSxjQUFVLFdBQVYsRUFBdUI7QUFDekIsd0JBQVksT0FBWixDQUFvQixlQUFlLGtCQUFuQztBQUNBLHdCQUFZLFNBQVosQ0FBc0IsZUFBZSxvQkFBckM7QUFDQSx3QkFBWSxZQUFaLENBQXlCLGVBQWUsbUJBQXhDO0FBQ0Esd0JBQVksYUFBWixDQUEwQixlQUFlLG9CQUF6Qzs7QUFFQSxpQkFBSyxLQUFMLENBQVcsMkRBQVg7QUFDSCxTQWpDZ0I7QUFrQ2pCLHdCQUFnQix3QkFBVSxJQUFWLEVBQWdCLFNBQWhCLEVBQTJCO0FBQ3ZDLGlCQUFLLEtBQUwsQ0FBVyx5Q0FBeUMsU0FBekMsR0FBcUQsV0FBckQsR0FBbUUsS0FBSyxTQUFMLENBQWUsSUFBZixDQUE5RTtBQUNBLHVCQUFXLE1BQVgsQ0FDSSxZQUFZO0FBQ1IsdUJBQU8sS0FBSyxTQUFMLENBQVA7QUFDSCxhQUhMLEVBSUksVUFBVSxRQUFWLEVBQW9CLFFBQXBCLEVBQThCO0FBQzFCLHFCQUFLLEtBQUwsQ0FBVyxXQUFXLFNBQVgsR0FBdUIsV0FBdkIsR0FBcUMsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFyQyxHQUE0RCxnQkFBNUQsR0FBK0UsUUFBL0UsR0FBMEYsTUFBMUYsR0FBbUcsUUFBOUc7QUFDQSxxQ0FBcUIsV0FBckIsQ0FBaUMsZUFBakMsQ0FBaUQsZ0JBQWpELENBQWtFLElBQWxFLEVBQXdFLFNBQXhFLEVBQW1GLFFBQW5GO0FBQ0gsYUFQTDtBQVNILFNBN0NnQjtBQThDakIsNEJBQW9CLDRCQUFVLElBQVYsRUFBZ0I7QUFDaEMsaUJBQUssS0FBTCxDQUFXLFVBQVUsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFWLEdBQWlDLFFBQTVDOztBQUVBLGlCQUFLLElBQUksSUFBVCxJQUFpQixJQUFqQixFQUF1QjtBQUNuQiwrQkFBZSxjQUFmLENBQThCLElBQTlCLEVBQW9DLElBQXBDO0FBQ0g7O0FBRUQsdUJBQVcsY0FBWDtBQUNILFNBdERnQjtBQXVEakIsOEJBQXNCLDhCQUFVLElBQVYsRUFBZ0I7QUFDbEMsaUJBQUssS0FBTCxDQUFXLFVBQVUsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFWLEdBQWlDLFVBQTVDO0FBQ0EsdUJBQVcsY0FBWDtBQUNILFNBMURnQjtBQTJEakIsNkJBQXFCLDZCQUFVLElBQVYsRUFBZ0IsWUFBaEIsRUFBOEIsUUFBOUIsRUFBd0MsUUFBeEMsRUFBa0Q7QUFDbkUsZ0JBQUksY0FBYyxJQUFsQjtBQUNBLGlCQUFLLElBQUksSUFBVCxJQUFpQixJQUFqQixFQUF1QjtBQUNuQixvQkFBSSxTQUFTLFlBQWIsRUFBMkI7QUFDdkIsa0NBQWMsS0FBZDtBQUNIO0FBQ0o7O0FBRUQsZ0JBQUksV0FBSixFQUFpQjtBQUNiLHFCQUFLLEtBQUwsQ0FBVyxXQUFXLFlBQVgsR0FBMEIscUJBQTFCLEdBQWtELEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBN0Q7QUFDQSwrQkFBZSxjQUFmLENBQThCLElBQTlCLEVBQW9DLFlBQXBDO0FBQ0g7O0FBRUQsZ0JBQUksYUFBYSxRQUFqQixFQUEyQjtBQUN2QixxQkFBSyxLQUFMLENBQVcsdUNBQXVDLFlBQXZDLEdBQXNELHFCQUFqRTtBQUNBO0FBQ0g7O0FBRUQsaUJBQUssS0FBTCxDQUFXLDhCQUE4QixZQUE5QixHQUE2QyxtQkFBN0MsR0FBbUUsUUFBbkUsR0FBOEUsR0FBekY7O0FBRUEsaUJBQUssWUFBTCxJQUFxQixRQUFyQjtBQUNBLHVCQUFXLGNBQVg7QUFDSCxTQWpGZ0I7QUFrRmpCLDhCQUFzQiw4QkFBVSxJQUFWLEVBQWdCLFlBQWhCLEVBQThCLEtBQTlCLEVBQXFDLEtBQXJDLEVBQTRDLFdBQTVDLEVBQXlEO0FBQzNFLGdCQUFJLFFBQVEsS0FBSyxZQUFMLENBQVo7QUFDQSxnQkFBSSxjQUFjLE1BQU0sS0FBTixDQUFZLEtBQVosRUFBbUIsUUFBUSxLQUEzQixDQUFsQjtBQUNBLGdCQUFJLGVBQWUsU0FBZixDQUF5QixXQUF6QixFQUFzQyxXQUF0QyxDQUFKLEVBQXdEO0FBQ3BEO0FBQ0g7O0FBRUQsaUJBQUssS0FBTCxDQUFXLCtCQUErQixZQUEvQixHQUE4QyxxQkFBOUMsR0FBc0UsS0FBdEUsR0FBOEUsUUFBOUUsR0FBeUYsS0FBSyxTQUFMLENBQWUsV0FBZixDQUFwRzs7QUFFQSxnQkFBSSxPQUFPLFdBQVAsS0FBdUIsV0FBdkIsSUFBdUMsZUFBZSxZQUFZLE1BQVosS0FBdUIsQ0FBakYsRUFBcUY7QUFDakYsc0JBQU0sTUFBTixDQUFhLEtBQWIsRUFBb0IsS0FBcEI7QUFDQSwyQkFBVyxjQUFYO0FBQ0gsYUFIRCxNQUdPO0FBQ0gsK0JBQWUsV0FBZixDQUEyQixLQUEzQixFQUFrQyxLQUFsQyxFQUF5QyxXQUF6Qzs7QUFFQSxxQkFBSyxJQUFMLElBQWEsV0FBYixFQUEwQjtBQUN0Qix5QkFBSyxJQUFJLElBQVQsSUFBaUIsSUFBakIsRUFBdUI7QUFDbkIsdUNBQWUsY0FBZixDQUE4QixJQUE5QixFQUFvQyxJQUFwQztBQUNIO0FBQ0o7O0FBRUQsMkJBQVcsY0FBWDtBQUNIO0FBQ0o7QUF6R2dCLEtBQXJCOztBQTRHQSxTQUFLLEtBQUwsQ0FBVyxrQ0FBWDs7QUFFQSxXQUFPLGNBQVA7QUFFSCxDQS9IMkQsQ0FBNUQ7O0FBaUlBLFFBQVEsTUFBUixDQUFlLGlCQUFmLEVBQWtDLE9BQWxDLENBQTBDLGVBQTFDLEVBQTJELENBQUMsc0JBQUQsRUFBeUIsZ0JBQXpCLEVBQTJDLFNBQTNDLEVBQXNELE1BQXRELEVBQThELFVBQVUsb0JBQVYsRUFBZ0MsY0FBaEMsRUFBZ0QsT0FBaEQsRUFBeUQsSUFBekQsRUFBK0Q7QUFDcEwsUUFBSSxnQkFBZ0I7QUFDaEIsMEJBQWtCLDBCQUFVLEtBQVYsRUFBaUIsY0FBakIsRUFBaUM7QUFDL0MsbUJBQU8scUJBQXFCLGdCQUFyQixDQUFzQyxjQUF0QyxFQUFzRCxJQUF0RCxDQUEyRCxVQUFVLGVBQVYsRUFBMkI7QUFDekYscUJBQUssS0FBTCxDQUFXLDBDQUEwQyxjQUFyRDtBQUNBLHNCQUFNLEdBQU4sQ0FBVSxVQUFWLEVBQXNCLFlBQVk7QUFDOUIseUJBQUssS0FBTCxDQUFXLDRDQUE0QyxjQUF2RDtBQUNBLG9DQUFnQixPQUFoQjtBQUNILGlCQUhEO0FBSUEsc0JBQU0sS0FBTixHQUFjLGdCQUFnQixLQUE5QjtBQUNBLHVCQUFPLGVBQVA7QUFDSCxhQVJNLENBQVA7QUFTSCxTQVhlO0FBWWhCLG9CQUFZLHNCQUFZO0FBQ3BCLGlDQUFxQixVQUFyQixHQUFrQyxJQUFsQyxDQUF1QyxZQUFZO0FBQy9DLHFCQUFLLEtBQUwsQ0FBVyx1Q0FBWDtBQUNILGFBRkQ7QUFHSCxTQWhCZTtBQWlCaEIsaUJBQVMsbUJBQVk7QUFDakIsaUNBQXFCLE9BQXJCLEdBQStCLElBQS9CLENBQW9DLFlBQVk7QUFDNUMsK0JBQWUsSUFBZixDQUFvQixxQkFBcUIsV0FBekM7QUFDQSxxQkFBSyxLQUFMLENBQVcsb0NBQVg7QUFDSCxhQUhEO0FBSUgsU0F0QmU7QUF1QmhCLG1CQUFXLHFCQUFZO0FBQ25CLG1CQUFPLHFCQUFxQixTQUFyQixHQUFpQyxJQUFqQyxDQUFzQyxZQUFZO0FBQ3JELHFCQUFLLEtBQUwsQ0FBVyxvQ0FBWDtBQUNILGFBRk0sQ0FBUDtBQUdIO0FBM0JlLEtBQXBCOztBQThCQSxtQkFBZSxJQUFmLENBQW9CLHFCQUFxQixXQUF6QztBQUNBLFlBQVEsY0FBUixHQUF5QixjQUFjLFVBQXZDOztBQUVBLFNBQUssS0FBTCxDQUFXLGtDQUFYOztBQUVBLFdBQU8sYUFBUDtBQUNILENBckMwRCxDQUEzRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5NYXA7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnNldCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc2V0LnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlNldDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpe1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyLCBJVEVSQVRPUil7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgZm9yT2YoaXRlciwgZmFsc2UsIHJlc3VsdC5wdXNoLCByZXN1bHQsIElURVJBVE9SKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi9fdG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07IiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFLCAkY3JlYXRlKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWFxuICAgICwgY3JlYXRlICAgICAgICA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuL19pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQztcbn07IiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY29uc3RydWN0b3InKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgcmV0dXJuIG5ldyAoc3BlY2llc0NvbnN0cnVjdG9yKG9yaWdpbmFsKSkobGVuZ3RoKTtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBjcmVhdGUgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgYW5JbnN0YW5jZSAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZGVmaW5lZCAgICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIHNldFNwZWNpZXMgID0gcmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIGZhc3RLZXkgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXlcbiAgLCBTSVpFICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIEMsIE5BTUUsICdfaScpO1xuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCAnZm9yRWFjaCcpO1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIGZyb20gICAgPSByZXF1aXJlKCcuL19hcnJheS1mcm9tLWl0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgcmV0dXJuIGZyb20odGhpcyk7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIG1ldGEgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWV0YScpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuL19mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIGFuSW5zdGFuY2UgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBkUCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBlYWNoICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LW1ldGhvZHMnKSgwKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgaWYoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGFyZ2V0LCBDLCBOQU1FLCAnX2MnKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlO1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgZWFjaCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMsdG9KU09OJy5zcGxpdCgnLCcpLGZ1bmN0aW9uKEtFWSl7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgYW5JbnN0YW5jZSh0aGlzLCBDLCBLRVkpO1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pZFAoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzIuNC4wJ307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07IiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgICAgaWYodGhpcyBpbnN0YW5jZW9mIEMpe1xuICAgICAgICAgIHN3aXRjaChhcmd1bWVudHMubGVuZ3RoKXtcbiAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBDO1xuICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IEMoYSk7XG4gICAgICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgQyhhLCBiKTtcbiAgICAgICAgICB9IHJldHVybiBuZXcgQyhhLCBiLCBjKTtcbiAgICAgICAgfSByZXR1cm4gQy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUubWV0aG9kcy4lTkFNRSVcbiAgICBpZihJU19QUk9UTyl7XG4gICAgICAoZXhwb3J0cy52aXJ0dWFsIHx8IChleHBvcnRzLnZpcnR1YWwgPSB7fSkpW2tleV0gPSBvdXQ7XG4gICAgICAvLyBleHBvcnQgcHJvdG8gbWV0aG9kcyB0byBjb3JlLiVDT05TVFJVQ1RPUiUucHJvdG90eXBlLiVOQU1FJVxuICAgICAgaWYodHlwZSAmICRleHBvcnQuUiAmJiBleHBQcm90byAmJiAhZXhwUHJvdG9ba2V5XSloaWRlKGV4cFByb3RvLCBrZXksIG91dCk7XG4gICAgfVxuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YCBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpXG4gICwgQlJFQUsgICAgICAgPSB7fVxuICAsIFJFVFVSTiAgICAgID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUil7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyIGRQICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50OyIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBpc0FycmF5KGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKVxuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCAkZW50cmllcyAgID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZFxuICAgICwgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmVcbiAgICAsIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJGFueU5hdGl2ZSl7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UpKTtcbiAgICBpZihJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSl7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYoIUxJQlJBUlkgJiYgIWhhcyhJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59OyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgcmV0dXJuIHtkb25lOiBzYWZlID0gdHJ1ZX07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCJ2YXIgTUVUQSAgICAgPSByZXF1aXJlKCcuL191aWQnKSgnbWV0YScpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBzZXREZXNjICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBpZCAgICAgICA9IDA7XG52YXIgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBmdW5jdGlvbigpe1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIGlzRXh0ZW5zaWJsZShPYmplY3QucHJldmVudEV4dGVuc2lvbnMoe30pKTtcbn0pO1xudmFyIHNldE1ldGEgPSBmdW5jdGlvbihpdCl7XG4gIHNldERlc2MoaXQsIE1FVEEsIHt2YWx1ZToge1xuICAgIGk6ICdPJyArICsraWQsIC8vIG9iamVjdCBJRFxuICAgIHc6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH19KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gb2JqZWN0IElEXG4gIH0gcmV0dXJuIGl0W01FVEFdLmk7XG59O1xudmFyIGdldFdlYWsgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgaWYoIWhhcyhpdCwgTUVUQSkpe1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuIHRydWU7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24oaXQpe1xuICBpZihGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpc2V0TWV0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgbWV0YSA9IG1vZHVsZS5leHBvcnRzID0ge1xuICBLRVk6ICAgICAgTUVUQSxcbiAgTkVFRDogICAgIGZhbHNlLFxuICBmYXN0S2V5OiAgZmFzdEtleSxcbiAgZ2V0V2VhazogIGdldFdlYWssXG4gIG9uRnJlZXplOiBvbkZyZWV6ZVxufTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSlwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlKGhlYWQpe1xuICAgICAgZm4gICA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGlmKGhlYWQpbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYoaXNOb2RlKXtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG4gIH0gZWxzZSBpZihPYnNlcnZlcil7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWVcbiAgICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24oZm4pe1xuICAgIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkfTtcbiAgICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYoIWhlYWQpe1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTsiLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZFBzICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgRW1wdHkgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgUFJPVE9UWVBFICAgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0gZW51bUJ1Z0tleXMubGVuZ3RoXG4gICAgLCBsdCAgICAgPSAnPCdcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKXtcbiAgdmFyIHJlc3VsdDtcbiAgaWYoTyAhPT0gbnVsbCl7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKVxuICAsIHRvUHJpbWl0aXZlICAgID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJylcbiAgLCBkUCAgICAgICAgICAgICA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpe1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59OyIsInZhciBkUCAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGdldEtleXMgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpe1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgICA9IGdldEtleXMoUHJvcGVydGllcylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpID0gMFxuICAgICwgUDtcbiAgd2hpbGUobGVuZ3RoID4gaSlkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07IiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIElFX1BST1RPICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpXG4gICwgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbihPKXtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTsiLCJ2YXIgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b0lPYmplY3QgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIElFX1BST1RPICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIG5hbWVzKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKXtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYywgc2FmZSl7XG4gIGZvcih2YXIga2V5IGluIHNyYyl7XG4gICAgaWYoc2FmZSAmJiB0YXJnZXRba2V5XSl0YXJnZXRba2V5XSA9IHNyY1trZXldO1xuICAgIGVsc2UgaGlkZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICB9IHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faGlkZScpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY29yZSAgICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBkUCAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gdHlwZW9mIGNvcmVbS0VZXSA9PSAnZnVuY3Rpb24nID8gY29yZVtLRVldIDogZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaGFzID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBzdG9yZSAgICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpXG4gICwgU3ltYm9sICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbFxuICAsIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlOyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTsiLCJcInVzZSBzdHJpY3RcIjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYlhTd2libUZ0WlhNaU9sdGRMQ0p0WVhCd2FXNW5jeUk2SWlJc0ltWnBiR1VpT2lKbGN6WXViMkpxWldOMExuUnZMWE4wY21sdVp5NXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiWFgwPSIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2xhc3NvZiAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBpc09iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIGFuSW5zdGFuY2UgICAgICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBmb3JPZiAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIHRhc2sgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBtaWNyb3Rhc2sgICAgICAgICAgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpXG4gICwgUFJPTUlTRSAgICAgICAgICAgID0gJ1Byb21pc2UnXG4gICwgVHlwZUVycm9yICAgICAgICAgID0gZ2xvYmFsLlR5cGVFcnJvclxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgJFByb21pc2UgICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgICAgICAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGVtcHR5ICAgICAgICAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBJbnRlcm5hbCwgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24oKXtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSAgICAgPSAkUHJvbWlzZS5yZXNvbHZlKDEpXG4gICAgICAsIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbihleGVjKXsgZXhlYyhlbXB0eSwgZW1wdHkpOyB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIHdpdGggbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICByZXR1cm4gYSA9PT0gYiB8fCBhID09PSAkUHJvbWlzZSAmJiBiID09PSBXcmFwcGVyO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICByZXR1cm4gc2FtZUNvbnN0cnVjdG9yKCRQcm9taXNlLCBDKVxuICAgID8gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgOiBuZXcgR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihwcm9taXNlLCBpc1JlamVjdCl7XG4gIGlmKHByb21pc2UuX24pcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBvayAgICA9IHByb21pc2UuX3MgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCBkb21haW4gID0gcmVhY3Rpb24uZG9tYWluXG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXtcbiAgICAgICAgICAgIGlmKHByb21pc2UuX2ggPT0gMilvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihoYW5kbGVyID09PSB0cnVlKXJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgYWJydXB0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZihhYnJ1cHQpdGhyb3cgYWJydXB0LmVycm9yO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgaWYocHJvbWlzZS5faCA9PSAxKXJldHVybiBmYWxzZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jXG4gICAgLCBpICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbigpe1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmKGlzTm9kZSl7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpe1xuICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92fSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZighcHJvbWlzZS5fYSlwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocHJvbWlzZSA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7X3c6IHByb21pc2UsIF9kOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uICAgID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayAgICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgICA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX2EpdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHRoaXMuX3Mpbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHByb21pc2UgID0gbmV3IEludGVybmFsO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCAgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiAkUHJvbWlzZX0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgJFByb21pc2UgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgdmFyIHZhbHVlcyAgICA9IFtdXG4gICAgICAgICwgaW5kZXggICAgID0gMFxuICAgICAgICAsIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICB2YXIgJGluZGV4ICAgICAgICA9IGluZGV4KytcbiAgICAgICAgICAsIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkICA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pOyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4yIFNldCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdNYXAnLCB7dG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJyl9KTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdTZXQnLCB7dG9KU09OOiByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXRvLWpzb24nKSgnU2V0Jyl9KTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBJdGVyYXRvcnMgICAgID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJylcbiAgLCBUT19TVFJJTkdfVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbmZvcih2YXIgY29sbGVjdGlvbnMgPSBbJ05vZGVMaXN0JywgJ0RPTVRva2VuTGlzdCcsICdNZWRpYUxpc3QnLCAnU3R5bGVTaGVldExpc3QnLCAnQ1NTUnVsZUxpc3QnXSwgaSA9IDA7IGkgPCA1OyBpKyspe1xuICB2YXIgTkFNRSAgICAgICA9IGNvbGxlY3Rpb25zW2ldXG4gICAgLCBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdXG4gICAgLCBwcm90byAgICAgID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgaWYocHJvdG8gJiYgIXByb3RvW1RPX1NUUklOR19UQUddKWhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICBJdGVyYXRvcnNbTkFNRV0gPSBJdGVyYXRvcnMuQXJyYXk7XG59IiwiXG4vKipcbiAqIEV4cG9zZSBgRW1pdHRlcmAuXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBFbWl0dGVyO1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBuZXcgYEVtaXR0ZXJgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuZnVuY3Rpb24gRW1pdHRlcihvYmopIHtcbiAgaWYgKG9iaikgcmV0dXJuIG1peGluKG9iaik7XG59O1xuXG4vKipcbiAqIE1peGluIHRoZSBlbWl0dGVyIHByb3BlcnRpZXMuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbWl4aW4ob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBFbWl0dGVyLnByb3RvdHlwZSkge1xuICAgIG9ialtrZXldID0gRW1pdHRlci5wcm90b3R5cGVba2V5XTtcbiAgfVxuICByZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIExpc3RlbiBvbiB0aGUgZ2l2ZW4gYGV2ZW50YCB3aXRoIGBmbmAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub24gPVxuRW1pdHRlci5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgKHRoaXMuX2NhbGxiYWNrc1tldmVudF0gPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdKVxuICAgIC5wdXNoKGZuKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEFkZHMgYW4gYGV2ZW50YCBsaXN0ZW5lciB0aGF0IHdpbGwgYmUgaW52b2tlZCBhIHNpbmdsZVxuICogdGltZSB0aGVuIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgZnVuY3Rpb24gb24oKSB7XG4gICAgc2VsZi5vZmYoZXZlbnQsIG9uKTtcbiAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgb24uZm4gPSBmbjtcbiAgdGhpcy5vbihldmVudCwgb24pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBnaXZlbiBjYWxsYmFjayBmb3IgYGV2ZW50YCBvciBhbGxcbiAqIHJlZ2lzdGVyZWQgY2FsbGJhY2tzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9mZiA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVBbGxMaXN0ZW5lcnMgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICAvLyBhbGxcbiAgaWYgKDAgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIHRoaXMuX2NhbGxiYWNrcyA9IHt9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gc3BlY2lmaWMgZXZlbnRcbiAgdmFyIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gIGlmICghY2FsbGJhY2tzKSByZXR1cm4gdGhpcztcblxuICAvLyByZW1vdmUgYWxsIGhhbmRsZXJzXG4gIGlmICgxID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBkZWxldGUgdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHJlbW92ZSBzcGVjaWZpYyBoYW5kbGVyXG4gIHZhciBjYjtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjYWxsYmFja3MubGVuZ3RoOyBpKyspIHtcbiAgICBjYiA9IGNhbGxiYWNrc1tpXTtcbiAgICBpZiAoY2IgPT09IGZuIHx8IGNiLmZuID09PSBmbikge1xuICAgICAgY2FsbGJhY2tzLnNwbGljZShpLCAxKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogRW1pdCBgZXZlbnRgIHdpdGggdGhlIGdpdmVuIGFyZ3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge01peGVkfSAuLi5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICB2YXIgYXJncyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKVxuICAgICwgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcblxuICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgY2FsbGJhY2tzID0gY2FsbGJhY2tzLnNsaWNlKDApO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjYWxsYmFja3MubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgIGNhbGxiYWNrc1tpXS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogUmV0dXJuIGFycmF5IG9mIGNhbGxiYWNrcyBmb3IgYGV2ZW50YC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgcmV0dXJuIHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW107XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIHRoaXMgZW1pdHRlciBoYXMgYGV2ZW50YCBoYW5kbGVycy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmhhc0xpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcmV0dXJuICEhIHRoaXMubGlzdGVuZXJzKGV2ZW50KS5sZW5ndGg7XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQXR0cmlidXRlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBdHRyaWJ1dGUoKSB7XG4gICAgfVxuICAgIEF0dHJpYnV0ZS5RVUFMSUZJRVJfUFJPUEVSVFkgPSBcInF1YWxpZmllclwiO1xuICAgIEF0dHJpYnV0ZS5WQUxVRSA9IFwidmFsdWVcIjtcbiAgICByZXR1cm4gQXR0cmlidXRlO1xufSgpKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEF0dHJpYnV0ZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QXR0cmlidXRlLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBDb21tYW5kXzEgPSByZXF1aXJlKCcuL0NvbW1hbmQnKTtcbnZhciBDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kKGF0dHJpYnV0ZUlkLCBtZXRhZGF0YU5hbWUsIHZhbHVlKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUlkID0gYXR0cmlidXRlSWQ7XG4gICAgICAgIHRoaXMubWV0YWRhdGFOYW1lID0gbWV0YWRhdGFOYW1lO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuaWQgPSAnQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGEnO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwib3JnLm9wZW5kb2xwaGluLmNvcmUuY29tbS5DaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmRcIjtcbiAgICB9XG4gICAgcmV0dXJuIENoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZDtcbn0oQ29tbWFuZF8xW1wiZGVmYXVsdFwiXSkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1DaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmQuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBFdmVudEJ1c18xID0gcmVxdWlyZSgnLi9FdmVudEJ1cycpO1xudmFyIENsaWVudEF0dHJpYnV0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2xpZW50QXR0cmlidXRlKHByb3BlcnR5TmFtZSwgcXVhbGlmaWVyLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZTtcbiAgICAgICAgdGhpcy5pZCA9IFwiXCIgKyAoQ2xpZW50QXR0cmlidXRlLmNsaWVudEF0dHJpYnV0ZUluc3RhbmNlQ291bnQrKykgKyBcIkNcIjtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZUJ1cyA9IG5ldyBFdmVudEJ1c18xW1wiZGVmYXVsdFwiXSgpO1xuICAgICAgICB0aGlzLnF1YWxpZmllckNoYW5nZUJ1cyA9IG5ldyBFdmVudEJ1c18xW1wiZGVmYXVsdFwiXSgpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRRdWFsaWZpZXIocXVhbGlmaWVyKTtcbiAgICB9XG4gICAgLyoqIGEgY29weSBjb25zdHJ1Y3RvciB3aXRoIG5ldyBpZCBhbmQgbm8gcHJlc2VudGF0aW9uIG1vZGVsICovXG4gICAgQ2xpZW50QXR0cmlidXRlLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IENsaWVudEF0dHJpYnV0ZSh0aGlzLnByb3BlcnR5TmFtZSwgdGhpcy5nZXRRdWFsaWZpZXIoKSwgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIENsaWVudEF0dHJpYnV0ZS5wcm90b3R5cGUuc2V0UHJlc2VudGF0aW9uTW9kZWwgPSBmdW5jdGlvbiAocHJlc2VudGF0aW9uTW9kZWwpIHtcbiAgICAgICAgaWYgKHRoaXMucHJlc2VudGF0aW9uTW9kZWwpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IGNhbiBub3Qgc2V0IGEgcHJlc2VudGF0aW9uIG1vZGVsIGZvciBhbiBhdHRyaWJ1dGUgdGhhdCBpcyBhbHJlYWR5IGJvdW5kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVsID0gcHJlc2VudGF0aW9uTW9kZWw7XG4gICAgfTtcbiAgICBDbGllbnRBdHRyaWJ1dGUucHJvdG90eXBlLmdldFByZXNlbnRhdGlvbk1vZGVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVzZW50YXRpb25Nb2RlbDtcbiAgICB9O1xuICAgIENsaWVudEF0dHJpYnV0ZS5wcm90b3R5cGUuZ2V0VmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICAgIH07XG4gICAgQ2xpZW50QXR0cmlidXRlLnByb3RvdHlwZS5zZXRWYWx1ZSA9IGZ1bmN0aW9uIChuZXdWYWx1ZSkge1xuICAgICAgICB2YXIgdmVyaWZpZWRWYWx1ZSA9IENsaWVudEF0dHJpYnV0ZS5jaGVja1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgPT0gdmVyaWZpZWRWYWx1ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZlcmlmaWVkVmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VCdXMudHJpZ2dlcih7ICdvbGRWYWx1ZSc6IG9sZFZhbHVlLCAnbmV3VmFsdWUnOiB2ZXJpZmllZFZhbHVlIH0pO1xuICAgIH07XG4gICAgQ2xpZW50QXR0cmlidXRlLnByb3RvdHlwZS5zZXRRdWFsaWZpZXIgPSBmdW5jdGlvbiAobmV3UXVhbGlmaWVyKSB7XG4gICAgICAgIGlmICh0aGlzLnF1YWxpZmllciA9PSBuZXdRdWFsaWZpZXIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBvbGRRdWFsaWZpZXIgPSB0aGlzLnF1YWxpZmllcjtcbiAgICAgICAgdGhpcy5xdWFsaWZpZXIgPSBuZXdRdWFsaWZpZXI7XG4gICAgICAgIHRoaXMucXVhbGlmaWVyQ2hhbmdlQnVzLnRyaWdnZXIoeyAnb2xkVmFsdWUnOiBvbGRRdWFsaWZpZXIsICduZXdWYWx1ZSc6IG5ld1F1YWxpZmllciB9KTtcbiAgICB9O1xuICAgIENsaWVudEF0dHJpYnV0ZS5wcm90b3R5cGUuZ2V0UXVhbGlmaWVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWFsaWZpZXI7XG4gICAgfTtcbiAgICBDbGllbnRBdHRyaWJ1dGUuY2hlY2tWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFN0cmluZyB8fCByZXN1bHQgaW5zdGFuY2VvZiBCb29sZWFuIHx8IHJlc3VsdCBpbnN0YW5jZW9mIE51bWJlcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDbGllbnRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW4gQXR0cmlidXRlIG1heSBub3QgaXRzZWxmIGNvbnRhaW4gYW4gYXR0cmlidXRlIGFzIGEgdmFsdWUuIEFzc3VtaW5nIHlvdSBmb3Jnb3QgdG8gY2FsbCB2YWx1ZS5cIik7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmNoZWNrVmFsdWUodmFsdWUudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvayA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5TVVBQT1JURURfVkFMVUVfVFlQRVMuaW5kZXhPZih0eXBlb2YgcmVzdWx0KSA+IC0xIHx8IHJlc3VsdCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRyaWJ1dGUgdmFsdWVzIG9mIHRoaXMgdHlwZSBhcmUgbm90IGFsbG93ZWQ6IFwiICsgdHlwZW9mIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQ2xpZW50QXR0cmlidXRlLnByb3RvdHlwZS5vblZhbHVlQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlQnVzLm9uRXZlbnQoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgZXZlbnRIYW5kbGVyKHsgXCJvbGRWYWx1ZVwiOiB0aGlzLnZhbHVlLCBcIm5ld1ZhbHVlXCI6IHRoaXMudmFsdWUgfSk7XG4gICAgfTtcbiAgICBDbGllbnRBdHRyaWJ1dGUucHJvdG90eXBlLm9uUXVhbGlmaWVyQ2hhbmdlID0gZnVuY3Rpb24gKGV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLnF1YWxpZmllckNoYW5nZUJ1cy5vbkV2ZW50KGV2ZW50SGFuZGxlcik7XG4gICAgfTtcbiAgICBDbGllbnRBdHRyaWJ1dGUucHJvdG90eXBlLnN5bmNXaXRoID0gZnVuY3Rpb24gKHNvdXJjZUF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoc291cmNlQXR0cmlidXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFF1YWxpZmllcihzb3VyY2VBdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpOyAvLyBzZXF1ZW5jZSBpcyBpbXBvcnRhbnRcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoc291cmNlQXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2xpZW50QXR0cmlidXRlLlNVUFBPUlRFRF9WQUxVRV9UWVBFUyA9IFtcInN0cmluZ1wiLCBcIm51bWJlclwiLCBcImJvb2xlYW5cIl07XG4gICAgQ2xpZW50QXR0cmlidXRlLmNsaWVudEF0dHJpYnV0ZUluc3RhbmNlQ291bnQgPSAwO1xuICAgIHJldHVybiBDbGllbnRBdHRyaWJ1dGU7XG59KCkpO1xuZXhwb3J0cy5DbGllbnRBdHRyaWJ1dGUgPSBDbGllbnRBdHRyaWJ1dGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsaWVudEF0dHJpYnV0ZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIENsaWVudFByZXNlbnRhdGlvbk1vZGVsXzEgPSByZXF1aXJlKFwiLi9DbGllbnRQcmVzZW50YXRpb25Nb2RlbFwiKTtcbnZhciBDb2RlY18xID0gcmVxdWlyZShcIi4vQ29kZWNcIik7XG52YXIgQ29tbWFuZEJhdGNoZXJfMSA9IHJlcXVpcmUoXCIuL0NvbW1hbmRCYXRjaGVyXCIpO1xudmFyIENsaWVudENvbm5lY3RvciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2xpZW50Q29ubmVjdG9yKHRyYW5zbWl0dGVyLCBjbGllbnREb2xwaGluLCBzbGFja01TLCBtYXhCYXRjaFNpemUpIHtcbiAgICAgICAgaWYgKHNsYWNrTVMgPT09IHZvaWQgMCkgeyBzbGFja01TID0gMDsgfVxuICAgICAgICBpZiAobWF4QmF0Y2hTaXplID09PSB2b2lkIDApIHsgbWF4QmF0Y2hTaXplID0gNTA7IH1cbiAgICAgICAgdGhpcy5jb21tYW5kUXVldWUgPSBbXTtcbiAgICAgICAgdGhpcy5jdXJyZW50bHlTZW5kaW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHVzaEVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53YWl0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMudHJhbnNtaXR0ZXIgPSB0cmFuc21pdHRlcjtcbiAgICAgICAgdGhpcy5jbGllbnREb2xwaGluID0gY2xpZW50RG9scGhpbjtcbiAgICAgICAgdGhpcy5zbGFja01TID0gc2xhY2tNUztcbiAgICAgICAgdGhpcy5jb2RlYyA9IG5ldyBDb2RlY18xW1wiZGVmYXVsdFwiXSgpO1xuICAgICAgICB0aGlzLmNvbW1hbmRCYXRjaGVyID0gbmV3IENvbW1hbmRCYXRjaGVyXzEuQmxpbmRDb21tYW5kQmF0Y2hlcih0cnVlLCBtYXhCYXRjaFNpemUpO1xuICAgIH1cbiAgICBDbGllbnRDb25uZWN0b3IucHJvdG90eXBlLnNldENvbW1hbmRCYXRjaGVyID0gZnVuY3Rpb24gKG5ld0JhdGNoZXIpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kQmF0Y2hlciA9IG5ld0JhdGNoZXI7XG4gICAgfTtcbiAgICBDbGllbnRDb25uZWN0b3IucHJvdG90eXBlLnNldFB1c2hFbmFibGVkID0gZnVuY3Rpb24gKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5wdXNoRW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgfTtcbiAgICBDbGllbnRDb25uZWN0b3IucHJvdG90eXBlLnNldFB1c2hMaXN0ZW5lciA9IGZ1bmN0aW9uIChuZXdMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnB1c2hMaXN0ZW5lciA9IG5ld0xpc3RlbmVyO1xuICAgIH07XG4gICAgQ2xpZW50Q29ubmVjdG9yLnByb3RvdHlwZS5zZXRSZWxlYXNlQ29tbWFuZCA9IGZ1bmN0aW9uIChuZXdDb21tYW5kKSB7XG4gICAgICAgIHRoaXMucmVsZWFzZUNvbW1hbmQgPSBuZXdDb21tYW5kO1xuICAgIH07XG4gICAgQ2xpZW50Q29ubmVjdG9yLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGNvbW1hbmQsIG9uRmluaXNoZWQpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kUXVldWUucHVzaCh7IGNvbW1hbmQ6IGNvbW1hbmQsIGhhbmRsZXI6IG9uRmluaXNoZWQgfSk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRseVNlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpOyAvLyB0aGVyZSBpcyBub3QgcG9pbnQgaW4gcmVsZWFzaW5nIGlmIHdlIGRvIG5vdCBzZW5kIGF0bVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9TZW5kTmV4dCgpO1xuICAgIH07XG4gICAgQ2xpZW50Q29ubmVjdG9yLnByb3RvdHlwZS5kb1NlbmROZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy5jb21tYW5kUXVldWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHVzaEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVucXVldWVQdXNoQ29tbWFuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50bHlTZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudGx5U2VuZGluZyA9IHRydWU7XG4gICAgICAgIHZhciBjbWRzQW5kSGFuZGxlcnMgPSB0aGlzLmNvbW1hbmRCYXRjaGVyLmJhdGNoKHRoaXMuY29tbWFuZFF1ZXVlKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY21kc0FuZEhhbmRsZXJzW2NtZHNBbmRIYW5kbGVycy5sZW5ndGggLSAxXS5oYW5kbGVyO1xuICAgICAgICB2YXIgY29tbWFuZHMgPSBjbWRzQW5kSGFuZGxlcnMubWFwKGZ1bmN0aW9uIChjYWgpIHsgcmV0dXJuIGNhaC5jb21tYW5kOyB9KTtcbiAgICAgICAgdGhpcy50cmFuc21pdHRlci50cmFuc21pdChjb21tYW5kcywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwic2VydmVyIHJlc3BvbnNlOiBbXCIgKyByZXNwb25zZS5tYXAoaXQgPT4gaXQuaWQpLmpvaW4oXCIsIFwiKSArIFwiXSBcIik7XG4gICAgICAgICAgICB2YXIgdG91Y2hlZFBNcyA9IFtdO1xuICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaChmdW5jdGlvbiAoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaGVkID0gX3RoaXMuaGFuZGxlKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIGlmICh0b3VjaGVkKVxuICAgICAgICAgICAgICAgICAgICB0b3VjaGVkUE1zLnB1c2godG91Y2hlZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLm9uRmluaXNoZWQodG91Y2hlZFBNcyk7IC8vIHRvZG86IG1ha2UgdGhlbSB1bmlxdWU/XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWN1cnNpdmUgY2FsbDogZmV0Y2ggdGhlIG5leHQgaW4gbGluZSBidXQgYWxsb3cgYSBiaXQgb2Ygc2xhY2sgc3VjaCB0aGF0XG4gICAgICAgICAgICAvLyBkb2N1bWVudCBldmVudHMgY2FuIGZpcmUsIHJlbmRlcmluZyBpcyBkb25lIGFuZCBjb21tYW5kcyBjYW4gYmF0Y2ggdXBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMuZG9TZW5kTmV4dCgpOyB9LCBfdGhpcy5zbGFja01TKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDbGllbnRDb25uZWN0b3IucHJvdG90eXBlLmhhbmRsZSA9IGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gICAgICAgIGlmIChjb21tYW5kLmlkID09IFwiRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuaWQgPT0gXCJDcmVhdGVQcmVzZW50YXRpb25Nb2RlbFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tbWFuZC5pZCA9PSBcIlZhbHVlQ2hhbmdlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuaWQgPT0gXCJBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IGhhbmRsZSwgdW5rbm93biBjb21tYW5kIFwiICsgY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBDbGllbnRDb25uZWN0b3IucHJvdG90eXBlLmhhbmRsZURlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZCA9IGZ1bmN0aW9uIChzZXJ2ZXJDb21tYW5kKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IHRoaXMuY2xpZW50RG9scGhpbi5maW5kUHJlc2VudGF0aW9uTW9kZWxCeUlkKHNlcnZlckNvbW1hbmQucG1JZCk7XG4gICAgICAgIGlmICghbW9kZWwpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudE1vZGVsU3RvcmUoKS5kZWxldGVQcmVzZW50YXRpb25Nb2RlbChtb2RlbCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9O1xuICAgIENsaWVudENvbm5lY3Rvci5wcm90b3R5cGUuaGFuZGxlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kID0gZnVuY3Rpb24gKHNlcnZlckNvbW1hbmQpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuY2xpZW50RG9scGhpbi5nZXRDbGllbnRNb2RlbFN0b3JlKCkuY29udGFpbnNQcmVzZW50YXRpb25Nb2RlbChzZXJ2ZXJDb21tYW5kLnBtSWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhbHJlYWR5IGlzIGEgcHJlc2VudGF0aW9uIG1vZGVsIHdpdGggaWQgXCIgKyBzZXJ2ZXJDb21tYW5kLnBtSWQgKyBcIiAga25vd24gdG8gdGhlIGNsaWVudC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgc2VydmVyQ29tbWFuZC5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHZhciBjbGllbnRBdHRyaWJ1dGUgPSBfdGhpcy5jbGllbnREb2xwaGluLmF0dHJpYnV0ZShhdHRyLnByb3BlcnR5TmFtZSwgYXR0ci5xdWFsaWZpZXIsIGF0dHIudmFsdWUpO1xuICAgICAgICAgICAgaWYgKGF0dHIuaWQgJiYgYXR0ci5pZC5tYXRjaChcIi4qUyRcIikpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRBdHRyaWJ1dGUuaWQgPSBhdHRyLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKGNsaWVudEF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY2xpZW50UG0gPSBuZXcgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWxfMS5DbGllbnRQcmVzZW50YXRpb25Nb2RlbChzZXJ2ZXJDb21tYW5kLnBtSWQsIHNlcnZlckNvbW1hbmQucG1UeXBlKTtcbiAgICAgICAgY2xpZW50UG0uYWRkQXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcbiAgICAgICAgaWYgKHNlcnZlckNvbW1hbmQuY2xpZW50U2lkZU9ubHkpIHtcbiAgICAgICAgICAgIGNsaWVudFBtLmNsaWVudFNpZGVPbmx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmFkZChjbGllbnRQbSk7XG4gICAgICAgIHRoaXMuY2xpZW50RG9scGhpbi51cGRhdGVQcmVzZW50YXRpb25Nb2RlbFF1YWxpZmllcihjbGllbnRQbSk7XG4gICAgICAgIHJldHVybiBjbGllbnRQbTtcbiAgICB9O1xuICAgIENsaWVudENvbm5lY3Rvci5wcm90b3R5cGUuaGFuZGxlVmFsdWVDaGFuZ2VkQ29tbWFuZCA9IGZ1bmN0aW9uIChzZXJ2ZXJDb21tYW5kKSB7XG4gICAgICAgIHZhciBjbGllbnRBdHRyaWJ1dGUgPSB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmZpbmRBdHRyaWJ1dGVCeUlkKHNlcnZlckNvbW1hbmQuYXR0cmlidXRlSWQpO1xuICAgICAgICBpZiAoIWNsaWVudEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdHRyaWJ1dGUgd2l0aCBpZCBcIiArIHNlcnZlckNvbW1hbmQuYXR0cmlidXRlSWQgKyBcIiBub3QgZm91bmQsIGNhbm5vdCB1cGRhdGUgb2xkIHZhbHVlIFwiICsgc2VydmVyQ29tbWFuZC5vbGRWYWx1ZSArIFwiIHRvIG5ldyB2YWx1ZSBcIiArIHNlcnZlckNvbW1hbmQubmV3VmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsaWVudEF0dHJpYnV0ZS5nZXRWYWx1ZSgpID09IHNlcnZlckNvbW1hbmQubmV3VmFsdWUpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJub3RoaW5nIHRvIGRvLiBuZXcgdmFsdWUgPT0gb2xkIHZhbHVlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQmVsb3cgd2FzIHRoZSBjb2RlIHRoYXQgd291bGQgZW5mb3JjZSB0aGF0IHZhbHVlIGNoYW5nZXMgb25seSBhcHBlYXIgd2hlbiB0aGUgcHJvcGVyIG9sZFZhbHVlIGlzIGdpdmVuLlxuICAgICAgICAvLyBXaGlsZSB0aGF0IHNlZW1lZCBhcHByb3ByaWF0ZSBhdCBmaXJzdCwgdGhlcmUgYXJlIGFjdHVhbGx5IHZhbGlkIGNvbW1hbmQgc2VxdWVuY2VzIHdoZXJlIHRoZSBvbGRWYWx1ZSBpcyBub3QgcHJvcGVybHkgc2V0LlxuICAgICAgICAvLyBXZSBsZWF2ZSB0aGUgY29tbWVudGVkIGNvZGUgaW4gdGhlIGNvZGViYXNlIHRvIGFsbG93IGZvciBsb2dnaW5nL2RlYnVnZ2luZyBzdWNoIGNhc2VzLlxuICAgICAgICAvLyAgICAgICAgICAgIGlmKGNsaWVudEF0dHJpYnV0ZS5nZXRWYWx1ZSgpICE9IHNlcnZlckNvbW1hbmQub2xkVmFsdWUpIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdHRyaWJ1dGUgd2l0aCBpZCBcIitzZXJ2ZXJDb21tYW5kLmF0dHJpYnV0ZUlkK1wiIGFuZCB2YWx1ZSBcIiArIGNsaWVudEF0dHJpYnV0ZS5nZXRWYWx1ZSgpICtcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgd2FzIHNldCB0byB2YWx1ZSBcIiArIHNlcnZlckNvbW1hbmQubmV3VmFsdWUgKyBcIiBldmVuIHRob3VnaCB0aGUgY2hhbmdlIHdhcyBiYXNlZCBvbiBhbiBvdXRkYXRlZCBvbGQgdmFsdWUgb2YgXCIgKyBzZXJ2ZXJDb21tYW5kLm9sZFZhbHVlKTtcbiAgICAgICAgLy8gICAgICAgICAgICB9XG4gICAgICAgIGNsaWVudEF0dHJpYnV0ZS5zZXRWYWx1ZShzZXJ2ZXJDb21tYW5kLm5ld1ZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBDbGllbnRDb25uZWN0b3IucHJvdG90eXBlLmhhbmRsZUF0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZENvbW1hbmQgPSBmdW5jdGlvbiAoc2VydmVyQ29tbWFuZCkge1xuICAgICAgICB2YXIgY2xpZW50QXR0cmlidXRlID0gdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudE1vZGVsU3RvcmUoKS5maW5kQXR0cmlidXRlQnlJZChzZXJ2ZXJDb21tYW5kLmF0dHJpYnV0ZUlkKTtcbiAgICAgICAgaWYgKCFjbGllbnRBdHRyaWJ1dGUpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgY2xpZW50QXR0cmlidXRlW3NlcnZlckNvbW1hbmQubWV0YWRhdGFOYW1lXSA9IHNlcnZlckNvbW1hbmQudmFsdWU7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgLy8vLy8vLy8vLy8vLyBwdXNoIHN1cHBvcnQgLy8vLy8vLy8vLy8vLy8vXG4gICAgQ2xpZW50Q29ubmVjdG9yLnByb3RvdHlwZS5saXN0ZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghdGhpcy5wdXNoRW5hYmxlZClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMud2FpdGluZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgLy8gdG9kbzogaG93IHRvIGlzc3VlIGEgd2FybmluZyBpZiBubyBwdXNoTGlzdGVuZXIgaXMgc2V0P1xuICAgICAgICBpZiAoIXRoaXMuY3VycmVudGx5U2VuZGluZykge1xuICAgICAgICAgICAgdGhpcy5kb1NlbmROZXh0KCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENsaWVudENvbm5lY3Rvci5wcm90b3R5cGUuZW5xdWV1ZVB1c2hDb21tYW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLndhaXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbW1hbmRRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgIGNvbW1hbmQ6IHRoaXMucHVzaExpc3RlbmVyLFxuICAgICAgICAgICAgaGFuZGxlcjoge1xuICAgICAgICAgICAgICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uIChtb2RlbHMpIHsgbWUud2FpdGluZyA9IGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIG9uRmluaXNoZWREYXRhOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2xpZW50Q29ubmVjdG9yLnByb3RvdHlwZS5yZWxlYXNlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMud2FpdGluZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdGhpcy53YWl0aW5nID0gZmFsc2U7XG4gICAgICAgIC8vIHRvZG86IGhvdyB0byBpc3N1ZSBhIHdhcm5pbmcgaWYgbm8gcmVsZWFzZUNvbW1hbmQgaXMgc2V0P1xuICAgICAgICB0aGlzLnRyYW5zbWl0dGVyLnNpZ25hbCh0aGlzLnJlbGVhc2VDb21tYW5kKTtcbiAgICB9O1xuICAgIHJldHVybiBDbGllbnRDb25uZWN0b3I7XG59KCkpO1xuZXhwb3J0cy5DbGllbnRDb25uZWN0b3IgPSBDbGllbnRDb25uZWN0b3I7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsaWVudENvbm5lY3Rvci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIENsaWVudEF0dHJpYnV0ZV8xID0gcmVxdWlyZShcIi4vQ2xpZW50QXR0cmlidXRlXCIpO1xudmFyIENsaWVudFByZXNlbnRhdGlvbk1vZGVsXzEgPSByZXF1aXJlKFwiLi9DbGllbnRQcmVzZW50YXRpb25Nb2RlbFwiKTtcbnZhciBDbGllbnREb2xwaGluID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDbGllbnREb2xwaGluKCkge1xuICAgIH1cbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS5zZXRDbGllbnRDb25uZWN0b3IgPSBmdW5jdGlvbiAoY2xpZW50Q29ubmVjdG9yKSB7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yID0gY2xpZW50Q29ubmVjdG9yO1xuICAgIH07XG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUuZ2V0Q2xpZW50Q29ubmVjdG9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnRDb25uZWN0b3I7XG4gICAgfTtcbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS5zZW5kID0gZnVuY3Rpb24gKGNvbW1hbmQsIG9uRmluaXNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3Iuc2VuZChjb21tYW5kLCBvbkZpbmlzaGVkKTtcbiAgICB9O1xuICAgIC8vIGZhY3RvcnkgbWV0aG9kIGZvciBhdHRyaWJ1dGVzXG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUuYXR0cmlidXRlID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSwgcXVhbGlmaWVyLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF0dHJpYnV0ZV8xLkNsaWVudEF0dHJpYnV0ZShwcm9wZXJ0eU5hbWUsIHF1YWxpZmllciwgdmFsdWUpO1xuICAgIH07XG4gICAgLy8gZmFjdG9yeSBtZXRob2QgZm9yIHByZXNlbnRhdGlvbiBtb2RlbHNcbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS5wcmVzZW50YXRpb25Nb2RlbCA9IGZ1bmN0aW9uIChpZCwgdHlwZSkge1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDI7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgYXR0cmlidXRlc1tfaSAtIDJdID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW9kZWwgPSBuZXcgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWxfMS5DbGllbnRQcmVzZW50YXRpb25Nb2RlbChpZCwgdHlwZSk7XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzICYmIGF0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICBtb2RlbC5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmFkZChtb2RlbCk7XG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9O1xuICAgIENsaWVudERvbHBoaW4ucHJvdG90eXBlLnNldENsaWVudE1vZGVsU3RvcmUgPSBmdW5jdGlvbiAoY2xpZW50TW9kZWxTdG9yZSkge1xuICAgICAgICB0aGlzLmNsaWVudE1vZGVsU3RvcmUgPSBjbGllbnRNb2RlbFN0b3JlO1xuICAgIH07XG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUuZ2V0Q2xpZW50TW9kZWxTdG9yZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50TW9kZWxTdG9yZTtcbiAgICB9O1xuICAgIENsaWVudERvbHBoaW4ucHJvdG90eXBlLmxpc3RQcmVzZW50YXRpb25Nb2RlbElkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmxpc3RQcmVzZW50YXRpb25Nb2RlbElkcygpO1xuICAgIH07XG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUubGlzdFByZXNlbnRhdGlvbk1vZGVscyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmxpc3RQcmVzZW50YXRpb25Nb2RlbHMoKTtcbiAgICB9O1xuICAgIENsaWVudERvbHBoaW4ucHJvdG90eXBlLmZpbmRBbGxQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZSA9IGZ1bmN0aW9uIChwcmVzZW50YXRpb25Nb2RlbFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmZpbmRBbGxQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZShwcmVzZW50YXRpb25Nb2RlbFR5cGUpO1xuICAgIH07XG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUuZ2V0QXQgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChpZCk7XG4gICAgfTtcbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS5maW5kUHJlc2VudGF0aW9uTW9kZWxCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5maW5kUHJlc2VudGF0aW9uTW9kZWxCeUlkKGlkKTtcbiAgICB9O1xuICAgIENsaWVudERvbHBoaW4ucHJvdG90eXBlLmRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsID0gZnVuY3Rpb24gKG1vZGVsVG9EZWxldGUpIHtcbiAgICAgICAgdGhpcy5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZGVsZXRlUHJlc2VudGF0aW9uTW9kZWwobW9kZWxUb0RlbGV0ZSwgdHJ1ZSk7XG4gICAgfTtcbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS51cGRhdGVQcmVzZW50YXRpb25Nb2RlbFF1YWxpZmllciA9IGZ1bmN0aW9uIChwcmVzZW50YXRpb25Nb2RlbCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBwcmVzZW50YXRpb25Nb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoc291cmNlQXR0cmlidXRlKSB7XG4gICAgICAgICAgICBfdGhpcy51cGRhdGVBdHRyaWJ1dGVRdWFsaWZpZXIoc291cmNlQXR0cmlidXRlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS51cGRhdGVBdHRyaWJ1dGVRdWFsaWZpZXIgPSBmdW5jdGlvbiAoc291cmNlQXR0cmlidXRlKSB7XG4gICAgICAgIGlmICghc291cmNlQXR0cmlidXRlLmdldFF1YWxpZmllcigpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IHRoaXMuZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmZpbmRBbGxBdHRyaWJ1dGVzQnlRdWFsaWZpZXIoc291cmNlQXR0cmlidXRlLmdldFF1YWxpZmllcigpKTtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZS5zZXRWYWx1ZShzb3VyY2VBdHRyaWJ1dGUuZ2V0VmFsdWUoKSk7IC8vIHNob3VsZCBhbHdheXMgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8vLy8vLyBwdXNoIHN1cHBvcnQgLy8vLy8vL1xuICAgIENsaWVudERvbHBoaW4ucHJvdG90eXBlLnN0YXJ0UHVzaExpc3RlbmluZyA9IGZ1bmN0aW9uIChwdXNoQ29tbWFuZCwgcmVsZWFzZUNvbW1hbmQpIHtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3Iuc2V0UHVzaExpc3RlbmVyKHB1c2hDb21tYW5kKTtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3Iuc2V0UmVsZWFzZUNvbW1hbmQocmVsZWFzZUNvbW1hbmQpO1xuICAgICAgICB0aGlzLmNsaWVudENvbm5lY3Rvci5zZXRQdXNoRW5hYmxlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3IubGlzdGVuKCk7XG4gICAgfTtcbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS5zdG9wUHVzaExpc3RlbmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3Iuc2V0UHVzaEVuYWJsZWQoZmFsc2UpO1xuICAgIH07XG4gICAgcmV0dXJuIENsaWVudERvbHBoaW47XG59KCkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ2xpZW50RG9scGhpbjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xpZW50RG9scGhpbi5qcy5tYXBcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL2NvcmUtanMuZC50c1wiIC8+XG5cInVzZSBzdHJpY3RcIjtcbnZhciBBdHRyaWJ1dGVfMSA9IHJlcXVpcmUoXCIuL0F0dHJpYnV0ZVwiKTtcbnZhciBDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmRfMSA9IHJlcXVpcmUoXCIuL0NoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZFwiKTtcbnZhciBDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmRfMSA9IHJlcXVpcmUoXCIuL0NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZFwiKTtcbnZhciBEZWxldGVkUHJlc2VudGF0aW9uTW9kZWxOb3RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCIuL0RlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvblwiKTtcbnZhciBFdmVudEJ1c18xID0gcmVxdWlyZShcIi4vRXZlbnRCdXNcIik7XG52YXIgVmFsdWVDaGFuZ2VkQ29tbWFuZF8xID0gcmVxdWlyZShcIi4vVmFsdWVDaGFuZ2VkQ29tbWFuZFwiKTtcbihmdW5jdGlvbiAoVHlwZSkge1xuICAgIFR5cGVbVHlwZVtcIkFEREVEXCJdID0gJ0FEREVEJ10gPSBcIkFEREVEXCI7XG4gICAgVHlwZVtUeXBlW1wiUkVNT1ZFRFwiXSA9ICdSRU1PVkVEJ10gPSBcIlJFTU9WRURcIjtcbn0pKGV4cG9ydHMuVHlwZSB8fCAoZXhwb3J0cy5UeXBlID0ge30pKTtcbnZhciBUeXBlID0gZXhwb3J0cy5UeXBlO1xudmFyIENsaWVudE1vZGVsU3RvcmUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENsaWVudE1vZGVsU3RvcmUoY2xpZW50RG9scGhpbikge1xuICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4gPSBjbGllbnREb2xwaGluO1xuICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVscyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbHNQZXJUeXBlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNQZXJJZCA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLm1vZGVsU3RvcmVDaGFuZ2VCdXMgPSBuZXcgRXZlbnRCdXNfMVtcImRlZmF1bHRcIl0oKTtcbiAgICB9XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUuZ2V0Q2xpZW50RG9scGhpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50RG9scGhpbjtcbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLnJlZ2lzdGVyTW9kZWwgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKG1vZGVsLmNsaWVudFNpZGVPbmx5KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNvbm5lY3RvciA9IHRoaXMuY2xpZW50RG9scGhpbi5nZXRDbGllbnRDb25uZWN0b3IoKTtcbiAgICAgICAgdmFyIGNyZWF0ZVBNQ29tbWFuZCA9IG5ldyBDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmRfMVtcImRlZmF1bHRcIl0obW9kZWwpO1xuICAgICAgICBjb25uZWN0b3Iuc2VuZChjcmVhdGVQTUNvbW1hbmQsIG51bGwpO1xuICAgICAgICBtb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICBfdGhpcy5yZWdpc3RlckF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLnJlZ2lzdGVyQXR0cmlidXRlID0gZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZUJ5SWQoYXR0cmlidXRlKTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVCeVF1YWxpZmllcihhdHRyaWJ1dGUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdoZW5ldmVyIGFuIGF0dHJpYnV0ZSBjaGFuZ2VzIGl0cyB2YWx1ZSwgdGhlIHNlcnZlciBuZWVkcyB0byBiZSBub3RpZmllZFxuICAgICAgICAvLyBhbmQgYWxsIG90aGVyIGF0dHJpYnV0ZXMgd2l0aCB0aGUgc2FtZSBxdWFsaWZpZXIgYXJlIGdpdmVuIHRoZSBzYW1lIHZhbHVlXG4gICAgICAgIGF0dHJpYnV0ZS5vblZhbHVlQ2hhbmdlKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIHZhciB2YWx1ZUNoYW5nZUNvbW1hbmQgPSBuZXcgVmFsdWVDaGFuZ2VkQ29tbWFuZF8xW1wiZGVmYXVsdFwiXShhdHRyaWJ1dGUuaWQsIGV2dC5vbGRWYWx1ZSwgZXZ0Lm5ld1ZhbHVlKTtcbiAgICAgICAgICAgIF90aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50Q29ubmVjdG9yKCkuc2VuZCh2YWx1ZUNoYW5nZUNvbW1hbmQsIG51bGwpO1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSkge1xuICAgICAgICAgICAgICAgIHZhciBhdHRycyA9IF90aGlzLmZpbmRBdHRyaWJ1dGVzQnlGaWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF0dHIgIT09IGF0dHJpYnV0ZSAmJiBhdHRyLmdldFF1YWxpZmllcigpID09IGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHIuc2V0VmFsdWUoYXR0cmlidXRlLmdldFZhbHVlKCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYXR0cmlidXRlLm9uUXVhbGlmaWVyQ2hhbmdlKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIHZhciBjaGFuZ2VBdHRyTWV0YWRhdGFDbWQgPSBuZXcgQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kXzFbXCJkZWZhdWx0XCJdKGF0dHJpYnV0ZS5pZCwgQXR0cmlidXRlXzFbXCJkZWZhdWx0XCJdLlFVQUxJRklFUl9QUk9QRVJUWSwgZXZ0Lm5ld1ZhbHVlKTtcbiAgICAgICAgICAgIF90aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50Q29ubmVjdG9yKCkuc2VuZChjaGFuZ2VBdHRyTWV0YWRhdGFDbWQsIG51bGwpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmhhcyhtb2RlbC5pZCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgYWxyZWFkeSBpcyBhIFBNIHdpdGggaWQgXCIgKyBtb2RlbC5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGFkZGVkID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuaGFzKG1vZGVsLmlkKSkge1xuICAgICAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuc2V0KG1vZGVsLmlkLCBtb2RlbCk7XG4gICAgICAgICAgICB0aGlzLmFkZFByZXNlbnRhdGlvbk1vZGVsQnlUeXBlKG1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJNb2RlbChtb2RlbCk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsU3RvcmVDaGFuZ2VCdXMudHJpZ2dlcih7ICdldmVudFR5cGUnOiBUeXBlLkFEREVELCAnY2xpZW50UHJlc2VudGF0aW9uTW9kZWwnOiBtb2RlbCB9KTtcbiAgICAgICAgICAgIGFkZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYWRkZWQ7XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZW1vdmVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5oYXMobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVByZXNlbnRhdGlvbk1vZGVsQnlUeXBlKG1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmRlbGV0ZShtb2RlbC5pZCk7XG4gICAgICAgICAgICBtb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQXR0cmlidXRlQnlJZChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMucmVtb3ZlQXR0cmlidXRlQnlRdWFsaWZpZXIoYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubW9kZWxTdG9yZUNoYW5nZUJ1cy50cmlnZ2VyKHsgJ2V2ZW50VHlwZSc6IFR5cGUuUkVNT1ZFRCwgJ2NsaWVudFByZXNlbnRhdGlvbk1vZGVsJzogbW9kZWwgfSk7XG4gICAgICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVtb3ZlZDtcbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLmZpbmRBdHRyaWJ1dGVzQnlGaWx0ZXIgPSBmdW5jdGlvbiAoZmlsdGVyKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmZvckVhY2goZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgICAgICBtb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGF0dHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5hZGRQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHR5cGUgPSBtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgIGlmICghdHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmVzZW50YXRpb25Nb2RlbHMgPSB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuZ2V0KHR5cGUpO1xuICAgICAgICBpZiAoIXByZXNlbnRhdGlvbk1vZGVscykge1xuICAgICAgICAgICAgcHJlc2VudGF0aW9uTW9kZWxzID0gW107XG4gICAgICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuc2V0KHR5cGUsIHByZXNlbnRhdGlvbk1vZGVscyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEocHJlc2VudGF0aW9uTW9kZWxzLmluZGV4T2YobW9kZWwpID4gLTEpKSB7XG4gICAgICAgICAgICBwcmVzZW50YXRpb25Nb2RlbHMucHVzaChtb2RlbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLnJlbW92ZVByZXNlbnRhdGlvbk1vZGVsQnlUeXBlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgIGlmICghbW9kZWwgfHwgIShtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXNlbnRhdGlvbk1vZGVscyA9IHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZS5nZXQobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgaWYgKCFwcmVzZW50YXRpb25Nb2RlbHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlc2VudGF0aW9uTW9kZWxzLmxlbmd0aCA+IC0xKSB7XG4gICAgICAgICAgICBwcmVzZW50YXRpb25Nb2RlbHMuc3BsaWNlKHByZXNlbnRhdGlvbk1vZGVscy5pbmRleE9mKG1vZGVsKSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXNlbnRhdGlvbk1vZGVscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZS5kZWxldGUobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUubGlzdFByZXNlbnRhdGlvbk1vZGVsSWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIHZhciBpdGVyID0gdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMua2V5cygpO1xuICAgICAgICB2YXIgbmV4dCA9IGl0ZXIubmV4dCgpO1xuICAgICAgICB3aGlsZSAoIW5leHQuZG9uZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV4dC52YWx1ZSk7XG4gICAgICAgICAgICBuZXh0ID0gaXRlci5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLmxpc3RQcmVzZW50YXRpb25Nb2RlbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgdmFyIGl0ZXIgPSB0aGlzLnByZXNlbnRhdGlvbk1vZGVscy52YWx1ZXMoKTtcbiAgICAgICAgdmFyIG5leHQgPSBpdGVyLm5leHQoKTtcbiAgICAgICAgd2hpbGUgKCFuZXh0LmRvbmUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5leHQudmFsdWUpO1xuICAgICAgICAgICAgbmV4dCA9IGl0ZXIubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5maW5kUHJlc2VudGF0aW9uTW9kZWxCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5nZXQoaWQpO1xuICAgIH07XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUuZmluZEFsbFByZXNlbnRhdGlvbk1vZGVsQnlUeXBlID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKCF0eXBlIHx8ICF0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZS5nZXQodHlwZSkuc2xpY2UoMCk7IC8vIHNsaWNlIGlzIHVzZWQgdG8gY2xvbmUgdGhlIGFycmF5XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5kZWxldGVQcmVzZW50YXRpb25Nb2RlbCA9IGZ1bmN0aW9uIChtb2RlbCwgbm90aWZ5KSB7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jb250YWluc1ByZXNlbnRhdGlvbk1vZGVsKG1vZGVsLmlkKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUobW9kZWwpO1xuICAgICAgICAgICAgaWYgKCFub3RpZnkgfHwgbW9kZWwuY2xpZW50U2lkZU9ubHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50Q29ubmVjdG9yKCkuc2VuZChuZXcgRGVsZXRlZFByZXNlbnRhdGlvbk1vZGVsTm90aWZpY2F0aW9uXzFbXCJkZWZhdWx0XCJdKG1vZGVsLmlkKSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLmNvbnRhaW5zUHJlc2VudGF0aW9uTW9kZWwgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmhhcyhpZCk7XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5hZGRBdHRyaWJ1dGVCeUlkID0gZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZSB8fCB0aGlzLmF0dHJpYnV0ZXNQZXJJZC5oYXMoYXR0cmlidXRlLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1BlcklkLnNldChhdHRyaWJ1dGUuaWQsIGF0dHJpYnV0ZSk7XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGVCeUlkID0gZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZSB8fCAhdGhpcy5hdHRyaWJ1dGVzUGVySWQuaGFzKGF0dHJpYnV0ZS5pZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNQZXJJZC5kZWxldGUoYXR0cmlidXRlLmlkKTtcbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLmZpbmRBdHRyaWJ1dGVCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXNQZXJJZC5nZXQoaWQpO1xuICAgIH07XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUuYWRkQXR0cmlidXRlQnlRdWFsaWZpZXIgPSBmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIGlmICghYXR0cmlidXRlIHx8ICFhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IHRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllci5nZXQoYXR0cmlidXRlLmdldFF1YWxpZmllcigpKTtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNQZXJRdWFsaWZpZXIuc2V0KGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSwgYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCEoYXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSkgPiAtMSkpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChhdHRyaWJ1dGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5yZW1vdmVBdHRyaWJ1dGVCeVF1YWxpZmllciA9IGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUgfHwgIWF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyLmdldChhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpO1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPiAtMSkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5zcGxpY2UoYXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyLmRlbGV0ZShhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5maW5kQWxsQXR0cmlidXRlc0J5UXVhbGlmaWVyID0gZnVuY3Rpb24gKHF1YWxpZmllcikge1xuICAgICAgICBpZiAoIXF1YWxpZmllciB8fCAhdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyLmhhcyhxdWFsaWZpZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllci5nZXQocXVhbGlmaWVyKS5zbGljZSgwKTsgLy8gc2xpY2UgaXMgdXNlZCB0byBjbG9uZSB0aGUgYXJyYXlcbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLm9uTW9kZWxTdG9yZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5tb2RlbFN0b3JlQ2hhbmdlQnVzLm9uRXZlbnQoZXZlbnRIYW5kbGVyKTtcbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLm9uTW9kZWxTdG9yZUNoYW5nZUZvclR5cGUgPSBmdW5jdGlvbiAocHJlc2VudGF0aW9uTW9kZWxUeXBlLCBldmVudEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5tb2RlbFN0b3JlQ2hhbmdlQnVzLm9uRXZlbnQoZnVuY3Rpb24gKHBtU3RvcmVFdmVudCkge1xuICAgICAgICAgICAgaWYgKHBtU3RvcmVFdmVudC5jbGllbnRQcmVzZW50YXRpb25Nb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUgPT0gcHJlc2VudGF0aW9uTW9kZWxUeXBlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyKHBtU3RvcmVFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIENsaWVudE1vZGVsU3RvcmU7XG59KCkpO1xuZXhwb3J0cy5DbGllbnRNb2RlbFN0b3JlID0gQ2xpZW50TW9kZWxTdG9yZTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xpZW50TW9kZWxTdG9yZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIEV2ZW50QnVzXzEgPSByZXF1aXJlKCcuL0V2ZW50QnVzJyk7XG52YXIgcHJlc2VudGF0aW9uTW9kZWxJbnN0YW5jZUNvdW50ID0gMDsgLy8gdG9kbyBkazogY29uc2lkZXIgbWFraW5nIHRoaXMgc3RhdGljIGluIGNsYXNzXG52YXIgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENsaWVudFByZXNlbnRhdGlvbk1vZGVsKGlkLCBwcmVzZW50YXRpb25Nb2RlbFR5cGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVsVHlwZSA9IHByZXNlbnRhdGlvbk1vZGVsVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHRoaXMuY2xpZW50U2lkZU9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIGlkICE9PSAndW5kZWZpbmVkJyAmJiBpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gKHByZXNlbnRhdGlvbk1vZGVsSW5zdGFuY2VDb3VudCsrKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW52YWxpZEJ1cyA9IG5ldyBFdmVudEJ1c18xW1wiZGVmYXVsdFwiXSgpO1xuICAgICAgICB0aGlzLmRpcnR5VmFsdWVDaGFuZ2VCdXMgPSBuZXcgRXZlbnRCdXNfMVtcImRlZmF1bHRcIl0oKTtcbiAgICB9XG4gICAgLy8gdG9kbyBkazogYWxpZ24gd2l0aCBKYXZhIHZlcnNpb246IG1vdmUgdG8gQ2xpZW50RG9scGhpbiBhbmQgYXV0by1hZGQgdG8gbW9kZWwgc3RvcmVcbiAgICAvKiogYSBjb3B5IGNvbnN0cnVjdG9yIGZvciBhbnl0aGluZyBidXQgSURzLiBQZXIgZGVmYXVsdCwgY29waWVzIGFyZSBjbGllbnQgc2lkZSBvbmx5LCBubyBhdXRvbWF0aWMgdXBkYXRlIGFwcGxpZXMuICovXG4gICAgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwucHJvdG90eXBlLmNvcHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwobnVsbCwgdGhpcy5wcmVzZW50YXRpb25Nb2RlbFR5cGUpO1xuICAgICAgICByZXN1bHQuY2xpZW50U2lkZU9ubHkgPSB0cnVlO1xuICAgICAgICB0aGlzLmdldEF0dHJpYnV0ZXMoKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHZhciBhdHRyaWJ1dGVDb3B5ID0gYXR0cmlidXRlLmNvcHkoKTtcbiAgICAgICAgICAgIHJlc3VsdC5hZGRBdHRyaWJ1dGUoYXR0cmlidXRlQ29weSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgLy9hZGQgYXJyYXkgb2YgYXR0cmlidXRlc1xuICAgIENsaWVudFByZXNlbnRhdGlvbk1vZGVsLnByb3RvdHlwZS5hZGRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzIHx8IGF0dHJpYnV0ZXMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBfdGhpcy5hZGRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwucHJvdG90eXBlLmFkZEF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUgfHwgKHRoaXMuYXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSkgPiAtMSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoYXR0cmlidXRlLnByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFscmVhZHkgaXMgYW4gYXR0cmlidXRlIHdpdGggcHJvcGVydHkgbmFtZTogXCIgKyBhdHRyaWJ1dGUucHJvcGVydHlOYW1lXG4gICAgICAgICAgICAgICAgKyBcIiBpbiBwcmVzZW50YXRpb24gbW9kZWwgd2l0aCBpZDogXCIgKyB0aGlzLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlLmdldFF1YWxpZmllcigpICYmIHRoaXMuZmluZEF0dHJpYnV0ZUJ5UXVhbGlmaWVyKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFscmVhZHkgaXMgYW4gYXR0cmlidXRlIHdpdGggcXVhbGlmaWVyOiBcIiArIGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKVxuICAgICAgICAgICAgICAgICsgXCIgaW4gcHJlc2VudGF0aW9uIG1vZGVsIHdpdGggaWQ6IFwiICsgdGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlLnNldFByZXNlbnRhdGlvbk1vZGVsKHRoaXMpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyaWJ1dGUpO1xuICAgICAgICBhdHRyaWJ1dGUub25WYWx1ZUNoYW5nZShmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICBfdGhpcy5pbnZhbGlkQnVzLnRyaWdnZXIoeyBzb3VyY2U6IF90aGlzIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENsaWVudFByZXNlbnRhdGlvbk1vZGVsLnByb3RvdHlwZS5vbkludmFsaWRhdGVkID0gZnVuY3Rpb24gKGhhbmRsZUludmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy5pbnZhbGlkQnVzLm9uRXZlbnQoaGFuZGxlSW52YWxpZGF0ZSk7XG4gICAgfTtcbiAgICAvKiogcmV0dXJucyBhIGNvcHkgb2YgdGhlIGludGVybmFsIHN0YXRlICovXG4gICAgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwucHJvdG90eXBlLmdldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuc2xpY2UoMCk7XG4gICAgfTtcbiAgICBDbGllbnRQcmVzZW50YXRpb25Nb2RlbC5wcm90b3R5cGUuZ2V0QXQgPSBmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpO1xuICAgIH07XG4gICAgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwucHJvdG90eXBlLmZpbmRBbGxBdHRyaWJ1dGVzQnlQcm9wZXJ0eU5hbWUgPSBmdW5jdGlvbiAocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUgPT0gcHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBDbGllbnRQcmVzZW50YXRpb25Nb2RlbC5wcm90b3R5cGUuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoIXByb3BlcnR5TmFtZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCh0aGlzLmF0dHJpYnV0ZXNbaV0ucHJvcGVydHlOYW1lID09IHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwucHJvdG90eXBlLmZpbmRBdHRyaWJ1dGVCeVF1YWxpZmllciA9IGZ1bmN0aW9uIChxdWFsaWZpZXIpIHtcbiAgICAgICAgaWYgKCFxdWFsaWZpZXIpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXNbaV0uZ2V0UXVhbGlmaWVyKCkgPT0gcXVhbGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwucHJvdG90eXBlLmZpbmRBdHRyaWJ1dGVCeUlkID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmICghaWQpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIDtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBDbGllbnRQcmVzZW50YXRpb25Nb2RlbC5wcm90b3R5cGUuc3luY1dpdGggPSBmdW5jdGlvbiAoc291cmNlUHJlc2VudGF0aW9uTW9kZWwpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goZnVuY3Rpb24gKHRhcmdldEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdmFyIHNvdXJjZUF0dHJpYnV0ZSA9IHNvdXJjZVByZXNlbnRhdGlvbk1vZGVsLmdldEF0KHRhcmdldEF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZS5zeW5jV2l0aChzb3VyY2VBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDbGllbnRQcmVzZW50YXRpb25Nb2RlbDtcbn0oKSk7XG5leHBvcnRzLkNsaWVudFByZXNlbnRhdGlvbk1vZGVsID0gQ2xpZW50UHJlc2VudGF0aW9uTW9kZWw7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsaWVudFByZXNlbnRhdGlvbk1vZGVsLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQ29kZWMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvZGVjKCkge1xuICAgIH1cbiAgICBDb2RlYy5wcm90b3R5cGUuZW5jb2RlID0gZnVuY3Rpb24gKGNvbW1hbmRzKSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShjb21tYW5kcyk7IC8vIHRvZG8gZGs6IGxvb2sgZm9yIHBvc3NpYmxlIEFQSSBzdXBwb3J0IGZvciBjaGFyYWN0ZXIgZW5jb2RpbmdcbiAgICB9O1xuICAgIENvZGVjLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbiAodHJhbnNtaXR0ZWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc21pdHRlZCA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodHJhbnNtaXR0ZWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbWl0dGVkO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gQ29kZWM7XG59KCkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29kZWM7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvZGVjLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQ29tbWFuZCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tbWFuZCgpIHtcbiAgICAgICAgdGhpcy5pZCA9IFwiZG9scGhpbi1jb3JlLWNvbW1hbmRcIjtcbiAgICB9XG4gICAgcmV0dXJuIENvbW1hbmQ7XG59KCkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29tbWFuZDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29tbWFuZC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIFZhbHVlQ2hhbmdlZENvbW1hbmRfMSA9IHJlcXVpcmUoJy4vVmFsdWVDaGFuZ2VkQ29tbWFuZCcpO1xuLyoqIEEgQmF0Y2hlciB0aGF0IGRvZXMgbm8gYmF0Y2hpbmcgYnV0IG1lcmVseSB0YWtlcyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgcXVldWUgYXMgdGhlIHNpbmdsZSBpdGVtIGluIHRoZSBiYXRjaCAqL1xudmFyIE5vQ29tbWFuZEJhdGNoZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vQ29tbWFuZEJhdGNoZXIoKSB7XG4gICAgfVxuICAgIE5vQ29tbWFuZEJhdGNoZXIucHJvdG90eXBlLmJhdGNoID0gZnVuY3Rpb24gKHF1ZXVlKSB7XG4gICAgICAgIHJldHVybiBbcXVldWUuc2hpZnQoKV07XG4gICAgfTtcbiAgICByZXR1cm4gTm9Db21tYW5kQmF0Y2hlcjtcbn0oKSk7XG5leHBvcnRzLk5vQ29tbWFuZEJhdGNoZXIgPSBOb0NvbW1hbmRCYXRjaGVyO1xuLyoqIEEgYmF0Y2hlciB0aGF0IGJhdGNoZXMgdGhlIGJsaW5kcyAoY29tbWFuZHMgd2l0aCBubyBjYWxsYmFjaykgYW5kIG9wdGlvbmFsbHkgYWxzbyBmb2xkcyB2YWx1ZSBjaGFuZ2VzICovXG52YXIgQmxpbmRDb21tYW5kQmF0Y2hlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgLyoqIGZvbGRpbmc6IHdoZXRoZXIgd2Ugc2hvdWxkIHRyeSBmb2xkaW5nIFZhbHVlQ2hhbmdlZENvbW1hbmRzICovXG4gICAgZnVuY3Rpb24gQmxpbmRDb21tYW5kQmF0Y2hlcihmb2xkaW5nLCBtYXhCYXRjaFNpemUpIHtcbiAgICAgICAgaWYgKGZvbGRpbmcgPT09IHZvaWQgMCkgeyBmb2xkaW5nID0gdHJ1ZTsgfVxuICAgICAgICBpZiAobWF4QmF0Y2hTaXplID09PSB2b2lkIDApIHsgbWF4QmF0Y2hTaXplID0gNTA7IH1cbiAgICAgICAgdGhpcy5mb2xkaW5nID0gZm9sZGluZztcbiAgICAgICAgdGhpcy5tYXhCYXRjaFNpemUgPSBtYXhCYXRjaFNpemU7XG4gICAgfVxuICAgIEJsaW5kQ29tbWFuZEJhdGNoZXIucHJvdG90eXBlLmJhdGNoID0gZnVuY3Rpb24gKHF1ZXVlKSB7XG4gICAgICAgIHZhciBiYXRjaCA9IFtdO1xuICAgICAgICB2YXIgbiA9IE1hdGgubWluKHF1ZXVlLmxlbmd0aCwgdGhpcy5tYXhCYXRjaFNpemUpO1xuICAgICAgICBmb3IgKHZhciBjb3VudGVyID0gMDsgY291bnRlciA8IG47IGNvdW50ZXIrKykge1xuICAgICAgICAgICAgdmFyIGNhbmRpZGF0ZSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5mb2xkaW5nICYmIGNhbmRpZGF0ZS5jb21tYW5kIGluc3RhbmNlb2YgVmFsdWVDaGFuZ2VkQ29tbWFuZF8xW1wiZGVmYXVsdFwiXSAmJiAoIWNhbmRpZGF0ZS5oYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIHZhciBmb3VuZCA9IG51bGw7XG4gICAgICAgICAgICAgICAgdmFyIGNhbkNtZCA9IGNhbmRpZGF0ZS5jb21tYW5kO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmF0Y2gubGVuZ3RoICYmIGZvdW5kID09IG51bGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmF0Y2hbaV0uY29tbWFuZCBpbnN0YW5jZW9mIFZhbHVlQ2hhbmdlZENvbW1hbmRfMVtcImRlZmF1bHRcIl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBiYXRjaENtZCA9IGJhdGNoW2ldLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FuQ21kLmF0dHJpYnV0ZUlkID09IGJhdGNoQ21kLmF0dHJpYnV0ZUlkICYmIGJhdGNoQ21kLm5ld1ZhbHVlID09IGNhbkNtZC5vbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gYmF0Y2hDbWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kLm5ld1ZhbHVlID0gY2FuQ21kLm5ld1ZhbHVlOyAvLyBjaGFuZ2UgZXhpc3RpbmcgdmFsdWUsIGRvIG5vdCBiYXRjaFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2gucHVzaChjYW5kaWRhdGUpOyAvLyB3ZSBjYW5ub3QgbWVyZ2UsIHNvIGJhdGNoIHRoZSBjYW5kaWRhdGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYXRjaC5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuZGlkYXRlLmhhbmRsZXIgfHxcbiAgICAgICAgICAgICAgICAoY2FuZGlkYXRlLmNvbW1hbmRbJ2NsYXNzTmFtZSddID09IFwib3JnLm9wZW5kb2xwaGluLmNvcmUuY29tbS5FbXB0eU5vdGlmaWNhdGlvblwiKSAvLyBvciB1bmtub3duIGNsaWVudCBzaWRlIGVmZmVjdFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIGxlYXZlIHRoZSBsb29wXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhdGNoO1xuICAgIH07XG4gICAgcmV0dXJuIEJsaW5kQ29tbWFuZEJhdGNoZXI7XG59KCkpO1xuZXhwb3J0cy5CbGluZENvbW1hbmRCYXRjaGVyID0gQmxpbmRDb21tYW5kQmF0Y2hlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29tbWFuZEJhdGNoZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBDb21tYW5kQ29uc3RhbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb21tYW5kQ29uc3RhbnRzKCkge1xuICAgIH1cbiAgICBDb21tYW5kQ29uc3RhbnRzLkRPTFBISU5fUExBVEZPUk1fUFJFRklYID0gJ2RvbHBoaW5fcGxhdGZvcm1faW50ZXJuXyc7XG4gICAgQ29tbWFuZENvbnN0YW50cy5DUkVBVEVfQ09OVEVYVF9DT01NQU5EX05BTUUgPSBDb21tYW5kQ29uc3RhbnRzLkRPTFBISU5fUExBVEZPUk1fUFJFRklYICsgJ2luaXRDbGllbnRDb250ZXh0JztcbiAgICBDb21tYW5kQ29uc3RhbnRzLkRFU1RST1lfQ09OVEVYVF9DT01NQU5EX05BTUUgPSBDb21tYW5kQ29uc3RhbnRzLkRPTFBISU5fUExBVEZPUk1fUFJFRklYICsgJ2Rpc2Nvbm5lY3RDbGllbnRDb250ZXh0JztcbiAgICBDb21tYW5kQ29uc3RhbnRzLkNSRUFURV9DT05UUk9MTEVSX0NPTU1BTkRfTkFNRSA9IENvbW1hbmRDb25zdGFudHMuRE9MUEhJTl9QTEFURk9STV9QUkVGSVggKyAncmVnaXN0ZXJDb250cm9sbGVyJztcbiAgICBDb21tYW5kQ29uc3RhbnRzLkRFU1RST1lfQ09OVFJPTExFUl9DT01NQU5EX05BTUUgPSBDb21tYW5kQ29uc3RhbnRzLkRPTFBISU5fUExBVEZPUk1fUFJFRklYICsgJ2Rlc3Ryb3lDb250cm9sbGVyJztcbiAgICBDb21tYW5kQ29uc3RhbnRzLkNBTExfQ09OVFJPTExFUl9BQ1RJT05fQ09NTUFORF9OQU1FID0gQ29tbWFuZENvbnN0YW50cy5ET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdjYWxsQ29udHJvbGxlckFjdGlvbic7XG4gICAgQ29tbWFuZENvbnN0YW50cy5TVEFSVF9MT05HX1BPTExfQ09NTUFORF9OQU1FID0gQ29tbWFuZENvbnN0YW50cy5ET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdsb25nUG9sbCc7XG4gICAgQ29tbWFuZENvbnN0YW50cy5JTlRFUlJVUFRfTE9OR19QT0xMX0NPTU1BTkRfTkFNRSA9IENvbW1hbmRDb25zdGFudHMuRE9MUEhJTl9QTEFURk9STV9QUkVGSVggKyAncmVsZWFzZSc7XG4gICAgcmV0dXJuIENvbW1hbmRDb25zdGFudHM7XG59KCkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29tbWFuZENvbnN0YW50cztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29tbWFuZENvbnN0YW50cy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgQ29tbWFuZF8xID0gcmVxdWlyZSgnLi9Db21tYW5kJyk7XG52YXIgQ29tbWFuZENvbnN0YW50c18xID0gcmVxdWlyZShcIi4vQ29tbWFuZENvbnN0YW50c1wiKTtcbnZhciBDcmVhdGVDb250ZXh0Q29tbWFuZCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENyZWF0ZUNvbnRleHRDb21tYW5kLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENyZWF0ZUNvbnRleHRDb21tYW5kKCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5pZCA9IENvbW1hbmRDb25zdGFudHNfMVtcImRlZmF1bHRcIl0uQ1JFQVRFX0NPTlRFWFRfQ09NTUFORF9OQU1FO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiY29tLmNhbm9vLmRvbHBoaW4uaW1wbC5jb21tYW5kcy5DcmVhdGVDb250ZXh0Q29tbWFuZFwiO1xuICAgIH1cbiAgICByZXR1cm4gQ3JlYXRlQ29udGV4dENvbW1hbmQ7XG59KENvbW1hbmRfMVtcImRlZmF1bHRcIl0pKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENyZWF0ZUNvbnRleHRDb21tYW5kO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1DcmVhdGVDb250ZXh0Q29tbWFuZC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgQ29tbWFuZF8xID0gcmVxdWlyZSgnLi9Db21tYW5kJyk7XG52YXIgQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChwcmVzZW50YXRpb25Nb2RlbCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHRoaXMuY2xpZW50U2lkZU9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IFwiQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxcIjtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIm9yZy5vcGVuZG9scGhpbi5jb3JlLmNvbW0uQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kXCI7XG4gICAgICAgIHRoaXMucG1JZCA9IHByZXNlbnRhdGlvbk1vZGVsLmlkO1xuICAgICAgICB0aGlzLnBtVHlwZSA9IHByZXNlbnRhdGlvbk1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZTtcbiAgICAgICAgdmFyIGF0dHJzID0gdGhpcy5hdHRyaWJ1dGVzO1xuICAgICAgICBwcmVzZW50YXRpb25Nb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBhdHRyLnByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICBpZDogYXR0ci5pZCxcbiAgICAgICAgICAgICAgICBxdWFsaWZpZXI6IGF0dHIuZ2V0UXVhbGlmaWVyKCksXG4gICAgICAgICAgICAgICAgdmFsdWU6IGF0dHIuZ2V0VmFsdWUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kO1xufShDb21tYW5kXzFbXCJkZWZhdWx0XCJdKSk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgQ29tbWFuZF8xID0gcmVxdWlyZSgnLi9Db21tYW5kJyk7XG52YXIgRGVsZXRlZFByZXNlbnRhdGlvbk1vZGVsTm90aWZpY2F0aW9uID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGVsZXRlZFByZXNlbnRhdGlvbk1vZGVsTm90aWZpY2F0aW9uLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvbihwbUlkKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLnBtSWQgPSBwbUlkO1xuICAgICAgICB0aGlzLmlkID0gJ0RlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbCc7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJvcmcub3BlbmRvbHBoaW4uY29yZS5jb21tLkRlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvblwiO1xuICAgIH1cbiAgICByZXR1cm4gRGVsZXRlZFByZXNlbnRhdGlvbk1vZGVsTm90aWZpY2F0aW9uO1xufShDb21tYW5kXzFbXCJkZWZhdWx0XCJdKSk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEZWxldGVkUHJlc2VudGF0aW9uTW9kZWxOb3RpZmljYXRpb247XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvbi5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgQ29tbWFuZF8xID0gcmVxdWlyZSgnLi9Db21tYW5kJyk7XG52YXIgQ29tbWFuZENvbnN0YW50c18xID0gcmVxdWlyZShcIi4vQ29tbWFuZENvbnN0YW50c1wiKTtcbnZhciBEZXN0cm95Q29udGV4dENvbW1hbmQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhEZXN0cm95Q29udGV4dENvbW1hbmQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gRGVzdHJveUNvbnRleHRDb21tYW5kKCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5pZCA9IENvbW1hbmRDb25zdGFudHNfMVtcImRlZmF1bHRcIl0uREVTVFJPWV9DT05URVhUX0NPTU1BTkRfTkFNRTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcImNvbS5jYW5vby5kb2xwaGluLmltcGwuY29tbWFuZHMuRGVzdHJveUNvbnRleHRDb21tYW5kXCI7XG4gICAgfVxuICAgIHJldHVybiBEZXN0cm95Q29udGV4dENvbW1hbmQ7XG59KENvbW1hbmRfMVtcImRlZmF1bHRcIl0pKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERlc3Ryb3lDb250ZXh0Q29tbWFuZDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RGVzdHJveUNvbnRleHRDb21tYW5kLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQ2xpZW50Q29ubmVjdG9yXzEgPSByZXF1aXJlKFwiLi9DbGllbnRDb25uZWN0b3JcIik7XG52YXIgQ2xpZW50RG9scGhpbl8xID0gcmVxdWlyZShcIi4vQ2xpZW50RG9scGhpblwiKTtcbnZhciBDbGllbnRNb2RlbFN0b3JlXzEgPSByZXF1aXJlKFwiLi9DbGllbnRNb2RlbFN0b3JlXCIpO1xudmFyIEh0dHBUcmFuc21pdHRlcl8xID0gcmVxdWlyZShcIi4vSHR0cFRyYW5zbWl0dGVyXCIpO1xudmFyIE5vVHJhbnNtaXR0ZXJfMSA9IHJlcXVpcmUoXCIuL05vVHJhbnNtaXR0ZXJcIik7XG52YXIgRG9scGhpbkJ1aWxkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERvbHBoaW5CdWlsZGVyKCkge1xuICAgICAgICB0aGlzLnJlc2V0XyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNsYWNrTVNfID0gMzAwO1xuICAgICAgICB0aGlzLm1heEJhdGNoU2l6ZV8gPSA1MDtcbiAgICAgICAgdGhpcy5zdXBwb3J0Q09SU18gPSBmYWxzZTtcbiAgICB9XG4gICAgRG9scGhpbkJ1aWxkZXIucHJvdG90eXBlLnVybCA9IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgdGhpcy51cmxfID0gdXJsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERvbHBoaW5CdWlsZGVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIChyZXNldCkge1xuICAgICAgICB0aGlzLnJlc2V0XyA9IHJlc2V0O1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERvbHBoaW5CdWlsZGVyLnByb3RvdHlwZS5zbGFja01TID0gZnVuY3Rpb24gKHNsYWNrTVMpIHtcbiAgICAgICAgdGhpcy5zbGFja01TXyA9IHNsYWNrTVM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRG9scGhpbkJ1aWxkZXIucHJvdG90eXBlLm1heEJhdGNoU2l6ZSA9IGZ1bmN0aW9uIChtYXhCYXRjaFNpemUpIHtcbiAgICAgICAgdGhpcy5tYXhCYXRjaFNpemVfID0gbWF4QmF0Y2hTaXplO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERvbHBoaW5CdWlsZGVyLnByb3RvdHlwZS5zdXBwb3J0Q09SUyA9IGZ1bmN0aW9uIChzdXBwb3J0Q09SUykge1xuICAgICAgICB0aGlzLnN1cHBvcnRDT1JTXyA9IHN1cHBvcnRDT1JTO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERvbHBoaW5CdWlsZGVyLnByb3RvdHlwZS5lcnJvckhhbmRsZXIgPSBmdW5jdGlvbiAoZXJyb3JIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyXyA9IGVycm9ySGFuZGxlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEb2xwaGluQnVpbGRlci5wcm90b3R5cGUuaGVhZGVyc0luZm8gPSBmdW5jdGlvbiAoaGVhZGVyc0luZm8pIHtcbiAgICAgICAgdGhpcy5oZWFkZXJzSW5mb18gPSBoZWFkZXJzSW5mbztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEb2xwaGluQnVpbGRlci5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiT3BlbkRvbHBoaW4ganMgZm91bmRcIik7XG4gICAgICAgIHZhciBjbGllbnREb2xwaGluID0gbmV3IENsaWVudERvbHBoaW5fMVtcImRlZmF1bHRcIl0oKTtcbiAgICAgICAgdmFyIHRyYW5zbWl0dGVyO1xuICAgICAgICBpZiAodGhpcy51cmxfICE9IG51bGwgJiYgdGhpcy51cmxfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRyYW5zbWl0dGVyID0gbmV3IEh0dHBUcmFuc21pdHRlcl8xW1wiZGVmYXVsdFwiXSh0aGlzLnVybF8sIHRoaXMucmVzZXRfLCBcIlVURi04XCIsIHRoaXMuZXJyb3JIYW5kbGVyXywgdGhpcy5zdXBwb3J0Q09SU18sIHRoaXMuaGVhZGVyc0luZm9fKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zbWl0dGVyID0gbmV3IE5vVHJhbnNtaXR0ZXJfMVtcImRlZmF1bHRcIl0oKTtcbiAgICAgICAgfVxuICAgICAgICBjbGllbnREb2xwaGluLnNldENsaWVudENvbm5lY3RvcihuZXcgQ2xpZW50Q29ubmVjdG9yXzEuQ2xpZW50Q29ubmVjdG9yKHRyYW5zbWl0dGVyLCBjbGllbnREb2xwaGluLCB0aGlzLnNsYWNrTVNfLCB0aGlzLm1heEJhdGNoU2l6ZV8pKTtcbiAgICAgICAgY2xpZW50RG9scGhpbi5zZXRDbGllbnRNb2RlbFN0b3JlKG5ldyBDbGllbnRNb2RlbFN0b3JlXzEuQ2xpZW50TW9kZWxTdG9yZShjbGllbnREb2xwaGluKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2xpZW50RG9scGhpbiBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudERvbHBoaW47XG4gICAgfTtcbiAgICByZXR1cm4gRG9scGhpbkJ1aWxkZXI7XG59KCkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRG9scGhpbkJ1aWxkZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURvbHBoaW5CdWlsZGVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgRXZlbnRCdXMgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV2ZW50QnVzKCkge1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSBbXTtcbiAgICB9XG4gICAgRXZlbnRCdXMucHJvdG90eXBlLm9uRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKGV2ZW50SGFuZGxlcik7XG4gICAgfTtcbiAgICBFdmVudEJ1cy5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlKSB7IHJldHVybiBoYW5kbGUoZXZlbnQpOyB9KTtcbiAgICB9O1xuICAgIHJldHVybiBFdmVudEJ1cztcbn0oKSk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBFdmVudEJ1cztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXZlbnRCdXMuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBDb2RlY18xID0gcmVxdWlyZShcIi4vQ29kZWNcIik7XG52YXIgSHR0cFRyYW5zbWl0dGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBIdHRwVHJhbnNtaXR0ZXIodXJsLCByZXNldCwgY2hhcnNldCwgZXJyb3JIYW5kbGVyLCBzdXBwb3J0Q09SUywgaGVhZGVyc0luZm8pIHtcbiAgICAgICAgaWYgKHJlc2V0ID09PSB2b2lkIDApIHsgcmVzZXQgPSB0cnVlOyB9XG4gICAgICAgIGlmIChjaGFyc2V0ID09PSB2b2lkIDApIHsgY2hhcnNldCA9IFwiVVRGLThcIjsgfVxuICAgICAgICBpZiAoZXJyb3JIYW5kbGVyID09PSB2b2lkIDApIHsgZXJyb3JIYW5kbGVyID0gbnVsbDsgfVxuICAgICAgICBpZiAoc3VwcG9ydENPUlMgPT09IHZvaWQgMCkgeyBzdXBwb3J0Q09SUyA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChoZWFkZXJzSW5mbyA9PT0gdm9pZCAwKSB7IGhlYWRlcnNJbmZvID0gbnVsbDsgfVxuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5jaGFyc2V0ID0gY2hhcnNldDtcbiAgICAgICAgdGhpcy5IdHRwQ29kZXMgPSB7XG4gICAgICAgICAgICBmaW5pc2hlZDogNCxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IDIwMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlciA9IGVycm9ySGFuZGxlcjtcbiAgICAgICAgdGhpcy5zdXBwb3J0Q09SUyA9IHN1cHBvcnRDT1JTO1xuICAgICAgICB0aGlzLmhlYWRlcnNJbmZvID0gaGVhZGVyc0luZm87XG4gICAgICAgIHRoaXMuaHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICB0aGlzLnNpZyA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICBpZiAodGhpcy5zdXBwb3J0Q09SUykge1xuICAgICAgICAgICAgaWYgKFwid2l0aENyZWRlbnRpYWxzXCIgaW4gdGhpcy5odHRwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5odHRwLndpdGhDcmVkZW50aWFscyA9IHRydWU7IC8vIE5PVEU6IGRvaW5nIHRoaXMgZm9yIG5vbiBDT1JTIHJlcXVlc3RzIGhhcyBubyBpbXBhY3RcbiAgICAgICAgICAgICAgICB0aGlzLnNpZy53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29kZWMgPSBuZXcgQ29kZWNfMVtcImRlZmF1bHRcIl0oKTtcbiAgICAgICAgaWYgKHJlc2V0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSHR0cFRyYW5zbWl0dGVyLmludmFsaWRhdGUoKSBpcyBkZXByZWNhdGVkLiBVc2UgQ2xpZW50RG9scGhpbi5yZXNldChPblN1Y2Nlc3NIYW5kbGVyKSBpbnN0ZWFkJyk7XG4gICAgICAgICAgICB0aGlzLmludmFsaWRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBIdHRwVHJhbnNtaXR0ZXIucHJvdG90eXBlLnRyYW5zbWl0ID0gZnVuY3Rpb24gKGNvbW1hbmRzLCBvbkRvbmUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5odHRwLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICBfdGhpcy5oYW5kbGVFcnJvcignb25lcnJvcicsIFwiXCIpO1xuICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIGlmIChfdGhpcy5odHRwLnJlYWR5U3RhdGUgPT0gX3RoaXMuSHR0cENvZGVzLmZpbmlzaGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmh0dHAuc3RhdHVzID09IF90aGlzLkh0dHBDb2Rlcy5zdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25zZVRleHQgPSBfdGhpcy5odHRwLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlVGV4dC50cmltKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VDb21tYW5kcyA9IF90aGlzLmNvZGVjLmRlY29kZShyZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG9uZShyZXNwb25zZUNvbW1hbmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VycmVkIHBhcnNpbmcgcmVzcG9uc2VUZXh0OiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluY29ycmVjdCByZXNwb25zZVRleHQ6IFwiLCByZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUVycm9yKCdhcHBsaWNhdGlvbicsIFwiSHR0cFRyYW5zbWl0dGVyOiBJbmNvcnJlY3QgcmVzcG9uc2VUZXh0OiBcIiArIHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmhhbmRsZUVycm9yKCdhcHBsaWNhdGlvbicsIFwiSHR0cFRyYW5zbWl0dGVyOiBlbXB0eSByZXNwb25zZVRleHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVFcnJvcignYXBwbGljYXRpb24nLCBcIkh0dHBUcmFuc21pdHRlcjogSFRUUCBTdGF0dXMgIT0gMjAwXCIpO1xuICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odHRwLm9wZW4oJ1BPU1QnLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyh0aGlzLmh0dHApO1xuICAgICAgICBpZiAoXCJvdmVycmlkZU1pbWVUeXBlXCIgaW4gdGhpcy5odHRwKSB7XG4gICAgICAgICAgICB0aGlzLmh0dHAub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9XCIgKyB0aGlzLmNoYXJzZXQpOyAvLyB0b2RvIG1ha2UgaW5qZWN0YWJsZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaHR0cC5zZW5kKHRoaXMuY29kZWMuZW5jb2RlKGNvbW1hbmRzKSk7XG4gICAgfTtcbiAgICBIdHRwVHJhbnNtaXR0ZXIucHJvdG90eXBlLnNldEhlYWRlcnMgPSBmdW5jdGlvbiAoaHR0cFJlcSkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJzSW5mbykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmhlYWRlcnNJbmZvKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyc0luZm8uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cFJlcS5zZXRSZXF1ZXN0SGVhZGVyKGksIHRoaXMuaGVhZGVyc0luZm9baV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgSHR0cFRyYW5zbWl0dGVyLnByb3RvdHlwZS5oYW5kbGVFcnJvciA9IGZ1bmN0aW9uIChraW5kLCBtZXNzYWdlKSB7XG4gICAgICAgIHZhciBlcnJvckV2ZW50ID0geyBraW5kOiBraW5kLCB1cmw6IHRoaXMudXJsLCBodHRwU3RhdHVzOiB0aGlzLmh0dHAuc3RhdHVzLCBtZXNzYWdlOiBtZXNzYWdlIH07XG4gICAgICAgIGlmICh0aGlzLmVycm9ySGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIoZXJyb3JFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VycmVkOiBcIiwgZXJyb3JFdmVudCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEh0dHBUcmFuc21pdHRlci5wcm90b3R5cGUuc2lnbmFsID0gZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgICAgICAgdGhpcy5zaWcub3BlbignUE9TVCcsIHRoaXMudXJsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRIZWFkZXJzKHRoaXMuc2lnKTtcbiAgICAgICAgdGhpcy5zaWcuc2VuZCh0aGlzLmNvZGVjLmVuY29kZShbY29tbWFuZF0pKTtcbiAgICB9O1xuICAgIC8vIERlcHJlY2F0ZWQgISBVc2UgJ3Jlc2V0KE9uU3VjY2Vzc0hhbmRsZXIpIGluc3RlYWRcbiAgICBIdHRwVHJhbnNtaXR0ZXIucHJvdG90eXBlLmludmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuaHR0cC5vcGVuKCdQT1NUJywgdGhpcy51cmwgKyAnaW52YWxpZGF0ZT8nLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuaHR0cC5zZW5kKCk7XG4gICAgfTtcbiAgICByZXR1cm4gSHR0cFRyYW5zbWl0dGVyO1xufSgpKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IEh0dHBUcmFuc21pdHRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SHR0cFRyYW5zbWl0dGVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBTaWduYWxDb21tYW5kXzEgPSByZXF1aXJlKFwiLi9TaWduYWxDb21tYW5kXCIpO1xudmFyIENvbW1hbmRDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL0NvbW1hbmRDb25zdGFudHNcIik7XG52YXIgSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIEludGVycnVwdExvbmdQb2xsQ29tbWFuZCgpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcywgQ29tbWFuZENvbnN0YW50c18xW1wiZGVmYXVsdFwiXS5JTlRFUlJVUFRfTE9OR19QT0xMX0NPTU1BTkRfTkFNRSk7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJjb20uY2Fub28uZG9scGhpbi5pbXBsLmNvbW1hbmRzLkludGVycnVwdExvbmdQb2xsQ29tbWFuZFwiO1xuICAgIH1cbiAgICByZXR1cm4gSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kO1xufShTaWduYWxDb21tYW5kXzFbXCJkZWZhdWx0XCJdKSk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUludGVycnVwdExvbmdQb2xsQ29tbWFuZC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuLyoqXG4gKiBBIHRyYW5zbWl0dGVyIHRoYXQgaXMgbm90IHRyYW5zbWl0dGluZyBhdCBhbGwuXG4gKiBJdCBtYXkgc2VydmUgYXMgYSBzdGFuZC1pbiB3aGVuIG5vIHJlYWwgdHJhbnNtaXR0ZXIgaXMgbmVlZGVkLlxuICovXG52YXIgTm9UcmFuc21pdHRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gTm9UcmFuc21pdHRlcigpIHtcbiAgICB9XG4gICAgTm9UcmFuc21pdHRlci5wcm90b3R5cGUudHJhbnNtaXQgPSBmdW5jdGlvbiAoY29tbWFuZHMsIG9uRG9uZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nIHNwZWNpYWxcbiAgICAgICAgb25Eb25lKFtdKTtcbiAgICB9O1xuICAgIE5vVHJhbnNtaXR0ZXIucHJvdG90eXBlLnNpZ25hbCA9IGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9O1xuICAgIE5vVHJhbnNtaXR0ZXIucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKHN1Y2Nlc3NIYW5kbGVyKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9O1xuICAgIHJldHVybiBOb1RyYW5zbWl0dGVyO1xufSgpKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IE5vVHJhbnNtaXR0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vVHJhbnNtaXR0ZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBEb2xwaGluQnVpbGRlcl8xID0gcmVxdWlyZShcIi4vRG9scGhpbkJ1aWxkZXJcIik7XG52YXIgQ3JlYXRlQ29udGV4dENvbW1hbmRfMSA9IHJlcXVpcmUoXCIuL0NyZWF0ZUNvbnRleHRDb21tYW5kXCIpO1xudmFyIERlc3Ryb3lDb250ZXh0Q29tbWFuZF8xID0gcmVxdWlyZShcIi4vRGVzdHJveUNvbnRleHRDb21tYW5kXCIpO1xudmFyIEludGVycnVwdExvbmdQb2xsQ29tbWFuZF8xID0gcmVxdWlyZShcIi4vSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kXCIpO1xudmFyIFN0YXJ0TG9uZ1BvbGxDb21tYW5kXzEgPSByZXF1aXJlKFwiLi9TdGFydExvbmdQb2xsQ29tbWFuZFwiKTtcbi8qKlxuICogSlMtZnJpZW5kbHkgZmFjYWRlIHRvIGF2b2lkIHRvbyBtYW55IGRlcGVuZGVuY2llcyBpbiBwbGFpbiBKUyBjb2RlLlxuICogVGhlIG5hbWUgb2YgdGhpcyBmaWxlIGlzIGFsc28gdXNlZCBmb3IgdGhlIGluaXRpYWwgbG9va3VwIG9mIHRoZVxuICogb25lIGphdmFzY3JpcHQgZmlsZSB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgZG9scGhpbiBjb2RlLlxuICogQ2hhbmdpbmcgdGhlIG5hbWUgcmVxdWlyZXMgdGhlIGJ1aWxkIHN1cHBvcnQgYW5kIGFsbCB1c2Vyc1xuICogdG8gYmUgdXBkYXRlZCBhcyB3ZWxsLlxuICogRGllcmsgS29lbmlnXG4gKi9cbi8vIGZhY3RvcnkgbWV0aG9kIGZvciB0aGUgaW5pdGlhbGl6ZWQgZG9scGhpblxuLy8gRGVwcmVjYXRlZCAhIFVzZSAnbWFrZURvbHBoaW4oKSBpbnN0ZWFkXG5mdW5jdGlvbiBkb2xwaGluKHVybCwgcmVzZXQsIHNsYWNrTVMpIHtcbiAgICBpZiAoc2xhY2tNUyA9PT0gdm9pZCAwKSB7IHNsYWNrTVMgPSAzMDA7IH1cbiAgICByZXR1cm4gbWFrZURvbHBoaW4oKS51cmwodXJsKS5yZXNldChyZXNldCkuc2xhY2tNUyhzbGFja01TKS5idWlsZCgpO1xufVxuZXhwb3J0cy5kb2xwaGluID0gZG9scGhpbjtcbi8vIGZhY3RvcnkgbWV0aG9kIHRvIGJ1aWxkIGFuIGluaXRpYWxpemVkIGRvbHBoaW5cbmZ1bmN0aW9uIG1ha2VEb2xwaGluKCkge1xuICAgIHJldHVybiBuZXcgRG9scGhpbkJ1aWxkZXJfMVtcImRlZmF1bHRcIl0oKTtcbn1cbmV4cG9ydHMubWFrZURvbHBoaW4gPSBtYWtlRG9scGhpbjtcbi8vRmFjdG9yeSBtZXRob2RzIHRvIGhhdmUgYSBiZXR0ZXIgaW50ZWdyYXRpb24gb2YgdHMgc291cmNlcyBpbiBKUyAmIGVzNlxuZnVuY3Rpb24gY3JlYXRlQ3JlYXRlQ29udGV4dENvbW1hbmQoKSB7XG4gICAgcmV0dXJuIG5ldyBDcmVhdGVDb250ZXh0Q29tbWFuZF8xW1wiZGVmYXVsdFwiXSgpO1xufVxuZXhwb3J0cy5jcmVhdGVDcmVhdGVDb250ZXh0Q29tbWFuZCA9IGNyZWF0ZUNyZWF0ZUNvbnRleHRDb21tYW5kO1xuZnVuY3Rpb24gY3JlYXRlRGVzdHJveUNvbnRleHRDb21tYW5kKCkge1xuICAgIHJldHVybiBuZXcgRGVzdHJveUNvbnRleHRDb21tYW5kXzFbXCJkZWZhdWx0XCJdKCk7XG59XG5leHBvcnRzLmNyZWF0ZURlc3Ryb3lDb250ZXh0Q29tbWFuZCA9IGNyZWF0ZURlc3Ryb3lDb250ZXh0Q29tbWFuZDtcbmZ1bmN0aW9uIGNyZWF0ZUludGVycnVwdExvbmdQb2xsQ29tbWFuZCgpIHtcbiAgICByZXR1cm4gbmV3IEludGVycnVwdExvbmdQb2xsQ29tbWFuZF8xW1wiZGVmYXVsdFwiXSgpO1xufVxuZXhwb3J0cy5jcmVhdGVJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQgPSBjcmVhdGVJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQ7XG5mdW5jdGlvbiBjcmVhdGVTdGFydExvbmdQb2xsQ29tbWFuZCgpIHtcbiAgICByZXR1cm4gbmV3IFN0YXJ0TG9uZ1BvbGxDb21tYW5kXzFbXCJkZWZhdWx0XCJdKCk7XG59XG5leHBvcnRzLmNyZWF0ZVN0YXJ0TG9uZ1BvbGxDb21tYW5kID0gY3JlYXRlU3RhcnRMb25nUG9sbENvbW1hbmQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU9wZW5Eb2xwaGluLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBDb21tYW5kXzEgPSByZXF1aXJlKCcuL0NvbW1hbmQnKTtcbnZhciBTaWduYWxDb21tYW5kID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2lnbmFsQ29tbWFuZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTaWduYWxDb21tYW5kKG5hbWUpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaWQgPSBuYW1lO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwib3JnLm9wZW5kb2xwaGluLmNvcmUuY29tbS5TaWduYWxDb21tYW5kXCI7XG4gICAgfVxuICAgIHJldHVybiBTaWduYWxDb21tYW5kO1xufShDb21tYW5kXzFbXCJkZWZhdWx0XCJdKSk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTaWduYWxDb21tYW5kO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TaWduYWxDb21tYW5kLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19leHRlbmRzID0gKHRoaXMgJiYgdGhpcy5fX2V4dGVuZHMpIHx8IGZ1bmN0aW9uIChkLCBiKSB7XG4gICAgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07XG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xufTtcbnZhciBDb21tYW5kXzEgPSByZXF1aXJlKCcuL0NvbW1hbmQnKTtcbnZhciBDb21tYW5kQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9Db21tYW5kQ29uc3RhbnRzXCIpO1xudmFyIFN0YXJ0TG9uZ1BvbGxDb21tYW5kID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3RhcnRMb25nUG9sbENvbW1hbmQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU3RhcnRMb25nUG9sbENvbW1hbmQoKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlkID0gQ29tbWFuZENvbnN0YW50c18xW1wiZGVmYXVsdFwiXS5TVEFSVF9MT05HX1BPTExfQ09NTUFORF9OQU1FO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiY29tLmNhbm9vLmRvbHBoaW4uaW1wbC5jb21tYW5kcy5TdGFydExvbmdQb2xsQ29tbWFuZFwiO1xuICAgIH1cbiAgICByZXR1cm4gU3RhcnRMb25nUG9sbENvbW1hbmQ7XG59KENvbW1hbmRfMVtcImRlZmF1bHRcIl0pKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFN0YXJ0TG9uZ1BvbGxDb21tYW5kO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdGFydExvbmdQb2xsQ29tbWFuZC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgQ29tbWFuZF8xID0gcmVxdWlyZSgnLi9Db21tYW5kJyk7XG52YXIgVmFsdWVDaGFuZ2VkQ29tbWFuZCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFZhbHVlQ2hhbmdlZENvbW1hbmQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gVmFsdWVDaGFuZ2VkQ29tbWFuZChhdHRyaWJ1dGVJZCwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZUlkID0gYXR0cmlidXRlSWQ7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmlkID0gXCJWYWx1ZUNoYW5nZWRcIjtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIm9yZy5vcGVuZG9scGhpbi5jb3JlLmNvbW0uVmFsdWVDaGFuZ2VkQ29tbWFuZFwiO1xuICAgIH1cbiAgICByZXR1cm4gVmFsdWVDaGFuZ2VkQ29tbWFuZDtcbn0oQ29tbWFuZF8xW1wiZGVmYXVsdFwiXSkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVmFsdWVDaGFuZ2VkQ29tbWFuZDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9VmFsdWVDaGFuZ2VkQ29tbWFuZC5qcy5tYXBcbiIsIi8qIENvcHlyaWdodCAyMDE1IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKmpzbGludCBicm93c2VyaWZ5OiB0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAgTWFwIGZyb20gJy4uL2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL21hcCc7XG5pbXBvcnQge2V4aXN0c30gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQge2NoZWNrTWV0aG9kfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y2hlY2tQYXJhbX0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYW5NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFzc1JlcG9zaXRvcnkpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyKGNsYXNzUmVwb3NpdG9yeSknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjbGFzc1JlcG9zaXRvcnksICdjbGFzc1JlcG9zaXRvcnknKTtcblxuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeSA9IGNsYXNzUmVwb3NpdG9yeTtcbiAgICAgICAgdGhpcy5hZGRlZEhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbW92ZWRIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51cGRhdGVkSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYXJyYXlVcGRhdGVkSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYWxsQWRkZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFsbFJlbW92ZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFsbFVwZGF0ZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFsbEFycmF5VXBkYXRlZEhhbmRsZXJzID0gW107XG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5vbkJlYW5BZGRlZCgodHlwZSwgYmVhbikgPT4ge1xuICAgICAgICAgICAgbGV0IGhhbmRsZXJMaXN0ID0gc2VsZi5hZGRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkJlYW5BZGRlZC1oYW5kbGVyIGZvciB0eXBlJywgdHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWxsQWRkZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYSBnZW5lcmFsIG9uQmVhbkFkZGVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5Lm9uQmVhblJlbW92ZWQoKHR5cGUsIGJlYW4pID0+IHtcbiAgICAgICAgICAgIGxldCBoYW5kbGVyTGlzdCA9IHNlbGYucmVtb3ZlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkJlYW5SZW1vdmVkLWhhbmRsZXIgZm9yIHR5cGUnLCB0eXBlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGEgZ2VuZXJhbCBvbkJlYW5SZW1vdmVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5Lm9uQmVhblVwZGF0ZSgodHlwZSwgYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBoYW5kbGVyTGlzdCA9IHNlbGYudXBkYXRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuVXBkYXRlLWhhbmRsZXIgZm9yIHR5cGUnLCB0eXBlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhIGdlbmVyYWwgb25CZWFuVXBkYXRlLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5Lm9uQXJyYXlVcGRhdGUoKHR5cGUsIGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCBuZXdFbGVtZW50cykgPT4ge1xuICAgICAgICAgICAgbGV0IGhhbmRsZXJMaXN0ID0gc2VsZi5hcnJheVVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIG5ld0VsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkFycmF5VXBkYXRlLWhhbmRsZXIgZm9yIHR5cGUnLCB0eXBlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hbGxBcnJheVVwZGF0ZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgbmV3RWxlbWVudHMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhIGdlbmVyYWwgb25BcnJheVVwZGF0ZS1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cblxuICAgIG5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSkge1xuICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIubm90aWZ5QmVhbkNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKScpO1xuICAgICAgICBjaGVja1BhcmFtKGJlYW4sICdiZWFuJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocHJvcGVydHlOYW1lLCAncHJvcGVydHlOYW1lJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NSZXBvc2l0b3J5Lm5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSk7XG4gICAgfVxuXG5cbiAgICBub3RpZnlBcnJheUNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgcmVtb3ZlZEVsZW1lbnRzKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5ub3RpZnlBcnJheUNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgcmVtb3ZlZEVsZW1lbnRzKScpO1xuICAgICAgICBjaGVja1BhcmFtKGJlYW4sICdiZWFuJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocHJvcGVydHlOYW1lLCAncHJvcGVydHlOYW1lJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oaW5kZXgsICdpbmRleCcpO1xuICAgICAgICBjaGVja1BhcmFtKGNvdW50LCAnY291bnQnKTtcbiAgICAgICAgY2hlY2tQYXJhbShyZW1vdmVkRWxlbWVudHMsICdyZW1vdmVkRWxlbWVudHMnKTtcblxuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5ub3RpZnlBcnJheUNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgcmVtb3ZlZEVsZW1lbnRzKTtcbiAgICB9XG5cblxuICAgIGlzTWFuYWdlZChiZWFuKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5pc01hbmFnZWQoYmVhbiknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLmlzTWFuYWdlZCgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgY3JlYXRlKHR5cGUpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLmNyZWF0ZSh0eXBlKScpO1xuICAgICAgICBjaGVja1BhcmFtKHR5cGUsICd0eXBlJyk7XG5cbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGRvbHBoaW4uY3JlYXRlKCkgW0RQLTddXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG4gICAgfVxuXG5cbiAgICBhZGQodHlwZSwgYmVhbikge1xuICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIuYWRkKHR5cGUsIGJlYW4pJyk7XG4gICAgICAgIGNoZWNrUGFyYW0odHlwZSwgJ3R5cGUnKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLmFkZCgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgYWRkQWxsKHR5cGUsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLmFkZEFsbCh0eXBlLCBjb2xsZWN0aW9uKScpO1xuICAgICAgICBjaGVja1BhcmFtKHR5cGUsICd0eXBlJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29sbGVjdGlvbiwgJ2NvbGxlY3Rpb24nKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5hZGRBbGwoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIHJlbW92ZShiZWFuKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5yZW1vdmUoYmVhbiknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLnJlbW92ZSgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlQWxsKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLnJlbW92ZUFsbChjb2xsZWN0aW9uKScpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbGxlY3Rpb24sICdjb2xsZWN0aW9uJyk7XG5cbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGRvbHBoaW4ucmVtb3ZlQWxsKCkgW0RQLTddXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG4gICAgfVxuXG5cbiAgICByZW1vdmVJZihwcmVkaWNhdGUpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLnJlbW92ZUlmKHByZWRpY2F0ZSknKTtcbiAgICAgICAgY2hlY2tQYXJhbShwcmVkaWNhdGUsICdwcmVkaWNhdGUnKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5yZW1vdmVJZigpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgb25BZGRlZCh0eXBlLCBldmVudEhhbmRsZXIpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIWV4aXN0cyhldmVudEhhbmRsZXIpKSB7XG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSB0eXBlO1xuICAgICAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLm9uQWRkZWQoZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgc2VsZi5hbGxBZGRlZEhhbmRsZXJzID0gc2VsZi5hbGxBZGRlZEhhbmRsZXJzLmNvbmNhdChldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEFkZGVkSGFuZGxlcnMgPSBzZWxmLmFsbEFkZGVkSGFuZGxlcnMuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIub25BZGRlZCh0eXBlLCBldmVudEhhbmRsZXIpJyk7XG4gICAgICAgICAgICBjaGVja1BhcmFtKHR5cGUsICd0eXBlJyk7XG4gICAgICAgICAgICBjaGVja1BhcmFtKGV2ZW50SGFuZGxlciwgJ2V2ZW50SGFuZGxlcicpO1xuXG4gICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBzZWxmLmFkZGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKCFleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWRkZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuY29uY2F0KGV2ZW50SGFuZGxlcikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBzZWxmLmFkZGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvblJlbW92ZWQodHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFleGlzdHMoZXZlbnRIYW5kbGVyKSkge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdHlwZTtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vblJlbW92ZWQoZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMgPSBzZWxmLmFsbFJlbW92ZWRIYW5kbGVycy5jb25jYXQoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMgPSBzZWxmLmFsbFJlbW92ZWRIYW5kbGVycy5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vblJlbW92ZWQodHlwZSwgZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi5yZW1vdmVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKCFleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucmVtb3ZlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5jb25jYXQoZXZlbnRIYW5kbGVyKSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyTGlzdCA9IHNlbGYucmVtb3ZlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbkJlYW5VcGRhdGUodHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFleGlzdHMoZXZlbnRIYW5kbGVyKSkge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdHlwZTtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vbkJlYW5VcGRhdGUoZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMgPSBzZWxmLmFsbFVwZGF0ZWRIYW5kbGVycy5jb25jYXQoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMgPSBzZWxmLmFsbFVwZGF0ZWRIYW5kbGVycy5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vbkJlYW5VcGRhdGUodHlwZSwgZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi51cGRhdGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKCFleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYudXBkYXRlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5jb25jYXQoZXZlbnRIYW5kbGVyKSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyTGlzdCA9IHNlbGYudXBkYXRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BcnJheVVwZGF0ZSh0eXBlLCBldmVudEhhbmRsZXIpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIWV4aXN0cyhldmVudEhhbmRsZXIpKSB7XG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSB0eXBlO1xuICAgICAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLm9uQXJyYXlVcGRhdGUoZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgc2VsZi5hbGxBcnJheVVwZGF0ZWRIYW5kbGVycyA9IHNlbGYuYWxsQXJyYXlVcGRhdGVkSGFuZGxlcnMuY29uY2F0KGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsQXJyYXlVcGRhdGVkSGFuZGxlcnMgPSBzZWxmLmFsbEFycmF5VXBkYXRlZEhhbmRsZXJzLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLm9uQXJyYXlVcGRhdGUodHlwZSwgZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi5hcnJheVVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyTGlzdCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hcnJheVVwZGF0ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuY29uY2F0KGV2ZW50SGFuZGxlcikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBzZWxmLmFycmF5VXBkYXRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXJyYXlVcGRhdGVkSGFuZGxlcnMuc2V0KHR5cGUsIGhhbmRsZXJMaXN0LmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCAgTWFwIGZyb20gJy4uL2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL21hcCc7XG5pbXBvcnQgKiBhcyBjb25zdHMgZnJvbSAnLi9jb25zdGFudHMnO1xuXG5pbXBvcnQge2V4aXN0c30gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQge2NoZWNrTWV0aG9kfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y2hlY2tQYXJhbX0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBibG9ja2VkID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NSZXBvc2l0b3J5IHtcblxuICAgIGNvbnN0cnVjdG9yKGRvbHBoaW4pIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeShkb2xwaGluKScpO1xuICAgICAgICBjaGVja1BhcmFtKGRvbHBoaW4sICdkb2xwaGluJyk7XG5cbiAgICAgICAgdGhpcy5kb2xwaGluID0gZG9scGhpbjtcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmJlYW5Gcm9tRG9scGhpbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5iZWFuVG9Eb2xwaGluID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNsYXNzSW5mb3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYmVhbkFkZGVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5iZWFuUmVtb3ZlZEhhbmRsZXJzID0gW107XG4gICAgICAgIHRoaXMucHJvcGVydHlVcGRhdGVIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFycmF5VXBkYXRlSGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBmaXhUeXBlKHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuQllURTpcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLlNIT1JUOlxuICAgICAgICAgICAgY2FzZSBjb25zdHMuSU5UOlxuICAgICAgICAgICAgY2FzZSBjb25zdHMuTE9ORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuRkxPQVQ6XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5ET1VCTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuQk9PTEVBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3RydWUnID09PSBTdHJpbmcodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5TVFJJTkc6XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5FTlVNOlxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcm9tRG9scGhpbihjbGFzc1JlcG9zaXRvcnksIHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICghZXhpc3RzKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5ET0xQSElOX0JFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzUmVwb3NpdG9yeS5iZWFuRnJvbURvbHBoaW4uZ2V0KFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5DQUxFTkRBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5MT0NBTF9EQVRFX0ZJRUxEX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuTE9DQUxfREFURV9USU1FX0ZJRUxEX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuWk9ORURfREFURV9USU1FX0ZJRUxEX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maXhUeXBlKHR5cGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvRG9scGhpbihjbGFzc1JlcG9zaXRvcnksIHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICghZXhpc3RzKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5ET0xQSElOX0JFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzUmVwb3NpdG9yeS5iZWFuVG9Eb2xwaGluLmdldCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZS50b0lTT1N0cmluZygpIDogdmFsdWU7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5DQUxFTkRBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuTE9DQUxfREFURV9GSUVMRF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZS50b0lTT1N0cmluZygpIDogdmFsdWU7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5MT0NBTF9EQVRFX1RJTUVfRklFTERfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuWk9ORURfREFURV9USU1FX0ZJRUxEX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHZhbHVlLnRvSVNPU3RyaW5nKCkgOiB2YWx1ZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZml4VHlwZSh0eXBlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kTGlzdFNwbGljZShjbGFzc1JlcG9zaXRvcnksIG1vZGVsSWQsIHByb3BlcnR5TmFtZSwgZnJvbSwgdG8sIG5ld0VsZW1lbnRzKSB7XG4gICAgICAgIGxldCBkb2xwaGluID0gY2xhc3NSZXBvc2l0b3J5LmRvbHBoaW47XG4gICAgICAgIGxldCBtb2RlbCA9IGRvbHBoaW4uZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChtb2RlbElkKTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoZXhpc3RzKG1vZGVsKSkge1xuICAgICAgICAgICAgbGV0IGNsYXNzSW5mbyA9IGNsYXNzUmVwb3NpdG9yeS5jbGFzc2VzLmdldChtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUpO1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBjbGFzc0luZm9bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIGlmIChleGlzdHModHlwZSkpIHtcblxuICAgICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVzID0gW1xuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnQEBAIFNPVVJDRV9TWVNURU0gQEBAJywgbnVsbCwgJ2NsaWVudCcpLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnc291cmNlJywgbnVsbCwgbW9kZWxJZCksXG4gICAgICAgICAgICAgICAgICAgIGRvbHBoaW4uYXR0cmlidXRlKCdhdHRyaWJ1dGUnLCBudWxsLCBwcm9wZXJ0eU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnZnJvbScsIG51bGwsIGZyb20pLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgndG8nLCBudWxsLCB0byksXG4gICAgICAgICAgICAgICAgICAgIGRvbHBoaW4uYXR0cmlidXRlKCdjb3VudCcsIG51bGwsIG5ld0VsZW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChkb2xwaGluLmF0dHJpYnV0ZShpbmRleC50b1N0cmluZygpLCBudWxsLCBzZWxmLnRvRG9scGhpbihjbGFzc1JlcG9zaXRvcnksIHR5cGUsIGVsZW1lbnQpKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZG9scGhpbi5wcmVzZW50YXRpb25Nb2RlbC5hcHBseShkb2xwaGluLCBbbnVsbCwgJ0BEUDpMU0AnXS5jb25jYXQoYXR0cmlidXRlcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVMaXN0KGNsYXNzUmVwb3NpdG9yeSwgdHlwZSwgYmVhbiwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGxldCBsaXN0ID0gYmVhbltwcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZiAoIWV4aXN0cyhsaXN0KSkge1xuICAgICAgICAgICAgY2xhc3NSZXBvc2l0b3J5LnByb3BlcnR5VXBkYXRlSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIodHlwZSwgYmVhbiwgcHJvcGVydHlOYW1lLCBbXSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuVXBkYXRlLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJsb2NrKGJlYW4sIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoZXhpc3RzKGJsb2NrZWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBjcmVhdGUgYSBibG9jayB3aGlsZSBhbm90aGVyIGJsb2NrIGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrZWQgPSB7XG4gICAgICAgICAgICBiZWFuOiBiZWFuLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpc0Jsb2NrZWQoYmVhbiwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHJldHVybiBleGlzdHMoYmxvY2tlZCkgJiYgYmxvY2tlZC5iZWFuID09PSBiZWFuICYmIGJsb2NrZWQucHJvcGVydHlOYW1lID09PSBwcm9wZXJ0eU5hbWU7XG4gICAgfVxuXG4gICAgdW5ibG9jaygpIHtcbiAgICAgICAgYmxvY2tlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgbm90aWZ5QmVhbkNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkubm90aWZ5QmVhbkNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKScpO1xuICAgICAgICBjaGVja1BhcmFtKGJlYW4sICdiZWFuJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocHJvcGVydHlOYW1lLCAncHJvcGVydHlOYW1lJyk7XG5cbiAgICAgICAgbGV0IG1vZGVsSWQgPSB0aGlzLmJlYW5Ub0RvbHBoaW4uZ2V0KGJlYW4pO1xuICAgICAgICBpZiAoZXhpc3RzKG1vZGVsSWQpKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLmRvbHBoaW4uZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChtb2RlbElkKTtcbiAgICAgICAgICAgIGlmIChleGlzdHMobW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzSW5mbyA9IHRoaXMuY2xhc3Nlcy5nZXQobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGNsYXNzSW5mb1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKHR5cGUpICYmIGV4aXN0cyhhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvbGRWYWx1ZSA9IGF0dHJpYnV0ZS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUuc2V0VmFsdWUodGhpcy50b0RvbHBoaW4odGhpcywgdHlwZSwgbmV3VmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbURvbHBoaW4odGhpcywgdHlwZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUFycmF5Q2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCByZW1vdmVkRWxlbWVudHMpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5ub3RpZnlBcnJheUNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgcmVtb3ZlZEVsZW1lbnRzKScpO1xuICAgICAgICBjaGVja1BhcmFtKGJlYW4sICdiZWFuJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocHJvcGVydHlOYW1lLCAncHJvcGVydHlOYW1lJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oaW5kZXgsICdpbmRleCcpO1xuICAgICAgICBjaGVja1BhcmFtKGNvdW50LCAnY291bnQnKTtcbiAgICAgICAgY2hlY2tQYXJhbShyZW1vdmVkRWxlbWVudHMsICdyZW1vdmVkRWxlbWVudHMnKTtcblxuICAgICAgICBpZiAodGhpcy5pc0Jsb2NrZWQoYmVhbiwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtb2RlbElkID0gdGhpcy5iZWFuVG9Eb2xwaGluLmdldChiZWFuKTtcbiAgICAgICAgbGV0IGFycmF5ID0gYmVhbltwcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZiAoZXhpc3RzKG1vZGVsSWQpICYmIGV4aXN0cyhhcnJheSkpIHtcbiAgICAgICAgICAgIGxldCByZW1vdmVkRWxlbWVudHNDb3VudCA9IEFycmF5LmlzQXJyYXkocmVtb3ZlZEVsZW1lbnRzKSA/IHJlbW92ZWRFbGVtZW50cy5sZW5ndGggOiAwO1xuICAgICAgICAgICAgdGhpcy5zZW5kTGlzdFNwbGljZSh0aGlzLCBtb2RlbElkLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBpbmRleCArIHJlbW92ZWRFbGVtZW50c0NvdW50LCBhcnJheS5zbGljZShpbmRleCwgaW5kZXggKyBjb3VudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CZWFuQWRkZWQoaGFuZGxlcikge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5Lm9uQmVhbkFkZGVkKGhhbmRsZXIpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oaGFuZGxlciwgJ2hhbmRsZXInKTtcbiAgICAgICAgdGhpcy5iZWFuQWRkZWRIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uQmVhblJlbW92ZWQoaGFuZGxlcikge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5Lm9uQmVhblJlbW92ZWQoaGFuZGxlciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShoYW5kbGVyLCAnaGFuZGxlcicpO1xuICAgICAgICB0aGlzLmJlYW5SZW1vdmVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvbkJlYW5VcGRhdGUoaGFuZGxlcikge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5Lm9uQmVhblVwZGF0ZShoYW5kbGVyKScpO1xuICAgICAgICBjaGVja1BhcmFtKGhhbmRsZXIsICdoYW5kbGVyJyk7XG4gICAgICAgIHRoaXMucHJvcGVydHlVcGRhdGVIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uQXJyYXlVcGRhdGUoaGFuZGxlcikge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5Lm9uQXJyYXlVcGRhdGUoaGFuZGxlciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShoYW5kbGVyLCAnaGFuZGxlcicpO1xuICAgICAgICB0aGlzLmFycmF5VXBkYXRlSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNsYXNzKG1vZGVsKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkucmVnaXN0ZXJDbGFzcyhtb2RlbCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3Nlcy5oYXMobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NJbmZvID0ge307XG4gICAgICAgIG1vZGVsLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGUucHJvcGVydHlOYW1lLnNlYXJjaCgvXkAvKSA8IDA7XG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgY2xhc3NJbmZvW2F0dHJpYnV0ZS5wcm9wZXJ0eU5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGFzc2VzLnNldChtb2RlbC5pZCwgY2xhc3NJbmZvKTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyQ2xhc3MobW9kZWwpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS51bnJlZ2lzdGVyQ2xhc3MobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuICAgICAgICB0aGlzLmNsYXNzZXNbJ2RlbGV0ZSddKG1vZGVsLmlkKTtcbiAgICB9XG5cbiAgICBsb2FkKG1vZGVsKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkubG9hZChtb2RlbCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgY2xhc3NJbmZvID0gdGhpcy5jbGFzc2VzLmdldChtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUpO1xuICAgICAgICB2YXIgYmVhbiA9IHt9O1xuICAgICAgICBtb2RlbC5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUuc2VhcmNoKC9eQC8pIDwgMCk7XG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgYmVhblthdHRyaWJ1dGUucHJvcGVydHlOYW1lXSA9IG51bGw7XG4gICAgICAgICAgICBhdHRyaWJ1dGUub25WYWx1ZUNoYW5nZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQub2xkVmFsdWUgIT09IGV2ZW50Lm5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvbGRWYWx1ZSA9IHNlbGYuZnJvbURvbHBoaW4oc2VsZiwgY2xhc3NJbmZvW2F0dHJpYnV0ZS5wcm9wZXJ0eU5hbWVdLCBldmVudC5vbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHNlbGYuZnJvbURvbHBoaW4oc2VsZiwgY2xhc3NJbmZvW2F0dHJpYnV0ZS5wcm9wZXJ0eU5hbWVdLCBldmVudC5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvcGVydHlVcGRhdGVIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlLCBiZWFuLCBhdHRyaWJ1dGUucHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuVXBkYXRlLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJlYW5Gcm9tRG9scGhpbi5zZXQobW9kZWwuaWQsIGJlYW4pO1xuICAgICAgICB0aGlzLmJlYW5Ub0RvbHBoaW4uc2V0KGJlYW4sIG1vZGVsLmlkKTtcbiAgICAgICAgdGhpcy5jbGFzc0luZm9zLnNldChtb2RlbC5pZCwgY2xhc3NJbmZvKTtcbiAgICAgICAgdGhpcy5iZWFuQWRkZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlLCBiZWFuKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhbkFkZGVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBiZWFuO1xuICAgIH1cblxuICAgIHVubG9hZChtb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5LnVubG9hZChtb2RlbCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgbGV0IGJlYW4gPSB0aGlzLmJlYW5Gcm9tRG9scGhpbi5nZXQobW9kZWwuaWQpO1xuICAgICAgICB0aGlzLmJlYW5Gcm9tRG9scGhpblsnZGVsZXRlJ10obW9kZWwuaWQpO1xuICAgICAgICB0aGlzLmJlYW5Ub0RvbHBoaW5bJ2RlbGV0ZSddKGJlYW4pO1xuICAgICAgICB0aGlzLmNsYXNzSW5mb3NbJ2RlbGV0ZSddKG1vZGVsLmlkKTtcbiAgICAgICAgaWYgKGV4aXN0cyhiZWFuKSkge1xuICAgICAgICAgICAgdGhpcy5iZWFuUmVtb3ZlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSwgYmVhbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhblJlbW92ZWQtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZWFuO1xuICAgIH1cblxuICAgIHNwbGljZUxpc3RFbnRyeShtb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5LnNwbGljZUxpc3RFbnRyeShtb2RlbCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgbGV0IHNvdXJjZSA9IG1vZGVsLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZSgnc291cmNlJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ2F0dHJpYnV0ZScpO1xuICAgICAgICBsZXQgZnJvbSA9IG1vZGVsLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZSgnZnJvbScpO1xuICAgICAgICBsZXQgdG8gPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ3RvJyk7XG4gICAgICAgIGxldCBjb3VudCA9IG1vZGVsLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZSgnY291bnQnKTtcblxuICAgICAgICBpZiAoZXhpc3RzKHNvdXJjZSkgJiYgZXhpc3RzKGF0dHJpYnV0ZSkgJiYgZXhpc3RzKGZyb20pICYmIGV4aXN0cyh0bykgJiYgZXhpc3RzKGNvdW50KSkge1xuICAgICAgICAgICAgdmFyIGNsYXNzSW5mbyA9IHRoaXMuY2xhc3NJbmZvcy5nZXQoc291cmNlLnZhbHVlKTtcbiAgICAgICAgICAgIHZhciBiZWFuID0gdGhpcy5iZWFuRnJvbURvbHBoaW4uZ2V0KHNvdXJjZS52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKGJlYW4pICYmIGV4aXN0cyhjbGFzc0luZm8pKSB7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgICAgICAgICAgLy92YXIgZW50cnkgPSBmcm9tRG9scGhpbih0aGlzLCBjbGFzc0luZm9bYXR0cmlidXRlLnZhbHVlXSwgZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUxpc3QodGhpcywgdHlwZSwgYmVhbiwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3RWxlbWVudHMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudC52YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoaS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdHMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGlzdCBtb2RpZmljYXRpb24gdXBkYXRlIHJlY2VpdmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnRzLnB1c2godGhpcy5mcm9tRG9scGhpbih0aGlzLCBjbGFzc0luZm9bYXR0cmlidXRlLnZhbHVlXSwgZWxlbWVudC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsb2NrKGJlYW4sIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlVcGRhdGVIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIodHlwZSwgYmVhbiwgYXR0cmlidXRlLnZhbHVlLCBmcm9tLnZhbHVlLCB0by52YWx1ZSAtIGZyb20udmFsdWUsIG5ld0VsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQXJyYXlVcGRhdGUtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuYmxvY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGlzdCBtb2RpZmljYXRpb24gdXBkYXRlIHJlY2VpdmVkLiBTb3VyY2UgYmVhbiB1bmtub3duLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGlzdCBtb2RpZmljYXRpb24gdXBkYXRlIHJlY2VpdmVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFwUGFyYW1Ub0RvbHBoaW4ocGFyYW0pIHtcbiAgICAgICAgaWYgKCFleGlzdHMocGFyYW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHR5cGUgPSB0eXBlb2YgcGFyYW07XG4gICAgICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmJlYW5Ub0RvbHBoaW4uZ2V0KHBhcmFtKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPbmx5IG1hbmFnZWQgRG9scGhpbiBCZWFucyBjYW4gYmUgdXNlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9ubHkgbWFuYWdlZCBEb2xwaGluIEJlYW5zIGFuZCBwcmltaXRpdmUgdHlwZXMgY2FuIGJlIHVzZWRcIik7XG4gICAgfVxuXG4gICAgbWFwRG9scGhpblRvQmVhbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mcm9tRG9scGhpbih0aGlzLCBjb25zdHMuRE9MUEhJTl9CRUFOLCB2YWx1ZSk7XG4gICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IDIwMTUgQ2Fub28gRW5naW5lZXJpbmcgQUcuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qanNsaW50IGJyb3dzZXJpZnk6IHRydWUgKi9cbi8qIGdsb2JhbCBjb25zb2xlICovXG4vKiBnbG9iYWwgZXhwb3J0cyAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQgT3BlbkRvbHBoaW4gZnJvbSAnLi4vb3BlbmRvbHBoaW4vYnVpbGQvT3BlbkRvbHBoaW4uanMnO1xuaW1wb3J0IHtleGlzdHN9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XG5pbXBvcnQgQmVhbk1hbmFnZXIgZnJvbSAnLi9iZWFubWFuYWdlci5qcyc7XG5pbXBvcnQgQ2xhc3NSZXBvc2l0b3J5IGZyb20gJy4vY2xhc3NyZXBvLmpzJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuL2NvbnRyb2xsZXJtYW5hZ2VyLmpzJztcbmltcG9ydCBDbGllbnRDb250ZXh0IGZyb20gJy4vY2xpZW50Y29udGV4dC5qcyc7XG5pbXBvcnQgUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIgZnJvbSAnLi9wbGF0Zm9ybUh0dHBUcmFuc21pdHRlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudENvbnRleHRGYWN0b3J5e1xuXG4gICAgY3JlYXRlKHVybCwgY29uZmlnKXtcbiAgICAgICAgY2hlY2tNZXRob2QoJ2Nvbm5lY3QodXJsLCBjb25maWcpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0odXJsLCAndXJsJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBjbGllbnQgY29udGV4dCAnKyB1cmwgKycgICAgJysgSlNPTi5zdHJpbmdpZnkoY29uZmlnKSk7XG5cbiAgICAgICAgbGV0IGJ1aWxkZXIgPSBPcGVuRG9scGhpbi5tYWtlRG9scGhpbigpLnVybCh1cmwpLnJlc2V0KGZhbHNlKS5zbGFja01TKDQpLnN1cHBvcnRDT1JTKHRydWUpLm1heEJhdGNoU2l6ZShOdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XG4gICAgICAgIGlmIChleGlzdHMoY29uZmlnKSkge1xuICAgICAgICAgICAgaWYgKGV4aXN0cyhjb25maWcuZXJyb3JIYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXIuZXJyb3JIYW5kbGVyKGNvbmZpZy5lcnJvckhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4aXN0cyhjb25maWcuaGVhZGVyc0luZm8pICYmIE9iamVjdC5rZXlzKGNvbmZpZy5oZWFkZXJzSW5mbykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXIuaGVhZGVyc0luZm8oY29uZmlnLmhlYWRlcnNJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkb2xwaGluID0gYnVpbGRlci5idWlsZCgpO1xuXG4gICAgICAgIHZhciB0cmFuc21pdHRlciA9IG5ldyBQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcih1cmwsIGNvbmZpZyk7XG4gICAgICAgIHRyYW5zbWl0dGVyLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2xpZW50Q29udGV4dC5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvbHBoaW4uY2xpZW50Q29ubmVjdG9yLnRyYW5zbWl0dGVyID0gdHJhbnNtaXR0ZXI7XG5cbiAgICAgICAgdmFyIGNsYXNzUmVwb3NpdG9yeSA9IG5ldyBDbGFzc1JlcG9zaXRvcnkoZG9scGhpbik7XG4gICAgICAgIHZhciBiZWFuTWFuYWdlciA9IG5ldyBCZWFuTWFuYWdlcihjbGFzc1JlcG9zaXRvcnkpO1xuICAgICAgICB2YXIgY29ubmVjdG9yID0gbmV3IENvbm5lY3Rvcih1cmwsIGRvbHBoaW4sIGNsYXNzUmVwb3NpdG9yeSwgY29uZmlnKTtcbiAgICAgICAgdmFyIGNvbnRyb2xsZXJNYW5hZ2VyID0gbmV3IENvbnRyb2xsZXJNYW5hZ2VyKGRvbHBoaW4sIGNsYXNzUmVwb3NpdG9yeSwgY29ubmVjdG9yKTtcblxuICAgICAgICB2YXIgY2xpZW50Q29udGV4dCA9IG5ldyBDbGllbnRDb250ZXh0KGRvbHBoaW4sIGJlYW5NYW5hZ2VyLCBjb250cm9sbGVyTWFuYWdlciwgY29ubmVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudENvbnRleHQ7XG4gICAgfVxufVxuXG5leHBvcnRzLkNsaWVudENvbnRleHRGYWN0b3J5ID0gQ2xpZW50Q29udGV4dEZhY3Rvcnk7XG5cbiIsIi8qIENvcHlyaWdodCAyMDE1IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKmpzbGludCBicm93c2VyaWZ5OiB0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPcGVuRG9scGhpbiBmcm9tICcuLi9vcGVuZG9scGhpbi9idWlsZC9PcGVuRG9scGhpbi5qcyc7XG5pbXBvcnQgRW1pdHRlciBmcm9tICdlbWl0dGVyLWNvbXBvbmVudCc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9wcm9taXNlJztcbmltcG9ydCB7ZXhpc3RzfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7Y2hlY2tNZXRob2R9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja1BhcmFtfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50Q29udGV4dHtcblxuICAgIGNvbnN0cnVjdG9yKGRvbHBoaW4sIGJlYW5NYW5hZ2VyLCBjb250cm9sbGVyTWFuYWdlciwgY29ubmVjdG9yKXtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsaWVudENvbnRleHQoZG9scGhpbiwgYmVhbk1hbmFnZXIsIGNvbnRyb2xsZXJNYW5hZ2VyLCBjb25uZWN0b3IpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oZG9scGhpbiwgJ2RvbHBoaW4nKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuTWFuYWdlciwgJ2JlYW5NYW5hZ2VyJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlck1hbmFnZXIsICdjb250cm9sbGVyTWFuYWdlcicpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbm5lY3RvciwgJ2Nvbm5lY3RvcicpO1xuXG4gICAgICAgIHRoaXMuZG9scGhpbiA9IGRvbHBoaW47XG4gICAgICAgIHRoaXMuYmVhbk1hbmFnZXIgPSBiZWFuTWFuYWdlcjtcbiAgICAgICAgdGhpcy5fY29udHJvbGxlck1hbmFnZXIgPSBjb250cm9sbGVyTWFuYWdlcjtcbiAgICAgICAgdGhpcy5fY29ubmVjdG9yID0gY29ubmVjdG9yO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25Qcm9taXNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5pc0Nvbm5lY3RlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGNvbm5lY3QoKXtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNvbm5lY3Rpb25Qcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNlbGYuX2Nvbm5lY3Rvci5jb25uZWN0KCk7XG4gICAgICAgICAgICBzZWxmLl9jb25uZWN0b3IuaW52b2tlKE9wZW5Eb2xwaGluLmNyZWF0ZUNyZWF0ZUNvbnRleHRDb21tYW5kKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblByb21pc2U7XG4gICAgfVxuXG4gICAgb25Db25uZWN0KCl7XG4gICAgICAgIGlmKGV4aXN0cyh0aGlzLmNvbm5lY3Rpb25Qcm9taXNlKSl7XG4gICAgICAgICAgICBpZighdGhpcy5pc0Nvbm5lY3RlZCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdGlvblByb21pc2U7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3QoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNyZWF0ZUNvbnRyb2xsZXIobmFtZSl7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGllbnRDb250ZXh0LmNyZWF0ZUNvbnRyb2xsZXIobmFtZSknKTtcbiAgICAgICAgY2hlY2tQYXJhbShuYW1lLCAnbmFtZScpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250cm9sbGVyTWFuYWdlci5jcmVhdGVDb250cm9sbGVyKG5hbWUpO1xuICAgIH1cblxuICAgIGRpc2Nvbm5lY3QoKXtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRvbHBoaW4uc3RvcFB1c2hMaXN0ZW5pbmcoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9jb250cm9sbGVyTWFuYWdlci5kZXN0cm95KCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5fY29ubmVjdG9yLmludm9rZShPcGVuRG9scGhpbi5jcmVhdGVEZXN0cm95Q29udGV4dENvbW1hbmQoKSk7XG4gICAgICAgICAgICAgICAgc2VsZi5kb2xwaGluID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxmLmJlYW5NYW5hZ2VyID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxmLl9jb250cm9sbGVyTWFuYWdlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi5fY29ubmVjdG9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5FbWl0dGVyKENsaWVudENvbnRleHQucHJvdG90eXBlKTsiLCIvKiBDb3B5cmlnaHQgMjAxNiBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuXG5cbmltcG9ydCB7IGV4aXN0cyB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlY3tcblxuICAgIHN0YXRpYyBlbmNvZGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AnOiBjb21tYW5kLnBtSWQsXG4gICAgICAgICAgICAndCc6IGNvbW1hbmQucG1UeXBlLFxuICAgICAgICAgICAgJ2EnOiBjb21tYW5kLmF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICAnbic6IGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdpJzogYXR0cmlidXRlLmlkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKGF0dHJpYnV0ZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnYgPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICdpZCc6ICdDcmVhdGVQcmVzZW50YXRpb25Nb2RlbCdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVjb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdpZCc6ICdDcmVhdGVQcmVzZW50YXRpb25Nb2RlbCcsXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogXCJvcmcub3BlbmRvbHBoaW4uY29yZS5jb21tLkNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZFwiLFxuICAgICAgICAgICAgJ2NsaWVudFNpZGVPbmx5JzogZmFsc2UsXG4gICAgICAgICAgICAncG1JZCc6IGNvbW1hbmQucCxcbiAgICAgICAgICAgICdwbVR5cGUnOiBjb21tYW5kLnQsXG4gICAgICAgICAgICAnYXR0cmlidXRlcyc6IGNvbW1hbmQuYS5tYXAoKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eU5hbWUnOiBhdHRyaWJ1dGUubixcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogYXR0cmlidXRlLmksXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGV4aXN0cyhhdHRyaWJ1dGUudik/IGF0dHJpYnV0ZS52IDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJ3F1YWxpZmllcic6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZW5jb2RlVmFsdWVDaGFuZ2VkQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgICAnYSc6IGNvbW1hbmQuYXR0cmlidXRlSWRcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGV4aXN0cyhjb21tYW5kLm9sZFZhbHVlKSkge1xuICAgICAgICAgICAgcmVzdWx0Lm8gPSBjb21tYW5kLm9sZFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChleGlzdHMoY29tbWFuZC5uZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5uID0gY29tbWFuZC5uZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuaWQgPSAnVmFsdWVDaGFuZ2VkJztcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVjb2RlVmFsdWVDaGFuZ2VkQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnaWQnOiAnVmFsdWVDaGFuZ2VkJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiBcIm9yZy5vcGVuZG9scGhpbi5jb3JlLmNvbW0uVmFsdWVDaGFuZ2VkQ29tbWFuZFwiLFxuICAgICAgICAgICAgJ2F0dHJpYnV0ZUlkJzogY29tbWFuZC5hLFxuICAgICAgICAgICAgJ29sZFZhbHVlJzogZXhpc3RzKGNvbW1hbmQubyk/IGNvbW1hbmQubyA6IG51bGwsXG4gICAgICAgICAgICAnbmV3VmFsdWUnOiBleGlzdHMoY29tbWFuZC5uKT8gY29tbWFuZC5uIDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBlbmNvZGUoY29tbWFuZHMpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY29tbWFuZHMubWFwKChjb21tYW5kKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tbWFuZC5pZCA9PT0gJ0NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmVuY29kZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gJ1ZhbHVlQ2hhbmdlZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5lbmNvZGVWYWx1ZUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVjb2RlKHRyYW5zbWl0dGVkKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc21pdHRlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRyYW5zbWl0dGVkKS5tYXAoZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZC5pZCA9PT0gJ0NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5kZWNvZGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSAnVmFsdWVDaGFuZ2VkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5kZWNvZGVWYWx1ZUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbWl0dGVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IERlc3Ryb3lDb250cm9sbGVyQ29tbWFuZCBmcm9tICcuL2NvbW1hbmRzL2Rlc3Ryb3lDb250cm9sbGVyQ29tbWFuZC5qcyc7XG5pbXBvcnQgQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQgZnJvbSAnLi9jb21tYW5kcy9jcmVhdGVDb250cm9sbGVyQ29tbWFuZC5qcyc7XG5pbXBvcnQgQ2FsbEFjdGlvbkNvbW1hbmQgZnJvbSAnLi9jb21tYW5kcy9jYWxsQWN0aW9uQ29tbWFuZC5qcyc7XG5cbmV4cG9ydCBjbGFzcyBDb21tYW5kRmFjdG9yeSB7XG5cbiAgICBzdGF0aWMgY3JlYXRlRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKGNvbnRyb2xsZXJJZCkge1xuICAgICAgICByZXR1cm4gbmV3IERlc3Ryb3lDb250cm9sbGVyQ29tbWFuZChjb250cm9sbGVySWQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDcmVhdGVDb250cm9sbGVyQ29tbWFuZChjb250cm9sbGVyTmFtZSwgcGFyZW50Q29udHJvbGxlcklkKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQoY29udHJvbGxlck5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNhbGxBY3Rpb25Db21tYW5kKGNvbnRyb2xsZXJpZCwgYWN0aW9uTmFtZSwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2FsbEFjdGlvbkNvbW1hbmQoY29udHJvbGxlcmlkLCBhY3Rpb25OYW1lLCBwYXJhbXMpO1xuICAgIH1cbn0iLCJpbXBvcnQge2NoZWNrTWV0aG9kfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbEFjdGlvbkNvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcmlkLCBhY3Rpb25OYW1lLCBwYXJhbXMpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NyZWF0ZUNvbnRyb2xsZXJDb21tYW5kLmludm9rZShjb250cm9sbGVyaWQsIGFjdGlvbk5hbWUsIHBhcmFtcyknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVyaWQsICdjb250cm9sbGVyaWQnKTtcbiAgICAgICAgY2hlY2tQYXJhbShhY3Rpb25OYW1lLCAnYWN0aW9uTmFtZScpO1xuXG4gICAgICAgIHRoaXMuaWQgPSAnQ2FsbEFjdGlvbic7XG4gICAgICAgIHRoaXMuYyA9IGNvbnRyb2xsZXJpZDtcbiAgICAgICAgdGhpcy5uID0gYWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5wID0gcGFyYW1zO1xuICAgIH1cblxufSIsImltcG9ydCB7Y2hlY2tNZXRob2R9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7Y2hlY2tQYXJhbX0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVDb250cm9sbGVyQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyTmFtZSwgcGFyZW50Q29udHJvbGxlcklkKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDcmVhdGVDb250cm9sbGVyQ29tbWFuZC5pbnZva2UoY29udHJvbGxlck5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVyTmFtZSwgJ2NvbnRyb2xsZXJOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICdDcmVhdGVDb250cm9sbGVyJztcbiAgICAgICAgdGhpcy5uID0gY29udHJvbGxlck5hbWU7XG4gICAgICAgIHRoaXMucCA9IHBhcmVudENvbnRyb2xsZXJJZDtcbiAgICB9XG5cbn0iLCJpbXBvcnQge2NoZWNrTWV0aG9kfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJJZCkge1xuICAgICAgICBjaGVja01ldGhvZCgnRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKGNvbnRyb2xsZXJJZCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVySWQsICdjb250cm9sbGVySWQnKTtcblxuICAgICAgICB0aGlzLmlkID0gJ0Rlc3Ryb3lDb250cm9sbGVyJztcbiAgICAgICAgdGhpcy5jID0gY29udHJvbGxlcklkO1xuICAgIH1cblxufSIsIi8qIENvcHlyaWdodCAyMDE1IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKmpzbGludCBicm93c2VyaWZ5OiB0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBPcGVuRG9scGhpbiBmcm9tICcuLi9vcGVuZG9scGhpbi9idWlsZC9PcGVuRG9scGhpbi5qcyc7XG5cbmltcG9ydCBQcm9taXNlIGZyb20gJy4uL2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL3Byb21pc2UnO1xuaW1wb3J0IENsaWVudE1vZGVsU3RvcmUgZnJvbSAnLi4vb3BlbmRvbHBoaW4vYnVpbGQvQ2xpZW50TW9kZWxTdG9yZSc7XG5pbXBvcnQge2V4aXN0c30gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQge2NoZWNrTWV0aG9kfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y2hlY2tQYXJhbX0gZnJvbSAnLi91dGlscyc7XG5cbmNvbnN0IERPTFBISU5fQkVBTiA9ICdAQEAgRE9MUEhJTl9CRUFOIEBAQCc7XG5jb25zdCBBQ1RJT05fQ0FMTF9CRUFOID0gJ0BAQCBDT05UUk9MTEVSX0FDVElPTl9DQUxMX0JFQU4gQEBAJztcbmNvbnN0IEhJR0hMQU5ERVJfQkVBTiA9ICdAQEAgSElHSExBTkRFUl9CRUFOIEBAQCc7XG5jb25zdCBET0xQSElOX0xJU1RfU1BMSUNFID0gJ0BEUDpMU0AnO1xuY29uc3QgU09VUkNFX1NZU1RFTSA9ICdAQEAgU09VUkNFX1NZU1RFTSBAQEAnO1xuY29uc3QgU09VUkNFX1NZU1RFTV9DTElFTlQgPSAnY2xpZW50JztcbmNvbnN0IFNPVVJDRV9TWVNURU1fU0VSVkVSID0gJ3NlcnZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbm5lY3RvcntcblxuICAgIGNvbnN0cnVjdG9yKHVybCwgZG9scGhpbiwgY2xhc3NSZXBvc2l0b3J5LCBjb25maWcpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0Nvbm5lY3Rvcih1cmwsIGRvbHBoaW4sIGNsYXNzUmVwb3NpdG9yeSwgY29uZmlnKScpO1xuICAgICAgICBjaGVja1BhcmFtKHVybCwgJ3VybCcpO1xuICAgICAgICBjaGVja1BhcmFtKGRvbHBoaW4sICdkb2xwaGluJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY2xhc3NSZXBvc2l0b3J5LCAnY2xhc3NSZXBvc2l0b3J5Jyk7XG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRvbHBoaW4gPSBkb2xwaGluO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkgPSBjbGFzc1JlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMuaGlnaGxhbmRlclBNUmVzb2x2ZXIgPSBmdW5jdGlvbigpIHt9O1xuICAgICAgICB0aGlzLmhpZ2hsYW5kZXJQTVByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7XG4gICAgICAgICAgICBzZWxmLmhpZ2hsYW5kZXJQTVJlc29sdmVyID0gcmVzb2x2ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9scGhpbi5nZXRDbGllbnRNb2RlbFN0b3JlKCkub25Nb2RlbFN0b3JlQ2hhbmdlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1vZGVsID0gZXZlbnQuY2xpZW50UHJlc2VudGF0aW9uTW9kZWw7XG4gICAgICAgICAgICBsZXQgc291cmNlU3lzdGVtID0gbW9kZWwuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKFNPVVJDRV9TWVNURU0pO1xuICAgICAgICAgICAgaWYgKGV4aXN0cyhzb3VyY2VTeXN0ZW0pICYmIHNvdXJjZVN5c3RlbS52YWx1ZSA9PT0gU09VUkNFX1NZU1RFTV9TRVJWRVIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZXZlbnRUeXBlID09PSBDbGllbnRNb2RlbFN0b3JlLlR5cGUuQURERUQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vbk1vZGVsQWRkZWQobW9kZWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZXZlbnRUeXBlID09PSBDbGllbnRNb2RlbFN0b3JlLlR5cGUuUkVNT1ZFRCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm9uTW9kZWxSZW1vdmVkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0KCkge1xuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhhdC5kb2xwaGluLnN0YXJ0UHVzaExpc3RlbmluZyhPcGVuRG9scGhpbi5jcmVhdGVTdGFydExvbmdQb2xsQ29tbWFuZCgpLCBPcGVuRG9scGhpbi5jcmVhdGVJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQoKSk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIG9uTW9kZWxBZGRlZChtb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ29ubmVjdG9yLm9uTW9kZWxBZGRlZChtb2RlbCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgdmFyIHR5cGUgPSBtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBQ1RJT05fQ0FMTF9CRUFOOlxuICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBET0xQSElOX0JFQU46XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkucmVnaXN0ZXJDbGFzcyhtb2RlbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEhJR0hMQU5ERVJfQkVBTjpcbiAgICAgICAgICAgICAgICB0aGlzLmhpZ2hsYW5kZXJQTVJlc29sdmVyKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRE9MUEhJTl9MSVNUX1NQTElDRTpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5zcGxpY2VMaXN0RW50cnkobW9kZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuZG9scGhpbi5kZWxldGVQcmVzZW50YXRpb25Nb2RlbChtb2RlbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5LmxvYWQobW9kZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Nb2RlbFJlbW92ZWQobW9kZWwpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0Nvbm5lY3Rvci5vbk1vZGVsUmVtb3ZlZChtb2RlbCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG4gICAgICAgIGxldCB0eXBlID0gbW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgRE9MUEhJTl9CRUFOOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5LnVucmVnaXN0ZXJDbGFzcyhtb2RlbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERPTFBISU5fTElTVF9TUExJQ0U6XG4gICAgICAgICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS51bmxvYWQobW9kZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW52b2tlKGNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0Nvbm5lY3Rvci5pbnZva2UoY29tbWFuZCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb21tYW5kLCAnY29tbWFuZCcpO1xuXG4gICAgICAgIHZhciBkb2xwaGluID0gdGhpcy5kb2xwaGluO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGRvbHBoaW4uc2VuZChjb21tYW5kLCB7XG4gICAgICAgICAgICAgICAgb25GaW5pc2hlZDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldEhpZ2hsYW5kZXJQTSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGlnaGxhbmRlclBNUHJvbWlzZTtcbiAgICB9XG59XG5cbmV4cG9ydHMuU09VUkNFX1NZU1RFTSA9IFNPVVJDRV9TWVNURU07XG5leHBvcnRzLlNPVVJDRV9TWVNURU1fQ0xJRU5UID0gU09VUkNFX1NZU1RFTV9DTElFTlQ7XG5leHBvcnRzLlNPVVJDRV9TWVNURU1fU0VSVkVSID0gU09VUkNFX1NZU1RFTV9TRVJWRVI7XG5leHBvcnRzLkFDVElPTl9DQUxMX0JFQU4gPSBBQ1RJT05fQ0FMTF9CRUFOO1xuIiwiZXhwb3J0IGNvbnN0IERPTFBISU5fQkVBTiA9IDA7XG5leHBvcnQgY29uc3QgQllURSA9IDE7XG5leHBvcnQgY29uc3QgU0hPUlQgPSAyO1xuZXhwb3J0IGNvbnN0IElOVCA9IDM7XG5leHBvcnQgY29uc3QgTE9ORyA9IDQ7XG5leHBvcnQgY29uc3QgRkxPQVQgPSA1O1xuZXhwb3J0IGNvbnN0IERPVUJMRSA9IDY7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IDc7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gODtcbmV4cG9ydCBjb25zdCBEQVRFID0gOTtcbmV4cG9ydCBjb25zdCBFTlVNID0gMTA7XG5leHBvcnQgY29uc3QgQ0FMRU5EQVIgPSAxMTtcbmV4cG9ydCBjb25zdCBMT0NBTF9EQVRFX0ZJRUxEX1RZUEUgPSA1NTtcbmV4cG9ydCBjb25zdCBMT0NBTF9EQVRFX1RJTUVfRklFTERfVFlQRSA9IDUyO1xuZXhwb3J0IGNvbnN0IFpPTkVEX0RBVEVfVElNRV9GSUVMRF9UWVBFID0gNTQ7IiwiLyogQ29weXJpZ2h0IDIwMTUgQ2Fub28gRW5naW5lZXJpbmcgQUcuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qanNsaW50IGJyb3dzZXJpZnk6IHRydWUgKi9cbi8qIGdsb2JhbCBjb25zb2xlICovXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFByb21pc2UgZnJvbSAnLi4vYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vcHJvbWlzZSc7XG5pbXBvcnQgU2V0IGZyb20nLi4vYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vc2V0JztcbmltcG9ydCB7ZXhpc3RzfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y2hlY2tNZXRob2R9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja1BhcmFtfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IENvbnRyb2xsZXJQcm94eSBmcm9tICcuL2NvbnRyb2xsZXJwcm94eS5qcyc7XG5cbmltcG9ydCB7Q29tbWFuZEZhY3Rvcnl9IGZyb20gJy4vY29tbWFuZEZhY3RvcnkuanMnO1xuXG5cbmltcG9ydCB7IFNPVVJDRV9TWVNURU0gfSBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XG5pbXBvcnQgeyBTT1VSQ0VfU1lTVEVNX0NMSUVOVCB9IGZyb20gJy4vY29ubmVjdG9yLmpzJztcbmltcG9ydCB7IEFDVElPTl9DQUxMX0JFQU4gfSBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XG5cbmNvbnN0IENPTlRST0xMRVJfSUQgPSAnY29udHJvbGxlcklkJztcbmNvbnN0IE1PREVMID0gJ21vZGVsJztcbmNvbnN0IEVSUk9SX0NPREUgPSAnZXJyb3JDb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlck1hbmFnZXJ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbm5lY3Rvcil7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyTWFuYWdlcihkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbm5lY3RvciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShkb2xwaGluLCAnZG9scGhpbicpO1xuICAgICAgICBjaGVja1BhcmFtKGNsYXNzUmVwb3NpdG9yeSwgJ2NsYXNzUmVwb3NpdG9yeScpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbm5lY3RvciwgJ2Nvbm5lY3RvcicpO1xuXG4gICAgICAgIHRoaXMuZG9scGhpbiA9IGRvbHBoaW47XG4gICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5ID0gY2xhc3NSZXBvc2l0b3J5O1xuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IGNvbm5lY3RvcjtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sbGVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZUNvbnRyb2xsZXIobmFtZSwgbnVsbClcbiAgICB9XG5cbiAgICBfY3JlYXRlQ29udHJvbGxlcihuYW1lLCBwYXJlbnRDb250cm9sbGVySWQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NvbnRyb2xsZXJNYW5hZ2VyLmNyZWF0ZUNvbnRyb2xsZXIobmFtZSknKTtcbiAgICAgICAgY2hlY2tQYXJhbShuYW1lLCAnbmFtZScpO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGNvbnRyb2xsZXJJZCwgbW9kZWxJZCwgbW9kZWwsIGNvbnRyb2xsZXI7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0b3IuZ2V0SGlnaGxhbmRlclBNKCkudGhlbigoaGlnaGxhbmRlclBNKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0b3IuaW52b2tlKENvbW1hbmRGYWN0b3J5LmNyZWF0ZUNyZWF0ZUNvbnRyb2xsZXJDb21tYW5kKG5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVySWQgPSBoaWdobGFuZGVyUE0uZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKENPTlRST0xMRVJfSUQpLmdldFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsSWQgPSBoaWdobGFuZGVyUE0uZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKE1PREVMKS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbCA9IHNlbGYuY2xhc3NSZXBvc2l0b3J5Lm1hcERvbHBoaW5Ub0JlYW4obW9kZWxJZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlclByb3h5KGNvbnRyb2xsZXJJZCwgbW9kZWwsIHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRyb2xsZXJzLmFkZChjb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbnZva2VBY3Rpb24oY29udHJvbGxlcklkLCBhY3Rpb25OYW1lLCBwYXJhbXMpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NvbnRyb2xsZXJNYW5hZ2VyLmludm9rZUFjdGlvbihjb250cm9sbGVySWQsIGFjdGlvbk5hbWUsIHBhcmFtcyknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVySWQsICdjb250cm9sbGVySWQnKTtcbiAgICAgICAgY2hlY2tQYXJhbShhY3Rpb25OYW1lLCAnYWN0aW9uTmFtZScpO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+e1xuXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IFtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbHBoaW4uYXR0cmlidXRlKFNPVVJDRV9TWVNURU0sIG51bGwsIFNPVVJDRV9TWVNURU1fQ0xJRU5UKSxcbiAgICAgICAgICAgICAgICBzZWxmLmRvbHBoaW4uYXR0cmlidXRlKEVSUk9SX0NPREUpXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBsZXQgcG0gPSBzZWxmLmRvbHBoaW4ucHJlc2VudGF0aW9uTW9kZWwuYXBwbHkoc2VsZi5kb2xwaGluLCBbbnVsbCwgQUNUSU9OX0NBTExfQkVBTl0uY29uY2F0KGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICAgICAgbGV0IGFjdGlvblBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgaWYoZXhpc3RzKHBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHNlbGYuY2xhc3NSZXBvc2l0b3J5Lm1hcFBhcmFtVG9Eb2xwaGluKHBhcmFtc1twYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uUGFyYW1zLnB1c2goe246IHBhcmFtLCB2OiB2YWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNvbm5lY3Rvci5pbnZva2UoQ29tbWFuZEZhY3RvcnkuY3JlYXRlQ2FsbEFjdGlvbkNvbW1hbmQoY29udHJvbGxlcklkLCBhY3Rpb25OYW1lLCBhY3Rpb25QYXJhbXMpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXNFcnJvciA9IHBtLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShFUlJPUl9DT0RFKS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJDb250cm9sbGVyQWN0aW9uIGNhdXNlZCBhbiBlcnJvclwiKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmRvbHBoaW4uZGVsZXRlUHJlc2VudGF0aW9uTW9kZWwocG0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3lDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NvbnRyb2xsZXJNYW5hZ2VyLmRlc3Ryb3lDb250cm9sbGVyKGNvbnRyb2xsZXIpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlciwgJ2NvbnRyb2xsZXInKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0b3IuZ2V0SGlnaGxhbmRlclBNKCkudGhlbigoaGlnaGxhbmRlclBNKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb250cm9sbGVycy5kZWxldGUoY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgaGlnaGxhbmRlclBNLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShDT05UUk9MTEVSX0lEKS5zZXRWYWx1ZShjb250cm9sbGVyLmNvbnRyb2xsZXJJZCk7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0b3IuaW52b2tlKENvbW1hbmRGYWN0b3J5LmNyZWF0ZURlc3Ryb3lDb250cm9sbGVyQ29tbWFuZChjb250cm9sbGVyLmdldElkKCkpKS50aGVuKHJlc29sdmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjb250cm9sbGVyc0NvcHkgPSB0aGlzLmNvbnRyb2xsZXJzO1xuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29udHJvbGxlcnNDb3B5LmZvckVhY2goKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChjb250cm9sbGVyLmRlc3Ryb3koKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbn1cbiIsIi8qIENvcHlyaWdodCAyMDE1IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKmpzbGludCBicm93c2VyaWZ5OiB0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZXQgZnJvbSAnLi4vYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vc2V0JztcbmltcG9ydCB7Y2hlY2tNZXRob2R9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja1BhcmFtfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlclByb3h5e1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcklkLCBtb2RlbCwgbWFuYWdlcil7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyUHJveHkoY29udHJvbGxlcklkLCBtb2RlbCwgbWFuYWdlciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVySWQsICdjb250cm9sbGVySWQnKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obWFuYWdlciwgJ21hbmFnZXInKTtcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJJZCA9IGNvbnRyb2xsZXJJZDtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRGVzdHJveWVkSGFuZGxlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuXG4gICAgZ2V0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICAgIH1cblxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVySWQ7XG4gICAgfVxuXG4gICAgaW52b2tlKG5hbWUsIHBhcmFtcyl7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyUHJveHkuaW52b2tlKG5hbWUsIHBhcmFtcyknKTtcbiAgICAgICAgY2hlY2tQYXJhbShuYW1lLCAnbmFtZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29udHJvbGxlciB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLmludm9rZUFjdGlvbih0aGlzLmNvbnRyb2xsZXJJZCwgbmFtZSwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sbGVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5fY3JlYXRlQ29udHJvbGxlcihuYW1lLCB0aGlzLmdldElkKCkpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb250cm9sbGVyIHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3llZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcih0aGlzKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25EZXN0cm95ZWQtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5kZXN0cm95Q29udHJvbGxlcih0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3llZChoYW5kbGVyKXtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NvbnRyb2xsZXJQcm94eS5vbkRlc3Ryb3llZChoYW5kbGVyKScpO1xuICAgICAgICBjaGVja1BhcmFtKGhhbmRsZXIsICdoYW5kbGVyJyk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm9uRGVzdHJveWVkSGFuZGxlcnMuYWRkKGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uRGVzdHJveWVkSGFuZGxlcnMuZGVsZXRlKGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEb2xwaGluUmVtb3RpbmdFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSA9ICdSZW1vdGluZyBFcnJvcicsIGRldGFpbCkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZGV0YWlsID0gZGV0YWlsIHx8IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9scGhpblNlc3Npb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSA9ICdTZXNzaW9uIEVycm9yJykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIdHRwUmVzcG9uc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSA9ICdIdHRwIFJlc3BvbnNlIEVycm9yJykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIdHRwTmV0d29ya0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSAnSHR0cCBOZXR3b3JrIEVycm9yJykge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG59IiwiLyogQ29weXJpZ2h0IDIwMTYgQ2Fub28gRW5naW5lZXJpbmcgQUcuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBFbWl0dGVyIGZyb20gJ2VtaXR0ZXItY29tcG9uZW50JztcblxuXG5pbXBvcnQgeyBleGlzdHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IERvbHBoaW5SZW1vdGluZ0Vycm9yLCBIdHRwTmV0d29ya0Vycm9yLCBEb2xwaGluU2Vzc2lvbkVycm9yLCBIdHRwUmVzcG9uc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzLmpzJztcbmltcG9ydCBDb2RlYyBmcm9tICcuL2NvZGVjLmpzJztcbmltcG9ydCBSZW1vdGluZ0Vycm9ySGFuZGxlciBmcm9tICcuL3JlbW90aW5nRXJyb3JIYW5kbGVyJztcblxuXG5jb25zdCBGSU5JU0hFRCA9IDQ7XG5jb25zdCBTVUNDRVNTID0gMjAwO1xuY29uc3QgUkVRVUVTVF9USU1FT1VUID0gNDA4O1xuXG5jb25zdCBET0xQSElOX1BMQVRGT1JNX1BSRUZJWCA9ICdkb2xwaGluX3BsYXRmb3JtX2ludGVybl8nO1xuY29uc3QgQ0xJRU5UX0lEX0hUVFBfSEVBREVSX05BTUUgPSBET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdkb2xwaGluQ2xpZW50SWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUh0dHBUcmFuc21pdHRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGNvbmZpZykge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuaGVhZGVyc0luZm8gPSBleGlzdHMoY29uZmlnKSA/IGNvbmZpZy5oZWFkZXJzSW5mbyA6IG51bGw7XG4gICAgICAgIGxldCBjb25uZWN0aW9uQ29uZmlnID0gZXhpc3RzKGNvbmZpZykgPyBjb25maWcuY29ubmVjdGlvbiA6IG51bGw7XG4gICAgICAgIHRoaXMubWF4UmV0cnkgPSBleGlzdHMoY29ubmVjdGlvbkNvbmZpZykgJiYgZXhpc3RzKGNvbm5lY3Rpb25Db25maWcubWF4UmV0cnkpP2Nvbm5lY3Rpb25Db25maWcubWF4UmV0cnk6IDM7XG4gICAgICAgIHRoaXMudGltZW91dCA9IGV4aXN0cyhjb25uZWN0aW9uQ29uZmlnKSAmJiBleGlzdHMoY29ubmVjdGlvbkNvbmZpZy50aW1lb3V0KT9jb25uZWN0aW9uQ29uZmlnLnRpbWVvdXQ6IDUwMDA7XG4gICAgICAgIHRoaXMuZmFpbGVkX2F0dGVtcHQgPSAwO1xuICAgIH1cblxuICAgIF9oYW5kbGVFcnJvcihyZWplY3QsIGVycm9yKSB7XG4gICAgICAgIGxldCBjb25uZWN0aW9uQ29uZmlnID0gZXhpc3RzKHRoaXMuY29uZmlnKSA/IHRoaXMuY29uZmlnLmNvbm5lY3Rpb24gOiBudWxsO1xuICAgICAgICBsZXQgZXJyb3JIYW5kbGVycyA9IGV4aXN0cyhjb25uZWN0aW9uQ29uZmlnKSAmJiBleGlzdHMoY29ubmVjdGlvbkNvbmZpZy5lcnJvckhhbmRsZXJzKT9jb25uZWN0aW9uQ29uZmlnLmVycm9ySGFuZGxlcnM6IFtuZXcgUmVtb3RpbmdFcnJvckhhbmRsZXIoKV07XG4gICAgICAgIGVycm9ySGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICB9XG5cbiAgICBfc2VuZChjb21tYW5kcykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgaHR0cC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICAgICAgaHR0cC5vbmVycm9yID0gKGVycm9yQ29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKHJlamVjdCwgbmV3IEh0dHBOZXR3b3JrRXJyb3IoJ1BsYXRmb3JtSHR0cFRyYW5zbWl0dGVyOiBOZXR3b3JrIGVycm9yJywgZXJyb3JDb250ZW50KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChodHRwLnJlYWR5U3RhdGUgPT09IEZJTklTSEVEKXtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChodHRwLnN0YXR1cykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNVQ0NFU1M6XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsZWRfYXR0ZW1wdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudENsaWVudElkID0gaHR0cC5nZXRSZXNwb25zZUhlYWRlcihDTElFTlRfSURfSFRUUF9IRUFERVJfTkFNRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhjdXJyZW50Q2xpZW50SWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHModGhpcy5jbGllbnRJZCkgJiYgdGhpcy5jbGllbnRJZCAhPT0gY3VycmVudENsaWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihyZWplY3QsIG5ldyBEb2xwaGluU2Vzc2lvbkVycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogQ2xpZW50SWQgb2YgdGhlIHJlc3BvbnNlIGRpZCBub3QgbWF0Y2gnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRJZCA9IGN1cnJlbnRDbGllbnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihyZWplY3QsIG5ldyBEb2xwaGluU2Vzc2lvbkVycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogU2VydmVyIGRpZCBub3Qgc2VuZCBhIGNsaWVudElkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRVFVRVNUX1RJTUVPVVQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IocmVqZWN0LCBuZXcgRG9scGhpblNlc3Npb25FcnJvcignUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IFNlc3Npb24gVGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZhaWxlZF9hdHRlbXB0IDw9IHRoaXMubWF4UmV0cnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxlZF9hdHRlbXB0ID0gdGhpcy5mYWlsZWRfYXR0ZW1wdCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKHJlamVjdCwgbmV3IEh0dHBSZXNwb25zZUVycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogSFRUUCBTdGF0dXMgIT0gMjAwICgnICsgaHR0cC5zdGF0dXMgKyAnKScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGh0dHAub3BlbignUE9TVCcsIHRoaXMudXJsKTtcbiAgICAgICAgICAgIGlmIChleGlzdHModGhpcy5jbGllbnRJZCkpIHtcbiAgICAgICAgICAgICAgICBodHRwLnNldFJlcXVlc3RIZWFkZXIoQ0xJRU5UX0lEX0hUVFBfSEVBREVSX05BTUUsIHRoaXMuY2xpZW50SWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXhpc3RzKHRoaXMuaGVhZGVyc0luZm8pKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmhlYWRlcnNJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlcnNJbmZvLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5oZWFkZXJzSW5mb1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mYWlsZWRfYXR0ZW1wdCA+IHRoaXMubWF4UmV0cnkpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBodHRwLnNlbmQoQ29kZWMuZW5jb2RlKGNvbW1hbmRzKSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGh0dHAuc2VuZChDb2RlYy5lbmNvZGUoY29tbWFuZHMpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0cmFuc21pdChjb21tYW5kcywgb25Eb25lKSB7XG4gICAgICAgIHRoaXMuX3NlbmQoY29tbWFuZHMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZVRleHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQ29tbWFuZHMgPSBDb2RlYy5kZWNvZGUocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRG9uZShyZXNwb25zZUNvbW1hbmRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IERvbHBoaW5SZW1vdGluZ0Vycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogUGFyc2UgZXJyb3I6IChJbmNvcnJlY3QgcmVzcG9uc2UgPSAnICsgcmVzcG9uc2VUZXh0ICsgJyknKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBEb2xwaGluUmVtb3RpbmdFcnJvcignUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IEVtcHR5IHJlc3BvbnNlJykpO1xuICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25hbChjb21tYW5kKSB7XG4gICAgICAgIHRoaXMuX3NlbmQoW2NvbW1hbmRdKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcikpO1xuICAgIH1cbn1cblxuRW1pdHRlcihQbGF0Zm9ybUh0dHBUcmFuc21pdHRlci5wcm90b3R5cGUpO1xuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdGluZ0Vycm9ySGFuZGxlciB7XG5cbiAgICBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG5cbn0iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjaGVja01ldGhvZE5hbWU7XG5cbnZhciBleGlzdHMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgb2JqZWN0ICE9PSBudWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMuZXhpc3RzID0gZXhpc3RzO1xuXG5tb2R1bGUuZXhwb3J0cy5jaGVja01ldGhvZCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjaGVja01ldGhvZE5hbWUgPSBuYW1lO1xufTtcblxubW9kdWxlLmV4cG9ydHMuY2hlY2tQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtLCBwYXJhbWV0ZXJOYW1lKSB7XG4gICAgaWYgKCFleGlzdHMocGFyYW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHBhcmFtZXRlciAnICsgcGFyYW1ldGVyTmFtZSArICcgaXMgbWFuZGF0b3J5IGluICcgKyBjaGVja01ldGhvZE5hbWUpO1xuICAgIH1cbn07XG4iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbid1c2Ugc3RyaWN0JztcbnZhciBkb2xwaGluQ2xpZW50ID0gcmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvZG9scGhpbi1wbGF0Zm9ybS5qcycpO1xuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScsIFtdKTtcblxuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScpLnByb3ZpZGVyKCckZG9scGhpbkNvbmZpZycsIFtmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgJGNmZyA9IHt9O1xuICAgIHRoaXMuY29uZmlndXJlID0gZnVuY3Rpb24gKGNmZykge1xuICAgICAgICAkY2ZnID0gY2ZnO1xuICAgIH07XG5cbiAgICB0aGlzLiRnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkY2ZnO1xuICAgIH07XG5cbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScpLmZhY3RvcnkoJ2NsaWVudENvbnRleHRGYWN0b3J5JywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgZG9scGhpbkNsaWVudC5DbGllbnRDb250ZXh0RmFjdG9yeSgpO1xufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nKS5mYWN0b3J5KCd2YW5pbGxhQ2xpZW50Q29udGV4dCcsIFsnY2xpZW50Q29udGV4dEZhY3RvcnknLCAnJGRvbHBoaW5Db25maWcnLCBmdW5jdGlvbiAoY2xpZW50Q29udGV4dEZhY3RvcnksICRkb2xwaGluQ29uZmlnKSB7XG4gICAgcmV0dXJuIGNsaWVudENvbnRleHRGYWN0b3J5LmNyZWF0ZSgkZG9scGhpbkNvbmZpZy5ET0xQSElOX1VSTCwgJGRvbHBoaW5Db25maWcpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnRG9scGhpblBsYXRmb3JtJykuZmFjdG9yeSgnZG9scGhpbkJpbmRpbmcnLCBbJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCAndmFuaWxsYUNsaWVudENvbnRleHQnLCAnJGxvZycsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCwgdmFuaWxsYUNsaWVudENvbnRleHQsICRsb2cpIHtcblxuICAgICRyb290U2NvcGUud2FpdGluZ0Zvckdsb2JhbERvbHBoaW5BcHBseSA9IGZhbHNlO1xuXG4gICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEkcm9vdFNjb3BlLndhaXRpbmdGb3JHbG9iYWxEb2xwaGluQXBwbHkpIHtcbiAgICAgICAgICAgICRyb290U2NvcGUud2FpdGluZ0Zvckdsb2JhbERvbHBoaW5BcHBseSA9IHRydWU7XG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS53YWl0aW5nRm9yR2xvYmFsRG9scGhpbkFwcGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnQW5ndWxhciBhcHBseSBpcyBjYWxsZWQgYnkgRG9scGhpbiBQbGF0Zm9ybScpO1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkb2xwaGluQmluZGluZyA9IHtcblxuICAgICAgICBpbmplY3RBcnJheTogZnVuY3Rpb24gKGJhc2VBcnJheSwgc3RhcnRJbmRleCwgaW5zZXJ0QXJyYXkpIHtcbiAgICAgICAgICAgIGJhc2VBcnJheS5zcGxpY2UuYXBwbHkoYmFzZUFycmF5LCBbc3RhcnRJbmRleCwgMF0uY29uY2F0KGluc2VydEFycmF5KSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4aXN0czogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgIT09ICd1bmRlZmluZWQnICYmIG9iamVjdCAhPT0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZGVlcEVxdWFsOiBmdW5jdGlvbiAoYXJyYXkxLCBhcnJheTIpIHtcbiAgICAgICAgICAgIGlmIChhcnJheTEgPT09IGFycmF5MiB8fCAoIXRoaXMuZXhpc3RzKGFycmF5MSkgJiYgIXRoaXMuZXhpc3RzKGFycmF5MikpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5leGlzdHMoYXJyYXkxKSAhPT0gdGhpcy5leGlzdHMoYXJyYXkyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuID0gYXJyYXkxLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChhcnJheTIubGVuZ3RoICE9PSBuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoYmVhbk1hbmFnZXIpIHtcbiAgICAgICAgICAgIGJlYW5NYW5hZ2VyLm9uQWRkZWQoZG9scGhpbkJpbmRpbmcub25CZWFuQWRkZWRIYW5kbGVyKTtcbiAgICAgICAgICAgIGJlYW5NYW5hZ2VyLm9uUmVtb3ZlZChkb2xwaGluQmluZGluZy5vbkJlYW5SZW1vdmVkSGFuZGxlcik7XG4gICAgICAgICAgICBiZWFuTWFuYWdlci5vbkJlYW5VcGRhdGUoZG9scGhpbkJpbmRpbmcub25CZWFuVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICBiZWFuTWFuYWdlci5vbkFycmF5VXBkYXRlKGRvbHBoaW5CaW5kaW5nLm9uQXJyYXlVcGRhdGVIYW5kbGVyKTtcblxuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnRG9scGhpbiBQbGF0Zm9ybSBiaW5kaW5nIGxpc3RlbmVycyBmb3IgQW5ndWxhciByZWdpc3RlcmVkJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoQXR0cmlidXRlOiBmdW5jdGlvbiAoYmVhbiwgYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdBZGRlZCBBbmd1bGFyIGxpc3RlbmVyIGZvciBwcm9wZXJ0eSAnICsgYXR0cmlidXRlICsgJyBvZiBiZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSk7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiR3YXRjaChcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiZWFuW2F0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ1ZhbHVlICcgKyBhdHRyaWJ1dGUgKyAnIG9mIGJlYW4gJyArIEpTT04uc3RyaW5naWZ5KGJlYW4pICsgJyBjaGFuZ2VkIGZyb20gJyArIG9sZFZhbHVlICsgJyB0byAnICsgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB2YW5pbGxhQ2xpZW50Q29udGV4dC5iZWFuTWFuYWdlci5jbGFzc1JlcG9zaXRvcnkubm90aWZ5QmVhbkNoYW5nZShiZWFuLCBhdHRyaWJ1dGUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlYW5BZGRlZEhhbmRsZXI6IGZ1bmN0aW9uIChiZWFuKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdCZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSArICcgYWRkZWQnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBiZWFuKSB7XG4gICAgICAgICAgICAgICAgZG9scGhpbkJpbmRpbmcud2F0Y2hBdHRyaWJ1dGUoYmVhbiwgYXR0cik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRyb290U2NvcGUuYXBwbHlJbkFuZ3VsYXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWFuUmVtb3ZlZEhhbmRsZXI6IGZ1bmN0aW9uIChiZWFuKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdCZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSArICcgcmVtb3ZlZCcpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlYW5VcGRhdGVIYW5kbGVyOiBmdW5jdGlvbiAoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBuZXdQcm9wZXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBhdHRyIGluIGJlYW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ciA9PT0gcHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3UHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdWYWx1ZSAnICsgcHJvcGVydHlOYW1lICsgJyB3YXMgYWRkZWQgdG8gYmVhbiAnICsgSlNPTi5zdHJpbmdpZnkoYmVhbikpO1xuICAgICAgICAgICAgICAgIGRvbHBoaW5CaW5kaW5nLndhdGNoQXR0cmlidXRlKGJlYW4sIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdSZWNlaXZlZCBiZWFuIHVwZGF0ZSBmb3IgcHJvcGVydHkgJyArIHByb3BlcnR5TmFtZSArICcgd2l0aG91dCBhbnkgY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdCZWFuIHVwZGF0ZSBmb3IgcHJvcGVydHkgJyArIHByb3BlcnR5TmFtZSArICcgd2l0aCBuZXcgdmFsdWUgXCInICsgbmV3VmFsdWUgKyAnXCInKTtcblxuICAgICAgICAgICAgYmVhbltwcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLmFwcGx5SW5Bbmd1bGFyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQXJyYXlVcGRhdGVIYW5kbGVyOiBmdW5jdGlvbiAoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIG5ld0VsZW1lbnRzKSB7XG4gICAgICAgICAgICB2YXIgYXJyYXkgPSBiZWFuW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICB2YXIgb2xkRWxlbWVudHMgPSBhcnJheS5zbGljZShpbmRleCwgaW5kZXggKyBjb3VudCk7XG4gICAgICAgICAgICBpZiAoZG9scGhpbkJpbmRpbmcuZGVlcEVxdWFsKG5ld0VsZW1lbnRzLCBvbGRFbGVtZW50cykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRsb2cuZGVidWcoJ0FycmF5IHVwZGF0ZSBmb3IgcHJvcGVydHkgJyArIHByb3BlcnR5TmFtZSArICcgc3RhcnRpbmcgYXQgaW5kZXggJyArIGluZGV4ICsgJyB3aXRoICcgKyBKU09OLnN0cmluZ2lmeShuZXdFbGVtZW50cykpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld0VsZW1lbnRzID09PSAndW5kZWZpbmVkJyB8fCAobmV3RWxlbWVudHMgJiYgbmV3RWxlbWVudHMubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgY291bnQpO1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUuYXBwbHlJbkFuZ3VsYXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9scGhpbkJpbmRpbmcuaW5qZWN0QXJyYXkoYXJyYXksIGluZGV4LCBuZXdFbGVtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGJlYW4gaW4gbmV3RWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBiZWFuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2xwaGluQmluZGluZy53YXRjaEF0dHJpYnV0ZShiZWFuLCBhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRyb290U2NvcGUuYXBwbHlJbkFuZ3VsYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkbG9nLmRlYnVnKCdEb2xwaGluIFBsYXRmb3JtIGJpbmRpbmcgY3JlYXRlZCcpO1xuXG4gICAgcmV0dXJuIGRvbHBoaW5CaW5kaW5nO1xuXG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nKS5mYWN0b3J5KCdjbGllbnRDb250ZXh0JywgWyd2YW5pbGxhQ2xpZW50Q29udGV4dCcsICdkb2xwaGluQmluZGluZycsICckd2luZG93JywgJyRsb2cnLCBmdW5jdGlvbiAodmFuaWxsYUNsaWVudENvbnRleHQsIGRvbHBoaW5CaW5kaW5nLCAkd2luZG93LCAkbG9nKSB7XG4gICAgdmFyIGNsaWVudENvbnRleHQgPSB7XG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXI6IGZ1bmN0aW9uIChzY29wZSwgY29udHJvbGxlck5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YW5pbGxhQ2xpZW50Q29udGV4dC5jcmVhdGVDb250cm9sbGVyKGNvbnRyb2xsZXJOYW1lKS50aGVuKGZ1bmN0aW9uIChjb250cm9sbGVyUHJveHkpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdDcmVhdGluZyBEb2xwaGluIFBsYXRmb3JtIGNvbnRyb2xsZXIgJyArIGNvbnRyb2xsZXJOYW1lKTtcbiAgICAgICAgICAgICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdEZXN0cm95aW5nIERvbHBoaW4gUGxhdGZvcm0gY29udHJvbGxlciAnICsgY29udHJvbGxlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyUHJveHkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNjb3BlLm1vZGVsID0gY29udHJvbGxlclByb3h5Lm1vZGVsO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyUHJveHk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzY29ubmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFuaWxsYUNsaWVudENvbnRleHQuZGlzY29ubmVjdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gY29udGV4dCBkaXNjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjb25uZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YW5pbGxhQ2xpZW50Q29udGV4dC5jb25uZWN0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9scGhpbkJpbmRpbmcuaW5pdCh2YW5pbGxhQ2xpZW50Q29udGV4dC5iZWFuTWFuYWdlcik7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnRG9scGhpbiBQbGF0Zm9ybSBjb250ZXh0IGNvbm5lY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29ubmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbmlsbGFDbGllbnRDb250ZXh0Lm9uQ29ubmVjdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gY29udGV4dCBjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRvbHBoaW5CaW5kaW5nLmluaXQodmFuaWxsYUNsaWVudENvbnRleHQuYmVhbk1hbmFnZXIpO1xuICAgICR3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBjbGllbnRDb250ZXh0LmRpc2Nvbm5lY3Q7XG5cbiAgICAkbG9nLmRlYnVnKCdEb2xwaGluIFBsYXRmb3JtIGNvbnRleHQgY3JlYXRlZCcpO1xuXG4gICAgcmV0dXJuIGNsaWVudENvbnRleHQ7XG59XSk7XG4iXX0=
