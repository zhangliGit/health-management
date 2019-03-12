/**
 * @description 课程小节列表
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="class-list co-f1 co-flex co-ver co-cl-1">
    <HeaderCom isBack :title="title"></HeaderCom>
    <scroll-list>
      <div>
        <div class="co-flex co-ac co-bg-0 co-pd-a06">
          <div class="class-list-img co-bd-a1">
            <img :src="courseInfo.icon" alt="">
          </div>
          <div class="co-f1 co-pd-l06">
            <div>{{courseInfo.name}}</div>
            <div class="co-mg-t04">教练：{{courseInfo.teacher}}</div>
          </div>
        </div>
        <class-card :class-list = "classList"></class-card>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import ClassCard from '../components/layout/ClassCard'
import { mapState, mapActions} from 'vuex'

export default {
  name: 'ClassList',
  components: {
    HeaderCom,
    ClassCard,
    ScrollList
  },
  data () {
    return {
      title: '课程小节',
      courseInfo: this.$route.params
    }
  },
  created() {
    this.getClassList({
      id: 12
    })
  },
  computed: {
    ...mapState('course', [
      'classList'
    ])
  },
  methods: {
    ...mapActions('course', [
      'getClassList'
    ])
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>
  .class-list {
    .class-list-img {
      border-radius: 12px;
      overflow: hidden;
      img {
        width: 98px;
        height: 98px; 
        display: block
      }
    }
  }
</style>
