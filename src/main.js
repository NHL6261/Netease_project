import Vue from 'vue'
// 适配 
import 'lib-flexible'
//注册mint-ui
import {Button} from 'mint-ui'
import App from './App.vue'
// 引入路由
import router from './router'
Vue.config.productionTip = false
Vue.component(Button.name,Button)
new Vue({
  render: h => h(App),
  router
}).$mount('#app')