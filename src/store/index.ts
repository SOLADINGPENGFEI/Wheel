import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';

// 引入模块
import home from './modules/home';
import detail from './modules/detail';
import img from './modules/img';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    detail,
    img
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [createLogger()]
})