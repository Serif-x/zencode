JavaScript知识点
===

## 命名空间

> 在JavaScript中，命名空间只是另一个包含方法、属性和对象的对象。

## 变量

> JavaScript 中局部变量只可能通过两种方式声明，一个是作为函数参数，另一个是通过 var 关键字声明。

undefined

> 在 JavaScript 中 undefined 是一个**变量**，注意是变量不是关键字。
  undefined 是一个值为 undefined 的类型。
  这个语言也定义了一个全局变量，它的值是 undefined，这个变量也被称为 undefined。
  但是这个变量不是一个常量，也不是一个关键字。这意味着它的值可以轻易被覆盖。
  由于全局变量 undefined 只是保存了 undefined 类型实际值的副本， 因此对它赋新值不会改变类型 undefined 的值。

## 对象

> 一个对象的属性名可以是任何有效的JavaScript字符串,或者可以被转换为字符串的任何东西，包括空字符串。然而，一个属性的名称如果不是一个有效的 JavaScript 标识符（例如，一个有空格或短横线，或者以数字开头的属性名），就只能通过方括号标记访问。这个标记法在属性名称是动态判定（属性名只有到运行时才能判定）时非常有用。例如：

```
var myObj = new Object(),
    str   = "myString",
    rand  = Math.random(),
    obj   = new Object();

myObj.type              = "Dot syntax";
myObj["date created"]   = "String with space";
myObj[str]              = "String value";
myObj[rand]             = "Random Number";
myObj[obj]              = "Object";
myObj[""]               = "Even an empty string";

console.log(myObj);

```

> 如果一个对象是通过在顶级脚本的对象初始化器创建的，则JavaScript在每次遇到包含该对象字面量的表达式时都会创建对象。同样的，在函数中的初始化器在每次函数调用时也会被创建。

> 所有的 JavaScript 对象继承于至少一个对象。被继承的对象被称作原型，并且继承的属性可能通过构造函数的 prototype 对象找到。

## 原型链继承

要提防原型链过长带来的性能问题，并知道如何通过缩短原型链来提高性能。
更进一步，绝对不要扩展内置类型的原型，除非是为了和新的 JavaScript 引擎兼容。

## 不要使用Eval

> eval 只在被直接调用并且调用函数就是 eval 本身时，才在当前作用域中执行。
  也就是说，其他情况都是在全局作用域中执行。

> 在任何情况下我们都应该避免使用 eval 函数。99.9% 使用 eval 的场景都有不使用 eval 的解决方案。

## 数据类型

### 字符串

> 除 Object 以外的所有类型都是不可变的（值本身无法被改变）。例如，与C语言不同，JavaScript中字符串是不可变的（译注：如，JavaScript 中对字符串的操作一定返回了一个新字符串，原始字符串并没有被改变）。我们称这些类型的值为“原始值”。
> JavaScript 字符串是不可更改的。这意味着字符串一旦被创建，就不能被修改。但是，可以基于对原始字符串的操作来创建新的字符串。

> 除非必要, 应该尽量使用String字面值, 因为String对象的某些行为可能并不与直觉一致. 举例:

```
var s1 = "2 + 2"; // Creates a string literal value
var s2 = new String("2 + 2"); // Creates a String object
eval(s1); // Returns the number 4
eval(s2); // Returns the string "2 + 2"

```

> 大多数JavaScript引擎使用UTF-16编码字符。它会影响JavaScript处理Unicode的方式。
  
  UTF-16（全称：16位统一码转换格式）是一种变长编码:
    + BMP中的代码点编码为单个16位的码元
    + 星光平面的代码点编码为两个16位的码元

> 通过索引访问字符实际上是访问码元
> 始终将JavaScript中的字符串视为一串码元序列。字符串渲染的结果并不能清晰地表明它包含了怎样的码元。
> 大多数JavaScript字符串方法都不能识别Unicode。如果字符串含有混合的Unicode字符，在调用myString.slice()、myString.substring()等方法时就要小心了。
> 字符串迭代器能够识别Unicode
> 准化并不能解决所有问题。那些比较长的组合字符序列并不都有对应的单个字符标准形式。

```
let smile = '\uD83D\uDE00';  
console.log(smile);        // => '😀'  
console.log(smile.length); // => 2

let letter = 'e\u0301';  
console.log(letter);        // => 'é'  
console.log(letter.length); // => 2
```

## 数字和日期

> 在JavaScript里面，数字都是双精度浮点类型的（也就是说一个数字只能在 -(2^53 -1) 和 2^53 -1之间）。没有特定的数据类型为整型。

### 十进制数字

```
1234567890
42
// 数字第一个为零的注意事项：

0888 // 888 将被当做十进制处理
0777 // 在非严格格式下会被当做八进制处理 (用十进制表示就是511)

// 请注意，十进制可以以0开头，后面接其他十进制数字，但是假如后面接的十进制数字小于8，那么该数字将会被当做八进制处理。

```

### 二进制数字

> 二进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母B(0b或者是0B)。  假如0b后面的数字不是0或者1，那么就会提示这样的语法错误（ SyntaxError）： "Missing binary digits after 0b"。

```
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
```

### 八进制数字

> 八进制数字语法是以0为开头的。假如0后面的数字不在0到7的范围内，改数字将会被转换成十进制数字。

### 十六进制数字

> 十六进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母X(0x或者是0X)。

## 数组

> 如果在创建数组时给数组操作符的是一个非整形数值（如3.4），那么它将作为一个代表数组的对象的属性创建，而非作为数组的元素。

