<template>
  <div class="notice">
    <div class="notice-head co-flex co-ac">
      <div class="co-f1 co-fs-2">
        通知公告
      </div>
      <div @click="noticeList">
        更多<i class="coicon coicon-enter co-fs-1" ></i>
      </div>
    </div>
    <div class="notice-list">
      <div class="notice-list-item co-flex co-jc co-bd-b co-ver">
        <div>泛亚新园区场馆投入使用</div>
        <div class="co-mg-t04">2018-10-20</div>
      </div>
      <div class="notice-list-item co-flex co-jc co-bd-b co-ver">
        <div>泛亚新园区场馆投入使用</div>
        <div class="co-mg-t04">2018-10-20</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'notice',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    noticeList () {
      this.$router.push('/noticeList')
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .notice {
    padding: 0 40px;
    .notice-list {
      margin-top: 20px;
    }
    .notice-list-item {
      height: 144px;

    }
  }
</style>
