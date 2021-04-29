import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import firebase from 'firebase/app';
import "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyC3hJFvulT-8vK4ZAd37WiZP7-mn3STuBk",
  authDomain: "test-8a927.firebaseapp.com",
  projectId: "test-8a927",
  storageBucket: "test-8a927.appspot.com",
  messagingSenderId: "1095396944587",
  appId: "1:1095396944587:web:e6bb2ec0af620e0564894e"
};

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

const firebaseApp = firebase.initializeApp(firebaseConfig);

const firestore =firebaseApp.firestore();
firestore.settings({ timestampsInSnapshots:true})

export default firestore;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
