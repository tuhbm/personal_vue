import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index';
import * as firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  created () {
      firebase.initializeApp({
          apiKey: "AIzaSyCLnECG5N1NAVw3fmEuwEKKjHfXt3w5lPE",
          authDomain: "vue-project-56bfb.firebaseapp.com",
          databaseURL: "https://vue-project-56bfb.firebaseio.com",
          projectId: "vue-project-56bfb",
          storageBucket: "vue-project-56bfb.appspot.com",
          messagingSenderId: "561682636729"
      })
  }
}).$mount('#app')
