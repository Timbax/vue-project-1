<template>
  <div class="container">
    <SidebarComponent />
    <div class="content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import SidebarComponent from "../components/SidebarComponent.vue";
</script>

<style scope>
.container {
  display: flex;
}
.content {
  flex: 1%;
  padding: 20px;
}
</style>
