(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "../coreui/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js":
/*!***********************************************************************************!*\
  !*** ../coreui/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js ***!
  \***********************************************************************************/
/*! exports provided: default, computed, createApp, createRef, customRef, defineAsyncComponent, defineComponent, del, getCurrentInstance, h, inject, isRaw, isReactive, isReadonly, isRef, markRaw, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onServerPrefetch, onUnmounted, onUpdated, provide, proxyRefs, reactive, readonly, ref, set, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, useCSSModule, useCssModule, version, warn, watch, watchEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return createApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customRef", function() { return customRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() { return defineAsyncComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return defineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return getCurrentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRaw", function() { return isRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReactive", function() { return isReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isReadonly", function() { return isReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return isRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markRaw", function() { return markRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onActivated", function() { return onActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() { return onBeforeMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() { return onBeforeUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() { return onBeforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onDeactivated", function() { return onDeactivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() { return onErrorCaptured; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onMounted", function() { return onMounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onServerPrefetch", function() { return onServerPrefetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return onUnmounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onUpdated", function() { return onUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return provide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proxyRefs", function() { return proxyRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reactive", function() { return reactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return readonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return set$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowReactive", function() { return shallowReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() { return shallowReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowRef", function() { return shallowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRaw", function() { return toRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRef", function() { return toRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return toRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerRef", function() { return triggerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unref", function() { return unref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCSSModule", function() { return useCSSModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCssModule", function() { return useCssModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "watchEffect", function() { return watchEffect; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../coreui/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


var toString = function (x) { return Object.prototype.toString.call(x); };
function isNative(Ctor) {
    return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}
var hasSymbol = typeof Symbol !== 'undefined' &&
    isNative(Symbol) &&
    typeof Reflect !== 'undefined' &&
    isNative(Reflect.ownKeys);
var noopFn = function (_) { return _; };
function proxy(target, key, _a) {
    var get = _a.get, set = _a.set;
    Object.defineProperty(target, key, {
        enumerable: true,
        configurable: true,
        get: get || noopFn,
        set: set || noopFn,
    });
}
function def(obj, key, val, enumerable) {
    Object.defineProperty(obj, key, {
        value: val,
        enumerable: !!enumerable,
        writable: true,
        configurable: true,
    });
}
function hasOwn(obj, key) {
    return Object.hasOwnProperty.call(obj, key);
}
function assert(condition, msg) {
    if (!condition) {
        throw new Error("[vue-composition-api] " + msg);
    }
}
function isPrimitive(value) {
    return (typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean');
}
function isArray(x) {
    return Array.isArray(x);
}
var objectToString = Object.prototype.toString;
var toTypeString = function (value) {
    return objectToString.call(value);
};
var isMap = function (val) {
    return toTypeString(val) === '[object Map]';
};
var isSet = function (val) {
    return toTypeString(val) === '[object Set]';
};
var MAX_VALID_ARRAY_LENGTH = 4294967295; // Math.pow(2, 32) - 1
function isValidArrayIndex(val) {
    var n = parseFloat(String(val));
    return (n >= 0 &&
        Math.floor(n) === n &&
        isFinite(val) &&
        n <= MAX_VALID_ARRAY_LENGTH);
}
function isObject(val) {
    return val !== null && typeof val === 'object';
}
function isPlainObject(x) {
    return toString(x) === '[object Object]';
}
function isFunction(x) {
    return typeof x === 'function';
}
function isUndef(v) {
    return v === undefined || v === null;
}
function warn$1(msg, vm) {
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.util.warn(msg, vm);
}
function logError(err, vm, info) {
    if ((true)) {
        warn$1("Error in " + info + ": \"" + err.toString() + "\"", vm);
    }
    if (typeof window !== 'undefined' && typeof console !== 'undefined') {
        console.error(err);
    }
    else {
        throw err;
    }
}

var vueDependency = undefined;
try {
    var requiredVue = __webpack_require__(/*! vue */ "../coreui/node_modules/vue/dist/vue.common.js");
    if (requiredVue && isVue(requiredVue)) {
        vueDependency = requiredVue;
    }
    else if (requiredVue &&
        'default' in requiredVue &&
        isVue(requiredVue.default)) {
        vueDependency = requiredVue.default;
    }
}
catch (_a) {
    // not available
}
var vueConstructor = null;
var currentInstance = null;
var PluginInstalledFlag = '__composition_api_installed__';
function isVue(obj) {
    return obj && typeof obj === 'function' && obj.name === 'Vue';
}
function isVueRegistered(Vue) {
    return hasOwn(Vue, PluginInstalledFlag);
}
function getVueConstructor() {
    if ((true)) {
        assert(vueConstructor, "must call Vue.use(VueCompositionAPI) before using any function.");
    }
    return vueConstructor;
}
// returns registered vue or `vue` dependency
function getRegisteredVueOrDefault() {
    var constructor = vueConstructor || vueDependency;
    if ((true)) {
        assert(constructor, "No vue dependency found.");
    }
    return constructor;
}
function setVueConstructor(Vue) {
    // @ts-ignore
    if (( true) && vueConstructor && Vue.__proto__ !== vueConstructor.__proto__) {
        warn$1('[vue-composition-api] another instance of Vue installed');
    }
    vueConstructor = Vue;
    Object.defineProperty(Vue, PluginInstalledFlag, {
        configurable: true,
        writable: true,
        value: true,
    });
}
function setCurrentInstance(vm) {
    // currentInstance?.$scopedSlots
    currentInstance = vm;
}
function getCurrentVue2Instance() {
    return currentInstance;
}
function getCurrentInstance() {
    if (currentInstance) {
        return toVue3ComponentInstance(currentInstance);
    }
    return null;
}
var instanceMapCache = new WeakMap();
function toVue3ComponentInstance(vue2Instance) {
    if (instanceMapCache.has(vue2Instance)) {
        return instanceMapCache.get(vue2Instance);
    }
    var instance = {
        proxy: vue2Instance,
        update: vue2Instance.$forceUpdate,
        uid: vue2Instance._uid,
        // $emit is defined on prototype and it expected to be bound
        emit: vue2Instance.$emit.bind(vue2Instance),
        parent: null,
        root: null,
    };
    // map vm.$props =
    var instanceProps = [
        'data',
        'props',
        'attrs',
        'refs',
        'vnode',
        'slots',
    ];
    instanceProps.forEach(function (prop) {
        proxy(instance, prop, {
            get: function () {
                return vue2Instance["$" + prop];
            },
        });
    });
    proxy(instance, 'isMounted', {
        get: function () {
            // @ts-expect-error private api
            return vue2Instance._isMounted;
        },
    });
    proxy(instance, 'isUnmounted', {
        get: function () {
            // @ts-expect-error private api
            return vue2Instance._isDestroyed;
        },
    });
    proxy(instance, 'isDeactivated', {
        get: function () {
            // @ts-expect-error private api
            return vue2Instance._inactive;
        },
    });
    proxy(instance, 'emitted', {
        get: function () {
            // @ts-expect-error private api
            return vue2Instance._events;
        },
    });
    instanceMapCache.set(vue2Instance, instance);
    if (vue2Instance.$parent) {
        instance.parent = toVue3ComponentInstance(vue2Instance.$parent);
    }
    if (vue2Instance.$root) {
        instance.root = toVue3ComponentInstance(vue2Instance.$root);
    }
    return instance;
}

