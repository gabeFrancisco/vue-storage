<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore';

const router = useRouter();
const userStore = useUserStore();
const username = ref("")
const password = ref("")

function login() {
    if (this.username === "" || this.password === "") {
        alert("Please enter all credentials data below!")
    }
    else {
        userStore.signin(username.value, password)
        router.replace('/dashboard/products')
    }
}

</script>

<template>
    <div class="container">
        <div class="login">
            <h3>Please enter you login credentials!</h3>
            <form action="">
                <div class="form-input">
                    <label for="">Username:</label>
                    <input type="text" v-model="username">
                </div>
                <div class="form-input">
                    <label for="">Password</label>
                    <input type="password" v-model="password">
                </div>
                <div class="buttons">
                    <button type="button" @click="login()" class="bg-blue text-white rounded">Submit!</button>
                    <a href="/">Home</a>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.login {
    border: 1px solid #eee;
    border-radius: 5px;
    padding: 1rem;
    margin-top: -7rem;
    /*box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px; */
}

.form-input {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    align-content: baseline;
}

.buttons {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
}
</style>