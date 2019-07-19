// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResources from 'vue-resource'
//import User from './components/User'
import BaiduMap from 'vue-baidu-map'
import ElementUI from 'element-ui'
import Axios from 'axios'
import qs from 'qs.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$axios = Axios
Vue.prototype.qs = qs
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'BNeViv2TI3o3ElAYiPKEXvNHUzpLUOvs'
})

Vue.config.productionTip = false
Vue.use(VueResources)
Vue.use(ElementUI)
//Vue.use($axios,axios)


//全局组件
//Vue.component("user",User);
/* eslint-disable no-new */

//全局守卫
// router.beforeEach((to,from,next)=>{
//   //判断store.gettes.isLogin === false
//   if(to.path=='/login'||to.path=='/register'){
//     next()
//   }else{
//     alert("您还没有登录，请先登录！")
//     next('/login')
//   }
// })

//后置钩子
// router.afterEach((to,from)=>{
//   alert("hasuda")
// })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//index.html->main.js->App.vue