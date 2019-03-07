
/**
 * @description 课程列表
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */
<template>
  <div class="course-type">
    <div class="course-type-list co-flex co-bd-b co-bg-0 co-pd-lr08" v-for="course in courseList" :key="course.id">
      <div class="course-type-img co-bd-a1">
        <img :src="typeImg" alt="">
      </div>
      <div class="co-f1 co-pd-l06">
        <div>{{course.name}}</div>
        <div>教练：{{course.teacher}}</div>
        <div class="co-mg-t04 co-fs-01 co-cl-2">还可预约{{course.number}}</div>
        <div class="co-mg-t04 co-fs-01 co-cl-2">开放时间：{{course.time}}</div>
      </div>
      <div class="course-choose co-bd-a1 co-flex co-ac">
        <i class="coicon coicon-clock co-fs-2"></i><span class="co-fs-01 co-pd-l02">预约</span>
      </div>
    </div>
  </div>
</template>

<script>
import typeImg from '../../assets/images/type.png'
export default {
  name: 'courseList',
  components: {
  },
  props: {
    courseList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      typeImg
    }
  },
  computed: {
  },
  methods: {
    goMain () {
      this.$router.push('/container')
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .course-type {
    .course-type-list {
      padding-top: 30px;
      padding-bottom: 30px;
    }
    .course-type-img {
      border-radius: 12px;
      width: 94px;
      height: 94px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;  
        display: block
      }
    }
    .course-choose {
      border-color:#d0011b;
      border-radius: 40px;
      color:#d0011b;
      height: 60px;
      padding: 0 18px;
    }
  }
</style>
