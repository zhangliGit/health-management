
/**
 * @description 课程列表
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */
<template>
  <div class="course-type">
    <div class="course-type-list co-flex co-bd-b co-bg-0 co-pd-lr08" v-for="course in courseList" :key="course.id">
      <div class="">
        <div class="course-type-img co-bd-a1">
          <img :src="course.icon" alt="">
        </div>
      </div>
      <div class="co-f1 co-pd-l06">
        <div>{{course.name}}</div>
        <div class="co-mg-t04">教练：{{course.teacher}}</div>
        <div class="co-mg-t04 co-fs-01 co-cl-2">课程时间：{{course.time}}</div>
      </div>
      <div class="co-flex co-ver co-ae">
        <div class="course-choose co-bd-a1 co-flex co-ac co-jc" @click="choice(course)">
          <i class="coicon coicon-clock co-fs-2"></i><span class="co-fs-01 co-pd-l02">预约</span>
        </div>
        <div class="co-mg-t08">还可预约{{course.number}}人</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'CourseList',
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
    }
  },
  computed: {
  },
  methods: {
    ...mapActions('course', [
      'choiceCourse'
    ]),
    choice (item) {
      this.$router.push({
        name: 'classList',
        params: {
          ...item
        }
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .course-type {
    .course-type-list {
      padding: 32px;
    }
    .course-type-img {
      border-radius: 12px;
      overflow: hidden;
      img {
        width: 98px;
        height: 98px; 
        display: block
      }
    }
    .course-choose {
      border-color:#d0011b;
      border-radius: 40px;
      color:#d0011b;
      height: 60px;
      width: 150px;
    }
  }
</style>
