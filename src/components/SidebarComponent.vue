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
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useRegistrarStore } from "../modules/registro/stores/registrarStore";

const registrarStore = useRegistrarStore();

// Usando computed para crear referencias reactivas que se actualizan automáticamente
const nombre = computed(() => registrarStore.nombre);
const email = computed(() => registrarStore.email);
</script>
<style scope>
.sidebar {
  width: 200px;
  background-color: aquamarine;
  padding: 20px;
}
</style>
