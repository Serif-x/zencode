/**
 * 类
 * http://www.typescriptlang.org/docs/handbook/classes.html
 */

(function() {
  class Animal {
    // protected name: string;
    step: number = 0;
    static alive: boolean = false;
    protected constructor(protected name: string) {
      this.name = name;
      Animal.alive = true;
    }
    protected walk() {
      this.step++;
      console.log(`Walk step: ${this.step}`);
    }
  }

  class Dog extends Animal {
    private readonly legs: number = 4;
    constructor(name: string) {
      super(name);
    }
    public walk() {
      super.walk();
    }
  }

  class Chicken extends Animal {
    private readonly wings: number = 2;
    constructor(name: string) {
      super(name);
    }
  }

  let dog = new Dog('Dog');
  let chikken = new Chicken('Chicken');
  // let an = new Animal(); Error
  dog.walk();

  abstract class Control {
    constructor(public name: string) {
      this.name = name;
    }
    abstract focus(): void;
    getName(): string {
      return this.name;
    }
  }
  class Text extends Control {
    protected el: object;
    constructor(public name: string, el: object = {}) {
      super(name);
      this.el = el;
    }
    focus() {
      // focus
    }
    blur() {
      // blur
    }
  }

  let text = new Text('name');
  text.blur();
  text.getName();
})();
