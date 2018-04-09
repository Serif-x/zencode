"use strict";
/**
 * 类
 * http://www.typescriptlang.org/docs/handbook/classes.html
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
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
            // protected name: string;
            this.step = 0;
            this.name = name;
            Animal.alive = true;
        }
        Animal.prototype.walk = function () {
            this.step++;
            console.log("Walk step: " + this.step);
        };
        Animal.alive = false;
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name) {
            var _this = _super.call(this, name) || this;
            _this.legs = 4;
            return _this;
        }
        Dog.prototype.walk = function () {
            _super.prototype.walk.call(this);
        };
        return Dog;
    }(Animal));
    var Chicken = /** @class */ (function (_super) {
        __extends(Chicken, _super);
        function Chicken(name) {
            var _this = _super.call(this, name) || this;
            _this.wings = 2;
            return _this;
        }
        return Chicken;
    }(Animal));
    var dog = new Dog('Dog');
    var chikken = new Chicken('Chicken');
    // let an = new Animal(); Error
    dog.walk();
    var Control = /** @class */ (function () {
        function Control(name) {
            this.name = name;
            this.name = name;
        }
        Control.prototype.getName = function () {
            return this.name;
        };
        return Control;
    }());
    var Text = /** @class */ (function (_super) {
        __extends(Text, _super);
        function Text(name, el) {
            if (el === void 0) { el = {}; }
            var _this = _super.call(this, name) || this;
            _this.name = name;
            _this.el = el;
            return _this;
        }
        Text.prototype.focus = function () {
            // focus
        };
        Text.prototype.blur = function () {
            // blur
        };
        return Text;
    }(Control));
    var text = new Text('name');
    text.blur();
    text.getName();
})();
