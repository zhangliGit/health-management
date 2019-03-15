/**
 * @description 主框架
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver">
    <header-com :title="title">
      <div v-if="title === ''" class="co-f1" slot="center-menu">
        <tab-button @tab-current = "tabCurrent" :tab-menu = "tabMenu"></tab-button>
      </div>
    </header-com>
    <div class="co-f1 co-flex">
      <component :is="currentCom"></component>
    </div>
    <footer-com @current-menu="currentMenu" :footList = "footList"></footer-com>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import TabButton from '@c/TabButton'
import FooterCom from '../components/layout/Footer'
import Home from './Home'
import Venue from './Venue'
import Course from './Course'
import Choice from './Choice'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Container',
  components: {
    HeaderCom,
    FooterCom,
    Home,
    TabButton,
    Venue,
    Course,
    Choice
  },
  data () {
    return {
      title: '健康管理平台',
      menuList: [Home, Venue, Course, Choice],
      currentCom: Home,
      tabMenu: [
        {
          id: 1,
          name: '场馆',
          tip: 0
        },
        {
          id: 2,
          name: '课程',
          tip: 0
        }
      ],
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
    ...mapState('choice', [
      'tabType'
    ])
  },
  methods: {
    ...mapMutations('choice', [
      'setData'
    ]),
    tabCurrent ({id} = item) {
      this.setData({'key': 'tabType', data: id})
    },
    currentMenu (index) {
      this.currentCom = this.menuList[index]
      if (index === 3) {
        this.title = ''
      } else {
        this.title = '健康管理平台'
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
