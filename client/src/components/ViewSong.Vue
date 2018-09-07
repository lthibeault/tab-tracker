<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Song">
        
      </panel>
    </v-flex>
    </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
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
  width: 70%;
  margin: 0 auto;
}

</style>
