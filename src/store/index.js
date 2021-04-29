import Vue from 'vue'
import Vuex from 'vuex'

import 'firebase/firestore';


Vue.use(Vuex)



export default new Vuex.Store({
  state: {
    idToken:null
  },
  mutations: {
    updateIdToken(state,idToken) {
      state.idToken = idToken;
    }
  },
  getters:{
    idToken: state => state.idToken
  },
})
