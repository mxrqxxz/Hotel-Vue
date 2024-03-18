<script setup>
import { RouterView } from 'vue-router';
import logoWeb from './components/c-logoweb.vue';
</script>

<template>
  <header>
    <logoWeb/>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  max-height: 20vh;
  background-color: rgb(100, 100, 100);
}
</style>./components/c-logoweb.vue
