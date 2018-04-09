/**
 * 声明合并
 * http://www.typescriptlang.org/docs/handbook/declaration-merging.html
 */

/**
 * 接口合并
 */

interface IAnimal {
  legs: number;
}

interface IAnimal {
  head: number;
  // legs: string; // 后续属性声明必须属于同一类型。属性“width”的类型必须为“number”，但此处却为类型“string”。
}
interface ISheep extends IAnimal {
  color: string;
}
interface IDog extends IAnimal {
  bark: boolean;
}
interface ICat extends IAnimal {
  smile: boolean;
}

// let box: IBox = { legs: 2 }; // 类型“{ head: number; }”中缺少属性“head”。
let a: IAnimal = { legs: 2, head: 1 };

// 对于函数成员，每个同名函数声明都会被当成这个函数的一个重载。
// 同时需要注意，当接口 A与后来的接口 A合并时，后面的接口具有更高的优先级。
// 注意每组接口里的声明顺序保持不变，但各组接口之间的顺序是后来的接口重载出现在靠前位置
interface ICloner {
  clone(animal: IAnimal): IAnimal;
}

interface ICloner {
  clone(animal: ISheep): ISheep;
}

interface ICloner {
  clone(animal: IDog): IDog;
  clone(animal: ICat): ICat;
}

// =>
interface ICloner {
  clone(animal: IDog): IDog;
  clone(animal: ICat): ICat;
  clone(animal: ISheep): ISheep;
  clone(animal: IAnimal): IAnimal;
}

/**
 * 命名空间 与 类、函数、枚举类型 的合并
 */

// 命名空间可以扩展属性
class Album {
  label: Album.AlbumLabel = <Album.AlbumLabel>{};
}
namespace Album {
  export const nick: string = 'Serifx';
  export class AlbumLabel {
    static age: number = 18;
  }
}

let lab = new Album().label;
let nick = Album.nick;
let age = Album.AlbumLabel.age;

/**
 * 模块扩展
 */

// observable.ts stays the same
// map.ts
import { VMath } from './libs/math-lib.d';
declare module './libs/math-lib.d' {
  // tslint:disable-next-line:interface-name
  interface VMath<T> {
    map<U>(f: (x: T) => U): VMath<U>;
  }
}
VMath.prototype.map = function<U>(): VMath<U> {
  return {} as VMath<U>;
};

/**
 * 全局扩展
 */

// 你也以在模块内部添加声明到全局作用域中。

// observable.ts
export class Observable<T> {
  // ... still no implementation ...
}

declare global {
  // tslint:disable-next-line:interface-name
  interface Array<T> {
    toObservable(): Observable<T>;
  }
}

Array.prototype.toObservable = function<T>(): Observable<T> {
  return {} as Observable<T>;
};
