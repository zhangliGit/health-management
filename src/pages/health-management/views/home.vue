/**
 * @description 首页
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver">
    <scroll-list ref="scroll">
      <banner></banner>
      <person-card></person-card>
      <notice></notice>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import Banner from '../components/layout/Banner'
import PersonCard from '../components/layout/PersonCard'
import Notice from '../components/layout/Notice'
export default {
  name: 'Home',
  components: {
    HeaderCom,
    ScrollList,
    Banner,
    PersonCard,
    Notice
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

<style scoped>
</style>
