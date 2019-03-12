/**
 * @description 已约
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver">
    <tab-menu :tab-menu="tabMenu"  @tabCurrent = "tabCurrent"></tab-menu>
    <scroll-list ref="scroll">
      <div>
        <choice-card :type="type" :choice-list="myChoice"></choice-card>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import ScrollList from '@c/ScrollList'
import TabMenu from '@c/TabMenu'
import ChoiceCard from '../components/layout/ChoiceCard'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Choice',
  components: {
    ScrollList,
    ChoiceCard,
    TabMenu
  },
  data () {
    return {
      type: 1,
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
  computed: {
    ...mapState('course', [
      'myChoice'
    ])
  },
  methods: {
    ...mapActions('course', [
      'choiceList'
    ]),
    tabCurrent (item) {
      this.type = item.type
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
