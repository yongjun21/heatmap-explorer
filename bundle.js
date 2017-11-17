(function () {
'use strict';

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof$1(value)) == 'object';
}

var isObjectLike_1 = isObjectLike;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike_1(value) && objectToString.call(value) == symbolTag;
}

var isSymbol_1 = isSymbol;

function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined ? current === current && !isSymbol_1(current) : comparator(current, computed))) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

var _baseExtremum = baseExtremum;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

var eq_1 = eq;

function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

var _listCacheDelete = listCacheDelete;

function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

function stackClear() {
  this.__data__ = new _ListCache();
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  return this.__data__['delete'](key);
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

var _typeof$3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof$3(value);
  return !!value && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

var funcTag = '[object Function]';
var genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$1 = objectProto$2.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject_1(value) ? objectToString$1.call(value) : '';
  return tag == funcTag || tag == genTag;
}

var isFunction_1 = isFunction;

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

var _isHostObject = isHostObject;

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _typeof$5 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = _typeof$5(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

var _typeof$4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof$4(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype;
var objectProto$1 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto$1.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) || _isHostObject(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

var Map = _getNative(_root, 'Map');

var _Map = Map;

var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

var _hashDelete = hashDelete;

var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? data[key] !== undefined : hasOwnProperty$2.call(data, key);
}

var _hashHas = hashHas;

var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = _nativeCreate && value === undefined ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

function mapCacheClear() {
  this.__data__ = {
    'hash': new _Hash(),
    'map': new (_Map || _ListCache)(),
    'string': new _Hash()
  };
}

var _mapCacheClear = mapCacheClear;

var _typeof$6 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof$6(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

var _isKeyable = isKeyable;

function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

var _getMapData = getMapData;

function mapCacheDelete(key) {
  return _getMapData(this, key)['delete'](key);
}

var _mapCacheDelete = mapCacheDelete;

function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

function mapCacheSet(key, value) {
  _getMapData(this, key).set(key, value);
  return this;
}

var _mapCacheSet = mapCacheSet;

function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var cache = this.__data__;
  if (cache instanceof _ListCache) {
    var pairs = cache.__data__;
    if (!_Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      return this;
    }
    cache = this.__data__ = new _MapCache(pairs);
  }
  cache.set(key, value);
  return this;
}

var _stackSet = stackSet;

function Stack(entries) {
  this.__data__ = new _ListCache(entries);
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED$2);
  return this;
}

var _setCacheAdd = setCacheAdd;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas;

function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new _MapCache();
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

var _SetCache = SetCache;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome;

var UNORDERED_COMPARE_FLAG$1 = 1;
var PARTIAL_COMPARE_FLAG$2 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG$2,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & UNORDERED_COMPARE_FLAG$1 ? new _SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function (othValue, othIndex) {
        if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
          return seen.add(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays;

var _Symbol2 = _root.Symbol;

var _Symbol = _Symbol2;

var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray;

var UNORDERED_COMPARE_FLAG$2 = 1;
var PARTIAL_COMPARE_FLAG$3 = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var symbolTag$1 = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined;
var symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new _Uint8Array(object), new _Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq_1(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & PARTIAL_COMPARE_FLAG$3;
      convert || (convert = _setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= UNORDERED_COMPARE_FLAG$2;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
      stack['delete'](object);
      return result;

    case symbolTag$1:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

var argsTag$1 = '[object Arguments]';

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$2 = objectProto$8.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$8.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject_1(value) && hasOwnProperty$6.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString$2.call(value) == argsTag$1);
}

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER$1 : length;
  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

var _isIndex = isIndex;

var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = isArray_1(value) || isArguments_1(value) ? _baseTimes(value.length, String) : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$5.call(value, key)) && !(skipIndexes && (key == 'length' || _isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/** Used for built-in method references. */
var objectProto$10 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$10;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

var nativeKeys = _overArg(Object.keys, Object);

var _nativeKeys = nativeKeys;

var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!_isPrototype(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$7.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys;

function keys(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object) : _baseKeys(object);
}

var keys_1 = keys;

var PARTIAL_COMPARE_FLAG$4 = 2;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} customizer The function to customize comparisons.
 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
  var isPartial = bitmask & PARTIAL_COMPARE_FLAG$4,
      objProps = keys_1(object),
      objLength = objProps.length,
      othProps = keys_1(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$4.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects;

var DataView = _getNative(_root, 'DataView');

var _DataView = DataView;

var Promise$1 = _getNative(_root, 'Promise');

var _Promise = Promise$1;

var Set = _getNative(_root, 'Set');

var _Set = Set;

var WeakMap = _getNative(_root, 'WeakMap');

var _WeakMap = WeakMap;

/** Used for built-in method references. */
var objectProto$12 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$4 = objectProto$12.toString;

/**
 * The base implementation of `getTag`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  return objectToString$4.call(value);
}

var _baseGetTag = baseGetTag;

var mapTag$1 = '[object Map]';
var objectTag$1 = '[object Object]';
var promiseTag = '[object Promise]';
var setTag$1 = '[object Set]';
var weakMapTag = '[object WeakMap]';

var dataViewTag$1 = '[object DataView]';

/** Used for built-in method references. */
var objectProto$11 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$3 = objectProto$11.toString;

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = _toSource(_DataView);
var mapCtorString = _toSource(_Map);
var promiseCtorString = _toSource(_Promise);
var setCtorString = _toSource(_Set);
var weakMapCtorString = _toSource(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11,
// for data views in Edge < 14, and promises in Node.js.
if (_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag$1 || _Map && getTag(new _Map()) != mapTag$1 || _Promise && getTag(_Promise.resolve()) != promiseTag || _Set && getTag(new _Set()) != setTag$1 || _WeakMap && getTag(new _WeakMap()) != weakMapTag) {
    getTag = function getTag(value) {
        var result = objectToString$3.call(value),
            Ctor = result == objectTag$1 ? value.constructor : undefined,
            ctorString = Ctor ? _toSource(Ctor) : undefined;

        if (ctorString) {
            switch (ctorString) {
                case dataViewCtorString:
                    return dataViewTag$1;
                case mapCtorString:
                    return mapTag$1;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag$1;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}

var _getTag = getTag;

var argsTag$2 = '[object Arguments]';
var arrayTag$1 = '[object Array]';
var boolTag$1 = '[object Boolean]';
var dateTag$1 = '[object Date]';
var errorTag$1 = '[object Error]';
var funcTag$1 = '[object Function]';
var mapTag$2 = '[object Map]';
var numberTag$1 = '[object Number]';
var objectTag$2 = '[object Object]';
var regexpTag$1 = '[object RegExp]';
var setTag$2 = '[object Set]';
var stringTag$1 = '[object String]';
var weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag$1 = '[object ArrayBuffer]';
var dataViewTag$2 = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$2] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag$1] = typedArrayTags[boolTag$1] = typedArrayTags[dataViewTag$2] = typedArrayTags[dateTag$1] = typedArrayTags[errorTag$1] = typedArrayTags[funcTag$1] = typedArrayTags[mapTag$2] = typedArrayTags[numberTag$1] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag$1] = typedArrayTags[setTag$2] = typedArrayTags[stringTag$1] = typedArrayTags[weakMapTag$1] = false;

/** Used for built-in method references. */
var objectProto$13 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString$5 = objectProto$13.toString;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike_1(value) && isLength_1(value.length) && !!typedArrayTags[objectToString$5.call(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && _freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = function () {
    try {
      return freeProcess && freeProcess.binding('util');
    } catch (e) {}
  }();

  module.exports = nodeUtil;
});

var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

var PARTIAL_COMPARE_FLAG$1 = 2;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';
var arrayTag = '[object Array]';
var objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$5.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
 *  for more details.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
  var objIsArr = isArray_1(object),
      othIsArr = isArray_1(other),
      objTag = arrayTag,
      othTag = arrayTag;

  if (!objIsArr) {
    objTag = _getTag(object);
    objTag = objTag == argsTag ? objectTag : objTag;
  }
  if (!othIsArr) {
    othTag = _getTag(other);
    othTag = othTag == argsTag ? objectTag : othTag;
  }
  var objIsObj = objTag == objectTag && !_isHostObject(object),
      othIsObj = othTag == objectTag && !_isHostObject(other),
      isSameTag = objTag == othTag;

  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack());
    return objIsArr || isTypedArray_1(object) ? _equalArrays(object, other, equalFunc, customizer, bitmask, stack) : _equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
  }
  if (!(bitmask & PARTIAL_COMPARE_FLAG$1)) {
    var objIsWrapped = objIsObj && hasOwnProperty$3.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty$3.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack());
      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack());
  return _equalObjects(object, other, equalFunc, customizer, bitmask, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep;

function baseIsEqual(value, other, customizer, bitmask, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObject_1(value) && !isObjectLike_1(other)) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
}

var _baseIsEqual = baseIsEqual;

var UNORDERED_COMPARE_FLAG = 1;
var PARTIAL_COMPARE_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new _Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? _baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

var _baseIsMatch = baseIsMatch;

function isStrictComparable(value) {
  return value === value && !isObject_1(value);
}

var _isStrictComparable = isStrictComparable;

function getMatchData(object) {
  var result = keys_1(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, _isStrictComparable(value)];
  }
  return result;
}

var _getMatchData = getMatchData;

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

var _matchesStrictComparable = matchesStrictComparable;

function baseMatches(source) {
  var matchData = _getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return _matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || _baseIsMatch(object, source, matchData);
  };
}

var _baseMatches = baseMatches;

var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result);
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache)();
  return memoized;
}

// Assign cache to `_.memoize`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = _Symbol ? _Symbol.prototype : undefined;
var symbolToString = symbolProto$1 ? symbolProto$1.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

var _baseToString = baseToString;

function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

var reLeadingDot = /^\./;
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoize_1(function (string) {
  string = toString_1(string);

  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function (match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

var _stringToPath = stringToPath;

function castPath(value) {
  return isArray_1(value) ? value : _stringToPath(value);
}

var _castPath = castPath;

var _typeof$7 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value === 'undefined' ? 'undefined' : _typeof$7(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

var _isKey = isKey;

var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY$1 ? '-0' : result;
}

var _toKey = toKey;

function baseGet(object, path) {
  path = _isKey(path, object) ? [path] : _castPath(path);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

var _baseGet = baseGet;

function get$1(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get$1;

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

var _baseHasIn = baseHasIn;

function hasPath(object, path, hasFunc) {
  path = _isKey(path, object) ? [path] : _castPath(path);

  var result,
      index = -1,
      length = path.length;

  while (++index < length) {
    var key = _toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result) {
    return result;
  }
  var length = object ? object.length : 0;
  return !!length && isLength_1(length) && _isIndex(key, length) && (isArray_1(object) || isArguments_1(object));
}

var _hasPath = hasPath;

function hasIn(object, path) {
  return object != null && _hasPath(object, path, _baseHasIn);
}

var hasIn_1 = hasIn;

var UNORDERED_COMPARE_FLAG$3 = 1;
var PARTIAL_COMPARE_FLAG$5 = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (_isKey(path) && _isStrictComparable(srcValue)) {
    return _matchesStrictComparable(_toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get_1(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn_1(object, path) : _baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG$3 | PARTIAL_COMPARE_FLAG$5);
  };
}

var _baseMatchesProperty = baseMatchesProperty;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

var _baseProperty = baseProperty;

function basePropertyDeep(path) {
  return function (object) {
    return _baseGet(object, path);
  };
}

var _basePropertyDeep = basePropertyDeep;

function property(path) {
  return _isKey(path) ? _baseProperty(_toKey(path)) : _basePropertyDeep(path);
}

var property_1 = property;

var _typeof$2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity_1;
  }
  if ((typeof value === 'undefined' ? 'undefined' : _typeof$2(value)) == 'object') {
    return isArray_1(value) ? _baseMatchesProperty(value[0], value[1]) : _baseMatches(value);
  }
  return property_1(value);
}

var _baseIteratee = baseIteratee;

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

var _baseLt = baseLt;

function minBy(array, iteratee) {
  return array && array.length ? _baseExtremum(array, _baseIteratee(iteratee, 2), _baseLt) : undefined;
}

var minBy_1 = minBy;

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

var _baseGt = baseGt;

function maxBy(array, iteratee) {
  return array && array.length ? _baseExtremum(array, _baseIteratee(iteratee, 2), _baseGt) : undefined;
}

var maxBy_1 = maxBy;

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach;

var objectProto$14 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$14.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$8.call(object, key) && eq_1(objValue, value)) || value === undefined && !(key in object)) {
    object[key] = value;
  }
}

var _assignValue = assignValue;

function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    _assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

var _copyObject = copyObject;

function baseAssign(object, source) {
  return object && _copyObject(source, keys_1(source), object);
}

var _baseAssign = baseAssign;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var result = new buffer.constructor(buffer.length);
  buffer.copy(result);
  return result;
}

var _cloneBuffer = cloneBuffer;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

var stubArray_1 = stubArray;

var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbol properties of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = nativeGetSymbols ? _overArg(nativeGetSymbols, Object) : stubArray_1;

var _getSymbols = getSymbols;

function copySymbols(source, object) {
  return _copyObject(source, _getSymbols(source), object);
}

var _copySymbols = copySymbols;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush;

function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray_1(object) ? result : _arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys;

function getAllKeys(object) {
  return _baseGetAllKeys(object, keys_1, _getSymbols);
}

var _getAllKeys = getAllKeys;

/** Used for built-in method references. */
var objectProto$15 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$9 = objectProto$15.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty$9.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

var _initCloneArray = initCloneArray;

function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

var _cloneDataView = cloneDataView;

/**
 * Adds the key-value `pair` to `map`.
 *
 * @private
 * @param {Object} map The map to modify.
 * @param {Array} pair The key-value pair to add.
 * @returns {Object} Returns `map`.
 */
function addMapEntry(map, pair) {
  // Don't return `map.set` because it's not chainable in IE 11.
  map.set(pair[0], pair[1]);
  return map;
}

var _addMapEntry = addMapEntry;

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

var _arrayReduce = arrayReduce;

function cloneMap(map, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(_mapToArray(map), true) : _mapToArray(map);
  return _arrayReduce(array, _addMapEntry, new map.constructor());
}

var _cloneMap = cloneMap;

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

var _cloneRegExp = cloneRegExp;

/**
 * Adds `value` to `set`.
 *
 * @private
 * @param {Object} set The set to modify.
 * @param {*} value The value to add.
 * @returns {Object} Returns `set`.
 */
function addSetEntry(set, value) {
  // Don't return `set.add` because it's not chainable in IE 11.
  set.add(value);
  return set;
}

var _addSetEntry = addSetEntry;

function cloneSet(set, isDeep, cloneFunc) {
  var array = isDeep ? cloneFunc(_setToArray(set), true) : _setToArray(set);
  return _arrayReduce(array, _addSetEntry, new set.constructor());
}

var _cloneSet = cloneSet;

var symbolProto$2 = _Symbol ? _Symbol.prototype : undefined;
var symbolValueOf$1 = symbolProto$2 ? symbolProto$2.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf$1 ? Object(symbolValueOf$1.call(symbol)) : {};
}

var _cloneSymbol = cloneSymbol;

function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

var boolTag$3 = '[object Boolean]';
var dateTag$3 = '[object Date]';
var mapTag$4 = '[object Map]';
var numberTag$3 = '[object Number]';
var regexpTag$3 = '[object RegExp]';
var setTag$4 = '[object Set]';
var stringTag$3 = '[object String]';
var symbolTag$3 = '[object Symbol]';

var arrayBufferTag$3 = '[object ArrayBuffer]';
var dataViewTag$4 = '[object DataView]';
var float32Tag$2 = '[object Float32Array]';
var float64Tag$2 = '[object Float64Array]';
var int8Tag$2 = '[object Int8Array]';
var int16Tag$2 = '[object Int16Array]';
var int32Tag$2 = '[object Int32Array]';
var uint8Tag$2 = '[object Uint8Array]';
var uint8ClampedTag$2 = '[object Uint8ClampedArray]';
var uint16Tag$2 = '[object Uint16Array]';
var uint32Tag$2 = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {Function} cloneFunc The function to clone values.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, cloneFunc, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag$3:
      return _cloneArrayBuffer(object);

    case boolTag$3:
    case dateTag$3:
      return new Ctor(+object);

    case dataViewTag$4:
      return _cloneDataView(object, isDeep);

    case float32Tag$2:case float64Tag$2:
    case int8Tag$2:case int16Tag$2:case int32Tag$2:
    case uint8Tag$2:case uint8ClampedTag$2:case uint16Tag$2:case uint32Tag$2:
      return _cloneTypedArray(object, isDeep);

    case mapTag$4:
      return _cloneMap(object, isDeep, cloneFunc);

    case numberTag$3:
    case stringTag$3:
      return new Ctor(object);

    case regexpTag$3:
      return _cloneRegExp(object);

    case setTag$4:
      return _cloneSet(object, isDeep, cloneFunc);

    case symbolTag$3:
      return _cloneSymbol(object);
  }
}

var _initCloneByTag = initCloneByTag;

var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} prototype The object to inherit from.
 * @returns {Object} Returns the new object.
 */
function baseCreate(proto) {
  return isObject_1(proto) ? objectCreate(proto) : {};
}

var _baseCreate = baseCreate;

var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

function initCloneObject(object) {
  return typeof object.constructor == 'function' && !_isPrototype(object) ? _baseCreate(_getPrototype(object)) : {};
}

var _initCloneObject = initCloneObject;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse_1;

  module.exports = isBuffer;
});

var argsTag$3 = '[object Arguments]';
var arrayTag$2 = '[object Array]';
var boolTag$2 = '[object Boolean]';
var dateTag$2 = '[object Date]';
var errorTag$2 = '[object Error]';
var funcTag$2 = '[object Function]';
var genTag$1 = '[object GeneratorFunction]';
var mapTag$3 = '[object Map]';
var numberTag$2 = '[object Number]';
var objectTag$3 = '[object Object]';
var regexpTag$2 = '[object RegExp]';
var setTag$3 = '[object Set]';
var stringTag$2 = '[object String]';
var symbolTag$2 = '[object Symbol]';
var weakMapTag$2 = '[object WeakMap]';

var arrayBufferTag$2 = '[object ArrayBuffer]';
var dataViewTag$3 = '[object DataView]';
var float32Tag$1 = '[object Float32Array]';
var float64Tag$1 = '[object Float64Array]';
var int8Tag$1 = '[object Int8Array]';
var int16Tag$1 = '[object Int16Array]';
var int32Tag$1 = '[object Int32Array]';
var uint8Tag$1 = '[object Uint8Array]';
var uint8ClampedTag$1 = '[object Uint8ClampedArray]';
var uint16Tag$1 = '[object Uint16Array]';
var uint32Tag$1 = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag$3] = cloneableTags[arrayTag$2] = cloneableTags[arrayBufferTag$2] = cloneableTags[dataViewTag$3] = cloneableTags[boolTag$2] = cloneableTags[dateTag$2] = cloneableTags[float32Tag$1] = cloneableTags[float64Tag$1] = cloneableTags[int8Tag$1] = cloneableTags[int16Tag$1] = cloneableTags[int32Tag$1] = cloneableTags[mapTag$3] = cloneableTags[numberTag$2] = cloneableTags[objectTag$3] = cloneableTags[regexpTag$2] = cloneableTags[setTag$3] = cloneableTags[stringTag$2] = cloneableTags[symbolTag$2] = cloneableTags[uint8Tag$1] = cloneableTags[uint8ClampedTag$1] = cloneableTags[uint16Tag$1] = cloneableTags[uint32Tag$1] = true;
cloneableTags[errorTag$2] = cloneableTags[funcTag$2] = cloneableTags[weakMapTag$2] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @param {boolean} [isFull] Specify a clone including symbols.
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
  var result;
  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject_1(value)) {
    return value;
  }
  var isArr = isArray_1(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return _copyArray(value, result);
    }
  } else {
    var tag = _getTag(value),
        isFunc = tag == funcTag$2 || tag == genTag$1;

    if (isBuffer_1(value)) {
      return _cloneBuffer(value, isDeep);
    }
    if (tag == objectTag$3 || tag == argsTag$3 || isFunc && !object) {
      if (_isHostObject(value)) {
        return object ? value : {};
      }
      result = _initCloneObject(isFunc ? {} : value);
      if (!isDeep) {
        return _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, baseClone, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (!isArr) {
    var props = isFull ? _getAllKeys(value) : keys_1(value);
  }
  _arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    _assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
  });
  return result;
}

var _baseClone = baseClone;

function cloneDeep(value) {
  return _baseClone(value, true, true);
}

var cloneDeep_1 = cloneDeep;

function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

var isEqual_1 = isEqual;

/**
 * A specialized version of `baseAggregator` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} setter The function to set `accumulator` values.
 * @param {Function} iteratee The iteratee to transform keys.
 * @param {Object} accumulator The initial aggregated object.
 * @returns {Function} Returns `accumulator`.
 */
function arrayAggregator(array, setter, iteratee, accumulator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    var value = array[index];
    setter(accumulator, value, iteratee(value), array);
  }
  return accumulator;
}

var _arrayAggregator = arrayAggregator;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

var baseFor = _createBaseFor();

var _baseFor = baseFor;

function baseForOwn(object, iteratee) {
  return object && _baseFor(object, iteratee, keys_1);
}

var _baseForOwn = baseForOwn;

