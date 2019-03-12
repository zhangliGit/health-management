/**
 * @description 课程store模块
 * @author zhangli
 * @date 2019/3/11
 */

import $ajax from '@a/js/ajax-service.js'

const home = {
  namespaced: true,
  state: {
    size: 10,
    coursePage: 1,
    courseList: []
  },
  actions: {
    /**
     * @des 获取课程列表
     */
    showData ({commit, state}, params) {
      $ajax({
        url: 'http://yapi.demo.qunar.com/mock/9603/getList',
        params: {
          page: state.coursePage,
          size: state.size
        }
      }).then(data => {
        if (params.cb) params.cb(data.data.length)
        if (params.type) {
          data = state.courseList.concat(data.data)
        } else {
          data = data.data
        }
        commit('setDate', {'key': 'courseList', data})
      })
    }
  },
  mutations: {
    setDate (state, obj) {
      state[obj.key] = obj.data
    }
  }
}

export default home
