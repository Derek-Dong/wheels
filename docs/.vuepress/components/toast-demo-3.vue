<template>
  <div style="padding-top: 16px;">
    <div>
      <w-button @click="onClickButton">上方弹出</w-button>
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
  methods: {
    onClickButton () {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHtml: true
      })
    }
  },
}
</script>