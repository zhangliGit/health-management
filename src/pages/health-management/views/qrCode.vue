/**
 * @description 二维码
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver co-cl-1 qr_code">
    <HeaderCom isBack :title="title"></HeaderCom>
    <div class="co-f1">
      <div class="qr_person">
        <div class="co-flex co-ac"> 
          <img class="person_icon" :src="userInfo.pic" alt="">
          <span class="co-pd-l06 co-fs-2">{{userInfo.name}}</span>
        </div>
      </div>
      <div class="qr_com">
        <img class="qr_img" :src="userInfo.qrcode" alt="">
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
import { mapState } from 'vuex'

export default {
  name: 'QrCode',
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
    ...mapState('venue', [
      'userInfo'
    ])
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
