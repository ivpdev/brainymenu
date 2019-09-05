import Vue from 'vue'
import App from './App.vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
window.$ = window.jQuery = require('jquery')
//require('./vendors/jquery-ui/jquery-ui-1.12.1/jquery-ui.js') //TODO include only in admin bundle

Vue.config.productionTip = false

Vue.use(Framework7Vue, Framework7);

const app = new Vue({
  render: h => h(App),
  framework7: {
    theme: 'md'
  }
})

app.$mount('#app')
