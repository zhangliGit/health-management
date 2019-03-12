/**
 * 公用store模块
 */
import createPersistedState from 'vuex-persistedstate'
import Vue from 'vue'
import Vuex from 'vuex'
import demoPage from './modules/list-data.js'
import home from './modules/home.js'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    demoPage,
    home
  },
  state: {
  },
  getters: {
  },
  actions: {

  },
  mutations: {
  },
  plugins: [createPersistedState()]
})
