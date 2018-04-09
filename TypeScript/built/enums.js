"use strict";
/**
 * 枚举
 * http://www.typescriptlang.org/docs/handbook/enums.html
 */
(function () {
    // 数字枚举
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 1] = "Up";
        Direction[Direction["Down"] = 2] = "Down";
        Direction[Direction["Left"] = 3] = "Left";
        Direction[Direction["Right"] = 4] = "Right";
    })(Direction || (Direction = {}));
    console.log(Direction.Down); // 2
    // 字符串枚举
    var StringDirection;
    (function (StringDirection) {
        StringDirection["Up"] = "UP";
        StringDirection["Down"] = "DOWN";
        StringDirection["Left"] = "LEFT";
        StringDirection["Right"] = "RIGHT";
    })(StringDirection || (StringDirection = {}));
    // 异构枚举（Heterogeneous enums） （不推荐）
    var BooleanLikeHeterogeneousEnum;
    (function (BooleanLikeHeterogeneousEnum) {
        BooleanLikeHeterogeneousEnum[BooleanLikeHeterogeneousEnum["No"] = 0] = "No";
        BooleanLikeHeterogeneousEnum["Yes"] = "YES";
    })(BooleanLikeHeterogeneousEnum || (BooleanLikeHeterogeneousEnum = {}));
    // 联合枚举 （Union enums）
    var ShapeKind;
    (function (ShapeKind) {
        ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
        ShapeKind[ShapeKind["Square"] = 1] = "Square";
    })(ShapeKind || (ShapeKind = {}));
    // 常量枚举会在编译阶段完全删除
    var dic = [2 /* A */, 4 /* B */]; // => [2, 4]
    // 外部枚举 （Ambient enums）
    // 常出现在声明文件中
    // declare enum Ambient {
    //   A = 1,
    //   B,
    //   C = 2,
    // }
})();
