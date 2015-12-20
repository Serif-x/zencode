# JavaScript编码习惯

## 运用||和&&运算符

```
var foo = 10;    
foo == 10 && doSomething(); // is the same thing as if (foo == 10) doSomething();   
foo == 5 || doSomething(); // is the same thing as if (foo != 5) doSomething(); 

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

## [闭包]利用闭包模拟私有方法

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

function OnBlankTap(targetsExcluded, callback){
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

## [参考]

[45 useful javascript tips tricks and best practices](http://modernweb.com/2013/12/23/45-useful-javascript-tips-tricks-and-best-practices/)  

