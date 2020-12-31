---
title:快速上手
---

# 快速上手

### npm 安装

```bash
npm i --save d-wheels
```

### 开始使用

1. 添加 CSS 样式

使用本框架前，请确保整个项目的 CSS 开启了 border-box

```CSS
*,*::before,*::after{box-sizing: border-box;}
```

IE 8及以上浏览器都支持此样式

2. 引入 wheels

按需引入需要的组件，以达到减小项目体积的目的。

需要注意的是，样式文件要记得引入。

```js
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

**完整组件列表和引入方式**

```js
import Vue from 'vue'
import {
    Button,
    Icon,
    ButtonGroup,
    Input,
    Col,
    Row,
    Layout,
    Header,
    Footer,
    Sider,
    Content,
    Toast,
    plugin,
    Tabs,
    TabsHead,
    TabsBody,
    TabsItem,
    TabsPane,
    Popover,
    Collapse,
    CollapseItem

} from 'd-wheels'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)
Vue.component('w-row',Row)
Vue.component('w-col',Col)
Vue.component('w-layout',Layout)
Vue.component('w-header',Header)
Vue.component('w-sider',Sider)
Vue.component('w-content',Content)
Vue.component('w-footer',Footer)
Vue.use(plugin)                           // toast 组件的使用方法
Vue.component('w-tabs',Tabs)
Vue.component('w-tabs-head',TabsHead)
Vue.component('w-tabs-body',TabsBody)
Vue.component('w-tabs-item',TabsItem)
Vue.component('w-tabs-pane',TabsPane)
Vue.component('w-popover',Popover)
Vue.component('w-collapse',Collapse)
Vue.component('w-collapse-item',CollapseItem)
```