/**
 * @description 场馆store模块
 * @author zhangli
 * @date 2019/3/11
 */

import $ajax from '../../assets/js/ajax-service.js'
import apiUrl from '../../assets/js/config-api'

const venue = {
  namespaced: true,
  state: {
    noticePage: 1,
    size: 10,
    venueList: [],
    bannerList: [],
    userInfo: {},
    noticeList: []
  },
  actions: {
    /**
     * @des 获取场馆类型
     */
    async getVenueList ({commit, state}, params) {
      const res = await $ajax.get({
        url: apiUrl.venueList
      })
      commit('setData', {'key': 'venueList', data: res.data})
    },
    /**
     * @des 加载首页banner图
     */
    async getBannerList ({commit, state}, params) {
      const res = await $ajax.get({
        url: apiUrl.bannerList
      }, false)
      commit('setData', {'key': 'bannerList', data: res.data})
    },
    /**
     * @des 加载首页banner图
     */
    async getUserInfo ({commit, state}, params) {
      const res = await $ajax.get({
        url: apiUrl.userInfo
      }, false)
      commit('setData', {'key': 'userInfo', data: res.data})
    },
    /**
     * @des 获取通知公告
     */
    async getNoticeList ({commit, state}, params = {}) {
      if (params.type) {
        state.noticePage++
      } else {
        state.noticePage = 1
      }
      const res = await $ajax.get({
        url: apiUrl.noticeList,
        params: {
          page: state.noticePage,
          size: state.size
        }
      }, false)
      let data
      if (params.type) {
        data = state.noticeList.concat(res.data)
      } else {
        data = res.data
      }
      commit('setData', {'key': 'noticeList', data})
      if (params.cb) params.cb(res.data.length)
    }
  },
  mutations: {
    setData (state, obj) {
      state[obj.key] = obj.data
    }
  }
}

export default venue
