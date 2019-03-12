/**
 * @description 起始页场馆列表
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="venue-list">
    <div class="co-pd-t1 co-tx-c co-fs-1 co-cl-2">请您选择一个场馆</div>
    <div @click="goMain" class="venue-list-item co-bg-0 co-flex co-jsb" v-for="venue in venueList" :key="venue.id">
      <div class="co-fs-1 co-pd-a1">{{venue.name}}</div>
      <img :src="venue_img" class="venue-list-img" alt="">
    </div>
  </div>
</template>

<script>
import venue_img from '../../assets/images/venue_img.png'
export default {
  name: 'VenueList',
  components: {
  },
  props: {
    venueList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      venue_img
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
  .venue-list {
    padding-bottom: 10px;
    .venue-list-item {
      margin: 40px;
      height: 202px;
      border-radius: 18px;
      overflow: hidden;
    }
    .venue-list-img {
      width: 365px;
      height: 200px;
      display: block;
    }
  }
</style>
