import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';




// const firebaseConfig = {
//     apiKey: "AIzaSyAtN30m_7OBSzE-hxbRTjECNXWEDQ0zaPM",
//     authDomain: "login2-83980.firebaseapp.com",
//     projectId: "login2-83980",
//     storageBucket: "login2-83980.appspot.com",
//     messagingSenderId: "855258455062",
//     appId: "1:855258455062:web:b03531de7e2e0da2c76937"
// };

Vue.prototype.$axios = axios;
Vue.config.productionTip = false

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const firestore =firebaseApp.firestore();
// firestore.settings({ timestampsInSnapshots:true})

// export default firestore;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
