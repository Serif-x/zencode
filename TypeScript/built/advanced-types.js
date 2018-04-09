"use strict";
/**
 * 高级类型
 * http://www.typescriptlang.org/docs/handbook/advanced-types.html
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    /**
     * 交叉类型（Intersection Types）
     */
    // 可访问任意对象的成员
    function extend(first, second) {
        return {};
    }
    /**
     * 联合类型（Union Types）
     */
    // 如果一个值是联合类型，我们只能访问此联合类型的所有类型里 共有 的成员
    function getValue() {
        return '';
    }
    var a = getValue();
    // a.length // 类型“number”上不存在属性“length”。
    a.toString(); // OK
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    function getSmallPet() {
        return {};
    }
    var pet = getSmallPet();
    // 每一个成员访问都会报错
    // if (pet.swim) {
    //   pet.swim();
    // } else if (pet.fly) {
    //   pet.fly();
    // }
    // OK
    if (isFish(pet)) {
        pet.swim();
    }
    else {
        pet.fly();
    }
    /**
     * 类型保护和类型断言
     */
    function broken(name) {
        function postfix(epithet) {
            // return name.charAt(0) + '.  the ' + epithet; // Error: 对象可能为 "null"。
            return name.charAt(0) + '.  the ' + epithet; // OK，显示断言name不为空
        }
        name = name || 'Bob';
        return postfix('great');
    }
    function getName(n) {
        if (typeof n === 'string') {
            return n;
        }
        else {
            return n();
        }
    }
    var UIElement = /** @class */ (function () {
        function UIElement() {
        }
        UIElement.prototype.animate = function (dx, dy, easing) {
            if (easing === 'ease-in') {
                // ...
            }
            else if (easing === 'ease-out') {
                // ...
            }
            else if (easing === 'ease-in-out') {
                // ...
            }
            else {
                // error! should not pass null or undefined.
            }
        };
        return UIElement;
    }());
    var button = new UIElement();
    button.animate(0, 0, 'ease-in');
    // ... more overloads ...
    function createElement(tagName) {
        return new Element();
    }
    // let e = createElement('a'); // Error: 类型“"a"”的参数不能赋给类型“"input"”的参数。
    var e = createElement('img'); // OK
    /**
     * 数字字面量类型
     */
    function rollDie() {
        // return 7; // Error: 不能将类型“7”分配给类型“1 | 2 | 3 | 4 | 5 | 6”。
        return 6;
    }
    function area(s) {
        switch (s.kind) {
            case 'square':
                return s.size * s.size;
            case 'rectangle':
                return s.height * s.width;
            case 'circle':
                return Math.PI * Math.pow(s.radius, 2);
        }
        // Error: Didn't handle case "triangle"
    }
    /**
     * 多态的 this 类型
     */
    // 多态的 this 类型表示的是某个包含类或接口的 子类型。 这被称做 F-bounded 多态性
    var BasicCalculator = /** @class */ (function () {
        function BasicCalculator(value) {
            this.value = 0;
            this.value = value;
        }
        BasicCalculator.prototype.currentValue = function () {
            return this.value;
        };
        BasicCalculator.prototype.add = function (operand) {
            this.value += operand;
            return this;
        };
        BasicCalculator.prototype.multiply = function (operand) {
            this.value *= operand;
            return this;
        };
        return BasicCalculator;
    }());
    var ScientificCalculator = /** @class */ (function (_super) {
        __extends(ScientificCalculator, _super);
        function ScientificCalculator(value) {
            if (value === void 0) { value = 0; }
            return _super.call(this, value) || this;
        }
        ScientificCalculator.prototype.sin = function () {
            this.value = Math.sin(this.value);
            return this;
        };
        return ScientificCalculator;
    }(BasicCalculator));
    var v = new ScientificCalculator(2)
        .multiply(5)
        .sin() // 若 multiply 不返回 this, 则 Error: 类型“void”上不存在属性“sin”。
        .add(1)
        .currentValue();
    /**
     * 索引类型（Index types）
     */
    function pluck(o, names) {
        return names.map(function (n) { return o[n]; });
    }
    var personProps; // 'name' | 'age'
    function proxify(o) {
        // ... wrap proxies ...
        return {};
    }
    function unProxify(t) {
        var result = {};
        for (var k in t) {
            if (t.hasOwnProperty(k)) {
                result[k] = t[k].get();
            }
        }
        return result;
    }
    var props = { name: 'serifx', age: 18 };
    var proxyProps = proxify(props);
    var originalProps = unProxify(proxyProps);
})();
