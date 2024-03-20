<template>
    <nav>
        <ul>
            <li>Home</li>
            <li>|</li>
            <li>Reserva</li>
            <li>|</li>
            <li>Zona administrativa</li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'c-navbar',
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
</style>