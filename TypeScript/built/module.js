"use strict";
/**
 * 模块
 * https://www.tslang.cn/docs/handbook/modules.html
 */
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="./d/declarations.d.ts"/>
var URL = require("url");
var math_lib_1 = require("./libs/math-lib");
(function () {
    var url = URL.parse('http://www.typescriptlang.org');
    // UMD模块
    math_lib_1.isPrime(2);
    // mathLib.isPrime(2); // Error: “mathLib”指 UMD 全局，但当前文件是模块。请考虑改为添加导入。
})();
