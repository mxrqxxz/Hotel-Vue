<template>
    <input class="c-text-field" v-bind="$attrs" @input="updateValue" :value="modelValue">
</template>

<script>
export default {
    name: 'c-text-field',
    props: {
        modelValue: {
            type: String,
            default: '',
            required: true
        }
    },
    methods: {
        updateValue(event) {
            this.$emit('update:modelValue', event.target.value);
        }
    }
}
</script>

<style>
.c-text-field {
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