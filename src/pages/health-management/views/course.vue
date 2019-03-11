/**
 * @description 课程界面
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver">
    <scroll-list ref="scroll">
      <course-list :course-list="courseList"></course-list>
    </scroll-list>
  </div>
</template>

<script>
import ScrollList from '@c/ScrollList'
import CourseList from '../components/layout/CourseList'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Course',
  components: {
    ScrollList,
    CourseList
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('course', [
      'courseList'
    ])
  },
  methods: {
    ...mapActions('course', [
      'getCourseList'
    ])
  },
  created() {
    this.getCourseList()
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
