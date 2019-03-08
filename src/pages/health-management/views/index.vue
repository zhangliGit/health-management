/**
 * @description 起始页
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver co-cl-1">
    <HeaderCom :title="title"></HeaderCom>
    <div class="co-f1">
      <agree v-if = "agreeTag" @agreed = "agreed"></agree>
      <venue-list v-if="homeTag"></venue-list>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import Agree from '../components/layout/Agree'
import VenueList from '../components/layout/VenueList'
export default {
  name: 'Index',
  components: {
    HeaderCom,
    Agree,
    VenueList
  },
  data () {
    return {
      title: '健康管理平台',
      agreeTag: false,
      homeTag: false
    }
  },
  created() {
    if (window.localStorage.getItem('isAgreed')) {
      this.homeTag = true
    } else {
      this.agreeTag = true
    }
  },
  computed: {
  },
  methods: {
    agreed () {
      window.localStorage.setItem('isAgreed', true)
      this.agreeTag = false
      this.homeTag = true
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
</style>
