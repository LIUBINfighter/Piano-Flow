import Vue from 'vue'
import Router from 'vue-router'

import {
  Pieces,
  Piece,
  About
} from './views'

import MidiUploader from './components/MidiUploader'

Vue.use(Router)

const routes = [
  // Redirect
  { path: '/', redirect: { name: 'pieces' } },

  // Routes
  { path: '/pieces', name: 'pieces', component: Pieces },
  { path: '/pieces/:id', name: 'piece', components: { default: Pieces, game: Piece } },
  { path: '/about', name: 'about', component: About },
  { path: '/upload', name: 'upload', component: MidiUploader }
]

export default new Router({
  routes: routes
})
