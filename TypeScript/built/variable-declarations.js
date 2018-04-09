"use strict";
/**
 * 变量声明
 * http://www.typescriptlang.org/docs/handbook/variable-declarations.html
 */
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
(function () {
    // 函数声明
    function fnWithTupleParams(_a) {
        var tuple1 = _a[0], tuple2 = _a[1];
        // ...
    }
    function fnWIthUncertainParams(options) {
        var opt1 = options.opt1, _a = options.opt2, opt2 = _a === void 0 ? 'bar' : _a;
    }
    function typeFn(_a) {
        var a = _a.a, _b = _a.b, b = _b === void 0 ? 0 : _b;
        // ...
    }
    typeFn({ a: '1', b: 1 });
    // tslint:disable-next-line:typedef
    function typeFn2(_a) {
        var _b = _a === void 0 ? { a: '' } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 1 : _c;
        // ...
    }
    typeFn2({ a: 'yes' });
    var SpreadClass = /** @class */ (function () {
        function SpreadClass() {
            this.p = 12;
        }
        SpreadClass.prototype.m = function () {
            // ...
        };
        return SpreadClass;
    }());
    var c = new SpreadClass();
    var clone = __assign({}, c);
    // tslint:disable-next-line:no-unused-expression
    clone.p; // ok
    // clone.m(); // error! // from MyClass's prototype
})();
