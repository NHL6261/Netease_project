import Vue from 'vue'
// 适配 
import 'lib-flexible'
//注册mint-ui
import {Button,Search} from 'mint-ui'
import App from './App.vue'
// 引入路由
import router from './router'
import * as API from './api'
Vue.prototype.$API = API
Vue.config.productionTip = false
Vue.component(Button.name,Button)
Vue.component(Search.name,Search)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')