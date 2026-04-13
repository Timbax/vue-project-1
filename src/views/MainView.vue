<template>
  <HeaderComponent :mensaje="texto"/>
  <div class="container">
    <SidebarComponent />
    <div class="content">
      <RouterView></RouterView>
      <input type="text" v-model="texto" />
    </div>
  </div>
</template>

<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
import HeaderComponent from "../components/HeaderComponent.vue";
import { ref } from "vue";

const texto = ref("");
</script>

<style scope>
.container {
  display: flex;
}
.content {
  flex: 1%;
  margin: 5rem;
}
</style>
