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
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
  },
}
</script> 