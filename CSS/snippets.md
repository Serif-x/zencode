# CSS编码习惯和技巧

## "Lobotomized Owl" 选择器

```
* + * {
  margin-top: 1.5em;
}
```

## 纯CSS滑动切换效果

```
.slider ul {
  max-height: 0;
  overflow: hidden;
}

.slider:hover ul {
  max-height: 1000px; /* has limits */
  transition: .3s ease; /* animate to max-height */
}
```

## 使用属性选择器显示空文本链接

```
a[href^="http"]:empty::before {
  content: attr(href);
}

// html
<a href="http://www.bootstrap.com/"></a>
```

## 为默认链接添加样式（如通过CMS系统添加的链接）

```
a[href]:not([class]) {
  color: #008000;
  text-decoration: underline;
}
```

## 使用 box-sizing 属性，可以使用通配符（通配符效率低是误区） 

```
*, 
*:before, 
*:after {
  -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
}
```
[关于css通配符性能问题不完全测试](//i.wanz.im/2012/01/03/performance_testing_about_css_universal_selector/)

## 不要在选择器末尾使用 * 通用选择器。

CSS 选择器匹配规则是从右往左，例如：

```
.mod .foo * {
  border-radius: 6px;
}
```

## \[参考\]

[CSS Protips](//github.com/AllThingsSmitty/css-protips)  
[CSS 创作指南](//github.com/cssdream/css-creating)  
[CSS通用元素选择器的都市流言](//shawphy.com/2010/11/css-universal-selector.html)  
[关于css通配符性能问题不完全测试](//i.wanz.im/2012/01/03/performance_testing_about_css_universal_selector/)  
