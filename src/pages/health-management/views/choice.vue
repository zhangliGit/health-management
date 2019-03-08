/**
 * @description 已约
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver">
    <tab-menu :tab-menu="tabMenu"></tab-menu>
    <scroll-list ref="scroll">
      <choice-card :choice-list="choiceList"></choice-card>
    </scroll-list>
  </div>
</template>

<script>
import ScrollList from '@c/ScrollList'
import TabMenu from '@c/TabMenu'
import ChoiceCard from '../components/layout/ChoiceCard'
export default {
  name: 'Choice',
  components: {
    ScrollList,
    ChoiceCard,
    TabMenu
  },
  data () {
    return {
      tabMenu: [
        {
          id: 0,
          name: '已预约'
        },
        {
          id: 1,
          name: '已签到'
        },
        {
          id: 2,
          name: '已取消'
        }
      ],
      choiceList: [
        {
          id: 0,
          icon: 'coicon-flip',
          name: '瑜伽课',
          time: '11月12号 19:00',
          code: '10'
        },
        {
          id: 1,
          icon: 'coicon-flip',
          name: '兵兵球',
          time: '11月12号 19:00',
          code: '10'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
