<template>
    <section class="l-form">
        <div class="header">
            <slot name="header"></slot>
       </div>
       <div class="content">
            <slot></slot>
       </div>
    </section>
 </template>

 <script>
    export default {
        name: 'l-form'
    }
</script>

<style>
</style>