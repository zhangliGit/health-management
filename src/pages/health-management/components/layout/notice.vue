/**
 * @description 首页通知信息
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="notice co-bg-0">
    <div class="notice-head co-flex co-ac">
      <div class="co-f1 co-fs-1">
        通知公告
      </div>
      <div @click="goList" class="co-fs-01 co-cl-3">
        更多<i class="coicon coicon-enter co-fs-01" ></i>
      </div>
    </div>
    <div class="notice-list">
      <div class="notice-list-item co-flex co-jc co-bd-b co-ver" v-for="notice in noticeList.slice(0, 4)" :key="notice.id">
        <div class="co-flex co-te">{{notice.title}}</div>
        <div class="co-mg-t04 co-cl-2 co-fs-01">{{notice.time}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notice',
  components: {
  },
  props: {
    noticeList: {
      type: Array,
      default: () => {
        return []
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
    goList () {
      this.$router.push('/noticeList')
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .notice {
    padding: 0 40px 20px;
    .notice-list {
      margin-top: 20px;
    }
    .notice-list-item {
      height: 144px;

    }
  }
</style>
