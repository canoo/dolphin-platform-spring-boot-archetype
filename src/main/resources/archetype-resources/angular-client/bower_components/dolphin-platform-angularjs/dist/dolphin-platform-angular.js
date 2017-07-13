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
                TAG = _dereq_('./_wks')('toStringTag')
            // ES3 wrong here

            ,
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
                : ARG ? cof(O)
                // ES3 arguments fallback
                : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
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

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Attribute = function Attribute() {
                _classCallCheck(this, Attribute);
            };

            Attribute.QUALIFIER_PROPERTY = "qualifier";
            Attribute.VALUE = "value";
            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = Attribute;
        }, {}], 82: [function (_dereq_, module, exports) {
            "use strict";

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

            var Command_1 = _dereq_('./Command');

            var ChangeAttributeMetadataCommand = function (_Command_1$default) {
                _inherits(ChangeAttributeMetadataCommand, _Command_1$default);

                function ChangeAttributeMetadataCommand(attributeId, metadataName, value) {
                    _classCallCheck(this, ChangeAttributeMetadataCommand);

                    var _this = _possibleConstructorReturn(this, (ChangeAttributeMetadataCommand.__proto__ || Object.getPrototypeOf(ChangeAttributeMetadataCommand)).call(this));

                    _this.attributeId = attributeId;
                    _this.metadataName = metadataName;
                    _this.value = value;
                    _this.id = 'ChangeAttributeMetadata';
                    _this.className = "org.opendolphin.core.comm.ChangeAttributeMetadataCommand";
                    return _this;
                }

                return ChangeAttributeMetadataCommand;
            }(Command_1.default);

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = ChangeAttributeMetadataCommand;
        }, { "./Command": 89 }], 83: [function (_dereq_, module, exports) {
            "use strict";

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

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var EventBus_1 = _dereq_('./EventBus');

            var ClientAttribute = function () {
                function ClientAttribute(propertyName, qualifier, value) {
                    _classCallCheck(this, ClientAttribute);

                    this.propertyName = propertyName;
                    this.id = "" + ClientAttribute.clientAttributeInstanceCount++ + "C";
                    this.valueChangeBus = new EventBus_1.default();
                    this.qualifierChangeBus = new EventBus_1.default();
                    this.setValue(value);
                    this.setQualifier(qualifier);
                }
                /** a copy constructor with new id and no presentation model */

                _createClass(ClientAttribute, [{
                    key: "copy",
                    value: function copy() {
                        var result = new ClientAttribute(this.propertyName, this.getQualifier(), this.getValue());
                        return result;
                    }
                }, {
                    key: "setPresentationModel",
                    value: function setPresentationModel(presentationModel) {
                        if (this.presentationModel) {
                            alert("You can not set a presentation model for an attribute that is already bound.");
                        }
                        this.presentationModel = presentationModel;
                    }
                }, {
                    key: "getPresentationModel",
                    value: function getPresentationModel() {
                        return this.presentationModel;
                    }
                }, {
                    key: "getValue",
                    value: function getValue() {
                        return this.value;
                    }
                }, {
                    key: "setValue",
                    value: function setValue(newValue) {
                        var verifiedValue = ClientAttribute.checkValue(newValue);
                        if (this.value == verifiedValue) return;
                        var oldValue = this.value;
                        this.value = verifiedValue;
                        this.valueChangeBus.trigger({ 'oldValue': oldValue, 'newValue': verifiedValue });
                    }
                }, {
                    key: "setQualifier",
                    value: function setQualifier(newQualifier) {
                        if (this.qualifier == newQualifier) return;
                        var oldQualifier = this.qualifier;
                        this.qualifier = newQualifier;
                        this.qualifierChangeBus.trigger({ 'oldValue': oldQualifier, 'newValue': newQualifier });
                    }
                }, {
                    key: "getQualifier",
                    value: function getQualifier() {
                        return this.qualifier;
                    }
                }, {
                    key: "onValueChange",
                    value: function onValueChange(eventHandler) {
                        this.valueChangeBus.onEvent(eventHandler);
                        eventHandler({ "oldValue": this.value, "newValue": this.value });
                    }
                }, {
                    key: "onQualifierChange",
                    value: function onQualifierChange(eventHandler) {
                        this.qualifierChangeBus.onEvent(eventHandler);
                    }
                }, {
                    key: "syncWith",
                    value: function syncWith(sourceAttribute) {
                        if (sourceAttribute) {
                            this.setQualifier(sourceAttribute.getQualifier()); // sequence is important
                            this.setValue(sourceAttribute.value);
                        }
                    }
                }], [{
                    key: "checkValue",
                    value: function checkValue(value) {
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
                    }
                }]);

                return ClientAttribute;
            }();

            ClientAttribute.SUPPORTED_VALUE_TYPES = ["string", "number", "boolean"];
            ClientAttribute.clientAttributeInstanceCount = 0;
            exports.ClientAttribute = ClientAttribute;
        }, { "./EventBus": 95 }], 84: [function (_dereq_, module, exports) {
            "use strict";

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

            var ClientPresentationModel_1 = _dereq_("./ClientPresentationModel");
            var Codec_1 = _dereq_("./Codec");
            var CommandBatcher_1 = _dereq_("./CommandBatcher");

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
                    this.codec = new Codec_1.default();
                    this.commandBatcher = new CommandBatcher_1.BlindCommandBatcher(true, maxBatchSize);
                }

                _createClass(ClientConnector, [{
                    key: "setCommandBatcher",
                    value: function setCommandBatcher(newBatcher) {
                        this.commandBatcher = newBatcher;
                    }
                }, {
                    key: "setPushEnabled",
                    value: function setPushEnabled(enabled) {
                        this.pushEnabled = enabled;
                    }
                }, {
                    key: "setPushListener",
                    value: function setPushListener(newListener) {
                        this.pushListener = newListener;
                    }
                }, {
                    key: "setReleaseCommand",
                    value: function setReleaseCommand(newCommand) {
                        this.releaseCommand = newCommand;
                    }
                }, {
                    key: "send",
                    value: function send(command, onFinished) {
                        this.commandQueue.push({ command: command, handler: onFinished });
                        if (this.currentlySending) {
                            this.release(); // there is not point in releasing if we do not send atm
                            return;
                        }
                        this.doSendNext();
                    }
                }, {
                    key: "doSendNext",
                    value: function doSendNext() {
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
                    }
                }, {
                    key: "handle",
                    value: function handle(command) {
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
                    }
                }, {
                    key: "handleDeletePresentationModelCommand",
                    value: function handleDeletePresentationModelCommand(serverCommand) {
                        var model = this.clientDolphin.findPresentationModelById(serverCommand.pmId);
                        if (!model) return null;
                        this.clientDolphin.getClientModelStore().deletePresentationModel(model, true);
                        return model;
                    }
                }, {
                    key: "handleCreatePresentationModelCommand",
                    value: function handleCreatePresentationModelCommand(serverCommand) {
                        var _this2 = this;

                        if (this.clientDolphin.getClientModelStore().containsPresentationModel(serverCommand.pmId)) {
                            throw new Error("There already is a presentation model with id " + serverCommand.pmId + "  known to the client.");
                        }
                        var attributes = [];
                        serverCommand.attributes.forEach(function (attr) {
                            var clientAttribute = _this2.clientDolphin.attribute(attr.propertyName, attr.qualifier, attr.value);
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
                    }
                }, {
                    key: "handleValueChangedCommand",
                    value: function handleValueChangedCommand(serverCommand) {
                        var clientAttribute = this.clientDolphin.getClientModelStore().findAttributeById(serverCommand.attributeId);
                        if (!clientAttribute) {
                            console.log("attribute with id " + serverCommand.attributeId + " not found, cannot update to new value " + serverCommand.newValue);
                            return null;
                        }
                        if (clientAttribute.getValue() == serverCommand.newValue) {
                            //console.log("nothing to do. new value == old value");
                            return null;
                        }
                        clientAttribute.setValue(serverCommand.newValue);
                        return null;
                    }
                }, {
                    key: "handleAttributeMetadataChangedCommand",
                    value: function handleAttributeMetadataChangedCommand(serverCommand) {
                        var clientAttribute = this.clientDolphin.getClientModelStore().findAttributeById(serverCommand.attributeId);
                        if (!clientAttribute) return null;
                        clientAttribute[serverCommand.metadataName] = serverCommand.value;
                        return null;
                    }
                    ///////////// push support ///////////////

                }, {
                    key: "listen",
                    value: function listen() {
                        if (!this.pushEnabled) return;
                        if (this.waiting) return;
                        // todo: how to issue a warning if no pushListener is set?
                        if (!this.currentlySending) {
                            this.doSendNext();
                        }
                    }
                }, {
                    key: "enqueuePushCommand",
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
                    key: "release",
                    value: function release() {
                        if (!this.waiting) return;
                        this.waiting = false;
                        // todo: how to issue a warning if no releaseCommand is set?
                        this.transmitter.signal(this.releaseCommand);
                    }
                }]);

                return ClientConnector;
            }();

            exports.ClientConnector = ClientConnector;
        }, { "./ClientPresentationModel": 87, "./Codec": 88, "./CommandBatcher": 90 }], 85: [function (_dereq_, module, exports) {
            "use strict";

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

            var ClientAttribute_1 = _dereq_("./ClientAttribute");
            var ClientPresentationModel_1 = _dereq_("./ClientPresentationModel");

            var ClientDolphin = function () {
                function ClientDolphin() {
                    _classCallCheck(this, ClientDolphin);
                }

                _createClass(ClientDolphin, [{
                    key: "setClientConnector",
                    value: function setClientConnector(clientConnector) {
                        this.clientConnector = clientConnector;
                    }
                }, {
                    key: "getClientConnector",
                    value: function getClientConnector() {
                        return this.clientConnector;
                    }
                }, {
                    key: "send",
                    value: function send(command, onFinished) {
                        this.clientConnector.send(command, onFinished);
                    }
                    // factory method for attributes

                }, {
                    key: "attribute",
                    value: function attribute(propertyName, qualifier, value) {
                        return new ClientAttribute_1.ClientAttribute(propertyName, qualifier, value);
                    }
                    // factory method for presentation models

                }, {
                    key: "presentationModel",
                    value: function presentationModel(id, type) {
                        var model = new ClientPresentationModel_1.ClientPresentationModel(id, type);

                        for (var _len = arguments.length, attributes = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                            attributes[_key - 2] = arguments[_key];
                        }

                        if (attributes && attributes.length > 0) {
                            attributes.forEach(function (attribute) {
                                model.addAttribute(attribute);
                            });
                        }
                        this.getClientModelStore().add(model);
                        return model;
                    }
                }, {
                    key: "setClientModelStore",
                    value: function setClientModelStore(clientModelStore) {
                        this.clientModelStore = clientModelStore;
                    }
                }, {
                    key: "getClientModelStore",
                    value: function getClientModelStore() {
                        return this.clientModelStore;
                    }
                }, {
                    key: "listPresentationModelIds",
                    value: function listPresentationModelIds() {
                        return this.getClientModelStore().listPresentationModelIds();
                    }
                }, {
                    key: "listPresentationModels",
                    value: function listPresentationModels() {
                        return this.getClientModelStore().listPresentationModels();
                    }
                }, {
                    key: "findAllPresentationModelByType",
                    value: function findAllPresentationModelByType(presentationModelType) {
                        return this.getClientModelStore().findAllPresentationModelByType(presentationModelType);
                    }
                }, {
                    key: "getAt",
                    value: function getAt(id) {
                        return this.findPresentationModelById(id);
                    }
                }, {
                    key: "findPresentationModelById",
                    value: function findPresentationModelById(id) {
                        return this.getClientModelStore().findPresentationModelById(id);
                    }
                }, {
                    key: "deletePresentationModel",
                    value: function deletePresentationModel(modelToDelete) {
                        this.getClientModelStore().deletePresentationModel(modelToDelete, true);
                    }
                }, {
                    key: "updatePresentationModelQualifier",
                    value: function updatePresentationModelQualifier(presentationModel) {
                        var _this = this;

                        presentationModel.getAttributes().forEach(function (sourceAttribute) {
                            _this.updateAttributeQualifier(sourceAttribute);
                        });
                    }
                }, {
                    key: "updateAttributeQualifier",
                    value: function updateAttributeQualifier(sourceAttribute) {
                        if (!sourceAttribute.getQualifier()) return;
                        var attributes = this.getClientModelStore().findAllAttributesByQualifier(sourceAttribute.getQualifier());
                        attributes.forEach(function (targetAttribute) {
                            targetAttribute.setValue(sourceAttribute.getValue()); // should always have the same value
                        });
                    }
                    ////// push support ///////

                }, {
                    key: "startPushListening",
                    value: function startPushListening(pushCommand, releaseCommand) {
                        this.clientConnector.setPushListener(pushCommand);
                        this.clientConnector.setReleaseCommand(releaseCommand);
                        this.clientConnector.setPushEnabled(true);
                        this.clientConnector.listen();
                    }
                }, {
                    key: "stopPushListening",
                    value: function stopPushListening() {
                        this.clientConnector.setPushEnabled(false);
                    }
                }]);

                return ClientDolphin;
            }();

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = ClientDolphin;
        }, { "./ClientAttribute": 83, "./ClientPresentationModel": 87 }], 86: [function (_dereq_, module, exports) {
            /// <reference path="./core-js.d.ts" />
            "use strict";

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
                    _classCallCheck(this, ClientModelStore);

                    this.clientDolphin = clientDolphin;
                    this.presentationModels = new Map();
                    this.presentationModelsPerType = new Map();
                    this.attributesPerId = new Map();
                    this.attributesPerQualifier = new Map();
                    this.modelStoreChangeBus = new EventBus_1.default();
                }

                _createClass(ClientModelStore, [{
                    key: "getClientDolphin",
                    value: function getClientDolphin() {
                        return this.clientDolphin;
                    }
                }, {
                    key: "registerModel",
                    value: function registerModel(model) {
                        var _this = this;

                        if (model.clientSideOnly) {
                            return;
                        }
                        var connector = this.clientDolphin.getClientConnector();
                        var createPMCommand = new CreatePresentationModelCommand_1.default(model);
                        connector.send(createPMCommand, null);
                        model.getAttributes().forEach(function (attribute) {
                            _this.registerAttribute(attribute);
                        });
                    }
                }, {
                    key: "registerAttribute",
                    value: function registerAttribute(attribute) {
                        var _this2 = this;

                        this.addAttributeById(attribute);
                        if (attribute.getQualifier()) {
                            this.addAttributeByQualifier(attribute);
                        }
                        // whenever an attribute changes its value, the server needs to be notified
                        // and all other attributes with the same qualifier are given the same value
                        attribute.onValueChange(function (evt) {
                            var valueChangeCommand = new ValueChangedCommand_1.default(attribute.id, evt.newValue);
                            _this2.clientDolphin.getClientConnector().send(valueChangeCommand, null);
                            if (attribute.getQualifier()) {
                                var attrs = _this2.findAttributesByFilter(function (attr) {
                                    return attr !== attribute && attr.getQualifier() == attribute.getQualifier();
                                });
                                attrs.forEach(function (attr) {
                                    attr.setValue(attribute.getValue());
                                });
                            }
                        });
                        attribute.onQualifierChange(function (evt) {
                            var changeAttrMetadataCmd = new ChangeAttributeMetadataCommand_1.default(attribute.id, Attribute_1.default.QUALIFIER_PROPERTY, evt.newValue);
                            _this2.clientDolphin.getClientConnector().send(changeAttrMetadataCmd, null);
                        });
                    }
                }, {
                    key: "add",
                    value: function add(model) {
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
                    }
                }, {
                    key: "remove",
                    value: function remove(model) {
                        var _this3 = this;

                        if (!model) {
                            return false;
                        }
                        var removed = false;
                        if (this.presentationModels.has(model.id)) {
                            this.removePresentationModelByType(model);
                            this.presentationModels.delete(model.id);
                            model.getAttributes().forEach(function (attribute) {
                                _this3.removeAttributeById(attribute);
                                if (attribute.getQualifier()) {
                                    _this3.removeAttributeByQualifier(attribute);
                                }
                            });
                            this.modelStoreChangeBus.trigger({ 'eventType': Type.REMOVED, 'clientPresentationModel': model });
                            removed = true;
                        }
                        return removed;
                    }
                }, {
                    key: "findAttributesByFilter",
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
                    key: "addPresentationModelByType",
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
                    key: "removePresentationModelByType",
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
                    key: "listPresentationModelIds",
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
                    key: "listPresentationModels",
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
                    key: "findPresentationModelById",
                    value: function findPresentationModelById(id) {
                        return this.presentationModels.get(id);
                    }
                }, {
                    key: "findAllPresentationModelByType",
                    value: function findAllPresentationModelByType(type) {
                        if (!type || !this.presentationModelsPerType.has(type)) {
                            return [];
                        }
                        return this.presentationModelsPerType.get(type).slice(0); // slice is used to clone the array
                    }
                }, {
                    key: "deletePresentationModel",
                    value: function deletePresentationModel(model, notify) {
                        if (!model) {
                            return;
                        }
                        if (this.containsPresentationModel(model.id)) {
                            this.remove(model);
                            if (!notify || model.clientSideOnly) {
                                return;
                            }
                            this.clientDolphin.getClientConnector().send(new DeletedPresentationModelNotification_1.default(model.id), null);
                        }
                    }
                }, {
                    key: "containsPresentationModel",
                    value: function containsPresentationModel(id) {
                        return this.presentationModels.has(id);
                    }
                }, {
                    key: "addAttributeById",
                    value: function addAttributeById(attribute) {
                        if (!attribute || this.attributesPerId.has(attribute.id)) {
                            return;
                        }
                        this.attributesPerId.set(attribute.id, attribute);
                    }
                }, {
                    key: "removeAttributeById",
                    value: function removeAttributeById(attribute) {
                        if (!attribute || !this.attributesPerId.has(attribute.id)) {
                            return;
                        }
                        this.attributesPerId.delete(attribute.id);
                    }
                }, {
                    key: "findAttributeById",
                    value: function findAttributeById(id) {
                        return this.attributesPerId.get(id);
                    }
                }, {
                    key: "addAttributeByQualifier",
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
                    key: "removeAttributeByQualifier",
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
                    key: "findAllAttributesByQualifier",
                    value: function findAllAttributesByQualifier(qualifier) {
                        if (!qualifier || !this.attributesPerQualifier.has(qualifier)) {
                            return [];
                        }
                        return this.attributesPerQualifier.get(qualifier).slice(0); // slice is used to clone the array
                    }
                }, {
                    key: "onModelStoreChange",
                    value: function onModelStoreChange(eventHandler) {
                        this.modelStoreChangeBus.onEvent(eventHandler);
                    }
                }, {
                    key: "onModelStoreChangeForType",
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

            exports.ClientModelStore = ClientModelStore;
        }, { "./Attribute": 81, "./ChangeAttributeMetadataCommand": 82, "./CreatePresentationModelCommand": 92, "./DeletedPresentationModelNotification": 93, "./EventBus": 95, "./ValueChangedCommand": 102 }], 87: [function (_dereq_, module, exports) {
            "use strict";

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

            var EventBus_1 = _dereq_('./EventBus');
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
                    this.invalidBus = new EventBus_1.default();
                    this.dirtyValueChangeBus = new EventBus_1.default();
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

            exports.ClientPresentationModel = ClientPresentationModel;
        }, { "./EventBus": 95 }], 88: [function (_dereq_, module, exports) {
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
        }, { "./utils.js": 121 }], 89: [function (_dereq_, module, exports) {
            "use strict";

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Command = function Command() {
                _classCallCheck(this, Command);

                this.id = "dolphin-core-command";
            };

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = Command;
        }, {}], 90: [function (_dereq_, module, exports) {
            "use strict";

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

            var ValueChangedCommand_1 = _dereq_('./ValueChangedCommand');
            /** A Batcher that does no batching but merely takes the first element of the queue as the single item in the batch */

            var NoCommandBatcher = function () {
                function NoCommandBatcher() {
                    _classCallCheck(this, NoCommandBatcher);
                }

                _createClass(NoCommandBatcher, [{
                    key: 'batch',
                    value: function batch(queue) {
                        return [queue.shift()];
                    }
                }]);

                return NoCommandBatcher;
            }();

            exports.NoCommandBatcher = NoCommandBatcher;
            /** A batcher that batches the blinds (commands with no callback) and optionally also folds value changes */

            var BlindCommandBatcher = function () {
                /** folding: whether we should try folding ValueChangedCommands */
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
                        var n = Math.min(queue.length, this.maxBatchSize);
                        for (var counter = 0; counter < n; counter++) {
                            var candidate = queue.shift();
                            if (this.folding && candidate.command instanceof ValueChangedCommand_1.default && !candidate.handler) {
                                var canCmd = candidate.command;
                                if (batch.length > 0 && batch[batch.length - 1].command instanceof ValueChangedCommand_1.default) {
                                    var batchCmd = batch[batch.length - 1].command;
                                    if (canCmd.attributeId == batchCmd.attributeId) {
                                        batchCmd.newValue = canCmd.newValue;
                                    } else {
                                        batch.push(candidate); // we cannot merge, so batch the candidate
                                    }
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
                    }
                }]);

                return BlindCommandBatcher;
            }();

            exports.BlindCommandBatcher = BlindCommandBatcher;
        }, { "./ValueChangedCommand": 102 }], 91: [function (_dereq_, module, exports) {
            "use strict";

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CommandConstants = function CommandConstants() {
                _classCallCheck(this, CommandConstants);
            };

            CommandConstants.DOLPHIN_PLATFORM_PREFIX = 'dolphin_platform_intern_';
            CommandConstants.CREATE_CONTEXT_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'initClientContext';
            CommandConstants.DESTROY_CONTEXT_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'disconnectClientContext';
            CommandConstants.CREATE_CONTROLLER_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'registerController';
            CommandConstants.DESTROY_CONTROLLER_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'destroyController';
            CommandConstants.CALL_CONTROLLER_ACTION_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'callControllerAction';
            CommandConstants.START_LONG_POLL_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'longPoll';
            CommandConstants.INTERRUPT_LONG_POLL_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'release';
            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = CommandConstants;
        }, {}], 92: [function (_dereq_, module, exports) {
            "use strict";

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

            var Command_1 = _dereq_('./Command');

            var CreatePresentationModelCommand = function (_Command_1$default) {
                _inherits(CreatePresentationModelCommand, _Command_1$default);

                function CreatePresentationModelCommand(presentationModel) {
                    _classCallCheck(this, CreatePresentationModelCommand);

                    var _this = _possibleConstructorReturn(this, (CreatePresentationModelCommand.__proto__ || Object.getPrototypeOf(CreatePresentationModelCommand)).call(this));

                    _this.attributes = [];
                    _this.clientSideOnly = false;
                    _this.id = "CreatePresentationModel";
                    _this.className = "org.opendolphin.core.comm.CreatePresentationModelCommand";
                    _this.pmId = presentationModel.id;
                    _this.pmType = presentationModel.presentationModelType;
                    var attrs = _this.attributes;
                    presentationModel.getAttributes().forEach(function (attr) {
                        attrs.push({
                            propertyName: attr.propertyName,
                            id: attr.id,
                            qualifier: attr.getQualifier(),
                            value: attr.getValue()
                        });
                    });
                    return _this;
                }

                return CreatePresentationModelCommand;
            }(Command_1.default);

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = CreatePresentationModelCommand;
        }, { "./Command": 89 }], 93: [function (_dereq_, module, exports) {
            "use strict";

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

            var Command_1 = _dereq_('./Command');

            var DeletedPresentationModelNotification = function (_Command_1$default) {
                _inherits(DeletedPresentationModelNotification, _Command_1$default);

                function DeletedPresentationModelNotification(pmId) {
                    _classCallCheck(this, DeletedPresentationModelNotification);

                    var _this = _possibleConstructorReturn(this, (DeletedPresentationModelNotification.__proto__ || Object.getPrototypeOf(DeletedPresentationModelNotification)).call(this));

                    _this.pmId = pmId;
                    _this.id = 'DeletedPresentationModel';
                    _this.className = "org.opendolphin.core.comm.DeletedPresentationModelNotification";
                    return _this;
                }

                return DeletedPresentationModelNotification;
            }(Command_1.default);

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = DeletedPresentationModelNotification;
        }, { "./Command": 89 }], 94: [function (_dereq_, module, exports) {
            "use strict";

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

            var ClientConnector_1 = _dereq_("./ClientConnector");
            var ClientDolphin_1 = _dereq_("./ClientDolphin");
            var ClientModelStore_1 = _dereq_("./ClientModelStore");
            var HttpTransmitter_1 = _dereq_("./HttpTransmitter");
            var NoTransmitter_1 = _dereq_("./NoTransmitter");

            var DolphinBuilder = function () {
                function DolphinBuilder() {
                    _classCallCheck(this, DolphinBuilder);

                    this.reset_ = false;
                    this.slackMS_ = 300;
                    this.maxBatchSize_ = 50;
                    this.supportCORS_ = false;
                }

                _createClass(DolphinBuilder, [{
                    key: "url",
                    value: function url(_url) {
                        this.url_ = _url;
                        return this;
                    }
                }, {
                    key: "reset",
                    value: function reset(_reset) {
                        this.reset_ = _reset;
                        return this;
                    }
                }, {
                    key: "slackMS",
                    value: function slackMS(_slackMS) {
                        this.slackMS_ = _slackMS;
                        return this;
                    }
                }, {
                    key: "maxBatchSize",
                    value: function maxBatchSize(_maxBatchSize) {
                        this.maxBatchSize_ = _maxBatchSize;
                        return this;
                    }
                }, {
                    key: "supportCORS",
                    value: function supportCORS(_supportCORS) {
                        this.supportCORS_ = _supportCORS;
                        return this;
                    }
                }, {
                    key: "errorHandler",
                    value: function errorHandler(_errorHandler) {
                        this.errorHandler_ = _errorHandler;
                        return this;
                    }
                }, {
                    key: "headersInfo",
                    value: function headersInfo(_headersInfo) {
                        this.headersInfo_ = _headersInfo;
                        return this;
                    }
                }, {
                    key: "build",
                    value: function build() {
                        console.log("OpenDolphin js found");
                        var clientDolphin = new ClientDolphin_1.default();
                        var transmitter;
                        if (this.url_ != null && this.url_.length > 0) {
                            transmitter = new HttpTransmitter_1.default(this.url_, this.reset_, "UTF-8", this.errorHandler_, this.supportCORS_, this.headersInfo_);
                        } else {
                            transmitter = new NoTransmitter_1.default();
                        }
                        clientDolphin.setClientConnector(new ClientConnector_1.ClientConnector(transmitter, clientDolphin, this.slackMS_, this.maxBatchSize_));
                        clientDolphin.setClientModelStore(new ClientModelStore_1.ClientModelStore(clientDolphin));
                        console.log("ClientDolphin initialized");
                        return clientDolphin;
                    }
                }]);

                return DolphinBuilder;
            }();

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = DolphinBuilder;
        }, { "./ClientConnector": 84, "./ClientDolphin": 85, "./ClientModelStore": 86, "./HttpTransmitter": 96, "./NoTransmitter": 98 }], 95: [function (_dereq_, module, exports) {
            "use strict";

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

            var EventBus = function () {
                function EventBus() {
                    _classCallCheck(this, EventBus);

                    this.eventHandlers = [];
                }

                _createClass(EventBus, [{
                    key: "onEvent",
                    value: function onEvent(eventHandler) {
                        this.eventHandlers.push(eventHandler);
                    }
                }, {
                    key: "trigger",
                    value: function trigger(event) {
                        this.eventHandlers.forEach(function (handle) {
                            return handle(event);
                        });
                    }
                }]);

                return EventBus;
            }();

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = EventBus;
        }, {}], 96: [function (_dereq_, module, exports) {
            "use strict";

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

            var Codec_1 = _dereq_("./Codec");

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
                    this.codec = new Codec_1.default();
                    if (reset) {
                        console.log('HttpTransmitter.invalidate() is deprecated. Use ClientDolphin.reset(OnSuccessHandler) instead');
                        this.invalidate();
                    }
                }

                _createClass(HttpTransmitter, [{
                    key: "transmit",
                    value: function transmit(commands, onDone) {
                        var _this = this;

                        this.http.onerror = function () {
                            _this.handleError('onerror', "");
                            onDone([]);
                        };
                        this.http.onreadystatechange = function () {
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
                    }
                }, {
                    key: "setHeaders",
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
                    key: "handleError",
                    value: function handleError(kind, message) {
                        var errorEvent = { kind: kind, url: this.url, httpStatus: this.http.status, message: message };
                        if (this.errorHandler) {
                            this.errorHandler(errorEvent);
                        } else {
                            console.log("Error occurred: ", errorEvent);
                        }
                    }
                }, {
                    key: "signal",
                    value: function signal(command) {
                        this.sig.open('POST', this.url, true);
                        this.setHeaders(this.sig);
                        this.sig.send(this.codec.encode([command]));
                    }
                    // Deprecated ! Use 'reset(OnSuccessHandler) instead

                }, {
                    key: "invalidate",
                    value: function invalidate() {
                        this.http.open('POST', this.url + 'invalidate?', false);
                        this.http.send();
                    }
                }]);

                return HttpTransmitter;
            }();

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = HttpTransmitter;
        }, { "./Codec": 88 }], 97: [function (_dereq_, module, exports) {
            "use strict";

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

            var SignalCommand_1 = _dereq_("./SignalCommand");
            var CommandConstants_1 = _dereq_("./CommandConstants");

            var InterruptLongPollCommand = function (_SignalCommand_1$defa) {
                _inherits(InterruptLongPollCommand, _SignalCommand_1$defa);

                function InterruptLongPollCommand() {
                    _classCallCheck(this, InterruptLongPollCommand);

                    var _this = _possibleConstructorReturn(this, (InterruptLongPollCommand.__proto__ || Object.getPrototypeOf(InterruptLongPollCommand)).call(this, CommandConstants_1.default.INTERRUPT_LONG_POLL_COMMAND_NAME));

                    _this.className = "com.canoo.dolphin.impl.commands.InterruptLongPollCommand";
                    return _this;
                }

                return InterruptLongPollCommand;
            }(SignalCommand_1.default);

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = InterruptLongPollCommand;
        }, { "./CommandConstants": 91, "./SignalCommand": 100 }], 98: [function (_dereq_, module, exports) {
            "use strict";
            /**
             * A transmitter that is not transmitting at all.
             * It may serve as a stand-in when no real transmitter is needed.
             */

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

            var NoTransmitter = function () {
                function NoTransmitter() {
                    _classCallCheck(this, NoTransmitter);
                }

                _createClass(NoTransmitter, [{
                    key: "transmit",
                    value: function transmit(commands, onDone) {
                        // do nothing special
                        onDone([]);
                    }
                }, {
                    key: "signal",
                    value: function signal() {
                        // do nothing
                    }
                }, {
                    key: "reset",
                    value: function reset() {
                        // do nothing
                    }
                }]);

                return NoTransmitter;
            }();

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = NoTransmitter;
        }, {}], 99: [function (_dereq_, module, exports) {
            "use strict";

            var DolphinBuilder_1 = _dereq_("./DolphinBuilder");
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
            function dolphin(url, reset) {
                var slackMS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;

                return makeDolphin().url(url).reset(reset).slackMS(slackMS).build();
            }
            exports.dolphin = dolphin;
            // factory method to build an initialized dolphin
            function makeDolphin() {
                return new DolphinBuilder_1.default();
            }
            exports.makeDolphin = makeDolphin;
            //Factory methods to have a better integration of ts sources in JS & es6
            function createInterruptLongPollCommand() {
                return new InterruptLongPollCommand_1.default();
            }
            exports.createInterruptLongPollCommand = createInterruptLongPollCommand;
            function createStartLongPollCommand() {
                return new StartLongPollCommand_1.default();
            }
            exports.createStartLongPollCommand = createStartLongPollCommand;
        }, { "./DolphinBuilder": 94, "./InterruptLongPollCommand": 97, "./StartLongPollCommand": 101 }], 100: [function (_dereq_, module, exports) {
            "use strict";

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

            var Command_1 = _dereq_('./Command');

            var SignalCommand = function (_Command_1$default) {
                _inherits(SignalCommand, _Command_1$default);

                function SignalCommand(name) {
                    _classCallCheck(this, SignalCommand);

                    var _this = _possibleConstructorReturn(this, (SignalCommand.__proto__ || Object.getPrototypeOf(SignalCommand)).call(this));

                    _this.id = name;
                    _this.className = "org.opendolphin.core.comm.SignalCommand";
                    return _this;
                }

                return SignalCommand;
            }(Command_1.default);

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = SignalCommand;
        }, { "./Command": 89 }], 101: [function (_dereq_, module, exports) {
            "use strict";

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

            var Command_1 = _dereq_('./Command');
            var CommandConstants_1 = _dereq_("./CommandConstants");

            var StartLongPollCommand = function (_Command_1$default) {
                _inherits(StartLongPollCommand, _Command_1$default);

                function StartLongPollCommand() {
                    _classCallCheck(this, StartLongPollCommand);

                    var _this = _possibleConstructorReturn(this, (StartLongPollCommand.__proto__ || Object.getPrototypeOf(StartLongPollCommand)).call(this));

                    _this.id = CommandConstants_1.default.START_LONG_POLL_COMMAND_NAME;
                    _this.className = "com.canoo.dolphin.impl.commands.StartLongPollCommand";
                    return _this;
                }

                return StartLongPollCommand;
            }(Command_1.default);

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = StartLongPollCommand;
        }, { "./Command": 89, "./CommandConstants": 91 }], 102: [function (_dereq_, module, exports) {
            "use strict";

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

            var Command_1 = _dereq_('./Command');

            var ValueChangedCommand = function (_Command_1$default) {
                _inherits(ValueChangedCommand, _Command_1$default);

                function ValueChangedCommand(attributeId, newValue) {
                    _classCallCheck(this, ValueChangedCommand);

                    var _this = _possibleConstructorReturn(this, (ValueChangedCommand.__proto__ || Object.getPrototypeOf(ValueChangedCommand)).call(this));

                    _this.attributeId = attributeId;
                    _this.newValue = newValue;
                    _this.id = "ValueChanged";
                    _this.className = "org.opendolphin.core.comm.ValueChangedCommand";
                    return _this;
                }

                return ValueChangedCommand;
            }(Command_1.default);

            Object.defineProperty(exports, "__esModule", { value: true });
            exports.default = ValueChangedCommand;
        }, { "./Command": 89 }], 103: [function (_dereq_, module, exports) {
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
        }, { "../bower_components/core.js/library/fn/map": 1, "./utils": 121, "./utils.js": 121 }], 104: [function (_dereq_, module, exports) {
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
        }, { "../bower_components/core.js/library/fn/map": 1, "./constants": 115, "./utils": 121, "./utils.js": 121 }], 105: [function (_dereq_, module, exports) {
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

            var _OpenDolphin = _dereq_('./OpenDolphin.js');

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
        }, { "./OpenDolphin.js": 99, "./beanmanager.js": 103, "./classrepo.js": 104, "./clientcontext.js": 106, "./connector.js": 114, "./controllermanager.js": 116, "./platformHttpTransmitter.js": 119, "./utils": 121 }], 106: [function (_dereq_, module, exports) {
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

            var _emitterComponent = _dereq_('emitter-component');

            var _emitterComponent2 = _interopRequireDefault(_emitterComponent);

            var _promise = _dereq_('../bower_components/core.js/library/fn/promise');

            var _promise2 = _interopRequireDefault(_promise);

            var _commandFactory = _dereq_('./commandFactory');

            var _commandFactory2 = _interopRequireDefault(_commandFactory);

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
                            self._connector.invoke(_commandFactory2.default.createCreateContextCommand()).then(function () {
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
                                self._connector.invoke(_commandFactory2.default.createDestroyContextCommand());
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
        }, { "../bower_components/core.js/library/fn/promise": 2, "./commandFactory": 108, "./utils": 121, "./utils.js": 121, "emitter-component": 80 }], 107: [function (_dereq_, module, exports) {
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
        }, { "./utils.js": 121 }], 108: [function (_dereq_, module, exports) {
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
            }();

            var _createContextCommand = _dereq_('./commands/createContextCommand.js');

            var _createContextCommand2 = _interopRequireDefault(_createContextCommand);

            var _createControllerCommand = _dereq_('./commands/createControllerCommand.js');

            var _createControllerCommand2 = _interopRequireDefault(_createControllerCommand);

            var _callActionCommand = _dereq_('./commands/callActionCommand.js');

            var _callActionCommand2 = _interopRequireDefault(_callActionCommand);

            var _destroyControllerCommand = _dereq_('./commands/destroyControllerCommand.js');

            var _destroyControllerCommand2 = _interopRequireDefault(_destroyControllerCommand);

            var _destroyContextCommand = _dereq_('./commands/destroyContextCommand.js');

            var _destroyContextCommand2 = _interopRequireDefault(_destroyContextCommand);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CommandFactory = function () {
                function CommandFactory() {
                    _classCallCheck(this, CommandFactory);
                }

                _createClass(CommandFactory, null, [{
                    key: 'createCreateContextCommand',
                    value: function createCreateContextCommand() {
                        return new _createContextCommand2.default();
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
                }, {
                    key: 'createDestroyControllerCommand',
                    value: function createDestroyControllerCommand(controllerId) {
                        return new _destroyControllerCommand2.default(controllerId);
                    }
                }, {
                    key: 'createDestroyContextCommand',
                    value: function createDestroyContextCommand() {
                        return new _destroyContextCommand2.default();
                    }
                }]);

                return CommandFactory;
            }();

            exports.default = CommandFactory;
        }, { "./commands/callActionCommand.js": 109, "./commands/createContextCommand.js": 110, "./commands/createControllerCommand.js": 111, "./commands/destroyContextCommand.js": 112, "./commands/destroyControllerCommand.js": 113 }], 109: [function (_dereq_, module, exports) {
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
        }, { "../utils": 121 }], 110: [function (_dereq_, module, exports) {
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

            var CreateContextCommand = function CreateContextCommand() {
                _classCallCheck(this, CreateContextCommand);

                (0, _utils.checkMethod)('CreateContextCommand.invoke()');
                this.id = 'CreateContext';
            };

            exports.default = CreateContextCommand;
        }, { "../utils": 121 }], 111: [function (_dereq_, module, exports) {
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

            var DestroyContextCommand = function DestroyContextCommand() {
                _classCallCheck(this, DestroyContextCommand);

                (0, _utils.checkMethod)('DestroyContextCommand()');

                this.id = 'DestroyContext';
            };

            exports.default = DestroyContextCommand;
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

            var _OpenDolphin = _dereq_('./OpenDolphin.js');

            var _OpenDolphin2 = _interopRequireDefault(_OpenDolphin);

            var _promise = _dereq_('../bower_components/core.js/library/fn/promise');

            var _promise2 = _interopRequireDefault(_promise);

            var _ClientModelStore = _dereq_('./ClientModelStore');

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
        }, { "../bower_components/core.js/library/fn/promise": 2, "./ClientModelStore": 86, "./OpenDolphin.js": 99, "./utils": 121, "./utils.js": 121 }], 115: [function (_dereq_, module, exports) {
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

            var _commandFactory2 = _interopRequireDefault(_commandFactory);

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
                                self.connector.invoke(_commandFactory2.default.createCreateControllerCommand(name, parentControllerId)).then(function () {
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

                            self.connector.invoke(_commandFactory2.default.createCallActionCommand(controllerId, actionName, actionParams)).then(function () {
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
                        (0, _utils.checkMethod)('ControllerManager.destroyController(controller)');
                        (0, _utils.checkParam)(controller, 'controller');

                        var self = this;
                        return new _promise2.default(function (resolve) {
                            self.connector.getHighlanderPM().then(function (highlanderPM) {
                                self.controllers.delete(controller);
                                highlanderPM.findAttributeByPropertyName(CONTROLLER_ID).setValue(controller.controllerId);
                                self.connector.invoke(_commandFactory2.default.createDestroyControllerCommand(controller.getId())).then(resolve);
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
        }, { "../bower_components/core.js/library/fn/promise": 2, "../bower_components/core.js/library/fn/set": 3, "./commandFactory.js": 108, "./connector.js": 114, "./controllerproxy.js": 117, "./utils": 121 }], 117: [function (_dereq_, module, exports) {
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
        }, { "./codec.js": 107, "./errors.js": 118, "./remotingErrorHandler": 120, "./utils": 121, "emitter-component": 80 }], 120: [function (_dereq_, module, exports) {
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
        }, {}] }, {}, [105])(105);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vbWFwLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL3NldC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc2V0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L25vZGVfbW9kdWxlcy9lbWl0dGVyLWNvbXBvbmVudC9pbmRleC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9BdHRyaWJ1dGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL0NsaWVudEF0dHJpYnV0ZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9DbGllbnRDb25uZWN0b3IuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvQ2xpZW50RG9scGhpbi5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9DbGllbnRNb2RlbFN0b3JlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL0NsaWVudFByZXNlbnRhdGlvbk1vZGVsLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL0NvZGVjLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL0NvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvQ29tbWFuZEJhdGNoZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvQ29tbWFuZENvbnN0YW50cy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9DcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvRGVsZXRlZFByZXNlbnRhdGlvbk1vZGVsTm90aWZpY2F0aW9uLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL0RvbHBoaW5CdWlsZGVyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL0V2ZW50QnVzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL0h0dHBUcmFuc21pdHRlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9JbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvTm9UcmFuc21pdHRlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9PcGVuRG9scGhpbi5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9TaWduYWxDb21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL1N0YXJ0TG9uZ1BvbGxDb21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL1ZhbHVlQ2hhbmdlZENvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvYmVhbm1hbmFnZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY2xhc3NyZXBvLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NsaWVudENvbnRleHRGYWN0b3J5LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NsaWVudGNvbnRleHQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29kZWMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29tbWFuZEZhY3RvcnkuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29tbWFuZHMvY2FsbEFjdGlvbkNvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29tbWFuZHMvY3JlYXRlQ29udGV4dENvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29tbWFuZHMvY3JlYXRlQ29udHJvbGxlckNvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29tbWFuZHMvZGVzdHJveUNvbnRleHRDb21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRzL2Rlc3Ryb3lDb250cm9sbGVyQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb25uZWN0b3IuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29uc3RhbnRzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbnRyb2xsZXJtYW5hZ2VyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbnRyb2xsZXJwcm94eS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9lcnJvcnMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvcGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvcmVtb3RpbmdFcnJvckhhbmRsZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvdXRpbHMuanMiLCJzcmMvZG9scGhpbi1wbGF0Zm9ybS1hbmd1bGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxvQkFBQSxB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R0FBaUMsSUFBakMsQ0FBc0MsWUFBWTtBQUNyRCxxQkFBSyxLQUFMLENBQVcsb0NBQVg7QUFDSCxhQUZNLENBQVA7QUFHSDtBQTFCZSxLQUFwQjs7QUE2QkEsbUJBQWUsSUFBZixDQUFvQixxQkFBcUIsV0FBekM7QUFDQSxZQUFRLGNBQVIsR0FBeUIsY0FBYyxVQUF2Qzs7QUFFQSxTQUFLLEtBQUwsQ0FBVyxrQ0FBWDs7QUFFQSxXQUFPLGFBQVA7QUFDSCxDQXBDMEQsQ0FBM0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TZXQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlciwgSVRFUkFUT1Ipe1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGFzYyAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcbiAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59OyIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgY3JlYXRlICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGFuSW5zdGFuY2UgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGRlZmluZWQgICAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgZm9yT2YgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBzZXRTcGVjaWVzICA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBmYXN0S2V5ICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5XG4gICwgU0laRSAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgJ2ZvckVhY2gnKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuICAgICAgLCBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZihlbnRyeSl7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBmcm9tICAgID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBtZXRhICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGZhaWxzICAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmVBbGwgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGZvck9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBhbkluc3RhbmNlICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZFAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgZWFjaCAgICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMClcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIGlmKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSwgJ19jJyk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZTtcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIGVhY2goJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzLHRvSlNPTicuc3BsaXQoJywnKSxmdW5jdGlvbihLRVkpe1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKWhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgS0VZKTtcbiAgICAgICAgaWYoIUlTX0FEREVSICYmIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpKXJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoJ3NpemUnIGluIHByb3RvKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSmxjell1YjJKcVpXTjBMblJ2TFhOMGNtbHVaeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYlhYMD0iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpfSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnU2V0Jywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ1NldCcpfSk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsIlxuLyoqXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICh0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSlcbiAgICAucHVzaChmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHNlbGYub2ZmKGV2ZW50LCBvbik7XG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIG9uLmZuID0gZm47XG4gIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgLy8gYWxsXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuY2xhc3MgQXR0cmlidXRlIHtcbn1cbkF0dHJpYnV0ZS5RVUFMSUZJRVJfUFJPUEVSVFkgPSBcInF1YWxpZmllclwiO1xuQXR0cmlidXRlLlZBTFVFID0gXCJ2YWx1ZVwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gQXR0cmlidXRlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1BdHRyaWJ1dGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IENvbW1hbmRfMSA9IHJlcXVpcmUoJy4vQ29tbWFuZCcpO1xuY2xhc3MgQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kIGV4dGVuZHMgQ29tbWFuZF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKGF0dHJpYnV0ZUlkLCBtZXRhZGF0YU5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlSWQgPSBhdHRyaWJ1dGVJZDtcbiAgICAgICAgdGhpcy5tZXRhZGF0YU5hbWUgPSBtZXRhZGF0YU5hbWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5pZCA9ICdDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YSc7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJvcmcub3BlbmRvbHBoaW4uY29yZS5jb21tLkNoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZFwiO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IENoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBFdmVudEJ1c18xID0gcmVxdWlyZSgnLi9FdmVudEJ1cycpO1xuY2xhc3MgQ2xpZW50QXR0cmlidXRlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0eU5hbWUsIHF1YWxpZmllciwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgICAgIHRoaXMuaWQgPSBcIlwiICsgKENsaWVudEF0dHJpYnV0ZS5jbGllbnRBdHRyaWJ1dGVJbnN0YW5jZUNvdW50KyspICsgXCJDXCI7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VCdXMgPSBuZXcgRXZlbnRCdXNfMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMucXVhbGlmaWVyQ2hhbmdlQnVzID0gbmV3IEV2ZW50QnVzXzEuZGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRRdWFsaWZpZXIocXVhbGlmaWVyKTtcbiAgICB9XG4gICAgLyoqIGEgY29weSBjb25zdHJ1Y3RvciB3aXRoIG5ldyBpZCBhbmQgbm8gcHJlc2VudGF0aW9uIG1vZGVsICovXG4gICAgY29weSgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDbGllbnRBdHRyaWJ1dGUodGhpcy5wcm9wZXJ0eU5hbWUsIHRoaXMuZ2V0UXVhbGlmaWVyKCksIHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHNldFByZXNlbnRhdGlvbk1vZGVsKHByZXNlbnRhdGlvbk1vZGVsKSB7XG4gICAgICAgIGlmICh0aGlzLnByZXNlbnRhdGlvbk1vZGVsKSB7XG4gICAgICAgICAgICBhbGVydChcIllvdSBjYW4gbm90IHNldCBhIHByZXNlbnRhdGlvbiBtb2RlbCBmb3IgYW4gYXR0cmlidXRlIHRoYXQgaXMgYWxyZWFkeSBib3VuZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbCA9IHByZXNlbnRhdGlvbk1vZGVsO1xuICAgIH1cbiAgICBnZXRQcmVzZW50YXRpb25Nb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlc2VudGF0aW9uTW9kZWw7XG4gICAgfVxuICAgIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG4gICAgc2V0VmFsdWUobmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIHZlcmlmaWVkVmFsdWUgPSBDbGllbnRBdHRyaWJ1dGUuY2hlY2tWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09IHZlcmlmaWVkVmFsdWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2ZXJpZmllZFZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlQnVzLnRyaWdnZXIoeyAnb2xkVmFsdWUnOiBvbGRWYWx1ZSwgJ25ld1ZhbHVlJzogdmVyaWZpZWRWYWx1ZSB9KTtcbiAgICB9XG4gICAgc2V0UXVhbGlmaWVyKG5ld1F1YWxpZmllcikge1xuICAgICAgICBpZiAodGhpcy5xdWFsaWZpZXIgPT0gbmV3UXVhbGlmaWVyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgb2xkUXVhbGlmaWVyID0gdGhpcy5xdWFsaWZpZXI7XG4gICAgICAgIHRoaXMucXVhbGlmaWVyID0gbmV3UXVhbGlmaWVyO1xuICAgICAgICB0aGlzLnF1YWxpZmllckNoYW5nZUJ1cy50cmlnZ2VyKHsgJ29sZFZhbHVlJzogb2xkUXVhbGlmaWVyLCAnbmV3VmFsdWUnOiBuZXdRdWFsaWZpZXIgfSk7XG4gICAgfVxuICAgIGdldFF1YWxpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbGlmaWVyO1xuICAgIH1cbiAgICBzdGF0aWMgY2hlY2tWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFN0cmluZyB8fCByZXN1bHQgaW5zdGFuY2VvZiBCb29sZWFuIHx8IHJlc3VsdCBpbnN0YW5jZW9mIE51bWJlcikge1xuICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWUudmFsdWVPZigpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBDbGllbnRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQW4gQXR0cmlidXRlIG1heSBub3QgaXRzZWxmIGNvbnRhaW4gYW4gYXR0cmlidXRlIGFzIGEgdmFsdWUuIEFzc3VtaW5nIHlvdSBmb3Jnb3QgdG8gY2FsbCB2YWx1ZS5cIik7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmNoZWNrVmFsdWUodmFsdWUudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvayA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5TVVBQT1JURURfVkFMVUVfVFlQRVMuaW5kZXhPZih0eXBlb2YgcmVzdWx0KSA+IC0xIHx8IHJlc3VsdCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdHRyaWJ1dGUgdmFsdWVzIG9mIHRoaXMgdHlwZSBhcmUgbm90IGFsbG93ZWQ6IFwiICsgdHlwZW9mIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBvblZhbHVlQ2hhbmdlKGV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlQnVzLm9uRXZlbnQoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgZXZlbnRIYW5kbGVyKHsgXCJvbGRWYWx1ZVwiOiB0aGlzLnZhbHVlLCBcIm5ld1ZhbHVlXCI6IHRoaXMudmFsdWUgfSk7XG4gICAgfVxuICAgIG9uUXVhbGlmaWVyQ2hhbmdlKGV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLnF1YWxpZmllckNoYW5nZUJ1cy5vbkV2ZW50KGV2ZW50SGFuZGxlcik7XG4gICAgfVxuICAgIHN5bmNXaXRoKHNvdXJjZUF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoc291cmNlQXR0cmlidXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFF1YWxpZmllcihzb3VyY2VBdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpOyAvLyBzZXF1ZW5jZSBpcyBpbXBvcnRhbnRcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUoc291cmNlQXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbkNsaWVudEF0dHJpYnV0ZS5TVVBQT1JURURfVkFMVUVfVFlQRVMgPSBbXCJzdHJpbmdcIiwgXCJudW1iZXJcIiwgXCJib29sZWFuXCJdO1xuQ2xpZW50QXR0cmlidXRlLmNsaWVudEF0dHJpYnV0ZUluc3RhbmNlQ291bnQgPSAwO1xuZXhwb3J0cy5DbGllbnRBdHRyaWJ1dGUgPSBDbGllbnRBdHRyaWJ1dGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsaWVudEF0dHJpYnV0ZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWxfMSA9IHJlcXVpcmUoXCIuL0NsaWVudFByZXNlbnRhdGlvbk1vZGVsXCIpO1xuY29uc3QgQ29kZWNfMSA9IHJlcXVpcmUoXCIuL0NvZGVjXCIpO1xuY29uc3QgQ29tbWFuZEJhdGNoZXJfMSA9IHJlcXVpcmUoXCIuL0NvbW1hbmRCYXRjaGVyXCIpO1xuY2xhc3MgQ2xpZW50Q29ubmVjdG9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0cmFuc21pdHRlciwgY2xpZW50RG9scGhpbiwgc2xhY2tNUyA9IDAsIG1heEJhdGNoU2l6ZSA9IDUwKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZFF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudGx5U2VuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnB1c2hFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2FpdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyYW5zbWl0dGVyID0gdHJhbnNtaXR0ZXI7XG4gICAgICAgIHRoaXMuY2xpZW50RG9scGhpbiA9IGNsaWVudERvbHBoaW47XG4gICAgICAgIHRoaXMuc2xhY2tNUyA9IHNsYWNrTVM7XG4gICAgICAgIHRoaXMuY29kZWMgPSBuZXcgQ29kZWNfMS5kZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuY29tbWFuZEJhdGNoZXIgPSBuZXcgQ29tbWFuZEJhdGNoZXJfMS5CbGluZENvbW1hbmRCYXRjaGVyKHRydWUsIG1heEJhdGNoU2l6ZSk7XG4gICAgfVxuICAgIHNldENvbW1hbmRCYXRjaGVyKG5ld0JhdGNoZXIpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kQmF0Y2hlciA9IG5ld0JhdGNoZXI7XG4gICAgfVxuICAgIHNldFB1c2hFbmFibGVkKGVuYWJsZWQpIHtcbiAgICAgICAgdGhpcy5wdXNoRW5hYmxlZCA9IGVuYWJsZWQ7XG4gICAgfVxuICAgIHNldFB1c2hMaXN0ZW5lcihuZXdMaXN0ZW5lcikge1xuICAgICAgICB0aGlzLnB1c2hMaXN0ZW5lciA9IG5ld0xpc3RlbmVyO1xuICAgIH1cbiAgICBzZXRSZWxlYXNlQ29tbWFuZChuZXdDb21tYW5kKSB7XG4gICAgICAgIHRoaXMucmVsZWFzZUNvbW1hbmQgPSBuZXdDb21tYW5kO1xuICAgIH1cbiAgICBzZW5kKGNvbW1hbmQsIG9uRmluaXNoZWQpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kUXVldWUucHVzaCh7IGNvbW1hbmQ6IGNvbW1hbmQsIGhhbmRsZXI6IG9uRmluaXNoZWQgfSk7XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRseVNlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMucmVsZWFzZSgpOyAvLyB0aGVyZSBpcyBub3QgcG9pbnQgaW4gcmVsZWFzaW5nIGlmIHdlIGRvIG5vdCBzZW5kIGF0bVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9TZW5kTmV4dCgpO1xuICAgIH1cbiAgICBkb1NlbmROZXh0KCkge1xuICAgICAgICBpZiAodGhpcy5jb21tYW5kUXVldWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHVzaEVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVucXVldWVQdXNoQ29tbWFuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50bHlTZW5kaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudGx5U2VuZGluZyA9IHRydWU7XG4gICAgICAgIHZhciBjbWRzQW5kSGFuZGxlcnMgPSB0aGlzLmNvbW1hbmRCYXRjaGVyLmJhdGNoKHRoaXMuY29tbWFuZFF1ZXVlKTtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY21kc0FuZEhhbmRsZXJzW2NtZHNBbmRIYW5kbGVycy5sZW5ndGggLSAxXS5oYW5kbGVyO1xuICAgICAgICB2YXIgY29tbWFuZHMgPSBjbWRzQW5kSGFuZGxlcnMubWFwKGNhaCA9PiB7IHJldHVybiBjYWguY29tbWFuZDsgfSk7XG4gICAgICAgIHRoaXMudHJhbnNtaXR0ZXIudHJhbnNtaXQoY29tbWFuZHMsIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNlcnZlciByZXNwb25zZTogW1wiICsgcmVzcG9uc2UubWFwKGl0ID0+IGl0LmlkKS5qb2luKFwiLCBcIikgKyBcIl0gXCIpO1xuICAgICAgICAgICAgdmFyIHRvdWNoZWRQTXMgPSBbXTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goKGNvbW1hbmQpID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hlZCA9IHRoaXMuaGFuZGxlKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIGlmICh0b3VjaGVkKVxuICAgICAgICAgICAgICAgICAgICB0b3VjaGVkUE1zLnB1c2godG91Y2hlZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLm9uRmluaXNoZWQodG91Y2hlZFBNcyk7IC8vIHRvZG86IG1ha2UgdGhlbSB1bmlxdWU/XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZWN1cnNpdmUgY2FsbDogZmV0Y2ggdGhlIG5leHQgaW4gbGluZSBidXQgYWxsb3cgYSBiaXQgb2Ygc2xhY2sgc3VjaCB0aGF0XG4gICAgICAgICAgICAvLyBkb2N1bWVudCBldmVudHMgY2FuIGZpcmUsIHJlbmRlcmluZyBpcyBkb25lIGFuZCBjb21tYW5kcyBjYW4gYmF0Y2ggdXBcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5kb1NlbmROZXh0KCksIHRoaXMuc2xhY2tNUyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGUoY29tbWFuZCkge1xuICAgICAgICBpZiAoY29tbWFuZC5pZCA9PSBcIkRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZURlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21tYW5kLmlkID09IFwiQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuaWQgPT0gXCJWYWx1ZUNoYW5nZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2VkQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21tYW5kLmlkID09IFwiQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUF0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbm5vdCBoYW5kbGUsIHVua25vd24gY29tbWFuZCBcIiArIGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBoYW5kbGVEZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoc2VydmVyQ29tbWFuZCkge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLmNsaWVudERvbHBoaW4uZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChzZXJ2ZXJDb21tYW5kLnBtSWQpO1xuICAgICAgICBpZiAoIW1vZGVsKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHRoaXMuY2xpZW50RG9scGhpbi5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZGVsZXRlUHJlc2VudGF0aW9uTW9kZWwobW9kZWwsIHRydWUpO1xuICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgfVxuICAgIGhhbmRsZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChzZXJ2ZXJDb21tYW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmNvbnRhaW5zUHJlc2VudGF0aW9uTW9kZWwoc2VydmVyQ29tbWFuZC5wbUlkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgYWxyZWFkeSBpcyBhIHByZXNlbnRhdGlvbiBtb2RlbCB3aXRoIGlkIFwiICsgc2VydmVyQ29tbWFuZC5wbUlkICsgXCIgIGtub3duIHRvIHRoZSBjbGllbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHNlcnZlckNvbW1hbmQuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgICB2YXIgY2xpZW50QXR0cmlidXRlID0gdGhpcy5jbGllbnREb2xwaGluLmF0dHJpYnV0ZShhdHRyLnByb3BlcnR5TmFtZSwgYXR0ci5xdWFsaWZpZXIsIGF0dHIudmFsdWUpO1xuICAgICAgICAgICAgaWYgKGF0dHIuaWQgJiYgYXR0ci5pZC5tYXRjaChcIi4qUyRcIikpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRBdHRyaWJ1dGUuaWQgPSBhdHRyLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKGNsaWVudEF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY2xpZW50UG0gPSBuZXcgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWxfMS5DbGllbnRQcmVzZW50YXRpb25Nb2RlbChzZXJ2ZXJDb21tYW5kLnBtSWQsIHNlcnZlckNvbW1hbmQucG1UeXBlKTtcbiAgICAgICAgY2xpZW50UG0uYWRkQXR0cmlidXRlcyhhdHRyaWJ1dGVzKTtcbiAgICAgICAgaWYgKHNlcnZlckNvbW1hbmQuY2xpZW50U2lkZU9ubHkpIHtcbiAgICAgICAgICAgIGNsaWVudFBtLmNsaWVudFNpZGVPbmx5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmFkZChjbGllbnRQbSk7XG4gICAgICAgIHRoaXMuY2xpZW50RG9scGhpbi51cGRhdGVQcmVzZW50YXRpb25Nb2RlbFF1YWxpZmllcihjbGllbnRQbSk7XG4gICAgICAgIHJldHVybiBjbGllbnRQbTtcbiAgICB9XG4gICAgaGFuZGxlVmFsdWVDaGFuZ2VkQ29tbWFuZChzZXJ2ZXJDb21tYW5kKSB7XG4gICAgICAgIHZhciBjbGllbnRBdHRyaWJ1dGUgPSB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmZpbmRBdHRyaWJ1dGVCeUlkKHNlcnZlckNvbW1hbmQuYXR0cmlidXRlSWQpO1xuICAgICAgICBpZiAoIWNsaWVudEF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdHRyaWJ1dGUgd2l0aCBpZCBcIiArIHNlcnZlckNvbW1hbmQuYXR0cmlidXRlSWQgKyBcIiBub3QgZm91bmQsIGNhbm5vdCB1cGRhdGUgdG8gbmV3IHZhbHVlIFwiICsgc2VydmVyQ29tbWFuZC5uZXdWYWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2xpZW50QXR0cmlidXRlLmdldFZhbHVlKCkgPT0gc2VydmVyQ29tbWFuZC5uZXdWYWx1ZSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5vdGhpbmcgdG8gZG8uIG5ldyB2YWx1ZSA9PSBvbGQgdmFsdWVcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjbGllbnRBdHRyaWJ1dGUuc2V0VmFsdWUoc2VydmVyQ29tbWFuZC5uZXdWYWx1ZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBoYW5kbGVBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kKHNlcnZlckNvbW1hbmQpIHtcbiAgICAgICAgdmFyIGNsaWVudEF0dHJpYnV0ZSA9IHRoaXMuY2xpZW50RG9scGhpbi5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZmluZEF0dHJpYnV0ZUJ5SWQoc2VydmVyQ29tbWFuZC5hdHRyaWJ1dGVJZCk7XG4gICAgICAgIGlmICghY2xpZW50QXR0cmlidXRlKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGNsaWVudEF0dHJpYnV0ZVtzZXJ2ZXJDb21tYW5kLm1ldGFkYXRhTmFtZV0gPSBzZXJ2ZXJDb21tYW5kLnZhbHVlO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgLy8vLy8vLy8vLy8vLyBwdXNoIHN1cHBvcnQgLy8vLy8vLy8vLy8vLy8vXG4gICAgbGlzdGVuKCkge1xuICAgICAgICBpZiAoIXRoaXMucHVzaEVuYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLndhaXRpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIHRvZG86IGhvdyB0byBpc3N1ZSBhIHdhcm5pbmcgaWYgbm8gcHVzaExpc3RlbmVyIGlzIHNldD9cbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRseVNlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZG9TZW5kTmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVucXVldWVQdXNoQ29tbWFuZCgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy53YWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb21tYW5kUXVldWUucHVzaCh7XG4gICAgICAgICAgICBjb21tYW5kOiB0aGlzLnB1c2hMaXN0ZW5lcixcbiAgICAgICAgICAgIGhhbmRsZXI6IHtcbiAgICAgICAgICAgICAgICBvbkZpbmlzaGVkOiBmdW5jdGlvbiAoKSB7IG1lLndhaXRpbmcgPSBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBvbkZpbmlzaGVkRGF0YTogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVsZWFzZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLndhaXRpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMud2FpdGluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0b2RvOiBob3cgdG8gaXNzdWUgYSB3YXJuaW5nIGlmIG5vIHJlbGVhc2VDb21tYW5kIGlzIHNldD9cbiAgICAgICAgdGhpcy50cmFuc21pdHRlci5zaWduYWwodGhpcy5yZWxlYXNlQ29tbWFuZCk7XG4gICAgfVxufVxuZXhwb3J0cy5DbGllbnRDb25uZWN0b3IgPSBDbGllbnRDb25uZWN0b3I7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsaWVudENvbm5lY3Rvci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgQ2xpZW50QXR0cmlidXRlXzEgPSByZXF1aXJlKFwiLi9DbGllbnRBdHRyaWJ1dGVcIik7XG5jb25zdCBDbGllbnRQcmVzZW50YXRpb25Nb2RlbF8xID0gcmVxdWlyZShcIi4vQ2xpZW50UHJlc2VudGF0aW9uTW9kZWxcIik7XG5jbGFzcyBDbGllbnREb2xwaGluIHtcbiAgICBzZXRDbGllbnRDb25uZWN0b3IoY2xpZW50Q29ubmVjdG9yKSB7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yID0gY2xpZW50Q29ubmVjdG9yO1xuICAgIH1cbiAgICBnZXRDbGllbnRDb25uZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudENvbm5lY3RvcjtcbiAgICB9XG4gICAgc2VuZChjb21tYW5kLCBvbkZpbmlzaGVkKSB7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLnNlbmQoY29tbWFuZCwgb25GaW5pc2hlZCk7XG4gICAgfVxuICAgIC8vIGZhY3RvcnkgbWV0aG9kIGZvciBhdHRyaWJ1dGVzXG4gICAgYXR0cmlidXRlKHByb3BlcnR5TmFtZSwgcXVhbGlmaWVyLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gbmV3IENsaWVudEF0dHJpYnV0ZV8xLkNsaWVudEF0dHJpYnV0ZShwcm9wZXJ0eU5hbWUsIHF1YWxpZmllciwgdmFsdWUpO1xuICAgIH1cbiAgICAvLyBmYWN0b3J5IG1ldGhvZCBmb3IgcHJlc2VudGF0aW9uIG1vZGVsc1xuICAgIHByZXNlbnRhdGlvbk1vZGVsKGlkLCB0eXBlLCAuLi5hdHRyaWJ1dGVzKSB7XG4gICAgICAgIHZhciBtb2RlbCA9IG5ldyBDbGllbnRQcmVzZW50YXRpb25Nb2RlbF8xLkNsaWVudFByZXNlbnRhdGlvbk1vZGVsKGlkLCB0eXBlKTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMgJiYgYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIG1vZGVsLmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRDbGllbnRNb2RlbFN0b3JlKCkuYWRkKG1vZGVsKTtcbiAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH1cbiAgICBzZXRDbGllbnRNb2RlbFN0b3JlKGNsaWVudE1vZGVsU3RvcmUpIHtcbiAgICAgICAgdGhpcy5jbGllbnRNb2RlbFN0b3JlID0gY2xpZW50TW9kZWxTdG9yZTtcbiAgICB9XG4gICAgZ2V0Q2xpZW50TW9kZWxTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50TW9kZWxTdG9yZTtcbiAgICB9XG4gICAgbGlzdFByZXNlbnRhdGlvbk1vZGVsSWRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDbGllbnRNb2RlbFN0b3JlKCkubGlzdFByZXNlbnRhdGlvbk1vZGVsSWRzKCk7XG4gICAgfVxuICAgIGxpc3RQcmVzZW50YXRpb25Nb2RlbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5saXN0UHJlc2VudGF0aW9uTW9kZWxzKCk7XG4gICAgfVxuICAgIGZpbmRBbGxQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZShwcmVzZW50YXRpb25Nb2RlbFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmZpbmRBbGxQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZShwcmVzZW50YXRpb25Nb2RlbFR5cGUpO1xuICAgIH1cbiAgICBnZXRBdChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kUHJlc2VudGF0aW9uTW9kZWxCeUlkKGlkKTtcbiAgICB9XG4gICAgZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChpZCk7XG4gICAgfVxuICAgIGRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsKG1vZGVsVG9EZWxldGUpIHtcbiAgICAgICAgdGhpcy5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZGVsZXRlUHJlc2VudGF0aW9uTW9kZWwobW9kZWxUb0RlbGV0ZSwgdHJ1ZSk7XG4gICAgfVxuICAgIHVwZGF0ZVByZXNlbnRhdGlvbk1vZGVsUXVhbGlmaWVyKHByZXNlbnRhdGlvbk1vZGVsKSB7XG4gICAgICAgIHByZXNlbnRhdGlvbk1vZGVsLmdldEF0dHJpYnV0ZXMoKS5mb3JFYWNoKHNvdXJjZUF0dHJpYnV0ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUF0dHJpYnV0ZVF1YWxpZmllcihzb3VyY2VBdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlQXR0cmlidXRlUXVhbGlmaWVyKHNvdXJjZUF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIXNvdXJjZUF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5maW5kQWxsQXR0cmlidXRlc0J5UXVhbGlmaWVyKHNvdXJjZUF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSk7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCh0YXJnZXRBdHRyaWJ1dGUgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0QXR0cmlidXRlLnNldFZhbHVlKHNvdXJjZUF0dHJpYnV0ZS5nZXRWYWx1ZSgpKTsgLy8gc2hvdWxkIGFsd2F5cyBoYXZlIHRoZSBzYW1lIHZhbHVlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLy8vLy8gcHVzaCBzdXBwb3J0IC8vLy8vLy9cbiAgICBzdGFydFB1c2hMaXN0ZW5pbmcocHVzaENvbW1hbmQsIHJlbGVhc2VDb21tYW5kKSB7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLnNldFB1c2hMaXN0ZW5lcihwdXNoQ29tbWFuZCk7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLnNldFJlbGVhc2VDb21tYW5kKHJlbGVhc2VDb21tYW5kKTtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3Iuc2V0UHVzaEVuYWJsZWQodHJ1ZSk7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLmxpc3RlbigpO1xuICAgIH1cbiAgICBzdG9wUHVzaExpc3RlbmluZygpIHtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3Iuc2V0UHVzaEVuYWJsZWQoZmFsc2UpO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IENsaWVudERvbHBoaW47XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsaWVudERvbHBoaW4uanMubWFwXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9jb3JlLWpzLmQudHNcIiAvPlxuXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBBdHRyaWJ1dGVfMSA9IHJlcXVpcmUoXCIuL0F0dHJpYnV0ZVwiKTtcbmNvbnN0IENoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZF8xID0gcmVxdWlyZShcIi4vQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kXCIpO1xuY29uc3QgQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kXzEgPSByZXF1aXJlKFwiLi9DcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmRcIik7XG5jb25zdCBEZWxldGVkUHJlc2VudGF0aW9uTW9kZWxOb3RpZmljYXRpb25fMSA9IHJlcXVpcmUoXCIuL0RlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvblwiKTtcbmNvbnN0IEV2ZW50QnVzXzEgPSByZXF1aXJlKFwiLi9FdmVudEJ1c1wiKTtcbmNvbnN0IFZhbHVlQ2hhbmdlZENvbW1hbmRfMSA9IHJlcXVpcmUoXCIuL1ZhbHVlQ2hhbmdlZENvbW1hbmRcIik7XG4oZnVuY3Rpb24gKFR5cGUpIHtcbiAgICBUeXBlW1R5cGVbXCJBRERFRFwiXSA9ICdBRERFRCddID0gXCJBRERFRFwiO1xuICAgIFR5cGVbVHlwZVtcIlJFTU9WRURcIl0gPSAnUkVNT1ZFRCddID0gXCJSRU1PVkVEXCI7XG59KShleHBvcnRzLlR5cGUgfHwgKGV4cG9ydHMuVHlwZSA9IHt9KSk7XG52YXIgVHlwZSA9IGV4cG9ydHMuVHlwZTtcbmNsYXNzIENsaWVudE1vZGVsU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKGNsaWVudERvbHBoaW4pIHtcbiAgICAgICAgdGhpcy5jbGllbnREb2xwaGluID0gY2xpZW50RG9scGhpbjtcbiAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVySWQgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllciA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5tb2RlbFN0b3JlQ2hhbmdlQnVzID0gbmV3IEV2ZW50QnVzXzEuZGVmYXVsdCgpO1xuICAgIH1cbiAgICBnZXRDbGllbnREb2xwaGluKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jbGllbnREb2xwaGluO1xuICAgIH1cbiAgICByZWdpc3Rlck1vZGVsKG1vZGVsKSB7XG4gICAgICAgIGlmIChtb2RlbC5jbGllbnRTaWRlT25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25uZWN0b3IgPSB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50Q29ubmVjdG9yKCk7XG4gICAgICAgIHZhciBjcmVhdGVQTUNvbW1hbmQgPSBuZXcgQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kXzEuZGVmYXVsdChtb2RlbCk7XG4gICAgICAgIGNvbm5lY3Rvci5zZW5kKGNyZWF0ZVBNQ29tbWFuZCwgbnVsbCk7XG4gICAgICAgIG1vZGVsLmdldEF0dHJpYnV0ZXMoKS5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZWdpc3RlckF0dHJpYnV0ZShhdHRyaWJ1dGUpIHtcbiAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVCeUlkKGF0dHJpYnV0ZSk7XG4gICAgICAgIGlmIChhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlQnlRdWFsaWZpZXIoYXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3aGVuZXZlciBhbiBhdHRyaWJ1dGUgY2hhbmdlcyBpdHMgdmFsdWUsIHRoZSBzZXJ2ZXIgbmVlZHMgdG8gYmUgbm90aWZpZWRcbiAgICAgICAgLy8gYW5kIGFsbCBvdGhlciBhdHRyaWJ1dGVzIHdpdGggdGhlIHNhbWUgcXVhbGlmaWVyIGFyZSBnaXZlbiB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICBhdHRyaWJ1dGUub25WYWx1ZUNoYW5nZSgoZXZ0KSA9PiB7XG4gICAgICAgICAgICB2YXIgdmFsdWVDaGFuZ2VDb21tYW5kID0gbmV3IFZhbHVlQ2hhbmdlZENvbW1hbmRfMS5kZWZhdWx0KGF0dHJpYnV0ZS5pZCwgZXZ0Lm5ld1ZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50RG9scGhpbi5nZXRDbGllbnRDb25uZWN0b3IoKS5zZW5kKHZhbHVlQ2hhbmdlQ29tbWFuZCwgbnVsbCk7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlLmdldFF1YWxpZmllcigpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGF0dHJzID0gdGhpcy5maW5kQXR0cmlidXRlc0J5RmlsdGVyKChhdHRyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRyICE9PSBhdHRyaWJ1dGUgJiYgYXR0ci5nZXRRdWFsaWZpZXIoKSA9PSBhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXR0cnMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhdHRyLnNldFZhbHVlKGF0dHJpYnV0ZS5nZXRWYWx1ZSgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGF0dHJpYnV0ZS5vblF1YWxpZmllckNoYW5nZSgoZXZ0KSA9PiB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlQXR0ck1ldGFkYXRhQ21kID0gbmV3IENoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZF8xLmRlZmF1bHQoYXR0cmlidXRlLmlkLCBBdHRyaWJ1dGVfMS5kZWZhdWx0LlFVQUxJRklFUl9QUk9QRVJUWSwgZXZ0Lm5ld1ZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuY2xpZW50RG9scGhpbi5nZXRDbGllbnRDb25uZWN0b3IoKS5zZW5kKGNoYW5nZUF0dHJNZXRhZGF0YUNtZCwgbnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGQobW9kZWwpIHtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5oYXMobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZXJlIGFscmVhZHkgaXMgYSBQTSB3aXRoIGlkIFwiICsgbW9kZWwuaWQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhZGRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmhhcyhtb2RlbC5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLnNldChtb2RlbC5pZCwgbW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5hZGRQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZShtb2RlbCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTW9kZWwobW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbFN0b3JlQ2hhbmdlQnVzLnRyaWdnZXIoeyAnZXZlbnRUeXBlJzogVHlwZS5BRERFRCwgJ2NsaWVudFByZXNlbnRhdGlvbk1vZGVsJzogbW9kZWwgfSk7XG4gICAgICAgICAgICBhZGRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkZGVkO1xuICAgIH1cbiAgICByZW1vdmUobW9kZWwpIHtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZW1vdmVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5oYXMobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZVByZXNlbnRhdGlvbk1vZGVsQnlUeXBlKG1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmRlbGV0ZShtb2RlbC5pZCk7XG4gICAgICAgICAgICBtb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGVCeUlkKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZUJ5UXVhbGlmaWVyKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsU3RvcmVDaGFuZ2VCdXMudHJpZ2dlcih7ICdldmVudFR5cGUnOiBUeXBlLlJFTU9WRUQsICdjbGllbnRQcmVzZW50YXRpb25Nb2RlbCc6IG1vZGVsIH0pO1xuICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbW92ZWQ7XG4gICAgfVxuICAgIGZpbmRBdHRyaWJ1dGVzQnlGaWx0ZXIoZmlsdGVyKSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gW107XG4gICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmZvckVhY2goKG1vZGVsKSA9PiB7XG4gICAgICAgICAgICBtb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIoYXR0cikpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGF0dHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG1hdGNoZXM7XG4gICAgfVxuICAgIGFkZFByZXNlbnRhdGlvbk1vZGVsQnlUeXBlKG1vZGVsKSB7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHlwZSA9IG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZTtcbiAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXNlbnRhdGlvbk1vZGVscyA9IHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZS5nZXQodHlwZSk7XG4gICAgICAgIGlmICghcHJlc2VudGF0aW9uTW9kZWxzKSB7XG4gICAgICAgICAgICBwcmVzZW50YXRpb25Nb2RlbHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZS5zZXQodHlwZSwgcHJlc2VudGF0aW9uTW9kZWxzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShwcmVzZW50YXRpb25Nb2RlbHMuaW5kZXhPZihtb2RlbCkgPiAtMSkpIHtcbiAgICAgICAgICAgIHByZXNlbnRhdGlvbk1vZGVscy5wdXNoKG1vZGVsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZShtb2RlbCkge1xuICAgICAgICBpZiAoIW1vZGVsIHx8ICEobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmVzZW50YXRpb25Nb2RlbHMgPSB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuZ2V0KG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgICAgIGlmICghcHJlc2VudGF0aW9uTW9kZWxzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXNlbnRhdGlvbk1vZGVscy5sZW5ndGggPiAtMSkge1xuICAgICAgICAgICAgcHJlc2VudGF0aW9uTW9kZWxzLnNwbGljZShwcmVzZW50YXRpb25Nb2RlbHMuaW5kZXhPZihtb2RlbCksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVzZW50YXRpb25Nb2RlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuZGVsZXRlKG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGlzdFByZXNlbnRhdGlvbk1vZGVsSWRzKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIHZhciBpdGVyID0gdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMua2V5cygpO1xuICAgICAgICB2YXIgbmV4dCA9IGl0ZXIubmV4dCgpO1xuICAgICAgICB3aGlsZSAoIW5leHQuZG9uZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV4dC52YWx1ZSk7XG4gICAgICAgICAgICBuZXh0ID0gaXRlci5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgbGlzdFByZXNlbnRhdGlvbk1vZGVscygpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgaXRlciA9IHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLnZhbHVlcygpO1xuICAgICAgICB2YXIgbmV4dCA9IGl0ZXIubmV4dCgpO1xuICAgICAgICB3aGlsZSAoIW5leHQuZG9uZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV4dC52YWx1ZSk7XG4gICAgICAgICAgICBuZXh0ID0gaXRlci5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuZ2V0KGlkKTtcbiAgICB9XG4gICAgZmluZEFsbFByZXNlbnRhdGlvbk1vZGVsQnlUeXBlKHR5cGUpIHtcbiAgICAgICAgaWYgKCF0eXBlIHx8ICF0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZS5nZXQodHlwZSkuc2xpY2UoMCk7IC8vIHNsaWNlIGlzIHVzZWQgdG8gY2xvbmUgdGhlIGFycmF5XG4gICAgfVxuICAgIGRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsKG1vZGVsLCBub3RpZnkpIHtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zUHJlc2VudGF0aW9uTW9kZWwobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShtb2RlbCk7XG4gICAgICAgICAgICBpZiAoIW5vdGlmeSB8fCBtb2RlbC5jbGllbnRTaWRlT25seSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xpZW50RG9scGhpbi5nZXRDbGllbnRDb25uZWN0b3IoKS5zZW5kKG5ldyBEZWxldGVkUHJlc2VudGF0aW9uTW9kZWxOb3RpZmljYXRpb25fMS5kZWZhdWx0KG1vZGVsLmlkKSwgbnVsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29udGFpbnNQcmVzZW50YXRpb25Nb2RlbChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuaGFzKGlkKTtcbiAgICB9XG4gICAgYWRkQXR0cmlidXRlQnlJZChhdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUgfHwgdGhpcy5hdHRyaWJ1dGVzUGVySWQuaGFzKGF0dHJpYnV0ZS5pZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNQZXJJZC5zZXQoYXR0cmlidXRlLmlkLCBhdHRyaWJ1dGUpO1xuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVCeUlkKGF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZSB8fCAhdGhpcy5hdHRyaWJ1dGVzUGVySWQuaGFzKGF0dHJpYnV0ZS5pZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNQZXJJZC5kZWxldGUoYXR0cmlidXRlLmlkKTtcbiAgICB9XG4gICAgZmluZEF0dHJpYnV0ZUJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1BlcklkLmdldChpZCk7XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZUJ5UXVhbGlmaWVyKGF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZSB8fCAhYXR0cmlidXRlLmdldFF1YWxpZmllcigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmF0dHJpYnV0ZXNQZXJRdWFsaWZpZXIuZ2V0KGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSk7XG4gICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyLnNldChhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCksIGF0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpID4gLTEpKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVBdHRyaWJ1dGVCeVF1YWxpZmllcihhdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUgfHwgIWF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyLmdldChhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpO1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPiAtMSkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5zcGxpY2UoYXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyLmRlbGV0ZShhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmRBbGxBdHRyaWJ1dGVzQnlRdWFsaWZpZXIocXVhbGlmaWVyKSB7XG4gICAgICAgIGlmICghcXVhbGlmaWVyIHx8ICF0aGlzLmF0dHJpYnV0ZXNQZXJRdWFsaWZpZXIuaGFzKHF1YWxpZmllcikpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyLmdldChxdWFsaWZpZXIpLnNsaWNlKDApOyAvLyBzbGljZSBpcyB1c2VkIHRvIGNsb25lIHRoZSBhcnJheVxuICAgIH1cbiAgICBvbk1vZGVsU3RvcmVDaGFuZ2UoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMubW9kZWxTdG9yZUNoYW5nZUJ1cy5vbkV2ZW50KGV2ZW50SGFuZGxlcik7XG4gICAgfVxuICAgIG9uTW9kZWxTdG9yZUNoYW5nZUZvclR5cGUocHJlc2VudGF0aW9uTW9kZWxUeXBlLCBldmVudEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5tb2RlbFN0b3JlQ2hhbmdlQnVzLm9uRXZlbnQocG1TdG9yZUV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChwbVN0b3JlRXZlbnQuY2xpZW50UHJlc2VudGF0aW9uTW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlID09IHByZXNlbnRhdGlvbk1vZGVsVHlwZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlcihwbVN0b3JlRXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkNsaWVudE1vZGVsU3RvcmUgPSBDbGllbnRNb2RlbFN0b3JlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1DbGllbnRNb2RlbFN0b3JlLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBFdmVudEJ1c18xID0gcmVxdWlyZSgnLi9FdmVudEJ1cycpO1xudmFyIHByZXNlbnRhdGlvbk1vZGVsSW5zdGFuY2VDb3VudCA9IDA7IC8vIHRvZG8gZGs6IGNvbnNpZGVyIG1ha2luZyB0aGlzIHN0YXRpYyBpbiBjbGFzc1xuY2xhc3MgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBwcmVzZW50YXRpb25Nb2RlbFR5cGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVsVHlwZSA9IHByZXNlbnRhdGlvbk1vZGVsVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHRoaXMuY2xpZW50U2lkZU9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIGlkICE9PSAndW5kZWZpbmVkJyAmJiBpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gKHByZXNlbnRhdGlvbk1vZGVsSW5zdGFuY2VDb3VudCsrKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW52YWxpZEJ1cyA9IG5ldyBFdmVudEJ1c18xLmRlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5kaXJ0eVZhbHVlQ2hhbmdlQnVzID0gbmV3IEV2ZW50QnVzXzEuZGVmYXVsdCgpO1xuICAgIH1cbiAgICAvLyB0b2RvIGRrOiBhbGlnbiB3aXRoIEphdmEgdmVyc2lvbjogbW92ZSB0byBDbGllbnREb2xwaGluIGFuZCBhdXRvLWFkZCB0byBtb2RlbCBzdG9yZVxuICAgIC8qKiBhIGNvcHkgY29uc3RydWN0b3IgZm9yIGFueXRoaW5nIGJ1dCBJRHMuIFBlciBkZWZhdWx0LCBjb3BpZXMgYXJlIGNsaWVudCBzaWRlIG9ubHksIG5vIGF1dG9tYXRpYyB1cGRhdGUgYXBwbGllcy4gKi9cbiAgICBjb3B5KCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IENsaWVudFByZXNlbnRhdGlvbk1vZGVsKG51bGwsIHRoaXMucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgcmVzdWx0LmNsaWVudFNpZGVPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlQ29weSA9IGF0dHJpYnV0ZS5jb3B5KCk7XG4gICAgICAgICAgICByZXN1bHQuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZUNvcHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgLy9hZGQgYXJyYXkgb2YgYXR0cmlidXRlc1xuICAgIGFkZEF0dHJpYnV0ZXMoYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZXMgfHwgYXR0cmlidXRlcy5sZW5ndGggPCAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2goYXR0ciA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZEF0dHJpYnV0ZShhdHRyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZEF0dHJpYnV0ZShhdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUgfHwgKHRoaXMuYXR0cmlidXRlcy5pbmRleE9mKGF0dHJpYnV0ZSkgPiAtMSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoYXR0cmlidXRlLnByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFscmVhZHkgaXMgYW4gYXR0cmlidXRlIHdpdGggcHJvcGVydHkgbmFtZTogXCIgKyBhdHRyaWJ1dGUucHJvcGVydHlOYW1lXG4gICAgICAgICAgICAgICAgKyBcIiBpbiBwcmVzZW50YXRpb24gbW9kZWwgd2l0aCBpZDogXCIgKyB0aGlzLmlkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlLmdldFF1YWxpZmllcigpICYmIHRoaXMuZmluZEF0dHJpYnV0ZUJ5UXVhbGlmaWVyKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZXJlIGFscmVhZHkgaXMgYW4gYXR0cmlidXRlIHdpdGggcXVhbGlmaWVyOiBcIiArIGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKVxuICAgICAgICAgICAgICAgICsgXCIgaW4gcHJlc2VudGF0aW9uIG1vZGVsIHdpdGggaWQ6IFwiICsgdGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlLnNldFByZXNlbnRhdGlvbk1vZGVsKHRoaXMpO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMucHVzaChhdHRyaWJ1dGUpO1xuICAgICAgICBhdHRyaWJ1dGUub25WYWx1ZUNoYW5nZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmludmFsaWRCdXMudHJpZ2dlcih7IHNvdXJjZTogdGhpcyB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uSW52YWxpZGF0ZWQoaGFuZGxlSW52YWxpZGF0ZSkge1xuICAgICAgICB0aGlzLmludmFsaWRCdXMub25FdmVudChoYW5kbGVJbnZhbGlkYXRlKTtcbiAgICB9XG4gICAgLyoqIHJldHVybnMgYSBjb3B5IG9mIHRoZSBpbnRlcm5hbCBzdGF0ZSAqL1xuICAgIGdldEF0dHJpYnV0ZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXMuc2xpY2UoMCk7XG4gICAgfVxuICAgIGdldEF0KHByb3BlcnR5TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcbiAgICB9XG4gICAgZmluZEFsbEF0dHJpYnV0ZXNCeVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICBpZiAoIXByb3BlcnR5TmFtZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlLnByb3BlcnR5TmFtZSA9PSBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoIXByb3BlcnR5TmFtZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKCh0aGlzLmF0dHJpYnV0ZXNbaV0ucHJvcGVydHlOYW1lID09IHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmaW5kQXR0cmlidXRlQnlRdWFsaWZpZXIocXVhbGlmaWVyKSB7XG4gICAgICAgIGlmICghcXVhbGlmaWVyKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzW2ldLmdldFF1YWxpZmllcigpID09IHF1YWxpZmllcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGZpbmRBdHRyaWJ1dGVCeUlkKGlkKSB7XG4gICAgICAgIGlmICghaWQpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmF0dHJpYnV0ZXNbaV0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBzeW5jV2l0aChzb3VyY2VQcmVzZW50YXRpb25Nb2RlbCkge1xuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMuZm9yRWFjaCgodGFyZ2V0QXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICB2YXIgc291cmNlQXR0cmlidXRlID0gc291cmNlUHJlc2VudGF0aW9uTW9kZWwuZ2V0QXQodGFyZ2V0QXR0cmlidXRlLnByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICBpZiAoc291cmNlQXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0QXR0cmlidXRlLnN5bmNXaXRoKHNvdXJjZUF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwgPSBDbGllbnRQcmVzZW50YXRpb25Nb2RlbDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xpZW50UHJlc2VudGF0aW9uTW9kZWwuanMubWFwXG4iLCIvKiBDb3B5cmlnaHQgMjAxNiBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuXG5cbmltcG9ydCB7IGV4aXN0cyB9IGZyb20gJy4vdXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2RlY3tcblxuICAgIHN0YXRpYyBlbmNvZGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ3AnOiBjb21tYW5kLnBtSWQsXG4gICAgICAgICAgICAndCc6IGNvbW1hbmQucG1UeXBlLFxuICAgICAgICAgICAgJ2EnOiBjb21tYW5kLmF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgICAgICAgICAnbic6IGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICdpJzogYXR0cmlidXRlLmlkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKGF0dHJpYnV0ZS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnYgPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICdpZCc6ICdDcmVhdGVQcmVzZW50YXRpb25Nb2RlbCdcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVjb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdpZCc6ICdDcmVhdGVQcmVzZW50YXRpb25Nb2RlbCcsXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogXCJvcmcub3BlbmRvbHBoaW4uY29yZS5jb21tLkNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZFwiLFxuICAgICAgICAgICAgJ2NsaWVudFNpZGVPbmx5JzogZmFsc2UsXG4gICAgICAgICAgICAncG1JZCc6IGNvbW1hbmQucCxcbiAgICAgICAgICAgICdwbVR5cGUnOiBjb21tYW5kLnQsXG4gICAgICAgICAgICAnYXR0cmlidXRlcyc6IGNvbW1hbmQuYS5tYXAoKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eU5hbWUnOiBhdHRyaWJ1dGUubixcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogYXR0cmlidXRlLmksXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGV4aXN0cyhhdHRyaWJ1dGUudik/IGF0dHJpYnV0ZS52IDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgJ3F1YWxpZmllcic6IG51bGxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZW5jb2RlVmFsdWVDaGFuZ2VkQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgICAnYSc6IGNvbW1hbmQuYXR0cmlidXRlSWRcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGV4aXN0cyhjb21tYW5kLm9sZFZhbHVlKSkge1xuICAgICAgICAgICAgcmVzdWx0Lm8gPSBjb21tYW5kLm9sZFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChleGlzdHMoY29tbWFuZC5uZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5uID0gY29tbWFuZC5uZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuaWQgPSAnVmFsdWVDaGFuZ2VkJztcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVjb2RlVmFsdWVDaGFuZ2VkQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnaWQnOiAnVmFsdWVDaGFuZ2VkJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiBcIm9yZy5vcGVuZG9scGhpbi5jb3JlLmNvbW0uVmFsdWVDaGFuZ2VkQ29tbWFuZFwiLFxuICAgICAgICAgICAgJ2F0dHJpYnV0ZUlkJzogY29tbWFuZC5hLFxuICAgICAgICAgICAgJ29sZFZhbHVlJzogZXhpc3RzKGNvbW1hbmQubyk/IGNvbW1hbmQubyA6IG51bGwsXG4gICAgICAgICAgICAnbmV3VmFsdWUnOiBleGlzdHMoY29tbWFuZC5uKT8gY29tbWFuZC5uIDogbnVsbFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBlbmNvZGUoY29tbWFuZHMpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY29tbWFuZHMubWFwKChjb21tYW5kKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tbWFuZC5pZCA9PT0gJ0NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmVuY29kZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gJ1ZhbHVlQ2hhbmdlZCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5lbmNvZGVWYWx1ZUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVjb2RlKHRyYW5zbWl0dGVkKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGVvZiB0cmFuc21pdHRlZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRyYW5zbWl0dGVkKS5tYXAoZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29tbWFuZC5pZCA9PT0gJ0NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5kZWNvZGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSAnVmFsdWVDaGFuZ2VkJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5kZWNvZGVWYWx1ZUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRyYW5zbWl0dGVkO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jbGFzcyBDb21tYW5kIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IFwiZG9scGhpbi1jb3JlLWNvbW1hbmRcIjtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBDb21tYW5kO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db21tYW5kLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBWYWx1ZUNoYW5nZWRDb21tYW5kXzEgPSByZXF1aXJlKCcuL1ZhbHVlQ2hhbmdlZENvbW1hbmQnKTtcbi8qKiBBIEJhdGNoZXIgdGhhdCBkb2VzIG5vIGJhdGNoaW5nIGJ1dCBtZXJlbHkgdGFrZXMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIHF1ZXVlIGFzIHRoZSBzaW5nbGUgaXRlbSBpbiB0aGUgYmF0Y2ggKi9cbmNsYXNzIE5vQ29tbWFuZEJhdGNoZXIge1xuICAgIGJhdGNoKHF1ZXVlKSB7XG4gICAgICAgIHJldHVybiBbcXVldWUuc2hpZnQoKV07XG4gICAgfVxufVxuZXhwb3J0cy5Ob0NvbW1hbmRCYXRjaGVyID0gTm9Db21tYW5kQmF0Y2hlcjtcbi8qKiBBIGJhdGNoZXIgdGhhdCBiYXRjaGVzIHRoZSBibGluZHMgKGNvbW1hbmRzIHdpdGggbm8gY2FsbGJhY2spIGFuZCBvcHRpb25hbGx5IGFsc28gZm9sZHMgdmFsdWUgY2hhbmdlcyAqL1xuY2xhc3MgQmxpbmRDb21tYW5kQmF0Y2hlciB7XG4gICAgLyoqIGZvbGRpbmc6IHdoZXRoZXIgd2Ugc2hvdWxkIHRyeSBmb2xkaW5nIFZhbHVlQ2hhbmdlZENvbW1hbmRzICovXG4gICAgY29uc3RydWN0b3IoZm9sZGluZyA9IHRydWUsIG1heEJhdGNoU2l6ZSA9IDUwKSB7XG4gICAgICAgIHRoaXMuZm9sZGluZyA9IGZvbGRpbmc7XG4gICAgICAgIHRoaXMubWF4QmF0Y2hTaXplID0gbWF4QmF0Y2hTaXplO1xuICAgIH1cbiAgICBiYXRjaChxdWV1ZSkge1xuICAgICAgICBsZXQgYmF0Y2ggPSBbXTtcbiAgICAgICAgY29uc3QgbiA9IE1hdGgubWluKHF1ZXVlLmxlbmd0aCwgdGhpcy5tYXhCYXRjaFNpemUpO1xuICAgICAgICBmb3IgKGxldCBjb3VudGVyID0gMDsgY291bnRlciA8IG47IGNvdW50ZXIrKykge1xuICAgICAgICAgICAgY29uc3QgY2FuZGlkYXRlID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvbGRpbmcgJiYgY2FuZGlkYXRlLmNvbW1hbmQgaW5zdGFuY2VvZiBWYWx1ZUNoYW5nZWRDb21tYW5kXzEuZGVmYXVsdCAmJiAoIWNhbmRpZGF0ZS5oYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhbkNtZCA9IGNhbmRpZGF0ZS5jb21tYW5kO1xuICAgICAgICAgICAgICAgIGlmIChiYXRjaC5sZW5ndGggPiAwICYmIGJhdGNoW2JhdGNoLmxlbmd0aCAtIDFdLmNvbW1hbmQgaW5zdGFuY2VvZiBWYWx1ZUNoYW5nZWRDb21tYW5kXzEuZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXRjaENtZCA9IGJhdGNoW2JhdGNoLmxlbmd0aCAtIDFdLmNvbW1hbmQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW5DbWQuYXR0cmlidXRlSWQgPT0gYmF0Y2hDbWQuYXR0cmlidXRlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhdGNoQ21kLm5ld1ZhbHVlID0gY2FuQ21kLm5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmF0Y2gucHVzaChjYW5kaWRhdGUpOyAvLyB3ZSBjYW5ub3QgbWVyZ2UsIHNvIGJhdGNoIHRoZSBjYW5kaWRhdGVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2gucHVzaChjYW5kaWRhdGUpOyAvLyB3ZSBjYW5ub3QgbWVyZ2UsIHNvIGJhdGNoIHRoZSBjYW5kaWRhdGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiYXRjaC5wdXNoKGNhbmRpZGF0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FuZGlkYXRlLmhhbmRsZXIgfHxcbiAgICAgICAgICAgICAgICAoY2FuZGlkYXRlLmNvbW1hbmRbJ2NsYXNzTmFtZSddID09IFwib3JnLm9wZW5kb2xwaGluLmNvcmUuY29tbS5FbXB0eU5vdGlmaWNhdGlvblwiKSAvLyBvciB1bmtub3duIGNsaWVudCBzaWRlIGVmZmVjdFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7IC8vIGxlYXZlIHRoZSBsb29wXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhdGNoO1xuICAgIH1cbn1cbmV4cG9ydHMuQmxpbmRDb21tYW5kQmF0Y2hlciA9IEJsaW5kQ29tbWFuZEJhdGNoZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbW1hbmRCYXRjaGVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jbGFzcyBDb21tYW5kQ29uc3RhbnRzIHtcbn1cbkNvbW1hbmRDb25zdGFudHMuRE9MUEhJTl9QTEFURk9STV9QUkVGSVggPSAnZG9scGhpbl9wbGF0Zm9ybV9pbnRlcm5fJztcbkNvbW1hbmRDb25zdGFudHMuQ1JFQVRFX0NPTlRFWFRfQ09NTUFORF9OQU1FID0gQ29tbWFuZENvbnN0YW50cy5ET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdpbml0Q2xpZW50Q29udGV4dCc7XG5Db21tYW5kQ29uc3RhbnRzLkRFU1RST1lfQ09OVEVYVF9DT01NQU5EX05BTUUgPSBDb21tYW5kQ29uc3RhbnRzLkRPTFBISU5fUExBVEZPUk1fUFJFRklYICsgJ2Rpc2Nvbm5lY3RDbGllbnRDb250ZXh0JztcbkNvbW1hbmRDb25zdGFudHMuQ1JFQVRFX0NPTlRST0xMRVJfQ09NTUFORF9OQU1FID0gQ29tbWFuZENvbnN0YW50cy5ET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdyZWdpc3RlckNvbnRyb2xsZXInO1xuQ29tbWFuZENvbnN0YW50cy5ERVNUUk9ZX0NPTlRST0xMRVJfQ09NTUFORF9OQU1FID0gQ29tbWFuZENvbnN0YW50cy5ET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdkZXN0cm95Q29udHJvbGxlcic7XG5Db21tYW5kQ29uc3RhbnRzLkNBTExfQ09OVFJPTExFUl9BQ1RJT05fQ09NTUFORF9OQU1FID0gQ29tbWFuZENvbnN0YW50cy5ET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdjYWxsQ29udHJvbGxlckFjdGlvbic7XG5Db21tYW5kQ29uc3RhbnRzLlNUQVJUX0xPTkdfUE9MTF9DT01NQU5EX05BTUUgPSBDb21tYW5kQ29uc3RhbnRzLkRPTFBISU5fUExBVEZPUk1fUFJFRklYICsgJ2xvbmdQb2xsJztcbkNvbW1hbmRDb25zdGFudHMuSU5URVJSVVBUX0xPTkdfUE9MTF9DT01NQU5EX05BTUUgPSBDb21tYW5kQ29uc3RhbnRzLkRPTFBISU5fUExBVEZPUk1fUFJFRklYICsgJ3JlbGVhc2UnO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gQ29tbWFuZENvbnN0YW50cztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q29tbWFuZENvbnN0YW50cy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgQ29tbWFuZF8xID0gcmVxdWlyZSgnLi9Db21tYW5kJyk7XG5jbGFzcyBDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IocHJlc2VudGF0aW9uTW9kZWwpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHRoaXMuY2xpZW50U2lkZU9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pZCA9IFwiQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxcIjtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIm9yZy5vcGVuZG9scGhpbi5jb3JlLmNvbW0uQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kXCI7XG4gICAgICAgIHRoaXMucG1JZCA9IHByZXNlbnRhdGlvbk1vZGVsLmlkO1xuICAgICAgICB0aGlzLnBtVHlwZSA9IHByZXNlbnRhdGlvbk1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZTtcbiAgICAgICAgdmFyIGF0dHJzID0gdGhpcy5hdHRyaWJ1dGVzO1xuICAgICAgICBwcmVzZW50YXRpb25Nb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0cnMucHVzaCh7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBhdHRyLnByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICBpZDogYXR0ci5pZCxcbiAgICAgICAgICAgICAgICBxdWFsaWZpZXI6IGF0dHIuZ2V0UXVhbGlmaWVyKCksXG4gICAgICAgICAgICAgICAgdmFsdWU6IGF0dHIuZ2V0VmFsdWUoKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IENyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBDb21tYW5kXzEgPSByZXF1aXJlKCcuL0NvbW1hbmQnKTtcbmNsYXNzIERlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvbiBleHRlbmRzIENvbW1hbmRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihwbUlkKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMucG1JZCA9IHBtSWQ7XG4gICAgICAgIHRoaXMuaWQgPSAnRGVsZXRlZFByZXNlbnRhdGlvbk1vZGVsJztcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIm9yZy5vcGVuZG9scGhpbi5jb3JlLmNvbW0uRGVsZXRlZFByZXNlbnRhdGlvbk1vZGVsTm90aWZpY2F0aW9uXCI7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gRGVsZXRlZFByZXNlbnRhdGlvbk1vZGVsTm90aWZpY2F0aW9uO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1EZWxldGVkUHJlc2VudGF0aW9uTW9kZWxOb3RpZmljYXRpb24uanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IENsaWVudENvbm5lY3Rvcl8xID0gcmVxdWlyZShcIi4vQ2xpZW50Q29ubmVjdG9yXCIpO1xuY29uc3QgQ2xpZW50RG9scGhpbl8xID0gcmVxdWlyZShcIi4vQ2xpZW50RG9scGhpblwiKTtcbmNvbnN0IENsaWVudE1vZGVsU3RvcmVfMSA9IHJlcXVpcmUoXCIuL0NsaWVudE1vZGVsU3RvcmVcIik7XG5jb25zdCBIdHRwVHJhbnNtaXR0ZXJfMSA9IHJlcXVpcmUoXCIuL0h0dHBUcmFuc21pdHRlclwiKTtcbmNvbnN0IE5vVHJhbnNtaXR0ZXJfMSA9IHJlcXVpcmUoXCIuL05vVHJhbnNtaXR0ZXJcIik7XG5jbGFzcyBEb2xwaGluQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucmVzZXRfID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2xhY2tNU18gPSAzMDA7XG4gICAgICAgIHRoaXMubWF4QmF0Y2hTaXplXyA9IDUwO1xuICAgICAgICB0aGlzLnN1cHBvcnRDT1JTXyA9IGZhbHNlO1xuICAgIH1cbiAgICB1cmwodXJsKSB7XG4gICAgICAgIHRoaXMudXJsXyA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJlc2V0KHJlc2V0KSB7XG4gICAgICAgIHRoaXMucmVzZXRfID0gcmVzZXQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBzbGFja01TKHNsYWNrTVMpIHtcbiAgICAgICAgdGhpcy5zbGFja01TXyA9IHNsYWNrTVM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBtYXhCYXRjaFNpemUobWF4QmF0Y2hTaXplKSB7XG4gICAgICAgIHRoaXMubWF4QmF0Y2hTaXplXyA9IG1heEJhdGNoU2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHN1cHBvcnRDT1JTKHN1cHBvcnRDT1JTKSB7XG4gICAgICAgIHRoaXMuc3VwcG9ydENPUlNfID0gc3VwcG9ydENPUlM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBlcnJvckhhbmRsZXIoZXJyb3JIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyXyA9IGVycm9ySGFuZGxlcjtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGhlYWRlcnNJbmZvKGhlYWRlcnNJbmZvKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyc0luZm9fID0gaGVhZGVyc0luZm87XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPcGVuRG9scGhpbiBqcyBmb3VuZFwiKTtcbiAgICAgICAgdmFyIGNsaWVudERvbHBoaW4gPSBuZXcgQ2xpZW50RG9scGhpbl8xLmRlZmF1bHQoKTtcbiAgICAgICAgdmFyIHRyYW5zbWl0dGVyO1xuICAgICAgICBpZiAodGhpcy51cmxfICE9IG51bGwgJiYgdGhpcy51cmxfLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRyYW5zbWl0dGVyID0gbmV3IEh0dHBUcmFuc21pdHRlcl8xLmRlZmF1bHQodGhpcy51cmxfLCB0aGlzLnJlc2V0XywgXCJVVEYtOFwiLCB0aGlzLmVycm9ySGFuZGxlcl8sIHRoaXMuc3VwcG9ydENPUlNfLCB0aGlzLmhlYWRlcnNJbmZvXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cmFuc21pdHRlciA9IG5ldyBOb1RyYW5zbWl0dGVyXzEuZGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICAgIGNsaWVudERvbHBoaW4uc2V0Q2xpZW50Q29ubmVjdG9yKG5ldyBDbGllbnRDb25uZWN0b3JfMS5DbGllbnRDb25uZWN0b3IodHJhbnNtaXR0ZXIsIGNsaWVudERvbHBoaW4sIHRoaXMuc2xhY2tNU18sIHRoaXMubWF4QmF0Y2hTaXplXykpO1xuICAgICAgICBjbGllbnREb2xwaGluLnNldENsaWVudE1vZGVsU3RvcmUobmV3IENsaWVudE1vZGVsU3RvcmVfMS5DbGllbnRNb2RlbFN0b3JlKGNsaWVudERvbHBoaW4pKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJDbGllbnREb2xwaGluIGluaXRpYWxpemVkXCIpO1xuICAgICAgICByZXR1cm4gY2xpZW50RG9scGhpbjtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBEb2xwaGluQnVpbGRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RG9scGhpbkJ1aWxkZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbmNsYXNzIEV2ZW50QnVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzID0gW107XG4gICAgfVxuICAgIG9uRXZlbnQoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKGV2ZW50SGFuZGxlcik7XG4gICAgfVxuICAgIHRyaWdnZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLmZvckVhY2goaGFuZGxlID0+IGhhbmRsZShldmVudCkpO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEV2ZW50QnVzO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1FdmVudEJ1cy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgQ29kZWNfMSA9IHJlcXVpcmUoXCIuL0NvZGVjXCIpO1xuY2xhc3MgSHR0cFRyYW5zbWl0dGVyIHtcbiAgICBjb25zdHJ1Y3Rvcih1cmwsIHJlc2V0ID0gdHJ1ZSwgY2hhcnNldCA9IFwiVVRGLThcIiwgZXJyb3JIYW5kbGVyID0gbnVsbCwgc3VwcG9ydENPUlMgPSBmYWxzZSwgaGVhZGVyc0luZm8gPSBudWxsKSB7XG4gICAgICAgIHRoaXMudXJsID0gdXJsO1xuICAgICAgICB0aGlzLmNoYXJzZXQgPSBjaGFyc2V0O1xuICAgICAgICB0aGlzLkh0dHBDb2RlcyA9IHtcbiAgICAgICAgICAgIGZpbmlzaGVkOiA0LFxuICAgICAgICAgICAgc3VjY2VzczogMjAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyID0gZXJyb3JIYW5kbGVyO1xuICAgICAgICB0aGlzLnN1cHBvcnRDT1JTID0gc3VwcG9ydENPUlM7XG4gICAgICAgIHRoaXMuaGVhZGVyc0luZm8gPSBoZWFkZXJzSW5mbztcbiAgICAgICAgdGhpcy5odHRwID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHRoaXMuc2lnID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIGlmICh0aGlzLnN1cHBvcnRDT1JTKSB7XG4gICAgICAgICAgICBpZiAoXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB0aGlzLmh0dHApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTsgLy8gTk9URTogZG9pbmcgdGhpcyBmb3Igbm9uIENPUlMgcmVxdWVzdHMgaGFzIG5vIGltcGFjdFxuICAgICAgICAgICAgICAgIHRoaXMuc2lnLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2RlYyA9IG5ldyBDb2RlY18xLmRlZmF1bHQoKTtcbiAgICAgICAgaWYgKHJlc2V0KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnSHR0cFRyYW5zbWl0dGVyLmludmFsaWRhdGUoKSBpcyBkZXByZWNhdGVkLiBVc2UgQ2xpZW50RG9scGhpbi5yZXNldChPblN1Y2Nlc3NIYW5kbGVyKSBpbnN0ZWFkJyk7XG4gICAgICAgICAgICB0aGlzLmludmFsaWRhdGUoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0cmFuc21pdChjb21tYW5kcywgb25Eb25lKSB7XG4gICAgICAgIHRoaXMuaHR0cC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcignb25lcnJvcicsIFwiXCIpO1xuICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmh0dHAucmVhZHlTdGF0ZSA9PSB0aGlzLkh0dHBDb2Rlcy5maW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmh0dHAuc3RhdHVzID09IHRoaXMuSHR0cENvZGVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9IHRoaXMuaHR0cC5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlQ29tbWFuZHMgPSB0aGlzLmNvZGVjLmRlY29kZShyZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG9uZShyZXNwb25zZUNvbW1hbmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VycmVkIHBhcnNpbmcgcmVzcG9uc2VUZXh0OiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluY29ycmVjdCByZXNwb25zZVRleHQ6IFwiLCByZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoJ2FwcGxpY2F0aW9uJywgXCJIdHRwVHJhbnNtaXR0ZXI6IEluY29ycmVjdCByZXNwb25zZVRleHQ6IFwiICsgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcignYXBwbGljYXRpb24nLCBcIkh0dHBUcmFuc21pdHRlcjogZW1wdHkgcmVzcG9uc2VUZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcignYXBwbGljYXRpb24nLCBcIkh0dHBUcmFuc21pdHRlcjogSFRUUCBTdGF0dXMgIT0gMjAwXCIpO1xuICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odHRwLm9wZW4oJ1BPU1QnLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyh0aGlzLmh0dHApO1xuICAgICAgICBpZiAoXCJvdmVycmlkZU1pbWVUeXBlXCIgaW4gdGhpcy5odHRwKSB7XG4gICAgICAgICAgICB0aGlzLmh0dHAub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9XCIgKyB0aGlzLmNoYXJzZXQpOyAvLyB0b2RvIG1ha2UgaW5qZWN0YWJsZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaHR0cC5zZW5kKHRoaXMuY29kZWMuZW5jb2RlKGNvbW1hbmRzKSk7XG4gICAgfVxuICAgIHNldEhlYWRlcnMoaHR0cFJlcSkge1xuICAgICAgICBpZiAodGhpcy5oZWFkZXJzSW5mbykge1xuICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmhlYWRlcnNJbmZvKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGVhZGVyc0luZm8uaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cFJlcS5zZXRSZXF1ZXN0SGVhZGVyKGksIHRoaXMuaGVhZGVyc0luZm9baV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBoYW5kbGVFcnJvcihraW5kLCBtZXNzYWdlKSB7XG4gICAgICAgIHZhciBlcnJvckV2ZW50ID0geyBraW5kOiBraW5kLCB1cmw6IHRoaXMudXJsLCBodHRwU3RhdHVzOiB0aGlzLmh0dHAuc3RhdHVzLCBtZXNzYWdlOiBtZXNzYWdlIH07XG4gICAgICAgIGlmICh0aGlzLmVycm9ySGFuZGxlcikge1xuICAgICAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIoZXJyb3JFdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VycmVkOiBcIiwgZXJyb3JFdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2lnbmFsKGNvbW1hbmQpIHtcbiAgICAgICAgdGhpcy5zaWcub3BlbignUE9TVCcsIHRoaXMudXJsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRIZWFkZXJzKHRoaXMuc2lnKTtcbiAgICAgICAgdGhpcy5zaWcuc2VuZCh0aGlzLmNvZGVjLmVuY29kZShbY29tbWFuZF0pKTtcbiAgICB9XG4gICAgLy8gRGVwcmVjYXRlZCAhIFVzZSAncmVzZXQoT25TdWNjZXNzSGFuZGxlcikgaW5zdGVhZFxuICAgIGludmFsaWRhdGUoKSB7XG4gICAgICAgIHRoaXMuaHR0cC5vcGVuKCdQT1NUJywgdGhpcy51cmwgKyAnaW52YWxpZGF0ZT8nLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuaHR0cC5zZW5kKCk7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSHR0cFRyYW5zbWl0dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdHRwVHJhbnNtaXR0ZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IFNpZ25hbENvbW1hbmRfMSA9IHJlcXVpcmUoXCIuL1NpZ25hbENvbW1hbmRcIik7XG5jb25zdCBDb21tYW5kQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9Db21tYW5kQ29uc3RhbnRzXCIpO1xuY2xhc3MgSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kIGV4dGVuZHMgU2lnbmFsQ29tbWFuZF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihDb21tYW5kQ29uc3RhbnRzXzEuZGVmYXVsdC5JTlRFUlJVUFRfTE9OR19QT0xMX0NPTU1BTkRfTkFNRSk7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJjb20uY2Fub28uZG9scGhpbi5pbXBsLmNvbW1hbmRzLkludGVycnVwdExvbmdQb2xsQ29tbWFuZFwiO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEludGVycnVwdExvbmdQb2xsQ29tbWFuZDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKipcbiAqIEEgdHJhbnNtaXR0ZXIgdGhhdCBpcyBub3QgdHJhbnNtaXR0aW5nIGF0IGFsbC5cbiAqIEl0IG1heSBzZXJ2ZSBhcyBhIHN0YW5kLWluIHdoZW4gbm8gcmVhbCB0cmFuc21pdHRlciBpcyBuZWVkZWQuXG4gKi9cbmNsYXNzIE5vVHJhbnNtaXR0ZXIge1xuICAgIHRyYW5zbWl0KGNvbW1hbmRzLCBvbkRvbmUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZyBzcGVjaWFsXG4gICAgICAgIG9uRG9uZShbXSk7XG4gICAgfVxuICAgIHNpZ25hbCgpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbiAgICByZXNldCgpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IE5vVHJhbnNtaXR0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5vVHJhbnNtaXR0ZXIuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbmNvbnN0IERvbHBoaW5CdWlsZGVyXzEgPSByZXF1aXJlKFwiLi9Eb2xwaGluQnVpbGRlclwiKTtcbmNvbnN0IEludGVycnVwdExvbmdQb2xsQ29tbWFuZF8xID0gcmVxdWlyZShcIi4vSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kXCIpO1xuY29uc3QgU3RhcnRMb25nUG9sbENvbW1hbmRfMSA9IHJlcXVpcmUoXCIuL1N0YXJ0TG9uZ1BvbGxDb21tYW5kXCIpO1xuLyoqXG4gKiBKUy1mcmllbmRseSBmYWNhZGUgdG8gYXZvaWQgdG9vIG1hbnkgZGVwZW5kZW5jaWVzIGluIHBsYWluIEpTIGNvZGUuXG4gKiBUaGUgbmFtZSBvZiB0aGlzIGZpbGUgaXMgYWxzbyB1c2VkIGZvciB0aGUgaW5pdGlhbCBsb29rdXAgb2YgdGhlXG4gKiBvbmUgamF2YXNjcmlwdCBmaWxlIHRoYXQgY29udGFpbnMgYWxsIHRoZSBkb2xwaGluIGNvZGUuXG4gKiBDaGFuZ2luZyB0aGUgbmFtZSByZXF1aXJlcyB0aGUgYnVpbGQgc3VwcG9ydCBhbmQgYWxsIHVzZXJzXG4gKiB0byBiZSB1cGRhdGVkIGFzIHdlbGwuXG4gKiBEaWVyayBLb2VuaWdcbiAqL1xuLy8gZmFjdG9yeSBtZXRob2QgZm9yIHRoZSBpbml0aWFsaXplZCBkb2xwaGluXG4vLyBEZXByZWNhdGVkICEgVXNlICdtYWtlRG9scGhpbigpIGluc3RlYWRcbmZ1bmN0aW9uIGRvbHBoaW4odXJsLCByZXNldCwgc2xhY2tNUyA9IDMwMCkge1xuICAgIHJldHVybiBtYWtlRG9scGhpbigpLnVybCh1cmwpLnJlc2V0KHJlc2V0KS5zbGFja01TKHNsYWNrTVMpLmJ1aWxkKCk7XG59XG5leHBvcnRzLmRvbHBoaW4gPSBkb2xwaGluO1xuLy8gZmFjdG9yeSBtZXRob2QgdG8gYnVpbGQgYW4gaW5pdGlhbGl6ZWQgZG9scGhpblxuZnVuY3Rpb24gbWFrZURvbHBoaW4oKSB7XG4gICAgcmV0dXJuIG5ldyBEb2xwaGluQnVpbGRlcl8xLmRlZmF1bHQoKTtcbn1cbmV4cG9ydHMubWFrZURvbHBoaW4gPSBtYWtlRG9scGhpbjtcbi8vRmFjdG9yeSBtZXRob2RzIHRvIGhhdmUgYSBiZXR0ZXIgaW50ZWdyYXRpb24gb2YgdHMgc291cmNlcyBpbiBKUyAmIGVzNlxuZnVuY3Rpb24gY3JlYXRlSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kKCkge1xuICAgIHJldHVybiBuZXcgSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kXzEuZGVmYXVsdCgpO1xufVxuZXhwb3J0cy5jcmVhdGVJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQgPSBjcmVhdGVJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQ7XG5mdW5jdGlvbiBjcmVhdGVTdGFydExvbmdQb2xsQ29tbWFuZCgpIHtcbiAgICByZXR1cm4gbmV3IFN0YXJ0TG9uZ1BvbGxDb21tYW5kXzEuZGVmYXVsdCgpO1xufVxuZXhwb3J0cy5jcmVhdGVTdGFydExvbmdQb2xsQ29tbWFuZCA9IGNyZWF0ZVN0YXJ0TG9uZ1BvbGxDb21tYW5kO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1PcGVuRG9scGhpbi5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xuY29uc3QgQ29tbWFuZF8xID0gcmVxdWlyZSgnLi9Db21tYW5kJyk7XG5jbGFzcyBTaWduYWxDb21tYW5kIGV4dGVuZHMgQ29tbWFuZF8xLmRlZmF1bHQge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZCA9IG5hbWU7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJvcmcub3BlbmRvbHBoaW4uY29yZS5jb21tLlNpZ25hbENvbW1hbmRcIjtcbiAgICB9XG59XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmRlZmF1bHQgPSBTaWduYWxDb21tYW5kO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1TaWduYWxDb21tYW5kLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBDb21tYW5kXzEgPSByZXF1aXJlKCcuL0NvbW1hbmQnKTtcbmNvbnN0IENvbW1hbmRDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL0NvbW1hbmRDb25zdGFudHNcIik7XG5jbGFzcyBTdGFydExvbmdQb2xsQ29tbWFuZCBleHRlbmRzIENvbW1hbmRfMS5kZWZhdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pZCA9IENvbW1hbmRDb25zdGFudHNfMS5kZWZhdWx0LlNUQVJUX0xPTkdfUE9MTF9DT01NQU5EX05BTUU7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJjb20uY2Fub28uZG9scGhpbi5pbXBsLmNvbW1hbmRzLlN0YXJ0TG9uZ1BvbGxDb21tYW5kXCI7XG4gICAgfVxufVxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gU3RhcnRMb25nUG9sbENvbW1hbmQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN0YXJ0TG9uZ1BvbGxDb21tYW5kLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jb25zdCBDb21tYW5kXzEgPSByZXF1aXJlKCcuL0NvbW1hbmQnKTtcbmNsYXNzIFZhbHVlQ2hhbmdlZENvbW1hbmQgZXh0ZW5kcyBDb21tYW5kXzEuZGVmYXVsdCB7XG4gICAgY29uc3RydWN0b3IoYXR0cmlidXRlSWQsIG5ld1ZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlSWQgPSBhdHRyaWJ1dGVJZDtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmlkID0gXCJWYWx1ZUNoYW5nZWRcIjtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIm9yZy5vcGVuZG9scGhpbi5jb3JlLmNvbW0uVmFsdWVDaGFuZ2VkQ29tbWFuZFwiO1xuICAgIH1cbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVmYXVsdCA9IFZhbHVlQ2hhbmdlZENvbW1hbmQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZhbHVlQ2hhbmdlZENvbW1hbmQuanMubWFwXG4iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGNvbnNvbGUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgIE1hcCBmcm9tICcuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9tYXAnO1xuaW1wb3J0IHtleGlzdHN9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWFuTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY2xhc3NSZXBvc2l0b3J5KSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlcihjbGFzc1JlcG9zaXRvcnkpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY2xhc3NSZXBvc2l0b3J5LCAnY2xhc3NSZXBvc2l0b3J5Jyk7XG5cbiAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkgPSBjbGFzc1JlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMuYWRkZWRIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVkSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudXBkYXRlZEhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmFycmF5VXBkYXRlZEhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmFsbEFkZGVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxSZW1vdmVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxVcGRhdGVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxBcnJheVVwZGF0ZWRIYW5kbGVycyA9IFtdO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkub25CZWFuQWRkZWQoKHR5cGUsIGJlYW4pID0+IHtcbiAgICAgICAgICAgIGxldCBoYW5kbGVyTGlzdCA9IHNlbGYuYWRkZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbik7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuQWRkZWQtaGFuZGxlciBmb3IgdHlwZScsIHR5cGUsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmFsbEFkZGVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGEgZ2VuZXJhbCBvbkJlYW5BZGRlZC1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5vbkJlYW5SZW1vdmVkKCh0eXBlLCBiZWFuKSA9PiB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlckxpc3QgPSBzZWxmLnJlbW92ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbik7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuUmVtb3ZlZC1oYW5kbGVyIGZvciB0eXBlJywgdHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWxsUmVtb3ZlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKGJlYW4pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhIGdlbmVyYWwgb25CZWFuUmVtb3ZlZC1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5vbkJlYW5VcGRhdGUoKHR5cGUsIGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlckxpc3QgPSBzZWxmLnVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhblVwZGF0ZS1oYW5kbGVyIGZvciB0eXBlJywgdHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWxsVXBkYXRlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYSBnZW5lcmFsIG9uQmVhblVwZGF0ZS1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5vbkFycmF5VXBkYXRlKCh0eXBlLCBiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgbmV3RWxlbWVudHMpID0+IHtcbiAgICAgICAgICAgIGxldCBoYW5kbGVyTGlzdCA9IHNlbGYuYXJyYXlVcGRhdGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKGV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyTGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCBuZXdFbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25BcnJheVVwZGF0ZS1oYW5kbGVyIGZvciB0eXBlJywgdHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWxsQXJyYXlVcGRhdGVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIG5ld0VsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYSBnZW5lcmFsIG9uQXJyYXlVcGRhdGUtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cbiAgICBub3RpZnlCZWFuQ2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLm5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuICAgICAgICBjaGVja1BhcmFtKHByb3BlcnR5TmFtZSwgJ3Byb3BlcnR5TmFtZScpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzUmVwb3NpdG9yeS5ub3RpZnlCZWFuQ2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpO1xuICAgIH1cblxuXG4gICAgbm90aWZ5QXJyYXlDaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIHJlbW92ZWRFbGVtZW50cykge1xuICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIubm90aWZ5QXJyYXlDaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIHJlbW92ZWRFbGVtZW50cyknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuICAgICAgICBjaGVja1BhcmFtKHByb3BlcnR5TmFtZSwgJ3Byb3BlcnR5TmFtZScpO1xuICAgICAgICBjaGVja1BhcmFtKGluZGV4LCAnaW5kZXgnKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb3VudCwgJ2NvdW50Jyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocmVtb3ZlZEVsZW1lbnRzLCAncmVtb3ZlZEVsZW1lbnRzJyk7XG5cbiAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkubm90aWZ5QXJyYXlDaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIHJlbW92ZWRFbGVtZW50cyk7XG4gICAgfVxuXG5cbiAgICBpc01hbmFnZWQoYmVhbikge1xuICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIuaXNNYW5hZ2VkKGJlYW4pJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oYmVhbiwgJ2JlYW4nKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5pc01hbmFnZWQoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIGNyZWF0ZSh0eXBlKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5jcmVhdGUodHlwZSknKTtcbiAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLmNyZWF0ZSgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgYWRkKHR5cGUsIGJlYW4pIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLmFkZCh0eXBlLCBiZWFuKScpO1xuICAgICAgICBjaGVja1BhcmFtKHR5cGUsICd0eXBlJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oYmVhbiwgJ2JlYW4nKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5hZGQoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIGFkZEFsbCh0eXBlLCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5hZGRBbGwodHlwZSwgY29sbGVjdGlvbiknKTtcbiAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbGxlY3Rpb24sICdjb2xsZWN0aW9uJyk7XG5cbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGRvbHBoaW4uYWRkQWxsKCkgW0RQLTddXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG4gICAgfVxuXG5cbiAgICByZW1vdmUoYmVhbikge1xuICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIucmVtb3ZlKGJlYW4pJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oYmVhbiwgJ2JlYW4nKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5yZW1vdmUoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIHJlbW92ZUFsbChjb2xsZWN0aW9uKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5yZW1vdmVBbGwoY29sbGVjdGlvbiknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb2xsZWN0aW9uLCAnY29sbGVjdGlvbicpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLnJlbW92ZUFsbCgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlSWYocHJlZGljYXRlKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5yZW1vdmVJZihwcmVkaWNhdGUpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocHJlZGljYXRlLCAncHJlZGljYXRlJyk7XG5cbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGRvbHBoaW4ucmVtb3ZlSWYoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIG9uQWRkZWQodHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFleGlzdHMoZXZlbnRIYW5kbGVyKSkge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdHlwZTtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vbkFkZGVkKGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHNlbGYuYWxsQWRkZWRIYW5kbGVycyA9IHNlbGYuYWxsQWRkZWRIYW5kbGVycy5jb25jYXQoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxBZGRlZEhhbmRsZXJzID0gc2VsZi5hbGxBZGRlZEhhbmRsZXJzLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLm9uQWRkZWQodHlwZSwgZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi5hZGRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmICghZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmFkZGVkSGFuZGxlcnMuc2V0KHR5cGUsIGhhbmRsZXJMaXN0LmNvbmNhdChldmVudEhhbmRsZXIpKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi5hZGRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25SZW1vdmVkKHR5cGUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghZXhpc3RzKGV2ZW50SGFuZGxlcikpIHtcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IHR5cGU7XG4gICAgICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIub25SZW1vdmVkKGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHNlbGYuYWxsUmVtb3ZlZEhhbmRsZXJzID0gc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMuY29uY2F0KGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsUmVtb3ZlZEhhbmRsZXJzID0gc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIub25SZW1vdmVkKHR5cGUsIGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0odHlwZSwgJ3R5cGUnKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHZhciBoYW5kbGVyTGlzdCA9IHNlbGYucmVtb3ZlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmICghZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnJlbW92ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuY29uY2F0KGV2ZW50SGFuZGxlcikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBzZWxmLnJlbW92ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25CZWFuVXBkYXRlKHR5cGUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghZXhpc3RzKGV2ZW50SGFuZGxlcikpIHtcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IHR5cGU7XG4gICAgICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIub25CZWFuVXBkYXRlKGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHNlbGYuYWxsVXBkYXRlZEhhbmRsZXJzID0gc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMuY29uY2F0KGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsVXBkYXRlZEhhbmRsZXJzID0gc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIub25CZWFuVXBkYXRlKHR5cGUsIGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0odHlwZSwgJ3R5cGUnKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHZhciBoYW5kbGVyTGlzdCA9IHNlbGYudXBkYXRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmICghZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuY29uY2F0KGV2ZW50SGFuZGxlcikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBzZWxmLnVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQXJyYXlVcGRhdGUodHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFleGlzdHMoZXZlbnRIYW5kbGVyKSkge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdHlwZTtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vbkFycmF5VXBkYXRlKGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHNlbGYuYWxsQXJyYXlVcGRhdGVkSGFuZGxlcnMgPSBzZWxmLmFsbEFycmF5VXBkYXRlZEhhbmRsZXJzLmNvbmNhdChldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEFycmF5VXBkYXRlZEhhbmRsZXJzID0gc2VsZi5hbGxBcnJheVVwZGF0ZWRIYW5kbGVycy5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vbkFycmF5VXBkYXRlKHR5cGUsIGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0odHlwZSwgJ3R5cGUnKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHZhciBoYW5kbGVyTGlzdCA9IHNlbGYuYXJyYXlVcGRhdGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKCFleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYXJyYXlVcGRhdGVkSGFuZGxlcnMuc2V0KHR5cGUsIGhhbmRsZXJMaXN0LmNvbmNhdChldmVudEhhbmRsZXIpKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi5hcnJheVVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFycmF5VXBkYXRlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IDIwMTUgQ2Fub28gRW5naW5lZXJpbmcgQUcuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qanNsaW50IGJyb3dzZXJpZnk6IHRydWUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgIE1hcCBmcm9tICcuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9tYXAnO1xuaW1wb3J0ICogYXMgY29uc3RzIGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IHtleGlzdHN9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgYmxvY2tlZCA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzUmVwb3NpdG9yeSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb2xwaGluKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkoZG9scGhpbiknKTtcbiAgICAgICAgY2hlY2tQYXJhbShkb2xwaGluLCAnZG9scGhpbicpO1xuXG4gICAgICAgIHRoaXMuZG9scGhpbiA9IGRvbHBoaW47XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5iZWFuRnJvbURvbHBoaW4gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYmVhblRvRG9scGhpbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jbGFzc0luZm9zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmJlYW5BZGRlZEhhbmRsZXJzID0gW107XG4gICAgICAgIHRoaXMuYmVhblJlbW92ZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLnByb3BlcnR5VXBkYXRlSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5hcnJheVVwZGF0ZUhhbmRsZXJzID0gW107XG4gICAgfVxuXG4gICAgZml4VHlwZSh0eXBlLCB2YWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkJZVEU6XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5TSE9SVDpcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLklOVDpcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkxPTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkZMT0FUOlxuICAgICAgICAgICAgY2FzZSBjb25zdHMuRE9VQkxFOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkJPT0xFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0cnVlJyA9PT0gU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuU1RSSU5HOlxuICAgICAgICAgICAgY2FzZSBjb25zdHMuRU5VTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJvbURvbHBoaW4oY2xhc3NSZXBvc2l0b3J5LCB0eXBlLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIWV4aXN0cyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuRE9MUEhJTl9CRUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc1JlcG9zaXRvcnkuYmVhbkZyb21Eb2xwaGluLmdldChTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkRBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuQ0FMRU5EQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuTE9DQUxfREFURV9GSUVMRF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkxPQ0FMX0RBVEVfVElNRV9GSUVMRF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLlpPTkVEX0RBVEVfVElNRV9GSUVMRF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZml4VHlwZSh0eXBlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b0RvbHBoaW4oY2xhc3NSZXBvc2l0b3J5LCB0eXBlLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIWV4aXN0cyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuRE9MUEhJTl9CRUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc1JlcG9zaXRvcnkuYmVhblRvRG9scGhpbi5nZXQodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuQ0FMRU5EQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHZhbHVlLnRvSVNPU3RyaW5nKCkgOiB2YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkxPQ0FMX0RBVEVfRklFTERfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuTE9DQUxfREFURV9USU1FX0ZJRUxEX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHZhbHVlLnRvSVNPU3RyaW5nKCkgOiB2YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLlpPTkVEX0RBVEVfVElNRV9GSUVMRF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZS50b0lTT1N0cmluZygpIDogdmFsdWU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpeFR5cGUodHlwZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZExpc3RTcGxpY2UoY2xhc3NSZXBvc2l0b3J5LCBtb2RlbElkLCBwcm9wZXJ0eU5hbWUsIGZyb20sIHRvLCBuZXdFbGVtZW50cykge1xuICAgICAgICBsZXQgZG9scGhpbiA9IGNsYXNzUmVwb3NpdG9yeS5kb2xwaGluO1xuICAgICAgICBsZXQgbW9kZWwgPSBkb2xwaGluLmZpbmRQcmVzZW50YXRpb25Nb2RlbEJ5SWQobW9kZWxJZCk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKGV4aXN0cyhtb2RlbCkpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc0luZm8gPSBjbGFzc1JlcG9zaXRvcnkuY2xhc3Nlcy5nZXQobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgICAgIGxldCB0eXBlID0gY2xhc3NJbmZvW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICBpZiAoZXhpc3RzKHR5cGUpKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ0BAQCBTT1VSQ0VfU1lTVEVNIEBAQCcsIG51bGwsICdjbGllbnQnKSxcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ3NvdXJjZScsIG51bGwsIG1vZGVsSWQpLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnYXR0cmlidXRlJywgbnVsbCwgcHJvcGVydHlOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ2Zyb20nLCBudWxsLCBmcm9tKSxcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ3RvJywgbnVsbCwgdG8pLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnY291bnQnLCBudWxsLCBuZXdFbGVtZW50cy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goZG9scGhpbi5hdHRyaWJ1dGUoaW5kZXgudG9TdHJpbmcoKSwgbnVsbCwgc2VsZi50b0RvbHBoaW4oY2xhc3NSZXBvc2l0b3J5LCB0eXBlLCBlbGVtZW50KSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRvbHBoaW4ucHJlc2VudGF0aW9uTW9kZWwuYXBwbHkoZG9scGhpbiwgW251bGwsICdARFA6TFNAJ10uY29uY2F0KGF0dHJpYnV0ZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlTGlzdChjbGFzc1JlcG9zaXRvcnksIHR5cGUsIGJlYW4sIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBsZXQgbGlzdCA9IGJlYW5bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYgKCFleGlzdHMobGlzdCkpIHtcbiAgICAgICAgICAgIGNsYXNzUmVwb3NpdG9yeS5wcm9wZXJ0eVVwZGF0ZUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKHR5cGUsIGJlYW4sIHByb3BlcnR5TmFtZSwgW10sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhblVwZGF0ZS1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBibG9jayhiZWFuLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKGV4aXN0cyhibG9ja2VkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gY3JlYXRlIGEgYmxvY2sgd2hpbGUgYW5vdGhlciBibG9jayBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBibG9ja2VkID0ge1xuICAgICAgICAgICAgYmVhbjogYmVhbixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaXNCbG9ja2VkKGJlYW4sIHByb3BlcnR5TmFtZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RzKGJsb2NrZWQpICYmIGJsb2NrZWQuYmVhbiA9PT0gYmVhbiAmJiBibG9ja2VkLnByb3BlcnR5TmFtZSA9PT0gcHJvcGVydHlOYW1lO1xuICAgIH1cblxuICAgIHVuYmxvY2soKSB7XG4gICAgICAgIGJsb2NrZWQgPSBudWxsO1xuICAgIH1cblxuICAgIG5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5Lm5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuICAgICAgICBjaGVja1BhcmFtKHByb3BlcnR5TmFtZSwgJ3Byb3BlcnR5TmFtZScpO1xuXG4gICAgICAgIGxldCBtb2RlbElkID0gdGhpcy5iZWFuVG9Eb2xwaGluLmdldChiZWFuKTtcbiAgICAgICAgaWYgKGV4aXN0cyhtb2RlbElkKSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5kb2xwaGluLmZpbmRQcmVzZW50YXRpb25Nb2RlbEJ5SWQobW9kZWxJZCk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKG1vZGVsKSkge1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc0luZm8gPSB0aGlzLmNsYXNzZXMuZ2V0KG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBjbGFzc0luZm9bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gbW9kZWwuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0cyh0eXBlKSAmJiBleGlzdHMoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkVmFsdWUgPSBhdHRyaWJ1dGUuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLnNldFZhbHVlKHRoaXMudG9Eb2xwaGluKHRoaXMsIHR5cGUsIG5ld1ZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21Eb2xwaGluKHRoaXMsIHR5cGUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlBcnJheUNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgcmVtb3ZlZEVsZW1lbnRzKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkubm90aWZ5QXJyYXlDaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIHJlbW92ZWRFbGVtZW50cyknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuICAgICAgICBjaGVja1BhcmFtKHByb3BlcnR5TmFtZSwgJ3Byb3BlcnR5TmFtZScpO1xuICAgICAgICBjaGVja1BhcmFtKGluZGV4LCAnaW5kZXgnKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb3VudCwgJ2NvdW50Jyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocmVtb3ZlZEVsZW1lbnRzLCAncmVtb3ZlZEVsZW1lbnRzJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNCbG9ja2VkKGJlYW4sIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW9kZWxJZCA9IHRoaXMuYmVhblRvRG9scGhpbi5nZXQoYmVhbik7XG4gICAgICAgIGxldCBhcnJheSA9IGJlYW5bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYgKGV4aXN0cyhtb2RlbElkKSAmJiBleGlzdHMoYXJyYXkpKSB7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlZEVsZW1lbnRzQ291bnQgPSBBcnJheS5pc0FycmF5KHJlbW92ZWRFbGVtZW50cykgPyByZW1vdmVkRWxlbWVudHMubGVuZ3RoIDogMDtcbiAgICAgICAgICAgIHRoaXMuc2VuZExpc3RTcGxpY2UodGhpcywgbW9kZWxJZCwgcHJvcGVydHlOYW1lLCBpbmRleCwgaW5kZXggKyByZW1vdmVkRWxlbWVudHNDb3VudCwgYXJyYXkuc2xpY2UoaW5kZXgsIGluZGV4ICsgY291bnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQmVhbkFkZGVkKGhhbmRsZXIpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5vbkJlYW5BZGRlZChoYW5kbGVyKScpO1xuICAgICAgICBjaGVja1BhcmFtKGhhbmRsZXIsICdoYW5kbGVyJyk7XG4gICAgICAgIHRoaXMuYmVhbkFkZGVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvbkJlYW5SZW1vdmVkKGhhbmRsZXIpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5vbkJlYW5SZW1vdmVkKGhhbmRsZXIpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oaGFuZGxlciwgJ2hhbmRsZXInKTtcbiAgICAgICAgdGhpcy5iZWFuUmVtb3ZlZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25CZWFuVXBkYXRlKGhhbmRsZXIpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5vbkJlYW5VcGRhdGUoaGFuZGxlciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShoYW5kbGVyLCAnaGFuZGxlcicpO1xuICAgICAgICB0aGlzLnByb3BlcnR5VXBkYXRlSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvbkFycmF5VXBkYXRlKGhhbmRsZXIpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5vbkFycmF5VXBkYXRlKGhhbmRsZXIpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oaGFuZGxlciwgJ2hhbmRsZXInKTtcbiAgICAgICAgdGhpcy5hcnJheVVwZGF0ZUhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDbGFzcyhtb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5LnJlZ2lzdGVyQ2xhc3MobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuXG4gICAgICAgIGlmICh0aGlzLmNsYXNzZXMuaGFzKG1vZGVsLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzSW5mbyA9IHt9O1xuICAgICAgICBtb2RlbC5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlLnByb3BlcnR5TmFtZS5zZWFyY2goL15ALykgPCAwO1xuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGNsYXNzSW5mb1thdHRyaWJ1dGUucHJvcGVydHlOYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5zZXQobW9kZWwuaWQsIGNsYXNzSW5mbyk7XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlckNsYXNzKG1vZGVsKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkudW5yZWdpc3RlckNsYXNzKG1vZGVsKScpO1xuICAgICAgICBjaGVja1BhcmFtKG1vZGVsLCAnbW9kZWwnKTtcbiAgICAgICAgdGhpcy5jbGFzc2VzWydkZWxldGUnXShtb2RlbC5pZCk7XG4gICAgfVxuXG4gICAgbG9hZChtb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5LmxvYWQobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGNsYXNzSW5mbyA9IHRoaXMuY2xhc3Nlcy5nZXQobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgdmFyIGJlYW4gPSB7fTtcbiAgICAgICAgbW9kZWwuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIChhdHRyaWJ1dGUucHJvcGVydHlOYW1lLnNlYXJjaCgvXkAvKSA8IDApO1xuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGJlYW5bYXR0cmlidXRlLnByb3BlcnR5TmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgYXR0cmlidXRlLm9uVmFsdWVDaGFuZ2UoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Lm9sZFZhbHVlICE9PSBldmVudC5uZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkVmFsdWUgPSBzZWxmLmZyb21Eb2xwaGluKHNlbGYsIGNsYXNzSW5mb1thdHRyaWJ1dGUucHJvcGVydHlOYW1lXSwgZXZlbnQub2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBzZWxmLmZyb21Eb2xwaGluKHNlbGYsIGNsYXNzSW5mb1thdHRyaWJ1dGUucHJvcGVydHlOYW1lXSwgZXZlbnQubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BlcnR5VXBkYXRlSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSwgYmVhbiwgYXR0cmlidXRlLnByb3BlcnR5TmFtZSwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhblVwZGF0ZS1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iZWFuRnJvbURvbHBoaW4uc2V0KG1vZGVsLmlkLCBiZWFuKTtcbiAgICAgICAgdGhpcy5iZWFuVG9Eb2xwaGluLnNldChiZWFuLCBtb2RlbC5pZCk7XG4gICAgICAgIHRoaXMuY2xhc3NJbmZvcy5zZXQobW9kZWwuaWQsIGNsYXNzSW5mbyk7XG4gICAgICAgIHRoaXMuYmVhbkFkZGVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSwgYmVhbik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkJlYW5BZGRlZC1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmVhbjtcbiAgICB9XG5cbiAgICB1bmxvYWQobW9kZWwpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS51bmxvYWQobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuXG4gICAgICAgIGxldCBiZWFuID0gdGhpcy5iZWFuRnJvbURvbHBoaW4uZ2V0KG1vZGVsLmlkKTtcbiAgICAgICAgdGhpcy5iZWFuRnJvbURvbHBoaW5bJ2RlbGV0ZSddKG1vZGVsLmlkKTtcbiAgICAgICAgdGhpcy5iZWFuVG9Eb2xwaGluWydkZWxldGUnXShiZWFuKTtcbiAgICAgICAgdGhpcy5jbGFzc0luZm9zWydkZWxldGUnXShtb2RlbC5pZCk7XG4gICAgICAgIGlmIChleGlzdHMoYmVhbikpIHtcbiAgICAgICAgICAgIHRoaXMuYmVhblJlbW92ZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUsIGJlYW4pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkJlYW5SZW1vdmVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmVhbjtcbiAgICB9XG5cbiAgICBzcGxpY2VMaXN0RW50cnkobW9kZWwpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5zcGxpY2VMaXN0RW50cnkobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuXG4gICAgICAgIGxldCBzb3VyY2UgPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ3NvdXJjZScpO1xuICAgICAgICBsZXQgYXR0cmlidXRlID0gbW9kZWwuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKCdhdHRyaWJ1dGUnKTtcbiAgICAgICAgbGV0IGZyb20gPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ2Zyb20nKTtcbiAgICAgICAgbGV0IHRvID0gbW9kZWwuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKCd0bycpO1xuICAgICAgICBsZXQgY291bnQgPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ2NvdW50Jyk7XG5cbiAgICAgICAgaWYgKGV4aXN0cyhzb3VyY2UpICYmIGV4aXN0cyhhdHRyaWJ1dGUpICYmIGV4aXN0cyhmcm9tKSAmJiBleGlzdHModG8pICYmIGV4aXN0cyhjb3VudCkpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc0luZm8gPSB0aGlzLmNsYXNzSW5mb3MuZ2V0KHNvdXJjZS52YWx1ZSk7XG4gICAgICAgICAgICB2YXIgYmVhbiA9IHRoaXMuYmVhbkZyb21Eb2xwaGluLmdldChzb3VyY2UudmFsdWUpO1xuICAgICAgICAgICAgaWYgKGV4aXN0cyhiZWFuKSAmJiBleGlzdHMoY2xhc3NJbmZvKSkge1xuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gbW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlO1xuICAgICAgICAgICAgICAgIC8vdmFyIGVudHJ5ID0gZnJvbURvbHBoaW4odGhpcywgY2xhc3NJbmZvW2F0dHJpYnV0ZS52YWx1ZV0sIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVMaXN0KHRoaXMsIHR5cGUsIGJlYW4sIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0VsZW1lbnRzID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQudmFsdWU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gbW9kZWwuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKGkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxpc3QgbW9kaWZpY2F0aW9uIHVwZGF0ZSByZWNlaXZlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50cy5wdXNoKHRoaXMuZnJvbURvbHBoaW4odGhpcywgY2xhc3NJbmZvW2F0dHJpYnV0ZS52YWx1ZV0sIGVsZW1lbnQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9jayhiZWFuLCBhdHRyaWJ1dGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5VXBkYXRlSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKHR5cGUsIGJlYW4sIGF0dHJpYnV0ZS52YWx1ZSwgZnJvbS52YWx1ZSwgdG8udmFsdWUgLSBmcm9tLnZhbHVlLCBuZXdFbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkFycmF5VXBkYXRlLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmJsb2NrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxpc3QgbW9kaWZpY2F0aW9uIHVwZGF0ZSByZWNlaXZlZC4gU291cmNlIGJlYW4gdW5rbm93bi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxpc3QgbW9kaWZpY2F0aW9uIHVwZGF0ZSByZWNlaXZlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hcFBhcmFtVG9Eb2xwaGluKHBhcmFtKSB7XG4gICAgICAgIGlmICghZXhpc3RzKHBhcmFtKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW0udG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5iZWFuVG9Eb2xwaGluLmdldChwYXJhbSk7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0cyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT25seSBtYW5hZ2VkIERvbHBoaW4gQmVhbnMgY2FuIGJlIHVzZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPbmx5IG1hbmFnZWQgRG9scGhpbiBCZWFucyBhbmQgcHJpbWl0aXZlIHR5cGVzIGNhbiBiZSB1c2VkXCIpO1xuICAgIH1cblxuICAgIG1hcERvbHBoaW5Ub0JlYW4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbURvbHBoaW4odGhpcywgY29uc3RzLkRPTFBISU5fQkVBTiwgdmFsdWUpO1xuICAgIH1cbn1cbiIsIi8qIENvcHlyaWdodCAyMDE1IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKmpzbGludCBicm93c2VyaWZ5OiB0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZSAqL1xuLyogZ2xvYmFsIGV4cG9ydHMgKi9cblwidXNlIHN0cmljdFwiO1xuaW1wb3J0IE9wZW5Eb2xwaGluIGZyb20gJy4vT3BlbkRvbHBoaW4uanMnO1xuaW1wb3J0IHtleGlzdHN9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XG5pbXBvcnQgQmVhbk1hbmFnZXIgZnJvbSAnLi9iZWFubWFuYWdlci5qcyc7XG5pbXBvcnQgQ2xhc3NSZXBvc2l0b3J5IGZyb20gJy4vY2xhc3NyZXBvLmpzJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuL2NvbnRyb2xsZXJtYW5hZ2VyLmpzJztcbmltcG9ydCBDbGllbnRDb250ZXh0IGZyb20gJy4vY2xpZW50Y29udGV4dC5qcyc7XG5pbXBvcnQgUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIgZnJvbSAnLi9wbGF0Zm9ybUh0dHBUcmFuc21pdHRlci5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudENvbnRleHRGYWN0b3J5e1xuXG4gICAgY3JlYXRlKHVybCwgY29uZmlnKXtcbiAgICAgICAgY2hlY2tNZXRob2QoJ2Nvbm5lY3QodXJsLCBjb25maWcpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0odXJsLCAndXJsJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGluZyBjbGllbnQgY29udGV4dCAnKyB1cmwgKycgICAgJysgSlNPTi5zdHJpbmdpZnkoY29uZmlnKSk7XG5cbiAgICAgICAgbGV0IGJ1aWxkZXIgPSBPcGVuRG9scGhpbi5tYWtlRG9scGhpbigpLnVybCh1cmwpLnJlc2V0KGZhbHNlKS5zbGFja01TKDQpLnN1cHBvcnRDT1JTKHRydWUpLm1heEJhdGNoU2l6ZShOdW1iZXIuTUFYX1NBRkVfSU5URUdFUik7XG4gICAgICAgIGlmIChleGlzdHMoY29uZmlnKSkge1xuICAgICAgICAgICAgaWYgKGV4aXN0cyhjb25maWcuZXJyb3JIYW5kbGVyKSkge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXIuZXJyb3JIYW5kbGVyKGNvbmZpZy5lcnJvckhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4aXN0cyhjb25maWcuaGVhZGVyc0luZm8pICYmIE9iamVjdC5rZXlzKGNvbmZpZy5oZWFkZXJzSW5mbykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGJ1aWxkZXIuaGVhZGVyc0luZm8oY29uZmlnLmhlYWRlcnNJbmZvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkb2xwaGluID0gYnVpbGRlci5idWlsZCgpO1xuXG4gICAgICAgIHZhciB0cmFuc21pdHRlciA9IG5ldyBQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcih1cmwsIGNvbmZpZyk7XG4gICAgICAgIHRyYW5zbWl0dGVyLm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2xpZW50Q29udGV4dC5lbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGRvbHBoaW4uY2xpZW50Q29ubmVjdG9yLnRyYW5zbWl0dGVyID0gdHJhbnNtaXR0ZXI7XG5cbiAgICAgICAgdmFyIGNsYXNzUmVwb3NpdG9yeSA9IG5ldyBDbGFzc1JlcG9zaXRvcnkoZG9scGhpbik7XG4gICAgICAgIHZhciBiZWFuTWFuYWdlciA9IG5ldyBCZWFuTWFuYWdlcihjbGFzc1JlcG9zaXRvcnkpO1xuICAgICAgICB2YXIgY29ubmVjdG9yID0gbmV3IENvbm5lY3Rvcih1cmwsIGRvbHBoaW4sIGNsYXNzUmVwb3NpdG9yeSwgY29uZmlnKTtcbiAgICAgICAgdmFyIGNvbnRyb2xsZXJNYW5hZ2VyID0gbmV3IENvbnRyb2xsZXJNYW5hZ2VyKGRvbHBoaW4sIGNsYXNzUmVwb3NpdG9yeSwgY29ubmVjdG9yKTtcblxuICAgICAgICB2YXIgY2xpZW50Q29udGV4dCA9IG5ldyBDbGllbnRDb250ZXh0KGRvbHBoaW4sIGJlYW5NYW5hZ2VyLCBjb250cm9sbGVyTWFuYWdlciwgY29ubmVjdG9yKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudENvbnRleHQ7XG4gICAgfVxufVxuXG5leHBvcnRzLkNsaWVudENvbnRleHRGYWN0b3J5ID0gQ2xpZW50Q29udGV4dEZhY3Rvcnk7XG5cbiIsIi8qIENvcHlyaWdodCAyMDE1IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKmpzbGludCBicm93c2VyaWZ5OiB0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBFbWl0dGVyIGZyb20gJ2VtaXR0ZXItY29tcG9uZW50JztcbmltcG9ydCBQcm9taXNlIGZyb20gJy4uL2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL3Byb21pc2UnO1xuaW1wb3J0IENvbW1hbmRGYWN0b3J5IGZyb20gJy4vY29tbWFuZEZhY3RvcnknO1xuaW1wb3J0IHtleGlzdHN9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRDb250ZXh0e1xuXG4gICAgY29uc3RydWN0b3IoZG9scGhpbiwgYmVhbk1hbmFnZXIsIGNvbnRyb2xsZXJNYW5hZ2VyLCBjb25uZWN0b3Ipe1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xpZW50Q29udGV4dChkb2xwaGluLCBiZWFuTWFuYWdlciwgY29udHJvbGxlck1hbmFnZXIsIGNvbm5lY3RvciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShkb2xwaGluLCAnZG9scGhpbicpO1xuICAgICAgICBjaGVja1BhcmFtKGJlYW5NYW5hZ2VyLCAnYmVhbk1hbmFnZXInKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVyTWFuYWdlciwgJ2NvbnRyb2xsZXJNYW5hZ2VyJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29ubmVjdG9yLCAnY29ubmVjdG9yJyk7XG5cbiAgICAgICAgdGhpcy5kb2xwaGluID0gZG9scGhpbjtcbiAgICAgICAgdGhpcy5iZWFuTWFuYWdlciA9IGJlYW5NYW5hZ2VyO1xuICAgICAgICB0aGlzLl9jb250cm9sbGVyTWFuYWdlciA9IGNvbnRyb2xsZXJNYW5hZ2VyO1xuICAgICAgICB0aGlzLl9jb25uZWN0b3IgPSBjb25uZWN0b3I7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblByb21pc2UgPSBudWxsO1xuICAgICAgICB0aGlzLmlzQ29ubmVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgY29ubmVjdCgpe1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5fY29ubmVjdG9yLmNvbm5lY3QoKTtcbiAgICAgICAgICAgIHNlbGYuX2Nvbm5lY3Rvci5pbnZva2UoQ29tbWFuZEZhY3RvcnkuY3JlYXRlQ3JlYXRlQ29udGV4dENvbW1hbmQoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5pc0Nvbm5lY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uUHJvbWlzZTtcbiAgICB9XG5cbiAgICBvbkNvbm5lY3QoKXtcbiAgICAgICAgaWYoZXhpc3RzKHRoaXMuY29ubmVjdGlvblByb21pc2UpKXtcbiAgICAgICAgICAgIGlmKCF0aGlzLmlzQ29ubmVjdGVkKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0aW9uUHJvbWlzZTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbGxlcihuYW1lKXtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsaWVudENvbnRleHQuY3JlYXRlQ29udHJvbGxlcihuYW1lKScpO1xuICAgICAgICBjaGVja1BhcmFtKG5hbWUsICduYW1lJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRyb2xsZXJNYW5hZ2VyLmNyZWF0ZUNvbnRyb2xsZXIobmFtZSk7XG4gICAgfVxuXG4gICAgZGlzY29ubmVjdCgpe1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZG9scGhpbi5zdG9wUHVzaExpc3RlbmluZygpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNlbGYuX2NvbnRyb2xsZXJNYW5hZ2VyLmRlc3Ryb3koKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLl9jb25uZWN0b3IuaW52b2tlKENvbW1hbmRGYWN0b3J5LmNyZWF0ZURlc3Ryb3lDb250ZXh0Q29tbWFuZCgpKTtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbHBoaW4gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYuYmVhbk1hbmFnZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYuX2NvbnRyb2xsZXJNYW5hZ2VyID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxmLl9jb25uZWN0b3IgPSBudWxsO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbkVtaXR0ZXIoQ2xpZW50Q29udGV4dC5wcm90b3R5cGUpOyIsIi8qIENvcHlyaWdodCAyMDE2IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKmpzbGludCBicm93c2VyaWZ5OiB0cnVlICovXG5cblxuaW1wb3J0IHsgZXhpc3RzIH0gZnJvbSAnLi91dGlscy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVje1xuXG4gICAgc3RhdGljIGVuY29kZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAncCc6IGNvbW1hbmQucG1JZCxcbiAgICAgICAgICAgICd0JzogY29tbWFuZC5wbVR5cGUsXG4gICAgICAgICAgICAnYSc6IGNvbW1hbmQuYXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSB7XG4gICAgICAgICAgICAgICAgICAgICduJzogYXR0cmlidXRlLnByb3BlcnR5TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgJ2knOiBhdHRyaWJ1dGUuaWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChleGlzdHMoYXR0cmlidXRlLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQudiA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgJ2lkJzogJ0NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsJ1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWNvZGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2lkJzogJ0NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsJyxcbiAgICAgICAgICAgICdjbGFzc05hbWUnOiBcIm9yZy5vcGVuZG9scGhpbi5jb3JlLmNvbW0uQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kXCIsXG4gICAgICAgICAgICAnY2xpZW50U2lkZU9ubHknOiBmYWxzZSxcbiAgICAgICAgICAgICdwbUlkJzogY29tbWFuZC5wLFxuICAgICAgICAgICAgJ3BtVHlwZSc6IGNvbW1hbmQudCxcbiAgICAgICAgICAgICdhdHRyaWJ1dGVzJzogY29tbWFuZC5hLm1hcCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnR5TmFtZSc6IGF0dHJpYnV0ZS5uLFxuICAgICAgICAgICAgICAgICAgICAnaWQnOiBhdHRyaWJ1dGUuaSxcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZXhpc3RzKGF0dHJpYnV0ZS52KT8gYXR0cmlidXRlLnYgOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICAncXVhbGlmaWVyJzogbnVsbFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHN0YXRpYyBlbmNvZGVWYWx1ZUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICdhJzogY29tbWFuZC5hdHRyaWJ1dGVJZFxuICAgICAgICB9O1xuICAgICAgICBpZiAoZXhpc3RzKGNvbW1hbmQub2xkVmFsdWUpKSB7XG4gICAgICAgICAgICByZXN1bHQubyA9IGNvbW1hbmQub2xkVmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4aXN0cyhjb21tYW5kLm5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgcmVzdWx0Lm4gPSBjb21tYW5kLm5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5pZCA9ICdWYWx1ZUNoYW5nZWQnO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWNvZGVWYWx1ZUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdpZCc6ICdWYWx1ZUNoYW5nZWQnLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IFwib3JnLm9wZW5kb2xwaGluLmNvcmUuY29tbS5WYWx1ZUNoYW5nZWRDb21tYW5kXCIsXG4gICAgICAgICAgICAnYXR0cmlidXRlSWQnOiBjb21tYW5kLmEsXG4gICAgICAgICAgICAnb2xkVmFsdWUnOiBleGlzdHMoY29tbWFuZC5vKT8gY29tbWFuZC5vIDogbnVsbCxcbiAgICAgICAgICAgICduZXdWYWx1ZSc6IGV4aXN0cyhjb21tYW5kLm4pPyBjb21tYW5kLm4gOiBudWxsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGVuY29kZShjb21tYW5kcykge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShjb21tYW5kcy5tYXAoKGNvbW1hbmQpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21tYW5kLmlkID09PSAnQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWwnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZW5jb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSAnVmFsdWVDaGFuZ2VkJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmVuY29kZVZhbHVlQ2hhbmdlZENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWNvZGUodHJhbnNtaXR0ZWQpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZW9mIHRyYW5zbWl0dGVkID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodHJhbnNtaXR0ZWQpLm1hcChmdW5jdGlvbiAoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kLmlkID09PSAnQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmRlY29kZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQuaWQgPT09ICdWYWx1ZUNoYW5nZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLmRlY29kZVZhbHVlQ2hhbmdlZENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdHJhbnNtaXR0ZWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ3JlYXRlQ29udGV4dENvbW1hbmQgZnJvbSAnLi9jb21tYW5kcy9jcmVhdGVDb250ZXh0Q29tbWFuZC5qcyc7XG5pbXBvcnQgQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQgZnJvbSAnLi9jb21tYW5kcy9jcmVhdGVDb250cm9sbGVyQ29tbWFuZC5qcyc7XG5pbXBvcnQgQ2FsbEFjdGlvbkNvbW1hbmQgZnJvbSAnLi9jb21tYW5kcy9jYWxsQWN0aW9uQ29tbWFuZC5qcyc7XG5pbXBvcnQgRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kIGZyb20gJy4vY29tbWFuZHMvZGVzdHJveUNvbnRyb2xsZXJDb21tYW5kLmpzJztcbmltcG9ydCBEZXN0cm95Q29udGV4dENvbW1hbmQgZnJvbSAnLi9jb21tYW5kcy9kZXN0cm95Q29udGV4dENvbW1hbmQuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1hbmRGYWN0b3J5IHtcblxuICAgIHN0YXRpYyBjcmVhdGVDcmVhdGVDb250ZXh0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDcmVhdGVDb250ZXh0Q29tbWFuZCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDcmVhdGVDb250cm9sbGVyQ29tbWFuZChjb250cm9sbGVyTmFtZSwgcGFyZW50Q29udHJvbGxlcklkKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQoY29udHJvbGxlck5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNhbGxBY3Rpb25Db21tYW5kKGNvbnRyb2xsZXJpZCwgYWN0aW9uTmFtZSwgcGFyYW1zKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ2FsbEFjdGlvbkNvbW1hbmQoY29udHJvbGxlcmlkLCBhY3Rpb25OYW1lLCBwYXJhbXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVEZXN0cm95Q29udHJvbGxlckNvbW1hbmQoY29udHJvbGxlcklkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKGNvbnRyb2xsZXJJZCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZURlc3Ryb3lDb250ZXh0Q29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEZXN0cm95Q29udGV4dENvbW1hbmQoKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQge2NoZWNrTWV0aG9kfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FsbEFjdGlvbkNvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcmlkLCBhY3Rpb25OYW1lLCBwYXJhbXMpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NyZWF0ZUNvbnRyb2xsZXJDb21tYW5kLmludm9rZShjb250cm9sbGVyaWQsIGFjdGlvbk5hbWUsIHBhcmFtcyknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVyaWQsICdjb250cm9sbGVyaWQnKTtcbiAgICAgICAgY2hlY2tQYXJhbShhY3Rpb25OYW1lLCAnYWN0aW9uTmFtZScpO1xuXG4gICAgICAgIHRoaXMuaWQgPSAnQ2FsbEFjdGlvbic7XG4gICAgICAgIHRoaXMuYyA9IGNvbnRyb2xsZXJpZDtcbiAgICAgICAgdGhpcy5uID0gYWN0aW9uTmFtZTtcbiAgICAgICAgdGhpcy5wID0gcGFyYW1zO1xuICAgIH1cblxufSIsImltcG9ydCB7Y2hlY2tNZXRob2R9IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlQ29udGV4dENvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDcmVhdGVDb250ZXh0Q29tbWFuZC5pbnZva2UoKScpO1xuICAgICAgICB0aGlzLmlkID0gJ0NyZWF0ZUNvbnRleHQnO1xuICAgIH1cblxufSIsImltcG9ydCB7Y2hlY2tNZXRob2R9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7Y2hlY2tQYXJhbX0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVDb250cm9sbGVyQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVyTmFtZSwgcGFyZW50Q29udHJvbGxlcklkKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDcmVhdGVDb250cm9sbGVyQ29tbWFuZC5pbnZva2UoY29udHJvbGxlck5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVyTmFtZSwgJ2NvbnRyb2xsZXJOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICdDcmVhdGVDb250cm9sbGVyJztcbiAgICAgICAgdGhpcy5uID0gY29udHJvbGxlck5hbWU7XG4gICAgICAgIHRoaXMucCA9IHBhcmVudENvbnRyb2xsZXJJZDtcbiAgICB9XG5cbn0iLCJpbXBvcnQge2NoZWNrTWV0aG9kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlc3Ryb3lDb250ZXh0Q29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0Rlc3Ryb3lDb250ZXh0Q29tbWFuZCgpJyk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICdEZXN0cm95Q29udGV4dCc7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja1BhcmFtfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlc3Ryb3lDb250cm9sbGVyQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVySWQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0Rlc3Ryb3lDb250cm9sbGVyQ29tbWFuZChjb250cm9sbGVySWQpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlcklkLCAnY29udHJvbGxlcklkJyk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICdEZXN0cm95Q29udHJvbGxlcic7XG4gICAgICAgIHRoaXMuYyA9IGNvbnRyb2xsZXJJZDtcbiAgICB9XG5cbn0iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGNvbnNvbGUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT3BlbkRvbHBoaW4gZnJvbSAnLi9PcGVuRG9scGhpbi5qcyc7XG5cbmltcG9ydCBQcm9taXNlIGZyb20gJy4uL2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL3Byb21pc2UnO1xuaW1wb3J0IENsaWVudE1vZGVsU3RvcmUgZnJvbSAnLi9DbGllbnRNb2RlbFN0b3JlJztcbmltcG9ydCB7ZXhpc3RzfSBmcm9tICcuL3V0aWxzLmpzJztcbmltcG9ydCB7Y2hlY2tNZXRob2R9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja1BhcmFtfSBmcm9tICcuL3V0aWxzJztcblxuY29uc3QgRE9MUEhJTl9CRUFOID0gJ0BAQCBET0xQSElOX0JFQU4gQEBAJztcbmNvbnN0IEFDVElPTl9DQUxMX0JFQU4gPSAnQEBAIENPTlRST0xMRVJfQUNUSU9OX0NBTExfQkVBTiBAQEAnO1xuY29uc3QgSElHSExBTkRFUl9CRUFOID0gJ0BAQCBISUdITEFOREVSX0JFQU4gQEBAJztcbmNvbnN0IERPTFBISU5fTElTVF9TUExJQ0UgPSAnQERQOkxTQCc7XG5jb25zdCBTT1VSQ0VfU1lTVEVNID0gJ0BAQCBTT1VSQ0VfU1lTVEVNIEBAQCc7XG5jb25zdCBTT1VSQ0VfU1lTVEVNX0NMSUVOVCA9ICdjbGllbnQnO1xuY29uc3QgU09VUkNFX1NZU1RFTV9TRVJWRVIgPSAnc2VydmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdG9ye1xuXG4gICAgY29uc3RydWN0b3IodXJsLCBkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbmZpZykge1xuICAgICAgICBjaGVja01ldGhvZCgnQ29ubmVjdG9yKHVybCwgZG9scGhpbiwgY2xhc3NSZXBvc2l0b3J5LCBjb25maWcpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0odXJsLCAndXJsJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oZG9scGhpbiwgJ2RvbHBoaW4nKTtcbiAgICAgICAgY2hlY2tQYXJhbShjbGFzc1JlcG9zaXRvcnksICdjbGFzc1JlcG9zaXRvcnknKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZG9scGhpbiA9IGRvbHBoaW47XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeSA9IGNsYXNzUmVwb3NpdG9yeTtcbiAgICAgICAgdGhpcy5oaWdobGFuZGVyUE1SZXNvbHZlciA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIHRoaXMuaGlnaGxhbmRlclBNUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHNlbGYuaGlnaGxhbmRlclBNUmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2xwaGluLmdldENsaWVudE1vZGVsU3RvcmUoKS5vbk1vZGVsU3RvcmVDaGFuZ2UoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSBldmVudC5jbGllbnRQcmVzZW50YXRpb25Nb2RlbDtcbiAgICAgICAgICAgIGxldCBzb3VyY2VTeXN0ZW0gPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoU09VUkNFX1NZU1RFTSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKHNvdXJjZVN5c3RlbSkgJiYgc291cmNlU3lzdGVtLnZhbHVlID09PSBTT1VSQ0VfU1lTVEVNX1NFUlZFUikge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5ldmVudFR5cGUgPT09IENsaWVudE1vZGVsU3RvcmUuVHlwZS5BRERFRCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm9uTW9kZWxBZGRlZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5ldmVudFR5cGUgPT09IENsaWVudE1vZGVsU3RvcmUuVHlwZS5SRU1PVkVEKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub25Nb2RlbFJlbW92ZWQobW9kZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3QoKSB7XG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGF0LmRvbHBoaW4uc3RhcnRQdXNoTGlzdGVuaW5nKE9wZW5Eb2xwaGluLmNyZWF0ZVN0YXJ0TG9uZ1BvbGxDb21tYW5kKCksIE9wZW5Eb2xwaGluLmNyZWF0ZUludGVycnVwdExvbmdQb2xsQ29tbWFuZCgpKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgb25Nb2RlbEFkZGVkKG1vZGVsKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb25uZWN0b3Iub25Nb2RlbEFkZGVkKG1vZGVsKScpO1xuICAgICAgICBjaGVja1BhcmFtKG1vZGVsLCAnbW9kZWwnKTtcblxuICAgICAgICB2YXIgdHlwZSA9IG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFDVElPTl9DQUxMX0JFQU46XG4gICAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERPTFBISU5fQkVBTjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5yZWdpc3RlckNsYXNzKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSElHSExBTkRFUl9CRUFOOlxuICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxhbmRlclBNUmVzb2x2ZXIobW9kZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBET0xQSElOX0xJU1RfU1BMSUNFOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5LnNwbGljZUxpc3RFbnRyeShtb2RlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kb2xwaGluLmRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkubG9hZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vZGVsUmVtb3ZlZChtb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ29ubmVjdG9yLm9uTW9kZWxSZW1vdmVkKG1vZGVsKScpO1xuICAgICAgICBjaGVja1BhcmFtKG1vZGVsLCAnbW9kZWwnKTtcbiAgICAgICAgbGV0IHR5cGUgPSBtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBET0xQSElOX0JFQU46XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkudW5yZWdpc3RlckNsYXNzKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRE9MUEhJTl9MSVNUX1NQTElDRTpcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5LnVubG9hZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2UoY29tbWFuZCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ29ubmVjdG9yLmludm9rZShjb21tYW5kKScpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQsICdjb21tYW5kJyk7XG5cbiAgICAgICAgdmFyIGRvbHBoaW4gPSB0aGlzLmRvbHBoaW47XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgZG9scGhpbi5zZW5kKGNvbW1hbmQsIHtcbiAgICAgICAgICAgICAgICBvbkZpbmlzaGVkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SGlnaGxhbmRlclBNKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGFuZGVyUE1Qcm9taXNlO1xuICAgIH1cbn1cblxuZXhwb3J0cy5TT1VSQ0VfU1lTVEVNID0gU09VUkNFX1NZU1RFTTtcbmV4cG9ydHMuU09VUkNFX1NZU1RFTV9DTElFTlQgPSBTT1VSQ0VfU1lTVEVNX0NMSUVOVDtcbmV4cG9ydHMuU09VUkNFX1NZU1RFTV9TRVJWRVIgPSBTT1VSQ0VfU1lTVEVNX1NFUlZFUjtcbmV4cG9ydHMuQUNUSU9OX0NBTExfQkVBTiA9IEFDVElPTl9DQUxMX0JFQU47XG4iLCJleHBvcnQgY29uc3QgRE9MUEhJTl9CRUFOID0gMDtcbmV4cG9ydCBjb25zdCBCWVRFID0gMTtcbmV4cG9ydCBjb25zdCBTSE9SVCA9IDI7XG5leHBvcnQgY29uc3QgSU5UID0gMztcbmV4cG9ydCBjb25zdCBMT05HID0gNDtcbmV4cG9ydCBjb25zdCBGTE9BVCA9IDU7XG5leHBvcnQgY29uc3QgRE9VQkxFID0gNjtcbmV4cG9ydCBjb25zdCBCT09MRUFOID0gNztcbmV4cG9ydCBjb25zdCBTVFJJTkcgPSA4O1xuZXhwb3J0IGNvbnN0IERBVEUgPSA5O1xuZXhwb3J0IGNvbnN0IEVOVU0gPSAxMDtcbmV4cG9ydCBjb25zdCBDQUxFTkRBUiA9IDExO1xuZXhwb3J0IGNvbnN0IExPQ0FMX0RBVEVfRklFTERfVFlQRSA9IDU1O1xuZXhwb3J0IGNvbnN0IExPQ0FMX0RBVEVfVElNRV9GSUVMRF9UWVBFID0gNTI7XG5leHBvcnQgY29uc3QgWk9ORURfREFURV9USU1FX0ZJRUxEX1RZUEUgPSA1NDsiLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGNvbnNvbGUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9wcm9taXNlJztcbmltcG9ydCBTZXQgZnJvbScuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9zZXQnO1xuaW1wb3J0IHtleGlzdHN9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4vdXRpbHMnO1xuXG5pbXBvcnQgQ29udHJvbGxlclByb3h5IGZyb20gJy4vY29udHJvbGxlcnByb3h5LmpzJztcblxuaW1wb3J0IENvbW1hbmRGYWN0b3J5IGZyb20gJy4vY29tbWFuZEZhY3RvcnkuanMnO1xuXG5cbmltcG9ydCB7IFNPVVJDRV9TWVNURU0gfSBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XG5pbXBvcnQgeyBTT1VSQ0VfU1lTVEVNX0NMSUVOVCB9IGZyb20gJy4vY29ubmVjdG9yLmpzJztcbmltcG9ydCB7IEFDVElPTl9DQUxMX0JFQU4gfSBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XG5cbmNvbnN0IENPTlRST0xMRVJfSUQgPSAnY29udHJvbGxlcklkJztcbmNvbnN0IE1PREVMID0gJ21vZGVsJztcbmNvbnN0IEVSUk9SX0NPREUgPSAnZXJyb3JDb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlck1hbmFnZXJ7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbm5lY3Rvcil7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyTWFuYWdlcihkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbm5lY3RvciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShkb2xwaGluLCAnZG9scGhpbicpO1xuICAgICAgICBjaGVja1BhcmFtKGNsYXNzUmVwb3NpdG9yeSwgJ2NsYXNzUmVwb3NpdG9yeScpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbm5lY3RvciwgJ2Nvbm5lY3RvcicpO1xuXG4gICAgICAgIHRoaXMuZG9scGhpbiA9IGRvbHBoaW47XG4gICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5ID0gY2xhc3NSZXBvc2l0b3J5O1xuICAgICAgICB0aGlzLmNvbm5lY3RvciA9IGNvbm5lY3RvcjtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycyA9IG5ldyBTZXQoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sbGVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NyZWF0ZUNvbnRyb2xsZXIobmFtZSwgbnVsbClcbiAgICB9XG5cbiAgICBfY3JlYXRlQ29udHJvbGxlcihuYW1lLCBwYXJlbnRDb250cm9sbGVySWQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NvbnRyb2xsZXJNYW5hZ2VyLmNyZWF0ZUNvbnRyb2xsZXIobmFtZSknKTtcbiAgICAgICAgY2hlY2tQYXJhbShuYW1lLCAnbmFtZScpO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGNvbnRyb2xsZXJJZCwgbW9kZWxJZCwgbW9kZWwsIGNvbnRyb2xsZXI7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0b3IuZ2V0SGlnaGxhbmRlclBNKCkudGhlbigoaGlnaGxhbmRlclBNKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0b3IuaW52b2tlKENvbW1hbmRGYWN0b3J5LmNyZWF0ZUNyZWF0ZUNvbnRyb2xsZXJDb21tYW5kKG5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVySWQgPSBoaWdobGFuZGVyUE0uZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKENPTlRST0xMRVJfSUQpLmdldFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsSWQgPSBoaWdobGFuZGVyUE0uZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKE1PREVMKS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbCA9IHNlbGYuY2xhc3NSZXBvc2l0b3J5Lm1hcERvbHBoaW5Ub0JlYW4obW9kZWxJZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlclByb3h5KGNvbnRyb2xsZXJJZCwgbW9kZWwsIHNlbGYpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbnRyb2xsZXJzLmFkZChjb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbnZva2VBY3Rpb24oY29udHJvbGxlcklkLCBhY3Rpb25OYW1lLCBwYXJhbXMpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NvbnRyb2xsZXJNYW5hZ2VyLmludm9rZUFjdGlvbihjb250cm9sbGVySWQsIGFjdGlvbk5hbWUsIHBhcmFtcyknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVySWQsICdjb250cm9sbGVySWQnKTtcbiAgICAgICAgY2hlY2tQYXJhbShhY3Rpb25OYW1lLCAnYWN0aW9uTmFtZScpO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+e1xuXG4gICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IFtcbiAgICAgICAgICAgICAgICBzZWxmLmRvbHBoaW4uYXR0cmlidXRlKFNPVVJDRV9TWVNURU0sIG51bGwsIFNPVVJDRV9TWVNURU1fQ0xJRU5UKSxcbiAgICAgICAgICAgICAgICBzZWxmLmRvbHBoaW4uYXR0cmlidXRlKEVSUk9SX0NPREUpXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICBsZXQgcG0gPSBzZWxmLmRvbHBoaW4ucHJlc2VudGF0aW9uTW9kZWwuYXBwbHkoc2VsZi5kb2xwaGluLCBbbnVsbCwgQUNUSU9OX0NBTExfQkVBTl0uY29uY2F0KGF0dHJpYnV0ZXMpKTtcblxuICAgICAgICAgICAgbGV0IGFjdGlvblBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgaWYoZXhpc3RzKHBhcmFtcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwYXJhbSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHNlbGYuY2xhc3NSZXBvc2l0b3J5Lm1hcFBhcmFtVG9Eb2xwaGluKHBhcmFtc1twYXJhbV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uUGFyYW1zLnB1c2goe246IHBhcmFtLCB2OiB2YWx1ZX0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmNvbm5lY3Rvci5pbnZva2UoQ29tbWFuZEZhY3RvcnkuY3JlYXRlQ2FsbEFjdGlvbkNvbW1hbmQoY29udHJvbGxlcklkLCBhY3Rpb25OYW1lLCBhY3Rpb25QYXJhbXMpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaXNFcnJvciA9IHBtLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShFUlJPUl9DT0RFKS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJTZXJ2ZXIgc2lkZSBDb250cm9sbGVyQWN0aW9uIFwiICsgYWN0aW9uTmFtZSArIFwiIGNhdXNlZCBhbiBlcnJvci4gUGxlYXNlIHNlZSBzZXJ2ZXIgbG9nIGZvciBkZXRhaWxzLlwiKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZWxmLmRvbHBoaW4uZGVsZXRlUHJlc2VudGF0aW9uTW9kZWwocG0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3lDb250cm9sbGVyKGNvbnRyb2xsZXIpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NvbnRyb2xsZXJNYW5hZ2VyLmRlc3Ryb3lDb250cm9sbGVyKGNvbnRyb2xsZXIpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlciwgJ2NvbnRyb2xsZXInKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5jb25uZWN0b3IuZ2V0SGlnaGxhbmRlclBNKCkudGhlbigoaGlnaGxhbmRlclBNKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5jb250cm9sbGVycy5kZWxldGUoY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgaGlnaGxhbmRlclBNLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShDT05UUk9MTEVSX0lEKS5zZXRWYWx1ZShjb250cm9sbGVyLmNvbnRyb2xsZXJJZCk7XG4gICAgICAgICAgICAgICAgc2VsZi5jb25uZWN0b3IuaW52b2tlKENvbW1hbmRGYWN0b3J5LmNyZWF0ZURlc3Ryb3lDb250cm9sbGVyQ29tbWFuZChjb250cm9sbGVyLmdldElkKCkpKS50aGVuKHJlc29sdmUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGxldCBjb250cm9sbGVyc0NvcHkgPSB0aGlzLmNvbnRyb2xsZXJzO1xuICAgICAgICBsZXQgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgY29udHJvbGxlcnNDb3B5LmZvckVhY2goKGNvbnRyb2xsZXIpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChjb250cm9sbGVyLmRlc3Ryb3koKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgIH1cbn1cbiIsIi8qIENvcHlyaWdodCAyMDE1IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKmpzbGludCBicm93c2VyaWZ5OiB0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBTZXQgZnJvbSAnLi4vYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vc2V0JztcbmltcG9ydCB7Y2hlY2tNZXRob2R9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja1BhcmFtfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlclByb3h5e1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlcklkLCBtb2RlbCwgbWFuYWdlcil7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyUHJveHkoY29udHJvbGxlcklkLCBtb2RlbCwgbWFuYWdlciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVySWQsICdjb250cm9sbGVySWQnKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obWFuYWdlciwgJ21hbmFnZXInKTtcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJJZCA9IGNvbnRyb2xsZXJJZDtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uRGVzdHJveWVkSGFuZGxlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuXG4gICAgZ2V0TW9kZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vZGVsO1xuICAgIH1cblxuICAgIGdldElkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sbGVySWQ7XG4gICAgfVxuXG4gICAgaW52b2tlKG5hbWUsIHBhcmFtcyl7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyUHJveHkuaW52b2tlKG5hbWUsIHBhcmFtcyknKTtcbiAgICAgICAgY2hlY2tQYXJhbShuYW1lLCAnbmFtZScpO1xuXG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29udHJvbGxlciB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5tYW5hZ2VyLmludm9rZUFjdGlvbih0aGlzLmNvbnRyb2xsZXJJZCwgbmFtZSwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sbGVyKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5fY3JlYXRlQ29udHJvbGxlcihuYW1lLCB0aGlzLmdldElkKCkpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKXtcbiAgICAgICAgaWYgKHRoaXMuZGVzdHJveWVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBjb250cm9sbGVyIHdhcyBhbHJlYWR5IGRlc3Ryb3llZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3llZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcih0aGlzKTtcbiAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25EZXN0cm95ZWQtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5kZXN0cm95Q29udHJvbGxlcih0aGlzKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3llZChoYW5kbGVyKXtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NvbnRyb2xsZXJQcm94eS5vbkRlc3Ryb3llZChoYW5kbGVyKScpO1xuICAgICAgICBjaGVja1BhcmFtKGhhbmRsZXIsICdoYW5kbGVyJyk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm9uRGVzdHJveWVkSGFuZGxlcnMuYWRkKGhhbmRsZXIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLm9uRGVzdHJveWVkSGFuZGxlcnMuZGVsZXRlKGhhbmRsZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBEb2xwaGluUmVtb3RpbmdFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSA9ICdSZW1vdGluZyBFcnJvcicsIGRldGFpbCkge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgIHRoaXMuZGV0YWlsID0gZGV0YWlsIHx8IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRG9scGhpblNlc3Npb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSA9ICdTZXNzaW9uIEVycm9yJykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIdHRwUmVzcG9uc2VFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSA9ICdIdHRwIFJlc3BvbnNlIEVycm9yJykge1xuICAgIHN1cGVyKG1lc3NhZ2UpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBIdHRwTmV0d29ya0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSAnSHR0cCBOZXR3b3JrIEVycm9yJykge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG59IiwiLyogQ29weXJpZ2h0IDIwMTYgQ2Fub28gRW5naW5lZXJpbmcgQUcuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCBFbWl0dGVyIGZyb20gJ2VtaXR0ZXItY29tcG9uZW50JztcblxuXG5pbXBvcnQgeyBleGlzdHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IERvbHBoaW5SZW1vdGluZ0Vycm9yLCBIdHRwTmV0d29ya0Vycm9yLCBEb2xwaGluU2Vzc2lvbkVycm9yLCBIdHRwUmVzcG9uc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzLmpzJztcbmltcG9ydCBDb2RlYyBmcm9tICcuL2NvZGVjLmpzJztcbmltcG9ydCBSZW1vdGluZ0Vycm9ySGFuZGxlciBmcm9tICcuL3JlbW90aW5nRXJyb3JIYW5kbGVyJztcblxuXG5jb25zdCBGSU5JU0hFRCA9IDQ7XG5jb25zdCBTVUNDRVNTID0gMjAwO1xuY29uc3QgUkVRVUVTVF9USU1FT1VUID0gNDA4O1xuXG5jb25zdCBET0xQSElOX1BMQVRGT1JNX1BSRUZJWCA9ICdkb2xwaGluX3BsYXRmb3JtX2ludGVybl8nO1xuY29uc3QgQ0xJRU5UX0lEX0hUVFBfSEVBREVSX05BTUUgPSBET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdkb2xwaGluQ2xpZW50SWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUh0dHBUcmFuc21pdHRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGNvbmZpZykge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuaGVhZGVyc0luZm8gPSBleGlzdHMoY29uZmlnKSA/IGNvbmZpZy5oZWFkZXJzSW5mbyA6IG51bGw7XG4gICAgICAgIGxldCBjb25uZWN0aW9uQ29uZmlnID0gZXhpc3RzKGNvbmZpZykgPyBjb25maWcuY29ubmVjdGlvbiA6IG51bGw7XG4gICAgICAgIHRoaXMubWF4UmV0cnkgPSBleGlzdHMoY29ubmVjdGlvbkNvbmZpZykgJiYgZXhpc3RzKGNvbm5lY3Rpb25Db25maWcubWF4UmV0cnkpP2Nvbm5lY3Rpb25Db25maWcubWF4UmV0cnk6IDM7XG4gICAgICAgIHRoaXMudGltZW91dCA9IGV4aXN0cyhjb25uZWN0aW9uQ29uZmlnKSAmJiBleGlzdHMoY29ubmVjdGlvbkNvbmZpZy50aW1lb3V0KT9jb25uZWN0aW9uQ29uZmlnLnRpbWVvdXQ6IDUwMDA7XG4gICAgICAgIHRoaXMuZmFpbGVkX2F0dGVtcHQgPSAwO1xuICAgIH1cblxuICAgIF9oYW5kbGVFcnJvcihyZWplY3QsIGVycm9yKSB7XG4gICAgICAgIGxldCBjb25uZWN0aW9uQ29uZmlnID0gZXhpc3RzKHRoaXMuY29uZmlnKSA/IHRoaXMuY29uZmlnLmNvbm5lY3Rpb24gOiBudWxsO1xuICAgICAgICBsZXQgZXJyb3JIYW5kbGVycyA9IGV4aXN0cyhjb25uZWN0aW9uQ29uZmlnKSAmJiBleGlzdHMoY29ubmVjdGlvbkNvbmZpZy5lcnJvckhhbmRsZXJzKT9jb25uZWN0aW9uQ29uZmlnLmVycm9ySGFuZGxlcnM6IFtuZXcgUmVtb3RpbmdFcnJvckhhbmRsZXIoKV07XG4gICAgICAgIGVycm9ySGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICB9XG5cbiAgICBfc2VuZChjb21tYW5kcykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgaHR0cC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICAgICAgaHR0cC5vbmVycm9yID0gKGVycm9yQ29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKHJlamVjdCwgbmV3IEh0dHBOZXR3b3JrRXJyb3IoJ1BsYXRmb3JtSHR0cFRyYW5zbWl0dGVyOiBOZXR3b3JrIGVycm9yJywgZXJyb3JDb250ZW50KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChodHRwLnJlYWR5U3RhdGUgPT09IEZJTklTSEVEKXtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChodHRwLnN0YXR1cykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNVQ0NFU1M6XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsZWRfYXR0ZW1wdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudENsaWVudElkID0gaHR0cC5nZXRSZXNwb25zZUhlYWRlcihDTElFTlRfSURfSFRUUF9IRUFERVJfTkFNRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhjdXJyZW50Q2xpZW50SWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHModGhpcy5jbGllbnRJZCkgJiYgdGhpcy5jbGllbnRJZCAhPT0gY3VycmVudENsaWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihyZWplY3QsIG5ldyBEb2xwaGluU2Vzc2lvbkVycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogQ2xpZW50SWQgb2YgdGhlIHJlc3BvbnNlIGRpZCBub3QgbWF0Y2gnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRJZCA9IGN1cnJlbnRDbGllbnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihyZWplY3QsIG5ldyBEb2xwaGluU2Vzc2lvbkVycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogU2VydmVyIGRpZCBub3Qgc2VuZCBhIGNsaWVudElkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRVFVRVNUX1RJTUVPVVQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IocmVqZWN0LCBuZXcgRG9scGhpblNlc3Npb25FcnJvcignUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IFNlc3Npb24gVGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZhaWxlZF9hdHRlbXB0IDw9IHRoaXMubWF4UmV0cnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxlZF9hdHRlbXB0ID0gdGhpcy5mYWlsZWRfYXR0ZW1wdCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKHJlamVjdCwgbmV3IEh0dHBSZXNwb25zZUVycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogSFRUUCBTdGF0dXMgIT0gMjAwICgnICsgaHR0cC5zdGF0dXMgKyAnKScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGh0dHAub3BlbignUE9TVCcsIHRoaXMudXJsKTtcbiAgICAgICAgICAgIGlmIChleGlzdHModGhpcy5jbGllbnRJZCkpIHtcbiAgICAgICAgICAgICAgICBodHRwLnNldFJlcXVlc3RIZWFkZXIoQ0xJRU5UX0lEX0hUVFBfSEVBREVSX05BTUUsIHRoaXMuY2xpZW50SWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXhpc3RzKHRoaXMuaGVhZGVyc0luZm8pKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmhlYWRlcnNJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlcnNJbmZvLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5oZWFkZXJzSW5mb1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mYWlsZWRfYXR0ZW1wdCA+IHRoaXMubWF4UmV0cnkpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBodHRwLnNlbmQoQ29kZWMuZW5jb2RlKGNvbW1hbmRzKSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGh0dHAuc2VuZChDb2RlYy5lbmNvZGUoY29tbWFuZHMpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0cmFuc21pdChjb21tYW5kcywgb25Eb25lKSB7XG4gICAgICAgIHRoaXMuX3NlbmQoY29tbWFuZHMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZVRleHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQ29tbWFuZHMgPSBDb2RlYy5kZWNvZGUocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRG9uZShyZXNwb25zZUNvbW1hbmRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IERvbHBoaW5SZW1vdGluZ0Vycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogUGFyc2UgZXJyb3I6IChJbmNvcnJlY3QgcmVzcG9uc2UgPSAnICsgcmVzcG9uc2VUZXh0ICsgJyknKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBEb2xwaGluUmVtb3RpbmdFcnJvcignUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IEVtcHR5IHJlc3BvbnNlJykpO1xuICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25hbChjb21tYW5kKSB7XG4gICAgICAgIHRoaXMuX3NlbmQoW2NvbW1hbmRdKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcikpO1xuICAgIH1cbn1cblxuRW1pdHRlcihQbGF0Zm9ybUh0dHBUcmFuc21pdHRlci5wcm90b3R5cGUpO1xuIiwiXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW1vdGluZ0Vycm9ySGFuZGxlciB7XG5cbiAgICBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICB9XG5cbn0iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjaGVja01ldGhvZE5hbWU7XG5cbnZhciBleGlzdHMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgb2JqZWN0ICE9PSBudWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMuZXhpc3RzID0gZXhpc3RzO1xuXG5tb2R1bGUuZXhwb3J0cy5jaGVja01ldGhvZCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBjaGVja01ldGhvZE5hbWUgPSBuYW1lO1xufTtcblxubW9kdWxlLmV4cG9ydHMuY2hlY2tQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtLCBwYXJhbWV0ZXJOYW1lKSB7XG4gICAgaWYgKCFleGlzdHMocGFyYW0pKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHBhcmFtZXRlciAnICsgcGFyYW1ldGVyTmFtZSArICcgaXMgbWFuZGF0b3J5IGluICcgKyBjaGVja01ldGhvZE5hbWUpO1xuICAgIH1cbn07XG4iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbid1c2Ugc3RyaWN0JztcbnZhciBkb2xwaGluQ2xpZW50ID0gcmVxdWlyZSgnLi4vYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvZG9scGhpbi1wbGF0Zm9ybS5qcycpO1xuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScsIFtdKTtcblxuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScpLnByb3ZpZGVyKCckZG9scGhpbkNvbmZpZycsIFtmdW5jdGlvbiAoKSB7XG5cbiAgICB2YXIgJGNmZyA9IHt9O1xuICAgIHRoaXMuY29uZmlndXJlID0gZnVuY3Rpb24gKGNmZykge1xuICAgICAgICAkY2ZnID0gY2ZnO1xuICAgIH07XG5cbiAgICB0aGlzLiRnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkY2ZnO1xuICAgIH07XG5cbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScpLmZhY3RvcnkoJ2NsaWVudENvbnRleHRGYWN0b3J5JywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgZG9scGhpbkNsaWVudC5DbGllbnRDb250ZXh0RmFjdG9yeSgpO1xufSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nKS5mYWN0b3J5KCd2YW5pbGxhQ2xpZW50Q29udGV4dCcsIFsnY2xpZW50Q29udGV4dEZhY3RvcnknLCAnJGRvbHBoaW5Db25maWcnLCBmdW5jdGlvbiAoY2xpZW50Q29udGV4dEZhY3RvcnksICRkb2xwaGluQ29uZmlnKSB7XG4gICAgcmV0dXJuIGNsaWVudENvbnRleHRGYWN0b3J5LmNyZWF0ZSgkZG9scGhpbkNvbmZpZy5ET0xQSElOX1VSTCwgJGRvbHBoaW5Db25maWcpO1xufV0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnRG9scGhpblBsYXRmb3JtJykuZmFjdG9yeSgnZG9scGhpbkJpbmRpbmcnLCBbJyRyb290U2NvcGUnLCAnJHRpbWVvdXQnLCAndmFuaWxsYUNsaWVudENvbnRleHQnLCAnJGxvZycsIGZ1bmN0aW9uICgkcm9vdFNjb3BlLCAkdGltZW91dCwgdmFuaWxsYUNsaWVudENvbnRleHQsICRsb2cpIHtcblxuICAgICRyb290U2NvcGUud2FpdGluZ0Zvckdsb2JhbERvbHBoaW5BcHBseSA9IGZhbHNlO1xuXG4gICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEkcm9vdFNjb3BlLndhaXRpbmdGb3JHbG9iYWxEb2xwaGluQXBwbHkpIHtcbiAgICAgICAgICAgICRyb290U2NvcGUud2FpdGluZ0Zvckdsb2JhbERvbHBoaW5BcHBseSA9IHRydWU7XG4gICAgICAgICAgICAkdGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS53YWl0aW5nRm9yR2xvYmFsRG9scGhpbkFwcGx5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnQW5ndWxhciBhcHBseSBpcyBjYWxsZWQgYnkgRG9scGhpbiBQbGF0Zm9ybScpO1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkb2xwaGluQmluZGluZyA9IHtcblxuICAgICAgICBpbmplY3RBcnJheTogZnVuY3Rpb24gKGJhc2VBcnJheSwgc3RhcnRJbmRleCwgaW5zZXJ0QXJyYXkpIHtcbiAgICAgICAgICAgIGJhc2VBcnJheS5zcGxpY2UuYXBwbHkoYmFzZUFycmF5LCBbc3RhcnRJbmRleCwgMF0uY29uY2F0KGluc2VydEFycmF5KSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4aXN0czogZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgIT09ICd1bmRlZmluZWQnICYmIG9iamVjdCAhPT0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgZGVlcEVxdWFsOiBmdW5jdGlvbiAoYXJyYXkxLCBhcnJheTIpIHtcbiAgICAgICAgICAgIGlmIChhcnJheTEgPT09IGFycmF5MiB8fCAoIXRoaXMuZXhpc3RzKGFycmF5MSkgJiYgIXRoaXMuZXhpc3RzKGFycmF5MikpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5leGlzdHMoYXJyYXkxKSAhPT0gdGhpcy5leGlzdHMoYXJyYXkyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBuID0gYXJyYXkxLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChhcnJheTIubGVuZ3RoICE9PSBuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoYmVhbk1hbmFnZXIpIHtcbiAgICAgICAgICAgIGJlYW5NYW5hZ2VyLm9uQWRkZWQoZG9scGhpbkJpbmRpbmcub25CZWFuQWRkZWRIYW5kbGVyKTtcbiAgICAgICAgICAgIGJlYW5NYW5hZ2VyLm9uUmVtb3ZlZChkb2xwaGluQmluZGluZy5vbkJlYW5SZW1vdmVkSGFuZGxlcik7XG4gICAgICAgICAgICBiZWFuTWFuYWdlci5vbkJlYW5VcGRhdGUoZG9scGhpbkJpbmRpbmcub25CZWFuVXBkYXRlSGFuZGxlcik7XG4gICAgICAgICAgICBiZWFuTWFuYWdlci5vbkFycmF5VXBkYXRlKGRvbHBoaW5CaW5kaW5nLm9uQXJyYXlVcGRhdGVIYW5kbGVyKTtcblxuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnRG9scGhpbiBQbGF0Zm9ybSBiaW5kaW5nIGxpc3RlbmVycyBmb3IgQW5ndWxhciByZWdpc3RlcmVkJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoQXR0cmlidXRlOiBmdW5jdGlvbiAoYmVhbiwgYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdBZGRlZCBBbmd1bGFyIGxpc3RlbmVyIGZvciBwcm9wZXJ0eSAnICsgYXR0cmlidXRlICsgJyBvZiBiZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSk7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLiR3YXRjaChcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiZWFuW2F0dHJpYnV0ZV07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiAobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ1ZhbHVlICcgKyBhdHRyaWJ1dGUgKyAnIG9mIGJlYW4gJyArIEpTT04uc3RyaW5naWZ5KGJlYW4pICsgJyBjaGFuZ2VkIGZyb20gJyArIG9sZFZhbHVlICsgJyB0byAnICsgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB2YW5pbGxhQ2xpZW50Q29udGV4dC5iZWFuTWFuYWdlci5jbGFzc1JlcG9zaXRvcnkubm90aWZ5QmVhbkNoYW5nZShiZWFuLCBhdHRyaWJ1dGUsIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlYW5BZGRlZEhhbmRsZXI6IGZ1bmN0aW9uIChiZWFuKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdCZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSArICcgYWRkZWQnKTtcblxuICAgICAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBiZWFuKSB7XG4gICAgICAgICAgICAgICAgZG9scGhpbkJpbmRpbmcud2F0Y2hBdHRyaWJ1dGUoYmVhbiwgYXR0cik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRyb290U2NvcGUuYXBwbHlJbkFuZ3VsYXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWFuUmVtb3ZlZEhhbmRsZXI6IGZ1bmN0aW9uIChiZWFuKSB7XG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdCZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSArICcgcmVtb3ZlZCcpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlYW5VcGRhdGVIYW5kbGVyOiBmdW5jdGlvbiAoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBuZXdQcm9wZXJ0eSA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBhdHRyIGluIGJlYW4pIHtcbiAgICAgICAgICAgICAgICBpZiAoYXR0ciA9PT0gcHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Byb3BlcnR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobmV3UHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdWYWx1ZSAnICsgcHJvcGVydHlOYW1lICsgJyB3YXMgYWRkZWQgdG8gYmVhbiAnICsgSlNPTi5zdHJpbmdpZnkoYmVhbikpO1xuICAgICAgICAgICAgICAgIGRvbHBoaW5CaW5kaW5nLndhdGNoQXR0cmlidXRlKGJlYW4sIHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChvbGRWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdSZWNlaXZlZCBiZWFuIHVwZGF0ZSBmb3IgcHJvcGVydHkgJyArIHByb3BlcnR5TmFtZSArICcgd2l0aG91dCBhbnkgY2hhbmdlJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdCZWFuIHVwZGF0ZSBmb3IgcHJvcGVydHkgJyArIHByb3BlcnR5TmFtZSArICcgd2l0aCBuZXcgdmFsdWUgXCInICsgbmV3VmFsdWUgKyAnXCInKTtcblxuICAgICAgICAgICAgYmVhbltwcm9wZXJ0eU5hbWVdID0gbmV3VmFsdWU7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLmFwcGx5SW5Bbmd1bGFyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQXJyYXlVcGRhdGVIYW5kbGVyOiBmdW5jdGlvbiAoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIG5ld0VsZW1lbnRzKSB7XG4gICAgICAgICAgICB2YXIgYXJyYXkgPSBiZWFuW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICB2YXIgb2xkRWxlbWVudHMgPSBhcnJheS5zbGljZShpbmRleCwgaW5kZXggKyBjb3VudCk7XG4gICAgICAgICAgICBpZiAoZG9scGhpbkJpbmRpbmcuZGVlcEVxdWFsKG5ld0VsZW1lbnRzLCBvbGRFbGVtZW50cykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRsb2cuZGVidWcoJ0FycmF5IHVwZGF0ZSBmb3IgcHJvcGVydHkgJyArIHByb3BlcnR5TmFtZSArICcgc3RhcnRpbmcgYXQgaW5kZXggJyArIGluZGV4ICsgJyB3aXRoICcgKyBKU09OLnN0cmluZ2lmeShuZXdFbGVtZW50cykpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIG5ld0VsZW1lbnRzID09PSAndW5kZWZpbmVkJyB8fCAobmV3RWxlbWVudHMgJiYgbmV3RWxlbWVudHMubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgY291bnQpO1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUuYXBwbHlJbkFuZ3VsYXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9scGhpbkJpbmRpbmcuaW5qZWN0QXJyYXkoYXJyYXksIGluZGV4LCBuZXdFbGVtZW50cyk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGJlYW4gaW4gbmV3RWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBiZWFuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2xwaGluQmluZGluZy53YXRjaEF0dHJpYnV0ZShiZWFuLCBhdHRyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICRyb290U2NvcGUuYXBwbHlJbkFuZ3VsYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkbG9nLmRlYnVnKCdEb2xwaGluIFBsYXRmb3JtIGJpbmRpbmcgY3JlYXRlZCcpO1xuXG4gICAgcmV0dXJuIGRvbHBoaW5CaW5kaW5nO1xuXG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nKS5mYWN0b3J5KCdjbGllbnRDb250ZXh0JywgWyd2YW5pbGxhQ2xpZW50Q29udGV4dCcsICdkb2xwaGluQmluZGluZycsICckd2luZG93JywgJyRsb2cnLCBmdW5jdGlvbiAodmFuaWxsYUNsaWVudENvbnRleHQsIGRvbHBoaW5CaW5kaW5nLCAkd2luZG93LCAkbG9nKSB7XG4gICAgdmFyIGNsaWVudENvbnRleHQgPSB7XG4gICAgICAgIGNyZWF0ZUNvbnRyb2xsZXI6IGZ1bmN0aW9uIChzY29wZSwgY29udHJvbGxlck5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YW5pbGxhQ2xpZW50Q29udGV4dC5jcmVhdGVDb250cm9sbGVyKGNvbnRyb2xsZXJOYW1lKS50aGVuKGZ1bmN0aW9uIChjb250cm9sbGVyUHJveHkpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdDcmVhdGluZyBEb2xwaGluIFBsYXRmb3JtIGNvbnRyb2xsZXIgJyArIGNvbnRyb2xsZXJOYW1lKTtcbiAgICAgICAgICAgICAgICBzY29wZS4kb24oJyRkZXN0cm95JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdEZXN0cm95aW5nIERvbHBoaW4gUGxhdGZvcm0gY29udHJvbGxlciAnICsgY29udHJvbGxlck5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyUHJveHkuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNjb3BlLm1vZGVsID0gY29udHJvbGxlclByb3h5Lm1vZGVsO1xuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sbGVyUHJveHk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzY29ubmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFuaWxsYUNsaWVudENvbnRleHQuZGlzY29ubmVjdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gY29udGV4dCBkaXNjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjb25uZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YW5pbGxhQ2xpZW50Q29udGV4dC5jb25uZWN0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnRG9scGhpbiBQbGF0Zm9ybSBjb250ZXh0IGNvbm5lY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29ubmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbmlsbGFDbGllbnRDb250ZXh0Lm9uQ29ubmVjdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gY29udGV4dCBjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGRvbHBoaW5CaW5kaW5nLmluaXQodmFuaWxsYUNsaWVudENvbnRleHQuYmVhbk1hbmFnZXIpO1xuICAgICR3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBjbGllbnRDb250ZXh0LmRpc2Nvbm5lY3Q7XG5cbiAgICAkbG9nLmRlYnVnKCdEb2xwaGluIFBsYXRmb3JtIGNvbnRleHQgY3JlYXRlZCcpO1xuXG4gICAgcmV0dXJuIGNsaWVudENvbnRleHQ7XG59XSk7XG4iXX0=
