/**
 * @description 起始页免责申明
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-Page agree co-flex co-ac co-jc">
    <div class="agree-dialog co-bg-0">
      <img :src="dialogBg" alt="" class="agree-img">
      <div class="agree-content co-flex co-ver">
        <div class="co-tx-c co-pd-b05 co-fs-1">免责申明</div>
        <scroll-list>
          <div class="co-line-h1">免责申明免免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明免责申明责申明免责申明</div>
        </scroll-list>
      </div>
      <div class="co-flex co-fs-1 agree-footer co-bd-t1">
        <div class="co-f1 agree-quit co-bd-r1">拒绝</div>
        <div class="co-f1 agree-ok" @click="agreed">同意</div>
      </div>
    </div>
  </div>
</template>

<script>
import dialogBg from '../../assets/images/dialog_bg.png'
import ScrollList from '@c/ScrollList'
export default {
  name: 'Agree',
  components: {
    ScrollList
  },
  data () {
    return {
      dialogBg
    }
  },
  computed: {
  },
  methods: {
    agreed () {
      this.$emit('agreed')
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.agree {
  padding: 0 100px;
  background: rgba(0, 0, 0, .5);
  .agree-dialog {
    border-radius: 24px;
    overflow: hidden;
  }
  .agree-img {
    width: 100%;
    height: auto;
    display: block
  }
  .agree-content {
    height: 450px;
    padding: 20px 40px;
  }
  .agree-footer {
    height: 88px;
    line-height: 88px;
    text-align: center;
    .agree-quit {
      color: #333;
    }
    .agree-ok {
      color: #21b44a
    }
  }
}
</style>