function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike_1(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach;

var baseEach = _createBaseEach(_baseForOwn);

var _baseEach = baseEach;

function baseAggregator(collection, setter, iteratee, accumulator) {
  _baseEach(collection, function (value, key, collection) {
    setter(accumulator, value, iteratee(value), collection);
  });
  return accumulator;
}

var _baseAggregator = baseAggregator;

function createAggregator(setter, initializer) {
  return function (collection, iteratee) {
    var func = isArray_1(collection) ? _arrayAggregator : _baseAggregator,
        accumulator = initializer ? initializer() : {};

    return func(collection, setter, _baseIteratee(iteratee, 2), accumulator);
  };
}

var _createAggregator = createAggregator;

var partition = _createAggregator(function (result, value, key) {
  result[key ? 0 : 1].push(value);
}, function () {
  return [[], []];
});

var partition_1 = partition;

var polyline_1 = createCommonjsModule(function (module) {
    var polyline = {};

    function py2_round(value) {
        // Google's polyline algorithm uses the same rounding strategy as Python 2, which is different from JS for negative values
        return Math.floor(Math.abs(value) + 0.5) * Math.sign(value);
    }

    function encode(current, previous, factor) {
        current = py2_round(current * factor);
        previous = py2_round(previous * factor);
        var coordinate = current - previous;
        coordinate <<= 1;
        if (current - previous < 0) {
            coordinate = ~coordinate;
        }
        var output = '';
        while (coordinate >= 0x20) {
            output += String.fromCharCode((0x20 | coordinate & 0x1f) + 63);
            coordinate >>= 5;
        }
        output += String.fromCharCode(coordinate + 63);
        return output;
    }

    /**
     * Decodes to a [latitude, longitude] coordinates array.
     *
     * This is adapted from the implementation in Project-OSRM.
     *
     * @param {String} str
     * @param {Number} precision
     * @returns {Array}
     *
     * @see https://github.com/Project-OSRM/osrm-frontend/blob/master/WebContent/routing/OSRM.RoutingGeometry.js
     */
    polyline.decode = function (str, precision) {
        var index = 0,
            lat = 0,
            lng = 0,
            coordinates = [],
            shift = 0,
            result = 0,
            byte = null,
            latitude_change,
            longitude_change,
            factor = Math.pow(10, precision || 5);

        // Coordinates have variable length when encoded, so just keep
        // track of whether we've hit the end of the string. In each
        // loop iteration, a single coordinate is decoded.
        while (index < str.length) {

            // Reset shift, result, and byte
            byte = null;
            shift = 0;
            result = 0;

            do {
                byte = str.charCodeAt(index++) - 63;
                result |= (byte & 0x1f) << shift;
                shift += 5;
            } while (byte >= 0x20);

            latitude_change = result & 1 ? ~(result >> 1) : result >> 1;

            shift = result = 0;

            do {
                byte = str.charCodeAt(index++) - 63;
                result |= (byte & 0x1f) << shift;
                shift += 5;
            } while (byte >= 0x20);

            longitude_change = result & 1 ? ~(result >> 1) : result >> 1;

            lat += latitude_change;
            lng += longitude_change;

            coordinates.push([lat / factor, lng / factor]);
        }

        return coordinates;
    };

    /**
     * Encodes the given [latitude, longitude] coordinates array.
     *
     * @param {Array.<Array.<Number>>} coordinates
     * @param {Number} precision
     * @returns {String}
     */
    polyline.encode = function (coordinates, precision) {
        if (!coordinates.length) {
            return '';
        }

        var factor = Math.pow(10, precision || 5),
            output = encode(coordinates[0][0], 0, factor) + encode(coordinates[0][1], 0, factor);

        for (var i = 1; i < coordinates.length; i++) {
            var a = coordinates[i],
                b = coordinates[i - 1];
            output += encode(a[0], b[0], factor);
            output += encode(a[1], b[1], factor);
        }

        return output;
    };

    function flipped(coords) {
        var flipped = [];
        for (var i = 0; i < coords.length; i++) {
            flipped.push(coords[i].slice().reverse());
        }
        return flipped;
    }

    /**
     * Encodes a GeoJSON LineString feature/geometry.
     *
     * @param {Object} geojson
     * @param {Number} precision
     * @returns {String}
     */
    polyline.fromGeoJSON = function (geojson, precision) {
        if (geojson && geojson.type === 'Feature') {
            geojson = geojson.geometry;
        }
        if (!geojson || geojson.type !== 'LineString') {
            throw new Error('Input must be a GeoJSON LineString');
        }
        return polyline.encode(flipped(geojson.coordinates), precision);
    };

    /**
     * Decodes to a GeoJSON LineString geometry.
     *
     * @param {String} str
     * @param {Number} precision
     * @returns {Object}
     */
    polyline.toGeoJSON = function (str, precision) {
        var coords = polyline.decode(str, precision);
        return {
            type: 'LineString',
            coordinates: flipped(coords)
        };
    };

    if ('object' === 'object' && module.exports) {
        module.exports = polyline;
    }
});

var global$1 = function global(defs) {
  defs('EPSG:4326', "+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees");
  defs('EPSG:4269', "+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees");
  defs('EPSG:3857', "+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");

  defs.WGS84 = defs['EPSG:4326'];
  defs['EPSG:3785'] = defs['EPSG:3857']; // maintain backward compat, official code is 3857
  defs.GOOGLE = defs['EPSG:3857'];
  defs['EPSG:900913'] = defs['EPSG:3857'];
  defs['EPSG:102113'] = defs['EPSG:3857'];
};

var greenwich = 0.0; //"0dE",
var lisbon = -9.131906111111; //"9d07'54.862\"W",
var paris = 2.337229166667; //"2d20'14.025\"E",
var bogota = -74.080916666667; //"74d04'51.3\"W",
var madrid = -3.687938888889; //"3d41'16.58\"W",
var rome = 12.452333333333; //"12d27'8.4\"E",
var bern = 7.439583333333; //"7d26'22.5\"E",
var jakarta = 106.807719444444; //"106d48'27.79\"E",
var ferro = -17.666666666667; //"17d40'W",
var brussels = 4.367975; //"4d22'4.71\"E",
var stockholm = 18.058277777778; //"18d3'29.8\"E",
var athens = 23.7163375; //"23d42'58.815\"E",
var oslo = 10.722916666667; //"10d43'22.5\"E"

var PrimeMeridian = {
	greenwich: greenwich,
	lisbon: lisbon,
	paris: paris,
	bogota: bogota,
	madrid: madrid,
	rome: rome,
	bern: bern,
	jakarta: jakarta,
	ferro: ferro,
	brussels: brussels,
	stockholm: stockholm,
	athens: athens,
	oslo: oslo
};

var units = createCommonjsModule(function (module, exports) {
  exports.ft = { to_meter: 0.3048 };
  exports['us-ft'] = { to_meter: 1200 / 3937 };
});

var units_1 = units.ft;

var D2R = 0.01745329251994329577;

var projString = function projString(defData) {
  var self = {};
  var paramObj = {};
  defData.split("+").map(function (v) {
    return v.trim();
  }).filter(function (a) {
    return a;
  }).forEach(function (a) {
    var split = a.split("=");
    split.push(true);
    paramObj[split[0].toLowerCase()] = split[1];
  });
  var paramName, paramVal, paramOutname;
  var params = {
    proj: 'projName',
    datum: 'datumCode',
    rf: function rf(v) {
      self.rf = parseFloat(v);
    },
    lat_0: function lat_0(v) {
      self.lat0 = v * D2R;
    },
    lat_1: function lat_1(v) {
      self.lat1 = v * D2R;
    },
    lat_2: function lat_2(v) {
      self.lat2 = v * D2R;
    },
    lat_ts: function lat_ts(v) {
      self.lat_ts = v * D2R;
    },
    lon_0: function lon_0(v) {
      self.long0 = v * D2R;
    },
    lon_1: function lon_1(v) {
      self.long1 = v * D2R;
    },
    lon_2: function lon_2(v) {
      self.long2 = v * D2R;
    },
    alpha: function alpha(v) {
      self.alpha = parseFloat(v) * D2R;
    },
    lonc: function lonc(v) {
      self.longc = v * D2R;
    },
    x_0: function x_0(v) {
      self.x0 = parseFloat(v);
    },
    y_0: function y_0(v) {
      self.y0 = parseFloat(v);
    },
    k_0: function k_0(v) {
      self.k0 = parseFloat(v);
    },
    k: function k(v) {
      self.k0 = parseFloat(v);
    },
    a: function a(v) {
      self.a = parseFloat(v);
    },
    b: function b(v) {
      self.b = parseFloat(v);
    },
    r_a: function r_a() {
      self.R_A = true;
    },
    zone: function zone(v) {
      self.zone = parseInt(v, 10);
    },
    south: function south() {
      self.utmSouth = true;
    },
    towgs84: function towgs84(v) {
      self.datum_params = v.split(",").map(function (a) {
        return parseFloat(a);
      });
    },
    to_meter: function to_meter(v) {
      self.to_meter = parseFloat(v);
    },
    units: function units$$1(v) {
      self.units = v;
      if (units[v]) {
        self.to_meter = units[v].to_meter;
      }
    },
    from_greenwich: function from_greenwich(v) {
      self.from_greenwich = v * D2R;
    },
    pm: function pm(v) {
      self.from_greenwich = (PrimeMeridian[v] ? PrimeMeridian[v] : parseFloat(v)) * D2R;
    },
    nadgrids: function nadgrids(v) {
      if (v === '@null') {
        self.datumCode = 'none';
      } else {
        self.nadgrids = v;
      }
    },
    axis: function axis(v) {
      var legalAxis = "ewnsud";
      if (v.length === 3 && legalAxis.indexOf(v.substr(0, 1)) !== -1 && legalAxis.indexOf(v.substr(1, 1)) !== -1 && legalAxis.indexOf(v.substr(2, 1)) !== -1) {
        self.axis = v;
      }
    }
  };
  for (paramName in paramObj) {
    paramVal = paramObj[paramName];
    if (paramName in params) {
      paramOutname = params[paramName];
      if (typeof paramOutname === 'function') {
        paramOutname(paramVal);
      } else {
        self[paramOutname] = paramVal;
      }
    } else {
      self[paramName] = paramVal;
    }
  }
  if (typeof self.datumCode === 'string' && self.datumCode !== "WGS84") {
    self.datumCode = self.datumCode.toLowerCase();
  }
  return self;
};

var extend = function extend(destination, source) {
  destination = destination || {};
  var value, property;
  if (!source) {
    return destination;
  }
  for (property in source) {
    value = source[property];
    if (value !== undefined) {
      destination[property] = value;
    }
  }
  return destination;
};

var _typeof$9 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var D2R$1 = 0.01745329251994329577;

function mapit(obj, key, v) {
  obj[key] = v.map(function (aa) {
    var o = {};
    sExpr(aa, o);
    return o;
  }).reduce(function (a, b) {
    return extend(a, b);
  }, {});
}

function sExpr(v, obj) {
  var key;
  if (!Array.isArray(v)) {
    obj[v] = true;
    return;
  } else {
    key = v.shift();
    if (key === 'PARAMETER') {
      key = v.shift();
    }
    if (v.length === 1) {
      if (Array.isArray(v[0])) {
        obj[key] = {};
        sExpr(v[0], obj[key]);
      } else {
        obj[key] = v[0];
      }
    } else if (!v.length) {
      obj[key] = true;
    } else if (key === 'TOWGS84') {
      obj[key] = v;
    } else {
      obj[key] = {};
      if (['UNIT', 'PRIMEM', 'VERT_DATUM'].indexOf(key) > -1) {
        obj[key] = {
          name: v[0].toLowerCase(),
          convert: v[1]
        };
        if (v.length === 3) {
          obj[key].auth = v[2];
        }
      } else if (key === 'SPHEROID') {
        obj[key] = {
          name: v[0],
          a: v[1],
          rf: v[2]
        };
        if (v.length === 4) {
          obj[key].auth = v[3];
        }
      } else if (['GEOGCS', 'GEOCCS', 'DATUM', 'VERT_CS', 'COMPD_CS', 'LOCAL_CS', 'FITTED_CS', 'LOCAL_DATUM'].indexOf(key) > -1) {
        v[0] = ['name', v[0]];
        mapit(obj, key, v);
      } else if (v.every(function (aa) {
        return Array.isArray(aa);
      })) {
        mapit(obj, key, v);
      } else {
        sExpr(v, obj[key]);
      }
    }
  }
}

function rename(obj, params) {
  var outName = params[0];
  var inName = params[1];
  if (!(outName in obj) && inName in obj) {
    obj[outName] = obj[inName];
    if (params.length === 3) {
      obj[outName] = params[2](obj[outName]);
    }
  }
}

function d2r(input) {
  return input * D2R$1;
}

function cleanWKT(wkt) {
  if (wkt.type === 'GEOGCS') {
    wkt.projName = 'longlat';
  } else if (wkt.type === 'LOCAL_CS') {
    wkt.projName = 'identity';
    wkt.local = true;
  } else {
    if (_typeof$9(wkt.PROJECTION) === "object") {
      wkt.projName = Object.keys(wkt.PROJECTION)[0];
    } else {
      wkt.projName = wkt.PROJECTION;
    }
  }
  if (wkt.UNIT) {
    wkt.units = wkt.UNIT.name.toLowerCase();
    if (wkt.units === 'metre') {
      wkt.units = 'meter';
    }
    if (wkt.UNIT.convert) {
      if (wkt.type === 'GEOGCS') {
        if (wkt.DATUM && wkt.DATUM.SPHEROID) {
          wkt.to_meter = parseFloat(wkt.UNIT.convert, 10) * wkt.DATUM.SPHEROID.a;
        }
      } else {
        wkt.to_meter = parseFloat(wkt.UNIT.convert, 10);
      }
    }
  }

  if (wkt.GEOGCS) {
    //if(wkt.GEOGCS.PRIMEM&&wkt.GEOGCS.PRIMEM.convert){
    //  wkt.from_greenwich=wkt.GEOGCS.PRIMEM.convert*D2R;
    //}
    if (wkt.GEOGCS.DATUM) {
      wkt.datumCode = wkt.GEOGCS.DATUM.name.toLowerCase();
    } else {
      wkt.datumCode = wkt.GEOGCS.name.toLowerCase();
    }
    if (wkt.datumCode.slice(0, 2) === 'd_') {
      wkt.datumCode = wkt.datumCode.slice(2);
    }
    if (wkt.datumCode === 'new_zealand_geodetic_datum_1949' || wkt.datumCode === 'new_zealand_1949') {
      wkt.datumCode = 'nzgd49';
    }
    if (wkt.datumCode === "wgs_1984") {
      if (wkt.PROJECTION === 'Mercator_Auxiliary_Sphere') {
        wkt.sphere = true;
      }
      wkt.datumCode = 'wgs84';
    }
    if (wkt.datumCode.slice(-6) === '_ferro') {
      wkt.datumCode = wkt.datumCode.slice(0, -6);
    }
    if (wkt.datumCode.slice(-8) === '_jakarta') {
      wkt.datumCode = wkt.datumCode.slice(0, -8);
    }
    if (~wkt.datumCode.indexOf('belge')) {
      wkt.datumCode = "rnb72";
    }
    if (wkt.GEOGCS.DATUM && wkt.GEOGCS.DATUM.SPHEROID) {
      wkt.ellps = wkt.GEOGCS.DATUM.SPHEROID.name.replace('_19', '').replace(/[Cc]larke\_18/, 'clrk');
      if (wkt.ellps.toLowerCase().slice(0, 13) === "international") {
        wkt.ellps = 'intl';
      }

      wkt.a = wkt.GEOGCS.DATUM.SPHEROID.a;
      wkt.rf = parseFloat(wkt.GEOGCS.DATUM.SPHEROID.rf, 10);
    }
    if (~wkt.datumCode.indexOf('osgb_1936')) {
      wkt.datumCode = "osgb36";
    }
  }
  if (wkt.b && !isFinite(wkt.b)) {
    wkt.b = wkt.a;
  }

  function toMeter(input) {
    var ratio = wkt.to_meter || 1;
    return parseFloat(input, 10) * ratio;
  }
  var renamer = function renamer(a) {
    return rename(wkt, a);
  };
  var list = [['standard_parallel_1', 'Standard_Parallel_1'], ['standard_parallel_2', 'Standard_Parallel_2'], ['false_easting', 'False_Easting'], ['false_northing', 'False_Northing'], ['central_meridian', 'Central_Meridian'], ['latitude_of_origin', 'Latitude_Of_Origin'], ['latitude_of_origin', 'Central_Parallel'], ['scale_factor', 'Scale_Factor'], ['k0', 'scale_factor'], ['latitude_of_center', 'Latitude_of_center'], ['lat0', 'latitude_of_center', d2r], ['longitude_of_center', 'Longitude_Of_Center'], ['longc', 'longitude_of_center', d2r], ['x0', 'false_easting', toMeter], ['y0', 'false_northing', toMeter], ['long0', 'central_meridian', d2r], ['lat0', 'latitude_of_origin', d2r], ['lat0', 'standard_parallel_1', d2r], ['lat1', 'standard_parallel_1', d2r], ['lat2', 'standard_parallel_2', d2r], ['alpha', 'azimuth', d2r], ['srsCode', 'name']];
  list.forEach(renamer);
  if (!wkt.long0 && wkt.longc && (wkt.projName === 'Albers_Conic_Equal_Area' || wkt.projName === "Lambert_Azimuthal_Equal_Area")) {
    wkt.long0 = wkt.longc;
  }
  if (!wkt.lat_ts && wkt.lat1 && (wkt.projName === 'Stereographic_South_Pole' || wkt.projName === 'Polar Stereographic (variant B)')) {
    wkt.lat0 = d2r(wkt.lat1 > 0 ? 90 : -90);
    wkt.lat_ts = wkt.lat1;
  }
}
var wkt = function wkt(_wkt, self) {
  var lisp = JSON.parse(("," + _wkt).replace(/\s*\,\s*([A-Z_0-9]+?)(\[)/g, ',["$1",').slice(1).replace(/\s*\,\s*([A-Z_0-9]+?)\]/g, ',"$1"]').replace(/,\["VERTCS".+/, ''));
  var type = lisp.shift();
  var name = lisp.shift();
  lisp.unshift(['name', name]);
  lisp.unshift(['type', type]);
  lisp.unshift('output');
  var obj = {};
  sExpr(lisp, obj);
  cleanWKT(obj.output);
  return extend(self, obj.output);
};

function defs(name) {
  /*global console*/
  var that = this;
  if (arguments.length === 2) {
    var def = arguments[1];
    if (typeof def === 'string') {
      if (def.charAt(0) === '+') {
        defs[name] = projString(arguments[1]);
      } else {
        defs[name] = wkt(arguments[1]);
      }
    } else {
      defs[name] = def;
    }
  } else if (arguments.length === 1) {
    if (Array.isArray(name)) {
      return name.map(function (v) {
        if (Array.isArray(v)) {
          defs.apply(that, v);
        } else {
          defs(v);
        }
      });
    } else if (typeof name === 'string') {
      if (name in defs) {
        return defs[name];
      }
    } else if ('EPSG' in name) {
      defs['EPSG:' + name.EPSG] = name;
    } else if ('ESRI' in name) {
      defs['ESRI:' + name.ESRI] = name;
    } else if ('IAU2000' in name) {
      defs['IAU2000:' + name.IAU2000] = name;
    } else {
      console.log(name);
    }
    return;
  }
}
global$1(defs);
var defs_1 = defs;

function testObj(code) {
  return typeof code === 'string';
}
function testDef(code) {
  return code in defs_1;
}
function testWKT(code) {
  var codeWords = ['GEOGCS', 'GEOCCS', 'PROJCS', 'LOCAL_CS'];
  return codeWords.reduce(function (a, b) {
    return a + 1 + code.indexOf(b);
  }, 0);
}
function testProj(code) {
  return code[0] === '+';
}
function parse(code) {
  if (testObj(code)) {
    //check to see if this is a WKT string
    if (testDef(code)) {
      return defs_1[code];
    } else if (testWKT(code)) {
      return wkt(code);
    } else if (testProj(code)) {
      return projString(code);
    }
  } else {
    return code;
  }
}

var parseCode = parse;

var msfnz = function msfnz(eccent, sinphi, cosphi) {
  var con = eccent * sinphi;
  return cosphi / Math.sqrt(1 - con * con);
};

var sign = function sign(x) {
  return x < 0 ? -1 : 1;
};

var TWO_PI = Math.PI * 2;
// SPI is slightly greater than Math.PI, so values that exceed the -180..180
// degree range by a tiny amount don't get wrapped. This prevents points that
// have drifted from their original location along the 180th meridian (due to
// floating point error) from changing their sign.
var SPI = 3.14159265359;

var adjust_lon = function adjust_lon(x) {
  return Math.abs(x) <= SPI ? x : x - sign(x) * TWO_PI;
};

var HALF_PI$1 = Math.PI / 2;

var tsfnz = function tsfnz(eccent, phi, sinphi) {
  var con = eccent * sinphi;
  var com = 0.5 * eccent;
  con = Math.pow((1 - con) / (1 + con), com);
  return Math.tan(0.5 * (HALF_PI$1 - phi)) / con;
};

var HALF_PI$2 = Math.PI / 2;
var phi2z = function phi2z(eccent, ts) {
  var eccnth = 0.5 * eccent;
  var con, dphi;
  var phi = HALF_PI$2 - 2 * Math.atan(ts);
  for (var i = 0; i <= 15; i++) {
    con = eccent * Math.sin(phi);
    dphi = HALF_PI$2 - 2 * Math.atan(ts * Math.pow((1 - con) / (1 + con), eccnth)) - phi;
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }
  //console.log("phi2z has NoConvergence");
  return -9999;
};

var HALF_PI = Math.PI / 2;
var EPSLN = 1.0e-10;
var R2D = 57.29577951308232088;

var FORTPI = Math.PI / 4;

var init = function init() {
  var con = this.b / this.a;
  this.es = 1 - con * con;
  if (!('x0' in this)) {
    this.x0 = 0;
  }
  if (!('y0' in this)) {
    this.y0 = 0;
  }
  this.e = Math.sqrt(this.es);
  if (this.lat_ts) {
    if (this.sphere) {
      this.k0 = Math.cos(this.lat_ts);
    } else {
      this.k0 = msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
    }
  } else {
    if (!this.k0) {
      if (this.k) {
        this.k0 = this.k;
      } else {
        this.k0 = 1;
      }
    }
  }
};

/* Mercator forward equations--mapping lat,long to x,y
  --------------------------------------------------*/

var forward = function forward(p) {
  var lon = p.x;
  var lat = p.y;
  // convert to radians
  if (lat * R2D > 90 && lat * R2D < -90 && lon * R2D > 180 && lon * R2D < -180) {
    return null;
  }

  var x, y;
  if (Math.abs(Math.abs(lat) - HALF_PI) <= EPSLN) {
    return null;
  } else {
    if (this.sphere) {
      x = this.x0 + this.a * this.k0 * adjust_lon(lon - this.long0);
      y = this.y0 + this.a * this.k0 * Math.log(Math.tan(FORTPI + 0.5 * lat));
    } else {
      var sinphi = Math.sin(lat);
      var ts = tsfnz(this.e, lat, sinphi);
      x = this.x0 + this.a * this.k0 * adjust_lon(lon - this.long0);
      y = this.y0 - this.a * this.k0 * Math.log(ts);
    }
    p.x = x;
    p.y = y;
    return p;
  }
};

/* Mercator inverse equations--mapping x,y to lat/long
  --------------------------------------------------*/
var inverse = function inverse(p) {

  var x = p.x - this.x0;
  var y = p.y - this.y0;
  var lon, lat;

  if (this.sphere) {
    lat = HALF_PI - 2 * Math.atan(Math.exp(-y / (this.a * this.k0)));
  } else {
    var ts = Math.exp(-y / (this.a * this.k0));
    lat = phi2z(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  }
  lon = adjust_lon(this.long0 + x / (this.a * this.k0));

  p.x = lon;
  p.y = lat;
  return p;
};

var names$1 = ["Mercator", "Popular Visualisation Pseudo Mercator", "Mercator_1SP", "Mercator_Auxiliary_Sphere", "merc"];

var merc = {
  init: init,
  forward: forward,
  inverse: inverse,
  names: names$1
};

var init$1 = function init() {
		//no-op for longlat
};

function identity$2(pt) {
		return pt;
}
var forward$1 = identity$2;
var inverse$1 = identity$2;
var names$2 = ["longlat", "identity"];

var longlat = {
		init: init$1,
		forward: forward$1,
		inverse: inverse$1,
		names: names$2
};

var projs = [merc, longlat];
var names = {};
var projStore = [];

function add(proj, i) {
  var len = projStore.length;
  if (!proj.names) {
    console.log(i);
    return true;
  }
  projStore[len] = proj;
  proj.names.forEach(function (n) {
    names[n.toLowerCase()] = len;
  });
  return this;
}

var add_1 = add;

var get$3 = function get(name) {
  if (!name) {
    return false;
  }
  var n = name.toLowerCase();
  if (typeof names[n] !== 'undefined' && projStore[names[n]]) {
    return projStore[names[n]];
  }
};
var start = function start() {
  projs.forEach(add);
};

var projections = {
  add: add_1,
  get: get$3,
  start: start
};

var wgs84$1 = {
  towgs84: "0,0,0",
  ellipse: "WGS84",
  datumName: "WGS84"
};
var ch1903 = {
  towgs84: "674.374,15.056,405.346",
  ellipse: "bessel",
  datumName: "swiss"
};
var ggrs87 = {
  towgs84: "-199.87,74.79,246.62",
  ellipse: "GRS80",
  datumName: "Greek_Geodetic_Reference_System_1987"
};
var nad83 = {
  towgs84: "0,0,0",
  ellipse: "GRS80",
  datumName: "North_American_Datum_1983"
};
var nad27 = {
  nadgrids: "@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",
  ellipse: "clrk66",
  datumName: "North_American_Datum_1927"
};
var potsdam = {
  towgs84: "606.0,23.0,413.0",
  ellipse: "bessel",
  datumName: "Potsdam Rauenberg 1950 DHDN"
};
var carthage = {
  towgs84: "-263.0,6.0,431.0",
  ellipse: "clark80",
  datumName: "Carthage 1934 Tunisia"
};
var hermannskogel = {
  towgs84: "653.0,-212.0,449.0",
  ellipse: "bessel",
  datumName: "Hermannskogel"
};
var ire65 = {
  towgs84: "482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",
  ellipse: "mod_airy",
  datumName: "Ireland 1965"
};
var rassadiran = {
  towgs84: "-133.63,-157.5,-158.62",
  ellipse: "intl",
  datumName: "Rassadiran"
};
var nzgd49 = {
  towgs84: "59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",
  ellipse: "intl",
  datumName: "New Zealand Geodetic Datum 1949"
};
var osgb36 = {
  towgs84: "446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",
  ellipse: "airy",
  datumName: "Airy 1830"
};
var s_jtsk = {
  towgs84: "589,76,480",
  ellipse: 'bessel',
  datumName: 'S-JTSK (Ferro)'
};
var beduaram = {
  towgs84: '-106,-87,188',
  ellipse: 'clrk80',
  datumName: 'Beduaram'
};
var gunung_segara = {
  towgs84: '-403,684,41',
  ellipse: 'bessel',
  datumName: 'Gunung Segara Jakarta'
};
var rnb72 = {
  towgs84: "106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",
  ellipse: "intl",
  datumName: "Reseau National Belge 1972"
};

var Datum = {
  wgs84: wgs84$1,
  ch1903: ch1903,
  ggrs87: ggrs87,
  nad83: nad83,
  nad27: nad27,
  potsdam: potsdam,
  carthage: carthage,
  hermannskogel: hermannskogel,
  ire65: ire65,
  rassadiran: rassadiran,
  nzgd49: nzgd49,
  osgb36: osgb36,
  s_jtsk: s_jtsk,
  beduaram: beduaram,
  gunung_segara: gunung_segara,
  rnb72: rnb72
};

var MERIT = {
  a: 6378137.0,
  rf: 298.257,
  ellipseName: "MERIT 1983"
};
var SGS85 = {
  a: 6378136.0,
  rf: 298.257,
  ellipseName: "Soviet Geodetic System 85"
};
var GRS80 = {
  a: 6378137.0,
  rf: 298.257222101,
  ellipseName: "GRS 1980(IUGG, 1980)"
};
var IAU76 = {
  a: 6378140.0,
  rf: 298.257,
  ellipseName: "IAU 1976"
};
var airy = {
  a: 6377563.396,
  b: 6356256.910,
  ellipseName: "Airy 1830"
};
var APL4 = {
  a: 6378137,
  rf: 298.25,
  ellipseName: "Appl. Physics. 1965"
};
var NWL9D = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "Naval Weapons Lab., 1965"
};
var mod_airy = {
  a: 6377340.189,
  b: 6356034.446,
  ellipseName: "Modified Airy"
};
var andrae = {
  a: 6377104.43,
  rf: 300.0,
  ellipseName: "Andrae 1876 (Den., Iclnd.)"
};
var aust_SA = {
  a: 6378160.0,
  rf: 298.25,
  ellipseName: "Australian Natl & S. Amer. 1969"
};
var GRS67 = {
  a: 6378160.0,
  rf: 298.2471674270,
  ellipseName: "GRS 67(IUGG 1967)"
};
var bessel = {
  a: 6377397.155,
  rf: 299.1528128,
  ellipseName: "Bessel 1841"
};
var bess_nam = {
  a: 6377483.865,
  rf: 299.1528128,
  ellipseName: "Bessel 1841 (Namibia)"
};
var clrk66 = {
  a: 6378206.4,
  b: 6356583.8,
  ellipseName: "Clarke 1866"
};
var clrk80 = {
  a: 6378249.145,
  rf: 293.4663,
  ellipseName: "Clarke 1880 mod."
};
var clrk58 = {
  a: 6378293.645208759,
  rf: 294.2606763692654,
  ellipseName: "Clarke 1858"
};
var CPM = {
  a: 6375738.7,
  rf: 334.29,
  ellipseName: "Comm. des Poids et Mesures 1799"
};
var delmbr = {
  a: 6376428.0,
  rf: 311.5,
  ellipseName: "Delambre 1810 (Belgium)"
};
var engelis = {
  a: 6378136.05,
  rf: 298.2566,
  ellipseName: "Engelis 1985"
};
var evrst30 = {
  a: 6377276.345,
  rf: 300.8017,
  ellipseName: "Everest 1830"
};
var evrst48 = {
  a: 6377304.063,
  rf: 300.8017,
  ellipseName: "Everest 1948"
};
var evrst56 = {
  a: 6377301.243,
  rf: 300.8017,
  ellipseName: "Everest 1956"
};
var evrst69 = {
  a: 6377295.664,
  rf: 300.8017,
  ellipseName: "Everest 1969"
};
var evrstSS = {
  a: 6377298.556,
  rf: 300.8017,
  ellipseName: "Everest (Sabah & Sarawak)"
};
var fschr60 = {
  a: 6378166.0,
  rf: 298.3,
  ellipseName: "Fischer (Mercury Datum) 1960"
};
var fschr60m = {
  a: 6378155.0,
  rf: 298.3,
  ellipseName: "Fischer 1960"
};
var fschr68 = {
  a: 6378150.0,
  rf: 298.3,
  ellipseName: "Fischer 1968"
};
var helmert = {
  a: 6378200.0,
  rf: 298.3,
  ellipseName: "Helmert 1906"
};
var hough = {
  a: 6378270.0,
  rf: 297.0,
  ellipseName: "Hough"
};
var intl = {
  a: 6378388.0,
  rf: 297.0,
  ellipseName: "International 1909 (Hayford)"
};
var kaula = {
  a: 6378163.0,
  rf: 298.24,
  ellipseName: "Kaula 1961"
};
var lerch = {
  a: 6378139.0,
  rf: 298.257,
  ellipseName: "Lerch 1979"
};
var mprts = {
  a: 6397300.0,
  rf: 191.0,
  ellipseName: "Maupertius 1738"
};
var new_intl = {
  a: 6378157.5,
  b: 6356772.2,
  ellipseName: "New International 1967"
};
var plessis = {
  a: 6376523.0,
  rf: 6355863.0,
  ellipseName: "Plessis 1817 (France)"
};
var krass = {
  a: 6378245.0,
  rf: 298.3,
  ellipseName: "Krassovsky, 1942"
};
var SEasia = {
  a: 6378155.0,
  b: 6356773.3205,
  ellipseName: "Southeast Asia"
};
var walbeck = {
  a: 6376896.0,
  b: 6355834.8467,
  ellipseName: "Walbeck"
};
var WGS60 = {
  a: 6378165.0,
  rf: 298.3,
  ellipseName: "WGS 60"
};
var WGS66 = {
  a: 6378145.0,
  rf: 298.25,
  ellipseName: "WGS 66"
};
var WGS7 = {
  a: 6378135.0,
  rf: 298.26,
  ellipseName: "WGS 72"
};
var WGS84 = {
  a: 6378137.0,
  rf: 298.257223563,
  ellipseName: "WGS 84"
};
var sphere = {
  a: 6370997.0,
  b: 6370997.0,
  ellipseName: "Normal Sphere (r=6370997)"
};

var Ellipsoid = {
  MERIT: MERIT,
  SGS85: SGS85,
  GRS80: GRS80,
  IAU76: IAU76,
  airy: airy,
  APL4: APL4,
  NWL9D: NWL9D,
  mod_airy: mod_airy,
  andrae: andrae,
  aust_SA: aust_SA,
  GRS67: GRS67,
  bessel: bessel,
  bess_nam: bess_nam,
  clrk66: clrk66,
  clrk80: clrk80,
  clrk58: clrk58,
  CPM: CPM,
  delmbr: delmbr,
  engelis: engelis,
  evrst30: evrst30,
  evrst48: evrst48,
  evrst56: evrst56,
  evrst69: evrst69,
  evrstSS: evrstSS,
  fschr60: fschr60,
  fschr60m: fschr60m,
  fschr68: fschr68,
  helmert: helmert,
  hough: hough,
  intl: intl,
  kaula: kaula,
  lerch: lerch,
  mprts: mprts,
  new_intl: new_intl,
  plessis: plessis,
  krass: krass,
  SEasia: SEasia,
  walbeck: walbeck,
  WGS60: WGS60,
  WGS66: WGS66,
  WGS7: WGS7,
  WGS84: WGS84,
  sphere: sphere
};

var HALF_PI$3 = Math.PI / 2;
var PJD_3PARAM = 1;
var PJD_7PARAM = 2;
var PJD_GRIDSHIFT = 3;
var PJD_WGS84 = 4; // WGS84 or equivalent
var PJD_NODATUM = 5; // WGS84 or equivalent
var SEC_TO_RAD = 4.84813681109535993589914102357e-6;
var AD_C = 1.0026000;
var COS_67P5 = 0.38268343236508977;
var datum = function datum(proj) {
  if (!(this instanceof datum)) {
    return new datum(proj);
  }
  this.datum_type = PJD_WGS84; //default setting
  if (!proj) {
    return;
  }
  if (proj.datumCode && proj.datumCode === 'none') {
    this.datum_type = PJD_NODATUM;
  }

  if (proj.datum_params) {
    this.datum_params = proj.datum_params.map(parseFloat);
    if (this.datum_params[0] !== 0 || this.datum_params[1] !== 0 || this.datum_params[2] !== 0) {
      this.datum_type = PJD_3PARAM;
    }
    if (this.datum_params.length > 3) {
      if (this.datum_params[3] !== 0 || this.datum_params[4] !== 0 || this.datum_params[5] !== 0 || this.datum_params[6] !== 0) {
        this.datum_type = PJD_7PARAM;
        this.datum_params[3] *= SEC_TO_RAD;
        this.datum_params[4] *= SEC_TO_RAD;
        this.datum_params[5] *= SEC_TO_RAD;
        this.datum_params[6] = this.datum_params[6] / 1000000.0 + 1.0;
      }
    }
  }

  // DGR 2011-03-21 : nadgrids support
  this.datum_type = proj.grids ? PJD_GRIDSHIFT : this.datum_type;

  this.a = proj.a; //datum object also uses these values
  this.b = proj.b;
  this.es = proj.es;
  this.ep2 = proj.ep2;
  if (this.datum_type === PJD_GRIDSHIFT) {
    this.grids = proj.grids;
  }
};
datum.prototype = {

  /****************************************************************/
  // cs_compare_datums()
  //   Returns TRUE if the two datums match, otherwise FALSE.
  compare_datums: function compare_datums(dest) {
    if (this.datum_type !== dest.datum_type) {
      return false; // false, datums are not equal
    } else if (this.a !== dest.a || Math.abs(this.es - dest.es) > 0.000000000050) {
      // the tolerence for es is to ensure that GRS80 and WGS84
      // are considered identical
      return false;
    } else if (this.datum_type === PJD_3PARAM) {
      return this.datum_params[0] === dest.datum_params[0] && this.datum_params[1] === dest.datum_params[1] && this.datum_params[2] === dest.datum_params[2];
    } else if (this.datum_type === PJD_7PARAM) {
      return this.datum_params[0] === dest.datum_params[0] && this.datum_params[1] === dest.datum_params[1] && this.datum_params[2] === dest.datum_params[2] && this.datum_params[3] === dest.datum_params[3] && this.datum_params[4] === dest.datum_params[4] && this.datum_params[5] === dest.datum_params[5] && this.datum_params[6] === dest.datum_params[6];
    } else if (this.datum_type === PJD_GRIDSHIFT || dest.datum_type === PJD_GRIDSHIFT) {
      //alert("ERROR: Grid shift transformations are not implemented.");
      //return false
      //DGR 2012-07-29 lazy ...
      return this.nadgrids === dest.nadgrids;
    } else {
      return true; // datums are equal
    }
  }, // cs_compare_datums()

  /*
   * The function Convert_Geodetic_To_Geocentric converts geodetic coordinates
   * (latitude, longitude, and height) to geocentric coordinates (X, Y, Z),
   * according to the current ellipsoid parameters.
   *
   *    Latitude  : Geodetic latitude in radians                     (input)
   *    Longitude : Geodetic longitude in radians                    (input)
   *    Height    : Geodetic height, in meters                       (input)
   *    X         : Calculated Geocentric X coordinate, in meters    (output)
   *    Y         : Calculated Geocentric Y coordinate, in meters    (output)
   *    Z         : Calculated Geocentric Z coordinate, in meters    (output)
   *
   */
  geodetic_to_geocentric: function geodetic_to_geocentric(p) {
    var Longitude = p.x;
    var Latitude = p.y;
    var Height = p.z ? p.z : 0; //Z value not always supplied
    var X; // output
    var Y;
    var Z;

    var Error_Code = 0; //  GEOCENT_NO_ERROR;
    var Rn; /*  Earth radius at location  */
    var Sin_Lat; /*  Math.sin(Latitude)  */
    var Sin2_Lat; /*  Square of Math.sin(Latitude)  */
    var Cos_Lat; /*  Math.cos(Latitude)  */

    /*
     ** Don't blow up if Latitude is just a little out of the value
     ** range as it may just be a rounding issue.  Also removed longitude
     ** test, it should be wrapped by Math.cos() and Math.sin().  NFW for PROJ.4, Sep/2001.
     */
    if (Latitude < -HALF_PI$3 && Latitude > -1.001 * HALF_PI$3) {
      Latitude = -HALF_PI$3;
    } else if (Latitude > HALF_PI$3 && Latitude < 1.001 * HALF_PI$3) {
      Latitude = HALF_PI$3;
    } else if (Latitude < -HALF_PI$3 || Latitude > HALF_PI$3) {
      /* Latitude out of range */
      //..reportError('geocent:lat out of range:' + Latitude);
      return null;
    }

    if (Longitude > Math.PI) {
      Longitude -= 2 * Math.PI;
    }
    Sin_Lat = Math.sin(Latitude);
    Cos_Lat = Math.cos(Latitude);
    Sin2_Lat = Sin_Lat * Sin_Lat;
    Rn = this.a / Math.sqrt(1.0e0 - this.es * Sin2_Lat);
    X = (Rn + Height) * Cos_Lat * Math.cos(Longitude);
    Y = (Rn + Height) * Cos_Lat * Math.sin(Longitude);
    Z = (Rn * (1 - this.es) + Height) * Sin_Lat;

    p.x = X;
    p.y = Y;
    p.z = Z;
    return Error_Code;
  }, // cs_geodetic_to_geocentric()


  geocentric_to_geodetic: function geocentric_to_geodetic(p) {
    /* local defintions and variables */
    /* end-criterium of loop, accuracy of sin(Latitude) */
    var genau = 1e-12;
    var genau2 = genau * genau;
    var maxiter = 30;

    var P; /* distance between semi-minor axis and location */
    var RR; /* distance between center and location */
    var CT; /* sin of geocentric latitude */
    var ST; /* cos of geocentric latitude */
    var RX;
    var RK;
    var RN; /* Earth radius at location */
    var CPHI0; /* cos of start or old geodetic latitude in iterations */
    var SPHI0; /* sin of start or old geodetic latitude in iterations */
    var CPHI; /* cos of searched geodetic latitude */
    var SPHI; /* sin of searched geodetic latitude */
    var SDPHI; /* end-criterium: addition-theorem of sin(Latitude(iter)-Latitude(iter-1)) */
    var iter; /* # of continous iteration, max. 30 is always enough (s.a.) */

    var X = p.x;
    var Y = p.y;
    var Z = p.z ? p.z : 0.0; //Z value not always supplied
    var Longitude;
    var Latitude;
    var Height;

    P = Math.sqrt(X * X + Y * Y);
    RR = Math.sqrt(X * X + Y * Y + Z * Z);

    /*      special cases for latitude and longitude */
    if (P / this.a < genau) {

      /*  special case, if P=0. (X=0., Y=0.) */
      Longitude = 0.0;

      /*  if (X,Y,Z)=(0.,0.,0.) then Height becomes semi-minor axis
       *  of ellipsoid (=center of mass), Latitude becomes PI/2 */
      if (RR / this.a < genau) {
        Latitude = HALF_PI$3;
        Height = -this.b;
        return;
      }
    } else {
      /*  ellipsoidal (geodetic) longitude
       *  interval: -PI < Longitude <= +PI */
      Longitude = Math.atan2(Y, X);
    }

    /* --------------------------------------------------------------
     * Following iterative algorithm was developped by
     * "Institut for Erdmessung", University of Hannover, July 1988.
     * Internet: www.ife.uni-hannover.de
     * Iterative computation of CPHI,SPHI and Height.
     * Iteration of CPHI and SPHI to 10**-12 radian resp.
     * 2*10**-7 arcsec.
     * --------------------------------------------------------------
     */
    CT = Z / RR;
    ST = P / RR;
    RX = 1.0 / Math.sqrt(1.0 - this.es * (2.0 - this.es) * ST * ST);
    CPHI0 = ST * (1.0 - this.es) * RX;
    SPHI0 = CT * RX;
    iter = 0;

    /* loop to find sin(Latitude) resp. Latitude
     * until |sin(Latitude(iter)-Latitude(iter-1))| < genau */
    do {
      iter++;
      RN = this.a / Math.sqrt(1.0 - this.es * SPHI0 * SPHI0);

      /*  ellipsoidal (geodetic) height */
      Height = P * CPHI0 + Z * SPHI0 - RN * (1.0 - this.es * SPHI0 * SPHI0);

      RK = this.es * RN / (RN + Height);
      RX = 1.0 / Math.sqrt(1.0 - RK * (2.0 - RK) * ST * ST);
      CPHI = ST * (1.0 - RK) * RX;
      SPHI = CT * RX;
      SDPHI = SPHI * CPHI0 - CPHI * SPHI0;
      CPHI0 = CPHI;
      SPHI0 = SPHI;
    } while (SDPHI * SDPHI > genau2 && iter < maxiter);

    /*      ellipsoidal (geodetic) latitude */
    Latitude = Math.atan(SPHI / Math.abs(CPHI));

    p.x = Longitude;
    p.y = Latitude;
    p.z = Height;
    return p;
  }, // cs_geocentric_to_geodetic()

  /** Convert_Geocentric_To_Geodetic
   * The method used here is derived from 'An Improved Algorithm for
   * Geocentric to Geodetic Coordinate Conversion', by Ralph Toms, Feb 1996
   */
  geocentric_to_geodetic_noniter: function geocentric_to_geodetic_noniter(p) {
    var X = p.x;
    var Y = p.y;
    var Z = p.z ? p.z : 0; //Z value not always supplied
    var Longitude;
    var Latitude;
    var Height;

    var W; /* distance from Z axis */
    var W2; /* square of distance from Z axis */
    var T0; /* initial estimate of vertical component */
    var T1; /* corrected estimate of vertical component */
    var S0; /* initial estimate of horizontal component */
    var S1; /* corrected estimate of horizontal component */
    var Sin_B0; /* Math.sin(B0), B0 is estimate of Bowring aux variable */
    var Sin3_B0; /* cube of Math.sin(B0) */
    var Cos_B0; /* Math.cos(B0) */
    var Sin_p1; /* Math.sin(phi1), phi1 is estimated latitude */
    var Cos_p1; /* Math.cos(phi1) */
    var Rn; /* Earth radius at location */
    var Sum; /* numerator of Math.cos(phi1) */
    var At_Pole; /* indicates location is in polar region */

    X = parseFloat(X); // cast from string to float
    Y = parseFloat(Y);
    Z = parseFloat(Z);

    At_Pole = false;
    if (X !== 0.0) {
      Longitude = Math.atan2(Y, X);
    } else {
      if (Y > 0) {
        Longitude = HALF_PI$3;
      } else if (Y < 0) {
        Longitude = -HALF_PI$3;
      } else {
        At_Pole = true;
        Longitude = 0.0;
        if (Z > 0.0) {
          /* north pole */
          Latitude = HALF_PI$3;
        } else if (Z < 0.0) {
          /* south pole */
          Latitude = -HALF_PI$3;
        } else {
          /* center of earth */
          Latitude = HALF_PI$3;
          Height = -this.b;
          return;
        }
      }
    }
    W2 = X * X + Y * Y;
    W = Math.sqrt(W2);
    T0 = Z * AD_C;
    S0 = Math.sqrt(T0 * T0 + W2);
    Sin_B0 = T0 / S0;
    Cos_B0 = W / S0;
    Sin3_B0 = Sin_B0 * Sin_B0 * Sin_B0;
    T1 = Z + this.b * this.ep2 * Sin3_B0;
    Sum = W - this.a * this.es * Cos_B0 * Cos_B0 * Cos_B0;
    S1 = Math.sqrt(T1 * T1 + Sum * Sum);
    Sin_p1 = T1 / S1;
    Cos_p1 = Sum / S1;
    Rn = this.a / Math.sqrt(1.0 - this.es * Sin_p1 * Sin_p1);
    if (Cos_p1 >= COS_67P5) {
      Height = W / Cos_p1 - Rn;
    } else if (Cos_p1 <= -COS_67P5) {
      Height = W / -Cos_p1 - Rn;
    } else {
      Height = Z / Sin_p1 + Rn * (this.es - 1.0);
    }
    if (At_Pole === false) {
      Latitude = Math.atan(Sin_p1 / Cos_p1);
    }

    p.x = Longitude;
    p.y = Latitude;
    p.z = Height;
    return p;
  }, // geocentric_to_geodetic_noniter()

  /****************************************************************/
  // pj_geocentic_to_wgs84( p )
  //  p = point to transform in geocentric coordinates (x,y,z)
  geocentric_to_wgs84: function geocentric_to_wgs84(p) {

    if (this.datum_type === PJD_3PARAM) {
      // if( x[io] === HUGE_VAL )
      //    continue;
      p.x += this.datum_params[0];
      p.y += this.datum_params[1];
      p.z += this.datum_params[2];
    } else if (this.datum_type === PJD_7PARAM) {
      var Dx_BF = this.datum_params[0];
      var Dy_BF = this.datum_params[1];
      var Dz_BF = this.datum_params[2];
      var Rx_BF = this.datum_params[3];
      var Ry_BF = this.datum_params[4];
      var Rz_BF = this.datum_params[5];
      var M_BF = this.datum_params[6];
      // if( x[io] === HUGE_VAL )
      //    continue;
      var x_out = M_BF * (p.x - Rz_BF * p.y + Ry_BF * p.z) + Dx_BF;
      var y_out = M_BF * (Rz_BF * p.x + p.y - Rx_BF * p.z) + Dy_BF;
      var z_out = M_BF * (-Ry_BF * p.x + Rx_BF * p.y + p.z) + Dz_BF;
      p.x = x_out;
      p.y = y_out;
      p.z = z_out;
    }
  }, // cs_geocentric_to_wgs84

  /****************************************************************/
  // pj_geocentic_from_wgs84()
  //  coordinate system definition,
  //  point to transform in geocentric coordinates (x,y,z)
  geocentric_from_wgs84: function geocentric_from_wgs84(p) {

    if (this.datum_type === PJD_3PARAM) {
      //if( x[io] === HUGE_VAL )
      //    continue;
      p.x -= this.datum_params[0];
      p.y -= this.datum_params[1];
      p.z -= this.datum_params[2];
    } else if (this.datum_type === PJD_7PARAM) {
      var Dx_BF = this.datum_params[0];
      var Dy_BF = this.datum_params[1];
      var Dz_BF = this.datum_params[2];
      var Rx_BF = this.datum_params[3];
      var Ry_BF = this.datum_params[4];
      var Rz_BF = this.datum_params[5];
      var M_BF = this.datum_params[6];
      var x_tmp = (p.x - Dx_BF) / M_BF;
      var y_tmp = (p.y - Dy_BF) / M_BF;
      var z_tmp = (p.z - Dz_BF) / M_BF;
      //if( x[io] === HUGE_VAL )
      //    continue;

      p.x = x_tmp + Rz_BF * y_tmp - Ry_BF * z_tmp;
      p.y = -Rz_BF * x_tmp + y_tmp + Rx_BF * z_tmp;
      p.z = Ry_BF * x_tmp - Rx_BF * y_tmp + z_tmp;
    } //cs_geocentric_from_wgs84()
  }
};

/** point object, nothing fancy, just allows values to be
    passed back and forth by reference rather than by value.
    Other point classes may be used as long as they have
    x and y properties, which will get modified in the transform method.
*/
var datum_1 = datum;

var EPSLN$1 = 1.0e-10;
// ellipoid pj_set_ell.c
var SIXTH = 0.1666666666666666667;
/* 1/6 */
var RA4 = 0.04722222222222222222;
/* 17/360 */
var RA6 = 0.02215608465608465608;
var deriveConstants = function deriveConstants(json) {
  // DGR 2011-03-20 : nagrids -> nadgrids
  if (json.datumCode && json.datumCode !== 'none') {
    var datumDef = Datum[json.datumCode];
    if (datumDef) {
      json.datum_params = datumDef.towgs84 ? datumDef.towgs84.split(',') : null;
      json.ellps = datumDef.ellipse;
      json.datumName = datumDef.datumName ? datumDef.datumName : json.datumCode;
    }
  }
  if (!json.a) {
    // do we have an ellipsoid?
    var ellipse = Ellipsoid[json.ellps] ? Ellipsoid[json.ellps] : Ellipsoid.WGS84;
    extend(json, ellipse);
  }
  if (json.rf && !json.b) {
    json.b = (1.0 - 1.0 / json.rf) * json.a;
  }
  if (json.rf === 0 || Math.abs(json.a - json.b) < EPSLN$1) {
    json.sphere = true;
    json.b = json.a;
  }
  json.a2 = json.a * json.a; // used in geocentric
  json.b2 = json.b * json.b; // used in geocentric
  json.es = (json.a2 - json.b2) / json.a2; // e ^ 2
  json.e = Math.sqrt(json.es); // eccentricity
  if (json.R_A) {
    json.a *= 1 - json.es * (SIXTH + json.es * (RA4 + json.es * RA6));
    json.a2 = json.a * json.a;
    json.b2 = json.b * json.b;
    json.es = 0;
  }
  json.ep2 = (json.a2 - json.b2) / json.b2; // used in geocentric
  if (!json.k0) {
    json.k0 = 1.0; //default value
  }
  //DGR 2010-11-12: axis
  if (!json.axis) {
    json.axis = "enu";
  }

  if (!json.datum) {
    json.datum = datum_1(json);
  }
  return json;
};

var _typeof$8 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Projection(srsCode, callback) {
  if (!(this instanceof Projection)) {
    return new Projection(srsCode);
  }
  callback = callback || function (error) {
    if (error) {
      throw error;
    }
  };
  var json = parseCode(srsCode);
  if ((typeof json === 'undefined' ? 'undefined' : _typeof$8(json)) !== 'object') {
    callback(srsCode);
    return;
  }
  var modifiedJSON = deriveConstants(json);
  var ourProj = Projection.projections.get(modifiedJSON.projName);
  if (ourProj) {
    extend(this, modifiedJSON);
    extend(this, ourProj);
    this.init();
    callback(null, this);
  } else {
    callback(srsCode);
  }
}
Projection.projections = projections;
Projection.projections.start();
var Proj = Projection;

var PJD_3PARAM$2 = 1;
var PJD_7PARAM$2 = 2;
var PJD_GRIDSHIFT$1 = 3;
var PJD_NODATUM$1 = 5; // WGS84 or equivalent
var SRS_WGS84_SEMIMAJOR = 6378137; // only used in grid shift transforms
var SRS_WGS84_ESQUARED = 0.006694379990141316; //DGR: 2012-07-29
var datum_transform = function datum_transform(source, dest, point) {
  var wp, i, l;

  function checkParams(fallback) {
    return fallback === PJD_3PARAM$2 || fallback === PJD_7PARAM$2;
  }
  // Short cut if the datums are identical.
  if (source.compare_datums(dest)) {
    return point; // in this case, zero is sucess,
    // whereas cs_compare_datums returns 1 to indicate TRUE
    // confusing, should fix this
  }

  // Explicitly skip datum transform by setting 'datum=none' as parameter for either source or dest
  if (source.datum_type === PJD_NODATUM$1 || dest.datum_type === PJD_NODATUM$1) {
    return point;
  }

  //DGR: 2012-07-29 : add nadgrids support (begin)
  var src_a = source.a;
  var src_es = source.es;

  var dst_a = dest.a;
  var dst_es = dest.es;

  var fallback = source.datum_type;
  // If this datum requires grid shifts, then apply it to geodetic coordinates.
  if (fallback === PJD_GRIDSHIFT$1) {
    if (this.apply_gridshift(source, 0, point) === 0) {
      source.a = SRS_WGS84_SEMIMAJOR;
      source.es = SRS_WGS84_ESQUARED;
    } else {
      // try 3 or 7 params transformation or nothing ?
      if (!source.datum_params) {
        source.a = src_a;
        source.es = source.es;
        return point;
      }
      wp = 1;
      for (i = 0, l = source.datum_params.length; i < l; i++) {
        wp *= source.datum_params[i];
      }
      if (wp === 0) {
        source.a = src_a;
        source.es = source.es;
        return point;
      }
      if (source.datum_params.length > 3) {
        fallback = PJD_7PARAM$2;
      } else {
        fallback = PJD_3PARAM$2;
      }
    }
  }
  if (dest.datum_type === PJD_GRIDSHIFT$1) {
    dest.a = SRS_WGS84_SEMIMAJOR;
    dest.es = SRS_WGS84_ESQUARED;
  }
  // Do we need to go through geocentric coordinates?
  if (source.es !== dest.es || source.a !== dest.a || checkParams(fallback) || checkParams(dest.datum_type)) {
    //DGR: 2012-07-29 : add nadgrids support (end)
    // Convert to geocentric coordinates.
    source.geodetic_to_geocentric(point);
    // CHECK_RETURN;
    // Convert between datums
    if (checkParams(source.datum_type)) {
      source.geocentric_to_wgs84(point);
      // CHECK_RETURN;
    }
    if (checkParams(dest.datum_type)) {
      dest.geocentric_from_wgs84(point);
      // CHECK_RETURN;
    }
    // Convert back to geodetic coordinates
    dest.geocentric_to_geodetic(point);
    // CHECK_RETURN;
  }
  // Apply grid shift to destination if required
  if (dest.datum_type === PJD_GRIDSHIFT$1) {
    this.apply_gridshift(dest, 1, point);
    // CHECK_RETURN;
  }

  source.a = src_a;
  source.es = src_es;
  dest.a = dst_a;
  dest.es = dst_es;

  return point;
};

var adjust_axis = function adjust_axis(crs, denorm, point) {
  var xin = point.x,
      yin = point.y,
      zin = point.z || 0.0;
  var v, t, i;
  for (i = 0; i < 3; i++) {
    if (denorm && i === 2 && point.z === undefined) {
      continue;
    }
    if (i === 0) {
      v = xin;
      t = 'x';
    } else if (i === 1) {
      v = yin;
      t = 'y';
    } else {
      v = zin;
      t = 'z';
    }
    switch (crs.axis[i]) {
      case 'e':
        point[t] = v;
        break;
      case 'w':
        point[t] = -v;
        break;
      case 'n':
        point[t] = v;
        break;
      case 's':
        point[t] = -v;
        break;
      case 'u':
        if (point[t] !== undefined) {
          point.z = v;
        }
        break;
      case 'd':
        if (point[t] !== undefined) {
          point.z = -v;
        }
        break;
      default:
        //console.log("ERROR: unknow axis ("+crs.axis[i]+") - check definition of "+crs.projName);
        return null;
    }
  }
  return point;
};

var toPoint = function toPoint(array) {
  var out = {
    x: array[0],
    y: array[1]
  };
  if (array.length > 2) {
    out.z = array[2];
  }
  if (array.length > 3) {
    out.m = array[3];
  }
  return out;
};

var D2R$2 = 0.01745329251994329577;
var R2D$1 = 57.29577951308232088;
var PJD_3PARAM$1 = 1;
var PJD_7PARAM$1 = 2;

var transform = function transform(source, dest, point) {
  var wgs84;
  if (Array.isArray(point)) {
    point = toPoint(point);
  }
  function checkNotWGS(source, dest) {
    return (source.datum.datum_type === PJD_3PARAM$1 || source.datum.datum_type === PJD_7PARAM$1) && dest.datumCode !== "WGS84";
  }

  // Workaround for datum shifts towgs84, if either source or destination projection is not wgs84
  if (source.datum && dest.datum && (checkNotWGS(source, dest) || checkNotWGS(dest, source))) {
    wgs84 = new Proj('WGS84');
    transform(source, wgs84, point);
    source = wgs84;
  }
  // DGR, 2010/11/12
  if (source.axis !== "enu") {
    adjust_axis(source, false, point);
  }
  // Transform source points to long/lat, if they aren't already.
  if (source.projName === "longlat") {
    point.x *= D2R$2; // convert degrees to radians
    point.y *= D2R$2;
  } else {
    if (source.to_meter) {
      point.x *= source.to_meter;
      point.y *= source.to_meter;
    }
    source.inverse(point); // Convert Cartesian to longlat
  }
  // Adjust for the prime meridian if necessary
  if (source.from_greenwich) {
    point.x += source.from_greenwich;
  }

  // Convert datums if needed, and if possible.
  point = datum_transform(source.datum, dest.datum, point);

  // Adjust for the prime meridian if necessary
  if (dest.from_greenwich) {
    point.x -= dest.from_greenwich;
  }

  if (dest.projName === "longlat") {
    // convert radians to decimal degrees
    point.x *= R2D$1;
    point.y *= R2D$1;
  } else {
    // else project
    dest.forward(point);
    if (dest.to_meter) {
      point.x /= dest.to_meter;
      point.y /= dest.to_meter;
    }
  }

  // DGR, 2010/11/12
  if (dest.axis !== "enu") {
    adjust_axis(dest, true, point);
  }

  return point;
};

var wgs84 = Proj('WGS84');

function transformer(from, to, coords) {
  var transformedArray;
  if (Array.isArray(coords)) {
    transformedArray = transform(from, to, coords);
    if (coords.length === 3) {
      return [transformedArray.x, transformedArray.y, transformedArray.z];
    } else {
      return [transformedArray.x, transformedArray.y];
    }
  } else {
    return transform(from, to, coords);
  }
}

function checkProj(item) {
  if (item instanceof Proj) {
    return item;
  }
  if (item.oProj) {
    return item.oProj;
  }
  return Proj(item);
}
function proj4$1(fromProj, toProj, coord) {
  fromProj = checkProj(fromProj);
  var single = false;
  var obj;
  if (typeof toProj === 'undefined') {
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  } else if (typeof toProj.x !== 'undefined' || Array.isArray(toProj)) {
    coord = toProj;
    toProj = fromProj;
    fromProj = wgs84;
    single = true;
  }
  toProj = checkProj(toProj);
  if (coord) {
    return transformer(fromProj, toProj, coord);
  } else {
    obj = {
      forward: function forward(coords) {
        return transformer(fromProj, toProj, coords);
      },
      inverse: function inverse(coords) {
        return transformer(toProj, fromProj, coords);
      }
    };
    if (single) {
      obj.oProj = toProj;
    }
    return obj;
  }
}
var core = proj4$1;

/**
 * UTM zones are grouped, and assigned to one of a group of 6
 * sets.
 *
 * {int} @private
 */
var NUM_100K_SETS = 6;

/**
 * The column letters (for easting) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_COLUMN_LETTERS = 'AJSAJS';

/**
 * The row letters (for northing) of the lower left value, per
 * set.
 *
 * {string} @private
 */
var SET_ORIGIN_ROW_LETTERS = 'AFAFAF';

var A = 65; // A
var I = 73; // I
var O = 79; // O
var V = 86; // V
var Z = 90; // Z

/**
 * Conversion of lat/lon to MGRS.
 *
 * @param {object} ll Object literal with lat and lon properties on a
 *     WGS84 ellipsoid.
 * @param {int} accuracy Accuracy in digits (5 for 1 m, 4 for 10 m, 3 for
 *      100 m, 2 for 1000 m or 1 for 10000 m). Optional, default is 5.
 * @return {string} the MGRS string for the given location and accuracy.
 */
var forward$2 = function forward(ll, accuracy) {
  accuracy = accuracy || 5; // default accuracy 1m
  return encode(LLtoUTM({
    lat: ll[1],
    lon: ll[0]
  }), accuracy);
};

/**
 * Conversion of MGRS to lat/lon.
 *
 * @param {string} mgrs MGRS string.
 * @return {array} An array with left (longitude), bottom (latitude), right
 *     (longitude) and top (latitude) values in WGS84, representing the
 *     bounding box for the provided MGRS reference.
 */
var inverse$2 = function inverse(mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat, bbox.lon, bbox.lat];
  }
  return [bbox.left, bbox.bottom, bbox.right, bbox.top];
};

