<template>
    <section class="l-login">
       <div class="icon">
            <slot name="icon"></slot>
       </div>
       <div class="content">
            <slot></slot>
       </div>
    </section>
 </template>

 <script>
    export default {
        name: 'l-login'
    }
</script>

<style>
    .l-login{
        display: flex;
        margin-left: 30%;
        margin-top: 25vh;
        height: 50vh;
        width: 40%;
        border-radius: 20px;
        box-shadow: 0px 0px 40px black;
    }

    .l-login .icon{
        margin-right: 20px;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .l-login .content{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>