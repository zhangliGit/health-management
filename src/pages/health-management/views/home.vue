<template>
  <div class="co-f1 co-flex co-ver">
    <scroll-list ref="scroll">
      <banner></banner>
      <person-card></person-card>
      <notice></notice>
    </scroll-list>
  </div>
</template>

<script>
import HeaderCom from '@c/HeaderCom'
import ScrollList from '@c/ScrollList'
import banner from '../components/layout/banner'
import personCard from '../components/layout/personCard'
import notice from '../components/layout/notice'
export default {
  name: 'home',
  components: {
    HeaderCom,
    ScrollList,
    banner,
    personCard,
    notice
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

<style scoped>
</style>
