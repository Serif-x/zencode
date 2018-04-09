"use strict";
/**
 * 函数
 * http://www.typescriptlang.org/docs/handbook/functions.html
 */
(function () {
    var add1 = function (x, y) {
        return x + y;
    };
    var add2 = function (x, y) {
        return x + y;
    };
    // 剩余参数
    function buildName(p1) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return p1 + args.join(',');
    }
    // this 参数
    function f() {
        // console.log(this.ok); // 类型“void”上不存在属性“ok”
    }
    function overloads(x) {
        if (typeof x === 'number') {
            //
        }
        else if (typeof x === 'string') {
            //
        }
    }
    overloads('8');
})();
