<template>
  <div class="co-f1 co-flex co-ver">
    <scroll-list ref="scroll">
      <venue-type :venue-data = "venueData"></venue-type>
    </scroll-list>
  </div>
</template>

<script>
import ScrollList from '@c/ScrollList'
import VenueType from '../components/layout/venueType'
export default {
  name: 'venue',
  components: {
    ScrollList,
    VenueType
  },
  data () {
    return {
      venueData: [
        {
          id: 0,
          icon: 'coicon-flip',
          name: '羽毛球',
          total: '30',
          use: '15',
          time: '10:00-22:00'
        }
      ]
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
