<template>
    <section class="l-main">
        <div class="parallax">
            <slot name="parallax"></slot>
        </div>
       <div class="header">
            <slot name="header"></slot>
       </div>
       <div class="content">
            <slot></slot>
       </div>
       <footer class="footer">
          <slot name="icons"></slot>
       </footer>
    </section>
 </template>

 <script>
    export default {
        name: 'l-main'
    }
</script>

<style>
    .l-main .parallax {
        z-index: -1;
        background-image: url("../assets/hotel1.jpg");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: fixed;
        padding-top: 70vh;
        height: 100vh;
        h1{
            width: 50%;
            margin-left: 50px;
        }
        p{
            width: 50%;
            margin-left: 50px;
        }
    }

    .l-main .parallax h1, .l-main .parallax p {
        background-color: white;
        margin: 10px;
        border-radius: 20px;
        padding-left: 10px;
        font-weight: 700;
    }

    .l-main .header {
        max-height: 30vh;
    }

    .l-main .content {
        display: flex;
    }
</style>