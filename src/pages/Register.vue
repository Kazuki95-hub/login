<template>
<div class="container">
  <h2>新規登録</h2>
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
      <button type="button" @click= "register()" >新規登録</button>
      <modal v-if= "showModal" @close = "showModal = false"></modal>
      <modalfailed v-if= "showFailed"></modalfailed>
    </div>
  </form>
</div>
</template>

<script>

import modal from '../components/modal.vue';
import axios from '../axios-for-auth';
import modalfailed from '../components/modalfailed.vue';
export default {
    components:{modal, modalfailed},
    data(){
        return {
            showFailed:false,
            showModal:false,
            email:"",
            password:"",
        }
    },
    methods: {
        register(){
            axios.post(
                '/accounts:signUp?key=AIzaSyAtN30m_7OBSzE-hxbRTjECNXWEDQ0zaPM',
            {
                email:this.email,
                password:this.password,
                returnSecureToken: true
            }
            ).then((response) => {
                this.$store.commit('updateIdToken',response.data.idToken);
                // this.$router.push({ name:});
                this.showModal=true;
                this.showFailed= false;
                console.log(response);
            }).catch(() => {
              this.showFailed = true;
            })
            this.email= "";
            this.password= "";
        },
    }
}
</script>
