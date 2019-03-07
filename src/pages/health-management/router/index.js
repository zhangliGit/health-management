import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'
const container = (resolve) => { require(['../views/container.vue'], resolve) }
const qrCode = (resolve) => { require(['../views/qrCode.vue'], resolve) }
const noticeList = (resolve) => { require(['../views/noticeList.vue'], resolve) }
Vue.use(Router)
Router.prototype.goBack = function () {
  this.isBack = true
  this.back()
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/container',
      name: 'container',
      component: container
    },
    {
      path: '/qrCode',
      name: 'qrCode',
      component: qrCode
    },
    {
      path: '/noticeList',
      name: 'noticeList',
      component: noticeList
    }
  ]
})
