<template>
  <div class="co-f1 co-flex co-ver co-cl-1 qr_code">
    <HeaderCom isBack :title="title"></HeaderCom>
    <div class="co-f1">
      <div class="qr_person">
        <div class="co-flex co-ac"> 
          <img class="person_icon" :src="personIcon" alt="">
          <span class="co-pd-l06 co-fs-2">张东海</span>
        </div>
      </div>
      <div class="qr_com">
        <img class="qr_img" :src="qrCode" alt="">
      </div>
      <div class="co-cl-3 co-tx-c">
        扫一扫上面的二维码，添加我为好友
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import personIcon from '../assets/images/person_icon.png'
import qrCode from '../assets/images/qr_code.png'
export default {
  name: 'index',
  components: {
    HeaderCom,
  },
  data () {
    return {
      title: '二维码',
      qrCode,
      personIcon
    }
  },
  created() {
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>
  .qr_code {
    .qr_person {
      margin-top: 140px;
      padding-left: 130px;
    }
    .person_icon {
      width: 108px;
      height: 108px;
      display: block;
      border-radius: 100%
    }
    .qr_com {
      padding: 60px 130px;
    }
    .qr_img {
      width: 100%;
      height: 100%;
      display: block
    }
  }
</style>
