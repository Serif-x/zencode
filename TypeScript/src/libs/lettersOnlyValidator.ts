/// <reference path="./validation.ts" />
namespace Validation {
  let lettersRegexp = /^[A-Za-z]+$/;
  export class LettersOnlyValidator implements IStringValidator {
    isAcceptable(s: string) {
      return lettersRegexp.test(s);
    }
  }
}
