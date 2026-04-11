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
import { ref, watch, watchEffect } from "vue";
import { RouterLink } from "vue-router";
import { useRegistrarStore } from "../modules/registro/stores/registrarStore";
const registrarStore = useRegistrarStore();

const nombre = ref(registrarStore.nombre.value);
const email = ref(registrarStore.email.value);

// ============================================================
// OPCIÓN 1: watch con getter function (función flecha)
// ============================================================
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

// ============================================================
// ALTERNATIVA: watch con opciones avanzadas
// ============================================================
// watch(
//   () => registrarStore.nombre,
//   (newValue) => {
//     nombre.value = newValue;
//   },
//   { deep: true } // Para objetos anidados
// );

// ============================================================
// OPCIÓN 3: watchEffect (ALTERNATIVA CORRECTA)
// ============================================================
// watchEffect es diferente a watch:
// - NO requiere especificar qué observar
// - Automáticamente detecta todas las dependencias reactivas usadas
// - Se ejecuta cada vez que cambia cualquier dependencia
// - Útil para efectos secundarios complejos
//
// SINTAXIS CORRECTA:
// watchEffect(() => {
//   // El código aquí accede a propiedades reactivas
//   // Vue automáticamente detecta qué está siendo usado
//   // Si registrarStore.nombre cambia, este efecto se ejecuta
//   nombre.value = registrarStore.nombre;
//   email.value = registrarStore.email;
// });
//
// VENTAJAS de watchEffect:
// ✓ No necesitas especificar dependencias manualmente
// ✓ Código más limpio para múltiples dependencias
// ✓ Acceso directo a los valores (no necesita getter function)
// ✓ Ideal para sincronizar múltiples valores a la vez
//
// DESVENTAJAS de watchEffect:
// ✗ No tienes acceso al valor anterior (no hay newValue ni oldValue)
// ✗ Se ejecuta automáticamente en la creación del componente
// ✗ Menos control sobre cuándo se ejecuta
//
// NOTA: Para este caso de uso, watch es mejor porque:
// - Necesitas control sobre cada propiedad individualmente
// - watchEffect sería overkill para sincronización simple
// - watch es más explícito y fácil de entender
// ============================================================
</script>
<style scope>
.sidebar {
  width: 200px;
  background-color: aquamarine;
  padding: 20px;
}
</style>