function currentVMInFn(hook) {
    var vm = getCurrentInstance();
    if (( true) && !vm) {
        warn$1(hook + " is called when there is no active component instance to be " +
            "associated with. " +
            "Lifecycle injection APIs can only be used during execution of setup().");
    }
    return vm === null || vm === void 0 ? void 0 : vm.proxy;
}
function defineComponentInstance(Ctor, options) {
    if (options === void 0) { options = {}; }
    var silent = Ctor.config.silent;
    Ctor.config.silent = true;
    var vm = new Ctor(options);
    Ctor.config.silent = silent;
    return vm;
}
function isComponentInstance(obj) {
    var Vue = getVueConstructor();
    return Vue && obj instanceof Vue;
}
function createSlotProxy(vm, slotName) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (!vm.$scopedSlots[slotName]) {
            return warn$1("slots." + slotName + "() got called outside of the \"render()\" scope", vm);
        }
        return vm.$scopedSlots[slotName].apply(vm, args);
    };
}
function resolveSlots(slots, normalSlots) {
    var res;
    if (!slots) {
        res = {};
    }
    else if (slots._normalized) {
        // fast path 1: child component re-render only, parent did not change
        return slots._normalized;
    }
    else {
        res = {};
        for (var key in slots) {
            if (slots[key] && key[0] !== '$') {
                res[key] = true;
            }
        }
    }
    // expose normal slots on scopedSlots
    for (var key in normalSlots) {
        if (!(key in res)) {
            res[key] = true;
        }
    }
    return res;
}
var vueInternalClasses;
var getVueInternalClasses = function () {
    if (!vueInternalClasses) {
        var vm = defineComponentInstance(getVueConstructor(), {
            computed: {
                value: function () {
                    return 0;
                },
            },
        });
        // to get Watcher class
        var Watcher = vm._computedWatchers.value.constructor;
        // to get Dep class
        var Dep = vm._data.__ob__.dep.constructor;
        vueInternalClasses = {
            Watcher: Watcher,
            Dep: Dep,
        };
        vm.$destroy();
    }
    return vueInternalClasses;
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function createSymbol(name) {
    return hasSymbol ? Symbol.for(name) : name;
}
var WatcherPreFlushQueueKey = createSymbol('composition-api.preFlushQueue');
var WatcherPostFlushQueueKey = createSymbol('composition-api.postFlushQueue');
// must be a string, symbol key is ignored in reactive
var RefKey = 'composition-api.refKey';

var accessModifiedSet = new WeakMap();
var rawSet = new WeakMap();
var readonlySet = new WeakMap();

var RefImpl = /** @class */ (function () {
    function RefImpl(_a) {
        var get = _a.get, set = _a.set;
        proxy(this, 'value', {
            get: get,
            set: set,
        });
    }
    return RefImpl;
}());
function createRef(options, readonly) {
    var r = new RefImpl(options);
    // seal the ref, this could prevent ref from being observed
    // It's safe to seal the ref, since we really shouldn't extend it.
    // related issues: #79
    var sealed = Object.seal(r);
    readonlySet.set(sealed, true);
    return sealed;
}
function ref(raw) {
    var _a;
    if (isRef(raw)) {
        return raw;
    }
    var value = reactive((_a = {}, _a[RefKey] = raw, _a));
    return createRef({
        get: function () { return value[RefKey]; },
        set: function (v) { return (value[RefKey] = v); },
    });
}
function isRef(value) {
    return value instanceof RefImpl;
}
function unref(ref) {
    return isRef(ref) ? ref.value : ref;
}
function toRefs(obj) {
    if (( true) && !isReactive(obj)) {
        warn$1("toRefs() expects a reactive object but received a plain one.");
    }
    if (!isPlainObject(obj))
        return obj;
    var ret = {};
    for (var key in obj) {
        ret[key] = toRef(obj, key);
    }
    return ret;
}
function customRef(factory) {
    var version = ref(0);
    return createRef(factory(function () { return void version.value; }, function () {
        ++version.value;
    }));
}
function toRef(object, key) {
    var v = object[key];
    if (isRef(v))
        return v;
    return createRef({
        get: function () { return object[key]; },
        set: function (v) { return (object[key] = v); },
    });
}
function shallowRef(raw) {
    var _a;
    if (isRef(raw)) {
        return raw;
    }
    var value = shallowReactive((_a = {}, _a[RefKey] = raw, _a));
    return createRef({
        get: function () { return value[RefKey]; },
        set: function (v) { return (value[RefKey] = v); },
    });
}
function triggerRef(value) {
    if (!isRef(value))
        return;
    value.value = value.value;
}
function proxyRefs(objectWithRefs) {
    var _a, e_1, _b;
    if (isReactive(objectWithRefs)) {
        return objectWithRefs;
    }
    var value = reactive((_a = {}, _a[RefKey] = objectWithRefs, _a));
    var _loop_1 = function (key) {
        proxy(value, key, {
            get: function () {
                if (isRef(value[RefKey][key])) {
                    return value[RefKey][key].value;
                }
                return value[RefKey][key];
            },
            set: function (v) {
                if (isRef(value[RefKey][key])) {
                    return (value[RefKey][key].value = unref(v));
                }
                value[RefKey][key] = unref(v);
            },
        });
    };
    try {
        for (var _c = __values(Object.keys(objectWithRefs)), _d = _c.next(); !_d.done; _d = _c.next()) {
            var key = _d.value;
            _loop_1(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return value;
}

function isRaw(obj) {
    var _a;
    return Boolean(obj &&
        hasOwn(obj, '__ob__') &&
        typeof obj.__ob__ === 'object' &&
        ((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a.__raw__));
}
function isReactive(obj) {
    var _a;
    return Boolean(obj &&
        hasOwn(obj, '__ob__') &&
        typeof obj.__ob__ === 'object' &&
        !((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a.__raw__));
}
/**
 * Proxing property access of target.
 * We can do unwrapping and other things here.
 */
function setupAccessControl(target) {
    if (!isPlainObject(target) ||
        isRaw(target) ||
        Array.isArray(target) ||
        isRef(target) ||
        isComponentInstance(target) ||
        accessModifiedSet.has(target))
        return;
    accessModifiedSet.set(target, true);
    var keys = Object.keys(target);
    for (var i = 0; i < keys.length; i++) {
        defineAccessControl(target, keys[i]);
    }
}
/**
 * Auto unwrapping when access property
 */
function defineAccessControl(target, key, val) {
    if (key === '__ob__')
        return;
    if (isRaw(target[key]))
        return;
    var getter;
    var setter;
    var property = Object.getOwnPropertyDescriptor(target, key);
    if (property) {
        if (property.configurable === false) {
            return;
        }
        getter = property.get;
        setter = property.set;
        if ((!getter || setter) /* not only have getter */ &&
            arguments.length === 2) {
            val = target[key];
        }
    }
    setupAccessControl(val);
    proxy(target, key, {
        get: function getterHandler() {
            var value = getter ? getter.call(target) : val;
            // if the key is equal to RefKey, skip the unwrap logic
            if (key !== RefKey && isRef(value)) {
                return value.value;
            }
            else {
                return value;
            }
        },
        set: function setterHandler(newVal) {
            if (getter && !setter)
                return;
            var value = getter ? getter.call(target) : val;
            // If the key is equal to RefKey, skip the unwrap logic
            // If and only if "value" is ref and "newVal" is not a ref,
            // the assignment should be proxied to "value" ref.
            if (key !== RefKey && isRef(value) && !isRef(newVal)) {
                value.value = newVal;
            }
            else if (setter) {
                setter.call(target, newVal);
            }
            else {
                val = newVal;
            }
            setupAccessControl(newVal);
        },
    });
}
function observe(obj) {
    var Vue = getRegisteredVueOrDefault();
    var observed;
    if (Vue.observable) {
        observed = Vue.observable(obj);
    }
    else {
        var vm = defineComponentInstance(Vue, {
            data: {
                $$state: obj,
            },
        });
        observed = vm._data.$$state;
    }
    // in SSR, there is no __ob__. Mock for reactivity check
    if (!hasOwn(observed, '__ob__')) {
        mockReactivityDeep(observed);
    }
    return observed;
}
/**
 * Mock __ob__ for object recursively
 */
function mockReactivityDeep(obj, seen) {
    var e_1, _a;
    if (seen === void 0) { seen = new WeakMap(); }
    if (seen.has(obj))
        return;
    def(obj, '__ob__', mockObserver(obj));
    seen.set(obj, true);
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var value = obj[key];
            if (!(isPlainObject(value) || isArray(value)) ||
                isRaw(value) ||
                !Object.isExtensible(value)) {
                continue;
            }
            mockReactivityDeep(value);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
function mockObserver(value) {
    if (value === void 0) { value = {}; }
    return {
        value: value,
        dep: {
            notify: noopFn,
            depend: noopFn,
            addSub: noopFn,
            removeSub: noopFn,
        },
    };
}
function createObserver() {
    return observe({}).__ob__;
}
function shallowReactive(obj) {
    var e_2, _a;
    if (!isObject(obj)) {
        if ((true)) {
            warn$1('"shallowReactive()" must be called on an object.');
        }
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        isRaw(obj) ||
        !Object.isExtensible(obj)) {
        return obj;
    }
    var observed = observe(isArray(obj) ? [] : {});
    setupAccessControl(observed);
    var ob = observed.__ob__;
    var _loop_1 = function (key) {
        var val = obj[key];
        var getter;
        var setter;
        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property) {
            if (property.configurable === false) {
                return "continue";
            }
            getter = property.get;
            setter = property.set;
        }
        proxy(observed, key, {
            get: function getterHandler() {
                var _a;
                var value = getter ? getter.call(obj) : val;
                (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.depend();
                return value;
            },
            set: function setterHandler(newVal) {
                var _a;
                if (getter && !setter)
                    return;
                if (setter) {
                    setter.call(obj, newVal);
                }
                else {
                    val = newVal;
                }
                (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.notify();
            },
        });
    };
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_1(key);
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return observed;
}
/**
 * Make obj reactivity
 */
function reactive(obj) {
    if (!isObject(obj)) {
        if ((true)) {
            warn$1('"reactive()" must be called on an object.');
        }
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        isRaw(obj) ||
        !Object.isExtensible(obj)) {
        return obj;
    }
    var observed = observe(obj);
    setupAccessControl(observed);
    return observed;
}
/**
 * Make sure obj can't be a reactive
 */
function markRaw(obj) {
    if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj)) {
        return obj;
    }
    // set the vue observable flag at obj
    var ob = createObserver();
    ob.__raw__ = true;
    def(obj, '__ob__', ob);
    // mark as Raw
    rawSet.set(obj, true);
    return obj;
}
function toRaw(observed) {
    var _a, _b;
    if (isRaw(observed) || !Object.isExtensible(observed)) {
        return observed;
    }
    return ((_b = (_a = observed) === null || _a === void 0 ? void 0 : _a.__ob__) === null || _b === void 0 ? void 0 : _b.value) || observed;
}

function isReadonly(obj) {
    return readonlySet.has(obj);
}
/**
 * **In @vue/composition-api, `reactive` only provides type-level readonly check**
 *
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */
function readonly(target) {
    return target;
}
function shallowReadonly(obj) {
    var e_1, _a;
    if (!isObject(obj)) {
        if ((true)) {
            warn$1("value cannot be made reactive: " + String(obj));
        }
        return obj;
    }
    if (!(isPlainObject(obj) || isArray(obj)) ||
        (!Object.isExtensible(obj) && !isRef(obj))) {
        return obj;
    }
    var readonlyObj = isRef(obj)
        ? new RefImpl({})
        : isReactive(obj)
            ? observe({})
            : {};
    var source = reactive({});
    var ob = source.__ob__;
    var _loop_1 = function (key) {
        var val = obj[key];
        var getter;
        var property = Object.getOwnPropertyDescriptor(obj, key);
        if (property) {
            if (property.configurable === false && !isRef(obj)) {
                return "continue";
            }
            getter = property.get;
        }
        proxy(readonlyObj, key, {
            get: function getterHandler() {
                var value = getter ? getter.call(obj) : val;
                ob.dep.depend();
                return value;
            },
            set: function (v) {
                if ((true)) {
                    warn$1("Set operation on key \"" + key + "\" failed: target is readonly.");
                }
            },
        });
    };
    try {
        for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            _loop_1(key);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    readonlySet.set(readonlyObj, true);
    return readonlyObj;
}

/**
 * Set a property on an object. Adds the new property, triggers change
 * notification and intercept it's subsequent access if the property doesn't
 * already exist.
 */
function set$1(target, key, val) {
    var _a;
    var Vue = getVueConstructor();
    // @ts-expect-error https://github.com/vuejs/vue/pull/12132
    var _b = Vue.util, warn = _b.warn, defineReactive = _b.defineReactive;
    if (( true) && (isUndef(target) || isPrimitive(target))) {
        warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
    }
    if (isArray(target)) {
        if (isValidArrayIndex(key)) {
            target.length = Math.max(target.length, key);
            target.splice(key, 1, val);
            return val;
        }
        else if (key === 'length' && val !== target.length) {
            target.length = val;
            (_a = target.__ob__) === null || _a === void 0 ? void 0 : _a.dep.notify();
            return val;
        }
    }
    if (key in target && !(key in Object.prototype)) {
        target[key] = val;
        return val;
    }
    var ob = target.__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
        ( true) &&
            warn('Avoid adding reactive properties to a Vue instance or its root $data ' +
                'at runtime - declare it upfront in the data option.');
        return val;
    }
    if (!ob) {
        target[key] = val;
        return val;
    }
    defineReactive(ob.value, key, val);
    // IMPORTANT: define access control before trigger watcher
    defineAccessControl(target, key, val);
    ob.dep.notify();
    return val;
}

/**
 * Delete a property and trigger change if necessary.
 */
function del(target, key) {
    var Vue = getVueConstructor();
    var warn = Vue.util.warn;
    if (( true) && (isUndef(target) || isPrimitive(target))) {
        warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
    }
    if (Array.isArray(target) && isValidArrayIndex(key)) {
        target.splice(key, 1);
        return;
    }
    var ob = target.__ob__;
    if (target._isVue || (ob && ob.vmCount)) {
        ( true) &&
            warn('Avoid deleting properties on a Vue instance or its root $data ' +
                '- just set it to null.');
        return;
    }
    if (!hasOwn(target, key)) {
        return;
    }
    delete target[key];
    if (!ob) {
        return;
    }
    ob.dep.notify();
}

var genName = function (name) { return "on" + (name[0].toUpperCase() + name.slice(1)); };
function createLifeCycle(lifeCyclehook) {
    return function (callback) {
        var vm = currentVMInFn(genName(lifeCyclehook));
        if (vm) {
            injectHookOption(getVueConstructor(), vm, lifeCyclehook, callback);
        }
    };
}
function injectHookOption(Vue, vm, hook, val) {
    var options = vm.$options;
    var mergeFn = Vue.config.optionMergeStrategies[hook];
    options[hook] = mergeFn(options[hook], wrapHookCall(vm, val));
}
function wrapHookCall(vm, fn) {
    return function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var preVm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
        setCurrentInstance(vm);
        try {
            return fn.apply(void 0, __spreadArray([], __read(args)));
        }
        finally {
            setCurrentInstance(preVm);
        }
    };
}
// export const onCreated = createLifeCycle('created');
var onBeforeMount = createLifeCycle('beforeMount');
var onMounted = createLifeCycle('mounted');
var onBeforeUpdate = createLifeCycle('beforeUpdate');
var onUpdated = createLifeCycle('updated');
var onBeforeUnmount = createLifeCycle('beforeDestroy');
var onUnmounted = createLifeCycle('destroyed');
var onErrorCaptured = createLifeCycle('errorCaptured');
var onActivated = createLifeCycle('activated');
var onDeactivated = createLifeCycle('deactivated');
var onServerPrefetch = createLifeCycle('serverPrefetch');

var fallbackVM;
function flushPreQueue() {
    flushQueue(this, WatcherPreFlushQueueKey);
}
function flushPostQueue() {
    flushQueue(this, WatcherPostFlushQueueKey);
}
function hasWatchEnv(vm) {
    return vm[WatcherPreFlushQueueKey] !== undefined;
}
function installWatchEnv(vm) {
    vm[WatcherPreFlushQueueKey] = [];
    vm[WatcherPostFlushQueueKey] = [];
    vm.$on('hook:beforeUpdate', flushPreQueue);
    vm.$on('hook:updated', flushPostQueue);
}
function getWatcherOption(options) {
    return __assign({
        immediate: false,
        deep: false,
        flush: 'pre',
    }, options);
}
function getWatchEffectOption(options) {
    return __assign({
        immediate: true,
        deep: false,
        flush: 'pre',
    }, options);
}
function getWatcherVM() {
    var _a;
    var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    if (!vm) {
        if (!fallbackVM) {
            fallbackVM = defineComponentInstance(getVueConstructor());
        }
        vm = fallbackVM;
    }
    else if (!hasWatchEnv(vm)) {
        installWatchEnv(vm);
    }
    return vm;
}
function flushQueue(vm, key) {
    var queue = vm[key];
    for (var index = 0; index < queue.length; index++) {
        queue[index]();
    }
    queue.length = 0;
}
function queueFlushJob(vm, fn, mode) {
    // flush all when beforeUpdate and updated are not fired
    var fallbackFlush = function () {
        vm.$nextTick(function () {
            if (vm[WatcherPreFlushQueueKey].length) {
                flushQueue(vm, WatcherPreFlushQueueKey);
            }
            if (vm[WatcherPostFlushQueueKey].length) {
                flushQueue(vm, WatcherPostFlushQueueKey);
            }
        });
    };
    switch (mode) {
        case 'pre':
            fallbackFlush();
            vm[WatcherPreFlushQueueKey].push(fn);
            break;
        case 'post':
            fallbackFlush();
            vm[WatcherPostFlushQueueKey].push(fn);
            break;
        default:
            assert(false, "flush must be one of [\"post\", \"pre\", \"sync\"], but got " + mode);
            break;
    }
}
function createVueWatcher(vm, getter, callback, options) {
    var index = vm._watchers.length;
    // @ts-ignore: use undocumented options
    vm.$watch(getter, callback, {
        immediate: options.immediateInvokeCallback,
        deep: options.deep,
        lazy: options.noRun,
        sync: options.sync,
        before: options.before,
    });
    return vm._watchers[index];
}
// We have to monkeypatch the teardown function so Vue will run
// runCleanup() when it tears down the watcher on unmounted.
function patchWatcherTeardown(watcher, runCleanup) {
    var _teardown = watcher.teardown;
    watcher.teardown = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        _teardown.apply(watcher, args);
        runCleanup();
    };
}
function createWatcher(vm, source, cb, options) {
    var _a;
    var flushMode = options.flush;
    var isSync = flushMode === 'sync';
    var cleanup;
    var registerCleanup = function (fn) {
        cleanup = function () {
            try {
                fn();
            }
            catch (error) {
                logError(error, vm, 'onCleanup()');
            }
        };
    };
    // cleanup before running getter again
    var runCleanup = function () {
        if (cleanup) {
            cleanup();
            cleanup = null;
        }
    };
    var createScheduler = function (fn) {
        if (isSync ||
            /* without a current active instance, ignore pre|post mode */ vm ===
                fallbackVM) {
            return fn;
        }
        return (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return queueFlushJob(vm, function () {
                fn.apply(void 0, __spreadArray([], __read(args)));
            }, flushMode);
        });
    };
    // effect watch
    if (cb === null) {
        var running_1 = false;
        var getter_1 = function () {
            // preventing the watch callback being call in the same execution
            if (running_1) {
                return;
            }
            try {
                running_1 = true;
                source(registerCleanup);
            }
            finally {
                running_1 = false;
            }
        };
        var watcher_1 = createVueWatcher(vm, getter_1, noopFn, {
            deep: options.deep || false,
            sync: isSync,
            before: runCleanup,
        });
        patchWatcherTeardown(watcher_1, runCleanup);
        // enable the watcher update
        watcher_1.lazy = false;
        var originGet = watcher_1.get.bind(watcher_1);
        // always run watchEffect
        watcher_1.get = createScheduler(originGet);
        return function () {
            watcher_1.teardown();
        };
    }
    var deep = options.deep;
    var getter;
    if (isRef(source)) {
        getter = function () { return source.value; };
    }
    else if (isReactive(source)) {
        getter = function () { return source; };
        deep = true;
    }
    else if (isArray(source)) {
        getter = function () {
            return source.map(function (s) {
                if (isRef(s)) {
                    return s.value;
                }
                else if (isReactive(s)) {
                    return traverse(s);
                }
                else if (isFunction(s)) {
                    return s();
                }
                else {
                    warn$1("Invalid watch source: " + JSON.stringify(s) + ".\n          A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.", vm);
                    return noopFn;
                }
            });
        };
    }
    else if (isFunction(source)) {
        getter = source;
    }
    else {
        getter = noopFn;
        warn$1("Invalid watch source: " + JSON.stringify(source) + ".\n      A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.", vm);
    }
    var applyCb = function (n, o) {
        // cleanup before running cb again
        runCleanup();
        cb(n, o, registerCleanup);
    };
    var callback = createScheduler(applyCb);
    if (options.immediate) {
        var originalCallback_1 = callback;
        // `shiftCallback` is used to handle the first sync effect run.
        // The subsequent callbacks will redirect to `callback`.
        var shiftCallback_1 = function (n, o) {
            shiftCallback_1 = originalCallback_1;
            // o is undefined on the first call
            applyCb(n, isArray(n) ? [] : o);
        };
        callback = function (n, o) {
            shiftCallback_1(n, o);
        };
    }
    // @ts-ignore: use undocumented option "sync"
    var stop = vm.$watch(getter, callback, {
        immediate: options.immediate,
        deep: deep,
        sync: isSync,
    });
    // Once again, we have to hack the watcher for proper teardown
    var watcher = vm._watchers[vm._watchers.length - 1];
    // if the return value is reactive and deep:true
    // watch for changes, this might happen when new key is added
    if (isReactive(watcher.value) && ((_a = watcher.value.__ob__) === null || _a === void 0 ? void 0 : _a.dep) && deep) {
        watcher.value.__ob__.dep.addSub({
            update: function () {
                // this will force the source to be revaluated and the callback
                // executed if needed
                watcher.run();
            },
        });
    }
    patchWatcherTeardown(watcher, runCleanup);
    return function () {
        stop();
    };
}
function watchEffect(effect, options) {
    var opts = getWatchEffectOption(options);
    var vm = getWatcherVM();
    return createWatcher(vm, effect, null, opts);
}
// implementation
function watch(source, cb, options) {
    var callback = null;
    if (typeof cb === 'function') {
        // source watch
        callback = cb;
    }
    else {
        // effect watch
        if ((true)) {
            warn$1("`watch(fn, options?)` signature has been moved to a separate API. " +
                "Use `watchEffect(fn, options?)` instead. `watch` now only " +
                "supports `watch(source, cb, options?) signature.");
        }
        options = cb;
        callback = null;
    }
    var opts = getWatcherOption(options);
    var vm = getWatcherVM();
    return createWatcher(vm, source, callback, opts);
}
function traverse(value, seen) {
    if (seen === void 0) { seen = new Set(); }
    if (!isObject(value) || seen.has(value)) {
        return value;
    }
    seen.add(value);
    if (isRef(value)) {
        traverse(value.value, seen);
    }
    else if (isArray(value)) {
        for (var i = 0; i < value.length; i++) {
            traverse(value[i], seen);
        }
    }
    else if (isSet(value) || isMap(value)) {
        value.forEach(function (v) {
            traverse(v, seen);
        });
    }
    else if (isPlainObject(value)) {
        for (var key in value) {
            traverse(value[key], seen);
        }
    }
    return value;
}

// implement
function computed(getterOrOptions) {
    var _a;
    var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    var getter;
    var setter;
    if (typeof getterOrOptions === 'function') {
        getter = getterOrOptions;
    }
    else {
        getter = getterOrOptions.get;
        setter = getterOrOptions.set;
    }
    var computedSetter;
    var computedGetter;
    if (vm && !vm.$isServer) {
        var _b = getVueInternalClasses(), Watcher_1 = _b.Watcher, Dep_1 = _b.Dep;
        var watcher_1;
        computedGetter = function () {
            if (!watcher_1) {
                watcher_1 = new Watcher_1(vm, getter, noopFn, { lazy: true });
            }
            if (watcher_1.dirty) {
                watcher_1.evaluate();
            }
            if (Dep_1.target) {
                watcher_1.depend();
            }
            return watcher_1.value;
        };
        computedSetter = function (v) {
            if (( true) && !setter) {
                warn$1('Write operation failed: computed value is readonly.', vm);
                return;
            }
            if (setter) {
                setter(v);
            }
        };
    }
    else {
        // fallback
        var computedHost_1 = defineComponentInstance(getVueConstructor(), {
            computed: {
                $$state: {
                    get: getter,
                    set: setter,
                },
            },
        });
        vm && vm.$on('hook:destroyed', function () { return computedHost_1.$destroy(); });
        computedGetter = function () { return computedHost_1.$$state; };
        computedSetter = function (v) {
            if (( true) && !setter) {
                warn$1('Write operation failed: computed value is readonly.', vm);
                return;
            }
            computedHost_1.$$state = v;
        };
    }
    return createRef({
        get: computedGetter,
        set: computedSetter,
    });
}

var NOT_FOUND = {};
function resolveInject(provideKey, vm) {
    var source = vm;
    while (source) {
        // @ts-ignore
        if (source._provided && hasOwn(source._provided, provideKey)) {
            //@ts-ignore
            return source._provided[provideKey];
        }
        source = source.$parent;
    }
    return NOT_FOUND;
}
function provide(key, value) {
    var vm = currentVMInFn('provide');
    if (!vm)
        return;
    if (!vm._provided) {
        var provideCache_1 = {};
        proxy(vm, '_provided', {
            get: function () { return provideCache_1; },
            set: function (v) { return Object.assign(provideCache_1, v); },
        });
    }
    vm._provided[key] = value;
}
function inject(key, defaultValue, treatDefaultAsFactory) {
    var _a;
    if (treatDefaultAsFactory === void 0) { treatDefaultAsFactory = false; }
    if (!key) {
        return defaultValue;
    }
    var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    if (!vm) {
        warn$1("inject() can only be used inside setup() or functional components.");
        return;
    }
    var val = resolveInject(key, vm);
    if (val !== NOT_FOUND) {
        return val;
    }
    if (defaultValue === undefined && ("development" !== 'production')) {
        warn$1("Injection \"" + String(key) + "\" not found", vm);
    }
    return treatDefaultAsFactory && isFunction(defaultValue)
        ? defaultValue()
        : defaultValue;
}

var EMPTY_OBJ = ( true)
    ? Object.freeze({})
    : undefined;
var useCssModule = function (name) {
    var _a;
    if (name === void 0) { name = '$style'; }
    var instance = getCurrentInstance();
    if (!instance) {
        ( true) && warn$1("useCssModule must be called inside setup()");
        return EMPTY_OBJ;
    }
    var mod = (_a = instance.proxy) === null || _a === void 0 ? void 0 : _a[name];
    if (!mod) {
        ( true) &&
            warn$1("Current instance does not have CSS module named \"" + name + "\".");
        return EMPTY_OBJ;
    }
    return mod;
};
/**
 * @deprecated use `useCssModule` instead.
 */
var useCSSModule = useCssModule;

function createApp(rootComponent, rootProps) {
    if (rootProps === void 0) { rootProps = undefined; }
    var V = getVueConstructor();
    var mountedVM = undefined;
    return {
        config: V.config,
        use: V.use.bind(V),
        mixin: V.mixin.bind(V),
        component: V.component.bind(V),
        directive: V.directive.bind(V),
        mount: function (el, hydrating) {
            if (!mountedVM) {
                mountedVM = new V(__assign({ propsData: rootProps }, rootComponent));
                mountedVM.$mount(el, hydrating);
                return mountedVM;
            }
            else {
                if ((true)) {
                    warn$1("App has already been mounted.\n" +
                        "If you want to remount the same app, move your app creation logic " +
                        "into a factory function and create fresh app instances for each " +
                        "mount - e.g. `const createMyApp = () => createApp(App)`");
                }
                return mountedVM;
            }
        },
        unmount: function () {
            if (mountedVM) {
                mountedVM.$destroy();
                mountedVM = undefined;
            }
            else if ((true)) {
                warn$1("Cannot unmount an app that is not mounted.");
            }
        },
    };
}

var nextTick = function nextTick() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return (_a = getVueConstructor()) === null || _a === void 0 ? void 0 : _a.nextTick.apply(this, args);
};

var fallbackCreateElement;
var createElement = function createElement() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var instance = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    if (!instance) {
        warn$1('`createElement()` has been called outside of render function.');
        if (!fallbackCreateElement) {
            fallbackCreateElement = defineComponentInstance(getVueConstructor())
                .$createElement;
        }
        return fallbackCreateElement.apply(fallbackCreateElement, args);
    }
    return instance.$createElement.apply(instance, args);
};

/**
 * Displays a warning message (using console.error) with a stack trace if the
 * function is called inside of active component.
 *
 * @param message warning message to be displayed
 */
function warn(message) {
    var _a;
    warn$1(message, (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
}

function set(vm, key, value) {
    var state = (vm.__composition_api_state__ =
        vm.__composition_api_state__ || {});
    state[key] = value;
}
function get(vm, key) {
    return (vm.__composition_api_state__ || {})[key];
}
var vmStateManager = {
    set: set,
    get: get,
};

function asVmProperty(vm, propName, propValue) {
    var props = vm.$options.props;
    if (!(propName in vm) && !(props && hasOwn(props, propName))) {
        if (isRef(propValue)) {
            proxy(vm, propName, {
                get: function () { return propValue.value; },
                set: function (val) {
                    propValue.value = val;
                },
            });
        }
        else {
            proxy(vm, propName, {
                get: function () {
                    if (isReactive(propValue)) {
                        propValue.__ob__.dep.depend();
                    }
                    return propValue;
                },
                set: function (val) {
                    propValue = val;
                },
            });
        }
        if ((true)) {
            // expose binding to Vue Devtool as a data property
            // delay this until state has been resolved to prevent repeated works
            vm.$nextTick(function () {
                if (Object.keys(vm._data).indexOf(propName) !== -1) {
                    return;
                }
                if (isRef(propValue)) {
                    proxy(vm._data, propName, {
                        get: function () { return propValue.value; },
                        set: function (val) {
                            propValue.value = val;
                        },
                    });
                }
                else {
                    proxy(vm._data, propName, {
                        get: function () { return propValue; },
                        set: function (val) {
                            propValue = val;
                        },
                    });
                }
            });
        }
    }
    else if ((true)) {
        if (props && hasOwn(props, propName)) {
            warn$1("The setup binding property \"" + propName + "\" is already declared as a prop.", vm);
        }
        else {
            warn$1("The setup binding property \"" + propName + "\" is already declared.", vm);
        }
    }
}
function updateTemplateRef(vm) {
    var rawBindings = vmStateManager.get(vm, 'rawBindings') || {};
    if (!rawBindings || !Object.keys(rawBindings).length)
        return;
    var refs = vm.$refs;
    var oldRefKeys = vmStateManager.get(vm, 'refs') || [];
    for (var index = 0; index < oldRefKeys.length; index++) {
        var key = oldRefKeys[index];
        var setupValue = rawBindings[key];
        if (!refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = null;
        }
    }
    var newKeys = Object.keys(refs);
    var validNewKeys = [];
    for (var index = 0; index < newKeys.length; index++) {
        var key = newKeys[index];
        var setupValue = rawBindings[key];
        if (refs[key] && setupValue && isRef(setupValue)) {
            setupValue.value = refs[key];
            validNewKeys.push(key);
        }
    }
    vmStateManager.set(vm, 'refs', validNewKeys);
}
function resolveScopedSlots(vm, slotsProxy) {
    var parentVNode = vm.$options._parentVnode;
    if (!parentVNode)
        return;
    var prevSlots = vmStateManager.get(vm, 'slots') || [];
    var curSlots = resolveSlots(parentVNode.data.scopedSlots, vm.$slots);
    // remove staled slots
    for (var index = 0; index < prevSlots.length; index++) {
        var key = prevSlots[index];
        if (!curSlots[key]) {
            delete slotsProxy[key];
        }
    }
    // proxy fresh slots
    var slotNames = Object.keys(curSlots);
    for (var index = 0; index < slotNames.length; index++) {
        var key = slotNames[index];
        if (!slotsProxy[key]) {
            slotsProxy[key] = createSlotProxy(vm, key);
        }
    }
    vmStateManager.set(vm, 'slots', slotNames);
}
function activateCurrentInstance(vm, fn, onError) {
    var preVm = getCurrentVue2Instance();
    setCurrentInstance(vm);
    try {
        return fn(vm);
    }
    catch (err) {
        if (onError) {
            onError(err);
        }
        else {
            throw err;
        }
    }
    finally {
        setCurrentInstance(preVm);
    }
}

function mixin(Vue) {
    Vue.mixin({
        beforeCreate: functionApiInit,
        mounted: function () {
            updateTemplateRef(this);
        },
        updated: function () {
            updateTemplateRef(this);
        },
    });
    /**
     * Vuex init hook, injected into each instances init hooks list.
     */
    function functionApiInit() {
        var vm = this;
        var $options = vm.$options;
        var setup = $options.setup, render = $options.render;
        if (render) {
            // keep currentInstance accessible for createElement
            $options.render = function () {
                var _this = this;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return activateCurrentInstance(vm, function () { return render.apply(_this, args); });
            };
        }
        if (!setup) {
            return;
        }
        if (typeof setup !== 'function') {
            if ((true)) {
                warn$1('The "setup" option should be a function that returns a object in component definitions.', vm);
            }
            return;
        }
        var data = $options.data;
        // wrapper the data option, so we can invoke setup before data get resolved
        $options.data = function wrappedData() {
            initSetup(vm, vm.$props);
            return typeof data === 'function'
                ? data.call(vm, vm)
                : data || {};
        };
    }
    function initSetup(vm, props) {
        if (props === void 0) { props = {}; }
        var setup = vm.$options.setup;
        var ctx = createSetupContext(vm);
        // fake reactive for `toRefs(props)`
        def(props, '__ob__', createObserver());
        // resolve scopedSlots and slots to functions
        // @ts-expect-error
        resolveScopedSlots(vm, ctx.slots);
        var binding;
        activateCurrentInstance(vm, function () {
            // make props to be fake reactive, this is for `toRefs(props)`
            binding = setup(props, ctx);
        });
        if (!binding)
            return;
        if (isFunction(binding)) {
            // keep typescript happy with the binding type.
            var bindingFunc_1 = binding;
            // keep currentInstance accessible for createElement
            vm.$options.render = function () {
                // @ts-expect-error
                resolveScopedSlots(vm, ctx.slots);
                return activateCurrentInstance(vm, function () { return bindingFunc_1(); });
            };
            return;
        }
        else if (isPlainObject(binding)) {
            if (isReactive(binding)) {
                binding = toRefs(binding);
            }
            vmStateManager.set(vm, 'rawBindings', binding);
            var bindingObj_1 = binding;
            Object.keys(bindingObj_1).forEach(function (name) {
                var bindingValue = bindingObj_1[name];
                if (!isRef(bindingValue)) {
                    if (!isReactive(bindingValue)) {
                        if (isFunction(bindingValue)) {
                            bindingValue = bindingValue.bind(vm);
                        }
                        else if (!isObject(bindingValue)) {
                            bindingValue = ref(bindingValue);
                        }
                        else if (hasReactiveArrayChild(bindingValue)) {
                            // creates a custom reactive properties without make the object explicitly reactive
                            // NOTE we should try to avoid this, better implementation needed
                            customReactive(bindingValue);
                        }
                    }
                    else if (isArray(bindingValue)) {
                        bindingValue = ref(bindingValue);
                    }
                }
                asVmProperty(vm, name, bindingValue);
            });
            return;
        }
        if ((true)) {
            assert(false, "\"setup\" must return a \"Object\" or a \"Function\", got \"" + Object.prototype.toString
                .call(binding)
                .slice(8, -1) + "\"");
        }
    }
    function customReactive(target) {
        if (!isPlainObject(target) ||
            isRef(target) ||
            isReactive(target) ||
            isRaw(target))
            return;
        var Vue = getVueConstructor();
        // @ts-expect-error https://github.com/vuejs/vue/pull/12132
        var defineReactive = Vue.util.defineReactive;
        Object.keys(target).forEach(function (k) {
            var val = target[k];
            defineReactive(target, k, val);
            if (val) {
                customReactive(val);
            }
            return;
        });
    }
    function hasReactiveArrayChild(target, visited) {
        if (visited === void 0) { visited = new Map(); }
        if (visited.has(target)) {
            return visited.get(target);
        }
        visited.set(target, false);
        if (Array.isArray(target) && isReactive(target)) {
            visited.set(target, true);
            return true;
        }
        if (!isPlainObject(target) || isRaw(target)) {
            return false;
        }
        return Object.keys(target).some(function (x) {
            return hasReactiveArrayChild(target[x], visited);
        });
    }
    function createSetupContext(vm) {
        var ctx = { slots: {} };
        var propsPlain = [
            'root',
            'parent',
            'refs',
            'listeners',
            'isServer',
            'ssrContext',
        ];
        var propsReactiveProxy = ['attrs'];
        var methodReturnVoid = ['emit'];
        propsPlain.forEach(function (key) {
            var srcKey = "$" + key;
            proxy(ctx, key, {
                get: function () { return vm[srcKey]; },
                set: function () {
                    warn$1("Cannot assign to '" + key + "' because it is a read-only property", vm);
                },
            });
        });
        propsReactiveProxy.forEach(function (key) {
            var srcKey = "$" + key;
            proxy(ctx, key, {
                get: function () {
                    var e_1, _a;
                    var data = reactive({});
                    var source = vm[srcKey];
                    var _loop_1 = function (attr) {
                        proxy(data, attr, {
                            get: function () {
                                // to ensure it always return the latest value
                                return vm[srcKey][attr];
                            },
                        });
                    };
                    try {
                        for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var attr = _c.value;
                            _loop_1(attr);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                    return data;
                },
                set: function () {
                    warn$1("Cannot assign to '" + key + "' because it is a read-only property", vm);
                },
            });
        });
        methodReturnVoid.forEach(function (key) {
            var srcKey = "$" + key;
            proxy(ctx, key, {
                get: function () {
                    return function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        var fn = vm[srcKey];
                        fn.apply(vm, args);
                    };
                },
            });
        });
        if (false) {}
        return ctx;
    }
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData(from, to) {
    if (!from)
        return to;
    if (!to)
        return from;
    var key;
    var toVal;
    var fromVal;
    var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);
    for (var i = 0; i < keys.length; i++) {
        key = keys[i];
        // in case the object is already observed...
        if (key === '__ob__')
            continue;
        toVal = to[key];
        fromVal = from[key];
        if (!hasOwn(to, key)) {
            to[key] = fromVal;
        }
        else if (toVal !== fromVal &&
            isPlainObject(toVal) &&
            !isRef(toVal) &&
            isPlainObject(fromVal) &&
            !isRef(fromVal)) {
            mergeData(fromVal, toVal);
        }
    }
    return to;
}
function install(Vue) {
    if (isVueRegistered(Vue)) {
        if ((true)) {
            warn$1('[vue-composition-api] already installed. Vue.use(VueCompositionAPI) should be called only once.');
        }
        return;
    }
    if ((true)) {
        if (Vue.version) {
            if (Vue.version[0] !== '2' || Vue.version[1] !== '.') {
                warn$1("[vue-composition-api] only works with Vue 2, v" + Vue.version + " found.");
            }
        }
        else {
            warn$1('[vue-composition-api] no Vue version found');
        }
    }
    Vue.config.optionMergeStrategies.setup = function (parent, child) {
        return function mergedSetupFn(props, context) {
            return mergeData(typeof parent === 'function' ? parent(props, context) || {} : undefined, typeof child === 'function' ? child(props, context) || {} : undefined);
        };
    };
    setVueConstructor(Vue);
    mixin(Vue);
}
var Plugin = {
    install: function (Vue) { return install(Vue); },
};

// implementation, close to no-op
function defineComponent(options) {
    return options;
}

function defineAsyncComponent(source) {
    if (isFunction(source)) {
        source = { loader: source };
    }
    var loader = source.loader, loadingComponent = source.loadingComponent, errorComponent = source.errorComponent, _a = source.delay, delay = _a === void 0 ? 200 : _a, timeout = source.timeout, // undefined = never times out
    _b = source.suspensible, // undefined = never times out
    suspensible = _b === void 0 ? false : _b, // in Vue 3 default is true
    userOnError = source.onError;
    if (( true) && suspensible) {
        warn$1("The suspensiblbe option for async components is not supported in Vue2. It is ignored.");
    }
    var pendingRequest = null;
    var retries = 0;
    var retry = function () {
        retries++;
        pendingRequest = null;
        return load();
    };
    var load = function () {
        var thisRequest;
        return (pendingRequest ||
            (thisRequest = pendingRequest = loader()
                .catch(function (err) {
                err = err instanceof Error ? err : new Error(String(err));
                if (userOnError) {
                    return new Promise(function (resolve, reject) {
                        var userRetry = function () { return resolve(retry()); };
                        var userFail = function () { return reject(err); };
                        userOnError(err, userRetry, userFail, retries + 1);
                    });
                }
                else {
                    throw err;
                }
            })
                .then(function (comp) {
                if (thisRequest !== pendingRequest && pendingRequest) {
                    return pendingRequest;
                }
                if (( true) && !comp) {
                    warn$1("Async component loader resolved to undefined. " +
                        "If you are using retry(), make sure to return its return value.");
                }
                // interop module default
                if (comp &&
                    (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
                    comp = comp.default;
                }
                if (( true) && comp && !isObject(comp) && !isFunction(comp)) {
                    throw new Error("Invalid async component load result: " + comp);
                }
                return comp;
            })));
    };
    return function () {
        var component = load();
        return {
            component: component,
            delay: delay,
            timeout: timeout,
            error: errorComponent,
            loading: loadingComponent,
        };
    };
}

var version = "1.0.0-rc.13";
// auto install when using CDN
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Plugin);
}

/* harmony default export */ __webpack_exports__["default"] = (Plugin);



/***/ }),

