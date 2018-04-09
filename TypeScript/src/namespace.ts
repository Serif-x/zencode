/**
 * 命名空间
 * https://www.tslang.cn/docs/handbook/namespaces.html
 */

/// <reference path="./libs/validation.ts" />
/// <reference path="./libs/lettersOnlyValidator.ts" />
/// <reference path="./libs/zipCodeValidator.ts" />
// import * as Validation from './libs/validation';

// Some samples to try
let strings = ['Hello', '98052', '101'];

// Validators to use
let validators: { [s: string]: Validation.IStringValidator } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
  // tslint:disable-next-line:forin
  for (let name in validators) {
    let isMatch = validators[name].isAcceptable(s);
    console.log(`'${s}' ${isMatch ? 'matches' : 'does not match'} '${name}'.`);
  }
}
