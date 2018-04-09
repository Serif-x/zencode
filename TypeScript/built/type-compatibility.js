"use strict";
/**
 * 类型兼容
 * http://www.typescriptlang.org/docs/handbook/type-compatibility.html
 */
(function () {
    var n;
    var m = { name: 'Serifx', age: 18 };
    n = m; // Allowed
    // 函数赋值
    var x = function (a) { return 0; };
    var y = function (a, b) { return 0; };
    // x = y; // Error: 不能将类型“(a: number, b: string) => number”分配给类型“(a: number) => number”。
    y = x; // OK
    var x2 = function () { return ({ a: 1 }); };
    var y2 = function () { return ({ a: 1, b: 2 }); };
    x2 = y2;
    // y2 = x2; // Error: 类型“{ a: number; }”中缺少属性“b”。
})();