/***/ "../coreui/node_modules/@vuelidate/core/dist/index.esm.js":
/*!****************************************************************!*\
  !*** ../coreui/node_modules/@vuelidate/core/dist/index.esm.js ***!
  \****************************************************************/
/*! exports provided: default, CollectFlag, useVuelidate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectFlag", function() { return CollectFlag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useVuelidate", function() { return useVuelidate; });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "../coreui/node_modules/vue-demi/lib/index.esm.js");


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function unwrapObj(obj) {
  var ignoreKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return Object.keys(obj).reduce(function (o, k) {
    if (ignoreKeys.includes(k)) return o;
    o[k] = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(obj[k]);
    return o;
  }, {});
}
function isFunction(val) {
  return typeof val === 'function';
}
function isProxy(value) {
  return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["isReactive"])(value) || Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["isReadonly"])(value);
}

function _call(body, then, direct) {
  if (direct) {
    return then ? then(body()) : body();
  }

  try {
    var result = Promise.resolve(body());
    return then ? result.then(then) : result;
  } catch (e) {
    return Promise.reject(e);
  }
}

var ROOT_PATH = '__root';
/**
 * @typedef {import('vue-demi').ComponentPublicInstance} VueInstance
 */

/**
 * @typedef {import('vue-demi').ComputedRef} ComputedRef
 */

