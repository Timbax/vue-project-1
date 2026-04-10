<template>
  <div class="sidebar">
    <h2>Barra lateral</h2>
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
import { RouterLink } from "vue-router";
</script>
<style scope>
.sidebar {
  width: 200px;
  background-color: aquamarine;
  padding: 20px;
}
</style>
