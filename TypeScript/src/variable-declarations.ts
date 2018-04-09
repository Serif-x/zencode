/**
 * 变量声明
 * http://www.typescriptlang.org/docs/handbook/variable-declarations.html
 */

(function() {
  // 函数声明
  function fnWithTupleParams([tuple1, tuple2]: [string, number]) {
    // ...
  }

  function fnWIthUncertainParams(options: { opt1: number; opt2?: string }) {
    let { opt1, opt2 = 'bar' } = options;
  }

  type C = { a: string; b?: number };
  function typeFn({ a, b = 0 }: C): void {
    // ...
  }
  typeFn({ a: '1', b: 1 });

  // tslint:disable-next-line:typedef
  function typeFn2({ a, b = 1 } = { a: '' }): void {
    // ...
  }
  typeFn2({ a: 'yes' });

  class SpreadClass {
    p = 12;
    m() {
      // ...
    }
  }
  let c = new SpreadClass();
  let clone = { ...c };
  // tslint:disable-next-line:no-unused-expression
  clone.p; // ok
  // clone.m(); // error! // from MyClass's prototype
})();