var toPoint$3 = function toPoint(mgrs) {
  var bbox = UTMtoLL(decode(mgrs.toUpperCase()));
  if (bbox.lat && bbox.lon) {
    return [bbox.lon, bbox.lat];
  }
  return [(bbox.left + bbox.right) / 2, (bbox.top + bbox.bottom) / 2];
};
/**
 * Conversion from degrees to radians.
 *
 * @private
 * @param {number} deg the angle in degrees.
 * @return {number} the angle in radians.
 */
function degToRad(deg) {
  return deg * (Math.PI / 180.0);
}

/**
 * Conversion from radians to degrees.
 *
 * @private
 * @param {number} rad the angle in radians.
 * @return {number} the angle in degrees.
 */
function radToDeg(rad) {
  return 180.0 * (rad / Math.PI);
}

/**
 * Converts a set of Longitude and Latitude co-ordinates to UTM
 * using the WGS84 ellipsoid.
 *
 * @private
 * @param {object} ll Object literal with lat and lon properties
 *     representing the WGS84 coordinate to be converted.
 * @return {object} Object literal containing the UTM value with easting,
 *     northing, zoneNumber and zoneLetter properties, and an optional
 *     accuracy property in digits. Returns null if the conversion failed.
 */
function LLtoUTM(ll) {
  var Lat = ll.lat;
  var Long = ll.lon;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var k0 = 0.9996;
  var LongOrigin;
  var eccPrimeSquared;
  var N, T, C, A, M;
  var LatRad = degToRad(Lat);
  var LongRad = degToRad(Long);
  var LongOriginRad;
  var ZoneNumber;
  // (int)
  ZoneNumber = Math.floor((Long + 180) / 6) + 1;

  //Make sure the longitude 180.00 is in Zone 60
  if (Long === 180) {
    ZoneNumber = 60;
  }

  // Special zone for Norway
  if (Lat >= 56.0 && Lat < 64.0 && Long >= 3.0 && Long < 12.0) {
    ZoneNumber = 32;
  }

  // Special zones for Svalbard
  if (Lat >= 72.0 && Lat < 84.0) {
    if (Long >= 0.0 && Long < 9.0) {
      ZoneNumber = 31;
    } else if (Long >= 9.0 && Long < 21.0) {
      ZoneNumber = 33;
    } else if (Long >= 21.0 && Long < 33.0) {
      ZoneNumber = 35;
    } else if (Long >= 33.0 && Long < 42.0) {
      ZoneNumber = 37;
    }
  }

  LongOrigin = (ZoneNumber - 1) * 6 - 180 + 3; //+3 puts origin
  // in middle of
  // zone
  LongOriginRad = degToRad(LongOrigin);

  eccPrimeSquared = eccSquared / (1 - eccSquared);

  N = a / Math.sqrt(1 - eccSquared * Math.sin(LatRad) * Math.sin(LatRad));
  T = Math.tan(LatRad) * Math.tan(LatRad);
  C = eccPrimeSquared * Math.cos(LatRad) * Math.cos(LatRad);
  A = Math.cos(LatRad) * (LongRad - LongOriginRad);

  M = a * ((1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256) * LatRad - (3 * eccSquared / 8 + 3 * eccSquared * eccSquared / 32 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(2 * LatRad) + (15 * eccSquared * eccSquared / 256 + 45 * eccSquared * eccSquared * eccSquared / 1024) * Math.sin(4 * LatRad) - 35 * eccSquared * eccSquared * eccSquared / 3072 * Math.sin(6 * LatRad));

  var UTMEasting = k0 * N * (A + (1 - T + C) * A * A * A / 6.0 + (5 - 18 * T + T * T + 72 * C - 58 * eccPrimeSquared) * A * A * A * A * A / 120.0) + 500000.0;

  var UTMNorthing = k0 * (M + N * Math.tan(LatRad) * (A * A / 2 + (5 - T + 9 * C + 4 * C * C) * A * A * A * A / 24.0 + (61 - 58 * T + T * T + 600 * C - 330 * eccPrimeSquared) * A * A * A * A * A * A / 720.0));
  if (Lat < 0.0) {
    UTMNorthing += 10000000.0; //10000000 meter offset for
    // southern hemisphere
  }

  return {
    northing: Math.round(UTMNorthing),
    easting: Math.round(UTMEasting),
    zoneNumber: ZoneNumber,
    zoneLetter: getLetterDesignator(Lat)
  };
}

/**
 * Converts UTM coords to lat/long, using the WGS84 ellipsoid. This is a convenience
 * class where the Zone can be specified as a single string eg."60N" which
 * is then broken down into the ZoneNumber and ZoneLetter.
 *
 * @private
 * @param {object} utm An object literal with northing, easting, zoneNumber
 *     and zoneLetter properties. If an optional accuracy property is
 *     provided (in meters), a bounding box will be returned instead of
 *     latitude and longitude.
 * @return {object} An object literal containing either lat and lon values
 *     (if no accuracy was provided), or top, right, bottom and left values
 *     for the bounding box calculated according to the provided accuracy.
 *     Returns null if the conversion failed.
 */
function UTMtoLL(utm) {

  var UTMNorthing = utm.northing;
  var UTMEasting = utm.easting;
  var zoneLetter = utm.zoneLetter;
  var zoneNumber = utm.zoneNumber;
  // check the ZoneNummber is valid
  if (zoneNumber < 0 || zoneNumber > 60) {
    return null;
  }

  var k0 = 0.9996;
  var a = 6378137.0; //ellip.radius;
  var eccSquared = 0.00669438; //ellip.eccsq;
  var eccPrimeSquared;
  var e1 = (1 - Math.sqrt(1 - eccSquared)) / (1 + Math.sqrt(1 - eccSquared));
  var N1, T1, C1, R1, D, M;
  var LongOrigin;
  var mu, phi1Rad;

  // remove 500,000 meter offset for longitude
  var x = UTMEasting - 500000.0;
  var y = UTMNorthing;

  // We must know somehow if we are in the Northern or Southern
  // hemisphere, this is the only time we use the letter So even
  // if the Zone letter isn't exactly correct it should indicate
  // the hemisphere correctly
  if (zoneLetter < 'N') {
    y -= 10000000.0; // remove 10,000,000 meter offset used
    // for southern hemisphere
  }

  // There are 60 zones with zone 1 being at West -180 to -174
  LongOrigin = (zoneNumber - 1) * 6 - 180 + 3; // +3 puts origin
  // in middle of
  // zone

  eccPrimeSquared = eccSquared / (1 - eccSquared);

  M = y / k0;
  mu = M / (a * (1 - eccSquared / 4 - 3 * eccSquared * eccSquared / 64 - 5 * eccSquared * eccSquared * eccSquared / 256));

  phi1Rad = mu + (3 * e1 / 2 - 27 * e1 * e1 * e1 / 32) * Math.sin(2 * mu) + (21 * e1 * e1 / 16 - 55 * e1 * e1 * e1 * e1 / 32) * Math.sin(4 * mu) + 151 * e1 * e1 * e1 / 96 * Math.sin(6 * mu);
  // double phi1 = ProjMath.radToDeg(phi1Rad);

  N1 = a / Math.sqrt(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad));
  T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
  C1 = eccPrimeSquared * Math.cos(phi1Rad) * Math.cos(phi1Rad);
  R1 = a * (1 - eccSquared) / Math.pow(1 - eccSquared * Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
  D = x / (N1 * k0);

  var lat = phi1Rad - N1 * Math.tan(phi1Rad) / R1 * (D * D / 2 - (5 + 3 * T1 + 10 * C1 - 4 * C1 * C1 - 9 * eccPrimeSquared) * D * D * D * D / 24 + (61 + 90 * T1 + 298 * C1 + 45 * T1 * T1 - 252 * eccPrimeSquared - 3 * C1 * C1) * D * D * D * D * D * D / 720);
  lat = radToDeg(lat);

  var lon = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * C1 * C1 + 8 * eccPrimeSquared + 24 * T1 * T1) * D * D * D * D * D / 120) / Math.cos(phi1Rad);
  lon = LongOrigin + radToDeg(lon);

  var result;
  if (utm.accuracy) {
    var topRight = UTMtoLL({
      northing: utm.northing + utm.accuracy,
      easting: utm.easting + utm.accuracy,
      zoneLetter: utm.zoneLetter,
      zoneNumber: utm.zoneNumber
    });
    result = {
      top: topRight.lat,
      right: topRight.lon,
      bottom: lat,
      left: lon
    };
  } else {
    result = {
      lat: lat,
      lon: lon
    };
  }
  return result;
}

/**
 * Calculates the MGRS letter designator for the given latitude.
 *
 * @private
 * @param {number} lat The latitude in WGS84 to get the letter designator
 *     for.
 * @return {char} The letter designator.
 */
function getLetterDesignator(lat) {
  //This is here as an error flag to show that the Latitude is
  //outside MGRS limits
  var LetterDesignator = 'Z';

  if (84 >= lat && lat >= 72) {
    LetterDesignator = 'X';
  } else if (72 > lat && lat >= 64) {
    LetterDesignator = 'W';
  } else if (64 > lat && lat >= 56) {
    LetterDesignator = 'V';
  } else if (56 > lat && lat >= 48) {
    LetterDesignator = 'U';
  } else if (48 > lat && lat >= 40) {
    LetterDesignator = 'T';
  } else if (40 > lat && lat >= 32) {
    LetterDesignator = 'S';
  } else if (32 > lat && lat >= 24) {
    LetterDesignator = 'R';
  } else if (24 > lat && lat >= 16) {
    LetterDesignator = 'Q';
  } else if (16 > lat && lat >= 8) {
    LetterDesignator = 'P';
  } else if (8 > lat && lat >= 0) {
    LetterDesignator = 'N';
  } else if (0 > lat && lat >= -8) {
    LetterDesignator = 'M';
  } else if (-8 > lat && lat >= -16) {
    LetterDesignator = 'L';
  } else if (-16 > lat && lat >= -24) {
    LetterDesignator = 'K';
  } else if (-24 > lat && lat >= -32) {
    LetterDesignator = 'J';
  } else if (-32 > lat && lat >= -40) {
    LetterDesignator = 'H';
  } else if (-40 > lat && lat >= -48) {
    LetterDesignator = 'G';
  } else if (-48 > lat && lat >= -56) {
    LetterDesignator = 'F';
  } else if (-56 > lat && lat >= -64) {
    LetterDesignator = 'E';
  } else if (-64 > lat && lat >= -72) {
    LetterDesignator = 'D';
  } else if (-72 > lat && lat >= -80) {
    LetterDesignator = 'C';
  }
  return LetterDesignator;
}

/**
 * Encodes a UTM location as MGRS string.
 *
 * @private
 * @param {object} utm An object literal with easting, northing,
 *     zoneLetter, zoneNumber
 * @param {number} accuracy Accuracy in digits (1-5).
 * @return {string} MGRS string for the given UTM location.
 */
function encode(utm, accuracy) {
  // prepend with leading zeroes
  var seasting = "00000" + utm.easting,
      snorthing = "00000" + utm.northing;

  return utm.zoneNumber + utm.zoneLetter + get100kID(utm.easting, utm.northing, utm.zoneNumber) + seasting.substr(seasting.length - 5, accuracy) + snorthing.substr(snorthing.length - 5, accuracy);
}

/**
 * Get the two letter 100k designator for a given UTM easting,
 * northing and zone number value.
 *
 * @private
 * @param {number} easting
 * @param {number} northing
 * @param {number} zoneNumber
 * @return the two letter 100k designator for the given UTM location.
 */
function get100kID(easting, northing, zoneNumber) {
  var setParm = get100kSetForZone(zoneNumber);
  var setColumn = Math.floor(easting / 100000);
  var setRow = Math.floor(northing / 100000) % 20;
  return getLetter100kID(setColumn, setRow, setParm);
}

/**
 * Given a UTM zone number, figure out the MGRS 100K set it is in.
 *
 * @private
 * @param {number} i An UTM zone number.
 * @return {number} the 100k set the UTM zone is in.
 */
function get100kSetForZone(i) {
  var setParm = i % NUM_100K_SETS;
  if (setParm === 0) {
    setParm = NUM_100K_SETS;
  }

  return setParm;
}

/**
 * Get the two-letter MGRS 100k designator given information
 * translated from the UTM northing, easting and zone number.
 *
 * @private
 * @param {number} column the column index as it relates to the MGRS
 *        100k set spreadsheet, created from the UTM easting.
 *        Values are 1-8.
 * @param {number} row the row index as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM northing value. Values
 *        are from 0-19.
 * @param {number} parm the set block, as it relates to the MGRS 100k set
 *        spreadsheet, created from the UTM zone. Values are from
 *        1-60.
 * @return two letter MGRS 100k code.
 */
function getLetter100kID(column, row, parm) {
  // colOrigin and rowOrigin are the letters at the origin of the set
  var index = parm - 1;
  var colOrigin = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(index);
  var rowOrigin = SET_ORIGIN_ROW_LETTERS.charCodeAt(index);

  // colInt and rowInt are the letters to build to return
  var colInt = colOrigin + column - 1;
  var rowInt = rowOrigin + row;
  var rollover = false;

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
    rollover = true;
  }

  if (colInt === I || colOrigin < I && colInt > I || (colInt > I || colOrigin < I) && rollover) {
    colInt++;
  }

  if (colInt === O || colOrigin < O && colInt > O || (colInt > O || colOrigin < O) && rollover) {
    colInt++;

    if (colInt === I) {
      colInt++;
    }
  }

  if (colInt > Z) {
    colInt = colInt - Z + A - 1;
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
    rollover = true;
  } else {
    rollover = false;
  }

  if (rowInt === I || rowOrigin < I && rowInt > I || (rowInt > I || rowOrigin < I) && rollover) {
    rowInt++;
  }

  if (rowInt === O || rowOrigin < O && rowInt > O || (rowInt > O || rowOrigin < O) && rollover) {
    rowInt++;

    if (rowInt === I) {
      rowInt++;
    }
  }

  if (rowInt > V) {
    rowInt = rowInt - V + A - 1;
  }

  var twoLetter = String.fromCharCode(colInt) + String.fromCharCode(rowInt);
  return twoLetter;
}

/**
 * Decode the UTM parameters from a MGRS string.
 *
 * @private
 * @param {string} mgrsString an UPPERCASE coordinate string is expected.
 * @return {object} An object literal with easting, northing, zoneLetter,
 *     zoneNumber and accuracy (in meters) properties.
 */
function decode(mgrsString) {

  if (mgrsString && mgrsString.length === 0) {
    throw "MGRSPoint coverting from nothing";
  }

  var length = mgrsString.length;

  var hunK = null;
  var sb = "";
  var testChar;
  var i = 0;

  // get Zone number
  while (!/[A-Z]/.test(testChar = mgrsString.charAt(i))) {
    if (i >= 2) {
      throw "MGRSPoint bad conversion from: " + mgrsString;
    }
    sb += testChar;
    i++;
  }

  var zoneNumber = parseInt(sb, 10);

  if (i === 0 || i + 3 > length) {
    // A good MGRS string has to be 4-5 digits long,
    // ##AAA/#AAA at least.
    throw "MGRSPoint bad conversion from: " + mgrsString;
  }

  var zoneLetter = mgrsString.charAt(i++);

  // Should we check the zone letter here? Why not.
  if (zoneLetter <= 'A' || zoneLetter === 'B' || zoneLetter === 'Y' || zoneLetter >= 'Z' || zoneLetter === 'I' || zoneLetter === 'O') {
    throw "MGRSPoint zone letter " + zoneLetter + " not handled: " + mgrsString;
  }

  hunK = mgrsString.substring(i, i += 2);

  var set = get100kSetForZone(zoneNumber);

  var east100k = getEastingFromChar(hunK.charAt(0), set);
  var north100k = getNorthingFromChar(hunK.charAt(1), set);

  // We have a bug where the northing may be 2000000 too low.
  // How
  // do we know when to roll over?

  while (north100k < getMinNorthing(zoneLetter)) {
    north100k += 2000000;
  }

  // calculate the char index for easting/northing separator
  var remainder = length - i;

  if (remainder % 2 !== 0) {
    throw "MGRSPoint has to have an even number \nof digits after the zone letter and two 100km letters - front \nhalf for easting meters, second half for \nnorthing meters" + mgrsString;
  }

  var sep = remainder / 2;

  var sepEasting = 0.0;
  var sepNorthing = 0.0;
  var accuracyBonus, sepEastingString, sepNorthingString, easting, northing;
  if (sep > 0) {
    accuracyBonus = 100000.0 / Math.pow(10, sep);
    sepEastingString = mgrsString.substring(i, i + sep);
    sepEasting = parseFloat(sepEastingString) * accuracyBonus;
    sepNorthingString = mgrsString.substring(i + sep);
    sepNorthing = parseFloat(sepNorthingString) * accuracyBonus;
  }

  easting = sepEasting + east100k;
  northing = sepNorthing + north100k;

  return {
    easting: easting,
    northing: northing,
    zoneLetter: zoneLetter,
    zoneNumber: zoneNumber,
    accuracy: accuracyBonus
  };
}

/**
 * Given the first letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the easting value that
 * should be added to the other, secondary easting value.
 *
 * @private
 * @param {char} e The first letter from a two-letter MGRS 100´k zone.
 * @param {number} set The MGRS table set for the zone number.
 * @return {number} The easting value for the given letter and set.
 */
function getEastingFromChar(e, set) {
  // colOrigin is the letter at the origin of the set for the
  // column
  var curCol = SET_ORIGIN_COLUMN_LETTERS.charCodeAt(set - 1);
  var eastingValue = 100000.0;
  var rewindMarker = false;

  while (curCol !== e.charCodeAt(0)) {
    curCol++;
    if (curCol === I) {
      curCol++;
    }
    if (curCol === O) {
      curCol++;
    }
    if (curCol > Z) {
      if (rewindMarker) {
        throw "Bad character: " + e;
      }
      curCol = A;
      rewindMarker = true;
    }
    eastingValue += 100000.0;
  }

  return eastingValue;
}

/**
 * Given the second letter from a two-letter MGRS 100k zone, and given the
 * MGRS table set for the zone number, figure out the northing value that
 * should be added to the other, secondary northing value. You have to
 * remember that Northings are determined from the equator, and the vertical
 * cycle of letters mean a 2000000 additional northing meters. This happens
 * approx. every 18 degrees of latitude. This method does *NOT* count any
 * additional northings. You have to figure out how many 2000000 meters need
 * to be added for the zone letter of the MGRS coordinate.
 *
 * @private
 * @param {char} n Second letter of the MGRS 100k zone
 * @param {number} set The MGRS table set number, which is dependent on the
 *     UTM zone number.
 * @return {number} The northing value for the given letter and set.
 */
function getNorthingFromChar(n, set) {

  if (n > 'V') {
    throw "MGRSPoint given invalid Northing " + n;
  }

  // rowOrigin is the letter at the origin of the set for the
  // column
  var curRow = SET_ORIGIN_ROW_LETTERS.charCodeAt(set - 1);
  var northingValue = 0.0;
  var rewindMarker = false;

  while (curRow !== n.charCodeAt(0)) {
    curRow++;
    if (curRow === I) {
      curRow++;
    }
    if (curRow === O) {
      curRow++;
    }
    // fixing a bug making whole application hang in this loop
    // when 'n' is a wrong character
    if (curRow > V) {
      if (rewindMarker) {
        // making sure that this loop ends
        throw "Bad character: " + n;
      }
      curRow = A;
      rewindMarker = true;
    }
    northingValue += 100000.0;
  }

  return northingValue;
}

/**
 * The function getMinNorthing returns the minimum northing value of a MGRS
 * zone.
 *
 * Ported from Geotrans' c Lattitude_Band_Value structure table.
 *
 * @private
 * @param {char} zoneLetter The MGRS zone to get the min northing for.
 * @return {number}
 */
function getMinNorthing(zoneLetter) {
  var northing;
  switch (zoneLetter) {
    case 'C':
      northing = 1100000.0;
      break;
    case 'D':
      northing = 2000000.0;
      break;
    case 'E':
      northing = 2800000.0;
      break;
    case 'F':
      northing = 3700000.0;
      break;
    case 'G':
      northing = 4600000.0;
      break;
    case 'H':
      northing = 5500000.0;
      break;
    case 'J':
      northing = 6400000.0;
      break;
    case 'K':
      northing = 7300000.0;
      break;
    case 'L':
      northing = 8200000.0;
      break;
    case 'M':
      northing = 9100000.0;
      break;
    case 'N':
      northing = 0.0;
      break;
    case 'P':
      northing = 800000.0;
      break;
    case 'Q':
      northing = 1700000.0;
      break;
    case 'R':
      northing = 2600000.0;
      break;
    case 'S':
      northing = 3500000.0;
      break;
    case 'T':
      northing = 4400000.0;
      break;
    case 'U':
      northing = 5300000.0;
      break;
    case 'V':
      northing = 6200000.0;
      break;
    case 'W':
      northing = 7000000.0;
      break;
    case 'X':
      northing = 7900000.0;
      break;
    default:
      northing = -1.0;
  }
  if (northing >= 0.0) {
    return northing;
  } else {
    throw "Invalid zone letter: " + zoneLetter;
  }
}

var mgrs = {
  forward: forward$2,
  inverse: inverse$2,
  toPoint: toPoint$3
};

var _typeof$10 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function Point(x, y, z) {
  if (!(this instanceof Point)) {
    return new Point(x, y, z);
  }
  if (Array.isArray(x)) {
    this.x = x[0];
    this.y = x[1];
    this.z = x[2] || 0.0;
  } else if ((typeof x === 'undefined' ? 'undefined' : _typeof$10(x)) === 'object') {
    this.x = x.x;
    this.y = x.y;
    this.z = x.z || 0.0;
  } else if (typeof x === 'string' && typeof y === 'undefined') {
    var coords = x.split(',');
    this.x = parseFloat(coords[0], 10);
    this.y = parseFloat(coords[1], 10);
    this.z = parseFloat(coords[2], 10) || 0.0;
  } else {
    this.x = x;
    this.y = y;
    this.z = z || 0.0;
  }
  console.warn('proj4.Point will be removed in version 3, use proj4.toPoint');
}

Point.fromMGRS = function (mgrsStr) {
  return new Point(mgrs.toPoint(mgrsStr));
};
Point.prototype.toMGRS = function (accuracy) {
  return mgrs.forward([this.x, this.y], accuracy);
};
var Point_1 = Point;

var _args = [[{ "raw": "proj4@^2.3.15", "scope": null, "escapedName": "proj4", "name": "proj4", "rawSpec": "^2.3.15", "spec": ">=2.3.15 <3.0.0", "type": "range" }, "/Users/yongjun21/GitHub/sg-heatmap"]];
var _from = "proj4@>=2.3.15 <3.0.0";
var _id = "proj4@2.3.15";
var _inCache = true;
var _installable = true;
var _location = "/proj4";
var _nodeVersion = "6.1.0";
var _npmOperationalInternal = { "host": "packages-12-west.internal.npmjs.com", "tmp": "tmp/proj4-2.3.15.tgz_1471808262546_0.6752060337457806" };
var _npmUser = { "name": "ahocevar", "email": "andreas.hocevar@gmail.com" };
var _npmVersion = "3.8.6";
var _phantomChildren = {};
var _requested = { "raw": "proj4@^2.3.15", "scope": null, "escapedName": "proj4", "name": "proj4", "rawSpec": "^2.3.15", "spec": ">=2.3.15 <3.0.0", "type": "range" };
var _requiredBy = ["/"];
var _resolved = "https://registry.npmjs.org/proj4/-/proj4-2.3.15.tgz";
var _shasum = "5ad06e8bca30be0ffa389a49e4565f51f06d089e";
var _shrinkwrap = null;
var _spec = "proj4@^2.3.15";
var _where = "/Users/yongjun21/GitHub/sg-heatmap";
var author = "";
var bugs = { "url": "https://github.com/proj4js/proj4js/issues" };
var contributors = [{ "name": "Mike Adair", "email": "madair@dmsolutions.ca" }, { "name": "Richard Greenwood", "email": "rich@greenwoodmap.com" }, { "name": "Calvin Metcalf", "email": "calvin.metcalf@gmail.com" }, { "name": "Richard Marsden", "url": "http://www.winwaed.com" }, { "name": "T. Mittan" }, { "name": "D. Steinwand" }, { "name": "S. Nelson" }];
var dependencies = { "mgrs": "~0.0.2" };
var description = "Proj4js is a JavaScript library to transform point coordinates from one coordinate system to another, including datum transformations.";
var devDependencies = { "browserify": "~12.0.1", "chai": "~1.8.1", "curl": "git://github.com/cujojs/curl.git", "grunt": "~0.4.2", "grunt-browserify": "~4.0.1", "grunt-cli": "~0.1.13", "grunt-contrib-connect": "~0.6.0", "grunt-contrib-jshint": "~0.8.0", "grunt-contrib-uglify": "~0.11.1", "grunt-mocha-phantomjs": "~0.4.0", "istanbul": "~0.2.4", "mocha": "~1.17.1", "tin": "~0.4.0" };
var directories = { "test": "test", "doc": "docs" };
var dist = { "shasum": "5ad06e8bca30be0ffa389a49e4565f51f06d089e", "tarball": "https://registry.npmjs.org/proj4/-/proj4-2.3.15.tgz" };
var gitHead = "9fa5249c1f4183d5ddee3c4793dfd7b9f29f1886";
var homepage = "https://github.com/proj4js/proj4js#readme";
var jam = { "main": "dist/proj4.js", "include": ["dist/proj4.js", "README.md", "AUTHORS", "LICENSE.md"] };
var license = "MIT";
var main = "lib/index.js";
var maintainers = [{ "name": "cwmma", "email": "calvin.metcalf@gmail.com" }, { "name": "ahocevar", "email": "andreas.hocevar@gmail.com" }];
var name = "proj4";
var optionalDependencies = {};
var readme = "ERROR: No README data found!";
var repository = { "type": "git", "url": "git://github.com/proj4js/proj4js.git" };
var scripts = { "test": "./node_modules/istanbul/lib/cli.js test ./node_modules/mocha/bin/_mocha test/test.js" };
var version = "2.3.15";
var _package = {
	_args: _args,
	_from: _from,
	_id: _id,
	_inCache: _inCache,
	_installable: _installable,
	_location: _location,
	_nodeVersion: _nodeVersion,
	_npmOperationalInternal: _npmOperationalInternal,
	_npmUser: _npmUser,
	_npmVersion: _npmVersion,
	_phantomChildren: _phantomChildren,
	_requested: _requested,
	_requiredBy: _requiredBy,
	_resolved: _resolved,
	_shasum: _shasum,
	_shrinkwrap: _shrinkwrap,
	_spec: _spec,
	_where: _where,
	author: author,
	bugs: bugs,
	contributors: contributors,
	dependencies: dependencies,
	description: description,
	devDependencies: devDependencies,
	directories: directories,
	dist: dist,
	gitHead: gitHead,
	homepage: homepage,
	jam: jam,
	license: license,
	main: main,
	maintainers: maintainers,
	name: name,
	optionalDependencies: optionalDependencies,
	readme: readme,
	repository: repository,
	scripts: scripts,
	version: version
};

var _package$1 = Object.freeze({
	_args: _args,
	_from: _from,
	_id: _id,
	_inCache: _inCache,
	_installable: _installable,
	_location: _location,
	_nodeVersion: _nodeVersion,
	_npmOperationalInternal: _npmOperationalInternal,
	_npmUser: _npmUser,
	_npmVersion: _npmVersion,
	_phantomChildren: _phantomChildren,
	_requested: _requested,
	_requiredBy: _requiredBy,
	_resolved: _resolved,
	_shasum: _shasum,
	_shrinkwrap: _shrinkwrap,
	_spec: _spec,
	_where: _where,
	author: author,
	bugs: bugs,
	contributors: contributors,
	dependencies: dependencies,
	description: description,
	devDependencies: devDependencies,
	directories: directories,
	dist: dist,
	gitHead: gitHead,
	homepage: homepage,
	jam: jam,
	license: license,
	main: main,
	maintainers: maintainers,
	name: name,
	optionalDependencies: optionalDependencies,
	readme: readme,
	repository: repository,
	scripts: scripts,
	version: version,
	default: _package
});

var e0fn = function e0fn(x) {
  return 1 - 0.25 * x * (1 + x / 16 * (3 + 1.25 * x));
};

var e1fn = function e1fn(x) {
  return 0.375 * x * (1 + 0.25 * x * (1 + 0.46875 * x));
};

var e2fn = function e2fn(x) {
  return 0.05859375 * x * x * (1 + 0.75 * x);
};

var e3fn = function e3fn(x) {
  return x * x * x * (35 / 3072);
};

var mlfn = function mlfn(e0, e1, e2, e3, phi) {
  return e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi);
};

var asinz = function asinz(x) {
  if (Math.abs(x) > 1) {
    x = x > 1 ? 1 : -1;
  }
  return Math.asin(x);
};

var HALF_PI$4 = Math.PI / 2;
var EPSLN$2 = 1.0e-10;

var init$2 = function init() {
  this.e0 = e0fn(this.es);
  this.e1 = e1fn(this.es);
  this.e2 = e2fn(this.es);
  this.e3 = e3fn(this.es);
  this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
};

/**
    Transverse Mercator Forward  - long/lat to x/y
    long/lat in radians
  */
var forward$3 = function forward(p) {
  var lon = p.x;
  var lat = p.y;

  var delta_lon = adjust_lon(lon - this.long0);
  var con;
  var x, y;
  var sin_phi = Math.sin(lat);
  var cos_phi = Math.cos(lat);

  if (this.sphere) {
    var b = cos_phi * Math.sin(delta_lon);
    if (Math.abs(Math.abs(b) - 1) < 0.0000000001) {
      return 93;
    } else {
      x = 0.5 * this.a * this.k0 * Math.log((1 + b) / (1 - b));
      con = Math.acos(cos_phi * Math.cos(delta_lon) / Math.sqrt(1 - b * b));
      if (lat < 0) {
        con = -con;
      }
      y = this.a * this.k0 * (con - this.lat0);
    }
  } else {
    var al = cos_phi * delta_lon;
    var als = Math.pow(al, 2);
    var c = this.ep2 * Math.pow(cos_phi, 2);
    var tq = Math.tan(lat);
    var t = Math.pow(tq, 2);
    con = 1 - this.es * Math.pow(sin_phi, 2);
    var n = this.a / Math.sqrt(con);
    var ml = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, lat);

    x = this.k0 * n * al * (1 + als / 6 * (1 - t + c + als / 20 * (5 - 18 * t + Math.pow(t, 2) + 72 * c - 58 * this.ep2))) + this.x0;
    y = this.k0 * (ml - this.ml0 + n * tq * (als * (0.5 + als / 24 * (5 - t + 9 * c + 4 * Math.pow(c, 2) + als / 30 * (61 - 58 * t + Math.pow(t, 2) + 600 * c - 330 * this.ep2))))) + this.y0;
  }
  p.x = x;
  p.y = y;
  return p;
};

