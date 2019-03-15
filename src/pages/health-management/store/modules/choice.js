/**
 * @description 已预约列表
 * @author zhangli
 * @date 2019/3/15
 */

import Vue from 'vue'
import $ajax from '../../assets/js/ajax-service.js'
import apiUrl from '../../assets/js/config-api'

const choice = {
  namespaced: true,
  state: {
    size: 10,
    choicePage: 1,
    tabType: 1,
    choicePlaceList: [],
    choiceCourseList: []
  },
  actions: {
    /**
     * @des 获取场馆课程预约列表
     */
    async getChoiceList ({commit, state}, params) {
      if (params.type) {
        state.choicePage++
      } else {
        state.choicePage = 1
      }
      const res = await $ajax.get({
        url: apiUrl.myChoice,
        params: {
          page: state.choicePage,
          size: state.size
        }
      })
      let data
      let ty = state.tabType === 1 ? 'choicePlaceList' : 'choiceCourseList'
      if (params.type) {
        data = state[ty].concat(res.data)
      } else {
        data = res.data
      }
      commit('setData', {'key': ty, data})
      if (params.cb) params.cb(res.data.length)
    },
    /**
     * @des 签到(取消预约)
     */
    async getPlaceNumList ({commit, state}, params) {
      const res = await $ajax.get({
        url: apiUrl.placeNumList,
        params
      })
      Vue.$vux.toast.text('预定成功')
      commit('setData', {'key': 'placeNumList', data: res.data})
    }
  },
  mutations: {
    setData (state, obj) {
      state[obj.key] = obj.data
    }
  }
}

export default choice
