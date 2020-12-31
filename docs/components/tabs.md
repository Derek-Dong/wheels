---
title: Tabs 标签页
---
# Tabs 标签页

**使用方法**

#### 基本用法

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

#### 示例代码

```vue
  <w-tabs :selected="selected1">
    <w-tabs-head>
      <w-tabs-item name="1">标题一</w-tabs-item>
      <w-tabs-item name="2">标题二</w-tabs-item>
    </w-tabs-head>
    <w-tabs-body>
      <w-tabs-pane name="1">内容1</w-tabs-pane>
      <w-tabs-pane name="2">内容2</w-tabs-pane>
  </w-tabs-body>
  </w-tabs>

  <w-tabs :selected="selected2">
    <w-tabs-head>
      <w-tabs-item name="1">标题一</w-tabs-item>
      <w-tabs-item disabled name="2">标题二</w-tabs-item>
      <w-tabs-item name="3">标题三</w-tabs-item>
    </w-tabs-head>
    <w-tabs-body>
      <w-tabs-pane name="1">内容1</w-tabs-pane>
      <w-tabs-pane name="2">内容2</w-tabs-pane>
      <w-tabs-pane name="3">内容3</w-tabs-pane>
    </w-tabs-body>
  </w-tabs>
```

# Attributes

### Tabs

|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|selected| 当前选中 | String |name| --

### TabsHeadItem 
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String |--|-- 
|disabled|设置是否禁用|Boolean|true、false|false

### TabsBodyPane
|参数| 说明 |  类型  | 可选值 | 默认值 |
| :-------------: |:-------------:| :-----:|:-----:|:-----:|
|name| 唯一标识，必选 | String |--|-- 