<template>
  <div class="notice-card co-bg-0">
    <div class="notice-card-list" v-for="notice in noticeList" :key="notice.id">
      <div class="co-flex notice-card-title co-jsb co-bd-b">
        <span>{{notice.send}}</span>
        <span>{{notice.time}}</span>
      </div>
      <div class="co-flex co-pd-t05">
        <div></div>
        <div class="co-f1">
          <div class="co-flex co-te">{{notice.title}}</div>
          <div class="co-cl-3 co-line-1">
            {{notice.content}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'noticeCard',
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
    padding: 30px;
    .notice-card-list {
      padding-top: 30px;
      &:first-child {
        padding-top: 0px
      }
    }
    .notice-card-title {
      padding: 25px 0px
    }
  }
</style>
