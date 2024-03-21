<template>
    <l-panel>
      <template #header>
        <c-navbar />
      </template>
      <template #default>
        <h3>PANEL DE ADMINISTRACIÓN</h3>
        <br>
          <h1>Registro de reservas realizadas</h1>
          <c-registro v-for="registro in reservas" :key="registro.id" :datos="registro"/>
          <h3 v-if="reservas.length === 0">No hay reservas en este momento.</h3>
        <c-button @click="cargarReservas" contenido="Cargar reservas"/>
      </template>
    </l-panel>
  </template>
  
  <script>
  import LPanel from '../layouts/l-panel.vue';
  import CNavbar from '../components/c-navbar.vue';
  import CButton from '../components/c-button.vue';
  import CRegistro from '../components/c-registro.vue';
  import { mapGetters } from 'vuex';
  
  export default {
    name: 'v-reserva',
    components: {
      LPanel,
      CNavbar,
      CButton,
      CRegistro
    },
    methods: {
      cargarReservas() {
        this.$store.dispatch('reservas/getData'); 
      }
    },
    computed: {
      ...mapGetters('reservas', ['reservas'])
    },
    mounted() {
      this.cargarReservas();
    }
  }
  </script>
  
  <style scoped>
  </style>