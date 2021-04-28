<template>
<div class="container">
  <h2>ログイン</h2>
  <form class="login-form">
    <div class="input-group">
      <label for="email">メールアドレス</label>
      <input type="email" id="email" v-model= "email">
    </div>
    <div class="input-group">
      <label for="password">パスワード</label>
      <input type="password" id="password" v-model= "password">
    </div>
    <div class="input-group">
      <button type="button" @click= "login()">ログイン</button>
    </div>
    <modalfailed v-if= "showmodal"></modalfailed>
  </form>
</div>

</template>

<style>
.input-group {
  margin: 5px;
}
</style>
<script>
import modalfailed from '../components/modalfailed.vue';
import axios from '../axios-signin-auth';
export default {
  components:{modalfailed},
  data(){
    return {
      showmodal: false,
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      axios.post(
        '/accounts:signInWithPassword?key=AIzaSyAtN30m_7OBSzE-hxbRTjECNXWEDQ0zaPM',
        {
          email:this.email,
          password:this.password,
          returnSecureToken: true
        }
      ).then((response) => {
        this.$store.commit('updateIdToken', response.data.idToken)
        this.$router.push({ name:'profile'});
        console.log(response)
      }).catch(() => {
        this.showmodal= true;
      });
      this.email= "";
      this.password= "";
    }
  }
}
</script>
