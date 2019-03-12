/**
 * @description 课程界面
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver">
    <calendar-bar ref="calendarBar" @current-day = "currentDay"></calendar-bar>
    <scroll-list ref = "scroll" pull-down-refresh  pull-up-load @show-data = "getCourseList">
      <div>
        <course-list :course-list="courseList"></course-list>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import ScrollList from '@c/ScrollList'
import CalendarBar from '@c/CalendarBar'
import CourseList from '../components/layout/CourseList'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Course',
  components: {
    ScrollList,
    CourseList,
    CalendarBar
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
    ]),
    currentDay () {
      this.getCourseList({
        type: 0,
        cb: (len) => {
          this.$refs.scroll.upShow(len)
        }
      })
    }
  },
  created() {
    this.currentDay()
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
