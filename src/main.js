import Vue from 'vue'
// 适配 
import 'lib-flexible'
//注册mint-ui
import {Button,Search} from 'mint-ui'
// 使用Veevalite验证
import './VeeValidate'
import App from './App.vue'
// 引入路由
import router from './router'
// 引入store 对象
import store from './store'
import * as API from './api'
Vue.prototype.$API = API
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.config.productionTip = false
Vue.component(Button.name,Button)
Vue.component(Search.name,Search)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')