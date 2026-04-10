<template>
  <div class="sidebar">
    <h2>Barra lateral</h2>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/el-contador">Contador</router-link></li>
      <li><router-link to="/lista-de-tareas">Lista de tareas</router-link></li>
      <li><router-link to="/saludos">Saludos</router-link></li>
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
