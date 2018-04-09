/**
 * 模块
 * https://www.tslang.cn/docs/handbook/modules.html
 */

/// <reference path="./d/declarations.d.ts"/>
import * as URL from 'url';

import { isPrime } from './libs/math-lib';

(function() {
  let url = URL.parse('http://www.typescriptlang.org');

  // UMD模块
  isPrime(2);
  // mathLib.isPrime(2); // Error: “mathLib”指 UMD 全局，但当前文件是模块。请考虑改为添加导入。
})();
