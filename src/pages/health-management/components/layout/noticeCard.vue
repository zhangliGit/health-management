/**
 * @description 通知列表项
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="notice-card">
    <div class="notice-card-list co-bg-0 co-mg-t04" v-for="notice in noticeList" :key="notice.id">
      <div class="co-flex notice-card-title co-jsb co-bd-b">
        <span class="co-fs-1">{{notice.createName}}</span>
        <span class="co-cl-2">{{notice.time.substring(0, 10)}}</span>
      </div>
      <div class="co-flex co-pd-t05">
        <div></div>
        <div class="co-f1">
          <div class="co-flex co-te">{{notice.title}}</div>
          <div class="co-cl-3 co-fs-01 co-mg-t04 co-line-2">
            {{notice.content.substring(0, 80)}}...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NoticeCard',
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
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .notice-card {
    .notice-card-list {
      padding: 30px;
      &:first-child {
        margin-top: 0px;
      }
    }
    .notice-card-title {
      padding-bottom: 25px;
    }
  }
</style>
