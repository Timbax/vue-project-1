<template>
  <h1>{{ contador }}</h1>
  <div>
    
  </div>
  <button @click="incrementar">Incrementar</button>
  <button @click="restar">Restar</button>
</template>

<script setup>
import { ref } from "vue";

const contador = ref(0);
const incrementar = ()=>{contador.value++}
const restar =()=>{contador.value--}
</script>

<style scoped></style>
