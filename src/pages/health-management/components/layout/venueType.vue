/**
 * @description 项目管理列表
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */
<template>
  <div class="venue-type">
    <div class="venue-type-list co-flex co-ac co-bd-b co-bg-0 co-pd-lr08" v-for="venue in venueData" :key="venue.id">
      <div class="venue-type-img co-bd-a1">
        <img :src="typeImg" alt="">
      </div>
      <div class="co-f1 co-pd-l06">
        <div><span class="co-pd-r04">{{venue.name}}</span>({{venue.use}}/{{venue.total}})</div>
        <div class="co-mg-t04 co-fs-01 co-cl-2">开放时间：{{venue.time}}</div>
      </div>
      <div class="venue-choose co-bd-a1 co-flex co-ac">
        <i class="coicon coicon-clock co-fs-2"></i><span class="co-fs-01 co-pd-l02">预约</span>
      </div>
    </div>
  </div>
</template>

<script>
import typeImg from '../../assets/images/type.png'
export default {
  name: 'venueType',
  components: {
  },
  props: {
    venueData: {
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
  .venue-type {
    .venue-type-list {
      height: 150px;
    }
    .venue-type-img {
      border-radius: 12px;
      overflow: hidden;
      img {
        width: 94px;
        height: 94px;
        display: block
      }
    }
    .venue-choose {
      border-color:#d0011b;
      border-radius: 40px;
      color:#d0011b;
      padding: 6px 18px;
    }
  }
</style>
