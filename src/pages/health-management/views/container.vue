<template>
  <div class="co-f1 co-flex co-ver">
    <header-com :title="title"></header-com>
    <div class="co-f1">
      <component :is="currentCom"></component>
    </div>
    <footer-com @current-menu="currentMenu" :footList = "footList"></footer-com>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import FooterCom from '../components/layout/footer'
import Home from './home'
import Venue from './venue'
import Course from './course'
export default {
  name: 'container',
  components: {
    HeaderCom,
    FooterCom,
    Home,
    Venue,
    Course
  },
  data () {
    return {
      title: '健康管理平台',
      menuList: [Home, Venue, Course],
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
