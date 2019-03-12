/**
 * @description 课程store模块
 * @author zhangli
 * @date 2019/3/11
 */

import Vue from 'vue'
import $ajax from '../../assets/js/ajax-service.js'
import apiUrl from '../../assets/js/config-api'

const course = {
  namespaced: true,
  state: {
    size: 10,
    coursePage: 1,
    courseList: [],
    classList: [],
    choiceCourse: [],
    myChoice: []
  },
  actions: {
    /**
     * @des 获取课程列表
     */
    async getCourseList ({commit, state}, params) {
      if (params.type) {
        state.coursePage++
      } else {
        state.coursePage = 1
      }
      const res = await $ajax.get({
        url: apiUrl.courseList,
        params: {
          page: state.coursePage,
          size: state.size
        }
      })
      let data
      if (params.type) {
        data = state.courseList.concat(res.data)
      } else {
        data = res.data
      }
      commit('setData', {'key': 'courseList', data})
      if (params.cb) params.cb(res.data.length)
    },
    /**
     * @des 获取课程小节类别
     * @params id: 课程id
     */
    async getClassList ({commit, state}, params = {}) {
      const res = await $ajax.get({
        url: apiUrl.classList,
        params
      })
      commit('setData', {'key': 'classList', data: res.data})
    },
    /**
     * @des 预约课程
     */
    async choiceClass ({commit, state}, params = {}) {
      await $ajax.post({
        url: apiUrl.choiceClass,
        params
      })
      Vue.$vux.toast.text('预约成功')
      if (params.cb) params.cb()
    },
    /**
     * 已预约场馆和课程
     */
    choiceList ({commit, state}, params) {
      $ajax({
        url: apiUrl.myChoice,
        params: {
        }
      }).then(data => {

      })
    }
  },
  mutations: {
    setData (state, obj) {
      state[obj.key] = obj.data
    }
  }
}

export default course
