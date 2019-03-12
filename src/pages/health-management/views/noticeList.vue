/**
 * @description 通知列表
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver co-cl-1 notice_list">
    <HeaderCom isBack :title="title"></HeaderCom>
    <scroll-list ref="scroll" pull-down-refresh pull-up-load :page-size = "size" @show-data = "getNoticeList">
      <div>
        <notice-card :notice-list = "noticeList"></notice-card>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import NoticeCard from '../components/layout/NoticeCard'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'NoticeList',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      let _self = vm
      vm.getNoticeList({
        type: 0,
        cb (len) {
          _self.$refs.scroll.upShow(len)
        }
      })
    })
  },
  components: {
    HeaderCom,
    ScrollList,
    NoticeCard
  },
  data () {
    return {
      title: '通知公告'
    }
  },
  computed: {
    ...mapState('venue', [
      'size',
      'noticeList'
    ])
  },
  created() {
  },
  methods: {
    ...mapActions('venue', [
      'getNoticeList'
    ])
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