/**
    Transverse Mercator Inverse  -  x/y to long/lat
  */
var inverse$3 = function inverse(p) {
  var con, phi;
  var delta_phi;
  var i;
  var max_iter = 6;
  var lat, lon;

  if (this.sphere) {
    var f = Math.exp(p.x / (this.a * this.k0));
    var g = 0.5 * (f - 1 / f);
    var temp = this.lat0 + p.y / (this.a * this.k0);
    var h = Math.cos(temp);
    con = Math.sqrt((1 - h * h) / (1 + g * g));
    lat = asinz(con);
    if (temp < 0) {
      lat = -lat;
    }
    if (g === 0 && h === 0) {
      lon = this.long0;
    } else {
      lon = adjust_lon(Math.atan2(g, h) + this.long0);
    }
  } else {
    // ellipsoidal form
    var x = p.x - this.x0;
    var y = p.y - this.y0;

    con = (this.ml0 + y / this.k0) / this.a;
    phi = con;
    for (i = 0; true; i++) {
      delta_phi = (con + this.e1 * Math.sin(2 * phi) - this.e2 * Math.sin(4 * phi) + this.e3 * Math.sin(6 * phi)) / this.e0 - phi;
      phi += delta_phi;
      if (Math.abs(delta_phi) <= EPSLN$2) {
        break;
      }
      if (i >= max_iter) {
        return 95;
      }
    } // for()
    if (Math.abs(phi) < HALF_PI$4) {
      var sin_phi = Math.sin(phi);
      var cos_phi = Math.cos(phi);
      var tan_phi = Math.tan(phi);
      var c = this.ep2 * Math.pow(cos_phi, 2);
      var cs = Math.pow(c, 2);
      var t = Math.pow(tan_phi, 2);
      var ts = Math.pow(t, 2);
      con = 1 - this.es * Math.pow(sin_phi, 2);
      var n = this.a / Math.sqrt(con);
      var r = n * (1 - this.es) / con;
      var d = x / (n * this.k0);
      var ds = Math.pow(d, 2);
      lat = phi - n * tan_phi * ds / r * (0.5 - ds / 24 * (5 + 3 * t + 10 * c - 4 * cs - 9 * this.ep2 - ds / 30 * (61 + 90 * t + 298 * c + 45 * ts - 252 * this.ep2 - 3 * cs)));
      lon = adjust_lon(this.long0 + d * (1 - ds / 6 * (1 + 2 * t + c - ds / 20 * (5 - 2 * c + 28 * t - 3 * cs + 8 * this.ep2 + 24 * ts))) / cos_phi);
    } else {
      lat = HALF_PI$4 * sign(y);
      lon = this.long0;
    }
  }
  p.x = lon;
  p.y = lat;
  return p;
};
var names$3 = ["Transverse_Mercator", "Transverse Mercator", "tmerc"];

var tmerc = {
  init: init$2,
  forward: forward$3,
  inverse: inverse$3,
  names: names$3
};

var D2R$3 = 0.01745329251994329577;

var dependsOn = 'tmerc';
var init$3 = function init() {
  if (!this.zone) {
    return;
  }
  this.lat0 = 0;
  this.long0 = (6 * Math.abs(this.zone) - 183) * D2R$3;
  this.x0 = 500000;
  this.y0 = this.utmSouth ? 10000000 : 0;
  this.k0 = 0.9996;

  tmerc.init.apply(this);
  this.forward = tmerc.forward;
  this.inverse = tmerc.inverse;
};
var names$4 = ["Universal Transverse Mercator System", "utm"];

var utm = {
  dependsOn: dependsOn,
  init: init$3,
  names: names$4
};

var srat = function srat(esinp, exp) {
  return Math.pow((1 - esinp) / (1 + esinp), exp);
};

var FORTPI$1 = Math.PI / 4;

var HALF_PI$5 = Math.PI / 2;
var MAX_ITER = 20;
var init$5 = function init() {
  var sphi = Math.sin(this.lat0);
  var cphi = Math.cos(this.lat0);
  cphi *= cphi;
  this.rc = Math.sqrt(1 - this.es) / (1 - this.es * sphi * sphi);
  this.C = Math.sqrt(1 + this.es * cphi * cphi / (1 - this.es));
  this.phic0 = Math.asin(sphi / this.C);
  this.ratexp = 0.5 * this.C * this.e;
  this.K = Math.tan(0.5 * this.phic0 + FORTPI$1) / (Math.pow(Math.tan(0.5 * this.lat0 + FORTPI$1), this.C) * srat(this.e * sphi, this.ratexp));
};

var forward$5 = function forward(p) {
  var lon = p.x;
  var lat = p.y;

  p.y = 2 * Math.atan(this.K * Math.pow(Math.tan(0.5 * lat + FORTPI$1), this.C) * srat(this.e * Math.sin(lat), this.ratexp)) - HALF_PI$5;
  p.x = this.C * lon;
  return p;
};

var inverse$5 = function inverse(p) {
  var DEL_TOL = 1e-14;
  var lon = p.x / this.C;
  var lat = p.y;
  var num = Math.pow(Math.tan(0.5 * lat + FORTPI$1) / this.K, 1 / this.C);
  for (var i = MAX_ITER; i > 0; --i) {
    lat = 2 * Math.atan(num * srat(this.e * Math.sin(p.y), -0.5 * this.e)) - HALF_PI$5;
    if (Math.abs(lat - p.y) < DEL_TOL) {
      break;
    }
    p.y = lat;
  }
  /* convergence failed */
  if (!i) {
    return null;
  }
  p.x = lon;
  p.y = lat;
  return p;
};
var names$6 = ["gauss"];

var gauss = {
  init: init$5,
  forward: forward$5,
  inverse: inverse$5,
  names: names$6
};

var init$4 = function init() {
  gauss.init.apply(this);
  if (!this.rc) {
    return;
  }
  this.sinc0 = Math.sin(this.phic0);
  this.cosc0 = Math.cos(this.phic0);
  this.R2 = 2 * this.rc;
  if (!this.title) {
    this.title = "Oblique Stereographic Alternative";
  }
};

var forward$4 = function forward(p) {
  var sinc, cosc, cosl, k;
  p.x = adjust_lon(p.x - this.long0);
  gauss.forward.apply(this, [p]);
  sinc = Math.sin(p.y);
  cosc = Math.cos(p.y);
  cosl = Math.cos(p.x);
  k = this.k0 * this.R2 / (1 + this.sinc0 * sinc + this.cosc0 * cosc * cosl);
  p.x = k * cosc * Math.sin(p.x);
  p.y = k * (this.cosc0 * sinc - this.sinc0 * cosc * cosl);
  p.x = this.a * p.x + this.x0;
  p.y = this.a * p.y + this.y0;
  return p;
};

var inverse$4 = function inverse(p) {
  var sinc, cosc, lon, lat, rho;
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;
  if (rho = Math.sqrt(p.x * p.x + p.y * p.y)) {
    var c = 2 * Math.atan2(rho, this.R2);
    sinc = Math.sin(c);
    cosc = Math.cos(c);
    lat = Math.asin(cosc * this.sinc0 + p.y * sinc * this.cosc0 / rho);
    lon = Math.atan2(p.x * sinc, rho * this.cosc0 * cosc - p.y * this.sinc0 * sinc);
  } else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  gauss.inverse.apply(this, [p]);
  p.x = adjust_lon(p.x + this.long0);
  return p;
};

var names$5 = ["Stereographic_North_Pole", "Oblique_Stereographic", "Polar_Stereographic", "sterea", "Oblique Stereographic Alternative"];

var sterea = {
  init: init$4,
  forward: forward$4,
  inverse: inverse$4,
  names: names$5
};

var HALF_PI$6 = Math.PI / 2;
var EPSLN$3 = 1.0e-10;

var ssfn_ = function ssfn_(phit, sinphi, eccen) {
  sinphi *= eccen;
  return Math.tan(0.5 * (HALF_PI$6 + phit)) * Math.pow((1 - sinphi) / (1 + sinphi), 0.5 * eccen);
};

var init$6 = function init() {
  this.coslat0 = Math.cos(this.lat0);
  this.sinlat0 = Math.sin(this.lat0);
  if (this.sphere) {
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= EPSLN$3) {
      this.k0 = 0.5 * (1 + sign(this.lat0) * Math.sin(this.lat_ts));
    }
  } else {
    if (Math.abs(this.coslat0) <= EPSLN$3) {
      if (this.lat0 > 0) {
        //North pole
        //trace('stere:north pole');
        this.con = 1;
      } else {
        //South pole
        //trace('stere:south pole');
        this.con = -1;
      }
    }
    this.cons = Math.sqrt(Math.pow(1 + this.e, 1 + this.e) * Math.pow(1 - this.e, 1 - this.e));
    if (this.k0 === 1 && !isNaN(this.lat_ts) && Math.abs(this.coslat0) <= EPSLN$3) {
      this.k0 = 0.5 * this.cons * msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts)) / tsfnz(this.e, this.con * this.lat_ts, this.con * Math.sin(this.lat_ts));
    }
    this.ms1 = msfnz(this.e, this.sinlat0, this.coslat0);
    this.X0 = 2 * Math.atan(this.ssfn_(this.lat0, this.sinlat0, this.e)) - HALF_PI$6;
    this.cosX0 = Math.cos(this.X0);
    this.sinX0 = Math.sin(this.X0);
  }
};

// Stereographic forward equations--mapping lat,long to x,y
var forward$6 = function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var sinlat = Math.sin(lat);
  var coslat = Math.cos(lat);
  var A, X, sinX, cosX, ts, rh;
  var dlon = adjust_lon(lon - this.long0);

  if (Math.abs(Math.abs(lon - this.long0) - Math.PI) <= EPSLN$3 && Math.abs(lat + this.lat0) <= EPSLN$3) {
    //case of the origine point
    //trace('stere:this is the origin point');
    p.x = NaN;
    p.y = NaN;
    return p;
  }
  if (this.sphere) {
    //trace('stere:sphere case');
    A = 2 * this.k0 / (1 + this.sinlat0 * sinlat + this.coslat0 * coslat * Math.cos(dlon));
    p.x = this.a * A * coslat * Math.sin(dlon) + this.x0;
    p.y = this.a * A * (this.coslat0 * sinlat - this.sinlat0 * coslat * Math.cos(dlon)) + this.y0;
    return p;
  } else {
    X = 2 * Math.atan(this.ssfn_(lat, sinlat, this.e)) - HALF_PI$6;
    cosX = Math.cos(X);
    sinX = Math.sin(X);
    if (Math.abs(this.coslat0) <= EPSLN$3) {
      ts = tsfnz(this.e, lat * this.con, this.con * sinlat);
      rh = 2 * this.a * this.k0 * ts / this.cons;
      p.x = this.x0 + rh * Math.sin(lon - this.long0);
      p.y = this.y0 - this.con * rh * Math.cos(lon - this.long0);
      //trace(p.toString());
      return p;
    } else if (Math.abs(this.sinlat0) < EPSLN$3) {
      //Eq
      //trace('stere:equateur');
      A = 2 * this.a * this.k0 / (1 + cosX * Math.cos(dlon));
      p.y = A * sinX;
    } else {
      //other case
      //trace('stere:normal case');
      A = 2 * this.a * this.k0 * this.ms1 / (this.cosX0 * (1 + this.sinX0 * sinX + this.cosX0 * cosX * Math.cos(dlon)));
      p.y = A * (this.cosX0 * sinX - this.sinX0 * cosX * Math.cos(dlon)) + this.y0;
    }
    p.x = A * cosX * Math.sin(dlon) + this.x0;
  }
  //trace(p.toString());
  return p;
};

//* Stereographic inverse equations--mapping x,y to lat/long
var inverse$6 = function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat, ts, ce, Chi;
  var rh = Math.sqrt(p.x * p.x + p.y * p.y);
  if (this.sphere) {
    var c = 2 * Math.atan(rh / (0.5 * this.a * this.k0));
    lon = this.long0;
    lat = this.lat0;
    if (rh <= EPSLN$3) {
      p.x = lon;
      p.y = lat;
      return p;
    }
    lat = Math.asin(Math.cos(c) * this.sinlat0 + p.y * Math.sin(c) * this.coslat0 / rh);
    if (Math.abs(this.coslat0) < EPSLN$3) {
      if (this.lat0 > 0) {
        lon = adjust_lon(this.long0 + Math.atan2(p.x, -1 * p.y));
      } else {
        lon = adjust_lon(this.long0 + Math.atan2(p.x, p.y));
      }
    } else {
      lon = adjust_lon(this.long0 + Math.atan2(p.x * Math.sin(c), rh * this.coslat0 * Math.cos(c) - p.y * this.sinlat0 * Math.sin(c)));
    }
    p.x = lon;
    p.y = lat;
    return p;
  } else {
    if (Math.abs(this.coslat0) <= EPSLN$3) {
      if (rh <= EPSLN$3) {
        lat = this.lat0;
        lon = this.long0;
        p.x = lon;
        p.y = lat;
        //trace(p.toString());
        return p;
      }
      p.x *= this.con;
      p.y *= this.con;
      ts = rh * this.cons / (2 * this.a * this.k0);
      lat = this.con * phi2z(this.e, ts);
      lon = this.con * adjust_lon(this.con * this.long0 + Math.atan2(p.x, -1 * p.y));
    } else {
      ce = 2 * Math.atan(rh * this.cosX0 / (2 * this.a * this.k0 * this.ms1));
      lon = this.long0;
      if (rh <= EPSLN$3) {
        Chi = this.X0;
      } else {
        Chi = Math.asin(Math.cos(ce) * this.sinX0 + p.y * Math.sin(ce) * this.cosX0 / rh);
        lon = adjust_lon(this.long0 + Math.atan2(p.x * Math.sin(ce), rh * this.cosX0 * Math.cos(ce) - p.y * this.sinX0 * Math.sin(ce)));
      }
      lat = -1 * phi2z(this.e, Math.tan(0.5 * (HALF_PI$6 + Chi)));
    }
  }
  p.x = lon;
  p.y = lat;

  //trace(p.toString());
  return p;
};
var names$7 = ["stere", "Stereographic_South_Pole", "Polar Stereographic (variant B)"];

var stere = {
  ssfn_: ssfn_,
  init: init$6,
  forward: forward$6,
  inverse: inverse$6,
  names: names$7
};

/*
  references:
    Formules et constantes pour le Calcul pour la
    projection cylindrique conforme à axe oblique et pour la transformation entre
    des systèmes de référence.
    http://www.swisstopo.admin.ch/internet/swisstopo/fr/home/topics/survey/sys/refsys/switzerland.parsysrelated1.31216.downloadList.77004.DownloadFile.tmp/swissprojectionfr.pdf
  */
var init$7 = function init() {
  var phy0 = this.lat0;
  this.lambda0 = this.long0;
  var sinPhy0 = Math.sin(phy0);
  var semiMajorAxis = this.a;
  var invF = this.rf;
  var flattening = 1 / invF;
  var e2 = 2 * flattening - Math.pow(flattening, 2);
  var e = this.e = Math.sqrt(e2);
  this.R = this.k0 * semiMajorAxis * Math.sqrt(1 - e2) / (1 - e2 * Math.pow(sinPhy0, 2));
  this.alpha = Math.sqrt(1 + e2 / (1 - e2) * Math.pow(Math.cos(phy0), 4));
  this.b0 = Math.asin(sinPhy0 / this.alpha);
  var k1 = Math.log(Math.tan(Math.PI / 4 + this.b0 / 2));
  var k2 = Math.log(Math.tan(Math.PI / 4 + phy0 / 2));
  var k3 = Math.log((1 + e * sinPhy0) / (1 - e * sinPhy0));
  this.K = k1 - this.alpha * k2 + this.alpha * e / 2 * k3;
};

var forward$7 = function forward(p) {
  var Sa1 = Math.log(Math.tan(Math.PI / 4 - p.y / 2));
  var Sa2 = this.e / 2 * Math.log((1 + this.e * Math.sin(p.y)) / (1 - this.e * Math.sin(p.y)));
  var S = -this.alpha * (Sa1 + Sa2) + this.K;

  // spheric latitude
  var b = 2 * (Math.atan(Math.exp(S)) - Math.PI / 4);

  // spheric longitude
  var I = this.alpha * (p.x - this.lambda0);

  // psoeudo equatorial rotation
  var rotI = Math.atan(Math.sin(I) / (Math.sin(this.b0) * Math.tan(b) + Math.cos(this.b0) * Math.cos(I)));

  var rotB = Math.asin(Math.cos(this.b0) * Math.sin(b) - Math.sin(this.b0) * Math.cos(b) * Math.cos(I));

  p.y = this.R / 2 * Math.log((1 + Math.sin(rotB)) / (1 - Math.sin(rotB))) + this.y0;
  p.x = this.R * rotI + this.x0;
  return p;
};

var inverse$7 = function inverse(p) {
  var Y = p.x - this.x0;
  var X = p.y - this.y0;

  var rotI = Y / this.R;
  var rotB = 2 * (Math.atan(Math.exp(X / this.R)) - Math.PI / 4);

  var b = Math.asin(Math.cos(this.b0) * Math.sin(rotB) + Math.sin(this.b0) * Math.cos(rotB) * Math.cos(rotI));
  var I = Math.atan(Math.sin(rotI) / (Math.cos(this.b0) * Math.cos(rotI) - Math.sin(this.b0) * Math.tan(rotB)));

  var lambda = this.lambda0 + I / this.alpha;

  var S = 0;
  var phy = b;
  var prevPhy = -1000;
  var iteration = 0;
  while (Math.abs(phy - prevPhy) > 0.0000001) {
    if (++iteration > 20) {
      //...reportError("omercFwdInfinity");
      return;
    }
    //S = Math.log(Math.tan(Math.PI / 4 + phy / 2));
    S = 1 / this.alpha * (Math.log(Math.tan(Math.PI / 4 + b / 2)) - this.K) + this.e * Math.log(Math.tan(Math.PI / 4 + Math.asin(this.e * Math.sin(phy)) / 2));
    prevPhy = phy;
    phy = 2 * Math.atan(Math.exp(S)) - Math.PI / 2;
  }

  p.x = lambda;
  p.y = phy;
  return p;
};

var names$8 = ["somerc"];

var somerc = {
  init: init$7,
  forward: forward$7,
  inverse: inverse$7,
  names: names$8
};

var HALF_PI$7 = Math.PI / 2;
var FORTPI$2 = Math.PI / 4;
var EPSLN$4 = 1.0e-10;

/* Initialize the Oblique Mercator  projection
    ------------------------------------------*/
var init$8 = function init() {
  this.no_off = this.no_off || false;
  this.no_rot = this.no_rot || false;

  if (isNaN(this.k0)) {
    this.k0 = 1;
  }
  var sinlat = Math.sin(this.lat0);
  var coslat = Math.cos(this.lat0);
  var con = this.e * sinlat;

  this.bl = Math.sqrt(1 + this.es / (1 - this.es) * Math.pow(coslat, 4));
  this.al = this.a * this.bl * this.k0 * Math.sqrt(1 - this.es) / (1 - con * con);
  var t0 = tsfnz(this.e, this.lat0, sinlat);
  var dl = this.bl / coslat * Math.sqrt((1 - this.es) / (1 - con * con));
  if (dl * dl < 1) {
    dl = 1;
  }
  var fl;
  var gl;
  if (!isNaN(this.longc)) {
    //Central point and azimuth method

    if (this.lat0 >= 0) {
      fl = dl + Math.sqrt(dl * dl - 1);
    } else {
      fl = dl - Math.sqrt(dl * dl - 1);
    }
    this.el = fl * Math.pow(t0, this.bl);
    gl = 0.5 * (fl - 1 / fl);
    this.gamma0 = Math.asin(Math.sin(this.alpha) / dl);
    this.long0 = this.longc - Math.asin(gl * Math.tan(this.gamma0)) / this.bl;
  } else {
    //2 points method
    var t1 = tsfnz(this.e, this.lat1, Math.sin(this.lat1));
    var t2 = tsfnz(this.e, this.lat2, Math.sin(this.lat2));
    if (this.lat0 >= 0) {
      this.el = (dl + Math.sqrt(dl * dl - 1)) * Math.pow(t0, this.bl);
    } else {
      this.el = (dl - Math.sqrt(dl * dl - 1)) * Math.pow(t0, this.bl);
    }
    var hl = Math.pow(t1, this.bl);
    var ll = Math.pow(t2, this.bl);
    fl = this.el / hl;
    gl = 0.5 * (fl - 1 / fl);
    var jl = (this.el * this.el - ll * hl) / (this.el * this.el + ll * hl);
    var pl = (ll - hl) / (ll + hl);
    var dlon12 = adjust_lon(this.long1 - this.long2);
    this.long0 = 0.5 * (this.long1 + this.long2) - Math.atan(jl * Math.tan(0.5 * this.bl * dlon12) / pl) / this.bl;
    this.long0 = adjust_lon(this.long0);
    var dlon10 = adjust_lon(this.long1 - this.long0);
    this.gamma0 = Math.atan(Math.sin(this.bl * dlon10) / gl);
    this.alpha = Math.asin(dl * Math.sin(this.gamma0));
  }

  if (this.no_off) {
    this.uc = 0;
  } else {
    if (this.lat0 >= 0) {
      this.uc = this.al / this.bl * Math.atan2(Math.sqrt(dl * dl - 1), Math.cos(this.alpha));
    } else {
      this.uc = -1 * this.al / this.bl * Math.atan2(Math.sqrt(dl * dl - 1), Math.cos(this.alpha));
    }
  }
};

/* Oblique Mercator forward equations--mapping lat,long to x,y
    ----------------------------------------------------------*/
var forward$8 = function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var dlon = adjust_lon(lon - this.long0);
  var us, vs;
  var con;
  if (Math.abs(Math.abs(lat) - HALF_PI$7) <= EPSLN$4) {
    if (lat > 0) {
      con = -1;
    } else {
      con = 1;
    }
    vs = this.al / this.bl * Math.log(Math.tan(FORTPI$2 + con * this.gamma0 * 0.5));
    us = -1 * con * HALF_PI$7 * this.al / this.bl;
  } else {
    var t = tsfnz(this.e, lat, Math.sin(lat));
    var ql = this.el / Math.pow(t, this.bl);
    var sl = 0.5 * (ql - 1 / ql);
    var tl = 0.5 * (ql + 1 / ql);
    var vl = Math.sin(this.bl * dlon);
    var ul = (sl * Math.sin(this.gamma0) - vl * Math.cos(this.gamma0)) / tl;
    if (Math.abs(Math.abs(ul) - 1) <= EPSLN$4) {
      vs = Number.POSITIVE_INFINITY;
    } else {
      vs = 0.5 * this.al * Math.log((1 - ul) / (1 + ul)) / this.bl;
    }
    if (Math.abs(Math.cos(this.bl * dlon)) <= EPSLN$4) {
      us = this.al * this.bl * dlon;
    } else {
      us = this.al * Math.atan2(sl * Math.cos(this.gamma0) + vl * Math.sin(this.gamma0), Math.cos(this.bl * dlon)) / this.bl;
    }
  }

  if (this.no_rot) {
    p.x = this.x0 + us;
    p.y = this.y0 + vs;
  } else {

    us -= this.uc;
    p.x = this.x0 + vs * Math.cos(this.alpha) + us * Math.sin(this.alpha);
    p.y = this.y0 + us * Math.cos(this.alpha) - vs * Math.sin(this.alpha);
  }
  return p;
};

var inverse$8 = function inverse(p) {
  var us, vs;
  if (this.no_rot) {
    vs = p.y - this.y0;
    us = p.x - this.x0;
  } else {
    vs = (p.x - this.x0) * Math.cos(this.alpha) - (p.y - this.y0) * Math.sin(this.alpha);
    us = (p.y - this.y0) * Math.cos(this.alpha) + (p.x - this.x0) * Math.sin(this.alpha);
    us += this.uc;
  }
  var qp = Math.exp(-1 * this.bl * vs / this.al);
  var sp = 0.5 * (qp - 1 / qp);
  var tp = 0.5 * (qp + 1 / qp);
  var vp = Math.sin(this.bl * us / this.al);
  var up = (vp * Math.cos(this.gamma0) + sp * Math.sin(this.gamma0)) / tp;
  var ts = Math.pow(this.el / Math.sqrt((1 + up) / (1 - up)), 1 / this.bl);
  if (Math.abs(up - 1) < EPSLN$4) {
    p.x = this.long0;
    p.y = HALF_PI$7;
  } else if (Math.abs(up + 1) < EPSLN$4) {
    p.x = this.long0;
    p.y = -1 * HALF_PI$7;
  } else {
    p.y = phi2z(this.e, ts);
    p.x = adjust_lon(this.long0 - Math.atan2(sp * Math.cos(this.gamma0) - vp * Math.sin(this.gamma0), Math.cos(this.bl * us / this.al)) / this.bl);
  }
  return p;
};

var names$9 = ["Hotine_Oblique_Mercator", "Hotine Oblique Mercator", "Hotine_Oblique_Mercator_Azimuth_Natural_Origin", "Hotine_Oblique_Mercator_Azimuth_Center", "omerc"];

var omerc = {
  init: init$8,
  forward: forward$8,
  inverse: inverse$8,
  names: names$9
};

var EPSLN$5 = 1.0e-10;

var HALF_PI$8 = Math.PI / 2;

var init$9 = function init() {

  // array of:  r_maj,r_min,lat1,lat2,c_lon,c_lat,false_east,false_north
  //double c_lat;                   /* center latitude                      */
  //double c_lon;                   /* center longitude                     */
  //double lat1;                    /* first standard parallel              */
  //double lat2;                    /* second standard parallel             */
  //double r_maj;                   /* major axis                           */
  //double r_min;                   /* minor axis                           */
  //double false_east;              /* x offset in meters                   */
  //double false_north;             /* y offset in meters                   */

  if (!this.lat2) {
    this.lat2 = this.lat1;
  } //if lat2 is not defined
  if (!this.k0) {
    this.k0 = 1;
  }
  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < EPSLN$5) {
    return;
  }

  var temp = this.b / this.a;
  this.e = Math.sqrt(1 - temp * temp);

  var sin1 = Math.sin(this.lat1);
  var cos1 = Math.cos(this.lat1);
  var ms1 = msfnz(this.e, sin1, cos1);
  var ts1 = tsfnz(this.e, this.lat1, sin1);

  var sin2 = Math.sin(this.lat2);
  var cos2 = Math.cos(this.lat2);
  var ms2 = msfnz(this.e, sin2, cos2);
  var ts2 = tsfnz(this.e, this.lat2, sin2);

  var ts0 = tsfnz(this.e, this.lat0, Math.sin(this.lat0));

  if (Math.abs(this.lat1 - this.lat2) > EPSLN$5) {
    this.ns = Math.log(ms1 / ms2) / Math.log(ts1 / ts2);
  } else {
    this.ns = sin1;
  }
  if (isNaN(this.ns)) {
    this.ns = sin1;
  }
  this.f0 = ms1 / (this.ns * Math.pow(ts1, this.ns));
  this.rh = this.a * this.f0 * Math.pow(ts0, this.ns);
  if (!this.title) {
    this.title = "Lambert Conformal Conic";
  }
};

// Lambert Conformal conic forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
var forward$9 = function forward(p) {

  var lon = p.x;
  var lat = p.y;

  // singular cases :
  if (Math.abs(2 * Math.abs(lat) - Math.PI) <= EPSLN$5) {
    lat = sign(lat) * (HALF_PI$8 - 2 * EPSLN$5);
  }

  var con = Math.abs(Math.abs(lat) - HALF_PI$8);
  var ts, rh1;
  if (con > EPSLN$5) {
    ts = tsfnz(this.e, lat, Math.sin(lat));
    rh1 = this.a * this.f0 * Math.pow(ts, this.ns);
  } else {
    con = lat * this.ns;
    if (con <= 0) {
      return null;
    }
    rh1 = 0;
  }
  var theta = this.ns * adjust_lon(lon - this.long0);
  p.x = this.k0 * (rh1 * Math.sin(theta)) + this.x0;
  p.y = this.k0 * (this.rh - rh1 * Math.cos(theta)) + this.y0;

  return p;
};

// Lambert Conformal Conic inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
var inverse$9 = function inverse(p) {

  var rh1, con, ts;
  var lat, lon;
  var x = (p.x - this.x0) / this.k0;
  var y = this.rh - (p.y - this.y0) / this.k0;
  if (this.ns > 0) {
    rh1 = Math.sqrt(x * x + y * y);
    con = 1;
  } else {
    rh1 = -Math.sqrt(x * x + y * y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * x, con * y);
  }
  if (rh1 !== 0 || this.ns > 0) {
    con = 1 / this.ns;
    ts = Math.pow(rh1 / (this.a * this.f0), con);
    lat = phi2z(this.e, ts);
    if (lat === -9999) {
      return null;
    }
  } else {
    lat = -HALF_PI$8;
  }
  lon = adjust_lon(theta / this.ns + this.long0);

  p.x = lon;
  p.y = lat;
  return p;
};

var names$10 = ["Lambert Tangential Conformal Conic Projection", "Lambert_Conformal_Conic", "Lambert_Conformal_Conic_2SP", "lcc"];

var lcc = {
  init: init$9,
  forward: forward$9,
  inverse: inverse$9,
  names: names$10
};

var init$10 = function init() {
  this.a = 6377397.155;
  this.es = 0.006674372230614;
  this.e = Math.sqrt(this.es);
  if (!this.lat0) {
    this.lat0 = 0.863937979737193;
  }
  if (!this.long0) {
    this.long0 = 0.7417649320975901 - 0.308341501185665;
  }
  /* if scale not set default to 0.9999 */
  if (!this.k0) {
    this.k0 = 0.9999;
  }
  this.s45 = 0.785398163397448; /* 45 */
  this.s90 = 2 * this.s45;
  this.fi0 = this.lat0;
  this.e2 = this.es;
  this.e = Math.sqrt(this.e2);
  this.alfa = Math.sqrt(1 + this.e2 * Math.pow(Math.cos(this.fi0), 4) / (1 - this.e2));
  this.uq = 1.04216856380474;
  this.u0 = Math.asin(Math.sin(this.fi0) / this.alfa);
  this.g = Math.pow((1 + this.e * Math.sin(this.fi0)) / (1 - this.e * Math.sin(this.fi0)), this.alfa * this.e / 2);
  this.k = Math.tan(this.u0 / 2 + this.s45) / Math.pow(Math.tan(this.fi0 / 2 + this.s45), this.alfa) * this.g;
  this.k1 = this.k0;
  this.n0 = this.a * Math.sqrt(1 - this.e2) / (1 - this.e2 * Math.pow(Math.sin(this.fi0), 2));
  this.s0 = 1.37008346281555;
  this.n = Math.sin(this.s0);
  this.ro0 = this.k1 * this.n0 / Math.tan(this.s0);
  this.ad = this.s90 - this.uq;
};

/* ellipsoid */
/* calculate xy from lat/lon */
/* Constants, identical to inverse transform function */
var forward$10 = function forward(p) {
  var gfi, u, deltav, s, d, eps, ro;
  var lon = p.x;
  var lat = p.y;
  var delta_lon = adjust_lon(lon - this.long0);
  /* Transformation */
  gfi = Math.pow((1 + this.e * Math.sin(lat)) / (1 - this.e * Math.sin(lat)), this.alfa * this.e / 2);
  u = 2 * (Math.atan(this.k * Math.pow(Math.tan(lat / 2 + this.s45), this.alfa) / gfi) - this.s45);
  deltav = -delta_lon * this.alfa;
  s = Math.asin(Math.cos(this.ad) * Math.sin(u) + Math.sin(this.ad) * Math.cos(u) * Math.cos(deltav));
  d = Math.asin(Math.cos(u) * Math.sin(deltav) / Math.cos(s));
  eps = this.n * d;
  ro = this.ro0 * Math.pow(Math.tan(this.s0 / 2 + this.s45), this.n) / Math.pow(Math.tan(s / 2 + this.s45), this.n);
  p.y = ro * Math.cos(eps) / 1;
  p.x = ro * Math.sin(eps) / 1;

  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  return p;
};

/* calculate lat/lon from xy */
var inverse$10 = function inverse(p) {
  var u, deltav, s, d, eps, ro, fi1;
  var ok;

  /* Transformation */
  /* revert y, x*/
  var tmp = p.x;
  p.x = p.y;
  p.y = tmp;
  if (!this.czech) {
    p.y *= -1;
    p.x *= -1;
  }
  ro = Math.sqrt(p.x * p.x + p.y * p.y);
  eps = Math.atan2(p.y, p.x);
  d = eps / Math.sin(this.s0);
  s = 2 * (Math.atan(Math.pow(this.ro0 / ro, 1 / this.n) * Math.tan(this.s0 / 2 + this.s45)) - this.s45);
  u = Math.asin(Math.cos(this.ad) * Math.sin(s) - Math.sin(this.ad) * Math.cos(s) * Math.cos(d));
  deltav = Math.asin(Math.cos(s) * Math.sin(d) / Math.cos(u));
  p.x = this.long0 - deltav / this.alfa;
  fi1 = u;
  ok = 0;
  var iter = 0;
  do {
    p.y = 2 * (Math.atan(Math.pow(this.k, -1 / this.alfa) * Math.pow(Math.tan(u / 2 + this.s45), 1 / this.alfa) * Math.pow((1 + this.e * Math.sin(fi1)) / (1 - this.e * Math.sin(fi1)), this.e / 2)) - this.s45);
    if (Math.abs(fi1 - p.y) < 0.0000000001) {
      ok = 1;
    }
    fi1 = p.y;
    iter += 1;
  } while (ok === 0 && iter < 15);
  if (iter >= 15) {
    return null;
  }

  return p;
};
var names$11 = ["Krovak", "krovak"];

var krovak = {
  init: init$10,
  forward: forward$10,
  inverse: inverse$10,
  names: names$11
};

var gN = function gN(a, e, sinphi) {
  var temp = e * sinphi;
  return a / Math.sqrt(1 - temp * temp);
};

var HALF_PI$10 = Math.PI / 2;

var adjust_lat = function adjust_lat(x) {
  return Math.abs(x) < HALF_PI$10 ? x : x - sign(x) * Math.PI;
};

var imlfn = function imlfn(ml, e0, e1, e2, e3) {
  var phi;
  var dphi;

  phi = ml / e0;
  for (var i = 0; i < 15; i++) {
    dphi = (ml - (e0 * phi - e1 * Math.sin(2 * phi) + e2 * Math.sin(4 * phi) - e3 * Math.sin(6 * phi))) / (e0 - 2 * e1 * Math.cos(2 * phi) + 4 * e2 * Math.cos(4 * phi) - 6 * e3 * Math.cos(6 * phi));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //..reportError("IMLFN-CONV:Latitude failed to converge after 15 iterations");
  return NaN;
};

var HALF_PI$9 = Math.PI / 2;
var EPSLN$6 = 1.0e-10;
var init$11 = function init() {
  if (!this.sphere) {
    this.e0 = e0fn(this.es);
    this.e1 = e1fn(this.es);
    this.e2 = e2fn(this.es);
    this.e3 = e3fn(this.es);
    this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
  }
};

/* Cassini forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
var forward$11 = function forward(p) {

  /* Forward equations
      -----------------*/
  var x, y;
  var lam = p.x;
  var phi = p.y;
  lam = adjust_lon(lam - this.long0);

  if (this.sphere) {
    x = this.a * Math.asin(Math.cos(phi) * Math.sin(lam));
    y = this.a * (Math.atan2(Math.tan(phi), Math.cos(lam)) - this.lat0);
  } else {
    //ellipsoid
    var sinphi = Math.sin(phi);
    var cosphi = Math.cos(phi);
    var nl = gN(this.a, this.e, sinphi);
    var tl = Math.tan(phi) * Math.tan(phi);
    var al = lam * Math.cos(phi);
    var asq = al * al;
    var cl = this.es * cosphi * cosphi / (1 - this.es);
    var ml = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, phi);

    x = nl * al * (1 - asq * tl * (1 / 6 - (8 - tl + 8 * cl) * asq / 120));
    y = ml - this.ml0 + nl * sinphi / cosphi * asq * (0.5 + (5 - tl + 6 * cl) * asq / 24);
  }

  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
};

/* Inverse equations
  -----------------*/
var inverse$11 = function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var phi, lam;

  if (this.sphere) {
    var dd = y + this.lat0;
    phi = Math.asin(Math.sin(dd) * Math.cos(x));
    lam = Math.atan2(Math.tan(x), Math.cos(dd));
  } else {
    /* ellipsoid */
    var ml1 = this.ml0 / this.a + y;
    var phi1 = imlfn(ml1, this.e0, this.e1, this.e2, this.e3);
    if (Math.abs(Math.abs(phi1) - HALF_PI$9) <= EPSLN$6) {
      p.x = this.long0;
      p.y = HALF_PI$9;
      if (y < 0) {
        p.y *= -1;
      }
      return p;
    }
    var nl1 = gN(this.a, this.e, Math.sin(phi1));

    var rl1 = nl1 * nl1 * nl1 / this.a / this.a * (1 - this.es);
    var tl1 = Math.pow(Math.tan(phi1), 2);
    var dl = x * this.a / nl1;
    var dsq = dl * dl;
    phi = phi1 - nl1 * Math.tan(phi1) / rl1 * dl * dl * (0.5 - (1 + 3 * tl1) * dl * dl / 24);
    lam = dl * (1 - dsq * (tl1 / 3 + (1 + 3 * tl1) * tl1 * dsq / 15)) / Math.cos(phi1);
  }

  p.x = adjust_lon(lam + this.long0);
  p.y = adjust_lat(phi);
  return p;
};
var names$12 = ["Cassini", "Cassini_Soldner", "cass"];