```
var arr = [];
arr[3.4] = "Oranges";
console.log(arr.length);                // 0
console.log(arr.hasOwnProperty(3.4));   // true

```

> 数组操作符（方括号）也可以用来访问数组的属性(在JavaScript中，数组也是对象)。例如：

```
var arr = ["one", "two", "three"];
arr[2];  // three
arr["length"];  // 3, equal to: arr.length

```

> 数组操作方法

```
push()    在数组'末尾'添加一个或多个元素，并返回数组操作后的新长度。
unshift() 在数组'开头'添加一个或多个元素，并返回数组的新长度。
pop()     从数组移出'最后一个'元素，并返回该元素。
shift()   从数组移出'第一个'元素，并返回该元素。

slice(start_index, upto_index) 从数组提取一个片段，并作为一个新数组返回。
splice(index, count_to_remove, addElement1, addElement2, ...) 从数组移出一些元素，（可选）并替换它们。

reverse() 颠倒数组元素的顺序：第一个变成最后一个，最后一个变成第一个。
sort() 给数组元素排序。

indexOf(searchElement[, fromIndex]) 在数组中搜索searchElement 并返回第一个匹配的索引。
lastIndexOf(searchElement[, fromIndex]) 和 indexOf差不多，但是是从结尾开始，并且是反向搜索。

forEach(callback[, thisObject]) 在数组'每个元素'项上执行callback。
map(callback[, thisObject]) 在数组的每个单元项上执行callback函数，并返回包含回调函数返回值的新数组。
filter(callback[, thisObject]) 返回一个包含所有在回调函数上返回为true的元素的新数组。

every(callback[, thisObject]) 当数组中'每一个元素'在callback上被返回true时就返回true。
some(callback[, thisObject])  数组中'只要有一项'在callback上被返回true，就返回true。

```

### 理解数组的length

> 在实施层面，JavaScript实际上是将元素作为标准的对象属性来存储，把数组索引作为属性名。长度属性是特殊的，它总是返回最后一个元素的索引值加1(下例中， Dusty 的索引是30，所以cats.length 返回 30 + 1)。  记住，JavaScript数组索引是基于0的:他们从0开始，而不是1。这意味着数组长度属性将比最大的索引值大1:

```
var cats = [];
cats[30] = ['Dusty'];
console.log(cats.length); // 31

```

> 你也可以分配length属性。写一个小于数组元素数量的值会缩短数组，写0会彻底清空数组：

```
var cats = ['Dusty', 'Misty', 'Twiggy'];
console.log(cats.length); // 3

cats.length = 2;
console.log(cats); // logs "Dusty,Misty" - Twiggy has been removed

cats.length = 0;
console.log(cats); // logs nothing; the cats array is empty

cats.length = 3;
console.log(cats); // [undefined, undefined, undefined]

```

> 可以使用 delete 运算符来删除数组元素，效果和对数组元素赋值 undefined 类似，使用 delete 删除数组后数组的长度是不变的


## 遍历

> for in 循环不会遍历那些 enumerable 设置为 false 的属性；比如数组的 length 属性。
> for in 总是要遍历整个原型链，因此如果一个对象的继承层次太深的话会影响性能。

> 总结：为了更好的性能，推荐使用普通的 for 循环并缓存数组的 length 属性。
  使用 for in 遍历数组被认为是不好的代码习惯并倾向于产生错误和导致性能问题。

## setTimeout 和 setInterval

> 基于 JavaScript 引擎的计时策略，以及本质上的单线程运行方式，所以其它代码的运行可能会阻塞此线程。
  因此没法确保函数会在 setTimeout 指定的时刻被调用。

> 作为第一个参数的函数将会在全局作用域中执行，因此函数内的 this 将会指向这个全局对象。

> setTimeout 和 setInterval 也接受第一个参数为字符串的情况。
  这个特性绝对不要使用，因为它在内部使用了 eval。

## 回调大坑

> 如果使用回调，通常最好使用Node.js风格，即第一个回调参数为error，它将始终被调用，用来提醒错误处理

```
var fs = require('fs')

fs.readFile('/Does/not/exist', handleFile)

function handleFile (error, file) {
 if (error) return console.error('Uhoh, there was an error', error)
 // otherwise, continue on and use `file` in your code
}
```

## const 很有用，却不会使数据不可变。它只能防止变量被重新赋值。这不能混为一谈

```
const x = 1;
x = 2; // 不允许

const myArray = [1, 2, 3];
myArray = [0, 2, 3]; // 不允许

myArray[0] = 0; // 允许了!
```

## DOM属性

> 如果属性是 JavaScript 中的保留字，一般用 html 前缀，比如 for 属性，使用 htmlFor 来访问。class 则不同，使用 className 来访问

## 扩展原生属性

> 需要考虑到为旧浏览器实现向后兼容

```
String.prototype.repeatify = String.prototype.repeatify || function(times) {/* code here */};
```

## \[参考\]

- [MDN](//developer.mozilla.org/zh-CN/docs/Web/JavaScript)
- [JavaScript 秘密花园](//bonsaiden.github.io/JavaScript-Garden/zh)
- [Callback Hell](//callbackhell.com/)  
- [JavaScript 与函数式编程](//www.zcfy.cc/article/javascript-and-functional-programming-1013.html)  
- [每个JavaScript开发者都该懂的Unicode](//www.zcfy.cc/article/1303)
