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
        this.$store.dispatch('users/login', {user: this.username, password: this.password}).then(
          this.$router.push('/administracion')
        );
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