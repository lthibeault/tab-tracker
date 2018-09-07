<template>
  <panel title="Song Data">
    <v-layout>
      <v-flex xs 6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>
        <v-btn class="cyan accent-2"
          slot="action"
          :to="{ name: 'song-edit', params:{ songID: song.id }}"
          light
          small
          absolute
          :song="song"
          fab>
            <v-icon>edit</v-icon>
          </v-btn>
      </v-flex>
      <v-flex xs 6>
        <img class="album-image" :src="song.albumImage" /><br/>
        {{song.album}}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
import Panel from '@/components/Panel'

export default {
  props: [
    'song'
  ],
  components: {
    Panel
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding:20px;
  height:330px;
  overflow: hidden;
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
  width: 50%;
  margin: 0 auto;
}
textarea{
width:100%;
font-family:monospace;
border: none;
height: 600px;
border-style: none;
border-color: transparent;
overflow:auto;
padding: 20px;
}
</style>