/**
 * @typedef {import('vue-demi').WatchStopHandle} WatchStopHandle
 */

/**
 * @typedef NormalizedValidator
 * @property {Validator} $validator
 * @property {String | Ref<String> | function(*): string} [$message]
 * @property {Object | Ref<Object>} [$params]
 * @property {Object | Ref<Object>} [$async]
 * @property {Ref<*>[]} [$watchTargets]
 */

/**
 * Response form a raw Validator function.
 * Should return a Boolean or an object with $invalid property.
 * @typedef {Boolean | { $valid: Boolean }} ValidatorResponse
 */

/**
 * Raw validator function, before being normalized
 * Can return a Promise or a {@see ValidatorResponse}
 * @typedef {function(*): ((Promise<ValidatorResponse> | ValidatorResponse))} Validator
 */

/**
 * Sorts the validators for a state tree branch
 * @param {Object<NormalizedValidator|Function>} validationsRaw
 * @return {{ rules: Object<NormalizedValidator>, nestedValidators: Object, config: GlobalConfig }}
 */

function _async(f) {
  return function () {
    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}
/**
 * Calls a validation rule by unwrapping it's value first from a ref.
 * @param {Validator} rule
 * @param {Ref} value
 * @param {VueInstance} instance
 * @return {Promise<ValidatorResponse> | ValidatorResponse}
 */


function sortValidations() {
  var validationsRaw = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var validations = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(validationsRaw);
  var validationKeys = Object.keys(validations);
  var rules = {};
  var nestedValidators = {};
  var config = {};
  validationKeys.forEach(function (key) {
    var v = validations[key];

    switch (true) {
      // If it is already normalized, use it
      case isFunction(v.$validator):
        rules[key] = v;
        break;
      // If it is just a function, normalize it first
      // into { $validator: <Fun> }

      case isFunction(v):
        rules[key] = {
          $validator: v
        };
        break;
      // Catch $-prefixed properties as config

      case key.startsWith('$'):
        config[key] = v;
        break;
      // If it doesn’t match any of the above,
      // treat as nestedValidators state property

      default:
        nestedValidators[key] = v;
    }
  });
  return {
    rules: rules,
    nestedValidators: nestedValidators,
    config: config
  };
}

function callRule(rule, value, instance) {
  var v = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(value);
  return rule.call(instance, v, instance);
}
/**
 * Normalizes the validator result
 * Allows passing a boolean of an object like `{ $valid: Boolean }`
 * @param {ValidatorResponse} result - Validator result
 * @return {boolean}
 */


function normalizeValidatorResponse(result) {
  return result.$valid !== undefined ? !result.$valid : !result;
}
/**
 * Returns the result of an async validator.
 * @param {Validator} rule
 * @param {Ref<*>} model
 * @param {Ref<Boolean>} $pending
 * @param {Ref<Boolean>} $dirty
 * @param {GlobalConfig} config
 * @param {boolean} config.$lazy
 * @param {Ref<*>} $response
 * @param {VueInstance} instance
 * @param {Ref<*>[]} watchTargets
 * @return {{ $invalid: Ref<Boolean>, $unwatch: WatchStopHandle }}
 */


function createAsyncResult(rule, model, $pending, $dirty, _ref, $response, instance) {
  var $lazy = _ref.$lazy;
  var watchTargets = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : [];
  var $invalid = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(!!$dirty.value);
  var $pendingCounter = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(0);
  $pending.value = false;
  var $unwatch = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])([model, $dirty].concat(watchTargets), function () {
    if ($lazy && !$dirty.value) return false;
    var ruleResult; // make sure we dont break if a validator throws

    try {
      ruleResult = callRule(rule, model, instance);
    } catch (err) {
      // convert to a promise, so we can handle it async
      ruleResult = Promise.reject(err);
    }

    $pendingCounter.value++;
    $pending.value = !!$pendingCounter.value;
    $invalid.value = true;
    Promise.resolve(ruleResult).then(function (data) {
      $pendingCounter.value--;
      $pending.value = !!$pendingCounter.value;
      $response.value = data;
      $invalid.value = normalizeValidatorResponse(data);
    })["catch"](function (error) {
      $pendingCounter.value--;
      $pending.value = !!$pendingCounter.value;
      $response.value = error;
      $invalid.value = true;
    });
  }, {
    immediate: true,
    deep: _typeof(model) === 'object'
  });
  return {
    $invalid: $invalid,
    $unwatch: $unwatch
  };
}
/**
 * Returns the result of a sync validator
 * @param {Validator} rule
 * @param {Ref<*>} model
 * @param {Ref<Boolean>} $dirty
 * @param {GlobalConfig} config
 * @param {Boolean} config.$lazy
 * @param {Ref<*>} $response
 * @param {VueInstance} instance
 * @return {{$unwatch: (function(): {}), $invalid: ComputedRef<boolean>}}
 */