var cass = {
  init: init$11,
  forward: forward$11,
  inverse: inverse$11,
  names: names$12
};

var qsfnz = function qsfnz(eccent, sinphi) {
  var con;
  if (eccent > 1.0e-7) {
    con = eccent * sinphi;
    return (1 - eccent * eccent) * (sinphi / (1 - con * con) - 0.5 / eccent * Math.log((1 - con) / (1 + con)));
  } else {
    return 2 * sinphi;
  }
};

var HALF_PI$11 = Math.PI / 2;
var FORTPI$3 = Math.PI / 4;
var EPSLN$7 = 1.0e-10;

/*
  reference
    "New Equal-Area Map Projections for Noncircular Regions", John P. Snyder,
    The American Cartographer, Vol 15, No. 4, October 1988, pp. 341-355.
  */

var S_POLE = 1;
var N_POLE = 2;
var EQUIT = 3;
var OBLIQ = 4;

/* Initialize the Lambert Azimuthal Equal Area projection
  ------------------------------------------------------*/
var init$12 = function init() {
  var t = Math.abs(this.lat0);
  if (Math.abs(t - HALF_PI$11) < EPSLN$7) {
    this.mode = this.lat0 < 0 ? this.S_POLE : this.N_POLE;
  } else if (Math.abs(t) < EPSLN$7) {
    this.mode = this.EQUIT;
  } else {
    this.mode = this.OBLIQ;
  }
  if (this.es > 0) {
    var sinphi;

    this.qp = qsfnz(this.e, 1);
    this.mmf = 0.5 / (1 - this.es);
    this.apa = this.authset(this.es);
    switch (this.mode) {
      case this.N_POLE:
        this.dd = 1;
        break;
      case this.S_POLE:
        this.dd = 1;
        break;
      case this.EQUIT:
        this.rq = Math.sqrt(0.5 * this.qp);
        this.dd = 1 / this.rq;
        this.xmf = 1;
        this.ymf = 0.5 * this.qp;
        break;
      case this.OBLIQ:
        this.rq = Math.sqrt(0.5 * this.qp);
        sinphi = Math.sin(this.lat0);
        this.sinb1 = qsfnz(this.e, sinphi) / this.qp;
        this.cosb1 = Math.sqrt(1 - this.sinb1 * this.sinb1);
        this.dd = Math.cos(this.lat0) / (Math.sqrt(1 - this.es * sinphi * sinphi) * this.rq * this.cosb1);
        this.ymf = (this.xmf = this.rq) / this.dd;
        this.xmf *= this.dd;
        break;
    }
  } else {
    if (this.mode === this.OBLIQ) {
      this.sinph0 = Math.sin(this.lat0);
      this.cosph0 = Math.cos(this.lat0);
    }
  }
};

/* Lambert Azimuthal Equal Area forward equations--mapping lat,long to x,y
  -----------------------------------------------------------------------*/
var forward$12 = function forward(p) {

  /* Forward equations
      -----------------*/
  var x, y, coslam, sinlam, sinphi, q, sinb, cosb, b, cosphi;
  var lam = p.x;
  var phi = p.y;

  lam = adjust_lon(lam - this.long0);

  if (this.sphere) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    coslam = Math.cos(lam);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      y = this.mode === this.EQUIT ? 1 + cosphi * coslam : 1 + this.sinph0 * sinphi + this.cosph0 * cosphi * coslam;
      if (y <= EPSLN$7) {
        return null;
      }
      y = Math.sqrt(2 / y);
      x = y * cosphi * Math.sin(lam);
      y *= this.mode === this.EQUIT ? sinphi : this.cosph0 * sinphi - this.sinph0 * cosphi * coslam;
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        coslam = -coslam;
      }
      if (Math.abs(phi + this.phi0) < EPSLN$7) {
        return null;
      }
      y = FORTPI$3 - phi * 0.5;
      y = 2 * (this.mode === this.S_POLE ? Math.cos(y) : Math.sin(y));
      x = y * Math.sin(lam);
      y *= coslam;
    }
  } else {
    sinb = 0;
    cosb = 0;
    b = 0;
    coslam = Math.cos(lam);
    sinlam = Math.sin(lam);
    sinphi = Math.sin(phi);
    q = qsfnz(this.e, sinphi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinb = q / this.qp;
      cosb = Math.sqrt(1 - sinb * sinb);
    }
    switch (this.mode) {
      case this.OBLIQ:
        b = 1 + this.sinb1 * sinb + this.cosb1 * cosb * coslam;
        break;
      case this.EQUIT:
        b = 1 + cosb * coslam;
        break;
      case this.N_POLE:
        b = HALF_PI$11 + phi;
        q = this.qp - q;
        break;
      case this.S_POLE:
        b = phi - HALF_PI$11;
        q = this.qp + q;
        break;
    }
    if (Math.abs(b) < EPSLN$7) {
      return null;
    }
    switch (this.mode) {
      case this.OBLIQ:
      case this.EQUIT:
        b = Math.sqrt(2 / b);
        if (this.mode === this.OBLIQ) {
          y = this.ymf * b * (this.cosb1 * sinb - this.sinb1 * cosb * coslam);
        } else {
          y = (b = Math.sqrt(2 / (1 + cosb * coslam))) * sinb * this.ymf;
        }
        x = this.xmf * b * cosb * sinlam;
        break;
      case this.N_POLE:
      case this.S_POLE:
        if (q >= 0) {
          x = (b = Math.sqrt(q)) * sinlam;
          y = coslam * (this.mode === this.S_POLE ? b : -b);
        } else {
          x = y = 0;
        }
        break;
    }
  }

  p.x = this.a * x + this.x0;
  p.y = this.a * y + this.y0;
  return p;
};

/* Inverse equations
  -----------------*/
var inverse$12 = function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var x = p.x / this.a;
  var y = p.y / this.a;
  var lam, phi, cCe, sCe, q, rho, ab;

  if (this.sphere) {
    var cosz = 0,
        rh,
        sinz = 0;

    rh = Math.sqrt(x * x + y * y);
    phi = rh * 0.5;
    if (phi > 1) {
      return null;
    }
    phi = 2 * Math.asin(phi);
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      sinz = Math.sin(phi);
      cosz = Math.cos(phi);
    }
    switch (this.mode) {
      case this.EQUIT:
        phi = Math.abs(rh) <= EPSLN$7 ? 0 : Math.asin(y * sinz / rh);
        x *= sinz;
        y = cosz * rh;
        break;
      case this.OBLIQ:
        phi = Math.abs(rh) <= EPSLN$7 ? this.phi0 : Math.asin(cosz * this.sinph0 + y * sinz * this.cosph0 / rh);
        x *= sinz * this.cosph0;
        y = (cosz - Math.sin(phi) * this.sinph0) * rh;
        break;
      case this.N_POLE:
        y = -y;
        phi = HALF_PI$11 - phi;
        break;
      case this.S_POLE:
        phi -= HALF_PI$11;
        break;
    }
    lam = y === 0 && (this.mode === this.EQUIT || this.mode === this.OBLIQ) ? 0 : Math.atan2(x, y);
  } else {
    ab = 0;
    if (this.mode === this.OBLIQ || this.mode === this.EQUIT) {
      x /= this.dd;
      y *= this.dd;
      rho = Math.sqrt(x * x + y * y);
      if (rho < EPSLN$7) {
        p.x = 0;
        p.y = this.phi0;
        return p;
      }
      sCe = 2 * Math.asin(0.5 * rho / this.rq);
      cCe = Math.cos(sCe);
      x *= sCe = Math.sin(sCe);
      if (this.mode === this.OBLIQ) {
        ab = cCe * this.sinb1 + y * sCe * this.cosb1 / rho;
        q = this.qp * ab;
        y = rho * this.cosb1 * cCe - y * this.sinb1 * sCe;
      } else {
        ab = y * sCe / rho;
        q = this.qp * ab;
        y = rho * cCe;
      }
    } else if (this.mode === this.N_POLE || this.mode === this.S_POLE) {
      if (this.mode === this.N_POLE) {
        y = -y;
      }
      q = x * x + y * y;
      if (!q) {
        p.x = 0;
        p.y = this.phi0;
        return p;
      }
      ab = 1 - q / this.qp;
      if (this.mode === this.S_POLE) {
        ab = -ab;
      }
    }
    lam = Math.atan2(x, y);
    phi = this.authlat(Math.asin(ab), this.apa);
  }

  p.x = adjust_lon(this.long0 + lam);
  p.y = phi;
  return p;
};

/* determine latitude from authalic latitude */
var P00 = 0.33333333333333333333;
var P01 = 0.17222222222222222222;
var P02 = 0.10257936507936507936;
var P10 = 0.06388888888888888888;
var P11 = 0.06640211640211640211;
var P20 = 0.01641501294219154443;

var authset = function authset(es) {
  var t;
  var APA = [];
  APA[0] = es * this.P00;
  t = es * es;
  APA[0] += t * this.P01;
  APA[1] = t * this.P10;
  t *= es;
  APA[0] += t * this.P02;
  APA[1] += t * this.P11;
  APA[2] = t * this.P20;
  return APA;
};

var authlat = function authlat(beta, APA) {
  var t = beta + beta;
  return beta + APA[0] * Math.sin(t) + APA[1] * Math.sin(t + t) + APA[2] * Math.sin(t + t + t);
};
var names$13 = ["Lambert Azimuthal Equal Area", "Lambert_Azimuthal_Equal_Area", "laea"];

var laea = {
  S_POLE: S_POLE,
  N_POLE: N_POLE,
  EQUIT: EQUIT,
  OBLIQ: OBLIQ,
  init: init$12,
  forward: forward$12,
  inverse: inverse$12,
  P00: P00,
  P01: P01,
  P02: P02,
  P10: P10,
  P11: P11,
  P20: P20,
  authset: authset,
  authlat: authlat,
  names: names$13
};

var EPSLN$8 = 1.0e-10;

var init$13 = function init() {

  if (Math.abs(this.lat1 + this.lat2) < EPSLN$8) {
    return;
  }
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e3 = Math.sqrt(this.es);

  this.sin_po = Math.sin(this.lat1);
  this.cos_po = Math.cos(this.lat1);
  this.t1 = this.sin_po;
  this.con = this.sin_po;
  this.ms1 = msfnz(this.e3, this.sin_po, this.cos_po);
  this.qs1 = qsfnz(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat2);
  this.cos_po = Math.cos(this.lat2);
  this.t2 = this.sin_po;
  this.ms2 = msfnz(this.e3, this.sin_po, this.cos_po);
  this.qs2 = qsfnz(this.e3, this.sin_po, this.cos_po);

  this.sin_po = Math.sin(this.lat0);
  this.cos_po = Math.cos(this.lat0);
  this.t3 = this.sin_po;
  this.qs0 = qsfnz(this.e3, this.sin_po, this.cos_po);

  if (Math.abs(this.lat1 - this.lat2) > EPSLN$8) {
    this.ns0 = (this.ms1 * this.ms1 - this.ms2 * this.ms2) / (this.qs2 - this.qs1);
  } else {
    this.ns0 = this.con;
  }
  this.c = this.ms1 * this.ms1 + this.ns0 * this.qs1;
  this.rh = this.a * Math.sqrt(this.c - this.ns0 * this.qs0) / this.ns0;
};

/* Albers Conical Equal Area forward equations--mapping lat,long to x,y
  -------------------------------------------------------------------*/
var forward$13 = function forward(p) {

  var lon = p.x;
  var lat = p.y;

  this.sin_phi = Math.sin(lat);
  this.cos_phi = Math.cos(lat);

  var qs = qsfnz(this.e3, this.sin_phi, this.cos_phi);
  var rh1 = this.a * Math.sqrt(this.c - this.ns0 * qs) / this.ns0;
  var theta = this.ns0 * adjust_lon(lon - this.long0);
  var x = rh1 * Math.sin(theta) + this.x0;
  var y = this.rh - rh1 * Math.cos(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
};

var inverse$13 = function inverse(p) {
  var rh1, qs, con, theta, lon, lat;

  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  if (this.ns0 >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  } else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }
  con = rh1 * this.ns0 / this.a;
  if (this.sphere) {
    lat = Math.asin((this.c - con * con) / (2 * this.ns0));
  } else {
    qs = (this.c - con * con) / this.ns0;
    lat = this.phi1z(this.e3, qs);
  }

  lon = adjust_lon(theta / this.ns0 + this.long0);
  p.x = lon;
  p.y = lat;
  return p;
};

/* Function to compute phi1, the latitude for the inverse of the
   Albers Conical Equal-Area projection.
-------------------------------------------*/
var phi1z = function phi1z(eccent, qs) {
  var sinphi, cosphi, con, com, dphi;
  var phi = asinz(0.5 * qs);
  if (eccent < EPSLN$8) {
    return phi;
  }

  var eccnts = eccent * eccent;
  for (var i = 1; i <= 25; i++) {
    sinphi = Math.sin(phi);
    cosphi = Math.cos(phi);
    con = eccent * sinphi;
    com = 1 - con * con;
    dphi = 0.5 * com * com / cosphi * (qs / (1 - eccnts) - sinphi / com + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi = phi + dphi;
    if (Math.abs(dphi) <= 1e-7) {
      return phi;
    }
  }
  return null;
};
var names$14 = ["Albers_Conic_Equal_Area", "Albers", "aea"];

var aea = {
  init: init$13,
  forward: forward$13,
  inverse: inverse$13,
  phi1z: phi1z,
  names: names$14
};

var EPSLN$9 = 1.0e-10;

/*
  reference:
    Wolfram Mathworld "Gnomonic Projection"
    http://mathworld.wolfram.com/GnomonicProjection.html
    Accessed: 12th November 2009
  */
var init$14 = function init() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.sin_p14 = Math.sin(this.lat0);
  this.cos_p14 = Math.cos(this.lat0);
  // Approximation for projecting points to the horizon (infinity)
  this.infinity_dist = 1000 * this.a;
  this.rc = 1;
};

/* Gnomonic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
var forward$14 = function forward(p) {
  var sinphi, cosphi; /* sin and cos value        */
  var dlon; /* delta longitude value      */
  var coslon; /* cos of longitude        */
  var ksp; /* scale factor          */
  var g;
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  dlon = adjust_lon(lon - this.long0);

  sinphi = Math.sin(lat);
  cosphi = Math.cos(lat);

  coslon = Math.cos(dlon);
  g = this.sin_p14 * sinphi + this.cos_p14 * cosphi * coslon;
  ksp = 1;
  if (g > 0 || Math.abs(g) <= EPSLN$9) {
    x = this.x0 + this.a * ksp * cosphi * Math.sin(dlon) / g;
    y = this.y0 + this.a * ksp * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon) / g;
  } else {

    // Point is in the opposing hemisphere and is unprojectable
    // We still need to return a reasonable point, so we project 
    // to infinity, on a bearing 
    // equivalent to the northern hemisphere equivalent
    // This is a reasonable approximation for short shapes and lines that 
    // straddle the horizon.

    x = this.x0 + this.infinity_dist * cosphi * Math.sin(dlon);
    y = this.y0 + this.infinity_dist * (this.cos_p14 * sinphi - this.sin_p14 * cosphi * coslon);
  }
  p.x = x;
  p.y = y;
  return p;
};

var inverse$14 = function inverse(p) {
  var rh; /* Rho */
  var sinc, cosc;
  var c;
  var lon, lat;

  /* Inverse equations
      -----------------*/
  p.x = (p.x - this.x0) / this.a;
  p.y = (p.y - this.y0) / this.a;

  p.x /= this.k0;
  p.y /= this.k0;

  if (rh = Math.sqrt(p.x * p.x + p.y * p.y)) {
    c = Math.atan2(rh, this.rc);
    sinc = Math.sin(c);
    cosc = Math.cos(c);

    lat = asinz(cosc * this.sin_p14 + p.y * sinc * this.cos_p14 / rh);
    lon = Math.atan2(p.x * sinc, rh * this.cos_p14 * cosc - p.y * this.sin_p14 * sinc);
    lon = adjust_lon(this.long0 + lon);
  } else {
    lat = this.phic0;
    lon = 0;
  }

  p.x = lon;
  p.y = lat;
  return p;
};
var names$15 = ["gnom"];

var gnom = {
  init: init$14,
  forward: forward$14,
  inverse: inverse$14,
  names: names$15
};

var HALF_PI$12 = Math.PI / 2;

var iqsfnz = function iqsfnz(eccent, q) {
  var temp = 1 - (1 - eccent * eccent) / (2 * eccent) * Math.log((1 - eccent) / (1 + eccent));
  if (Math.abs(Math.abs(q) - temp) < 1.0E-6) {
    if (q < 0) {
      return -1 * HALF_PI$12;
    } else {
      return HALF_PI$12;
    }
  }
  //var phi = 0.5* q/(1-eccent*eccent);
  var phi = Math.asin(0.5 * q);
  var dphi;
  var sin_phi;
  var cos_phi;
  var con;
  for (var i = 0; i < 30; i++) {
    sin_phi = Math.sin(phi);
    cos_phi = Math.cos(phi);
    con = eccent * sin_phi;
    dphi = Math.pow(1 - con * con, 2) / (2 * cos_phi) * (q / (1 - eccent * eccent) - sin_phi / (1 - con * con) + 0.5 / eccent * Math.log((1 - con) / (1 + con)));
    phi += dphi;
    if (Math.abs(dphi) <= 0.0000000001) {
      return phi;
    }
  }

  //console.log("IQSFN-CONV:Latitude failed to converge after 30 iterations");
  return NaN;
};

var init$15 = function init() {
  //no-op
  if (!this.sphere) {
    this.k0 = msfnz(this.e, Math.sin(this.lat_ts), Math.cos(this.lat_ts));
  }
};

/* Cylindrical Equal Area forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
var forward$15 = function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y;
  /* Forward equations
      -----------------*/
  var dlon = adjust_lon(lon - this.long0);
  if (this.sphere) {
    x = this.x0 + this.a * dlon * Math.cos(this.lat_ts);
    y = this.y0 + this.a * Math.sin(lat) / Math.cos(this.lat_ts);
  } else {
    var qs = qsfnz(this.e, Math.sin(lat));
    x = this.x0 + this.a * this.k0 * dlon;
    y = this.y0 + this.a * qs * 0.5 / this.k0;
  }

  p.x = x;
  p.y = y;
  return p;
};

/* Cylindrical Equal Area inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
var inverse$15 = function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var lon, lat;

  if (this.sphere) {
    lon = adjust_lon(this.long0 + p.x / this.a / Math.cos(this.lat_ts));
    lat = Math.asin(p.y / this.a * Math.cos(this.lat_ts));
  } else {
    lat = iqsfnz(this.e, 2 * p.y * this.k0 / this.a);
    lon = adjust_lon(this.long0 + p.x / (this.a * this.k0));
  }

  p.x = lon;
  p.y = lat;
  return p;
};
var names$16 = ["cea"];

var cea = {
  init: init$15,
  forward: forward$15,
  inverse: inverse$15,
  names: names$16
};

var init$16 = function init() {

  this.x0 = this.x0 || 0;
  this.y0 = this.y0 || 0;
  this.lat0 = this.lat0 || 0;
  this.long0 = this.long0 || 0;
  this.lat_ts = this.lat_ts || 0;
  this.title = this.title || "Equidistant Cylindrical (Plate Carre)";

  this.rc = Math.cos(this.lat_ts);
};

// forward equations--mapping lat,long to x,y
// -----------------------------------------------------------------
var forward$16 = function forward(p) {

  var lon = p.x;
  var lat = p.y;

  var dlon = adjust_lon(lon - this.long0);
  var dlat = adjust_lat(lat - this.lat0);
  p.x = this.x0 + this.a * dlon * this.rc;
  p.y = this.y0 + this.a * dlat;
  return p;
};

// inverse equations--mapping x,y to lat/long
// -----------------------------------------------------------------
var inverse$16 = function inverse(p) {

  var x = p.x;
  var y = p.y;

  p.x = adjust_lon(this.long0 + (x - this.x0) / (this.a * this.rc));
  p.y = adjust_lat(this.lat0 + (y - this.y0) / this.a);
  return p;
};
var names$17 = ["Equirectangular", "Equidistant_Cylindrical", "eqc"];

var eqc = {
  init: init$16,
  forward: forward$16,
  inverse: inverse$16,
  names: names$17
};

var EPSLN$10 = 1.0e-10;

var MAX_ITER$1 = 20;
var init$17 = function init() {
  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2); // devait etre dans tmerc.js mais n y est pas donc je commente sinon retour de valeurs nulles
  this.e = Math.sqrt(this.es);
  this.e0 = e0fn(this.es);
  this.e1 = e1fn(this.es);
  this.e2 = e2fn(this.es);
  this.e3 = e3fn(this.es);
  this.ml0 = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0); //si que des zeros le calcul ne se fait pas
};

/* Polyconic forward equations--mapping lat,long to x,y
    ---------------------------------------------------*/
var forward$17 = function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var x, y, el;
  var dlon = adjust_lon(lon - this.long0);
  el = dlon * Math.sin(lat);
  if (this.sphere) {
    if (Math.abs(lat) <= EPSLN$10) {
      x = this.a * dlon;
      y = -1 * this.a * this.lat0;
    } else {
      x = this.a * Math.sin(el) / Math.tan(lat);
      y = this.a * (adjust_lat(lat - this.lat0) + (1 - Math.cos(el)) / Math.tan(lat));
    }
  } else {
    if (Math.abs(lat) <= EPSLN$10) {
      x = this.a * dlon;
      y = -1 * this.ml0;
    } else {
      var nl = gN(this.a, this.e, Math.sin(lat)) / Math.tan(lat);
      x = nl * Math.sin(el);
      y = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, lat) - this.ml0 + nl * (1 - Math.cos(el));
    }
  }
  p.x = x + this.x0;
  p.y = y + this.y0;
  return p;
};

/* Inverse equations
  -----------------*/
var inverse$17 = function inverse(p) {
  var lon, lat, x, y, i;
  var al, bl;
  var phi, dphi;
  x = p.x - this.x0;
  y = p.y - this.y0;

  if (this.sphere) {
    if (Math.abs(y + this.a * this.lat0) <= EPSLN$10) {
      lon = adjust_lon(x / this.a + this.long0);
      lat = 0;
    } else {
      al = this.lat0 + y / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var tanphi;
      for (i = MAX_ITER$1; i; --i) {
        tanphi = Math.tan(phi);
        dphi = -1 * (al * (phi * tanphi + 1) - phi - 0.5 * (phi * phi + bl) * tanphi) / ((phi - al) / tanphi - 1);
        phi += dphi;
        if (Math.abs(dphi) <= EPSLN$10) {
          lat = phi;
          break;
        }
      }
      lon = adjust_lon(this.long0 + Math.asin(x * Math.tan(phi) / this.a) / Math.sin(lat));
    }
  } else {
    if (Math.abs(y + this.ml0) <= EPSLN$10) {
      lat = 0;
      lon = adjust_lon(this.long0 + x / this.a);
    } else {

      al = (this.ml0 + y) / this.a;
      bl = x * x / this.a / this.a + al * al;
      phi = al;
      var cl, mln, mlnp, ma;
      var con;
      for (i = MAX_ITER$1; i; --i) {
        con = this.e * Math.sin(phi);
        cl = Math.sqrt(1 - con * con) * Math.tan(phi);
        mln = this.a * mlfn(this.e0, this.e1, this.e2, this.e3, phi);
        mlnp = this.e0 - 2 * this.e1 * Math.cos(2 * phi) + 4 * this.e2 * Math.cos(4 * phi) - 6 * this.e3 * Math.cos(6 * phi);
        ma = mln / this.a;
        dphi = (al * (cl * ma + 1) - ma - 0.5 * cl * (ma * ma + bl)) / (this.es * Math.sin(2 * phi) * (ma * ma + bl - 2 * al * ma) / (4 * cl) + (al - ma) * (cl * mlnp - 2 / Math.sin(2 * phi)) - mlnp);
        phi -= dphi;
        if (Math.abs(dphi) <= EPSLN$10) {
          lat = phi;
          break;
        }
      }

      //lat=phi4z(this.e,this.e0,this.e1,this.e2,this.e3,al,bl,0,0);
      cl = Math.sqrt(1 - this.es * Math.pow(Math.sin(lat), 2)) * Math.tan(lat);
      lon = adjust_lon(this.long0 + Math.asin(x * cl / this.a) / Math.sin(lat));
    }
  }

  p.x = lon;
  p.y = lat;
  return p;
};
var names$18 = ["Polyconic", "poly"];

var poly = {
  init: init$17,
  forward: forward$17,
  inverse: inverse$17,
  names: names$18
};

var SEC_TO_RAD$1 = 4.84813681109535993589914102357e-6;
/*
  reference
    Department of Land and Survey Technical Circular 1973/32
      http://www.linz.govt.nz/docs/miscellaneous/nz-map-definition.pdf
    OSG Technical Report 4.1
      http://www.linz.govt.nz/docs/miscellaneous/nzmg.pdf
  */

/**
 * iterations: Number of iterations to refine inverse transform.
 *     0 -> km accuracy
 *     1 -> m accuracy -- suitable for most mapping applications
 *     2 -> mm accuracy
 */
var iterations = 1;

var init$18 = function init() {
  this.A = [];
  this.A[1] = 0.6399175073;
  this.A[2] = -0.1358797613;
  this.A[3] = 0.063294409;
  this.A[4] = -0.02526853;
  this.A[5] = 0.0117879;
  this.A[6] = -0.0055161;
  this.A[7] = 0.0026906;
  this.A[8] = -0.001333;
  this.A[9] = 0.00067;
  this.A[10] = -0.00034;

  this.B_re = [];
  this.B_im = [];
  this.B_re[1] = 0.7557853228;
  this.B_im[1] = 0;
  this.B_re[2] = 0.249204646;
  this.B_im[2] = 0.003371507;
  this.B_re[3] = -0.001541739;
  this.B_im[3] = 0.041058560;
  this.B_re[4] = -0.10162907;
  this.B_im[4] = 0.01727609;
  this.B_re[5] = -0.26623489;
  this.B_im[5] = -0.36249218;
  this.B_re[6] = -0.6870983;
  this.B_im[6] = -1.1651967;

  this.C_re = [];
  this.C_im = [];
  this.C_re[1] = 1.3231270439;
  this.C_im[1] = 0;
  this.C_re[2] = -0.577245789;
  this.C_im[2] = -0.007809598;
  this.C_re[3] = 0.508307513;
  this.C_im[3] = -0.112208952;
  this.C_re[4] = -0.15094762;
  this.C_im[4] = 0.18200602;
  this.C_re[5] = 1.01418179;
  this.C_im[5] = 1.64497696;
  this.C_re[6] = 1.9660549;
  this.C_im[6] = 2.5127645;

  this.D = [];
  this.D[1] = 1.5627014243;
  this.D[2] = 0.5185406398;
  this.D[3] = -0.03333098;
  this.D[4] = -0.1052906;
  this.D[5] = -0.0368594;
  this.D[6] = 0.007317;
  this.D[7] = 0.01220;
  this.D[8] = 0.00394;
  this.D[9] = -0.0013;
};

/**
    New Zealand Map Grid Forward  - long/lat to x/y
    long/lat in radians
  */
var forward$18 = function forward(p) {
  var n;
  var lon = p.x;
  var lat = p.y;

  var delta_lat = lat - this.lat0;
  var delta_lon = lon - this.long0;

  // 1. Calculate d_phi and d_psi    ...                          // and d_lambda
  // For this algorithm, delta_latitude is in seconds of arc x 10-5, so we need to scale to those units. Longitude is radians.
  var d_phi = delta_lat / SEC_TO_RAD$1 * 1E-5;
  var d_lambda = delta_lon;
  var d_phi_n = 1; // d_phi^0

  var d_psi = 0;
  for (n = 1; n <= 10; n++) {
    d_phi_n = d_phi_n * d_phi;
    d_psi = d_psi + this.A[n] * d_phi_n;
  }

  // 2. Calculate theta
  var th_re = d_psi;
  var th_im = d_lambda;

  // 3. Calculate z
  var th_n_re = 1;
  var th_n_im = 0; // theta^0
  var th_n_re1;
  var th_n_im1;

  var z_re = 0;
  var z_im = 0;
  for (n = 1; n <= 6; n++) {
    th_n_re1 = th_n_re * th_re - th_n_im * th_im;
    th_n_im1 = th_n_im * th_re + th_n_re * th_im;
    th_n_re = th_n_re1;
    th_n_im = th_n_im1;
    z_re = z_re + this.B_re[n] * th_n_re - this.B_im[n] * th_n_im;
    z_im = z_im + this.B_im[n] * th_n_re + this.B_re[n] * th_n_im;
  }

  // 4. Calculate easting and northing
  p.x = z_im * this.a + this.x0;
  p.y = z_re * this.a + this.y0;

  return p;
};

/**
    New Zealand Map Grid Inverse  -  x/y to long/lat
  */
var inverse$18 = function inverse(p) {
  var n;
  var x = p.x;
  var y = p.y;

  var delta_x = x - this.x0;
  var delta_y = y - this.y0;

  // 1. Calculate z
  var z_re = delta_y / this.a;
  var z_im = delta_x / this.a;

  // 2a. Calculate theta - first approximation gives km accuracy
  var z_n_re = 1;
  var z_n_im = 0; // z^0
  var z_n_re1;
  var z_n_im1;

  var th_re = 0;
  var th_im = 0;
  for (n = 1; n <= 6; n++) {
    z_n_re1 = z_n_re * z_re - z_n_im * z_im;
    z_n_im1 = z_n_im * z_re + z_n_re * z_im;
    z_n_re = z_n_re1;
    z_n_im = z_n_im1;
    th_re = th_re + this.C_re[n] * z_n_re - this.C_im[n] * z_n_im;
    th_im = th_im + this.C_im[n] * z_n_re + this.C_re[n] * z_n_im;
  }

  // 2b. Iterate to refine the accuracy of the calculation
  //        0 iterations gives km accuracy
  //        1 iteration gives m accuracy -- good enough for most mapping applications
  //        2 iterations bives mm accuracy
  for (var i = 0; i < this.iterations; i++) {
    var th_n_re = th_re;
    var th_n_im = th_im;
    var th_n_re1;
    var th_n_im1;

    var num_re = z_re;
    var num_im = z_im;
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      num_re = num_re + (n - 1) * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      num_im = num_im + (n - 1) * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    th_n_re = 1;
    th_n_im = 0;
    var den_re = this.B_re[1];
    var den_im = this.B_im[1];
    for (n = 2; n <= 6; n++) {
      th_n_re1 = th_n_re * th_re - th_n_im * th_im;
      th_n_im1 = th_n_im * th_re + th_n_re * th_im;
      th_n_re = th_n_re1;
      th_n_im = th_n_im1;
      den_re = den_re + n * (this.B_re[n] * th_n_re - this.B_im[n] * th_n_im);
      den_im = den_im + n * (this.B_im[n] * th_n_re + this.B_re[n] * th_n_im);
    }

    // Complex division
    var den2 = den_re * den_re + den_im * den_im;
    th_re = (num_re * den_re + num_im * den_im) / den2;
    th_im = (num_im * den_re - num_re * den_im) / den2;
  }

  // 3. Calculate d_phi              ...                                    // and d_lambda
  var d_psi = th_re;
  var d_lambda = th_im;
  var d_psi_n = 1; // d_psi^0

  var d_phi = 0;
  for (n = 1; n <= 9; n++) {
    d_psi_n = d_psi_n * d_psi;
    d_phi = d_phi + this.D[n] * d_psi_n;
  }

  // 4. Calculate latitude and longitude
  // d_phi is calcuated in second of arc * 10^-5, so we need to scale back to radians. d_lambda is in radians.
  var lat = this.lat0 + d_phi * SEC_TO_RAD$1 * 1E5;
  var lon = this.long0 + d_lambda;

  p.x = lon;
  p.y = lat;

  return p;
};
var names$19 = ["New_Zealand_Map_Grid", "nzmg"];

var nzmg = {
  iterations: iterations,
  init: init$18,
  forward: forward$18,
  inverse: inverse$18,
  names: names$19
};

var init$19 = function init() {
  //no-op
};

/* Miller Cylindrical forward equations--mapping lat,long to x,y
    ------------------------------------------------------------*/
var forward$19 = function forward(p) {
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
      -----------------*/
  var dlon = adjust_lon(lon - this.long0);
  var x = this.x0 + this.a * dlon;
  var y = this.y0 + this.a * Math.log(Math.tan(Math.PI / 4 + lat / 2.5)) * 1.25;

  p.x = x;
  p.y = y;
  return p;
};

/* Miller Cylindrical inverse equations--mapping x,y to lat/long
    ------------------------------------------------------------*/
var inverse$19 = function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;

  var lon = adjust_lon(this.long0 + p.x / this.a);
  var lat = 2.5 * (Math.atan(Math.exp(0.8 * p.y / this.a)) - Math.PI / 4);

  p.x = lon;
  p.y = lat;
  return p;
};
var names$20 = ["Miller_Cylindrical", "mill"];

var mill = {
  init: init$19,
  forward: forward$19,
  inverse: inverse$19,
  names: names$20
};

var C00 = 1;
var C02 = 0.25;
var C04 = 0.046875;
var C06 = 0.01953125;
var C08 = 0.01068115234375;
var C22 = 0.75;
var C44 = 0.46875;
var C46 = 0.01302083333333333333;
var C48 = 0.00712076822916666666;
var C66 = 0.36458333333333333333;
var C68 = 0.00569661458333333333;
var C88 = 0.3076171875;

var pj_enfn = function pj_enfn(es) {
  var en = [];
  en[0] = C00 - es * (C02 + es * (C04 + es * (C06 + es * C08)));
  en[1] = es * (C22 - es * (C04 + es * (C06 + es * C08)));
  var t = es * es;
  en[2] = t * (C44 - es * (C46 + es * C48));
  t *= es;
  en[3] = t * (C66 - es * C68);
  en[4] = t * es * C88;
  return en;
};

var pj_mlfn = function pj_mlfn(phi, sphi, cphi, en) {
  cphi *= sphi;
  sphi *= sphi;
  return en[0] * phi - cphi * (en[1] + sphi * (en[2] + sphi * (en[3] + sphi * en[4])));
};

var EPSLN$12 = 1.0e-10;
var MAX_ITER$3 = 20;
var pj_inv_mlfn = function pj_inv_mlfn(arg, es, en) {
  var k = 1 / (1 - es);
  var phi = arg;
  for (var i = MAX_ITER$3; i; --i) {
    /* rarely goes over 2 iterations */
    var s = Math.sin(phi);
    var t = 1 - es * s * s;
    //t = this.pj_mlfn(phi, s, Math.cos(phi), en) - arg;
    //phi -= t * (t * Math.sqrt(t)) * k;
    t = (pj_mlfn(phi, s, Math.cos(phi), en) - arg) * (t * Math.sqrt(t)) * k;
    phi -= t;
    if (Math.abs(t) < EPSLN$12) {
      return phi;
    }
  }
  //..reportError("cass:pj_inv_mlfn: Convergence error");
  return phi;
};

var MAX_ITER$2 = 20;

var HALF_PI$13 = Math.PI / 2;
var EPSLN$11 = 1.0e-10;

var init$20 = function init() {
  /* Place parameters in static storage for common use
    -------------------------------------------------*/

  if (!this.sphere) {
    this.en = pj_enfn(this.es);
  } else {
    this.n = 1;
    this.m = 0;
    this.es = 0;
    this.C_y = Math.sqrt((this.m + 1) / this.n);
    this.C_x = this.C_y / (this.m + 1);
  }
};

/* Sinusoidal forward equations--mapping lat,long to x,y
  -----------------------------------------------------*/
var forward$20 = function forward(p) {
  var x, y;
  var lon = p.x;
  var lat = p.y;
  /* Forward equations
    -----------------*/
  lon = adjust_lon(lon - this.long0);

  if (this.sphere) {
    if (!this.m) {
      lat = this.n !== 1 ? Math.asin(this.n * Math.sin(lat)) : lat;
    } else {
      var k = this.n * Math.sin(lat);
      for (var i = MAX_ITER$2; i; --i) {
        var V = (this.m * lat + Math.sin(lat) - k) / (this.m + Math.cos(lat));
        lat -= V;
        if (Math.abs(V) < EPSLN$11) {
          break;
        }
      }
    }
    x = this.a * this.C_x * lon * (this.m + Math.cos(lat));
    y = this.a * this.C_y * lat;
  } else {

    var s = Math.sin(lat);
    var c = Math.cos(lat);
    y = this.a * pj_mlfn(lat, s, c, this.en);
    x = this.a * lon * c / Math.sqrt(1 - this.es * s * s);
  }

  p.x = x;
  p.y = y;
  return p;
};

var inverse$20 = function inverse(p) {
  var lat, temp, lon, s;

  p.x -= this.x0;
  lon = p.x / this.a;
  p.y -= this.y0;
  lat = p.y / this.a;

  if (this.sphere) {
    lat /= this.C_y;
    lon = lon / (this.C_x * (this.m + Math.cos(lat)));
    if (this.m) {
      lat = asinz((this.m * lat + Math.sin(lat)) / this.n);
    } else if (this.n !== 1) {
      lat = asinz(Math.sin(lat) / this.n);
    }
    lon = adjust_lon(lon + this.long0);
    lat = adjust_lat(lat);
  } else {
    lat = pj_inv_mlfn(p.y / this.a, this.es, this.en);
    s = Math.abs(lat);
    if (s < HALF_PI$13) {
      s = Math.sin(lat);
      temp = this.long0 + p.x * Math.sqrt(1 - this.es * s * s) / (this.a * Math.cos(lat));
      //temp = this.long0 + p.x / (this.a * Math.cos(lat));
      lon = adjust_lon(temp);
    } else if (s - EPSLN$11 < HALF_PI$13) {
      lon = this.long0;
    }
  }
  p.x = lon;
  p.y = lat;
  return p;
};
var names$21 = ["Sinusoidal", "sinu"];

