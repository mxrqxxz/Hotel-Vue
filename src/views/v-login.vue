<template>
    <l-login>
      <template #icon>
        <img src="../assets/login.png" alt="imagen login">
      </template>
      <template #default>
        <img @click="verPassword" class="ojo" src="../assets/ojo.png" alt="icono ojo">
        <c-text-field type="text" placeholder="username" v-model="username"/>
        <c-text-field type="password" placeholder="password" v-model="password" id="campoPassword" />
        <c-button @click="login" contenido="Login"/>
      </template>
    </l-login>
  </template>
  
  <script>
  import LLogin from '../layouts/l-login.vue';
  import CTextField from '@/components/c-text-field.vue';
  import CButton from '@/components/c-button.vue';
  
  export default {
    name: 'v-login',
    components: {
      LLogin,
      CTextField,
      CButton
    },
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      verPassword() {
        let password = document.getElementById('campoPassword');
        if (password.type === 'password') {
          password.type = 'text';
        } else {
          password.type = 'password';
        }
      },

      login(){
        // TODO: llamar al metodo de la store
        // pasando el username y el password a través de un objeto
      }
    }
  }
  </script>
  
  <style scoped>
  input {
    margin: 10px;
  }

  .ojo {
    max-width: 40px;
    margin-left: auto;
    margin-right: auto;
  }

  </style>