function createSyncResult(rule, model, $dirty, _ref2, $response, instance) {
  var $lazy = _ref2.$lazy;

  var $unwatch = function $unwatch() {
    return {};
  };

  var $invalid = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if ($lazy && !$dirty.value) return false;

    try {
      var result = callRule(rule, model, instance);
      $response.value = result;
      return normalizeValidatorResponse(result);
    } catch (err) {
      $response.value = err;
    }

    return true;
  });
  return {
    $unwatch: $unwatch,
    $invalid: $invalid
  };
}
/**
 * Returns the validation result.
 * Detects async and sync validators.
 * @param {NormalizedValidator} rule
 * @param {Ref<*>} model
 * @param {Ref<boolean>} $dirty
 * @param {GlobalConfig} config - Vuelidate config
 * @param {VueInstance} instance - component instance
 * @param {string} validatorName - name of the current validator
 * @param {string} propertyKey - the current property we are validating
 * @param {string} propertyPath - the deep path to the validated property
 * @return {{ $params: *, $message: Ref<String>, $pending: Ref<Boolean>, $invalid: Ref<Boolean>, $response: Ref<*>, $unwatch: WatchStopHandle }}
 */


function createValidatorResult(rule, model, $dirty, config, instance, validatorName, propertyKey, propertyPath) {
  var $pending = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  var $params = rule.$params || {};
  var $response = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(null);
  var $invalid;
  var $unwatch;

  if (rule.$async) {
    var _createAsyncResult = createAsyncResult(rule.$validator, model, $pending, $dirty, config, $response, instance, rule.$watchTargets);

    $invalid = _createAsyncResult.$invalid;
    $unwatch = _createAsyncResult.$unwatch;
  } else {
    var _createSyncResult = createSyncResult(rule.$validator, model, $dirty, config, $response, instance);

    $invalid = _createSyncResult.$invalid;
    $unwatch = _createSyncResult.$unwatch;
  }

  var message = rule.$message;
  var $message = isFunction(message) ? Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return message(unwrapObj({
      $pending: $pending,
      $invalid: $invalid,
      $params: unwrapObj($params),
      // $params can hold refs, so we unwrap them for easy access
      $model: model,
      $response: $response,
      $validator: validatorName,
      $propertyPath: propertyPath,
      $property: propertyKey
    }));
  }) : message || '';
  return {
    $message: $message,
    $params: $params,
    $pending: $pending,
    $invalid: $invalid,
    $response: $response,
    $unwatch: $unwatch
  };
}
/**
 * @typedef ErrorObject
 * @property {Ref<String>} $message - Reactive error message
 * @property {Ref<Object>} $params - Params passed from withParams
 * @property {Ref<Boolean>} $pending - If validation is pending
 * @property {String} $property - State key
 * @property {String} $propertyPath - Dot notation path to state
 * @property {String} $validator - Validator name
 * @property {String} $uid - Unique identifier
 */

/**
 * @typedef ValidationResult
 * @property {Ref<Boolean>} $pending
 * @property {Ref<Boolean>} $dirty
 * @property {Ref<Boolean>} $invalid
 * @property {Ref<Boolean>} $error
 * @property {Ref<String>} $path
 * @property {Function} $touch
 * @property {Function} $reset
 * @property {ComputedRef<ErrorObject[]>} $errors
 * @property {ComputedRef<ErrorObject[]>} $silentErrors
 */

/**
 * Creates the main Validation Results object for a state tree
 * Walks the tree's top level branches
 * @param {Object<NormalizedValidator>} rules - Rules for the current state tree
 * @param {Object} model - Current state value
 * @param {String} key - Key for the current state tree
 * @param {ResultsStorage} [resultsCache] - A cache map of all the validators
 * @param {String} [path] - the current property path
 * @param {GlobalConfig} [config] - the config object
 * @param {VueInstance} instance
 * @param {ComputedRef<Object>} externalResults
 * @return {ValidationResult | {}}
 */


function createValidationResults(rules, model, key, resultsCache, path, config, instance, externalResults) {
  // collect the property keys
  var ruleKeys = Object.keys(rules);
  var cachedResult = resultsCache.get(path, rules);
  var $dirty = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);

  if (cachedResult) {
    // if the rules are the same as before, use the cached results
    if (!cachedResult.$partial) return cachedResult; // remove old watchers

    cachedResult.$unwatch(); // use the `$dirty.value`, so we dont save references by accident

    $dirty.value = cachedResult.$dirty.value;
  }

  var result = {
    // restore $dirty from cache
    $dirty: $dirty,
    $path: path,
    $touch: function $touch() {
      if (!$dirty.value) $dirty.value = true;
    },
    $reset: function $reset() {
      if ($dirty.value) $dirty.value = false;
    }
  };
  /**
   * If there are no validation rules, it is most likely
   * a top level state, aka root
   */

  if (!ruleKeys.length) {
    // if there are cached results, we should overwrite them with the new ones
    cachedResult && resultsCache.set(path, rules, result);
    return result;
  }

  ruleKeys.forEach(function (ruleKey) {
    result[ruleKey] = createValidatorResult(rules[ruleKey], model, result.$dirty, config, instance, ruleKey, key, path);
  });
  result.$externalResults = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (!externalResults.value) return [];
    return [].concat(externalResults.value).map(function (stringError, index) {
      return {
        $propertyPath: path,
        $property: key,
        $validator: '$externalResults',
        $uid: "".concat(path, "-").concat(index),
        $message: stringError,
        $params: {},
        $response: null,
        $pending: false
      };
    });
  });
  result.$invalid = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return !!result.$externalResults.value.length || ruleKeys.some(function (ruleKey) {
      return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(result[ruleKey].$invalid);
    });
  });
  result.$pending = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return ruleKeys.some(function (ruleKey) {
      return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(result[ruleKey].$pending);
    });
  });
  result.$error = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return result.$invalid.value && result.$dirty.value;
  });
  result.$silentErrors = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return ruleKeys.filter(function (ruleKey) {
      return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(result[ruleKey].$invalid);
    }).map(function (ruleKey) {
      var res = result[ruleKey];
      return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])({
        $propertyPath: path,
        $property: key,
        $validator: ruleKey,
        $uid: "".concat(path, "-").concat(ruleKey),
        $message: res.$message,
        $params: res.$params,
        $response: res.$response,
        $pending: res.$pending
      });
    }).concat(result.$externalResults.value);
  });
  result.$errors = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return result.$dirty.value ? result.$silentErrors.value : [];
  });

  result.$unwatch = function () {
    return ruleKeys.forEach(function (ruleKey) {
      result[ruleKey].$unwatch();
    });
  };

  resultsCache.set(path, rules, result);
  return result;
}
/**
 * Collects the validation results of all nested state properties
 * @param {Object<NormalizedValidator|Function>} validations - The validation
 * @param {Object} nestedState - Current state
 * @param {String} path - Path to current property
 * @param {ResultsStorage} resultsCache - Validations cache map
 * @param {GlobalConfig} config - The config object
 * @param {VueInstance} instance - The current Vue instance
 * @param {ComputedRef<object>} nestedExternalResults - The external results for this nested collection
 * @return {{}}
 */


function collectNestedValidationResults(validations, nestedState, path, resultsCache, config, instance, nestedExternalResults) {
  var nestedValidationKeys = Object.keys(validations); // if we have no state, return empty object

  if (!nestedValidationKeys.length) return {};
  return nestedValidationKeys.reduce(function (results, nestedKey) {
    // build validation results for nested state
    results[nestedKey] = setValidations({
      validations: validations[nestedKey],
      state: nestedState,
      key: nestedKey,
      parentKey: path,
      resultsCache: resultsCache,
      globalConfig: config,
      instance: instance,
      externalResults: nestedExternalResults
    });
    return results;
  }, {});
}
/**
 * Generates the Meta fields from the results
 * @param {ValidationResult|{}} results
 * @param {Object.<string, ValidationResult>[]} nestedResults
 * @param {Object.<string, ValidationResult>[]} childResults
 * @return {{$anyDirty: Ref<Boolean>, $error: Ref<Boolean>, $invalid: Ref<Boolean>, $errors: Ref<ErrorObject[]>, $dirty: Ref<Boolean>, $touch: Function, $reset: Function }}
 */


function createMetaFields(results, nestedResults, childResults) {
  var allResults = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return [nestedResults, childResults].filter(function (res) {
      return res;
    }).reduce(function (allRes, res) {
      return allRes.concat(Object.values(Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(res)));
    }, []);
  }); // returns `$dirty` as true, if all children are dirty

  var $dirty = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return results.$dirty.value || (allResults.value.length ? allResults.value.every(function (r) {
        return r.$dirty;
      }) : false);
    },
    set: function set(v) {
      results.$dirty.value = v;
    }
  });
  var $silentErrors = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    // current state level errors, fallback to empty array if root
    var modelErrors = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(results.$silentErrors) || []; // collect all nested and child $silentErrors

    var nestedErrors = allResults.value.filter(function (result) {
      return (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(result).$silentErrors || []).length;
    }).reduce(function (errors, result) {
      return errors.concat.apply(errors, _toConsumableArray(result.$silentErrors));
    }, []); // merge the $silentErrors

    return modelErrors.concat(nestedErrors);
  });
  var $errors = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    // current state level errors, fallback to empty array if root
    var modelErrors = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(results.$errors) || []; // collect all nested and child $errors

    var nestedErrors = allResults.value.filter(function (result) {
      return (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(result).$errors || []).length;
    }).reduce(function (errors, result) {
      return errors.concat.apply(errors, _toConsumableArray(result.$errors));
    }, []); // merge the $errors

    return modelErrors.concat(nestedErrors);
  });
  var $invalid = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return (// if any of the nested values is invalid
      allResults.value.some(function (r) {
        return r.$invalid;
      }) || // or if the current state is invalid
      Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(results.$invalid) || // fallback to false if is root
      false
    );
  });
  var $pending = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return (// if any of the nested values is pending
      allResults.value.some(function (r) {
        return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(r.$pending);
      }) || // if any of the current state validators is pending
      Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(results.$pending) || // fallback to false if is root
      false
    );
  });
  var $anyDirty = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return allResults.value.some(function (r) {
      return r.$dirty;
    }) || allResults.value.some(function (r) {
      return r.$anyDirty;
    }) || $dirty.value;
  });
  var $error = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return $invalid.value && $dirty.value || false;
  });

  var $touch = function $touch() {
    // call the root $touch
    results.$touch(); // call all nested level $touch

    allResults.value.forEach(function (result) {
      result.$touch();
    });
  };

  var $reset = function $reset() {
    // reset the root $dirty state
    results.$reset(); // reset all the children $dirty states

    allResults.value.forEach(function (result) {
      result.$reset();
    });
  }; // Ensure that if all child and nested results are $dirty, this also becomes $dirty


  if (allResults.value.length && allResults.value.every(function (nr) {
    return nr.$dirty;
  })) $touch();
  return {
    $dirty: $dirty,
    $errors: $errors,
    $invalid: $invalid,
    $anyDirty: $anyDirty,
    $error: $error,
    $pending: $pending,
    $touch: $touch,
    $reset: $reset,
    $silentErrors: $silentErrors
  };
}
/**
 * @typedef VuelidateState
 * @property {WritableComputedRef<any>} $model
 * @property {ComputedRef<Boolean>} $dirty
 * @property {ComputedRef<Boolean>} $error
 * @property {ComputedRef<ErrorObject[]>} $errors
 * @property {ComputedRef<Boolean>} $invalid
 * @property {ComputedRef<Boolean>} $anyDirty
 * @property {ComputedRef<Boolean>} $pending
 * @property {Function} $touch
 * @property {Function} $reset
 * @property {String} $path
 * @property {ComputedRef<ErrorObject[]>} $silentErrors
 * @property {Function} [$validate]
 * @property {Function} [$getResultsForChild]
 * @property {Object.<string, VuelidateState>}
 */

