<template>
  <div style="padding-top: 16px;">
    <w-row class="demoRow" gutter="10">
      <w-col span="8">
        <div class="demoCol">8</div>
      </w-col>
      <w-col span="8">
        <div class="demoCol">8</div>
      </w-col>
      <w-col span="8">
        <div class="demoCol">8</div>
      </w-col>
    </w-row>
    <w-row class="demoRow" gutter="10">
      <w-col span="6">
        <div class="demoCol">6</div>
      </w-col>
      <w-col span="6">
        <div class="demoCol">6</div>
      </w-col>
      <w-col span="6">
        <div class="demoCol">6</div>
      </w-col>
      <w-col span="6">
        <div class="demoCol">6</div>
      </w-col>
    </w-row>
  </div>
</template>

<script>
import Row from '../../../src/row'
import Col from '../../../src/col'
export default {
  components: {
    'w-row' : Row,
    'w-col' : Col
  },
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.demoRow{
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style> 