import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { firestorePlugin } from 'vuefire'
import firebase from 'firebase'
import 'firebase/firestore'

Vue.use(firestorePlugin)
firebase.initializeApp({
  apiKey: "AIzaSyBA65WosCaoIhK6gjUmRJTY7Pif2r0k2kc",
  authDomain: "yachi-sample.firebaseapp.com",
  databaseURL: "https://yachi-sample.firebaseio.com",
  projectId: "yachi-sample",
  storageBucket: "yachi-sample.appspot.com",
  messagingSenderId: "179725569178",
  appId: "1:179725569178:web:622de2cd87082093a0a323",
  measurementId: "G-Z4FE2N7D2Z"
})
export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
