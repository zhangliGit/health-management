/**
 * @description 起始页
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver co-cl-1">
    <agree @agreed = "agreed" v-if="agreeTag"></agree>
    <HeaderCom :title="title"></HeaderCom>
    <div class="co-f1 co-flex">
      <scroll-list>
        <div>
          <venue-list :venue-list="venueList"></venue-list>
        </div>
      </scroll-list>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import Agree from '../components/layout/Agree'
import VenueList from '../components/layout/VenueList'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Index',
  components: {
    HeaderCom,
    ScrollList,
    Agree,
    VenueList
  },
  data () {
    return {
      title: '健康管理平台',
      agreeTag: false,
    }
  },
  computed: {
    ...mapState('venue', [
      'venueList'
    ])
  },
  created() {
    if (!window.localStorage.getItem('isAgreed')) {
      this.agreeTag =  true
    }
  },
  methods: {
    ...mapActions('venue', [
      'getVenueList'
    ]),
    agreed () {
      window.localStorage.setItem('isAgreed', true)
      this.agreeTag = false
    }
  },
  created () {
    this.getVenueList()
  },
  mounted() {
  },
}
</script>

<style scoped>
</style>
