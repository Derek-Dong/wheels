---
title: Popover 弹出框
---
# Popover 弹出框

**使用方法**

### 支持 HTML

#### 预览

<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 示例代码

```vue
<w-popover position="left">
  <w-button>左边弹出</w-button>
  <template slot="content">
    <strong style="color: #F1453D">加粗的提示</strong>
  </template>
</w-popover>
<w-popover>
  <w-button>上方弹出</w-button>
  <template slot="content">
    <a href="https://github.com/Derek-Dong/wheels">这是个a链接</a>
  </template>
</w-popover>
<w-popover position="bottom">
  <w-button>下方弹出</w-button>
  <template slot="content">
    普通文本内容
  </template>
</w-popover>
<w-popover position="right">
  <w-button>右边弹出</w-button>
  <template slot="content">
    普通文本内容
  </template>
</w-popover>
```

### 支持 hover 触发

#### 预览

<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 示例代码

```vue
<w-popover position="left" trigger="hover">
  <w-button>左边弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
<w-popover trigger="hover">
  <w-button>上方弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
<w-popover position="bottom" trigger="hover">
  <w-button>下方弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
<w-popover position="right" trigger="hover">
  <w-button>右边弹出</w-button>
  <template slot="content">
    弹出内容
  </template>
</w-popover>
```

# Attributes
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|position| 设置弹出框相对触发区域的位置 | String |left、right、top、bottom| top
|trigger| 设置触发模式 | String |click、hover|click