/**
 * Main Vuelidate bootstrap function.
 * Used both for Composition API in `setup` and for Global App usage.
 * Used to collect validation state, when walking recursively down the state tree
 * @param {Object} params
 * @param {Object<NormalizedValidator|Function>} params.validations
 * @param {Object} params.state
 * @param {String} [params.key] - Current state property key. Used when being called on nested items
 * @param {String} [params.parentKey] - Parent state property key. Used when being called recursively
 * @param {Object<ValidationResult>} [params.childResults] - Used to collect child results.
 * @param {ResultsStorage} params.resultsCache - The cached validation results
 * @param {VueInstance} params.instance - The current Vue instance
 * @param {GlobalConfig} params.globalConfig - The validation config, passed to this setValidations instance.
 * @param {Reactive<object> | Ref<Object>} params.externalResults - External validation results
 * @return {UnwrapNestedRefs<VuelidateState>}
 */


function setValidations(_ref3) {
  var validations = _ref3.validations,
      state = _ref3.state,
      key = _ref3.key,
      parentKey = _ref3.parentKey,
      childResults = _ref3.childResults,
      resultsCache = _ref3.resultsCache,
      _ref3$globalConfig = _ref3.globalConfig,
      globalConfig = _ref3$globalConfig === void 0 ? {} : _ref3$globalConfig,
      instance = _ref3.instance,
      externalResults = _ref3.externalResults;
  var path = parentKey ? "".concat(parentKey, ".").concat(key) : key; // Sort out the validation object into:
  // – rules = validators for current state tree fragment
  // — nestedValidators = nested state fragments keys that might contain more validators
  // – config = configuration properties that affect this state fragment

  var _sortValidations = sortValidations(validations),
      rules = _sortValidations.rules,
      nestedValidators = _sortValidations.nestedValidators,
      config = _sortValidations.config;

  var mergedConfig = Object.assign({}, globalConfig, config); // create protected state for cases when the state branch does not exist yet.
  // This protects when using the OptionsAPI as the data is bound after the setup method

  var nestedState = key ? Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var s = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(state);
    return s ? Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(s[key]) : undefined;
  }) : state; // cache the external results, so we can revert back to them

  var cachedExternalResults = Object.assign({}, Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(externalResults) || {});
  var nestedExternalResults = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    var results = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(externalResults);
    if (!key) return results;
    return results ? Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(results[key]) : undefined;
  }); // Use rules for the current state fragment and validate it

  var results = createValidationResults(rules, nestedState, key, resultsCache, path, mergedConfig, instance, nestedExternalResults); // Use nested keys to repeat the process
  // *WARN*: This is recursive

  var nestedResults = collectNestedValidationResults(nestedValidators, nestedState, path, resultsCache, mergedConfig, instance, nestedExternalResults); // Collect and merge this level validation results
  // with all nested validation results

  var _createMetaFields = createMetaFields(results, nestedResults, childResults),
      $dirty = _createMetaFields.$dirty,
      $errors = _createMetaFields.$errors,
      $invalid = _createMetaFields.$invalid,
      $anyDirty = _createMetaFields.$anyDirty,
      $error = _createMetaFields.$error,
      $pending = _createMetaFields.$pending,
      $touch = _createMetaFields.$touch,
      $reset = _createMetaFields.$reset,
      $silentErrors = _createMetaFields.$silentErrors;
  /**
   * If we have no `key`, this is the top level state
   * We dont need `$model` there.
   */


  var $model = key ? Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(nestedState);
    },
    set: function set(val) {
      $dirty.value = true;
      var s = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(state);

      if (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["isRef"])(s[key])) {
        s[key].value = val;
      } else {
        s[key] = val;
      }
    }
  }) : null;

  if (key && mergedConfig.$autoDirty) {
    var $unwatch = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(nestedState, function () {
      var autoDirtyPath = "_".concat(path, "_$watcher_");
      var cachedAutoDirty = resultsCache.get(autoDirtyPath, {});
      if (!$dirty.value) $touch();
      if (cachedAutoDirty) cachedAutoDirty.$unwatch();
      resultsCache.set(autoDirtyPath, {}, {
        $unwatch: $unwatch
      });
    }, {
      flush: 'sync'
    });
  }
  /**
   * Executes the validators and returns the result.
   * @return {Promise<boolean>}
   */


  function $validate() {
    return new Promise(_async(function (resolve) {
      if (!$dirty.value) $touch(); // await the watchers

      return _call(vue_demi__WEBPACK_IMPORTED_MODULE_0__["nextTick"], function () {
        // return whether it is valid or not
        if (!$pending.value) return resolve(!$invalid.value);
        var unwatch = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])($pending, function () {
          resolve(!$invalid.value);
          unwatch();
        });
      });
    }));
  }
  /**
   * Returns a child component's results, based on registration name
   * @param {string} key
   * @return {VuelidateState}
   */


  function $getResultsForChild(key) {
    return (childResults.value || {})[key];
  }

  function $clearExternalResults() {
    if (Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["isRef"])(externalResults)) {
      externalResults.value = cachedExternalResults;
    } else {
      // if the external results state was empty, we need to delete every property, one by one
      if (Object.keys(cachedExternalResults).length === 0) {
        Object.keys(externalResults).forEach(function (k) {
          delete externalResults[k];
        });
      } else {
        // state was not empty, so we just assign it back into the current state
        Object.assign(externalResults, cachedExternalResults);
      }
    }
  }

  return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])(Object.assign({}, results, {
    // NOTE: The order here is very important, since we want to override
    // some of the *results* meta fields with the collective version of it
    // that includes the results of nested state validation results
    $model: $model,
    $dirty: $dirty,
    $error: $error,
    $errors: $errors,
    $invalid: $invalid,
    $anyDirty: $anyDirty,
    $pending: $pending,
    $touch: $touch,
    $reset: $reset,
    $path: path || ROOT_PATH,
    $silentErrors: $silentErrors
  }, childResults && {
    $getResultsForChild: $getResultsForChild,
    $validate: $validate,
    $clearExternalResults: $clearExternalResults
  }, nestedResults));
}

var ResultsStorage = /*#__PURE__*/function () {
  function ResultsStorage() {
    _classCallCheck(this, ResultsStorage);

    this.storage = new Map();
  }
  /**
   * Stores a validation result, and its rules by its path
   * @param {String} path
   * @param {Object<NormalizedValidator>} rules
   * @param {ValidationResult} result
   */


  _createClass(ResultsStorage, [{
    key: "set",
    value: function set(path, rules, result) {
      this.storage.set(path, {
        rules: rules,
        result: result
      });
    }
    /**
     * Check if the stored `results` for the provided `path` have the same `rules` compared to 'storedRules'
     * @param {String} path
     * @param {Object<NormalizedValidator>} rules
     * @param {Object<NormalizedValidator>} storedRules
     * @return {Boolean}
     */

  }, {
    key: "checkRulesValidity",
    value: function checkRulesValidity(path, rules, storedRules) {
      var storedRulesKeys = Object.keys(storedRules);
      var newRulesKeys = Object.keys(rules);
      if (newRulesKeys.length !== storedRulesKeys.length) return false;
      var hasAllValidators = newRulesKeys.every(function (ruleKey) {
        return storedRulesKeys.includes(ruleKey);
      });
      if (!hasAllValidators) return false;
      return newRulesKeys.every(function (ruleKey) {
        if (!rules[ruleKey].$params) return true;
        return Object.keys(rules[ruleKey].$params).every(function (paramKey) {
          // make sure to unwrap before comparing
          return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(storedRules[ruleKey].$params[paramKey]) === Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(rules[ruleKey].$params[paramKey]);
        });
      });
    }
    /**
     * Returns the matched result if catche is valid
     * @param {String} path
     * @param {Object<NormalizedValidator>} rules
     * @return {{$partial: boolean, $dirty: Ref<boolean>}|undefined|ValidationResult}
     */

  }, {
    key: "get",
    value: function get(path, rules) {
      var storedRuleResultPair = this.storage.get(path);
      if (!storedRuleResultPair) return undefined;
      var storedRules = storedRuleResultPair.rules,
          result = storedRuleResultPair.result;
      var isValidCache = this.checkRulesValidity(path, rules, storedRules);
      var $unwatch = result.$unwatch ? result.$unwatch : function () {
        return {};
      };
      if (!isValidCache) return {
        $dirty: result.$dirty,
        $partial: true,
        $unwatch: $unwatch
      };
      return result;
    }
  }]);

  return ResultsStorage;
}();

var VuelidateInjectChildResults = Symbol('vuelidate#injectChiildResults');
var VuelidateRemoveChildResults = Symbol('vuelidate#removeChiildResults');
var CollectFlag = {
  COLLECT_ALL: true,
  COLLECT_NONE: false
};
/**
 * Create helpers to collect validation state from child components
 * @param {Object} params
 * @param {String | Number} params.$scope - Parent component scope
 * @return {{sendValidationResultsToParent: function, childResults: ComputedRef<Object>, removeValidationResultsFromParent: function}}
 */

function nestedValidations(_ref) {
  var $scope = _ref.$scope;
  var childResultsRaw = {};
  var childResultsKeys = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])([]);
  var childResults = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return childResultsKeys.value.reduce(function (results, key) {
      results[key] = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(childResultsRaw[key]);
      return results;
    }, {});
  });
  /**
   * Allows children to send validation data up to their parent.
   * @param {Object} results - the results
   * @param {Object} args
   * @param {String} args.$registerAs - the $registeredAs key
   * @param {String | Number} args.$scope - the $scope key
   */

  function injectChildResultsIntoParent(results, _ref2) {
    var key = _ref2.$registerAs,
        childScope = _ref2.$scope,
        $stopPropagation = _ref2.$stopPropagation;
    if ($stopPropagation || $scope === CollectFlag.COLLECT_NONE || childScope === CollectFlag.COLLECT_NONE || $scope !== CollectFlag.COLLECT_ALL && $scope !== childScope) return;
    childResultsRaw[key] = results;
    childResultsKeys.value.push(key);
  }
  /**
   * Allows children to remove the validation data from their parent, before getting destroyed.
   * @param {String} key - the registeredAs key
   */


  function removeChildResultsFromParent(key) {
    // remove the key
    childResultsKeys.value = childResultsKeys.value.filter(function (childKey) {
      return childKey !== key;
    }); // remove the stored data for the key

    delete childResultsRaw[key];
  } // inject the `injectChildResultsIntoParent` method, into the current scope


  var sendValidationResultsToParent = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["inject"])(VuelidateInjectChildResults, function () {}); // provide to all of it's children the send results to parent function

  Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["provide"])(VuelidateInjectChildResults, injectChildResultsIntoParent);
  var removeValidationResultsFromParent = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["inject"])(VuelidateRemoveChildResults, function () {}); // provide to all of it's children the remove results  function

  Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["provide"])(VuelidateRemoveChildResults, removeChildResultsFromParent);
  return {
    childResults: childResults,
    sendValidationResultsToParent: sendValidationResultsToParent,
    removeValidationResultsFromParent: removeValidationResultsFromParent
  };
}
/**
 * @typedef GlobalConfig
 * @property {String} [$registerAs] - Config Object
 * @property {String | Number | Symbol} [$scope] - A scope to limit child component registration
 * @property {Boolean} [$stopPropagation] - Tells a Vue component to stop sending it's results up to the parent
 * @property {Ref<Object>} [$externalResults] - External error messages, like from server validation.
 */

/**
 * Composition API compatible Vuelidate
 * Use inside the `setup` lifecycle hook
 * @param {Object | GlobalConfig} [validations] - Validations Object or the globalConfig.
 * @param {Object} [state] - State object - required if `validations` is a validation object.
 * @param {GlobalConfig} [globalConfig] - Config Object
 * @return {UnwrapRef<*>}
 */


