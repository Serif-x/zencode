/**
 * 类型兼容
 * http://www.typescriptlang.org/docs/handbook/type-compatibility.html
 */

(function() {
  // 对象赋值
  interface IName {
    name: String;
  }
  let n: IName;
  let m = { name: 'Serifx', age: 18 };
  n = m; // Allowed

  // 函数赋值
  let x = (a: number) => 0;
  let y = (a: number, b: string) => 0;
  // x = y; // Error: 不能将类型“(a: number, b: string) => number”分配给类型“(a: number) => number”。
  y = x; // OK

  let x2 = () => ({ a: 1 });
  let y2 = () => ({ a: 1, b: 2 });
  x2 = y2;
  // y2 = x2; // Error: 类型“{ a: number; }”中缺少属性“b”。
})();
