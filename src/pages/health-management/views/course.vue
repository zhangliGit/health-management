<template>
  <div class="co-f1 co-flex co-ver">
    <scroll-list ref="scroll">
      <course-list :course-list="courseList"></course-list>
    </scroll-list>
  </div>
</template>

<script>
import ScrollList from '@c/ScrollList'
import CourseList from '../components/layout/courseList'
export default {
  name: 'home',
  components: {
    ScrollList,
    CourseList
  },
  data () {
    return {
      courseList: [
        {
          id: 0,
          icon: 'coicon-flip',
          name: '瑜伽课',
          teacher: '张老师',
          number: '15',
          time: '10:00-22:00'
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
