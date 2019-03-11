/**
 * @description 主框架
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver">
    <header-com :title="title"></header-com>
    <div class="co-f1 co-flex">
      <component :is="currentCom"></component>
    </div>
    <footer-com @current-menu="currentMenu" :footList = "footList"></footer-com>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import FooterCom from '../components/layout/Footer'
import Home from './Home'
import Venue from './Venue'
import Course from './Course'
import Choice from './Choice'
export default {
  name: 'Container',
  components: {
    HeaderCom,
    FooterCom,
    Home,
    Venue,
    Course,
    Choice
  },
  data () {
    return {
      title: '健康管理平台',
      menuList: [Home, Venue, Course, Choice],
      currentCom: Home,
      footList: [
        {
          title: '首页',
          icon: 'coicon-homepage_fill',
        },
        {
          title: '场馆',
          icon: 'coicon-manage'
        },
        {
          title: '课程',
          icon: 'coicon-label_fill'
        },
        {
          title: '已约',
          icon: 'coicon-like_fill'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    currentMenu (index) {
      this.currentCom = this.menuList[index]
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
