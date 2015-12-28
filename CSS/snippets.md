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

## \[参考\]


[CSS Protips](//github.com/AllThingsSmitty/css-protips)  
