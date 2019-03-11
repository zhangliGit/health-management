/**
 * @description 首页人员信息
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="person-con co-flex co-bg-0">
    <div class="person-card">
      <div class="person-name co-flex co-ac">
        <img class="person-icon" :src="userInfo.pic" alt="头像">
        <div class="co-f1 name">
          <div>
            <span class="co-fs-2">{{userInfo.name}}</span>
            <span class="co-pd-l06">{{userInfo.ename}}</span>
          </div>
          <div class="co-mg-t02">{{userInfo.department}}</div>
        </div>
        <div @click="qrCode">
          <i class="coicon coicon-headlines co-fs-4"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PersonCard',
  components: {
  },
  props: {
    userInfo: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    qrCode () {
      this.$router.push('/qrCode')
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .person-con {
    height: 200px;
    width: 100%;
    .person-card {
      position: absolute;
      z-index: 9999;
      width: 100%;
      margin-top: -48px;
    }
    .person-name {
      margin: 0 30px;
      border-radius: 20px;
      height: 200px;
      padding: 0 45px;
      background-color:#fff;
      box-shadow: 0px 2px 2px #ccc;
    }
    .person-icon {
      width: 108px;
      height: 108px;
      border-radius: 100%;
      display: block
    }
    .name {
      margin-left: 36px
    }
  }
</style>
