/**
 * @description 首页
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver">
    <scroll-list ref="scroll">
      <div>
        <banner :swiper-img="bannerList"></banner>
        <person-card :user-info="userInfo"></person-card>
        <notice :notice-list="noticeList"></notice>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import Banner from '../components/layout/Banner'
import PersonCard from '../components/layout/PersonCard'
import Notice from '../components/layout/Notice'
import { mapState, mapActions } from 'vuex'
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
    ...mapState('venue', [
      'bannerList',
      'userInfo',
      'noticeList'
    ])
  },
  methods: {
    ...mapActions('venue', [
      'getBannerList',
      'getUserInfo',
      'getNoticeList'
    ])
  },
  created () {
    this.getBannerList()
    this.getUserInfo()
    this.getNoticeList()
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
