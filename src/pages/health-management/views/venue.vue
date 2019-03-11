/**
 * @description 场馆
 * @author zhangli (zhangli@coracle.com)
 * @date 2019/03/07
 */

<template>
  <div class="co-f1 co-flex co-ver">
    <scroll-list ref="scroll">
      <div>
        <venue-type :venue-data = "placeList"></venue-type>
      </div>
    </scroll-list>
  </div>
</template>

<script>
import ScrollList from '@c/ScrollList'
import VenueType from '../components/layout/VenueType'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Venue',
  components: {
    ScrollList,
    VenueType
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('place', [
      'placeList'
    ])
  },
  methods: {
    ...mapActions('place', [
      'getPlaceList'
    ])
  },
  created () {
    this.getPlaceList()
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
