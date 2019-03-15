/**
 * 公用store模块
 */
import Vue from 'vue'
import Vuex from 'vuex'
import venue from './modules/venue'
import place from './modules/place'
import course from './modules/course'
import choice from './modules/choice'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    venue,
    place,
    course,
    choice
  }
})
