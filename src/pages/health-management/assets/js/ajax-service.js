
import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
axios.defaults.timeout = 15000 // 请求超时时间

const showToast = (tip = '数据加载中') => {
  Vue.$vux.loading.show({})
}
function errorToast (e) {
  let info
  Vue.$vux.loading.hide()
  if (e.code) {
    info = '数据请求失败'
  } else {
    info = '请检查网络'
  }
  Vue.$vux.toast.text(info)
}
const $ajax = {
  async get (obj, tag = true) {
    if (tag) {
      showToast()
    }
    try {
      let res = await axios.get(obj.url, { params: obj.params || '' })
      Vue.$vux.loading.hide()
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.code === 0 || res.status === true) {
          resolve(res)
        } else {
          reject(res)
          Vue.$vux.toast.text(res.errMsg || '操作失败')
        }
      })
    } catch (err) {
      errorToast(err)
    }
  },
  async post (obj, tag = true) {
    if (tag) {
      showToast()
    }
    try {
      let res = await axios.post(obj.url, qs.stringify(obj.params))
      Vue.$vux.loading.hide()
      res = res.data
      return new Promise((resolve, reject) => {
        if (res.status === true) {
          resolve(res)
        } else {
          reject(res)
          Vue.$vux.toast.text(res.errMsg || '操作失败')
        }
      })
    } catch (err) {
      errorToast(err)
    }
  }
}

export default $ajax
