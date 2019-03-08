/**
 * @description 通知列表
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver co-cl-1 notice_list">
    <HeaderCom isBack :title="title"></HeaderCom>
    <scroll-list>
      <notice-card :notice-list = "noticeList"></notice-card>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import NoticeCard from '../components/layout/NoticeCard'
export default {
  name: 'NoticeList',
  components: {
    HeaderCom,
    ScrollList,
    NoticeCard
  },
  data () {
    return {
      title: '通知公告',
      noticeList: [
        {
          id: 1,
          send: '管理员',
          time: '2019-10-12',
          title: '园区改造',
          content: '园区改造园区改造园区改造'
        },
        {
          id: 2,
          send: '管理员',
          time: '2019-10-12',
          title: '园区改造',
          content: '园区改造园区改造园区改造'
        }
      ]
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
