/**
 * 函数
 * http://www.typescriptlang.org/docs/handbook/functions.html
 */

(function() {
  const add1: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y;
  };
  const add2 = (x: number, y: number): number => {
    return x + y;
  };

  // 剩余参数
  function buildName(p1: string, ...args: string[]) {
    return p1 + args.join(',');
  }

  // this 参数
  function f(this: void) {
    // console.log(this.ok); // 类型“void”上不存在属性“ok”
  }

  // 重载
  function overloads(x: number): string;
  function overloads(x: string): number;
  function overloads(x: any): any {
    if (typeof x === 'number') {
      //
    } else if (typeof x === 'string') {
      //
    }
  }

  overloads('8');
})();
