/**
 * 泛型
 * http://www.typescriptlang.org/docs/handbook/generics.html
 */

(function() {
  // 介绍

  function identity<T>(args: T): T {
    // console.log(args.length); // 类型“T”上不存在属性“length”。
    return args;
  }

  function loggingIdentity<T>(args: T[]): T[] {
    console.log(args.length); // OK
    return args;
  }

  let s = identity<String>('a string');
  s = identity('another string'); // Or

  // 泛型类型
  let myIdentity: <T>(args: T) => T = identity;

  // 泛型接口
  interface IIdentity<T> {
    <T>(args: T): T;
  }

  let myIdentity2: IIdentity<string> = identity;

  // 泛型类
  class ClassIdentity<T> {
    init(x: T): T {
      return x;
    }
  }

  let myClass = new ClassIdentity<string>();
  myClass.init('class');

  // 泛型约束
  interface IConstraint {
    length: number;
  }

  function logLength<T extends IConstraint>(args: T) {
    console.log(args.length);
  }

  let logs = logLength({ name: 'a', length: 1 });

  function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
  }
  getProperty({ x: 1 }, 'x');
  // getProperty({ x: 1 }, 'y'); // 类型“"y"”的参数不能赋给类型“"x"”的参数。
})();
