<template>
  <l-main>
    <template #parallax>
      <h1>HOTEL NEORIS</h1>
      <p>EL HOTEL QUE DESEAS</p>
    </template>
    <template #header>
      <c-navbar/>
    </template>
    <template #default>
      <c-basiccard>
        <h1>Tu tranquilidad, nuestro objetivo</h1>
        <p>Contamos con habitaciones insonorizadas para evitar que otros inquilinos te molesten.</p>
      </c-basiccard>
      <c-basiccard>
        <h1>Nuestro personal a su disposición</h1>
        <p>Para garantizar nuestro objetivo es primordial contar con un equipo de especialistas con alta experiencia en el sector.</p>
      </c-basiccard>
    </template>
  </l-main>
</template>

<script>
  import LMain from '../layouts/l-main.vue';
  import CNavbar from '../components/c-navbar.vue';
  import CBasiccard from '../components/c-basiccard.vue';
  

  export default {
    name: 'v-main',
    components: {
      LMain,
      CNavbar,
      CBasiccard
    },
  }
</script>