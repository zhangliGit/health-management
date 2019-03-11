/**
 * @description 全局接口路径配置
 * @author zhangli
 * @date 2019/03/11
 */

import baseUrl from './config-env'

// 接口路径
const apiUrl = {
  venueList: `${baseUrl}venueList`, // 场馆列表
  bannerList: `${baseUrl}bannerList`, // 首页banner图片
  userInfo: `${baseUrl}userInfo`, // 首页用户信息
  noticeList: `${baseUrl}noitceList`, // 通知公告
  placeList: `${baseUrl}placeList`, // 场地列表
  placeNumList: `${baseUrl}placeNumList`, // 场地预约情况列表
  courseList: `${baseUrl}courseList`, // 课程列表
  courseChoice: `${baseUrl}courseChoice`, // 课程预约
  myChoice: `${baseUrl}myChoice` // 预约列表项
}

export default apiUrl
