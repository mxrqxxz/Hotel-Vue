<template>
  <c-navbar />
  <l-form>
    <template #header>
      <h3>Complete el siguiente formulario para poder llevar a cabo su reserva</h3>
    </template>
    <template #default>
      <form @submit.prevent="enviar">
        <div>
          <label for="nombre">Nombre: </label>
          <c-text-field name="nombre" type="text" v-model="nombre" />
          <label for="apellido">Apellido: </label>
          <c-text-field name="apellido" type="text" v-model="apellido" />
          <label for="email">Email: </label>
          <c-text-field name="email" type="email" v-model="email" />
          <label for="telefono">Teléfono: </label>
          <c-text-field name="telefono" type="number" v-model="telefono" />
        </div>
        <div>
          <label for="fecha">Fecha: </label>
          <c-text-field name="fecha" type="date" v-model="fecha" />
          <label for="hora">Hora: </label>
          <c-text-field name="hora" type="time" v-model="hora" />
          <label for="personas">Cantidad de personas: </label>
          <c-text-field name="personas" type="number" v-model="personas" />
          <label for="comentarios">Comentarios: </label>
          <c-text-field name="comentarios" type="text" v-model="comentarios" />
        </div>
        <br>
        <label for="servicio">Servicio</label>
        <br><br>
        <c-radio-field v-model="servicio" name="servicio" type="radio" value="basico" checked/>
        <span>Básico</span>
        <c-radio-field v-model="servicio" name="servicio" type="radio" value="completo" />
        <span>Completo</span>
        <br><br>
        <label>Extras</label>
        <br><br>
        <c-check-field v-model="parking" name="parking" type="checkbox" />
        <label for="parking">Parking</label>
      </form>
    </template>
    <template #button>
      <c-button @click="enviar" contenido="Enviar" />
      <br><br><br>
      <h3 :class="fraseClases" v-if="enviado">Gracias por su reserva!</h3>
      <h3 :class="fraseClases" v-else>Reserva mientras puedas!</h3>
    </template>
  </l-form>
</template>

<script>
import LForm from '../layouts/l-form.vue';
import CNavbar from '../components/c-navbar.vue';
import CTextField from '../components/c-text-field.vue';
import CButton from '../components/c-button.vue';
import CRadioField from '../components/c-radio-field.vue';
import CCheckField from '../components/c-check-field.vue';

export default {
  name: 'v-reserva',
  components: {
    LForm,
    CNavbar,
    CTextField,
    CButton,
    CRadioField,
    CCheckField
  },
  data() {
    return {
      enviado: false,
      nombre: '',
      apellido: '',
      email: '',
      telefono: '',
      fecha: '',
      hora: '',
      personas: '',
      comentarios: '',
      servicio: 'basico',
      parking: false
    }
  },
  methods: {

    enviar() {
      this.$store.dispatch('reservas/sendData', {
        nombre: this.nombre,
        apellido: this.apellido,
        email: this.email,
        telefono: this.telefono,
        fecha: this.fecha,
        hora: this.hora,
        personas: this.personas,
        comentarios: this.comentarios,
        servicio: this.servicio,
        parking: this.parking
      });
      this.enviado = true;
    }
  },
  computed: {
    fraseClases() {
      return {
        verde: this.enviado,
        rojo: !this.enviado
      };
    }
  },
  watch: {
    enviado() {
      // Por si quiere realizar otra reserva
      setTimeout(() => {
        this.enviado = false;
      }, 3000);
    },
    fecha() {
      let fechaReserva = new Date(this.fecha);
      let fechaHoy = new Date();
      if (fechaReserva < fechaHoy) {
        alert('La fecha no puede ser anterior a la actual');
        this.fecha = '';
      }
    }
  }
}
</script>

<style scoped>

div {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.rojo {
  color: red;
  font-style: oblique;
}

.verde {
  color: green;
  font-style: oblique;
}

input[type="radio"],
input[type="checkbox"] {
  margin-left: 10px;
  margin-right: 10px;
  display: inline-block;
}
</style>