/**
 * @description 场地store模块
 * @author zhangli
 * @date 2019/3/11
 */

import Vue from 'vue'
import $ajax from '../../assets/js/ajax-service.js'
import apiUrl from '../../assets/js/config-api'

const place = {
  namespaced: true,
  state: {
    size: 10,
    placeList: [],
    placeNumList: []
  },
  actions: {
    /**
     * @des 获取场馆所有场地
     */
    async getPlaceList ({commit, state}, params) {
      const res = await $ajax.get({
        url: apiUrl.placeList
      })
      commit('setData', {'key': 'placeList', data: res.data})
    },
    /**
     * @des 获取场地使用情况
     */
    async getPlaceNumList ({commit, state}, params) {
      const res = await $ajax.get({
        url: apiUrl.placeNumList,
        params
      })
      commit('setData', {'key': 'placeNumList', data: res.data})
    },
    /**
     * @des 预定场地
     */
    async choicePlace ({commit, state}, params = {}) {
      await $ajax.post({
        url: apiUrl.reservePlace,
        params: {
          id: '',
          number: '',
          date: '',
          sTime: '',
          eTime: ''
        }
      })
      Vue.$vux.toast.text('预定成功')
      if (params.cb) params.cb()
    }
  },
  mutations: {
    setData (state, obj) {
      state[obj.key] = obj.data
    }
  }
}

export default place
