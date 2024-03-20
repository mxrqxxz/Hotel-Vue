<template>
    <section class="card">
        <slot></slot>
    </section>
</template>
<script>
    export default {
        name:'c-basiccard'
    }
</script>
<style scoped>
    .card {
        border: 2px solid black;
        width: 40%;
        padding: 20px;
        margin: 50px 5% 50px 5%;
        border-radius: 10px;
        box-shadow: 0px 0px 20px #888888;
    }
</style>