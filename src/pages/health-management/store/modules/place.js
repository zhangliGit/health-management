/**
 * @description 场地store模块
 * @author zhangli
 * @date 2019/3/11
 */

import $ajax from '@a/js/ajax-service.js'
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
    getPlaceList ({commit, state}, params) {
      $ajax({
        url: apiUrl.placeList
      }).then(data => {
        commit('setDate', {'key': 'placeList', data: data.data})
      })
    },
    /**
     * @des 获取场地使用情况
     */
    getPlaceNumList ({commit, state}, date) {
      $ajax({
        url: apiUrl.placeNumList,
        params: {
          date
        }
      }).then(data => {
        commit('setDate', {'key': 'placeNumList', data: data.data})
      })
    },
    /**
     * @des 预定场地
     */
    choicePlace ({commit, state}, params) {
      $ajax({
        url: apiUrl.placeNumList,
        type: 'post',
        params: {
          id: '',
          number: '',
          date: '',
          sTime: '',
          eTime: ''
        }
      }).then(data => {
        params.cb()
      })
    }
  },
  mutations: {
    setDate (state, obj) {
      state[obj.key] = obj.data
    }
  }
}

export default place
