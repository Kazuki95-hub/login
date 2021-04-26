<template>
    <div class= "container">
        <h2>プロフィール入力画面</h2>
        <form class= "profile-form">
            <div class="input-group">
                <label for="name">名前</label>
                <input type="text" v-model= "name">
            </div>
            <div class="input-group">
                <label for="birthday">誕生日</label>
                <input type="date" v-model= "date">
            </div>
            <div class="input-gruop">
                <label for="introduction">自己紹介</label>
                <input type="text" v-model= "introduction">
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>