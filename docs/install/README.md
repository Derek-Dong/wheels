---
title: 安装
---

# 安装

1. 添加 CSS 样式

  使用本框架前，请在CSS中开启border-box
  ```
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE 8 及以上浏览器都支持此样式。

  你还需要设置默认颜色等变量(后续会改为 SCSS 变量)
  ```
  :root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
  }
  ```
  IE 15 及以上浏览器都支持此样式。

2. 安装wheels
  ```
  npm i --save d-wheels
  ```