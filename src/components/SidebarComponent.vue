<template>
  <div class="sidebar">
    <h2>Bienvenido</h2>
    <h4>Hola:{{ nombre }}</h4>
    <h4>Tu Correo es: {{ email }}</h4>
    <ul>
      <li><RouterLink to="/">Inicio</RouterLink></li>
      <li><RouterLink to="/el-contador">Contador</RouterLink></li>
      <li><RouterLink to="/lista-de-tareas">Lista de tareas</RouterLink></li>
      <li><RouterLink to="/saludos">Saludos</RouterLink></li>
      <li><RouterLink to="/registrar">Registro</RouterLink></li>
    </ul>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
import { RouterLink } from "vue-router";
import { useRegistrarStore } from "../modules/registro/stores/registrarStore";

const registrarStore = useRegistrarStore();
const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);

// OPCIÓN 1: watch con getter function (función flecha)
// Observa cambios en registrarStore.nombre
watch(
  () => registrarStore.nombre,
  (newValue) => {
    nombre.value = newValue;
  }
);

// OPCIÓN 2: watch con getter function para email
watch(
  () => registrarStore.email,
  (newValue) => {
    email.value = newValue;
  }
);

// ALTERNATIVA: watch con opciones avanzadas
// watch(
//   () => registrarStore.nombre,
//   (newValue) => {
//     nombre.value = newValue;
//   },
//   { deep: true } // Para objetos anidados
// );
</script>
<style scope>
.sidebar {
  width: 200px;
  background-color: aquamarine;
  padding: 20px;
}
</style>
