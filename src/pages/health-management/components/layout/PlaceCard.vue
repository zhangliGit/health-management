/**
 * @description 场地列表项
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/08
 */
<template> 
  <div class="place-type">
    <div class="co-mg-t05" v-for="place in placeList" :key="place.id">
      <div class="place-type-list co-flex co-ac co-bg-0">
        <div class="place-type-img co-bd-a1">
          <img :src="typeImg" alt="">
        </div>
        <div class="co-f1 co-pd-l06">
          <div class="co-fs-1">{{place.code}}#{{place.name}}</div>
          <div class="co-mg-t04 co-fs-01 co-cl-2">{{place.venueName}}</div>
        </div>
        <div class="place-choose co-bd-a1 co-flex co-ac co-jc">
          预定
        </div>
      </div>
      <div class="place-time co-bd-b co-bd-t">
          <level-scroll>
            <ul class="container" slot="scrollList">
              <li class="ScrollList co-bd-r" v-for="item in 20" :key="item">{{item}}:00</li>
            </ul>
          </level-scroll>
      </div>
    </div>
  </div>
</template>

<script>
import typeImg from '../../assets/images/type.png'
import LevelScroll from '@c/LevelScroll'
export default {
  name: 'PlaceCard',
  components: {
    LevelScroll
  },
  props: {
    placeList: {
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
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .place-type {
    .place-type-list {
      padding: 30px 32px;
    }
    .place-type-img {
      border-radius: 12px;
      overflow: hidden;
      img {
        width: 94px;
        height: 94px;
        display: block
      }
    }
    .place-choose {
      border-color:#d0011b;
      border-radius: 40px;
      color:#d0011b;
      width: 150px;
      height: 60px;
    }
    .place-time {
      height: 48px;
      background:#f1f1f1;
    }
    .container {
      white-space: nowrap;
      display:inline-block
    }
    .ScrollList {
      font-size: 12px;
      line-height: 48px;
      padding: 0 .6rem;
      display: inline-block;
    }
  }
</style>
