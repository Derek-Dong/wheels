<template>
  <div style="padding-top: 16px;">
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

  </div>
</template>

<script>
import WButton from '../../../src/button'
import WPopover from '../../../src/popover'
export default {
  components: {WButton, WPopover},
}
</script>
<style>
content-wrapper {
  z-index: 30;
}
</style> 