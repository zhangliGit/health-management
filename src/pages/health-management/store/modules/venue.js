/**
 * @description 场馆store模块
 * @author zhangli
 * @date 2019/3/11
 */

import $ajax from '@a/js/ajax-service.js'
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
    getVenueList ({commit, state}, params) {
      $ajax({
        url: apiUrl.venueList
      }).then(data => {
        commit('setDate', {'key': 'venueList', data: data.data})
      })
    },
    /**
     * @des 加载首页banner图
     */
    getBannerList ({commit, state}, params) {
      $ajax({
        url: apiUrl.bannerList
      }, false).then(data => {
        commit('setDate', {'key': 'bannerList', data: data.data})
      })
    },
    /**
     * @des 加载首页banner图
     */
    getUserInfo ({commit, state}, params) {
      $ajax({
        url: apiUrl.userInfo
      }, false).then(data => {
        commit('setDate', {'key': 'userInfo', data: data.data})
      })
    },
    /**
     * @des 获取通知公告
     */
    getNoticeList ({commit, state}, params = {}) {
      let page
      if (params.type) {
        page = ++state.noticePage
      } else {
        page = 1
      }
      $ajax({
        url: apiUrl.noticeList,
        params: {
          page: page,
          size: state.size
        }
      }, false).then(data => {
        if (params.cb) params.cb(data.data.length)
        if (params.type) {
          data = state.noticeList.concat(data.data)
        } else {
          data = data.data
        }
        commit('setDate', {'key': 'noticeList', data})
      })
    }
  },
  mutations: {
    setDate (state, obj) {
      state[obj.key] = obj.data
    }
  }
}

export default venue
