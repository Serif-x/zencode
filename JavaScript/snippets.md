JavaScript编码习惯和技巧
===

## 运用 || 和&&运算符

```
var foo = 10;
foo == 10 && doSomething(); // is the same thing as if (foo == 10) doSomething();
foo == 5 || doSomething(); // is the same thing as if (foo != 5) doSomething();
```

## 运用 | 运算符

在js整数操作的时候，相当于去除小数点（取整），parseInt。在正数的时候相当于Math.floor()，负数的时候相当于Math.ceil()
*[[REF](//www.haorooms.com/post/js_dsg_ysf)]*

```
Math.ceil()  用作向上取整。
Math.floor() 用作向下取整。
Math.round() 我们数学中常用到的四舍五入取整。

console.log(0.6|0)//0
console.log(1.1|0)//1
console.log(3.65555|0)//3
console.log(5.99999|0)//5
console.log(-7.777|0)//-7
```

同理有：
```
n<<0
n>>0
~~n
```

## 用map遍历处理数组

```
var squares = [1,2,3,4].map(function (val) {
  return val * val;
});
// squares will be equal to [1, 4, 9, 16]
```

## 浮点数处理

```
var num = 2.443242342;
num = num.toFixed(4);  // num will be equal to 2.4432
```

```
0.1 + 0.2 === 0.3 // is false, 0.30000000000000004 instead.
9007199254740992 + 1 // is equal to 9007199254740992
9007199254740992 + 2 // is equal to 9007199254740994

//use toFixed() or toPrecision() to solve this problem
//NOTE : the toFixed() and toPrecision() function returns a string, not a number.
```

## 用'==='而不是'=='

```
[10] === 10    // is false
[10] ==  10    // is true
'10' ==  10    // is true
'10' === 10    // is false
 []  ==  0     // is true
 []  === 0     // is false
 ''  ==  false // is true but true == "a" is false
 ''  === false // is false

 ""        == "0"       // false
 0         == ""        // true
 0         == "0"       // true
 false     == "false"   // false
 false     == "0"       // true
 false     == undefined // false
 false     == null      // false
 null      == undefined // true
 " \t\r\n" == 0         // true
```

有趣的现象： "" == "0" 且 0 == "0"，但是 "" == 0 为false，当然这是js隐式转换的问题

## 布尔型转换

> 通过使用 否 操作符两次，可以把一个值转换为布尔型。

```
!!'foo';   // true
!!'';      // false
!!'0';     // true
!!'1';     // true
!!'-1'     // true
!!{};      // true
!!true;    // true
```

## 用switch处理判断(true/false)

```
function getCategory(age) {
  var category = "";
  switch (true) {
    case isNaN(age):
			category = "not an age";
			break;
    case (age >= 50):
			category = "Old";
			break;
    case (age <= 20):
			category = "Baby";
			break;
    default:
			category = "Young";
			break;
  };
  return category;
}
getCategory(5);  // will return "Baby"
```

## 尽量用原生表达式而不是函数调用

```
var min = Math.min(a,b);
A.push(v);

//below is better

var min = a < b ? a : b;
A[A.length] = v;
```

## 数组连接

```
var vegetables = ['parsnip', 'potato'];
var moreVegs = ['celery', 'beetroot'];

// Merge the second array into the first one
// Equivalent to vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);

console.log(vegetables); // ['parsnip', 'potato', 'celery', 'beetroot']
```

## 将arguments转换为数组

```
var argArray = Array.prototype.slice.call(arguments);
```

## 判断是否为数组

```
function isArray(obj){
	return Object.prototype.toString.call(obj) === '[object Array]' ;
}

// or use...

Array.isArray(obj); // its a new Array method
```

## 判断是否为数字

```
function isNumber(n){
  return !isNaN(parseFloat(n)) && isFinite(n);
}
```

## 打散字符串为单个字符（数组）

```
str.split('');
```

## 创建自调用函数

```
(function(){
	// some private code that will be executed automatically
})();
(function(a,b){
	var result = a + b;
	return result;
})(10, 20)
```

## 随机获取数组中元素

```
var items = [12, 548 , 'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' , 2145 , 119];
var randomItem = items[Math.floor(Math.random() * items.length)];
```

## 生成固定范围内的数组

```
var numbersArray = [], max = 100;

for( var i=1; numbersArray.push(i++) < max;);  // numbersArray = [1,2,3 ... 100]
```

## 打乱数组顺序

```
var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
numbers = numbers.sort(function(){ return Math.random() - 0.5});
/* the array numbers will be equal for example to [120, 5, 228, -215, 400, 458, -85411, 122205]  */
```

## 取得数组中最大或最小值

```
var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
var maxInNumbers = Math.max.apply(null, numbers);
var minInNumbers = Math.min.apply(null, numbers);
```

## 不要用delete删除数组中的元素

```
var items = [12, 548 ,'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' ,2154 , 119 ];
items.length; // return 11
delete items[3]; // return true
items.length; // return 11
/* items will be equal to [12, 548, "a", undefined × 1, 5478, "foo", 8852, undefined × 1, "Doe", 2154, 119]   */
// below is better

var items = [12, 548 ,'a' , 2 , 5478 , 'foo' , 8852, , 'Doe' ,2154 , 119 ];
items.length; // return 11
items.splice(3,1) ;
items.length; // return 10
/* items will be equal to [12, 548, "a", 5478, "foo", 8852, undefined × 1, "Doe", 2154, 119]   */
```

## 缩减数组

```
var myArray = [12 , 222 , 1000 , 124 , 98 , 10 ];
myArray.length = 4; // myArray will be equal to [12 , 222 , 1000 , 124].
//The array length is not a read only property.
```

## 去除字符串前后空白

```
//如果浏览器本身不支持String对象的trim方法,那么运行下面的代码可以兼容这些环境.

if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}
```

## 注意区分布尔值true/false 与 布尔对象的值true/false

```
var b = new Boolean(false);
if (b) // this condition evaluates to true
// NOTE:
```

## \[闭包\]利用闭包模拟私有方法

```
var makeCounter = function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
alert(Counter1.value()); /* 提示 0 */
Counter1.increment();
Counter1.increment();
alert(Counter1.value()); /* 提示 2 */
Counter1.decrement();
alert(Counter1.value()); /* 提示 1 */
alert(Counter2.value()); /* 提示 0 */
```

## 数组排序函数

```
list.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});
```

## 将数组所有项累加

```
var total = [0, 1, 2, 3].reduce(function(a, b) {
    return a + b;
});
// total == 6
```

## 数组扁平化

```
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
    return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]
```

## 点击其他（空白）地方执行操作，如关闭等

```
$(document).on('click', function(e){
  var tarExts = [
    $ele1,
    $ele2
  ];

  for (var i = 0, l = tarExts.length; i < l; i++) {
    if (tarExts[i].is(e.target) || tarExts[i].has(e.target).length !== 0) {
      return;
    }
  }

  //do something when click on others
});

//封装后

function attachBlankTap(targetsExcluded, callback){
  var tarExts = targetsExcluded;
  // convert to jQuery object
  if ($.isArray(tarExts)) {
    for (var i = 0, l = tarExts.length; i < l; i++) {
      if ('string' === typeof tarExts[i] || ('object' === typeof tarExts[i] && !tarExts[i] instanceof jQuery))
        tarExts[i] = $(tarExts[i]);
    }
  } else if ('string' === typeof tarExts || ('object' === typeof tarExts && !tarExts instanceof jQuery)) {
    tarExts = [ $(tarExts) ];
  }
  //add event
  $(document).on('click', function(e){
    if ($.isArray(tarExts)) {
      for (var j = 0, m = tarExts.length; j < m; j++) {
        if (tarExts[j].is(e.target) || tarExts[j].has(e.target).length !== 0) {
          return;
        }
      }
    }
    //do something when click on others
    if (callback && 'function' === typeof callback) callback();
  });
}
```

## 复制对象

```
Object.prototype.clone = function(){
  var copy;
  copy = this.constructor == Object ? new this.constructor() : new this.constructor(this.valueOf());
  for(var key in this){
    if(copy[key] != this[key]){
      copy[key] = 'object' === this[key] ? this[key].clone() : this[key];
    }
  }
  return copy;
}
```

## Firefox下设置或获取scrollTop需特定写法

```
function getScrollXY(){
  var x,y;
  if(document.body.scrollTop){ //非标准写法,chrome能识别
    x = document.body.scrollLeft;
    y = document.body.scrollTop;
  } else { //标准写法
    x = document.documentElement.scrollLeft;
    y = document.documentElement.scrollTop;
  }
  return {x:x, y:y};
}

//jQuery写法
$("html, body").scrollTop()
```

## 时间

```
//获取时间数值
+new Date()
```

## 关闭打开窗口

```
var browserName = navigator.appName;
if (browserName == "Netscape") {
  window.open('', '_self', '');
  window.close();
} else if (browserName == "Microsoft Internet Explorer") {
  window.opener = null;
  window.open('', '_top');
  window.top.close();
}
```

## Sibling elements

```
// jQuery
$el.siblings();

// Native
[].filter.call(el.parentNode.children, function(child) {
  return child !== el;
});
```

##  Iframe Contents

```
// jQuery
$iframe.contents();

// Native
iframe.contentDocument;
```

## Get style

```
// jQuery
$el.css("color");

// Native
// NOTE: Known bug, will return 'auto' if style value is 'auto'
const win = el.ownerDocument.defaultView;
// null means not return pseudo styles
win.getComputedStyle(el, null).color;
```

## DOM - remove

```
// jQuery
$el.remove();

// Native
el.parentNode.removeChild(el);
```

## 创建重复字符串

```
var count = 3;
var stringToRepeat = 'a';
var repeatStr = new Array(count + 1).join(stringToRepeat); // aaa
```

## & (按位与)

```
// 判断一个数是否为2的n次幂，可以将其与自身减一相与

var number = 4
(number & number -1) === 0 // true
```

## ^ (按位异或)

```
// 不用第三个变量，就可以交换两个变量的值
var a = 4,
    b = 3;

a = a ^ b; // 7
b = a ^ b; // 4
a = a ^ b; // 3
```

## Object.prototype.toString()

在toString()方法被调用时,会执行下面的操作步骤:

> 如果this的值为undefined,则返回"[object Undefined]".
  如果this的值为null,则返回"[object Null]".
  让O成为调用ToObject(this)的结果.
  让class成为O的内部属性\[[Class]]的值.
  返回三个字符串"[object ", class, 以及 "]"连接后的新字符串.

由于 JavaScript 中一切都是对象，任何都不例外，对所有值类型应用Object.prototype.toString.call()

方法结果如下：

```
console.log(Object.prototype.toString.call(123));          //[object Number]
console.log(Object.prototype.toString.call('123'));        //[object String]
console.log(Object.prototype.toString.call(undefined));    //[object Undefined]
console.log(Object.prototype.toString.call(true));         //[object Boolean]
console.log(Object.prototype.toString.call({}));           //[object Object]
console.log(Object.prototype.toString.call([]));           //[object Array]
console.log(Object.prototype.toString.call(function(){})); //[object Function]
```

所有类型都会得到不同的字符串，几乎完美。
在JavaScript中,想要判断某个对象值属于哪种内置类型,最靠谱的做法就是通过 **Object.prototype.toString()** 方法.

## 判断对象是否为空对象，即不包含任何原始属性

```
function isEmpty(obj){
    for (var p in obj) {
      return false;
    }
    return true;
  }
```

## 显示网页所有元素轮廓

控制台中输入：
```
[].forEach.call($$("*"),function(a){ a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16) })
```

## 利用a标签自动解析URL

```
function parseURL(url) {
  var a = document.createElement('a');
  a.href = url;
  return {
    source: url,
    protocol: a.protocol.replace(':', ''),
    host: a.hostname,
    port: a.port,
    query: a.search,
    params: (function () {
      var ret                 = {},
          seg                 = a.search.replace(/^\?/, '').split('&'),
          len = seg.length, i = 0, s;
      for (; i < len; i++) {
        if (!seg[i]) {
          continue;
        }
        s = seg[i].split('=');
        ret[s[0]] = s[1];
      }
      return ret;
    })(),
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
    hash: a.hash.replace('#', ''),
    path: a.pathname.replace(/^([^\/])/, '/$1'),
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
    segments: a.pathname.replace(/^\//, '').split('/')
  };
}
```
参考： [Parsing URLs with the DOM!](//james.padolsey.com/javascript/parsing-urls-with-the-dom/)

## 利用toString()方法生成随机字符串
```
function generateRandomAlphaNum(len) {
  var rdmString = "";
  for (; rdmString.length < len; rdmString += Math.random().toString(36).substr(2));
  return rdmString.substr(0, len);
}
```

## 禁止别人以iframe加载你的页面

```
if (window.location != window.parent.location) window.parent.location = window.location;
```

---
> 更新： 2017/2/4

## 用数组批量赋值

```
var [a, b, c] = 'hello world !'.split(' ');
[a, b, c] = ['newhello', 'newworld', '?'];
console.log(a);
```

---
> 更新： 2017/2/15

## 如果代码经常调用字面量值的方法，应该考虑把它们转换为对象

> 字符串对象的所有属性和方法都是在字符串对象而不是值上定义的。如果你对字符串值调用属性和方法，ECMAScript 引擎必须用相同的字符串值隐式地创建一个新的字符串对象，然后才能调用方法。这个对象仅用于这一个需求，如果下次再对字符串值调用某个方法，会再次类似地创建字符串对象。

下面的示例的让脚本引擎创建 21 个新的字符串对象。每次访问 length 属性和每次调用 charAt 方法的时候都会创建对象：

```
var s = '0123456789';
for (var i = 0; i < s.length; i++) {
  s.charAt(i);
}
```

下面的示例与上面那个示例等价，但只创建了一个对象，它的执行结果更好：

```
var s = new String('0123456789');
for (var i = 0; i < s.length; i++) {
  s.charAt(i);
}
```

## 使用累加形式连接字符串

字符串连接可以非常消耗性能。使用 + 运算符不会直接把结果赋值给变量，它会在内存中创建一个新的字符串用于保存结果，这个新的字符串可以赋值给变量。下面的代码展示了一个常见的字符串连接：

```
a += 'x' + 'y';
```

这段代码首先会在内存中创建一个临时的字符串保存连接的结果 xy，然后将它连接到 a 的当前值，再将最终的连接结果赋值给 a。下面的代码使用了两条命令，但因为它每次都是直接赋值，所以不会使用临时字符串。当今许多浏览器中运行这段代码速度会快 20%，而且只需要更少的内存，因为它不需要暂存连接结果的临时字符串：

```
a += 'x';
a += 'y';
```

→ [高效的 JavaScript](//www.zcfy.cc/article/dev-opera-efficient-javascript-2320.html)

## 复杂运算缓存

```
function memoizeFunction(func) {
	var cache = {};
	return function() {
		var key = arguments[0];
		if (cache[key]) {
			return cache[key];
		} else {
			var val = func.apply(this, arguments);
			cache[key] = val;
			return val;
		}
	};
}
var fibonacci = memoizeFunction(function(n) {
	return (n === 0 || n === 1) ? n : fibonacci(n - 1) + fibonacci(n - 2);
});
console.log(fibonacci(100)); // 输出354224848179262000000
console.log(fibonacci(100)); // 输出354224848179262000000
```

## 金钱千分位格式化

```
var money = '123456789';
var format = money.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
console.log(format); // 123,456,789
```

也可用Number.toLocaleString实现，不过要考虑兼容性， [参考](//developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString)

```
var money = 1234567.899;
var format = money.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2});
console.log(format); // 1,234,567.90
```

## 数组去重

```
[...new Set([1, "1", 2, 1, 1, 3])]
```

## 函数强制参数

```
mandatory = () => {
	throw new Error('Missing parameter!');
};
foo = (bar = mandatory()) => {
	return bar;
};
```

## 判断是否为对象

```
function isObject(value) {
  return Object(value) === value;
}
```

## \[参考\]

[45 useful javascript tips tricks and best practices](http://modernweb.com/2013/12/23/45-useful-javascript-tips-tricks-and-best-practices/)
[You Don't Need jQuery](//github.com/oneuijs/You-Dont-Need-jQuery)
[JavaScript 秘密花园](//bonsaiden.github.io/JavaScript-Garden/zh)
[盘点JavaScript里好用的原生API ꒰･◡･๑꒱](//segmentfault.com/a/1190000002753931)
[关于原生js的一些研究](//segmentfault.com/a/1190000002911253)
[高效的JavaScript](//www.zcfy.cc/article/dev-opera-efficient-javascript-2320.html)
[JavaScript编程黑科技](//github.com/jawil/blog/issues/24)

