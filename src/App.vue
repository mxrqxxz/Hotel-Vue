<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { useStore } from 'vuex';


const store = useStore();
onMounted(() => {console.log(store)})
</script>

<template>
  <RouterView />
</template>
