<template>
  <div style="padding-top: 16px;">
    <div>
      <w-button @click="$toast('这是上方的内容')">上方弹出</w-button>
      <w-button @click="$toast('这是中间的内容', {position:'middle'})">中间弹出</w-button>
      <w-button @click="$toast('这是下方的内容', {position:'bottom'})">下方弹出</w-button>
    </div>
  </div>
</template>
<script>
import plugin from '../../../src/plugin'
import WButton from '../../../src/button'
import Vue from 'vue'
Vue.use(plugin)
export default {
  components: {WButton},
}
</script>
<style>
.wrapper {
  z-index: 30 !important;
}
</style>