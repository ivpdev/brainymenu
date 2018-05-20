import Vue from 'vue'
import App from './App.vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'

Vue.config.productionTip = false

Vue.use(Framework7Vue, Framework7);

const app = new Vue({
  render: h => h(App)
})

app.$mount('#app')
window.aaap = app
