/**
 * @description 起始页场馆列表
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div>
   <div @click="goMain" class="co-pd-a08 co-bg-5 co-tx-c co-cl-0 co-mg-a06">场馆一</div>
   <div @click="goMain" class="co-pd-a08 co-bg-5 co-tx-c co-cl-0 co-mg-a06">场馆二</div>
   <div @click="goMain" class="co-pd-a08 co-bg-5 co-tx-c co-cl-0 co-mg-a06">场馆三</div>
  </div>
</template>

<script>
export default {
  name: 'VenueList',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    goMain () {
      this.$router.push('/container')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
