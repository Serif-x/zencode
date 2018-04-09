/**
 * 枚举
 * http://www.typescriptlang.org/docs/handbook/enums.html
 */

(function() {
  // 数字枚举
  enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
  }
  console.log(Direction.Down); // 2

  // 字符串枚举
  enum StringDirection {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
  }

  // 异构枚举（Heterogeneous enums） （不推荐）
  enum BooleanLikeHeterogeneousEnum {
    No = 0,
    Yes = 'YES',
  }

  // 联合枚举 （Union enums）
  enum ShapeKind {
    Circle,
    Square,
  }

  interface ICircle {
    kind: ShapeKind.Circle;
    radius: number;
  }

  interface ISquare {
    kind: ShapeKind.Square;
    sideLength: number;
  }

  // let c: ICircle = {
  //   kind: ShapeKind.Square,
  //   //    ~~~~~~~~~~~~~~~~ Error!
  //   radius: 100,
  // };

  // const 枚举
  const enum Freeze {
    A = 2,
    B = A * 2,
  }
  // 常量枚举会在编译阶段完全删除
  let dic = [Freeze.A, Freeze.B]; // => [2, 4]

  // 外部枚举 （Ambient enums）
  // 常出现在声明文件中
  // declare enum Ambient {
  //   A = 1,
  //   B,
  //   C = 2,
  // }
})();
