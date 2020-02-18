import Vue from 'vue'
// 适配 
import 'lib-flexible'
import App from './App.vue'

// 引入路由
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')