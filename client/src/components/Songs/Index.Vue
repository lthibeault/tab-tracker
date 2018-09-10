<template>
  <v-layout>
    <v-flex xs9>
      <songs-search-panel></songs-search-panel>
      <songs-panel class="mt-2"></songs-panel>
    </v-flex>
    </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import SongsPanel from './SongsPanel'
import SongsSearchPanel from './SongsSearchPanel'

export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    // Backend request to populate Song Data
    // TODO: Remember to do '.data when fetching Data from API'
    this.songs = (await SongsService.index()).data
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding:20px;
  height:330px;
  overflow:hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
    font-size: 18px;
  }

.album-image{

  height:50%;
  margin: 0 auto;
}

</style>
