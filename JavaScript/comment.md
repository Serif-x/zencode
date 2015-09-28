### JavaScript代码注释规范与示例 

#### 文件注释

文件注释位于文件的最前面，应包括文件的以下信息：概要说明及版本（必须）项目地址（开源组件必须）版权声明（必须）开源协议（开源组件必须）版本号（必须）修改时间（必须），以ISO格式表示（可使用Sublime Text的InsertDate插件插入）文件注释必须全部以英文字符表示，并存在于文件的开发版本与生产版本中。例如：
```
  /*!
   * jRaiser 2 Javascript Library
   * waterfall - v1.0.0 (2013-03-15T14:55:51+0800)
   * http://jraiser.org/ | Released under MIT license
   */
```

```
  /*!
   * kan.56.com - v1.1 (2013-03-08T15:30:32+0800)
   * Copyright 2005-2013 56.com
   */
```

如果文件内包含了一些开源组件，则必须在文件注释中进行说明。例如：
```
  /*!
   * jRaiser 2 Javascript Library
   * sizzle - v1.9.1 (2013-03-15T10:07:24+0800)
   * http://jraiser.org/ | Released under MIT license
   *
   * Include sizzle (http://sizzlejs.com/)
   */
```

#### 普通注释

普通注释是为了帮助开发者和阅读者更好地理解程序，不会出现在API文档中。其中，单行注释以“ // ”开头；多行注释以“ /\* ”开头，以“ \*/ ”结束。普通注释的使用需遵循以下规定。

总是在单行注释符后留一个空格。例如：
```
  // this is comment
```

总是在多行注释的结束符前留一个空格（使星号对齐）。例如：
```
  /* 

   */
```

不要把注释写在多行注释的开始符、结束符所在行。例如：
```
  /* start

  end */
```

```
  /*
  here is line 1
  here is line 2
   */
```

不要编写无意义的注释。例如：
```
  // 初始化value变量为0
  var value = 0;
```
如果某段代码有功能未实现，或者有待完善，必须添加“TODO”标记，“TODO”前后应留一个空格。例如：
```
  // TODO 未处理IE6-8的兼容性
  function setOpacity(node, val) {
    node.style.opacity = val;
  }
```

#### 文档注释(JSDoc)

文档注释将会以预定格式出现在API文档中。它以“ /\* ”开头，以“ \*/ ”结束，其间的每一行均以“ \* ”开头（均与开始符的第一个“ \* ”对齐），且注释内容与“ \* ”间留一个空格。例如：

```
  /**
   * comment
   */
```

文档注释必须包含一个或多个注释标签。

@module 声明模块，用法：

```
  /**
   * 模块说明
   * @module 模块名
   */
```

例如：

```
  /**
   * Core模块提供最基础、最核心的接口
   * @module Core
   */
```

@class 声明类，用法：

```
  /**
   * 类说明
   * @class 类名
   * @constructor
   */
```

@class必须搭配@constructor或@static使用，分别标记非静态类与静态类。@constructor可以标识一个函数是构造函数。
```
  /**
   * 节点集合类
   * @class NodeList
   * @constructor
   * @param {ArrayLike<Element>} nodes 初始化节点
   */
```

@method 声明函数或类方法，用法：
```
  /**
   * 方法说明
   * @method 方法名
   * @for 所属类名
   * @param {参数类型} 参数名 参数说明
   * @return {返回值类型} 返回值说明
   */
```

没有指定 @for 时，表示此函数为全局或模块顶层函数。当函数为静态函数时，必须添加@static；当函数有参数时，必须使用@param；当函数有返回值时，必须使用@return（多类返回值用@returns {*|Type} ）。
```
  /**
   * 返回当前集合中指定位置的元素
   * @method
   * @for NodeList
   * @param {Number} [i=0] 位置下标。如果为负数，则从集合的最后一个元素开始倒数
   * @return {Element} 指定元素
   */
```

@param 声明函数参数，必须与@method搭配使用。

当参数出现以下情况时，使用对应的格式：
```
  [参数名]
```

参数有默认值：
```
  [参数名=默认值]
```

@property 声明类属性及说明，用法：
```
  /**
   * @property {属性类型} 属性名 属性描述
   */
```

#### 其他文档注释

```
  @author 指示代码的作者 
  @deprecated 指示一个函数已经废弃，而且在将来的代码版本中将彻底删除。要避免使用这段代码
  @version 指定发布版本
  @alias 函数或变量的别名
  @throws @exception 描述函数可能抛出的异常的类型
  @description 代码提示时显示被描述变量或者函数的描述信息
  @private 指示一个类或函数是私有的。私有类和函数不会出现在HTML文档中，除非运行JSDoc时提供了 --private 命令行选项
  @example 提示代码示例
  @extends {type} 标识继承于某个类型
  @type {Type[,Type,...]} 定义某个变量的类型
  @ignore JSDoc忽略有这个标记的函数
```

#### 参考

[js/javascript代码注释规范与示例](http://www.lifefrom.com/qianduan/336.html)  
[jsdoc-toolkit](https://code.google.com/p/jsdoc-toolkit/w/list)  
[@use JSDoc](http://usejsdoc.org/)  
[JSDoc+规范](http://ask.dcloud.net.cn/article/129)  
