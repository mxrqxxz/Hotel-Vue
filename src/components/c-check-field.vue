<template>
    <input class="c-check-field" v-bind="$attrs" @input="updateValue">
</template>

<script>
export default {
    name: 'c-check-field',
    props: {
        modelValue: {
            type: Boolean,
            default: false,
            required: true
        }
    },
    methods: {
        updateValue() {
            this.$emit('update:modelValue', !this.modelValue);
        }
    }
}
</script>

<style scoped>
.c-check-field {
    border: 1px solid black;
    border-radius: 10px;
}

input {
    display: block;
    margin-left: 5px;
    margin-right: 5px;
    padding-left: 10px;
}
</style>