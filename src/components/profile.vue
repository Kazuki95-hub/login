<template>
    <div class= "container">
        <h2>プロフィール入力画面</h2>
        <form class= "profile-form">
            <div class="input-group">
                <label for="name">名前</label>
                <input type="text" v-model= "name">
                <button @click= "submit()">プロフ登録</button>
            </div>
            <!-- <div class="input-group">
                <label for="birthday">誕生日</label>
                <input type="date" v-model= "date">
            </div>
            <div class="input-gruop">
                <label for="introduction">自己紹介</label>
                <input type="text" v-model= "introduction">
            </div> -->
        </form>
        
        <div class="output" v-if= "inputDocRef != ''">
            <span>Output Text : {{ output }}</span>
            <button @click = "get()">Get</button>
        </div>
        <div class="output" v-if= "inputDocRef != ''">
            <span>Output Text:{{ output }}</span>
            <button v-on:click= "get()">Get</button>
        </div>
    </div>
</template>

<script>
    import firebase from 'firebase/app';
    export default {
        data(){
            return {
                input:"",
                name:"",
                date:"",
                introduction:"",
                output:'',
                inputDocRef : '', 
            }
        },
        methods:{
            submit(){
                const config = {
                    apikey: "AIzaSyAtN30m_7OBSzE-hxbRTjECNXWEDQ0zaPM",
                    authDomain:"login2-83980.firebaseapp.com",
                    projectId:"login2-83980",
                };
                const app = firebase.initializeApp(config);
                const db = firebase.firestore(app);

                let self = this;
                db.collection("test1")
                .add({
                    text:this.input,
                })
                .then(function(docRef){
                    console.log("完了");
                    self.inputDocRef = docRef.id;
                })
                .catch(function(error){
                    console.error("失敗",error);
                });
            },
        }
    }
</script>

<style scoped>
</style>