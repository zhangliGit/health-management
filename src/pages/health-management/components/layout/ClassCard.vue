/**
 * @description 小节模板
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/08
 */
<template> 
  <div class="class-card">
    <div class="co-flex co-ac co-bg-0 co-pd-a05 co-mg-t04" v-for="(item, index) in classList" :key="item.id">
      <div class="class-card-top">
        <span>{{index + 1}}</span>
      </div>
      <div class="co-f1 co-fs-01">
        <div>课程日期：{{item.time}}</div>
        <div class="co-mg-t02 co-cl-2">课程时间：{{item.timeLine}}</div>
        <div class="co-mg-t02 co-cl-2 co-flex co-jsb">
          <span>可预约：{{item.total}}</span>
          <span>已预约：{{item.use}}</span>
        </div>
      </div>
      <div :class="['course-choose co-bd-a1 co-flex co-ac co-jc', {' course-choose-no': item.isTag}]">
        <span class="co-fs-01" v-if="!item.isTag"  @click="choiceClass()">预约</span>
        <span class="co-fs-01" v-if="item.isTag">已预约</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ClassCard',
  components: {
  },
  props: {
    classList: {
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
    ...mapActions('course', [
      'choiceClass'
    ])
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .class-card-top {
    color: #fff;
    margin-right: 28px;
    background:chocolate;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    font-size: 18PX;
    text-align: center;
    line-height: 60px;
  }
</style>