var sinu = {
  init: init$20,
  forward: forward$20,
  inverse: inverse$20,
  names: names$21
};

var EPSLN$13 = 1.0e-10;
var init$21 = function init() {};

/* Mollweide forward equations--mapping lat,long to x,y
    ----------------------------------------------------*/
var forward$21 = function forward(p) {

  /* Forward equations
      -----------------*/
  var lon = p.x;
  var lat = p.y;

  var delta_lon = adjust_lon(lon - this.long0);
  var theta = lat;
  var con = Math.PI * Math.sin(lat);

  /* Iterate using the Newton-Raphson method to find theta
      -----------------------------------------------------*/
  for (var i = 0; true; i++) {
    var delta_theta = -(theta + Math.sin(theta) - con) / (1 + Math.cos(theta));
    theta += delta_theta;
    if (Math.abs(delta_theta) < EPSLN$13) {
      break;
    }
  }
  theta /= 2;

  /* If the latitude is 90 deg, force the x coordinate to be "0 + false easting"
       this is done here because of precision problems with "cos(theta)"
       --------------------------------------------------------------------------*/
  if (Math.PI / 2 - Math.abs(lat) < EPSLN$13) {
    delta_lon = 0;
  }
  var x = 0.900316316158 * this.a * delta_lon * Math.cos(theta) + this.x0;
  var y = 1.4142135623731 * this.a * Math.sin(theta) + this.y0;

  p.x = x;
  p.y = y;
  return p;
};

var inverse$21 = function inverse(p) {
  var theta;
  var arg;

  /* Inverse equations
      -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  arg = p.y / (1.4142135623731 * this.a);

  /* Because of division by zero problems, 'arg' can not be 1.  Therefore
       a number very close to one is used instead.
       -------------------------------------------------------------------*/
  if (Math.abs(arg) > 0.999999999999) {
    arg = 0.999999999999;
  }
  theta = Math.asin(arg);
  var lon = adjust_lon(this.long0 + p.x / (0.900316316158 * this.a * Math.cos(theta)));
  if (lon < -Math.PI) {
    lon = -Math.PI;
  }
  if (lon > Math.PI) {
    lon = Math.PI;
  }
  arg = (2 * theta + Math.sin(2 * theta)) / Math.PI;
  if (Math.abs(arg) > 1) {
    arg = 1;
  }
  var lat = Math.asin(arg);

  p.x = lon;
  p.y = lat;
  return p;
};
var names$22 = ["Mollweide", "moll"];

var moll = {
  init: init$21,
  forward: forward$21,
  inverse: inverse$21,
  names: names$22
};

var EPSLN$14 = 1.0e-10;
var init$22 = function init() {

  /* Place parameters in static storage for common use
      -------------------------------------------------*/
  // Standard Parallels cannot be equal and on opposite sides of the equator
  if (Math.abs(this.lat1 + this.lat2) < EPSLN$14) {
    return;
  }
  this.lat2 = this.lat2 || this.lat1;
  this.temp = this.b / this.a;
  this.es = 1 - Math.pow(this.temp, 2);
  this.e = Math.sqrt(this.es);
  this.e0 = e0fn(this.es);
  this.e1 = e1fn(this.es);
  this.e2 = e2fn(this.es);
  this.e3 = e3fn(this.es);

  this.sinphi = Math.sin(this.lat1);
  this.cosphi = Math.cos(this.lat1);

  this.ms1 = msfnz(this.e, this.sinphi, this.cosphi);
  this.ml1 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat1);

  if (Math.abs(this.lat1 - this.lat2) < EPSLN$14) {
    this.ns = this.sinphi;
  } else {
    this.sinphi = Math.sin(this.lat2);
    this.cosphi = Math.cos(this.lat2);
    this.ms2 = msfnz(this.e, this.sinphi, this.cosphi);
    this.ml2 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat2);
    this.ns = (this.ms1 - this.ms2) / (this.ml2 - this.ml1);
  }
  this.g = this.ml1 + this.ms1 / this.ns;
  this.ml0 = mlfn(this.e0, this.e1, this.e2, this.e3, this.lat0);
  this.rh = this.a * (this.g - this.ml0);
};

/* Equidistant Conic forward equations--mapping lat,long to x,y
  -----------------------------------------------------------*/
var forward$22 = function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var rh1;

  /* Forward equations
      -----------------*/
  if (this.sphere) {
    rh1 = this.a * (this.g - lat);
  } else {
    var ml = mlfn(this.e0, this.e1, this.e2, this.e3, lat);
    rh1 = this.a * (this.g - ml);
  }
  var theta = this.ns * adjust_lon(lon - this.long0);
  var x = this.x0 + rh1 * Math.sin(theta);
  var y = this.y0 + this.rh - rh1 * Math.cos(theta);
  p.x = x;
  p.y = y;
  return p;
};

/* Inverse equations
  -----------------*/
var inverse$22 = function inverse(p) {
  p.x -= this.x0;
  p.y = this.rh - p.y + this.y0;
  var con, rh1, lat, lon;
  if (this.ns >= 0) {
    rh1 = Math.sqrt(p.x * p.x + p.y * p.y);
    con = 1;
  } else {
    rh1 = -Math.sqrt(p.x * p.x + p.y * p.y);
    con = -1;
  }
  var theta = 0;
  if (rh1 !== 0) {
    theta = Math.atan2(con * p.x, con * p.y);
  }

  if (this.sphere) {
    lon = adjust_lon(this.long0 + theta / this.ns);
    lat = adjust_lat(this.g - rh1 / this.a);
    p.x = lon;
    p.y = lat;
    return p;
  } else {
    var ml = this.g - rh1 / this.a;
    lat = imlfn(ml, this.e0, this.e1, this.e2, this.e3);
    lon = adjust_lon(this.long0 + theta / this.ns);
    p.x = lon;
    p.y = lat;
    return p;
  }
};
var names$23 = ["Equidistant_Conic", "eqdc"];

var eqdc = {
  init: init$22,
  forward: forward$22,
  inverse: inverse$22,
  names: names$23
};

var HALF_PI$14 = Math.PI / 2;
var EPSLN$15 = 1.0e-10;

/* Initialize the Van Der Grinten projection
  ----------------------------------------*/
var init$23 = function init() {
  //this.R = 6370997; //Radius of earth
  this.R = this.a;
};

var forward$23 = function forward(p) {

  var lon = p.x;
  var lat = p.y;

  /* Forward equations
    -----------------*/
  var dlon = adjust_lon(lon - this.long0);
  var x, y;

  if (Math.abs(lat) <= EPSLN$15) {
    x = this.x0 + this.R * dlon;
    y = this.y0;
  }
  var theta = asinz(2 * Math.abs(lat / Math.PI));
  if (Math.abs(dlon) <= EPSLN$15 || Math.abs(Math.abs(lat) - HALF_PI$14) <= EPSLN$15) {
    x = this.x0;
    if (lat >= 0) {
      y = this.y0 + Math.PI * this.R * Math.tan(0.5 * theta);
    } else {
      y = this.y0 + Math.PI * this.R * -Math.tan(0.5 * theta);
    }
    //  return(OK);
  }
  var al = 0.5 * Math.abs(Math.PI / dlon - dlon / Math.PI);
  var asq = al * al;
  var sinth = Math.sin(theta);
  var costh = Math.cos(theta);

  var g = costh / (sinth + costh - 1);
  var gsq = g * g;
  var m = g * (2 / sinth - 1);
  var msq = m * m;
  var con = Math.PI * this.R * (al * (g - msq) + Math.sqrt(asq * (g - msq) * (g - msq) - (msq + asq) * (gsq - msq))) / (msq + asq);
  if (dlon < 0) {
    con = -con;
  }
  x = this.x0 + con;
  //con = Math.abs(con / (Math.PI * this.R));
  var q = asq + g;
  con = Math.PI * this.R * (m * q - al * Math.sqrt((msq + asq) * (asq + 1) - q * q)) / (msq + asq);
  if (lat >= 0) {
    //y = this.y0 + Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 + con;
  } else {
    //y = this.y0 - Math.PI * this.R * Math.sqrt(1 - con * con - 2 * al * con);
    y = this.y0 - con;
  }
  p.x = x;
  p.y = y;
  return p;
};

/* Van Der Grinten inverse equations--mapping x,y to lat/long
  ---------------------------------------------------------*/
var inverse$23 = function inverse(p) {
  var lon, lat;
  var xx, yy, xys, c1, c2, c3;
  var a1;
  var m1;
  var con;
  var th1;
  var d;

  /* inverse equations
    -----------------*/
  p.x -= this.x0;
  p.y -= this.y0;
  con = Math.PI * this.R;
  xx = p.x / con;
  yy = p.y / con;
  xys = xx * xx + yy * yy;
  c1 = -Math.abs(yy) * (1 + xys);
  c2 = c1 - 2 * yy * yy + xx * xx;
  c3 = -2 * c1 + 1 + 2 * yy * yy + xys * xys;
  d = yy * yy / c3 + (2 * c2 * c2 * c2 / c3 / c3 / c3 - 9 * c1 * c2 / c3 / c3) / 27;
  a1 = (c1 - c2 * c2 / 3 / c3) / c3;
  m1 = 2 * Math.sqrt(-a1 / 3);
  con = 3 * d / a1 / m1;
  if (Math.abs(con) > 1) {
    if (con >= 0) {
      con = 1;
    } else {
      con = -1;
    }
  }
  th1 = Math.acos(con) / 3;
  if (p.y >= 0) {
    lat = (-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  } else {
    lat = -(-m1 * Math.cos(th1 + Math.PI / 3) - c2 / 3 / c3) * Math.PI;
  }

  if (Math.abs(xx) < EPSLN$15) {
    lon = this.long0;
  } else {
    lon = adjust_lon(this.long0 + Math.PI * (xys - 1 + Math.sqrt(1 + 2 * (xx * xx - yy * yy) + xys * xys)) / 2 / xx);
  }

  p.x = lon;
  p.y = lat;
  return p;
};
var names$24 = ["Van_der_Grinten_I", "VanDerGrinten", "vandg"];

var vandg = {
  init: init$23,
  forward: forward$23,
  inverse: inverse$23,
  names: names$24
};

var HALF_PI$15 = Math.PI / 2;
var EPSLN$16 = 1.0e-10;

var init$24 = function init() {
  this.sin_p12 = Math.sin(this.lat0);
  this.cos_p12 = Math.cos(this.lat0);
};

var forward$24 = function forward(p) {
  var lon = p.x;
  var lat = p.y;
  var sinphi = Math.sin(p.y);
  var cosphi = Math.cos(p.y);
  var dlon = adjust_lon(lon - this.long0);
  var e0, e1, e2, e3, Mlp, Ml, tanphi, Nl1, Nl, psi, Az, G, H, GH, Hs, c, kp, cos_c, s, s2, s3, s4, s5;
  if (this.sphere) {
    if (Math.abs(this.sin_p12 - 1) <= EPSLN$16) {
      //North Pole case
      p.x = this.x0 + this.a * (HALF_PI$15 - lat) * Math.sin(dlon);
      p.y = this.y0 - this.a * (HALF_PI$15 - lat) * Math.cos(dlon);
      return p;
    } else if (Math.abs(this.sin_p12 + 1) <= EPSLN$16) {
      //South Pole case
      p.x = this.x0 + this.a * (HALF_PI$15 + lat) * Math.sin(dlon);
      p.y = this.y0 + this.a * (HALF_PI$15 + lat) * Math.cos(dlon);
      return p;
    } else {
      //default case
      cos_c = this.sin_p12 * sinphi + this.cos_p12 * cosphi * Math.cos(dlon);
      c = Math.acos(cos_c);
      kp = c / Math.sin(c);
      p.x = this.x0 + this.a * kp * cosphi * Math.sin(dlon);
      p.y = this.y0 + this.a * kp * (this.cos_p12 * sinphi - this.sin_p12 * cosphi * Math.cos(dlon));
      return p;
    }
  } else {
    e0 = e0fn(this.es);
    e1 = e1fn(this.es);
    e2 = e2fn(this.es);
    e3 = e3fn(this.es);
    if (Math.abs(this.sin_p12 - 1) <= EPSLN$16) {
      //North Pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI$15);
      Ml = this.a * mlfn(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp - Ml) * Math.sin(dlon);
      p.y = this.y0 - (Mlp - Ml) * Math.cos(dlon);
      return p;
    } else if (Math.abs(this.sin_p12 + 1) <= EPSLN$16) {
      //South Pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI$15);
      Ml = this.a * mlfn(e0, e1, e2, e3, lat);
      p.x = this.x0 + (Mlp + Ml) * Math.sin(dlon);
      p.y = this.y0 + (Mlp + Ml) * Math.cos(dlon);
      return p;
    } else {
      //Default case
      tanphi = sinphi / cosphi;
      Nl1 = gN(this.a, this.e, this.sin_p12);
      Nl = gN(this.a, this.e, sinphi);
      psi = Math.atan((1 - this.es) * tanphi + this.es * Nl1 * this.sin_p12 / (Nl * cosphi));
      Az = Math.atan2(Math.sin(dlon), this.cos_p12 * Math.tan(psi) - this.sin_p12 * Math.cos(dlon));
      if (Az === 0) {
        s = Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      } else if (Math.abs(Math.abs(Az) - Math.PI) <= EPSLN$16) {
        s = -Math.asin(this.cos_p12 * Math.sin(psi) - this.sin_p12 * Math.cos(psi));
      } else {
        s = Math.asin(Math.sin(dlon) * Math.cos(psi) / Math.sin(Az));
      }
      G = this.e * this.sin_p12 / Math.sqrt(1 - this.es);
      H = this.e * this.cos_p12 * Math.cos(Az) / Math.sqrt(1 - this.es);
      GH = G * H;
      Hs = H * H;
      s2 = s * s;
      s3 = s2 * s;
      s4 = s3 * s;
      s5 = s4 * s;
      c = Nl1 * s * (1 - s2 * Hs * (1 - Hs) / 6 + s3 / 8 * GH * (1 - 2 * Hs) + s4 / 120 * (Hs * (4 - 7 * Hs) - 3 * G * G * (1 - 7 * Hs)) - s5 / 48 * GH);
      p.x = this.x0 + c * Math.sin(Az);
      p.y = this.y0 + c * Math.cos(Az);
      return p;
    }
  }
};

var inverse$24 = function inverse(p) {
  p.x -= this.x0;
  p.y -= this.y0;
  var rh, z, sinz, cosz, lon, lat, con, e0, e1, e2, e3, Mlp, M, N1, psi, Az, cosAz, tmp, A, B, D, Ee, F;
  if (this.sphere) {
    rh = Math.sqrt(p.x * p.x + p.y * p.y);
    if (rh > 2 * HALF_PI$15 * this.a) {
      return;
    }
    z = rh / this.a;

    sinz = Math.sin(z);
    cosz = Math.cos(z);

    lon = this.long0;
    if (Math.abs(rh) <= EPSLN$16) {
      lat = this.lat0;
    } else {
      lat = asinz(cosz * this.sin_p12 + p.y * sinz * this.cos_p12 / rh);
      con = Math.abs(this.lat0) - HALF_PI$15;
      if (Math.abs(con) <= EPSLN$16) {
        if (this.lat0 >= 0) {
          lon = adjust_lon(this.long0 + Math.atan2(p.x, -p.y));
        } else {
          lon = adjust_lon(this.long0 - Math.atan2(-p.x, p.y));
        }
      } else {
        /*con = cosz - this.sin_p12 * Math.sin(lat);
        if ((Math.abs(con) < EPSLN) && (Math.abs(p.x) < EPSLN)) {
          //no-op, just keep the lon value as is
        } else {
          var temp = Math.atan2((p.x * sinz * this.cos_p12), (con * rh));
          lon = adjust_lon(this.long0 + Math.atan2((p.x * sinz * this.cos_p12), (con * rh)));
        }*/
        lon = adjust_lon(this.long0 + Math.atan2(p.x * sinz, rh * this.cos_p12 * cosz - p.y * this.sin_p12 * sinz));
      }
    }

    p.x = lon;
    p.y = lat;
    return p;
  } else {
    e0 = e0fn(this.es);
    e1 = e1fn(this.es);
    e2 = e2fn(this.es);
    e3 = e3fn(this.es);
    if (Math.abs(this.sin_p12 - 1) <= EPSLN$16) {
      //North pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI$15);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = Mlp - rh;
      lat = imlfn(M / this.a, e0, e1, e2, e3);
      lon = adjust_lon(this.long0 + Math.atan2(p.x, -1 * p.y));
      p.x = lon;
      p.y = lat;
      return p;
    } else if (Math.abs(this.sin_p12 + 1) <= EPSLN$16) {
      //South pole case
      Mlp = this.a * mlfn(e0, e1, e2, e3, HALF_PI$15);
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      M = rh - Mlp;

      lat = imlfn(M / this.a, e0, e1, e2, e3);
      lon = adjust_lon(this.long0 + Math.atan2(p.x, p.y));
      p.x = lon;
      p.y = lat;
      return p;
    } else {
      //default case
      rh = Math.sqrt(p.x * p.x + p.y * p.y);
      Az = Math.atan2(p.x, p.y);
      N1 = gN(this.a, this.e, this.sin_p12);
      cosAz = Math.cos(Az);
      tmp = this.e * this.cos_p12 * cosAz;
      A = -tmp * tmp / (1 - this.es);
      B = 3 * this.es * (1 - A) * this.sin_p12 * this.cos_p12 * cosAz / (1 - this.es);
      D = rh / N1;
      Ee = D - A * (1 + A) * Math.pow(D, 3) / 6 - B * (1 + 3 * A) * Math.pow(D, 4) / 24;
      F = 1 - A * Ee * Ee / 2 - D * Ee * Ee * Ee / 6;
      psi = Math.asin(this.sin_p12 * Math.cos(Ee) + this.cos_p12 * Math.sin(Ee) * cosAz);
      lon = adjust_lon(this.long0 + Math.asin(Math.sin(Az) * Math.sin(Ee) / Math.cos(psi)));
      lat = Math.atan((1 - this.es * F * this.sin_p12 / Math.sin(psi)) * Math.tan(psi) / (1 - this.es));
      p.x = lon;
      p.y = lat;
      return p;
    }
  }
};
var names$25 = ["Azimuthal_Equidistant", "aeqd"];

var aeqd = {
  init: init$24,
  forward: forward$24,
  inverse: inverse$24,
  names: names$25
};

var projs$1 = [tmerc, utm, sterea, stere, somerc, omerc, lcc, krovak, cass, laea, aea, gnom, cea, eqc, poly, nzmg, mill, sinu, moll, eqdc, vandg, aeqd];
var includedProjections = function includedProjections(proj4) {
  projs$1.forEach(function (proj) {
    proj4.Proj.projections.add(proj);
  });
};

var require$$6$1 = ( _package$1 && _package ) || _package$1;

core.defaultDatum = 'WGS84'; //default datum
core.Proj = Proj;
core.WGS84 = new core.Proj('WGS84');
core.Point = Point_1;
core.toPoint = toPoint;
core.defs = defs_1;
core.transform = transform;
core.mgrs = mgrs;
core.version = require$$6$1.version;
includedProjections(core);
var lib = core;

var _slicedToArray$1 = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var PRECISION = 7;

var SVY21 = '+proj=tmerc +lat_0=1.366666666666667 +lon_0=103.8333333333333 +k=1 +x_0=28001.642 +y_0=38744.572 +ellps=WGS84 +units=m +no_defs';
var SVY21proj = lib('WGS84', SVY21);

/* eslint-disable camelcase */
function inside(_ref, polyline$$1) {
  var _ref2 = _slicedToArray$1(_ref, 2);

  var lng = _ref2[0];
  var lat = _ref2[1];

  var isInside = false;
  for (var i = 1; i < polyline$$1.length; i++) {
    var deltaY_plus = polyline$$1[i][1] - lat;
    var deltaY_minus = lat - polyline$$1[i - 1][1];
    if (deltaY_plus > 0 && deltaY_minus <= 0) continue;
    if (deltaY_plus < 0 && deltaY_minus >= 0) continue;
    var deltaX = (deltaY_plus * polyline$$1[i - 1][0] + deltaY_minus * polyline$$1[i][0]) / (deltaY_plus + deltaY_minus) - lng;
    if (deltaX <= 0) continue;
    isInside = !isInside;
  }
  return isInside;
}
/* eslint-enable camelcase */

function encodePolyline(arr) {
  return polyline_1.encode(arr, PRECISION);
}

function decodePolyline(str) {
  return polyline_1.decode(str, PRECISION).map(function (_ref3) {
    var _ref4 = _slicedToArray$1(_ref3, 2);

    var lng = _ref4[0];
    var lat = _ref4[1];
    return [Math.round(lng * Math.pow(10, PRECISION - 2)) / Math.pow(10, PRECISION - 2), Math.round(lat * Math.pow(10, PRECISION - 2)) / Math.pow(10, PRECISION - 2)];
  });
}





function toLinearRing(polyline$$1) {
  var linearRing = typeof polyline$$1 === 'string' ? decodePolyline(polyline$$1) : cloneDeep_1(polyline$$1);
  var firstPoint = linearRing[0];
  var lastPoint = linearRing[linearRing.length - 1];
  if (firstPoint[0] !== lastPoint[0] || firstPoint[1] !== lastPoint[1]) {
    linearRing.push(firstPoint);
  }
  return linearRing;
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;_e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }return _arr;
  }return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }return arr2;
  } else {
    return Array.from(arr);
  }
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var SgHeatmap = function () {
  function SgHeatmap(data) {
    _classCallCheck(this, SgHeatmap);

    var _data = typeof data === 'string' ? JSON.parse(data) : data;
    if (!(_data instanceof Array)) throw new Error('Expects an array of feature objects');
    this.children = _data.map(function (f) {
      return new Feature(f);
    });
    this._defaultState = {};
    this._updaters = [];
    this._stats = {};
  }

  _createClass(SgHeatmap, [{
    key: 'setDefaultState',
    value: function setDefaultState(_key, value) {
      this._defaultState[_key] = value;
      this.children.forEach(function (c) {
        if (_key in c.state) return;
        c.state[_key] = cloneDeep_1(value);
      });
      return this;
    }
  }, {
    key: 'resetState',
    value: function resetState() {
      var _this = this;

      this.children.forEach(function (c) {
        c.state = cloneDeep_1(_this._defaultState);
      });
      return this;
    }
  }, {
    key: 'registerUpdater',
    value: function registerUpdater(fn) {
      this._updaters.push(fn);
      return this;
    }
  }, {
    key: 'inspectUpdaters',
    value: function inspectUpdaters() {
      this._updaters.map(function (fn, i) {
        console.log('Inspecting updater "' + (i + 1) + '"');
        console.log(fn);
      });
    }
  }, {
    key: 'registerStat',
    value: function registerStat(key, fn) {
      this._stats[key] = fn;
      return this;
    }
  }, {
    key: 'inspectStats',
    value: function inspectStats() {
      var _this2 = this;

      Object.keys(this._stats).forEach(function (key, i) {
        console.log('Inspecting stat "' + key + '"');
        console.log(_this2._stats[key]);
      });
    }
  }, {
    key: 'bin',
    value: function bin(lnglat) {
      return this.children.filter(function (c) {
        return c.inside(lnglat);
      });
    }
  }, {
    key: 'update',
    value: function update(lnglat, weight) {
      var _this3 = this;

      this.bin(lnglat).forEach(function (c) {
        c.state = _this3._updaters.reduce(function (nextState, fn) {
          return Object.assign(nextState, fn(weight, c.state));
        }, {});
      });
      return this;
    }
  }, {
    key: 'getStat',
    value: function getStat(stat) {
      var _this4 = this;

      var fn = typeof stat === 'function' ? stat : this._stats[stat];

      var _partition = partition_1(this.children, function (c) {
        return !isEqual_1(_this4._defaultState, c.state);
      });

      var _partition2 = _slicedToArray(_partition, 2);

      var changed = _partition2[0];
      var unchanged = _partition2[1];

      var listedValues = [];
      var values = changed.reduce(function (stats, c) {
        var value = fn(c.state, c.properties);
        listedValues.push(value);
        return Object.assign(stats, _defineProperty({}, c.id, value));
      }, {});
      return {
        stat: stat,
        values: values,
        unchanged: unchanged.map(function (c) {
          return c.id;
        }),
        min: minBy_1(listedValues),
        max: maxBy_1(listedValues)
      };
    }
  }, {
    key: 'initializeRenderer',
    value: function initializeRenderer(colorScale) {
      var _this5 = this;

      var defaultStyle = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
      var addonStyle = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

      if (!window) throw new Error('Method initializeRenderer should only be called browser-side');
      if (!window.google) throw new Error('Google Maps not loaded');
      if ('renderer' in this) {
        console.log('Existing renderer replaced');
        this.renderer.setMap(null);
      }

      this.colorScale = colorScale;

      this.renderer = new window.google.maps.Data({
        style: function style(feature) {
          var styleOptions = Object.assign({}, defaultStyle);
          var color = feature.getProperty('color');
          if (color) Object.assign(styleOptions, addonStyle, { fillColor: color });
          return styleOptions;
        }
      });
      this.children.forEach(function (c) {
        _this5.renderer.addGeoJson({
          id: c.id,
          type: 'Feature',
          geometry: c.geometry,
          properties: Object.assign({ color: null }, c.properties)
        });
      });

      return this.renderer;
    }
  }, {
    key: 'render',
    value: function render(stat, domain) {
      var _this6 = this;

      if (!this.renderer) throw new Error('Renderer has not been initialized');

      var _getStat = this.getStat(stat);

      var statValues = _getStat.values;
      var unchanged = _getStat.unchanged;
      var min = _getStat.min;
      var max = _getStat.max;

      domain = domain || [min, max];
      function normalize(value) {
        return (value - domain[0]) / (domain[1] - domain[0]);
      }

      Object.keys(statValues).forEach(function (key) {
        var color = _this6.colorScale(normalize(statValues[key]));
        _this6.renderer.getFeatureById(key).setProperty('color', color);
      });
      unchanged.forEach(function (key) {
        _this6.renderer.getFeatureById(key).setProperty('color', null);
      });
    }
  }, {
    key: 'clone',
    value: function clone() {
      var includeState = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      var cloned = new SgHeatmap(this.children);
      cloned._updaters = [].concat(_toConsumableArray(this._updaters));
      cloned._stats = _extends({}, this._stats);
      if (includeState) {
        cloned._defaultState = this.defaultState;
      } else {
        cloned.children.forEach(function (c) {
          c.state = {};
        });
      }
      return cloned;
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var includeState = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

      return '[' + this.children.map(function (c) {
        return c.serialize(includeState);
      }).join(',') + ']';
    }
  }]);

  return SgHeatmap;
}();

var Feature = function () {
  function Feature(data) {
    _classCallCheck(this, Feature);

    if (!('id' in data)) throw new Error('Feature object requires id');
    if (!('geometry' in data)) throw new Error('Geometry not specified in feature object');
    this.type = 'Feature';
    this.id = data.id;
    this.properties = data.properties ? cloneDeep_1(data.properties) : {};

    this.geometry = {};
    this.geometry.type = data.geometry.type;
    if (this.geometry.type === 'Polygon') {
      this.geometry.coordinates = data.geometry.coordinates.map(toLinearRing);
      this.geometry.bbox = 'bbox' in data.geometry ? cloneDeep_1(data.geometry.bbox) : [minBy_1(this.geometry.coordinates[0], function (v) {
        return v[0];
      })[0], minBy_1(this.geometry.coordinates[0], function (v) {
        return v[1];
      })[1], maxBy_1(this.geometry.coordinates[0], function (v) {
        return v[0];
      })[0], maxBy_1(this.geometry.coordinates[0], function (v) {
        return v[1];
      })[1]];
    } else if (this.geometry.type === 'MultiPolygon') {
      this.geometry.coordinates = data.geometry.coordinates.map(function (polygon) {
        return polygon.map(toLinearRing);
      });
      if ('bbox' in data.geometry) {
        this.geometry.bbox = cloneDeep_1(data.geometry.bbox);
      } else {
        var bboxs = this.geometry.coordinates.map(function (polygon) {
          return [minBy_1(polygon[0], function (v) {
            return v[0];
          })[0], minBy_1(polygon[0], function (v) {
            return v[1];
          })[1], maxBy_1(polygon[0], function (v) {
            return v[0];
          })[0], maxBy_1(polygon[0], function (v) {
            return v[1];
          })[1]];
        });
        this.geometry.bbox = [minBy_1(bboxs, function (v) {
          return v[0];
        })[0], minBy_1(bboxs, function (v) {
          return v[1];
        })[1], maxBy_1(bboxs, function (v) {
          return v[2];
        })[2], maxBy_1(bboxs, function (v) {
          return v[3];
        })[3]];
      }
    } else {
      throw new Error('Feature geometry must be of type Polygon or MultiPolygon');
    }

    this.state = 'state' in data ? cloneDeep_1(data.state) : {};
  }

  _createClass(Feature, [{
    key: 'inside',
    value: function inside$$1(location) {
      var _location = _slicedToArray(location, 2);

      var lng = _location[0];
      var lat = _location[1];

      if (lng < this.geometry.bbox[0]) return false;
      if (lat < this.geometry.bbox[1]) return false;
      if (lng > this.geometry.bbox[2]) return false;
      if (lat > this.geometry.bbox[3]) return false;

      if (this.geometry.type === 'Polygon') {
        return inside([lng, lat], this.geometry.coordinates[0]);
      } else {
        return this.geometry.coordinates.some(function (polygon) {
          return inside([lng, lat], polygon[0]);
        });
      }
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      var includeState = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
      var id = this.id;
      var properties = this.properties;
      var geometry = this.geometry;
      var state = this.state;

      var _geometry = {
        type: geometry.type,
        bbox: geometry.bbox,
        coordinates: geometry.type === 'Polygon' ? geometry.coordinates.map(encodePolyline) : geometry.coordinates.map(function (polygon) {
          return polygon.map(encodePolyline);
        })
      };
      var _state = includeState ? state : {};
      return JSON.stringify({ id: id, properties: properties, geometry: _geometry, state: _state });
    }
  }]);

  return Feature;
}();

