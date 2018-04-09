/**
 * 高级类型
 * http://www.typescriptlang.org/docs/handbook/advanced-types.html
 */

(function() {
  /**
   * 交叉类型（Intersection Types）
   */

  // 可访问任意对象的成员
  function extend<T, U>(first: T, second: U): T & U {
    return <T & U>{};
  }

  /**
   * 联合类型（Union Types）
   */

  // 如果一个值是联合类型，我们只能访问此联合类型的所有类型里 共有 的成员
  function getValue(): string | number {
    return '';
  }
  let a = getValue();
  // a.length // 类型“number”上不存在属性“length”。
  a.toString(); // OK

  /**
   * 用户自定义类型保护 （User-Defined Type Guards）
   */

  interface IBird {
    fly(): any;
    layEggs(): any;
  }

  interface IFish {
    swim(): any;
    layEggs(): any;
  }

  function isFish(pet: IFish | IBird): pet is IFish {
    return (<IFish>pet).swim !== undefined;
  }

  function getSmallPet(): IFish | IBird {
    return <IFish | IBird>{};
  }

  let pet = getSmallPet();

  // 每一个成员访问都会报错
  // if (pet.swim) {
  //   pet.swim();
  // } else if (pet.fly) {
  //   pet.fly();
  // }

  // OK
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }

  /**
   * 类型保护和类型断言
   */

  function broken(name: string | null): string {
    function postfix(epithet: string) {
      // return name.charAt(0) + '.  the ' + epithet; // Error: 对象可能为 "null"。
      return name!.charAt(0) + '.  the ' + epithet; // OK，显示断言name不为空
    }
    name = name || 'Bob';
    return postfix('great');
  }

  /**
   * 类型别名
   */

  type Name = string;
  type NameResolver = () => string;
  type NameOrResolver = Name | NameResolver;
  function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
      return n;
    } else {
      return n();
    }
  }

  /**
   * 字符串字面量类型
   */

  type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';
  class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
      if (easing === 'ease-in') {
        // ...
      } else if (easing === 'ease-out') {
        // ...
      } else if (easing === 'ease-in-out') {
        // ...
      } else {
        // error! should not pass null or undefined.
      }
    }
  }

  let button = new UIElement();
  button.animate(0, 0, 'ease-in');
  // button.animate(0, 0, 'uneasy'); // Error: 类型“"uneasy"”的参数不能赋给类型“Easing”的参数。

  // 字符串字面量类型还可以用于区分函数重载：
  function createElement(tagName: 'img'): HTMLImageElement;
  function createElement(tagName: 'input'): HTMLInputElement;
  // ... more overloads ...
  function createElement(tagName: string): Element {
    return new Element();
  }
  // let e = createElement('a'); // Error: 类型“"a"”的参数不能赋给类型“"input"”的参数。
  let e = createElement('img'); // OK

  /**
   * 数字字面量类型
   */

  function rollDie(): 1 | 2 | 3 | 4 | 5 | 6 {
    // return 7; // Error: 不能将类型“7”分配给类型“1 | 2 | 3 | 4 | 5 | 6”。
    return 6;
  }

  /**
   * 可辨识联合（Discriminated Unions）
   */
  /**
   * 完整性检查（Exhaustiveness checking）
   */

  interface ISquare {
    kind: 'square';
    size: number;
  }
  interface IRectangle {
    kind: 'rectangle';
    width: number;
    height: number;
  }
  interface ICircle {
    kind: 'circle';
    radius: number;
  }
  interface ITriangle {
    kind: 'triangle';
    width: number;
    height: number;
  }

  type Shape = ISquare | IRectangle | ICircle | ITriangle;
  function area(s: Shape) {
    switch (s.kind) {
      case 'square':
        return s.size * s.size;
      case 'rectangle':
        return s.height * s.width;
      case 'circle':
        return Math.PI * s.radius ** 2;
    }
    // Error: Didn't handle case "triangle"
  }

  /**
   * 多态的 this 类型
   */

  // 多态的 this 类型表示的是某个包含类或接口的 子类型。 这被称做 F-bounded 多态性

  class BasicCalculator {
    protected value: number = 0;

    constructor(value: number) {
      this.value = value;
    }

    public currentValue(): number {
      return this.value;
    }

    public add(operand: number): this {
      this.value += operand;
      return this;
    }
    public multiply(operand: number): this {
      this.value *= operand;
      return this;
    }
    // ... other operations go here ...
  }

  class ScientificCalculator extends BasicCalculator {
    public constructor(value: number = 0) {
      super(value);
    }
    public sin() {
      this.value = Math.sin(this.value);
      return this;
    }
    // ... other operations go here ...
  }

  let v = new ScientificCalculator(2)
    .multiply(5)
    .sin() // 若 multiply 不返回 this, 则 Error: 类型“void”上不存在属性“sin”。
    .add(1)
    .currentValue();

  /**
   * 索引类型（Index types）
   */

  function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map((n) => o[n]);
  }

  // keyof， 索引类型查询操作符。 对于任何类型 T， keyof T 的结果为 T 上已知的公共属性名的联合。 例如：
  interface IPerson {
    name: string;
    age: number;
  }
  let personProps: keyof IPerson; // 'name' | 'age'

  /**
   * 映射类型（Mapped types）
   */

  type Partial<T> = { [P in keyof T]?: T[P] };
  type Readonly<T> = { readonly [P in keyof T]: T[P] };
  type PersonPartial = Partial<IPerson>;
  type ReadonlyPerson = Readonly<IPerson>;

  type Keys = 'option1' | 'option2';
  type Flags = { [K in Keys]: boolean };

  type NullablePerson = { [P in keyof IPerson]: IPerson[P] | null };
  type PartialPerson = { [P in keyof IPerson]?: IPerson[P] };

  // 通用版
  type NullableCommon<T> = { [P in keyof T]: T[P] | null };
  type PartialCommon<T> = { [P in keyof T]?: T[P] };

  // 由映射类型进行推断
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = { [P in keyof T]: Proxy<T[P]> };

  function proxify<T>(o: T): Proxify<T> {
    // ... wrap proxies ...
    return {} as Proxify<T>;
  }
  function unProxify<T>(t: Proxify<T>): T {
    let result = {} as T;
    for (const k in t) {
      if (t.hasOwnProperty(k)) {
        result[k] = t[k].get();
      }
    }
    return result;
  }

  let props = {name: 'serifx', age: 18};
  let proxyProps = proxify(props);
  let originalProps = unProxify(proxyProps);
})();