function useVuelidate(validations, state) {
  var globalConfig = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // if we pass only one argument, its most probably the globalConfig.
  // This use case is so parents can just collect results of child forms.
  if (arguments.length === 1) {
    globalConfig = validations;
    validations = undefined;
    state = undefined;
  }

  var _globalConfig = globalConfig,
      $registerAs = _globalConfig.$registerAs,
      _globalConfig$$scope = _globalConfig.$scope,
      $scope = _globalConfig$$scope === void 0 ? CollectFlag.COLLECT_ALL : _globalConfig$$scope,
      $stopPropagation = _globalConfig.$stopPropagation,
      $externalResults = _globalConfig.$externalResults;
  var instance = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])();
  var componentOptions = instance ? vue_demi__WEBPACK_IMPORTED_MODULE_0__["isVue3"] ? instance.type : instance.proxy.$options : {}; // if there is no registration name, add one.

  if (!$registerAs && instance) {
    // NOTE:
    // ._uid // Vue 2.x Composition-API plugin
    // .uid // Vue 3.0
    var uid = instance.uid || instance._uid;
    $registerAs = "_vuelidate_".concat(uid);
  }

  var validationResults = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
  var resultsCache = new ResultsStorage();

  var _ref3 = instance ? nestedValidations({
    $scope: $scope
  }) : {
    childResults: Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])({})
  },
      childResults = _ref3.childResults,
      sendValidationResultsToParent = _ref3.sendValidationResultsToParent,
      removeValidationResultsFromParent = _ref3.removeValidationResultsFromParent; // Options API


  if (!validations && componentOptions.validations) {
    var rules = componentOptions.validations;
    state = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["ref"])({});
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["onBeforeMount"])(function () {
      // Delay binding state to validations defined with the Options API until mounting, when the data
      // has been attached to the component instance. From that point on it will be reactive.
      state.value = instance.proxy; // helper proxy for instance property access. It makes every reference
      // reactive for the validation function

      function ComputedProxyFactory(target) {
        return new Proxy(target, {
          get: function get(target, prop, receiver) {
            return _typeof(target[prop]) === 'object' ? ComputedProxyFactory(target[prop]) : Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
              return target[prop];
            });
          }
        });
      }

      Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(function () {
        return isFunction(rules) ? rules.call(state.value, new ComputedProxyFactory(state.value)) : rules;
      }, function (validations) {
        validationResults.value = setValidations({
          validations: validations,
          state: state,
          childResults: childResults,
          resultsCache: resultsCache,
          globalConfig: globalConfig,
          instance: instance.proxy,
          externalResults: instance.proxy.vuelidateExternalResults
        });
      }, {
        immediate: true
      });
    });
    globalConfig = componentOptions.validationsConfig || {};
  } else {
    var validationsWatchTarget = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["isRef"])(validations) || isProxy(validations) ? validations // wrap plain objects in a reactive, so we can track changes if they have computed in them.
    : Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["reactive"])(validations || {});
    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["watch"])(validationsWatchTarget, function (newValidationRules) {
      validationResults.value = setValidations({
        validations: newValidationRules,
        state: state,
        childResults: childResults,
        resultsCache: resultsCache,
        globalConfig: globalConfig,
        instance: instance ? instance.proxy : {},
        externalResults: $externalResults
      });
    }, {
      immediate: true
    });
  }

  if (instance) {
    // send all the data to the parent when the function is invoked inside setup.
    sendValidationResultsToParent(validationResults, {
      $registerAs: $registerAs,
      $scope: $scope,
      $stopPropagation: $stopPropagation
    }); // before this component is destroyed, remove all the data from the parent.

    Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["onBeforeUnmount"])(function () {
      return removeValidationResultsFromParent($registerAs);
    });
  } // TODO: Change into reactive + watch


  return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    return Object.assign({}, Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(validationResults.value), childResults.value);
  });
}

/* harmony default export */ __webpack_exports__["default"] = (useVuelidate);



/***/ }),

/***/ "../coreui/node_modules/@vuelidate/validators/dist/index.esm.js":
/*!**********************************************************************!*\
  !*** ../coreui/node_modules/@vuelidate/validators/dist/index.esm.js ***!
  \**********************************************************************/
/*! exports provided: alpha, alphaNum, and, between, decimal, email, helpers, integer, ipAddress, macAddress, maxLength, maxValue, minLength, minValue, not, numeric, or, required, requiredIf, requiredUnless, sameAs, url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaNum", function() { return alphaNum$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "and", function() { return and$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decimal", function() { return decimal$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "email", function() { return email$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "helpers", function() { return common; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "integer", function() { return integer$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ipAddress", function() { return ipAddress$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "macAddress", function() { return macAddress$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLength", function() { return maxLength$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxValue", function() { return maxValue$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minLength", function() { return minLength$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minValue", function() { return minValue$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numeric", function() { return numeric$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "or", function() { return or$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "required", function() { return required$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredIf", function() { return requiredIf$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requiredUnless", function() { return requiredUnless$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sameAs", function() { return sameAs$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url$1; });
/* harmony import */ var vue_demi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-demi */ "../coreui/node_modules/vue-demi/lib/index.esm.js");


function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function isFunction(val) {
  return typeof val === 'function';
}
function isObject(o) {
  return o !== null && _typeof(o) === 'object' && !Array.isArray(o);
}
/**
 * Returns a standard ValidatorObject
 * Wraps a plain function into a ValidatorObject
 * @param {NormalizedValidator|Function} validator
 * @return {NormalizedValidator}
 */

function normalizeValidatorObject(validator) {
  return isFunction(validator.$validator) ? Object.assign({}, validator) : {
    $validator: validator
  };
}
function isPromise(object) {
  return isObject(object) && isFunction(object.then);
}
/**
 * Unwraps a ValidatorResponse object, into a boolean.
 * @param {ValidatorResponse} result
 * @return {boolean}
 */

function unwrapValidatorResponse(result) {
  if (_typeof(result) === 'object') return result.$valid;
  return result;
}
/**
 * Unwraps a `NormalizedValidator` object, returning it's validator function.
 * @param {NormalizedValidator | Function} validator
 * @return {function}
 */

function unwrapNormalizedValidator(validator) {
  return validator.$validator || validator;
}

/**
 * Allows attaching parameters to a validator
 * @param {Object} $params
 * @param {NormalizedValidator|Function} $validator
 * @return {NormalizedValidator}
 */

function withParams($params, $validator) {
  if (!isObject($params)) throw new Error("[@vuelidate/validators]: First parameter to \"withParams\" should be an object, provided ".concat(_typeof($params)));
  if (!isObject($validator) && !isFunction($validator)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  var validatorObj = normalizeValidatorObject($validator);
  validatorObj.$params = Object.assign({}, validatorObj.$params || {}, $params);
  return validatorObj;
}

/**
 * @callback MessageCallback
 * @param {Object} params
 * @return String
 */

/**
 * Attaches a message to a validator
 * @param {MessageCallback | String} $message
 * @param {NormalizedValidator|Function} $validator
 * @return {NormalizedValidator}
 */

function withMessage($message, $validator) {
  if (!isFunction($message) && typeof Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])($message) !== 'string') throw new Error("[@vuelidate/validators]: First parameter to \"withMessage\" should be string or a function returning a string, provided ".concat(_typeof($message)));
  if (!isObject($validator) && !isFunction($validator)) throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
  var validatorObj = normalizeValidatorObject($validator);
  validatorObj.$message = $message;
  return validatorObj;
}

/**
 * @typedef {function(*): Promise<boolean|ValidatorResponse>} asyncValidator
 */

/**
 * @typedef {Ref<*>[]|function(*): *} watchTargets
 */

/**
 * Wraps validators that returns a Promise.
 * @param {asyncValidator} $validator
 * @param {watchTargets} $watchTargets
 * @return {{$async: boolean, $validator: asyncValidator, $watchTargets: watchTargets}}
 */

function withAsync($validator) {
  var $watchTargets = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var validatorObj = normalizeValidatorObject($validator);
  return Object.assign({}, validatorObj, {
    $async: true,
    $watchTargets: $watchTargets
  });
}

function forEach(validators) {
  return {
    $validator: function $validator(collection) {
      var _this = this;

      for (var _len = arguments.length, others = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        others[_key - 1] = arguments[_key];
      }

      // go over the collection. It can be a ref as well.
      return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(collection).reduce(function (previous, object) {
        // go over each property
        var collectionEntryResult = Object.entries(object).reduce(function (all, _ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              key = _ref2[0],
              $model = _ref2[1];

          // get the validators for this property
          var innerValidators = validators[key]; // go over each validator and run it

          var propertyResult = Object.entries(innerValidators).reduce(function (all, _ref3) {
            var _ref4 = _slicedToArray(_ref3, 2),
                validatorName = _ref4[0],
                currentValidator = _ref4[1];

            // extract the validator. Supports simple and extended validators.
            var validatorFunction = unwrapNormalizedValidator(currentValidator); // Call the validator with correct parameters

            var $response = validatorFunction.call.apply(validatorFunction, [_this, $model].concat(others)); // extract the valid from the result

            var $valid = unwrapValidatorResponse($response); // store the entire response for later

            all.$data[validatorName] = $response; // if not valid, get the $message

            if (!$valid) {
              var $message = currentValidator.$message || '';
              var $params = currentValidator.$params || {}; // If $message is a function, we call it with the appropriate parameters

              if (typeof $message === 'function') {
                $message = $message({
                  $pending: false,
                  $invalid: !$valid,
                  $params: $params,
                  $model: $model,
                  $response: $response
                });
              } // save the error object


              all.$errors.push({
                $property: key,
                $message: $message,
                $params: $params,
                $response: $response,
                $model: $model,
                $pending: false,
                $validator: validatorName
              });
            }

            return {
              $valid: all.$valid && $valid,
              $data: all.$data,
              $errors: all.$errors
            };
          }, {
            $valid: true,
            $data: {},
            $errors: []
          });
          all.$data[key] = propertyResult.$data;
          all.$errors[key] = propertyResult.$errors;
          return {
            $valid: all.$valid && propertyResult.$valid,
            $data: all.$data,
            $errors: all.$errors
          };
        }, {
          $valid: true,
          $data: {},
          $errors: {}
        });
        return {
          $valid: previous.$valid && collectionEntryResult.$valid,
          $data: previous.$data.concat(collectionEntryResult.$data),
          $errors: previous.$errors.concat(collectionEntryResult.$errors)
        };
      }, {
        $valid: true,
        $data: [],
        $errors: []
      });
    },
    // collect all the validation errors into a 2 dimensional array, for each entry in the collection, you have an array of error messages.
    $message: function $message(_ref5) {
      var $response = _ref5.$response;
      return $response ? $response.$errors.map(function (context) {
        return Object.values(context).map(function (errors) {
          return errors.map(function (error) {
            return error.$message;
          });
        }).reduce(function (a, b) {
          return a.concat(b);
        }, []);
      }) : [];
    }
  };
}

var req = function req(value) {
  value = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(value);
  if (Array.isArray(value)) return !!value.length;

  if (value === undefined || value === null) {
    return false;
  }

  if (value === false) {
    return true;
  }

  if (value instanceof Date) {
    // invalid date won't pass
    return !isNaN(value.getTime());
  }

  if (_typeof(value) === 'object') {
    for (var _ in value) {
      return true;
    }

    return false;
  }

  return !!String(value).length;
};
/**
 * Returns the length of an arbitrary value
 * @param {Array|Object|String} value
 * @return {number}
 */

var len = function len(value) {
  value = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(value);
  if (Array.isArray(value)) return value.length;

  if (_typeof(value) === 'object') {
    return Object.keys(value).length;
  }

  return String(value).length;
};
/**
 * Regex based validator template
 * @param {RegExp} expr
 * @return {function(*=): boolean}
 */

function regex(expr) {
  return function (value) {
    value = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(value);
    return !req(value) || expr.test(value);
  };
}



var common = /*#__PURE__*/Object.freeze({
  __proto__: null,
  withParams: withParams,
  withMessage: withMessage,
  withAsync: withAsync,
  forEach: forEach,
  req: req,
  len: len,
  regex: regex,
  unwrap: vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"],
  unwrapNormalizedValidator: unwrapNormalizedValidator,
  unwrapValidatorResponse: unwrapValidatorResponse,
  normalizeValidatorObject: normalizeValidatorObject
});

var alpha = regex(/^[a-zA-Z]*$/);

/**
 * Validate if value is alphabetical string.
 * @type {NormalizedValidator}
 */

var alpha$1 = {
  $validator: alpha,
  $message: 'The value is not alphabetical',
  $params: {
    type: 'alpha'
  }
};

var alphaNum = regex(/^[a-zA-Z0-9]*$/);

/**
 * Validate if value is alpha-numeric string.
 * @type {NormalizedValidator}
 */

var alphaNum$1 = {
  $validator: alphaNum,
  $message: 'The value must be alpha-numeric',
  $params: {
    type: 'alphaNum'
  }
};

var numeric = regex(/^\d*(\.\d+)?$/);

/**
 * Check whether a value is numeric.
 * @type NormalizedValidator
 */

var numeric$1 = {
  $validator: numeric,
  $message: 'Value must be numeric',
  $params: {
    type: 'numeric'
  }
};

/**
 * Check if a numeric value is between two values.
 * @param {Ref<Number> | Number} min
 * @param {Ref<Number> | Number} max
 * @return {function(*=): boolean}
 */

function between (min, max) {
  return function (value) {
    return !req(value) || (!/\s/.test(value) || value instanceof Date) && +Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(min) <= +value && +Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(max) >= +value;
  };
}

/**
 * Checks if a value is between two values.
 * @param {Ref<Number> | Number} min
 * @param {Ref<Number> | Number} max
 * @return {NormalizedValidator}
 */

function between$1 (min, max) {
  return {
    $validator: between(min, max),
    $message: function $message(_ref) {
      var $params = _ref.$params;
      return "The value must be between ".concat($params.min, " and ").concat($params.max);
    },
    $params: {
      min: min,
      max: max,
      type: 'between'
    }
  };
}

var emailRegex = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
var email = regex(emailRegex);

/**
 * Validate if value is an email.
 * @type {NormalizedValidator}
 */

var email$1 = {
  $validator: email,
  $message: 'Value is not a valid email address',
  $params: {
    type: 'email'
  }
};

/**
 * Check if a string is an IP Address
 * @param {String} value
 * @returns {boolean}
 */

