"use strict";
/**
 * 泛型
 * http://www.typescriptlang.org/docs/handbook/generics.html
 */
(function () {
    // 介绍
    function identity(args) {
        // console.log(args.length); // 类型“T”上不存在属性“length”。
        return args;
    }
    function loggingIdentity(args) {
        console.log(args.length); // OK
        return args;
    }
    var s = identity('a string');
    s = identity('another string'); // Or
    // 泛型类型
    var myIdentity = identity;
    var myIdentity2 = identity;
    // 泛型类
    var ClassIdentity = /** @class */ (function () {
        function ClassIdentity() {
        }
        ClassIdentity.prototype.init = function (x) {
            return x;
        };
        return ClassIdentity;
    }());
    var myClass = new ClassIdentity();
    myClass.init('class');
    function logLength(args) {
        console.log(args.length);
    }
    var logs = logLength({ name: 'a', length: 1 });
    function getProperty(obj, key) {
        return obj[key];
    }
    getProperty({ x: 1 }, 'x');
    // getProperty({ x: 1 }, 'y'); // 类型“"y"”的参数不能赋给类型“"x"”的参数。
})();
