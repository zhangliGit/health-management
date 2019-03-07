<template>
  <div>
   <div @click="goMain" class="co-pd-a08 co-bg-5 co-tx-c co-cl-0 co-mg-a06">场馆一</div>
   <div @click="goMain" class="co-pd-a08 co-bg-5 co-tx-c co-cl-0 co-mg-a06">场馆二</div>
   <div @click="goMain" class="co-pd-a08 co-bg-5 co-tx-c co-cl-0 co-mg-a06">场馆三</div>
  </div>
</template>

<script>
export default {
  name: 'venueList',
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