function ipAddress (value) {
  if (!req(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
}

var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/**
 * Validate if value is an ipAddress string.
 * @type {NormalizedValidator}
 */

var ipAddress$1 = {
  $validator: ipAddress,
  $message: 'The value is not a valid IP address',
  $params: {
    type: 'ipAddress'
  }
};

/**
 * Check if value is a properly formatted Mac Address.
 * @param {String | Ref<String>} [separator]
 * @returns {function(*): boolean}
 */

function macAddress () {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return function (value) {
    separator = Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(separator);

    if (!req(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;
    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  };
}

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/**
 * Validate if value is a valid Mac Address string.
 * @returns {NormalizedValidator}
 */

function macAddress$1 (separator) {
  return {
    $validator: macAddress(separator),
    $message: 'The value is not a valid MAC Address',
    $params: {
      type: 'macAddress'
    }
  };
}

/**
 * Check if provided value has a maximum length
 * @param {Number | Ref<Number>} length
 * @returns {function(Array|Object|String): boolean}
 */

function maxLength (length) {
  return function (value) {
    return !req(value) || len(value) <= Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(length);
  };
}

/**
 * Validate the max length of a string.
 * @param {Number} max
 * @return {NormalizedValidator}
 */

function maxLength$1 (max) {
  return {
    $validator: maxLength(max),
    $message: function $message(_ref) {
      var $params = _ref.$params;
      return "The maximum length allowed is ".concat($params.max);
    },
    $params: {
      max: max,
      type: 'maxLength'
    }
  };
}

/**
 * Check if value is above a threshold.
 * @param {Number | Ref<Number>} length
 * @returns {function(Array|Object|String): boolean}
 */

function minLength (length) {
  return function (value) {
    return !req(value) || len(value) >= Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(length);
  };
}

/**
 * Check if value is above a threshold.
 * @param {Number | Ref<Number>} min
 * @returns {NormalizedValidator}
 */

function minLength$1 (min) {
  return {
    $validator: minLength(min),
    $message: function $message(_ref) {
      var $params = _ref.$params;
      return "This field should be at least ".concat($params.min, " long");
    },
    $params: {
      min: min,
      type: 'minLength'
    }
  };
}

/**
 * Validates if a value is empty.
 * @param {String | Array | Date | Object} value
 * @returns {boolean}
 */

function required (value) {
  if (typeof value === 'string') {
    value = value.trim();
  }

  return req(value);
}

/**
 * Check if a value is empty or not.
 * @type {NormalizedValidator}
 */

var required$1 = {
  $validator: required,
  $message: 'Value is required',
  $params: {
    type: 'required'
  }
};

var validate = function validate(prop, val) {
  return prop ? req(val) : true;
};
/**
 * Returns required if the passed property is truthy
 * @param {Boolean | String | function(any): Boolean | Ref<string | boolean>} propOrFunction
 * @return {function(value: *, parentVM: object): Boolean}
 */


function requiredIf(propOrFunction) {
  return function (value, parentVM) {
    if (typeof propOrFunction !== 'function') {
      return validate(Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(propOrFunction), value);
    }

    var result = propOrFunction.call(this, value, parentVM);
    return validate(result, value);
  };
}

/**
 * Returns required if the passed property is truthy
 * @param {Boolean | String | function(): (Boolean | Promise<boolean>)} prop
 * @return {NormalizedValidator}
 */

function requiredIf$1 (prop) {
  return {
    $validator: requiredIf(prop),
    $message: 'The value is required',
    $params: {
      type: 'requiredIf',
      prop: prop
    }
  };
}

var validate$1 = function validate(prop, val) {
  return !prop ? req(val) : true;
};
/**
 * Returns required if the passed property is falsy.
 * @param {Boolean | String | function(any): Boolean | Ref<string | boolean>} propOrFunction
 * @return {function(value: *, parentVM: object): Boolean}
 */


function requiredUnless(propOrFunction) {
  return function (value, parentVM) {
    if (typeof propOrFunction !== 'function') {
      return validate$1(Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(propOrFunction), value);
    }

    var result = propOrFunction.call(this, value, parentVM);
    return validate$1(result, value);
  };
}

/**
 * Returns required unless the passed property is truthy
 * @param {Boolean | String | function(): (Boolean | Promise<boolean>)} prop
 * @return {NormalizedValidator}
 */

function requiredUnless$1 (prop) {
  return {
    $validator: requiredUnless(prop),
    $message: 'The value is required',
    $params: {
      type: 'requiredUnless',
      prop: prop
    }
  };
}

/**
 * Check if two values are identical.
 * @param {*} equalTo
 * @return {function(*=): boolean}
 */

function sameAs (equalTo) {
  return function (value) {
    return Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(value) === Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(equalTo);
  };
}

/**
 * Check if two values are identical
 * @param {*} equalTo
 * @param {String} [otherName]
 * @return {NormalizedValidator}
 */

function sameAs$1 (equalTo) {
  var otherName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'other';
  return {
    $validator: sameAs(equalTo),
    $message: function $message(_ref) {
      var $params = _ref.$params;
      return "The value must be equal to the ".concat(otherName, " value");
    },
    $params: {
      equalTo: equalTo,
      otherName: otherName,
      type: 'sameAs'
    }
  };
}

var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
var url = regex(urlRegex);

/**
 * Check if a value is a url
 * @type {NormalizedValidator}
 */

var url$1 = {
  $validator: url,
  $message: 'The value is not a valid URL address',
  $params: {
    type: 'url'
  }
};

function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function syncOr(validators) {
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return validators.reduce(function (valid, fn) {
      if (unwrapValidatorResponse(valid)) return valid;
      return unwrapNormalizedValidator(fn).apply(_this, args);
    }, false);
  };
}

function asyncOr(validators) {
  return function () {
    var _this2 = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.reduce(function (valid, fn) {
      return _await(valid, function (r) {
        return unwrapValidatorResponse(r) ? r : unwrapNormalizedValidator(fn).apply(_this2, args);
      });
    }, Promise.resolve(false));
  };
}
/**
 * Returns true when one of the provided functions returns true.
 * @param {...(NormalizedValidator|Function)} validators
 * @return {{$validator: function(...[*]=): (boolean | Promise<boolean>), $async: boolean, $watchTargets: any[]}}
 */


function or() {
  for (var _len3 = arguments.length, validators = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    validators[_key3] = arguments[_key3];
  }

  var $async = validators.some(function (v) {
    return v.$async;
  });
  var $watchTargets = validators.reduce(function (all, v) {
    if (!v.$watchTargets) return all;
    return all.concat(v.$watchTargets);
  }, []);

  var $validator = function $validator() {
    return false;
  };

  if (validators.length) $validator = $async ? asyncOr(validators) : syncOr(validators);
  return {
    $async: $async,
    $validator: $validator,
    $watchTargets: $watchTargets
  };
}

/**
 * Returns true when one of the provided functions returns true.
 * @param {...(NormalizedValidator|Function)} validators
 * @return {NormalizedValidator}
 */

function or$1 () {
  return withParams({
    type: 'or'
  }, withMessage('The value does not match any of the provided validators', or.apply(void 0, arguments)));
}

function _await$1(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}
/**
 *
 * @param validators
 * @return {function(...[*]=): Promise<boolean>}
 */


function syncAnd(validators) {
  return function () {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return validators.reduce(function (valid, fn) {
      if (!unwrapValidatorResponse(valid)) return valid;
      return unwrapNormalizedValidator(fn).apply(_this, args);
    }, true);
  };
}

function asyncAnd(validators) {
  return function () {
    var _this2 = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.reduce(function (valid, fn) {
      return _await$1(valid, function (r) {
        return unwrapValidatorResponse(r) ? unwrapNormalizedValidator(fn).apply(_this2, args) : r;
      });
    }, Promise.resolve(true));
  };
}
/**
 * Returns true when all validators are truthy
 * @param {...(NormalizedValidator | Function)} validators
 * @return {{$validator: function(...[*]=): (boolean | Promise<boolean>), $async: boolean, $watchTargets: any[]}}
 */


function and() {
  for (var _len3 = arguments.length, validators = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    validators[_key3] = arguments[_key3];
  }

  var $async = validators.some(function (v) {
    return v.$async;
  });
  var $watchTargets = validators.reduce(function (all, v) {
    if (!v.$watchTargets) return all;
    return all.concat(v.$watchTargets);
  }, []);

  var $validator = function $validator() {
    return false;
  };

  if (validators.length) $validator = $async ? asyncAnd(validators) : syncAnd(validators);
  return {
    $async: $async,
    $validator: $validator,
    $watchTargets: $watchTargets
  };
}

/**
 * Validate if all validators match.
 * @param {...*} validators
 * @returns {NormalizedValidator}
 */

function and$1 () {
  return withParams({
    type: 'and'
  }, withMessage('The value does not match all of the provided validators', and.apply(void 0, arguments)));
}

/**
 * Swaps the result of a value
 * @param {NormalizedValidator|Function} validator
 * @returns {function(*=, *=): boolean}
 */

function not (validator) {
  return function (value, vm) {
    if (!req(value)) return true;
    var response = unwrapNormalizedValidator(validator).call(this, value, vm);
    if (!isPromise(response)) return !unwrapValidatorResponse(response);
    return response.then(function (r) {
      return !unwrapValidatorResponse(r);
    });
  };
}

/**
 * Swaps the result of a value
 * @param {NormalizedValidator|Function} validator
 * @returns {NormalizedValidator}
 */

function not$1 (validator) {
  return {
    $validator: not(validator),
    $message: "The value does not match the provided validator",
    $params: {
      type: 'not'
    }
  };
}

/**
 * Check if a value is above a threshold.
 * @param {String | Number | Ref<Number> | Ref<String>} min
 * @returns {function(*=): boolean}
 */

function minValue (min) {
  return function (value) {
    return !req(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(min);
  };
}

/**
 * Check if a value is above a threshold.
 * @param {String | Number | Ref<Number> | Ref<String>} min
 * @returns {NormalizedValidator}
 */

function minValue$1 (min) {
  return {
    $validator: minValue(min),
    $message: function $message(_ref) {
      var $params = _ref.$params;
      return "The minimum value allowed is ".concat($params.min);
    },
    $params: {
      min: min,
      type: 'minValue'
    }
  };
}

/**
 * Check if value is below a threshold.
 * @param {Number | Ref<Number> | Ref<String>} max
 * @returns {function(*=): boolean}
 */

function maxValue (max) {
  return function (value) {
    return !req(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +Object(vue_demi__WEBPACK_IMPORTED_MODULE_0__["unref"])(max);
  };
}

/**
 * Check if value is below a threshold.
 * @param {Number | Ref<Number> | Ref<String>} max
 * @return {NormalizedValidator}
 */

var maxValue$1 = (function (max) {
  return {
    $validator: maxValue(max),
    $message: function $message(_ref) {
      var $params = _ref.$params;
      return "The maximum value is ".concat($params.max);
    },
    $params: {
      max: max,
      type: 'maxValue'
    }
  };
});

// ^-[0-9]+$ - only for negative integer (minus sign without at least 1 digit is not a number)

var integer = regex(/(^[0-9]*$)|(^-[0-9]+$)/);

/**
 * Validate if value is integer.
 * @type {NormalizedValidator}
 */

var integer$1 = {
  $validator: integer,
  $message: 'Value is not an integer',
  $params: {
    type: 'integer'
  }
};

var decimal = regex(/^[-]?\d*(\.\d+)?$/);

/**
 * Validate if value is decimal number.
 * @type {NormalizedValidator}
 */

var decimal$1 = {
  $validator: decimal,
  $message: 'Value must be decimal',
  $params: {
    type: 'decimal'
  }
};




/***/ }),

/***/ "../coreui/node_modules/vue-demi/lib/index.esm.js":
/*!********************************************************!*\
  !*** ../coreui/node_modules/vue-demi/lib/index.esm.js ***!
  \********************************************************/
/*! exports provided: computed, createApp, createRef, customRef, defineAsyncComponent, defineComponent, del, getCurrentInstance, h, inject, isRaw, isReactive, isReadonly, isRef, markRaw, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onServerPrefetch, onUnmounted, onUpdated, provide, proxyRefs, reactive, readonly, ref, set, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, useCSSModule, useCssModule, warn, watch, watchEffect, Vue, Vue2, isVue2, isVue3, version, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vue2", function() { return Vue2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVue2", function() { return isVue2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVue3", function() { return isVue3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "../coreui/node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Vue", function() { return vue__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "../coreui/node_modules/@vue/composition-api/dist/vue-composition-api.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "computed", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createApp", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["createApp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["createRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "customRef", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["customRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["defineAsyncComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineComponent", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["defineComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "del", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["del"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["getCurrentInstance"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["h"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inject", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["inject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRaw", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["isRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReactive", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["isReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isReadonly", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["isReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRef", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["isRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "markRaw", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["markRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextTick", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["nextTick"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onActivated", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onActivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeMount", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onBeforeMount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onBeforeUnmount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onBeforeUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onDeactivated", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onDeactivated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onErrorCaptured"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onMounted", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onMounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onServerPrefetch", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onServerPrefetch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onUnmounted"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "onUpdated", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["onUpdated"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "provide", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["provide"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "proxyRefs", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["proxyRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reactive", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["reactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "readonly", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["readonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ref", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "set", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["set"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReactive", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["shallowReactive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowReadonly", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["shallowReadonly"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shallowRef", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["shallowRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRaw", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["toRaw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRef", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["toRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toRefs", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["toRefs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "triggerRef", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["triggerRef"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unref", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["unref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCSSModule", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["useCSSModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCssModule", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["useCssModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "warn", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["warn"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watch", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "watchEffect", function() { return _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watchEffect"]; });




function install(_vue) {
  _vue = _vue || vue__WEBPACK_IMPORTED_MODULE_0___default.a
  if (_vue && !_vue['__composition_api_installed__'])
    vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["default"])
}

install(vue__WEBPACK_IMPORTED_MODULE_0___default.a)

var isVue2 = true
var isVue3 = false
var Vue2 = vue__WEBPACK_IMPORTED_MODULE_0___default.a
var version = vue__WEBPACK_IMPORTED_MODULE_0___default.a.version

/**VCA-EXPORTS**/

/**VCA-EXPORTS**/




/***/ })

}]);