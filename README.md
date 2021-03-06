# wheels - 一个Vue UI组件

[![Build Status](https://www.travis-ci.org/Derek-Dong/wheels.svg?branch=main)](https://www.travis-ci.org/Derek-Dong/wheels)

## 介绍

这是我在学习 Vue 过程中做的一个UI框架，希望对你有用。

## 开始使用

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

3. 引入 wheels
  ```
  import {Button, ButtonGroup, Icon} from 'd-wheels'
  import 'd-wheels/dist/index.css'

  export default {
    name: 'app',
    components: {
      'w-button': Button,
      'w-icon': Icon
    }
  }
  ```

4. 引入 svg symbols
  ```
  <script src="//at.alicdn.com/t/font_2255771_2568c4dk59e.js"></script>
  ```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码