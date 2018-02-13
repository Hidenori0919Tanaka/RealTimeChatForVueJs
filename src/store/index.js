import Vue from 'vue'
import Vuex from 'vuex'
import 'babel-polyfill'
import firebase from 'firebase'
import 'firebase/firestore'
import config from '../config'
firebase.initializeApp(config)
Vue.use(Vuex)
  const state = {
  db: firebase.firestore()
}
export default new Vuex.Store({
  state,
  modules: {}
})