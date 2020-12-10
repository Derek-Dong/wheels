import Vue from 'vue'
import Button from './button'
import Icon from './icon' 
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('w-button', Button)
Vue.component('w-icon', Icon)
Vue.component('w-button-group', ButtonGroup)
Vue.component('w-input', Input)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: true,
    loading3: false,
    message: 'hi',
  },
  created(){
    setTimeout(()=>{
      let event = new Event('change');
      let inputElement = this.$el.querySelector('input')
      inputElement.dispatchEvent(event)
      console.log('hi')
    },3000)
  },
  methods: {
    inputChange (e) {
      console.log(e)
    }
  }
})