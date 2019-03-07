<template>
  <div class="person-con co-flex">
    <div class="person-card">
      <div class="person-name co-flex co-ac">
        <img class="person-icon" :src="personIcon" alt="头像">
        <div class="co-f1 name">
          <div>
            <span class="co-fs-2">张海东</span>
            <span class="co-pd-l06">Zhang Haidong</span>
          </div>
          <div class="co-mg-t02">EMP PPTAC</div>
        </div>
        <div @click="qrCode">
          <i class="coicon coicon-headlines co-fs-4"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import personIcon from '../../assets/images/person_icon.png'
export default {
  name: 'personCard',
  components: {
  },
  data () {
    return {
      personIcon
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
      display: block
    }
    .name {
      margin-left: 36px
    }
  }
</style>
