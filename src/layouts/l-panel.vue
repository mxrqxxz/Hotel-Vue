<template>
    <section class="l-panel">
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
        name: 'l-panel'
    }
</script>

<style>
    
</style>