var chroma = createCommonjsModule(function (module, exports) {
  /**
   * @license
   *
   * chroma.js - JavaScript library for color conversions
   * 
   * Copyright (c) 2011-2015, Gregor Aisch
   * All rights reserved.
   * 
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are met:
   * 
   * 1. Redistributions of source code must retain the above copyright notice, this
   *    list of conditions and the following disclaimer.
   * 
   * 2. Redistributions in binary form must reproduce the above copyright notice,
   *    this list of conditions and the following disclaimer in the documentation
   *    and/or other materials provided with the distribution.
   * 
   * 3. The name Gregor Aisch may not be used to endorse or promote products
   *    derived from this software without specific prior written permission.
   * 
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
   * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
   * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
   * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
   * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
   * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
   * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
   * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
   * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   *
   */

  (function () {
    var Color,
        DEG2RAD,
        LAB_CONSTANTS,
        PI,
        PITHIRD,
        RAD2DEG,
        TWOPI,
        _guess_formats,
        _guess_formats_sorted,
        _input,
        _interpolators,
        abs,
        atan2,
        _bezier,
        _blend,
        blend_f,
        brewer,
        burn,
        chroma,
        clip_rgb,
        cmyk2rgb,
        colors,
        cos,
        css2rgb,
        darken,
        dodge,
        each,
        floor,
        hex2rgb,
        hsi2rgb,
        hsl2css,
        hsl2rgb,
        hsv2rgb,
        interpolate,
        interpolate_hsx,
        interpolate_lab,
        interpolate_num,
        interpolate_rgb,
        lab2lch,
        lab2rgb,
        lab_xyz,
        lch2lab,
        lch2rgb,
        lighten,
        limit,
        log,
        luminance_x,
        m,
        max,
        multiply,
        normal,
        num2rgb,
        overlay,
        pow,
        rgb2cmyk,
        rgb2css,
        rgb2hex,
        rgb2hsi,
        rgb2hsl,
        rgb2hsv,
        rgb2lab,
        rgb2lch,
        rgb2luminance,
        rgb2num,
        rgb2temperature,
        rgb2xyz,
        rgb_xyz,
        rnd,
        root,
        round,
        screen,
        sin,
        sqrt,
        temperature2rgb,
        type,
        unpack,
        w3cx11,
        xyz_lab,
        xyz_rgb,
        slice = [].slice;

    type = function () {

      /*
      for browser-safe type checking+
      ported from jQuery's $.type
       */
      var classToType, len, name, o, ref;
      classToType = {};
      ref = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ");
      for (o = 0, len = ref.length; o < len; o++) {
        name = ref[o];
        classToType["[object " + name + "]"] = name.toLowerCase();
      }
      return function (obj) {
        var strType;
        strType = Object.prototype.toString.call(obj);
        return classToType[strType] || "object";
      };
    }();

    limit = function limit(x, min, max) {
      if (min == null) {
        min = 0;
      }
      if (max == null) {
        max = 1;
      }
      if (x < min) {
        x = min;
      }
      if (x > max) {
        x = max;
      }
      return x;
    };

    unpack = function unpack(args) {
      if (args.length >= 3) {
        return [].slice.call(args);
      } else {
        return args[0];
      }
    };

    clip_rgb = function clip_rgb(rgb) {
      var i;
      for (i in rgb) {
        if (i < 3) {
          if (rgb[i] < 0) {
            rgb[i] = 0;
          }
          if (rgb[i] > 255) {
            rgb[i] = 255;
          }
        } else if (i === 3) {
          if (rgb[i] < 0) {
            rgb[i] = 0;
          }
          if (rgb[i] > 1) {
            rgb[i] = 1;
          }
        }
      }
      return rgb;
    };

    PI = Math.PI, round = Math.round, cos = Math.cos, floor = Math.floor, pow = Math.pow, log = Math.log, sin = Math.sin, sqrt = Math.sqrt, atan2 = Math.atan2, max = Math.max, abs = Math.abs;

    TWOPI = PI * 2;

    PITHIRD = PI / 3;

    DEG2RAD = PI / 180;

    RAD2DEG = 180 / PI;

    chroma = function chroma() {
      if (arguments[0] instanceof Color) {
        return arguments[0];
      }
      return function (func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor(),
            result = func.apply(child, args);
        return Object(result) === result ? result : child;
      }(Color, arguments, function () {});
    };

    _interpolators = [];

    if ('object' !== "undefined" && module !== null && module.exports != null) {
      module.exports = chroma;
    }

    if (typeof undefined === 'function' && undefined.amd) {
      undefined([], function () {
        return chroma;
      });
    } else {
      root = 'object' !== "undefined" && exports !== null ? exports : this;
      root.chroma = chroma;
    }

    chroma.version = '1.1.1';

    /**
        chroma.js
    
        Copyright (c) 2011-2013, Gregor Aisch
        All rights reserved.
    
        Redistribution and use in source and binary forms, with or without
        modification, are permitted provided that the following conditions are met:
    
        * Redistributions of source code must retain the above copyright notice, this
          list of conditions and the following disclaimer.
    
        * Redistributions in binary form must reproduce the above copyright notice,
          this list of conditions and the following disclaimer in the documentation
          and/or other materials provided with the distribution.
    
        * The name Gregor Aisch may not be used to endorse or promote products
          derived from this software without specific prior written permission.
    
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
        AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
        IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
        DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
        INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
        BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
        DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
        OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
        NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
        EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    
        @source: https://github.com/gka/chroma.js
     */

    _input = {};

    _guess_formats = [];

    _guess_formats_sorted = false;

    Color = function () {
      function Color() {
        var arg, args, chk, len, len1, me, mode, o, w;
        me = this;
        args = [];
        for (o = 0, len = arguments.length; o < len; o++) {
          arg = arguments[o];
          if (arg != null) {
            args.push(arg);
          }
        }
        mode = args[args.length - 1];
        if (_input[mode] != null) {
          me._rgb = clip_rgb(_input[mode](unpack(args.slice(0, -1))));
        } else {
          if (!_guess_formats_sorted) {
            _guess_formats = _guess_formats.sort(function (a, b) {
              return b.p - a.p;
            });
            _guess_formats_sorted = true;
          }
          for (w = 0, len1 = _guess_formats.length; w < len1; w++) {
            chk = _guess_formats[w];
            mode = chk.test.apply(chk, args);
            if (mode) {
              break;
            }
          }
          if (mode) {
            me._rgb = clip_rgb(_input[mode].apply(_input, args));
          }
        }
        if (me._rgb == null) {
          console.warn('unknown format: ' + args);
        }
        if (me._rgb == null) {
          me._rgb = [0, 0, 0];
        }
        if (me._rgb.length === 3) {
          me._rgb.push(1);
        }
      }

      Color.prototype.alpha = function (alpha) {
        if (arguments.length) {
          this._rgb[3] = alpha;
          return this;
        }
        return this._rgb[3];
      };

      Color.prototype.toString = function () {
        return this.name();
      };

      return Color;
    }();

    chroma._input = _input;

    /**
    	ColorBrewer colors for chroma.js
    
    	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
    	Pennsylvania State University.
    
    	Licensed under the Apache License, Version 2.0 (the "License"); 
    	you may not use this file except in compliance with the License.
    	You may obtain a copy of the License at	
    	http://www.apache.org/licenses/LICENSE-2.0
    
    	Unless required by applicable law or agreed to in writing, software distributed
    	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
    	CONDITIONS OF ANY KIND, either express or implied. See the License for the
    	specific language governing permissions and limitations under the License.
    
        @preserve
     */

    chroma.brewer = brewer = {
      OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
      PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
      BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
      Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
      BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
      YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
      YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
      Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
      RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
      Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
      YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
      Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
      GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
      Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
      YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
      PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
      Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
      PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
      Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
      RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
      RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
      PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
      PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
      RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
      BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
      RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
      PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
      Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
      Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
      Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
      Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
      Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
      Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
      Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
      Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
    };

    /**
    	X11 color names
    
    	http://www.w3.org/TR/css3-color/#svg-color
     */

    w3cx11 = {
      indigo: "#4b0082",
      gold: "#ffd700",
      hotpink: "#ff69b4",
      firebrick: "#b22222",
      indianred: "#cd5c5c",
      yellow: "#ffff00",
      mistyrose: "#ffe4e1",
      darkolivegreen: "#556b2f",
      olive: "#808000",
      darkseagreen: "#8fbc8f",
      pink: "#ffc0cb",
      tomato: "#ff6347",
      lightcoral: "#f08080",
      orangered: "#ff4500",
      navajowhite: "#ffdead",
      lime: "#00ff00",
      palegreen: "#98fb98",
      darkslategrey: "#2f4f4f",
      greenyellow: "#adff2f",
      burlywood: "#deb887",
      seashell: "#fff5ee",
      mediumspringgreen: "#00fa9a",
      fuchsia: "#ff00ff",
      papayawhip: "#ffefd5",
      blanchedalmond: "#ffebcd",
      chartreuse: "#7fff00",
      dimgray: "#696969",
      black: "#000000",
      peachpuff: "#ffdab9",
      springgreen: "#00ff7f",
      aquamarine: "#7fffd4",
      white: "#ffffff",
      orange: "#ffa500",
      lightsalmon: "#ffa07a",
      darkslategray: "#2f4f4f",
      brown: "#a52a2a",
      ivory: "#fffff0",
      dodgerblue: "#1e90ff",
      peru: "#cd853f",
      lawngreen: "#7cfc00",
      chocolate: "#d2691e",
      crimson: "#dc143c",
      forestgreen: "#228b22",
      darkgrey: "#a9a9a9",
      lightseagreen: "#20b2aa",
      cyan: "#00ffff",
      mintcream: "#f5fffa",
      silver: "#c0c0c0",
      antiquewhite: "#faebd7",
      mediumorchid: "#ba55d3",
      skyblue: "#87ceeb",
      gray: "#808080",
      darkturquoise: "#00ced1",
      goldenrod: "#daa520",
      darkgreen: "#006400",
      floralwhite: "#fffaf0",
      darkviolet: "#9400d3",
      darkgray: "#a9a9a9",
      moccasin: "#ffe4b5",
      saddlebrown: "#8b4513",
      grey: "#808080",
      darkslateblue: "#483d8b",
      lightskyblue: "#87cefa",
      lightpink: "#ffb6c1",
      mediumvioletred: "#c71585",
      slategrey: "#708090",
      red: "#ff0000",
      deeppink: "#ff1493",
      limegreen: "#32cd32",
      darkmagenta: "#8b008b",
      palegoldenrod: "#eee8aa",
      plum: "#dda0dd",
      turquoise: "#40e0d0",
      lightgrey: "#d3d3d3",
      lightgoldenrodyellow: "#fafad2",
      darkgoldenrod: "#b8860b",
      lavender: "#e6e6fa",
      maroon: "#800000",
      yellowgreen: "#9acd32",
      sandybrown: "#f4a460",
      thistle: "#d8bfd8",
      violet: "#ee82ee",
      navy: "#000080",
      magenta: "#ff00ff",
      dimgrey: "#696969",
      tan: "#d2b48c",
      rosybrown: "#bc8f8f",
      olivedrab: "#6b8e23",
      blue: "#0000ff",
      lightblue: "#add8e6",
      ghostwhite: "#f8f8ff",
      honeydew: "#f0fff0",
      cornflowerblue: "#6495ed",
      slateblue: "#6a5acd",
      linen: "#faf0e6",
      darkblue: "#00008b",
      powderblue: "#b0e0e6",
      seagreen: "#2e8b57",
      darkkhaki: "#bdb76b",
      snow: "#fffafa",
      sienna: "#a0522d",
      mediumblue: "#0000cd",
      royalblue: "#4169e1",
      lightcyan: "#e0ffff",
      green: "#008000",
      mediumpurple: "#9370db",
      midnightblue: "#191970",
      cornsilk: "#fff8dc",
      paleturquoise: "#afeeee",
      bisque: "#ffe4c4",
      slategray: "#708090",
      darkcyan: "#008b8b",
      khaki: "#f0e68c",
      wheat: "#f5deb3",
      teal: "#008080",
      darkorchid: "#9932cc",
      deepskyblue: "#00bfff",
      salmon: "#fa8072",
      darkred: "#8b0000",
      steelblue: "#4682b4",
      palevioletred: "#db7093",
      lightslategray: "#778899",
      aliceblue: "#f0f8ff",
      lightslategrey: "#778899",
      lightgreen: "#90ee90",
      orchid: "#da70d6",
      gainsboro: "#dcdcdc",
      mediumseagreen: "#3cb371",
      lightgray: "#d3d3d3",
      mediumturquoise: "#48d1cc",
      lemonchiffon: "#fffacd",
      cadetblue: "#5f9ea0",
      lightyellow: "#ffffe0",
      lavenderblush: "#fff0f5",
      coral: "#ff7f50",
      purple: "#800080",
      aqua: "#00ffff",
      whitesmoke: "#f5f5f5",
      mediumslateblue: "#7b68ee",
      darkorange: "#ff8c00",
      mediumaquamarine: "#66cdaa",
      darksalmon: "#e9967a",
      beige: "#f5f5dc",
      blueviolet: "#8a2be2",
      azure: "#f0ffff",
      lightsteelblue: "#b0c4de",
      oldlace: "#fdf5e6",
      rebeccapurple: "#663399"
    };

    chroma.colors = colors = w3cx11;

    lab2rgb = function lab2rgb() {
      var a, args, b, g, l, r, x, y, z;
      args = unpack(arguments);
      l = args[0], a = args[1], b = args[2];
      y = (l + 16) / 116;
      x = isNaN(a) ? y : y + a / 500;
      z = isNaN(b) ? y : y - b / 200;
      y = LAB_CONSTANTS.Yn * lab_xyz(y);
      x = LAB_CONSTANTS.Xn * lab_xyz(x);
      z = LAB_CONSTANTS.Zn * lab_xyz(z);
      r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
      g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
      b = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
      r = limit(r, 0, 255);
      g = limit(g, 0, 255);
      b = limit(b, 0, 255);
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    xyz_rgb = function xyz_rgb(r) {
      return round(255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow(r, 1 / 2.4) - 0.055));
    };

    lab_xyz = function lab_xyz(t) {
      if (t > LAB_CONSTANTS.t1) {
        return t * t * t;
      } else {
        return LAB_CONSTANTS.t2 * (t - LAB_CONSTANTS.t0);
      }
    };

    LAB_CONSTANTS = {
      Kn: 18,
      Xn: 0.950470,
      Yn: 1,
      Zn: 1.088830,
      t0: 0.137931034,
      t1: 0.206896552,
      t2: 0.12841855,
      t3: 0.008856452
    };

    rgb2lab = function rgb2lab() {
      var b, g, r, ref, ref1, x, y, z;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      ref1 = rgb2xyz(r, g, b), x = ref1[0], y = ref1[1], z = ref1[2];
      return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
    };

    rgb_xyz = function rgb_xyz(r) {
      if ((r /= 255) <= 0.04045) {
        return r / 12.92;
      } else {
        return pow((r + 0.055) / 1.055, 2.4);
      }
    };

    xyz_lab = function xyz_lab(t) {
      if (t > LAB_CONSTANTS.t3) {
        return pow(t, 1 / 3);
      } else {
        return t / LAB_CONSTANTS.t2 + LAB_CONSTANTS.t0;
      }
    };

    rgb2xyz = function rgb2xyz() {
      var b, g, r, ref, x, y, z;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      r = rgb_xyz(r);
      g = rgb_xyz(g);
      b = rgb_xyz(b);
      x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / LAB_CONSTANTS.Xn);
      y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / LAB_CONSTANTS.Yn);
      z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / LAB_CONSTANTS.Zn);
      return [x, y, z];
    };

    chroma.lab = function () {
      return function (func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor(),
            result = func.apply(child, args);
        return Object(result) === result ? result : child;
      }(Color, slice.call(arguments).concat(['lab']), function () {});
    };

    _input.lab = lab2rgb;

    Color.prototype.lab = function () {
      return rgb2lab(this._rgb);
    };

    _bezier = function bezier(colors) {
      var I, I0, I1, c, lab0, lab1, lab2, lab3, ref, ref1, ref2;
      colors = function () {
        var len, o, results;
        results = [];
        for (o = 0, len = colors.length; o < len; o++) {
          c = colors[o];
          results.push(chroma(c));
        }
        return results;
      }();
      if (colors.length === 2) {
        ref = function () {
          var len, o, results;
          results = [];
          for (o = 0, len = colors.length; o < len; o++) {
            c = colors[o];
            results.push(c.lab());
          }
          return results;
        }(), lab0 = ref[0], lab1 = ref[1];
        I = function I(t) {
          var i, lab;
          lab = function () {
            var o, results;
            results = [];
            for (i = o = 0; o <= 2; i = ++o) {
              results.push(lab0[i] + t * (lab1[i] - lab0[i]));
            }
            return results;
          }();
          return chroma.lab.apply(chroma, lab);
        };
      } else if (colors.length === 3) {
        ref1 = function () {
          var len, o, results;
          results = [];
          for (o = 0, len = colors.length; o < len; o++) {
            c = colors[o];
            results.push(c.lab());
          }
          return results;
        }(), lab0 = ref1[0], lab1 = ref1[1], lab2 = ref1[2];
        I = function I(t) {
          var i, lab;
          lab = function () {
            var o, results;
            results = [];
            for (i = o = 0; o <= 2; i = ++o) {
              results.push((1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
            }
            return results;
          }();
          return chroma.lab.apply(chroma, lab);
        };
      } else if (colors.length === 4) {
        ref2 = function () {
          var len, o, results;
          results = [];
          for (o = 0, len = colors.length; o < len; o++) {
            c = colors[o];
            results.push(c.lab());
          }
          return results;
        }(), lab0 = ref2[0], lab1 = ref2[1], lab2 = ref2[2], lab3 = ref2[3];
        I = function I(t) {
          var i, lab;
          lab = function () {
            var o, results;
            results = [];
            for (i = o = 0; o <= 2; i = ++o) {
              results.push((1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
            }
            return results;
          }();
          return chroma.lab.apply(chroma, lab);
        };
      } else if (colors.length === 5) {
        I0 = _bezier(colors.slice(0, 3));
        I1 = _bezier(colors.slice(2, 5));
        I = function I(t) {
          if (t < 0.5) {
            return I0(t * 2);
          } else {
            return I1((t - 0.5) * 2);
          }
        };
      }
      return I;
    };

    chroma.bezier = function (colors) {
      var f;
      f = _bezier(colors);
      f.scale = function () {
        return chroma.scale(f);
      };
      return f;
    };

    /*
        chroma.js
    
        Copyright (c) 2011-2013, Gregor Aisch
        All rights reserved.
    
        Redistribution and use in source and binary forms, with or without
        modification, are permitted provided that the following conditions are met:
    
        * Redistributions of source code must retain the above copyright notice, this
          list of conditions and the following disclaimer.
    
        * Redistributions in binary form must reproduce the above copyright notice,
          this list of conditions and the following disclaimer in the documentation
          and/or other materials provided with the distribution.
    
        * The name Gregor Aisch may not be used to endorse or promote products
          derived from this software without specific prior written permission.
    
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
        AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
        IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
        DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
        INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
        BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
        DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
        OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
        NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
        EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    
        @source: https://github.com/gka/chroma.js
     */

    chroma.cubehelix = function (start, rotations, hue, gamma, lightness) {
      var dh, dl, f;
      if (start == null) {
        start = 300;
      }
      if (rotations == null) {
        rotations = -1.5;
      }
      if (hue == null) {
        hue = 1;
      }
      if (gamma == null) {
        gamma = 1;
      }
      if (lightness == null) {
        lightness = [0, 1];
      }
      dl = lightness[1] - lightness[0];
      dh = 0;
      f = function f(fract) {
        var a, amp, b, cos_a, g, h, l, r, sin_a;
        a = TWOPI * ((start + 120) / 360 + rotations * fract);
        l = pow(lightness[0] + dl * fract, gamma);
        h = dh !== 0 ? hue[0] + fract * dh : hue;
        amp = h * l * (1 - l) / 2;
        cos_a = cos(a);
        sin_a = sin(a);
        r = l + amp * (-0.14861 * cos_a + 1.78277 * sin_a);
        g = l + amp * (-0.29227 * cos_a - 0.90649 * sin_a);
        b = l + amp * (+1.97294 * cos_a);
        return chroma(clip_rgb([r * 255, g * 255, b * 255]));
      };
      f.start = function (s) {
        if (s == null) {
          return start;
        }
        start = s;
        return f;
      };
      f.rotations = function (r) {
        if (r == null) {
          return rotations;
        }
        rotations = r;
        return f;
      };
      f.gamma = function (g) {
        if (g == null) {
          return gamma;
        }
        gamma = g;
        return f;
      };
      f.hue = function (h) {
        if (h == null) {
          return hue;
        }
        hue = h;
        if (type(hue) === 'array') {
          dh = hue[1] - hue[0];
          if (dh === 0) {
            hue = hue[1];
          }
        } else {
          dh = 0;
        }
        return f;
      };
      f.lightness = function (h) {
        if (h == null) {
          return lightness;
        }
        lightness = h;
        if (type(lightness) === 'array') {
          dl = lightness[1] - lightness[0];
          if (dl === 0) {
            lightness = lightness[1];
          }
        } else {
          dl = 0;
        }
        return f;
      };
      f.scale = function () {
        return chroma.scale(f);
      };
      f.hue(hue);
      return f;
    };

    chroma.random = function () {
      var code, digits, i, o;
      digits = '0123456789abcdef';
      code = '#';
      for (i = o = 0; o < 6; i = ++o) {
        code += digits.charAt(floor(Math.random() * 16));
      }
      return new Color(code);
    };

    chroma.average = function (colors) {
      var a, b, c, g, l, len, o, r, rgba;
      r = g = b = a = 0;
      l = colors.length;
      for (o = 0, len = colors.length; o < len; o++) {
        c = colors[o];
        rgba = chroma(c).rgba();
        r += rgba[0];
        g += rgba[1];
        b += rgba[2];
        a += rgba[3];
      }
      return new Color(r / l, g / l, b / l, a / l);
    };

    _input.rgb = function () {
      var k, ref, results, v;
      ref = unpack(arguments);
      results = [];
      for (k in ref) {
        v = ref[k];
        results.push(v);
      }
      return results;
    };

    chroma.rgb = function () {
      return function (func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor(),
            result = func.apply(child, args);
        return Object(result) === result ? result : child;
      }(Color, slice.call(arguments).concat(['rgb']), function () {});
    };

    Color.prototype.rgb = function () {
      return this._rgb.slice(0, 3);
    };

    Color.prototype.rgba = function () {
      return this._rgb;
    };

    _guess_formats.push({
      p: 15,
      test: function test(n) {
        var a;
        a = unpack(arguments);
        if (type(a) === 'array' && a.length === 3) {
          return 'rgb';
        }
        if (a.length === 4 && type(a[3]) === "number" && a[3] >= 0 && a[3] <= 1) {
          return 'rgb';
        }
      }
    });

    hex2rgb = function hex2rgb(hex) {
      var a, b, g, r, rgb, u;
      if (hex.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
        if (hex.length === 4 || hex.length === 7) {
          hex = hex.substr(1);
        }
        if (hex.length === 3) {
          hex = hex.split("");
          hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
        }
        u = parseInt(hex, 16);
        r = u >> 16;
        g = u >> 8 & 0xFF;
        b = u & 0xFF;
        return [r, g, b, 1];
      }
      if (hex.match(/^#?([A-Fa-f0-9]{8})$/)) {
        if (hex.length === 9) {
          hex = hex.substr(1);
        }
        u = parseInt(hex, 16);
        r = u >> 24 & 0xFF;
        g = u >> 16 & 0xFF;
        b = u >> 8 & 0xFF;
        a = round((u & 0xFF) / 0xFF * 100) / 100;
        return [r, g, b, a];
      }
      if (_input.css != null && (rgb = _input.css(hex))) {
        return rgb;
      }
      throw "unknown color: " + hex;
    };

    rgb2hex = function rgb2hex(channels, mode) {
      var a, b, g, hxa, r, str, u;
      if (mode == null) {
        mode = 'rgb';
      }
      r = channels[0], g = channels[1], b = channels[2], a = channels[3];
      u = r << 16 | g << 8 | b;
      str = "000000" + u.toString(16);
      str = str.substr(str.length - 6);
      hxa = '0' + round(a * 255).toString(16);
      hxa = hxa.substr(hxa.length - 2);
      return "#" + function () {
        switch (mode.toLowerCase()) {
          case 'rgba':
            return str + hxa;
          case 'argb':
            return hxa + str;
          default:
            return str;
        }
      }();
    };

    _input.hex = function (h) {
      return hex2rgb(h);
    };

    chroma.hex = function () {
      return function (func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor(),
            result = func.apply(child, args);
        return Object(result) === result ? result : child;
      }(Color, slice.call(arguments).concat(['hex']), function () {});
    };

    Color.prototype.hex = function (mode) {
      if (mode == null) {
        mode = 'rgb';
      }
      return rgb2hex(this._rgb, mode);
    };

    _guess_formats.push({
      p: 10,
      test: function test(n) {
        if (arguments.length === 1 && type(n) === "string") {
          return 'hex';
        }
      }
    });

    hsl2rgb = function hsl2rgb() {
      var args, b, c, g, h, i, l, o, r, ref, s, t1, t2, t3;
      args = unpack(arguments);
      h = args[0], s = args[1], l = args[2];
      if (s === 0) {
        r = g = b = l * 255;
      } else {
        t3 = [0, 0, 0];
        c = [0, 0, 0];
        t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
        t1 = 2 * l - t2;
        h /= 360;
        t3[0] = h + 1 / 3;
        t3[1] = h;
        t3[2] = h - 1 / 3;
        for (i = o = 0; o <= 2; i = ++o) {
          if (t3[i] < 0) {
            t3[i] += 1;
          }
          if (t3[i] > 1) {
            t3[i] -= 1;
          }
          if (6 * t3[i] < 1) {
            c[i] = t1 + (t2 - t1) * 6 * t3[i];
          } else if (2 * t3[i] < 1) {
            c[i] = t2;
          } else if (3 * t3[i] < 2) {
            c[i] = t1 + (t2 - t1) * (2 / 3 - t3[i]) * 6;
          } else {
            c[i] = t1;
          }
        }
        ref = [round(c[0] * 255), round(c[1] * 255), round(c[2] * 255)], r = ref[0], g = ref[1], b = ref[2];
      }
      if (args.length > 3) {
        return [r, g, b, args[3]];
      } else {
        return [r, g, b];
      }
    };

    rgb2hsl = function rgb2hsl(r, g, b) {
      var h, l, min, ref, s;
      if (r !== void 0 && r.length >= 3) {
        ref = r, r = ref[0], g = ref[1], b = ref[2];
      }
      r /= 255;
      g /= 255;
      b /= 255;
      min = Math.min(r, g, b);
      max = Math.max(r, g, b);
      l = (max + min) / 2;
      if (max === min) {
        s = 0;
        h = Number.NaN;
      } else {
        s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
      }
      if (r === max) {
        h = (g - b) / (max - min);
      } else if (g === max) {
        h = 2 + (b - r) / (max - min);
      } else if (b === max) {
        h = 4 + (r - g) / (max - min);
      }
      h *= 60;
      if (h < 0) {
        h += 360;
      }
      return [h, s, l];
    };

    chroma.hsl = function () {
      return function (func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor(),
            result = func.apply(child, args);
        return Object(result) === result ? result : child;
      }(Color, slice.call(arguments).concat(['hsl']), function () {});
    };

    _input.hsl = hsl2rgb;

    Color.prototype.hsl = function () {
      return rgb2hsl(this._rgb);
    };

    hsv2rgb = function hsv2rgb() {
      var args, b, f, g, h, i, p, q, r, ref, ref1, ref2, ref3, ref4, ref5, s, t, v;
      args = unpack(arguments);
      h = args[0], s = args[1], v = args[2];
      v *= 255;
      if (s === 0) {
        r = g = b = v;
      } else {
        if (h === 360) {
          h = 0;
        }
        if (h > 360) {
          h -= 360;
        }
        if (h < 0) {
          h += 360;
        }
        h /= 60;
        i = floor(h);
        f = h - i;
        p = v * (1 - s);
        q = v * (1 - s * f);
        t = v * (1 - s * (1 - f));
        switch (i) {
          case 0:
            ref = [v, t, p], r = ref[0], g = ref[1], b = ref[2];
            break;
          case 1:
            ref1 = [q, v, p], r = ref1[0], g = ref1[1], b = ref1[2];
            break;
          case 2:
            ref2 = [p, v, t], r = ref2[0], g = ref2[1], b = ref2[2];
            break;
          case 3:
            ref3 = [p, q, v], r = ref3[0], g = ref3[1], b = ref3[2];
            break;
          case 4:
            ref4 = [t, p, v], r = ref4[0], g = ref4[1], b = ref4[2];
            break;
          case 5:
            ref5 = [v, p, q], r = ref5[0], g = ref5[1], b = ref5[2];
        }
      }
      r = round(r);
      g = round(g);
      b = round(b);
      return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    rgb2hsv = function rgb2hsv() {
      var b, delta, g, h, min, r, ref, s, v;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      min = Math.min(r, g, b);
      max = Math.max(r, g, b);
      delta = max - min;
      v = max / 255.0;
      if (max === 0) {
        h = Number.NaN;
        s = 0;
      } else {
        s = delta / max;
        if (r === max) {
          h = (g - b) / delta;
        }
        if (g === max) {
          h = 2 + (b - r) / delta;
        }
        if (b === max) {
          h = 4 + (r - g) / delta;
        }
        h *= 60;
        if (h < 0) {
          h += 360;
        }
      }
      return [h, s, v];
    };

    chroma.hsv = function () {
      return function (func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor(),
            result = func.apply(child, args);
        return Object(result) === result ? result : child;
      }(Color, slice.call(arguments).concat(['hsv']), function () {});
    };

    _input.hsv = hsv2rgb;

    Color.prototype.hsv = function () {
      return rgb2hsv(this._rgb);
    };

    num2rgb = function num2rgb(num) {
      var b, g, r;
      if (type(num) === "number" && num >= 0 && num <= 0xFFFFFF) {
        r = num >> 16;
        g = num >> 8 & 0xFF;
        b = num & 0xFF;
        return [r, g, b, 1];
      }
      console.warn("unknown num color: " + num);
      return [0, 0, 0, 1];
    };

    rgb2num = function rgb2num() {
      var b, g, r, ref;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      return (r << 16) + (g << 8) + b;
    };

    chroma.num = function (num) {
      return new Color(num, 'num');
    };

    Color.prototype.num = function (mode) {
      if (mode == null) {
        mode = 'rgb';
      }
      return rgb2num(this._rgb, mode);
    };

    _input.num = num2rgb;

    _guess_formats.push({
      p: 10,
      test: function test(n) {
        if (arguments.length === 1 && type(n) === "number" && n >= 0 && n <= 0xFFFFFF) {
          return 'num';
        }
      }
    });

    css2rgb = function css2rgb(css) {
      var aa, ab, hsl, i, m, o, rgb, w;
      css = css.toLowerCase();
      if (chroma.colors != null && chroma.colors[css]) {
        return hex2rgb(chroma.colors[css]);
      }
      if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
        rgb = m.slice(1, 4);
        for (i = o = 0; o <= 2; i = ++o) {
          rgb[i] = +rgb[i];
        }
        rgb[3] = 1;
      } else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
        rgb = m.slice(1, 5);
        for (i = w = 0; w <= 3; i = ++w) {
          rgb[i] = +rgb[i];
        }
      } else if (m = css.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
        rgb = m.slice(1, 4);
        for (i = aa = 0; aa <= 2; i = ++aa) {
          rgb[i] = round(rgb[i] * 2.55);
        }
        rgb[3] = 1;
      } else if (m = css.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
        rgb = m.slice(1, 5);
        for (i = ab = 0; ab <= 2; i = ++ab) {
          rgb[i] = round(rgb[i] * 2.55);
        }
        rgb[3] = +rgb[3];
      } else if (m = css.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
        hsl = m.slice(1, 4);
        hsl[1] *= 0.01;
        hsl[2] *= 0.01;
        rgb = hsl2rgb(hsl);
        rgb[3] = 1;
      } else if (m = css.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
        hsl = m.slice(1, 4);
        hsl[1] *= 0.01;
        hsl[2] *= 0.01;
        rgb = hsl2rgb(hsl);
        rgb[3] = +m[4];
      }
      return rgb;
    };

    rgb2css = function rgb2css(rgba) {
      var mode;
      mode = rgba[3] < 1 ? 'rgba' : 'rgb';
      if (mode === 'rgb') {
        return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ')';
      } else if (mode === 'rgba') {
        return mode + '(' + rgba.slice(0, 3).map(round).join(',') + ',' + rgba[3] + ')';
      } else {}
    };

    rnd = function rnd(a) {
      return round(a * 100) / 100;
    };

    hsl2css = function hsl2css(hsl, alpha) {
      var mode;
      mode = alpha < 1 ? 'hsla' : 'hsl';
      hsl[0] = rnd(hsl[0] || 0);
      hsl[1] = rnd(hsl[1] * 100) + '%';
      hsl[2] = rnd(hsl[2] * 100) + '%';
      if (mode === 'hsla') {
        hsl[3] = alpha;
      }
      return mode + '(' + hsl.join(',') + ')';
    };

    _input.css = function (h) {
      return css2rgb(h);
    };

    chroma.css = function () {
      return function (func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor(),
            result = func.apply(child, args);
        return Object(result) === result ? result : child;
      }(Color, slice.call(arguments).concat(['css']), function () {});
    };

    Color.prototype.css = function (mode) {
      if (mode == null) {
        mode = 'rgb';
      }
      if (mode.slice(0, 3) === 'rgb') {
        return rgb2css(this._rgb);
      } else if (mode.slice(0, 3) === 'hsl') {
        return hsl2css(this.hsl(), this.alpha());
      }
    };

    _input.named = function (name) {
      return hex2rgb(w3cx11[name]);
    };

    _guess_formats.push({
      p: 20,
      test: function test(n) {
        if (arguments.length === 1 && w3cx11[n] != null) {
          return 'named';
        }
      }
    });

    Color.prototype.name = function (n) {
      var h, k;
      if (arguments.length) {
        if (w3cx11[n]) {
          this._rgb = hex2rgb(w3cx11[n]);
        }
        this._rgb[3] = 1;
        
      }
      h = this.hex();
      for (k in w3cx11) {
        if (h === w3cx11[k]) {
          return k;
        }
      }
      return h;
    };

    lch2lab = function lch2lab() {

      /*
      Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
      These formulas were invented by David Dalrymple to obtain maximum contrast without going
      out of gamut if the parameters are in the range 0-1.
      
      A saturation multiplier was added by Gregor Aisch
       */
      var c, h, l, ref;
      ref = unpack(arguments), l = ref[0], c = ref[1], h = ref[2];
      h = h * DEG2RAD;
      return [l, cos(h) * c, sin(h) * c];
    };

    lch2rgb = function lch2rgb() {
      var L, a, args, b, c, g, h, l, r, ref, ref1;
      args = unpack(arguments);
      l = args[0], c = args[1], h = args[2];
      ref = lch2lab(l, c, h), L = ref[0], a = ref[1], b = ref[2];
      ref1 = lab2rgb(L, a, b), r = ref1[0], g = ref1[1], b = ref1[2];
      return [limit(r, 0, 255), limit(g, 0, 255), limit(b, 0, 255), args.length > 3 ? args[3] : 1];
    };

    lab2lch = function lab2lch() {
      var a, b, c, h, l, ref;
      ref = unpack(arguments), l = ref[0], a = ref[1], b = ref[2];
      c = sqrt(a * a + b * b);
      h = (atan2(b, a) * RAD2DEG + 360) % 360;
      if (round(c * 10000) === 0) {
        h = Number.NaN;
      }
      return [l, c, h];
    };

    rgb2lch = function rgb2lch() {
      var a, b, g, l, r, ref, ref1;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      ref1 = rgb2lab(r, g, b), l = ref1[0], a = ref1[1], b = ref1[2];
      return lab2lch(l, a, b);
    };

    chroma.lch = function () {
      var args;
      args = unpack(arguments);
      return new Color(args, 'lch');
    };

    chroma.hcl = function () {
      var args;
      args = unpack(arguments);
      return new Color(args, 'hcl');
    };

    _input.lch = lch2rgb;

    _input.hcl = function () {
      var c, h, l, ref;
      ref = unpack(arguments), h = ref[0], c = ref[1], l = ref[2];
      return lch2rgb([l, c, h]);
    };

    Color.prototype.lch = function () {
      return rgb2lch(this._rgb);
    };

    Color.prototype.hcl = function () {
      return rgb2lch(this._rgb).reverse();
    };

    rgb2cmyk = function rgb2cmyk(mode) {
      var b, c, f, g, k, m, r, ref, y;
      if (mode == null) {
        mode = 'rgb';
      }
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      r = r / 255;
      g = g / 255;
      b = b / 255;
      k = 1 - Math.max(r, Math.max(g, b));
      f = k < 1 ? 1 / (1 - k) : 0;
      c = (1 - r - k) * f;
      m = (1 - g - k) * f;
      y = (1 - b - k) * f;
      return [c, m, y, k];
    };

    cmyk2rgb = function cmyk2rgb() {
      var alpha, args, b, c, g, k, m, r, y;
      args = unpack(arguments);
      c = args[0], m = args[1], y = args[2], k = args[3];
      alpha = args.length > 4 ? args[4] : 1;
      if (k === 1) {
        return [0, 0, 0, alpha];
      }
      r = c >= 1 ? 0 : round(255 * (1 - c) * (1 - k));
      g = m >= 1 ? 0 : round(255 * (1 - m) * (1 - k));
      b = y >= 1 ? 0 : round(255 * (1 - y) * (1 - k));
      return [r, g, b, alpha];
    };

    _input.cmyk = function () {
      return cmyk2rgb(unpack(arguments));
    };

    chroma.cmyk = function () {
      return function (func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor(),
            result = func.apply(child, args);
        return Object(result) === result ? result : child;
      }(Color, slice.call(arguments).concat(['cmyk']), function () {});
    };

    Color.prototype.cmyk = function () {
      return rgb2cmyk(this._rgb);
    };

    _input.gl = function () {
      var i, k, o, rgb, v;
      rgb = function () {
        var ref, results;
        ref = unpack(arguments);
        results = [];
        for (k in ref) {
          v = ref[k];
          results.push(v);
        }
        return results;
      }.apply(this, arguments);
      for (i = o = 0; o <= 2; i = ++o) {
        rgb[i] *= 255;
      }
      return rgb;
    };

    chroma.gl = function () {
      return function (func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor(),
            result = func.apply(child, args);
        return Object(result) === result ? result : child;
      }(Color, slice.call(arguments).concat(['gl']), function () {});
    };

    Color.prototype.gl = function () {
      var rgb;
      rgb = this._rgb;
      return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
    };

    rgb2luminance = function rgb2luminance(r, g, b) {
      var ref;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      r = luminance_x(r);
      g = luminance_x(g);
      b = luminance_x(b);
      return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    luminance_x = function luminance_x(x) {
      x /= 255;
      if (x <= 0.03928) {
        return x / 12.92;
      } else {
        return pow((x + 0.055) / 1.055, 2.4);
      }
    };

    _interpolators = [];

    interpolate = function interpolate(col1, col2, f, m) {
      var interpol, len, o, res;
      if (f == null) {
        f = 0.5;
      }
      if (m == null) {
        m = 'rgb';
      }

      /*
      interpolates between colors
      f = 0 --> me
      f = 1 --> col
       */
      if (type(col1) !== 'object') {
        col1 = chroma(col1);
      }
      if (type(col2) !== 'object') {
        col2 = chroma(col2);
      }
      for (o = 0, len = _interpolators.length; o < len; o++) {
        interpol = _interpolators[o];
        if (m === interpol[0]) {
          res = interpol[1](col1, col2, f, m);
          break;
        }
      }
      if (res == null) {
        throw "color mode " + m + " is not supported";
      }
      res.alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
      return res;
    };

    chroma.interpolate = interpolate;

    Color.prototype.interpolate = function (col2, f, m) {
      return interpolate(this, col2, f, m);
    };

    chroma.mix = interpolate;

    Color.prototype.mix = Color.prototype.interpolate;

    interpolate_rgb = function interpolate_rgb(col1, col2, f, m) {
      var xyz0, xyz1;
      xyz0 = col1._rgb;
      xyz1 = col2._rgb;
      return new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
    };

    _interpolators.push(['rgb', interpolate_rgb]);

    Color.prototype.luminance = function (lum, mode) {
      var cur_lum, eps, max_iter, _test;
      if (mode == null) {
        mode = 'rgb';
      }
      if (!arguments.length) {
        return rgb2luminance(this._rgb);
      }
      if (lum === 0) {
        this._rgb = [0, 0, 0, this._rgb[3]];
      } else if (lum === 1) {
        this._rgb = [255, 255, 255, this._rgb[3]];
      } else {
        eps = 1e-7;
        max_iter = 20;
        _test = function test(l, h) {
          var lm, m;
          m = l.interpolate(h, 0.5, mode);
          lm = m.luminance();
          if (Math.abs(lum - lm) < eps || !max_iter--) {
            return m;
          }
          if (lm > lum) {
            return _test(l, m);
          }
          return _test(m, h);
        };
        cur_lum = rgb2luminance(this._rgb);
        this._rgb = (cur_lum > lum ? _test(chroma('black'), this) : _test(this, chroma('white'))).rgba();
      }
      return this;
    };

    temperature2rgb = function temperature2rgb(kelvin) {
      var b, g, r, temp;
      temp = kelvin / 100;
      if (temp < 66) {
        r = 255;
        g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
        b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
      } else {
        r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
        g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
        b = 255;
      }
      return clip_rgb([r, g, b]);
    };

    rgb2temperature = function rgb2temperature() {
      var b, eps, g, maxTemp, minTemp, r, ref, rgb, temp;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      minTemp = 1000;
      maxTemp = 40000;
      eps = 0.4;
      while (maxTemp - minTemp > eps) {
        temp = (maxTemp + minTemp) * 0.5;
        rgb = temperature2rgb(temp);
        if (rgb[2] / rgb[0] >= b / r) {
          maxTemp = temp;
        } else {
          minTemp = temp;
        }
      }
      return round(temp);
    };

    chroma.temperature = chroma.kelvin = function () {
      return function (func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor(),
            result = func.apply(child, args);
        return Object(result) === result ? result : child;
      }(Color, slice.call(arguments).concat(['temperature']), function () {});
    };

    _input.temperature = _input.kelvin = _input.K = temperature2rgb;

    Color.prototype.temperature = function () {
      return rgb2temperature(this._rgb);
    };

    Color.prototype.kelvin = Color.prototype.temperature;

    chroma.contrast = function (a, b) {
      var l1, l2, ref, ref1;
      if ((ref = type(a)) === 'string' || ref === 'number') {
        a = new Color(a);
      }
      if ((ref1 = type(b)) === 'string' || ref1 === 'number') {
        b = new Color(b);
      }
      l1 = a.luminance();
      l2 = b.luminance();
      if (l1 > l2) {
        return (l1 + 0.05) / (l2 + 0.05);
      } else {
        return (l2 + 0.05) / (l1 + 0.05);
      }
    };

    Color.prototype.get = function (modechan) {
      var channel, i, me, mode, ref, src;
      me = this;
      ref = modechan.split('.'), mode = ref[0], channel = ref[1];
      src = me[mode]();
      if (channel) {
        i = mode.indexOf(channel);
        if (i > -1) {
          return src[i];
        } else {
          return console.warn('unknown channel ' + channel + ' in mode ' + mode);
        }
      } else {
        return src;
      }
    };

    Color.prototype.set = function (modechan, value) {
      var channel, i, me, mode, ref, src;
      me = this;
      ref = modechan.split('.'), mode = ref[0], channel = ref[1];
      if (channel) {
        src = me[mode]();
        i = mode.indexOf(channel);
        if (i > -1) {
          if (type(value) === 'string') {
            switch (value.charAt(0)) {
              case '+':
                src[i] += +value;
                break;
              case '-':
                src[i] += +value;
                break;
              case '*':
                src[i] *= +value.substr(1);
                break;
              case '/':
                src[i] /= +value.substr(1);
                break;
              default:
                src[i] = +value;
            }
          } else {
            src[i] = value;
          }
        } else {
          console.warn('unknown channel ' + channel + ' in mode ' + mode);
        }
      } else {
        src = value;
      }
      me._rgb = chroma(src, mode).alpha(me.alpha())._rgb;
      return me;
    };

    Color.prototype.darken = function (amount) {
      var lab, me;
      if (amount == null) {
        amount = 1;
      }
      me = this;
      lab = me.lab();
      lab[0] -= LAB_CONSTANTS.Kn * amount;
      return chroma.lab(lab).alpha(me.alpha());
    };

    Color.prototype.brighten = function (amount) {
      if (amount == null) {
        amount = 1;
      }
      return this.darken(-amount);
    };

    Color.prototype.darker = Color.prototype.darken;

    Color.prototype.brighter = Color.prototype.brighten;

    Color.prototype.saturate = function (amount) {
      var lch, me;
      if (amount == null) {
        amount = 1;
      }
      me = this;
      lch = me.lch();
      lch[1] += amount * LAB_CONSTANTS.Kn;
      if (lch[1] < 0) {
        lch[1] = 0;
      }
      return chroma.lch(lch).alpha(me.alpha());
    };

    Color.prototype.desaturate = function (amount) {
      if (amount == null) {
        amount = 1;
      }
      return this.saturate(-amount);
    };

    Color.prototype.premultiply = function () {
      var a, rgb;
      rgb = this.rgb();
      a = this.alpha();
      return chroma(rgb[0] * a, rgb[1] * a, rgb[2] * a, a);
    };

    _blend = function blend(bottom, top, mode) {
      if (!_blend[mode]) {
        throw 'unknown blend mode ' + mode;
      }
      return _blend[mode](bottom, top);
    };

    blend_f = function blend_f(f) {
      return function (bottom, top) {
        var c0, c1;
        c0 = chroma(top).rgb();
        c1 = chroma(bottom).rgb();
        return chroma(f(c0, c1), 'rgb');
      };
    };

    each = function each(f) {
      return function (c0, c1) {
        var i, o, out;
        out = [];
        for (i = o = 0; o <= 3; i = ++o) {
          out[i] = f(c0[i], c1[i]);
        }
        return out;
      };
    };

    normal = function normal(a, b) {
      return a;
    };

    multiply = function multiply(a, b) {
      return a * b / 255;
    };

    darken = function darken(a, b) {
      if (a > b) {
        return b;
      } else {
        return a;
      }
    };

    lighten = function lighten(a, b) {
      if (a > b) {
        return a;
      } else {
        return b;
      }
    };

    screen = function screen(a, b) {
      return 255 * (1 - (1 - a / 255) * (1 - b / 255));
    };

    overlay = function overlay(a, b) {
      if (b < 128) {
        return 2 * a * b / 255;
      } else {
        return 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255));
      }
    };

    burn = function burn(a, b) {
      return 255 * (1 - (1 - b / 255) / (a / 255));
    };

    dodge = function dodge(a, b) {
      if (a === 255) {
        return 255;
      }
      a = 255 * (b / 255) / (1 - a / 255);
      if (a > 255) {
        return 255;
      } else {
        return a;
      }
    };

    _blend.normal = blend_f(each(normal));

    _blend.multiply = blend_f(each(multiply));

    _blend.screen = blend_f(each(screen));

    _blend.overlay = blend_f(each(overlay));

    _blend.darken = blend_f(each(darken));

    _blend.lighten = blend_f(each(lighten));

    _blend.dodge = blend_f(each(dodge));

    _blend.burn = blend_f(each(burn));

    chroma.blend = _blend;

    chroma.analyze = function (data) {
      var len, o, r, val;
      r = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      for (o = 0, len = data.length; o < len; o++) {
        val = data[o];
        if (val != null && !isNaN(val)) {
          r.values.push(val);
          r.sum += val;
          if (val < r.min) {
            r.min = val;
          }
          if (val > r.max) {
            r.max = val;
          }
          r.count += 1;
        }
      }
      r.domain = [r.min, r.max];
      r.limits = function (mode, num) {
        return chroma.limits(r, mode, num);
      };
      return r;
    };

    chroma.scale = function (colors, positions) {
      var _classes, _colorCache, _colors, _correctLightness, _domain, _fixed, _max, _min, _mode, _nacol, _out, _padding, _pos, _spread, classifyValue, f, getClass, getColor, resetCache, setColors, tmap;
      _mode = 'rgb';
      _nacol = chroma('#ccc');
      _spread = 0;
      _domain = [0, 1];
      _pos = [];
      _padding = [0, 0];
      _classes = false;
      _colors = [];
      _out = false;
      _min = 0;
      _max = 1;
      _correctLightness = false;
      _colorCache = {};
      setColors = function setColors(colors) {
        var c, col, o, ref, ref1, ref2, w;
        if (colors == null) {
          colors = ['#fff', '#000'];
        }
        if (colors != null && type(colors) === 'string' && ((ref = chroma.brewer) != null ? ref[colors] : void 0) != null) {
          colors = chroma.brewer[colors];
        }
        if (type(colors) === 'array') {
          colors = colors.slice(0);
          for (c = o = 0, ref1 = colors.length - 1; 0 <= ref1 ? o <= ref1 : o >= ref1; c = 0 <= ref1 ? ++o : --o) {
            col = colors[c];
            if (type(col) === "string") {
              colors[c] = chroma(col);
            }
          }
          _pos.length = 0;
          for (c = w = 0, ref2 = colors.length - 1; 0 <= ref2 ? w <= ref2 : w >= ref2; c = 0 <= ref2 ? ++w : --w) {
            _pos.push(c / (colors.length - 1));
          }
        }
        resetCache();
        return _colors = colors;
      };
      getClass = function getClass(value) {
        var i, n;
        if (_classes != null) {
          n = _classes.length - 1;
          i = 0;
          while (i < n && value >= _classes[i]) {
            i++;
          }
          return i - 1;
        }
        return 0;
      };
      tmap = function tmap(t) {
        return t;
      };
      getColor = function getColor(val, bypassMap) {
        var c, col, i, k, o, p, ref, t;
        if (bypassMap == null) {
          bypassMap = false;
        }
        if (isNaN(val)) {
          return _nacol;
        }
        if (!bypassMap) {
          if (_classes && _classes.length > 2) {
            c = getClass(val);
            t = c / (_classes.length - 2);
            t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
          } else if (_max !== _min) {
            t = (val - _min) / (_max - _min);
            t = _padding[0] + t * (1 - _padding[0] - _padding[1]);
            t = Math.min(1, Math.max(0, t));
          } else {
            t = 1;
          }
        } else {
          t = val;
        }
        if (!bypassMap) {
          t = tmap(t);
        }
        k = Math.floor(t * 10000);
        if (_colorCache[k]) {
          col = _colorCache[k];
        } else {
          if (type(_colors) === 'array') {
            for (i = o = 0, ref = _pos.length - 1; 0 <= ref ? o <= ref : o >= ref; i = 0 <= ref ? ++o : --o) {
              p = _pos[i];
              if (t <= p) {
                col = _colors[i];
                break;
              }
              if (t >= p && i === _pos.length - 1) {
                col = _colors[i];
                break;
              }
              if (t > p && t < _pos[i + 1]) {
                t = (t - p) / (_pos[i + 1] - p);
                col = chroma.interpolate(_colors[i], _colors[i + 1], t, _mode);
                break;
              }
            }
          } else if (type(_colors) === 'function') {
            col = _colors(t);
          }
          _colorCache[k] = col;
        }
        return col;
      };
      resetCache = function resetCache() {
        return _colorCache = {};
      };
      setColors(colors);
      f = function f(v) {
        var c;
        c = chroma(getColor(v));
        if (_out && c[_out]) {
          return c[_out]();
        } else {
          return c;
        }
      };
      f.classes = function (classes) {
        var d;
        if (classes != null) {
          if (type(classes) === 'array') {
            _classes = classes;
            _domain = [classes[0], classes[classes.length - 1]];
          } else {
            d = chroma.analyze(_domain);
            if (classes === 0) {
              _classes = [d.min, d.max];
            } else {
              _classes = chroma.limits(d, 'e', classes);
            }
          }
          return f;
        }
        return _classes;
      };
      f.domain = function (domain) {
        var c, d, k, len, o, ref, w;
        if (!arguments.length) {
          return _domain;
        }
        _min = domain[0];
        _max = domain[domain.length - 1];
        _pos = [];
        k = _colors.length;
        if (domain.length === k && _min !== _max) {
          for (o = 0, len = domain.length; o < len; o++) {
            d = domain[o];
            _pos.push((d - _min) / (_max - _min));
          }
        } else {
          for (c = w = 0, ref = k - 1; 0 <= ref ? w <= ref : w >= ref; c = 0 <= ref ? ++w : --w) {
            _pos.push(c / (k - 1));
          }
        }
        _domain = [_min, _max];
        return f;
      };
      f.mode = function (_m) {
        if (!arguments.length) {
          return _mode;
        }
        _mode = _m;
        resetCache();
        return f;
      };
      f.range = function (colors, _pos) {
        setColors(colors, _pos);
        return f;
      };
      f.out = function (_o) {
        _out = _o;
        return f;
      };
      f.spread = function (val) {
        if (!arguments.length) {
          return _spread;
        }
        _spread = val;
        return f;
      };
      f.correctLightness = function (v) {
        if (v == null) {
          v = true;
        }
        _correctLightness = v;
        resetCache();
        if (_correctLightness) {
          tmap = function tmap(t) {
            var L0, L1, L_actual, L_diff, L_ideal, max_iter, pol, t0, t1;
            L0 = getColor(0, true).lab()[0];
            L1 = getColor(1, true).lab()[0];
            pol = L0 > L1;
            L_actual = getColor(t, true).lab()[0];
            L_ideal = L0 + (L1 - L0) * t;
            L_diff = L_actual - L_ideal;
            t0 = 0;
            t1 = 1;
            max_iter = 20;
            while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
              (function () {
                if (pol) {
                  L_diff *= -1;
                }
                if (L_diff < 0) {
                  t0 = t;
                  t += (t1 - t) * 0.5;
                } else {
                  t1 = t;
                  t += (t0 - t) * 0.5;
                }
                L_actual = getColor(t, true).lab()[0];
                return L_diff = L_actual - L_ideal;
              })();
            }
            return t;
          };
        } else {
          tmap = function tmap(t) {
            return t;
          };
        }
        return f;
      };
      f.padding = function (p) {
        if (p != null) {
          if (type(p) === 'number') {
            p = [p, p];
          }
          _padding = p;
          return f;
        } else {
          return _padding;
        }
      };
      f.colors = function () {
        var dd, dm, i, numColors, o, out, ref, results, samples, w;
        numColors = 0;
        out = 'hex';
        if (arguments.length === 1) {
          if (type(arguments[0]) === 'string') {
            out = arguments[0];
          } else {
            numColors = arguments[0];
          }
        }
        if (arguments.length === 2) {
          numColors = arguments[0], out = arguments[1];
        }
        if (numColors) {
          dm = _domain[0];
          dd = _domain[1] - dm;
          return function () {
            results = [];
            for (var o = 0; 0 <= numColors ? o < numColors : o > numColors; 0 <= numColors ? o++ : o--) {
              results.push(o);
            }
            return results;
          }.apply(this).map(function (i) {
            return f(dm + i / (numColors - 1) * dd)[out]();
          });
        }
        colors = [];
        samples = [];
        if (_classes && _classes.length > 2) {
          for (i = w = 1, ref = _classes.length; 1 <= ref ? w < ref : w > ref; i = 1 <= ref ? ++w : --w) {
            samples.push((_classes[i - 1] + _classes[i]) * 0.5);
          }
        } else {
          samples = _domain;
        }
        return samples.map(function (v) {
          return f(v)[out]();
        });
      };
      return f;
    };

    if (chroma.scales == null) {
      chroma.scales = {};
    }

    chroma.scales.cool = function () {
      return chroma.scale([chroma.hsl(180, 1, .9), chroma.hsl(250, .7, .4)]);
    };

    chroma.scales.hot = function () {
      return chroma.scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb');
    };

    chroma.analyze = function (data, key, filter) {
      var add, k, len, o, r, val, visit;
      r = {
        min: Number.MAX_VALUE,
        max: Number.MAX_VALUE * -1,
        sum: 0,
        values: [],
        count: 0
      };
      if (filter == null) {
        filter = function filter() {
          return true;
        };
      }
      add = function add(val) {
        if (val != null && !isNaN(val)) {
          r.values.push(val);
          r.sum += val;
          if (val < r.min) {
            r.min = val;
          }
          if (val > r.max) {
            r.max = val;
          }
          r.count += 1;
        }
      };
      visit = function visit(val, k) {
        if (filter(val, k)) {
          if (key != null && type(key) === 'function') {
            return add(key(val));
          } else if (key != null && type(key) === 'string' || type(key) === 'number') {
            return add(val[key]);
          } else {
            return add(val);
          }
        }
      };
      if (type(data) === 'array') {
        for (o = 0, len = data.length; o < len; o++) {
          val = data[o];
          visit(val);
        }
      } else {
        for (k in data) {
          val = data[k];
          visit(val, k);
        }
      }
      r.domain = [r.min, r.max];
      r.limits = function (mode, num) {
        return chroma.limits(r, mode, num);
      };
      return r;
    };

    chroma.limits = function (data, mode, num) {
      var aa, ab, ac, ad, ae, af, ag, ah, ai, aj, ak, al, am, assignments, best, centroids, cluster, clusterSizes, dist, i, j, kClusters, limits, max_log, min, min_log, mindist, n, nb_iters, newCentroids, o, p, pb, pr, ref, ref1, ref10, ref11, ref12, ref13, ref14, ref2, ref3, ref4, ref5, ref6, ref7, ref8, ref9, repeat, sum, tmpKMeansBreaks, value, values, w;
      if (mode == null) {
        mode = 'equal';
      }
      if (num == null) {
        num = 7;
      }
      if (type(data) === 'array') {
        data = chroma.analyze(data);
      }
      min = data.min;
      max = data.max;
      sum = data.sum;
      values = data.values.sort(function (a, b) {
        return a - b;
      });
      limits = [];
      if (mode.substr(0, 1) === 'c') {
        limits.push(min);
        limits.push(max);
      }
      if (mode.substr(0, 1) === 'e') {
        limits.push(min);
        for (i = o = 1, ref = num - 1; 1 <= ref ? o <= ref : o >= ref; i = 1 <= ref ? ++o : --o) {
          limits.push(min + i / num * (max - min));
        }
        limits.push(max);
      } else if (mode.substr(0, 1) === 'l') {
        if (min <= 0) {
          throw 'Logarithmic scales are only possible for values > 0';
        }
        min_log = Math.LOG10E * log(min);
        max_log = Math.LOG10E * log(max);
        limits.push(min);
        for (i = w = 1, ref1 = num - 1; 1 <= ref1 ? w <= ref1 : w >= ref1; i = 1 <= ref1 ? ++w : --w) {
          limits.push(pow(10, min_log + i / num * (max_log - min_log)));
        }
        limits.push(max);
      } else if (mode.substr(0, 1) === 'q') {
        limits.push(min);
        for (i = aa = 1, ref2 = num - 1; 1 <= ref2 ? aa <= ref2 : aa >= ref2; i = 1 <= ref2 ? ++aa : --aa) {
          p = values.length * i / num;
          pb = floor(p);
          if (pb === p) {
            limits.push(values[pb]);
          } else {
            pr = p - pb;
            limits.push(values[pb] * pr + values[pb + 1] * (1 - pr));
          }
        }
        limits.push(max);
      } else if (mode.substr(0, 1) === 'k') {

        /*
        implementation based on
        http://code.google.com/p/figue/source/browse/trunk/figue.js#336
        simplified for 1-d input values
         */
        n = values.length;
        assignments = new Array(n);
        clusterSizes = new Array(num);
        repeat = true;
        nb_iters = 0;
        centroids = null;
        centroids = [];
        centroids.push(min);
        for (i = ab = 1, ref3 = num - 1; 1 <= ref3 ? ab <= ref3 : ab >= ref3; i = 1 <= ref3 ? ++ab : --ab) {
          centroids.push(min + i / num * (max - min));
        }
        centroids.push(max);
        while (repeat) {
          for (j = ac = 0, ref4 = num - 1; 0 <= ref4 ? ac <= ref4 : ac >= ref4; j = 0 <= ref4 ? ++ac : --ac) {
            clusterSizes[j] = 0;
          }
          for (i = ad = 0, ref5 = n - 1; 0 <= ref5 ? ad <= ref5 : ad >= ref5; i = 0 <= ref5 ? ++ad : --ad) {
            value = values[i];
            mindist = Number.MAX_VALUE;
            for (j = ae = 0, ref6 = num - 1; 0 <= ref6 ? ae <= ref6 : ae >= ref6; j = 0 <= ref6 ? ++ae : --ae) {
              dist = abs(centroids[j] - value);
              if (dist < mindist) {
                mindist = dist;
                best = j;
              }
            }
            clusterSizes[best]++;
            assignments[i] = best;
          }
          newCentroids = new Array(num);
          for (j = af = 0, ref7 = num - 1; 0 <= ref7 ? af <= ref7 : af >= ref7; j = 0 <= ref7 ? ++af : --af) {
            newCentroids[j] = null;
          }
          for (i = ag = 0, ref8 = n - 1; 0 <= ref8 ? ag <= ref8 : ag >= ref8; i = 0 <= ref8 ? ++ag : --ag) {
            cluster = assignments[i];
            if (newCentroids[cluster] === null) {
              newCentroids[cluster] = values[i];
            } else {
              newCentroids[cluster] += values[i];
            }
          }
          for (j = ah = 0, ref9 = num - 1; 0 <= ref9 ? ah <= ref9 : ah >= ref9; j = 0 <= ref9 ? ++ah : --ah) {
            newCentroids[j] *= 1 / clusterSizes[j];
          }
          repeat = false;
          for (j = ai = 0, ref10 = num - 1; 0 <= ref10 ? ai <= ref10 : ai >= ref10; j = 0 <= ref10 ? ++ai : --ai) {
            if (newCentroids[j] !== centroids[i]) {
              repeat = true;
              break;
            }
          }
          centroids = newCentroids;
          nb_iters++;
          if (nb_iters > 200) {
            repeat = false;
          }
        }
        kClusters = {};
        for (j = aj = 0, ref11 = num - 1; 0 <= ref11 ? aj <= ref11 : aj >= ref11; j = 0 <= ref11 ? ++aj : --aj) {
          kClusters[j] = [];
        }
        for (i = ak = 0, ref12 = n - 1; 0 <= ref12 ? ak <= ref12 : ak >= ref12; i = 0 <= ref12 ? ++ak : --ak) {
          cluster = assignments[i];
          kClusters[cluster].push(values[i]);
        }
        tmpKMeansBreaks = [];
        for (j = al = 0, ref13 = num - 1; 0 <= ref13 ? al <= ref13 : al >= ref13; j = 0 <= ref13 ? ++al : --al) {
          tmpKMeansBreaks.push(kClusters[j][0]);
          tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
        }
        tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a, b) {
          return a - b;
        });
        limits.push(tmpKMeansBreaks[0]);
        for (i = am = 1, ref14 = tmpKMeansBreaks.length - 1; am <= ref14; i = am += 2) {
          if (!isNaN(tmpKMeansBreaks[i])) {
            limits.push(tmpKMeansBreaks[i]);
          }
        }
      }
      return limits;
    };

    hsi2rgb = function hsi2rgb(h, s, i) {

      /*
      borrowed from here:
      http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
       */
      var args, b, g, r;
      args = unpack(arguments);
      h = args[0], s = args[1], i = args[2];
      h /= 360;
      if (h < 1 / 3) {
        b = (1 - s) / 3;
        r = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
        g = 1 - (b + r);
      } else if (h < 2 / 3) {
        h -= 1 / 3;
        r = (1 - s) / 3;
        g = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
        b = 1 - (r + g);
      } else {
        h -= 2 / 3;
        g = (1 - s) / 3;
        b = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
        r = 1 - (g + b);
      }
      r = limit(i * r * 3);
      g = limit(i * g * 3);
      b = limit(i * b * 3);
      return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
    };

    rgb2hsi = function rgb2hsi() {

      /*
      borrowed from here:
      http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
       */
      var b, g, h, i, min, r, ref, s;
      ref = unpack(arguments), r = ref[0], g = ref[1], b = ref[2];
      TWOPI = Math.PI * 2;
      r /= 255;
      g /= 255;
      b /= 255;
      min = Math.min(r, g, b);
      i = (r + g + b) / 3;
      s = 1 - min / i;
      if (s === 0) {
        h = 0;
      } else {
        h = (r - g + (r - b)) / 2;
        h /= Math.sqrt((r - g) * (r - g) + (r - b) * (g - b));
        h = Math.acos(h);
        if (b > g) {
          h = TWOPI - h;
        }
        h /= TWOPI;
      }
      return [h * 360, s, i];
    };

    chroma.hsi = function () {
      return function (func, args, ctor) {
        ctor.prototype = func.prototype;
        var child = new ctor(),
            result = func.apply(child, args);
        return Object(result) === result ? result : child;
      }(Color, slice.call(arguments).concat(['hsi']), function () {});
    };

    _input.hsi = hsi2rgb;

    Color.prototype.hsi = function () {
      return rgb2hsi(this._rgb);
    };

    interpolate_hsx = function interpolate_hsx(col1, col2, f, m) {
      var dh, hue, hue0, hue1, lbv, lbv0, lbv1, res, sat, sat0, sat1, xyz0, xyz1;
      if (m === 'hsl') {
        xyz0 = col1.hsl();
        xyz1 = col2.hsl();
      } else if (m === 'hsv') {
        xyz0 = col1.hsv();
        xyz1 = col2.hsv();
      } else if (m === 'hsi') {
        xyz0 = col1.hsi();
        xyz1 = col2.hsi();
      } else if (m === 'lch' || m === 'hcl') {
        m = 'hcl';
        xyz0 = col1.hcl();
        xyz1 = col2.hcl();
      }
      if (m.substr(0, 1) === 'h') {
        hue0 = xyz0[0], sat0 = xyz0[1], lbv0 = xyz0[2];
        hue1 = xyz1[0], sat1 = xyz1[1], lbv1 = xyz1[2];
      }
      if (!isNaN(hue0) && !isNaN(hue1)) {
        if (hue1 > hue0 && hue1 - hue0 > 180) {
          dh = hue1 - (hue0 + 360);
        } else if (hue1 < hue0 && hue0 - hue1 > 180) {
          dh = hue1 + 360 - hue0;
        } else {
          dh = hue1 - hue0;
        }
        hue = hue0 + f * dh;
      } else if (!isNaN(hue0)) {
        hue = hue0;
        if ((lbv1 === 1 || lbv1 === 0) && m !== 'hsv') {
          sat = sat0;
        }
      } else if (!isNaN(hue1)) {
        hue = hue1;
        if ((lbv0 === 1 || lbv0 === 0) && m !== 'hsv') {
          sat = sat1;
        }
      } else {
        hue = Number.NaN;
      }
      if (sat == null) {
        sat = sat0 + f * (sat1 - sat0);
      }
      lbv = lbv0 + f * (lbv1 - lbv0);
      return res = chroma[m](hue, sat, lbv);
    };

    _interpolators = _interpolators.concat(function () {
      var len, o, ref, results;
      ref = ['hsv', 'hsl', 'hsi', 'hcl', 'lch'];
      results = [];
      for (o = 0, len = ref.length; o < len; o++) {
        m = ref[o];
        results.push([m, interpolate_hsx]);
      }
      return results;
    }());

    interpolate_num = function interpolate_num(col1, col2, f, m) {
      var n1, n2;
      n1 = col1.num();
      n2 = col2.num();
      return chroma.num(n1 + (n2 - n1) * f, 'num');
    };

    _interpolators.push(['num', interpolate_num]);

    interpolate_lab = function interpolate_lab(col1, col2, f, m) {
      var res, xyz0, xyz1;
      xyz0 = col1.lab();
      xyz1 = col2.lab();
      return res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
    };

    _interpolators.push(['lab', interpolate_lab]);
  }).call(commonjsGlobal);
});

