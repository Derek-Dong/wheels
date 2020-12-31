---
title: Layout 布局
---
# Layout 布局

**使用方法**

### 布局一

#### 预览

<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 示例代码

```vue
<w-layout style="color: white; margin-bottom:50px;">
    <w-header style="height: 50px; background:#9E91F2;">
      header
    </w-header>
    <w-content style="height: 100px; background:#7B62D9;">
      content
    </w-content>
    <w-footer style="height: 50px; background:#9E91F2;">
      footer
    </w-footer>
</w-layout>
```

### 布局二

#### 预览

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 示例代码

```vue
<w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <w-header style="height: 50px; background:#9E91F2;">
      header
    </w-header>
    <w-layout>
      <w-sider style="height: 100px; background:#ddd; width:200px; color: black;">
        sider
      </w-sider>
      <w-content style="height: 100px; background:#7B62D9;">
        content
      </w-content>
    </w-layout>
    <w-footer style="height: 50px; background:#9E91F2;">
      footer
    </w-footer>
</w-layout>
```

### 布局三

#### 预览

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 示例代码

```vue
<w-layout style="color: white; overflow:hidden; margin-bottom:50px;">
    <w-sider style=" background:#ddd; width:200px; color: black;">
      sider
    </w-sider>
    <w-layout>
      <w-header style="height: 50px; background:lightskyblue;">
        header
      </w-header>
      <w-content style="height: 100px; background:deepskyblue;">
        content
      </w-content>
      <w-footer style="height: 50px; background:lightskyblue;">
        footer
      </w-footer>
    </w-layout>
</w-layout>
```