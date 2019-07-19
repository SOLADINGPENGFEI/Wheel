import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';

//消除浏览器样式差异
import '@/scss/reset.scss'


// 去掉上线切到正式环境差异
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
