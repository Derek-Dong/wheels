<template>
  <div style="padding-top: 16px;">
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
  </div>
</template>

<script>
import WButton from '../../../src/button'
import WPopover from '../../../src/popover'
export default {
  components: {WButton, WPopover},
}
</script> 