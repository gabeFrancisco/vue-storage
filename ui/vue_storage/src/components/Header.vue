<script setup>

import { onBeforeMount } from 'vue';
import { useUserStore } from '@/store/userStore';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

onBeforeMount(() => {
    userStore.loadUser();
})

function handleSignout() {
    userStore.signout();
    router.replace("/")
}
</script>

<template>
    <header>
        <div class="header-nav">
            <div>
                <h3>
                    Vue Storage
                </h3>
            </div>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/dashboard/products">Products</router-link></li>
            </ul>
        </div>
        <div class="header-nav">
            <small>Bem vindo {{ userStore.user?.username }}</small>
            <button @click="handleSignout()" class="text-white bg-green rounded">Logout</button>
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px 2rem;
    border-bottom: 1px solid #ddd;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    background-image: linear-gradient(to right,
            #251cff,
            #023cff,
            #0051ff,
            #0063ff,
            #2372ff,
            #0083ff,
            #0091ff,
            #009fff,
            #00aef6,
            #00b8e3,
            #00bfca,
            #41c4b2);
    color: white
}

header ul {
    list-style: none;
    display: flex;
    flex-direction: row;
}

header ul li {
    margin: 0 7px;
}

header ul li a {
    color: white;
}

header h3 {
    font-weight: bolder;
}

header .header-nav {
    display: flex;
    flex-direction: row;
    align-content: baseline;
    align-items: center;
}

button {
    margin: 0 0 0 1rem;
}
</style>