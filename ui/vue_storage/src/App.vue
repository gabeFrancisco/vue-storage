<script setup>
import Header from './components/Header.vue';

</script>

<template>
  <Header/>
  <div class="content">
    <RouterView/>

  </div>
</template>

<style scoped>
.content{
  padding: 2rem 3rem;
}
</style>


