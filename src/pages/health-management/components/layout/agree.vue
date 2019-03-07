<template>
  <div>
     免责申明
    <div @click="agreed" class="co-pd-a08 co-tx-c co-bg-4 co-cl-0">确定</div>
  </div>
</template>

<script>
export default {
  name: 'agree',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
    agreed () {
      this.$emit('agreed')
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
