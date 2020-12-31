<template>
  <div style="margin-top: 10px">
    <div>
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
    </div>

    <div style="margin-top: 20px">
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
    </div>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'
export default {
  data() {
    return {
      selected1: '1',
      selected2: '1'
    }
  },
  components: {
    'w-tabs': Tabs,
    'w-tabs-head': TabsHead,
    'w-tabs-body': TabsBody,
    'w-tabs-item': TabsItem,
    'w-tabs-pane': TabsPane,
  }
}
</script> 