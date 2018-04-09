"use strict";
/**
 * 命名空间
 * https://www.tslang.cn/docs/handbook/namespaces.html
 */
/// <reference path="./libs/validation.ts" />
/// <reference path="./libs/lettersOnlyValidator.ts" />
/// <reference path="./libs/zipCodeValidator.ts" />
// import * as Validation from './libs/validation';
// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    // tslint:disable-next-line:forin
    for (var name_1 in validators) {
        var isMatch = validators[name_1].isAcceptable(s);
        console.log("'" + s + "' " + (isMatch ? 'matches' : 'does not match') + " '" + name_1 + "'.");
    }
}
