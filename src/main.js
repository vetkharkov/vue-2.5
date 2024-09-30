import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
// import { initializeApp } from 'firebase/app'
import * as firebase from 'firebase/app'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>',
  created() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDmAQU6EaqDNK-bVOeCwmxDoSTBsMzPW_8',
      authDomain: 'it-project-1c93c.firebaseapp.com',
      databaseURL: 'https://it-project-1c93c-default-rtdb.europe-west1.firebasedatabase.app',
      projectId: 'it-project-1c93c',
      storageBucket: 'it-project-1c93c.appspot.com',
      messagingSenderId: '14050287136',
      appId: '1:14050287136:web:6adc09b1f5028c2f062645'
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })

    this.$store.dispatch('fetchAds')
  }
})
