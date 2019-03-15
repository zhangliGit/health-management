/**
 * @description 预约列表
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/08
 */
<template> 
  <div class="choice-type">
    <div class="choice-type-list co-flex co-ac co-bd-b co-bg-0 co-pd-lr08" v-for="choice in choiceList" :key="choice.id">
      <div class="choice-type-img co-bd-a1">
        <img :src="choice.icon" alt="">
      </div>
      <div class="co-f1 co-pd-l06">
        <div class="co-fs-1">{{choice.time}}</div>
        <div class="co-mg-t04 co-fs-01 co-cl-2">{{choice.number}}#{{choice.placeName}}</div>
      </div>
      <div class="choice-choose co-bd-a1 co-flex co-ac co-jc">
        取消
      </div>
    </div>
  </div>
</template>

<script>
import typeImg from '../../assets/images/type.png'
export default {
  name: 'ChoiceCard',
  components: {
  },
  props: {
    type: {
      type: Number,
      default: 1
    },
    choiceList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
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

<style lang="less" scoped>
  .choice-type {
    .choice-type-list {
      height: 150px;
    }
    .choice-type-img {
      border-radius: 12px;
      overflow: hidden;
      img {
        width: 94px;
        height: 94px;
        display: block
      }
    }
    .choice-choose {
      border-color:#d0011b;
      border-radius: 40px;
      color:#d0011b;
      width: 150px;
      height: 60px;
    }
  }
</style>
