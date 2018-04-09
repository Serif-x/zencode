/**
 * 基本类型
 * http://www.typescriptlang.org/docs/handbook/basic-types.html
 */

(function() {
  // 字符串/数字/布尔
  let nick: string = 'Serifx';
  let age: number = 18;
  let say: string = `My name is ${nick}`;
  let handsome: boolean = true;

  // 数组
  let list: string[] = [];
  list[0] = 'foo';
  // list[1] = 1; // Error

  let listAny: any[] = [];
  listAny[0] = 'ok';

  // 元组
  let tuple: [string, number];
  tuple = ['bar', 18];
  // tuple[2] = true; Error
  tuple[2] = 3; // OK: string | number

  // 枚举
  enum Color {
    Red = '#f00',
    Green = '#0f0',
    Blue = '#00f',
  }
  let c: Color = Color.Red;
  console.log(c); // #f00

  // 通过序号获取字符串
  enum Color2 {
    Red = 1,
    Green,
    Blue,
  }
  let c2: string = Color2[2];
  console.log(c2); // Green

  // 任何类型
  let notSure: any = 6;
  notSure = 'not sure';

  notSure.runtimeFunction(); // okay, runtimeFunction 可能在运行时会存在，比如动态添加的函数
  notSure.toFixed(2); // okay, toFixed 函数存在 (但编译器并不检查其存在性)

  // 空值
  function showInfo(): void {
    alert('hi');
  }

  // undefined 和 null
  let u: undefined = undefined;
  let n: null = null; // okay too
  // u = null; // Error: see --strictNullChecks

  // Never
  function error(message: string = 'unknown error'): never {
    throw new Error(message);
  }
  // Inferred return type is never
  function fail() {
    return error('Something failed');
  }
  // Function returning never must have unreachable end point
  function infiniteLoop(): never {
    while (true) {
      console.log('loop');
    }
  }

  // Type assertions
  let something: any = 'Something';
  let somethingLength = (something as string).length;
  let somethingLength2 = (<string>something).length;
})();
