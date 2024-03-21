<template>
    <section class="l-form">
        <div class="header">
            <slot name="header"></slot>
       </div>
       <div class="content">
            <slot></slot>
       </div>
       <div class="button">
            <slot name="button"></slot>
       </div>
    </section>
 </template>

 <script>
    export default {
        name: 'l-form'
    }
</script>

<style>
    .l-form {
        display: block;
        padding: 20px;
        border: 1px solid black;
        border-radius: 10px;
        margin: 20px;
        box-shadow: 0px 0px 10px black;
    }

    .header {
        text-align: center;
        padding-bottom: 20px;
    }

    .content {
        padding-bottom: 20px;
    }

    .button {
        text-align: center;
    }
    
</style>