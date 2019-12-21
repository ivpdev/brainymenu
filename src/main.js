import Vue from 'vue'
import App from './App.vue'
import Framework7 from 'framework7'
import Framework7Vue from 'framework7-vue'
import VueI18n from 'vue-i18n'
import { messages as i18n_messages } from './i18n/messages.js'
window.$ = window.jQuery = require('jquery') //TODO fix linter
//require('./vendors/jquery-ui/jquery-ui-1.12.1/jquery-ui.js') //TODO include only in admin bundle

Vue.config.productionTip = false

Vue.use(Framework7Vue, Framework7);
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages: i18n_messages
});

const app = new Vue({
  render: h => h(App),
  framework7: {
    theme: 'md'
  },
  i18n
})

app.$mount('#app')
