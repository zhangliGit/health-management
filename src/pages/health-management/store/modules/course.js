/**
 * @description 课程store模块
 * @author zhangli
 * @date 2019/3/11
 */

import $ajax from '@a/js/ajax-service.js'
import apiUrl from '../../assets/js/config-api'

const course = {
  namespaced: true,
  state: {
    size: 10,
    courseList: [],
    choiceCourse: []
  },
  actions: {
    /**
     * @des 获取课程列表
     */
    getCourseList ({commit, state}, params) {
      $ajax({
        url: apiUrl.courseList
      }).then(data => {
        commit('setDate', {'key': 'courseList', data: data.data})
      })
    },
    /**
     * @des 预约课程
     */
    choiceCourse ({commit, state}, params) {
      $ajax({
        url: apiUrl.courseChoice,
        type: 'post',
        params: {
        }
      }).then(data => {
        params.cb()
      })
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
    setDate (state, obj) {
      state[obj.key] = obj.data
    }
  }
}

export default course
