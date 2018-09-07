import Api from '@/services/Api'

export default {
  index () {
    return Api().get('songs')
  },
  show (songID) {
    return Api().get(`songs/${songID}`)
  },
  post (song) {
    return Api().post('songs', song)
  }
}
