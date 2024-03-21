<template>
    <button>{{ contenido }}</button>
</template>

<script>
    export default {
        name: 'c-button',
        props: {
            contenido: {
                type: String,
                default: '',
                required: false
            }
        }
    }
</script>

<style scoped>
    button {
        padding: 7px;
        border: none;
        border-radius: 10px;
        background-color: #000;
        color: #fff;
        cursor: pointer;
    }
</style>