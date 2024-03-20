<template>
    <c-navbar/>
    <l-form>
        <template #header>
            <h3>Complete el siguiente formulario para poder llevar a cabo su reserva</h3>
        </template>
        <template #default>
            <form action="#">
                
            </form>
        </template>
    </l-form>
  </template>
  
  <script>
    import LForm from '../layouts/l-form.vue';    
    import CNavbar from '../components/c-navbar.vue';

    export default {
      name: 'v-reserva',
      components: {
        LForm,
        CNavbar
      },
    }
  </script>