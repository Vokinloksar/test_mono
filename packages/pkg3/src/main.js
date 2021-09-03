import Vue from 'vue'
import App from './App.vue'

const max = require("lodash/max.js")
console.log(max([1,2]))


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
