<template>
    <c-basiccard>
        <h3>Datos de la reserva</h3>
        <br>
        <p v-for="(value, key, index) in datos" :key="index" v-show="value != ''"> {{ key }}: {{ value }}</p>
        <!--
        <p v-show="datos.nombre != ''">Cliente: {{ datos.nombre }} {{ datos.apellido }}</p>
        <p v-show="datos.telefono != ''">Telefono: {{ datos.telefono }}</p>
        <p v-show="datos.servicio != ''">Servicio: {{ datos.servicio }}</p>
        <p v-show="datos.parking">Parking: {{ datos.parking }}</p>
        <p v-show="datos.email != ''">Email: {{ datos.email }}</p>
        <p v-show="datos.fecha != ''">Fecha: {{ datos.fecha }}</p>
        <p v-show="datos.hora != ''">Hora: {{ datos.hora }}</p>
        <p v-show="datos.personas != ''">Personas: {{ datos.personas }}</p>
        <p v-show="datos.comentario != ''">Observaciones: {{ datos.comentario }}</p>
        -->
    </c-basiccard>
</template>

<script>
import CBasiccard from './c-basiccard.vue';
export default {
    name: 'c-registro',
    components: {
        CBasiccard
    },
    props: {
        datos: {
            type: Object,
            required: true
        }
    }
}
</script>

<style></style>