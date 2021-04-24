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
      <p v-if = "again">もう一度入力してください</p>
    </div>
  </form>
</div>
</template>

<script>
import modal from '../components/modal.vue';
import axios from '../axios-for-auth';
export default {
    components:{modal},
    data(){
        return {
            showModal:false,
            email:"",
            password:"",
            again:false,
        }
    },
    methods: {
        register(){
          try{
            axios.post(
                '/accounts:signUp?key=AIzaSyAtN30m_7OBSzE-hxbRTjECNXWEDQ0zaPM',
            {
                email:this.email,
                password:this.password,
                returnSecureToken: true
            }
            ).then((response) => {
                this.showModal=true;
                console.log(response);
            })} catch (error) {
                this.again=true;
            }
            this.email= "";
            this.password= "";
        },
    }
}
</script>
