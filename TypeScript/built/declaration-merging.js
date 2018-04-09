"use strict";
/**
 * 声明合并
 * http://www.typescriptlang.org/docs/handbook/declaration-merging.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
// let box: IBox = { legs: 2 }; // 类型“{ head: number; }”中缺少属性“head”。
var a = { legs: 2, head: 1 };
/**
 * 命名空间 与 类、函数、枚举类型 的合并
 */
// 命名空间可以扩展属性
var Album = /** @class */ (function () {
    function Album() {
        this.label = {};
    }
    return Album;
}());
(function (Album) {
    Album.nick = 'Serifx';
    var AlbumLabel = /** @class */ (function () {
        function AlbumLabel() {
        }
        AlbumLabel.age = 18;
        return AlbumLabel;
    }());
    Album.AlbumLabel = AlbumLabel;
})(Album || (Album = {}));
var lab = new Album().label;
var nick = Album.nick;
var age = Album.AlbumLabel.age;
/**
 * 模块扩展
 */
// observable.ts stays the same
// map.ts
var math_lib_d_1 = require("./libs/math-lib.d");
math_lib_d_1.VMath.prototype.map = function () {
    return {};
};
/**
 * 全局扩展
 */
// 你也以在模块内部添加声明到全局作用域中。
// observable.ts
var Observable = /** @class */ (function () {
    function Observable() {
    }
    return Observable;
}());
exports.Observable = Observable;
Array.prototype.toObservable = function () {
    return {};
};
