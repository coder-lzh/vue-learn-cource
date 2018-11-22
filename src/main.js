import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus'

if (process.env.NODE_ENV !== 'production') {
  // 当前环境为生产环境的时候，不引入mock
  require('./mock')
}

import Mock from './mock'

Vue.config.productionTip = false
Vue.prototype.$bus = Bus


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
