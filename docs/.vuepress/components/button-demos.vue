<template>
  <div class="wrapper">
    <w-button>默认按钮</w-button>
    <w-button icon="settings">默认按钮</w-button>
    <w-button :loading="loading" @click="loading=!loading">默认按钮</w-button>
    <w-button disabled>默认按钮</w-button>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'w-button': Button
    },
    data() {
      return {
        loading: true
      }
    }
  }
</script>
<style>
div.wrapper {
  margin-top: 10px;
}
</style>