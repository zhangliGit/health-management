<template>
    <div class="footer-com co-flex co-ac co-bd-t">
      <div @click="footMenu(item, index)" :class="['foot-list co-f1 co-flex co-ver co-ac co-jc', {'foot-list--active': currentIndex === index}]" v-for = "(item, index) in footList" :key="index">
        <div>
          <div class="tip-num co-flex co-ac co-jc" v-if="item.tip">{{item.tip}}</div>
          <i :class="item.icon + ' coicon co-fs-3'"></i>
        </div>
        <div class="co-fs-01">{{item.title}}</div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'footerCom',
  components: {
  },
  props: {
    footList: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    footMenu (item, index) {
      this.currentIndex = index
      this.$emit('current-menu', index)
    }
  },
  mounted () {
  }
}
</script>
<style lang="less">
  .footer-com {
    height: 2.6rem;
    background: #fff;
    .foot-list--active {
      color: #d81e06;
    }
    .tip-num {
      position: absolute;
      right: -1rem;
      width: 8px;
      height: 8px;
      -webkit-border-radius: 100%;
      border-radius: 100%;
      background:#d81e06;
      color:#fff;
    }
  }
</style>
