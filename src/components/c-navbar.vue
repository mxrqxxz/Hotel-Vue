<template>
    <nav>
        <ul>
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li>|</li>
            <li><RouterLink to="/reserva">Reserva</RouterLink></li>
            <li>|</li>
            <li><RouterLink to="/administracion">Administración</RouterLink></li>
        </ul>
    </nav>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: 'c-navbar',
    components: {
        RouterLink
    }
}
</script>

<style scoped>
    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    li {
        display: inline;
        padding-left: 50px;
        padding-right: 50px;
    }

    li:hover {
        text-decoration: underline;
        color: orange;
    }

    nav {
        border: 1px solid black;
    }

    a {
        text-decoration: none;
        color: black;
    }
</style>