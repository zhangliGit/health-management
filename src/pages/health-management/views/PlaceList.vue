/**
 * @description 场地列表
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="place co-f1 co-flex co-ver co-cl-1">
    <HeaderCom isBack :title="title"></HeaderCom>
    <scroll-list>
      <div class="place-img"></div>
      <div class="place-des co-flex co-ac">
        <div class="">
          <img src="" alt="">
        </div>
        <div class="co-f1 co-mg-l1">
          <div class="co-fs-1">羽毛球场</div>
          <div class="co-mg-t04 co-cl-2">开放时间：周一至周日 16:00 - 22:00 </div>
        </div>
      </div>
      <calendar-bar ref="calendarBar" @current-day = "currentDay"></calendar-bar>
      <place-card :place-list="placeList"></place-card>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import CalendarBar from '@c/CalendarBar'
import PlaceCard from '../components/layout/PlaceCard'
export default {
  name: 'PlaceList',
  components: {
    HeaderCom,
    ScrollList,
    PlaceCard,
    CalendarBar
  },
  data () {
    return {
      title: '场地列表',
      placeList: [
        {
          id: 1,
          name: '羽毛球场',
          venueName: '泛亚场馆',
          code: 1
        },
        {
          id: 2,
          name: '羽毛球场',
          venueName: '泛亚场馆',
          code: 2
        }
      ]
    }
  },
  created() {
  },
  computed: {
  },
  methods: {
    currentDay () {
    }
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>
  .place {
    .place-img {
      width: 100%;
      height: 200px;
      background: #333;
      display: block
    }
    .place-des {
      height: 132px;
      padding: 0 30px;
    }
  }
</style>
