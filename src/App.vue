<template>
  <div>
    <header class="header">
      <router-link to="/" class="header--link">トップ</router-link>
      <router-link to="/about" class="header--link">詳細</router-link>
      <router-link to="/login" class="header--link">ログイン</router-link>
      <router-link to="/register" class="header--link">新規登録</router-link>
    </header>
    <router-view></router-view> 
  </div>
</template>

<style scoped>
.header {
  text-align: center;
  display: flex;
  justify-content: center;
}
.header--link {
  padding: 10px;
}
</style>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      email:"",
      password:""
    }
  },
  methods: {
    register(){
      axios.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAtN30m_7OBSzE-hxbRTjECNXWEDQ0zaPM",
      {
        email:this.email,
        password:this.password,
        returnSecureToken: true
      }
      ).then((response) => {
        console.log(response);
      });
      this.email= "";
      this.password= "";
    }
  }
}
</script>