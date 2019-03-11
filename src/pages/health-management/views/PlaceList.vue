/**
 * @description 场地列表
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="place co-f1 co-flex co-ver co-cl-1">
    <HeaderCom isBack :title="title"></HeaderCom>
    <scroll-list>
      <div class="co-pd-b05">
        <div class="place-img">
          <img :src="placeInfo.pic" alt="">
        </div>
        <div class="place-des co-flex co-ac">
          <div class="place-icon">
            <img :src="placeInfo.icon" alt="">
          </div>
          <div class="co-f1 co-mg-l1">
            <div class="co-fs-1">{{placeInfo.name}}</div>
            <div class="co-mg-t04 co-cl-2 co-fs-01">开放时间：{{placeInfo.day}} {{placeInfo.time}} </div>
          </div>
        </div>
        <calendar-bar ref="calendarBar" @current-day = "currentDay"></calendar-bar>
        <place-card :place-num-list="placeNumList"></place-card>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import CalendarBar from '@c/CalendarBar'
import PlaceCard from '../components/layout/PlaceCard'
import { mapState, mapActions} from 'vuex'
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
      title: '场地列表'
    }
  },
  created() {
    this.getPlaceNumList(this.$route.params.id)
  },
  computed: {
    placeInfo () {
      return this.placeList[this.$route.params.index] || {}
    },
    ...mapState('place', [
      'placeList',
      'placeNumList'
    ])
  },
  methods: {
    currentDay () {
    },
    ...mapActions('place', [
      'getPlaceNumList'
    ])
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
      img {
        width: 100%;
        height: 200px;
        display: block
      }
    }
    .place-icon {
      img {
        width:128px;
        height: 128px;
        border-radius: 16px;
        display: block;
        margin-top: -64px;
      }
    }
    .place-des {
      height: 132px;
      padding: 0 30px;
    }
  }
</style>
