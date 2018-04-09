"use strict";
/**
 * 基本类型
 * http://www.typescriptlang.org/docs/handbook/basic-types.html
 */
(function () {
    // 字符串/数字/布尔
    var nick = 'Serifx';
    var age = 18;
    var say = "My name is " + nick;
    var handsome = true;
    // 数组
    var list = [];
    list[0] = 'foo';
    // list[1] = 1; // Error
    var listAny = [];
    listAny[0] = 'ok';
    // 元组
    var tuple;
    tuple = ['bar', 18];
    // tuple[2] = true; Error
    tuple[2] = 3; // OK: string | number
    // 枚举
    var Color;
    (function (Color) {
        Color["Red"] = "#f00";
        Color["Green"] = "#0f0";
        Color["Blue"] = "#00f";
    })(Color || (Color = {}));
    var c = Color.Red;
    console.log(c); // #f00
    // 通过序号获取字符串
    var Color2;
    (function (Color2) {
        Color2[Color2["Red"] = 1] = "Red";
        Color2[Color2["Green"] = 2] = "Green";
        Color2[Color2["Blue"] = 3] = "Blue";
    })(Color2 || (Color2 = {}));
    var c2 = Color2[2];
    console.log(c2); // Green
    // 任何类型
    var notSure = 6;
    notSure = 'not sure';
    notSure.runtimeFunction(); // okay, runtimeFunction 可能在运行时会存在，比如动态添加的函数
    notSure.toFixed(2); // okay, toFixed 函数存在 (但编译器并不检查其存在性)
    // 空值
    function showInfo() {
        alert('hi');
    }
    // undefined 和 null
    var u = undefined;
    var n = null; // okay too
    // u = null; // Error: see --strictNullChecks
    // Never
    function error(message) {
        if (message === void 0) { message = 'unknown error'; }
        throw new Error(message);
    }
    // Inferred return type is never
    function fail() {
        return error('Something failed');
    }
    // Function returning never must have unreachable end point
    function infiniteLoop() {
        while (true) {
            console.log('loop');
        }
    }
    // Type assertions
    var something = 'Something';
    var somethingLength = something.length;
    var somethingLength2 = something.length;
})();
