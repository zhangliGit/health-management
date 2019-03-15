/**
 * @description 已约
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver">
    <tab-menu :tab-menu="tabMenu"  @tab-current = "tabCurrent"></tab-menu>
    <scroll-list ref="scroll" pull-down-refresh pull-up-load :page-size = "size" @show-data = "showData">
      <div>
        <choice-place v-show="tabType === 1" :choice-list="choicePlaceList"></choice-place>
        <choice-course v-show="tabType === 2" :choice-list="choiceCourseList"></choice-course>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import ScrollList from '@c/ScrollList'
import TabMenu from '@c/TabMenu'
import ChoicePlace from '../components/layout/ChoicePlace'
import ChoiceCourse from '../components/layout/ChoiceCourse'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Choice',
  components: {
    ScrollList,
    ChoicePlace,
    ChoiceCourse,
    TabMenu
  },
  data () {
    return {
      levelTabType: 1,
      tabMenu: [
        {
          id: 0,
          name: '已预约',
          type: 1
        },
        {
          id: 1,
          name: '已签到',
          type: 2
        },
        {
          id: 2,
          name: '已取消',
          type: 3
        }
      ]
    }
  },
  watch: {
    tabType (nd, od) {
      this.tabCurrent({type: this.levelTabType})
    }
  },
  created() {
  },
  computed: {
    ...mapState('choice', [
      'size',
      'tabType',
      'choicePlaceList',
      'choiceCourseList'
    ])
  },
  methods: {
    showData (obj) {
      this.getChoiceList({
        ...obj,
        tabType: this.tabType,
        levelTabType: this.levelTabType,
      })
    },
    ...mapActions('choice', [
      'getChoiceList'
    ]),
    tabCurrent (item) {
      let _self = this
      this.levelTabType = item.type
      this.showData({
        type: 0,
        cb (len) {
          _self.$refs.scroll.upShow(len)
        }
      })
    }
  },
  mounted () {
    this.tabCurrent({type: 1})
  }
}
</script>

<style scoped>
</style>