function getColorScale(colorArray) {
  var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  Object.assign({
    transform: 1,
    bezierInterpolate: false,
    correctLightness: true,
    interpolationMode: 'lab'
  }, options);
  var scale = options.bezierInterpolate ? chroma.bezier(colorArray).scale() : chroma.scale(colorArray).mode(options.interpolationMode);
  if (options.correctLightness) scale = scale.correctLightness();
  return function (value) {
    return scale(Math.pow(value, options.transform)).css();
  };
}























function YlOrRd() {
  var transform = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

  return getColorScale('YlOrRd', { transform: transform, correctLightness: false });
}

var themes = [{
  label: 'Resident Population By Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'radio',
    items: [{ label: 'Total', keys: ['Resident.Total.TOTAL'], selected: true }, { label: 'Male', keys: ['Resident.Male.TOTAL'] }, { label: 'Female', keys: ['Resident.Female.TOTAL'] }]
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  }
}, {
  label: 'Resident Population By Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'radio',
    items: [{ label: 'Total', keys: ['Resident.Total.TOTAL'], selected: true }, { label: 'Male', keys: ['Resident.Male.TOTAL'] }, { label: 'Female', keys: ['Resident.Female.TOTAL'] }]
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  }
}, {
  label: 'Age Distribution of Resident Population By Planning Area',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'range',
    items: [{ label: '0 to 4', keys: ['Resident.Total.BET0TO4'] }, { label: '5 to 9', keys: ['Resident.Total.BET5TO9'] }, { label: '10 to 14', keys: ['Resident.Total.BET10TO14'] }, { label: '15 to 19', keys: ['Resident.Total.BET15TO19'] }, { label: '20 to 24', keys: ['Resident.Total.BET20TO24'] }, { label: '25 to 29', keys: ['Resident.Total.BET25TO29'] }, { label: '30 to 34', keys: ['Resident.Total.BET30TO34'] }, { label: '35 to 39', keys: ['Resident.Total.BET35TO39'] }, { label: '40 to 44', keys: ['Resident.Total.BET40TO44'] }, { label: '45 to 49', keys: ['Resident.Total.BET45TO49'] }, { label: '50 to 54', keys: ['Resident.Total.BET50TO54'] }, { label: '55 to 59', keys: ['Resident.Total.BET55TO59'] }, { label: '60 to 64', keys: ['Resident.Total.BET60TO64'] }, { label: '65 to 69', keys: ['Resident.Total.BET65TO69'] }, { label: '70 to 74', keys: ['Resident.Total.BET70TO74'] }, { label: '75 to 79', keys: ['Resident.Total.BET75TO79'] }, { label: '80 to 84', keys: ['Resident.Total.BET80TO84'] }, { label: 'Over 85', keys: ['Resident.Total.OVER85'] }],
    normalize: 'Resident.Total.TOTAL'
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  }
}, {
  label: 'Age Distribution of Resident Population By Subzone',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'range',
    items: [{ label: '0 to 4', keys: ['Resident.Total.BET0TO4'] }, { label: '5 to 9', keys: ['Resident.Total.BET5TO9'] }, { label: '10 to 14', keys: ['Resident.Total.BET10TO14'] }, { label: '15 to 19', keys: ['Resident.Total.BET15TO19'] }, { label: '20 to 24', keys: ['Resident.Total.BET20TO24'] }, { label: '25 to 29', keys: ['Resident.Total.BET25TO29'] }, { label: '30 to 34', keys: ['Resident.Total.BET30TO34'] }, { label: '35 to 39', keys: ['Resident.Total.BET35TO39'] }, { label: '40 to 44', keys: ['Resident.Total.BET40TO44'] }, { label: '45 to 49', keys: ['Resident.Total.BET45TO49'] }, { label: '50 to 54', keys: ['Resident.Total.BET50TO54'] }, { label: '55 to 59', keys: ['Resident.Total.BET55TO59'] }, { label: '60 to 64', keys: ['Resident.Total.BET60TO64'] }, { label: '65 to 69', keys: ['Resident.Total.BET65TO69'] }, { label: '70 to 74', keys: ['Resident.Total.BET70TO74'] }, { label: '75 to 79', keys: ['Resident.Total.BET75TO79'] }, { label: '80 to 84', keys: ['Resident.Total.BET80TO84'] }, { label: 'Over 85', keys: ['Resident.Total.OVER85'] }],
    normalize: 'Resident.Total.TOTAL'
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  }
}, {
  label: 'Age Distribution of Resident Population By Planning Area (Male)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'range',
    items: [{ label: '0 to 4', keys: ['Resident.Male.BET0TO4'] }, { label: '5 to 9', keys: ['Resident.Male.BET5TO9'] }, { label: '10 to 14', keys: ['Resident.Male.BET10TO14'] }, { label: '15 to 19', keys: ['Resident.Male.BET15TO19'] }, { label: '20 to 24', keys: ['Resident.Male.BET20TO24'] }, { label: '25 to 29', keys: ['Resident.Male.BET25TO29'] }, { label: '30 to 34', keys: ['Resident.Male.BET30TO34'] }, { label: '35 to 39', keys: ['Resident.Male.BET35TO39'] }, { label: '40 to 44', keys: ['Resident.Male.BET40TO44'] }, { label: '45 to 49', keys: ['Resident.Male.BET45TO49'] }, { label: '50 to 54', keys: ['Resident.Male.BET50TO54'] }, { label: '55 to 59', keys: ['Resident.Male.BET55TO59'] }, { label: '60 to 64', keys: ['Resident.Male.BET60TO64'] }, { label: '65 to 69', keys: ['Resident.Male.BET65TO69'] }, { label: '70 to 74', keys: ['Resident.Male.BET70TO74'] }, { label: '75 to 79', keys: ['Resident.Male.BET75TO79'] }, { label: '80 to 84', keys: ['Resident.Male.BET80TO84'] }, { label: 'Over 85', keys: ['Resident.Male.OVER85'] }],
    normalize: 'Resident.Male.TOTAL'
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  }
}, {
  label: 'Age Distribution of Resident Population By Subzone (Male)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'range',
    items: [{ label: '0 to 4', keys: ['Resident.Male.BET0TO4'] }, { label: '5 to 9', keys: ['Resident.Male.BET5TO9'] }, { label: '10 to 14', keys: ['Resident.Male.BET10TO14'] }, { label: '15 to 19', keys: ['Resident.Male.BET15TO19'] }, { label: '20 to 24', keys: ['Resident.Male.BET20TO24'] }, { label: '25 to 29', keys: ['Resident.Male.BET25TO29'] }, { label: '30 to 34', keys: ['Resident.Male.BET30TO34'] }, { label: '35 to 39', keys: ['Resident.Male.BET35TO39'] }, { label: '40 to 44', keys: ['Resident.Male.BET40TO44'] }, { label: '45 to 49', keys: ['Resident.Male.BET45TO49'] }, { label: '50 to 54', keys: ['Resident.Male.BET50TO54'] }, { label: '55 to 59', keys: ['Resident.Male.BET55TO59'] }, { label: '60 to 64', keys: ['Resident.Male.BET60TO64'] }, { label: '65 to 69', keys: ['Resident.Male.BET65TO69'] }, { label: '70 to 74', keys: ['Resident.Male.BET70TO74'] }, { label: '75 to 79', keys: ['Resident.Male.BET75TO79'] }, { label: '80 to 84', keys: ['Resident.Male.BET80TO84'] }, { label: 'Over 85', keys: ['Resident.Male.OVER85'] }],
    normalize: 'Resident.Male.TOTAL'
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  }
}, {
  label: 'Age Distribution of Resident Population By Planning Area (Female)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationPlanningAreaMP98', 'PopulationPlanningAreaMP08', 'PopulationPlanningAreaMP14'],
  controls: [{
    type: 'range',
    items: [{ label: '0 to 4', keys: ['Resident.Female.BET0TO4'] }, { label: '5 to 9', keys: ['Resident.Female.BET5TO9'] }, { label: '10 to 14', keys: ['Resident.Female.BET10TO14'] }, { label: '15 to 19', keys: ['Resident.Female.BET15TO19'] }, { label: '20 to 24', keys: ['Resident.Female.BET20TO24'] }, { label: '25 to 29', keys: ['Resident.Female.BET25TO29'] }, { label: '30 to 34', keys: ['Resident.Female.BET30TO34'] }, { label: '35 to 39', keys: ['Resident.Female.BET35TO39'] }, { label: '40 to 44', keys: ['Resident.Female.BET40TO44'] }, { label: '45 to 49', keys: ['Resident.Female.BET45TO49'] }, { label: '50 to 54', keys: ['Resident.Female.BET50TO54'] }, { label: '55 to 59', keys: ['Resident.Female.BET55TO59'] }, { label: '60 to 64', keys: ['Resident.Female.BET60TO64'] }, { label: '65 to 69', keys: ['Resident.Female.BET65TO69'] }, { label: '70 to 74', keys: ['Resident.Female.BET70TO74'] }, { label: '75 to 79', keys: ['Resident.Female.BET75TO79'] }, { label: '80 to 84', keys: ['Resident.Female.BET80TO84'] }, { label: 'Over 85', keys: ['Resident.Female.OVER85'] }],
    normalize: 'Resident.Female.TOTAL'
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  }
}, {
  label: 'Age Distribution of Resident Population By Subzone (Female)',
  years: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
  sources: ['PopulationSubzoneMP98', 'PopulationSubzoneMP08', 'PopulationSubzoneMP14'],
  controls: [{
    type: 'range',
    items: [{ label: '0 to 4', keys: ['Resident.Female.BET0TO4'] }, { label: '5 to 9', keys: ['Resident.Female.BET5TO9'] }, { label: '10 to 14', keys: ['Resident.Female.BET10TO14'] }, { label: '15 to 19', keys: ['Resident.Female.BET15TO19'] }, { label: '20 to 24', keys: ['Resident.Female.BET20TO24'] }, { label: '25 to 29', keys: ['Resident.Female.BET25TO29'] }, { label: '30 to 34', keys: ['Resident.Female.BET30TO34'] }, { label: '35 to 39', keys: ['Resident.Female.BET35TO39'] }, { label: '40 to 44', keys: ['Resident.Female.BET40TO44'] }, { label: '45 to 49', keys: ['Resident.Female.BET45TO49'] }, { label: '50 to 54', keys: ['Resident.Female.BET50TO54'] }, { label: '55 to 59', keys: ['Resident.Female.BET55TO59'] }, { label: '60 to 64', keys: ['Resident.Female.BET60TO64'] }, { label: '65 to 69', keys: ['Resident.Female.BET65TO69'] }, { label: '70 to 74', keys: ['Resident.Female.BET70TO74'] }, { label: '75 to 79', keys: ['Resident.Female.BET75TO79'] }, { label: '80 to 84', keys: ['Resident.Female.BET80TO84'] }, { label: 'Over 85', keys: ['Resident.Female.OVER85'] }],
    normalize: 'Resident.Female.TOTAL'
  }],
  mapping: {
    2000: { source: 0, control: 0 },
    2001: { source: 1, control: 0 },
    2002: { source: 1, control: 0 },
    2003: { source: 1, control: 0 },
    2004: { source: 1, control: 0 },
    2005: { source: 1, control: 0 },
    2006: { source: 1, control: 0 },
    2007: { source: 1, control: 0 },
    2008: { source: 1, control: 0 },
    2009: { source: 1, control: 0 },
    2010: { source: 1, control: 0 },
    2011: { source: 2, control: 0 },
    2012: { source: 2, control: 0 },
    2013: { source: 2, control: 0 },
    2014: { source: 2, control: 0 },
    2015: { source: 2, control: 0 },
    2016: { source: 2, control: 0 }
  }
}];

var googleMapsStyles = {
  blueWater: [{
    'featureType': 'administrative',
    'elementType': 'labels.text.fill',
    'stylers': [{
      'color': '#444444'
    }]
  }, {
    'featureType': 'landscape',
    'elementType': 'all',
    'stylers': [{
      'color': '#f2f2f2'
    }]
  }, {
    'featureType': 'poi',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'off'
    }]
  }, {
    'featureType': 'road',
    'elementType': 'all',
    'stylers': [{
      'saturation': -100
    }, {
      'lightness': 45
    }]
  }, {
    'featureType': 'road.highway',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'simplified'
    }]
  }, {
    'featureType': 'road.arterial',
    'elementType': 'labels.icon',
    'stylers': [{
      'visibility': 'off'
    }]
  }, {
    'featureType': 'transit',
    'elementType': 'all',
    'stylers': [{
      'visibility': 'off'
    }]
  }, {
    'featureType': 'water',
    'elementType': 'all',
    'stylers': [{
      'color': '#46bcec'
    }, {
      'visibility': 'on'
    }]
  }]
};

var $map = document.querySelector('.map-container');

var map = new google.maps.Map($map, {
  center: new google.maps.LatLng(1.352083, 103.819836),
  zoom: 11,
  minZoom: 11,
  maxZoom: 16,
  styles: googleMapsStyles.blueWater
});

var store = {
  source: null,
  control: null,
  accessor: null,
  heatmap: null,
  cache: {},
  load: function load(key) {
    var _this = this;

    if (key in this.cache) {
      if (this.heatmap && !(this.heatmap instanceof Promise)) {
        this.heatmap.renderer.setMap(null);
      }
      if (this.cache[key] instanceof Promise) return this.cache[key];
      this.source = key;
      this.heatmap = this.cache[key];
      this.heatmap.renderer.setMap(map);
      return this.heatmap;
    } else {
      this.cache[key] = window.fetch('./data/' + key + '.json').then(function (res) {
        return res.json();
      }).then(function (data) {
        return new SgHeatmap(data);
      }).then(function (heatmap) {
        var colorScale = YlOrRd(3);
        heatmap.initializeRenderer(colorScale, {
          strokeWeight: 1,
          strokeColor: 'black',
          strokeOpacity: 0.3,
          fillColor: 'white',
          fillOpacity: 1
        });
        _this.source = key;
        _this.heatmap = heatmap;
        _this.heatmap.renderer.setMap(map);
        _this.cache[key] = heatmap;
        return heatmap;
      });
      return this.cache[key];
    }
  }
};

window.store = store;

render(3, 0, 0, 5);

function generateAccessor(control, year) {
  var accessors = control.items.map(function (item) {
    return function (d) {
      return item.keys.reduce(function (sum, path) {
        return sum + get(d[year], path);
      }, 0);
    };
  });

  var norm = control.normalize ? function (d) {
    return get(d[year], control.normalize) || 1;
  } : function (d) {
    return 1;
  };

  switch (control.type) {
    case 'radio':
      return function (selected) {
        return function (d) {
          return accessors[selected](d) / norm(d);
        };
      };

    case 'checkbox':
      return function (selected) {
        return function (d) {
          return selected.reduce(function (sum, index) {
            return sum + accessors[index](d);
          }, 0) / norm(d);
        };
      };

    case 'range':
      return function (start, end) {
        return function (d) {
          return accessors.reduce(function (sum, accessor, index) {
            if (index < start || index > end) return sum;
            return sum + accessor(d);
          }, 0) / norm(d);
        };
      };
  }
}

function render(selectedTheme, selectedYear, start, end) {
  var theme = themes[selectedTheme];
  var year = theme.years[selectedYear];
  var source = theme.sources[theme.mapping[year].source];
  var control = theme.controls[theme.mapping[year].control];

  if (store.source === source) {
    if (store.control === control) {
      store.heatmap.render(store.accessor(start, end));
    } else {
      store.control = control;
      store.accessor = generateAccessor(control, year);
      // render control
      store.heatmap.render(store.accessor(start, end));
    }
    return;
  }

  var heatmap = store.load(source);

  if (heatmap instanceof Promise) {
    heatmap.then(function () {
      return render(selectedTheme, selectedYear, start, end);
    });
  } else {
    render(selectedTheme, selectedYear, start, end);
  }
}

function get(d, path) {
  var value = d;
  path.split('.').forEach(function (key) {
    value = value[key];
  });
  return value;
}

}());
