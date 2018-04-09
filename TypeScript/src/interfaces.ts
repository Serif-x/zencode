/**
 * 类型接口
 * http://www.typescriptlang.org/docs/handbook/interfaces.html
 */

(function() {
  /**
   * Label interface
   *
   * @interface ILabel
   */
  interface ILabel {
    label: string;
    size: number;
    color?: string; // optional
    readonly copyright?: object;
    [s: string]: any;
    [n: number]: any;
  }

  function PrintLabel(labelOpts: ILabel): ILabel {
    console.log(labelOpts.label);
    let printLabel = { label: 'print', size: 20 } as ILabel;

    // if (labelOpts.width) {
    //   // Error: Property 'width' does not exist on type 'ILabel'
    //   printLabel.width = labelOpts.width;
    // }

    // okay, when using Index Singatures
    if (labelOpts.anyProp) {
      printLabel.anyProp = labelOpts.anyProp;
    }

    return printLabel;
  }

  let printLabOpts = { label: 'Fax', size: 64 };
  let pl = PrintLabel(printLabOpts);

  let pc: ILabel = { label: 'pc', size: 1, copyright: { author: 'Serifx' } };
  // pc.copyright = {}; // Error

  //
  // Function Types
  //

  interface IFunction {
    (source: string, target: number): string;
  }

  let fn: IFunction = function(source: string, target: number) {
    return String(source + target);
  };

  //
  // Indexable Types
  //

  interface IIndexable {
    readonly [index: number]: string;
    length: number;
    // name: string; // string[] type doesn't have property 'name'
  }
  let ii: IIndexable = ['one', 'two'];
  // ii[2] = 'three'; // Error

  //
  // Class Types
  //

  interface IClock {
    currentTime: Date;
    setTime(d: Date): Date;
  }
  class Clock implements IClock {
    currentTime: Date;
    setTime(d: Date) {
      this.currentTime = d;
      return d;
    }
    constructor(h: number, m: number, s: number) {
      this.currentTime = new Date(2018, 3, 2, h, m, s);
    }
  }

  interface IClockInterface {
    time: Date;
    tick(): string;
  }
  interface IClockConstructor {
    new (time: Date): IClockInterface;
  }

  class DigitialClock implements IClockInterface {
    time: Date;
    constructor(d: Date) {
      this.time = d;
    }
    tick() {
      return 'Digitial clock';
    }
  }
  class AnalogClock implements IClockInterface {
    time: Date;
    constructor(d: Date) {
      this.time = d;
    }
    tick() {
      return 'Analog clock';
    }
  }

  function createClock(getType: IClockConstructor, time: Date = new Date()): IClockInterface {
    return new getType(time);
  }

  let digitialClock = createClock(DigitialClock, new Date());
  let beepClock = createClock(AnalogClock);

  //
  // Extending Interfaces
  //

  interface IShape {
    color: string;
  }
  interface IRectangle extends IShape {
    width: number;
    height: number;
  }
  interface ISquare extends IShape {
    width: number;
  }
  interface IAngel extends IShape {
    widths: number[];
  }

  let square: ISquare = <ISquare>{ color: 'red', width: 1 };
  let angle: IAngel = { color: 'blue', widths: [10, 5, 5] };

  //
  // Hybrid Types
  //

  interface IHybrids {
    (init: object): object;
    count: number;
    method(): void;
  }

  function getHybrid(options: object = {}): IHybrids {
    let hybrid = <IHybrids>function(init: object) {
      /**/
    };
    return hybrid;
  }

  //
  // Interfaces Extending Classes
  //

  class Control {
    private state: any;
  }
  interface ISelectableControl extends Control {
    select(): void;
  }
  class Button extends Control implements ISelectableControl {
    value: string;
    constructor(value: string = '') {
      super();
      this.value = value;
    }
    select() {
      /**/
    }
  }
  class TextBox extends Control {
    select() {
      /**/
    }
  }
  // // Error: Property 'state' is missing in type 'TextArea'.
  // class TextArea implements ISelectableControl {
  //   select() {
  //     /**/
  //   }
  // }
})();
