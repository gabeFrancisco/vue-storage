<script setup>
import Header from '../components/Header.vue'
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