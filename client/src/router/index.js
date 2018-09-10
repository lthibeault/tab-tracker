import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import CreateSongs from '@/components/CreateSongs'
import ViewSong from '@/components/ViewSong/Index'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSongs
    },
    {
      path: '/song/:songID',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/song/:songID/edit',
      name: 'song-edit',
      component: EditSong
    },
    {
      path: '*',
      redirect: 'songs'
    }
  ]
})
