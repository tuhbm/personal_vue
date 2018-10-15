import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index';
import  firebase from 'firebase'

Vue.config.productionTip = false

let config = {
    apiKey: "AIzaSyCLnECG5N1NAVw3fmEuwEKKjHfXt3w5lPE",
    authDomain: "vue-project-56bfb.firebaseapp.com",
    databaseURL: "https://vue-project-56bfb.firebaseio.com",
    projectId: "vue-project-56bfb",
    storageBucket: "vue-project-56bfb.appspot.com",
    messagingSenderId: "561682636729"
};

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user) => {
  console.log("로그인 정보가 변경되었습니다.");
  if (!user) {
    console.log("로그인이 필요합니다.");
    this.$router.replace('/login');
  } else{
    console.log("가입완료 -> "+user.email);
  }
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
