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
            <div class="co-mg-t02 co-cl-2 co-fs-01">开放日：{{placeInfo.day | showDay}} </div>
            <div class="co-mg-t02 co-cl-2 co-fs-01">开放时间：{{placeInfo.time.join(',')}} </div>
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
import mixins from '../assets/js/mixins'

export default {
  name: 'PlaceList',
  components: {
    HeaderCom,
    ScrollList,
    PlaceCard,
    CalendarBar
  },
  mixins: [mixins],
  data () {
    return {
      title: '场地列表'
    }
  },
  created() {
    this.currentDay('12')
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
    currentDay (day) {
      this.getPlaceNumList({
        id: this.$route.params.id,
        date: day
      })
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
      height: 150px;
      padding: 0 30px;
    }
  }
</style>
