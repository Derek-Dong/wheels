<template>
  <div>
    <div class="easy">
      <w-input placeholder="请输入内容"></w-input>
      <w-input value="默认内容"></w-input>
      <w-input disabled value="默认内容"></w-input>
    </div>
    <div class="error">
      <w-input error="用户名不低于两个字"></w-input>
    </div>
    <div class="bindDate">
      <w-input v-model="value"></w-input>
      <p>value: {{value}}</p>
    </div>
  </div>
</template>
<script>
import Input from '../../../src/input'
export default {
  components:{'w-input':Input},
  data(){
    return{
      value:'默认内容'
    }
  }
}
</script>
<style lang="scss">
div.easy{
  margin-top: 10px;
  margin-bottom: 8px;
  > input{
    margin-top: 8px;
  }
}
div.bindDate{
  margin-top: 8px;
  height: 64px;
}
</style> 