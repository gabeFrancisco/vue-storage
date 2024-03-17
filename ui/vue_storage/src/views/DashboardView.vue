<script setup>
import Header from '../components/Header.vue'
import { onBeforeMount, onMounted, watch } from 'vue';
import { useUserStore } from '../store/userStore';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const store = useUserStore();
const router = useRouter();
const { isLogged } = storeToRefs(store)

onBeforeMount(() => {
  const user = localStorage.getItem('user')
  alert(user != null)
  if (user) {
    store.loadUser();
  }
  else{
    router.replace('/')
    store.signout();
  }
})
</script>

<template>
    <div class="dashboard">

        <Header />
        <div class="content">
            <router-view />
        </div>
    </div>
</template>

<style scoped>
.content {
    padding: 2rem 3rem;
}
</style>