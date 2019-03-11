/**
 * @description 首页banner图
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="swiper-scroll">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide class="swiperCom" v-for="(item, index) in swiperImg" :key="index">
        <img class="swiper-img" :src="item.pic" style="width: 100%; height: auto; display: block" alt="" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import banner from '../../assets/images/banner.png'
export default {
  name: 'Banner',
  components: {
    swiper,
    swiperSlide
  },
  props: {
    swiperImg: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        loop: true,
        effect: 'slide',
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: {
          delay: 3000
        }
      }
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
  .swiper-scroll {
    min-height: 350px
  }
</style>
