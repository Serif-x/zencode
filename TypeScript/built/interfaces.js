"use strict";
/**
 * 类型接口
 * http://www.typescriptlang.org/docs/handbook/interfaces.html
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
    function PrintLabel(labelOpts) {
        console.log(labelOpts.label);
        var printLabel = { label: 'print', size: 20 };
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
    var printLabOpts = { label: 'Fax', size: 64 };
    var pl = PrintLabel(printLabOpts);
    var pc = { label: 'pc', size: 1, copyright: { author: 'Serifx' } };
    var fn = function (source, target) {
        return String(source + target);
    };
    var ii = ['one', 'two'];
    var Clock = /** @class */ (function () {
        function Clock(h, m, s) {
            this.currentTime = new Date(2018, 3, 2, h, m, s);
        }
        Clock.prototype.setTime = function (d) {
            this.currentTime = d;
            return d;
        };
        return Clock;
    }());
    var DigitialClock = /** @class */ (function () {
        function DigitialClock(d) {
            this.time = d;
        }
        DigitialClock.prototype.tick = function () {
            return 'Digitial clock';
        };
        return DigitialClock;
    }());
    var AnalogClock = /** @class */ (function () {
        function AnalogClock(d) {
            this.time = d;
        }
        AnalogClock.prototype.tick = function () {
            return 'Analog clock';
        };
        return AnalogClock;
    }());
    function createClock(getType, time) {
        if (time === void 0) { time = new Date(); }
        return new getType(time);
    }
    var digitialClock = createClock(DigitialClock, new Date());
    var beepClock = createClock(AnalogClock);
    var square = { color: 'red', width: 1 };
    var angle = { color: 'blue', widths: [10, 5, 5] };
    function getHybrid(options) {
        if (options === void 0) { options = {}; }
        var hybrid = function (init) {
            /**/
        };
        return hybrid;
    }
    //
    // Interfaces Extending Classes
    //
    var Control = /** @class */ (function () {
        function Control() {
        }
        return Control;
    }());
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        function Button(value) {
            if (value === void 0) { value = ''; }
            var _this = _super.call(this) || this;
            _this.value = value;
            return _this;
        }
        Button.prototype.select = function () {
            /**/
        };
        return Button;
    }(Control));
    var TextBox = /** @class */ (function (_super) {
        __extends(TextBox, _super);
        function TextBox() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        TextBox.prototype.select = function () {
            /**/
        };
        return TextBox;
    }(Control));
    // // Error: Property 'state' is missing in type 'TextArea'.
    // class TextArea implements ISelectableControl {
    //   select() {
    //     /**/
    //   }
    // }
})();
