<script setup>

import { useUserStore } from '@/store/userStore';
import { useRouter } from 'vue-router';

const store = useUserStore();
const router = useRouter();

// const { isLogged } = store
// if(isLogged){
//     router.replace("/dashboard/products")
// }


</script>

<template>
    <div class="home">
        <h1>Welcome to Vue Storage!</h1>
        <hr />
        <br />
        <h3>Hello! I made this app for Vue.JS studies. I covered all the offical Vue docs!</h3>

        <br />
        <p>This study will cover Composition API, Vue Router, Forms, Pinia state management and Fetch API.</p>
        <p>With these resources in mind, I made a complete CRUD app for a shop product management.</p>

        <br />
        <h3>To use the whole app, you need to sign in<a href="/login">here!</a></h3>
        {{ JSON.stringify(store) }}

    </div>
</template>

<style scoped>
.home {
    padding: 2rem 5rem;
}
</style>