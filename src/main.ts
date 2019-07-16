import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store/index'

//消除浏览器样式差异
import '@/scss/reset.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
