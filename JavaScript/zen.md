# JavaScript知识点  

> 在JavaScript中，命名空间只是另一个包含方法、属性和对象的对象。  

## 对象  

> 一个对象的属性名可以是任何有效的 JavaScript 字符串,或者可以被转换为字符串的任何东西，包括空字符串。然而，一个属性的名称如果不是一个有效的 JavaScript 标识符（例如，一个有空格或短横线，或者以数字开头的属性名），就只能通过方括号标记访问。这个标记法在属性名称是动态判定（属性名只有到运行时才能判定）时非常有用。例如：  
```
var myObj = new Object(),
    str = "myString",
    rand = Math.random(),
    obj = new Object();

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

> 二进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母B(0b或者是0B)。 假如0b后面的数字不是0或者1，那么就会提示这样的语法错误（ SyntaxError）： "Missing binary digits after 0b"。

```
var FLT_SIGNBIT  = 0b10000000000000000000000000000000; // 2147483648
```

### 八进制数字

> 八进制数字语法是以0为开头的。假如0后面的数字不在0到7的范围内，改数字将会被转换成十进制数字。

### 十六进制数字

> 十六进制数字语法是以零为开头，后面接一个小写或大写的拉丁文字母X(0x或者是0X)。
> 
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

> 在实施层面，JavaScript实际上是将元素作为标准的对象属性来存储，把数组索引作为属性名。长度属性是特殊的，它总是返回最后一个元素的索引值加1(下例中， Dusty 的索引是30，所以cats.length 返回 30 + 1)。记住， JavaScript 数组索引是基于0的: 他们从0开始，而不是1。这意味着数组长度属性将比最大的索引值大1:
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
